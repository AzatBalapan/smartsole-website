
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <span className={cn("text-sm font-medium", language === 'en' ? "text-primary" : "text-muted-foreground")}>EN</span>
      <Switch 
        checked={language === 'ru'} 
        onCheckedChange={toggleLanguage} 
        aria-label="Toggle language"
      />
      <span className={cn("text-sm font-medium", language === 'ru' ? "text-primary" : "text-muted-foreground")}>RU</span>
    </div>
  );
};

export default LanguageSwitcher;
