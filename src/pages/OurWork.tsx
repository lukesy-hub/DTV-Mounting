import { PageHero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function OurWork() {
  const h = heroContent["our-work"];
  usePageMeta("Our Work", h.support);
  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "Our work" }]} />
      <div className="pt-4"><Gallery /></div>
      <Reviews />
      <QuoteCTA />
    </>
  );
}
