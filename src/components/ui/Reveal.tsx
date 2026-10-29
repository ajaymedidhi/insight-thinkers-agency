import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger offset in milliseconds. */
  delay?: number;
  id?: string;
}

/**
 * Fades and lifts its content in once it scrolls into view. Uses only
 * opacity and transform, so it never shifts layout; the content is in the
 * DOM (and readable by assistive technology) from the first render.
 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, id }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      data-shown={inView || undefined}
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
