import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

export function ProcessSection() {
  return (
    <section className="section-light-alt py-24 text-surface-foreground sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Process"
          title="A funnel built to move from strategy to signed intent."
          description="Each stage is connected. Creative is informed by media. Media is informed by sales. Sales is informed by source and buyer temperature."
          tone="light"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="surface-card-light min-h-[250px] rounded-[28px] p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-surface-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-serif text-3xl text-surface-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--color-surface-copy)]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
