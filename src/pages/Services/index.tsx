import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../../components/Icons";

const DETAILED_SERVICES = [
  {
    Icon: Icons.Finance,
    cat: "M&A Advisory",
    title: "Mergers & Acquisitions",
    desc: "End-to-end M&A advisory across buy-side, sell-side, and structured equity transactions in the South India healthcare sector. We originate, structure, and close. Every mandate is personally led by Vasanth Sabavath.",
    benefits: [
      "Active Mandates: 3 live exclusive mandates currently under advisory in South India",
      "Asset Value: ₹120 Crore+ aggregate hard asset value across current portfolio",
      "Deal Structure: Acquisitions, majority stakes, equity infusions, and structured exits",
      "Geography: South India primary; Pan-India and South East Asia for PE-backed deals"
    ],
    deliverables: [
      "Buy-side and sell-side mandate management",
      "SPA, SHA, MOU drafting and negotiation",
      "Financial modelling and valuation",
      "Management Q&A coordination",
      "Due diligence orchestration",
      "Term sheet negotiation and closure"
    ],
  },
  {
    Icon: Icons.Globe,
    cat: "Equity & Finance",
    title: "Equity Financing",
    desc: "Structured equity financing for healthcare operators seeking growth capital — from PE funds, family offices, UHNI investors, and strategic co-investors.",
    benefits: [
      "Investor Network: Healthcare PE funds, family offices, UHNI platforms across India, GCC, Singapore",
      "Deal Sizes: ₹5 Crore growth equity to ₹120 Crore+ PE transactions",
      "Structures: Minority equity, majority stake, structured debt-equity, convertible instruments",
      "Compliance: SEBI-compliant structuring across multiple fund and investor types"
    ],
    deliverables: [
      "Investor-ready pitch deck & financial model",
      "Information Memorandum (IM) preparation",
      "Investor identification and mapping",
      "Term sheet structuring and negotiation",
      "SEBI-compliant deal architecture",
      "Closing support and documentation"
    ],
  },
  {
    Icon: Icons.AI,
    cat: "Software Development",
    title: "Healthcare Software & AI",
    desc: "Custom hospital management systems, patient engagement platforms, diagnostic tools, and enterprise health software — built from first principles by our engineering team.",
    benefits: [
      "Live Products: 6+ proprietary AI HealthTech products deployed across 50+ institutions",
      "Tech Stack: Modern, scalable architecture built for healthcare compliance and data security",
      "Integration: Integration with existing hospital workflows, lab equipment, and third-party systems",
      "Support: Ongoing maintenance, upgrades, and dedicated technical support post-deployment"
    ],
    deliverables: [
      "Hospital Management Systems (HMS)",
      "PACS & Radiology Information Systems",
      "Electronic Medical Records (EMR)",
      "Patient engagement & appointment platforms",
      "Lab Information Management Systems (LIMS)",
      "Custom AI/ML diagnostic tools"
    ],
  },
  {
    Icon: Icons.Medical,
    cat: "Marketing",
    title: "Healthcare Marketing",
    desc: "Go-to-market strategies, patient acquisition, digital presence, and brand building for hospitals, clinics, diagnostic centres, and healthcare brands across India.",
    benefits: [
      "Hospitals Served: 50+ hospitals and diagnostic centres across South India and beyond",
      "Capabilities: SEO, SEM, Social Media, Content, Account-Based Marketing, Email Campaigns",
      "Analytics: Full-funnel reporting: traffic, leads, appointment conversions, and patient retention",
      "Experience: Deep understanding of healthcare consumer behaviour and hospital referral dynamics"
    ],
    deliverables: [
      "Go-to-market strategy for new services/departments",
      "Digital presence: SEO, Google Ads, social media",
      "Content marketing & thought leadership",
      "Patient acquisition funnel design",
      "Healthcare brand identity & messaging",
      "Social Media Management (Instagram, LinkedIn, Facebook)"
    ],
  },
  {
    Icon: Icons.Shield,
    cat: "Procurement",
    title: "Medical Equipment Procurement",
    desc: "End-to-end procurement advisory for hospitals and diagnostic centres — from equipment specification and vendor identification through negotiation, import, and commissioning.",
    benefits: [
      "Equipment Types: Radiology (CT, MRI, X-Ray), Lab equipment, OT equipment, ICU systems",
      "Vendor Network: Established relationships with domestic and international manufacturers",
      "Financing: Advisory on equipment financing, leasing, and hire-purchase structures",
      "Clinical Validation: Equipment assessed by medical professionals on our team"
    ],
    deliverables: [
      "Equipment specification and needs assessment",
      "Vendor identification and shortlisting",
      "Comparative pricing and technical evaluation",
      "Negotiation support and contract structuring",
      "Import logistics and customs advisory",
      "Installation, commissioning, and staff training coordination"
    ],
  },
  {
    Icon: Icons.Finance,
    cat: "Audit & Compliance",
    title: "Financial Audit & Compliance",
    desc: "Forensic financial review, regulatory compliance assessment, statutory audit support, and income & expenditure certification for healthcare operators and M&A transactions.",
    benefits: [
      "Standards: All financial documentation prepared to institutional and regulatory audit standards",
      "M&A Context: Audit and compliance work integrated directly into M&A due diligence process",
      "Regulatory: SEBI, RBI, and MCA compliance documentation across corporate structures",
      "Healthcare-Specific: Understanding of healthcare revenue recognition, NABH compliance"
    ],
    deliverables: [
      "Forensic financial statement review",
      "Income & Expenditure (I&E) certification",
      "Regulatory compliance assessment",
      "Statutory documentation preparation",
      "Tax structuring for healthcare transactions",
      "Transaction audit for M&A due diligence"
    ],
  },
  {
    Icon: Icons.AI,
    cat: "Reports & Decks",
    title: "DPR & Pitch Deck Preparation",
    desc: "Investor-grade Detailed Project Reports, pitch decks, Information Memoranda, and business plan documents for healthcare operators, startups, and M&A transactions.",
    benefits: [
      "Format Standards: Documents prepared to PE fund, banker, and institutional investor expectations",
      "Financial Depth: 5-year P&L, balance sheet, and cash flow projections with scenario analysis",
      "Visual Quality: Professionally designed, branded documents — not template-based output",
      "M&A Integration: DPRs and pitch decks integrated with live mandate process where applicable"
    ],
    deliverables: [
      "Detailed Project Report (DPR) for healthcare projects",
      "Investor pitch deck (10–20 slides, institutional format)",
      "Information Memorandum (IM) for equity raises",
      "Financial model with 5-year projections",
      "Executive summary and one-pager",
      "Bank and NBFC loan documentation packages"
    ],
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#07152B] text-white animate-fade-in">
      {/* Services Hero */}
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
                  What We Do
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
                Integrated <br />
                <span className="font-display italic font-light text-gold-brand">Growth</span><br />
                Services.
              </h1>

              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
                Multi-disciplinary advisory and execution for healthcare enterprises. From M&A structuring to digital marketing and technology deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-brand text-[#07152B] border border-gold-brand font-semibold tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-300 hover:bg-white hover:border-white shadow-[0_0_20px_rgba(200,169,107,0.2)] cursor-pointer rounded-[2px]"
                  onClick={() => navigate("/contact")}
                >
                  Confidential Engagement
                </button>
              </div>
            </motion.div>

            {/* Right Column - Visual Focal Point */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex relative w-full h-[400px] items-center justify-center"
            >
              {/* Abstract Rings for Services */}
              <div className="absolute w-[280px] h-[280px] rounded-full border-[1px] border-gold-brand/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] rounded-full border-[1px] border-white/10 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute w-[120px] h-[120px] rounded-full border-[1px] border-gold-brand/40 bg-gold-brand/5 shadow-[0_0_40px_rgba(200,169,107,0.1)] flex items-center justify-center backdrop-blur-sm">
                <Icons.Finance className="w-8 h-8 text-gold-brand" />
              </div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
                <circle cx="50%" cy="50%" r="4" fill="#C8A96B" />
              </svg>
            </motion.div>
          </div>
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
                className="bg-transparent border border-white/10 rounded-[4px] p-8 md:p-10 flex flex-col justify-between group hover:border-gold-brand/50 transition-colors duration-500"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-white/10 flex items-center justify-center text-gold-brand shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-slate-400 font-semibold group-hover:text-gold-brand transition-colors duration-300">
                        {s.cat}
                      </div>
                      <h3 className="font-display text-[1.5rem] font-medium text-white mt-0.5">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[0.95rem] text-slate-300 leading-relaxed font-light mb-8">
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-slate-400 font-semibold mb-4">
                        Strategic Benefits
                      </h4>
                      <ul className="list-none pl-0 flex flex-col gap-3">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-[0.8rem] text-slate-300 leading-relaxed font-light">
                            <span className="text-gold-brand text-[0.6rem] mt-[5px]">◆</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-slate-400 font-semibold mb-4">
                        Key Deliverables
                      </h4>
                      <ul className="list-none pl-0 flex flex-col gap-3">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-[0.8rem] text-slate-300 leading-relaxed font-light">
                            <span className="text-gold-brand text-[0.6rem] mt-[5px]">◆</span>
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
      <section className="section bg-[#0B1220] text-white relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2.5rem] font-semibold text-white mb-4 tracking-tight">
            Discuss Your Requirements
          </h3>
          <p className="text-[1.05rem] text-slate-300 leading-relaxed mb-10 max-w-[500px] mx-auto font-light">
            Every dialogue is conducted under strict confidentiality protocol. Schedule a conversation with our managing director today.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
          >
            Start Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
