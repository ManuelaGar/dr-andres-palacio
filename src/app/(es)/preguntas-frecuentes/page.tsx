import type { Metadata } from 'next'

import { buildMetadata, faqJsonLd, JsonLd } from '@/lib/seo'
import { Faq } from '@/views/Faq/Faq'

export const metadata: Metadata = buildMetadata('es', 'faq')

export default function Page (): React.JSX.Element {
  return (
    <>
      <JsonLd data={faqJsonLd('es')} />
      <Faq locale='es' />
    </>
  )
}
