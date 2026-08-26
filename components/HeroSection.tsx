import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  const eventDate = '2026-08-31T17:30:00-03:00';

  return (
    <section id="inscricao" className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-black">
      {/* Background Image with Cinematic Dark Gradient & Radial Lighting */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fm=webp&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/85 to-black pointer-events-none"></div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(217,139,31,0.12),transparent_65%)] pointer-events-none"></div>

      {/* Top Bar for Event Details with Safe Area Padding */}
      <div className="absolute top-0 left-0 w-full z-30 pt-3 sm:pt-4 pb-2.5 sm:pb-3 bg-black/90 backdrop-blur-md border-b border-gold-subtle text-center">
        <p className="text-accent font-semibold font-sans tracking-[0.12em] sm:tracking-[0.2em] text-[10px] sm:text-xs uppercase flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-0.5 px-3 sm:px-4">
          <span className="whitespace-nowrap">📅 31 DE AGOSTO</span>
          <span className="text-accent/40 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">🕠 17H30</span>
          <span className="text-accent/40 hidden sm:inline">|</span>
          <span className="whitespace-nowrap">📍 PIAZZA ALDEOTA — FORTALEZA</span>
        </p>
      </div>

      <div className="relative z-20 text-center text-light px-4 sm:px-6 max-w-5xl mx-auto w-full flex flex-col items-center mt-2 sm:mt-4">
        
        {/* Countdown Timer */}
        <div className="mb-4 sm:mb-8 flex flex-col items-center">
          <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-light/80 mb-2 sm:mb-3 uppercase">
            A imersão começa em:
          </h3>
          <div className="transform scale-85 sm:scale-100 origin-center">
            <CountdownTimer targetDate={eventDate} />
          </div>
        </div>

        {/* Brand Hierarchy: IMERSÃO / VIRADA / FINANCEIRA */}
        <div className="mb-4 sm:mb-8 flex flex-col items-center justify-center">
          <span className="text-light font-sans font-semibold tracking-[0.3em] sm:tracking-[0.5em] text-[11px] sm:text-sm md:text-base uppercase mb-0.5 sm:mb-1 opacity-90">
            Imersão
          </span>
          <span className="font-anton text-gold-metallic text-6xl sm:text-8xl md:text-9xl lg:text-[130px] leading-none uppercase tracking-tight drop-shadow-[0_10px_35px_rgba(217,139,31,0.3)] select-none">
            Virada
          </span>
          <span className="text-light font-sans font-semibold tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-lg md:text-xl uppercase mt-0.5 sm:mt-1 opacity-90">
            Financeira
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-light max-w-3xl mx-auto leading-snug sm:leading-relaxed">
          Transforme sua visão sobre dinheiro, mercado e liberdade.
        </h2>

        {/* Description */}
        <p className="mt-3 sm:mt-6 max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-light text-light-gray leading-relaxed">
          Uma experiência presencial para quem quer entender o mercado de forma profissional, desenvolver estratégia e descobrir um novo caminho para conquistar conhecimento e independência.
        </p>
        
        {/* Call to Action Button */}
        <div className="mt-6 sm:mt-10 flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <a 
            href="#ofertas" 
            className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-5 bg-[#D98B1F] text-[#050505] font-bold font-sans tracking-widest uppercase text-xs sm:text-base rounded-xl hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-[0_4px_25px_rgba(217,139,31,0.35)] animate-subtle-pulse flex items-center justify-center"
          >
            VER OPÇÕES DE INGRESSOS
          </a>
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm font-bold text-accent tracking-[0.2em] uppercase">
            [APENAS 50 VAGAS]
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

