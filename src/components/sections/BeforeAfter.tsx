import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, useInView } from "framer-motion";
import { RoomScene } from "@/components/ui/RoomScene";
import { Arrow } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Drag (or use arrow keys) to compare. On first view it sweeps once to show it is interactive. */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const touched = useRef(false);
  const box = useRef<HTMLDivElement>(null);
  const seen = useInView(box, { once: true, margin: "-25%" });
  const reduced = useReducedMotion();
  const sweep = useRef(false);
  if (seen && !reduced && !sweep.current) {
    sweep.current = true;
    animate(50, [50, 16, 84, 50], { duration: 2.6, ease: "easeInOut", onUpdate: (v) => { if (!touched.current) setPos(v); } });
  }
  return (
    <section className="container-edge py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">The difference</span>
          <h2 className="mt-4 text-h2">Clean walls. Hidden wires.<span className="serif-em block">Better living.</span></h2>
          <p className="mt-5 max-w-md text-muted">Cable management takes a tangle of cords down to a single clean line. Drag the handle to see the difference.</p>
          <Link to="/services/hide-tv-wire" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline">About hiding TV wires <Arrow /></Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div ref={box} className="relative aspect-[16/10] select-none overflow-hidden rounded-lg border border-line shadow-card">
            <RoomScene after />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><RoomScene after={false} /></div>
            <span className="absolute left-4 top-4 rounded bg-black/70 px-3 py-1 text-xs font-bold text-white">Before</span>
            <span className="absolute right-4 top-4 rounded bg-brand-btn px-3 py-1 text-xs font-bold text-white">After</span>
            <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,.4)]" style={{ left: `${pos}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full bg-white text-brand shadow-card"><Arrow width={14} height={14} className="rotate-180" /><Arrow width={14} height={14} /></span>
            </div>
            <input type="range" min={0} max={100} value={pos} onChange={(e) => { touched.current = true; setPos(+e.target.value); }} aria-label="Drag to compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" style={{ touchAction: "pan-y" }} />
          </div>
          <p className="mt-3 text-xs text-muted">Illustration for demonstration.</p>
        </Reveal>
      </div>
    </section>
  );
}
