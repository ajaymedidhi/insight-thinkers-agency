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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <div className="bg-[#07152B] text-white animate-fade-in">
      {/* Contact Hero */}
      <section className="relative py-32 md:py-40 bg-[#07152B] overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(51,65,85,0.4),transparent_50%)]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="wrap relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-white">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold-brand" />
                <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-brand font-semibold">
                  Contact Desk
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
                Begin a <br />
                <span className="font-display italic font-light text-gold-brand">Confidential</span><br />
                Inquiry.
              </h1>

              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
                Whether you are acquiring a healthcare asset, planning an exit, raising capital, deploying technology, or seeking a co-advisory arrangement — we welcome a discreet discussion.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-brand text-[#07152B] border border-gold-brand font-semibold tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-300 hover:bg-white hover:border-white shadow-[0_0_20px_rgba(200,169,107,0.2)] cursor-pointer rounded-[2px]"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Dialogue
                </button>
              </div>
            </motion.div>

            {/* Right Column - Visual Focal Point */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex relative w-full h-[400px] items-center justify-center"
            >
              {/* Abstract Shield/Lock for Contact */}
              <div className="absolute w-[240px] h-[240px] border border-gold-brand/20 rounded-[2px] rotate-45 flex items-center justify-center animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[180px] h-[180px] border border-white/10 rounded-[2px] -rotate-12 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="absolute w-[100px] h-[100px] bg-gold-brand/10 border border-gold-brand/30 rounded-[2px] flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(200,169,107,0.15)] z-10">
                <Icons.Shield className="w-8 h-8 text-gold-brand" />
              </div>
              
              {/* Geometric grid behind */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="1 6" />
                <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="1 6" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forms & Inquiry */}
      <section id="contact-form" className="section wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-16 lg:gap-20 items-start">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-3">Institutional Channels</div>
            <h2 className="font-display text-[2.5rem] text-white mb-6">Secure Inquiries</h2>
            <p className="text-[0.95rem] text-slate-400 font-light mb-10 leading-relaxed">
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
                  <div key={c.label} className="flex gap-5 p-6 border border-white/10 rounded-[2px] bg-transparent group hover:border-gold-brand/40 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-[2px] bg-[#0B1220] border border-white/10 flex items-center justify-center shadow-sm shrink-0 group-hover:border-gold-brand/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold-brand" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-gold-brand font-medium mb-1">
                        {c.label}
                      </div>
                      <div className="text-[1.05rem] font-medium text-white mb-1 group-hover:text-gold-brand transition-colors duration-300">{c.val}</div>
                      <div className="text-[0.8rem] text-slate-400 font-light">{c.sub}</div>
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
            className="bg-[#0B1220] border border-white/10 rounded-[2px] p-8 md:p-12 relative overflow-hidden"
          >
            {status === "success" ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-[3rem] mb-6">✅</div>
                <h3 className="font-display text-[2rem] font-medium text-white mb-4">Enquiry Logged</h3>
                <p className="text-[0.95rem] text-slate-300 leading-relaxed max-w-[340px] mx-auto font-light">
                  Your details are secured under strict NDA protocols. Vasanth Sabavath will respond to you personally within 24 hours.
                </p>
                <button
                  className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4 mt-8 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
                  onClick={() => {
                    setStatus("idle");
                    setForm(blank);
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="mb-2">
                  <h3 className="font-display text-[1.8rem] font-medium text-white mb-2">
                    Confidential Inquiry
                  </h3>
                  <div className="text-[0.85rem] text-slate-400 font-light">
                    All fields marked * are required under NDA standards.
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`p-3.5 bg-[#07152B] border rounded-[2px] font-sans text-[0.9rem] text-white outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 placeholder-slate-500 ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold-brand"
                    }`}
                  />
                  {errors.name && <span className="text-[0.72rem] text-red-400">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Firm name"
                    className="p-3.5 bg-[#07152B] border border-white/10 focus:border-gold-brand rounded-[2px] font-sans text-[0.9rem] text-white outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 placeholder-slate-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="corporate@email.com"
                      className={`p-3.5 bg-[#07152B] border rounded-[2px] font-sans text-[0.9rem] text-white outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 placeholder-slate-500 ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold-brand"
                      }`}
                    />
                    {errors.email && <span className="text-[0.72rem] text-red-400">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="p-3.5 bg-[#07152B] border border-white/10 focus:border-gold-brand rounded-[2px] font-sans text-[0.9rem] text-white outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                    Strategic Focus Area
                  </label>
                  <select
                    name="advisoryType"
                    className="p-3.5 bg-[#07152B] border border-white/10 focus:border-gold-brand rounded-[2px] font-sans text-[0.9rem] text-white outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 appearance-none"
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

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand font-medium">
                    Brief Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Nature of transaction (Buy-side / Sell-side / Investment size / Hospital setup)..."
                    className={`p-3.5 bg-[#07152B] border rounded-[2px] font-sans text-[0.9rem] text-white min-h-[120px] outline-none transition-all focus:ring-1 focus:ring-gold-brand/20 placeholder-slate-500 ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-gold-brand"
                    }`}
                  />
                  {errors.message && <span className="text-[0.72rem] text-red-400">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4.5 mt-4 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Submitting securely..." : "Submit Confidential Inquiry"}
                </button>

                <div className="text-[0.75rem] text-slate-400 text-center mt-2 leading-relaxed font-light">
                  <span className="text-gold-brand">🔒</span> Information remains confidential and protected under legal NDA protocols.
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
