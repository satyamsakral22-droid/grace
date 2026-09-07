import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickInquiryModal } from './components/shared/QuickInquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MepServicesPage } from './pages/MepServicesPage';
import { ElectricalProductsPage } from './pages/ElectricalProductsPage';
import { MechanicalManufacturingPage } from './pages/MechanicalManufacturingPage';
import { RailwayPage } from './pages/RailwayPage';
import { GalleryPage } from './pages/GalleryPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

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
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />}
        {activePage.startsWith('about') && <AboutPage activeTab={activePage} onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'mep' && <MepServicesPage onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'products' && <ElectricalProductsPage onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'manufacturing' && <MechanicalManufacturingPage onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'railway' && <RailwayPage onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'gallery' && <GalleryPage onOpenInquiry={handleOpenInquiry} />}
        {activePage === 'careers' && <CareersPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer 
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Global Inquiry RFQ Modal */}
      <QuickInquiryModal 
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultProduct={selectedProduct}
      />
    </div>
  );
};

export default App;
