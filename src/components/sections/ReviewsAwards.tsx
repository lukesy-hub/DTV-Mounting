"use client";

import { ArrowUpRight, Quote, Star, Trophy } from "lucide-react";

const reviews = [
  {
    name: "Demarcus",
    text: "He was early, communicated effectively and did an amazing job.",
    service: "TV Installation",
  },
  {
    name: "Candice",
    text: "It looks a 1000% better.",
    service: "TV Mount + Hidden Cords",
  },
  {
    name: "Major George Jr",
    text: "Justice did an awesome job mounting my television. He went above and beyond.",
    service: "TV Mounting",
  },
];

export function ReviewsAwards() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden px-6 py-28 md:py-40"
    >
      {/* Ambient DTV blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12%] top-[18%] h-[500px] w-[500px] rounded-full bg-(--dtv-blue) opacity-[0.045] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
           ===================================================== */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-(--dtv-blue)" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--dtv-blue)">
                Trust & Recognition
              </p>
            </div>

            <h2 className="font-display text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Work that
              <br />
              speaks for itself.
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-7 text-(--foreground-muted)">
              DTV&apos;s reputation is built through completed installations,
              customer feedback and recognition earned over time.
            </p>
          </div>
        </div>

        {/* =====================================================
            TOP PROOF GRID
           ===================================================== */}
        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {/* Review count */}
          <article className="relative overflow-hidden rounded-5xl border border-(--border) bg-(--surface) p-8 md:col-span-5 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-(--dtv-blue) opacity-[0.07] blur-[70px]"
            />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
                Google Reviews
              </p>

              <div className="mt-6 flex items-end gap-4">
                <span className="font-display text-7xl font-semibold leading-none tracking-[-0.07em]">
                  507
                </span>

                <div className="mb-1 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={15}
                      fill="currentColor"
                      className="text-(--dtv-blue)"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-(--foreground-muted)">
                The current DTV Dallas site displays 507 Google reviews.
              </p>
            </div>
          </article>

          {/* Recognition */}
          <article className="relative overflow-hidden rounded-5xl bg-(--dtv-black) p-8 text-white md:col-span-7 md:p-10">
            <div
              aria-hidden="true"
              className="absolute right-[-10%] top-[-35%] h-[450px] w-[450px] rounded-full bg-(--dtv-blue) opacity-[0.22] blur-[100px]"
            />

            <div className="relative flex h-full flex-col justify-between gap-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Trophy size={16} />
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Recognition
                  </p>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  DTV
                </span>
              </div>

              <div>
                <p className="font-display text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  Back-to-
                  <br />
                  Back Winners.
                </p>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                  Recognition highlighted by DTV&apos;s current Georgia web
                  presence.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            REVIEW CARDS
           ===================================================== */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="
                group
                relative
                min-h-82.5
                overflow-hidden
                rounded-5xl
                border
                border-(--border)
                bg-(--surface)
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-(--dtv-blue)
                hover:shadow-[0_30px_80px_rgba(17,24,39,0.10)]
                md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-(--dtv-blue)
                  opacity-0
                  blur-[75px]
                  transition-opacity
                  duration-500
                  group-hover:opacity-[0.08]
                "
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--surface-soft) text-(--dtv-blue)">
                    <Quote size={15} />
                  </span>

                  <span className="font-display text-xs text-(--foreground-muted)">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <p className="max-w-sm font-display text-2xl font-medium leading-[1.08] tracking-[-0.035em]">
                    ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“{review.text}ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â
                  </p>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-(--foreground)">
                        {review.name}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-(--foreground-muted)">
                        {review.service}
                      </p>
                    </div>

                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={11}
                          fill="currentColor"
                          className="text-(--dtv-blue)"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
           ===================================================== */}
        <div className="mt-5 flex flex-col gap-6 rounded-5xl border border-(--border) bg-(--surface-soft) p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-(--foreground-muted)">
              More customer experiences
            </p>

            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em]">
              Explore the full DTV review experience.
            </h3>
          </div>

          <a
            href="#quote"
            className="
              group
              inline-flex
              w-fit
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
            Get a Quote
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
