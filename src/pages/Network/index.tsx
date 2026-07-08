import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ECOSYSTEM_NODES = [
  { label: "Private Equity", group: "capital", x: "15%", y: "20%" },
  { label: "Family Offices", group: "capital", x: "85%", y: "20%" },
  { label: "Strategic Investors", group: "capital", x: "50%", y: "10%" },
  
  { label: "Hospital Operators", group: "operators", x: "15%", y: "80%" },
  { label: "Healthcare Entrepreneurs", group: "operators", x: "85%", y: "80%" },
  { label: "HealthTech Leaders", group: "technology", x: "50%", y: "90%" },
  
  { label: "Industry Experts", group: "experts", x: "10%", y: "50%" },
  { label: "Technology Partners", group: "technology", x: "90%", y: "50%" },
];

const STAKEHOLDERS_INVESTORS = [
  { title: "Healthcare PE Funds", desc: "Active co-advisory relationships for South Asia and Southeast Asia." },
  { title: "India Growth Capital", desc: "Ongoing deal flow engagement for pan-India mid-market investments." },
  { title: "Family Offices", desc: "Direct co-investment platforms across India, GCC, and Singapore." },
  { title: "UHNI & HNI Investors", desc: "Pre-qualified deal flow for direct deal participation and co-investments." },
];

const STAKEHOLDERS_OPERATORS = [
  { title: "Strategic Hospital Chains", desc: "Inorganic growth mandates for South India expansion and regional consolidation." },
  { title: "Corporate Healthcare Groups", desc: "Strategic acquisition pipeline for pan-India inorganic growth." },
  { title: "Diagnostics Networks", desc: "Diagnostic lab promoters planning to integrate lab operations with institutional partners." },
  { title: "Healthcare Platforms", desc: "Digital health hubs seeking co-development and technology joint ventures." },
];

const STAKEHOLDERS_TECH = [
  { title: "Healthcare Software", desc: "HMS, clinical logging platforms, PACS architectures, and billing software assets." },
  { title: "AI Platforms", desc: "Machine learning diagnosis modules, predictive clinical modeling tools, and smart EMR integrations." },
  { title: "Digital Transformation", desc: "Core IT integration systems enabling post-acquisition software alignments." },
  { title: "Data & Analytics", desc: "Business intelligence tools parsing clinical revenues and operating margins." },
];

const COLLAB_STEPS = [
  { step: "01", title: "Active, Not Archival", desc: "We engage regularly with fund managers, family offices, and strategic investors through structured interactions and live deal flow sharing." },
  { step: "02", title: "SEBI-Compliant Structure", desc: "All transaction structuring across fund types is SEBI-compliant. Our team ensures every co-advisory arrangement meets regulatory requirements." },
  { step: "03", title: "Confidential Pipeline", desc: "Institutional partners receive structured deal flow updates under NDA. Pipeline is shared with pre-qualified counterparties only." },
];

const STRENGTHS = [
  { val: "100%", label: "Healthcare Focus" },
  { val: "20+", label: "PE Partners" },
  { val: "50+", label: "Hospital Relationships" },
  { val: "6+", label: "Tech Products Built" },
  { val: "₹120Cr+", label: "Advisory Pipeline" },
];

export default function Network() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#07152B] text-white animate-fade-in">
      {/* Network Hero */}
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
                  Ecosystem Connect
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
                Healthcare <br />
                <span className="font-display italic font-light text-gold-brand">Ecosystem</span><br />
                Network.
              </h1>

              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
                Connecting healthcare operators, institutional private equity funds, family offices, technology leaders, and strategic partners.
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

            {/* Right Column - Visual Focal Point */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex relative w-full h-[400px] items-center justify-center"
            >
              {/* Abstract Web for Network */}
              <div className="absolute w-[260px] h-[260px] border-[1px] border-gold-brand/10 rounded-full flex items-center justify-center">
                <div className="absolute top-0 right-1/4 w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-white/40 rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-gold-brand/40 rounded-full" />
              </div>
              <div className="absolute w-[180px] h-[180px] border-[1px] border-white/10 rounded-full flex items-center justify-center animate-[spin_50s_linear_infinite]">
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-gold-brand rounded-full shadow-[0_0_10px_rgba(200,169,107,0.5)]" />
                <div className="absolute top-0 right-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
              <div className="absolute w-[100px] h-[100px] bg-gold-brand/10 border border-gold-brand/40 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(200,169,107,0.2)]">
                <div className="w-4 h-4 bg-gold-brand rounded-full shadow-[0_0_15px_rgba(200,169,107,0.8)]" />
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
                <path d="M 50% 50% L 20% 20%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 50% 50% L 80% 20%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 50% 50% L 20% 80%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 50% 50% L 80% 80%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="2 4" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network Overview Visual Diagram */}
      <section className="section wrap border-b border-white/[0.05]">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Ecosystem Map
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Visual Relationship Grid</h2>
          <p className="text-[0.95rem] text-slate-400 mt-4 max-w-[600px] mx-auto font-light">
            Interactive representation of capital desks, operational channels, and technology partners aligned under our transactional advisory structure.
          </p>
        </div>

        {/* CSS Ecosystem Diagram */}
        <div className="relative w-full max-w-[900px] h-[400px] md:h-[500px] mx-auto border border-white/10 rounded-[2px] bg-[#0B1220] shadow-sm overflow-hidden flex items-center justify-center">
          {/* Concentric rings */}
          <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-gold-brand/10 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-white/5 pointer-events-none" />
          
          {/* Core Hub */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="z-20 w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full bg-[#07152B] flex flex-col items-center justify-center text-center p-3 border border-gold-brand/40 shadow-[0_0_20px_rgba(200,169,107,0.15)]"
          >
            <span className="font-semibold text-white text-[0.8rem] md:text-[0.9rem] tracking-tight leading-tight">
              Insight Thinkers
            </span>
            <span className="font-mono text-[0.5rem] text-gold-brand tracking-[0.16em] uppercase mt-2 font-semibold">
              Hub
            </span>
          </motion.div>

          {/* Nodes */}
          {ECOSYSTEM_NODES.map((node, idx) => {
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: node.x, top: node.y }}
              >
                <div className="px-5 py-2 border border-white/10 bg-[#07152B] rounded-[2px] text-[0.72rem] md:text-[0.8rem] text-slate-300 font-medium tracking-wide transition-all duration-300 group-hover:border-gold-brand/60 group-hover:text-gold-brand">
                  {node.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stakeholder Sections */}
      <section className="section bg-[#0B1220] border-b border-white/[0.05]">
        <div className="wrap flex flex-col gap-24">
          {/* Investor Relationships */}
          <div>
            <div className="mb-10 text-center">
              <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-3">Capital Networks</div>
              <h3 className="font-display text-[2rem] md:text-[2.2rem] text-white">Investor Relationships</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_INVESTORS.map((inv) => (
                <div key={inv.title} className="bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-300 group">
                  <div className="text-[1.05rem] font-display font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-300">{inv.title}</div>
                  <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">{inv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Healthcare Operators */}
          <div>
            <div className="mb-10 text-center">
              <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-3">Operating Channels</div>
              <h3 className="font-display text-[2rem] md:text-[2.2rem] text-white">Healthcare Operators</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_OPERATORS.map((op) => (
                <div key={op.title} className="bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-300 group">
                  <div className="text-[1.05rem] font-display font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-300">{op.title}</div>
                  <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div>
            <div className="mb-10 text-center">
              <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-3">Tech Alliances</div>
              <h3 className="font-display text-[2rem] md:text-[2.2rem] text-white">Technology Partners</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_TECH.map((tech) => (
                <div key={tech.title} className="bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-300 group">
                  <div className="text-[1.05rem] font-display font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-300">{tech.title}</div>
                  <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="section wrap border-b border-white/[0.05]">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Engagement Model
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">How We Collaborate</h2>
        </div>

        <div className="relative flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-4 max-w-[1000px] mx-auto">
          {COLLAB_STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex-1 min-w-[200px] bg-transparent border border-white/10 rounded-[2px] p-8 group hover:border-gold-brand/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center font-mono text-[0.75rem] text-white font-semibold mb-5 group-hover:border-gold-brand group-hover:text-gold-brand transition-colors duration-300">
                {s.step}
              </div>
              <h4 className="text-[1.1rem] font-display font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-200">
                {s.title}
              </h4>
              <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Strengths */}
      <section className="section bg-[#0B1220]">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="w-6 h-[1px] bg-gold-brand" />
              <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
                Scale Metrics
              </span>
              <span className="w-6 h-[1px] bg-gold-brand" />
            </div>
            <h2 className="font-display text-[2.5rem] text-white">Ecosystem Credentials</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[1000px] mx-auto text-center">
            {STRENGTHS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/20 transition-colors duration-300"
              >
                <div className="font-display text-[2rem] font-medium text-white mb-3 leading-none tracking-tight">
                  {s.val}
                </div>
                <div className="font-mono text-[0.65rem] tracking-[0.1em] text-gold-brand uppercase font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2.5rem] font-semibold text-white mb-4 tracking-tight">
            Connect With Our Ecosystem
          </h3>
          <p className="text-[1.05rem] text-slate-300 leading-relaxed mb-10 max-w-[500px] mx-auto font-light">
            If you are a private equity fund manager, family office principal, or strategic promoter looking for pre-screened deal flow.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
          >
            Request Access
          </button>
        </div>
      </section>
    </div>
  );
}
