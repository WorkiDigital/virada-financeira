
import React from 'react';

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.587 9.094 9.094 0 0 0 .587-3.742M6.28 6.28A9.094 9.094 0 0 1 12 4.5c4.97 0 9 4.03 9 9a9.094 9.094 0 0 1-1.758 5.445M12 18a9.094 9.094 0 0 0-5.445-1.758" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export default UsersIcon;
