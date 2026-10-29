import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "../../lib/motion";

interface CountUpProps {
  /** Final display value, e.g. "₹120" or "50". Non-numeric prefixes are kept. */
  value: string;
  /** Only animate figures that are verified; otherwise render the final value. */
  animate?: boolean;
  duration?: number;
}

/**
 * Counts the numeric part of a figure up to its final value the first time
 * it is seen. Screen readers always receive the final value, the element
 * reserves the final width (no layout shift), and reduced-motion visitors
 * see the final value immediately.
 */
export default function CountUp({ value, animate = true, duration = 1400 }: CountUpProps) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : NaN;
  const canAnimate = animate && Number.isFinite(target) && target > 1;

  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const [current, setCurrent] = useState<number | null>(() => (canAnimate && !prefersReducedMotion() ? 0 : null));

  useEffect(() => {
    if (current !== 0 || !inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      if (t < 1) {
        setCurrent(Math.round(eased * target));
        frame = requestAnimationFrame(tick);
      } else {
        setCurrent(null); // render the exact original string at rest
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // Runs once per reveal; `current` changes are driven by the animation itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  if (!match || current === null) return <span ref={ref}>{value}</span>;

  const shown = `${match[1]}${current.toLocaleString("en-IN")}${match[3]}`;
  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="invisible" aria-hidden="true">{value}</span>
      <span className="absolute inset-0" aria-hidden="true">{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
