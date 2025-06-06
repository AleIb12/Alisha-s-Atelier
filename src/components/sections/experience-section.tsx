import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Briefcase, CalendarDays, Cat } from 'lucide-react';
import type { ExperienceItem } from '@/types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    title: 'Lead Web Developer',
    company: 'Innovatech Solutions',
    dateRange: 'Jan 2022 - Present',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'tech company logo',
    descriptionPoints: [
      'Led a team of 5 developers in creating responsive and user-friendly web applications using JavaScript, HTML, CSS, and React.',
      'Architected and implemented scalable front-end solutions, improving performance by 20%.',
      'Managed SQL databases, ensuring data integrity and optimizing query performance.',
      'Collaborated with UX/UI designers to translate mockups into functional, pixel-perfect interfaces.',
    ],
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'SQL', 'Agile', 'Team Leadership'],
  },
  {
    id: '2',
    title: 'Junior Software Engineer',
    company: 'Creative Spark Agency',
    dateRange: 'Jun 2020 - Dec 2021',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'creative agency logo',
    descriptionPoints: [
      'Developed and maintained client websites using HTML, CSS, and JavaScript.',
      'Assisted senior developers in building features for larger web applications.',
      'Contributed to database design and management tasks using SQL.',
      'Participated in code reviews and agile development processes.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'SQL', 'WordPress', 'Team Collaboration'],
  },
  {
    id: '3',
    title: 'Web Development Intern',
    company: 'TechStart Inc.',
    dateRange: 'Jan 2020 - May 2020',
    logoUrl: 'https://placehold.co/50x50.png',
    logoHint: 'startup logo',
    descriptionPoints: [
      'Gained hands-on experience with web development fundamentals including HTML, CSS, and basic JavaScript.',
      'Supported the development team with website updates and bug fixes.',
      'Learned about version control systems like Git and project management tools.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript Basics', 'Git'],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="My Journey" className="bg-primary/5">
      <div className="relative space-y-12">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent/30 transform md:-translate-x-1/2 rounded-full"></div>

        {experienceData.map((item, index) => (
          <div key={item.id} className={`relative flex items-start gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Dot on timeline */}
            <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 bg-accent rounded-full border-2 border-background transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-md"></div>
            
            {/* Icon side (for larger screens) */}
            <div className="hidden md:flex md:w-1/2 px-6 items-center justify-center">
              {index % 2 === 0 ? (
                <Cat className="w-16 h-16 text-accent/70 opacity-50 transform -scale-x-100" />
              ) : (
                <Briefcase className="w-16 h-16 text-primary/70 opacity-50" />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-accent/30">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    {item.logoUrl && (
                       <Image src={item.logoUrl} alt={`${item.company} logo`} width={48} height={48} className="rounded-md border border-border" data-ai-hint={item.logoHint} />
                    )}
                    <div>
                      <CardTitle className="text-2xl font-headline text-primary">{item.title}</CardTitle>
                      <p className="text-accent font-semibold text-lg">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {item.dateRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 text-sm">
                    {item.descriptionPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {item.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-primary/10 text-primary-foreground border-primary/30 rounded-md text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
