import { Icons } from "./Icons";

interface HeroProps {
  go: (id: string) => void;
}

const HERO_STATS = [
  { val: "50", sfx: "+", label: "Healthcare institutions\nserved across India" },
  { val: "6", sfx: "+", label: "Proprietary AI health-\ntech products built" },
  { val: "₹120", sfx: "Cr+", label: "Gross asset value\nunder active advisory" },
  { val: "Pan", sfx: "-Asia", label: "Institutional PE\nnetwork coverage" },
];

export default function Hero({ go }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center py-16 md:py-22 md:pt-[88px] md:pb-[60px] relative overflow-hidden bg-white">
      {/* Glow Orbs */}
      <div className="absolute top-[-180px] right-[-100px] w-[860px] h-[860px] rounded-full bg-[radial-gradient(circle,rgba(24,71,201,0.055)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[-130px] left-[-80px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_65%)] pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(10,22,40,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.022) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 md:gap-[60px] items-center wrap w-full">
        {/* Left Side: Content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-slate-light border border-border-brand rounded-[30px] px-[14px] py-1.5 mb-[26px]">
            <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow" />
            <span className="font-mono text-[0.61rem] tracking-[0.18em] uppercase text-muted-brand">
              NDA-First Transaction Protocol
            </span>
          </div>

          <h1 className="display">
            We Architect Healthcare <em>Transactions to Close.</em>
          </h1>

          <p className="body-lg mt-[22px] max-w-[510px]">
            Insight Thinkers is a specialized advisory firm executing middle-market healthcare M&A and equity financing. We combine <strong>investment banking rigor</strong> with <strong>in-house clinical intelligence</strong> and <strong>software engineering</strong> to deliver completed transactions.
          </p>

          <div className="flex items-center gap-3 flex-wrap mt-[34px]">
            <button
              className="inline-flex items-center gap-2 cursor-pointer border-none font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-blue-brand text-white px-[26px] py-[13px] shadow-[0_4px_16px_rgba(24,71,201,0.26)] hover:bg-blue-hover hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(24,71,201,0.34)]"
              onClick={() => go("contact")}
            >
              Confidential Inquiry <Icons.Arr className="w-[13px] h-[13px]" />
            </button>
            <button
              className="inline-flex items-center gap-2 cursor-pointer font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-transparent text-ink border-[1.5px] border-border-brand px-6 py-[12px] hover:border-ink hover:bg-ink hover:text-white"
              onClick={() => go("mandates")}
            >
              Explore Mandates <Icons.Arr className="w-[13px] h-[13px]" />
            </button>
          </div>

          {/* Metrics */}
          <div className="flex items-stretch mt-12 pt-10 border-t border-border-brand flex-wrap gap-y-6 sm:flex-nowrap">
            {HERO_STATS.map((s, idx) => (
              <div
                key={s.label}
                className={`flex-1 min-w-[120px] px-7 text-center border-r border-border-brand last:border-r-0 first:pl-0 last:pr-0 ${
                  idx === 0 ? "pl-0 text-left sm:text-center" : ""
                } ${idx === HERO_STATS.length - 1 ? "pr-0 text-right sm:text-center" : ""}`}
              >
                <div className="font-display text-[1.95rem] font-bold text-ink leading-none">
                  {s.val}
                  <em className="text-blue-brand not-italic font-normal italic">{s.sfx}</em>
                </div>
                <div
                  className="text-[0.74rem] text-muted-brand mt-1.25 leading-[1.4] whitespace-pre-line"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Card (Hidden on Mobile/Tablet via standard hidden md:block) */}
        <div className="hidden md:block animate-fade-up delay-150">
          <div className="bg-white rounded-[20px] shadow-sh3 border border-border-brand overflow-hidden animate-float">
            <div className="flex items-center justify-between px-5 py-[18px] border-b border-border-brand">
              <span className="text-[0.84rem] font-semibold text-ink">Transaction Desk</span>
              <span className="flex items-center gap-1.5 bg-green-bg border border-green-border rounded-[20px] px-2.5 py-1">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow" />
                <span className="font-mono text-[0.61rem] tracking-[0.14em] text-green-brand uppercase">Active</span>
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-border-brand">
              {/* Box 1 */}
              <div className="p-[18px] border-r border-b border-border-brand">
                <div className="text-[0.95rem] mb-[5px]">🏥</div>
                <div className="font-display text-[1.35rem] font-bold text-ink leading-none">₹3.5 Cr</div>
                <div className="text-[0.72rem] text-muted-brand mt-[3px] leading-[1.3]">Target Monthly Revenue</div>
                <div className="text-[0.66rem] text-muted-light mt-[1px]">South India Hospital</div>
              </div>
              {/* Box 2 (Dark) */}
              <div className="p-[18px] bg-ink border-b border-border-brand">
                <div className="text-[0.95rem] mb-[5px]">🩺</div>
                <div className="font-display text-[1.35rem] font-bold text-white leading-none">₹120 Cr+</div>
                <div className="text-[0.72rem] text-slate-400 mt-[3px] leading-[1.3]">Asset Advisory Value</div>
                <div className="text-[0.66rem] text-slate-600 mt-[1px]">Hard Asset Value</div>
              </div>
              {/* Box 3 */}
              <div className="p-[18px] border-r border-border-brand">
                <div className="text-[0.95rem] mb-[5px]">🛡️</div>
                <div className="font-display text-[1.35rem] font-bold text-ink leading-none">NDA-1st</div>
                <div className="text-[0.72rem] text-muted-brand mt-[3px] leading-[1.3]">Compliance Protocol</div>
                <div className="text-[0.66rem] text-muted-light mt-[1px]">Strict Confidentiality</div>
              </div>
              {/* Box 4 */}
              <div className="p-[18px]">
                <div className="text-[0.95rem] mb-[5px]">⚙️</div>
                <div className="font-display text-[1.35rem] font-bold text-ink leading-none">6+ AI</div>
                <div className="text-[0.72rem] text-muted-brand mt-[3px] leading-[1.3]">HealthTech Deployed</div>
                <div className="text-[0.66rem] text-muted-light mt-[1px]">In-House Products</div>
              </div>
            </div>

            <div className="flex items-center gap-[11px] p-[18px] bg-ink">
              <span className="text-[13px] shrink-0">🔐</span>
              <div className="text-[0.75rem] text-slate-400 leading-[1.4]">
                <strong className="text-white font-semibold">NDA protocol strictly enforced.</strong> Verification credentials required for asset information access.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
