import * as React from 'react';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Briefcase, CalendarDays, Cat, Brain, Building, Bot, Sparkles, MapPin, Clock, Award, Zap } from 'lucide-react';
import type { ExperienceItem } from '@/types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    title: 'Software Developer',
    company: 'Omkrom',
    location: 'Madrid',
    dateRange: 'May 2025 – Present',
    logoUrl: '/images/portfolio/logo omkrom.jpeg',
    logoHint: 'tech company logo',
    descriptionPoints: [
      'Develop and maintain software applications.',
      'Collaborate on software architecture design.',
      'Participate in agile methodologies and development sprints.',
      'Solve technical problems and optimize performance.',
    ],
    skills: ['Swift', 'Angular', 'TypeScript', 'CSS', 'SQL', 'Software Development', 'Software Architecture', 'Agile Methodologies'],
    icon: <Brain />,
  },
  {
    id: '2',
    title: 'Software Developer',
    company: 'MyCityHome',
    location: 'Madrid',
    dateRange: 'March 2025 – May 2025',
    logoUrl: '/images/portfolio/logo my city home.jpeg',
    logoHint: 'real estate tech logo',
    descriptionPoints: [
      'Implement new features in the existing platform.',
      'Bug fixing and user experience improvements.',
      'Work with databases for information management.',
      'Third-party API integration.',
    ],
    skills: ['React', 'TypeScript', 'Python', 'Java', 'CSS', 'PostgreSQL', 'Firebase', 'Web Development', 'Frontend', 'Backend', 'Databases', 'APIs'],
    icon: <Building />,
  },
  {
    id: '3',
    title: 'Robotics Teacher',
    company: 'Corazonistas Madrid',
    location: 'Madrid',
    dateRange: 'November 2024 – March 2025',
    logoUrl: '/images/portfolio/logo corazonistas.jpeg',
    logoHint: 'school logo',
    descriptionPoints: [
      'Teach robotics classes to students.',
      'Develop educational materials and practical projects.',
      'Foster logical thinking and problem-solving skills.',
      'Organize robotics activities and competitions.',
    ],
    skills: ['Educational Robotics', 'Teaching', 'STEM', 'Kodu', 'MakeCode Arcade', 'Scratch'],
    icon: <Bot />,
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper 
      id="experience" 
      title="My Journey" 
      className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-indigo-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative space-y-12">
        {/* Section header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full">
            <Briefcase className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Professional Timeline</span>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From teaching robotics to developing software solutions, each role has shaped my journey as a developer and creative problem solver.
            </p>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2 rounded-full shadow-lg"></div>

          {experienceData.map((item, index) => (
            <div key={item.id} className={`relative flex items-start gap-6 md:gap-0 mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Enhanced timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-ping opacity-30"></div>
              </div>
              
              {/* Floating icon */}
              <div className={`hidden md:flex md:w-1/2 px-6 items-center ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className={`relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl border border-indigo-200/50 dark:border-purple-800/50 group-hover:scale-110 transition-all duration-500 ${
                    index === 0 ? 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50' :
                    index === 1 ? 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50' :
                    'bg-gradient-to-br from-pink-50 to-indigo-50 dark:from-pink-950/50 dark:to-indigo-950/50'
                  }`}>
                    {item.icon ? (
                      React.cloneElement(item.icon, { 
                        className: `w-12 h-12 ${
                          index === 0 ? 'text-indigo-600 dark:text-indigo-400' :
                          index === 1 ? 'text-purple-600 dark:text-purple-400' :
                          'text-pink-600 dark:text-pink-400'
                        } group-hover:scale-110 transition-transform duration-300` 
                      })
                    ) : (
                      <Briefcase className={`w-12 h-12 ${
                        index === 0 ? 'text-indigo-600 dark:text-indigo-400' :
                        index === 1 ? 'text-purple-600 dark:text-purple-400' :
                        'text-pink-600 dark:text-pink-400'
                      } group-hover:scale-110 transition-transform duration-300`} />
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Content Card */}
              <div className="flex-1 md:w-1/2 pl-10 md:pl-0 md:px-6">
                <Card className="group overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 rounded-3xl relative">
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${
                    index === 0 ? 'bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-blue-950/20' :
                    index === 1 ? 'bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-purple-50/50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-purple-950/20' :
                    'bg-gradient-to-br from-pink-50/50 via-indigo-50/50 to-purple-50/50 dark:from-pink-950/20 dark:via-indigo-950/20 dark:to-purple-950/20'
                  }`}></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300' :
                      'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300'
                    }`}>
                      {index === 0 ? '🟢 Current' : '✨ Completed'}
                    </div>
                  </div>

                  <CardHeader className="relative pb-4 p-6">
                    <div className="flex items-start gap-4">
                      {item.logoUrl && (
                        <div className="relative group/logo">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl blur-md group-hover/logo:blur-lg transition-all duration-300"></div>
                          <Image 
                            src={item.logoUrl} 
                            alt={`${item.company} logo`} 
                            width={56} 
                            height={56} 
                            className="relative rounded-2xl border-2 border-white dark:border-gray-800 shadow-lg group-hover/logo:scale-110 transition-transform duration-300" 
                            data-ai-hint={item.logoHint} 
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-2">
                        <CardTitle className={`text-2xl font-headline font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                          index === 0 ? 'from-indigo-600 to-purple-600' :
                          index === 1 ? 'from-purple-600 to-pink-600' :
                          'from-pink-600 to-indigo-600'
                        }`}>
                          {item.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span className="font-semibold text-lg">{item.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="mr-2 h-4 w-4" />
                          <span className="font-medium">{item.dateRange}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 pt-0 space-y-6">
                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {item.descriptionPoints.map((point, i) => (
                          <li key={i} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              index === 0 ? 'bg-indigo-400' :
                              index === 1 ? 'bg-purple-400' :
                              'bg-pink-400'
                            }`}></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    {item.skills && (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies & Skills</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skill} 
                              variant="outline" 
                              className={`
                                font-medium text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-full px-3 py-1
                                ${skillIndex % 3 === 0 ? 
                                  (index === 0 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                                   index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                                   'bg-gradient-to-r from-pink-500 to-pink-600') :
                                  skillIndex % 3 === 1 ? 
                                  (index === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                                   index === 1 ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                                   'bg-gradient-to-r from-indigo-500 to-indigo-600') :
                                  (index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                   index === 1 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                                   'bg-gradient-to-r from-purple-500 to-purple-600')}
                              `}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                number: experienceData.length, 
                label: "Professional Roles", 
                icon: <Briefcase className="h-6 w-6" />,
                gradient: "from-indigo-500 to-purple-500"
              },
              { 
                number: "1", 
                label: "Year Experience", 
                icon: <Clock className="h-6 w-6" />,
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                number: "15+", 
                label: "Technologies Used", 
                icon: <Zap className="h-6 w-6" />,
                gradient: "from-pink-500 to-indigo-500"
              }
            ].map((stat, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl rounded-3xl group hover:scale-105 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <CardContent className="relative p-8 text-center space-y-4">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
