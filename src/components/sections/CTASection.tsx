import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.05]">
      {/* Background glow orb */}
      <div className="absolute bottom-[-20%] left-[10%] w-[500px] h-[500px] bg-gold-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-6 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Secure Advisory Desk
            </span>
            <span className="w-6 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white mb-6 leading-tight">
            Ready to Discuss a Healthcare <br />
            <span className="font-display italic font-normal text-gold-brand">Transaction?</span>
          </h2>
          <p className="text-[1.125rem] text-slate-300 mb-10 max-w-[580px] mx-auto font-light leading-relaxed">
            Every conversation begins with confidentiality and strategic clarity. We execute a mutual Non-Disclosure Agreement (NDA) before any proprietary data is shared.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4.5 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
            >
              Schedule Consultation
              <span className="text-[1.2rem] leading-none">→</span>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-3 bg-transparent text-slate-300 border border-transparent font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4.5 transition-all duration-500 hover:text-white cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
