import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, MapPin, Clock, DollarSign, Award, Building, Heart } from 'lucide-react';

const Recruitment = () => {
  const jobCategories = [
    {
      title: 'Delivery Drivers',
      positions: 12,
      locations: ['Casablanca', 'Rabat', 'Marrakech', 'Tangier'],
      description: 'Join our growing network of delivery professionals serving customers across Morocco.',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Warehouse Staff',
      positions: 8,
      locations: ['Casablanca', 'Mohammedia', 'Settat'],
      description: 'Help us manage inventory and prepare packages for efficient delivery operations.',
      icon: <Building className="w-8 h-8" />
    },
    {
      title: 'Customer Support',
      positions: 5,
      locations: ['Casablanca', 'Rabat'],
      description: 'Provide exceptional service to our customers and help resolve their inquiries.',
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: 'Operations Manager',
      positions: 3,
      locations: ['Casablanca', 'Rabat'],
      description: 'Lead teams and optimize our delivery operations for maximum efficiency.',
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Salary',
      description: 'Attractive compensation packages with performance bonuses.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling options.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear advancement paths and professional development opportunities.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Multiple Locations',
      description: 'Various positions available across major cities in Morocco.'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Delivery Driver - Casablanca',
      department: 'Operations',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '4,000-6,000 MAD/month'
    },
    {
      id: 2,
      title: 'Warehouse Assistant - Mohammedia',
      department: 'Logistics',
      type: 'Full-time',
      experience: 'Entry level',
      salary: '3,500-4,500 MAD/month'
    },
    {
      id: 3,
      title: 'Customer Service Representative - Rabat',
      department: 'Support',
      type: 'Full-time',
      experience: 'Entry level',
      salary: '3,800-5,000 MAD/month'
    },
    {
      id: 4,
      title: 'Operations Coordinator - Marrakech',
      department: 'Operations',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '5,000-7,000 MAD/month'
    },
    {
      id: 5,
      title: 'Fleet Supervisor - Tangier',
      department: 'Operations',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '6,000-8,000 MAD/month'
    },
    {
      id: 6,
      title: 'Driver Trainer - Casablanca',
      department: 'Training',
      type: 'Part-time',
      experience: '2+ years',
      salary: '4,500-5,500 MAD/month'
    }
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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of Morocco's leading delivery service and grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#open-positions" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </Link>
              <Link 
                to="/driver/become" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Become a Driver
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Employees</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Cities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Deliveries</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Job Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities in various departments across our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-3">
                  {category.positions} positions available
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {category.locations.slice(0, 2).map((location, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {location}
                    </span>
                  ))}
                  {category.locations.length > 2 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      +{category.locations.length - 2} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our current job openings and apply today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
              <div className="divide-y divide-border">
                {openPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                          <span>•</span>
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-primary">{position.salary}</span>
                        <Link 
                          to={`/jobs/${position.id}`}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          Apply
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Apply', description: 'Submit your application with resume and cover letter' },
              { step: 2, title: 'Review', description: 'Our HR team reviews your application and qualifications' },
              { step: 3, title: 'Interview', description: 'Participate in interviews with hiring managers' },
              { step: 4, title: 'Offer', description: 'Receive employment offer and join our team' }
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
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the next step in your career with Morocco's leading delivery service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#open-positions" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link 
                to="/driver/become" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Driver Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;