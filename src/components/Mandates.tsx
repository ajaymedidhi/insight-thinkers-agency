import { Icons } from "./Icons";

interface MandatesProps {
  go: (id: string) => void;
}

const MANDATES = [
  {
    n: "01",
    title: "Revenue-Generating Multi-Specialty Hospital",
    body: "A fully operational multi-specialty hospital generating ₹3–4 Crores in monthly revenue. Established patient base across General Medicine, Orthopaedics, and Obstetrics. Licensed medical team of 60+ clinical staff. Consistent 4-year revenue track record. Available for strategic acquisition or majority stake.",
    tags: [
      { l: "Active", c: "chip-g" },
      { l: "South India", c: "chip-s" },
      { l: "₹3–4 Cr/Mo", c: "chip-b" },
    ],
    ask: "Strategic Acquisition or Majority Stake",
    rev: "₹3–4 Cr/month",
    ebitda: "EBITDA Positive",
    beds: "80+ Beds",
    status: "Fully Operational",
  },
  {
    n: "02",
    title: "Asset-Backed Hospital — ₹120+ Crore Asset Value",
    body: "A hospital mandate underpinned by significant hard asset value exceeding ₹120 Crores — comprising land parcels, purpose-built hospital building, medical infrastructure, and operational setup across a tier-2 city with strong healthcare demand fundamentals.",
    tags: [
      { l: "Active", c: "chip-g" },
      { l: "Asset-Backed", c: "chip-s" },
      { l: "₹120 Cr+", c: "chip-b" },
    ],
    ask: "PE Fund or Strategic Acquirer",
    rev: "Asset Value ₹120 Cr+",
    ebitda: "Operational",
    beds: "120+ Beds",
    status: "Land + Building + Operations",
  },
  {
    n: "03",
    title: "Profitable Diagnostic & Healthcare Setup — Expansion Ready",
    body: "An operational healthcare facility combining diagnostics and outpatient services. Profitable since inception, fully licensed, and structured for immediate geographic or vertical expansion. All regulatory approvals, staff, lab infrastructure, and operational systems in place — eliminating greenfield execution risk entirely.",
    tags: [
      { l: "Active", c: "chip-g" },
      { l: "Profitable", c: "chip-s" },
      { l: "Expansion-Ready", c: "chip-b" },
    ],
    ask: "Growth Capital or Strategic Partner",
    rev: "Profitable — Verified",
    ebitda: "Positive EBITDA",
    beds: "Multi-Site",
    status: "Expansion Ready",
  },
];

export default function Mandates({ go }: MandatesProps) {
  // Helper to map class names to Tailwind CSS
  const getChipStyle = (c: string) => {
    switch (c) {
      case "chip-g":
        return "text-green-brand bg-green-bg border border-green-border";
      case "chip-b":
        return "text-blue-brand bg-[#eef3ff] border border-[#c7d8ff]";
      case "chip-s":
        return "text-ink bg-slate-light border border-border-brand";
      default:
        return "text-muted-brand bg-slate-brand border border-border-brand";
    }
  };

  return (
    <section id="mandates" className="section bg-white border-t border-border-brand">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-[72px] items-start">
          {/* Left Column: Active Mandates List */}
          <div className="animate-fade-up">
            <div className="eyebrow">Active Mandates</div>
            <h2 className="display-sm">
              Exclusive Advisory <em>Portfolios.</em>
            </h2>
            <p className="body-lg mt-5 mb-8">
              We manage a curated pipeline of sell-side and joint venture mandates in the healthcare sector. Every asset profile below represents a live, founder-led engagement with verified transaction documents.
            </p>

            <div className="flex flex-col gap-4">
              {MANDATES.map((m) => (
                <div
                  key={m.n}
                  className="bg-white border border-border-brand rounded-[13px] overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-sh2"
                >
                  <div className="flex items-start gap-3.5 p-6 md:p-[24px_26px_18px]">
                    <div className="font-display text-[1.4rem] font-bold text-blue-brand/18 min-w-[28px] leading-none pt-[2px]">
                      {m.n}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.06rem] font-semibold text-ink mb-[7px]">
                        {m.title}
                      </h3>
                      <p className="text-[0.82rem] text-muted-brand leading-[1.7]">
                        {m.body}
                      </p>
                    </div>
                  </div>

                  <div className="p-[13px_26px] bg-slate-brand border-t border-border-brand">
                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap mb-2.5">
                      {m.tags.map((t) => (
                        <span
                          key={t.l}
                          className={`inline-flex items-center px-2.5 py-1 rounded-[4px] text-[0.67rem] font-semibold tracking-[0.05em] uppercase border ${getChipStyle(
                            t.c
                          )}`}
                        >
                          {t.l}
                        </span>
                      ))}
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-1.75 mb-2">
                      <div className="bg-white rounded-[6px] p-[7px_10px] border border-border-brand">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-[2px]">
                          Target Acquirer / Ask
                        </div>
                        <div className="text-[0.77rem] font-semibold text-ink">{m.ask}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-[7px_10px] border border-border-brand">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-[2px]">
                          Beds / Setup
                        </div>
                        <div className="text-[0.77rem] font-semibold text-ink">{m.beds}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-[7px_10px] border border-border-brand">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-[2px]">
                          Verified Revenue
                        </div>
                        <div className="text-[0.77rem] font-semibold text-ink">{m.rev}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-[7px_10px] border border-border-brand">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-[2px]">
                          Operational Status
                        </div>
                        <div className="text-[0.77rem] font-semibold text-ink">{m.status}</div>
                      </div>
                    </div>

                    <div className="font-mono text-[0.6rem] tracking-[0.1em] text-muted-light">
                      🔒 Advisory Protocol: In-depth financial metrics released under mutual NDA only.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: NDA Info Box */}
          <div className="animate-fade-up delay-100">
            <div className="bg-ink rounded-[16px] p-[38px_34px] shadow-sh3 text-white">
              <div className="inline-flex items-center gap-1.75 bg-white/6 border border-white/10 rounded-[6px] px-3 py-1.25 mb-[18px]">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow" />
                <span className="font-mono text-[0.59rem] tracking-[0.18em] text-slate-400 uppercase">
                  Mandate Access Protocol
                </span>
              </div>

              <h3 className="font-display text-[1.55rem] font-semibold text-white mb-2">
                Request Secure Dossier Access
              </h3>
              <p className="text-[0.84rem] text-slate-500 leading-[1.6] mb-[26px]">
                We enforce a strict NDA-first protocol. Before releasing financial models, audited logs, clinical assessments, or asset dossiers, we require:
              </p>

              <div className="grid grid-cols-2 gap-[1px] bg-white/7 rounded-[10px] overflow-hidden mb-6">
                <div className="p-4 bg-white/3">
                  <div className="font-display text-[1.35rem] font-bold text-white leading-none mb-[3px]">
                    ₹120 Cr+
                  </div>
                  <div className="text-[0.71rem] text-slate-500">Advisory Value Under NDA</div>
                </div>
                <div className="p-4 bg-white/3">
                  <div className="font-display text-[1.35rem] font-bold text-white leading-none mb-[3px]">
                    100%
                  </div>
                  <div className="text-[0.71rem] text-slate-500">Confidentiality Rate</div>
                </div>
              </div>

              <div className="flex flex-col gap-2.25 mb-6">
                {[
                  "Execution of mutual Non-Disclosure Agreement (NDA)",
                  "Verification of acquirer credentials / fund capacity",
                  "Management clearance from asset promoter",
                  "Direct principal-to-principal onboarding session",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2.75">
                    <div className="w-[19px] h-[19px] rounded-full bg-blue-brand/35 flex items-center justify-center shrink-0">
                      <Icons.Chk className="w-[9px] h-[9px] text-white" />
                    </div>
                    <span className="text-[0.81rem] text-slate-400">{s}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 cursor-pointer border-none font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-blue-brand text-white py-[13px] shadow-[0_4px_16px_rgba(24,71,201,0.26)] hover:bg-blue-hover hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Initiate NDA Request <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
