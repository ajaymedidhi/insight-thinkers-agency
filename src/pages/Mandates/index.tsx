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
    <div className="bg-white animate-fade-in">
      {/* Mandates Hero */}
      <section className="relative py-28 md:py-32 bg-slate-brand overflow-hidden border-b border-border-brand/80">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(7,21,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,43,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
        <div className="wrap relative z-10 text-center max-w-[850px]">
          <div className="eyebrow justify-center">Active Portfolios</div>
          <h1 className="display tracking-[-0.015em]">
            Healthcare Transactions & <span className="font-display italic font-normal text-blue-brand">Strategic Mandates</span>
          </h1>
          <p className="body-lg mt-6 max-w-[720px] mx-auto">
            Supporting healthcare founders, operators, investors, and strategic buyers through complex growth, capitalization, and transaction journeys.
          </p>
        </div>
      </section>

      {/* Industries Covered */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Sector Intelligence</div>
          <h2 className="display-sm">Industries Covered</h2>
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
                whileHover={{ y: -5 }}
                className="group p-8 border border-border-brand bg-slate-brand hover:bg-white rounded-[12px] shadow-sm hover:shadow-sh1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-blue-brand scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <div className="w-10 h-10 rounded-[8px] bg-ink group-hover:bg-blue-brand flex items-center justify-center text-white mb-6 shadow-sm transition-colors duration-300">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-3 group-hover:text-blue-brand transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Transaction Types */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Structuring Spectrum</div>
            <h2 className="display-sm">Transaction Types</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TX_TYPES.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="bg-white border border-border-brand/70 rounded-[12px] p-6 shadow-sm"
              >
                <div className="text-[0.98rem] font-semibold text-ink mb-2">{t.title}</div>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Mandate Showcase */}
      <section className="section wrap">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Active Deal Flow</div>
          <h2 className="display-sm">Confidential Showcase Portfolio</h2>
          <p className="body-md mt-4 text-muted-brand">
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
              className="bg-white border border-border-brand rounded-[16px] overflow-hidden shadow-sh1 hover:shadow-sh2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-slate-400 bg-slate-100 border border-border-brand px-2.5 py-1 rounded">
                    {m.region}
                  </span>
                  <span className="font-display text-[1.4rem] font-bold text-blue-brand/20 leading-none">
                    {m.n}
                  </span>
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold text-[#0F172A] mb-4">
                  {m.title}
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light mb-6">
                  {m.objective}
                </p>
              </div>

              <div className="bg-slate-brand p-6 border-t border-border-brand/80 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-slate-500 mb-0.5">
                    Metric Scale
                  </div>
                  <div className="text-[0.88rem] font-semibold text-ink">{m.revenue}</div>
                </div>
                <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-blue-brand bg-blue-brand/10 border border-blue-brand/20 px-2 py-0.5 rounded font-semibold">
                  {m.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-[#F8FAFC] border border-border-brand rounded-[10px] p-6 max-w-[800px] mx-auto text-center">
          <span className="text-[1.2rem] mr-2">🔐</span>
          <span className="font-mono text-[0.74rem] tracking-[0.12em] uppercase text-ink font-semibold">
            Confidentiality Notice:
          </span>
          <p className="text-[0.82rem] text-muted-brand leading-relaxed mt-2 max-w-[680px] mx-auto font-light">
            We enforce strict principal-to-principal onboarding. Acquirer capacity verification and compliance approvals must clear prior to financial model release.
          </p>
        </div>
      </section>

      {/* Deal Process (Timeline) */}
      <section className="section bg-slate-brand border-y border-border-brand/80">
        <div className="wrap">
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <div className="eyebrow justify-center">Milestones</div>
            <h2 className="display-sm">The Transaction Process</h2>
          </div>

          <div className="relative flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-4">
            {PROCESS_STEPS.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="flex-1 min-w-[200px] bg-white border border-border-brand/80 rounded-[12px] p-6 shadow-sm relative group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-brand flex items-center justify-center font-mono text-[0.7rem] text-white font-semibold mb-4">
                  {s.step}
                </div>
                <h4 className="text-[0.88rem] font-semibold text-ink mb-1 group-hover:text-blue-brand transition-colors duration-200">
                  {s.label}
                </h4>
                <p className="text-[0.76rem] text-muted-brand leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Insight Thinkers (Differentiators) */}
      <section className="section wrap">
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Credibility</div>
          <h2 className="display-sm">Why Partner With Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_DIFFS.map((diff, idx) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              className="p-6 border border-border-brand/80 rounded-[10px] bg-slate-brand shadow-sm hover:bg-white hover:shadow-sh1 transition-all duration-300"
            >
              <h3 className="font-display text-[1rem] font-semibold text-[#0F172A] mb-2">
                {diff.title}
              </h3>
              <p className="text-[0.78rem] text-muted-brand leading-relaxed font-light">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-blue-brand/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="wrap relative z-10 text-center max-w-[700px]">
          <h3 className="font-display text-[2rem] font-semibold text-white mb-4">
            Exploring a Strategic Transaction?
          </h3>
          <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-8 max-w-[500px] mx-auto font-light">
            Begin a secure principal-led alignment discussion regarding capital requirements or exit structuring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300"
            >
              Schedule Discussion
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-transparent border border-white/20 hover:border-white text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
