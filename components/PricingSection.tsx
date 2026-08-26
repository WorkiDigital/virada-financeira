import React from 'react';

const CheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const StarIcon = ({ className, filled }: { className?: string, filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const PinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PricingSection: React.FC = () => {
  return (
    <section id="ofertas" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,139,31,0.06),transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-light mb-4">
            Escolha sua Experiência
          </h2>
          <p className="text-light-gray font-light text-base sm:text-lg max-w-2xl mx-auto">
            Vagas limitadas para garantir proximidade, qualidade e resultado. Não deixe para depois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Platinum */}
          <div className="bg-black-soft rounded-2xl p-8 lg:p-10 border border-gold-subtle flex flex-col relative z-0 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-bold text-light tracking-widest uppercase mb-2">Platinum</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-xl text-light-gray mr-1">R$</span>
              <span className="text-6xl font-anton text-light tracking-normal">97</span>
            </div>
            
            <ul className="space-y-4 flex-1 mb-10">
              {[
                'Acesso presencial à Virada Financeira',
                'Crachá exclusivo',
                'Caderneta',
                'Caneta',
                'Coffee break',
                'Acesso a toda programação',
                'Ebook com os principais pontos da Imersão',
                'Acesso ao grupo de relacionamento após a conclusão do evento'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-light-gray mr-3 shrink-0 mt-0.5" />
                  <span className="text-light-gray text-sm md:text-base font-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href="https://pay.cakto.com.br/d2usqge_1061139"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center py-4 border border-gold-subtle text-light text-sm font-bold font-sans tracking-widest uppercase rounded-xl hover:bg-[#D98B1F] hover:text-[#050505] hover:border-[#D98B1F] transition-all duration-300"
              >
                Garantir Platinum
              </a>
              <p className="text-center text-light-gray/60 text-xs mt-4">
                Dúvidas? Fale com a equipe
              </p>
            </div>
          </div>

          {/* Card Ouro */}
          <div className="bg-black-soft rounded-2xl p-8 lg:p-10 border-2 border-[#D98B1F] flex flex-col relative z-10 shadow-[0_0_35px_rgba(217,139,31,0.2)]">
            <div className="absolute -top-3.5 right-6 bg-[#14100C] border border-[#D98B1F] text-accent px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold font-sans flex items-center gap-2 uppercase tracking-widest shadow-md">
              <StarIcon className="w-3.5 h-3.5 text-accent" filled />
              Experiência mais exclusiva
            </div>
            
            <h3 className="text-2xl font-bold text-accent tracking-widest uppercase mb-2">Ouro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-xl text-accent mr-1">R$</span>
              <span className="text-6xl font-anton text-light tracking-normal">297</span>
            </div>
            
            <ul className="mb-4">
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-light text-sm md:text-base font-semibold leading-snug">
                  Inclui tudo do Platinum, mais:
                </span>
              </li>
            </ul>
            
            <div className="h-px bg-gold-subtle w-full mb-6"></div>

            <ul className="space-y-4 flex-1 mb-8">
              {[
                'Caneta personalizada',
                'Barra de cereal no Kit Ouro',
                'Encontro presencial exclusivo pós-evento',
                'Alinhamento e estratégia prática'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <StarIcon className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                  <span className="text-light text-sm md:text-base font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border border-gold-subtle rounded-xl p-4 mb-6 space-y-3 bg-[#14100C]/80">
              <p className="text-[11px] sm:text-xs font-bold text-accent tracking-wider uppercase flex items-center gap-1.5 pb-1 border-b border-gold-subtle/40">
                <span>📌</span> Encontro exclusivo pós-evento (bônus Ouro)
              </p>
              <div className="flex items-center text-light-gray text-sm">
                <CalendarIcon className="w-4 h-4 mr-3 text-accent shrink-0" />
                14/09/2026
              </div>
              <div className="flex items-center text-light-gray text-sm">
                <ClockIcon className="w-4 h-4 mr-3 text-accent shrink-0" />
                Das 18h às 22h
              </div>
              <div className="flex items-center text-light-gray text-sm">
                <PinIcon className="w-4 h-4 mr-3 text-accent shrink-0" />
                Fortaleza/CE
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <span className="border border-[#D98B1F]/40 text-accent px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-[#14100C]">
                Apenas 10–20 vagas para o Ouro
              </span>
            </div>

            <div className="mt-auto">
              <a
                href="https://pay.cakto.com.br/63utur9_1061427"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center py-4 bg-[#D98B1F] text-[#050505] text-sm font-bold font-sans tracking-widest uppercase rounded-xl hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(217,139,31,0.3)]"
              >
                Quero Ser Ouro
              </a>
              <p className="text-center text-accent/70 text-xs mt-4">
                Dúvidas? Fale com a equipe
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

