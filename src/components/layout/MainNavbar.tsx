/**
 * MainNavbar Component
 * Main navigation bar with logo, bilingual links, auth buttons, and language switcher
 * Professional design with RTL/LTR support and scroll-based animations
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const MainNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();

  // Handle scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with Arabic and French labels
  const navLinks = [
    { href: '/', labelAr: 'الرئيسية', labelFr: 'Accueil' },
    { href: '/services', labelAr: 'خدماتنا', labelFr: 'Services' },
    { href: '/news', labelAr: 'المستجدات', labelFr: 'Actualités' },
    { href: '/prices', labelAr: 'أسعارنا', labelFr: 'Tarifs' },
    { href: '/about', labelAr: 'من نحن', labelFr: 'À propos' },
    { href: '/live-chat', labelAr: 'الدردشة', labelFr: 'Chat' },
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
          : 'bg-background border-b border-border'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-neutral-dark">
                Last<span className="text-primary">Mile</span>
              </span>
              <span className="text-xs text-muted-foreground ml-1">Express</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" dir={isRTL ? 'rtl' : 'ltr'}>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 font-medium transition-colors ${
                    isRTL ? 'font-arabic' : 'font-latin'
                  } ${isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  {getLabel(link.labelAr, link.labelFr)}
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side: Language Switcher + Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 border-border hover:bg-secondary transition-all duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className={language === 'ar' ? 'font-arabic' : 'font-latin'}>
                  {language === 'ar' ? 'FR' : 'عربي'}
                </span>
              </Button>
            </motion.div>

            {/* Login Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/login">
                <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                  <User className="h-4 w-4" />
                  <span className={isRTL ? 'font-arabic' : 'font-latin'}>
                    {language === 'ar' ? 'الدخول' : 'Se connecter'}
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Register Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/merchant/register">
                <Button className="gap-2 bg-secondary-copper hover:bg-secondary-copper/90 text-secondary-copper-foreground transition-all duration-200">
                  <UserPlus className="h-4 w-4" />
                  <span className={isRTL ? 'font-arabic' : 'font-latin'}>
                    {language === 'ar' ? 'التسجيل' : 'Inscription'}
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-neutral-dark" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-neutral-dark" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border">
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
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          isRTL ? 'font-arabic' : 'font-latin'
                        } ${isActive(link.href) ? 'text-primary bg-primary/5' : 'text-foreground hover:bg-muted'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {getLabel(link.labelAr, link.labelFr)}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-col gap-3 mt-4 pt-4 border-t border-border"
                >
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <User className="h-4 w-4" />
                      <span>{language === 'ar' ? 'الدخول' : 'Se connecter'}</span>
                    </Button>
                  </Link>
                  <Link to="/merchant/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full gap-2 bg-secondary-copper hover:bg-secondary-copper/90 text-secondary-copper-foreground">
                      <UserPlus className="h-4 w-4" />
                      <span>{language === 'ar' ? 'التسجيل' : 'Inscription'}</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default MainNavbar;
