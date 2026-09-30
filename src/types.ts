export type PageView = 
  | 'home'
  | 'solutions'
  | 'solution-detail'
  | 'products'
  | 'services'
  | 'industries'
  | 'about'
  | 'partners'
  | 'insights'
  | 'case-studies'
  | 'careers'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ProductUseCase {
  title: string;
  industry: string;
  scenario: string;
  impact: string;
}

export interface EnterpriseProduct {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'Cybersecurity & PAM' | 'ITSM & Operations' | 'Network Monitoring' | 'Business Continuity' | 'EDMS & Collaboration' | 'Enterprise Infrastructure';
  tagline: string;
  badge: string;
  overview: string;
  shortParagraph: string; // Concise small paragraph requested for products
  keyFeatures: string[];
  citsDeliverables: string[];
  useCases: ProductUseCase[];
  complianceStandards: string[];
  relatedSolutions: string[];
  image?: string;
}

export interface ICTHardwareItem {
  id: string;
  name: string;
  brand: 'HP' | 'Lenovo' | 'UniFi' | 'Dell & HPE' | 'Enterprise Multi-Vendor' | 'Multi-Vendor Enterprise';
  category: 'Enterprise Servers & Compute' | 'Laptops & Mobile Workstations' | 'Desktops & Mini PCs' | 'Enterprise Printers & Scanners' | 'Enterprise Networking & Wi-Fi';
  headline: string;
  shortParagraph: string; // Concise small paragraph for IT items like servers, laptops, switches
  specsSummary: string[];
  securityFeatures: string[];
  targetAudience: string;
  enterpriseWarranty: string;
  popularModels: string[];
  image?: string;
}

export interface SolutionPillar {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  accentColor: string;
  problemStatement: string;
  strategicOutcome: string;
  executiveBrief: string; // Authoritative architectural brief for solution pages
  frameworkMethodology: string; // E.g., Zero-Trust, Defense-in-Depth, ITIL v4, ISO 22301
  associatedProducts: string[]; // Tangible products/hardware utilized in this solution
  deploymentTimeline: string;
  slaGuarantee: string;
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  technologyEcosystem: string[];
  deliverablesSummary: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  audience: string;
  iconName: string;
  image?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  keyChallenges: string[];
  tailoredArchitecture: string;
  criticalPriorities: string[];
  recommendedSolutions: string[];
  image?: string;
}

export interface TechnologyPartner {
  name: string;
  category: string;
  relationship: string;
  coreStrengths: string;
  badge: string;
  image?: string;
}

export interface RegionalOffice {
  country: string;
  companyName: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number }; // For visual schematic map
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Cybersecurity' | 'Business Continuity' | 'IT Infrastructure' | 'Digital Transformation' | 'Enterprise Technology' | 'Technology Trends';
  summary: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  anonymizedClient: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  areaOfInterest: string;
  message: string;
  quoteRef?: string;
  estimatedBudget?: string;
  selectedCategory?: string;
  serviceScopeSummary?: string;
}

export interface QuickQuoteCategory {
  id: string;
  name: string;
  badge: string;
  techPartner: string;
  shortDesc: string;
  iconName: string;
  basePriceUsd: number;
  perUnitUsd: number;
  unitLabel: string;
  defaultUnits: number;
  minUnits: number;
  maxUnits: number;
  unitStep: number;
  unitPresets: number[];
  branchMultiplier: number;
  hardwareCapexBaseUsd?: number;
  slaOptions: {
    id: 'standard' | 'premium';
    name: string;
    description: string;
    multiplier: number;
  }[];
  deliverables: string[];
  complianceBadges: string[];
  typicalTimeline: string;
}

export interface QuoteCalculationResult {
  categoryId: string;
  categoryName: string;
  techPartner: string;
  units: number;
  unitLabel: string;
  branchCount: number;
  slaTier: 'standard' | 'premium';
  includeStagingAndDeploy: boolean;
  currency: 'USD' | 'UGX';
  estimatedLowUsd: number;
  estimatedHighUsd: number;
  estimatedLowUgx: number;
  estimatedHighUgx: number;
  annualSlaEstimateUsd: number;
  breakdown: {
    label: string;
    amountUsd: number;
    amountUgx: number;
    detail: string;
  }[];
  deliverables: string[];
  timeline: string;
  complianceBadges: string[];
  quoteRef: string;
}
