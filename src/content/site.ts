export type Locale = 'es' | 'en'

export type PageKey = 'home' | 'research' | 'faq' | 'privacy'

export const SITE_URL = 'https://drpalacio.com'

export const ROUTES: Record<Locale, Record<PageKey, string>> = {
  es: { home: '/', research: '/investigacion', faq: '/preguntas-frecuentes', privacy: '/privacidad' },
  en: { home: '/en', research: '/en/research', faq: '/en/faq', privacy: '/en/privacy' }
}

export const CONTACT = {
  name: 'Dr. Andrés Palacio',
  phoneDisplay: '+57 320 681 6213',
  phoneE164: '+573206816213',
  email: 'andres@drpalacio.com',
  building: 'Intermédica',
  office: '1112',
  street: 'Calle 7 #39-197',
  city: 'Medellín',
  region: 'Antioquia',
  country: 'CO',
  medicalLicense: '5024401',
  xHandle: 'palacioendocrin',
  substackHandle: 'andrespalacio1',
  xUrl: 'https://x.com/palacioendocrin',
  substackUrl: 'https://substack.com/@andrespalacio1',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Edificio+Intermedica+Calle+7+%2339-197+Medellin',
  mapEmbedUrl: 'https://www.google.com/maps?q=Calle%207%20%2339-197%20Medellin%20Colombia&output=embed'
} as const

export function whatsappLink (message?: string): string {
  const base = `https://wa.me/${CONTACT.phoneE164.slice(1)}`
  return message == null ? base : `${base}?text=${encodeURIComponent(message)}`
}

export const SECTION_IDS: Record<Locale, Record<'top' | 'about' | 'services' | 'visit' | 'ideas' | 'contact', string>> = {
  es: { top: 'inicio', about: 'sobre-mi', services: 'servicios', visit: 'consulta', ideas: 'ideas', contact: 'contacto' },
  en: { top: 'top', about: 'about', services: 'services', visit: 'your-visit', ideas: 'ideas', contact: 'contact' }
}
