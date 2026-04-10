import { useEffect, useState } from "react";

export function PremiumLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
      <div className="flex w-[280px] flex-col items-center gap-5">
        <span className="font-serif text-4xl tracking-[0.16em] text-foreground">Lavista</span>
        <div className="h-px w-full overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left bg-primary" style={{ animation: "lavista-loader-line 1.45s ease forwards" }} />
        </div>
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">Premium real estate marketing</p>
      </div>
    </div>
  );
}
