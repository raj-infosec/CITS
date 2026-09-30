import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';

interface WhatsAppQuickAssistProps {
  defaultOpen?: boolean;
}

export const WhatsAppQuickAssist: React.FC<WhatsAppQuickAssistProps> = ({ defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const [selectedCountry, setSelectedCountry] = useState<string>('Uganda');
  const [selectedTopic, setSelectedTopic] = useState<string>('General Enterprise Inquiry');
  const [customNote, setCustomNote] = useState<string>('');
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const flyoutRef = useRef<HTMLDivElement>(null);

  const regionalWhatsAppMap: Record<string, { label: string; numberClean: string; displayPhone: string; city: string }> = {
    Uganda: {
      label: 'Uganda (HQ)',
      numberClean: '256703922319',
      displayPhone: '+256 703922319',
      city: 'Kampala'
    },
    Zambia: {
      label: 'Zambia Hub',
      numberClean: '260979874244',
      displayPhone: '+260 979874244',
      city: 'Lusaka'
    },
    Malawi: {
      label: 'Malawi Hub',
      numberClean: '265997946576',
      displayPhone: '+265 997 946 576',
      city: 'Lilongwe'
    }
  };

  const topicOptions = [
    { label: 'General Enterprise Inquiry', text: 'I would like to speak with a CITS systems architect regarding enterprise IT solutions.' },
    { label: 'Cybersecurity & Firewalls', text: 'I am inquiring about Next-Gen Firewall (Sophos/WatchGuard), endpoint security, or VAPT audit.' },
    { label: 'Disaster Recovery (Quorum DR)', text: 'I want to discuss business continuity, instant failover appliances, and sub-15min RTO.' },
    { label: 'EDMS & Document Digitization', text: 'I need information on ViciDocs enterprise document management, OCR scanning, and paperless workflows.' },
    { label: 'Unified Voice & VoIP (Matrix)', text: 'I want to evaluate enterprise IP-PBX, multi-branch voice trunking, or boardroom conferencing.' },
    { label: 'Urgent Incident / Technical Support', text: 'URGENT: I require immediate technical assistance or incident escalation for our infrastructure.' }
  ];

  // Close flyout on ESC key or clicking outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (flyoutRef.current && !flyoutRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const activeOffice = regionalWhatsAppMap[selectedCountry] || regionalWhatsAppMap.Uganda;
  const currentTopicObj = topicOptions.find((t) => t.label === selectedTopic) || topicOptions[0];

  const buildWhatsAppUrl = () => {
    const messageBody = [
      `Hello CITS Engineering Team,`,
      `[Topic]: ${selectedTopic}`,
      `[Inquiry]: ${currentTopicObj.text}`,
      customNote ? `[Notes]: ${customNote.trim()}` : '',
      `[Sent from CITS Portal: cits.co.ug]`
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${activeOffice.numberClean}?text=${encodeURIComponent(messageBody)}`;
  };

  return (
    <aside aria-label="WhatsApp quick assistance" className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      
      {/* Expanded Quick Assist Dialog Card */}
      {isOpen && (
        <div
          ref={flyoutRef}
          role="dialog"
          aria-labelledby="whatsapp-dialog-title"
          id="whatsapp-assist-card"
          className="mb-3 w-[92vw] sm:w-[380px] rounded-2xl bg-slate-900/95 border border-slate-700/90 text-white shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-slate-900 p-4 border-b border-emerald-700/40 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-900/50 transition-colors"
              aria-label="Close WhatsApp Quick Assist"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-md shadow-emerald-950/40 shrink-0">
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 id="whatsapp-dialog-title" className="text-sm font-bold text-white tracking-tight">
                    CITS Quick Assist
                  </h2>
                  <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live WhatsApp
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100/90">
                  Connect with a certified systems architect in East &amp; Southern Africa
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4 space-y-3.5 text-xs">
            
            {/* Regional Hub Selector */}
            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1.5">
                Route To Regional Engineering Desk:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {Object.entries(regionalWhatsAppMap).map(([countryKey, data]) => {
                  const isSelected = selectedCountry === countryKey;
                  return (
                    <button
                      key={countryKey}
                      type="button"
                      onClick={() => setSelectedCountry(countryKey)}
                      className={`p-2 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-emerald-950/90 border-emerald-500/60 text-white shadow-xs'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <div className="font-semibold text-[11px] flex items-center justify-between">
                        <span>{countryKey}</span>
                        {countryKey === 'Uganda' && (
                          <span className="text-[9px] font-mono text-emerald-400">HQ</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">
                        {data.city}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Topic Selector */}
            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1.5">
                Inquiry Focus:
              </label>
              <div className="relative">
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full appearance-none px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500 pr-8"
                >
                  {topicOptions.map((opt) => (
                    <option key={opt.label} value={opt.label} className="bg-slate-900 text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Optional Specific Note */}
            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-400 font-semibold mb-1">
                Additional Context <span className="text-slate-500 font-normal">(Optional)</span>:
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g., 150 users, looking for Sophos XGS quote..."
                className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Message Preview Box */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-sans space-y-1">
              <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Target: {activeOffice.displayPhone}
                </span>
                <span>Direct WhatsApp Chat</span>
              </div>
              <p className="line-clamp-2 italic text-slate-400 text-[10px] pt-0.5 border-t border-slate-800/80">
                "{currentTopicObj.text}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 space-y-2">
              <a
                id="whatsapp-launch-btn"
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
                <span>Open in WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1">
                <a
                  href={`tel:${activeOffice.numberClean}`}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>Call {activeOffice.displayPhone}</span>
                </a>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3 h-3" />
                  Avg. response &lt;15 mins
                </span>
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Verified CITS Regional Directory
            </span>
            <span className="font-mono">SLA 24/7/365</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="relative group">
        
        {/* Tooltip on hover (when closed) */}
        {!isOpen && (
          <div className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
            <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>WhatsApp Quick Assist &bull; {activeOffice.displayPhone}</span>
            </div>
          </div>
        )}

        <button
          id="floating-whatsapp-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasInteracted(true);
          }}
          className={`relative flex items-center gap-2.5 px-4 py-3 rounded-full font-semibold text-xs tracking-wide transition-all shadow-xl hover:scale-105 active:scale-95 ${
            isOpen
              ? 'bg-slate-800 text-white border border-slate-700 shadow-slate-950/50'
              : 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-emerald-950/40 border border-emerald-400/40'
          }`}
          aria-label={isOpen ? 'Close WhatsApp Quick Assist' : 'Open WhatsApp Quick Assist'}
          aria-expanded={isOpen}
        >
          {/* Animated online pulse */}
          {!isOpen && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-900" />
            </span>
          )}

          <MessageCircle className={`w-5 h-5 ${isOpen ? 'text-white' : 'fill-slate-950 text-[#25D366]'}`} />
          
          <span className="hidden sm:inline font-bold">
            {isOpen ? 'Close Assist' : 'WhatsApp Assist'}
          </span>
          
          <span className="sm:hidden font-bold">
            {isOpen ? 'Close' : 'Chat'}
          </span>
        </button>
      </div>

    </aside>
  );
};
