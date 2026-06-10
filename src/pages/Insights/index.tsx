import { useState } from "react";
import { Link } from "react-router-dom";
import { ARTICLES, type Article } from "../../constants/insights";
import SEO from "../../components/shared/SEO";
import { motion } from "framer-motion";

const CATEGORIES = [
  "All",
  "Healthcare M&A",
  "Private Equity",
  "Hospital Valuations",
  "Growth Capital",
  "HealthTech",
  "Healthcare Strategy",
  "AI in Healthcare"
];

export default function Insights() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  // Featured article is the first one in the constants list
  const featuredArticle: Article = ARTICLES[0];

  // Filter logic
  const filteredArticles = ARTICLES.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase()) || 
                          art.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "All" || art.category.toLowerCase() === selectedCat.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-white animate-fade-in">
      <SEO 
        title="Healthcare M&A Insights & Valuations" 
        description="Thought leadership, market multiples, and transaction parameters for private hospital mergers and acquisitions in South India and pan-Asia."
        keywords="Healthcare M&A Advisory, Hospital Valuations, Healthcare Investment Banking"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Healthcare M&A Insights",
          "description": "Healthcare M&A market perspectives, hospital valuations, and PE capital trends."
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-24 bg-slate-brand border-b border-border-brand/80">
        <div className="wrap relative z-10 text-center max-w-[850px]">
          <div className="eyebrow justify-center">Perspectives & Intelligence</div>
          <h1 className="display tracking-[-0.015em]">
            Healthcare Insights & <br />
            <span className="font-display italic font-normal text-blue-brand">Strategic Perspectives</span>
          </h1>
          <p className="body-lg mt-6 max-w-[700px] mx-auto">
            Analysis, trends, and strategic perspectives on healthcare transactions, investments, technology, and growth.
          </p>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="section wrap">
        <div className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-blue-brand mb-6 font-semibold">
          Featured Analysis
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 bg-slate-brand border border-border-brand rounded-[20px] overflow-hidden shadow-sh1 hover:shadow-sh2 transition-all duration-300"
        >
          {/* Cover image placeholder */}
          <div className="bg-gradient-to-br from-[#0c2045] to-ink p-12 min-h-[300px] flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "30px 30px"
              }}
            />
            <div className="z-10 font-mono text-[0.58rem] tracking-[0.16em] uppercase text-blue-light bg-blue-brand/20 border border-blue-brand/35 px-3 py-1 rounded-full self-start font-semibold">
              {featuredArticle.category}
            </div>
            <div className="z-10">
              <span className="font-display text-[7.5rem] font-bold text-white/5 leading-none block select-none mb-[-30px]">
                INSIGHT
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-[0.74rem] text-slate-500 mb-3 font-mono">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h3 className="font-display text-[1.65rem] font-semibold text-[#0F172A] mb-4 leading-tight">
                {featuredArticle.title}
              </h3>
              <p className="text-[0.9rem] text-muted-brand leading-relaxed font-light mb-6">
                {featuredArticle.summary}
              </p>
            </div>
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="inline-flex items-center gap-2 text-blue-brand hover:text-blue-hover font-semibold tracking-[0.05em] uppercase text-[0.78rem] transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-10">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 text-[0.72rem] font-semibold tracking-[0.08em] uppercase rounded-full border transition-all ${
                    selectedCat === cat
                      ? "bg-ink border-ink text-white"
                      : "bg-white border-border-brand text-muted-brand hover:border-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-[320px]">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full p-3 border border-border-brand rounded-[8px] font-sans text-[0.88rem] text-ink outline-none focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/10 transition-all bg-white"
              />
            </div>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art, idx) => (
              <motion.div
                key={art.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white border border-border-brand/80 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[0.7rem] text-slate-500 mb-3 font-mono">
                    <span className="text-blue-brand font-semibold">{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="font-display text-[1.15rem] font-semibold text-ink leading-snug mb-3 hover:text-blue-brand transition-colors duration-200">
                    <Link to={`/insights/${art.slug}`} className="no-underline text-inherit">
                      {art.title}
                    </Link>
                  </h4>
                  <p className="text-[0.8rem] text-muted-brand leading-relaxed font-light mb-6">
                    {art.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-[0.74rem] text-slate-500 font-mono">{art.readTime}</span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="text-[0.76rem] text-blue-brand hover:text-blue-hover font-semibold tracking-[0.04em] uppercase"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-muted-brand font-light text-[0.92rem]">
              No articles found matching search criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
