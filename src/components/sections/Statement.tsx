import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const A = "Studs located, load tested, level and secure. Every install should look like".split(" ");
const B = "it was always meant to be there.".split(" ");
const WORDS = [...A.map((w) => ({ w, em: false })), ...B.map((w) => ({ w, em: true }))];

function Word({ w, em, p, range, still }: { w: string; em: boolean; p: MotionValue<number>; range: [number, number]; still: boolean }) {
  const o = useTransform(p, range, [0.16, 1]);
  return <motion.span style={{ opacity: still ? 1 : o }} className={em ? "serif-em" : undefined}>{w} </motion.span>;
}

/** Big editorial statement; each word brightens as it scrolls through the viewport. */
export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  return (
    <section ref={ref} className="on-navy bg-navy py-24 lg:py-36">
      <div className="container-edge">
        <span className="eyebrow !text-[#9db0ff]">Our standard</span>
        <p className="mt-8 max-w-5xl text-h2 font-bold tracking-tight text-white">
          {WORDS.map((x, i) => <Word key={i} {...x} p={scrollYProgress} range={[(i / WORDS.length) * 0.8, (i / WORDS.length) * 0.8 + 0.2]} still={reduced} />)}
        </p>
      </div>
    </section>
  );
}
