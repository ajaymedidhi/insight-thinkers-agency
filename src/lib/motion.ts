import { useEffect, useRef, useState } from "react";

/** True when the visitor has asked the OS to minimise motion. */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Reports once when an element first scrolls into view. Falls back to
 * "visible" immediately when IntersectionObserver is unavailable or the
 * visitor prefers reduced motion, so content is never left hidden.
 */
export function useInView<T extends Element>(options: { rootMargin?: string; threshold?: number } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined" || prefersReducedMotion());
  const { rootMargin = "0px 0px -10% 0px", threshold = 0.15 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView] as const;
}
