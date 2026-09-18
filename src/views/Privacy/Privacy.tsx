import { SubpageFooter } from '@/components/SiteFooter'
import { SubpageHeader } from '@/components/SiteHeader'
import ui from '@/components/ui.module.css'
import { getDictionary } from '@/content'
import type { Locale } from '@/content/site'
import sub from '../subpage.module.css'
import styles from './Privacy.module.css'

export function Privacy ({ locale }: { locale: Locale }): React.JSX.Element {
  const { common, privacy } = getDictionary(locale)

  return (
    <>
      <SubpageHeader locale={locale} page='privacy' common={common} />
      <main className={`${ui.containerNarrow} ${sub.intro} ${styles.page}`}>
        <h1 className={ui.pageTitle}>{privacy.title}</h1>
        <p className={styles.updated}>{privacy.updated}</p>
        {privacy.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph} className={styles.paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </main>
      <SubpageFooter locale={locale} common={common} />
    </>
  )
}
