import { Icons } from "./Icons";

const PILLARS = [
  {
    n: "01",
    Icon: Icons.Finance,
    title: "Capital Markets Precision",
    body: "Every mandate is structured to institutional standards — SPAs, SHAs, MOUs, term sheets — with CA and CS oversight at every stage. We don't just identify deals; we architect them to close.",
  },
  {
    n: "02",
    Icon: Icons.Medical,
    title: "Healthcare Sector Intelligence",
    body: "Qualified medical professionals on staff conduct clinical due diligence, assess hospital operations, evaluate patient flows, and audit regulatory compliance. Intelligence no generalist firm can replicate.",
  },
  {
    n: "03",
    Icon: Icons.AI,
    title: "Proprietary Technology Layer",
    body: "We've built HMS, PACS, EMR, and enterprise health software from the ground up. We evaluate healthcare technology as engineers — providing buyers with credible, conflict-free technical assessments.",
  },
];

const TIMELINE = [
  {
    yr: "Founded",
    h: "Insight Thinkers Agency Established",
    p: "Founded by Vasanth S with a singular thesis: healthcare M&A requires simultaneous mastery of capital markets, clinical operations, and enterprise technology — not just financial modelling.",
  },
  {
    yr: "Year 1–2",
    h: "First Mandates Closed",
    p: "Completed first institutional M&A transactions in South India hospital sector. Personally led and closed — establishing a track record with institutional counterparties and PE fund managers.",
  },
  {
    yr: "Year 2–3",
    h: "AI HealthTech Division Launched",
    p: "Launched proprietary AI product line: HMS, PACS, and EMR platforms deployed across 50+ hospitals and diagnostic centres. Products are actively operated — not theoretical.",
  },
  {
    yr: "Year 3–4",
    h: "Pan-Asia PE Network Built",
    p: "Expanded institutional relationships to cover healthcare PE funds across South Asia and Southeast Asia. Active co-advisory mandates established with major fund managers.",
  },
  {
    yr: "Present",
    h: "Live Mandates — Active Advisory",
    p: "Currently managing exclusive advisory mandates on operational hospital assets with aggregate monthly revenues exceeding ₹8 Crores. All mandates are live, not archival.",
  },
];

const VALUES = [
  {
    ico: "⚖️",
    t: "Institutional Rigour",
    b: "Every deliverable — financial model, legal document, clinical report — is prepared to standards that institutional counterparties expect and demand.",
  },
  {
    ico: "🔒",
    t: "Absolute Confidentiality",
    b: "NDA-first engagement is not a protocol — it is a philosophy. No mandate is discussed without mutual legal protection in place.",
  },
  {
    ico: "🎯",
    t: "Completion Over Commission",
    b: "We accept only mandates we are confident we can close. Breadth of pipeline is never prioritised over depth of execution.",
  },
  {
    ico: "🔬",
    t: "Evidence-Based Advisory",
    b: "Every recommendation is grounded in verified financial data, operational metrics, and clinical assessments — not market opinion.",
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-white border-t border-border-brand">
      <div className="wrap">
        {/* Intro */}
        <div className="max-w-[740px] mx-auto text-center pb-16 md:pb-[68px]">
          <div className="eyebrow justify-center">About Our Firm</div>
          <h2 className="display-sm">
            A Multi-Disciplinary Firm for a <em>Complex Sector.</em>
          </h2>
          <p className="body-lg mt-5">
            Insight Thinkers operates at the convergence of <strong>corporate finance</strong>, <strong>clinical medicine</strong>, and <strong>health technology</strong>. We do not outsource sector expertise because we believe healthcare transactions require specialized knowledge at every stage.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border-brand rounded-[16px] overflow-hidden mb-16 md:mb-[76px] shadow-sm">
          {PILLARS.map((p) => {
            const IconComp = p.Icon;
            return (
              <div
                key={p.n}
                className="group bg-white p-8 md:p-[38px_32px] relative transition-colors duration-200 hover:bg-slate-brand"
              >
                {/* top animated highlight line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-brand scale-x-0 origin-left transition-transform duration-[380ms] ease-out group-hover:scale-x-100" />
                <div className="font-display text-[3.2rem] font-bold text-blue-brand/7 leading-none mb-[18px]">
                  {p.n}
                </div>
                <div className="w-[46px] h-[46px] rounded-[10px] bg-slate-light flex items-center justify-center text-blue-brand mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[1.18rem] font-semibold text-ink mb-[9px] group-hover:text-blue-brand transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-[0.84rem] text-muted-brand leading-[1.74]">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[76px] items-start py-16 md:py-[68px] border-t border-border-brand">
          <div>
            <div className="eyebrow">Our Story</div>
            <h3 className="display-sm">
              Re-Architecting M&A for a <em>Specialised Sector.</em>
            </h3>
            <p className="body-lg mt-5">
              Insight Thinkers was founded on a simple observation: <strong>traditional financial advisory firms are structured to be generalists.</strong> They rely on third-party databases, outsource clinical due diligence, and treat healthcare technology as a checklist item.
            </p>
            <div className="border-l-3 border-l-gold-brand pl-5 py-3.5 my-[26px] bg-[linear-gradient(90deg,rgba(201,168,76,0.04),transparent)]">
              <p className="font-display italic text-[1.1rem] leading-[1.7] text-ink">
                "Healthcare assets cannot be valued on spreadsheets alone. Clinical quality, technology integration, and operational flow determine transaction outcome — not just EBITDA multiples."
              </p>
              <cite className="block mt-[7px] font-mono text-[0.6rem] tracking-[0.14em] uppercase text-muted-light not-italic">
                Vasanth S, Founder
              </cite>
            </div>
            <p className="body-md mt-4">
              We built a firm that integrates these disciplines under one roof. Our team includes professionals with Chartered Accountancy expertise who understand transaction structuring, corporate secretaries who handle governance, medical advisors who audit clinical operations, and healthtech engineers who evaluate systems.
            </p>
          </div>

          <div>
            <div className="eyebrow">Our Milestones</div>
            <div className="flex flex-col gap-0">
              {TIMELINE.map((t, idx) => (
                <div key={t.h} className="flex gap-0 pb-7 last:pb-0">
                  <div className="flex flex-col items-center w-2.5 shrink-0 mr-[18px] mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-brand border-2 border-white ring-2 ring-blue-brand shrink-0" />
                    {idx < TIMELINE.length - 1 && (
                      <div className="w-[1px] flex-1 bg-border-brand mt-1.5" />
                    )}
                  </div>
                  <div>
                    <div className="font-mono text-[0.62rem] tracking-[0.12em] text-blue-brand mb-1">
                      {t.yr}
                    </div>
                    <h4 className="text-[0.9rem] font-semibold text-ink mb-1">
                      {t.h}
                    </h4>
                    <p className="text-[0.81rem] text-muted-brand leading-[1.65]">
                      {t.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px] pt-16 md:pt-[68px] border-t border-border-brand">
          {VALUES.map((v) => (
            <div
              key={v.t}
              className="p-[26px_20px] border border-border-brand rounded-[12px] bg-white transition-all duration-200 hover:shadow-sh2 hover:-translate-y-1"
            >
              <div className="text-[1.4rem] mb-3">{v.ico}</div>
              <div className="text-[0.88rem] font-semibold text-ink mb-1.5">
                {v.t}
              </div>
              <div className="text-[0.79rem] text-muted-brand leading-[1.65]">
                {v.b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
