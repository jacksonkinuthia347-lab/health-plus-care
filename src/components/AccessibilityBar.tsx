'use client'
import { useState } from 'react'
export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [showKSL, setShowKSL] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const msg = new SpeechSynthesisUtterance(text)
    msg.lang = 'en-KE'; msg.rate = 0.9
    msg.onstart = () => setSpeaking(true)
    msg.onend = () => setSpeaking(false)
    window.speechSynthesis.speak(msg)
  }
  return (
    <>
      <div className={`flex gap-1 p-2 max-w-md mx-auto overflow-x-auto ${highContrast?'bg-yellow-400 text-black':'bg-white'}`} style={{fontSize: `${fontSize}px`}}>
        <button onClick={()=>{setFontSize(s=>Math.max(12,s-2)); document.documentElement.style.fontSize=`${Math.max(12,fontSize-2)}px`}} className="border-2 border-black px-3 py-1.5 rounded-lg font-black text-xs shrink-0">A-</button>
        <button onClick={()=>{setFontSize(s=>Math.min(24,s+2)); document.documentElement.style.fontSize=`${Math.min(24,fontSize+2)}px`}} className="border-2 border-black px-3 py-1.5 rounded-lg font-black text-xs shrink-0">A+</button>
        <button onClick={()=>setHighContrast(!highContrast)} className="border-2 border-black px-3 py-1.5 rounded-lg text-[11px] font-bold shrink-0">{highContrast?'Normal':'High Contrast'}</button>
        <button onClick={()=>speak('Karibu Health Plus Care. Tafuta hospitali. Book doctor. Lipa na M-Pesa. Video call daktari.')} className={`border-2 border-black px-3 py-1.5 rounded-lg text-[11px] font-bold shrink-0 ${speaking?'animate-pulse bg-green-200':''}`}>🔊 Voice</button>
        <button onClick={()=>setShowKSL(!showKSL)} className="border-2 border-black px-3 py-1.5 rounded-lg text-[11px] font-bold shrink-0">🤟 KSL</button>
      </div>
      {showKSL && (
        <div className="max-w-md mx-auto bg-black text-white p-4 rounded-2xl m-2 border-2 border-black">
          <p className="text-xs font-black">🤟 KSL Video — How to book & pay</p>
          <div className="bg-gray-800 rounded-xl h-32 mt-2 flex items-center justify-center">🤟 Video Placeholder — Add /public/ksl.mp4</div>
          <p className="text-[11px] mt-2">1. Search hospital 2. Book doctor 3. Lipa M-Pesa 4. Video call</p>
          <button onClick={()=>speak('Kenya Sign Language: Search hospital, book doctor, pay with M-Pesa, video call')} className="mt-2 w-full bg-white text-black rounded-xl py-2 font-black text-xs">🔊 Speak Steps</button>
        </div>
      )}
    </>
  )
}