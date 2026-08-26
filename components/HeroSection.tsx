import React from 'react';
import CtaButton from './CtaButton';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  // Ajustado: Mudei o ano para o futuro para garantir que o contador esteja sempre ativo para demonstração.
  const eventDate = '2026-08-31T17:30:00-03:00';

  return (
    <section id="inscricao" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fm=webp&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      />
      <div className="absolute inset-0 z-10 bg-primary/90 bg-[radial-gradient(circle_at_center,rgba(217,139,31,0.15),transparent_70%)]"></div>

      {/* Top Bar for Event Details */}
      <div className="absolute top-0 left-0 w-full z-30 py-3 bg-primary/60 backdrop-blur-md border-b border-light/5 text-center">
        <p className="text-accent font-semibold tracking-[0.2em] text-[10px] sm:text-xs uppercase flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
          <span>📅 31 DE AGOSTO</span>
          <span className="hidden sm:inline">|</span>
          <span>🕠 17H30</span>
          <span className="hidden sm:inline">|</span>
          <span>📍 PIAZZA ALDEOTA — FORTALEZA</span>
        </p>
      </div>

      <div className="relative z-20 text-center text-light px-6">
        
        <div className="mb-10 flex flex-col items-center mt-8">
            <h3 className="text-xs sm:text-sm font-medium tracking-widest text-light/80 mb-3 uppercase">A imersão começa em:</h3>
            <div className="transform scale-[0.65] sm:scale-75 origin-top">
              <CountdownTimer targetDate={eventDate} />
            </div>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center -mt-6">
            <span className="font-serif text-gold-metallic text-7xl sm:text-8xl md:text-[140px] leading-none uppercase tracking-normal mb-2 drop-shadow-2xl">
              Virada
            </span>
            <span className="text-light font-sans font-medium tracking-[0.3em] sm:tracking-[0.5em] text-lg sm:text-xl md:text-2xl uppercase">
              Financeira
            </span>
        </div>

        <h2 className="mt-8 text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-light max-w-4xl mx-auto leading-relaxed">
          Transforme sua visão sobre dinheiro, mercado e liberdade.
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg font-light text-light-gray/90 leading-relaxed">
          Uma experiência presencial para quem quer entender o mercado de forma profissional, desenvolver estratégia e descobrir um novo caminho para conquistar conhecimento e independência.
        </p>
        
        <div className="mt-10 flex flex-col items-center gap-4">
          <a 
              href="#ofertas" 
              className="px-10 py-5 bg-gold-metallic text-primary font-bold font-sans tracking-widest uppercase text-sm rounded-sm hover:brightness-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(217,139,31,0.25)] animate-subtle-pulse"
          >
              VER OPÇÕES DE INGRESSOS
          </a>
          <p className="mt-4 text-sm font-semibold text-accent tracking-widest uppercase">
            [APENAS 50 VAGAS]
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
