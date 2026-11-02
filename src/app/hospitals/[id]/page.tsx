'use client'
import { useParams } from 'next/navigation'

const hospitals: any = {
  1: { name: 'Aga Khan Nairobi', phone: '0711092000', price: 500, sha: 450 },
  2: { name: 'Kenyatta National', phone: '0202726300', price: 300, sha: 270 },
  3: { name: 'Kisii Teaching', phone: '0700000000', price: 200, sha: 180 },
  4: { name: 'Keroka Sub-County', phone: '0720000000', price: 100, sha: 90 },
}
import MpesaButton from "@/components/MpesaButton"

export default function HospitalPage() {
  const h = { name: "Hospital", price: 1000, sha: 900, phone: "0700000000" } // your existing h variable
  return (
    <main className="p-4 max-w-md mx-auto min-h-screen bg-white">
      <a href="/" className="text-sm underline">← Back</a>
      <h1 className="text-2xl font-black mt-4">{h.name}</h1>
      <p className="text-sm text-gray-500 mt-1">SHA covers 90% - You pay 10%</p>
      <div className="mt-6 border-2 border-black rounded-xl p-4">
        <p className="text-sm">Consultation: KES {h.price}</p>
        <p className="text-sm font-bold mt-1">SHA Pays: KES {h.sha}</p>
        <p className="text-lg font-black text-green-600 mt-2">You Pay: KES {h.price - h.sha}</p>
        <MpesaButton hospital={h.name} amount={h.price - h.sha} />
        <a href={`tel:${h.phone}`} className="w-full mt-2 border-2 border-black py-3 rounded-xl block text-center font-bold text-sm">📞 Call Hospital</a>
      </div>
    </main>
  )
}