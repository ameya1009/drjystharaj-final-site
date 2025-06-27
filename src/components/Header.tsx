"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Menu, X, Globe } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "mr" : "en"
    setLanguage(newLanguage)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage)
    }
  }

  const navigation = {
    en: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Appointment", href: "/appointment" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Contact", href: "/contact" },
    ],
    mr: [
      { name: "मुख्यपृष्ठ", href: "/" },
      { name: "माहिती", href: "/about" },
      { name: "सेवा", href: "/services" },
      { name: "भेटीची वेळ", href: "/appointment" },
      { name: "प्रशंसापत्रे", href: "/testimonials" },
      { name: "संपर्क", href: "/contact" },
    ],
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/JystharajLogo.jpg"
              alt="Dr. Patangankar Logo"
              width={60}
              height={60}
              className="rounded-lg"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-navy-800">Dr. Jyeshtharaj V. Patangankar</h1>
              <p className="text-sm text-primary-600">
                {language === "en" ? "Pain Management Specialist" : "वेदना व्यवस्थापन तज्ञ"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation[language as keyof typeof navigation].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  router.pathname === item.href
                    ? "text-navy-600 border-b-2 border-navy-600"
                    : "text-gray-700 hover:text-navy-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-primary-100 hover:bg-primary-200 transition-colors duration-200"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === "en" ? "मराठी" : "English"}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button onClick={toggleLanguage} className="p-2 rounded-lg bg-primary-100 hover:bg-primary-200">
              <Globe size={16} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-gray-100">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation[language as keyof typeof navigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    router.pathname === item.href ? "text-navy-600" : "text-gray-700 hover:text-navy-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
