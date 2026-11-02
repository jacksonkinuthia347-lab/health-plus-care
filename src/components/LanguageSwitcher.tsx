"use client";
import { useLang } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const langs = [
    { code: "En", label: "En" },
    { code: "Sw", label: "Sw" },
    { code: "Kikuyu", label: "Kikuyu" },
    { code: "National", label: "National" },
    { code: "Hi", label: "Hi" },
    { code: "Voice", label: "Voice" },
    { code: "KSL", label: "KSL" },
  ];

  return (
    <div className="flex flex-wrap gap-1 p-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 text-xs rounded-full border ${
            lang === l.code
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}