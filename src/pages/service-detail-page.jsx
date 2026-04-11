import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicePages } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services/real-estate-branding" replace />;
  }

  return (
    <div>
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.24)_0%,rgba(10,9,8,0.58)_20%,rgba(10,9,8,0.94)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[88svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">{service.eyebrow}</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-5xl leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">{service.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="What This Service Is"
              title={`What ${service.navLabel} means for real estate growth.`}
              description={service.what}
              tone="light"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card-light min-h-[360px] rounded-[32px] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                How We Start
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-surface-foreground">
                We begin by understanding the project reality before building the campaign system.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-surface-copy)]">{service.start}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark-alt py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Step-by-Step Process"
            title="From strategy to optimization, every step is built around buyer movement."
            description="The work is sequenced so creative, media, qualification, and sales follow-up support the same commercial outcome."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className="h-full min-h-[250px] rounded-[28px] border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light-alt py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What We Provide"
            title="Clear deliverables that support launch, lead quality, and sales handoff."
            description="Every engagement is adapted to the project stage, but the deliverables stay focused on usable marketing assets and conversion systems."
            tone="light"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.provides.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="surface-card-light flex h-full min-h-[150px] gap-4 rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <p className="text-sm leading-7 text-[var(--color-surface-copy)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Result / Outcome</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
                The result is a service system tied to real buyer quality and sales movement.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="min-h-[220px] rounded-[32px] border border-border/80 bg-card/70 p-7 sm:p-8">
              <p className="text-lg leading-8 text-muted-foreground">{service.outcome}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-surface-border)] bg-white/80 px-6 py-10 shadow-[0_20px_40px_rgba(15,12,10,0.06)] sm:px-10 sm:py-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                    Final CTA
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-surface-foreground sm:text-5xl">
                    Ready to build a sharper {service.navLabel.toLowerCase()} system for your next project?
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-surface-copy)] sm:text-lg">
                    Share your project stage, location, and current growth challenge. We&apos;ll map the right next step.
                  </p>
                </div>
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
