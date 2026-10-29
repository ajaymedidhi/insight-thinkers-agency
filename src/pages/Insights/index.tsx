import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import PageHero from "../../components/ui/PageHero";
import CTABand from "../../components/ui/CTABand";
import ArticleCover from "../../components/ui/ArticleCover";
import Reveal from "../../components/ui/Reveal";
import { ARTICLES, isoDate } from "../../constants/insights";

export default function Insights() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Only offer categories that actually have articles.
  const categories = useMemo(() => ["All", ...Array.from(new Set(ARTICLES.map((a) => a.category)))], []);
  const [featured] = ARTICLES;

  const q = search.trim().toLowerCase();
  const filtered = ARTICLES.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (!q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)),
  );

  return (
    <>
      <SEO
        title="Insights — Healthcare Transactions, Capital & Technology"
        description="Perspectives on healthcare M&A, hospital valuation, private equity, growth capital and healthcare technology in India."
        keywords="healthcare M&A insights, hospital valuation India, healthcare private equity, healthcare technology"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Insight Thinkers Agency — Insights",
          blogPost: ARTICLES.map((a) => ({ "@type": "BlogPosting", headline: a.title, datePublished: isoDate(a.date) })),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title={<>Perspectives on healthcare <em className="text-bronze-ink">transactions and growth.</em></>}
        lede="Analysis of healthcare M&A, valuation, capital and technology, written from the perspective of an active adviser."
      />

      <section aria-labelledby="featured-title" className="section pb-0">
        <div className="container-x">
          <p className="meta mb-6">Featured</p>
          <Reveal as="article" className="group grid gap-8 border-t-2 border-navy pt-10 lg:grid-cols-12 lg:gap-12">
            <Link to={`/insights/${featured.slug}`} tabIndex={-1} aria-hidden="true" className="block lg:col-span-7 lg:row-span-2">
              <ArticleCover article={featured} priority className="aspect-[16/10]" />
            </Link>
            <div className="lg:col-span-5">
              <p className="meta text-bronze-ink">{featured.category}</p>
              <h2 id="featured-title" className="mt-5 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.1] tracking-[-0.018em] text-ink">
                <Link to={`/insights/${featured.slug}`} className="decoration-bronze decoration-1 underline-offset-[8px] group-hover:underline">
                  {featured.title}
                </Link>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[1.0625rem] leading-relaxed">{featured.summary}</p>
              <p className="mt-6 text-[0.875rem] text-muted">
                {featured.author.name}, {featured.author.role}
                <br />
                <time dateTime={isoDate(featured.date)}>{featured.date}</time> · {featured.readTime}
              </p>
              <Link to={`/insights/${featured.slug}`} className="link-arrow mt-6" aria-label={`Read: ${featured.title}`}>
                Read the article <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="archive-title" className="section">
        <div className="container-x">
          <h2 id="archive-title" className="sr-only">All articles</h2>
          <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={`min-h-10 border px-4 text-[0.875rem] transition-colors ${
                    category === c ? "border-navy bg-navy text-white" : "border-line text-body hover:border-navy hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="w-full lg:w-80">
              <label htmlFor="insight-search" className="field-label">Search articles</label>
              <input
                id="insight-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. valuation"
                className="field"
              />
            </div>
          </div>

          <p className="sr-only" aria-live="polite">{filtered.length} articles shown</p>

          {filtered.length ? (
            <ul>
              {filtered.map((a) => (
                <li key={a.slug} className="border-b border-line">
                  <Link to={`/insights/${a.slug}`} className="group grid grid-cols-[6.5rem_1fr] gap-5 py-8 md:grid-cols-12 md:gap-8">
                    <ArticleCover article={a} className="aspect-[4/3] md:col-span-3" />
                    <div className="md:col-span-8">
                      <p className="meta">
                        <span className="text-bronze-ink">{a.category}</span>
                        <span aria-hidden="true"> · </span>
                        <time dateTime={isoDate(a.date)}>{a.date}</time> · {a.readTime}
                      </p>
                      <h3 className="mt-3 font-serif text-[1.25rem] leading-snug md:text-[1.55rem] text-ink decoration-bronze decoration-1 underline-offset-[6px] group-hover:underline">
                        {a.title}
                      </h3>
                      <p className="mt-3 hidden max-w-[44rem] text-[1rem] leading-relaxed sm:block">{a.summary}</p>
                    </div>
                    <span aria-hidden="true" className="hidden self-start justify-self-end text-[1.25rem] text-bronze transition-transform duration-300 group-hover:translate-x-1 md:col-span-1 md:block">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-16">
              <p className="text-[1.0625rem]">No articles match your search.</p>
              <button type="button" className="link-arrow mt-4" onClick={() => { setSearch(""); setCategory("All"); }}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
