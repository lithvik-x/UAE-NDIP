// @ts-nocheck
/**
 * International Organizations & Diplomatic Corps - Full Data
 *
 * Premium structured data extracted from 1-8-international-orgs-results.md
 * UAE National Digital Intelligence Platform
 */

'use client'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type SentimentType = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'MIXED'
export type RelevanceLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export interface UNAgency {
  id: string
  name: string
  nameAr?: string
  fullName: string
  headquarters: string
  uaeOffice?: string
  director?: string
  established?: string
  memberSince?: string
  uaeRelevance: number
  sentiment: SentimentType
  description: string
  keyActivities: string[]
  partnerships: string[]
  funding?: {
    total?: number
    currency: string
    period?: string
    purpose?: string
  }
  metrics?: {
    countriesServed?: number
    peopleReached?: number
    emergencyOrders?: number
    followers?: number
  }
  contact?: {
    website?: string
    phone?: string
    email?: string
  }
  socialAccounts?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    facebook?: string
  }
}

export interface UNSystemData {
  overview: {
    residentCoordinator: string
    nationality: string
    firstUNOperations: string
    agenciesCount: number
    agencies: string[]
  }
  agencies: UNAgency[]
}

export interface GCCSecretaryGeneral {
  name: string
  nationality: string
  assumedPosition: string
  previousRole: string
  education: string[]
  honors: string[]
 序: number
  careerHighlights: {
    period: string
    role: string
  }[]
}

export interface GCCData {
  secretaryGeneral: GCCSecretaryGeneral
  memberStates: string[]
  currentRole: string
  context: string
}

export interface ArabLeagueData {
  emergencyMeetingFeb2026: {
    date: string
    location: string
    level: string
    chair: string
    topic: string
  }
  emergencySessionMarch2026: {
    date: string
    format: string
    chair: string
    countriesTargeted: string[]
  }
  iranianAttacks: {
    targetType: string[]
    examples: string[]
    weapons: string[]
  }
  uaePosition: {
    quote: string
    keyPoints: string[]
    outcome: string
  }
}

export interface OICData {
  organizationProfile: {
    fullName: string
    memberCount: number
    globalRank: string
    headquarters: string
  }
  condemnationApril2026: {
    date: string
    event: string
    outcome: string
    statement: string
    actions: string[]
  }
}

export interface OPECData {
  membership: {
    status: string
    since: string
    keyPublications: string[]
    referenceBasket: string
  }
  march2026Adjustments: {
    date: string
    participants: string[]
    aprilAdjustment: string
    resumedUnwinding: string
    additionalVoluntaryAdjustments: string
    nextMeeting: string
    marketStabilityCommitments: string[]
    context: string
  }
  production: {
    metric: string
    value: string
    date: string
  }
  saudUaeTensions: {
    issue: string
    outcome: string
    expectation: string
  }
}

export interface IMFData {
  engagement: {
    membershipDate: string
    articleIVConsultation: string
  }
  economicProjections: {
    year: string
    gdpGrowth: string
    consumerPrices?: string
    notes?: string
  }[]
  keyStatements: {
    quote: string
    speaker: string
    date: string
  }[]
  assessmentFactors: {
    factor: string
    impact: string
  }[]
  basicIndicators: {
    population: string
    incomeGroup: string
  }
}

export interface WorldBankData {
  program: {
    membership: string
    uaeOfficeEstablished: string
    lastUpdated: string
  }
  strategicFocusAreas: {
    area: string
    description: string
  }[]
  economicForecasts: {
    year: string
    uaeGrowth: string
    gccGrowth: string
    menapGrowth: string
    globalGrowth: string
  }[]
  keyMetrics: {
    indicator: string
    value: string
    year: string
  }[]
}

export interface WTOData {
  membership: {
    wtoMemberSince: string
    gattMemberSince: string
    tradeAgreements: string
  }
  tradeAchievement2025: {
    metric: string
    value: string
    rank: string
    exportGrowth: string
  }
  availableDataCategories: string[]
}

export interface IMOData {
  achievement: {
    description: string
    date: string
    consecutiveTerms: string
    councilCategory: string
  }
  overview: {
    fullName: string
    role: string
    responsibility: string
  }
}

export interface IOCData {
  committeeProfile: {
    name: string
    president: string
    location: string
    phone: string
    email: string
    founded: string
    iocRecognition: string
  }
  historicalAchievement: {
    athlete: string
    event: string
    year: string
    medal: string
    achievement: string
  }
  upcomingGamesSchedule: {
    games: string
    location: string
    dates: string
  }[]
  winterOlympics2026: {
    athletes: string[]
    event: string
  }
  recentAchievement: {
    athlete: string
    event: string
    games: string
    achievement: string
  }
  programs: {
    program: string
    focus: string
  }[]
}

export interface EmbassyData {
  country: string
  city: string
  ambassador: string
  since?: string
  phone?: string
  fax?: string
  address: string
  email?: string
  socialAccounts?: {
    twitter?: string
    instagram?: string
  }
  weekend?: string
  additionalInfo?: {
    metric?: string
    value?: string
    target?: string
    status?: string
    services?: string[]
    cooperationAreas?: string[]
    relationsMilestones?: string
    recentActivity?: string[]
  }
}

export interface UAEEmbassiesData {
  embassies: EmbassyData[]
}

export interface ForeignEmbassyData {
  country: string
  currentHead: string
  since?: string
  embassyLocation?: string
  consulateGeneral?: string
  socialAccounts?: {
    instagram?: string
  }
  partnershipFramework?: string
  services?: string[]
}

export interface ForeignEmbassiesData {
  embassies: ForeignEmbassyData[]
}

export interface HumanitarianHubData {
  hub: {
    name: string
    location: string
    capacity: string
  }
  whoHub: {
    location: string
    countriesServed: string
    peopleReached: string
    emergencyOrders: string
  }
}

export interface HumanitarianCommitment {
  recipient: string
  amount: number
  date: string
  purpose: string
}

export interface HumanitarianInfrastructure {
  capability: string
  details: string
}

export interface HumanitarianLeadershipData {
  capabilities: HumanitarianHubData
  majorCommitments: HumanitarianCommitment[]
  infrastructure: HumanitarianInfrastructure[]
}

export interface TimelineEvent {
  date: string
  event: string
  impact: string
}

export interface RegionalSecurityAssessment {
  threat: string
  response: string
}

export interface KeyDevelopments2026Data {
  timeline: TimelineEvent[]
  regionalSecurityAssessment: RegionalSecurityAssessment[]
  uaePositioning: string
}

export interface EconomicIndicators {
  year: string
  gdpGrowthIMF?: string
  gdpGrowthWorldBank?: string
  inflationIMF?: string
  gdpPerCapitaWorldBank?: string
}

export interface TradeRankings {
  metric: string
  value: string
  rank?: string
  year?: string
}

export interface HumanitarianMetrics {
  metric: string
  value: string
  period?: string
}

export interface OilProduction {
  metric: string
  value: string
  date: string
}

export interface StatisticsDashboard {
  economicIndicators: EconomicIndicators[]
  tradeRankings: TradeRankings[]
  humanitarianMetrics: HumanitarianMetrics[]
  oilProduction: OilProduction[]
}

export interface UNAgenciesRegistry {
  organization: string
  hq: string
  uaeOffice: string
  keyContact: string
}

export interface DiplomaticNetworkSample {
  country: string
  city: string
  ambassador: string
  since: string
}

export interface EntityRegistry {
  internationalOrgsWithUAEPresence: UNAgenciesRegistry[]
  diplomaticNetworkSample: DiplomaticNetworkSample[]
}

export interface IntlOrgsOverview {
  title: string
  executionMetadata: {
    dateExecuted: string
    dateEnriched: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    source: string
  }
  tableOfContents: string[]
}

// ============================================================================
// DATA OBJECTS
// ============================================================================

export const intlOrgsOverview: IntlOrgsOverview = {
  title: '1.8 International Organizations & Diplomatic Corps - ENRICHED',
  executionMetadata: {
    dateExecuted: '2026-04-27',
    dateEnriched: '2026-04-27',
    frameworkVersion: '1.0',
    queriesExecuted: 32,
    pagesFetched: 28,
    source: 'mmx search + web_search (MCP)',
  },
  tableOfContents: [
    '1. UN System in UAE',
    '2. GCC Secretariat General',
    '3. Arab League',
    '4. OIC - Organization of Islamic Cooperation',
    '5. OPEC+',
    '6. IMF',
    '7. World Bank',
    '8. WTO',
    '9. IMO',
    '10. IOC - National Olympic Committee',
    '11. UAE Embassies Abroad',
    '12. Foreign Embassies in UAE',
    '13. Humanitarian Leadership Summary',
    '14. Key 2026 Developments',
  ],
}

export const unSystemData: UNSystemData = {
  overview: {
    residentCoordinator: 'Bérangère Boëll-Yousfi (France)',
    nationality: 'France',
    firstUNOperations: '1977 (UNDP)',
    agenciesCount: 7,
    agencies: ['UNHCR', 'UNICEF', 'UNDP', 'UN Women', 'WHO', 'ILO', 'UNESCO'],
  },
  agencies: [
    {
      id: 'unhcr',
      name: 'UNHCR UAE',
      fullName: 'United Nations High Commissioner for Refugees',
      headquarters: 'Geneva',
      uaeOffice: 'Dubai Humanitarian Hub (largest global stockpile)',
      uaeRelevance: 85,
      sentiment: 'POSITIVE',
      description: 'Global refugee agency with strategic role as humanitarian logistics hub near Jebel Ali Port',
      keyActivities: [
        'Dubai Humanitarian Hub - Largest global humanitarian stockpile, provided free of charge',
        'Strategic location near Jebel Ali Port for global distribution',
        'Sudan Response - UNHCR maintains operations supporting Sudanese refugees',
      ],
      partnerships: [
        'Dubai Humanitarian Hub partnership',
        'Jebel Ali Port logistics cooperation',
      ],
      funding: {
        total: 15,
        currency: 'USD million',
        period: 'December 2025',
        purpose: 'Sudan response',
      },
      contact: {
        website: 'https://www.unhcr.org/where-we-work/countries/united-arab-emirates',
      },
      socialAccounts: {
        twitter: '@UNHCR',
        linkedin: 'unhcr',
      },
    },
    {
      id: 'unicef',
      name: 'UNICEF UAE',
      fullName: 'UNICEF Gulf Area Office',
      headquarters: 'NY',
      uaeOffice: 'Abu Dhabi, Dubai',
      director: undefined,
      established: undefined,
      memberSince: undefined,
      uaeRelevance: 85,
      sentiment: 'POSITIVE',
      description: 'UN children\'s agency with Gulf Area Office serving Bahrain, Kuwait, Saudi Arabia, UAE',
      keyActivities: [
        'Child welfare programs in GCC region',
        'Sudan humanitarian operations',
        'South Sudan activities',
      ],
      partnerships: [
        'UAE Ministry of Foreign Affairs',
        'UAE International Cooperation',
      ],
      funding: {
        total: 7,
        currency: 'USD million',
        period: 'August 2024',
        purpose: 'Sudan Agreement - USD 6 million Sudan operations, USD 1 million South Sudan',
      },
      metrics: {
        followers: 15000000,
      },
      contact: {
        website: 'https://www.unicef.org/gulf/',
      },
      socialAccounts: {
        twitter: '@UNICEF',
        linkedin: 'unicef',
        instagram: '@unicefgulf',
        facebook: 'UNICEFGulf',
      },
    },
    {
      id: 'undp',
      name: 'UNDP UAE',
      fullName: 'United Nations Development Programme',
      headquarters: 'NY',
      uaeOffice: 'Abu Dhabi',
      uaeRelevance: 82,
      sentiment: 'POSITIVE',
      description: 'UN development agency focused on eradicating poverty, reducing inequalities, building resilience',
      keyActivities: [
        'AI for Sustainable Development Platform (launched September 2024)',
        'Youth Leadership Programs',
        'Development Talent Program',
      ],
      partnerships: [
        'AI for Sustainable Development Platform (September 2024)',
        'Youth leadership development',
      ],
      contact: {
        website: 'https://www.undp.org/tag/united-arab-emirates-donor-country',
      },
      socialAccounts: {
        twitter: '@UNDP',
        linkedin: 'undp',
      },
    },
    {
      id: 'un-women',
      name: 'UN Women UAE',
      fullName: 'UN Women UAE Liaison Office for the GCC',
      headquarters: 'NY',
      uaeOffice: 'Abu Dhabi',
      director: 'Dr. Mouza Al Shehhi',
      established: 'October 2016',
      uaeRelevance: 80,
      sentiment: 'POSITIVE',
      description: 'First UN Women liaison office in GCC, one of seven UN Women liaison offices globally',
      keyActivities: [
        'Coordination - Enhance coordination between sectors to drive UN Women\'s mandate',
        'SDG 5 - Strengthen partnerships to advance gender equality',
        'Women, Peace & Security agenda',
        'Women\'s economic empowerment in UAE and GCC',
      ],
      partnerships: [
        'UAE Ministry of Foreign Affairs',
        'General Women\'s Union',
        'UN Women',
      ],
      funding: {
        total: 60,
        currency: 'USD million',
        period: 'since 2010',
        purpose: 'Total contribution to UN Women',
      },
      contact: {
        website: 'https://uae.unwomen.org/en',
      },
      socialAccounts: {
        twitter: '@UN_Women',
      },
    },
    {
      id: 'who',
      name: 'WHO UAE',
      fullName: 'World Health Organization - Dubai Logistics Hub',
      headquarters: 'Geneva',
      uaeOffice: 'Dubai',
      uaeRelevance: 88,
      sentiment: 'MIXED',
      description: 'WHO Hub for Global Health Emergencies Logistics serving 70+ countries annually',
      keyActivities: [
        'Emergency health logistics',
        'Global health emergency preparedness',
        'Medical supply distribution',
      ],
      partnerships: [
        'WHO Dubai Logistics Hub',
        'Emergency supply distribution network',
      ],
      metrics: {
        countriesServed: 70,
        peopleReached: 20000000,
        emergencyOrders: 500,
      },
      contact: {
        website: 'https://www.who.int/countries/are',
      },
      socialAccounts: {
        twitter: '@WHO',
        linkedin: 'world-health-organization',
      },
    },
    {
      id: 'ilo',
      name: 'ILO UAE',
      fullName: 'International Labour Organization',
      headquarters: 'Geneva',
      uaeOffice: 'Beirut (Regional Office - non-resident)',
      uaeRelevance: 72,
      sentiment: 'MIXED',
      description: 'UN labor agency; monitors worker rights in UAE with capacity building programs',
      keyActivities: [
        'STREAM - Extending Social Protection to migrant workers (launched November 2024)',
        'FAIRWAY Programme (launched December 2019)',
        'Capacity building programme for Ministry of Labour',
        'Development Cooperation Dashboard',
      ],
      partnerships: [
        'UAE Ministry of Labour',
        'Regional Office in Beirut',
      ],
      metrics: {
        followers: 2300000,
      },
      contact: {
        website: 'https://www.ilo.org/regions-and-countries/arab-states/united-arab-emirates',
      },
      socialAccounts: {
        twitter: '@ILO',
        linkedin: 'ilo',
      },
    },
    {
      id: 'unesco',
      name: 'UNESCO UAE',
      fullName: 'UNESCO UAE National Commission',
      headquarters: 'Paris',
      uaeOffice: 'Abu Dhabi',
      uaeRelevance: 75,
      sentiment: 'POSITIVE',
      description: 'UNESCO membership since 1972; 2 World Heritage Sites; 21 Intangible Cultural Heritage Elements',
      keyActivities: [
        'World Heritage protection and promotion',
        'Intangible cultural heritage preservation',
        'Education and science cooperation',
      ],
      partnerships: [
        'UAE National Commission for UNESCO',
      ],
      metrics: {
        followers: 5600000,
      },
      contact: {
        website: 'https://www.unesco.org/en/countries/ae',
      },
      socialAccounts: {
        twitter: '@UNESCO',
        linkedin: 'unesco',
      },
    },
  ],
}

export const gccData: GCCData = {
  secretaryGeneral: {
    name: 'Jasem Mohamed AlBudaiwi',
    nationality: 'Kuwait',
    assumedPosition: 'February 1, 2023',
    previousRole: 'Kuwait\'s Ambassador to United States (2022-2023)',
    education: [
      'Diploma in Diplomatic Studies (Oxford)',
      'Bachelor\'s in Mass Communication (University of Utah)',
    ],
    honors: [
      'Excellence Award from Asian Society Korea Center (2015)',
      'Best Ambassador Award from Korean Parliament (2014)',
    ],
    序: 7,
    careerHighlights: [
      { period: '2022-2023', role: 'Ambassador to United States' },
      { period: '2017-2022', role: 'Head of Mission to European Union' },
      { period: '2013-2016', role: 'Ambassador to Republic of Korea' },
      { period: '1992', role: 'Joined Kuwait Ministry of Foreign Affairs as diplomatic attaché' },
    ],
  },
  memberStates: ['Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'United Arab Emirates'],
  currentRole: 'Economic integration remains key pillar - Protecting development gains; GCC states worked through diplomacy and transparency to ease regional tensions',
  context: 'March 2026 statement on economic integration and diplomatic cooperation',
}

export const arabLeagueData: ArabLeagueData = {
  emergencyMeetingFeb2026: {
    date: 'February 11, 2026',
    location: 'Cairo',
    level: 'Ministerial level, emergency session of Arab League Council',
    chair: 'UAE',
    topic: 'Israeli settlement expansion',
  },
  emergencySessionMarch2026: {
    date: 'March 8, 2026',
    format: 'Videoconference (extraordinary ministerial session)',
    chair: 'H.E. Khalifa bin Shaheen Al Marar, Minister of State',
    countriesTargeted: ['UAE', 'Saudi Arabia', 'Bahrain', 'Jordan', 'Oman', 'Qatar', 'Kuwait', 'Iraq'],
  },
  iranianAttacks: {
    targetType: [
      'Civilian Infrastructure - Commercial ports, airports, shopping centers, residential neighborhoods',
      'Service Facilities',
      'Diplomatic Premises - Embassies and consulates',
    ],
    examples: [],
    weapons: ['Ballistic missiles', 'Drones'],
  },
  uaePosition: {
    quote: '"Iran had launched sinister, cowardly and unjustified attacks on our Arab nations"',
    keyPoints: [
      'UAE NOT a party to armed conflict with Iran',
      'UAE never allowed territory, airspace, or waters to be used in any attack against Iran',
      'Called for UN Security Council to adopt binding resolution compelling Iran to cease attacks',
    ],
    outcome: 'Resolution Adopted: "Targeting the Sovereignty and Territorial Integrity of Arab States Subjected to Iranian Attacks"',
  },
}

export const oicData: OICData = {
  organizationProfile: {
    fullName: 'Organization of Islamic Cooperation',
    memberCount: 57,
    globalRank: 'Second largest intergovernmental organization after UN',
    headquarters: 'Jeddah, Saudi Arabia',
  },
  condemnationApril2026: {
    date: 'April 2026',
    event: 'OIC General Secretariat strongly condemned terrorist plot targeting UAE',
    outcome: 'Plot foiled by UAE security services',
    statement: '"The General Secretariat reiterates its firm position rejecting all forms of violence, extremism, and terrorism, or incitement to them, regardless of their motives and justifications."',
    actions: [
      'Expressed full solidarity with UAE',
      'Supported all measures to maintain security and stability',
      'Praised UAE security services',
    ],
  },
}

export const opecData: OPECData = {
  membership: {
    status: 'OPEC member country',
    since: '1972',
    keyPublications: ['Monthly Oil Market Report', 'Annual Statistical Bulletin', 'World Oil Outlook'],
    referenceBasket: 'OPEC Reference Basket (ORB)',
  },
  march2026Adjustments: {
    date: 'March 2026',
    participants: ['Saudi Arabia', 'Russia', 'Iraq', 'UAE', 'Kuwait', 'Kazakhstan', 'Algeria', 'Oman'],
    aprilAdjustment: '206,000 b/d',
    resumedUnwinding: '1.65 million b/d voluntary adjustments from April 2023',
    additionalVoluntaryAdjustments: '2.2 million b/d (from November 2023)',
    nextMeeting: 'April 5, 2026',
    marketStabilityCommitments: [
      'Maintain flexibility to increase, pause, or reverse adjustments based on market conditions',
      'Monthly meetings to review market conditions',
      'Full compensation required for any overproduced volumes since January 2024',
    ],
    context: 'Steady global economic outlook, healthy market fundamentals, low oil inventories',
  },
  production: {
    metric: 'UAE Crude Oil Production',
    value: '1,892,000 Barrel/Day',
    date: 'March 2026',
  },
  saudUaeTensions: {
    issue: 'Reported tensions over Yemen',
    outcome: 'OPEC+ maintained production policy unchanged',
    expectation: 'Output freeze in Q1 2026',
  },
}

export const imfData: IMFData = {
  engagement: {
    membershipDate: '1972',
    articleIVConsultation: 'September 17 - October 1, 2025',
  },
  economicProjections: [
    { year: '2024', gdpGrowthIMF: '4.0%', notes: 'estimated' },
    { year: '2025', gdpGrowthIMF: '4.8%', notes: 'projected - Driven by robust non-hydrocarbon growth' },
    { year: '2026', gdpGrowthIMF: '3.1%', consumerPrices: '2.5%', notes: 'projected - Lowered from 5% due to regional tensions' },
    { year: '2027', gdpGrowthIMF: '5.3%', notes: 'projected - Rebounding' },
  ],
  keyStatements: [
    { quote: '"UAE\'s shock-resilient economy"', speaker: 'Dr. Azour (IMF)', date: 'Pre-March 2026' },
    { quote: '"Abu Dhabi economy was strongest driver of UAE\'s overall performance"', speaker: 'Dr. Azour', date: 'December 8, 2025' },
  ],
  assessmentFactors: [
    { factor: 'Regional tensions (March 2026)', impact: 'Caused forecast reduction from 5% to 3.1% for 2026' },
    { factor: 'Non-hydrocarbon sector', impact: 'Robust growth driving 2025 performance' },
    { factor: 'Diversification', impact: 'Progressing well' },
  ],
  basicIndicators: {
    population: '11.465 million',
    incomeGroup: 'High income',
  },
}

export const worldBankData: WorldBankData = {
  program: {
    membership: '1972',
    uaeOfficeEstablished: '2019',
    lastUpdated: 'October 16, 2025',
  },
  strategicFocusAreas: [
    { area: 'Public Sector Reform', description: 'Government modernization' },
    { area: 'Fiscal Management', description: 'Budget and revenue management' },
    { area: 'Regulatory Reform', description: 'Business environment improvement' },
    { area: 'Education', description: 'Human capital development' },
    { area: 'Healthcare', description: 'Health system strengthening' },
    { area: 'Renewable Energy', description: 'Clean energy transition' },
    { area: 'Water', description: 'Water resource management' },
    { area: 'Women\'s Economic Empowerment', description: 'Gender equality in economy' },
  ],
  economicForecasts: [
    { year: '2026', uaeGrowth: '5.0', gccGrowth: '4.4', menapGrowth: '3.6', globalGrowth: '2.6' },
    { year: '2027', uaeGrowth: '5.1', gccGrowth: '4.6', menapGrowth: '3.9', globalGrowth: '2.7' },
  ],
  keyMetrics: [
    { indicator: 'GDP per Capita (current US$)', value: '$50,273.51', year: '2024' },
    { indicator: 'Population', value: '11 million', year: '2024' },
    { indicator: 'Income Group', value: 'High income', year: '' },
  ],
}

export const wtoData: WTOData = {
  membership: {
    wtoMemberSince: 'April 10, 1996',
    gattMemberSince: 'March 8, 1994',
    tradeAgreements: 'Multiple multilateral and bilateral (GCC partners)',
  },
  tradeAchievement2025: {
    metric: 'Goods Exports',
    value: '$1.637 trillion',
    rank: '9th globally',
    exportGrowth: 'From $949 billion to $1.637 trillion (2021-2025)',
  },
  availableDataCategories: [
    'Trade Statistics (maps, trade per capita, trade-to-GDP ratio)',
    'Tariff Data (goods/services schedules)',
    'Trade Agreements (RTAs, PTAs)',
    'Disputes (as complainant, respondent, or third party)',
    'Notifications (TBT, SPS concerns)',
  ],
}

export const imoData: IMOData = {
  achievement: {
    description: 'Re-elected to IMO Council, Category B',
    date: 'November 28, 2025',
    consecutiveTerms: 'Fifth consecutive time',
    councilCategory: 'Category B (states with important shipping interests)',
  },
  overview: {
    fullName: 'International Maritime Organization',
    role: 'UN specialized agency',
    responsibility: 'Safety and security of shipping, prevention of marine and atmospheric pollution',
  },
}

export const iocData: IOCData = {
  committeeProfile: {
    name: 'UAE National Olympic Committee',
    president: 'Mansoor bin Mohammed',
    location: 'Dubai, Deira, Business Village, Block B, 701',
    phone: '+971-4-236-9999',
    email: 'info@olympic.ae',
    founded: 'December 19, 1979',
    iocRecognition: '1980',
  },
  historicalAchievement: {
    athlete: 'Ahmed Almaktoum',
    event: 'Shooting',
    year: '2004 Athens',
    medal: 'First Olympic medal (Bronze)',
    achievement: 'First Olympic medal for UAE',
  },
  upcomingGamesSchedule: [
    { games: 'Winter Olympics', location: 'Milan-Cortina, Italy', dates: 'Feb 6-22, 2026' },
    { games: 'Asian Beach Games', location: 'Sanya, China', dates: 'Apr 22-30, 2026' },
    { games: 'Gulf Games', location: 'Doha, Qatar', dates: 'May 11-22, 2026' },
    { games: 'Asian Games', location: 'Nagoya, Japan', dates: 'Sep 19-Oct 4, 2026' },
    { games: 'Youth Olympics', location: 'Dakar, Senegal', dates: 'Oct 14-31, 2026' },
    { games: 'Asian Indoor & Martial Arts Games', location: 'Riyadh, Saudi Arabia', dates: 'TBD' },
  ],
  winterOlympics2026: {
    athletes: ['Pira Hudson', 'Alexander Astridge'],
    event: 'Alpine skiing',
  },
  recentAchievement: {
    athlete: 'Mohamed Al Ali',
    event: 'Asian Youth Games Bahrain 2025',
    games: 'Asian Youth Games Bahrain 2025',
    achievement: 'First medal in Asian Youth Games history',
  },
  programs: [
    { program: 'National Olympic Academy', focus: '2021-2024 Agenda' },
    { program: 'National Sports Day', focus: 'Community engagement' },
    { program: 'Sports Medicine Committee', focus: 'Athlete health, medical personal registration' },
    { program: 'Olympic Movement Education', focus: 'Awareness programs' },
  ],
}

export const uaeEmbassiesData: UAEEmbassiesData = {
  embassies: [
    {
      country: 'United States',
      city: 'Washington DC',
      ambassador: 'H.E. Yousef Al Otaiba',
      since: 'July 2008',
      phone: '+12022432400 / +12022432432',
      address: '3522 International Court, NW Suite # 400, Washington, DC 20008',
      email: 'WashingtonEMB@mofa.gov.ae',
      socialAccounts: {
        instagram: '@uaeembassyus',
      },
      additionalInfo: {
        recentActivity: [
          'Ambassador Al Otaiba warned against ending Iran war too soon (ADL Never is Now event)',
        ],
      },
    },
    {
      country: 'China',
      city: 'Beijing',
      ambassador: 'H.E. Hussain Ibrahim Mohamed Ibrahim Al Hammadi',
      since: 'May 20, 2023',
      phone: '+00861065327650',
      fax: '+00861065327652',
      address: 'Villa 10-04, Liangmaqiao Diplomatic Residence Compound, 22 Dong Fang Dong Lu, Beijing',
      email: 'BeijingEMB@mofa.gov.ae',
      additionalInfo: {
        metric: 'Trade Volume (2023)',
        value: '$95 billion',
        target: '$200 billion by 2030',
        status: 'UAE is "China\'s largest partner in the Arab region"',
        relationsMilestones: '40 years of diplomatic relations celebrated in 2024',
        recentActivity: [
          'FM Wang Yi visit to UAE (December 2025)',
          ' Praised "golden era" in bilateral ties (September 2025)',
          'Led UAE delegation at Beijing International Book Fair (June 2025)',
        ],
      },
    },
    {
      country: 'Saudi Arabia',
      city: 'Riyadh',
      ambassador: 'H.E. Matar Salem Ali Marran Al Dhaheri',
      phone: '+966114881227 / +966114828134',
      fax: '+966114827504',
      address: 'Amr Ibn Ummiyyah Ad Damri, Al Safarat, Riyadh 11693, P.O. Box 94385',
      email: 'Riyadhemb@mofa.gov.ae',
      weekend: 'Friday-Saturday',
      additionalInfo: {
        cooperationAreas: [
          'Bilateral Relations',
          'Economic Cooperation',
          'Tourism',
          'Cultural Cooperation',
        ],
      },
    },
    {
      country: 'India',
      city: 'New Delhi',
      ambassador: 'H.E. Dr. Abdulnasser Jamal Hussain Mohammed Al Shaali',
      phone: '+00911126111111',
      fax: '26873272',
      address: 'EP-12, Chandragupta Marg, Chanakyapuri, New Delhi - 110021',
      email: 'NewDelhiEMB@mofa.gov.ae',
      additionalInfo: {
        recentActivity: [
          'Sixth Consular Committee session held in Abu Dhabi',
          'UAE expanded visa-on-arrival for Indian nationals with residence permits from 6 additional countries',
        ],
      },
    },
    {
      country: 'United Kingdom',
      city: 'London',
      ambassador: 'H.E. Mansoor Abdullah Khalfan Juma Abulhoul',
      since: 'June 2019',
      phone: '+44 (0) 2075811281',
      fax: '+44 (0) 2078088381',
      address: '1-2 Grosvenor Crescent, London, SW1X 7EE',
      email: 'LondonEMB.info@mofa.gov.ae',
      socialAccounts: {
        twitter: '@UAEEmbassyUK',
      },
      additionalInfo: {
        recentActivity: [],
      },
    },
    {
      country: 'France',
      city: 'Paris',
      ambassador: 'H.E. Fahad Saeed Mohamed Abdulla Al Raqbani',
      since: 'September 18, 2024',
      phone: '+33144340200',
      fax: '+33147556104',
      address: '2 Boulevard de la Tour Maubourg, 75007 Paris',
      email: 'ParisEMB@mofa.gov.ae',
      additionalInfo: {
        cooperationAreas: [
          'Political cooperation',
          'Security and defense cooperation',
          'Culture and education',
          'Health',
          'Renewable energy',
          'Green and innovative technology',
          'Space',
          'Nuclear energy for peaceful purposes',
        ],
      },
    },
    {
      country: 'Germany',
      city: 'Berlin',
      ambassador: 'Ahmed Alattar',
      since: 'September 2022',
      socialAccounts: {
        twitter: '@UAEinBerlin',
        instagram: '@uaeinberlin',
      },
      additionalInfo: {
        recentActivity: [
          'H.H. Sheikh Abdullah bin Zayed met with German Foreign Minister',
          'Described as "model of constructive cooperation"',
        ],
      },
    },
    {
      country: 'Japan',
      city: 'Tokyo',
      ambassador: 'H.E. Shihab Ahmed Mohamed Abdulrahim Al Faheem',
      since: 'December 2020',
      phone: '+0081354890804',
      address: '9-10 Nanpeidai-cho, Shibuya-ku, Tokyo 150-0036',
      email: 'TokyoEMB@mofa.gov.ae',
      additionalInfo: {
        relationsMilestones: '50 years of diplomatic relations celebrated; Relations began with crude oil shipments to Japan in 1961; Japanese companies secured oil concessions in UAE end of 1967',
        recentActivity: [],
      },
    },
  ],
}

export const foreignEmbassiesData: ForeignEmbassiesData = {
  embassies: [
    {
      country: 'United States',
      currentHead: 'Eric Gaudiosi, Chargé d\'affaires',
      since: 'August 11, 2025',
      embassyLocation: 'Abu Dhabi',
      consulateGeneral: 'Dubai',
      socialAccounts: {
        instagram: '@usainuae',
      },
    },
    {
      country: 'United Kingdom',
      embassyLocation: 'British Embassy Dubai',
      address: 'Al Seef Road, Bur Dubai, Near Dubai Creekside, PO Box 65, Dubai',
      partnershipFramework: '"Partnership for the Future" (launched 2021)',
      services: [
        'Emergency travel documents',
        'Notarial and documentary services',
        'Assistance for victims of crime',
        'Help for hospitalized British nationals',
        'Assistance with deaths abroad',
      ],
    },
  ],
}

export const humanitarianLeadershipData: HumanitarianLeadershipData = {
  capabilities: {
    hub: {
      name: 'UNHCR Global Stockpile',
      location: 'Dubai Humanitarian Hub',
      capacity: 'Largest globally',
    },
    whoHub: {
      location: 'Dubai',
      countriesServed: '70+ countries',
      peopleReached: '20M+ people annually',
      emergencyOrders: '500+ emergency orders/year, 75 countries, all 6 WHO regions',
    },
  },
  majorCommitments: [
    { recipient: 'UNHCR Sudan', amount: 15, date: 'Dec 2025', purpose: 'Sudan response' },
    { recipient: 'UNICEF Sudan', amount: 7, date: 'Aug 2024', purpose: 'Sudan humanitarian efforts' },
    { recipient: 'WHO Chad Refugees', amount: 3, date: 'Nov 2024', purpose: 'Sudanese refugees in Chad' },
    { recipient: 'Sudan Total', amount: 4240, date: '2015-2025', purpose: 'Comprehensive aid' },
    { recipient: 'Sudan Since 2023', amount: 784, date: 'Since 2023', purpose: 'Relief aid' },
  ],
  infrastructure: [
    { capability: 'Dubai Humanitarian Hub', details: 'Near Jebel Ali Port, largest global stockpile, free of charge storage' },
    { capability: 'WHO Dubai Hub', details: '500+ emergency orders/year, 75 countries, all 6 WHO regions' },
    { capability: 'Relief Flights to Sudan', details: '159 flights' },
    { capability: 'Food/Medical Supplies to Sudan', details: '10,000+ tonnes' },
    { capability: 'Field Hospitals (Chad)', details: '2 (treated 45,000+ people)' },
  ],
}

export const keyDevelopments2026Data: KeyDevelopments2026Data = {
  timeline: [
    { date: 'Feb 11, 2026', event: 'UAE chaired Arab League emergency meeting on Israeli settlements', impact: 'Diplomatic leadership' },
    { date: 'March 5, 2026', event: 'WHO Dubai hub suspended due to Iran conflict', impact: 'Humanitarian logistics disruption' },
    { date: 'March 6, 2026', event: 'WHO Dubai hub resumed operations', impact: 'Quick recovery' },
    { date: 'March 8, 2026', event: 'UAE led Arab League session on Iranian attacks', impact: 'Regional security leadership' },
    { date: 'March 21, 2026', event: 'WHO sent first overland convoy from Dubai hub to Beirut', impact: 'Continued operations' },
    { date: 'April 2026', event: 'OIC condemned terrorist plot against UAE', impact: 'Islamic world solidarity' },
    { date: 'Nov 28, 2025', event: 'UAE re-elected to IMO Council (5th consecutive term)', impact: 'Maritime leadership' },
  ],
  regionalSecurityAssessment: [
    { threat: 'Iranian attacks (March 2026)', response: 'UAE called for UN Security Council action, maintained neutrality' },
    { threat: 'Terrorist plot (April 2026)', response: 'Foiled by UAE security services, OIC condemnation' },
    { threat: 'Yemen tensions', response: 'Did not affect OPEC+ cooperation' },
  ],
  uaePositioning: 'Diplomatic neutrality, humanitarian leadership, security cooperation',
}

export const statisticsDashboard: StatisticsDashboard = {
  economicIndicators: [
    { year: '2024', gdpGrowthIMF: '4.0%', gdpGrowthWorldBank: undefined, gdpPerCapitaWorldBank: '$50,274' },
    { year: '2025', gdpGrowthIMF: '4.8%' },
    { year: '2026', gdpGrowthIMF: '3.1%', gdpGrowthWorldBank: '5.0%', inflationIMF: '2.5%' },
    { year: '2027', gdpGrowthIMF: '5.3%', gdpGrowthWorldBank: '5.1%' },
  ],
  tradeRankings: [
    { metric: 'Goods Exports', value: '$1.637 trillion', rank: '9th globally', year: '2025' },
    { metric: 'Trade Volume with China', value: '$95 billion', year: '2023' },
    { metric: 'Trade Target with China', value: '$200 billion', year: '2030' },
  ],
  humanitarianMetrics: [
    { metric: 'Aid to Sudan', value: '$4.24 billion', period: '2015-2025' },
    { metric: 'Aid to Sudan', value: '$784 million', period: 'Since 2023' },
    { metric: 'UNHCR Contribution', value: '$15 million', period: '2025' },
    { metric: 'UNICEF Sudan', value: '$7 million', period: '2024' },
    { metric: 'WHO Chad', value: '$3 million', period: '2024' },
    { metric: 'Relief Flights', value: '159', period: 'Since 2023' },
    { metric: 'Supplies Delivered', value: '10,000+ tonnes', period: 'Since 2023' },
  ],
  oilProduction: [
    { metric: 'Crude Production', value: '1.892 million b/d', date: 'March 2026' },
  ],
}

export const entityRegistry: EntityRegistry = {
  internationalOrgsWithUAEPresence: [
    { organization: 'UNHCR', hq: 'Geneva', uaeOffice: 'Dubai', keyContact: 'Dubai Humanitarian Hub' },
    { organization: 'UNICEF', hq: 'NY', uaeOffice: 'Riyadh/Abu Dhabi/Dubai', keyContact: 'Gulf Area Office' },
    { organization: 'UNDP', hq: 'NY', uaeOffice: 'Abu Dhabi', keyContact: 'Since 1977' },
    { organization: 'UN Women', hq: 'NY', uaeOffice: 'Abu Dhabi', keyContact: 'Dr. Mouza Al Shehhi (Director)' },
    { organization: 'WHO', hq: 'Geneva', uaeOffice: 'Dubai', keyContact: 'Dubai Logistics Hub' },
    { organization: 'ILO', hq: 'Geneva', uaeOffice: 'Beirut (non-resident)', keyContact: 'Regional Office' },
    { organization: 'UNESCO', hq: 'Paris', uaeOffice: 'Abu Dhabi', keyContact: 'National Commission' },
  ],
  diplomaticNetworkSample: [
    { country: 'USA', city: 'Washington DC', ambassador: 'Yousef Al Otaiba', since: '2008' },
    { country: 'China', city: 'Beijing', ambassador: 'Hussain Al Hammadi', since: '2023' },
    { country: 'UK', city: 'London', ambassador: 'Mansoor Abulhoul', since: '2019' },
    { country: 'France', city: 'Paris', ambassador: 'Fahad Al Raqbani', since: '2024' },
    { country: 'Germany', city: 'Berlin', ambassador: 'Ahmed Alattar', since: '2022' },
    { country: 'Japan', city: 'Tokyo', ambassador: 'Shihab Al Faheem', since: '2020' },
    { country: 'India', city: 'New Delhi', ambassador: 'Dr. Abdulnasser Al Shaali', since: '' },
    { country: 'Saudi Arabia', city: 'Riyadh', ambassador: 'Matar Al Dhaheri', since: '' },
  ],
}

// ============================================================================
// SUMMARY DATA FOR METRICS
// ============================================================================

export const summaryMetrics = {
  totalUNAgencies: 7,
  totalEmbassies: 8,
  totalForeignEmbassies: 2,
  totalHumanitarianAidSudan: '$4.24 billion',
  totalReliefFlights: 159,
  totalFieldHospitals: 2,
  whoHubCountriesServed: '70+',
  whoHubPeopleReached: '20M+',
  goodsExports2025: '$1.637 trillion',
  goodsExportsRank: 9,
 原油ProductionMarch2026: '1.892 million b/d',
  oicMemberCount: 57,
  gccMemberCount: 6,
  imoConsecutiveTerms: 5,
}

// ============================================================================
// EXPORTS
// ============================================================================

export const internationalOrgsData = {
  overview: intlOrgsOverview,
  unSystem: unSystemData,
  gcc: gccData,
  arabLeague: arabLeagueData,
  oic: oicData,
  opec: opecData,
  imf: imfData,
  worldBank: worldBankData,
  wto: wtoData,
  imo: imoData,
  ioc: iocData,
  uaeEmbassies: uaeEmbassiesData,
  foreignEmbassies: foreignEmbassiesData,
  humanitarian: humanitarianLeadershipData,
  keyDevelopments2026: keyDevelopments2026Data,
  statistics: statisticsDashboard,
  entityRegistry: entityRegistry,
  summary: summaryMetrics,
}

export default internationalOrgsData
