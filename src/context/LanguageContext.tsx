'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
const LangContext = createContext<any>(null)
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  return <LangContext.Provider value={{ fontSize, setFontSize, highContrast, setHighContrast }}>{children}</LangContext.Provider>
}
export const useLanguage = () => useContext(LangContext)