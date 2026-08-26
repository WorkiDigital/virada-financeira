
import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';

const profiles = [
  {
    name: 'Iniciantes',
    description: 'Que querem entrar com segurança no mundo das finanças e construir uma base sólida.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fm=webp&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Traders',
    description: 'Que buscam destravar resultados, alcançar a consistência e aprimorar suas estratégias.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fm=webp&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Visionários',
    description: 'Que sabem que está na hora de mudar de patamar e viver o mercado de forma real e lucrativa.',
    imageUrl: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=800&auto=format&fm=webp&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const AudienceSection: React.FC = () => {
  return (
    <Section className="bg-black">
      <SectionHeader
        title="Para quem é este evento?"
        subtitle="Se você se identifica com algum destes perfis, esta imersão é para você."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.name} className="bg-black-soft rounded-sm overflow-hidden border border-gold-subtle group shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D98B1F] hover:-translate-y-1">
            <div className="overflow-hidden h-56 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black-soft via-transparent to-transparent z-10"></div>
              <img src={profile.imageUrl} alt={profile.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-sans text-accent">{profile.name}</h3>
              <p className="mt-3 text-light-gray font-light leading-relaxed text-sm sm:text-base">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AudienceSection;

