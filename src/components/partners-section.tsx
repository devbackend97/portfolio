import { Card, CardContent } from "../components/ui/card"
import { Smartphone, Zap, Building, Database, CreditCard } from "lucide-react"

const partners = [
  {
    name: "Glotelho",
    description: "Entreprise de paiement et e-commerce",
    icon: CreditCard,
    color: "from-green-500 to-red-500",
  },
  {
    name: "ICLAN",
    description: "Entreprise de développement web et mobile",
    icon: Database,
    color: "from-blue-900 to-cyan-500",
  },
  {
    name: "Saamaya",
    description: "Entreprise de prestation de services dans les solutions de paiement",
    icon: Smartphone,
    color: "from-red-500 to-indigo-500",
  },
  {
    name: "SmartCode Group",
    description: "Entreprise de développement web et mobile",
    icon: Zap,
    color: "from-orange-900 to-red-500",
  },
  {
    name: "IT Innovative Systems",
    description: "Entreprise de développement web et mobile",
    icon: Building,
    color: "from-pink-500 to-indigo-900",
  },
]

export function PartnersSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Mes Anciennes Entreprises
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            J'ai eu le privilège de collaborer avec ces entreprises innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon
            return (
              <Card
                  key={index}
                  className="bg-purple-800/30 border-purple-600/30 backdrop-blur-sm group hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="px-6 py-4 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${partner.color} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-purple-200 text-sm">{partner.description}</p>
                    <div className={`mt-4 h-1 w-full bg-gradient-to-r ${partner.color} rounded-full`} />
                  </CardContent>
                </Card>

            )
          })}
        </div>
      </div>
    </section>
  )
}
