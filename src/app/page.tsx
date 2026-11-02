"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between p-6 max-w-md mx-auto">
      
      {/* TOP LOGO — Health Plus Care (like Bulky AI in your image) */}
      <div className="mt-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">❤️‍🩹</div>
        <h1 className="font-bold text-xl tracking-tight">Health Plus Care</h1>
      </div>

      {/* CENTER PHONE MOCKUP — Exactly like your Bulky AI screenshot */}
      <div className="relative mt-8">
        <div className="absolute -inset-4 bg-gray-100 rounded-[3rem] blur-xl"></div>
        
        <div className="relative w-[250px] h-[490px] bg-black rounded-[2.8rem] p-3 shadow-2xl border-[7px] border-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10"></div>
          
          <div className="w-full h-full bg-[#f5f5f0] rounded-[2.2rem] overflow-hidden relative flex flex-col">
            {/* Fake hospital screen inside phone */}
            <div className="p-3">
              <p className="text-[10px] text-gray-500">SHA STATUS</p>
              <p className="text-xs font-bold text-green-600">SHA ACTIVE ✅ VERIFIED</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400" 
              alt="Hospital scan"
              className="flex-1 object-cover"
            />
            {/* Scan corners */}
            <div className="absolute top-24 left-5 w-6 h-6 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-24 right-5 w-6 h-6 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-28 left-5 w-6 h-6 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-28 right-5 w-6 h-6 border-b-2 border-r-2 border-white"></div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-black flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full border border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM — Exactly like your image */}
      <div className="w-full mt-10 flex flex-col gap-4">
        <h2 className="font-bold text-[22px] text-center">Health care made easy</h2>

        <button
          onClick={() => {
            setLoading(true);
            router.push("/home");
          }}
          className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          {loading ? "Loading..." : "Get Started →"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/profile")}
            className="font-bold text-black underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </main>
  );
}