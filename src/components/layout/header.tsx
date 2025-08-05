'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'About', href: '#profile' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link 
            href="#profile" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#profile');
            }}
            className="group flex items-center gap-3"
          >
            {/* Logo icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
              A
            </div>
            <span className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Alisha Ibarra
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-secondary/20 backdrop-blur-sm rounded-2xl p-2 border border-border/30 shadow-lg shadow-primary/10">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
                        : 'text-foreground/60 hover:text-foreground hover:bg-background/50'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-6 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Let's Talk ✨
            </button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-3 rounded-xl bg-secondary/20 backdrop-blur-sm border border-border/30 text-foreground hover:bg-secondary/30 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="mt-4 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl overflow-hidden">
              <nav className="p-2">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-between group ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
                          : 'text-foreground/70 hover:text-foreground hover:bg-secondary/30'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-primary-foreground' : 'bg-transparent group-hover:bg-primary/30'
                      }`}></div>
                    </button>
                  );
                })}
              </nav>
              
              {/* Mobile CTA */}
              <div className="p-2 border-t border-border/50">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                >
                  Let's Talk ✨
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
