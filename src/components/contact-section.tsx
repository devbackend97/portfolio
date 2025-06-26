import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import React from "react"

function StackoverflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 37"
      fill="currentColor"
      {...props}
    >
      <path d="M26 33v-9h4v13H0V24h4v9h22z" />
      <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0zM6 18.2l13.9-6.6L18.6 5 4.7 11.6l-2.3 2.7L16 21.4l2.3-2.7L6 18.2z" />
      <path d="M10.4 29.4l14.2-4.1-1-3.2-14.2 4.1 1 3.2zM14.6 25.4l11.4-8-1.6-3-11.4 8 1.6 3z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Contactez-moi pour discuter de vos besoins et créer quelque chose
            d'extraordinaire ensemble.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-purple-800/30 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-purple-200 text-lg">landrymoutongo97@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-800/30 border-purple-600/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Téléphone</h3>
              <p className="text-purple-200 text-lg">+237 655 689 923</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:landrymoutongo97@gmail.com"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            <Mail className="mr-2 h-5 w-5" />
            Envoyer un email
          </a>
          <a
            href="tel:+237655689923"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            <Phone className="mr-2 h-5 w-5" />
            Appeler
          </a>
          <a
            href="https://github.com/devbackend97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-purple-300 text-purple-200 hover:bg-purple-800 hover:text-white px-8 py-3 rounded-full text-lg font-medium bg-transparent border"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/moutongoeric/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-purple-300 text-purple-200 hover:bg-purple-800 hover:text-white px-8 py-3 rounded-full text-lg font-medium bg-transparent border"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
          <a
            href="https://stackoverflow.com/users/12895335/landry-moutongo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-purple-300 text-purple-200 hover:bg-purple-800 hover:text-white px-8 py-3 rounded-full text-lg font-medium bg-transparent border"
          >
            <StackoverflowIcon className="mr-2 h-5 w-5" />
            Stack Overflow
          </a>
        </div>
      </div>
    </section>
  )
}
