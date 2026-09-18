import { en } from './en'
import { es } from './es'
import type { Locale } from './site'
import type { Dictionary } from './types'

const DICTIONARIES: Record<Locale, Dictionary> = { es, en }

export function getDictionary (locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}
