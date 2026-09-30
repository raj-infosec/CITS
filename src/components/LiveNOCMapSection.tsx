import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  Activity, 
  ShieldCheck, 
  Server, 
  Radio, 
  Wifi, 
  CheckCircle2, 
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';
import { REGIONAL_OFFICES } from '../data/citsData';

interface LiveNOCMapSectionProps {
  onNavigateToContact: () => void;
}

export const LiveNOCMapSection: React.FC<LiveNOCMapSectionProps> = ({
  onNavigateToContact,
}) => {
  const [selectedHub, setSelectedHub] = useState<string>('uganda');
  const [pingRunning, setPingRunning] = useState<boolean>(false);
  const [lastPingTime, setLastPingTime] = useState<number>(12);

  const hubDetails: Record<string, {
    country: string;
    city: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    latency: number;
    engineers: string;
    sla: string;
    specialty: string;
  }> = {
    uganda: {
      country: 'Uganda',
      city: 'Kampala (Regional HQ)',
      name: 'Complete IT Solutions Uganda Limited',
      address: '1E, Kanti Mansion, Kira Road, Kampala',
      phone: '+256 703922319',
      email: 'sales@cits.co.ug',
      latency: 12,
      engineers: 'Tier-3 Certified Systems Architects & Network Engineers',
      sla: '99.998% Uptime SLA • 24/7 Rapid Escalation',
      specialty: 'Core Architecture, Quorum HA Testing, EDMS Digitization Hub, Sophos Platinum Deployment'
    },
    zambia: {
      country: 'Zambia',
      city: 'Lusaka (Operations Hub)',
      name: 'Centrum Investments Limited',
      address: '135, First Floor, Farmers House, Central Park, Cairo Road, Lusaka',
      phone: '+260-979874244',
      email: 'sales@centrumitafrica.com',
      latency: 19,
      engineers: 'Resident Security & Infrastructure Specialists',
      sla: '99.995% Uptime SLA • On-Site Dispatch',
      specialty: 'Mining SCADA Defense, Copperbelt Multi-Branch Voice, Disaster Recovery Staging'
    },
    malawi: {
      country: 'Malawi',
      city: 'Lilongwe (Operations Hub)',
      name: 'Infosec Business Solution Limited',
      address: 'Mpikisano House, European Business Centres 03, Area 3, Lilongwe',
      phone: '+265 997 946 576',
      email: 'sales@infosecmalawi.com',
      latency: 23,
      engineers: 'Enterprise Systems & Information Governance Team',
      sla: '99.995% Uptime SLA • Local Response',
      specialty: 'Public Sector Records Management, Sovereign Financial Defense, Structured Cabling'
    }
  };

  const current = hubDetails[selectedHub];

  const handleRunPingTest = () => {
    setPingRunning(true);
    setTimeout(() => {
      setLastPingTime(Math.floor(Math.random() * 6) + current.latency - 2);
      setPingRunning(false);
    }, 600);
  };

  return (
    <section className="py-20 md:py-28 bg-[#070b14] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400 mb-4">
              <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>REGIONAL NETWORK OPERATIONS (NOC)</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-slate-300">East & Southern Africa Peering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Physical Presence.{' '}
              <span className="font-serif italic font-normal text-sky-300">
                Sovereign Engineering Depth.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              When enterprise infrastructure faces an incident, remote advice isn&apos;t enough. CITS maintains physical offices, certified resident engineers, and regional spare parts staging across Uganda, Zambia, and Malawi.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono uppercase tracking-wider text-slate-200 transition-colors shrink-0"
          >
            <span>View All Regional Offices</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>

        {/* Operational Hubs Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(hubDetails).map(([key, hub]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedHub(key);
                setLastPingTime(hub.latency);
              }}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedHub === key
                  ? 'bg-gradient-to-b from-slate-800/90 to-slate-900/90 border-sky-500/80 shadow-lg ring-1 ring-sky-500/40'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  {hub.country}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <h4 className="text-base font-bold text-white mt-1">
                {hub.city}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 truncate">
                {hub.name}
              </p>
            </button>
          ))}
        </div>

        {/* Detailed Hub Telemetry Console */}
        <div className="bg-[#0b1222] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Regional Authority Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Verified Regional Entity</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {current.name}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {current.address}
                </p>
              </div>

              {/* Contact direct lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <a 
                  href={`tel:${current.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors text-slate-200 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">DIRECT OPERATIONS DESK</span>
                    <span>{current.phone}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${current.email}`}
                  className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors text-slate-200 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">OFFICIAL INQUIRY ROUTE</span>
                    <span>{current.email}</span>
                  </div>
                </a>
              </div>

              {/* Engineering capability details */}
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs">
                  <span className="font-mono text-slate-500 uppercase text-[10px] block">
                    Regional Engineering Capabilities
                  </span>
                  <p className="text-slate-200 font-medium mt-0.5">
                    {current.engineers}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs">
                  <span className="font-mono text-slate-500 uppercase text-[10px] block">
                    Core Specialization in Territory
                  </span>
                  <p className="text-slate-300 mt-0.5">
                    {current.specialty}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Live Peering & Telemetry Metrics (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-6 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 uppercase tracking-wider text-[11px]">
                  LIVE LINK TELEMETRY
                </span>
                <button
                  onClick={handleRunPingTest}
                  disabled={pingRunning}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-700 transition-colors"
                >
                  <RefreshCw className={`w-3 h-3 ${pingRunning ? 'animate-spin' : ''}`} />
                  <span>{pingRunning ? 'PINGING...' : 'TEST PING'}</span>
                </button>
              </div>

              {/* Ping and Uptime stats */}
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400 font-sans">Round-Trip Latency:</span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {lastPingTime} ms (Optimal)
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400 font-sans">Availability SLA:</span>
                  <span className="text-sky-300 font-bold">
                    99.998% Verified
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400 font-sans">On-Ground Dispatch:</span>
                  <span className="text-white">
                    Under 2 Hours (Metropolitan)
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-slate-900">
                  <span className="text-slate-400 font-sans">Spare Parts Staging:</span>
                  <span className="text-white">
                    Local Warehouse Stock
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 font-sans">Security Compliance:</span>
                  <span className="text-emerald-400">
                    ISO 27001 Aligned
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-sans">
                Real-time heartbeat monitoring synchronized with CITS Central Network Operations in Kampala.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
