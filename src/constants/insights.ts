export interface Article {
  slug: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  readTime: string;
  date: string;
  coverImage?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export const ARTICLES: Article[] = [
  {
    slug: "hospital-valuation-multiples-india",
    category: "Hospital Valuations",
    title: "Hospital Valuation Multiples in India: Key Valuation Metrics",
    summary: "An in-depth analysis of EBITDA multiples, bed-capacity benchmarks, and operational flow valuation parameters inside India's private hospital transaction landscape.",
    body: `
      <h2>Executive Summary</h2>
      <p>Private hospital valuations in South India and pan-India markets have hit record highs, driven by growing consolidation, institutional private equity demand, and the expansion strategies of strategic healthcare networks. Valuation of hospital assets requires a multi-dimensional approach that accounts for physical beds capacity, regulatory license statuses, clinical practitioner dependencies, and local population demographics.</p>
      
      <h2>Valuation Multiples Spectrum</h2>
      <p>Historically, hospital assets in Tier-1 cities command EBITDA multiples of 18x to 24x depending on beds scale and clinical brand depth. For mid-market setups (50 to 150 beds) in Tier-2 and Tier-3 cities, multiples typically range from 12x to 16x EBITDA. However, simple cashflow metrics are often insufficient. Institutional acquirers place significant weight on hard asset replacement values (land and building) and clinical practitioner dependencies.</p>
      
      <blockquote>
        "spreadsheets alone cannot value hospital assets. Clinical flow quality, equipment condition, and nursing retention determine transaction outcomes."
      </blockquote>
      
      <h2>Core Diligence Metrics</h2>
      <p>When coordinating buy-side due diligence, we benchmark targets against four operational pillars:</p>
      <ul>
        <li><strong>Average Revenue Per Occupied Bed (ARPOB):</strong> Reflects treatment mix, specialty dependencies, and patient demographics.</li>
        <li><strong>Average Length of Stay (ALOS):</strong> Shorter stays indicate operational efficiencies, though clinical outcomes must be audited.</li>
        <li><strong>Doctor Retention Rate:</strong> Key-person risks remain a top deal breaker for mid-market consolidations.</li>
        <li><strong>NABH Compliance:</strong> Regulatory audit statuses directly dictate post-merger integration costs.</li>
      </ul>
      
      <h2>Outlook for 2026</h2>
      <p>We project consolidation to continue, with family-owned hospital promoters opting for majority exits to institutional capital partners. Optimizing clinical software and EMR reporting standards pre-transaction remains the most reliable mechanism to defend promoter valuations during management presentations.</p>
    `,
    readTime: "6 min read",
    date: "May 28, 2026",
    author: {
      name: "Vasanth S",
      role: "Managing Director",
    }
  },
  {
    slug: "private-equity-evaluates-healthcare-assets",
    category: "Private Equity",
    title: "How Private Equity Evaluates Healthcare Assets",
    summary: "Understanding the financial, operational, and clinical due diligence requirements that institutional PE funds demand before structured deal closures.",
    body: `
      <h2>Introduction</h2>
      <p>Private Equity (PE) firms deploying growth capital or pursuing buyout rollouts into the South Asian healthcare market operate under highly structured investment mandates. This analysis details the checklist parameters PE investment committees prioritize during target validation.</p>
      
      <h2>The Financial Forensic Screen</h2>
      <p>Before executing term sheets, PE diligence teams require forensic audits of clinical billings, doctor payouts, and capital expenditure amortization logs. Key considerations include:</p>
      <ul>
        <li>Audit-grade EBITDA adjustments</li>
        <li>Practitioner dependency risk</li>
        <li>Related-party transaction reviews</li>
      </ul>
      
      <h2>Clinical & Regulatory Compliance</h2>
      <p>Regulatory clean-bills remain non-negotiable. Audits evaluate NABH standing, environmental licenses for bio-waste management, and SEBI-compliant corporate secretary governance logs.</p>
    `,
    readTime: "8 min read",
    date: "May 15, 2026",
    author: {
      name: "Vasanth S",
      role: "Managing Director",
    }
  },
  {
    slug: "healthcare-mna-trends-2026",
    category: "Healthcare M&A",
    title: "Healthcare M&A Trends for 2026: Consolidation & Corporatization",
    summary: "Reviewing the macroeconomic tailwinds, pricing premiums, and transaction deal structures shaping the private healthcare segment.",
    body: `
      <h2>The Consolidator Playbook</h2>
      <p>Strategic hospital networks are pursuing aggressive inorganic expansion into Tier-2 and Tier-3 cities in South India to unlock economies of scale. High cost of greenfield construction makes operational brownfield acquisitions highly attractive.</p>
    `,
    readTime: "5 min read",
    date: "April 20, 2026",
    author: {
      name: "Vasanth S",
      role: "Managing Director",
    }
  },
  {
    slug: "ai-role-in-hospital-operations",
    category: "AI in Healthcare",
    title: "AI's Role in Hospital Operations and Transaction Values",
    summary: "How proprietary EMR software, PACS imaging architectures, and AI diagnostic integrations improve target multiples and patient margins.",
    body: `
      <h2>Technology Valuations</h2>
      <p>Hospitals operating modern, integrated digital records (HMS, PACS, EMR) command pricing premiums because digital infrastructure reduces billing leakage and speeds up patient workflow diligence.</p>
    `,
    readTime: "7 min read",
    date: "March 10, 2026",
    author: {
      name: "Vasanth S",
      role: "Managing Director",
    }
  },
  {
    slug: "preparing-healthcare-business-for-investment",
    category: "Growth Capital",
    title: "Preparing a Healthcare Business for Private Investment",
    summary: "A practical guide for promoters seeking minority growth financing or strategic partner introductions.",
    body: `
      <h2>Preparation Guide</h2>
      <p>Success in capital raising is dictated by preparation quality. Hospital promoters should clean up accounting balances, draft clear shareholder agreements, and verify clinical licensing status 6 to 12 months prior to outreach.</p>
    `,
    readTime: "9 min read",
    date: "Feb 18, 2026",
    author: {
      name: "Vasanth S",
      role: "Managing Director",
    }
  }
];

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
}

export const RESOURCES: Resource[] = [
  {
    id: "valuation-guide",
    title: "Hospital Valuation Guide",
    description: "Detailed valuation multiples, case studies, and capitalization tables benchmarked against private hospital transactions in India.",
    type: "PDF Document"
  },
  {
    id: "mna-checklist",
    title: "Healthcare M&A Checklist",
    description: "Full-scale corporate secretarial, tax, clinical, and software engineering due diligence checklist for hospital acquirers.",
    type: "Excel Toolkit"
  },
  {
    id: "capital-prep",
    title: "Growth Capital Preparation Guide",
    description: "An instruction manual for healthcare promoters outlining investor pitch materials, balance sheet audits, and regulatory certifications.",
    type: "Dossier Template"
  },
  {
    id: "due-diligence-framework",
    title: "Healthcare Due Diligence Framework",
    description: "Our in-house clinical flow, nurse staffing risk, and equipment valuation assessment framework used during transaction due diligence.",
    type: "Advisory Playbook"
  },
  {
    id: "investor-readiness",
    title: "Investor Readiness Toolkit",
    description: "Templates, term sheet benchmarks, and SEBI compliance guidelines for structuring majority equity transitions.",
    type: "Document Pack"
  }
];
