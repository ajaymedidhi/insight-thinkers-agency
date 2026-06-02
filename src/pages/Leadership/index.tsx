import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EXPERTISES = [
  {
    title: "Healthcare M&A",
    desc: "Structuring buy-side and sell-side mandates, valuation benchmarking, and transaction documentation execution."
  },
  {
    title: "Corporate Finance",
    desc: "Private equity structured finance, growth capital access, and transaction capital modeling."
  },
  {
    title: "Healthcare Technology",
    desc: "Software architecture audit, EMR/HMS platform assessments, and security compliance diligence."
  },
  {
    title: "Strategic Growth",
    desc: "Corporate restructuring advisory, joint venture formulation, and post-merger integration planning."
  }
];

const PHILOSOPHIES = [
  {
    topic: "On Selectivity",
    quote: '"We decline more mandates than we accept. Every transaction carries our name. We do not accept mandates we cannot close with the rigour institutional buyers deserve."'
  },
  {
    topic: "On Relationships",
    quote: '"Our PE and institutional network was built through completed transactions — not networking events. Fund managers work with us because they have seen us deliver."'
  },
  {
    topic: "On In-House Depth",
    quote: '"Most generalist firms outsource clinical intelligence and tech reviews. We do everything under one roof. Our medical advisors and software engineers audit everything directly."'
  }
];

const TIMELINE = [
  {
    year: "Founded",
    title: "Insight Thinkers advisory desk founded by Vasanth S.",
  },
  {
    year: "Year 1–2",
    title: "First major hospital M&A transactions closed across South Indian healthcare assets.",
  },
  {
    year: "Year 2–3",
    title: "AI HealthTech product suite launched, deploying EMR/PACS platforms to 50+ clinics.",
  },
  {
    year: "Year 3–4",
    title: "Pan-Asia private equity network established for direct mid-market co-investments.",
  },
  {
    year: "Present",
    title: "Active live transaction advisory mandates on operational healthcare assets.",
  }
];

export default function Leadership() {
  const navigate = useNavigate();

  return (
    <div className="bg-white animate-fade-in">
      {/* Leadership Hero */}
      <section className="relative py-20 md:py-24 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-ink rounded-[20px] p-8 overflow-hidden text-white shadow-sh3 border border-white/[0.06]"
            >
              <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative w-full h-[220px] rounded-[12px] bg-gradient-to-br from-[#0c2045] to-ink overflow-hidden border border-white/[0.08] mb-6 flex items-center justify-center">
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="relative text-center z-10 select-none">
                  <span className="font-display italic text-[6.5rem] font-bold text-white/5 tracking-tighter block leading-none">VS</span>
                  <span className="font-mono text-[0.55rem] tracking-[0.24em] uppercase text-blue-light/60 font-semibold block mt-[-10px]">EXECUTIVE PROFILE</span>
                </div>
              </div>

              <h3 className="font-display text-[1.8rem] font-semibold text-white mb-[3px]">
                Vasanth S
              </h3>
              <div className="font-mono text-[0.61rem] tracking-[0.22em] uppercase text-slate-500 mb-6 font-semibold">
                Founder & Managing Director
              </div>

              <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-white/[0.08]">
                {[
                  "Chartered Accountant — Financial Forensics",
                  "Company Secretary — Governance & Structuring",
                  "HealthTech Founder — 6 AI Platforms Scaled",
                  "Advisory across South Indian Hospital Markets",
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-[0.76rem] text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                    <span className="font-light">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">Managing Director</div>
              <h1 className="display-sm text-[#0F172A] mb-6">Founder & Managing Director</h1>
              <p className="body-lg text-muted-brand">
                Vasanth S founded Insight Thinkers to build an advisory firm that operates with the rigor of a boutique investment bank and the deep domain specialization of a healthcare provider.
              </p>
              <p className="body-md mt-4 text-muted-brand">
                His credentials derived directly from hands-on execution. He has personally led and closed hospital transaction structures, formulated private equity partnerships, and scaled clinical healthcare software deployed across 50+ clinics and medical institutions.
              </p>
              <p className="body-md mt-4 text-muted-brand">
                Every mandate accepted by the firm receives Vasanth's personal direction from initial diligence through to final SPA execution, ensuring that promoter interest and corporate secretarial rigor are maintained at every stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Specialized Fields</div>
          <h2 className="display-sm">Domain Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISES.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-border-brand bg-slate-brand rounded-[12px] shadow-sm hover:bg-white hover:shadow-sh1 transition-all duration-300"
            >
              <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-3">
                {e.title}
              </h3>
              <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Philosophy</div>
            <h2 className="display-sm">Operating Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {PHILOSOPHIES.map((p, idx) => (
              <motion.div
                key={p.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-border-brand/80 border-l-[3px] border-l-blue-brand rounded-r-[10px] p-6 shadow-sm"
              >
                <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-slate-500 font-semibold mb-3">
                  {p.topic}
                </div>
                <div className="font-display italic text-[1.1rem] leading-[1.6] text-ink font-medium">
                  {p.quote}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey timeline */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Milestones</div>
          <h2 className="display-sm">Professional Journey</h2>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-0 relative pl-4 border-l border-border-brand/80">
          {TIMELINE.map((t, idx) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative pb-10 last:pb-0 pl-6 group"
            >
              {/* marker */}
              <div className="absolute left-[-24px] top-[4px] w-2.5 h-2.5 rounded-full bg-white border-[2.5px] border-blue-brand ring-[3px] ring-blue-brand/10 transition-all duration-300 group-hover:scale-125" />
              <div className="font-mono text-[0.68rem] tracking-[0.14em] text-blue-brand font-semibold mb-1">
                {t.year}
              </div>
              <h4 className="text-[1rem] font-semibold text-ink">
                {t.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden">
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2rem] font-semibold text-white mb-4">
            Schedule a Conversation
          </h3>
          <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-8 max-w-[500px] mx-auto font-light">
            If you represent a capital fund or are planning an exit structure, schedule a confidential consultation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300 hover:-translate-y-[2px]"
          >
            Schedule Session
          </button>
        </div>
      </section>
    </div>
  );
}
