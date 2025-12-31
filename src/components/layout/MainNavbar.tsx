/**
 * MainNavbar Component
 * Main navigation bar with logo, bilingual links, auth buttons, and language switcher
 * Professional design with RTL/LTR support based on selected language
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const MainNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();

  // Navigation links with Arabic and French labels
  const navLinks = [
    { href: '/', labelAr: 'الرئيسية', labelFr: 'Accueil' },
    { href: '/services', labelAr: 'خدماتنا', labelFr: 'Services' },
    { href: '/news', labelAr: 'المستجدات', labelFr: 'Actualités' },
    { href: '/prices', labelAr: 'أسعارنا', labelFr: 'Tarifs' },
    { href: '/about', labelAr: 'من نحن', labelFr: 'À propos' },
  ];

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Get label based on current language
  const getLabel = (labelAr: string, labelFr: string) => {
    return language === 'ar' ? labelAr : labelFr;
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-neutral-dark">
                Last<span className="text-primary">Mile</span>
              </span>
              <span className="text-xs text-muted-foreground ml-1">Express</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" dir={isRTL ? 'rtl' : 'ltr'}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 font-medium transition-colors ${
                  isRTL ? 'font-arabic' : 'font-latin'
                } ${isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}
              >
                {getLabel(link.labelAr, link.labelFr)}
              </Link>
            ))}
          </div>

          {/* Right side: Language Switcher + Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 border-border hover:bg-secondary"
            >
              <Globe className="h-4 w-4" />
              <span className={language === 'ar' ? 'font-arabic' : 'font-latin'}>
                {language === 'ar' ? 'FR' : 'عربي'}
              </span>
            </Button>

            {/* Login Button */}
            <Link to="/login">
              <Button variant="outline" className="gap-2 border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-neutral-dark-foreground">
                <User className="h-4 w-4" />
                <span className={isRTL ? 'font-arabic' : 'font-latin'}>
                  {language === 'ar' ? 'الدخول' : 'Se connecter'}
                </span>
              </Button>
            </Link>

            {/* Register Button */}
            <Link to="/merchant/register">
              <Button className="gap-2 bg-secondary-red hover:bg-secondary-red/90 text-secondary-red-foreground">
                <UserPlus className="h-4 w-4" />
                <span className={isRTL ? 'font-arabic' : 'font-latin'}>
                  {language === 'ar' ? 'التسجيل' : 'Inscription'}
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-dark" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {/* Language Switcher Mobile */}
            <div className="pb-4 mb-4 border-b border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-full gap-2 justify-center"
              >
                <Globe className="h-4 w-4" />
                <span>
                  {language === 'ar' ? 'Passer au Français' : 'التبديل إلى العربية'}
                </span>
              </Button>
            </div>

            <div className="flex flex-col gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-lg font-medium ${
                    isRTL ? 'font-arabic' : 'font-latin'
                  } ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getLabel(link.labelAr, link.labelFr)}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2 border-neutral-dark text-neutral-dark">
                  <User className="h-4 w-4" />
                  <span>{language === 'ar' ? 'الدخول' : 'Se connecter'}</span>
                </Button>
              </Link>
              <Link to="/merchant/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gap-2 bg-secondary-red hover:bg-secondary-red/90 text-secondary-red-foreground">
                  <UserPlus className="h-4 w-4" />
                  <span>{language === 'ar' ? 'التسجيل' : 'Inscription'}</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
