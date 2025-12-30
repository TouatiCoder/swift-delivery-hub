/**
 * ABOUT US PAGE - Company Information
 * LastMile Delivery Morocco
 */

import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Users,
  Award,
  Truck,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Team members data
const teamMembers = [
  {
    name: 'Ahmed Benali',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in logistics.',
  },
  {
    name: 'Fatima Zahra',
    role: 'COO',
    description: 'Operations expert driving efficiency.',
  },
  {
    name: 'Youssef El Amrani',
    role: 'CTO',
    description: 'Tech innovator building our platform.',
  },
  {
    name: 'Sara Benjelloun',
    role: 'Head of Sales',
    description: 'Growing our merchant network nationwide.',
  },
];

// Company values
const values = [
  {
    icon: Target,
    title: 'Reliability',
    description: 'We deliver on our promises, every single time.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your success is our top priority.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.',
  },
  {
    icon: Truck,
    title: 'Innovation',
    description: 'Continuously improving our delivery solutions.',
  },
];

// Milestones
const milestones = [
  { year: '2019', title: 'Founded', description: 'LastMile was born in Casablanca.' },
  { year: '2020', title: 'Expansion', description: 'Expanded to 10 major cities.' },
  { year: '2022', title: '100K Deliveries', description: 'Reached 100,000 monthly deliveries.' },
  { year: '2024', title: 'National Coverage', description: 'Now serving all of Morocco.' },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-accent">LastMile</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We are Morocco's leading last-mile delivery platform, connecting merchants
              with customers through fast, reliable, and affordable delivery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower Moroccan e-commerce businesses with reliable, fast, and affordable
                last-mile delivery solutions. We aim to be the backbone of online commerce,
                ensuring every package reaches its destination on time.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the most trusted delivery partner in North Africa, setting the
                standard for excellence in logistics technology and customer service,
                while creating opportunities for thousands of drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at LastMile.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground mx-auto mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              From a small startup to Morocco's leading delivery platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 max-w-4xl mx-auto">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative text-center">
                <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                <h3 className="font-semibold mb-1">{milestone.title}</h3>
                <p className="text-sm text-primary-foreground/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind LastMile's success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Nationwide coverage across all Moroccan cities',
                'Competitive pricing with transparent fees',
                'Real-time tracking for every delivery',
                'Fast COD settlements within 48 hours',
                'Dedicated support team available 24/7',
                'Easy integration with your e-commerce platform',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of successful merchants who trust LastMile for their deliveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                <Link to="/login">
                  Start Shipping Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/cities">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
