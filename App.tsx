import React from 'react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import AudienceSection from './components/AudienceSection';
import WhyAttendSection from './components/WhyAttendSection';
import EventDetailsSection from './components/EventDetailsSection';
import FaqSection from './components/FaqSection';
import PricingSection from './components/PricingSection';
import FinalCtaSection from './components/FinalCtaSection';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-primary overflow-x-hidden font-sans min-h-screen text-light">
      <main>
        <HeroSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <ExperienceSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <PricingSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <AudienceSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <WhyAttendSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <EventDetailsSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <FaqSection />
        <div className="divider-gold max-w-4xl mx-auto opacity-30 my-4" />
        <FinalCtaSection />
      </main>

      <footer className="py-14 text-center text-light-gray/70 font-light border-t border-gold-subtle bg-black">
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="text-light font-sans font-semibold tracking-[0.3em] text-xs uppercase opacity-80 mb-0.5">
            Imersão
          </span>
          <span className="font-anton text-gold-metallic text-3xl sm:text-4xl leading-none uppercase">
            Virada
          </span>
          <span className="text-light font-sans font-semibold tracking-[0.3em] text-xs uppercase opacity-80 mt-0.5">
            Financeira
          </span>
        </div>
        <p className="mb-2 text-xs sm:text-sm">&copy; 2026 Imersão Virada Financeira. Todos os direitos reservados.</p>
        <p className="text-xs text-light-gray/50">Evento Presencial Exclusivo • Fortaleza/CE</p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default App;