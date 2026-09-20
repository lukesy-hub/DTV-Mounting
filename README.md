# DTV Mounting website

Marketing site for DTV Mounting. React 18, TypeScript, Vite 5, Tailwind 3, Framer Motion, GSAP + Lenis (smooth scroll), Leaflet (location maps).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

Copy `.env.example` to `.env` and set `VITE_CRM_API_URL` to send leads to the CRM (`POST /api/leads`). Without it, forms use a mock and send nothing.

## Design system

- **Light first, dark as a designed variant.** Tokens live in `src/styles/tokens.css`; Tailwind reads them in `tailwind.config.ts`. Brand blue `#2645e0`.
- **Fonts (approved list only):** Manrope for all UI and headings; Source Serif 4 for the italic accent line in headlines, large numerals and quotes. Both are self-hosted through `@fontsource-variable`, so there is no external font request.
- **Type scale (9 sizes, defined once in `tailwind.config.ts`):** 13 (`text-xs`, the minimum), 14, 16, 18, 20, 24, plus fluid `text-h2` (all section headings, stats, statement), `text-h1` (inner-page heroes), `text-display` (home hero, marquee, rating) and `text-mark` (decorative footer wordmark). Do not add `text-[...]` sizes; add a token instead. All-caps is reserved for short labels (footer column titles); eyebrows are sentence case.
- **Headings:** one `h1` per page, then `h2` sections, `h3` items. Footer column titles are `h2` so the outline never skips.
- **Layout:** Swiss grid, hairline rules, 10px radius, one soft shadow. No glass, grain or custom cursor.
- **Motion (all respect `prefers-reduced-motion`, via `MotionConfig` plus per-component checks):**
  - Hero headline rises out of a mask line by line; the hero photo sits in a TV frame that tilts toward the cursor, "switches on" at load, and floats its stat chips. The grid lights up around the cursor.
  - Stats count up on first view; the final value is always exposed to screen readers.
  - Scroll-linked: a word-by-word statement, an install-steps progress line with masked image reveals, a drawn process timeline, and a scroll progress bar.
  - Interactive: a drag-to-compare before/after slider (illustration), service-card cursor spotlight, button shine, a pausable city marquee, and a mobile call/quote bar.
  - Route changes fade in. Lenis provides smooth scroll.

## Structure

```
src/components/layout     Navbar (utility bar, Services/Locations dropdowns, mobile menu), Footer
src/components/sections   Hero, PageHero, TrustBar, Services, InstallSteps, Gallery, Process, Reviews, Locations, QuoteCTA
src/components/ui         Button, Field (TextField, Chip, Consent), Headline, Reveal, SectionHead, Icons
src/pages                 One file per route; all except Home are code-split
src/data                  business, services, locations, faqs, heroContent, formSchema (source of truth for the lead payload)
src/services/leadService  submitWebsiteLead(): the only place that talks to the CRM
```

## Notes

- Home hero paints a still image first. If `heroContent.home.videoSrc` is set, the video loads only after idle, on desktop, without save-data or reduced motion. Use a compressed 1080p file rather than the current 4K stock URL.
- `src/assets/main_hero.mp4` (79 MB) is not referenced anywhere and is not included in this package.
- Reviews show only the verified aggregate rating. Add individual reviews in `sections/Reviews.tsx` once they are supplied.
- Still to confirm with the client before launch: the "5 states" vs "3 states" service-area claim and the spellings flagged in `data/business.ts`.
