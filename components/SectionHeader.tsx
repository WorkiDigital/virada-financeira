import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
  highlight?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-light tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm sm:text-base md:text-lg font-light text-light-gray leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;

