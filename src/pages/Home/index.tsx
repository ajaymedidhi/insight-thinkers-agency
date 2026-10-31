import { Link } from "react-router-dom";
import SEO from "../../components/shared/SEO";
import HomeHero from "../../components/home/HomeHero";
import Credentials from "../../components/home/Credentials";
import FounderSection from "../../components/home/FounderSection";
import ServicesIndex from "../../components/home/ServicesIndex";
import Pathways from "../../components/home/Pathways";
import ActiveMandates from "../../components/home/ActiveMandates";
import LatestInsights from "../../components/home/LatestInsights";
import ResourcesPreview from "../../components/home/ResourcesPreview";
import ApproachSteps from "../../components/shared/ApproachSteps";
import Reveal from "../../components/ui/Reveal";
import CTABand from "../../components/ui/CTABand";
import { COMPANY, FOUNDER, SITE_URL } from "../../content/site";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.name,
  url: SITE_URL,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  areaServed: "India",
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
  founder: { "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.title },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Healthcare M&A, Capital & Technology Advisory"
        description="Insight Thinkers Agency advises hospital owners, healthcare entrepreneurs and investors on mergers and acquisitions, capital raising, healthcare technology and strategic growth."
        keywords="Healthcare M&A, hospital valuation, healthcare capital raising, healthcare technology advisory, India"
        schema={ORG_SCHEMA}
      />
      {/* 1. Editorial Hero Carousel with live mandate counter & pause controls */}
      <HomeHero />

      {/* 2. Institutional Credibility Metrics & verified transaction figures */}
      <Credentials />

      {/* 3. Core Advisory Practices with interactive problem scenarios */}
      <ServicesIndex />

      {/* 4. Audience Pathways - Who We Advise */}
      <Pathways />

      {/* 5. Active Confidential Mandates */}
      <ActiveMandates />


      {/* 7. Strategic Methodology - From First Conversation to Close */}
      <section aria-labelledby="approach-title" className="section border-t border-line bg-paper">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">Strategic Methodology</p>
              <h2 id="approach-title" className="h2 max-w-[18ch]">From first conversation to close.</h2>
            </div>
            <Link to="/services#approach-title" className="link-arrow shrink-0">
              The full process <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <div className="mt-14">
            <ApproachSteps compact />
          </div>
        </div>
      </section>

      {/* 8. Founder-Led Leadership Spotlight */}
      <FounderSection />

      {/* 9. Healthcare Market Intelligence & Publications */}
      <LatestInsights />

      {/* 10. Practical Resources & Valuation Primers */}
      <ResourcesPreview />

      {/* 11. Final High-Trust Call To Action */}
      <CTABand />
    </>
  );
}

