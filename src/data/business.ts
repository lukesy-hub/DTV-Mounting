/**
 * Verified DTV Mounting business data.
 * Every field here traces back to the brief. Nothing invented.
 * Two flags are carried as-is from the source site without normalization —
 * see FLAGGED_FOR_VERIFICATION below.
 */

export const business = {
  name: "DTV Mounting",
  officialSite: "https://dtvmountingtx.com/",
  logo: "https://dtvmountingtx.com/wp-content/uploads/2024/02/DTVHeaderLogo_1-2.webp",
  address: {
    line1: "15150 Preston Road, STE 300",
    line2: "Dallas, TX 75248",
  },
  phones: {
    dallas: "(469) 436-5600",
    houston: "(346) 998-4437",
    austinSanAntonio: "(737) 377-2980",
  },
  claims: {
    tvsInstalled: "15,000+ TVs installed",
    experience: "20+ years experience",
    startingPrice: "$49 starting",
    sameDay: "Same-day service",
    warranty: "10-year no-fall warranty",
    priceMatch: "Price match guarantee",
    satisfaction: "100% satisfaction guarantee",
    licensed: "Fully licensed and insured",
  },
  paymentMethods: ["Buy Now Pay Later", "Debit/Credit", "Zelle", "Apple Pay", "Klarna", "Afterpay"],
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
  },
  reviewSummary: {
    label: "Excellent",
    basis: "Based on 507 reviews",
  },
} as const;

/**
 * Flagged directly per the brief (section 56): conflicting or ambiguous
 * source claims that must be confirmed with the client before publishing,
 * not silently resolved or picked between.
 */
export const FLAGGED_FOR_VERIFICATION = [
  {
    field: "service area claim",
    values: ["5 states served", "5-Star Rated Over 3 States"],
    note: "Two different claims appear on the current site — confirm which is accurate before launch.",
  },
  {
    field: "possible spelling issues",
    values: ["Ziker", "Spring Brancj"],
    note: "Carried over verbatim from source content — do not silently normalize; confirm correct spelling.",
  },
] as const;
