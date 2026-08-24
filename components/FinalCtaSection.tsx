import React from 'react';
import Section from './Section';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center relative py-24">
      <div className="absolute inset-0 bg-surface/30 backdrop-blur-3xl rounded-sm border-t border-b border-accent/10 pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-5xl font-serif text-accent mb-6 leading-tight">
          A sua Virada Financeira <br className="hidden sm:block" /> Começa Agora
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg font-light text-light-gray/90 leading-relaxed mb-10">
          Você já viu o que vai acontecer, já sabe para quem é e já entendeu a transformação. 
          O próximo passo depende apenas da sua decisão.
        </p>
        <a
          href="#ofertas"
          className="inline-block px-10 py-5 bg-accent text-primary font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] animate-subtle-pulse"
        >
          ESCOLHER MEU INGRESSO
        </a>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
