export type SHAPlan = 'SHIF_2k' | 'POMSF_45k'

export function calculateSHA(cost: number, plan: SHAPlan, familySize = 1) {
  const shifAnnual = 2000
  const pomsfAnnual = 45000
  
  let pays = 0
  let youPay = 0
  
  if (plan === 'SHIF_2k') {
    // SHIF covers up to 2000 per visit for outpatient
    pays = Math.min(cost, 2000)
    youPay = cost - pays
  } else {
    // POMSF 45k Family covers 45k per year for family
    pays = Math.min(cost, 45000)
    youPay = cost - pays
  }
  
  const remaining = plan === 'SHIF_2k' ? shifAnnual - pays : pomsfAnnual - pays
  
  return { pays, youPay, remaining, plan, familySize }
}

// M-Pesa Config - Replace with your real numbers later
export const MPESA = {
  paybill: '400200',
  account: 'HealthPlus',
  till: '123456',
  lipaNaMpesa: 'Pay via M-Pesa: Paybill 400200 Account HealthPlus'
}