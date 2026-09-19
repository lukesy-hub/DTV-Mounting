import { VideoHero } from "@/components/Hero/VideoHero";
import { TrustStats } from "@/components/Stats/TrustStats";
import { Reviews } from "@/components/Reviews/Reviews";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";
import { business } from "@/data/business";

export function About() {
  return (
    <>
      <VideoHero {...heroContent.about} />
      <section className="container-edge py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why DTV Mounting</span>
            <h2 className="mt-3 font-display-serif text-[clamp(2rem,3.6vw,3rem)] text-paper">
              Two decades of getting it right the first time.
            </h2>
          </div>
          <p className="text-muted">
            {business.claims.experience} and {business.claims.tvsInstalled.toLowerCase()} across Texas, backed by
            a {business.claims.warranty.toLowerCase()}, a {business.claims.priceMatch.toLowerCase()}, and a
            {" " + business.claims.satisfaction.toLowerCase()}. {business.claims.licensed}.
          </p>
        </div>
      </section>
      <TrustStats />
      <Reviews />
      <QuoteCTA />
    </>
  );
}
