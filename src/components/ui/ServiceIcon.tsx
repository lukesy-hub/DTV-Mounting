import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  "flat-tv-mounting": <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  "same-day-tv-mounting": <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  "hide-tv-wire": <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 3v6a3 3 0 0 0 3 3h5" /><circle cx="17.5" cy="12" r="1.2" /></>,
  "soundbar-installation": <><rect x="2" y="9" width="20" height="6" rx="2" /><path d="M8 12h8M5.5 12h.01M18.5 12h.01" /></>,
  "tv-dismounting": <><rect x="3" y="3" width="18" height="11" rx="2" /><path d="M12 17v4M9 18.5l3 2.5 3-2.5" /></>,
  "tv-shelf-mounting": <><rect x="6" y="6" width="12" height="9" rx="1" /><path d="M3 18h18M6 18v3M18 18v3" /></>,
  "gaming-console-mounting": <><path d="M6 8h12a4 4 0 0 1 4 4v2a3 3 0 0 1-5 2l-1-1H8l-1 1a3 3 0 0 1-5-2v-2a4 4 0 0 1 4-4z" /><path d="M8 12h3M9.5 10.5v3M15 12h.01M17 13h.01" /></>,
  "led-strip-light-installation": <><rect x="2" y="16" width="20" height="3.5" rx="1.75" /><path d="M6 12V9M12 12V6M18 12V9" /></>,
};

export function ServiceIcon({ slug, className = "" }: { slug: string; className?: string }) {
  return (
    <span className={`grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand-btn group-hover:text-white ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[slug]}</svg>
    </span>
  );
}
