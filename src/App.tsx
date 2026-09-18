import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import type { ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { submitWebsiteLead } from './services/leadService'
import { formFields, initialLeadForm } from './data/formSchema'
import type { LeadFormData } from './data/formSchema'
import { serviceCatalog, serviceBySlug } from './data/services'
import type { ServiceSlug } from './data/services'
import ServiceDetail from './pages/ServiceDetail'
import { locationCatalog, locationBySlug } from './data/locations'
import type { LocationSlug } from './data/locations'
import LocationDetail from './pages/LocationDetail'
import mainHeroVideo from './assets/main_hero.mp4'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

type Page = 'home' | 'services' | 'work' | 'locations' | 'about' | 'faq' | 'contact' | 'quote' | ServiceSlug | LocationSlug
type GalleryFilter = 'ALL' | 'RESIDENTIAL' | 'FIREPLACE' | 'TV WALLS' | 'HIDDEN WIRES' | 'OUTDOOR' | 'GAMING'

const logo = 'https://dtvmountingtx.com/wp-content/uploads/2024/02/DTVHeaderLogo_1-2.webp'
const phoneNumbers = { Dallas: '(469) 436-5600', Houston: '(346) 998-4437', 'Austin / San Antonio': '(737) 377-2980' }
const heroVideo = mainHeroVideo
const images = {
  hero: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=2200&q=88',
  fireplace: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1400&q=85',
  wall: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=1400&q=85',
  outdoor: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
  gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85',
}

const gallery = [
  ['Residential media wall', 'RESIDENTIAL', images.wall], ['Fireplace focal point', 'FIREPLACE', images.fireplace],
  ['Clean wire concealment', 'HIDDEN WIRES', 'https://images.unsplash.com/photo-1601944177325-f8867652837f?auto=format&fit=crop&w=1100&q=85'],
  ['Outdoor entertainment', 'OUTDOOR', images.outdoor], ['Gaming command center', 'GAMING', images.gaming],
  ['Architectural TV wall', 'TV WALLS', 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1100&q=85'],
]
const faqs = [
  ['How much does TV mounting cost?', 'Our mounting service starts at $49. Final pricing depends on the TV size, wall material, mounting height, and any additional services. We provide a clear quote before work begins.'],
  ['Can you hide my TV wires?', 'Yes. We offer professional wire concealment for compatible walls and can also coordinate a clean solution for brick, stone, and fireplace installations.'],
  ['Do you offer same-day appointments?', 'Same-day service is available in select service areas based on technician availability. Submit a request and we will confirm the earliest available time.'],
  ['Are you licensed and insured?', 'DTV Mounting is fully licensed and insured, with a 10-year no-fall warranty on qualifying mounting work.'],
  ['What areas do you serve?', 'We serve Dallas, Houston, Austin, San Antonio, and surrounding communities. Call the local number for your area to confirm coverage.'],
]

function Arrow() { return <span aria-hidden="true">↗</span> }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow"><span />{children}</p> }
function pageFromLocation(): Page {
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '')
  if (pathname.startsWith('services/')) return (pathname.slice('services/'.length) as Page) || 'services'
  if (pathname.startsWith('locations/')) return (pathname.slice('locations/'.length) as Page) || 'locations'
  if (pathname) return pathname as Page
  return (window.location.hash.slice(1) as Page) || 'home'
}

function App() {
  const [page, setPage] = useState<Page>(pageFromLocation)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<'services' | 'locations' | null>(null)
  const [quoteOpen, setQuoteOpen] = useState(page === 'quote')
  const [form, setForm] = useState<LeadFormData>(() => {
    const draft = localStorage.getItem('dtv-quote-draft')
    if (!draft) return initialLeadForm
    try { return { ...initialLeadForm, ...JSON.parse(draft) as LeadFormData } } catch { localStorage.removeItem('dtv-quote-draft'); return initialLeadForm }
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [filter, setFilter] = useState<GalleryFilter>('ALL')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [faq, setFaq] = useState<number | null>(null)
  const [beforeAfter, setBeforeAfter] = useState(52)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    const onLocationChange = () => {
      const next = pageFromLocation()
      setPage(next === 'quote' ? 'home' : next)
      setQuoteOpen(next === 'quote')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('scroll', onScroll); window.addEventListener('popstate', onLocationChange); window.addEventListener('hashchange', onLocationChange)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('popstate', onLocationChange); window.removeEventListener('hashchange', onLocationChange) }
  }, [])
  useEffect(() => { if (status !== 'success') localStorage.setItem('dtv-quote-draft', JSON.stringify(form)) }, [form, status])
  useEffect(() => { if (!quoteOpen) return; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setQuoteOpen(false) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [quoteOpen])
  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.services-menu')) setDropdownOpen(null)
    }
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setDropdownOpen(null) }
    document.addEventListener('mousedown', closeDropdown)
    document.addEventListener('keydown', closeOnEscape)
    return () => { document.removeEventListener('mousedown', closeDropdown); document.removeEventListener('keydown', closeOnEscape) }
  }, [])
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return
    const context = gsap.context(() => {
      const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      introTimeline.from('.hero-content > *', { y: 34, opacity: 0, duration: 0.8, stagger: 0.1 })
        .from('.hero-stamp, .hero-meta', { opacity: 0, y: 18, duration: 0.7 }, '-=0.35')
      gsap.utils.toArray<HTMLElement>('.section, .payment-options, .proof-stats, .reasons, .main-services, .quote-banner').forEach((section) => {
        gsap.from(section.querySelectorAll(':scope > *'), {
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
          y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        })
      })
      gsap.utils.toArray<HTMLElement>('.service-card, .gallery-tile, .location-cards article, .review-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%', once: true },
          y: 32, opacity: 0, scale: 0.97, duration: 0.65, ease: 'power3.out',
        })
      })
      gsap.utils.toArray<HTMLElement>('.hero, .service-detail-hero, .location-detail-hero').forEach((hero) => {
        gsap.to(hero.querySelector('.hero-backdrop, .service-detail-overlay, .location-detail-overlay'), {
          yPercent: 12, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
        })
      })
      gsap.utils.toArray<HTMLElement>('.section h2').forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: { trigger: heading, start: 'top 84%', once: true },
          clipPath: 'inset(0 0 100% 0)', y: 18, duration: 0.9, ease: 'power4.out',
        })
      })
    })
    return () => context.revert()
  }, [page])

  const go = (next: Page) => {
    setMenuOpen(false)
    setDropdownOpen(null)
    setQuoteOpen(false)
    const path = next === 'home' ? '/' : serviceCatalog.some((service) => service.slug === next) ? `/services/${next}` : locationCatalog.some((location) => location.slug === next) ? `/locations/${next}` : `/${next}`
    window.history.pushState({}, '', path)
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const update = (field: keyof LeadFormData, value: string | boolean) => setForm((current) => ({ ...current, [field]: value }))
  const filteredGallery = useMemo(() => filter === 'ALL' ? gallery : gallery.filter((item) => item[1] === filter), [filter])
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (status === 'submitting') return; setStatus('submitting'); setError('')
    try { await submitWebsiteLead(form); setStatus('success'); localStorage.removeItem('dtv-quote-draft') }
    catch (submissionError) { setStatus('error'); setError(submissionError instanceof Error ? submissionError.message : 'Something went wrong while submitting your request.') }
  }

  const openQuote = () => { setQuoteOpen(true); setStep(0); setStatus('idle'); setError('') }
  const nav = <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}><button className="brand" onClick={() => go('home')} aria-label="DTV Mounting home"><img src={logo} alt="DTV Mounting" /></button><nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} aria-label="Primary navigation"><div className={`services-menu ${dropdownOpen === 'services' ? 'dropdown-open' : ''}`}><button type="button" aria-expanded={dropdownOpen === 'services'} className={page === 'services' || serviceCatalog.some((item) => item.slug === page) ? 'active' : ''} onClick={() => setDropdownOpen(dropdownOpen === 'services' ? null : 'services')}>Services <span className="chevron">⌄</span></button><div className="services-dropdown"><button type="button" onClick={() => go('services')}>All services<Arrow /></button>{serviceCatalog.map((service) => <button type="button" key={service.slug} onClick={() => go(service.slug)}>{service.title}<Arrow /></button>)}</div></div><div className={`services-menu locations-menu ${dropdownOpen === 'locations' ? 'dropdown-open' : ''}`}><button type="button" aria-expanded={dropdownOpen === 'locations'} className={page === 'locations' || locationCatalog.some((item) => item.slug === page) ? 'active' : ''} onClick={() => setDropdownOpen(dropdownOpen === 'locations' ? null : 'locations')}>Locations <span className="chevron">⌄</span></button><div className="services-dropdown locations-dropdown"><button type="button" onClick={() => go('locations')}>All locations<Arrow /></button>{locationCatalog.map((location) => <button type="button" key={location.slug} onClick={() => go(location.slug)}>{location.name}<Arrow /></button>)}</div></div>{[['work', 'Our work'], ['about', 'About'], ['faq', 'FAQ'], ['contact', 'Contact']].map(([id, label]) => <button type="button" key={id} className={page === id ? 'active' : ''} onClick={() => go(id as Page)}>{label}</button>)}<button type="button" className="nav-cta" onClick={openQuote}>Get a quote <Arrow /></button></nav><button type="button" className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => { setMenuOpen(!menuOpen); setDropdownOpen(null) }}><span /><span /></button></header>

  const service = serviceBySlug(page)
  const location = locationBySlug(page)
  return <div className="site-shell"><div className="scroll-progress" style={{ width: `${progress}%` }} />{nav}<main>{service ? <ServiceDetail service={service} onQuote={openQuote} onBack={() => go('services')} /> : location ? <LocationDetail location={location} onQuote={openQuote} onBack={() => go('locations')} /> : page === 'home' && <Home openQuote={openQuote} go={go} setBeforeAfter={setBeforeAfter} beforeAfter={beforeAfter} />}{page === 'services' && <Services openQuote={openQuote} />}{page === 'work' && <Work filter={filter} setFilter={setFilter} filteredGallery={filteredGallery} lightbox={lightbox} setLightbox={setLightbox} beforeAfter={beforeAfter} setBeforeAfter={setBeforeAfter} />}{page === 'locations' && <Locations go={go} />}{page === 'about' && <About openQuote={openQuote} />}{page === 'faq' && <Faq faq={faq} setFaq={setFaq} />}{page === 'contact' && <Contact openQuote={openQuote} />}</main><Footer openQuote={openQuote} />{quoteOpen && <QuoteModal form={form} update={update} status={status} error={error} submit={submit} setQuoteOpen={setQuoteOpen} step={step} setStep={setStep} />}</div>
}

function Hero({ title, italic, copy, openQuote, image = images.hero, video }: { title: string; italic: string; copy: string; openQuote: () => void; image?: string; video?: string }) {
  return <section className={`hero ${video ? 'hero--video' : 'hero--image'}`} style={{ backgroundImage: video ? undefined : `url(${image})` }}><>{video && <video className="hero-video" autoPlay muted loop playsInline poster={image}><source src={video} type="video/mp4" /></video>}</><div className="hero-backdrop" /><div className="hero-content"><Eyebrow>Precision home technology · Texas</Eyebrow><h1>{title}<br /><em>{italic}</em></h1><p className="hero-copy">{copy}</p><div className="hero-actions"><button className="button button--light" onClick={openQuote}>Plan your install <Arrow /></button><a className="text-link" href="/work">Explore our work <Arrow /></a></div></div><div className="hero-meta"><span>01 / 04</span><i /><span>Scroll to explore</span></div><div className="hero-stamp"><strong>15K+</strong><span>screens<br />installed</span></div></section>
}

function Home({ openQuote, go, beforeAfter, setBeforeAfter }: { openQuote: () => void; go: (page: Page) => void; beforeAfter: number; setBeforeAfter: (value: number) => void }) {
  return <><Hero title="Make your wall" italic="the main event." copy="Premium TV mounting and home entertainment installations, tailored to the way your space should feel." openQuote={openQuote} video={heroVideo} /><section className="section intro"><div className="section-kicker">01 — Approach</div><div className="intro-grid"><h2>Technology should<br /><em>disappear.</em></h2><div><p className="lead">The best installation is the one you notice without knowing why. We bring architectural thinking, technical precision, and a deep respect for your home to every wall.</p><button className="text-link text-link--dark" onClick={() => go('about')}>Why DTV <Arrow /></button></div></div></section><ServicePreview go={go} /><BeforeAfter beforeAfter={beforeAfter} setBeforeAfter={setBeforeAfter} /><Process /><Reviews /><PaymentOptions openQuote={openQuote} /><Reasons /><section className="quote-banner"><div><Eyebrow>Ready when you are</Eyebrow><h2>Let’s make<br /><em>your wall count.</em></h2></div><button className="button button--light" onClick={openQuote}>Start your project <Arrow /></button></section></>
}

function PaymentIcon({ type }: { type: 'klarna' | 'card' | 'zelle' | 'apple' }) {
  if (type === 'klarna') return <svg className="payment-icon payment-icon--klarna" viewBox="0 0 110 78" role="img" aria-label="Afterpay Klarna Affirm"><rect x="13" y="1" width="84" height="19" rx="10" className="afterpay-pill" /><text x="55" y="14" textAnchor="middle" className="afterpay-text">afterpay</text><rect x="13" y="22" width="84" height="15" className="klarna-bar" /><text x="55" y="33" textAnchor="middle" className="klarna-text">Klarna.</text><text x="55" y="59" textAnchor="middle" className="affirm-text">affirm</text></svg>
  if (type === 'card') return <svg className="payment-icon payment-icon--card" viewBox="0 0 110 78" role="img" aria-label="Debit and credit cards"><rect x="32" y="18" width="40" height="27" rx="3" transform="rotate(-12 32 18)" className="card-pink" /><rect x="44" y="11" width="40" height="27" rx="3" transform="rotate(34 44 11)" className="card-cream" /><path d="M51 37l-11 20M57 40l-8 18M65 40l-4 17" /><circle cx="52" cy="32" r="3" /><circle cx="61" cy="33" r="3" /></svg>
  if (type === 'zelle') return <svg className="payment-icon payment-icon--zelle" viewBox="0 0 110 78" role="img" aria-label="Zelle"><text x="55" y="48" textAnchor="middle">Zelle</text><circle cx="94" cy="25" r="3" /></svg>
  return <svg className="payment-icon payment-icon--apple" viewBox="0 0 110 78" role="img" aria-label="Apple Pay"><ellipse cx="52" cy="39" rx="29" ry="20" /><path d="M45 32c-5-7-13-5-15 2M48 26c0-6 4-10 9-12M77 24c10 4 14 12 14 17M79 35c8 4 11 10 11 16M79 47c7 2 10 7 10 12" /></svg>
}

function PaymentOptions({ openQuote }: { openQuote: () => void }) {
  const methods: Array<['klarna' | 'card' | 'zelle' | 'apple', string]> = [['klarna', 'Buy Now, Pay Later'], ['card', 'Debit & Credit'], ['zelle', 'Zelle'], ['apple', 'Apple Pay']]
  return <section className="payment-options"><h2>We Offer Many Payment Options!</h2><div className="payment-grid">{methods.map(([type, label]) => <button key={label} onClick={openQuote} aria-label={`Ask about ${label}`}><PaymentIcon type={type} /><span>{label}</span></button>)}</div></section>
}
function Reasons() { const reasons = [['⚒', 'EXPERTS', 'With over two decades of experience, our team can hang a TV on anything. From everyday living rooms to complex entertainment walls, we plan every detail carefully and complete the installation with clean, dependable workmanship.'], ['◈', '10-Year No Fall Warranty', 'We are fully licensed and insured, and every installation is backed by our 10-year no-fall warranty so you can enjoy your TV with confidence for years to come.'], ['♕', '5-Star Rated Over 3 States', 'Our team believes great service is just as important as a secure mount. Customers across our service areas trust us for thoughtful communication and a polished mounting experience.'], ['◎', '100% Satisfaction Guarantee', 'We will not leave your home until you are satisfied with the finished result. We stand behind our work and make sure your room looks clean, balanced, and ready to enjoy.']]; return <section className="reasons"><h2>4 REASONS TO CHOOSE US</h2><div>{reasons.map(([icon, title, copy]) => <article className="reason-card" key={title}><strong>{icon}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div></section> }
function ServicePreview({ go }: { go: (page: Page) => void }) { return <section className="services section" id="services"><div className="section-heading"><div><Eyebrow>02 — Services</Eyebrow><h2>Designed around<br /><em>your space.</em></h2></div><p className="heading-note">From a clean, single-screen setup to a complete entertainment wall, every detail has a purpose.</p></div><div className="service-grid">{serviceCatalog.map((service, index) => <article className="service-card" key={service.slug}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>{String(index + 1).padStart(2, '0')}</span><button onClick={() => go(service.slug)} aria-label={`View ${service.title}`}><Arrow /></button></div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section> }

function BeforeAfter({ beforeAfter, setBeforeAfter }: { beforeAfter: number; setBeforeAfter: (value: number) => void }) { return <section className="before-after section"><div><Eyebrow>03 — The difference</Eyebrow><h2>Nothing<br /><em>out of place.</em></h2><p>We leave every room cleaner, calmer, and more considered than we found it.</p></div><div className="ba-frame"><div className="ba-after" /><div className="ba-before" style={{ width: `${beforeAfter}%` }} /><input aria-label="Compare before and after installation" type="range" min="5" max="95" value={beforeAfter} onChange={(event) => setBeforeAfter(Number(event.target.value))} /><span className="ba-label ba-label--before">Before</span><span className="ba-label ba-label--after">After</span></div></section> }
function Process() { return <section className="section process"><div className="section-heading"><div><Eyebrow>04 — The process</Eyebrow><h2>From idea to<br /><em>perfect setup.</em></h2></div><p className="heading-note">A considered experience from the first conversation to the final cable.</p></div><div className="process-grid">{['Tell us what you need', 'Get your quote', 'Choose your time', 'We arrive prepared', 'Enjoy your setup'].map((title, index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{['Share a few details about your room and the experience you want.', 'We recommend the right approach and give you a clear price.', 'Choose a time that works for your home and your schedule.', 'Our professional technician arrives ready to make it happen.', 'Sit back and enjoy a room that works beautifully.'][index]}</p></article>)}</div></section> }
function Reviews() {
  const reviews = [
    ['Terry Brown', 'Duke did a fantastic job mounting our 55 inch TV over our fireplace. He had to do some improvising with the wires behind the TV and it worked out great! We will definitely use your company in the future for any TV mounting jobs!!'],
    ['Taylor Dru', 'Demarcus was extremely professional and helpful. He was early, communicated effectively and did an amazing job. I’m so glad I found DTV as I will now use them all the time. Thank you for your help! I’ll see you at our next appointment.'],
  ]
  return <section className="section reviews"><div className="reviews-summary"><Eyebrow>Google reviews</Eyebrow><strong className="reviews-rating">EXCELLENT</strong><div className="google-stars" aria-label="5 out of 5 stars">★★★★★</div><p>Based on <b>507 reviews</b></p><a href="https://www.google.com/search?q=DTV+Mounting+Dallas+reviews" target="_blank" rel="noreferrer" className="google-mark">Google</a></div><div className="review-slider">{reviews.map(([name, text]) => <article className="review-card" key={name}><div className="review-card-top"><span className="google-icon">G</span><strong>{name}</strong><span className="review-google-label">Posted on Google</span></div><div className="google-stars">★★★★★</div><p>{text}</p></article>)}<div className="review-controls"><button aria-label="Previous review">←</button><button aria-label="Next review">→</button></div></div></section>
}
function Services({ openQuote }: { openQuote: () => void }) { return <><Hero title="Every detail" italic="has a purpose." copy="A considered service for every screen, wall, and room in your home." openQuote={openQuote} image={images.wall} /><section className="section services-page"><Eyebrow>Services / the full list</Eyebrow><div className="service-list-large">{serviceCatalog.map((service, index) => <button key={service.slug} onClick={openQuote}><span>{String(index + 1).padStart(2, '0')}</span><strong>{service.title}</strong><small>{service.description}</small><Arrow /></button>)}</div></section></> }
function Work({ filter, setFilter, filteredGallery, lightbox, setLightbox, beforeAfter, setBeforeAfter }: { filter: GalleryFilter; setFilter: (value: GalleryFilter) => void; filteredGallery: string[][]; lightbox: string | null; setLightbox: (value: string | null) => void; beforeAfter: number; setBeforeAfter: (value: number) => void }) { const filters: GalleryFilter[] = ['ALL', 'RESIDENTIAL', 'FIREPLACE', 'TV WALLS', 'HIDDEN WIRES', 'OUTDOOR', 'GAMING']; return <><Hero title="The work speaks" italic="for itself." copy="A gallery of installations made to feel effortless, intentional, and entirely yours." openQuote={() => { window.location.hash = 'quote' }} image={images.fireplace} /><section className="section gallery-page"><div className="section-heading"><div><Eyebrow>Our work / selected projects</Eyebrow><h2>Quietly<br /><em>impressive.</em></h2></div><p className="heading-note">Real homes. Real walls. A higher standard of installation.</p></div><div className="filter-bar">{filters.map((item) => <button className={filter === item ? 'selected' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="gallery-grid">{filteredGallery.map(([title, category, image]) => <button className="gallery-tile" key={title} onClick={() => setLightbox(image)}><img src={image} alt={title} /><span><small>{category}</small><strong>{title}</strong></span></button>)}</div></section><BeforeAfter beforeAfter={beforeAfter} setBeforeAfter={setBeforeAfter} />{lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><img src={lightbox} alt="Selected DTV Mounting project" /><button aria-label="Close image">×</button></div>}</> }
function Locations({ go }: { go: (page: Page) => void }) { return <><Hero title="Good work is" italic="close by." copy="DTV Mounting brings the same precise, premium standard to homes across Texas and beyond." openQuote={() => { window.location.hash = 'quote' }} image={images.outdoor} /><section className="section locations-page"><Eyebrow>Coverage / Local teams</Eyebrow><div className="location-cards">{locationCatalog.map((location, index) => <article key={location.slug}><span className="location-number">0{index + 1}</span><h2>{location.name}</h2><p>{location.briefing}</p>{location.phone ? <a href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone} <Arrow /></a> : <button className="text-link text-link--dark" onClick={() => go(location.slug)}>Explore {location.name} <Arrow /></button>}<button className="location-card-link" onClick={() => go(location.slug)}>View local page <Arrow /></button></article>)}</div></section></> }
function About({ openQuote }: { openQuote: () => void }) { return <><Hero title="Technical by nature." italic="Thoughtful by choice." copy="We believe a great installation should be felt in the room, not seen on the wall." openQuote={openQuote} image={images.gaming} /><section className="section about-page"><div className="about-statement"><Eyebrow>The DTV approach</Eyebrow><h2>Built for the way<br /><em>you live.</em></h2></div><div className="about-copy"><p className="lead">For more than 20 years, DTV Mounting has helped Texas homeowners turn blank walls into better experiences. Our technicians pair technical expertise with a sharp eye for proportion, finish, and the small details that make a room feel right.</p><p>Fully licensed and insured. Backed by a 10-year no-fall warranty and a 100% satisfaction guarantee.</p><button className="button button--dark" onClick={openQuote}>Start a conversation <Arrow /></button></div></section></> }
function Faq({ faq, setFaq }: { faq: number | null; setFaq: (value: number | null) => void }) { return <><Hero title="Questions, answered." italic="Before you ask." copy="Everything you need to know about bringing a better picture home." openQuote={() => { window.location.hash = 'quote' }} image={images.hero} /><section className="section faq-page"><Eyebrow>FAQ / the essentials</Eyebrow><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${faq === index ? 'open' : ''}`} key={question}><button onClick={() => setFaq(faq === index ? null : index)}><span>0{index + 1}</span><strong>{question}</strong><i>+</i></button>{faq === index && <p>{answer}</p>}</div>)}</div></section></> }
function Contact({ openQuote }: { openQuote: () => void }) { return <><Hero title="Let's talk" italic="about your wall." copy="Tell us what you are imagining. We will help you figure out the next best step." openQuote={openQuote} image={images.fireplace} /><section className="section contact-page"><div><Eyebrow>Contact / DTV Mounting</Eyebrow><h2>Ready when<br /><em>you are.</em></h2></div><div className="contact-details"><p>For a fast response, call your local DTV Mounting team or send a quote request online.</p>{Object.entries(phoneNumbers).map(([city, phone]) => <a key={city} href={`tel:${phone.replace(/\D/g, '')}`}><span>{city}</span>{phone}<Arrow /></a>)}<button className="button button--dark" onClick={openQuote}>Request a quote <Arrow /></button></div></section></> }
function Footer({ openQuote }: { openQuote: () => void }) { return <footer className="footer"><div className="footer-top"><a className="brand brand--footer" href="/" aria-label="DTV Mounting home"><img src={logo} alt="DTV Mounting" /></a><h2>Better picture.<br /><em>Better room.</em></h2><a className="button button--light" href="/quote" onClick={(event) => { event.preventDefault(); openQuote() }}>Get a quote <Arrow /></a></div><div className="footer-columns"><div><span>Explore</span><a href="/services">Services</a><a href="/locations">Locations</a><a href="/work">Our work</a><a href="/about">About DTV</a></div><div><span>Helpful</span><a href="/faq">FAQ</a><a href="/contact">Contact</a><a href="/quote">Request a quote</a></div><div><span>Connect</span><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube ↗</a></div></div><div className="footer-bottom"><span>© 2026 DTV Mounting</span><span>Dallas · Houston · Austin / San Antonio</span><span>Fully licensed & insured</span></div></footer> }

function QuoteModal({ form, update, status, error, submit, setQuoteOpen, step, setStep }: { form: LeadFormData; update: (field: keyof LeadFormData, value: string | boolean) => void; status: 'idle' | 'submitting' | 'success' | 'error'; error: string; submit: (event: FormEvent<HTMLFormElement>) => void; setQuoteOpen: (value: boolean) => void; step: number; setStep: (value: number) => void }) {
  const stepFields = [formFields.slice(0, 3), formFields.slice(3, 6), formFields.slice(6)]
  const fields = stepFields[step]
  const next = () => {
    const missing = fields.filter((field) => field.required && !form[field.id])
    if (missing.length > 0) return
    if (step < 2) setStep(step + 1)
  }
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setQuoteOpen(false) }}><div className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">{status === 'success' ? <div className="success-state"><div className="success-icon">✓</div><Eyebrow>Request received</Eyebrow><h2>We’ll be in touch.</h2><p>Thanks for sharing the details. Your request is safely in our system.</p><button className="button button--dark" onClick={() => setQuoteOpen(false)}>Back to site <Arrow /></button></div> : <><div className="modal-header"><div><Eyebrow>A better beginning</Eyebrow><h2 id="quote-title">Plan your install.</h2></div><button className="modal-close" aria-label="Close quote form" onClick={() => setQuoteOpen(false)}>×</button></div><div className="form-progress"><span>0{step + 1} / 03</span><div><i style={{ width: `${((step + 1) / 3) * 100}%` }} /></div></div><p className="modal-intro">{['First, tell us how to reach you.', 'Now, tell us about the installation.', 'Anything else we should know?'][step]}</p><form onSubmit={submit}><div className="form-grid">{fields.map((field) => <label className={field.fullWidth ? 'full-width' : ''} key={field.id}>{field.label}{field.required && <sup>*</sup>}{field.type === 'select' ? <select required={field.required} value={String(form[field.id])} onChange={(event) => update(field.id, event.target.value)}><option value="">Select one</option>{field.options?.map((option) => <option key={option} value={option}>{option}</option>)}</select> : field.type === 'textarea' ? <textarea required={field.required} value={String(form[field.id])} onChange={(event) => update(field.id, event.target.value)} placeholder={field.placeholder} rows={3} /> : <input required={field.required} type={field.type} value={String(form[field.id])} onChange={(event) => update(field.id, event.target.value)} placeholder={field.placeholder} />}</label>)}</div>{step === 2 && <label className="consent"><input type="checkbox" checked={form.consent} onChange={(event) => update('consent', event.target.checked)} required /><span>I agree to be contacted about my request.</span></label>}{error && <p className="form-error" role="alert">{error}</p>}{step < 2 ? <button type="button" className="button button--dark submit-button" onClick={next}>Continue <Arrow /></button> : <button className="button button--dark submit-button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending securely…' : 'Send my request'} <Arrow /></button>}</form></>}</div></div>
}

export default App
