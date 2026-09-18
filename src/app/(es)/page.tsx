import type { Metadata } from 'next'

import { buildMetadata, JsonLd, physicianJsonLd } from '@/lib/seo'
import { Home } from '@/views/Home/Home'

export const metadata: Metadata = buildMetadata('es', 'home')

export default function Page (): React.JSX.Element {
  return (
    <>
      <JsonLd data={physicianJsonLd('es')} />
      <Home locale='es' />
    </>
  )
}
