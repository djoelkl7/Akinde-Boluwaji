import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '@/src/components/SectionHeading';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">About Our Company</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building excellence and managing properties with integrity since inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-gray-50 rounded-[2rem] space-y-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To provide high-quality, affordable housing and professional real estate services that exceed our clients' expectations.
              </p>
            </div>
            <div className="p-10 bg-brand-blue text-white rounded-[2rem] space-y-6 shadow-xl shadow-brand-blue/20">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the leading real estate and construction firm in Nigeria, recognized for innovation, quality, and professional integrity.
              </p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[2rem] space-y-6">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark">Core Values</h3>
              <p className="text-gray-500 leading-relaxed">
                Integrity, Excellence, Professionalism, and Customer Satisfaction are the pillars of our business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Our Experts"
            title="Meet Our Professional Team"
            description="Our team consists of highly skilled engineers, architects, and consultants dedicated to excellence."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Engr. Boluwaji Akinde",
                role: "CEO & Lead Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Arc. Funmi Adeyemi",
                role: "Senior Architect",
                image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Engr. Kofi Mensah",
                role: "Structural Engineer",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Tunde Olatunji",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h4>
                  <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="p-12 md:p-20 bg-brand-blue text-white space-y-12">
                <div>
                  <h2 className="text-4xl font-display font-bold mb-6">Get In Touch</h2>
                  <p className="text-white/70">
                    Have questions or want to start a project? Our team is ready to help you.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Location</h4>
                      <p className="text-white/70">123 Property Avenue, Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                      <p className="text-white/70">+234 800 000 0000</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Address</h4>
                      <p className="text-white/70">info@akindeboluwaji.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-white/70">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-12 md:p-20">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Subject</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none">
                      <option>Property Inquiry</option>
                      <option>Construction Project</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-5 bg-brand-orange text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20">
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
