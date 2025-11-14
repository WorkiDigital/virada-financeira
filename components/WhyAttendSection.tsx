
import React from 'react';
import Section from './Section';
import { Testimonial } from '../types';
import QuoteIcon from './icons/QuoteIcon';

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
    <Section className="bg-dark/20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Por que participar?</h2>
        <p className="mt-4 text-lg text-light-gray max-w-3xl mx-auto">
          Centenas de alunos já transformaram sua forma de operar e investir. <span className="font-bold text-light">Agora é a sua vez.</span>
        </p>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="p-8 bg-primary rounded-3xl shadow-lg border border-light/10 flex flex-col">
            <QuoteIcon className="h-10 w-10 text-accent mb-4" />
            <blockquote className="text-light-gray flex-grow">"{testimonial.quote}"</blockquote>
            <footer className="mt-6">
              <p className="font-bold text-light">{testimonial.author}</p>
              <p className="text-sm text-light-gray/70">{testimonial.role}</p>
            </footer>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyAttendSection;
