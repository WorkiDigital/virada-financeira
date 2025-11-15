
import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import SectionHeader from './SectionHeader';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center">
      <SectionHeader
        title="Sua Virada Financeira Começa Agora"
        subtitle="Vagas limitadas para garantir proximidade, qualidade e resultado. Não deixe para depois."
      />
      <div className="mt-10">
         <CtaButton
            href="https://form.spotform.com.br/viradafinanceiraoficial"
            target="_blank"
            rel="noopener noreferrer"
         >
            Sim, quero garantir minha vaga!
        </CtaButton>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
