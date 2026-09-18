import { WhatsAppIcon } from '@/components/icons'
import { SubpageFooter } from '@/components/SiteFooter'
import { SubpageHeader } from '@/components/SiteHeader'
import ui from '@/components/ui.module.css'
import { getDictionary } from '@/content'
import { CONTACT, whatsappLink, type Locale } from '@/content/site'
import sub from '../subpage.module.css'
import styles from './Faq.module.css'

export function Faq ({ locale }: { locale: Locale }): React.JSX.Element {
  const { common, faq } = getDictionary(locale)
  const wa = whatsappLink(common.whatsappMessage)

  return (
    <>
      <SubpageHeader locale={locale} page='faq' common={common} />
      <main>
        <section className={`${ui.containerNarrow} ${sub.intro}`}>
          <p className={ui.eyebrow}>{faq.kicker}</p>
          <h1 className={`${ui.pageTitle} ${styles.title}`}>{faq.title}</h1>
          <p className={sub.lede}>{faq.lede}</p>
        </section>

        <section className={`${ui.containerNarrow} ${styles.body}`}>
          <aside className={styles.aside}>
            <div className={styles.quick}>
              <h2 className={`${ui.eyebrow} ${styles.quickTitle}`}>{faq.quickTitle}</h2>
              <dl className={styles.facts}>
                <div>
                  <dt>{faq.labelWhere}</dt>
                  <dd>{common.officeLine}<br />{CONTACT.street}, {CONTACT.city}</dd>
                </div>
                <div>
                  <dt>{faq.labelHours}</dt>
                  <dd>{common.hoursValue}</dd>
                </div>
                <div>
                  <dt>{faq.labelBook}</dt>
                  <dd><a href={wa} target='_blank' rel='noopener noreferrer'>{CONTACT.phoneDisplay}</a></dd>
                </div>
              </dl>
            </div>
            <a href={wa} target='_blank' rel='noopener noreferrer' className={ui.btnPrimary}>
              <WhatsAppIcon />
              {common.fab}
            </a>
          </aside>

          <div className={styles.list}>
            {faq.items.map((item, i) => (
              <details key={item.q} name='faq' open={i === 0} className={styles.item}>
                <summary className={styles.question}>
                  <h2 className={styles.questionText}>{item.q}</h2>
                  <span className={styles.sign} aria-hidden='true' />
                </summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SubpageFooter locale={locale} common={common} />
    </>
  )
}
