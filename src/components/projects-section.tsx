import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ExternalLink, ShoppingCart, CreditCard, Globe, School, Plane } from "lucide-react"

const projects = [
  {
    title: "Vidulous",
    description: "Plateforme vidéo moderne avec architecture full-stack robuste et applications mobiles cross-platform",
    image: "/placeholder.svg",
    link: "#",
    status: "En développement",
    statusColor: "bg-orange-500",
    technologies: ["Java 17", "React.js", "Flutter", "Flutterwave", "Firebase", "Pusher"],
    icon: Plane,
    iconColor: "bg-red-500",
  },
  {
    title: "Glotelho Pay",
    description: "Solution de paiement complète avec interface web moderne et application mobile native",
    image: "/projects/pay.webp",
    link: "https://play.google.com/store/apps/details?id=cm.glotelho.glotelho_pay&hl=fr",
    status: "En évolution",
    statusColor: "bg-blue-500",
    technologies: ["Laravel", "React.js", "Flutter", "Firebase", "Pusher","Maviance", "Messomb"],
    icon: CreditCard,
    iconColor: "bg-green-500",
  },
  {
    title: "Glotelho E-commerce",
    description: "Boutique en ligne complète avec interface utilisateur dynamique et gestion avancée",
    image: "/projects/glotelho-e-commerce-logo-white-220x60.png",
    link: "https://glotelho.cm/",
    status: "En évolution",
    statusColor: "bg-blue-500",
    technologies: ["Laravel", "Vue.js"],
    icon: ShoppingCart,
    iconColor: "bg-pink-500",
  },
  {
    title: "Univ Pay",
    description: "Plateforme de paiement universitaire avec gestion géographique et localisation des campus",
    image: "/projects/univpay-yellow-removebg.png",
    link: "https://univpay.cm/",
    status: "Terminé",
    statusColor: "bg-green-500",
    technologies: ["Laravel", "Leaflet"],
    icon: School,
    iconColor: "bg-purple-500",
  },
  {
    title: "School Pay",
    description: "Solution de paiement scolaire moderne avec gestion des frais et suivi des paiements",
    image: "/placeholder.svg",
    link: "https://schoolpay.cm/",
    status: "Terminé",
    statusColor: "bg-green-500",
    technologies: ["Laravel", "Leaflet"],
    icon: School,
    iconColor: "bg-blue-500",
  },
  {
    title: "Site Vitrine Groupe Arno",
    description: "Site web corporate élégant avec gestion de contenu et présentation professionnelle",
    image: "/projects/logoARNO_ga.svg",
    link: "https://groupearno.com/fr/",
    status: "Terminé",
    statusColor: "bg-green-500",
    technologies: ["WordPress"],
    icon: Globe,
    iconColor: "bg-orange-500",
  },
  {
    title: "Groupe Cible Canada",
    description:
      "Site web professionnel pour cabinet de recrutement avec interface moderne et fonctionnalités avancées",
    image: "/projects/CIBLE-RH-EMPLOIE-02.svg",
    link: "https://www.ciblerh-emploi.com/",
    status: "Terminé",
    statusColor: "bg-green-500",
    technologies: ["WordPress"],
    icon: Globe,
    iconColor: "bg-blue-500",
  },
]

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Mes Projets 
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Découvrez mes projets récents, du plus récent au plus ancien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="bg-purple-800/30 border-purple-600/30 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${project.statusColor} text-white`}>{project.status}</Badge>
                  </div>
                  <div className={`absolute top-4 right-4 p-2 rounded-lg ${project.iconColor}`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-purple-200 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-700/50 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.status === "En développement" ? (
                    <Button
                      size="md"
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      disabled
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      En développement
                    </Button>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="md"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Voir le projet
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-purple-800/20 border-purple-600/30 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Et bien d'autres projets...</h3>
            <p className="text-purple-200 text-lg max-w-3xl mx-auto">
              J'ai développé de nombreux autres projets passionnants que je serais ravi de vous présenter lors d'un
              entretien !
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
