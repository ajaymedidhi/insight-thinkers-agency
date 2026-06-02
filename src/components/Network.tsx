import { Icons } from "./Icons";
import { motion } from "framer-motion";

interface NetworkProps {
  go: (id: string) => void;
}

const NET_BULLETS = [
  "Direct co-investment access for pre-qualified institutional fund managers",
  "SEBI-compliant structured deal flow sharing across family offices and HNIs",
  "Quarterly co-advisory updates under active bilateral NDA protocols",
  "HMS / PACS / EMR technology audits provided as complimentary deal desk assets",
];

const NETWORK = [
  {
    type: "Type 01",
    title: "Healthcare PE Funds",
    sub: "South Asia · Southeast Asia",
    count: "Active co-advisory relationships",
  },
  {
    type: "Type 02",
    title: "India Growth Capital",
    sub: "Pan-India · Mid-Market",
    count: "Ongoing deal flow engagement",
  },
  {
    type: "Type 03",
    title: "Strategic Hospital Chains",
    sub: "South India Expansion",
    count: "Inorganic growth mandates",
  },
  {
    type: "Type 04",
    title: "Family Offices",
    sub: "India · GCC · Singapore",
    count: "Direct co-investment platforms",
  },
  {
    type: "Type 05",
    title: "UHNI & HNI Investors",
    sub: "Direct Deal Participation",
    count: "Pre-qualified deal flow",
  },
  {
    type: "Type 06",
    title: "Corporate Healthcare Groups",
    sub: "Pan-India · Inorganic Growth",
    count: "Strategic acquisition pipeline",
  },
];

const NET_WHY = [
  {
    n: "01",
    t: "Active, Not Archival",
    b: "We engage regularly with fund managers, family offices, and strategic investors — not through fund databases or referral directories, but through structured quarterly interactions and live deal flow sharing.",
  },
  {
    n: "02",
    t: "SEBI-Compliant Architecture",
    b: "All transaction structuring across fund types is SEBI-compliant. Our Company Secretaries ensure every co-advisory engagement, deal flow arrangement, and co-investment structure meets regulatory requirements.",
  },
  {
    n: "03",
    t: "Confidential Deal Pipeline",
    b: "Institutional partners receive structured deal flow updates under NDA. Our pipeline is shared with pre-qualified counterparties only — ensuring alignment between asset profile and investor mandate before any introduction.",
  },
];

export default function Network({ go }: NetworkProps) {
  return (
    <section id="network" className="section bg-white border-t border-border-brand/80">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 lg:gap-[80px] items-start mb-20 md:mb-[96px]">
          
          {/* Left Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="eyebrow">Our Global Reach</div>
            <h2 className="display-sm">
              Connected Capital<br />Across <em>Asia.</em>
            </h2>
            <p className="body-lg mt-6">
              Our PE and institutional relationships are <strong>active, not archival.</strong> We engage regularly with fund managers, family offices, and strategic investors actively deploying capital into healthcare and growth sectors across India and Southeast Asia.
            </p>
            <p className="body-md mt-4">
              These are not directory relationships or conference introductions. Every institutional partner in our network has engaged with us on a live mandate, participated in a structured deal flow arrangement, or co-invested alongside us in a healthcare transaction.
            </p>
            
            <ul className="list-none mt-6 flex flex-col gap-3">
              {NET_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[0.875rem] text-muted-brand leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 bg-blue-brand rounded-full mt-[8px] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 flex-wrap mt-8">
              <button
                className="inline-flex items-center gap-2 cursor-pointer border-none font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-ink hover:bg-blue-brand text-white px-7 py-4 rounded-[6px] transition-all duration-300 shadow-sh2 hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Explore Co-Advisory <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
              <button
                className="inline-flex items-center gap-2 cursor-pointer font-semibold tracking-[0.05em] uppercase text-[0.82rem] bg-white text-ink border border-border-brand/80 px-7 py-4 rounded-[6px] transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white shadow-sh1 hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Join Our Network
              </button>
            </div>
          </motion.div>

          {/* Right Column: Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NETWORK.map((n) => (
                <motion.div
                  key={n.type}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-slate-brand border border-border-brand/85 rounded-[12px] p-6 shadow-sm hover:shadow-sh1 transition-all duration-300 hover:bg-white"
                >
                  <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-blue-brand mb-2.5 font-semibold">
                    {n.type}
                  </div>
                  <div className="text-[0.98rem] font-semibold text-[#0F172A] mb-1">{n.title}</div>
                  <div className="text-[0.8rem] text-muted-brand mb-4 font-light">{n.sub}</div>
                  <div className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.1em] text-muted-light font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0" />
                    {n.count}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stat Rule Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-border-brand/80">
          {NET_WHY.map((w, idx) => (
            <motion.div
              key={w.n}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-border-brand/75 rounded-[12px] bg-slate-brand shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:bg-white transition-colors duration-300"
            >
              <div className="font-display text-[2.5rem] font-bold text-blue-brand/12 mb-3.5 leading-none">
                {w.n}
              </div>
              <div className="text-[0.92rem] font-semibold text-[#0F172A] mb-2">{w.t}</div>
              <div className="text-[0.84rem] text-muted-brand leading-relaxed font-light">{w.b}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
