'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function BottomNav() {
  const path = usePathname()
  const tabs = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/scan", label: "Scan", icon: "📷" },
    { href: "/hospitals/1", label: "Hospitals", icon: "🏥" },
    { href: "/profile", label: "Profile", icon: "👤" },
  ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-black text-white flex justify-around py-2.5 rounded-t-2xl z-50 border-t-2 border-black">
      {tabs.map(t => (
        <Link key={t.href} href={t.href} className={`flex flex-col items-center text-[10px] font-bold ${path===t.href?'opacity-100':'opacity-60'}`}>
          <span className="text-[18px]">{t.icon}</span>{t.label}
        </Link>
      ))}
    </nav>
  )
}