import type { Location } from '../data/locations'
import mainHeroVideo from '../assets/main_hero.mp4'

type Props = { location: Location; onQuote: () => void; onBack: () => void }

export default function LocationDetail({ location, onQuote, onBack }: Props) {
  return (
    <>
      <section className="location-detail-hero">
        <video className="hero-video" autoPlay muted loop playsInline poster={location.image}><source src={mainHeroVideo} type="video/mp4" /></video><div className="location-detail-overlay" /><div><button className="back-link" onClick={onBack}>← All locations</button><p className="eyebrow">{location.region}</p><h1>DTV Mounting<br /><em>{location.name}.</em></h1><p>{location.briefing}</p><button className="button button--light" onClick={onQuote}>Request a local quote <span aria-hidden="true">↗</span></button></div>
      </section>
      <section className="section location-detail-content">
        <div><p className="eyebrow">Your local team</p><h2>Close by.<br /><em>Made personal.</em></h2>{location.phone && <a className="location-phone" href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone} ↗</a>}{location.address && <p className="location-address">{location.address}</p>}</div>
        <div className="location-map-wrap"><iframe title={`${location.name} service area map`} loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`} /><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div>
      </section>
      <section className="section location-detail-services"><div><p className="eyebrow">Popular in {location.name}</p><h2>Built around<br /><em>your room.</em></h2></div><div className="location-service-list">{location.services.map((service, index) => <button key={service} onClick={onQuote}><span>0{index + 1}</span><strong>{service}</strong><span>↗</span></button>)}</div></section>
    </>
  )
}
