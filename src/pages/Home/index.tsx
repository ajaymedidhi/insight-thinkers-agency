import Hero from "../../components/sections/Hero";
import TrustStrip from "../../components/sections/TrustStrip";
import ServicesPreview from "../../components/sections/ServicesPreview";
import LeadershipPreview from "../../components/sections/LeadershipPreview";
import WhyInsightThinkers from "../../components/sections/WhyInsightThinkers";
import CTASection from "../../components/sections/CTASection";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyInsightThinkers />
      <LeadershipPreview />
      <CTASection />
    </div>
  );
}
