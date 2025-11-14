import React from 'react';

const CoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 5.25v2.25m0 0l-1.5 1.5-1.5-1.5V5.25m3 0V3.75c0-.621-.504-1.125-1.125-1.125H10.875c-.621 0-1.125.504-1.125 1.125v1.5m3 0a.375.375 0 0 1-.375.375H10.125a.375.375 0 0 1-.375-.375m3 0M3.75 5.25h16.5c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.75c-.621 0-1.125-.504-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125Z" />
  </svg>
);
export default CoffeeIcon;