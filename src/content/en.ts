import { CHAPTERS, DIABETES_TECH, EDUCATION_PUBS, METABOLISM } from './publications'
import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    home: {
      title: 'Dr. Andrés Palacio | Internist and Endocrinologist in Medellín',
      description: 'Internist and endocrinologist in Medellín, Colombia. Private consultations for diabetes, obesity, thyroid, osteoporosis and internal medicine. Care in English and Spanish.'
    },
    research: {
      title: 'Research and publications | Dr. Andrés Palacio',
      description: 'Published work by Dr. Andrés Palacio on diabetes, insulin pumps, continuous glucose monitoring, metabolism and cardiovascular risk.'
    },
    faq: {
      title: 'Frequently asked questions | Dr. Andrés Palacio',
      description: 'How a visit with Dr. Andrés Palacio in Medellín works: what to bring, languages, telemedicine and booking via WhatsApp.'
    },
    privacy: {
      title: 'Privacy notice | Dr. Andrés Palacio',
      description: 'What data this site handles and how to exercise your rights under Colombian Law 1581 of 2012.'
    }
  },
  common: {
    specialty: 'Internal medicine · Endocrinology',
    bilingual: 'Consultations available in English and Spanish',
    whatsappMessage: 'Hello Dr. Andrés Palacio, I would like to request a consultation.',
    ctaWhatsapp: 'Book via WhatsApp',
    ctaRequest: 'Request an appointment',
    fab: 'Book a visit',
    back: 'Back to home',
    location: 'Location',
    hours: 'Office hours',
    hoursValue: 'Monday to Thursday, 8:00 a.m. – 5:00 p.m. · Friday, 8:00 a.m. – 1:00 p.m.',
    hoursShort: 'Mon–Thu 8–17 · Fri 8–13',
    license: 'Medical license 5024401',
    navAbout: 'About',
    navServices: 'Services',
    navVisit: 'Your visit',
    navResearch: 'Research',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navPrivacy: 'Privacy notice',
    footerNav: 'Navigation',
    footerFollow: 'Follow',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    officeLine: 'Intermédica · Office 1112'
  },
  home: {
    heroMeta: 'Medellín · Telemedicine ES / EN',
    heroLede: 'Excellent medical care grounded in scientific evidence, focused on metabolism, diabetes, obesity and cardiometabolic prevention.',
    ctaEmail: 'Send an email',
    followMe: 'Follow me on',
    photoAlt: 'Dr. Andrés Palacio, internist and endocrinologist',
    quote: 'My commitment is to guide you with science, experience and humanity in every decision about your health.',
    signatureAlt: 'Signature of Dr. Andrés Palacio',
    aboutTitle: 'About me',
    aboutP1: 'I am an internist and endocrinologist with more than 18 years of clinical, academic and research experience caring for patients with endocrine, metabolic and cardiometabolic disease.',
    aboutP2: 'My approach combines the best scientific evidence with personalized care, to help you reach your best version of health and long-term wellbeing.',
    educationTitle: 'Selected training',
    education: [
      { title: 'Endocrinology, Metabolism and Lipids', detail: 'Emory University School of Medicine · Atlanta, GA · 2005–2007' },
      { title: 'Internal Medicine', detail: 'Emory University School of Medicine · Atlanta, GA · 2002–2005' },
      { title: 'Doctor of Medicine', detail: 'CES School of Medicine · Medellín, Colombia · 1994–1999' },
      { title: 'Board Certified in Endocrinology, Diabetes and Metabolism', detail: 'Currently certified' }
    ],
    authority: [
      { title: 'Associate Professor', detail: 'Internal Medicine and Endocrinology · Universidad CES and Universidad Pontificia Bolivariana, Medellín.' },
      { title: 'Researcher and author', detail: 'Published work in diabetes, obesity, hypertension and technology applied to diabetes care.' },
      { title: 'International experience', detail: 'Training and clinical practice in Colombia and the United States.' }
    ],
    servicesTitle: 'How can I help you?',
    servicesLede: 'Private adult consultations in Medellín and international telemedicine, with close follow-up across each of these areas.',
    services: [
      { icon: 'drop', title: 'Type 1 and type 2 diabetes', body: 'Diagnosis and treatment of diabetes and elevated glucose: medication, day-to-day management education and monitoring technology.' },
      { icon: 'scale', title: 'Obesity and metabolism', body: 'Comprehensive assessment of weight and metabolism, and medical options for obesity treatment.' },
      { icon: 'thyroid', title: 'Thyroid', body: 'Hypothyroidism, hyperthyroidism, abnormal TSH, autoimmune thyroid disease and thyroid nodules.' },
      { icon: 'heart', title: 'Cardiometabolic risk and lipids', body: 'Abnormal cholesterol and triglycerides, hypertension and other cardiovascular risk factors.' },
      { icon: 'pump', title: 'Insulin pumps and continuous monitoring', body: 'Candidate selection, initiation and follow-up of insulin pump therapy and continuous glucose monitoring.' },
      { icon: 'bone', title: 'Osteoporosis', body: 'Bone health assessment: osteopenia, osteoporosis and fracture risk.' },
      { icon: 'venus', title: "Women's hormonal health", body: 'Hormonal disorders, menstrual cycle and menopause care.' },
      { icon: 'mars', title: "Testosterone and men's health", body: 'Assessment of low testosterone and other hormonal disorders in men.' }
    ],
    visitTitle: 'A consultation to understand, decide and act.',
    visitLede: 'Four moments that structure every visit, from the first consultation through follow-up.',
    steps: [
      { title: 'We listen', detail: 'Understanding your reason for the visit, medical history and health goals.' },
      { title: 'We evaluate', detail: 'Integrating clinical history, medication, lab work and imaging.' },
      { title: 'We explain', detail: 'Explaining the diagnosis and available options, with the evidence behind each one.' },
      { title: 'We plan', detail: 'Building an individualized plan and defining follow-up.' }
    ],
    teleTitle: 'International telemedicine',
    teleBody: 'Video consultations for patients in the United States and Colombia. Scheduled through WhatsApp, with no in-person visit required.',
    ideasTitle: 'Ideas and evidence',
    ideasBody: 'Notes on endocrinology, metabolism, prevention, longevity, exercise, nutrition and new technology applied to health.',
    ctaSubstack: 'Read on Substack →',
    ctaX: 'Follow on X →',
    contactTitle: 'Private practice in Medellín',
    ctaDirections: 'Get directions',
    mapTitle: 'Map of the office at Intermédica',
    researchTitle: 'Research and publications',
    researchTeaser: 'Published work in diabetes, metabolism and health technology',
    researchLede: 'Clinical research in endocrinology, metabolism, diabetes technology and cardiometabolic prevention.',
    faqTeaser: 'How the visit works, what to bring and how to book',
    faqLede: 'If your question is not here, message me on WhatsApp and I will answer.',
    seeAll: 'See all'
  },
  research: {
    kicker: 'Research and publications',
    title: 'Clinical research in diabetes, metabolism and cardiometabolic prevention.',
    lede: 'More than two decades of academic work across Colombia and the United States: clinical trials in inpatient diabetes management, insulin pump and continuous glucose monitoring technology, lipids and cardiovascular risk, and textbook chapters for medical training.',
    tagGroup: 'IDEAS research group · CLID',
    tagYears: 'Publications 1998–2020',
    viewPub: 'View publication →',
    note: 'Selected publications taken from the academic CV. Links are included only where a verified DOI exists; the full CV is available on request.',
    ctaTitle: 'Have a clinical or academic question?',
    ctaBody: 'For patient consultations, second opinions or academic collaboration, message me on WhatsApp.',
    ctaBtn: 'Message on WhatsApp',
    publicationCount: (count) => count === 1 ? '1 publication' : `${count} publications`,
    groups: [
      { title: 'Diabetes, technology and clinical outcomes', items: DIABETES_TECH },
      { title: 'Metabolism, lipids and cardiovascular risk', items: METABOLISM },
      { title: 'Book chapters and consensus statements', items: CHAPTERS },
      { title: 'Education, adherence and patient experience', items: EDUCATION_PUBS }
    ]
  },
  faq: {
    kicker: 'Frequently asked questions',
    title: 'Everything you need to know before your visit.',
    lede: 'If your question is not here, message me on WhatsApp and I will answer directly.',
    quickTitle: 'Quick facts',
    labelWhere: 'Where',
    labelHours: 'Office hours',
    labelBook: 'Book via WhatsApp',
    items: [
      { q: 'Do I need an existing diagnosis?', a: 'No. You can book a visit for symptoms, lab results or any concern about your metabolic or hormonal health.' },
      { q: 'Can I bring previous test results?', a: 'Yes. Bringing lab work, imaging and your medication list makes the visit more productive.' },
      { q: 'Is the consultation private-pay?', a: 'Yes, consultations are private-pay.' },
      { q: 'Is the consultation available in English?', a: 'Yes. Consultations are available in English and Spanish.' },
      { q: 'Do you see patients outside Colombia?', a: 'Yes. Video telemedicine is available for patients in the United States and Colombia, with no in-person visit required.' },
      { q: 'How do I request an appointment?', a: 'By WhatsApp at +57 320 681 6213. Send a message and we will arrange an available time.' },
      { q: 'Which areas are covered in the consultation?', a: 'Type 1 and type 2 diabetes, obesity and metabolism, thyroid disease including nodules, cardiometabolic risk and lipids, insulin pumps and continuous glucose monitoring, osteoporosis, and hormonal health in women and men.' },
      { q: 'What does follow-up look like after the first visit?', a: 'At the end of the consultation we define an individualized plan and a follow-up schedule, based on your reason for the visit and the results that need review.' }
    ]
  },
  privacy: {
    title: 'Privacy notice',
    updated: 'Last updated: September 2026',
    sections: [
      {
        heading: 'Data controller',
        body: ['Andrés Palacio, internist and endocrinologist. Intermédica, office 1112, Calle 7 #39-197, Medellín, Colombia. Email: andres@drpalacio.com. WhatsApp: +57 320 681 6213.']
      },
      {
        heading: 'What this site collects',
        body: ['Nothing. The site has no forms, user accounts or analytics tools, and sets no cookies of its own.']
      },
      {
        heading: 'When you write via WhatsApp or email',
        body: [
          'The details you send, such as your name, phone number and reason for the visit, are used only to reply and schedule your appointment.',
          'Those messages travel through WhatsApp (Meta) or your email provider, which apply their own privacy policies.'
        ]
      },
      {
        heading: 'Third-party services on this site',
        body: [
          'The map on the home page is provided by Google Maps. When it loads, Google may use cookies under its own policy.',
          'The site is hosted on Cloudflare, which processes technical connection data, such as your IP address, to deliver and protect the page.'
        ]
      },
      {
        heading: 'Your medical record',
        body: ['Information from your medical consultation does not pass through this site. It is kept in your medical record under the confidentiality that Colombian law requires.']
      },
      {
        heading: 'Your rights',
        body: ['Under Colombian Law 1581 of 2012 you can access, update, correct and delete your data, and revoke your authorization to process it. To do so, write to andres@drpalacio.com.']
      }
    ]
  }
}
