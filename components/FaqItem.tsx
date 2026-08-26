
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black-soft border border-gold-subtle rounded-sm overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6 hover:text-accent transition-colors duration-300"
      >
        <h3 className="text-base sm:text-lg font-bold font-sans tracking-wide text-light pr-4">{question}</h3>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 shrink-0 ${
            isOpen ? 'rotate-180 text-accent' : 'text-accent/60'
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-light-gray font-light text-sm sm:text-base leading-relaxed border-t border-gold-subtle/50 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

