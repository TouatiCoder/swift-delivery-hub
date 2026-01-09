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
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  // Useful links with both Arabic and French labels
  const usefulLinks = [
    { label: 'الرئيسية', labelFr: 'Accueil', href: '/' },
    { label: 'خدماتنا', labelFr: 'Services', href: '/services' },
    { label: 'أسعارنا', labelFr: 'Tarifs', href: '/prices' },
    { label: 'من نحن', labelFr: 'À propos', href: '/about' },
    { label: 'المستجدات', labelFr: 'Actualités', href: '/news' },
  ];

  // Important links with both Arabic and French labels
  const importantLinks = [
    { label: 'مركز التواصل', labelFr: 'Contact', href: '/contact' },
    { label: 'فضاء التوظيف', labelFr: 'Recrutement', href: '/recruitment' },
    { label: 'العمل كمندوب', labelFr: 'Devenir Livreur', href: '/driver/become' },
    { label: 'تسجيل الدخول', labelFr: 'Connexion', href: '/login' },
    { label: 'إنشاء حساب', labelFr: 'Inscription', href: '/merchant/register' },
  ];

  // Contact information with both Arabic and French versions
  const contactInfo = {
    phone: {
      arabic: '+212 5 20 00 00 00',
      french: '+212 5 20 00 00 00'
    },
    email: {
      arabic: 'contact@lastmile.ma',
      french: 'contact@lastmile.ma'
    },
    address: {
      arabic: 'الدار البيضاء، المغرب',
      french: 'Casablanca, Maroc'
    },
    hours: {
      arabic: 'الاثنين - السبت: 9:00 - 18:00',
      french: 'Lun - Sam: 9:00 - 18:00'
    }
  };

  // Social media links
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-neutral-dark text-neutral-dark-foreground">
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
            <p className={`text-sm opacity-90 ${language === 'ar' ? 'font-arabic leading-relaxed' : 'font-latin'} ${language === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} 
               dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' 
                ? 'شريك التجارة الإلكترونية الموثوق في المغرب. نوفر خدمات توصيل سريعة وموثوقة تغطي جميع أنحاء المملكة مع حلول تقنية مبتكرة.' 
                : 'Votre partenaire de confiance pour le commerce électronique au Maroc. Nous fournissons des services de livraison rapides et fiables couvrant tout le pays avec des solutions techniques innovantes.'}
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
            <h3 className={`font-bold text-lg mb-4 ${language === 'ar' ? 'font-arabic' : 'font-latin'}`} 
                dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' ? 'روابط مفيدة' : 'Liens utiles'}
            </h3>
            <ul className="space-y-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className={`text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity ${language === 'ar' ? 'font-arabic' : 'font-latin'}`}
                  >
                    {language === 'ar' ? link.label : link.labelFr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${language === 'ar' ? 'font-arabic' : 'font-latin'}`} 
                dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' ? 'روابط هامة' : 'Liens importants'}
            </h3>
            <ul className="space-y-2" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className={`text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity ${language === 'ar' ? 'font-arabic' : 'font-latin'}`}
                  >
                    {language === 'ar' ? link.label : link.labelFr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${language === 'ar' ? 'font-arabic' : 'font-latin'}`} 
                dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' ? 'تواصل معنا' : 'Contactez-nous'}
            </h3>
            <ul className="space-y-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className={`text-sm opacity-90 ${language === 'ar' ? 'dir-rtl' : 'dir-ltr'}`}>
                  {contactInfo.phone[language === 'ar' ? 'arabic' : 'french']}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  {contactInfo.email[language === 'ar' ? 'arabic' : 'french']}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className={`text-sm opacity-90 ${language === 'ar' ? 'font-arabic' : 'font-latin'}`}>
                  {contactInfo.address[language === 'ar' ? 'arabic' : 'french']}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span className={`text-sm opacity-90 ${language === 'ar' ? 'font-arabic' : 'font-latin'}`}>
                  {contactInfo.hours[language === 'ar' ? 'arabic' : 'french']}
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
            <p className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              © {currentYear} LastMile Express. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'Tous droits réservés'}.
            </p>
            <p className={`${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`} 
               dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {language === 'ar' 
                ? `جميع الحقوق محفوظة © ${currentYear} لاست مايل إكسبريس` 
                : `© ${currentYear} LastMile Express. Tous droits réservés.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;