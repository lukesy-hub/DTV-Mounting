import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { getLocation, locations } from "@/data/site";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  return location
    ? {
        title: `TV Mounting in ${location.name} | DTV Mounting`,
        description: location.description,
      }
    : {};
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <section className="px-6 pb-28 pt-40 md:px-10 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/locations"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground-muted) hover:text-(--dtv-blue)"
          >
            All service areas
          </Link>
          <p className="mt-16 text-[11px] font-semibold uppercase tracking-[0.25em] text-(--dtv-blue)">
            DTV Mounting in {location.name}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            A finished setup for your {location.name} home.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-(--foreground-muted)">
            {location.description}
          </p>
          <p className="mt-4 text-sm text-(--foreground-muted)">
            {location.serviceNote}
          </p>
          <Link
            href="/quote"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-(--dtv-blue) px-6 py-3.5 text-sm font-semibold text-white hover:bg-(--dtv-blue-deep)"
          >
            Request an estimate <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
