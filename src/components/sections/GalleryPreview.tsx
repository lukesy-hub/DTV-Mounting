"use client";

import Image from "next/image";
import { ArrowUpRight, Play, MoveUpRight } from "lucide-react";

const galleryItems = [
  {
    src: "/media/installations/fireplace-01.jpg",
    title: "Fireplace Installation",
    location: "DTV Mounting",
    type: "Installation",
    className: "md:col-span-7 md:row-span-2 min-h-155",
  },
  {
    src: "/media/installations/multi-tv-01.jpg",
    title: "Multi-TV Setup",
    location: "DTV Mounting",
    type: "Custom Installation",
    className: "md:col-span-5 min-h-75",
  },
  {
    src: "/media/installations/patio-01.jpeg",
    title: "Outdoor Installation",
    location: "DTV Mounting",
    type: "Installation",
    className: "md:col-span-5 min-h-75",
  },
  {
    src: "/media/installations/fireplace-02.jpg",
    title: "Wall-Mounted Display",
    location: "DTV Mounting",
    type: "TV Mounting",
    className: "md:col-span-4 min-h-105",
  },
  {
    src: "/media/installations/fireplace-03.jpg",
    title: "Finished Room",
    location: "DTV Mounting",
    type: "Wire Management",
    className: "md:col-span-8 min-h-105",
  },
];

export function GalleryPreview() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-(--surface-soft) px-6 py-28 md:py-40"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[12%] h-125 w-125 rounded-full bg-(--dtv-blue) opacity-[0.055] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            SECTION INTRO
           ================================================= */}
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-(--dtv-blue)" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--dtv-blue)">
                Our Work
              </p>
            </div>

            <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Real work.
              <br />
              Real spaces.
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-7 text-(--foreground-muted)">
              A selection of DTV Mounting installations, from clean residential
              setups to larger custom configurations.
            </p>

            <a
              href="#quote"
              className="group mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--foreground) transition-colors duration-300 hover:text-(--dtv-blue)"
            >
              Start your installation
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) transition-all duration-300 group-hover:border-(--dtv-blue) group-hover:bg-(--dtv-blue) group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* =================================================
            MIXED MEDIA GRID
           ================================================= */}
        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.src}-${index}`}
              className={`group relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface) ${item.className}`}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 60vw"
                className="object-cover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.055]"
                priority={index < 2}
              />

              {/* Image tone */}
              <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/15" />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* Top metadata */}
              <div className="absolute inset-x-6 top-6 flex items-center justify-between md:inset-x-7 md:top-7">
                <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl">
                  {item.type}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                  <MoveUpRight size={15} />
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-6 bottom-6 md:inset-x-7 md:bottom-7">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {item.location}
                </p>

                <h3 className="max-w-[18rem] font-display text-2xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}

          {/* =================================================
              FUTURE VIDEO TILE
              This gives the gallery mixed-media structure.
             ================================================= */}
          <article className="group relative min-h-75 overflow-hidden rounded-4xl border border-(--border) bg-(--dtv-black) p-7 text-white md:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-(--dtv-blue) opacity-20 blur-[90px]"
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55 backdrop-blur-xl">
                  Video
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <Play size={14} fill="currentColor" />
                </span>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Coming next
                </p>

                <h3 className="mt-3 max-w-sm font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">
                  Real installation footage.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  We&apos;ll replace this tile with approved DTV installation
                  footage as soon as the client provides the original video
                  assets.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
