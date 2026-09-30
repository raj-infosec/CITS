import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Scan, 
  Binary, 
  GitMerge, 
  Stamp, 
  Archive, 
  Search, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

interface InformationManagementSectionProps {
  onLearnMore: () => void;
}

export const InformationManagementSection: React.FC<InformationManagementSectionProps> = ({ onLearnMore }) => {
  const lifecycleSteps = [
    {
      id: "paper",
      title: "Physical Paper",
      subtitle: "Unstructured files",
      icon: <FileText className="w-5 h-5 text-amber-600" />,
      detail: "Physical files, procurement vouchers, and board resolutions dispersed across physical filing cabinets."
    },
    {
      id: "digital",
      title: "Digital Ingestion",
      subtitle: "High-speed scanning",
      icon: <Scan className="w-5 h-5 text-indigo-600" />,
      detail: "Batch digitisation via industrial optical scanners converting paper into lossless digital formats."
    },
    {
      id: "indexed",
      title: "OCR & Indexing",
      subtitle: "Full-text recognition",
      icon: <Binary className="w-5 h-5 text-sky-600" />,
      detail: "Automated OCR extracting invoice numbers, vendor names, dates, and taxonomies for instant search."
    },
    {
      id: "workflow",
      title: "Workflow Automation",
      subtitle: "Sequential routing",
      icon: <GitMerge className="w-5 h-5 text-teal-600" />,
      detail: "Configurable business rules routing documents to finance, legal, and executive desks with escalation timers."
    },
    {
      id: "approval",
      title: "Digital Approval",
      subtitle: "Audited sign-off",
      icon: <Stamp className="w-5 h-5 text-emerald-600" />,
      detail: "Tamper-evident digital signatures, role-based authorizations, and timestamped decision audit trails."
    },
    {
      id: "archive",
      title: "Secure Archival",
      subtitle: "Policy retention",
      icon: <Archive className="w-5 h-5 text-purple-600" />,
      detail: "Immutable cloud or on-premise storage adhering to statutory 7-10 year compliance disposal schedules."
    },
    {
      id: "insight",
      title: "Instant Retrieval",
      subtitle: "Enterprise search",
      icon: <Search className="w-5 h-5 text-blue-600" />,
      detail: "Search through millions of records in seconds with granular departmental permissions."
    }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default on workflow automation

  return (
    <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 mb-3 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Enterprise Document & Workflow Systems</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
            Your information should work{' '}
            <span className="text-indigo-600 block sm:inline">as hard as your people.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Eliminate paper bottlenecks and compliance blind spots. Transform physical records into audited, automated digital workflows with enterprise EDMS.
          </p>
        </div>

        {/* The Visual Lifecycle Chain */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 flex items-center justify-between">
            <span>The EDMS Lifecycle Pipeline</span>
            <span className="text-indigo-600 font-semibold">Click a stage to inspect</span>
          </div>

          {/* Interactive Steps Horizontal Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {lifecycleSteps.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-500'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-indigo-300' : 'text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div className={`p-1 rounded-md ${
                      isSelected ? 'bg-slate-800' : 'bg-white shadow-xs'
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className={`font-bold text-xs ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[10px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Focus */}
          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200">
                  PIPELINE STAGE 0{activeStepIndex + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  {lifecycleSteps[activeStepIndex].title}
                </h4>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {lifecycleSteps[activeStepIndex].detail}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Vicisoft EDMS Platform
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Granular RBAC Security
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  Audit Trail Logging
                </span>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                EDMS Business Impact
              </span>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Sub-second record retrieval across millions of files</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Automated procurement & voucher approval chains</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Non-repudiable audit logs for compliance audits</span>
                </li>
              </ul>
              <button
                onClick={onLearnMore}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <span>Explore Information Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
