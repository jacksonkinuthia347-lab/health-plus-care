'use client'
import { useState } from 'react'

export default function MpesaButton({ hospital, amount=500 }: { hospital: string, amount?: number }) {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState('07')

  const pay = async () => {
    setLoading(true)
    const res = await fetch('/api/mpesa', {
      method: 'POST',
      body: JSON.stringify({ phone, amount, hospital }),
    })
    const data = await res.json()
    alert(data.message)
    setLoading(false)
  }

  return (
    <div className="border-2 border-black rounded-xl p-3 mt-3">
      <p className="text-xs font-bold">Lipa na M-Pesa Till: {hospital}</p>
      <input value={phone} onChange={e=>setPhone(e.target.value)} className="border border-black rounded w-full mt-2 p-2 text-sm" placeholder="07XX XXX XXX" />
      <button onClick={pay} disabled={loading} className="bg-green-600 text-white w-full mt-2 py-2 rounded-xl font-black text-sm">
        {loading ? 'Sending STK...' : `Pay KES ${amount} — STK Push`}
      </button>
      <p className="text-[10px] mt-1 text-gray-500">Day 5: Connect Daraja API keys in .env</p>
    </div>
  )
}