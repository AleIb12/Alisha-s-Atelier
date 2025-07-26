"use client";

import React, { useState } from 'react';
import { Mail, MessageCircle, Send, User, Copy, ExternalLink, Clock, CheckCircle, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { sendEmail, createEmailParams, isValidEmail } from '@/lib/email-template';

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

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      title: "Email",
      description: "Best way to reach me for professional inquiries",
      icon: <Mail className="h-5 w-5" />,
      action: "Send Email",
      href: "mailto:ibarrabelloalisha@gmail.com",
      copyText: "ibarrabelloalisha@gmail.com",
      primary: true
    },
    {
      id: '2', 
      title: "LinkedIn",
      description: "Connect with me on professional networks",
      icon: <Linkedin className="h-5 w-5" />,
      action: "View Profile",
      href: "https://linkedin.com/in/alisha-ibarra"
    },
    {
      id: '3',
      title: "GitHub",
      description: "Check out my code and open source contributions",
      icon: <Github className="h-5 w-5" />,
      action: "View Projects",
      href: "https://github.com/AleIb12"
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailParams = createEmailParams(
        formData.name,
        formData.email,
        formData.message
      );

      await sendEmail(emailParams);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to Send",
        description: "Please try again or contact me directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a conversation about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div key={method.id} className="minimal-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="minimal-button minimal-button-ghost text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {method.action}
                      </a>
                      {method.copyText && (
                        <button
                          onClick={() => handleCopyToClipboard(method.copyText!, method.title)}
                          className="minimal-button minimal-button-ghost text-sm px-3"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="minimal-card bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium text-foreground">Available for new projects</p>
                  <p className="text-sm text-muted-foreground">
                    Typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="minimal-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-muted-foreground text-sm">
                  Have a specific project in mind? Fill out the form and I'll get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="minimal-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="minimal-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="minimal-input min-h-[120px] resize-y"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full minimal-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent directly to my email.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
