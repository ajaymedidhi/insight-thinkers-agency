import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../Icons";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Leadership", path: "/leadership" },
  { name: "Mandates", path: "/mandates" },
  { name: "Network", path: "/network" },
  { name: "Insights", path: "/insights" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Valid email required");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#07152B] py-[80px] pb-[40px] text-white relative border-t border-white/[0.04]">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.4fr] gap-[40px] mb-[64px]">
          
          {/* Logo & Narrative Column */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3.5 mb-5 select-none no-underline">
              <Icons.Logo className="w-[48px] h-[48px] rounded-[4px] shadow-sm shrink-0" />
              <div className="flex items-center">
                <div className="font-semibold text-[0.94rem] text-white leading-[1.1]">Insight Thinkers Agency</div>
              </div>
            </Link>
            <p className="text-[0.84rem] text-slate-400 leading-[1.8] max-w-[290px] mb-6 font-light">
              Institutional-grade M&A advisory, equity financing, AI-powered healthcare technology, and digital marketing across India and Asia. Founded by Vasanth Sabavath, Hyderabad, Telangana.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              {[
                "NDA-First Operating Protocol",
                "Founder-Led Every Mandate — Zero Handoffs",
                "Medical Doctors · Software Engineers · Strategists In-House",
                "Forbes 30U30 Asia Semi-Finalist · Harvard Business School Online Alumnus",
                "Gandhi Fellowship · Amani Institute · Google–Udacity Scholar"
              ].map((a) => (
                <div key={a} className="flex items-center gap-2 text-[0.71rem] text-slate-500 font-light">
                  <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Navigation
            </h5>
            <ul className="list-none flex flex-col gap-3.5 pl-0">
              {NAV_ITEMS.map((n) => (
                <li key={n.name}>
                  <Link
                    to={n.path}
                    className="text-[0.84rem] text-slate-400 no-underline cursor-pointer transition-all duration-300 hover:text-blue-light hover:translate-x-1 font-light inline-block"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Services
            </h5>
            <ul className="list-none flex flex-col gap-3.5 pl-0">
              {[
                "M&A Advisory",
                "Equity Financing",
                "Healthcare Software Dev",
                "Healthcare Marketing",
                "Equipment Procurement",
                "Financial Audit",
                "DPR & Pitch Decks",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-[0.84rem] text-slate-400 no-underline cursor-pointer transition-all duration-300 hover:text-blue-light hover:translate-x-1 font-light inline-block"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Contact
            </h5>
            <ul className="list-none flex flex-col gap-3.5 pl-0">
              <li className="text-[0.84rem] text-slate-400 font-light">info@insightthinkers.com</li>
              <li className="text-[0.84rem] text-slate-400 font-light">+91 95812 71590</li>
              <li className="text-[0.84rem] text-slate-400 font-light font-mono text-[0.74rem]">NDA Enforced</li>
              <li>
                <button
                  className="text-[0.84rem] text-blue-light/75 cursor-pointer bg-transparent border-none p-0 transition-all duration-300 hover:text-blue-light font-medium text-left"
                  onClick={() => navigate("/contact")}
                >
                  Confidential Inquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Subscribe to Insights
            </h5>
            <p className="text-[0.84rem] text-slate-400 leading-[1.6] mb-4 font-light">
              Quarterly reports on healthcare valuations, transactions, and PE flows.
            </p>
            {subscribed ? (
              <div className="text-[0.84rem] text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/20 p-3.5 rounded-[6px] font-light">
                ✓ Registered for Quarterly Briefings.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="corporate@email.com"
                    className="flex-1 p-2.5 border border-white/10 rounded-[6px] bg-white/5 text-[0.84rem] text-white outline-none focus:border-blue-brand focus:ring-1 focus:ring-blue-brand/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-blue-brand hover:bg-blue-hover text-white px-4 rounded-[6px] text-[0.78rem] font-semibold uppercase tracking-[0.06em] border-none cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {error && <span className="text-[0.72rem] text-red-400 mt-1">{error}</span>}
              </form>
            )}
          </div>
        </div>

        <hr className="border-none border-t border-white/[0.06] mb-6" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="text-[0.76rem] text-slate-500 font-light">
            © 2025 Insight Thinkers Agency. All rights reserved. All mandates subject to NDA.
          </span>
          <div className="flex gap-2">
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-slate-500 bg-white/5 border border-white/[0.08] px-3 py-1.25 rounded-[5px] font-semibold select-none">
              NDA-First
            </span>
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-slate-500 bg-white/5 border border-white/[0.08] px-3 py-1.25 rounded-[5px] font-semibold select-none">
              SEBI-Compliant
            </span>
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase text-slate-500 bg-white/5 border border-white/[0.08] px-3 py-1.25 rounded-[5px] font-semibold select-none">
              Strictly Confidential
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
