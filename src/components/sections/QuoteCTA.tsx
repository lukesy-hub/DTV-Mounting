import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";
import { tel } from "@/lib/tel";

export function QuoteCTA() {
  return (
    <section className="container-edge py-20">
      <div className="on-navy relative overflow-hidden rounded-lg bg-brand-btn px-8 py-14 text-white sm:px-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-white/80">Ready when you are</span>
          <h2 className="mt-4 text-h2">Let's get your TV <span className="font-serif font-medium italic">on the wall.</span></h2>
          <p className="mt-4 text-white/80">{business.claims.startingPrice} · {business.claims.sameDay} · {business.claims.warranty}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0"><Button to="/quote" variant="light">Get your free quote</Button><Button href={tel(business.phones.dallas)} variant="outline-light">Call {business.phones.dallas}</Button></div>
      </div>
    </section>
  );
}
