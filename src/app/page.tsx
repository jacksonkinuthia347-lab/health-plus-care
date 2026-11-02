'use client'
import { useState } from 'react'

const hospitals = [
  { id: 1, name: 'Aga Khan Nairobi', level: 6 },
  { id: 2, name: 'Kenyatta National', level: 6 },
  { id: 3, name: 'Kisii Teaching', level: 5 },
  { id: 4, name: 'Keroka Sub-County', level: 4 },
]

export default function Page() {
  const [search, setSearch] = useState('')
  return (
    <main className="p-4 max-w-md mx-auto bg-white min-h-screen">
      <h1 className="text-xl font-black">Quality Health Care</h1>
      <input value={search} onChange={e=>setSearch(e.target.value.toLowerCase())} placeholder="Search..." className="w-full mt-4 border-2 border-black rounded-xl px-4 py-3 text-sm" />
      <h2 className="font-bold mt-4">Hospitals</h2>
      {hospitals.filter(h=>h.name.toLowerCase().includes(search)).map(h=>(
        <a key={h.id} href={`/hospitals/${h.id}`} className="block border rounded-xl p-3 mt-2">{h.name} - Level {h.level}</a>
      ))}
      <p className="mt-6 text-xs text-center">Day 3 Done ✅</p>
    </main>
  )
}