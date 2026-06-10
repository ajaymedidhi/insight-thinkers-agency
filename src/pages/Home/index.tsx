import { useNavigate, Link } from "react-router-dom";
import Hero from "../../components/sections/Hero";
import TrustStrip from "../../components/sections/TrustStrip";
import ServicesPreview from "../../components/sections/ServicesPreview";
import LeadershipPreview from "../../components/sections/LeadershipPreview";
import WhyInsightThinkers from "../../components/sections/WhyInsightThinkers";
import CTASection from "../../components/sections/CTASection";
import { ARTICLES } from "../../constants/insights";
import SEO from "../../components/shared/SEO";

export default function Home() {
  const navigate = useNavigate();
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      <SEO
        title="Strategic Healthcare M&A Advisory"
        description="Insight Thinkers Agency is an institutional-grade strategic advisory firm executing middle-market healthcare M&A, valuations, and private equity transactions."
        keywords="Healthcare M&A, Hospital Valuation, Strategic Advisory, HealthTech Advisory"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Insight Thinkers Agency",
          "url": "https://insightthinkers.com"
        }}
      />
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyInsightThinkers />
      <LeadershipPreview />

      {/* Latest Insights Preview Section */}
      <section className="section bg-slate-brand border-t border-border-brand">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Market Intelligence</div>
            <h2 className="display-sm">Latest Articles & Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {latestArticles.map((art) => (
              <div key={art.slug} className="bg-white border border-border-brand/80 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[0.62rem] tracking-[0.1em] text-blue-brand font-semibold block mb-2">
                    {art.category}
                  </span>
                  <h4 className="font-display text-[1.125rem] font-semibold text-ink leading-snug mb-3">
                    <Link to={`/insights/${art.slug}`} className="text-inherit hover:text-blue-brand transition-colors no-underline">
                      {art.title}
                    </Link>
                  </h4>
                  <p className="text-[0.78rem] text-muted-brand leading-relaxed font-light mb-6">
                    {art.summary}
                  </p>
                </div>
                <Link to={`/insights/${art.slug}`} className="text-[0.76rem] text-blue-brand font-semibold uppercase no-underline">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/insights")}
              className="inline-flex items-center gap-2 text-ink hover:text-blue-brand font-semibold tracking-[0.06em] uppercase text-[0.82rem] transition-colors border-none bg-transparent cursor-pointer"
            >
              Explore Knowledge Hub →
            </button>
          </div>
        </div>
      </section>

      {/* Gated Resource Preview Section */}
      <section className="section bg-white border-t border-border-brand">
        <div className="wrap text-center max-w-[800px]">
          <div className="eyebrow justify-center">Free advisory toolkits</div>
          <h2 className="display-sm mb-6">Free Healthcare Advisory Resources</h2>
          <p className="body-lg mb-8 max-w-[600px] mx-auto">
            Download our valuation models, due diligence checklists, and capital preparation dossiers compiled directly from live transactions.
          </p>
          <button
            onClick={() => navigate("/resources")}
            className="inline-flex items-center gap-2 bg-ink hover:bg-blue-brand text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4 rounded-[6px] transition-all hover:-translate-y-[1px]"
          >
            Access Gated Resources
          </button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
