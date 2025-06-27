"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import { Calendar, Clock, Phone, ExternalLink, MapPin } from "lucide-react"

export default function Appointment() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Book Your Appointment",
      subtitle: "Schedule Your Consultation Today",
      description:
        "Take the first step towards a pain-free life. Book your appointment with Dr. Jyeshtharaj V. Patangankar through our convenient online booking system or call us directly.",
      onlineBooking: {
        title: "Online Booking",
        description: "Book your appointment instantly through our partner platform HealthPlix.",
        buttonText: "Book on HealthPlix",
      },
      practoPlatform: {
        title: "Practo Platform",
        description: "View doctor profile and book appointment through Practo.",
        buttonText: "Book on Practo",
      },
      directContact: {
        title: "Direct Contact",
        description: "Call us directly to schedule your appointment or for any urgent queries.",
        phones: ["88050 56135", "80557 19887"],
      },
      clinicInfo: {
        title: "Clinic Information",
        name: "Pain Panacea Superspeciality Pain Clinic",
        address: "OM Tower, Chetak Chowk, Ulkanagari, Chhatrapati Sambhajinagar, Maharashtra",
        altAddress: "New Usmanpura, Opp. Maahi Collection, Osmanpura, Aurangabad, Maharashtra",
        timings: "Mon-Sat: 10:00 AM - 8:00 PM",
        emergency: "Emergency consultations available",
      },
      whatsapp: {
        title: "WhatsApp Consultation",
        description: "Get quick consultation and book appointments via WhatsApp.",
        buttonText: "Chat on WhatsApp",
      },
    },
    mr: {
      title: "तुमची भेटीची वेळ बुक करा",
      subtitle: "आजच तुमचा सल्लामसलत नियोजित करा",
      description:
        "वेदनामुक्त जीवनाच्या दिशेने पहिले पाऊल टाका. आमच्या सोयीस्कर ऑनलाइन बुकिंग सिस्टमद्वारे डॉ. ज्येष्ठराज व्ही. पाटणगणकर यांच्यासोबत तुमची भेट बुक करा किंवा आम्हाला थेट कॉल करा.",
      onlineBooking: {
        title: "ऑनलाइन बुकिंग",
        description: "आमच्या भागीदार प्लॅटफॉर्म HealthPlix द्वारे तुमची भेट तत्काळ बुक करा.",
        buttonText: "HealthPlix वर बुक करा",
      },
      practoPlatform: {
        title: "Practo प्लॅटफॉर्म",
        description: "डॉक्टरांचे प्रोफाइल पहा आणि Practo द्वारे भेट बुक करा.",
        buttonText: "Practo वर बुक करा",
      },
      directContact: {
        title: "थेट संपर्क",
        description: "तुमची भेट नियोजित करण्यासाठी किंवा कोणत्याही तातडीच्या प्रश्नांसाठी आम्हाला थेट कॉल करा.",
        phones: ["88050 56135", "80557 19887"],
      },
      clinicInfo: {
        title: "क्लिनिक माहिती",
        name: "पेन पॅनेसिया सुपरस्पेशॅलिटी पेन क्लिनिक",
        address: "OM टॉवर, चेतक चौक, उल्कानगरी, छत्रपती संभाजीनगर, महाराष्ट्र",
        altAddress: "न्यू उस्मानपुरा, माही कलेक्शनच्या समोर, उस्मानपुरा, औरंगाबाद, महाराष्ट्र",
        timings: "सोम-शनि: सकाळी 10:00 - संध्याकाळी 8:00",
        emergency: "आपत्कालीन सल्लामसलत उपलब्ध",
      },
      whatsapp: {
        title: "WhatsApp सल्लामसलत",
        description: "WhatsApp द्वारे द्रुत सल्लामसलत घ्या आणि भेटी बुक करा.",
        buttonText: "WhatsApp वर चॅट करा",
      },
    },
  }

  const currentContent = content[language as keyof typeof content]

  const handleWhatsAppClick = () => {
    const phoneNumber = "918805056135"
    const message = encodeURIComponent(
      language === "en"
        ? "Hello Dr. Patangankar, I would like to book an appointment for pain management consultation."
        : "नमस्कार डॉ. पाटणगणकर, मला वेदना व्यवस्थापन सल्लामसलतसाठी भेटीची वेळ बुक करायची आहे.",
    )
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }
  }

  return (
    <Layout
      title={`${currentContent.title} - Dr. Jyeshtharaj V. Patangankar`}
      description="Book your appointment with Dr. Jyeshtharaj V. Patangankar for expert pain management consultation. Online booking available through HealthPlix and Practo."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{currentContent.title}</h1>
          <p className="text-xl text-primary-200 mb-4 slide-up">{currentContent.subtitle}</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto slide-up">{currentContent.description}</p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Booking - HealthPlix */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">{currentContent.onlineBooking.title}</h3>
              <p className="text-gray-600 mb-6">{currentContent.onlineBooking.description}</p>
              <a
                href="https://book.healthplix.com/dr-jyestharaj-v-patangankar-maharashtra-chhatrapati-sambhajinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center inline-flex items-center justify-center"
              >
                <ExternalLink className="mr-2" size={20} />
                {currentContent.onlineBooking.buttonText}
              </a>
            </div>

            {/* Practo Platform */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">{currentContent.practoPlatform.title}</h3>
              <p className="text-gray-600 mb-6">{currentContent.practoPlatform.description}</p>
              <a
                href="https://www.practo.com/aurangabad/doctor/jyeshtharaj-v-patangankar-spine-and-pain-specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center inline-flex items-center justify-center"
              >
                <ExternalLink className="mr-2" size={20} />
                {currentContent.practoPlatform.buttonText}
              </a>
            </div>

            {/* WhatsApp Consultation */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">{currentContent.whatsapp.title}</h3>
              <p className="text-gray-600 mb-6">{currentContent.whatsapp.description}</p>
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary w-full text-center inline-flex items-center justify-center bg-green-600 hover:bg-green-700"
              >
                <Phone className="mr-2" size={20} />
                {currentContent.whatsapp.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Clinic Info */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Direct Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">{currentContent.directContact.title}</h3>
              <p className="text-gray-600 mb-6">{currentContent.directContact.description}</p>
              <div className="space-y-4">
                {currentContent.directContact.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:+91${phone.replace(/\s/g, "")}`}
                    className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                  >
                    <Phone className="text-navy-600" size={20} />
                    <span className="text-lg font-medium text-navy-800">+91 {phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Clinic Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">{currentContent.clinicInfo.title}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-700 mb-2">{currentContent.clinicInfo.name}</h4>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-navy-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-700 mb-2">{currentContent.clinicInfo.address}</p>
                    <p className="text-gray-600 text-sm">{currentContent.clinicInfo.altAddress}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-navy-600" size={20} />
                  <span className="text-gray-700">{currentContent.clinicInfo.timings}</span>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 font-medium">{currentContent.clinicInfo.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
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
              <p className="text-gray-500 mt-2">OM Tower, Chetak Chowk, Ulkanagari, Chhatrapati Sambhajinagar</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
