import SocialLinks from '@/components/common/social-links';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Alisha Ibarra
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <SocialLinks />
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>© {currentYear} Alisha Ibarra.</span>
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>in Madrid</span>
            </div>
            
            {/* Tech stack */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="minimal-badge text-xs">Next.js 15</span>
              <span className="minimal-badge text-xs">TypeScript</span>
              <span className="minimal-badge text-xs">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
