import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, description, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-12 space-y-4",
      align === 'center' ? "mx-auto text-center" : "text-left"
    )}>
      {subtitle && (
        <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.3em]">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-display font-bold text-3xl md:text-5xl leading-tight",
        light ? "text-white" : "text-brand-dark"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-gray-400" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
