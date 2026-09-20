import { business } from "@/data/business";
import { Check } from "@/components/ui/Icons";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

const stats = [{ to: 15000, suffix: "+", label: "TVs installed" }, { to: 20, suffix: "+", label: "Years of experience" }, { to: 10, suffix: "-year", label: "No-fall warranty" }, { to: 100, suffix: "%", label: "Satisfaction guarantee" }];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface">
      <Reveal className="container-edge py-12">
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}>
              <dt className="font-serif text-h2 font-medium leading-none tracking-tight"><CountUp to={s.to} suffix={s.suffix} /></dt>
              <dd className="mt-2 text-sm font-semibold text-muted">{s.label}</dd>
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
