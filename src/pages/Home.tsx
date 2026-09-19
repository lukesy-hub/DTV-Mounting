import { VideoHero } from "@/components/Hero/VideoHero";
import { TrustStats } from "@/components/Stats/TrustStats";
import { Services } from "@/components/Services/Services";
import { Gallery } from "@/components/Gallery/Gallery";
import { InstallStory } from "@/components/Story/InstallStory";
import { Process } from "@/components/Process/Process";
import { Reviews } from "@/components/Reviews/Reviews";
import { Locations } from "@/components/Locations/Locations";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";

export function Home() {
  const hero = heroContent.home;
  return (
    <>
      <VideoHero {...hero} />
      <TrustStats />
      <Services />
      <InstallStory />
      <Gallery />
      <Process />
      <Reviews />
      <Locations />
      <QuoteCTA />
    </>
  );
}
