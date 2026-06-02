import { Icons } from "./Icons";
import { motion } from "framer-motion";

interface ServicesProps {
  go: (id: string) => void;
}

const SERVICES = [
  {
    Icon: Icons.Finance,
    cat: "Finance · Compliance",
    title: "M&A Financial Advisory",
    body: "Institutional-grade financial advisory across the full M&A spectrum — buy-side, sell-side, and structured equity financing. Our CA team conducts forensic financial review, regulatory compliance, and audit-grade due diligence.",
    bullets: [
      "Share Purchase Agreement (SPA) structuring",
      "Forensic financial statement review",
      "Regulatory & tax structuring for healthcare assets",
      "Valuation benchmarking against sector comparables",
      "Escrow and earnout mechanism design",
    ],
  },
  {
    Icon: Icons.Legal,
    cat: "Legal · Governance",
    title: "Corporate Governance & Documentation",
    body: "Our Company Secretaries handle the full legal architecture of every transaction — from initial term sheets to final executed agreements — ensuring every document withstands institutional and regulatory scrutiny.",
    bullets: [
      "SHA, MOU, term sheet drafting & negotiation",
      "Statutory compliance & regulatory approvals",
      "Board resolution & governance structuring",
      "SEBI-compliant transaction architecture",
      "Post-merger integration legal framework",
    ],
  },
  {
    Icon: Icons.Medical,
    cat: "Clinical · Healthcare",
    title: "Clinical Due Diligence",
    body: "Medical professionals on our team conduct hands-on clinical assessments of target hospital assets — evaluating patient flows, staffing models, regulatory licenses, equipment condition, and clinical outcomes.",
    bullets: [
      "Hospital operations & patient flow audit",
      "Clinical team assessment & key person risk",
      "Medical infrastructure & equipment valuation",
      "NABH / NMC compliance review",
      "Clinical revenue quality & sustainability analysis",
    ],
  },
  {
    Icon: Icons.AI,
    cat: "Technology · AI",
    title: "HealthTech Due Diligence & Advisory",
    body: "We assess healthcare technology assets as engineers who have built them — not consultants who study them. Our proprietary HMS, PACS, and EMR systems give us first-principles understanding of health IT infrastructure.",
    bullets: [
      "Technical architecture & code-level review",
      "HMS / PACS / EMR platform assessment",
      "Data security & regulatory compliance audit",
      "Integration complexity & cost modelling",
      "Technology asset valuation for M&A pricing",
    ],
  },
];

const PROCESS = [
  { n: "01", t: "Initial Enquiry", d: "Confidential contact initiated" },
  { n: "02", t: "NDA Execution", d: "Mutual NDA signed before any disclosure" },
  { n: "03", t: "Mandate Brief", d: "Full asset dossier released to qualified party" },
  { n: "04", t: "Management Intro", d: "Facilitated introduction to asset management" },
  { n: "05", t: "Due Diligence", d: "Financial, clinical, legal & tech DD conducted" },
  { n: "06", t: "Closure", d: "Term sheet, documentation, and deal execution" },
];

export default function Services({ go }: ServicesProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as any;

  return (
    <section id="services" className="section bg-slate-brand border-t border-border-brand/80">
      <div className="wrap">
        
        {/* Header Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-[96px] items-start mb-20 md:mb-[96px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Our Capabilities</div>
            <h2 className="display-sm">
              Integrated Services for <span className="font-display italic font-normal text-blue-brand">Frictionless Transactions.</span>
            </h2>
            <p className="body-lg mt-6">
              Healthcare M&A fails when diligence is compartmentalized. We execute the full advisory spectrum under one roof — ensuring that financial models reflect clinical realities and technology audits align with SEBI-compliant transaction docs.
            </p>
            <p className="body-md mt-4">
              We do not act as mere brokers who introduce buyers and sellers. We act as co-engineers of the transaction — managing everything from forensics to post-merger integration frameworks.
            </p>
            <div className="flex items-center gap-4 flex-wrap mt-8">
              <button
                className="inline-flex items-center gap-2 cursor-pointer border-none font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-ink hover:bg-blue-brand text-white px-7 py-4 rounded-[6px] transition-all duration-300 shadow-[0_4px_16px_rgba(7,21,43,0.15)] hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Confidential Inquiry <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
              <button
                className="inline-flex items-center gap-2 cursor-pointer font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-white text-ink border border-border-brand/80 px-7 py-4 rounded-[6px] transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white shadow-sh1 hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Request Credentials
              </button>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {SERVICES.map((s) => {
              const IconComp = s.Icon;
              return (
                <motion.div
                  key={s.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-white border border-border-brand/75 rounded-[12px] p-8 relative overflow-hidden shadow-sh1 transition-all duration-300"
                >
                  {/* Top line highlight indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-brand scale-x-0 origin-left transition-transform duration-[350ms] ease-out group-hover:scale-x-100" />
                  
                  <div className="w-[46px] h-[46px] rounded-[8px] bg-ink flex items-center justify-center text-white mb-5 transition-colors group-hover:bg-blue-brand shadow-sm">
                    <IconComp className="w-[20px] h-[20px]" />
                  </div>

                  <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-blue-brand mb-2 font-semibold">
                    {s.cat}
                  </div>

                  <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-3 group-hover:text-blue-brand transition-colors duration-200">
                    {s.title}
                  </h3>

                  <p className="text-[0.84rem] text-muted-brand leading-relaxed mb-5 font-light">
                    {s.body}
                  </p>

                  <ul className="list-none flex flex-col gap-2 border-t border-slate-100 pt-4">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[0.78rem] text-muted-brand leading-relaxed font-light"
                      >
                        <span className="text-blue-brand text-[0.75rem] mt-[1px] shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Workflow Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-ink rounded-[18px] p-8 md:p-[56px] shadow-sh3 relative overflow-hidden"
        >
          {/* subtle terminal card glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-brand/5 blur-[120px] rounded-full pointer-events-none" />

          <h3 className="font-display text-[2rem] font-semibold text-white mb-2">
            Engagement Workflow
          </h3>
          <p className="text-[0.88rem] text-slate-400 mb-12 font-light">
            A structured, NDA-protected protocol engineered to minimise noise and protect asset confidentiality.
          </p>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0">
            {/* Connecting visual timeline line */}
            <div className="hidden lg:block absolute top-[19px] left-[8%] right-[8%] h-[1px] bg-white/[0.08] pointer-events-none" />

            {PROCESS.map((p, idx) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3 relative z-10 group"
              >
                <div className="w-[38px] h-[38px] rounded-full bg-blue-brand flex items-center justify-center font-mono text-[0.72rem] text-white shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-hover">
                  {p.n}
                </div>
                <div className="text-[0.8rem] font-semibold text-white leading-relaxed group-hover:text-blue-light transition-colors">
                  {p.t}
                </div>
                <div className="text-[0.72rem] text-slate-500 leading-relaxed max-w-[130px] font-light">
                  {p.d}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
