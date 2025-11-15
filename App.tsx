import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import AudienceSection from './components/AudienceSection';
import WhyAttendSection from './components/WhyAttendSection';
import EventDetailsSection from './components/EventDetailsSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';

// FIX: Moved fbq declaration to the top level of the module to fix "Modifiers cannot appear here" error.
// Declaração para o TypeScript reconhecer a função fbq do Facebook Pixel
declare const fbq: any;

const App: React.FC = () => {
  useEffect(() => {
    // ============================
    // SHA256
    // ============================
    async function sha256(str: string) {
      const buffer = new TextEncoder().encode(str);
      const hash = await window.crypto.subtle.digest("SHA-256", buffer);
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
    }

    // ============================
    // Capturar fbp / fbc
    // ============================
    function getFbCookies() {
      const cookie = document.cookie.split("; ").reduce((acc: { [key: string]: string }, part) => {
        const [key, value] = part.split("=");
        if (key && value) {
            acc[key] = value;
        }
        return acc;
      }, {});

      return {
        fbp: cookie._fbp || "",
        fbc: cookie._fbc || ""
      };
    }

    // ============================
    // Capturar UTMs
    // ============================
    function getUTMs() {
      const params = new URLSearchParams(window.location.search);
      return {
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        utm_term: params.get("utm_term") || "",
      };
    }

    // ============================
    // Capturar IP
    // ============================
    async function getIP() {
      try {
        const r = await fetch("https://api.ipify.org?format=json");
        const j = await r.json();
        return j.ip;
      } catch {
        return "";
      }
    }

    // ============================
    // Função principal
    // ============================
    async function firePageView() {

      // Carregar script do Pixel
      // FIX: Changed self-invoking function to be wrapped in parenthesis to avoid "An expression of type 'void' cannot be tested for truthiness" error.
      (function(f: any,b: Document,e: string,v: string,n?: any,t?: any,s?: any){
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t,s)
      })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

      const PIXEL_ID = "815585104727004";
      fbq("init", PIXEL_ID);

      // event_id para deduplicação
      const eventID = "pv_" + Date.now();

      fbq("track", "PageView", {}, { eventID });

      // Capturas paralelas
      const { fbp, fbc } = getFbCookies();
      const utm = getUTMs();
      const ip = await getIP();

      // user_data permitido no seu caso
      // FIX: Explicitly type user data constants as string to prevent TypeScript from inferring them as 'never' in conditional branches.
      const city: string = "";     // se você tiver valor, preencha
      const state: string = "";
      const zip: string = "";
      const country: string = "";
      const external_id: string = "";

      const user_data = {
        ct: city ? await sha256(city.toLowerCase()) : "",
        st: state ? await sha256(state.toLowerCase()) : "",
        zp: zip ? await sha256(zip) : "",
        country: country ? await sha256(country.toLowerCase()) : "",
        external_id: external_id ? await sha256(external_id) : ""
      };

      // CAPI via Stape
      const stapeDomain = "SEU_DOMINIO_STAPE"; // 👈 ATENÇÃO: Substitua pelo seu domínio real do Stape.io

      // Impede o erro "Failed to fetch" se o domínio não for configurado.
      if (stapeDomain === "SEU_DOMINIO_STAPE" || !stapeDomain) {
        console.warn(
          "👋 [Pixel CAPI] Atenção: O domínio do Stape.io não foi configurado. O evento PageView não será enviado para a API de Conversões. Por favor, substitua 'SEU_DOMINIO_STAPE' no arquivo App.tsx pelo seu domínio correto para ativar o rastreamento server-side."
        );
        return; // Interrompe a execução para evitar o erro.
      }

      fetch(`https://${stapeDomain}/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventID,

          action_source: "website",
          event_source_url: window.location.href,
          client_user_agent: navigator.userAgent,
          client_ip_address: ip,

          fbp: fbp,
          fbc: fbc,

          user_data,

          custom_data: {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            referrer: document.referrer,
            ...utm
          }
        })
      }).catch(error => {
        console.error("Erro ao enviar evento para a CAPI (Stape):", error);
      });

    }

    firePageView();

  }, []);

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
