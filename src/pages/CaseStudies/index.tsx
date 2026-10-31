import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Reveal from "../../components/ui/Reveal";
import CTABand from "../../components/ui/CTABand";
import { Link } from "react-router-dom";
import { contactFor } from "../../content/services";

export interface CaseStudy {
  id: string;
  code: string;
  sector: string;
  geography: string;
  headline: string;
  context: string;
  challenge: string;
  strategy: string[];
  outcome: string;
  mandateType: string;
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "south-india-multispecialty",
    code: "CASE-HOSP-01",
    sector: "Multi-Specialty Tertiary Care",
    geography: "Tier-2 Metro, South India",
    headline: "Strategic sell-side evaluation & partner selection for a 200+ bed institution",
    context: "Promoter-founded multi-specialty hospital with consistent 4-year operating history and high surgical throughput, seeking strategic majority recapitalization for geographic expansion.",
    challenge: "Valuation disconnect between real-estate asset backing and operational EBITDA; founder desired to maintain clinical leadership post-acquisition while recapitalizing early debt.",
    strategy: [
      "Structured comprehensive financial model normalizing bed yields and OT utilization rates",
      "Drafted institutional-grade Information Memorandum highlighting hard-asset asset coverage",
      "Curated non-disclosure outreach to 8 institutional hospital operators and regional healthcare PE funds",
    ],
    outcome: "Generated multiple non-binding offers with valuation premium reflecting high asset tangibility; transaction structured with rollover minority stake protecting clinical autonomy.",
    mandateType: "Sell-Side M&A Advisory",
    tags: ["M&A", "Hospitals", "Valuation", "Sell-Side"],
  },
  {
    id: "regional-diagnostic-platform",
    code: "CASE-DIAG-02",
    sector: "Diagnostic & Imaging Network",
    geography: "Hub & Spoke Network, Telangana & AP",
    headline: "Growth capital syndication and radiology technology overhaul for regional network",
    context: "Established diagnostic provider operating 14 centers seeking ₹35 Cr expansion equity to finance high-end MRI/CT equipment and enter adjacent semi-urban markets.",
    challenge: "Fragmented legacy RIS/PACS systems and decentralized accounting created reporting lags during preliminary institutional diligence.",
    strategy: [
      "Integrated technology diligence: deployed customized cloud-native PACS and automated MIS reporting",
      "Formulated 5-year unit-economic expansion model highlighting payback periods on high-value scanning assets",
      "Mapped family office and growth equity investors with explicit mandates for Indian healthcare infrastructure",
    ],
    outcome: "Secured growth equity term sheet alongside vendor-financing lines for new modalities at reduced borrowing costs.",
    mandateType: "Growth Capital & HealthTech Diligence",
    tags: ["Capital Raising", "Diagnostics", "HealthTech"],
  },
  {
    id: "digital-health-transformation",
    code: "CASE-TECH-03",
    sector: "Hospital Network Technology",
    geography: "Pan-South India",
    headline: "Pre-acquisition clinical software audit and post-merger integration framework",
    context: "Private equity fund evaluating a ₹180 Cr buyout of a 3-hospital consortium required an objective technical appraisal of clinical and billing software architectures.",
    challenge: "Risk of unrecorded liabilities, revenue leakage via pharmacy billing, and fragmented proprietary code with single-developer dependency.",
    strategy: [
      "Conducted proprietary code-level and cybersecurity diligence across in-house hospital management systems",
      "Quantified potential annual billing leakage mitigation via standardized EMR/HIS protocols",
      "Engineered a 90-day post-closing migration blueprint to enterprise-grade clinical software",
    ],
    outcome: "Diligence findings adjusted deal valuation terms favorably for the acquirer and accelerated closing timetable by 4 weeks.",
    mandateType: "Technology Due Diligence",
    tags: ["HealthTech", "Due Diligence", "Private Equity"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Representative Case Studies & Mandates"
        description="Explore anonymized case studies of healthcare M&A, growth capital syndication, and hospital technology advisory conducted by Insight Thinkers Agency."
        keywords="healthcare case studies, hospital M&A India, hospital sale advisory, healthcare private equity deal examples"
      />

      <PageHero
        eyebrow="Case Studies & Track Record"
        title={<>Representative mandates, <em className="text-bronze-ink">rigorous execution.</em></>}
        lede="To maintain strict client confidentiality, transaction parameters and identifying markers are anonymized. These case studies illustrate our strategic methodology and execution standards."
        actions={
          <Link to="/contact" className="btn-primary">
            Discuss Your Situation <span className="arrow" aria-hidden="true">→</span>
          </Link>
        }
      />

      <section aria-labelledby="case-studies-heading" className="section border-t border-line">
        <div className="container-x">
          <SectionHeading
            split
            id="case-studies-heading"
            eyebrow="Proven Methodology"
            title="Advising at the intersection of capital, clinical operations and technology."
            intro="Every engagement is led directly by our founder, ensuring senior-level discretion and institutional thoroughness from initial appraisal to final closing."
          />

          <div className="mt-16 space-y-12">
            {CASE_STUDIES.map((c, i) => (
              <Reveal
                as="article"
                key={c.id}
                delay={i * 90}
                className="border border-line bg-paper p-8 lg:p-12 transition-all duration-300 hover:border-navy hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-[1rem] text-bronze-ink font-semibold">{c.code}</span>
                    <span aria-hidden="true" className="text-line">|</span>
                    <span className="text-[0.875rem] font-medium text-ink">{c.mandateType}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line/80 bg-ivory px-2.5 py-0.5 text-[0.75rem] uppercase tracking-wider text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.18] text-ink">
                      {c.headline}
                    </h2>
                    <p className="mt-5 text-[1rem] leading-relaxed text-body">{c.context}</p>

                    <div className="mt-6 border-l-2 border-bronze pl-4">
                      <p className="meta text-bronze-ink">The Challenge</p>
                      <p className="mt-1 text-[0.9375rem] text-ink leading-relaxed">{c.challenge}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
                    <p className="meta text-bronze-ink">Advisory Strategy & Execution</p>
                    <ul className="mt-4 space-y-3">
                      {c.strategy.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-line pt-6">
                      <p className="meta text-bronze-ink">The Outcome</p>
                      <p className="mt-2 font-serif text-[1.1rem] leading-snug text-ink">{c.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6 text-[0.875rem] text-muted">
                  <p>Geography: <span className="text-ink">{c.geography}</span> · Sector: <span className="text-ink">{c.sector}</span></p>
                  <Link to={contactFor("Healthcare M&A / Transaction Advisory")} className="link-arrow text-[0.875rem]">
                    Inquire about similar mandate <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Have a mandate in mind?"
        title="Schedule a confidential evaluation of your business."
        body="Whether assessing an exit, raising expansion capital, or preparing for institutional diligence, we begin with a candid, exploratory discussion."
      />
    </>
  );
}
