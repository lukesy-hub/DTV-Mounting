import { VideoHero } from "@/components/Hero/VideoHero";
import { Locations } from "@/components/Locations/Locations";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";

export function LocationsPage() {
  return (
    <>
      <VideoHero {...heroContent.locations} />
      <Locations />
      <QuoteCTA />
    </>
  );
}
