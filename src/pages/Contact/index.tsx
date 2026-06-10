import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "../../components/Icons";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const blank: FormState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useState<FormState>(blank);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Full name required";
    if (!form.email.trim()) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please describe your inquiry";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <div className="bg-white animate-fade-in">
      {/* Contact Hero */}
      <section className="relative py-20 md:py-24 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="wrap relative z-10 text-center max-w-[800px]">
          <div className="eyebrow justify-center">Contact Desk</div>
          <h1 className="display tracking-[-0.01em]">
            Begin a <span className="font-display italic font-normal text-blue-brand">Confidential Inquiry</span>
          </h1>
          <p className="body-lg mt-6 max-w-[700px] mx-auto">
            Whether you are acquiring a healthcare asset, planning an exit, raising capital, deploying technology, or seeking a co-advisory arrangement — we welcome a discreet, no-obligation discussion. All enquiries are received by Vasanth Sabavath personally.
          </p>
        </div>
      </section>

      {/* Forms & Inquiry */}
      <section className="section wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-16 lg:gap-20 items-start">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Institutional Channels</div>
            <h2 className="display-sm mb-8">Secure Inquiries</h2>
            <p className="body-md text-muted-brand mb-8">
              We welcome dialogue regarding M&A buy-side / sell-side mandates, co-advisory, and structured equity transactions.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: "Email", val: "info@insightthinkersagency.com", sub: "Responds within 24 hours", icon: Icons.Mail },
                { label: "Phone / WhatsApp", val: "+91 95812 71590", sub: "Available for priority conversations", icon: Icons.Phone },
                { label: "Region", val: "South India · Pan-India · Asia", sub: "Active across all major markets", icon: Icons.Globe },
                { label: "Confidentiality", val: "All enquiries under strict NDA protocol", sub: "No exceptions. No third-party disclosure.", icon: Icons.Shield },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex gap-4 p-4 border border-border-brand/60 rounded-[10px] bg-slate-brand">
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-border-brand/80 flex items-center justify-center text-ink shadow-sm shrink-0">
                      <Icon className="w-4 h-4 text-[#0F172A]" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-slate-500 font-semibold mb-0.5">
                        {c.label}
                      </div>
                      <div className="text-[0.9rem] font-semibold text-ink">{c.val}</div>
                      <div className="text-[0.78rem] text-slate-500 font-light mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Secure Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-border-brand/80 rounded-[20px] p-8 md:p-10 shadow-sh2 relative overflow-hidden"
          >
            {status === "success" ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="text-[3rem] mb-4">✅</div>
                <h3 className="font-display text-[1.6rem] font-semibold text-ink mb-3">Enquiry Logged</h3>
                <p className="text-[0.92rem] text-muted-brand leading-relaxed max-w-[340px] mx-auto font-light">
                  Your details are secured under strict NDA protocols. Vasanth Sabavath will respond to you personally within 24 hours.
                </p>
                <button
                  className="inline-flex items-center gap-2 cursor-pointer border-none font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-ink hover:bg-blue-brand text-white px-7 py-3.5 mt-8 rounded-[6px] shadow-sm"
                  onClick={() => {
                    setStatus("idle");
                    setForm(blank);
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-[1.35rem] font-semibold text-[#0F172A] mb-1">
                    Confidential Inquiry
                  </h3>
                  <div className="text-[0.82rem] text-slate-500 font-light">
                    All fields marked * are required under NDA standards.
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`p-3 border rounded-[8px] font-sans text-[0.88rem] outline-none transition-all focus:ring-2 focus:ring-blue-brand/10 ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-border-brand focus:border-blue-brand"
                    }`}
                  />
                  {errors.name && <span className="text-[0.72rem] text-red-500">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Firm name"
                    className="p-3 border border-border-brand focus:border-blue-brand rounded-[8px] font-sans text-[0.88rem] outline-none transition-all focus:ring-2 focus:ring-blue-brand/10"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="corporate@email.com"
                      className={`p-3 border rounded-[8px] font-sans text-[0.88rem] outline-none transition-all focus:ring-2 focus:ring-blue-brand/10 ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-border-brand focus:border-blue-brand"
                      }`}
                    />
                    {errors.email && <span className="text-[0.72rem] text-red-500">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="p-3 border border-border-brand focus:border-blue-brand rounded-[8px] font-sans text-[0.88rem] outline-none transition-all focus:ring-2 focus:ring-blue-brand/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                    Strategic Focus Area
                  </label>
                  <select
                    name="advisoryType"
                    className="p-3 border border-border-brand focus:border-blue-brand rounded-[8px] font-sans text-[0.88rem] outline-none bg-white focus:ring-2 focus:ring-blue-brand/10"
                  >
                    <option>Mergers & Acquisitions</option>
                    <option>Equity Financing</option>
                    <option>Healthcare Software & AI</option>
                    <option>Healthcare Marketing</option>
                    <option>Medical Equipment Procurement</option>
                    <option>Financial Audit & Compliance</option>
                    <option>DPR & Pitch Deck Preparation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-500 font-semibold">
                    Brief Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Nature of transaction (Buy-side / Sell-side / Investment size / Hospital setup)..."
                    className={`p-3 border rounded-[8px] font-sans text-[0.88rem] min-h-[100px] outline-none transition-all focus:ring-2 focus:ring-blue-brand/10 ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-border-brand focus:border-blue-brand"
                    }`}
                  />
                  {errors.message && <span className="text-[0.72rem] text-red-500">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 text-white font-semibold tracking-[0.06em] bg-ink hover:bg-blue-brand rounded-[8px] transition-all uppercase text-[0.82rem] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Submitting securely..." : "Submit Confidential Inquiry"}
                </button>

                <div className="text-[0.7rem] text-slate-400 text-center mt-2 leading-relaxed">
                  🔒 Information remains confidential and protected under legal NDA protocols.
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
