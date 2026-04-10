import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-input bg-black/10 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/80 focus:border-primary/50 focus:ring-2 focus:ring-ring/50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
