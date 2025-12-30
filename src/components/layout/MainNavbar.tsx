/**
 * MainNavbar Component
 * Main navigation bar with logo, Arabic/French links, and auth buttons
 * Matches OzonExpress.ma design with RTL support
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MainNavbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className="main-navbar sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-foreground">
                Last<span className="text-primary">Mile</span>
              </span>
              <span className="text-xs text-muted-foreground ml-1">Express</span>
            </div>
          </Link>

          {/* Desktop Navigation - RTL order */}
          <div className="hidden lg:flex items-center gap-1" dir="rtl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link font-arabic ${isActive(link.href) ? 'active text-primary' : ''}`}
              >
                {link.labelAr}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" className="gap-2">
                <User className="h-4 w-4" />
                <span className="font-latin">Se connecter</span>
                <span className="mx-1">/</span>
                <span className="font-arabic">الدخول</span>
              </Button>
            </Link>
            <Link to="/merchant/register">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <UserPlus className="h-4 w-4" />
                <span className="font-latin">Inscription</span>
                <span className="mx-1">/</span>
                <span className="font-arabic">التسجيل</span>
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
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2" dir="rtl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link font-arabic text-lg py-3 ${
                    isActive(link.href) ? 'active text-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.labelAr}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  <span>Se connecter / الدخول</span>
                </Button>
              </Link>
              <Link to="/merchant/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <UserPlus className="h-4 w-4" />
                  <span>Inscription / التسجيل</span>
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