import { useEffect, useRef, useState } from "react";
import NewsletterForm from "./NewsletterForm";

const STORAGE_KEY = "exit-intent-seen";

function hasSeen() {
  try {
    return !!localStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

/** One-time, desktop-only prompt when the pointer leaves the top of the window. */
export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasSeen()) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY < 20) {
        setShow(true);
        try {
          localStorage.setItem(STORAGE_KEY, "true");
        } catch {
          /* storage unavailable — prompt simply may show again */
        }
        document.removeEventListener("mouseleave", onLeave);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, []);

  useEffect(() => {
    if (!show) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show]);

  if (!show) return null;

  return (
    <div className="animate-fade fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy-deep/50" onClick={() => setShow(false)} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        className="animate-dialog relative w-full max-w-[30rem] bg-paper p-8 shadow-[0_24px_60px_rgba(15,31,43,0.25)] sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center text-[1.25rem] text-muted hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
        <p className="eyebrow mb-4">Before you go</p>
        <h2 id="exit-title" className="h3">Healthcare advisory notes, occasionally.</h2>
        <p className="mt-3 mb-6 text-[0.9375rem] leading-relaxed">
          Perspectives on healthcare transactions, valuation and capital — sent when we publish.
        </p>
        <NewsletterForm onDone={() => window.setTimeout(() => setShow(false), 1800)} />
      </div>
    </div>
  );
}
