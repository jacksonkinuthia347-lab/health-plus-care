export default function ProfilePage() {
  return (
    <main className="p-4 max-w-md mx-auto min-h-screen bg-white">
      <h1 className="text-2xl font-black">👤 My Profile</h1>
      <div className="mt-6 border-2 border-black rounded-xl p-4">
        <p className="text-sm">Name: Jackson</p>
        <p className="text-sm mt-1">SHA Status: <span className="bg-green-100 px-2 py-1 rounded font-bold">ACTIVE ✅</span></p>
        <p className="text-sm mt-1">Phone: 07XX XXX XXX</p>
        <p className="text-xs mt-4 text-gray-500">Balance: KES 0 — Earn from scans</p>
      </div>
    </main>
  )
}