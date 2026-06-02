import { Link, useNavigate } from "react-router-dom";
import { Icons } from "../Icons";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Leadership", path: "/leadership" },
  { name: "Mandates", path: "/mandates" },
  { name: "Network", path: "/network" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#07152B] py-[80px] pb-[40px] text-white relative border-t border-white/[0.04]">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[60px] mb-[64px]">
          
          {/* Logo & Narrative Column */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3.5 mb-5 select-none no-underline">
              <Icons.Logo className="w-[48px] h-[48px] rounded-[4px] shadow-sm shrink-0" />
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-[0.94rem] text-white leading-[1.1]">Insight Thinkers</div>
                <div className="font-mono text-[0.54rem] tracking-[0.24em] uppercase text-slate-400 mt-0.5 font-semibold">
                  Advisory
                </div>
              </div>
            </Link>
            <p className="text-[0.84rem] text-slate-400 leading-[1.8] max-w-[290px] mb-6 font-light">
              Institutional-grade M&A financial advisory, equity financing structuring, and AI-powered healthcare technology across India and Asia. Founded on the conviction that complex healthcare transactions deserve multi-disciplinary expertise.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                "NDA-First Operating Protocol",
                "Founder-Led Every Mandate",
                "Chartered Accountants · Company Secretaries On-Staff",
                "Medical Doctors · Software Engineers In-House",
              ].map((a) => (
                <div key={a} className="flex items-center gap-2.5 text-[0.76rem] text-slate-500">
                  <span className="w-1.25 h-1.25 rounded-full bg-gold-brand shrink-0" />
                  <span className="font-light">{a}</span>
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
                "M&A Financial Advisory",
                "Equity Financing",
                "Corporate Governance",
                "Clinical Due Diligence",
                "HealthTech Advisory",
                "Co-Advisory",
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
              <li className="text-[0.84rem] text-slate-400 font-light">South India · Pan-India · Asia</li>
              <li>
                <button
                  className="text-[0.84rem] text-blue-light/75 cursor-pointer bg-transparent border-none p-0 transition-all duration-300 hover:text-blue-light font-medium text-left"
                  onClick={() => navigate("/contact")}
                >
                  Begin a Confidential Dialogue →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-none border-t border-white/[0.06] mb-6" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="text-[0.76rem] text-slate-500 font-light">
            © 2026 Insight Thinkers. All rights reserved. All mandates subject to NDA.
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
