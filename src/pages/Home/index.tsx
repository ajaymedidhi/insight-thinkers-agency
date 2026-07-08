import { useNavigate, Link } from "react-router-dom";
import Hero from "../../components/sections/Hero";
import TrustStrip from "../../components/sections/TrustStrip";
import ServicesPreview from "../../components/sections/ServicesPreview";
import LeadershipPreview from "../../components/sections/LeadershipPreview";
import WhyInsightThinkers from "../../components/sections/WhyInsightThinkers";
import IntegratedAdvisory from "../../components/sections/IntegratedAdvisory";
import CTASection from "../../components/sections/CTASection";
import { ARTICLES } from "../../constants/insights";
import SEO from "../../components/shared/SEO";

export default function Home() {
  const navigate = useNavigate();
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="animate-fade-in bg-[#07152B] min-h-screen">
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
      <IntegratedAdvisory />
      <ServicesPreview />
      <WhyInsightThinkers />
      <LeadershipPreview />

      {/* Latest Insights Preview Section */}
      <section className="section bg-[#07152B] border-t border-white/[0.05]">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-20">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="w-8 h-[1px] bg-gold-brand" />
              <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
                Market Intelligence
              </span>
              <span className="w-8 h-[1px] bg-gold-brand" />
            </div>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">
              Latest Articles & <span className="font-display italic font-normal text-gold-brand">Insights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {latestArticles.map((art) => (
              <div key={art.slug} className="bg-[#0B1220] border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-gold-brand/70 font-semibold block mb-4 transition-colors duration-300 group-hover:text-gold-brand">
                    {art.category}
                  </span>
                  <h4 className="font-display text-[1.4rem] font-medium text-white leading-snug mb-4">
                    <Link to={`/insights/${art.slug}`} className="text-inherit hover:text-gold-brand transition-colors duration-300 no-underline">
                      {art.title}
                    </Link>
                  </h4>
                  <p className="text-[0.85rem] text-slate-400 leading-relaxed font-light mb-8">
                    {art.summary}
                  </p>
                </div>
                <Link to={`/insights/${art.slug}`} className="text-[0.7rem] text-gold-brand font-medium tracking-[0.15em] uppercase no-underline flex items-center gap-2 group/link">
                  Read Article
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1 text-[1rem] leading-none">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/insights")}
              className="inline-flex items-center justify-center gap-3 text-white hover:text-gold-brand font-medium tracking-[0.1em] uppercase text-[0.75rem] transition-colors duration-300 group border-none bg-transparent cursor-pointer"
            >
              Explore Knowledge Hub 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-[1.2rem] leading-none">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gated Resource Preview Section */}
      <section className="section bg-[#0B1220] border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-brand/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="wrap text-center max-w-[800px] relative z-10">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-8 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Free advisory toolkits
            </span>
            <span className="w-8 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight mb-6">
            Healthcare Advisory <span className="font-display italic font-normal text-gold-brand">Resources</span>
          </h2>
          <p className="text-[1.125rem] text-slate-300 font-light leading-relaxed mb-10 max-w-[650px] mx-auto">
            Download our valuation models, due diligence checklists, and capital preparation dossiers compiled directly from live transactions.
          </p>
          <button
            onClick={() => navigate("/resources")}
            className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
          >
            Access Gated Resources
            <span className="text-[1.2rem] leading-none">→</span>
          </button>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
