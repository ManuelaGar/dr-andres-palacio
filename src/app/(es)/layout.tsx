import type { Viewport } from 'next'

import { RootDocument } from '@/components/RootDocument'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBFAF8'
}

export default function SpanishLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <RootDocument locale='es'>{children}</RootDocument>
}
