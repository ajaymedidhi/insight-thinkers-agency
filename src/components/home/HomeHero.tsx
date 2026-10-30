import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { HERO_INTERVAL_MS, HERO_SLIDES } from "../../content/hero";
import { COMPANY } from "../../content/site";
import { prefersReducedMotion } from "../../lib/motion";

const COUNT = HERO_SLIDES.length;
const ASSURANCES = ["Founder-led on every mandate", "Mutual NDA before sensitive information", COMPANY.coverage];

/**
 * Homepage hero carousel (WAI-ARIA tabbed carousel pattern).
 * - Auto-advances, but pauses on hover, on keyboard focus, when the tab is
 *   hidden, and via a visible pause button; never autoplays for visitors who
 *   prefer reduced motion.
 * - Hidden slides are `inert`, so only the visible slide is read or focused.
 * - Arrow keys move between slide tabs; touch users can swipe.
 */
export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeX = useRef<number | null>(null);

  const paused = !playing || hovered || focused || tabHidden;

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Restarts on every slide change, so manual navigation resets the timer.
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % COUNT), HERO_INTERVAL_MS);
    return () => window.clearTimeout(t);
  }, [paused, index]);

  const go = (i: number, moveFocus = false) => {
    const next = (i + COUNT) % COUNT;
    setIndex(next);
    if (moveFocus) tabRefs.current[next]?.focus();
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: COUNT - 1 };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key], true);
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType === "touch") swipeX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (swipeX.current === null) return;
    const dx = e.clientX - swipeX.current;
    swipeX.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our advisory practices"
      className="on-navy relative isolate flex min-h-[min(100svh,820px)] flex-col overflow-hidden bg-navy-deep text-on-navy"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (swipeX.current = null)}
    >
      <h1 className="sr-only">{COMPANY.name} — healthcare M&amp;A, capital and technology advisory</h1>

      {/* Background photographs, cross-fading. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.id}
            src={s.image.src}
            alt=""
            width={s.image.width}
            height={s.image.height}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              i === index ? "animate-settle opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition: s.image.position }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/70" />
      </div>

      {/* Slides share one grid cell, so the hero never changes height between them. */}
      <div
        className="container-x grid flex-1 content-center pt-28 pb-10 md:pt-36 md:pb-14"
        aria-live={paused ? "polite" : "off"}
      >
        {HERO_SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              id={`hero-slide-${s.id}`}
              role="tabpanel"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${COUNT}: ${s.label}`}
              inert={!active}
              className={`max-w-[44rem] [grid-area:1/1] transition-opacity duration-500 ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <p className={`eyebrow mb-7 ${active ? "animate-rise-1" : ""}`}>{s.eyebrow}</p>
              <h2 className={`display max-w-[15ch] ${active ? "animate-rise-2" : ""}`}>
                {s.title} <em className="text-bronze-light">{s.highlight}</em>
              </h2>
              <p className={`lede mt-7 max-w-[34rem] ${active ? "animate-rise-3" : ""}`}>{s.body}</p>
              <div className={`mt-9 flex flex-col gap-4 sm:flex-row ${active ? "animate-rise-4" : ""}`}>
                <Link to={s.cta.to} className="btn-bronze">
                  {s.cta.label} <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link to={s.secondary.to} className="btn-outline-light">{s.secondary.label}</Link>
              </div>
            </div>
          );
        })}
        <ul className="mt-10 hidden max-w-[44rem] flex-wrap sm:flex gap-x-6 gap-y-2 border-t border-white/12 pt-5 text-[0.8125rem] text-on-navy-muted [grid-area:2/1]">
          {ASSURANCES.map((a) => (
            <li key={a} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-bronze" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Slide controls */}
      <div className="border-t border-white/12 bg-navy-deep/70 backdrop-blur-sm">
        <div className="container-x flex items-stretch">
          <div role="tablist" aria-label="Choose a slide" className="grid flex-1 grid-cols-3">
            {HERO_SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`hero-tab-${s.id}`}
                  aria-selected={active}
                  aria-controls={`hero-slide-${s.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => go(i)}
                  onKeyDown={onTabKey}
                  className={`group relative min-h-16 min-w-0 py-3 text-left sm:py-5 transition-colors ${i > 0 ? "border-l border-white/12 pl-3 sm:pl-5" : "pr-3 sm:pr-5"} ${
                    active ? "text-white" : "text-on-navy-muted hover:text-white"
                  }`}
                >
                  {/* Progress: full bar when paused, timed fill while playing. */}
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
                    {active && (
                      <span
                        key={paused ? "paused" : `run-${index}`}
                        className={`block h-full origin-left bg-bronze ${paused ? "" : "animate-hero-progress"}`}
                        style={paused ? undefined : { animationDuration: `${HERO_INTERVAL_MS}ms` }}
                      />
                    )}
                  </span>
                  <span className={`block font-serif text-[0.9rem] sm:inline sm:text-[0.95rem] ${active ? "text-bronze" : ""}`}>0{i + 1}</span>
                  <span className="mt-0.5 block truncate text-[0.8125rem] font-medium sm:ml-3 sm:mt-0 sm:inline sm:text-[0.9375rem]">{s.label}</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="ml-2 flex w-11 shrink-0 items-center justify-center border-l border-white/12 pl-2 text-on-navy transition-colors hover:text-white sm:ml-4 sm:pl-4"
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
                <rect x="2" y="1" width="3.5" height="12" />
                <rect x="8.5" y="1" width="3.5" height="12" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
                <path d="M3 1.5v11l9.5-5.5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
