export type LocationSlug = 'austin' | 'houston' | 'san-antonio' | 'dallas' | 'florida' | 'atlanta'

export type Location = {
  slug: LocationSlug
  name: string
  region: string
  phone?: string
  address?: string
  image: string
  mapQuery: string
  briefing: string
  services: string[]
}

export const locationCatalog: Location[] = [
  { slug: 'austin', name: 'Austin', region: 'Central Texas', phone: '(737) 377-2980', mapQuery: 'Austin Texas', image: 'https://images.unsplash.com/photo-1494526585095-c417462?auto=format&fit=crop&w=2200&q=88', briefing: 'From downtown condos to Hill Country homes, our Austin team brings clean, careful installation to every kind of space.', services: ['Flat TV Mounting', 'Hide TV Wire', 'Soundbar Installation'] },
  { slug: 'houston', name: 'Houston', region: 'Greater Houston', phone: '(346) 998-4437', mapQuery: 'Houston Texas', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88', briefing: 'Our Houston service helps homeowners create comfortable, polished entertainment spaces across the greater metro area.', services: ['Same Day TV Mounting', 'Fireplace TV Mounting', 'TV Wall Installation'] },
  { slug: 'san-antonio', name: 'San Antonio', region: 'South Texas', phone: '(737) 377-2980', mapQuery: 'San Antonio Texas', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88', briefing: 'In San Antonio, we combine practical technical planning with the thoughtful finish your home deserves.', services: ['Flat TV Mounting', 'TV Dismounting', 'Gaming Console Mounting'] },
  { slug: 'dallas', name: 'Dallas', region: 'North Texas', phone: '(469) 436-5600', address: '15150 Preston Road, STE 300, Dallas, TX 75248', mapQuery: '15150 Preston Road Dallas TX 75248', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88', briefing: 'Our Dallas headquarters serves homeowners who want a precise, reliable installation with a premium finish.', services: ['Flat TV Mounting', 'Fireplace TV Mounting', 'TV Wall Installation'] },
  { slug: 'florida', name: 'Florida', region: 'Florida service area', mapQuery: 'Florida, USA', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88', briefing: 'DTV Mounting extends its installation standard to select Florida service areas. Contact us to confirm availability near you.', services: ['Flat TV Mounting', 'Hide TV Wire', 'Soundbar Installation'] },
  { slug: 'atlanta', name: 'Atlanta', region: 'Metro Atlanta', mapQuery: 'Atlanta Georgia', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=88', briefing: 'For select Atlanta-area projects, our team brings the same organized process and clean visual finish to your entertainment space.', services: ['Flat TV Mounting', 'TV Wall Installation', 'LED Strip Light Installation'] },
]

export const locationBySlug = (slug: string) => locationCatalog.find((location) => location.slug === slug)
