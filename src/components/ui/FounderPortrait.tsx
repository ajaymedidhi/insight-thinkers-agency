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
      <div className={`group relative w-full ${className}`}>
        {/* Architectural offset shadow frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 -z-10 border border-bronze/25 bg-navy-deep/[0.03] transition-transform duration-500 group-hover:scale-[1.01]"
        />
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-navy/20 bg-navy-deep shadow-xl">
          <img
            src={FOUNDER.portrait}
            alt={`Portrait of ${FOUNDER.name}, ${FOUNDER.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
          />
          {/* Subtle gradient vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent"
          />
          {/* Nameplate card */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/15 bg-navy-deep/90 px-5 py-3.5 backdrop-blur-md">
            <div>
              <p className="font-serif text-[1.05rem] font-medium text-white tracking-tight">{FOUNDER.name}</p>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze">{FOUNDER.title}</p>
            </div>
            <img src={mark} alt="" width={24} height={24} className="h-6 w-6 opacity-85" />
          </div>
        </div>
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
