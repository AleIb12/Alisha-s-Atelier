import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends PropsWithChildren {
  id: string;
  className?: string;
  title: string;
  titleClassName?: string;
}

export default function SectionWrapper({ id, title, titleClassName, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn(
            "text-4xl sm:text-5xl font-headline font-semibold mb-10 sm:mb-16 text-center",
            "bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent",
            titleClassName
          )}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
