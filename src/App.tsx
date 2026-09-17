import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickInquiryModal } from './components/shared/QuickInquiryModal';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage || (m as any).default })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage || (m as any).default })));
const MepServicesPage = lazy(() => import('./pages/MepServicesPage').then(m => ({ default: m.MepServicesPage || (m as any).default })));
const ElectricalProductsPage = lazy(() => import('./pages/ElectricalProductsPage').then(m => ({ default: m.ElectricalProductsPage || (m as any).default })));
const MechanicalManufacturingPage = lazy(() => import('./pages/MechanicalManufacturingPage').then(m => ({ default: m.MechanicalManufacturingPage || (m as any).default })));
const RailwayPage = lazy(() => import('./pages/RailwayPage').then(m => ({ default: m.RailwayPage || (m as any).default })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage || (m as any).default })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage || (m as any).default })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage || (m as any).default })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage || (m as any).default })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-slate-200 border-t-grace-primary rounded-full animate-spin"></div>
  </div>
);

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleOpenInquiry = (productName: string = '') => {
    setSelectedProduct(productName);
    setInquiryModalOpen(true);
  };

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col overflow-x-hidden w-full">
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          {activePage === 'home' && <HomePage onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />}
          {activePage.startsWith('about') && <AboutPage activeTab={activePage} onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'mep' && <MepServicesPage onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'products' && <ElectricalProductsPage onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'manufacturing' && <MechanicalManufacturingPage onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'railway' && <RailwayPage onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'gallery' && <GalleryPage onOpenInquiry={handleOpenInquiry} />}
          {activePage === 'careers' && <CareersPage />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'faq' && <FaqPage onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />}
        </Suspense>
      </main>

      <Footer 
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      <QuickInquiryModal 
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultProduct={selectedProduct}
      />
    </div>
  );
};

export default App;
