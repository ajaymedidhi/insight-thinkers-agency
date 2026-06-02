import { useState } from "react";
import { Icons } from "./Icons";
import { motion } from "framer-motion";

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
    await new Promise((resolve) => setTimeout(resolve, 1900));
    setStatus("success");
  };

  return (
    <section id="contact" className="section bg-white border-t border-border-brand/80">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-16 lg:gap-[80px] items-start">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="eyebrow">Get in Touch</div>
            <h2 className="display-sm">Begin a <em>Confidential</em> Conversation.</h2>
            <p className="body-lg mt-6">
              Whether you are acquiring a healthcare asset, planning an exit, raising capital, deploying technology, or seeking a co-advisory arrangement — we welcome a discreet, no-obligation discussion. All enquiries are received by Vasanth S personally.
            </p>

            <div className="mt-8">
              {[
                { lbl: "Email", Icon: Icons.Mail, val: "info@insightthinkersagency.com", sub: "Responds within 24 hours" },
                { lbl: "Phone / WhatsApp", Icon: Icons.Phone, val: "+91 95812 71590", sub: "Available for priority conversations" },
                { lbl: "Region", Icon: Icons.Globe, val: "South India · Pan-India · Asia", sub: "Active across all major markets" },
                { lbl: "Confidentiality", Icon: Icons.Shield, val: "All enquiries under strict NDA protocol", sub: "No exceptions. No third-party disclosure." }
              ].map((c) => {
                const IconComp = c.Icon;
                return (
                  <div key={c.lbl} className="py-[22px] border-b border-border-brand/80 first:pt-0">
                    <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-muted-light mb-2.5 font-semibold">
                      {c.lbl}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-[40px] h-[40px] bg-slate-light rounded-[10px] flex items-center justify-center text-ink shrink-0 shadow-sm border border-slate-100">
                        <IconComp className="w-4 h-4 text-[#0F172A]" />
                      </div>
                      <div>
                        <div className="text-[0.92rem] font-semibold text-[#0F172A]">{c.val}</div>
                        <div className="text-[0.8rem] text-muted-brand mt-[2px] font-light">{c.sub}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Commitments Card */}
            <div className="bg-[#F8FAFC] border border-border-brand/75 rounded-[12px] p-8 mt-8 shadow-sm">
              <div className="text-[0.9rem] font-semibold text-[#0F172A] mb-4">Our Commitment to You</div>
              <div className="flex flex-col gap-3.5">
                {[
                  "Every enquiry is received by Vasanth S personally — not a contact centre or junior associate",
                  "All discussions held under strict confidentiality, with NDA executed before any asset data is shared",
                  "We acknowledge every enquiry within 24 business hours, with a substantive response within 48 hours",
                  "If your mandate is outside our current focus, we will tell you clearly — we will not waste your time"
                ].map((p) => (
                  <div key={p} className="flex items-start gap-3 text-[0.84rem] text-muted-brand leading-relaxed font-light">
                    <div className="w-[18px] h-[18px] rounded-full bg-blue-brand flex items-center justify-center shrink-0 mt-[2px] border border-blue-brand/20">
                      <Icons.Chk className="w-[9px] h-[9px] text-white" />
                    </div>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Secure Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-white border border-border-brand/80 rounded-[20px] p-8 md:p-10 shadow-sh2 relative overflow-hidden">
              {status === "success" ? (
                <div className="text-center py-10 px-4 animate-fade-in">
                  <div className="text-[3rem] mb-4">✅</div>
                  <h3 className="font-display text-[1.6rem] font-semibold text-ink mb-3">Enquiry Received</h3>
                  <p className="text-[0.92rem] text-muted-brand leading-relaxed max-w-[340px] mx-auto font-light">
                    Your enquiry has been logged under strict confidentiality. Vasanth S will respond personally within 24 hours.<br /><br />
                    For urgent mandates, reach us directly at <strong className="text-[#0F172A] font-semibold">+91 95812 71590</strong>.
                  </p>
                  <button
                    className="inline-flex items-center gap-2 cursor-pointer border-none font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-ink hover:bg-blue-brand text-white px-7 py-3.5 mt-8 rounded-[6px] shadow-sh2 hover:-translate-y-[2px]"
                    onClick={() => {
                      setStatus("idle");
                      setForm(blank);
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-display text-[1.35rem] font-semibold text-[#0F172A] mb-1">Confidential Enquiry</h3>
                    <div className="text-[0.84rem] text-muted-brand font-light">
                      All fields marked * are required. Information is handled under our NDA protocol.
                    </div>
                  </div>

                  {/* Name and Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className={`p-[12px_14px] border rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 ${
                          errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-border-brand"
                        }`}
                      />
                      {errors.name && <span className="text-[0.72rem] text-red-500 mt-[2px]">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                        Organisation
                      </label>
                      <input
                        name="org"
                        placeholder="Firm / Company / Fund"
                        value={form.org}
                        onChange={handleChange}
                        className="p-[12px_14px] border border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`p-[12px_14px] border rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-border-brand"
                        }`}
                      />
                      {errors.email && <span className="text-[0.72rem] text-red-500 mt-[2px]">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-[12px_14px] border border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10"
                      />
                    </div>
                  </div>

                  {/* Nature of Enquiry Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                      Nature of Enquiry
                    </label>
                    <div className="relative">
                      <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full p-[12px_14px] border border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 appearance-none pr-[36px]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 14px center",
                          backgroundSize: "16px"
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

                  {/* Transaction Size Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                      Transaction Size / Context
                    </label>
                    <div className="relative">
                      <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className="w-full p-[12px_14px] border border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 appearance-none pr-[36px]"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 14px center",
                          backgroundSize: "16px"
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

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-light font-semibold">
                      Message *
                      </label>
                    <textarea
                      name="message"
                      placeholder="Please describe your requirements, the nature of the asset or transaction, your role (buyer / seller / fund), and any relevant context that will help us respond with precision…"
                      value={form.message}
                      onChange={handleChange}
                      className={`p-[12px_14px] border rounded-[8px] font-sans text-[0.88rem] text-ink bg-white outline-none transition-all duration-300 focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 min-h-[120px] resize-vertical leading-[1.6] ${
                        errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-border-brand"
                      }`}
                    />
                    {errors.message && <span className="text-[0.72rem] text-red-500 mt-[2px]">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-4 text-white border-none cursor-pointer rounded-[8px] font-sans text-[0.83rem] font-semibold tracking-[0.08em] uppercase transition-all duration-300 mt-2 shadow-sm disabled:opacity-[0.55] disabled:cursor-not-allowed ${
                      status === "loading"
                        ? "bg-gradient-to-r from-ink via-ink3 to-ink bg-[length:300%_100%] animate-shimmer"
                        : "bg-ink hover:bg-blue-brand hover:-translate-y-[1px] hover:shadow-sh2"
                    }`}
                  >
                    {status === "loading" ? "Submitting Securely…" : "Submit Enquiry — Strictly Confidential"}
                  </button>

                  <div className="text-[0.71rem] text-muted-light text-center mt-[12px] font-light">
                    🔒 Your information is protected under our NDA protocol and will not be shared with any third party.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
