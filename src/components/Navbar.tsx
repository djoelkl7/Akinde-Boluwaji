import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { 
    name: 'About', 
    path: '/about',
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/#services' },
    ]
  },
  { name: 'Contact', path: '/about#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      {/* Top Bar */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs text-white/80">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone size={12} /> +234 800 000 0000</span>
              <span className="flex items-center gap-1"><Mail size={12} /> info@akindeboluwaji.com</span>
            </div>
            <div>RC 3692284</div>
          </div>
        </div>
      )}

      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-display font-bold text-xl md:text-2xl flex flex-col leading-tight">
            <span className={cn(scrolled ? "text-brand-blue" : "text-white")}>AKINDE BOLUWAJI</span>
            <span className={cn("text-xs tracking-[0.2em]", scrolled ? "text-brand-orange" : "text-brand-orange")}>HOME & PROPERTIES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setAboutDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setAboutDropdownOpen(false)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-brand-orange flex items-center gap-1",
                      scrolled ? "text-brand-dark" : "text-white",
                      location.pathname === link.path && "text-brand-orange"
                    )}
                  >
                    {link.name}
                    <ChevronDown size={14} className={cn("transition-transform", aboutDropdownOpen && "rotate-180")} />
                  </Link>
                  
                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-brand-dark hover:bg-gray-50 hover:text-brand-orange transition-colors"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-orange",
                    scrolled ? "text-brand-dark" : "text-white",
                    location.pathname === link.path && "text-brand-orange"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/about#contact"
            className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", scrolled ? "text-brand-dark" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col">
                      <div className="text-brand-dark font-bold py-2 border-b border-gray-100 flex justify-between items-center">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-gray-600 text-sm py-2 border-b border-gray-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-brand-dark font-medium py-2 border-b border-gray-100 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/about#contact"
                className="bg-brand-blue text-white px-6 py-3 rounded-lg text-center font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
