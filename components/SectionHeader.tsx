import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-extrabold text-light sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-light-gray max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
