
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-light/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <h3 className="text-lg font-medium text-light">{question}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-light-gray transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
             <p className="pb-4 text-light-gray">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
