import { Cat, Rabbit } from 'lucide-react';
import SocialLinks from '@/components/common/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-primary/20 bg-background/50">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Rabbit className="h-6 w-6 text-primary/70" />
          <p>&copy; {currentYear} Alisha Ibarra Bello. All rights reserved.</p>
          <Cat className="h-6 w-6 text-accent/70" />
        </div>
        <div className="flex justify-center md:hidden mb-4">
          <SocialLinks />
        </div>
        <p className="text-sm">
          Designed with <span className="text-accent">&hearts;</span> and a touch of kawaii.
        </p>
      </div>
    </footer>
  );
}
