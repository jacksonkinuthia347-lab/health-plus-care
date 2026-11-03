"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState("");

  const doLogin = (method: string) => {
    localStorage.setItem("health-user", JSON.stringify({ method, email: email || "user@healthplus.co.ke", loggedIn: true }));
    setShowSignIn(false);
    router.push("/home");
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between p-6 max-w-md mx-auto relative">
      
      {/* TOP — Health Plus Care + GREEN SHIELD CROSS */}
      <div className="mt-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#10B981] rounded-[10px] flex items-center justify-center shadow-sm"
             style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 55%, 50% 100%, 0% 55%, 0% 15%)" }}>
          <span className="text-white font-bold text-xl leading-none -mt-0.5">+</span>
        </div>
        {/* Real shield SVG — exact green */}
        <svg width="44" height="44" viewBox="0 0 44 44" className="-mr-1">
          <path d="M22 2 L40 10 L40 22 C40 33 22 42 22 42 C22 42 4 33 4 22 L4 10 Z" fill="#10B981"/>
          <path d="M20 12 H24 V18 H30 V22 H24 V28 H20 V22 H14 V18 H20 Z" fill="white" />
        </svg>
        <h1 className="font-bold text-[22px] tracking-tight text-gray-800">Health Plus Care</h1>
      </div>

      {/* CENTER — Phone scan */}
      <div className="relative mt-8">
        <div className="absolute -inset-4 bg-gray-100 rounded-[3rem] blur-xl"></div>
        <div className="relative w-[250px] h-[490px] bg-black rounded-[2.8rem] p-2.5 shadow-2xl border-[6px] border-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-lg z-10"></div>
          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500" alt="Hospital" className="w-full h-full object-cover opacity-90" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full">
              <p className="text-[10px] text-white">Room Scan • Scanning • 87%</p>
            </div>
            <div className="absolute top-10 left-4 w-8 h-8 border-t-2 border-l-2 border-green-400"></div>
            <div className="absolute top-10 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400"></div>
            <div className="absolute bottom-10 left-4 w-8 h-8 border-b-2 border-l-2 border-green-400"></div>
            <div className="absolute bottom-10 right-4 w-8 h-8 border-b-2 border-r-2 border-green-400"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full mt-8 flex flex-col gap-4">
        <h2 className="font-bold text-[20px] text-center text-gray-900">Health care made easy</h2>
        <button onClick={() => router.push("/home")} className="w-full bg-black text-white py-4 rounded-full font-semibold">
          Get Started →
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account? <button onClick={() => setShowSignIn(true)} className="font-bold text-black underline">Sign in</button>
        </p>
      </div>

      {/* FUNCTIONAL SIGN IN SHEET — Exact image + Works */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm p-0">
          <div className="w-full max-w-md bg-white rounded-t-[28px] p-6 pb-10 shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <div className="w-6"></div>
              <h3 className="font-bold text-xl">Sign In</h3>
              <button onClick={() => {setShowSignIn(false); setEmailMode(false);}} className="w-7 h-7 rounded-full bg-gray-100">×</button>
            </div>
            <p className="text-center text-sm text-gray-600 mb-6">Continue to access your care dashboard</p>

            {!emailMode ? (
              <div className="flex flex-col gap-3">
                <button onClick={() => doLogin("apple")} className="w-full bg-black text-white py-4 rounded-full font-semibold flex justify-center gap-2">
                   Sign in with Apple
                </button>
                <button onClick={() => doLogin("google")} className="w-full bg-white border border-gray-200 text-black py-4 rounded-full font-semibold flex justify-center gap-2">
                  <span className="text-lg">G</span> Sign in with Google
                </button>
                <button onClick={() => setEmailMode(true)} className="w-full bg-white border border-gray-200 text-black py-4 rounded-full font-semibold flex justify-center gap-2">
                  ✉️ Continue with email
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4">By continuing you agree to our Terms of Service & Privacy Policy</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input autoFocus value={email} onChange={e=>setEmail(e.target.value)} placeholder="jackson@healthplus.co.ke" className="w-full border border-gray-300 rounded-full px-5 py-4 text-sm outline-none focus:border-black" />
                <button onClick={() => doLogin("email")} className="w-full bg-black text-white py-4 rounded-full font-semibold">Continue</button>
                <button onClick={()=>setEmailMode(false)} className="text-sm text-gray-500 mt-2">← Back</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}