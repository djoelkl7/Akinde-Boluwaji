import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  key?: React.Key;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-blue/20 transition-all group"
    >
      <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="font-display font-bold text-xl text-brand-dark mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
