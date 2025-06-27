"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What conditions does Dr. Patangankar treat?",
      answer:
        "Dr. Patangankar specializes in treating chronic pain conditions including back pain, neck pain, migraines, neuropathic pain, arthritis, fibromyalgia, and cancer pain. He uses advanced interventional techniques for comprehensive pain management.",
    },
    {
      question: "What makes Dr. Patangankar's approach unique?",
      answer:
        "Dr. Patangankar combines European training (EFIC-EDPM) with 15+ years of experience, offering minimally invasive procedures with 90% success rates. His patient-centered approach focuses on personalized treatment plans and compassionate care.",
    },
    {
      question: "Are the procedures painful?",
      answer:
        "Our minimally invasive procedures are designed to minimize discomfort. Most procedures are performed with local anesthesia and sedation when needed. Patients typically experience minimal pain during and after procedures.",
    },
    {
      question: "How long do the treatments take?",
      answer:
        "Most procedures take 30-60 minutes and are performed on an outpatient basis. Recovery time varies by procedure, but most patients can return to normal activities within a few days.",
    },
    {
      question: "What is the success rate of treatments?",
      answer:
        "Dr. Patangankar achieves a 90% success rate across various pain management procedures. Success is measured by significant pain reduction and improved quality of life for patients.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We work with most major insurance providers. Our staff will help verify your coverage and explain any out-of-pocket costs before treatment. We also offer flexible payment options.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Frequently Asked Questions</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
            Common <span className="text-gradient">Questions</span> Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our pain management services, procedures, and what
            to expect during your treatment journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
