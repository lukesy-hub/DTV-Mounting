"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    src: "/media/hero/scene1.png",
    alt: "Messy television setup with exposed cables",
  },
  {
    src: "/media/hero/scene2.png",
    alt: "Professional television mounting installation",
  },
  {
    src: "/media/hero/scene3.png",
    alt: "Finished television installation in a living room",
  },
  {
    src: "/media/hero/scene4.png",
    alt: "Television with hidden cables and soundbar",
  },
  { src: "/media/hero/scene5.png", alt: "Integrated security camera display" },
  {
    src: "/media/hero/scene6.png",
    alt: "Television and security cameras controlled together",
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const frames = Array.from(
        section.querySelectorAll<HTMLElement>("[data-hero-frame]"),
      );
      const stage = section.querySelector<HTMLElement>("[data-hero-stage]");
      const progress = section.querySelector<HTMLElement>(
        "[data-hero-progress]",
      );

      if (!stage || !progress || frames.length === 0) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      gsap.set(frames, { opacity: 0, zIndex: 1, display: "block" });
      gsap.set(frames[0], { opacity: 1, zIndex: 2 });
      gsap.set(progress, {
        scaleX: reduceMotion ? 1 : 0,
        transformOrigin: "left center",
      });

      const sequence = gsap.timeline({ repeat: -1, repeatDelay: 0.15 });

      sequence.to({}, { duration: 1 });
      frames.forEach((frame, index) => {
        const nextFrame = frames[(index + 1) % frames.length];

        sequence
          .set(nextFrame, { zIndex: 3 })
          .to(nextFrame, {
            opacity: 1,
            duration: 1.35,
            ease: "power2.inOut",
          })
          .to(
            frame,
            {
              opacity: 0,
              duration: 1.35,
              ease: "power2.inOut",
            },
            "<",
          )
          .set(frame, { zIndex: 1 })
          .set(nextFrame, { zIndex: 2 })
          .to({}, { duration: 1 });
      });

      const stageTween = reduceMotion
        ? null
        : gsap.to(stage, {
            scale: 1.005,
            yPercent: -0.2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=900",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

      const progressTween = reduceMotion
        ? null
        : gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=900",
              scrub: 1,
            },
          });

      return () => {
        sequence.kill();
        stageTween?.scrollTrigger?.kill();
        stageTween?.kill();
        progressTween?.scrollTrigger?.kill();
        progressTween?.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-svh overflow-hidden bg-[#111318]"
    >
      <div
        data-hero-stage
        className="absolute inset-0 z-0 will-change-transform"
      >
        {scenes.map((scene, index) => (
          <div
            key={scene.src}
            data-hero-frame
            className="absolute inset-0 overflow-hidden will-change-[opacity]"
            style={{ zIndex: index === 0 ? 2 : 1 }}
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              fill
              priority={index < 2}
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,8,11,0.24)_0%,rgba(7,8,11,0.02)_34%,rgba(7,8,11,0.38)_100%)]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-black/45 to-transparent" />

      <div className="absolute bottom-2 left-1/2 z-30 w-45 -translate-x-1/2">
        <div className="h-px overflow-hidden bg-white/20">
          <div
            data-hero-progress
            className="h-full w-full origin-left scale-x-0 bg-(--dtv-blue)"
          />
        </div>
      </div>
    </section>
  );
}
