"use client";

import React from 'react';
import { Mail, Copy, ExternalLink, CheckCircle, Linkedin, Github, MapPin, Clock, Globe } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  href: string;
  copyText?: string;
  primary?: boolean;
}

export default function ContactSection() {
  const { toast } = useToast();

  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      title: "Email",
      description: "Best way to reach me for professional inquiries and collaborations",
      icon: <Mail className="h-5 w-5" />,
      action: "Send Email",
      href: "mailto:ibarrabelloalisha@gmail.com",
      copyText: "ibarrabelloalisha@gmail.com",
      primary: true
    },
    {
      id: '2', 
      title: "LinkedIn",
      description: "Connect with me professionally and see my experience",
      icon: <Linkedin className="h-5 w-5" />,
      action: "View Profile",
      href: "https://www.linkedin.com/in/alisha-ibarra-bello-4526561b6"
    },
    {
      id: '3',
      title: "GitHub",
      description: "Explore my code, projects and open source contributions",
      icon: <Github className="h-5 w-5" />,
      action: "View Projects",
      href: "https://github.com/AleIb12"
    }
  ];

  const handleCopyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard.`,
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? I'm available for new projects
            and collaborations. Let's discuss how we can work together.
          </p>
        </div>

        {/* Enhanced Get in Touch Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-medium text-foreground">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology and development. Whether you have
                a project in mind or want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div key={method.id} className="minimal-card hover-lift group">
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      method.primary 
                        ? 'bg-primary text-primary-foreground group-hover:bg-primary/90' 
                        : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      {method.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-medium text-foreground">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {method.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="minimal-button group-hover:scale-105 transition-transform duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {method.action}
                      </a>
                      {method.copyText && (
                        <button
                          onClick={() => handleCopyToClipboard(method.copyText!, method.title)}
                          className="minimal-button minimal-button-ghost text-sm"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy {method.title}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-border">
              {/* Availability */}
              <div className="minimal-card group hover-lift">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-green-300 transition-colors duration-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Available Now</p>
                    <p className="text-sm text-muted-foreground">
                      Ready for new projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="minimal-card group hover-lift">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-blue-300 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Quick Response</p>
                    <p className="text-sm text-muted-foreground">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="minimal-card group hover-lift">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-purple-300 transition-colors duration-300">
                    <Globe className="h-5 w-5 text-muted-foreground group-hover:text-purple-600 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Global Remote</p>
                    <p className="text-sm text-muted-foreground">
                      Based in Madrid, Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6 pt-8">
              <div className="space-y-3">
                <h4 className="text-2xl font-medium text-foreground">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground">
                  Let's turn your ideas into reality. I'm here to help you build something amazing.
                </p>
              </div>
              <a
                href="mailto:ibarrabelloalisha@gmail.com"
                className="minimal-button text-lg px-8 py-3 animate-glow hover:scale-105 transition-all duration-300 inline-flex"
              >
                <Mail className="h-5 w-5 mr-2" />
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

