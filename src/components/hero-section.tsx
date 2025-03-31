
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './animated-element';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Developer', 'Designer', 'Problem Solver', 'Creator'];
  
  // Typing animation
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 1500;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && typedText === currentPhrase) {
      // Pause at the end of typing a complete phrase
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && typedText === '') {
      // Move to the next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        setTypedText((prev) => currentPhrase.slice(0, prev.length + 1));
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background to-background -z-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse-slow -z-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative">
        <AnimatedElement 
          variant="fade-up" 
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-gradient-accent">John Doe</span>
            <br />
            <span className="flex items-center justify-center gap-2">
              <span className="text-gradient-primary">I'm a </span>
              <span className="text-primary relative">
                {typedText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary animate-pulse"></span>
              </span>
            </span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mb-10">
            A passionate full-stack developer with expertise in creating beautiful, functional, and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/80 text-white font-medium transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-transparent hover:bg-white/5 text-white border border-white/20 font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </AnimatedElement>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
