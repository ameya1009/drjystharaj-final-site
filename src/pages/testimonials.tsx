"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "@/components/Layout"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [language, setLanguage] = useState("en")
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }
  }, [])

  const content = {
    en: {
      title: "Patient Testimonials",
      subtitle: "What Our Patients Say About Us",
      description:
        "Read real experiences from patients who have found relief from chronic pain through our comprehensive treatment approaches.",
      testimonials: [
        {
          name: "Rajesh Sharma",
          condition: "Chronic Back Pain",
          rating: 5,
          text: "Dr. Patangankar is an excellent doctor. His diagnosis is perfect and treatment is very effective. I had chronic back pain for 5 years, and after his treatment, I am completely pain-free now. Highly recommended!",
          location: "Aurangabad",
        },
        {
          name: "Priya Deshmukh",
          condition: "Migraine",
          rating: 5,
          text: "I was suffering from severe migraines for years. Dr. Patangankar's treatment approach was comprehensive and personalized. The Botox injections he recommended have given me tremendous relief. Thank you, Doctor!",
          location: "Chhatrapati Sambhajinagar",
        },
        {
          name: "Suresh Patil",
          condition: "Knee Joint Pain",
          rating: 5,
          text: "Very good treatment with painless environment. Dr. Jyeshtharaj's diagnosis is perfect. I assure your visit will be a perfect solution for your pain. The knee injections worked wonderfully for me.",
          location: "Osmanpura",
        },
        {
          name: "Meera Joshi",
          condition: "Diabetic Neuropathy",
          rating: 5,
          text: "Dr. Patangankar has been kind, supportive and empathetic towards patients. He listens to concerns and suggests appropriate treatment. His specialization in neuropathic pain management is exceptional.",
          location: "Aurangabad",
        },
        {
          name: "Anil Kumar",
          condition: "Post-surgical Pain",
          rating: 5,
          text: "One of the best clinics for pain management in Chhatrapati Sambhajinagar. Doctor Patangankar is expert and very kind in nature. Got satisfactory results with his treatment for post-operative pain.",
          location: "Ulkanagari",
        },
      ],
      viewMore: "View More Reviews",
      bookAppointment: "Book Your Appointment",
    },
    mr: {
      title: "रुग्णांची प्रशंसापत्रे",
      subtitle: "आमच्या रुग्णांचे आमच्याबद्दल काय म्हणणे",
      description: "आमच्या सर्वसमावेशक उपचार पद्धतींद्वारे जुनाट वेदनेपासून आराम मिळालेल्या रुग्णांचे खरे अनुभव वाचा.",
      testimonials: [
        {
          name: "राजेश शर्मा",
          condition: "जुनाट पाठदुखी",
          rating: 5,
          text: "डॉ. पाटणगणकर हे एक उत्कृष्ट डॉक्टर आहेत. त्यांचे निदान परिपूर्ण आहे आणि उपचार अतिशय प्रभावी आहेत. मला ५ वर्षांपासून जुनाट पाठदुखी होती, आणि त्यांच्या उपचारानंतर मी आता पूर्णपणे वेदनामुक्त आहे. अत्यंत शिफारसीय!",
          location: "औरंगाबाद",
        },
        {
          name: "प्रिया देशमुख",
          condition: "मायग्रेन",
          rating: 5,
          text: "मला वर्षानुवर्षे तीव्र मायग्रेनचा त्रास होत होता. डॉ. पाटणगणकर यांचा उपचार पद्धती सर्वसमावेशक आणि वैयक्तिकृत होती. त्यांनी शिफारस केलेल्या बोटॉक्स इंजेक्शनमुळे मला प्रचंड आराम मिळाला आहे. धन्यवाद, डॉक्टर!",
          location: "छत्रपती संभाजीनगर",
        },
        {
          name: "सुरेश पाटील",
          condition: "गुडघ्याच्या सांध्याची दुखी",
          rating: 5,
          text: "वेदनारहित वातावरणात अतिशय चांगले उपचार. डॉ. ज्येष्ठराज यांचे निदान परिपूर्ण आहे. मी खात्री देतो की तुमची भेट तुमच्या वेदनेसाठी एक परिपूर्ण उपाय असेल. गुडघ्याच्या इंजेक्शनने माझ्यासाठी आश्चर्यकारक काम केले.",
          location: "उस्मानपुरा",
        },
        {
          name: "मीरा जोशी",
          condition: "मधुमेही न्यूरोपॅथी",
          rating: 5,
          text: "डॉ. पाटणगणकर रुग्णांप्रती दयाळू, सहाय्यक आणि सहानुभूतीशील आहेत. ते चिंता ऐकतात आणि योग्य उपचार सुचवतात. न्यूरोपॅथिक वेदना व्यवस्थापनातील त्यांची विशेषज्ञता अपवादात्मक आहे.",
          location: "औरंगाबाद",
        },
        {
          name: "अनिल कुमार",
          condition: "शस्त्रक्रियेनंतरची वेदना",
          rating: 5,
          text: "छत्रपती संभाजीनगरमधील वेदना व्यवस्थापनासाठी सर्वोत्तम क्लिनिकपैकी एक. डॉक्टर पाटणगणकर तज्ञ आहेत आणि स्वभावाने अतिशय दयाळू आहेत. शस्त्रक्रियेनंतरच्या वेदनेसाठी त्यांच्या उपचाराने समाधानकारक परिणाम मिळाले.",
          location: "उल्कानगरी",
        },
      ],
      viewMore: "अधिक पुनरावलोकने पहा",
      bookAppointment: "तुमची भेट बुक करा",
    },
  }

  const currentContent = content[language as keyof typeof content]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentContent.testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentContent.testimonials.length) % currentContent.testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [currentContent.testimonials.length])

  return (
    <Layout
      title={`${currentContent.title} - Patient Reviews`}
      description="Read genuine patient testimonials and reviews about Dr. Jyeshtharaj V. Patangankar's pain management treatments and care quality."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{currentContent.title}</h1>
          <p className="text-xl text-primary-200 mb-4 slide-up">{currentContent.subtitle}</p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto slide-up">{currentContent.description}</p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="text-primary-300 mx-auto mb-4" size={48} />
                <div className="flex justify-center mb-4">
                  {[...Array(currentContent.testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                "{currentContent.testimonials[currentSlide].text}"
              </blockquote>

              <div className="text-center">
                <h4 className="text-xl font-bold text-navy-800 mb-1">
                  {currentContent.testimonials[currentSlide].name}
                </h4>
                <p className="text-primary-600 font-medium mb-1">
                  {currentContent.testimonials[currentSlide].condition}
                </p>
                <p className="text-gray-500">{currentContent.testimonials[currentSlide].location}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronLeft className="text-navy-600" size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronRight className="text-navy-600" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {currentContent.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-navy-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Poster */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {language === "en" ? "Patient Feedback & Reviews" : "रुग्णांचे अभिप्राय आणि पुनरावलोकने"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "en"
                ? "See what our patients are saying about their treatment experience"
                : "आमचे रुग्ण त्यांच्या उपचार अनुभवाबद्दल काय म्हणत आहेत ते पहा"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Image
              src="/feedbackposter.jpg"
              alt="Patient Feedback and Reviews"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-12 text-center">
            {language === "en" ? "All Patient Reviews" : "सर्व रुग्ण पुनरावलोकने"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">"{testimonial.text}"</blockquote>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-navy-800 mb-1">{testimonial.name}</h4>
                  <p className="text-primary-600 text-sm font-medium mb-1">{testimonial.condition}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? "Ready to Experience Pain Relief?" : "वेदना निवारणाचा अनुभव घेण्यास तयार आहात?"}
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Join thousands of satisfied patients who have found relief from chronic pain."
              : "जुनाट वेदनेपासून आराम मिळालेल्या हजारो समाधानी रुग्णांमध्ये सामील व्हा."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary">
              {currentContent.bookAppointment}
            </a>
            <a
              href="https://www.practo.com/aurangabad/doctor/jyeshtharaj-v-patangankar-spine-and-pain-specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {currentContent.viewMore}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
