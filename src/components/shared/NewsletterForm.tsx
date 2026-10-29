import { useId, useState } from "react";
import { isValidEmail, submitForm } from "../../lib/submitForm";

/** Email sign-up used in the footer and exit-intent prompt. */
export default function NewsletterForm({ onDone, stacked }: { onDone?: () => void; stacked?: boolean }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    const res = await submitForm("newsletter", { email });
    if (!res.ok) {
      setError(res.error ?? "");
      setStatus("idle");
      return;
    }
    setStatus("done");
    setEmail("");
    onDone?.();
  };

  if (status === "done") {
    return (
      <p role="status" className="border-l-2 border-bronze pl-4 text-[0.9375rem]">
        Thank you — your request has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor={`${id}-email`} className="field-label">Work email</label>
      <div className={stacked ? "flex flex-col gap-2" : "flex"}>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          placeholder="name@company.com"
          className="field min-w-0 flex-1"
        />
        <button type="submit" disabled={status === "loading"} className="btn-bronze shrink-0 px-5">
          {status === "loading" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {error && <p id={`${id}-err`} className="field-error">{error}</p>}
    </form>
  );
}
