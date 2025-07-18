"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoadingSpinner, Skeleton, FloatingActionButton } from "@/components/ui/enhanced-components"
import { EnhancedNavigation } from "@/components/ui/enhanced-navigation"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Mail, 
  Filter,
  Download,
  ExternalLink,
  Star,
  Heart
} from "lucide-react"

// Datos de ejemplo para la navegación
const navigationItems = [
  { id: "home", label: "Inicio", href: "#home" },
  { id: "projects", label: "Proyectos", href: "#projects", badge: "3" },
  { id: "experience", label: "Experiencia", href: "#experience" },
  { id: "education", label: "Educación", href: "#education" },
  { id: "contact", label: "Contacto", href: "#contact" }
]

export default function ShadcnUIShowcase() {
  const [loading, setLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [progress, setProgress] = useState(75)

  const handleDownload = () => {
    setLoading(true)
    // Simular descarga
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
      {/* Navegación mejorada */}
      <EnhancedNavigation items={navigationItems} />

      <div className="container mx-auto px-4 py-24 space-y-16">
        {/* Sección de bienvenida */}
        <section id="home" className="text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300">
              <Star className="h-3 w-3 mr-1" />
              Shadcn UI Integrado
            </Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio Mejorado
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Descubre las nuevas funcionalidades con componentes de Shadcn UI integrados
            </p>
          </div>
          
          {/* Barra de progreso de habilidades */}
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex justify-between text-sm">
              <span>Progreso del Portfolio</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </section>

        <Separator className="my-16" />

        {/* Sección de proyectos con filtros */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              <Code className="h-3 w-3 mr-1" />
              Proyectos
            </Badge>
            <h2 className="text-4xl font-bold">Mis Trabajos</h2>
          </div>

          {/* Filtros con Select */}
          <div className="flex justify-center">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por tecnología" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs para diferentes categorías */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent">Recientes</TabsTrigger>
              <TabsTrigger value="featured">Destacados</TabsTrigger>
              <TabsTrigger value="archived">Archivados</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">Proyecto {i}</CardTitle>
                        <Badge variant="secondary">React</Badge>
                      </div>
                      <CardDescription>
                        Una aplicación increíble construida con las últimas tecnologías
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Code className="h-4 w-4 mr-2" />
                          Código
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Heart className="h-4 w-4" />
                        <span>24 likes</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="featured">
              <div className="text-center py-12">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-gray-500">Cargando proyectos destacados...</p>
              </div>
            </TabsContent>
            
            <TabsContent value="archived">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-16" />

        {/* Sección de experiencia con Accordion */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-green-200 text-green-700">
              <Briefcase className="h-3 w-3 mr-1" />
              Experiencia
            </Badge>
            <h2 className="text-4xl font-bold">Mi Trayectoria</h2>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {[
              {
                value: "item-1",
                title: "Desarrollador Frontend Senior",
                company: "Tech Company",
                period: "2023 - Presente"
              },
              {
                value: "item-2", 
                title: "Desarrollador Full Stack",
                company: "Startup Innovation",
                period: "2022 - 2023"
              },
              {
                value: "item-3",
                title: "Desarrollador Junior",
                company: "Digital Agency",
                period: "2021 - 2022"
              }
            ].map((job) => (
              <AccordionItem key={job.value} value={job.value}>
                <AccordionTrigger className="text-left">
                  <div className="flex-1">
                    <div className="font-semibold">{job.title}</div>
                    <div className="text-sm text-gray-500">{job.company} • {job.period}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Responsable del desarrollo y mantenimiento de aplicaciones web modernas,
                    trabajando con tecnologías como React, TypeScript y Node.js.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Separator className="my-16" />

        {/* Sección de educación */}
        <section id="education" className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-purple-200 text-purple-700">
              <GraduationCap className="h-3 w-3 mr-1" />
              Educación
            </Badge>
            <h2 className="text-4xl font-bold">Formación Académica</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Grado Superior en DAM",
                institution: "Upgrade Hub",
                year: "2022-2025",
                status: "Completado"
              },
              {
                title: "Grado Medio en SMR", 
                institution: "Colegio María Inmaculada",
                year: "2020-2022",
                status: "Completado"
              }
            ].map((education, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {education.title}
                    <Badge variant={education.status === "Completado" ? "default" : "secondary"}>
                      {education.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {education.institution} • {education.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleDownload}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <LoadingSpinner size="sm" className="mr-2" />
                    ) : (
                      <Download className="h-4 w-4 mr-2" />
                    )}
                    Descargar Certificado
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección de contacto */}
        <section id="contact" className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-pink-200 text-pink-700">
              <Mail className="h-3 w-3 mr-1" />
              Contacto
            </Badge>
            <h2 className="text-4xl font-bold">¡Trabajemos Juntos!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Estoy siempre abierta a nuevas oportunidades y colaboraciones
            </p>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Mail className="h-5 w-5 mr-2" />
            Enviar Mensaje
          </Button>
        </section>
      </div>

      {/* Botón flotante */}
      <FloatingActionButton>
        <Heart className="h-6 w-6" />
      </FloatingActionButton>
    </div>
  )
}
