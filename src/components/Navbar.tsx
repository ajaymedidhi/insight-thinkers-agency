import { useState, useEffect } from "react";
import { Icons } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  active: string;
  go: (id: string) => void;
}

const NAV_ITEMS = ["About", "Services", "Mandates", "Leadership", "Network", "Contact"];

export default function Navbar({ active, go }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    go(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[300] border-b border-border-brand/80 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FAFC]/90 backdrop-blur-[20px] py-4 shadow-sh1"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between wrap w-full">
          {/* Logo Mark & Text */}
          <div className="flex items-center gap-3.5 cursor-pointer select-none group" onClick={() => go("home")}>
            <div className="w-[42px] h-[42px] bg-ink rounded-[8px] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-brand group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)]">
              <Icons.Logo className="w-[22px] h-[22px]" />
            </div>
            <div>
              <div className="font-semibold text-[0.98rem] text-[#0F172A] tracking-[-0.015em] leading-[1.1] transition-colors duration-300 group-hover:text-blue-brand">
                Insight Thinkers
              </div>
              <div className="font-mono text-[0.58rem] tracking-[0.24em] uppercase text-blue-brand font-semibold">
                Strategic Advisory
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((n) => {
              const lowerName = n.toLowerCase();
              const isCurrent = active === lowerName;
              return (
                <button
                  key={n}
                  className={`relative px-4 py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase cursor-pointer rounded-[6px] transition-all duration-300 ${
                    isCurrent
                      ? "text-blue-brand"
                      : "text-muted-brand hover:text-[#0F172A] hover:bg-slate-light/60"
                  }`}
                  onClick={() => go(lowerName)}
                >
                  <span className="relative z-10">{n}</span>
                  {isCurrent && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-brand rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              className="inline-flex items-center gap-[8px] bg-ink hover:bg-blue-brand text-white border-none cursor-pointer px-[22px] py-[11px] rounded-[6px] text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(7,21,43,0.15)]"
              onClick={() => go("contact")}
            >
              Confidential Inquiry
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-[8px] group z-[310]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-[24px] h-[1.5px] bg-[#0F172A] rounded-[1px] transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45 bg-white" : ""
              }`}
            />
            <span
              className={`block w-[24px] h-[1.5px] bg-[#0F172A] rounded-[1px] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[24px] h-[1.5px] bg-[#0F172A] rounded-[1px] transition-all duration-300 ${
                open ? "-translate-y-[6.5px] rotate-[-45deg] bg-white" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Slide-over Mobile Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-[#07152B]/40 backdrop-blur-sm z-[280] md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[360px] bg-[#07152B] text-white z-[290] shadow-sh3 flex flex-col justify-between p-8 pt-28 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((n) => {
                  const lowerName = n.toLowerCase();
                  const isCurrent = active === lowerName;
                  return (
                    <button
                      key={n}
                      className={`block w-full text-left px-5 py-4 text-[1.1rem] font-medium tracking-[0.04em] rounded-[8px] transition-all duration-300 ${
                        isCurrent
                          ? "bg-blue-brand/10 text-blue-light border-l-[3px] border-l-blue-brand"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={() => handleClick(lowerName)}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>

              <div>
                <button
                  className="w-full py-4 bg-blue-brand text-white border-none cursor-pointer rounded-[8px] text-[0.88rem] font-semibold tracking-[0.06em] uppercase hover:bg-blue-hover shadow-sh2"
                  onClick={() => handleClick("contact")}
                >
                  Confidential Inquiry
                </button>
                <div className="text-[0.68rem] text-slate-500 text-center mt-4">
                  NDA Protection Protocol Active
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
