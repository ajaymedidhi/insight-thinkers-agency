import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import CTABand from "../../components/ui/CTABand";

const GROUPS = [
  {
    eyebrow: "Capital",
    title: "Investors",
    items: [
      { title: "Healthcare PE funds", desc: "Relationships with funds investing across South and South-East Asia." },
      { title: "India growth capital", desc: "Engagement with investors focused on pan-India mid-market healthcare." },
      { title: "Family offices", desc: "Direct and co-investment relationships across India, the GCC and Singapore." },
      { title: "UHNI and HNI investors", desc: "Qualified individuals participating directly in healthcare opportunities." },
    ],
  },
  {
    eyebrow: "Operators",
    title: "Healthcare operators",
    items: [
      { title: "Hospital chains", desc: "Groups pursuing inorganic growth and regional consolidation in South India." },
      { title: "Corporate healthcare groups", desc: "Strategic acquirers building pan-India platforms." },
      { title: "Diagnostics networks", desc: "Promoters integrating laboratory operations with institutional partners." },
      { title: "Healthcare platforms", desc: "Digital health businesses seeking co-development and partnerships." },
    ],
  },
  {
    eyebrow: "Technology",
    title: "Technology",
    items: [
      { title: "Healthcare software", desc: "HMS, PACS, clinical documentation and billing platforms." },
      { title: "AI platforms", desc: "Clinical decision support, predictive modelling and EMR integration." },
      { title: "Digital transformation", desc: "Systems integration, including post-acquisition alignment." },
      { title: "Data and analytics", desc: "Business intelligence on clinical revenue and operating margins." },
    ],
  },
];

const PRINCIPLES = [
  {
    title: "Active, not archival",
    desc: "We stay in regular contact with fund managers, family offices and strategic investors, so introductions reflect current appetite rather than an old contact list.",
  },
  {
    title: "Confidential by design",
    desc: "Opportunities are shared with counterparties only under NDA and with the client’s agreement. Promoter identities are protected until both sides are ready.",
  },
];

export default function Network() {
  return (
    <>
      <SEO
        title="Healthcare Network"
        description="How Insight Thinkers Agency connects healthcare operators with private equity funds, family offices, strategic acquirers and technology partners."
        keywords="healthcare private equity India, healthcare investors, hospital acquirers, family offices healthcare"
      />
      <PageHero
        eyebrow="Network"
        title={<>Connecting operators with <em className="text-bronze-ink">the right capital.</em></>}
        lede="Our work sits between healthcare operators, institutional investors, strategic acquirers and technology partners. The right introduction, made at the right time, is often what moves a transaction forward."
      />

      <section aria-label="Relationships" className="section">
        <div className="container-x grid gap-14 lg:grid-cols-3 lg:gap-10">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <p className="eyebrow mb-4">{g.eyebrow}</p>
              <h2 className="h3">{g.title}</h2>
              <dl className="mt-8 border-t border-navy">
                {g.items.map((it) => (
                  <div key={it.title} className="border-b border-line py-5">
                    <dt className="font-medium text-ink">{it.title}</dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed">{it.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="principles-title" className="section border-t border-line bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">How we work</p>
            <h2 id="principles-title" className="h2">How we collaborate</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t border-navy pt-6">
                <h3 className="font-serif text-[1.35rem] text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Partner with us"
        title="Investor, acquirer or operator?"
        body="If you are deploying capital into healthcare, or seeking a partner for growth or exit, we would be glad to understand your criteria."
      />
    </>
  );
}
