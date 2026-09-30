export interface PartnerColorTheme {
  accent: string;
  // Dark surface styling (e.g. TrustStrip, Dark Hub)
  darkCardBg: string;
  darkBorder: string;
  darkHoverBorder: string;
  darkHoverGlow: string;
  darkBadgeBg: string;
  darkBadgeText: string;
  darkBadgeBorder: string;
  darkTitleHover: string;
  darkActionText: string;
  darkActionHover: string;
  dotBg: string;
  // Light surface styling (e.g. Ecosystem Hub, Partners View)
  lightBadgeBg: string;
  lightBadgeText: string;
  lightBadgeBorder: string;
  lightHoverBorder: string;
  lightSelectedBg: string;
  lightSelectedRing: string;
  lightSelectedBadge: string;
  lightIconColor: string;
  displayBadge: string; // Clean, non-truncated badge label
}

export const PARTNER_THEMES: Record<string, PartnerColorTheme> = {
  'ARCON PAM': {
    accent: 'amber',
    darkCardBg: 'bg-gradient-to-b from-amber-950/25 to-slate-900/90',
    darkBorder: 'border-amber-500/30',
    darkHoverBorder: 'hover:border-amber-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    darkBadgeBg: 'bg-amber-500/15',
    darkBadgeText: 'text-amber-300',
    darkBadgeBorder: 'border-amber-500/30',
    darkTitleHover: 'group-hover:text-amber-300',
    darkActionText: 'text-amber-400/90',
    darkActionHover: 'group-hover:text-amber-300',
    dotBg: 'bg-amber-400',
    lightBadgeBg: 'bg-amber-50',
    lightBadgeText: 'text-amber-800',
    lightBadgeBorder: 'border-amber-200',
    lightHoverBorder: 'hover:border-amber-400',
    lightSelectedBg: 'bg-gradient-to-br from-amber-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-amber-500',
    lightSelectedBadge: 'bg-amber-400/20 text-amber-300',
    lightIconColor: 'text-amber-500',
    displayBadge: 'Privileged Access'
  },
  'ManageEngine': {
    accent: 'emerald',
    darkCardBg: 'bg-gradient-to-b from-emerald-950/25 to-slate-900/90',
    darkBorder: 'border-emerald-500/30',
    darkHoverBorder: 'hover:border-emerald-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    darkBadgeBg: 'bg-emerald-500/15',
    darkBadgeText: 'text-emerald-300',
    darkBadgeBorder: 'border-emerald-500/30',
    darkTitleHover: 'group-hover:text-emerald-300',
    darkActionText: 'text-emerald-400/90',
    darkActionHover: 'group-hover:text-emerald-300',
    dotBg: 'bg-emerald-400',
    lightBadgeBg: 'bg-emerald-50',
    lightBadgeText: 'text-emerald-800',
    lightBadgeBorder: 'border-emerald-200',
    lightHoverBorder: 'hover:border-emerald-400',
    lightSelectedBg: 'bg-gradient-to-br from-emerald-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-emerald-500',
    lightSelectedBadge: 'bg-emerald-400/20 text-emerald-300',
    lightIconColor: 'text-emerald-500',
    displayBadge: 'ITSM & Endpoints'
  },
  'PRTG Network Monitor': {
    accent: 'cyan',
    darkCardBg: 'bg-gradient-to-b from-cyan-950/25 to-slate-900/90',
    darkBorder: 'border-cyan-500/30',
    darkHoverBorder: 'hover:border-cyan-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    darkBadgeBg: 'bg-cyan-500/15',
    darkBadgeText: 'text-cyan-300',
    darkBadgeBorder: 'border-cyan-500/30',
    darkTitleHover: 'group-hover:text-cyan-300',
    darkActionText: 'text-cyan-400/90',
    darkActionHover: 'group-hover:text-cyan-300',
    dotBg: 'bg-cyan-400',
    lightBadgeBg: 'bg-cyan-50',
    lightBadgeText: 'text-cyan-800',
    lightBadgeBorder: 'border-cyan-200',
    lightHoverBorder: 'hover:border-cyan-400',
    lightSelectedBg: 'bg-gradient-to-br from-cyan-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-cyan-500',
    lightSelectedBadge: 'bg-cyan-400/20 text-cyan-300',
    lightIconColor: 'text-cyan-500',
    displayBadge: '24/7 Monitoring'
  },
  'Sophos': {
    accent: 'blue',
    darkCardBg: 'bg-gradient-to-b from-blue-950/25 to-slate-900/90',
    darkBorder: 'border-blue-500/30',
    darkHoverBorder: 'hover:border-blue-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    darkBadgeBg: 'bg-blue-500/15',
    darkBadgeText: 'text-blue-300',
    darkBadgeBorder: 'border-blue-500/30',
    darkTitleHover: 'group-hover:text-blue-300',
    darkActionText: 'text-blue-400/90',
    darkActionHover: 'group-hover:text-blue-300',
    dotBg: 'bg-blue-400',
    lightBadgeBg: 'bg-blue-50',
    lightBadgeText: 'text-blue-800',
    lightBadgeBorder: 'border-blue-200',
    lightHoverBorder: 'hover:border-blue-400',
    lightSelectedBg: 'bg-gradient-to-br from-blue-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-blue-500',
    lightSelectedBadge: 'bg-blue-400/20 text-blue-300',
    lightIconColor: 'text-blue-500',
    displayBadge: 'Next-Gen Firewall'
  },
  'Quorum': {
    accent: 'teal',
    darkCardBg: 'bg-gradient-to-b from-teal-950/25 to-slate-900/90',
    darkBorder: 'border-teal-500/30',
    darkHoverBorder: 'hover:border-teal-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]',
    darkBadgeBg: 'bg-teal-500/15',
    darkBadgeText: 'text-teal-300',
    darkBadgeBorder: 'border-teal-500/30',
    darkTitleHover: 'group-hover:text-teal-300',
    darkActionText: 'text-teal-400/90',
    darkActionHover: 'group-hover:text-teal-300',
    dotBg: 'bg-teal-400',
    lightBadgeBg: 'bg-teal-50',
    lightBadgeText: 'text-teal-800',
    lightBadgeBorder: 'border-teal-200',
    lightHoverBorder: 'hover:border-teal-400',
    lightSelectedBg: 'bg-gradient-to-br from-teal-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-teal-500',
    lightSelectedBadge: 'bg-teal-400/20 text-teal-300',
    lightIconColor: 'text-teal-500',
    displayBadge: 'Disaster Recovery'
  },
  'Vicisoft': {
    accent: 'purple',
    darkCardBg: 'bg-gradient-to-b from-purple-950/25 to-slate-900/90',
    darkBorder: 'border-purple-500/30',
    darkHoverBorder: 'hover:border-purple-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    darkBadgeBg: 'bg-purple-500/15',
    darkBadgeText: 'text-purple-300',
    darkBadgeBorder: 'border-purple-500/30',
    darkTitleHover: 'group-hover:text-purple-300',
    darkActionText: 'text-purple-400/90',
    darkActionHover: 'group-hover:text-purple-300',
    dotBg: 'bg-purple-400',
    lightBadgeBg: 'bg-purple-50',
    lightBadgeText: 'text-purple-800',
    lightBadgeBorder: 'border-purple-200',
    lightHoverBorder: 'hover:border-purple-400',
    lightSelectedBg: 'bg-gradient-to-br from-purple-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-purple-500',
    lightSelectedBadge: 'bg-purple-400/20 text-purple-300',
    lightIconColor: 'text-purple-500',
    displayBadge: 'EDMS & Workflow'
  },
  'Matrix': {
    accent: 'rose',
    darkCardBg: 'bg-gradient-to-b from-rose-950/25 to-slate-900/90',
    darkBorder: 'border-rose-500/30',
    darkHoverBorder: 'hover:border-rose-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
    darkBadgeBg: 'bg-rose-500/15',
    darkBadgeText: 'text-rose-300',
    darkBadgeBorder: 'border-rose-500/30',
    darkTitleHover: 'group-hover:text-rose-300',
    darkActionText: 'text-rose-400/90',
    darkActionHover: 'group-hover:text-rose-300',
    dotBg: 'bg-rose-400',
    lightBadgeBg: 'bg-rose-50',
    lightBadgeText: 'text-rose-800',
    lightBadgeBorder: 'border-rose-200',
    lightHoverBorder: 'hover:border-rose-400',
    lightSelectedBg: 'bg-gradient-to-br from-rose-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-rose-500',
    lightSelectedBadge: 'bg-rose-400/20 text-rose-300',
    lightIconColor: 'text-rose-500',
    displayBadge: 'IP-PBX & Telephony'
  },
  'RAY': {
    accent: 'indigo',
    darkCardBg: 'bg-gradient-to-b from-indigo-950/25 to-slate-900/90',
    darkBorder: 'border-indigo-500/30',
    darkHoverBorder: 'hover:border-indigo-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]',
    darkBadgeBg: 'bg-indigo-500/15',
    darkBadgeText: 'text-indigo-300',
    darkBadgeBorder: 'border-indigo-500/30',
    darkTitleHover: 'group-hover:text-indigo-300',
    darkActionText: 'text-indigo-400/90',
    darkActionHover: 'group-hover:text-indigo-300',
    dotBg: 'bg-indigo-400',
    lightBadgeBg: 'bg-indigo-50',
    lightBadgeText: 'text-indigo-800',
    lightBadgeBorder: 'border-indigo-200',
    lightHoverBorder: 'hover:border-indigo-400',
    lightSelectedBg: 'bg-gradient-to-br from-indigo-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-indigo-500',
    lightSelectedBadge: 'bg-indigo-400/20 text-indigo-300',
    lightIconColor: 'text-indigo-500',
    displayBadge: 'Enterprise Wi-Fi 6'
  },
  'HP Enterprise': {
    accent: 'teal',
    darkCardBg: 'bg-gradient-to-b from-emerald-950/25 to-slate-900/90',
    darkBorder: 'border-emerald-500/30',
    darkHoverBorder: 'hover:border-emerald-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    darkBadgeBg: 'bg-emerald-500/15',
    darkBadgeText: 'text-emerald-300',
    darkBadgeBorder: 'border-emerald-500/30',
    darkTitleHover: 'group-hover:text-emerald-300',
    darkActionText: 'text-emerald-400/90',
    darkActionHover: 'group-hover:text-emerald-300',
    dotBg: 'bg-emerald-400',
    lightBadgeBg: 'bg-emerald-50',
    lightBadgeText: 'text-emerald-800',
    lightBadgeBorder: 'border-emerald-200',
    lightHoverBorder: 'hover:border-emerald-400',
    lightSelectedBg: 'bg-gradient-to-br from-emerald-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-emerald-500',
    lightSelectedBadge: 'bg-emerald-400/20 text-emerald-300',
    lightIconColor: 'text-emerald-500',
    displayBadge: 'Commercial Laptops'
  },
  'Lenovo': {
    accent: 'red',
    darkCardBg: 'bg-gradient-to-b from-red-950/25 to-slate-900/90',
    darkBorder: 'border-red-500/30',
    darkHoverBorder: 'hover:border-red-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]',
    darkBadgeBg: 'bg-red-500/15',
    darkBadgeText: 'text-red-300',
    darkBadgeBorder: 'border-red-500/30',
    darkTitleHover: 'group-hover:text-red-300',
    darkActionText: 'text-red-400/90',
    darkActionHover: 'group-hover:text-red-300',
    dotBg: 'bg-red-400',
    lightBadgeBg: 'bg-red-50',
    lightBadgeText: 'text-red-800',
    lightBadgeBorder: 'border-red-200',
    lightHoverBorder: 'hover:border-red-400',
    lightSelectedBg: 'bg-gradient-to-br from-red-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-red-500',
    lightSelectedBadge: 'bg-red-400/20 text-red-300',
    lightIconColor: 'text-red-500',
    displayBadge: 'ThinkPad Workstations'
  },
  'UniFi (Ubiquiti)': {
    accent: 'sky',
    darkCardBg: 'bg-gradient-to-b from-sky-950/25 to-slate-900/90',
    darkBorder: 'border-sky-500/30',
    darkHoverBorder: 'hover:border-sky-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]',
    darkBadgeBg: 'bg-sky-500/15',
    darkBadgeText: 'text-sky-300',
    darkBadgeBorder: 'border-sky-500/30',
    darkTitleHover: 'group-hover:text-sky-300',
    darkActionText: 'text-sky-400/90',
    darkActionHover: 'group-hover:text-sky-300',
    dotBg: 'bg-sky-400',
    lightBadgeBg: 'bg-sky-50',
    lightBadgeText: 'text-sky-800',
    lightBadgeBorder: 'border-sky-200',
    lightHoverBorder: 'hover:border-sky-400',
    lightSelectedBg: 'bg-gradient-to-br from-sky-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-sky-500',
    lightSelectedBadge: 'bg-sky-400/20 text-sky-300',
    lightIconColor: 'text-sky-500',
    displayBadge: 'Gateways & Wi-Fi'
  },
  'Dell Technologies & HPE': {
    accent: 'orange',
    darkCardBg: 'bg-gradient-to-b from-orange-950/25 to-slate-900/90',
    darkBorder: 'border-orange-500/30',
    darkHoverBorder: 'hover:border-orange-400',
    darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]',
    darkBadgeBg: 'bg-orange-500/15',
    darkBadgeText: 'text-orange-300',
    darkBadgeBorder: 'border-orange-500/30',
    darkTitleHover: 'group-hover:text-orange-300',
    darkActionText: 'text-orange-400/90',
    darkActionHover: 'group-hover:text-orange-300',
    dotBg: 'bg-orange-400',
    lightBadgeBg: 'bg-orange-50',
    lightBadgeText: 'text-orange-800',
    lightBadgeBorder: 'border-orange-200',
    lightHoverBorder: 'hover:border-orange-400',
    lightSelectedBg: 'bg-gradient-to-br from-orange-950 to-slate-900',
    lightSelectedRing: 'ring-2 ring-orange-500',
    lightSelectedBadge: 'bg-orange-400/20 text-orange-300',
    lightIconColor: 'text-orange-500',
    displayBadge: 'Servers & Compute'
  }
};

const DEFAULT_THEME: PartnerColorTheme = {
  accent: 'sky',
  darkCardBg: 'bg-gradient-to-b from-slate-900/80 to-slate-950',
  darkBorder: 'border-slate-800',
  darkHoverBorder: 'hover:border-sky-400',
  darkHoverGlow: 'hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]',
  darkBadgeBg: 'bg-slate-800',
  darkBadgeText: 'text-slate-300',
  darkBadgeBorder: 'border-slate-700',
  darkTitleHover: 'group-hover:text-white',
  darkActionText: 'text-slate-400',
  darkActionHover: 'group-hover:text-sky-300',
  dotBg: 'bg-sky-400',
  lightBadgeBg: 'bg-slate-100',
  lightBadgeText: 'text-slate-700',
  lightBadgeBorder: 'border-slate-200',
  lightHoverBorder: 'hover:border-slate-400',
  lightSelectedBg: 'bg-slate-900',
  lightSelectedRing: 'ring-2 ring-sky-500',
  lightSelectedBadge: 'bg-slate-800 text-slate-200',
  lightIconColor: 'text-sky-600',
  displayBadge: 'Verified Platform'
};

export function getPartnerColorTheme(name: string): PartnerColorTheme {
  // Direct match
  if (PARTNER_THEMES[name]) {
    return PARTNER_THEMES[name];
  }
  
  // Partial matches
  const key = Object.keys(PARTNER_THEMES).find(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));
  if (key) {
    return PARTNER_THEMES[key];
  }

  return DEFAULT_THEME;
}
