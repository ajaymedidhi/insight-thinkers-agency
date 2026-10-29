import mark from "../../assets/logo-mark.png";
import { FOUNDER } from "../../content/site";

/**
 * Founder portrait. Renders the client-supplied photograph when available;
 * otherwise a neutral, typographic nameplate (never a stock image or a
 * stand-in face). Supply the portrait via FOUNDER.portrait in content/site.ts.
 */
export default function FounderPortrait({ className = "" }: { className?: string }) {
  if (FOUNDER.portrait) {
    return (
      <div className={`frame aspect-[4/5] w-full ${className}`}>
        <img
          src={FOUNDER.portrait}
          alt={`Portrait of ${FOUNDER.name}, ${FOUNDER.title}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      className={`on-navy relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden bg-navy p-7 sm:p-9 ${className}`}
      role="img"
      aria-label={`${FOUNDER.name}, ${FOUNDER.title}`}
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 500">
        <defs>
          <pattern id="founder-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity="0.04" />
          </pattern>
        </defs>
        <rect width="400" height="500" fill="url(#founder-grid)" />
        <g fill="none" stroke="#B59A70" strokeOpacity="0.35">
          <circle cx="300" cy="170" r="150" />
          <circle cx="300" cy="170" r="104" strokeOpacity="0.2" />
        </g>
        <path d="M0 330H400" stroke="#fff" strokeOpacity="0.1" />
      </svg>

      <div className="relative flex items-center gap-3">
        <img src={mark} alt="" width={28} height={28} className="h-7 w-7 opacity-90" />
        <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-bronze">Founder</span>
      </div>

      <div className="relative" aria-hidden="true">
        <p className="font-serif text-[clamp(1.9rem,3.2vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-white">
          {FOUNDER.name}
        </p>
        <p className="mt-3 text-[0.875rem] text-on-navy">{FOUNDER.title}, Insight Thinkers Agency</p>
      </div>
    </div>
  );
}
