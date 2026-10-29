import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import CTABand from "../../components/ui/CTABand";
import ArticleCover from "../../components/ui/ArticleCover";
import { ARTICLES, isoDate, type Article } from "../../constants/insights";
import { FOUNDER, SITE_URL } from "../../content/site";
import { contactFor } from "../../content/services";

/** Pre-selects the most relevant enquiry topic from an article category. */
const TOPIC_BY_CATEGORY: Record<string, string> = {
  "Hospital Valuations": "Healthcare M&A / Transaction Advisory",
  "Healthcare M&A": "Healthcare M&A / Transaction Advisory",
  "Private Equity": "Capital Raising / Corporate Finance",
  "Growth Capital": "Capital Raising / Corporate Finance",
  "AI in Healthcare": "Healthcare Technology Advisory",
};
import NotFound from "../NotFound";

export default function InsightsDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Reading progress indicator, updated without re-rendering.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [slug]);

  const article: Article | undefined = ARTICLES.find((a) => a.slug === slug);
  if (!article) return <NotFound />;

  const url = `${SITE_URL}/insights/${article.slug}`;
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <>
      <SEO
        type="article"
        title={article.title}
        description={article.summary}
        keywords={`${article.category}, healthcare advisory, India`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.summary,
          datePublished: isoDate(article.date),
          mainEntityOfPage: url,
          author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
          publisher: { "@type": "Organization", name: "Insight Thinkers Agency" },
        }}
      />

      <div ref={progressRef} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-bronze" />

      <article>
        <header className="border-b border-line pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="container-x max-w-[56rem]">
            <Link to="/insights" className="meta inline-flex items-center gap-2 hover:text-ink">
              <span aria-hidden="true">←</span> Insights
            </Link>
            <p className="meta mt-10 text-bronze-ink">{article.category}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] tracking-[-0.02em] text-ink">
              {article.title}
            </h1>
            <p className="lede mt-6">{article.summary}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.9375rem]">
              <p>
                <span className="text-ink">{article.author.name}</span>
                <span className="text-muted">, {article.author.role}</span>
              </p>
              <p className="text-muted">
                <time dateTime={isoDate(article.date)}>{article.date}</time> · {article.readTime}
              </p>
            </div>
            <ArticleCover article={article} priority className="animate-fade mt-12 aspect-[21/9]" />
          </div>
        </header>

        <div className="container-x max-w-[56rem] py-16 md:py-20">
          <div className="article-body max-w-[42rem]" dangerouslySetInnerHTML={{ __html: article.body }} />

          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <span className="meta mr-2">Share</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-10 px-4 text-[0.875rem]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(url)}`}
              className="btn-outline min-h-10 px-4 text-[0.875rem]"
            >
              Email
            </a>
            <button type="button" onClick={copyLink} className="btn-outline min-h-10 px-4 text-[0.875rem]" aria-live="polite">
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>

          <aside aria-label="About the author" className="mt-12 grid gap-4 border-l-2 border-bronze bg-paper p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
            <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center bg-navy font-serif text-[1.25rem] text-white">
              {FOUNDER.initials}
            </span>
            <div>
              <p className="text-ink">{article.author.name}, {article.author.role}</p>
              <p className="mt-1 text-[0.9375rem]">
                Leads Insight Thinkers Agency’s healthcare M&amp;A, capital and technology mandates.{" "}
                <Link to="/leadership" className="text-navy underline decoration-bronze underline-offset-4">Profile</Link>
              </p>
            </div>
          </aside>
        </div>
      </article>

      <section aria-labelledby="related-title" className="section border-t border-line bg-paper">
        <div className="container-x">
          <h2 id="related-title" className="h3">Further reading</h2>
          <ul className="mt-10 grid gap-x-10 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="border-t border-navy">
                <Link to={`/insights/${r.slug}`} className="group block py-6">
                  <ArticleCover article={r} className="mb-5 aspect-[16/10]" />
                  <p className="meta">{r.category}</p>
                  <h3 className="mt-3 font-serif text-[1.3rem] leading-snug text-ink decoration-bronze underline-offset-4 group-hover:underline">{r.title}</h3>
                  <p className="mt-3 text-[0.875rem] text-muted"><time dateTime={isoDate(r.date)}>{r.date}</time></p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        to={contactFor(TOPIC_BY_CATEGORY[article.category] ?? "Other")}
        eyebrow="Discuss this topic"
        title="Want to apply this to your own situation?"
        body="We are glad to discuss valuation, exit scenarios or capital strategy for your business in a confidential conversation."
      />
    </>
  );
}
