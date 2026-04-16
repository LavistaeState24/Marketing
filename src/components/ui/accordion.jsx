import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ className, children, ...props }) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}

export function AccordionItem({ className, children, ...props }) {
  return (
    <details
      className={cn(
        "group surface-card-light rounded-lg p-4 transition-all duration-300 open:bg-white/90 sm:p-6",
        className,
      )}
      {...props}
    >
      {children}
    </details>
  );
}

export function AccordionTrigger({ className, children, ...props }) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base leading-tight text-surface-foreground marker:hidden [&::-webkit-details-marker]:hidden sm:text-xl",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="size-5 shrink-0 text-[var(--color-surface-accent)] transition-transform duration-300 group-open:rotate-180" />
    </summary>
  );
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <div className={cn("mt-4 text-sm leading-8 text-[var(--color-surface-copy)] sm:text-base", className)} {...props}>
      {children}
    </div>
  );
}
