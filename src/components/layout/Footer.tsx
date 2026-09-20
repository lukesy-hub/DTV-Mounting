import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { tel } from "@/lib/tel";

function Col({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h2 className="text-xs font-extrabold uppercase tracking-[.14em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{links.map((l) => <li key={l.label}><Link to={l.to} className="text-on-navy-muted transition-colors hover:text-white">{l.label}</Link></li>)}</ul>
    </div>
  );
}

export function Footer() {
  const phones: [string, string][] = [["Dallas", business.phones.dallas], ["Houston", business.phones.houston], ["Austin / San Antonio", business.phones.austinSanAntonio]];
  return (
    <footer className="on-navy bg-navy pb-16 text-on-navy lg:pb-0">
      <div className="container-edge grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.3fr]">
        <div>
          <span className="inline-flex rounded-lg bg-white px-3 py-2"><img src={business.logo} alt={business.name} className="h-8 w-auto" /></span>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-on-navy-muted">Professional TV mounting and home entertainment installation. {business.claims.licensed}.</p>
          <p className="mt-5 text-sm text-on-navy-muted">{business.address.line1}<br />{business.address.line2}</p>
        </div>
        <Col title="Company" links={[{ label: "Services", to: "/services" }, { label: "Our work", to: "/our-work" }, { label: "Locations", to: "/locations" }, { label: "About", to: "/about" }, { label: "FAQ", to: "/faq" }, { label: "Contact", to: "/contact" }]} />
        <Col title="Services" links={services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))} />
        <Col title="Locations" links={locations.map((l) => ({ label: l.city, to: `/locations/${l.slug}` }))} />
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[.14em] text-white">Call us</h2>
          <ul className="mt-5 space-y-4 text-sm">{phones.map(([n, p]) => <li key={n}><span className="block text-xs text-on-navy-muted">{n}</span><a href={tel(p)} className="text-lg font-bold text-white hover:text-[#9db0ff]">{p}</a></li>)}</ul>
          <p className="mt-6 text-xs leading-relaxed text-on-navy-muted">We accept {business.paymentMethods.join(", ")}.</p>
        </div>
      </div>
      <motion.div aria-hidden initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="container-edge select-none overflow-hidden whitespace-nowrap text-center text-mark font-extrabold leading-[.9] tracking-tighter bg-gradient-to-b from-white/35 to-white/[.04] bg-clip-text text-transparent">DTV MOUNTING</motion.div>
      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-center justify-between gap-3 py-6 text-xs text-on-navy-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span className="flex gap-5">{Object.entries(business.socials).map(([k, v]) => <a key={k} href={v} className="capitalize hover:text-white" rel="noreferrer">{k}</a>)}</span>
        </div>
      </div>
    </footer>
  );
}
