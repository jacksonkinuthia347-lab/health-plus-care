"use client";
import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  En: { code: "en-KE", hospitals: "Hospitals Near You", youPay: "You Pay", pay: "Pay", book: "Book", lipa: "Lipa na M-Pesa", verified: "VERIFIED" },
  Sw: { code: "sw-KE", hospitals: "Hospitali Karibu Nawe", youPay: "Unalipa", pay: "Lipa", book: "Weka Nafasi", lipa: "Lipa na M-Pesa", verified: "IMETHIBITISHWA" },
  Kikuyu: { code: "ki-KE", hospitals: "Thibitari Cia Hakuhi Nawe", youPay: "Ni Urihaga", pay: "Riha", book: "Book", lipa: "Riha na M-Pesa", verified: "NI ITIKIRITIO" },
  National: { code: "so-KE", hospitals: "Isbitaalada kuu Dhow", youPay: "Waxaad Bixisaa", pay: "Bixi", book: "Book", lipa: "Ku Bixi M-Pesa", verified: "LA XAQIIJIYAY" },
  Hi: { code: "hi-IN", hospitals: "Aapke Nikat Aspatal", youPay: "Aap Bhugtan Karte Hain", pay: "Bhugtan", book: "Book Karein", lipa: "M-Pesa se Bhugtan", verified: "Satyapit" },
  KSL: { code: "en-KE", hospitals: "Hospitali Karibu 🤟", youPay: "You Pay 🤟", pay: "Lipa 🤟", book: "Book 🤟", lipa: "Lipa na M-Pesa 🤟", verified: "VERIFIED 🤟" },
};

const LangContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: any }) {
  const [lang, setLang] = useState("En");
  const [voiceOn, setVoiceOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("health-lang");
    if (saved) setLang(saved);
    const v = localStorage.getItem("health-voice");
    if (v) setVoiceOn(v === "on");
  }, []);

  useEffect(() => {
    localStorage.setItem("health-lang", lang);
    // AUTO SPEAK when language changes AND voice is ON
    if (voiceOn) {
      speakNow((translations as any)[lang]?.hospitals || "Hospitals Near You", lang);
    }
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("health-voice", voiceOn ? "on" : "off");
  }, [voiceOn]);

  const speakNow = (text: string, l = lang) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const langCode = (translations as any)[l]?.code || "en-KE";
    
    // Map to real voice language
    if (l === "Kikuyu") utter.lang = "sw-KE"; // Browser doesn't have Kikuyu, uses Swahili voice - closest
    else utter.lang = langCode;
    
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  };

  const t = (translations as any)[lang] || translations.En;

  return (
    <LangContext.Provider value={{ lang, setLang, t, translations, voiceOn, setVoiceOn, speakNow }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);