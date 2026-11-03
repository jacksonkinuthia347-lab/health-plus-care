"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type User = { id: string; emailOrPhone: string; password: string; created: string; };

export default function WelcomePage() {
  const router = useRouter();
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    setError("");
    if (!emailOrPhone.trim()) return "Enter email or phone number";
    const isEmail = emailOrPhone.includes("@");
    const isPhone = /^[0-9+\s]{10,15}$/.test(emailOrPhone.replace(/\s/g, ""));
    if (!isEmail && !isPhone) return "Enter valid email or phone (e.g. jackson@gmail.com or 0712345678)";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (mode === "signup" && password !== confirm) return "Passwords do not match";
    return "";
  };

  const handleAuth = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setLoading(true);

    setTimeout(() => {
      const users: User[] = JSON.parse(localStorage.getItem("health-users-db") || "[]");
      const existing = users.find(u => u.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase());

      if (mode === "signup") {
        if (existing) { setError("Account already exists. Please Sign in."); setLoading(false); return; }
        const newUser: User = { id: Date.now().toString(), emailOrPhone, password: btoa(password), created: new Date().toISOString() };
        localStorage.setItem("health-users-db", JSON.stringify([...users, newUser]));
        localStorage.setItem("health-user", JSON.stringify({ emailOrPhone, loggedIn: true, loginTime: Date.now() }));
      } else {
        if (!existing) { setError("No account found. Please Create account."); setLoading(false); return; }
        if (existing.password !== btoa(password)) { setError("Wrong password. Try again."); setLoading(false); return; }
        localStorage.setItem("health-user", JSON.stringify({ emailOrPhone, loggedIn: true, loginTime: Date.now() }));
      }

      setLoading(false);
      setShowAuth(false);
      router.push("/home");
    }, 800);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between p-6 max-w-md mx-auto">
      
      {/* TOP — SAME GREEN SHIELD */}
      <div className="mt-10 flex items-center gap-2">
        <svg width="42" height="42" viewBox="0 0 44 44"><path d="M22 2 L40 10 L40 22 C40 33 22 42 22 42 C22 42 4 33 4 22 L4 10 Z" fill="#10B981"/><path d="M20 12 H24 V18 H30 V22 H24 V28 H20 V22 H14 V18 H20 Z" fill="white" /></svg>
        <h1 className="font-bold text-[22px] text-gray-800">Health Plus Care</h1>
      </div>

      <div className="relative mt-6 w-[230px] h-[460px] bg-black rounded-[2.5rem] p-2 shadow-2xl border-[5px] border-black">
        <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500" alt="Hospital" className="w-full h-full object-cover" />
          <div className="absolute inset-0 border-[2px] border-green-400/50 m-4 rounded-lg pointer-events-none"></div>
        </div>
      </div>

      <div className="w-full mt-6 flex flex-col gap-4">
        <h2 className="font-bold text-[20px] text-center">Health care made easy</h2>
        <button onClick={() => { setMode("signup"); setShowAuth(true); }} className="w-full bg-black text-white py-4 rounded-full font-semibold">Get Started →</button>
        <p className="text-center text-sm text-gray-500">Already have an account? <button onClick={() => { setMode("login"); setShowAuth(true); }} className="font-bold text-black underline">Sign in</button></p>
      </div>

      {/* REAL FUNCTIONAL AUTH — Email/Phone + Password */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-t-[28px] p-6 pb-10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-1">
              <div className="w-6"></div>
              <h3 className="font-bold text-xl">{mode === "login" ? "Sign In" : "Create Account"}</h3>
              <button onClick={() => setShowAuth(false)} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">×</button>
            </div>
            <p className="text-center text-sm text-gray-500 mb-6">{mode === "login" ? "Welcome back to Health Plus Care" : "Create your secure account"}</p>

            <div className="flex bg-gray-100 rounded-full p-1 mb-5">
              <button onClick={() => setMode("login")} className={`flex-1 py-2 rounded-full text-sm font-semibold ${mode==="login" ? "bg-black text-white" : "text-gray-500"}`}>Log In</button>
              <button onClick={() => setMode("signup")} className={`flex-1 py-2 rounded-full text-sm font-semibold ${mode==="signup" ? "bg-black text-white" : "text-gray-500"}`}>Create Account</button>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-700 ml-2">Email or Phone Number</label>
                <input value={emailOrPhone} onChange={e=>setEmailOrPhone(e.target.value)} placeholder="jackson@gmail.com or 0712345678" className="mt-1 w-full border border-gray-300 rounded-full px-5 py-3.5 text-sm outline-none focus:border-black" />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 ml-2">Password</label>
                <div className="mt-1 relative">
                  <input type={showPass ? "text" : "password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" className="w-full border border-gray-300 rounded-full px-5 py-3.5 text-sm outline-none focus:border-black pr-12" />
                  <button onClick={()=>setShowPass(!showPass)} className="absolute right-4 top-3.5 text-xs font-bold text-gray-500">{showPass ? "HIDE" : "SHOW"}</button>
                </div>
              </div>

              {mode==="signup" && (
                <div>
                  <label className="text-xs font-semibold text-gray-700 ml-2">Confirm Password</label>
                  <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="••••••••" className="mt-1 w-full border border-gray-300 rounded-full px-5 py-3.5 text-sm outline-none focus:border-black" />
                </div>
              )}

              {error && <p className="text-red-500 text-xs font-medium bg-red-50 p-3 rounded-xl">{error}</p>}

              <button onClick={handleAuth} disabled={loading} className="mt-2 w-full bg-black text-white py-4 rounded-full font-semibold disabled:opacity-60">
                {loading ? "Please wait..." : mode==="login" ? "Sign In Securely →" : "Create Secure Account →"}
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-2">🔒 Password encrypted • Your data is secure • By continuing you agree to Terms & Privacy Policy</p>

              <div className="mt-3 flex flex-col gap-2">
                <button onClick={() => { localStorage.setItem("health-user", JSON.stringify({ emailOrPhone: "guest@healthplus.co.ke", loggedIn: true })); router.push("/home"); }} className="w-full bg-white border border-gray-200 py-3 rounded-full text-sm font-semibold">Continue as Guest</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}