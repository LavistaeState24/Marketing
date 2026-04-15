import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { pricingPackageGroups } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

export function PricingPackagesSection({
  groupIds,
  eyebrow = "Packages",
  title = "Premium real estate marketing packages built for visibility, lead quality, and conversion support.",
  description = "Choose the package depth that matches your project stage, campaign urgency, and sales follow-up capacity.",
  tone = "light",
  showPrices = true,
  showPlanDetails = false,
  className,
}) {
  const selectedGroups = groupIds?.length
    ? pricingPackageGroups.filter((group) => groupIds.includes(group.id))
    : pricingPackageGroups;
  const isLight = tone === "light";

  return (
    <section className={cn(isLight ? "section-light-alt" : "section-dark-alt", "py-24 sm:py-28", className)}>
      <div className="container-shell">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} tone={tone} />

        <div className="mt-14 flex flex-col gap-14">
          {selectedGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 80}>
              <div>
                <div className="max-w-3xl">
                  <h2
                    className={cn(
                      "text-2xl font-semibold capitalize tracking-[0.22em]",
                      isLight ? "text-[var(--color-surface-accent)]" : "text-primary/80",
                    )}
                  >
                    {group.title}
                  </h2>
                  <p className={cn("mt-3 text-base leading-7", isLight ? "text-[var(--color-surface-copy)]" : "text-muted-foreground")}>
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                  {group.plans.map((plan, planIndex) => (
                    <Reveal key={`${group.id}-${plan.duration}`} delay={planIndex * 80}>
                      <article
                        className={cn(
                          "relative flex h-full min-h-[430px] flex-col rounded-[30px] p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7",
                          isLight
                            ? "surface-card-light text-surface-foreground"
                            : "border border-border/80 bg-card/75 text-foreground",
                          plan.featured && "ring-2 ring-primary/45",
                        )}
                      >
                        {plan.featured ? (
                          <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                            Featured
                          </span>
                        ) : null}

                        <div>
                          <p
                            className={cn(
                              "text-sm font-semibold uppercase tracking-[0.22em]",
                              isLight ? "text-[var(--color-surface-accent)]" : "text-primary/80",
                            )}
                          >
                            {plan.duration}
                          </p>
                          {showPrices ? (
                            <p className={cn("mt-5 font-serif text-5xl", isLight ? "text-surface-foreground" : "text-foreground")}>
                              {plan.price}
                            </p>
                          ) : null}
                          {showPlanDetails ? (
                            <div className="mt-5 space-y-3">
                              {plan.tag ? (
                                <span className="inline-flex rounded-full border border-primary/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                  {plan.tag}
                                </span>
                              ) : null}
                              {plan.description ? (
                                <p
                                  className={cn(
                                    "text-sm leading-6",
                                    isLight ? "text-[var(--color-surface-copy)]" : "text-muted-foreground",
                                  )}
                                >
                                  {plan.description}
                                </p>
                              ) : null}
                            </div>
                          ) : null}
                        </div>

                        <div className="mt-8 flex flex-1 flex-col gap-4">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex gap-3">
                              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                              <p className={cn("text-sm leading-6", isLight ? "text-[var(--color-surface-copy)]" : "text-muted-foreground")}>
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>

                        {showPlanDetails && plan.result ? (
                          <div
                            className={cn(
                              "mt-6 rounded-[18px] border p-4 text-sm leading-6",
                              isLight
                                ? "border-[var(--color-surface-border)] bg-white/60 text-[var(--color-surface-copy)]"
                                : "border-border/80 bg-black/15 text-muted-foreground",
                            )}
                          >
                            {plan.result}
                          </div>
                        ) : null}

                        <Button asChild className="mt-8 w-full">
                          <Link to="/contact">
                            {plan.cta}
                            <ArrowUpRight className="size-4" />
                          </Link>
                        </Button>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div
            className={cn(
              "rounded-[28px] p-5 text-sm leading-7 sm:p-6",
              isLight
                ? "border border-[var(--color-surface-border)] bg-white/65 text-[var(--color-surface-copy)]"
                : "border border-border/80 bg-black/15 text-muted-foreground",
            )}
          >
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* LEFT NOTE */}
              <div className="rounded-2xl border border-border bg-foreground/50 p-6">
                <p className="leading-relaxed text-sm text-muted-foreground">
                  <span className="font-bold text-primary">Note:</span> Advertising media budget is separate from the package fee.
                  Final scope, shoot requirements, CRM setup, content volume, and reporting cadence can vary based on project stage,
                  city, inventory pressure, and campaign complexity.
                </p>
              </div>

              {/* RIGHT NOTE */}
              <div className="rounded-2xl border border-border bg-foreground/50 p-6">
                <p className="leading-relaxed text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Note:</span> If we are unable to deliver
                  <span className="text-accent font-bold"> 3 client closures</span>,
                  we will continue working
                  <span className="text-accent font-bold"> at no additional cost</span> — including complete Social Media Marketing, Ads, and Campaign Execution —
                  until we you 3 client closures commitment is fulfilled.
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
