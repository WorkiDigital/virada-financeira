
import React from 'react';
import Section from './Section';
import FaqItemComponent from './FaqItem';
import { FaqItem } from '../types';
import SectionHeader from './SectionHeader';

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
    answer: 'Para garantir sua vaga, basta escolher sua modalidade de ingresso (Platinum ou Ouro) e concluir a inscrição nesta página. As vagas são estritamente limitadas.',
  },
  {
    question: 'Quantas vagas estão disponíveis?',
    answer: 'As vagas são estritamente limitadas a apenas 50 participantes no total para garantir uma experiência exclusiva e próxima.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <Section className="bg-black">
      <SectionHeader
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas antes de garantir sua vaga exclusiva."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <FaqItemComponent key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;

