import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import CTABand from "../../components/ui/CTABand";
import Reveal from "../../components/ui/Reveal";
import SectionHeading from "../../components/ui/SectionHeading";
import ApproachSteps from "../../components/shared/ApproachSteps";
import { CORE_SERVICES, SUPPORTING_SERVICES, contactFor } from "../../content/services";
import { PRIMARY_CTA } from "../../content/site";

export default function Services() {
  return (
    <>
      <SEO
        title="Advisory Services"
        description="Healthcare M&A and transaction advisory, capital raising and corporate finance, healthcare technology advisory, and strategic growth for hospitals, clinics and diagnostic businesses."
        keywords="healthcare M&A advisory, hospital sale, healthcare capital raising, HMS PACS EMR, healthcare growth strategy"
      />
      <PageHero
        eyebrow="Advisory services"
        title={<>Advice that connects capital, operations <em className="text-bronze-ink">and technology.</em></>}
        lede="Four core practices for hospital owners, healthcare entrepreneurs and investors — supported by specialist capabilities when a mandate needs them."
        actions={
          <Link to={PRIMARY_CTA.path} className="btn-primary">
            {PRIMARY_CTA.label} <span className="arrow" aria-hidden="true">→</span>
          </Link>
        }
        aside={
          <nav aria-label="On this page">
            <p className="meta mb-4">On this page</p>
            <ol className="border-t border-line">
              {CORE_SERVICES.map((s) => (
                <li key={s.id} className="border-b border-line">
                  <a href={`#${s.id}`} className="flex gap-4 py-3 text-[0.95rem] text-ink hover:text-bronze-ink">
                    <span className="font-serif text-bronze-ink">{s.index}</span>
                    {s.title}
                  </a>
                </li>
              ))}
              <li className="border-b border-line">
                <a href="#supporting" className="flex gap-4 py-3 text-[0.95rem] text-ink hover:text-bronze-ink">
                  <span className="font-serif text-bronze-ink">+</span>
                  Supporting capabilities
                </a>
              </li>
            </ol>
          </nav>
        }
      />

      {CORE_SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={`section scroll-mt-24 ${i % 2 === 1 ? "bg-paper" : "bg-ivory"} border-b border-line`}
        >
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[2.5rem] leading-none text-bronze-ink font-semibold">{s.index}</span>
                <span className="h-px flex-1 bg-line" />
              </div>

              <h2 id={`${s.id}-title`} className="h2 mt-6 text-ink">{s.title}</h2>
              <p className="mt-5 font-serif text-[1.25rem] leading-snug text-bronze-ink italic">"{s.question}"</p>
              
              <div className="mt-8 border-l-2 border-bronze bg-paper p-5 shadow-xs">
                <span className="meta mb-2 block text-bronze-ink font-semibold">Target Counterparties</span>
                <p className="text-[0.95rem] leading-relaxed text-ink">{s.forWhom}</p>
              </div>

              <div className="mt-8">
                <h3 className="meta mb-3 text-muted">Typical Mandate Triggers</h3>
                <ul className="space-y-2.5">
                  {s.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7 flex flex-col justify-between border-t border-line pt-8 lg:border-t-0 lg:border-l lg:border-line lg:pl-12 lg:pt-0">
              <div>
                <p className="lede text-ink/90 font-normal">{s.purpose}</p>

                <div className="mt-8 border-t border-line pt-8">
                  <h3 className="meta mb-4 text-bronze-ink">Advisory Scope & Execution Standards</h3>
                  <ul className="space-y-3">
                    {s.scope.map((x) => (
                      <li key={x} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-body">
                        <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-bronze" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 border-t border-line pt-8">
                  <h3 className="meta mb-4 text-bronze-ink">Key Deliverables</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 border border-line/80 bg-paper px-3.5 py-2.5 text-[0.875rem] text-ink shadow-2xs">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze-ink shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-line/60">
                <Link to={contactFor(s.topic)} className="btn-primary">
                  Discuss a mandate in this practice <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}


      <section aria-labelledby="approach-title" className="section border-t border-line">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              split
              id="approach-title"
              eyebrow="How an engagement runs"
              title="The same discipline, whichever practice leads."
              intro="Each mandate is shaped to the client’s objective. The sequence below is how we take a first conversation through to an outcome that holds its value."
            />
          </Reveal>
          <div className="mt-16">
            <ApproachSteps />
          </div>
        </div>
      </section>

      <section id="supporting" aria-labelledby="supporting-title" className="section scroll-mt-20 border-t border-line bg-sand/50">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-5">Supporting capabilities</p>
            <h2 id="supporting-title" className="h2 max-w-[24ch]">Specialist support, available alongside a mandate.</h2>
          </Reveal>
          <Reveal delay={120} className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {SUPPORTING_SERVICES.map((s) => (
              <div key={s.title} className="border-t border-navy pt-6">
                <h3 className="font-serif text-[1.35rem] leading-snug text-ink">{s.title}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand title="Discuss your requirements." />
    </>
  );
}
