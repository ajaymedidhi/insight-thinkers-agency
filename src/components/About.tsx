import { Icons } from "./Icons";
import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    Icon: Icons.Finance,
    title: "Capital Markets Precision",
    body: "Every mandate is structured to institutional standards — SPAs, SHAs, MOUs, term sheets — with CA and CS oversight at every stage. We don't just identify deals; we architect them to close.",
  },
  {
    n: "02",
    Icon: Icons.Medical,
    title: "Healthcare Sector Intelligence",
    body: "Qualified medical professionals on staff conduct clinical due diligence, assess hospital operations, evaluate patient flows, and audit regulatory compliance. Intelligence no generalist firm can replicate.",
  },
  {
    n: "03",
    Icon: Icons.AI,
    title: "Proprietary Technology Layer",
    body: "We've built HMS, PACS, EMR, and enterprise health software from the ground up. We evaluate healthcare technology as engineers — providing buyers with credible, conflict-free technical assessments.",
  },
];

const TIMELINE = [
  {
    yr: "Founded",
    h: "Insight Thinkers Agency Established",
    p: "Founded by Vasanth S with a singular thesis: healthcare M&A requires simultaneous mastery of capital markets, clinical operations, and enterprise technology — not just financial modelling.",
  },
  {
    yr: "Year 1–2",
    h: "First Mandates Closed",
    p: "Completed first institutional M&A transactions in South India hospital sector. Personally led and closed — establishing a track record with institutional counterparties and PE fund managers.",
  },
  {
    yr: "Year 2–3",
    h: "AI HealthTech Division Launched",
    p: "Launched proprietary AI product line: HMS, PACS, and EMR platforms deployed across 50+ hospitals and diagnostic centres. Products are actively operated — not theoretical.",
  },
  {
    yr: "Year 3–4",
    h: "Pan-Asia PE Network Built",
    p: "Expanded institutional relationships to cover healthcare PE funds across South Asia and Southeast Asia. Active co-advisory mandates established with major fund managers.",
  },
  {
    yr: "Present",
    h: "Live Mandates — Active Advisory",
    p: "Currently managing exclusive advisory mandates on operational hospital assets with aggregate monthly revenues exceeding ₹8 Crores. All mandates are live, not archival.",
  },
];

const VALUES = [
  {
    ico: "⚖️",
    t: "Institutional Rigour",
    b: "Every deliverable — financial model, legal document, clinical report — is prepared to standards that institutional counterparties expect and demand.",
  },
  {
    ico: "🔒",
    t: "Absolute Confidentiality",
    b: "NDA-first engagement is not a protocol — it is a philosophy. No mandate is discussed without mutual legal protection in place.",
  },
  {
    ico: "🎯",
    t: "Completion Over Commission",
    b: "We accept only mandates we are confident we can close. Breadth of pipeline is never prioritised over depth of execution.",
  },
  {
    ico: "🔬",
    t: "Evidence-Based Advisory",
    b: "Every recommendation is grounded in verified financial data, operational metrics, and clinical assessments — not market opinion.",
  },
];

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  } as any;

  return (
    <section id="about" className="section bg-white border-t border-border-brand">
      <div className="wrap">
        
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[760px] mx-auto text-center pb-16 md:pb-[88px]"
        >
          <div className="eyebrow justify-center">About Our Firm</div>
          <h2 className="display-sm">
            A Multi-Disciplinary Firm for a <span className="font-display italic font-normal text-blue-brand">Complex Sector.</span>
          </h2>
          <p className="body-lg mt-6">
            Insight Thinkers operates at the convergence of <strong>corporate finance</strong>, <strong>clinical medicine</strong>, and <strong>health technology</strong>. We do not outsource sector expertise because we believe healthcare transactions require specialized knowledge at every stage.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-[100px]">
          {PILLARS.map((p, idx) => {
            const IconComp = p.Icon;
            return (
              <motion.div
                key={p.n}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-[#F8FAFC] border border-border-brand/70 rounded-[12px] p-8 md:p-10 overflow-hidden shadow-sh1 transition-all duration-300 hover:bg-[#07152B] hover:text-white"
              >
                {/* Visual hover border line animation */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-brand scale-x-0 origin-left transition-transform duration-[380ms] ease-out group-hover:scale-x-100" />
                
                <div className="font-display text-[2.8rem] font-bold text-blue-brand/12 group-hover:text-blue-brand/20 leading-none mb-5">
                  {p.n}
                </div>
                <div className="w-[48px] h-[48px] rounded-[10px] bg-white group-hover:bg-white/10 flex items-center justify-center text-blue-brand group-hover:text-blue-light mb-5 shadow-sm transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[1.25rem] font-semibold text-ink group-hover:text-white mb-3 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[0.875rem] text-muted-brand group-hover:text-slate-300 leading-relaxed font-light transition-colors">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[96px] items-start py-20 md:py-[100px] border-t border-border-brand/80">
          
          {/* Story Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Our Story</div>
            <h3 className="display-sm">
              Re-Architecting M&A for a <span className="font-display italic font-normal text-blue-brand">Specialised Sector.</span>
            </h3>
            <p className="body-lg mt-6">
              Insight Thinkers was founded on a simple observation: <strong>traditional financial advisory firms are structured to be generalists.</strong> They rely on third-party databases, outsource clinical due diligence, and treat healthcare technology as a checklist item.
            </p>
            
            {/* Quote block */}
            <div className="border-l-[3px] border-l-gold-brand pl-6 py-4 my-8 bg-gradient-to-r from-gold-brand/4 to-transparent">
              <p className="font-display italic text-[1.15rem] leading-[1.7] text-ink font-medium">
                "Healthcare assets cannot be valued on spreadsheets alone. Clinical quality, technology integration, and operational flow determine transaction outcome — not just EBITDA multiples."
              </p>
              <cite className="block mt-2.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted-light not-italic font-semibold">
                Vasanth S, Founder
              </cite>
            </div>

            <p className="body-md">
              We built a firm that integrates these disciplines under one roof. Our team includes professionals with Chartered Accountancy expertise who understand transaction structuring, corporate secretaries who handle governance, medical advisors who audit clinical operations, and healthtech engineers who evaluate systems.
            </p>
          </motion.div>

          {/* Timeline Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:mt-0 mt-8"
          >
            <div className="eyebrow">Our Milestones</div>
            <div className="flex flex-col gap-0 relative pl-1">
              {TIMELINE.map((t, idx) => (
                <div key={t.h} className="flex gap-0 pb-8 last:pb-0 group">
                  <div className="flex flex-col items-center w-3 shrink-0 mr-6 mt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white border-[2.5px] border-blue-brand ring-[3px] ring-blue-brand/10 shrink-0 transition-all duration-300 group-hover:scale-125" />
                    {idx < TIMELINE.length - 1 && (
                      <div className="w-[1.5px] flex-1 bg-border-brand mt-2" />
                    )}
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] tracking-[0.12em] text-blue-brand mb-1 font-semibold">
                      {t.yr}
                    </div>
                    <h4 className="text-[0.95rem] font-semibold text-ink mb-1 group-hover:text-blue-brand transition-colors duration-200">
                      {t.h}
                    </h4>
                    <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                      {t.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 md:pt-[100px] border-t border-border-brand/80">
          {VALUES.map((v, idx) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-8 border border-border-brand/75 rounded-[12px] bg-slate-brand transition-all duration-300 hover:shadow-sh2 hover:bg-white"
            >
              <div className="text-[1.5rem] mb-4">{v.ico}</div>
              <div className="text-[0.92rem] font-semibold text-[#0F172A] mb-2">
                {v.t}
              </div>
              <div className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                {v.b}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
