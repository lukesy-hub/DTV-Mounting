import { useParams, Navigate } from "react-router-dom";
import { VideoHero } from "@/components/Hero/VideoHero";
import { QuoteCTA } from "@/components/QuoteCTA/QuoteCTA";
import { getServiceBySlug, services } from "@/data/services";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? "");

  if (!service) return <Navigate to="/" replace />;

  return (
    <>
      <VideoHero
        pageType={service.slug}
        eyebrow={`Service · ${service.number}`}
        headline={service.heroHeadline}
        support={service.heroSupport}
        primaryCta={{ label: service.heroCta, to: "/quote" }}
        align="left"
      />

      <section className="container-edge py-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="eyebrow">About This Service</span>
            <h2 className="mt-3 font-display-serif text-[clamp(1.8rem,3vw,2.6rem)] text-paper">
              {service.title}
            </h2>
            <p className="mt-4 max-w-xl text-muted">{service.shortDescription}</p>
          </div>
          <div className="glass-surface rounded-lg p-8">
            <h3 className="text-sm text-muted">Other Services</h3>
            <ul className="mt-4 space-y-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 5)
                .map((s) => (
                  <li key={s.slug}>
                    <a href={`/services/${s.slug}`} className="text-paper/85 hover:text-blue-light">
                      {s.number} — {s.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
