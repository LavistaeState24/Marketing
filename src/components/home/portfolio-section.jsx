import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioFilters, portfolioProjects } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/common/reveal";

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="section-dark py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Luxury launch presentation with the discipline of a performance team."
          description="The visual language is premium by design, but each touchpoint is still built to move a buyer toward a conversation."
        />

        <Tabs defaultValue="All" value={activeFilter} onValueChange={setActiveFilter} className="mt-10">
          <TabsList>
            {portfolioFilters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
          {portfolioFilters.map((filter) => (
            <TabsContent key={filter} value={filter}>
              <div className="mt-8 grid gap-8  md:grid-cols-2 lg:grid-cols-2">
                {filteredProjects.map((project, index) => (
                  <Reveal key={project.title} delay={index * 90}>
                    <article className="group relative overflow-hidden rounded-[34px] border border-border/80 bg-card">
                      <div className="absolute inset-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.08)_0%,rgba(13,12,10,0.92)_84%)]" />
                      </div>
                      <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <Badge variant="inverse">{project.category}</Badge>
                          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.18em] text-secondary">
                            {project.location}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-primary/90">{project.metrics}</p>
                          <h3 className="mt-4 font-serif text-3xl text-foreground">{project.title}</h3>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-secondary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Reveal className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              See Full Case Studies
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
