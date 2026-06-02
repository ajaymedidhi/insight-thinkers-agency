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
  { title: "Growth Capital Investors", desc: "Specialist funds looking for minority equity placements in mid-market hospital rollouts." },
  { title: "Private Equity Firms", desc: "Pan-Asia buyout and growth equity funds deploying ticket sizes of ₹50–200 Crore." },
  { title: "Healthcare Focused Funds", desc: "Niche sector venture capital and private equity targeting clinical diagnostics and healthtech scaleups." },
  { title: "Strategic Capital Partners", desc: "Corporate Venture Capital (CVC) desks of large hospital networks and pharmaceuticals." },
];

const STAKEHOLDERS_OPERATORS = [
  { title: "Hospital Groups", desc: "Promoters of multi-specialty setups looking for majority SPA liquidity or expansion cash." },
  { title: "Specialty Clinics", desc: "Boutique clinic hubs, IVF chains, and oncology units seeking joint venture capital." },
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
  { step: "01", title: "Understand Objectives", desc: "Map promoter objectives, debt structures, and operational goals." },
  { step: "02", title: "Identify Opportunities", desc: "Screen asset valuations, software stacks, and clinical files." },
  { step: "03", title: "Activate Network", desc: "Direct outreach to pre-screened healthcare PE desks." },
  { step: "04", title: "Facilitate Engagement", desc: "Organize principal meetings under strict bilateral NDAs." },
  { step: "05", title: "Support Execution", desc: "Provide corporate secretarial approvals and close." },
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
    <div className="bg-white animate-fade-in">
      {/* Network Hero */}
      <section className="relative py-28 md:py-32 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(7,21,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,43,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
        <div className="wrap relative z-10 text-center max-w-[850px]">
          <div className="eyebrow justify-center">Ecosystem Connect</div>
          <h1 className="display tracking-[-0.015em]">
            Healthcare Ecosystem <span className="font-display italic font-normal text-blue-brand">Network</span>
          </h1>
          <p className="body-lg mt-6 max-w-[720px] mx-auto">
            Connecting healthcare operators, institutional private equity funds, family offices, technology leaders, and strategic partners.
          </p>
        </div>
      </section>

      {/* Network Overview Visual Diagram */}
      <section className="section wrap border-b border-border-brand/60">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Ecosystem Map</div>
          <h2 className="display-sm">Visual Relationship Grid</h2>
          <p className="body-md text-muted-brand mt-4">
            Interactive representation of capital desks, operational channels, and technology partners aligned under our transactional advisory structure.
          </p>
        </div>

        {/* CSS Ecosystem Diagram */}
        <div className="relative w-full max-w-[900px] h-[400px] md:h-[500px] mx-auto border border-border-brand/80 rounded-[20px] bg-slate-brand shadow-sm overflow-hidden flex items-center justify-center">
          {/* Concentric rings */}
          <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-blue-brand/10 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-blue-brand/5 pointer-events-none" />
          
          {/* Core Hub */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="z-20 w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full bg-ink flex flex-col items-center justify-center text-center p-3 border border-white/10 shadow-sh3"
          >
            <span className="font-semibold text-white text-[0.74rem] md:text-[0.88rem] tracking-tight leading-tight">
              Insight Thinkers
            </span>
            <span className="font-mono text-[0.46rem] text-blue-light tracking-[0.16em] uppercase mt-1 font-semibold">
              Hub
            </span>
          </motion.div>

          {/* Nodes */}
          {ECOSYSTEM_NODES.map((node, idx) => {
            const isCapital = node.group === "capital";
            const isTech = node.group === "technology";
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: node.x, top: node.y }}
              >
                <div className={`px-4 py-2 border rounded-full text-[0.72rem] md:text-[0.8rem] font-semibold shadow-sm tracking-wide transition-all ${
                  isCapital 
                    ? "bg-[#eff6ff] border-[#bfdbfe] text-blue-brand hover:bg-blue-brand hover:text-white"
                    : isTech 
                      ? "bg-[#faf5ff] border-[#e9d5ff] text-purple-600 hover:bg-purple-600 hover:text-white"
                      : "bg-white border-border-brand text-ink hover:border-ink"
                }`}>
                  {node.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stakeholder Sections */}
      <section className="section bg-slate-brand border-b border-border-brand/80">
        <div className="wrap flex flex-col gap-20">
          {/* Investor Relationships */}
          <div>
            <div className="mb-8">
              <div className="eyebrow">Capital Networks</div>
              <h3 className="display-sm text-[1.6rem] md:text-[1.8rem]">Investor Relationships</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_INVESTORS.map((inv) => (
                <div key={inv.title} className="bg-white border border-border-brand/70 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300">
                  <div className="text-[0.98rem] font-semibold text-ink mb-2">{inv.title}</div>
                  <p className="text-[0.8rem] text-muted-brand leading-relaxed font-light">{inv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Healthcare Operators */}
          <div>
            <div className="mb-8">
              <div className="eyebrow">Operating Channels</div>
              <h3 className="display-sm text-[1.6rem] md:text-[1.8rem]">Healthcare Operators</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_OPERATORS.map((op) => (
                <div key={op.title} className="bg-white border border-border-brand/70 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300">
                  <div className="text-[0.98rem] font-semibold text-ink mb-2">{op.title}</div>
                  <p className="text-[0.8rem] text-muted-brand leading-relaxed font-light">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partners */}
          <div>
            <div className="mb-8">
              <div className="eyebrow">Tech Alliances</div>
              <h3 className="display-sm text-[1.6rem] md:text-[1.8rem]">Technology Partners</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAKEHOLDERS_TECH.map((tech) => (
                <div key={tech.title} className="bg-white border border-border-brand/70 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300">
                  <div className="text-[0.98rem] font-semibold text-ink mb-2">{tech.title}</div>
                  <p className="text-[0.8rem] text-muted-brand leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="section wrap border-b border-border-brand/80">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Engagement Model</div>
          <h2 className="display-sm">How We Collaborate</h2>
        </div>

        <div className="relative flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-4 max-w-[1000px] mx-auto">
          {COLLAB_STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex-1 min-w-[180px] bg-slate-brand border border-border-brand/80 rounded-[12px] p-6 shadow-sm group"
            >
              <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center font-mono text-[0.7rem] text-white font-semibold mb-4">
                {s.step}
              </div>
              <h4 className="text-[0.88rem] font-semibold text-ink mb-1 group-hover:text-blue-brand transition-colors duration-200">
                {s.title}
              </h4>
              <p className="text-[0.76rem] text-muted-brand leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Strengths */}
      <section className="section bg-slate-brand">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Scale Metrics</div>
            <h2 className="display-sm">Ecosystem Credentials</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[1000px] mx-auto text-center">
            {STRENGTHS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="bg-white border border-border-brand/80 rounded-[12px] p-6 shadow-sm"
              >
                <div className="font-display text-[2.2rem] font-bold text-blue-brand mb-2 leading-none">
                  {s.val}
                </div>
                <div className="text-[0.78rem] text-muted-brand leading-snug font-light">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden">
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2rem] font-semibold text-white mb-4">
            Connect With Our Ecosystem Network
          </h3>
          <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-8 max-w-[500px] mx-auto font-light">
            If you are a private equity fund manager, family office principal, or strategic promoter looking for pre-screened deal flow.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300"
          >
            Request Access
          </button>
        </div>
      </section>
    </div>
  );
}
