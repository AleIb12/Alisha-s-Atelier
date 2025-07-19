import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/section-wrapper';
import ProjectStats from '@/components/common/project-stats';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowUpRight, Code2, Eye, Sparkles, ExternalLink, Heart, Star, Filter, Calendar, Users, GitBranch, Zap, Award, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '@/types';

interface ExtendedProject extends Project {
  category: 'web-app' | 'api' | 'mobile' | 'tool';
  status: 'completed' | 'in-progress' | 'featured';
  metrics: {
    linesOfCode?: number;
    developmentTime: string;
    teamSize: number;
    complexity: 'beginner' | 'intermediate' | 'advanced';
  };
  highlights: string[];
  gallery?: string[];
}

const projectsData: ExtendedProject[] = [
  {
    id: '1',
    title: 'Health Mobile',
    description: 'Web application focused on personal health tracking, integrating calorie data, menstrual cycle monitoring, and medication reminders.',
    imageUrl: '/images/projects/SaludMovil.jpeg',
    imageHint: 'health tracking app',
    technologies: ['React', 'Node.js', 'SQL', 'NoSQL', 'JavaScript', 'HTML/CSS', 'AI'],
    liveDemoUrl: 'https://salud-movil.vercel.app/',
    repoUrl: undefined,
    category: 'web-app',
    status: 'featured',
    metrics: {
      linesOfCode: 5200,
      developmentTime: '3 months',
      teamSize: 1,
      complexity: 'advanced'
    },
    highlights: [
      'AI-powered health recommendations',
      'Real-time data synchronization',
      'Advanced analytics dashboard',
      'Multi-database architecture'
    ]
  },
  {
    id: '2',
    title: 'MCHAPP',
    description: 'Comprehensive apartment management platform built with Node.js and Express. Enables integral management of apartments, smart devices (like Sonoff bulbs), users, and access logging with REST API communication.',
    imageUrl: '/images/portfolio/logo my city home.jpeg',
    imageHint: 'apartment management platform',
    technologies: ['Node.js', 'Express', 'REST API', 'JavaScript', 'PostgreSQL', 'IoT Integration'],
    liveDemoUrl: undefined,
    repoUrl: undefined,
    category: 'web-app',
    status: 'completed',
    metrics: {
      linesOfCode: 4500,
      developmentTime: '2 months',
      teamSize: 8,
      complexity: 'advanced'
    },
    highlights: [
      'Smart device integration (Sonoff)',
      'User authentication & authorization',
      'Real-time apartment monitoring',
      'Access control & logging',
      'REST API architecture'
    ]
  },
  {
    id: '3',
    title: 'Neonize',
    description: 'WhatsApp automation system developed in Python for automated message sending. Integrated with PostgreSQL database for contact and message management and synchronization.',
    imageUrl: '/images/portfolio/logo my city home.jpeg',
    imageHint: 'whatsapp automation tool',
    technologies: ['Python', 'PostgreSQL', 'WhatsApp API', 'Database Management', 'Automation'],
    liveDemoUrl: undefined,
    repoUrl: undefined,
    category: 'api',
    status: 'completed',
    metrics: {
      linesOfCode: 3200,
      developmentTime: '1.5 months',
      teamSize: 4,
      complexity: 'advanced'
    },
    highlights: [
      'WhatsApp API integration',
      'Automated message scheduling',
      'Contact database synchronization',
      'Message delivery tracking',
      'PostgreSQL data management'
    ]
  },
  {
    id: '4',
    title: 'Omkrom API',
    description: 'REST API backend developed in Swift with Vapor 4 framework. Uses PostgreSQL database with authentication, security, user management, email system and relational data architecture.',
    imageUrl: '/images/portfolio/logo omkrom.jpeg',
    imageHint: 'api backend system',
    technologies: ['Swift', 'Vapor 4', 'PostgreSQL', 'REST API', 'Authentication', 'Email System'],
    liveDemoUrl: undefined,
    repoUrl: undefined,
    category: 'api',
    status: 'in-progress',
    metrics: {
      linesOfCode: 3800,
      developmentTime: 'Ongoing',
      teamSize: 3,
      complexity: 'advanced'
    },
    highlights: [
      'Swift Vapor 4 framework',
      'JWT authentication & security',
      'PostgreSQL relational architecture',
      'User profile management',
      'Hierarchical data endpoints',
      'Email notification system'
    ]
  },
  {
    id: '5',
    title: 'Pokémon Project',
    description: 'Interactive Pokedex developed with React and API consumption, featuring an intuitive interface and advanced Pokémon search functionality.',
    imageUrl: '/images/projects/Pokemon.jpeg',
    imageHint: 'pokemon pokedex app',
    technologies: ['React', 'JavaScript', 'API', 'HTML/CSS'],
    liveDemoUrl: 'https://projecto-pokemon.vercel.app',
    repoUrl: 'https://github.com/AleIb12/projecto-pokemon',
    category: 'web-app',
    status: 'completed',
    metrics: {
      linesOfCode: 2800,
      developmentTime: '6 weeks',
      teamSize: 1,
      complexity: 'intermediate'
    },
    highlights: [
      'RESTful API integration',
      'Advanced search & filtering',
      'Responsive design',
      'Performance optimization'
    ]
  },
  {
    id: '6',
    title: 'Piano Simulator',
    description: 'Interactive virtual piano project that allows users to play notes and practice online with responsive design.',
    imageUrl: '/images/projects/Piano.jpeg',
    imageHint: 'piano simulator app',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Audio API'],
    liveDemoUrl: 'https://piano-six-kappa.vercel.app',
    repoUrl: 'https://github.com/AleIb12/piano',
    category: 'tool',
    status: 'completed',
    metrics: {
      linesOfCode: 1500,
      developmentTime: '4 weeks',
      teamSize: 1,
      complexity: 'intermediate'
    },
    highlights: [
      'Web Audio API integration',
      'Real-time sound synthesis',
      'Keyboard interaction',
      'Mobile-friendly interface'
    ]
  },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ExtendedProject | null>(null);

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: <Sparkles className="h-4 w-4" /> },
    { value: 'web-app', label: 'Web Apps', icon: <Code2 className="h-4 w-4" /> },
    { value: 'api', label: 'APIs', icon: <GitBranch className="h-4 w-4" /> },
    { value: 'tool', label: 'Tools', icon: <Zap className="h-4 w-4" /> },
    { value: 'featured', label: 'Featured', icon: <Award className="h-4 w-4" /> },
  ];

  const filteredProjects = projectsData.filter(project => 
    selectedFilter === 'all' || 
    project.category === selectedFilter || 
    project.status === selectedFilter
  );

  const getStatusBadge = (status: ExtendedProject['status']) => {
    const statusConfig = {
      'completed': { 
        label: 'Completed', 
        color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        icon: <CheckCircle className="h-3 w-3" />
      },
      'in-progress': { 
        label: 'In Progress', 
        color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
        icon: <Clock className="h-3 w-3" />
      },
      'featured': { 
        label: 'Featured', 
        color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        icon: <Award className="h-3 w-3" />
      }
    };
    
    const config = statusConfig[status];
    return (
      <Badge className={`${config.color} flex items-center space-x-1 text-xs font-medium px-2 py-1`}>
        {config.icon}
        <span>{config.label}</span>
      </Badge>
    );
  };

  const getComplexityColor = (complexity: ExtendedProject['metrics']['complexity']) => {
    const colors = {
      'beginner': 'text-green-600 dark:text-green-400',
      'intermediate': 'text-yellow-600 dark:text-yellow-400',
      'advanced': 'text-red-600 dark:text-red-400'
    };
    return colors[complexity];
  };
  return (
    <SectionWrapper id="projects" title="My Creations" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative space-y-12">
        {/* Section header with filters */}
        <div className="text-center space-y-8">
          <div className="space-y-6">
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

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.value)}
                className={`
                  rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2
                  ${selectedFilter === filter.value 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'border-purple-200 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-700 dark:hover:border-purple-600 dark:hover:bg-purple-900/50'
                  }
                `}
              >
                {filter.icon}
                <span className="font-medium">{filter.label}</span>
                {filter.value === 'featured' && (
                  <Badge className="bg-yellow-400 text-yellow-900 text-xs ml-1 px-1">
                    {projectsData.filter(p => p.status === 'featured').length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 rounded-3xl relative">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Project number badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Status and Favorite */}
              <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
                {getStatusBadge(project.status)}
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-4 w-4 text-yellow-500 group-hover:fill-yellow-500 transition-all duration-300" />
                </div>
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
                  
                  {/* Quick info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="space-y-1">
                        <GitBranch className="h-4 w-4 mx-auto text-blue-600 dark:text-blue-400" />
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{project.metrics.linesOfCode ? `${(project.metrics.linesOfCode / 1000).toFixed(1)}k` : 'N/A'}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Lines</p>
                      </div>
                      <div className="space-y-1">
                        <Clock className="h-4 w-4 mx-auto text-purple-600 dark:text-purple-400" />
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{project.metrics.developmentTime}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Time</p>
                      </div>
                      <div className="space-y-1">
                        <Users className="h-4 w-4 mx-auto text-pink-600 dark:text-pink-400" />
                        <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{project.metrics.teamSize}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative p-6 flex-grow space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-headline bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent font-bold group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge className={`text-xs ${getComplexityColor(project.metrics.complexity)} bg-gray-100 dark:bg-gray-800`}>
                      {project.metrics.complexity}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[4.5rem] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                
                {/* Project highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Key Features</p>
                  <div className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
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
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 text-purple-600 dark:text-purple-400 transition-all duration-300 group/btn"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-headline bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-6">
                        <div className="aspect-video rounded-xl overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Project Details</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Category:</span>
                                <Badge>{project.category}</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                                {getStatusBadge(project.status)}
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Complexity:</span>
                                <span className={`font-medium ${getComplexityColor(project.metrics.complexity)}`}>
                                  {project.metrics.complexity}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Development Time:</span>
                                <span className="font-medium">{project.metrics.developmentTime}</span>
                              </div>
                              {project.metrics.linesOfCode && (
                                <div className="flex justify-between">
                                  <span className="text-gray-600 dark:text-gray-400">Lines of Code:</span>
                                  <span className="font-medium">{project.metrics.linesOfCode.toLocaleString()}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Key Features</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-lg">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className={`
                                  bg-gradient-to-r font-medium text-white border-0 shadow-md rounded-full px-3 py-1
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
                        </div>
                        
                        <div className="flex space-x-4 pt-4">
                          {project.liveDemoUrl && (
                            <Button asChild className="flex-1">
                              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" />
                                View Live Demo
                              </Link>
                            </Button>
                          )}
                          {project.repoUrl && (
                            <Button variant="outline" asChild className="flex-1">
                              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                <Code2 className="mr-2 h-4 w-4" />
                                View Source Code
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-pink-500 group-hover:fill-pink-500 group-hover:animate-pulse transition-all duration-300" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{Math.floor(Math.random() * 50) + 10}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Popular Technologies */}
        <div className="text-center space-y-6 mt-12">
          <h3 className="text-2xl font-headline font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[...new Set(projectsData.flatMap(p => p.technologies))].map((tech, index) => {
              const techCount = projectsData.filter(p => p.technologies.includes(tech)).length;
              return (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className={`
                    bg-gradient-to-r font-medium text-white border-0 shadow-md hover:shadow-lg 
                    transition-all duration-300 transform hover:scale-105 rounded-full px-4 py-2 
                    cursor-pointer group relative
                    ${index % 4 === 0 ? 'from-blue-500 to-blue-600' : 
                      index % 4 === 1 ? 'from-purple-500 to-purple-600' :
                      index % 4 === 2 ? 'from-pink-500 to-pink-600' :
                      'from-indigo-500 to-indigo-600'}
                  `}
                >
                  <span className="flex items-center space-x-2">
                    <span>{tech}</span>
                    <span className="text-xs bg-white/20 rounded-full px-2 py-0.5">
                      {techCount}
                    </span>
                  </span>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Used in {techCount} project{techCount > 1 ? 's' : ''}
                  </div>
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Project Statistics */}
        <ProjectStats
          totalProjects={projectsData.length}
          totalLinesOfCode={projectsData.reduce((acc, p) => acc + (p.metrics.linesOfCode || 0), 0)}
          totalTechnologies={[...new Set(projectsData.flatMap(p => p.technologies))].length}
          featuredProjects={projectsData.filter(p => p.status === 'featured').length}
        />

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
