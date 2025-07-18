"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, GitBranch, Zap, Award, TrendingUp, Clock, Users } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-2xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

interface ProjectStatsProps {
  totalProjects: number;
  totalLinesOfCode: number;
  totalTechnologies: number;
  featuredProjects: number;
}

export default function ProjectStats({ 
  totalProjects, 
  totalLinesOfCode, 
  totalTechnologies, 
  featuredProjects 
}: ProjectStatsProps) {
  const stats = [
    {
      icon: <Code2 className="h-6 w-6 text-white" />,
      value: totalProjects,
      label: "Projects Built",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30",
      borderColor: "border-blue-200/50 dark:border-blue-800/50",
      textColor: "text-blue-700 dark:text-blue-300",
      subTextColor: "text-blue-600/70 dark:text-blue-400/70"
    },
    {
      icon: <GitBranch className="h-6 w-6 text-white" />,
      value: Math.round(totalLinesOfCode / 1000),
      suffix: "k+",
      label: "Lines of Code",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30",
      borderColor: "border-purple-200/50 dark:border-purple-800/50",
      textColor: "text-purple-700 dark:text-purple-300",
      subTextColor: "text-purple-600/70 dark:text-purple-400/70"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      value: totalTechnologies,
      label: "Technologies",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30",
      borderColor: "border-pink-200/50 dark:border-pink-800/50",
      textColor: "text-pink-700 dark:text-pink-300",
      subTextColor: "text-pink-600/70 dark:text-pink-400/70"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      value: featuredProjects,
      label: "Featured Projects",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30",
      borderColor: "border-green-200/50 dark:border-green-800/50",
      textColor: "text-green-700 dark:text-green-300",
      subTextColor: "text-green-600/70 dark:text-green-400/70"
    }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className={`
            text-center p-6 bg-gradient-to-br ${stat.bgColor} ${stat.borderColor} 
            hover:shadow-lg transition-all duration-300 transform hover:scale-105 
            hover:-translate-y-1 group cursor-pointer
          `}
        >
          <div className="space-y-3">
            <div className={`mx-auto w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              {stat.icon}
            </div>
            <div className={`${stat.textColor} group-hover:scale-105 transition-transform duration-300`}>
              <AnimatedCounter 
                end={stat.value} 
                suffix={stat.suffix || ""} 
                duration={1500 + index * 200}
              />
            </div>
            <p className={`text-sm ${stat.subTextColor} font-medium`}>
              {stat.label}
            </p>
            
            {/* Progress indicator */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              <div 
                className={`bg-gradient-to-r ${stat.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${Math.min((stat.value / Math.max(...stats.map(s => s.value))) * 100, 100)}%`,
                  transitionDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
