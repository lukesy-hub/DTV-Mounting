"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section
      id="transformation"
      className="relative overflow-hidden px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
           ===================================================== */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--dtv-blue)]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--dtv-blue)]">
                The Transformation
              </p>
            </div>

            <h2 className="font-display text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              From setup
              <br />
              to finished space.
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-7 text-[var(--foreground-muted)]">
              See the difference a professionally mounted and organized
              entertainment setup can make.
            </p>
          </div>
        </div>

        {/* =====================================================
            COMPARISON STAGE
           ===================================================== */}
        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[#17191e] shadow-[0_35px_100px_rgba(17,24,39,0.12)]">
          {/* ===================================================
              AFTER IMAGE — FULL BASE
             =================================================== */}
          <div className="relative aspect-[16/10] min-h-[500px] overflow-hidden md:aspect-[16/8.5]">
            <Image
              src="/media/hero/dtv-hero-after.png"
              alt="Professionally finished TV installation"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* after image gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

            {/* =================================================
                BEFORE IMAGE
               ================================================= */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{
                width: `${position}%`,
              }}
            >
              <div className="relative h-full w-[100vw] max-w-none md:w-[calc(100vw-3rem)] lg:w-[min(1280px,calc(100vw-5rem))]">
                <Image
                  src="/media/hero/dtv-hero-before.png"
                  alt="TV setup before professional installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              </div>
            </div>

            {/* =================================================
                BEFORE LABEL
               ================================================= */}
            <div className="absolute left-6 top-6 z-20 md:left-8 md:top-8">
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-xl">
                Before
              </span>
            </div>

            {/* =================================================
                AFTER LABEL
               ================================================= */}
            <div className="absolute right-6 top-6 z-20 md:right-8 md:top-8">
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-xl">
                After
              </span>
            </div>

            {/* =================================================
                CENTER DIVIDER
               ================================================= */}
            <div
              className="pointer-events-none absolute inset-y-0 z-30 w-px bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              style={{
                left: `${position}%`,
              }}
            >
              {/* Handle */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/45
                  bg-black/30
                  text-white
                  shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                "
              >
                <ArrowLeftRight size={18} />
              </div>
            </div>

            {/* =================================================
                BOTTOM CONTENT
               ================================================= */}
            <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col gap-5 md:inset-x-8 md:bottom-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  DTV Mounting
                </p>

                <h3 className="mt-2 max-w-xl font-display text-2xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-4xl">
                  The finish changes
                  <br />
                  the entire room.
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 backdrop-blur-xl">
                <MoveHorizontal size={14} className="text-white/65" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/65">
                  Drag to compare
                </span>
              </div>
            </div>

            {/* =================================================
                ACCESSIBLE RANGE CONTROL
               ================================================= */}
            <input
              aria-label="Compare before and after installation"
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => {
                setPosition(Number(event.target.value));
              }}
              className="
                absolute
                inset-0
                z-40
                h-full
                w-full
                cursor-ew-resize
                appearance-none
                opacity-0
              "
            />
          </div>
        </div>

        {/* =====================================================
            SUPPORTING POINTS
           ===================================================== */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--dtv-blue)]">
              01
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">
              Cleaner walls
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              A professionally mounted display creates a more intentional visual
              center for the room.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--dtv-blue)]">
              02
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">
              Better cable management
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              DTV&apos;s wire-hiding service helps reduce visible cable clutter
              around the setup.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--dtv-blue)]">
              03
            </p>

            <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">
              Finished space
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
              The goal is a complete installation that works visually with the
              room around the screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
