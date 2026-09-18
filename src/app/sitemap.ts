import type { MetadataRoute } from 'next'

import { ROUTES, SITE_URL, type PageKey } from '@/content/site'

export const dynamic = 'force-static'

const PRIORITY: Record<PageKey, number> = { home: 1, research: 0.6, faq: 0.7, privacy: 0.2 }

const absolute = (path: string): string => path === '/' ? SITE_URL : `${SITE_URL}${path}`

export default function sitemap (): MetadataRoute.Sitemap {
  return (Object.keys(PRIORITY) as PageKey[]).flatMap((page) => {
    const languages = { es: absolute(ROUTES.es[page]), en: absolute(ROUTES.en[page]) }
    return [
      { url: languages.es, priority: PRIORITY[page], alternates: { languages } },
      { url: languages.en, priority: PRIORITY[page], alternates: { languages } }
    ]
  })
}
