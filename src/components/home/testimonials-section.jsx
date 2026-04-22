import { useState } from "react";
import { X } from "lucide-react";
import { experienceInsights } from "@/data/site";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section-dark-alt py-24 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Real Estate Marketing Results"
          title="Proven Real Estate Lead Generation & Campaign Results in Ahmedabad"
          description="We help real estate builders and developers generate high-quality leads, reduce cost per lead, and convert enquiries into actual site visits through Meta Ads, Google Ads, and premium branding strategies."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experienceInsights.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`View ${item.title} full size`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[40px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[120px] lg:h-[150px] lg:h-[150px]"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Click to view full image
              </span>
            </button>
          ))}
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X className="size-5" />
            </Button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
