import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../Icons";

const HERO_STATS = [
  { val: "₹120", sfx: "Cr+", label: "Active Mandates" },
  { val: "50", sfx: "+", label: "Healthcare Institutions Served" },
  { val: "50", sfx: "+", label: "Hospitals Supported" },
  { val: "Multi", sfx: "-disciplinary", label: "Advisory Platform" },
];

const PILLARS = [
  { icon: Icons.Finance, label: "M&A", delay: 0 },
  { icon: Icons.Globe, label: "Capital", delay: 0.2 },
  { icon: Icons.Medical, label: "Healthcare", delay: 0.4 },
  { icon: Icons.AI, label: "Technology", delay: 0.6 },
];

export default function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  } as any;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24 bg-[#07152B] overflow-hidden">
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(51,65,85,0.4),transparent_50%)]" />
        {/* Architectural Grid System */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 wrap w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-start text-white">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold-brand" />
              <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-gold-brand font-semibold">
                Institutional Advisory
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-[clamp(3.2rem,5vw,5.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-white">
              Executing <br />
              <span className="font-display italic font-light text-gold-brand">High-Value</span><br />
              Transactions.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[1.1rem] leading-[1.7] text-slate-300 font-light mt-8 max-w-[500px]">
              Integrating corporate finance, clinical operations, and digital strategy to execute premium healthcare mandates.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 mt-10 w-full sm:w-auto">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-brand text-[#07152B] border border-gold-brand font-semibold tracking-[0.1em] uppercase text-[0.75rem] px-10 py-4.5 transition-all duration-300 hover:bg-white hover:border-white shadow-[0_0_20px_rgba(200,169,107,0.2)] cursor-pointer rounded-[2px]"
                onClick={() => navigate("/contact")}
              >
                Confidential Engagement
              </button>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-slate-300 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-4 py-4.5 transition-all duration-300 hover:text-white cursor-pointer relative group"
                onClick={() => navigate("/services")}
              >
                Explore Divisions
                <span className="absolute bottom-3 left-4 right-4 h-[1px] bg-slate-300/30 group-hover:bg-white transition-colors duration-500" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Focal Point */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex relative w-full h-[500px] items-center justify-center"
          >
            {/* Center Core */}
            <div className="absolute w-[240px] h-[240px] rounded-full border-[1px] border-gold-brand/20 flex items-center justify-center">
              <div className="w-[160px] h-[160px] rounded-full border-[1px] border-white/10 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full bg-gold-brand/10 border-[1px] border-gold-brand/30 shadow-[0_0_30px_rgba(200,169,107,0.15)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold-brand animate-pulse" />
                </div>
              </div>
            </div>

            {/* Orbiting Pillars */}
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              const angle = (i * 90) * (Math.PI / 180);
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.8 + pillar.delay,
                    type: "spring",
                    stiffness: 50
                  }}
                  className="absolute flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center text-gold-brand shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-slate-300 font-medium bg-[#07152B]/80 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                    {pillar.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: -1 }}>
              <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#C8A96B" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>

        {/* Institutional Credibility Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 lg:mt-24 pt-12 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {HERO_STATS.map((s, idx) => (
              <div key={idx} className="flex flex-col items-start relative before:content-[''] md:before:absolute md:before:left-0 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/[0.08] first:before:hidden md:pl-8 first:pl-0">
                <div className="font-display text-[2rem] md:text-[2.5rem] font-medium text-white leading-none mb-2">
                  {s.val}<span className="text-gold-brand italic font-normal font-display text-[1.8rem] md:text-[2.2rem]">{s.sfx}</span>
                </div>
                <div className="text-[0.7rem] text-slate-400 uppercase tracking-[0.1em] font-medium max-w-[140px] leading-[1.4]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
