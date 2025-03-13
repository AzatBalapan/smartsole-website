import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'ru';

// Define translations structure
export interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

// Create translations dictionary
export const translations: Translations = {
  // Navigation
  "nav.howItWorks": {
    en: "How It Works",
    ru: "Как это работает"
  },
  "nav.features": {
    en: "Features",
    ru: "Функции"
  },
  "nav.research": {
    en: "Research",
    ru: "Исследования"
  },
  "nav.team": {
    en: "Team",
    ru: "Команда"
  },
  "nav.contact": {
    en: "Contact",
    ru: "Контакты"
  },
  "nav.preorder": {
    en: "Pre-Order Now",
    ru: "Предзаказ"
  },
  "nav.home": {
    en: "Home",
    ru: "Главная"
  },
  
  // Hero
  "hero.title": {
    en: "Revolutionary Smart Insoles",
    ru: "Революционные умные стельки"
  },
  "hero.subtitle": {
    en: "Innovative technology that transforms how you move and understand your body.",
    ru: "Инновационная технология, которая меняет то, как вы двигаетесь и понимаете свое тело."
  },
  "hero.cta": {
    en: "Learn More",
    ru: "Узнать больше"
  },
  
  // Features
  "features.title": {
    en: "Features",
    ru: "Функции"
  },
  "features.activity.title": {
    en: "Activity Monitoring",
    ru: "Мониторинг активности"
  },
  "features.activity.description": {
    en: "Track steps, distance, angle measurements and more with exceptional accuracy.",
    ru: "Отслеживайте шаги, расстояние, измерение углов и многое другое с исключительной точностью."
  },
  "features.wireless.title": {
    en: "Wireless Sync",
    ru: "Беспроводная синхронизация"
  },
  "features.wireless.description": {
    en: "Seamlessly connect to your smartphone for real-time feedback and analysis.",
    ru: "Легко подключайтесь к смартфону для получения обратной связи и анализа в реальном времени."
  },
  "features.battery.title": {
    en: "10+ Hour Battery",
    ru: "Более 10 часов работы"
  },
  "features.battery.description": {
    en: "Long-lasting battery life ensures your insoles work as long as you do.",
    ru: "Длительный срок службы батареи обеспечивает работу стелек так же долго, как и вы."
  },
  "features.precision.title": {
    en: "Precision Sensing",
    ru: "Точные датчики"
  },
  "features.precision.description": {
    en: "Capture specific foot areas with high accuracy.",
    ru: "Захватывайте определенные области стопы с высокой точностью."
  },
  "features.health.title": {
    en: "Health Insights",
    ru: "Анализ здоровья"
  },
  "features.health.description": {
    en: "Analyze gait patterns to prevent injuries, speed rehabilitation, and improve sports activity.",
    ru: "Анализируйте походку для предотвращения травм, ускорения реабилитации и улучшения спортивных результатов."
  },
  "features.angle.title": {
    en: "Angle Measurements",
    ru: "Измерение углов"
  },
  "features.angle.description": {
    en: "Track knee and ankle angles for improved posture and movement efficiency.",
    ru: "Отслеживайте углы колена и лодыжки для улучшения осанки и эффективности движений."
  },
  
  // How It Works
  "howItWorks.title": {
    en: "How It Works",
    ru: "Как это работает"
  },
  "howItWorks.step1.title": {
    en: "Insert in Your Shoes",
    ru: "Вставьте в обувь"
  },
  "howItWorks.step1.description": {
    en: "Simply place the smart insoles in your favorite pair of shoes.",
    ru: "Просто поместите умные стельки в вашу любимую пару обуви."
  },
  "howItWorks.step2.title": {
    en: "Connect to Your Device",
    ru: "Подключите к устройству"
  },
  "howItWorks.step2.description": {
    en: "Pair with our mobile app via Bluetooth for seamless connectivity.",
    ru: "Подключите к нашему мобильному приложению через Bluetooth для бесперебойной связи."
  },
  "howItWorks.step3.title": {
    en: "Calibrate Your Profile",
    ru: "Настройте свой профиль"
  },
  "howItWorks.step3.description": {
    en: "Save your data to see future analysis and personalized insights.",
    ru: "Сохраните свои данные для просмотра будущего анализа и персонализированных рекомендаций."
  },
  "howItWorks.step4.title": {
    en: "Start Moving",
    ru: "Начните движение"
  },
  "howItWorks.step4.description": {
    en: "Begin your activity and receive real-time feedback and insights.",
    ru: "Начните активность и получайте обратную связь и аналитику в реальном времени."
  },
  
  // Research Page
  "research.title": {
    en: "Our Research",
    ru: "Наши исследования"
  },
  "research.subtitle": {
    en: "Discover the science behind our technology",
    ru: "Узнайте о науке, лежащей в основе нашей технологии"
  },
  "research.papers": {
    en: "Research Papers",
    ru: "Научные статьи"
  },
  
  // Team Page
  "team.title": {
    en: "Our Team",
    ru: "Наша команда"
  },
  "team.subtitle": {
    en: "Meet the experts behind MiraiTech",
    ru: "Познакомьтесь с экспертами MiraiTech"
  },
  
  // Contact Page
  "contact.title": {
    en: "Contact Us",
    ru: "Свяжитесь с нами"
  },
  "contact.subtitle": {
    en: "Get in touch with our team",
    ru: "Связаться с нашей командой"
  },
  "contact.name": {
    en: "Full Name",
    ru: "Полное имя"
  },
  "contact.email": {
    en: "Email Address",
    ru: "Электронная почта"
  },
  "contact.message": {
    en: "Your Message",
    ru: "Ваше сообщение"
  },
  "contact.submit": {
    en: "Send Message",
    ru: "Отправить сообщение"
  },
  
  // Not Found Page
  "notFound.title": {
    en: "Page Not Found",
    ru: "Страница не найдена"
  },
  "notFound.subtitle": {
    en: "The page you are looking for doesn't exist or has been moved.",
    ru: "Страница, которую вы ищете, не существует или была перемещена."
  },
  "notFound.button": {
    en: "Go Back Home",
    ru: "Вернуться на главную"
  },
  
  // Footer
  "footer.partners": {
    en: "Our Partners",
    ru: "Наши партнеры"
  },
  "footer.subscribe": {
    en: "Stay Updated",
    ru: "Будьте в курсе"
  },
  "footer.subscribeText": {
    en: "Subscribe to receive the latest news and early access to new features.",
    ru: "Подпишитесь, чтобы получать последние новости и ранний доступ к новым функциям."
  },
  "footer.email": {
    en: "Enter your email",
    ru: "Введите email"
  },
  "footer.subscribeButton": {
    en: "Subscribe",
    ru: "Подписаться"
  },
  "footer.rights": {
    en: "All rights reserved.",
    ru: "Все права защищены."
  },
  "footer.privacy": {
    en: "Privacy Policy",
    ru: "Политика конфиденциальности"
  },
  "footer.terms": {
    en: "Terms of Service",
    ru: "Условия использования"
  },
  "footer.cookies": {
    en: "Cookies Policy",
    ru: "Политика использования файлов cookie"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ru')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
