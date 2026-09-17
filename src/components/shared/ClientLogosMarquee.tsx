import React from 'react';

interface ClientLogoItem {
  id: string;
  name: string;
  src: string;
  imgClass?: string;
  minWidth?: string;
}

const VALUED_CLIENTS: ClientLogoItem[] = [
  { id: "hpcl", name: "HPCL", src: "/logos/clients/hpcl.png", imgClass: "h-14 sm:h-16 md:h-18" },
  { id: "upcl", name: "UPCL", src: "/logos/clients/upcl.png", imgClass: "h-14 sm:h-16 md:h-18" },
  { id: "pepsico", name: "PepsiCo", src: "/logos/clients/pepsico.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "180px" },
  { id: "lnt", name: "Larsen & Toubro", src: "/logos/clients/lnt.png", imgClass: "h-14 sm:h-16 md:h-18" },
  { id: "dial", name: "Delhi International Airport Ltd", src: "/logos/clients/dial.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "200px" },
  { id: "apdcl", name: "APDCL", src: "/logos/clients/apdcl.png", imgClass: "h-13 sm:h-15 md:h-17", minWidth: "170px" },
  { id: "sapura", name: "Sapura Energy", src: "/logos/clients/sapura.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "tajsats", name: "Taj SATS", src: "/logos/clients/tajsats.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "150px" },
  { id: "mankind", name: "Mankind Pharma", src: "/logos/clients/mankind.png", imgClass: "h-13 sm:h-15 md:h-17", minWidth: "180px" },
  { id: "westside", name: "Westside", src: "/logos/clients/westside.png", imgClass: "h-11 sm:h-13 md:h-15", minWidth: "180px" },
  { id: "modi", name: "Modi Industries", src: "/logos/clients/modi.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "180px" },
  { id: "companycheck", name: "Company Check", src: "/logos/clients/companycheck.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "180px" },
  { id: "starcement", name: "Star Cement", src: "/logos/clients/starcement.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "emaar", name: "Emaar", src: "/logos/clients/emaar.png", imgClass: "h-10 sm:h-12 md:h-14", minWidth: "190px" },
  { id: "omaxe", name: "Omaxe", src: "/logos/clients/omaxe.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "180px" },
  { id: "gardenia", name: "Gardenia Group", src: "/logos/clients/gardenia.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "sikka", name: "Sikka", src: "/logos/clients/sikka.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "maxblis", name: "Maxblis", src: "/logos/clients/maxblis.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "hrc", name: "HRC", src: "/logos/clients/hrc.png", imgClass: "h-13 sm:h-15 md:h-17" },
  { id: "skg", name: "SKG", src: "/logos/clients/skg.png", imgClass: "h-13 sm:h-15 md:h-17 rounded" },
  { id: "prateek", name: "Prateek Group", src: "/logos/clients/prateek.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "220px" },
  { id: "newtech", name: "Newtech Developers / La Galaxia", src: "/logos/clients/newtech.png", imgClass: "h-12 sm:h-14 md:h-16 rounded", minWidth: "200px" },
  { id: "sparsh", name: "Sparsh Global School", src: "/logos/clients/sparsh.png", imgClass: "h-13 sm:h-15 md:h-17" },
];

const OEM_PARTNERS: ClientLogoItem[] = [
  { id: "schneider", name: "Schneider Electric", src: "/logos/partners/schneider.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "190px" },
  { id: "abb", name: "ABB", src: "/logos/partners/abb.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "140px" },
  { id: "siemens", name: "Siemens", src: "/logos/partners/siemens.png", imgClass: "h-9 sm:h-11 md:h-12", minWidth: "180px" },
  { id: "havells", name: "Havells", src: "/logos/partners/havells.png", imgClass: "h-10 sm:h-12 md:h-14", minWidth: "180px" },
  { id: "legrand", name: "Legrand", src: "/logos/partners/legrand.png", imgClass: "h-10 sm:h-12 md:h-14", minWidth: "170px" },
  { id: "polycab", name: "Polycab", src: "/logos/partners/polycab.png", imgClass: "h-12 sm:h-14 md:h-16", minWidth: "180px" },
  { id: "lnt_sg", name: "L&T Switchgear", src: "/logos/partners/lnt_sg.png", imgClass: "h-13 sm:h-15 md:h-17", minWidth: "170px" },
  { id: "eaton", name: "Eaton", src: "/logos/partners/eaton.png", imgClass: "h-10 sm:h-12 md:h-14", minWidth: "160px" },
];

function PureLogo({ item }: { item: ClientLogoItem }) {
  return (
    <div
      title={item.name}
      className="flex-shrink-0 flex items-center justify-center select-none transition-transform duration-300 hover:scale-105"
      style={{
        minWidth: item.minWidth || '130px',
        height: '80px',
      }}
    >
      <img decoding="async"
        src={item.src}
        alt={item.name}
        loading="lazy"
        className={`${item.imgClass || 'h-13 sm:h-15 md:h-17'} w-auto max-w-[220px] sm:max-w-[260px] object-contain pointer-events-none drop-shadow-xs transition-all duration-300`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const p = e.currentTarget.parentElement;
          if (p && !p.querySelector('.fallback-text')) {
            const s = document.createElement('span');
            s.className = 'fallback-text text-base font-bold tracking-tight text-slate-800 px-3 py-1 font-serif border-b-2 border-grace-primary whitespace-nowrap';
            s.textContent = item.name;
            p.appendChild(s);
          }
        }}
      />
    </div>
  );
}

export const ClientLogosMarquee: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-grace-primary/20 to-transparent" />

      <div className="relative z-10">

        <div className="text-center mb-9 px-4">
          <h2 className="text-xl sm:text-2xl font-black font-serif text-slate-900 tracking-tight">
            Our Valued Clients
          </h2>
        </div>

        <div className="overflow-hidden marquee-mask mb-12 sm:mb-14 w-full">
          <div className="animate-marquee-glide">
            <div className="flex items-center gap-14 sm:gap-16 md:gap-20 pr-14 sm:pr-16 md:pr-20 flex-shrink-0">
              {VALUED_CLIENTS.map((item) => (
                <PureLogo key={`c-a-${item.id}`} item={item} />
              ))}
            </div>
            <div className="flex items-center gap-14 sm:gap-16 md:gap-20 pr-14 sm:pr-16 md:pr-20 flex-shrink-0" aria-hidden="true">
              {VALUED_CLIENTS.map((item) => (
                <PureLogo key={`c-b-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 sm:pt-12 mt-2">
          <div className="text-center mb-9 px-4">
            <h3 className="text-lg sm:text-xl font-black font-serif text-slate-900 tracking-tight">
              Authorized OEM Partners
            </h3>
          </div>

          <div className="overflow-hidden marquee-mask w-full">
            <div className="animate-marquee-glide-slow">
              <div className="flex items-center gap-14 sm:gap-16 md:gap-20 pr-14 sm:pr-16 md:pr-20 flex-shrink-0">
                {OEM_PARTNERS.map((p) => (
                  <PureLogo key={`pt-a-${p.id}`} item={p} />
                ))}
              </div>
              <div className="flex items-center gap-14 sm:gap-16 md:gap-20 pr-14 sm:pr-16 md:pr-20 flex-shrink-0" aria-hidden="true">
                {OEM_PARTNERS.map((p) => (
                  <PureLogo key={`pt-b-${p.id}`} item={p} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientLogosMarquee;
