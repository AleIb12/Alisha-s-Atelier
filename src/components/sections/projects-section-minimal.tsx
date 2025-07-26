"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
  category: 'web-app' | 'api' | 'tool';
  year: string;
  teamSize: number;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Health Mobile',
    description: 'Comprehensive health tracking application with AI-powered recommendations, calorie monitoring, and medication reminders.',
    imageUrl: '/images/projects/SaludMovil.jpeg',
    technologies: ['React', 'Node.js', 'AI', 'PostgreSQL', 'TypeScript'],
    liveDemoUrl: 'https://salud-movil.vercel.app/',
    category: 'web-app',
    year: '2024',
    teamSize: 1,
    featured: true
  },
  {
    id: '2',
    title: 'MCHAPP',
    description: 'Smart apartment management platform with IoT integration, user management, and real-time monitoring capabilities.',
    imageUrl: '/images/portfolio/logo my city home.jpeg',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'IoT'],
    category: 'web-app',
    year: '2024',
    teamSize: 8,
    featured: true
  },
  {
    id: '3',
    title: 'Omkrom API',
    description: 'Robust REST API backend built with Swift Vapor, featuring JWT authentication and comprehensive user management.',
    imageUrl: '/images/portfolio/logo omkrom.jpeg',
    technologies: ['Swift', 'Vapor', 'PostgreSQL', 'JWT'],
    category: 'api',
    year: '2024',
    teamSize: 3
  },
  {
    id: '4',
    title: 'Pokémon Explorer',
    description: 'Interactive Pokédex with advanced search functionality and detailed Pokémon information display.',
    imageUrl: '/images/projects/Pokemon.jpeg',
    technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
    liveDemoUrl: 'https://projecto-pokemon.vercel.app',
    repoUrl: 'https://github.com/AleIb12/projecto-pokemon',
    category: 'web-app',
    year: '2023',
    teamSize: 1
  },
  {
    id: '5',
    title: 'Piano Simulator',
    description: 'Interactive virtual piano with Web Audio API integration and responsive keyboard controls.',
    imageUrl: '/images/projects/Piano.jpeg',
    technologies: ['React', 'Web Audio API', 'JavaScript', 'CSS'],
    liveDemoUrl: 'https://piano-six-kappa.vercel.app',
    repoUrl: 'https://github.com/AleIb12/piano',
    category: 'tool',
    year: '2023',
    teamSize: 1
  },
  {
    id: '6',
    title: 'Neonize Automation',
    description: 'WhatsApp automation system with scheduled messaging and contact database synchronization.',
    imageUrl: '/images/portfolio/logo my city home.jpeg',
    technologies: ['Python', 'WhatsApp API', 'PostgreSQL', 'REST'],
    category: 'api',
    year: '2024',
    teamSize: 4
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web-app', label: 'Web Apps' },
  { value: 'api', label: 'APIs' },
  { value: 'tool', label: 'Tools' }
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-container">
      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work showcasing different technologies and approaches
            to solving real-world problems.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="minimal-grid minimal-grid-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="minimal-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="minimal-badge bg-primary text-primary-foreground">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-muted-foreground transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Team of {project.teamSize}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="minimal-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="minimal-badge text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {project.liveDemoUrl && (
                    <a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full minimal-button text-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={project.liveDemoUrl ? "" : "flex-1"}
                    >
                      <button className={`${project.liveDemoUrl ? "" : "w-full"} minimal-button minimal-button-ghost text-sm`}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <Link href="#contact">
            <button className="minimal-button minimal-button-ghost group">
              View More Projects
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
