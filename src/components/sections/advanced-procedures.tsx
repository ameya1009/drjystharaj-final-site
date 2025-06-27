import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Shield, Activity, Brain, Heart } from "lucide-react"

export function AdvancedProceduresSection() {
  const procedures = [
    {
      icon: Zap,
      title: "Radiofrequency Ablation",
      description: "Minimally invasive procedure using heat to reduce pain signals",
      benefits: ["Long-lasting relief", "Outpatient procedure", "Quick recovery"],
    },
    {
      icon: Target,
      title: "Epidural Steroid Injections",
      description: "Targeted injection to reduce inflammation and pain",
      benefits: ["Precise targeting", "Reduced inflammation", "Improved mobility"],
    },
    {
      icon: Shield,
      title: "Nerve Blocks",
      description: "Selective nerve blocking for targeted pain relief",
      benefits: ["Immediate relief", "Diagnostic value", "Minimal side effects"],
    },
    {
      icon: Activity,
      title: "Trigger Point Injections",
      description: "Direct treatment of muscle knots and trigger points",
      benefits: ["Muscle relaxation", "Improved function", "Quick procedure"],
    },
    {
      icon: Brain,
      title: "Botox for Migraines",
      description: "FDA-approved treatment for chronic migraine prevention",
      benefits: ["Reduced frequency", "Preventive approach", "Proven efficacy"],
    },
    {
      icon: Heart,
      title: "PRP Therapy",
      description: "Platelet-rich plasma for natural healing and pain relief",
      benefits: ["Natural healing", "Tissue regeneration", "Minimal risk"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-2">Advanced Procedures</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
            Minimally Invasive <span className="text-gradient">Treatment</span> Options
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our state-of-the-art procedures offer effective pain relief with minimal downtime, using the latest
            technology and techniques for optimal patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <Card key={index} className="border-0 shadow-xl card-hover bg-white group">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <procedure.icon className="w-8 h-8 text-blue-600 medical-icon" />
                </div>
                <CardTitle className="text-xl font-heading">{procedure.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {procedure.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        {benefit}
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
