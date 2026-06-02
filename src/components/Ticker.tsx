const TICKER_RAW = [
  "Active M&A Mandates — South India Healthcare",
  "NDA-First Engagement Protocol",
  "Chartered Accountants · Company Secretaries · Medical Doctors · Software Engineers",
  "₹120 Crore+ Asset Value Under Advisory",
  "PE Network Across South Asia & Southeast Asia",
  "Institutional-Grade Due Diligence",
  "Founder-Led Every Mandate — No Handoffs",
  "HMS · PACS · EMR · Enterprise HealthTech",
];

export default function Ticker() {
  // Duplicate ticker text to ensure infinite loop effect is seamless
  const duplicatedItems = [...TICKER_RAW, ...TICKER_RAW];

  return (
    <div className="bg-ink py-[10px] overflow-hidden mt-[68px] select-none">
      <div className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
        {duplicatedItems.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[10px] px-[30px] font-mono text-[0.63rem] tracking-[0.16em] uppercase text-white/50"
          >
            <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
