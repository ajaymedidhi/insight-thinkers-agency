import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { CORE_SERVICES, SUPPORTING_SERVICES } from "../../content/services";
import { PRIMARY_CTA } from "../../content/site";

/**
 * Advisory practices as interactive rows. The title link stretches over the
 * whole row; the detail panel is always in the DOM, opens on hover or
 * keyboard focus on pointer devices, and is simply shown on touch screens.
 */
export default function ServicesIndex() {
  return (
    <section aria-labelledby="services-title" className="section border-t border-line bg-paper">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            split
            id="services-title"
            eyebrow="Advisory practices"
            title="Four practices, one integrated view of the business."
            intro="In healthcare, transactions, capital, technology and growth are rarely separate questions."
          />
        </Reveal>

        <ol className="mt-16 border-t border-navy">
          {CORE_SERVICES.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 80} id={`practice-${s.id}`} className="scroll-mt-28 border-b border-line">
              <div className="group relative grid gap-4 py-8 transition-colors duration-300 md:grid-cols-12 md:gap-8 md:py-10 hover:bg-ivory/70 focus-within:bg-ivory/70">
                <span
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 -left-4 w-0.5 origin-top scale-y-0 bg-bronze transition-transform duration-500 ease-editorial group-hover:scale-y-100 group-focus-within:scale-y-100 sm:-left-8 lg:-left-12"
                />
                <span className="font-serif text-[1.1rem] text-bronze-ink md:col-span-1">{s.index}</span>
                <div className="md:col-span-5">
                  <h3 className="h3">
                    <Link
                      to={`/services#${s.id}`}
                      className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-serif text-[1.1rem] leading-snug text-bronze-ink italic">{s.question}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[1rem] leading-relaxed">{s.short}</p>
                  <div className="row-detail max-md:hidden">
                    <div>
                      <p className="meta mt-6 mb-3">Typically engaged when</p>
                      <ul className="space-y-2">
                        {s.problems.map((p) => (
                          <li key={p} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-bronze" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-11 w-11 items-center justify-center self-start justify-self-end rounded-full border border-line text-[1.1rem] text-bronze-ink transition-all duration-300 group-hover:translate-x-1 group-hover:border-navy group-hover:bg-navy group-hover:text-white group-focus-within:border-navy md:col-span-1 md:flex"
                >
                  →
                </span>
                {/* Visible focus ring for the stretched link. */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 hidden outline-2 outline-offset-[-2px] outline-bronze-ink group-has-[a:focus-visible]:block" />
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9375rem] text-muted">
            Also: {SUPPORTING_SERVICES.map((x) => x.title).join(" · ")}
          </p>
          <Link to={PRIMARY_CTA.path} className="link-arrow shrink-0">
            Not sure which fits? Ask us <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
