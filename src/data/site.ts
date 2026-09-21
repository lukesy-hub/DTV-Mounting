export type Service = {
  slug: string;
  title: string;
  label: string;
  description: string;
  detail: string;
  image: string;
  duration: string;
  idealFor: string;
  included: string[];
};

export type Location = {
  slug: string;
  name: string;
  description: string;
  serviceNote: string;
};

export const services: Service[] = [
  {
    slug: "flat-tv-mounting",
    title: "Flat TV Mounting",
    label: "CORE INSTALLATION",
    description:
      "A precisely leveled mount designed around your wall, viewing position, and finished room.",
    detail:
      "From choosing the right bracket to the final level check, every installation is planned to make the screen feel native to the room.",
    image: "/media/installations/fireplace-01.jpg",
    duration: "1-2 hours",
    idealFor: "Living rooms, bedrooms, offices, and media walls",
    included: [
      "Wall and viewing-position assessment",
      "Professional mounting hardware",
      "Precision leveling",
      "Post-installation cleanup",
    ],
  },
  {
    slug: "same-day-tv-mounting",
    title: "Same-Day TV Mounting",
    label: "FAST SERVICE",
    description:
      "A faster path to a finished setup when the room is ready now.",
    detail:
      "Share the essentials about your wall and television, and DTV can help move your installation from idea to finished space on a tighter timeline.",
    image: "/media/installations/fireplace-02.jpg",
    duration: "Same-day availability",
    idealFor: "New TVs, move-ins, upgrades, and last-minute room refreshes",
    included: [
      "Rapid project review",
      "Mount selection guidance",
      "Professional installation",
      "Final safety and level check",
    ],
  },
  {
    slug: "hide-tv-wires",
    title: "Hide TV Wires",
    label: "CLEAN FINISH",
    description:
      "Concealed cabling that keeps the attention on the screen and the room.",
    detail:
      "A clean installation is more than hanging the television. Wire routing is considered as part of the architecture so the finished wall feels intentional.",
    image: "/media/installations/fireplace-03.jpg",
    duration: "1-3 hours",
    idealFor:
      "Fireplaces, feature walls, floating consoles, and minimalist rooms",
    included: [
      "Cable-path assessment",
      "Wire concealment planning",
      "Device connection support",
      "Finished-wall inspection",
    ],
  },
  {
    slug: "soundbar-installation",
    title: "Soundbar Installation",
    label: "AUDIO",
    description: "Balanced audio placement that completes the screen setup.",
    detail:
      "The soundbar is mounted and aligned with the screen so the complete entertainment setup feels considered from every seat.",
    image: "/media/installations/patio-01.jpeg",
    duration: "1-2 hours",
    idealFor: "Living rooms, media walls, and upgraded TV setups",
    included: [
      "Soundbar placement",
      "Mounting hardware",
      "Cable routing",
      "Basic connection check",
    ],
  },
  {
    slug: "tv-dismounting",
    title: "TV Dismounting",
    label: "RELOCATION",
    description: "Careful removal for moves, replacements, and room changes.",
    detail:
      "DTV can safely remove an existing television and prepare the space for relocation, replacement, or a new installation plan.",
    image: "/media/installations/multi-tv-01.jpg",
    duration: "30-60 minutes",
    idealFor: "Moves, upgrades, renovations, and replacement projects",
    included: [
      "Safe screen removal",
      "Hardware separation",
      "Cable disconnection",
      "Room-ready handoff",
    ],
  },
];

export const locations: Location[] = [
  {
    slug: "texas",
    name: "Texas",
    description:
      "Professional TV mounting and entertainment setup services across Texas.",
    serviceNote: "Ask about availability in your Texas service area.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    description:
      "Clean, precise TV installation for homes and businesses across Georgia.",
    serviceNote: "Request a Georgia installation estimate.",
  },
  {
    slug: "florida",
    name: "Florida",
    description:
      "Finished TV setups designed for Florida homes, apartments, and outdoor spaces.",
    serviceNote: "Tell us your Florida ZIP code to confirm coverage.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    description:
      "Professional screen mounting and wire management throughout North Carolina.",
    serviceNote: "Share your city for local service availability.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    description:
      "Thoughtful TV installation and complete setup services across South Carolina.",
    serviceNote: "Request current South Carolina availability.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
