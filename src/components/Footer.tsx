import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="font-display font-bold text-2xl flex flex-col leading-tight">
                <span>AKINDE BOLUWAJI</span>
                <span className="text-xs tracking-[0.2em] text-brand-orange">HOME & PROPERTIES</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in real estate and construction excellence. We build dreams and manage properties with integrity and professional precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-orange transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/properties" className="hover:text-brand-orange transition-colors">Featured Properties</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Company</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">Our Services</Link></li>
              <li><Link to="/about#contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Property Development</li>
              <li>Real Estate Consultancy</li>
              <li>Building Construction</li>
              <li>Property Management</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-brand-orange shrink-0" />
                <span>123 Property Avenue, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <span>info@akindeboluwaji.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Akinde Boluwaji Home & Properties. RC 3692284. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
