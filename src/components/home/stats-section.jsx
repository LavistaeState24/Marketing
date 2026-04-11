import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import { stats } from "@/data/site";

function StatCard({ label, value, suffix, active }) {
  const animated = useCountUp(value, active);

  return (
    <div className="surface-card-light min-h-[210px] rounded-[30px] p-6">
      <div className="font-serif text-5xl text-surface-foreground sm:text-6xl">
        {animated.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[var(--color-surface-copy)]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-light py-24 sm:py-28">
      <div className="container-shell">
      <div className="grid gap-5 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} active={isVisible} />
        ))}
      </div>
      </div>
    </section>
  );
}
