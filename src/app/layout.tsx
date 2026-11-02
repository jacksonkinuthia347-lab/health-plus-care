import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Health Plus Care",
  description: "SHA + M-Pesa Hospital Booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}