import { motion } from "framer-motion";

const LEADER_EXP = [
  {
    h: "M&A Transaction Leadership",
    b: "Personally originated, structured, and closed institutional M&A transactions across South Indian healthcare assets. Not advisory — actual execution.",
  },
  {
    h: "Equity Financing Structuring",
    b: "Structured and closed equity financing engagements for healthcare operators seeking growth capital from PE funds and institutional investors.",
  },
  {
    h: "Clinical Asset Intelligence",
    b: "Deep understanding of hospital operations, clinical metrics, and healthcare regulation — enabling due diligence that financial advisors alone cannot perform.",
  },
  {
    h: "AI & HealthTech Architecture",
    b: "Built six proprietary healthcare technology platforms from first principles — HMS, PACS, EMR — deployed and operated across 50+ institutions.",
  },
];

const LEADER_PHI = [
  {
    q: "On mandate selectivity:",
    a: '"We decline more mandates than we accept. Every engagement we take carries our name. We do not accept mandates we cannot close with the rigour institutional buyers deserve."',
  },
  {
    q: "On network vs. relationships:",
    a: '"Our PE relationships were built through completed transactions — not networking events or introductions. Every fund manager we work with has seen us deliver."',
  },
  {
    q: "On the firm's architecture:",
    a: '"Most advisory firms outsource clinical intelligence. We have medical doctors on staff. Most consultants assess technology — we built the technology. That is the difference."',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section bg-slate-brand border-t border-border-brand/80">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[60px] items-start">
          
          {/* Left Column: Executive Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative top-0 lg:sticky lg:top-[120px] bg-ink rounded-[20px] p-8 md:p-9 overflow-hidden text-white shadow-sh3 shrink-0 border border-white/[0.06]"
          >
            {/* Background Glow Orb */}
            <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Premium Executive Profile Monochrome Portrait Placeholder */}
            <div className="relative w-full h-[220px] rounded-[12px] bg-gradient-to-br from-[#0c2045] to-ink overflow-hidden border border-white/[0.08] mb-6 flex items-center justify-center">
              {/* Geometric Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />
              {/* Silhouette Vector Overlay */}
              <div className="relative text-center z-10 select-none">
                <span className="font-display italic text-[6.5rem] font-bold text-white/5 tracking-tighter block leading-none">VS</span>
                <span className="font-mono text-[0.55rem] tracking-[0.24em] uppercase text-blue-light/60 font-semibold block mt-[-10px]">EXECUTIVE PROFILE</span>
              </div>
            </div>

            <h3 className="font-display text-[1.8rem] font-semibold text-white mb-[3px]">
              Vasanth S
            </h3>
            <div className="font-mono text-[0.61rem] tracking-[0.22em] uppercase text-slate-500 mb-6 font-semibold">
              Founder & Managing Director
            </div>

            <hr className="border-none border-t border-white/[0.08] mb-6" />

            {/* Status Rows */}
            <div className="flex flex-col gap-4">
              {[
                { s: "Completed", h: "M&A Transactions", sub: "Personally led and executed to closure" },
                { s: "Completed", h: "Equity Financing", sub: "Structured and successfully closed" },
                { s: "Active", h: "Live Mandates", sub: "Healthcare assets currently under advisory" },
                { s: "Pan-Asia", h: "PE Network", sub: "Active fund relationships across Asia" },
              ].map((r) => (
                <div key={r.h} className="grid grid-cols-[76px_1fr] gap-2.5">
                  <div className="font-mono text-[0.61rem] tracking-[0.06em] text-slate-500 pt-[2px] font-semibold uppercase">
                    {r.s}
                  </div>
                  <div>
                    <div className="text-[0.84rem] font-semibold text-slate-200 mb-[1px]">{r.h}</div>
                    <div className="text-[0.72rem] text-slate-500 font-light">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-2 mt-6 pt-5 border-t border-white/[0.08]">
              {[
                "Chartered Accountant — Institutional Financials",
                "Company Secretary — Legal & Corporate Structuring",
                "HealthTech Founder — 6 AI Products Deployed",
                "50+ Hospitals & Diagnostic Centres Served",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 text-[0.76rem] text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                  <span className="font-light">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Biography */}
            <div className="pb-8 border-b border-border-brand/80">
              <div className="font-mono text-[0.61rem] tracking-[0.24em] uppercase text-blue-brand mb-4 font-semibold">
                Biography
              </div>
              <p className="body-lg">
                Vasanth S founded Insight Thinkers Agency to build a firm that operates with the discipline of a private investment bank, the sector depth of a healthcare specialist, and the agility of a technology company. His credentials are not theoretical — every capability the firm offers reflects skills Vasanth personally built and applied in live transactions.
              </p>
              <p className="body-md mt-5">
                His standing as a peer among institutional counterparties derives from one source: completed transactions. Vasanth has personally led and closed M&A transactions across South Indian hospital assets, structured and executed equity financing arrangements for healthcare operators seeking growth capital, and built a PE network across Asia through deals — not networking events.
              </p>
              <p className="body-md mt-4">
                Every mandate Insight Thinkers accepts receives Vasanth's personal attention from origination through to closure. He does not accept mandates he cannot personally see through to completion, and he does not delegate relationship management to junior associates or relationship managers.
              </p>
            </div>

            {/* Domain Expertise */}
            <div className="py-8 border-b border-border-brand/80">
              <div className="font-mono text-[0.61rem] tracking-[0.24em] uppercase text-blue-brand mb-5 font-semibold">
                Domain Expertise
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LEADER_EXP.map((e) => (
                  <div key={e.h} className="bg-white border border-border-brand/80 rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-sh1 transition-all duration-300">
                    <div className="text-[0.85rem] font-semibold text-[#0F172A] mb-1">{e.h}</div>
                    <div className="text-[0.8rem] text-muted-brand leading-relaxed font-light">{e.b}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quotes */}
            <div className="py-8 border-b border-border-brand/80">
              <div className="font-mono text-[0.61rem] tracking-[0.24em] uppercase text-blue-brand mb-5 font-semibold">
                Operating Philosophy
              </div>
              <h3 className="display-sm text-[1.4rem] md:text-[1.6rem] mb-5">
                How Vasanth <em>Approaches Every Mandate</em>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {LEADER_PHI.map((p) => (
                  <div key={p.q} className="bg-[#F8FAFC] hover:bg-white border border-border-brand/80 border-l-[3px] border-l-blue-brand rounded-r-[10px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300">
                    <div className="font-display italic text-[0.96rem] text-ink leading-relaxed mb-3.5 font-medium">{p.q}</div>
                    <div className="text-[0.8rem] text-muted-brand leading-relaxed font-light">{p.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Spectrum */}
            <div className="pt-8">
              <div className="font-mono text-[0.61rem] tracking-[0.24em] uppercase text-blue-brand mb-4 font-semibold">
                Transaction Spectrum
              </div>
              <p className="body-md">
                Vasanth operates across the full transaction lifecycle — from identifying and approaching hospital promoters and institutional sellers, to engaging PE fund managers and strategic acquirers, through to term sheet negotiation, legal documentation, due diligence coordination, and final deal closure.
              </p>
              <p className="body-md mt-4">
                His relationships span PE firms across Asia and Indian capital markets, built through completed transactions. He engages institutional counterparties as a peer who has sat across the table — not as a facilitator managing introductions.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
