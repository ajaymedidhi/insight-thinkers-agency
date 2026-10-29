import { Link } from "react-router-dom";
import { RESOURCES } from "../../constants/insights";

export default function ResourcesPreview() {
  return (
    <section aria-labelledby="resources-title" className="section border-t border-line bg-sand/50">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Advisory resources</p>
          <h2 id="resources-title" className="h2">Practical toolkits for owners and investors.</h2>
          <p className="lede mt-6">
            Guides and checklists for valuation, due diligence and investor readiness — available on request.
          </p>
          <Link to="/resources" className="btn-primary mt-10">
            Browse resources <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="border-t border-navy lg:col-span-7 lg:col-start-6">
          {RESOURCES.map((r) => (
            <li key={r.id} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="meta pt-1">{r.type}</p>
              <div>
                <h3 className="font-serif text-[1.3rem] leading-snug text-ink">{r.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed">{r.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
