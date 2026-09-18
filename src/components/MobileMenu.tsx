'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

import { WhatsAppIcon } from './icons'
import styles from './SiteHeader.module.css'

interface Props {
  links: Array<{ href: string, label: string }>
  openLabel: string
  closeLabel: string
  whatsappHref: string
  children: React.ReactNode
}

export function MobileMenu ({ links, openLabel, closeLabel, whatsappHref, children }: Props): React.JSX.Element {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <span className={styles.mobileActions}>
        <a href={whatsappHref} target='_blank' rel='noopener noreferrer' className={styles.waRound} aria-label='WhatsApp'>
          <WhatsAppIcon size={20} />
        </a>
        <button
          type='button'
          className={styles.burger}
          aria-label={open ? closeLabel : openLabel}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </span>
      <div id={panelId} className={styles.mobilePanel} hidden={!open}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        {children}
      </div>
    </>
  )
}
