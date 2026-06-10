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
            Integrated Growth <span className="font-display italic font-normal text-blue-brand">Services</span>
          </h1>
          <p className="body-lg mt-6 max-w-[680px] mx-auto">
            Multi-disciplinary advisory and execution for healthcare enterprises. From M&A structuring to digital marketing and technology deployment.
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
