import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Server, 
  RefreshCw, 
  PhoneCall, 
  FileSpreadsheet, 
  Layers, 
  HardDrive, 
  Cpu, 
  Radio, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Shield,
  Zap,
  Lock
} from 'lucide-react';

export type HeaderTabType = 'solutions' | 'products' | 'stack' | 'services' | 'industries';

interface HeaderAnimatedVisualProps {
  activeTab: HeaderTabType;
  solutionSlug?: string;
  productCategory?: string;
  onNavigateToProducts?: () => void;
  onNavigateToPartners?: () => void;
  onNavigateToSolutions?: () => void;
  onOpenConsultation?: () => void;
  onSelectSolutionSlug?: (slug: string) => void;
}

export const HeaderAnimatedVisual: React.FC<HeaderAnimatedVisualProps> = ({
  activeTab,
  solutionSlug = 'cybersecurity',
  productCategory,
  onNavigateToProducts,
  onNavigateToPartners,
  onNavigateToSolutions,
  onOpenConsultation,
  onSelectSolutionSlug,
}) => {
  // Visual configuration mapping based on active tab and selected solution
  const getVisualContent = () => {
    if (activeTab === 'services') {
      return {
        id: 'services',
        title: 'Advisory, VAPT & Managed Operations',
        subtitle: 'Security Audits, Disaster Drills & 24/7 Enterprise SLAs',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        badge: 'Professional Services & Engineering',
        badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/60',
        primaryMetric: '< 15-Min Response SLA',
        secondaryMetric: '100% Certified Engineers',
        chips: ['VAPT Penetration Audits', 'DR Runbook Drills', '24/7 NOC / SOC Support', 'Pre-Configuration Staging', 'Executive Governance'],
        telemetry: [
          { label: 'Critical Response Window', val: '< 15 Mins Guaranteed', ok: true },
          { label: 'Engineering Certifications', val: 'CISA, CISSP, Fortinet, Sophos', ok: true },
          { label: 'Deployment Hub', val: 'Kampala Staging Facility', ok: true },
        ],
        icon: Activity,
        accentRing: 'border-emerald-500/30 shadow-emerald-500/10',
        actionLabel: onOpenConsultation ? 'Request Advisory Consultation' : undefined,
        action: onOpenConsultation
      };
    }

    if (activeTab === 'industries') {
      return {
        id: 'industries',
        title: 'Sector-Tailored Architectures',
        subtitle: 'Banking, Public Sector, Healthcare & Manufacturing Ready',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        badge: 'Sector-Specific Workloads',
        badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-950/60',
        primaryMetric: 'Zero Downtime Target',
        secondaryMetric: 'Full Audit Alignment',
        chips: ['Core Banking & FinTech', 'Public Sector & Ministries', 'Hospital & EHR Security', 'Enterprise Manufacturing', 'Cross-Border NGOs'],
        telemetry: [
          { label: 'Governance Readiness', val: 'Zero-Trust & ISO 27001 Aligned', ok: true },
          { label: 'High Availability', val: 'Active-Active Disaster Recovery', ok: true },
          { label: 'Data Sovereignty', val: 'On-Premise Encrypted Storage', ok: true },
        ],
        icon: Layers,
        accentRing: 'border-purple-500/30 shadow-purple-500/10',
        actionLabel: onOpenConsultation ? 'Consult an Industry Architect' : undefined,
        action: onOpenConsultation
      };
    }

    if (activeTab === 'products') {
      if (productCategory === 'servers') {
        return {
          id: 'prod-servers',
          title: 'Dell PowerEdge & HPE ProLiant',
          subtitle: 'Rackmount & Tower Enterprise Compute Fleets',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          badge: 'Certified Enterprise Compute',
          badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-950/60',
          primaryMetric: 'Dual Xeon / EPYC',
          secondaryMetric: 'NBD On-Site Replacement',
          chips: ['PowerEdge R760', 'ProLiant DL380 Gen11', 'iDRAC9 Enterprise', 'Redundant Platinum PSU'],
          telemetry: [
            { label: 'Inventory Staging', val: 'Kampala Hub Ready', ok: true },
            { label: 'Thermal Efficiency', val: 'Direct Multi-Vector Cooling', ok: true },
            { label: 'Fault Tolerance', val: 'Hot-Plug SAS/NVMe RAID', ok: true },
          ],
          icon: Server,
          accentRing: 'border-amber-500/30 shadow-amber-500/10',
          actionLabel: 'Browse All Server Configurations',
          action: onNavigateToProducts
        };
      }

      if (productCategory === 'laptops') {
        return {
          id: 'prod-laptops',
          title: 'HP EliteBook & Lenovo ThinkPad',
          subtitle: 'Commercial Workstations & Executive Ultrabooks',
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
          badge: 'Commercial Fleet Deployment',
          badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-950/60',
          primaryMetric: 'MIL-SPEC Tested',
          secondaryMetric: '3-Year Manufacturer Warranty',
          chips: ['EliteBook 840 G10', 'ThinkPad T14 Gen 4', 'Sure Start Gen7 BIOS', 'vPro Enterprise'],
          telemetry: [
            { label: 'Fleet Imaging', val: 'Zero-Touch Provisioning', ok: true },
            { label: 'Battery Health', val: 'Long-Life Fast Charge', ok: true },
            { label: 'Hardware TPM 2.0', val: 'Encrypted BitLocker Active', ok: true },
          ],
          icon: Cpu,
          accentRing: 'border-rose-500/30 shadow-rose-500/10',
          actionLabel: 'Browse Commercial Laptops',
          action: onNavigateToProducts
        };
      }

      if (productCategory === 'networking') {
        return {
          id: 'prod-networking',
          title: 'UniFi Enterprise Fiber & PoE+',
          subtitle: 'Cloud Gateways & High-Density Wi-Fi 6/7 APs',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
          badge: 'Enterprise Networking Infrastructure',
          badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/60',
          primaryMetric: '10 Gbps SFP+ Uplinks',
          secondaryMetric: 'Zero License Renewal Fees',
          chips: ['UniFi Switch Enterprise 48 PoE', 'U6 Enterprise AP', 'Cloud Gateway Ultra', 'VLAN Segmentation'],
          telemetry: [
            { label: 'PoE Power Budget', val: '720W Available', ok: true },
            { label: 'Wireless Density', val: '600+ Clients Per AP', ok: true },
            { label: 'Central Console', val: 'Single-Pane UniFi OS', ok: true },
          ],
          icon: Radio,
          accentRing: 'border-cyan-500/30 shadow-cyan-500/10',
          actionLabel: 'View UniFi Switching Hardware',
          action: onNavigateToProducts
        };
      }

      return {
        id: 'products',
        title: 'Hardware & Platform Fleet',
        subtitle: 'Pre-Staged Hardware & Certified Software',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80',
        badge: 'Enterprise Hardware Inventory',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-950/60',
        primaryMetric: '100% In-Stock Spares',
        secondaryMetric: 'Direct OEM Warranties',
        chips: ['Dell PowerEdge', 'HPE ProLiant', 'HP EliteBook', 'Lenovo ThinkPad', 'UniFi 48-PoE'],
        telemetry: [
          { label: 'Compute Availability', val: 'Active (Staged)', ok: true },
          { label: 'Manufacturer SLA', val: '3-Year NBD Replacement', ok: true },
          { label: 'Regional Fulfillment', val: 'Kampala Hub', ok: true },
        ],
        icon: HardDrive,
        accentRing: 'border-amber-500/30 shadow-amber-500/10',
        actionLabel: onNavigateToProducts ? 'Explore Complete Products Catalog' : undefined,
        action: onNavigateToProducts
      };
    }

    if (activeTab === 'stack') {
      return {
        id: 'stack',
        title: 'Tier-1 Global OEM Ecosystem',
        subtitle: 'Certified Direct Technology Alliances',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        badge: 'Authorized Technology Stack',
        badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/60',
        primaryMetric: 'Tier-1 OEM Direct',
        secondaryMetric: '24/7 Back-to-Back Support',
        chips: ['Dell Technologies', 'HPE', 'Sophos', 'ARCON PAM', 'Ubiquiti', 'Paessler'],
        telemetry: [
          { label: 'Channel Accreditation', val: 'Certified Gold / Tier-1', ok: true },
          { label: 'Certified Engineers', val: 'In-Country Certified', ok: true },
          { label: 'Escalation Line', val: 'Direct OEM TAC Access', ok: true },
        ],
        icon: Cpu,
        accentRing: 'border-indigo-500/30 shadow-indigo-500/10',
        actionLabel: 'View Global OEM Partners Matrix',
        action: onNavigateToPartners
      };
    }

    // Default: 'solutions' - tailored to the selected solution pillar
    switch (solutionSlug) {
      case 'business-continuity':
        return {
          id: 'bcdr',
          title: 'Instant Failover & Disaster Recovery',
          subtitle: 'Zero Data-Loss RPO & Sub-15m RTO',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          badge: 'Business Continuity Architecture',
          badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-950/60',
          primaryMetric: '< 15 Min RTO',
          secondaryMetric: '0 sec Recovery Point (RPO)',
          chips: ['Quorum onQ DR', 'SAN Snapshots', '1-Click Virtual Standby', 'Air-Gapped Backup'],
          telemetry: [
            { label: 'Automated DR Health', val: 'Verified 100%', ok: true },
            { label: 'Data Replication', val: 'Zero Latency Sync', ok: true },
            { label: 'Standby Spin-Up', val: 'Sub-15m Tested', ok: true },
          ],
          icon: RefreshCw,
          accentRing: 'border-sky-500/30 shadow-sky-500/10',
          actionLabel: null,
          action: undefined
        };

      case 'infrastructure':
        return {
          id: 'infra',
          title: 'High-Density Compute & Networking',
          subtitle: 'Mission-Critical SAN, HCI & PowerEdge Arrays',
          image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&w=1200&q=80',
          badge: 'Enterprise Compute Infrastructure',
          badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-950/60',
          primaryMetric: '99.999% Availability',
          secondaryMetric: '100 Gbps Core Fabric',
          chips: ['Dell PowerEdge', 'HPE ProLiant Gen11', 'UniFi Enterprise Fiber', 'Dual Redundant PSU'],
          telemetry: [
            { label: 'SAN Fabric Latency', val: '< 0.8 ms', ok: true },
            { label: 'Compute Cluster', val: 'N+1 Fault Tolerant', ok: true },
            { label: 'Storage IOPS', val: 'Sub-Millisecond Flash', ok: true },
          ],
          icon: Server,
          accentRing: 'border-blue-500/30 shadow-blue-500/10',
          actionLabel: null,
          action: undefined
        };

      case 'communications':
        return {
          id: 'comms',
          title: 'Unified IP-PBX & Collaboration',
          subtitle: 'Zero-Cost Multi-Branch Telephony & WebRTC',
          image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80',
          badge: 'Enterprise Unified Communications',
          badgeColor: 'text-teal-400 border-teal-500/30 bg-teal-950/60',
          primaryMetric: '0$/min Inter-Branch',
          secondaryMetric: 'HD Voice & Video Telephony',
          chips: ['3CX Enterprise PBX', 'Multi-Site SIP Trunk', 'Mobile Softphones', 'Live Call Queueing'],
          telemetry: [
            { label: 'SIP Trunk Status', val: 'Connected & Carrier-Direct', ok: true },
            { label: 'HQ & Branches', val: 'Free Internal Dialing', ok: true },
            { label: 'Call Quality Index', val: 'MOS 4.45 (Optimal)', ok: true },
          ],
          icon: PhoneCall,
          accentRing: 'border-teal-500/30 shadow-teal-500/10',
          actionLabel: null,
          action: undefined
        };

      case 'information-management':
        return {
          id: 'edms',
          title: 'Enterprise Records & OCR Indexing',
          subtitle: 'Paperless Automation with Cryptographic Audit Trails',
          image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1200&q=80',
          badge: 'Digital Information Management',
          badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/60',
          primaryMetric: '< 8s Search Time',
          secondaryMetric: '100% Cryptographic Audit',
          chips: ['Vicisoft EDMS', 'High-Speed OCR Scanning', 'Automated Routing', 'Role-Based Permissions'],
          telemetry: [
            { label: 'Indexing Engine', val: 'Full-Text Deep OCR', ok: true },
            { label: 'Audit Verification', val: 'Tamper-Proof Logs', ok: true },
            { label: 'Archival Schedule', val: 'Lifecycle Automated', ok: true },
          ],
          icon: FileSpreadsheet,
          accentRing: 'border-cyan-500/30 shadow-cyan-500/10',
          actionLabel: null,
          action: undefined
        };

      case 'cloud-services':
        return {
          id: 'cloud',
          title: 'Hybrid Cloud & Monitoring Probes',
          subtitle: 'Continuous Active Directory Hygiene & Network Telemetry',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          badge: 'Software Platforms & Cloud Management',
          badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-950/60',
          primaryMetric: '360° Real-Time Health',
          secondaryMetric: 'Automated Threat Alerts',
          chips: ['ManageEngine ADAudit', 'PRTG Network Monitor', 'Microsoft 365 Hybrid', 'Private Cloud VMS'],
          telemetry: [
            { label: 'AD Hygiene Score', val: '100% Monitored', ok: true },
            { label: 'Network Probes', val: '5,000+ Sensors Active', ok: true },
            { label: 'Alert Notification', val: 'Real-Time SMS & Push', ok: true },
          ],
          icon: Layers,
          accentRing: 'border-purple-500/30 shadow-purple-500/10',
          actionLabel: null,
          action: undefined
        };

      case 'cybersecurity':
      default:
        return {
          id: 'cyber',
          title: 'Zero-Trust Defense-in-Depth',
          subtitle: 'Perimeter XGS Firewalls & Synchronized EDR',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
          badge: 'Unified Cybersecurity Architecture',
          badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/60',
          primaryMetric: 'Sub-Second Isolation',
          secondaryMetric: '100% Deep Packet Inspection',
          chips: ['Sophos XGS Cluster', 'ARCON Root Vaulting', 'Synchronized Heartbeat', 'Lateral Containment'],
          telemetry: [
            { label: 'Perimeter Inspection', val: 'Line-Speed TLS 1.3', ok: true },
            { label: 'Privileged Accounts', val: '100% Vaulted (ARCON)', ok: true },
            { label: 'Endpoint Sync Status', val: 'Zero Lateral Spread', ok: true },
          ],
          icon: ShieldCheck,
          accentRing: 'border-emerald-500/30 shadow-emerald-500/10',
          actionLabel: null,
          action: undefined
        };
    }
  };

  const content = getVisualContent();
  const IconComponent = content.icon;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group select-none">
      {/* Dynamic Animated Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={content.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative h-[430px] sm:h-[460px] w-full flex flex-col justify-between p-5 sm:p-6 overflow-hidden"
        >
          {/* Background Image with Ambient Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-105"
              animate={{ 
                scale: [1.02, 1.06, 1.02],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Gradient Vignetters */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/75 to-transparent z-10" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090f1d]/50 to-[#090f1d] z-10" />
            
            {/* Animated Laser Scanning Line */}
            <motion.div 
              className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent z-20 opacity-60 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              animate={{
                top: ['5%', '92%', '5%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Subtle Radar Sweep Effect for Cyber/Resilience */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-sky-500/10 pointer-events-none z-10 animate-[spin_12s_linear_infinite]" />
          </div>

          {/* Top Stage Header Overlay */}
          <div className="relative z-20 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border backdrop-blur-md ${content.badgeColor}`}>
                <IconComponent className="w-3.5 h-3.5 animate-pulse" />
                <span>{content.badge}</span>
              </div>
              
              {/* Live telemetry heartbeat */}
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>SYSTEM ACTIVE</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>{content.title}</span>
              </h3>
              <p className="text-xs text-slate-300 font-medium line-clamp-1">
                {content.subtitle}
              </p>
            </div>
          </div>

          {/* Middle Floating Metric Showcase */}
          <div className="relative z-20 py-2">
            <div className="grid grid-cols-2 gap-2.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-3 rounded-xl bg-slate-900/85 border border-slate-700/70 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-1.5 text-sky-400 text-[10px] font-mono uppercase tracking-wider mb-0.5">
                  <Zap className="w-3 h-3 text-sky-400" />
                  <span>Key Performance</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white tracking-tight">
                  {content.primaryMetric}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="p-3 rounded-xl bg-slate-900/85 border border-slate-700/70 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono uppercase tracking-wider mb-0.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>SLA Guarantee</span>
                </div>
                <div className="text-base sm:text-lg font-black text-white tracking-tight">
                  {content.secondaryMetric}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Telemetry & Chips */}
          <div className="relative z-20 space-y-3">
            {/* Live Telemetry Sensor Feed */}
            <div className="p-2.5 rounded-xl bg-black/60 border border-slate-800/90 backdrop-blur-md space-y-1.5">
              {content.telemetry.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-sky-400" />
                    {t.label}
                  </span>
                  <span className="text-slate-200 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {t.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Architecture Chips / Stack Elements */}
            <div className="flex flex-wrap gap-1.5">
              {content.chips.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/80 text-[10px] font-mono text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Optional Call to Action Button */}
            {content.actionLabel && content.action && (
              <button
                onClick={content.action}
                className="w-full py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-600/30 cursor-pointer"
              >
                <span>{content.actionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
