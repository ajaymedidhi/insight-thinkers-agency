import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../../components/Icons";

const DETAILED_SERVICES = [
  {
    Icon: Icons.Finance,
    cat: "M&A Advisory",
    title: "Healthcare M&A",
    desc: "Rigorous execution of middle-market healthcare buy-side and sell-side mandates, providing promoters and strategic corporate acquirers with valuation benchmarking and transition planning.",
    benefits: [
      "Mitigate valuation gap through verified clinical operations metrics",
      "Draft SEBI-compliant transaction parameters for majority stakes",
      "Structure secure escrow accounts and milestone-based earnouts",
    ],
    deliverables: [
      "Comprehensive Valuation Benchmarking Report",
      "Information Memorandum (IM) & Asset Dossiers",
      "Letters of Intent (LOI) & Term Sheet negotiation framework",
    ],
  },
  {
    Icon: Icons.Globe,
    cat: "Growth Capital",
    title: "Equity Financing",
    desc: "Assisting healthcare promoters and systems in raising growth capital from private equity funds and institutional investors across Asia.",
    benefits: [
      "Access pre-qualified PE fund relationships actively looking for healthcare deals",
      "Structure financing that aligns founder controls with investor requirements",
      "Optimize cost of capital through tailored debt/equity structuring",
    ],
    deliverables: [
      "Financial Modeling & Growth Projections",
      "Investor Presentation Materials",
      "Co-investment Term Sheet Architecture",
    ],
  },
  {
    Icon: Icons.Shield,
    cat: "Strategic Corporate Planning",
    title: "Strategic Advisory",
    desc: "Structuring corporate governance models, joint ventures, regulatory strategy, and long-term inorganic expansion plans.",
    benefits: [
      "Ensure statutory compliance across South Indian healthcare boards",
      "Mitigate regulatory risks related to NMC/NABH guidelines",
      "Design joint venture structures with clinical counterparties",
    ],
    deliverables: [
      "Corporate Restructuring Assessment",
      "Expansion Planning Roadmap",
      "Post-Merger Integration Governance Guide",
    ],
  },
  {
    Icon: Icons.AI,
    cat: "Technology Due Diligence",
    title: "Technology Advisory",
    desc: "Auditing enterprise health systems, proprietary codebases, PACS systems, EMR software, and cybersecurity standards for acquirers.",
    benefits: [
      "Identify hidden architectural bottlenecks inside hospital software platforms",
      "Audit EMR databases for compliance with data residency standards",
      "Determine transition complexity and cost parameters post-acquisition",
    ],
    deliverables: [
      "Software Code & Architecture Diligence Audit",
      "HMS/EMR Security Vulnerability Assessment",
      "Technology Integration Cost Projection",
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-white animate-fade-in">
      {/* Services Hero */}
      <section className="relative py-28 md:py-32 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(7,21,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,43,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
        <div className="wrap relative z-10 text-center max-w-[800px]">
          <div className="eyebrow justify-center">What We Do</div>
          <h1 className="display tracking-[-0.01em]">
            Healthcare Advisory <span className="font-display italic font-normal text-blue-brand">Services</span>
          </h1>
          <p className="body-lg mt-6 max-w-[680px] mx-auto">
            We provide full-suite advisory services engineered specifically for healthcare systems, hospitals, promoters, and institutional capital partners.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {DETAILED_SERVICES.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-slate-brand border border-border-brand/80 rounded-[16px] p-8 md:p-10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[8px] bg-ink flex items-center justify-center text-white shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-blue-brand font-semibold">
                        {s.cat}
                      </div>
                      <h3 className="font-display text-[1.4rem] font-semibold text-[#0F172A] mt-0.5">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[0.92rem] text-muted-brand leading-relaxed font-light mb-8">
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-brand/60">
                    <div>
                      <h4 className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-ink font-semibold mb-3">
                        Strategic Benefits
                      </h4>
                      <ul className="list-none pl-0 flex flex-col gap-2.5">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-[0.8rem] text-muted-brand leading-relaxed font-light">
                            <span className="text-blue-brand text-[0.7rem] mt-[3px]">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-ink font-semibold mb-3">
                        Key Deliverables
                      </h4>
                      <ul className="list-none pl-0 flex flex-col gap-2.5">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-[0.8rem] text-muted-brand leading-relaxed font-light">
                            <span className="text-gold-brand text-[0.7rem] mt-[3px]">✦</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-blue-brand/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2rem] font-semibold text-white mb-4">
            Discuss Your Requirements
          </h3>
          <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-8 max-w-[500px] mx-auto font-light">
            Every dialogue is conducted under strict confidentiality protocol. Schedule a conversation with our managing director today.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300 hover:-translate-y-[2px]"
          >
            Start Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
