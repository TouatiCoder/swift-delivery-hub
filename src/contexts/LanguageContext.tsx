/**
 * Language Context
 * Provides language state and switching functionality
 * Stores preference in localStorage
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Supported languages
export type Language = 'ar' | 'fr' | null;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: 'ar' | 'fr') => void;
  isRTL: boolean;
  hasSelectedLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'lang';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize from localStorage or null (no selection)
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === 'ar' || stored === 'fr') {
      return stored;
    }
    return null;
  });

  // Update localStorage and document direction when language changes
  useEffect(() => {
    if (language) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  // Set language function
  const setLanguage = (lang: 'ar' | 'fr') => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    isRTL: language === 'ar',
    hasSelectedLanguage: language !== null,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
