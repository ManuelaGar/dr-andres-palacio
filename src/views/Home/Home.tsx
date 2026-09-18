import Link from 'next/link'

import { ClockIcon, GlobeIcon, MailIcon, PinIcon, ServiceGlyph, SubstackIcon, WhatsAppIcon, XIcon } from '@/components/icons'
import { Portrait } from '@/components/Portrait'
import { HomeFooter } from '@/components/SiteFooter'
import { HomeHeader } from '@/components/SiteHeader'
import ui from '@/components/ui.module.css'
import { WhatsAppFab } from '@/components/WhatsAppFab'
import { getDictionary } from '@/content'
import { CONTACT, ROUTES, SECTION_IDS, whatsappLink, type Locale } from '@/content/site'
import styles from './Home.module.css'

const pad = (n: number): string => String(n).padStart(2, '0')

export function Home ({ locale }: { locale: Locale }): React.JSX.Element {
  const { common, home } = getDictionary(locale)
  const ids = SECTION_IDS[locale]
  const routes = ROUTES[locale]
  const wa = whatsappLink(common.whatsappMessage)

  return (
    <>
      <HomeHeader locale={locale} page='home' common={common} />
      <main>
        <section id={ids.top} className={`${ui.container} ${styles.hero}`}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.bilingualPill}>
                <GlobeIcon />
                {common.bilingual}
              </div>
              <div className={styles.phoneIntro}>
                <span className={styles.avatar}>
                  <Portrait alt='' variant='face' sizes='64px' className={styles.avatarImg} />
                </span>
                <span className={styles.phoneMeta}>{common.specialty}<br />{home.heroMeta}</span>
              </div>
              <h1 className={styles.heroTitle}>Dr. Andrés<br className={styles.titleBreak} /> Palacio</h1>
              <p className={styles.heroSpecialty}>{common.specialty}</p>
              <p className={styles.heroLede}>{home.heroLede}</p>
              <div className={styles.ctaRow}>
                <a href={wa} target='_blank' rel='noopener noreferrer' className={ui.btnPrimary}>
                  <WhatsAppIcon />
                  {common.ctaWhatsapp}
                </a>
                <a href={`mailto:${CONTACT.email}`} className={ui.btnSecondary}>
                  <MailIcon />
                  {home.ctaEmail}
                </a>
              </div>
              <div className={styles.followRow}>
                <span className={styles.followLabel}>{home.followMe}</span>
                <a href={CONTACT.xUrl} target='_blank' rel='noopener noreferrer' className={styles.socialLink}>
                  <XIcon />
                  @{CONTACT.xHandle}
                </a>
                <a href={CONTACT.substackUrl} target='_blank' rel='noopener noreferrer' className={styles.socialLink}>
                  <SubstackIcon />
                  @{CONTACT.substackHandle}
                </a>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <Portrait alt={home.photoAlt} sizes='(max-width: 699px) 1px, (max-width: 1039px) 50vw, 600px' priority className={styles.heroImg} />
            </div>
          </div>

          <ul className={styles.contactStrip}>
            <li className={styles.contactCard}>
              <span className={ui.iconTile}><PinIcon /></span>
              <div>
                <div className={styles.contactLabel}>{common.location}</div>
                <div className={styles.contactValue}>Intermédica {CONTACT.office}<br />{CONTACT.city}, Colombia</div>
              </div>
            </li>
            <li className={styles.contactCard}>
              <span className={ui.iconTile}><WhatsAppIcon size={19} color='var(--green)' strokeWidth={1.5} /></span>
              <div>
                <div className={styles.contactLabel}>WhatsApp</div>
                <div className={styles.contactValue}><a href={wa} target='_blank' rel='noopener noreferrer'>{CONTACT.phoneDisplay}</a></div>
              </div>
            </li>
            <li className={styles.contactCard}>
              <span className={ui.iconTile}><ClockIcon /></span>
              <div>
                <div className={styles.contactLabel}>{common.hours}</div>
                <div className={styles.contactValue}>{common.hoursShort}</div>
              </div>
            </li>
            <li className={styles.contactCard}>
              <span className={ui.iconTile}><MailIcon size={19} /></span>
              <div className={styles.minW0}>
                <div className={styles.contactLabel}>Email</div>
                <div className={`${styles.contactValue} ${styles.breakAnywhere}`}><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              </div>
            </li>
          </ul>
        </section>

        <section className={`${ui.container} ${styles.quoteSection}`}>
          <figure className={styles.quoteCard}>
            <blockquote className={styles.quote}>{home.quote}</blockquote>
            <figcaption className={styles.signature}>
              <picture>
                <source type='image/avif' srcSet='/images/firma-h128.avif' />
                <source type='image/webp' srcSet='/images/firma-h128.webp' />
                <img src='/images/firma-h128.png' alt={home.signatureAlt} width={61} height={128} className={styles.signatureImg} loading='lazy' />
              </picture>
              <span className={styles.signatureName}>Andrés Palacio</span>
            </figcaption>
          </figure>
        </section>

        <section id={ids.about} className={`${ui.container} ${ui.section}`}>
          <div className={styles.aboutGrid}>
            <div className={`${ui.card} ${styles.aboutCard}`}>
              <h2 className={`${ui.eyebrow} ${styles.cardEyebrow}`}>{home.aboutTitle}</h2>
              <p className={styles.aboutText}>{home.aboutP1}</p>
              <p className={styles.aboutText}>{home.aboutP2}</p>
              <span className={styles.licensePill}>{common.license}</span>
            </div>
            <div className={`${ui.card} ${styles.educationCard}`}>
              <h3 className={`${ui.eyebrow} ${styles.cardEyebrow}`}>{home.educationTitle}</h3>
              <ul className={styles.educationList}>
                {home.education.map((item) => (
                  <li key={item.title}>
                    <div className={styles.educationTitle}>{item.title}</div>
                    <div className={styles.educationDetail}>{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
            <ul className={styles.authorityCard}>
              {home.authority.map((item) => (
                <li key={item.title}>
                  <div className={styles.authorityTitle}>{item.title}</div>
                  <div className={styles.authorityDetail}>{item.detail}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id={ids.services} className={`${ui.container} ${ui.section}`}>
          <div className={styles.sectionIntro}>
            <h2 className={ui.h2}>{home.servicesTitle}</h2>
            <p className={styles.lede}>{home.servicesLede}</p>
          </div>
          <ul className={styles.servicesGrid}>
            {home.services.map((service, i) => (
              <li key={service.title} className={`${styles.serviceCard} ${ui.lift}`}>
                <span className={styles.serviceIcon}><ServiceGlyph name={service.icon} /></span>
                <span className={styles.serviceNum} aria-hidden='true'>{pad(i + 1)}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceBody}>{service.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id={ids.visit} className={`${ui.container} ${ui.section}`}>
          <div className={styles.visitIntro}>
            <h2 className={`${ui.h2} ${styles.visitTitle}`}>{home.visitTitle}</h2>
            <p className={styles.visitLede}>{home.visitLede}</p>
          </div>
          <ol className={styles.timeline}>
            {home.steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={i === home.steps.length - 1 ? `${styles.stepDot} ${styles.stepDotGold}` : styles.stepDot}>{pad(i + 1)}</span>
                <div className={styles.minW0}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.teleBox}>
            <div className={styles.teleText}>
              <h3 className={styles.teleTitle}>{home.teleTitle}</h3>
              <p className={styles.teleBody}>{home.teleBody}</p>
            </div>
            <a href={wa} target='_blank' rel='noopener noreferrer' className={ui.btnPrimary}>{common.ctaWhatsapp}</a>
          </div>
        </section>

        <section id={ids.ideas} className={`${ui.container} ${ui.section}`}>
          <div className={styles.ideasBox}>
            <div className={styles.ideasMain}>
              <h2 className={`${ui.eyebrow} ${styles.ideasEyebrow}`}>{home.ideasTitle}</h2>
              <p className={styles.ideasBody}>{home.ideasBody}</p>
              <div className={styles.ctaRow}>
                <a href={CONTACT.substackUrl} target='_blank' rel='noopener noreferrer' className={ui.btnPrimary}>{home.ctaSubstack}</a>
                <a href={CONTACT.xUrl} target='_blank' rel='noopener noreferrer' className={ui.btnWhite}>{home.ctaX}</a>
              </div>
            </div>
            <div className={styles.ideasHandles}>
              <div className={styles.handle}>
                <span className={ui.iconTile}><SubstackIcon size={18} color='var(--green)' /></span>
                Substack · @{CONTACT.substackHandle}
              </div>
              <div className={styles.handle}>
                <span className={ui.iconTile}><XIcon size={16} /></span>
                X · @{CONTACT.xHandle}
              </div>
            </div>
          </div>
        </section>

        <section id={ids.contact} className={`${ui.container} ${ui.section}`}>
          <h2 className={ui.h2}>{home.contactTitle}</h2>
          <div className={styles.contactGrid}>
            <div className={`${ui.card} ${styles.contactDetails}`}>
              <div className={styles.detailRow}>
                <span className={`${ui.iconTile} ${styles.tileLg}`}><PinIcon /></span>
                <div className={styles.minW0}>
                  <div className={styles.contactLabel}>{common.location}</div>
                  <address className={styles.detailValue}>{common.officeLine}<br />{CONTACT.street}, {CONTACT.city}</address>
                </div>
              </div>
              <div className={styles.detailRow}>
                <span className={`${ui.iconTile} ${styles.tileLg}`}><ClockIcon /></span>
                <div className={styles.minW0}>
                  <div className={styles.contactLabel}>{common.hours}</div>
                  <div className={styles.detailValue}>{common.hoursValue}</div>
                </div>
              </div>
              <div className={styles.detailRow}>
                <span className={`${ui.iconTile} ${styles.tileLg}`}><WhatsAppIcon size={19} color='var(--green)' strokeWidth={1.5} /></span>
                <div className={styles.minW0}>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <div className={styles.detailValue}><a href={wa} target='_blank' rel='noopener noreferrer'>{CONTACT.phoneDisplay}</a></div>
                </div>
              </div>
              <div className={styles.detailRow}>
                <span className={`${ui.iconTile} ${styles.tileLg}`}><MailIcon size={19} /></span>
                <div className={styles.minW0}>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={`${styles.detailValue} ${styles.breakAnywhere}`}><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
                </div>
              </div>
              <div className={styles.ctaRowTight}>
                <a href={wa} target='_blank' rel='noopener noreferrer' className={ui.btnPrimary}>{common.ctaRequest}</a>
                <a href={CONTACT.directionsUrl} target='_blank' rel='noopener noreferrer' className={ui.btnSecondary}>{home.ctaDirections}</a>
              </div>
            </div>
            <div className={styles.mapBox}>
              <iframe
                src={CONTACT.mapEmbedUrl}
                title={home.mapTitle}
                className={styles.map}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </section>

        <section className={`${ui.container} ${ui.section}`}>
          <div className={styles.teasers}>
            <Link href={routes.research} className={`${styles.teaser} ${ui.lift}`}>
              <span className={ui.eyebrow}>{home.researchTitle}</span>
              <span className={styles.teaserTitle}>{home.researchTeaser}</span>
              <span className={styles.teaserBody}>{home.researchLede}</span>
              <span className={styles.teaserLink}>{home.seeAll} →</span>
            </Link>
            <Link href={routes.faq} className={`${styles.teaser} ${styles.teaserMint} ${ui.lift}`}>
              <span className={`${ui.eyebrow} ${styles.eyebrowDark}`}>{common.navFaq}</span>
              <span className={styles.teaserTitle}>{home.faqTeaser}</span>
              <span className={`${styles.teaserBody} ${styles.textNav}`}>{home.faqLede}</span>
              <span className={styles.teaserLink}>{home.seeAll} →</span>
            </Link>
          </div>
        </section>
      </main>
      <HomeFooter locale={locale} common={common} />
      <WhatsAppFab href={wa} label={common.fab} watchId={ids.top} />
    </>
  )
}
