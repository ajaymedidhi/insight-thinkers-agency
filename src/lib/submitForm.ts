import { COMPANY } from "../content/site";

export type FormKind = "enquiry" | "resource-request" | "newsletter";

export interface SubmitResult {
  ok: boolean;
  via?: "endpoint" | "email";
  error?: string;
}

/**
 * Optional form backend. Set VITE_FORM_ENDPOINT (e.g. a Formspree / Getform /
 * serverless URL that accepts JSON POSTs) in the deployment environment.
 * Without it, submissions fall back to opening the visitor's email client with
 * a pre-filled message to the firm, so no enquiry is silently discarded.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const SUBJECTS: Record<FormKind, string> = {
  enquiry: "Advisory enquiry",
  "resource-request": "Resource request",
  newsletter: "Insights subscription",
};

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export async function submitForm(kind: FormKind, fields: Record<string, string>): Promise<SubmitResult> {
  if (ENDPOINT) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ form: kind, _subject: SUBJECTS[kind], page: window.location.pathname, ...fields }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { ok: true, via: "endpoint" };
    } catch {
      return {
        ok: false,
        error: `We couldn't send your message. Please try again, or email us directly at ${COMPANY.email}.`,
      };
    }
  }

  const body = Object.entries(fields)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const subject = fields.topic ? `${SUBJECTS[kind]} — ${fields.topic}` : SUBJECTS[kind];
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { ok: true, via: "email" };
}
