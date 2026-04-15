import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TeamSection } from "@/components/about/team-section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import {
  aboutBrandIntro,
  aboutCultureBlocks,
  aboutHero,
  aboutMissionVision,
  aboutStats,
  aboutStory,
  aboutStrengths,
  aboutWorkProcess,
  teamDepartments,
  teamMembers,
} from "@/data/site";

export function AboutPage() {
  return (
    <div>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero.image} alt={aboutHero.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,9,8,0.28)_0%,rgba(10,9,8,0.58)_44%,rgba(10,9,8,0.92)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[92svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">{aboutHero.eyebrow}</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl">
                {aboutHero.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">{aboutHero.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className=" overflow-hidden rounded-[34px] p-3">
              <img
                src={aboutBrandIntro.image}
                alt={aboutBrandIntro.imageAlt}
                className="h-[500px] sm:h-[300px] md:h-[500px] lg:h-[800px] w-full rounded-[26px] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <SectionHeading
                eyebrow={aboutBrandIntro.eyebrow}
                title={aboutBrandIntro.title}
                description={aboutBrandIntro.description}
                tone="light"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutBrandIntro.highlights.map((item) => (
                  <div key={item.title} className="surface-card-light min-h-[100px] rounded-[24px] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-surface-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-surface-copy)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark-alt py-24 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading eyebrow={aboutStory.eyebrow} title={aboutStory.title} description={aboutStory.description} />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[34px]">
              <img src={aboutStory.image} alt={aboutStory.imageAlt} className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-light-alt py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How We Work"
            title="A premium campaign workflow built around quality, movement, and closing readiness."
            description="Each stage is designed to improve how a project is perceived, how leads are filtered, and how the sales team receives demand."
            tone="light"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aboutWorkProcess.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="surface-card-light group h-full min-h-[270px] rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-surface-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-surface-copy)]">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Lavista"
            title="The advantage comes from specialization, local understanding, and a system that respects the sales journey."
            description="Lavista is designed to operate like a real estate growth partner, not a volume-first ad vendor."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aboutStrengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="min-h-[250px] rounded-[28px] border border-border/80 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell grid gap-5 lg:grid-cols-2">
          {aboutMissionVision.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="surface-card-light min-h-[360px] rounded-[32px] p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                  {item.title}
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-surface-foreground">{item.description}</h2>
                <p className="mt-5 text-base leading-8 text-[var(--color-surface-copy)]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-dark-alt py-24 sm:py-28">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutStats.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="min-h-[210px] rounded-[30px] border border-border/80 bg-black/15 p-6">
                  <p className="font-serif text-5xl text-foreground sm:text-6xl">{item.value}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light-alt py-24 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Inside Lavista"
            title="A work culture built around thinking clearly, creating well, and staying accountable to project outcomes."
            description="Instead of generic team profiles, this is how the work actually moves inside Lavista every week."
            tone="light"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutCultureBlocks.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="min-h-[430px] overflow-hidden rounded-[30px] border border-[var(--color-surface-border)] bg-white/80 shadow-[0_20px_40px_rgba(15,12,10,0.06)]">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-3xl text-surface-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-surface-copy)]">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection departments={teamDepartments} members={teamMembers} />

      <section className="section-dark py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-primary/20 bg-[linear-gradient(135deg,#1a1611_0%,#0f0d0b_55%,#16110c_100%)] px-6 py-10 sm:px-10 sm:py-14">
              <div className="absolute inset-0 bg-grid-fade opacity-25" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">Work With Lavista</p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-foreground sm:text-xl lg:text-4xl">
                    If you are building, broking, or launching a project, let&apos;s design a cleaner path from visibility to site visits.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    We bring premium brand thinking, disciplined ad execution, and conversion structure into one real
                    estate growth system.
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
                    <Link to="/portfolio">View Portfolio</Link>
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
