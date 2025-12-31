/**
 * LANDING PAGE - Professional SaaS Homepage
 * Morocco's Leading Last-Mile Delivery Platform
 * Enhanced with Framer Motion animations
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock, 
  CreditCard, 
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Shield,
  Store,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  AnimatedSection,
  AnimatedCard,
  AnimatedButton,
  AnimatedStagger,
  AnimatedStaggerItem,
  AnimatedIcon,
} from '@/components/animations';

// Bilingual content
const content = {
  ar: {
    badge: '#1 منصة التوصيل في المغرب',
    heroTitle1: 'توصيل أسرع،',
    heroTitle2: 'نمو أعمالك',
    heroDesc: 'الحل المتكامل لإدارة التوصيل للتجارة الإلكترونية. تتبع فوري، تحصيل عند الاستلام، وتغطية شاملة في جميع أنحاء المغرب.',
    startShipping: 'ابدأ الشحن اليوم',
    viewPricing: 'عرض الأسعار',
    monthlyDeliveries: 'توصيل شهري',
    activeMerchants: 'تاجر نشط',
    successRate: 'معدل النجاح',
    whyChoose: 'لماذا تختارنا؟',
    whyChooseDesc: 'نقدم حلول لوجستية شاملة مصممة للتجارة الإلكترونية المغربية.',
    howItWorks: 'كيف يعمل',
    howItWorksDesc: 'عملية توصيل بسيطة وفعالة وشفافة من الاستلام حتى الباب.',
    coverage: 'تغطية وطنية',
    coverageDesc: 'نوصل إلى جميع المدن الرئيسية في المغرب بأسعار تنافسية.',
    viewAllCities: 'عرض جميع المدن والأسعار',
    location: 'موقعنا',
    locationDesc: 'زر مقرنا الرئيسي في الدار البيضاء أو تواصل معنا للمزيد.',
    address: 'العنوان',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    ready: 'هل أنت مستعد لتوسيع توصيلاتك؟',
    readyDesc: 'انضم إلى مئات التجار المغاربة الذين يثقون بنا.',
    getStarted: 'ابدأ مجاناً',
    adminDemo: 'عرض الإدارة',
    from: 'ابتداءً من',
    mad: 'درهم',
  },
  fr: {
    badge: 'Plateforme #1 de livraison au Maroc',
    heroTitle1: 'Livrez plus vite,',
    heroTitle2: 'Développez votre business',
    heroDesc: 'La solution complète de gestion de livraison pour le e-commerce. Suivi en temps réel, paiement à la livraison et couverture nationale au Maroc.',
    startShipping: 'Commencer à expédier',
    viewPricing: 'Voir les tarifs',
    monthlyDeliveries: 'Livraisons mensuelles',
    activeMerchants: 'Marchands actifs',
    successRate: 'Taux de réussite',
    whyChoose: 'Pourquoi nous choisir ?',
    whyChooseDesc: 'Nous offrons des solutions logistiques complètes conçues pour le e-commerce marocain.',
    howItWorks: 'Comment ça marche',
    howItWorksDesc: 'Un processus de livraison simple, efficace et transparent.',
    coverage: 'Couverture nationale',
    coverageDesc: 'Nous livrons dans toutes les grandes villes du Maroc à des prix compétitifs.',
    viewAllCities: 'Voir toutes les villes et tarifs',
    location: 'Notre emplacement',
    locationDesc: 'Visitez notre hub principal à Casablanca ou contactez-nous.',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    ready: 'Prêt à développer vos livraisons ?',
    readyDesc: 'Rejoignez des centaines de marchands marocains qui nous font confiance.',
    getStarted: 'Commencer gratuitement',
    adminDemo: 'Démo Admin',
    from: 'à partir de',
    mad: 'MAD',
  },
};

// Services data with translations
const getServices = (lang: 'ar' | 'fr') => [
  {
    icon: Truck,
    title: lang === 'ar' ? 'توصيل سريع' : 'Livraison rapide',
    description: lang === 'ar' 
      ? 'توصيل في نفس اليوم أو اليوم التالي في جميع المدن المغربية.'
      : 'Livraison le jour même ou le lendemain dans toutes les grandes villes.',
  },
  {
    icon: CreditCard,
    title: lang === 'ar' ? 'الدفع عند الاستلام' : 'Paiement à la livraison',
    description: lang === 'ar'
      ? 'تحصيل آمن وتسوية تلقائية للتجار.'
      : 'Collecte sécurisée et règlements automatiques.',
  },
  {
    icon: MapPin,
    title: lang === 'ar' ? 'تتبع فوري' : 'Suivi en temps réel',
    description: lang === 'ar'
      ? 'تتبع كل طرد مع تحديثات GPS مباشرة.'
      : 'Suivez chaque colis avec des mises à jour GPS en direct.',
  },
  {
    icon: Shield,
    title: lang === 'ar' ? 'معالجة آمنة' : 'Manipulation sécurisée',
    description: lang === 'ar'
      ? 'معالجة احترافية مع تغطية تأمينية.'
      : 'Manipulation professionnelle avec couverture d\'assurance.',
  },
];

// How it works steps with translations
const getSteps = (lang: 'ar' | 'fr') => [
  {
    step: 1,
    title: lang === 'ar' ? 'إنشاء الطلب' : 'Créer la commande',
    description: lang === 'ar'
      ? 'أضف الطلبات فردياً أو استوردها بالجملة.'
      : 'Ajoutez des commandes ou importez en masse.',
    icon: Store,
  },
  {
    step: 2,
    title: lang === 'ar' ? 'تعيين الطلب' : 'Affectation',
    description: lang === 'ar'
      ? 'النظام يعين أقرب سائق متاح.'
      : 'Le système affecte le livreur le plus proche.',
    icon: Users,
  },
  {
    step: 3,
    title: lang === 'ar' ? 'استلام الطرد' : 'Ramassage',
    description: lang === 'ar'
      ? 'السائق يستلم الطرد من موقعك.'
      : 'Le livreur récupère le colis chez vous.',
    icon: Package,
  },
  {
    step: 4,
    title: lang === 'ar' ? 'التوصيل للعميل' : 'Livraison',
    description: lang === 'ar'
      ? 'الطرد يُسلم مع تحصيل المبلغ.'
      : 'Colis livré avec paiement collecté.',
    icon: CheckCircle,
  },
];

// Featured cities
const featuredCities = [
  { name: { ar: 'الدار البيضاء', fr: 'Casablanca' }, price: 35 },
  { name: { ar: 'الرباط', fr: 'Rabat' }, price: 40 },
  { name: { ar: 'مراكش', fr: 'Marrakech' }, price: 45 },
  { name: { ar: 'فاس', fr: 'Fès' }, price: 45 },
  { name: { ar: 'طنجة', fr: 'Tanger' }, price: 50 },
  { name: { ar: 'أكادير', fr: 'Agadir' }, price: 55 },
];

const Index = () => {
  const { language } = useLanguage();
  const t = content[language];
  const services = getServices(language);
  const steps = getSteps(language);

  return (
    <>
      {/* Hero Section with page load animations */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge with fade-in */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              <Truck className="h-4 w-4" />
              {t.badge}
            </motion.div>
            
            {/* Title with staggered animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              {t.heroTitle1}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block text-accent"
              >
                {t.heroTitle2}
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              {t.heroDesc}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AnimatedButton>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto" asChild>
                  <Link to="/merchant/login">
                    {t.startShipping}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedButton>
              <AnimatedButton>
                <Button size="lg" variant="outline" className="border-secondary-copper text-secondary-copper hover:bg-secondary-copper hover:text-secondary-copper-foreground w-full sm:w-auto" asChild>
                  <Link to="/cities">{t.viewPricing}</Link>
                </Button>
              </AnimatedButton>
            </motion.div>
            
            {/* Stats with staggered entrance */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: '50K+', label: t.monthlyDeliveries },
                { value: '500+', label: t.activeMerchants },
                { value: '98%', label: t.successRate },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.value}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with scroll animations */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyChoose}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.whyChooseDesc}
            </p>
          </AnimatedSection>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={service.title}
                  delay={index * 0.1}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30"
                >
                  <AnimatedIcon type="rotate" className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </AnimatedIcon>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section with staggered steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.howItWorksDesc}
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Animated connection line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left" 
            />
            
            <AnimatedStagger staggerDelay={0.2} className="grid gap-8 md:grid-cols-4">
              {steps.map((item) => {
                const Icon = item.icon;
                return (
                  <AnimatedStaggerItem key={item.step} className="relative text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mx-auto mb-4 shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    {/* Animated step badge */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 15,
                        delay: 0.5 + item.step * 0.15
                      }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-secondary-copper text-secondary-copper-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </AnimatedStaggerItem>
                );
              })}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* Cities Coverage Section */}
      <section className="py-16 md:py-24 bg-neutral-dark text-neutral-dark-foreground">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.coverage}</h2>
            <p className="text-lg text-neutral-dark-foreground/80 max-w-2xl mx-auto">
              {t.coverageDesc}
            </p>
          </AnimatedSection>
          
          <AnimatedStagger staggerDelay={0.08} className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto mb-8">
            {featuredCities.map((city) => (
              <AnimatedStaggerItem key={city.name.fr}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl bg-neutral-dark-foreground/10 backdrop-blur-sm border border-neutral-dark-foreground/20 p-4 text-center hover:bg-neutral-dark-foreground/15 transition-colors cursor-default"
                >
                  <div className="font-semibold mb-1">{city.name[language]}</div>
                  <div className="text-sm text-neutral-dark-foreground/70">
                    {t.from} {city.price} {t.mad}
                  </div>
                </motion.div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStagger>
          
          <AnimatedSection delay={0.4} className="text-center">
            <AnimatedButton>
              <Button variant="secondary" size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/cities">
                  {t.viewAllCities}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.location}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.locationDesc}
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-5xl mx-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.8499987869!2d-7.669968936468809!3d33.57241455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LastMile Delivery Location"
                className="w-full"
              />
            </motion.div>
          </AnimatedSection>
          
          <AnimatedStagger staggerDelay={0.1} className="grid gap-6 md:grid-cols-3 mt-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, label: t.address, value: 'Boulevard Anfa, Casablanca' },
              { icon: Phone, label: t.phone, value: '+212 5 22 00 00 00' },
              { icon: Mail, label: t.email, value: 'contact@lastmile.ma' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedStaggerItem key={item.label}>
                  <motion.div 
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
                  >
                    <AnimatedIcon type="pulse" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </AnimatedIcon>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                </AnimatedStaggerItem>
              );
            })}
          </AnimatedStagger>
        </div>
      </section>

      {/* CTA Section with gradient animation and pulse button */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          animate={{ 
            background: [
              'linear-gradient(135deg, rgba(15,118,110,0.05) 0%, rgba(180,83,9,0.03) 100%)',
              'linear-gradient(135deg, rgba(180,83,9,0.05) 0%, rgba(15,118,110,0.03) 100%)',
              'linear-gradient(135deg, rgba(15,118,110,0.05) 0%, rgba(180,83,9,0.03) 100%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ready}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.readyDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Pulse animation on primary CTA */}
              <AnimatedButton pulse>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto" asChild>
                  <Link to="/merchant/register">
                    {t.getStarted}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </AnimatedButton>
              <AnimatedButton>
                <Button size="lg" variant="outline" className="border-secondary-copper text-secondary-copper hover:bg-secondary-copper hover:text-secondary-copper-foreground w-full sm:w-auto" asChild>
                  <Link to="/admin/login">{t.adminDemo}</Link>
                </Button>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
