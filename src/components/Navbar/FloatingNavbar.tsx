import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { business } from "@/data/business";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/our-work" },
  { label: "Locations", to: "/locations" },
  { label: "About", to: "/about" },
];

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{ top: scrolled ? 14 : 22 }}
        animate={{ top: scrolled ? 14 : 22 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="glass-surface relative flex w-[min(1180px,calc(100vw-32px))] items-center justify-between overflow-hidden rounded-full px-3 py-2"
          animate={{
            backgroundColor: scrolled ? "var(--glass-bg-strong)" : "var(--glass-bg)",
            boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,0.35)" : "0 4px 20px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-64 bg-[linear-gradient(90deg,rgba(255,255,255,0.92),rgba(255,255,255,0.28),transparent)]"
          />
          <Link to="/" className="relative z-10 flex items-center gap-2 rounded-full bg-white/25 px-2 py-1 pl-3 shadow-[0_0_24px_rgba(255,255,255,0.28)]">
            <img
              src={business.logo}
              alt={business.name}
              className="h-8 w-auto object-contain"
              loading="eager"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative text-sm text-paper/85 transition-colors hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle color theme"
              onClick={toggle}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-paper/80 transition-colors hover:border-silver sm:flex"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <a
              href={`tel:${business.phones.dallas.replace(/[^\d]/g, "")}`}
              className="hidden text-sm text-paper/80 hover:text-paper md:block"
            >
              {business.phones.dallas}
            </a>
            <Button to="/quote" className="hidden sm:inline-flex">
              Get Free Quote
            </Button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
            >
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { theme, toggle } = useTheme();
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-background)] px-8 pb-10 pt-28"
          initial={{ clipPath: "circle(0% at 90% 5%)" }}
          animate={{ clipPath: "circle(150% at 90% 5%)" }}
          exit={{ clipPath: "circle(0% at 90% 5%)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="absolute right-8 top-8 text-3xl text-paper/70 hover:text-paper"
          >
            ×
          </button>
          <motion.nav variants={container} initial="hidden" animate="show" className="flex flex-1 flex-col justify-center gap-2">
            {NAV_ITEMS.map((navItem) => (
              <motion.div key={navItem.to} variants={item}>
                <Link
                  to={navItem.to}
                  className="block font-display-serif text-5xl text-paper/90 transition-colors hover:text-blue-light"
                >
                  {navItem.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <motion.div variants={item} initial="hidden" animate="show">
            <button
              onClick={toggle}
              className="mb-4 flex w-full items-center justify-center rounded-full border border-border py-3 text-sm text-paper/80"
            >
              {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </button>
            <Link
              to="/quote"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue py-4 text-center text-lg font-medium text-white"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
