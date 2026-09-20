import { PageHero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function About() {
  const h = heroContent.about;
  usePageMeta("About", h.support);
  return (
    <>
      <PageHero eyebrow={h.eyebrow} headline={h.headline} support={h.support} crumbs={[{ label: "Home", to: "/" }, { label: "About" }]} actions={<Button to="/quote">Get a free quote</Button>} />
      <section className="container-edge grid gap-10 py-20 lg:grid-cols-2 lg:gap-20">
        <div><span className="eyebrow">Why DTV Mounting</span><h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)]">Two decades of getting it <span className="serif-em">right the first time.</span></h2></div>
        <p className="text-lg text-muted">{business.claims.experience} and {business.claims.tvsInstalled.toLowerCase()}, backed by a {business.claims.warranty.toLowerCase()}, a {business.claims.priceMatch.toLowerCase()}, and a {business.claims.satisfaction.toLowerCase()}. {business.claims.licensed}.</p>
      </section>
      <TrustBar />
      <Process />
      <Reviews />
      <QuoteCTA />
    </>
  );
}
