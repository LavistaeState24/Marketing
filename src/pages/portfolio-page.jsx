import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import {
  portfolioApproachBlocks,
  portfolioHero,
  portfolioPageFilters,
  portfolioPageGallery,
  portfolioPerformanceHighlights,
} from "@/data/site";

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioPageGallery
      : portfolioPageGallery.filter((project) => project.type === activeFilter);

  return (
    <div>
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={portfolioHero.image} alt={portfolioHero.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.2)_0%,rgba(10,9,8,0.52)_42%,rgba(10,9,8,0.94)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[88svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">{portfolioHero.eyebrow}</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl">
                {portfolioHero.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">{portfolioHero.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Filterable Gallery"
            title="Selected portfolio across high-intent real estate categories."
            description="Browse by project type to see how Lavista adapts positioning, creative presentation, and campaign focus for each format."
            tone="light"
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {portfolioPageFilters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(212,180,131,0.16)]"
                      : "border-[var(--color-surface-border)] bg-white/70 text-surface-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white",
                  ].join(" ")}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={`${activeFilter}-${project.title}`} delay={index * 70}>
                <article className="group min-h-[320px] overflow-hidden rounded-[30px] border border-[var(--color-surface-border)] bg-white/82 shadow-[0_20px_40px_rgba(15,12,10,0.06)] transition-all duration-300 hover:-translate-y-1.5">
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.08)_0%,rgba(13,12,10,0.84)_100%)]" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {project.type}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-secondary">{project.location}</p>
                      <h2 className="mt-3 font-serif text-3xl text-foreground">{project.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-secondary">{project.result}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark-alt py-24 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Selected Case Study / Approach"
                title="Our portfolio work is less about showing polished assets and more about showing how those assets moved buyers closer to action."
                description="For Lavista, strong portfolio work means positioning, presentation, and performance are working together in the same funnel."
              />
            </div>
          </Reveal>

          <div className="grid gap-5">
            {portfolioApproachBlocks.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="min-h-[210px] rounded-[28px] border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25">
                  <h3 className="font-serif text-3xl text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light-alt py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Performance Highlights"
            title="A portfolio backed by measurable movement, not presentation alone."
            description="These numbers reflect how Lavista approaches premium real estate marketing across project categories and campaign stages."
            tone="light"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {portfolioPerformanceHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.label} delay={index * 70}>
                  <div className="surface-card-light min-h-[240px] rounded-[30px] p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-6 font-serif text-5xl text-surface-foreground">{item.value}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-surface-copy)]">{item.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-[linear-gradient(135deg,#1a1611_0%,#0f0d0b_55%,#16110c_100%)] px-6 py-10 sm:px-10 sm:py-14">
              <div className="absolute inset-0 bg-grid-fade opacity-25" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Final CTA</p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl">
                    Need a portfolio-grade campaign system for your next launch, inventory push, or premium repositioning?
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    Let&apos;s build the positioning, creative, media, and conversion journey around the commercial goals of your project.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Book a Strategy Call
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
