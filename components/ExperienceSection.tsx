
import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CheckCircleIcon from './icons/CheckCircleIcon';

const features = [
  {
    name: 'Jornada Pré-evento',
    description: 'Acesso a conteúdo preparatório para chegar afiado na imersão.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Imersão Presencial (31/08)',
    description: 'Conteúdo prático, ambiente imersivo e network de alto nível.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Operações ao Vivo',
    description: 'Veja na prática como aplicar os conceitos em tempo real.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Coffee Break Incluso',
    description: 'Momento para trocar experiências, conexões e fortalecer sua caminhada.',
    icon: CheckCircleIcon,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Section>
      <SectionHeader
        title="O que você vai encontrar nessa experiência"
        subtitle="Uma jornada completa para sua transformação no mercado financeiro."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center text-center p-8 bg-surface/50 rounded-sm border border-light/5 transform transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:border-accent/30 group">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary border border-accent/20 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium tracking-wide text-light">{feature.name}</h3>
            <p className="mt-3 text-base font-light text-light-gray/80 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
