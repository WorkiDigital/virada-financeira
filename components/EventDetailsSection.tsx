import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import MapPinIcon from './icons/MapPinIcon';

const EventDetailsSection: React.FC = () => {
  const locationName = "Piazza";
  const locationAddress = "R. Nunes Valente, 1309 - Aldeota, Fortaleza - CE, 60813-795";
  const googleMapsUrl = "https://share.google/5U1EDjZbu7jWeG3Qf";

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-serif text-accent sm:text-5xl mb-6">Detalhes do Evento</h2>
          <div className="mt-8 space-y-6 text-lg text-light-gray font-light">
            <p><strong className="text-light font-medium tracking-wide uppercase text-sm">Data:</strong><br /> 31 de Agosto</p>
            <p><strong className="text-light font-medium tracking-wide uppercase text-sm">Horário:</strong><br /> 17:30</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
              aria-label={`Ver ${locationName} no Google Maps`}
            >
              <div className="flex items-start justify-center md:justify-start">
                 <MapPinIcon className="h-6 w-6 text-accent mt-1 mr-3 flex-shrink-0" />
                 <div>
                    <p><strong className="text-light font-medium tracking-wide uppercase text-sm">Local:</strong><br /> {locationName}</p>
                    <p className="text-base text-light-gray/70 group-hover:text-light transition-colors duration-300 mt-1">{locationAddress}</p>
                 </div>
              </div>
            </a>
            <p className="font-medium text-accent uppercase tracking-widest text-sm pt-4 border-t border-light/10">Presencial | Vagas Limitadas</p>
          </div>
          <div className="mt-12">
              <CtaButton
                href="https://pay.cakto.com.br/d2usqge_1061139"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscreva-se Agora
              </CtaButton>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 h-[400px] md:h-[500px]">
          <div className="rounded-sm overflow-hidden shadow-xl relative group row-span-2">
             <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmk2e6Pknk30qidXv1X9NJ7PvZaKc2iiv3Cn4qgJzUYeBC7yODN62HYFtiWceXkDGijJWjnP9FWZ3PptSWJUttx7kVaSQqs2SCt28Cq7v5eTq1HJXio8Z8Y1hH49enLbwPEBOzs_QKUIb9p=s680-w680-h510-rw" alt="Auditório Rooftop Piazza Aldeota" loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="rounded-sm overflow-hidden shadow-xl relative group row-span-1">
             <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2wvmDfXDVZZV-tt-EpDto9i4EYD7whULD1PeZ-DmvQ3hcUg92ntqTjtPlu3SQLgJUpsr1Z7eDKlfJSoybKHKYf8CKygT5dNnmdkqpqx6RwT5pFz9kN4xXomrW10QvVLR_Ri19ZlYX4dNa=s680-w680-h510-rw" alt="Espaço Corporativo Piazza" loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventDetailsSection;