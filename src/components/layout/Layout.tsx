import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Ticker from "../Ticker";
import ScrollToTop from "./ScrollToTop";
import ExitIntentModal from "../shared/ExitIntentModal";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white text-ink font-sans selection:bg-blue-brand/20 selection:text-ink">
      <ScrollToTop />
      <ExitIntentModal />
      <Navbar />
      <Ticker />
      <main>
        <Outlet />
      </main>
      
      {/* Sticky floating consultation CTA */}
      <div className="fixed bottom-6 right-6 z-[250]">
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-brand hover:bg-blue-hover text-white font-semibold tracking-[0.06em] uppercase text-[0.74rem] px-5 py-3.5 rounded-full shadow-sh3 hover:-translate-y-[2px] transition-all border-none cursor-pointer flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse-slow" />
          Schedule Consultation
        </button>
      </div>

      <Footer />
    </div>
  );
}
