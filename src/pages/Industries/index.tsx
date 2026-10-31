import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import SectionHeading from "../../components/ui/SectionHeading";
import Reveal from "../../components/ui/Reveal";
import CTABand from "../../components/ui/CTABand";
import { Link } from "react-router-dom";
import { HEALTHCARE_SECTORS } from "../../components/home/IndustriesSection";
import { contactFor } from "../../content/services";

export default function Industries() {
  return (
    <>
      <SEO
        title="Healthcare Sectors & Industry Practices"
        description="Explore Insight Thinkers Agency's specialized advisory expertise across hospitals, diagnostic networks, clinical healthtech platforms, and specialty surgical centers."
        keywords="healthcare sectors, hospital M&A India, diagnostic chains valuation, digital health advisory, clinic rollups"
      />

      <PageHero
        eyebrow="Sector Specialization"
        title={<>Specialist advisory across <em className="text-bronze-ink">key healthcare verticals.</em></>}
        lede="We believe healthcare transactions cannot be handled by generalist bankers. Each sub-sector possesses distinct revenue dynamics, regulatory barriers, doctor-engagement models, and capital expenditure profiles."
        actions={
          <Link to="/contact" className="btn-primary">
            Discuss Sector Mandate <span className="arrow" aria-hidden="true">→</span>
          </Link>
        }
      />

      <section aria-labelledby="sectors-detail-heading" className="section border-t border-line">
        <div className="container-x">
          <SectionHeading
            split
            id="sectors-detail-heading"
            eyebrow="Coverage"
            title="Where we advise and transact"
            intro="Our sector coverage spans traditional inpatient infrastructure to emerging clinical software platforms across South India and pan-India."
          />

          <div className="mt-16 space-y-16">
            {HEALTHCARE_SECTORS.map((s, idx) => (
              <Reveal
                as="div"
                key={s.id}
                id={s.id}
                className="scroll-mt-28 border border-line bg-paper p-8 lg:p-12 transition-colors hover:border-navy"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden border border-line">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-editorial hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center border border-white/20 bg-navy-deep/85 text-white backdrop-blur-sm">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d={s.iconSvg} />
                        </svg>
                      </div>
                    </div>
                    <span className="block font-serif text-[1.1rem] text-bronze-ink font-semibold">0{idx + 1}</span>
                    <h2 className="mt-2 font-serif text-[clamp(1.75rem,2.8vw,2.3rem)] leading-snug text-ink">{s.name}</h2>
                    <p className="mt-4 text-[1rem] leading-relaxed text-body">{s.scope}</p>

                    <div className="mt-8 border-t border-line pt-6">
                      <Link to={contactFor("Healthcare M&A / Transaction Advisory")} className="btn-outline">
                        Inquire for this vertical <span className="arrow" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>


                  <div className="lg:col-span-7 lg:border-l lg:border-line lg:pl-10">
                    <p className="meta text-bronze-ink">Operational & Transaction Realities</p>
                    <ul className="mt-4 space-y-3">
                      {s.characteristics.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-ink">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-l-2 border-bronze bg-ivory/60 p-6">
                      <p className="meta text-bronze-ink">Representative Advisory Mandate</p>
                      <p className="mt-2 font-serif text-[1.15rem] leading-snug text-ink italic">
                        "{s.mandateExample}"
                      </p>
                      <p className="mt-3 text-[0.8125rem] text-muted">
                        All transaction details are protected under strict non-disclosure agreements with qualified counterparties.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Exploring a strategic transaction?"
        title="Connect directly with our sector principals."
        body="We provide objective, conflict-free advice tailored to your sector's operational realities and valuation benchmarks."
      />
    </>
  );
}
