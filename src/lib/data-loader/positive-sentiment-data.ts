/**
 * Positive Sentiment Research Data (9-1)
 *
 * Data extracted from MD file 9-1-positive-sentiment-results.md
 * UAE National Digital Intelligence Platform — Positive Sentiment Coverage
 * Comprehensive SSOT from 14 atomic queries and 14 WebFetch retrievals (12 successful)
 */

import type {
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  UAERelevance,
  CredibilityScore,
  TrendData,
} from './types'

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface PositiveSentimentOverview {
  totalQueries: number
  totalUrlsFetched: number
  successfulRetrievals: number
  retrievalRate: number
  enrichmentLevel: string
  lastUpdated: string
}

export const positiveSentimentOverview: PositiveSentimentOverview = {
  totalQueries: 14,
  totalUrlsFetched: 14,
  successfulRetrievals: 12,
  retrievalRate: 85.7,
  enrichmentLevel: 'Comprehensive SSOT',
  lastUpdated: '2026-04-28',
}

export interface KeyQuantitativeHighlights {
  nationalities: number
  safetyIndex: number
  humanitarianAid2025: number
  humanitarianAidFormatted: string
  globalRank: number
  shareOfGlobalAid: number
  entrepreneurshipRanking: number
  consecutiveYears: number
  imdTalentRanking: number
  dubaiSmartCityRanking: number
  globalAchievementCategories: number
  aiGovernmentTarget: number
}

export const keyQuantitativeHighlights: KeyQuantitativeHighlights = {
  nationalities: 200,
  safetyIndex: 86.0,
  humanitarianAid2025: 1460000000,
  humanitarianAidFormatted: '$1.46 Billion',
  globalRank: 3,
  shareOfGlobalAid: 7.2,
  entrepreneurshipRanking: 1,
  consecutiveYears: 5,
  imdTalentRanking: 9,
  dubaiSmartCityRanking: 4,
  globalAchievementCategories: 220,
  aiGovernmentTarget: 2027,
}

// ============================================================================
// SAFETY & SECURITY KPI DATA (1.1)
// ============================================================================

export interface SafetyKPIData {
  numbeoSafetyIndex2026: {
    uaeScore: number
    uaeRank: number
    uaeStatus: string
    japanScore: number
    japanRank: number
    ukScore: number
    usScore: number
    source: string
    sourceUrl: string
    credibility: TierLevel
  }
  abuDhabiSafetyStreak: {
    years: number
    rank: number
    city: string
    status: string
    source: string
    credibility: TierLevel
  }
  perceptionOfSecurity2025: {
    score: number
    max: number
    source: string
    credibility: TierLevel
  }
  fragileStatesIndex2024: {
    uaeRank: number
    totalCountries: number
    interpretation: string
    source: string
    credibility: TierLevel
  }
}

export const safetyKPIData: SafetyKPIData = {
  numbeoSafetyIndex2026: {
    uaeScore: 86.0,
    uaeRank: 1,
    uaeStatus: 'safest_country',
    japanScore: 77.4,
    japanRank: 9,
    ukScore: 51.7,
    usScore: 50.8,
    source: 'Numbeo Safety Index 2026',
    sourceUrl: 'https://www.emirates247.com/t20-world-cup-2011/sanya-nayeem/2020/04/01/uae-ranked-safest-country-in-2026-why-residents-feel-secure',
    credibility: 3 as TierLevel,
  },
  abuDhabiSafetyStreak: {
    years: 9,
    rank: 1,
    city: 'Abu Dhabi',
    status: 'worlds_safest_city',
    source: 'Timeout Dubai',
    credibility: 2 as TierLevel,
  },
  perceptionOfSecurity2025: {
    score: 94.8,
    max: 100,
    source: 'Numbeo',
    credibility: 3 as TierLevel,
  },
  fragileStatesIndex2024: {
    uaeRank: 156,
    totalCountries: 179,
    interpretation: 'lower_is_more_stable',
    source: 'PSIRU',
    credibility: 2 as TierLevel,
  },
}

export const safetyMetrics = {
  sentiment: {
    positive: 95,
    negative: 2,
    neutral: 3,
    overall: 0.95,
    volume: 245000,
  } as SentimentBreakdown,
  trend: {
    direction: 'rising' as const,
    changePercent: 4.2,
    period: '2025-2026',
    value: 86.0,
  } as TrendData,
  uaeRelevance: {
    score: 98,
    level: 'critical' as const,
    justification: 'Central to UAE tourism/investment brand',
  } as UAERelevance,
  credibility: {
    tier: 2 as TierLevel,
    score: 94,
    sources: 8,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// HUMANITARIAN AID KPI DATA (1.2)
// ============================================================================

export interface HumanitarianAidKPIData {
  humanitarianAid2025: {
    amountUsd: number
    amountFormatted: string
    globalRank: number
    shareOfGlobalAidPercent: number
    totalGlobalAidUsd: number
    source: string
    sourceUrl: string
    credibility: TierLevel
  }
  cumulativeAidSince1971: {
    amountAed: number
    amountFormatted: string
    livesImpacted: number
    countriesReached: number
    source: string
    credibility: TierLevel
  }
  polioEradication: {
    totalDonationsUsd: number
    totalDonationsAed: number
    sinceYear: number
    source: string
    credibility: TierLevel
  }
  ukraineAid: {
    amountUsd: number
    amountFormatted: string
    source: string
    credibility: TierLevel
  }
}

export const humanitarianAidKPIData: HumanitarianAidKPIData = {
  humanitarianAid2025: {
    amountUsd: 1460000000,
    amountFormatted: '$1.46 Billion',
    globalRank: 3,
    shareOfGlobalAidPercent: 7.2,
    totalGlobalAidUsd: 20280000000,
    source: 'WAM/UNOCHA',
    sourceUrl: 'https://www.wam.ae/en/article/bmt9o8i-uae-ranks-third-globally-for-humanitarian-aid-2025',
    credibility: 1 as TierLevel,
  },
  cumulativeAidSince1971: {
    amountAed: 360000000000,
    amountFormatted: 'Dh360 Billion',
    livesImpacted: 1000000000,
    countriesReached: 206,
    source: 'Gulf News',
    credibility: 2 as TierLevel,
  },
  polioEradication: {
    totalDonationsUsd: 327000000,
    totalDonationsAed: 911400000,
    sinceYear: 2011,
    source: 'UAE Embassy',
    credibility: 1 as TierLevel,
  },
  ukraineAid: {
    amountUsd: 100000000,
    amountFormatted: '$100 Million',
    source: 'UAE Embassy',
    credibility: 1 as TierLevel,
  },
}

export const humanitarianMetrics = {
  sentiment: {
    positive: 92,
    negative: 3,
    neutral: 5,
    overall: 0.92,
    volume: 156000,
  } as SentimentBreakdown,
  trend: {
    direction: 'stable' as const,
    changePercent: 1.5,
    period: '2025',
    value: 1460000000,
  } as TrendData,
  uaeRelevance: {
    score: 96,
    level: 'critical' as const,
    justification: 'Defines UAE global humanitarian leadership',
  } as UAERelevance,
  credibility: {
    tier: 1 as TierLevel,
    score: 96,
    sources: 6,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// INNOVATION & TECHNOLOGY KPI DATA (1.3)
// ============================================================================

export interface InnovationKPIData {
  globalInnovationIndex: {
    uaeRankArab: number
    uaeRankMiddleEast: number
    year: number
    source: string
    credibility: TierLevel
  }
  inseadRanking: {
    uaeRank: number
    category: string
    source: string
    credibility: TierLevel
  }
  aiGovernmentTarget: {
    targetYear: number
    description: string
    strategy: string
    source: string
    credibility: TierLevel
  }
  innovationInvestment: {
    initiativesCount: number
    budgetAed: number
    budgetFormatted: string
    scope: string
    source: string
    credibility: TierLevel
  }
  creativeEconomyTarget: {
    nationalGdpTargetPercent: number
    targetYear: number
    dubaiGdpCurrentPercent: number
    dubaiGdpTargetPercent: number
    dubaiTargetYear: number
    source: string
    credibility: TierLevel
  }
}

export const innovationKPIData: InnovationKPIData = {
  globalInnovationIndex: {
    uaeRankArab: 1,
    uaeRankMiddleEast: 1,
    year: 2022,
    source: 'Global Innovation Index',
    credibility: 1 as TierLevel,
  },
  inseadRanking: {
    uaeRank: 1,
    category: 'most_innovative_country_middle_east',
    source: 'INSEAD',
    credibility: 2 as TierLevel,
  },
  aiGovernmentTarget: {
    targetYear: 2027,
    description: 'worlds_first_fully_ai_powered_government',
    strategy: 'UAE Digital Government Strategy 2025-2027',
    source: 'Gulf News/WAM',
    credibility: 1 as TierLevel,
  },
  innovationInvestment: {
    initiativesCount: 100,
    budgetAed: 300000000000,
    budgetFormatted: 'AED 300+ Billion',
    scope: 'Science, Technology, Innovation',
    source: 'u.ae',
    credibility: 1 as TierLevel,
  },
  creativeEconomyTarget: {
    nationalGdpTargetPercent: 5,
    targetYear: 2031,
    dubaiGdpCurrentPercent: 2.6,
    dubaiGdpTargetPercent: 5,
    dubaiTargetYear: 2025,
    source: 'u.ae',
    credibility: 1 as TierLevel,
  },
}

export const innovationMetrics = {
  sentiment: {
    positive: 90,
    negative: 5,
    neutral: 5,
    overall: 0.90,
    volume: 189000,
  } as SentimentBreakdown,
  trend: {
    direction: 'rising' as const,
    changePercent: 8.5,
    period: '2025-2026',
    value: 90,
  } as TrendData,
  uaeRelevance: {
    score: 97,
    level: 'critical' as const,
    justification: 'Core to UAE future vision and global positioning',
  } as UAERelevance,
  credibility: {
    tier: 1 as TierLevel,
    score: 94,
    sources: 10,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// ECONOMIC & TALENT KPI DATA (1.4)
// ============================================================================

export interface EconomicKPIData {
  entrepreneurshipRanking: {
    uaeRank: number
    globalRank: number
    consecutiveYears: number
    source: string
    credibility: TierLevel
  }
  imdTalentRanking2025: {
    uaeRank: number
    note: string
    source: string
    credibility: TierLevel
  }
  dubaiSmartCity: {
    globalRank: number
    asiaRank: number
    note: string
    source: string
    credibility: TierLevel
  }
  dubaiDemographics: {
    population: number
    populationYear: number
    expatriatePercent: number
    nationalitiesCount: number
    oilGdpPercent: number
    gdpGrowth2023: number
    gdpGrowth2024Expected: number
    propertySales2023Aed: number
    propertySales2023Formatted: string
    visitors2025Expected: number
    source: string
    credibility: TierLevel
  }
  globalRankings: {
    achievementCategories: number
    description: string
    source: string
    credibility: TierLevel
  }
}

export const economicKPIData: EconomicKPIData = {
  entrepreneurshipRanking: {
    uaeRank: 1,
    globalRank: 1,
    consecutiveYears: 5,
    source: 'LinkedIn/dxbinteract',
    credibility: 2 as TierLevel,
  },
  imdTalentRanking2025: {
    uaeRank: 9,
    note: 'historic_leap_fastest_rise_ever',
    source: 'IMD',
    credibility: 2 as TierLevel,
  },
  dubaiSmartCity: {
    globalRank: 4,
    asiaRank: 1,
    note: 'up_8_places',
    source: 'IMD Smart City Index',
    credibility: 2 as TierLevel,
  },
  dubaiDemographics: {
    population: 4000000,
    populationYear: 2025,
    expatriatePercent: 80,
    nationalitiesCount: 200,
    oilGdpPercent: 5,
    gdpGrowth2023: 3.3,
    gdpGrowth2024Expected: 3.5,
    propertySales2023Aed: 370000000000,
    propertySales2023Formatted: 'Dh370 Billion',
    visitors2025Expected: 5000000,
    source: 'LinkedIn',
    credibility: 2 as TierLevel,
  },
  globalRankings: {
    achievementCategories: 220,
    description: 'uae_named_best_in_world',
    source: 'dxbinteract',
    credibility: 2 as TierLevel,
  },
}

export const economicMetrics = {
  sentiment: {
    positive: 89,
    negative: 4,
    neutral: 7,
    overall: 0.89,
    volume: 234000,
  } as SentimentBreakdown,
  trend: {
    direction: 'rising' as const,
    changePercent: 6.8,
    period: '2025-2026',
    value: 89,
  } as TrendData,
  uaeRelevance: {
    score: 99,
    level: 'critical' as const,
    justification: 'Core economic indicators show strong growth trajectory',
  } as UAERelevance,
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 12,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// DEMOGRAPHICS & DIVERSITY KPI DATA (1.5)
// ============================================================================

export interface DemographicsKPIData {
  uaeNationalities: {
    count: number
    note: string
    source: string
    credibility: TierLevel
  }
  dubaiExpatriateComposition: {
    expatriatePercent: number
    totalPopulation: number
    source: string
    credibility: TierLevel
  }
  realEstateBuyers2025: {
    top5: Array<{ rank: number; nationality: string; sharePercent: number }>
    source: string
    credibility: TierLevel
  }
}

export const demographicsKPIData: DemographicsKPIData = {
  uaeNationalities: {
    count: 200,
    note: 'often_quoted_as_204',
    source: 'Multiple',
    credibility: 1 as TierLevel,
  },
  dubaiExpatriateComposition: {
    expatriatePercent: 80,
    totalPopulation: 4000000,
    source: 'LinkedIn',
    credibility: 2 as TierLevel,
  },
  realEstateBuyers2025: {
    top5: [
      { rank: 1, nationality: 'India', sharePercent: 22 },
      { rank: 2, nationality: 'United Kingdom', sharePercent: 17 },
      { rank: 3, nationality: 'China', sharePercent: 14 },
      { rank: 4, nationality: 'Saudi Arabia', sharePercent: 11 },
      { rank: 5, nationality: 'Russia', sharePercent: 9 },
    ],
    source: 'LinkedIn',
    credibility: 2 as TierLevel,
  },
}

export const demographicsMetrics = {
  sentiment: {
    positive: 85,
    negative: 5,
    neutral: 10,
    overall: 0.85,
    volume: 98000,
  } as SentimentBreakdown,
  trend: {
    direction: 'stable' as const,
    changePercent: 2.1,
    period: '2025-2026',
    value: 85,
  } as TrendData,
  uaeRelevance: {
    score: 94,
    level: 'critical' as const,
    justification: 'Core national identity and economic model',
  } as UAERelevance,
  credibility: {
    tier: 1 as TierLevel,
    score: 90,
    sources: 8,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// LEADERSHIP ACHIEVEMENT KPI DATA (1.6)
// ============================================================================

export interface LeadershipKPIData {
  ghadan21: {
    budgetAed: number
    budgetFormatted: string
    yearLaunched: number
    description: string
    source: string
    credibility: TierLevel
  }
  masdar: {
    investmentUsd: number
    investmentFormatted: string
    year: number
    focus: string
    source: string
    credibility: TierLevel
  }
  netZeroTarget: {
    targetYear: number
    announcedYear: number
    source: string
    credibility: TierLevel
  }
  barakahNuclear: {
    description: string
    source: string
    credibility: TierLevel
  }
}

export const leadershipKPIData: LeadershipKPIData = {
  ghadan21: {
    budgetAed: 50000000000,
    budgetFormatted: 'AED 50 Billion',
    yearLaunched: 2018,
    description: 'accelerator_programme',
    source: 'MBZ Official/u.ae',
    credibility: 1 as TierLevel,
  },
  masdar: {
    investmentUsd: 15000000000,
    investmentFormatted: '$15 Billion',
    year: 2008,
    focus: 'renewable_energy',
    source: 'MBZ Official',
    credibility: 1 as TierLevel,
  },
  netZeroTarget: {
    targetYear: 2050,
    announcedYear: 2021,
    source: 'u.ae',
    credibility: 1 as TierLevel,
  },
  barakahNuclear: {
    description: 'first_nuclear_plant_in_arab_world',
    source: 'u.ae',
    credibility: 1 as TierLevel,
  },
}

export const leadershipMetrics = {
  sentiment: {
    positive: 87,
    negative: 4,
    neutral: 9,
    overall: 0.87,
    volume: 145000,
  } as SentimentBreakdown,
  trend: {
    direction: 'stable' as const,
    changePercent: 1.8,
    period: '2025-2026',
    value: 87,
  } as TrendData,
  uaeRelevance: {
    score: 95,
    level: 'critical' as const,
    justification: 'Visionary, people-first leadership celebrated',
  } as UAERelevance,
  credibility: {
    tier: 1 as TierLevel,
    score: 94,
    sources: 6,
    lastVerified: '2026-04-28',
  } as CredibilityScore,
  alertLevel: 'GREEN' as AlertLevel,
}

// ============================================================================
// TOPIC-LEVEL SENTIMENT MATRIX (3.1)
// ============================================================================

export interface TopicSentimentEntry {
  topic: string
  score: number
  type: string
  narrative: string
  confidence: string
}

export const topicSentimentMatrix: TopicSentimentEntry[] = [
  { topic: 'Safety/Peace', score: 0.95, type: 'Overwhelmingly Positive', narrative: 'UAE as safest haven globally', confidence: 'Very High' },
  { topic: 'Humanitarian/Generosity', score: 0.92, type: 'Extremely Positive', narrative: 'Global leader in charitable giving', confidence: 'Very High' },
  { topic: 'Innovation/Progress', score: 0.90, type: 'Strongly Positive', narrative: 'From follower to technology leader', confidence: 'High' },
  { topic: 'Excellence/Achievement', score: 0.89, type: 'Strongly Positive', narrative: '220+ world-best rankings', confidence: 'High' },
  { topic: 'Love/Pride', score: 0.88, type: 'Strongly Positive', narrative: 'Institutionalized national sentiment', confidence: 'High' },
  { topic: 'Leadership/Vision', score: 0.87, type: 'Strongly Positive', narrative: 'Visionary, people-first leadership', confidence: 'High' },
  { topic: 'Diversity/Inclusion', score: 0.85, type: 'Strongly Positive', narrative: '200+ nationalities harmony', confidence: 'High' },
  { topic: 'Wonder/Awe', score: 0.83, type: 'Positive', narrative: '"50-year miracle" awe narrative', confidence: 'Medium-High' },
  { topic: 'Beauty/Environment', score: 0.82, type: 'Positive', narrative: 'Natural and architectural stunning', confidence: 'Medium-High' },
  { topic: 'Hospitality/Welcoming', score: 0.81, type: 'Positive', narrative: 'Cultural authenticity + openness', confidence: 'Medium-High' },
  { topic: 'Luxury/Premium', score: 0.78, type: 'Positive', narrative: 'World-class global destination', confidence: 'Medium' },
  { topic: 'Transformation/Development', score: 0.76, type: 'Positive', narrative: 'Desert to destiny narrative', confidence: 'Medium' },
  { topic: 'Recommendation/Must-Visit', score: 0.75, type: 'Positive', narrative: 'Safety-driven tourism appeal', confidence: 'Medium' },
]

// ============================================================================
// SOURCE-LEVEL SENTIMENT ANALYSIS (3.2)
// ============================================================================

export interface SourceSentimentEntry {
  source: string
  averageSentiment: number
  consistency: string
  keyTheme: string
}

export const sourceSentimentAnalysis: SourceSentimentEntry[] = [
  { source: 'Government Portals (u.ae, WAM)', averageSentiment: 0.92, consistency: 'Very Consistent', keyTheme: 'Achievement, leadership, humanitarian' },
  { source: 'Official Tourism (Visit Abu Dhabi)', averageSentiment: 0.88, consistency: 'Consistent', keyTheme: 'Hospitality, culture, welcome' },
  { source: 'News Outlets (Gulf News, Khaleej Times)', averageSentiment: 0.85, consistency: 'Consistent', keyTheme: 'Safety, achievements, rankings' },
  { source: 'LinkedIn/Professional', averageSentiment: 0.82, consistency: 'Moderately Consistent', keyTheme: 'Business, talent, diversity' },
  { source: 'Social Media (Instagram/Facebook)', averageSentiment: 0.78, consistency: 'Variable', keyTheme: 'Personal experiences, pride' },
  { source: 'Travel Platforms (Tripadvisor, Condé Nast)', averageSentiment: 0.80, consistency: 'Consistent', keyTheme: 'Luxury, attractions, safety' },
  { source: 'Research/Academic', averageSentiment: 0.84, consistency: 'Consistent', keyTheme: 'Innovation, transformation' },
]

// ============================================================================
// NARRATIVE THEME VALIDATION MATRIX (8.1)
// ============================================================================

export interface NarrativeThemeValidation {
  theme: string
  framing: string
  dataPoints: number
  sourceConsistency: string
}

export const narrativeThemeValidation: NarrativeThemeValidation[] = [
  { theme: 'Safety', framing: 'Safest country 2026 (86.0 index)', dataPoints: 5, sourceConsistency: 'Very High' },
  { theme: 'Diversity', framing: '200+ nationalities', dataPoints: 8, sourceConsistency: 'High' },
  { theme: 'Leadership', framing: 'Visionary governance (MBZ)', dataPoints: 6, sourceConsistency: 'Very High' },
  { theme: 'Hospitality', framing: 'Emiratis love to invite people', dataPoints: 4, sourceConsistency: 'High' },
  { theme: 'Humanitarian', framing: '$1.46B, 3rd largest donor', dataPoints: 4, sourceConsistency: 'Very High' },
  { theme: 'Achievement', framing: 'First Arab/Muslim Mars', dataPoints: 3, sourceConsistency: 'High' },
  { theme: 'Beauty', framing: 'Most beautiful Middle East', dataPoints: 4, sourceConsistency: 'Medium-High' },
  { theme: 'Luxury', framing: 'World-class 7-star', dataPoints: 5, sourceConsistency: 'High' },
  { theme: 'Innovation', framing: 'AI government 2027', dataPoints: 5, sourceConsistency: 'Very High' },
  { theme: 'Transformation', framing: '50-year miracle', dataPoints: 4, sourceConsistency: 'High' },
]

// ============================================================================
// EXPERT QUOTES REPOSITORY (8.2)
// ============================================================================

export interface ExpertQuote {
  quote: string
  author: string
  affiliation: string
  topic: string
}

export const expertQuotes: ExpertQuote[] = [
  { quote: 'The current conflict… this is where the difference between stability and resilience becomes clear. Stability is how a country appears in normal times. Resilience is how it performs under real pressure.', author: 'Dr. Salma Thani', affiliation: 'American University of Sharjah', topic: 'Safety/Resilience' },
  { quote: 'The UAE is being tested in real time, and it is showing that its stability is not superficial.', author: 'Dr. Salma Thani', affiliation: 'American University of Sharjah', topic: 'Safety/Resilience' },
  { quote: 'Security for the UAE has never been only about defence. It has also been about preserving trade, social order, livelihoods, and stability.', author: 'Dr. Salma Thani', affiliation: 'American University of Sharjah', topic: 'Security' },
  { quote: 'It is not just about reacting to danger. It is about preparing for shocks, containing them, and ensuring that society continues to function with confidence.', author: 'Dr. Salma Thani', affiliation: 'American University of Sharjah', topic: 'Security' },
  { quote: 'The UAE does not approach security as a temporary emergency file, but as part of the wider project of state stability and national resilience.', author: 'Dr. Salma Thani', affiliation: 'American University of Sharjah', topic: 'Security' },
  { quote: 'I feel safe living in the UAE right now. Despite everything happening globally, daily life continues smoothly here.', author: 'Shoaib Siddiqui', affiliation: 'Indian project manager, Dubai', topic: 'Safety' },
  { quote: 'The UAE\'s humanitarian mission serves people in need regardless of origin, race, religion, belief, or geography.', author: 'Sheikh Theyab bin Mohamed bin Zayed Al Nahyan', affiliation: 'Chairman', topic: 'Humanitarian' },
  { quote: 'A true leader has the courage to be open with his people and care for others as family.', author: 'Sheikh Mohamed bin Zayed Al Nahyan', affiliation: 'President of UAE', topic: 'Leadership' },
  { quote: 'True leadership lies in empowering men and women to forge their own paths and shape the future of the nation.', author: 'Sheikh Mohamed bin Zayed Al Nahyan', affiliation: 'President of UAE', topic: 'Leadership' },
  { quote: 'Having encountered travellers in the desert over generations, the friendly people of Abu Dhabi know how to make visitors feel welcome.', author: 'Visit Abu Dhabi', affiliation: 'Official Tourism', topic: 'Hospitality' },
]

// ============================================================================
// ENTITY REGISTRY - GOVERNMENT ENTITIES (2.1)
// ============================================================================

export interface GovernmentEntityPositive {
  entity: string
  type: string
  mandate: string
  credibility: TierLevel
}

export const governmentEntitiesPositive: GovernmentEntityPositive[] = [
  { entity: 'UAE Federal Government', type: 'Governing Body', mandate: 'National administration', credibility: 1 as TierLevel },
  { entity: 'Abu Dhabi Executive Council', type: 'Provincial Government', mandate: 'Abu Dhabi governance', credibility: 1 as TierLevel },
  { entity: 'UAE Armed Forces', type: 'Military', mandate: 'Defense and security', credibility: 1 as TierLevel },
  { entity: 'Mubadala Development Company', type: 'Sovereign Wealth Fund', mandate: 'Economic diversification', credibility: 1 as TierLevel },
  { entity: 'Masdar City', type: 'Innovation Hub', mandate: 'Renewable energy research', credibility: 1 as TierLevel },
  { entity: 'Mohamed bin Zayed University of AI', type: 'Academic', mandate: 'AI research and education', credibility: 1 as TierLevel },
  { entity: 'Emirates Red Crescent', type: 'Humanitarian', mandate: 'Disaster response/aid', credibility: 1 as TierLevel },
]

// ============================================================================
// KEY LEADERSHIP FIGURES (2.2)
// ============================================================================

export interface LeadershipFigure {
  name: string
  title: string
  context: string
  tenure: string
  credibility: TierLevel
}

export const leadershipFigures: LeadershipFigure[] = [
  { name: 'Sheikh Mohamed bin Zayed Al Nahyan', title: 'President of UAE', context: 'Current President, elected May 14, 2022', tenure: '2022-present', credibility: 1 as TierLevel },
  { name: 'Sheikh Mohammed bin Rashid Al Maktoum', title: 'VP/PM/Dubai Ruler', context: 'Visionary leadership celebrated', tenure: '20+ years', credibility: 1 as TierLevel },
  { name: 'Sheikh Zayed bin Sultan Al Nahyan', title: 'Founding Father', context: 'First President (1971-2004)', tenure: 'Founding-2004', credibility: 1 as TierLevel },
]

// ============================================================================
// MAJOR EXPATRIATE COMMUNITIES (2.3)
// ============================================================================

export interface ExpatriateCommunity {
  community: string
  population: string
  sectors: string
  organized: string
}

export const expatriateCommunities: ExpatriateCommunity[] = [
  { community: 'Indian', population: 'Largest expat group', sectors: 'Business, healthcare, IT, retail, construction', organized: 'Yes - Indian diaspora' },
  { community: 'Pakistani', population: 'Large expat group', sectors: 'Trade, transport, services, entrepreneurship', organized: 'Yes' },
  { community: 'Bangladeshi', population: 'Significant', sectors: 'Construction, logistics, services', organized: 'Partial' },
  { community: 'Filipino', population: 'Significant', sectors: 'Healthcare, aviation, hospitality, customer service', organized: 'Yes' },
  { community: 'Egyptian', population: 'Major Arab expat', sectors: 'Business, professional services', organized: 'Yes' },
  { community: 'Lebanese', population: 'Major Arab expat', sectors: 'Business, retail, hospitality', organized: 'Yes' },
  { community: 'British', population: 'Significant', sectors: 'Finance, consulting, education, leadership', organized: 'Yes' },
  { community: 'Chinese', population: 'Growing', sectors: 'Trade, technology, global business', organized: 'Growing' },
  { community: 'American', population: 'Significant', sectors: 'Finance, consulting, education', organized: 'Yes' },
]

// ============================================================================
// TOURISM & HOSPITALITY ENTITIES (2.4)
// ============================================================================

export interface TourismEntity {
  entity: string
  type: string
  feature: string
  credibility: TierLevel
}

export const tourismEntities: TourismEntity[] = [
  { entity: 'Emirates Palace', type: 'Luxury Hotel', feature: '7-star, iconic', credibility: 2 as TierLevel },
  { entity: 'Burj Al Arab', type: 'Luxury Hotel', feature: '7-star, global icon', credibility: 2 as TierLevel },
  { entity: 'Atlantis The Palm', type: 'Resort', feature: 'Top-ranked resort', credibility: 2 as TierLevel },
  { entity: 'Atlantis The Royal', type: 'Resort', feature: 'New ultra-luxury', credibility: 2 as TierLevel },
  { entity: 'Jumeirah Group', type: 'Hotel Chain', feature: 'Dubai-based luxury', credibility: 2 as TierLevel },
]

// ============================================================================
// KEY EXPERT QUOTES
// ============================================================================

export const keyQuotes = {
  resilience: 'The current conflict… this is where the difference between stability and resilience becomes clear. Stability is how a country appears in normal times. Resilience is how it performs under real pressure.',
  stability: 'The UAE is being tested in real time, and it is showing that its stability is not superficial.',
  security: 'Security for the UAE has never been only about defence. It has also been about preserving trade, social order, livelihoods, and stability.',
  shockPreparedness: 'It is not just about reacting to danger. It is about preparing for shocks, containing them, and ensuring that society continues to function with confidence.',
  securityApproach: 'The UAE does not approach security as a temporary emergency file, but as part of the wider project of state stability and national resilience.',
  safetyFeeling: 'I feel safe living in the UAE right now. Despite everything happening globally, daily life continues smoothly here.',
  humanitarianMission: 'The UAE\'s humanitarian mission serves people in need regardless of origin, race, religion, belief, or geography.',
  trueLeadership: 'A true leader has the courage to be open with his people and care for others as family.',
  empoweringYouth: 'True leadership lies in empowering men and women to forge their own paths and shape the future of the nation.',
  arabianHospitality: 'Having encountered travellers in the desert over generations, the friendly people of Abu Dhabi know how to make visitors feel welcome.',
}

// ============================================================================
// POSITIVE DRIVERS FOR DASHBOARD
// ============================================================================

export interface PositiveDriver {
  driver: string
  impact: number
  icon: string
}

export const positiveDrivers: PositiveDriver[] = [
  { driver: 'Economic Growth', impact: 92, icon: 'TrendingUp' },
  { driver: 'Vision 2030 Progress', impact: 88, icon: 'Star' },
  { driver: 'Innovation Leadership', impact: 85, icon: 'Sparkles' },
  { driver: 'Infrastructure Development', impact: 82, icon: 'Award' },
  { driver: 'Cultural Initiatives', impact: 78, icon: 'Heart' },
  { driver: 'Safety & Security', impact: 95, icon: 'Shield' },
  { driver: 'Humanitarian Leadership', impact: 90, icon: 'Globe' },
  { driver: 'Tourism & Hospitality', impact: 84, icon: 'Plane' },
]

// ============================================================================
// MONTHLY POSITIVE TREND DATA
// ============================================================================

export interface MonthlyPositiveTrendEntry {
  month: string
  positive: number
  growth: number
}

export const monthlyPositiveTrend: MonthlyPositiveTrendEntry[] = [
  { month: 'Jan', positive: 68, growth: 2.1 },
  { month: 'Feb', positive: 71, growth: 2.5 },
  { month: 'Mar', positive: 74, growth: 2.8 },
  { month: 'Apr', positive: 72, growth: 2.2 },
  { month: 'May', positive: 78, growth: 3.1 },
  { month: 'Jun', positive: 81, growth: 3.4 },
  { month: 'Jul', positive: 79, growth: 2.9 },
  { month: 'Aug', positive: 82, growth: 3.2 },
  { month: 'Sep', positive: 84, growth: 3.5 },
  { month: 'Oct', positive: 86, growth: 3.8 },
  { month: 'Nov', positive: 85, growth: 3.6 },
  { month: 'Dec', positive: 88, growth: 4.0 },
]

// ============================================================================
// KEY POSITIVE INDICATORS
// ============================================================================

export interface KeyPositiveIndicator {
  metric: string
  value: string
  change: string
  positive: boolean
}

export const keyPositiveIndicators: KeyPositiveIndicator[] = [
  { metric: 'AI Adoption', value: '85%', change: '+12%', positive: true },
  { metric: 'GDP Growth', value: '5.6%', change: '+2.2%', positive: true },
  { metric: 'FDI Inflows', value: '$45B', change: '+50%', positive: true },
  { metric: 'Tourism Growth', value: '+22%', change: '+8%', positive: true },
  { metric: 'Startup Ecosystem', value: '$2B', change: '+32%', positive: true },
  { metric: 'Renewable Capacity', value: '19.8GW', change: '+45%', positive: true },
  { metric: 'Safety Index', value: '86.0', change: '+4.2', positive: true },
  { metric: 'Humanitarian Aid', value: '$1.46B', change: '+7.2%', positive: true },
  { metric: 'Entrepreneurship Rank', value: '#1', change: '5th year', positive: true },
  { metric: 'Smart City Ranking', value: '#4', change: '+8', positive: true },
]

// ============================================================================
// YEAR-OVER-YEAR COMPARISON
// ============================================================================

export interface YearlyPositiveComparisonEntry {
  year: string
  positive: number
}

export const yearlyPositiveComparison: YearlyPositiveComparisonEntry[] = [
  { year: '2024', positive: 72 },
  { year: '2025', positive: 78 },
  { year: '2026', positive: 86 },
]

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface PositiveSourceCredibilityEntry {
  source: string
  tier: TierLevel
  type: string
  reliability: string
}

export const positiveSourceCredibilityMatrix: PositiveSourceCredibilityEntry[] = [
  { source: 'u.ae (Official UAE Portal)', tier: 1 as TierLevel, type: 'Government', reliability: 'Very High' },
  { source: 'WAM (Emirates News Agency)', tier: 1 as TierLevel, type: 'Government News', reliability: 'Very High' },
  { source: 'UNOCHA / UN FTS', tier: 1 as TierLevel, type: 'International Organization', reliability: 'Very High' },
  { source: 'Numbeo Safety Index', tier: 3 as TierLevel, type: 'Aggregated User Data', reliability: 'High' },
  { source: 'IMD World Rankings', tier: 2 as TierLevel, type: 'Research Institution', reliability: 'High' },
  { source: 'Gulf News', tier: 2 as TierLevel, type: 'Established Media', reliability: 'High' },
  { source: 'Visit Abu Dhabi (Official Tourism)', tier: 1 as TierLevel, type: 'Government Tourism', reliability: 'Very High' },
  { source: 'dxbinteract', tier: 2 as TierLevel, type: 'Dubai Media', reliability: 'High' },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface PositiveUAERelevanceEntry {
  dataPoint: string
  relevance: string
  rationale: string
}

export const positiveUAERelevanceAssessment: PositiveUAERelevanceEntry[] = [
  { dataPoint: 'Safety Index 86.0 (#1 worldwide)', relevance: 'Critical', rationale: 'Central to UAE tourism/investment brand' },
  { dataPoint: '$1.46B humanitarian aid (#3 globally)', relevance: 'Critical', rationale: 'Defines UAE global humanitarian leadership' },
  { dataPoint: '200+ nationalities diversity', relevance: 'Critical', rationale: 'Core national identity and economic model' },
  { dataPoint: '220+ "best in world" rankings', relevance: 'Critical', rationale: 'Fundamental achievement narrative' },
  { dataPoint: 'AI government by 2027', relevance: 'Critical', rationale: 'Core to UAE future vision' },
  { dataPoint: '9 consecutive years safest city (Abu Dhabi)', relevance: 'Critical', rationale: 'Key safety brand differentiator' },
  { dataPoint: '#1 entrepreneurship ranking (5 years)', relevance: 'High', rationale: 'Key business/investment message' },
  { dataPoint: 'IMD Talent Ranking #9 (fastest rise)', relevance: 'High', rationale: 'Human capital development proof' },
]

// ============================================================================
// SENTIMENT DATA FOR DASHBOARD
// ============================================================================

export interface PositiveSentimentMetric {
  title: string
  value: string
  previousValue?: string
  unit?: string
  trend?: 'up' | 'down' | 'stable'
  icon: string
  gradient: string
  status?: string
}

export const positiveSentimentMetrics: PositiveSentimentMetric[] = [
  { title: 'Avg Positive', value: '88%', icon: 'ThumbsUp', gradient: 'emerald', status: 'success' },
  { title: 'Peak Positive', value: '95%', icon: 'TrendingUp', gradient: 'gold' },
  { title: 'Positive Volume', value: '1.2M', icon: 'Heart', gradient: 'denim' },
  { title: 'Growth Rate', value: '+4.0%', icon: 'Sparkles', gradient: 'platinum' },
]

// ============================================================================
// CHART DATA
// ============================================================================

export const positiveSentimentDistributionData = [
  { name: 'Positive', value: 88, color: '#10b981' },
  { name: 'Neutral', value: 8, color: '#94a3b8' },
  { name: 'Negative', value: 4, color: '#ef4444' },
]

export const positiveTopicSentimentChartData = topicSentimentMatrix.map((t) => ({
  topic: t.topic.split('/')[0],
  score: Math.round(t.score * 100),
  type: t.type,
}))

// ============================================================================
// HOOK FOR DATA ACCESS
// ============================================================================

export function usePositiveSentimentData() {
  return {
    overview: positiveSentimentOverview,
    highlights: keyQuantitativeHighlights,
    safetyKPIData,
    humanitarianAidKPIData,
    innovationKPIData,
    economicKPIData,
    demographicsKPIData,
    leadershipKPIData,
    safetyMetrics,
    humanitarianMetrics,
    innovationMetrics,
    economicMetrics,
    demographicsMetrics,
    leadershipMetrics,
    topicSentimentMatrix,
    sourceSentimentAnalysis,
    narrativeThemeValidation,
    expertQuotes,
    governmentEntitiesPositive,
    leadershipFigures,
    expatriateCommunities,
    tourismEntities,
    positiveDrivers,
    monthlyPositiveTrend,
    keyPositiveIndicators,
    yearlyPositiveComparison,
    positiveSourceCredibilityMatrix,
    positiveUAERelevanceAssessment,
    metrics: positiveSentimentMetrics,
    sentimentDistribution: positiveSentimentDistributionData,
    topicSentimentChartData: positiveTopicSentimentChartData,
    keyQuotes,
  }
}

// ============================================================================
// METADATA
// ============================================================================

export const positiveSentimentDataMeta = {
  totalKPICategories: 6,
  totalDataPoints: 150,
  totalQuotes: 10,
  totalEntities: 31,
  lastUpdated: '2026-04-28',
  dataSource: '9-1-positive-sentiment-results.md',
  enrichmentDate: '2026-04-28',
}
