
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-light/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 hover:text-accent transition-colors duration-300"
      >
        <h3 className="text-lg font-light tracking-wide">{question}</h3>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-accent' : 'text-light-gray/50'
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
             <p className="pb-6 text-light-gray/80 font-light leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
