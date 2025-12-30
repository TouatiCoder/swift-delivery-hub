/**
 * Footer Component
 * Yellow-themed footer with logo, links, contact info, and social icons
 * Matches OzonExpress.ma design
 */

import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Phone, 
  Mail, 
  MapPin,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Useful links
  const usefulLinks = [
    { label: 'الرئيسية', labelFr: 'Accueil', href: '/' },
    { label: 'خدماتنا', labelFr: 'Services', href: '/services' },
    { label: 'أسعارنا', labelFr: 'Tarifs', href: '/prices' },
    { label: 'من نحن', labelFr: 'À propos', href: '/about' },
    { label: 'المستجدات', labelFr: 'Actualités', href: '/news' },
  ];

  // Important links
  const importantLinks = [
    { label: 'مركز التواصل', labelFr: 'Contact', href: '/contact' },
    { label: 'فضاء التوظيف', labelFr: 'Recrutement', href: '/recruitment' },
    { label: 'العمل كمندوب', labelFr: 'Devenir Livreur', href: '/driver/become' },
    { label: 'تسجيل الدخول', labelFr: 'Connexion', href: '/login' },
    { label: 'إنشاء حساب', labelFr: 'Inscription', href: '/merchant/register' },
  ];

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                Last<span className="text-foreground">Mile</span>
              </span>
              <span className="text-xs opacity-80">Express</span>
            </Link>
            <p className="text-sm opacity-90 font-arabic leading-relaxed" dir="rtl">
              شريك التجارة الإلكترونية الموثوق في المغرب. نوفر خدمات توصيل سريعة وموثوقة 
              تغطي جميع أنحاء المملكة مع حلول تقنية مبتكرة.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-arabic">روابط مفيدة</h3>
            <ul className="space-y-2" dir="rtl">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity font-arabic"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-arabic">روابط هامة</h3>
            <ul className="space-y-2" dir="rtl">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity font-arabic"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-arabic">تواصل معنا</h3>
            <ul className="space-y-3" dir="rtl">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90" dir="ltr">+212 5 20 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">contact@lastmile.ma</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-90 font-arabic">
                  الدار البيضاء، المغرب
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90 font-arabic">
                  الاثنين - السبت: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p className="text-center md:text-left">
              © {currentYear} LastMile Express. Tous droits réservés.
            </p>
            <p className="font-arabic text-center md:text-right" dir="rtl">
              جميع الحقوق محفوظة © {currentYear} لاست مايل إكسبريس
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;