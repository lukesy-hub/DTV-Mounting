import { Link } from "react-router-dom";
import { locations } from "@/data/locations";
import { Arrow } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

/** Every row has the same anatomy (name, one-line region, one action) so the list scans evenly. Phone numbers live in the header, footer, contact and city pages. */
export function Locations({ heading = true }: { heading?: boolean }) {
  return (
    <section className="container-edge py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        {heading ? (
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Where we work</span>
            <h2 className="mt-4 text-h2">Six service areas. <span className="serif-em">One standard.</span></h2>
            <p className="mt-5 max-w-md text-muted">Choose your city to see local details, or request a quote for your area.</p>
          </div>
        ) : <h2 className="sr-only">Service areas</h2>}
        <Reveal className={heading ? "" : "lg:col-span-2"}>
          <ul className="border-t border-line">
            {locations.map((l) => {
              const hq = l.note?.startsWith("Headquarters");
              return (
                <li key={l.slug} className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-6 sm:grid-cols-[1.2fr_1fr_auto]">
                  <Link to={`/locations/${l.slug}`} className="min-w-0">
                    <h3 className="flex items-center gap-3 text-2xl transition-colors group-hover:text-brand">{l.city}{hq && <span className="rounded bg-brand-soft px-2 py-0.5 text-xs font-bold text-brand">HQ</span>}</h3>
                    <span className="text-sm text-muted">{l.state !== l.city ? l.state : "Service area"}</span>
                  </Link>
                  <Link to="/quote" className="hidden text-sm font-bold text-brand hover:underline sm:block">Request a quote</Link>
                  <Link to={`/locations/${l.slug}`} aria-label={`${l.city} details`} className="grid h-10 w-10 place-items-center rounded-full border border-line-strong transition group-hover:border-brand group-hover:bg-brand-btn group-hover:text-white"><Arrow /></Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
