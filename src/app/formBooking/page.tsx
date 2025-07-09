"use client";

import React from "react";
import { FormBook } from "@/types/form";
import BookingForm from "@/components/bookingForm/BookingForm";

export default function page() {
  const handleBookingSubmit = (data: FormBook) => {
    console.log(JSON.stringify(data, null, 2));

    // ที่นี่คุณสามารถจัดการข้อมูลการจองได้ตามต้องการ
    // เช่น ส่งข้อมูลไปยัง backend หรือแสดงผลลัพธ์ใน UI
    alert("การจองของคุณถูกส่งเรียบร้อยแล้ว!");
    console.log("Booking data submitted:", data);
      
    // TODO: ส่งข้อมูลไป backend หรือแสดงผลลัพธ์
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-white to-purple-200 ">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md ">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl font-bold">แบบฟอร์มการจองคิว</h1>
          </div>
          <p className="mt-4">กรุณากรอกข้อมูลให้ครบถ้วนเพื่อจองคิว</p>

          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      </div>
    </div>
  );
}
