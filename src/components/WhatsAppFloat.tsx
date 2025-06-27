"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918805056135"
    const message = encodeURIComponent("Hello Dr. Patangankar, I would like to book an appointment.")
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
