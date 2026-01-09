import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      content: '+212 522-123-456',
      description: 'Available 24/7 for urgent inquiries',
      href: 'tel:+212522123456'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      content: 'support@swift-delivery.ma',
      description: 'General inquiries and support',
      href: 'mailto:support@swift-delivery.ma'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      content: 'Chat with us',
      description: 'Instant response during business hours',
      href: '#'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Office Location',
      content: 'Casablanca, Morocco',
      description: 'Main headquarters and operations center',
      href: '#'
    }
  ];

  const officeLocations = [
    {
      city: 'Casablanca',
      address: 'Avenue Mohammed V, Business District',
      phone: '+212 522-123-456',
      hours: '24/7'
    },
    {
      city: 'Rabat',
      address: 'Angle Avenue Hassan II et Rue de la Liberté',
      phone: '+212 537-123-456',
      hours: '24/7'
    },
    {
      city: 'Marrakech',
      address: 'Quartier Gueliz, Boulevard Mohamed Zefran',
      phone: '+212 524-123-456',
      hours: '24/7'
    },
    {
      city: 'Tangier',
      address: 'Zone Industrielle Tanger Free Port',
      phone: '+212 539-123-456',
      hours: '24/7'
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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have questions about our delivery services? Reach out to our support team anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Methods
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <Link 
                  to={method.href}
                  className="block text-lg font-medium text-primary hover:underline mb-2"
                >
                  {method.content}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-success/10 text-success rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Our Offices</h2>
                  
                  <div className="space-y-6">
                    {officeLocations.map((location, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 last:pb-0 border-b border-border/50 last:border-0">
                        <div className="mt-1 text-primary">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{location.city}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                          <p className="text-sm font-medium text-primary">{location.phone}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{location.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card p-8 rounded-xl shadow-card border border-border/50">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Business Hours</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">24/7</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">Emergency Support</h3>
                    <p className="text-sm text-muted-foreground">
                      For urgent delivery issues or emergencies, please call our 24/7 hotline directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How long does delivery take?',
                answer: 'Delivery times vary by location but typically range from 24-72 hours for most major cities in Morocco.'
              },
              {
                question: 'What are your shipping rates?',
                answer: 'Shipping rates depend on distance and package size. Visit our pricing page for detailed information.'
              },
              {
                question: 'Can I track my package?',
                answer: 'Yes, all packages can be tracked in real-time using our tracking system.'
              },
              {
                question: 'Do you operate on weekends?',
                answer: 'Yes, we provide delivery services 24/7, including weekends and holidays.'
              },
              {
                question: 'What if my package is damaged?',
                answer: 'Contact us immediately with photos of the damage, and we\'ll work to resolve the issue promptly.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card border border-border/50"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is available around the clock to help with your delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="tel:+212522123456" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
              <Link 
                to="/live-chat" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;