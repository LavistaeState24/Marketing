import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { experienceInsights } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/section-heading";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="section-dark-alt py-24 sm:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Market Experience"
            title="Built from Real Experience Across Real Estate Projects"
            description="Our approach is shaped by hands-on work in branding, campaign execution, lead quality improvement, and buyer-focused communication systems."
          />
          <div className="flex gap-3">
            <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollPrev()}>
              <ChevronLeft className="size-4" />
            </Button>
            <Button type="button" variant="outline" size="icon" onClick={() => emblaApi?.scrollNext()}>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {experienceInsights.map((item) => (
              <div key={item.title} className="min-w-0 flex-[0_0_100%] pl-0 md:flex-[0_0_50%] md:pl-5">
                <div className="h-full min-h-[330px] rounded-[32px] border border-border/80 bg-card/85 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
                  <Quote className="size-8 text-primary" />
                  <p className="mt-6 text-lg leading-8 text-foreground">{item.quote}</p>
                  <div className="mt-8">
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
