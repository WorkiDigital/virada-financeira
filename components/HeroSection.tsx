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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      />
      <div className="absolute inset-0 z-10 bg-primary bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative z-20 text-center text-light px-6">
        
        <div className="mb-8">
            <h3 className="text-xl font-bold tracking-tight text-light mb-4">A imersão começa em:</h3>
            <CountdownTimer targetDate={eventDate} />
        </div>

        <p className="text-accent font-semibold tracking-[0.2em] text-sm uppercase mb-6">FORTALEZA | 31 DE AGOSTO</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-accent mb-6 leading-tight">
          Virada Financeira 2026
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-light">
          Destrave seus ganhos no mercado financeiro
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl font-light text-light-gray/90 leading-relaxed">
          Aprenda com quem vive o mercado todos os dias em uma imersão presencial e exclusiva para você atingir a consistência.
        </p>
        
        <div className="mt-10">
            <CtaButton 
                href="https://pay.cakto.com.br/d2usqge_1061139"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-subtle-pulse">
                Quero Garantir Minha Vaga
            </CtaButton>
          <p className="mt-4 text-sm text-light-gray/80">Vagas limitadas! Garanta a sua agora.</p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;