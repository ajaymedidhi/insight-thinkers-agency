import { Link } from "react-router-dom";
import FounderPortrait from "../ui/FounderPortrait";
import Reveal from "../ui/Reveal";
import { FOUNDER } from "../../content/site";

/** Drawn only from the firm's published background — CLIENT TO CONFIRM on review. */
const EXPERIENCE = [
  { label: "Background", value: "Software engineering, strategic management and healthcare marketing" },
  { label: "Technology", value: "Healthcare platforms — HMS, PACS and EMR — built in-house" },
  { label: "Sector reach", value: "50+ hospitals and diagnostic centres supported" },
];

export default function FounderSection() {
  return (
    <section aria-labelledby="founder-title" className="section border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <Reveal className="order-2 max-w-[28rem] lg:order-1 lg:col-span-4 lg:max-w-none">
          {/* Without a real portrait, the nameplate only repeats the name — skip it on small screens. */}
          <FounderPortrait className={FOUNDER.portrait ? "" : "max-lg:hidden"} />
          {FOUNDER.portrait && (
            <p className="mt-4 text-[0.9375rem] text-ink">
              {FOUNDER.name}
              <span className="text-muted"> — {FOUNDER.title}</span>
            </p>
          )}
          <dl className={`border-t border-navy ${FOUNDER.portrait ? "mt-8" : "lg:mt-8"}`}>
            {EXPERIENCE.map((e) => (
              <div key={e.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3 text-[0.9375rem]">
                <dt className="meta pt-0.5">{e.label}</dt>
                <dd className="text-ink">{e.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="eyebrow mb-6">Founder-led advisory</p>
            <h2 id="founder-title" className="h2">Every mandate is led by the founder, without handoffs.</h2>
            <p className="lede mt-8">
              {FOUNDER.name} built the firm on one idea: healthcare deals need an adviser who understands capital, clinical
              operations and technology together — and who stays personally involved in every engagement.
            </p>
          </Reveal>

          <Reveal as="figure" className="mt-10 border-l-2 border-bronze pl-6">
            <blockquote className="font-serif text-[1.45rem] leading-snug text-ink italic md:text-[1.6rem]">
              “We decline more mandates than we accept. Every engagement carries our name.”
            </blockquote>
            <figcaption className="meta mt-4">{FOUNDER.name}, {FOUNDER.title}</figcaption>
          </Reveal>

          <Link to="/leadership" className="link-arrow mt-10">
            Read the founder’s profile <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
