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
          className={`section scroll-mt-20 ${i % 2 === 1 ? "bg-paper" : ""} ${i > 0 ? "border-t border-line" : ""}`}
        >
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <span className="font-serif text-[3rem] leading-none text-bronze-ink">{s.index}</span>
              <h2 id={`${s.id}-title`} className="h2 mt-6">{s.title}</h2>
              <p className="mt-6 font-serif text-[1.3rem] leading-snug text-bronze-ink italic">{s.question}</p>
              <p className="mt-8 border-l-2 border-bronze pl-5 text-[0.98rem] leading-relaxed">
                <span className="meta mb-2 block">Typically for</span>
                {s.forWhom}
              </p>
              <div className="mt-8">
                <h3 className="meta mb-3">Typically engaged when</h3>
                <ul className="space-y-2">
                  {s.problems.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-bronze" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <p className="lede">{s.purpose}</p>
              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {s.scope.map((x) => (
                  <li key={x} className="flex gap-3 text-[1rem] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-bronze" />
                    {x}
                  </li>
                ))}
              </ul>
              <h3 className="meta mt-10 mb-4">What the engagement can include</h3>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="border-b border-line py-3 text-[0.98rem] text-ink">{d}</li>
                ))}
              </ul>
              <Link to={contactFor(s.topic)} className="btn-outline mt-10">
                Discuss a mandate in this practice <span className="arrow" aria-hidden="true">→</span>
              </Link>
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
