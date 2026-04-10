import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { serviceDetails, services } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-shell">
          <Badge>Services</Badge>
          <h3 className="mt-5 font-serif text-4xl leading-tight text-balance text-surface-light sm:text-4xl lg:text-5xl">
            Marketing services designed around high-value real estate conversion.
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            From launch performance to funnel automation, each service is shaped for premium buyer trust, lead quality,
            and sales alignment.
          </p>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 70}>
                  <Card className="surface-card-light h-full rounded-[30px]">
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="pt-3 text-surface-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-[var(--color-surface-copy)]">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-sm text-[var(--color-surface-copy)]">
                          <span className="size-1.5 rounded-full bg-primary" />
                          {benefit}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark-alt py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Detailed Scope"
            title="A service stack that covers the launch journey end to end."
            description="Each engagement can be structured as a focused sprint or a retained growth system depending on the project stage."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceDetails.map((detail, index) => (
              <Reveal key={detail.title} delay={index * 90}>
                <div className="rounded-[30px] border border-border/80 bg-black/15 p-7">
                  <h2 className="font-serif text-3xl text-foreground">{detail.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.description}</p>
                  <div className="mt-6 flex flex-col gap-3">
                    {detail.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-8">
                    <Link to="/contact">
                      {detail.cta}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
