import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/shared/SEO";

const EXPERTISES = [
  {
    title: "Digital Strategy & Go-To-Market",
    desc: "Led go-to-market strategies, digital marketing campaigns, and brand building for 50+ healthcare institutions across South India — the intelligence foundation of ITA's M&A practice."
  },
  {
    title: "Healthcare M&A & Deal Advisory",
    desc: "Originated, structured, and closed M&A transactions in South India healthcare — personally leading mandates from first approach through final documentation and closure."
  },
  {
    title: "AI HealthTech Product Development",
    desc: "Built six proprietary healthcare technology platforms from first principles — HMS, PACS, EMR — deployed across 50+ hospitals and diagnostic centres, still actively operated."
  },
  {
    title: "Equity Financing & Investor Relations",
    desc: "Structured equity financing arrangements for healthcare operators, connecting them with PE funds, family offices, and institutional investors across India and Southeast Asia."
  }
];


const TIMELINE = [
  {
    year: "Founded",
    title: "Insight Thinkers Agency Established",
    desc: "Vasanth Sabavath founded ITA with a singular thesis: healthcare M&A deserves simultaneous mastery of capital markets, clinical operations, and enterprise technology."
  },
  {
    year: "Year 1",
    title: "Digital & Marketing Foundation",
    desc: "Established deep digital marketing and go-to-market capabilities across 50+ hospitals and healthcare brands — building the sector intelligence base that underpins M&A advisory today."
  },
  {
    year: "Year 2",
    title: "AI HealthTech Products Launched",
    desc: "Built and deployed HMS, PACS, and EMR platforms across 50+ institutions. Products are actively operated — providing first-principles technology intelligence."
  },
  {
    year: "Year 3",
    title: "M&A Advisory Practice Opened",
    desc: "First institutional M&A mandates originated and closed in South India hospital sector. PE network expanded across South and Southeast Asia."
  },
  {
    year: "Present",
    title: "Live Mandates — Active Advisory",
    desc: "Exclusive advisory mandates on operational hospital assets with combined monthly revenues exceeding ₹8 Crores. All mandates are live."
  }
];

const PERSPECTIVES = [
  {
    title: "Hospital Valuation Multiples in India",
    type: "Industry Briefing",
    link: "/insights/hospital-valuation-multiples-india"
  },
  {
    title: "How Private Equity Evaluates Healthcare Assets",
    type: "Diligence Report",
    link: "/insights/private-equity-evaluates-healthcare-assets"
  }
];

const MEDIA_SPEAKING = [
  {
    event: "Healthcare Investor Summit 2026",
    topic: "Panel: Multiples consolidation in Indian hospital consolidations",
    type: "Keynote Panel"
  },
  {
    event: "HealthTech Dealmakers Podcast",
    topic: "Episode 12: Auditing HMS systems prior to buy-side exits",
    type: "Podcast Guest"
  }
];

export default function Leadership() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#07152B] min-h-screen text-white animate-fade-in">
      <SEO
        title="Vasanth S - Founder Profile"
        description="Credentials and executive timeline of Vasanth S, Managing Director of Insight Thinkers Agency, specializing in hospital transaction structuring and technology due diligence."
        keywords="Vasanth S, Healthcare M&A Director, Hospital Deal advisory"
      />
      
      {/* Leadership Hero */}
      <section className="relative py-32 md:py-40 bg-[#07152B] overflow-hidden text-white border-b border-white/[0.05]">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold-brand" />
                <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-brand font-semibold">
                  Executive Leadership
                </span>
              </div>
              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-semibold mb-8 text-white tracking-[-0.02em]">
                Vasanth <br />
                <span className="font-display italic font-light text-gold-brand">Sabavath.</span>
              </h1>
              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-6 max-w-[600px] mb-6">
                Vasanth Sabavath founded Insight Thinkers Agency to build a firm that operates with the rigour of a boutique investment bank, the growth capabilities of a performance marketing agency, and the deep engineering of a software company.
              </p>
              <p className="text-[1rem] text-slate-400 font-light leading-relaxed max-w-[600px] mb-8">
                His credentials derived directly from hands-on execution. He has personally led hospital transaction structures, formulated private equity partnerships, scaled digital marketing campaigns, and built clinical healthcare software deployed across 50+ medical institutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-brand text-[#07152B] border border-gold-brand font-semibold tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-300 hover:bg-white hover:border-white shadow-[0_0_20px_rgba(200,169,107,0.2)] cursor-pointer rounded-[2px]"
                  onClick={() => navigate("/contact")}
                >
                  Confidential Engagement
                </button>
              </div>
            </motion.div>

            {/* Premium Credentials Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-[4px] p-8 md:p-10"
            >
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-slate-400 font-semibold mb-8 pb-4 border-b border-white/[0.08]">
                Founder & Managing Partner
              </div>
              <div className="flex flex-col gap-5">
                {[
                  "Forbes 30 Under 30 Asia Semi-Finalist",
                  "Harvard Business School Online Alumnus",
                  "Gandhi Fellowship & Amani Institute Fellow",
                  "Google–Udacity Scholar",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-3 text-slate-300">
                    <span className="w-[14px] h-[14px] mt-[4px] flex items-center justify-center rounded-full border border-gold-brand/40 bg-gold-brand/10 shrink-0">
                      <span className="w-[4px] h-[4px] bg-gold-brand rounded-full" />
                    </span>
                    <span className="text-[0.95rem] font-light leading-snug">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-32 bg-[#07152B] border-b border-white/[0.05]">
        <div className="wrap max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-display text-[6rem] text-gold-brand/10 leading-none block h-[40px]">"</span>
            <h2 className="font-display text-[2.4rem] md:text-[3.2rem] leading-[1.3] text-white font-medium tracking-tight mb-10">
              We decline more mandates than we accept. Every engagement carries our name. We do not accept mandates we cannot close with the rigour institutional buyers deserve.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-white/20" />
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-slate-400 font-semibold">
                Vasanth Sabavath
              </span>
              <span className="w-8 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Specialized Fields
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Domain Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISES.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 bg-transparent border border-white/10 rounded-[2px] group hover:border-gold-brand/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display text-[1.3rem] font-medium text-white mb-4 group-hover:text-gold-brand transition-colors duration-300">
                {e.title}
              </h3>
              <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Journey timeline */}
      <section className="section wrap border-t border-white/[0.05]">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Milestones
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Professional Journey</h2>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-0 relative pl-4 md:pl-0">
          {/* Desktop central line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.08] transform -translate-x-1/2" />
          
          {/* Mobile left line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[15px] w-[1px] bg-white/[0.08]" />

          {TIMELINE.map((t, idx) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative pb-16 last:pb-0 md:flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between group pl-8 md:pl-0`}
            >
              {/* marker */}
              <div className="absolute left-[-24px] md:left-1/2 top-[4px] md:top-1/2 w-[9px] h-[9px] rounded-full bg-[#07152B] border border-gold-brand transform md:-translate-x-1/2 md:-translate-y-1/2 group-hover:scale-150 group-hover:bg-gold-brand shadow-[0_0_10px_rgba(200,169,107,0.5)] transition-all duration-500 z-10" />
              
              <div className={`md:w-[45%] ${idx % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                <div className="font-mono text-[0.65rem] tracking-[0.15em] text-gold-brand uppercase font-semibold mb-2">
                  {t.year}
                </div>
                <h4 className="text-[1.2rem] font-display font-medium text-white mb-3">
                  {t.title}
                </h4>
                <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light">
                  {t.desc}
                </p>
              </div>
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Published Perspectives & Media & Speaking */}
      <section className="section bg-[#0B1220] border-y border-white/[0.05]">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Perspectives */}
          <div>
            <h3 className="font-display text-[1.8rem] font-medium text-white mb-8 pb-4 border-b border-white/[0.08]">
              Published Perspectives
            </h3>
            <div className="flex flex-col gap-8">
              {PERSPECTIVES.map((p) => (
                <div key={p.title} className="group cursor-pointer">
                  <span className="font-mono text-[0.6rem] tracking-[0.1em] text-gold-brand uppercase font-semibold">
                    {p.type}
                  </span>
                  <h4 className="font-display text-[1.4rem] font-medium text-white mt-3 mb-4 group-hover:text-gold-brand transition-colors duration-300">
                    {p.title}
                  </h4>
                  <Link to={p.link} className="inline-flex items-center gap-2 text-[0.76rem] text-slate-400 font-medium uppercase no-underline hover:text-white transition-colors duration-300">
                    Read Report →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Media & Speaking */}
          <div>
            <h3 className="font-display text-[1.8rem] font-medium text-white mb-8 pb-4 border-b border-white/[0.08]">
              Media Appearances
            </h3>
            <div className="flex flex-col gap-8">
              {MEDIA_SPEAKING.map((m) => (
                <div key={m.event}>
                  <span className="font-mono text-[0.6rem] tracking-[0.1em] text-slate-500 uppercase font-semibold">
                    {m.type}
                  </span>
                  <h4 className="font-display text-[1.4rem] font-medium text-white mt-3 mb-3">
                    {m.event}
                  </h4>
                  <p className="text-[0.95rem] text-slate-300 font-light">
                    {m.topic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2.5rem] font-medium text-white mb-6">
            Initiate a Confidential Dialogue
          </h3>
          <p className="text-[1.05rem] text-slate-300 leading-relaxed mb-10 max-w-[500px] mx-auto font-light">
            If you represent a capital fund or are planning an exit structure, schedule a confidential consultation with our managing partner.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
