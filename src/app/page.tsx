import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ReviewsAwards } from "@/components/sections/ReviewsAwards";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuoteSection } from "@/components/sections/QuoteSection";

const locations = [
  "Texas",
  "Georgia",
  "Florida",
  "North Carolina",
  "South Carolina",
];

export default function Home() {
  return (
    <main className="chromatic-field min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* =====================================================
          NAVBAR
         ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
          KEEPING YOUR CURRENT HERO UNTOUCHED
         ===================================================== */}
      <Hero />

      {/* =====================================================
          TRUST
         ===================================================== */}
      <section id="about" className="relative px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--dtv-blue)]">
              The DTV Difference
            </p>

            <h2 className="section-heading">
              Professional by design.
              <br />
              Precise by nature.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            {/* Large stat */}
            <article className="dtv-glass relative overflow-hidden rounded-[2rem] p-8 md:col-span-7 md:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--dtv-blue)] opacity-[0.07] blur-[80px]"
              />

              <p className="text-sm text-[var(--foreground-muted)]">
                TVs installed
              </p>

              <p className="mt-6 font-display text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[-0.07em]">
                15,000+
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--foreground-muted)]">
                TVs installed across DTV Mounting&apos;s current multi-state
                service footprint.
              </p>
            </article>

            {/* Warranty */}
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-5 md:p-10">
              <p className="text-sm text-[var(--foreground-muted)]">Warranty</p>

              <p className="mt-6 font-display text-6xl font-semibold tracking-[-0.06em]">
                10
              </p>

              <p className="mt-1 font-display text-3xl font-medium tracking-[-0.03em] text-[var(--dtv-blue)]">
                years
              </p>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--foreground-muted)]">
                DTV&apos;s existing no-fall warranty proposition.
              </p>
            </article>

            {/* Same day */}
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-4">
              <p className="text-sm text-[var(--foreground-muted)]">
                Availability
              </p>

              <h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.045em]">
                Same-day
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                Same-day TV mounting is one of DTV&apos;s current core offers.
              </p>
            </article>

            {/* Finish */}
            <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-8 md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    The finish
                  </p>

                  <h3 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-5xl">
                    The goal isn&apos;t simply
                    <br />
                    to mount the TV.
                  </h3>
                </div>

                <p className="max-w-xs text-sm leading-7 text-[var(--foreground-muted)]">
                  It&apos;s to make the entire setup feel intentional.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
         ===================================================== */}
      <ServicesSection />

      <ProcessSection />

      {/* =====================================================
          BEFORE / AFTER
         ===================================================== */}
      <BeforeAfter />

      {/* =====================================================
          REAL DTV GALLERY
         ===================================================== */}
      <GalleryPreview />

      {/* =====================================================
          REVIEWS + AWARDS
         ===================================================== */}
      <ReviewsAwards />

      {/* =====================================================
          LOCATIONS
         ===================================================== */}
      <section
        id="locations"
        className="bg-[var(--dtv-black)] px-6 py-28 text-white md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Locations
              </p>

              <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
                DTV
                <br />
                near you.
              </h2>
            </div>

            <div className="md:col-span-5">
              <p className="max-w-md text-sm leading-7 text-white/50">
                Explore the current DTV Mounting service footprint and enter the
                location experience from here.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65 backdrop-blur-md"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE CTA
         ===================================================== */}
      <QuoteSection />
    </main>
  );
}
