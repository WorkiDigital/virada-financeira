import React from 'react';

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <a
      {...props}
      className={`inline-block text-center w-full sm:w-auto px-10 py-4 bg-accent text-primary font-bold tracking-wide text-lg rounded-sm shadow-xl shadow-accent/20
                 hover:bg-light hover:text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
                 transform transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      {children}
    </a>
  );
};

export default CtaButton;
