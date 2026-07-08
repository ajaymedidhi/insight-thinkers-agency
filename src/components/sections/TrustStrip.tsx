import { motion } from "framer-motion";
import { Icons } from "../Icons";

const BADGES = [
  { text: "Healthcare Focused", icon: Icons.Medical },
  { text: "NDA First Approach", icon: Icons.Shield },
  { text: "Strategic Advisory", icon: Icons.Finance },
  { text: "Multi-disciplinary Team", icon: Icons.Globe },
];

export default function TrustStrip() {
  return (
    <div className="bg-[#07152B] border-y border-white/[0.05] py-10 relative overflow-hidden">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-around gap-6">
          {BADGES.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B1220] border border-white/10 flex items-center justify-center text-gold-brand group-hover:border-gold-brand/40 transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-slate-300 font-medium group-hover:text-gold-brand transition-colors duration-300">
                  {b.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
