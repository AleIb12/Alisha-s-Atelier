import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function ProfileSection() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Java', 'Spring',
    'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Figma', 'Git',
    'Genkit', 'Python', 'Angular', 'Vaadin', 'NoSQL', 'Bootstrap', 'Canva', 'DaVinci Resolve', 'JavaFX', 'Electron'
  ];

  const stats = [
    { label: 'Years Experience', value: '1' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '22+' },
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
              <div className="space-y-3">
                <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                  Full-Stack Developer
                </p>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] tracking-tight">
                  Hi, I'm Alisha
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                I craft beautiful and functional digital experiences with clean code 
                and thoughtful design. Passionate about creating solutions that make a difference, 
                with expertise in UI/UX design using Bootstrap, Figma, and Canva, plus video editing with DaVinci Resolve.
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
                <button className="minimal-button group animate-glow hover:scale-105 transition-all duration-300">
                  Let's work together
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              <a href="/documents/cv/AlishaCvP.pdf" download>
                <button className="minimal-button minimal-button-ghost group hover:scale-105 transition-all duration-300">
                  <Download className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient background with new colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-2xl"></div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
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
