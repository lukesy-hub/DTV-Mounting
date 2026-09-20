import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Phone } from "@/components/ui/Icons";
import { business } from "@/data/business";
import type { HeroContent } from "@/data/heroContent";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { tel } from "@/lib/tel";

const POSTER = "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29.jpg";
const glow = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/**
 * The hero photo sits inside a real-looking TV: bezel, glare, power LED. It tilts toward the cursor and "switches on" at load.
 * The still image paints first (LCP). Video, if configured, loads only after idle, on desktop, without save-data or reduced motion.
 */
function TvFrame({ videoSrc }: { videoSrc?: string }) {
  const reduced = useReducedMotion();
  const [play, setPlay] = useState(false);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 110, damping: 16 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 110, damping: 16 });

  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!videoSrc || reduced || saveData || !window.matchMedia("(min-width: 1024px)").matches) return;
    const id = window.setTimeout(() => setPlay(true), 1500);
    return () => window.clearTimeout(id);
  }, [videoSrc, reduced]);

  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div style={{ perspective: 1400 }} onMouseMove={move} onMouseLeave={() => { mx.set(0); my.set(0); }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div className="rounded-[22px] bg-[#0a0d14] p-2.5 shadow-[0_50px_90px_-40px_rgba(11,16,32,.7),inset_0_0_0_1px_rgba(255,255,255,.07)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-gradient-to-br from-[#274bd6] via-[#101e52] to-[#4a2f86]">
            <img src={POSTER} alt="Television professionally mounted above a fireplace" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            {play && <video src={videoSrc} poster={POSTER} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
            <motion.div aria-hidden className="absolute inset-0 bg-black" initial={{ opacity: reduced ? 0 : 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }} />
          </div>
          <span aria-hidden className="mx-auto mt-2 block h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,.7)]" />
        </div>
        <div style={{ transform: "translateZ(70px)" }} className="absolute -bottom-5 left-3 lg:-left-8"><div className="animate-float rounded bg-surface px-4 py-3 shadow-card"><p className="text-2xl font-extrabold leading-none">15,000+</p><p className="mt-1 text-xs font-semibold text-muted">TVs installed</p></div></div>
        <div style={{ transform: "translateZ(50px)" }} className="absolute -top-5 right-3 lg:-right-6"><div className="animate-float rounded bg-surface px-4 py-3 text-right shadow-card [animation-delay:-3s]"><p className="text-sm font-extrabold leading-none">{business.reviewSummary.label}</p><p className="mt-1 text-xs font-semibold text-muted">{business.reviewSummary.basis}</p></div></div>
      </motion.div>
    </div>
  );
}

export function Hero({ eyebrow, headline, support, primaryCta, videoSrc }: HeroContent) {
  const points = [business.claims.startingPrice, business.claims.sameDay, business.claims.warranty];
  return (
    <section onMouseMove={glow} className="grid-lines relative overflow-hidden border-b border-line bg-bg">
      <div className="grid-glow" aria-hidden />
      <div className="container-edge relative z-10 grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-20">
        <div>
          <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
          <Headline lines={headline} className="mt-6 text-display" />
          <Reveal delay={0.45}><p className="mt-6 max-w-xl text-lg text-muted">{support}</p></Reveal>
          <Reveal delay={0.55}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={primaryCta.to} className="w-full sm:w-auto">{primaryCta.label}</Button>
              <Button href={tel(business.phones.dallas)} variant="outline" className="w-full sm:w-auto"><Phone />{business.phones.dallas}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.65}>
            <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-3">
              {points.map((p) => <li key={p} className="flex items-start gap-2 text-sm font-semibold"><Check className="mt-0.5 shrink-0 text-brand" />{p}</li>)}
            </ul>
          </Reveal>
        </div>
        <TvFrame videoSrc={videoSrc} />
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, headline, support, crumbs, actions }: { eyebrow: string; headline: string[]; support: string; crumbs?: { label: string; to?: string }[]; actions?: ReactNode }) {
  return (
    <section onMouseMove={glow} className="grid-lines relative overflow-hidden border-b border-line bg-bg">
      <div className="grid-glow" aria-hidden />
      <div className="container-edge relative z-10 py-14 lg:py-20">
        {crumbs && <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs font-semibold text-muted">{crumbs.map((c, i) => <span key={c.label} className="flex gap-2">{c.to ? <Link to={c.to} className="hover:text-brand">{c.label}</Link> : <span className="text-fg">{c.label}</span>}{i < crumbs.length - 1 && <span aria-hidden>/</span>}</span>)}</nav>}
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Headline lines={headline} className="mt-5 max-w-4xl text-h1" />
        <Reveal delay={0.35}><p className="mt-6 max-w-2xl text-lg text-muted">{support}</p></Reveal>
        {actions && <Reveal delay={0.45}><div className="mt-8 flex flex-wrap gap-3">{actions}</div></Reveal>}
      </div>
    </section>
  );
}
