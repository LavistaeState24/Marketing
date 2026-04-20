import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ctaButtons, heroMetrics, trustPillars } from "@/data/site";
import { Reveal } from "@/components/common/reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
          className="hidden h-full w-full object-cover md:block"
        >
          <source src="https://cdn.coverr.co/videos/coverr-city-high-rise-buildings-1561598188901?download=1080p" type="video/mp4" />
        </video>
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury real estate skyline"
          className="h-full w-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,7,0.45)_0%,rgba(9,8,7,0.72)_52%,rgba(9,8,7,0.92)_100%)]" />
      </div>

      <div className="container-shell relative flex min-h-screen flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div className="max-w-4xl">
            <Reveal>
              <Badge className="mb-6 w-fit">Real Estate Marketing Agency</Badge>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl font-serif text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tight text-balance text-foreground">
                Marketing systems that make premium properties feel impossible to ignore.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">
                Lavista helps builders, developers, and brokers drive stronger lead quality, more site visits, and
                cleaner conversion journeys with luxury-first creative and performance strategy.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {ctaButtons.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Button key={item.label} asChild variant={index === 0 ? "default" : "outline"} size="lg">
                      <Link to={item.href}>
                        {item.label}
                        {Icon ? <Icon className="size-4" /> : null}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                {trustPillars.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:justify-self-end">
            <div className="surface-panel gold-stroke rounded-[32px] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary/80">
                    Campaign snapshot
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-foreground">
                    Lead to closing focus
                  </h2>
                </div>

                <a
                  href="https://www.instagram.com/reel/DWWh0X8kvwq/?hl=ens"
                  target="_blank"
                  title="Click to Open Video"
                  rel="noopener noreferrer"
                  aria-label="Open campaign snapshot video"
                  className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition
                  hover:bg-primary/20"
                >
                  <Play className="size-4 fill-current" />
                </a>
              </div>

              <div className="mt-8 grid gap-5">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="border-t border-border/80 pt-5 first:border-t-0 first:pt-0">
                    <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
