<div align="center">

# DTV Mounting

### Premium TV mounting, entertainment walls, and a cinematic local-service experience.

<p>
  <a href="https://dtvmountingtx.com/">Live business website</a>
  ·
  <a href="https://github.com/lukesy-hub/DTV-Mounting">Repository</a>
</p>

</div>

<br />

## The idea

DTV Mounting is a premium React frontend for a professional TV installation company. It turns a traditional local-service website into a confident, editorial-quality digital experience built around:

- cinematic media
- precise service discovery
- local market pages
- proof and reviews
- a frictionless quote journey
- responsive, accessible interaction

The goal is simple: make professional installation feel as considered online as it is on the wall.

## What is inside

### A conversion-focused homepage

The homepage is structured as a complete customer journey rather than a collection of disconnected cards:

1. Video-led hero and clear primary CTA
2. Approach and service positioning
3. Full service discovery
4. Before/after comparison
5. Installation process
6. Google review proof
7. Payment options
8. Reasons to choose DTV
9. Final quote CTA

### Dedicated service experiences

Every service is discoverable from the navbar and has its own route, content, hero treatment, benefits, and quote CTA.

The current eight-service catalog is:

- Flat TV Mounting
- Same Day TV Mounting
- Hide TV Wire
- Soundbar Installation
- TV Dismounting
- TV Shelf Mounting
- Gaming Console Mounting
- LED Strip Light Installation

Service content is centralized in [`src/data/services.ts`](./src/data/services.ts), so cards, dropdowns, detail pages, and navigation stay synchronized.

### Dedicated location experiences

Location pages provide a local briefing, service coverage, phone details where available, a Google Maps embed, and local service highlights.

Current locations:

- Austin
- Houston
- San Antonio
- Dallas
- Florida
- Atlanta

Location content is centralized in [`src/data/locations.ts`](./src/data/locations.ts).

## Experience details

- Local `main_hero.mp4` homepage hero
- Service-specific hero imagery on internal service pages
- Location-specific hero posters with local detail pages
- Compact Services and Locations navbar dropdowns
- Dropdowns that stay outside the navbar layout and do not resize it
- Responsive mobile navigation
- Gallery filters and lightbox viewing
- Interactive before/after comparison
- FAQ accordion
- Quote wizard with draft persistence
- Accessible buttons, labels, focus states, and external links
- Reduced-motion safeguards
- GSAP-powered page and scroll reveals

## Navigation

The app uses clean browser paths for primary content:

```text
/                         Homepage
/services                Services overview
/services/:service       Individual service page
/locations               Locations overview
/locations/:location     Individual location page
/work                     Portfolio and gallery
/about                    About DTV Mounting
/faq                      Frequently asked questions
/contact                  Contact page
```

Legacy hash links are still interpreted for compatibility, while new navigation uses pathname URLs.

## Technology

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Motion | GSAP + ScrollTrigger |
| Styling | Custom CSS design system |
| Validation | TypeScript + Oxlint |
| Lead boundary | Typed frontend service abstraction |

## Project structure

```text
src/
├── App.tsx                  # App shell, routes, navbar, homepage, footer, quote modal
├── App.css                  # Design system, responsive layout, motion-ready styles
├── index.css                # Global typography and base styles
├── assets/
│   └── main_hero.mp4        # Local homepage hero video
├── data/
│   ├── formSchema.ts        # Quote form fields and defaults
│   ├── locations.ts         # Location catalog
│   └── services.ts          # Service catalog
├── pages/
│   ├── ServiceDetail.tsx    # Shared service detail template
│   ├── LocationDetail.tsx   # Shared location detail template
│   ├── services/            # Service page entry files
│   └── locations/           # Location page entry files
└── services/
    └── leadService.ts       # CRM-ready lead submission boundary
```

## Run locally

### Requirements

- Node.js 18+
- npm

### Install and start

```bash
npm install
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

### Available scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Type-check and create a production build
npm run lint      # Run Oxlint
npm run preview   # Preview the production build locally
```

## Quote flow and CRM readiness

The quote wizard is intentionally separated from the visual UI. Form fields live in [`src/data/formSchema.ts`](./src/data/formSchema.ts), while submission behavior lives in [`src/services/leadService.ts`](./src/services/leadService.ts).

To connect a CRM endpoint locally, create a `.env` file:

```env
VITE_CRM_API_URL=https://your-crm.example.com
```

The frontend submits leads to:

```text
${VITE_CRM_API_URL}/api/leads
```

The current repository is a frontend implementation. It does not include a CRM server, database, authentication system, payment processing, or appointment scheduling backend.

## Design principles

### Premium, not noisy

Large typography, restrained color, deliberate whitespace, and cinematic imagery create confidence without visual clutter.

### Content stays honest

Business claims, service coverage, phone numbers, reviews, and pricing should only be published when verified. The interface must never imply that a booking, payment, or CRM lead was completed without a real confirmation.

### Shared data, consistent surfaces

Service and location catalogs are the source of truth for cards, dropdowns, routes, and detail pages. New entries should be added to the data layer rather than duplicated inside components.

### Motion with restraint

GSAP transitions support hierarchy and discovery. Reduced-motion preferences are respected, and motion should never block navigation or content access.

## Responsive behavior

The experience is designed for:

- large desktop screens
- laptops and tablets
- compact mobile devices

The navbar becomes a mobile menu, dropdowns become touch-friendly scrollable panels, service grids collapse into responsive columns, and quote fields become single-column where needed.

## Asset and content notes

- The official DTV Mounting logo is sourced from the existing business website.
- The homepage hero uses the local [`main_hero.mp4`](./src/assets/main_hero.mp4) asset.
- Supporting service and location imagery is defined at the data layer.
- Third-party image and video URLs should be reviewed for production licensing and availability before launch.

## Deployment notes

For a production deployment:

1. configure the CRM API endpoint
2. replace development or placeholder integrations with verified production services
3. confirm image/video licensing and CDN strategy
4. configure SPA fallback rewrites for pathname routes
5. run the build and lint checks
6. test every service, location, footer, dropdown, and quote path

## Quality checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Test desktop and mobile navigation
- [ ] Test Services and Locations dropdowns
- [ ] Test every service route
- [ ] Test every location route
- [ ] Test footer links and open-in-new-tab behavior
- [ ] Test quote validation and error states
- [ ] Verify reduced-motion behavior
- [ ] Verify production media URLs and licensing

## Status

**Frontend redesign:** active  
**CRM backend:** intentionally not included  
**Payment processing:** presentation only  
**Production deployment:** requires final content, integration, and hosting configuration

## License

No open-source license has been selected. Until a license is added, the code, brand assets, copy, and business content remain all rights reserved by the project owner.

<div align="center">

### Professional installation. Premium presentation.

**DTV Mounting · [dtvmountingtx.com](https://dtvmountingtx.com/)**

</div>
