
import React from 'react';
import { Globe } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-foreground/70" />
      <ToggleGroup 
        type="single" 
        value={language} 
        onValueChange={(value) => {
          if (value) setLanguage(value as 'en' | 'cs');
        }}
        className="border rounded-md"
      >
        <ToggleGroupItem value="en" size="sm" className="px-2 py-1 text-xs">
          EN
        </ToggleGroupItem>
        <ToggleGroupItem value="cs" size="sm" className="px-2 py-1 text-xs">
          CS
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
