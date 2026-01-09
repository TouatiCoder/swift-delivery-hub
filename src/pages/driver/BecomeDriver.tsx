import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, DollarSign, Clock, Shield, Users, Star } from 'lucide-react';

const BecomeDriver = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Earnings',
      description: 'Earn based on deliveries with transparent payment structure and bonuses for excellent service.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Set your own hours and work when it suits you best, whether part-time or full-time.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Comprehensive safety training and insurance coverage for you and your deliveries.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Support Team',
      description: '24/7 support from our dedicated team to help with any questions or issues.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fleet Options',
      description: 'Use your own vehicle or choose from our fleet options with competitive rates.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Growth Opportunities',
      description: 'Path for advancement and additional earning opportunities as our network expands.'
    }
  ];

  const requirements = [
    'Valid driver\'s license with clean record',
    'Vehicle registration and insurance',
    'Smartphone with data connection',
    'Background check clearance',
    'Basic English/Arabic communication skills',
    'Reliable transportation'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary-copper py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a <span className="text-accent">Delivery Driver</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our network of professional drivers and earn money on your own schedule. 
              Be part of Morocco's leading delivery service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/driver/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Drive With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of drivers who have chosen us for flexible work and competitive earnings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started as a delivery driver is simple and straightforward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Register', description: 'Create your account and provide required information' },
              { step: 2, title: 'Verify', description: 'Complete background checks and document verification' },
              { step: 3, title: 'Train', description: 'Complete our safety and service training program' },
              { step: 4, title: 'Start', description: 'Begin accepting deliveries and earning money' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Requirements
              </h2>
              <p className="text-lg text-muted-foreground">
                Before you apply, make sure you meet these requirements:
              </p>
            </motion.div>

            <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-4">
                  If you meet these requirements, you're ready to start the application process. 
                  Our team will guide you through each step.
                </p>
                <Link 
                  to="/driver/register" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Start Application
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Driver Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from drivers who have built their careers with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Benali',
                location: 'Casablanca',
                content: 'I\'ve been driving for them for 2 years now. The flexibility and earnings have allowed me to support my family while having time for my studies.',
                rating: 5
              },
              {
                name: 'Fatima Zahra',
                location: 'Rabat',
                content: 'As a working mother, the flexible schedule is perfect for me. I can work around my children\'s school hours and still earn a good income.',
                rating: 5
              },
              {
                name: 'Youssef El Mansouri',
                location: 'Marrakech',
                content: 'The support team is excellent. Anytime I have an issue, they respond quickly. The delivery app is user-friendly and efficient.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary-copper">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Driving?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our driver network today and start earning on your own schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/driver/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BecomeDriver;