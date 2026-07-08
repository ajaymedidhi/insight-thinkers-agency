import { motion } from "framer-motion";

export default function IntegratedAdvisory() {
  const steps = [
    { title: "Corporate Finance", desc: "M&A advisory, capital structuring, and valuation." },
    { title: "Technology Integration", desc: "AI, EMR, and clinical software deployment." },
    { title: "Growth & Marketing", desc: "Digital go-to-market and brand positioning." },
  ];

  return (
    <section className="section bg-[#0B1220] border-t border-white/[0.05]">
      <div className="wrap">
        <div className="max-w-[700px] mx-auto text-center mb-24">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-8 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              The Insight Model
            </span>
            <span className="w-8 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white mb-8 leading-tight">
            Integrated Advisory <span className="font-display italic font-normal text-gold-brand">Platform</span>
          </h2>
          <p className="text-[1.125rem] text-slate-400 font-light leading-relaxed">
            Traditional advisory firms operate in silos. We integrate financial structuring with technological and operational execution to maximize enterprise value.
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold-brand/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[100px] h-[100px] rounded-full bg-[#07152B] border border-white/10 shadow-sm flex items-center justify-center mb-8 group-hover:border-gold-brand/40 transition-colors duration-500 relative">
                  <div className="absolute inset-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-display italic text-[2.5rem] text-gold-brand relative z-10">{idx + 1}</span>
                </div>
                <h3 className="font-display text-[1.4rem] font-medium text-white mb-4">{step.title}</h3>
                <p className="text-[0.95rem] text-slate-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 bg-[#07152B] rounded-[2px] p-8 md:p-16 text-center text-white border border-white/10 relative overflow-hidden group hover:border-gold-brand/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(200,169,107,0.08),transparent_70%)] pointer-events-none transition-colors duration-500 group-hover:bg-[radial-gradient(ellipse_at_top,rgba(200,169,107,0.15),transparent_70%)]" />
            
            <span className="w-2 h-2 bg-gold-brand rounded-full inline-block mb-8 shadow-[0_0_10px_rgba(200,169,107,0.5)]" />
            <h3 className="font-display text-[2.2rem] md:text-[3rem] font-medium text-white leading-tight mb-6">
              Enterprise Value <span className="font-display italic font-normal text-gold-brand">Creation</span>
            </h3>
            <p className="text-[1.15rem] text-slate-300 font-light max-w-[650px] mx-auto leading-relaxed">
              Our execution model aligns every operational metric toward maximizing the final transaction multiple.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
