import React from 'react';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PropertyCardProps {
  key?: React.Key;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag?: string;
}

export default function PropertyCard({ image, title, location, price, beds, baths, sqft, tag }: PropertyCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tag && (
            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {tag}
            </span>
          )}
          <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            For Sale
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-brand-orange hover:text-white transition-colors">
          <Heart size={18} />
        </button>
        <div className="absolute bottom-4 left-4">
          <div className="bg-brand-dark/80 backdrop-blur-md text-white px-4 py-2 rounded-lg font-bold">
            {price}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display font-bold text-xl text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
          <p className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin size={14} className="text-brand-orange" />
            {location}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-50">
          <div className="flex flex-col items-center gap-1">
            <Bed size={18} className="text-brand-blue" />
            <span className="text-xs font-semibold text-gray-600">{beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath size={18} className="text-brand-blue" />
            <span className="text-xs font-semibold text-gray-600">{baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={18} className="text-brand-blue" />
            <span className="text-xs font-semibold text-gray-600">{sqft} sqft</span>
          </div>
        </div>

        <button className="w-full py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
