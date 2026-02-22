import React, { useState } from 'react';
import SectionHeading from '@/src/components/SectionHeading';
import PropertyCard from '@/src/components/PropertyCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const allProperties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    title: "Modern Luxury Villa",
    location: "Lekki Phase 1, Lagos",
    price: "₦250,000,000",
    beds: 5,
    baths: 6,
    sqft: 4500,
    tag: "New",
    type: "Villa"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=800",
    title: "Contemporary Duplex",
    location: "Ikoyi, Lagos",
    price: "₦450,000,000",
    beds: 6,
    baths: 7,
    sqft: 6200,
    tag: "Featured",
    type: "Duplex"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
    title: "Elegant Family Home",
    location: "Victoria Island, Lagos",
    price: "₦180,000,000",
    beds: 4,
    baths: 4,
    sqft: 3200,
    type: "House"
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
    title: "Urban Apartment",
    location: "Surulere, Lagos",
    price: "₦85,000,000",
    beds: 3,
    baths: 3,
    sqft: 1800,
    type: "Apartment"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    title: "Luxury Penthouse",
    location: "Eko Atlantic, Lagos",
    price: "₦750,000,000",
    beds: 4,
    baths: 5,
    sqft: 5500,
    tag: "Exclusive",
    type: "Penthouse"
  },
  {
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
    title: "Suburban Bungalow",
    location: "Ajah, Lagos",
    price: "₦65,000,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: "Bungalow"
  }
];

export default function Properties() {
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Villa', 'Duplex', 'House', 'Apartment', 'Penthouse', 'Bungalow'];

  const filteredProperties = filter === 'All' 
    ? allProperties 
    : allProperties.filter(p => p.type === filter);

  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Our Catalog"
          title="Find Your Perfect Property"
          description="Browse through our extensive list of properties available for sale and rent."
        />

        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by location, title, or keyword..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    filter === type 
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 px-6 py-4 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-dark/90 transition-all">
              <SlidersHorizontal size={18} />
              Advanced
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
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

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-16 gap-2">
          <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-brand-dark hover:bg-brand-blue hover:text-white transition-all">1</button>
          <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-brand-dark hover:bg-brand-blue hover:text-white transition-all">2</button>
          <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-brand-dark hover:bg-brand-blue hover:text-white transition-all">3</button>
        </div>
      </div>
    </main>
  );
}
