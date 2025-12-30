/**
 * LANDING PAGE - Professional SaaS Homepage
 * Morocco's Leading Last-Mile Delivery Platform
 */

import { Link } from 'react-router-dom';
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
import { cn } from '@/lib/utils';

// Services data
const services = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day and next-day delivery across all major Moroccan cities.',
  },
  {
    icon: CreditCard,
    title: 'Cash on Delivery',
    description: 'Secure COD collection and automated merchant settlements.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track every package with live GPS updates and status notifications.',
  },
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Professional handling with insurance coverage for all shipments.',
  },
];

// How it works steps
const steps = [
  {
    step: 1,
    title: 'Merchant Creates Order',
    description: 'Upload orders individually or import in bulk via Excel.',
    icon: Store,
  },
  {
    step: 2,
    title: 'Order Assigned',
    description: 'Our system automatically assigns the nearest available driver.',
    icon: Users,
  },
  {
    step: 3,
    title: 'Driver Picks Up',
    description: 'Driver collects the package from merchant location.',
    icon: Package,
  },
  {
    step: 4,
    title: 'Delivered to Customer',
    description: 'Package delivered with COD collected and settled.',
    icon: CheckCircle,
  },
];

// Featured cities
const featuredCities = [
  { name: 'Casablanca', price: 35 },
  { name: 'Rabat', price: 40 },
  { name: 'Marrakech', price: 45 },
  { name: 'Fes', price: 45 },
  { name: 'Tangier', price: 50 },
  { name: 'Agadir', price: 55 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
              LM
            </div>
            <div>
              <h1 className="font-bold text-lg">LastMile</h1>
              <p className="text-[10px] text-muted-foreground leading-none">Delivery Morocco</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              About Us
            </Link>
            <Link to="/cities" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Cities & Prices
            </Link>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/merchant">Login</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/merchant">Become a Merchant</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Truck className="h-4 w-4" />
                Morocco&apos;s #1 Last-Mile Delivery Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Deliver Faster,
                <span className="block text-accent">Grow Your Business</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The complete delivery management solution for e-commerce businesses. 
                Real-time tracking, COD collection, and nationwide coverage across Morocco.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                  <Link to="/merchant">
                    Start Shipping Today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/cities">View Pricing</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Monthly Deliveries</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Active Merchants</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LastMile?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end logistics solutions designed for Moroccan e-commerce.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, efficient, and transparent delivery process from pickup to doorstep.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Connection line */}
              <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
              
              <div className="grid gap-8 md:grid-cols-4">
                {steps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="relative text-center">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mx-auto mb-4 shadow-lg">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {item.step}
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cities Coverage Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nationwide Coverage</h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                We deliver to all major cities in Morocco with competitive pricing.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto mb-8">
              {featuredCities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-4 text-center hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="font-semibold mb-1">{city.name}</div>
                  <div className="text-sm text-primary-foreground/70">from {city.price} MAD</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <Link to="/cities">
                  View All Cities & Prices
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our main hub in Casablanca or contact us for more information.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-5xl mx-auto">
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
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 mt-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-medium">Boulevard Anfa, Casablanca</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+212 5 22 00 00 00</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">contact@lastmile.ma</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Deliveries?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of Moroccan merchants who trust LastMile for their logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                  <Link to="/merchant">
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/admin">Admin Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
                  LM
                </div>
                <div>
                  <h3 className="font-bold">LastMile</h3>
                  <p className="text-xs text-muted-foreground">Delivery Morocco</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Morocco&apos;s leading last-mile delivery platform for e-commerce businesses.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/cities" className="hover:text-accent transition-colors">Cities & Pricing</Link></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Portals */}
            <div>
              <h4 className="font-semibold mb-4">Portals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/admin" className="hover:text-accent transition-colors">Admin Dashboard</Link></li>
                <li><Link to="/merchant" className="hover:text-accent transition-colors">Merchant Portal</Link></li>
                <li><Link to="/driver" className="hover:text-accent transition-colors">Driver App</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Boulevard Anfa, Casablanca
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +212 5 22 00 00 00
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@lastmile.ma
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 LastMile Delivery Morocco. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
