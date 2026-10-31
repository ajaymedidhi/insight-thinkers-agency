import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import CTABand from "../../components/ui/CTABand";
import FounderPortrait from "../../components/ui/FounderPortrait";
import { ARTICLES, isoDate } from "../../constants/insights";
import { FOUNDER, PRIMARY_CTA } from "../../content/site";

const EXPERTISE = [
  {
    title: "Healthcare M&A and deal advisory",
    desc: "Originating and structuring healthcare transactions in South India, personally leading mandates from first approach through documentation.",
  },
  {
    title: "Equity financing and investor relations",
    desc: "Structuring equity financing for healthcare operators and connecting them with PE funds, family offices and institutional investors across India and South-East Asia.",
  },
  {
    title: "Healthcare technology products",
    desc: "Building healthcare technology platforms — HMS, PACS and EMR — deployed across 50+ hospitals and diagnostic centres, and still actively operated.",
  },
  {
    title: "Digital strategy and go-to-market",
    desc: "Leading go-to-market strategy, marketing and brand building for 50+ healthcare institutions across South India — the sector knowledge that underpins the advisory practice.",
  },
];

const JOURNEY = [
  {
    title: "Insight Thinkers Agency founded",
    desc: "Established on a single thesis: healthcare transactions deserve an adviser who understands capital, clinical operations and technology together.",
  },
  {
    title: "Digital and marketing foundation",
    desc: "Go-to-market and marketing capability built across 50+ hospitals and healthcare brands — the sector intelligence base for later advisory work.",
  },
  {
    title: "Healthcare technology products",
    desc: "HMS, PACS and EMR platforms built and deployed across 50+ institutions, giving first-hand technology insight.",
  },
  {
    title: "M&A advisory practice",
    desc: "Advisory practice opened for healthcare transactions in South India, with investor relationships across South and South-East Asia.",
  },
  {
    title: "Today",
    desc: "Exclusive advisory mandates on operational hospital assets, currently in progress.",
  },
];

export default function Leadership() {
  const first = FOUNDER.name.split(" ")[0];
  return (
    <>
      <SEO
        title={`${FOUNDER.name} — ${FOUNDER.title}`}
        description={`${FOUNDER.name}, ${FOUNDER.title} of Insight Thinkers Agency, leads healthcare M&A, capital raising and technology advisory mandates.`}
        keywords={`${FOUNDER.name}, Insight Thinkers Agency founder, healthcare M&A advisor India`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: FOUNDER.name,
          jobTitle: FOUNDER.title,
          worksFor: { "@type": "Organization", name: "Insight Thinkers Agency" },
        }}
      />

      <header className="border-b border-line pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise-1 mb-6">Leadership</p>
            <h1 className="display animate-rise-2">{FOUNDER.name}</h1>
            <p className="animate-rise-2 mt-4 font-serif text-[1.5rem] text-bronze-ink italic">{FOUNDER.title}</p>
            <div className="lede animate-rise-3 mt-10 max-w-[38rem] space-y-5">
              <p>
                {FOUNDER.name} founded Insight Thinkers Agency to build a firm that combines the rigour of transaction advisory with
                hands-on capability in healthcare growth and technology.
              </p>
              <p>
                {first}’s experience comes from direct execution: leading healthcare transaction mandates, building investor
                relationships, scaling marketing programmes and building clinical software used across 50+ healthcare institutions.
              </p>
            </div>
            <Link to={PRIMARY_CTA.path} className="btn-primary animate-rise-3 mt-10">
              Arrange a confidential conversation <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <FounderPortrait />
          </div>
        </div>
      </header>

      <section aria-label="Founder’s philosophy" className="section bg-paper">
        <figure className="container-x max-w-[60rem]">
          <blockquote className="font-serif text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.25] tracking-[-0.01em] text-ink">
            “We decline more mandates than we accept. Every engagement carries our name, and we do not take on mandates we cannot
            see through with the rigour institutional counterparties expect.”
          </blockquote>
          <figcaption className="meta mt-8">{FOUNDER.name}, {FOUNDER.title}</figcaption>
        </figure>
      </section>

      <section aria-labelledby="expertise-title" className="section border-t border-line">
        <div className="container-x">
          <div className="max-w-[38rem] mb-14">
            <p className="eyebrow mb-4">Advisory Capabilities</p>
            <h2 id="expertise-title" className="h2 text-ink">Personal leadership across all strategic disciplines.</h2>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {EXPERTISE.map((e, i) => (
              <div key={e.title} className="bg-paper p-8 lg:p-10 transition-colors duration-300 hover:bg-ivory">
                <span className="font-serif text-[1rem] font-semibold text-bronze-ink">0{i + 1}</span>
                <h3 className="h3 mt-4 text-ink">{e.title}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-body">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="journey-title" className="section border-t border-line bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Pedigree & Track Record</p>
            <h2 id="journey-title" className="h2 text-ink">Built on direct operating experience.</h2>
            <p className="lede mt-6 text-body">
              How technical software engineering, healthcare commercialization, and investment banking convergence shaped the firm.
            </p>
          </div>
          <ol className="border-t border-navy/20 lg:col-span-8">
            {JOURNEY.map((j, i) => (
              <li key={j.title} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[14rem_1fr] sm:gap-8 transition-colors hover:bg-ivory/50 px-2 sm:px-4">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                  <span className="font-serif text-[0.8rem] font-medium text-bronze-ink uppercase tracking-wider">Milestone 0{i + 1}</span>
                  <h3 className="font-serif text-[1.2rem] text-ink font-normal">{j.title}</h3>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-body">{j.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      <section aria-labelledby="writing-title" className="section border-t border-line">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Writing</p>
              <h2 id="writing-title" className="h2">Published perspectives</h2>
            </div>
            <Link to="/insights" className="link-arrow">All insights <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
          <ul className="mt-12 grid gap-x-10 md:grid-cols-2">
            {ARTICLES.slice(0, 4).map((a) => (
              <li key={a.slug} className="border-t border-line">
                <Link to={`/insights/${a.slug}`} className="group block py-6">
                  <p className="meta">{a.category}</p>
                  <h3 className="mt-2 font-serif text-[1.3rem] leading-snug text-ink decoration-bronze underline-offset-4 group-hover:underline">{a.title}</h3>
                  <p className="mt-2 text-[0.875rem] text-muted"><time dateTime={isoDate(a.date)}>{a.date}</time></p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Speak with the founder directly."
        body="Whether you are planning an exit, raising capital or evaluating an acquisition, the first conversation is with the founder."
      />
    </>
  );
}
