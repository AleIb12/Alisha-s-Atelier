import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface SectionWrapperProps extends PropsWithChildren {
  id: string;
  className?: string;
  title: string;
  titleClassName?: string;
  subtitle?: string;
  badge?: string;
  showScrollIndicator?: boolean;
}

export default function SectionWrapper({ 
  id, 
  title, 
  titleClassName, 
  className, 
  subtitle,
  badge,
  showScrollIndicator = false,
  children 
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-28 relative', className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section title */}
        <div className="text-center mb-16 sm:mb-20 space-y-6">
          {/* Badge opcional */}
          {badge && (
            <div className="flex justify-center mb-4">
              <Badge 
                variant="outline" 
                className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="h-3 w-3 mr-2" />
                {badge}
              </Badge>
            </div>
          )}

          <div className="flex items-center justify-center space-x-4 mb-6">
            <Separator className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32" />
            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400 animate-pulse" />
            <Separator className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-32" />
          </div>
          
          <h2 className={cn(
            "text-5xl sm:text-6xl font-headline font-bold",
            "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent",
            "hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500",
            "drop-shadow-sm",
            titleClassName
          )}>
            {title}
          </h2>

          {/* Subtitle opcional */}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
        
        {children}

        {/* Scroll indicator opcional */}
        {showScrollIndicator && (
          <div className="flex justify-center mt-16">
            <Button
              variant="ghost"
              size="sm"
              className="group animate-bounce"
              onClick={() => {
                const nextSection = document.querySelector(`#${id}`)?.nextElementSibling;
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
