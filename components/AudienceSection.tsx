
import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

const profiles = [
  {
    name: 'Iniciantes',
    description: 'Que querem entrar com segurança no mundo das finanças e construir uma base sólida.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Traders',
    description: 'Que buscam destravar resultados, alcançar a consistência e aprimorar suas estratégias.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Curiosos e Visionários',
    description: 'Que sabem que está na hora de mudar de patamar e viver o mercado de forma real e lucrativa.',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const AudienceSection: React.FC = () => {
  return (
    <Section>
      <SectionHeader
        title="Para quem é este evento?"
        subtitle="Se você se identifica com algum destes perfis, esta imersão é para você."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.name} className="bg-surface/50 backdrop-blur-sm rounded-sm overflow-hidden border border-light/5 group">
            <div className="overflow-hidden h-56">
                <img src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif text-accent">{profile.name}</h3>
              <p className="mt-4 text-light-gray/80 font-light leading-relaxed">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;
