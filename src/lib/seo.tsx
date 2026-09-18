import type { Metadata } from 'next'

import { getDictionary } from '@/content'
import { CONTACT, ROUTES, SITE_URL, type Locale, type PageKey } from '@/content/site'

const OG_LOCALE: Record<Locale, string> = { es: 'es_CO', en: 'en_US' }

export function buildMetadata (locale: Locale, page: PageKey): Metadata {
  const { title, description } = getDictionary(locale).meta[page]
  const path = ROUTES[locale][page]

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: ROUTES.es[page],
        en: ROUTES.en[page],
        'x-default': ROUTES.es[page]
      }
    },
    openGraph: {
      type: 'website',
      url: path,
      siteName: CONTACT.name,
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: OG_LOCALE[locale === 'es' ? 'en' : 'es'],
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: CONTACT.name }]
    },
    twitter: {
      card: 'summary_large_image',
      site: `@${CONTACT.xHandle}`,
      creator: `@${CONTACT.xHandle}`
    }
  }
}

export function physicianJsonLd (locale: Locale): Record<string, unknown> {
  const { meta } = getDictionary(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/#physician`,
    name: CONTACT.name,
    description: meta.home.description,
    url: `${SITE_URL}${ROUTES[locale].home === '/' ? '' : ROUTES[locale].home}`,
    image: `${SITE_URL}/images/andres-palacio-1200.jpg`,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    medicalSpecialty: 'https://schema.org/Endocrine',
    availableLanguage: ['es', 'en'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${CONTACT.street}, Consultorio ${CONTACT.office}, Edificio ${CONTACT.building}`,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country
    },
    hasMap: CONTACT.directionsUrl,
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '13:00' }
    ],
    sameAs: [CONTACT.xUrl, CONTACT.substackUrl]
  }
}

export function faqJsonLd (locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getDictionary(locale).faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  }
}

export function JsonLd ({ data }: { data: Record<string, unknown> }): React.JSX.Element {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
