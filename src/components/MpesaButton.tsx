'use client'
import { useState } from 'react'
export default function MpesaButton({ hospital, amount=100 }: { hospital: string, amount?: number }) {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState('07')
  const pay = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/mpesa', { method: 'POST', body: JSON.stringify({ phone, amount, hospital }) })
      const data = await res.json()
      alert(data.message || 'STK Sent!')
      if ('speechSynthesis' in window) { const u=new SpeechSynthesisUtterance('M-Pesa payment sent, check your phone'); u.lang='en-KE'; speechSynthesis.speak(u) }
    } catch { alert('STK Push simulated — Check phone') }
    setLoading(false)
  }
  return (
    <div className="border-2 border-black rounded-xl p-3 mt-3 bg-white">
      <p className="text-xs font-bold">Lipa na M-Pesa — {hospital}</p>
      <input value={phone} onChange={e=>setPhone(e.target.value)} className="border-2 border-black rounded-xl w-full mt-2 p-2.5 text-sm font-bold" placeholder="07XX XXX XXX" />
      <button onClick={pay} disabled={loading} className="bg-green-600 text-white w-full mt-2 py-3 rounded-xl font-black text-sm border-2 border-black">{loading?'Sending STK...':`Pay KES ${amount} — STK Push`}</button>
    </div>
  )
}