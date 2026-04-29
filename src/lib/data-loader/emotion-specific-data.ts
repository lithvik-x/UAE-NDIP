/**
 * Emotion-Specific Results Data (MD 9-4)
 *
 * Data extracted from MD file 9-4-emotion-specific-results.md
 * Based on Plutchik emotion model adapted for UAE context
 * Covers 8 primary emotions with 49 primary patterns and 1,400+ query variations
 */

import type { TierLevel } from './types'

// ============================================================================
// EMOTION CATEGORY STATISTICS
// ============================================================================

export interface EmotionCategory {
  emotion: string
  primaryQueries: number
  uniqueSources: number
  dataPointsExtracted: number
  avgSentimentScore: number
  polarity: 'positive' | 'negative' | 'neutral'
}

export const emotionCategories: EmotionCategory[] = [
  { emotion: 'JOY', primaryQueries: 6, uniqueSources: 12, dataPointsExtracted: 45, avgSentimentScore: 0.72, polarity: 'positive' },
  { emotion: 'TRUST', primaryQueries: 4, uniqueSources: 11, dataPointsExtracted: 52, avgSentimentScore: 0.58, polarity: 'positive' },
  { emotion: 'FEAR', primaryQueries: 9, uniqueSources: 24, dataPointsExtracted: 89, avgSentimentScore: -0.81, polarity: 'negative' },
  { emotion: 'SURPRISE', primaryQueries: 3, uniqueSources: 8, dataPointsExtracted: 28, avgSentimentScore: -0.12, polarity: 'neutral' },
  { emotion: 'SADNESS', primaryQueries: 5, uniqueSources: 11, dataPointsExtracted: 41, avgSentimentScore: -0.67, polarity: 'negative' },
  { emotion: 'DISGUST', primaryQueries: 1, uniqueSources: 5, dataPointsExtracted: 18, avgSentimentScore: -0.54, polarity: 'negative' },
  { emotion: 'ANGER', primaryQueries: 8, uniqueSources: 19, dataPointsExtracted: 76, avgSentimentScore: -0.73, polarity: 'negative' },
  { emotion: 'ANTICIPATION', primaryQueries: 5, uniqueSources: 13, dataPointsExtracted: 44, avgSentimentScore: 0.45, polarity: 'positive' },
]

// Research Summary
export const emotionResearchSummary = {
  totalUniqueQueryPatterns: 49,
  totalSearchResultsProcessed: 490,
  pagesFetchedForDeepDive: 42,
  keySourcesCited: 95,
  totalDataPointsExtracted: 393,
  documentGenerated: '2026-04-27',
  enrichmentCompleted: '2026-04-28',
}

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface SourceCredibilityEntry {
  source: string
  tier: TierLevel
  type: string
  credibilityScore: number
}

export const emotionSourceCredibilityMatrix: SourceCredibilityEntry[] = [
  { source: 'WAM', tier: 0, type: 'Government/Official', credibilityScore: 10 },
  { source: 'Central Bank UAE', tier: 0, type: 'Government/Official', credibilityScore: 10 },
  { source: 'BTI Project', tier: 0, type: 'Government/Official', credibilityScore: 9 },
  { source: 'World Justice Project', tier: 0, type: 'Government/Official', credibilityScore: 9 },
  { source: 'World Bank', tier: 0, type: 'Government/Official', credibilityScore: 9 },
  { source: 'BBC', tier: 1, type: 'Major Established Media', credibilityScore: 8 },
  { source: 'CNN', tier: 1, type: 'Major Established Media', credibilityScore: 8 },
  { source: 'Gulf News', tier: 2, type: 'Regional/Industry Authority', credibilityScore: 7 },
  { source: 'Khaleej Times', tier: 2, type: 'Regional/Industry Authority', credibilityScore: 7 },
  { source: 'The National', tier: 2, type: 'Regional/Industry Authority', credibilityScore: 7 },
  { source: 'Arab News', tier: 2, type: 'Regional/Industry Authority', credibilityScore: 7 },
  { source: 'Freedom House', tier: 3, type: 'Specialized/NGO', credibilityScore: 6 },
  { source: 'RSF', tier: 3, type: 'Specialized/NGO', credibilityScore: 6 },
  { source: 'Human Rights Watch', tier: 3, type: 'Specialized/NGO', credibilityScore: 6 },
  { source: 'ICTJ', tier: 3, type: 'Specialized/NGO', credibilityScore: 6 },
  { source: 'Instagram', tier: 4, type: 'Social/Personal', credibilityScore: 3 },
  { source: 'TikTok', tier: 4, type: 'Social/Personal', credibilityScore: 3 },
  { source: 'Reddit', tier: 4, type: 'Social/Personal', credibilityScore: 3 },
  { source: 'Facebook', tier: 4, type: 'Social/Personal', credibilityScore: 3 },
  { source: 'Substack', tier: 4, type: 'Social/Personal', credibilityScore: 4 },
]

export const sourceTierDistribution = [
  { tier: 0, count: 8, percentage: 8.4 },
  { tier: 1, count: 2, percentage: 2.1 },
  { tier: 2, count: 15, percentage: 15.8 },
  { tier: 3, count: 7, percentage: 7.4 },
  { tier: 4, count: 63, percentage: 66.3 },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT MATRIX
// ============================================================================

export interface UAERelevanceEntry {
  category: string
  relevance: 'CRITICAL' | 'HIGH' | 'MEDIUM'
  rationale: string
}

export const uaeRelevanceAssessment: UAERelevanceEntry[] = [
  { category: 'National Day Celebrations', relevance: 'CRITICAL', rationale: 'Core to UAE identity and unity' },
  { category: 'Government Trust/Performance', relevance: 'CRITICAL', rationale: 'Direct governance indicator' },
  { category: 'Regional Conflict/Missile Threats', relevance: 'CRITICAL', rationale: 'Existential security concern' },
  { category: 'Economic Performance/GDP', relevance: 'CRITICAL', rationale: 'Core stability indicator' },
  { category: 'Labour/Employment Issues', relevance: 'HIGH', rationale: 'Affects 89% expat population' },
  { category: 'Real Estate/Housing', relevance: 'HIGH', rationale: 'Major cost of living factor' },
  { category: 'Banking/Financial Safety', relevance: 'HIGH', rationale: 'Trust in institutions' },
  { category: 'Human Rights/Freedom of Expression', relevance: 'HIGH', rationale: 'International reputation' },
  { category: 'Traffic/Road Safety', relevance: 'MEDIUM', rationale: 'Public safety concern' },
  { category: 'Corruption/Wasta', relevance: 'MEDIUM', rationale: 'Governance quality indicator' },
  { category: 'Health/Pandemic Threats', relevance: 'MEDIUM', rationale: 'Public health concern' },
  { category: 'Cultural Heritage Preservation', relevance: 'MEDIUM', rationale: 'National identity' },
  { category: 'Expat Loneliness/Integration', relevance: 'MEDIUM', rationale: 'Social cohesion' },
]

// ============================================================================
// KPI DASHBOARD DATA
// ============================================================================

export interface EmotionKPIData {
  emotion: string
  sentimentIndex: number
  trend: 'Positive' | 'Negative' | 'Neutral'
  lastUpdated: string
}

export const emotionKPIDashboard: EmotionKPIData[] = [
  { emotion: 'Joy', sentimentIndex: 0.72, trend: 'Positive', lastUpdated: '2026-04-27' },
  { emotion: 'Trust', sentimentIndex: 0.58, trend: 'Positive', lastUpdated: '2026-04-27' },
  { emotion: 'Fear', sentimentIndex: -0.81, trend: 'Negative', lastUpdated: '2026-04-27' },
  { emotion: 'Surprise', sentimentIndex: -0.12, trend: 'Neutral', lastUpdated: '2026-04-27' },
  { emotion: 'Sadness', sentimentIndex: -0.67, trend: 'Negative', lastUpdated: '2026-04-27' },
  { emotion: 'Disgust', sentimentIndex: -0.54, trend: 'Negative', lastUpdated: '2026-04-27' },
  { emotion: 'Anger', sentimentIndex: -0.73, trend: 'Negative', lastUpdated: '2026-04-27' },
  { emotion: 'Anticipation', sentimentIndex: 0.45, trend: 'Positive', lastUpdated: '2026-04-27' },
]

export const netEmotionalBalance = {
  value: -0.14,
  trend: 'Slightly Negative',
  lastUpdated: '2026-04-27',
}

// Economic Confidence KPIs
export interface EconomicKPI {
  kpi: string
  value: string
  target?: string
  status: string
}

export const economicConfidenceKPIs: EconomicKPI[] = [
  { kpi: 'GDP Growth Forecast 2024', value: '5.7%', status: 'On Track' },
  { kpi: 'Non-Oil GDP Growth', value: '4.7%', status: 'Stable' },
  { kpi: 'Banking Sector Assets', value: 'AED 5.42T', status: 'Strong' },
  { kpi: 'Capital Adequacy Ratio', value: '17%', target: '10.5% minimum', status: 'Excellent' },
  { kpi: 'Liquidity Coverage Ratio', value: '146.6%', target: '100% minimum', status: 'Excellent' },
  { kpi: 'Deposit Safety Guarantee', value: 'AED 100,000', status: 'Active' },
  { kpi: 'CPI Score', value: '68/100', status: 'Best in MENA' },
  { kpi: 'Rule of Law Index', value: '39th/142', status: 'Regional Leader' },
]

// Security & Safety KPIs
export interface SecurityKPI {
  kpi: string
  value: string
  change?: string
  period: string
}

export const securitySafetyKPIs: SecurityKPI[] = [
  { kpi: 'Road Deaths', value: '384', change: '+9%', period: '2024' },
  { kpi: 'Road Injuries', value: '6,032', change: '+8.33%', period: '2024' },
  { kpi: 'Fraud Cost Multiplier', value: 'AED 4.19/$', period: '2024' },
  { kpi: 'Cyber Fraud Returned', value: 'AED 140M', period: '2 years' },
  { kpi: 'Missile Interception Rate', value: '98%+', period: 'Feb 2026' },
  { kpi: 'Fraud Increase (YoY)', value: '42%', period: '2024' },
]

// Human Rights & Freedom KPIs
export interface HumanRightsKPI {
  kpi: string
  value: string
  index?: string
  year: string
}

export const humanRightsKPIs: HumanRightsKPI[] = [
  { kpi: 'Press Freedom Index', value: '160th', index: '180', year: '2024' },
  { kpi: 'Freedom on Net Score', value: '30/100', year: '2024' },
  { kpi: 'Internet Freedom', value: '"Not Free"', year: '2024' },
  { kpi: 'Cybercrime Fine Max', value: '$77,000', year: '2024' },
]

// ============================================================================
// EMOTION-SPECIFIC DATA
// ============================================================================

// JOY Data
export interface JoyData {
  nationalDayEvents: Array<{
    event: string
    location: string
    time: string
    date: string
  }>
  achievements: Array<{
    entity: string
    category: string
    metric: string
    source: string
  }>
  uaeTeamEmiratesStats: {
    totalVictories: number
    podiumFinishes: number
    winningRiders: number
    uciWorldTourBestTeam: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const joyData: JoyData = {
  nationalDayEvents: [
    { event: 'National Fireworks', location: 'Yas Island', time: 'TBD', date: 'Dec 2, 2025' },
    { event: 'Burj Khalifa Display', location: 'Downtown Dubai', time: 'TBD', date: 'Dec 2, 2025' },
    { event: 'Dubai Festival City', location: 'Dubai Festival City Mall', time: '8:00 PM', date: 'Dec 2, 2025' },
    { event: 'Global Village', location: 'Global Village', time: '9:00 PM', date: 'Dec 2-3, 2025' },
  ],
  achievements: [
    { entity: 'UAE Cabinet', category: 'Government', metric: '223 #1 global rankings', source: "Mitchell's Commercial Realty" },
    { entity: 'UAE Team Emirates-XRG', category: 'Sports', metric: '97 victories (2025)', source: 'UAE Team Emirates' },
    { entity: 'Tadej Pogacar', category: 'Athlete', metric: 'Giro d\'Italia 2024 Champion', source: 'Gulf Today' },
    { entity: 'Jiu-Jitsu Team', category: 'Sports', metric: '50 medals World Championship', source: 'Gulf News' },
    { entity: 'Team Abu Dhabi', category: 'Sports', metric: 'F1 Powerboat World Title', source: 'Gulf News' },
  ],
  uaeTeamEmiratesStats: {
    totalVictories: 97,
    podiumFinishes: 104,
    winningRiders: 20,
    uciWorldTourBestTeam: '3rd consecutive season',
  },
  sentimentAnalysis: [
    { source: 'Gulf News', sentiment: 0.85, keyThemes: 'Achievement, pride, triumph' },
    { source: 'UAE Team Emirates', sentiment: 0.92, keyThemes: 'Victory, dominance, record-breaking' },
    { source: 'Visit Dubai', sentiment: 0.78, keyThemes: 'Celebration, unity, national pride' },
  ],
}

// TRUST Data
export interface TrustData {
  humanitarianInitiatives: Array<{
    initiative: string
    amount: string
    beneficiaries: string
    source: string
  }>
  bankingSector: {
    totalAssets: string
    capitalAdequacyRatio: string
    liquidityCoverageRatio: string
    foreignExchangeReserves: string
  }
  governanceIndices: {
    statusIndex: { score: number, rank: string }
    governanceIndex: { score: number, rank: string }
    politicalTransformation: { score: number, rank: string }
    economicTransformation: { score: number, rank: string }
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const trustData: TrustData = {
  humanitarianInitiatives: [
    { initiative: 'Zayed Humanitarian Legacy Initiative', amount: 'Dh20 billion', beneficiaries: 'Global communities', source: 'Gulf News' },
    { initiative: 'Mothers\' Endowment Campaign', amount: 'Dh1 billion', beneficiaries: 'Global education', source: 'Gulf News' },
    { initiative: 'Global Alliance against Hunger and Poverty', amount: 'US$100 million', beneficiaries: 'Multiple countries', source: 'Gulf News' },
    { initiative: 'Reaching the Last Mile', amount: 'Dh55 million', beneficiaries: 'Disease elimination', source: 'Gulf News' },
    { initiative: 'Lives and Livelihoods Fund 2.0', amount: 'US$50 million', beneficiaries: 'IsDB countries', source: 'Gulf News' },
    { initiative: 'Gaza Relief (Gallant Knight 3)', amount: 'Various', beneficiaries: '640,000+ children vaccinated, 1M+ aid recipients', source: 'Gulf News' },
  ],
  bankingSector: {
    totalAssets: 'AED 5.42 trillion (USD 1.48 trillion)',
    capitalAdequacyRatio: '17%',
    liquidityCoverageRatio: '146.6%',
    foreignExchangeReserves: 'AED 1+ trillion',
  },
  governanceIndices: {
    statusIndex: { score: 6.00, rank: '#46 of 137' },
    governanceIndex: { score: 6.67, rank: '#16 of 137' },
    politicalTransformation: { score: 4.00, rank: '#85 of 137' },
    economicTransformation: { score: 8.00, rank: '#15 of 137' },
  },
  sentimentAnalysis: [
    { source: 'Gulf News', sentiment: 0.81, keyThemes: 'Leadership, humanitarianism, global standing' },
    { source: 'WAM', sentiment: 0.74, keyThemes: 'Government effectiveness, annual meetings' },
    { source: 'Facebook', sentiment: 0.69, keyThemes: 'Trust, safety, unity' },
  ],
}

// FEAR Data
export interface FearData {
  regionalConflict: {
    warStart: string
    ballisticMissiles: number
    drones: number
    cruiseMissiles: number
    totalProjectiles: number
    interceptionRate: string
    deaths: number
  }
  defenseSystems: Array<{
    system: string
    origin: string
    notes: string
  }>
  economicImpact: Array<{
    impact: string
    metric: string
    source: string
  }>
  fearCategories: Array<{
    category: string
    keyFinding: string
    sentiment: number
    sources: string[]
  }>
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const fearData: FearData = {
  regionalConflict: {
    warStart: 'February 28, 2026',
    ballisticMissiles: 438,
    drones: 2012,
    cruiseMissiles: 19,
    totalProjectiles: 2469,
    interceptionRate: '98%+',
    deaths: 13,
  },
  defenseSystems: [
    { system: 'THAAD', origin: 'USA', notes: 'Ballistic missile defense' },
    { system: 'Patriot', origin: 'USA', notes: 'Air defense' },
    { system: 'Cheongung II', origin: 'South Korea', notes: 'First battle deployment' },
    { system: 'Barak-8', origin: 'Israel', notes: 'Air defense' },
  ],
  economicImpact: [
    { impact: 'Amazon', metric: 'Suspended Gulf deliveries, closed Abu Dhabi fulfillment', source: 'Globe and Mail' },
    { impact: 'Indian Repatriation', metric: '220,000+ since March 1', source: 'Globe and Mail' },
    { impact: 'Population Growth Revision', metric: '5% to 1% (2026 estimate)', source: 'Globe and Mail' },
    { impact: 'Formula 1', metric: 'Cancelled Bahrain, Saudi Arabia GP', source: 'Globe and Mail' },
    { impact: 'AI Data Center Risk', metric: '$30B "Stargate UAE" threatened', source: 'Globe and Mail' },
  ],
  fearCategories: [
    { category: 'General Fear', keyFinding: 'Expats expressing anxiety about regional conflict', sentiment: -0.72, sources: ['BBC', 'Instagram', 'CNN'] },
    { category: 'Job Loss', keyFinding: 'Up to 30% salary reductions, 18% of workers reporting pay cuts', sentiment: -0.76, sources: ['Khaleej Times', 'Reddit', 'AGBI'] },
    { category: 'Rent/Eviction', keyFinding: '16-20% annual rental increases, fear of eviction', sentiment: -0.74, sources: ['Khaleej Times', 'Finance-Commerce'] },
    { category: 'Visa/Deportation', keyFinding: 'Visa amnesty failures, Iranian visa cancellations', sentiment: -0.83, sources: ['Times of India', 'WSJ', 'MIO Law'] },
    { category: 'War/Missile', keyFinding: '2,469 projectiles, 13 deaths, 98%+ interception', sentiment: -0.91, sources: ['Globe and Mail', 'Fox News', 'Axios'] },
    { category: 'Crime/Fraud', keyFinding: 'AED 4.19 per dirham fraud cost, 42% increase', sentiment: -0.62, sources: ['LexisNexis', 'Abu Dhabi Police', 'WAM'] },
    { category: 'Debt/Prison', keyFinding: 'Decriminalization reforms, but AED 200,000 criminal threshold remains', sentiment: -0.52, sources: ['Hourani & Partners', 'Gulf News', 'TalkInDebts'] },
    { category: 'Health', keyFinding: 'Mpox Clade Ib outbreak, worst flu season since 1990s', sentiment: -0.55, sources: ['ICMR-NIV', 'The National', 'WHO'] },
    { category: 'Speaking Out', keyFinding: 'Cybercrime penalties up to $77,000, academic suppression', sentiment: -0.91, sources: ['Detained in Dubai', 'Skyline Human Rights', 'State Department'] },
  ],
  sentimentAnalysis: [
    { source: 'BBC', sentiment: -0.72, keyThemes: 'Threat, uncertainty, image concern' },
    { source: 'Instagram', sentiment: -0.68, keyThemes: 'Fear, anxiety, worry' },
    { source: 'CNN/Facebook', sentiment: -0.75, keyThemes: 'Scare tactics, vulnerability' },
    { source: 'Globe and Mail', sentiment: -0.78, keyThemes: 'Existential threat, casualties' },
  ],
}

// SURPRISE Data
export interface SurpriseData {
  uaeFloods: {
    date: string
    rainfallDubai: string
    rainfallAlAin: string
    duration: string
    historicalContext: string
    deaths: number
    insuranceLosses: string
    flightsCancelled: number
    governmentResponseFund: string
  }
  policyChanges: {
    aiGovernmentTarget: string
    timeline: string
    scope: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const surpriseData: SurpriseData = {
  uaeFloods: {
    date: 'April 16, 2024',
    rainfallDubai: '164 mm',
    rainfallAlAin: '254.8 mm',
    duration: 'Under 24 hours',
    historicalContext: 'Heaviest in 75 years (since 1949)',
    deaths: 5,
    insuranceLosses: 'US$2.9-3.4 billion',
    flightsCancelled: 1244,
    governmentResponseFund: 'Dh2 billion (US$544.6 million)',
  },
  policyChanges: {
    aiGovernmentTarget: '50% of government services to AI',
    timeline: 'Within 2 years',
    scope: 'Government sectors, services, operations',
  },
  sentimentAnalysis: [
    { source: 'Wikipedia', sentiment: -0.15, keyThemes: 'Historical event, devastation' },
    { source: 'Social Media', sentiment: 0.12, keyThemes: 'Shock, disbelief' },
  ],
}

// SADNESS Data
export interface SadnessData {
  tragicIncidents: Array<{
    incident: string
    details: string
    deaths: number
  }>
  culturalHeritage: {
    policyName: string
    launchYear: string
    ministry: string
    sitesCovered: string
    target: string
  }
  loneliness: {
    globalPrevalence: string
    healthImpact: string
    uaeSpecific: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const sadnessData: SadnessData = {
  tragicIncidents: [
    { incident: 'Khor Fakkan Car Crash', details: '41-year-old Emirati father, 7-month-old son killed', deaths: 2 },
    { incident: 'Abu Dhabi Heart Attack', details: 'Indian expat engineer Hariraj Sudevan, 37', deaths: 1 },
    { incident: 'Dubai Marina Fire', details: 'Tower fire, 3,820 residents evacuated', deaths: 0 },
    { incident: 'Dubai Murder', details: 'Anniemol Gilda, 26, from Kerala, stabbed', deaths: 1 },
    { incident: 'Double Tragedy', details: 'Amr Hesham, 29, died 11 years after brother\'s fatal crash', deaths: 1 },
    { incident: 'Ras Al Khaimah Shooting', details: '66-year-old mother, two daughters shot over parking', deaths: 3 },
  ],
  culturalHeritage: {
    policyName: 'National Policy for Preserving the UAE\'s Modern Architectural Heritage',
    launchYear: '2023',
    ministry: 'Ministry of Culture and Youth',
    sitesCovered: '130 identified',
    target: '1,000 target',
  },
  loneliness: {
    globalPrevalence: '1 in 4 people suffer loneliness',
    healthImpact: 'Worse than smoking, diabetes, anxiety',
    uaeSpecific: 'Rising, especially among expats',
  },
  sentimentAnalysis: [
    { source: 'Gulf News', sentiment: -0.84, keyThemes: 'Tragedy, loss, grief' },
    { source: 'Facebook', sentiment: -0.88, keyThemes: 'Heartbreak, devastation' },
  ],
}

// DISGUST Data
export interface DisgustData {
  wastaDefinition: {
    arabicRoot: string
    meaning: string
    function: string
    darkSide: string
  }
  corruptionStats: {
    tiCPI: string
    rank: string
    regionalPosition: string
    menaAverage: number
    globalAverage: number
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const disgustData: DisgustData = {
  wastaDefinition: {
    arabicRoot: 'وسط (wasat) - middle',
    meaning: 'Intermediaries, "connections," "clout," "influence"',
    function: '"Magical lubricant that smooths the way to jobs, promotions, university places"',
    darkSide: '"Source of nepotism, cronyism and corruption"',
  },
  corruptionStats: {
    tiCPI: '68/100',
    rank: '23rd of 180',
    regionalPosition: 'Best in MENA',
    menaAverage: 39,
    globalAverage: 43,
  },
  sentimentAnalysis: [
    { source: 'The Conversation', sentiment: -0.62, keyThemes: 'Kleptocracy, offshoring' },
    { source: 'Nardello & Co', sentiment: -0.58, keyThemes: 'Wasta, nepotism' },
    { source: 'Wikipedia', sentiment: -0.55, keyThemes: 'Corruption perception' },
  ],
}

// ANGER Data
export interface AngerData {
  censorship: {
    freedomHouseScore: string
    status: string
    accessObstacles: string
    limitsOnContent: string
    violationsOfUserRights: string
    wpfiRank: string
  }
  roadSafety: {
    totalRoadDeaths: number
    injuries: number
    change: string
    mostDangerousDay: string
    mostDangerousTime: string
  }
  rentInflation: {
    abuDhabiRentIncrease: string
    dubaiOfficeOccupancy: string
    annualRentIncrease: string
    bidAskSpread: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const angerData: AngerData = {
  censorship: {
    freedomHouseScore: '30/100',
    status: '"Not Free"',
    accessObstacles: '14/25',
    limitsOnContent: '9/35',
    violationsOfUserRights: '7/40',
    wpfiRank: '160th of 180',
  },
  roadSafety: {
    totalRoadDeaths: 384,
    injuries: 6032,
    change: '+9%',
    mostDangerousDay: 'Fridays',
    mostDangerousTime: 'Evenings',
  },
  rentInflation: {
    abuDhabiRentIncrease: '20%',
    dubaiOfficeOccupancy: '94-95%',
    annualRentIncrease: '15-20%',
    bidAskSpread: 'Up to 50% in some communities',
  },
  sentimentAnalysis: [
    { source: 'Freedom House', sentiment: -0.89, keyThemes: 'Severe restrictions, manipulation' },
    { source: 'Khaleej Times', sentiment: -0.72, keyThemes: 'Fatalities, preventable deaths' },
    { source: 'The National', sentiment: -0.68, keyThemes: 'Road rage, aggressive driving' },
  ],
}

// ANTICIPATION Data
export interface AnticipationData {
  upcomingProjects: {
    realEstate: Array<{
      project: string
      specs: string
      cost?: string
      completion?: string
    }>
    transport: Array<{
      project: string
      specs: string
      cost?: string
      completion?: string
    }>
    infrastructure: Array<{
      project: string
      detail: string
    }>
  }
  gdpForecasts: Array<{
    organization: string
    forecast: string
    year: string
    previous: string
  }>
  dubaiVisitorStats: {
    visitors2023: string
    visitorsJanJuly2025: string
    growth: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

export const anticipationData: AnticipationData = {
  upcomingProjects: {
    realEstate: [
      { project: 'Franck Muller Aeternitas Tower', specs: '450m, tallest branded residential & clock tower', completion: '2027' },
      { project: 'Burj Azizi', specs: 'World\'s 2nd tallest, Sheikh Zayed Road', completion: '2028' },
      { project: 'Dubai Islands', specs: 'Nakheel archipelago, 17 sq. km off Deira coast' },
      { project: 'Burj Binghatti Jacob & Co Residences', specs: '472.3m, world\'s tallest residential', completion: 'Mid-2026' },
    ],
    transport: [
      { project: 'Dubai Metro Blue Line', specs: '30km, 14 stations', completion: '2029' },
      { project: 'Etihad Rail', specs: 'High-speed Dubai-Abu Dhabi' },
      { project: 'Flying Taxi', specs: '4 vertiports', completion: '2026' },
      { project: 'Al Maktoum Airport Expansion', specs: '260M capacity', cost: 'AED 128B' },
    ],
    infrastructure: [
      { project: 'Barakah Nuclear Unit 4', detail: 'Commercial operations began, 40TWh annually, 25% of electricity' },
      { project: 'Dam Construction', detail: '9 new dams, 2 expanded, 9 canals (~9km), 8M cu/m storage' },
      { project: 'Tasreef Initiative', detail: '$8.17 billion, 700% drainage capacity increase' },
    ],
  },
  gdpForecasts: [
    { organization: 'Central Bank', forecast: '5.7%', year: '2024', previous: '4.3%' },
    { organization: 'Non-oil GDP', forecast: '4.7%', year: '2024', previous: '-' },
    { organization: '2023 GDP Growth', forecast: '3.1%', year: '2023', previous: '-' },
  ],
  dubaiVisitorStats: {
    visitors2023: '12.4 million',
    visitorsJanJuly2025: '11.17 million',
    growth: '5% jump',
  },
  sentimentAnalysis: [
    { source: 'Gulf News', sentiment: 0.88, keyThemes: 'Optimism, future-focused' },
    { source: 'Middle East Briefing', sentiment: 0.72, keyThemes: 'Growth, resilience' },
    { source: 'Bayut', sentiment: 0.78, keyThemes: 'Excitement, growth' },
  ],
}

// ============================================================================
// ENTITY REGISTRY SUMMARY
// ============================================================================

export interface EntityRegistrySummary {
  category: string
  count: number
  examples: string[]
}

export const entityRegistrySummary: EntityRegistrySummary[] = [
  { category: 'Government Entities', count: 15, examples: ['UAE Cabinet', 'BTI Project', 'WJP'] },
  { category: 'Sports Organizations', count: 5, examples: ['UAE Team Emirates', 'Jiu-Jitsu Team'] },
  { category: 'Humanitarian Initiatives', count: 6, examples: ['Zayed Humanitarian Legacy', 'Mothers\' Endowment'] },
  { category: 'Financial Institutions', count: 4, examples: ['FAB', 'Emirates NBD', 'ADCB'] },
  { category: 'Defense Systems', count: 5, examples: ['THAAD', 'Patriot', 'Barak-8'] },
  { category: 'Legal Frameworks', count: 8, examples: ['Decision No. 9 of 2024', 'Cybercrime Law'] },
  { category: 'Infrastructure Projects', count: 12, examples: ['Burj Azizi', 'Dubai Metro Blue Line'] },
  { category: 'Events/Tragedies', count: 18, examples: ['UAE Floods', 'National Day celebrations'] },
]

// ============================================================================
// EMOTION OVERVIEW DATA
// ============================================================================

export interface EmotionOverview {
  emotion: string
  icon: string
  color: string
  primaryQueries: number
  avgSentiment: number
  keyThemes: string[]
}

export const emotionOverview: EmotionOverview[] = [
  { emotion: 'Joy', icon: 'Smile', color: 'gold', primaryQueries: 6, avgSentiment: 0.72, keyThemes: ['National Day celebrations', 'pride', 'achievements', 'victories', 'beauty'] },
  { emotion: 'Trust', icon: 'Heart', color: 'navy', primaryQueries: 4, avgSentiment: 0.58, keyThemes: ['Government trust', 'safe banking', 'institutional trust', 'transparency'] },
  { emotion: 'Fear', icon: 'AlertTriangle', color: 'rose', primaryQueries: 9, avgSentiment: -0.81, keyThemes: ['Job loss', 'rent/eviction', 'visa deportation', 'war', 'crime', 'debt', 'health', 'speaking out'] },
  { emotion: 'Surprise', icon: 'AlertCircle', color: 'platinum', primaryQueries: 3, avgSentiment: -0.12, keyThemes: ['Unexpected weather events', 'policy changes'] },
  { emotion: 'Sadness', icon: 'Frown', color: 'info', primaryQueries: 5, avgSentiment: -0.67, keyThemes: ['Tragic deaths', 'departures', 'cultural loss', 'loneliness'] },
  { emotion: 'Disgust', icon: 'Feather', color: 'emerald', primaryQueries: 1, avgSentiment: -0.54, keyThemes: ['Corruption', 'nepotism', 'wasta'] },
  { emotion: 'Anger', icon: 'Angry', color: 'rose', primaryQueries: 8, avgSentiment: -0.73, keyThemes: ['Rent greed', 'salary cuts', 'discrimination', 'bureaucracy', 'traffic', 'censorship'] },
  { emotion: 'Anticipation', icon: 'Clock', color: 'gold', primaryQueries: 5, avgSentiment: 0.45, keyThemes: ['Excitement', 'upcoming events', 'future optimism'] },
]

// ============================================================================
// DATA COLLECTION METADATA
// ============================================================================

export const emotionDataCollectionMetadata = {
  methodology: [
    'Primary Research: mmx web search executed for all 49 atomic query patterns',
    'Secondary Research: WebFetch for detailed content extraction from high-priority sources',
    'Source Verification: All findings cross-referenced with official sources where available',
    'Temporal Coverage: Primarily 2024-2026 to capture current sentiment and trends',
    'Language Coverage: English and Arabic search terms utilized',
  ],
  limitations: [
    'Arabic Query Coverage: Limited Arabic-language source verification due to search constraints',
    'Real-time Sentiment: No live social media monitoring capability',
    'Geographic Disaggregation: Most data aggregates UAE as whole; emirate-level differences not fully captured',
    'Causality: Correlation between queries and underlying emotions not definitively established',
    'Sample Bias: Online sources may over-represent certain demographics and viewpoints',
  ],
  queryMappingToPlutchik: [
    { plutchikEmotion: 'Joy', uaeContextualization: 'Celebration, Achievement, Pride', sampleQueryTerms: 'National Day, fireworks, pride, achievement' },
    { plutchikEmotion: 'Trust', uaeContextualization: 'Government, Institutions, Safety', sampleQueryTerms: 'Government trust, banking safety, rule of law' },
    { plutchikEmotion: 'Fear', uaeContextualization: 'Economic, Physical, Social', sampleQueryTerms: 'Job loss, war, crime, speaking out' },
    { plutchikEmotion: 'Surprise', uaeContextualization: 'Unexpected Events, Policy Shifts', sampleQueryTerms: 'Weather events, sudden announcements' },
    { plutchikEmotion: 'Sadness', uaeContextualization: 'Loss, Nostalgia, Tragedy', sampleQueryTerms: 'Death, departure, cultural loss' },
    { plutchikEmotion: 'Disgust', uaeContextualization: 'Moral Outrage, Inequality', sampleQueryTerms: 'Corruption, exploitation, hypocrisy' },
    { plutchikEmotion: 'Anger', uaeContextualization: 'Economic, Political, Social Injustice', sampleQueryTerms: 'Rent greed, salary cuts, censorship' },
    { plutchikEmotion: 'Anticipation', uaeContextualization: 'Events, Future, Hope', sampleQueryTerms: 'Expo, National Day, future projects' },
  ],
}
