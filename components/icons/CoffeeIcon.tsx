
import React from 'react';

const CoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a6 6 0 1 1 12 0v5.25a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12H18a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h.75a2.25 2.25 0 0 0 2.25-2.25v0a2.25 2.25 0 0 0-2.25-2.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75s.375-.75 1.125-.75m2.25 0s.75.75 1.125.75m-4.5 0s.375.75 1.125.75m2.25 0s.75-.75 1.125-.75" />
  </svg>
);

export default CoffeeIcon;
