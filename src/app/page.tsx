"use client";
import { useLang } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";

export default function Home() {
  const { t } = useLang();
  const [phone, setPhone] = useState("07");

  const hospitals = [
    { name: "Kenyatta National Hospital", km: "2.5km", paybill: "200322", rating: "4.8", doctor: "Dr. Wafula", price: "100" },
    { name: "Aga Khan Hospital", km: "3.1km", paybill: "300300", rating: "4.9", doctor: "Dr. Achieng", price: "120" },
    { name: "Mombasa Hospital", km: "1.2km", paybill: "400430", rating: "4.7", doctor: "Dr. Patel", price: "90" },
  ];

  return (
    <main className="max-w-md mx-auto p-4 bg-[#f5f5f0] min-h-screen">
      {/* LANGUAGE SWITCHER - NEW */}
      <LanguageSwitcher />

      {/* YOUR EXISTING SHA STATUS */}
      <div className="mt-4 p-3 bg-white rounded-lg shadow">
        <p className="text-xs text-gray-500">{t.shaStatus}</p>
        <p className="font-bold text-green-600">{t.shaActive} ✅ {t.verified}</p>
        <p className="text-sm mt-1">Jackson K. | Cover KES 500</p>
      </div>

      {/* HOSPITALS - NOW CHANGES WITH LANGUAGE */}
      <h2 className="font-bold mt-6 mb-2">{t.hospitals} ({hospitals.length})</h2>

      {hospitals.map((h, i) => (
        <div key={i} className="bg-white p-3 rounded-lg shadow mb-3">
          <p className="font-semibold">{h.name}</p>
          <p className="text-xs text-gray-500">{h.km} • {t.paybill} {h.paybill} • {h.rating} • {t.doctor} {h.doctor.split(' ')[1]}</p>
          <p className="text-sm mt-2">Consult KES {h.price}0 • SHA {h.price}0 • <b>{t.youPay} KES {h.price}</b></p>
          <div className="flex gap-2 mt-2">
            <button className="text-xs px-2 py-1 bg-gray-100 rounded">{t.pay} | Lipa | {t.book}</button>
          </div>
          <div className="flex gap-2 mt-2">
            <input value={phone} onChange={e=>setPhone(e.target.value)} className="border px-2 py-1 rounded text-sm w-32" />
            <button className="text-xs px-2 py-1 border rounded">{t.pay} KES {h.price} — {t.stk}</button>
          </div>
          <p className="text-xs mt-1 text-gray-500">{t.lipa} — {h.name}</p>
        </div>
      ))}
    </main>
  );
}