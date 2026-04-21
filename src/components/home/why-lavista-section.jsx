import { differentiators } from "@/data/site";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function WhyLavistaSection() {
  return (
    <section className="section-dark-alt py-24 sm:py-28">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Lavista"
            title="A Real Estate Marketing System Built for Conversions"
            description="Most agencies stop at lead generation. Lavista builds the full path from first impression to site visit to sales-ready follow-up."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 90}>
                <div className="min-h-[250px] rounded-[28px] border border-border/80 bg-black/15 p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
