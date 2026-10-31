import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { CORE_SERVICES } from "../../content/services";


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

        <div className="mt-16 grid gap-px border border-navy/20 bg-line sm:grid-cols-2">
          {CORE_SERVICES.map((s, i) => (
            <Reveal
              as="div"
              key={s.id}
              delay={i * 90}
              id={`practice-${s.id}`}
              className="group relative flex flex-col justify-between bg-paper p-8 lg:p-12 transition-all duration-300 hover:bg-ivory"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-editorial group-hover:scale-x-100"
              />
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                  <span className="font-serif text-[1.2rem] font-medium text-bronze-ink">{s.index}</span>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Practice Pillar
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[clamp(1.6rem,2.2vw,2rem)] leading-snug text-ink">
                  <Link to={`/services#${s.id}`} className="hover:text-bronze-ink transition-colors">
                    {s.title}
                  </Link>
                </h3>

                <p className="mt-4 font-serif text-[1.125rem] leading-snug text-bronze-ink italic">
                  "{s.question}"
                </p>

                <p className="mt-4 text-[0.98rem] leading-relaxed text-body">
                  {s.short}
                </p>

                <div className="mt-8 border-t border-line/70 pt-5">
                  <p className="meta text-bronze-ink mb-3">Typically Engaged When</p>
                  <ul className="space-y-2">
                    {s.problems.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                <Link
                  to={`/services#${s.id}`}
                  className="link-arrow text-[0.8125rem]"
                >
                  Practice Scope & Deliverables <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-none border border-line text-bronze-ink transition-all duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white"
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-line pt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem] text-muted">
            <span className="meta text-ink">Healthcare Sectors:</span>
            <Link to="/industries" className="text-body font-normal underline decoration-bronze/50 underline-offset-4 hover:text-ink">
              Hospitals · Diagnostic Networks · Digital Health Platforms · Day Surgery Centers
            </Link>
          </div>
          <Link to="/industries" className="link-arrow shrink-0">
            View Sector Experience <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}


