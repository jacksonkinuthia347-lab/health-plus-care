'use client'
import { createContext, useState, useContext, ReactNode } from 'react'
type T={lang:string,setLang:(l:string)=>void,fontSize:number,setFontSize:(s:number)=>void}
const C=createContext<T|null>(null)
export function LanguageProvider({children}:{children:ReactNode}){
const[lang,setLang]=useState('en');const[fontSize,setFontSize]=useState(16)
return(<C.Provider value={{lang,setLang,fontSize,setFontSize}}><div style={{fontSize:`${fontSize}px`}}>{children}</div></C.Provider>)}
export const useLang=()=>{const ctx=useContext(C);if(!ctx)throw new Error('useLang must be inside');return ctx}