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
    <section className="section bg-slate-brand border-t border-border-brand/80">
      <div className="wrap">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">Expertise Overview</div>
          <h2 className="display-sm">
            Institutional Advisory <span className="font-display italic font-normal text-blue-brand">Capabilities.</span>
          </h2>
          <p className="body-lg mt-6">
            We deliver full-suite advisory services tailored exclusively to the complexity of the healthcare sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                className="group relative bg-white border border-border-brand/80 rounded-[12px] p-8 shadow-sh1 hover:shadow-sh2 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-brand scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <div className="w-12 h-12 rounded-[8px] bg-ink group-hover:bg-blue-brand flex items-center justify-center text-white mb-6 shadow-sm transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-blue-brand mb-2.5 font-semibold">
                  {s.cat}
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold text-ink group-hover:text-blue-brand transition-colors duration-200 mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 text-ink hover:text-blue-brand font-semibold tracking-[0.06em] uppercase text-[0.82rem] transition-all duration-300 group border-none bg-transparent"
          >
            View All Services 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
