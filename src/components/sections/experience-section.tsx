import * as React from 'react';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Briefcase, CalendarDays, Cat, Brain, Building, Bot } from 'lucide-react';
import type { ExperienceItem } from '@/types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    title: 'Desarrolladora de Software',
    company: 'Omkrom',
    location: 'Madrid',
    dateRange: 'Mayo 2025 – Actualidad',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'tech company logo',
    descriptionPoints: [
      'Desarrollo y mantenimiento de aplicaciones de software.',
      'Colaboración en el diseño de arquitectura de software.',
      'Participación en metodologías ágiles y sprints de desarrollo.',
      'Resolución de problemas técnicos y optimización de rendimiento.',
    ],
    skills: ['Desarrollo de Software', 'Arquitectura de Software', 'Metodologías Ágiles', 'Resolución de Problemas'],
    icon: <Brain />,
  },
  {
    id: '2',
    title: 'Desarrolladora de Software',
    company: 'MyCityHome',
    location: 'Madrid',
    dateRange: 'Marzo 2025 – Mayo 2025',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'real estate tech logo',
    descriptionPoints: [
      'Implementación de nuevas funcionalidades en la plataforma existente.',
      'Corrección de errores y mejora de la experiencia de usuario.',
      'Trabajo con bases de datos para la gestión de información.',
      'Integración de APIs de terceros.',
    ],
    skills: ['Desarrollo Web', 'Frontend', 'Backend', 'Bases de Datos', 'APIs'],
    icon: <Building />,
  },
  {
    id: '3',
    title: 'Profesora de Robótica',
    company: 'Corazonistas Madrid',
    location: 'Madrid',
    dateRange: 'Noviembre 2024 – Marzo 2025',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'school logo',
    descriptionPoints: [
      'Impartición de clases de robótica a estudiantes.',
      'Desarrollo de material didáctico y proyectos prácticos.',
      'Fomento del pensamiento lógico y la resolución de problemas.',
      'Organización de actividades y competiciones de robótica.',
    ],
    skills: ['Robótica Educativa', 'Enseñanza', 'STEM', 'Didáctica', 'Lego Mindstorms'],
    icon: <Bot />,
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="My Journey" className="bg-primary/5">
      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent/30 transform md:-translate-x-1/2 rounded-full"></div>

        {experienceData.map((item, index) => (
          <div key={item.id} className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Dot on timeline */}
            <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 bg-accent rounded-full border-2 border-background transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>
            
            {/* Icon side (for larger screens) */}
            <div className="hidden md:flex md:w-1/2 px-6 items-center justify-center">
              {item.icon ? (
                React.cloneElement(item.icon, { className: `w-16 h-16 opacity-50 ${index % 2 !== 0 ? 'text-primary/70' : 'text-accent/70'} ${index % 2 === 0 ? 'transform -scale-x-100' : ''}` })
              ) : (
                 index % 2 === 0 ? (
                  <Cat className="w-16 h-16 text-accent/70 opacity-50 transform -scale-x-100" />
                ) : (
                  <Briefcase className="w-16 h-16 text-primary/70 opacity-50" />
                )
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-accent/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    {item.logoUrl && (
                       <Image src={item.logoUrl} alt={`${item.company} logo`} width={48} height={48} className="rounded-md border border-border" data-ai-hint={item.logoHint} />
                    )}
                    <div>
                      <CardTitle className="text-2xl font-headline text-primary">{item.title}</CardTitle>
                      <p className="text-accent font-semibold text-lg">{item.company} - {item.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {item.dateRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 text-sm">
                    {item.descriptionPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {item.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-primary/10 text-primary-foreground border-primary/30 rounded-md text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
