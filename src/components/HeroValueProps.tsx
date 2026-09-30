import React from 'react';
import { motion, Variants } from 'motion/react';
import { 
  ShieldCheck, 
  RefreshCw, 
  FileCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export type SandboxScenario = 'security' | 'continuity' | 'edms' | 'voice';

interface ValuePropItem {
  id: string;
  slug: string;
  scenario: SandboxScenario;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  metric: string;
  metricLabel: string;
  description: string;
  outcomes: string[];
  accentColor: 'emerald' | 'sky' | 'indigo' | 'teal';
  image: string;
}

interface HeroValuePropsProps {
  onSelectSolution?: (slug: string) => void;
  onSelectSandboxScenario?: (scenario: SandboxScenario) => void;
  onOpenConsultation: () => void;
}

const VALUE_PROPS: ValuePropItem[] = [
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    scenario: 'security',
    icon: ShieldCheck,
    title: 'Proactive Cyber Immunity',
    badge: 'Zero-Trust Posture',
    metric: '100% Unified Sync',
    metricLabel: 'Perimeter to Endpoint Defense',
    description: 'Synchronized Sophos firewall & EDR telemetry with automated lateral containment and continuous zero-trust / ISO 27001 security compliance.',
    outcomes: ['Air-Gapped Isolation', 'Behavioral Anti-Ransomware', 'Sub-Second Incident Response'],
    accentColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'business-continuity',
    slug: 'business-continuity',
    scenario: 'continuity',
    icon: RefreshCw,
    title: 'Sub-15m Disaster Recovery',
    badge: 'Quorum onQ High Availability',
    metric: '< 15 Min RTO',
    metricLabel: 'Zero SAN Transaction Loss',
    description: 'Hardware-agnostic virtual clones spin up instantly during power failures or cyber extortion, ensuring critical enterprise databases never stop.',
    outcomes: ['One-Click Disaster Drills', 'Automated Daily Verification', 'Zero Production Disruption'],
    accentColor: 'sky',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'information-management',
    slug: 'information-management',
    scenario: 'edms',
    icon: FileCheck,
    title: 'Sovereign Digital Vaults',
    badge: 'ViciDocs EDMS & OCR',
    metric: '99.8% Faster Search',
    metricLabel: 'Audited Institutional Records',
    description: 'High-speed OCR ingestion pipelines transform paper files into indexed, tamper-proof electronic repositories with automated approval routing.',
    outcomes: ['Data Protection Act Compliant', 'Encrypted Role Access', 'Zero Physical Paper Loss'],
    accentColor: 'indigo',
    image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'unified-communications',
    slug: 'communications',
    scenario: 'voice',
    icon: Zap,
    title: 'Regional IP Telecommunications',
    badge: 'Matrix Unified VoIP',
    metric: 'Zero Carrier Tolls',
    metricLabel: 'Cross-Border Office Trunking',
    description: 'Direct encrypted SIP trunks and resilient SD-WAN tunnels interconnecting branches across Uganda, Zambia, and Malawi with 99.999% SLA voice clarity.',
    outcomes: ['Kampala-Lusaka-Lilongwe IP', 'Encrypted WAN Routing', 'Centralized Call Management'],
    accentColor: 'teal',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.65, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    } 
  },
};

export const HeroValueProps: React.FC<HeroValuePropsProps> = ({
  onSelectSolution,
  onSelectSandboxScenario,
  onOpenConsultation,
}) => {
  const getThemeClasses = (accent: 'emerald' | 'sky' | 'indigo' | 'teal') => {
    switch (accent) {
      case 'emerald':
        return {
          border: 'border-emerald-500/30 hover:border-emerald-400/60',
          glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
          badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/70',
          iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          metricText: 'text-emerald-300',
          dot: 'bg-emerald-400',
        };
      case 'sky':
        return {
          border: 'border-sky-500/30 hover:border-sky-400/60',
          glow: 'group-hover:shadow-[0_0_25px_rgba(2,132,199,0.15)]',
          badgeBg: 'bg-sky-950/80 text-sky-300 border-sky-800/70',
          iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          metricText: 'text-sky-300',
          dot: 'bg-sky-400',
        };
      case 'indigo':
        return {
          border: 'border-indigo-500/30 hover:border-indigo-400/60',
          glow: 'group-hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]',
          badgeBg: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/70',
          iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
          metricText: 'text-indigo-300',
          dot: 'bg-indigo-400',
        };
      case 'teal':
        return {
          border: 'border-teal-500/30 hover:border-teal-400/60',
          glow: 'group-hover:shadow-[0_0_25px_rgba(20,184,166,0.15)]',
          badgeBg: 'bg-teal-950/80 text-teal-300 border-teal-800/70',
          iconBg: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
          metricText: 'text-teal-300',
          dot: 'bg-teal-400',
        };
    }
  };

  const handleTestSandbox = (scenario: SandboxScenario, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectSandboxScenario) {
      onSelectSandboxScenario(scenario);
    }
    // Smooth scroll back to sandbox if screen is scrolled
    const sandboxEl = document.getElementById('hero-architecture-sandbox');
    if (sandboxEl) {
      sandboxEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="mt-14 pt-10 border-t border-slate-800/80 relative" id="hero-value-propositions">
      
      {/* Scroll-Triggered Section Header */}
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Value Propositions &amp; Resilience Guarantees</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Engineered for Zero Downtime, Sovereign Privacy &amp; Measurable ROI
          </h2>
        </div>

        <p className="text-xs text-slate-400 max-w-md font-mono leading-relaxed">
          Scroll-verified benchmarks audited across financial institutions, government ministries, and manufacturing plants in East Africa.
        </p>
      </motion.div>

      {/* Value Proposition Cards with Staggered Scroll-Triggered Animation */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {VALUE_PROPS.map((prop) => {
          const styles = getThemeClasses(prop.accentColor);
          const IconComponent = prop.icon;

          return (
            <motion.div
              key={prop.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
              onClick={() => onSelectSolution && onSelectSolution(prop.slug)}
              className={`group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1424] border ${styles.border} overflow-hidden flex flex-col justify-between transition-all duration-300 backdrop-blur-md cursor-pointer ${styles.glow}`}
            >
              {/* Card Technology Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1424] via-[#0c1424]/40 to-transparent" />
                
                {/* Floating Badge & Icon over Image */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                  <div className={`p-1.5 rounded-lg border ${styles.iconBg} bg-slate-950/80 backdrop-blur-xs transition-transform group-hover:scale-105`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${styles.badgeBg} bg-slate-950/80 backdrop-blur-xs font-medium tracking-tight`}>
                    {prop.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 pt-1">
                {/* Metric Callout */}
                <div className="mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`} />
                    <span className={`text-base font-extrabold font-mono ${styles.metricText}`}>
                      {prop.metric}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {prop.metricLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors mb-2 leading-snug">
                  {prop.title}
                </h3>
                <p className="text-xs text-slate-300/90 leading-relaxed font-normal mb-4">
                  {prop.description}
                </p>

                {/* Verified Tenets / Outcomes */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                  {prop.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Interactive Actions */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={(e) => handleTestSandbox(prop.scenario, e)}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-300 transition-colors"
                  title="Simulate this scenario in the sandbox above"
                >
                  <Play className="w-3 h-3 text-sky-400" />
                  <span>Test Sandbox</span>
                </button>

                <span className="inline-flex items-center text-sky-400 group-hover:text-sky-300 font-semibold text-xs group-hover:translate-x-0.5 transition-all">
                  <span>Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Subtle Bottom Trust Anchor */}
      <motion.div 
        className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>All value pillars backed by verified hardware-level SLAs &amp; certified engineers</span>
        </span>

        <button
          onClick={onOpenConsultation}
          className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4"
        >
          Request an Architectural Assessment &rarr;
        </button>
      </motion.div>
    </div>
  );
};
export default HeroValueProps;
