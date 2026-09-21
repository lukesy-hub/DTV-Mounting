"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import gsap from "gsap";

const navItems = [
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
];

const serviceItems = [
  ["Flat TV Mounting", "flat-tv-mounting"],
  ["Same-Day TV Mounting", "same-day-tv-mounting"],
  ["Hide TV Wires", "hide-tv-wires"],
  ["Soundbar Installation", "soundbar-installation"],
  ["TV Dismounting", "tv-dismounting"],
] as const;

const locationItems = [
  ["Texas", "texas"],
  ["Georgia", "georgia"],
  ["Florida", "florida"],
  ["North Carolina", "north-carolina"],
  ["South Carolina", "south-carolina"],
] as const;

export function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "services" | "locations" | null
  >(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";
  const servicesActive = pathname.startsWith("/services");
  const locationsActive = pathname.startsWith("/locations");

  const scheduleDropdown = (value: "services" | "locations" | null) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }

    dropdownTimeoutRef.current = setTimeout(
      () => setOpenDropdown(value),
      value ? 140 : 220,
    );
  };

  useEffect(() => {
    const nav = navRef.current;
    const inner = innerRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;

    if (!nav || !inner || !logo || !progress) return;

    const handleScroll = () => {
      const hasScrolled = window.scrollY > 40;
      const hero = document.getElementById("hero");
      const overHero = Boolean(hero && window.scrollY < hero.offsetHeight - 48);

      inner.classList.toggle("navbar-over-hero", overHero);
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      gsap.set(progress, { scaleX: scrollProgress });

      gsap.to(nav, {
        paddingTop: hasScrolled ? 12 : 20,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
      });

      gsap.to(inner, {
        backgroundColor: hasScrolled
          ? "var(--glass-bg)"
          : "rgba(7, 6, 11, 0.58)",
        borderColor: hasScrolled
          ? "var(--glass-border)"
          : "rgba(255,255,255,0.18)",
        boxShadow: hasScrolled
          ? "0 18px 60px rgba(0,0,0,0.16)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: hasScrolled ? "blur(22px) saturate(140%)" : "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
      });

      gsap.to(logo, {
        scale: hasScrolled ? 0.92 : 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const themeIcon = isDark ? (
    <Sun size={16} strokeWidth={1.8} />
  ) : (
    <Moon size={16} strokeWidth={1.8} />
  );

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 md:px-6"
      >
        <div
          ref={innerRef}
          className="
            flex w-full max-w-7xl
            relative
            items-center justify-between
            rounded-full
            border
            px-4 py-3
            transition-colors
            md:px-5
          "
        >
          {/* Logo */}
          <Link href="/" aria-label="DTV Mounting home" className="shrink-0">
            <div ref={logoRef}>
              <Image
                src="/brand/DTVHeaderLogo_1-2.png"
                alt="DTV Mounting"
                width={150}
                height={52}
                priority
                className="h-9 w-auto object-contain md:h-10"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <div
              className="relative"
              onMouseEnter={() => scheduleDropdown("services")}
              onMouseLeave={() => scheduleDropdown(null)}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "services"}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown((value) =>
                    value === "services" ? null : "services",
                  )
                }
                className={`nav-item ${openDropdown === "services" || servicesActive ? "is-active" : ""}`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute left-1/2 top-[calc(100%+1rem)] w-72 -translate-x-1/2 rounded-2xl border border-(--border) bg-(--surface) p-2 shadow-2xl">
                  {serviceItems.map(([label, slug]) => (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-xl px-3 py-2.5 text-xs font-medium text-(--foreground-muted) transition-colors hover:bg-(--surface-soft) hover:text-(--foreground)"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${activeItem === item.label ? "is-active" : ""}`}
                onClick={() => setActiveItem(item.label)}
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => scheduleDropdown("locations")}
              onMouseLeave={() => scheduleDropdown(null)}
            >
              <button
                type="button"
                aria-expanded={openDropdown === "locations"}
                aria-haspopup="true"
                onClick={() =>
                  setOpenDropdown((value) =>
                    value === "locations" ? null : "locations",
                  )
                }
                className={`nav-item ${openDropdown === "locations" || locationsActive ? "is-active" : ""}`}
              >
                Locations
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${openDropdown === "locations" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "locations" && (
                <div className="absolute left-1/2 top-[calc(100%+1rem)] w-56 -translate-x-1/2 rounded-2xl border border-(--border) bg-(--surface) p-2 shadow-2xl">
                  {locationItems.map(([label, slug]) => (
                    <Link
                      key={slug}
                      href={`/locations/${slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-xl px-3 py-2.5 text-xs font-medium text-(--foreground-muted) transition-colors hover:bg-(--surface-soft) hover:text-(--foreground)"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-(--border)
                bg-(--surface)
                text-(--foreground)
                transition-all duration-300
                hover:border-(--dtv-blue)
                hover:text-(--dtv-blue)
              "
            >
              {themeIcon}
            </button>

            <Link
              href="/quote"
              className="
                group
                flex items-center gap-2
                rounded-full
                bg-(--dtv-blue)
                px-5 py-2.5
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:bg-(--dtv-blue-deep)
              "
            >
              Get a Quote
              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-(--border)
              bg-(--surface)
              text-(--foreground)
              sm:hidden
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="pointer-events-none absolute bottom-px left-px right-px z-20 h-px overflow-hidden rounded-full bg-white/20">
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 rounded-full bg-(--dtv-blue) shadow-[inset_0_0_5px_rgba(158,165,255,0.9)]"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            fixed inset-x-4 top-20 z-40
            rounded-3xl
            border border-(--border)
            bg-(--surface)
            p-5
            shadow-2xl
            sm:hidden
          "
        >
          <div className="flex flex-col gap-1">
            <button
              type="button"
              aria-expanded={openDropdown === "services"}
              onClick={() =>
                setOpenDropdown((value) =>
                  value === "services" ? null : "services",
                )
              }
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium text-(--foreground) transition-colors hover:bg-(--surface-soft)"
            >
              Services
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="mb-1 ml-4 border-l border-(--border) pl-3">
                {serviceItems.map(([label, slug]) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    onClick={() => {
                      setOpenDropdown(null);
                      setMenuOpen(false);
                    }}
                    className="block rounded-xl px-3 py-2 text-sm text-(--foreground-muted) hover:bg-(--surface-soft)"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  rounded-2xl
                  px-4 py-3
                  text-base
                  font-medium
                  text-(--foreground)
                  transition-colors
                  hover:bg-(--surface-soft)
                "
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              aria-expanded={openDropdown === "locations"}
              onClick={() =>
                setOpenDropdown((value) =>
                  value === "locations" ? null : "locations",
                )
              }
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium text-(--foreground) transition-colors hover:bg-(--surface-soft)"
            >
              Locations
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${openDropdown === "locations" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "locations" && (
              <div className="mb-1 ml-4 border-l border-(--border) pl-3">
                {locationItems.map(([label, slug]) => (
                  <Link
                    key={slug}
                    href={`/locations/${slug}`}
                    onClick={() => {
                      setOpenDropdown(null);
                      setMenuOpen(false);
                    }}
                    className="block rounded-xl px-3 py-2 text-sm text-(--foreground-muted) hover:bg-(--surface-soft)"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/quote"
            onClick={() => setMenuOpen(false)}
            className="
              mt-4
              flex items-center justify-center
              rounded-full
              bg-(--dtv-blue)
              px-5 py-3
              text-sm font-semibold
              text-white
            "
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
