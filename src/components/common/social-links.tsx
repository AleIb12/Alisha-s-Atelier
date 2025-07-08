import { Github, Linkedin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AleIb12',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alisha-ibarra-bello-4526561b6',
    icon: Linkedin,
  },
  {
    name: 'Portfolio', // Example professional network
    url: '#', // Replace with actual URL
    icon: Briefcase,
  }
];

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex space-x-3 ${className}`}>
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          asChild
          className="rounded-full border-primary/50 hover:bg-accent/20 hover:border-accent transition-all duration-300"
          aria-label={link.name}
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <link.icon className="h-5 w-5 text-primary group-hover:text-accent-foreground" />
          </a>
        </Button>
      ))}
    </div>
  );
}
