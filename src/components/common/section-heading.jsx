import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark", className }) {
  const isLight = tone === "light";

  return (
    <div className={cn("flex flex-col gap-4", align === "center" && " items-start text-start", className)}>
      {eyebrow ? (
        <span className={cn("section-eyebrow", isLight && "text-[var(--color-surface-accent)]")}>{eyebrow}</span>
      ) : null}
      <h2 className={cn("section-heading", isLight && "text-surface-foreground")}>{title}</h2>
      {description ? (
        <p className={cn("section-copy", isLight && "text-[var(--color-surface-copy)]")}>{description}</p>
      ) : null}
    </div>
  );
}
