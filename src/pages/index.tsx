"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { MedicalExpertiseSection } from "@/components/sections/medical-expertise"
import { AdvancedProceduresSection } from "@/components/sections/advanced-procedures"
import { PatientEducationSection } from "@/components/sections/patient-education"
import { FAQSection } from "@/components/sections/faq-section"
import {
  Calendar,
  Phone,
  ExternalLink,
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle,
  Brain,
  Stethoscope,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    setIsLoaded(true)
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
    }

    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach((section) => observer.observe(section))

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(".fade-in-section")
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((el) => scrollObserver.observe(el))

    return () => {
      observer.disconnect()
      scrollObserver.disconnect()
    }
  }, [])

  const specializations = [
    {
      icon: Brain,
      title: "Interventional Pain Management",
      description: "Advanced minimally invasive procedures for chronic pain relief using cutting-edge technology",
      features: ["Epidural Injections", "Nerve Blocks", "Radiofrequency Ablation"],
      patients: "500+",
      successRate: "90%",
    },
    {
      icon: Stethoscope,
      title: "Spine & Joint Pain",
      description: "Comprehensive treatment for spinal disorders and joint pain with personalized care plans",
      features: ["Spinal Injections", "Joint Therapy", "Disc Treatments"],
      patients: "400+",
      successRate: "85%",
    },
    {
      icon: Zap,
      title: "Neuropathic Pain",
      description: "Specialized care for nerve-related pain conditions using innovative treatment methods",
      features: ["Diabetic Neuropathy", "Post-Herpetic Neuralgia", "Trigeminal Neuralgia"],
      patients: "300+",
      successRate: "80%",
    },
    {
      icon: Shield,
      title: "Migraine & Headache",
      description: "Expert treatment for headaches and facial pain disorders with proven techniques",
      features: ["Botox Therapy", "Trigger Point Injections", "Preventive Care"],
      patients: "250+",
      successRate: "88%",
    },
  ]

  const achievements = [
    "Best Student Award - Fellowship Program",
    "ICRA Pain 2022 International Conference Speaker",
    "ISSPCON 2023 Research Presenter",
    "European Diploma in Pain Medicine (EFIC-EDPM)",
    "World Headache Society Certification",
    "Multiple Research Publications",
  ]

  const workingHospitals = [
    {
      name: "Maronwala Cancer Hospital",
      location: "Ch. Sambhajinagar",
      role: "Consultant Pain Physician",
    },
    {
      name: "Kumamgiri Hospital",
      location: "Ch. Sambhajinagar",
      role: "Pain Management Specialist",
    },
    {
      name: "Lotus Hospital",
      location: "Beed",
      role: "Visiting Consultant",
    },
    {
      name: "Vidhata Rugnalaya",
      location: "Parbhani",
      role: "Pain Specialist",
    },
  ]

  const testimonials = [
    {
      name: "Patient Review",
      rating: 5,
      text: "Very good treatment with painless environment. You will feel very comfortable on getting such treatment. If you are suffering with pain, must visit clinic. Dr. Jyeshtharaj's diagnosis is perfect. I assure your visit will be a perfect solution for your pain.",
      condition: "Chronic Back Pain",
      location: "Chhatrapati Sambhajinagar",
    },
    {
      name: "Patient Review",
      rating: 5,
      text: "I would like to share experiences of my family members and relatives. Dr. Jyeshtharaj has been kind, supportive and empathetic towards patients. He listens to concerns and suggests appropriate treatment in the benefit of patients.",
      condition: "Migraine Treatment",
      location: "Aurangabad",
    },
    {
      name: "Patient Review",
      rating: 5,
      text: "One of the best clinic for pain management in Chhatrapati Sambhajinagar. Doctor Patangankar is expert and very kind in nature. Attend every patient with proper care. Got satisfactory results with RF ablation and PRP therapy for knee pain.",
      condition: "Knee Pain",
      location: "Maharashtra",
    },
    {
      name: "Patient Review",
      rating: 5,
      text: "Dear Dr. Jyeshtharaj Patangankar, I'm deeply grateful for your exceptional care and diagnosis of my mother's back problem via video call. Your accurate assessment and prescribed medication enabled her to walk and perform daily tasks independently. Your work is truly life-changing.",
      condition: "Spinal Disorder",
      location: "Sambhajinagar",
    },
  ]

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center space-y-4">
          <LoadingSpinner size="lg" />
          <p className="text-gray-600">Loading Dr. Patangankar's Clinic...</p>
        </div>
      </div>
    )
  }

  return (
    <Layout
      title="Dr. Jyeshtharaj V. Patangankar - Leading Pain Management Specialist"
      description="Expert pain management and spine care in Chhatrapati Sambhajinagar. Comprehensive treatment for chronic pain, spine disorders, and neurological conditions."
    >
      <ScrollProgress />

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 px-6 py-2 text-sm font-medium">
                  🏆 Leading Pain Management Specialist in Maharashtra
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
                  Expert Care for
                  <span className="text-gradient block">Pain-Free Living</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  With advanced European training (EFIC-EDPM) and 15+ years of expertise, Dr. Jyeshtharaj Patangankar
                  provides world-class pain management solutions using minimally invasive techniques with 90% success
                  rates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://book.healthplix.com/dr-jyestharaj-v-patangankar-maharashtra-chhatrapati-sambhajinagar"
                  target="_blank"
                >
                  <Button size="lg" className="btn-primary text-white px-8 py-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="tel:+918805056135">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 88050 56135
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">5.0 Rating (100+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 font-medium">1000+ Patients Treated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600 font-medium">European Certified (EFIC-EDPM)</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl animate-pulse-slow"></div>
              <div className="relative">
                <Image
                  src="/doctor-profile.png"
                  alt="Dr. Jyeshtharaj Patangankar - Leading Pain Management Specialist in Maharashtra"
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl hover-lift"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        <AnimatedCounter end={1000} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-600">Patients Treated</div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        <AnimatedCounter end={90} suffix="%" />
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white fade-in-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-blue-100 text-lg">Patients Treated Successfully</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-blue-100 text-lg">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter end={90} suffix="%" />
              </div>
              <div className="text-blue-100 text-lg">Treatment Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter end={4} suffix="" />
              </div>
              <div className="text-blue-100 text-lg">Hospital Affiliations</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">About Dr. Patangankar</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Your Partner in <span className="text-gradient">Pain-Free Living</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dr. Jyeshtharaj Patangankar is a renowned pain management specialist with extensive training from
              prestigious institutions in India and Europe. With European certification (EFIC-EDPM) and 15+ years of
              experience, he is dedicated to providing compassionate and effective care using the most advanced
              minimally invasive techniques available today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl card-hover bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4 medical-icon" />
                <CardTitle className="text-2xl font-heading">Advanced Qualifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>MBBS - Government Medical College, Aurangabad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>MD - Government Medical College, Miraj</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Fellowship in Pain Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>EFIC-EDPM (European Diploma)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>World Headache Society Certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl card-hover bg-gradient-to-br from-slate-50 to-white">
              <CardHeader>
                <Stethoscope className="w-16 h-16 text-blue-600 mx-auto mb-4 medical-icon" />
                <CardTitle className="text-2xl font-heading">Clinical Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Director & Consultant Pain Physician</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Pain Panacea Superspeciality Clinic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Multiple Hospital Affiliations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>International Conference Speaker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Research & Innovation Focus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl card-hover bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4 medical-icon" />
                <CardTitle className="text-2xl font-heading">Patient-Centered Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>1000+ Successful Treatments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Minimally Invasive Techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Personalized Treatment Plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Compassionate Approach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>5-Star Patient Reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Our Specializations</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Comprehensive <span className="text-gradient">Pain Management</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer cutting-edge treatments for various pain conditions using the latest minimally invasive
              techniques, ensuring optimal outcomes with minimal discomfort and faster recovery times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center card-hover border-0 bg-white shadow-xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative pb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                    <spec.icon className="w-10 h-10 text-blue-600 medical-icon" />
                  </div>
                  <CardTitle className="text-xl font-heading mb-3">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                  <div className="space-y-2">
                    {spec.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <ChevronRight className="w-4 h-4 text-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{spec.patients}</div>
                      <div className="text-xs text-gray-500">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{spec.successRate}</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <Card className="bg-white border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <h3 className="text-3xl font-bold font-heading text-center mb-4">Complete Treatment Services</h3>
              <p className="text-center text-blue-100 text-lg max-w-3xl mx-auto">
                Our comprehensive approach ensures that every aspect of your pain management journey is covered with
                expert care and attention.
              </p>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-blue-600 font-heading">Pain Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Interventional Pain Management
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Spine & Joint Pain Treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Migraine & Headache Therapy
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Neuropathic Pain Management
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-blue-600 font-heading">Advanced Procedures</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Epidural Steroid Injections
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Selective Nerve Blocks
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Radiofrequency Ablation
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Trigger Point Injections
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-blue-600 font-heading">Specialized Care</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Cancer Pain Management
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Post-surgical Pain Relief
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Sports Injury Treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      Chronic Pain Disorders
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Medical Expertise Section */}
      <section id="conditions">
        <MedicalExpertiseSection />
      </section>

      {/* Advanced Procedures Section */}
      <section id="procedures">
        <AdvancedProceduresSection />
      </section>

      {/* Patient Education Section */}
      <section id="education">
        <PatientEducationSection />
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-white fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Professional Excellence</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Education & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dr. Patangankar's extensive educational background and professional achievements reflect his commitment to
              providing the highest standard of pain management care with international recognition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-xl"></div>
              <Image
                src="/Education.jpg"
                alt="Dr. Patangankar Education & Professional Achievements"
                width={700}
                height={500}
                className="relative rounded-3xl shadow-2xl hover-lift"
              />
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-blue-600" />
                  Academic Excellence
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover-lift">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  Professional Memberships
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Indian Society For Study of Pain (ISSP)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">European Pain Federation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">Indian Society of Anesthesiologist</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-heading text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  Hospital Affiliations
                </h3>
                <div className="space-y-4">
                  {workingHospitals.map((hospital, index) => (
                    <Card key={index} className="border-0 shadow-lg card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Stethoscope className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{hospital.name}</h4>
                            <p className="text-blue-600 font-medium">{hospital.role}</p>
                            <p className="text-gray-600 text-sm">{hospital.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Patient Reviews</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              What Our <span className="text-gradient">Patients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real experiences from patients who found relief and healing through our comprehensive pain management
              care. These testimonials reflect our commitment to excellence and patient satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-xl"></div>
              <Image
                src="/feedbackposter.jpg"
                alt="Patient Testimonials and Reviews for Dr. Patangankar"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl hover-lift"
              />
            </div>

            <div className="space-y-6">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-xl card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-blue-600">{testimonial.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(2).map((testimonial, index) => (
              <Card key={index + 2} className="border-0 shadow-xl card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-blue-600">{testimonial.condition}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Schedule Your <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take the first step towards a pain-free life. Contact us today to book your appointment with Dr.
              Patangankar and begin your journey to better health and wellness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Pain Panacea Superspeciality Pain Clinic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        OM Tower, Chetak Chowk, Ulkanagari
                        <br />
                        Chhatrapati Sambhajinagar, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone Numbers</p>
                      <div className="space-y-1">
                        <Link href="tel:+918805056135" className="block text-blue-600 hover:text-blue-700 font-medium">
                          +91 88050 56135
                        </Link>
                        <Link href="tel:+918055719887" className="block text-blue-600 hover:text-blue-700 font-medium">
                          +91 80557 19887
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Clinic Hours</p>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.facebook.com/jyeshtharaj.patangankar"
                      target="_blank"
                      className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors hover-lift"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/p/DHDt5kvog-5"
                      target="_blank"
                      className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors hover-lift"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/dr-jyeshtharaj-patangankar-963a61101"
                      target="_blank"
                      className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors hover-lift"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-heading">Ready to Start Your Journey?</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Book your consultation with Dr. Patangankar today and take the first step towards pain-free living
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Link
                  href="https://book.healthplix.com/dr-jyestharaj-v-patangankar-maharashtra-chhatrapati-sambhajinagar"
                  target="_blank"
                >
                  <Button size="lg" className="w-full btn-primary text-white py-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Online Appointment
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or call us directly</p>
                  <Link href="tel:+918805056135">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-4 text-lg bg-transparent"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      +91 88050 56135
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose Dr. Patangankar?</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      European-trained Pain Specialist (EFIC-EDPM)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Advanced Minimally Invasive Procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      1000+ Successful Treatments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      5-Star Patient Reviews
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Multiple Hospital Affiliations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Personalized Treatment Plans
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800 text-sm">
                    <strong>Emergency Cases:</strong> For urgent pain management needs, please call our clinic. For
                    medical emergencies, visit the nearest emergency room.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
