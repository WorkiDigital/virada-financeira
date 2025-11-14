import React from 'react';

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-1.063M15 19.128v-3.86a2.25 2.25 0 0 0-4.5 0v3.86m0 0a9.337 9.337 0 0 0-4.121-1.063 9.38 9.38 0 0 0-2.625.372M15 19.128a2.25 2.25 0 0 1-4.5 0M9 10.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm12 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM9 3.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
  </svg>
);

export default UsersIcon;