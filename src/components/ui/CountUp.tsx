import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Counts from 0 to `to` once, when scrolled into view. Shows the final value straight away for reduced motion. */
export function CountUp({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduced) { setV(to); return; }
    const c = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [seen, reduced, to, duration]);
  const final = `${to.toLocaleString()}${suffix}`;
  return <span ref={ref}><span aria-hidden>{(reduced ? to : v).toLocaleString()}{suffix}</span><span className="sr-only">{final}</span></span>;
}
