import { Cat, Rabbit, Heart, Sparkles, Code, Coffee } from 'lucide-react';
import SocialLinks from '@/components/common/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-blue-950/30 border-t border-purple-200/30 dark:border-purple-800/30 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8">
          {/* Enhanced Logo Section */}
          <div className="flex justify-center items-center space-x-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Rabbit className="h-6 w-6 text-white group-hover:animate-bounce" />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-headline font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Alisha Ibarra Bello
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Full-Stack Developer & Creative Coder
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Cat className="h-6 w-6 text-white group-hover:animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-20"></div>
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me</span>
              <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400 animate-pulse delay-500" />
              <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-20"></div>
            </div>
            <SocialLinks className="justify-center space-x-4" />
          </div>

          {/* Enhanced Stats/Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { 
                icon: <Code className="h-5 w-5" />, 
                label: "Lines of Code", 
                value: "10K+",
                gradient: "from-blue-500 to-purple-500"
              },
              { 
                icon: <Heart className="h-5 w-5" />, 
                label: "Projects Built", 
                value: "15+",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                icon: <Coffee className="h-5 w-5" />, 
                label: "Cups of Tea", 
                value: "∞",
                gradient: "from-pink-500 to-blue-500"
              }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
                <div className="relative p-4 text-center space-y-2">
                  <div className={`inline-flex p-2 bg-gradient-to-br ${stat.gradient} rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Copyright */}
          <div className="space-y-4 pt-6 border-t border-purple-200/30 dark:border-purple-800/30">
            <div className="flex justify-center items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>&copy; {currentYear}</span>
              <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
              <span className="font-medium">All rights reserved</span>
            </div>
            
            <div className="flex justify-center items-center space-x-2 text-sm">
              <span className="text-gray-500 dark:text-gray-500">Designed with</span>
              <Heart className="h-4 w-4 text-pink-500 animate-pulse fill-current" />
              <span className="text-gray-500 dark:text-gray-500">and a touch of</span>
              <Sparkles className="h-4 w-4 text-purple-500 animate-pulse" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">aesthetic magic</span>
            </div>
            
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-400 dark:text-gray-600">
              <span>Built with Next.js</span>
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <span>Styled with Tailwind CSS</span>
              <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
