
import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import MapPinIcon from './icons/MapPinIcon';

const EventDetailsSection: React.FC = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Detalhes do Evento</h2>
          <div className="mt-8 space-y-4 text-lg text-light-gray">
            <p><strong className="text-light">Data:</strong> 07 de Dezembro</p>
            <p><strong className="text-light">Horário:</strong> 14:30</p>
            <div className="flex items-start justify-center md:justify-start">
               <MapPinIcon className="h-6 w-6 text-accent mt-1 mr-2 flex-shrink-0" />
               <div>
                  <p><strong className="text-light">Local:</strong> Hotel Gran Mareiro</p>
                  <p className="text-base text-light-gray/70">Rua Oswaldo Araújo, 100 - Praia do Futuro, Fortaleza - CE, 60177-325</p>
               </div>
            </div>
            <p className="font-bold text-accent">Presencial | Vagas Limitadas</p>
          </div>
          <div className="mt-10">
            <a href="#inscricao">
              <CtaButton>Inscreva-se Agora</CtaButton>
            </a>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-light/10 h-80 md:h-full">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Gran Mareiro em Fortaleza" className="w-full h-full object-cover" />
        </div>
      </div>
    </Section>
  );
};

export default EventDetailsSection;
