import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type VideoHeroProps = {
  pageType: string;
  eyebrow: string;
  /** Each entry renders as its own reveal line — pass real line breaks, not auto-wrap. */
  headline: string[];
  support: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  /** Optional real footage — falls back to a page-tinted cinematic gradient when absent. */
  videoSrc?: string;
  poster?: string;
  align?: "left" | "center";
  showScrollHint?: boolean;
};

/**
 * Decorative treatment keyed by page — this is what keeps every hero from
 * feeling like the same component reskinned with new text. Hue angle and
 * accent placement are the only things that vary; the choreography and
 * brand system stay constant.
 */
const PAGE_TREATMENT: Record<string, { angle: string; accent: string }> = {
  home: { angle: "125deg", accent: "from-blue/25" },
  services: { angle: "90deg", accent: "from-blue/20" },
  "tv-mounting": { angle: "160deg", accent: "from-blue-light/25" },
  "our-work": { angle: "110deg", accent: "from-silver/20" },
  locations: { angle: "70deg", accent: "from-blue/20" },
  quote: { angle: "135deg", accent: "from-blue/25" },
  about: { angle: "150deg", accent: "from-silver/15" },
  faq: { angle: "100deg", accent: "from-silver/10" },
  contact: { angle: "80deg", accent: "from-blue/20" },
};

export function VideoHero({
  pageType,
  eyebrow,
  headline,
  support,
  primaryCta,
  secondaryCta,
  videoSrc,
  poster,
  align = "left",
  showScrollHint = true,
}: VideoHeroProps) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.18]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const treatment = PAGE_TREATMENT[pageType] ?? PAGE_TREATMENT.home;

  const lineVariants = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section ref={sectionRef} className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-[var(--color-background)]">
      {/* Background: real footage if provided, else a page-tinted cinematic field */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <div
            className={clsx("h-full w-full bg-[var(--color-background)] bg-gradient-to-br", treatment.accent)}
            style={{
              backgroundImage: `linear-gradient(${treatment.angle}, var(--color-background), var(--color-surface) 45%, var(--color-surface-2) 100%)`,
              backgroundSize: "cover",
            }}
          />
        )}
        <div className="grain absolute inset-0" />
      </motion.div>

      {/* Cinematic readability overlay */}
      <div className="absolute inset-0" style={{ background: "var(--overlay-cinema)" }} />

      <motion.div
        style={{ opacity: contentOpacity }}
        className={clsx(
          "container-edge relative z-10 flex w-full flex-col gap-7",
          align === "center" && "items-center text-center"
        )}
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>

        <h1 className="max-w-3xl font-display-serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.02] text-paper">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                custom={i}
                initial="hidden"
                animate="show"
                variants={lineVariants}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className={clsx("max-w-lg text-lg text-paper/75", align === "center" && "max-w-xl")}
        >
          {support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to={primaryCta.to}
            className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-deep"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <a
              href={secondaryCta.to}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white/90 transition-colors hover:border-white/60"
            >
              {secondaryCta.label}
            </a>
          )}
        </motion.div>
      </motion.div>

      {showScrollHint && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] text-white/50"
        >
          <span>Scroll to explore</span>
          <motion.span
            className="h-8 w-px bg-white/40"
            animate={reduced ? {} : { scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      )}
    </section>
  );
}
