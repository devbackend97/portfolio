import { Button } from "../components/ui/button"
import { Mail, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="text-center text-white max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src="/acceuil.png?height=192&width=192"
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Développeur Web
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-1 transform-none">
          Full Stack • Java • PHP • React • Laravel • Spring Boot
        </p>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:landrymoutongo97@gmail.com"
          className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderRadius: '9999px' }}
        >
          <Mail className="mr-2 h-5 w-5" />
          Me Contacter
        </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
            <Download className="mr-2 h-5 w-5" />
            Télécharger CV
            </a>
        </div>
      </div>
    </section>
  )
}