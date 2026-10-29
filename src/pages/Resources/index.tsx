import { useEffect, useRef, useState } from "react";
import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import CTABand from "../../components/ui/CTABand";
import { RESOURCES, type Resource } from "../../constants/insights";
import { COMPANY } from "../../content/site";
import { isValidEmail, submitForm } from "../../lib/submitForm";

type Status = "idle" | "loading" | "sent" | "emailed";

export default function Resources() {
  const [selected, setSelected] = useState<Resource | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = (res: Resource, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(res);
    setStatus("idle");
    setErrors({});
    setSubmitError("");
  };

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!selected) return;
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    const err: typeof errors = {};
    if (!name.trim()) err.name = "Please enter your name.";
    if (!isValidEmail(email)) err.email = "Please enter a valid email address.";
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setStatus("loading");
    const res = await submitForm("resource-request", { resource: selected.title, name, email, company });
    if (!res.ok) {
      setSubmitError(res.error ?? "");
      setStatus("idle");
      return;
    }
    setStatus(res.via === "endpoint" ? "sent" : "emailed");
  };

  return (
    <>
      <SEO
        title="Healthcare Advisory Resources"
        description="Guides, checklists and toolkits on hospital valuation, healthcare due diligence and investor readiness, prepared by Insight Thinkers Agency."
        keywords="healthcare M&A checklist, hospital valuation guide, investor readiness toolkit"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Healthcare Advisory Resources",
          description: "Advisory resources for healthcare exits, acquisitions and capital raises.",
        }}
      />
      <PageHero
        eyebrow="Resources"
        title={<>Toolkits for owners, <em className="text-bronze-ink">acquirers and investors.</em></>}
        lede="Practical guides and checklists drawn from our advisory work. Request a copy and we will send it to you."
      />

      <section aria-label="Resource library" className="section">
        <div className="container-x">
          <ul className="border-t border-navy">
            {RESOURCES.map((r, i) => (
              <li key={r.id} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-center md:gap-8">
                <span className="font-serif text-[1.1rem] text-bronze-ink md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="md:col-span-7">
                  <p className="meta">{r.type}</p>
                  <h2 className="mt-2 font-serif text-[1.5rem] leading-snug text-ink">{r.title}</h2>
                  <p className="mt-2 max-w-[40rem] text-[1rem] leading-relaxed">{r.description}</p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <button type="button" className="btn-outline" onClick={(e) => open(r, e.currentTarget)}>
                    Request a copy <span className="arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Need something specific?"
        title="Looking for guidance on a particular situation?"
        body="Our resources are a starting point. For advice on a specific transaction or capital raise, speak with us directly."
      />

      {selected && (
          <div className="animate-fade fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4">
            <div className="absolute inset-0 bg-navy-deep/50" onClick={close} aria-hidden="true" />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resource-dialog-title"
              className="animate-dialog relative max-h-[92vh] w-full max-w-[32rem] overflow-y-auto bg-paper p-6 shadow-[0_24px_60px_rgba(15,31,43,0.25)] sm:p-10"
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center text-[1.25rem] text-muted hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>

              {status === "sent" || status === "emailed" ? (
                <div aria-live="polite">
                  <p className="eyebrow mb-4">{status === "sent" ? "Request received" : "Almost done"}</p>
                  <h2 id="resource-dialog-title" className="h3">
                    {status === "sent" ? "Thank you — we’ll send it shortly." : "Please send the email that has just opened."}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-relaxed">
                    {status === "sent"
                      ? `We will email the ${selected.title} to ${email}.`
                      : `Your email app should show a pre-filled request to ${COMPANY.email}. Press send and we will reply with the ${selected.title}.`}
                  </p>
                  <button type="button" onClick={close} className="btn-primary mt-8">Close</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <div>
                    <p className="meta">{selected.type}</p>
                    <h2 id="resource-dialog-title" className="h3 mt-2">Request: {selected.title}</h2>
                  </div>
                  <div>
                    <label htmlFor="res-name" className="field-label">Full name *</label>
                    <input
                      ref={firstFieldRef}
                      id="res-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((er) => ({ ...er, name: undefined }));
                      }}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "res-name-err" : undefined}
                      className="field"
                    />
                    {errors.name && <p id="res-name-err" className="field-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="res-email" className="field-label">Work email *</label>
                    <input
                      id="res-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((er) => ({ ...er, email: undefined }));
                      }}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "res-email-err" : undefined}
                      className="field"
                    />
                    {errors.email && <p id="res-email-err" className="field-error">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="res-company" className="field-label">Organisation</label>
                    <input id="res-company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className="field" />
                  </div>
                  {submitError && <p role="alert" className="text-[0.9375rem] text-error">{submitError}</p>}
                  <button type="submit" disabled={status === "loading"} className="btn-primary mt-2 w-full">
                    {status === "loading" ? "Sending…" : "Request a copy"}
                  </button>
                  <p className="text-[0.8125rem] text-muted">We use these details to send the resource and may follow up once.</p>
                </form>
              )}
            </div>
          </div>
        )}
    </>
  );
}
