import { useRef } from "react";
import { Link } from "react-router-dom";
import { services, type Service } from "@/data/services";
import { Arrow } from "@/components/ui/Icons";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const PAD = "max(var(--container-pad), calc((100vw - 1320px) / 2 + var(--container-pad)))";

function Card({ s, className = "" }: { s: Service; className?: string }) {
  return (
    <Link to={`/services/${s.slug}`} className={`group flex min-h-[260px] flex-col justify-between rounded-lg border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-card ${className}`}>
      <span className="font-serif text-lg text-muted">{s.number}</span>
      <div>
        <h3 className="text-xl">{s.title}</h3>
        <p className="mt-3 text-sm text-muted">{s.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand">Learn more <Arrow className="transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

/** Home: a self-scrolling horizontal track (native scroll-snap, no pinning). Index page: a plain grid. */
export function Services({ layout = "carousel" }: { layout?: "carousel" | "grid" }) {
  const track = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * 344, behavior: "smooth" });

  if (layout === "grid") {
    return <section className="container-edge py-20"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s) => <Card key={s.slug} s={s} />)}</div></section>;
  }
  return (
    <section id="services" className="bg-bg py-20 lg:py-24">
      <div className="container-edge">
        <SectionHead eyebrow="What we do" title="Eight services." em="One standard of finish.">From a single flat mount to a complete entertainment setup, every job gets the same licensed, insured crew.</SectionHead>
      </div>
      <Reveal>
        <ul ref={track} tabIndex={0} aria-label="Services, scroll horizontally" className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4" style={{ paddingInline: PAD, scrollPaddingInline: PAD }}>
          {services.map((s) => <li key={s.slug} className="w-[280px] shrink-0 snap-start sm:w-[320px]"><Card s={s} className="h-full" /></li>)}
        </ul>
        <div className="container-edge mt-6 flex items-center justify-between">
          <Link to="/services" className="text-sm font-bold text-brand hover:underline">View all services</Link>
          <div className="flex gap-2">
            {([[-1, "Previous services"], [1, "Next services"]] as const).map(([d, label]) => (
              <button key={d} onClick={() => move(d)} aria-label={label} className="grid h-11 w-11 place-items-center rounded border border-line-strong bg-surface hover:border-brand hover:text-brand"><Arrow className={d < 0 ? "rotate-180" : ""} /></button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
