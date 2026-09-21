import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { services } from "@/data/site";

export const metadata = {
  title: "TV Mounting Services | DTV Mounting",
  description:
    "Explore DTV Mounting services for clean, precise TV and entertainment installations.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-(--dtv-blue)">
            The DTV service menu
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            A better finish
            <br />
            for every screen.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-(--foreground-muted)">
            From the mount itself to the details around it, every service is
            designed to make the complete setup feel intentional.
          </p>
        </div>
      </section>
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative min-h-105 overflow-hidden rounded-5xl border border-(--border) bg-(--surface)"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {service.label}
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-none tracking-[-0.04em]">
                    {service.title}
                  </h2>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
