import { 
  SolutionPillar, 
  ServiceItem, 
  IndustryItem, 
  TechnologyPartner, 
  RegionalOffice, 
  InsightArticle, 
  CaseStudy,
  EnterpriseProduct,
  ICTHardwareItem
} from '../types';

export const COMPANY_INFO = {
  officialName: "Complete IT Solutions Uganda Limited",
  shortName: "CITS",
  domain: "https://cits.co.ug/",
  primaryEmail: "sales@cits.co.ug",
  primaryPhone: "+256 703922319",
  tagline: "Technology that protects. Infrastructure that performs. Businesses that move forward.",
  subTagline: "CITS helps organisations design, secure and modernise the technology infrastructure behind critical business operations — from cybersecurity and business continuity to enterprise systems and communications.",
  positioning: "A modern enterprise technology partner helping organisations secure, connect, protect and transform their digital infrastructure.",
  establishedHQ: "Kampala, Uganda"
};

export const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    number: "01",
    title: "Cybersecurity",
    shortDescription: "Secure users, networks, endpoints and critical business systems against advanced threats.",
    heroHeadline: "Security is not a product. It is an architecture.",
    heroSubheadline: "Protect your organisation from the network perimeter to the endpoint with unified visibility, proactive threat prevention, and continuous vulnerability assessment.",
    iconName: "ShieldCheck",
    accentColor: "emerald",
    problemStatement: "Modern enterprises face multi-vector attacks where perimeter firewalls alone cannot inspect encrypted traffic, detect lateral movement, or prevent targeted ransomware.",
    strategicOutcome: "A zero-trust, defense-in-depth posture giving IT leadership 360° telemetry, automated quarantine, and continuous regulatory compliance.",
    executiveBrief: "The CITS Cybersecurity Architecture operates on the fundamental principle that security must be integrated across every layer of the enterprise rather than bolted on as disparate point products. We engineer unified defense topologies integrating Next-Gen XGS Firewalls, Privileged Access Management (PAM), synchronized Endpoint Detection & Response (EDR/XDR), and continuous vulnerability audits. This architecture actively protects corporate transactions, enterprise databases, and intellectual property while ensuring strict alignment with international cybersecurity frameworks, enterprise data privacy standards, and ISO/IEC 27001 best practices.",
    frameworkMethodology: "Zero-Trust Architecture (NIST SP 800-207) & ISO/IEC 27001",
    associatedProducts: [
      "Sophos Synchronized Cybersecurity & Firewall (XGS / Intercept X)",
      "ARCON Privileged Access Management (PAM)",
      "UniFi Enterprise Cloud Gateways & Security Appliances"
    ],
    deploymentTimeline: "2 to 4 weeks (Discovery, Staging, Active Directory Integration & User Onboarding)",
    slaGuarantee: "99.99% inspection availability with 2-hour critical breach response & local hot-swap spares",
    capabilities: [
      {
        title: "Next-Generation Firewall (NGFW)",
        description: "Deep packet inspection, application-level filtering, TLS/SSL decryption, and automated threat feeds for perimeter defense.",
        deliverables: ["Hardware & Virtual appliance sizing", "High-availability clustering", "SD-WAN multi-site integration", "Intrusion Prevention System (IPS) tuning"]
      },
      {
        title: "Endpoint & Server Protection",
        description: "AI-guided anti-exploit defenses, behavioral ransomware mitigation, and continuous telemetry across physical, virtual, and cloud workloads.",
        deliverables: ["Managed EDR / XDR deployment", "Host-based intrusion defense", "Automated malware rollback", "Centralized policy enforcement"]
      },
      {
        title: "Vulnerability Assessment & Penetration Testing (VAPT)",
        description: "Rigorous technical audits scanning external boundaries, internal LANs, web portals, and database layers for security gaps.",
        deliverables: ["Black-box and grey-box assessments", "Remediation action matrix", "Executive summary for board members", "Re-testing verification reports"]
      },
      {
        title: "Access Security & Identity Management",
        description: "Multi-factor authentication (MFA), secure remote user access, and strict identity-centric access control policies.",
        deliverables: ["Zero-trust network access (ZTNA)", "MFA token deployment", "Role-based privilege segregation", "Audit trail logging"]
      },
      {
        title: "IT Security Audits & Governance",
        description: "Comprehensive baseline evaluations mapping IT infrastructure against regulatory mandates, data privacy, and industry best practices.",
        deliverables: ["Asset inventory verification", "Configuration hygiene audit", "Incident response gap analysis", "Risk register documentation"]
      }
    ],
    technologyEcosystem: ["Sophos", "ARCON", "UniFi", "Matrix"],
    deliverablesSummary: ["Continuous Telemetry", "Next-Gen Firewall", "Endpoint EDR", "VAPT Audits", "Identity & MFA"],
    faqs: [
      {
        question: "How does CITS approach vulnerability assessments for regulated sectors?",
        answer: "Our certified security consultants perform systematic automated and manual penetration testing following strict non-disruptive protocols, delivering a prioritized remediation roadmap tailored to financial, government, or healthcare compliance obligations."
      },
      {
        question: "Can CITS integrate with our existing network hardware?",
        answer: "Yes. We conduct an initial architecture discovery to evaluate existing topology and design migration pathways that protect your prior capital investments while eliminating security blind spots."
      }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "business-continuity",
    slug: "business-continuity",
    number: "02",
    title: "Business Continuity",
    shortDescription: "Protect critical data, maintain operational resilience, and recover operations rapidly after disruption.",
    heroHeadline: "When business stops, the cost starts.",
    heroSubheadline: "Design resilient disaster recovery architectures that eliminate single points of failure, ensuring your systems recover in minutes rather than days.",
    iconName: "RefreshCw",
    accentColor: "sky",
    problemStatement: "Hardware failure, accidental deletion, ransomware encryption, or local infrastructure outages can halt revenue and break stakeholder trust without a verified DR system.",
    strategicOutcome: "Near-instantaneous failover and predictable recovery point objectives (RPO) and recovery time objectives (RTO) tested without disrupting daily operations.",
    executiveBrief: "The CITS Business Continuity & High-Availability Solution moves beyond conventional offline tape or slow file backups to deliver continuous instant recovery for mission-critical core databases, ERP systems, and hypervisors. Utilizing dedicated hardware appliances with standby virtual clones, we guarantee sub-15 minute Recovery Time Objectives (RTO) and sub-15 minute Recovery Point Objectives (RPO). Backups are air-gapped and write-once immutable to eliminate ransomware corruption, supported by automated scheduled sandbox disaster drills that verify application integrity without impacting live production.",
    frameworkMethodology: "ISO 22301 Business Continuity & BSI Resilience Directives",
    associatedProducts: [
      "Quorum onQ High Availability & Instant Disaster Recovery",
      "Dell PowerEdge & HPE ProLiant Enterprise Servers",
      "Sophos Synchronized Cybersecurity (Ransomware Defense)"
    ],
    deploymentTimeline: "1 to 2 weeks (SAN/NAS storage array mapping, snapshot staging & live failover drill)",
    slaGuarantee: "Sub-15 minute RTO/RPO guarantee with automated daily backup verification reports",
    capabilities: [
      {
        title: "Enterprise Backup & Disaster Recovery",
        description: "Image-based and granular file backups for on-premise servers, virtual environments, and cloud databases with fast failover.",
        deliverables: ["Local appliance instant boot", "Automated immutable snapshots", "Deduplicated storage optimization", "Multi-tier retention policies"]
      },
      {
        title: "Rapid Disaster Recovery Engine",
        description: "Instant recovery capabilities enabling servers to be spun up locally on dedicated appliances or in private cloud nodes during crises.",
        deliverables: ["One-click bare-metal restore", "Automated disaster failover testing", "Off-site replication", "Disaster recovery runbook documentation"]
      },
      {
        title: "Data Protection & Ransomware Immunity",
        description: "Air-gapped and write-once immutable storage architectures that prevent compromised network credentials from deleting backups.",
        deliverables: ["Immutable backup volumes", "Ransomware detection on backup streams", "Encrypted transit and rest", "Compliance archiving"]
      },
      {
        title: "Business Continuity Planning (BCP)",
        description: "Operational consulting to establish recovery time objectives (RTO), recovery point objectives (RPO), and emergency communication workflows.",
        deliverables: ["Business impact analysis", "Crisis response escalation paths", "Disaster drill simulations", "Continuity governance reports"]
      }
    ],
    technologyEcosystem: ["Quorum", "Dell & HPE", "Sophos"],
    deliverablesSummary: ["Instant System Failover", "Immutable Snapshots", "Air-Gapped Repositories", "RTO & RPO Optimization"],
    faqs: [
      {
        question: "What is the difference between a simple backup and a true Disaster Recovery solution?",
        answer: "A standard backup copies data files, which can take days to reinstall and configure after hardware loss. A Disaster Recovery solution boots virtual images of your critical servers in minutes, keeping business operations functioning while the primary hardware is remediated."
      },
      {
        question: "Can we test our recovery readiness without causing operational downtime?",
        answer: "Yes. Solutions like Quorum allow non-disruptive sandbox recovery drills during regular business hours to verify data integrity and application functionality without touching live production."
      }
    ],
    image: "/bcdr-architecture-insight.svg"
  },
  {
    id: "information-management",
    slug: "information-management",
    number: "03",
    title: "Enterprise Information Management",
    shortDescription: "Turn physical documents and dispersed files into structured, audited digital workflows.",
    heroHeadline: "Your information should work as hard as your people.",
    heroSubheadline: "Transform unstructured physical files and manual paper approvals into centralized, secure, searchable digital workflows with granular access control.",
    iconName: "FileSpreadsheet",
    accentColor: "indigo",
    problemStatement: "Paper files, lost folder shares, and manual signature bottlenecks slow down decision-making, compromise sensitive records, and invite compliance penalties.",
    strategicOutcome: "Instant document retrieval, automated approval routing, full audit trails, and secure retention schedules across departments.",
    executiveBrief: "The CITS Enterprise Information Management Solution eliminates physical paper vulnerabilities, lost documentation, and manual inter-office routing delays by modernizing records into audited, secure digital repositories. Powered by optical character recognition (OCR), automated departmental workflow orchestration, and cryptographic audit trails, our solution ensures that every contract, regulatory filing, and customer dossier can be retrieved in seconds. Role-based access control guarantees compliance with national privacy legislation and records retention standards.",
    frameworkMethodology: "ISO 15489 Records Management & Enterprise Data Privacy Standards",
    associatedProducts: [
      "Vicisoft Enterprise Information & Document Management (EDMS)",
      "HP LaserJet Enterprise & ScanJet Production Scanners",
      "HP & Lenovo Commercial Desktops & Workstations"
    ],
    deploymentTimeline: "3 to 6 weeks (Taxonomy design, high-speed batch scanning, OCR indexing & staff training)",
    slaGuarantee: "Sub-5 second document retrieval with 100% cryptographic audit trail integrity",
    capabilities: [
      {
        title: "Electronic Document Management Systems (EDMS)",
        description: "Centralized repository for high-volume document ingestion, version control, metadata tagging, and full-text search.",
        deliverables: ["High-speed scanning integration", "Optical Character Recognition (OCR)", "Folder taxonomic structures", "Granular role permissions"]
      },
      {
        title: "Workflow Automation & Approvals",
        description: "Automate sequential and parallel approval routing for procurement, finance vouchers, human resources, and board resolutions.",
        deliverables: ["Visual process mapping", "Digital signature integration", "Automated email & SMS notifications", "Escalation timer rules"]
      },
      {
        title: "Records Management & Compliance",
        description: "Policy-driven document life-cycle management adhering to legal retention schedules, secure disposal, and tamper-proof audit trails.",
        deliverables: ["Retention schedule enforcement", "Immutable audit trails", "Litigation hold tagging", "Disposition certification logs"]
      },
      {
        title: "Information Retrieval & Indexing",
        description: "Enterprise search across millions of scanned records using metadata tags, keywords, and dates in seconds.",
        deliverables: ["Automated indexing bots", "Full-content search engine", "Cross-departmental access filters", "Secure export capabilities"]
      }
    ],
    technologyEcosystem: ["Vicisoft", "HP Enterprise", "Lenovo"],
    deliverablesSummary: ["Optical Character Recognition (OCR)", "Workflow Automation", "Centralized Archive", "Audit-Ready Retention"],
    faqs: [
      {
        question: "Can CITS digitize legacy physical paper archives?",
        answer: "Yes, we provide end-to-end guidance from physical sorting, high-throughput scanning, and OCR indexing to importing metadata directly into structured EDMS databases."
      },
      {
        question: "How do we ensure confidential documents are not viewed by unauthorized staff?",
        answer: "Our EDMS platforms enforce granular role-based access control (RBAC), restricting documents by department, security clearance level, and specific project groups, with full immutable read/edit logs."
      }
    ],
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "enterprise-it",
    slug: "enterprise-it",
    number: "04",
    title: "Enterprise IT & Infrastructure",
    shortDescription: "Build resilient computing, enterprise networking, and ERP foundations engineered for business growth.",
    heroHeadline: "Reliable foundations for mission-critical operations.",
    heroSubheadline: "Design and implement high-availability server infrastructure, enterprise networking, and integrated resource planning that scales with your growth.",
    iconName: "Server",
    accentColor: "blue",
    problemStatement: "Fragmented systems, aging server hardware, and unstable network backbones create chronic bottlenecks that prevent organizations from scaling.",
    strategicOutcome: "High-uptime, standardized infrastructure managed under structured SLAs with predictable capacity planning.",
    executiveBrief: "The CITS Enterprise IT & Infrastructure Solution designs, dimensions, stages, and maintains the core computing engines that power African enterprises. From dual-socket rackmount virtualization servers running VMware and Hyper-V to multi-gigabit core fiber backbones and enterprise resource planning (ERP) platforms, we build resilient computing topologies engineered for 24/7 continuous operation. Every server cluster and core switch undergoes in-country staging, RAID verification, and burn-in testing in Kampala before live deployment.",
    frameworkMethodology: "High-Availability Virtualization (N+1 / N+2 Redundancy) & ITIL v4 Operations",
    associatedProducts: [
      "Dell PowerEdge & HPE ProLiant Enterprise Servers",
      "UniFi Enterprise Cloud Gateways & Multi-Gigabit PoE Switches",
      "RAY Enterprise Cloud Wireless & Edge Switching",
      "HP & Lenovo Commercial Desktops & Laptops"
    ],
    deploymentTimeline: "2 to 5 weeks (Rack sizing, SAN storage cabling, hypervisor clustering & burn-in testing)",
    slaGuarantee: "99.98% hardware compute uptime with 4-hour on-site engineering response in East Africa",
    capabilities: [
      {
        title: "Enterprise Resource Planning (ERP) Solutions",
        description: "Unified business management systems aligning finance, supply chain, inventory, human capital, and operational reporting.",
        deliverables: ["Core module customization", "Database migration & integrity checks", "User role configuration", "Staff training and onboarding"]
      },
      {
        title: "Server & Storage Infrastructure",
        description: "Enterprise virtualization (VMware/Hyper-V), SAN/NAS storage arrays, and high-density compute rack architectures.",
        deliverables: ["Hardware compute dimensioning", "Hyperconverged infrastructure (HCI)", "Storage fabric cabling & redundancy", "Workload balancing"]
      },
      {
        title: "Structured Enterprise Networking",
        description: "Core switching, structured fiber backbones, clean patch management, and resilient wireless architectures.",
        deliverables: ["Core/Distribution/Access topologies", "VLAN segmentation & QoS", "Enterprise Wi-Fi 6 design", "Environmental sensor monitoring"]
      },
      {
        title: "Technology Consulting & Architecture",
        description: "Vendor-agnostic advisory translating business strategic plans into modular IT roadmaps with clear cost models.",
        deliverables: ["Infrastructure health check", "5-year technology master plan", "Procurement specifications advisory", "Capacity forecasting"]
      }
    ],
    technologyEcosystem: ["Dell & HPE", "UniFi", "RAY", "Lenovo", "ManageEngine"],
    deliverablesSummary: ["Enterprise ERP", "Virtualization Clusters", "Core Switching & Fiber", "Strategic IT Advisory"],
    faqs: [
      {
        question: "Do you support hybrid cloud and on-premise environments?",
        answer: "Yes. We design hybrid architectures that keep latency-sensitive and regulatory data securely on-premise while leveraging cloud elasticity where most cost-effective."
      }
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "communications",
    slug: "communications",
    number: "05",
    title: "Communications & Collaboration",
    shortDescription: "Connect executive teams, branch offices, and distributed workforces with unified enterprise voice and video.",
    heroHeadline: "Connect people, teams and business operations seamlessly.",
    heroSubheadline: "Modern IP-PBX, high-definition conferencing, enterprise email security, and unified collaboration designed for distributed African organizations.",
    iconName: "PhoneCall",
    accentColor: "teal",
    problemStatement: "Disjointed phone systems, expensive inter-branch calling, unreliable conference setups, and phishing-prone email slow down inter-office collaboration.",
    strategicOutcome: "A single unified communication fabric reducing telephony overhead, connecting remote branches, and safeguarding corporate email.",
    executiveBrief: "The CITS Communications & Collaboration Solution interconnects corporate headquarters, factory branches, and remote workforces across Africa onto a unified IP telephony and video collaboration backbone. By replacing legacy disparate PBX units with hybrid IP-PBX appliances interconnected via encrypted SIP/VPN trunks, we eliminate carrier inter-branch call tolls entirely. Boardrooms are upgraded with acoustic-tuned PTZ conferencing systems, while corporate email gateways are fortified against spoofing and phishing.",
    frameworkMethodology: "SIP VoIP QoS Traffic Prioritization & Zero-Trust Email Security (DMARC/DKIM/SPF)",
    associatedProducts: [
      "Matrix Enterprise Unified Communications & IP-PBX",
      "UniFi Enterprise Cloud Gateways & UniFi Talk",
      "Sophos Central Email Advanced Security"
    ],
    deploymentTimeline: "1 to 3 weeks (Dial plan routing, SIP trunk configuration & boardroom acoustic setup)",
    slaGuarantee: "99.99% voice trunk availability with high-definition G.722 audio quality",
    capabilities: [
      {
        title: "Enterprise IP-PBX & VoIP Solutions",
        description: "Scalable voice systems connecting HQ with branch offices over secure VPN trunks, eliminating branch-to-branch call charges.",
        deliverables: ["Hybrid IP-PBX appliances", "SIP trunk configuration", "Executive desk phones & softphones", "Interactive Voice Response (IVR) flows"]
      },
      {
        title: "Unified Communications & Collaboration",
        description: "Integrated voice, chat, video conferencing, and desktop sharing accessible from smartphones, laptops, and boardrooms.",
        deliverables: ["Multi-branch extension dial plans", "Mobile mobility clients", "Call recording & reporting dashboards", "Presence management"]
      },
      {
        title: "Boardroom Audio/Video Conferencing",
        description: "Acoustic-tuned meeting spaces with PTZ tracking cameras, beamforming microphones, and one-touch conference joining.",
        deliverables: ["Acoustic & display layout design", "Touch panel control systems", "Dual-display video integration", "Room noise cancellation tuning"]
      },
      {
        title: "Enterprise Email & Anti-Phishing",
        description: "Resilient business email infrastructure coupled with advanced DKIM, SPF, DMARC enforcement, and AI-driven anti-spoofing.",
        deliverables: ["Clean email gateway routing", "Executive impersonation protection", "Zero-day link sandboxing", "Spam & malware filtering"]
      }
    ],
    technologyEcosystem: ["Matrix", "UniFi", "Sophos"],
    deliverablesSummary: ["Unified IP-PBX", "Boardroom Video Systems", "Branch VoIP Trunks", "Secure Enterprise Email"],
    faqs: [
      {
        question: "Can our mobile staff answer office extensions while traveling?",
        answer: "Yes. Our unified communications platforms include encrypted softphone apps for iOS and Android, allowing staff to receive and place calls using their corporate extension anywhere in the world."
      }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "software-solutions",
    slug: "software-solutions",
    number: "06",
    title: "Custom Software Solutions",
    shortDescription: "Engineer bespoke business applications, mobile tools, and integrations solving proprietary workflow bottlenecks.",
    heroHeadline: "Software engineered around how your organisation operates.",
    heroSubheadline: "When off-the-shelf software falls short, CITS builds secure, maintainable business applications that eliminate operational bottlenecks.",
    iconName: "Code2",
    accentColor: "purple",
    problemStatement: "Generic software often forces organizations into rigid workflows, fails to connect with local banking or tax systems, or requires exorbitant perpetual licensing.",
    strategicOutcome: "Tailored web and mobile applications with zero licensing bloat, built for high performance, security, and full organizational ownership.",
    executiveBrief: "The CITS Custom Software Engineering Solution bridges the critical operational gaps that off-the-shelf commercial packages cannot resolve. We design and build proprietary web portals, field service mobile tools with offline synchronization, and secure API middleware connecting legacy core databases with national payment gateways and regulatory portals. Clients receive full intellectual property ownership, comprehensive source documentation, and sovereign hosting options.",
    frameworkMethodology: "Agile DevSecOps & OWASP Top 10 Secure Software Architecture",
    associatedProducts: [
      "Dell PowerEdge Application & Database Servers",
      "ManageEngine Endpoint Central & API Gateway",
      "Vicisoft Digital Workflow Engines"
    ],
    deploymentTimeline: "4 to 12 weeks (Iterative sprints with user acceptance testing and security sign-off)",
    slaGuarantee: "Full source code ownership, zero perpetual license fees & dedicated post-deployment SLA",
    capabilities: [
      {
        title: "Customized Business Applications",
        description: "Bespoke database-backed portals automating internal approval chains, asset tracking, inventory dispatch, and compliance checks.",
        deliverables: ["User story mapping & UI prototyping", "Role-based database schema", "Automated unit & regression tests", "On-premise / private cloud hosting"]
      },
      {
        title: "Mobile Enterprise Applications",
        description: "Field service, sales force automation, inspection, and customer-facing apps running reliably on iOS and Android with offline sync.",
        deliverables: ["Offline-first data caching", "Biometric authentication", "Camera/barcode scanning integration", "Device management readiness"]
      },
      {
        title: "System Integration & API Middleware",
        description: "Secure bridges connecting legacy on-premise systems with modern web services, payment gateways, and regulatory portals.",
        deliverables: ["RESTful & GraphQL API gateways", "Webhook handlers & message queues", "Automated data reconciliation", "API security rate-limiting"]
      }
    ],
    technologyEcosystem: ["Dell & HPE", "Enterprise APIs", "Mobile Frameworks", "ManageEngine"],
    deliverablesSummary: ["Custom Enterprise Portals", "Offline-First Mobile Apps", "API Middleware", "Database Integration"],
    faqs: [
      {
        question: "Who owns the intellectual property and code of custom software?",
        answer: "Your organization retains full intellectual property and source code ownership upon project completion and deployment sign-off."
      }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PROFESSIONAL_SERVICES: ServiceItem[] = [
  {
    id: "consulting",
    title: "ICT Consulting & Strategy",
    tagline: "Align technology investments with executive business priorities.",
    description: "Independent, vendor-balanced guidance helping CIOs, CFOs, and Managing Directors evaluate infrastructure choices, budget capital expenditures, and build resilient 3-5 year technology roadmaps.",
    scope: ["Technology health checks & gap analysis", "Enterprise architecture design", "RFP technical specification drafting", "Vendor evaluation & cost optimization"],
    audience: "C-Level Executives, Board Members, IT Steering Committees",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "security-assessment",
    title: "Security Assessment & VAPT",
    tagline: "Rigorous technical audits before malicious actors exploit them.",
    description: "Comprehensive vulnerability assessment and penetration testing across external IP ranges, internal local networks, active directory permissions, and critical web applications.",
    scope: ["Vulnerability Assessment & Penetration Testing (VAPT)", "Firewall rule base audits", "Active Directory privilege hygiene", "Formal board-level remediation matrix"],
    audience: "CISOs, Risk & Compliance Officers, Financial Institutions",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "implementation",
    title: "Solution Implementation",
    tagline: "Engineered deployment without operational disruption.",
    description: "Certified senior engineers manage end-to-end installation, configuration, testing, and cutover of firewalls, backup systems, IP-PBX, and enterprise servers under rigorous change management.",
    scope: ["Pre-deployment sandbox staging", "High-availability cluster failover tests", "Zero-downtime maintenance windows", "As-built documentation & knowledge transfer"],
    audience: "IT Directors, Systems Administrators, Operations Managers",
    iconName: "Sliders",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "technical-support",
    title: "Technical Support & Managed SLA",
    tagline: "Responsive technical escalation when issues occur.",
    description: "Structured Service Level Agreements (SLAs) providing dedicated tier-2 and tier-3 engineering escalation, proactive health monitoring, scheduled firmware patching, and emergency on-site response.",
    scope: ["Guaranteed response time tiers", "Proactive infrastructure monitoring", "Firmware & patch hygiene management", "Quarterly operational reviews (QBR)"],
    audience: "Organizations seeking reliable operational continuity",
    iconName: "LifeBuoy",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ict-training",
    title: "ICT & Security Training",
    tagline: "Empower your internal workforce and technical administrators.",
    description: "Structured training modules for technical administrators on firewall policy management and backup recovery, paired with practical staff cybersecurity awareness programs.",
    scope: ["Hands-on admin system workshops", "Phishing simulation & user awareness", "Disaster recovery drill execution", "Executive cyber risk briefings"],
    audience: "Enterprise employees, System Admins, Department Leads",
    iconName: "GraduationCap",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    tagline: "Zero-tolerance for downtime, rigorous regulatory compliance, and active threat defense.",
    keyChallenges: [
      "Strict data protection and central bank compliance requirements",
      "High-value target for ransomware and phishing attacks",
      "Need for continuous core banking system availability and instant failover",
      "Complex branch-to-headquarters secure communication requirements"
    ],
    tailoredArchitecture: "Layered NGFW perimeter inspection, air-gapped immutable disaster recovery appliances (Quorum), multi-factor zero-trust remote access, and regular VAPT audits.",
    criticalPriorities: ["Data Sovereignty", "Ransomware Immunity", "Sub-Minute RPO/RTO", "Regulatory Audit Trails"],
    recommendedSolutions: ["Cybersecurity", "Business Continuity", "Information Management"],
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "government",
    name: "Government & Public Sector",
    tagline: "Safeguard citizen records, automate inter-ministerial approvals, and build sovereign infrastructure.",
    keyChallenges: [
      "Vast volumes of sensitive physical records requiring confidential digitization",
      "Multi-agency approval bottlenecks on physical paper",
      "Public-facing portals exposed to denial-of-service and defacement attacks",
      "Budget constraints demanding high durability without recurring vendor lock-in"
    ],
    tailoredArchitecture: "Enterprise Document Management System (Vicisoft EDMS) with digital workflow routing, perimeter DDoS and web application firewalls (Sophos/WatchGuard), and centralized branch VoIP.",
    criticalPriorities: ["Classified Document Access", "Workflow Accountability", "Perimeter Hardening", "Long-Term Retention"],
    recommendedSolutions: ["Enterprise Information Management", "Cybersecurity", "Enterprise IT"],
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Distribution",
    tagline: "Continuous plant floor operations, supply chain resilience, and multi-warehouse connectivity.",
    keyChallenges: [
      "Production halt caused by network dropouts or server failures",
      "Connecting factory floor IoT, inventory dispatch, and corporate headquarters",
      "Ransomware disrupting logistics and shipment scheduling",
      "Harsh physical environments demanding industrial-grade connectivity"
    ],
    tailoredArchitecture: "Ruggedized enterprise Wi-Fi and core switching (RAY/Matrix), automated backup with instant local virtualization, and multi-site SD-WAN connecting distributed factory hubs.",
    criticalPriorities: ["Factory Uptime", "Warehouse Connectivity", "Multi-Site SD-WAN", "Supply Chain Continuity"],
    recommendedSolutions: ["Enterprise IT", "Business Continuity", "Communications"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "healthcare",
    name: "Healthcare & Pharmaceuticals",
    tagline: "Patient confidentiality, critical medical records availability, and reliable telemedicine channels.",
    keyChallenges: [
      "24/7/365 availability requirements for patient records and laboratory results",
      "Strict patient data privacy and statutory medical record compliance",
      "Need for rapid diagnostic image transfer across clinic networks",
      "Fragmented paper files slowing down triage and hospital administration"
    ],
    tailoredArchitecture: "High-throughput local NAS/SAN storage, secure medical record EDMS archiving, encrypted doctor-to-hospital telemedicine conferencing, and prioritized emergency bandwidth QoS.",
    criticalPriorities: ["Patient Data Privacy", "Zero-Downtime Record Access", "Telemedicine Ready", "Disaster Recovery"],
    recommendedSolutions: ["Information Management", "Business Continuity", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "education",
    name: "Education & Universities",
    tagline: "High-density campus wireless, student record management, and secure academic portals.",
    keyChallenges: [
      "Thousands of concurrent student devices demanding high-density Wi-Fi bandwidth",
      "Protecting examination results and academic transcripts from tampering",
      "Web content filtering to block inappropriate and bandwidth-hogging protocols",
      "Tight IT administrative staff ratios handling wide campus footprints"
    ],
    tailoredArchitecture: "High-density enterprise wireless access points (RAY), granular Layer-7 application shaping firewalls (Sophos), and tamper-evident student transcript document management.",
    criticalPriorities: ["High-Density Wi-Fi", "Content Filtering", "Transcript Integrity", "Cost-Effective Scaling"],
    recommendedSolutions: ["Enterprise IT", "Cybersecurity", "Enterprise Information Management"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ngos",
    name: "NGOs & Development Agencies",
    tagline: "Resilient field office communication, donor compliance, and remote operational security.",
    keyChallenges: [
      "Operating in remote field locations with intermittent internet bandwidth",
      "Strict international donor audit and grant expenditure reporting requirements",
      "High staff turnover requiring centralized identity and offboarding control",
      "Confidential beneficiary data protection"
    ],
    tailoredArchitecture: "Bandwidth-optimized hybrid VoIP, cloud-replicated lightweight backup nodes, central document workflows with strict audit logging, and endpoint protection for travel laptops.",
    criticalPriorities: ["Low-Bandwidth Optimization", "Grant Audit Trails", "Remote Device Security", "Branch Collaboration"],
    recommendedSolutions: ["Communications", "Cybersecurity", "Information Management"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "enterprise",
    name: "Large & Mid-Size Commercial Enterprise",
    tagline: "Unified technology architecture bridging executive strategy, finance, and multi-branch operations.",
    keyChallenges: [
      "Siloed departmental systems with duplicate manual data entry",
      "Legacy phone bills across multiple physical branch offices",
      "Dispersed customer records and unstandardized IT security practices",
      "Executive need for consolidated real-time operational reporting"
    ],
    tailoredArchitecture: "Enterprise ERP deployment, unified IP-PBX extension dial plans, managed endpoint XDR, and centralized IT support SLAs with guaranteed escalation response.",
    criticalPriorities: ["Operational Integration", "Unified Voice Trunks", "Centralized Governance", "Scalable Growth"],
    recommendedSolutions: ["Enterprise IT", "Communications", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];

export const TECHNOLOGY_PARTNERS: TechnologyPartner[] = [
  {
    name: "ARCON PAM",
    category: "Privileged Access Management & Zero-Trust",
    relationship: "Verified Technology Platform",
    coreStrengths: "Enterprise privileged identity management, automated credential vaulting, session recording, and Just-in-Time access for strict regulatory compliance.",
    badge: "Privileged Access Management",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "ManageEngine",
    category: "Unified IT Operations, Endpoint & SIEM",
    relationship: "Verified Technology Platform",
    coreStrengths: "Comprehensive IT service management (ServiceDesk Plus), automated multi-OS endpoint patch management, and Active Directory compliance auditing.",
    badge: "ITSM & Endpoint Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "PRTG Network Monitor",
    category: "Infrastructure & Bandwidth Telemetry",
    relationship: "Verified Technology Platform",
    coreStrengths: "Real-time SNMP/WMI infrastructure telemetry, distributed multi-branch link monitoring, bandwidth flow analysis, and automated NOC alert routing.",
    badge: "24/7 Network Monitoring",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sophos",
    category: "Cybersecurity & Next-Gen Firewalls",
    relationship: "Verified Technology Platform",
    coreStrengths: "Synchronized security connecting Next-Gen XGS Firewalls directly with Intercept X endpoint protection and MDR intelligence.",
    badge: "Next-Gen Firewall & Endpoint",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Quorum",
    category: "Business Continuity & High-Availability DR",
    relationship: "Verified Technology Platform",
    coreStrengths: "One-click instant server recovery, automated disaster recovery testing, and sub-15 minute RPO/RTO hardware appliances.",
    badge: "Instant Disaster Recovery",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Vicisoft",
    category: "Enterprise Information & EDMS",
    relationship: "Verified Technology Platform",
    coreStrengths: "High-volume document management, workflow orchestration, OCR digitisation, and audited records compliance.",
    badge: "Enterprise EDMS & Workflow",
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Matrix",
    category: "Unified Communications & Telecom",
    relationship: "Verified Technology Platform",
    coreStrengths: "Enterprise IP-PBX platforms, multi-location VoIP gateways, unified communication servers, and access security terminals.",
    badge: "IP-PBX & Telephony",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "RAY",
    category: "Enterprise Wireless & Cloud Networking",
    relationship: "Verified Technology Platform",
    coreStrengths: "AI-driven high-density Wi-Fi 6 architectures, cloud network controllers, and enterprise edge switching.",
    badge: "Enterprise Wireless & Switching",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HP Enterprise",
    category: "ICT Hardware & Secure Endpoints",
    relationship: "Authorized Commercial Tier",
    coreStrengths: "Commercial-grade EliteBook and ProBook laptops, EliteDesk PCs, and LaserJet Enterprise fleet security with HP Wolf Security.",
    badge: "Commercial Hardware",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lenovo",
    category: "Enterprise Computing & Workstations",
    relationship: "Authorized Commercial Tier",
    coreStrengths: "Engineered ThinkPad business laptops, ThinkCentre micro-desktops, and ThinkStation performance units with ThinkShield defense.",
    badge: "ThinkPad & Workstations",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "UniFi (Ubiquiti)",
    category: "Enterprise Wi-Fi & Cloud Gateways",
    relationship: "Verified Technology Platform",
    coreStrengths: "License-free cloud networking, high-performance Wi-Fi 6/7 access points, Multi-Gigabit PoE switching, and UniFi Protect security.",
    badge: "Cloud Gateways & Wi-Fi",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dell Technologies & HPE",
    category: "Enterprise Servers & Compute Infrastructure",
    relationship: "Certified Hardware Partner",
    coreStrengths: "PowerEdge & ProLiant mission-critical rack and tower servers, SAN storage arrays, and high-density virtualization compute nodes.",
    badge: "Enterprise Servers & Compute"
  }
];

export const ENTERPRISE_PRODUCTS: EnterpriseProduct[] = [
  {
    id: "arcon-pam",
    slug: "arcon-pam",
    name: "ARCON Privileged Access Management (PAM)",
    brand: "ARCON",
    category: "Cybersecurity & PAM",
    badge: "Enterprise Zero-Trust",
    tagline: "Total Governance Over Privileged Credentials & Root Sessions",
    overview: "ARCON PAM is a recognized global leader in Privileged Access Management, purpose-built to shield critical databases, hypervisors, network switches, and core banking servers from insider threats, compromised admin credentials, and lateral threat movement.",
    shortParagraph: "Enterprise Privileged Access Management (PAM) delivering dynamic credential vaulting, just-in-time privilege elevation, and recorded root sessions. It isolates core enterprise databases and infrastructure from insider threats and satisfies rigorous zero-trust and ISO 27001 governance standards.",
    keyFeatures: [
      "Dynamic Password Vaulting with Automated Key Rotation",
      "Real-Time Privileged Session Monitoring & Full Video Playback",
      "Just-In-Time (JIT) Privilege Elevation with Multi-Level Approvals",
      "Granular Command Blacklisting & Root Restriction",
      "Dark Web Credential Leak Scanner & Compromise Alerts",
      "Secure Third-Party Vendor Access Gateway (No VPN Required)"
    ],
    citsDeliverables: [
      "Discovery & inventory of all domain, database, and appliance root accounts",
      "High-availability PAM cluster deployment on-premise or sovereign private cloud",
      "Integration with Active Directory, LDAP, SIEM, and ticketing tools",
      "Custom role-based access policies aligned with zero-trust and ISO 27001 security standards",
      "24/7 localized SLA maintenance and administrator certification training"
    ],
    useCases: [
      {
        title: "Tier-1 Commercial Bank Core Database Protection",
        industry: "Banking & Financial Services",
        scenario: "Database administrators and external ERP consultants possessed direct root credentials to the primary Oracle core banking databases, creating significant audit vulnerability under central bank regulations.",
        impact: "CITS implemented ARCON PAM with mandatory dual-approval session checkout, real-time keystroke monitoring, and automated root password randomization every 4 hours, satisfying 100% of regulatory audit findings."
      },
      {
        title: "Telecom & Cloud Carrier Switchboard Governance",
        industry: "Telecommunications & ISP",
        scenario: "Over 40 network engineers needed CLI access to regional core routers and switches across Uganda and Zambia, making credential tracking difficult.",
        impact: "Eliminated shared passwords across infrastructure. Engineers connect through ARCON's zero-trust gateway with MFA, and high-risk commands (e.g. reload, rm -rf) are automatically blocked."
      },
      {
        title: "Government Agency Vendor & Contractor Safeguard",
        industry: "Public Sector & Parastatals",
        scenario: "Third-party software vendors needed remote maintenance access to internal state agency servers without exposing the agency's internal LAN via broad VPN tunnels.",
        impact: "Enforced isolated, browser-based remote desktop sessions with granular time windows; all actions recorded to tamper-proof video logs."
      }
    ],
    complianceStandards: ["Zero-Trust Architecture Guidelines", "ISO/IEC 27001", "PCI-DSS 4.0", "Enterprise Data Privacy Standards"],
    relatedSolutions: ["Cybersecurity", "Enterprise IT & Infrastructure"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manage-engine",
    slug: "manage-engine",
    name: "ManageEngine Unified IT Operations & ITSM Suite",
    brand: "ManageEngine (Zoho)",
    category: "ITSM & Operations",
    badge: "Unified IT Operations",
    tagline: "End-to-End Enterprise Service Desk, Automated Patching & AD Auditing",
    overview: "ManageEngine delivers an integrated enterprise suite bridging IT service desk management (ServiceDesk Plus), automated endpoint vulnerability remediation (Endpoint Central), Active Directory governance (ADAudit Plus), and IT asset lifecycle tracking.",
    shortParagraph: "Comprehensive IT service desk and endpoint management platform automating multi-OS patching, Active Directory change auditing, ITIL incident workflows, and asset tracking across headquarters and distributed regional branch networks.",
    keyFeatures: [
      "ITIL-Ready ServiceDesk Plus with Visual Workflow Orchestration",
      "Automated Multi-OS Patch Management (Windows, macOS, Linux & 850+ 3rd-Party Apps)",
      "Real-Time Active Directory Change Auditing & Privilege Tracking (ADAudit Plus)",
      "Log360 Comprehensive SIEM & Security Log Consolidation",
      "Mobile Device Management (MDM) with Remote Wipe & App Blacklisting",
      "Hardware & Software Asset Discovery with License Compliance Tracking"
    ],
    citsDeliverables: [
      "Custom ITIL workflow mapping (Incident, Problem, Change, Asset Management)",
      "Endpoint Central agent rollout across headquarters and remote branch networks",
      "Automated test & approval ring configuration for zero-day OS patch staging",
      "Active Directory auditing rule setup with instant alerts on unauthorized privilege escalation",
      "Quarterly software license posture reviews and local engineer support"
    ],
    useCases: [
      {
        title: "Distributed Regional NGO Fleet Patching & Asset Tracking",
        industry: "NGOs & Development Agencies",
        scenario: "Over 600 laptops deployed across remote district offices in Uganda and Malawi frequently missed critical security patches due to low bandwidth and intermittent VPN connectivity.",
        impact: "CITS deployed ManageEngine Endpoint Central with bandwidth-throttled peer-to-peer distribution, boosting critical patch compliance from 42% to 98.6% without network congestion."
      },
      {
        title: "Enterprise Manufacturing IT Service Desk Modernization",
        industry: "Manufacturing & Supply Chain",
        scenario: "Factory floor and branch IT requests were logged haphazardly via phone calls and WhatsApp, leading to missed support SLAs and zero executive visibility.",
        impact: "Implemented ServiceDesk Plus with automated ticket assignment, priority escalation timers, and self-service asset requests, cutting mean-time-to-resolution (MTTR) by 54%."
      },
      {
        title: "Commercial SACCO Active Directory & Privileged User Auditing",
        industry: "Financial Cooperatives & SACCOs",
        scenario: "Internal auditors required immediate reporting on unauthorized user creations, group membership changes, and after-hours login anomalies.",
        impact: "Configured ADAudit Plus to generate automated daily executive audit logs and trigger real-time SMS alerts whenever admin rights were granted."
      }
    ],
    complianceStandards: ["ITIL v4 Framework", "ISO 20000", "Enterprise Data Privacy Standards", "Corporate IT Audit Directives"],
    relatedSolutions: ["Enterprise IT & Infrastructure", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prtg-monitor",
    slug: "prtg-monitor",
    name: "PRTG Network Monitor (Paessler)",
    brand: "Paessler PRTG",
    category: "Network Monitoring",
    badge: "Infrastructure Observability",
    tagline: "Full-Stack Real-Time Sensor Telemetry for Networks, Servers & Cloud",
    overview: "Paessler PRTG Network Monitor provides unified 24/7 visibility into physical servers, virtual machines, cloud instances, network switches, WAN links, and environmental sensors across all distributed sites on a single intuitive dashboard.",
    shortParagraph: "Full-stack real-time infrastructure observability delivering instant telemetry across network switches, physical servers, virtual machines, and server room environmental sensors with multi-channel SMS and WhatsApp escalation alerts.",
    keyFeatures: [
      "All-In-One Unified Sensor Architecture (SNMP, WMI, SSH, NetFlow, sFlow, REST API)",
      "Distributed Remote Probes for Multi-Branch Monitoring with Low Bandwidth Overhead",
      "Comprehensive Bandwidth & Traffic Flow Analysis (Packet Sniffing & Flow Telemetry)",
      "Custom Interactive NOC Room Dashboards & Real-Time Geographic Maps",
      "Multi-Channel Alerting (SMS, Telegram, Email, Webhooks, Push Notifications)",
      "Server Room Environmental Sensor Monitoring (Temperature, Humidity & UPS Battery Status)"
    ],
    citsDeliverables: [
      "Complete network topology discovery and custom sensor threshold dimensioning",
      "NOC command center wall-screen dashboard design and auto-rotation configuration",
      "Inter-branch latency and packet-loss probe deployment for regional WAN links",
      "Escalation routing integration with WhatsApp/SMS gateways and ServiceDesk Plus",
      "Annual license sizing, sensor optimization, and on-premise high-availability failover cluster"
    ],
    useCases: [
      {
        title: "National Multi-Branch Bank Inter-Office Fiber Monitoring",
        industry: "Banking & Financial Services",
        scenario: "Frequent undetected carrier fiber degradation caused severe core banking transaction slowdowns at branch teller counters without clear accountability from ISPs.",
        impact: "CITS configured PRTG with continuous NetFlow and Ping jitter probes across all 35 branches, giving the bank real-time SLA verification dashboards and immediate carrier fault alerts."
      },
      {
        title: "Hospital Server Room & Medical Imaging Storage Surveillance",
        industry: "Healthcare & Hospitals",
        scenario: "Air conditioning failures in unstaffed hospital server rooms risked catastrophic server overheating and PACS medical imaging downtime.",
        impact: "Deployed environmental SNMP temperature sensors connected to PRTG, triggering audible alarms and SMS alerts when temperatures breached 24°C, preventing hardware damage."
      },
      {
        title: "University Campus Wi-Fi & Bandwidth Bottleneck Identification",
        industry: "Higher Education",
        scenario: "Campus network was frequently crippled during exam periods without administrators knowing which protocol or department was saturating the gateway.",
        impact: "PRTG flow sensors isolated peer-to-peer downloads and high-bandwidth video streams in real-time, allowing automated traffic shaping and guaranteed exam portal priority."
      }
    ],
    complianceStandards: ["SLA Verification Standards", "NOC Best Practices", "ISO 27001 Availability Mandates"],
    relatedSolutions: ["Enterprise IT & Infrastructure", "Communications & Collaboration"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sophos-cybersecurity",
    slug: "sophos-cybersecurity",
    name: "Sophos Synchronized Cybersecurity & Firewall (XGS / Intercept X)",
    brand: "Sophos",
    category: "Cybersecurity & PAM",
    badge: "Synchronized Defense",
    tagline: "Unified Perimeter-to-Endpoint Intelligence with Instant Lateral Quarantine",
    overview: "Sophos integrates Next-Generation XGS Firewalls with industry-leading Intercept X with XDR/MDR, allowing network hardware and endpoint agents to communicate directly and isolate compromised workstations within milliseconds.",
    shortParagraph: "Synchronized next-generation firewall and AI endpoint defense architecture that communicates in real-time to automatically isolate infected nodes and rollback ransomware attacks in milliseconds before lateral movement occurs.",
    keyFeatures: [
      "Xstream Architecture with Dedicated FastPath Hardware Acceleration",
      "Deep Packet Inspection for TLS 1.3 / SSL Encrypted Traffic at Wire Speeds",
      "Synchronized Security Heartbeat: Immediate Network Isolation of Infected Nodes",
      "CryptoGuard Anti-Ransomware with Instant Rollback of Encrypted Files",
      "Centralized Cloud Management (Sophos Central) with 24/7 Managed Detection & Response (MDR)",
      "Zero Trust Network Access (ZTNA) Replacing Unsafe Legacy VPNs"
    ],
    citsDeliverables: [
      "Appliance sizing, High-Availability (Active-Passive / Active-Active) cluster deployment",
      "Perimeter rule migration, TLS decryption profiles, and IPS signature tuning",
      "Automated endpoint agent deployment across all workstations and virtual servers",
      "Threat response playbook design and integration with ARCON PAM and PRTG",
      "Tier-3 engineering support with local spare parts replacement availability"
    ],
    useCases: [
      {
        title: "Commercial SACCO Network Perimeter & Ransomware Neutralization",
        industry: "Financial Cooperatives",
        scenario: "Staff workstation was infected with active ransomware via phishing email attachment.",
        impact: "Intercept X detected malicious encryption behavior, instantly terminated the process, restored modified files via CryptoGuard, and signaled the Sophos XGS firewall to revoke the laptop's LAN access before infection spread."
      }
    ],
    complianceStandards: ["PCI-DSS 4.0", "ISO 27001", "Zero-Trust Architecture Guidelines"],
    relatedSolutions: ["Cybersecurity"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "quorum-dr",
    slug: "quorum-dr",
    name: "Quorum onQ High Availability & Instant Disaster Recovery",
    brand: "Quorum",
    category: "Business Continuity",
    badge: "Sub-15m RTO Guarantee",
    tagline: "Hardware-Agnostic Standby Virtual Clones with Zero Production Disruption",
    overview: "Quorum onQ provides continuous incremental server backup and maintains ready-to-run standby virtual clones that boot in under 15 minutes during hardware failures, power outages, or cyber incidents.",
    shortParagraph: "Hardware-agnostic instant disaster recovery appliance providing sub-15 minute recovery of mission-critical servers via automated standby virtual clones with zero production disruption during scheduled sandbox testing.",
    keyFeatures: [
      "Sub-15 Minute Recovery Time Objective (RTO) with Instant Virtual Boot",
      "Hardware-Agnostic Bare Metal and Hypervisor Clones",
      "Immutable, Air-Gapped Snapshots Immune to Ransomware Deletion",
      "Automated Disaster Recovery Testing with Zero Production Downtime",
      "Deduplicated Local Appliance and Private Cloud Replication",
      "Point-in-Time Database Rollback Capabilities"
    ],
    citsDeliverables: [
      "RTO and RPO assessment for core enterprise applications and databases",
      "On-premise appliance installation and SAN/NAS storage integration",
      "Daily automated recovery verification and test runbook creation",
      "Disaster drill simulation workshops for internal IT personnel",
      "Continuous replication health monitoring via CITS NOC"
    ],
    useCases: [
      {
        title: "Major East African Manufacturer Core ERP Resilience",
        industry: "Manufacturing & Distribution",
        scenario: "Primary database SAN controller failure at 2:00 PM during month-end dispatch.",
        impact: "Quorum appliance automatically spun up a ready-to-run virtual clone of the production database in 7 minutes, enabling factory dispatch to continue without losing a single transaction."
      }
    ],
    complianceStandards: ["ISO 22301 Business Continuity", "Central Bank Disaster Recovery Mandates"],
    relatedSolutions: ["Business Continuity"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vicisoft-edms",
    slug: "vicisoft-edms",
    name: "Vicisoft Enterprise Information & Document Management (EDMS)",
    brand: "Vicisoft",
    category: "EDMS & Collaboration",
    badge: "Digital Workflow & OCR",
    tagline: "High-Throughput Optical Scanning, Taxonomies & Tamper-Proof Electronic Vaults",
    overview: "Vicisoft EDMS transforms massive paper archives into indexed, searchable, and secure digital workflows, enforcing automated approval hierarchies and full audit trails.",
    shortParagraph: "High-throughput electronic document management system combining automated optical character recognition (OCR), departmental approval workflows, and tamper-proof cryptographic audit trails for paperless enterprise operations.",
    keyFeatures: [
      "High-Throughput Ingestion with Automated Optical Character Recognition (OCR)",
      "Visual Multi-Department Approval Workflow Engine with Escalation Triggers",
      "Tamper-Proof Audit Logging with Cryptographic Version History",
      "Granular Role-Based Access Control (RBAC) by Department and Classification",
      "Integrated Digital Signatures & Barcode / QR Code Tracking",
      "Automated Legal Retention Schedules and Disposition Archiving"
    ],
    citsDeliverables: [
      "Document taxonomy and metadata schema design",
      "High-speed production scanner hardware setup (HP Enterprise ScanJet integration)",
      "Legacy paper record sorting, scanning, indexing, and quality control supervision",
      "Departmental workflow automation (Procurement, HR, Board Resolutions)",
      "Staff onboarding and certified records manager training"
    ],
    useCases: [
      {
        title: "National Licensing Authority 400,000 File Digitisation",
        industry: "Government & Public Sector",
        scenario: "Public licensing records stored in physical paper folders resulted in 4-day wait times for citizen verification.",
        impact: "CITS digitized and indexed all records with Vicisoft EDMS. File search dropped to under 8 seconds with 100% audit verification."
      }
    ],
    complianceStandards: ["Enterprise Data Privacy Standards", "Electronic Records Directives", "ISO 15489"],
    relatedSolutions: ["Enterprise Information Management"],
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "matrix-telecom",
    slug: "matrix-telecom",
    name: "Matrix Enterprise Unified Communications & IP-PBX",
    brand: "Matrix Comsec",
    category: "EDMS & Collaboration",
    badge: "Enterprise Voice & PBX",
    tagline: "Inter-Branch SIP Trunking, Zero-Toll Calling & Hybrid IP-PBX Infrastructure",
    overview: "Matrix Comsec provides scalable IP-PBX communication platforms connecting head offices, regional branches, and mobile staff over encrypted VoIP trunks, eliminating carrier toll charges.",
    shortParagraph: "Enterprise hybrid IP-PBX and unified communications system connecting corporate head offices with distributed branches over encrypted VoIP tunnels to eliminate inter-branch toll charges and deliver HD boardroom conferencing.",
    keyFeatures: [
      "Hybrid Enterprise IP-PBX Supporting IP, Digital, Analog & Mobile Extensions",
      "Inter-Branch Toll-Free Calling via Encrypted Site-to-Site SIP Trunks",
      "Executive Boardroom HD Audio & Video Conferencing Integration",
      "Softphone Applications for iOS, Android, and Desktop Laptops",
      "Interactive Voice Response (IVR) & Automated Call Recording for Auditing",
      "High-Density Gateway Sizing for Up to 2,000+ Distributed Users"
    ],
    citsDeliverables: [
      "Voice network bandwidth dimensioning and QoS prioritization",
      "Appliance hardware installation and telco PRI/E1/SIP trunk termination",
      "Dial plan mapping connecting Kampala, Lusaka, and Lilongwe regional offices",
      "Executive boardroom conferencing hardware tuning and noise suppression",
      "Ongoing telecommunications SLA support and emergency call routing"
    ],
    useCases: [
      {
        title: "Cross-Border Enterprise Inter-Branch Telephony",
        industry: "Commercial Enterprise",
        scenario: "Headquarters in Kampala was incurring thousands of dollars monthly in international mobile carrier fees to call factory branches in Zambia.",
        impact: "Configured Matrix hybrid IP-PBX interconnected via SD-WAN tunnels, reducing internal inter-branch call costs to zero."
      }
    ],
    complianceStandards: ["Telecom Regulatory Standards", "HD Voice G.722 / G.729 Quality Codecs"],
    relatedSolutions: ["Communications & Collaboration"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ray-wireless",
    slug: "ray-wireless",
    name: "RAY Enterprise Cloud Wireless & Edge Switching",
    brand: "RAY",
    category: "Enterprise Infrastructure",
    badge: "High-Density Wi-Fi 6",
    tagline: "AI-Managed Campus Wi-Fi 6/7, Deep Traffic Filtering & Enterprise Edge Switching",
    overview: "RAY delivers intelligent enterprise wireless and high-performance switching engineered for high client density, automated interference mitigation, and integrated security filtering without expensive recurring controller licenses.",
    shortParagraph: "Intelligent high-density Wi-Fi 6/7 access points and multi-gigabit PoE edge switches featuring edge Layer 7 content filtering and automated RF optimization with zero recurring controller licensing fees.",
    keyFeatures: [
      "Next-Gen Wi-Fi 6 / 6E Access Points with OFDMA and MU-MIMO Technology",
      "Integrated Layer 7 Application Visibility and Content Filtering at the AP Edge",
      "Cloud and On-Premise Controller Architecture with Zero Touch Provisioning",
      "Multi-Gigabit Layer 2+ / Layer 3 Managed PoE+ / PoE++ Edge Switches",
      "Enterprise Captive Portal with SMS OTP and Active Directory Authentication",
      "Automated RF Optimization Eliminating Dead Zones in High-Interference Buildings"
    ],
    citsDeliverables: [
      "Predictive heat-map wireless survey and physical site RF validation",
      "Access point and PoE switch installation, structured cabling, and patch tagging",
      "Guest Wi-Fi VLAN segmentation and bandwidth throttling policies",
      "Centralized cloud controller management and firmware lifecycle maintenance",
      "Performance benchmarking and 24/7 proactive health monitoring"
    ],
    useCases: [
      {
        title: "Higher Education Multi-Building High-Density Campus Wi-Fi",
        industry: "Higher Education",
        scenario: "Over 5,000 concurrent student smartphones and laptops caused legacy Wi-Fi access points to freeze during lecture hall sessions.",
        impact: "Deployed RAY Wi-Fi 6 access points with dynamic client load-balancing, providing uninterrupted connectivity across all faculties."
      }
    ],
    complianceStandards: ["IEEE 802.11ax / 802.11be", "WPA3 Enterprise Encryption"],
    relatedSolutions: ["Enterprise IT & Infrastructure"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  }
];

export const ICT_HARDWARE_PRODUCTS: ICTHardwareItem[] = [
  {
    id: "dell-hpe-enterprise-servers",
    name: "Dell PowerEdge & HPE ProLiant Enterprise Compute Servers",
    brand: "Dell & HPE",
    category: "Enterprise Servers & Compute",
    headline: "Mission-Critical 1U/2U Rackmount & Heavy Tower Compute for Virtualization & Databases",
    shortParagraph: "Enterprise 1U/2U rackmount and tower servers engineered for high-density virtualization, core banking databases, ERP hosting, and 24/7 business compute. Fully sized, RAID-configured, burned-in tested in Kampala, and backed by redundant power and local manufacturer mission-critical warranty.",
    specsSummary: [
      "Dual Intel Xeon Scalable or AMD EPYC High-Frequency Multi-Core Processors",
      "64GB up to 1TB ECC Registered DDR5 High-Speed Server Memory",
      "Hot-Plug Redundant NVMe / SAS-3 Storage with Hardware RAID (1/5/6/10) Arrays",
      "Dual Redundant 80-PLUS Titanium High-Efficiency Hot-Swap Power Supplies",
      "iDRAC9 Enterprise / HPE iLO6 Advanced Dedicated Out-of-Band Remote Management"
    ],
    securityFeatures: [
      "Silicon Root of Trust Hardware-Level Cryptographic Firmware Authentication",
      "UEFI Secure Boot & Cryptographically Signed Firmware Upgrades",
      "System Lockdown Mode Preventing Unauthorized Configuration Changes",
      "Chassis Intrusion Detection & Bezel Security Lock with Audit Logging"
    ],
    targetAudience: "Commercial Banks, Telecom Operators, Government Data Centers, Large Hospitals & Manufacturing ERP Clusters",
    enterpriseWarranty: "3-Year to 5-Year Mission-Critical 4-Hour On-Site Hardware Support with CITS Pre-Staged Spare Buffers in Kampala",
    popularModels: [
      "Dell PowerEdge R760 / R660 (Flagship 2U/1U Virtualization & Core Database Server)",
      "HPE ProLiant DL380 Gen11 (Versatile Multi-Workload Enterprise Compute Workhorse)",
      "Dell PowerEdge T560 (Heavy Tower Server for Corporate Head Offices without Server Racks)",
      "Lenovo ThinkSystem SR650 V3 (High-Density Dual-Socket Cloud & Database Workhorse)"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hp-laptops-workstations",
    name: "HP Enterprise Laptops & Mobile Workstations",
    brand: "HP",
    category: "Laptops & Mobile Workstations",
    headline: "Engineered for Executive Mobility, Hardware-Enforced Security & Heavy Computing",
    shortParagraph: "Commercial-grade executive laptops and mobile workstations built with military-grade drop durability, self-healing BIOS protection, and up to 18-hour battery life. Pre-imaged with corporate security baselines, asset-tagged, and supported by in-country next-business-day warranty across Uganda.",
    specsSummary: [
      "Intel Core Ultra & AMD Ryzen Pro Processors with Dedicated AI NPU",
      "16GB to 64GB DDR5 High-Speed Memory & Fast NVMe PCIe Gen4/5 SSD Storage",
      "Ultra-Bright WUXGA / 4K Anti-Glare IPS Displays with HP Sure View Privacy Screen",
      "Military-Grade Durability Certified: 19 MIL-STD-810H Rigorous Stress Tests",
      "Up to 18 Hours Battery Life with HP Fast Charge (50% in 30 minutes)"
    ],
    securityFeatures: [
      "HP Wolf Security for Business: Deep Hardware-Level Protection Below the OS",
      "HP Sure Start Self-Healing BIOS Protecting Against Firmware Corruption",
      "Hardware Tamper Lock & Match-on-Chip Biometric Fingerprint / IR Camera",
      "HP Sure Click Hardware-Enforced Browser & Document Isolation"
    ],
    targetAudience: "C-Level Executives, Mobile Banking Officers, Remote Engineers & Corporate Fleet Deployments",
    enterpriseWarranty: "3-Year Next-Business-Day On-Site Regional Hardware Warranty with CITS Staging & Support",
    popularModels: [
      "HP EliteBook 840 / 860 G11 (Enterprise Fleet Flagship)",
      "HP EliteBook 1040 x360 (Executive 2-in-1 Ultra-Thin)",
      "HP ProBook 440 / 450 G11 (Cost-Effective Scalable Corporate Workhorse)",
      "HP ZBook Power / Studio G11 (Heavy Engineering CAD & Data Science Workstations)"
    ],
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lenovo-thinkpad-workstations",
    name: "Lenovo ThinkPad & ThinkBook Enterprise Laptops",
    brand: "Lenovo",
    category: "Laptops & Mobile Workstations",
    headline: "The Gold Standard in Business Ergonomics, Legendary Reliability & Workstation Power",
    shortParagraph: "The world's business benchmark for ergonomics and reliability, featuring spill-resistant keyboards, carbon fiber chassis, and hardware-isolated TPM 2.0 security. Ideal for data scientists, financial analysts, and corporate leadership requiring uninterrupted productivity.",
    specsSummary: [
      "Latest Intel Core Ultra vPro and AMD Ryzen Pro High-Performance Architectures",
      "Award-Winning Spill-Resistant ThinkPad Keyboards with Legendary TrackPoint",
      "Lightweight Carbon Fiber & Recycled Magnesium Alloy Chassis",
      "Thunderbolt 4 / USB4 Universal Docking Connectivity & 4G/5G WWAN Options",
      "Tested Against 12 MIL-STD-810H Standards and Over 200 Quality Checks"
    ],
    securityFeatures: [
      "Lenovo ThinkShield: Comprehensive Hardware, BIOS & Software Defense",
      "Discrete TPM 2.0 Cryptographic Chip for BitLocker Encryption",
      "ThinkShutter Physical Camera Privacy Slider & Ultrasonic Human Presence Detection",
      "Self-Healing BIOS 2.0 with Memory Guard Encryption"
    ],
    targetAudience: "Financial Analysts, Software Engineers, Field Project Managers & Executive Leadership",
    enterpriseWarranty: "3-Year Premier Support with Accidental Damage Protection Options and Local Parts In-Country",
    popularModels: [
      "Lenovo ThinkPad T14 / T14s Gen 5 (The Quintessential Enterprise Workhorse)",
      "Lenovo ThinkPad X1 Carbon Gen 12 (Premium Executive Carbon-Fiber Ultrabook)",
      "Lenovo ThinkPad P14s / P16s (ISV-Certified Mobile Engineering Workstations)",
      "Lenovo ThinkBook 14 / 16 Gen 7 (Modern Agile SME Business Computing)"
    ],
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hp-lenovo-desktops-minis",
    name: "HP & Lenovo Commercial Desktops, Mini PCs & All-in-Ones",
    brand: "Multi-Vendor Enterprise",
    category: "Desktops & Mini PCs",
    headline: "High-Reliability Fixed Computing for Teller Counters, Back-Offices & Call Centers",
    shortParagraph: "Space-efficient 1-liter micro desktops and robust back-office towers built for 24/7 continuous uptime at teller counters, customer service desks, and corporate back-offices. Features tool-less maintenance, multi-monitor 4K outputs, and BIOS-level USB endpoint security.",
    specsSummary: [
      "Ultra-Compact 1-Liter Mini Form Factor (Mountable Behind Monitors / Under Desks)",
      "Energy-Efficient 80-PLUS Platinum Certified High-Reliability Power Supplies",
      "Dual & Triple 4K Display Output Support for Multi-Screen Financial Monitoring",
      "Tool-less Chassis Access for Rapid Drive and Memory Maintenance",
      "Whisper-Quiet Advanced Acoustic Cooling for 24/7 Continuous Operation"
    ],
    securityFeatures: [
      "Chassis Intrusion Detection Switch & Cable Lock Slot",
      "BIOS-Level USB Port Disablement to Prevent Data Theft via Flash Drives",
      "Hardware-Enforced Cryptographic TPM 2.0 Integration",
      "Remote Intel vPro Out-of-Band Management via CITS NOC"
    ],
    targetAudience: "Bank Branches, SACCO Teller Counters, Hospital Reception Desks, Call Centers & IT Labs",
    enterpriseWarranty: "3-Year On-Site Manufacturer Warranty with Dedicated Spare Buffers in Kampala",
    popularModels: [
      "Lenovo ThinkCentre M70q / M90q Tiny (1-Liter Micro Form Factor for Counter Tops)",
      "HP EliteDesk 800 G9 Mini & Small Form Factor (High-Density Enterprise Desktop)",
      "Lenovo ThinkCentre Neo 50a All-in-One (Clean Single-Cable Executive Desktop)",
      "HP Z2 Mini / Tower G9 Workstations (Financial Trading & Architectural Modeling)"
    ],
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hp-enterprise-printers-scanners",
    name: "HP LaserJet Enterprise & ScanJet Production Scanners",
    brand: "HP",
    category: "Enterprise Printers & Scanners",
    headline: "Tamper-Proof Secure Printing, High-Speed OCR Digitisation & Low Cost-Per-Page Fleets",
    shortParagraph: "High-throughput departmental multifunction printers and heavy OCR document scanners designed for audited paper-to-digital workflows, legal compliance, and low cost-per-page operation. Includes self-healing BIOS security and badge-release confidential printing.",
    specsSummary: [
      "Heavy-Duty Monthly Duty Cycles (Up to 150,000+ Pages) for Uninterrupted Volume",
      "Fast Print Speeds Up to 55 ppm with Instant-on Technology",
      "Dual-Head Single-Pass Duplex Document Scanners Up to 120 ipm for EDMS Archives",
      "Ultrasonic Double-Feed Detection Preventing Missed Paper Scanning in Audits",
      "Centralized HP Web Jetadmin Fleet Management Software Support"
    ],
    securityFeatures: [
      "HP Sure Start Firmware Verification: Automatic Reboot to Clean BIOS on Intrusion",
      "Whitelisting: Ensures Only Authentic HP Code is Loaded into Memory",
      "Run-Time Intrusion Detection Monitoring In-Memory Attacks",
      "PIN, Smartcard & Badge-Release Secure Pull-Printing Preventing Left-Out Sensitive Documents"
    ],
    targetAudience: "Legal Practices, Government Ministries, Financial Document Centers & Logistics Warehouses",
    enterpriseWarranty: "1 to 3-Year Enterprise Hardware Care Pack with Automated Toner Replenishment Agreements",
    popularModels: [
      "HP LaserJet Enterprise Flow MFP M635 / M636 (Heavy Departmental Multifunction)",
      "HP Color LaserJet Enterprise MFP M578 (Executive High-Volume Color Printing)",
      "HP ScanJet Enterprise Flow 7000 s4 / N9120 fn2 (Heavy OCR Production Scanner for EDMS)",
      "HP LaserJet Pro MFP 4103fdw (Medium Branch Workgroup Multifunction)"
    ],
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "unifi-enterprise-networking",
    name: "UniFi (Ubiquiti) Enterprise Cloud Gateways, Switches & Wi-Fi",
    brand: "UniFi",
    category: "Enterprise Networking & Wi-Fi",
    headline: "Subscription-Free Centralized Cloud Networking, Wi-Fi 7 & Multi-Gigabit PoE",
    shortParagraph: "Subscription-free centralized cloud networking featuring multi-gigabit PoE+ switching, high-density Wi-Fi 6/7 access points, and redundant 10G optical security gateways. Delivers enterprise-scale bandwidth, zero recurring license fees, and unified single-pane-of-glass management.",
    specsSummary: [
      "Zero Annual Licensing Fees: Full Controller Capabilities Built-in Forever",
      "Multi-Gigabit (2.5G / 10G SFP+) High-Throughput Switching Backbones",
      "High-Density Wi-Fi 6 & Wi-Fi 7 APs Supporting 500+ Concurrent Devices per Node",
      "Integrated UniFi Network, Protect (CCTV), Access (Biometrics) & Talk (VoIP) Ecosystem",
      "Elegant Rack-Mount Hardware with LCM Touchscreen Status Displays"
    ],
    securityFeatures: [
      "Integrated Next-Gen DPI & Content Filtering with Threat Management",
      "Automated VLAN Isolation for IoT, POS Terminals & Guest Access",
      "Dual-WAN Redundant Failover with Automated Fiber / LTE Cellular Backup",
      "WireGuard, OpenVPN, and Site-to-Site IPsec Tunnel Orchestration"
    ],
    targetAudience: "Corporate Headquarters, Modern Office Campuses, Commercial Real Estate & High-End Hospitality",
    enterpriseWarranty: "2-Year Hardware Replacement Warranty with CITS Remote Controller Cloud Backup",
    popularModels: [
      "UniFi Cloud Gateway Enterprise (High-Capacity 10G Core Security Gateway)",
      "UniFi Pro Max 24 / 48 PoE (Layer 3 Managed Multi-Gigabit Switch with Etherlighting)",
      "UniFi U7 Pro / U6 Enterprise (Wi-Fi 7 / 6E Ultra-High-Density Access Points)",
      "UniFi Protect G5 Pro / AI Series (4K Optical Smart Surveillance Cameras)"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  }
];

export const REGIONAL_OFFICES: RegionalOffice[] = [
  {
    country: "Uganda",
    companyName: "Complete IT Solutions Uganda Limited",
    role: "Headquarters & East Africa Operations",
    address: "1E, Kanti Mansion, Kira Road, Kampala, Uganda",
    phone: "+256 703922319",
    email: "sales@cits.co.ug",
    coordinates: { x: 58, y: 44 } // Normalized % on East/Southern Africa schematic
  },
  {
    country: "Zambia",
    companyName: "Centrum Investments Limited",
    role: "Southern Africa Strategic Regional Partner",
    address: "135, First Floor, Farmers House, Central Park, Cairo Road, Lusaka, Zambia",
    phone: "+260-979874244",
    email: "sales@centrumitafrica.com",
    coordinates: { x: 50, y: 64 }
  },
  {
    country: "Malawi",
    companyName: "Infosec Business Solution Limited",
    role: "Southern Africa Regional Partner",
    address: "Mpikisano House, European Business Centres 03, Area 3, Lilongwe, Malawi",
    phone: "+265 997 946 576",
    email: "sales@infosecmalawi.com",
    coordinates: { x: 62, y: 70 }
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "insight-ransomware-architecture",
    slug: "beyond-firewalls-ransomware-resilience",
    title: "Beyond the Perimeter: Building Ransomware Immunity in East African Enterprises",
    category: "Cybersecurity",
    summary: "Why traditional perimeter firewalls leave modern institutions exposed, and how defense-in-depth and immutable backups neutralize extortion attacks before business disruption occurs.",
    readTime: "5 min read",
    date: "September 2026",
    author: "CITS Cybersecurity Architecture Practice",
    keyTakeaways: [
      "Perimeter breaches will happen; resilience is defined by lateral containment and recovery speed.",
      "Backups connected directly to the corporate domain are frequently targeted and encrypted first.",
      "Air-gapped, immutable snapshot architectures guarantee recovery without paying extortion demands."
    ],
    content: [
      "Over the past three years, the threat landscape across East and Southern Africa has fundamentally shifted. Cybercriminal syndicates have transitioned from broad opportunistic scans to targeted, multi-stage intrusions aimed at financial institutions, state agencies, and regional supply chain operators.",
      "In modern attacks, adversaries do not detonate ransomware upon first entry. Instead, they dwell undetected within the internal network for an average of 14 to 28 days. During this reconnaissance phase, their primary target is not user workstations—it is the organisation's backup repositories.",
      "When disaster strikes, organizations relying on domain-joined network shares find their backups encrypted simultaneously with their production virtual machines. True cybersecurity is not a standalone software product; it is an integrated architecture linking next-generation inspection at the edge with tamper-proof, air-gapped recovery nodes."
    ]
  },
  {
    id: "insight-rpo-rto-reality",
    slug: "the-real-cost-of-downtime",
    title: "Calculating the True Cost of Downtime: Understanding RPO and RTO for Executives",
    category: "Business Continuity",
    summary: "A practical framework for CEOs and CFOs to evaluate their organization's tolerance for data loss and operational stoppage, moving beyond technical jargon to balance sheet risk.",
    readTime: "4 min read",
    date: "August 2026",
    author: "CITS Business Continuity Team",
    keyTakeaways: [
      "Recovery Point Objective (RPO) dictates maximum tolerable lost transactions.",
      "Recovery Time Objective (RTO) dictates how long operations can stand idle before catastrophic revenue loss.",
      "High-availability appliances allow local instantaneous boot of crashed virtual machines in under 5 minutes."
    ],
    content: [
      "When asking an executive committee what their acceptable downtime is, the reflexive answer is almost invariably 'zero'. However, zero-downtime architectures across every workload carry exponential capital expenditure costs.",
      "The role of strategic technology consulting is to categorize workloads: Tier-1 core transaction databases require sub-minute RPO with instant local virtualization, while Tier-3 file archives can tolerate an 8-hour recovery window.",
      "By utilizing purpose-built disaster recovery appliances like Quorum, organizations can achieve true enterprise business continuity without doubling their server footprint or incurring prohibitive cloud egress fees."
    ]
  },
  {
    id: "insight-edms-transition",
    slug: "paper-to-process-edms-governance",
    title: "From Paper Archives to Audited Workflows: Navigating EDMS in Regulated Sectors",
    category: "Enterprise Technology",
    summary: "How digitising physical records transforms departmental efficiency, enforces accountability in approval hierarchies, and satisfies statutory compliance mandates.",
    readTime: "6 min read",
    date: "July 2026",
    author: "CITS Enterprise Solutions Group",
    keyTakeaways: [
      "Physical paper archives incur silent costs in storage, misplaced files, and slow approval cycles.",
      "Automated OCR indexing allows millions of documents to be retrieved in seconds during audits.",
      "Role-based electronic signatures provide non-repudiable audit logs that stand up in legal proceedings."
    ],
    content: [
      "Many prominent institutions continue to shuffle physical purchase vouchers, board resolutions, and HR files between floors and branch offices in manila folders. This creates significant delays, security risks, and audit headaches.",
      "Implementing an Electronic Document Management System (EDMS) is not merely scanning papers into PDFs; it is the establishment of automated lifecycle governance. Incoming correspondence is ingested, indexed via Optical Character Recognition (OCR), and pushed into predefined approval pipelines with automated reminders.",
      "With solutions like Vicisoft EDMS, organizations gain complete visibility into who viewed, approved, or annotated any document, transforming compliance from an annual scramble into a continuous, effortless operational state."
    ]
  }
];

export const ANONYMIZED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-financial-ransomware-resilience",
    title: "Tier-2 Financial Institution: Core Banking Ransomware Resilience & VAPT",
    sector: "Banking & Financial Services",
    anonymizedClient: "Major East African Commercial Banking Institution",
    challenge: "The bank's legacy perimeter firewall struggled with encrypted SSL traffic inspection, while audit findings mandated strict sub-15 minute disaster recovery failover and third-party penetration testing to comply with central bank standards.",
    approach: "CITS conducted a full non-disruptive VAPT assessment across external web banking APIs and internal branch networks, followed by an architecture redesign separating transaction processing from administrative networks.",
    solution: "Deployed high-availability Sophos Next-Gen XGS Firewalls with synchronized endpoint detection, combined with Quorum Disaster Recovery on-premise appliances for instant server spin-up.",
    outcome: "Eliminated blind spots in encrypted web traffic, achieved a verified 6-minute failover during live DR simulation drills, and achieved full central bank audit compliance.",
    technologies: ["Sophos NGFW", "Quorum DR", "Synchronized XDR", "VAPT Methodology"]
  },
  {
    id: "case-manufacturing-multi-site",
    title: "Regional Manufacturing Group: Multi-Plant Disaster Recovery & VoIP Trunking",
    sector: "Manufacturing & Distribution",
    anonymizedClient: "Multi-Plant Agro-Processing & Packaging Manufacturer",
    challenge: "Frequent branch fiber disruptions isolated three distant manufacturing plants from head office ERP databases. Furthermore, inter-branch phone bills were costing thousands of dollars monthly.",
    approach: "Designed a centralized hybrid IP-PBX communication fabric paired with local automated backup nodes that cache ERP transactions locally during carrier fiber outages.",
    solution: "Implemented Matrix IP-PBX across all factory sites with secure VoIP trunks, backed by Ray wireless bridging and local backup nodes with automated synchronization.",
    outcome: "Reduced internal inter-branch telephony costs to zero, prevented production halts during fiber drops through local transaction caching, and connected plant supervisors on mobile extensions.",
    technologies: ["Matrix IP-PBX", "RAY Wireless", "VoIP SIP Trunks", "Enterprise Backup"]
  },
  {
    id: "case-public-sector-edms",
    title: "Statutory Regulatory Commission: Legacy Records Digitisation & Workflow EDMS",
    sector: "Government & Public Sector",
    anonymizedClient: "National Statutory Regulatory Agency",
    challenge: "Over 400,000 legacy paper license records occupied entire storage rooms, leading to multi-week turnaround times for public record verification and high risk of document degradation.",
    approach: "Partnered to establish an on-site digitisation pipeline with high-throughput optical scanners, standardized taxonomy metadata schemas, and automated role-based approval queues.",
    solution: "Rolled out Vicisoft Enterprise EDMS with full OCR indexing, custom digital permit approval workflows, and multi-tiered role access permissions.",
    outcome: "Record retrieval time dropped from an average of 4 business days to under 8 seconds. Departmental approval bottlenecks were eliminated with automated escalation alerts.",
    technologies: ["Vicisoft EDMS", "High-Speed OCR", "Workflow Automation", "Secure Audit Trails"]
  }
];
