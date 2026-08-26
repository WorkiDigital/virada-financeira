import React from 'react';

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  if (variant === 'secondary') {
    return (
      <a
        {...props}
        className={`inline-flex items-center justify-center text-center w-full sm:w-auto px-8 py-4 bg-transparent border border-gold-subtle text-light font-semibold font-sans tracking-wider text-sm sm:text-base rounded-sm hover:bg-[#D98B1F] hover:text-[#050505] hover:border-[#D98B1F] focus:outline-none focus:ring-1 focus:ring-accent transform transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center text-center w-full sm:w-auto px-10 py-4 bg-[#D98B1F] text-[#050505] font-bold font-sans tracking-wider uppercase text-sm sm:text-base rounded-sm shadow-[0_4px_20px_rgba(217,139,31,0.25)] hover:brightness-110 focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#050505] transform transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;

