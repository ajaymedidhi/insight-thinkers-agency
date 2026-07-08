import { motion } from "framer-motion";
import { Icons } from "../Icons";

const VALUES = [
  {
    ico: Icons.Finance,
    title: "Institutional Rigour",
    desc: "Every deliverable is prepared to standards institutional counterparties demand — financial models, legal documents, clinical reports alike."
  },
  {
    ico: Icons.Shield,
    title: "Absolute Confidentiality",
    desc: "NDA-first engagement is a philosophy, not a protocol. No mandate is discussed without mutual legal protection in place."
  },
  {
    ico: Icons.Medical,
    title: "Completion Over Commission",
    desc: "We accept only mandates we are confident we can close. Pipeline breadth is never prioritised over execution depth."
  },
  {
    ico: Icons.AI,
    title: "Evidence-Based Advisory",
    desc: "Every recommendation is grounded in verified financial data, operational metrics, and clinical assessments — not market opinion."
  }
];

export default function WhyInsightThinkers() {
  return (
    <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.05]">
      {/* Background patterns */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-brand/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="wrap relative z-10">
        <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-8 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Our Value Proposition
            </span>
            <span className="w-8 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">
            Why Capital Partners & Founders <br />
            <span className="font-display italic font-normal text-gold-brand">Trust Us.</span>
          </h2>
          <p className="text-[1.125rem] text-slate-300 mt-8 font-light leading-relaxed max-w-[650px] mx-auto">
            We operate at the convergence of corporate finance, clinical operations, and health technology. 
            This integration provides institutional rigor unmatched by traditional generalist advisory firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, idx) => {
            const Icon = v.ico;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-8 border border-white/10 rounded-[2px] bg-[#0B1220] hover:border-gold-brand/40 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-[2px] bg-transparent border border-white/10 flex items-center justify-center text-gold-brand mb-8 group-hover:border-gold-brand/30 transition-colors duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[1.4rem] font-medium text-white mb-4 group-hover:text-gold-brand transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-[0.85rem] text-slate-400 leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
