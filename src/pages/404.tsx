"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Home, ArrowLeft, Phone } from "lucide-react"

export default function Custom404() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "404 - Page Not Found",
      heading: "Oops! Page Not Found",
      message:
        "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      suggestions: {
        title: "Here are some helpful links:",
        links: [
          { name: "Go to Homepage", href: "/", icon: Home },
          { name: "About Dr. Patangankar", href: "/about", icon: ArrowLeft },
          { name: "Our Services", href: "/services", icon: ArrowLeft },
          { name: "Book Appointment", href: "/appointment", icon: Phone },
          { name: "Contact Us", href: "/contact", icon: Phone },
        ],
      },
      backHome: "Back to Homepage",
      contactSupport: "Contact Support",
    },
    mr: {
      title: "404 - पृष्ठ सापडले नाही",
      heading: "अरे! पृष्ठ सापडले नाही",
      message: "तुम्ही शोधत असलेले पृष्ठ कदाचित काढले गेले असेल, त्याचे नाव बदलले असेल किंवा तात्पुरते अनुपलब्ध असेल.",
      suggestions: {
        title: "येथे काही उपयुक्त दुवे आहेत:",
        links: [
          { name: "मुख्यपृष्ठावर जा", href: "/", icon: Home },
          { name: "डॉ. पाटणगणकर बद्दल", href: "/about", icon: ArrowLeft },
          { name: "आमच्या सेवा", href: "/services", icon: ArrowLeft },
          { name: "भेटीची वेळ बुक करा", href: "/appointment", icon: Phone },
          { name: "आमच्याशी संपर्क साधा", href: "/contact", icon: Phone },
        ],
      },
      backHome: "मुख्यपृष्ठावर परत जा",
      contactSupport: "सहाय्यता संपर्क",
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <Layout
      title={currentContent.title}
      description="Page not found. Return to Dr. Jyeshtharaj V. Patangankar's pain management clinic website."
    >
      <section className="section-padding min-h-screen flex items-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-bold text-primary-200 mb-8">404</div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">{currentContent.heading}</h1>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">{currentContent.message}</p>

            {/* Helpful Links */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-navy-700 mb-6">{currentContent.suggestions.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                {currentContent.suggestions.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center space-x-2 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 text-navy-700 hover:text-navy-800"
                  >
                    <link.icon size={18} />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                <Home className="inline-block mr-2" size={20} />
                {currentContent.backHome}
              </Link>

              <Link href="/contact" className="btn-secondary">
                <Phone className="inline-block mr-2" size={20} />
                {currentContent.contactSupport}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
