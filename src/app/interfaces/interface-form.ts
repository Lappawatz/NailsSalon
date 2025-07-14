export interface FormBook {
  name: string
  phone: string
  type: "manicure" | "pedicure" | "nailart" | "eyelash" | "";
  date: string
  time: string
  message?: string
}