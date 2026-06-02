import { Icons } from "./Icons";
import { motion } from "framer-motion";

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
  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-[96px] bg-slate-brand overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.035)_0%,transparent_65%)] pointer-events-none" />

      {/* Grid Pattern with subtle opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(7,21,43,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,43,0.025) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 wrap w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_450px] gap-12 lg:gap-[80px] items-center">
          
          {/* Left Column: Headings & Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Tag chip */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#F1F5F9] border border-border-brand/80 rounded-full px-4 py-1.5 mb-[26px]"
            >
              <span className="w-1.5 h-1.5 bg-blue-brand rounded-full animate-pulse-slow" />
              <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-muted-brand font-semibold">
                NDA-First Transaction Protocol
              </span>
            </motion.div>

            {/* Display Title */}
            <motion.h1 variants={itemVariants} className="display tracking-[-0.02em]">
              We Architect Healthcare <br />
              <span className="font-display italic font-normal text-blue-brand">Transactions to Close.</span>
            </motion.h1>

            {/* Subtitle / Copy */}
            <motion.p variants={itemVariants} className="body-lg mt-6 max-w-[540px]">
              Insight Thinkers is a specialized advisory firm executing middle-market healthcare M&A and equity financing. We combine <strong>investment banking rigor</strong> with <strong>in-house clinical operations</strong> and <strong>proprietary technology audits</strong> to deliver completed transactions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3.5 flex-wrap mt-[38px]">
              <button
                className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-7 py-4 rounded-[6px] transition-all duration-300 shadow-[0_4px_18px_rgba(37,99,235,0.22)] hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(37,99,235,0.32)]"
                onClick={() => go("contact")}
              >
                Confidential Inquiry
                <Icons.Arr className="w-[13px] h-[13px] transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="inline-flex items-center gap-2 bg-white text-ink border border-border-brand/80 font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-7 py-4 rounded-[6px] transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white shadow-sh1 hover:-translate-y-[2px]"
                onClick={() => go("mandates")}
              >
                Explore Mandates
              </button>
            </motion.div>

            {/* Institutional Stat Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-12 pt-10 border-t border-border-brand/80"
            >
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-start border-l border-border-brand/80 pl-4 first:border-l-0 first:pl-0">
                  <div className="font-display text-[2.2rem] font-bold text-ink leading-none mb-1">
                    {s.val}
                    <span className="text-blue-brand italic font-normal font-display">{s.sfx}</span>
                  </div>
                  <div className="text-[0.74rem] text-muted-brand leading-relaxed whitespace-pre-line font-light">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Terminal Panel Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Soft decorative glow behind the terminal card */}
            <div className="absolute inset-0 bg-blue-brand/5 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative bg-ink rounded-[20px] shadow-sh3 border border-white/[0.08] overflow-hidden backdrop-blur-md"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-[0.8rem] font-medium text-slate-300 font-mono tracking-wider">TRANSACTION DESK</span>
                </div>
                <span className="flex items-center gap-2 bg-[#15803d]/20 border border-[#bbf7d0]/10 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse-slow" />
                  <span className="font-mono text-[0.58rem] tracking-[0.14em] text-[#22c55e] uppercase font-semibold">Live Feed</span>
                </span>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-2 border-b border-white/[0.06]">
                {/* Cell 1 */}
                <div className="p-6 border-r border-b border-white/[0.06] hover:bg-white/[0.01] transition-colors">
                  <div className="text-[1.2rem] mb-2">🏥</div>
                  <div className="font-display text-[1.55rem] font-semibold text-white leading-none">₹3.5 Cr</div>
                  <div className="text-[0.7rem] text-slate-500 mt-2 font-mono tracking-wider uppercase">Target Monthly Revenue</div>
                  <div className="text-[0.66rem] text-slate-400 mt-1 font-light">South India Hospital</div>
                </div>
                {/* Cell 2 (Accent Dark/Highlights) */}
                <div className="p-6 border-b border-white/[0.06] bg-[#0c2045]/30 hover:bg-[#0c2045]/40 transition-colors">
                  <div className="text-[1.2rem] mb-2">🩺</div>
                  <div className="font-display text-[1.55rem] font-semibold text-white leading-none">₹120 Cr+</div>
                  <div className="text-[0.7rem] text-blue-light/70 mt-2 font-mono tracking-wider uppercase">Asset Advisory Value</div>
                  <div className="text-[0.66rem] text-slate-300 mt-1 font-light">Hard Asset Value</div>
                </div>
                {/* Cell 3 */}
                <div className="p-6 border-r border-white/[0.06] hover:bg-white/[0.01] transition-colors">
                  <div className="text-[1.2rem] mb-2">🛡️</div>
                  <div className="font-display text-[1.55rem] font-semibold text-white leading-none">NDA-1st</div>
                  <div className="text-[0.7rem] text-slate-500 mt-2 font-mono tracking-wider uppercase">Compliance Protocol</div>
                  <div className="text-[0.66rem] text-slate-400 mt-1 font-light">Strict Confidentiality</div>
                </div>
                {/* Cell 4 */}
                <div className="p-6 hover:bg-white/[0.01] transition-colors">
                  <div className="text-[1.2rem] mb-2">⚙️</div>
                  <div className="font-display text-[1.55rem] font-semibold text-white leading-none">6+ AI</div>
                  <div className="text-[0.7rem] text-slate-500 mt-2 font-mono tracking-wider uppercase">HealthTech Deployed</div>
                  <div className="text-[0.66rem] text-slate-400 mt-1 font-light">In-House Products</div>
                </div>
              </div>

              {/* Bottom Notice Panel */}
              <div className="flex items-center gap-3.5 p-5 bg-[#0a1628]">
                <span className="text-[16px] shrink-0">🔐</span>
                <div className="text-[0.73rem] text-slate-400 leading-relaxed font-light">
                  <strong className="text-white font-semibold font-mono">NDA ENFORCED:</strong> Qualified credentials and proof of capital capacity required for mandate dossier verification.
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
