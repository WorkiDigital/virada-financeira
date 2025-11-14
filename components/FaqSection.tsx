
import React from 'react';
import Section from './Section';
import FaqItemComponent from './FaqItem';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: 'Preciso ter experiência para participar?',
    answer: 'Não! A imersão é projetada tanto para iniciantes que desejam começar da forma correta, quanto para traders que já operam e querem aprimorar seus resultados.',
  },
  {
    question: 'O que está incluído no evento presencial?',
    answer: 'Sua inscrição garante acesso ao curso online preparatório, à imersão presencial completa de um dia, participação nas operações ao vivo e o coffee break para networking.',
  },
  {
    question: 'Como posso garantir minha vaga?',
    answer: 'Para garantir sua vaga, basta preencher o formulário de inscrição nesta página. Nossa equipe entrará em contato para os próximos passos. As vagas são preenchidas por ordem de inscrição.',
  },
  {
    question: 'Quantas vagas estão disponíveis?',
    answer: 'As vagas são estritamente limitadas para garantir uma experiência de alta qualidade, com proximidade e interação. Recomendamos que você se inscreva o mais rápido possível para não ficar de fora.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Perguntas Frequentes</h2>
        <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">Tire suas últimas dúvidas antes de garantir sua vaga.</p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <FaqItemComponent key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;