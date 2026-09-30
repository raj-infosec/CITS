import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  RefreshCw, 
  Lock, 
  Radio, 
  Server, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  HardDrive, 
  Eye, 
  Flame, 
  Layers, 
  SlidersHorizontal,
  LayoutGrid,
  Image as ImageIcon
} from 'lucide-react';

export interface GalleryTechnology {
  id: string;
  productId: string;
  solutionSlug: string;
  title: string;
  shortTitle: string;
  brand: string;
  category: string;
  badge: string;
  accent: 'teal' | 'sky' | 'indigo' | 'emerald' | 'blue';
  mainImage: string;
  secondaryImage?: string;
  imageAlt: string;
  statusText: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  compliance: string[];
  enterpriseUse: string;
  deploymentTime: string;
}

export const PROTECTIVE_TECHNOLOGIES: GalleryTechnology[] = [
  {
    id: 'quorum-onq',
    productId: 'quorum-dr',
    solutionSlug: 'business-continuity',
    title: 'Quorum onQ High Availability & Instant Disaster Recovery Appliance',
    shortTitle: 'Quorum onQ (Instant DR)',
    brand: 'Quorum',
    category: 'Business Continuity & High Availability',
    badge: 'Flagship BCDR Appliance',
    accent: 'teal',
    mainImage: '/bcdr-architecture-insight.svg',
    secondaryImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'CITS Quorum onQ BCDR Dual-Site Continuous Replication and Instant Failover Topology',
    statusText: 'HA STANDBY REPLICA ACTIVE',
    headline: 'Sub-15 Minute Instant Virtual Failover with Zero Database Transaction Loss',
    description: 'Purpose-built hardware appliance providing continuous block-level replication and automated standby virtual clones. When primary production servers experience hardware failure, power blackouts, or ransomware encryption, Quorum boots the clone within minutes without touching live storage.',
    metrics: [
      { label: 'Recovery Time (RTO)', value: '< 15 Minutes' },
      { label: 'Recovery Point (RPO)', value: '< 5 Seconds' },
      { label: 'Snapshot State', value: 'Air-Gapped Immutable' },
      { label: 'Testing Impact', value: '0% Production Downtime' }
    ],
    keyFeatures: [
      'Hardware-agnostic bare-metal and hypervisor virtual standby clones',
      'Automated daily disaster recovery drills in an isolated sandbox',
      'Air-gapped, immutable snapshot repository immune to ransomware tampering',
      '1-click instant failover with point-in-time granular database rollbacks',
      'Local deduplicated hardware appliance with optional sovereign cloud replication'
    ],
    compliance: ['ISO 22301 Business Continuity', 'Enterprise BCDR Directives', 'Mission-Critical IT Governance'],
    enterpriseUse: 'A tier-1 regional manufacturer suffered primary SAN storage controller failure during month-end dispatch. Quorum automatically spun up the virtual clone of the production database in 7 minutes, preventing factory dispatch stoppage.',
    deploymentTime: '3-5 Business Days (Pre-staged in Kampala)'
  },
  {
    id: 'arcon-pam',
    productId: 'arcon-pam',
    solutionSlug: 'cybersecurity',
    title: 'ARCON Privileged Access Management (PAM) & Zero-Trust Gateway',
    shortTitle: 'ARCON PAM (Zero-Trust)',
    brand: 'ARCON',
    category: 'Identity & Access Governance',
    badge: 'Enterprise Zero-Trust PAM',
    accent: 'sky',
    mainImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'ARCON Privileged Access Management Enterprise Cybersecurity Monitoring Operations',
    statusText: '100% ROOT VAULT ENCRYPTED',
    headline: 'Total Governance Over Root Credentials, Switch CLIs & DBA Sessions',
    description: 'Global industry standard for privileged access governance. ARCON vaults all root, domain, switch, and DBA passwords behind an encrypted zero-trust gateway. High-risk administrative actions require dual-approval checkouts and every remote keystroke is captured on tamper-proof video.',
    metrics: [
      { label: 'Credential Vaulting', value: '100% Dynamic AES-256' },
      { label: 'Password Rotation', value: 'Every 4 Hours Auto' },
      { label: 'Session Auditing', value: 'Full Keystroke & Video' },
      { label: 'Audit Findings', value: 'Zero Compliance Gaps' }
    ],
    keyFeatures: [
      'Automated rotation and randomized salting of root and administrative credentials',
      'Just-in-time privilege elevation with multi-level executive authorization',
      'Granular command blacklisting (blocks destructive commands like rm -rf, DROP, reload)',
      'Tamper-proof keystroke logging with forensic video playback for regulators',
      'Secure third-party vendor access gateway eliminating uncontrolled VPN holes'
    ],
    compliance: ['Enterprise Zero-Trust Guidelines', 'ISO/IEC 27001', 'PCI-DSS 4.0', 'Global Data Privacy Standards'],
    enterpriseUse: 'A commercial bank eliminated shared database passwords among 30+ DBAs and external consultants. All sessions now route through ARCON with MFA, satisfying 100% of regulatory audit mandates.',
    deploymentTime: '5-7 Business Days (Cluster Deployment)'
  },
  {
    id: 'sophos-xgs',
    productId: 'sophos-cybersecurity',
    solutionSlug: 'cybersecurity',
    title: 'Sophos Next-Gen XGS Firewall & Synchronized Security Fabric',
    shortTitle: 'Sophos XGS (Firewall & XDR)',
    brand: 'Sophos',
    category: 'Perimeter Defense & XDR',
    badge: 'Hardware-Accelerated NGFW',
    accent: 'emerald',
    mainImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sophos XGS Next-Gen Firewall Real-Time Cyber Threat Monitoring Console',
    statusText: 'SYNCHRONIZED HEARTBEAT SYNCED',
    headline: 'Sub-Second Lateral Threat Isolation via Synchronized Perimeter-to-Endpoint Heartbeat',
    description: 'High-throughput hardware firewalls running dedicated Xstream flow processors for wire-speed TLS 1.3 deep packet inspection. Integrated directly with endpoint EDR to automatically isolate compromised workstations before ransomware traverses internal subnets.',
    metrics: [
      { label: 'Lateral Containment', value: 'Sub-Second Isolation' },
      { label: 'Inspection Engine', value: 'Dedicated Xstream NPU' },
      { label: 'Encrypted Traffic', value: 'Wire-Speed TLS 1.3' },
      { label: 'Zero-Day Detection', value: 'Cloud Sandbox Evolving' }
    ],
    keyFeatures: [
      'Synchronized Security Heartbeat continuously validating endpoint health',
      'Automated quarantine of compromised IP addresses at the switch and firewall layer',
      'Deep Packet Inspection for all East African branch SD-WAN interconnects',
      'High-availability active-passive and active-active clustering configurations',
      'Integrated DNS security and geo-fencing blocking untrusted foreign IP space'
    ],
    compliance: ['NIST Cybersecurity Framework', 'PCI-DSS 4.0 Network Segmentation', 'Zero-Trust Cyber Directives'],
    enterpriseUse: 'An infected laptop brought into a regional microfinance branch attempted lateral pass-the-hash attacks. Sophos Synchronized Heartbeat isolated the machine at the switch port in 650 milliseconds.',
    deploymentTime: '2-4 Business Days'
  },
  {
    id: 'prtg-network',
    productId: 'prtg-monitor',
    solutionSlug: 'cybersecurity',
    title: 'Paessler PRTG Enterprise Network Telemetry & Infrastructure Observability',
    shortTitle: 'PRTG (NOC Telemetry)',
    brand: 'Paessler',
    category: 'Infrastructure Telemetry & Observability',
    badge: 'Real-Time Telemetry NOC',
    accent: 'indigo',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Paessler PRTG Network Operations Center Real-Time Multi-Branch Fiber Telemetry',
    statusText: '124 SENSORS POLLING < 1s',
    headline: 'Sub-Second Surveillance Across Multi-Branch Fiber Links, WAN Latency & Thermals',
    description: 'Comprehensive network and environmental surveillance system deployed in CITS Kampala NOC. Tracks SNMP/WMI metrics across routers, core switches, SAN arrays, and server room thermal probes with instant SMS/email triggers before business degradation occurs.',
    metrics: [
      { label: 'Telemetry Latency', value: '< 1 Second Real-Time' },
      { label: 'Probe Architecture', value: 'Distributed Remote Probes' },
      { label: 'Sensor Breadth', value: 'SNMP, WMI, NetFlow, REST' },
      { label: 'Alert Channels', value: 'SMS, WhatsApp, NOC Wall' }
    ],
    keyFeatures: [
      'Multi-branch fiber link latency and packet loss tracking across East Africa',
      'Server CPU, RAM, disk I/O, and SAN storage threshold alerts',
      'Environmental thermal probes monitoring server room temperature and humidity',
      'Custom executive SLA dashboards for CIOs and IT directors',
      'Historical trend analysis predicting storage capacity exhaustion months in advance'
    ],
    compliance: ['ITIL v4 Service Monitoring', 'ISO 20000 IT Service Management'],
    enterpriseUse: 'Monitors 40+ branch office links across Uganda for a national logistics firm. Detected an ISP fiber degradation 45 minutes before it severed, triggering automated SD-WAN failover.',
    deploymentTime: '1-3 Business Days'
  },
  {
    id: 'enterprise-compute',
    productId: 'dell-hpe-enterprise-servers',
    solutionSlug: 'enterprise-it',
    title: 'Dell & HPE Mission-Critical Compute Infrastructure & SAN Arrays',
    shortTitle: 'Dell & HPE (Compute)',
    brand: 'Dell & HPE',
    category: 'Enterprise Hardware Infrastructure',
    badge: 'Pre-Staged Hardware Fleets',
    accent: 'blue',
    mainImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Enterprise Data Center Server Rack Aisle with High-Density Compute and SAN Storage',
    statusText: 'KAMPALA LAB BURN-IN VERIFIED',
    headline: 'High-Density Rackmount Servers Pre-Staged in Kampala with 3-Year On-Site SLA',
    description: 'Tier-1 enterprise compute architectures configured for VMware vSphere, Microsoft Hyper-V, and Proxmox enterprise virtualization. All appliances undergo full 72-hour stress testing, firmware hardening, and component burning in our Kampala technical facility prior to on-site delivery.',
    metrics: [
      { label: 'Uptime Standard', value: '99.999% High Availability' },
      { label: 'Redundancy', value: 'Dual Hot-Swap Platinum PSUs' },
      { label: 'Local Spares', value: 'Kampala Inventory Stocked' },
      { label: 'Warranty Tier', value: '3-Year 24/7 OEM On-Site' }
    ],
    keyFeatures: [
      'Dell PowerEdge and HPE ProLiant multi-socket enterprise compute nodes',
      'Hardware-level RAID with battery-backed cache and hot-swappable enterprise NVMe/SAS SSDs',
      'Out-of-band management via dedicated iDRAC9 and iLO5 remote hardware consoles',
      'Firmware-level supply chain verification preventing unauthorized BIOS injection',
      'Turnkey delivery bundled with certified CITS Tier-3 engineering deployment'
    ],
    compliance: ['Tier-3 Data Center Reliability', 'ASHRAE Environmental Standards'],
    enterpriseUse: 'Turnkey deployment of a 4-node high-availability virtualization cluster for an East African healthcare group, hosting hospital management systems with sub-millisecond database response.',
    deploymentTime: 'Immediate Dispatch from Kampala Warehouse'
  }
];

interface TechnologyProtectsGalleryProps {
  onSelectSolution?: (slug: string) => void;
  onNavigateToProducts?: (productId?: string) => void;
  onOpenConsultation?: (note?: string) => void;
  className?: string;
  initialSelectedId?: string;
}

export const TechnologyProtectsGallery: React.FC<TechnologyProtectsGalleryProps> = ({
  onSelectSolution,
  onNavigateToProducts,
  onOpenConsultation,
  className = '',
  initialSelectedId = 'quorum-onq'
}) => {
  const [selectedTechId, setSelectedTechId] = useState<string>(initialSelectedId);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');
  const [lightboxTech, setLightboxTech] = useState<GalleryTechnology | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);

  const selectedTech = PROTECTIVE_TECHNOLOGIES.find(t => t.id === selectedTechId) || PROTECTIVE_TECHNOLOGIES[0];
  const currentIndex = PROTECTIVE_TECHNOLOGIES.findIndex(t => t.id === selectedTechId);

  // Filtered technologies based on selection
  const displayedTechnologies = PROTECTIVE_TECHNOLOGIES.filter(t => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bcdr') return t.id === 'quorum-onq';
    if (activeFilter === 'pam') return t.id === 'arcon-pam';
    if (activeFilter === 'network') return t.id === 'sophos-xgs' || t.id === 'prtg-network';
    if (activeFilter === 'compute') return t.id === 'enterprise-compute';
    return true;
  });

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PROTECTIVE_TECHNOLOGIES.length;
    setSelectedTechId(PROTECTIVE_TECHNOLOGIES[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PROTECTIVE_TECHNOLOGIES.length) % PROTECTIVE_TECHNOLOGIES.length;
    setSelectedTechId(PROTECTIVE_TECHNOLOGIES[prevIndex].id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxTech) {
        if (e.key === 'Escape') setLightboxTech(null);
        return;
      }
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, lightboxTech]);

  // Optional auto-rotation
  useEffect(() => {
    if (!isAutoPlay || lightboxTech) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex, lightboxTech]);

  return (
    <section 
      id="technology-that-protects-gallery"
      className={`relative rounded-3xl bg-[#080e1a] border border-slate-800/90 shadow-2xl p-4 sm:p-6 lg:p-8 overflow-hidden ${className}`}
    >
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />

      {/* Header Bar with Small Statement, Title & Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-sky-400">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">Enterprise Protective Architecture</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-300">Live Visual Showcase</span>
          </div>

          {/* Section Heading with the exact user requested phrase */}
          <div className="border-l-2 border-sky-400 pl-3 py-0.5">
            <p className="text-xs sm:text-sm font-mono text-sky-300 font-medium tracking-wider uppercase">
              Technology that protects. Infrastructure that performs. Businesses that move forward.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Visual Proof of Resilience:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-300">
              Quorum DR &amp; ARCON PAM
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Examine the physical appliances, zero-trust gateways, and telemetry consoles that power East Africa's most resilient banking, manufacturing, and enterprise systems.
          </p>
        </div>

        {/* View Switcher & Quick Navigation */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Filter Pills */}
          <div className="hidden lg:flex items-center p-1 bg-slate-950/80 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                activeFilter === 'all' ? 'bg-sky-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => { setActiveFilter('bcdr'); setSelectedTechId('quorum-onq'); }}
              className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 ${
                activeFilter === 'bcdr' ? 'bg-teal-600 text-white font-semibold' : 'text-teal-400/90 hover:text-teal-300'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              <span>Quorum DR</span>
            </button>
            <button
              onClick={() => { setActiveFilter('pam'); setSelectedTechId('arcon-pam'); }}
              className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 ${
                activeFilter === 'pam' ? 'bg-sky-600 text-white font-semibold' : 'text-sky-400/90 hover:text-sky-300'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>ARCON PAM</span>
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center p-1 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              id="gallery-view-showcase-btn"
              onClick={() => setViewMode('showcase')}
              title="Showcase Stage View"
              className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                viewMode === 'showcase' ? 'bg-slate-800 text-sky-400 font-semibold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Stage</span>
            </button>
            <button
              id="gallery-view-grid-btn"
              onClick={() => setViewMode('grid')}
              title="Multi-Card Grid View"
              className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid' ? 'bg-slate-800 text-sky-400 font-semibold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS ROW (For Mobile / Tablet) */}
      <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto py-3 no-scrollbar border-b border-slate-800/60 text-xs font-mono">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1 rounded-lg shrink-0 transition-colors ${
            activeFilter === 'all' ? 'bg-sky-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          All Protective
        </button>
        <button
          onClick={() => { setActiveFilter('bcdr'); setSelectedTechId('quorum-onq'); }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-colors flex items-center gap-1 ${
            activeFilter === 'bcdr' ? 'bg-teal-600 text-white font-semibold' : 'bg-slate-900 text-teal-400 border border-teal-900/50'
          }`}
        >
          <RefreshCw className="w-3 h-3" />
          <span>Quorum onQ</span>
        </button>
        <button
          onClick={() => { setActiveFilter('pam'); setSelectedTechId('arcon-pam'); }}
          className={`px-3 py-1 rounded-lg shrink-0 transition-colors flex items-center gap-1 ${
            activeFilter === 'pam' ? 'bg-sky-600 text-white font-semibold' : 'bg-slate-900 text-sky-400 border border-sky-900/50'
          }`}
        >
          <Lock className="w-3 h-3" />
          <span>ARCON PAM</span>
        </button>
        <button
          onClick={() => setActiveFilter('network')}
          className={`px-3 py-1 rounded-lg shrink-0 transition-colors ${
            activeFilter === 'network' ? 'bg-emerald-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          Firewalls &amp; Telemetry
        </button>
        <button
          onClick={() => setActiveFilter('compute')}
          className={`px-3 py-1 rounded-lg shrink-0 transition-colors ${
            activeFilter === 'compute' ? 'bg-blue-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'
          }`}
        >
          Dell &amp; HPE
        </button>
      </div>

      {/* VIEW MODE 1: SHOWCASE STAGE */}
      {viewMode === 'showcase' && (
        <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual Image Stage (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden group shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedTech.id}
                  src={selectedTech.mainImage}
                  alt={selectedTech.imageAlt}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Ambient gradient vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Top HUD Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md border ${
                    selectedTech.accent === 'teal' 
                      ? 'bg-teal-950/90 text-teal-300 border-teal-700/80' 
                      : selectedTech.accent === 'sky'
                      ? 'bg-sky-950/90 text-sky-300 border-sky-700/80'
                      : selectedTech.accent === 'emerald'
                      ? 'bg-emerald-950/90 text-emerald-300 border-emerald-700/80'
                      : 'bg-indigo-950/90 text-indigo-300 border-indigo-700/80'
                  }`}>
                    {selectedTech.badge}
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-slate-300 border border-slate-700">
                    {selectedTech.brand}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-semibold">{selectedTech.statusText}</span>
                </div>
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={() => setLightboxTech(selectedTech)}
                title="Inspect High-Resolution Architecture View"
                className="absolute top-3.5 right-3.5 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-mono border border-slate-700 shadow-xl backdrop-blur-md"
              >
                <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Deep Inspection</span>
              </button>

              {/* Bottom Image Overlay Title & Lead Metric */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-300 block mb-1">
                  {selectedTech.category}
                </span>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white drop-shadow-md leading-snug max-w-xl">
                  {selectedTech.title}
                </h3>
              </div>

              {/* Previous / Next Arrow Controls */}
              <button
                onClick={handlePrev}
                aria-label="Previous Technology"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-slate-700/80 transition-all opacity-80 hover:opacity-100 backdrop-blur-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Technology"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-slate-700/80 transition-all opacity-80 hover:opacity-100 backdrop-blur-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Strip with Distinct Quorum & ARCON Highlights */}
            <div className="grid grid-cols-5 gap-2 pt-1">
              {PROTECTIVE_TECHNOLOGIES.map((tech) => {
                const isActive = tech.id === selectedTech.id;
                const isSpecial = tech.id === 'quorum-onq' || tech.id === 'arcon-pam';

                return (
                  <button
                    key={tech.id}
                    id={`gallery-thumb-${tech.id}`}
                    onClick={() => setSelectedTechId(tech.id)}
                    className={`relative rounded-xl overflow-hidden aspect-[16/10] transition-all text-left group border ${
                      isActive 
                        ? tech.accent === 'teal'
                          ? 'ring-2 ring-teal-400 border-teal-400'
                          : 'ring-2 ring-sky-400 border-sky-400'
                        : 'border-slate-800 hover:border-slate-600 opacity-65 hover:opacity-95'
                    }`}
                  >
                    <img 
                      src={tech.mainImage} 
                      alt={tech.shortTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Active Indicator or Special Tag */}
                    <div className="absolute bottom-1 left-1.5 right-1.5">
                      <span className={`text-[9px] sm:text-[10px] font-mono font-bold leading-tight block truncate ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}>
                        {tech.shortTitle}
                      </span>
                    </div>

                    {isSpecial && (
                      <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Specifications & Telemetry Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 space-y-4 shadow-xl">
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase tracking-wider">
                  OEM Specification
                </span>
                <span className="text-sky-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>{selectedTech.deploymentTime}</span>
                </span>
              </div>

              {/* Headline */}
              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {selectedTech.headline}
              </h4>

              {/* Core Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedTech.description}
              </p>

              {/* 4-Metric Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {selectedTech.metrics.map((m, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-0.5"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-white block truncate">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Architectural Features */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Enterprise Capabilities:
                </span>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  {selectedTech.keyFeatures.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory Standards */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5">
                {selectedTech.compliance.map((c, i) => (
                  <span 
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <button
                id="gallery-deep-inspect-btn"
                onClick={() => setLightboxTech(selectedTech)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-sky-300 hover:text-white border border-slate-700 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Deep Architecture</span>
              </button>

              <div className="flex items-center gap-2">
                {onNavigateToProducts && (
                  <button
                    id="gallery-catalog-btn"
                    onClick={() => onNavigateToProducts(selectedTech.productId)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  >
                    <span>View in Catalog</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}

                {onOpenConsultation && (
                  <button
                    id="gallery-consult-btn"
                    onClick={() => onOpenConsultation(`Inquiry: Architecture Demo for ${selectedTech.title}`)}
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-xs font-semibold text-white shadow-md shadow-sky-950/50 transition-all"
                  >
                    <span>Request Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: MULTI-CARD RESPONSIVE GRID */}
      {viewMode === 'grid' && (
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedTechnologies.map((tech) => {
            const isHighlighted = tech.id === 'quorum-onq' || tech.id === 'arcon-pam';

            return (
              <div
                key={tech.id}
                id={`grid-card-${tech.id}`}
                className={`flex flex-col justify-between rounded-2xl bg-slate-900/95 border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isHighlighted 
                    ? 'border-sky-500/40 shadow-lg shadow-sky-950/30' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Card Image Stage */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden group">
                  <img
                    src={tech.mainImage}
                    alt={tech.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-sky-300 border border-sky-500/30">
                      {tech.badge}
                    </span>
                    <button
                      onClick={() => setLightboxTech(tech)}
                      title="Inspect Specs"
                      className="p-1 rounded-lg bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-slate-700"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">
                      {tech.brand} &bull; {tech.category}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-tight drop-shadow-md">
                      {tech.title}
                    </h4>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {tech.description}
                    </p>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                      {tech.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-[9px] font-mono text-slate-400 block uppercase">
                            {m.label}
                          </span>
                          <span className="text-xs font-mono font-bold text-sky-300 block truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setLightboxTech(tech)}
                      className="text-xs font-mono text-slate-300 hover:text-sky-300 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                      <span>Architecture</span>
                    </button>

                    {onNavigateToProducts && (
                      <button
                        onClick={() => onNavigateToProducts(tech.productId)}
                        className="text-xs font-mono font-semibold text-sky-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-colors"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FULL-SCALE LIGHTBOX & ARCHITECTURE INSPECTION MODAL */}
      <AnimatePresence>
        {lightboxTech && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setLightboxTech(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#090f1d] border border-slate-700/90 shadow-2xl overflow-hidden text-white"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-sky-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Enterprise Architecture Inspection &bull; {lightboxTech.brand}
                    </span>
                    <h3 id="lightbox-title" className="text-base sm:text-lg font-bold text-white">
                      {lightboxTech.title}
                    </h3>
                  </div>
                </div>

                <button
                  id="close-lightbox-btn"
                  onClick={() => setLightboxTech(null)}
                  className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
                {/* High-Resolution Dual-Image or Wide Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                    <img
                      src={lightboxTech.mainImage}
                      alt={`${lightboxTech.title} Primary View`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300 border border-slate-700">
                      Primary Appliance / Architecture
                    </span>
                  </div>

                  {lightboxTech.secondaryImage ? (
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                      <img
                        src={lightboxTech.secondaryImage}
                        alt={`${lightboxTech.title} Console & Telemetry`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300 border border-slate-700">
                        Operational Dashboard &amp; Audit Logs
                      </span>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-center space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <Activity className="w-4 h-4" />
                        <span>KAMPALA STAGING &amp; BURN-IN STATUS</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Pre-staged and burn-in verified at CITS central engineering lab in Kampala. Turnkey delivery with full hardware warranty, local spares in stock, and Tier-3 certified deployment engineers.
                      </p>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-sky-300">
                        Deployment Window: {lightboxTech.deploymentTime}
                      </div>
                    </div>
                  )}
                </div>

                {/* Technical Metrics Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {lightboxTech.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {metric.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-sky-400 block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Deep Architectural Narrative & Real-World Use Case */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 uppercase">
                      <Cpu className="w-4 h-4" />
                      <span>Architectural Capabilities</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {lightboxTech.keyFeatures.map((kf, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 uppercase">
                      <Flame className="w-4 h-4" />
                      <span>Verified East African Field Impact</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lightboxTech.enterpriseUse}
                    </p>
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Regulatory Compliance
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lightboxTech.compliance.map((c, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/90">
                <span className="text-xs font-mono text-slate-400">
                  Kampala Staging Center &bull; Tier-3 Certified SLA
                </span>

                <div className="flex items-center gap-2.5">
                  {onNavigateToProducts && (
                    <button
                      onClick={() => {
                        const pid = lightboxTech.productId;
                        setLightboxTech(null);
                        onNavigateToProducts(pid);
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-white border border-slate-700 transition-colors"
                    >
                      View Catalog Specifications
                    </button>
                  )}

                  {onOpenConsultation && (
                    <button
                      onClick={() => {
                        const note = `Inquiry: Request Sandbox Demonstration for ${lightboxTech.title}`;
                        setLightboxTech(null);
                        onOpenConsultation(note);
                      }}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-xs font-semibold text-white shadow-lg shadow-sky-950/60 transition-all"
                    >
                      Schedule Architecture Session
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechnologyProtectsGallery;
