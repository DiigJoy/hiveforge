export type Locale = 'en' | 'es' | 'pt'

export type NavKey = 'solution' | 'industries' | 'process' | 'contact'

export type Messages = {
  meta: {
    languageLabel: string
    localeNames: Record<Locale, string>
  }
  brand: {
    name: string
    statement: string
  }
  header: {
    nav: Record<NavKey, string>
    cta: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    cardLabel: string
    cardTitle: string
    cardDescription: string
    stats: Array<{
      value: string
      text: string
    }>
  }
  trustStrip: {
    label: string
    items: string[]
  }
  offer: {
    eyebrow: string
    title: string
    description: string
    highlightsLabel: string
    highlights: string[]
  }
  architecture: {
    eyebrow: string
    title: string
    pillars: Array<{
      title: string
      description: string
    }>
  }
  industries: {
    eyebrow: string
    title: string
    items: Array<{
      name: string
      detail: string
    }>
  }
  process: {
    eyebrow: string
    title: string
    steps: string[]
  }
  contact: {
    eyebrow: string
    title: string
    ctaLabel: string
    email: string
    note: string
  }
  footer: {
    navLabel: string
    contactLabel: string
    copyright: string
  }
}
