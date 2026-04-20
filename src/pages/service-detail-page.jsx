import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, KeyRound, Layers3, TrendingUp, UsersRound } from "lucide-react";
import { realEstateBrandingPageContent, servicePages } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

const {
  images: redesignImages,
  what: redesignWhat,
  whyMatters: redesignWhyMatters,
  workflow: redesignWorkflow,
  deliverables: redesignDeliverables,
  ProblemSolution: redesignProblemSolution = [],
  beforeAfter: redesignBeforeAfter = [],
  whyLavista: redesignWhyLavista,
} = realEstateBrandingPageContent;

const serviceOutcomeCards = [
  {
    icon: UsersRound,
    value: "Better",
    label: "Qualified Leads",
    description:
      "Brand positioning and campaign language filter casual enquiries before they reach your sales team.",
  },
  {
    icon: KeyRound,
    value: "Higher",
    label: "Site Visit Intent",
    description:
      "Trust-led touchpoints move serious buyers from enquiry to assisted walkthrough conversations.",
  },
  {
    icon: TrendingUp,
    value: "Cleaner",
    label: "Conversion Movement",
    description:
      "A sharper perception system supports better follow-up, buyer confidence, and closing momentum.",
  },
];

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services/real-estate-branding" replace />;
  }

  if (service.slug === "real-estate-branding") {
    return <RealEstateBrandingRedesign service={service} />;
  }

  return (
    <div>
      <section className="relative flex min-h-[80svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.24)_0%,rgba(10,9,8,0.58)_20%,rgba(10,9,8,0.94)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[92svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">{service.eyebrow}</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-balance text-foreground">
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                How We Start
              </p>
              <h2 className="mt-5 font-serif 
               text-xl 
               sm:text-2xl 
               md:text-3xl 
               lg:text-4xl 
               leading-tight 
               tracking-tight 
               text-surface-foreground">
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

          <div className="mt-12 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-3">
            {service.process.map((step, index) => (
              <Reveal key={step} delay={index * 70}>
                <div className=" min-h-[150px] rounded-[28px] border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25">
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

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {service.provides.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="surface-card-light  min-h-[170px] gap-4 rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex size-11 shrink-4 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <p className="text-md leading-8 mt-4 text-[var(--color-surface-copy)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Result / Outcome</p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
                  Outcomes that show up in buyer quality, site visits, and conversion movement.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-xl border border-primary/20 bg-card/70 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-8">
                <p className="text-base leading-8 text-muted-foreground sm:text-lg">{service.outcome}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceOutcomeCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} delay={index * 90}>
                  <article className="group min-h-[260px] rounded-xl border border-border/80 bg-[linear-gradient(180deg,rgba(21,19,17,0.9)_0%,rgba(16,14,12,0.78)_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_70px_rgba(0,0,0,0.32)] sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/60">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="font-serif text-4xl leading-none text-foreground sm:text-5xl">{item.value}</p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">{item.label}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-surface-border)] bg-white/80 px-6 py-10 shadow-[0_20px_40px_rgba(15,12,10,0.06)] sm:px-10 sm:py-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                    Final CTA
                  </p>
                  <h2 className="mt-4 section-heading text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl leading-tight tracking-tight text-balance text-surface-foreground">
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

function RealEstateBrandingRedesign({ service }) {
  return (
    <div>
      <RedesignHero service={service} />
      <RedesignWhatIs service={service} />
      <RedesignWhyMatters />
      <RedesignHowWorks service={service} />
      <RedesignProcess service={service} />
      <RedesignDeliverables />
      <RedesignProblemSolution />
      <RedesignResults service={service} />
      <RedesignWhyLavista />
      <RedesignFinalCta />
    </div>
  );
}

function RedesignHero({ service }) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src={redesignImages.hero} alt={service.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,10,0.98)_0%,rgba(13,12,10,0.82)_45%,rgba(13,12,10,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.18)_0%,rgba(13,12,10,0.92)_100%)]" />
      </div>

      <div className="container-shell relative grid min-h-[100svh] gap-10 pb-12 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-16">
        <div className="max-w-4xl">
          <Reveal>
            <Badge className="mb-6 w-fit">{service.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-serif text-2xl leading-[1.3] text-balance text-foreground sm:text-6xl md:text-4xl lg:text-4xl">
              Branding that makes premium projects easier to trust and easier to choose.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-secondary sm:text-lg">
              Lavista builds real estate brand systems that sharpen positioning, improve buyer confidence, and support cleaner lead quality from first impression to site visit.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/contact">
                  Build My Brand System
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RedesignWhatIs({ service }) {
  return (
    <section className="section-light py-24 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-surface-accent)]">
              What Is Real Estate Branding
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-balance text-surface-foreground sm:text-5xl lg:text-4xl">
              It is the perception system that makes a project feel credible before the first call.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--color-surface-copy)] sm:text-lg">{service.what}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-xl">
            <img src={redesignImages.strategy} alt="Real estate branding strategy workspace" className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(13,12,10,0.76)_100%)]" />
          </div>
        </Reveal>
      </div>

      <div className="container-shell mt-12 grid gap-5 md:grid-cols-3">
        {redesignWhat.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 70}>
              <article className="surface-card-light min-h-[260px] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-7 font-serif text-2xl leading-tight text-surface-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-surface-copy)]">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function RedesignWhyMatters() {
  return (
    <section className="section-dark-alt py-24 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border/80">
            <img src={redesignImages.skyline} alt="Premium city skyline for real estate branding" className="h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.12)_0%,rgba(13,12,10,0.86)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Why Branding Matters</p>
              <h2 className="mt-4 max-w-lg font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                Premium projects need more than visibility. They need belief.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {redesignWhyMatters.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 80}>
                <article className="rounded-xl border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RedesignHowWorks({ service }) {
  return (
    <section className="section-light py-24 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="How Lavista Works"
            title="We start with the project reality, then turn it into a buyer-facing brand system."
            description={service.start}
            tone="light"
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-4 left-5 top-4 hidden w-px bg-[var(--color-surface-border)] sm:block" />
          {redesignWorkflow.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <div className="group relative grid gap-4 border-b border-[var(--color-surface-border)] py-7 last:border-b-0 sm:grid-cols-[40px_1fr] sm:gap-6 sm:py-8">
                <div className="relative z-10 flex size-10 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface)] transition-colors duration-300 group-hover:border-[var(--color-surface-accent)]">
                  <span className="font-serif text-base leading-none text-[var(--color-surface-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="max-w-xl text-lg leading-9 text-[var(--color-surface-copy)] transition-colors duration-300 group-hover:text-surface-foreground">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RedesignProcess({ service }) {
  return (
    <section className="section-dark relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Step-by-Step Process"
            title="A clear process from strategy to launch-ready brand execution."
            description="Every step is designed to improve buyer trust, project recall, and the quality of sales conversations."
            align="center"
            className="mx-start max-w-3xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {service.process.map((step, index) => (
            <Reveal key={step} delay={index * 70}>
              <article className="group min-h-[260px] rounded-xl border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-primary/90">{String(index + 1).padStart(2, "0")}</span>
                  <Layers3 className="size-5 text-primary/60 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <p className="mt-8 text-sm leading-7 text-muted-foreground">{step}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RedesignDeliverables() {
  return (
    <section className="section-light-alt py-24 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="What We Build For You"
            title="Brand assets that make the project feel consistent everywhere buyers meet it."
            description="The output is practical, premium, and shaped for real estate launch journeys."
            tone="light"
            align="center"
            className=" max-w-3xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {redesignDeliverables.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="surface-card-light min-h-[190px] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-accent/10 text-primary shadow-bg-surface-foreground">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl leading-tight text-surface-foreground">{item.title}</h3>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RedesignProblemSolution() {
  return (
    <section className="section-dark-alt py-24 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">
              Problem / Solution
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-balance text-foreground sm:text-5xl lg:text-4xl">
              Common brand gaps, translated into clearer buyer movement.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
              Lavista connects each branding problem to a practical solution that improves trust, message clarity, and sales readiness.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-xl border border-border/80 bg-card/70">
            {redesignProblemSolution.map((item, index) => (
              <div key={`problem-solution-${index}-${item.problem}`} className="grid gap-4 border-b border-border/70 p-5 last:border-b-0 sm:grid-cols-2 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    Solution
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// function RedesignBeforeAfter() {
//   return (
//     <section className="section-dark-alt py-24 sm:py-28">
//       <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
//       </div>
//     </section>
//   );
// }

function BeforeAfterSplit() {
  const [splitPosition, setSplitPosition] = useState(52);

  const moveSplit = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100;
    setSplitPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const nudgeSplit = (event) => {
    if (event.key === "ArrowLeft") {
      setSplitPosition((current) => Math.max(0, current - 4));
    }

    if (event.key === "ArrowRight") {
      setSplitPosition((current) => Math.min(100, current + 4));
    }
  };

  return (
    <div
      className="relative min-h-[680px] touch-none cursor-ew-resize overflow-hidden rounded-xl border border-[var(--color-surface-border)] bg-surface-foreground select-none"
      onPointerDown={moveSplit}
      onPointerMove={moveSplit}
      style={{ "--split-position": `${splitPosition}%` }}
    >
      <img
        src={redesignImages.interiors}
        alt="Premium real estate interiors for buyer confidence"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/72" />

      <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Before</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Brand touchpoints that make buyers work harder.
          </h3>
        </div>

        <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-lg lg:bottom-10 lg:left-10">
          {redesignBeforeAfter.map((item, index) => (
            <div key={item.before} className="grid grid-cols-[28px_1fr] gap-4 border-t border-white/15 pt-4">
              <span className="font-serif text-lg leading-none text-primary">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-7 text-secondary sm:text-base">{item.before}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "inset(0 0 0 var(--split-position))" }}
      >
        <img src={redesignImages.interiors} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover saturate-125" />
        <div className="absolute inset-0 bg-black/38" />

        <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
          <div className="ml-auto max-w-md text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">After Lavista</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              A sharper brand system that moves serious buyers forward.
            </h3>
          </div>

          <div className="absolute bottom-6 left-6 right-6 grid gap-4 sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-lg lg:bottom-10 lg:right-10">
            {redesignBeforeAfter.map((item, index) => (
              <div key={item.after} className="grid grid-cols-[28px_1fr] gap-4 border-t border-primary/25 pt-4">
                <span className="font-serif text-lg leading-none text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-foreground sm:text-base">{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-0 top-0 z-10 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center focus:outline-none"
        style={{ left: "var(--split-position)" }}
        aria-label="Move before and after comparison"
        onKeyDown={nudgeSplit}
      >
        <span className="absolute bottom-0 top-0 w-px bg-primary" />
        <span className="flex size-10 items-center justify-center rounded-full border border-primary/60 bg-black/70 shadow-[0_14px_30px_rgba(0,0,0,0.32)]">
          <span className="flex gap-1">
            <span className="h-4 w-px bg-primary" />
            <span className="h-4 w-px bg-primary" />
          </span>
        </span>
      </button>

      <div className="pointer-events-none absolute left-4 top-4 z-10 flex rounded-full border border-white/15 bg-black/68 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur sm:left-6 sm:top-6">
        <span className="border-r border-white/15 px-4 py-2">Before</span>
        <span className="px-4 py-2 text-primary">After</span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs text-secondary backdrop-blur sm:bottom-6 sm:right-6">
        Move the line
      </div>
    </div>
  );
}

function RedesignResults({ service }) {
  return (
    <section className="section-light py-24 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <div className="max-w-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-surface-accent)]">
              Results / Outcomes
            </p>
            <h2 className="mt-5 font-serif text-2xl leading-tight text-balance text-surface-foreground sm:text-3xl">
              Outcomes that show up in buyer quality, site visits, and conversion movement.
            </h2>
            <p className="mt-6 text-sans leading-8 text-[var(--color-surface-copy)] sm:text-lg">{service.outcome}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12">
            <BeforeAfterSplit />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RedesignWhyLavista() {
  return (
    <section className="section-dark py-24 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.10fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Why Lavista</p>
              <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight text-balance text-foreground sm:text-5xl lg:text-4xl">
                Real estate branding built with sales reality in mind.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                The work is designed for launches, buyer trust, lead quality, and sales handoff. Not just a prettier presentation.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {redesignWhyLavista.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="min-h-[260px] rounded-xl border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-7">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-8 font-serif text-2xl leading-tight text-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RedesignFinalCta() {
  return (
    <section className="section-light relative overflow-hidden py-24 sm:py-28">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-[var(--color-surface-border)] bg-white/80 shadow-[0_24px_70px_rgba(15,12,10,0.08)]">
            <div className="grid gap-0 lg:grid-cols-2 sm:grid-cols-1 md:grid-col-2">
              <div className="p-6 sm:p-10 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                  Final CTA
                </p>
                <h2 className="mt-5 max-w-3xl font-serif text-2xl leading-tight text-balance text-surface-foreground sm:text-4xl lg:text-4xl">
                  Ready to make your project look premium and convert cleaner?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-surface-copy)] sm:text-lg">
                  Share your project stage, location, and current launch challenge. Lavista will map the right brand direction for your next move.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-xl">
                    <Link to="/contact">
                      Book a Strategy Call
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="rounded-xl">
                    <Link to="/packages">View Packages</Link>
                  </Button>
                </div>
              </div>

              <div className="min-h-[320px] overflow-hidden lg:min-h-full">
                <img src={redesignImages.meeting} alt="Lavista real estate branding consultation" className="h-full min-h-[320px] w-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
