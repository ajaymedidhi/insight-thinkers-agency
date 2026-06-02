import { Icons } from "./Icons";

interface FooterProps {
  go: (id: string) => void;
}

const NAV_ITEMS = ["About", "Services", "Mandates", "Leadership", "Network", "Contact"];

export default function Footer({ go }: FooterProps) {
  return (
    <footer className="bg-[#07152B] py-[80px] pb-[40px] text-white relative border-t border-white/[0.04]">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[60px] mb-[64px]">
          
          {/* Logo & Narrative Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5 cursor-pointer group" onClick={() => go("home")}>
              <div className="w-[36px] h-[36px] bg-white/8 rounded-[7px] flex items-center justify-center transition-all duration-300 group-hover:bg-blue-brand">
                <Icons.Logo className="w-[18px] h-[18px] text-white" />
              </div>
              <div>
                <div className="font-semibold text-[0.94rem] text-white leading-none">Insight Thinkers</div>
                <div className="font-mono text-[0.54rem] tracking-[0.24em] uppercase text-slate-500 mt-[4px] font-semibold">
                  Strategic Advisory
                </div>
              </div>
            </div>
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
            <ul className="list-none flex flex-col gap-3.5">
              <li
                onClick={() => go("home")}
                className="text-[0.84rem] text-slate-400 cursor-pointer transition-all duration-300 hover:text-blue-light hover:translate-x-1 font-light"
              >
                Home
              </li>
              {NAV_ITEMS.map((n) => (
                <li
                  key={n}
                  onClick={() => go(n.toLowerCase())}
                  className="text-[0.84rem] text-slate-400 cursor-pointer transition-all duration-300 hover:text-blue-light hover:translate-x-1 font-light"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Services
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {[
                "M&A Financial Advisory",
                "Equity Financing",
                "Corporate Governance",
                "Clinical Due Diligence",
                "HealthTech Advisory",
                "Co-Advisory",
              ].map((s) => (
                <li
                  key={s}
                  className="text-[0.84rem] text-slate-400 cursor-pointer transition-all duration-300 hover:text-blue-light hover:translate-x-1 font-light"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.24em] uppercase text-slate-500 mb-5 font-semibold">
              Contact
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              <li className="text-[0.84rem] text-slate-400 font-light">info@insightthinkersagency.com</li>
              <li className="text-[0.84rem] text-slate-400 font-light">+91 95812 71590</li>
              <li className="text-[0.84rem] text-slate-400 font-light">South India · Pan-India · Asia</li>
              <li
                className="text-[0.84rem] text-blue-light/75 cursor-pointer transition-all duration-300 hover:text-blue-light font-medium"
                onClick={() => go("contact")}
              >
                Begin a Confidential Dialogue →
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-none border-t border-white/[0.06] mb-6" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="text-[0.76rem] text-slate-500 font-light">
            © 2026 Insight Thinkers Agency. All rights reserved. All mandates subject to NDA.
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
