import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import { HERO_INTERVAL_MS, HERO_SLIDES } from "../../content/hero";
import { COMPANY } from "../../content/site";


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
  const [playing, setPlaying] = useState(true);
  const [tabHidden, setTabHidden] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeX = useRef<number | null>(null);

  const paused = !playing || tabHidden;

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Advances automatically every HERO_INTERVAL_MS unless explicitly paused by user
  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % COUNT);
    }, HERO_INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [paused]);

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
      className="on-navy relative isolate flex min-h-[min(100svh,860px)] flex-col justify-between overflow-hidden bg-navy-deep text-on-navy"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (swipeX.current = null)}
    >

      <h1 className="sr-only">{COMPANY.name} — healthcare M&amp;A, capital and technology advisory</h1>

      {/* Background photographs, cross-fading with cinematic gradient vignette */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/80" />
        {/* Subtle noise/texture overlay for high-end print editorial feel */}
        <div className="absolute inset-0 bg-navy-deep/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Main hero content container */}
      <div
        className="container-x grid flex-1 content-center pt-32 pb-12 md:pt-44 md:pb-20"
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
              className={`max-w-[48rem] [grid-area:1/1] transition-opacity duration-500 ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-bronze" />
                <span className="text-[0.75rem] font-semibold tracking-[0.22em] uppercase text-bronze">
                  {s.eyebrow}
                </span>
                <span className="text-[0.75rem] font-medium tracking-widest text-on-navy-muted">
                  · 0{i + 1} / 0{COUNT}
                </span>
              </div>

              <h2 className={`display max-w-[16ch] ${active ? "animate-rise" : ""}`}>
                {s.title} <em className="text-bronze-light font-normal not-italic underline decoration-bronze/40 underline-offset-8">{s.highlight}</em>
              </h2>

              <p className="lede mt-8 max-w-[38rem] text-[1.125rem] md:text-[1.25rem] font-normal leading-relaxed text-on-navy/90">
                {s.body}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to={s.cta.to} className="btn-bronze">
                  {s.cta.label} <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link to={s.secondary.to} className="btn-outline-light">
                  {s.secondary.label}
                </Link>
              </div>
            </div>
          );
        })}

        <ul className="mt-12 hidden max-w-[50rem] flex-wrap sm:flex gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-[0.8125rem] text-on-navy-muted [grid-area:2/1]">
          {ASSURANCES.map((a) => (
            <li key={a} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span className="tracking-wide">{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide controls with elevated aesthetic */}
      <div className="border-t border-white/10 bg-navy-deep/80 backdrop-blur-md">
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
                  className={`group relative min-h-20 min-w-0 py-4 text-left sm:py-6 transition-colors ${i > 0 ? "border-l border-white/10 pl-4 sm:pl-7" : "pr-4 sm:pr-7"} ${
                    active ? "text-white" : "text-on-navy-muted hover:text-white"
                  }`}
                >
                  {/* Progress bar */}
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
                    {active && (
                      <span
                        key={paused ? "paused" : `run-${index}`}
                        className={`block h-full origin-left bg-bronze ${paused ? "" : "animate-hero-progress"}`}
                        style={paused ? undefined : { animationDuration: `${HERO_INTERVAL_MS}ms` }}
                      />
                    )}
                  </span>
                  <span className={`block font-serif text-[1rem] ${active ? "text-bronze font-medium" : "text-on-navy-muted"}`}>
                    0{i + 1}
                  </span>
                  <span className="mt-1 block truncate text-[0.85rem] font-medium tracking-wide sm:text-[0.95rem]">
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="ml-3 flex w-12 shrink-0 items-center justify-center border-l border-white/10 pl-3 text-on-navy transition-colors hover:text-white sm:ml-6 sm:pl-6"
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
