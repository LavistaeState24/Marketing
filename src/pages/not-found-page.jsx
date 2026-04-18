import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <main className="section-accent flex min-h-screen items-center py-28 sm:py-32">
      <div className="container-shell">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-lg border border-[var(--color-surface-accent)] bg-white text-[var(--color-surface-accent)] shadow-[0_16px_36px_rgba(15,12,10,0.08)] sm:size-20">
            <SearchX className="size-8 sm:size-10" />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-surface-accent)]">
            404 Error
          </p>

          <h1 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-accent">
  Page not found
</h1>

          <p className="mt-5 max-w-4xl text-sm sm:text-base md:text-lg leading-7 text-[var(--color-accent)]">
            The page you are looking for is not available or may have been moved.
          </p>

          <Button asChild className="mt-8 rounded-lg">
            <Link to="/">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
