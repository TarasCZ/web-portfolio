
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', icon: Mail, href: 'mailto:your.email@example.com' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 glass-morphism shadow-lg' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-gradient-primary"
          >
            DEV<span className="text-accent">PORTFOLIO</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  activeSection === link.href.substring(1) ? 'text-primary after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary' : 'text-foreground/80'
                )}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.name}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground/80 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                'text-xl font-medium transition-colors hover:text-primary',
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground/80'
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 mt-8">
            {socialLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.name}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
