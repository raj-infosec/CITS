import { QuickQuoteCategory, QuoteCalculationResult } from '../types';

export const UGX_PER_USD = 3800; // Standard representative East African enterprise exchange rate

export const QUICK_QUOTE_CATEGORIES: QuickQuoteCategory[] = [
  {
    id: 'arcon-pam',
    name: 'Privileged Access Management (PAM)',
    badge: 'Zero-Trust Enforced',
    techPartner: 'ARCON PAM',
    shortDesc: 'Centralized root credential vaulting, video session auditing, and JIT temporary access.',
    iconName: 'ShieldCheck',
    basePriceUsd: 3200,
    perUnitUsd: 85,
    unitLabel: 'Target Servers / Critical Nodes',
    defaultUnits: 25,
    minUnits: 10,
    maxUnits: 300,
    unitStep: 5,
    unitPresets: [15, 30, 60, 120, 250],
    branchMultiplier: 350,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Next-business-day response with quarterly audit reviews & software patches',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: '1-Hour P1 incident escalation, dedicated technical manager & continuous audit readiness',
        multiplier: 1.25,
      },
    ],
    deliverables: [
      'Encrypted Root Password & SSH Key Auto-Vaulting',
      'High-Definition Keystroke & Video Session Audit Recording',
      'Just-In-Time (JIT) Temporary Privilege Elevation Workflows',
      'Enterprise Cybersecurity Governance & Audit Verification Reports',
      'Local CITS In-Country Deployment, Hardening & Admin Training',
    ],
    complianceBadges: ['Zero-Trust Core', 'ISO 27001', 'PCI-DSS 4.0'],
    typicalTimeline: '2 – 3 Weeks',
  },
  {
    id: 'sophos-ngfw',
    name: 'Next-Gen Firewall & Perimeter Defense',
    badge: 'Zero-Trust Perimeter',
    techPartner: 'Sophos XGS / WatchGuard',
    shortDesc: 'Deep packet inspection, TLS 1.3 decryption, SD-WAN mesh and automated threat isolation.',
    iconName: 'Shield',
    basePriceUsd: 2400,
    perUnitUsd: 18,
    unitLabel: 'Protected Endpoints / Network Users',
    defaultUnits: 100,
    minUnits: 25,
    maxUnits: 1500,
    unitStep: 25,
    unitPresets: [50, 100, 250, 500, 1000],
    branchMultiplier: 650,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Next-business-day hardware advance replacement & signature feed management',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: '24/7 SOC perimeter monitoring, 1-Hour SLA & zero-day threat response',
        multiplier: 1.22,
      },
    ],
    deliverables: [
      'Enterprise Next-Gen Firewall Appliance Sizing & Physical Staging',
      'Active-Passive High-Availability (HA) Resiliency Clustering',
      'TLS 1.3 Deep Packet Inspection & AI Intrusion Prevention (IPS)',
      'Multi-Branch Redundant SD-WAN Tunnels & ZTNA Remote Access',
      'Synchronized Heartbeat Auto-Quarantine for Compromised Endpoints',
    ],
    complianceBadges: ['NIST CSF', 'ISO 27001', 'CIS Controls'],
    typicalTimeline: '1 – 2 Weeks',
  },
  {
    id: 'manageengine-itsm',
    name: 'ITSM & Unified Endpoint Management',
    badge: 'ITIL & Automated Patching',
    techPartner: 'ManageEngine',
    shortDesc: 'Automated multi-OS patch management across 850+ third-party apps, ITIL helpdesk, and asset audit.',
    iconName: 'Cpu',
    basePriceUsd: 1900,
    perUnitUsd: 14,
    unitLabel: 'Managed Laptops, Desktops & Servers',
    defaultUnits: 150,
    minUnits: 50,
    maxUnits: 2500,
    unitStep: 25,
    unitPresets: [75, 150, 350, 750, 1500],
    branchMultiplier: 250,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Standard ITIL workflow tuning and automated patch rollout monitoring',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: 'Managed Patch-as-a-Service with 48hr critical CVE remediation guarantee',
        multiplier: 1.2,
      },
    ],
    deliverables: [
      'Automated Vulnerability Patching for Windows, macOS & Linux',
      'Zero-Touch Third-Party Software Packaging (Zoom, Chrome, Adobe, etc.)',
      'ServiceDesk Plus Incident, Problem & Change Management Portal',
      'Hardware & Software Asset License Compliance Reconciliation',
      'Self-Healing Endpoint Agents & Remote Screen Shadowing',
    ],
    complianceBadges: ['ITIL v4', 'ISO 20000', 'SOC 2 Type II'],
    typicalTimeline: '1 – 2 Weeks',
  },
  {
    id: 'prtg-telemetry',
    name: 'PRTG Network Telemetry & Probes',
    badge: 'Real-Time Observability',
    techPartner: 'Paessler PRTG',
    shortDesc: 'Distributed SNMP, WMI, NetFlow bandwidth and server room environmental telemetry sensors.',
    iconName: 'Activity',
    basePriceUsd: 1950,
    perUnitUsd: 2.1,
    unitLabel: 'Monitored Telemetry Sensors',
    defaultUnits: 500,
    minUnits: 100,
    maxUnits: 5000,
    unitStep: 100,
    unitPresets: [250, 500, 1000, 2500, 5000],
    branchMultiplier: 200,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Periodic sensor calibration and dashboard maintenance',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: 'Proactive NOC monitoring, customized webhook alert scripts & high availability',
        multiplier: 1.18,
      },
    ],
    deliverables: [
      'PRTG Core Server Engine Deployment & SQL Database Tuning',
      'Multi-Branch Distributed Remote Probe Collector Rollout',
      'Bandwidth NetFlow/IPFIX Packet Sniffing & Latency Diagnostics',
      'Customized Big-Screen NOC Wallboard Dashboards',
      'Automated Escalation via Email, SMS & WhatsApp Webhook Alerts',
    ],
    complianceBadges: ['Uptime SLA', 'ISO 27001 Availability'],
    typicalTimeline: '1 Week',
  },
  {
    id: 'hardware-fleets',
    name: 'Commercial ICT Hardware Fleets',
    badge: 'HP, Lenovo & UniFi',
    techPartner: 'HP / Lenovo / UniFi',
    shortDesc: 'Commercial laptops, desktops, enterprise printers and edge Wi-Fi with local staging & 3-yr warranty.',
    iconName: 'Laptop',
    basePriceUsd: 1400,
    perUnitUsd: 950,
    unitLabel: 'Commercial Laptops & Workstations',
    defaultUnits: 20,
    minUnits: 5,
    maxUnits: 250,
    unitStep: 5,
    unitPresets: [10, 20, 50, 100, 150],
    branchMultiplier: 180,
    slaOptions: [
      {
        id: 'standard',
        name: 'Standard 3-Year On-Site SLA',
        description: 'Manufacturer 3-year warranty with next-business-day local parts dispatch in Kampala',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Gold Fleet Care with Loaner Guarantee',
        description: '4-Hour same-day standby hardware swap, accidental damage protection & asset lifecycle reports',
        multiplier: 1.15,
      },
    ],
    deliverables: [
      'Genuine HP EliteBook / ProBook or Lenovo ThinkPad T-Series Laptops',
      'CITS Kampala Pre-Delivery Staging: Corporate Win 11 Pro Master Imaging',
      'Hardware-Enforced BIOS Passwords, HP Wolf / Lenovo ThinkShield Hardening',
      'Laser-Etched Asset Tagging & Corporate Serial Inventory Roster',
      '3-Year Next-Business-Day Onsite Manufacturer Warranty in East Africa',
    ],
    complianceBadges: ['MIL-STD-810H', 'HP Wolf Security', 'Lenovo ThinkShield'],
    typicalTimeline: '2 – 3 Weeks Staging & Delivery',
  },
  {
    id: 'quorum-dr',
    name: 'Business Continuity & Instant DR (Quorum onQ)',
    badge: 'Zero Data Loss / <15m RTO',
    techPartner: 'Quorum onQ',
    shortDesc: 'Sub-15 minute instant standby clone spin-up with zero uncommitted database transaction loss.',
    iconName: 'RefreshCw',
    basePriceUsd: 4800,
    perUnitUsd: 220,
    unitLabel: 'Critical Production Servers / VMs',
    defaultUnits: 8,
    minUnits: 2,
    maxUnits: 40,
    unitStep: 1,
    unitPresets: [3, 6, 12, 20, 35],
    branchMultiplier: 550,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Semi-annual DR recovery testing & snapshot replication health checks',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: '24/7 Rapid DR failover hot-assist with zero data loss RPO guarantee',
        multiplier: 1.25,
      },
    ],
    deliverables: [
      'Dedicated onQ High-Availability DR Node Sizing & Rack Mounting',
      'Sub-15 Minute Instant Virtual Clone Standby Recovery Spin-up',
      'Automated Non-Disruptive DR Sandbox Validation Drills',
      'Immutable Ransomware Snapshot Protection & Point-in-Time Rollback',
      'CITS In-Country Priority Disaster Recovery Assistance SLA',
    ],
    complianceBadges: ['Enterprise BCM', 'ISO 22301', 'PCI-DSS'],
    typicalTimeline: '2 – 3 Weeks',
  },
  {
    id: 'vapt-security',
    name: 'VAPT & Regulatory Security Audits',
    badge: 'Certified Ethical Hacking',
    techPartner: 'CITS CREST / CEH Team',
    shortDesc: 'Independent black-box & grey-box offensive testing of external perimeters, web portals, APIs & LANs.',
    iconName: 'Lock',
    basePriceUsd: 3400,
    perUnitUsd: 95,
    unitLabel: 'Scoped External IPs / Web Portals / APIs',
    defaultUnits: 15,
    minUnits: 3,
    maxUnits: 120,
    unitStep: 1,
    unitPresets: [5, 15, 30, 60, 100],
    branchMultiplier: 450,
    slaOptions: [
      {
        id: 'standard',
        name: 'Comprehensive Audit & Re-Test',
        description: 'Complete technical assessment + 1 complimentary re-test after remediation',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Continuous Quarterly Red-Team Audit',
        description: 'Quarterly continuous vulnerability cycles & real-time board compliance reports',
        multiplier: 1.35,
      },
    ],
    deliverables: [
      'External Perimeter Penetration Test & Firewall Rule Bypass Checks',
      'OWASP Top 10 Web Application & API Security Exploitation Testing',
      'Internal Network Vulnerability Scan & Lateral Movement Simulation',
      'Executive Summary Presentation for Board & Risk Committees',
      'Technical Remediation Plan + Complimentary Post-Fix Verification Re-Test',
    ],
    complianceBadges: ['Enterprise Security Directives', 'PCI-DSS 4.0', 'ISO 27001'],
    typicalTimeline: '1 – 2 Weeks Execution + Report',
  },
  {
    id: 'edms-vicisoft',
    name: 'Enterprise Document Management (EDMS)',
    badge: 'Paperless Automation',
    techPartner: 'Vicisoft / ECM Enterprise',
    shortDesc: 'OCR document digitization, role-based metadata indexing, workflow approval routing & secure archival.',
    iconName: 'FileText',
    basePriceUsd: 2800,
    perUnitUsd: 34,
    unitLabel: 'Active Workflow Users / System Seats',
    defaultUnits: 40,
    minUnits: 10,
    maxUnits: 400,
    unitStep: 5,
    unitPresets: [20, 50, 100, 200, 350],
    branchMultiplier: 300,
    slaOptions: [
      {
        id: 'standard',
        name: 'Enterprise 8x5 Business SLA',
        description: 'Standard repository backup checks and index schema maintenance',
        multiplier: 1.0,
      },
      {
        id: 'premium',
        name: 'Mission-Critical 24x7x365 SLA',
        description: 'Dedicated workflow optimization engineer & instant scan queue triage',
        multiplier: 1.2,
      },
    ],
    deliverables: [
      'Centralized Encrypted Document Repository with Role Permissions',
      'Automated OCR Full-Text Search Engine & Metadata Indexing',
      'Multi-Tier Approval Routing & Electronic Sign-off Workflows',
      'Granular Access Rights & Tamper-Evident Audit Logging',
      'High-Volume Production Scanner Integration & Training',
    ],
    complianceBadges: ['Data Protection Act 2019', 'ISO 9001', 'ISO 27001'],
    typicalTimeline: '3 – 4 Weeks',
  },
];

/**
 * Pure calculation function that produces a transparent, deterministic estimate
 */
export function calculateQuickQuote(params: {
  categoryId: string;
  units: number;
  branchCount: number;
  slaTier: 'standard' | 'premium';
  includeStagingAndDeploy: boolean;
  currency: 'USD' | 'UGX';
}): QuoteCalculationResult {
  const category = QUICK_QUOTE_CATEGORIES.find((c) => c.id === params.categoryId) || QUICK_QUOTE_CATEGORIES[0];
  const safeUnits = Math.max(category.minUnits, Math.min(category.maxUnits, params.units));
  const safeBranches = Math.max(1, params.branchCount);

  // SLA Multiplier
  const slaOption = category.slaOptions.find((s) => s.id === params.slaTier) || category.slaOptions[0];
  const slaMultiplier = slaOption.multiplier;

  // Base platform license/core engine
  const baseCost = category.basePriceUsd;

  // Volume scale
  const volumeCost = safeUnits * category.perUnitUsd;

  // Multi-site / branch infrastructure
  const branchCost = (safeBranches - 1) * category.branchMultiplier;

  // Professional Staging & Deployment Services (CITS Engineers)
  const stagingCost = params.includeStagingAndDeploy 
    ? Math.round((baseCost * 0.35) + (volumeCost * 0.12) + (safeBranches * 200))
    : 0;

  // Annual Support & SLA baseline
  const rawSubtotal = baseCost + volumeCost + branchCost;
  const annualSlaBase = Math.round(rawSubtotal * 0.20 * slaMultiplier);

  // Total project estimate range (± 8% buffer for scoping contingencies)
  const coreTotal = rawSubtotal + stagingCost;
  const estimatedLowUsd = Math.round(coreTotal * 0.94);
  const estimatedHighUsd = Math.round(coreTotal * 1.08);

  const estimatedLowUgx = estimatedLowUsd * UGX_PER_USD;
  const estimatedHighUgx = estimatedHighUsd * UGX_PER_USD;

  // Itemized breakdown
  const breakdown = [
    {
      label: category.id === 'hardware-fleets' ? 'Commercial Hardware Tier' : 'Core Software / Appliance Licensing',
      amountUsd: Math.round(baseCost + volumeCost),
      amountUgx: Math.round((baseCost + volumeCost) * UGX_PER_USD),
      detail: `${safeUnits} ${category.unitLabel.toLowerCase()} @ standard volume enterprise pricing`,
    },
    {
      label: 'Multi-Branch Distributed Interconnect',
      amountUsd: branchCost,
      amountUgx: branchCost * UGX_PER_USD,
      detail: safeBranches === 1 ? 'Single Central HQ / Datacenter deployment' : `${safeBranches} distributed branches / regional nodes configured`,
    },
    {
      label: 'CITS Certified Engineering & Staging',
      amountUsd: stagingCost,
      amountUgx: stagingCost * UGX_PER_USD,
      detail: params.includeStagingAndDeploy 
        ? 'Pre-delivery hardening, golden image/config deployment, validation testing & admin knowledge transfer'
        : 'Self-implemented / client internal engineering team deployment',
    },
    {
      label: `Annual ${slaOption.name}`,
      amountUsd: annualSlaBase,
      amountUgx: annualSlaBase * UGX_PER_USD,
      detail: slaOption.description,
    },
  ];

  // Deterministic quote reference ID
  const hashSeed = Math.abs(
    (params.categoryId.charCodeAt(0) * 31 + safeUnits * 17 + safeBranches * 73) % 900000
  ) + 100000;
  const quoteRef = `CITS-EST-${hashSeed}`;

  return {
    categoryId: category.id,
    categoryName: category.name,
    techPartner: category.techPartner,
    units: safeUnits,
    unitLabel: category.unitLabel,
    branchCount: safeBranches,
    slaTier: params.slaTier,
    includeStagingAndDeploy: params.includeStagingAndDeploy,
    currency: params.currency,
    estimatedLowUsd,
    estimatedHighUsd,
    estimatedLowUgx,
    estimatedHighUgx,
    annualSlaEstimateUsd: annualSlaBase,
    breakdown,
    deliverables: category.deliverables,
    timeline: category.typicalTimeline,
    complianceBadges: category.complianceBadges,
    quoteRef,
  };
}

export function formatCurrency(amount: number, currency: 'USD' | 'UGX'): string {
  if (currency === 'UGX') {
    return `UGX ${amount.toLocaleString('en-US')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}
