import { portfolioProjects, caseStudies } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function PortfolioPage() {
  return (
    <div className="pt-32">
      <section className=" pb-20">
        <div className="container-shell">
          <Badge>Portfolio</Badge>
          <h3 className=" mt-5 font-serif text-4xl leading-tight text-balance text-surface-light sm:text-4xl lg:text-5xl">
            Selected launches, repositioning work, and campaign systems for premium real estate.
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            These case-study style examples show how Lavista brings together luxury storytelling and channel performance.
          </p>
        </div>
      </section>

      <section className="section-light py-24">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article className="group overflow-hidden rounded-[34px] border border-[var(--color-surface-border)] bg-white/85">
                  <div className="relative h-[380px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.15)_0%,rgba(13,12,10,0.9)_84%)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <div className="flex items-center justify-between gap-4">
                        <Badge variant="inverse">{project.category}</Badge>
                        <span className="text-xs uppercase tracking-[0.18em] text-secondary">{project.location}</span>
                      </div>
                      <h2 className="mt-5 font-serif text-4xl text-foreground">{project.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-secondary">{project.metrics}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark-alt py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Case Study Style Blocks"
            title="Each engagement is designed around a commercial bottleneck."
            description="The exact tactic changes by project, but the framing stays consistent: clarify positioning, improve lead quality, and remove friction from the visit pipeline."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 90}>
                <div className="rounded-[30px] border border-border/80 bg-black/15 p-7">
                  <h3 className="font-serif text-3xl text-foreground">{study.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{study.summary}</p>
                  <p className="mt-8 border-t border-border/80 pt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {study.outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
