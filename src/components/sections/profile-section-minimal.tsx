import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function ProfileSection() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Java', 'Spring',
    'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Figma', 'Git'
  ];

  const stats = [
    { label: 'Years Experience', value: '1' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <section id="profile" className="section-container pt-32">
      <div className="section-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                  Full-Stack Developer
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight">
                  Hi, I'm Alisha
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                I craft beautiful and functional digital experiences with clean code 
                and thoughtful design. Passionate about creating solutions that make a difference.
              </p>
            </div>

            {/* Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>1 year experience</span>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="minimal-badge hover-scale cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <button className="minimal-button group">
                  Let's work together
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </Link>
              <a href="/documents/cv/CurriculumAlisha.pdf" download>
                <button className="minimal-button minimal-button-ghost">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background rounded-2xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/profile/imagenpro.png"
                  alt="Alisha Ibarra - Full Stack Developer"
                  fill
                  className="object-cover"
                  data-ai-hint="woman portrait"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-medium text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
