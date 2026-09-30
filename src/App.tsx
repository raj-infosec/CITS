import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { navigateTo, pathForView, routeFromPath } from './utils/router';

// Core Navigation and Global Elements
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MaturityAssessmentModal } from './components/MaturityAssessmentModal';
import { ConsultationModal } from './components/ConsultationModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { WhatsAppQuickAssist } from './components/WhatsAppQuickAssist';

// Home Page Sections
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemsSection } from './components/ProblemsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CybersecurityArchitecture } from './components/CybersecurityArchitecture';
import { BusinessContinuitySection } from './components/BusinessContinuitySection';
import { InformationManagementSection } from './components/InformationManagementSection';
import { DowntimeCalculatorSection } from './components/DowntimeCalculatorSection';
import { ArchitecturalComparisonSection } from './components/ArchitecturalComparisonSection';
import { BlueprintConfiguratorSection } from './components/BlueprintConfiguratorSection';
import { IndustriesSection } from './components/IndustriesSection';
import { MethodologyAndWhySection } from './components/MethodologyAndWhySection';
import { LiveNOCMapSection } from './components/LiveNOCMapSection';
import { RegionalPresenceSection } from './components/RegionalPresenceSection';
import { PartnerEcosystemSection } from './components/PartnerEcosystemSection';
import { InsightsAndCaseStudiesSection } from './components/InsightsAndCaseStudiesSection';
import { CTASection } from './components/CTASection';
import { ScrollFadeSection } from './components/ScrollFadeSection';

// Dedicated Sub-Views
import { SolutionsView } from './views/SolutionsView';
import { SolutionDetailView } from './views/SolutionDetailView';
import { ProductsView } from './views/ProductsView';
import { ServicesView } from './views/ServicesView';
import { IndustriesView } from './views/IndustriesView';
import { AboutView } from './views/AboutView';
import { PartnersView } from './views/PartnersView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';
import { CareersView } from './views/CareersView';
import { LegalView } from './views/LegalView';

export default function App() {
  const initialRoute = routeFromPath(window.location.pathname);
  const [currentView, setCurrentView] = useState<PageView>(initialRoute.view);
  const [selectedSolutionSlug, setSelectedSolutionSlug] = useState<string>(initialRoute.slug || 'cybersecurity');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(undefined);
  const [selectedQuoteCategory, setSelectedQuoteCategory] = useState<string>('arcon-pam');
  
  // Modals state
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [consultationNote, setConsultationNote] = useState<string>('');

  // Keep browser history and deep links synchronized with the SPA view.
  useEffect(() => {
    const handlePopState = () => {
      const route = routeFromPath(window.location.pathname);
      setCurrentView(route.view);
      if (route.slug) setSelectedSolutionSlug(route.slug);
      setSelectedProductId(undefined);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on view changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedSolutionSlug]);

  // Synchronize dynamic title, description, and OpenGraph metadata per view
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: 'CITS – Enterprise Technology, Cybersecurity & Infrastructure Solutions',
      solutions: 'Enterprise Solutions Architecture & Systems | CITS',
      'solution-detail': 'Enterprise Architecture Blueprint & Topology | CITS',
      products: 'Commercial Hardware Fleets & Software Platforms | CITS',
      services: 'Professional Services, VAPT & Engineering Advisory | CITS',
      industries: 'Industry-Specific Architectures & Workloads | CITS',
      partners: 'Global Tier-1 OEM Technology Partners Ecosystem | CITS',
      about: 'About Complete IT Solutions (CITS) | Regional Systems Architect',
      'case-studies': 'Enterprise Deployments & Client Case Studies | CITS',
      insights: 'Enterprise Technology Briefings & Strategic Insights | CITS',
      contact: 'Request Architecture Consultation & Enterprise Quotes | CITS',
      careers: 'Engineering Careers & Technical Opportunities | CITS',
      privacy: 'Privacy Policy & Data Protection Governance | CITS',
      terms: 'Terms of Service & SLA Commitments | CITS',
    };

    const descriptions: Record<PageView, string> = {
      home: 'Complete IT Solutions (CITS) delivers zero-trust cybersecurity, business continuity, high-density compute infrastructure, and enterprise IT architectures across East and Southern Africa.',
      solutions: 'Explore CITS mission-critical solution pillars: cybersecurity, disaster recovery, enterprise compute, unified communications, and information management.',
      'solution-detail': 'Detailed architectural topology, verified bills of materials, and engineering blueprints tailored for enterprise resilience.',
      products: 'Procure certified Dell & HPE compute servers, commercial laptops, UniFi networking, and licensed software with direct manufacturer warranty.',
      services: 'Strategic consulting, VAPT security audits, disaster recovery runbooks, turnkey staging, and guaranteed 24/7 SLAs.',
      industries: 'Architectures engineered for banking, government, healthcare, education, NGOs, and enterprise manufacturing.',
      partners: 'Authorized direct OEM partnerships with Dell Technologies, HPE, Sophos, ARCON, Ubiquiti, and Paessler.',
      about: 'Founded in 2012, CITS architects and deploys resilient digital systems with local engineering hubs across Uganda, Zambia, and Malawi.',
      'case-studies': 'Real enterprise deployments and audited outcomes across banking, manufacturing, healthcare, and higher education.',
      insights: 'Authoritative analysis on zero-trust migration, ransomware economics, and mission-critical enterprise resilience in Africa.',
      contact: 'Consult with CITS certified enterprise architects or configure tailored hardware and software procurement bills of materials.',
      careers: 'Join our team of systems engineers, solutions architects, and cybersecurity specialists solving mission-critical infrastructure challenges.',
      privacy: 'CITS data protection framework, privacy principles, and data handling standards.',
      terms: 'CITS master services agreement, engineering SLA commitments, and terms of service.',
    };

    const activeTitle = titles[currentView] || 'CITS – Enterprise Technology Solutions';
    const activeDesc = descriptions[currentView] || descriptions.home;

    document.title = activeTitle;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', activeTitle);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', activeTitle);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', activeDesc);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', activeDesc);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', activeDesc);

    const canonicalPath = pathForView(currentView, currentView === 'solution-detail' ? selectedSolutionSlug : undefined);
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
  }, [currentView, selectedSolutionSlug]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    navigateTo(pathForView(view, view === 'solution-detail' ? selectedSolutionSlug : undefined));
  };

  const handleNavigateToQuickQuote = (categoryId?: string) => {
    if (categoryId) setSelectedQuoteCategory(categoryId);
    setCurrentView('contact');
    navigateTo('/contact');
    setIsConsultationOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProducts = (productId?: string) => {
    setSelectedProductId(productId);
    setCurrentView('products');
    navigateTo('/products');
    if (productId) {
      setTimeout(() => {
        const el = document.getElementById(productId) || document.getElementById(`product-${productId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  };

  const handleSelectSolution = (slug: string) => {
    setSelectedSolutionSlug(slug);
    setCurrentView('solution-detail');
    navigateTo(pathForView('solution-detail', slug));
  };

  const handleOpenConsultation = (initialNote?: string) => {
    setConsultationNote(initialNote || '');
    setIsConsultationOpen(true);
  };

  const handleOpenAssessment = () => {
    setIsAssessmentOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafc] text-slate-900 selection:bg-sky-500 selection:text-white">
        
        {/* Sticky Enterprise Navigation Bar */}
        <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onSelectSolution={handleSelectSolution}
        onOpenAssessment={handleOpenAssessment}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 1. Hero with Interactive Canvas & Live Architecture Sandbox */}
            <Hero
              onExploreSolutions={() => {
                const el = document.getElementById('solutions-overview');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenAssessment={handleOpenAssessment}
              onOpenConsultation={(note) => handleOpenConsultation(note)}
              onSelectSolution={handleSelectSolution}
              onNavigateToProducts={handleNavigateToProducts}
            />

            {/* 2. Trust Strip with Verified Tech Ecosystem */}
            <ScrollFadeSection>
              <TrustStrip onNavigateToProducts={handleNavigateToProducts} />
            </ScrollFadeSection>

            {/* 3. The Enterprise Problem: What Happens When IT Fails */}
            <ScrollFadeSection>
              <ProblemsSection onSelectSolution={handleSelectSolution} />
            </ScrollFadeSection>

            {/* 4. The 6 Core Solutions Overview */}
            <ScrollFadeSection id="solutions-overview">
              <SolutionsSection 
                onSelectSolution={handleSelectSolution} 
                onOpenConsultation={handleOpenConsultation}
              />
            </ScrollFadeSection>

            {/* 5. Deep Architecture 1: Cybersecurity (7-layer topology) */}
            <ScrollFadeSection>
              <CybersecurityArchitecture
                onLearnMore={() => handleSelectSolution('cybersecurity')}
              />
            </ScrollFadeSection>

            {/* 6. Deep Architecture 2: Business Continuity & Quorum DR */}
            <ScrollFadeSection>
              <BusinessContinuitySection
                onLearnMore={() => handleSelectSolution('business-continuity')}
              />
            </ScrollFadeSection>

            {/* 7. Deep Architecture 3: Information Management & EDMS */}
            <ScrollFadeSection>
              <InformationManagementSection
                onLearnMore={() => handleSelectSolution('information-management')}
              />
            </ScrollFadeSection>

            {/* 8. Executive Financial Modeler: Downtime & Ransomware ROI Calculator */}
            <ScrollFadeSection>
              <DowntimeCalculatorSection
                onOpenConsultation={handleOpenConsultation}
              />
            </ScrollFadeSection>

            {/* 9. The Paradigm Shift: Commodity Hardware Reseller vs CITS Systems Architect */}
            <ScrollFadeSection>
              <ArchitecturalComparisonSection
                onOpenConsultation={() => handleOpenConsultation('Inquiry: Architectural Review & Resilience Strategy')}
              />
            </ScrollFadeSection>

            {/* 10. Interactive 30-Second Architecture Blueprint Builder */}
            <ScrollFadeSection>
              <BlueprintConfiguratorSection
                onOpenConsultation={handleOpenConsultation}
                onSelectSolution={handleSelectSolution}
              />
            </ScrollFadeSection>

            {/* 11. Industries & Sectors Overview */}
            <ScrollFadeSection>
              <IndustriesSection
                onNavigateToIndustries={() => handleNavigate('industries')}
                onSelectSolution={handleSelectSolution}
              />
            </ScrollFadeSection>

            {/* 12. Methodology & The CITS Advantage */}
            <ScrollFadeSection>
              <MethodologyAndWhySection
                onOpenConsultation={() => handleOpenConsultation()}
              />
            </ScrollFadeSection>

            {/* 13. Live Regional NOC Telemetry & Latency Status (Uganda, Zambia, Malawi) */}
            <ScrollFadeSection>
              <LiveNOCMapSection
                onNavigateToContact={() => handleNavigate('contact')}
              />
            </ScrollFadeSection>

            {/* 14. Regional Presence Physical Verification */}
            <ScrollFadeSection>
              <RegionalPresenceSection
                onNavigateToContact={() => handleNavigate('contact')}
              />
            </ScrollFadeSection>

            {/* 15. Technology Partner Ecosystem Hub */}
            <ScrollFadeSection>
              <PartnerEcosystemSection
                onLearnMore={() => handleNavigate('partners')}
                onNavigateToProducts={handleNavigateToProducts}
              />
            </ScrollFadeSection>

            {/* 16. CITS Insights & Anonymized Real Deployments */}
            <ScrollFadeSection>
              <InsightsAndCaseStudiesSection
                onNavigateToInsights={() => handleNavigate('insights')}
                onNavigateToCaseStudies={() => handleNavigate('case-studies')}
              />
            </ScrollFadeSection>

            {/* 17. Minimalist Enterprise CTA Section */}
            <ScrollFadeSection>
              <CTASection
                onOpenConsultation={() => handleOpenConsultation()}
                onNavigateToContact={() => handleNavigate('contact')}
              />
            </ScrollFadeSection>
          </>
        )}

        {/* Dedicated Solutions Architecture & Briefs View */}
        {currentView === 'solutions' && (
          <SolutionsView
            initialSlug={selectedSolutionSlug}
            onSelectSolutionDetail={handleSelectSolution}
            onNavigateToProducts={handleNavigateToProducts}
            onNavigateToPartners={() => handleNavigate('partners')}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {/* Dedicated Products & Hardware Portfolio View */}
        {currentView === 'products' && (
          <ProductsView
            onOpenConsultation={handleOpenConsultation}
            onNavigateToSolutions={() => handleNavigate('solutions')}
            onNavigateToPartners={() => handleNavigate('partners')}
            initialProductId={selectedProductId}
          />
        )}

        {/* Dedicated Solution Detail View */}
        {currentView === 'solution-detail' && (
          <SolutionDetailView
            slug={selectedSolutionSlug}
            onSelectAnotherSolution={handleSelectSolution}
            onBackToHome={() => { setCurrentView('home'); navigateTo('/'); }}
            onOpenConsultation={() => handleOpenConsultation(`Inquiry for Solution Pillar: ${selectedSolutionSlug}`)}
          />
        )}

        {/* Professional Services View */}
        {currentView === 'services' && (
          <ServicesView
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* Industries & Sectors View */}
        {currentView === 'industries' && (
          <IndustriesView
            onSelectSolution={handleSelectSolution}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* About CITS View */}
        {currentView === 'about' && (
          <AboutView
            onOpenConsultation={() => handleOpenConsultation()}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {/* Partners View */}
        {currentView === 'partners' && (
          <PartnersView
            onOpenConsultation={() => handleOpenConsultation()}
            onNavigateToSolutions={() => handleNavigate('solutions')}
            onNavigateToProducts={handleNavigateToProducts}
          />
        )}

        {/* Case Studies View */}
        {currentView === 'case-studies' && (
          <CaseStudiesView
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* Insights View */}
        {currentView === 'insights' && (
          <InsightsView
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* Careers View */}
        {currentView === 'careers' && (
          <CareersView
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* Contact View with Quick Quote Service Integration */}
        {currentView === 'contact' && (
          <ContactView 
            initialMode="quote"
            initialCategoryId={selectedQuoteCategory}
            onOpenConsultationModal={(note) => handleOpenConsultation(note)}
          />
        )}

        {/* Legal Views */}
        {(currentView === 'privacy' || currentView === 'terms') && (
          <LegalView type={currentView} />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectSolution={handleSelectSolution}
      />

      {/* 60-Second Infrastructure & Security Maturity Assessment Modal */}
      <MaturityAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onBookConsultationWithResults={(resultsSummary) => {
          handleOpenConsultation(resultsSummary);
        }}
      />

      {/* Direct Enterprise Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialNote={consultationNote}
        onNavigateToQuickQuote={() => handleNavigateToQuickQuote()}
      />

      {/* Global Quick Command Palette (Cmd+K / Ctrl+K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onSelectSolution={handleSelectSolution}
        onOpenAssessment={handleOpenAssessment}
        onOpenConsultation={() => handleOpenConsultation()}
        onScrollToSection={handleScrollToSection}
      />

      {/* Floating WhatsApp Quick Assist Button & Drawer */}
      <WhatsAppQuickAssist />
    </div>
  );
}
