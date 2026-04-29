// @ts-nocheck
/**
 * Legal & Regulatory - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-17-legal-regulatory-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: EXECUTION METADATA & FOCUS AREAS
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  enrichmentCompleted: string
}

export interface FocusArea {
  id: string
  area: string
}

export const executionMetadata: ExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 32,
  pagesFetched: 48,
  enrichmentCompleted: '2026-04-27'
}

export const focusAreas: FocusArea[] = [
  { id: 'LEGAL-1', area: 'Legal system structure (civil law, Sharia interface)' },
  { id: 'LEGAL-2', area: 'Commercial law development' },
  { id: 'LEGAL-3', area: 'DIFC/ADGM common law courts' },
  { id: 'LEGAL-4', area: 'Intellectual property protection, patent filing trends' },
  { id: 'LEGAL-5', area: 'Arbitration (DIFC-LCIA, DIAC, ADGM)' },
  { id: 'LEGAL-6', area: 'Commercial disputes' },
  { id: 'LEGAL-7', area: 'Insolvency law reform' },
  { id: 'LEGAL-8', area: 'Data protection law (implementation & enforcement)' },
  { id: 'LEGAL-9', area: 'Cybercrime law (impact on free expression)' },
  { id: 'LEGAL-10', area: 'Decriminalization reforms (alcohol, cohabitation, honor crimes)' },
  { id: 'LEGAL-11', area: 'Family law reform, inheritance law' },
  { id: 'LEGAL-12', area: 'Labor law reform, domestic worker law' },
  { id: 'LEGAL-13', area: 'Anti-money laundering framework effectiveness' },
  { id: 'LEGAL-14', area: 'Sanctions implementation & enforcement' },
  { id: 'LEGAL-15', area: 'Regulatory sandbox programs, regulatory burden' },
  { id: 'LEGAL-16', area: 'Ease of doing business — regulatory perspective' },
  { id: 'LEGAL-17', area: 'Legal profession regulation, foreign lawyers' },
  { id: 'LEGAL-18', area: 'Legal aid access, pro bono culture' },
  { id: 'LEGAL-19', area: 'Court efficiency, case backlogs, enforcement of judgments' },
  { id: 'LEGAL-20', area: 'International legal cooperation, extradition treaties' },
  { id: 'LEGAL-21', area: "UAE's interaction with international human rights mechanisms" }
]

// ============================================================================
// SECTION 2: LEGAL SYSTEM STRUCTURE
// ============================================================================

export interface LegalSystemOverview {
  type: string
  structure: string
  shariaApplication: string
  commonLawZones: string[]
}

export interface CourtTier {
  tier: string
  jurisdiction: string
}

export interface BloodMoney {
  gender: string
  amountAED: string
  amountUSD: string
}

export interface LegalReform2020 {
  decree: string
  keyChanges: string[]
}

export const legalSystemStructure = {
  overview: {
    type: 'Dual (civil law + Sharia)',
    federalStructure: true,
    independentEmirates: ['Abu Dhabi', 'Dubai', 'Ras Al Khaimah'],
    commonLawZones: ['DIFC', 'ADGM'],
    courtTiers: 3,
    smartTransformation: '95% digital (since May 2015)'
  } as LegalSystemOverview,
  courtTiers: [
    { tier: 'Court of First Instance', jurisdiction: 'Civil, commercial, administrative, labour, personal status cases' },
    { tier: 'Court of Appeal', jurisdiction: '30-day appeal window (10 days urgent); final if implicitly accepted' },
    { tier: 'Court of Cassation', jurisdiction: '60-day appeal on law interpretation; final decisions' }
  ] as CourtTier[],
  specializedCircuits: {
    minor: 'Single judge, cases under AED 500,000',
    major: 'Three judges, higher-value and administrative matters'
  },
  federalSupremeCourt: {
    judges: 5,
    appointment: 'By President',
    jurisdiction: 'Disputes between emirates, constitutionality of laws, conflicts of jurisdiction, crimes affecting federation interests',
    deathSentenceApproval: 'Requires Presidential approval'
  },
  bloodMoney: [
    { gender: 'Male', amountAED: '200,000', amountUSD: '~$54,450' },
    { gender: 'Female', amountAED: '100,000', amountUSD: '~$27,225' }
  ] as BloodMoney[],
  criminalProcedure: {
    policeToProsecutor: '48 hours',
    witnessStatements: '14 days',
    trialsPublic: 'Except national security or morality cases',
    jury: 'None',
    translators: 'Provided',
    presumption: 'Innocent until proven guilty',
    bailOptions: ['Cash deposits', 'Passport surrender', 'Third-party guarantees']
  },
  juvenileJustice: {
    ageThreshold: 18,
    capitalPunishment: 'Cannot be imposed',
    fines: 'Cannot be imposed',
    imprisonment: 'Up to 10 years for those over 16'
  },
  reforms2020: {
    decree: 'Federal Decree Law No. 15 of 2020',
    keyChanges: [
      'Sharia restricted to retribution and blood money cases only',
      'Corporal punishment (amputations, flogging) officially removed',
      'Alcohol consumption decriminalized federally',
      'Extra-marital sex laws modified - requires complaint from husband or legal guardian',
      'Minimum 6 months imprisonment for extra-marital sex',
      'Cohabitation decriminalized for consenting adults',
      'Children born outside wedlock gained legal recognition'
    ]
  } as LegalReform2020,
  capitalPunishment: {
    applicable: 'Premeditated murder, certain rapes, state security offenses',
    method: 'Firing squad',
    lastDocumented: 'February-March 2025'
  },
  penalties: {
    verbalAbuse: { fine: 'AED 250,000', imprisonment: '1 year' },
    drivingUnderInfluence: 'Zero tolerance'
  }
}

// ============================================================================
// SECTION 3: DIFC & ADGM COURTS
// ============================================================================

export interface DIFCCourt {
  name: string
  role: string
}

export interface DIFCService {
  name: string
  description: string
}

export interface DIFCWillType {
  type: string
}

export interface ADGMFeature {
  feature: string
  details: string
}

export const difcADGMCourts = {
  difcOverview: {
    established: 2004,
    area: '110 hectares (272 acres)',
    location: 'Dubai',
    companies2022: '3,000+',
    legalFramework: 'Common law, English language',
    guarantee: '50-year guarantee of zero taxes on corporate income and profits'
  },
  difcCourts: {
    structure: [
      { name: 'Small Claims Tribunal', role: 'Minor disputes' },
      { name: 'Court of First Instance', role: 'Civil and commercial disputes' },
      { name: 'Court of Appeal', role: 'Appellate jurisdiction' },
      { name: 'Enforcement Division', role: 'Judgment enforcement' },
      { name: 'Digital Economy Court', role: 'Technology disputes (big data, blockchain, AI, cloud, UAVs, 3D printing, robotics)' }
    ] as DIFCCourt[],
    jurisdiction: 'Serves Dubai International Financial Centre, civil and commercial disputes',
    willServices: [
      'Full Will',
      'Property Will',
      'Financial Assets Will',
      'Business Owners Will',
      'Digital Assets Will',
      'Guardianship Will'
    ] as DIFCWillType[],
    services: [
      'Enforcement',
      'Notary services',
      'Probate',
      'Practitioner registration',
      'Case bundle services',
      'Hearing room rentals'
    ] as DIFCService[]
  },
  difcContact: {
    registry: '+971 4 427 3333',
    registryEmail: 'registry@difccourts.ae',
    willsService: '+971 4 404 88 88',
    willsEmail: 'WillsService@difccourts.ae',
    address: 'Level 3, Precinct Building 5 (South), The Gate District, DIFC, Dubai, UAE',
    officeHours: {
      registry: 'Monday to Friday, 8:30am – 4:00pm (GST)',
      operations: 'Monday to Friday, 8:00am – 4:00pm (GST)'
    }
  },
  adgmOverview: {
    location: 'Abu Dhabi',
    description: "World's premier International Financial Centre",
    legalFramework: 'English Common Law',
    jurisdiction: 'Own civil and commercial laws'
  },
  adgmDisputeResolution: {
    hearingOptions: [
      { type: 'Physical Hearings', description: 'Configurable on-site rooms' },
      { type: 'Virtual Hearings', description: 'Digital suite solutions' },
      { type: 'Hybrid Hearings', description: 'Smart tech connecting platforms' },
      { type: 'Mediation in the Metaverse', description: 'Web3 digital twin of the DRHC' }
    ] as ADGMFeature[],
    arbitrationFramework: "Progressive arbitration framework based on UNCITRAL Model Law with innovative enhancements including technology use",
    panels: [
      'Panel of Mediators',
      'Panel of Investor State Mediators',
      'World-leading arbitrators'
    ]
  },
  adgmRanking: {
    fintechSandbox: "World's second most active FinTech sandbox"
  }
}

// ============================================================================
// SECTION 4: INTELLECTUAL PROPERTY
// ============================================================================

export interface IPCost {
  type: string
  initialAED: string
  annualAED: string
}

export interface IPProtection {
  type: string
  duration: string
  costDetails: string
  registrationTime?: string
}

export interface PatentFilingTrend {
  year: number
  residentApplications: number
  totalApplications: number
  perMillionResidents: number
}

export interface TrademarkFilingGCC {
  country: string
  filings: number
}

export const intellectualProperty = {
  ipTypes: [
    {
      type: 'Patents',
      protection: 'Protect inventions for 20 years',
      costInitial: 'AED 8,000–15,000',
      costAnnual: 'AED 2,000–5,000',
      registrationTime: '18–36 months'
    },
    {
      type: 'Trademarks',
      protection: 'Protect brand identities for 10-year renewable terms',
      costInitial: 'AED 3,000–8,000',
      costAnnual: 'AED 1,500–3,000',
      registrationTime: 'Varies'
    },
    {
      type: 'Copyrights',
      protection: 'Cover literary, artistic, and software works for author\'s lifetime + 50 years',
      costInitial: 'AED 1,000–3,000',
      registrationTime: 'Varies'
    },
    {
      type: 'Trade Secrets',
      protection: 'Require confidential information with commercial value protected through reasonable secrecy measures',
      costInitial: 'N/A',
      costAnnual: 'N/A',
      registrationTime: 'N/A'
    }
  ] as IPProtection[],
  legalFramework: {
    laws: [
      { law: 'Federal Law No. 37 of 1992', type: 'Trademarks' },
      { law: 'Federal Law No. 17 of 2002', type: 'Patents' },
      { law: 'Federal Law No. 7 of 2002', type: 'Copyrights' }
    ],
    memberships: ['WIPO', 'WTO TRIPS Agreement', 'Paris Convention', 'Berne Convention'],
    internationalSystems: ['PCT (Patent Cooperation Treaty)', 'Madrid Protocol (joined December 2021)']
  },
  enforcement: {
    civil: 'Injunctive relief, monetary damages, goods seizure',
    criminal: 'Up to 2 years imprisonment, fines AED 50,000–1,000,000',
    alternativeDispute: 'DIAC, mediation, arbitration (60% faster, 40% lower cost than litigation)'
  },
  patentFilings: [
    { year: 2016, residentApplications: 622, totalApplications: 1699, perMillionResidents: 9 },
    { year: 2023, residentApplications: 1005, totalApplications: 3403, perMillionResidents: 28.7 }
  ] as PatentFilingTrend[],
  trademarkFilingsGCC: [
    { country: 'Saudi Arabia', filings: 153472 },
    { country: 'UAE', filings: 110238 },
    { country: 'Kuwait', filings: 54000 },
    { country: 'Qatar', filings: 41000 },
    { country: 'Oman', filings: 38000 },
    { country: 'Bahrain', filings: 15000 }
  ] as TrademarkFilingGCC[],
  recentDevelopments: [
    { year: 2018, event: 'Placed on USTR Special 301 Report Watch List' },
    { year: 2021, event: 'Removed from Watch List after improving IPR enforcement' },
    { year: 2021, event: 'Passed legislation updating patent, trademark, copyright, industrial design, trade secret protections' },
    { year: 2021, event: 'Joined Madrid Protocol (December)' },
    { year: 2024, event: 'Ministry of Economy announced 11 initiatives under new IP Ecosystem' },
    { year: 2024, event: 'Signed MoU with USPTO to enhance registration and enforcement' },
    { year: 2025, event: 'Federal Decree-Law No. 38/2024 enhanced medical product protections' },
    { year: 2025, event: 'Entered Accelerated Patent Grant Agreement with USPTO' }
  ],
  specialProtections: {
    pharmaceuticalData: {
      decree: 'Decree 321 (September 2020)',
      protection: 'Against unfair commercial use and unauthorized disclosure of undisclosed test data for pharmaceutical products',
      period: '8 years (longest in GCC)'
    }
  }
}

// ============================================================================
// SECTION 5: COMMERCIAL LAW & CIVIL CODE REFORM
// ============================================================================

export interface CivilCodeKeyChange {
  category: string
  change: string
}

export interface ContractReform {
  area: string
  details: string
}

export const commercialLawCivilCode = {
  newCivilCode: {
    decree: 'Federal Decree Law No. 25 of 2025',
    issued: 'December 30, 2025',
    effective: 'June 1, 2026',
    replaces: 'Federal Law No. 5 of 1985',
    description: "Most significant legislative overhaul since 1985 Civil Transactions Law, UAE's first complete re-codification of civil law"
  },
  keyReforms: [
    { category: 'Legislative Hierarchy', change: 'Article 4: "A specific provision will prevail over a general one when there is a conflict"' },
    { category: 'Party Autonomy', change: 'Article 19: Expressly prioritizes parties\' chosen governing law' },
    { category: 'Abuse of Rights', change: 'Article 106: Introduces objective proportionality test' },
    { category: 'Contract Interpretation', change: 'Articles 119-122: Codifies good faith as central principle' },
    { category: 'Pre-contractual Duties', change: 'Articles 121-122: Negotiations must conform to good faith requirements' },
    { category: 'Framework Agreements', change: 'Article 138: Officially recognizes framework agreements' }
  ] as CivilCodeKeyChange[],
  policyObjectives: [
    'Legislative streamlining',
    'Reduce duplication between Civil Code and specialized laws',
    'Align UAE with regional reforms (Kuwait, Qatar, Saudi Arabia)',
    'Enhance legal certainty for international business'
  ],
  contractReforms: [
    {
      area: 'Contract Formation',
      details: 'Recognizes electronic communications, conduct, and implied acceptance; clarifies when advertisements are binding offer versus invitations to treat'
    },
    {
      area: 'Good Faith Obligations',
      details: 'Codifies duty to conduct and terminate negotiations in good faith; parties may face damages for breaking off negotiations abusively; requires disclosure of material information'
    },
    {
      area: 'Age of Maturity',
      details: 'Reduced from 21 Lunar years to 18 Gregorian years'
    }
  ] as ContractReform[],
  additionalReforms: {
    propertyRights: 'Mandatory registration of usufructuary construction rights with competent authorities; unregistered arrangements face nullity',
    legalCapacity: 'Age of adulthood lowered from 21 to 18, aligning civil, criminal, labor, and juvenile legislation',
    preContractual: 'New obligations require disclosure of fundamental information during negotiations',
    corporate: 'Legalizes single-person companies, regulates partner withdrawal, facilitates company continuation rather than liquidation upon shareholder exit',
    minorProtections: 'Agreements advantageous yet potentially harmful to minors are voidable; guardians have one year to annul post-discovery; minors have one year after reaching majority',
    saleOfGoods: 'Extended latent defect claim period from six months to one year; buyers may reject, accept at reduced price, or request replacement',
    bloodMoney: 'Enhanced compensation rules provide additional measured compensation where blood money is insufficient',
    disputedRights: 'Prohibits judges, prosecutors, clerks, and attorneys from purchasing disputed rights in cases they are involved in',
    nonProfit: 'New legal framework requires profits be reinvested into organizational missions'
  }
}

// ============================================================================
// SECTION 6: ARBITRATION INSTITUTIONS
// ============================================================================

export interface ArbitrationInstitution {
  name: string
  type: string
  established?: string
  notes?: string
}

export const arbitrationInstitutions: ArbitrationInstitution[] = [
  { name: 'DIAC (Dubai International Arbitration Centre)', type: 'Arbitration', notes: 'Operates under DIAC Arbitration Rules 2022' },
  { name: 'DIFC-LCIA', type: 'Arbitration', notes: 'London Court of International Arbitration presence' },
  { name: 'ADGM Arbitration Centre', type: 'Arbitration', notes: 'Full operations with UNCITRAL-based framework' },
  { name: 'IICRA (International Islamic Centre for Reconciliation and Arbitration)', type: 'Arbitration', notes: 'Non-profit serving Islamic finance industry' },
  { name: 'Tahkeem (Sharjah International Commercial Arbitration Centre)', type: 'Arbitration' },
  { name: 'Abu Dhabi Commercial Conciliation and Arbitration Centre', type: 'Arbitration', established: '1993' },
  { name: 'Federal Law No. 6 of 2018', type: 'Arbitration Law', notes: '61 articles applying to arbitration conducted in UAE and international commercial arbitration' }
]

// ============================================================================
// SECTION 7: INSOLVENCY LAW REFORM
// ============================================================================

export interface InsolvencyLaw {
  decree: string
  effectiveDate: string
  description: string
}

export interface InsolvencyProtection {
  protection: string
}

export interface BankruptcyCourt {
  establishment: string
  resolution: string
  headquarters: string
  chiefJudge: string
  divisions: string[]
}

export const insolvencyLawReform = {
  laws: [
    {
      decree: 'Federal Decree-Law No. 19 of 2019',
      effectiveDate: 'January 2020',
      description: 'Protection for natural persons unable to pay debts'
    },
    {
      decree: 'Federal Decree-Law No. 51 of 2023',
      effectiveDate: 'May 1, 2024',
      description: 'Financial Restructuring and Bankruptcy (replaced 2016 framework)'
    }
  ] as InsolvencyLaw[],
  protections: [
    'Shields debtors from legal prosecution',
    'Decriminalizes financial obligations of insolvent persons',
    'Allows individuals opportunity to work, be productive, and provide for families',
    'Enables rescheduling of existing debts',
    'Permits new concessional loans'
  ] as InsolvencyProtection[],
  specializedBankruptcyCourt: {
    establishment: '2025',
    resolution: 'Federal Judicial Council Resolution No. 39 of 2025',
    headquarters: 'Abu Dhabi Federal Court of First Instance',
    mayEstablishBranches: 'In other emirates as needed',
    chiefJudge: 'At least Appeals Court rank',
    divisions: [
      'Applications, notifications, objections, and grievances processing',
      'Compliance and procedural follow-up'
    ],
    expertIntegration: 'Formal integration of bankruptcy experts who assist in ensuring legal compliance, supervising debtor asset management, and meeting creditors'
  } as BankruptcyCourt,
  objectives: [
    'Streamline handling of complex insolvency and restructuring cases',
    'Enhance investor confidence',
    'Provide "a clear, structured path to either recovery or orderly liquidation"',
    'Strengthen capacity to manage financial risk and protect creditor rights',
    'Improved outcomes for all stakeholders through specialized expertise',
    'More stable and investor-friendly business environment',
    'Reinforcement of UAE\'s position as regional and global financial hub'
  ]
}

// ============================================================================
// SECTION 8: DATA PROTECTION LAW
// ============================================================================

export interface DataSubjectRight {
  right: string
  description: string
}

export interface DataProtectionRequirement {
  requirement: string
}

export const dataProtectionLaw = {
  primaryLaw: {
    decree: 'Federal Decree Law No. 45 of 2021',
    name: 'Personal Data Protection Law (PDPL)',
    effectiveDate: 'January 2, 2022',
    enforcement: 'Pending implementing regulations',
    regulator: 'UAE Data Office (established but not yet operational)'
  },
  scope: {
    applies: 'All personal data processing done by electronic means by any controller or processor located in UAE',
    exemptions: 'Free Zones with special legislation, government entities, sectors with specific regulations (healthcare, banking)'
  },
  keyProvisions: [
    'Applies to processing of personal data, whether in full or part through electronic systems, inside or outside the country',
    'Prohibits processing of personal data without consent of owner, except for cases where processing is necessary to protect public interest',
    'Gives data owner right to request corrections of inaccurate personal data and to restrict or stop processing',
    'Sets out requirements for cross-border transfer and sharing of personal data'
  ],
  individualRights: [
    { right: 'Access to information', description: '' },
    { right: 'Data portability', description: '' },
    { right: 'Correction or erasure', description: '"Right to be forgotten"' },
    { right: 'Restriction of processing', description: '' },
    { right: 'Objection to processing for direct marketing', description: '' },
    { right: 'Right not to be subject to automated decision-making with legal consequences', description: '' }
  ] as DataSubjectRight[],
  processingRequirements: [
    'Lawful, fair, and transparent',
    'Collected for specified purposes',
    'Adequate and limited to necessary purposes',
    'Accurate and kept current',
    'Kept securely with appropriate technical measures',
    'Not retained beyond purpose fulfillment unless anonymized'
  ] as DataProtectionRequirement[],
  breachNotification: {
    requirement: 'Controllers must report data breaches "immediately" to Data Office upon becoming aware'
  },
  penalties: {
    cyberCrimesLaw: 'Up to AED 5 million fine under Cybercrime Law',
    imprisonment: 'Up to 1 year for unauthorized collection/retention'
  },
  childrenProtection: {
    age: 'Under 13',
    rule: 'Platforms prohibited from collecting data of children under 13'
  }
}

// ============================================================================
// SECTION 9: CYBERCRIME LAW
// ============================================================================

export interface CybercrimeProvision {
  article: string
  offense: string
  penalty: string
}

export const cybercrimeLaw = {
  primaryLaw: {
    decree: 'Federal Decree Law No. 34 of 2021',
    effectiveDate: 'January 2, 2022',
    replaces: 'Federal Law No. 5 of 2012'
  },
  keyProvisions: [
    { article: 'Article 20', offense: 'Using internet to advocate government overthrow', penalty: 'Up to life imprisonment' },
    { article: 'Article 22', offense: 'Providing unauthorized information to organizations', penalty: '3-15 years imprisonment' },
    { article: 'Article 52', offense: 'Spreading false information or "propaganda"', penalty: 'Up to 1 year and fines' },
    { article: 'Articles 54-55', offense: 'Targeting bot accounts and human-operated "troll" accounts', penalty: 'Various' }
  ] as CybercrimeProvision[],
  concerns: [
    'Criminalization of "false news"',
    'Broad provisions on obtaining information',
    'Prohibits criticism of rulers and speech deemed to create unrest',
    'Criminalizes defamation and verbal/written insults, including private communications',
    'Criminalizes sharing information with foreign groups or "offending foreign states"'
  ],
  additionalProvisions: [
    { article: '155', offense: 'Life imprisonment or death penalty for acts "compromising sovereignty"' },
    { article: '425-427', offense: 'Criminalize libel and slander, including on private apps like WhatsApp' },
    { article: '178', offense: '3-15 years imprisonment for collecting information for foreign entities' },
    { article: '217', offense: 'Criminalizes publishing "false or tendentious news, statements or rumours"' }
  ] as CybercrimeProvision[]
}

// ============================================================================
// SECTION 10: DECRIMINALIZATION REFORMS
// ============================================================================

export interface DecriminalizationReform {
  area: string
  date: string
  changes: string[]
}

export const decriminalizationReforms: DecriminalizationReform[] = [
  {
    area: 'Alcohol',
    date: 'November 2020',
    changes: [
      'Decriminalized for non-Muslims',
      'Muslims who were previously barred from obtaining licenses can now drink',
      'Age requirement: 21 years'
    ]
  },
  {
    area: 'Cohabitation',
    date: 'Federal Decree-Law No. 31 of 2021',
    changes: [
      'Decriminalized consensual cohabitation between unmarried adults',
      'Previously prosecuted under Article 356 of Federal Law No. 3/1987',
      'Private complaint still required for prosecution',
      'Up to 6 months imprisonment if pursued',
      'Dubai Land Department (DLD) no longer requires all cohabitants to be registered on Ejari (August 2025)'
    ]
  },
  {
    area: 'Honor Crimes',
    date: 'November 2020',
    changes: [
      'Removed lenient penalties for honor killings',
      'Now treated as normal murder cases'
    ]
  },
  {
    area: 'Suicide',
    date: 'November 2020',
    changes: [
      'Suicide no longer criminalized'
    ]
  }
]

// ============================================================================
// SECTION 11: FAMILY LAW & INHERITANCE
// ============================================================================

export interface InheritanceRule {
  beneficiary: string
  share: string
  condition?: string
}

export const familyLawInheritance = {
  shariaApplication: [
    { beneficiary: 'Widow', share: 'One-eighth (1/8)', condition: 'If husband has children' },
    { beneficiary: 'Widow', share: 'One-quarter (1/4)', condition: 'If no children' },
    { beneficiary: 'Husband', share: 'One-quarter (1/4)', condition: 'If wife has no children' },
    { beneficiary: 'Husband', share: 'One-half (1/2)', condition: 'If wife has children' },
    { beneficiary: 'Female grandchildren', share: '50% less than male grandchildren', condition: '' }
  ] as InheritanceRule[],
  nonMuslimExemptions: [
    { decree: 'Federal Decree Law No. 15 of 2020', effect: 'Allows non-Muslims to follow home country laws' },
    { decree: 'Federal Decree Law No. 41 of 2022', effect: 'Regulates civil personal status for non-Muslims' }
  ]
}

// ============================================================================
// SECTION 12: LABOR LAW REFORM
// ============================================================================

export interface LaborReform {
  decree: string
  effectiveDate: string
  keyChange: string
}

export interface LeavePolicy {
  type: string
  duration: string
  year: string
}

export const laborLawReform = {
  laws: [
    {
      decree: 'Federal Decree-Law No. 33 of 2021',
      effectiveDate: 'February 2022',
      keyChange: 'Comprehensive private sector labor reforms'
    },
    {
      decree: 'Federal Decree-Law No. 9 of 2024',
      effectiveDate: 'August 31, 2024',
      keyChange: 'Amendment to labor law'
    }
  ] as LaborReform[],
  workTypes: ['Part-time', 'Temporary', 'Flexible work', 'Remote working', 'Job-sharing'],
  fixedTermContracts: {
    maxDuration: '3 years',
    renewal: 'Permissible upon agreement for similar or lesser duration',
    conversion: 'Existing unlimited contracts must convert to fixed-term within one year'
  },
  salaryProtection: {
    disputePeriod: 'Up to 2 months',
    mechanism: 'Employer continues paying salaries during dispute resolution',
    escalation: 'If disputes not settled within 14 days, MOHRE can refer to court'
  },
  probationRules: {
    noticeMinimum: '14 days minimum before terminating employees during probation',
    uaeExitNotice: '14 days notice',
    newCompanyDuringProbation: '1 month notice required',
    recruitmentCosts: 'Previous employers can claim recruitment costs from new employers'
  },
  leavePolicies: [
    { type: 'Maternity (public sector)', duration: '60 calendar days', year: '2022' },
    { type: 'Maternity (private sector)', duration: '45 days full + 15 days half pay', year: '2022' },
    { type: 'Paternity leave', duration: '5 days (UAE first Arab country)', year: '2020' },
    { type: 'Study leave', duration: '10 calendar days', year: '' }
  ] as LeavePolicy[],
  antiDiscrimination: 'Protections in place',
  keyStatistics: {
    fixedTermContractMax: '3 years',
    probationPeriodMax: '6 months',
    probationNoticeMinimum: '14 days',
    salaryContinuation: 'Up to 2 months',
    maternityLeavePublic: '60 days',
    paternityLeave: '5 days'
  }
}

// ============================================================================
// SECTION 13: ANTI-MONEY LAUNDERING
// ============================================================================

export interface AMLInstitution {
  name: string
  established: string
  role: string
}

export interface AMLSystem {
  name: string
  type: string
  developer?: string
}

export interface AMLLaw {
  decree: string
  description: string
}

export const antiMoneyLaundering = {
  legalFramework: [
    {
      decree: 'Federal Decree No. 20 of 2018',
      description: 'Primary legislation on Anti-Money Laundering and Countering the Financing of Terrorism'
    },
    {
      decree: 'Federal Decree-Law No. 10 of 2025',
      description: 'Strengthened AML/CFT framework aligned with FATF recommendations'
    }
  ] as AMLLaw[],
  institutions: [
    { name: 'Anti-Money Laundering Department', established: 'August 2020', role: 'Central Bank of UAE - handles AML matters and combat financing of terrorism' },
    { name: 'Federal AML Courts', established: 'November 2020', role: 'Specialized courts in Sharjah, Ajman, Umm Al Quwain, and Fujairah' },
    { name: 'Abu Dhabi Local AML Court', established: '', role: 'Dedicated court for money laundering and tax evasion crimes' },
    { name: 'Executive Office of Anti-Money Laundering', established: 'December 2020', role: 'Formed by UAE Cabinet' },
    { name: 'NAMLCFTC', established: '', role: 'National Committee - oversees national risk assessment aligned with FATF Standards' }
  ] as AMLInstitution[],
  systems: [
    { name: 'goAML Platform', type: 'Anti-money laundering platform', developer: 'Financial Intelligence Unit of Central Bank, developed by UNODC' },
    { name: 'Fawri Tick', type: 'Smart system integrating financial crime data across authorities', developer: '' }
  ] as AMLSystem[],
  developments2025: [
    'Virtual asset service providers now covered under AML obligations',
    'Administrative fines up to AED 1 billion',
    'Unified complaint mechanisms across banks and insurers',
    'Legal recognition of Digital Dirham'
  ],
  fatfAssessment: {
    date: 'February 2022',
    finding: 'UAE made high-level political commitment to work with FATF',
    progress: 'Demonstrated significant progress in outbound mutual legal assistance',
    note: 'Greater reliance on financial intelligence'
  }
}

// ============================================================================
// SECTION 14: SANCTIONS
// ============================================================================

export interface SanctionsFramework {
  type: string
  authority: string
}

export const sanctionsImplementation = {
  frameworks: [
    { type: 'UN sanctions', authority: 'Implemented on ad hoc basis' },
    { type: 'Targeted financial sanctions', authority: 'Through Ministry of Interior' },
    { type: 'FATF-aligned AML/CFT framework', authority: 'Comprehensive implementation' }
  ] as SanctionsFramework[],
  note: 'UAE implements sanctions as part of international obligations and FATF framework compliance'
}

// ============================================================================
// SECTION 15: REGULATORY SANDBOXES
// ============================================================================

export interface RegulatorySandbox {
  name: string
  regulator: string
}

export interface SandboxUseCase {
  example: string
  regulator?: string
}

export const regulatorySandboxes = {
  sandboxes: [
    { name: 'CBUAE Sandbox Conditions Regulation', regulator: 'Central Bank of UAE' },
    { name: 'ICT Regulatory Sandbox', regulator: 'TDRA' },
    { name: "DFSA's Tokenisation Regulatory Sandbox", regulator: 'Dubai Financial Services Authority' },
    { name: 'UAE Regulations Lab (RegLab)', regulator: '' },
    { name: 'Global TradeTech Sandbox', regulator: '' },
    { name: 'Insurance Sector Sandbox', regulator: 'Central Bank of UAE' }
  ] as RegulatorySandbox[],
  ranking: {
    adgmReglab: "World's second most active FinTech sandbox"
  },
  useCases: [
    { example: 'Electric cargo aircraft and eVTOL aircraft', regulator: 'UPS' },
    { example: 'Self-driving vehicles', regulator: 'UAE first in Middle East' },
    { example: 'Health data repository and disease registry', regulator: '' },
    { example: 'Fractional bonds', regulator: 'Securities and Commodities Authority' }
  ] as SandboxUseCase[]
}

// ============================================================================
// SECTION 16: LEGAL PROFESSION
// ============================================================================

export interface LegalProfessionalCategory {
  category: string
  courtRights: string
  requirements: string[]
  restrictions: string[]
}

export const legalProfession = {
  law: {
    decree: 'Federal Law 34/2022',
    effectiveDate: 'January 2, 2023',
    scope: 'Tighter regulation of UAE legal professionals'
  },
  categories: [
    {
      category: 'Advocates',
      courtRights: 'Court appearance rights',
      requirements: ['Written exams', 'Interviews', 'Medical tests', 'Professional liability insurance'],
      restrictions: [],
      note: 'Contingency fees now permitted (up to 25% of court awards)'
    },
    {
      category: 'Legal Consultants',
      courtRights: 'Prohibited from court appearances',
      requirements: ['CLPD requirements', 'Retainer agreements'],
      restrictions: ['Cannot appear in courts'],
      note: 'Foreign firms must train UAE nationals'
    },
    {
      category: 'In-house Lawyers',
      courtRights: 'Cannot engage in independent practice',
      requirements: ['Register as non-practising lawyers with DLAD (Dubai)'],
      restrictions: ['Cannot appear in courts except for their employer']
    },
    {
      category: 'Visiting Legal Consultants',
      courtRights: 'Limited court access',
      requirements: ['Must obtain permits'],
      restrictions: ['Limited to 30 working days annually']
    }
  ] as LegalProfessionalCategory[],
  disciplinary: {
    body: 'DLAD professional conduct committee and violations committee',
    sanctions: ['Written warning', 'Suspension up to 2 years', 'Struck off'],
    appealProcess: 'Appeals go to DLAD Grievance Committee within 30 days'
  }
}

// ============================================================================
// SECTION 17: COURT EFFICIENCY
// ============================================================================

export interface CourtEfficiencyMetric {
  court: string
  metric: string
  value: string
  period?: string
}

export const courtEfficiency = {
  abuDhabi: [
    { court: 'Abu Dhabi Courts', metric: 'Case completion rate', value: '98%', period: 'First half 2025' },
    { court: 'Abu Dhabi First Instance', metric: 'Processing time', value: '40 days', period: '' },
    { court: 'Abu Dhabi Appeals', metric: 'Processing time', value: '34 days', period: '' }
  ] as CourtEfficiencyMetric[],
  dubai: [
    { court: 'Dubai Courts', metric: 'Inheritance case processing', value: 'Improved', period: '' },
    { court: 'Dubai Courts', metric: 'Distribution amount', value: 'Dh3.5 billion+', period: '' },
    { court: 'Dubai Courts', metric: 'Digital transformation', value: '"Dubai for Justice" platform', period: '' }
  ] as CourtEfficiencyMetric[]
}

// ============================================================================
// SECTION 18: INTERNATIONAL LEGAL COOPERATION & EXTRADITION
// ============================================================================

export interface ExtraditionStage {
  stage: number
  name: string
  description: string
}

export interface ExtraditionCondition {
  type: string
  requirement: string
}

export interface BilateralAgreement {
  countries: string[]
  type: string
}

export const internationalLegalCooperation = {
  extradition: {
    law: 'Federal Law No. 39/2006, amended by Federal Decree Law No. 28 of 2023',
    stages: [
      { stage: 1, name: 'Alert and Request', description: 'Authorities act on INTERPOL Red Notices; requests submitted via diplomatic channels' },
      { stage: 2, name: 'Authority Review', description: 'Ministry of Justice, Ministry of Interior, Public Prosecution, and UAE Interpol Authorities assess requirements' },
      { stage: 3, name: 'Court Review', description: 'UAE Courts evaluate requesting state\'s legal system fairness, human rights concerns, and procedural compliance' },
      { stage: 4, name: 'Final Ruling', description: 'Ministry of Justice issues the final decision on extradition' },
      { stage: 5, name: 'Extraction', description: 'If approved, individual is surrendered to requesting state' }
    ] as ExtraditionStage[],
    conditions: [
      { type: 'Minimum imprisonment', requirement: 'Offence must carry minimum 1-year imprisonment in Requesting State' },
      { type: 'Dual criminality', requirement: 'Act must constitute crime in UAE' },
      { type: 'Sentence execution', requirement: 'At least 6 months remaining' }
    ] as ExtraditionCondition[],
    denialGrounds: [
      'UAE citizenship',
      'UAE jurisdiction over the matter',
      'Political offences (except terrorism, war crimes, genocide)',
      'Military offences',
      'Risk of persecution based on race, religion, nationality, or politics',
      'Existing UAE investigation or prosecution',
      'Prior trial, acquittal, or conviction',
      'Time-barred prosecution',
      'Risk of torture, inhumane treatment, or disproportionate penalty'
    ]
  },
  agreements: [
    { countries: ['Multiple'], type: 'Riyadh Arab Convention on Judicial Co-operation', year: '1983' },
    { countries: ['GCC'], type: 'GCC Convention', year: '1996' },
    { countries: ['France'], type: 'Bilateral treaty', year: '1992' },
    { countries: ['China'], type: 'Bilateral treaty', year: '2004' },
    { countries: ['India'], type: 'Bilateral treaty', year: '2020' },
    { countries: ['Australia', 'China', 'Egypt', 'France', 'India', 'Iran', 'Pakistan', 'Spain', 'UK', 'Kazakhstan', 'Others'], type: 'Bilateral treaties', year: '' }
  ] as BilateralAgreement[],
  note: 'No extradition treaty with USA, Canada, UK, or EU countries'
}

// ============================================================================
// SECTION 19: ENFORCEMENT OF FOREIGN JUDGMENTS
// ============================================================================

export interface EnforcementCondition {
  number: number
  condition: string
}

export const enforcementOfForeignJudgments = {
  legalFramework: 'Articles 222-235 of Federal Civil Procedure Law',
  conditions: [
    { number: 1, condition: 'UAE courts do not have exclusive jurisdiction over the matter' },
    { number: 2, condition: 'Foreign court had proper jurisdiction' },
    { number: 3, condition: 'Judgment is final and binding' },
    { number: 4, condition: 'Reciprocity exists between UAE and issuing jurisdiction' },
    { number: 5, condition: 'Judgment does not violate UAE public policy' }
  ] as EnforcementCondition[],
  reciprocityChallenge: 'Enforcement can be denied if foreign country does not recognize UAE judgments; 2022 Ministry of Justice letter stating reciprocity with UK established is not legally binding',
  offshoreCourts: {
    difc: {
      role: 'Can act as "conduit jurisdiction"',
      law: 'DIFC Court Law No. 10 of 2004',
      note: 'Can recognize and enforce foreign judgments without geographic link to DIFC'
    },
    adgm: {
      role: 'Can enforce foreign judgments',
      regulation: '2015 Regulations',
      development: '2025 MoU with Dubai Courts eliminated re-examination of merits'
    }
  },
  recentDevelopments: [
    { year: 2024, event: 'Dubai Court of Cassation Case No. 339/2023: Upheld Polish monetary judgment enforcement (August 15, 2024)' },
    { year: 2025, event: 'DIFC Law No. 2 of 2025: Broadens DIFC Courts jurisdiction without direct DIFC connection if both parties agree' },
    { year: 2024, event: 'Conflict of Jurisdiction Tribunal: Resolves disputes between DIFC and Dubai courts' }
  ],
  caseExample: {
    name: 'Dana Gas v Sukuk Holders (2017)',
    details: 'Multiple courts (Sharjah, London, British Virgin Islands) involved; UK High Court upheld sukuk validity under English law; UAE courts upheld choice of law'
  }
}

// ============================================================================
// SECTION 20: HUMAN RIGHTS MECHANISMS
// ============================================================================

export interface HumanRightsMechanism {
  mechanism: string
  status: string
  details?: string
}

export interface HumanRightsConcern {
  area: string
  details: string
}

export const humanRightsMechanisms = {
  internationalEngagement: [
    { mechanism: 'OHCHR office', status: 'Established in UAE', year: '2002' },
    { mechanism: 'ICCPR', status: 'Not ratified' },
    { mechanism: 'ICESCR', status: 'Not ratified' },
    { mechanism: 'Universal Periodic Review', status: 'Subject to review' }
  ] as HumanRightsMechanism[],
  concernsRaised: [
    { area: 'Freedom of expression', details: 'Restrictions on speech, criticism of rulers' },
    { area: 'Migrant worker rights', details: 'Kafala system, passport confiscation, wage theft' },
    { area: "Women's rights", details: 'Restrictions under male guardianship policies' },
    { area: 'Prisoners of conscience', details: 'UAE94 activists' },
    { area: 'Arbitrary detention', details: 'Activists, lawyers, journalists' }
  ] as HumanRightsConcern[],
  documentedViolations: [
    'Torture',
    'Arbitrary arrest',
    'Incommunicado detention',
    'Restriction on freedom of expression and association',
    'Discrimination against women and foreign workers'
  ]
}

// ============================================================================
// SECTION 21: REFORMS TIMELINE
// ============================================================================

export interface ReformTimeline {
  year: number
  reform: string
  decree?: string
}

export const reformsTimeline: ReformTimeline[] = [
  { year: 2020, reform: 'Sharia restrictions, alcohol decriminalization', decree: 'Federal Decree Law No. 15' },
  { year: 2021, reform: 'Cohabitation decriminalization', decree: 'Federal Decree Law No. 31' },
  { year: 2021, reform: 'Cybercrime law', decree: 'Federal Decree Law No. 34' },
  { year: 2021, reform: 'Data protection', decree: 'Federal Decree Law No. 45' },
  { year: 2022, reform: 'Labor law reforms', decree: 'Federal Decree-Law No. 33' },
  { year: 2023, reform: 'Labor law amendment', decree: 'Federal Decree-Law No. 9' },
  { year: 2023, reform: 'Bankruptcy law', decree: 'Federal Decree-Law No. 51' },
  { year: 2024, reform: 'Pharmaceutical IP', decree: 'Federal Decree-Law No. 38/2024' },
  { year: 2025, reform: 'AML law', decree: 'Federal Decree-Law No. 10' },
  { year: 2025, reform: 'New Civil Code', decree: 'Federal Decree-Law No. 25' },
  { year: 2025, reform: 'Bankruptcy Court', decree: 'Resolution No. 39' }
]

// ============================================================================
// SECTION 22: KEY STATISTICS
// ============================================================================

export interface LegalSystemMetric {
  metric: string
  value: string
}

export interface DIFCMetric {
  metric: string
  value: string
}

export interface IPMetric {
  metric: string
  value: string
}

export interface CourtMetric {
  metric: string
  value: string
}

export interface LaborMetric {
  metric: string
  value: string
}

export interface AMLMetric {
  metric: string
  value: string
}

export interface DataProtectionMetric {
  metric: string
  value: string
}

export interface LegalProfessionMetric {
  metric: string
  value: string
}

export interface ExtraditionMetric {
  metric: string
  value: string
}

export const keyStatistics = {
  legalSystem: [
    { metric: 'Federal Supreme Court judges', value: '5' },
    { metric: 'Court of First Instance jurisdictions', value: 'Civil, commercial, administrative, labour, personal status' },
    { metric: 'Appeal window (regular)', value: '30 days' },
    { metric: 'Appeal window (urgent)', value: '10 days' },
    { metric: 'Cassation appeal', value: '60 days' },
    { metric: 'Minor circuit threshold', value: 'AED 500,000' },
    { metric: 'Blood money (male)', value: 'AED 200,000 (~$54,450)' },
    { metric: 'Blood money (female)', value: 'AED 100,000 (~$27,225)' },
    { metric: 'Legal age change', value: '21 to 18 years' },
    { metric: 'Ministry services digitalized', value: '95% (since May 2015)' }
  ] as LegalSystemMetric[],
  difcADGM: [
    { metric: 'DIFC area', value: '110 hectares (272 acres)' },
    { metric: 'DIFC companies (2022)', value: '3,000+' },
    { metric: 'ADGM FinTech sandbox rank', value: '2nd most active globally' }
  ] as DIFCMetric[],
  intellectualProperty: [
    { metric: 'UAE resident patent applications (2016)', value: '622' },
    { metric: 'UAE resident patent applications (2023)', value: '1,005' },
    { metric: 'Patent growth per million residents', value: '9 to 28.7' },
    { metric: 'Total patent applications (2016)', value: '1,699' },
    { metric: 'Total patent applications (2023)', value: '3,403' },
    { metric: 'GCC trademark filings (UAE, 2020-2024)', value: '110,238' },
    { metric: 'Patent protection period', value: '20 years' },
    { metric: 'Trademark renewal term', value: '10 years' },
    { metric: 'Copyright term', value: "Author's lifetime + 50 years" },
    { metric: 'Patent registration time', value: '18-36 months' },
    { metric: 'Patent initial cost', value: 'AED 8,000-15,000' },
    { metric: 'Patent annual cost', value: 'AED 2,000-5,000' },
    { metric: 'Trademark initial cost', value: 'AED 3,000-8,000' },
    { metric: 'Trademark annual cost', value: 'AED 1,500-3,000' }
  ] as IPMetric[],
  courtEfficiency: [
    { metric: 'Abu Dhabi case completion rate (2025)', value: '98%' },
    { metric: 'Abu Dhabi first instance processing', value: '40 days' },
    { metric: 'Abu Dhabi appeals processing', value: '34 days' },
    { metric: 'Dubai inheritance distribution', value: 'Dh3.5 billion+' }
  ] as CourtMetric[],
  labor: [
    { metric: 'Fixed-term contract max', value: '3 years' },
    { metric: 'Probation period max', value: '6 months' },
    { metric: 'Probation notice minimum', value: '14 days' },
    { metric: 'Salary continuation during disputes', value: 'Up to 2 months' },
    { metric: 'Maternity leave', value: '60 calendar days' },
    { metric: 'Paternity leave', value: '5 days' },
    { metric: 'Study leave', value: '10 calendar days' }
  ] as LaborMetric[],
  antiMoneyLaundering: [
    { metric: 'AML administrative fines', value: 'Up to AED 1 billion' },
    { metric: 'goAML platform', value: 'Operational' },
    { metric: 'Fawri Tick system', value: 'Operational' },
    { metric: 'Federal AML Courts established', value: 'November 2020' },
    { metric: 'Central Bank AML Dept established', value: 'August 2020' }
  ] as AMLMetric[],
  dataProtection: [
    { metric: 'PDPL effective date', value: 'January 2, 2022' },
    { metric: 'Maximum fine', value: 'AED 5,000,000' },
    { metric: 'Imprisonment max', value: '1 year' },
    { metric: 'Children data protection age', value: 'Under 13' }
  ] as DataProtectionMetric[],
  legalProfession: [
    { metric: 'Contingency fee max', value: '25% of court awards' },
    { metric: 'Visiting consultant limit', value: '30 working days/year' },
    { metric: 'Suspension max', value: '2 years' },
    { metric: 'Appeal period', value: '30 days' }
  ] as LegalProfessionMetric[],
  extradition: [
    { metric: 'Minimum imprisonment (requesting state)', value: '1 year' },
    { metric: 'Extradition stages', value: '5' },
    { metric: 'Treaty countries', value: 'Multiple (Australia, China, Egypt, France, India, Iran, Pakistan, Spain, UK, etc.)' }
  ] as ExtraditionMetric[]
}

// ============================================================================
// SECTION 23: DASHBOARD DATA TABLES
// ============================================================================

export interface DashboardLegalMetric {
  metric: string
  value: string
  source: string
  date: string
}

export interface DashboardReformEntry {
  year: number
  reform: string
  decree: string
}

export const dashboardDataTables = {
  legalSystemMetrics: [
    { metric: 'Federal Supreme Court judges', value: '5', source: 'UAE Government', date: '2024' },
    { metric: 'Smart transformation', value: '95% digital', source: 'Ministry of Justice', date: '2024' },
    { metric: 'Legal age of adulthood', value: '18 years', source: 'Federal Decree Law No. 25/2025', date: '2025' }
  ] as DashboardLegalMetric[],
  courtMetrics: [
    { metric: 'Abu Dhabi case completion rate', value: '98%', source: 'Abu Dhabi Courts', date: '2025' },
    { metric: 'Abu Dhabi processing time (first instance)', value: '40 days', source: 'Abu Dhabi Courts', date: '2025' },
    { metric: 'Abu Dhabi appeals processing', value: '34 days', source: 'Abu Dhabi Courts', date: '2025' }
  ] as DashboardLegalMetric[],
  ipMetrics: [
    { metric: 'Patent applications (2023)', value: '1,005', source: 'AGBI', date: '2025' },
    { metric: 'Trademark filings (UAE, 2020-2024)', value: '110,238', source: 'GPCA', date: '2024' },
    { metric: 'IP protection period', value: '20 years', source: 'InLex Partners', date: '2024' }
  ] as DashboardLegalMetric[],
  laborMetrics: [
    { metric: 'Fixed-term contract max', value: '3 years', source: 'Mercer', date: '2024' },
    { metric: 'Maternity leave', value: '60 days', source: 'UAE Government', date: '2022' },
    { metric: 'Paternity leave', value: '5 days', source: 'UAE Government', date: '2020' }
  ] as DashboardLegalMetric[],
  amlMetrics: [
    { metric: 'AML administrative fines', value: 'Up to AED 1 billion', source: 'DLA Piper', date: '2025' },
    { metric: 'goAML platform', value: 'Operational', source: 'UAE Government', date: '2024' },
    { metric: 'FATF assessment', value: 'High commitment', source: 'FATF', date: '2022' }
  ] as DashboardLegalMetric[],
  reformsTimeline: [
    { year: 2020, reform: 'Sharia restrictions, alcohol decriminalization', decree: 'FDL No. 15' },
    { year: 2021, reform: 'Cohabitation decriminalization', decree: 'FDL No. 31' },
    { year: 2021, reform: 'Cybercrime law', decree: 'FDL No. 34' },
    { year: 2021, reform: 'Data protection', decree: 'FDL No. 45' },
    { year: 2022, reform: 'Labor law reforms', decree: 'FDL No. 33' },
    { year: 2023, reform: 'Labor law amendment', decree: 'FDL No. 9' },
    { year: 2023, reform: 'Bankruptcy law', decree: 'FDL No. 51' },
    { year: 2024, reform: 'Pharmaceutical IP', decree: 'FDL No. 38/2024' },
    { year: 2025, reform: 'AML law', decree: 'FDL No. 10' },
    { year: 2025, reform: 'New Civil Code', decree: 'FDL No. 25' },
    { year: 2025, reform: 'Bankruptcy Court', decree: 'Resolution No. 39' }
  ] as DashboardReformEntry[]
}

// ============================================================================
// SECTION 24: SOURCE TIERS
// ============================================================================

export interface SourceEntry {
  source: string
  url: string
}

export const sourceTiers = {
  tier0GovernmentPrimary: [
    { source: 'u.ae', url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws' },
    { source: 'u.ae', url: 'https://u.ae/en/about-the-uae/digital-uae/regulatory-framework/regulatory-sandboxes-in-the-uae' },
    { source: 'u.ae', url: 'https://u.ae/en/about-the-uae/the-uae-government/the-federal-judiciary' },
    { source: 'u.ae', url: 'https://u.ae/en/information-and-services/business/regulations/bankruptcy-and-insolvency/protection-of-insolvent-natural-persons' },
    { source: 'u.ae', url: 'https://u.ae/en/information-and-services/business/regulations/combatting-money-laundering' }
  ] as SourceEntry[],
  tier1MainstreamMedia: [
    { source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Legal_system_of_the_United_Arab_Emirates' },
    { source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dubai_International_Financial_Centre' },
    { source: 'Gulf News', url: 'https://gulfnews.com/uae/uae-legal-reforms-2025-how-the-uae-reshaped-its-laws-1.500391713' },
    { source: 'CNN', url: 'https://edition.cnn.com/2020/11/09/middleeast/uae-decriminalize-alcohol-suicide-intl' }
  ] as SourceEntry[],
  tier2NGOsHumanRights: [
    { source: 'Human Rights Watch', url: 'https://www.hrw.org/news/2022/06/05/uae-sweeping-legal-reforms-deepen-repression' },
    { source: 'Human Rights Watch', url: 'https://www.hrw.org/world-report/2024/country-chapters/united-arab-emirates' },
    { source: 'Amnesty International', url: 'https://www.amnestyusa.org/countries/uae/' },
    { source: 'Article 19', url: 'https://www.article19.org/resources/united-arab-emirates-new-cybercrime-and-anti-rumour-law-violates-rights/' }
  ] as SourceEntry[],
  tier3LegalConsulting: [
    { source: 'Habib Al Mulla', url: 'https://habibalmulla.com/articles/the-uaes-new-civil-code-first-reflections-on-a-major-legislative-reform/' },
    { source: 'Squire Patton Boggs', url: 'https://www.squirepattonboggs.com/insights/publications/client-update-on-the-new-civil-law-in-the-uae-federal-decree-law-no25-of-2025/' },
    { source: 'Bracewell LLP', url: 'https://www.bracewell.com/resources/the-uaes-new-civil-code-explained-practical-changes-for-businesses-and-investors/' },
    { source: 'DLA Piper', url: 'https://www.dlapiper.com/insights/publications/2025/10/uae-issues-new-aml-law' },
    { source: 'Norton Rose Fulbright', url: 'https://www.nortonrosefulbright.com/en/knowledge/publications/a3002b1d/new-uae-and-dubai-laws-bring-in-tighter-regulation-of-uae-legal-professionals' },
    { source: 'Dentons', url: 'https://www.dentons.com/en/find-your-dentons-team/practices/litigation-and-dispute-resolution/regional-practices/litigation-and-dispute-resolution-in-the-united-arab-emirates' },
    { source: 'Charles Russell Speechlys', url: 'https://www.charlesrussellspeechlys.com/en/insights/expert-insights/dispute-resolution/2025/extradition-in-the-united-arab-emirates-uae/' },
    { source: 'BSA Law', url: 'https://bsalaw.com/insight/reciprocity-of-foreign-judgements-and-cross-jurisdictional-litigation-from-the-uae-perspective/' },
    { source: 'BSA Law', url: 'https://bsalaw.com/insight/uae-launches-dedicated-bankruptcy-court-to-modernize-insolvency-framework/' },
    { source: 'InLex Partners', url: 'https://inlex-partners.com/blog/protecting-intellectual-property-in-the-uae/' }
  ] as SourceEntry[]
}

// ============================================================================
// SECTION 25: SENTIMENT ANALYSIS
// ============================================================================

export interface SentimentTopic {
  topic: string
  sentiment: string
  perspective: string
}

export const sentimentAnalysis = {
  positiveTopics: [
    { topic: 'Legal System Modernization', sentiment: 'Positive', perspective: 'Government, Business' },
    { topic: 'Civil Code Reforms', sentiment: 'Positive', perspective: 'Government, Law Firms' },
    { topic: 'Decriminalization (Alcohol/Cohabitation)', sentiment: 'Positive', perspective: 'Government, News' },
    { topic: 'Court Efficiency', sentiment: 'Positive', perspective: 'Government, News' },
    { topic: 'AML Framework', sentiment: 'Positive', perspective: 'Government, FATF' },
    { topic: 'Labor Reforms', sentiment: 'Positive', perspective: 'Government, HR Consultants' }
  ] as SentimentTopic[],
  negativeTopics: [
    { topic: 'Human Rights', sentiment: 'Negative', perspective: 'International NGOs' },
    { topic: 'Cybercrime Law', sentiment: 'Negative', perspective: 'International NGOs' },
    { topic: 'Freedom of Expression Restrictions', sentiment: 'Negative', perspective: 'HRW, Amnesty' }
  ] as SentimentTopic[],
  neutralTopics: [
    { topic: 'Data Protection Implementation', sentiment: 'Neutral/Cautionary', perspective: 'Legal Analysts' },
    { topic: 'Extradition Process', sentiment: 'Neutral', perspective: 'Legal Publication' },
    { topic: 'Foreign Judgment Enforcement', sentiment: 'Neutral', perspective: 'Law Firms' }
  ] as SentimentTopic[]
}

// ============================================================================
// SECTION 26: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface RelevanceEntry {
  priority: string
  topic: string
  importance: string
}

export const uaeRelevanceAssessment = {
  criticalPriority: [
    { priority: '1', topic: 'DIFC/ADGM', importance: 'Financial hub competitiveness' },
    { priority: '2', topic: 'AML Framework', importance: 'International financial integrity' },
    { priority: '3', topic: 'Civil Code Reform', importance: 'Business legal certainty' },
    { priority: '4', topic: 'Bankruptcy Law', importance: 'Economic resilience' },
    { priority: '5', topic: 'IP Protection', importance: 'Innovation ecosystem' },
    { priority: '6', topic: 'Labor Law', importance: 'Workforce development' },
    { priority: '7', topic: 'Data Protection', importance: 'Digital economy' },
    { priority: '8', topic: 'Arbitration', importance: 'Dispute resolution hub' }
  ] as RelevanceEntry[],
  highPriority: [
    { priority: '1', topic: 'Cybercrime Law', importance: 'Digital safety' },
    { priority: '2', topic: 'Extradition', importance: 'International cooperation' },
    { priority: '3', topic: 'Foreign Judgment Enforcement', importance: 'Cross-border business' },
    { priority: '4', topic: 'Regulatory Sandboxes', importance: 'Innovation facilitation' },
    { priority: '5', topic: 'Legal Profession', importance: 'Market access' }
  ] as RelevanceEntry[],
  moderatePriority: [
    { priority: '1', topic: 'Decriminalization Reforms', importance: 'Social liberalization' },
    { priority: '2', topic: 'Honor Crime Reform', importance: 'Human rights' },
    { priority: '3', topic: 'Family Law', importance: 'Personal status' },
    { priority: '4', topic: 'Migrant Worker Rights', importance: 'Labor standards' }
  ] as RelevanceEntry[]
}

// ============================================================================
// SECTION 27: REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentCompleted: 'Yes (WebFetch data extraction from 51 sources)',
  queriesExecuted: 32,
  pagesFetched: 48,
  sourceCount: 51,
  sourceBreakdown: {
    wikipedia: 2,
    uaeGovernmentOfficial: 6,
    hrw: 2,
    legalConsultingFirms: 18,
    newsOutlets: 4,
    industryReports: 3,
    otherSources: 16
  }
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface LegalRegulatoryData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  executionMetadata: typeof executionMetadata
  focusAreas: typeof focusAreas
  legalSystemStructure: typeof legalSystemStructure
  difcADGMCourts: typeof difcADGMCourts
  intellectualProperty: typeof intellectualProperty
  commercialLawCivilCode: typeof commercialLawCivilCode
  arbitrationInstitutions: typeof arbitrationInstitutions
  insolvencyLawReform: typeof insolvencyLawReform
  dataProtectionLaw: typeof dataProtectionLaw
  cybercrimeLaw: typeof cybercrimeLaw
  decriminalizationReforms: typeof decriminalizationReforms
  familyLawInheritance: typeof familyLawInheritance
  laborLawReform: typeof laborLawReform
  antiMoneyLaundering: typeof antiMoneyLaundering
  sanctionsImplementation: typeof sanctionsImplementation
  regulatorySandboxes: typeof regulatorySandboxes
  legalProfession: typeof legalProfession
  courtEfficiency: typeof courtEfficiency
  internationalLegalCooperation: typeof internationalLegalCooperation
  humanRightsMechanisms: typeof humanRightsMechanisms
  reformsTimeline: typeof reformsTimeline
  keyStatistics: typeof keyStatistics
  dashboardDataTables: typeof dashboardDataTables
  sourceTiers: typeof sourceTiers
  sentimentAnalysis: typeof sentimentAnalysis
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  reportMetadata: typeof reportMetadata
}

export const legalRegulatoryData: LegalRegulatoryData = {
  id: 'topic-2-17',
  sector: 'policy',
  title: 'Legal & Regulatory',
  titleAr: 'القانون والتنظيم',
  description: 'Civil law reforms, DIFC/ADGM courts, commercial law, IP protection, arbitration, insolvency, data protection, cybercrime, labor law, AML framework, and regulatory compliance',
  executionMetadata,
  focusAreas,
  legalSystemStructure,
  difcADGMCourts,
  intellectualProperty,
  commercialLawCivilCode,
  arbitrationInstitutions,
  insolvencyLawReform,
  dataProtectionLaw,
  cybercrimeLaw,
  decriminalizationReforms,
  familyLawInheritance,
  laborLawReform,
  antiMoneyLaundering,
  sanctionsImplementation,
  regulatorySandboxes,
  legalProfession,
  courtEfficiency,
  internationalLegalCooperation,
  humanRightsMechanisms,
  reformsTimeline,
  keyStatistics,
  dashboardDataTables,
  sourceTiers,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  reportMetadata
}

export default legalRegulatoryData
