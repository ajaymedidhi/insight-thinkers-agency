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
    <div className="bg-white border-y border-border-brand py-8 relative overflow-hidden">
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
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-light border border-border-brand/60 flex items-center justify-center text-blue-brand group-hover:bg-blue-brand group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="font-mono text-[0.74rem] tracking-[0.14em] uppercase text-ink font-semibold group-hover:text-blue-brand transition-colors duration-300">
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
