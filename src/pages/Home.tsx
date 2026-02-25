import React from 'react';
import Hero from '@/src/components/Hero';
import SectionHeading from '@/src/components/SectionHeading';
import PropertyCard from '@/src/components/PropertyCard';
import ServiceCard from '@/src/components/ServiceCard';
import TestimonialCard from '@/src/components/TestimonialCard';
import { Building2, Home as HomeIcon, Key, Users, Briefcase, Ruler, ArrowRight, ShieldCheck, CheckCircle2, Waves, Shield, Zap, Car, MapPin } from 'lucide-react';
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

const spotlightProperties = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    title: "The Grand Horizon Estate",
    location: "Banana Island, Lagos",
    price: "₦1,200,000,000",
    description: "An architectural masterpiece nestled in the heart of Banana Island. This ultra-modern smart home offers unparalleled luxury with panoramic views of the Lagos lagoon.",
    features: ["Smart Home Automation", "Private Infinity Pool", "24/7 Armed Security", "Cinema Room", "Underground Parking"],
    beds: 7,
    baths: 8,
    sqft: 8500
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    title: "Azure Waterfront Duplex",
    location: "Eko Atlantic City, Lagos",
    price: "₦850,000,000",
    description: "Experience the pinnacle of coastal living in this stunning waterfront duplex. Designed with floor-to-ceiling glass walls to maximize natural light and ocean views.",
    features: ["Ocean Front View", "Central Cooling System", "Gym & Spa", "Automated Gates", "Solar Power Backup"],
    beds: 5,
    baths: 6,
    sqft: 5200
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" 
                      alt="African Lead Engineer" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?auto=format&fit=crop&q=80&w=400" 
                      alt="African Construction Expert" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4 pt-12"
                >
                  <div className="rounded-3xl overflow-hidden shadow-lg h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=400" 
                      alt="African Architect" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=400" 
                      alt="African Engineering Team" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-orange text-white p-8 rounded-full shadow-2xl border-8 border-white flex flex-col items-center justify-center w-40 h-40">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">Years of<br/>Excellence</div>
              </div>
            </div>

            <div className="space-y-8">
              <SectionHeading 
                align="left"
                subtitle="Excellence in Engineering"
                title="Pioneering Modern Real Estate & Construction"
                description="AKINDE BOLUWAJI – HOME & PROPERTIES is a premier multi-disciplinary firm where engineering precision meets architectural artistry. With RC 3692284, we have established ourselves as a benchmark for quality and structural integrity in the Nigerian real estate landscape."
              />
              
              <p className="text-gray-600 leading-relaxed">
                Our expertise spans the entire project lifecycle—from conceptual design and structural engineering to project management and property maintenance. We pride ourselves on a team of certified African professionals who are committed to delivering sustainable, world-class housing solutions that redefine the standard of luxury and safety.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
                    <HomeIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Quality Homes</h4>
                    <p className="text-gray-500 text-sm">Built with precision and modern aesthetics.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Team</h4>
                    <p className="text-gray-500 text-sm">Professional engineers and consultants.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link 
                  to="/about"
                  className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2 group"
                >
                  Learn More About Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                      "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=100",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                    ].map((src, i) => (
                      <img 
                        key={i}
                        src={src} 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        alt="Team Member"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Join 1.2k+ Satisfied Clients
                  </div>
                </div>
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Our Workflow"
            title="Our Construction Process"
            description="We follow a systematic approach to ensure every project is delivered on time and with the highest quality."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
            
            {[
              { icon: Users, title: "Consultation", desc: "Understanding your vision and requirements." },
              { icon: Ruler, title: "Design", desc: "Architectural planning and structural design." },
              { icon: Building2, title: "Construction", desc: "Building with precision and quality materials." },
              { icon: ShieldCheck, title: "Quality Check", desc: "Rigorous inspection and safety standards." },
              { icon: Key, title: "Handover", desc: "Delivering your dream property on time." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center text-brand-blue shadow-lg group-hover:border-brand-orange transition-colors">
                  <step.icon size={24} />
                </div>
                <div className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold absolute -top-2 -right-2 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:top-12">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg text-brand-dark pt-4">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Spotlight Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Premium Collection"
            title="Property Spotlight"
            description="A closer look at our most exclusive and luxurious listings currently on the market."
          />
          
          <div className="space-y-24 mt-16">
            {spotlightProperties.map((property, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="flex-1 relative group">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-8 left-8 bg-brand-orange text-white px-6 py-2 rounded-full font-bold shadow-xl">
                    Spotlight
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm">
                      <MapPin size={16} />
                      {property.location}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark">
                      {property.title}
                    </h3>
                    <div className="text-3xl font-bold text-brand-blue">
                      {property.price}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {property.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                          <CheckCircle2 size={14} />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-8 py-8 border-y border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-blue">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">Beds</div>
                        <div className="font-bold">{property.beds} Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-blue">
                        <Key size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">Baths</div>
                        <div className="font-bold">{property.baths} Bathrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-blue">
                        <Ruler size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase">Area</div>
                        <div className="font-bold">{property.sqft} sqft</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20">
                      View Details
                    </button>
                    <button className="border-2 border-brand-dark text-brand-dark px-10 py-4 rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </motion.div>
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
                  href="tel:+2348035911163"
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Call: 0803 591 1163
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
