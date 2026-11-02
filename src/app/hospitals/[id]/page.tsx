import MpesaButton from "@/components/MpesaButton"
export default function HospitalPage({ params }: { params: { id: string } }) {
  const h = { name: "Hospital "+params.id, price: 1000, sha: 900, phone: "0700000000", paybill: "200222" }
  return (
    <main className="p-4 max-w-md mx-auto">
      <a href="/" className="text-sm underline font-bold">← Back</a>
      <h1 className="text-xl font-black mt-4">{h.name}</h1>
      <p className="text-xs text-gray-500">Paybill {h.paybill} • SHA covers 90%</p>
      <div className="mt-6 border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0_black] bg-white">
        <p className="text-sm">Consultation KES {h.price}</p>
        <p className="text-sm font-bold">SHA Pays KES {h.sha}</p>
        <p className="text-lg font-black text-green-600">You Pay KES {h.price-h.sha}</p>
        <MpesaButton hospital={h.name} amount={h.price-h.sha} />
        <a href={`tel:${h.phone}`} className="w-full mt-3 border-2 border-black py-3 rounded-xl block text-center font-bold text-sm">📞 Call Hospital</a>
      </div>
    </main>
  )
}