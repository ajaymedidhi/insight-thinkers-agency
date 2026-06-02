import { useState } from "react";
import { Icons } from "./Icons";

interface FormState {
  name: string;
  org: string;
  email: string;
  phone: string;
  type: string;
  size: string;
  message: string;
}

export default function Contact() {
  const blank: FormState = {
    name: "",
    org: "",
    email: "",
    phone: "",
    type: "",
    size: "",
    message: "",
  };

  const [form, setForm] = useState<FormState>(blank);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Full name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please describe your enquiry";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eErrors = validate();
    if (Object.keys(eErrors).length) {
      setErrors(eErrors);
      return;
    }
    setStatus("loading");
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1900));
    setStatus("success");
  };

  return (
    <section id="contact" className="section bg-white border-t border-border-brand">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-[68px] items-start">
          {/* Left Column: Contact info */}
          <div className="animate-fade-up">
            <div className="eyebrow">Get in Touch</div>
            <h2 className="display-sm">Begin a <em>Confidential</em> Conversation.</h2>
            <p className="body-lg mt-5">
              Whether you are acquiring a healthcare asset, planning an exit, raising capital, deploying technology, or seeking a co-advisory arrangement — we welcome a discreet, no-obligation discussion. All enquiries are received by Vasanth S personally.
            </p>

            <div className="mt-7">
              {[
                { lbl: "Email", Icon: Icons.Mail, val: "info@insightthinkersagency.com", sub: "Responds within 24 hours" },
                { lbl: "Phone / WhatsApp", Icon: Icons.Phone, val: "+91 95812 71590", sub: "Available for priority conversations" },
                { lbl: "Region", Icon: Icons.Globe, val: "South India · Pan-India · Asia", sub: "Active across all major markets" },
                { lbl: "Confidentiality", Icon: Icons.Shield, val: "All enquiries under strict NDA protocol", sub: "No exceptions. No third-party disclosure." }
              ].map((c) => {
                const IconComp = c.Icon;
                return (
                  <div key={c.lbl} className="py-[22px] border-b border-border-brand first:pt-0">
                    <div className="font-mono text-[0.59rem] tracking-[0.2em] uppercase text-muted-light mb-[7px]">
                      {c.lbl}
                    </div>
                    <div className="flex items-center gap-[11px]">
                      <div className="w-[37px] h-[37px] bg-slate-light rounded-[9px] flex items-center justify-center text-ink shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[0.88rem] font-semibold text-ink">{c.val}</div>
                        <div className="text-[0.77rem] text-muted-brand mt-[2px]">{c.sub}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Promise Box */}
            <div className="bg-slate-brand border border-border-brand rounded-[13px] p-[26px] mt-6">
              <div className="text-[0.85rem] font-semibold text-ink mb-[13px]">Our Commitment to You</div>
              <div className="flex flex-col gap-[9px]">
                {[
                  "Every enquiry is received by Vasanth S personally — not a contact centre or junior associate",
                  "All discussions held under strict confidentiality, with NDA executed before any asset data is shared",
                  "We acknowledge every enquiry within 24 business hours, with a substantive response within 48 hours",
                  "If your mandate is outside our current focus, we will tell you clearly — we will not waste your time"
                ].map((p) => (
                  <div key={p} className="flex items-start gap-[9px] text-[0.81rem] text-muted-brand leading-[1.55]">
                    <div className="w-[18px] h-[18px] rounded-full bg-blue-brand flex items-center justify-center shrink-0 mt-[1px]">
                      <Icons.Chk className="w-[9px] h-[9px] text-white" />
                    </div>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="animate-fade-up delay-100">
            <div className="bg-white border border-border-brand rounded-[20px] p-[38px] shadow-sh1">
              {status === "success" ? (
                <div className="text-center py-[46px] px-5 animate-fade-in">
                  <div className="text-[2.8rem] mb-3.5">✅</div>
                  <div className="font-display text-[1.55rem] font-semibold text-ink mb-[9px]">Enquiry Received</div>
                  <p className="text-[0.88rem] text-muted-brand leading-[1.7] max-w-[320px] mx-auto">
                    Your enquiry has been logged under strict confidentiality. Vasanth will respond personally within 24 hours.<br /><br />
                    For urgent mandates, reach us directly at <strong className="text-ink font-semibold">+91 95812 71590</strong>.
                  </p>
                  <button
                    className="inline-flex items-center gap-2 cursor-pointer border-none font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-ink hover:bg-ink2 text-white px-6 py-3 mt-8 shadow-[0_4px_16px_rgba(10,22,40,0.2)]"
                    onClick={() => {
                      setStatus("idle");
                      setForm(blank);
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="font-display text-[1.28rem] font-semibold text-ink mb-[5px]">Confidential Enquiry</div>
                  <div className="text-[0.81rem] text-muted-brand mb-[26px]">
                    All fields marked * are required. Information is handled under our NDA protocol.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.25 mb-3.5">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`p-[11px_13px] border-[1.5px] rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)] ${
                          errors.name ? "border-red-600 focus:border-red-600 focus:shadow-none" : "border-border-brand"
                        }`}
                      />
                      {errors.name && <span className="text-[0.71rem] text-red-600 mt-[2px]">{errors.name}</span>}
                    </div>

                    {/* Organisation */}
                    <div className="flex flex-col gap-1.25 mb-3.5">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Organisation
                      </label>
                      <input
                        name="org"
                        placeholder="Firm / Company / Fund"
                        value={form.org}
                        onChange={handleChange}
                        className="p-[11px_13px] border-[1.5px] border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)]"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.25 mb-3.5">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`p-[11px_13px] border-[1.5px] rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)] ${
                          errors.email ? "border-red-600 focus:border-red-600 focus:shadow-none" : "border-border-brand"
                        }`}
                      />
                      {errors.email && <span className="text-[0.71rem] text-red-600 mt-[2px]">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.25 mb-3.5">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-[11px_13px] border-[1.5px] border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)]"
                      />
                    </div>

                    {/* Nature of Enquiry */}
                    <div className="flex flex-col gap-1.25 mb-3.5 sm:col-span-2">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Nature of Enquiry
                      </label>
                      <div className="relative">
                        <select
                          name="type"
                          value={form.type}
                          onChange={handleChange}
                          className="w-full p-[11px_13px] border-[1.5px] border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)] appearance-none pr-[34px]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235a6a8a'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 12px center",
                            backgroundSize: "17px"
                          }}
                        >
                          <option value="">Select type of engagement</option>
                          <option>M&A — Buy-Side Acquisition</option>
                          <option>M&A — Sell-Side / Exit Planning</option>
                          <option>Equity Financing / Growth Capital</option>
                          <option>NDA Request — Mandate Dossier Access</option>
                          <option>Technology Advisory (HMS / PACS / EMR)</option>
                          <option>Co-Advisory / PE Network Engagement</option>
                          <option>Clinical Due Diligence</option>
                          <option>Other — Please describe below</option>
                        </select>
                      </div>
                    </div>

                    {/* Transaction Size */}
                    <div className="flex flex-col gap-1.25 mb-3.5 sm:col-span-2">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Transaction Size / Context
                      </label>
                      <div className="relative">
                        <select
                          name="size"
                          value={form.size}
                          onChange={handleChange}
                          className="w-full p-[11px_13px] border-[1.5px] border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)] appearance-none pr-[34px]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%235a6a8a'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 12px center",
                            backgroundSize: "17px"
                          }}
                        >
                          <option value="">Select approximate transaction size</option>
                          <option>Below ₹10 Crore</option>
                          <option>₹10 – ₹50 Crore</option>
                          <option>₹50 – ₹120 Crore</option>
                          <option>₹120 – ₹500 Crore</option>
                          <option>Above ₹500 Crore</option>
                          <option>Prefer not to disclose</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.25 mb-[14px] sm:col-span-2">
                      <label className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-muted-light">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        placeholder="Please describe your requirements, the nature of the asset or transaction, your role (buyer / seller / fund), and any relevant context that will help us respond with precision…"
                        value={form.message}
                        onChange={handleChange}
                        className={`p-[11px_13px] border-[1.5px] rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-200 focus:border-blue-brand focus:shadow-[0_0_0_3px_rgba(24,71,201,0.09)] min-h-[108px] resize-vertical leading-[1.6] ${
                          errors.message ? "border-red-600 focus:border-red-600 focus:shadow-none" : "border-border-brand"
                        }`}
                      />
                      {errors.message && <span className="text-[0.71rem] text-red-600 mt-[2px]">{errors.message}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-[14px] text-white border-none cursor-pointer rounded-[9px] font-sans text-[0.83rem] font-semibold tracking-[0.08em] uppercase transition-all duration-200 mt-1 disabled:opacity-[0.55] disabled:cursor-not-allowed ${
                      status === "loading"
                        ? "bg-gradient-to-r from-ink via-ink3 to-ink bg-[length:300%_100%] animate-shimmer"
                        : "bg-ink hover:bg-ink2 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(10,22,40,0.22)]"
                    }`}
                  >
                    {status === "loading" ? "Submitting Securely…" : "Submit Enquiry — Strictly Confidential"}
                  </button>

                  <div className="text-[0.71rem] text-muted-light text-center mt-[11px]">
                    🔒 Your information is protected under our NDA protocol and will not be shared with any third party.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
