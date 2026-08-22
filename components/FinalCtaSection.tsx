
import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import SectionHeader from './SectionHeader';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center relative">
      <div className="absolute inset-0 bg-surface/30 backdrop-blur-3xl rounded-sm border-t border-b border-accent/10 pointer-events-none"></div>
      <div className="relative z-10 py-12">
        <SectionHeader
          title="Sua Virada Financeira Começa Agora"
          subtitle="Vagas limitadas para garantir proximidade, qualidade e resultado. Não deixe para depois."
        />
        <div className="mt-12">
           <CtaButton
              href="https://form.spotform.com.br/viradafinanceiraoficial"
              target="_blank"
              rel="noopener noreferrer"
           >
              Sim, quero garantir minha vaga
          </CtaButton>
        </div>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
