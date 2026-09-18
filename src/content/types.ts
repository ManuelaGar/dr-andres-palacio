import type { PageKey } from './site'

export type ServiceIcon = 'drop' | 'scale' | 'thyroid' | 'heart' | 'pump' | 'bone' | 'venus' | 'mars'

export interface TitledItem {
  title: string
  detail: string
}

export interface PageMeta {
  title: string
  description: string
}

export interface PublicationGroup {
  title: string
  items: Publication[]
}

export interface Publication {
  title: string
  source: string
  doi?: string
}

export interface Dictionary {
  meta: Record<PageKey, PageMeta>
  common: {
    specialty: string
    bilingual: string
    whatsappMessage: string
    ctaWhatsapp: string
    ctaRequest: string
    fab: string
    back: string
    location: string
    hours: string
    hoursValue: string
    hoursShort: string
    license: string
    navAbout: string
    navServices: string
    navVisit: string
    navResearch: string
    navFaq: string
    navContact: string
    navPrivacy: string
    footerNav: string
    footerFollow: string
    menuOpen: string
    menuClose: string
    languageLabel: string
    officeLine: string
  }
  home: {
    heroMeta: string
    heroLede: string
    ctaEmail: string
    followMe: string
    photoAlt: string
    quote: string
    signatureAlt: string
    aboutTitle: string
    aboutP1: string
    aboutP2: string
    educationTitle: string
    education: TitledItem[]
    authority: TitledItem[]
    servicesTitle: string
    servicesLede: string
    services: Array<{ icon: ServiceIcon, title: string, body: string }>
    visitTitle: string
    visitLede: string
    steps: TitledItem[]
    teleTitle: string
    teleBody: string
    ideasTitle: string
    ideasBody: string
    ctaSubstack: string
    ctaX: string
    contactTitle: string
    ctaDirections: string
    mapTitle: string
    researchTitle: string
    researchTeaser: string
    researchLede: string
    faqTeaser: string
    faqLede: string
    seeAll: string
  }
  research: {
    kicker: string
    title: string
    lede: string
    tagGroup: string
    tagYears: string
    viewPub: string
    note: string
    ctaTitle: string
    ctaBody: string
    ctaBtn: string
    publicationCount: (count: number) => string
    groups: PublicationGroup[]
  }
  faq: {
    kicker: string
    title: string
    lede: string
    quickTitle: string
    labelWhere: string
    labelHours: string
    labelBook: string
    items: Array<{ q: string, a: string }>
  }
  privacy: {
    title: string
    updated: string
    sections: Array<{ heading: string, body: string[] }>
  }
}
