
"use client";

import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, Calendar, Coffee, ExternalLink, Rabbit, Copy, Send } from 'lucide-react';
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
    },
    {
      title: "Buy me a Coffee",
      description: "Support my work",
      icon: <Coffee className="h-6 w-6" />,
      action: "Buy Coffee",
      href: "https://coff.ee/ali.ibarra",
      color: "bg-yellow-500 hover:bg-yellow-600"
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
    <SectionWrapper id="contact" title="Let's Connect" className="pb-24 md:pb-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline text-primary mb-4">Get in Touch</h3>
          <p className="text-foreground/80 leading-relaxed">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
            Choose your preferred way to connect with me below.
          </p>
          <div className="flex items-center space-x-3 text-foreground/90">
            <Mail className="h-5 w-5 text-accent" />
            <span>ibarrabelloalisha@gmail.com</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard("ibarrabelloalisha@gmail.com")}
              className="ml-2 p-1 h-6 w-6"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <p className="text-foreground/80 leading-relaxed mt-4">
            I'm always open to discussing new opportunities and collaborations. Let's create something amazing together!
          </p>
          <div className="pt-4">
            <h4 className="text-lg font-semibold text-primary mb-3">Find me on:</h4>
            <SocialLinks />
          </div>
           <div className="flex items-center justify-start space-x-2 pt-6">
             <Rabbit className="h-8 w-8 text-primary animate-bounce" />
             <p className="text-sm text-muted-foreground">Looking forward to connecting with you!</p>
           </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-headline text-primary mb-6">Quick Contact</h3>
          <div className="grid gap-4">
            {contactCards.map((card, index) => (
              <Card key={index} className="shadow-lg rounded-xl border-primary/20 bg-card hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full text-white ${card.color} transition-colors duration-300`}>
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{card.title}</h4>
                        <p className="text-sm text-foreground/70">{card.description}</p>
                        {card.copyText && (
                          <p className="text-xs text-accent font-mono mt-1">{card.copyText}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {card.copyText && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(card.copyText!)}
                          className="p-2"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        asChild
                        className={`${card.color} text-white hover:shadow-lg transition-all duration-300`}
                      >
                        <a href={card.href} target="_blank" rel="noopener noreferrer">
                          {card.action}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Availability Status */}
          <Card className="shadow-lg rounded-xl border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 mt-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Available for Projects</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Currently open to new opportunities and collaborations!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
