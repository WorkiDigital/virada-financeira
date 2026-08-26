import React from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import StickyHeader from './components/StickyHeader';
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
  const [heroRef, isHeroIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const eventDate = '2026-08-31T17:30:00-03:00';

  return (
    <div className="bg-primary overflow-x-hidden font-sans min-h-screen text-light">
      <StickyHeader isVisible={!isHeroIntersecting} eventDate={eventDate} />
      <main>
        <div ref={heroRef}>
          <HeroSection />
        </div>
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

      <footer className="py-14 text-center text-light-gray/70 font-light border-t border-[#D98B1F]/25 bg-black">
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