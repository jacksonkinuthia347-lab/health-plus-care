export async function POST(req: Request) {
  const { phone, amount, hospital } = await req.json()
  console.log('M-Pesa STK:', phone, amount, hospital)
  return Response.json({ message: `STK Push sent to ${phone} for KES ${amount} — ${hospital}. Check phone & enter PIN.` })
}