// @ts-nocheck
'use client'

/**
 * Emirate Entities Data
 *
 * Comprehensive data for UAE Emirate-level Government Entities
 * Extracted from: data/1-3-emirate-entities-results.md
 *
 * UAE National Digital Intelligence Platform
 */

// ============================================================================
// TYPES
// ============================================================================

export type SentimentType = 'POSITIVE' | 'VERY_POSITIVE' | 'NEUTRAL' | 'MIXED' | 'NEGATIVE'
export type ConfidenceLevel = 'HIGH' | 'MEDIUM' | 'LOW'

export interface EntityMetric {
  label: string
  value: string | number
}

export interface EntityFinancial {
  revenue?: string
  assets?: string
  aum?: string
  valuation?: string
  employees?: string
  profit?: string
}

export interface EntitySubsidiary {
  name: string
  details?: string
}

export interface EntityKeyProject {
  name: string
  description?: string
  status?: string
  notableFact?: string
}

export interface EntityLeadership {
  position: string
  person: string
}

export interface EmirateEntity {
  id: string
  name: string
  nameAr?: string
  type: 'SOVEREIGN_WEALTH' | 'ENERGY' | 'AVIATION' | 'REAL_ESTATE' | 'FINANCIAL' | 'LOGISTICS' | 'FREE_ZONE' | 'POLICE' | 'GOVERNMENT' | 'HOLDING' | 'MEDIA' | 'UTILITY' | 'CULTURE'
  emirate: 'Abu Dhabi' | 'Dubai' | 'Sharjah' | 'Ajman' | 'RAK' | 'UAQ' | 'Fujairah' | 'Northern Emirates'
  founded?: string
  headquarters?: string
  ceo?: string
  chairman?: string
  parent?: string
  ownership?: string
  employees?: string
  description: string
  sentiment: SentimentType
  confidence: ConfidenceLevel
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  metrics: EntityMetric[]
  financials?: EntityFinancial
  leadership?: EntityLeadership[]
  subsidiaries?: EntitySubsidiary[]
  keyProjects?: EntityKeyProject[]
  keyFindings?: string[]
  contact?: string
  sources?: string[]
  lastUpdated: string
}

export interface ValidationEntry {
  entity: string
  officialSource: string
  wikipedia: string
  webFetchStatus: string
  dataConfidence: ConfidenceLevel
}

export interface QueryPattern {
  query: string
  emirate: string
  category: string
}

export interface SynthesizedEcosystem {
  emirate: string
  entityType: string
  keyExamples: string
  scale: string
}

export interface EntityHierarchyEntry {
  name: string
  entities: string[]
}

// ============================================================================
// VALIDATION DATA
// ============================================================================

export const validationData: ValidationEntry[] = [
  { entity: 'ADNOC', officialSource: 'adnoc.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Mubadala', officialSource: 'mubadala.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'ADIA', officialSource: 'adia.ae', wikipedia: 'Validated', webFetchStatus: 'Limited (general)', dataConfidence: 'HIGH' },
  { entity: 'DIFC', officialSource: 'difc.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'DP World', officialSource: 'dpworld.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Emirates', officialSource: 'emirates.com', wikipedia: 'Validated', webFetchStatus: 'Limited (booking site)', dataConfidence: 'HIGH' },
  { entity: 'Emaar', officialSource: 'emaar.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Nakheel', officialSource: 'nakheel.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Emirates NBD', officialSource: 'emiratesnbd.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'DMCC', officialSource: 'dmcc.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'JAFZA', officialSource: 'jafza.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Masdar City', officialSource: 'masdarcity.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Dubai Media City', officialSource: 'dmc.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Dubai Holding', officialSource: 'dubaiholding.com', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Etihad', officialSource: 'etihad.com', wikipedia: 'Validated', webFetchStatus: 'Timeout', dataConfidence: 'MEDIUM' },
  { entity: 'Aldar', officialSource: 'aldar.com', wikipedia: 'Validated', webFetchStatus: 'Blocked', dataConfidence: 'MEDIUM' },
  { entity: 'DEWA', officialSource: 'dewa.gov.ae', wikipedia: 'Validated', webFetchStatus: 'Timeout', dataConfidence: 'MEDIUM' },
  { entity: 'Dubai Police', officialSource: 'dubaipolice.gov.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'Abu Dhabi Police', officialSource: 'adpolice.gov.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
  { entity: 'DCT Abu Dhabi', officialSource: 'dct.gov.ae', wikipedia: 'Validated', webFetchStatus: 'Confirmed', dataConfidence: 'HIGH' },
]

// ============================================================================
// QUERY PATTERNS
// ============================================================================

export const queryPatterns: QueryPattern[] = [
  { query: 'ADNOC - Abu Dhabi National Oil Company', emirate: 'Abu Dhabi', category: 'Energy' },
  { query: 'Mubadala Investment Company', emirate: 'Abu Dhabi', category: 'Sovereign Wealth' },
  { query: 'ADIA - Abu Dhabi Investment Authority', emirate: 'Abu Dhabi', category: 'Sovereign Wealth' },
  { query: 'DIFC - Dubai International Financial Centre', emirate: 'Dubai', category: 'Financial' },
  { query: 'DP World', emirate: 'Dubai', category: 'Logistics' },
  { query: 'Emirates Airline', emirate: 'Dubai', category: 'Aviation' },
  { query: 'Emaar Properties', emirate: 'Dubai', category: 'Real Estate' },
  { query: 'Nakheel Properties', emirate: 'Dubai', category: 'Real Estate' },
  { query: 'Emirates NBD', emirate: 'Dubai', category: 'Financial' },
  { query: 'DMCC - Dubai Multi Commodities Centre', emirate: 'Dubai', category: 'Free Zone' },
  { query: 'JAFZA - Jebel Ali Free Zone', emirate: 'Dubai', category: 'Free Zone' },
  { query: 'Masdar City', emirate: 'Abu Dhabi', category: 'Sustainability' },
  { query: 'Dubai Media City', emirate: 'Dubai', category: 'Media' },
  { query: 'Dubai Holding', emirate: 'Dubai', category: 'Holding' },
  { query: 'Etihad Airways', emirate: 'Abu Dhabi', category: 'Aviation' },
  { query: 'Aldar Properties', emirate: 'Abu Dhabi', category: 'Real Estate' },
  { query: 'DEWA - Dubai Electricity and Water Authority', emirate: 'Dubai', category: 'Utility' },
  { query: 'Dubai Police Force', emirate: 'Dubai', category: 'Police' },
  { query: 'Abu Dhabi Police Force', emirate: 'Abu Dhabi', category: 'Police' },
  { query: 'DCT Abu Dhabi - Department of Culture and Tourism', emirate: 'Abu Dhabi', category: 'Culture' },
  { query: 'Government of Sharjah', emirate: 'Sharjah', category: 'Government' },
  { query: 'Government of Ajman', emirate: 'Ajman', category: 'Government' },
  { query: 'Ras Al Khaimah Entities', emirate: 'RAK', category: 'Government' },
  { query: 'Umm Al Quwain Entities', emirate: 'UAQ', category: 'Government' },
  { query: 'Fujairah Government', emirate: 'Fujairah', category: 'Government' },
]

// ============================================================================
// MAIN ENTITY DATA
// ============================================================================

export const emirateEntitiesData: EmirateEntity[] = [
  // --------------------------------------------------------------------------
  // ABU DHABI ENTITIES
  // --------------------------------------------------------------------------
  {
    id: 'adnoc',
    name: 'ADNOC - Abu Dhabi National Oil Company',
    type: 'ENERGY',
    emirate: 'Abu Dhabi',
    founded: '1971',
    headquarters: 'Abu Dhabi, UAE',
    ceo: 'Sultan Ahmed Al Jaber',
    chairman: 'Mohamed bin Zayed Al Nahyan',
    employees: '207,356 (2015)',
    description: "Diversified energy group, wholly owned by Abu Dhabi Government. World's 12th largest oil company by production. Strategic Direction: 'Maximum Energy. Minimum Emissions'",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'World Ranking', value: '12th largest oil company' },
      { label: 'Oil Production Capacity', value: '4.85 million barrels/day' },
      { label: 'Gas Production', value: '11.5 billion cubic feet/day' },
      { label: 'Crude Oil Target (2027)', value: '5 million barrels/day' },
      { label: 'Pipeline Network', value: '1,600 km across Abu Dhabi' },
      { label: 'Retail Stations', value: 'Over 450' },
      { label: 'Countries Served', value: '50+ countries' },
      { label: 'UAE Reserves Ranking', value: '6th largest globally (105B barrels)' },
    ],
    financials: {
      revenue: '$70B+ (estimated)',
    },
    leadership: [
      { position: 'CEO', person: 'Sultan Ahmed Al Jaber' },
      { position: 'Chairman', person: 'Mohamed bin Zayed Al Nahyan' },
    ],
    subsidiaries: [
      { name: 'ADNOC Drilling', details: 'Listed October 2021' },
      { name: 'ADNOC Gas', details: 'Listed March 2023' },
      { name: 'Borouge', details: 'Listed June 2022' },
      { name: 'Fertiglobe', details: 'Listed October 2021' },
      { name: 'ADNOC Logistics and Services', details: 'Listed June 2023' },
      { name: 'ADNOC Distribution', details: 'Listed December 2017' },
      { name: 'ADNOC Refining', details: 'Over 40 million metric tons annually' },
      { name: 'ADNOC Sour Gas', details: '' },
      { name: 'Al Dhafra Petroleum', details: '' },
      { name: 'Al Yasat Petroleum', details: '' },
      { name: "TA'ZIZ", details: '' },
      { name: 'ADNOC Global Trading', details: '' },
      { name: 'ADNOC Trading', details: '' },
      { name: 'ADNOC City Gas', details: '' },
    ],
    keyProjects: [
      { name: 'Ghasha mega-project', description: "World's largest offshore sour gas development" },
      { name: 'Ruwais LNG', description: 'First MENA LNG export facility running on clean power (9.6M tons/year)' },
      { name: 'Barakah Nuclear', description: 'Via ENEC partnership' },
      { name: '3D Seismic Survey', description: "World's largest combined onshore/offshore survey" },
      { name: 'Hail & Ghasha gas', description: 'Offshore development' },
      { name: 'Offshore electrification', description: 'Targeting 50% carbon reduction' },
      { name: 'Unconventional gas', description: 'First delivered in 2020' },
    ],
    keyFindings: [
      "Net-zero target: 2045",
      'Mangrove plantings: 10 million by 2030',
      'Clean energy capacity: 100 GW via Masdar by 2030',
      'ENERGYai: World\'s first agentic AI solution for energy sector',
      '2024: $16.3B Covestro acquisition announced (Germany)',
      '2025: Brand Finance named ADNOC First Emirati brand to enter Global Top 100',
    ],
    contact: 'ADNOC HQ, P.O. Box 898, Corniche Road West, Abu Dhabi, UAE | Tel: +971 2 7070000',
    sources: ['adnoc.ae', 'Wikipedia'],
  },
  {
    id: 'mubadala',
    name: 'Mubadala Investment Company',
    type: 'SOVEREIGN_WEALTH',
    emirate: 'Abu Dhabi',
    founded: '2002 (as Mubadala Development Company); January 2017 (current form via merger)',
    headquarters: 'Abu Dhabi, UAE',
    chairman: 'Mansour bin Zayed Al Nahyan',
    ceo: 'Khaldoon Khalifa Al Mubarak',
    description: 'Sovereign investor / state-owned investment company with $330 billion AUM (2024)',
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Assets Under Management', value: '$330 billion (2024)' },
      { label: 'GlobalFoundries Stake', value: 'Significant' },
      { label: 'Carlyle Group Stake', value: '7.5%' },
      { label: 'Waymo Investment', value: "Alphabet's self-driving unit" },
      { label: 'Reliance Jio Platforms', value: '$752.1 million (2020)' },
      { label: 'Telegram Investment', value: 'Messaging platform' },
      { label: 'Fortress Investment Group', value: '$3 billion acquisition (CFIUS approved May 2024)' },
      { label: 'Truist Insurance Holdings', value: '20% for $1.95B (2023); remaining 80% in 2024' },
    ],
    financials: {
      aum: '$330 billion',
    },
    leadership: [
      { position: 'Chairman', person: 'Mansour bin Zayed Al Nahyan' },
      { position: 'CEO and Managing Director', person: 'Khaldoon Khalifa Al Mubarak' },
    ],
    subsidiaries: [
      { name: 'Abu Dhabi Investment Council', details: '' },
      { name: 'Dolphin Energy', details: '' },
      { name: 'GlobalFoundries', details: '' },
      { name: 'International Petroleum Investment Company (IPIC)', details: '' },
      { name: 'Mamoura Diversified Global Holding', details: '' },
      { name: 'Masdar', details: '' },
      { name: 'Nova Chemicals', details: '' },
    ],
    keyFindings: [
      'Global Offices: Abu Dhabi, London, Rio de Janeiro, New York, San Francisco, Beijing',
      'Mubadala Technology (formerly ATIC, established 2014) focuses on high-technology sectors including semiconductors',
      'Mubadala Energy (formerly Mubadala Petroleum) operates in 11 markets with 500+ employees',
      'Expanding into LNG, blue hydrogen, and carbon capture',
    ],
    sources: ['mubadala.com', 'Wikipedia'],
  },
  {
    id: 'adia',
    name: 'ADIA - Abu Dhabi Investment Authority',
    type: 'SOVEREIGN_WEALTH',
    emirate: 'Abu Dhabi',
    founded: 'March 21, 1976',
    headquarters: 'Abu Dhabi, UAE',
    description: "Sovereign wealth fund with US$1.057 trillion AUM. Government's long-term value creation vehicle.",
    sentiment: 'NEUTRAL',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'AUM', value: 'US$1.057 trillion' },
      { label: 'Ownership', value: 'Government of Abu Dhabi' },
      { label: 'Investment Strategy', value: 'Multi-asset class (equities, fixed income, infrastructure, real estate, private equity)' },
      { label: 'External Management', value: '70-80% of assets managed externally' },
    ],
    financials: {
      aum: '$1.057 trillion',
    },
    leadership: [
      { position: 'Chairman', person: 'Tahnoun bin Zayed Al Nahyan' },
      { position: 'Managing Director', person: 'Hamed bin Zayed Al Nahyan' },
      { position: 'Board Member', person: 'Khaled bin Mohamed bin Zayed Al Nahyan' },
      { position: 'Board Member', person: 'Mansour bin Zayed Al Nahyan' },
    ],
    keyFindings: [
      '1967: Financial Investments Board created by Abu Dhabi',
      '1976: Sheikh Zayed converted it into ADIA',
      '2008: Co-chaired International Working Group that produced Santiago Principles',
      '2024-2025: Fisher Investments $3 billion',
      '2024-2025: Trans-Java Toll Roads $2.8 billion (with INA and APG)',
      '2024-2025: NetCo SRL $5.6 billion',
      '2024: DigitalBridge 40% stake - data-centre platform',
      '2020: Jio Platforms $752.1 million',
      '2020: Reliance Retail $751.13 million',
      '2019: Saudi Aramco IPO - Over $1 billion',
    ],
    contact: '211 Corniche, PO Box 3600, Abu Dhabi, UAE | Tel: +971 2 415 0000',
    sources: ['adia.ae', 'Wikipedia'],
  },
  {
    id: 'dct-abu-dhabi',
    name: 'DCT Abu Dhabi - Department of Culture and Tourism',
    type: 'CULTURE',
    emirate: 'Abu Dhabi',
    founded: 'February 2012 (formally established October 2, 2012)',
    chairman: 'Sultan bin Tahnoon Al Nahyan',
    headquarters: 'PO Box 94000, Abu Dhabi UAE',
    description: "Replaced Abu Dhabi Tourism Authority and Abu Dhabi Authority for Culture and Heritage. Develops Abu Dhabi into world-class destination while preserving heritage.",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Museums (Operating)', value: 'Louvre Abu Dhabi' },
      { label: 'Museums (Under Development)', value: 'Guggenheim Abu Dhabi, Zayed National Museum, Natural History Museum Abu Dhabi' },
      { label: 'Heritage Sites', value: 'Al Jahili Fort, Al Ain Museum, Al Ain Palace Museum, Qasr Al Muwaiji, Bait Mohammed bin Khalifa' },
      { label: 'Contact', value: '+971 2 444 0444' },
    ],
    leadership: [
      { position: 'Chairman', person: 'Sultan bin Tahnoon Al Nahyan' },
    ],
    keyProjects: [
      { name: 'Louvre Abu Dhabi', status: 'Operating' },
      { name: 'Guggenheim Abu Dhabi', status: 'Under development' },
      { name: 'Zayed National Museum', status: 'Under development' },
      { name: 'Natural History Museum Abu Dhabi', status: 'Under development' },
      { name: 'Tourism Strategy 2030', description: 'Long-term tourism development plan' },
      { name: 'Go Safe Certification', description: 'COVID-19 safety program' },
      { name: 'Creative Visa', description: 'E-service for creative professionals' },
    ],
    keyFindings: [
      'September 2017: Renamed from "Abu Dhabi Tourism and Culture Authority" to "Department of Culture and Tourism"',
      'November 2023: Integrated Abu Dhabi Gaming to develop gaming/esports ecosystem',
      'February 2025: Al Ain City selected to host 14th Terra World Congress',
      'National Library established 1981 - one of UAE\'s largest knowledge repositories',
    ],
    contact: 'info@dctabudhabi.ae',
    sources: ['dct.gov.ae', 'Wikipedia'],
  },
  {
    id: 'etihad',
    name: 'Etihad Airways',
    type: 'AVIATION',
    emirate: 'Abu Dhabi',
    founded: 'July 11, 2003; commenced operations November 5, 2003',
    headquarters: 'Khalifa City, Abu Dhabi, UAE',
    ceo: 'Antonoaldo Neves (since October 2022)',
    description: "One of two flag carriers of UAE. Hub at Zayed International Airport. $6.8B revenue with $544M profit (record) in 2025.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Fleet Size', value: '110 aircraft (100 Airbus and Boeing from 6 families)' },
      { label: 'Destinations', value: '120+ passenger and cargo destinations' },
      { label: '2025 Revenue', value: 'US$6.8 billion' },
      { label: '2025 Profit', value: 'US$544 million (record)' },
      { label: 'Employees', value: '10,000+ (2025)' },
      { label: 'Startup Capital', value: 'AED 500 million' },
    ],
    financials: {
      revenue: '$6.8 billion',
      profit: '$544 million',
    },
    leadership: [
      { position: 'CEO', person: 'Antonoaldo Neves (since October 2022)' },
    ],
    keyFindings: [
      '2003: Established via Amiri decree by Sheikh Khalifa bin Zayed Al Nahyan with AED 500 million startup capital',
      'Nov 2003: First commercial flight to Beirut',
      '2011: First full-year profit ($14 million)',
      '2016: Record loss of $1.873 billion',
      '2020: COVID-19: 76% passenger drop to 4.2 million',
      'Oct 2022: Transferred to ADQ (Abu Dhabi sovereign wealth fund)',
      'Current Slogan: "From Abu Dhabi to the World" / "Beyond Borders" (2025)',
      'Safety Record: No fatal accidents in passenger operations as of 2025',
      'Historical equity investments: Air Berlin (29.21%), Air Serbia (49%), Alitalia (49%), Air Seychelles (40%), Virgin Australia (10%)',
    ],
    sources: ['etihad.com', 'Wikipedia'],
  },
  {
    id: 'aldar',
    name: 'Aldar Properties',
    type: 'REAL_ESTATE',
    emirate: 'Abu Dhabi',
    founded: 'January 12, 2004',
    chairman: 'Mohammed Al Mubarak',
    ceo: 'Talal Al Dhiyebi',
    description: "Abu Dhabi government-owned real estate development company. Largest shareholder is Alpha Dhabi (UAE sovereign wealth fund). Listed on Abu Dhabi Securities Exchange.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: '2021 Revenue', value: 'AED 8.58 billion' },
      { label: '2021 Net Income', value: 'AED 2.33 billion' },
      { label: '2021 Total Assets', value: 'AED 41.1 billion' },
      { label: '2020 Total Equity', value: 'AED 40 billion' },
      { label: 'Employees', value: '500' },
    ],
    financials: {
      revenue: 'AED 8.58 billion',
      assets: 'AED 41.1 billion',
    },
    leadership: [
      { position: 'Chairman', person: 'Mohammed Al Mubarak' },
      { position: 'CEO', person: 'Talal Al Dhiyebi' },
      { position: 'CIO', person: 'Jassem Busaibe' },
    ],
    keyProjects: [
      { name: 'Al Raha Beach', description: 'Waterfront development' },
      { name: 'Al Raha Gardens', description: 'Residential development' },
      { name: 'Abu Dhabi Central Market (Souq)', description: 'Mixed-use' },
      { name: 'Al Mamoura', description: 'Residential' },
      { name: 'Yas Island', description: 'Including Yas Marina Circuit, Ferrari World, Yas Hotel Abu Dhabi' },
      { name: 'Al Fahid Island', description: 'Island development' },
    ],
    keyFindings: [
      '2005: Listed shares',
      '2010: Credit rating downgraded to "junk"',
      '2011: Received $5.2 billion bailout by Abu Dhabi government',
      '2013: Merged with Sorouh Real Estate',
      'December 2017: Acquired International Tower',
      'March 2018: Announced strategic partnership with Emaar',
      '2023: Partnered with Dubai Holding for Dubai projects',
      'December 2023: Acquired UK developer London Square for £230m (AED 1.07bn)',
    ],
    sources: ['aldar.com', 'Wikipedia'],
  },
  {
    id: 'abu-dhabi-police',
    name: 'Abu Dhabi Police Force',
    type: 'POLICE',
    emirate: 'Abu Dhabi',
    founded: 'June 1, 1957 by Sheikh Shakbut bin Al Nahyan (initially just 80 officers)',
    commander: 'Major General Ahmed Saif bin Zaitoon Al Muhairi',
    description: "Covers 67,340 km² with approximately 2,784,490 population. Total staff of 36,000 including civil defence, ambulance, fire, and border security.",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Area Covered', value: '67,340 km²' },
      { label: 'Population', value: 'Approximately 2,784,490 people' },
      { label: 'Total Staff', value: '36,000 (including civil defence, ambulance, fire, border security)' },
      { label: 'Frontline Officers', value: '12,500' },
      { label: 'Police Emergency', value: '999' },
      { label: 'Ambulance', value: '998' },
      { label: 'Civil Defence', value: '997' },
      { label: 'Aman Service', value: '8002626 or 2828' },
    ],
    leadership: [
      { position: 'Commander', person: 'Major General Ahmed Saif bin Zaitoon Al Muhairi' },
      { position: 'Director General', person: 'Major General Sheikh Mohammed bin Tahnoon Al Nahyan' },
      { position: 'Oversight', person: 'Saif bin Zayed Al Nahyan (Deputy Prime Minister and Minister of Interior)' },
    ],
    keyFindings: [
      '1959: Grew to over 150 officers',
      '1966-1979: Building stage under Sheikh Zayed bin Sultan Al Nahyan',
      '1979-1995: Progressive stage with merger into Ministry of Interior',
      '1995-present: Modernization and strategic development',
      'Police College established 1985 by Sheikh Zayed bin Sultan Al Nahyan - Four-year program leading to Bachelor\'s degree in Police Sciences and Criminal Justice',
      '"Badir and Istafid" early payment: 35% discount within 60 days, 25% within one year',
      'Fleet includes: Chevrolet Camaro, W Motors Lykan HyperSport (one of seven worldwide), Nissan GT-R, F999 race car, Falcon motorcycle',
    ],
    sources: ['adpolice.gov.ae', 'Wikipedia'],
  },

  // --------------------------------------------------------------------------
  // DUBAI ENTITIES
  // --------------------------------------------------------------------------
  {
    id: 'difc',
    name: 'DIFC - Dubai International Financial Centre',
    type: 'FINANCIAL',
    emirate: 'Dubai',
    founded: '2002; operations began 2004',
    area: '110 hectares (272 acres)',
    governor: 'Essa Kazim',
    description: "Independent jurisdiction under UAE Constitution for MEASA markets. Governed by Dubai Financial Services Authority (DFSA) with Common law legal framework operating in English.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Registered Companies', value: 'Over 3,000' },
      { label: 'Non-financial Firms Annual Increase (2022)', value: '19%' },
      { label: 'Foreign Ownership', value: '100% without local partner' },
      { label: 'Tax Guarantee', value: '50-year guarantee of zero taxes on corporate income and profits' },
    ],
    leadership: [
      { position: 'President', person: 'Sheikh Maktoum Bin Mohammed Bin Rashid Al Maktoum' },
      { position: 'Governor', person: 'Essa Kazim' },
      { position: 'CEO', person: 'Arif Amiri' },
      { position: 'COO', person: 'Alya Al-Zarouni' },
    ],
    keyProjects: [
      { name: 'DIFC FinTech Hive', description: 'Launched April 2017' },
      { name: 'FinTech Hive Scale Up Programme', description: 'Launched January 2020' },
      { name: 'Metaverse platform', description: 'Launched January 2023' },
      { name: 'Dubai FinTech Summit', description: 'May 2023 (5,000+ leaders from 50+ countries)' },
    ],
    keyFindings: [
      '100% foreign ownership without local partner',
      '50-year guarantee of zero taxes on corporate income and profits',
      'No restrictions on foreign exchange or capital/profit repatriation',
      'Network of double taxation treaties',
      'Gate Avenue mall (opened 2018): 185 retail/dining concepts',
      'NASDAQ Dubai trading hours: 10:00 a.m. to 2:00 p.m. (Sunday–Thursday)',
      'Notable listings: DP World (IPO raised $4.96 billion, largest in Middle East)',
      'Hotels: Ritz-Carlton, Waldorf Astoria, Four Seasons',
      '100+ cafes and restaurants',
    ],
    sources: ['difc.com', 'Wikipedia'],
  },
  {
    id: 'dp-world',
    name: 'DP World',
    type: 'LOGISTICS',
    emirate: 'Dubai',
    founded: '2005 through merger of Dubai Ports Authority and Dubai International',
    headquarters: 'Dubai, Jebel Ali',
    ceo: 'Yuvraj Narayan (Group CEO)',
    chairman: 'Essa Kazim',
    description: "Emirati multinational logistics company. Handles approximately 10% of global container traffic through 82 marine/inland terminals across 40+ countries.",
    sentiment: 'MIXED',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Containers Handled', value: '70 million from ~70,000 vessels annually' },
      { label: 'Marine/Inland Terminals', value: '82 across 40+ countries' },
      { label: 'Global Traffic Share', value: '~10% of global container traffic' },
      { label: 'Countries/Territories', value: '~50+' },
      { label: 'Fleet Vessels', value: 'Over 500' },
      { label: 'Logistics Offices', value: '303 worldwide' },
      { label: '2025 Revenue', value: 'US$24.4 billion' },
      { label: '2025 Operating Income', value: 'US$6.4 billion' },
      { label: '2025 Net Income', value: 'US$1.96 billion' },
      { label: 'Employees', value: '101,440' },
    ],
    financials: {
      revenue: '$24.4 billion',
      profit: '$1.96 billion',
    },
    leadership: [
      { position: 'Group CEO', person: 'Yuvraj Narayan' },
      { position: 'Chairman (Board)', person: 'Essa Kazim' },
    ],
    keyFindings: [
      '2006: Acquired P&O for £3.9 billion',
      '2007: IPO raised $4.96 billion (largest in Middle East)',
      '2019: Repurchased P&O Ferries for £322 million',
      '2023: Cyberattack disrupted Australian port (40% of country\'s volume)',
      '2024: £1 billion London Gateway expansion announced',
      '2025: $2.5 billion global infrastructure investment plan',
      'Sports/Cultural Sponsorship: DP World Tour (golf), ILT20 cricket, McLaren F1, football, yachting, Asia Cup cricket',
    ],
    sources: ['dpworld.com', 'Wikipedia'],
  },
  {
    id: 'emirates',
    name: 'Emirates Airline',
    type: 'AVIATION',
    emirate: 'Dubai',
    founded: 'March 15, 1985; began operations October 25, 1985',
    headquarters: 'Dubai International Airport Terminal 3',
    president: 'Tim Clark',
    chairman: 'Ahmed bin Saeed Al Maktoum',
    employees: '69,465 (2024-25)',
    description: "Flag carrier of UAE. Largest operator of A380 and Boeing 777. $34.83B revenue with $5.19B net income (2024-25).",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Total Passenger Aircraft', value: '261' },
      { label: 'Total Cargo Aircraft', value: '13' },
      { label: 'A380 (largest operator)', value: '116' },
      { label: 'Boeing 777 (largest operator)', value: '133 (including 10 777-200LRs and 118 777-300ERs)' },
      { label: 'Airbus A350-900', value: '17' },
      { label: '2024-25 Revenue', value: 'US$34.83 billion' },
      { label: '2024-25 Net Income', value: 'US$5.19 billion' },
      { label: '2025 Projected Passengers', value: '53.6 million' },
      { label: 'Weekly Flights', value: '3,600+' },
      { label: 'Cities Served', value: '150+ in 80 countries' },
      { label: 'Continents', value: '6' },
      { label: 'Codeshare Airlines', value: '42' },
    ],
    financials: {
      revenue: '$34.83 billion',
      profit: '$5.19 billion',
    },
    leadership: [
      { position: 'President', person: 'Tim Clark' },
      { position: 'Chairman & CEO', person: 'Ahmed bin Saeed Al Maktoum' },
    ],
    keyFindings: [
      'Slogan: "Fly Better"',
      'First class: Private suites with doors, minibars, lie-flat beds, shower spa on A380',
      'Business class: Lie-flat seats, on-board bar (A380)',
      'Premium economy: Recaro seats with 40" pitch',
      'Economy: 79-86 cm pitch',
      'Entertainment: ICE system with 4,000+ channels',
      '2024: Plans to relocate hub to Al Maktoum Airport when completed',
      '2023: $52 billion Boeing order (90 777X aircraft)',
      '2023: 15 additional A350-900s ordered',
      '2023: New livery with dynamic UAE flag design',
      'Sustainable Aviation Fuel: $200M investment over 3 years; First commercial SAF flight October 24, 2023 (Dubai-Sydney)',
    ],
    sources: ['emirates.com', 'Wikipedia'],
  },
  {
    id: 'emaar',
    name: 'Emaar Properties',
    type: 'REAL_ESTATE',
    emirate: 'Dubai',
    founded: '1997 by Mohamed Alabbar',
    headquarters: 'Dubai, UAE',
    chairman: 'Mohamed Alabbar (Founder and Chairman)',
    ceo: 'Amit Jain',
    description: "Emirati real estate development company. Listed on Dubai Financial Market. Current valuation US$16.8 billion (2023). Builder of Burj Khalifa and Dubai Mall.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Current Valuation', value: 'US$16.8 billion (2023)' },
      { label: 'Ownership', value: 'Dubai ruler Mohammed bin Rashid Al Maktoum + Investment Corporation of Dubai' },
      { label: 'Listed', value: 'Dubai Financial Market (public joint-stock company)' },
    ],
    financials: {
      valuation: '$16.8 billion',
    },
    leadership: [
      { position: 'Founder and Chairman', person: 'Mohamed Alabbar' },
      { position: 'CEO', person: 'Amit Jain' },
      { position: 'Chairman', person: 'Jamal Bin Theniyah' },
      { position: 'Vice chairman', person: 'Ahmed Jawa' },
    ],
    keyProjects: [
      { name: 'Burj Khalifa', description: "World's tallest building", notableFact: '828 metres' },
      { name: 'The Dubai Mall', description: "World's second largest shopping mall", notableFact: '' },
      { name: 'Downtown Dubai', description: 'Flagship development', notableFact: '' },
      { name: 'Dubai Marina', description: 'Waterfront development', notableFact: '' },
      { name: 'Dubai Fountain', description: 'Tallest performing fountain', notableFact: '' },
      { name: 'Dubai Creek Harbour', description: 'New flagship development', notableFact: '' },
      { name: 'Dubai Hills Estate', description: 'Golf community', notableFact: '' },
      { name: 'The Oasis', description: 'Luxury villa community', notableFact: '' },
    ],
    subsidiaries: [
      { name: 'Emaar Developments', details: 'Property development' },
      { name: 'Emaar Malls', details: 'Retail properties' },
      { name: 'Emaar India', details: 'India operations' },
      { name: 'Emaar Misr', details: 'Egypt operations' },
      { name: 'Emaar Pakistan', details: 'Pakistan operations' },
      { name: 'Hamptons International', details: 'Luxury brokerage' },
      { name: 'Emaar Hospitality Group', details: 'Hotels and resorts' },
      { name: 'Emaar Entertainment', details: 'Leisure attractions' },
    ],
    keyFindings: [
      'Entertainment Assets: Burj Khalifa, Reel Cinemas, Dubai Opera, Dubai Ice Rink, KidZania, Sky Views Dubai, Dubai Aquarium, Arabic Music Institute, Play DXB, The Storm Coaster, The Dubai Fountain',
      'Mall Assets: Dubai Mall, Dubai Marina Mall, Dubai Hills Mall, Gold and Diamond Park, Souk Al Bahar, The Springs Souk',
      'Hotel Brands: Address Hotels + Resorts, Vida Hotels and Resorts, ARMANI HOTELS & RESIDENCES, Rove Hotels',
      'International Presence: India, Pakistan, Egypt, Morocco, Turkey, Saudi Arabia',
    ],
    sources: ['emaar.com', 'Wikipedia'],
  },
  {
    id: 'nakheel',
    name: 'Nakheel Properties',
    type: 'REAL_ESTATE',
    emirate: 'Dubai',
    founded: '2003 (as subsidiary of Dubai World)',
    chairman: 'Ahmed bin Saeed Al Maktoum',
    ceo: 'Amit Kaushal',
    parent: 'Dubai Holding',
    description: "State-owned real estate development company (Nakheel PJSC). Creator of Palm Jumeirah. Merged into Dubai Holding in 2024 along with Meydan.",
    sentiment: 'MIXED',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: '2009 H1 Loss', value: '13.4bn dirham ($3.65 billion)' },
      { label: 'December 2009', value: 'Requested debt payment stay, downgraded to junk status' },
      { label: 'December 2009', value: 'Abu Dhabi invested $10 billion to prevent default' },
      { label: 'March 2010', value: 'Dubai World received $9.5 billion rescue package' },
      { label: '2011', value: 'Completed $16 billion (59bn dirham) debt restructuring' },
      { label: '2017 Q1-Q3', value: 'Achieved $1 billion net profit' },
      { label: '2022', value: 'Completed $4.6 billion debt restructuring' },
    ],
    leadership: [
      { position: 'CEO', person: 'Amit Kaushal' },
      { position: 'Chairman', person: 'Ahmed bin Saeed Al Maktoum' },
    ],
    keyProjects: [
      { name: 'Palm Jumeirah', status: 'Iconic palm-shaped island' },
      { name: 'Palm Jebel Ali', status: 'Relaunched 2022' },
      { name: 'Dubai Islands', status: 'Formerly The World Islands' },
      { name: 'District One', status: 'Luxury development' },
      { name: 'Meydan', status: 'Mixed-use development' },
      { name: 'The World', status: 'Islands development' },
      { name: 'Jumeirah Islands', status: 'Established' },
      { name: 'Jumeirah Park', status: 'Established' },
      { name: 'Jumeirah Village Circle', status: 'Established' },
      { name: 'Jumeirah Village Triangle', status: 'Established' },
      { name: 'International City', status: 'Established' },
      { name: 'Discovery Gardens', status: 'Established' },
    ],
    keyFindings: [
      '2024: Merged into Dubai Holding along with Meydan',
      'Recent Developments: Bay Grove Residences, Como Residences (76 private residences), Palm Beach Towers, Rixos Hotel & Residences (Dubai Islands - 700-metre beach), Naya Residences, Lagoon Views',
    ],
    contact: '800 NAKHEEL (+9718006254335)',
    sources: ['nakheel.com', 'Wikipedia'],
  },
  {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    type: 'FINANCIAL',
    emirate: 'Dubai',
    founded: '2007 (merger of National Bank of Dubai and Emirates Bank International)',
    chairman: 'Ahmed bin Saeed Al Maktoum',
    parent: 'Investment Corporation of Dubai',
    headquarters: 'Deira, Dubai, UAE',
    description: "State-owned bank of Government of Dubai. Largest bank in UAE by assets. Formed through merger creating a major financial institution.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: '2021 Revenue', value: 'AED 23.82B ($6.49B)' },
      { label: '2021 Total Assets', value: 'AED 687.44B ($187.31B)' },
      { label: '2022 Revenue', value: 'AED 32.51B ($8.86B)' },
      { label: '2022 Total Assets', value: 'AED 741.96B ($202.17B)' },
      { label: 'June 2025 Total Assets', value: 'AED 1.086T (~$295.7B)' },
      { label: 'Countries of Operation', value: '13' },
      { label: 'Active Customers', value: 'Over 9 million' },
      { label: 'Branches and ATMs/SDMs', value: '826 branches, 4,555 ATMs/SDMs' },
      { label: 'Employees', value: 'More than 30,000 representing 90+ nationalities' },
      { label: 'Digital Transactions', value: '97% outside branches' },
      { label: 'Liv (digital bank) Users', value: 'Close to half a million' },
      { label: 'Brand Value', value: 'USD 4.54 billion' },
    ],
    financials: {
      revenue: 'AED 32.51 billion (2022)',
      assets: 'AED 1.086 trillion (June 2025)',
    },
    leadership: [
      { position: 'Chairman', person: 'Ahmed bin Saeed Al Maktoum' },
    ],
    keyFindings: [
      '1963: National Bank of Dubai founded by Sheikh Rashid bin Saeed Al Maktoum (first national bank in UAE)',
      '2003: Emirates Bank International founded',
      '2007: Merged to form Emirates NBD',
      'October 2007: Listed on Dubai Financial Market',
      'December 1, 2012: Acquired Dubai Bank PJSC',
      'Acquired Turkish lender Denizbank (described as "biggest acquisition")',
      'October 7, 2022: Sold 86,316,964 shares of BankIslami Pakistan to JS Bank',
      'Countries of Operation: UAE, Egypt, India, Türkiye, Saudi Arabia, Singapore, UK, Austria, Germany, Russia, Bahrain',
    ],
    sources: ['emiratesnbd.com', 'Wikipedia'],
  },
  {
    id: 'dmcc',
    name: 'DMCC - Dubai Multi Commodities Centre',
    type: 'FREE_ZONE',
    emirate: 'Dubai',
    founded: 'May 1, 2002 by Crown Prince Mohammed bin Rashid Al Maktoum via royal decree',
    executiveChairman: 'Ahmed Sultan Bin Sulayem',
    headquarters: 'Almas Tower (68 floors, world\'s 31st tallest), Jumeirah Lake Towers district, Dubai',
    description: "Commodities exchange and free-trade zone. Largest free zone in UAE with 26,000+ registered companies.",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Registered Companies', value: '26,000+' },
      { label: 'Countries Represented', value: '180+' },
      { label: 'Licensed Business Activities', value: '900+' },
      { label: 'Professionals', value: '90,000+' },
      { label: 'Residents and Visitors', value: '100,000+' },
      { label: 'Towers', value: '87 residential and commercial' },
      { label: 'FDI Contribution', value: '15% of Dubai\'s annual FDI' },
      { label: 'Companies Welcomed (2025)', value: 'Over 2,300' },
      { label: 'Tech Community (2025)', value: 'Surpassed 4,000 members' },
      { label: '2002 Diamond Trade Value', value: '$300 million' },
      { label: '2016 Diamond Trade Value', value: '$26 billion' },
    ],
    leadership: [
      { position: 'Executive Chairman & CEO', person: 'Ahmed Sultan Bin Sulayem' },
    ],
    keyProjects: [
      { name: 'Dubai Diamond Exchange (DDE)', description: 'Established 2004' },
      { name: 'Dubai Pearl Exchange (DPE)', description: '' },
      { name: 'DMCC Tradeflow', description: '' },
      { name: 'Dubai Good Delivery Standard (DGD)', description: 'For Gold' },
      { name: 'DMCC Tea Centre', description: '' },
      { name: 'DMCC Coffee Centre', description: '' },
      { name: 'Uptown Dubai', description: 'Over 10 million sq ft planned' },
    ],
    keyFindings: [
      '9-time winner of Global Free Zone of the Year award',
      'Financial Times\' fDi\'s Global Knowledge Zone (multiple years)',
      'fDi Global Free Zones of the Year: 2015-2022 (8 consecutive years)',
      'Global Islamic Finance Award for Best Supporting Institution (2014)',
      '0% Corporate Tax on qualifying income (UAE Corporate Tax Law)',
      '0% personal income tax',
      '100% business ownership',
      'Full profit repatriation',
      'Sectors: Precious commodities (gold, diamonds), Energy, Steel and metals, Agricultural commodities (tea, cotton), Agro, Tech, Gaming, Crypto, AI, E-commerce, FinX, Wealth Hub, Maritime, Sustainability',
    ],
    sources: ['dmcc.ae', 'Wikipedia'],
  },
  {
    id: 'jafza',
    name: 'JAFZA - Jebel Ali Free Zone',
    type: 'FREE_ZONE',
    emirate: 'Dubai',
    founded: '1985 by Ruler\'s Decree',
    area: '57 square km',
    description: "Free economic zone, flagship of DP World. #1 Globally by fDi Awards – Industrial and Sustainable Free Zone for 2024. Contributes 21% of Dubai GDP annually.",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Started (1985)', value: '19 companies' },
      { label: '2025 Companies', value: 'Over 11,000 from 100+ countries' },
      { label: 'Dubai GDP Contribution', value: '21% annually' },
      { label: 'UAE Total FDI', value: '32%' },
      { label: 'Jobs Sustained', value: '130,000' },
      { label: 'Trade Value (2015)', value: 'US$169 billion' },
      { label: 'Trade Value (2024)', value: '$190 billion' },
      { label: 'Fortune Global 500 Companies', value: 'Over 100' },
    ],
    keyProjects: [
      { name: 'Solico Group', description: 'AED 130M SoFood production facility' },
      { name: 'Legend Holding Group', description: 'AED 500M automotive hub' },
      { name: 'Omega Seiki Mobility', description: '$25M electric vehicle assembly plant' },
      { name: 'Eaton', description: 'Sustainable manufacturing/engineering center' },
      { name: 'Amarak Chemicals', description: '60,000-tonne/year sulphur facility' },
    ],
    keyFindings: [
      'Logistics: 650+ companies (60+ countries), 16,000+ workforce',
      'Petrochemicals: 532+ companies (70+ countries), 5,600+ workforce',
      'Food & Agriculture: 567+ companies (74 countries), 6,800+ workforce',
      'Automotive & Spare Parts: 629+ companies',
      'Business Setup Options: FZE, FZCo, Branch of Company, Public Listed Company, Offshore Company',
      'License Types: Trading, Service, Industrial, Logistics',
      'Warehouses from AED 400/sqm',
      'Jafza Logistics Park: 46,112 sq.m. (16 units)',
      'Most frequently visited foreign port for US Navy; HQ for DP World (Jafza 17)',
      'Contact: 800-JAFZA (52392) | International: +971 4 4453270',
    ],
    sources: ['jafza.ae', 'Wikipedia'],
  },
  {
    id: 'masdar-city',
    name: 'Masdar City',
    type: 'REAL_ESTATE',
    emirate: 'Abu Dhabi',
    initiated: '2006',
    funding: '$22 billion state-funded project',
    description: "Sustainable urban community and business free zone. Built by Masdar (subsidiary of Mubadala Investment Company). Net Zero Target 2050.",
    sentiment: 'MIXED',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Development Started', value: 'February 2008' },
      { label: 'First Six Buildings Completed', value: 'October 2010' },
      { label: 'Connected to Utility Grid', value: '2016' },
      { label: '2023 Residents/Workers', value: '~15,000 (vs planned 45,000-50,000)' },
      { label: 'Solar Plant', value: '10 MW + 1 MW rooftop' },
      { label: 'Building Energy Reduction', value: '40% less than typical Abu Dhabi structures' },
      { label: 'Recycled Materials', value: '90% recycled aluminum' },
      { label: 'Low Carbon Cement', value: 'Used in 90% of buildings' },
      { label: 'Districts Elevated', value: '7 meters for thermal insulation' },
    ],
    keyProjects: [
      { name: 'International Renewable Energy Agency (IRENA)', description: 'Headquarters' },
      { name: 'Siemens Energy regional headquarters', description: 'First LEED Platinum building in Abu Dhabi' },
      { name: 'Mohamed bin Zayed University of Artificial Intelligence', description: '' },
      { name: 'G42 and UAE Space Agency', description: '' },
      { name: 'Khalifa University', description: '' },
      { name: 'Attentive Science', description: 'Middle East HQ' },
      { name: 'PRT (Personal Rapid Transit)', description: 'Prototype as of 2025 (high costs)' },
      { name: 'Electric cars', description: 'Pilot deployed 2011' },
      { name: 'NAVYA shuttles', description: 'Added 2018' },
    ],
    keyFindings: [
      'Wind towers for natural ventilation',
      'Wastewater recycled for irrigation',
      'ICE prohibition: Internal combustion engines prohibited',
      'Estidama \'Exemplar\' for Masdar Park',
      'WiredScore Platinum (upcoming)',
      'SmartScore Gold (upcoming)',
      'Contact: (800) 6239',
    ],
    sources: ['masdarcity.ae', 'Wikipedia'],
  },
  {
    id: 'dubai-media-city',
    name: 'Dubai Media City',
    type: 'MEDIA',
    emirate: 'Dubai',
    founded: '2000; inaugurated January 2001',
    managingDirector: 'Majed Al Suwaidi',
    description: "Tax-free zone, part of TECOM Group. Boosts UAE's media foothold with 1,300+ companies. Location: 25°5′34″N 55°9′10″E.",
    sentiment: 'NEUTRAL',
    confidence: 'HIGH',
    uaeRelevance: 'MEDIUM',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Companies', value: 'More than 1,300' },
      { label: 'Sound Stages', value: '11,000–50,000 sq.ft with water tanks, grid systems, elephant doors' },
    ],
    leadership: [
      { position: 'Managing Director', person: 'Majed Al Suwaidi' },
    ],
    keyProjects: [
      { name: 'Commercial office spaces', description: '' },
      { name: 'Boutique Studios/Villas', description: '' },
      { name: 'Light Industrial Units', description: '' },
      { name: 'Warehouses', description: '' },
      { name: 'in5 Centers', description: 'startup incubators' },
      { name: 'D/Quarters', description: 'coworking spaces' },
      { name: 'Amphitheatres and Courtyard venues', description: '' },
    ],
    keyFindings: [
      'Sectors: Media and content creation, Design industries, Technology, Education, Film and post-production, Broadcasting, Retail, Hospitality',
      'Notable Tenant: International Cricket Council (relocated HQ from London to DMC up to 2005)',
      'November 2007: Dubai government ordered Tecom to shut down Geo News TV and ARY One World (on Pakistan government demand)',
      'April 2008: du announced routing all traffic through UAE censorship proxy',
      'Award: Dubai named "The capital of Arab Media 2020"',
    ],
    sources: ['dmc.ae', 'Wikipedia'],
  },
  {
    id: 'dubai-holding',
    name: 'Dubai Holding',
    type: 'HOLDING',
    emirate: 'Dubai',
    founded: 'October 2004',
    chairman: 'Sheikh Ahmed bin Saeed Al Maktoum',
    ceo: 'Amit Kaushal',
    description: "State-owned holding company with AED 500 billion in total assets. Operations in 30+ countries across 10 business sectors with 45,000 combined workforce.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Total Assets', value: 'AED 500 billion' },
      { label: 'Countries of Operation', value: '30+' },
      { label: 'Business Sectors', value: '10' },
      { label: 'Combined Workforce', value: '45,000' },
    ],
    financials: {
      assets: 'AED 500 billion',
    },
    leadership: [
      { position: 'Chairman', person: 'Sheikh Ahmed bin Saeed Al Maktoum' },
      { position: 'CEO', person: 'Amit Kaushal' },
    ],
    subsidiaries: [
      { name: 'Jumeirah Group', details: 'Hospitality' },
      { name: 'Dubai Properties', details: 'Real estate' },
      { name: 'TECOM Group', details: 'Media/free zones' },
      { name: 'Arab Media Group', details: 'Media' },
      { name: 'Dubai International Capital', details: 'Investment' },
      { name: 'Dubai Group', details: 'Diversified' },
      { name: 'Emirates Integrated Telecommunications (du)', details: 'Telecom' },
      { name: 'Meraas', details: 'Real estate' },
      { name: 'Wild Wadi Waterpark', details: 'Leisure' },
      { name: 'Dubai Parks and Resorts', details: 'Entertainment' },
      { name: 'Nakheel', details: 'Real estate' },
    ],
    keyFindings: [
      'Sectors: Real Estate, Hospitality, Leisure & Entertainment, Retail, Media, Technology, Design, Education, Manufacturing, Science',
      '2024-2025 RTA partnership: AED 6 billion for 15 developments (Business Bay, Palm Jumeirah)',
      '2024-2025 Aldar JV: AED 38 billion for Dubai developments',
      '2024-2025 Emirates NBD stake: 14.8% (second largest shareholder since 2023)',
      '2024-2025 Emaar stake: Second largest shareholder (since 2022)',
      'Signature Projects: Jumeirah Marsa Al Arab (386 rooms/suites, 82 serviced residences, 82-berth super yacht marina)',
      'Warsan Waste Management Centre: World\'s largest energy-from-waste facility',
      'Nord Anglia Education: USD 14.5 billion acquisition (EQT consortium)',
    ],
    sources: ['dubaiholding.com', 'Wikipedia'],
  },
  {
    id: 'dewa',
    name: 'DEWA - Dubai Electricity and Water Authority',
    type: 'UTILITY',
    emirate: 'Dubai',
    founded: 'January 1, 1992 by Sheikh Maktoum bin Rashid Al Maktoum',
    ceo: 'Saeed Mohammed Al Tayer',
    description: "Government-owned utilities company. Dubai's sole electricity and water provider. Formed by merging Dubai Electricity Company and Dubai Water Department.",
    sentiment: 'POSITIVE',
    confidence: 'MEDIUM',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Employees', value: '11,727 (as of 2019)' },
      { label: 'Electricity Customers', value: '915,623 (as of 2019)' },
      { label: 'Water Customers', value: '816,580 (as of 2019)' },
      { label: 'Installed Capacity', value: '11,400 MW (as of 2019)' },
      { label: 'Daily Water Production', value: '470 million imperial gallons (2.14 billion liters) (as of 2019)' },
      { label: '2022 Net Profit', value: 'AED 8 billion (22% increase)' },
      { label: 'Mohammed bin Rashid Al Maktoum Solar Park Phase 1', value: '13 MW (DC) - 2013' },
      { label: 'Mohammed bin Rashid Al Maktoum Solar Park Phase 2', value: '200 MW (AC) - 2015' },
      { label: 'Mohammed bin Rashid Al Maktoum Solar Park Phase 3', value: '800 MW PV - 2020' },
      { label: 'Mohammed bin Rashid Al Maktoum Solar Park Total Planned', value: '5 GW' },
    ],
    financials: {
      profit: 'AED 8 billion (2022)',
    },
    leadership: [
      { position: 'CEO', person: 'Saeed Mohammed Al Tayer' },
    ],
    keyFindings: [
      'Predecessors operated independently since 1959 under Sheikh Rashid bin Saeed Al Maktoum',
      'Hatta Development: Planned 250 MW pumped-storage hydroelectric plant',
      'Planned 2022 IPO: 18% of share capital on Dubai Financial Market',
      'Estimated IPO value: $22.6 billion (valuation $27-37 billion)',
      'Subsidiary: Emirates Central Cooling Systems Corporation (EMPOWER)',
    ],
    sources: ['dewa.gov.ae', 'Wikipedia'],
  },
  {
    id: 'dubai-police',
    name: 'Dubai Police Force',
    type: 'POLICE',
    emirate: 'Dubai',
    founded: 'June 1, 1956 (initially 29 members operating from Naif Fort)',
    commander: 'Abdullah Khalifa Al Marri (since 2017)',
    description: "Covers 4,114 km² jurisdiction serving approximately 4.2 million residents. Over 30,000 employees with more than 17,500 sworn members.",
    sentiment: 'VERY_POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'CRITICAL',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Employees', value: 'Over 30,000' },
      { label: 'Sworn Members', value: 'More than 17,500' },
      { label: 'Jurisdiction', value: '4,114 km²' },
      { label: 'Population Served', value: 'Approximately 4.2 million residents' },
      { label: 'Crime Detection Rate (2024)', value: '99% using forensic evidence' },
      { label: 'Emergency Response Time (Q3 2023)', value: '2 minutes 24 seconds' },
    ],
    leadership: [
      { position: 'Commander-in-Chief', person: 'Abdullah Khalifa Al Marri (since 2017)' },
      { position: 'Deputy Chief', person: 'Dhahi Khalfan Tamim (since 2013)' },
    ],
    keyProjects: [
      { name: 'Smart Police Stations', description: 'Launched 2017; now 22 stations offering 24/7 multilingual services' },
      { name: 'All-female SWAT team', description: 'Formed 2023 (UAE\'s first)' },
      { name: 'Floating Smart Police Station', description: 'Planned 2026' },
    ],
    keyFindings: [
      'Fleet (Exotic): Bugatti Veyron (Guinness World Record as fastest police car), Lamborghini Aventador, Ferrari FF, Chevrolet Camaro, W Motors Lykan HyperSport, Nissan GT-R',
      'General Department of Operations',
      'General Department of Artificial Intelligence (established 2001)',
      'General Department of Criminal Investigation',
      'General Department of Forensic Science and Criminology',
    ],
    sources: ['dubaipolice.gov.ae', 'Wikipedia'],
  },

  // --------------------------------------------------------------------------
  // NORTHERN EMIRATES ENTITIES
  // --------------------------------------------------------------------------
  {
    id: 'government-sharjah',
    name: 'Government of Sharjah',
    type: 'GOVERNMENT',
    emirate: 'Sharjah',
    head: 'Ruler of Sharjah, Sheikh Sultan bin Muhammad Al-Qasimi',
    description: "Subnational monarchy. Third-largest Emirate. Recognized as cultural capital of UAE. Executive Authority: Sharjah Executive Council (established October 1999).",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'HIGH',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Emirate Rank', value: 'Third-largest' },
      { label: 'Ruler', value: 'Sheikh Sultan bin Muhammad Al-Qasimi' },
      { label: 'Executive Council Chairman', value: 'His Highness Sheikh Sultan bin Mohammed bin Sultan Al Qasimi (Deputy Ruler)' },
      { label: 'Oil Discovery', value: 'Mubarak oil field (1971), Al Sajaa gas field (1981)' },
    ],
    leadership: [
      { position: 'Ruler', person: 'Sheikh Sultan bin Muhammad Al-Qasimi' },
      { position: 'Chairman', person: 'His Highness Sheikh Sultan bin Mohammed bin Sultan Al Qasimi (Deputy Ruler)' },
      { position: 'First Deputy Chairman', person: 'His Highness Sheikh Abdullah bin Salem bin Sultan Al Qasimi' },
      { position: 'Second Deputy Chairman', person: 'His Highness Sheikh Sultan bin Ahmed Al Qasimi (Deputy Ruler, Chairman of Sharjah Media Council)' },
    ],
    keyFindings: [
      'Key Entities: Sharjah Municipality, Finance Department, Seaports and Customs, Hamriyah Free Zone, Sharjah International Airport Authority, Department of Public Works, Health Authority, Police, Roads and Transport Authority, Culture, agriculture, housing, social services, economic development departments',
      'Sheikh Sultan assumed throne in 1972',
    ],
    sources: ['Wikipedia'],
  },
  {
    id: 'government-ajman',
    name: 'Government of Ajman',
    type: 'GOVERNMENT',
    emirate: 'Ajman',
    ruler: 'Sheikh Humaid bin Rashid Al Nuaimi III',
    description: "Absolute monarchy. Smallest emirate by area. Executive Council Chairman: Ammar bin Humaid Al Nuaimi.",
    sentiment: 'NEUTRAL',
    confidence: 'HIGH',
    uaeRelevance: 'MEDIUM',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Ruler', value: 'Sheikh Humaid bin Rashid Al Nuaimi III' },
      { label: 'Executive Council Chairman', value: 'Ammar bin Humaid Al Nuaimi' },
    ],
    keyFindings: [
      'Entities: Ajman Police Force, Ajman Real Estate Regulatory Agency, Ajman Transport Authority, Department of Digital Ajman, Department of Economic Development, Department of Finance, Department of Human Resources, Department of Justice and Courts, Department of Municipalities and Planning, Department of Ports and Customs, Department of Tourism Development',
    ],
    sources: ['Wikipedia'],
  },
  {
    id: 'rak-entities',
    name: 'Ras Al Khaimah Entities',
    type: 'GOVERNMENT',
    emirate: 'RAK',
    ruler: 'His Highness Sheikh Saud bin Saqr Al Qasimi',
    description: "RAK Investment Authority is investment arm. RAKEZ (Ras Al Khaimah Economic Zones) is powerhouse business hub. RAK International Corporate Center for corporate registration.",
    sentiment: 'POSITIVE',
    confidence: 'HIGH',
    uaeRelevance: 'MEDIUM',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Ruler', value: 'His Highness Sheikh Saud bin Saqr Al Qasimi' },
    ],
    keyFindings: [
      'Authorities: Ras Al Khaimah Economic Zone (RAKEZ), Ras Al Khaimah Investment Authority (RAKIA), Ras Al Khaimah Tourism Development Authority',
      'Government Departments: Department of Economic Development, RAK Municipality, RAK Department of Civil Aviation, Department of Finance, RAK Customs, RAK Transport Authority, Ras Al Khaimah International Airport, Human Resources Department, Public Services Department, National Bureau of Statistics',
      'Judicial: Courts and legal entities',
      'Law Enforcement: RAK Police',
      'Federal: Ministry of Public Works, federal departments',
      'Centers: RAK Center for Statistics & Studies, Sheikh Saud bin Saqr Al Qasimi Foundation for Policy Research',
    ],
    sources: ['rak.ae', 'Wikipedia'],
  },
  {
    id: 'uaq-entities',
    name: 'Umm Al Quwain Entities',
    type: 'GOVERNMENT',
    emirate: 'UAQ',
    ruler: 'Sheikh Saud bin Rashid Al Mualla',
    description: "Smallest population emirate. Developing infrastructure with focus on trade and logistics through Ports, Customs and Free Zone Corporation.",
    sentiment: 'NEUTRAL',
    confidence: 'HIGH',
    uaeRelevance: 'LOW',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Ruler', value: 'Sheikh Saud bin Rashid Al Mualla' },
    ],
    keyFindings: [
      'Departments: Department of Finance, Ports, Customs and Free Zone Corporation, Department of Tourism and Archaeology, Umm Al Quwain Industrial Authority, Municipality of Umm Al Quwain, Department of Financial Auditing, Smart Government',
    ],
    sources: ['uaq.ae'],
  },
  {
    id: 'fujairah-government',
    name: 'Fujairah Government',
    type: 'GOVERNMENT',
    emirate: 'Fujairah',
    ruler: 'Sheikh Hamad bin Mohammed Al Sharqi (since 1974)',
    description: "Strategic east coast location. $6.8 billion GDP (2023). 37 departments with 214 digital services. Government Statistics: 4.80 customer feedback rating.",
    sentiment: 'NEUTRAL',
    confidence: 'HIGH',
    uaeRelevance: 'MEDIUM',
    lastUpdated: '2026-04-27',
    metrics: [
      { label: 'Ruler', value: 'Sheikh Hamad bin Mohammed Al Sharqi (since 1974)' },
      { label: 'Area', value: '1,166 km² (fifth largest)' },
      { label: 'Population', value: 'Approximately 256,256 (2019)' },
      { label: 'GDP', value: '$6.8 billion (2023)' },
      { label: 'Total Departments', value: '37' },
      { label: 'Digital Services', value: '214' },
      { label: 'Customers Served (digital)', value: '2,728' },
      { label: 'Customer Feedback Rating', value: '4.80' },
      { label: 'Portal Visitors', value: '102,578' },
      { label: 'Police Emergency', value: '999' },
      { label: 'Ambulance', value: '998' },
      { label: 'Civil Defence', value: '997' },
      { label: 'Electricity Authority', value: '991' },
    ],
    keyFindings: [
      'Heavily reliant on Abu Dhabi subsidies and federal grants',
      'Local industries: cement production, stone crushing, mining',
      'Government Departments: Fujairah Municipality, Fujairah Tourism & Antiquities Department, Digital Fujairah (e-government), Fujairah Free Zone',
      'Digital Platforms: Digital Fujairah (digital.fujairah.ae), Mobile apps: Digital Fujairah, Fujairah Kawadar, Fujairah Calendar',
      'Contact: 800385',
      'Hours: Mon-Thu 7:30am-3:30pm, Fri 7:30am-12:00pm',
    ],
    sources: ['fujairah.ae', 'Wikipedia'],
  },
]

// ============================================================================
// SYNTHESIZED FINDINGS
// ============================================================================

export const synthesizedAbuDhabiEcosystem: SynthesizedEcosystem[] = [
  { emirate: 'Abu Dhabi', entityType: 'Sovereign Wealth Funds', keyExamples: 'ADIA ($1.057T), Mubadala ($330B)', scale: 'Largest in region' },
  { emirate: 'Abu Dhabi', entityType: 'Energy', keyExamples: 'ADNOC', scale: '12th largest globally' },
  { emirate: 'Abu Dhabi', entityType: 'Aviation', keyExamples: 'Etihad Airways', scale: '110 aircraft, 120+ destinations' },
  { emirate: 'Abu Dhabi', entityType: 'Real Estate', keyExamples: 'Aldar Properties', scale: 'Yas Island, $41B assets' },
  { emirate: 'Abu Dhabi', entityType: 'Culture/Tourism', keyExamples: 'DCT Abu Dhabi', scale: '4 major museums' },
  { emirate: 'Abu Dhabi', entityType: 'Police', keyExamples: 'Abu Dhabi Police', scale: '36,000 staff' },
]

export const synthesizedDubaiEcosystem: SynthesizedEcosystem[] = [
  { emirate: 'Dubai', entityType: 'Trade/Logistics', keyExamples: 'DP World, JAFZA', scale: '10% global trade, 82 terminals' },
  { emirate: 'Dubai', entityType: 'Aviation', keyExamples: 'Emirates', scale: '261 aircraft, $34.83B revenue' },
  { emirate: 'Dubai', entityType: 'Real Estate', keyExamples: 'Emaar, Nakheel, Dubai Holding', scale: '$500B+ assets combined' },
  { emirate: 'Dubai', entityType: 'Finance', keyExamples: 'Emirates NBD, DIFC', scale: '$295.7B bank assets' },
  { emirate: 'Dubai', entityType: 'Free Zones', keyExamples: 'DMCC, JAFZA, Dubai Media City', scale: '26,000+ companies' },
]

export const synthesizedNorthernEmirates: SynthesizedEcosystem[] = [
  { emirate: 'Sharjah', entityType: 'Government', keyExamples: 'Hamriyah Free Zone, Sharjah Media Council', scale: 'Cultural capital' },
  { emirate: 'Ajman', entityType: 'Government', keyExamples: 'Ajman Free Zone', scale: 'SMEs' },
  { emirate: 'RAK', entityType: 'Government', keyExamples: 'RAKEZ, RAKIA', scale: 'Economic zones' },
  { emirate: 'UAQ', entityType: 'Government', keyExamples: 'Ports, Customs and Free Zone', scale: 'Trade' },
  { emirate: 'Fujairah', entityType: 'Government', keyExamples: 'Fujairah Free Zone', scale: 'East coast logistics' },
]

// ============================================================================
// ENTITY HIERARCHY SUMMARY
// ============================================================================

export const entityHierarchy: Record<string, EntityHierarchyEntry[]> = {
  'UAE Federal Government': [
    {
      name: 'Abu Dhabi (Largest - 84% of UAE land)',
      entities: ['ADNOC (Oil & Gas)', 'ADIA (SWF - $1.057T)', 'Mubadala (SWF - $330B)', 'Etihad Aviation', 'Aldar Properties', 'DCT (Culture & Tourism)', 'Abu Dhabi Police'],
    },
    {
      name: 'Dubai (Economic Hub)',
      entities: ['Emirates (Airline)', 'DP World (Logistics)', 'Emaar Properties', 'Nakheel (now Dubai Holding)', 'Emirates NBD', 'DIFC (Financial Centre)', 'Dubai Holding ($500B assets)', 'DMCC (Commodities)', 'JAFZA (Free Zone)', 'Dubai Police'],
    },
    {
      name: 'Sharjah (Cultural Capital)',
      entities: ['Hamriyah Free Zone', 'Sharjah Media Council'],
    },
    {
      name: 'Ras Al Khaimah',
      entities: ['RAKEZ', 'RAKIA'],
    },
    {
      name: 'Ajman',
      entities: ['Ajman Free Zone'],
    },
    {
      name: 'Umm Al Quwain',
      entities: ['Ports & Free Zone'],
    },
    {
      name: 'Fujairah',
      entities: ['Fujairah Free Zone'],
    },
  ],
}

// ============================================================================
// DASHBOARD SUMMARY TABLES
// ============================================================================

export interface AUMRevenueEntry {
  entity: string
  emirate: string
  type: string
  metric: string
  value: string
}

export const aumRevenueData: AUMRevenueEntry[] = [
  { entity: 'ADIA', emirate: 'Abu Dhabi', type: 'SWF', metric: 'AUM', value: '$1.057 trillion' },
  { entity: 'Dubai Holding', emirate: 'Dubai', type: 'Holding', metric: 'Assets', value: 'AED 500 billion' },
  { entity: 'ADNOC', emirate: 'Abu Dhabi', type: 'Oil & Gas', metric: 'Revenue', value: '$70B+ (estimated)' },
  { entity: 'Mubadala', emirate: 'Abu Dhabi', type: 'SWF', metric: 'AUM', value: '$330 billion' },
  { entity: 'Emirates', emirate: 'Dubai', type: 'Airline', metric: 'Revenue', value: '$34.83 billion' },
  { entity: 'Emirates NBD', emirate: 'Dubai', type: 'Bank', metric: 'Assets', value: '$295.7 billion' },
  { entity: 'DP World', emirate: 'Dubai', type: 'Logistics', metric: 'Revenue', value: '$24.4 billion' },
  { entity: 'Emaar', emirate: 'Dubai', type: 'Real Estate', metric: 'Valuation', value: '$16.8 billion' },
]

export interface FreeZoneEntry {
  freeZone: string
  emirate: string
  companies: string
  fdiContribution: string
}

export const freeZoneData: FreeZoneEntry[] = [
  { freeZone: 'DMCC', emirate: 'Dubai', companies: '26,000+', fdiContribution: '15% of Dubai FDI' },
  { freeZone: 'JAFZA', emirate: 'Dubai', companies: '11,000+', fdiContribution: '32% of UAE FDI' },
  { freeZone: 'Dubai Media City', emirate: 'Dubai', companies: '1,300+', fdiContribution: '-' },
  { freeZone: 'Hamriyah', emirate: 'Sharjah', companies: '-', fdiContribution: '-' },
  { freeZone: 'RAKEZ', emirate: 'RAK', companies: '-', fdiContribution: '-' },
  { freeZone: 'Fujairah Free Zone', emirate: 'Fujairah', companies: '-', fdiContribution: '-' },
]

export interface AviationEntry {
  airline: string
  emirate: string
  fleet: string
  destinations: string
  revenue: string
}

export const aviationData: AviationEntry[] = [
  { airline: 'Emirates', emirate: 'Dubai', fleet: '261 + 13 cargo', destinations: '150+ cities', revenue: '$34.83B' },
  { airline: 'Etihad', emirate: 'Abu Dhabi', fleet: '110', destinations: '120+', revenue: '$6.8B' },
]

export interface PoliceForceEntry {
  force: string
  emirate: string
  staff: string
  jurisdiction: string
}

export const policeForceData: PoliceForceEntry[] = [
  { force: 'Abu Dhabi Police', emirate: 'Abu Dhabi', staff: '36,000', jurisdiction: '67,340 km²' },
  { force: 'Dubai Police', emirate: 'Dubai', staff: '30,000+', jurisdiction: '4,114 km²' },
]

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: '30+',
  pagesFetched: '25+',
  sourceFile: 'micro-queries/part-1/1-3-emirate-entities.md',
  enrichmentStatus: 'Fully enriched with web-fetched validation',
  totalEntitiesCovered: 25,
  emiratesCovered: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'RAK', 'UAQ', 'Fujairah'],
}

// ============================================================================
// KEY PATTERNS
// ============================================================================

export const keyPatterns = [
  'Diversification: Abu Dhabi uses oil/gas wealth through SWFs (ADIA, Mubadala)',
  'Free Zones: All emirates use free zones to attract FDI',
  'Overlapping Mandates: Similar entity functions across emirates',
  'SOE Debt: Historical debt issues (Nakheel 2009, Dubai World 2009) but successful restructuring',
  'Regional Competition: Emirates vs Etihad, DIFC vs ADGM, JAFZA vs RAKEZ',
  'Consolidation: Recent mergers (Nakheel + Dubai Holding, Dubai Holding asset consolidation)',
]

// ============================================================================
// DATA CONFIDENCE SUMMARY
// ============================================================================

export interface ConfidenceSummary {
  level: ConfidenceLevel
  criteria: string
  entities: string[]
}

export const confidenceSummary: ConfidenceSummary[] = [
  {
    level: 'HIGH',
    criteria: 'Official source + multiple sources confirm',
    entities: ['ADNOC', 'Mubadala', 'Emirates', 'Emaar', 'DP World', 'Emirates NBD', 'DMCC', 'JAFZA', 'Dubai Police'],
  },
  {
    level: 'MEDIUM',
    criteria: 'Single source or older data',
    entities: ['Etihad', 'Aldar', 'DEWA'],
  },
]

// ============================================================================
// EXPORTS
// ============================================================================

export default emirateEntitiesData
