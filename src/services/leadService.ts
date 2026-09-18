import type { LeadFormData } from '../data/formSchema'

type LeadPayload = LeadFormData & {
  source: 'website'
  sourcePage: string
  submittedAt: string
  landingPage: string
  referrer: string
}

const apiUrl = import.meta.env.VITE_CRM_API_URL

export async function submitWebsiteLead(form: LeadFormData): Promise<void> {
  if (!form.consent || !form.name || !form.phone || !form.email || !form.service) {
    throw new Error('Please complete the required fields before sending your request.')
  }

  const payload: LeadPayload = {
    ...form,
    source: 'website',
    sourcePage: window.location.pathname,
    submittedAt: new Date().toISOString(),
    landingPage: window.location.href,
    referrer: document.referrer,
  }

  if (!apiUrl) {
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    return
  }

  let response: Response
  try {
    response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('We could not reach our request system. Please try again or call us directly.')
  }

  if (!response.ok) {
    if (response.status === 400) throw new Error('Please check your details and try again.')
    throw new Error('Something went wrong while submitting your request. Please try again or call us directly.')
  }
}
