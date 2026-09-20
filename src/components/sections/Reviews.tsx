import { business } from "@/data/business";
import { Check } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Only the aggregate rating is verified, so no individual quotes, names or star counts are shown.
 * Add a `reviews` list here once verified reviews are supplied.
 */
export function Reviews() {
  const promises = [
    ["10-year no-fall warranty", business.claims.warranty], ["Price match", business.claims.priceMatch],
    ["Satisfaction guarantee", business.claims.satisfaction], ["Licensed and insured", business.claims.licensed],
  ];
  return (
    <section className="on-navy bg-navy py-20 text-on-navy lg:py-24">
      <Reveal className="container-edge grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <span className="eyebrow !text-[#9db0ff]">Customer reviews</span>
          <h2 className="mt-6 font-serif text-display font-medium italic leading-none">{business.reviewSummary.label}</h2>
          <p className="mt-4 text-on-navy-muted">{business.reviewSummary.basis}</p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
          {promises.map(([t, d]) => (
            <li key={t} className="bg-navy p-7"><Check className="text-[#9db0ff]" /><h3 className="mt-4 text-lg text-white">{t}</h3><p className="mt-2 text-sm text-on-navy-muted">{d}</p></li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
