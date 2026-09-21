import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { locations } from "@/data/site";

export const metadata = {
  title: "Service Areas | DTV Mounting",
  description: "Find DTV Mounting TV installation service areas.",
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <section className="px-6 pb-28 pt-40 md:px-10 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-(--dtv-blue)">
            Service areas
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            Professional installation, closer to home.
          </h1>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group rounded-4xl border border-(--border) bg-(--surface) p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
                    DTV service area
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-(--dtv-blue) transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <h2 className="mt-16 font-display text-4xl font-semibold tracking-[-0.05em]">
                  {location.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-(--foreground-muted)">
                  {location.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
