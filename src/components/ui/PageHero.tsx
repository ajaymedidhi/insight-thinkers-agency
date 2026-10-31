import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  /** Optional right-hand column (summary, index, key facts). */
  aside?: ReactNode;
}

/** Interior page header: asymmetric, typographic, authoritative financial press aesthetic. */
export default function PageHero({ eyebrow, title, lede, actions, aside }: PageHeroProps) {
  return (
    <header className="relative border-b border-line bg-paper/60 pt-32 pb-16 md:pt-44 md:pb-24">
      {/* Subtle architectural hairline accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60" />
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-8"}>
          <p className="eyebrow animate-rise mb-6">{eyebrow}</p>
          <h1 className="display animate-rise text-ink">{title}</h1>
          {lede && (
            <div className="lede animate-rise mt-8 max-w-[42rem] text-[1.125rem] md:text-[1.2rem] text-body">
              {lede}
            </div>
          )}
          {actions && <div className="animate-rise mt-10 flex flex-wrap gap-4">{actions}</div>}
        </div>
        {aside && (
          <div className="animate-rise border-t border-navy/20 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-line lg:pl-10 lg:pt-0 self-center">
            {aside}
          </div>
        )}
      </div>
    </header>
  );
}

