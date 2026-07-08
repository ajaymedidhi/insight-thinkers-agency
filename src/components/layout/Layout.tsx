import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ExitIntentModal from "../shared/ExitIntentModal";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#07152B] text-white font-sans selection:bg-gold-brand/20 selection:text-white">
      <ScrollToTop />
      <ExitIntentModal />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
