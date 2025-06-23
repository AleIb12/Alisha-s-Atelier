import Image from 'next/image';
import SectionWrapper from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Rabbit } from 'lucide-react';

export default function ProfileSection() {
  return (
    <SectionWrapper id="profile" title="About Alisha" className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <Image
            src="/images/profile/avatar.png"
            alt="Alisha Ibarra Bello"
            width={400}
            height={400}
            className="rounded-full object-cover border-4 border-primary/50 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
            data-ai-hint="woman portrait"
            priority
          />
           <div className="absolute -bottom-2 -right-2 bg-accent p-2 rounded-full shadow-md animate-bounce">
            <Rabbit className="h-6 w-6 text-accent-foreground" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">Alisha Ibarra Bello</h1>
          <p className="text-xl text-accent font-medium mb-6">Full-Stack Developer & Creative Coder</p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Hello! I'm Alisha, a passionate developer with a love for crafting beautiful and functional web experiences.
            I specialize in JavaScript, HTML, CSS, and SQL, and enjoy bringing ideas to life through code.
            My approach blends technical skill with a creative eye, aiming to build software that is not only robust but also delightful to use.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            When I'm not coding, you can find me exploring new design trends, learning new technologies, or enjoying a good cup of tea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <a href="/documents/cv/cv2.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
