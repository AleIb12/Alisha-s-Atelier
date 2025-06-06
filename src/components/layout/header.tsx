import Link from 'next/link';
import { Cat, Rabbit } from 'lucide-react'; // Cute animal icons
import SocialLinks from '@/components/common/social-links';

export default function Header() {
  return (
    <header className="py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Rabbit className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300 transform group-hover:rotate-[-15deg]" />
          <h1 className="text-3xl font-headline font-bold text-primary group-hover:text-accent transition-colors duration-300">
            Alisha's Atelier
          </h1>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#projects" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">Projects</Link>
          <Link href="#experience" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">Experience</Link>
          <Link href="#contact" className="text-foreground hover:text-accent transition-colors duration-300 font-medium">Contact</Link>
          <SocialLinks className="hidden md:flex" />
        </nav>
         <Cat className="h-7 w-7 text-accent hidden lg:block animate-float" />
      </div>
    </header>
  );
}
