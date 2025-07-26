'use client';

import { useState, useEffect } from 'react';
import { Heart, Sparkles, Rabbit, Code, Palette } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Preparando el atelier... ✨",
    "Cargando creatividad... 🎨", 
    "Organizando proyectos... 💝",
    "¡Casi listo! 🌸"
  ];

  useEffect(() => {
    // Progreso de la barra de carga
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 60); // 3 segundos total (100 / 2 = 50 pasos * 60ms = 3000ms)

    // Cambio de texto
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Main loading container */}
      <div className="relative">
        {/* Glassmorphism card */}
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-800/20 p-12 max-w-md mx-auto">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-sm"></div>
          
          {/* Content */}
          <div className="relative space-y-8 text-center">
            {/* Animated logo area */}
            <div className="relative">
              {/* Central rabbit icon */}
              <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Rabbit className="w-10 h-10 text-white animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
              </div>
              
              {/* Floating icons around */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-300">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-500">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-700">
                <Palette className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Alisha's Atelier
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Full-Stack Developer & Creative Coder
              </p>
            </div>

            {/* Loading text */}
            <div className="h-6">
              <p className="text-purple-600 dark:text-purple-400 font-medium transition-all duration-300">
                {loadingTexts[currentText]}
              </p>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="relative h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-out shadow-sm"
                     style={{ width: `${progress}%` }}>
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {progress}%
              </div>
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 ${
                    i <= Math.floor(progress / 20) ? 'animate-pulse' : 'opacity-30'
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Sparkle effects */}
        <div className="absolute -top-8 -right-8 text-yellow-400 animate-spin">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute -bottom-8 -left-8 text-pink-400 animate-spin delay-500">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
