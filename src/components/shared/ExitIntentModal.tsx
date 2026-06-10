import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user has already seen exit intent or is subscribed
    const seen = localStorage.getItem("exit-intent-seen");
    if (seen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor leaves the top boundary of document
      if (e.clientY < 20) {
        setShow(true);
        localStorage.setItem("exit-intent-seen", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Valid email required");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 bg-[#07152B]/40 backdrop-blur-sm z-[450]"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed top-[20%] left-[5%] right-[5%] md:left-1/2 md:right-auto md:w-[460px] md:-ml-[230px] bg-white rounded-[20px] p-8 shadow-sh3 z-[460] border border-border-brand/80"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-ink font-mono text-[0.8rem] bg-transparent border-none cursor-pointer"
            >
              ✕ Close
            </button>

            {subscribed ? (
              <div className="text-center py-8 animate-fade-in">
                <span className="text-[2.5rem] mb-3 block">📩</span>
                <h3 className="font-display text-[1.4rem] font-semibold text-ink mb-2">
                  Subscription Verified
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-relaxed font-light">
                  You are registered for quarterly transaction reports.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[0.58rem] tracking-[0.14em] text-blue-brand uppercase font-semibold">
                    Advisory Updates
                  </span>
                  <h3 className="font-display text-[1.35rem] font-semibold text-ink mt-1">
                    Quarterly Valuation Briefings
                  </h3>
                  <p className="text-[0.82rem] text-muted-brand leading-relaxed mt-2 font-light">
                    Subscribe to receive strategic healthcare transaction benchmarks and market multiples reports directly in your inbox.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-slate-500 font-semibold">
                    Corporate Email Address
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="corporate@email.com"
                      className={`flex-1 p-3 border rounded-[8px] font-sans text-[0.88rem] outline-none ${
                        error ? "border-red-500" : "border-border-brand focus:border-blue-brand"
                      }`}
                    />
                    <button
                      type="submit"
                      className="bg-blue-brand hover:bg-blue-hover text-white px-5 rounded-[8px] font-mono text-[0.76rem] font-semibold uppercase tracking-[0.06em] border-none cursor-pointer transition-colors"
                    >
                      Join
                    </button>
                  </div>
                  {error && <span className="text-[0.72rem] text-red-500">{error}</span>}
                </div>

                <div className="text-[0.65rem] text-slate-400 text-center leading-snug mt-1 font-light">
                  🔒 We protect email privacy. Zero marketing spam.
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
