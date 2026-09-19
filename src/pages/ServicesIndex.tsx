import { VideoHero } from "@/components/Hero/VideoHero";
import { Services } from "@/components/Services/Services";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { heroContent } from "@/data/heroContent";

export function ServicesIndex() {
  return (
    <>
      <VideoHero {...heroContent.services} />
      <Services />
      <QuoteCTA />
    </>
  );
}
