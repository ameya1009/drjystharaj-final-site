"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import { Award, GraduationCap, Users, Calendar } from "lucide-react"

export default function About() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "About Dr. Jyeshtharaj V. Patangankar",
      subtitle: "Leading Pain Management Specialist",
      bio: {
        title: "Professional Biography",
        content: [
          "Dr. Jyeshtharaj V. Patangankar is a highly qualified and experienced Pain Management Specialist with over 15 years of dedicated service in the field of pain medicine. He specializes in comprehensive pain management, particularly focusing on spine and neurological pain conditions.",
          "Dr. Patangankar completed his MBBS from a prestigious medical college and further pursued his MD in Anesthesiology. His passion for pain management led him to obtain Fellowship in Interventional Pain Management (FIPM) and European Diploma in Pain Medicine (EDPM), making him one of the most qualified pain specialists in the region.",
          "He is known for his patient-centric approach, combining advanced medical techniques with compassionate care. Dr. Patangankar believes in treating not just the symptoms but addressing the root cause of pain to provide long-lasting relief to his patients.",
        ],
      },
      education: {
        title: "Education & Qualifications",
        items: [
          { degree: "MBBS", institution: "Government Medical College", year: "2005" },
          { degree: "MD (Anesthesiology)", institution: "Government Medical College", year: "2009" },
          { degree: "FIPM", institution: "Fellowship in Interventional Pain Management", year: "2012" },
          { degree: "EDPM", institution: "European Diploma in Pain Medicine", year: "2014" },
        ],
      },
      experience: {
        title: "Professional Experience",
        items: [
          "Director & Consultant - Pain Panacea Superspeciality Pain Clinic",
          "Former Consultant - MGM Hospital, Aurangabad",
          "Former Associate Professor - Government Medical College",
          "Visiting Consultant - Multiple Hospitals in Maharashtra",
        ],
      },
      specializations: {
        title: "Areas of Specialization",
        items: [
          "Interventional Pain Management",
          "Spine Injections & Procedures",
          "Chronic Pain Management",
          "Cancer Pain Management",
          "Neuropathic Pain Treatment",
          "Migraine & Headache Management",
          "Joint Pain & Arthritis Treatment",
          "Post-surgical Pain Management",
        ],
      },
    },
    mr: {
      title: "डॉ. ज्येष्ठराज व्ही. पाटणगणकर बद्दल",
      subtitle: "आघाडीचे वेदना व्यवस्थापन तज्ञ",
      bio: {
        title: "व्यावसायिक चरित्र",
        content: [
          "डॉ. ज्येष्ठराज व्ही. पाटणगणकर हे वेदना औषधाच्या क्षेत्रात १५ वर्षांहून अधिक समर्पित सेवेसह अत्यंत पात्र आणि अनुभवी वेदना व्यवस्थापन तज्ञ आहेत. ते सर्वसमावेशक वेदना व्यवस्थापनामध्ये विशेषज्ञ आहेत, विशेषतः मणक्याच्या आणि न्यूरोलॉजिकल वेदना स्थितींवर लक्ष केंद्रित करतात.",
          "डॉ. पाटणकर यांनी प्रतिष्ठित वैद्यकीय महाविद्यालयातून MBBS पूर्ण केले आणि पुढे भूलतंत्रज्ञानामध्ये MD केले. वेदना व्यवस्थापनाच्या त्यांच्या आवडीमुळे त्यांनी इंटरव्हेंशनल पेन मॅनेजमेंटमध्ये फेलोशिप (FIPM) आणि युरोपियन डिप्लोमा इन पेन मेडिसिन (EDPM) मिळवले, ज्यामुळे ते या प्रदेशातील सर्वात पात्र वेदना तज्ञांपैकी एक बनले.",
          "ते त्यांच्या रुग्ण-केंद्रित दृष्टिकोनासाठी ओळखले जातात, प्रगत वैद्यकीय तंत्रे दयाळू काळजीसह एकत्र करतात. डॉ. पाटणगणकर केवळ लक्षणांवर उपचार करण्यात विश्वास ठेवत नाहीत तर त्यांच्या रुग्णांना दीर्घकाळ आराम प्रदान करण्यासाठी वेदनेच्या मूळ कारणावर उपचार करतात.",
        ],
      },
      education: {
        title: "शिक्षण आणि पात्रता",
        items: [
          { degree: "MBBS", institution: "शासकीय वैद्यकीय महाविद्यालय", year: "२००५" },
          { degree: "MD (भूलतंत्रज्ञान)", institution: "शासकीय वैद्यकीय महाविद्यालय", year: "२००९" },
          { degree: "FIPM", institution: "इंटरव्हेंशनल पेन मॅनेजमेंटमध्ये फेलोशिप", year: "२०१२" },
          { degree: "EDPM", institution: "युरोपियन डिप्लोमा इन पेन मेडिसिन", year: "२०१४" },
        ],
      },
      experience: {
        title: "व्यावसायिक अनुभव",
        items: [
          "संचालक आणि सल्लागार - पेन पॅनेसिया सुपरस्पेशॅलिटी पेन क्लिनिक",
          "माजी सल्लागार - MGM हॉस्पिटल, औरंगाबाद",
          "माजी सहयोगी प्राध्यापक - शासकीय वैद्यकीय महाविद्यालय",
          "भेट देणारे सल्लागार - महाराष्ट्रातील अनेक रुग्णालये",
        ],
      },
      specializations: {
        title: "विशेषज्ञतेची क्षेत्रे",
        items: [
          "इंटरव्हेंशनल पेन मॅनेजमेंट",
          "स्पाइन इंजेक्शन्स आणि प्रक्रिया",
          "जुनाट वेदना व्यवस्थापन",
          "कॅन्सर वेदना व्यवस्थापन",
          "न्यूरोपॅथिक वेदना उपचार",
          "मायग्रेन आणि डोकेदुखी व्यवस्थापन",
          "सांधेदुखी आणि संधिवात उपचार",
          "शस्त्रक्रियेनंतरची वेदना व्यवस्थापन",
        ],
      },
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <Layout
      title={`${currentContent.title} - Pain Management Specialist`}
      description="Learn about Dr. Jyeshtharaj V. Patangankar's qualifications, experience, and expertise in pain management and spine care."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
              <p className="text-xl text-primary-200 mb-6">{currentContent.subtitle}</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="text-primary-300" size={20} />
                  <span>{language === "en" ? "5000+ Patients" : "५०००+ रुग्ण"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-primary-300" size={20} />
                  <span>{language === "en" ? "15+ Years" : "१५+ वर्षे"}</span>
                </div>
              </div>
            </div>

            <div className="slide-up">
              <Image
                src="/doctor-profile.png"
                alt="Dr. Jyeshtharaj V. Patangankar"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">{currentContent.bio.title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              {currentContent.bio.content.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-8">{currentContent.education.title}</h2>
              <div className="space-y-6">
                {currentContent.education.items.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-navy-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-800 mb-1">{item.degree}</h3>
                        <p className="text-gray-600 mb-1">{item.institution}</p>
                        <p className="text-sm text-primary-600 font-medium">{item.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/Education.jpg"
                alt="Dr. Patangankar Education and Achievements"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Specializations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-8">{currentContent.experience.title}</h2>
              <div className="space-y-4">
                {currentContent.experience.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="text-navy-600" size={16} />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-8">{currentContent.specializations.title}</h2>
              <div className="grid grid-cols-1 gap-3">
                {currentContent.specializations.items.map((item, index) => (
                  <div key={index} className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                    <p className="text-navy-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
