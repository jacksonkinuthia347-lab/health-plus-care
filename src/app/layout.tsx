import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"
import BottomNav from "@/components/BottomNav"
import AccessibilityBar from "@/components/AccessibilityBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-16">
        <LanguageProvider>
          <AccessibilityBar />
          {children}
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  )
}