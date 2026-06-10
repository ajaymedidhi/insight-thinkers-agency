import { useState } from "react";
import { RESOURCES, type Resource } from "../../constants/insights";
import SEO from "../../components/shared/SEO";
import { motion, AnimatePresence } from "framer-motion";

export default function Resources() {
  const [selectedRes, setSelectedRes] = useState<Resource | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleOpenGate = (res: Resource) => {
    setSelectedRes(res);
    setStatus("idle");
    setName("");
    setEmail("");
    setCompany("");
    setErrors({});
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    const err: { name?: string; email?: string } = {};
    if (!name.trim()) err.name = "Full name required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) err.email = "Valid email required";

    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <div className="bg-white animate-fade-in pb-16">
      <SEO 
        title="Healthcare Advisory Tools & Guides" 
        description="Download checklists, hospital valuation templates, due diligence toolkits, and investor readiness files prepared by Insight Thinkers Agency."
        keywords="Healthcare M&A Checklist, Hospital Valuation Guide, Investor Readiness Toolkit"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Healthcare Advisory Resources",
          "description": "Gated corporate resources for healthcare exit strategies and capital raises."
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-slate-brand border-b border-border-brand/80">
        <div className="wrap relative z-10 text-center max-w-[850px]">
          <div className="eyebrow justify-center">Corporate Toolkits</div>
          <h1 className="display tracking-[-0.015em]">
            Healthcare Advisory <span className="font-display italic font-normal text-blue-brand">Resources</span>
          </h1>
          <p className="body-lg mt-6 max-w-[700px] mx-auto">
            Practical guidelines, valuation tools, and structured checklists compiled from closed hospital transactions.
          </p>
        </div>
      </section>

      {/* Grid of resources */}
      <section className="section wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {RESOURCES.map((res, idx) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="bg-slate-brand border border-border-brand/80 rounded-[12px] p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-blue-brand bg-blue-brand/5 border border-blue-brand/10 px-2.5 py-1 rounded inline-block mb-4 font-semibold">
                  {res.type}
                </span>
                <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-3 leading-snug">
                  {res.title}
                </h3>
                <p className="text-[0.82rem] text-muted-brand leading-relaxed font-light mb-8">
                  {res.description}
                </p>
              </div>
              <button
                onClick={() => handleOpenGate(res)}
                className="w-full py-3.5 bg-ink hover:bg-blue-brand text-white text-[0.8rem] font-semibold uppercase tracking-[0.06em] border-none cursor-pointer rounded-[6px] transition-all hover:-translate-y-[1px]"
              >
                Download Toolkit
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gated Lead Modal */}
      <AnimatePresence>
        {selectedRes && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRes(null)}
              className="fixed inset-0 bg-[#07152B]/40 backdrop-blur-sm z-[400]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed top-[15%] left-[5%] right-[5%] md:left-1/2 md:right-auto md:w-[480px] md:-ml-[240px] bg-white rounded-[20px] p-8 shadow-sh3 z-[410] border border-border-brand/80"
            >
              {status === "success" ? (
                <div className="text-center py-6 animate-fade-in">
                  <div className="text-[2.5rem] mb-3">📁</div>
                  <h3 className="font-display text-[1.45rem] font-semibold text-ink mb-2">
                    Download Initialized
                  </h3>
                  <p className="text-[0.84rem] text-muted-brand leading-relaxed mb-6 font-light max-w-[340px] mx-auto">
                    The {selectedRes.title} has been generated and dispatched to your email address securely.<br /><br />
                    For direct inquiries regarding data benchmarks, reach us at <strong className="text-ink font-semibold">info@insightthinkers.com</strong>.
                  </p>
                  <button
                    onClick={() => setSelectedRes(null)}
                    className="px-6 py-2.5 bg-ink hover:bg-blue-brand text-white border-none rounded-[6px] font-mono text-[0.76rem] uppercase font-semibold cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-[0.58rem] tracking-[0.14em] text-blue-brand uppercase font-semibold">
                      Gated Access Profile
                    </span>
                    <h3 className="font-display text-[1.3rem] font-semibold text-ink mt-1">
                      Download {selectedRes.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-500 font-semibold">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((er) => ({ ...er, name: "" }));
                      }}
                      placeholder="Your full name"
                      className={`p-3 border rounded-[8px] font-sans text-[0.88rem] outline-none ${
                        errors.name ? "border-red-500 focus:ring-red-100" : "border-border-brand focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10"
                      }`}
                    />
                    {errors.name && <span className="text-[0.72rem] text-red-500">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-500 font-semibold">
                      Corporate Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors((er) => ({ ...er, email: "" }));
                      }}
                      placeholder="corporate@email.com"
                      className={`p-3 border rounded-[8px] font-sans text-[0.88rem] outline-none ${
                        errors.email ? "border-red-500 focus:ring-red-100" : "border-border-brand focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10"
                      }`}
                    />
                    {errors.email && <span className="text-[0.72rem] text-red-500">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-500 font-semibold">
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Firm name"
                      className="p-3 border border-border-brand focus:border-blue-brand rounded-[8px] font-sans text-[0.88rem] outline-none focus:ring-2 focus:ring-blue-brand/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 text-white font-semibold tracking-[0.06em] bg-ink hover:bg-blue-brand border-none cursor-pointer rounded-[8px] uppercase text-[0.8rem] transition-all disabled:opacity-60 mt-2"
                  >
                    {status === "loading" ? "Validating credentials..." : "Access Secure File"}
                  </button>

                  <div className="text-[0.68rem] text-slate-400 text-center leading-snug mt-1">
                    🔒 Protected under NDA storage parameters. Corporate verification required.
                  </div>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
