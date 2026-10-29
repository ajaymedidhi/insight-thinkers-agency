import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import CTABand from "../../components/ui/CTABand";
import ApproachSteps from "../../components/shared/ApproachSteps";
import { COMPANY, FOUNDER } from "../../content/site";

const MISSION = [
  {
    title: "Bring institutional discipline to healthcare’s middle market",
    desc: "Applying the strategic and financial rigour usually reserved for large enterprises to mid-sized hospitals, clinics and diagnostic businesses.",
  },
  {
    title: "Join strategy to execution",
    desc: "Creating enterprise value by connecting transaction strategy with the technology and commercial capability that sustain it, rather than leaving clients to coordinate fragmented advisers.",
  },
];

const VALUES = [
  {
    title: "Integrity",
    desc: "Financial models, recommendations and representations are prepared to professional standards. Transparency with clients is non-negotiable.",
  },
  {
    title: "Discretion",
    desc: "We handle client information on a need-to-know basis and put mutual NDAs in place before sensitive information is shared.",
  },
  {
    title: "Selectivity",
    desc: "We take on engagements where we believe we can make a real difference, and prefer depth of execution to volume of clients.",
  },
  {
    title: "Long-term relationships",
    desc: "Our interest extends beyond a single transaction to the long-term health of the businesses we advise.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About the Firm"
        description="Insight Thinkers Agency is a healthcare advisory firm based in Hyderabad, combining transaction advisory with healthcare technology and growth expertise."
        keywords="Insight Thinkers Agency, healthcare advisory firm Hyderabad, healthcare M&A India"
      />
      <PageHero
        eyebrow="About the firm"
        title={<>A healthcare adviser that understands <em className="text-bronze-ink">the whole business.</em></>}
        lede={`${COMPANY.name} works at the meeting point of corporate finance, healthcare operations and technology. We believe a specialist sector deserves specialist advice.`}
        aside={
          <dl className="border-t border-navy text-[0.95rem]">
            {[
              ["Based in", COMPANY.location],
              ["Active across", COMPANY.coverage],
              ["Led by", `${FOUNDER.name}, ${FOUNDER.title}`],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-line py-4">
                <dt className="meta">{k}</dt>
                <dd className="mt-1 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section aria-labelledby="origin-title" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">Our origin</p>
            <h2 id="origin-title" className="h2">Built to close a gap in healthcare advice.</h2>
            <div className="lede mt-8 space-y-5">
              <p>
                The firm was founded to address a recurring problem: advisers tend to work in silos. Financiers may not understand
                clinical workflows; technologists may not understand transaction structures; marketers may not see how growth
                affects valuation.
              </p>
              <p>
                We built an integrated model instead — bringing transaction discipline, commercial strategy and healthcare
                technology together so that every recommendation reflects the whole business.
              </p>
            </div>
          </div>
          <figure className="self-center border-l-2 border-bronze pl-8 lg:col-span-5 lg:col-start-8">
            <blockquote className="font-serif text-[1.6rem] leading-snug text-ink italic">
              “Healthcare growth cannot be siloed. Financial structure, patient acquisition and technology must work together to
              create lasting value.”
            </blockquote>
            <figcaption className="meta mt-6">{FOUNDER.name}, {FOUNDER.title}</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="mission-title" className="section border-t border-line bg-paper">
        <div className="container-x">
          <SectionHeading id="mission-title" eyebrow="Mission" title="What we set out to do" />
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            {MISSION.map((m, i) => (
              <div key={m.title} className="border-t border-navy pt-6">
                <span className="font-serif text-[1.1rem] text-bronze-ink">0{i + 1}</span>
                <h3 className="h3 mt-4">{m.title}</h3>
                <p className="mt-4 text-[1rem] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="section border-t border-line">
        <div className="container-x">
          <SectionHeading
            split
            id="approach-title"
            eyebrow="Approach"
            title="How we engage"
            intro="By combining transaction advisory, healthcare technology and commercial strategy under one roof, we reduce friction between advisers and keep every workstream aligned to the client’s objective."
          />
          <div className="mt-16">
            <ApproachSteps />
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="section border-t border-line bg-paper">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Values</p>
            <h2 id="values-title" className="h2">What we hold to</h2>
            <div className="mt-10 flex flex-col gap-3">
              <Link to="/leadership" className="link-arrow">Meet the founder <span className="arrow" aria-hidden="true">→</span></Link>
              <Link to="/network" className="link-arrow">Our network <span className="arrow" aria-hidden="true">→</span></Link>
            </div>
          </div>
          <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-navy pt-6">
                <dt className="font-serif text-[1.35rem] text-ink">{v.title}</dt>
                <dd className="mt-3 text-[0.98rem] leading-relaxed">{v.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABand />
    </>
  );
}
