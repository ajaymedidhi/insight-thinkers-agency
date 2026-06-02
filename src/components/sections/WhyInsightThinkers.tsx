import { motion } from "framer-motion";
import { Icons } from "../Icons";

const VALUES = [
  {
    ico: Icons.Medical,
    title: "Healthcare Specialization",
    desc: "We do not advise generalist companies. Our entire focus is on hospital operators, clinical assets, diagnostics, and healthcare-related products.",
  },
  {
    ico: Icons.Finance,
    title: "Advisory Experience",
    desc: "Rigorous transaction execution spanning buy-side advisory, exit strategy, valuation benchmarking, and SEBI-compliant structural designs.",
  },
  {
    ico: Icons.AI,
    title: "In-House Technology",
    desc: "We are healthtech builders with proprietary HMS, PACS, and EMR platforms deployed across 50+ facilities. We run technical audits as software engineers.",
  },
  {
    ico: Icons.Shield,
    title: "Founder-Led Execution",
    desc: "Every mandate is handled directly by our Founder, Vasanth S (CA, CS), from onboarding to closure. Zero hand-offs to junior associates.",
  },
];

export default function WhyInsightThinkers() {
  return (
    <section className="section bg-[#07152B] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-brand/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="wrap relative z-10">
        <div className="max-w-[760px] mx-auto text-center mb-16 md:mb-20">
          <div className="eyebrow justify-center text-blue-light">Our Value Proposition</div>
          <h2 className="display-sm text-white">
            Why Capital Partners & Founders <span className="font-display italic font-normal text-blue-light">Trust Us.</span>
          </h2>
          <p className="body-lg text-slate-400 mt-6 font-light">
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
                className="p-8 border border-white/[0.08] rounded-[12px] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-[10px] bg-blue-brand/20 border border-blue-brand/30 flex items-center justify-center text-blue-light mb-6 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[1.125rem] font-semibold text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-[0.84rem] text-slate-400 leading-relaxed font-light">
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
