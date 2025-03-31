
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ArrowUp, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const downloadCV = () => {
    // Create link to download the CV
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'developer_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="py-10 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient-primary mb-2">DEV<span className="text-accent">PORTFOLIO</span></h2>
            <p className="text-foreground/60">Crafting digital experiences with code</p>
          </div>
          
          <div className="flex items-center gap-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={downloadCV}
            >
              <FileText size={16} />
              <span>{t('footer.download_cv')}</span>
              <Download size={16} />
            </Button>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            <span>{t('footer.back_to_top')}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
