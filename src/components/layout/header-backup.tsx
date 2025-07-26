import Link from 'next/link';
import { Cat, Rabbit, Sparkles, Heart } from 'lucide-react';
import SocialLinks from '@/components/common/social-links';

export default function Header() {
  return (
    <header className="py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50 border-b border-purple-200/30 dark:border-purple-800/30 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Enhanced Logo */}
        <Link href="/" className="flex items-center space-x-3 group relative">
          <div className="relative">
            {/* Animated background for rabbit icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            <div className="relative p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Rabbit className="h-6 w-6 text-white group-hover:animate-bounce" />
            </div>
            {/* Floating sparkles */}
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-headline font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Alisha's Atelier
            </h1>
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-px bg-gradient-to-r from-purple-400 to-pink-400 flex-1 w-16"></div>
              <Heart className="h-3 w-3 text-pink-400 animate-pulse" />
              <div className="h-px bg-gradient-to-r from-pink-400 to-blue-400 flex-1 w-16"></div>
            </div>
          </div>
        </Link>

        {/* Enhanced Navigation */}
        <nav className="flex items-center space-x-8">
          {[
            { href: "#projects", label: "Projects", color: "from-blue-500 to-blue-600" },
            { href: "#experience", label: "Experience", color: "from-purple-500 to-purple-600" },
            { href: "#contact", label: "Contact", color: "from-pink-500 to-pink-600" }
          ].map((link, index) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="relative group text-gray-700 dark:text-gray-300 hover:text-transparent font-medium transition-all duration-300 text-sm md:text-base"
            >
              <span className={`absolute inset-0 bg-gradient-to-r ${link.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold`}>
                {link.label}
              </span>
              <span className="group-hover:opacity-0 transition-opacity duration-300">
                {link.label}
              </span>
              {/* Underline animation */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${link.color} w-0 group-hover:w-full transition-all duration-300 rounded-full`}></div>
            </Link>
          ))}
          
          {/* Social Links with enhanced styling */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="h-6 w-px bg-gradient-to-b from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700"></div>
            <SocialLinks className="space-x-2" />
          </div>
        </nav>

        {/* Floating Cat Icon */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse"></div>
          <Cat className="relative h-7 w-7 text-purple-600 dark:text-purple-400 animate-bounce" style={{
            animationDelay: '1s',
            animationDuration: '2s'
          }} />
        </div>
      </div>
    </header>
  );
}
