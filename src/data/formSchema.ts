export type ServiceId = string

export type LeadFormData = {
  name: string
  phone: string
  email: string
  service: ServiceId
  tvSize: string
  wallType: string
  location: string
  preferredDate: string
  notes: string
  consent: boolean
}

export const initialLeadForm: LeadFormData = {
  name: '', phone: '', email: '', service: '', tvSize: '', wallType: '', location: '', preferredDate: '', notes: '', consent: false,
}

export const formFields: Array<{
  id: keyof LeadFormData
  label: string
  type: 'text' | 'tel' | 'email' | 'date' | 'select' | 'textarea'
  required?: boolean
  fullWidth?: boolean
  placeholder?: string
  options?: string[]
}> = [
  { id: 'name', label: 'Your name', type: 'text', required: true, placeholder: 'Alex Morgan' },
  { id: 'phone', label: 'Phone number', type: 'tel', required: true, placeholder: '(469) 000-0000' },
  { id: 'email', label: 'Email address', type: 'email', required: true, placeholder: 'alex@example.com' },
  { id: 'service', label: 'What can we help with?', type: 'select', required: true, options: ['Flat TV Mounting', 'Same Day TV Mounting', 'Hide TV Wire', 'Soundbar Installation', 'TV Dismounting', 'TV Shelf Mounting', 'Gaming Console Mounting', 'LED Strip Light Installation', 'Fireplace TV Mounting', 'TV Wall Installation'] },
  { id: 'tvSize', label: 'TV size', type: 'select', required: true, options: ['Under 40 inches', '40–55 inches', '56–70 inches', '71–85 inches', 'Over 85 inches'] },
  { id: 'wallType', label: 'Wall type', type: 'select', required: true, options: ['Drywall', 'Brick', 'Stone / tile', 'Above a fireplace', 'Not sure'] },
  { id: 'location', label: 'Installation city', type: 'text', required: true, placeholder: 'Dallas, TX' },
  { id: 'preferredDate', label: 'Preferred date', type: 'date' },
  { id: 'notes', label: 'Anything else we should know?', type: 'textarea', fullWidth: true, placeholder: 'Tell us about the room, access, or the look you have in mind.' },
]
