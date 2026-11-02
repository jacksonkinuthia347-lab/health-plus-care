"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  En: {
    hospitals: "Hospitals Near You",
    youPay: "You Pay",
    pay: "Pay",
    book: "Book",
    lipa: "Lipa na M-Pesa",
    stk: "— STK Push",
    verified: "VERIFIED",
    shaStatus: "SHA STATUS",
    shaActive: "SHA ACTIVE",
    paybill: "Paybill",
    doctor: "Dr.",
    km: "Km",
  },
  Sw: {
    hospitals: "Hospitali Karibu Nawe",
    youPay: "Unalipa",
    pay: "Lipa",
    book: "Weka Nafasi",
    lipa: "Lipa na M-Pesa",
    stk: "— STK Sukuma",
    verified: "IMETHIBITISHWA",
    shaStatus: "HALI YA SHA",
    shaActive: "SHA INAFANYA KAZI",
    paybill: "Paybill",
    doctor: "Dkt.",
    km: "Km",
  },
  Kikuyu: {
    hospitals: "Thibitari Cia Hakuhi Nawe",
    youPay: "Nĩ Ũrĩhaga",
    pay: "Rĩha",
    book: "Book",
    lipa: "Rĩha na M-Pesa",
    stk: "— STK Push",
    verified: "NĨ ĨTIKĨRITIO",
    shaStatus: "ŨHORO WA SHA",
    shaActive: "SHA NĨ WIRA-INI",
    paybill: "Paybill",
    doctor: "Dagitari",
    km: "Km",
  },
  National: {
    hospitals: "Hospitali za Karibu",
    youPay: "Unalipa",
    pay: "Lipa",
    book: "Hifadhi",
    lipa: "Lipa na M-Pesa",
    stk: "— STK Push",
    verified: "IMETHIBITISHWA",
    shaStatus: "HALI YA SHA",
    shaActive: "SHA HAI",
    paybill: "Paybill",
    doctor: "Daktari",
    km: "Km",
  },
  Hi: {
    hospitals: "आपके निकट अस्पताल",
    youPay: "आप भुगतान करते हैं",
    pay: "भुगतान",
    book: "बुक करें",
    lipa: "M-Pesa से भुगतान",
    stk: "— STK पुश",
    verified: "सत्यापित",
    shaStatus: "SHA स्थिति",
    shaActive: "SHA सक्रिय",
    paybill: "पेबिल",
    doctor: "डॉ.",
    km: "कि.मी.",
  },
  Voice: {
    hospitals: "Hospitals Near You 🔊",
    youPay: "You Pay 🔊",
    pay: "Pay 🔊",
    book: "Book 🔊",
    lipa: "Lipa na M-Pesa 🔊",
    stk: "— STK Push 🔊",
    verified: "VERIFIED 🔊",
    shaStatus: "SHA STATUS 🔊",
    shaActive: "SHA ACTIVE 🔊",
    paybill: "Paybill 🔊",
    doctor: "Doctor 🔊",
    km: "Km 🔊",
  },
  KSL: {
    hospitals: "Hospitali 🤟 Karibu",
    youPay: "You Pay 🤟",
    pay: "Lipa 🤟",
    book: "Book 🤟",
    lipa: "Lipa na M-Pesa 🤟",
    stk: "— STK Push 🤟",
    verified: "VERIFIED 🤟",
    shaStatus: "SHA STATUS 🤟",
    shaActive: "SHA ACTIVE 🤟",
    paybill: "Paybill 🤟",
    doctor: "Daktari 🤟",
    km: "Km 🤟",
  },
};

const LangContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: any }) {
  const [lang, setLang] = useState("En");

  useEffect(() => {
    const saved = localStorage.getItem("health-lang");
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("health-lang", lang);
  }, [lang]);

  const t = (translations as any)[lang] || translations.En;

  return (
    <LangContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);