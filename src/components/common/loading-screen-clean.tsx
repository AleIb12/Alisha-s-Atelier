import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo/Name */}
        <div className="space-y-4">
          <h1 className="text-3xl font-medium text-foreground tracking-tight">
            Alisha Ibarra
          </h1>
          <p className="text-muted-foreground">
            Full-Stack Developer
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="w-full bg-muted rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {progress}%
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
