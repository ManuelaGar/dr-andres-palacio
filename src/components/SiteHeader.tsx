import Link from 'next/link'

import { ROUTES, SECTION_IDS, whatsappLink, type Locale, type PageKey } from '@/content/site'
import type { Dictionary } from '@/content/types'
import { Monogram, WhatsAppIcon } from './icons'
import { LanguageSwitch } from './LanguageSwitch'
import { MobileMenu } from './MobileMenu'
import styles from './SiteHeader.module.css'

interface Props {
  locale: Locale
  page: PageKey
  common: Dictionary['common']
}

export function Brand ({ locale, specialty }: { locale: Locale, specialty: string }): React.JSX.Element {
  return (
    <Link href={ROUTES[locale].home} className={styles.brand}>
      <Monogram />
      <span className={styles.brandText}>
        <span className={styles.brandName}>Dr. Andrés Palacio</span>
        <span className={styles.brandSpecialty}>{specialty}</span>
      </span>
    </Link>
  )
}

export function HomeHeader ({ locale, page, common }: Props): React.JSX.Element {
  const ids = SECTION_IDS[locale]
  const wa = whatsappLink(common.whatsappMessage)
  const links = [
    { href: `#${ids.about}`, label: common.navAbout },
    { href: `#${ids.services}`, label: common.navServices },
    { href: `#${ids.visit}`, label: common.navVisit },
    { href: ROUTES[locale].research, label: common.navResearch },
    { href: `#${ids.contact}`, label: common.navContact }
  ]
  const mobileLinks = [...links.slice(0, 4), { href: ROUTES[locale].faq, label: common.navFaq }, links[4]]

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Brand locale={locale} specialty={common.specialty} />
        <nav className={styles.desktopNav} aria-label={common.footerNav}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>{link.label}</Link>
          ))}
          <LanguageSwitch locale={locale} page={page} label={common.languageLabel} />
          <a href={wa} target='_blank' rel='noopener noreferrer' className={styles.waButton}>
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </nav>
        <MobileMenu
          links={mobileLinks}
          openLabel={common.menuOpen}
          closeLabel={common.menuClose}
          whatsappHref={wa}
        >
          <LanguageSwitch locale={locale} page={page} label={common.languageLabel} />
        </MobileMenu>
      </div>
    </header>
  )
}

export function SubpageHeader ({ locale, page, common }: Props): React.JSX.Element {
  return (
    <header className={styles.header}>
      <div className={`${styles.bar} ${styles.barNarrow}`}>
        <Brand locale={locale} specialty={common.specialty} />
        <span className={styles.subpageActions}>
          <LanguageSwitch locale={locale} page={page} label={common.languageLabel} />
          <Link href={ROUTES[locale].home} className={styles.backLink}>← {common.back}</Link>
        </span>
      </div>
    </header>
  )
}
