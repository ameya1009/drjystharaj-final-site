"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Pain Panacea Superspeciality Pain Clinic",
      subtitle: "Expert Pain Management Solutions",
      quickLinks: "Quick Links",
      contact: "Contact Information",
      followUs: "Follow Us",
      copyright: "© 2024 Dr. Jyeshtharaj V. Patangankar. All rights reserved.",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Appointment", href: "/appointment" },
        { name: "Contact", href: "/contact" },
      ],
    },
    mr: {
      title: "पेन पॅनेसिया सुपरस्पेशॅलिटी पेन क्लिनिक",
      subtitle: "तज्ञ वेदना व्यवस्थापन उपाय",
      quickLinks: "द्रुत दुवे",
      contact: "संपर्क माहिती",
      followUs: "आमचे अनुसरण करा",
      copyright: "© २०२४ डॉ. ज्येष्ठराज व्ही. पाटणगणकर. सर्व हक्क राखीव.",
      links: [
        { name: "मुख्यपृष्ठ", href: "/" },
        { name: "माहिती", href: "/about" },
        { name: "सेवा", href: "/services" },
        { name: "भेटीची वेळ", href: "/appointment" },
        { name: "संपर्क", href: "/contact" },
      ],
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{currentContent.title}</h3>
            <p className="text-gray-300 mb-4">{currentContent.subtitle}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-sm">OM Tower, Chetak Chowk, Ulkanagari, Chhatrapati Sambhajinagar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-sm">88050 56135, 80557 19887</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.quickLinks}</h4>
            <ul className="space-y-2">
              {currentContent.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/jyeshtharaj.patangankar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-jyeshtharaj-patangankar-963a61101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/p/DHDt5kvog-5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
