
"use client";

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import SectionWrapper from '@/components/common/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Send, Rabbit, Loader2 } from 'lucide-react';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import SocialLinks from '@/components/common/social-links';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const initialState: ContactFormState = { message: "", success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Success!" : "Oops!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success && formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state, toast]);

  return (
    <SectionWrapper id="contact" title="Let's Connect" className="pb-24 md:pb-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <h3 className="text-2xl font-headline text-primary mb-4">Get in Touch</h3>
          <p className="text-foreground/80 leading-relaxed">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
            You can send me a message using the form, or connect with me on social media.
          </p>
          <div className="flex items-center space-x-3 text-foreground/90">
            <Mail className="h-5 w-5 text-accent" />
            <span>ibarrabelloalisha@gmail.com</span>
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
             <p className="text-sm text-muted-foreground">Looking forward to your message!</p>
           </div>
        </div>

        <Card className="shadow-xl rounded-xl border-primary/30 p-2 bg-card">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary/80">Full Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required className="mt-1 bg-background/70 border-primary/30 focus:border-accent focus:ring-accent rounded-md" />
                {state?.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-primary/80">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1 bg-background/70 border-primary/30 focus:border-accent focus:ring-accent rounded-md" />
                {state?.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-primary/80">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required className="mt-1 bg-background/70 border-primary/30 focus:border-accent focus:ring-accent rounded-md" />
                {state?.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
