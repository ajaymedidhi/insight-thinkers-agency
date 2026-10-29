import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  /** Optional right-hand column (summary, index, key facts). */
  aside?: ReactNode;
}

/** Interior page header: asymmetric, typographic, on ivory. */
export default function PageHero({ eyebrow, title, lede, actions, aside }: PageHeroProps) {
  return (
    <header className="border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <p className="eyebrow animate-rise-1 mb-6">{eyebrow}</p>
          <h1 className="display animate-rise-2">{title}</h1>
          {lede && <div className="lede animate-rise-3 mt-8 max-w-[38rem]">{lede}</div>}
          {actions && <div className="animate-rise-3 mt-10 flex flex-wrap gap-4">{actions}</div>}
        </div>
        {aside && <div className="animate-rise-3 self-end lg:col-span-4 lg:col-start-9">{aside}</div>}
      </div>
    </header>
  );
}
