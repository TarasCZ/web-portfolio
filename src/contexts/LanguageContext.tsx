
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'cs';

// Define translations interface
interface Translations {
  [key: string]: {
    en: string;
    cs: string;
  };
}

// Create translations object
export const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', cs: 'Domů' },
  'nav.about': { en: 'About', cs: 'O mně' },
  'nav.skills': { en: 'Skills', cs: 'Dovednosti' },
  'nav.employment': { en: 'Employment', cs: 'Zaměstnání' },
  'nav.projects': { en: 'Projects', cs: 'Projekty' },
  'nav.contact': { en: 'Contact', cs: 'Kontakt' },
  
  // Employment timeline
  'employment.title': { en: 'Employment History', cs: 'Historie zaměstnání' },
  'employment.subtitle': { en: 'My professional journey and career experience', cs: 'Moje profesní cesta a kariérní zkušenosti' },
};

// Create context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Create context provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    
    // Return the key if translation not found
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create custom hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
