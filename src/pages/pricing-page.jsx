import { Badge } from "@/components/ui/badge";
import { PricingPackagesSection } from "@/components/common/pricing-packages-section";
import { Reveal } from "@/components/common/reveal";
import { SiteCtaSection } from "@/components/common/site-cta-section";

export function PricingPage() {
  return (
    <div>
      <section className="relative flex min-h-[78svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
            alt="Premium real estate marketing package consultation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.26)_0%,rgba(10,9,8,0.62)_48%,rgba(10,9,8,0.95)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[78svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">Packages</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-5xl leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-5xl">
                Premium real estate marketing packages for visibility, leads, and full-funnel growth.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">
                Choose a package based on your project stage, campaign urgency, content needs, and sales conversion goals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <PricingPackagesSection
        eyebrow="Pricing"
        title="Complete pricing details for every real estate marketing package."
        description="Review plan duration, package amount, inclusions, best-fit context, and expected outcome before choosing the right engagement."
        tone="light"
        showPlanDetails
        className="section-light"
      />

      <SiteCtaSection
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Premium real estate marketing package consultation"
      />
    </div>
  );
}
