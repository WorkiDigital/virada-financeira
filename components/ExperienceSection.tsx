import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CheckCircleIcon from './icons/CheckCircleIcon';

const features = [
  {
    name: 'Bloco 1: Mentalidade do Trader',
    description: 'Comportamento e disciplina.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Bloco 2: As 3 Análises',
    description: 'O tripé essencial para leitura e ação de mercado de forma consistente.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Bloco 3: Planejamento do Trader',
    description: 'Gestão financeira e decisão responsável.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Bloco 4: Operação Ao Vivo',
    description: 'Com Lázaro Fernandes. Entenda a aplicação real.',
    icon: CheckCircleIcon,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Section className="relative bg-black">
      <SectionHeader
        title="Transformação & A Experiência"
        subtitle={
          <>
            O mercado financeiro não é um jogo. É uma profissão. <br className="hidden sm:inline" />
            O objetivo não é ensinar você a procurar dinheiro fácil, mas sim entender que resultados sustentáveis começam com: <span className="font-semibold text-light">Mentalidade, Conhecimento, Planejamento, Estratégia e Execução.</span>
          </>
        }
      />
      
      <div className="mt-16 text-center">
        <h3 className="text-xl sm:text-2xl font-bold font-sans text-accent tracking-wide uppercase">
          O que vai acontecer na Imersão:
        </h3>
      </div>

      <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div 
            key={feature.name} 
            className="flex flex-col items-center text-center p-8 bg-black-soft rounded-2xl border border-gold-subtle transform transition-all duration-300 hover:-translate-y-1 hover:border-[#D98B1F] group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-black border border-gold-subtle text-accent mb-6 group-hover:scale-110 group-hover:border-[#D98B1F] transition-all duration-300">
              <feature.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold tracking-wide text-light">{feature.name}</h3>
            <p className="mt-3 text-sm sm:text-base font-light text-light-gray leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Speaker Feature Card */}
      <div className="mt-20 max-w-4xl mx-auto bg-black-soft border border-gold-subtle p-8 md:p-12 rounded-2xl text-center relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,139,31,0.08),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-accent mb-6 shadow-[0_0_25px_rgba(217,139,31,0.25)]">
            <img src="https://i.imgur.com/39oYFvF.jpeg" alt="Lázaro Fernandes" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-light mb-3">
            Sobre o Palestrante: <span className="text-accent">Lázaro Fernandes</span>
          </h3>
          <p className="text-base sm:text-lg font-light text-light-gray leading-relaxed max-w-2xl mx-auto mb-6">
            Lázaro possui 6 anos de experiência e mais de R$1 milhão gerados. A apresentação focará em sua visão humana e profissional, sem promessas irreais.
          </p>
          <a 
            href="https://www.instagram.com/lazarofernandes.of/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center text-accent hover:text-white transition-colors duration-300 font-semibold tracking-wider text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-accent">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @lazarofernandes.of
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;

