import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { COMPANY, PRIMARY_CTA } from "../../content/site";

interface CTABandProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Contact link; pass contactFor(topic) to pre-select the enquiry topic. */
  to?: string;
  /** Shows what happens after an enquiry — sets expectations before the form. */
  showSteps?: boolean;
}

const NEXT_STEPS = [
  { n: "01", title: "A short enquiry", body: "A few lines on what you are considering. No documents needed." },
  { n: "02", title: "A conversation with the founder", body: "An exploratory, no-obligation discussion of objectives and timing." },
  { n: "03", title: "NDA, then detail", body: "A mutual NDA is in place before any sensitive information is shared." },
];

/** Closing call to action, shared by all pages. */
export default function CTABand({
  eyebrow = "Start a conversation",
  title = "Considering a sale, a capital raise or a strategic move?",
  body = "Tell us briefly what you are planning. The first conversation is exploratory and confidential.",
  to = PRIMARY_CTA.path,
  showSteps = true,
}: CTABandProps) {
  return (
    <section className="on-navy bg-navy text-on-navy" aria-labelledby="cta-title">
      <div className="container-x py-20 md:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">{eyebrow}</p>
            <h2 id="cta-title" className="h2">{title}</h2>
            <p className="lede mt-6 max-w-[36rem]">{body}</p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <Link to={to} className="btn-bronze w-full sm:w-auto lg:w-full">
              {PRIMARY_CTA.label} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <div className="rule pt-6 text-[0.9375rem] leading-relaxed">
              <a href={`mailto:${COMPANY.email}`} className="block py-0.5 text-white underline-offset-4 hover:underline">
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phoneHref}`} className="mt-1 block py-0.5 text-on-navy underline-offset-4 hover:underline">
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </Reveal>

        {showSteps && (
          <Reveal delay={120} className="mt-16 md:mt-20">
            <h3 className="meta mb-6">What happens next</h3>
            <ol className="grid gap-px border-t border-white/12 bg-white/12 md:grid-cols-3">
              {NEXT_STEPS.map((s) => (
                <li key={s.n} className="bg-navy pt-5 pb-2 md:pr-8 md:[&:not(:first-child)]:pl-8">
                  <span className="font-serif text-[1rem] text-bronze">{s.n}</span>
                  <p className="mt-3 font-serif text-[1.25rem] leading-snug text-white">{s.title}</p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        )}
      </div>
    </section>
  );
}
