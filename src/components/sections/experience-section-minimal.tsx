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
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance Developer',
    position: 'Full-Stack Developer',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Developing custom web applications and APIs for various clients, focusing on modern technologies and best practices.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    achievements: [
      'Successfully delivered 15+ projects with 100% client satisfaction',
      'Reduced development time by 40% through reusable component libraries',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%'
    ]
  },
  {
    id: '2',
    company: 'Tech Solutions Inc.',
    position: 'Junior Developer',
    period: '2021 - 2022',
    location: 'Hybrid',
    description: 'Contributed to enterprise-level applications and gained experience in team collaboration and agile methodologies.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    achievements: [
      'Collaborated on 3 major enterprise applications',
      'Mentored 2 junior developers',
      'Improved application performance by 30% through code optimization'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in software development, working with diverse technologies 
            and contributing to meaningful projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-24 bg-border"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline marker */}
                <div className="flex-shrink-0 w-12 h-12 bg-background border-2 border-border rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 minimal-card animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-medium text-foreground">
                            {experience.position}
                          </h3>
                          {experience.companyUrl && (
                            <a 
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                      
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
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
                      <h4 className="text-sm font-medium text-foreground">Technologies Used</h4>
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
                      <h4 className="text-sm font-medium text-foreground">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
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

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
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
