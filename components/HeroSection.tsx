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
      <div className="absolute inset-0 z-10 bg-primary bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative z-20 text-center text-light px-6">
        
        <div className="mb-8">
            <h3 className="text-xl font-bold tracking-tight text-light mb-4">A imersão começa em:</h3>
            <CountdownTimer targetDate={eventDate} />
        </div>

        <p className="text-accent font-semibold tracking-[0.15em] text-xs sm:text-sm md:text-base uppercase mb-6">
          📅 31 DE AGOSTO &nbsp;|&nbsp; 🕠 17H30 &nbsp;|&nbsp; 📍 PIAZZA ALDEOTA — FORTALEZA
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-accent mb-6 leading-tight uppercase">
          Imersão<br/>Virada Financeira
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-light tracking-wide text-light max-w-4xl mx-auto leading-relaxed">
          Transforme sua visão sobre dinheiro, mercado e liberdade.
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg font-light text-light-gray/90 leading-relaxed">
          Uma experiência presencial para quem quer entender o mercado de forma profissional, desenvolver estratégia e descobrir um novo caminho para conquistar conhecimento e independência.
        </p>
        
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
              href="#ofertas"
              className="px-8 py-5 bg-accent text-primary font-bold tracking-wider uppercase text-sm rounded-sm hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] animate-subtle-pulse"
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