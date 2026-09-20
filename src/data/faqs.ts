import { business } from "@/data/business";

export const faqs = [
  { q: "How much does TV mounting cost?", a: `Pricing ${business.claims.startingPrice.toLowerCase()}, with the exact quote depending on your TV, wall, and any add-ons like wire concealment.` },
  { q: "Do you offer same-day installation?", a: `Yes — ${business.claims.sameDay.toLowerCase()} is available.` },
  { q: "Are you licensed and insured?", a: business.claims.licensed },
  { q: "What warranty comes with the installation?", a: `Every installation is backed by a ${business.claims.warranty.toLowerCase()}.` },
  { q: "What if I find a lower price elsewhere?", a: business.claims.priceMatch },
  { q: "What payment methods do you accept?", a: `We accept ${business.paymentMethods.join(", ")}.` },
  { q: "Where do you offer service?", a: "Dallas, Houston, Austin, San Antonio, Florida, and Atlanta." },
];
