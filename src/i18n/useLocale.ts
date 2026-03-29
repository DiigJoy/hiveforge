import { useEffect, useState } from 'react'
import { defaultLocale } from './messages'
import type { Locale } from './types'

const storageKey = 'site-locale'
const supportedLocales: Locale[] = ['en', 'es', 'pt']

function isLocale(value: string | null): value is Locale {
  return value !== null && supportedLocales.includes(value as Locale)
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const storedLocale = window.localStorage.getItem(storageKey)
  if (isLocale(storedLocale)) {
    return storedLocale
  }

  const browserLocale = window.navigator.language.toLowerCase()
  const matched = supportedLocales.find((locale) => browserLocale.startsWith(locale))
  return matched ?? defaultLocale
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale)
    document.documentElement.lang = locale
  }, [locale])

  return { locale, setLocale }
}
