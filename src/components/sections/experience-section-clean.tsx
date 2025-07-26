import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  companyUrl?: string;
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Omkrom',
    position: 'Software Developer',
    period: 'May 2025 – Present',
    location: 'Madrid',
    description: 'Developing and maintaining software applications with focus on Swift backend development and Angular frontend integration.',
    technologies: ['Swift', 'Angular', 'TypeScript', 'CSS', 'SQL'],
    achievements: [
      'Architected scalable software solutions',
      'Implemented agile development practices',
      'Optimized application performance significantly'
    ],
    current: true
  },
  {
    id: '2',
    company: 'MyCityHome',
    position: 'Software Developer',
    period: 'March 2025 – May 2025',
    location: 'Madrid',
    description: 'Full-stack development focusing on platform feature implementation and user experience improvements.',
    technologies: ['React', 'TypeScript', 'Python', 'Java', 'PostgreSQL', 'Firebase'],
    achievements: [
      'Implemented new platform features',
      'Improved user experience through bug fixes',
      'Integrated third-party APIs successfully'
    ]
  },
  {
    id: '3',
    company: 'Corazonistas Madrid',
    position: 'Robotics Teacher',
    period: 'November 2024 – March 2025',
    location: 'Madrid',
    description: 'Teaching robotics and programming to students, fostering creativity and technical skills development.',
    technologies: ['Educational Technology', 'Robotics', 'Programming Fundamentals'],
    achievements: [
      'Developed engaging curriculum for students',
      'Introduced students to programming concepts',
      'Built creative problem-solving skills'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            Professional experiences that have shaped my development as a software engineer,
            from technical roles to educational leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-20 w-px h-16 bg-border hidden md:block"></div>
              )}
              
              <div className="minimal-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex gap-6">
                  {/* Timeline marker */}
                  <div className="hidden md:flex flex-shrink-0 w-8 h-8 bg-background border-2 border-primary rounded-full items-center justify-center mt-6">
                    <div className={`w-3 h-3 rounded-full ${experience.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground'}`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-medium text-foreground">
                            {experience.position}
                          </h3>
                          {experience.current && (
                            <span className="minimal-badge bg-primary/10 text-primary border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-primary font-medium">{experience.company}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="minimal-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Key Contributions</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">1</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">12+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
