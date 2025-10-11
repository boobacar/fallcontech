import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import fr from './fr'
import en from './en'

const dictionaries = { fr, en }

function detectLocale() {
  const url = new URL(window.location.href)
  const q = url.searchParams.get('lang')
  if (q && (q === 'en' || q === 'fr')) return q
  const stored = localStorage.getItem('locale')
  if (stored && (stored === 'en' || stored === 'fr')) return stored
  const nav = navigator.language?.toLowerCase() || 'fr'
  return nav.startsWith('en') ? 'en' : 'fr'
}

const I18nContext = createContext({ locale: 'fr', setLocale: () => {}, t: (k) => k })

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(typeof window !== 'undefined' ? detectLocale() : 'fr')

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  const t = useMemo(() => {
    const dict = dictionaries[locale] || dictionaries.fr
    return (key) => {
      const parts = key.split('.')
      let cur = dict
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
        else return key
      }
      return typeof cur === 'string' ? cur : key
    }
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}

