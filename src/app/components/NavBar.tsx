"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Calendar, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "หน้าแรก", href: "/" },
    { name: "บริการ", href: "/services" },
    { name: "ผลงาน", href: "/gallery" },
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "ติดต่อ", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
              <span className="text-lg font-bold text-white">💅</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              <span className="text-pink-500">Beautiful</span> Nails
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-pink-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-600 hover:bg-pink-50">
              <Phone className="mr-2 h-4 w-4" />
              02-123-4567
            </Button>
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
              <Calendar className="mr-2 h-4 w-4" />
              จองคิว
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">เปิดเมนู</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
                      <span className="text-lg font-bold text-white">💅</span>
                    </div>
                    <span className="text-lg font-bold text-gray-800">
                      <span className="text-pink-500">Beautiful</span> Nails
                    </span>
                  </div>
                </SheetTitle>
                <SheetDescription className="text-left text-gray-600 ">
                  เมนูหลักสำหรับการนำทางและติดต่อร้านทำเล็บ
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col h-full pt-2">
                {/* Mobile Navigation */}
                <div className="flex flex-col space-y-1 justify-center items-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-md font-medium text-gray-600 hover:text-pink-500 transition-colors duration-200 py-2 hover:bg-pink-50 p-4  rounded-full w-full text-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 mt-auto pb-6 ">
                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-500 hover:bg-pink-50 justify-start bg-transparent mx-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    โทร 02-123-4567
                  </Button>
                  <Button
                    className="bg-pink-500 hover:bg-pink-600 text-white justify-start mx-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    จองคิวออนไลน์
                  </Button>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t">
                    <Instagram className="h-5 w-5 text-pink-500 cursor-pointer hover:text-pink-600 hover:scale-120 transition-all duration-300" />
                    <Facebook className="h-5 w-5 text-pink-500 cursor-pointer hover:text-pink-600 hover:scale-120 transition-all duration-300 " />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
