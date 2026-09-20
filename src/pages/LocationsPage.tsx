import { PageHero } from "@/components/sections/Hero";
import { Locations } from "@/components/sections/Locations";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function LocationsPage() {
  const h = heroContent.locations;
  usePageMeta("Locations", h.support);
  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "Locations" }]} actions={<Button to="/quote">Get a free quote</Button>} />
      <Locations heading={false} />
      <QuoteCTA />
    </>
  );
}
