/**
 * Single source of truth for business facts shown across the site.
 *
 * Anything marked `CLIENT TO CONFIRM` is a business claim that must be
 * verified by Insight Thinkers Agency before it is changed or relied upon.
 * Do not add metrics, credentials, clients or transactions here unless the
 * client has supplied and approved them.
 */

export const SITE_URL = "https://insightthinkersagency.com";

export const COMPANY = {
  name: "Insight Thinkers Agency",
  shortName: "Insight Thinkers",
  location: "Hyderabad, Telangana, India",
  coverage: "South India · Pan-India · Asia",
  email: "info@insightthinkersagency.com",
  phone: "+91 95812 71590",
  phoneHref: "+919581271590",
  // CLIENT TO CONFIRM: add official LinkedIn / other profiles. Leave empty to hide.
  social: [] as { label: string; href: string }[],
};

export const FOUNDER = {
  name: "Vasanth Sabavath",
  /**
   * Designation per the revamp brief. CLIENT TO CONFIRM: switch to "Founder"
   * if that is the client's preference — this is the only place to change it.
   */
  title: "Founder & CEO",
  initials: "VS",
  /**
   * CLIENT TO SUPPLY: an authentic portrait (ideally ≥1200px tall, 4:5).
   * Place it in src/assets and import it here. When null, the layout shows
   * a typographic placeholder instead of a stock image.
   */
  portrait: null as string | null,
};

/**
 * Mandate value.
 * The figure currently published on the live site is ₹120 Cr+ and describes
 * the hard-asset value of hospital assets under ACTIVE mandate (not completed
 * transactions). The brief asks for ₹1,000 Cr+ once the client confirms the
 * exact claim and its basis.
 *
 * CLIENT TO CONFIRM: set `confirmed: true` only after written confirmation of
 * the ₹1,000 Cr+ figure AND what it measures (e.g. aggregate enterprise value
 * vs. hard-asset value; active vs. completed). Update `basis` to match.
 */
const MANDATE_VALUE_UPDATE = {
  confirmed: false,
  value: "₹1,000",
  basis: "Aggregate value of healthcare assets under active advisory mandate",
};

export const MANDATE_VALUE = MANDATE_VALUE_UPDATE.confirmed
  ? { value: MANDATE_VALUE_UPDATE.value, suffix: "Cr+", basis: MANDATE_VALUE_UPDATE.basis }
  : {
      value: "₹120",
      suffix: "Cr+",
      basis: "Hard-asset value of hospital assets under active, exclusive mandate",
    };

/**
 * Headline metrics. Each carries a plain-language explanation so no figure
 * appears without context. All figures are as previously published by the
 * firm. CLIENT TO CONFIRM before each review cycle.
 *
 * `animate` allows the count-up treatment. Keep it false for any figure whose
 * basis is under review — the mandate value is never animated until confirmed.
 */
export const METRICS = [
  {
    value: MANDATE_VALUE.value,
    suffix: MANDATE_VALUE.suffix,
    label: "Under active mandate",
    animate: MANDATE_VALUE_UPDATE.confirmed,
    note: `${MANDATE_VALUE.basis}. Not completed transactions.`,
  },
  {
    value: "3",
    suffix: "",
    label: "Exclusive mandates in progress",
    animate: true,
    note: "Live sell-side and capital mandates in South India.",
  },
  {
    value: "50",
    suffix: "+",
    label: "Healthcare institutions served",
    animate: true,
    note: "Hospitals and diagnostic centres supported.",
  },
  {
    value: "6",
    suffix: "+",
    label: "Healthcare technology products built",
    animate: true,
    note: "In-house HMS, PACS and EMR platforms.",
  },
];

export const METRICS_FOOTNOTE =
  "Figures are reported by Insight Thinkers Agency and refer to current activity. Mandate figures describe engagements in progress and do not represent completed transactions.";

export const NAV_ITEMS = [
  { name: "Services", path: "/services" },
  { name: "Mandates", path: "/mandates" },
  { name: "Leadership", path: "/leadership" },
  { name: "Insights", path: "/insights" },
  { name: "Resources", path: "/resources" },
  { name: "About", path: "/about" },
];

export const FOOTER_NAV = [
  { name: "About", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Services", path: "/services" },
  { name: "Mandates", path: "/mandates" },
  { name: "Network", path: "/network" },
  { name: "Insights", path: "/insights" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

export const PRIMARY_CTA = { label: "Discuss an Advisory Mandate", path: "/contact" };
