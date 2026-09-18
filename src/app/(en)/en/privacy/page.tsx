import type { Metadata } from 'next'

import { buildMetadata } from '@/lib/seo'
import { Privacy } from '@/views/Privacy/Privacy'

export const metadata: Metadata = buildMetadata('en', 'privacy')

export default function Page (): React.JSX.Element {
  return <Privacy locale='en' />
}
