import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsTouch } from "@/hooks/useMediaQuery";

/** Small dot by default, expands with a label over [data-cursor="view"|"drag"] targets. */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const isTouch = useIsTouch();
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (isTouch || reduced) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      setActive(Boolean(target));
      setLabel(target?.dataset.cursor === "view" ? "VIEW" : target?.dataset.cursor === "drag" ? "DRAG" : null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch, reduced, x, y]);

  if (isTouch || reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: active ? 64 : 8, height: active ? 64 : 8, backgroundColor: "#ffffff" }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && <span className="text-[0.6rem] font-medium tracking-wide text-black">{label}</span>}
    </motion.div>
  );
}
