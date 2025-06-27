"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import { Phone, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in Touch for Expert Pain Management",
      description:
        "Reach out to us for appointments, consultations, or any questions about our pain management services. We are here to help you on your journey to a pain-free life.",
      clinicInfo: {
        title: "Clinic Information",
        name: "Pain Panacea Superspeciality Pain Clinic",
        director: "Dr. Jyeshtharaj V. Patangankar",
        qualification: "MBBS, MD, FIPM, EDPM",
      },
      locations: {
        title: "Our Locations",
        primary: {
          name: "Main Clinic",
          address: "OM Tower, Chetak Chowk, Ulkanagari, Chhatrapati Sambhajinagar, Maharashtra",
          timings: "Mon-Sat: 10:00 AM - 8:00 PM",
        },
        secondary: {
          name: "Branch Clinic",
          address: "New Usmanpura, Opp. Maahi Collection, Osmanpura, Aurangabad, Maharashtra",
          timings: "By Appointment",
        },
      },
      contact: {
        title: "Contact Information",
        phones: ["88050 56135", "80557 19887"],
        emergency: "Emergency consultations available 24/7",
      },
      social: {
        title: "Follow Us",
        description: "Stay connected for health tips and updates",
      },
      quickContact: {
        title: "Quick Contact",
        whatsapp: "WhatsApp",
        call: "Call Now",
        book: "Book Online",
      },
    },
    mr: {
      title: "आमच्याशी संपर्क साधा",
      subtitle: "तज्ञ वेदना व्यवस्थापनासाठी संपर्कात रहा",
      description:
        "भेटी, सल्लामसलत किंवा आमच्या वेदना व्यवस्थापन सेवांबद्दल कोणत्याही प्रश्नांसाठी आमच्याशी संपर्क साधा. वेदनामुक्त जीवनाच्या तुमच्या प्रवासात आम्ही तुम्हाला मदत करण्यासाठी येथे आहोत.",
      clinicInfo: {
        title: "क्लिनिक माहिती",
        name: "पेन पॅनेसिया सुपरस्पेशॅलिटी पेन क्लिनिक",
        director: "डॉ. ज्येष्ठराज व्ही. पाटणगणकर",
        qualification: "MBBS, MD, FIPM, EDPM",
      },
      locations: {
        title: "आमची स्थाने",
        primary: {
          name: "मुख्य क्लिनिक",
          address: "OM टॉवर, चेतक चौक, उल्कानगरी, छत्रपती संभाजीनगर, महाराष्ट्र",
          timings: "सोम-शनि: सकाळी 10:00 - संध्याकाळी 8:00",
        },
        secondary: {
          name: "शाखा क्लिनिक",
          address: "न्यू उस्मानपुरा, माही कलेक्शनच्या समोर, उस्मानपुरा, औरंगाबाद, महाराष्ट्र",
          timings: "भेटीनुसार",
        },
      },
      contact: {
        title: "संपर्क माहिती",
        phones: ["88050 56135", "80557 19887"],
        emergency: "आपत्कालीन सल्लामसलत 24/7 उपलब्ध",
      },
      social: {
        title: "आमचे अनुसरण करा",
        description: "आरोग्य टिप्स आणि अपडेट्ससाठी जुळून रहा",
      },
      quickContact: {
        title: "द्रुत संपर्क",
        whatsapp: "WhatsApp",
        call: "आता कॉल करा",
        book: "ऑनलाइन बुक करा",
      },
    },
  }

  const currentContent = content[language as keyof typeof content]

  const handleWhatsAppClick = () => {
    const phoneNumber = "918805056135"
    const message = encodeURIComponent(
      language === "en"
        ? "Hello Dr. Patangankar, I would like to inquire about pain management consultation."
        : "नमस्कार डॉ. पाटणगणकर, मला वेदना व्यवस्थापन सल्लामसलतबद्दल चौकशी करायची आहे.",
    )
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }
  }

  return (
    <Layout
      title={`${currentContent.title} - Dr. Jyeshtharaj V. Patangankar`}
      description="Contact Dr. Jyeshtharaj V. Patangankar for pain management consultation. Clinic locations in Chhatrapati Sambhajinagar and Aurangabad with phone numbers and addresses."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{currentContent.title}</h1>
          <p className="text-xl text-primary-200 mb-4 slide-up">{currentContent.subtitle}</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto slide-up">{currentContent.description}</p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-800 mb-12 text-center">{currentContent.quickContact.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{currentContent.quickContact.whatsapp}</h3>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {language === "en" ? "Chat Now" : "आता चॅट करा"}
              </button>
            </div>

            {/* Call */}
            <div className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{currentContent.quickContact.call}</h3>
              <a
                href="tel:+918805056135"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
              >
                88050 56135
              </a>
            </div>

            {/* Book Online */}
            <div className="bg-purple-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">{currentContent.quickContact.book}</h3>
              <a
                href="/appointment"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
              >
                {language === "en" ? "Book Now" : "आता बुक करा"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Clinic Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">{currentContent.clinicInfo.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-navy-700 mb-2">{currentContent.clinicInfo.name}</h4>
                  <p className="text-gray-600">{currentContent.clinicInfo.director}</p>
                  <p className="text-sm text-primary-600 font-medium">{currentContent.clinicInfo.qualification}</p>
                </div>

                <div className="border-t pt-4">
                  <h5 className="font-semibold text-navy-700 mb-3">{currentContent.contact.title}</h5>
                  <div className="space-y-3">
                    {currentContent.contact.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:+91${phone.replace(/\s/g, "")}`}
                        className="flex items-center space-x-3 text-gray-700 hover:text-navy-600 transition-colors duration-200"
                      >
                        <Phone size={18} />
                        <span>+91 {phone}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800 text-sm font-medium">{currentContent.contact.emergency}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">{currentContent.locations.title}</h3>

              <div className="space-y-6">
                {/* Primary Location */}
                <div className="border-b pb-6">
                  <h4 className="text-lg font-semibold text-navy-700 mb-3">{currentContent.locations.primary.name}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-navy-600 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-700">{currentContent.locations.primary.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-navy-600" size={18} />
                      <p className="text-gray-700">{currentContent.locations.primary.timings}</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Location */}
                <div>
                  <h4 className="text-lg font-semibold text-navy-700 mb-3">
                    {currentContent.locations.secondary.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-navy-600 mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-700">{currentContent.locations.secondary.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-navy-600" size={18} />
                      <p className="text-gray-700">{currentContent.locations.secondary.timings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-4">{currentContent.social.title}</h3>
          <p className="text-gray-600 mb-8">{currentContent.social.description}</p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/jyeshtharaj.patangankar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-jyeshtharaj-patangankar-963a61101"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/p/DHDt5kvog-5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-navy-800 mb-8 text-center">
            {language === "en" ? "Find Our Clinic" : "आमचे क्लिनिक शोधा"}
          </h3>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gray-500 mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">
                {language === "en" ? "Interactive Map Coming Soon" : "परस्परसंवादी नकाशा लवकरच येत आहे"}
              </p>
              <p className="text-gray-500 mt-2">OM Tower, Chetak Chowk, Ulkanagari</p>
              <p className="text-gray-500">Chhatrapati Sambhajinagar, Maharashtra</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
