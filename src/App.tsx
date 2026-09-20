import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { ThemeProvider } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { initSmoothScroll, destroySmoothScroll } from "@/lib/lenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { Home } from "@/pages/Home";

// Everything except Home is code-split so the first paint stays light (Leaflet only loads on location pages).
const page = <T extends string>(loader: () => Promise<Record<T, React.ComponentType>>, name: T) => lazy(() => loader().then((m) => ({ default: m[name] })));
const ServicesIndex = page(() => import("@/pages/ServicesIndex"), "ServicesIndex");
const ServiceDetail = page(() => import("@/pages/ServiceDetail"), "ServiceDetail");
const OurWork = page(() => import("@/pages/OurWork"), "OurWork");
const LocationsPage = page(() => import("@/pages/LocationsPage"), "LocationsPage");
const LocationDetail = page(() => import("@/pages/LocationDetail"), "LocationDetail");
const About = page(() => import("@/pages/About"), "About");
const Faq = page(() => import("@/pages/Faq"), "Faq");
const Contact = page(() => import("@/pages/Contact"), "Contact");
const Quote = page(() => import("@/pages/Quote"), "Quote");
const NotFound = page(() => import("@/pages/NotFound"), "NotFound");

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, [reduced]);

  return (
    <ThemeProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-btn focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
