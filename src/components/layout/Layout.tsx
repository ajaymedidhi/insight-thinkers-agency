import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Ticker from "../Ticker";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-white text-ink font-sans selection:bg-blue-brand/20 selection:text-ink">
      <ScrollToTop />
      <Navbar />
      <Ticker />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
