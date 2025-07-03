import Image from 'next/image';
import SectionWrapper from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Rabbit, Sparkles, Heart, Code } from 'lucide-react';

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" title="About Alisha" className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      {/* Floating decoration elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="relative group flex-shrink-0">
          {/* Profile image container with enhanced styling */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Gradient border ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full p-2">
                <Image
                  src="/images/profile/imagenpro.png"
                  alt="Alisha Ibarra Bello"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full object-cover shadow-2xl transition-all duration-500 group-hover:scale-105"
                  data-ai-hint="woman portrait"
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg animate-bounce">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-pink-500 to-blue-500 p-3 rounded-2xl shadow-lg animate-bounce delay-300">
              <Rabbit className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-8 -right-6 bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-xl shadow-lg animate-bounce delay-700">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg animate-bounce delay-1000">
              <Heart className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-left space-y-8 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Creative Developer</span>
          </div>
          
          {/* Main heading with gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Alisha Ibarra Bello
            </h1>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="h-px bg-gradient-to-r from-purple-400 to-pink-400 flex-1 max-w-16"></div>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Full-Stack Developer & Creative Coder
              </p>
              <div className="h-px bg-gradient-to-r from-pink-400 to-blue-400 flex-1 max-w-16"></div>
            </div>
          </div>
          
          {/* Description with enhanced styling */}
          <div className="space-y-6">
            <div className="relative p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-purple-200/50 dark:border-purple-800/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-blue-400/5 rounded-2xl"></div>
              <p className="relative text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I&apos;m Alisha, a passionate developer with a love for crafting beautiful and functional web experiences.
                I specialize in <span className="font-semibold text-purple-600 dark:text-purple-400">JavaScript</span>, <span className="font-semibold text-pink-600 dark:text-pink-400">HTML</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">CSS</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">SQL</span>, and enjoy bringing ideas to life through code.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My approach blends technical skill with a creative eye, aiming to build software that is not only robust but also delightful to use.
              When I&apos;m not coding, you can find me exploring new design trends, learning new technologies, or enjoying a good cup of tea. ✨
            </p>
          </div>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <Link href="#contact">
                <span className="relative z-10 flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Get in Touch</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="relative overflow-hidden border-2 border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <a href="/documents/cv/cv2.pdf" download>
                <span className="flex items-center space-x-2">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download CV</span>
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
