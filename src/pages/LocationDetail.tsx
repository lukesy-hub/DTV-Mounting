import { Navigate, useParams } from "react-router-dom";
import { VideoHero } from "@/components/Hero/VideoHero";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { getLocationBySlug } from "@/data/locations";
import { business } from "@/data/business";
import { heroContent } from "@/data/heroContent";
import { LocationMap } from "@/components/Locations/LocationMap";

export function LocationDetail() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug ?? "");

  if (!location) return <Navigate to="/locations" replace />;

  const hero = heroContent.locations;

  return (
    <>
      <VideoHero
        {...hero}
        eyebrow={`${location.city} · ${location.state}`}
        headline={["TV Installation", `in ${location.city}.`]}
        support={`Professional mounting, hidden wires, and complete entertainment setups for homes and businesses across ${location.city}.`}
        showScrollHint={false}
      />

      <section className="container-edge py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Where We Work</span>
            <h2 className="mt-3 font-display-serif text-[clamp(2rem,3.6vw,3rem)] text-paper">
              Completed work around {location.city}.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {location.phone ? (
              <a
                href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                className="inline-flex items-center rounded-full border border-border-strong px-5 py-3 text-sm text-paper hover:border-silver"
              >
                Call {location.phone}
              </a>
            ) : null}
            <a href="/quote" className="inline-flex items-center rounded-full bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-deep">
              Request a quote
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-border bg-surface">
            <LocationMap location={location} />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-border bg-[var(--glass-bg-strong)] px-3 py-2 text-xs text-paper backdrop-blur-md">
              DTV Mounting completed installs
            </div>
          </div>

          <aside className="glass-surface rounded-lg p-7">
            <span className="eyebrow">{location.city}</span>
            <h3 className="mt-3 font-display-serif text-3xl text-paper">Local, careful, ready.</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              From a single TV mount to a full entertainment wall, our licensed and insured crew brings the same finish standard to every local job.
            </p>
            {location.note ? <p className="mt-6 border-t border-border pt-5 text-xs text-muted">{location.note}</p> : null}
            <p className="mt-5 text-xs text-muted">{business.claims.warranty}</p>
          </aside>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
