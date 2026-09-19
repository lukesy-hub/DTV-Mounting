import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ThemeProvider } from "@/hooks/useTheme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  initSmoothScroll,
  destroySmoothScroll,
} from "@/lib/lenis";

import { FloatingNavbar } from "@/components/Navbar/FloatingNavbar";
import { GlobalFooter } from "@/components/Footer/GlobalFooter";
import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { CustomCursor } from "@/components/Cursor/CustomCursor";

import { Home } from "@/pages/Home";
import { ServicesIndex } from "@/pages/ServicesIndex";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { OurWork } from "@/pages/OurWork";
import { LocationsPage } from "@/pages/LocationsPage";
import { LocationDetail } from "@/pages/LocationDetail";
import { About } from "@/pages/About";
import { Faq } from "@/pages/Faq";
import { Contact } from "@/pages/Contact";
import { Quote } from "@/pages/Quote";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    initSmoothScroll();

    return () => {
      destroySmoothScroll();
    };
  }, [reduced]);

  return (
    <ThemeProvider>
      <ScrollToTop />

      <ScrollProgress />
      <CustomCursor />
      <FloatingNavbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<ServicesIndex />}
          />

          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />

          <Route
            path="/our-work"
            element={<OurWork />}
          />

          <Route
            path="/locations"
            element={<LocationsPage />}
          />

          <Route
            path="/locations/:slug"
            element={<LocationDetail />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/faq"
            element={<Faq />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/quote"
            element={<Quote />}
          />
        </Routes>
      </main>

      <GlobalFooter />
    </ThemeProvider>
  );
}