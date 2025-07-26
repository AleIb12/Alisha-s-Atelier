'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProfileSection from '@/components/sections/profile-section';
import ProjectsSection from '@/components/sections/projects-section';
import ExperienceSection from '@/components/sections/experience-section';
import EducationSection from '@/components/sections/education-section';
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
    <div className={`relative flex flex-col min-h-screen bg-background text-foreground transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Minimal background with subtle texture */}
      <div className="fixed inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background opacity-60"></div>
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Clean content layout */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 space-y-32 py-16 pt-28">
          <ProfileSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
