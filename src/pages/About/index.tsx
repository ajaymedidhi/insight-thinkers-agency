import { motion } from "framer-motion";

const VALUES = [
  {
    ico: "⚖️",
    t: "Integrity",
    b: "Every financial model, legal structure, and clinical diligence document is prepared to absolute professional standards. Transparency is non-negotiable.",
  },
  {
    ico: "🔒",
    t: "Confidentiality",
    b: "Strict NDA protection governs all asset dialogues. We operate on a need-to-know basis, ensuring zero leakages to protect promoters and operators.",
  },
  {
    ico: "🎯",
    t: "Long-Term Relationships",
    b: "We engage selectively on mandates we are confident we can close. We prioritize depth of strategic execution over the volume of deals in our pipeline.",
  },
  {
    ico: "🔬",
    t: "Execution Excellence",
    b: "Our team integrates accounting, corporate law, clinical operations, and software engineering to coordinate institutional-grade closures.",
  },
];

const APPROACH = [
  {
    step: "Understand",
    title: "Clinical & Operational Assessment",
    body: "We begin by auditing the physical infrastructure, clinical metrics, patient workflows, and licensing compliance to establish a realistic baseline.",
  },
  {
    step: "Evaluate",
    title: "Financial Forensics",
    body: "Our Chartered Accountants inspect financial statements, model debt capacity, analyze revenue quality, and benchmark against sector comps.",
  },
  {
    step: "Strategize",
    title: "Structure Formulation",
    body: "Our Company Secretaries structure SEBI-compliant deal architectures, draft term sheets, and plan SPAs and SHAs with counterparties.",
  },
  {
    step: "Execute",
    title: "PE Network Alignment",
    body: "We pitch the transaction dossier directly to pre-qualified institutional PE funds and strategic buyers, coordinating due diligence and closure.",
  },
];

const MISSION_PILLARS = [
  {
    title: "To Institutionalize Mid-Market M&A",
    desc: "Bringing the same financial and legal rigor typical of multi-billion dollar investment bank transactions to the healthcare middle-market."
  },
  {
    title: "To Provide Specialized Clinical Diligence",
    desc: "Unlocking actual operational values by utilizing certified medical practitioners and software engineers in-house, rather than generalist consultants."
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
            About <span className="font-display italic font-normal text-blue-brand">Insight Thinkers</span>
          </h1>
          <p className="body-lg mt-6 max-w-[680px] mx-auto">
            Insight Thinkers operates at the convergence of corporate finance, clinical medicine, and health technology. We believe specialized sectors demand specialized transaction structures.
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
              Re-Architecting M&A for a <span className="font-display italic font-normal text-blue-brand">Complex Industry.</span>
            </h2>
            <p className="body-lg mt-6">
              Insight Thinkers was founded to solve a major gap in the transaction market: <strong>traditional financial advisory firms are structured to be generalists.</strong> They rely on databases, outsource clinical due diligence, and treat technology as a checklist item.
            </p>
            <p className="body-md mt-4">
              We built an integrated advisory model. Our team includes professionals with Chartered Accountancy expertise who understand transaction structuring, corporate secretaries who handle governance, medical advisors who audit clinical operations, and healthtech engineers who evaluate enterprise software.
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
              "Healthcare assets cannot be valued on spreadsheets alone. Clinical quality, technology integration, and operational flow determine transaction outcome — not just EBITDA multiples."
            </div>
            <cite className="block mt-4 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted-light not-italic font-semibold">
              Vasanth S, Founder
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
            Why Healthcare <span className="font-display italic font-normal text-blue-brand">Advisory?</span>
          </h2>
          <p className="body-lg mt-6">
            Healthcare transactions are highly regulated and operationally intensive. Patient health systems, EMR software infrastructure, medical practitioner agreements, and clinical licensing represent massive values and operational risks that generalist advisors fail to value properly.
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
