import SocialLinks from '@/components/common/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">
              Alisha Ibarra
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks />
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Ready to collaborate?
            </p>
            <a 
              href="mailto:ibarrabelloalisha@gmail.com"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
            >
              ibarrabelloalisha@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Alisha Ibarra. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Built with Next.js</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
