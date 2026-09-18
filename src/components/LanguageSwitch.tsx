import Link from 'next/link'

import { ROUTES, type Locale, type PageKey } from '@/content/site'
import styles from './LanguageSwitch.module.css'

const LABELS: Record<Locale, { short: string, name: string }> = {
  es: { short: 'ES', name: 'Español' },
  en: { short: 'EN', name: 'English' }
}

export function LanguageSwitch ({ locale, page, label }: { locale: Locale, page: PageKey, label: string }): React.JSX.Element {
  return (
    <nav className={styles.switch} aria-label={label}>
      {(Object.keys(LABELS) as Locale[]).map((lang) => (
        <Link
          key={lang}
          href={ROUTES[lang][page]}
          hrefLang={lang}
          lang={lang}
          aria-label={LABELS[lang].name}
          aria-current={lang === locale ? 'page' : undefined}
          className={lang === locale ? styles.active : styles.option}
        >
          {LABELS[lang].short}
        </Link>
      ))}
    </nav>
  )
}
