import React from 'react';
import Section from './Section';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,139,31,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-sans text-light mb-6 leading-tight">
          A sua <span className="text-gold-metallic font-anton uppercase text-4xl sm:text-6xl md:text-7xl">Virada</span> Financeira <br className="hidden sm:block" /> Começa Agora
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-light text-light-gray leading-relaxed mb-10">
          Você já viu o que vai acontecer, já sabe para quem é e já entendeu a transformação. 
          O próximo passo depende apenas da sua decisão.
        </p>
        <a
          href="#ofertas"
          className="inline-flex items-center justify-center px-10 py-5 bg-[#D98B1F] text-[#050505] font-bold font-sans tracking-widest uppercase text-sm sm:text-base rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_4px_25px_rgba(217,139,31,0.35)] animate-subtle-pulse"
        >
          ESCOLHER MEU INGRESSO
        </a>
      </div>
    </Section>
  );
};

export default FinalCtaSection;

