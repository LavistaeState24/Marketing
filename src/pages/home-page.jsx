import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyLavistaSection } from "@/components/home/why-lavista-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyLavistaSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  );
}
