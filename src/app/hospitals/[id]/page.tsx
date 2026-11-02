'use client'
import { useParams } from 'next/navigation'

const hospitals: any = {
  1: { name: 'Aga Khan Nairobi', phone: '0711092000', price: 500, sha: 450 },
  2: { name: 'Kenyatta National', phone: '0202726300', price: 300, sha: 270 },
  3: { name: 'Kisii Teaching', phone: '0700000000', price: 200, sha: 180 },
  4: { name: 'Keroka Sub-County', phone: '0720000000', price: 100, sha: 90 },
}

export default function HospitalPage() {
  const { id } = useParams()
  const h = hospitals[id as string] || hospitals[4]

  return (
    <main className="p-4 max-w-md mx-auto min-h-screen bg-white">
      <a href="/" className="text-sm underline">← Back</a>
      <h1 className="text-2xl font-black mt-4">{h.name}</h1>
      <p className="text-sm text-gray-500 mt-1">SHA covers 90% — You pay 10%</p>
      <div className="mt-6 border-2 border-black rounded-xl p-4">
        <p className="text-sm">Consultation: KES {h.price}</p>
        <p className="text-sm font-bold mt-1">SHA Pays: KES {h.sha}</p>
        <p className="text-lg font-black text-green-600 mt-2">You Pay: KES {h.price - h.sha} via M-Pesa</p>
        <button onClick={()=>alert(`M-Pesa STK Push: KES ${h.price - h.sha} to ${h.name}`)} className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-bold">Lipa na M-Pesa</button>
        <a href={`tel:${h.phone}`} className="w-full mt-2 border-2 border-black py-3 rounded-xl font-bold block text-center">📞 Call</a>
      </div>
    </main>
  )
}