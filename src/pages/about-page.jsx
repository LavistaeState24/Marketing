import { Badge } from "@/components/ui/badge";
import { TeamSection } from "@/components/about/team-section";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { SiteCtaSection } from "@/components/common/site-cta-section";
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
      <section className="relative flex min-h-[80svh] items-end overflow-hidden">
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
              <h1 className="max-w-3xl font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight text-balance text-foreground">
                {aboutHero.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-md leading-8 text-secondary sm:text-xl">{aboutHero.description}</p>
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
              <div className="mt-4">
                <p className="font-serif text-xl text-[var(--color-surface-foreground)]">
                  {aboutBrandIntro.personName}
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--color-surface-accent)]">
                  {aboutBrandIntro.position}
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutBrandIntro.highlights.map((item) => (
                  <div key={item.title} className="surface-card-light min-h-[100px] rounded-[24px] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-surface-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-surface-copy)]">
                      {item.text}
                    </p>
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
              <SectionHeading
                eyebrow={aboutStory.eyebrow}
                title={aboutStory.title}

                description={aboutStory.description} />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-serif text-xl text-foreground">
                  {aboutStory.personName}
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  {aboutStory.position}
                </p>
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
        <div className="container-shell grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {aboutMissionVision.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="surface-card-light min-h-[430px] rounded-[32px] p-7 sm:p-8">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="size-5 text-[var(--color-surface-accent)]" />
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-surface-accent)]">
                      {item.title}
                    </p>
                  </div>

                  {/* Description */}
                  <h2 className="mt-5 font-serif text-2xl leading-tight text-surface-foreground">
                    {item.description}
                  </h2>

                  {/* Text */}
                  <p className="mt-5 text-base leading-8 text-[var(--color-surface-copy)]">
                    {item.text}
                  </p>

                </div>
              </Reveal>
            );
          })}
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

      <SiteCtaSection image={aboutHero.image} imageAlt={aboutHero.imageAlt} />
    </div>
  );
}
