
import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import CheckCircleIcon from './icons/CheckCircleIcon';

const features = [
  {
    name: 'Curso Online Gratuito (30/11 a 04/12)',
    description: 'Jornada completa para começar ou evoluir no mercado financeiro.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Imersão Presencial (07/12)',
    description: 'Conteúdo prático, ambiente imersivo e network de verdade.',
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
          <div key={feature.name} className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-light/10 transform transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-primary mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-light">{feature.name}</h3>
            <p className="mt-2 text-base text-light-gray">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
