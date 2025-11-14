
import React from 'react';
import Section from './Section';

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
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Para quem é este evento?</h2>
        <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">Se você se identifica com algum destes perfis, esta imersão é para você.</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.name} className="bg-surface rounded-3xl overflow-hidden shadow-lg border border-light/10 group">
            <img src={profile.imageUrl} alt={profile.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-accent">{profile.name}</h3>
              <p className="mt-2 text-light-gray">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;