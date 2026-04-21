import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";

const ctaHeading = "We Don’t Just Generate Leads — We Bring Site Visits & Closings";
const ctaDescription =
  "If your current marketing is only generating enquiries and not real buyers, it’s time to switch to a system that converts.";

export function SiteCtaSection({ image, imageAlt = "Lavista real estate growth consultation" }) {
  return (
    <section className="section-light relative overflow-hidden  sm:py-12">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-border)] bg-white/80 shadow-[0_24px_70px_rgba(15,12,10,0.08)]">
            <div className="grid gap-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="p-6 sm:p-10 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                  Final CTA
                </p>
                <h2 className="mt-5 max-w-3xl font-serif text-2xl leading-tight text-surface-foreground sm:text-4xl lg:text-4xl">
                  {ctaHeading}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-surface-copy)] sm:text-lg">
                  {ctaDescription}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-lg">
                    <Link to="/contact">
                      Book a Strategy Call
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="rounded-lg">
                    <Link to="/packages">View Packages</Link>
                  </Button>
                </div>
              </div>

              {image ? (
                <div className="min-h-[320px] overflow-hidden lg:min-h-full">
                  <img src={image} alt={imageAlt} className="h-full min-h-[320px] w-full object-cover" />
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
