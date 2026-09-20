import { business } from "@/data/business";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const stats = [["15,000+", "TVs installed"], ["20+", "Years of experience"], ["10-year", "No-fall warranty"], ["100%", "Satisfaction guarantee"]];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface">
      <Reveal className="container-edge py-12">
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map(([v, l], i) => (
            <div key={l} className={i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}>
              <dt className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-none tracking-tight">{v}</dt>
              <dd className="mt-2 text-sm font-semibold text-muted">{l}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm font-semibold">
          {[business.claims.licensed, business.claims.priceMatch, business.claims.sameDay].map((c) => <li key={c} className="flex items-center gap-2"><Check className="text-brand" />{c}</li>)}
        </ul>
      </Reveal>
    </section>
  );
}
