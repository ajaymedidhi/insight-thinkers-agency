import { Icons } from "./Icons";

interface FooterProps {
  go: (id: string) => void;
}

const NAV_ITEMS = ["About", "Services", "Mandates", "Leadership", "Network", "Contact"];

export default function Footer({ go }: FooterProps) {
  return (
    <footer className="bg-ink py-[68px] pb-[30px] text-white">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[48px] mb-[52px]">
          {/* Logo & Description Column */}
          <div>
            <div className="flex items-center gap-[10px] mb-3.5">
              <div className="w-[33px] h-[33px] bg-white/8 rounded-[7px] flex items-center justify-center">
                <Icons.Logo className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-[0.91rem] text-white leading-none">Insight Thinkers</div>
                <div className="font-mono text-[0.55rem] tracking-[0.22em] uppercase text-slate-700 mt-[3px]">
                  Strategic Advisory
                </div>
              </div>
            </div>
            <p className="text-[0.81rem] text-slate-500 leading-[1.75] max-w-[275px] mb-[18px]">
              Institutional-grade M&A financial advisory, equity financing structuring, and AI-powered healthcare technology across India and Asia. Founded on the conviction that complex healthcare transactions deserve multi-disciplinary expertise.
            </p>
            <div className="flex flex-col gap-[7px]">
              {[
                "NDA-First Operating Protocol",
                "Founder-Led Every Mandate",
                "Chartered Accountants · Company Secretaries On-Staff",
                "Medical Doctors · Software Engineers In-House",
              ].map((a) => (
                <div key={a} className="flex items-center gap-[7px] text-[0.73rem] text-slate-500">
                  <span className="w-1 h-1 rounded-full bg-gold-brand shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h5 className="font-mono text-[0.59rem] tracking-[0.2em] uppercase text-slate-700 mb-4">
              Navigation
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li
                onClick={() => go("home")}
                className="text-[0.82rem] text-slate-500 cursor-pointer transition-colors duration-200 hover:text-slate-300"
              >
                Home
              </li>
              {NAV_ITEMS.map((n) => (
                <li
                  key={n}
                  onClick={() => go(n.toLowerCase())}
                  className="text-[0.82rem] text-slate-500 cursor-pointer transition-colors duration-200 hover:text-slate-300"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-mono text-[0.59rem] tracking-[0.2em] uppercase text-slate-700 mb-4">
              Services
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
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
                  className="text-[0.82rem] text-slate-500 cursor-pointer transition-colors duration-200 hover:text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-mono text-[0.59rem] tracking-[0.2em] uppercase text-slate-700 mb-4">
              Contact
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li className="text-[0.82rem] text-slate-500">info@insightthinkersagency.com</li>
              <li className="text-[0.82rem] text-slate-500">+91 95812 71590</li>
              <li className="text-[0.82rem] text-slate-500">South India · Pan-India · Asia</li>
              <li
                className="text-[0.82rem] text-blue-300/65 cursor-pointer transition-colors duration-200 hover:text-blue-300"
                onClick={() => go("contact")}
              >
                Begin a Confidential Dialogue →
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-none border-t border-white/6 mb-[22px]" />

        <div className="flex justify-between items-center flex-wrap gap-[11px]">
          <span className="text-[0.73rem] text-slate-500">
            © 2026 Insight Thinkers Agency. All rights reserved. All mandates subject to NDA.
          </span>
          <div className="flex gap-[7px]">
            <span className="font-mono text-[0.57rem] tracking-[0.14em] uppercase text-slate-700 bg-white/4 border border-white/6 px-2.5 py-1 rounded-[5px]">
              NDA-First
            </span>
            <span className="font-mono text-[0.57rem] tracking-[0.14em] uppercase text-slate-700 bg-white/4 border border-white/6 px-2.5 py-1 rounded-[5px]">
              SEBI-Compliant
            </span>
            <span className="font-mono text-[0.57rem] tracking-[0.14em] uppercase text-slate-700 bg-white/4 border border-white/6 px-2.5 py-1 rounded-[5px]">
              Strictly Confidential
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
