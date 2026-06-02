import { useState, useEffect } from "react";
import { Icons } from "./Icons";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-[300] bg-white/96 backdrop-blur-[18px] border-b border-border-brand transition-shadow duration-200 ${
        scrolled ? "shadow-sh1" : ""
      }`}
    >
      <div className="flex items-center justify-between h-[68px] px-5 sm:px-8 md:px-[48px]">
        <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => go("home")}>
          <div className="w-[38px] height-[38px] h-[38px] bg-ink rounded-[7px] flex items-center justify-center text-white">
            <Icons.Logo className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold text-[0.93rem] text-ink tracking-[-0.01em] leading-[1.1]">
              Insight Thinkers
            </div>
            <div className="font-mono text-[0.55rem] tracking-[0.22em] uppercase text-blue-brand">
              Strategic Advisory
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[2px]">
          {NAV_ITEMS.map((n) => (
            <span
              key={n}
              className={`px-[13px] py-[7px] text-[0.77rem] font-medium tracking-[0.05em] uppercase cursor-pointer rounded-[5px] border-b-2 border-transparent transition-all duration-200 ${
                active === n.toLowerCase()
                  ? "text-blue-brand border-b-blue-brand"
                  : "text-muted-brand hover:text-ink hover:bg-slate-brand"
              }`}
              onClick={() => go(n.toLowerCase())}
            >
              {n}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="hidden md:flex items-center gap-[7px] bg-ink hover:bg-ink2 text-white border-none cursor-pointer px-5 py-[10px] rounded-[7px] text-[0.77rem] font-medium tracking-[0.05em] uppercase transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(10,22,40,0.22)]"
          onClick={() => go("contact")}
        >
          Confidential Inquiry
        </button>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-[6px] group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-ink rounded-[1px] transition-all duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-ink rounded-[1px] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-ink rounded-[1px] transition-all duration-300 ${
              open ? "-translate-y-[6.5px] rotate-[-45deg]" : ""
            }`}
          />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-[290] bg-white border-b border-border-brand shadow-sh2 px-7 py-5 pb-7 transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-[110%]"
        }`}
      >
        {NAV_ITEMS.map((n) => (
          <div
            key={n}
            className={`block px-4 py-3 text-[0.9rem] font-medium rounded-[7px] cursor-pointer transition-all duration-200 ${
              active === n.toLowerCase()
                ? "bg-slate-brand text-blue-brand"
                : "text-ink hover:bg-slate-brand"
            }`}
            onClick={() => handleClick(n.toLowerCase())}
          >
            {n}
          </div>
        ))}
        <button
          className="w-full mt-[14px] py-[14px] bg-ink text-white border-none cursor-pointer rounded-[8px] text-[0.86rem] font-semibold tracking-[0.06em] uppercase hover:bg-ink2"
          onClick={() => handleClick("contact")}
        >
          Confidential Inquiry
        </button>
      </div>
    </nav>
  );
}
