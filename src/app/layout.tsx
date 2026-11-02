import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"
import BottomNav from "@/components/BottomNav"
import AccessibilityBar from "@/components/AccessibilityBar"

export const metadata = { title: "Health Plus Care", description: "SHA, M-Pesa, Booking, Video Call" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-20 bg-[#f5f5f0]">
        <LanguageProvider>
          <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
            <AccessibilityBar />
            {children}
            <BottomNav />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}