import Reveal from "../ui/Reveal";
import { Link } from "react-router-dom";
import { contactFor } from "../../content/services";

export interface IndustrySegment {
  id: string;
  name: string;
  scope: string;
  characteristics: string[];
  mandateExample: string;
  iconSvg: string;
  image: string;
}

export const HEALTHCARE_SECTORS: IndustrySegment[] = [
  {
    id: "hospitals",
    name: "Multi-Specialty & Single-Specialty Hospitals",
    scope: "Secondary & tertiary care hospitals from 50 to 300+ beds, Tier-1 & Tier-2 expansion hubs.",
    characteristics: [
      "Inpatient, surgical suites & emergency care",
      "Real estate asset backing & bed economics",
      "Physician alignment & clinical governance",
    ],
    mandateExample: "Active M&A & capital syndication across South India hospital clusters.",
    iconSvg: "M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M9 17h6",
    image: "/healthcare-facility.jpg",
  },
  {
    id: "diagnostics",
    name: "Diagnostic Chains & Pathology Networks",
    scope: "Regional diagnostic labs, imaging centers, and hub-and-spoke testing networks.",
    characteristics: [
      "High-margin radiology & pathology mixes",
      "B2B hospital lab outsourcing agreements",
      "PACS/LIMS digitization & workflow efficiency",
    ],
    mandateExample: "Valuation & sell-side advisory for established diagnostics groups.",
    iconSvg: "M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z",
    image: "/medical-technology-lab.jpg",
  },
  {
    id: "healthtech",
    name: "Digital Health & Clinical Technology",
    scope: "Proprietary Hospital Information Systems (HIS), EMR, Telemedicine & AI diagnostics.",
    characteristics: [
      "Recurring enterprise software & SaaS revenue",
      "Interoperability with imaging equipment & hardware",
      "Technology diligence and buy-side platform fit",
    ],
    mandateExample: "6+ deployed platforms across 50+ institutional healthcare clients.",
    iconSvg: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
    image: "/doctor-digital-health.jpg",
  },
  {
    id: "specialty-care",
    name: "Specialty Centers & Day Surgery",
    scope: "Oncology day-care, IVF/fertility networks, eye care, and orthopaedic ambulatory clinics.",
    characteristics: [
      "Asset-light clinical operational models",
      "Rapid cash-conversion and specialized unit economics",
      "Targeted consolidation candidates for PE sponsors",
    ],
    mandateExample: "Growth equity syndication and strategic joint-venture structuring.",
    iconSvg: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    image: "/hospital-handshake.jpg",
  },
];


export default function IndustriesSection() {
  return (
    <section aria-labelledby="industries-title" className="section border-t border-line bg-sand/30">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Sector Specialization</p>
            <h2 id="industries-title" className="h2 max-w-[20ch]">
              Deep healthcare domain across key industry verticals.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.9375rem] leading-relaxed text-body">
            We don't generalize. Our advisory practice is strictly dedicated to healthcare operators, medical promoters, and life science investors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HEALTHCARE_SECTORS.map((s, i) => (
            <Reveal
              as="div"
              key={s.id}
              delay={i * 90}
              className="group flex flex-col justify-between bg-paper transition-colors duration-300 hover:bg-ivory"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-white/20 bg-navy-deep/80 text-white backdrop-blur-sm">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={s.iconSvg} />
                    </svg>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-[1.25rem] leading-snug text-ink">{s.name}</h3>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">{s.scope}</p>

                  <ul className="mt-6 space-y-2 border-t border-line pt-4 text-[0.8125rem] text-ink">
                    {s.characteristics.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-line/60 p-6 sm:px-8 sm:pb-8 pt-4">
                <p className="text-[0.75rem] font-medium tracking-wide uppercase text-bronze-ink">Advisory Focus</p>
                <p className="mt-1 text-[0.8125rem] text-body italic">{s.mandateExample}</p>
              </div>
            </Reveal>
          ))}
        </div>


        <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.875rem] text-muted">
            Evaluating a mandate in one of these sub-sectors? We operate under strict mutual non-disclosure.
          </p>
          <Link to={contactFor("Healthcare M&A / Transaction Advisory")} className="link-arrow shrink-0">
            Request sector credentials <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
