import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function GlobalFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-background)] pt-20">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-border pb-14"
        >
          <span className="eyebrow">Get Started</span>
          <h2 className="mt-4 max-w-2xl font-display-serif text-[clamp(2.2rem,5vw,4rem)] text-paper">
            Let's get your TV on the wall.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/quote" className="rounded-full bg-blue px-7 py-4 text-sm font-medium text-white hover:bg-blue-deep">
              Get Free Quote
            </Link>
            <a
              href={`tel:${business.phones.dallas.replace(/[^\d]/g, "")}`}
              className="rounded-full border border-border-strong px-7 py-4 text-sm font-medium text-paper/90 hover:border-silver"
            >
              Call {business.phones.dallas}
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 py-14 text-sm text-paper/60 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <img src={business.logo} alt={business.name} className="h-8 w-auto object-contain" />
            <p className="mt-4 max-w-[220px] text-paper/40">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
          </div>

          <FooterColumn
            title="Navigate"
            links={[
              { label: "Services", to: "/services" },
              { label: "Our Work", to: "/our-work" },
              { label: "Locations", to: "/locations" },
              { label: "About", to: "/about" },
              { label: "FAQ", to: "/faq" },
            ]}
          />

          <FooterColumn
            title="Services"
            links={services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))}
          />

          <FooterColumn
            title="Locations"
            links={locations.map((l) => ({ label: l.city, to: `/locations/${l.slug}` }))}
          />

          <div>
            <h4 className="text-paper/80">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`tel:${business.phones.dallas.replace(/[^\d]/g, "")}`}>Dallas — {business.phones.dallas}</a>
              </li>
              <li>
                <a href={`tel:${business.phones.houston.replace(/[^\d]/g, "")}`}>Houston — {business.phones.houston}</a>
              </li>
              <li>
                <a href={`tel:${business.phones.austinSanAntonio.replace(/[^\d]/g, "")}`}>
                  Austin / San Antonio — {business.phones.austinSanAntonio}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-paper/50">
              <a href={business.socials.facebook} aria-label="Facebook">FB</a>
              <a href={business.socials.instagram} aria-label="Instagram">IG</a>
              <a href={business.socials.tiktok} aria-label="TikTok">TT</a>
              <a href={business.socials.youtube} aria-label="YouTube">YT</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-8 text-xs text-paper/35 sm:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>{business.claims.licensed}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-paper/80">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="hover:text-paper/90">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
