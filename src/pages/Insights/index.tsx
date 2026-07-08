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
    <div className="bg-[#07152B] text-white animate-fade-in">
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
      <section className="relative py-32 md:py-40 bg-[#07152B] overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(51,65,85,0.4),transparent_50%)]" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="wrap relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start text-white">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold-brand" />
                <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-brand font-semibold">
                  Perspectives & Intelligence
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
                Strategic <br />
                <span className="font-display italic font-light text-gold-brand">Perspectives</span><br />
                & Analysis.
              </h1>

              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
                Analysis, trends, and strategic perspectives on healthcare transactions, investments, technology, and growth.
              </p>

            </motion.div>

            {/* Right Column - Visual Focal Point */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex relative w-full h-[400px] items-center justify-center"
            >
              {/* Abstract Data Viz for Insights */}
              <div className="absolute w-[280px] h-[280px] border-[1px] border-gold-brand/10 rounded-full flex flex-col items-center justify-center gap-2">
                {/* Simulated bar charts */}
                <div className="flex items-end gap-3 h-[100px] opacity-40">
                  {[40, 70, 45, 90, 60, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className="w-4 bg-gold-brand/80"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute w-[180px] h-[180px] border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(200,169,107,0.1)] z-10" />
              
              {/* Geometric grid behind */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
                <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40%" y1="0%" x2="40%" y2="100%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="60%" y1="0%" x2="60%" y2="100%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#C8A96B" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="section wrap border-b border-white/[0.05]">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-[1px] bg-gold-brand" />
          <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
            Featured Analysis
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 bg-transparent border border-white/10 rounded-[2px] overflow-hidden group hover:border-gold-brand/40 transition-all duration-500"
        >
          {/* Cover image placeholder */}
          <div className="bg-[#0B1220] p-12 min-h-[350px] flex flex-col justify-between text-white relative overflow-hidden border-r border-white/10 lg:group-hover:border-gold-brand/20 transition-colors duration-500">
            <div className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "30px 30px"
              }}
            />
            <div className="z-10 font-mono text-[0.58rem] tracking-[0.16em] uppercase text-gold-brand bg-white/5 border border-white/10 px-4 py-1.5 rounded-[2px] self-start font-semibold">
              {featuredArticle.category}
            </div>
            <div className="z-10">
              <span className="font-display text-[7.5rem] font-bold text-white/5 leading-none block select-none mb-[-30px] group-hover:text-gold-brand/5 transition-colors duration-500">
                INSIGHT
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between bg-transparent relative z-10">
            <div>
              <div className="flex items-center gap-4 text-[0.74rem] text-slate-400 mb-4 font-mono">
                <span>{featuredArticle.date}</span>
                <span className="text-gold-brand">◆</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h3 className="font-display text-[2rem] font-medium text-white mb-6 leading-tight group-hover:text-gold-brand transition-colors duration-300">
                {featuredArticle.title}
              </h3>
              <p className="text-[0.95rem] text-slate-300 leading-relaxed font-light mb-8">
                {featuredArticle.summary}
              </p>
            </div>
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="inline-flex items-center gap-3 text-white font-medium tracking-[0.1em] uppercase text-[0.75rem] transition-colors duration-300 group-hover:text-gold-brand"
            >
              Read Article <span className="text-[1.2rem] leading-none">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="section bg-[#0B1220] border-b border-white/[0.05]">
        <div className="wrap">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-12">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.1em] uppercase rounded-[2px] border transition-all duration-300 ${
                    selectedCat === cat
                      ? "bg-white/10 border-gold-brand/40 text-gold-brand"
                      : "bg-transparent border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-[350px]">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search perspectives..."
                className="w-full p-3.5 border border-white/10 rounded-[2px] font-sans text-[0.88rem] text-white outline-none focus:border-gold-brand focus:ring-1 focus:ring-gold-brand/20 transition-all bg-transparent placeholder-slate-500"
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
                className="bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[0.7rem] text-slate-500 mb-4 font-mono">
                    <span className="text-gold-brand font-semibold">{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="font-display text-[1.4rem] font-medium text-white leading-snug mb-4 transition-colors duration-300 group-hover:text-gold-brand">
                    <Link to={`/insights/${art.slug}`} className="no-underline text-inherit">
                      {art.title}
                    </Link>
                  </h4>
                  <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light mb-8">
                    {art.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-[0.74rem] text-slate-500 font-mono">{art.readTime}</span>
                  <Link
                    to={`/insights/${art.slug}`}
                    className="text-[0.7rem] text-slate-300 hover:text-white font-medium tracking-[0.1em] uppercase transition-colors flex items-center gap-2 group-hover:text-gold-brand"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-light text-[1rem]">
              No perspectives found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
