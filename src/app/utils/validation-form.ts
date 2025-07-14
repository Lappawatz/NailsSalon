import { FormBook } from "@/interfaces/interfaces-form";

export function validateForm(data: FormBook): string | null {
  if (!data.name) return "กรุณากรอกชื่อ";
  if (!data.phone) return "กรุณากรอกเบอร์โทรศัพท์";
  if (!/^\d{10}$/.test(data.phone))
    return "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";
  if (!data.date) return "กรุณาเลือกวันที่";
  if (!data.time) return "กรุณาเลือกเวลา";
  return null;
}
