import React from 'react';

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <a
      {...props}
      className={`inline-block text-center w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold text-lg rounded-2xl shadow-lg shadow-accent/30
                 hover:brightness-105 hover:text-light focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50
                 transform transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
