import SocialLinks from '@/components/common/social-links';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Alisha Ibarra
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer passionate about crafting beautiful and functional 
                digital experiences with clean code and thoughtful design.
              </p>
            </div>
            
            {/* Quick stats */}
            <div className="flex gap-6 text-sm">
              <div className="space-y-1">
                <div className="font-medium text-foreground">1+</div>
                <div className="text-muted-foreground text-xs">Years</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-foreground">15+</div>
                <div className="text-muted-foreground text-xs">Projects</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-foreground">17+</div>
                <div className="text-muted-foreground text-xs">Technologies</div>
              </div>
            </div>
          </div>

          {/* Social Links & Navigation */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Connect
              </h4>
              <SocialLinks />
            </div>
            
            {/* Quick navigation */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Navigate
              </h4>
              <nav className="flex flex-col gap-2">
                {[
                  { name: 'About', href: '#profile' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Education', href: '#education' },
                  { name: 'Contact', href: '#contact' }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1 group w-fit"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Let's Work Together
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Have a project in mind? I'd love to hear about it.
              </p>
              <a 
                href="mailto:ibarrabelloalisha@gmail.com"
                className="minimal-button text-sm group inline-flex"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="text-sm">
                <div className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Email</div>
                <a 
                  href="mailto:ibarrabelloalisha@gmail.com"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  ibarrabelloalisha@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Location</div>
                <span className="text-foreground">Madrid, Spain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>© {currentYear} Alisha Ibarra.</span>
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>in Madrid</span>
            </div>
            
            {/* Tech stack */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="minimal-badge text-xs">Next.js 15</span>
                <span className="minimal-badge text-xs">TypeScript</span>
                <span className="minimal-badge text-xs">Tailwind CSS</span>
              </div>
            </div>
          </div>
          
          {/* Final touch */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground/60">
              "Crafting digital experiences, one pixel at a time."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
