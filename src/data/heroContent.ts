export type HeroContent = {
  pageType: string;
  eyebrow: string;
  headline: string[];
  support: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  poster?: string;
  videoSrc?: string;
  align: "left" | "center";
};

/**
 * One entry per major page. Swap `poster` for a real frame grab and drop a
 * matching /public/video/<pageType>.mp4 in — VideoHero will pick it up.
 * Until real footage exists, each page gets its own gradient + grain
 * treatment so the hero still feels distinct rather than a stand-in.
 */
export const heroContent: Record<string, HeroContent> = {
  home: {
    pageType: "home",
    eyebrow: "Texas · TV Installation",
    headline: ["Professional TV", "Installation.", "Done Right."],
    support:
      "Flat mounts, fireplace installs, TV walls, and hidden wiring — installed cleanly by a licensed, insured crew across Texas.",
    primaryCta: { label: "Get Your Free Quote", to: "/quote" },
    secondaryCta: { label: "Call (469) 436-5600", to: "tel:4694365600" },
    videoSrc: "https://videos.pexels.com/video-files/15344741/15344741-uhd_3840_2160_60fps.mp4",
    align: "left",
  },
  services: {
    pageType: "services",
    eyebrow: "What We Do",
    headline: ["More Than", "Just TV Mounting."],
    support: "Eight dedicated services, one standard of finish — from a single flat mount to a complete entertainment setup.",
    primaryCta: { label: "Explore Services", to: "#services" },
    poster: "/media/services-poster.jpg",
    align: "left",
  },
  "our-work": {
    pageType: "our-work",
    eyebrow: "Our Work",
    headline: ["Installed With", "Precision."],
    support: "A look at real DTV Mounting installations across Texas homes and businesses.",
    primaryCta: { label: "View Our Work", to: "#gallery" },
    poster: "/media/work-poster.jpg",
    align: "center",
  },
  locations: {
    pageType: "locations",
    eyebrow: "Where We Work",
    headline: ["Professional TV Installation", "Across Texas."],
    support: "Serving Dallas, Houston, Austin, San Antonio, Florida, and Atlanta with the same licensed, insured standard.",
    primaryCta: { label: "Get a Free Quote", to: "/quote" },
    poster: "/media/locations-poster.jpg",
    align: "left",
  },
  quote: {
    pageType: "quote",
    eyebrow: "Get Started",
    headline: ["Let's Get Your", "TV On The Wall."],
    support: "Tell us what you're installing and we'll help you get started.",
    primaryCta: { label: "Start Your Quote", to: "#wizard" },
    poster: "/media/quote-poster.jpg",
    align: "left",
  },
  about: {
    pageType: "about",
    eyebrow: "About DTV Mounting",
    headline: ["Experience", "Matters."],
    support: "20+ years of experience and 15,000+ TVs installed, backed by a 10-year no-fall warranty.",
    primaryCta: { label: "Get a Free Quote", to: "/quote" },
    poster: "/media/about-poster.jpg",
    align: "left",
  },
  faq: {
    pageType: "faq",
    eyebrow: "FAQ",
    headline: ["Questions?", "We've Got You Covered."],
    support: "Straight answers about pricing, scheduling, and what to expect on installation day.",
    primaryCta: { label: "Get a Free Quote", to: "/quote" },
    poster: "/media/faq-poster.jpg",
    align: "center",
  },
  contact: {
    pageType: "contact",
    eyebrow: "Contact",
    headline: ["Let's Talk About", "Your Setup."],
    support: "Call your local team or send us a few details and we'll follow up.",
    primaryCta: { label: "Get a Free Quote", to: "/quote" },
    secondaryCta: { label: "Call (469) 436-5600", to: "tel:4694365600" },
    poster: "/media/contact-poster.jpg",
    align: "left",
  },
};
