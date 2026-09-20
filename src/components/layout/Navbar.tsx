import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { useTheme } from "@/hooks/useTheme";
import { tel } from "@/lib/tel";
import { Button } from "@/components/ui/Button";
import { Chevron, Close, Menu, Moon, Phone, Sun } from "@/components/ui/Icons";

const LINKS = [{ label: "Our Work", to: "/our-work" }, { label: "About", to: "/about" }, { label: "FAQ", to: "/faq" }, { label: "Contact", to: "/contact" }];
const link = "text-sm font-semibold text-fg transition-colors hover:text-brand";

function Dropdown({ label, to, items }: { label: string; to: string; items: { label: string; to: string }[] }) {
  return (
    <div className="group relative">
      <NavLink to={to} className={({ isActive }) => clsx(link, "inline-flex items-center gap-1 py-6", isActive && "text-brand")}>{label}<Chevron /></NavLink>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-lg border border-line bg-surface p-2 opacity-0 shadow-card transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((i) => <Link key={i.to} to={i.to} className="block rounded px-3 py-2 text-sm font-medium text-fg hover:bg-brand-soft hover:text-brand">{i.label}</Link>)}
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => { const f = () => setScrolled(window.scrollY > 8); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const svc = services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }));
  const loc = locations.map((l) => ({ label: `${l.city}, ${l.state}`, to: `/locations/${l.slug}` }));
  const phones: [string, string][] = [["Dallas", business.phones.dallas], ["Houston", business.phones.houston], ["Austin / San Antonio", business.phones.austinSanAntonio]];

  return (
    <>
      <div className="hidden bg-navy text-on-navy-muted md:block">
        <div className="container-edge flex h-10 items-center justify-between text-xs font-medium">
          <span>{business.claims.licensed} · {business.claims.warranty}</span>
          <div className="flex gap-6">{phones.map(([n, p]) => <a key={n} href={tel(p)} className="hover:text-white">{n} <span className="text-on-navy">{p}</span></a>)}</div>
        </div>
      </div>
      <header className={clsx("sticky top-0 z-50 border-b bg-surface transition-shadow", scrolled ? "border-line shadow-card" : "border-transparent")}>
        <div className="container-edge flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label="DTV Mounting home" className="logo-chip"><img src={business.logo} alt={business.name} className="h-9 w-auto object-contain" /></Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            <Dropdown label="Services" to="/services" items={svc} />
            {LINKS.slice(0, 1).map((l) => <NavLink key={l.to} to={l.to} className={link}>{l.label}</NavLink>)}
            <Dropdown label="Locations" to="/locations" items={loc} />
            {LINKS.slice(1).map((l) => <NavLink key={l.to} to={l.to} className={link}>{l.label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="grid h-10 w-10 place-items-center rounded border border-line text-fg hover:border-line-strong">{theme === "dark" ? <Sun /> : <Moon />}</button>
            <Button to="/quote" className="hidden !h-10 sm:inline-flex">Get a free quote</Button>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded border border-line lg:hidden"><Menu /></button>
          </div>
        </div>
      </header>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] overflow-y-auto bg-surface">
          <div className="container-edge flex h-[72px] items-center justify-between"><span className="logo-chip"><img src={business.logo} alt="" className="h-9 w-auto" /></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded border border-line"><Close /></button></div>
          <nav className="container-edge pb-10 pt-4">
            {[["Services", "/services", svc], ["Locations", "/locations", loc]].map(([label, to, items]) => (
              <details key={label as string} className="border-b border-line py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold">{label as string}<Chevron /></summary>
                <div className="mt-3 grid gap-1 pl-1">
                  <Link to={to as string} className="py-2 text-sm font-bold text-brand">All {(label as string).toLowerCase()}</Link>
                  {(items as { label: string; to: string }[]).map((i) => <Link key={i.to} to={i.to} className="py-2 text-sm text-muted">{i.label}</Link>)}
                </div>
              </details>
            ))}
            {LINKS.map((l) => <Link key={l.to} to={l.to} className="block border-b border-line py-4 text-lg font-bold">{l.label}</Link>)}
            <div className="mt-8 grid gap-3">
              <Button to="/quote" className="w-full">Get a free quote</Button>
              <Button href={tel(business.phones.dallas)} variant="outline" className="w-full"><Phone />Call {business.phones.dallas}</Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
