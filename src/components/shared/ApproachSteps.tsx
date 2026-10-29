import Reveal from "../ui/Reveal";
import { APPROACH } from "../../content/mandates";

/**
 * Four-stage engagement model. `compact` shows a one-line summary per stage
 * (homepage); the full version is used on interior pages.
 */
export default function ApproachSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
      {APPROACH.map((a, i) => (
        <Reveal as="li" key={a.step} delay={i * 110} className="group relative pt-6">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-navy transition-transform duration-700 ease-editorial group-data-[shown]:scale-x-100"
            style={{ transitionDelay: `${300 + i * 160}ms` }}
          />
          <span
            className={`font-serif leading-none text-bronze-ink ${compact ? "text-[clamp(3rem,5vw,4.25rem)] tracking-[-0.03em]" : "text-[2.25rem]"}`}
          >
            {a.step}
          </span>
          <h3 className={`font-serif leading-snug text-ink ${compact ? "mt-5 text-[1.3rem]" : "mt-6 text-[1.35rem]"}`}>{a.title}</h3>
          <p className={compact ? "mt-2 text-[0.9375rem] leading-relaxed text-muted" : "mt-4 text-[0.98rem] leading-relaxed"}>
            {compact ? a.summary : a.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
