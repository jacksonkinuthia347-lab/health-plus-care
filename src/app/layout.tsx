import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"
import BottomNav from "@/components/BottomNav"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-16">
        <LanguageProvider>
          {children}
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  )
}