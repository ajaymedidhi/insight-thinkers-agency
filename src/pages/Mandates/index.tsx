import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import CTABand from "../../components/ui/CTABand";
import MandateList from "../../components/shared/MandateList";
import { MANDATE_VALUE } from "../../content/site";

const SECTORS = [
  { title: "Hospitals", desc: "Single- and multi-specialty hospitals, clinics and long-term care facilities." },
  { title: "Specialty clinics", desc: "Dental groups, eye care, IVF centres and other specialist providers." },
  { title: "Diagnostics", desc: "Regional laboratory networks, imaging centres and pathology chains." },
  { title: "HealthTech", desc: "EMR, hospital management systems, PACS and other clinical software businesses." },
  { title: "Medical infrastructure", desc: "Healthcare real estate and purpose-built hospital facilities." },
  { title: "Healthcare services", desc: "Medical procurement, home healthcare and allied service providers." },
];

const TX_TYPES = [
  { title: "Sell-side advisory", desc: "Confidential, competitive exits and partial sales for healthcare promoters." },
  { title: "Buy-side advisory", desc: "Identifying and evaluating hospital and diagnostic assets for acquirers." },
  { title: "Growth capital", desc: "Equity from healthcare-focused funds, family offices and strategic investors." },
  { title: "Mergers", desc: "Combinations of mid-market healthcare businesses and platforms." },
  { title: "Joint ventures", desc: "Collaborative structures with clinical and operating partners." },
  { title: "Strategic partnerships", desc: "Operating and cross-border partnerships for healthcare businesses." },
];

const PROCESS = [
  { label: "Initial discussion", desc: "Exploratory alignment on objectives and fit." },
  { label: "NDA", desc: "Mutual confidentiality agreement before any sensitive information is shared." },
  { label: "Evaluation", desc: "Financial, operational and technology review of the business." },
  { label: "Positioning", desc: "Preparing the information memorandum and transaction materials." },
  { label: "Outreach", desc: "Approaching pre-qualified investors and strategic buyers." },
  { label: "Negotiation", desc: "Term sheet, SPA and SHA negotiation, and deal structure." },
  { label: "Closing", desc: "Documentation, conditions precedent and signing." },
];

const DIFFERENTIATORS = [
  {
    title: "Founder-led throughout",
    desc: "The founder leads every engagement personally, from origination to close. Clients deal with a principal, not a relay of associates.",
  },
  {
    title: "Technology understood from the inside",
    desc: "We have built and operate healthcare platforms — HMS, PACS and EMR — deployed across 50+ institutions, so technology diligence is grounded in practice.",
  },
  {
    title: "Integrated execution",
    desc: "Financial modelling, positioning, technology evaluation and investor outreach are handled together, so nothing important falls between advisers.",
  },
  {
    title: "Investor relationships",
    desc: "Working relationships with healthcare-focused funds, family offices and strategic investors across India, the GCC and South-East Asia.",
  },
];

export default function Mandates() {
  return (
    <>
      <SEO
        title="Mandates & Transaction Process"
        description="Active healthcare advisory mandates, sectors covered, transaction types and the Insight Thinkers Agency transaction process."
        keywords="hospital for sale India, healthcare M&A mandates, hospital acquisition, healthcare growth capital"
      />
      <PageHero
        eyebrow="Mandates"
        title={<>Healthcare transactions, <em className="text-bronze-ink">handled with care.</em></>}
        lede="We support healthcare founders, operators, investors and strategic buyers through sales, acquisitions and capital raises — from preparation to signing."
        aside={
          <dl className="border-t border-navy">
            <div className="border-b border-line py-4">
              <dt className="meta">Exclusive mandates in progress</dt>
              <dd className="mt-1 font-serif text-[2rem] text-ink">3</dd>
            </div>
            <div className="border-b border-line py-4">
              <dt className="meta">Under active mandate</dt>
              <dd className="mt-1 font-serif text-[2rem] text-ink">
                {MANDATE_VALUE.value}
                <span className="ml-[0.15em] text-bronze-ink">{MANDATE_VALUE.suffix}</span>
              </dd>
              <dd className="mt-1 text-[0.875rem] text-muted">{MANDATE_VALUE.basis}. Not completed transactions.</dd>
            </div>
          </dl>
        }
      />

      <section aria-labelledby="active-title" className="on-navy section bg-navy text-on-navy">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5">Current engagements</p>
              <h2 id="active-title" className="h2">Active mandates</h2>
            </div>
            <p className="lede self-end lg:col-span-5 lg:col-start-8">
              Asset details are anonymised to protect promoters and their operations. Information memoranda and financials are
              released only to qualified counterparties, after verification and a signed NDA.
            </p>
          </div>
          <div className="mt-14">
            <MandateList />
          </div>
          <Link to="/contact" className="btn-bronze mt-10">
            Request information as a qualified party <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="sectors-title" className="section">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading id="sectors-title" eyebrow="Coverage" title="Sectors" />
            <dl className="mt-10 border-t border-navy">
              {SECTORS.map((s) => (
                <div key={s.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-serif text-[1.2rem] text-ink">{s.title}</dt>
                  <dd className="text-[0.98rem] leading-relaxed">{s.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeading eyebrow="Structures" title="Transaction types" />
            <dl className="mt-10 border-t border-navy">
              {TX_TYPES.map((t) => (
                <div key={t.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-serif text-[1.2rem] text-ink">{t.title}</dt>
                  <dd className="text-[0.98rem] leading-relaxed">{t.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="section border-t border-line bg-paper">
        <div className="container-x">
          <SectionHeading
            split
            id="process-title"
            eyebrow="Process"
            title="The transaction process"
            intro="Seven stages, adapted to each mandate. Confidentiality is established before anything sensitive is exchanged."
          />
          <ol className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.label} className="border-t border-line pt-5">
                <span className="font-serif text-[1.1rem] text-bronze-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-[1.3rem] text-ink">{p.label}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="why-title" className="section border-t border-line">
        <div className="container-x">
          <SectionHeading id="why-title" eyebrow="Why work with us" title="What clients can expect" />
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="grid gap-3 border-t border-navy pt-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
                <h3 className="font-serif text-[1.35rem] leading-snug text-ink">{d.title}</h3>
                <p className="text-[0.98rem] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Exploring a sale, acquisition or capital raise?" />
    </>
  );
}
