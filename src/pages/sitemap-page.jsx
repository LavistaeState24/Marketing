import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, FileText, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { sitemapGroups } from "../data/site";

export function SitemapPage() {
  return (
    <main>
      <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
            alt="Modern city skyline representing Lavista website sitemap"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,12,10,0.98)_0%,rgba(13,12,10,0.78)_48%,rgba(13,12,10,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.12)_0%,rgba(13,12,10,0.94)_100%)]" />
        </div>

        <div className="container-shell relative flex min-h-[78svh] w-full flex-col justify-end pb-14 pt-32 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <Badge className="mb-6 w-fit">Sitemap</Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-serif text-2xl leading-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                Find every important page across the Lavista website.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-secondary sm:text-lg">
                Use this page to move quickly between services, pricing, portfolio, company information, and support pages.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light py-24 sm:py-28">
        <div className="container-shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-surface-accent)]">
                  Website Index
                </p>
                <h2 className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-balance text-surface-foreground sm:text-4xl">
                  Service pages, company pages, and resources in one place.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-surface-copy)] sm:text-lg">
                The XML sitemap remains available for search engines. This page is designed for visitors who want a clearer visual path through the website.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {sitemapGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <Reveal key={group.title} delay={index * 80}>
                  <section className="surface-card-light h-full rounded-lg p-6 sm:p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-serif text-2xl leading-tight text-surface-foreground">{group.title}</h3>
                    </div>

                    <div className="mt-7 grid gap-4">
                      {group.links.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="group rounded-lg border border-[var(--color-surface-border)] bg-white/50 p-4 transition-colors duration-300 hover:border-[var(--color-surface-accent)]"
                        >
                          <span className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-surface-foreground">{item.label}</span>
                            <ArrowUpRight className="size-4 shrink-0 text-[var(--color-surface-accent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                          <span className="mt-2 block text-sm leading-6 text-[var(--color-surface-copy)]">
                            {item.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
