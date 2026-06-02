import { Icons } from "./Icons";
import { motion } from "framer-motion";

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
  const getChipStyle = (c: string) => {
    switch (c) {
      case "chip-g":
        return "text-[#15803d] bg-[#f0fdf4] border-[#bbf7d0]";
      case "chip-b":
        return "text-blue-brand bg-[#eef3ff] border-[#c7d8ff]";
      case "chip-s":
        return "text-ink bg-slate-light border-border-brand";
      default:
        return "text-muted-brand bg-slate-brand border-border-brand";
    }
  };

  return (
    <section id="mandates" className="section bg-white border-t border-border-brand/80">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-[72px] items-start">
          
          {/* Left Column: Mandates list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="eyebrow">Active Mandates</div>
            <h2 className="display-sm">
              Exclusive Advisory <span className="font-display italic font-normal text-blue-brand">Portfolios.</span>
            </h2>
            <p className="body-lg mt-6 mb-10">
              We manage a curated pipeline of sell-side and joint venture mandates in the healthcare sector. Every asset profile below represents a live, founder-led engagement with verified transaction documents.
            </p>

            <div className="flex flex-col gap-6">
              {MANDATES.map((m) => (
                <motion.div
                  key={m.n}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white border border-border-brand/80 rounded-[12px] overflow-hidden shadow-sh1 transition-all duration-300 hover:shadow-sh2"
                >
                  <div className="flex items-start gap-4 p-6 md:p-8">
                    <div className="font-display text-[1.6rem] font-bold text-blue-brand/20 min-w-[32px] leading-none pt-[3px]">
                      {m.n}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.125rem] font-semibold text-[#0F172A] mb-2.5">
                        {m.title}
                      </h3>
                      <p className="text-[0.875rem] text-muted-brand leading-relaxed font-light">
                        {m.body}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-brand border-t border-border-brand/80">
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-4">
                      {m.tags.map((t) => (
                        <span
                          key={t.l}
                          className={`inline-flex items-center px-3 py-1 rounded-[4px] text-[0.68rem] font-semibold tracking-[0.06em] uppercase border ${getChipStyle(
                            t.c
                          )}`}
                        >
                          {t.l}
                        </span>
                      ))}
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div className="bg-white rounded-[6px] p-3 border border-border-brand/80 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-1 font-semibold">
                          Target Acquirer / Ask
                        </div>
                        <div className="text-[0.82rem] font-semibold text-[#0F172A]">{m.ask}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-3 border border-border-brand/80 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-1 font-semibold">
                          Beds / Setup
                        </div>
                        <div className="text-[0.82rem] font-semibold text-[#0F172A]">{m.beds}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-3 border border-border-brand/80 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-1 font-semibold">
                          Verified Revenue
                        </div>
                        <div className="text-[0.82rem] font-semibold text-[#0F172A]">{m.rev}</div>
                      </div>
                      <div className="bg-white rounded-[6px] p-3 border border-border-brand/80 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
                        <div className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-muted-light mb-1 font-semibold">
                          Operational Status
                        </div>
                        <div className="text-[0.82rem] font-semibold text-[#0F172A]">{m.status}</div>
                      </div>
                    </div>

                    <div className="font-mono text-[0.62rem] tracking-[0.1em] text-muted-light font-semibold mt-4">
                      🔒 Advisory Protocol: In-depth financial metrics released under mutual NDA only.
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Secure Access side card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:sticky lg:top-[120px]"
          >
            <div className="bg-ink rounded-[16px] p-8 md:p-10 shadow-sh3 text-white relative overflow-hidden border border-white/[0.06]">
              {/* background terminal glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-brand/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-[6px] px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow" />
                <span className="font-mono text-[0.6rem] tracking-[0.2em] text-slate-300 uppercase font-semibold">
                  Mandate Access Protocol
                </span>
              </div>

              <h3 className="font-display text-[1.65rem] font-semibold text-white mb-3">
                Request Secure Dossier Access
              </h3>
              <p className="text-[0.88rem] text-slate-400 leading-relaxed mb-6 font-light">
                We enforce a strict NDA-first protocol. Before releasing financial models, audited logs, clinical assessments, or asset dossiers, we require:
              </p>

              <div className="grid grid-cols-2 gap-[1px] bg-white/[0.06] rounded-[10px] overflow-hidden mb-6">
                <div className="p-4 bg-white/3">
                  <div className="font-display text-[1.4rem] font-bold text-white leading-none mb-1">
                    ₹120 Cr+
                  </div>
                  <div className="text-[0.72rem] text-slate-500 font-light">Advisory Value Under NDA</div>
                </div>
                <div className="p-4 bg-white/3">
                  <div className="font-display text-[1.4rem] font-bold text-white leading-none mb-1">
                    100%
                  </div>
                  <div className="text-[0.72rem] text-slate-500 font-light">Confidentiality Rate</div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Execution of mutual Non-Disclosure Agreement (NDA)",
                  "Verification of acquirer credentials / fund capacity",
                  "Management clearance from asset promoter",
                  "Direct principal-to-principal onboarding session",
                ].map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <div className="w-[19px] h-[19px] rounded-full bg-blue-brand/30 flex items-center justify-center shrink-0 mt-0.5 border border-blue-brand/40">
                      <Icons.Chk className="w-[9px] h-[9px] text-white" />
                    </div>
                    <span className="text-[0.84rem] text-slate-300 font-light leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 cursor-pointer border-none font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-blue-brand text-white py-4 rounded-[6px] shadow-[0_4px_18px_rgba(37,99,235,0.25)] hover:bg-blue-hover hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Initiate NDA Request <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
