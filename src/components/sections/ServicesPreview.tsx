import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../Icons";

const SERVICES_PREVIEW = [
  {
    Icon: Icons.Finance,
    cat: "M&A · Advisory",
    title: "Healthcare M&A",
    body: "Structuring and executing sell-side and buy-side transactions for hospitals, clinics, and diagnostic platforms.",
  },
  {
    Icon: Icons.Globe,
    cat: "Capital · Structuring",
    title: "Equity Financing",
    body: "Connecting healthcare founders with institutional PE funds, growth capital, and structured family offices.",
  },
  {
    Icon: Icons.Shield,
    cat: "Strategy · Governance",
    title: "Strategic Advisory",
    body: "Advising promoters on corporate restructuring, joint ventures, and long-term geographic expansion plans.",
  },
  {
    Icon: Icons.AI,
    cat: "Engineering · Due Diligence",
    title: "Technology Advisory",
    body: "Auditing health tech assets, HMS systems, PACS architectures, and digital security parameters.",
  },
];

export default function ServicesPreview() {
  const navigate = useNavigate();

  return (
    <section className="section bg-[#0B1220] border-t border-white/[0.05]">
      <div className="wrap">
        <div className="max-w-[760px] mx-auto text-center mb-20">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-8 h-[1px] bg-gold-brand" />
            <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-gold-brand font-semibold">
              Expertise Overview
            </span>
            <span className="w-8 h-[1px] bg-gold-brand" />
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3rem] text-white leading-tight">
            Institutional Advisory <br />
            <span className="font-display italic font-normal text-gold-brand">Capabilities.</span>
          </h2>
          <p className="text-[1.05rem] text-slate-400 mt-6 max-w-[600px] mx-auto font-light leading-relaxed">
            We deliver full-suite advisory services tailored exclusively to the complexity of the healthcare sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_PREVIEW.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative bg-transparent border border-white/10 rounded-[2px] p-8 hover:border-gold-brand/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-brand scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <div className="w-12 h-12 rounded-[2px] bg-[#07152B] border border-white/10 group-hover:border-gold-brand/30 flex items-center justify-center text-gold-brand mb-8 shadow-sm transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-gold-brand mb-3 font-medium">
                  {s.cat}
                </div>
                <h3 className="font-display text-[1.4rem] font-medium text-white group-hover:text-gold-brand transition-colors duration-300 mb-4">
                  {s.title}
                </h3>
                <p className="text-[0.85rem] text-slate-400 leading-relaxed font-light">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-3 text-white hover:text-gold-brand font-medium tracking-[0.1em] uppercase text-[0.75rem] transition-colors duration-300 group border-none bg-transparent cursor-pointer"
          >
            View All Services 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-[1.2rem] leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
