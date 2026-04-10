import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[132px] w-full rounded-[24px] border border-input bg-black/10 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/50 focus:ring-2 focus:ring-ring/50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
