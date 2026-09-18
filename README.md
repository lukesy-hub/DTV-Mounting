DTV Mounting

Premium TV installation, mounting, and home entertainment experience.

DTV Mounting is a premium, conversion-focused website experience for a professional TV installation company serving multiple markets.

This repository contains the frontend redesign phase of the DTV Mounting website. It is designed to make the brand, services, locations, portfolio, interactions, animations, lead-generation flow, and CRM-ready architecture tangible before final production deployment.

Current phase: Premium frontend redesign
Business source of truth: Existing DTV Mounting website
Primary goal: Build a $5,000+ agency-quality website experience
Lead flow: Frontend forms → CRM
Animation direction: GSAP + ScrollTrigger + Framer Motion + Lenis

Contents

Project vision

What is DTV Mounting

Current website experience

Experience highlights

Design direction

Technology

Project structure

Business data architecture

Hero video system

Animation architecture

Navigation

Footer and locations

Quote and lead system

CRM integration

Local development

Available scripts

Environment variables

Responsive behavior

Accessibility

Performance

SEO

Business information

Data accuracy rules

Future backend readiness

Roadmap

Contributing

License

Project vision

The DTV Mounting website should not feel like a typical local-service template.

The experience is designed around:

Premium presentation

Trust

Strong visual storytelling

Real business information

Cinematic installation footage

Clear service discovery

Fast conversion paths

High-quality motion

Responsive behavior

CRM-connected lead capture

The goal is to make a customer feel that they are dealing with a professional installation company before they ever submit a quote.

Brand personality

DTV Mounting should feel:

Premium but approachable

Professional but modern

Technical but easy to understand

Confident but not loud

Cinematic but practical

Trustworthy

Detail-oriented

Established

Experience promise

Professional TV installation presented with the quality of a premium digital brand.

What is DTV Mounting?

DTV Mounting provides TV mounting and related home entertainment installation services.

The existing business content includes services such as:

Flat TV Mounting

Same Day TV Mounting

Hide TV Wire

Soundbar Installation

TV Dismounting

TV Shelf Mounting

Gaming Console Mounting

LED Strip Light Installation

Fireplace TV Mounting

TV Wall Installation

The website also represents multiple service markets and supporting location pages.

The frontend should present these services through a premium visual system rather than a generic service-card layout.

Current website experience

The redesign should transform the existing business website into a polished agency-level frontend.

Global experience

Floating premium navbar

Official DTV Mounting logo

Book Online CTA

Free Quote CTA

Unique hero for every major page

Business-related hero video

Premium typography

Service storytelling

Portfolio/gallery experience

Before/after presentation

Reviews/social proof

Location discovery

FAQ

Lead-generation form

CRM-ready submission flow

Global premium footer

Responsive mobile navigation

Smooth scrolling

Advanced animation

Prototype philosophy

Business information must remain honest.

The frontend must never pretend that a lead was created, a booking was completed, or a payment was processed unless the underlying service actually confirms it.

Experience highlights

Premium video-first browsing

Every major page should open with a unique business-related video hero.

Static images must not replace the primary hero video when the page is intended to use video.

Hero sections should combine:

Cinematic footage

Strong headline

Supporting copy

Location/service context

Book Online CTA

Free Quote CTA

Controlled motion

Readable overlays

Floating navigation

The global navigation should feel like a premium floating control surface.

Required elements

DTV Logo
Services
Our Work
Locations
About
FAQ
[ Book Online ]
[ Free Quote ]

The official DTV Mounting logo must be used:

https://dtvmountingtx.com/wp-content/uploads/2024/02/DTVHeaderLogo_1-2.webp

Navigation behavior

Floating on top of the page

Sticky while scrolling

Smooth entrance

Compact scroll state

Glass/surface treatment

Strong contrast against video

Correct z-index

Mobile menu

Keyboard accessible

Book Online remains easy to access

The logo must never disappear because of animation, overflow, positioning, or z-index issues.

Book Online

Book Online is a primary business action.

It must appear in:

Desktop navbar

Mobile navigation

Footer

Relevant hero sections

Relevant conversion sections

The actual booking destination must be verified from the existing website.

Do not invent a booking URL.

Use configuration if the final booking endpoint is not yet known:

VITE_BOOKING_URL=

Role of pages

The site should support a clear page architecture.

Recommended routes:

/
├── /services
├── /services/tv-mounting
├── /services/fireplace-tv-mounting
├── /services/tv-wall-installation
├── /services/soundbar-installation
├── /services/hide-tv-wire
├── /services/gaming-console-mounting
├── /our-work
├── /locations
├── /locations/dallas
├── /locations/austin
├── /locations/houston
├── /locations/san-antonio
├── /locations/florida
├── /locations/atlanta
├── /about
├── /faq
├── /contact
└── /quote

Exact routes should be aligned with the final information architecture and existing SEO requirements.

Do not create duplicate or misleading URLs merely for visual purposes.

Hero video system

Every major page gets its own hero treatment.

Hero directions

Page

Suggested visual direction

Home

Premium TV installation / luxury living room

TV Mounting

Technician mounting a television

Fireplace TV

Fireplace TV installation

TV Wall

Multi-screen installation

Soundbar

Soundbar / home theater setup

Wire Hiding

Cable-management installation

Gaming

Gaming room / console setup

Our Work

Installation portfolio montage

Locations

Local service/installation footage

About

Technician craftsmanship

Quote

Premium installation/service footage

Video behavior

Hero videos should support:

autoplay
muted
loop
playsInline
poster fallback
mobile optimization
responsive cropping
graceful failure
reduced-motion behavior

Performance rules

Do not load enormous videos unnecessarily.

Prefer:

compressed video

appropriate resolution

poster image

mobile-specific source where useful

sensible preload strategy

deferred loading below the fold

optimized encoding

If the correct approved video does not exist yet, build the video component so the asset can be plugged in later.

Do not replace the intended video hero with a random image simply to fill the space.

Animation architecture

Motion is a major part of the visual identity.

GSAP

Use GSAP and ScrollTrigger for:

Hero timelines

Scroll reveals

Pinned sections

Horizontal scrolling

Parallax

Scrub animations

Staggered content

Image/video transformations

Progress-based storytelling

Framer Motion

Use Framer Motion for:

Page transitions

Micro-interactions

Drawers

Modals

UI state transitions

Hover interactions

Layout transitions

Lenis

Use Lenis for:

Smooth scrolling

Scroll synchronization

Premium scroll feel

Possible interactions

Hero text reveal
Masked headline
Word/character stagger
Image clip reveal
Video scale
Parallax
Pinned storytelling
Horizontal scroll
Magnetic buttons
Card hover depth
Cursor interactions
Before/after slider
Marquee
Stat counters
Scroll progress
Page transitions

Animation principle

Animation should communicate hierarchy and craftsmanship, not simply exist for decoration.

Avoid excessive animation, constant CPU-heavy effects, layout thrashing, and unnecessary 3D complexity.

Design direction

The visual language combines:

Premium Agency
        +
Swiss Design
        +
Neo-Classical Structure
        +
Bento Grid
        +
Liquid Glass
        +
Cinematic Media
        +
Editorial Typography
        +
Modern Motion

Visual characteristics

Strong grid

Intentional asymmetry

Large typography

Generous whitespace

Refined borders

Controlled shadows

Cinematic imagery/video

Premium dark/light surfaces

Restrained gradients

Clear CTA hierarchy

Avoid

Generic SaaS templates
Cheap-looking cards
Random gradients
Excessive rounded containers
Overused glassmorphism
Template-like hero sections
Visual clutter
Animation for animation's sake

Homepage structure

Recommended flow:

HOME
│
├── Cinematic Video Hero
│   ├── Eyebrow
│   ├── Headline
│   ├── Supporting copy
│   ├── Book Online
│   └── Free Quote
│
├── Trust / Social Proof
│
├── Services
│
├── Featured Installation Story
│
├── Fireplace TV Installation
│
├── TV Wall Installation
│
├── Before / After
│
├── Portfolio / Our Work
│
├── Installation Process
│
├── Reviews
│
├── Locations
│
├── FAQ
│
├── Final CTA
│
└── Global Footer

The homepage should feel like a visual journey, not a list of services.

Services

Service content should be centralized.

Recommended:

src/data/services.ts

Example structure:

{
  slug: string,
  title: string,
  description: string,
  heroVideo: string,
  image?: string,
  benefits: string[],
  relatedServices: string[]
}

Do not fabricate services.

Existing service categories include:

Flat TV Mounting
Same Day TV Mounting
Hide TV Wire
Soundbar Installation
TV Dismounting
TV Shelf Mounting
Gaming Console Mounting
LED Strip Light Installation
Fireplace TV Mounting
TV Wall Installation

Fireplace TV Installation

Dedicated experience for TV installations above fireplaces.

Existing content includes:

Brick

Tile

Stone

Flush mounts

Adjustable-arm mounts

Tilting mounts

Cable management

Wiring

Viewing angle

Professional installation

Use visual storytelling and real installation footage where available.

TV Wall Installation

Dedicated experience for custom multi-TV installations.

Existing content includes:

Four-TV installations

Individual displays

Different screen sizes

Custom configurations

Home theaters

Business displays

Sports rooms

Security displays

Gaming setups

Precise alignment

Secure mounting

Horizontal scroll/pinned storytelling is encouraged where it improves the experience.

Portfolio / Our Work

The gallery should feel editorial and premium.

Possible categories:

All
TV Walls
Fireplace
Hidden Wire
Living Room
Bedroom
Outdoor
Church
Gaming
Commercial

Use:

Mixed media

Image/video cards

Hover previews

Lightbox

Smooth filtering

Scroll reveals

Full-screen media

Before/after content

Never fabricate portfolio projects.

Before / After

Create an interactive transformation experience.

BEFORE  ←──────────●──────────→  AFTER

Support:

Mouse

Touch

Keyboard where practical

Keep the interaction performant and accessible.

Reviews

Use verified/public DTV Mounting review information.

Do not generate fake testimonials.

A review record may contain:

{
  name: string,
  rating: number,
  date: string,
  review: string,
  service?: string
}

Only include fields that are actually verified.

Footer and locations

The footer is a global reusable component.

GlobalFooter
├── Brand
├── Contact
├── Services
├── Locations
├── Social Links
├── Book Online
├── Free Quote
└── Copyright

Six client locations

The existing business presence represented across the client's websites includes six location markets:

Dallas
Austin
Houston
San Antonio
Florida
Atlanta

These must be represented in the global footer.

The exact location labels, destination URLs, phone numbers, and service-area content must be verified against the client's current websites before production.

Location data

Keep the data centralized:

src/data/locations.ts

Example:

export const locations = [
  // verified client location records
];

Then render:

<FooterLocations locations={locations} />

Do not maintain separate hardcoded location lists in different pages.

Quote and lead system

The redesigned quote form must preserve the existing website form's actual fields and behavior.

Before implementation:

Inspect existing form
        ↓
Identify every field
        ↓
Identify every option
        ↓
Required / optional
        ↓
Conditional logic
        ↓
Validation
        ↓
Consent
        ↓
Hidden/source fields
        ↓
Scheduling information
        ↓
Pricing/calculator inputs
        ↓
Submission behavior

Required mapping

Existing Field
      ↓
New Frontend Field
      ↓
CRM Field

Recommended file:

src/data/formSchema.ts

The UI may be completely redesigned.

The business information collected by the form must not be silently removed.

CRM integration

Every frontend query submitted through a form must be sent to the CRM.

Customer
   │
   ▼
Quote / Contact Form
   │
   ▼
Validation
   │
   ▼
leadService
   │
   ▼
CRM API
   │
   ▼
Lead Created
   │
   ▼
Success State

Requirements

Structured CRM payload

Frontend validation

Backend validation

Duplicate-submission prevention

Loading state

Success state

Error state

Retry

Spam protection

UTM tracking

Source/page tracking

Timestamp

CRM confirmation before success state

Do not send the entire form as one giant text field.

CRM service architecture

Keep CRM logic out of visual components.

src/services/
├── crm.ts
└── leadService.ts

Example:

submitLead(payload)

If an existing CRM backend is available, inspect it first.

Do not create duplicate:

lead models

endpoints

databases

authentication systems

CRM records

when an existing implementation already exists.

Environment variables

Create:

.env.example

Example:

VITE_SITE_URL=
VITE_CRM_API_URL=
VITE_BOOKING_URL=

Never commit:

.env
.env.local
.env.production
CRM secrets
API private keys
database credentials
admin tokens

Private credentials must remain server-side.

Project structure

dtv-mounting/
│
├── public/
│   ├── videos/
│   ├── images/
│   ├── logos/
│   └── icons/
│
├── src/
│   ├── components/
│   │   ├── FloatingNavbar/
│   │   ├── VideoHero/
│   │   ├── GlobalFooter/
│   │   ├── ServiceCard/
│   │   ├── Services/
│   │   ├── Gallery/
│   │   ├── BeforeAfter/
│   │   ├── Reviews/
│   │   ├── Locations/
│   │   ├── FAQ/
│   │   ├── QuoteWizard/
│   │   ├── FormField/
│   │   ├── FormProgress/
│   │   └── FormSuccess/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── ServiceDetail/
│   │   ├── OurWork/
│   │   ├── Locations/
│   │   ├── About/
│   │   ├── FAQ/
│   │   ├── Contact/
│   │   └── Quote/
│   │
│   ├── animations/
│   │   ├── heroAnimations.ts
│   │   ├── revealAnimations.ts
│   │   ├── magnetic.ts
│   │   ├── parallax.ts
│   │   ├── pageTransitions.ts
│   │   └── scrollStory.ts
│   │
│   ├── services/
│   │   ├── crm.ts
│   │   └── leadService.ts
│   │
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── data/
│   │   ├── business.ts
│   │   ├── services.ts
│   │   ├── locations.ts
│   │   ├── reviews.ts
│   │   ├── portfolio.ts
│   │   └── formSchema.ts
│   │
│   ├── lib/
│   ├── routes/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── README.md

Business data architecture

Keep business information centralized.

Recommended:

src/data/business.ts
src/data/services.ts
src/data/locations.ts
src/data/reviews.ts
src/data/portfolio.ts
src/data/formSchema.ts

The UI should consume these sources instead of scattering business content throughout components.

This makes the frontend easier to maintain and makes future backend integration safer.

Technology

Core

React

TypeScript

Vite

React DOM

Styling

Tailwind CSS

CSS variables

shadcn/ui where appropriate

Animation

GSAP

ScrollTrigger

Framer Motion

Lenis

UI / utilities

Lucide React

React Router

Architecture

Component-driven React

Data-driven content

Service layer for CRM

Reusable global components

Responsive-first implementation

Avoid adding dependencies unless they provide a clear benefit.

Local development

Requirements

Recommended:

Node.js 20+
npm 10+

Check:

node --version
npm --version

Clone

git clone <your-repository-url>
cd dtv-mounting

Install

npm install

Environment

macOS / Linux:

cp .env.example .env

Windows PowerShell:

Copy-Item .env.example .env

Start development

npm run dev

Vite normally starts at:

http://localhost:5173

Production build

npm run build

Preview production

npm run preview

Available scripts

Command

Description

npm run dev

Start Vite development server

npm run build

Build the production application

npm run lint

Run lint checks

npm run preview

Preview the production build

npm run typecheck

Run TypeScript checks if configured

npm run format

Format source files if configured

Responsive behavior

The website is mobile-first.

Test at minimum:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Desktop

Floating navbar

Large cinematic hero

Multi-column layouts

Horizontal storytelling

Premium footer

Full navigation

Tablet

Flexible grids

Reduced navigation density

Stacked content where necessary

Touch-friendly controls

Mobile

Compact floating navbar

Mobile menu

Video hero optimized for small screens

Stacked CTA

Touch-friendly gallery

Single-column storytelling

Mobile footer

Reduced animation complexity where appropriate

Never allow horizontal overflow.

Accessibility

Implement:

Semantic HTML

Keyboard navigation

Visible focus states

Accessible buttons

Proper form labels

Descriptive alt text

Correct heading hierarchy

Sufficient contrast

Reduced-motion support

Respect:

@media (prefers-reduced-motion: reduce) {
  /* simplify motion */
}

Motion should never prevent users from understanding or using the website.

Performance

The premium design must remain fast.

Prioritize:

LCP
CLS
INP
Video optimization
Image optimization
Code splitting
Lazy loading
Font loading
Animation efficiency

Do not

Load unnecessary 4K video

Animate layout properties unnecessarily

Run infinite expensive JavaScript loops

Load every portfolio asset immediately

Block the page with unnecessary third-party scripts

Prefer

transform
opacity
GPU-friendly animation
lazy loading
responsive media
poster images
code splitting
deferred non-critical assets

SEO

Every public page should have:

Unique title

Unique meta description

Canonical URL where appropriate

Semantic headings

Descriptive alt text

Open Graph metadata

Social metadata

Structured data where appropriate

Clean URLs

Internal linking

Location pages should have unique, useful content and should not simply duplicate another city's page.

Business information

Known public information from the existing DTV Mounting website:

Business:
DTV Mounting

Primary Market:
Texas

Main Address:
15150 Preston Road, STE 300
Dallas, TX 75248

Dallas:
(469) 436-5600

Houston:
(346) 998-4437

San Antonio / Austin:
(737) 377-2980

Website:
dtvmountingtx.com

Published claims include:

TV mounting starting at $49
Same-day TV mounting
10-Year No Fall Guarantee
TV Mounting Price Match Guarantee
100% Satisfaction Guarantee
20+ years experience
15,000+ TVs installed
Fully licensed and insured

These claims should be re-verified before production release.

Data accuracy rules

The existing website is the source of truth.

Information that may require verification:

Exact six location structure
Location URLs
Current review count
Booking URL
Quote calculator logic
Warranty terms
Business hours
Social URLs
License/insurance details
Legal business entity
Service-area spellings
Current pricing

Never fabricate

Reviews
Statistics
Locations
Services
Pricing
Guarantees
Booking URLs
Customer information
Technician information
Business credentials

If something is not verified, use:

TODO
VERIFY
CONFIG

instead of inventing a value.

Future backend readiness

The current frontend should be structured so backend systems can be introduced without redesigning the UI.

Future service modules may include:

src/services/
├── crm.ts
├── leadService.ts
├── bookingService.ts
├── reviewService.ts
├── locationService.ts
└── mediaService.ts

The UI should consume stable frontend-facing functions rather than directly depending on API implementation details.

Example:

submitLead()
getServices()
getLocations()
getReviews()
getPortfolio()
getBookingUrl()

Roadmap

Phase 1 — Premium frontend

Premium visual identity

Official DTV logo

Floating navbar

Book Online CTA

Unique video hero per major page

Global footer

Six verified locations

Services architecture

Portfolio

Before/after

Reviews

FAQ

Responsive design

GSAP animation system

Framer Motion interactions

Lenis smooth scrolling

Phase 2 — Lead generation

Existing form field audit

Redesigned quote form

Field mapping

Validation

CRM integration

Structured lead payload

Spam protection

UTM tracking

Success/error states

Phase 3 — Production hardening

SEO audit

Accessibility audit

Performance audit

Video optimization

Mobile QA

Cross-browser QA

CRM failure testing

Analytics

Production deployment

Contributing

Before making changes:

Preserve the existing business data source of truth.

Reuse global components.

Keep business data centralized.

Avoid duplicating navbar/footer implementations.

Preserve responsive behavior.

Preserve reduced-motion support.

Keep CRM logic inside the service layer.

Do not add fabricated business information.

Keep animation performant.

Test both desktop and mobile.

Before opening a pull request

Run:

npm run lint
npm run build

Also verify:

Desktop
Mobile
Navbar
Book Online
Hero videos
Footer
All six locations
Quote form
CRM submission
Light/dark surfaces if implemented
Reduced motion

Final QA

Navbar

[ ] Official logo visible
[ ] Logo loads
[ ] Floating navbar works
[ ] Book Online visible
[ ] Book Online works
[ ] Free Quote works
[ ] Mobile menu works
[ ] Navbar remains above hero video
[ ] No z-index bugs

Heroes

[ ] Every major page has a unique hero
[ ] Hero primary visual is video
[ ] No accidental static-image hero
[ ] autoplay
[ ] muted
[ ] loop
[ ] playsInline
[ ] poster fallback
[ ] Mobile video works
[ ] Reduced-motion works
[ ] LCP remains healthy

Footer

[ ] Global footer
[ ] All six client locations
[ ] Correct location names
[ ] Correct location links
[ ] Services
[ ] Contact
[ ] Social links
[ ] Book Online
[ ] Free Quote
[ ] Mobile layout

Forms

[ ] Existing fields preserved
[ ] Existing options preserved
[ ] Required fields preserved
[ ] Conditional logic preserved
[ ] Validation works
[ ] Structured CRM payload
[ ] CRM lead creation
[ ] Loading state
[ ] Success state
[ ] Error state
[ ] Retry
[ ] Spam protection
[ ] UTM/source tracking

Responsive

[ ] 320px
[ ] 375px
[ ] 390px
[ ] 430px
[ ] 768px
[ ] 1024px
[ ] 1280px
[ ] 1440px
[ ] 1920px

Definition of done

✓ Premium agency-level design
✓ Official DTV Mounting logo
✓ Floating global navbar
✓ Book Online CTA
✓ Unique video hero for every major page
✓ Shared global footer
✓ All six client locations
✓ Existing quote form fields preserved
✓ CRM-ready lead architecture
✓ Structured CRM payload
✓ GSAP storytelling
✓ Framer Motion interactions
✓ Lenis smooth scrolling
✓ Responsive design
✓ Reduced-motion support
✓ SEO foundation
✓ Accessibility foundation
✓ Performance optimization
✓ No fabricated business information
✓ Production build passes
✓ Final responsive QA passes

Customer journey

DISCOVER
   ↓
TRUST
   ↓
EXPLORE SERVICES
   ↓
SEE REAL INSTALLATIONS
   ↓
CHOOSE LOCATION
   ↓
BOOK ONLINE / GET FREE QUOTE
   ↓
SUBMIT QUERY
   ↓
CRM
   ↓
CONFIRMATION

The website should make this journey feel natural.

Do not force customers through unnecessary steps.

Golden rule

Make it look like a $5,000+ custom agency website — not a template.

Every section should answer at least one question:

Does this improve trust?
Does this improve clarity?
Does this improve conversion?
Does this improve the visual story?

If the answer is no, reconsider the section.

The final website should feel

EXPENSIVE
CONFIDENT
CLEAN
TECHNICAL
PREMIUM
TRUSTWORTHY
MODERN

License

The project license has not yet been selected.

Until a license is added, all rights are reserved by the project owner. Do not reuse, redistribute, or commercially deploy the code, brand assets, or business content without permission.

<div align="center">

DTV Mounting

Professional installation. Premium presentation.

dtvmountingtx.com

</div>
