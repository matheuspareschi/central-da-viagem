/** Mantém só "+" e dígitos, o formato esperado por links tel: e sms:. */
export function toDialableNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}
