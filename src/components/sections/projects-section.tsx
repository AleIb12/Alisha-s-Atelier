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
    title: 'Kawaii Task Manager',
    description: 'A delightful and cute task management application to organize your daily to-dos with a sprinkle of joy. Built with React and a custom CSS theme.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cute app interface',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveDemoUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'Pastel Portfolio CMS',
    description: 'A content management system for creative portfolios, focusing on ease of use and aesthetic presentation. SQL backend with a Node.js API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio manager',
    technologies: ['SQL', 'Node.js', 'JavaScript', 'HTML/CSS'],
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'Interactive Storybook App',
    description: 'An engaging web application for children featuring interactive stories and mini-games, designed with vibrant visuals and animations.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'storybook app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveDemoUrl: '#',
  },
   {
    id: '4',
    title: 'E-commerce Boutique',
    description: 'A charming online store for handmade crafts, featuring secure payments and an intuitive user interface. Full-stack application with custom styling.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online boutique',
    technologies: ['JavaScript', 'React', 'Node.js', 'SQL'],
    liveDemoUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Creations">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl border-primary/20 hover:border-accent/50 transform hover:-translate-y-1">
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
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-headline text-primary mb-3">{project.title}</CardTitle>
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed h-20 overflow-hidden">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 rounded-md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 p-6 bg-muted/30">
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
