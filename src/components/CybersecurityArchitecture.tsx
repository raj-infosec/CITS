import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Network, 
  Flame, 
  Users, 
  Laptop, 
  Layers, 
  Database, 
  Lock, 
  ChevronRight, 
  CheckCircle,
  FileCheck2
} from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  badge: string;
  coreMechanism: string;
  citsSolutions: string[];
  threatMitigated: string;
  icon: React.ReactNode;
}

interface CybersecurityArchitectureProps {
  onLearnMore: () => void;
}

export const CybersecurityArchitecture: React.FC<CybersecurityArchitectureProps> = ({ onLearnMore }) => {
  const layers: LayerInfo[] = [
    {
      id: "internet",
      name: "01. Internet Boundary",
      badge: "Perimeter Ingress / Egress",
      coreMechanism: "Carrier-grade DDoS mitigation, DNS filtering, and threat intelligence feed subscription.",
      citsSolutions: ["External DNS Protection", "IP Reputation Filtering", "ISP Link Load Balancing"],
      threatMitigated: "Distributed denial of service, DNS poisoning, malicious command-and-control server callback.",
      icon: <Globe className="w-5 h-5 text-sky-400" />
    },
    {
      id: "network",
      name: "02. Perimeter Network",
      badge: "SD-WAN & Routing",
      coreMechanism: "Physical and logical network segmentation, micro-segmentation, and encrypted SD-WAN branch tunnels.",
      citsSolutions: ["VLAN Segmentation", "Branch SD-WAN Tunnels", "Bandwidth Traffic Shaping"],
      threatMitigated: "Lateral network traversal, sniffing of unencrypted traffic, branch interception.",
      icon: <Network className="w-5 h-5 text-indigo-400" />
    },
    {
      id: "firewall",
      name: "03. Next-Gen Firewall (NGFW)",
      badge: "Deep Packet Inspection",
      coreMechanism: "Sophos XGS and WatchGuard appliances performing line-speed TLS/SSL decryption, IPS, and application control.",
      citsSolutions: ["Deep SSL/TLS Decryption", "Intrusion Prevention System (IPS)", "Web & Application Categorization"],
      threatMitigated: "Encrypted payload delivery, zero-day exploit propagation, unauthorized shadow IT applications.",
      icon: <Flame className="w-5 h-5 text-amber-400" />
    },
    {
      id: "users",
      name: "04. Identity & Users",
      badge: "Zero-Trust Identity",
      coreMechanism: "Multi-Factor Authentication (MFA), strict role-based access control (RBAC), and conditional access policies.",
      citsSolutions: ["WatchGuard AuthPoint MFA", "Zero Trust Network Access (ZTNA)", "Security Awareness & Phishing Drills"],
      threatMitigated: "Credential stuffing, executive impersonation, compromised staff passwords.",
      icon: <Users className="w-5 h-5 text-emerald-400" />
    },
    {
      id: "endpoints",
      name: "05. Endpoints & Servers",
      badge: "EDR / XDR Workload Defense",
      coreMechanism: "Autonomous behavioral AI detecting memory injection, credential dumping, and ransomware file encryption.",
      citsSolutions: ["Sophos Intercept X EDR", "Server Lock Down", "Automated Device Isolation"],
      threatMitigated: "Ransomware encryption, privileged credential harvesting, zero-day Trojan execution.",
      icon: <Laptop className="w-5 h-5 text-cyan-400" />
    },
    {
      id: "applications",
      name: "06. Applications & Services",
      badge: "Application Hardening",
      coreMechanism: "Web Application Firewall (WAF), secure API gateway rate limiting, and continuous vulnerability scanning.",
      citsSolutions: ["Vulnerability Assessment & Pen Testing (VAPT)", "Secure Code Review", "API Traffic Filtering"],
      threatMitigated: "SQL injection, cross-site scripting (XSS), broken object-level authorization (BOLA).",
      icon: <Layers className="w-5 h-5 text-purple-400" />
    },
    {
      id: "data",
      name: "07. Critical Data Vault",
      badge: "Immutable Archival & Resilience",
      coreMechanism: "Quorum air-gapped immutable backup nodes and encrypted EDMS repositories preventing total business loss.",
      citsSolutions: ["Air-Gapped Immutable Snapshots", "Vicisoft Encrypted Repositories", "Sub-Minute Disaster Recovery"],
      threatMitigated: "Total data wiping, double-extortion ransomware, irreversible catastrophic corruption.",
      icon: <Database className="w-5 h-5 text-rose-400" />
    }
  ];

  const [activeLayerId, setActiveLayerId] = useState<string>("firewall");
  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[2];

  return (
    <section className="py-24 bg-[#0a1120] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background ambient grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80">
            <Lock className="w-3.5 h-3.5" />
            <span>Interactive Security Topology</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            Security is not a product.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-cyan-300 block sm:inline">
              It is an architecture.
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Protect the organisation from the network edge to the endpoint — with continuous visibility, strict access control, comprehensive assessment, and automated incident response.
          </p>
        </div>

        {/* Layered Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The 7 Stacked Architecture Layers */}
          <div className="lg:col-span-6 space-y-2">
            <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Select Architecture Layer to Inspect:
            </p>
            {layers.map((layer) => {
              const isSelected = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-800 border-sky-500 shadow-lg shadow-sky-950/50 ring-1 ring-sky-500'
                      : 'bg-slate-900/80 hover:bg-slate-850 border-slate-800/80 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isSelected ? 'bg-slate-950 text-sky-400' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {layer.icon}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {layer.name}
                      </p>
                      <p className="text-xs text-slate-400">{layer.badge}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Inspection Terminal for Active Layer */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {activeLayer.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                      Layer Defense Telemetry
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {activeLayer.name}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {activeLayer.badge}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {/* Mechanism */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Defense Mechanism
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeLayer.coreMechanism}
                  </p>
                </div>

                {/* Threat Mitigated */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-900/40 text-xs text-slate-300 space-y-1">
                  <span className="font-mono text-rose-400 uppercase font-semibold flex items-center gap-1.5">
                    <span>Threat Vectors Countered</span>
                  </span>
                  <p>{activeLayer.threatMitigated}</p>
                </div>

                {/* CITS Deployed Capabilities */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Verified CITS Engineering Delivery
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {activeLayer.citsSolutions.map((sol, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audits & Assessments note */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <FileCheck2 className="w-4 h-4 text-sky-400" />
                    <span>Includes periodic VAPT & configuration audits</span>
                  </div>
                  <button
                    onClick={onLearnMore}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Deep Dive &rarr;
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
