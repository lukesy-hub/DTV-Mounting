import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const beats = [
  { label: "The TV", copy: "It starts with the screen: size, weight, and where it needs to live.", image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-04.jpg", alt: "Television mounted above a fireplace" },
  { label: "The mount", copy: "The right hardware for the wall: flush, tilting, or full-motion.", image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29.jpg", alt: "Clean wall-mounted television installation" },
  { label: "The wall", copy: "Studs located, load tested, mount set level and secure.", image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-22-1.jpg", alt: "Level television installation in a living room" },
  { label: "Wire management", copy: "Cables routed in-wall or through concealment for a clean line.", image: "https://dtvmounting.com/wp-content/uploads/2024/02/722CFE20-9B21-42AC-8275-BEAB6CDEE585.jpeg", alt: "Wall-mounted television with concealed cables" },
  { label: "The finish", copy: "Checked, wiped down, and walked through with you before we leave.", image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29-4.jpg", alt: "Finished professional television installation" },
];

export function InstallSteps() {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 65%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <section className="border-y border-line bg-surface py-20 lg:py-28">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">The installation</span>
          <h2 className="mt-4 text-h2">Five details,<span className="serif-em block">done properly.</span></h2>
          <p className="mt-5 max-w-md text-muted">Every install follows the same sequence, so the result is level, secure, and clean, whatever the room.</p>
          <Button to="/quote" className="mt-8">Get a free quote</Button>
        </div>
        <ol ref={list} className="relative space-y-14 pl-8 sm:pl-10">
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line-strong" />
          <motion.span aria-hidden style={{ scaleY, transformOrigin: "top" }} className="absolute bottom-0 left-0 top-0 w-[3px] -translate-x-px rounded bg-brand" />
          {beats.map((b, i) => (
            <li key={b.label} className="relative">
              <span aria-hidden className="absolute -left-[38px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-brand bg-surface sm:-left-[46px]" />
              <div className="grid gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-center">
                <motion.div initial={{ clipPath: "inset(0 100% 0 0 round 8px)" }} whileInView={{ clipPath: "inset(0 0% 0 0 round 8px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface2">
                  <motion.img initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }} src={b.image} alt={b.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </motion.div>
                <Reveal delay={0.15}><span className="font-serif text-lg text-brand">0{i + 1}</span><h3 className="mt-2 text-2xl">{b.label}</h3><p className="mt-3 text-muted">{b.copy}</p></Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
