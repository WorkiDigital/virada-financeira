
import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';

const FinalCtaSection: React.FC = () => {
  return (
    <Section className="text-center">
      <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Sua Virada Financeira Começa Agora</h2>
      <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">
        Vagas limitadas para garantir proximidade, qualidade e resultado. Não deixe para depois.
      </p>
      <div className="mt-10">
         <a href="#inscricao">
            <CtaButton>Sim, quero garantir minha vaga!</CtaButton>
        </a>
      </div>
    </Section>
  );
};

export default FinalCtaSection;
