import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { cn } from "@/lib/utils";

function TeamFilters({ activeDepartment, departments, onChange }) {
  const filterRows = [departments.slice(0, 9),];

  return (
    <div className="mt-8 space-y-3">
      {filterRows.map((row, rowIndex) => (
        <div key={rowIndex} className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-3">
            {row.map((department) => {
              const isActive = activeDepartment === department;

              return (
                <button
                  key={department}
                  type="button"
                  onClick={() => onChange(department)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    isActive
                      ? "border-[var(--color-surface-accent)] bg-[var(--color-surface-accent)] text-white shadow-[0_14px_30px_rgba(143,109,62,0.18)]"
                      : "border-[var(--color-surface-border)] bg-white/60 text-[var(--color-surface-copy)] hover:border-[var(--color-surface-accent)] hover:text-surface-foreground",
                  )}
                  aria-pressed={isActive}
                >
                  {department}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamCard({ member, index }) {
  return (
    <Reveal delay={(index % 4) * 70}>
      <article className="surface-card-light group h-full overflow-hidden rounded-[28px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_54px_rgba(15,12,10,0.1)]">
        <div className="h-[300px] sm:h-[300px] md:h-[320px] overflow-hidden bg-[var(--color-surface-muted)]">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="w-full object-contain  overflow-hidden transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-5 sm:p-6">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-[var(--color-surface-accent)]">
            {member.department}
          </span>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-surface-foreground">{member.name}</h3>
          <p className="mt-2 text-sm font-semibold text-[var(--color-surface-copy)]">{member.role}</p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-surface-copy)]">{member.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function TeamSection({ departments, members }) {
  const [activeDepartment, setActiveDepartment] = useState(departments[0] ?? "All");

  const filteredMembers = useMemo(() => {
    if (activeDepartment === "All") {
      return members;
    }

    return members.filter((member) => member.department === activeDepartment);
  }, [activeDepartment, members]);

  return (
    <section className="section-light py-24 sm:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Team"
            description="The people behind Lavista's growth system - from strategy to execution."
            tone="light"
          />
        </div>

        <TeamFilters
          activeDepartment={activeDepartment}
          departments={departments}
          onChange={setActiveDepartment}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMembers.map((member, index) => (
            <TeamCard key={`${member.department}-${member.name}`} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
