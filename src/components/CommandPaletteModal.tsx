import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  PhoneCall, 
  Code2, 
  Calculator, 
  Cpu, 
  Globe, 
  MapPin, 
  FileText, 
  ArrowRight,
  Sparkles,
  MessageCircle,
  Layers,
  Activity,
  Laptop
} from 'lucide-react';
import { PageView } from '../types';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
  onSelectSolution: (slug: string) => void;
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
  onScrollToSection: (sectionId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Solutions' | 'Tools & Calculators' | 'Architecture' | 'Regional Hubs' | 'Governance & Insights' | 'Products & Hardware';
  description: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectSolution,
  onOpenAssessment,
  onOpenConsultation,
  onScrollToSection,
}) => {
  const [query, setQuery] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items: CommandItem[] = [
    {
      id: 'prod-portfolio',
      title: 'Enterprise Products & Commercial Hardware Portfolio',
      category: 'Products & Hardware',
      description: 'ARCON PAM, ManageEngine, PRTG, Sophos, HP, Lenovo & UniFi',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      action: () => {
        onNavigate('products');
        onClose();
      }
    },
    {
      id: 'prod-arcon',
      title: 'ARCON Privileged Access Management (PAM)',
      category: 'Products & Hardware',
      description: 'Root credential vaulting, session recording, JIT access & ISO 27001 compliance',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onNavigate('products');
        onClose();
      }
    },
    {
      id: 'prod-manageengine',
      title: 'ManageEngine ITSM & Endpoint Central',
      category: 'Products & Hardware',
      description: 'Automated multi-OS patching, ServiceDesk Plus, ITIL asset management',
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      action: () => {
        onNavigate('products');
        onClose();
      }
    },
    {
      id: 'prod-prtg',
      title: 'PRTG Network Monitor (Paessler)',
      category: 'Products & Hardware',
      description: 'Real-time bandwidth, server, SNMP, and environmental telemetry sensors',
      icon: <Activity className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onNavigate('products');
        onClose();
      }
    },
    {
      id: 'prod-hardware',
      title: 'ICT Hardware Fleets (HP, Lenovo, UniFi)',
      category: 'Products & Hardware',
      description: 'Commercial laptops, desktops, enterprise printers & edge networking',
      icon: <Laptop className="w-4 h-4 text-purple-400" />,
      action: () => {
        onNavigate('products');
        onClose();
      }
    },
    {
      id: 'sol-cyber',
      title: 'Cybersecurity & Perimeter Defense',
      category: 'Solutions',
      description: 'Sophos XGS, EDR/MDR, Zero-Trust, Next-Gen Firewalls & VAPT',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onSelectSolution('cybersecurity');
        onClose();
      }
    },
    {
      id: 'sol-dr',
      title: 'Business Continuity & Disaster Recovery',
      category: 'Solutions',
      description: 'Quorum onQ sub-15min instant recovery, immutable snapshots',
      icon: <RefreshCw className="w-4 h-4 text-sky-400" />,
      action: () => {
        onSelectSolution('business-continuity');
        onClose();
      }
    },
    {
      id: 'sol-edms',
      title: 'Enterprise Information Management (EDMS)',
      category: 'Solutions',
      description: 'ViciDocs OCR scanning, digital archive & automated workflows',
      icon: <FileSpreadsheet className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onSelectSolution('information-management');
        onClose();
      }
    },
    {
      id: 'sol-infra',
      title: 'Enterprise IT Infrastructure & Systems',
      category: 'Solutions',
      description: 'Server clusters, hyperconverged compute, optical backbones',
      icon: <Server className="w-4 h-4 text-blue-400" />,
      action: () => {
        onSelectSolution('enterprise-it');
        onClose();
      }
    },
    {
      id: 'sol-comm',
      title: 'Unified Communications & IP Telephony',
      category: 'Solutions',
      description: 'Matrix enterprise IP-PBX, multi-branch zero-cost voice',
      icon: <PhoneCall className="w-4 h-4 text-teal-400" />,
      action: () => {
        onSelectSolution('communications');
        onClose();
      }
    },
    {
      id: 'sol-dev',
      title: 'Custom Software & Mobile Applications',
      category: 'Solutions',
      description: 'Tailored enterprise portals, mobile apps, core integrations',
      icon: <Code2 className="w-4 h-4 text-purple-400" />,
      action: () => {
        onSelectSolution('software-solutions');
        onClose();
      }
    },
    {
      id: 'tool-calc',
      title: 'Downtime & Ransomware ROI Calculator',
      category: 'Tools & Calculators',
      description: 'Model real financial losses from hours of downtime vs Quorum DR',
      icon: <Calculator className="w-4 h-4 text-amber-400" />,
      action: () => {
        onScrollToSection('downtime-calculator');
        onClose();
      }
    },
    {
      id: 'tool-quick-quote',
      title: '⚡ Quick Quote & Automated Scope Estimator',
      category: 'Tools & Calculators',
      description: 'Instant cost estimations & scoping for ARCON PAM, Firewalls, ManageEngine, PRTG, Fleets & DR',
      icon: <Calculator className="w-4 h-4 text-amber-400" />,
      action: () => {
        onNavigate('contact');
        onClose();
      }
    },
    {
      id: 'tool-blueprint',
      title: '30-Second Architecture Blueprint Builder',
      category: 'Tools & Calculators',
      description: 'Select your industry and generate a custom enterprise tech stack',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onScrollToSection('blueprint-builder');
        onClose();
      }
    },
    {
      id: 'tool-assess',
      title: '60-Second Infrastructure Maturity Assessment',
      category: 'Tools & Calculators',
      description: 'Interactive CIO readiness evaluation across 5 critical vectors',
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
      action: () => {
        onOpenAssessment();
        onClose();
      }
    },
    {
      id: 'hub-kampala',
      title: 'Uganda Headquarters (Kampala)',
      category: 'Regional Hubs',
      description: '1E, Kanti Mansion, Kira Road • +256 703922319 • sales@cits.co.ug',
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
      action: () => {
        onNavigate('contact');
        onClose();
      }
    },
    {
      id: 'hub-lusaka',
      title: 'Zambia Operations Hub (Lusaka)',
      category: 'Regional Hubs',
      description: 'Centrum Investments • Farmers House, Central Park • +260-979874244',
      icon: <MapPin className="w-4 h-4 text-amber-400" />,
      action: () => {
        onNavigate('contact');
        onClose();
      }
    },
    {
      id: 'hub-lilongwe',
      title: 'Malawi Operations Hub (Lilongwe)',
      category: 'Regional Hubs',
      description: 'Infosec Business Solution • Mpikisano House, Area 3 • +265 997 946 576',
      icon: <MapPin className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onNavigate('contact');
        onClose();
      }
    },
    {
      id: 'view-case-studies',
      title: 'Case Studies & Production Outcomes',
      category: 'Governance & Insights',
      description: 'Real deployments across Tier-1 Banks, Parastatals, & Healthcare',
      icon: <FileText className="w-4 h-4 text-slate-300" />,
      action: () => {
        onNavigate('case-studies');
        onClose();
      }
    },
    {
      id: 'view-consult',
      title: 'Schedule Confidential Enterprise Consultation',
      category: 'Governance & Insights',
      description: 'Direct session with a senior enterprise systems architect',
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      action: () => {
        onOpenConsultation();
        onClose();
      }
    },
    {
      id: 'action-whatsapp-assist',
      title: 'WhatsApp Quick Assist (+256 703922319)',
      category: 'Governance & Insights',
      description: 'Instant live chat with on-duty systems architects in East & Southern Africa',
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = 'https://wa.me/256703922319?text=Hello%20CITS%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20systems%20architect.';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150 cursor-pointer"
    >
      <div 
        className="w-full max-w-2xl bg-[#090f1d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#0d1629]">
          <Search className="w-5 h-5 text-sky-400 shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search enterprise solutions, calculators, regional hubs, or case studies..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              ESC to exit
            </span>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/60">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No matching items found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &ldquo;cybersecurity&rdquo;, &ldquo;quorum&rdquo;, &ldquo;downtime&rdquo;, or &ldquo;kampala&rdquo;</p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full text-left p-3 rounded-lg hover:bg-slate-800/70 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/50">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-4">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="text-sky-400/90">CITS Enterprise Quick Command</span>
        </div>
      </div>
    </div>
  );
};
