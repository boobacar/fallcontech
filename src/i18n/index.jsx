import React, { createContext, useContext, useMemo } from 'react'
import fr from './fr'

const I18nContext = createContext({ locale: 'fr', setLocale: () => {}, t: (k) => k })

export function I18nProvider({ children }) {
  const locale = 'fr'

  if (typeof document !== 'undefined') {
    document.documentElement.lang = 'fr'
    document.documentElement.dir = 'ltr'
  }

  const t = useMemo(() => {
    const dict = fr
    return (key) => {
      const parts = key.split('.')
      let cur = dict
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
        else return key
      }
      return typeof cur === 'string' ? cur : key
    }
  }, [])

  const value = useMemo(() => ({ locale, setLocale: () => {}, t }), [t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
