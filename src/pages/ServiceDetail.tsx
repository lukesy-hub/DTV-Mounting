import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "@/components/sections/Hero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Button } from "@/components/ui/Button";
import { Check, Phone } from "@/components/ui/Icons";
import { business } from "@/data/business";
import { getServiceBySlug, services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";
import { tel } from "@/lib/tel";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? "");
  usePageMeta(service?.title ?? "Service", service?.heroSupport);
  if (!service) return <Navigate to="/services" replace />;
  const included = [business.claims.licensed, business.claims.warranty, business.claims.priceMatch, business.claims.satisfaction, business.claims.sameDay];

  return (
    <>
      <PageHero eyebrow={`Service ${service.number}`} headline={service.heroHeadline} support={service.heroSupport}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]} actions={<Button to="/quote">{service.heroCta}</Button>} />
      <section className="container-edge grid gap-12 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <span className="eyebrow">About this service</span>
          <h2 className="mt-4 text-h2">{service.title}</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">{service.shortDescription}</p>
          <h3 className="mt-12 text-xl">With every DTV Mounting install</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{included.map((i) => <li key={i} className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4 text-sm font-semibold"><Check className="mt-0.5 shrink-0 text-brand" />{i}</li>)}</ul>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="on-navy rounded-lg bg-navy p-7 text-on-navy">
            <p className="text-xs font-extrabold uppercase tracking-[.14em] text-[#9db0ff]">{business.claims.startingPrice}</p>
            <h3 className="mt-3 text-2xl text-white">Get a free quote for {service.title.toLowerCase()}</h3>
            <div className="mt-6 grid gap-3"><Button to="/quote" variant="light">Start your quote</Button><Button href={tel(business.phones.dallas)} variant="outline-light"><Phone />{business.phones.dallas}</Button></div>
          </div>
          <div className="rounded-lg border border-line bg-surface p-7">
            <h3 className="text-sm font-bold text-muted">Other services</h3>
            <ul className="mt-4 divide-y divide-line">{services.filter((s) => s.slug !== service.slug).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="flex justify-between py-3 text-sm font-semibold hover:text-brand"><span>{s.title}</span><span className="text-muted">{s.number}</span></Link></li>)}</ul>
          </div>
        </aside>
      </section>
      <QuoteCTA />
    </>
  );
}
