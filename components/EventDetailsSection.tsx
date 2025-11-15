import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import MapPinIcon from './icons/MapPinIcon';

const EventDetailsSection: React.FC = () => {
  const locationName = "Gran Mareiro Eventos";
  const locationAddress = "Rua Oswaldo Araújo, 100 - Praia do Futuro, Fortaleza - CE, 60177-325";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${locationName}, ${locationAddress}`)}`;

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-light sm:text-4xl">Detalhes do Evento</h2>
          <div className="mt-8 space-y-4 text-lg text-light-gray">
            <p><strong className="text-light">Data:</strong> 07 de Dezembro</p>
            <p><strong className="text-light">Horário:</strong> 14:30</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
              aria-label={`Ver ${locationName} no Google Maps`}
            >
              <div className="flex items-start justify-center md:justify-start">
                 <MapPinIcon className="h-6 w-6 text-accent mt-1 mr-2 flex-shrink-0" />
                 <div>
                    <p><strong className="text-light">Local:</strong> {locationName}</p>
                    <p className="text-base text-light-gray/70 group-hover:text-light-gray group-hover:underline transition-colors duration-300">{locationAddress}</p>
                 </div>
              </div>
            </a>
            <p className="font-bold text-accent">Presencial | Vagas Limitadas</p>
          </div>
          <div className="mt-10">
              <CtaButton
                href="https://form.spotform.com.br/viradafinanceiraoficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscreva-se Agora
              </CtaButton>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-light/10 h-80 md:h-full">
          <img src="https://granmareiro.com.br/wp-content/uploads/2023/01/3.jpeg" alt="Salão de eventos do Gran Mareiro, preparado para a imersão" className="w-full h-full object-cover" />
        </div>
      </div>
    </Section>
  );
};

export default EventDetailsSection;