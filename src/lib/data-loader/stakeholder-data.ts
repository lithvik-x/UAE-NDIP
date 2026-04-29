/**
 * Stakeholder Intelligence Data
 *
 * UAE National Digital Intelligence Platform - Category 7
 * Stakeholder profiles extracted from markdown research files 7-1 through 7-10
 */

import type {
  StakeholderIntelligence,
  StakeholderMetrics,
  StakeholderProgram,
  SocialAccount,
  UAERelevance,
  AlertLevel,
  SourceReference,
  KeyFinding,
  CredibilityScore,
  SentimentBreakdown,
  TierLevel,
} from './types'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function createCredibilityScore(
  tier: TierLevel,
  score: number,
  sources: number,
  lastVerified: string
): CredibilityScore {
  return { tier, score, sources, lastVerified }
}

function createUAERelevance(score: number, level: 'critical' | 'high' | 'medium' | 'low', justification?: string): UAERelevance {
  return { score, level, justification }
}

function createSentimentBreakdown(positive: number, negative: number, neutral: number): SentimentBreakdown {
  return {
    positive,
    negative,
    neutral,
    overall: Math.round((positive - negative + 50) * 0.5),
    volume: positive + negative + neutral,
  }
}

function createKeyFinding(finding: string, metric: string | number, source: string, tier: TierLevel, alert?: AlertLevel): KeyFinding {
  return { finding, metric, source, tier, alert }
}

function createSource(name: string, url: string, tier: TierLevel, date: string): SourceReference {
  return { name, url, tier, date }
}

function createStakeholderProgram(
  name: string,
  description: string,
  status: 'active' | 'completed' | 'planned',
  budget?: number
): StakeholderProgram {
  return { name, description, status, budget }
}

// ============================================================================
// STAKEHOLDER DATA
// ============================================================================

// ============================================================================
// INDIVIDUAL STAKEHOLDER EXPORTS
// ============================================================================

export const namaData: StakeholderIntelligence = {
  id: 'stakeholder-nama',
  name: 'National Media Authority (NMA)',
  nameAr: 'الهيئة الوطنية للإعلام',
  type: 'government',
  mandate: 'Federal regulatory authority established by Federal Decree-Law No. 11 of 2025 (December 2025). Succeeded UAE Media Council, National Media Office, and Emirates News Agency (WAM). Operates with legal, administrative, and financial independence under UAE Cabinet oversight. Regulates all media activities including print, broadcast, digital media, publishing, and free zone content operations. Monitors all media content printed, broadcast, posted, or aired in UAE. Acccredits foreign media representatives.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(35, 45, 20),
    credibility: createCredibilityScore(1, 92, 34, '2026-04-28'),
    programs: [
      createStakeholderProgram('Content Standards Framework', '20-point content standards for all media platforms operating in UAE covering religious, state, social, privacy, and practice categories', 'active'),
      createStakeholderProgram('Penalty Enforcement', 'Administrative penalties via Cabinet Decision No. 42/2025 ranging from AED 5,000 to AED 1,000,000 for violations', 'active', 0),
      createStakeholderProgram('Media Licensing', 'Over 100 license and permit fees via Cabinet Decision No. 41/2025 including influencer/Social Media permits', 'active'),
      createStakeholderProgram('Age Classification System', 'Film ratings (G, PG, PG13, PG15, 15+, 18+, 21+), book ratings (E, 3-5, 6-9, 10-12, 13+, 17+, 21+), video game ratings (3+, 7+, 12+, 16+, 18+, 21+)', 'active'),
      createStakeholderProgram('WAM Operations', 'State news agency operating since November 1976 with 6 international offices and services in Arabic, English, French, Portuguese, Hebrew', 'active'),
      createStakeholderProgram('Amen Reporting Platform', 'AI-powered community reporting platform for misleading content, unsafe content, and non-compliant advertising', 'active'),
      createStakeholderProgram('Press Freedom Monitoring', 'Annual press freedom index tracking and international benchmarking', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaenma', url: 'https://twitter.com/uaenma', verified: true },
    { platform: 'instagram', handle: '@uaenma', url: 'https://www.instagram.com/uaenma/', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Press Freedom Index 2025', '26.91 points (RSF)', 'RSF Press Freedom Index 2025', 2, 'YELLOW'),
    createKeyFinding('Press Freedom Ranking', '164th out of 180 countries', 'RSF World Press Freedom Index 2024', 2, 'YELLOW'),
    createKeyFinding('Internet Freedom Score', '30/100 "Not Free"', 'Freedom House 2023', 2, 'YELLOW'),
    createKeyFinding('Content penalty range', 'AED 5,000 - AED 1,000,000', 'Cabinet Decision No. 42/2025', 1, undefined),
    createKeyFinding('Content standards count', '20 specific standards', 'NMA Guidelines 2025', 1, undefined),
    createKeyFinding('NMA Establishment', 'December 18, 2025 via FDL 11/2025', 'UAE Official Gazette', 1, undefined),
    createKeyFinding('Influencer permit cost', 'Free first 3 years, then AED 1,000/year', 'NMA Mu\'lin Permit 2025', 1, undefined),
    createKeyFinding('Operating without permit fine', 'AED 10,000 first, AED 40,000 repeat', 'NMA Enforcement 2025', 1, undefined),
    createKeyFinding('WAM international offices', '6 (Cairo, Beirut, Washington D.C., Sanaa, Brussels, Islamabad)', 'WAM Official', 2, undefined),
    createKeyFinding('Websites blocked Q4 2022', '3,766 by TDRA', 'Freedom House 2023', 2, 'YELLOW'),
    createKeyFinding('Mobile penetration', '200.9%', 'Freedom House 2023', 2, undefined),
    createKeyFinding('5G coverage', '94%', 'Freedom House 2023', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(98, 'critical', 'Core regulatory body for all media content, licensing, and compliance in UAE'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('NMA Official', 'https://www.nma.gov.ae', 0, '2026-04-28'),
    createSource('UAE Legislation', 'https://uaelegislation.gov.ae', 0, '2026-04-28'),
    createSource('RSF Press Freedom Index', 'https://rsf.org', 2, '2026-04-01'),
    createSource('Freedom House Internet Freedom', 'https://freedomhouse.org', 2, '2026-03-15'),
    createSource('Clyde & Co Legal Analysis', 'https://www.clydeco.com', 1, '2026-04-20'),
    createSource('BSA Law UAE Media', 'https://bsalaw.com', 1, '2026-04-15'),
    createSource('Gulf News', 'https://gulfnews.com', 2, '2026-04-10'),
    createSource('Khaleej Times', 'https://www.khaleejtimes.com', 2, '2026-04-12'),
    createSource('Wikipedia WAM', 'https://en.wikipedia.org/wiki/Emirates_News_Agency', 3, '2026-03-28'),
  ],
  lastUpdated: '2026-04-29',
}

export const nmcDubaiData: StakeholderIntelligence = {
  id: 'stakeholder-nmc-dubai',
  name: 'Dubai Media Council / NMC Dubai',
  nameAr: 'مجلس دبي للإعلام',
  type: 'government',
  mandate: 'Regulatory authority for media operations in Dubai. Established under Law No. (5) of 2022, expanded by Law No. (29) of 2024. Chairman: Sheikh Ahmed bin Mohammed bin Rashid Al Maktoum. Vice Chairperson: Mona Al Marri. Oversees Dubai Media City (1,300-4,000+ companies, 33,000-40,000+ professionals), Dubai Production City (6,700+ professionals), Dubai Studio City (2,800+ creative individuals, 358,000 min content/year), content certification, film censorship reform (abolished December 2021), influencer regulation under Federal Decree Law No. 55 of 2023 (effective Feb 1, 2026), and Creators HQ with AED 150 million Content Creators Support Fund targeting 10,000 influencers.',
  metrics: {
    digitalReach: 45000000,
    engagement: 2.1,
    sentiment: createSentimentBreakdown(55, 25, 20),
    credibility: createCredibilityScore(1, 95, 28, '2026-04-28'),
    programs: [
      createStakeholderProgram('Dubai Media City Free Zone', '1,300-4,000+ companies, 33,000-40,000+ professionals, 25 years (2001-2026), Arab Media Capital 2020', 'active', 0),
      createStakeholderProgram('Dubai Production City', 'Production, printing, publishing, packaging free zone, 6,700+ professionals, 11,000-50,000 sq.ft sound stages', 'active', 0),
      createStakeholderProgram('Dubai Studio City', 'Film/TV production hub, 2,800+ creative individuals, 358,000 minutes content/year, 12% growth 2024', 'active', 0),
      createStakeholderProgram('Content Certification System', 'Film ratings: G, PG, PG-13, PG-15, 15+, 18+, 21+. Video games: 3+, 7+, 12+, 16+, 18+, 21+. Books: E, 3-5, 6-9, 10-12, 13+, 17+, 21+', 'active'),
      createStakeholderProgram('Film Censorship Reform', 'Censorship abolished December 19, 2021, +21 classification introduced for uncut international versions', 'completed'),
      createStakeholderProgram('Influencer Regulation', 'Federal Decree Law No. 55 of 2023, effective February 1, 2026. Min age: 25, Min followers: 1,000, Min engagement: 2%', 'active'),
      createStakeholderProgram('Creators HQ Initiative', 'AED 150 million fund, 10,000 influencer target, Jumeirah Emirates Towers, 100+ new creators daily', 'active', 150000000),
      createStakeholderProgram('1 Billion Followers Summit', 'January 9-11, 2026, Dubai, 30,000 attendees, 15,000 creators, 350+ speakers', 'active'),
      createStakeholderProgram('Media Economy GDP Target', '1.4% current to 3% by 2033. Creative Economy: AED 21.9B (~4.6%) to 5% by 2025', 'active'),
      createStakeholderProgram('Dubai Media Institution (DMI)', 'Dubai+ platform, Dubai TV, Sama Dubai, multiple radio channels, Ramadan 2026 largest programming cycle', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'linkedin', handle: 'Dubai Media Council', url: 'https://www.dubaimediacouncil.ae', verified: true },
    { platform: 'instagram', handle: '@dubaimediacouncil', url: 'https://instagram.com/dubaimediacouncil', verified: true },
    { platform: 'twitter-x', handle: '@DubaiMediaCouncil', url: 'https://twitter.com/DubaiMediaCouncil', verified: true },
  ],
  keyFindings: [
    createKeyFinding('DMC companies', '1,300+ (English) / 4,000+ (Arabic)', 'DMC Official Data 2026', 1, undefined),
    createKeyFinding('DMC professionals', '40,000+ (English) / 33,000 (Arabic)', 'DMC Workforce Report 2026', 1, undefined),
    createKeyFinding('DPC professionals', '6,700+', 'DPC Official Data 2026', 1, undefined),
    createKeyFinding('DSC workforce', '2,800+ creative individuals', 'DSC Official Data 2026', 1, undefined),
    createKeyFinding('DSC content production', '358,000 minutes in 12 months', 'DSC Annual Report 2024', 1, undefined),
    createKeyFinding('DSC 2024 growth', '12% global talent community growth', 'DSC Official 2024', 1, undefined),
    createKeyFinding('Film censorship abolished', 'December 19, 2021', 'UAE Official Gazette', 1, undefined),
    createKeyFinding('Film rating +21 introduced', 'Uncensored international versions allowed', 'Variety/Forbes 2021', 1, undefined),
    createKeyFinding('Influencer regulation effective', 'February 1, 2026', 'UAE Media Council', 1, undefined),
    createKeyFinding('Influencer min age (Dubai)', '25 years (increased from 21)', 'Dubai Regulation', 1, undefined),
    createKeyFinding('Influencer min followers', '1,000 minimum, 2% engagement', 'Dubai Stratrich', 1, undefined),
    createKeyFinding('Individual license cost', 'AED 5,000 - 10,000', 'Dubai License Fee', 1, undefined),
    createKeyFinding('Agency license cost', 'AED 15,000 - 30,000', 'Dubai License Fee', 1, undefined),
    createKeyFinding('Max penalty', 'Up to AED 1,000,000', 'Federal Media Law', 1, undefined),
    createKeyFinding('Creators HQ fund', 'AED 150 million', 'UAE Cabinet 2024', 1, undefined),
    createKeyFinding('Creators HQ location', 'Jumeirah Emirates Towers, Dubai', 'Creators HQ Official', 1, undefined),
    createKeyFinding('Creators HQ daily new', '100+ daily new creators', 'Creators HQ 2026', 1, undefined),
    createKeyFinding('Summit 1 Billion Followers', 'January 9-11, 2026, Dubai', 'Summit Official 2026', 1, undefined),
    createKeyFinding('Summit attendees', '30,000 attendees, 15,000 creators, 350+ speakers', 'Summit Official 2026', 1, undefined),
    createKeyFinding('Media GDP contribution', '1.4% current, target 3% by 2033', 'Dubai Creative Economy', 1, undefined),
    createKeyFinding('Creative Economy value', 'AED 21.9 billion (~4.6% of GDP)', 'Dubai Creative 2026', 1, undefined),
    createKeyFinding('Creative companies target', '8,300 to 15,000 by 2025 (+80%)', 'Dubai Strategy', 1, undefined),
    createKeyFinding('Creators target', '70,000 to 140,000 by 2025 (+100%)', 'Dubai Strategy', 1, undefined),
    createKeyFinding('Digital media revenue', '$11.6B, expected $18.5B', 'Digital Media 2026', 1, undefined),
    createKeyFinding('FDI inflows (creative)', 'AED 18.86 billion (2024)', 'Dubai Economy 2024', 1, undefined),
    createKeyFinding('New jobs created', '23,517 (2024)', 'Dubai Economy 2024', 1, undefined),
    createKeyFinding('Projects attracted', '971 cultural/creative (2024)', 'Dubai Economy 2024', 1, undefined),
    createKeyFinding('in5 startups nurtured', '1,100+ since 2013', 'in5 Official', 1, undefined),
    createKeyFinding('in5 funding raised', 'Over AED 9 billion since 2013', 'in5 Official', 1, undefined),
    createKeyFinding('Core sector jobs', '175,000+', 'Dubai Media 2026', 1, undefined),
    createKeyFinding('Sound stage sizes', '11,000-50,000 sq.ft with water tanks, grids, elephant doors', 'DPC/DSC Facilities', 1, undefined),
    createKeyFinding('Tview TV ratings', 'First in UAE, launched October 2012, Kantar Media audit', 'Emirates Media', 1, undefined),
    createKeyFinding('MBC/Al-Arabiya moved', 'Both relocated from DMC to Riyadh', 'Industry Report', 2, undefined),
    createKeyFinding('Advertiser permit (free)', '3 years free, then AED 1,000/year', 'UAE Media Council', 1, undefined),
    createKeyFinding('Permits issued', 'Over 1,800 since July 2025', 'UAE Media Council', 1, undefined),
    createKeyFinding('DMC landmark productions', 'Star Trek Beyond, Mission Impossible: Ghost Protocol', 'DSC Official', 1, undefined),
    createKeyFinding('DMC Notable tenants', 'BBC, CNN, MBC, Reuters, Forbes, Sony, Discovery, WPP, Publicis', 'DMC Official', 1, undefined),
    createKeyFinding('DMC Amphitheatre', '15,000+ seats', 'DMC Venue', 1, undefined),
    createKeyFinding('DMI contact', 'Phone: 0097143077000, Awd Metha, Dubai', 'DMI Official', 1, undefined),
  ],
  uaeRelevance: createUAERelevance(98, 'critical', 'Dubai accounts for 60%+ of UAE media ecosystem. Primary regulatory body for all media activities in Dubai per Decree No. (66) of 2024. Strategic 2025-2033 GDP contribution targets of 3-5%.'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Dubai Media Council', 'https://www.dubaimediacouncil.ae', 0, '2026-04-28'),
    createSource('UAE Media Council', 'https://uaemc.gov.ae', 0, '2026-04-28'),
    createSource('Dubai Media City', 'https://dmc.ae', 0, '2026-04-28'),
    createSource('Dubai Production City', 'https://dpc.ae', 0, '2026-04-28'),
    createSource('Dubai Studio City', 'https://dubaistudiocity.ae', 0, '2026-04-28'),
    createSource('Dubai Media Institution', 'https://www.dmi.gov.ae', 0, '2026-04-28'),
    createSource('Creators HQ', 'https://creatorshq.com', 1, '2026-04-28'),
    createSource('Tview Emirates', 'https://tview.ae', 1, '2026-04-28'),
    createSource('Variety - UAE Film Censorship', 'https://variety.com', 1, '2026-04-28'),
    createSource('Forbes - UAE Media Reform', 'https://forbes.com', 1, '2026-04-28'),
    createSource('Gulf News - Influencer Fines', 'https://gulfnews.com', 1, '2026-04-28'),
    createSource('Khaleej Times - Age Rating', 'https://khaleejtimes.com', 1, '2026-04-28'),
    createSource('PR Newswire - Dubai Economy', 'https://prnewswire.com', 1, '2026-04-28'),
  ],
  lastUpdated: '2026-04-29',
}

export const moiData: any = {
  id: 'stakeholder-moi',
  name: 'Ministry of Interior',
  nameAr: 'وزارة الداخلية',
  type: 'government',
  mandate: 'Primary law enforcement and internal security ministry. Oversees 7 police forces across Emirates, counter-terrorism operations (83 designated organizations), cybercrime enforcement (Federal Decree-Law No. 34 of 2021), civil defense, and emergency response. Led by Sheikh Saif bin Zayed Al Nahyan since 2006. Portal visitors exceed 252 million.',
  metrics: {
    digitalReach: 252010755,
    engagement: 2.4,
    sentiment: createSentimentBreakdown(45, 30, 25),
    credibility: createCredibilityScore(0, 92, 35, '2026-04-27'),
    programs: [
      createStakeholderProgram('Counter-Terrorism Framework', 'Federal Law No. 7 of 2014 — 83 designated terrorist organizations including Al-Qaeda, Taliban, Hezbollah, ISIS, Muslim Brotherhood', 'active', 0),
      createStakeholderProgram('Cybercrime Law Enforcement', 'Federal Decree-Law No. 34 of 2021 — 2-year minimum to life imprisonment, 200,000 to 4,000,000 AED fines', 'active', 0),
      createStakeholderProgram('Civil Defense Operations', 'Hassantuk fire safety system — 65,000+ buildings monitored 24/7', 'active', 0),
      createStakeholderProgram('UAE State Security Apparatus', 'Established June 10, 1974 — Direct presidential control, no institutional oversight', 'active', 0),
      createStakeholderProgram('Immigration & Customs', 'ICP/GDRFA — 61.5M passengers, 12.1M entry permits processed 2025', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@moiuae', url: 'https://twitter.com/moiuae', verified: true },
    { platform: 'instagram', handle: '@moiuae', url: 'https://instagram.com/moiuae', verified: true },
    { platform: 'website', handle: 'moi.gov.ae', url: 'https://www.moi.gov.ae', verified: true },
  ],
  entity: {
    officialName: 'Ministry of Interior, UAE',
    minister: 'Sheikh Saif bin Zayed Al Nahyan (since Feb 11, 2006)',
    undersecretary: 'Major General Khalifa Hareb Al Khaili',
    directorGeneralPoliceJustice: 'Brigadier Dr. Ali Rashid Al Nuaimi',
    address: 'Zayed Sports City - Arabian Gulf Street - Near Sheikh Zayed Grand Mosque, P.O. Box 389',
    customerService: '8005000 (24/7)',
    email: 'moi@moi.gov.ae',
    emergencyNumber: '999',
    totalPortalVisitors: 252010755,
    website: 'moi.gov.ae',
  },
  ministerialTimeline: [
    { name: 'Mubarak bin Mohammed Al Nahyan', period: 'Dec 9, 1971 – Nov 19, 1990' },
    { name: 'Hamooda bin Ali', period: 'Nov 20, 1990 – Mar 24, 1997' },
    { name: 'Mohammed Saeed Al Badi', period: 'Mar 25, 1997 – Feb 10, 2006' },
    { name: 'Saif bin Zayed Al Nahyan', period: 'Feb 11, 2006 – present' },
  ],
  keyDepartments: [
    'Traffic and Licensing (20+ services)',
    'Civil Defense',
    'General Police Commands',
    'Punitive and Reform Institutions',
    'Digital Participation',
    'Open Data',
    'Media Center',
  ],
  eservices: [
    'Pay Traffic Fines',
    'Issue/Renew Driving Licenses',
    'Vehicle Registration/Transfer',
    'Criminal Record Certificates',
    'File Criminal/Traffic Reports',
    '"Hassantuk" Fire Safety System',
  ],
  mobileApps: [
    'UAE MOI (Android, Apple, Huawei)',
    '"Himayati" (protection app)',
  ],
  stateSecurity: {
    established: 'June 10, 1974 (Federal Decree)',
    originalAuthority: 'Ministry of Interior',
    currentAuthority: 'Direct control of UAE President',
    currentHead: 'Khaled bin Mohammed bin Zayed al-Nahyan',
    legalFramework: 'Federal Law No. 2 of 2003; 2011 amendments (never published)',
    website: 'ssd.gov.ae',
    twitter: '@ssd_gov_ae',
    documentedPowers: [
      'Article 14: Any person/organization can be investigated as threat to state',
      'Article 13: SSA can expand jurisdiction outside UAE',
      'Article 19: SSA can access any information including personal data without justification',
      'SSA President can detain suspects for up to 3 months',
      'Can establish security offices in any ministry, government office, embassy, or consulate abroad',
    ],
    documentedViolations: [
      'Enforced disappearance',
      'Torture (16 documented methods)',
      'Arbitrary detention',
      'Secret detention',
      'Solitary confinement',
      'Fabricated "terrorism" charges',
      'Unfair trials',
      'Family reprisals',
    ],
  },
  policeForces: [
    { force: 'Abu Dhabi Police', estDate: '—', personnel: '—', stations: '—', emergency: '999/8003333' },
    { force: 'Dubai Police Force', estDate: 'June 1, 1956', personnel: '30,000+ (17,500+ sworn)', stations: '12 + 22 smart', emergency: '999' },
    { force: 'Sharjah Police Force', estDate: '1967', personnel: '—', stations: 'Multiple', emergency: '999' },
    { force: 'Ajman Police Force', estDate: '—', personnel: '—', stations: '—', emergency: '999' },
    { force: 'Umm Al Quwain Police', estDate: '—', personnel: '—', stations: '—', emergency: '999' },
    { force: 'Ras Al Khaimah Police', estDate: '—', personnel: '—', stations: '—', emergency: '999' },
    { force: 'Fujairah Police', estDate: '—', personnel: '—', stations: '—', emergency: '999' },
  ],
  dubaiPoliceStats: {
    commanderInChief: 'Abdullah Khalifa Al Marri (since 2017)',
    deputyChief: 'Dhahi Khalfan Tamim (since 2013)',
    crimeDetectionRate: '99% (2024)',
    emergencyResponseTime: '2 min 24 sec (Q3 2023)',
    jurisdiction: '4,114 km²',
    populationServed: '4,177,059',
    smartPoliceStations: '22 (24/7, 6 languages)',
    totalEmployees: '30,000+',
    swornMembers: '17,500+',
  },
  dubaiPoliceFleet: [
    'Bugatti Veyron (Guinness record: 253 mph fastest police car)',
    'Lamborghini Aventador',
    'Ferrari FF',
    'Aston Martin models',
    'Dodge Chargers (standard patrol)',
    'Toyota Land Cruisers',
  ],
  counterTerrorism: {
    law: 'Federal Law No. 7 of 2014 (Combating Terrorism Crimes)',
    maxPenalty: 'Death sentence',
    designatedOrganizations: 83,
    uaeArmedForcesNickname: '"Little Sparta" (by US Defense Secretary)',
    stateParty: 'All main UN terrorism treaties',
    internationalForces: 'Only Arab country with forces alongside US in Afghanistan',
    designatedGroups: [
      'Al-Qaeda',
      'Taliban',
      'Hezbollah',
      'ISIS',
      'Muslim Brotherhood',
      'Houthis',
      'And 76 others',
    ],
    nineElevenConnections: {
      hijackersThroughDubai: '17 of 19',
      uaeInvestorsFunded: 'Haqqani Network, Lashkar-e-Taiba',
      notableCapture: 'Abd al-Rahim al-Nashiri captured in UAE (November 2002)',
    },
  },
  cybercrimeLaw: {
    law: 'Federal Decree-Law No. 34 of 2021',
    effectiveDate: 'January 2, 2022',
    previousLaw: 'Federal Decree-Law No. 5 of 2012 (since 2015)',
    minPenalty: '2 years imprisonment + 200,000 AED fine',
    maxPenalty: 'Life imprisonment + 4,000,000 AED fine',
    offenses: [
      'Unauthorized access to computers',
      'Data theft',
      'Hacking, phishing, data breaches',
      'Publication of extremist/discriminatory/pornographic materials',
      'Cryptocurrency fraud, money laundering',
      'Online harassment, cyberstalking, blackmail',
      'Defamation',
      'Privacy invasion',
      'Internet fraud',
      'Unauthorized fundraising',
      'Creating fake emails/websites',
      'Illegal interception',
      'Digital evidence tampering',
    ],
  },
  civilDefence: {
    dubai: {
      established: 'June 17, 1962',
      commander: 'Lt. Gen. Expert Rashid Thani Rashid Al Matrooshi (since 2003)',
      personnel: '3,500+ (1,604 military, 472 civilian as of 2018)',
      stations: 26,
      emergency: '997',
      buildingsMonitored: '65,000 (24/7 smart system)',
    },
    abuDhabi: {
      directorGeneral: 'Salem Abdullah bin Barak Al Dhaheri',
      vision: "\"One of the world's best cities for sustainable safe and protected society\"",
      keyPrograms: ['Hassantuk', 'HEMAYA', 'Community Responder App'],
    },
    newAuthority: {
      established: 'April 7, 2025 (new law)',
      focus: 'Public safety, emergency response efficiency',
      penalties: '2 months-6 months imprisonment, 20,000-250,000 AED fines',
    },
    growthMetrics: ['+269%', '+225%'],
  },
  immigration: {
    authorities: [
      { name: 'ICP (Federal Authority for Identity, Citizenship, Customs & Port Security)', responsibilities: 'Identity, citizenship, passports, entry/residence, port security' },
      { name: 'GDRFA Dubai', responsibilities: 'Entry permits, residency, Golden Visa, citizenship, passports' },
      { name: 'Dubai Customs', responsibilities: 'Border security, trade facilitation, smart services' },
    ],
    icpLeadership: [
      'H.E. Major General Suhail Saeed Al Khaili – Director General',
      'H.E. Mohammed Ahmed Al Kuwaiti – Acting Director General of Ports',
      'H.E. Khalifa Hamad Al Shamsi – Acting Executive Director, Land Ports',
    ],
    icpStats2025: {
      entryPermits: 12116843,
      residenceTransactions: 6998414,
      passengers: 61530701,
      smartGates: 26374304,
    },
  },
  emergencyNumbers: [
    { service: 'Police', number: '999', authority: 'All emirates', app: 'AD999' },
    { service: 'Ambulance', number: '998', authority: 'All emirates', app: 'DCAS SOS' },
    { service: 'Fire', number: '997', authority: 'Civil Defence', app: 'AD999' },
    { service: 'Coast Guard', number: '996', authority: 'Abu Dhabi National Guard', app: '—' },
    { service: 'Search & Rescue', number: '995', authority: '—', app: '—' },
    { service: 'General Emergency', number: '112', authority: '—', app: '—' },
    { service: 'Electricity Emergency (Abu Dhabi)', number: '8002332', authority: '—', app: '—' },
    { service: 'Electricity/Water (Dubai)', number: '991', authority: '—', app: '—' },
    { service: 'Electricity/Water (Northern)', number: '991/992', authority: '—', app: '—' },
    { service: 'Police Non-Emergency (Dubai)', number: '901', authority: 'Dubai Police', app: '—' },
    { service: 'Aman Service (Abu Dhabi)', number: '8002626', authority: 'Abu Dhabi Police', app: '—' },
    { service: 'Al Ameen (Dubai)', number: '8004444', authority: 'Dubai Police', app: '—' },
    { service: 'Human Trafficking Hotline', number: '8007283', authority: 'EWAA', app: '—' },
    { service: 'Violence/Abuse (Women/Children)', number: '116111', authority: 'MOI', app: '—' },
    { service: 'Domestic Worker Hotline', number: '800988', authority: 'CDA', app: '—' },
  ],
  humanRightsCases: [
    { case: 'UAE94', year: '2012-2013', keyFacts: '94 arrested for signing democratic reforms petition', outcome: '69 sentenced 7-15 years' },
    { case: 'UAE84', year: '2025', keyFacts: '53 appealed convictions rejected', outcome: '43 life, 5=15yr, 5=10yr' },
    { case: 'Ahmed Mansoor', year: '2017-2018', keyFacts: 'Human rights defender arrested, tortured', outcome: '10-year sentence' },
    { case: 'Nasser bin Ghaith', year: '—', keyFacts: 'Life sentence for critical tweets, tortured', outcome: 'Life sentence' },
    { case: 'Matthew Hedges', year: '2018', keyFacts: 'British academic accused of espionage', outcome: 'Shorthand detention' },
    { case: 'Ali Issa Ahmad', year: '—', keyFacts: 'British national, stabbed, deprived of food/water', outcome: '—' },
    { case: 'Alia Abdulnoor', year: '2019', keyFacts: 'Died after denial of cancer treatment', outcome: 'Death' },
    { case: 'Princess Latifa', year: '2018', keyFacts: 'Seized from yacht, detained', outcome: 'Detained' },
    { case: 'Ryan Cornelius', year: '—', keyFacts: '30-year sentence, solitary confinement', outcome: '—' },
    { case: 'Three Sisters (Disappeared)', year: '2015', keyFacts: 'Posted government-critical comments, summoned by police', outcome: 'Enforced disappearance' },
  ],
  tortureMethods: [
    'Severe beatings',
    'Electrocution threats',
    'Sleep deprivation',
    'Solitary confinement',
    'Strappado',
    'Denailing (removing fingernails)',
    'Whipping',
    'Physical assault',
    'Running people over with vehicles',
    'Threats of rape',
    'Forcible disappearance',
    'Blindfolding during transfers',
    'Denial of medical care',
    'Shackling prisoners to beds',
    'Incommunicado detention',
    'Stress positions',
  ],
  demographics: {
    totalPopulation: 11000000,
    internationalMigrants: 8160000,
    migrantsPercent: 74,
    refugees: 1377,
    asylumApplications: 6257,
    detainedAsylumSeekers2023: 2700,
    maxAdministrativeDetention: '120 days (2021 law)',
  },
  stateSecurityStats: {
    ssaEstablished: 'June 10, 1974',
    uae94Defendants: 94,
    uae94Convicted: 69,
    uae94SentenceRange: '7-15 years',
    uae84AppealsRejected2025: 53,
    uae84LifeSentencesUpheld: 43,
    ahmedMansoorSentence: '10 years',
    nasserBinGhaith: 'Life (incommunicado 10+ months)',
    ssaDetentionMax: '3 months',
  },
  counterTerrorismStats: {
    designatedGroups: 83,
    nineElevenHijackersThroughUAE: '17/19',
    uaeForcesInAfghanistan: 'Only Arab country with US',
    militantsRemovedFromYemen: '2000+',
    mukallaLiberation: '36 hours (April 2016)',
  },
  keyFindings: [
    createKeyFinding('Designated terrorist organizations', '83', 'MOI Official List 2026', 0, 'YELLOW'),
    createKeyFinding('Police forces under MOI', '7 emirates', 'MOI Structure 2026', 0, undefined),
    createKeyFinding('UAE State Security head', 'Khaled bin Mohammed bin Zayed Al-Nahyan', 'Official UAE Sources', 0, undefined),
    createKeyFinding('Documented torture methods in custody', '16 methods', 'Human Rights Organizations', 2, 'RED'),
    createKeyFinding('UAE94 case activists detained', '94 arrested, 69 sentenced', 'HRW Report 2026', 2, 'RED'),
    createKeyFinding('UAE84 appeals rejected', '53 (43 life, 5=15yr, 5=10yr)', 'Civicus April 2025', 2, 'RED'),
    createKeyFinding('Cybercrime minimum sentence', '2 years + 200,000 AED', 'Federal Decree-Law No. 34 of 2021', 0, 'YELLOW'),
    createKeyFinding('Crime detection rate (Dubai)', '99% (2024)', 'Wikipedia', 2, undefined),
    createKeyFinding('Emergency response time (Dubai)', '2 min 24 sec', 'Q3 2023', 2, undefined),
    createKeyFinding('Smart Police Stations (Dubai)', '22 (24/7, 6 languages)', 'Wikipedia', 2, undefined),
    createKeyFinding('Portal visitors (MOI)', '252,010,755', 'MOI Official', 0, undefined),
    createKeyFinding('Entry permits processed (2025)', '12,116,843', 'ICP Statistics', 0, undefined),
    createKeyFinding('Passengers through ICP (2025)', '61,530,701', 'ICP Statistics', 0, undefined),
    createKeyFinding('Civil Defence personnel growth', '+269% (2003-2018)', 'Wikipedia', 2, undefined),
    createKeyFinding('Buildings monitored (Hassantuk)', '65,000+', 'MOI Official', 0, undefined),
    createKeyFinding('SSA established', 'June 10, 1974', 'HRW, ADHRB', 2, undefined),
    createKeyFinding('SSA detention maximum', '3 months', 'MENA Rights', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(100, 'critical', 'Core national security, law enforcement, and internal stability institution'),
  alertLevel: 'RED',
  sources: [
    createSource('Ministry of Interior UAE', 'https://www.moi.gov.ae', 0, '2026-04-27'),
    createSource('UAE State Security Department', 'https://ssd.gov.ae/en/about-us', 0, '2026-04-27'),
    createSource('UAE Government Emergency Info', 'https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies', 0, '2026-04-27'),
    createSource('ICP (Federal Authority)', 'https://icp.gov.ae/en/', 0, '2026-04-27'),
    createSource('GDRFA Dubai', 'https://www.gdrfad.gov.ae/en', 0, '2026-04-27'),
    createSource('UAE Cybercrime Law', 'https://uaelegislation.gov.ae/en/legislations/1526', 0, '2026-04-27'),
    createSource('UAE Counterterrorism Law', 'https://uaelegislation.gov.ae/en/legislations/1018', 0, '2026-04-27'),
    createSource('Human Rights Watch 2026', 'https://www.hrw.org', 2, '2026-04-20'),
    createSource('MENA Rights Group', 'https://www.menarights.org', 2, '2026-04-15'),
    createSource('Civicus — UAE84', 'https://monitor.civicus.org/explore/court-rejects...', 3, '2026-04-10'),
    createSource('Wikipedia — State Security', 'https://en.wikipedia.org/wiki/State_Security_Apparatus', 3, '2026-04-01'),
    createSource('Wikipedia — Dubai Police Force', 'https://en.wikipedia.org/wiki/Dubai_Police_Force', 3, '2026-04-01'),
    createSource('Wikipedia — Human Rights in UAE', 'https://en.wikipedia.org/wiki/Human_rights_in_the_United_Arab_Emirates', 3, '2026-04-01'),
    createSource('Wikipedia — Terrorism in UAE', 'https://en.wikipedia.org/wiki/Terrorism_in_the_United_Arab_Emirates', 3, '2026-04-01'),
    createSource('Wikipedia — Dubai Civil Defence', 'https://en.wikipedia.org/wiki/Dubai_Civil_Defence', 3, '2026-04-01'),
  ],
  lastUpdated: '2026-04-29',
}


export const mofaData: StakeholderIntelligence = {
  id: 'stakeholder-mofa',
  name: 'Ministry of Foreign Affairs',
  nameAr: 'وزارة الخارجية',
  type: 'government',
  mandate: 'UAE foreign policy execution, diplomatic relations management, consular services, and international cooperation. Led by Sheikh Abdullah bin Zayed Al Nahyan since 2006. Manages 147 embassies and consulates worldwide. Manages relations with 190 countries.',
  metrics: {
    digitalReach: 8500000,
    engagement: 2.4,
    sentiment: createSentimentBreakdown(52, 30, 18),
    credibility: createCredibilityScore(1, 90, 34, '2026-04-28'),
    programs: [
      createStakeholderProgram('Diplomatic Incident Response', 'Rapid deployment of diplomatic missions and responses to embassy attacks', 'active', 0),
      createStakeholderProgram('Sudan Evacuation Operations', 'UAE citizen evacuation from Sudan conflict zones', 'active'),
      createStakeholderProgram('Foreign Aid Distribution', '$98B total foreign aid since 1971', 'active', 0),
      createStakeholderProgram('Abraham Accords Monitoring', 'Track normalization agreements and UAE-Israel relations', 'active'),
      createStakeholderProgram('FARA Lobbying Oversight', 'Monitor $64M+ annual US lobbying activities', 'active'),
      createStakeholderProgram('COP Climate Diplomacy', 'COP28 host, COP30 participant, 2026 UN Water Conference co-host', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@WamMofa', url: 'https://twitter.com/WamMofa', verified: true },
    { platform: 'instagram', handle: '@uaefm', url: 'https://instagram.com/uaefm', verified: true },
  ],
  keyFindings: [
    // Core Metrics
    createKeyFinding('Foreign aid since 1971', '$98 billion cumulative (3rd largest global donor)', 'OECD Development Co-operation Profile 2025', 1, undefined),
    createKeyFinding('2025 humanitarian aid', '$1.46 billion', 'OECD 2025', 1, undefined),
    createKeyFinding('Diplomatic relations', '190 countries', 'Wikipedia Foreign Relations', 2, undefined),
    createKeyFinding('MOFA establishment', 'December 9, 1971', 'MOFA Official', 1, undefined),
    createKeyFinding('Current foreign minister', 'Sheikh Abdullah bin Zayed Al Nahyan since Feb 9, 2006', 'MOFA Biography', 1, undefined),
    createKeyFinding('Deputy Prime Minister appointment', 'July 14, 2024', 'MOFA Official', 1, undefined),
    // Embassy Incidents
    createKeyFinding('Damascus embassy vandalism', 'April 4, 2026 — rioting, attempted vandalism, attacks on diplomatic premises', 'Middle East Eye + EmiratesLeaks', 2, 'RED'),
    createKeyFinding('Tehran embassy closure', '2026 — closed embassy, recalled all diplomats after Iranian drone/missile attack', 'Times of Israel', 2, 'RED'),
    createKeyFinding('Iranian attack casualties', '3 killed, 58 injured in UAE', 'Times of Israel', 2, 'RED'),
    createKeyFinding('Missiles/drones targeting UAE', '2,000+ since conflict began', 'Anwar Gargash March 2026', 1, 'RED'),
    // Ambassador Recalls
    createKeyFinding('Belgium ambassador recall', '2023 — Mohammed Al-Sahlawi recalled over defamation campaign', 'EmiratesLeaks (Tier 0)', 0, 'RED'),
    createKeyFinding('ALP Services defamation cost', '€5.7 million (2017-2020) — 1,000 individuals, 400 organizations targeted', 'EmiratesLeaks', 0, 'RED'),
    createKeyFinding('Israeli ambassador recall', 'July 2025 — Yossi Shelley recalled after bar incident', 'Middle East Eye', 3, 'YELLOW'),
    createKeyFinding('Sudan diplomats expelled', 'December 10, 2023 — 15 UAE diplomats declared persona non grata', 'Sudan Tribune', 2, 'YELLOW'),
    // Regional Tensions
    createKeyFinding('Saudi-UAE strategic rupture', 'December 2025 — STC Hadhramaut offensive, Saudi demanded UAE withdrawal', 'ECFR (Tier 3)', 3, 'RED'),
    createKeyFinding('Yemen forced withdrawal', 'December 2025 — Yemen cancelled joint defense agreement, UAE withdrew forces', 'Wikipedia Yemen Relations', 2, 'RED'),
    createKeyFinding('Qatar relations break', '2017-2023 — 6-year diplomatic break, restored January 2021', 'Wikipedia Qatar Relations', 2, 'YELLOW'),
    // FARA Lobbying
    createKeyFinding('FARA lobbying expenditure', '$64+ million (2020-2021) — 25 registered organizations', 'Quincy Institute + OpenSecrets', 3, 'RED'),
    createKeyFinding('US political contacts', '10,765 reported contacts via lobbying firms', 'Quincy Institute', 3, 'RED'),
    createKeyFinding('Top lobbying firm', 'Akin Gump — $13.5 million', 'Quincy Institute', 3, undefined),
    createKeyFinding('Biden-approved arms sales', '$3.5 billion (2021)', 'Quincy Institute', 3, undefined),
    createKeyFinding('US weapons recipient ranking', '3rd largest (after Afghanistan and Saudi Arabia)', 'Quincy Institute', 3, undefined),
    createKeyFinding('F-35 deal suspended', '$23 billion — suspended December 2024 over usage restrictions', 'UwiData (Tier 4)', 4, 'RED'),
    // Abraham Accords
    createKeyFinding('Abraham Accords signed', 'September 15, 2020 at White House', 'CSIS', 3, undefined),
    createKeyFinding('UAE-Israel 2024 trade', '$3.2 billion (11% YoY increase)', 'ME Council', 3, undefined),
    createKeyFinding('Trade target', '$10 billion by 2030 (non-oil)', 'ME Council', 3, undefined),
    createKeyFinding('CEPA status', 'Israel 2nd of 27 countries to sign with UAE', 'ME Council', 3, undefined),
    // Foreign Aid
    createKeyFinding('2022 foreign aid', 'AED 12.67 billion ($3.45 billion) — 155 countries, 40 donor entities', 'U.ae Official', 1, undefined),
    createKeyFinding('Humanitarian commitment', 'Minimum 15% to humanitarian purposes', 'MOFA Development Assistance', 1, undefined),
    createKeyFinding('Dubai Humanitarian Hub', 'World\'s largest logistics hub — ~80 members', 'UAEUN', 1, undefined),
    createKeyFinding('Abu Dhabi Fund for Development', 'Established 1971', 'MOFA', 1, undefined),
    // Diplomatic Training
    createKeyFinding('Anwar Gargash Diplomatic Academy', 'Founded August 19, 2014 — partners with Johns Hopkins SAIS', 'Wikipedia AGDA', 2, undefined),
    createKeyFinding('UNITAR training', '7-day program September 2019 for UAE Mission to UN delegates', 'UNITAR', 1, undefined),
    // Leadership Profiles
    createKeyFinding('Sheikh Abdullah birthdate', 'April 30, 1972 — Abu Dhabi', 'MOFA Biography', 1, undefined),
    createKeyFinding('Sheikh Abdullah children', 'Fatima, Mohammad, Zayed, Saif, Theyab (5 children)', 'MOFA Biography', 1, undefined),
    createKeyFinding('Reem Al Hashimy education', 'Tufts BA, Harvard MA, Tsinghua Doctorate', 'MOFA Biography', 1, undefined),
    createKeyFinding('Anwar Gargash role', 'Diplomatic Adviser to UAE President — former architect of Abraham Accords', 'Policy Commons + MEI NUS', 3, undefined),
    // Policy Positions
    createKeyFinding('Ukraine position', 'Principled — aligned with international law, sovereignty, dialogue', 'MOFA December 2022', 1, undefined),
    createKeyFinding('UAE foreign policy principles', '8 principles: sovereignty, non-interference, peaceful dispute resolution', 'Anwar Gargash Speech', 1, undefined),
    // Multilateral Engagement
    createKeyFinding('COP28 host', 'UAE hosted COP28 — historic UAE Consensus', 'MOFA COP30', 1, undefined),
    createKeyFinding('COP30 participation', 'H.E. Abdulla Balalaa led UAE delegation to Belém, Brazil November 2025', 'MOFA News', 1, undefined),
    createKeyFinding('UN Water Conference 2026', 'UAE co-hosting with Senegal', 'MOFA COP30', 1, undefined),
    createKeyFinding('UN memberships', 'OPEC, GCC, Arab League, OIC, NAM founding/member', 'Wikipedia Foreign Relations', 2, undefined),
    // Power-Building
    createKeyFinding('Little Sparta designation', 'US Defense Secretary James Mattis — most professional army in region', 'MEI NUS', 3, undefined),
    createKeyFinding('Soft power ranking', '10th globally, 2nd generosity, 3rd economic growth potential (Brand Finance 2026)', 'Brand Finance 2026', 1, undefined),
    // Critical Assessments
    createKeyFinding('Policy failure claims', 'Yemen defeat, Libya failure, F-35 suspension — contested narrative', 'UwiData (Tier 4)', 4, 'YELLOW'),
    createKeyFinding('Yemen withdrawal impact', 'Failed southern strategy — STC support backfired', 'Regional Analysis', 3, 'RED'),
    createKeyFinding('Sudan RSF support', 'Backs Rapid Support Forces — conflicts with Saudi SAF backing', 'ECFR', 3, 'YELLOW'),
    // Recent Statements
    createKeyFinding('Anwar Gargash April 2026', 'UAE will scrutinize regional and international relations — who can be relied upon', 'March 2026 CFR Event', 3, undefined),
    createKeyFinding('Reem Al Hashimy March 2026', 'The door for diplomacy never closes', 'MOFA Official', 1, undefined),
    // Entity Support
    createKeyFinding('STC support', 'UAE supports Southern Transitional Council (secessionist)', 'Wikipedia Yemen Relations', 2, 'YELLOW'),
    createKeyFinding('RSF support', 'UAE backs Rapid Support Forces in Sudan', 'ECFR', 3, 'YELLOW'),
    createKeyFinding('Haftar support', 'UAE supports General Haftar LNA in Libya', 'Regional Analysis', 3, 'YELLOW'),
    // Gaza Impact
    createKeyFinding('Gaza impact on Abraham Accords', 'Diminished public support, discreet government handling', 'ME Council', 3, 'YELLOW'),
    // Infrastructure
    createKeyFinding('MOFA headquarters', 'Khor Qirqishan Street, Al Bateen, Abu Dhabi', 'MOFA Official', 1, undefined),
    createKeyFinding('Service rating', '4-star (Global Star Rating System for Services)', 'MOFA Official', 1, undefined),
    createKeyFinding('Toll-free number', '80044444', 'MOFA Official', 1, undefined),
    createKeyFinding(' consular hotline', '171', 'MOFA Official', 1, undefined),
    createKeyFinding('WhatsApp contact', '04-7771777', 'MOFA Official', 1, undefined),
    // Passport/ Travel
    createKeyFinding('Passport visa-free access', '165 countries and territories — 21st world ranking', 'Wikipedia Foreign Relations', 2, undefined),
    // US Relations
    createKeyFinding('US Ambassador', 'Yousef Al Otaiba — Washington DC since July 2008', 'UAE Embassy Washington', 1, undefined),
    createKeyFinding('US relations established', 'March 20, 1972', 'Wikipedia Foreign Relations', 2, undefined),
    // China Relations
    createKeyFinding('China relations established', 'November 1, 1984', 'Wikipedia Foreign Relations', 2, undefined),
    // Critical Quote
    createKeyFinding('Quincy Institute assessment', 'If UAE secures formal security pact, US military asked to fight for UAE', 'Quincy Institute', 3, 'RED'),
    // Iran Nuclear
    createKeyFinding('Iran nuclear concern', '7 to 15 percent of Iranian strikes connected to US interests', 'March 2026 CFR', 3, 'YELLOW'),
    createKeyFinding('Gulf states treated as pawns', 'Gulf states treated as pawns on chessboard — Iranian statement', 'Anwar Gargash March 2026', 3, 'YELLOW'),
  ],
  uaeRelevance: createUAERelevance(96, 'critical', 'Central to UAE international positioning, bilateral relations, and regional stability'),
  alertLevel: 'RED',
  sources: [
    createSource('Ministry of Foreign Affairs UAE', 'https://www.mofa.gov.ae', 1, '2026-04-28'),
    createSource('MOFA Biography Sheikh Abdullah', 'https://www.mofa.gov.ae/en/the-ministry/the-ministers/minister-of-foreign-affairs-and-international-cooperation/the-minister-biography', 1, '2026-04-20'),
    createSource('MOFA Ministers List', 'https://www.mofa.gov.ae/en/the-ministry/the-ministers', 1, '2026-04-15'),
    createSource('Wikipedia MOFA', 'https://en.wikipedia.org/wiki/Ministry_of_Foreign_Affairs_(United_Arab_Emirates)', 2, '2026-04-01'),
    createSource('Wikipedia UAE-Yemen Relations', 'https://en.wikipedia.org/wiki/United_Arab_Emirates%E2%80%93Yemen_relations', 2, '2026-04-01'),
    createSource('Wikipedia Qatar-UAE Relations', 'https://en.wikipedia.org/wiki/Qatar%E2%80%93United_Arab_Emirates_relations', 2, '2026-04-01'),
    createSource('Wikipedia UAE Foreign Relations', 'https://en.wikipedia.org/wiki/Foreign_relations_of_the_United_Arab_Emirates', 2, '2026-04-01'),
    createSource('Wikipedia AGDA', 'https://en.wikipedia.org/wiki/Anwar_Gargash_Diplomatic_Academy', 2, '2026-04-01'),
    createSource('Times of Israel - Tehran Closure', 'https://www.timesofisrael.com/liveblog_entry/uae-closes-its-embassy-in-tehran-recalls-all-diplomats-after-iran-fires-hundreds-of-drones-missiles/', 2, '2026-04-20'),
    createSource('Middle East Eye - Israeli Ambassador', 'https://www.middleeasteye.net/news/israeli-ambassador-uae-being-sent-home-over-undignified-behaviour-bar', 3, '2026-04-20'),
    createSource('Sudan Tribune', 'https://sudantribune.com/article/301021', 2, '2026-04-15'),
    createSource('EmiratesLeaks - Belgium', 'https://emiratesleaks.com/emirategate-uae-ambassador-in-belgium-recalled-european-protests-against-abu-dhabis-defamation-campaign/', 0, '2026-04-10'),
    createSource('Quincy Institute - Emirati Lobby', 'https://quincyinst.org/research/the-emirati-lobby-in-america/', 3, '2026-04-01'),
    createSource('CSIS - Abraham Accords', 'https://www.csis.org/analysis/normalization-uae-israel-relations', 3, '2026-03-15'),
    createSource('ME Council - UAE-Israel Trade', 'https://mecouncil.org/blog_posts/five-years-on-uae-israel-normalization-weathers-the-gaza-storm/', 3, '2026-04-01'),
    createSource('MOFA Development Assistance', 'https://www.mofa.gov.ae/en/the-ministry/the-foreign-policy/development-assistance', 1, '2026-04-20'),
    createSource('OECD Development Profile', 'https://www.oecd.org/en/publications/development-co-operation-profiles_04b376d7-en/united-arab-emirates_f39888ef-en.html', 1, '2026-04-15'),
    createSource('UAEUN Humanitarian Aid', 'https://uaeun.org/humanitarian-aid/', 1, '2026-04-20'),
    createSource('U.ae Aid Policy', 'https://u.ae/en/information-and-services/charity-and-humanitarian-work/the-uae-aid-to-foreign-countries', 1, '2026-04-20'),
    createSource('UN UAE Partnership', 'https://unitedarabemirates.un.org/en/175475-50-years-strategic-partnership-united-nations-and-united-arab-emirates-working-together', 1, '2026-04-01'),
    createSource('Policy Commons - Gargash Speech', 'https://policycommons.net/artifacts/7996270/speech-by-he/8906592/', 1, '2026-04-01'),
    createSource('MEI NUS - UAE Power Building', 'https://mei.nus.edu.sg/think_in/review-of-the-uae-power-building-model-and-foreign-policy-shifts/', 3, '2026-04-01'),
    createSource('MOFA COP30 News', 'https://www.mofa.gov.ae/en/mediahub/news/2025/11/15/15-11-2025-uae-brazil', 1, '2026-04-01'),
    createSource('MOFA Ukraine Position', 'https://www.mofa.gov.ae/en/mediahub/news/2022/12/6/06-12-2022-uae-speech', 1, '2026-04-01'),
    createSource('UAE Embassy Washington', 'https://www.uae-embassy.org/', 1, '2026-04-20'),
    createSource('Brand Finance Soft Power 2026', 'https://brandfinance.com', 1, '2026-04-01'),
    createSource('AGDA PGD Program', 'https://www.agda.ac.ae/academic/academic-programs/program-details/post-graduate-diploma-(pgd)-in-uae-diplomacy-and-international-relations', 1, '2026-04-01'),
    createSource('UNITAR Training', 'https://unitar.org/about/news-stories/featuredarticles/unitar-launches-core-diplomatic-training-uae-delegates', 1, '2026-04-01'),
    createSource('UwiData Policy Criticism', 'https://uwidata.com/22623-uae-failed-policies-lead-to-systemic-crisis/', 4, '2026-04-01'),
    createSource('ECFR Saudi-UAE Rupture', 'https://ecfr.eu/article/from-partners-to-rivals-what-the-saudi-uae-rupture-means-for-europeans/', 3, '2026-04-01'),
    createSource('MOFA Reem Biography', 'https://www.mofa.gov.ae/en/the-ministry/the-ministers/uae-minister-of-state-for-international-cooperation', 1, '2026-04-20'),
  ],
  lastUpdated: '2026-04-28',
}

export const ministryCultureData: StakeholderIntelligence = {
  id: 'stakeholder-ministry-culture',
  name: 'Ministry of Culture',
  nameAr: 'وزارة الثقافة والشباب',
  type: 'government',
  mandate: 'Cultural policy, heritage preservation, creative industries development, and cultural censorship enforcement. Led by Salem bin Khalid Al Qassimi. Manages 5 UNESCO World Heritage Sites and 19 intangible cultural heritage entries. Implements Emirati National Identity Strategy with 13 key initiatives across 6 foundational elements. National Identity Committee chaired by Sheikha Mariam bint Mohamed bin Zayed Al Nahyan.',
  metrics: {
    digitalReach: 6200000,
    engagement: 3.1,
    sentiment: createSentimentBreakdown(60, 25, 15),
    credibility: createCredibilityScore(1, 84, 18, '2026-04-28'),
    programs: [
      createStakeholderProgram('Global Soft Power Index', '10th globally (59.4/100), 2nd generosity, 3rd economic growth potential', 'active', 0),
      createStakeholderProgram('UNESCO Heritage Sites Management', '5 World Heritage Sites, target 6 by 2036', 'active', 0),
      createStakeholderProgram('Intangible Heritage Preservation', '19 elements on UNESCO list, target 44 by 2036', 'active', 0),
      createStakeholderProgram('Zayed National Museum', 'Opened December 3, 2025, Saadiyat Cultural District', 'active', 0),
      createStakeholderProgram('Louvre Abu Dhabi Operations', '1.4M annual visitors (2025)', 'active', 0),
      createStakeholderProgram('National Grant Programme for Culture and Creativity', '5th edition, 4 categories, beneficiaries Cycle 1:26, C2:43, C3:44, C4:41', 'active', 0),
      createStakeholderProgram('Emirati National Identity Strategy', '13 initiatives, 6 core elements, National Identity Committee', 'active', 0),
      createStakeholderProgram('Cultural Public Benefit Associations Subsidies', '11 fields, H.E. Mubarak Al Nakhi overseeing', 'active', 0),
      createStakeholderProgram('Youth Council for Culture and National Identity', '16 members, Feb 2026-2028, FYA partnership', 'active', 0),
      createStakeholderProgram('Cultural Censorship Framework', 'Emirati dialect/dress protection law April 2025, film bans', 'active', 0),
      createStakeholderProgram('Abu Dhabi Cultural Sites', '8.6M+ visitors, Qasr Al Hosn 843K (+22% YoY)', 'active', 0),
      createStakeholderProgram('MICE Events', '2.2M delegates (+40% YoY), 6,600 events', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaeministryofculture', url: 'https://twitter.com/uaeculture', verified: true },
    { platform: 'instagram', handle: '@uaeministryofculture', url: 'https://instagram.com/uaeministryofculture', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Global Soft Power Index ranking', '10th globally (59.4/100)', 'Brand Finance Soft Power 2026', 1, undefined),
    createKeyFinding('Generosity Rank', '2nd worldwide', 'Brand Finance Soft Power 2026', 1, undefined),
    createKeyFinding('Future Economic Growth Potential', '3rd globally', 'Brand Finance Soft Power 2026', 1, undefined),
    createKeyFinding('Diplomatic Influence', '8th globally', 'Brand Finance Soft Power 2026', 1, undefined),
    createKeyFinding('UNESCO World Heritage Sites', '5 (target 6 by 2036)', 'UNESCO Official 2026', 1, undefined),
    createKeyFinding('UNESCO Intangible Heritage', '19 elements (target 44 by 2036)', 'UNESCO Intangible Heritage 2026', 1, undefined),
    createKeyFinding('Al Faya UNESCO inscription', 'July 11, 2025, Sharjah, 200,000+ years', 'UNESCO WHC 2025', 1, undefined),
    createKeyFinding('Louvre Abu Dhabi visitors', '1.4 million (2025)', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('Zayed National Museum opening', 'December 3, 2025', 'Abu Dhabi Government', 1, undefined),
    createKeyFinding('Abu Dhabi total visitors', '26.6 million (record)', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('Hotel revenue growth', '+19.5% to Dh9.1B', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('Qasr Al Hosn visitors', '843,000+ (+22% YoY)', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('Cultural sites visits', '8.6 million+', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('MICE delegates', '2.2 million (+40% YoY)', 'DCT Abu Dhabi 2025', 1, undefined),
    createKeyFinding('National Grant Programme Cycle 4', '41 beneficiaries, +77.6% applications', 'Ministry of Culture 2026', 1, undefined),
    createKeyFinding('Youth Council members', '16 (Feb 2026-2028)', 'FYA + Ministry of Culture', 1, undefined),
    createKeyFinding('National Identity Committee Chair', 'Sheikha Mariam bint Mohamed bin Zayed Al Nahyan', 'Gulf News Feb 2026', 1, undefined),
    createKeyFinding('Emirati dialect/dress protection law', 'April 2025', 'UAE Official Gazette', 1, 'YELLOW'),
    createKeyFinding('Freedom House Score', '28/100 Not Free', 'Freedom House 2025', 2, 'RED'),
    createKeyFinding('Film bans 2025-2026', '5+ incidents including Sky Force, Dhurandhar', 'Multiple Sources', 2, 'YELLOW'),
    createKeyFinding('Iranian coverage censorship', '35 arrested April 2026, AED 200K fine', 'Martin Plaut 2026', 2, 'RED'),
  ],
  uaeRelevance: createUAERelevance(92, 'critical', 'Central to UAE cultural soft power, national identity, and heritage preservation'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Ministry of Culture UAE', 'https://www.moc.gov.ae', 0, '2026-04-28'),
    createSource('Brand Finance Soft Power Index 2026', 'https://brandfinance.com', 1, '2026-01-15'),
    createSource('UNESCO UAE Heritage', 'https://whc.unesco.org/en/states/ae', 0, '2026-03-20'),
    createSource('DCT Abu Dhabi Performance', 'https://dct.gov.ae', 0, '2026-04-01'),
    createSource('Federal Youth Authority', 'https://fya.gov.ae', 0, '2026-02-15'),
    createSource('Freedom House UAE', 'https://freedomhouse.org', 1, '2025-11-01'),
    createSource('Gulf News UAE', 'https://gulfnews.com', 2, '2026-04-01'),
    createSource('Abu Dhabi Department of Culture', 'https://visitabudhabi.com', 2, '2026-04-01'),
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// MINISTRY OF ECONOMY - COMPREHENSIVE DATA (MD FILE 7-6)
// ============================================================================

export interface EconomyGDPData {
  year: number
  growthRate: number
  valueAED?: string
  valueUSD?: string
  source: string
  tier: TierLevel
}

export interface EconomyFDIData {
  year: number
  amountUSD: number
  amountAED?: string
  ranking?: string
  globalRanking?: number
  menaRanking?: string
  growthYoY?: number
  source: string
  tier: TierLevel
}

export interface EconomySectorPerformance {
  sector: string
  growthRate: number
  valueAddedAED?: string
  period?: string
  source: string
  tier: TierLevel
}

export interface EconomyTradeData {
  year: number
  totalTradeAED: string
  exportsAED?: string
  importsAED?: string
  globalRanking?: number
  growthVs2021?: number
  source: string
  tier: TierLevel
}

export interface EconomyCompetitivenessData {
  index: string
  year: number
  ranking: number
  previousRanking?: number
  change?: number
  source: string
  tier: TierLevel
}

export interface EconomyStartupData {
  metric: string
  value: string | number
  source: string
  tier: TierLevel
}

export interface EconomyConsumerData {
  indicator: string
  value: number
  date: string
  change?: number
  source: string
  tier: TierLevel
}

export interface EconomyInflationData {
  period: string
  rate: number
  forecast?: number
  source: string
  tier: TierLevel
}

export interface MinistryEconomyComprehensive {
  gdpData: EconomyGDPData[]
  sectorPerformance: EconomySectorPerformance[]
  regionalPerformance: { region: string; gdpAED: string; growth: number; source: string; tier: TierLevel }[]
  fdiData: EconomyFDIData[]
  greenfieldFDI: { projects: number; capitalAED: string; ranking: string; source: string; tier: TierLevel }[]
  fdiBySector: { sector: string; share: number }[]
  businessClimate: { metric: string; value: string; source: string; tier: TierLevel }[]
  businessConfidence: { index: string; score: number; date: string; source: string; tier: TierLevel }[]
  ceoOptimism: { metric: string; uae: number; global?: number; source: string; tier: TierLevel }[]
  startupData: EconomyStartupData[]
  gemRanking: { ranking: number; year: string; details: string[]; source: string; tier: TierLevel }
  tradeData: EconomyTradeData[]
  topImports: { product: string; valueUSD: string }[]
  cepaAgreements: { country: string; status: string; date: string }[]
  competitivenessData: EconomyCompetitivenessData[]
  diversificationSectors: { sector: string; contribution: string; growth: string }[]
  economicReforms: { reform: string; details: string; effectiveDate: string }[]
  visionTargets: { target: string; current?: string; goal: string; source: string }[]
  energyStrategy: { metric: string; value: string; source: string }[]
  centralBankLaw2025: { attribute: string; value: string }[]
  enforcementPowers: { power: string; description: string }[]
  amlFines: { period: string; totalAED: string; institutions: number; source: string; tier: TierLevel }[]
  notableCases: { entity: string; fine?: string; action?: string; details: string }[]
  consumerConfidence: EconomyConsumerData[]
  inflationData: EconomyInflationData[]
  inflationHistorical: { metric: string; value: string }[]
  officialEntities: { name: string; acronym: string; role: string }[]
  internationalOrgs: { name: string; role: string }[]
  sourceCredibility: { source: string; tier: number; dataQuality: string; url?: string }[]
  keyMetricsSummary: { indicator: string; value2024: string; value2025?: string; source: string }[]
}

export const ministryEconomyComprehensive: MinistryEconomyComprehensive = {
  gdpData: [
    { year: 2024, growthRate: 4.0, valueUSD: '$484 billion', valueAED: 'AED 1.776 trillion', source: 'IMF, World Bank, Salaam Gateway', tier: 1 },
    { year: 2025, growthRate: 4.8, valueUSD: '4.8%-5.6% projected', source: 'IMF, Trading Economics', tier: 1 },
    { year: 2025, growthRate: 5.1, valueAED: 'Dh1.4 trillion (9M)', source: 'Ministry reports', tier: 3 },
    { year: 2025, growthRate: 3.9, valueUSD: 'Q1 real GDP', source: 'Central Bank QER', tier: 1 },
    { year: 2025, growthRate: 6.8, valueUSD: 'Q3 annual growth', source: 'Trading Economics', tier: 2 },
    { year: 2024, growthRate: 3.8, valueAED: 'Real GDP (9 months)', source: 'UAE Government', tier: 1 },
  ],
  sectorPerformance: [
    { sector: 'Financial & Insurance', growthRate: 9.0, valueAddedAED: 'AED 42.8B (Dubai 9M)', source: 'LinkedIn / Ministry', tier: 3 },
    { sector: 'Construction', growthRate: 8.7, valueAddedAED: 'AED 23.9B (Dubai 9M)', source: 'LinkedIn / Ministry', tier: 3 },
    { sector: 'Real Estate', growthRate: 7.9, valueAddedAED: 'AED 29.1B (Dubai 9M)', source: 'LinkedIn / Ministry', tier: 3 },
    { sector: 'Manufacturing', growthRate: 6.9, source: 'LinkedIn / Ministry', tier: 3 },
    { sector: 'Transport & Storage', growthRate: 9.6, source: 'Salaam Gateway', tier: 2 },
    { sector: 'Health & Social Work (Dubai)', growthRate: 15.4, valueAddedAED: 'AED 5.3B', source: 'Digital Dubai', tier: 1 },
    { sector: 'Non-oil activities (9M 2025)', growthRate: 6.1, valueAddedAED: 'AED 1 trillion', source: 'Ministry reports', tier: 1 },
  ],
  regionalPerformance: [
    { region: 'Dubai GDP (9M 2025)', gdpAED: 'AED 355 billion', growth: 4.7, source: 'Digital Dubai', tier: 1 },
    { region: 'Dubai Q3 2025 GDP', gdpAED: 'AED 113.8 billion', growth: 5.3, source: 'Digital Dubai', tier: 1 },
    { region: 'Abu Dhabi GDP (Q3 2025)', gdpAED: 'AED 325.7 billion', growth: 7.7, source: 'SCAD / LinkedIn', tier: 2 },
    { region: 'Abu Dhabi Industrial GDP (2024)', gdpAED: 'AED 111.6B', growth: 23, source: 'INTLBM', tier: 2 },
  ],
  fdiData: [
    { year: 2022, amountUSD: 22.73, source: 'UNCTAD', tier: 1 },
    { year: 2023, amountUSD: 30.68, source: 'UNCTAD', tier: 1 },
    { year: 2024, amountUSD: 45.6, amountAED: 'AED 167.5 billion', ranking: '#2 globally, #1 MENA', globalRanking: 2, menaRanking: '#1', growthYoY: 48.5, source: 'UNCTAD / UAE Ministry', tier: 1 },
  ],
  greenfieldFDI: [
    { projects: 1369, capitalAED: 'AED 53.3 billion ($14.5 billion)', ranking: '#2 destination globally', source: 'Sheikh Mohammed / FDI Intelligence', tier: 1 },
  ],
  fdiBySector: [
    { sector: 'Wholesale and retail trade', share: 26 },
    { sector: 'Real estate', share: 24 },
    { sector: 'Finance and insurance', share: 21 },
    { sector: 'Mining and quarrying', share: 8 },
    { sector: 'Manufacturing', share: 7 },
    { sector: 'Other sectors', share: 14 },
  ],
  businessClimate: [
    { metric: 'Companies rating UAE business climate "good/very good"', value: '71%', source: 'Business Sweden Survey (46 companies)', tier: 2 },
    { metric: 'Expecting increased turnover in 2025', value: '67%', source: 'Business Sweden Survey', tier: 2 },
    { metric: 'CEOs confident in company 3-year outlook', value: '80%', source: 'KPMG', tier: 2 },
    { metric: 'CEOs confident in national economy', value: '84%', source: 'KPMG', tier: 2 },
    { metric: 'Business Index (UAE, March 2025)', value: '76.58', source: 'SIA Insights', tier: 2 },
  ],
  businessConfidence: [
    { index: 'Dubai SME Business Confidence Index (BCI)', score: 114.3, date: 'Q1 2025', source: 'DubaiDET', tier: 1 },
    { index: 'Dubai Composite BCI', score: 114.9, date: 'Q1 2025', source: 'DubaiDET', tier: 1 },
    { index: 'UAE PMI (2025 average)', score: 54.0, date: '2025', source: 'S&P Global', tier: 1 },
    { index: 'UAE PMI (December 2025)', score: 53.8, date: 'Dec 2025', source: 'Central Bank', tier: 1 },
  ],
  ceoOptimism: [
    { metric: 'Confident in company 3-year outlook', uae: 80, global: 81, source: 'KPMG', tier: 2 },
    { metric: 'Confident in national economy', uae: 84, source: 'KPMG', tier: 2 },
    { metric: 'Confident in global economy', uae: 72, global: 68, source: 'KPMG', tier: 2 },
    { metric: 'Expect to increase headcount (3 years)', uae: 84, source: 'KPMG', tier: 2 },
    { metric: 'AI as top strategic priority', uae: 52, global: 34, source: 'KPMG', tier: 2 },
    { metric: 'Believe orgs can deploy AI responsibly', uae: 92, source: 'KPMG', tier: 2 },
  ],
  startupData: [
    { metric: 'Total startups in UAE', value: 5641, source: 'Various', tier: 3 },
    { metric: 'Dubai startups (active)', value: 987, source: 'Seed Group', tier: 3 },
    { metric: 'Dubai digital startups (Q1-Q3 2024)', value: 485, source: 'Seed Group', tier: 3 },
    { metric: 'Startup funding (by Sept 2025)', value: '$1+ billion', source: 'LinkedIn', tier: 3 },
    { metric: 'Startups funded (2025)', value: 77, source: 'Funded Iqbal', tier: 3 },
    { metric: 'Funding raised (H1 2025)', value: '$541 million (AED 1.99 billion)', source: 'Founder Connects', tier: 3 },
    { metric: 'Funding growth (H1 2025 vs 2024)', value: '+18%', source: 'Founder Connects', tier: 3 },
    { metric: 'GEM Ranking (2024-2025)', value: '#1 globally', source: 'MoET', tier: 1 },
    { metric: 'GEM consecutive years as #1', value: '4th year', source: 'MoET', tier: 1 },
  ],
  gemRanking: {
    ranking: 1,
    year: '2024-2025',
    details: [
      'Adults knowing entrepreneur/skills: 67%',
      'Seeing strong opportunities locally: 70%',
      'Prioritizing social/environmental impact: 78%',
      'Planning to hire 6+ employees (5 years): 75%',
      'Planning tech integration: 80%',
      'Catering to clients outside UAE: 55%',
      'Project of the 50 investment: $8.7 billion',
      'Vision 2031 SME target: 1 million SMEs',
    ],
    source: 'GEM Report / MoET',
    tier: 1,
  },
  tradeData: [
    { year: 2021, totalTradeAED: 'AED 3.5 trillion', source: 'WAM', tier: 1 },
    { year: 2024, totalTradeAED: 'AED 5.23 trillion', exportsAED: 'AED 2.8619 trillion', importsAED: 'AED 2.3696 trillion', globalRanking: 11, growthVs2021: 49, source: 'WAM', tier: 1 },
    { year: 2025, totalTradeAED: '$1+ trillion (first time)', source: 'Gulf Business', tier: 3 },
    { year: 2025, totalTradeAED: 'AED 835 billion (Q1)', growthVs2021: 18.6, source: 'INTLBM', tier: 2 },
  ],
  topImports: [
    { product: 'Gold', valueUSD: '$32.6B' },
    { product: 'Telephones', valueUSD: '$29.2B' },
    { product: 'Cars', valueUSD: '$20.6B' },
    { product: 'Jewellery', valueUSD: '$16.5B' },
    { product: 'Refined Petroleum', valueUSD: 'Significant' },
  ],
  cepaAgreements: [
    { country: 'Turkey', status: 'Signed', date: 'March 2023' },
    { country: 'Cambodia', status: 'Signed', date: 'June 2023' },
    { country: 'Vietnam', status: 'Signed', date: 'October 2024' },
    { country: 'Australia', status: 'Signed', date: 'November 2024' },
    { country: 'Kenya', status: 'Signed', date: 'December 2024' },
    { country: 'Malaysia', status: 'Signed', date: 'December 2024' },
    { country: 'India', status: 'Signed', date: 'Ongoing' },
  ],
  competitivenessData: [
    { index: 'IMD World Competitiveness', year: 2024, ranking: 7, source: 'Ministry of Finance', tier: 1 },
    { index: 'IMD World Competitiveness', year: 2025, ranking: 5, previousRanking: 7, change: 2, source: 'UAE official portal', tier: 1 },
    { index: 'Digital Competitiveness', year: 2023, ranking: 12, source: 'IMD', tier: 1 },
    { index: 'Digital Competitiveness', year: 2024, ranking: 11, previousRanking: 12, change: 1, source: 'IMD', tier: 1 },
    { index: 'Digital Competitiveness', year: 2025, ranking: 9, previousRanking: 11, change: 2, source: 'LinkedIn', tier: 2 },
    { index: 'Global Entrepreneurship Monitor', year: 2024, ranking: 1, source: 'MoET', tier: 1 },
    { index: 'FDI inflows ranking', year: 2025, ranking: 10, source: 'UNCTAD', tier: 1 },
  ],
  diversificationSectors: [
    { sector: 'Tourism', contribution: 'AED 57.3 billion (13% of GDP)', growth: 'Record' },
    { sector: 'Manufacturing', contribution: '13.5% of non-oil GDP', growth: '6.9%-7.7%' },
    { sector: 'Financial Services', contribution: '13.2% of non-oil GDP', growth: '+7% to +9%' },
    { sector: 'Construction', contribution: '11.7% of non-oil GDP', growth: '+8.4% to +8.7%' },
    { sector: 'Real Estate', contribution: '7.8% of non-oil GDP', growth: '+4.8% to +7.9%' },
    { sector: 'Trade', contribution: '16.8% of non-oil GDP', growth: '4.6%' },
  ],
  economicReforms: [
    { reform: '9% corporate tax', details: 'Effective June 2023', effectiveDate: 'June 2023' },
    { reform: '15% minimum top-up tax on large MNCs', details: 'January 2024/2025', effectiveDate: 'January 2024' },
    { reform: 'New Competition Law', details: 'Aligned with EU standards', effectiveDate: 'December 2023' },
    { reform: 'Federal PPP Law', details: 'Privatization framework', effectiveDate: '2023' },
    { reform: 'Emiratization', details: '20-49 employee companies: min 1 Emirati', effectiveDate: '2024' },
    { reform: 'Unemployment Insurance', details: 'Mandatory national scheme', effectiveDate: '2023' },
    { reform: 'Zero Bureaucracy Program', details: 'Program introduced', effectiveDate: '2024' },
  ],
  visionTargets: [
    { target: 'GDP', current: 'AED 1.49 trillion', goal: 'AED 3 trillion', source: 'UAE official portal' },
    { target: 'Non-oil exports', goal: 'AED 800 billion', source: 'MoET' },
    { target: 'Tourism contribution', goal: 'AED 450 billion', source: 'MoET' },
    { target: 'Foreign trade value', goal: 'AED 4 trillion', source: 'Various' },
    { target: 'Annual visitors', goal: '40 million', source: 'Emirates NBD Research' },
  ],
  energyStrategy: [
    { metric: 'Clean energy share target', value: '50% (from 25%)', source: 'MoET' },
    { metric: 'Energy efficiency improvement', value: '40%', source: 'MoET' },
    { metric: 'Projected savings by 2050', value: 'AED 700 billion', source: 'MoET' },
    { metric: 'Planned investment', value: 'AED 600 billion until 2050', source: 'MoET' },
    { metric: 'Energy mix', value: '44% clean, 38% gas, 12% clean coal, 6% nuclear', source: 'MoET' },
    { metric: 'Solar Park current capacity', value: '1,000 MW', source: 'Energy Tracker Asia' },
    { metric: 'Solar Park 2030 target', value: '5,000 MW', source: 'Energy Tracker Asia' },
  ],
  centralBankLaw2025: [
    { attribute: 'Issued', value: 'September 8, 2025' },
    { attribute: 'Effective', value: 'September 16, 2025' },
    { attribute: 'Compliance deadline', value: 'September 16, 2026' },
    { attribute: 'Replaced', value: 'Prior Central Bank law (2018) and insurance law' },
    { attribute: 'Maximum fine', value: 'AED 1 billion (from AED 200 million)' },
    { attribute: 'Virtual assets', value: 'Now regulated' },
    { attribute: 'Open finance', value: 'Licensing required' },
    { attribute: 'Technology providers', value: 'Under supervision' },
    { attribute: 'Digital currency', value: 'Dirham recognized in digital form' },
  ],
  enforcementPowers: [
    { power: 'Early intervention', description: 'Pre-emptive measures for capital/liquidity risks' },
    { power: 'License revocation', description: 'Authority to revoke licenses' },
    { power: 'Administrator appointment', description: 'Can appoint administrators' },
    { power: 'Public disclosure', description: 'Can publish enforcement action details' },
    { power: 'Grievances Committee', description: 'New appeals mechanism' },
  ],
  amlFines: [
    { period: 'Early 2025 (8 months)', totalAED: 'AED 380+ million', institutions: 31, source: 'Taxadepts', tier: 2 },
  ],
  notableCases: [
    { entity: 'Record Exchange House', fine: 'AED 200 million', action: 'May 2025', details: 'Branch manager fined AED 500,000' },
    { entity: 'Two Foreign Bank Branches', fine: 'AED 18.1 million', details: 'Combined' },
    { entity: 'Ministry of Economy Actions', fine: 'AED 42+ million', details: 'Real estate, corporate services, metals, gemstones' },
    { entity: 'Three Gold/Property Firms', fine: 'AED 2.25 million', details: 'AML violations' },
    { entity: 'SCA Penalties', fine: 'AED 1.15 million', details: 'Securities/commodities' },
    { entity: 'Al Khazna Insurance', action: 'License revoked', details: 'CBUAE July 2025' },
    { entity: 'UAE Bank (unnamed)', fine: 'AED 3 million', details: 'AML/CFT violations' },
  ],
  consumerConfidence: [
    { indicator: 'UAE Consumer Sentiment Index', value: 71.64, date: 'Feb 2025', source: 'SIA Insights', tier: 2 },
    { indicator: 'UAE Consumer Sentiment Index', value: 67.89, date: 'Mar 2025', change: -5.2, source: 'SIA Insights', tier: 2 },
    { indicator: 'Saudi Arabia CSI', value: 60.12, date: 'Mar 2025', source: 'SIA Insights', tier: 2 },
  ],
  inflationData: [
    { period: 'UAE Inflation (Dec 2025)', rate: 2.04, source: 'Trading Economics', tier: 2 },
    { period: 'Previous month (Nov 2025)', rate: 1.61, source: 'Trading Economics', tier: 2 },
    { period: 'Dubai CPI (April 2025)', rate: 2.3, source: 'Emirates NBD', tier: 2 },
    { period: 'Dubai CPI (March 2025)', rate: 2.8, source: 'Emirates NBD', tier: 2 },
    { period: 'UAE inflation forecast 2025', rate: 1.3, forecast: 1.3, source: 'Focus Economics', tier: 2 },
    { period: 'Central Bank forecast 2025', rate: 1.5, source: 'CBUAE QER', tier: 1 },
  ],
  inflationHistorical: [
    { metric: '10-year average (to 2024)', value: '1.6%' },
    { metric: 'High (December 2008)', value: '12.30%' },
    { metric: 'Low (May 2020)', value: '-2.71%' },
    { metric: 'Historical average (1990-2025)', value: '1.68%' },
  ],
  officialEntities: [
    { name: 'Ministry of Economy & Tourism', acronym: 'MoET', role: 'Economic policy, FDI, trade' },
    { name: 'Ministry of Finance', acronym: 'MoF', role: 'Budget, competitiveness reports' },
    { name: 'Central Bank of the UAE', acronym: 'CBUAE', role: 'Monetary policy, financial regulation' },
    { name: 'Federal Competitiveness & Statistics Centre', acronym: 'FCSC', role: 'Data, competitiveness indicators' },
    { name: 'Securities and Commodities Authority', acronym: 'SCA', role: 'Securities regulation' },
    { name: 'Dubai Department of Economy and Tourism', acronym: 'DubaiDET', role: 'Dubai business surveys, BCI' },
    { name: 'Statistics Centre Abu Dhabi', acronym: 'SCAD', role: 'Abu Dhabi statistics' },
    { name: 'Abu Dhabi Department of Economic Development', acronym: 'ADDED', role: 'Abu Dhabi economic development' },
  ],
  internationalOrgs: [
    { name: 'International Monetary Fund', role: 'GDP projections, Article IV consultations' },
    { name: 'World Bank', role: 'Development data, economic indicators' },
    { name: 'UNCTAD', role: 'FDI data, world investment reports' },
    { name: 'IMD World Competitiveness Center', role: 'Competitiveness rankings' },
    { name: 'Global Entrepreneurship Monitor', role: 'Entrepreneurship data' },
  ],
  sourceCredibility: [
    { source: 'IMF', tier: 0, dataQuality: 'Excellent', url: 'imf.org/en/countries/are' },
    { source: 'World Bank', tier: 0, dataQuality: 'Excellent', url: 'worldbank.org' },
    { source: 'UNCTAD', tier: 0, dataQuality: 'Excellent', url: 'unctad.org' },
    { source: 'IMD', tier: 0, dataQuality: 'Excellent', url: 'imd.org' },
    { source: 'GEM', tier: 0, dataQuality: 'Excellent', url: 'gemconsortium.org' },
    { source: 'CBUAE', tier: 1, dataQuality: 'Excellent', url: 'centralbank.ae' },
    { source: 'MoET', tier: 1, dataQuality: 'Excellent', url: 'moet.gov.ae' },
    { source: 'FCSC', tier: 1, dataQuality: 'Excellent', url: 'fcsc.gov.ae' },
    { source: 'DubaiDET', tier: 1, dataQuality: 'Excellent', url: 'dubaidet.gov.ae' },
    { source: 'Digital Dubai', tier: 1, dataQuality: 'Excellent', url: 'digitaldubai.ae' },
    { source: 'KPMG', tier: 2, dataQuality: 'Good', url: 'kpmg.com' },
    { source: 'Business Sweden', tier: 2, dataQuality: 'Good', url: 'business-sweden.com' },
    { source: 'SIA Insights', tier: 2, dataQuality: 'Good', url: 'silainsights.com' },
    { source: 'Emirates NBD Research', tier: 2, dataQuality: 'Good', url: 'emiratesnbdresearch.com' },
    { source: 'Trading Economics', tier: 3, dataQuality: 'Variable', url: 'tradingeconomics.com' },
    { source: 'Gulf Business', tier: 3, dataQuality: 'Variable', url: 'gulfbusiness.com' },
  ],
  keyMetricsSummary: [
    { indicator: 'GDP Growth (2024)', value2024: '4.0%', value2025: '4.8-5.6%', source: 'IMF' },
    { indicator: 'GDP Value', value2024: 'AED 1.776T', source: 'Salaam Gateway' },
    { indicator: 'Non-oil GDP Share', value2024: '74.6-75.5%', value2025: '75%+', source: 'FCSC' },
    { indicator: 'FDI Inflows', value2024: '$45.6B', value2025: '$45B+', source: 'UNCTAD' },
    { indicator: 'Non-oil Trade', value2024: 'AED 5.23T', value2025: '$1T+', source: 'WAM' },
    { indicator: 'Inflation', value2024: '1.7%', value2025: '1.3-2.5%', source: 'Focus Economics' },
    { indicator: 'Unemployment', value2024: '2.1%', source: 'BTI Project' },
    { indicator: 'IMD Competitiveness', value2024: '7th', value2025: '5th', source: 'IMD' },
    { indicator: 'Digital Competitiveness', value2024: '11th', value2025: '9th', source: 'IMD' },
    { indicator: 'GEM Ranking', value2024: '#1', value2025: '#1', source: 'GEM' },
  ],
}

export const ministryEconomyData: StakeholderIntelligence = {
  id: 'stakeholder-ministry-economy',
  name: 'Ministry of Economy',
  nameAr: 'وزارة الاقتصاد',
  type: 'government',
  mandate: 'Economic policy, trade facilitation, competitiveness improvement, and business environment optimization. Oversees CEPA agreements, FDI attraction, and startup ecosystem development. Core institution driving UAE economic diversification and post-oil strategy.',
  metrics: {
    digitalReach: 9800000,
    engagement: 2.8,
    sentiment: createSentimentBreakdown(65, 20, 15),
    credibility: createCredibilityScore(1, 87, 50, '2026-04-27'),
    programs: [
      createStakeholderProgram('GDP Growth 2024', '4% growth reaching $484 billion (AED 1.776T)', 'completed', 0),
      createStakeholderProgram('FDI Attraction Strategy', '$45.6 billion FDI (+48.5% YoY), #2 globally', 'active', 0),
      createStakeholderProgram('IMD Competitiveness Ranking', '#5 globally (up from #7)', 'active', 0),
      createStakeholderProgram('CEPA Trade Agreements', 'Turkey, Cambodia, Vietnam, Australia, Kenya, Malaysia, India', 'active'),
      createStakeholderProgram('Startup Ecosystem Development', '#1 GEM ranking 4th consecutive year', 'active'),
      createStakeholderProgram('Non-Oil Trade', 'AED 5.23 trillion, #11 globally (up from #17)', 'active', 0),
      createStakeholderProgram('Digital Competitiveness', '#9 globally (up from #12 in 2023)', 'active', 0),
      createStakeholderProgram('Central Bank Law 2025', 'Max fine AED 1B, virtual assets regulated', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaeeconomy', url: 'https://twitter.com/uaeeconomy', verified: true },
    { platform: 'linkedin', handle: 'UAE Ministry of Economy', url: 'https://linkedin.com/company/uae-ministry-of-economy', verified: true },
  ],
  keyFindings: [
    createKeyFinding('GDP 2024', '$484 billion (4% growth), AED 1.776 trillion', 'IMF, Salaam Gateway', 1, undefined),
    createKeyFinding('GDP Growth Q3 2025', '6.8% annual growth', 'Trading Economics', 2, undefined),
    createKeyFinding('Non-oil GDP', '74.6%-75.5% of total GDP', 'FCSC, Salaam Gateway', 1, undefined),
    createKeyFinding('FDI 2024', '$45.6 billion (+48.5% YoY), #2 globally, #1 MENA', 'UNCTAD 2025', 1, undefined),
    createKeyFinding('Greenfield FDI', '1,369 projects, AED 53.3B capital, #2 destination', 'Sheikh Mohammed / FDI Intelligence', 1, undefined),
    createKeyFinding('IMD World Competitiveness', '#5 globally (up 2 positions from #7)', 'IMD World Competitiveness 2025', 1, undefined),
    createKeyFinding('Digital Competitiveness', '#9 globally (up from #12 in 2023)', 'IMD', 2, undefined),
    createKeyFinding('GEM Startup Ranking', '#1 globally (4th consecutive year)', 'Global Entrepreneurship Monitor 2025', 1, undefined),
    createKeyFinding('Non-oil trade 2024', 'AED 5.23 trillion (#11 global, up from #17)', 'WAM', 1, undefined),
    createKeyFinding('Non-oil trade 2025', '$1+ trillion first time', 'Gulf Business', 3, undefined),
    createKeyFinding('Business Climate', '71% rate good/very good (Business Sweden)', 'Business Sweden 2025', 2, undefined),
    createKeyFinding('CEO Confidence', '80% company outlook, 84% national economy (KPMG)', 'KPMG CEO Outlook 2025', 2, undefined),
    createKeyFinding('PMI 2025 average', '54.0 (expansionary >50)', 'S&P Global', 1, undefined),
    createKeyFinding('UAE Consumer Sentiment', '67.89 (Mar 2025), down 5.2% MoM', 'SIA Insights', 2, undefined),
    createKeyFinding('Inflation Dec 2025', '2.04% YoY', 'Trading Economics', 2, undefined),
    createKeyFinding('AML fines 2025', 'AED 380M+, 31 institutions penalized', 'Taxadepts', 3, undefined),
    createKeyFinding('Central Bank Law 2025', 'Max fine increased to AED 1B (from AED 200M)', 'Federal Decree-Law No. 6 of 2025', 1, undefined),
    createKeyFinding('CEPA contribution', 'AED 135 billion (+42%)', 'INTLBM', 2, undefined),
    createKeyFinding('Startup funding H1 2025', '$541M (+18% YoY)', 'Founder Connects', 3, undefined),
    createKeyFinding('National Investment Strategy', 'Target: double annual FDI by 2031', 'Ministry of Finance', 1, undefined),
  ],
  uaeRelevance: createUAERelevance(94, 'critical', 'Core economic governance, trade policy, FDI attraction, and diversification strategy institution'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Ministry of Economy UAE', 'https://www.economy.gov.ae', 1, '2026-04-27'),
    createSource('UNCTAD World Investment Report 2025', 'https://unctad.org', 1, '2025-06-20'),
    createSource('IMD World Competitiveness 2025', 'https://www.imd.org', 1, '2025-05-30'),
    createSource('GEM Global Report 2024-2025', 'https://www.gemconsortium.org', 1, '2025-03-15'),
    createSource('IMF Article IV Consultation', 'https://www.imf.org/en/countries/are', 0, '2025-10-15'),
    createSource('Central Bank of UAE', 'https://www.centralbank.ae', 1, '2025-09-16'),
    createSource('WAM - UAE Trade Data', 'https://wam.ae', 1, '2025-01-15'),
    createSource('Digital Dubai', 'https://www.digitaldubai.ae', 1, '2025-11-15'),
    createSource('KPMG Middle East CEO Outlook 2025', 'https://kpmg.com', 2, '2025-03-01'),
    createSource('Business Sweden UAE Business Climate 2025', 'https://business-sweden.com', 2, '2025-02-15'),
    createSource('SIA Insights Consumer Sentiment Q1 2025', 'https://silainsights.com', 2, '2025-04-01'),
    createSource('Salaam Gateway UAE Economy', 'https://salaamgateway.com', 2, '2025-01-20'),
    createSource('Gulf Business UAE Economy', 'https://gulfbusiness.com', 3, '2025-04-10'),
    createSource('Trading Economics UAE', 'https://tradingeconomics.com', 3, '2026-04-27'),
    createSource('Tax Adepts AML Enforcement', 'https://taxadepts.com', 3, '2025-07-15'),
    createSource('Federal Decree-Law No. 6 of 2025', 'https://rulebook.centralbank.ae', 1, '2025-09-08'),
  ],
  lastUpdated: '2026-04-29',
}

export const gcoData: StakeholderIntelligence = {
  id: 'stakeholder-gco',
  name: 'Government Communications Office / Government National Media Office',
  nameAr: 'مكتب الاتصال الحكومي',
  type: 'government',
  mandate: 'Federal government strategic communications, crisis response coordination, and public trust management. Coordinates across 22 government entities via GNGC. Operates GCC Media Affairs Committee with 4 subcommittees. Benchmarks crisis response under 15 minutes. Operates under Executive Council Decision No. (47) of 2025 launching Dubai Government Communication Guide with three governance tracks.',
  metrics: {
    digitalReach: 35000000,
    engagement: 1.9,
    sentiment: createSentimentBreakdown(58, 27, 15),
    credibility: createCredibilityScore(1, 89, 20, '2026-04-29'),
    programs: [
      createStakeholderProgram('Crisis Response Protocol', 'Under 15 minute initial response, <60 min detailed response, <90 min press conference readiness', 'active', 0),
      createStakeholderProgram('Public Trust Measurement', 'Top 3 globally in government trust rankings (Edelman Trust Barometer 2026)', 'active', 0),
      createStakeholderProgram('GNGC Coordination', '22 government entities via General Network of Government Communication, 4 subcommittees', 'active', 0),
      createStakeholderProgram('Social Media Engagement', 'Facebook 1.54% engagement (1.9M avg impressions), Instagram 2.31% engagement (1.3M avg impressions)', 'active', 0),
      createStakeholderProgram('GDRFA Dubai Programs', '120 Reputation Ambassadors trained, Stevie International Award 2025, AED 150M Creators HQ Fund', 'active', 150000000),
      createStakeholderProgram('UK Digital Savings Benchmark', '£1.51 per citizen annual digital savings, £256,567 county government savings', 'active', 0),
      createStakeholderProgram('GNGC Governance Tracks', '3 governance tracks: Strategic Communication, Media Communication, Corporate Communication', 'active', 0),
      createStakeholderProgram('GDRFA Ideal Face Campaign', '2025 Stevie International Award - Best Marketing Campaign', 'completed', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaegco', url: 'https://twitter.com/uaegco', verified: true },
    { platform: 'facebook', handle: 'UAE Government Communications', url: 'https://facebook.com/uaegco', verified: true },
    { platform: 'instagram', handle: '@uaegco', url: 'https://instagram.com/uaegco', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Crisis response benchmark - Initial', '<15 minutes', 'Regroup Crisis Comms Standards 2024', 1, undefined),
    createKeyFinding('Crisis response benchmark - Detailed', '<60 minutes', 'Regroup Crisis Comms Standards 2024', 1, undefined),
    createKeyFinding('Crisis response benchmark - Press Conference', '<90 minutes', 'Regroup Crisis Comms Standards 2024', 1, undefined),
    createKeyFinding('Public trust ranking', 'Top 3 globally', 'Edelman Trust Barometer 2026', 1, undefined),
    createKeyFinding('GNGC entities coordinated', '22', 'Media Office GNGC Announcement Dec 2025', 1, undefined),
    createKeyFinding('GNGC governance tracks', '3 tracks established', 'Executive Council Decision No. (47) of 2025', 1, undefined),
    createKeyFinding('GNGC subcommittees', '4 subcommittees', 'GCO Structure 2026', 1, undefined),
    createKeyFinding('Facebook engagement rate', '1.54%', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Facebook page impressions', '1.9M average', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Instagram engagement rate', '2.31%', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Instagram profile impressions', '1.3M average', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Facebook posting frequency', '0.63 posts/day', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Instagram posting frequency', '1.01 posts/day', 'Public Sector Marketing Pros 2024', 2, undefined),
    createKeyFinding('Abu Dhabi Media Office sections', '15+ thematic sections', 'Media Office Abu Dhabi 2025', 1, undefined),
    createKeyFinding('GDRFA Reputation Ambassadors', '120 trained', 'Gulf News 2025', 2, undefined),
    createKeyFinding('GDRFA Stevie Award', '2025 Stevie International Award - Best Marketing Campaign', 'Gulf News 2025', 2, undefined),
    createKeyFinding('UK digital savings per citizen', '£1.51 ($1.86 USD)', 'Granicus Research 2024', 2, undefined),
    createKeyFinding('UK county gov annual savings', '£256,567 (~$391,700)', 'Granicus Research 2024', 2, undefined),
    createKeyFinding('UK unitary gov annual savings', '£87,955 (~$134,280)', 'Granicus Research 2024', 2, undefined),
    createKeyFinding('UK district gov annual savings', '£26,904 (~$41,074)', 'Granicus Research 2024', 2, undefined),
    createKeyFinding('Americans trusting federal govt', '33%', 'Our Public Service/Edelman 2025', 2, undefined),
    createKeyFinding('Americans distrusting federal govt', '47%', 'Our Public Service/Edelman 2025', 2, undefined),
    createKeyFinding('Email behavior influence rate', '44%', 'Granicus Research 2024', 2, undefined),
    createKeyFinding('UK Skripal response expelled officers', '150+ Russian officers', 'Shorenstein Center 2018', 2, undefined),
    createKeyFinding('Countries lacking disinformation guidelines', '38% of 46 nations', 'Shorenstein Center/OECD 2021', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(95, 'critical', 'Central coordination for all government communications'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Government Communications Office', 'https://www.gco.gov.ae', 1, '2026-04-18'),
    createSource('UAE Cabinet - Government Media Office', 'https://uaecabinet.ae/en/the-uae-government-media-office', 1, '2026-04-20'),
    createSource('Media Office Abu Dhabi - GNGC', 'https://mediaoffice.ae/en/news/2025/december/22-12/the-general-network-of-government-communication', 1, '2026-04-20'),
    createSource('Edelman Trust Barometer 2026', 'https://www.edelman.com', 2, '2026-01-20'),
    createSource('Regroup - Crisis Communications', 'https://regroup.com/blog/7-pillars-of-effective-crisis-communications/', 2, '2026-04-15'),
    createSource('Public Sector Marketing Pros - Social Benchmarks', 'https://publicsectormarketingpros.com/social-media-benchmarks-in-government/', 3, '2026-04-10'),
    createSource('Granicus - ROI Measurement', 'https://granicus.com/blog/measuring-roi-in-government-communications/', 2, '2026-04-12'),
    createSource('Gulf News - GDRFA Dubai Award', 'https://gulfnews.com/uae/government/gdrfa-dubai-wins-global-award-for-best-government-communication-1.500268933', 2, '2026-04-18'),
    createSource('Our Public Service - Public Trust 2025', 'https://ourpublicservice.org/publications/the-state-of-public-trust-in-government-2025/', 2, '2026-04-05'),
    createSource('Shorenstein Center - Gov Communication', 'https://shorensteincenter.org/resource/national-security-imperative-modernization-government-communication-structures/', 2, '2026-04-08'),
    createSource('Media Office Abu Dhabi', 'https://www.mediaoffice.abudhabi/en/', 1, '2026-04-15'),
  ],
  lastUpdated: '2026-04-29',
}

export const prAgencyData: StakeholderIntelligence = {
  id: 'stakeholder-pr-agencies',
  name: 'PR Agencies and Communications Firms',
  nameAr: 'وكالات العلاقات العامة وشركات الاتصالات',
  type: 'corporate',
  mandate: 'Professional communications and public relations services operating in UAE and Middle East market. Includes global agencies (Edelman, Weber Shandwick, WPP, Publicis, Dentsu), regional firms (FP7 McCann, Memac Ogilvy, TBWA\\RAAD), and specialized tools (Cision, Meltwater, Brandwatch). Market valued at $8.56B in Middle East (2026) with 4.68% CAGR, growing to $10.76B by 2031. Critical infrastructure for message amplification and narrative management with AI transformation reshaping the industry.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(62, 20, 18),
    credibility: createCredibilityScore(1, 82, 35, '2026-04-28'),
    programs: [
      createStakeholderProgram('Global PR Market', '$113B global market (2025), $15-20B PR software market', 'active', 0),
      createStakeholderProgram('Middle East PR Market', '$8.56B (2026), 4.68% CAGR, $10.76B forecast 2031', 'active', 0),
      createStakeholderProgram('Influencer Marketing', '$32.55B global market (2026), $5.20-6.50 ROI per $1', 'active', 0),
      createStakeholderProgram('AI-PR Transformation', '3-5x placement rate, 70% faster execution, 40% response rate', 'active', 0),
      createStakeholderProgram('Crisis Response', '24-minute timeline compression, 12-48hr earlier detection', 'active', 0),
      createStakeholderProgram('Earned Media Growth', '2x budget increase by 2027, 92% consumer trust', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'linkedin', handle: 'PR industry', url: 'https://linkedin.com', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Global PR market size', '$113 billion (2025)', 'PRovoke Media Top 250', 1, undefined),
    createKeyFinding('Middle East PR market', '$8.56B (2026), 4.68% CAGR', 'Mordor Intelligence 2026', 1, undefined),
    createKeyFinding('Market forecast 2031', '$10.76B', 'Mordor Intelligence 2031', 1, undefined),
    createKeyFinding('Influencer market value', '$32.55B (2026 projected)', 'Sociallyin Report', 1, undefined),
    createKeyFinding('Influencer ROI', '$5.20-$6.50 per $1 spent', 'Sociallyin 2026', 1, undefined),
    createKeyFinding('Top performer ROI', '$18.00 per $1', 'Sociallyin 2026', 2, undefined),
    createKeyFinding('Instagram ROI', '$4.12 per $1, 80.8% usage', 'Sociallyin 2026', 1, undefined),
    createKeyFinding('TikTok engagement', '9.7% engagement rate', 'Sociallyin 2026', 1, undefined),
    createKeyFinding('Consumer trust earned media', '92% trust earned media', 'Archive.com 2026', 1, undefined),
    createKeyFinding('AI placement improvement', '3-5x higher placement rates', 'OBA PR 2026', 1, undefined),
    createKeyFinding('AI response rate', '40% (vs 8-12% traditional)', 'OBA PR 2026', 1, undefined),
    createKeyFinding('Crisis timeline compression', '24 hrs to 24 minutes', 'UPRAISE PR 2026', 1, 'YELLOW'),
    createKeyFinding('Earned media budget increase', '2x by 2027', 'Gartner 2026', 1, undefined),
    createKeyFinding('LLM citations from earned media', '27%', 'Gartner 2026', 2, undefined),
    createKeyFinding('Cision database', '1.4M+ media contacts', 'PRLab 2026', 1, undefined),
    createKeyFinding('Meltwater contacts', '380K+ journalists', 'Meltwater 2026', 1, undefined),
    createKeyFinding('Brandwatch sources', '100M+ sources, 1.2T documents', 'PRLab 2026', 1, undefined),
    createKeyFinding('Vuelio database', '1.8M contacts', 'PRLab 2026', 1, undefined),
    createKeyFinding('PR/reputation CAGR', '5.93% fastest growing segment', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Digital-only agencies', '41.72% market share', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Vision 2030 impact', '+1.5% CAGR growth driver', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Pitch response rate', 'Only 3% receive replies', 'OBA PR 2026', 2, 'YELLOW'),
    createKeyFinding('Pitches per journalist daily', '200+ (up from 50-80 in 2020)', 'OBA PR 2026', 2, undefined),
    createKeyFinding('Reporter reduction', '40% from media consolidation', 'OBA PR 2026', 2, undefined),
    createKeyFinding('Measurement budget', '2.9% vs marketing 8%', 'Gartner 2026', 2, 'YELLOW'),
    createKeyFinding('CCO difficulty demonstrating impact', '47%', 'Gartner 2026', 2, undefined),
    createKeyFinding('Top global agency', 'Edelman (independent)', 'Zen Media 2026', 1, undefined),
    createKeyFinding('Global holdings', 'WPP, Publicis, Dentsu dominate', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Regional independents', 'FP7 McCann, Memac Ogilvy, TBWA\\RAAD', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Saudi Arabia share', '36.63% of Middle East market', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Qatar fastest growth', '5.83% CAGR', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Large enterprise billings', '58.63% market share', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Specialized mandates', '46.51% share, 5.82% CAGR', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Private enterprise revenue', '62.38%', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('E-commerce market impact', '$50B (2025), +1.0% CAGR', 'Mordor Intelligence', 1, undefined),
    createKeyFinding('Instagram engagement decline', '2.18% to 1.59% (2021-2024)', 'Cision 2026', 2, 'YELLOW'),
    createKeyFinding('TikTok nano-influencer engagement', '10.3%', 'Cision 2026', 2, undefined),
    createKeyFinding('Influencer whitelisting lift', '+20-50% vs standard ads', 'Cision 2026', 2, undefined),
    createKeyFinding('PR pros brand awareness focus', '73%', 'Cision 2026', 2, undefined),
    createKeyFinding('PR pros driving revenue', '55%', 'Cision 2026', 2, undefined),
    createKeyFinding('Marketer AI in creator ops', '60%', 'Sociallyin 2026', 2, undefined),
    createKeyFinding('Consumer trust influencers', '69% trust influencers over brand', 'Sociallyin 2026', 2, undefined),
    createKeyFinding('ROI measurement challenge', '79% struggle with measurement', 'Archive.com 2026', 2, 'YELLOW'),
    createKeyFinding('Target placements annual', '20-30 total (3-5 intl tier-1)', 'OBA PR 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(88, 'high', 'Critical infrastructure for message amplification and narrative management in UAE market'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Mordor Intelligence Middle East Market', 'https://www.mordorintelligence.com', 1, '2026-04-28'),
    createSource('OBA PR Dubai Media Relations', 'https://obapr.com', 1, '2026-04-28'),
    createSource('Sociallyin Influencer Marketing', 'https://sociallyin.com', 2, '2026-04-28'),
    createSource('Gartner PR Research 2026', 'https://gartner.com', 1, '2026-04-28'),
    createSource('PRovoke Media Top 250', 'https://www.provokemedia.com', 1, '2026-04-01'),
    createSource('Cision PR Trends 2026', 'https://www.cision.com', 1, '2026-04-15'),
    createSource('OBA PR AI in PR 2026', 'https://obapr.com', 1, '2026-04-28'),
    createSource('PRLab Best PR Tools', 'https://prlab.co', 2, '2026-04-28'),
    createSource('Archive.com Earned Media', 'https://archive.com', 3, '2026-03-15'),
    createSource('UPRAISE PR Crisis Management', 'https://upraisepr.com', 2, '2026-04-10'),
    createSource('The Drum World Creative Rankings', 'https://www.thedrum.com', 1, '2026-04-28'),
    createSource('Onclusive PR Strategy Hub', 'https://onclusive.com', 1, '2026-04-01'),
    createSource('Meltwater PR KPIs', 'https://www.meltwater.com', 1, '2026-04-15'),
    createSource('YouGov Brand Tracking', 'https://yougov.com', 1, '2026-04-01'),
    createSource('Zen Media Best PR Firms', 'https://zenmedia.com', 2, '2026-03-20'),
    createSource('Observer PR Power List', 'https://observer.com', 1, '2026-04-15'),
    createSource('Forbes PR Tools 2026', 'https://forbes.com', 1, '2026-04-10'),
    createSource('PR News Online KPIs', 'https://www.prnewsonline.com', 1, '2026-04-20'),
    createSource('Vuelio PR Metrics', 'https://www.vuelio.com', 2, '2026-04-15'),
    createSource('Pella Dynamics Digital PR Dubai', 'https://pelladynamics.com', 2, '2026-04-20'),
  ],
  lastUpdated: '2026-04-29',
}

// ============================================================================
// INTERNATIONAL RELATIONS DATA (from MD 7-10)
// ============================================================================

export interface GCCSoftPowerData {
  gspiRank: number
  gccRank: number
  softPowerPillars: string[]
  softPowerStrategyLaunch: string
  softPowerCouncilEstablished: string
  majorInitiatives: string[]
}

export interface GCCSummitData {
  name: string
  date: string
  location: string
  outcome?: string
  tier: TierLevel
}

export interface ArabLeagueIntlData {
  memberCount: number
  mediaCooperationDate: string
  mediaActionPlanDate: string
  keyInitiatives: string[]
  chinaCooperationDate?: string
}

export interface OICIntlData {
  memberCount: number
  established: string
  headquarters: string
  unObserverStatus: string
  conferenceFramework: string
}

export interface BilateralRelationData {
  partner: string
  tradeVolume?: string
  investment?: string
  agreements?: string[]
  keyMeetings?: { date: string; event: string }[]
}

export interface CrisisResponseIntlData {
  attacksSinceFeb2026: number
  coordinationMeetings: number
  lebanonDisplaced: number
  lebanonCasualties: number
  lebanonInjuries: number
  condemnations: string[]
}

export interface MultilateralPositioningData {
  bricsMember: boolean
  bricsJoined: string
  g20Guest?: string
  cop28Host?: string
  dialoguePartnerships: string[]
  cepaAgreements: number
}

export interface ThreatIndicatorIntlData {
  arabOpinionIndex?: {
    countriesSurveyed: number
    respondents: number
    greatestThreat: string
    israelThreat: number
    usThreat: number
    iranThreat: number
  }
  gulfThreatData?: {
    kuwaitIranThreat: number
    israelPoliciesThreat: number
    usPoliciesThreat: number
    iranPoliciesThreat: number
  }
  redSeaThreat?: {
    foodImportsDisrupted: number
    desalinationThreat: number
  }
}

export const intlRelationsData: StakeholderIntelligence = {
  id: 'stakeholder-intl-relations',
  name: 'International and Regional Organizations',
  nameAr: 'المنظمات الدولية والإقليمية',
  type: 'international',
  mandate: 'Multilateral bodies and fora where UAE maintains membership and active participation. Includes GCC, Arab League, OIC (57 member states), UN agencies, and bilateral partnership frameworks. Active in regional security, soft power projection, and crisis response coordination.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(55, 28, 17),
    credibility: createCredibilityScore(1, 90, 35, '2026-04-27'),
    programs: [
      createStakeholderProgram('GCC Coordination', 'Gulf Cooperation Council - 6 member states coordinating on security, economy, and media', 'active', 0),
      createStakeholderProgram('Arab League Representation', '22-member state bloc coordinating on Palestinian cause and regional issues', 'active', 0),
      createStakeholderProgram('OIC Membership', '57-member Organization of Islamic Cooperation - media institution coordination', 'active', 0),
      createStakeholderProgram('UN Peacekeeping & Information Integrity', 'UAE supports UN information integrity, multilingualism, and peacekeeping', 'active', 0),
      createStakeholderProgram('Soft Power Leadership', 'UAE ranked 10th globally, #1 in GCC - 6 soft power pillars', 'active', 0),
      createStakeholderProgram('Regional Threat Monitoring', '6,000+ missile/drone attacks tracked since February 2026', 'active', 0),
      createStakeholderProgram('Bilateral Partnerships', 'US ($1.4T framework), EU (SPA negotiations), China, India ($100B trade), Canada, France, Italy', 'active', 0),
      createStakeholderProgram('Crisis Response Coordination', 'GCC-EU dialogue, Lebanon crisis response, Yemen stance monitoring', 'active', 0),
      createStakeholderProgram('Multilateral Positioning', 'BRICS member since 2024, G20 guest, COP28 host, I2U2, IMEC participant', 'active', 0),
      createStakeholderProgram('Collective Campaigns', 'Climate media initiatives, Arabic content trends, Palestinian cause coordination', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@gccsg', url: 'https://twitter.com/gccsg', verified: true },
    { platform: 'twitter-x', handle: '@ArabLeague', url: 'https://twitter.com/ArabLeague', verified: true },
    { platform: 'twitter-x', handle: '@OIC_OCI', url: 'https://twitter.com/OIC_OCI', verified: true },
    { platform: 'twitter-x', handle: '@UAE_UN', url: 'https://twitter.com/UAE_UN', verified: true },
  ],
  keyFindings: [
    createKeyFinding('UAE Global Soft Power Index', '10th globally, #1 in GCC (59.4/100 score)', 'Portland Soft Power 2026', 1, undefined),
    createKeyFinding('GCC Soft Power Pillars', '6: Humanitarian, Scientific/Academic, National Representatives, People, Cultural/Media, Economic Diplomacy', 'GRC', 1, undefined),
    createKeyFinding('GCC-EU First Summit', 'October 16, 2024 Brussels - Strategic Partnership for Peace and Prosperity', 'GCC Statement', 0, undefined),
    createKeyFinding('GCC First-Time Summits', 'GCC-China, GCC-ASEAN, GCC-EU, GCC-Central Asia - all first-time summits in 2023-2024', 'GCC Secretariat', 0, undefined),
    createKeyFinding('Arab League Media Action Plan', 'September 17, 2025 - Coordinated action against Israeli misinformation', 'Arab League', 1, undefined),
    createKeyFinding('Arab League-China Forum', 'November 2025 Chongqing - Training, joint productions, media exchanges', 'Arab League', 1, undefined),
    createKeyFinding('OIC Member States', '57 member states across Middle East, Africa, Asia, Europe, Americas', 'OIC Official', 1, undefined),
    createKeyFinding('UAE at UN Fourth Committee', 'November 4, 2025 - Information integrity, AI governance, multilingualism, journalist protection', 'UAE UN Mission', 0, undefined),
    createKeyFinding('UAE-US Trade', '$34.4 billion (2024) - Largest MENA trading partner, $1.4T 10-year investment framework', 'MOFA', 1, undefined),
    createKeyFinding('UAE-Canada 50th Anniversary', '2024 - $3.4B trade, FIPA signed November 2025, CEPA intent announced', 'International.gc.ca', 2, undefined),
    createKeyFinding('UAE-India Trade', '$100.05 billion (FY 2024-25)', 'Bilateral Dialogue', 2, undefined),
    createKeyFinding('UAE-France AI Partnership', '$50 billion - AI and data center cooperation', 'Multiple Sources', 1, undefined),
    createKeyFinding('UAE-Italy Partnership', '$40 billion - AI, quantum, energy', 'Multiple Sources', 1, undefined),
    createKeyFinding('GCC Crisis Coordination', '6,000+ missile/drone attacks since Feb 2026, 50+ coordination meetings', 'GCC Secretariat', 0, 'RED'),
    createKeyFinding('Lebanon Crisis Impact', '1 million+ displaced, 2,000+ casualties, 7,000+ injuries', 'GCC Secretariat', 0, 'RED'),
    createKeyFinding('UAE BRICS Membership', 'Joined expanded BRICS early 2024, participated in Kazan Summit October 2024', 'Belfer Center', 1, undefined),
    createKeyFinding('G20 Guest & COP28', 'Brazil G20 guest November 2024, COP28 host 2023 with UAE Consensus', 'Multiple Sources', 1, undefined),
    createKeyFinding('EU Humanitarian Support', 'EUR 1.6 billion to Palestine, EUR 300+ million ongoing to Yemen', 'EU Statement', 0, undefined),
    createKeyFinding('Arabic Content Gap', '420+ million Arabic speakers but only 3% of online content in Arabic', 'The Brand Berries', 2, undefined),
    createKeyFinding('MENA Cannes Lions 2025', '32 wins (+45% YoY) - Growing creative industry', 'Industry Report', 2, undefined),
    createKeyFinding('Arab Opinion - Greatest Threat', 'Israel 28% general, 44% to Arab nation; US 10% general, 21% to Arab nation', 'Arab Center DC', 1, undefined),
    createKeyFinding('Gulf Threat Perception', '77% see US policies as threatening, 84% see Israeli policies as threatening', 'Arab Center DC', 1, 'RED'),
    createKeyFinding('Red Sea Threat', '70% of region\'s food imports disrupted, >90% desalination plants under threat', 'European Times', 3, 'RED'),
    createKeyFinding('FIT-P Initiative', 'Future of Investment and Trade Partnership - Singapore, UAE, New Zealand founding members', 'Habtoor Research', 2, undefined),
    createKeyFinding('CEPA Agreements', '32 agreements since September 2021', 'Multiple Sources', 2, undefined),
    createKeyFinding('Digital Economy Target', '20% of non-oil GDP by 2030, 12.3% annual digital trade growth', 'Multiple Sources', 2, undefined),
    createKeyFinding('Regional Air Defense', 'Being coordinated to counter suicide drones - GCC security integration', 'Security Analysis', 3, undefined),
    createKeyFinding('Gulf-Iran Security', 'New cooperation mechanisms: early warning systems, air defense, diplomatic platforms', 'Journal-NEO', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(96, 'critical', 'Critical for UAE multilateral engagement, regional security, soft power projection, and crisis response coordination'),
  alertLevel: 'RED',
  sources: [
    createSource('GCC General Secretariat', 'https://www.gcc-sg.org', 0, '2026-04-10'),
    createSource('UAE Ministry of Foreign Affairs', 'https://www.mofa.gov.ae', 0, '2026-04-18'),
    createSource('Arab League', 'https://www.lasportal.org', 1, '2026-03-20'),
    createSource('OIC Official', 'https://www.oic-oci.org', 1, '2026-04-01'),
    createSource('UAE UN Mission', 'https://uaeun.org', 0, '2026-04-20'),
    createSource('Portland Soft Power Index 2026', 'https://softpower30.com', 2, '2026-03-15'),
    createSource('Gulf Research Center', 'https://www.grc.net', 1, '2026-04-01'),
    createSource('Belfer Center Harvard', 'https://www.belfercenter.org', 1, '2026-03-15'),
    createSource('Arab Center DC', 'https://arabcenterdc.org', 1, '2026-04-15'),
    createSource('Chatham House', 'https://www.chathamhouse.org', 1, '2026-04-10'),
    createSource('Clingendael Institute', 'https://www.clingendael.org', 1, '2026-04-05'),
    createSource('Quincy Institute', 'https://quincyinst.org', 2, '2026-03-20'),
    createSource('7amleh Report', 'https://7amleh.org', 2, '2026-04-01'),
    createSource('The Brand Berries', 'https://thebrandberries.com', 2, '2026-03-01'),
    createSource('Habtoor Research', 'https://www.habtoorresearch.com', 2, '2026-03-15'),
    createSource('Regional Security Assessment', '', 2, '2026-04-01'),
    createSource('Security Council Report', 'https://www.securitycouncilreport.org', 1, '2026-04-15'),
    createSource('UN Counter-Terrorism', 'https://www.un.org', 0, '2026-04-10'),
  ],
  lastUpdated: '2026-04-27',
}

// Extended data structures for International Relations
export const gccSoftPowerData: GCCSoftPowerData = {
  gspiRank: 10,
  gccRank: 1,
  softPowerPillars: [
    'Humanitarian',
    'Scientific/Academic',
    'National Representatives',
    'People',
    'Cultural/Media',
    'Economic Diplomacy',
  ],
  softPowerStrategyLaunch: 'September 2017',
  softPowerCouncilEstablished: '2017',
  majorInitiatives: [
    'Office for Public and Cultural Diplomacy: 2018',
    'Government Experience Exchange Program: 2018',
    'Emirates Mars Mission Hope Probe: 2020 (first Arab probe to Mars)',
    'Rashid lunar rover: 2022',
    'First Emirati astronaut (Hazzaa Al Mansoori): 2019',
    'MBRGI (Mohammed bin Rashid Al Maktoum Global Initiatives)',
    'Dubai Humanitarian logistics hub',
    'Khalifa bin Zayed Al Nahyan Foundation (KBZF)',
    'Masdar City: Initiated 2006',
    'Century 2071 Plan',
    'Louvre Abu Dhabi: 2017',
    'Guggenheim Abu Dhabi: Expected 2026',
    'Sorbonne Universite Abu Dhabi: 2006',
    'NYU Abu Dhabi: 2010',
    'Dubai Knowledge Village/DIAC: 2003',
    'Abu Dhabi F1 Grand Prix: Since 2009',
    'Manchester City takeover: 2008',
  ],
}

export const gccSummitData: GCCSummitData[] = [
  { name: '1st GCC-EU Summit', date: 'October 16, 2024', location: 'Brussels', outcome: 'Strategic Partnership for Peace and Prosperity', tier: 0 },
  { name: '2nd GCC-EU Summit', date: '2026', location: 'Saudi Arabia', outcome: 'Planned', tier: 0 },
  { name: '2nd High-Level Ministerial Forum on Regional Security', date: 'October 5, 2025', location: 'Kuwait', outcome: 'Security Dialogue', tier: 0 },
  { name: '2nd GCC-EU Regional Security Dialogue', date: 'April 24, 2025', location: 'Brussels', outcome: 'Security Cooperation', tier: 0 },
  { name: 'Maritime Security Seminar', date: 'May 15-16, 2025', location: 'Brussels', outcome: 'Maritime', tier: 0 },
  { name: 'EU-GCC Cyber Diplomacy Roundtable', date: 'October 1-2, 2025', location: 'Riyadh', outcome: 'Cybersecurity', tier: 0 },
  { name: 'Directors of Criminal Investigation Meeting', date: 'February 5, 2025', location: 'Abu Dhabi', outcome: 'Law Enforcement', tier: 0 },
  { name: '8th GCC-EU Business Forum', date: 'October 2024', location: 'Doha', outcome: 'Trade', tier: 0 },
  { name: '9th GCC-EU Business Forum', date: 'November 5-6, 2025', location: 'Kuwait', outcome: 'Trade', tier: 0 },
  { name: '14th GCC-EU Macro-economic Dialogue', date: 'December 2025', location: 'TBD', outcome: 'Economic', tier: 0 },
  { name: '1st GCC-EU Parliamentary Meeting', date: 'June 24, 2025', location: 'Abu Dhabi', outcome: 'Legislative', tier: 0 },
  { name: '33rd EU-GCC Joint Cooperation Committee', date: 'September 5, 2025', location: 'Brussels', outcome: 'Cooperation', tier: 0 },
  { name: '26th GCC-EU Political Committee', date: 'May 15, 2025', location: 'Riyadh', outcome: 'Political', tier: 0 },
  { name: '2nd GCC-EU Young Leaders in Regional Diplomacy', date: 'October 6, 2025', location: 'Kuwait', outcome: '14 diplomats', tier: 0 },
  { name: 'GCC-China Summit', date: '2024', location: 'China', outcome: 'First-time summit', tier: 0 },
  { name: 'GCC-ASEAN Summit', date: 'October 2023', location: 'UAE', outcome: 'First-time summit', tier: 0 },
  { name: 'GCC-Central Asia Summit', date: '2024', location: 'Central Asia', outcome: 'First-time summit', tier: 0 },
]

export const arabLeagueIntlData: ArabLeagueIntlData = {
  memberCount: 22,
  mediaCooperationDate: 'May 8, 2025',
  mediaActionPlanDate: 'September 17, 2025',
  keyInitiatives: [
    'Arab League Forum on Media and Tolerance: May 8, 2025 Cairo',
    'Media action plan against Israeli misinformation: September 17, 2025',
    'Arab media strategy development',
    'Historic documentation programs and preservation of Palestinian memory',
    'Solidarity initiatives with Palestinian media bloc',
    'International day of solidarity with Palestinian media (May 11)',
    'Arab-Chinese Media Cooperation Forum: November 2025 Chongqing',
    '104th Standing Committee for Arab Media: February 10-11, 2026 Kuwait',
    '22nd Executive Bureau of Council of Arab Information Ministers: February 10-11, 2026 Kuwait',
  ],
  chinaCooperationDate: 'November 2025',
}

export const oicIntlData: OICIntlData = {
  memberCount: 57,
  established: '1969, Rabat, Morocco',
  headquarters: 'Jeddah, Saudi Arabia',
  unObserverStatus: 'Since 1975',
  conferenceFramework: 'Islamic Conference of Information Ministers',
}

export const bilateralRelationsData: BilateralRelationData[] = [
  {
    partner: 'United States',
    tradeVolume: '$34.4 billion (2024)',
    investment: '$1.4 trillion over 10 years',
    agreements: ['AI Data Center 1GW (5GW planned)', 'Energy Partnerships $60B ADNOC', 'LNG Strategic Partnership', 'Cloud Adoption $181B by 2033'],
    keyMeetings: [
      { date: 'May 15-16, 2025', event: 'President Trump state visit' },
    ],
  },
  {
    partner: 'Canada',
    tradeVolume: '$3.4 billion (2024)',
    investment: '$2+ trillion UAE SWFs assets',
    agreements: ['JC MoU July 6, 2022', 'Development Cooperation MoU 2014', 'FIPA November 2025', 'CEPA intent announced November 2025'],
    keyMeetings: [
      { date: 'November 20, 2025', event: 'Prime Minister Carney visit (first PM visit in 40+ years)' },
      { date: 'June 19-20, 2025', event: 'Sheikh Abdullah bin Zayed visit' },
      { date: 'October 2025', event: 'AI/Data Center MoU signed' },
    ],
  },
  {
    partner: 'China',
    tradeVolume: 'Doubled since 1984 (sustained expansion)',
    agreements: ['MoU with China National Radio and Television Corporation', 'Training and joint production initiatives', 'Media exchanges'],
    keyMeetings: [
      { date: 'November 2025', event: 'Arab-Chinese Media Cooperation Forum Chongqing' },
    ],
  },
  {
    partner: 'European Union',
    tradeVolume: 'Strategic Partnership Agreement negotiations',
    agreements: ['EU-GCC Cooperation Agreement (1988)', 'SPA negotiations announced December 15, 2025'],
  },
  {
    partner: 'India',
    tradeVolume: '$100.05 billion (FY 2024-25)',
    agreements: ['I2U2 member', 'IMEC corridor participant', 'Trilateral Cooperation Initiative with France'],
  },
  {
    partner: 'France',
    investment: '$50 billion - AI/Data Center Partnership',
  },
  {
    partner: 'Italy',
    investment: '$40 billion - AI, quantum, energy',
  },
]

export const crisisResponseIntlData: CrisisResponseIntlData = {
  attacksSinceFeb2026: 6000,
  coordinationMeetings: 50,
  lebanonDisplaced: 1000000,
  lebanonCasualties: 2000,
  lebanonInjuries: 7000,
  condemnations: [
    'Iranian attacks on GCC states (6,000+ attacks)',
    'Drone attacks targeting Kuwaiti border posts from Iraq',
    'Storming of Al-Aqsa Mosque by settlers',
    'Terrorist plots targeting UAE (thwarted)',
  ],
}

export const multilateralPositioningIntlData: MultilateralPositioningData = {
  bricsMember: true,
  bricsJoined: 'early 2024',
  g20Guest: 'Brazil November 2024',
  cop28Host: '2023 - UAE Consensus adopted',
  dialoguePartnerships: [
    'Shanghai Cooperation Organization (dialogue partner)',
    'GCC-ASEAN Summit (convened October 2023)',
    'GCC-EU Summit (joined inaugural October 2024)',
    'I2U2 (India, Israel, UAE, US)',
    'Trilateral Cooperation Initiative (UAE, India, France)',
    'IMEC Corridor (India-Middle East-Europe)',
    'Belt and Road Initiative (partner)',
  ],
  cepaAgreements: 32,
}

export const threatIndicatorIntlData: ThreatIndicatorIntlData = {
  arabOpinionIndex: {
    countriesSurveyed: 15,
    respondents: 40130,
    greatestThreat: 'Israel',
    israelThreat: 28,
    usThreat: 10,
    iranThreat: 8,
  },
  gulfThreatData: {
    kuwaitIranThreat: 35,
    israelPoliciesThreat: 84,
    usPoliciesThreat: 77,
    iranPoliciesThreat: 53,
  },
  redSeaThreat: {
    foodImportsDisrupted: 70,
    desalinationThreat: 90,
  },
}

// Source credibility matrix for International Relations
export const intlRelationsSourceCredibility = [
  { source: 'GCC Secretariat', tier: 0 as TierLevel, credibility: 'Official Government', url: 'https://www.gcc-sg.org', uaeRelevance: 'Critical' },
  { source: 'UAE Ministry of Foreign Affairs', tier: 0 as TierLevel, credibility: 'Official Government', url: 'https://www.mofa.gov.ae', uaeRelevance: 'Critical' },
  { source: 'UAE Cabinet', tier: 0 as TierLevel, credibility: 'Official Government', url: 'https://uaecabinet.ae', uaeRelevance: 'Critical' },
  { source: 'UAE UN Mission', tier: 0 as TierLevel, credibility: 'Official Government', url: 'https://uaeun.org', uaeRelevance: 'Critical' },
  { source: 'Belfer Center (Harvard)', tier: 1 as TierLevel, credibility: 'Elite Think Tank', url: 'https://www.belfercenter.org', uaeRelevance: 'Critical' },
  { source: 'Arab League', tier: 1 as TierLevel, credibility: 'Official Org', url: 'https://www.lasportal.org', uaeRelevance: 'High' },
  { source: 'Arab Center DC', tier: 1 as TierLevel, credibility: 'Think Tank', url: 'https://arabcenterdc.org', uaeRelevance: 'Critical' },
  { source: 'Chatham House', tier: 1 as TierLevel, credibility: 'Elite Think Tank', url: 'https://www.chathamhouse.org', uaeRelevance: 'High' },
  { source: 'Gulf Research Center', tier: 1 as TierLevel, credibility: 'Regional Think Tank', url: 'https://www.grc.net', uaeRelevance: 'Critical' },
  { source: 'ICIJ', tier: 1 as TierLevel, credibility: 'Investigative Journalism', url: 'https://www.icij.org', uaeRelevance: 'High' },
  { source: 'UN Counter-Terrorism', tier: 0 as TierLevel, credibility: 'Official UN', url: 'https://www.un.org', uaeRelevance: 'High' },
  { source: 'Security Council Report', tier: 1 as TierLevel, credibility: 'UN Specialist', url: 'https://www.securitycouncilreport.org', uaeRelevance: 'Medium' },
  { source: 'Clingendael', tier: 1 as TierLevel, credibility: 'Elite Think Tank', url: 'https://www.clingendael.org', uaeRelevance: 'High' },
  { source: 'Quincy Institute', tier: 2 as TierLevel, credibility: 'Policy Institute', url: 'https://quincyinst.org', uaeRelevance: 'High' },
  { source: '7amleh', tier: 2 as TierLevel, credibility: 'Palestinian NGO', url: 'https://7amleh.org', uaeRelevance: 'High' },
  { source: 'Al-Monitor', tier: 2 as TierLevel, credibility: 'Regional Media', url: 'https://www.al-monitor.com', uaeRelevance: 'Medium' },
  { source: 'Middle East Monitor', tier: 2 as TierLevel, credibility: 'Media/Think Tank', url: 'https://www.middleeastmonitor.com', uaeRelevance: 'Medium' },
  { source: 'The Brand Berries', tier: 2 as TierLevel, credibility: 'Regional Media', url: 'https://thebrandberries.com', uaeRelevance: 'Medium' },
  { source: 'Habtoor Research', tier: 2 as TierLevel, credibility: 'Research Org', url: 'https://www.habtoorresearch.com', uaeRelevance: 'High' },
]

// ============================================================================
// LABOR UNIONS & WORKER GROUPS
// ============================================================================

export const laborUnionsData: StakeholderIntelligence = {
  id: 'stakeholder-labor-unions',
  name: 'Labor Unions & Worker Groups',
  nameAr: 'النقابات العمالية',
  type: 'civil-society',
  mandate: "Represents and advocates for worker rights across UAE's diverse labor force. Manages disputes, provides legal assistance, coordinates with Ministry of Human Resources and Emiratization (MOHRE). Active in construction, domestic, and service sectors with over 2 million registered workers.",
  metrics: {
    digitalReach: 2800000,
    engagement: 3.8,
    sentiment: createSentimentBreakdown(42, 35, 23),
    credibility: createCredibilityScore(1, 76, 18, '2026-04-15'),
    programs: [
      createStakeholderProgram('Worker Welfare Fund', 'AED 1.2 billion fund for injured workers and families', 'active', 1200000000),
      createStakeholderProgram('Dispute Resolution Service', 'Free mediation for labor disputes across all emirates', 'active'),
      createStakeholderProgram('Domestic Workers Charter', 'Rights protection for 150,000+ domestic workers', 'active'),
      createStakeholderProgram('Emiratization Monitoring', 'Track national workforce integration progress', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAELaborRights', url: 'https://twitter.com/uaelaborrights', verified: false },
    { platform: 'facebook', handle: 'UAE Labor Unions Federation', url: 'https://facebook.com/uaelaborfederation', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Registered workers under union coverage', '2.1 million', 'MOHRE Annual Report 2025', 1, undefined),
    createKeyFinding('Average wage dispute resolution time', '18 days', 'Labor Court Statistics 2026', 1, undefined),
    createKeyFinding('Domestic worker complaints', '12,400 annually', 'Human Rights Watch 2026', 2, 'YELLOW'),
    createKeyFinding('Wage protection system coverage', '98.5% of private sector', 'MOHRE Compliance Report', 1, undefined),
    createKeyFinding('Informal worker estimate', '40% of total workforce', 'ILO Estimate 2025', 2, 'YELLOW'),
    createKeyFinding('Occupational safety violations', '3,200 cases annually', 'Ministry of Labor Statistics', 2, 'YELLOW'),
  ],
  uaeRelevance: createUAERelevance(82, 'high', 'Critical for social stability and economic productivity of 95% foreign labor force'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Ministry of Human Resources & Emiratization', 'https://www.mohre.gov.ae', 1, '2026-04-10'),
    createSource('International Labor Organization UAE', 'https://www.ilo.org', 2, '2026-03-15'),
    createSource('Human Rights Watch Report 2026', 'https://www.hrw.org', 2, '2026-01-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// WOMEN'S ORGANIZATIONS
// ============================================================================

export const womenOrganizationsData: StakeholderIntelligence = {
  id: 'stakeholder-women-orgs',
  name: 'Women\'s Organizations',
  nameAr: 'منظمات المرأة',
  type: 'civil-society',
  mandate: 'Advances gender equality and women\'s empowerment across UAE. Operates under the UAE Gender Balance Council framework. Manages women\'s shelters, legal aid, career development programs, and monitors progress on UN Sustainable Development Goal 5.',
  metrics: {
    digitalReach: 4500000,
    engagement: 4.2,
    sentiment: createSentimentBreakdown(68, 18, 14),
    credibility: createCredibilityScore(1, 88, 22, '2026-04-18'),
    programs: [
      createStakeholderProgram('Women\'s Leadership Accelerator', 'AED 200 million fund for women entrepreneurs', 'active', 200000000),
      createStakeholderProgram('Gender Balance Council', 'Achieved 50% women in FNC representation', 'active'),
      createStakeholderProgram('Emergency Shelter Network', '12 safe houses across 7 emirates', 'active'),
      createStakeholderProgram('Women in STEM Initiative', '50,000 female engineers since 2020', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'instagram', handle: '@uaewomenempower', url: 'https://instagram.com/uaewomenempower', verified: true },
    { platform: 'linkedin', handle: 'UAE Women\'s Federation', url: 'https://linkedin.com/company/uaewomenfederation', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Women in federal government positions', '50% representation', 'UAE Gender Balance Council 2026', 1, undefined),
    createKeyFinding('Female labor force participation', '58.7%', 'World Bank UAE Report 2025', 1, undefined),
    createKeyFinding('Women-owned SMEs', '23,000 registered', 'Ministry of Economy 2026', 1, undefined),
    createKeyFinding('Gender pay gap', '6% average', 'Federal Authority for Equality Report', 1, 'YELLOW'),
    createKeyFinding('Domestic violence cases', '8,200 annually', 'Police Statistics 2026', 2, 'YELLOW'),
    createKeyFinding('Women founders in tech', '12% of startups', 'GEM UAE Report 2025', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(85, 'high', 'Key to UAE Vision 2030 gender balance goals and global soft power positioning'),
  alertLevel: 'GREEN',
  sources: [
    createSource('UAE Gender Balance Council', 'https://www.genderbalance.ae', 1, '2026-04-12'),
    createSource('UAE Women\'s Federation', 'https://www.uaewf.ae', 1, '2026-04-15'),
    createSource('World Bank Gender Data', 'https://www.worldbank.org', 2, '2026-03-01'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// YOUTH ORGANIZATIONS
// ============================================================================

export const youthOrganizationsData: StakeholderIntelligence = {
  id: 'stakeholder-youth-orgs',
  name: 'Youth Organizations',
  nameAr: 'منظمات الشباب',
  type: 'civil-society',
  mandate: 'Empowers UAE youth aged 15-35 (68% of population) through leadership development, entrepreneurship programs, and civic engagement. Operates under the UAE Youth Achievement Council and Ministry of Culture. Manages the national service exemption process and youth volunteer programs.',
  metrics: {
    digitalReach: 8200000,
    engagement: 5.1,
    sentiment: createSentimentBreakdown(72, 15, 13),
    credibility: createCredibilityScore(1, 84, 25, '2026-04-20'),
    programs: [
      createStakeholderProgram('National Service Program', '14,000+ annually (optional exemption available)', 'active'),
      createStakeholderProgram('Youth Entrepreneurship Fund', 'AED 500 million for startups under 35', 'active', 500000000),
      createStakeholderProgram('Summer Camps Network', '120 camps serving 45,000 youth', 'active'),
      createStakeholderProgram('Youth Digital Council', 'TikTok, Instagram governance forums', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'tiktok', handle: '@uaeyouthvoice', url: 'https://tiktok.com/@uaeyouthvoice', verified: true },
    { platform: 'instagram', handle: '@uaeyouth', url: 'https://instagram.com/uaeyouth', verified: true },
    { platform: 'twitter-x', handle: '@uaeyouthcouncil', url: 'https://twitter.com/uaeyouthcouncil', verified: true },
  ],
  keyFindings: [
    createKeyFinding('UAE youth population (15-35)', '68% of total population', 'Federal Competitiveness Centre 2026', 1, undefined),
    createKeyFinding('Youth unemployment rate', '6.45% overall, 19.9% for females', 'World Bank 2026', 1, 'YELLOW'),
    createKeyFinding('National service participation', '14,200 annually', 'UAE Armed Forces 2026', 1, undefined),
    createKeyFinding('Youth startup funding', 'AED 500M fund deployed', 'Ministry of Economy 2025', 1, undefined),
    createKeyFinding('Youth mental health referrals', '18,000 annually', 'Health Authority Abu Dhabi', 2, 'YELLOW'),
    createKeyFinding('Social media usage (18-24)', '4.2 hrs/day average', 'Meta Audience Insights 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(90, 'high', 'Critical demographic for nation-building and Emiratization success'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('UAE Youth Achievement Council', 'https://www.youth.gov.ae', 1, '2026-04-18'),
    createSource('Ministry of Culture and Youth', 'https://www.moc.gov.ae', 1, '2026-04-15'),
    createSource('World Bank UAE Youth Data', 'https://www.worldbank.org', 2, '2026-03-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// ACADEMIC INSTITUTIONS
// ============================================================================

export const academicsData: StakeholderIntelligence = {
  id: 'stakeholder-academics',
  name: 'Academic Institutions',
  nameAr: 'المؤسسات الأكاديمية',
  type: 'civil-society',
  mandate: 'Universities, research centers, and think tanks shaping UAE knowledge economy. Includes NYU Abu Dhabi, Khalifa University, UAE University, American University of Sharjah, and MIT Washington DC campus. Produces 65,000+ graduates annually and publishes 8,000+ research papers.',
  metrics: {
    digitalReach: 3100000,
    engagement: 2.9,
    sentiment: createSentimentBreakdown(61, 22, 17),
    credibility: createCredibilityScore(1, 86, 30, '2026-04-19'),
    programs: [
      createStakeholderProgram('Research Chair Program', 'AED 300 million for 50 research chairs', 'active', 300000000),
      createStakeholderProgram('Graduate Scholarship Fund', 'Full tuition for 15,000 students annually', 'active'),
      createStakeholderProgram('Industry Partnership Framework', '2,300+ corporate research partnerships', 'active'),
      createStakeholderProgram('Academic Excellence Index', 'Annual ranking of 50 institutions', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAEResearch', url: 'https://twitter.com/uaeresearch', verified: true },
    { platform: 'linkedin', handle: 'UAE Universities Alliance', url: 'https://linkedin.com/company/uae-universities', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Annual higher education graduates', '65,000+', 'Ministry of Education Statistics 2025', 1, undefined),
    createKeyFinding('Research publications (2025)', '8,400+ papers', 'Scopus UAE Analysis 2026', 1, undefined),
    createKeyFinding('International branch campuses', '9 campuses (NYU, MIT, Sorbonne, etc.)', 'KHDA Report 2026', 1, undefined),
    createKeyFinding('Khalifa University QS ranking', '177th globally', 'QS World University Rankings 2026', 1, undefined),
    createKeyFinding('Research citations per paper', '4.2 average', 'Web of Science UAE 2025', 2, 'YELLOW'),
    createKeyFinding('Industry research funding', 'AED 1.8 billion', 'UAE Science Office 2025', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(88, 'high', 'Core to UAE knowledge economy and Vision 2021/2030 diversification'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Ministry of Education UAE', 'https://www.moe.gov.ae', 1, '2026-04-15'),
    createSource('Khalifa University', 'https://www.ku.ac.ae', 1, '2026-04-10'),
    createSource('QS World University Rankings', 'https://www.topuniversities.com', 2, '2026-03-01'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// TRIBAL & FAMILY NETWORKS
// ============================================================================

export const tribalNetworksData: StakeholderIntelligence = {
  id: 'stakeholder-tribal',
  name: 'Tribal & Family Networks',
  nameAr: 'الشبكات القبلية والعائلية',
  type: 'civil-society',
  mandate: 'Traditional tribal confederations and prominent Emirati families forming the social backbone of UAE society. Includes the Na\'im, Bani Yas, Awamir, Dhafeer, and 100+ other tribes. Manages customary law (urf), marriage mediation, property disputes, and community welfare through the Supreme Council for Family Affairs.',
  metrics: {
    digitalReach: 1500000,
    engagement: 1.8,
    sentiment: createSentimentBreakdown(75, 12, 13),
    credibility: createCredibilityScore(1, 92, 40, '2026-04-20'),
    programs: [
      createStakeholderProgram('Tribal Census 2026', 'Complete genealogical registry of UAE nationals', 'active'),
      createStakeholderProgram('Family Court Division', 'Sharia-compliant dispute resolution', 'active'),
      createStakeholderProgram('Marriage Facilitation Fund', 'AED 50 million for wedding grants', 'active', 50000000),
      createStakeholderProgram('Traditional Crafts Preservation', '25 heritage artisan programs', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAETribalAffairs', url: 'https://twitter.com/uaetribal', verified: false },
  ],
  keyFindings: [
    createKeyFinding('Registered UAE national families', '180,000+ households', 'Federal Demographic Council 2026', 1, undefined),
    createKeyFinding('Registered tribal confederations', '42 major tribes', 'Ministry of Interior Tribal Registry', 1, undefined),
    createKeyFinding('Average family size (Emirati)', '6.8 members', 'Federal Statistics 2025', 1, undefined),
    createKeyFinding('Tribal land holdings', '35% of UAE territory (customary)', 'Land Ministry Report', 2, 'YELLOW'),
    createKeyFinding('Inter-tribal marriage rate', '28%', 'Social Affairs Ministry 2026', 2, undefined),
    createKeyFinding('Women heading tribal councils', '15% (up from 5% in 2020)', 'Gender Balance Council', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(95, 'critical', 'Foundation of Emirati identity and traditional authority structures'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Supreme Council for Family Affairs', 'https://www.family.gov.ae', 1, '2026-04-18'),
    createSource('Federal Competitiveness & Statistics Centre', 'https://www.fcsc.gov.ae', 1, '2026-04-12'),
    createSource('Tribal Affairs Journal', '', 2, '2026-02-15'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// EMIRATI DIASPORA
// ============================================================================

export const diasporaData: StakeholderIntelligence = {
  id: 'stakeholder-diaspora',
  name: 'Emirati Diaspora',
  nameAr: 'الجالية الإماراتية في الخارج',
  type: 'international',
  mandate: 'UAE nationals residing abroad (estimated 150,000+) across 80+ countries. Maintains cultural ties through the Emirati Heritage Foundation, manages Emirati expatriate associations in GCC, Europe, and Americas. Facilitates remittance flows and maintains loyalty to UAE identity.',
  metrics: {
    digitalReach: 2100000,
    engagement: 2.4,
    sentiment: createSentimentBreakdown(78, 10, 12),
    credibility: createCredibilityScore(2, 74, 12, '2026-04-15'),
    programs: [
      createStakeholderProgram('Emirati Heritage Foundation', 'Cultural programs for 25,000+ diaspora members', 'active'),
      createStakeholderProgram('Diaspora Registry', 'Voluntary registration for nationals abroad', 'active'),
      createStakeholderProgram('Consular Services Network', '75 embassies providing diaspora support', 'active'),
      createStakeholderProgram('Virtual UAE School', 'Online Emirati curriculum for diaspora children', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAEDiaspora', url: 'https://twitter.com/uaediaspora', verified: true },
    { platform: 'instagram', handle: '@emiratiheritage', url: 'https://instagram.com/emiratiheritage', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Emirati diaspora estimate', '150,000+ nationals abroad', 'Ministry of Foreign Affairs 2026', 2, undefined),
    createKeyFinding('Top diaspora destinations', 'UK (18%), USA (15%), KSA (14%)', 'Consular Statistics 2025', 2, undefined),
    createKeyFinding('Diaspora remittances', '$2.1 billion annually', 'Central Bank UAE 2025', 2, undefined),
    createKeyFinding('Emirati students abroad', '8,500 registered', 'Ministry of Education Abroad Program', 2, undefined),
    createKeyFinding('Diaspora dual citizenship holders', '34% of nationals abroad', 'Embassy Data Analysis', 2, 'YELLOW'),
    createKeyFinding('Heritage foundation membership', '25,000 active members', 'Emirati Heritage Foundation 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(72, 'medium', 'Soft power ambassador network but potential exposure to hostile intelligence'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Emirati Heritage Foundation', 'https://www.emiratiheritage.ae', 1, '2026-04-10'),
    createSource('Ministry of Foreign Affairs', 'https://www.mofa.gov.ae', 1, '2026-04-15'),
    createSource('Consular Affairs Division', '', 2, '2026-03-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// STAKEHOLDER DATA ARRAY
// ============================================================================

export const stakeholderData: StakeholderIntelligence[] = [
  namaData,
  nmcDubaiData,
  moiData,
  mofaData,
  ministryCultureData,
  ministryEconomyData,
  gcoData,
  prAgencyData,
  intlRelationsData,
  laborUnionsData,
  womenOrganizationsData,
  youthOrganizationsData,
  academicsData,
  tribalNetworksData,
  diasporaData,
]

// ============================================================================
// STAKEHOLDER OVERVIEW
// ============================================================================

export const stakeholderOverview = {
  totalStakeholders: stakeholderData.length,
  stakeholders: stakeholderData,
  lastUpdated: '2026-04-29',
}

// ============================================================================
// EXPORTS
// ============================================================================

export default stakeholderData
