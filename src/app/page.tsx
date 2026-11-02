'use client'
import { useState } from 'react'
import MpesaButton from '@/components/MpesaButton'

const hospitals = [
  {id:1,name:"Kenyatta National Hospital",paybill:"200222",dist:"2.3km",price:1000,sha:900,doctor:"Dr. Wafula",rating:"4.8"},
  {id:2,name:"Aga Khan Hospital",paybill:"300300",dist:"1.1km",price:1200,sha:1080,doctor:"Dr. Achieng",rating:"4.9"},
  {id:3,name:"Nairobi Hospital",paybill:"400400",dist:"3.5km",price:1500,sha:1350,doctor:"Dr. Patel",rating:"4.7"},
  {id:4,name:"Mater Hospital",paybill:"500500",dist:"4.0km",price:1100,sha:990,doctor:"Dr. Njeri",rating:"4.8"},
]

export default function Home() {
  const [search,setSearch] = useState('')
  const [bookings,setBookings] = useState<any[]>([])
  const [showBooking,setShowBooking] = useState<any>(null)
  const [calling,setCalling] = useState<string|null>(null)

  const speak = (t:string) => { if('speechSynthesis' in window){ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(t); u.lang='en-KE'; speechSynthesis.speak(u) } }

  const filtered = hospitals.filter(h=>h.name.toLowerCase().includes(search.toLowerCase())||h.paybill.includes(search))

  return (
    <main className="p-3 space-y-3">
      <div className="flex gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search hospital, paybill..." className="flex-1 border-2 border-black rounded-xl px-3 py-2.5 text-sm font-bold" />
        <button onClick={()=>speak('4 hospitals near you')} className="border-2 border-black rounded-xl px-3">🔊</button>
      </div>

      <div className="border-2 border-black rounded-2xl p-3 bg-[#e8ffe8] shadow-[4px_4px_0px_black]">
        <div className="flex justify-between"><div><p className="text-[11px] font-black tracking-widest">SHA STATUS</p><p className="font-black text-sm">SHA ACTIVE ✅ VERIFIED</p><p className="text-xs mt-1"><b>Jackson K.</b> | Cover KES 500</p></div><button onClick={()=>speak('SHA Active, Jackson, Cover 500')} className="border-2 border-black rounded-full w-8 h-8">🔊</button></div>
      </div>

      {bookings.length>0 && <div className="border-2 border-black rounded-2xl p-3 bg-yellow-100 shadow-[4px_4px_0_black]"><p className="font-black text-xs">📅 My Bookings ({bookings.length})</p>{bookings.map((b,i)=><div key={i} className="mt-2 border-2 border-black rounded-xl p-2 bg-white text-[11px]"><p className="font-black">{b.doctor} — {b.hospital}</p><p>{b.date} at {b.time}</p><div className="grid grid-cols-2 gap-1 mt-1"><button onClick={()=>setCalling(b.doctor)} className="bg-black text-white rounded-lg py-1.5 font-bold">📞 Voice</button><button onClick={()=>setCalling(b.doctor)} className="bg-green-600 text-white rounded-lg py-1.5 font-bold">📹 Video</button></div></div>)}</div>}

      <h2 className="font-black text-sm">Hospitals Near You ({filtered.length})</h2>
      {filtered.map(h=>(
        <div key={h.id} className="border-2 border-black rounded-2xl p-3 bg-white shadow-[4px_4px_0_black]">
          <div className="flex justify-between"><div><p className="font-black text-[13px]">{h.name}</p><p className="text-[11px] text-gray-600">{h.dist} • Paybill {h.paybill} • ⭐ {h.rating} • {h.doctor}</p></div><button onClick={()=>speak(`${h.name}, Paybill ${h.paybill}, Doctor ${h.doctor}`)} className="border-2 border-black rounded-full w-7 h-7 text-xs">🔊</button></div>
          <p className="text-[11px] mt-1">Consult KES {h.price} • SHA {h.sha} • <b>You Pay KES {h.price-h.sha}</b></p>
          <div className="grid grid-cols-3 gap-1.5 mt-2">
            <a href={`/hospitals/${h.id}`} className="border-2 border-black rounded-xl py-2 text-center text-[11px] font-bold">Details</a>
            <button onClick={()=>{const m=document.getElementById(`mpesa-${h.id}`); m?.classList.toggle('hidden')}} className="bg-green-600 text-white border-2 border-black rounded-xl py-2 text-[11px] font-black">Lipa</button>
            <button onClick={()=>setShowBooking(h)} className="bg-black text-white border-2 border-black rounded-xl py-2 text-[11px] font-black">📅 Book</button>
          </div>
          <div id={`mpesa-${h.id}`} className="hidden"><MpesaButton hospital={h.name} amount={h.price-h.sha} /></div>
        </div>
      ))}

      {showBooking && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center" onClick={()=>setShowBooking(null)}>
          <div className="bg-white w-full max-w-md rounded-t-2xl p-4 max-h-[85vh] overflow-y-auto" onClick={e=>e.stopPropagation()}>
            <div className="flex justify-between"><p className="font-black">Book — {showBooking.name}</p><button onClick={()=>setShowBooking(null)} className="border-2 border-black rounded-full w-7 h-7">✕</button></div>
            <p className="text-xs mt-2 font-bold">{showBooking.doctor} • Available Today</p>
            <div className="mt-3"><p className="text-[11px] font-black">Date</p><div className="flex gap-1 mt-1 overflow-x-auto">{['Today','Tomorrow','Mon 4','Tue 5','Wed 6'].map(d=><button key={d} onClick={(e)=>{document.querySelectorAll('.dateBtn').forEach(b=>b.classList.remove('bg-black','text-white')); e.currentTarget.classList.add('bg-black','text-white')}} className="dateBtn border-2 border-black rounded-xl px-3 py-2 text-xs font-bold">{d}</button>)}</div></div>
            <div className="mt-3"><p className="text-[11px] font-black">Time</p><div className="grid grid-cols-3 gap-1 mt-1">{['9:00 AM','11:00 AM','2:00 PM','3:30 PM','4:30 PM'].map(t=><button key={t} onClick={(e)=>{document.querySelectorAll('.timeBtn').forEach(b=>b.classList.remove('bg-black','text-white')); e.currentTarget.classList.add('bg-black','text-white'); (window as any)._selTime=t}} className="timeBtn border-2 border-black rounded-xl py-2 text-[11px] font-bold">{t}</button>)}</div></div>
            <button onClick={()=>{const time=(window as any)._selTime||'9:00 AM'; setBookings([{hospital:showBooking.name,doctor:showBooking.doctor,date:'Today',time,dept:'General',status:'Confirmed'},...bookings]); setShowBooking(null); speak(`Booking confirmed for ${showBooking.doctor}`); alert('✅ Booking Confirmed!');}} className="mt-4 w-full bg-black text-white rounded-xl py-3 font-black">Confirm Booking</button>
          </div>
        </div>
      )}

      {calling && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center p-6">
          <p className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center text-3xl font-black">{calling[0]}</p>
          <p className="font-black text-lg mt-4">{calling}</p><p className="text-xs opacity-70">Connecting... SHA Covered • Encrypted</p>
          <p className="font-mono text-2xl mt-4">00:12</p>
          <div className="flex gap-4 mt-8"><button className="bg-gray-700 rounded-full w-14 h-14">🎙️</button><button onClick={()=>setCalling(null)} className="bg-red-600 rounded-full w-14 h-14">📞</button><button className="bg-gray-700 rounded-full w-14 h-14">📹</button></div>
          <button onClick={()=>setCalling(null)} className="mt-6 text-xs underline opacity-60">End Call — Real camera will ask permission on Vercel HTTPS</button>
        </div>
      )}
    </main>
  )
}