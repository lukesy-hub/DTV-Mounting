import { VideoHero } from "@/components/Hero/VideoHero";
import { Gallery } from "@/components/Gallery/Gallery";
import { Reviews } from "@/components/Reviews/Reviews";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";

export function OurWork() {
  return (
    <>
      <VideoHero {...heroContent["our-work"]} />
      <Gallery />
      <Reviews />
      <QuoteCTA />
    </>
  );
}
