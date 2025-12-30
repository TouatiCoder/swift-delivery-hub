/**
 * LANDING PAGE - Role Selection
 */

import { Link } from 'react-router-dom';
import { Shield, Store, Truck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const roles = [
  { path: '/admin', label: 'Admin Dashboard', description: 'Manage all operations, merchants, drivers and finances', icon: Shield, color: 'bg-primary text-primary-foreground' },
  { path: '/merchant', label: 'Merchant Portal', description: 'Create orders, track deliveries and manage wallet', icon: Store, color: 'bg-accent text-accent-foreground' },
  { path: '/driver', label: 'Driver App', description: 'View assigned orders and update delivery status', icon: Truck, color: 'bg-success text-success-foreground' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container py-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">LM</div>
          <div>
            <h1 className="font-bold text-lg">LastMile Delivery</h1>
            <p className="text-xs text-muted-foreground">Morocco's Leading Logistics Platform</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 container py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Last-Mile Delivery <span className="text-accent">Made Simple</span></h2>
          <p className="text-lg text-muted-foreground">Streamline your logistics operations with our comprehensive delivery management platform. Track orders, manage drivers, and grow your business.</p>
        </div>

        {/* Role Cards */}
        <div className="grid gap-6 md:grid-cols-3 w-full max-w-4xl">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.path}
                to={role.path}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className={cn('flex h-14 w-14 items-center justify-center rounded-xl mb-4', role.color)}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{role.label}</h3>
                <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  Enter Dashboard <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2024 LastMile Delivery Morocco. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
