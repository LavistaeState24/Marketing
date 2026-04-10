import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { siteNavigation } from "@/data/site";
import { AppShell } from "@/components/common/app-shell";

const HomePage = lazy(() => import("@/pages/home-page").then((module) => ({ default: module.HomePage })));
const ServicesPage = lazy(() =>
  import("@/pages/services-page").then((module) => ({ default: module.ServicesPage })),
);
const PortfolioPage = lazy(() =>
  import("@/pages/portfolio-page").then((module) => ({ default: module.PortfolioPage })),
);
const AboutPage = lazy(() => import("@/pages/about-page").then((module) => ({ default: module.AboutPage })));
const ContactPage = lazy(() =>
  import("@/pages/contact-page").then((module) => ({ default: module.ContactPage })),
);

function RouteFallback() {
  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center pt-32">
      <div className="flex flex-col items-center gap-4 rounded-[28px] border border-border/80 bg-card/70 px-8 py-10">
        <span className="font-serif text-3xl text-foreground">Lavista</span>
        <div className="h-px w-28 overflow-hidden bg-white/10">
          <div className="h-full w-full origin-left bg-primary" style={{ animation: "lavista-loader-line 1.2s ease infinite" }} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppShell navigation={siteNavigation}>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}

export default App;
