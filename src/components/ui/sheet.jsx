import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export function SheetOverlay({ className, ...props }) {
  return <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/70 backdrop-blur-sm", className)} {...props} />;
}

export const SheetContent = React.forwardRef(({ className, children, side = "right", ...props }, ref) => {
  const sideStyles = {
    right: "inset-y-0 right-0 h-full w-[88%] max-w-sm border-l",
    left: "inset-y-0 left-0 h-full w-[88%] max-w-sm border-r",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 border-border bg-card/95 p-6 shadow-2xl transition-transform duration-300 data-[state=open]:translate-x-0",
          sideStyles[side],
          className,
        )}
        {...props}
      >
        <VisuallyHidden.Root>
          <DialogPrimitive.Title>Navigation Menu</DialogPrimitive.Title>
        </VisuallyHidden.Root>
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
});

SheetContent.displayName = "SheetContent";
