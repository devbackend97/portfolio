import { Card, CardContent } from "../components/ui/card"
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  MessageSquare,
} from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  { name: "Java", level: 90, color: "from-orange-500 to-orange-600", icon: Code },
  { name: "PHP", level: 90, color: "from-purple-500 to-purple-600", icon: Code },
  { name: "React", level: 40, color: "from-cyan-400 to-cyan-500", icon: Code },
  { name: "Laravel", level: 85, color: "from-red-500 to-red-600", icon: Database },
  { name: "Spring Boot", level: 80, color: "from-green-500 to-green-600", icon: Database },
  { name: "Flutter", level: 75, color: "from-blue-500 to-purple-500", icon: Smartphone },
  { name: "WordPress", level: 85, color: "from-blue-500 to-blue-600", icon: Globe },
  { name: "Git", level: 90, color: "from-orange-500 to-orange-600", icon: Code },
  { name: "Docker", level: 75, color: "from-cyan-400 to-cyan-500", icon: Database },
  { name: "Asana", level: 80, color: "from-pink-500 to-pink-600", icon: Users },
  { name: "Slack", level: 85, color: "from-purple-500 to-purple-600", icon: MessageSquare },
]

export function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-[100px] w-full">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} backdrop-blur-md border border-white/20 shadow-md mr-4`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                        <p className="text-sm text-purple-300">Niveau: {skill.level}%</p>
                      </div>
                    </div>

                    <div className="relative w-full h-2 rounded-full bg-gray-900">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
