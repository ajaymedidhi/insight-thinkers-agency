
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
    <section id="leadership" className="section bg-slate-brand border-t border-border-brand">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[60px] items-start">
          {/* Left Column: Sticky Profile Card */}
          <div className="relative top-0 lg:sticky lg:top-[88px] bg-ink rounded-[20px] p-10 md:p-[42px_36px] overflow-hidden text-white shadow-sh3 shrink-0">
            {/* Background Glow Orb */}
            <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(24,71,201,0.14)_0%,transparent_70%)] pointer-events-none" />

            {/* Initials Accent */}
            <div className="relative font-display text-[5.5rem] font-bold text-white/7 leading-none mb-[18px] tracking-[-0.02em]">
              VS
            </div>

            <h3 className="font-display text-[1.9rem] font-semibold text-white mb-[3px]">
              Vasanth S
            </h3>
            <div className="font-mono text-[0.61rem] tracking-[0.2em] uppercase text-slate-500 mb-7">
              Founder & Managing Director
            </div>

            <hr className="border-none border-t border-white/8 mb-6" />

            {/* Status Rows */}
            <div className="flex flex-col gap-3.75">
              {[
                { s: "Completed", h: "M&A Transactions", sub: "Personally led and executed to closure" },
                { s: "Completed", h: "Equity Financing", sub: "Structured and successfully closed" },
                { s: "Active", h: "Live Mandates", sub: "Healthcare assets currently under advisory" },
                { s: "Pan-Asia", h: "PE Network", sub: "Active fund relationships across Asia" },
              ].map((r) => (
                <div key={r.h} className="grid grid-cols-[76px_1fr] gap-2.5">
                  <div className="font-mono text-[0.61rem] tracking-[0.05em] text-slate-600 pt-[1px]">
                    {r.s}
                  </div>
                  <div>
                    <div className="text-[0.85rem] font-semibold text-slate-200 mb-[2px]">{r.h}</div>
                    <div className="text-[0.73rem] text-slate-500">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-1.75 mt-6 pt-5 border-t border-white/8">
              {[
                "Chartered Accountant — Institutional Financials",
                "Company Secretary — Legal & Corporate Structuring",
                "HealthTech Founder — 6 AI Products Built",
                "50+ Hospitals & Diagnostic Centres Served",
              ].map((c) => (
                <div key={c} className="flex items-center gap-1.75 text-[0.77rem] text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="animate-fade-up">
            <div className="pb-[30px] border-b border-border-brand">
              <div className="font-mono text-[0.61rem] tracking-[0.2em] uppercase text-blue-brand mb-3.5">
                Biography
              </div>
              <p className="body-lg">
                Vasanth S founded Insight Thinkers Agency to build a firm that operates with the discipline of a private investment bank, the sector depth of a healthcare specialist, and the agility of a technology company. His credentials are not theoretical — every capability the firm offers reflects skills Vasanth personally built and applied in live transactions.
              </p>
              <p className="body-md mt-4">
                His standing as a peer among institutional counterparties derives from one source: completed transactions. Vasanth has personally led and closed M&A transactions across South Indian hospital assets, structured and executed equity financing arrangements for healthcare operators seeking growth capital, and built a PE network across Asia through deals — not networking events.
              </p>
              <p className="body-md mt-4">
                Every mandate Insight Thinkers accepts receives Vasanth's personal attention from origination through to closure. He does not accept mandates he cannot personally see through to completion, and he does not delegate relationship management to junior associates or relationship managers.
              </p>
            </div>

            {/* Domain Expertise */}
            <div className="py-[30px] border-b border-border-brand">
              <div className="font-mono text-[0.61rem] tracking-[0.2em] uppercase text-blue-brand mb-3.5">
                Domain Expertise
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[11px]">
                {LEADER_EXP.map((e) => (
                  <div key={e.h} className="bg-slate-light/50 hover:bg-slate-light border border-border-brand rounded-[10px] p-[15px_16px]">
                    <div className="text-[0.83rem] font-semibold text-ink mb-1">{e.h}</div>
                    <div className="text-[0.76rem] text-muted-brand leading-[1.6]">{e.b}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quotes */}
            <div className="py-[30px] border-b border-border-brand">
              <div className="font-mono text-[0.61rem] tracking-[0.2em] uppercase text-blue-brand mb-3.5">
                Operating Philosophy
              </div>
              <h3 className="display-sm text-[1.4rem] md:text-[1.6rem] mb-4">
                How Vasanth <em>Approaches Every Mandate</em>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {LEADER_PHI.map((p) => (
                  <div key={p.q} className="bg-white hover:bg-slate-light border-l-[3px] border-l-blue-brand rounded-r-[10px] p-[18px_16px] border border-border-brand border-l-none">
                    <div className="font-display italic text-[0.93rem] text-ink leading-[1.5] mb-2.5">{p.q}</div>
                    <div className="text-[0.76rem] text-muted-brand leading-[1.6]">{p.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Spectrum */}
            <div className="py-[30px]">
              <div className="font-mono text-[0.61rem] tracking-[0.2em] uppercase text-blue-brand mb-3.5">
                Transaction Spectrum
              </div>
              <p className="body-md">
                Vasanth operates across the full transaction lifecycle — from identifying and approaching hospital promoters and institutional sellers, to engaging PE fund managers and strategic acquirers, through to term sheet negotiation, legal documentation, due diligence coordination, and final deal closure.
              </p>
              <p className="body-md mt-3">
                His relationships span PE firms across Asia and Indian capital markets, built through completed transactions. He engages institutional counterparties as a peer who has sat across the table — not as a facilitator managing introductions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
