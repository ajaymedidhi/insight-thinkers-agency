import Reveal from "../ui/Reveal";
import { AUDIENCES, CORE_SERVICES } from "../../content/services";

const byId = Object.fromEntries(CORE_SERVICES.map((s) => [s.id, s]));

/** "Who we advise": routes each audience to the practices it usually starts with. */
export default function Pathways() {
  return (
    <section aria-labelledby="pathways-title" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow mb-5">Who we advise</p>
          <h2 id="pathways-title" className="h2">Start from where you are.</h2>
          <p className="lede mt-6">
            Most conversations begin with a decision rather than a service. Find the situation closest to yours.
          </p>
        </Reveal>

        <Reveal as="ul" delay={120} className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-8">
          {AUDIENCES.map((a) => (
            <li key={a.title} className="flex flex-col bg-ivory p-6 sm:p-8">
              <h3 className="font-serif text-[1.45rem] leading-snug text-ink">{a.title}</h3>
              <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed">{a.need}</p>
              <p className="meta mt-6 mb-2">Usually starts with</p>
              <ul className="space-y-1">
                {a.practices.map((id) => (
                  <li key={id}>
                    <a
                      href={`#practice-${id}`}
                      className="group inline-flex items-baseline gap-2 py-1 text-[0.9375rem] text-navy underline decoration-bronze/50 underline-offset-4 transition-colors hover:decoration-navy"
                    >
                      <span className="font-serif text-bronze-ink no-underline">{byId[id].index}</span>
                      {byId[id].title}
                      <span aria-hidden="true" className="text-bronze transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
