import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface SectionWrapperProps extends PropsWithChildren {
  id: string;
  className?: string;
  title: string;
  titleClassName?: string;
}

export default function SectionWrapper({ id, title, titleClassName, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-28 relative', className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section title */}
        <div className="text-center mb-16 sm:mb-20 space-y-6">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-32"></div>
            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400 animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1 max-w-32"></div>
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
          
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
        
        {children}
      </div>
    </section>
  );
}
