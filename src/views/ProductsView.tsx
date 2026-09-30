import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  Activity, 
  Laptop, 
  Printer, 
  Wifi, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Lock, 
  Cpu, 
  Layers,
  HelpCircle,
  FileCheck,
  Building2,
  HardDrive
} from 'lucide-react';
import { ENTERPRISE_PRODUCTS, ICT_HARDWARE_PRODUCTS, TECHNOLOGY_PARTNERS } from '../data/citsData';
import { EnterpriseProduct, ICTHardwareItem } from '../types';
import { HeaderAnimatedVisual } from '../components/HeaderAnimatedVisual';

interface ProductsViewProps {
  onOpenConsultation: (initialNote?: string) => void;
  onNavigateToSolutions?: (slug?: string) => void;
  onNavigateToPartners?: () => void;
  initialCategory?: string;
  initialProductId?: string;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ 
  onOpenConsultation,
  onNavigateToSolutions,
  onNavigateToPartners, 
  initialCategory = 'all',
  initialProductId 
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialProductId === 'ict-hardware-section' ? 'servers' : initialCategory
  );
  const [selectedProductModal, setSelectedProductModal] = useState<EnterpriseProduct | null>(() => {
    if (!initialProductId || initialProductId === 'ict-hardware-section') return null;
    return ENTERPRISE_PRODUCTS.find(p => p.id === initialProductId || p.slug === initialProductId) || null;
  });
  const [selectedHardwareModal, setSelectedHardwareModal] = useState<ICTHardwareItem | null>(() => {
    if (!initialProductId) return null;
    if (initialProductId === 'ict-hardware-section') return ICT_HARDWARE_PRODUCTS[0] || null;
    return ICT_HARDWARE_PRODUCTS.find(h => h.id === initialProductId) || null;
  });

  useEffect(() => {
    if (initialCategory && initialCategory !== 'all') {
      setActiveTab(initialCategory);
    }
    if (initialProductId) {
      if (initialProductId === 'ict-hardware-section') {
        setActiveTab('servers');
        if (ICT_HARDWARE_PRODUCTS[0]) setSelectedHardwareModal(ICT_HARDWARE_PRODUCTS[0]);
      } else {
        const prod = ENTERPRISE_PRODUCTS.find(p => p.id === initialProductId || p.slug === initialProductId);
        if (prod) {
          setSelectedProductModal(prod);
        } else {
          const hw = ICT_HARDWARE_PRODUCTS.find(h => h.id === initialProductId);
          if (hw) {
            setSelectedHardwareModal(hw);
            setActiveTab('servers');
          }
        }
      }
    }
  }, [initialProductId, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProductModal) setSelectedProductModal(null);
        if (selectedHardwareModal) setSelectedHardwareModal(null);
      }
    };
    if (selectedProductModal || selectedHardwareModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProductModal, selectedHardwareModal]);

  const filterTabs = [
    { 
      id: 'all', 
      label: 'All Products & IT Hardware', 
      count: ENTERPRISE_PRODUCTS.length + ICT_HARDWARE_PRODUCTS.length,
      activeClass: 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800',
      inactiveClass: 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200',
      activeBadge: 'bg-sky-500/25 text-sky-200',
      inactiveBadge: 'bg-slate-100 text-slate-600 border border-slate-200',
      dotColor: 'bg-sky-400'
    },
    { 
      id: 'servers', 
      label: 'Enterprise Servers (Dell & HPE)', 
      count: 1,
      activeClass: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-600/20 ring-1 ring-amber-600',
      inactiveClass: 'bg-amber-50/70 hover:bg-amber-100/80 text-amber-900 border border-amber-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-amber-100 text-amber-800 border border-amber-200',
      dotColor: 'bg-amber-400'
    },
    { 
      id: 'laptops', 
      label: 'Laptops & Workstations (HP & Lenovo)', 
      count: 2,
      activeClass: 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/20 ring-1 ring-rose-600',
      inactiveClass: 'bg-rose-50/70 hover:bg-rose-100/80 text-rose-900 border border-rose-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-rose-100 text-rose-800 border border-rose-200',
      dotColor: 'bg-rose-400'
    },
    { 
      id: 'desktops', 
      label: 'Desktops & Mini PCs', 
      count: 1,
      activeClass: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 ring-1 ring-blue-600',
      inactiveClass: 'bg-blue-50/70 hover:bg-blue-100/80 text-blue-900 border border-blue-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-blue-100 text-blue-800 border border-blue-200',
      dotColor: 'bg-blue-400'
    },
    { 
      id: 'networking', 
      label: 'Networking & Wi-Fi (UniFi)', 
      count: 1,
      activeClass: 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md shadow-cyan-600/20 ring-1 ring-cyan-600',
      inactiveClass: 'bg-cyan-50/70 hover:bg-cyan-100/80 text-cyan-900 border border-cyan-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
      dotColor: 'bg-cyan-400'
    },
    { 
      id: 'printers', 
      label: 'Printers & Scanners (HP)', 
      count: 1,
      activeClass: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-600/20 ring-1 ring-teal-600',
      inactiveClass: 'bg-teal-50/70 hover:bg-teal-100/80 text-teal-900 border border-teal-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-teal-100 text-teal-800 border border-teal-200',
      dotColor: 'bg-teal-400'
    },
    { 
      id: 'software', 
      label: 'Enterprise Software Platforms', 
      count: ENTERPRISE_PRODUCTS.length,
      activeClass: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-md shadow-purple-600/20 ring-1 ring-purple-600',
      inactiveClass: 'bg-purple-50/70 hover:bg-purple-100/80 text-purple-900 border border-purple-200/80',
      activeBadge: 'bg-white/20 text-white',
      inactiveBadge: 'bg-purple-100 text-purple-800 border border-purple-200',
      dotColor: 'bg-purple-400'
    }
  ];

  const filteredProducts = ENTERPRISE_PRODUCTS.filter(() => {
    if (activeTab === 'all' || activeTab === 'software') return true;
    return false;
  });

  const filteredHardware = ICT_HARDWARE_PRODUCTS.filter(hw => {
    if (activeTab === 'all') return true;
    if (activeTab === 'servers') return hw.category === 'Enterprise Servers & Compute';
    if (activeTab === 'laptops') return hw.category === 'Laptops & Mobile Workstations';
    if (activeTab === 'desktops') return hw.category === 'Desktops & Mini PCs';
    if (activeTab === 'networking') return hw.category === 'Enterprise Networking & Wi-Fi';
    if (activeTab === 'printers') return hw.category === 'Enterprise Printers & Scanners';
    return false;
  });

  const showHardware = filteredHardware.length > 0;
  const showSoftware = filteredProducts.length > 0;

  return (
    <div className="bg-[#fafafc] min-h-screen text-slate-800">
      
      {/* Top Banner Header */}
      <section className="bg-[#090f1d] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>COMMERCIAL HARDWARE UNITS &amp; SOFTWARE PLATFORMS</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Enterprise IT Products &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                  Hardware Portfolio.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Procure certified enterprise hardware fleets — from <strong>Dell &amp; HPE compute servers</strong> and <strong>HP/Lenovo laptops</strong> to <strong>UniFi networking</strong> — alongside licensed software platforms like <strong>ARCON PAM</strong>, <strong>ManageEngine</strong>, <strong>PRTG</strong>, and <strong>Sophos</strong>. Each item is pre-staged in Kampala with direct manufacturer warranty.
              </p>

              {/* Quick Jump Shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sky-300">
                  Kampala Staging Warehouse
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-emerald-300">
                  Direct OEM Warranty
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-amber-300">
                  Hot-Swap Replacement Spares
                </span>
              </div>
            </div>

            {/* Right Column: Relevant Animated Image & Telemetry Canvas */}
            <div className="lg:col-span-5 w-full">
              <HeaderAnimatedVisual
                activeTab="products"
                productCategory={activeTab}
                onNavigateToSolutions={onNavigateToSolutions}
                onNavigateToPartners={onNavigateToPartners}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation Bar */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                    isActive ? tab.activeClass : tab.inactiveClass
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${tab.dotColor} ${isActive ? 'animate-pulse' : 'opacity-70'}`} />
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isActive ? tab.activeBadge : tab.inactiveBadge
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* 1. Software & Architecture Platforms */}
        {filteredProducts.length > 0 && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  Enterprise Software Platforms
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Engineered for Compliance, Visibility &amp; Zero-Trust
                </h2>
              </div>
              <p className="text-xs text-slate-500 max-w-sm">
                Every platform includes licensing procurement, high-availability architecture sizing, and direct Tier-3 CITS deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  id={`product-${product.slug}`}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {product.image && (
                    <div className="h-44 w-full relative overflow-hidden bg-slate-900 border-b border-slate-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white border border-white/20 font-medium">
                          {product.badge}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-sky-950/90 text-sky-300 border border-sky-500/40 font-semibold">
                          {product.brand}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                    {/* Header Badge & Brand */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-50 text-sky-800 border border-sky-200/60 font-semibold">
                        {product.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {product.brand}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-mono text-sky-600 font-medium mt-1">
                        {product.tagline}
                      </p>
                      
                      {/* Short Paragraph Summary */}
                      <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                        <span className="text-[10px] font-mono uppercase text-sky-700 font-bold block mb-1">
                          Product Summary:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {product.shortParagraph || product.overview}
                        </p>
                      </div>
                    </div>

                    {/* Key Technical Features */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                      <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold block mb-2">
                        Core Architecture Capabilities:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {product.keyFeatures.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified East African Use Cases Highlight */}
                    <div className="border-t border-slate-100 pt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase text-slate-500 font-semibold flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Enterprise Use Case Spotlight</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          {product.useCases[0]?.industry}
                        </span>
                      </div>

                      {product.useCases.length > 0 && (
                        <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3 text-xs text-slate-700 space-y-1.5">
                          <p className="font-semibold text-slate-900">
                            {product.useCases[0].title}
                          </p>
                          <p className="text-slate-600 leading-normal">
                            <span className="font-medium text-slate-800">Scenario:</span> {product.useCases[0].scenario}
                          </p>
                          <p className="text-emerald-700 font-medium pt-1 border-t border-sky-100/60">
                            <strong>Impact:</strong> {product.useCases[0].impact}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Regulatory Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {product.complianceStandards.map((std, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTAs */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProductModal(product)}
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 group/btn"
                    >
                      <span>Explore All Use Cases &amp; Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Request Pricing & Sizing for ${product.name}`)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      Request Sizing &amp; Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. ICT Hardware Products Section (Servers, Laptops, Desktops, Printers, UniFi) */}
        {showHardware && (
          <section id="ict-hardware-section" className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  Commercial Hardware &amp; Enterprise Compute Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {activeTab === 'servers' 
                    ? 'Dell PowerEdge & HPE ProLiant Enterprise Compute Servers' 
                    : activeTab === 'laptops'
                    ? 'Commercial Laptops & Mobile Workstations (HP & Lenovo)'
                    : activeTab === 'desktops'
                    ? 'Enterprise Desktops & Micro 1-Liter PCs'
                    : activeTab === 'networking'
                    ? 'Enterprise Networking & High-Density Wi-Fi (UniFi)'
                    : activeTab === 'printers'
                    ? 'Enterprise Departmental Printers & Heavy Document Scanners'
                    : 'Enterprise Servers, Laptops, Desktops, Printers & UniFi Networking'}
                </h2>
              </div>
              <p className="text-xs text-slate-500 max-w-sm">
                Commercial tier hardware with military-grade durability, hardware-enforced BIOS security, and local manufacturer warranty support in Uganda.
              </p>
            </div>

            {/* Hardware Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredHardware.map((hw) => (
                <div
                  key={hw.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {hw.image && (
                    <div className="h-44 w-full relative overflow-hidden bg-slate-900 border-b border-slate-100">
                      <img 
                        src={hw.image} 
                        alt={hw.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-white border border-white/20 font-medium">
                          {hw.brand}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-sky-950/90 text-sky-300 border border-sky-500/40 font-semibold">
                          Kampala Staged
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          {hw.category.includes('Servers') && <Server className="w-4 h-4 text-blue-600" />}
                          {hw.category.includes('Laptops') && <Laptop className="w-4 h-4 text-sky-600" />}
                          {hw.category.includes('Desktops') && <HardDrive className="w-4 h-4 text-indigo-600" />}
                          {hw.category.includes('Printers') && <Printer className="w-4 h-4 text-emerald-600" />}
                          {hw.category.includes('Networking') && <Wifi className="w-4 h-4 text-purple-600" />}
                          <span className="font-mono text-xs font-semibold text-slate-700">
                            {hw.category}
                          </span>
                        </div>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
                          {hw.brand}
                        </span>
                      </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {hw.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 font-medium">
                        {hw.headline}
                      </p>

                      {/* Small Paragraph Summary requested by user */}
                      <div className="mt-3 bg-slate-50 border border-slate-200/90 rounded-xl p-3.5">
                        <span className="text-[10px] font-mono uppercase text-sky-700 font-bold block mb-1">
                          Product Summary:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {hw.shortParagraph}
                        </p>
                      </div>
                    </div>

                    {/* Specs List */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                      <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold block mb-2">
                        Commercial Grade Specifications:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {hw.specsSummary.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hardware Security Highlights */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3.5">
                      <span className="text-[11px] font-mono text-emerald-800 uppercase font-semibold block mb-1.5 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Hardware-Enforced Security Defense:</span>
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {hw.securityFeatures.map((sec, secIdx) => (
                          <li key={secIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">&bull;</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Models */}
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block mb-1.5">
                        Enterprise Popular Models:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hw.popularModels.map((model, mIdx) => (
                          <span key={mIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70 font-medium">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Warranty Callout */}
                    <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                      <strong>Warranty &amp; Staging:</strong> {hw.enterpriseWarranty}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedHardwareModal(hw)}
                      className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                    >
                      <span>Fleet Details &amp; Staging</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Request Commercial Hardware Fleet Quotation for ${hw.name}`)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      Request Fleet Quote
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. The CITS Engineering Assurance Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
              CITS Enterprise Hardware &amp; Software SLA
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Beyond Box-Dropping: Full-Lifecycle Architecture Staging.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              When you procure hardware or software through CITS, equipment does not arrive unconfigured. Our Kampala integration laboratory executes firmware updates, gold OS imaging, asset tagging, bitlocker encryption, and active directory pre-staging before handover.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Inquiry: Multi-Product Enterprise Procurement & Deployment Architecture')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg shadow-sky-950/50"
              >
                Schedule Architecture Consultation
              </button>
              <span className="text-xs font-mono text-slate-400">
                Official Commercial Vendor Warranty &bull; Uganda &bull; Zambia &bull; Malawi
              </span>
            </div>
          </div>
        </section>

      </div>

      {/* Deep Product Modal with All Use Cases */}
      {selectedProductModal && (
        <div 
          onClick={() => setSelectedProductModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-slate-800 space-y-6 cursor-default"
          >
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
                  {selectedProductModal.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedProductModal.name}
                </h3>
                <p className="text-xs font-mono text-sky-600 font-medium">
                  {selectedProductModal.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider mb-2">
                  Architecture Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProductModal.overview}
                </p>
              </div>

              {/* All Use Cases */}
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider mb-3">
                  Verified Real-World East Africa Enterprise Use Cases ({selectedProductModal.useCases.length})
                </h4>
                <div className="space-y-4">
                  {selectedProductModal.useCases.map((uc, ucIdx) => (
                    <div key={ucIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{uc.title}</span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                          {uc.industry}
                        </span>
                      </div>
                      <p className="text-slate-600">
                        <strong className="text-slate-800">Enterprise Scenario:</strong> {uc.scenario}
                      </p>
                      <p className="text-emerald-700 font-medium bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100">
                        <strong>Quantified Result:</strong> {uc.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CITS Deliverables */}
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider mb-2">
                  CITS Engineering &amp; SLA Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedProductModal.citsDeliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProductModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close View
              </button>

              <button
                onClick={() => {
                  const pName = selectedProductModal.name;
                  setSelectedProductModal(null);
                  onOpenConsultation(`Inquiry for ${pName} Architecture & Pricing`);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-md shadow-sky-950/20"
              >
                Request Architecture Sizing &amp; Quote
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Hardware Fleet Modal */}
      {selectedHardwareModal && (
        <div 
          onClick={() => setSelectedHardwareModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-slate-800 space-y-6 cursor-default"
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-white font-bold">
                  {selectedHardwareModal.brand} Commercial Fleet
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedHardwareModal.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Category: {selectedHardwareModal.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedHardwareModal(null)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-mono text-slate-500 font-semibold block mb-1 uppercase text-[10px]">Target Audience</span>
                <p className="text-slate-800 font-medium">{selectedHardwareModal.targetAudience}</p>
              </div>

              <div>
                <span className="font-mono text-slate-500 font-semibold block mb-2 uppercase text-[10px]">Specifications</span>
                <ul className="space-y-1.5 text-slate-700">
                  {selectedHardwareModal.specsSummary.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-slate-500 font-semibold block mb-2 uppercase text-[10px]">Enterprise Staging Services</span>
                <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-slate-700 space-y-1">
                  <p>✔ Pre-delivery BIOS password locking &amp; TPM provisioning</p>
                  <p>✔ Custom corporate Windows 11 Pro enterprise golden image deployment</p>
                  <p>✔ Asset tag barcoding &amp; serial inventory logging for audit verification</p>
                  <p>✔ Direct escalation to local HP / Lenovo / UniFi parts depot in Kampala</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedHardwareModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const hwName = selectedHardwareModal.name;
                  setSelectedHardwareModal(null);
                  onOpenConsultation(`Request Commercial Hardware Fleet Sizing for ${hwName}`);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm"
              >
                Request Fleet Pricing &amp; Sizing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
