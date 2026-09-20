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
- **Layout:** Swiss grid, hairline rules, 10px radius, one soft shadow. No glass, grain or custom cursor.
- **Motion:** one fade-and-rise reveal (`ui/Reveal`), a scroll progress bar, and Lenis smooth scroll. All respect `prefers-reduced-motion`.

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
