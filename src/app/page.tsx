'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProfileSection from '@/components/sections/profile-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceSection from '@/components/sections/experience-section';
import ContactSection from '@/components/sections/contact-section';
import LoadingScreen from '@/components/common/loading-screen';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeña pausa para suavizar la transición
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }
  return (
    <div className={`relative flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/40 to-pink-50/40 dark:from-slate-950 dark:via-purple-950/40 dark:to-pink-950/40 text-foreground overflow-hidden transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-60 h-60 bg-gradient-to-br from-pink-400/10 to-indigo-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
        
        {/* Smaller accent elements */}
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-yellow-400/8 to-pink-400/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '5s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-green-400/8 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s', animationDuration: '10s' }}></div>
        
        {/* Tiny sparkle elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/4 right-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3.5s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-20 h-20 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4.5s', animationDuration: '6s' }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rotate-45 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-8 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '6s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-indigo-400 rotate-12 animate-bounce" style={{ animationDelay: '8s', animationDuration: '6s' }}></div>
      </div>
      
      {/* Content with enhanced spacing */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 space-y-40 py-8">
          <ProfileSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
