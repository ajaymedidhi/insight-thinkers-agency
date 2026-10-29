import { Link } from "react-router-dom";
import ArticleCover from "../ui/ArticleCover";
import Reveal from "../ui/Reveal";
import { ARTICLES, isoDate } from "../../constants/insights";
import { PRIMARY_CTA } from "../../content/site";

export default function LatestInsights() {
  const [featured, ...rest] = ARTICLES;
  const more = rest.slice(0, 3);

  return (
    <section aria-labelledby="insights-title" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Healthcare intelligence</p>
            <h2 id="insights-title" className="h2">Recent perspectives</h2>
          </div>
          <Link to="/insights" className="link-arrow">
            All insights <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal as="article" className="lg:col-span-7">
            <Link to={`/insights/${featured.slug}`} className="group block">
              <ArticleCover article={featured} className="aspect-[16/10]" />
              <p className="meta mt-7 flex flex-wrap gap-x-3">
                <span className="text-bronze-ink">{featured.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={isoDate(featured.date)}>{featured.date}</time>
              </p>
              <h3 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.015em] text-ink decoration-bronze decoration-1 underline-offset-[6px] group-hover:underline">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-[36rem] text-[1.0625rem] leading-relaxed">{featured.summary}</p>
              <p className="mt-5 text-[0.875rem] text-muted">
                {featured.author.name} · {featured.readTime}
              </p>
            </Link>
          </Reveal>

          <ul className="lg:col-span-5">
            {more.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 90} className="border-t border-line first:border-t-2 first:border-navy">
                <Link to={`/insights/${a.slug}`} className="group grid grid-cols-[6.5rem_1fr] gap-5 py-6 sm:grid-cols-[8rem_1fr]">
                  <ArticleCover article={a} className="aspect-[4/3]" />
                  <div>
                    <p className="meta">
                      <span className="text-bronze-ink">{a.category}</span>
                    </p>
                    <h3 className="mt-2 font-serif text-[1.2rem] leading-snug text-ink decoration-bronze decoration-1 underline-offset-4 group-hover:underline">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] text-muted">
                      <time dateTime={isoDate(a.date)}>{a.date}</time> · {a.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
            <li className="border-t border-line pt-8">
              <p className="text-[0.9375rem] leading-relaxed text-ink">
                Weighing one of these questions for your own business?
              </p>
              <Link to={PRIMARY_CTA.path} className="link-arrow mt-3">
                Arrange a confidential conversation <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
