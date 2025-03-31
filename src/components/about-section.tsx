
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './animated-element';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedElement variant="fade-up" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
            About Me
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Get to know me and my professional journey
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimatedElement variant="fade-right" className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              Front-end Developer with a passion for creating engaging digital experiences
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              With over 5 years of experience in web development, I specialize in building responsive, accessible, and performant web applications. 
              I'm passionate about creating seamless user experiences through clean code and modern technologies.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My journey in tech started when I built my first website at 16. Since then, I've worked with startups and established companies, 
              helping them bring their digital products to life.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary rounded-lg hover:bg-primary/90 transition-colors text-white font-medium"
              >
                Let's Connect
              </a>
            </div>
          </AnimatedElement>
          
          <AnimatedElement 
            variant="fade-left" 
            className="glass-morphism rounded-2xl overflow-hidden"
            delay={200}
          >
            <div className="relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Developer" 
                className="object-cover object-center w-full h-full mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 to-transparent">
                <h4 className="text-xl font-bold">John Doe</h4>
                <p className="text-foreground/80">Full-stack Developer</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
