import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function ServicesSection() {
  return (
    <section className="section-light-alt py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Conversion-focused systems built for the way real estate actually sells."
          description="We bring performance media, premium creative, and funnel discipline into one operating model so each campaign looks stronger and converts cleaner."
          tone="light"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 80}>
                <Card className="surface-card-light group h-full min-h-[330px] rounded-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="pt-2 text-surface-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-[var(--color-surface-copy)]">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-sm text-[var(--color-surface-copy)]">
                          <span className="size-1.5 rounded-full bg-primary" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    {/* <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                  >
                    Explore service
                    <ArrowUpRight className="size-4" />
                  </Link> */}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--color-surface-border)] text-surface-foreground hover:bg-black/5"
          >
            <Link to="/services">
              View All Services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
