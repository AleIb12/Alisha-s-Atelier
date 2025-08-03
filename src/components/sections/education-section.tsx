import { Calendar, MapPin, GraduationCap, Download, ExternalLink } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  status: 'completed' | 'in-progress';
  description: string;
  skills: string[];
  level: 'superior' | 'medio' | 'secundaria';
  certificateUrl?: string;
}

const education: Education[] = [
  {
    id: '1',
    degree: 'Higher Level Training Cycle',
    specialization: 'Multiplatform Application Development',
    institution: 'Upgrade Hub',
    location: 'Madrid',
    period: 'September 2022 - June 2025',
    status: 'completed',
    description: 'Comprehensive training in multiplatform development, covering both frontend and backend technologies, database management, and modern development practices.',
    skills: ['Java', 'Spring Framework', 'React.js', 'SQL', 'JavaScript', 'Figma', 'MongoDB', 'Android Development', 'Canva', 'Spring Boot', 'Markdown', 'Firebase'],
    level: 'superior',
    certificateUrl: '/documents/Certificado upgrade.pdf'
  },
  {
    id: '2',
    degree: 'Mid-Level Training Cycle',
    specialization: 'Microcomputer Systems and Networks',
    institution: 'María Inmaculada Fuencarral School',
    location: 'Madrid',
    period: 'September 2020 - June 2022',
    status: 'completed',
    description: 'Technical training focused on system administration, network infrastructure, and computer hardware management.',
    skills: ['Network Management', 'Network Design', 'Network Security', 'Wireless Networks', 'Computer Hardware'],
    level: 'medio'
  },
  {
    id: '3',
    degree: 'Compulsory Secondary Education',
    specialization: 'Sciences',
    institution: 'La Inmaculada School',
    location: 'Madrid',
    period: 'September 2017 - June 2020',
    status: 'completed',
    description: 'Foundation education with focus on science and technology, building analytical thinking and problem-solving skills.',
    skills: ['Scientific Method', 'Mathematics', 'Physics', 'Chemistry', 'Technology'],
    level: 'secundaria'
  }
];

const getLevelColor = (level: Education['level']) => {
  const colors = {
    'superior': 'bg-primary/10 text-primary border-primary/20',
    'medio': 'bg-secondary/10 text-secondary-foreground border-secondary/20',
    'secundaria': 'bg-muted text-muted-foreground border-border'
  };
  return colors[level];
};

const getLevelLabel = (level: Education['level']) => {
  const labels = {
    'superior': 'Higher Education',
    'medio': 'Technical Education',
    'secundaria': 'Secondary Education'
  };
  return labels[level];
};

export default function EducationSection() {
  return (
    <section id="education" className="section-container">
      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">My Educational Journey</h2>
          <p className="section-subtitle">
            Academic foundation and specialized training that equipped me with the knowledge
            and skills for software development and technology leadership.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline connector */}
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-24 w-px h-20 bg-border hidden md:block"></div>
              )}
              
              <div className="minimal-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex gap-6">
                  {/* Timeline marker */}
                  <div className="hidden md:flex flex-shrink-0 w-8 h-8 bg-background border-2 border-primary rounded-full items-center justify-center mt-8">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className={`minimal-badge border ${getLevelColor(item.level)}`}>
                              {getLevelLabel(item.level)}
                            </span>
                            {item.status === 'completed' && (
                              <span className="minimal-badge bg-green-50 text-green-700 border-green-200">
                                Completed
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-medium text-foreground">
                            {item.degree}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {item.specialization}
                          </p>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>

                        {item.certificateUrl && (
                          <a 
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minimal-button minimal-button-ghost text-sm"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Certificate
                          </a>
                        )}
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-foreground">Key Subjects & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="minimal-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">3</div>
            <div className="text-sm text-muted-foreground">Educational Levels</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">7+</div>
            <div className="text-sm text-muted-foreground">Years of Study</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-medium text-foreground">20+</div>
            <div className="text-sm text-muted-foreground">Technical Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
}
