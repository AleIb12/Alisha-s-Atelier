
"use client";

import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, Calendar, ExternalLink, Rabbit, Copy, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import SocialLinks from '@/components/common/social-links';

interface ContactCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  href: string;
  color: string;
  copyText?: string;
}

export default function ContactSection() {
  const { toast } = useToast();

  const contactCards: ContactCard[] = [
    {
      title: "Email Me",
      description: "Send me an email directly",
      icon: <Mail className="h-6 w-6" />,
      action: "Open Email",
      href: "mailto:ibarrabelloalisha@gmail.com",
      color: "bg-blue-500 hover:bg-blue-600",
      copyText: "ibarrabelloalisha@gmail.com"
    },
    {
      title: "WhatsApp",
      description: "Let's chat on WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      action: "Open WhatsApp",
      href: "https://wa.me/34692616005",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Telegram",
      description: "Message me on Telegram",
      icon: <Send className="h-6 w-6" />,
      action: "Open Telegram",
      href: "https://t.me/Alisha_Ibarra",
      color: "bg-blue-400 hover:bg-blue-500"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${text} has been copied to clipboard`,
      variant: "default",
    });
  };

  return (
    <SectionWrapper id="contact" title="Let's Connect" className="pb-24 md:pb-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">💫 Ready to collaborate</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-headline bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-bold">
              Get in Touch
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
              Choose your preferred way to connect with me below.
            </p>
          </div>
          
          <div className="relative p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-purple-200/50 dark:border-purple-800/50 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 rounded-2xl"></div>
            <div className="relative flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Direct Email</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                  ibarrabelloalisha@gmail.com
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard("ibarrabelloalisha@gmail.com")}
                className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-800/50"
              >
                <Copy className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Find me on social media
            </h4>
            <SocialLinks />
          </div>

          <div className="flex items-center justify-start space-x-3 p-4 bg-gradient-to-r from-pink-100/80 to-purple-100/80 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl">
            <div className="relative">
              <Rabbit className="h-10 w-10 text-purple-600 dark:text-purple-400 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Looking forward to connecting!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Usually responds within a few hours ✨</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-headline bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
              Quick Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Choose your favorite way to reach out</p>
          </div>
          
          <div className="grid gap-5">
            {contactCards.map((card, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`relative p-4 rounded-2xl text-white ${card.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        {card.icon}
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {card.description}
                        </p>
                        {card.copyText && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 font-mono bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-lg inline-block">
                            {card.copyText}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {card.copyText && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(card.copyText!)}
                          className="h-10 w-10 rounded-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-700 dark:hover:border-purple-600 dark:hover:bg-purple-900/50 transition-all duration-300"
                        >
                          <Copy className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </Button>
                      )}
                      <Button
                        asChild
                        className={`${card.color} text-white hover:shadow-lg transition-all duration-300 rounded-full px-6 py-2 font-medium`}
                      >
                        <a href={card.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                          <span>{card.action}</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Enhanced Availability Status */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200/50 dark:border-emerald-800/50 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full transform translate-x-16 -translate-y-16"></div>
            <CardContent className="relative p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-emerald-800 dark:text-emerald-200 flex items-center space-x-2">
                    <span>Available for Projects</span>
                    <span className="text-lg">🚀</span>
                  </h4>
                  <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                    Currently open to new opportunities and collaborations!
                  </p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                    Let's build something amazing together ✨
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
