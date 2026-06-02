import { Icons } from "./Icons";

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
    <section id="network" className="section bg-white border-t border-border-brand">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-[60px] items-start mb-16 md:mb-[68px]">
          {/* Left Column: Description & Bullets */}
          <div className="animate-fade-up">
            <div className="eyebrow">Institutional Network</div>
            <h2 className="display-sm">
              Connected Capital<br />Across <em>Asia.</em>
            </h2>
            <p className="body-lg mt-5">
              Our PE and institutional relationships are <strong>active, not archival.</strong> We engage regularly with fund managers, family offices, and strategic investors actively deploying capital into healthcare and growth sectors across India and Southeast Asia.
            </p>
            <p className="body-md mt-4">
              These are not directory relationships or conference introductions. Every institutional partner in our network has engaged with us on a live mandate, participated in a structured deal flow arrangement, or co-invested alongside us in a healthcare transaction.
            </p>
            
            <ul className="list-none mt-[22px] flex flex-col gap-[9px]">
              {NET_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[0.87rem] text-muted-brand leading-[1.65]">
                  <span className="w-[7px] h-[7px] bg-blue-brand rounded-full mt-[7px] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 flex-wrap mt-7">
              <button
                className="inline-flex items-center gap-2 cursor-pointer border-none font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-ink text-white px-[26px] py-[13px] shadow-[0_4px_16px_rgba(10,22,40,0.2)] hover:bg-ink2 hover:-translate-y-[2px]"
                onClick={() => go("contact")}
              >
                Explore Co-Advisory <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
              <button
                className="inline-flex items-center gap-2 cursor-pointer font-medium tracking-[0.04em] rounded-[6px] transition-all duration-200 text-[0.85rem] bg-transparent text-ink border-[1.5px] border-border-brand px-6 py-[12px] hover:border-ink hover:bg-ink hover:text-white"
                onClick={() => go("contact")}
              >
                Join Our Network <Icons.Arr className="w-[13px] h-[13px]" />
              </button>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="animate-fade-up delay-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.25">
              {NETWORK.map((n) => (
                <div key={n.type} className="bg-white border border-border-brand rounded-[12px] p-5 md:p-[20px_21px] transition-all duration-200 hover:shadow-sh2 hover:-translate-y-0.75">
                  <div className="font-mono text-[0.59rem] tracking-[0.18em] uppercase text-blue-brand mb-[6px]">
                    {n.type}
                  </div>
                  <div className="text-[0.95rem] font-semibold text-ink mb-[3px]">{n.title}</div>
                  <div className="text-[0.77rem] text-muted-light mb-2">{n.sub}</div>
                  <div className="inline-flex items-center gap-1.25 font-mono text-[0.6rem] tracking-[0.1em] text-muted-brand">
                    <span className="w-1.25 h-1.25 rounded-full bg-green-brand shrink-0 animate-pulse" />
                    {n.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] pt-[60px] border-t border-border-brand">
          {NET_WHY.map((w) => (
            <div key={w.n} className="p-[26px_24px] border border-border-brand rounded-[12px] bg-white shadow-sm">
              <div className="font-display text-[2.3rem] font-bold text-blue-brand/10 mb-[11px] leading-none">
                {w.n}
              </div>
              <div className="text-[0.88rem] font-semibold text-ink mb-1.5">{w.t}</div>
              <div className="text-[0.79rem] text-muted-brand leading-[1.7]">{w.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
