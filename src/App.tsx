import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Mandates from "./components/Mandates";
import Leadership from "./components/Leadership";
import Network from "./components/Network";
import Differentiators from "./components/Differentiators";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("home");

  const go = useCallback((id: string) => {
    setActive(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "services", "mandates", "leadership", "network", "contact"];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        }),
      { threshold: 0.2, rootMargin: "-80px 0px -20% 0px" } // Offsets to trigger change when heading is visible
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-ink font-sans selection:bg-blue-brand/20 selection:text-ink">
      <Navbar active={active} go={go} />
      <Ticker />
      <Hero go={go} />
      <About />
      <Services go={go} />
      <Mandates go={go} />
      <Leadership />
      <Network go={go} />
      <Differentiators />
      <Contact />
      <Footer go={go} />
    </div>
  );
}
