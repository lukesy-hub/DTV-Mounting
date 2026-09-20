import { locations } from "@/data/locations";

const row = (hidden: boolean) => (
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
    {locations.map((l) => (
      <li key={l.slug} className="flex items-center gap-10 text-display font-extrabold leading-none tracking-tight text-line-strong">
        {l.city}<svg viewBox="0 0 24 24" className="h-[.4em] w-[.4em] shrink-0 fill-brand" aria-hidden><path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12z" /></svg>
      </li>
    ))}
  </ul>
);

/** Slow, pausable ticker of service areas. Purely decorative, hidden from assistive tech. */
export function Marquee() {
  return <div aria-hidden className="overflow-hidden border-b border-line bg-bg py-8"><div className="flex w-max hover:[animation-play-state:paused] [&>ul]:hover:[animation-play-state:paused]">{row(false)}{row(true)}</div></div>;
}
