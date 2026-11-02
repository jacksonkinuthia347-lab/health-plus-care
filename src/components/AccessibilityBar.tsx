'use client'
import { useState } from 'react'

export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [showKSL, setShowKSL] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  const speak = () => {
    setSpeaking(true)
    const msg = new SpeechSynthesisUtterance("Karibu Health Plus Care. Tafuta hospitali. Lipa na M-Pesa.")
    msg.lang = 'sw-KE'
    msg.onend = () => setSpeaking(false)
    window.speechSynthesis.speak(msg)
  }

  return (
    <>
      <div className={`flex gap-2 p-2 max-w-md mx-auto ${highContrast ? 'bg-yellow-400 text-black' : 'bg-white'}`} style={{fontSize: `${fontSize}px`}}>
        <button onClick={()=>setFontSize(s=>Math.max(12,s-2))} className="border-2 border-black px-2 rounded font-black">A-</button>
        <button onClick={()=>setFontSize(s=>Math.min(24,s+2))} className="border-2 border-black px-2 rounded font-black">A+</button>
        <button onClick={()=>setHighContrast(!highContrast)} className="border-2 border-black px-2 rounded text-xs font-bold">{highContrast?'Normal':'High Contrast'}</button>
        <button onClick={speak} className={`border-2 border-black px-2 rounded text-xs ${speaking?'animate-pulse bg-green-200':''}`}>🔊 Voice</button>
        <button onClick={()=>setShowKSL(!showKSL)} className="border-2 border-black px-2 rounded text-xs">🤟 KSL</button>
      </div>
      {showKSL && (
        <div className="max-w-md mx-auto bg-black text-white p-4 rounded-xl m-2">
          <p className="text-xs font-bold">KSL Video Placeholder</p>
          <video controls className="w-full mt-2 rounded bg-gray-800" poster="">
            <source src="" type="video/mp4" />
            Add your KSL video to /public/ksl.mp4
          </video>
          <p className="text-xs mt-2">Kenya Sign Language: How to find hospital and pay with M-Pesa</p>
        </div>
      )}
    </>
  )
}