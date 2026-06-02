import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Icons } from "../Icons";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Leadership", path: "/leadership" },
  { name: "Mandates", path: "/mandates" },
  { name: "Network", path: "/network" },
  { name: "Contact", path: "/contact" },
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
        className={`fixed top-0 left-0 right-0 z-[300] border-b border-border-brand/80 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FAFC]/90 backdrop-blur-[20px] py-2 shadow-sh1"
            : "bg-transparent py-3"
        }`}
      >
        <div className="flex items-center justify-between wrap w-full">
          {/* Logo Mark & Text */}
          <Link to="/" className="flex items-center gap-3.5 select-none no-underline">
            <Icons.Logo className="w-[46px] h-[46px] rounded-[4px] shadow-sm shrink-0" />
            <div className="flex flex-col justify-center">
              <div className="font-semibold text-[0.98rem] text-[#0F172A] tracking-[-0.015em] leading-[1.1]">
                Insight Thinkers
              </div>
              <div className="font-mono text-[0.58rem] tracking-[0.24em] uppercase text-blue-brand font-semibold mt-0.5">
                Advisory
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((n) => (
              <NavLink
                key={n.name}
                to={n.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[0.78rem] font-semibold tracking-[0.06em] uppercase cursor-pointer rounded-[6px] transition-all duration-300 no-underline ${
                    isActive
                      ? "text-blue-brand"
                      : "text-muted-brand hover:text-[#0F172A] hover:bg-slate-light/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{n.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-brand rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
              className="inline-flex items-center gap-[8px] bg-ink hover:bg-blue-brand text-white border-none cursor-pointer px-[22px] py-[11px] rounded-[6px] text-[0.78rem] font-semibold tracking-[0.06em] uppercase transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(7,21,43,0.15)]"
              onClick={() => navigate("/contact")}
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
                {NAV_ITEMS.map((n) => (
                  <NavLink
                    key={n.name}
                    to={n.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block w-full text-left px-5 py-4 text-[1.1rem] font-medium tracking-[0.04em] rounded-[8px] transition-all duration-300 no-underline ${
                        isActive
                          ? "bg-blue-brand/10 text-blue-light border-l-[3px] border-l-blue-brand"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {n.name}
                  </NavLink>
                ))}
              </div>

              <div>
                <button
                  className="w-full py-4 bg-blue-brand text-white border-none cursor-pointer rounded-[8px] text-[0.88rem] font-semibold tracking-[0.06em] uppercase hover:bg-blue-hover shadow-sh2"
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
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
