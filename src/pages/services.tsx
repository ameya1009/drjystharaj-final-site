"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import { Zap, Heart, Brain, Bone, Shield, Activity } from "lucide-react"

export default function Services() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Pain Management Solutions",
      description:
        "We offer a wide range of advanced pain management treatments and procedures to help you achieve lasting relief from chronic pain conditions.",
      services: [
        {
          icon: Zap,
          title: "Interventional Pain Management",
          description:
            "Advanced minimally invasive procedures including nerve blocks, epidural injections, and radiofrequency ablation for targeted pain relief.",
          treatments: [
            "Epidural Steroid Injections",
            "Facet Joint Injections",
            "Nerve Root Blocks",
            "Radiofrequency Ablation",
            "Spinal Cord Stimulation",
          ],
        },
        {
          icon: Bone,
          title: "Spine & Joint Injections",
          description:
            "Specialized injections for spine and joint conditions to reduce inflammation and provide long-lasting pain relief.",
          treatments: [
            "Lumbar Epidural Injections",
            "Cervical Epidural Injections",
            "Sacroiliac Joint Injections",
            "Trigger Point Injections",
            "Bursa Injections",
          ],
        },
        {
          icon: Brain,
          title: "Migraine & Headache Treatment",
          description:
            "Comprehensive treatment approaches for various types of headaches including migraines, tension headaches, and cluster headaches.",
          treatments: [
            "Botox Injections for Migraines",
            "Occipital Nerve Blocks",
            "Trigeminal Nerve Blocks",
            "Preventive Medications",
            "Lifestyle Counseling",
          ],
        },
        {
          icon: Activity,
          title: "Neuropathic Pain Management",
          description:
            "Specialized treatment for nerve-related pain conditions including diabetic neuropathy, post-herpetic neuralgia, and CRPS.",
          treatments: [
            "Sympathetic Nerve Blocks",
            "Peripheral Nerve Stimulation",
            "Medication Management",
            "Ketamine Infusions",
            "Physical Therapy Coordination",
          ],
        },
        {
          icon: Heart,
          title: "Cancer Pain Management",
          description:
            "Compassionate and comprehensive pain management for cancer patients to improve quality of life during treatment.",
          treatments: [
            "Intrathecal Pump Implantation",
            "Celiac Plexus Blocks",
            "Neurolytic Procedures",
            "Opioid Management",
            "Palliative Care Coordination",
          ],
        },
        {
          icon: Shield,
          title: "Post-Surgical Pain Relief",
          description: "Advanced pain management techniques to ensure comfortable recovery after surgical procedures.",
          treatments: [
            "Regional Anesthesia",
            "Continuous Nerve Blocks",
            "Multimodal Pain Management",
            "Early Mobilization Programs",
            "Rehabilitation Coordination",
          ],
        },
      ],
    },
    mr: {
      title: "आमच्या सेवा",
      subtitle: "सर्वसमावेशक वेदना व्यवस्थापन उपाय",
      description:
        "जुनाट वेदना स्थितींपासून चिरस्थायी आराम मिळविण्यासाठी आम्ही प्रगत वेदना व्यवस्थापन उपचार आणि प्रक्रियांची विस्तृत श्रेणी ऑफर करतो.",
      services: [
        {
          icon: Zap,
          title: "इंटरव्हेंशनल पेन मॅनेजमेंट",
          description:
            "लक्ष्यित वेदना निवारणासाठी नर्व्ह ब्लॉक्स, एपिड्यूरल इंजेक्शन्स आणि रेडिओफ्रिक्वेंसी अॅब्लेशनसह प्रगत कमीत कमी आक्रमक प्रक्रिया.",
          treatments: [
            "एपिड्यूरल स्टेरॉइड इंजेक्शन्स",
            "फेसेट जॉइंट इंजेक्शन्स",
            "नर्व्ह रूट ब्लॉक्स",
            "रेडिओफ्रिक्वेंसी अॅब्लेशन",
            "स्पाइनल कॉर्ड स्टिम्युलेशन",
          ],
        },
        {
          icon: Bone,
          title: "स्पाइन आणि जॉइंट इंजेक्शन्स",
          description:
            "जळजळ कमी करण्यासाठी आणि दीर्घकाळ टिकणारा वेदना आराम प्रदान करण्यासाठी मणक्याच्या आणि सांध्यांच्या स्थितींसाठी विशेष इंजेक्शन्स.",
          treatments: [
            "लम्बर एपिड्यूरल इंजेक्शन्स",
            "सर्व्हायकल एपिड्यूरल इंजेक्शन्स",
            "सॅक्रोइलियाक जॉइंट इंजेक्शन्स",
            "ट्रिगर पॉइंट इंजेक्शन्स",
            "बर्सा इंजेक्शन्स",
          ],
        },
        {
          icon: Brain,
          title: "मायग्रेन आणि डोकेदुखीचे उपचार",
          description: "मायग्रेन, तणाव डोकेदुखी आणि क्लस्टर डोकेदुखीसह विविध प्रकारच्या डोकेदुखीसाठी सर्वसमावेशक उपचार पद्धती.",
          treatments: [
            "मायग्रेनसाठी बोटॉक्स इंजेक्शन्स",
            "ऑक्सिपिटल नर्व्ह ब्लॉक्स",
            "ट्रायजेमिनल नर्व्ह ब्लॉक्स",
            "प्रतिबंधक औषधे",
            "जीवनशैली सल्ला",
          ],
        },
        {
          icon: Activity,
          title: "न्यूरोपॅथिक वेदना व्यवस्थापन",
          description: "मधुमेही न्यूरोपॅथी, पोस्ट-हर्पेटिक न्यूराल्जिया आणि CRPS सह मज्जातंतू-संबंधित वेदना स्थितींसाठी विशेष उपचार.",
          treatments: [
            "सिम्पॅथेटिक नर्व्ह ब्लॉक्स",
            "पेरिफेरल नर्व्ह स्टिम्युलेशन",
            "औषध व्यवस्थापन",
            "केटामाइन इन्फ्यूजन्स",
            "फिजिकल थेरपी समन्वय",
          ],
        },
        {
          icon: Heart,
          title: "कॅन्सर वेदना व्यवस्थापन",
          description: "उपचारादरम्यान जीवनाची गुणवत्ता सुधारण्यासाठी कॅन्सर रुग्णांसाठी दयाळू आणि सर्वसमावेशक वेदना व्यवस्थापन.",
          treatments: [
            "इंट्राथेकल पंप इम्प्लांटेशन",
            "सेलियाक प्लेक्सस ब्लॉक्स",
            "न्यूरोलिटिक प्रक्रिया",
            "ओपिओइड व्यवस्थापन",
            "उपशामक काळजी समन्वय",
          ],
        },
        {
          icon: Shield,
          title: "शस्त्रक्रियेनंतरची वेदना निवारण",
          description: "शस्त्रक्रियेच्या प्रक्रियेनंतर आरामदायक पुनर्प्राप्ती सुनिश्चित करण्यासाठी प्रगत वेदना व्यवस्थापन तंत्रे.",
          treatments: [
            "प्रादेशिक भूलतंत्रज्ञान",
            "सतत नर्व्ह ब्लॉक्स",
            "मल्टीमोडल पेन मॅनेजमेंट",
            "लवकर मोबिलायझेशन प्रोग्राम्स",
            "पुनर्वसन समन्वय",
          ],
        },
      ],
    },
  }

  const currentContent = content[language as keyof typeof content]

  return (
    <Layout
      title={`${currentContent.title} - Pain Management Services`}
      description="Comprehensive pain management services including interventional procedures, spine injections, migraine treatment, and specialized pain relief solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{currentContent.title}</h1>
          <p className="text-xl text-primary-200 mb-4 slide-up">{currentContent.subtitle}</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto slide-up">{currentContent.description}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-navy-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-navy-700 mb-4">
                    {language === "en" ? "Treatments Include:" : "उपचारांमध्ये समाविष्ट:"}
                  </h4>
                  <ul className="space-y-2">
                    {service.treatments.map((treatment, treatmentIndex) => (
                      <li key={treatmentIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
            {language === "en" ? "Ready to Start Your Pain-Free Journey?" : "तुमचा वेदनामुक्त प्रवास सुरू करण्यास तयार आहात?"}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us today to schedule a consultation and learn more about our comprehensive pain management services."
              : "सल्लामसलत नियोजित करण्यासाठी आणि आमच्या सर्वसमावेशक वेदना व्यवस्थापन सेवांबद्दल अधिक जाणून घेण्यासाठी आज आमच्याशी संपर्क साधा."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary">
              {language === "en" ? "Book Consultation" : "सल्लामसलत बुक करा"}
            </a>
            <a href="/contact" className="btn-secondary">
              {language === "en" ? "Contact Us" : "आमच्याशी संपर्क साधा"}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
