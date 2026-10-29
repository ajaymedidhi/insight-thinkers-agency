import { Link } from "react-router-dom";
import { CORE_SERVICES } from "../../content/services";
import { COMPANY, HERO_IMAGE, PRIMARY_CTA } from "../../content/site";

const ASSURANCES = ["Founder-led on every mandate", "Mutual NDA before sensitive information", COMPANY.coverage];

/**
 * Homepage hero: one fixed message over a single, darkened photograph.
 * No autoplay, no rotating headline — the photo settles in once and the
 * practices strip below routes visitors straight to the four practices.
 */
export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="on-navy relative isolate flex min-h-[min(100svh,820px)] flex-col overflow-hidden bg-navy-deep text-on-navy"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE.src}
          alt=""
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          fetchPriority="high"
          decoding="async"
          className="animate-settle h-full w-full object-cover"
          style={{ objectPosition: HERO_IMAGE.position }}
        />
        {/* Legibility: deep navy on the text side, the photograph breathes on the right. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/70" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-center pt-32 pb-12 md:pt-36 md:pb-14">
        <div className="max-w-[44rem]">
          <p className="eyebrow animate-rise-1 mb-7">Healthcare advisory · {COMPANY.location.split(",")[0]}, India</p>
          <h1 id="hero-title" className="display animate-rise-2 max-w-[15ch]">
            Strategic advice for healthcare’s <em className="text-bronze-light">next stage of growth.</em>
          </h1>
          <p className="lede animate-rise-3 mt-7 max-w-[34rem]">
            M&amp;A, capital and technology advice for hospital owners, healthcare entrepreneurs and investors — led by the
            founder, start to finish.
          </p>
          <div className="animate-rise-4 mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to={PRIMARY_CTA.path} className="btn-bronze">
              {PRIMARY_CTA.label} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/services" className="btn-outline-light">Explore our practices</Link>
          </div>
          <ul className="animate-rise-4 mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-5 text-[0.8125rem] text-on-navy-muted">
            {ASSURANCES.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-bronze" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav aria-label="Advisory practices" className="animate-rise-4 border-t border-white/12 bg-navy-deep/70 backdrop-blur-sm">
        <ol className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SERVICES.map((s, i) => (
            <li
              key={s.id}
              className={`border-white/12 max-sm:[&:not(:first-child)]:border-t ${i >= 2 ? "sm:max-lg:border-t" : ""} ${i % 2 === 1 ? "sm:border-l" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <a
                href={`#practice-${s.id}`}
                className={`group relative flex h-full items-baseline gap-4 py-5 transition-colors hover:bg-white/[0.04] ${i === 0 ? "sm:pr-5" : i === 2 ? "sm:pr-5 lg:pl-5" : "sm:px-5"}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span className="font-serif text-[0.95rem] text-bronze">{s.index}</span>
                <span className="flex-1 text-[0.9375rem] leading-snug text-white">{s.title}</span>
                <span aria-hidden="true" className="text-bronze transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
