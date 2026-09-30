import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Server, 
  PhoneCall, 
  Code2, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  FileText,
  CheckCircle2,
  ExternalLink,
  Layers,
  Cpu,
  Zap,
  SlidersHorizontal,
  X,
  MessageCircle
} from 'lucide-react';
import { SOLUTION_PILLARS } from '../data/citsData';
import { SolutionPillar } from '../types';

interface SolutionsSectionProps {
  onSelectSolution: (slug: string) => void;
  onOpenConsultation?: (topic?: string) => void;
}

export interface EnterpriseProduct {
  id: string;
  slug: string;
  number: string;
  name: string;
  oemPartner: string;
  category: string;
  categoryKey: 'all' | 'security' | 'continuity' | 'edms' | 'voice' | 'network' | 'compute';
  image: string;
  imageAlt: string;
  formFactor: string;
  statusBadge: string;
  tagline: string;
  description: string;
  keySpecs: string[];
  complianceBadges: string[];
  deliverables: string[];
}

export const ENTERPRISE_PRODUCTS: EnterpriseProduct[] = [
  {
    id: "prod-sophos-xgs",
    slug: "cybersecurity",
    number: "01",
    name: "Sophos XGS Next-Gen Firewall & Intercept X EDR",
    oemPartner: "Sophos / WatchGuard",
    category: "Cybersecurity & Perimeter Defense",
    categoryKey: "security",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Sophos XGS Next-Gen Firewall Rackmount Hardware Unit with LED telemetry",
    formFactor: "1U / 2U Rackmount Appliance",
    statusBadge: "Synchronized Security",
    tagline: "Dedicated Xstream flow processors for line-rate TLS 1.3 deep packet inspection and zero-day threat containment.",
    description: "Enterprise network security appliance integrating perimeter firewalling, deep packet inspection, automated endpoint isolation, and 24/7 MDR threat hunting.",
    keySpecs: [
      "TLS 1.3 Deep Packet Decryption",
      "Zero-Day AI Sandboxing Engine",
      "Synchronized Heartbeat Isolation",
      "Line-Speed Xstream Flow Processor"
    ],
    complianceBadges: ["ISO 27001", "PCI-DSS 4.0", "SOC 2 Type II"],
    deliverables: [
      "Asset inventory verification & hygiene audit",
      "High-availability active-passive clustering",
      "Granular application bandwidth shaping",
      "Centralized cloud policy management"
    ]
  },
  {
    id: "prod-quorum-dr",
    slug: "business-continuity",
    number: "02",
    name: "Quorum onQ Instant Recovery DR Appliance",
    oemPartner: "Quorum Technologies",
    category: "Business Continuity & Instant Failover",
    categoryKey: "continuity",
    image: "/bcdr-architecture-insight.svg",
    imageAlt: "Quorum onQ High-Availability Dual-Site Replication & Disaster Recovery Topology",
    formFactor: "Dedicated On-Premise DR Appliance",
    statusBadge: "Sub-15m Instant DR",
    tagline: "One-click bare-metal server recovery with automated non-disruptive sandbox drills and air-gapped protection.",
    description: "Dedicated high-availability hardware appliance that boots full virtual images of your critical servers in minutes, eliminating prolonged operational downtime.",
    keySpecs: [
      "Sub-15m Instant Server Boot",
      "Automated Immutable Snapshots",
      "Zero-Impact Production Sandboxing",
      "Air-Gapped Ransomware Immunity"
    ],
    complianceBadges: ["Sub-15m RPO", "Sub-10m RTO", "Tier-3 Resilient"],
    deliverables: [
      "Bare-metal image & database replication",
      "Scheduled non-disruptive DR drills",
      "Deduplicated snapshot optimization",
      "Disaster recovery runbook documentation"
    ]
  },
  {
    id: "prod-vicidocs-edms",
    slug: "information-management",
    number: "03",
    name: "ViciDocs Enterprise EDMS & OCR Digitization Suite",
    oemPartner: "ViciDocs / Vicisoft",
    category: "Information Management & Digitization",
    categoryKey: "edms",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "High-speed document scanning, OCR classification and digital workflow workstation",
    formFactor: "High-Volume Scanner Station + Server",
    statusBadge: "Paperless Compliance",
    tagline: "Transforms unstructured paper files into structured, audited digital workflows with automated approval routing.",
    description: "Enterprise document digitization platform supporting high-throughput optical character recognition, digital signatures, and strict retention compliance.",
    keySpecs: [
      "High-Throughput Optical Character Recognition",
      "Multi-Tier Approval Routing Rules",
      "Granular Role-Based Access Control",
      "Tamper-Evident Immutable Audit Trails"
    ],
    complianceBadges: ["Statutory Archiving", "ISO & Data Privacy Standards", "Full Audit Logs"],
    deliverables: [
      "Legacy paper backlog scanning & indexing",
      "Custom workflow pipeline automation",
      "Digital signature integration",
      "Litigation hold & disposition logging"
    ]
  },
  {
    id: "prod-matrix-ippbx",
    slug: "communications",
    number: "04",
    name: "Matrix ETERNITY Unified IP-PBX & VoIP Systems",
    oemPartner: "Matrix Telecom Solutions",
    category: "Unified Communications & Voice",
    categoryKey: "voice",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Matrix ETERNITY Enterprise IP-PBX Appliance, Touchscreen SIP Desk Phones and Headsets",
    formFactor: "Hybrid IP-PBX Appliance + Endpoints",
    statusBadge: "Zero-Toll Branches",
    tagline: "Unified telecom backbone connecting HQ and branch offices over secure VoIP trunks, slashing inter-branch telephony costs.",
    description: "Modern IP-PBX systems engineered for distributed African organizations, connecting branch offices, mobile workforces, and executive boardrooms under a single dial plan.",
    keySpecs: [
      "Multi-Branch Extension Dial Plans",
      "Executive Touchscreen SIP Desk Phones",
      "Encrypted Softphone Apps (iOS & Android)",
      "Automated Interactive Voice Response (IVR)"
    ],
    complianceBadges: ["SIP Carrier Certified", "TLS/SRTP Voice Encryption", "High Availability"],
    deliverables: [
      "Multi-site VoIP gateway deployment",
      "Boardroom audio/video conferencing",
      "Call recording & analytics dashboards",
      "Enterprise email security integration"
    ]
  },
  {
    id: "prod-ray-networking",
    slug: "enterprise-it",
    number: "05",
    name: "RAY AI-Driven Cloud Wi-Fi 6 & Managed Switching",
    oemPartner: "RAY Cloud Networks",
    category: "Enterprise Wireless & Switching",
    categoryKey: "network",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "RAY Enterprise Cloud Managed Wi-Fi 6 Access Point and High Performance Fiber Core Switch",
    formFactor: "Indoor/Outdoor APs & Core Switch Chasses",
    statusBadge: "High-Density Wi-Fi 6",
    tagline: "AI-optimized wireless coverage with high concurrency and multi-gigabit core backbones for distributed campuses.",
    description: "Next-generation enterprise wireless and core switching infrastructure providing reliable coverage, zero-touch provisioning, and edge micro-segmentation.",
    keySpecs: [
      "OFDMA Wi-Fi 6 High Concurrency",
      "Zero-Touch Cloud Centralized Controller",
      "L2+/L3 10G/40G Managed Core Switching",
      "Client Micro-Segmentation & QoS"
    ],
    complianceBadges: ["802.11ax Certified", "WPA3 Enterprise", "PoE++ Ready"],
    deliverables: [
      "Structured fiber backbone cabling",
      "Radio frequency heat mapping & tuning",
      "VLAN isolation & traffic shaping",
      "Environmental sensor telemetry"
    ]
  },
  {
    id: "prod-enterprise-compute",
    slug: "software-solutions",
    number: "06",
    name: "Enterprise Compute Virtualization & Modular ERP",
    oemPartner: "CITS Systems Architecture",
    category: "Enterprise Compute & ERP Infrastructure",
    categoryKey: "compute",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Enterprise Rackmount Server Virtualization Cluster and Storage Array",
    formFactor: "High-Density Compute Nodes & SAN/NAS",
    statusBadge: "Tier-3 Resilient",
    tagline: "High-availability compute clusters, all-flash storage arrays, and modular ERP backbones designed for continuous business growth.",
    description: "Engineered virtualization environments (VMware/Hyper-V) and customized ERP systems aligning finance, inventory, human resources, and real-time operational reporting.",
    keySpecs: [
      "Hyperconverged Infrastructure (HCI)",
      "Redundant SAN/NAS Storage Fabric",
      "Modular ERP Enterprise Modules",
      "24/7 SLA Engineering Response"
    ],
    complianceBadges: ["99.99% Uptime SLA", "Hardware N+1", "Scalable Growth"],
    deliverables: [
      "Server virtualization cluster sizing",
      "Modular ERP workflow customization",
      "Database integrity & migration audits",
      "Comprehensive staff onboarding"
    ]
  }
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onSelectSolution,
  onOpenConsultation 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<EnterpriseProduct | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProductForModal) {
        setSelectedProductForModal(null);
      }
    };
    if (selectedProductForModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProductForModal]);

  const categories = [
    { 
      key: 'all', 
      label: 'All Products (6)',
      activeClass: 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-800',
      inactiveClass: 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90',
      dotColor: 'bg-sky-400'
    },
    { 
      key: 'security', 
      label: 'Next-Gen Firewalls',
      activeClass: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/20 ring-1 ring-blue-600',
      inactiveClass: 'bg-blue-50/70 hover:bg-blue-100/80 text-blue-900 border border-blue-200/80',
      dotColor: 'bg-blue-400'
    },
    { 
      key: 'continuity', 
      label: 'Disaster Recovery',
      activeClass: 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-600/20 ring-1 ring-amber-600',
      inactiveClass: 'bg-amber-50/70 hover:bg-amber-100/80 text-amber-900 border border-amber-200/80',
      dotColor: 'bg-amber-400'
    },
    { 
      key: 'edms', 
      label: 'EDMS Digitization',
      activeClass: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-sm shadow-purple-600/20 ring-1 ring-purple-600',
      inactiveClass: 'bg-purple-50/70 hover:bg-purple-100/80 text-purple-900 border border-purple-200/80',
      dotColor: 'bg-purple-400'
    },
    { 
      key: 'voice', 
      label: 'VoIP & Telecom',
      activeClass: 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm shadow-rose-600/20 ring-1 ring-rose-600',
      inactiveClass: 'bg-rose-50/70 hover:bg-rose-100/80 text-rose-900 border border-rose-200/80',
      dotColor: 'bg-rose-400'
    },
    { 
      key: 'network', 
      label: 'Cloud Wi-Fi & Switching',
      activeClass: 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-sm shadow-cyan-600/20 ring-1 ring-cyan-600',
      inactiveClass: 'bg-cyan-50/70 hover:bg-cyan-100/80 text-cyan-900 border border-cyan-200/80',
      dotColor: 'bg-cyan-400'
    },
    { 
      key: 'compute', 
      label: 'Compute & ERP',
      activeClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/20 ring-1 ring-emerald-600',
      inactiveClass: 'bg-emerald-50/70 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200/80',
      dotColor: 'bg-emerald-400'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? ENTERPRISE_PRODUCTS 
    : ENTERPRISE_PRODUCTS.filter(p => p.categoryKey === activeCategory);

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <section id="solutions-section" className="py-20 bg-[#fafafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Refined Small Heading Font */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Enterprise Products & Hardware Solutions
            </div>
            {/* Small Heading Font */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
              Engineered Technology Products.{' '}
              <span className="text-sky-600 font-semibold">Resilient Business Outcomes.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Verified appliances, security gateways, and enterprise software systems installed and maintained by CITS systems engineers across East & Southern Africa.
            </p>
          </div>

          {/* Carousel / Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Showing {filteredProducts.length} Systems
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-xs">
              <button
                id="products-nav-prev-btn"
                onClick={handlePrevSlide}
                aria-label="Previous product"
                className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Previous Product"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="products-nav-next-btn"
                onClick={handleNextSlide}
                aria-label="Next product"
                className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Next Product"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons: Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200/80">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`cat-nav-btn-${cat.key}`}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setCarouselIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? cat.activeClass
                    : cat.inactiveClass
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor} ${isActive ? 'animate-pulse' : 'opacity-70'}`}></span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid with Authentic Images and Small Heading Fonts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.slug}`}
              className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-slate-300/50 hover:border-slate-300 transform transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.018] flex flex-col justify-between will-change-transform"
            >
              <div>
                {/* Product Image Section */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Subtle Gradient & Badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                  
                  {/* Top Overlay: Number & Status Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white border border-white/20">
                      Pillar {product.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/90 text-white font-semibold shadow-xs">
                      {product.statusBadge}
                    </span>
                  </div>

                  {/* Bottom Overlay: OEM & Form Factor */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200">
                    <span className="font-semibold text-white drop-shadow-xs flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-sky-400" />
                      {product.oemPartner}
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">
                      {product.formFactor}
                    </span>
                  </div>
                </div>

                {/* Card Content with Small Heading Font */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-600 font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Small Product Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Key Specifications Chips */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                      Key Hardware & Protocol Specs:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.keySpecs.slice(0, 3).map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons Linked to Product Info */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100/80 mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {/* Primary Navigation Button: Link to Full Product Info Page */}
                  <button
                    id={`btn-product-info-${product.slug}`}
                    onClick={() => onSelectSolution(product.slug)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-sky-600 active:scale-[0.98] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs group/btn"
                    title={`View detailed product architecture for ${product.name}`}
                  >
                    <span>Product Info</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  {/* Secondary Navigation Button: In-page Quick Specs & Datasheet Modal */}
                  <button
                    id={`btn-quick-specs-${product.slug}`}
                    onClick={() => setSelectedProductForModal(product)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] border border-slate-200 text-slate-700 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    title={`Inspect datasheet & architecture specs`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Quick Specs</span>
                  </button>
                </div>

                {/* Direct WhatsApp Quick Scoping Link */}
                <a
                  href={`https://wa.me/256703922319?text=${encodeURIComponent(`Hello CITS Team, I would like technical details and scoping for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 text-center text-[11px] font-mono text-slate-500 hover:text-emerald-600 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-500" />
                  <span>Request Hardware Scoping & Datasheet</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick Specs & Technical Datasheet Modal */}
      {selectedProductForModal && (
        <div 
          onClick={() => setSelectedProductForModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image & Header with Small Heading Font */}
            <div className="relative aspect-video max-h-56 w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedProductForModal.image}
                alt={selectedProductForModal.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <button
                id="modal-close-btn"
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-600 text-white font-semibold uppercase tracking-wider">
                  {selectedProductForModal.oemPartner} &bull; {selectedProductForModal.formFactor}
                </span>
                {/* Small Modal Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5 leading-snug">
                  {selectedProductForModal.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProductForModal.description}
              </p>

              {/* Specifications Matrix */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-600" />
                  Technical Hardware & Security Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProductForModal.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  CITS Engineering Deliverables & SLAs
                </h4>
                <div className="space-y-1.5">
                  {selectedProductForModal.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Compliance & Standards:
                </span>
                <div className="flex items-center gap-1.5">
                  {selectedProductForModal.complianceBadges.map((badge, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-semibold">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/256703922319?text=${encodeURIComponent(`Hello CITS Systems Engineering, I am reviewing the ${selectedProductForModal.name} and would like to request official procurement specifications.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>Chat with Architect on WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedProductForModal(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-200/60 transition-colors"
                >
                  Close
                </button>
                <button
                  id="modal-view-full-info-btn"
                  onClick={() => {
                    const slug = selectedProductForModal.slug;
                    setSelectedProductForModal(null);
                    onSelectSolution(slug);
                  }}
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>View Full Product Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

