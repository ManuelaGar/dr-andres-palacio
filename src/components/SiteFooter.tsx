import Link from 'next/link'

import { CONTACT, ROUTES, SECTION_IDS, type Locale } from '@/content/site'
import type { Dictionary } from '@/content/types'
import { Monogram } from './icons'
import styles from './SiteFooter.module.css'

interface Props {
  locale: Locale
  common: Dictionary['common']
}

export function HomeFooter ({ locale, common }: Props): React.JSX.Element {
  const ids = SECTION_IDS[locale]
  const routes = ROUTES[locale]
  const links = [
    { href: `#${ids.about}`, label: common.navAbout },
    { href: `#${ids.services}`, label: common.navServices },
    { href: `#${ids.visit}`, label: common.navVisit },
    { href: routes.research, label: common.navResearch },
    { href: routes.faq, label: common.navFaq },
    { href: routes.privacy, label: common.navPrivacy }
  ]

  return (
    <footer className={`${styles.footer} ${styles.spaced}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <Monogram color='#FBFAF8' />
              <span className={styles.brandText}>
                <span className={styles.brandName}>Dr. Andrés Palacio</span>
                <span className={styles.brandSpecialty}>{common.specialty}</span>
              </span>
            </div>
            <address className={styles.address}>
              {common.officeLine}<br />
              {CONTACT.street}, {CONTACT.city}, Colombia<br />
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneDisplay}</a><br />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </address>
          </div>
          <div>
            <div className={styles.heading}>{common.footerNav}</div>
            <nav className={styles.links} aria-label={common.footerNav}>
              {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </nav>
          </div>
          <div>
            <div className={styles.heading}>{common.footerFollow}</div>
            <div className={styles.links}>
              <a href={CONTACT.xUrl} target='_blank' rel='noopener noreferrer'>X · @{CONTACT.xHandle}</a>
              <a href={CONTACT.substackUrl} target='_blank' rel='noopener noreferrer'>Substack · @{CONTACT.substackHandle}</a>
            </div>
            <p className={styles.hours}>{common.hoursValue}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Dr. Andrés Palacio · {common.license}</span>
          <span>{common.bilingual}</span>
        </div>
      </div>
    </footer>
  )
}

export function SubpageFooter ({ locale, common }: Props): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerNarrow}>
        <div className={styles.compactText}>
          Dr. Andrés Palacio · {common.specialty}<br />
          Intermédica 1112, {CONTACT.city} · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
        <span className={styles.compactLinks}>
          <Link href={ROUTES[locale].privacy} className={styles.muted}>{common.navPrivacy}</Link>
          <Link href={ROUTES[locale].home} className={styles.back}>← {common.back}</Link>
        </span>
      </div>
    </footer>
  )
}
