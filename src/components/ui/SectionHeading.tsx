import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  /** Places intro text beside the title on large screens. */
  split?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, intro, id, split, className = "" }: SectionHeadingProps) {
  if (split) {
    return (
      <div className={`grid gap-6 lg:grid-cols-12 lg:gap-12 ${className}`}>
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 id={id} className="h2">{title}</h2>
        </div>
        {intro && <div className="lede self-end lg:col-span-5 lg:col-start-8">{intro}</div>}
      </div>
    );
  }
  return (
    <div className={`max-w-[46rem] ${className}`}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 id={id} className="h2">{title}</h2>
      {intro && <div className="lede mt-6">{intro}</div>}
    </div>
  );
}
