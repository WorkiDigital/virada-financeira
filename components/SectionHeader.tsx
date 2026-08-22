import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl font-serif text-accent sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-6 text-lg font-light text-light-gray/90 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
