import { motion } from "framer-motion";

const VALUES = [
  {
    ico: "⚖️",
    t: "Integrity",
    b: "Every financial model, marketing campaign, and technology deployment is executed to absolute professional standards. Transparency is non-negotiable.",
  },
  {
    ico: "🔒",
    t: "Confidentiality",
    b: "Strict NDA protection governs all our engagements. We operate on a need-to-know basis to protect our clients' strategic initiatives.",
  },
  {
    ico: "🎯",
    t: "Long-Term Relationships",
    b: "We engage selectively on projects we are confident we can scale. We prioritize depth of strategic execution over the volume of clients.",
  },
  {
    ico: "🔬",
    t: "Execution Excellence",
    b: "Our team integrates corporate finance, digital marketing, and software engineering to deliver institutional-grade results.",
  },
];

const APPROACH = [
  {
    step: "Audit",
    title: "Comprehensive Enterprise Assessment",
    body: "We begin by auditing the physical infrastructure, digital presence, technology stack, and financial metrics to establish a realistic baseline.",
  },
  {
    step: "Strategize",
    title: "Multi-Disciplinary Roadmap",
    body: "We align financial models with digital marketing KPIs and technology requirements to create a unified growth or transaction strategy.",
  },
  {
    step: "Deploy",
    title: "In-House Execution",
    body: "Our team deploys necessary AI tools, executes performance marketing campaigns, and structures financial agreements without outsourcing.",
  },
  {
    step: "Scale/Exit",
    title: "Institutional Value Realization",
    body: "We continuously optimize operations for scale or pitch the transaction dossier to pre-qualified PE funds for a successful exit.",
  },
];

const MISSION_PILLARS = [
  {
    title: "To Institutionalize Healthcare Growth & M&A",
    desc: "Bringing the same strategic, financial, and marketing rigor typical of multi-billion dollar enterprises to the healthcare middle-market."
  },
  {
    title: "To Provide Integrated Digital Innovation",
    desc: "Unlocking actual enterprise value by deploying proprietary technology and performance marketing strategies in-house, rather than relying on fragmented vendors."
  }
];

export default function About() {
  return (
    <div className="bg-[#07152B] min-h-screen animate-fade-in text-white">
      {/* About Hero */}
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
        <div className="wrap relative z-10 text-center max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="w-8 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-brand font-semibold">
              Who We Are
            </span>
            <span className="w-8 h-[1px] bg-gold-brand" />
          </div>
          <h1 className="font-display text-[clamp(3.2rem,5vw,4.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
            About <span className="font-display italic font-light text-gold-brand">Insight Thinkers Agency</span>
          </h1>
          <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[680px] mx-auto">
            Insight Thinkers Agency operates at the convergence of corporate finance, digital marketing, and health technology. We believe specialized sectors demand specialized growth and transaction structures.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-slate-400 font-semibold mb-6">Our Origin</div>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">
              Re-Architecting Growth & M&A for a <span className="font-display italic font-normal text-gold-brand">Complex Industry.</span>
            </h2>
            <p className="text-[1.05rem] text-slate-300 leading-relaxed font-light mt-6">
              Insight Thinkers Agency was founded to solve a major gap: <strong className="text-white font-medium">traditional advisory firms are structured in silos.</strong> Financiers don't understand digital marketing, marketers don't understand clinical workflows, and developers don't understand transaction structuring.
            </p>
            <p className="text-[0.95rem] text-slate-400 leading-relaxed font-light mt-4">
              We built an integrated agency model. Our multi-disciplinary team brings together investment banking rigor, performance marketing strategies, and robust software engineering to deliver end-to-end institutional value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B1220] border border-white/10 rounded-[4px] p-8 md:p-10"
          >
            <div className="font-display italic text-[1.4rem] leading-[1.7] text-white font-medium border-l-[3px] border-l-gold-brand pl-6">
              "Healthcare and institutional growth cannot be siloed. Financial structures, patient acquisition strategies, and technology integrations must work in unison to create sustainable asset value."
            </div>
            <cite className="block mt-6 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-gold-brand/70 not-italic font-semibold">
              Vasanth Sabavath, Founder
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[#0B1220] border-y border-white/[0.05]">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-6">Our Focus</div>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">Our Institutional Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {MISSION_PILLARS.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-transparent border border-white/10 rounded-[4px] p-8 group hover:border-gold-brand/50 transition-colors duration-500"
              >
                <h3 className="font-display text-[1.4rem] font-medium text-white mb-4">
                  {m.title}
                </h3>
                <p className="text-[0.95rem] text-slate-300 leading-relaxed font-light">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Healthcare */}
      <section className="section wrap">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-slate-400 font-semibold mb-6">Sector Dedication</div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">
            Why Integrated <span className="font-display italic font-normal text-gold-brand">Advisory?</span>
          </h2>
          <p className="text-[1.05rem] text-slate-300 leading-relaxed font-light mt-6">
            Enterprise success requires more than just capital or a website. It requires a unified approach. By combining M&A advisory, healthcare technology, and digital marketing under one roof, we eliminate vendor friction and align every strategy directly with your valuation and revenue goals.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-[#0B1220] border-t border-white/[0.05]">
        <div className="wrap">
          <div className="max-w-[760px] mx-auto text-center mb-20">
            <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-6">Methodology</div>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">Our Execution Approach</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {APPROACH.map((a, idx) => (
              <motion.div
                key={a.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-transparent border border-white/10 rounded-[4px] p-8 hover:border-gold-brand/50 transition-all duration-500 relative group"
              >
                <div className="absolute top-[-14px] left-[24px] font-mono text-[0.65rem] tracking-[0.16em] uppercase text-[#07152B] bg-gold-brand px-3 py-1 rounded-[2px] font-semibold">
                  {a.step}
                </div>
                <h3 className="font-display text-[1.25rem] font-medium text-white mt-4 mb-3">
                  {a.title}
                </h3>
                <p className="text-[0.85rem] text-slate-400 leading-relaxed font-light">
                  {a.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section wrap border-t border-white/[0.05]">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-slate-400 font-semibold mb-6">Foundation</div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, idx) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-white/10 rounded-[4px] bg-[#0B1220] hover:border-gold-brand/40 transition-all duration-500 group"
            >
              <div className="text-[2rem] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{v.ico}</div>
              <h3 className="font-display text-[1.25rem] font-medium text-white mb-3">{v.t}</h3>
              <p className="text-[0.85rem] text-slate-400 leading-relaxed font-light">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
