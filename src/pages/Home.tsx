import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { InstallSteps } from "@/components/sections/InstallSteps";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Locations } from "@/components/sections/Locations";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/heroContent";
import { usePageMeta } from "@/hooks/usePageMeta";

export function Home() {
  usePageMeta("DTV Mounting", "Professional TV mounting, fireplace installs, TV walls and hidden wiring across Texas, Florida and Atlanta. Licensed, insured, 10-year no-fall warranty.");
  return (
    <>
      <Hero {...heroContent.home} />
      <TrustBar />
      <Services />
      <InstallSteps />
      <section className="container-edge pt-20 lg:pt-24">
        <SectionHead eyebrow="Our work" title="Real installs," em="real homes.">A look at DTV Mounting installations across homes and businesses.</SectionHead>
      </section>
      <Gallery tight />
      <div className="container-edge -mt-8 pb-20 text-center"><Button to="/our-work" variant="outline">See all our work</Button></div>
      <Process />
      <Reviews />
      <Locations />
      <QuoteCTA />
    </>
  );
}
