import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  MinusCircle 
} from 'lucide-react';

interface ArchitecturalComparisonSectionProps {
  onOpenConsultation: () => void;
}

export const ArchitecturalComparisonSection: React.FC<ArchitecturalComparisonSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'security' | 'continuity' | 'governance'>('all');

  const comparisonRows = [
    {
      category: 'security',
      dimension: 'Threat Detection & Isolation',
      traditional: 'Siloed antivirus on laptops that misses lateral ransomware movement; disconnected perimeter firewalls requiring manual patch cycles.',
      citsWay: 'Synchronized Security Fabric (Sophos). Endpoints and firewalls share live telemetry; infected hosts are automatically isolated in seconds without human delay.',
      citsAdvantage: 'Instant Auto-Isolation'
    },
    {
      category: 'continuity',
      dimension: 'Disaster Recovery RTO (Failover Time)',
      traditional: 'Overnight tape or cold cloud backup. When servers fail or get locked, restoration requires manual OS installs and 18 to 48 hours of downtime.',
      citsWay: 'Quorum onQ High-Availability DR. Continuous snapshotting produces live virtual clone standby; 1-click failover resumes operations in under 15 minutes.',
      citsAdvantage: 'Sub-15m Verified RTO'
    },
    {
      category: 'governance',
      dimension: 'Enterprise Information & Archives',
      traditional: 'Rooms of physical paper files, lost invoices, manual physical stamp approvals, and zero audit trails for compliance inspections.',
      citsWay: 'ViciDocs Enterprise EDMS. Automated batch OCR scanning, metadata indexing, role-based workflows, and digital compliance vaults.',
      citsAdvantage: '100% Audited Digitization'
    },
    {
      category: 'security',
      dimension: 'Perimeter Inspection Depth',
      traditional: 'Basic port-based packet filters that pass encrypted SSL/TLS traffic uninspected, leaving 85%+ of malware tunnels invisible.',
      citsWay: 'Deep Packet Inspection (DPI) with dedicated hardware acceleration, TLS 1.3 decryption, and zero-day cloud sandboxing.',
      citsAdvantage: 'Total TLS Decryption'
    },
    {
      category: 'continuity',
      dimension: 'Inter-Branch Communications',
      traditional: 'Individual telco phone lines per branch; significant ongoing cross-branch billing and poor mobile flexibility for traveling executives.',
      citsWay: 'Matrix Unified IP-PBX. Connects Kampala HQ to regional branches over secure VoIP tunnels; eliminates inter-branch call costs entirely.',
      citsAdvantage: 'Zero-Cost Branch Voice'
    },
    {
      category: 'governance',
      dimension: 'Engineering Support & SLA Presence',
      traditional: 'Broker / reseller model. No resident certified Tier-3 engineers; tickets routed to generic offshore overseas call centers.',
      citsWay: 'Certified on-ground systems architects with physical operational hubs in Kampala (HQ), Lusaka (Zambia), and Lilongwe (Malawi).',
      citsAdvantage: 'Local Resident Engineers'
    }
  ];

  const filteredRows = activeTab === 'all' 
    ? comparisonRows 
    : comparisonRows.filter(r => r.category === activeTab);

  return (
    <section className="py-20 md:py-28 bg-[#fafafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono text-slate-800 mb-4">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>THE ARCHITECTURAL CONTRAST</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-600">The CITS Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            The Difference Between Buying Hardware and{' '}
            <span className="font-serif italic font-normal text-sky-700">
              Architecting Resilience.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Most IT vendors in East and Southern Africa operate as commodity brokers — selling boxes and licenses, then walking away. CITS operates as your long-term enterprise systems architect.
          </p>
        </div>

        {/* Filter Pills with Distinct Color Themes */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/90'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'all' ? 'bg-sky-400' : 'bg-slate-400'}`} />
            <span>All Architectural Tenets ({comparisonRows.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'security'
                ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm shadow-rose-600/20 ring-1 ring-rose-600'
                : 'bg-rose-50/70 text-rose-900 hover:bg-rose-100/80 border border-rose-200/80'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'security' ? 'bg-white' : 'bg-rose-500'}`} />
            <span>Cybersecurity &amp; Defense</span>
          </button>
          <button
            onClick={() => setActiveTab('continuity')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'continuity'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-600/20 ring-1 ring-amber-600'
                : 'bg-amber-50/70 text-amber-900 hover:bg-amber-100/80 border border-amber-200/80'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'continuity' ? 'bg-white' : 'bg-amber-500'}`} />
            <span>Disaster Recovery &amp; Uptime</span>
          </button>
          <button
            onClick={() => setActiveTab('governance')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'governance'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm shadow-purple-600/20 ring-1 ring-purple-600'
                : 'bg-purple-50/70 text-purple-900 hover:bg-purple-100/80 border border-purple-200/80'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'governance' ? 'bg-white' : 'bg-purple-500'}`} />
            <span>Information &amp; Presence</span>
          </button>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-50/70 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
            <div className="md:col-span-3 p-4 border-b md:border-b-0 md:border-r border-slate-200 flex items-center">
              Dimension / Vector
            </div>
            <div className="md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-slate-200 flex items-center gap-2 text-rose-700">
              <MinusCircle className="w-4 h-4 text-rose-500" />
              <span>Typical Hardware Reseller</span>
            </div>
            <div className="md:col-span-5 p-4 bg-sky-50/70 text-sky-950 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>The CITS Systems Architecture</span>
              </span>
              <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-sky-200/80 text-sky-900 font-bold">
                ENTERPRISE STANDARD
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200">
            {filteredRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/50 transition-colors">
                
                {/* Dimension */}
                <div className="md:col-span-3 p-4 sm:p-5 md:border-r border-slate-200 flex flex-col justify-center">
                  <span className="font-bold text-sm text-slate-900">
                    {row.dimension}
                  </span>
                  <span className="inline-block mt-1 font-mono text-[10px] text-sky-700 uppercase">
                    {row.citsAdvantage}
                  </span>
                </div>

                {/* Traditional Reseller */}
                <div className="md:col-span-4 p-4 sm:p-5 md:border-r border-slate-200 bg-rose-50/20 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>

                {/* CITS Systems Architecture */}
                <div className="md:col-span-5 p-4 sm:p-5 bg-sky-50/30 text-xs text-slate-800 leading-relaxed flex items-start gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.citsWay}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">Ready to elevate your infrastructure?</span> Schedule an architecture briefing with our senior technical leads.
            </div>
            <button
              id="comparison-schedule-briefing-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
