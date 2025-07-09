import React from "react";
import { FormBook } from "@/types/form";

type BookingFormProps = {
  onSubmit: (data: FormBook) => void;
};

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormBook = {
      name: String(formData.get("name") || ""),
      type: formData.get("type") as "manicure" | "pedicure" | "nailart" | "eyelash",
      phone: String(formData.get("phone") || ""),
      date: String(formData.get("date") || ""),
      time: String(formData.get("time") || ""),
      message: String(formData.get("message") || ""),
    };
    onSubmit(data);
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium">
          ชื่อ
        </label>
        <input
          type="text"
          placeholder="ชื่อ-สกุล หรือ ชื่อเล่น"
          id="name"
          name="name"
          className="p-2 mt-1 block w-full rounded-md bg-pink-50 border-purple-400 shadow-sm shadow-pink-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="type" className="text-sm font-medium">
          เลือกบริการ
        </label>
        <select
          id="type"
          name="type"
          className="p-2 mt-1 block w-full rounded-md bg-pink-50  shadow-sm  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-pink-300 "
          defaultValue=""
          required
        >
          <option value="" disabled>
            -- กรุณาเลือกบริการ --
          </option>
          <option value="manicure">บริการทำเล็บมือ</option>
          <option value="pedicure">บริการทำเล็บเท้า</option>
          <option value="nailart">ออกแบบลายเล็บ</option>
          <option value="eyelash">ต่อขนตา</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium">
          หมายเลขโทรศัพท์
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          placeholder="หมายเลขโทรศัพท์ของคุณ"
          className="p-2 mt-1 block w-full rounded-md bg-pink-50 border-purple-400 shadow-sm shadow-pink-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">
          วันที่ต้องการจอง
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="p-2 mt-1 block w-full rounded-md bg-pink-50  shadow-sm  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-pink-300 "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="time" className="text-sm font-medium text-gray-700">
          เวลาที่ต้องการจอง
        </label>
        <input
          type="time"
          id="time"
          name="time"
          className="p-2 mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-pink-300 bg-pink-50 "
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium">
          อื่นๆ{" "}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="คำอธิบายเพิ่มเติม ความต้องการจองของคุณ"
          rows={4}
          className="p-2 mt-1 block w-full rounded-md bg-pink-50 border-gray-300 shadow-sm shadow-pink-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          ยกเลิก
        </button>
        <button
          type="submit"
          className="w-28 inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-300 transition-all duration-300 "
        >
          ส่ง
        </button>
      </div>
    </form>
  );
}
