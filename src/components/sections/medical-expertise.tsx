import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Bone, Zap, Shield, Activity } from "lucide-react"

export function MedicalExpertiseSection() {
  const conditions = [
    {
      icon: Brain,
      title: "Chronic Pain Conditions",
      description: "Comprehensive management of persistent pain affecting daily life",
      treatments: ["Fibromyalgia", "Complex Regional Pain Syndrome", "Chronic Fatigue Syndrome"],
    },
    {
      icon: Bone,
      title: "Spinal Disorders",
      description: "Advanced treatment for spine-related pain and dysfunction",
      treatments: ["Herniated Discs", "Spinal Stenosis", "Degenerative Disc Disease"],
    },
    {
      icon: Heart,
      title: "Cancer Pain",
      description: "Specialized pain management for cancer patients",
      treatments: ["Tumor-related Pain", "Treatment Side Effects", "Palliative Care"],
    },
    {
      icon: Zap,
      title: "Neuropathic Pain",
      description: "Expert care for nerve-related pain conditions",
      treatments: ["Diabetic Neuropathy", "Post-herpetic Neuralgia", "Trigeminal Neuralgia"],
    },
    {
      icon: Shield,
      title: "Headache Disorders",
      description: "Comprehensive headache and facial pain management",
      treatments: ["Migraines", "Cluster Headaches", "Tension Headaches"],
    },
    {
      icon: Activity,
      title: "Musculoskeletal Pain",
      description: "Treatment for joint and muscle pain conditions",
      treatments: ["Arthritis", "Sports Injuries", "Post-surgical Pain"],
    },
  ]

  return (
    <section className="py-20 bg-white fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Medical Expertise</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
            Pain <span className="text-gradient">Conditions</span> We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach addresses a wide range of pain conditions using evidence-based treatments and
            cutting-edge technology to provide effective relief and improved quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <Card key={index} className="border-0 shadow-xl card-hover group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <condition.icon className="w-8 h-8 text-blue-600 medical-icon" />
                </div>
                <CardTitle className="text-xl font-heading">{condition.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{condition.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Common Conditions:</h4>
                  <ul className="space-y-1">
                    {condition.treatments.map((treatment, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
