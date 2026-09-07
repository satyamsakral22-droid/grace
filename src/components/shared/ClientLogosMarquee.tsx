import React from 'react';
import { Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';

interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  {
    id: "lnt",
    name: "Larsen & Toubro (L&T)",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/1280px-Larsen%26Toubro_logo.svg.png",
    websiteUrl: "https://www.larsentoubro.com/"
  },
  {
    id: "hpcl",
    name: "Hindustan Petroleum (HPCL)",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3wyQfn7wf_0AmiTRro_a2lKzE-jiZindvEg0DH6YRg&s=10",
    websiteUrl: "https://www.hindustanpetroleum.com/"
  },
  {
    id: "pepsico",
    name: "PepsiCo India",
    logoUrl: "https://crystalpng.com/wp-content/uploads/2025/10/new-pepsico-logo.png",
    websiteUrl: "https://www.pepsicoindia.co.in/"
  },
  {
    id: "emaar",
    name: "Emaar Properties",
    logoUrl: "https://1000logos.net/wp-content/uploads/2020/09/Emaar-Properties-Logo-1.png",
    websiteUrl: "https://www.emaar.com/"
  },
  {
    id: "dial",
    name: "Delhi International Airport Ltd (DIAL)",
    logoUrl: "https://www.airport-suppliers.com/wp-content/uploads/2020/01/Delhi-Airport-HP-PR-Logo.jpg",
    websiteUrl: "https://www.newdelhiairport.in/"
  },
  {
    id: "apdcl",
    name: "Assam Power Distribution Company Ltd (APDCL)",
    logoUrl: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/saur-energy/media/post_attachments/2022/09/news-37.jpg",
    websiteUrl: "https://www.apdcl.org/"
  },
  {
    id: "uppcl",
    name: "UP Power Corporation (UPPCL)",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31HTMwn9lG-yW-CLg9dFKabC-RMevGTu2U2ai9l2ZA&s=10",
    websiteUrl: "https://www.uppcl.org/"
  },
  {
    id: "sapura",
    name: "Sapura Energy",
    logoUrl: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/SapuraEnergy_Logo_Official.svg/1280px-SapuraEnergy_Logo_Official.svg.png",
    websiteUrl: "https://sapuraenergy.com/"
  },
  {
    id: "tajsats",
    name: "Taj SATS Air Catering",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQFX9JFKqXrzSg/company-logo_200_200/company-logo_200_200/0/1630638874526?e=2147483647&v=beta&t=2WJxOrEAB1pNUaHy_72hZNTTsCdhDxuY4q3oGi4bRnI",
    websiteUrl: "https://www.tajsats.com/"
  },
  {
    id: "mankind",
    name: "Mankind Pharma",
    logoUrl: "https://i0.wp.com/spicyip.com/wp-content/uploads/2025/08/image-34.png?resize=1024%2C560&ssl=1",
    websiteUrl: "https://www.mankindpharma.com/"
  },
  {
    id: "westside",
    name: "Westside (Tata Group)",
    logoUrl: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/w-logo_e0719a8f-d1a8-4983-acd6-9133023296d3.png?v=1784185748",
    websiteUrl: "https://www.westside.com/"
  },
  {
    id: "modi",
    name: "Modi Industries / Modi Steels",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKc2EwjMULNnmFQD_N-SBUAgipO6bU-1QrC8VtVxhWg&s=10",
    websiteUrl: "https://www.modi.com/"
  },
  {
    id: "starcement",
    name: "Star Cement",
    logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQE4zfLqHEp0lg/company-logo_200_200/company-logo_200_200/0/1651485938252/starcement_logo?e=2147483647&v=beta&t=ipC0DQgtDMryBwaB22esLD3gvBNhithFZa0fkflNzbg",
    websiteUrl: "https://www.starcement.co.in/"
  },
  {
    id: "omaxe",
    name: "Omaxe Group",
    logoUrl: "https://www.omaxe.com/media/images/15736259983%20(2).jpg",
    websiteUrl: "https://www.omaxe.com/"
  },
  {
    id: "gardenia",
    name: "Gardenia Group",
    logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQE8f5q8mYGzQg/company-logo_200_200/company-logo_200_200/0/1645040811745?e=2147483647&v=beta&t=x2ZNRYXVFhj9wV6eFlPTdLXdmcNiuCpELD52H-__fas",
    websiteUrl: "https://www.gardeniagroup.in/"
  },
  {
    id: "sikka",
    name: "Sikka Group",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrIm_uYcFdhHfNf1o_6aLsyTUBtF7FUbcHs4UlnxcsxB33WFNUqdy0Vo&s=10",
    websiteUrl: "https://www.sikkagroup.in/"
  },
  {
    id: "maxblis",
    name: "Maxblis Construction",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqt5CbPR76yNvqGtD6l1xlI2uRSqlom-r4FuPio4Q4J26Ua7xOMVXHT4g&s=10",
    websiteUrl: "https://www.maxblis.com/"
  },
  {
    id: "hrc",
    name: "HRC Engineering Estate",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIQcYS0xiYZX5pPokmgpLBIqa6KuOU1cvDOCCXBtqOx3VB3JxGCG-5Jk&s=10",
    websiteUrl: "https://hrcgroup.co.in/"
  },
  {
    id: "skg",
    name: "SKG Homes",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRby__LNE15excdSTSMOj6Q1n7HwxVW3ETdnJEjmM5Um6IDrk2yh-0McH2n&s=10",
    websiteUrl: "https://www.skghomes.in/"
  },
  {
    id: "prateek",
    name: "Prateek Group",
    logoUrl: "https://prateekgroup.com/wp-content/uploads/2026/05/Prateek_group_Logo-removebg-preview-1.png",
    websiteUrl: "https://prateekgroup.com/"
  },
  {
    id: "newtech",
    name: "Newtech Developers / La Galaxia",
    logoUrl: "https://lagalaxia.co.in/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-30-at-5.36.33-PM.jpeg",
    websiteUrl: "https://lagalaxia.co.in/"
  },
  {
    id: "sparsh",
    name: "Sparsh Global School",
    logoUrl: "https://www.sparshglobalschool.com/images/infobox-logo.png",
    websiteUrl: "https://www.sparshglobalschool.com/"
  }
];

const CHANNEL_PARTNER_LOGOS = [
  { 
    id: "schneider", 
    name: "Schneider Electric", 
    logoUrl: "https://www.se.com/dam-assets/2hgFSDSuWfHGU9uzMz3I-g/FoPovHKlWpMiU0341m8gZQ/BUILDER.IO%7CSquare/se_logo_social_shared_image_004_BUILDER.IOSquare.webp", 
    websiteUrl: "https://www.se.com/" 
  },
  { 
    id: "abb", 
    name: "ABB", 
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLrQ2d00E3MO625nNtjbLdAQ4GbEaFUvEXu83AcN4T8hZ8Wm2OEefPUSg&s=10", 
    websiteUrl: "https://global.abb/" 
  },
  { 
    id: "siemens", 
    name: "Siemens", 
    logoUrl: "https://cdn.openlm.com/wp-content/uploads/2026/03/Siemens-Logo.png", 
    websiteUrl: "https://www.siemens.com/" 
  },
  { 
    id: "havells", 
    name: "Havells", 
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaYAO_aDTPmv_azclFrzApbuSqEYdTl3kwkZ9QyL-H5ottT7zjyGQfBo&s=10", 
    websiteUrl: "https://www.havells.com/" 
  },
  { 
    id: "legrand", 
    name: "Legrand", 
    logoUrl: "https://prakashelectrical.com/wp-content/uploads/2021/08/1280px-Logo_Legrand_SA.svg.png", 
    websiteUrl: "https://www.legrand.co.in/" 
  },
  { 
    id: "polycab", 
    name: "Polycab", 
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vIFZxfMI9FrJ_ZoqeBtDeG-P0ZCWswK42R6iRvJKVw&s=10", 
    websiteUrl: "https://polycab.com/" 
  },
  { 
    id: "lnt_sg", 
    name: "L&T Switchgear", 
    logoUrl: "https://5.imimg.com/data5/SELLER/Default/2023/12/370523274/UK/XA/NB/48913722/l-and-t-switchgears-500x500.jpg", 
    websiteUrl: "https://www.lntebg.in/" 
  },
  { 
    id: "eaton", 
    name: "Eaton", 
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsCFJ2cl0YsCTuO-A_HlRZQzLf3a-rIZt2TWsEHUESYGm04yI19f6mAw&s=10", 
    websiteUrl: "https://www.eaton.com/" 
  }
];

export const ClientLogosMarquee: React.FC = () => {
  // Double array for seamless loop
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const handleOpenClientWebsite = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200 shadow-xs">
      
      {/* Subtle Tech Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="container-versatile relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200 text-grace-primary rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-grace-primary animate-pulse" /> Corporate Portfolio & Clients
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
            Our Valued Clients
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium leading-relaxed">
            Trusted by leading PSUs, Multinational Corporations, and Infrastructure Pioneers. <span className="text-grace-primary font-bold">Click any logo to visit their official website.</span>
          </p>
        </div>

        {/* SINGLE ROW SLOW MOVING HORIZONTAL MARQUEE */}
        <div className="overflow-hidden marquee-mask py-4">
          <div className="animate-marquee-slow flex items-center gap-6">
            {marqueeItems.map((item, idx) => (
              <div
                key={`m-${item.id}-${idx}`}
                title={`Visit ${item.name} Official Website`}
                onClick={() => handleOpenClientWebsite(item.websiteUrl)}
                className="flex items-center justify-center h-28 w-56 sm:w-64 px-6 bg-white border border-slate-200 hover:border-grace-primary rounded-2xl shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group flex-shrink-0 relative"
              >
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  loading="lazy"
                  className="max-h-16 max-w-[180px] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerText = item.name;
                    }
                  }}
                />
                
                {/* Subtle external link icon indicator on hover */}
                <div className="absolute top-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-grace-primary">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AUTHORIZED CHANNEL PARTNERS SECTION */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                Authorized Switchgear & OEM Channel Partners
              </span>
            </div>
            <span className="text-[11px] font-semibold text-grace-primary">
              100% Genuine Components & ISO 9001:2015 Certified Assembly
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {CHANNEL_PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.id}
                title={`Visit ${partner.name} Official Website`}
                onClick={() => handleOpenClientWebsite(partner.websiteUrl)}
                className="h-24 p-3 bg-white border border-slate-200 hover:border-grace-primary rounded-2xl flex items-center justify-center transition-all shadow-xs hover:shadow-xl hover:scale-105 cursor-pointer group relative overflow-hidden"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-16 max-w-[130px] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerText = partner.name;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientLogosMarquee;
