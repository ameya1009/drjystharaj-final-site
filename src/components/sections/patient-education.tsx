import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Shield } from "lucide-react"

export function PatientEducationSection() {
  const educationTopics = [
    {
      icon: BookOpen,
      title: "Understanding Pain",
      description: "Learn about different types of pain and how they affect your body",
      topics: ["Acute vs Chronic Pain", "Pain Pathways", "Pain Assessment"],
    },
    {
      icon: Users,
      title: "Treatment Options",
      description: "Comprehensive overview of available pain management treatments",
      topics: ["Conservative Care", "Interventional Procedures", "Medication Management"],
    },
    {
      icon: Heart,
      title: "Lifestyle Management",
      description: "Strategies for managing pain through lifestyle modifications",
      topics: ["Exercise Therapy", "Stress Management", "Sleep Hygiene"],
    },
    {
      icon: Shield,
      title: "Prevention Strategies",
      description: "Proactive approaches to prevent pain and maintain wellness",
      topics: ["Ergonomics", "Injury Prevention", "Wellness Planning"],
    },
  ]

  return (
    <section className="py-20 bg-white fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Patient Education</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
            Empowering <span className="text-gradient">Patient</span> Knowledge
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Education is a cornerstone of effective pain management. We believe informed patients make better decisions
            about their care and achieve better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationTopics.map((topic, index) => (
            <Card key={index} className="border-0 shadow-xl card-hover group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <topic.icon className="w-8 h-8 text-blue-600 medical-icon" />
                </div>
                <CardTitle className="text-lg font-heading">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {topic.topics.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {item}
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
