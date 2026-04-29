// @ts-nocheck
import type {
  CrisisEvent,
  CrisisOverview,
  CrisisType,
  PhoenixStage,
  CrisisTimelineEvent,
  StakeholderImpact,
  CrisisResponseMetrics,
  TierLevel,
  AlertLevel,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  SentimentBreakdown,
} from './types'

// Natural Disaster — file 4-1
export const naturalDisasterData: CrisisEvent = {
  id: 'crisis-4-1',
  type: 'natural-disaster',
  name: 'UAE Natural Disaster Crisis',
  severity: 4,
  phoenixStage: 'containment',
  alertLevel: 'YELLOW',
  timeline: [
    {
      date: '2024-04-15',
      event: 'Historic rainfall began',
      description: 'Rains began marking the start of the most significant flood in 75 years',
    },
    {
      date: '2024-04-16',
      event: 'Peak flooding - heaviest rainfall in 75 years',
      description: 'Dubai Airport recorded 164mm (6.45 inches); Al Ain recorded 254.8mm at Khatm Al Shakla',
    },
    {
      date: '2024-04-17',
      event: 'Rains concluded',
      description: '3-day event duration resulted in 5 UAE deaths, 23 regional deaths',
    },
    {
      date: '2024-06',
      event: '$8.2 billion stormwater drainage plan announced',
      description: 'Dubai announced investment to increase drainage capacity by 700%',
    },
    {
      date: '2025-09',
      event: '100-year deep tunnel drainage project approved',
      description: 'Implementation began for next-generation stormwater infrastructure',
    },
    {
      date: '2026-03-21',
      event: 'March 2026 record rainfall event',
      description: 'Heaviest UAE rains in 80+ years; 244mm at Jebel Yanas, RAK',
    },
  ],
  keyFindings: [
    'April 2024 flood: 254.8mm rain in 24 hours, 5 UAE deaths, $2.9-3.4B insured losses',
    'Climate change increased event intensity by 10-40% due to 1.2C of warming',
    'Cloud seeding confirmed NOT deployed during April 2024 flood (NCM)',
    '$8.2B stormwater infrastructure investment approved with 700% capacity increase',
    'Heat records: May 2025 reached 51.6C (2nd consecutive day May record)',
    'Midday work ban (June-Sept) achieves 99% employer compliance',
    'March 2026: Heaviest rains in 80+ years, no fatalities',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Residents',
      impact: 'Infrastructure disruption, property damage, displacement',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Construction Workers',
      impact: 'Outdoor work bans, heat protection requirements',
      sentiment: 'Mixed' as SentimentBreakdown,
    },
    {
      stakeholder: 'Insurance Industry',
      impact: '$2.5B losses, market transformation to "must have" flood coverage',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Government',
      impact: '$2B relief fund, infrastructure investment acceleration',
      sentiment: 'Resilient' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: '3 days (April 2024)',
    recoveryTime: 'Ongoing (2+ years)',
    casualties: 5,
    economicLoss: 3400000000,
    affectedPopulation: 1000000,
    fundingAllocated: 8200000000,
  },
  sources: [
    {
      source: 'Wikipedia - 2024 UAE Floods',
      tier: 'HIGH' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://en.wikipedia.org/wiki/2024_United_Arab_Emirates_floods',
    },
    {
      source: 'NCM Cloud Seeding Data',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://mobile.ncm.gov.ae/pages/cloud-seeding',
    },
    {
      source: 'MoHRE Worker Protection',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/the-midday-break',
    },
  ] as SourceReference[],
}

// Geopolitical Crisis — file 4-2
export const geopoliticalCrisisData: CrisisEvent = {
  id: 'crisis-4-2',
  type: 'geopolitical',
  name: 'UAE Geopolitical Crisis',
  severity: 5,
  phoenixStage: 'containment',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2026-02-28',
      event: 'US-Israel war on Iran began',
      description: 'Military conflict triggered by missile/drone attacks',
    },
    {
      date: '2026-03-01',
      event: 'Over 100 injured, 4 killed',
      description: 'Iran fired hundreds of missiles and drones at Gulf cities',
    },
    {
      date: '2026-03-02',
      event: 'UAE embassy in Tehran closed',
      description: 'Ambassador and all diplomats recalled; UAE condemns "blatant Iranian missile attacks"',
    },
    {
      date: '2026-03-14',
      event: 'First fire at Fujairah Oil Industry Zone',
      description: 'Debris fell during drone interception',
    },
    {
      date: '2026-03-16',
      event: 'Large fire at Fujairah Oil Hub',
      description: 'Drone strike caused major fire at oil facility',
    },
    {
      date: '2026-04-15',
      event: 'First de-escalation discussions',
      description: 'VP Sheikh Mansour bin Zayed spoke with Iran parliament speaker',
    },
    {
      date: '2026-04-20',
      event: 'Iran-linked terror cell dismantled',
      description: '27 individuals arrested in UAE State Security operation',
    },
  ],
  keyFindings: [
    '1,700+ missiles and drones fired at UAE (defense ministry)',
    '6 deaths, 122 injuries from Iranian attacks',
    'UAE embassy in Tehran closed, ambassador recalled',
    'Fujairah Oil Hub attacks: 3 storage tanks destroyed, port operations halted',
    '27 Iran-linked terror suspects arrested (April 20, 2026)',
    '$120 billion stock market losses (Dubai -$45B, Abu Dhabi -$75B)',
    'Stock exchanges closed for 2 days (first closure in recent memory)',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Citizens',
      impact: 'Emergency alerts, shelter orders, 6 deaths',
      sentiment: 'Fear/Anxious' as SentimentBreakdown,
    },
    {
      stakeholder: 'Expatriates',
      impact: 'Visa cancellations reported, mass exodus concerns',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Businesses',
      impact: '$200B+ business losses, tourism devastated',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Military/Government',
      impact: 'Active defense operations, diplomatic withdrawal',
      sentiment: 'Resolute' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Unknown',
    casualties: 6,
    economicLoss: 200000000000,
    affectedPopulation: 9900000,
    fundingAllocated: 8200000000,
  },
  sources: [
    {
      source: 'Al Jazeera - Iran UAE Attack Coverage',
      tier: 'TIER_1' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://www.aljazeera.com/news/2026/3/17/drone-sparks-fire-at-uae-oil-site',
    },
    {
      source: 'UAE Ministry of Foreign Affairs',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://www.mofa.gov.ae/en/mediahub/news/2026/3/1/uae-iran',
    },
  ] as SourceReference[],
}

// Social Crisis — file 4-3
export const socialCrisisData: CrisisEvent = {
  id: 'crisis-4-3',
  type: 'social',
  name: 'UAE Social Crisis',
  severity: 3,
  phoenixStage: 'assessment',
  alertLevel: 'YELLOW',
  timeline: [
    {
      date: '2005',
      event: 'Strike wave over unpaid wages',
      description: '24+ strikes in UAE; 20,000 workers lodged wage complaints',
    },
    {
      date: '2015-03-10',
      event: 'Fountain Views construction protest',
      description: 'Hundreds of workers protested pay dispute; riot police deployed',
    },
    {
      date: '2020',
      event: 'COVID-19 discrimination',
      description: 'Expatriate workers faced escalated discriminatory measures',
    },
    {
      date: '2024-07',
      event: '57 Bangladeshis arrested for protesting',
      description: 'Sentenced to life/10 years; later pardoned by UAE President',
    },
    {
      date: '2025',
      event: 'Azizi developments strike',
      description: '13,000 workers involved in protest over rumor of deaths',
    },
    {
      date: '2026-03',
      event: 'Social media arrests (Iran conflict)',
      description: '375+ arrested for sharing missile footage, "misleading content"',
    },
  ],
  keyFindings: [
    'Kafala system: Workers cannot change jobs without employer permission',
    'Strike prohibition: Criminal offense under UAE Labour Law',
    'Wage Protection System (WPS) introduced 2009; 688,000 inspections 2019-2024',
    '85% of UAE population is foreign (3.1M total)',
    '37 Bangladeshis sentenced for protest (pardoned); 3 received life sentences',
    '375+ arrested March 2026 for social media content about Iran conflict',
    'Anti-Discrimination Law (2021) prohibits discrimination based on nationality/gender',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Migrant Workers',
      impact: 'Kafala restrictions, wage theft risk, deportation threat',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Expatriate Community',
      impact: 'COVID discrimination, social media surveillance',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Citizens',
      impact: 'National-expat tensions, cultural concerns',
      sentiment: 'Mixed' as SentimentBreakdown,
    },
    {
      stakeholder: 'Domestic Workers',
      impact: '948 runaway workers arrested in 2022',
      sentiment: 'Negative' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Structural reform needed',
    casualties: 0,
    economicLoss: 0,
    affectedPopulation: 2635000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'BBC News - Labor Unrest Coverage',
      tier: 'TIER_1' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://bbc.com/news',
    },
    {
      source: 'Human Rights Watch',
      tier: 'TIER_2' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://hrw.org',
    },
    {
      source: 'Walk Free Foundation - Kafala',
      tier: 'TIER_2' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://walkfree.org',
    },
  ] as SourceReference[],
}

// Economic Crisis — file 4-4
export const economicCrisisData: CrisisEvent = {
  id: 'crisis-4-4',
  type: 'economic',
  name: 'UAE Economic Crisis',
  severity: 5,
  phoenixStage: 'resolution',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2009-11-25',
      event: 'Dubai World announced debt delay',
      description: '$26B standstill proposed on Dubai World obligations',
    },
    {
      date: '2009-12-14',
      event: 'Abu Dhabi provided $10B bailout',
      description: 'Emergency funding to prevent sovereign default',
    },
    {
      date: '2010-05-20',
      event: 'Dubai World restructuring agreement',
      description: '$23.5B debt restructured to $14.4B',
    },
    {
      date: '2018',
      event: 'Abraaj Group collapse',
      description: '$1.1B debt, $230M fraud by founder Arif Naqvi',
    },
    {
      date: '2020',
      event: 'NMC Health fraud exposed',
      description: '$5.4B fraud (largest in UAE history)',
    },
    {
      date: '2026-02-28',
      event: 'Iran war economic impact',
      description: '$120B market cap lost, exchanges closed',
    },
  ],
  keyFindings: [
    '2009 Dubai Debt Crisis: $59B Dubai World debt, -40-60% property prices',
    'Abu Dhabi $10B bailout (December 2009); $9.5B additional rescue (March 2010)',
    'Nakheel declared debt-free August 2016; $16B total recovery',
    'NMC Health: $5.4B fraud (largest in UAE history), founder B.R. Shetty',
    'Abraaj: $1.1B debt, Arif Naqvi arrested in London',
    '2026 Iran war: $120B market losses, $200B business losses estimated',
    'Central Bank injected $8.2B liquidity (March-April 2026)',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Expat Workers',
      impact: 'Job losses, exodus during 2009 crisis',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Property Owners/Investors',
      impact: '-40-60% property value loss (2009)',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Banks/Financial Institutions',
      impact: 'Central Bank resilience package required',
      sentiment: 'Strained' as SentimentBreakdown,
    },
    {
      stakeholder: 'Government',
      impact: 'Debt restructuring, regulatory reform',
      sentiment: 'Resilient' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: '6 months (2009 crisis)',
    recoveryTime: '7 years (Nakheel debt-free 2016)',
    casualties: 0,
    economicLoss: 120000000000,
    affectedPopulation: 9900000,
    fundingAllocated: 10000000000,
  },
  sources: [
    {
      source: 'Wikipedia - Dubai Housing Crash 2009',
      tier: 'HIGH' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://en.wikipedia.org/wiki/Dubai_housing_crash_in_2009',
    },
    {
      source: 'Al Jazeera - Exchange Closure',
      tier: 'TIER_1' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://www.aljazeera.com/economy/2026/3/2/why-has-the-uae-closed-its-stock-exchanges',
    },
  ] as SourceReference[],
}

// Reputation Crisis — file 4-5
export const reputationCrisisData: CrisisEvent = {
  id: 'crisis-4-5',
  type: 'reputation',
  name: 'UAE Reputation Crisis',
  severity: 4,
  phoenixStage: 'assessment',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2017',
      event: 'Qatar diplomatic crisis',
      description: 'Saudi Arabia, UAE, Egypt, Bahrain cut ties over "terrorism" claims',
    },
    {
      date: '2019',
      event: 'UAE placed on FATF grey list',
      description: 'Money laundering/terrorist financing concerns',
    },
    {
      date: '2022-01-17',
      event: 'Houthi Abu Dhabi attack',
      description: '3 killed at ADNOC refinery and airport extension',
    },
    {
      date: '2024-02',
      event: 'UAE removed from FATF grey list',
      description: 'Following improved AML/CFT compliance',
    },
    {
      date: '2024-11',
      event: 'Zvi Kogan murder',
      description: 'Chabad rabbi killed; classified as antisemitic terror incident',
    },
    {
      date: '2026-03',
      event: 'Iran war information crackdown',
      description: '35+ arrested for "misleading content" about attacks',
    },
  ],
  keyFindings: [
    'Sudan ICJ case: May 2025 dismissed (14-2 vote); UAE accused of genocide complicity',
    'UAE ranked 158/180 in RSF Press Freedom Index',
    'UAE84 trial: 43+ sentenced to life for "terrorism" (HRW due process concerns)',
    '2022 Houthi attack: 3 killed, 6 injured at Abu Dhabi targets',
    'Zvi Kogan murder: 3 sentenced to death (April 2025)',
    'Freedom House: 30/100 internet freedom score "Not Free"',
    '2026 Iran war: Bellingcat documented discrepancies between official claims and evidence',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'International Community',
      impact: 'ICJ case, FATF scrutiny, human rights criticism',
      sentiment: 'Critical' as SentimentBreakdown,
    },
    {
      stakeholder: 'Tourists/Business',
      impact: 'Travel advisories, reputation damage',
      sentiment: 'Concerned' as SentimentBreakdown,
    },
    {
      stakeholder: 'Dissidents',
      impact: 'UAE84/UAE94 trials, citizenship revocation',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Jewish Community',
      impact: 'Zvi Kogan murder (antisemitic terror)',
      sentiment: 'Grief/Outrage' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Long-term',
    casualties: 4,
    economicLoss: 0,
    affectedPopulation: 9900000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'Human Rights Watch',
      tier: 'TIER_2' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://hrw.org',
    },
    {
      source: 'Freedom House',
      tier: 'TIER_2' as TierLevel,
      credibility: 'Medium-High' as CredibilityScore,
      url: 'https://freedomhouse.org/country/united-arab-emirates',
    },
  ] as SourceReference[],
}

// Communication Crisis — file 4-6
export const communicationCrisisData: CrisisEvent = {
  id: 'crisis-4-6',
  type: 'communication',
  name: 'UAE Communication Crisis',
  severity: 4,
  phoenixStage: 'containment',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2017-05-23',
      event: 'Qatar hacking incident',
      description: 'UAE arranged hacking of Qatar media; planted false quotes',
    },
    {
      date: '2021',
      event: '$35M deepfake voice heist',
      description: 'AI voice cloning used to authorize fraudulent transfer',
    },
    {
      date: '2026-03',
      event: 'Misinformation surge during Iran conflict',
      description: 'Dubai Media Office debunked multiple false claims',
    },
    {
      date: '2026-03',
      event: '35+ arrested for misleading content',
      description: 'Expedited trials for social media posts about attacks',
    },
    {
      date: '2026-04',
      event: 'Bellingcat investigation released',
      description: 'Documented discrepancies between UAE official claims and evidence',
    },
  ],
  keyFindings: [
    '71.4% of cyber threats targeting UAE are state-sponsored',
    'DDoS attacks tripled H2 2025: 3,477 to 10,303 incidents',
    'Alp Services (Swiss firm) contracted by UAE for disinformation in 18 European countries',
    'WhatsApp, Viber, FaceTime, Discord BLOCKED in UAE',
    'Freedom House: 30/100 internet freedom score',
    '$35M deepfake voice heist (2021) - AI voice cloning fraud',
    '35+ arrested March 2026 for "misleading content" about Iran attacks',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Citizens/Residents',
      impact: 'Misinformation exposure, limited communication options',
      sentiment: 'Confused' as SentimentBreakdown,
    },
    {
      stakeholder: 'Journalists/Influencers',
      impact: 'Arrests, deportation threats for content',
      sentiment: 'Fear' as SentimentBreakdown,
    },
    {
      stakeholder: 'International Community',
      impact: 'Alp Services scandal, Qatar hack revelations',
      sentiment: 'Critical' as SentimentBreakdown,
    },
    {
      stakeholder: 'Government',
      impact: 'Credibility challenges, information control costs',
      sentiment: 'Defensive' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Unknown',
    casualties: 0,
    economicLoss: 35000000,
    affectedPopulation: 9900000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'Bellingcat Investigation',
      tier: 'TIER_2' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://www.bellingcat.com/news/2026/04/02/war-uae-iran-infuencer-dubai-conflict-drone-successful-strike-intercept-fire/',
    },
    {
      source: 'European Parliament - Alp Services',
      tier: 'TIER_1' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://www.europarl.europa.eu/doceo/document/P-9-2023-002379_EN.html',
    },
  ] as SourceReference[],
}

// Terrorism/Extremism — file 4-7
export const terrorismCrisisData: CrisisEvent = {
  id: 'crisis-4-7',
  type: 'terrorism',
  name: 'UAE Terrorism and Extremism',
  severity: 5,
  phoenixStage: 'containment',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2014-12-01',
      event: 'Ibolya Ryan murder',
      description: 'Hungarian-American teacher stabbed in Abu Dhabi mall',
    },
    {
      date: '2022-01-17',
      event: 'Houthi Abu Dhabi attack',
      description: '3 killed at ADNOC refinery and airport extension',
    },
    {
      date: '2024-11',
      event: 'Zvi Kogan disappearance',
      description: 'Chabad rabbi missing; later found dead',
    },
    {
      date: '2026-03',
      event: 'Iran-linked network dismantled',
      description: 'Money laundering and terror financing network broken up',
    },
    {
      date: '2026-04-20',
      event: '27 suspects arrested',
      description: 'Iran-linked terror cell dismantled by UAE State Security',
    },
  ],
  keyFindings: [
    '83 organizations designated as terrorist under Federal Law No. 7 (2014)',
    'UAE Local Terrorist List: 714 total entities (326 searchable)',
    '17 of 19 9/11 hijackers transited through UAE',
    '2022 Houthi attack: 3 killed, 6 injured; 1,800+ missiles/drones fired at UAE in 2026',
    'Zvi Kogan murder: 3 sentenced to death (March 2025)',
    'Iran-linked cells: March and April 2026 networks dismantled (37+ arrests total)',
    'UAE on FATF grey list 2019-2024 for AML/CFT concerns',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Citizens',
      impact: 'Direct attacks (3 killed 2022, 6 killed 2026)',
      sentiment: 'Fear' as SentimentBreakdown,
    },
    {
      stakeholder: 'Foreign Nationals/Jews',
      impact: 'Zvi Kogan murder (antisemitic terror)',
      sentiment: 'Outrage' as SentimentBreakdown,
    },
    {
      stakeholder: 'Government/Military',
      impact: 'Active counter-terrorism operations',
      sentiment: 'Resolute' as SentimentBreakdown,
    },
    {
      stakeholder: 'Regional Partners',
      impact: 'Iran escalation, coordinated defense',
      sentiment: 'Alarmed' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Unknown',
    casualties: 9,
    economicLoss: 0,
    affectedPopulation: 9900000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'UAE State Security',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://government.ae',
    },
    {
      source: 'Al Jazeera - Terrorism Coverage',
      tier: 'TIER_1' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://aljazeera.com',
    },
  ] as SourceReference[],
}

// Cyber Threat — file 4-8
export const cyberThreatData: CrisisEvent = {
  id: 'crisis-4-8',
  type: 'cyber',
  name: 'UAE Cyber Threat Crisis',
  severity: 5,
  phoenixStage: 'detection',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2025-H1',
      event: '3,477 DDoS attacks recorded',
      description: 'Average duration 27 minutes',
    },
    {
      date: '2025-H2',
      event: '10,303 DDoS attacks (tripled)',
      description: 'Average duration ~12 hours; 22 attack vectors',
    },
    {
      date: '2026-02-21',
      event: 'Bybit hack',
      description: '$1.5B stolen (largest crypto theft ever)',
    },
    {
      date: '2026-03',
      event: 'AI-powered cyberattack detected',
      description: 'Automated malware behavior adaptation observed',
    },
    {
      date: '2026-04',
      event: 'Handala claims Dubai attack',
      description: '6PB destroyed, 149TB stolen from Dubai Courts/Land/RTA',
    },
  ],
  keyFindings: [
    '500,000-800,000 daily cyberattacks (tripled since Iran war)',
    '128 confirmed incidents in first 2 months of 2026',
    'Bybit hack: $1.5B stolen (400,000+ ETH) by North Korean Lazarus Group',
    'American Hospital Dubai: 450M records breached (June 2025)',
    '71.4% of cyber threats are state-sponsored',
    'Healthcare sector: 267% ransomware increase (24 months)',
    '40% of organizations lack skilled cybersecurity staff',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Government',
      impact: 'Handala attack: 6PB destroyed, critical data stolen',
      sentiment: 'Critical' as SentimentBreakdown,
    },
    {
      stakeholder: 'Financial Sector',
      impact: 'Bybit $1.5B hack, banking DDoS attacks',
      sentiment: 'Alarmed' as SentimentBreakdown,
    },
    {
      stakeholder: 'Healthcare',
      impact: '450M patient records exposed (American Hospital Dubai)',
      sentiment: 'Devastated' as SentimentBreakdown,
    },
    {
      stakeholder: 'Businesses',
      impact: 'Ransomware, data theft, operational disruption',
      sentiment: 'Concerned' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Variable (hours to days)',
    recoveryTime: 'Weeks to months',
    casualties: 0,
    economicLoss: 1500000000,
    affectedPopulation: 9900000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'Gulf News - Cyberattack Coverage',
      tier: 'TIER_1' as TierLevel,
      credibility: 'High' as CredibilityScore,
      url: 'https://gulfnews.com',
    },
    {
      source: 'UAE Cyber Security Council',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://government.ae',
    },
  ] as SourceReference[],
}

// Public Health — file 4-9
export const publicHealthData: CrisisEvent = {
  id: 'crisis-4-9',
  type: 'public-health',
  name: 'UAE Public Health Crisis',
  severity: 3,
  phoenixStage: 'recovery',
  alertLevel: 'GREEN',
  timeline: [
    {
      date: '2020-01-29',
      event: 'First COVID-19 case reported',
      description: 'First Middle Eastern country to report COVID-19',
    },
    {
      date: '2020-03',
      event: 'Lockdown measures begin',
      description: 'Night curfew, Al Ras area lockdown, Dubai 24-hour curfew',
    },
    {
      date: '2020-12',
      event: 'Vaccination campaign launched',
      description: 'Worlds second-fastest vaccination campaign',
    },
    {
      date: '2021',
      event: 'Hayat-Vax launched',
      description: 'First Arab-made COVID-19 vaccine',
    },
    {
      date: '2023-05-24',
      event: 'COVID-19 statistics stabilized',
      description: '1,067,030 total cases, 2,349 deaths (0.22% CFR)',
    },
    {
      date: '2025-02',
      event: 'First clade Ib mpox case',
      description: 'First case of new mpox variant reported to WHO',
    },
  ],
  keyFindings: [
    'COVID-19: 1,067,030 cases, 2,349 deaths (0.22% CFR)',
    'Worlds second-fastest vaccination campaign; 82.82% received at least one dose',
    'Hayat-Vax: First COVID vaccine produced in Arab world',
    'AED 100B economic stimulus committed during COVID',
    '2,154 tons of medical aid shipped to 135 countries',
    'MERS-CoV: 94 UAE cases since 2013, 12 deaths (13% CFR)',
    '800+ food poisoning cases in Dubai (H1 2025), 200+ Salmonella confirmed',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'General Population',
      impact: 'COVID deaths, mental health impacts (>50% affected)',
      sentiment: 'Resilient' as SentimentBreakdown,
    },
    {
      stakeholder: 'Migrant Workers',
      impact: 'Overcrowded dormitories, heightened infection risk',
      sentiment: 'Negative' as SentimentBreakdown,
    },
    {
      stakeholder: 'Healthcare System',
      impact: 'Capacity strain, then recovery and strengthening',
      sentiment: 'Strained then Resilient' as SentimentBreakdown,
    },
    {
      stakeholder: 'International Community',
      impact: 'Humanitarian aid recipient and provider',
      sentiment: 'Grateful' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: '3 months (initial COVID lockdown)',
    recoveryTime: '2+ years',
    casualties: 2349,
    economicLoss: 0,
    affectedPopulation: 1067030,
    fundingAllocated: 100000000000,
  },
  sources: [
    {
      source: 'WHO - UAE Health Data',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://who.int',
    },
    {
      source: 'UAE Government Portal',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://u.ae',
    },
  ] as SourceReference[],
}

// Early Warning — file 4-10
export const earlyWarningData: CrisisEvent = {
  id: 'crisis-4-10',
  type: 'early-warning',
  name: 'UAE Early Warning Crisis Indicators',
  severity: 5,
  phoenixStage: 'detection',
  alertLevel: 'RED',
  timeline: [
    {
      date: '2025-12-30',
      event: 'National emergency exercise conducted',
      description: 'Multi-agency drill testing response time and coordination',
    },
    {
      date: '2026-02-28',
      event: 'Iran war begins',
      description: 'Missile/drone attacks on UAE begin',
    },
    {
      date: '2026-03-02',
      event: 'Stock exchanges closed',
      description: 'First closure in recent memory due to conflict',
    },
    {
      date: '2026-03-06',
      event: 'US travel advisory Level 3',
      description: '"Reconsider Travel" issued; non-emergency staff ordered to leave',
    },
    {
      date: '2026-03-15',
      event: 'Nationwide missile threat alert',
      description: 'Ground stops at Dubai and Abu Dhabi airports',
    },
    {
      date: '2026-04-15',
      event: 'De-escalation discussions begin',
      description: 'First high-level UAE-Iran contact since ties deteriorated',
    },
  ],
  keyFindings: [
    '1,700+ missiles and drones fired at UAE (defense ministry)',
    '6 deaths, 122 injuries from Iranian attacks',
    'US Level 3 "Reconsider Travel" advisory issued March 3, 2026',
    'DFM dropped 4.7% on reopening (steepest since mid-2022)',
    '4-6 months strategic reserves confirmed; no food shortages',
    '$307B deposit flight risk if war worsens (S&P)',
    '25-30% increase in mental health service demand',
  ] as KeyFinding[],
  stakeholderImpacts: [
    {
      stakeholder: 'Residents',
      impact: 'Emergency alerts, shelter orders, anxiety surge',
      sentiment: 'Anxious' as SentimentBreakdown,
    },
    {
      stakeholder: 'Expatriates',
      impact: 'Visa cancellations, capital outflows, departure',
      sentiment: 'Fearful' as SentimentBreakdown,
    },
    {
      stakeholder: 'Businesses',
      impact: 'Market volatility, tourism collapse, operational disruption',
      sentiment: 'Critical' as SentimentBreakdown,
    },
    {
      stakeholder: 'Government',
      impact: 'Emergency response activation, diplomatic crisis',
      sentiment: 'Resolute' as SentimentBreakdown,
    },
  ],
  responseMetrics: {
    containmentTime: 'Ongoing',
    recoveryTime: 'Unknown',
    casualties: 6,
    economicLoss: 200000000000,
    affectedPopulation: 9900000,
    fundingAllocated: 0,
  },
  sources: [
    {
      source: 'UAE Ministry of Foreign Affairs',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://www.mofa.gov.ae',
    },
    {
      source: 'US Travel Advisory',
      tier: 'TIER_0' as TierLevel,
      credibility: 'Very High' as CredibilityScore,
      url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-arab-emirates-travel-advisory.html',
    },
  ] as SourceReference[],
}

// Crisis Overview
export const crisisOverview: CrisisOverview = {
  activeCrises: 7,
  byType: {
    'natural-disaster': naturalDisasterData,
    'geopolitical': geopoliticalCrisisData,
    'social': socialCrisisData,
    'economic': economicCrisisData,
    'reputation': reputationCrisisData,
    'communication': communicationCrisisData,
    'terrorism': terrorismCrisisData,
    'cyber': cyberThreatData,
    'public-health': publicHealthData,
    'early-warning': earlyWarningData,
  },
  bySeverity: {
    1: [],
    2: [],
    3: [socialCrisisData, publicHealthData],
    4: [naturalDisasterData, reputationCrisisData, communicationCrisisData],
    5: [geopoliticalCrisisData, economicCrisisData, terrorismCrisisData, cyberThreatData, earlyWarningData],
  },
  byStage: {
    detection: [cyberThreatData, earlyWarningData],
    assessment: [socialCrisisData, reputationCrisisData],
    containment: [naturalDisasterData, geopoliticalCrisisData, communicationCrisisData, terrorismCrisisData],
    resolution: [economicCrisisData],
    recovery: [publicHealthData],
  },
  alertSummary: {
    RED: [geopoliticalCrisisData, economicCrisisData, communicationCrisisData, terrorismCrisisData, cyberThreatData, earlyWarningData],
    YELLOW: [naturalDisasterData, socialCrisisData, reputationCrisisData],
    GREEN: [publicHealthData],
  },
  criticalCrises: [geopoliticalCrisisData, economicCrisisData, terrorismCrisisData, cyberThreatData, earlyWarningData],
}

// Alias for index.ts compatibility
export const terrorismExtremismData = terrorismCrisisData;
