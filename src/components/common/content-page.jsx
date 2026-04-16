import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/common/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContentPage({ page }) {
  const isAccordion = page.variant === "accordion";

  return (
    <div className="pt-32">
      <section className="section-light py-20 sm:py-24">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <Badge>{page.eyebrow}</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-serif text-xl leading-tight text-surface-foreground sm:text-3xl">
              {page.title}
            </h1>
          </Reveal>

          {page.description ? (
            <Reveal delay={140}>
              <p className="mt-5  max-w-3xl text-md leading-8 text-[var(--color-surface-copy)]">
                {page.description}
              </p>
            </Reveal>
          ) : null}

          {page.updatedAt ? (
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-surface-accent)]">
              {page.updatedAt}
            </p>
          ) : null}

          {isAccordion ? (
            <Accordion className="mt-6">
              {page.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 70}>
                  <AccordionItem>
                    <AccordionTrigger>{section.title}</AccordionTrigger>
                    <AccordionContent>
                      {section.paragraphs?.length ? (
                        <div className="space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          ) : (
            <div className="mt-6 space-y-6">
              {page.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 70}>
                  <article className="surface-card-light rounded-2xl p-4 sm:p-6">
                    <h2 className="font-serif text-lg leading-tight text-surface-foreground">
                      {section.title}
                    </h2>

                    {section.paragraphs?.length ? (
                      <div className="mt-3 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-8 text-[var(--color-surface-copy)]">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {section.items?.length ? (
                      <ul className="mt-3 list-disc space-y-3 pl-5">
                        {section.items.map((item) => (
                          <li key={item} className="text-base leading-7 text-[var(--color-surface-copy)]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
