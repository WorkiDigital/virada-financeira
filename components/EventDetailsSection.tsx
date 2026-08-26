import React from 'react';
import Section from './Section';
import CtaButton from './CtaButton';
import MapPinIcon from './icons/MapPinIcon';

const EventDetailsSection: React.FC = () => {
  const locationName = "Piazza";
  const locationAddress = "R. Nunes Valente, 1309 - Aldeota, Fortaleza - CE, 60813-795";
  const googleMapsUrl = "https://share.google/5U1EDjZbu7jWeG3Qf";

  return (
    <Section className="bg-black">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-light mb-6">
            Detalhes do Evento
          </h2>
          <div className="mt-8 space-y-6 text-base sm:text-lg text-light-gray font-light">
            <p><strong className="text-light font-semibold tracking-wider uppercase text-xs sm:text-sm">Data:</strong><br /> 31 de Agosto</p>
            <p><strong className="text-light font-semibold tracking-wider uppercase text-xs sm:text-sm">Horário:</strong><br /> 17:30</p>
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
                    <p><strong className="text-light font-semibold tracking-wider uppercase text-xs sm:text-sm">Local:</strong><br /> {locationName}</p>
                    <p className="text-sm sm:text-base text-light-gray group-hover:text-light transition-colors duration-300 mt-1">{locationAddress}</p>
                 </div>
              </div>
            </a>
            <div className="pt-4 flex justify-center md:justify-start">
              <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gold-subtle bg-[#14100C] text-accent font-bold uppercase tracking-widest text-xs sm:text-sm shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
                Presencial | Vagas Limitadas
              </span>
            </div>
          </div>
          <div className="mt-10">
              <CtaButton
                href="https://pay.cakto.com.br/d2usqge_1061139"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscreva-se Agora
              </CtaButton>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 h-[380px] md:h-[480px]">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative group row-span-2 border border-gold-subtle">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="/images/local-1.jpg" alt="Auditório Rooftop Piazza Aldeota" loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl relative group row-span-1 border border-gold-subtle">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img src="/images/local-2.jpg" alt="Espaço Corporativo Piazza" loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventDetailsSection;
