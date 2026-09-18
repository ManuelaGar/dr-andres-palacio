import type { Metadata } from 'next'

import { buildMetadata, faqJsonLd, JsonLd } from '@/lib/seo'
import { Faq } from '@/views/Faq/Faq'

export const metadata: Metadata = buildMetadata('en', 'faq')

export default function Page (): React.JSX.Element {
  return (
    <>
      <JsonLd data={faqJsonLd('en')} />
      <Faq locale='en' />
    </>
  )
}
