import localFont from 'next/font/local'

import type { Locale } from '@/content/site'
import '@/app/globals.css'

const sans = localFont({
  src: [
    { path: '../fonts/instrument-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/instrument-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/instrument-sans-latin-600-normal.woff2', weight: '600', style: 'normal' }
  ],
  variable: '--font-instrument-sans',
  display: 'swap'
})

const serif = localFont({
  src: [
    { path: '../fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' }
  ],
  variable: '--font-instrument-serif',
  display: 'swap'
})

export function RootDocument ({ locale, children }: { locale: Locale, children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang={locale} className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
