import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Leadership", path: "/leadership" },
  { name: "Mandates", path: "/mandates" },
  { name: "Network", path: "/network" },
  { name: "Insights", path: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[300] transition-all duration-500 ${
          scrolled
            ? "bg-[#07152B]/90 backdrop-blur-xl py-4 border-b border-white/[0.05]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between wrap w-full">
          {/* Logo Mark & Text */}
          <Link to="/" className="flex items-center select-none no-underline group">
            <div className="font-display text-[1.4rem] md:text-[1.6rem] text-white tracking-wide font-medium leading-none group-hover:text-gold-brand transition-colors duration-500">
              Insight Thinkers
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((n) => (
              <NavLink
                key={n.name}
                to={n.path}
                className={({ isActive }) =>
                  `relative py-2 text-[0.75rem] font-medium tracking-[0.1em] uppercase cursor-pointer transition-colors duration-300 no-underline ${
                    isActive
                      ? "text-gold-brand"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{n.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-brand"
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              className="inline-flex items-center justify-center bg-transparent text-white border border-white/20 cursor-pointer px-6 py-2.5 rounded-[2px] text-[0.75rem] font-medium tracking-[0.1em] uppercase transition-all duration-500 hover:border-gold-brand hover:text-gold-brand"
              onClick={() => navigate("/contact")}
            >
              Confidential Inquiry
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className="flex md:hidden flex-col gap-1.5 cursor-pointer bg-none border-none p-2 z-[310]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45 bg-white" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[1px] bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                open ? "-translate-y-[7px] rotate-[-45deg] bg-white" : "bg-white"
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
              className="fixed inset-0 bg-[#07152B]/80 backdrop-blur-md z-[280] md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#07152B] border-l border-white/[0.05] text-white z-[290] shadow-sh3 flex flex-col justify-between p-10 pt-32 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((n) => (
                  <NavLink
                    key={n.name}
                    to={n.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block w-full text-left font-display text-[2rem] font-medium tracking-wide transition-colors duration-300 no-underline ${
                        isActive
                          ? "text-gold-brand"
                          : "text-slate-300 hover:text-white"
                      }`
                    }
                  >
                    {n.name}
                  </NavLink>
                ))}
              </div>

              <div className="pb-8">
                <button
                  className="w-full py-4 bg-white/5 text-white border border-white/20 cursor-pointer text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:bg-white/10 hover:border-gold-brand hover:text-gold-brand transition-all duration-300"
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                >
                  Confidential Inquiry
                </button>
                <div className="font-mono text-[0.6rem] tracking-[0.2em] text-slate-500 text-center mt-6 uppercase">
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
