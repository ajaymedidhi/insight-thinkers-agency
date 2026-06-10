import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ARTICLES, type Article } from "../../constants/insights";
import SEO from "../../components/shared/SEO";
import { motion, useScroll, useSpring } from "framer-motion";

export default function InsightsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find current article
  const article: Article | undefined = ARTICLES.find((a) => a.slug === slug);

  // Fallback to list if not found
  useEffect(() => {
    if (!article) {
      navigate("/insights");
    }
  }, [article, navigate]);

  // Framer Motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!article) return null;

  // Filter related articles (max 3) excluding current
  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen relative pb-16 animate-fade-in">
      <SEO 
        title={article.title} 
        description={article.summary}
        keywords={`${article.category}, Healthcare M&A Advisory, Hospital Valuations`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.summary,
          "datePublished": article.date,
          "author": {
            "@type": "Person",
            "name": article.author.name
          }
        }}
      />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-brand origin-left z-[310]"
        style={{ scaleX }}
      />

      {/* Article Header */}
      <section className="bg-slate-brand border-b border-border-brand/80 py-16 md:py-20">
        <div className="wrap max-w-[800px]">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-brand font-mono text-[0.65rem] tracking-[0.1em] uppercase mb-6"
          >
            ← Back to Insights
          </Link>
          <div className="flex items-center gap-4 text-[0.74rem] text-slate-500 font-mono mb-4">
            <span className="text-blue-brand font-semibold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-display text-[2rem] md:text-[2.6rem] font-semibold text-[#0F172A] leading-tight">
            {article.title}
          </h1>

          {/* Author Card Header */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-brand/50">
            <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center text-white font-mono text-[0.8rem] font-semibold shrink-0">
              VS
            </div>
            <div>
              <div className="text-[0.88rem] font-semibold text-ink">{article.author.name}</div>
              <div className="text-[0.72rem] text-slate-500 font-light">{article.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="wrap max-w-[1100px] py-16 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        {/* Article Body */}
        <article className="max-w-[760px]">
          {/* Content injection */}
          <div
            className="prose prose-slate prose-lg max-w-none text-[#334155] leading-[1.9] text-[1.05rem] font-light"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          {/* Social Sharing Component */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[0.78rem] text-slate-500 font-mono uppercase tracking-[0.08em]">
              Share Article
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded border border-border-brand hover:border-blue-brand text-slate-600 hover:text-blue-brand font-mono text-[0.7rem] uppercase font-semibold no-underline"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`}
                className="px-3.5 py-2 rounded border border-border-brand hover:border-blue-brand text-slate-600 hover:text-blue-brand font-mono text-[0.7rem] uppercase font-semibold no-underline"
              >
                Email
              </a>
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2 rounded border border-border-brand hover:border-blue-brand text-slate-600 hover:text-blue-brand font-mono text-[0.7rem] uppercase font-semibold cursor-pointer"
              >
                {copied ? "Copied ✓" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* End of article CTA */}
          <div className="mt-16 bg-slate-brand border border-border-brand rounded-[16px] p-8 text-center shadow-sm">
            <h3 className="font-display text-[1.55rem] font-semibold text-[#0F172A] mb-3">
              Need Strategic Guidance?
            </h3>
            <p className="text-[0.88rem] text-muted-brand leading-relaxed max-w-[480px] mx-auto font-light mb-6">
              Arrange a secure dialogue to benchmark valuation metrics, exit scenarios, or capital strategies.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-ink hover:bg-blue-brand text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-7 py-3.5 rounded-[6px] transition-all"
            >
              Schedule a Confidential Discussion
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8 lg:sticky lg:top-[120px]">
          {/* Related Articles Widget */}
          <div className="bg-[#F8FAFC] border border-border-brand rounded-[12px] p-6">
            <h4 className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-ink font-semibold mb-4">
              Related Articles
            </h4>
            <div className="flex flex-col gap-4">
              {relatedArticles.map((ra) => (
                <div key={ra.slug} className="group">
                  <div className="text-[0.68rem] text-slate-400 font-mono mb-0.5">{ra.date}</div>
                  <Link
                    to={`/insights/${ra.slug}`}
                    className="text-[0.84rem] font-semibold text-ink hover:text-blue-brand leading-tight block transition-colors"
                  >
                    {ra.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA Widget */}
          <div className="bg-ink rounded-[12px] p-6 text-white text-center border border-white/[0.06] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-brand/10 blur-[40px] rounded-full pointer-events-none" />
            <span className="text-[1.5rem] block mb-2">📞</span>
            <h4 className="text-[0.98rem] font-semibold text-white mb-2">Speak to a Principal</h4>
            <p className="text-[0.76rem] text-slate-400 leading-relaxed font-light mb-4">
              Access credentials and co-investment models directly.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="w-full py-3 bg-blue-brand hover:bg-blue-hover text-white text-[0.76rem] font-semibold uppercase tracking-[0.06em] rounded border-none cursor-pointer transition-all"
            >
              Contact Desk
            </button>
          </div>
        </aside>
      </div>

      {/* Bottom Recommender Grid */}
      <section className="section bg-slate-brand border-t border-border-brand/80 mt-12">
        <div className="wrap max-w-[1100px]">
          <h4 className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-slate-500 mb-8 font-semibold">
            Perspectives Showcase
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((ra) => (
              <div key={ra.slug} className="bg-white border border-border-brand/80 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[0.65rem] text-blue-brand mb-2">{ra.category}</div>
                  <h5 className="font-display text-[1.1rem] font-semibold text-ink leading-snug mb-3">
                    <Link to={`/insights/${ra.slug}`} className="text-inherit hover:text-blue-brand transition-colors">
                      {ra.title}
                    </Link>
                  </h5>
                  <p className="text-[0.78rem] text-muted-brand leading-relaxed font-light mb-6">
                    {ra.summary}
                  </p>
                </div>
                <Link to={`/insights/${ra.slug}`} className="text-[0.74rem] text-blue-brand font-semibold uppercase">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
