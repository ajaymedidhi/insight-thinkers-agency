import type { ReactElement } from "react";
import type { Article } from "../../constants/insights";

const BRONZE = "#B59A70";
const NAVY = "#172B3A";

type Motif = { bg: string; ink: string; draw: () => ReactElement };

/**
 * Editorial cover plates, one abstract motif per topic. Used whenever an
 * article has no approved `coverImage`, so the layout never relies on stock
 * photography. Decorative only: the article title carries the meaning.
 */
const MOTIFS: Record<string, Motif> = {
  "Hospital Valuations": {
    bg: NAVY,
    ink: "#fff",
    draw: () => (
      <>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={150 + i * 85} y={380 - (i + 1) * 42} width="56" height={(i + 1) * 42} />
        ))}
        <path d="M110 380H690" stroke={BRONZE} strokeOpacity="1" />
        <path d="M178 330L688 110" stroke={BRONZE} strokeDasharray="4 6" strokeOpacity="1" />
      </>
    ),
  },
  "Private Equity": {
    bg: "#EBE4D6",
    ink: NAVY,
    draw: () => (
      <>
        {[60, 100, 140, 180].map((r) => (
          <circle key={r} cx="330" cy="250" r={r} />
        ))}
        <circle cx="470" cy="250" r="140" stroke={BRONZE} strokeOpacity="1" />
        <path d="M60 250H740" strokeOpacity="0.25" />
      </>
    ),
  },
  "Healthcare M&A": {
    bg: NAVY,
    ink: "#fff",
    draw: () => (
      <>
        <rect x="190" y="130" width="250" height="250" />
        <rect x="360" y="120" width="250" height="250" />
        <rect x="360" y="130" width="80" height="240" fill={BRONZE} fillOpacity="0.28" stroke={BRONZE} strokeOpacity="1" />
      </>
    ),
  },
  "AI in Healthcare": {
    bg: "#EBE4D6",
    ink: NAVY,
    draw: () => {
      const pts = [
        [180, 160], [300, 110], [420, 190], [560, 130], [640, 260],
        [520, 330], [380, 360], [250, 300], [140, 380], [460, 260],
      ];
      const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [7, 8], [2, 9], [9, 5], [9, 6], [1, 7]];
      return (
        <>
          {edges.map(([a, b]) => (
            <path key={`${a}-${b}`} d={`M${pts[a][0]} ${pts[a][1]}L${pts[b][0]} ${pts[b][1]}`} strokeOpacity="0.45" />
          ))}
          {pts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 9 ? 9 : 5} fill={i === 9 ? BRONZE : "#EBE4D6"} stroke={i === 9 ? BRONZE : NAVY} strokeOpacity="1" />
          ))}
        </>
      );
    },
  },
  "Growth Capital": {
    bg: NAVY,
    ink: "#fff",
    draw: () => (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M110 ${400 - i * 18}C320 ${390 - i * 18} 470 ${300 - i * 40} 690 ${120 - i * 12}`} strokeOpacity={0.15 + i * 0.12} />
        ))}
        <circle cx="690" cy="72" r="7" fill={BRONZE} stroke="none" />
      </>
    ),
  },
};

const FALLBACK: Motif = {
  bg: NAVY,
  ink: "#fff",
  draw: () => <path d="M100 250H700M400 80V420" />,
};

interface ArticleCoverProps {
  article: Pick<Article, "category" | "coverImage" | "title">;
  className?: string;
  /** Eager-load the image for above-the-fold features. */
  priority?: boolean;
}

export default function ArticleCover({ article, className = "", priority }: ArticleCoverProps) {
  if (article.coverImage) {
    return (
      <div className={`frame ${className}`}>
        <img
          src={article.coverImage}
          alt=""
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  const m = MOTIFS[article.category] ?? FALLBACK;
  return (
    <div className={`frame ${className}`} style={{ backgroundColor: m.bg }}>
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true" focusable="false">
        <g fill="none" stroke={m.ink} strokeOpacity="0.6" strokeWidth="1.25">
          {m.draw()}
        </g>
      </svg>
    </div>
  );
}
