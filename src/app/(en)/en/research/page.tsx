import type { Metadata } from 'next'

import { buildMetadata } from '@/lib/seo'
import { Research } from '@/views/Research/Research'

export const metadata: Metadata = buildMetadata('en', 'research')

export default function Page (): React.JSX.Element {
  return <Research locale='en' />
}
