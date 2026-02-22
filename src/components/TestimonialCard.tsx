import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  key?: React.Key;
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
      <Quote className="absolute top-6 right-8 text-brand-blue/10" size={60} />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
        ))}
      </div>

      <p className="text-gray-600 italic mb-8 relative z-10">"{content}"</p>

      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-brand-dark">{name}</h4>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
}
