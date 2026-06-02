import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../Icons";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="section bg-[#07152B] text-white relative overflow-hidden border-t border-white/[0.04]">
      {/* Background glow orb */}
      <div className="absolute bottom-[-20%] left-[10%] w-[500px] h-[500px] bg-blue-brand/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto"
        >
          <div className="eyebrow justify-center text-blue-light">Secure Advisory Desk</div>
          <h2 className="display-sm text-white mb-6">
            Ready to Discuss a Healthcare <span className="font-display italic font-normal text-blue-light">Transaction?</span>
          </h2>
          <p className="body-lg text-slate-300 mb-10 max-w-[580px] mx-auto font-light">
            Every conversation begins with confidentiality and strategic clarity. We execute a mutual Non-Disclosure Agreement (NDA) before any proprietary data is shared.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300 shadow-[0_4px_18px_rgba(37,99,235,0.22)] hover:-translate-y-[2px]"
            >
              Schedule Consultation
              <Icons.Arr className="w-[13px] h-[13px]" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-8 py-4.5 rounded-[6px] transition-all duration-300 hover:bg-white/5 hover:-translate-y-[2px]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
