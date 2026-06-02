import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as any;

  return (
    <div className="bg-[#07152B] py-[120px] relative overflow-hidden">
      {/* Visual background grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Decorative navy glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-brand/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end flex-wrap gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[0.62rem] tracking-[0.28em] uppercase text-blue-light font-semibold mb-5">
              <span className="block w-6 h-[1.5px] bg-blue-brand/50 shrink-0" />
              Why We're Different
            </div>
            <h2 className="display-sm text-white max-w-[480px]">
              Capabilities That Cannot<br />
              <span className="text-blue-light font-display italic font-normal">Be Replicated.</span>
            </h2>
          </div>
          <p className="text-[0.92rem] text-slate-400 max-w-[340px] leading-relaxed font-light">
            Six structural advantages built into our operating model — demonstrated through completed mandates, not claimed as differentiators.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIFFS.map((d) => (
            <motion.div
              key={d.t}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-[12px] p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <div className="text-[1.8rem] mb-5">{d.ico}</div>
              <h3 className="font-display text-[1.2rem] font-semibold text-white mb-2.5">
                {d.t}
              </h3>
              <p className="text-[0.84rem] text-slate-400 leading-relaxed mb-5 font-light">
                {d.b}
              </p>
              <div className="inline-flex items-center gap-1.5 bg-blue-brand/10 border border-blue-brand/20 rounded-[4px] px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-blue-light font-semibold">
                {d.tag}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
