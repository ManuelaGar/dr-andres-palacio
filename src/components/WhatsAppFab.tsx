'use client'

import { useEffect, useState } from 'react'

import { WhatsAppIcon } from './icons'
import styles from './WhatsAppFab.module.css'

export function WhatsAppFab ({ href, label, watchId }: { href: string, label: string, watchId: string }): React.JSX.Element {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (target == null) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.12 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [watchId])

  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={styles.fab} data-visible={visible} tabIndex={visible ? 0 : -1} aria-hidden={!visible}>
      <WhatsAppIcon />
      {label}
    </a>
  )
}
