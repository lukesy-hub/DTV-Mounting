"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;

      if (!section || !track || !progress) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        let forwardProgress = 0;
        const scrollTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight * 0.45}`,
          pin: true,
          scrub: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onEnter: () => {
            forwardProgress = 0;
            gsap.set(track, { x: 0 });
            gsap.set(progress, { scaleX: 0 });
          },
          onUpdate: (self) => {
            if (self.direction === 1) {
              forwardProgress = Math.max(forwardProgress, self.progress);
            }

            gsap.set(track, { x: -getDistance() * forwardProgress });
            gsap.set(progress, { scaleX: forwardProgress });
          },
          onLeaveBack: () => {
            forwardProgress = 0;
            gsap.set(track, { x: 0 });
            gsap.set(progress, { scaleX: 0 });
          },
        });

        return () => {
          scrollTrigger.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(track, {
          clearProps: "transform",
        });

        gsap.set(progress, {
          scaleX: 1,
        });
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-(--surface-soft)"
    >
      <div className="relative min-h-screen px-6 py-24 md:px-10 md:py-32 lg:h-screen lg:min-h-190 lg:px-10 lg:py-0">
        {/* =====================================================
            BACKGROUND ATMOSPHERE
           ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-32
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-(--dtv-blue)
            opacity-[0.06]
            blur-[110px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-(--dtv-blue)
            opacity-[0.045]
            blur-[120px]
          "
        />

        {/* =====================================================
            DESKTOP CONTENT WRAPPER
           ===================================================== */}

        <div className="relative z-10 lg:flex lg:h-full lg:flex-col lg:justify-between lg:py-20">
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-(--dtv-blue)" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--dtv-blue)">
                  Services
                </p>
              </div>

              <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
                More than
                <br />
                <span className="dtv-gradient-text">a mount.</span>
              </h2>
            </div>

            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-7 text-(--foreground-muted)">
                From mounting and wire management to sound, shelves, gaming
                setups and lighting, DTV&apos;s services cover the complete
                setup around the screen.
              </p>
            </div>
          </div>

          {/* =================================================
              HORIZONTAL TRACK
             ================================================= */}

          <div className="relative mt-14 overflow-visible lg:mt-10">
            <div
              ref={trackRef}
              className="
                flex
                gap-4
                lg:w-max
                lg:flex-nowrap
              "
            >
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    group
                    relative
                    h-[360px]
                    w-[calc(100vw-48px)]
                    shrink-0
                    overflow-hidden
                    rounded-4xl
                    border
                    border-(--border)
                    bg-(--surface)
                    md:w-[360px]
                    lg:h-[360px]
                    lg:w-[390px]
                  "
                >
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1023px) 92vw, 390px"
                    className="
                      object-cover
                      transition-transform
                      duration-1200
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:scale-[1.06]
                    "
                  />

                  {/* Image tone */}
                  <div className="absolute inset-0 bg-black/5 transition-colors duration-700 group-hover:bg-black/15" />

                  {/* Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 md:left-7 md:top-7">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-[10px] font-semibold text-white backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="absolute right-6 top-6 md:right-7 md:top-7">
                    <span className="rounded-full border border-white/20 bg-black/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-xl">
                      {service.label}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-6 bottom-6 md:inset-x-7 md:bottom-7">
                    <h3 className="max-w-[18rem] font-display text-3xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-[25rem] text-sm leading-6 text-white/60">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                        Explore service
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Final CTA card */}
              <article
                className="
                  relative
                  h-[360px]
                  w-[calc(100vw-48px)]
                  shrink-0
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/10
                  bg-(--dtv-black)
                  p-7
                  text-white
                  md:w-[360px]
                  lg:h-[360px]
                  lg:w-[390px]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-24
                    -top-24
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-(--dtv-blue)
                    opacity-25
                    blur-[100px]
                  "
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Next step
                    </span>

                    <MoveRight size={18} className="text-white/40" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Ready to start?
                    </p>

                    <h3 className="mt-4 max-w-sm font-display text-4xl font-semibold leading-[0.9] tracking-[-0.05em]">
                      Tell us what
                      <br />
                      you need.
                    </h3>

                    <a
                      href="/quote"
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-(--dtv-blue)
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-(--dtv-blue-deep)
                      "
                    >
                      Get a Free Quote
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8 lg:mt-6">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
                {services.length} Services
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
                Scroll
              </span>
            </div>

            <div className="mt-3 h-px w-full overflow-hidden bg-(--border)">
              <div
                ref={progressRef}
                className="h-full w-full origin-left scale-x-0 bg-(--dtv-blue)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
