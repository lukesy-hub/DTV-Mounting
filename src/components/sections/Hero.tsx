import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/Headline";
import { Check, Phone } from "@/components/ui/Icons";
import { business } from "@/data/business";
import type { HeroContent } from "@/data/heroContent";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { tel } from "@/lib/tel";

const POSTER = "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29.jpg";

/** Still image paints first (LCP). Video, if configured, loads only after idle, on desktop, without save-data or reduced motion. */
function HeroMedia({ videoSrc }: { videoSrc?: string }) {
  const reduced = useReducedMotion();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!videoSrc || reduced || saveData || !window.matchMedia("(min-width: 1024px)").matches) return;
    const id = window.setTimeout(() => setPlay(true), 1500);
    return () => window.clearTimeout(id);
  }, [videoSrc, reduced]);
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface2 shadow-card sm:aspect-[4/3] lg:aspect-[5/6]">
      <img src={POSTER} alt="Television professionally mounted above a fireplace" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      {play && <video src={videoSrc} poster={POSTER} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
      <div className="absolute bottom-5 left-5 rounded bg-surface px-4 py-3 shadow-card">
        <p className="text-2xl font-extrabold leading-none">15,000+</p><p className="mt-1 text-xs font-semibold text-muted">TVs installed</p>
      </div>
      <div className="absolute right-5 top-5 rounded bg-surface px-4 py-3 text-right shadow-card">
        <p className="text-sm font-extrabold leading-none">{business.reviewSummary.label}</p><p className="mt-1 text-xs font-semibold text-muted">{business.reviewSummary.basis}</p>
      </div>
    </div>
  );
}

export function Hero({ eyebrow, headline, support, primaryCta, videoSrc }: HeroContent) {
  const points = [business.claims.startingPrice, business.claims.sameDay, business.claims.warranty];
  return (
    <section className="grid-lines border-b border-line bg-bg">
      <div className="container-edge grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <Headline lines={headline} className="mt-6 text-[clamp(2.5rem,5.6vw,4.6rem)] leading-[1.02]" />
          <p className="mt-6 max-w-xl text-lg text-muted">{support}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={primaryCta.to} className="w-full sm:w-auto">{primaryCta.label}</Button>
            <Button href={tel(business.phones.dallas)} variant="outline" className="w-full sm:w-auto"><Phone />{business.phones.dallas}</Button>
          </div>
          <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-3">
            {points.map((p) => <li key={p} className="flex items-start gap-2 text-sm font-semibold"><Check className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
          </ul>
        </div>
        <HeroMedia videoSrc={videoSrc} />
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, headline, support, crumbs, actions }: { eyebrow: string; headline: string[]; support: string; crumbs?: { label: string; to?: string }[]; actions?: ReactNode }) {
  return (
    <section className="grid-lines border-b border-line bg-bg">
      <div className="container-edge py-14 lg:py-20">
        {crumbs && <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs font-semibold text-muted">{crumbs.map((c, i) => <span key={c.label} className="flex gap-2">{c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link> : <span className="text-fg">{c.label}</span>}{i < crumbs.length - 1 && <span aria-hidden>/</span>}</span>)}</nav>}
        <span className="eyebrow">{eyebrow}</span>
        <Headline lines={headline} className="mt-5 max-w-4xl text-[clamp(2.3rem,5vw,4rem)] leading-[1.04]" />
        <p className="mt-6 max-w-2xl text-lg text-muted">{support}</p>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
