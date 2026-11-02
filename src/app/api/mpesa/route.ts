import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  const { phone, amount } = await req.json()
  // Day 4: Fake STK, Day 5: Connect Daraja
  console.log(`M-Pesa STK to ${phone} amount ${amount}`)
  return NextResponse.json({ success: true, message: `STK Push KES ${amount} to ${phone} — Integrate Daraja tomorrow!` })
}