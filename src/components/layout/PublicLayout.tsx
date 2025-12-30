/**
 * PUBLIC LAYOUT - Shared layout for all public pages
 * Contains persistent header and footer across all public routes
 */

import { Link, Outlet, useLocation } from 'react-router-dom';
import { Truck, Package, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PublicLayout = () => {
  const location = useLocation();
  
  // Helper to check if current path matches
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
              LM
            </div>
            <div>
              <h1 className="font-bold text-lg">LastMile</h1>
              <p className="text-[10px] text-muted-foreground leading-none">Delivery Morocco</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive('/') ? "text-accent" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive('/about') ? "text-accent" : "text-muted-foreground"
              )}
            >
              About Us
            </Link>
            <Link 
              to="/cities" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isActive('/cities') ? "text-accent" : "text-muted-foreground"
              )}
            >
              Cities & Prices
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/login">Become a Merchant</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Renders child routes */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
                  LM
                </div>
                <div>
                  <h3 className="font-bold">LastMile</h3>
                  <p className="text-xs text-muted-foreground">Delivery Morocco</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">
                Morocco&apos;s leading last-mile delivery platform for e-commerce businesses.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/cities" className="hover:text-accent transition-colors">Cities & Pricing</Link></li>
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
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LastMile Delivery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
