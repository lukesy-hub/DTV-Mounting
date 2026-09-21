import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { getService, services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service
    ? {
        title: `${service.title} | DTV Mounting`,
        description: service.description,
      }
    : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <section className="px-6 pb-24 pt-40 md:px-10 md:pt-52">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground-muted) hover:text-(--dtv-blue)"
            >
              All services
            </Link>
            <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.25em] text-(--dtv-blue)">
              {service.label}
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              {service.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-(--foreground-muted)">
              {service.description}
            </p>
            <Link
              href="/quote"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-(--dtv-blue) px-6 py-3.5 text-sm font-semibold text-white hover:bg-(--dtv-blue-deep)"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="relative aspect-[1.2] overflow-hidden rounded-5xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-y border-(--border) px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              The approach
            </p>
            <p className="mt-5 text-lg leading-8">{service.detail}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              Typical timing
            </p>
            <p className="mt-5 font-display text-3xl font-semibold">
              {service.duration}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              Ideal for
            </p>
            <p className="mt-5 text-lg leading-8">{service.idealFor}</p>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--dtv-blue)">
            Included in the experience
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {service.included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-(--border) bg-(--surface) p-5"
              >
                <Check size={17} className="text-(--dtv-blue)" />{" "}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
