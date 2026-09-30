import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  PhoneCall, 
  Server, 
  Layers, 
  Download, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface BlueprintConfiguratorSectionProps {
  onOpenConsultation: (inquiryContext?: string) => void;
  onSelectSolution: (slug: string) => void;
}

export const BlueprintConfiguratorSection: React.FC<BlueprintConfiguratorSectionProps> = ({
  onOpenConsultation,
  onSelectSolution,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('banking');
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    'ransomware-defense',
    'instant-dr'
  ]);

  const industries = [
    { id: 'banking', label: 'Banking & Financial Services', icon: '🏦' },
    { id: 'government', label: 'Government & Parastatals', icon: '🏛️' },
    { id: 'manufacturing', label: 'Manufacturing & Supply Chain', icon: '🏭' },
    { id: 'healthcare', label: 'Healthcare & Hospital Networks', icon: '🏥' },
    { id: 'education', label: 'Higher Education & Universities', icon: '🎓' },
    { id: 'ngo', label: 'International NGOs & Development', icon: '🌍' },
  ];

  const priorities = [
    { id: 'ransomware-defense', label: 'Ransomware & Perimeter Defense', category: 'Security' },
    { id: 'instant-dr', label: 'Zero-Downtime DR & Failover (<15m)', category: 'Resilience' },
    { id: 'paperless-edms', label: 'Document Digitization & OCR Indexing', category: 'Information' },
    { id: 'multi-branch-voip', label: 'Zero-Cost Multi-Branch Telephony', category: 'Connectivity' },
    { id: 'compliance-vapt', label: 'Zero-Trust & ISO 27001 Security Audits', category: 'Governance' },
    { id: 'core-infra', label: 'High-Density Server & Storage Clusters', category: 'Compute' },
  ];

  const togglePriority = (id: string) => {
    if (selectedPriorities.includes(id)) {
      if (selectedPriorities.length > 1) {
        setSelectedPriorities(selectedPriorities.filter(p => p !== id));
      }
    } else {
      if (selectedPriorities.length < 3) {
        setSelectedPriorities([...selectedPriorities, id]);
      } else {
        setSelectedPriorities([...selectedPriorities.slice(1), id]);
      }
    }
  };

  // Generate blueprint based on selections
  const getBlueprintRecommendation = () => {
    switch (selectedIndustry) {
      case 'banking':
        return {
          title: 'Tier-1 Financial Resiliency & Compliance Blueprint',
          compliance: 'Zero-Trust Architecture Guidelines • ISO 27001 • PCI-DSS',
          stack: [
            { name: 'Sophos XGS Dual-Firewall Cluster', role: 'Perimeter DPI & TLS 1.3 Inspection', slug: 'cybersecurity' },
            { name: 'Quorum onQ Hybrid DR Appliance', role: 'Sub-15m Instant Core Banking Failover', slug: 'business-continuity' },
            { name: 'ViciDocs Financial Archive Vault', role: 'Loan Files & KYC OCR Compliance Storage', slug: 'information-management' },
            { name: 'Matrix ETERNITY IP-PBX Cluster', role: 'Encrypted Multi-Branch Teller Voice Lines', slug: 'communications' },
          ],
          rolloutTimeline: '3 to 6 Weeks with Zero Core Banking Downtime',
          keyBenefit: 'Guarantees sub-15 minute RTO and comprehensive air-gapped immunity against banking extortion attacks.'
        };
      case 'government':
        return {
          title: 'Sovereign Institutional Integrity & Registry Blueprint',
          compliance: 'National Data Protection Act • Public Procurement Standards • E-Governance Framework',
          stack: [
            { name: 'ViciDocs Sovereign EDMS Engine', role: 'Millions of Citizen & Ministry Records OCR Ingestion', slug: 'information-management' },
            { name: 'Sophos Synchronized Zero-Trust', role: 'Endpoint & Perimeter National Threat Interception', slug: 'cybersecurity' },
            { name: 'Quorum Air-Gapped Standby Node', role: 'Offsite Ministry Disaster Recovery', slug: 'business-continuity' },
            { name: 'Enterprise Structured Optical Backbone', role: 'Inter-Departmental High-Bandwidth Mesh', slug: 'enterprise-it' },
          ],
          rolloutTimeline: '4 to 8 Weeks Phased Ministry Modernization',
          keyBenefit: 'Eliminates lost citizen documents, reduces manual requisition delays, and enforces strict auditable role-based approvals.'
        };
      case 'manufacturing':
        return {
          title: 'Continuous Industrial Production & SCADA Defense Blueprint',
          compliance: 'ISO 9001 / 22000 Traceability • OT/IT Network Segmentation Standards',
          stack: [
            { name: 'Sophos Industrial OT/IT Segmenter', role: 'Isolates SCADA / PLC from corporate ransomware', slug: 'cybersecurity' },
            { name: 'Quorum onQ Factory Appliance', role: 'Automated ERP & Warehouse Inventory Standby', slug: 'business-continuity' },
            { name: 'Matrix Multi-Site VoIP Gateway', role: 'Factory Floor to Kampala HQ Free Communication', slug: 'communications' },
            { name: 'ViciDocs Batch Quality Ingestion', role: 'COA & Batch Records Digitization', slug: 'information-management' },
          ],
          rolloutTimeline: '2 to 4 Weeks Non-Disruptive Plant Deployment',
          keyBenefit: 'Guarantees the factory line never halts due to office IT network failures or ransomware propagation.'
        };
      default:
        return {
          title: 'Enterprise Multi-Site Architecture Blueprint',
          compliance: 'Regional Data Protection Standards • Business Continuity ISO 22301',
          stack: [
            { name: 'Sophos Synchronized Security', role: 'Consolidated Edge & Endpoint Defense', slug: 'cybersecurity' },
            { name: 'Quorum Automated DR & Failover', role: '1-Click Server Recovery in 14 Seconds', slug: 'business-continuity' },
            { name: 'ViciDocs Enterprise Repository', role: 'Institutional Memory & Contract Workflow', slug: 'information-management' },
            { name: 'Matrix IP Telephony Network', role: 'Regional Voice Extension Bridging', slug: 'communications' },
          ],
          rolloutTimeline: '3 to 5 Weeks Phased Transition',
          keyBenefit: 'Consolidates disparate IT systems into a cohesive, secure, and resilient technology foundation.'
        };
    }
  };

  const currentBlueprint = getBlueprintRecommendation();

  const handleRequestConsultation = () => {
    onOpenConsultation(
      `Custom Architecture Blueprint generated for: ${industries.find(i => i.id === selectedIndustry)?.label}. Priorities: ${selectedPriorities.join(', ')}. Stack: ${currentBlueprint.stack.map(s => s.name).join(' + ')}. Requesting formal architecture review.`
    );
  };

  return (
    <section id="blueprint-builder" className="py-20 md:py-28 bg-[#090f1d] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-mono text-emerald-400 mb-4">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE ARCHITECTURE CONFIGURATOR</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-300">Tailored In 30 Seconds</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Design Your Recommended Enterprise{' '}
            <span className="font-serif italic font-normal text-emerald-400">
              Technology Blueprint.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Select your industry vertical and critical risk focus. Our engine configures the exact hardware, software, and compliance architecture engineered for your scale.
          </p>
        </div>

        {/* Step 1 & 2 Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step 1: Industry Selector */}
            <div className="bg-[#0e1628] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Step 1: Select Your Industry Vertical
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all flex items-center gap-2.5 ${
                      selectedIndustry === ind.id
                        ? 'bg-sky-950/80 border-sky-500/80 text-white shadow-sm ring-1 ring-sky-500/50'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{ind.icon}</span>
                    <span className="line-clamp-1">{ind.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Critical Priorities */}
            <div className="bg-[#0e1628] border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Step 2: Select Pressing Challenges (Max 3)
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  {selectedPriorities.length}/3 Selected
                </span>
              </div>

              <div className="space-y-2">
                {priorities.map((p) => {
                  const isChecked = selectedPriorities.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => togglePriority(p.id)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-950/60 border-emerald-600/80 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked 
                            ? 'bg-emerald-500 border-emerald-400 text-slate-950' 
                            : 'border-slate-700 bg-slate-950'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{p.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {p.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Architecture Blueprint Output (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0b1222] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Header of Generated Blueprint */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  RECOMMENDED ARCHITECTURE BLUEPRINT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {currentBlueprint.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-sky-300 border border-slate-800 shrink-0">
                Turnkey SLA
              </span>
            </div>

            {/* Compliance Benchmarks */}
            <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Compliance Standard:</span>{' '}
                <span className="text-slate-300">{currentBlueprint.compliance}</span>
              </div>
            </div>

            {/* Integrated Technology Stack */}
            <div className="mt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Core Architectural Components
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentBlueprint.stack.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {item.role}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectSolution(item.slug)}
                      className="mt-3 text-[11px] text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-medium"
                    >
                      <span>Explore Capability</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Outcome & Timeline */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-mono text-slate-400 uppercase text-[10px] block">
                  Implementation Estimate
                </span>
                <span className="font-semibold text-white mt-0.5 block">
                  {currentBlueprint.rolloutTimeline}
                </span>
              </div>

              <div>
                <span className="font-mono text-slate-400 uppercase text-[10px] block">
                  CITS Strategic Warranty
                </span>
                <span className="text-slate-300 mt-0.5 block">
                  Certified Tier-3 deployment with resident regional engineer support.
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Custom scoped and validated by CITS Systems Architects in Kampala.
              </p>

              <button
                id="blueprint-request-consultation-btn"
                onClick={handleRequestConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md font-mono uppercase tracking-wider"
              >
                <span>Request Blueprint Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
