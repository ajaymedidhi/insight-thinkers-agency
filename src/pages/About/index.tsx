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
    <div className="bg-white animate-fade-in">
      {/* About Hero */}
      <section className="relative py-28 md:py-32 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(7,21,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,43,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
        <div className="wrap relative z-10 text-center max-w-[800px]">
          <div className="eyebrow justify-center">Who We Are</div>
          <h1 className="display tracking-[-0.01em]">
            About <span className="font-display italic font-normal text-blue-brand">Insight Thinkers Agency</span>
          </h1>
          <p className="body-lg mt-6 max-w-[680px] mx-auto">
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
            <div className="eyebrow">Our Origin</div>
            <h2 className="display-sm">
              Re-Architecting Growth & M&A for a <span className="font-display italic font-normal text-blue-brand">Complex Industry.</span>
            </h2>
            <p className="body-lg mt-6">
              Insight Thinkers Agency was founded to solve a major gap: <strong>traditional advisory firms are structured in silos.</strong> Financiers don't understand digital marketing, marketers don't understand clinical workflows, and developers don't understand transaction structuring.
            </p>
            <p className="body-md mt-4">
              We built an integrated agency model. Our multi-disciplinary team brings together investment banking rigor, performance marketing strategies, and robust software engineering to deliver end-to-end institutional value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-brand border border-border-brand rounded-[16px] p-8 md:p-10 shadow-sh1"
          >
            <div className="font-display italic text-[1.4rem] leading-[1.7] text-[#0F172A] font-medium border-l-[3px] border-l-gold-brand pl-6">
              "Healthcare and institutional growth cannot be siloed. Financial structures, patient acquisition strategies, and technology integrations must work in unison to create sustainable asset value."
            </div>
            <cite className="block mt-4 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted-light not-italic font-semibold">
              Vasanth Sabavath, Founder
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Our Focus</div>
            <h2 className="display-sm">Our Institutional Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {MISSION_PILLARS.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-border-brand/80 rounded-[12px] p-8 shadow-sm"
              >
                <h3 className="font-display text-[1.25rem] font-semibold text-[#0F172A] mb-4">
                  {m.title}
                </h3>
                <p className="text-[0.88rem] text-muted-brand leading-relaxed font-light">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Healthcare */}
      <section className="section wrap">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Sector Dedication</div>
          <h2 className="display-sm">
            Why Integrated <span className="font-display italic font-normal text-blue-brand">Advisory?</span>
          </h2>
          <p className="body-lg mt-6">
            Enterprise success requires more than just capital or a website. It requires a unified approach. By combining M&A advisory, healthcare technology, and digital marketing under one roof, we eliminate vendor friction and align every strategy directly with your valuation and revenue goals.
          </p>
        </div>
      </section>

      {/* Our Approach (Timeline: Understand -> Evaluate -> Strategize -> Execute) */}
      <section className="section bg-slate-brand border-t border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[760px] mx-auto text-center mb-20">
            <div className="eyebrow justify-center">Methodology</div>
            <h2 className="display-sm">Our Execution Approach</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {APPROACH.map((a, idx) => (
              <motion.div
                key={a.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-border-brand/80 rounded-[12px] p-8 shadow-sm hover:shadow-sh1 transition-all duration-300 relative group"
              >
                <div className="absolute top-[-16px] left-[24px] font-mono text-[0.72rem] tracking-[0.16em] uppercase text-white bg-blue-brand px-3 py-1 rounded-[4px] font-semibold">
                  {a.step}
                </div>
                <h3 className="font-display text-[1.125rem] font-semibold text-[#0F172A] mt-4 mb-3">
                  {a.title}
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                  {a.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section wrap border-t border-border-brand/80">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Foundation</div>
          <h2 className="display-sm">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, idx) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-border-brand/75 rounded-[12px] bg-slate-brand hover:bg-white transition-all duration-300 shadow-sm"
            >
              <div className="text-[2rem] mb-4">{v.ico}</div>
              <h3 className="text-[0.98rem] font-semibold text-[#0F172A] mb-2">{v.t}</h3>
              <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
