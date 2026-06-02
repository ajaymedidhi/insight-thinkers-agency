import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LeadershipPreview() {
  const navigate = useNavigate();

  return (
    <section className="section bg-white border-t border-border-brand">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center">
          {/* Profile Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-ink rounded-[20px] p-8 overflow-hidden text-white shadow-sh3 border border-white/[0.06]"
          >
            <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative w-full h-[220px] rounded-[12px] bg-gradient-to-br from-[#0c2045] to-ink overflow-hidden border border-white/[0.08] mb-6 flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />
              <div className="relative text-center z-10 select-none">
                <span className="font-display italic text-[6.5rem] font-bold text-white/5 tracking-tighter block leading-none">VS</span>
                <span className="font-mono text-[0.55rem] tracking-[0.24em] uppercase text-blue-light/60 font-semibold block mt-[-10px]">EXECUTIVE PROFILE</span>
              </div>
            </div>

            <h3 className="font-display text-[1.8rem] font-semibold text-white mb-[3px]">
              Vasanth S
            </h3>
            <div className="font-mono text-[0.61rem] tracking-[0.22em] uppercase text-slate-500 font-semibold">
              Founder & Managing Director
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Founder-Led Advisory</div>
            <h2 className="display-sm mb-6">
              Experienced Leadership, <br />
              <span className="font-display italic font-normal text-blue-brand">No Delegation.</span>
            </h2>
            <p className="body-lg">
              Vasanth S founded Insight Thinkers to address a structural gap: traditional transaction advisory firms are generalists. They rely on outsourced clinical due diligence and treat healthcare technology as a checklist item.
            </p>
            <p className="body-md mt-4 text-muted-brand">
              With credentials as a Chartered Accountant and Company Secretary, and having built and scaled six proprietary healthcare technology platforms, Vasanth brings an integrated perspective to middle-market M&A and corporate finance that is unique in the sector.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate("/leadership")}
                className="inline-flex items-center gap-2 bg-ink hover:bg-blue-brand text-white font-semibold tracking-[0.05em] uppercase text-[0.82rem] px-7 py-4 rounded-[6px] transition-all duration-300 shadow-sh2 hover:-translate-y-[2px]"
              >
                Meet Our Founder →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
