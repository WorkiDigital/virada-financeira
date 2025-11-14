
import React from 'react';

const CoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 018.25 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12.75h.75a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25 2.25h-.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 4.5v-1.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5" />
    </svg>
);
export default CoffeeIcon;
