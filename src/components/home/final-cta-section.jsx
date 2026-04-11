import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function FinalCtaSection() {
  return (
    <section className="section-light pb-24 pt-24 sm:pb-28 sm:pt-28">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-[linear-gradient(135deg,#1a1611_0%,#0f0d0b_55%,#16110c_100%)] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-0 bg-grid-fade opacity-30" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="Final CTA"
                  title="Need a premium launch funnel that turns visibility into booked site visits?"
                  description="We map the positioning, creative, media, and lead journey around the commercial reality of your project."
                />
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Book Strategy Call
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </div>


            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
