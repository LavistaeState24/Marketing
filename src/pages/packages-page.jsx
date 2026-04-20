import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PricingPackagesSection } from "@/components/common/pricing-packages-section";
import { Reveal } from "@/components/common/reveal";

export function PackagesPage() {
  return (
    <div>
      <section className="relative flex min-h-[80svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
            alt="Premium real estate marketing package consultation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.26)_0%,rgba(10,9,8,0.62)_48%,rgba(10,9,8,0.95)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[92svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">Packages</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-balance text-foreground">
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
        eyebrow="Packages"
        title="Three package systems designed for real estate brands at different growth stages."
        description="From social presence to full premium marketing systems, each package is structured for builders, developers, and brokers who need sharper execution."
        tone="light"
        showPrices={false}
        className="section-light"
      />

      <section className="section-dark py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-[linear-gradient(135deg,#1a1611_0%,#0f0d0b_55%,#16110c_100%)] px-6 py-10 sm:px-10 sm:py-14">
              <div className="absolute inset-0 bg-grid-fade opacity-25" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                <div className="max-w-3xl">

                  {/* Eyebrow */}
                  <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Need Custom Scope?
                  </p>

                  {/* Heading */}
                  <h2 className="mt-4 font-serif 
                   text-xl 
                   sm:text-2xl 
                   md:text-3xl 
                   lg:text-4xl 
                   xl:text-5xl 
                   leading-[1.15] 
                   tracking-[-0.01em] 
                   text-balance 
                   text-foreground">
                    Not sure which package fits your project stage?
                  </h2>

                  {/* Paragraph */}
                  <p className="mt-5 max-w-2xl 
                   text-sm 
                   sm:text-base 
                   md:text-lg 
                   leading-relaxed 
                   text-muted-foreground">
                    Share your location, inventory, ticket size, and current marketing challenge. We&apos;ll recommend the right package depth.
                  </p>

                </div>

                {/* Button */}
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book a Strategy Call
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>

              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
