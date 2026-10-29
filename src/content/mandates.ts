/**
 * Anonymised ACTIVE mandates, as published by the firm. These are engagements
 * in progress — not completed transactions — and must always be labelled so.
 * CLIENT TO CONFIRM status before each update; remove an item once it closes
 * or lapses, and only describe it as completed with client approval.
 */
export const ACTIVE_MANDATES = [
  {
    ref: "M-01",
    title: "Revenue-generating multi-specialty hospital",
    region: "South India",
    metric: "₹3–4 Cr monthly revenue",
    seeking: "Strategic acquisition or majority stake",
    summary: "A fully operational multi-specialty hospital with a consistent four-year operating record.",
  },
  {
    ref: "M-02",
    title: "Asset-backed hospital",
    region: "Tier-2 city, South India",
    metric: "₹120 Cr+ hard-asset value",
    seeking: "PE fund or strategic acquirer",
    summary: "A mandate underpinned by significant hard-asset value, including land and a purpose-built hospital building.",
  },
  {
    ref: "M-03",
    title: "Profitable diagnostic and outpatient platform",
    region: "Multi-site",
    metric: "Profitable, expansion-ready",
    seeking: "Growth capital or strategic partner",
    summary: "An operational facility combining diagnostics and outpatient services, ready for expansion.",
  },
];

/** Engagement model — adapted from the firm's existing transaction process. */
export const APPROACH = [
  {
    step: "01",
    summary: "Exploratory conversation, then a mutual NDA.",
    title: "Discovery and strategic assessment",
    body: "An initial, exploratory conversation, followed by a mutual NDA before any sensitive information is exchanged. We establish objectives, constraints and a realistic baseline.",
  },
  {
    step: "02",
    summary: "Review the business; agree the strategy.",
    title: "Evaluation and planning",
    body: "Financial, operational and technology review of the business. We agree the strategy — sale, partnership, capital raise or growth plan — and the materials it requires.",
  },
  {
    step: "03",
    summary: "Positioning, outreach, negotiation, signing.",
    title: "Advisory and execution",
    body: "Positioning, information memorandum, counterparty outreach to qualified investors or acquirers, negotiation of terms and coordination through to signing.",
  },
  {
    step: "04",
    summary: "Integration and growth after the deal.",
    title: "Ongoing strategic support",
    body: "Support beyond the transaction: integration, technology alignment and growth planning, so the outcome holds its value.",
  },
];
