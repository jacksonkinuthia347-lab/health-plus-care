'use client'
export default function ScanPage() {
  return (
    <main className="p-4 max-w-md mx-auto min-h-screen bg-white">
      <h1 className="text-2xl font-black">👁️ Eye Scan</h1>
      <p className="text-sm text-gray-500 mt-1">KSL video + AI check</p>
      <div className="mt-6 border-2 border-dashed border-black rounded-xl p-10 text-center">
        <p className="text-4xl">📷</p>
        <p className="text-sm mt-2 font-bold">Camera Placeholder</p>
        <p className="text-xs mt-1">Day 5: Connect Supabase + AI</p>
        <button onClick={()=>alert('Scan saved! You earned KES 3 AdMob')} className="mt-4 bg-black text-white px-6 py-2 rounded-xl text-sm">Start Scan</button>
      </div>
    </main>
  )
}