import React from 'react';
import CountdownTimer from './CountdownTimer';

interface StickyHeaderProps {
  isVisible: boolean;
  eventDate: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ isVisible, eventDate }) => {
  return (
    <header
      aria-hidden={!isVisible}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } bg-black/95 backdrop-blur-md border-b border-[#D98B1F]/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand Logo & Name */}
          <a href="#inscricao" className="flex items-center gap-2 shrink-0 group py-1">
            <div className="w-8 h-8 rounded-lg bg-[#14100C] border border-[#D98B1F]/50 flex items-center justify-center text-accent font-anton text-base shadow-sm group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <p className="text-xs sm:text-sm font-bold font-sans text-light tracking-wide uppercase leading-tight">
                Imersão <span className="text-accent font-anton tracking-normal">Virada</span>
              </p>
              <p className="text-[10px] text-light-gray hidden xs:block leading-none mt-0.5">31 Ago • Fortaleza</p>
            </div>
          </a>

          {/* Center Countdown - Desktop & Tablet */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <CountdownTimer targetDate={eventDate} small />
          </div>
          
          {/* Action Button */}
          <div className="flex items-center shrink-0">
            <a 
              href="#ofertas"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 bg-[#D98B1F] text-[#050505] font-bold font-sans tracking-wider uppercase text-xs sm:text-sm rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_2px_15px_rgba(217,139,31,0.3)] whitespace-nowrap"
            >
              Garantir Vaga
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default StickyHeader;

