import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Footer } from "@/components/common/footer";
import { FloatingWhatsApp } from "@/components/common/floating-whatsapp";
import { cn } from "@/lib/utils";

function Navbar({ navigation }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled
              ? "border-border bg-card/90 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border-white/10 bg-black/20 backdrop-blur-md",
          )}
        >
          <Link to="/" className="font-serif text-2xl tracking-wide text-foreground">
            Lavista
          </Link>

          <nav className="hidden items-center justify-center gap-5 xl:gap-7 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <NavLink
                    to={item.href}
                    className={() =>
                      cn(
                        "inline-flex items-center gap-1.5 text-md font-medium text-muted-foreground transition-colors hover:text-foreground",
                        location.pathname.startsWith("/services") && "text-foreground",
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </NavLink>

                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2  opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-[24px] border border-border bg-card/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg mt-5">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className={({ isActive }) =>
                            cn(
                              "block rounded-2xl px-4 py-3 text-md font-medium text-muted-foreground transition-all duration-300 hover:bg-white/5 hover:text-foreground",
                              isActive && "bg-primary/10 text-primary",
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-md font-medium text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "text-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="justify-self-end">
            <div className="hidden lg:block">
              <Button asChild>
                <Link to="/contact">
                  Book Strategy Call
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground"
                  >
                    <Menu className="size-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="mt-12 flex flex-col gap-5">
                    {navigation.map((item) =>
                      item.children ? (
                        <div key={item.label} className="rounded-[24px] border border-border/80 bg-black/10 p-2">
                          <button
                            type="button"
                            onClick={() => setMobileServicesOpen((current) => !current)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                              location.pathname.startsWith("/services") && "text-foreground",
                            )}
                          >
                            {item.label}
                            <ChevronDown
                              className={cn("size-4 transition-transform duration-300", mobileServicesOpen && "rotate-180")}
                            />
                          </button>
                          <div
                            className={cn(
                              "grid transition-all duration-300",
                              mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="flex flex-col gap-1 pb-2 pt-1">
                                {item.children.map((child) => (
                                  <SheetClose asChild key={child.href}>
                                    <NavLink
                                      to={child.href}
                                      className={({ isActive }) =>
                                        cn(
                                          "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground",
                                          isActive && "bg-primary/10 text-primary",
                                        )
                                      }
                                    >
                                      {child.label}
                                    </NavLink>
                                  </SheetClose>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild key={item.href}>
                          <NavLink
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
                        </SheetClose>
                      ),
                    )}
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
