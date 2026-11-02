"use client";
import { useLang } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, voiceOn, setVoiceOn, speakNow, t } = useLang();
  
  const langs = [
    { code: "En", label: "En" },
    { code: "Sw", label: "Sw" },
    { code: "Kikuyu", label: "Kikuyu" },
    { code: "National", label: "National" },
    { code: "Hi", label: "Hi" },
    { code: "KSL", label: "KSL" },
  ];

  return (
    <div className="flex flex-wrap gap-1 items-center p-1 bg-white rounded-lg">
      <div className="flex gap-1">
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 text-xs rounded-full border ${lang === l.code ? "bg-black text-white" : "bg-white"}`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* VOICE BUTTON - Changes language automatically */}
      <button
        onClick={() => {
          const newVoice = !voiceOn;
          setVoiceOn(newVoice);
          if (newVoice) {
            speakNow(t.hospitals, lang);
          } else {
            window.speechSynthesis.cancel();
          }
        }}
        className={`ml-2 px-3 py-1 text-xs rounded-full border-2 ${voiceOn ? "bg-green-600 text-white border-green-600 animate-pulse" : "bg-gray-100"}`}
      >
        {voiceOn ? `🔊 Voice ON (${lang})` : "🔇 Voice OFF"}
      </button>
      
      {voiceOn && (
        <span className="text-[10px] text-green-600">Speaking in {lang} • {t.hospitals}</span>
      )}
    </div>
  );
}