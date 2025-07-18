import * as React from 'react';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, Award, BookOpen, MapPin, Clock, Download } from 'lucide-react';
import type { EducationItem } from '@/types';

const educationData: EducationItem[] = [
  {
    id: '1',
    title: 'Ciclo Formativo de Grado Superior',
    specialization: 'Desarrollo de Aplicaciones Multiplataforma y Web',
    institution: 'Upgrade Hub',
    location: 'Madrid',
    dateRange: 'Septiembre 2022 - Junio 2025',
    status: 'Completado',
    description: 'Diploma de Finalización de Estudios en Desarrollo de Aplicaciones Multiplataforma, obtenido tras completar satisfactoriamente el ciclo formativo de 2023 a 2025.',
    skills: ['Java', 'Spring Framework', 'React.js', 'SQL', 'JavaScript', 'Figma', 'MongoDB', 'Desarrollo web', 'Comunicación', 'Compromiso', 'Gestión de redes', 'Odoo'],
    icon: <GraduationCap />,
    level: 'superior',
    certificateUrl: '/documents/Certificado upgrade.pdf'
  },
  {
    id: '2',
    title: 'Ciclo Formativo de Grado Medio',
    specialization: 'Sistemas Microinformáticos y Redes',
    institution: 'Colegio María Inmaculada Fuencarral',
    location: 'Madrid',
    dateRange: 'Septiembre 2020 - Junio 2022',
    status: 'Completado',
    description: 'Formación técnica especializada en administración de sistemas, redes y hardware informático.',
    skills: ['Gestión de redes', 'Diseño de redes', 'Seguridad de redes', 'Redes inalámbricas', 'Montaje de hardware informático'],
    icon: <BookOpen />,
    level: 'medio'
  },
  {
    id: '3',
    title: 'Educación Secundaria Obligatoria (ESO)',
    specialization: 'Ciencias',
    institution: 'Colegio La Inmaculada',
    location: 'Madrid',
    dateRange: 'Septiembre 2017 - Junio 2020',
    status: 'Completado',
    description: 'Educación secundaria con especialización en ciencias, sentando las bases para el desarrollo técnico posterior.',
    skills: ['Fundamentos científicos', 'Matemáticas', 'Física', 'Química', 'Tecnología'],
    icon: <Award />,
    level: 'secundaria'
  }
];

export default function EducationSection() {
  return (
    <SectionWrapper 
      id="education" 
      title="Trayectoria Educativa"
      subtitle="Desde fundamentos científicos hasta desarrollo de aplicaciones multiplataforma, cada etapa ha construido mi base técnica y profesional."
      badge="Formación Académica"
      showScrollIndicator={true}
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-32 left-16 w-28 h-28 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative space-y-12">
        {/* Enhanced Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-400 transform md:-translate-x-1/2 rounded-full shadow-lg"></div>

          {educationData.map((item, index) => (
            <div key={item.id} className={`relative flex items-start gap-6 md:gap-0 mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Enhanced timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-ping opacity-30"></div>
              </div>
              
              {/* Floating icon */}
              <div className={`hidden md:flex md:w-1/2 px-6 items-center ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className={`relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl border border-blue-200/50 dark:border-indigo-800/50 group-hover:scale-110 transition-all duration-500 ${
                    index === 0 ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50' :
                    index === 1 ? 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50' :
                    'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50'
                  }`}>
                    {item.icon ? (
                      React.cloneElement(item.icon, { 
                        className: `w-12 h-12 ${
                          index === 0 ? 'text-blue-600 dark:text-blue-400' :
                          index === 1 ? 'text-indigo-600 dark:text-indigo-400' :
                          'text-purple-600 dark:text-purple-400'
                        } group-hover:scale-110 transition-transform duration-300` 
                      })
                    ) : (
                      <GraduationCap className={`w-12 h-12 ${
                        index === 0 ? 'text-blue-600 dark:text-blue-400' :
                        index === 1 ? 'text-indigo-600 dark:text-indigo-400' :
                        'text-purple-600 dark:text-purple-400'
                      } group-hover:scale-110 transition-transform duration-300`} />
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Content Card */}
              <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-6">
                <Card className="group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 rounded-3xl relative">
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${
                    index === 0 ? 'bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-cyan-950/20' :
                    index === 1 ? 'bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-indigo-50/50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-indigo-950/20' :
                    'bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20'
                  }`}></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.level === 'superior' ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 dark:from-emerald-900/30 dark:to-green-900/30 dark:text-emerald-300' :
                      item.level === 'medio' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300' :
                      'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300'
                    }`}>
                      {item.level === 'superior' ? '🎓 Grado Superior' : 
                       item.level === 'medio' ? '📚 Grado Medio' : 
                       '🏫 Educación Secundaria'}
                    </div>
                  </div>

                  <CardHeader className="relative pb-4 p-6">
                    <div className="space-y-2">
                      <CardTitle className={`text-2xl font-headline font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                        index === 0 ? 'from-blue-600 to-indigo-600' :
                        index === 1 ? 'from-indigo-600 to-purple-600' :
                        'from-purple-600 to-blue-600'
                      }`}>
                        {item.title}
                      </CardTitle>
                      <p className={`text-lg font-semibold ${
                        index === 0 ? 'text-blue-700 dark:text-blue-300' :
                        index === 1 ? 'text-indigo-700 dark:text-indigo-300' :
                        'text-purple-700 dark:text-purple-300'
                      }`}>
                        {item.specialization}
                      </p>
                      <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-semibold">{item.institution}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{item.dateRange}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 pt-0 space-y-6">
                    {/* Description */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Descripción</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Skills */}
                    {item.skills && (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Aptitudes y Conocimientos</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill: string, skillIndex: number) => (
                            <Badge 
                              key={skill} 
                              variant="outline" 
                              className={`
                                font-medium text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-full px-3 py-1
                                ${skillIndex % 3 === 0 ? 
                                  (index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                   index === 1 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                                   'bg-gradient-to-r from-purple-500 to-purple-600') :
                                  skillIndex % 3 === 1 ? 
                                  (index === 0 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                                   index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                                   'bg-gradient-to-r from-blue-500 to-blue-600') :
                                  (index === 0 ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                                   index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                   'bg-gradient-to-r from-indigo-500 to-indigo-600')}
                              `}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Certificate Download Button */}
                    {item.certificateUrl && (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Download className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Certificado</h4>
                        </div>
                        <Button 
                          asChild 
                          className={`
                            w-full group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
                            ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600' :
                              index === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' :
                              'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}
                          `}
                        >
                          <a href={item.certificateUrl} download target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center justify-center space-x-2 text-white">
                              <Download className="h-4 w-4 group-hover:animate-bounce" />
                              <span className="font-medium">Descargar Certificado</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                number: "3", 
                label: "Niveles Educativos", 
                icon: <GraduationCap className="h-6 w-6" />,
                gradient: "from-blue-500 to-indigo-500"
              },
              { 
                number: "8", 
                label: "Años de Formación", 
                icon: <Calendar className="h-6 w-6" />,
                gradient: "from-indigo-500 to-purple-500"
              },
              { 
                number: "17", 
                label: "Tecnologías Aprendidas", 
                icon: <Award className="h-6 w-6" />,
                gradient: "from-purple-500 to-blue-500"
              }
            ].map((stat, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl rounded-3xl group hover:scale-105 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <CardContent className="relative p-8 text-center space-y-4">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
