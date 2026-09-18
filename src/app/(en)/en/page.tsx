import type { Metadata } from 'next'

import { buildMetadata, JsonLd, physicianJsonLd } from '@/lib/seo'
import { Home } from '@/views/Home/Home'

export const metadata: Metadata = buildMetadata('en', 'home')

export default function Page (): React.JSX.Element {
  return (
    <>
      <JsonLd data={physicianJsonLd('en')} />
      <Home locale='en' />
    </>
  )
}
