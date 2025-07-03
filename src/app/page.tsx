import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Calendar,
  Instagram,
  Facebook,
  MapPin,
  Link,
} from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Nail from "@/images/nail.jpg";
import Links from "next/link";
export default function HomePage() {
  const portfolioImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=300",
      alt: "French Manicure",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Gel Polish Design",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Nail Art Flowers",
    },
    { id: 4, src: "/placeholder.svg?height=300&width=300", alt: "Ombre Nails" },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Glitter Nails",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Marble Effect",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Chrome Nails",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=300&width=300",
      alt: "Minimalist Design",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-white to-purple-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              <span className="text-pink-500">Beautiful</span> Nails
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6">
              Professional Nail Salon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              ยินดีต้อนรับสู่ร้านทำเล็บของเรา
              ที่จะทำให้เล็บของคุณสวยงามและโดดเด่น
              ด้วยบริการคุณภาพและฝีมือระดับมืออาชีพ
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              ติดต่อเรา
            </Button>
            <Links href="/formBooking">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <Calendar className="mr-2 h-5 w-5" />
                จองคิว
              </Button>
            </Links>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pink-500" />
              <span>123 ถนนสุขุมวิท กรุงเทพฯ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-pink-500" />
              <span>02-123-4567</span>
            </div>
            <div className="flex gap-3">
              <Instagram className="h-5 w-5 text-pink-500 cursor-pointer hover:text-pink-600 transition-colors duration-200" />
              <Facebook className="h-5 w-5 text-pink-500 cursor-pointer hover:text-pink-600 transition-colors duration-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-gradient-to-bl from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ผลงานของเรา
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ชมผลงานการทำเล็บที่หลากหลายและสวยงาม จากฝีมือช่างมืออาชีพของเรา
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {portfolioImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={Nail}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full bg-white transition-colors duration-300"
            >
              ดูผลงานเพิ่มเติม
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              บริการของเรา
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💅</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Manicure
                </h4>
                <p className="text-gray-600">บริการทำเล็บมือแบบครบวงจร</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🦶</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Pedicure
                </h4>
                <p className="text-gray-600">บริการทำเล็บเท้าและดูแลเท้า</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Nail Art
                </h4>
                <p className="text-gray-600">ออกแบบลายเล็บสวยงามตามต้องการ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
