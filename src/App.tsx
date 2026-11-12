import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CoreFeaturesTab } from './components/CoreFeaturesTab.tsx';
import { BeforeAfterGallery } from './components/BeforeAfterGallery.tsx';
import { SmileDiagnosticSurvey } from './components/SmileDiagnosticSurvey.tsx';
import { SterilizationProtocol } from './components/SterilizationProtocol.tsx';
import { GoogleSheetsZaloSync } from './components/GoogleSheetsZaloSync.tsx';
import { PricingMatrix } from './components/PricingMatrix.tsx';
import { DoctorsShowcase } from './components/DoctorsShowcase.tsx';
import { Footer } from './components/Footer.tsx';
import { OrderQuoteModal } from './components/OrderQuoteModal.tsx';
import { DiscountModal } from './components/DiscountModal.tsx';

const AppContent: React.FC = () => {
  const { theme } = useThemeLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [hasAppliedDiscount, setHasAppliedDiscount] = useState(false);

  const handleApplyDiscount = () => {
    setHasAppliedDiscount(true);
    setIsOrderModalOpen(true);
  };

  return (
    <div className={`min-h-screen text-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0A1017] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar 
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
        />

        {/* 100% Faithful Replica of User's Uploaded Screenshot (Core Features Tab) */}
        <CoreFeaturesTab 
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
        />

        {/* Feature 2: Interactive Before/After Clinical Case Comparison */}
        <BeforeAfterGallery />

        {/* Feature 1: 60s Fast AI Smile Diagnostic Tool */}
        <SmileDiagnosticSurvey />

        {/* Feature 3: Ministry of Health Sterilization Protocol & Swiss Lifetime Warranty */}
        <SterilizationProtocol />

        {/* Feature 4: Zero-Latency Real-Time Sync to Google Sheets & On-Duty Doctor Zalo */}
        <GoogleSheetsZaloSync />

        {/* Transparent Dental Pricing Matrix */}
        <PricingMatrix onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* Certified Medical Board & Master Surgeons */}
        <DoctorsShowcase />
      </main>

      {/* Footer */}
      <Footer 
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenDiscountModal={() => setIsDiscountModalOpen(true)}
      />

      {/* Modals */}
      <OrderQuoteModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        hasDiscount={hasAppliedDiscount}
      />

      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
        onApplyDiscount={handleApplyDiscount}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeLanguageProvider>
      <AppContent />
    </ThemeLanguageProvider>
  );
}

export default App;
