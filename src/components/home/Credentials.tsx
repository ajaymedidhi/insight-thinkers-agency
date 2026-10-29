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
    <section aria-labelledby="credentials-title" className="border-y border-line bg-paper">
      <div className="container-x py-16 md:py-20">
        <h2 id="credentials-title" className="sr-only">The firm in figures</h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 90}
              className={`flex flex-col sm:pr-8 ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : ""}`}
            >
              <dt className="order-2 mt-4 text-[0.9375rem] font-medium text-ink">{m.label}</dt>
              <dd className="order-1 font-serif text-[clamp(2.25rem,4.6vw,3.75rem)] leading-none tracking-[-0.025em] text-ink">
                <CountUp value={m.value} animate={m.animate} />
                <span className={`text-bronze-ink ${/^[A-Za-z]/.test(m.suffix) ? "ml-[0.15em]" : ""}`}>{m.suffix}</span>
              </dd>
              <dd className="order-3 mt-2 text-[0.875rem] leading-relaxed text-muted">{m.note}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-12 max-w-[52rem] text-[0.8125rem] leading-relaxed text-muted">{METRICS_FOOTNOTE}</p>
      </div>
    </section>
  );
}
