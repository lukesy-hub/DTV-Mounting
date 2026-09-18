import type { Service } from '../data/services'

type Props = { service: Service; onQuote: () => void; onBack: () => void }

export default function ServiceDetail({ service, onQuote, onBack }: Props) {
  return (
    <>
      <section className="service-detail-hero">
        <div className="service-detail-image-layer" style={{ backgroundImage: `url(${service.image})` }} /><div className="service-detail-overlay" /><div><button className="back-link" onClick={onBack}>← All services</button><p className="eyebrow">{service.eyebrow}</p><h1>{service.title}</h1><p>{service.description}</p><button className="button button--light" onClick={onQuote}>Plan this install <span aria-hidden="true">↗</span></button></div>
      </section>
      <section className="section service-detail-content">
        <div><p className="eyebrow">The DTV standard</p><h2>Made to feel<br /><em>effortless.</em></h2></div>
        <div><p className="lead">{service.details}</p><ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><button className="button button--dark" onClick={onQuote}>Get your quote <span aria-hidden="true">↗</span></button></div>
      </section>
      <section className="service-detail-image" style={{ backgroundImage: `url(${service.image})` }}><div><p className="eyebrow">Built around your home</p><h2>Good work<br /><em>disappears.</em></h2></div></section>
    </>
  )
}
