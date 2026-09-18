export type ServiceSlug =
  | 'flat-tv-mounting'
  | 'same-day-tv-mounting'
  | 'hide-tv-wire'
  | 'soundbar-installation'
  | 'tv-dismounting'
  | 'tv-shelf-mounting'
  | 'gaming-console-mounting'
  | 'led-strip-light-installation'

export type Service = {
  slug: ServiceSlug
  title: string
  eyebrow: string
  description: string
  image: string
  benefits: string[]
  details: string
}

const serviceImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`

export const serviceCatalog: Service[] = [
  { slug: 'flat-tv-mounting', title: 'Flat TV Mounting', eyebrow: 'Clean lines. Perfect level.', description: 'A beautifully mounted screen that feels considered from every angle.', image: serviceImage('photo-1593784991095-a205069470b6'), benefits: ['Precision leveling and secure mounting', 'Wall and viewing-height consultation', 'Clean finish with careful final inspection'], details: 'Our technicians assess the wall, viewing position, and hardware before creating a secure, polished installation for your room.' },
  { slug: 'same-day-tv-mounting', title: 'Same Day TV Mounting', eyebrow: 'Your room, ready today.', description: 'Fast, professional service when you want your setup finished without waiting.', image: serviceImage('photo-1601944177325-f8867652837f'), benefits: ['Select same-day availability', 'Professional arrival and setup', 'Clear pricing before work begins'], details: 'When availability allows, we can help transform your room on the same day you call. Contact your local team for current openings.' },
  { slug: 'hide-tv-wire', title: 'Hide TV Wire', eyebrow: 'Let the technology disappear.', description: 'A clean visual field with cables routed thoughtfully and safely.', image: serviceImage('photo-1558888401-3cc1de77652d'), benefits: ['Concealed cable planning', 'Solutions for multiple wall materials', 'A cleaner, more architectural finish'], details: 'We plan the cable path around your wall and devices so the screen can take center stage instead of the wiring.' },
  { slug: 'soundbar-installation', title: 'Soundbar Installation', eyebrow: 'Better sound. Better balance.', description: 'Complete the screen with sound that looks as intentional as it feels.', image: serviceImage('photo-1593359677879-a4bb92f829d1'), benefits: ['Secure soundbar mounting', 'Centered placement under the screen', 'Device and cable coordination'], details: 'A soundbar should support the screen visually and acoustically. We take care of alignment, height, and a clean final presentation.' },
  { slug: 'tv-dismounting', title: 'TV Dismounting', eyebrow: 'Careful by design.', description: 'Professional removal for upgrades, moves, renovations, or a fresh start.', image: serviceImage('photo-1605810230434-7631ac76ec81'), benefits: ['Safe removal by experienced technicians', 'Hardware kept organized', 'Wall condition assessed after removal'], details: 'We carefully dismount your TV and preserve the hardware so your next move or upgrade starts with less stress.' },
  { slug: 'tv-shelf-mounting', title: 'TV Shelf Mounting', eyebrow: 'The right place for everything.', description: 'Secure, level shelving that completes your entertainment wall.', image: serviceImage('photo-1524758631624-e2822e304c36'), benefits: ['Secure wall anchoring', 'Balanced spacing and alignment', 'A tailored finish for devices and decor'], details: 'Add useful display and storage without compromising the calm, clean character of your room.' },
  { slug: 'gaming-console-mounting', title: 'Gaming Console Mounting', eyebrow: 'Built for play.', description: 'A smarter, more immersive setup for every session.', image: serviceImage('photo-1542751371-adc38448a05e'), benefits: ['Console and accessory placement', 'Cable management for a cleaner setup', 'A more immersive gaming position'], details: 'We create a focused gaming setup that keeps your screen, console, controllers, and cables organized.' },
  { slug: 'led-strip-light-installation', title: 'LED Strip Light Installation', eyebrow: 'Set the atmosphere.', description: 'Subtle, cinematic light that makes your screen and room feel richer.', image: serviceImage('photo-1519608487953-e999c86e7455'), benefits: ['Clean, even light placement', 'Entertainment wall accent lighting', 'A polished finish without visible clutter'], details: 'Thoughtful accent lighting can change the mood of a room. We install it with the same care as the screen itself.' },
]

export const serviceBySlug = (slug: string) => serviceCatalog.find((service) => service.slug === slug)
