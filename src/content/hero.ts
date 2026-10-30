import { PRIMARY_CTA } from "./site";
import { contactFor } from "./services";

/**
 * Homepage hero slides. Copy is drawn from the published service
 * descriptions — do not add metrics or claims here without client approval.
 *
 * CLIENT TO SUPPLY: licensed or commissioned photography. The current images
 * are placeholders (cropped so no real or fictional brand signage shows).
 */
export interface HeroSlide {
  id: string;
  /** Short label for the slide tab. */
  label: string;
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  cta: { label: string; to: string };
  secondary: { label: string; to: string };
  image: { src: string; width: number; height: number; position: string };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "advisory",
    label: "Transactions",
    eyebrow: "Healthcare M&A · Hyderabad, India",
    title: "Strategic advice for healthcare’s",
    highlight: "next stage of growth.",
    body: "M&A, capital and technology advice for hospital owners, healthcare entrepreneurs and investors — led by the founder, start to finish.",
    cta: { label: PRIMARY_CTA.label, to: PRIMARY_CTA.path },
    secondary: { label: "Explore our practices", to: "/services" },
    image: { src: "/hero-advisory.jpg", width: 1376, height: 768, position: "68% 45%" },
  },
  {
    id: "capital",
    label: "Capital",
    eyebrow: "Capital raising and corporate finance",
    title: "Growth capital,",
    highlight: "investor-ready.",
    body: "Investor-ready materials and introductions to healthcare PE funds, family offices and UHNI investors across India, the GCC and Singapore.",
    cta: { label: "Discuss a capital raise", to: contactFor("Capital Raising / Corporate Finance") },
    secondary: { label: "About this practice", to: "/services#capital-raising" },
    image: { src: "/hero-capital.jpg", width: 1200, height: 460, position: "70% 40%" },
  },
  {
    id: "technology",
    label: "Technology",
    eyebrow: "Healthcare technology advisory",
    title: "Technology diligence by",
    highlight: "software builders.",
    body: "HMS, PACS and EMR platforms we built in-house inform every technology review — for acquirers assessing a target and operators modernising.",
    cta: { label: "Discuss technology diligence", to: contactFor("Healthcare Technology Advisory") },
    secondary: { label: "About this practice", to: "/services#technology" },
    image: { src: "/hero-technology.jpg", width: 1376, height: 593, position: "65% 50%" },
  },
];

/** Seconds each slide stays before auto-advancing (when autoplay is allowed). */
export const HERO_INTERVAL_MS = 7000;
