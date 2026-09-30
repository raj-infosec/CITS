import React from 'react';
import { PageView } from '../types';
import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onSelectSolution: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectSolution }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070c18] text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="flex items-center gap-2.5 text-left focus:outline-none group select-none cursor-pointer"
              aria-label="CITS Home"
            >
              <img
                src="/cits-logo.png"
                alt="Complete IT Solutions Uganda Limited (CITS)"
                className="w-[155px] h-auto max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                width="1582"
                height="890"
                loading="lazy"
                decoding="async"
              />
            </button>

            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              A modern enterprise technology partner helping organisations secure, connect, protect and transform their mission-critical digital infrastructure.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 space-y-1">
              <p>SECURE &bull; CONNECTED &bull; RESILIENT &bull; INTELLIGENT</p>
              <p>Enterprise Technology Across East &amp; Southern Africa</p>
            </div>
          </div>

          {/* Solutions Column (Col 5-6) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
              Solutions
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onSelectSolution('cybersecurity')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Cybersecurity Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('business-continuity')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Business Continuity &amp; DR
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('information-management')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Enterprise Information (EDMS)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('enterprise-it')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Enterprise IT &amp; ERP
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('communications')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Unified Communications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSolution('software-solutions')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Software &amp; Mobile
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
              Company
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About CITS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Professional Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-white transition-colors">
                  Industries &amp; Sectors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="text-sky-300 hover:text-white transition-colors font-medium flex items-center gap-1">
                  <span>Products &amp; Hardware</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-sky-500/20 text-sky-300">NEW</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors">
                  Technology Ecosystem
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-white transition-colors">
                  CITS Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">
                  Careers &amp; Culture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Hubs (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold">
              Regional Operations
            </p>
            <div className="space-y-3 text-xs">
              {REGIONAL_OFFICES.map((office) => (
                <div key={office.country} className="border-l border-slate-700 pl-3 space-y-0.5">
                  <p className="font-semibold text-white">{office.country}: {office.companyName}</p>
                  <p className="text-[11px] text-slate-400">{office.address}</p>
                  <p className="font-mono text-[11px] text-sky-400">{office.phone}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href="https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold transition-all group"
                title="Direct WhatsApp Quick Assist"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +256 703922319</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>&copy; {new Date().getFullYear()} Complete IT Solutions Uganda Limited. All rights reserved.</span>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <button 
              onClick={() => onNavigate('privacy')} 
              className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <button 
              onClick={() => onNavigate('terms')} 
              className="hover:text-white transition-colors underline underline-offset-4 decoration-slate-700"
            >
              Terms of Use
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="hover:text-sky-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>&bull;</span>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="hover:text-sky-400 transition-colors"
              >
                Facebook
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
