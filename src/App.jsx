import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { siteNavigation } from "@/data/site";
import { AppShell } from "@/components/common/app-shell";

const HomePage = lazy(() => import("@/pages/home-page").then((module) => ({ default: module.HomePage })));
const ServiceDetailPage = lazy(() =>
  import("@/pages/service-detail-page").then((module) => ({ default: module.ServiceDetailPage })),
);
const PortfolioPage = lazy(() =>
  import("@/pages/portfolio-page").then((module) => ({ default: module.PortfolioPage })),
);
const PricingPage = lazy(() => import("@/pages/pricing-page").then((module) => ({ default: module.PricingPage })));
const PackagesPage = lazy(() => import("@/pages/packages-page").then((module) => ({ default: module.PackagesPage })));
const AboutPage = lazy(() => import("@/pages/about-page").then((module) => ({ default: module.AboutPage })));
const ContactPage = lazy(() =>
  import("@/pages/contact-page").then((module) => ({ default: module.ContactPage })),
);
const FaqPage = lazy(() =>
  import("@/pages/faq-page").then((module) => ({ default: module.FaqPage })),
);

const PrivacyPolicyPage = lazy(() =>
  import("@/pages/privacy-policy-page").then((module) => ({
    default: module.PrivacyPolicyPage,
  })),
);

const TermsConditionPage = lazy(() =>
  import("@/pages/terms-condition-page").then((module) => ({
    default: module.TermsConditionPage,
  })),
);
function RouteFallback() {
  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center pt-32">
      <div className="flex flex-col items-center gap-4 rounded-[28px] border border-border/80 bg-card/70 px-8 py-10">
        <span className="font-serif text-3xl text-foreground">Lavista</span>
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
          <Route path="/services" element={<Navigate to="/services/real-estate-branding" replace />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/condition" element={<TermsConditionPage />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}

export default App;
