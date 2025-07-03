import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Code2, Eye, Sparkles, ExternalLink, Heart, Star } from 'lucide-react';
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
    <SectionWrapper id="projects" title="My Creations" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative space-y-12">
        {/* Section header with aesthetic styling */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my latest work where creativity meets functionality. Each project represents a unique challenge solved with passion and attention to detail.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 rounded-3xl relative">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Project number badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Favorite star */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="h-4 w-4 text-yellow-500 group-hover:fill-yellow-500 transition-all duration-300" />
              </div>

              <CardHeader className="p-0 relative">
                <div className="aspect-video overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                    data-ai-hint={project.imageHint}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              
              <CardContent className="relative p-6 flex-grow space-y-4">
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-headline bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent font-bold group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[4.5rem] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={`
                        bg-gradient-to-r font-medium text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-full px-3 py-1
                        ${techIndex % 4 === 0 ? 'from-blue-500 to-blue-600' : 
                          techIndex % 4 === 1 ? 'from-purple-500 to-purple-600' :
                          techIndex % 4 === 2 ? 'from-pink-500 to-pink-600' :
                          'from-indigo-500 to-indigo-600'}
                      `}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="relative flex justify-between items-center space-x-3 p-6 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
                <div className="flex space-x-3 flex-1">
                  {project.liveDemoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="flex-1 rounded-full border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:hover:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-all duration-300 group/btn"
                    >
                      <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" /> 
                        <span className="font-medium">Demo</span>
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button 
                      size="sm" 
                      asChild 
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                    >
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Code2 className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" /> 
                        <span>Code</span>
                      </Link>
                    </Button>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-pink-500 group-hover:fill-pink-500 group-hover:animate-pulse transition-all duration-300" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{Math.floor(Math.random() * 50) + 10}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="text-center space-y-6 mt-16">
          <div className="relative p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-purple-200/50 dark:border-purple-800/50 shadow-xl max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-blue-400/5 rounded-3xl"></div>
            <div className="relative space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400 animate-pulse" />
                <h3 className="text-2xl font-headline font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Like what you see?
                </h3>
                <Sparkles className="h-6 w-6 text-pink-600 dark:text-pink-400 animate-pulse delay-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always excited to work on new projects and bring creative ideas to life. Let's collaborate!
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Link href="#contact">
                  <span className="flex items-center space-x-2">
                    <span>Start a Project</span>
                    <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
