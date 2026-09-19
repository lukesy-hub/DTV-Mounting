import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const beats = [
  {
    label: "TV",
    copy: "It starts with the screen — size, weight, and where it needs to live.",
    image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-04.jpg",
    alt: "Television mounted above a fireplace",
  },
  {
    label: "Mount",
    copy: "The right hardware for the wall: flush, tilting, or full-motion.",
    image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29.jpg",
    alt: "Clean wall-mounted television installation",
  },
  {
    label: "Wall",
    copy: "Studs located, load tested, mount set level and secure.",
    image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-11-22-1.jpg",
    alt: "Level television installation in a living room",
  },
  {
    label: "Wire Management",
    copy: "Cables routed in-wall or through concealment for a clean line.",
    image: "https://dtvmounting.com/wp-content/uploads/2024/02/722CFE20-9B21-42AC-8275-BEAB6CDEE585.jpeg",
    alt: "Wall-mounted television with concealed cables",
  },
  {
    label: "Finished Installation",
    copy: "Checked, wiped down, and walked through with you before we leave.",
    image: "https://dtvmounting.com/wp-content/uploads/2024/02/2023-10-29-4.jpg",
    alt: "Finished professional television installation",
  },
];

export function InstallStory() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      beats.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.story-beat-${i}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-background)] py-24">
      <div className="container-edge grid gap-10 lg:grid-cols-2">
        {/* Sticky visual + progress */}
        <div className="lg:sticky lg:top-24 lg:h-[70vh]">
          <div className="glass-surface flex h-full flex-col justify-between rounded-lg p-10">
            <span className="eyebrow">The Installation Journey</span>
            <div>
              <span className="font-display-serif text-[clamp(2.2rem,4vw,3.6rem)] text-paper">
                {beats[active].label}
              </span>
              <p className="mt-4 max-w-sm text-sm text-muted">{beats[active].copy}</p>
            </div>
            <div className="flex gap-2">
              {beats.map((_, i) => (
                <span
                  key={i}
                  className="h-1 flex-1 rounded-full bg-border transition-colors duration-300"
                  style={{ backgroundColor: i <= active ? "var(--color-brand-blue)" : undefined }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll beats */}
        <div className="flex flex-col gap-[40vh] py-[10vh]">
          {beats.map((beat, i) => (
            <div key={beat.label} className={`story-beat-${i} flex min-h-[20vh] items-center`}>
              <div className="glass-surface grid min-h-[250px] w-full gap-6 rounded-lg p-5 sm:grid-cols-[190px_1fr] sm:items-center sm:p-6">
                <img
                  src={beat.image}
                  alt={beat.alt}
                  loading="lazy"
                  className="h-40 w-full rounded-md object-cover sm:h-44"
                />
                <div>
                  <span className="text-sm text-muted">0{i + 1}</span>
                  <h3 className="mt-2 font-display-serif text-3xl text-paper">{beat.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{beat.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
