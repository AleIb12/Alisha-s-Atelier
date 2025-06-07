import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code2, Eye } from 'lucide-react';
import type { Project } from '@/types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Health Mobile',
    description: 'Web application focused on personal health tracking, integrating calorie data, menstrual cycle monitoring, and medication reminders.',
    imageUrl: '/images/projects/SaludMovil.jpeg',
    imageHint: 'health tracking app',
    technologies: ['React', 'Node.js', 'SQL', 'JavaScript', 'HTML/CSS', 'AI'],
    liveDemoUrl: 'https://salud-movil.vercel.app/',
    repoUrl: undefined, // Private repository
  },
  {
    id: '2',
    title: 'Pokémon Project',
    description: 'Interactive Pokedex developed with React and API consumption, featuring an intuitive interface and advanced Pokémon search functionality.',
    imageUrl: '/images/projects/Pokemon.jpeg',
    imageHint: 'pokemon pokedex app',
    technologies: ['React', 'JavaScript', 'API', 'HTML/CSS'],
    liveDemoUrl: 'https://projecto-pokemon.vercel.app',
    repoUrl: 'https://github.com/AleIb12/projecto-pokemon',
  },
  {
    id: '3',
    title: 'Piano Simulator',
    description: 'Interactive virtual piano project that allows users to play notes and practice online with responsive design.',
    imageUrl: '/images/projects/Piano.jpeg',
    imageHint: 'piano simulator app',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web Audio API'],
    liveDemoUrl: 'https://piano-six-kappa.vercel.app',
    repoUrl: 'https://github.com/AleIb12/piano',
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Creations">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl border-primary/20 hover:border-accent/50 transform hover:-translate-y-1 flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-2xl font-headline text-primary mb-3">{project.title}</CardTitle>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed min-h-[6rem]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 rounded-md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 p-6 bg-muted/30 mt-auto">
              {project.liveDemoUrl && (
                <Button variant="outline" size="sm" asChild className="rounded-lg border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="default" size="sm" asChild className="rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Code2 className="mr-2 h-4 w-4" /> View Code
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
