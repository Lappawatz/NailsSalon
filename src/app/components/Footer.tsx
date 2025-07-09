import React from "react";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h4 className="text-2xl font-bold mb-4 text-pink-400">
            Beautiful Nails
          </h4>
          <p className="text-gray-300 mb-4">
            เปิดทุกวัน 10:00 - 20:00 น. | โทร 02-123-4567
          </p>
          <div className="flex justify-center gap-4">
            <Instagram className="h-6 w-6 text-pink-400 cursor-pointer hover:text-pink-300 transition-colors duration-200" />
            <Facebook className="h-6 w-6 text-pink-400 cursor-pointer hover:text-pink-300 transition-colors duration-200" />
          </div>
        </div>
      </footer>
    </div>
  );
}
