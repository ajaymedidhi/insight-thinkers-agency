const DIFFS = [
  {
    ico: "⚗️",
    t: "In-House Clinical Intelligence",
    b: "Medical Doctors on staff conduct hands-on hospital due diligence. We assess patient flows, clinical outcomes, staffing risk, and regulatory compliance — intelligence that generalist firms cannot replicate.",
    tag: "Medical Doctors · On-Staff",
  },
  {
    ico: "🏗️",
    t: "Technology Built From Scratch",
    b: "Our HealthTech products — HMS, PACS, EMR, enterprise platforms — are live and deployed across 50+ institutions. We assess technology as engineers, not commentators. This changes the quality of technology DD fundamentally.",
    tag: "6+ Proprietary Platforms",
  },
  {
    ico: "⚡",
    t: "Founder-Led, No Handoffs",
    b: "Vasanth S personally leads every engagement from origination to closure. No relationship managers. No junior associates handed a file. Institutional counterparties receive the same principal attention throughout.",
    tag: "Zero Delegation",
  },
  {
    ico: "📐",
    t: "Full-Spectrum Execution",
    b: "We move from mandate origination through financial modelling, legal documentation, clinical assessment, technology evaluation, PE introduction, and deal closure — all in-house. No gaps. No outsourcing.",
    tag: "End-to-End · In-House",
  },
  {
    ico: "🌏",
    t: "Pan-Asia Institutional Network",
    b: "PE fund relationships built through completed transactions — not introductions. We engage active fund managers deploying capital into South Asian healthcare. Our network is current, not historical.",
    tag: "Built Through Deals",
  },
  {
    ico: "🔐",
    t: "NDA-First Protocol",
    b: "Absolute confidentiality is our baseline. We operate under active NDAs before any sensitive data is discussed. No exceptions. We protect promoter interests as a primary legal and moral obligation.",
    tag: "Strict NDA Control",
  },
];

export default function Differentiators() {
  return (
    <div className="bg-ink py-[96px] relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="wrap relative z-10">
        <div className="flex justify-between items-end flex-wrap gap-[18px]">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[0.62rem] tracking-[0.26em] uppercase text-blue-light/65 mb-[18px]">
              <span className="block w-6 h-[1.5px] bg-blue-brand/40 shrink-0" />
              Why We're Different
            </div>
            <h2 className="display-sm text-white max-w-[480px]">
              Capabilities That Cannot<br />
              <em className="text-blue-light">Be Replicated.</em>
            </h2>
          </div>
          <p className="text-[0.88rem] text-slate-500 max-w-[340px] leading-[1.75]">
            Six structural advantages built into our operating model — demonstrated through completed mandates, not claimed as differentiators.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/7 rounded-[16px] overflow-hidden mt-[52px]">
          {DIFFS.map((d) => (
            <div
              key={d.t}
              className="bg-ink p-[38px_34px] transition-colors duration-200 hover:bg-ink2"
            >
              <div className="text-[1.7rem] mb-4">{d.ico}</div>
              <h3 className="font-display text-[1.15rem] font-semibold text-white mb-[9px]">
                {d.t}
              </h3>
              <p className="text-[0.82rem] text-slate-400 leading-[1.74] mb-3">
                {d.b}
              </p>
              <div className="inline-flex items-center gap-[5px] bg-blue-brand/18 border border-blue-brand/28 rounded-[4px] px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-blue-light">
                {d.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
