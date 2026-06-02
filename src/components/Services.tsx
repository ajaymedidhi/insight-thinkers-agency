import { Icons } from "./Icons";

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
  return (
    <section id="services" className="section bg-slate-brand border-t border-border-brand">
      <div className="wrap">
        {/* Services Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-[76px] items-start mb-[72px]">
          <div>
            <div className="eyebrow">Our Capabilities</div>
            <h2 className="display-sm">
              Integrated Services for <em>Frictionless Transactions.</em>
            </h2>
            <p className="body-lg mt-5">
              Healthcare M&A fails when diligence is compartmentalized. We execute the full advisory spectrum under one roof — ensuring that financial models reflect clinical realities and technology audits align with SEBI-compliant transaction docs.
            </p>
            <p className="body-md mt-4">
              We do not act as mere brokers who introduce buyers and sellers. We act as co-engineers of the transaction — managing everything from forensics to post-merger integration frameworks.
            </p>
            <div className="flex items-center gap-3 flex-wrap mt-8">
              <button
                className="inline-flex items-center gap-2 cursor-pointer border-none font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-ink text-white px-[26px] py-[13px] shadow-[0_4px_16px_rgba(10,22,40,0.2)] hover:bg-ink2 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(10,22,40,0.28)]"
                onClick={() => go("contact")}
              >
                Confidential Inquiry <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
              <button
                className="inline-flex items-center gap-2 cursor-pointer font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-transparent text-ink border-[1.5px] border-border-brand px-6 py-[12px] hover:border-ink hover:bg-ink hover:text-white"
                onClick={() => go("contact")}
              >
                Request Credentials <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
            {SERVICES.map((s) => {
              const IconComp = s.Icon;
              return (
                <div
                  key={s.title}
                  className="group bg-white border border-border-brand rounded-[13px] p-[30px_26px] relative overflow-hidden transition-all duration-200 hover:shadow-sh2 hover:-translate-y-1"
                >
                  {/* top highlight line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-brand scale-x-0 origin-left transition-transform duration-[350ms] ease-out group-hover:scale-x-100" />
                  
                  <div className="w-[46px] h-[46px] rounded-[10px] bg-gradient-to-br from-ink to-ink3 flex items-center justify-center text-white mb-4">
                    <IconComp className="w-[21px] h-[21px]" />
                  </div>

                  <div className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-blue-brand mb-[7px]">
                    {s.cat}
                  </div>

                  <h3 className="font-display text-[1.14rem] font-semibold text-ink mb-[9px] group-hover:text-blue-brand transition-colors duration-200">
                    {s.title}
                  </h3>

                  <p className="text-[0.82rem] text-muted-brand leading-[1.72] mb-4">
                    {s.body}
                  </p>

                  <ul className="list-none flex flex-col gap-1.25">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-1.75 text-[0.77rem] text-muted-brand leading-relaxed"
                      >
                        <span className="text-blue-brand text-[0.7rem] mt-[2px] shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Box */}
        <div className="bg-ink rounded-[18px] p-8 md:p-[52px] shadow-sh3">
          <h3 className="font-display text-[1.9rem] font-semibold text-white mb-1.5">
            Engagement Workflow
          </h3>
          <p className="text-[0.88rem] text-slate-500 mb-11">
            A structured, NDA-protected protocol engineered to minimise noise and protect asset confidentiality.
          </p>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-0">
            {/* connecting line (only on desktop screen) */}
            <div className="hidden lg:block absolute top-[19px] left-[8%] right-[8%] h-[1px] bg-white/10 pointer-events-none" />

            {PROCESS.map((p) => (
              <div key={p.n} className="flex flex-col items-center text-center gap-2.5 relative z-10">
                <div className="w-[38px] h-[38px] rounded-full bg-blue-brand flex items-center justify-center font-mono text-[0.7rem] text-white shrink-0 shadow-md">
                  {p.n}
                </div>
                <div className="text-[0.77rem] font-semibold text-white leading-[1.3]">
                  {p.t}
                </div>
                <div className="text-[0.69rem] text-slate-500 leading-[1.4] max-w-[130px]">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
