import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";
import { METRICS, METRICS_FOOTNOTE } from "../../content/site";

/**
 * Key figures, each with a plain-language explanation of what it measures.
 * Only metrics flagged `animate` count up; values always settle on the exact
 * published figure.
 */
export default function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="border-y border-line bg-sand/35">
      <div className="container-x py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-line pb-8 mb-12">
          <div>
            <p className="eyebrow mb-3">Institutional Scale & Experience</p>
            <h2 id="credentials-title" className="h2 text-ink">
              The firm in verifiable numbers.
            </h2>
          </div>
          <p className="max-w-[28rem] text-[0.875rem] leading-relaxed text-muted">
            {METRICS_FOOTNOTE}
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 90}
              className="flex flex-col justify-between bg-paper p-8 sm:p-10 transition-colors duration-300 hover:bg-ivory"
            >
              <div>
                <span className="font-serif text-[0.9rem] font-medium text-bronze-ink">0{i + 1}</span>
                <dd className="mt-6 font-serif text-[clamp(2.75rem,5.2vw,4.25rem)] leading-none tracking-[-0.03em] text-ink">
                  <CountUp value={m.value} animate={m.animate} />
                  <span className={`text-bronze-ink ${/^[A-Za-z]/.test(m.suffix) ? "ml-[0.15em]" : ""}`}>{m.suffix}</span>
                </dd>
                <dt className="mt-4 text-[1rem] font-medium tracking-tight text-ink">{m.label}</dt>
              </div>
              <dd className="mt-6 border-t border-line/70 pt-4 text-[0.875rem] leading-relaxed text-muted">{m.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

