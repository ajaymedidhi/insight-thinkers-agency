import { MANDATE_VALUE } from "./site";

export interface Service {
  id: string;
  index: string;
  title: string;
  short: string;
  /** The business question the practice helps a client answer. */
  question: string;
  /** Typical situations that prompt an engagement (descriptive, not claims). */
  problems: string[];
  /** Matching option in ENQUIRY_TOPICS, used to pre-select the contact form. */
  topic: string;
  purpose: string;
  forWhom: string;
  scope: string[];
  deliverables: string[];
}

/** The four core advisory practices. `id` doubles as the /services#anchor. */
export const CORE_SERVICES: Service[] = [
  {
    id: "mergers-acquisitions",
    index: "01",
    title: "Healthcare M&A and Transaction Advisory",
    short: "Buy-side, sell-side and structured equity transactions for hospitals, clinics and diagnostic platforms.",
    question: "Is this the right time to sell or acquire — and on what terms?",
    problems: [
      "A promoter weighing a full or partial exit, or succession",
      "An acquirer needing a credible view of a target before committing",
      "Negotiations stalling over valuation, structure or key-person risk",
    ],
    topic: "Healthcare M&A / Transaction Advisory",
    purpose:
      "End-to-end advisory across buy-side, sell-side and structured equity transactions in the healthcare sector — from origination and positioning through negotiation and closing. Every mandate is led personally by the founder.",
    forWhom: "Hospital promoters planning an exit or partial sale; strategic acquirers and funds evaluating targets.",
    scope: [
      `Current portfolio: 3 exclusive mandates in South India — ${MANDATE_VALUE.value} ${MANDATE_VALUE.suffix} in hard-asset value under active advisory`,
      "Structures: acquisitions, majority stakes, equity infusions and structured exits",
      "Geography: South India primary; pan-India and South-East Asia for PE-backed transactions",
    ],
    deliverables: [
      "Buy-side and sell-side mandate management",
      "Financial modelling and valuation",
      "Information memorandum and positioning",
      "Due diligence coordination",
      "SPA, SHA and MOU negotiation support",
      "Term sheet negotiation through to closing",
    ],
  },
  {
    id: "capital-raising",
    index: "02",
    title: "Capital Raising and Corporate Finance",
    short: "Growth equity and structured capital for healthcare operators, prepared to institutional standard.",
    question: "How do we raise the right capital without giving away more than we must?",
    problems: [
      "Expansion plans that have outgrown internal accruals or bank lines",
      "Investor conversations that start but do not reach a term sheet",
      "Financials and documentation not yet at institutional standard",
    ],
    topic: "Capital Raising / Corporate Finance",
    purpose:
      "Structured equity financing for healthcare operators seeking growth capital from private equity funds, family offices, UHNI investors and strategic co-investors — supported by investor-grade financial documentation.",
    forWhom: "Operators and founders raising growth capital; promoters restructuring ownership.",
    scope: [
      "Investor universe: healthcare PE funds, family offices and UHNI platforms across India, GCC and Singapore",
      "Indicative ticket sizes: ₹5 Cr growth equity to larger PE transactions",
      "Instruments: minority and majority equity, structured debt-equity, convertibles",
    ],
    deliverables: [
      "Investor-ready pitch deck and financial model",
      "Information memorandum preparation",
      "Investor identification and mapping",
      "Term sheet structuring and negotiation",
      "Detailed project reports (DPR) and bank/NBFC packages",
      "Closing support and documentation",
    ],
  },
  {
    id: "technology",
    index: "03",
    title: "Healthcare Technology Advisory",
    short: "Technology diligence, platform selection and digital transformation, informed by products we have built.",
    question: "Will our systems support growth, diligence and integration — or hold them back?",
    problems: [
      "Acquirers needing to understand a target’s HMS, PACS or EMR estate",
      "Fragmented or legacy systems creating billing leakage and reporting gaps",
      "A platform choice that must work with existing equipment and workflows",
    ],
    topic: "Healthcare Technology Advisory",
    purpose:
      "Assessment, selection and delivery of hospital technology — HMS, PACS, EMR and clinical software — whether as part of transaction due diligence or an operator's digital transformation. Our view is shaped by building and operating our own healthcare platforms.",
    forWhom: "Acquirers needing technology diligence; hospital groups modernising clinical and operational systems.",
    scope: [
      "Track record: 6+ in-house healthcare technology products deployed across 50+ institutions",
      "Technology due diligence for buy-side and sell-side transactions",
      "Integration with existing hospital workflows, lab equipment and third-party systems",
    ],
    deliverables: [
      "Technology due diligence reports",
      "Hospital Management Systems (HMS)",
      "PACS and radiology information systems",
      "Electronic Medical Records (EMR)",
      "Laboratory information systems (LIMS)",
      "Post-deployment support and upgrades",
    ],
  },
  {
    id: "growth",
    index: "04",
    title: "Strategic Growth and Commercial Positioning",
    short: "Go-to-market, positioning and patient acquisition strategy for healthcare brands preparing to scale.",
    question: "How do we grow patient volumes and tell a stronger commercial story?",
    problems: [
      "A new department or service line that needs a go-to-market plan",
      "Patient acquisition that is hard to measure or attribute",
      "A brand that undersells the business to patients and investors alike",
    ],
    topic: "Strategic Growth / Commercial Positioning",
    purpose:
      "Strategy and execution for growth: service-line launches, brand positioning and patient acquisition for hospitals, clinics and diagnostic centres. This work also strengthens the commercial story a business presents to investors and acquirers.",
    forWhom: "Hospitals and clinic groups launching services, entering markets or preparing for investment.",
    scope: [
      "50+ hospitals and diagnostic centres supported across South India and beyond",
      "Full-funnel reporting: traffic, enquiries, appointment conversion and retention",
      "Healthcare-specific understanding of patient behaviour and referral dynamics",
    ],
    deliverables: [
      "Go-to-market strategy for new services and departments",
      "Brand identity and positioning",
      "Digital presence: search, paid media and social",
      "Patient acquisition funnel design",
      "Content and thought leadership",
      "Performance reporting",
    ],
  },
];

/** Supporting capabilities available alongside core mandates. */
export const SUPPORTING_SERVICES = [
  {
    title: "Medical Equipment Procurement",
    body: "Specification, vendor shortlisting, comparative evaluation, negotiation and commissioning coordination for radiology, laboratory, OT and ICU equipment — including financing and leasing options.",
  },
  {
    title: "Financial Review and Compliance Support",
    body: "Financial statement review, income and expenditure certification support and compliance documentation, integrated with transaction due diligence where relevant.",
  },
  {
    title: "DPR and Pitch Deck Preparation",
    body: "Detailed project reports, investor decks, information memoranda and five-year financial models prepared to the expectations of funds, banks and institutional investors.",
  },
];

/** Options for the enquiry form. Keep in sync with the services above. */
export const ENQUIRY_TOPICS = [
  "Healthcare M&A / Transaction Advisory",
  "Capital Raising / Corporate Finance",
  "Healthcare Technology Advisory",
  "Strategic Growth / Commercial Positioning",
  "Medical Equipment Procurement",
  "Financial Review / Compliance Support",
  "DPR / Pitch Deck Preparation",
  "Other",
];

/** Contact link that pre-selects the enquiry topic. */
export const contactFor = (topic: string) => `/contact?topic=${encodeURIComponent(topic)}`;

/**
 * Audience pathways for the homepage: who we typically advise and where they
 * usually start. `practices` reference CORE_SERVICES ids.
 */
export const AUDIENCES = [
  {
    title: "Hospital owners and promoters",
    need: "Planning a sale, a partial exit, a strategic partnership or succession.",
    practices: ["mergers-acquisitions", "capital-raising"],
  },
  {
    title: "Healthcare entrepreneurs",
    need: "Raising growth capital, launching services or preparing a business for investment.",
    practices: ["capital-raising", "growth"],
  },
  {
    title: "Investors and acquirers",
    need: "Evaluating healthcare targets and needing transaction and technology diligence.",
    practices: ["mergers-acquisitions", "technology"],
  },
  {
    title: "Hospital groups and operators",
    need: "Modernising clinical and operational systems, or strengthening commercial performance.",
    practices: ["technology", "growth"],
  },
];
