import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/sections/Hero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { LocationMap } from "@/components/Locations/LocationMap";
import { Button } from "@/components/ui/Button";
import { Phone } from "@/components/ui/Icons";
import { business } from "@/data/business";
import { getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";
import { tel } from "@/lib/tel";

export function LocationDetail() {
  const { slug } = useParams();
  const loc = getLocationBySlug(slug ?? "");
  usePageMeta(loc ? `TV Installation in ${loc.city}` : "Location", loc ? `Professional TV mounting, hidden wires and entertainment setups in ${loc.city}. ${business.claims.licensed}.` : undefined);
  if (!loc) return <Navigate to="/locations" replace />;

  return (
    <>
      <PageHero eyebrow={`${loc.city} · ${loc.state}`} headline={["TV Installation", `in ${loc.city}.`]}
        support={`Professional mounting, hidden wires, and complete entertainment setups for homes and businesses across ${loc.city}.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Locations", to: "/locations" }, { label: loc.city }]}
        actions={<><Button to="/quote">Request a quote</Button>{loc.phone && <Button href={tel(loc.phone)} variant="outline"><Phone />{loc.phone}</Button>}</>} />
      <section className="container-edge grid gap-8 py-20 lg:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <div className="border-b border-line px-6 py-4"><h2 className="text-lg">Completed work around {loc.city}</h2></div>
          <div className="relative min-h-[460px]"><LocationMap location={loc} /></div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-lg border border-line bg-surface p-7">
            <span className="eyebrow">{loc.city}</span>
            <h3 className="mt-3 text-2xl">Local, careful, ready.</h3>
            <p className="mt-3 text-sm text-muted">From a single TV mount to a full entertainment wall, our licensed and insured crew brings the same finish standard to every local job.</p>
            {loc.note && <p className="mt-5 border-t border-line pt-4 text-xs text-muted">{loc.note}</p>}
            <p className="mt-4 text-xs font-semibold text-muted">{business.claims.warranty}</p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-7">
            <h3 className="text-sm font-extrabold uppercase tracking-[.12em] text-muted">Explore our services</h3>
            <ul className="mt-4 divide-y divide-line">{services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="block py-2.5 text-sm font-semibold hover:text-brand">{s.title}</Link></li>)}</ul>
          </div>
        </aside>
      </section>
      <QuoteCTA />
    </>
  );
}
