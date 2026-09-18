import { CHAPTERS, DIABETES_TECH, EDUCATION_PUBS, METABOLISM } from './publications'
import type { Dictionary } from './types'

export const es: Dictionary = {
  meta: {
    home: {
      title: 'Dr. Andrés Palacio | Internista y Endocrinólogo en Medellín',
      description: 'Médico internista y endocrinólogo en Medellín. Consulta particular en diabetes, obesidad, tiroides, osteoporosis y medicina interna. Atención en español e inglés.'
    },
    research: {
      title: 'Investigación y publicaciones | Dr. Andrés Palacio',
      description: 'Publicaciones del Dr. Andrés Palacio en diabetes, bombas de insulina, monitoreo continuo de glucosa, metabolismo y riesgo cardiovascular.'
    },
    faq: {
      title: 'Preguntas frecuentes | Dr. Andrés Palacio',
      description: 'Cómo es la consulta con el Dr. Andrés Palacio en Medellín: qué llevar, idiomas, teleconsulta y cómo pedir cita por WhatsApp.'
    },
    privacy: {
      title: 'Aviso de privacidad | Dr. Andrés Palacio',
      description: 'Qué datos trata este sitio y cómo ejercer tus derechos según la Ley 1581 de 2012.'
    }
  },
  common: {
    specialty: 'Medicina interna · Endocrinología',
    bilingual: 'Consulta disponible en español e inglés',
    whatsappMessage: 'Hola Dr. Andrés Palacio, quisiera solicitar una consulta.',
    ctaWhatsapp: 'Agendar por WhatsApp',
    ctaRequest: 'Solicitar cita por WhatsApp',
    fab: 'Solicitar cita',
    back: 'Volver al inicio',
    location: 'Ubicación',
    hours: 'Horario',
    hoursValue: 'Lunes a jueves, 8:00 a.m. – 5:00 p.m. · Viernes, 8:00 a.m. – 1:00 p.m.',
    hoursShort: 'Lun–Jue 8–17 · Vie 8–13',
    license: 'Registro médico 5024401',
    navAbout: 'Sobre mí',
    navServices: 'Servicios',
    navVisit: 'Tu consulta',
    navResearch: 'Investigación',
    navFaq: 'Preguntas frecuentes',
    navContact: 'Contacto',
    navPrivacy: 'Aviso de privacidad',
    footerNav: 'Navegación',
    footerFollow: 'Sígueme',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    languageLabel: 'Idioma',
    officeLine: 'Intermédica · Consultorio 1112'
  },
  home: {
    heroMeta: 'Medellín · Teleconsulta ES / EN',
    heroLede: 'Atención médica de excelencia basada en evidencia científica, enfocada en el metabolismo, la diabetes, la obesidad y la prevención cardiometabólica.',
    ctaEmail: 'Enviar correo',
    followMe: 'Sígueme en',
    photoAlt: 'Dr. Andrés Palacio, médico internista y endocrinólogo',
    quote: 'Mi compromiso es acompañarte con ciencia, experiencia y humanidad en cada decisión sobre tu salud.',
    signatureAlt: 'Firma del Dr. Andrés Palacio',
    aboutTitle: 'Sobre mí',
    aboutP1: 'Soy médico internista y endocrinólogo, con más de 18 años de experiencia clínica, académica y de investigación en el cuidado de pacientes con enfermedades endocrinas, metabólicas y cardiometabólicas.',
    aboutP2: 'Mi enfoque combina la mejor evidencia científica con una atención personalizada para ayudarte a alcanzar tu mejor versión de salud y bienestar a largo plazo.',
    educationTitle: 'Formación destacada',
    education: [
      { title: 'Endocrinología, Metabolismo y Lípidos', detail: 'Emory University School of Medicine · Atlanta, GA · 2005–2007' },
      { title: 'Medicina Interna', detail: 'Emory University School of Medicine · Atlanta, GA · 2002–2005' },
      { title: 'Médico y Cirujano', detail: 'Escuela de Medicina CES · Medellín, Colombia · 1994–1999' },
      { title: 'Board Certified in Endocrinology, Diabetes and Metabolism', detail: 'Certificación vigente' }
    ],
    authority: [
      { title: 'Profesor Asociado', detail: 'Medicina Interna y Endocrinología · Universidad CES y Universidad Pontificia Bolivariana, Medellín.' },
      { title: 'Investigador y autor', detail: 'Publicaciones en diabetes, obesidad, hipertensión y tecnología aplicada al cuidado de la diabetes.' },
      { title: 'Experiencia internacional', detail: 'Formación y práctica clínica en Colombia y Estados Unidos.' }
    ],
    servicesTitle: '¿En qué puedo ayudarte?',
    servicesLede: 'Consulta particular para adultos en Medellín y teleconsulta internacional, con seguimiento cercano en cada una de estas áreas.',
    services: [
      { icon: 'drop', title: 'Diabetes tipo 1 y tipo 2', body: 'Diagnóstico y tratamiento de la diabetes y la glucosa elevada: medicamentos, educación en el manejo diario y tecnologías de monitorización.' },
      { icon: 'scale', title: 'Obesidad y metabolismo', body: 'Evaluación integral del peso y el metabolismo, y opciones médicas para el tratamiento de la obesidad.' },
      { icon: 'thyroid', title: 'Tiroides', body: 'Hipotiroidismo, hipertiroidismo, TSH alterada, enfermedad autoinmune y nódulos tiroideos.' },
      { icon: 'heart', title: 'Riesgo cardiometabólico y lípidos', body: 'Colesterol y triglicéridos alterados, hipertensión y otros factores relacionados con el riesgo cardiovascular.' },
      { icon: 'pump', title: 'Bombas de insulina y monitoreo continuo', body: 'Selección de candidatos, inicio y seguimiento de terapia con bomba de insulina y monitorización continua de glucosa.' },
      { icon: 'bone', title: 'Osteoporosis', body: 'Evaluación de la salud ósea: osteopenia, osteoporosis y riesgo de fractura.' },
      { icon: 'venus', title: 'Salud hormonal femenina', body: 'Alteraciones hormonales, ciclo menstrual y acompañamiento en la menopausia.' },
      { icon: 'mars', title: 'Testosterona y salud masculina', body: 'Evaluación de testosterona baja y otras alteraciones hormonales en el hombre.' }
    ],
    visitTitle: 'Una consulta para entender, decidir y actuar.',
    visitLede: 'Cuatro momentos que estructuran cada cita, de la primera consulta al seguimiento.',
    steps: [
      { title: 'Escuchamos', detail: 'Entender el motivo de consulta, los antecedentes y tus objetivos de salud.' },
      { title: 'Evaluamos', detail: 'Integrar historia clínica, medicamentos, laboratorios e imágenes.' },
      { title: 'Explicamos', detail: 'Explicar el diagnóstico y las alternativas disponibles, con la evidencia detrás de cada una.' },
      { title: 'Planificamos', detail: 'Construir un plan individualizado y definir el seguimiento.' }
    ],
    teleTitle: 'Teleconsulta internacional',
    teleBody: 'Atención por videollamada para pacientes en Estados Unidos y Colombia. Se agenda por WhatsApp y no requiere ninguna visita presencial.',
    ideasTitle: 'Ideas y evidencia',
    ideasBody: 'Reflexiones sobre endocrinología, metabolismo, prevención, longevidad, ejercicio, nutrición y nuevas tecnologías aplicadas a la salud.',
    ctaSubstack: 'Leer en Substack →',
    ctaX: 'Seguir en X →',
    contactTitle: 'Consulta particular en Medellín',
    ctaDirections: 'Cómo llegar',
    mapTitle: 'Mapa del consultorio en Intermédica',
    researchTitle: 'Investigación y publicaciones',
    researchTeaser: 'Publicaciones en diabetes, metabolismo y tecnología en salud',
    researchLede: 'Investigación clínica en endocrinología, metabolismo, tecnología aplicada a la diabetes y prevención cardiometabólica.',
    faqTeaser: 'Cómo es la consulta, qué llevar y cómo agendar',
    faqLede: 'Si tu pregunta no está aquí, escríbeme por WhatsApp y te respondo.',
    seeAll: 'Ver todo'
  },
  research: {
    kicker: 'Investigación y publicaciones',
    title: 'Investigación clínica en diabetes, metabolismo y prevención cardiometabólica.',
    lede: 'Más de dos décadas de trabajo académico entre Colombia y Estados Unidos: ensayos clínicos en manejo hospitalario de la diabetes, tecnología de infusión y monitorización continua, lípidos y riesgo cardiovascular, y capítulos de texto para formación médica.',
    tagGroup: 'Grupo de investigación IDEAS · CLID',
    tagYears: 'Publicaciones 1998–2020',
    viewPub: 'Ver publicación →',
    note: 'Selección de publicaciones tomada de la hoja de vida académica. Los enlaces se incluyen únicamente cuando existe DOI verificado; la hoja de vida completa está disponible a solicitud.',
    ctaTitle: '¿Tienes una pregunta clínica o académica?',
    ctaBody: 'Para consultas de pacientes, segundas opiniones o colaboración académica, escríbeme por WhatsApp.',
    ctaBtn: 'Escribir por WhatsApp',
    publicationCount: (count) => count === 1 ? '1 publicación' : `${count} publicaciones`,
    groups: [
      { title: 'Diabetes, tecnología y desenlaces clínicos', items: DIABETES_TECH },
      { title: 'Metabolismo, lípidos y riesgo cardiovascular', items: METABOLISM },
      { title: 'Capítulos de libro y consensos', items: CHAPTERS },
      { title: 'Educación, adherencia y experiencia del paciente', items: EDUCATION_PUBS }
    ]
  },
  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Todo lo que necesitas saber antes de tu consulta.',
    lede: 'Si tu pregunta no está aquí, escríbeme por WhatsApp y te respondo directamente.',
    quickTitle: 'Datos rápidos',
    labelWhere: 'Dónde',
    labelHours: 'Horario',
    labelBook: 'Agendar por WhatsApp',
    items: [
      { q: '¿Necesito tener un diagnóstico previo?', a: 'No. Puedes consultar por síntomas, resultados de laboratorio o una preocupación relacionada con tu salud metabólica u hormonal.' },
      { q: '¿Puedo llevar exámenes realizados previamente?', a: 'Sí. Llevar laboratorios, imágenes y la lista de tus medicamentos permite aprovechar mejor la consulta.' },
      { q: '¿La consulta es particular?', a: 'Sí, la consulta es particular.' },
      { q: '¿La consulta está disponible en inglés?', a: 'Sí. La consulta está disponible en español e inglés.' },
      { q: '¿Atiende pacientes fuera de Colombia?', a: 'Sí. La teleconsulta por videollamada está disponible para pacientes en Estados Unidos y Colombia, y no requiere ninguna visita presencial.' },
      { q: '¿Cómo solicito una cita?', a: 'Por WhatsApp al +57 320 681 6213. Escríbeme y coordinamos el horario disponible.' },
      { q: '¿Qué áreas se atienden en la consulta?', a: 'Diabetes tipo 1 y tipo 2, obesidad y metabolismo, enfermedades tiroideas incluidos nódulos, riesgo cardiometabólico y lípidos, bombas de insulina y monitorización continua de glucosa, osteoporosis, salud hormonal femenina y salud hormonal masculina.' },
      { q: '¿Cómo es el seguimiento después de la primera cita?', a: 'Al final de la consulta se define un plan individualizado y la frecuencia del seguimiento, según el motivo de consulta y los resultados que se necesiten revisar.' }
    ]
  },
  privacy: {
    title: 'Aviso de privacidad',
    updated: 'Última actualización: septiembre de 2026',
    sections: [
      {
        heading: 'Responsable',
        body: ['Andrés Palacio, médico internista y endocrinólogo. Intermédica, consultorio 1112, Calle 7 #39-197, Medellín. Correo: andres@drpalacio.com. WhatsApp: +57 320 681 6213.']
      },
      {
        heading: 'Qué datos recoge este sitio',
        body: ['Ninguno. El sitio no tiene formularios, cuentas de usuario ni herramientas de analítica, y no instala cookies propias.']
      },
      {
        heading: 'Cuando escribes por WhatsApp o correo',
        body: [
          'Los datos que envíes, como tu nombre, tu teléfono y el motivo de consulta, se usan solo para responderte y agendar tu cita.',
          'Esos mensajes viajan por WhatsApp (Meta) o por el proveedor de correo, que aplican sus propias políticas de privacidad.'
        ]
      },
      {
        heading: 'Servicios de terceros en esta página',
        body: [
          'El mapa de la página de inicio es de Google Maps. Al cargarlo, Google puede usar cookies según su propia política.',
          'El sitio está alojado en Cloudflare, que procesa datos técnicos de la conexión, como la dirección IP, para entregar la página y protegerla.'
        ]
      },
      {
        heading: 'Tu historia clínica',
        body: ['La información de tu consulta médica no pasa por este sitio. Se maneja en la historia clínica, bajo la reserva que exige la ley colombiana.']
      },
      {
        heading: 'Tus derechos',
        body: ['Según la Ley 1581 de 2012 puedes conocer, actualizar, rectificar y suprimir tus datos, y revocar la autorización para tratarlos. Para hacerlo, escribe a andres@drpalacio.com.']
      }
    ]
  }
}
