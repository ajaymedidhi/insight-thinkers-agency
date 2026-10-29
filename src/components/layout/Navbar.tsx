import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";
import { COMPANY, NAV_ITEMS, PRIMARY_CTA } from "../../content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        isTransparent
          ? "on-navy border-b border-white/10 bg-transparent"
          : scrolled || open
          ? "border-b border-line bg-ivory/95 backdrop-blur-sm shadow-sm"
          : "border-b border-transparent bg-ivory"
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-[76px] items-center justify-between gap-6">
        <Logo tone={isTransparent ? "light" : "dark"} />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((n) => (
            <li key={n.path}>
              <NavLink
                to={n.path}
                className={({ isActive }) =>
                  `relative py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-bronze after:transition-transform after:duration-300 ${
                    isTransparent
                      ? isActive
                        ? "text-white after:scale-x-100"
                        : "text-on-navy after:scale-x-0 hover:text-white hover:after:scale-x-100"
                      : isActive
                      ? "text-ink after:scale-x-100"
                      : "text-body hover:text-ink hover:after:scale-x-100"
                  }`
                }
              >
                {n.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to={PRIMARY_CTA.path}
            className={`min-h-11 px-5 text-[0.875rem] ${isTransparent ? "btn-bronze" : "btn-primary"}`}
          >
            Discuss a Mandate
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-px w-6 transition-transform duration-300 ${isTransparent ? "bg-white" : "bg-ink"} ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 transition-transform duration-300 ${isTransparent ? "bg-white" : "bg-ink"} ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {open && (
          <div
            id="mobile-menu"
            className="animate-fade fixed inset-x-0 top-[76px] bottom-0 overflow-y-auto bg-ivory lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col justify-between pt-6 pb-10">
              <ul className="border-t border-line">
                {[...NAV_ITEMS, { name: "Contact", path: "/contact" }].map((n) => (
                  <li key={n.path} className="border-b border-line">
                    <NavLink
                      to={n.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 font-serif text-[1.75rem] ${isActive ? "text-bronze-ink" : "text-ink"}`
                      }
                    >
                      {n.name}
                      <span aria-hidden="true" className="text-[1rem] text-bronze">→</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to={PRIMARY_CTA.path} className="btn-primary w-full">
                  {PRIMARY_CTA.label}
                </Link>
                <p className="mt-6 text-[0.9375rem] text-body">
                  <a href={`mailto:${COMPANY.email}`} className="underline-offset-4 hover:underline">{COMPANY.email}</a>
                  <br />
                  <a href={`tel:${COMPANY.phoneHref}`} className="underline-offset-4 hover:underline">{COMPANY.phone}</a>
                </p>
              </div>
            </div>
          </div>
        )}
    </header>
  );
}
