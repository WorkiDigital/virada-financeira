
import React from 'react';
import Section from './Section';
import { Testimonial } from '../types';
import QuoteIcon from './icons/QuoteIcon';
import SectionHeader from './SectionHeader';

const testimonials: Testimonial[] = [
  {
    quote: 'A imersão foi um divisor de águas. A clareza e a prática ao vivo me deram a confiança que eu precisava para operar de verdade.',
    author: 'Juliana S.',
    role: 'Aluna da Turma Anterior',
  },
  {
    quote: 'O networking que fiz aqui não tem preço. Estar cercado de pessoas com o mesmo objetivo acelera muito o aprendizado.',
    author: 'Marcos P.',
    role: 'Trader Profissional',
  },
  {
    quote: 'Finalmente entendi a lógica por trás dos movimentos do mercado. Deixei de ser um apostador para me tornar um estrategista.',
    author: 'Carlos A.',
    role: 'Iniciante no Mercado',
  },
];

const WhyAttendSection: React.FC = () => {
  return (
    <Section>
      <SectionHeader
        title="Por que participar?"
        subtitle={<>Centenas de alunos já transformaram sua forma de operar e investir. <span className="font-bold text-light">Agora é a sua vez.</span></>}
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="p-10 bg-surface/40 backdrop-blur-sm rounded-sm border border-light/5 flex flex-col relative group">
            <QuoteIcon className="h-8 w-8 text-accent/50 mb-6 absolute top-8 left-8" />
            <blockquote className="text-light-gray/90 font-light leading-relaxed flex-grow mt-10">"{testimonial.quote}"</blockquote>
            <footer className="mt-8 pt-6 border-t border-light/5">
              <p className="font-medium tracking-wide text-light">{testimonial.author}</p>
              <p className="text-xs tracking-wider uppercase text-accent mt-1">{testimonial.role}</p>
            </footer>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyAttendSection;
