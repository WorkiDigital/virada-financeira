import React from 'react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import AudienceSection from './components/AudienceSection';
import WhyAttendSection from './components/WhyAttendSection';
import EventDetailsSection from './components/EventDetailsSection';
import FaqSection from './components/FaqSection';
import PricingSection from './components/PricingSection';
import FinalCtaSection from './components/FinalCtaSection';

const App: React.FC = () => {
  return (
    <div className="bg-primary overflow-x-hidden font-sans">
      <header className="absolute top-0 left-0 w-full z-10 p-6 bg-transparent text-center">
        <h1 className="text-xl md:text-2xl font-serif text-accent tracking-widest uppercase">Virada Financeira</h1>
      </header>

      <main>
        <HeroSection />
        <ExperienceSection />
        <PricingSection />
        <AudienceSection />
        <WhyAttendSection />
        <EventDetailsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <footer className="py-12 text-center text-light-gray/60 font-light border-t border-light/5">
        <p className="font-serif text-xl text-accent mb-4">Virada Financeira</p>
        <p className="mb-2">&copy; 2026 Virada Financeira. Todos os direitos reservados.</p>
        <p className="text-sm">Contato: suporte@viradafinanceira.com</p>
      </footer>
    </div>
  );
};

export default App;