import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Footer } from "@/components/common/footer";
import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { cn } from "@/lib/utils";

function Navbar({ navigation }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled
              ? "border-border bg-card/90 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border-white/10 bg-black/20 backdrop-blur-md",
          )}
        >
          <Link to="/" className="font-serif text-2xl tracking-wide text-foreground">
            Lavista
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">
                Book Strategy Call
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-12 flex flex-col gap-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                        isActive && "text-foreground",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link to="/contact">
                    Book Strategy Call
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function AppShell({ navigation, children }) {
  return (
    <div className="relative min-h-screen">
      <Navbar navigation={navigation} />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
