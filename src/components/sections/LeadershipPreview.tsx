import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LeadershipPreview() {
  const navigate = useNavigate();

  return (
    <section className="section bg-[#0B1220] border-t border-white/[0.05]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-center">
          {/* Profile Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-transparent rounded-[2px] p-8 overflow-hidden text-white border border-white/10 group hover:border-gold-brand/40 transition-colors duration-500"
          >
            <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05)_0%,transparent_70%)] pointer-events-none transition-colors duration-500 group-hover:bg-[radial-gradient(circle,rgba(200,169,107,0.1)_0%,transparent_70%)]" />
            
            <div className="relative w-full py-12 rounded-[2px] bg-[#07152B] overflow-hidden border border-white/10 mb-6 flex flex-col items-center justify-center transition-colors duration-500 group-hover:border-gold-brand/20">
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />
              <div className="relative text-center z-10 select-none">
                <span className="font-display italic text-[6.5rem] font-bold text-white/5 tracking-tighter block leading-none transition-colors duration-500 group-hover:text-gold-brand/5">VS</span>
                <span className="font-mono text-[0.55rem] tracking-[0.24em] uppercase text-gold-brand/70 font-semibold block mt-[-10px] mb-8 transition-colors duration-500 group-hover:text-gold-brand">EXECUTIVE PROFILE</span>
                <div>
                  <h3 className="font-display text-[2rem] font-medium text-white tracking-tight mb-2">
                    Vasanth Sabavath
                  </h3>
                  <div className="text-[0.75rem] font-mono tracking-[0.1em] uppercase text-gold-brand mb-8">
                    Founder & Managing Partner
                  </div>
                  
                  {/* Profile Meta Info */}
                  <div className="flex flex-col gap-3 text-[0.8rem] text-slate-400 font-light text-left max-w-[260px] mx-auto">
                    {/*
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-brand shrink-0 opacity-70"></span>
                      <span>Forbes 30 Under 30 Asia Semi-Finalist</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-brand shrink-0 opacity-70"></span>
                      <span>Harvard Business School Online Alumnus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-brand shrink-0 opacity-70"></span>
                      <span>Google–Udacity Scholar & Gandhi Fellow</span>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold mb-3">Founder-Led Advisory</div>
            <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight mb-8">
              Experienced Leadership, <br />
              <span className="font-display italic font-normal text-gold-brand">No Delegation.</span>
            </h2>
            <p className="text-[1.125rem] text-slate-300 font-light leading-relaxed mb-6">
              Vasanth Sabavath founded Insight Thinkers Agency to address a structural gap: traditional advisory firms are generalists. They rely on outsourced technical due diligence and treat digital marketing as an afterthought.
            </p>
            <p className="text-[1rem] text-slate-400 font-light leading-relaxed">
              With a multi-disciplinary background spanning software engineering, strategic management, and digital marketing, Vasanth brings an integrated perspective to M&A advisory, healthcare technology, and enterprise growth that is unique in the sector.
            </p>

            <div className="mt-12">
              <button
                onClick={() => navigate("/leadership")}
                className="inline-flex items-center justify-center gap-3 bg-white/5 text-white border border-white/20 font-medium tracking-[0.1em] uppercase text-[0.75rem] px-8 py-4 transition-all duration-500 hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand cursor-pointer rounded-[2px]"
              >
                Meet Our Founder <span className="text-[1.2rem] leading-none">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
