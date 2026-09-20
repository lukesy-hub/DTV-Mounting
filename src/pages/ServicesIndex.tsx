import { PageHero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function ServicesIndex() {
  const h = heroContent.services;
  usePageMeta("Services", h.support);
  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]} actions={<Button to="/quote">Get a free quote</Button>} />
      <Services layout="grid" />
      <QuoteCTA />
    </>
  );
}
