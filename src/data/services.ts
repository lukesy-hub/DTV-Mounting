export type Service = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string[];
  heroSupport: string;
  heroCta: string;
};

/** The exact eight services named in the brief — nothing added, nothing removed. */
export const services: Service[] = [
  {
    number: "01",
    slug: "flat-tv-mounting",
    title: "Flat TV Mounting",
    shortDescription: "Secure, level, precisely positioned wall mounting for any flat-screen TV.",
    heroHeadline: ["Put Your TV", "Exactly Where It Belongs."],
    heroSupport: "Professional flat-screen mounting, done cleanly and correctly the first time.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "02",
    slug: "same-day-tv-mounting",
    title: "Same Day TV Mounting",
    shortDescription: "Fast turnaround installation for when you need it done today.",
    heroHeadline: ["Same Day.", "Same Standard."],
    heroSupport: "Fast scheduling without cutting corners on the installation itself.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "03",
    slug: "hide-tv-wire",
    title: "Hide TV Wire",
    shortDescription: "In-wall cable concealment for a clean, cord-free finish.",
    heroHeadline: ["Clean Walls.", "Hidden Wires.", "Better Living."],
    heroSupport: "Cable management that takes a tangle of cords down to a single clean line.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "04",
    slug: "soundbar-installation",
    title: "Soundbar Installation",
    shortDescription: "Soundbar mounting positioned and wired to match your TV setup.",
    heroHeadline: ["Complete The", "Entertainment Setup."],
    heroSupport: "TV, sound, and cable management handled as one cohesive installation.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "05",
    slug: "tv-dismounting",
    title: "TV Dismounting",
    shortDescription: "Careful removal of an existing TV and mount.",
    heroHeadline: ["Taking It Down,", "Done Right Too."],
    heroSupport: "Safe, careful dismounting for moves, upgrades, or repairs.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "06",
    slug: "tv-shelf-mounting",
    title: "TV Shelf Mounting",
    shortDescription: "Shelving installed to support a TV and connected components.",
    heroHeadline: ["A Shelf Built", "For The Setup."],
    heroSupport: "Shelf mounting sized and positioned around your TV and equipment.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "07",
    slug: "gaming-console-mounting",
    title: "Gaming Console Mounting",
    shortDescription: "Console and accessory mounting built around how you actually play.",
    heroHeadline: ["Built For", "How You Play."],
    heroSupport: "Console mounting and cable routing designed around your gaming setup.",
    heroCta: "Get a Free Quote",
  },
  {
    number: "08",
    slug: "led-strip-light-installation",
    title: "LED Strip Light Installation",
    shortDescription: "Accent lighting installed around TVs and entertainment areas.",
    heroHeadline: ["Set The Scene", "Behind The Screen."],
    heroSupport: "LED accent lighting installed cleanly around your entertainment setup.",
    heroCta: "Get a Free Quote",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
