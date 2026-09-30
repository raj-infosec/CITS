import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck,
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  PhoneCall, 
  Code2, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Layers,
  Compass,
  Search,
  Calculator,
  Cpu,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { SOLUTION_PILLARS, PROFESSIONAL_SERVICES, INDUSTRIES } from '../data/citsData';
import { PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onSelectSolution: (slug: string) => void;
  onOpenConsultation: () => void;
  onOpenAssessment?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onSelectSolution,
  onOpenConsultation,
  onOpenAssessment,
  onOpenCommandPalette,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<'solutions' | 'services' | 'industries' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (onOpenCommandPalette) {
          onOpenCommandPalette();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommandPalette]);

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-sky-500" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-indigo-500" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-500" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-teal-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-purple-500" />;
      default: return <Layers className="w-5 h-5 text-sky-500" />;
    }
  };

  const handleSelectSolution = (slug: string) => {
    onSelectSolution(slug);
    setMegaMenuOpen(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMegaMenuOpen(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for regional contact verification */}
      <div className="bg-[#0b1324] text-xs text-slate-400 py-1.5 px-4 sm:px-8 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Enterprise Technology Partner &bull; East & Southern Africa
            </span>
            <span className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
              <MapPin className="w-3 h-3 text-sky-400" />
              Kampala &bull; Lusaka &bull; Lilongwe
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href="https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              title="Chat with CITS Systems Engineering on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 fill-emerald-400 text-slate-900" />
              <span>WhatsApp Assist: +256 703922319</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:sales@cits.co.ug" className="hover:text-white transition-colors">
              sales@cits.co.ug
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0b1324]/95 backdrop-blur-md border-b border-slate-800 shadow-md py-3' 
            : 'bg-[#0b1324] border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark / Corporate Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group select-none cursor-pointer"
            aria-label="CITS Home"
          >
            <img
              src="/cits-logo.png"
              alt="Complete IT Solutions Uganda Limited (CITS)"
              className="w-[120px] h-auto max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              width="1582"
              height="890"
              loading="eager"
              decoding="async"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen('solutions')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button
                id="nav-solutions-dropdown"
                onClick={() => {
                  handleNavClick('solutions');
                  setMegaMenuOpen(null);
                }}
                className={`px-3 py-2 rounded-md flex items-center gap-1 transition-colors ${
                  megaMenuOpen === 'solutions' || currentView === 'solutions' || currentView === 'solution-detail'
                    ? 'text-white bg-slate-800/80'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen === 'solutions' ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>

              {/* Solutions Mega Menu */}
              {megaMenuOpen === 'solutions' && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] transition-all animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-[#0e172a] border border-slate-700/80 rounded-xl shadow-2xl p-6 text-slate-200 grid grid-cols-2 gap-4">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => {
                          handleNavClick('solutions');
                          setMegaMenuOpen(null);
                        }}
                        className="text-xs uppercase font-mono tracking-wider text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-semibold"
                      >
                        <span>Enterprise Solution Pillars &amp; Executive Briefs</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <span className="text-xs text-slate-400">
                        Zero-Trust &bull; Resilient &bull; Scalable
                      </span>
                    </div>

                    {SOLUTION_PILLARS.map((sol) => (
                      <button
                        key={sol.id}
                        onClick={() => handleSelectSolution(sol.slug)}
                        className="text-left p-3 rounded-lg hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group flex items-start gap-3"
                      >
                        <div className="p-2 rounded-md bg-slate-900 border border-slate-700/60 group-hover:border-sky-500/50 transition-colors">
                          {getSolutionIcon(sol.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-500 font-semibold">{sol.number}</span>
                            <h4 className="font-semibold text-sm text-white group-hover:text-sky-300 transition-colors">
                              {sol.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {sol.shortDescription}
                          </p>
                        </div>
                      </button>
                    ))}

                    <div className="col-span-2 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span>Need unified multi-discipline architecture?</span>
                      <button
                        onClick={onOpenConsultation}
                        className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                      >
                        Schedule Technical Discovery <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen('services')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button
                id="nav-services-dropdown"
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 rounded-md flex items-center gap-1 transition-colors ${
                  currentView === 'services'
                    ? 'text-white bg-slate-800/80'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen === 'services' ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>

              {megaMenuOpen === 'services' && (
                <div className="absolute left-0 top-full pt-2 w-96 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#0e172a] border border-slate-700/80 rounded-xl shadow-2xl p-4 text-slate-200 space-y-1">
                    <div className="px-3 py-1.5 text-xs uppercase font-mono tracking-wider text-slate-400 border-b border-slate-800 mb-2">
                      Professional Advisory & Support
                    </div>
                    {PROFESSIONAL_SERVICES.map((serv) => (
                      <button
                        key={serv.id}
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-sky-300">
                            {serv.title}
                          </p>
                          <p className="text-xs text-slate-400 line-clamp-1">{serv.tagline}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen('industries')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <button
                id="nav-industries-dropdown"
                onClick={() => handleNavClick('industries')}
                className={`px-3 py-2 rounded-md flex items-center gap-1 transition-colors ${
                  currentView === 'industries'
                    ? 'text-white bg-slate-800/80'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen === 'industries' ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>

              {megaMenuOpen === 'industries' && (
                <div className="absolute left-0 top-full pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#0e172a] border border-slate-700/80 rounded-xl shadow-2xl p-3 text-slate-200 space-y-1">
                    <div className="px-3 py-1.5 text-xs uppercase font-mono tracking-wider text-slate-400 border-b border-slate-800 mb-1">
                      Sector Focus
                    </div>
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind.id}
                        onClick={() => handleNavClick('industries')}
                        className="w-full text-left px-3 py-1.5 rounded-md hover:bg-slate-800/80 transition-colors text-sm text-slate-300 hover:text-sky-300"
                      >
                        {ind.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products & Hardware Navigation */}
            <button
              id="nav-products-btn"
              onClick={() => handleNavClick('products')}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1.5 ${
                currentView === 'products'
                  ? 'text-sky-300 bg-slate-800/90 font-semibold ring-1 ring-sky-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Products</span>
              <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">
                NEW
              </span>
            </button>

            {/* Technology */}
            <button
              id="nav-tech-btn"
              onClick={() => handleNavClick('partners')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'partners'
                  ? 'text-white bg-slate-800/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Technology
            </button>

            {/* About */}
            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'about'
                  ? 'text-white bg-slate-800/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              About
            </button>

            {/* Insights */}
            <button
              id="nav-insights-btn"
              onClick={() => handleNavClick('insights')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentView === 'insights'
                  ? 'text-white bg-slate-800/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Insights
            </button>
          </nav>

          {/* Right Action / Search & Contact CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                id="nav-search-palette-btn"
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition-all group"
                title="Search CITS Architecture (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline text-slate-400">Search</span>
                <kbd className="font-mono text-[10px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400">
                  ⌘K
                </kbd>
              </button>
            )}

            <button
              id="nav-contact-direct-btn"
              onClick={() => handleNavClick('contact')}
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/60 transition-colors"
            >
              Contact
            </button>

            <button
              id="nav-talk-expert-cta"
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg shadow-sm hover:from-sky-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              id="mobile-whatsapp-btn"
              href="https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect."
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center transition-colors"
              aria-label="WhatsApp Quick Assist"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-md"
            >
              Consult
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1427] border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Mobile Brand Header */}
            <div className="flex items-center gap-2.5 px-3 py-2 border-b border-slate-800/80 pb-3">
              <img
                src="/cits-logo.png"
                alt="Complete IT Solutions Uganda Limited (CITS)"
                className="w-[108px] h-auto max-w-none object-contain"
                width="1582"
                height="890"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left px-3 py-2 text-base font-semibold text-white hover:bg-slate-800 rounded-md"
              >
                Home
              </button>

              <div className="pt-2 pb-1 px-3 text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center justify-between">
                <span>Core Solutions</span>
                <button
                  onClick={() => handleNavClick('solutions')}
                  className="text-sky-400 hover:text-sky-300 font-semibold normal-case text-xs flex items-center gap-1"
                >
                  <span>All Briefs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {SOLUTION_PILLARS.map((sol) => (
                  <button
                    key={sol.id}
                    onClick={() => handleSelectSolution(sol.slug)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 flex items-center gap-2.5"
                  >
                    {getSolutionIcon(sol.iconName)}
                    <span>{sol.title}</span>
                  </button>
                ))}
              </div>

              <div className="pt-3 pb-1 px-3 text-xs uppercase font-mono tracking-wider text-slate-400">
                Explore CITS
              </div>
              <button
                onClick={() => handleNavClick('products')}
                className="w-full text-left px-3 py-2 text-sm text-sky-300 font-semibold hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between bg-sky-950/40 border border-sky-900/50"
              >
                <span className="flex items-center gap-2">
                  <span>Products &amp; Hardware</span>
                  <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono">NEW</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>Services & Support</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('industries')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>Industries & Sectors</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('partners')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>Technology Ecosystem</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>About CITS</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('case-studies')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>Case Studies (Anonymized)</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('insights')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>CITS Insights</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2 text-sm text-amber-300 hover:text-amber-200 hover:bg-slate-800 rounded-md flex items-center justify-between font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>⚡ Quick Quote Estimator</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300">
                  ESTIMATE
                </span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>Contact & Offices</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                id="mobile-drawer-whatsapp-btn"
                href="https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                <span>WhatsApp Quick Assist (+256 703922319)</span>
              </a>
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-sky-600 rounded-lg shadow-sm"
              >
                Talk to an Expert
              </button>
              <div className="text-center text-xs text-slate-400">
                Kampala HQ: +256 703922319 &bull; sales@cits.co.ug
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
