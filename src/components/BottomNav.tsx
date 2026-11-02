'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const path = usePathname()
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-black text-white flex justify-around py-3 text-xs rounded-t-xl">
      <Link href="/" className={path==='/'?'font-black':''}>🏠 Home</Link>
      <Link href="/scan" className={path==='/scan'?'font-black':''}>👁️ Scan</Link>
      <Link href="/hospitals/4" className={path?.includes('/hospitals')?'font-black':''}>🏥 Hospitals</Link>
      <Link href="/profile" className={path==='/profile'?'font-black':''}>👤 Profile</Link>
    </div>
  )
}