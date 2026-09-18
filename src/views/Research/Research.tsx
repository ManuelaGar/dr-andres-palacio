import { SubpageFooter } from '@/components/SiteFooter'
import { SubpageHeader } from '@/components/SiteHeader'
import ui from '@/components/ui.module.css'
import { getDictionary } from '@/content'
import { whatsappLink, type Locale } from '@/content/site'
import sub from '../subpage.module.css'
import styles from './Research.module.css'

export function Research ({ locale }: { locale: Locale }): React.JSX.Element {
  const { common, research } = getDictionary(locale)

  return (
    <>
      <SubpageHeader locale={locale} page='research' common={common} />
      <main>
        <section className={`${ui.containerNarrow} ${sub.intro}`}>
          <p className={ui.eyebrow}>{research.kicker}</p>
          <h1 className={`${ui.pageTitle} ${styles.title}`}>{research.title}</h1>
          <p className={sub.lede}>{research.lede}</p>
          <ul className={styles.tags}>
            <li>{research.tagGroup}</li>
            <li>Emory University · CES · UPB</li>
            <li>{research.tagYears}</li>
          </ul>
        </section>

        <section className={`${ui.containerNarrow} ${styles.groups}`}>
          {research.groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>{group.title}</h2>
                <span className={styles.rule} aria-hidden='true' />
                <span className={styles.count}>{research.publicationCount(group.items.length)}</span>
              </div>
              <ul className={styles.list}>
                {group.items.map((pub) => (
                  <li key={pub.title} className={styles.pub}>
                    <div className={styles.pubText}>
                      <h3 className={styles.pubTitle}>{pub.title}</h3>
                      <p className={styles.pubSource}>{pub.source}</p>
                    </div>
                    {pub.doi != null && (
                      <a href={`https://doi.org/${pub.doi}`} target='_blank' rel='noopener noreferrer' className={styles.pubLink}>{research.viewPub}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className={styles.note}>{research.note}</p>
        </section>

        <section className={`${ui.containerNarrow} ${styles.ctaSection}`}>
          <div className={sub.ctaBox}>
            <div className={sub.ctaText}>
              <h2 className={sub.ctaTitle}>{research.ctaTitle}</h2>
              <p className={sub.ctaBody}>{research.ctaBody}</p>
            </div>
            <a href={whatsappLink()} target='_blank' rel='noopener noreferrer' className={ui.btnGold}>{research.ctaBtn}</a>
          </div>
        </section>
      </main>
      <SubpageFooter locale={locale} common={common} />
    </>
  )
}
