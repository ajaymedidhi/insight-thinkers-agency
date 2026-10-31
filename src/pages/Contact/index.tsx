import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import { COMPANY } from "../../content/site";
import { ENQUIRY_TOPICS } from "../../content/services";
import { isValidEmail, submitForm } from "../../lib/submitForm";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  website: string; // honeypot — must stay empty
}

type Errors = Partial<Record<keyof FormState, string>>;

const BLANK: FormState = { name: "", company: "", email: "", phone: "", topic: ENQUIRY_TOPICS[0], message: "", website: "" };

const CHANNELS = [
  { label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}`, note: "We aim to respond within 24 hours." },
  { label: "Phone / WhatsApp", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}`, note: "For time-sensitive conversations." },
  { label: "Office", value: COMPANY.location, note: `Active across ${COMPANY.coverage}.` },
];

export default function Contact() {
  // Service pages link here with ?topic=… so the enquiry starts in context.
  const [params] = useSearchParams();
  const requested = params.get("topic");
  const initial = requested && ENQUIRY_TOPICS.includes(requested) ? { ...BLANK, topic: requested } : BLANK;
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "emailed">("idle");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!isValidEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please tell us briefly what you would like to discuss.";
    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(v)[0]}"]`)?.focus();
      return;
    }
    if (form.website) {
      setStatus("sent"); // silently accept bot submissions
      return;
    }
    setStatus("loading");
    const res = await submitForm("enquiry", {
      name: form.name,
      company: form.company,
      email: form.email,
      phone: form.phone,
      topic: form.topic,
      message: form.message,
    });
    if (!res.ok) {
      setSubmitError(res.error ?? "");
      setStatus("idle");
      return;
    }
    setStatus(res.via === "endpoint" ? "sent" : "emailed");
  };

  const fieldProps = (name: keyof FormState) => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: "field",
  });

  const err = (name: keyof FormState) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="field-error">{errors[name]}</p>
    );

  return (
    <>
      <SEO
        title="Contact"
        description="Discuss an advisory mandate with Insight Thinkers Agency — healthcare M&A, capital raising, technology and growth advisory."
        keywords="contact healthcare M&A advisor, hospital sale advisor India, Insight Thinkers Agency contact"
      />

      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow animate-rise mb-6">Confidential Intake</p>
            <h1 className="display animate-rise text-[clamp(2.6rem,5.4vw,4.4rem)] text-ink">
              Discuss an <em className="text-bronze-ink font-normal">advisory mandate.</em>
            </h1>
            <p className="lede animate-rise mt-8 text-body">
              Whether evaluating a hospital exit, syndicating growth equity, or commissioning technology diligence, every conversation is held in absolute confidence.
            </p>

            <dl className="mt-12 border-t border-navy/30">
              {CHANNELS.map((c) => (
                <div key={c.label} className="border-b border-line py-5">
                  <dt className="meta text-bronze-ink">{c.label}</dt>
                  <dd className="mt-1.5 text-[1.1rem] font-serif text-ink">
                    {c.href ? <a href={c.href} className="underline decoration-bronze underline-offset-4 hover:decoration-navy">{c.value}</a> : c.value}
                  </dd>
                  <dd className="mt-1 text-[0.875rem] text-muted">{c.note}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border border-line bg-paper p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-bronze" />
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-bronze-ink">
                  Protocol Notice
                </span>
              </div>
              <p className="text-[0.875rem] leading-relaxed text-body">
                Please share only non-sensitive parameters in your preliminary message. A mutual Non-Disclosure Agreement (NDA) will be executed prior to financial or operational reviews.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-line bg-paper p-8 sm:p-12 shadow-sm" aria-live="polite">
              <div className="flex items-center justify-between border-b border-line pb-6 mb-8">
                <div>
                  <h2 className="font-serif text-[1.4rem] text-ink font-medium">Preliminary Mandate Intake</h2>
                  <p className="text-[0.8125rem] text-muted mt-1">Directly reviewed by firm principals</p>
                </div>
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-bronze-ink border border-bronze/40 px-2.5 py-1">
                  Confidential
                </span>
              </div>

              {status === "sent" || status === "emailed" ? (
                <div className="py-6">
                  <p className="eyebrow mb-5">{status === "sent" ? "Enquiry received" : "Almost done"}</p>
                  <h2 className="h3">
                    {status === "sent" ? "Thank you — we’ll be in touch shortly." : "Please send the email that has just opened."}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-relaxed">
                    {status === "sent" ? (
                      <>Your enquiry has reached us. For anything urgent, call <a className="underline underline-offset-4" href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>.</>
                    ) : (
                      <>
                        Your email app should now show a pre-filled message to us — press send to complete your enquiry. If nothing
                        opened, write to <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    className="btn-outline mt-8"
                    onClick={() => {
                      setForm(initial);
                      setStatus("idle");
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6">
                  <div>
                    <h2 className="h3">Send an enquiry</h2>
                    <p className="mt-2 text-[0.875rem] text-muted">Fields marked * are required.</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="field-label">Full name *</label>
                      <input {...fieldProps("name")} autoComplete="name" required />
                      {err("name")}
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="field-label">Organisation</label>
                      <input {...fieldProps("company")} autoComplete="organization" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="field-label">Email *</label>
                      <input {...fieldProps("email")} type="email" autoComplete="email" required />
                      {err("email")}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="field-label">Phone</label>
                      <input {...fieldProps("phone")} type="tel" autoComplete="tel" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-topic" className="field-label">Area of interest</label>
                    <select {...fieldProps("topic")}>
                      {ENQUIRY_TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="field-label">How can we help? *</label>
                    <textarea
                      {...fieldProps("message")}
                      rows={5}
                      required
                      placeholder="For example: sell-side or buy-side, type of asset, indicative size, timing."
                    />
                    {err("message")}
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input {...fieldProps("website")} tabIndex={-1} autoComplete="off" />
                  </div>

                  {submitError && <p role="alert" className="border-l-2 border-error pl-4 text-[0.9375rem] text-error">{submitError}</p>}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" disabled={status === "loading"} className="btn-primary shrink-0">
                      {status === "loading" ? "Sending…" : "Send enquiry"}
                    </button>
                    <p className="text-[0.8125rem] text-muted">We use these details only to respond to your enquiry.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
