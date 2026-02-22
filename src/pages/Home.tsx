import React from 'react';
import Hero from '@/src/components/Hero';
import SectionHeading from '@/src/components/SectionHeading';
import PropertyCard from '@/src/components/PropertyCard';
import ServiceCard from '@/src/components/ServiceCard';
import TestimonialCard from '@/src/components/TestimonialCard';
import { Building2, Home as HomeIcon, Key, Users, Briefcase, Ruler, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    title: "Modern Luxury Villa",
    location: "Lekki Phase 1, Lagos",
    price: "₦250,000,000",
    beds: 5,
    baths: 6,
    sqft: 4500,
    tag: "New"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=800",
    title: "Contemporary Duplex",
    location: "Ikoyi, Lagos",
    price: "₦450,000,000",
    beds: 6,
    baths: 7,
    sqft: 6200,
    tag: "Featured"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
    title: "Elegant Family Home",
    location: "Victoria Island, Lagos",
    price: "₦180,000,000",
    beds: 4,
    baths: 4,
    sqft: 3200
  }
];

const services = [
  {
    icon: Building2,
    title: "Property Development",
    description: "We specialize in developing high-end residential and commercial properties with modern architectural designs."
  },
  {
    icon: Ruler,
    title: "Building Construction",
    description: "Our construction team delivers quality structures using the best materials and engineering practices."
  },
  {
    icon: Briefcase,
    title: "Real Estate Consultancy",
    description: "Expert advice on property investment, market trends, and legal requirements for real estate in Nigeria."
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive management services to ensure your property maintains its value and generates consistent returns."
  }
];

const testimonials = [
  {
    name: "Oluwaseun Adeyemi",
    role: "Homeowner",
    content: "Akinde Boluwaji Home & Properties delivered my dream home exactly as promised. Their attention to detail in construction is unmatched.",
    image: "https://i.pravatar.cc/150?u=olu"
  },
  {
    name: "Chidi Okafor",
    role: "Investor",
    content: "I've worked with many real estate firms, but their consultancy services provided me with the insights I needed for a high-ROI investment.",
    image: "https://i.pravatar.cc/150?u=chidi"
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Building" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-20 bg-brand-orange text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-80">Years of Experience</div>
              </div>
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-brand-blue/5 rounded-full -z-0" />
            </div>

            <div className="space-y-8">
              <SectionHeading 
                align="left"
                subtitle="About Our Company"
                title="We are the Leaders in Real Estate & Construction"
                description="AKINDE BOLUWAJI – HOME & PROPERTIES is a premier real estate firm dedicated to providing top-tier housing solutions and construction services. With RC 3692284, we are a legally recognized entity committed to integrity and excellence."
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                    <HomeIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Quality Homes</h4>
                    <p className="text-gray-500 text-sm">Built with precision and modern aesthetics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                    <p className="text-gray-500 text-sm">Professional engineers and consultants.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-orange transition-colors group"
                >
                  Learn More About Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="What We Do"
            title="Our Professional Services"
            description="We offer a wide range of services in the real estate and construction industry, ensuring quality at every step."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionHeading 
              align="left"
              subtitle="Featured Listings"
              title="Explore Our Best Properties"
              description="Handpicked premium properties in prime locations across Nigeria."
            />
            <Link 
              to="/properties"
              className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 mb-12"
            >
              View All Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard 
                key={index}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                tag={property.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Completed Projects", value: "150+" },
              { label: "Happy Clients", value: "1200+" },
              { label: "Awards Won", value: "25+" },
              { label: "Properties Managed", value: "300+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-brand-orange font-semibold uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="We take pride in our work and the relationships we build with our clients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/10 skew-x-12 translate-x-1/4" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Ready to find your <span className="text-brand-orange">dream home?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Contact us today for a free consultation and let's start building your future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about#contact"
                  className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all text-center"
                >
                  Contact Us Now
                </Link>
                <a 
                  href="tel:+2348000000000"
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Call: +234 800 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
