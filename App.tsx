
import React from 'react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import AudienceSection from './components/AudienceSection';
import WhyAttendSection from './components/WhyAttendSection';
import EventDetailsSection from './components/EventDetailsSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';

const App: React.FC = () => {
  return (
    <div className="bg-primary overflow-x-hidden">
      <header className="absolute top-0 left-0 w-full z-10 p-4 bg-transparent text-center">
        {/* Placeholder for global header as per instructions */}
        <h1 className="text-2xl font-bold tracking-tight text-light sm:text-3xl">Imersão Virada Financeira</h1>
      </header>
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <AudienceSection />
        <WhyAttendSection />
        <EventDetailsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <footer className="py-8 text-center text-light-gray/70">
        {/* Placeholder for global footer */}
        <p>&copy; 2024 Virada Financeira. Todos os direitos reservados.</p>
        <p>Contato para suporte: suporte@viradafinanceira.com</p>
      </footer>
    </div>
  );
};

export default App;
