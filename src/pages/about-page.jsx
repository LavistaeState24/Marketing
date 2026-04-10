import { aboutValues } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/common/reveal";

export function AboutPage() {
  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-shell">
          <Badge>About</Badge>
          <div className="mt-6 grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <div>
              <h3 className="font-serif text-4xl leading-tight text-balance text-surface-light sm:text-4xl lg:text-5xl">
                Lavista was built for real estate brands that need premium trust and measurable demand at the same time.
              </h3>
            </div>
            <div className="flex flex-col gap-6 text-lg leading-8 text-muted-foreground">
              <p>
                We focus only on real estate marketing. That specialization lets us move past generic agency playbooks
                and into the practical realities of inventory cycles, launch windows, local demand, and sales follow-up.
              </p>
              <p>
                Our work blends luxury brand discipline with performance strategy. The goal is simple: stronger buyer
                confidence, cleaner lead flow, more site visits, and better conversion readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark-alt py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[34px]">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
              alt="Premium residential architecture"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="section-eyebrow">Why Lavista</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-balance text-foreground">
              Redefining Real Estate Marketing
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Founded in 2018, Lavista emerged from a simple observation: real estate marketing needed a transformation. Traditional methods were failing to deliver qualified leads, and digital strategies lacked the sophistication that luxury properties demand.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We built Lavista to bridge this gap - combining premium creative with data-driven performance marketing. Our approach has helped over 50 real estate developers generate millions in qualified leads and achieve unprecedented growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Today, we're recognized as a leading real estate marketing agency, trusted by the industry's most prestigious developers to position their brands and drive conversions.
            </p>


          </div>
        </div>
      </section>

      <section className="section-light-alt py-24">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aboutValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="surface-card-light rounded-[30px] p-6">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-surface-foreground">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-surface-copy)]">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}
