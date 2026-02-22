import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Luxury Home" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold backdrop-blur-sm">
              <ShieldCheck size={16} className="text-brand-orange" />
              <span>Trusted Real Estate Excellence</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-[1.1]">
              Building Your <span className="text-brand-orange">Future</span>, One Brick at a Time.
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Discover premium properties and world-class construction services tailored to your lifestyle. We don't just build houses; we create homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/properties"
                className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-orange/90 transition-all group shadow-xl shadow-brand-orange/20"
              >
                Explore Properties
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Our Services
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Properties Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full border border-white/5 bg-gradient-to-br from-brand-blue/20 to-transparent backdrop-blur-3xl"
      />
    </section>
  );
}
