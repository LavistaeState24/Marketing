import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[0_12px_30px_rgba(212,180,131,0.18)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-surface",
        outline:
          "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/5",
        ghost: "text-foreground hover:bg-white/5",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs tracking-[0.2em] uppercase",
        lg: "h-12 px-6",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };
