import React from 'react';
import CountdownTimer from './CountdownTimer';
import CtaButton from './CtaButton';

interface StickyHeaderProps {
  isVisible: boolean;
  eventDate: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ isVisible, eventDate }) => {
  return (
    <header
      aria-hidden={!isVisible}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-black/90 backdrop-blur-md border-b border-gold-subtle`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-1 flex justify-start">
             <div className="hidden sm:block">
                <p className="text-sm font-bold font-sans text-light whitespace-nowrap">
                  Imersão <span className="text-accent">Virada</span> Financeira
                </p>
                <p className="text-xs text-light-gray whitespace-nowrap">Fortaleza | 31 de Agosto</p>
             </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="hidden md:block">
              <CountdownTimer targetDate={eventDate} small />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
            <CtaButton 
               href="https://pay.cakto.com.br/d2usqge_1061139"
               target="_blank"
               rel="noopener noreferrer"
               className="px-6 py-2.5 text-sm !rounded-sm"
            >
              Garantir Vaga
            </CtaButton>
          </div>

        </div>
      </div>
    </header>
  );
};

export default StickyHeader;

