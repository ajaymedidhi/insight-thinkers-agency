import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../../components/Icons";

const INDUSTRIES = [
  {
    icon: Icons.Medical,
    title: "Hospitals",
    desc: "Single-specialty and multi-specialty hospital operations, clinics, and long-term care facilities.",
  },
  {
    icon: Icons.Shield,
    title: "Specialty Clinics",
    desc: "Niche healthcare providers including dental care groups, eye clinics, IVF centers, and diagnostics.",
  },
  {
    icon: Icons.Finance,
    title: "Diagnostics",
    desc: "Regional laboratory networks, imaging centers, and specialized pathology chains.",
  },
  {
    icon: Icons.AI,
    title: "HealthTech",
    desc: "EMR vendors, hospital management systems (HMS), PACS developers, and medical software platforms.",
  },
  {
    icon: Icons.Globe,
    title: "Medical Infrastructure",
    desc: "Healthcare real estate assets, physical clinics development, and specialized hospital facilities.",
  },
  {
    icon: Icons.Mail,
    title: "Healthcare Services",
    desc: "Contract research organizations (CRO), medical procurement, and home healthcare groups.",
  },
];

const TX_TYPES = [
  { title: "Buy-Side Advisory", desc: "Evaluating hospital and diagnostic assets for strategic and institutional acquirers." },
  { title: "Sell-Side Advisory", desc: "Managing clean, competitive, and confidential exits for healthcare promoters." },
  { title: "Growth Capital", desc: "Structuring equity finance from specialized healthcare PE funds." },
  { title: "Strategic Partnerships", desc: "Advising on cross-border healthcare operations partnerships." },
  { title: "Joint Ventures", desc: "Architecting collaborative corporate structures with clinical counterparts." },
  { title: "Mergers & Acquisitions", desc: "Executing end-to-end middle-market asset mergers and deal structures." },
];

const SAMPLE_MANDATES = [
  {
    n: "01",
    title: "Revenue-Generating Multi-Specialty Hospital",
    region: "South India",
    revenue: "₹3–4 Cr/mo",
    objective: "Strategic Acquisition or Majority Stake. A fully operational hospital generating ₹3–4 Crores in monthly revenue. Consistent 4-year track record.",
    status: "Active"
  },
  {
    n: "02",
    title: "Asset-Backed Hospital",
    region: "Tier-2 City",
    revenue: "₹120 Cr+ Assets",
    objective: "PE Fund or Strategic Acquirer. A mandate underpinned by significant hard asset value exceeding ₹120 Crores including land and building.",
    status: "Active"
  },
  {
    n: "03",
    title: "Profitable Diagnostic & Healthcare Setup",
    region: "Multi-Site",
    revenue: "Profitable",
    objective: "Growth Capital or Strategic Partner. An operational facility combining diagnostics and outpatient services. Expansion ready.",
    status: "Active"
  }
];

const PROCESS_STEPS = [
  { step: "01", label: "Initial Discussion", desc: "Exploratory alignment under preliminary review." },
  { step: "02", label: "NDA Execution", desc: "Mutual legal protection active before any metrics shared." },
  { step: "03", label: "Evaluation", desc: "Forensic, clinical, and tech due diligence audits." },
  { step: "04", label: "Strategic Positioning", desc: "Drafting the confidential Information Memorandum." },
  { step: "05", label: "Investor Outreach", desc: "Pitching to pre-qualified PE and family office capital." },
  { step: "06", label: "Negotiation", desc: "Structuring SPA, SHA, and earnout metrics." },
  { step: "07", label: "Transaction Closure", desc: "SEBI-compliant filings, escrow funding, and signing." },
];

const WHY_DIFFS = [
  { title: "In-House Clinical Intelligence", desc: "Medical Doctors on staff conduct hands-on hospital due diligence — patient flows, clinical outcomes, staffing risk, regulatory compliance. Intelligence generalist firms cannot replicate." },
  { title: "Technology Built From Scratch", desc: "HMS, PACS, EMR, and enterprise platforms — live and deployed across 50+ institutions. We assess technology as engineers, not commentators. This fundamentally changes the quality of tech DD." },
  { title: "Founder-Led, No Handoffs", desc: "Vasanth Sabavath personally leads every engagement from origination to closure. No relationship managers. No junior associates handed a file. Principal attention throughout." },
  { title: "Full-Spectrum Execution", desc: "Financial modelling, legal documentation, clinical assessment, technology evaluation, PE introduction, and deal closure — all in-house. No gaps. No outsourcing of critical intelligence." },
  { title: "Pan-Asia PE Network", desc: "PE fund relationships built through completed transactions, not introductions. Active fund managers deploying capital into South Asian healthcare — current, not archival." },
  { title: "NDA-First Protocol", desc: "Absolute confidentiality is built into our operating model. No mandate discussed, no data shared, no introduction facilitated without full legal confidentiality architecture in place." },
];

export default function Mandates() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#07152B] text-white animate-fade-in">
      {/* Mandates Hero */}
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
                  Active Portfolios
                </span>
              </div>

              <h1 className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
                Healthcare <br />
                <span className="font-display italic font-light text-gold-brand">Transactions</span><br />
                & Mandates.
              </h1>

              <p className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
                Supporting healthcare founders, operators, investors, and strategic buyers through complex growth, capitalization, and transaction journeys.
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
              {/* Abstract Nodes for Mandates */}
              <div className="absolute w-[240px] h-[240px] border border-gold-brand/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite_reverse]">
                <div className="absolute top-0 w-3 h-3 bg-gold-brand rounded-full shadow-[0_0_15px_rgba(200,169,107,0.8)]" />
                <div className="absolute bottom-0 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="absolute w-[160px] h-[160px] border border-white/10 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
                <div className="absolute left-0 w-2 h-2 bg-gold-brand rounded-full" />
                <div className="absolute right-0 w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="absolute w-[80px] h-[80px] bg-gold-brand/10 border border-gold-brand/30 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(200,169,107,0.2)]">
                <Icons.Shield className="w-6 h-6 text-gold-brand" />
              </div>

              {/* Geometric Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
                <path d="M 10% 90% Q 50% 10% 90% 90%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 20% 50% L 80% 50%" fill="none" stroke="#C8A96B" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Covered */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Sector Intelligence
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Industries Covered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="group p-8 bg-transparent border border-white/10 rounded-[2px] transition-all duration-300 hover:border-gold-brand/50 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 transition-colors duration-300 group-hover:text-gold-brand group-hover:border-gold-brand/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[1.4rem] font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Transaction Types */}
      <section className="section bg-[#0B1220] border-y border-white/[0.05]">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="w-6 h-[1px] bg-gold-brand" />
              <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
                Structuring Spectrum
              </span>
              <span className="w-6 h-[1px] bg-gold-brand" />
            </div>
            <h2 className="font-display text-[2.5rem] text-white">Transaction Types</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TX_TYPES.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/30 transition-colors duration-300"
              >
                <div className="text-[1.1rem] font-display font-medium text-white mb-3">{t.title}</div>
                <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Mandate Showcase */}
      <section className="section wrap">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Active Deal Flow
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Confidential Portfolio</h2>
          <p className="text-[0.95rem] mt-4 text-slate-400 font-light max-w-[600px] mx-auto">
            To protect promoter integrity and clinical operations, asset details are anonymized. Dossier metrics are accessible only to qualified counterparts under active NDA protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_MANDATES.map((m, idx) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="bg-transparent border border-white/10 rounded-[2px] overflow-hidden flex flex-col justify-between group hover:border-gold-brand/50 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-slate-300 border border-white/20 px-3 py-1.5 rounded-[2px]">
                    {m.region}
                  </span>
                  <span className="font-display text-[1.4rem] font-bold text-white/10 leading-none group-hover:text-gold-brand/20 transition-colors">
                    {m.n}
                  </span>
                </div>
                <h3 className="font-display text-[1.3rem] font-medium text-white mb-4 group-hover:text-gold-brand transition-colors duration-300">
                  {m.title}
                </h3>
                <p className="text-[0.9rem] text-slate-300 leading-relaxed font-light mb-6">
                  {m.objective}
                </p>
              </div>

              <div className="bg-[#0B1220] p-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-slate-500 mb-1">
                    Metric Scale
                  </div>
                  <div className="text-[0.95rem] font-display font-medium text-white">{m.revenue}</div>
                </div>
                <span className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-gold-brand border border-gold-brand/30 px-3 py-1 rounded-[2px] font-semibold">
                  {m.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-[#0B1220] border border-gold-brand/20 rounded-[2px] p-8 max-w-[800px] mx-auto text-center">
          <span className="text-[1.2rem] mr-2">🔐</span>
          <span className="font-mono text-[0.74rem] tracking-[0.15em] uppercase text-gold-brand font-semibold">
            Confidentiality Notice:
          </span>
          <p className="text-[0.85rem] text-slate-300 leading-relaxed mt-4 max-w-[680px] mx-auto font-light">
            We enforce strict principal-to-principal onboarding. Acquirer capacity verification and compliance approvals must clear prior to financial model release.
          </p>
        </div>
      </section>

      {/* Deal Process (Timeline) */}
      <section className="section bg-[#0B1220] border-y border-white/[0.05]">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="w-6 h-[1px] bg-gold-brand" />
              <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
                Milestones
              </span>
              <span className="w-6 h-[1px] bg-gold-brand" />
            </div>
            <h2 className="font-display text-[2.5rem] text-white">The Transaction Process</h2>
          </div>

          <div className="relative flex flex-col md:flex-row flex-wrap justify-center gap-6">
            {PROCESS_STEPS.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="flex-[1_1_250px] max-w-[350px] bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center font-mono text-[0.75rem] text-white font-semibold mb-5 group-hover:border-gold-brand group-hover:text-gold-brand transition-colors duration-300">
                  {s.step}
                </div>
                <h4 className="text-[1.05rem] font-display font-medium text-white mb-3 group-hover:text-gold-brand transition-colors duration-200">
                  {s.label}
                </h4>
                <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Insight Thinkers (Differentiators) */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Credibility
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] text-white">Why Partner With Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_DIFFS.map((diff, idx) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              className="p-8 border border-white/10 bg-transparent rounded-[2px] hover:border-gold-brand/40 transition-all duration-300"
            >
              <h3 className="font-display text-[1.2rem] font-medium text-white mb-3">
                {diff.title}
              </h3>
              <p className="text-[0.85rem] text-slate-300 leading-relaxed font-light">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#0B1220] text-white relative overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2.5rem] font-semibold text-white mb-4 tracking-tight">
            Exploring a Strategic Transaction?
          </h3>
          <p className="text-[1.05rem] text-slate-300 leading-relaxed mb-10 max-w-[500px] mx-auto font-light">
            Begin a secure principal-led alignment discussion regarding capital requirements or exit structuring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
            >
              Schedule Discussion
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-3 bg-transparent text-slate-300 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-4 py-4.5 transition-all duration-500 hover:text-white cursor-pointer relative group"
            >
              Contact Us
              <span className="absolute bottom-3 left-4 right-4 h-[1px] bg-slate-300/30 group-hover:bg-white transition-colors duration-500" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
