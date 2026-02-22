import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-orange transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-orange transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-orange transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-orange transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Home</Link></li>
              <li><Link to="/properties" className="hover:text-brand-orange transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Featured Properties</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> About Company</Link></li>
              <li><Link to="/#services" className="hover:text-brand-orange transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Our Services</Link></li>
              <li><Link to="/about#contact" className="hover:text-brand-orange transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Contact Info</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={18} />
                </div>
                <span>123 Property Avenue, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                  <Phone size={18} />
                </div>
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                  <Mail size={18} />
                </div>
                <span>info@akindeboluwaji.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg mb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm">Subscribe to get the latest property updates and news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-brand-orange transition-all text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center hover:bg-brand-orange/80 transition-colors">
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Stay Connected</p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
          <p>© {new Date().getFullYear()} Akinde Boluwaji Home & Properties. RC 3692284.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
