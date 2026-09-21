"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Tell us about the room",
    text: "Share the wall, TV, location, and the finish you want. A few clear details make the recommendation sharper.",
  },
  {
    number: "02",
    title: "We plan the details",
    text: "DTV considers the viewing position, hardware, wire path, sound, and the proportions of the finished space.",
  },
  {
    number: "03",
    title: "You enjoy the finish",
    text: "The installation is completed, checked, cleaned, and ready to feel like it belonged there from the start.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-(--dtv-black) px-6 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
            The process
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Simple to start.
            <br />
            <span className="chromatic-text">Precise in the details.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
            A considered installation should feel straightforward for you and
            exact in the room.
          </p>
          <motion.div
            style={{ y: imageY }}
            className="mt-12 hidden aspect-[1.4] overflow-hidden rounded-4xl border border-white/10 bg-[url('/media/installations/fireplace-03.jpg')] bg-cover bg-center opacity-80 lg:block"
          />
        </div>
        <div className="divide-y divide-white/10">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="grid gap-6 py-10 first:pt-0 md:grid-cols-[72px_1fr] md:gap-10"
            >
              <span className="font-display text-sm text-(--dtv-blue-soft)">
                {step.number}
              </span>
              <div>
                <h3 className="max-w-lg font-display text-3xl font-semibold leading-none tracking-[-0.05em] md:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
