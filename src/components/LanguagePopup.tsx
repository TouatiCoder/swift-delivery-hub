/**
 * Language Selection Popup
 * Displays on first visit to let users choose their preferred language
 * Clean modal design with Arabic and French options
 */

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguagePopup: React.FC = () => {
  const { hasSelectedLanguage, setLanguage } = useLanguage();

  // Don't show if user already selected a language
  if (hasSelectedLanguage) {
    return null;
  }

  const handleSelectLanguage = (lang: 'ar' | 'fr') => {
    setLanguage(lang);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-dark/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-primary px-6 py-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
            <Globe className="w-8 h-8 text-neutral-dark" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-dark mb-2">
            Choose Your Language
          </h2>
          <p className="text-neutral-dark/80 text-sm">
            اختر لغتك المفضلة / Choisissez votre langue
          </p>
        </div>

        {/* Language Options */}
        <div className="p-6 space-y-4">
          {/* Arabic Option */}
          <button
            onClick={() => handleSelectLanguage('ar')}
            className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary-red/10 flex items-center justify-center text-2xl">
              🇲🇦
            </div>
            <div className="flex-1 text-right">
              <span className="block text-xl font-bold text-neutral-dark font-arabic">
                العربية
              </span>
              <span className="block text-sm text-muted-foreground">
                Arabic
              </span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all duration-200" />
          </button>

          {/* French Option */}
          <button
            onClick={() => handleSelectLanguage('fr')}
            className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          >
            <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-2xl">
              🇫🇷
            </div>
            <div className="flex-1 text-left">
              <span className="block text-xl font-bold text-neutral-dark font-latin">
                Français
              </span>
              <span className="block text-sm text-muted-foreground">
                French
              </span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all duration-200" />
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-center text-xs text-muted-foreground">
            You can change this later in the navigation menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
