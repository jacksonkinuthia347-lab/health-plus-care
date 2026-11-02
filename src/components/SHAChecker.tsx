'use client'
import { useState } from 'react'
import { calculateSHA } from '@/lib/sha'

export default function SHAChecker() {
  const [cost, setCost] = useState(2000)
  const [plan, setPlan] = useState<'SHIF_2k' | 'POMSF_45k'>('SHIF_2k')
  const result = calculateSHA(cost, plan, 6)

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'en-KE'
      window.speechSynthesis.speak(u)
    }
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
      <h3 className="font-bold text-sm mb-2">SHA Checker / Kuangalia SHA</h3>
      <div className="flex gap-2 mb-3">
        <button onClick={() => setPlan('SHIF_2k')} className={`px-4 py-1.5 rounded-full text-sm ${plan === 'SHIF_2k' ? 'bg-green-600 text-white' : 'bg-white border'}`}>SHIF 2k</button>
        <button onClick={() => setPlan('POMSF_45k')} className={`px-4 py-1.5 rounded-full text-sm ${plan === 'POMSF_45k' ? 'bg-green-600 text-white' : 'bg-white border'}`}>POMSF 45k Family</button>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <input type="range" min="0" max="10000" step="100" value={cost} onChange={e => setCost(Number(e.target.value))} className="flex-1" />
        <span className="text-sm font-bold">Ksh {cost}</span>
      </div>
      <p className="text-sm">SHA Pays: Ksh {result.pays} | You Pay: {result.youPay} | Remaining: Ksh {result.remaining}</p>
      <p className="text-xs text-gray-500 mt-1">Family covers 6 members / Familia watu 6</p>
      <button onClick={() => speak(`SHA pays ${result.pays} shillings. You pay ${result.youPay}. Remaining ${result.remaining}`)} className="mt-2 text-xs bg-black text-white px-3 py-1 rounded-full">🔊 Voice / Sauti</button>
      <div className="mt-3 text-[11px] bg-white p-2 rounded border">
        <b>M-Pesa:</b> Paybill 400200 Acc: HealthPlus | Till: 123456
      </div>
    </div>
  )
}