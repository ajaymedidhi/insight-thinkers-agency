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

const PHILOSOPHIES = [
  {
    topic: "On mandate selectivity:",
    quote: '"We decline more mandates than we accept. Every engagement carries our name. We do not accept mandates we cannot close with the rigour institutional buyers deserve."'
  },
  {
    topic: "On network vs. relationships:",
    quote: '"Our PE relationships were built through completed transactions — not networking events. Every fund manager we work with has seen us deliver."'
  },
  {
    topic: "On the firm's architecture:",
    quote: '"Most advisory firms outsource clinical intelligence. We have medical doctors on our team. Most consultants assess technology — we built the technology. That is the difference."'
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
    <div className="bg-white animate-fade-in">
      <SEO
        title="Vasanth S - Founder Profile"
        description="Credentials and executive timeline of Vasanth S, Managing Director of Insight Thinkers Agency, specializing in hospital transaction structuring and technology due diligence."
        keywords="Vasanth S, Healthcare M&A Director, Hospital Deal advisory"
      />
      {/* Leadership Hero */}
      <section className="relative py-20 md:py-24 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-ink rounded-[20px] p-8 overflow-hidden text-white shadow-sh3 border border-white/[0.06]"
            >
              <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative w-full h-[220px] rounded-[12px] bg-gradient-to-br from-[#0c2045] to-ink overflow-hidden border border-white/[0.08] mb-6 flex items-center justify-center">
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="relative text-center z-10 select-none">
                  <span className="font-display italic text-[6.5rem] font-bold text-white/5 tracking-tighter block leading-none">VS</span>
                  <span className="font-mono text-[0.55rem] tracking-[0.24em] uppercase text-blue-light/60 font-semibold block mt-[-10px]">EXECUTIVE PROFILE</span>
                </div>
              </div>

              <h3 className="font-display text-[1.8rem] font-semibold text-white mb-[3px]">
                Vasanth Sabavath
              </h3>
              <div className="font-mono text-[0.61rem] tracking-[0.22em] uppercase text-slate-500 mb-6 font-semibold">
                Founder & Managing Partner
              </div>

              <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-white/[0.08]">
                {[
                  "Forbes 30 Under 30 Asia Semi-Finalist",
                  "Harvard Business School Online Alumnus",
                  "Gandhi Fellowship & Amani Institute Fellow",
                  "Google–Udacity Scholar",
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-[0.76rem] text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                    <span className="font-light">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow">Managing Partner</div>
              <h1 className="display-sm text-[#0F172A] mb-6">Founder & Managing Partner</h1>
              <p className="body-lg text-muted-brand">
                Vasanth Sabavath founded Insight Thinkers Agency to build a firm that operates with the rigor of a boutique investment bank, the growth capabilities of a performance marketing agency, and the deep engineering of a software company.
              </p>
              <p className="body-md mt-4 text-muted-brand">
                His credentials derived directly from hands-on execution. He has personally led hospital transaction structures, formulated private equity partnerships, scaled digital marketing campaigns, and built clinical healthcare software deployed across 50+ medical institutions.
              </p>
              <p className="body-md mt-4 text-muted-brand">
                Every mandate accepted by the firm receives Vasanth's personal direction, ensuring that growth targets, technological integrations, and financial structuring are seamlessly aligned to maximize enterprise value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Specialized Fields</div>
          <h2 className="display-sm">Domain Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISES.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-border-brand bg-slate-brand rounded-[12px] shadow-sm hover:bg-white hover:shadow-sh1 transition-all duration-300"
            >
              <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-3">
                {e.title}
              </h3>
              <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                {e.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Philosophy</div>
            <h2 className="display-sm">Operating Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {PHILOSOPHIES.map((p, idx) => (
              <motion.div
                key={p.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white border border-border-brand/80 border-l-[3px] border-l-blue-brand rounded-r-[10px] p-6 shadow-sm"
              >
                <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-slate-500 font-semibold mb-3">
                  {p.topic}
                </div>
                <div className="font-display italic text-[1.1rem] leading-[1.6] text-ink font-medium">
                  {p.quote}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey timeline */}
      <section className="section wrap border-b border-border-brand/60">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Milestones</div>
          <h2 className="display-sm">Professional Journey</h2>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-0 relative pl-4 border-l border-border-brand/80">
          {TIMELINE.map((t, idx) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative pb-10 last:pb-0 pl-6 group"
            >
              {/* marker */}
              <div className="absolute left-[-24px] top-[4px] w-2.5 h-2.5 rounded-full bg-white border-[2.5px] border-blue-brand ring-[3px] ring-blue-brand/10 transition-all duration-300 group-hover:scale-125" />
              <div className="font-mono text-[0.68rem] tracking-[0.14em] text-blue-brand font-semibold mb-1">
                {t.year}
              </div>
              <h4 className="text-[1rem] font-semibold text-ink">
                {t.title}
              </h4>
              <p className="text-[0.82rem] text-muted-brand mt-1.5 leading-relaxed font-light">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Published Perspectives & Media & Speaking */}
      <section className="section wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Perspectives */}
          <div>
            <h3 className="font-display text-[1.5rem] font-semibold text-[#0F172A] mb-6">
              Published Perspectives
            </h3>
            <div className="flex flex-col gap-4">
              {PERSPECTIVES.map((p) => (
                <div key={p.title} className="p-5 border border-border-brand bg-slate-brand rounded-[10px]">
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] text-blue-brand uppercase font-semibold">
                    {p.type}
                  </span>
                  <h4 className="font-display text-[1.1rem] font-semibold text-ink mt-1.5 mb-3">
                    {p.title}
                  </h4>
                  <Link to={p.link} className="text-[0.76rem] text-blue-brand hover:text-blue-hover font-semibold uppercase no-underline">
                    Read Report →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Media & Speaking */}
          <div>
            <h3 className="font-display text-[1.5rem] font-semibold text-[#0F172A] mb-6">
              Media & Speaking appearances
            </h3>
            <div className="flex flex-col gap-4">
              {MEDIA_SPEAKING.map((m) => (
                <div key={m.event} className="p-5 border border-border-brand bg-slate-brand rounded-[10px]">
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] text-gold-brand uppercase font-semibold">
                    {m.type}
                  </span>
                  <h4 className="text-[0.94rem] font-semibold text-ink mt-1.5 mb-1">
                    {m.event}
                  </h4>
                  <p className="text-[0.8rem] text-muted-brand font-light">
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
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2rem] font-semibold text-white mb-4">
            Schedule a Conversation
          </h3>
          <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-8 max-w-[500px] mx-auto font-light">
            If you represent a capital fund or are planning an exit structure, schedule a confidential consultation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300 hover:-translate-y-[2px]"
          >
            Schedule Session
          </button>
        </div>
      </section>
    </div>
  );
}
