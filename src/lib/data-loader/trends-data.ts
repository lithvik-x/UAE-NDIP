import type {
  TrendAnalysis,
  TrendCategory,
  TrendForecast,
  GenerationMetrics,
  RegulatoryTrend,
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  UAERelevance,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  TrendData,
} from './types'

// ============================================================================
// AI TECHNOLOGY TRENDS (10-1)
// ============================================================================

export const aiTechnologyData: TrendAnalysis = {
  id: 'trend-10-1',
  category: 'ai-technology',
  name: 'AI Technology Adoption',
  description: 'The UAE has established itself as a global leader in AI adoption, being the first country to appoint a Minister of AI (2017) and issuing the world\'s first national AI strategy. The 2024 UAE Charter for AI with 12 principles and the 2025 AI-powered regulatory intelligence ecosystem represent groundbreaking achievements.',
  adoptionRate: 79,
  uaeAdoptionRate: 85,
  generationalBreakdown: {
    genZ: 82,
    millennial: 88,
    genX: 65,
    boomer: 42,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'UAE AI Charter (12 principles), AI Ethics Guidelines, DIFC AI Governance Regulation',
    effectiveDate: '2024-01-01',
  },
  sentiment: {
    positive: 72,
    negative: 12,
    neutral: 16,
    overall: 0.72,
    volume: 125000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.85,
      timeline: '2026-2027',
      indicators: ['50% government operations using agentic AI', 'AI market reaching $46.33B by 2030', 'MGX assets $100B target'],
    },
    {
      scenario: 'baseline',
      probability: 0.70,
      timeline: '2027-2028',
      indicators: ['AI market $46.33B by 2030', '91,000 technical specialists needed', 'AI contributing 19% to GDP'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.30,
      timeline: '2028-2030',
      indicators: ['Global AI talent shortage', 'Regulatory gaps in enforcement', 'Data privacy concerns'],
    },
  ],
  keyDrivers: [
    'G42 Microsoft $1.5B partnership and ecosystem valuation $20B+',
    'UAE Strategy for AI 2031 with AED 1 billion investment',
    '50% of government operations targeted for agentic AI (2026)',
    'Mandatory federal employee AI training',
    'Stargate UAE $7.9 billion hyperscaler investment (2026-2029)',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 12,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical' as const,
    justification: 'UAE leads globally in AI hiring growth (48%) and has ambitious targets for government AI adoption',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'UAE AI Office', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Microsoft News', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Stanford HAI', tier: 2 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// AI TECHNOLOGY EXTENDED DATA (10-1) - ENRICHED SSOT
// ============================================================================

export interface AITechnologyExtendedData {
  executionMetadata: { researchDate: string; sourceFile: string; atomicQueries: number; enrichmentDate: string; ssotStatus: string }
  summaryKPIs: Array<{ kpi: string; value: string; trend: string; uaeRelevance: 'critical' | 'high' | 'medium' | 'low' }>
  entityRegistry: {
    governmentBodies: Array<{ entity: string; scope: string; established: string }>
    companies: Array<{ company: string; sector: string; valuation: string; parent?: string }>
    regulatoryInstruments: Array<{ instrument: string; year: number; authority: string }>
  }
  sentimentAnalysisSummary: Array<{ topic: string; overallSentiment: string; keyFinding: string }>
  uaeRelevanceHeatMap: Array<{ topic: string; relevance: 'critical' | 'high' | 'medium' | 'low'; priority: string }>
  g42: { overview: { fullName: string; headquarters: string; founded: number; chairman: string; microsoftInvestment: string; ecosystemValuation: string; keyProducts: string[] }; subsidiaries: Array<{ name: string; sector: string; valuation: string; ipoStatus: string }>; geographicExpansion: Array<{ location: string; investment: string; timeline: string; status: string }> }
  aiJobs: { laborMarketKPIs: Array<{ metric: string; value: string; sourceYear: string }>; automationExposure: Array<{ roleCategory: string; automatability: string; riskLevel: 'critical' | 'high' | 'medium' | 'low' }>; aiHiring: Array<{ metric: string; value: string; change: string }> }
  autonomousVehicles: { dubaiDroneTargets: Array<{ target: string; value: string; timeline: string; status: string }>; marketSize: Array<{ market: string; value2024: string; value2030: string; cagr: string }> }
  starlinkUAE: { launch: { officialDate: string; licenseNumber: string; validity: string }; plans: Array<{ plan: string; monthly: string; downloadSpeed: string }> }
  talent: { imdRanking: { overall: number; globalRank: number; change: string; readinessFactor: number } }
  robotics: { marketSize: Array<{ market: string; value: string }>; militaryRobotics: { claim: string; mouDate: string } }
  digitalTwin: { marketSize: { value2025: string; value2032: string; cagr: string }; smartCityRankings: Array<{ city: string; globalRank: number; change: string }> }
  aiGovernment: { agenticAIDeployment: { target: string; timeline: string; announcement: string } }
  semiconductors: { tsmcUAE: { status: string; projectType: string }; uaeUSAIAgreement: { uaeInvestmentCommitment: string; timeline: string } }
  sourceCredibilityMatrix: Array<{ source: string; tier: TierLevel; type: string; reliability: string }>
}

export const aiTechnologyExtendedData: AITechnologyExtendedData = {
  executionMetadata: { researchDate: '2026-04-27', sourceFile: 'micro-queries/part-10/10-1-ai-technology.md', atomicQueries: 12, enrichmentDate: '2026-04-28', ssotStatus: 'Comprehensive Single Source of Truth' },
  summaryKPIs: [
    { kpi: 'AI Adoption Rate', value: '54%+', trend: 'Up', uaeRelevance: 'critical' },
    { kpi: 'AI Private Investment (2013-2025)', value: '$4 billion', trend: '-', uaeRelevance: 'high' },
    { kpi: 'G42 Valuation', value: '$20+ billion', trend: 'Up', uaeRelevance: 'critical' },
    { kpi: 'Microsoft G42 Investment', value: '$1.5 billion', trend: '-', uaeRelevance: 'critical' },
    { kpi: 'AI Hiring Growth', value: '48%', trend: '+16pp', uaeRelevance: 'critical' },
    { kpi: 'Job Automatability Index', value: '28.53', trend: '-', uaeRelevance: 'critical' },
    { kpi: 'Drone Delivery Coverage (2026)', value: '30%', trend: 'Targeted', uaeRelevance: 'high' },
    { kpi: 'Quantum Research Ranking', value: 'Top 5 globally', trend: '-', uaeRelevance: 'high' },
    { kpi: 'IMD Talent Ranking', value: '9th globally', trend: '+8', uaeRelevance: 'critical' },
    { kpi: 'Smart City Ranking (Dubai)', value: '4th globally', trend: '+8', uaeRelevance: 'critical' },
    { kpi: 'Agentic AI Government Target', value: '50%', trend: '-', uaeRelevance: 'critical' },
    { kpi: 'Job Creation Target', value: '1+ million', trend: '-', uaeRelevance: 'critical' },
    { kpi: 'UAE-US Investment Commitment', value: '$1.4 trillion', trend: '-', uaeRelevance: 'critical' },
    { kpi: 'Stargate UAE Investment', value: '$7.9 billion', trend: '-', uaeRelevance: 'critical' },
  ],
  entityRegistry: {
    governmentBodies: [
      { entity: 'Ministry of AI', scope: 'National', established: '2017 (world\'s first)' },
      { entity: 'AIATC', scope: 'Abu Dhabi', established: 'January 2024' },
      { entity: 'MGX Investment Company', scope: 'National', established: 'January 2024' },
    ],
    companies: [
      { company: 'G42', sector: 'AI Technology', valuation: '$20B+' },
      { company: 'M42', sector: 'Healthcare', valuation: '-', parent: 'G42' },
      { company: 'Presight AI', sector: 'Analytics', valuation: '-', parent: 'G42' },
      { company: 'Space42', sector: 'Satellite', valuation: '~$4B', parent: 'G42' },
    ],
    regulatoryInstruments: [
      { instrument: 'UAE AI Charter for AI (12 principles)', year: 2024, authority: 'Federal' },
      { instrument: 'Federal Decree-Law No. 45/2021 (PDPL)', year: 2021, authority: 'Federal' },
      { instrument: 'Federal Law No. 34/2021 (Cybercrime)', year: 2021, authority: 'Federal' },
    ],
  },
  sentimentAnalysisSummary: [
    { topic: 'AI Regulation', overallSentiment: 'Very Positive', keyFinding: 'UAE as global leader' },
    { topic: 'G42', overallSentiment: 'Very Positive', keyFinding: '$1.5B Microsoft investment validation' },
    { topic: 'AI Jobs', overallSentiment: 'Mixed', keyFinding: 'Opportunity with disruption' },
    { topic: 'Autonomous Vehicles', overallSentiment: 'Positive', keyFinding: 'Ambitious targets' },
    { topic: 'Talent/Brain Drain', overallSentiment: 'Very Positive', keyFinding: 'Top 10 achievement, reversal' },
    { topic: 'Digital Twin', overallSentiment: 'Very Positive', keyFinding: 'Top 5 smart city ranking' },
  ],
  uaeRelevanceHeatMap: [
    { topic: 'AI Regulation', relevance: 'critical', priority: 'P0' },
    { topic: 'G42', relevance: 'critical', priority: 'P0' },
    { topic: 'AI Government Services', relevance: 'critical', priority: 'P0' },
    { topic: 'Talent/Brain Drain', relevance: 'critical', priority: 'P0' },
    { topic: 'Semiconductors', relevance: 'critical', priority: 'P0' },
    { topic: 'AI Jobs', relevance: 'critical', priority: 'P1' },
    { topic: 'Digital Twin', relevance: 'critical', priority: 'P1' },
    { topic: 'Autonomous Vehicles', relevance: 'high', priority: 'P2' },
    { topic: 'Robotics', relevance: 'high', priority: 'P2' },
  ],
  g42: {
    overview: { fullName: 'Group 42', headquarters: 'Abu Dhabi, UAE', founded: 2018, chairman: 'Sheikh Tahnoon bin Zayed Al Nahyan', microsoftInvestment: '$1.5 billion (April 2024)', ecosystemValuation: '$20+ billion', keyProducts: 'Jais LLM, Condor Galaxy, 42XFund' },
    subsidiaries: [
      { name: 'M42', sector: 'Healthcare', valuation: '-', ipoStatus: 'Private' },
      { name: 'Bayanat', sector: 'Geospatial', valuation: '-', ipoStatus: 'Private' },
      { name: 'Presight AI', sector: 'Analytics', valuation: '-', ipoStatus: 'Public ($495M IPO 2023)' },
      { name: 'Space42', sector: 'Satellite', valuation: '~$4B', ipoStatus: 'Public (2024)' },
    ],
    geographicExpansion: [
      { location: 'Kenya', investment: '$1 billion (green-energy data center)', timeline: 'May 2024', status: 'Completed' },
      { location: 'Vietnam', investment: '~$2 billion (Ho Chi Minh City)', timeline: 'Oct 2025', status: 'Announced' },
      { location: 'UAE (Stargate)', investment: '$7.9 billion', timeline: '2026-2029', status: 'Committed' },
    ],
  },
  aiJobs: {
    laborMarketKPIs: [
      { metric: 'Job Automatability Index (Average)', value: '28.53', sourceYear: '2025' },
      { metric: 'Dubai Automatability Index', value: '29.57', sourceYear: '2025' },
      { metric: 'Abu Dhabi Automatability Index', value: '27.29', sourceYear: '2025' },
      { metric: 'Jobs Requiring On-Site Work', value: '89.7%', sourceYear: '2025' },
    ],
    automationExposure: [
      { roleCategory: 'General/Keyboard Clerks', automatability: '73.00%', riskLevel: 'critical' },
      { roleCategory: 'Recording Clerks', automatability: '55.41%', riskLevel: 'critical' },
      { roleCategory: 'Business/Admin Associate Professionals', automatability: '47.95%', riskLevel: 'high' },
      { roleCategory: 'Science/Engineering Professionals', automatability: '33.03%', riskLevel: 'medium' },
      { roleCategory: 'Teaching Professionals', automatability: '10.87%', riskLevel: 'low' },
    ],
    aiHiring: [
      { metric: 'AI Hiring Growth (2024-25)', value: '48%', change: '+16pp' },
      { metric: 'AI Hiring Growth (2023-24)', value: '32%', change: '-' },
      { metric: 'Data Scientist Role Growth', value: '43%', change: 'YoY' },
      { metric: 'Employees Using AI Regularly', value: '80%+', change: 'Current' },
    ],
  },
  autonomousVehicles: {
    dubaiDroneTargets: [
      { target: 'City Coverage', value: '30%', timeline: '2026', status: 'Targeted' },
      { target: 'City Coverage', value: '70%', timeline: '5 years', status: 'Targeted' },
      { target: 'First Phase', value: 'Dubai Silicon Oasis', timeline: 'Launched', status: 'Completed' },
    ],
    marketSize: [
      { market: 'UAE Autonomous Last Mile Delivery', value2024: '$5.8M', value2030: '$26.2M', cagr: '29.2%' },
      { market: 'Ground Delivery Vehicles', value2024: '113.8% revenue share', value2030: '-', cagr: '-' },
    ],
  },
  starlinkUAE: {
    launch: { officialDate: 'March 18, 2026', licenseNumber: 'License No. 2 of 2024', validity: 'Through 2034 (10-year)' },
    plans: [
      { plan: 'Residential Lite', monthly: 'Dh230', downloadSpeed: '30-100 Mbps' },
      { plan: 'Standard Residential', monthly: 'Dh300', downloadSpeed: '50-200 Mbps' },
      { plan: 'Business', monthly: 'From ~Dh248', downloadSpeed: '-' },
    ],
  },
  talent: {
    imdRanking: { overall: 9, globalRank: 9, change: '+8 from 17th', readinessFactor: 1 },
  },
  robotics: {
    marketSize: [
      { market: 'Robotic Platform Market', value: '$445 million' },
      { market: 'Robotics System Integration', value: '$258.7 million' },
    ],
    militaryRobotics: { claim: 'World\'s largest combat robotics programme', mouDate: 'January 24, 2024 (UMEX 2024)' },
  },
  digitalTwin: {
    marketSize: { value2025: '$228 million', value2032: '$772 million', cagr: '19.03%' },
    smartCityRankings: [
      { city: 'Dubai', globalRank: 4, change: '+8 ranks' },
      { city: 'Abu Dhabi', globalRank: 5, change: '+5 ranks' },
    ],
  },
  aiGovernment: {
    agenticAIDeployment: { target: '50% of federal sectors/services/operations', timeline: 'Within 2 years', announcement: 'April 24, 2026' },
  },
  semiconductors: {
    tsmcUAE: { status: 'Evaluating', projectType: 'Gigafab (6 factories)' },
    uaeUSAIAgreement: { uaeInvestmentCommitment: '$1.4 trillion', timeline: '10 years' },
  },
  sourceCredibilityMatrix: [
    { source: 'UAE Government Portal (u.ae)', tier: 0, type: 'Official', reliability: 'Extremely High' },
    { source: 'White House', tier: 0, type: 'Government', reliability: 'Extremely High' },
    { source: 'Microsoft News', tier: 1, type: 'Corporate/Authoritative', reliability: 'Very High' },
    { source: 'Stanford HAI', tier: 1, type: 'Research Institute', reliability: 'Very High' },
    { source: 'IMD', tier: 1, type: 'Research Institute', reliability: 'Very High' },
    { source: 'Grand View Research', tier: 2, type: 'Market Research', reliability: 'Medium-High' },
  ],
}

export const aiTechnologyExtended = aiTechnologyExtendedData

// ============================================================================
// SOCIAL MEDIA TRENDS (10-2)
// ============================================================================

export const socialMediaTrendsData: TrendAnalysis = {
  id: 'trend-10-2',
  category: 'social-media',
  name: 'Social Media Trends',
  description: 'Social media in 2026 has reached "supermajority" status with 5.24-5.66 billion users globally. The landscape is defined by AI integration, short-form video dominance, creator economy maturation, social commerce revolution, and fundamental shifts in how users discover content and make purchasing decisions.',
  adoptionRate: 89,
  uaeAdoptionRate: 99,
  generationalBreakdown: {
    genZ: 98,
    millennial: 95,
    genX: 78,
    boomer: 52,
  },
  regulatoryStatus: {
    status: 'pending',
    description: 'UAE social media content regulations, influencer disclosure requirements',
    effectiveDate: '2026-06-01',
  },
  sentiment: {
    positive: 68,
    negative: 18,
    neutral: 14,
    overall: 0.62,
    volume: 890000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.80,
      timeline: '2026-2027',
      indicators: [
        'Social commerce GMV $6.2T',
        'TikTok 2.04B MAU',
        'AI-generated content 90% of online content',
        'Creator economy $37B+',
        'Live commerce $230B',
      ],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2028',
      indicators: [
        'Global users 5.66B',
        'Social commerce $1.09-6.2T range',
        'Creator economy $32.6B',
        'Influencer market $38B',
        'Social ad spend $335-360B',
      ],
    },
    {
      scenario: 'pessimistic',
      probability: 0.25,
      timeline: '2028-2030',
      indicators: [
        'AI content engagement penalty -12%',
        'Privacy regulation tightening',
        'Platform fragmentation',
        'SVOD cancellation rate 39-41%',
        'News confidence historic lows 28%',
      ],
    },
  ],
  keyDrivers: [
    'TikTok engagement rate 3.70-4.6% (+49% YoY) - highest among all platforms',
    'UAE TikTok users 34.1M in KSA with +39% YoY growth - highest in GCC',
    'Instagram 73%+ penetration in UAE - critical for brand strategies',
    'Social commerce 28% growth with $1.09-6.2T market - revolutionizing retail',
    '79% of creators using AI tools - AI integration accelerating',
    'Gen Z 4.5 hours daily time on social media (+5% YoY)',
    'Short-form video 68% of all social shares',
    'Influencer marketing $32.6B industry with $5.78 ROI per $1 spent',
    'TikTok Shop GMV $44.8B globally (+108% YoY)',
    'Micro-influencer ROI $7.14 per $1 spent - highest returns',
  ],
  // Extended data from MD enrichment
  platformMetrics: {
    tiktok: {
      mau: '1.2-2.04B',
      dailyActive: '1.12B',
      engagementRate: '3.70-4.6%',
      dailyTime: '53.8-58 min',
      cpm: '$4.80-$8.72',
      adRevenue: '$32.8-33.1B',
      shopGmv: '$44.8B',
      topMarkets: { ksa: '34.1M', us: '136-153M', indonesia: '108M', brazil: '91.7M' },
    },
    instagram: {
      mau: '2.0-3.0B',
      dailyTime: '73 min',
      engagementRate: '0.48-5.4%',
      shoppingGmv: '$37B',
      reachPenetration: '73%+ in UAE',
      reelsShare: '73% of engagement',
    },
    facebook: {
      mau: '3.05-3.22B',
      dailyTime: '1h 7m',
      engagementRate: '0.15-5.6%',
      shopsGmv: '$28.6B',
      organicReach: '<2%',
    },
    youtube: {
      mau: '2.58-2.85B',
      dailyGenZ: '63%',
      dailyTime18_24: '59 min',
      shortsViews: '200B+ daily',
      adRevenue: '$45.2B',
    },
    linkedin: {
      mau: '0.25-1.3B',
      engagementRate: '2.8-6.2%',
      carouselEr: '21.77%',
      cpm: '$33.80',
      b2bLeads: '80%',
    },
    snapchat: {
      dau: '474M',
      reach13_24: '90% in 25+ countries',
      arUsers: '300M+',
      dailyTime: '30 min',
    },
  },
  commerceMetrics: {
    globalSocialCommerce: '$1.09-6.2T',
    liveCommerce: '$172.86B',
    genZDiscovery: '77-82%',
    genZSocialSearch: '41-52%',
    impulsePurchases: '28%',
    livestreamPurchaseRate: '76%',
    socialToPlatformExit: '78%',
  },
  influencerMetrics: {
    marketSize: '$32.6B',
    projected2030: '$52.1B',
    avgRoi: '$5.78',
    microRoi: '$7.14',
    nanoRoi: '$6.52',
    virtualMarket: '$1.37B',
    virtualGrowth: '243% YoY',
    fraudLosses: '$1.3B',
    fakeFollowerRate: '14.2%',
  },
  contentPerformance: {
    shortFormShare: '68%',
    shortFormEngagementPremium: '2.5x vs long-form',
    linkedInCarouselEr: '21.77%',
    instagramCarouselEr: '6.90%',
    instagramReelsEr: '3.31%',
    tiktokVideoEr: '3.39%',
    optimalReelsLength: '30-90 seconds',
    optimalTikTokLength: 'under 21 sec (88% completion)',
  },
  genZMetrics: {
    dailyTime: '4.5 hours',
    instagramUsage: '91%',
    youtubeUsage: '89.3%',
    tiktokUsage: '72-86%',
    privacyConcerns: '81%',
    mentalHealthNegative: '73%',
    influencerPurchases: '56%',
    ugcVsBranded: '4.2x engagement',
    socialAsSearch: '41-52%',
  },
  advertisingMetrics: {
    totalAdSpend: '$276-317B',
    videoAdSpend: '$72.4B',
    tiktokCpm: '$4.80-$8.72',
    linkedInCpm: '$33.80',
    metaCpm: '$12.47',
    videoAdSpend2026: '$223.5B',
    shortFormAdSpend2025: '$111B',
  },
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 33,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 97,
    level: 'critical' as const,
    justification: 'UAE has 99.5% social media penetration with TikTok highest in GCC (+39% YoY), Instagram 73%+ penetration, and among highest social commerce growth regionally',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'Digital Applied', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Hootsuite Social Trends', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'Sprout Social', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'SQ Magazine', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Buffer', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'Social Insider', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'Autofaceless AI', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'eMarketer', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'DesignRush', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Aspire', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Kapwing', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Viral Marketing Lab', tier: 3 as TierLevel, date: '2026-04-28' },
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// GENERATIONAL SHIFT TRENDS (10-3)
// ============================================================================

export const generationalShiftData: TrendAnalysis = {
  id: 'trend-10-3',
  category: 'generational',
  name: 'Generational Shift',
  description: 'The UAE is experiencing profound generational shifts with Gen Z (1997-2012), Millennials, and Gen Alpha (2013-2025) populations driving changes in values, employment patterns, identity formation, and digital native behaviors across society.',
  adoptionRate: 82,
  uaeAdoptionRate: 88,
  generationalBreakdown: {
    genZ: 92,
    millennial: 88,
    genX: 65,
    boomer: 42,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'National Youth Agenda 2031, Emirati Identity Strategy (Nov 2025), Emiratization mandates, Abu Dhabi Digital Strategy AED 13B',
    effectiveDate: '2025-11-01',
  },
  sentiment: {
    positive: 64,
    negative: 20,
    neutral: 16,
    overall: 0.58,
    volume: 89000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.82,
      timeline: '2026-2028',
      indicators: ['Youth unemployment 6.45% (down from 13.48% peak 2020)', '152,000+ Emiratis in private sector (+33% H1 2025)', 'UAE wellbeing 70% (+8pp YoY)'],
    },
    {
      scenario: 'baseline',
      probability: 0.70,
      timeline: '2027-2029',
      indicators: ['Gen Z financial insecurity 48%', 'Female youth unemployment 12.1% vs male 4.1%', 'Gig economy >AED 10B/year contribution'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.32,
      timeline: '2028-2030',
      indicators: ['Mental health 1 in 4 UAE residents affected', '80% mental health conditions undiagnosed in GCC', 'Skills gap 41% future jobs requiring new core skills'],
    },
  ],
  keyDrivers: [
    'UAE population aged 15-35 at ~50%, Middle East >60% under 30',
    'Youth unemployment declining from 13.48% (2020) to 6.45% (2025)',
    'Emirati National Identity Strategy Nov 2025: 6 elements, 5 values, 3 pillars, 13 initiatives',
    'Abu Dhabi Digital Strategy AED 13 billion (2025-2027), 50% Agentic AI by 2027',
    'Gen Z daily Snapchat >90%, 48% relying on AI for work tasks',
    'Emiratization 10% target by 2026, AED 6,000/month minimum wage & penalties',
    'Gen Alpha luxury ownership 68% by age 10, 87% brand attentive',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 24,
    lastVerified: '2026-04-29',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical' as const,
    justification: 'Youth constitute ~50% of UAE population with critical impact on economic diversification, employment, and national identity',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'YCharts/FRED', tier: 1 as TierLevel, date: '2026-04-29' },
    { name: 'WAM', tier: 0 as TierLevel, date: '2026-04-29' },
    { name: 'Deloitte Youth Survey', tier: 2 as TierLevel, date: '2026-04-29' },
    { name: 'Oliver Wyman', tier: 1 as TierLevel, date: '2026-04-29' },
    { name: 'Middle East Briefing', tier: 1 as TierLevel, date: '2026-04-29' },
    { name: 'EDS Arabic', tier: 2 as TierLevel, date: '2026-04-29' },
    { name: 'Gulf Business', tier: 2 as TierLevel, date: '2026-04-29' },
    { name: 'Khaleej Times', tier: 2 as TierLevel, date: '2026-04-29' },
  ],
  lastUpdated: '2026-04-29',
}

// Extended generational shift data interfaces
export interface YouthEmploymentMetrics {
  unemploymentRate: number
  year: number
  trend: 'decreasing' | 'stable' | 'increasing'
  female?: number
  male?: number
}

export interface GenerationalConsumerMetrics {
  generation: 'Gen Z' | 'Millennial' | 'Gen Alpha'
  personalizedExperiencePriority: number
  causeBrandPremium: number
  dailySocialMediaHours: number
  financialInsecurity?: number
  purposeImportance?: number
}

export interface GigEconomyMetrics {
  globalValue: number
  uaeContribution: number
  uaeGlobalShare: number
  permitTypes: {
    type: string
    duration: string
    authority: string
  }[]
}

export interface MentalHealthMetrics {
  wellbeingScore: number
  conditionPrevalence: number
  undiagnosedGCC: number
  dubaiInvestment: number
  treatmentIncreaseAbuDhabi: number
  openToSupport: number
  psychiatristRateGCC: number
  psychiatristRateOECD: number
}

export interface DigitalNativeMetrics {
  snapchatDailyUsage: number
  aiForWorkTasks: number
  digitalStrategyBudget: number
  agenticAiGovernmentServices: number
}

export interface EmiratizationMetrics {
  emiratisPrivateSector: number
  companiesWithEmiratis: number
  target2026: number
  femaleUnemployment: number
  maleUnemployment: number
  minimumWage: number
  penaltyPerMissing: number
}

export interface EducationSkillsMetrics {
  newTeachersBy2030: number
  alRamsaStudents: number
  futureJobsNewSkills: number
  belowBasicFinancialLiteracy: number
  massarDataAnalyzed: number
}

export interface NationalIdentityMetrics {
  coreValues: number
  coreElements: number
  strategicPillars: number
  implementationDimensions: number
  notableInitiatives: number
}

export interface HousingSupportMetrics {
  citizenHomeownership: number
  housingDecisions: number
  totalValue: number
  alHabtoorPlan: number
  planCoverage: number
}

export interface GenerationAlphaMetrics {
  brandAttentive: number
  luxuryOwnershipByAge10: number
  parentalLuxuryInfluence: number
  sustainableBrandPremium: number
}

// Detailed generational shift data for dashboard
export const youthEmploymentData: YouthEmploymentMetrics[] = [
  { year: 2025, unemploymentRate: 6.45, trend: 'decreasing' },
  { year: 2024, unemploymentRate: 6.42, trend: 'stable' },
  { year: 2023, unemploymentRate: 6.35, trend: 'decreasing' },
  { year: 2022, unemploymentRate: 9.99, trend: 'decreasing' },
  { year: 2021, unemploymentRate: 9.74, trend: 'decreasing' },
  { year: 2020, unemploymentRate: 13.48, trend: 'increasing' },
  { year: 2019, unemploymentRate: 7.32, trend: 'stable' },
  { year: 1995, unemploymentRate: 5.34, trend: 'stable' },
]

export const youthEmploymentGenderData = [
  { year: '2024', female: 12.1, male: 4.1 },
]

export const generationalConsumerData: GenerationalConsumerMetrics[] = [
  {
    generation: 'Gen Z',
    personalizedExperiencePriority: 67,
    causeBrandPremium: 60,
    dailySocialMediaHours: 2.5,
    financialInsecurity: 48,
    purposeImportance: 89,
  },
  {
    generation: 'Millennial',
    personalizedExperiencePriority: 65,
    causeBrandPremium: 58,
    dailySocialMediaHours: 2.2,
    financialInsecurity: 46,
    purposeImportance: 92,
  },
  {
    generation: 'Gen Alpha',
    personalizedExperiencePriority: 72,
    causeBrandPremium: 60,
    dailySocialMediaHours: 1.8,
    financialInsecurity: undefined,
    purposeImportance: undefined,
  },
]

export const gigEconomyData: GigEconomyMetrics = {
  globalValue: 455,
  uaeContribution: 10,
  uaeGlobalShare: 7,
  permitTypes: [
    { type: 'Dubai Freelance Permit', duration: '1-3 years', authority: 'Dubai DED/GoFreelance' },
    { type: 'Abu Dhabi Freelance Licence', duration: '1-2 years', authority: 'ADGM/twofour54' },
    { type: 'Free Zone Freelance', duration: '1-3 years', authority: 'Various free zones' },
    { type: 'Green Visa', duration: '5 years', authority: 'MOHRE/ICP' },
    { type: 'Virtual Working Visa', duration: '1 year', authority: 'MOHRE' },
  ],
}

export const mentalHealthData: MentalHealthMetrics = {
  wellbeingScore: 70,
  conditionPrevalence: 25,
  undiagnosedGCC: 80,
  dubaiInvestment: 105,
  treatmentIncreaseAbuDhabi: 30,
  openToSupport: 66,
  psychiatristRateGCC: 3,
  psychiatristRateOECD: 15,
}

export const digitalNativeData: DigitalNativeMetrics = {
  snapchatDailyUsage: 90,
  aiForWorkTasks: 48,
  digitalStrategyBudget: 13,
  agenticAiGovernmentServices: 50,
}

export const emiratizationData: EmiratizationMetrics = {
  emiratisPrivateSector: 152000,
  companiesWithEmiratis: 29000,
  target2026: 10,
  femaleUnemployment: 12.1,
  maleUnemployment: 4.1,
  minimumWage: 6000,
  penaltyPerMissing: 6000,
}

export const educationSkillsData: EducationSkillsMetrics = {
  newTeachersBy2030: 30000,
  alRamsaStudents: 1200,
  futureJobsNewSkills: 41,
  belowBasicFinancialLiteracy: 39,
  massarDataAnalyzed: 28,
}

export const nationalIdentityData: NationalIdentityMetrics = {
  coreValues: 5,
  coreElements: 6,
  strategicPillars: 3,
  implementationDimensions: 7,
  notableInitiatives: 13,
}

export const housingSupportData: HousingSupportMetrics = {
  citizenHomeownership: 91,
  housingDecisions: 3567,
  totalValue: 2.546,
  alHabtoorPlan: 270,
  planCoverage: 70,
}

export const generationAlphaData: GenerationAlphaMetrics = {
  brandAttentive: 87,
  luxuryOwnershipByAge10: 68,
  parentalLuxuryInfluence: 69,
  sustainableBrandPremium: 60,
}

// ============================================================================
// GEOPOLITICAL SHIFT TRENDS (10-4)
// ============================================================================

export const geopoliticalShiftData: TrendAnalysis = {
  id: 'trend-10-4',
  category: 'geopolitical',
  name: 'Geopolitical Shift',
  description: 'The UAE is actively navigating a multipolar world order with BRICS membership, strategic hedging between US and China, and emerging as a middle power through effective diplomatic and economic strategies.',
  adoptionRate: 72,
  uaeAdoptionRate: 88,
  generationalBreakdown: {
    genZ: 65,
    millennial: 78,
    genX: 82,
    boomer: 75,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'BRICS membership (joined January 2024), CEPA program with 32 agreements',
    effectiveDate: '2024-01-01',
  },
  sentiment: {
    positive: 58,
    negative: 24,
    neutral: 18,
    overall: 0.52,
    volume: 45000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.72,
      timeline: '2026-2028',
      indicators: ['BRICS trade 40% of global trade', 'UAE FDI $45B (2nd globally)', 'CEPA target $1T trade by 2031'],
    },
    {
      scenario: 'baseline',
      probability: 0.60,
      timeline: '2027-2030',
      indicators: ['De-dollarization 57% USD reserves', 'Multi-aligned foreign policy success', 'UAE investment framework $1.4T in US'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.28,
      timeline: '2028-2032',
      indicators: ['BRICS unity challenges', 'US-China tensions affecting trade', 'Regional instability impacts'],
    },
  ],
  keyDrivers: [
    'UAE BRICS membership since January 2024 with Egypt, Ethiopia, Iran',
    'Belfer Center: UAE GDP $456B (1975: $20B), non-oil sector 77.3% (Q1 2025)',
    'CEPA agreements concluded: 32 since September 2021',
    'Defense: EDGE Group 37th globally, $4.7B arms sales (SIPRI)',
    'Microsoft $15.2B technology investment, G42 $1.5B partnership',
    // ENRICHED DATA from MD (10-4-geopolitical-shift-results.md)
    'BRICS global trade share: 40%, BRICS oil production/exports: 40% (2024)',
    'BRICS PPP surpassed G7 since 2018',
    'USD reserves global share: 57%, Euro: 20%, CNY: 2%+',
    'Autocratic population: 71% (2024) vs 48% (2013)',
    'UAE GDP $569.1B (2025), target $800B+ by 2031',
    'Non-oil GDP share: 77.3% (Q1 2025)',
    'Africa investment: $110B, 26,910 African companies in Dubai Chamber',
    'UAE-India food security corridor: $7B',
    'UAE-France AI data center: $50B, UAE-Italy partnership: $40B',
    'Masdar-US clean energy: $100B',
    'India defense partnership: Major defense partner (September 2024)',
    'US defense partnership: Major defense partner (May 2025)',
    'I2U2 membership with Pax Silica declaration',
    'IMEC (India-Middle East-Europe Economic Corridor) participation',
    'Renewable capacity: ~6,126 MW (solar 1,875 MW + nuclear 4,251 MW)',
    'Renewable target: 14.2 GW by 2030',
    'COP28: UAE Consensus adopted by 198 countries',
    'Net-zero commitment: 2050, ADNOC: 2045',
    'Pakistan relations deteriorating: $2B pressure, Saudi-Pakistan defense agreement Sep 2025',
    'Saudi-UAE confrontation: December 2025, UAE withdrew from Yemen',
  ],
  credibility: {
    tier: 2 as TierLevel,
    score: 88,
    sources: 20,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 96,
    level: 'critical' as const,
    justification: 'UAE BRICS membership and multipolar positioning directly impact economic strategy',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'Munich Security Conference', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Belfer Center (Harvard)', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Carnegie Endowment', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'The Daily Economy', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'Lowy Institute', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Frontiers (Peer-reviewed)', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'IRENA', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'MEF', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'Jerusalem Post', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'India MEA', tier: 1 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// ECONOMIC TRENDS (10-5)
// ============================================================================

export const economicTrendsData: TrendAnalysis = {
  id: 'trend-10-5',
  category: 'economic',
  name: 'Economic Trends',
  description: 'The UAE economy enters 2026 with strong momentum, projected to grow at 5.6% (Central Bank) to 5% (World Bank), outpacing the GCC average of 4.8%. The nation continues its successful economic diversification with non-oil sectors driving growth.',
  adoptionRate: 85,
  uaeAdoptionRate: 92,
  generationalBreakdown: {
    genZ: 72,
    millennial: 88,
    genX: 90,
    boomer: 78,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'New Central Bank Law (FDL 6/2025), Corporate Tax DMTT 15%, Climate Law FDL 11/2024',
    effectiveDate: '2025-01-01',
  },
  sentiment: {
    positive: 78,
    negative: 10,
    neutral: 12,
    overall: 0.76,
    volume: 156000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.82,
      timeline: '2026',
      indicators: ['GDP growth 5.6%', 'Trade $1.637T (9th globally)', 'FDI $45B (+50% YoY)'],
    },
    {
      scenario: 'baseline',
      probability: 0.68,
      timeline: '2026-2027',
      indicators: ['GDP $967.62B', 'Tourism AED 257.3B', 'Startup ecosystem $2B (218 deals)'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.25,
      timeline: '2026-2028',
      indicators: ['Regional geopolitical tensions', 'Oil production 2.37M bpd (-35%)', 'Property market potential -7% annually'],
    },
  ],
  keyDrivers: [
    'GDP growth 5.0-5.6% outpacing GCC average 4.8%',
    'Total trade Dh6.014 trillion ($1.637 trillion), ranking 9th globally',
    'FDI inflows $45 billion with 50% year-on-year increase',
    'Banking sector assets Dh5.472 trillion (Feb 2026), +1.1%',
    'Startup ecosystem $2B across 218 deals (+32% growth)',
  ],
  credibility: {
    tier: 0 as TierLevel,
    score: 95,
    sources: 14,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 99,
    level: 'critical' as const,
    justification: 'Core economic indicators show strong growth trajectory and diversification success',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'UAE Central Bank', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'World Bank', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'UAE Ministry of Investment', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Gulf News', tier: 3 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// CULTURAL EVOLUTION TRENDS (10-6)
// ============================================================================

export const culturalEvolutionData: TrendAnalysis = {
  id: 'trend-10-6',
  category: 'cultural',
  name: 'Cultural Evolution',
  description: 'The UAE is experiencing a profound cultural evolution driven by rapid modernization, globalization, and strategic investments in cultural infrastructure including museums, fashion, heritage preservation, and the Emirati identity framework.',
  adoptionRate: 68,
  uaeAdoptionRate: 85,
  generationalBreakdown: {
    genZ: 82,
    millennial: 86,
    genX: 72,
    boomer: 58,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'Emirati National Identity Strategy (November 2025), Arabic mandatory KG lessons, Five-Year Culture Plan $6B',
    effectiveDate: '2025-11-01',
  },
  sentiment: {
    positive: 71,
    negative: 14,
    neutral: 15,
    overall: 0.68,
    volume: 38000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.80,
      timeline: '2026-2028',
      indicators: ['Zayed National Museum opens Dec 2025', 'Guggenheim Abu Dhabi 2026', '$6B culture plan creating jobs'],
    },
    {
      scenario: 'baseline',
      probability: 0.68,
      timeline: '2027-2029',
      indicators: ['Modest fashion market $311B to $428B by 2027', 'UNESCO heritage recognition', '7 museums on Saadiyat'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.30,
      timeline: '2028-2030',
      indicators: ['Westernization concerns', 'Language preservation challenges', 'Cultural commodification debates'],
    },
  ],
  keyDrivers: [
    '$6 billion five-year culture plan (2021) with $2.3B prior investment',
    'Zayed National Museum opening December 3, 2025 with 3,000+ pieces',
    'Arabic mandatory in KG: 40 minutes daily (2025-2026)',
    'Modest fashion market $311 billion with 2027 projection $428 billion',
    'Sheikh Zayed Grand Mosque: 6.8M guests in 2025 (+4%)',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 86,
    sources: 16,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 94,
    level: 'critical' as const,
    justification: 'Cultural evolution directly impacts national identity and soft power strategy',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'BTI Project', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'AGSI Abu Dhabi', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'UAE Government Portal', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Emirates News Agency', tier: 0 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// CULTURAL EVOLUTION ENRICHED DATA (from 10-6 MD - 100% MD content)
// ============================================================================

export interface CulturalDemographics {
  totalPopulation: number
  emirtiNationals: number
  expatriatePopulation: number
  nationalities: number
  abuDhabiPopulation: number
  populationGrowth2024: number
}

export interface CulturalEconomic {
  gdpPerCapita: number
  nonOilSectors: number
  culturePlanInvestment: number
  priorCultureInvestment: number
  modestFashionMarket: number
  modestFashionProjection2027: number
  fdiInflows: number
}

export interface CulturalLanguage {
  arabicSpeakersGlobal: number
  emiratiArabicSpeakers: number
  genZArabicImpactBeta: number
  kgArabicMinutes: number
  primaryArabicMinutesWeek: number
  newSchools2025: number
  newTeachers2025: number
  textbooksPrinted: number
}

export interface CulturalEmployment {
  emiratisationTarget: number
  emiratisEmployed: number
  privateCompaniesWithEmiratis: number
  minimumWageAED: number
  nonComplianceFineAED: number
}

export interface CulturalVisitors {
  sheikhZayedMosqueGuests: number
  yearOverYearGrowth: number
  globalRanking: string
  expo2020Visitors: number
  abuDhabiHotelGuests: number
  hotelOccupancyRate: number
}

export interface CulturalInstitution {
  name: string
  location: string
  openingDate: string
  collectionSize: string
  architect?: string
}

export interface CulturalEvent {
  name: string
  type: string
  dates: string
  location: string
  attendance?: number
}

export interface FashionDesigner {
  name: string
  specialty: string
  followers: string
}

export interface YouthInnovator {
  name: string
  field: string
  achievement: string
}

export interface SentimentTopic {
  topic: string
  sentiment: string
  score: number
  keyPositives: string
  keyNegatives: string
}

export const culturalDemographics = {
  totalPopulation: 10700000,
  emirtiNationals: 1500000,
  expatriatePopulation: 89,
  nationalities: 200,
  abuDhabiPopulation: 4000000,
  populationGrowth2024: 7.5,
}

export const culturalEconomic = {
  gdpPerCapita: 50000,
  nonOilSectors: 70,
  culturePlanInvestment: 6000000000,
  priorCultureInvestment: 2300000000,
  modestFashionMarket: 311000000000,
  modestFashionProjection2027: 428000000000,
  fdiInflows: 30700000000,
}

export const culturalLanguage = {
  arabicSpeakersGlobal: 420000000,
  emiratiArabicSpeakers: 3700000,
  genZArabicImpactBeta: 0.748,
  kgArabicMinutes: 40,
  primaryArabicMinutesWeek: 200,
  newSchools2025: 9,
  newTeachers2025: 800,
  textbooksPrinted: 10000000,
}

export const culturalEmployment = {
  emiratisationTarget: 10,
  emiratisEmployed: 152000,
  privateCompaniesWithEmiratis: 29000,
  minimumWageAED: 6000,
  nonComplianceFineAED: 6000,
}

export const culturalVisitors = {
  sheikhZayedMosqueGuests: 6846723,
  yearOverYearGrowth: 4,
  globalRanking: '1st ME, 8th global',
  expo2020Visitors: 25000000,
  abuDhabiHotelGuests: 5800000,
  hotelOccupancyRate: 79,
}

export const culturalInstitutions = [
  { name: 'Louvre Abu Dhabi', location: 'Saadiyat', openingDate: '2017', collectionSize: 'Permanent + rotating', architect: 'Jean Nouvel' },
  { name: 'Zayed National Museum', location: 'Saadiyat', openingDate: 'Dec 3, 2025', collectionSize: '3,000+ pieces', architect: 'Foster + Partners' },
  { name: 'Guggenheim Abu Dhabi', location: 'Saadiyat', openingDate: '2026', collectionSize: 'Modern/contemporary', architect: 'Frank Gehry' },
  { name: 'teamLab Phenomena', location: 'Saadiyat', openingDate: 'Apr 2025', collectionSize: 'Digital installations' },
  { name: 'Natural History Museum', location: 'Saadiyat', openingDate: 'Nov 2025', collectionSize: "Earth's story", architect: 'Mecanoo' },
  { name: 'Al Maqtaa Museum', location: 'Saadiyat', openingDate: 'Apr 2025', collectionSize: 'Historic' },
  { name: 'Al Ain Museum', location: 'Al Ain', openingDate: 'Oct 2025', collectionSize: 'Restored heritage' },
]

export const culturalEvents = [
  { name: 'Sheikh Zayed Festival', type: 'Heritage', dates: 'Nov 2024-Jan 2025', location: 'Abu Dhabi' },
  { name: 'Liwa International Festival', type: 'Heritage', dates: 'Dec 2024-Jan 2025', location: 'Liwa' },
  { name: 'Abu Dhabi Culture Summit', type: 'Cultural discourse', dates: 'April 27-29, 2025', location: 'Abu Dhabi' },
  { name: 'MEFCC 2026', type: 'Pop culture', dates: 'Sept 11-13, 2026', location: 'ADNEC Abu Dhabi', attendance: 46000 },
  { name: 'Dubai Fashion Week', type: 'Fashion', dates: 'Bi-annual', location: 'Dubai' },
  { name: 'Dubai Modest Fashion Week', type: 'Modest fashion', dates: 'Annual', location: 'Dubai' },
]

export const fashionDesigners = [
  { name: 'Hessa Falasi', specialty: 'Luxury abayas', followers: 'Private consultations' },
  { name: 'Leena Al Ghouti', specialty: 'Streetwear', followers: '310K Instagram' },
  { name: 'Fatma Husam', specialty: 'Kamin abaya label', followers: '670K' },
  { name: 'Mthayel Al Ali', specialty: 'Artisan jewellery', followers: '789K' },
  { name: 'Shehna Hussain', specialty: 'Paris FW 2026', followers: 'International' },
]

export const youthInnovators = [
  { name: 'Hanan Alfardan', field: 'Language preservation', achievement: 'Al Ramsa Institute, 1,200+ students' },
  { name: 'Nujood Al Khloofi', field: 'Healthcare', achievement: '1,000+ transplants facilitated' },
  { name: 'Hessa Al Ghandi', field: 'Design', achievement: 'Sikka Art Fair, Adidas collab' },
  { name: 'Rouda Alserkal', field: 'Chess', achievement: 'First UAE Woman Grandmaster' },
  { name: 'Saeed AlMheiri', field: 'Gaming', achievement: '100K players in 37 days (Roblox)' },
]

export const culturalSentimentTopics = [
  { topic: 'Cultural Transformation', sentiment: 'Cautiously Positive', score: 0.62, keyPositives: 'Innovation, investment, heritage preservation', keyNegatives: 'Identity loss concerns, Westernization' },
  { topic: 'Language Policy', sentiment: 'Strongly Positive', score: 0.78, keyPositives: 'Mandatory Arabic, AI models, preservation efforts', keyNegatives: 'English dominance, Gen Z preferences' },
  { topic: 'Museum Development', sentiment: 'Very Positive', score: 0.85, keyPositives: '$6B investment, global hubs, soft power', keyNegatives: 'Cost overruns, completion delays' },
  { topic: 'Fashion Industry', sentiment: 'Positive', score: 0.71, keyPositives: '$311B market, global recognition, designers', keyNegatives: 'Sustainability challenges' },
  { topic: 'Disney Partnership', sentiment: 'Mixed', score: 0.15, keyPositives: 'Tourism boost, global brand', keyNegatives: 'Cultural commodification, authenticity' },
  { topic: 'Youth Identity', sentiment: 'Balanced', score: 0.45, keyPositives: 'Innovation, heritage tech', keyNegatives: 'Pressure, mental health struggles' },
  { topic: 'Tolerance/Multiculturalism', sentiment: 'Very Positive', score: 0.88, keyPositives: '200+ nationalities, interfaith initiatives', keyNegatives: 'Integration challenges' },
  { topic: 'Food Culture', sentiment: 'Positive', score: 0.68, keyPositives: 'Culinary innovation, Emirati revival', keyNegatives: 'Fast food prevalence, health concerns' },
  { topic: 'Wedding Traditions', sentiment: 'Positive', score: 0.72, keyPositives: 'Modern elegance, sustainability', keyNegatives: 'Cost concerns, tradition erosion' },
]

export const nationalIdentityInitiatives = [
  'Integrating national identity into educational curricula',
  'National framework for extracurricular cultural activities',
  'Strengthening national identity within Emirati families',
  'Media Content Policy and Code of Conduct for content creators',
  '"Nahj" initiative for community-based programs',
  '"We Are the Children of Zayed" initiative',
  'Cultural Heritage Law',
  'Cultural content coding',
  'National Cultural Heritage Registry',
  'Ramsa Lab for Emirati Dialect Coding',
  'National Tourism Program',
  'National Framework for Integrating National Identity into Emirati Hospitality',
  'Governance structure with National Identity Index',
]

export const coreValues = [
  'Respect and humility',
  'Ambition and perseverance',
  'Belonging and responsibility',
  'Cohesion and coexistence',
  'Generosity and humanity',
]

export const coreElements = [
  'Islamic values and ethics',
  'Arabic language and Emirati dialect',
  'The Union and homeland',
  'Heritage, customs, and traditions',
  'History, geography, and collective memory',
  'The Emirati family',
]

export interface WeddingTradition {
  tradition: string
  traditionalPractice: string
  modernEvolution: string
}

export const weddingEvolution = [
  { tradition: 'Venue', traditionalPractice: 'Tent/Private home', modernEvolution: 'Lavish halls, bespoke settings' },
  { tradition: 'Henna Night', traditionalPractice: 'Intricate designs', modernEvolution: 'Eco-friendly, reusable decor' },
  { tradition: 'Catering', traditionalPractice: 'Lamb Machboos, Luqaimat', modernEvolution: 'Farm-to-table, gourmet, vegan options' },
  { tradition: 'Entertainment', traditionalPractice: 'Al Ayala dance', modernEvolution: 'DJs, LED shows, immersive lighting' },
  { tradition: 'Fashion', traditionalPractice: 'Embroidered Thobe', modernEvolution: 'Custom couture, Arabic calligraphy, Swarovski' },
  { tradition: 'Invitations', traditionalPractice: 'Paper', modernEvolution: 'Digital invitations' },
  { tradition: 'Photography', traditionalPractice: 'Limited', modernEvolution: 'Heritage-themed sessions' },
  { tradition: 'Duration', traditionalPractice: 'All-day/multi-day', modernEvolution: '3-hour afternoon (Medeem)' },
]

export interface UnescosHeritageSite {
  site: string
  yearInscribed: number
  location: string
}

export const uaeHeritageSites = [
  { site: 'Cultural Sites of Al Ain', yearInscribed: 2011, location: 'Al Ain' },
  { site: 'Al Faya site', yearInscribed: 0, location: 'Sharjah' },
]

export interface CulturalPolicyEvent {
  year: string
  initiative: string
  description: string
}

export const culturalPolicyTimeline = [
  { year: '1971', initiative: 'UAE Formation', description: 'Federation established December 2' },
  { year: '2014', initiative: 'National Service', description: 'Mandatory for males 18-30' },
  { year: '2019', initiative: 'Year of Tolerance', description: 'Global example positioning' },
  { year: '2021', initiative: '$6B Culture Plan', description: 'Five-year culture/creative sector' },
  { year: '2021-2022', initiative: 'Expo 2020', description: 'First MEASA region Expo' },
  { year: '2022', initiative: 'President Succession', description: 'Sheikh Mohammed bin Zayed' },
  { year: '2023', initiative: 'Year of Sustainability', description: 'COP28 alignment' },
  { year: '2024', initiative: 'National Identity Mark', description: 'Private schools rating' },
  { year: '2024', initiative: 'Medeem Model', description: 'Wedding guidelines' },
  { year: '2025', initiative: 'Year of Community', description: '"Hand in Hand" theme' },
  { year: '2025', initiative: 'Arabic Mandatory KG', description: '40-min daily lessons' },
  { year: '2025', initiative: 'Emirati Identity Strategy', description: '13 key initiatives' },
  { year: '2025', initiative: 'Disneyland Abu Dhabi', description: 'Disney-Miral partnership' },
  { year: '2025', initiative: 'Zayed National Museum', description: 'Opens December 3' },
  { year: '2026', initiative: 'Year of the Family', description: 'Family pillar reinforcement' },
  { year: '2026', initiative: 'Guggenheim Abu Dhabi', description: 'Scheduled opening' },
  { year: '2026', initiative: 'Arabic 300 min/week', description: 'Primary schools' },
]

// ============================================================================
// CULTURAL EVOLUTION ENRICHED DATA (ADDITIONAL FROM MD 10-6)
// ============================================================================

// Source Credibility Matrix (Part V from MD)
export interface SourceCredibilityEntry {
  url: string
  sourceName: string
  tier: TierLevel
  dataTypes: string
  crossVerificationStatus: string
}

export const culturalSourceCredibilityMatrix: SourceCredibilityEntry[] = [
  { url: 'bti-project.org/en/reports/country-report/ARE', sourceName: 'BTI Project', tier: 1 as TierLevel, dataTypes: 'Demographics, policy, economics', crossVerificationStatus: 'Verified against UAE Portal' },
  { url: 'u.ae/en/about-the-uae/culture/tolerance', sourceName: 'UAE Government Portal', tier: 1 as TierLevel, dataTypes: 'Tolerance, policy, initiatives', crossVerificationStatus: 'Primary source' },
  { url: 'agsi.org/analysis/abu-dhabis-big-bid-on-culture', sourceName: 'AGSI', tier: 2 as TierLevel, dataTypes: 'Investment, museums, strategy', crossVerificationStatus: 'Verified against Media Office' },
  { url: 'blooloop.com/abu-dhabi-cultural-future', sourceName: 'Blooloop', tier: 2 as TierLevel, dataTypes: 'Museums, visitor numbers', crossVerificationStatus: 'Cross-checked with AGSI' },
  { url: 'semafor.com/article/06/25/2025', sourceName: 'Semafor', tier: 2 as TierLevel, dataTypes: 'Arabic education policy', crossVerificationStatus: 'Verified against Gulf Time' },
  { url: 'gulfnews.com', sourceName: 'Gulf News', tier: 2 as TierLevel, dataTypes: 'Youth, fashion, culture', crossVerificationStatus: 'Multiple verifications' },
  { url: 'khaleejtimes.com', sourceName: 'Khaleej Times', tier: 2 as TierLevel, dataTypes: 'Policy, trends, events', crossVerificationStatus: 'Official briefings' },
  { url: 'reuters.com', sourceName: 'Reuters', tier: 2 as TierLevel, dataTypes: 'AI models, major announcements', crossVerificationStatus: 'Primary wire service' },
  { url: 'wikipedia.org', sourceName: 'Wikipedia', tier: 2 as TierLevel, dataTypes: 'Historical facts, Expo data', crossVerificationStatus: 'Requires verification' },
  { url: 'yougov.com', sourceName: 'YouGov', tier: 2 as TierLevel, dataTypes: 'Consumer research, dining trends', crossVerificationStatus: 'Proprietary methodology' },
  { url: 'theworlds50best.com', sourceName: 'Worlds 50 Best', tier: 3 as TierLevel, dataTypes: 'Restaurants, culinary', crossVerificationStatus: 'Industry authority' },
  { url: 'moc.gov.ae', sourceName: 'Ministry of Culture', tier: 1 as TierLevel, dataTypes: 'Heritage, UNESCO policy', crossVerificationStatus: 'Primary source' },
  { url: 'wam.ae', sourceName: 'Emirates News Agency', tier: 1 as TierLevel, dataTypes: 'Official announcements', crossVerificationStatus: 'Government source' },
  { url: 'deloitte.com', sourceName: 'Deloitte', tier: 2 as TierLevel, dataTypes: 'Youth research, Gen Z', crossVerificationStatus: 'Professional services' },
  { url: 'pmc.ncbi.nlm.nih.gov', sourceName: 'PubMed Central', tier: 2 as TierLevel, dataTypes: 'Academic research', crossVerificationStatus: 'Peer-reviewed' },
  { url: 'sandytimes.ae', sourceName: 'Sands Times', tier: 3 as TierLevel, dataTypes: 'Fashion industry', crossVerificationStatus: 'Industry coverage' },
  { url: 'mefcc.com', sourceName: 'MEFCC', tier: 3 as TierLevel, dataTypes: 'Event details', crossVerificationStatus: 'Primary event source' },
  { url: 'propertystellar.com', sourceName: 'Property Stellar', tier: 3 as TierLevel, dataTypes: 'Wedding trends', crossVerificationStatus: 'Industry publication' },
  { url: 'lofficielarabia.com', sourceName: "L'Officiel Arabia", tier: 3 as TierLevel, dataTypes: 'Pop culture, fashion', crossVerificationStatus: 'Fashion authority' },
  { url: 'truffleculture.com', sourceName: 'Truffle Culture', tier: 3 as TierLevel, dataTypes: 'Disney analysis', crossVerificationStatus: 'Commentary' },
]

// Extended Source Credibility Assessment (Part III from MD)
export interface SourceCredibilityAssessment {
  sourceType: string
  avgSentiment: number
  credibility: string
  reliability: string
  notes: string
}

export const culturalSourceCredibilityAssessment: SourceCredibilityAssessment[] = [
  { sourceType: 'Government/Official', avgSentiment: 0.82, credibility: 'Tier 1', reliability: 'Very High', notes: 'UAE Portal, WAM, Ministry sources' },
  { sourceType: 'Academic/Research', avgSentiment: 0.65, credibility: 'Tier 2', reliability: 'High', notes: 'PMC, Routledge, Sage Journals' },
  { sourceType: 'Media (International)', avgSentiment: 0.48, credibility: 'Tier 2', reliability: 'Medium-High', notes: 'Reuters, Euronews, Wikipedia' },
  { sourceType: 'Media (Regional)', avgSentiment: 0.61, credibility: 'Tier 2', reliability: 'Medium', notes: 'Khaleej Times, Gulf News, Semafor' },
  { sourceType: 'Industry/Trade', avgSentiment: 0.58, credibility: 'Tier 3', reliability: 'Medium', notes: 'Blooloop, MEFCC, Worlds50Best' },
  { sourceType: 'Commercial/Brand', avgSentiment: 0.55, credibility: 'Tier 3', reliability: 'Medium', notes: 'Company websites, fashion blogs' },
  { sourceType: 'User-Generated', avgSentiment: 0.52, credibility: 'Tier 4', reliability: 'Low-Medium', notes: 'Reviews, personal blogs' },
]

// UAE Relevance Classification (Part IV from MD)
export interface UAERelevanceDataPoint {
  dataPoint: string
  relevance: 'Critical' | 'High' | 'Medium' | 'Low'
  rationale: string
}

export const culturalUAERelevanceDataPoints: UAERelevanceDataPoint[] = [
  { dataPoint: 'Emirati population (11%)', relevance: 'Critical', rationale: 'Core demographic fact' },
  { dataPoint: '200+ nationalities', relevance: 'Critical', rationale: 'Foundation of multicultural policy' },
  { dataPoint: 'Arabic mandatory KG (40 min)', relevance: 'Critical', rationale: 'National language policy' },
  { dataPoint: '$6B culture plan', relevance: 'Critical', rationale: 'Strategic national investment' },
  { dataPoint: '10% Emiratisation target', relevance: 'Critical', rationale: 'Labor market nationalization' },
  { dataPoint: 'Disneyland Abu Dhabi', relevance: 'High', rationale: 'Cultural commodification debate' },
  { dataPoint: '$311B modest fashion', relevance: 'High', rationale: 'Economic sector growth' },
  { dataPoint: '6.8M mosque visitors', relevance: 'High', rationale: 'Soft power metric' },
  { dataPoint: 'Gen Z linguistic behavior', relevance: 'Critical', rationale: 'Identity preservation research' },
  { dataPoint: 'Al Ramsa Institute', relevance: 'High', rationale: 'Dialect preservation initiative' },
  { dataPoint: 'Medeem wedding model', relevance: 'High', rationale: 'Cultural policy for families' },
  { dataPoint: '152,000 Emiratis employed', relevance: 'Critical', rationale: 'Emiratisation outcome metric' },
  { dataPoint: 'Expo 2020 $42B impact', relevance: 'High', rationale: 'Economic legacy measurement' },
  { dataPoint: 'Dubai 79% hotel occupancy', relevance: 'Medium', rationale: 'Tourism performance indicator' },
  { dataPoint: 'Shehna Hussain Paris FW', relevance: 'Medium', rationale: 'Global cultural recognition' },
]

// Government Entities Registry (Appendix A from MD)
export interface CulturalGovernmentEntity {
  entity: string
  function: string
  keyInitiatives: string
  credibility: string
}

export const culturalGovernmentEntities: CulturalGovernmentEntity[] = [
  { entity: 'Ministry of Culture', function: 'Cultural policy', keyInitiatives: 'National Identity Strategy, Heritage Law', credibility: 'Tier 1' },
  { entity: 'Ministry of Education', function: 'Arabic education', keyInitiatives: 'Mandatory KG Arabic, curriculum reforms', credibility: 'Tier 1' },
  { entity: 'Ministry of Tolerance', function: 'Interfaith/multicultural', keyInitiatives: 'Year of Tolerance, 2019', credibility: 'Tier 1' },
  { entity: 'Department of Culture and Tourism (Abu Dhabi)', function: 'Museum development', keyInitiatives: 'Saadiyat District, $6B plan', credibility: 'Tier 1' },
  { entity: 'Miral', function: 'Yas Island development', keyInitiatives: 'Disneyland Abu Dhabi partnership', credibility: 'Tier 2' },
  { entity: 'National Archives of UAE', function: 'Heritage preservation', keyInitiatives: 'Document digitization', credibility: 'Tier 1' },
  { entity: 'Mohammed Bin Rashid Library', function: 'Knowledge preservation', keyInitiatives: 'Digital archives', credibility: 'Tier 2' },
  { entity: 'Al Ramsa Institute', function: 'Dialect preservation', keyInitiatives: '1,200+ students taught', credibility: 'Tier 3' },
]

// Museums Registry (Saadiyat District - from MD)
export interface MuseumRegistry {
  museum: string
  architect: string
  openingDate: string
  focus: string
}

export const culturalMuseumsRegistry: MuseumRegistry[] = [
  { museum: 'Louvre Abu Dhabi', architect: 'Jean Nouvel', openingDate: '2017', focus: 'Universal art' },
  { museum: 'Zayed National Museum', architect: 'Foster + Partners', openingDate: 'Dec 2025', focus: 'UAE history' },
  { museum: 'Guggenheim Abu Dhabi', architect: 'Frank Gehry', openingDate: '2026', focus: 'Modern art' },
  { museum: 'Natural History Museum', architect: 'Mecanoo', openingDate: 'Nov 2025', focus: 'Natural sciences' },
  { museum: 'teamLab Phenomena', architect: 'teamLab', openingDate: 'Apr 2025', focus: 'Digital art' },
  { museum: 'Al Maqtaa Museum', architect: '-', openingDate: 'Apr 2025', focus: 'Historic fort' },
  { museum: 'Al Ain Museum', architect: '-', openingDate: 'Oct 2025', focus: 'Heritage' },
]

// Heritage Sites (UNESCO - from MD)
export const culturalUnescoHeritageSites: UnescosHeritageSite[] = [
  { site: 'Cultural Sites of Al Ain', yearInscribed: 2011, location: 'Al Ain' },
  { site: 'Al Faya site', yearInscribed: 0, location: 'Sharjah' },
]

// Academic Research Findings (Part VIII from MD)
export interface AcademicResearchFinding {
  title: string
  source: string
  citation: string
  methodology: string
  keyFindings: string[]
  assessment: string
}

export const culturalAcademicResearch: AcademicResearchFinding[] = [
  {
    title: "Theme Park Arabism: Disneyfying the UAE's heritage",
    source: 'Monash University Research',
    citation: "Theme Park Arabism: Disneyfying the UAE's heritage for Western tourist consumption (2021)",
    methodology: 'Critical discourse analysis',
    keyFindings: [
      'Abu Dhabi and Dubai market themselves as global tourism hubs by leveraging Arab heritage',
      'Cities transformed from "pearling and trading backwaters" into "Disneyfied cityscapes"',
      'Heritage revival appears "counter to the city-states\' pre-existing development strategies"',
      'Revival efforts "sanitised and commodified for Western tourist consumption"',
      'Tourists consume a "Disneyfied Arab tourism product, packaged as heritage, but reinvented to suit the theme park character"',
    ],
    assessment: 'Critical academic perspective on heritage commodification tensions',
  },
  {
    title: 'Generation Z Linguistic Behavior Study',
    source: 'PMC/PubMed Central (PMC12356091)',
    citation: 'PMC12356091 (2024)',
    methodology: '200 Emirati youth surveyed in Ajman, 46.5% aged 18-22, 33% aged 23-26, 61% male, 39% female, 59% undergraduate, 69% urban',
    keyFindings: [
      'Arabic language positively affects socio-cultural identity: β = 0.748 (p < 0.001)',
      'Arabic positively affects family values: β = 0.539 (p < 0.001)',
      'Model explains 55.9% variance in socio-cultural identity',
      'Model explains 59.0% variance in family values',
      "Youth recognize Arabic's role in: commitment, humility, unity, social stability, community participation",
    ],
    assessment: "Rigorous academic validation of Arabic's role in identity formation",
  },
  {
    title: 'Cultural Preservation Through Technology',
    source: 'Emerald/Library Hi Tech News (2024)',
    citation: 'Emerald/Library Hi Tech News (2024)',
    methodology: 'Review of UAE digital preservation initiatives',
    keyFindings: [
      'Key technologies: AI/ML, 3D imaging, electronic archiving, document management, ICT storage',
      'Institutions: National Archives of the UAE, Arabian Gulf Digital Archive, Mohammed Bin Rashid Library, UAE National Library and Archives, NYU Abu Dhabi, Khalifa University',
      '"Multiple UAE libraries rely heavily on technology to collect, record, translate and store cultural heritage information"',
    ],
    assessment: 'Documents systematic approach to digital preservation',
  },
]

// Arabic Language Education Policy Timeline (Part IX from MD)
export interface ArabicEducationPolicyEvent {
  year: string
  policy: string
  implementation: string
}

export const arabicLanguageEducationPolicy: ArabicEducationPolicyEvent[] = [
  { year: '2023', policy: 'National Identity Mark', implementation: 'Abu Dhabi private schools' },
  { year: 'June 2025', policy: 'Mandatory KG Arabic', implementation: 'All private kindergartens' },
  { year: '2025-2026', policy: '200 min/week primary', implementation: 'Private schools' },
  { year: '2027-2028', policy: '300 min/week primary', implementation: 'Private schools' },
  { year: '2025', policy: 'Assessment from Grade 1', implementation: 'Government schools' },
  { year: '2025', policy: 'New teacher hiring criteria', implementation: 'Emphasizes UAE culture fit' },
]

// Major Cultural Events 2024-2026 (Part X from MD)
export interface MajorCulturalEvent {
  event: string
  dates: string
  location: string
  attendanceNotes?: string
}

export const culturalMajorEvents: MajorCulturalEvent[] = [
  { event: 'Sheikh Zayed Festival', dates: 'Nov 2024-Jan 2025', location: 'Abu Dhabi', attendanceNotes: 'Heritage celebration' },
  { event: 'Liwa International Festival', dates: 'Dec 2024-Jan 2025', location: 'Liwa', attendanceNotes: 'Heritage focus' },
  { event: 'Abu Dhabi Culture Summit', dates: 'April 27-29, 2025', location: 'Abu Dhabi', attendanceNotes: '7th annual' },
  { event: 'MEFCC 2026', dates: 'Sept 11-13, 2026', location: 'ADNEC Abu Dhabi', attendanceNotes: '14th edition, 46,000+ expected' },
  { event: 'Zayed National Museum Opening', dates: 'Dec 3, 2025', location: 'Saadiyat', attendanceNotes: 'Grand opening' },
  { event: 'Guggenheim Opening', dates: '2026', location: 'Saadiyat', attendanceNotes: 'TBD date' },
]

// Source Citation Index (Part XI from MD)
export interface SourceCitation {
  number: number
  url: string
  tier: TierLevel
  topicCoverage: string
}

export const culturalSourceCitationIndex: SourceCitation[] = [
  { number: 1, url: 'bti-project.org/en/reports/country-report/ARE', tier: 1 as TierLevel, topicCoverage: 'Demographics, policy, economics' },
  { number: 2, url: 'u.ae/en/about-the-uae/culture/tolerance', tier: 1 as TierLevel, topicCoverage: 'Tolerance policy' },
  { number: 3, url: 'agsi.org/analysis/abu-dhabis-big-bid-on-culture', tier: 2 as TierLevel, topicCoverage: 'Culture investment' },
  { number: 4, url: 'blooloop.com/abu-dhabi-cultural-future', tier: 2 as TierLevel, topicCoverage: 'Museums, soft power' },
  { number: 5, url: 'zayednationalmuseum.ae/en', tier: 2 as TierLevel, topicCoverage: 'Museum details' },
  { number: 6, url: 'theworlds50best.com/stories/News/past-present-and-future-of-emirati-food.html', tier: 3 as TierLevel, topicCoverage: 'Emirati cuisine history' },
  { number: 7, url: 'truffleculture.com/disney-announces-disneyland-abu-dhabi', tier: 3 as TierLevel, topicCoverage: 'Disneyland analysis' },
  { number: 8, url: 'nyuad.nyu.edu/en/events/2025/april', tier: 2 as TierLevel, topicCoverage: 'Pop culture panel' },
  { number: 9, url: 'sandytimes.ae/articles/2768/how-fashion-in-uae', tier: 3 as TierLevel, topicCoverage: 'Fashion industry' },
  { number: 10, url: 'emerald.com/lhtn/article/41/8/6/1233089', tier: 2 as TierLevel, topicCoverage: 'Digital preservation' },
  { number: 11, url: 'gulfnews.com/friday/from-language-to-gaming', tier: 3 as TierLevel, topicCoverage: 'Youth innovators' },
  { number: 12, url: 'moc.gov.ae/en/news', tier: 1 as TierLevel, topicCoverage: 'Heritage policy' },
  { number: 13, url: 'khaleejtimes.com/uae/emirati-national-identity-strategy-launched', tier: 2 as TierLevel, topicCoverage: 'Identity strategy' },
  { number: 14, url: 'semafor.com/article/06/25/2025', tier: 2 as TierLevel, topicCoverage: 'Arabic education' },
  { number: 15, url: 'wikipedia.org/wiki/National_Day_(United_Arab_Emirates)', tier: 2 as TierLevel, topicCoverage: 'National Day history' },
  { number: 16, url: 'wam.ae/en/article/bl3ckwr', tier: 1 as TierLevel, topicCoverage: 'Mosque visitors' },
  { number: 17, url: 'middleeastbriefing.com/news/uae-emiratization-2026', tier: 2 as TierLevel, topicCoverage: 'Emiratisation policy' },
  { number: 18, url: 'yougov.com/articles/53254', tier: 2 as TierLevel, topicCoverage: 'Dining trends' },
  { number: 19, url: 'pmc.ncbi.nlm.nih.gov/articles/PMC12356091', tier: 2 as TierLevel, topicCoverage: 'Gen Z linguistics' },
  { number: 20, url: 'deloitte.com/middle-east/en/about/press-room', tier: 2 as TierLevel, topicCoverage: 'Youth priorities' },
  { number: 21, url: 'mefcc.com/home', tier: 3 as TierLevel, topicCoverage: 'Pop culture event' },
  { number: 22, url: 'nichemagazine.me/guggenheim-abu-dhabi-in-2026', tier: 3 as TierLevel, topicCoverage: 'Tourism impact' },
  { number: 23, url: 'reuters.com/world/middle-east/uae-launches-arabic-language-ai-model', tier: 2 as TierLevel, topicCoverage: 'AI language' },
  { number: 24, url: 'unesco.org/en/articles/sharjah-book-authority', tier: 2 as TierLevel, topicCoverage: 'Heritage digitization' },
  { number: 25, url: 'propertystellar.com/blog', tier: 3 as TierLevel, topicCoverage: 'Wedding evolution' },
]

// Additional Demographics Data from MD Part VII
export interface DemographicsDataPoint {
  dataPoint: string
  value: string
  date: string
  source: string
}

export const culturalDemographicsExtended: DemographicsDataPoint[] = [
  { dataPoint: 'Total population', value: '10.7 million', date: '2023', source: 'BTI Project' },
  { dataPoint: 'Emirati nationals', value: '~1.5 million (11%)', date: '2023', source: 'BTI Project' },
  { dataPoint: 'Expatriates', value: '~89%', date: '2023', source: 'BTI Project' },
  { dataPoint: 'Nationalities represented', value: '200+', date: 'Current', source: 'UAE Portal' },
  { dataPoint: 'Abu Dhabi population', value: '4 million+', date: 'June 2025', source: 'AGSI' },
  { dataPoint: 'Population growth (2024)', value: '7.5%', date: '2024', source: 'AGSI' },
  { dataPoint: 'Decade growth', value: '50%+', date: '2015-2025', source: 'AGSI' },
]

// Additional Economic Data from MD Part VII
export const culturalEconomicExtended: DemographicsDataPoint[] = [
  { dataPoint: 'GDP per capita', value: '$50,000+', date: '2023', source: 'BTI Project' },
  { dataPoint: 'Non-oil sectors GDP', value: '70%', date: '2023', source: 'BTI Project' },
  { dataPoint: 'FDI inflows', value: '$30.7 billion', date: '2023', source: 'BTI Project' },
  { dataPoint: 'Culture plan investment', value: '$6 billion', date: '2021-2026', source: 'AGSI' },
  { dataPoint: 'Prior culture investment', value: '$2.3 billion', date: 'Pre-2021', source: 'AGSI' },
  { dataPoint: 'Al Maryah Island expansion', value: '$16.3 billion', date: 'Dec 2025', source: 'AGSI' },
  { dataPoint: 'Modest fashion market (2024)', value: '$311B (1.1T AED)', date: '2024', source: 'Sands Times' },
  { dataPoint: 'Modest fashion projection', value: '$428B', date: '2027', source: 'Sands Times' },
  { dataPoint: 'Expo 2020 economic impact', value: '$42.2B (Dh154.9B)', date: '2013-2042', source: 'Wikipedia' },
  { dataPoint: 'Social budget (2024)', value: '42% of budget', date: '2024', source: 'BTI Project' },
  { dataPoint: 'Federal budget (2025)', value: '$19.47 billion', date: '2025', source: 'BTI Project' },
  { dataPoint: 'Social spending (2025)', value: '40% of federal', date: '2025', source: 'BTI Project' },
]

// Language & Education Extended Data from MD Part VII
export const culturalLanguageExtended: DemographicsDataPoint[] = [
  { dataPoint: 'Arabic speakers (global)', value: '420+ million', date: 'Current', source: 'Youngausint' },
  { dataPoint: 'Emirati Arabic speakers', value: '3.7 million', date: '2020', source: 'Wikipedia' },
  { dataPoint: 'KG Arabic lesson', value: '40 min/day', date: '2025-2026', source: 'Semafor' },
  { dataPoint: 'Primary Arabic (initial)', value: '200 min/week', date: '2025-2026', source: 'Gulf Time' },
  { dataPoint: 'Primary Arabic (2027+)', value: '300 min/week', date: '2027-2028', source: 'Gulf Time' },
  { dataPoint: 'New schools (2025)', value: '9 schools, 25,000+ pupils', date: '2025', source: 'The National' },
  { dataPoint: 'New teachers (2025)', value: '800', date: '2025', source: 'The National' },
  { dataPoint: 'Textbooks printed', value: '10 million+', date: '2025', source: 'The National' },
  { dataPoint: 'Laptops distributed', value: '47,000', date: '2025', source: 'The National' },
  { dataPoint: 'Educators training', value: '23,000+ (170 hrs)', date: '2025', source: 'The National' },
  { dataPoint: 'Gen Z Arabic impact (β)', value: '0.748 (p<0.001)', date: '2024', source: 'PMC Study' },
  { dataPoint: 'Arabic → Family values (β)', value: '0.539 (p<0.001)', date: '2024', source: 'PMC Study' },
]

// Employment Extended Data from MD Part VII
export const culturalEmploymentExtended: DemographicsDataPoint[] = [
  { dataPoint: 'Emiratisation target', value: '10%', date: '2026', source: 'ME Briefing' },
  { dataPoint: 'Current Emiratis employed', value: '152,000+', date: 'June 2025', source: 'ME Briefing' },
  { dataPoint: 'Private companies with Emiratis', value: '29,000', date: 'June 2025', source: 'ME Briefing' },
  { dataPoint: 'Minimum wage (Emiratis)', value: 'AED 6,000/month', date: 'Jan 2026', source: 'ME Briefing' },
  { dataPoint: 'Non-compliance fine', value: 'AED 6,000/month', date: '2026', source: 'ME Briefing' },
  { dataPoint: '2024: 20-49 workers', value: '1 Emirati minimum', date: 'End 2024', source: 'ME Briefing' },
  { dataPoint: '2025: 20-49 workers', value: '2 Emiratis minimum', date: 'End 2025', source: 'ME Briefing' },
]

// Visitor Metrics Extended Data from MD Part VII
export const culturalVisitorsExtended: DemographicsDataPoint[] = [
  { dataPoint: 'Sheikh Zayed Mosque (2025)', value: '6,846,723', date: '2025', source: 'WAM/SZGMC' },
  { dataPoint: 'Year-over-year growth', value: '+4%', date: '2025', source: 'WAM/SZGMC' },
  { dataPoint: 'Global ranking (mosque)', value: '1st ME, 8th global', date: '2025', source: 'WAM' },
  { dataPoint: 'Expo 2020 visitors', value: '25 million', date: '2021-2022', source: 'Wikipedia' },
  { dataPoint: 'Abu Dhabi hotel guests (2024)', value: '5.8 million', date: '2024', source: 'Nichemagazine' },
  { dataPoint: 'Hotel occupancy rate', value: '79%', date: '2024', source: 'Nichemagazine' },
  { dataPoint: 'Summer 2025 hotel guests', value: '2.04 million', date: 'Summer 2025', source: 'Nichemagazine' },
]

// Youth & Innovation Extended Data from MD Part VII
export const culturalYouthExtended: DemographicsDataPoint[] = [
  { dataPoint: 'Al Ramsa Institute students', value: '1,200+', date: 'Current', source: 'Gulf News' },
  { dataPoint: 'Organ transplants (since 2016)', value: '1,000+', date: '2016-2024', source: 'Gulf News' },
  { dataPoint: 'Organ donors', value: '400+', date: '2016-2024', source: 'Gulf News' },
  { dataPoint: 'Gaming: Camel Racing players', value: '100,000', date: '37 days', source: 'Gulf News' },
  { dataPoint: 'Gaming: Avg session', value: '29 minutes', date: 'Launch', source: 'Gulf News' },
  { dataPoint: 'Chess: Rouda Alserkal age', value: '15 (GM achieved)', date: '2024', source: 'Gulf News' },
  { dataPoint: 'Gen Z GenAI concern', value: '74-77%', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Gen Z financial insecurity', value: '48%', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Millennials financial insecurity', value: '46%', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Purpose important (Gen Z)', value: '89%', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Purpose important (Millennials)', value: '92%', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Soft skills > technical', value: '80%+', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'Middle East youth (<30)', value: '60%+', date: 'Current', source: 'Deloitte' },
  { dataPoint: 'UAE youth (15-35)', value: '~50%', date: 'Current', source: 'Deloitte' },
]

// Cultural Institutions Extended Data from MD Part VII
export interface CulturalInstitutionExtended {
  institution: string
  openingDate: string
  collectionPieces: string
  source: string
}

export const culturalInstitutionsExtended: CulturalInstitutionExtended[] = [
  { institution: 'Louvre Abu Dhabi', openingDate: '2017', collectionPieces: 'Permanent + rotating', source: 'AGSI' },
  { institution: 'Zayed National Museum', openingDate: 'Dec 3, 2025', collectionPieces: '3,000+ (1,500 shown)', source: 'Zayed Museum' },
  { institution: 'Guggenheim Abu Dhabi', openingDate: '2026', collectionPieces: 'Modern/contemporary', source: 'Nichemagazine' },
  { institution: 'teamLab Phenomena', openingDate: 'Apr 2025', collectionPieces: 'Digital art', source: 'AGSI' },
  { institution: 'Natural History Museum', openingDate: 'Nov 2025', collectionPieces: "Earth's story", source: 'AGSI' },
  { institution: 'Al Maqtaa Museum', openingDate: 'Apr 2025', collectionPieces: 'Historic', source: 'AGSI' },
  { institution: 'Al Ain Museum', openingDate: 'Oct 2025', collectionPieces: 'Restored', source: 'AGSI' },
  { institution: 'Saadiyat district museums', openingDate: '7 planned', collectionPieces: 'Various', source: 'AGSI' },
  { institution: '421 Arts Campus practitioners', openingDate: '1,500+', collectionPieces: '10 years', source: 'AGSI' },
]

// ============================================================================
// REGULATORY TRENDS (10-7) - ENRICHED FROM MD FILE 10-7 (100% MD content)
// ============================================================================

// --------------------------------------------------------------------------
// REGULATORY TRENDS TYPES
// --------------------------------------------------------------------------

export interface RegulatoryBody {
  entity: string
  acronym: string
  jurisdiction: 'Federal' | 'Dubai' | 'Abu Dhabi' | 'Free Zone'
  role: string
}

export interface KeyLegislation {
  lawName: string
  number: string
  effectiveDate: string
  category: string
  status: 'Active' | 'Pending' | 'Upcoming'
}

export interface FineAmount {
  id: string
  regulation: string
  minFine: number
  maxFine: number
  currency: string
  repeatMultiplier?: number
  notes: string
}

export interface ThresholdValue {
  id: string
  threshold: string
  value: number
  unit: string
  category: string
}

export interface TimelineEvent {
  id: string
  event: string
  date: string
  status: 'Passed' | 'Upcoming' | 'Anticipated'
}

export interface KPIDashboard {
  kpi: string
  currentValue: string
  targetThreshold?: string
  status: string
  trend: string
}

export interface SourceCredibility {
  source: string
  tier: TierLevel
  type: string
  url?: string
  reliabilityScore?: string
}

export interface SentimentTopic {
  topic: string
  overallSentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'POSITIVE-INNOVATION FOCUS' | 'VERY POSITIVE' | 'NEUTRAL-CAUTIOUS' | 'NEUTRAL (Transitioning from Voluntary to Mandatory)'
  sources: Array<{ source: string; sentiment: string; keyPhrases: string }>
  analysis: string
}

export interface UAERelevanceCategory {
  category: string
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  priority: 'High' | 'Medium' | 'Low'
  rationale: string
}

export interface UAERelevanceStakeholder {
  segment: string
  topRegulations: string[]
  relevance: string
}

export interface RegulatoryTrendSummary {
  trendName: string
  keyPoints: string[]
}

// --------------------------------------------------------------------------
// REGULATORY BODIES DATA
// --------------------------------------------------------------------------

export const regulatoryBodies: RegulatoryBody[] = [
  { entity: 'Ministry of Climate Change and Environment', acronym: 'MOCCAE', jurisdiction: 'Federal', role: 'Climate law oversight, MRV platform administration' },
  { entity: 'UAE Data Office', acronym: '-', jurisdiction: 'Federal', role: 'Data protection regulation, PDPL enforcement' },
  { entity: 'Securities and Commodities Authority', acronym: 'SCA', jurisdiction: 'Federal', role: 'Corporate securities oversight' },
  { entity: 'Central Bank of the UAE', acronym: 'CBUAE', jurisdiction: 'Federal', role: 'Financial institution climate risk oversight' },
  { entity: 'Dubai Economic Development', acronym: 'DET', jurisdiction: 'Dubai', role: 'Business licensing, free zone coordination' },
  { entity: 'Dubai International Financial Centre', acronym: 'DIFC', jurisdiction: 'Free Zone', role: 'Financial centre regulation, data protection' },
  { entity: 'Abu Dhabi Global Market', acronym: 'ADGM', jurisdiction: 'Free Zone', role: 'Financial centre regulation' },
  { entity: 'Artificial Intelligence and Advanced Technology Council', acronym: 'AIATC', jurisdiction: 'Federal', role: 'AI policy, research strategy, investment coordination' },
  { entity: 'Global Market for Financial Assets', acronym: 'GMRA', jurisdiction: 'Federal', role: 'Carbon credit trading oversight' },
  { entity: 'UAE Federal Customs Authority', acronym: '-', jurisdiction: 'Federal', role: 'Import/export compliance' },
]

// --------------------------------------------------------------------------
// KEY LEGISLATION DATA
// --------------------------------------------------------------------------

export const keyLegislation: KeyLegislation[] = [
  { lawName: 'Personal Data Protection Law', number: 'Federal Decree-Law No. 45 of 2021', effectiveDate: 'Jan 2, 2022', category: 'Data Protection', status: 'Active' },
  { lawName: 'Climate Change Reduction Law', number: 'Federal Decree-Law No. 11 of 2024', effectiveDate: 'May 30, 2025', category: 'Environmental', status: 'Active' },
  { lawName: 'Anti-Fronting Law Repeal', number: 'Federal Decree-Law No. 26 of 2024', effectiveDate: 'Sep 30, 2024', category: 'Deregulation', status: 'Active' },
  { lawName: 'New AML Law', number: 'Federal Decree-Law No. 10 of 2025', effectiveDate: 'Oct 14, 2025', category: 'Financial Crime', status: 'Active' },
  { lawName: 'Commercial Companies Law', number: 'Federal Decree-Law No. 32 of 2021', effectiveDate: 'Various', category: 'Corporate', status: 'Active' },
  { lawName: 'Companies Law Amendment', number: 'Federal Decree-Law No. 20 of 2025', effectiveDate: 'Jan 1, 2026', category: 'Corporate', status: 'Upcoming' },
  { lawName: 'Traffic Regulations', number: 'Federal Decree-Law No. 14 of 2024', effectiveDate: 'Mar 29, 2025', category: 'Transport', status: 'Active' },
  { lawName: 'Cabinet Resolution 67/2024', number: 'Cabinet Resolution No. 67 of 2024', effectiveDate: 'Dec 28, 2024', category: 'Environmental', status: 'Active' },
  { lawName: 'Bankruptcy Law', number: 'Cabinet Resolution No. 94 of 2024', effectiveDate: '2024', category: 'Corporate', status: 'Active' },
  { lawName: 'DIFC Data Protection Amendment', number: 'DIFC Amendment Law No. 1 of 2025', effectiveDate: 'Jul 15, 2025', category: 'Data Protection', status: 'Active' },
  { lawName: 'Dubai Resolution No. 11/2025', number: '-', effectiveDate: '2025', category: 'Business', status: 'Active' },
  { lawName: 'Domestic Minimum Top-Up Tax', number: 'Pillar Two / DMTT', effectiveDate: 'Jan 1, 2025', category: 'Tax', status: 'Active' },
  { lawName: 'CBUAE Climate Risk Regulation', number: 'Circular No. 8/2025', effectiveDate: 'Jul 8, 2025', category: 'Environmental', status: 'Active' },
  { lawName: 'DIFC Digital Assets Law', number: '-', effectiveDate: 'Mar 8, 2024', category: 'Digital Assets', status: 'Active' },
]

// --------------------------------------------------------------------------
// FINE AMOUNTS DATA
// --------------------------------------------------------------------------

export const fineAmounts: FineAmount[] = [
  { id: 'F001', regulation: 'Federal PDPL', minFine: 50000, maxFine: 5000000, currency: 'AED', notes: 'Administrative fines' },
  { id: 'F002', regulation: 'Climate Law (First)', minFine: 50000, maxFine: 2000000, currency: 'AED', notes: 'Within 2 years' },
  { id: 'F003', regulation: 'Climate Law (Repeat)', minFine: 0, maxFine: 4000000, currency: 'AED', repeatMultiplier: 2, notes: '2x within 2 years' },
  { id: 'F004', regulation: 'Carbon Credit Registry', minFine: 0, maxFine: 1000000, currency: 'AED', notes: 'Non-registration/false reporting' },
  { id: 'F005', regulation: 'DIFC Annual Assessment', minFine: 0, maxFine: 25000, currency: 'USD', notes: 'Category-dependent' },
  { id: 'F006', regulation: 'DIFC DPIA', minFine: 0, maxFine: 50000, currency: 'USD', notes: 'Was USD 20,000, +150%' },
  { id: 'F007', regulation: 'DIFC Data Sharing', minFine: 0, maxFine: 50000, currency: 'USD', notes: 'Was USD 10,000, +400%' },
  { id: 'F008', regulation: 'Traffic Violations', minFine: 0, maxFine: 200000, currency: 'Dh', notes: 'Serious violations' },
  { id: 'F009', regulation: 'Health Insurance', minFine: 0, maxFine: 500, currency: 'AED/month', notes: 'Monthly fine for non-compliance' },
  { id: 'F010', regulation: 'GDPR (Comparison)', minFine: 0, maxFine: 1200000000, currency: 'EUR', notes: 'Record Meta fine' },
]

// --------------------------------------------------------------------------
// THRESHOLD VALUES DATA
// --------------------------------------------------------------------------

export const thresholdValues: ThresholdValue[] = [
  { id: 'T001', threshold: 'DMTT Revenue', value: 750000000, unit: 'EUR', category: 'Tax' },
  { id: 'T002', threshold: 'Corporate Tax Profit', value: 375000, unit: 'AED', category: 'Tax' },
  { id: 'T003', threshold: 'Large Emitter CO2', value: 500000, unit: 'Mt/year', category: 'Environmental' },
  { id: 'T004', threshold: 'Golden Visa Investment', value: 3000000, unit: 'AED', category: 'Immigration' },
  { id: 'T005', threshold: 'Work Week Employees', value: 50, unit: 'employees', category: 'Labor' },
  { id: 'T006', threshold: 'Emiratisation', value: 20, unit: 'employees', category: 'Labor' },
  { id: 'T007', threshold: 'Competition Notification', value: 300000000, unit: 'AED', category: 'Competition' },
  { id: 'T008', threshold: 'ADGM ESG Turnover', value: 68000000, unit: 'USD', category: 'ESG' },
  { id: 'T009', threshold: 'ADGM Fund Manager AUM', value: 6000000000, unit: 'USD', category: 'ESG' },
]

// --------------------------------------------------------------------------
// TIMELINE EVENTS DATA
// --------------------------------------------------------------------------

export const timelineEvents: TimelineEvent[] = [
  { id: 'T001', event: 'VAT Financial Services Update', date: 'Nov 15, 2024', status: 'Passed' },
  { id: 'T002', event: 'Carbon Credit Registry Effective', date: 'Dec 28, 2024', status: 'Passed' },
  { id: 'T003', event: 'DMTT Effective', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T004', event: 'Women on Boards Mandate', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T005', event: 'Emiratisation 20+ Employees', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T006', event: 'Alcohol Tax Dubai', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T007', event: 'Traffic Penalties Stricter', date: 'Mar 29, 2025', status: 'Passed' },
  { id: 'T008', event: 'Climate Law Force Date', date: 'May 30, 2025', status: 'Passed' },
  { id: 'T009', event: 'Large Emitter Registration', date: 'Jun 28, 2025', status: 'Passed' },
  { id: 'T010', event: 'DIFC Amendment Effective', date: 'Jul 15, 2025', status: 'Passed' },
  { id: 'T011', event: 'CBUAE Climate Risk Circular', date: 'Jul 8, 2025', status: 'Passed' },
  { id: 'T012', event: 'Golden Visa New Rules', date: 'Jul 1, 2025', status: 'Passed' },
  { id: 'T013', event: 'Health Insurance Mandatory', date: 'Jul 1, 2025', status: 'Passed' },
  { id: 'T014', event: 'E-Invoicing Large Enterprises', date: 'Jul 1, 2026', status: 'Upcoming' },
  { id: 'T015', event: 'Climate Law Full Compliance', date: 'May 30, 2026', status: 'Upcoming' },
  { id: 'T016', event: 'Companies Law Amendment', date: 'Jan 1, 2026', status: 'Passed' },
  { id: 'T017', event: 'E-Invoicing All Businesses', date: 'Jul 1, 2027', status: 'Upcoming' },
  { id: 'T018', event: 'Scope 3 Mandatory (Est.)', date: '2027', status: 'Anticipated' },
]

// --------------------------------------------------------------------------
// KPI DASHBOARD DATA
// --------------------------------------------------------------------------

export const kpiDashboard: KPIDashboard[] = [
  { kpi: 'FDI Ranking', currentValue: '2nd Globally', targetThreshold: '#1', status: '+', trend: 'Improving (+48%)' },
  { kpi: 'Investment Target', currentValue: '-', targetThreshold: 'AED 1.3 Trillion (6 years)', status: '-', trend: 'Target Set' },
  { kpi: 'Climate Law Fine Range (First)', currentValue: 'AED 50,000-2,000,000', status: 'Active', trend: 'New' },
  { kpi: 'Climate Law Fine Range (Repeat)', currentValue: 'Up to AED 4,000,000', status: 'Active', trend: 'New' },
  { kpi: 'PDPL Fine Range', currentValue: 'AED 50,000-5,000,000', status: 'Active', trend: 'Unchanged' },
  { kpi: 'DIFC DPIA Fine', currentValue: 'Up to USD 50,000', targetThreshold: 'Was USD 20,000', status: 'Increased', trend: '+150%' },
  { kpi: 'DIFC Data Sharing Fine', currentValue: 'Up to USD 50,000', targetThreshold: 'Was USD 10,000', status: 'Increased', trend: '+400%' },
  { kpi: 'GDPR Cumulative Fines', currentValue: 'EUR 5.88 Billion', status: 'Global', trend: 'Growing' },
  { kpi: 'Data Breach Cost (Middle East)', currentValue: '$8.75 Million', status: 'IBM 2024', trend: 'Baseline' },
  { kpi: 'Golden Visa Investment (Real Estate)', currentValue: 'AED 3,000,000', targetThreshold: 'Was AED 2,000,000', status: 'Increased', trend: '+50%' },
  { kpi: 'VAT Rate', currentValue: '5%', status: 'Stable', trend: 'Unchanged' },
  { kpi: 'Corporate Tax (Standard)', currentValue: '9% (on >AED 375K profit)', status: 'Active', trend: 'Unchanged' },
  { kpi: 'Corporate Tax (DMTT)', currentValue: '15%', targetThreshold: 'EUR 750M+ revenue', status: 'Active', trend: 'New' },
  { kpi: 'Emission Threshold (Mandatory)', currentValue: '>=0.5M Mt CO2/year', status: 'Active', trend: 'New' },
  { kpi: 'Work Week (Private 50+)', currentValue: '4.5 Days', status: 'Active', trend: 'Expanded' },
  { kpi: 'Rent Annual Increase Cap', currentValue: '5%', status: 'Active', trend: 'New' },
]

// --------------------------------------------------------------------------
// SOURCE CREDIBILITY MATRIX
// --------------------------------------------------------------------------

export const sourceCredibilityMatrix: SourceCredibility[] = [
  { source: 'UAE Government (u.ae)', tier: 0 as TierLevel, type: 'Official', url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws', reliabilityScore: '10/10' },
  { source: 'Chambers Practice Guides', tier: 1 as TierLevel, type: 'Legal Directory', url: 'https://practiceguides.chambers.com/practice-guides/doing-business-in-2025/uae/trends-and-developments', reliabilityScore: '9/10' },
  { source: 'Baker McKenzie / Global Compliance News', tier: 1 as TierLevel, type: 'BigLaw', url: 'https://www.globalcompliancenews.com/', reliabilityScore: '9/10' },
  { source: 'White & Case', tier: 1 as TierLevel, type: 'BigLaw', url: 'https://www.whitecase.com', reliabilityScore: '9/10' },
  { source: 'KPMG', tier: 1 as TierLevel, type: 'Big4', url: 'https://home.kpmg/ae', reliabilityScore: '9/10' },
  { source: 'Reed Smith', tier: 1 as TierLevel, type: 'BigLaw', url: 'https://www.reedsmith.com', reliabilityScore: '8/10' },
  { source: 'EY', tier: 1 as TierLevel, type: 'Big4', url: 'https://www.ey.com', reliabilityScore: '9/10' },
  { source: 'BSA Law', tier: 2 as TierLevel, type: 'Regional Law Firm', url: 'https://bsalaw.com', reliabilityScore: '7/10' },
  { source: 'CMS Law', tier: 2 as TierLevel, type: 'Global Law Firm', url: 'https://cms.law', reliabilityScore: '8/10' },
  { source: 'Meydan FZ', tier: 2 as TierLevel, type: 'Free Zone Authority', url: 'https://www.meydanfz.ae', reliabilityScore: '7/10' },
  { source: 'Cookie Script', tier: 3 as TierLevel, type: 'Compliance Tool', url: 'https://cookie-script.com', reliabilityScore: '6/10' },
  { source: 'Data Privacy Manager', tier: 3 as TierLevel, type: 'Privacy News', url: 'https://dataprivacymanager.net', reliabilityScore: '6/10' },
  { source: 'Zevero', tier: 3 as TierLevel, type: 'Climate Tech', url: 'https://www.zevero.earth', reliabilityScore: '6/10' },
  { source: 'GulfBridge Consulting', tier: 3 as TierLevel, type: 'Consulting', url: 'https://gulfbridge.ae', reliabilityScore: '6/10' },
  { source: 'Arthur Mackenzy', tier: 4 as TierLevel, type: 'Blog/News', url: 'https://arthurmackenzy.com', reliabilityScore: '4/10' },
  { source: 'Nooralayn Assets', tier: 4 as TierLevel, type: 'Company Blog', url: 'https://nooralaynassets.com', reliabilityScore: '4/10' },
]

// --------------------------------------------------------------------------
// SENTIMENT ANALYSIS BY TOPIC
// --------------------------------------------------------------------------

export const regulatorySentimentAnalysis: SentimentTopic[] = [
  {
    topic: 'UAE New Regulations',
    overallSentiment: 'POSITIVE',
    sources: [
      { source: 'BSA Law', sentiment: 'Positive', keyPhrases: '"milestones", "key reforms", "impact on business"' },
      { source: 'GulfBridge Consulting', sentiment: 'Positive', keyPhrases: '"cannot ignore", "opportunity", "major changes"' },
      { source: 'Chambers Guide', sentiment: 'Strongly Positive', keyPhrases: '"second place globally", "AED 1.3 trillion investment target"' },
      { source: 'White & Case', sentiment: 'Neutral-Factual', keyPhrases: '"stronger enforcement", "key changes"' },
    ],
    analysis: 'UAE presenting reforms as business opportunities. Emphasis on liberalization, investment attraction, and regulatory modernization.',
  },
  {
    topic: 'Deregulation/Liberalization',
    overallSentiment: 'VERY POSITIVE',
    sources: [
      { source: 'Chambers Guide', sentiment: 'Strongly Positive', keyPhrases: '"100% foreign ownership", "FDI 48% increase"' },
      { source: 'Reed Smith', sentiment: 'Positive', keyPhrases: '"greater contractual freedom", "modern governance tools"' },
      { source: 'Nooralayn Assets', sentiment: 'Strongly Positive', keyPhrases: '"unlocking opportunity", "redefining global investment"' },
      { source: 'BSA Law', sentiment: 'Positive', keyPhrases: '"repealed anti-fronting law", "liberalizing market entry"' },
    ],
    analysis: 'Strong narrative supporting UAE as open for business. FATF grey list removal highlighted as geopolitical validation.',
  },
  {
    topic: 'Data Protection Enforcement',
    overallSentiment: 'NEUTRAL-CAUTIOUS',
    sources: [
      { source: 'UAE Government', sentiment: 'Positive-Official', keyPhrases: '"data protection controls", "securing personal data"' },
      { source: 'Cookie Script', sentiment: 'Neutral-Informational', keyPhrases: '"AED 50,000 to AED 5 million" (fine range)' },
      { source: 'Meydan FZ', sentiment: 'Cautious', keyPhrases: '"average cost of data breach: $8.75 million"' },
      { source: 'Global Compliance News', sentiment: 'Alert', keyPhrases: '"increased fines", "private right of action"' },
    ],
    analysis: 'Growing enforcement seriousness. DIFC amendments signal stricter approach. International GDPR enforcement as warning.',
  },
  {
    topic: 'ESG Mandatory Reporting',
    overallSentiment: 'NEUTRAL (Transitioning from Voluntary to Mandatory)',
    sources: [
      { source: 'KPMG', sentiment: 'Neutral-Factual', keyPhrases: '"first comprehensive climate legislation"' },
      { source: 'LinkedIn Expert', sentiment: 'Cautious', keyPhrases: '"compliance", "deadline", "penalties"' },
      { source: 'Kayrouz and Associates', sentiment: 'Alert', keyPhrases: '"moved from voluntary to mandatory"' },
      { source: 'Zevero', sentiment: 'Urgent', keyPhrases: '"NOT automatically compliant", "must register on MRV platform"' },
    ],
    analysis: 'Strong regulatory push with strict deadlines. Penalties significant (AED 50,000-4,000,000). Compliance gap awareness growing.',
  },
  {
    topic: 'AI Regulation',
    overallSentiment: 'POSITIVE-INNOVATION FOCUS',
    sources: [
      { source: 'Nemko', sentiment: 'Positive', keyPhrases: '"first nation to use AI for law drafting"' },
      { source: 'CMS Law', sentiment: 'Positive', keyPhrases: '"aligned with international standards", "ethical AI"' },
      { source: 'IAPP', sentiment: 'Positive', keyPhrases: '"UAE AI Charter", "development and use of AI"' },
      { source: 'Chambers AI Guide', sentiment: 'Strongly Positive', keyPhrases: '"world\'s first AI-powered regulatory intelligence ecosystem"' },
    ],
    analysis: 'UAE positioning as AI governance leader. Focus on ethics, international alignment (OECD, UNESCO, ISO). Not rushing into restrictive regulation.',
  },
]

// --------------------------------------------------------------------------
// UAE RELEVANCE ASSESSMENT
// --------------------------------------------------------------------------

export const uaeRelevanceByCategory: UAERelevanceCategory[] = [
  { category: 'Climate Law (FDL 11/2024)', uaeRelevance: 'CRITICAL', priority: 'High', rationale: 'First comprehensive climate legislation, AED 50K-4M penalties' },
  { category: 'Corporate Tax (DMTT)', uaeRelevance: 'CRITICAL', priority: 'High', rationale: '15% for MNCs with EUR 750M+ revenue, effective Jan 2025' },
  { category: 'AML Law (FDL 10/2025)', uaeRelevance: 'CRITICAL', priority: 'High', rationale: 'Replaces 2018 law, stronger enforcement powers' },
  { category: 'Data Protection (PDPL)', uaeRelevance: 'HIGH', priority: 'Medium-High', rationale: 'AED 50K-5M fines, mandatory breach reporting' },
  { category: 'DIFC Data Protection Amendment', uaeRelevance: 'HIGH', priority: 'Medium-High', rationale: 'Increased fines up to USD 50K, private right of action' },
  { category: 'CBUAE Climate Risk Regulation', uaeRelevance: 'HIGH', priority: 'Medium', rationale: 'Binding for all financial institutions' },
  { category: 'E-Invoicing Mandate', uaeRelevance: 'HIGH', priority: 'High', rationale: 'Phased rollout July 2026-July 2027' },
  { category: 'Golden Visa Reforms', uaeRelevance: 'MEDIUM', priority: 'Medium', rationale: 'Investment threshold increase to AED 3M' },
  { category: 'Mandatory Health Insurance', uaeRelevance: 'MEDIUM', priority: 'Medium', rationale: 'Visa renewal bans for non-compliance' },
  { category: 'AI Governance', uaeRelevance: 'MEDIUM', priority: 'Medium', rationale: 'No dedicated law yet, federal strategy driven' },
  { category: 'ESG Reporting (Listed Companies)', uaeRelevance: 'HIGH', priority: 'High', rationale: 'Already mandatory for DFM/ADX listed' },
  { category: '4.5-Day Work Week', uaeRelevance: 'MEDIUM', priority: 'Low', rationale: 'Private sector expansion' },
  { category: 'Rent Cap Regulations', uaeRelevance: 'MEDIUM', priority: 'Low', rationale: '5% annual cap, 12-month notice' },
]

export const uaeRelevanceByStakeholder: UAERelevanceStakeholder[] = [
  { segment: 'Multinationals (Large)', topRegulations: ['1. DMTT 15% corporate tax', '2. Climate Law FDL 11/2024', '3. E-invoicing mandate'], relevance: 'CRITICAL' },
  { segment: 'Financial Institutions', topRegulations: ['1. CBUAE Climate Risk Circular 8/2025', '2. AML Law updates', '3. ESG reporting'], relevance: 'CRITICAL' },
  { segment: 'SME/Small Business', topRegulations: ['1. Health insurance mandate', '2. Rent cap', '3. 4.5-day work week'], relevance: 'HIGH' },
  { segment: 'Tech/AI Companies', topRegulations: ['1. AI governance framework', '2. Data protection compliance', '3. DIFC AI Regulation 10'], relevance: 'MEDIUM-HIGH' },
  { segment: 'Investors', topRegulations: ['1. Golden Visa changes', '2. 100% foreign ownership', '3. Free zone reforms'], relevance: 'HIGH' },
  { segment: 'Data-Heavy Companies', topRegulations: ['1. PDPL compliance', '2. DIFC amendments', '3. Breach reporting'], relevance: 'CRITICAL' },
]

// --------------------------------------------------------------------------
// KEY REGULATORY TRENDS SUMMARY
// --------------------------------------------------------------------------

export const regulatoryTrendsSummary: RegulatoryTrendSummary[] = [
  {
    trendName: 'New Regulations Trend',
    keyPoints: [
      'Major 2025 reforms: Climate law, AML law, corporate tax, updated traffic rules',
      'Visa/Immigration: Stricter Golden Visa criteria (AED 3M), expanded categories',
      'Business: E-invoicing mandate (Jul 2026/2027), company law reforms, 100% foreign ownership expansion',
      'Social: Mandatory health insurance, 4.5-day work week expansion, rent caps',
      'Financial: DMTT 15% for MNCs, increased alcohol taxes',
    ],
  },
  {
    trendName: 'Deregulation/Liberalization Trend',
    keyPoints: [
      'Repeal of anti-fronting law (FDL 26/2024)',
      'Free zone entities permitted to operate onshore Dubai with permit (Resolution 11/2025)',
      '100% foreign ownership in most mainland sectors',
      'Greater contractual freedom in commercial companies law',
      'FATF grey list removal (demonstrated AML/CFT commitment)',
      'Dubai: 2nd globally for FDI with 48% increase',
    ],
  },
  {
    trendName: 'Data Protection Enforcement Trend',
    keyPoints: [
      'UAE PDPL (2021) with GDPR-like provisions',
      'DIFC Amendment Law (July 2025) increased fines and added private right of action',
      'Fines range from AED 50,000 to AED 5 million (federal); up to USD 50,000 (DIFC)',
      'Growing alignment with international data protection standards',
      'Mandatory breach reporting to UAE Data Office',
      'Data breach cost in Middle East: $8.75 million (IBM 2024)',
    ],
  },
  {
    trendName: 'ESG Mandatory Reporting Trend',
    keyPoints: [
      'Federal Decree-Law No. 11 of 2024 effective May 30, 2025',
      'Cabinet Resolution 67 of 2024 established carbon credit registry',
      'Mandatory GHG emissions reporting (Scope 1 & 2) by May 30, 2026',
      'Scope 3 anticipated mandatory 2027',
      'Fines: AED 50,000 to AED 2,000,000 (first offense), up to AED 4,000,000 (repeat)',
      'Listed companies already subject to mandatory sustainability reporting',
      'CBUAE Climate Risk Regulation (Circular 8/2025) binding for financial institutions',
    ],
  },
  {
    trendName: 'AI Regulation Trend',
    keyPoints: [
      'No dedicated AI law yet; governance via existing frameworks',
      'UAE leads in using AI for law drafting (first globally, April 2025)',
      'Regulatory Intelligence Office established for AI-driven legal analysis',
      'Alignment with OECD AI Principles, UNESCO ethics, ISO 42001',
      'DIFC has most developed AI-specific regulation (Regulation 10)',
      'EU AI Act alignment not explicit but international standards shared',
      'Focus on ethics, transparency, accountability, human oversight',
      'UAE AI Charter (12 principles, June 2024) provides ethical framework',
    ],
  },
]

// --------------------------------------------------------------------------
// RESEARCH QUALITY ASSESSMENT
// --------------------------------------------------------------------------

export const researchQualityAssessment = {
  sourceDiversity: { score: 8, notes: 'Mix of BigLaw, Big4, government, consultancies, blogs' },
  temporalCoverage: { score: 9, notes: '2024-2026 data current' },
  geographicCoverage: { score: 10, notes: 'Federal + Dubai + Abu Dhabi + DIFC + ADGM' },
  topicCoverage: { score: 10, notes: 'New regs, deregulation, data protection, ESG, AI' },
  dataExtractability: { score: 7, notes: 'Some PDFs inaccessible (KPMG)' },
  crossVerification: { score: 8, notes: 'Multiple sources confirm key facts' },
  officialSources: { score: 7, notes: 'Good government coverage, some gaps' },
  completeness: { score: 8, notes: 'Comprehensive for covered topics' },
}

// --------------------------------------------------------------------------
// REGULATORY TRENDS DATA (UPDATED WITH MD CONTENT)
// --------------------------------------------------------------------------

export const regulatoryTrendsData: TrendAnalysis = {
  id: 'trend-10-7',
  category: 'regulatory',
  name: 'Regulatory Trends',
  description: 'The UAE regulatory environment in 2025-2026 is characterized by business-friendly reforms, enhanced enforcement, mandatory ESG/climate reporting, and modernization of corporate and financial laws. Key developments include Climate Law FDL 11/2024 (effective May 30, 2025), AML Law FDL 10/2025 (effective October 14, 2025), PDPL enforcement with AED 50K-5M fines, DIFC Data Protection Amendment (increased fines up to USD 50K), and CBUAE Climate Risk Circular 8/2025.',
  adoptionRate: 74,
  uaeAdoptionRate: 82,
  generationalBreakdown: {
    genZ: 58,
    millennial: 75,
    genX: 88,
    boomer: 85,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'Climate Law FDL 11/2024, AML Law FDL 10/2025, PDPL enforcement, CBUAE Climate Risk Circular 8/2025, E-invoicing mandate (Jul 2026/2027)',
    effectiveDate: '2025-05-30',
  },
  sentiment: {
    positive: 64,
    negative: 20,
    neutral: 16,
    overall: 0.58,
    volume: 28000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.78,
      timeline: '2026',
      indicators: ['FDI 2nd globally with 48% increase', 'E-invoicing mandate July 2026', '100% foreign ownership expanded'],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2026-2027',
      indicators: ['Climate law fines AED 50K-4M', 'PDPL fines AED 50K-5M', 'ESG mandatory reporting 2026'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.35,
      timeline: '2027-2028',
      indicators: ['Compliance burden on SMEs', 'EU CBAM impact 14% UAE exports', 'Scope 3 reporting anticipated 2027'],
    },
  ],
  keyDrivers: [
    'FDI ranking 2nd globally with $45B inflows (+48%)',
    'Climate Law FDL 11/2024 effective May 30, 2025 with AED 50K-4M fines',
    'Corporate Tax DMTT 15% for MNCs with EUR 750M+ revenue',
    'DIFC Data Protection increased fines up to USD 50K (+150% to +400%)',
    'E-invoicing mandatory: Large enterprises July 2026, all July 2027',
    'Anti-fronting law repeal (FDL 26/2024) enabling 100% foreign ownership',
    'DIFC Amendment Law No. 1/2025: private right of action added',
    'CBUAE Climate Risk Circular 8/2025 binding for financial institutions',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 25,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical' as const,
    justification: 'Regulatory changes directly impact business operations and compliance requirements across all sectors',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'UAE Government', tier: 0 as TierLevel, date: '2026-04-28' },
    { name: 'Chambers Practice Guides', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'Baker McKenzie', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'White & Case', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'KPMG', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'EY', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'Reed Smith', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'BSA Law', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'Cookie Script', tier: 3 as TierLevel, date: '2026-04-28' },
    { name: 'Zevero', tier: 3 as TierLevel, date: '2026-04-28' },
  ],
  lastUpdated: '2026-04-28',
}

// ============================================================================
// MEDIA INDUSTRY TRENDS (10-8) - ENRICHED FROM MD FILE
// ============================================================================

// Extended media industry sub-categories from MD file
export interface MediaStreamingMetrics {
  globalVideoStreamingMarket: number
  globalSVODRevenue: number
  globalSVODSubscriptions: number
  streamingShareOfTVUsage: number
  USCTVAdSpending: number
  USCTVAdSpendingGrowth: number
}

export interface MediaDigitalAdMetrics {
  globalDigitalAdSpending: number
  socialMediaAdSpending: number
  programmaticAdShare: number
  mobileAdShare: number
  searchAdvertising: number
  videoAdvertising: number
}

export interface MediaMusicMetrics {
  globalRecordedMusicRevenue: number
  revenueGrowth: number
  streamingRevenueShare: number
  paidStreamingSubscribers: number
  vinylGrowth: number
  menaGrowth: number
}

export interface MediaGamingMetrics {
  globalGamingMarket: number
  inGameAdvertising: number
  gamingEmployment: number
  gamingTrends: string[]
}

export interface MediaAIMetrics {
  aiInMediaMarket: number
  creatorsUsingGenAI: number
  aiGeneratedOnlineContentProjection: number
  fraudulentStreamsOnAIMusic: number
}

export interface MediaCreatorMetrics {
  creatorAdSpend: number
  microDramaRevenue: number
  youtubeLongFormShare: number
  mrBeastRevenue: number
}

export interface MediaIndustryExtendedData {
  streaming: MediaStreamingMetrics
  digitalAds: MediaDigitalAdMetrics
  music: MediaMusicMetrics
  gaming: MediaGamingMetrics
  ai: MediaAIMetrics
  creator: MediaCreatorMetrics
  globalEMarket: {
    size2026: number
    size2030: number
    cagr: number
  }
  podcast: {
    globalMarket: number
    listeners: number
    adSpend: number
    youTubeShare: number
  }
  keyTakeaways: {
    priority: number
    takeaway: string
    sentiment: string
    uaeRelevance: string
  }[]
}

export const mediaIndustryTrendsData: TrendAnalysis = {
  id: 'trend-10-8',
  category: 'media-industry',
  name: 'Media Industry Trends',
  description: 'The global media and entertainment industry continues its transformative trajectory in 2026, characterized by AI disruption, streaming maturation, creator economy evolution, and shifting consumption patterns with market projected to reach $3.08 trillion.',
  adoptionRate: 82,
  uaeAdoptionRate: 88,
  generationalBreakdown: {
    genZ: 95,
    millennial: 90,
    genX: 72,
    boomer: 45,
  },
  regulatoryStatus: {
    status: 'pending',
    description: 'UAE content licensing regulations, streaming platform compliance requirements',
    effectiveDate: '2026-09-01',
  },
  sentiment: {
    positive: 69,
    negative: 16,
    neutral: 15,
    overall: 0.65,
    volume: 78000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.75,
      timeline: '2026-2027',
      indicators: ['Global E&M market $3.08T (7.7% CAGR)', 'Streaming to surpass TV by 2028', 'CTV advertising $38B'],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2028',
      indicators: ['MENA region +15.2% growth', 'UAE gaming sector booming', 'Creator economy $37B+'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.28,
      timeline: '2028-2030',
      indicators: ['SVOD cancellation rate 39-41%', 'News confidence historic lows 28%', 'AI content concerns 90%'],
    },
  ],
  keyDrivers: [
    'Global E&M market $3.08 trillion with 7.7% CAGR through 2035',
    'UAE has 99%+ social media penetration, TikTok adoption highest in GCC',
    'Music industry $31.7B revenue (+6.4% YoY, 11th consecutive growth)',
    'Gaming market $300B+ globally, UAE gaming sector booming',
    'AI in media market projected $85.36B by 2034',
    'Global video streaming market $277.25B, SVOD revenue $98.37B',
    'Digital ad spending $854.9B (68.7% of total), mobile 65%',
    'Podcast market $39.63B with 27.2% CAGR, 619.2M listeners',
    'Creator ad spend ~$37B (+25% YoY), micro-drama $7.8B',
    'CTV ad spending $38B US (+14% YoY), streaming 46.7% of TV usage',
    'AI-generated content projected 90% of online content by 2026',
    'SVOD cancellation rate 39-41% every 6 months',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 88,
    sources: 24,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 92,
    level: 'critical' as const,
    justification: 'UAE leads in digital adoption with 99%+ social media penetration, highest TikTok usage in GCC, and booming gaming sector',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'Deloitte', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'PwC Global E&M Outlook', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'IFPI Global Music Report', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Nielsen', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'The Business Research Company', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Adwave', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Mordor Intelligence', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'SQ Magazine', tier: 3 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// Extended data export for detailed component usage
export const mediaIndustryExtendedData: MediaIndustryExtendedData = {
  globalEMarket: {
    size2026: 3080.52,
    size2030: 4146.36,
    cagr: 7.7,
  },
  streaming: {
    globalVideoStreamingMarket: 277.25,
    globalSVODRevenue: 98.37,
    globalSVODSubscriptions: 1500,
    streamingShareOfTVUsage: 46.7,
    USCTVAdSpending: 38,
    USCTVAdSpendingGrowth: 14,
  },
  digitalAds: {
    globalDigitalAdSpending: 854.9,
    socialMediaAdSpending: 219.8,
    programmaticAdShare: 80,
    mobileAdShare: 65,
    searchAdvertising: 362.3,
    videoAdvertising: 217.7,
  },
  music: {
    globalRecordedMusicRevenue: 31.7,
    revenueGrowth: 6.4,
    streamingRevenueShare: 69.6,
    paidStreamingSubscribers: 837,
    vinylGrowth: 13.7,
    menaGrowth: 15.2,
  },
  gaming: {
    globalGamingMarket: 300,
    inGameAdvertising: 131.03,
    gamingEmployment: 1300,
    gamingTrends: [
      'AI in Gameplay',
      'Hyper-Realistic Graphics',
      'Direct-to-Consumer Sales',
      'Cross-Platform Gaming',
      'Cloud Gaming',
      'Gaming IP as Mainstream Entertainment',
    ],
  },
  ai: {
    aiInMediaMarket: 85.36,
    creatorsUsingGenAI: 86,
    aiGeneratedOnlineContentProjection: 90,
    fraudulentStreamsOnAIMusic: 85,
  },
  creator: {
    creatorAdSpend: 37,
    microDramaRevenue: 7.8,
    youtubeLongFormShare: 47,
    mrBeastRevenue: 473,
  },
  podcast: {
    globalMarket: 39.63,
    listeners: 619.2,
    adSpend: 5,
    youTubeShare: 42,
  },
  keyTakeaways: [
    { priority: 1, takeaway: 'Streaming has won: 46.7% of TV usage, surpassing broadcast and cable', sentiment: 'Very Positive', uaeRelevance: 'High' },
    { priority: 2, takeaway: 'AI is unavoidable: 86% of creators using GenAI; 90% of online content may be AI-generated by 2026', sentiment: 'Mixed', uaeRelevance: 'Critical' },
    { priority: 3, takeaway: 'Creator economy matures: Creators own IP, build communities, participate in commerce', sentiment: 'Very Positive', uaeRelevance: 'Critical' },
    { priority: 4, takeaway: 'CTV advertising surges: $38B US CTV ad spending, growing 14% YoY', sentiment: 'Very Positive', uaeRelevance: 'High' },
    { priority: 5, takeaway: 'Music streaming plateauing but evolving: 11th consecutive year of growth, physical revived', sentiment: 'Positive', uaeRelevance: 'High' },
    { priority: 6, takeaway: 'Gaming dominates: In-game advertising $131B, gaming IP becomes mainstream', sentiment: 'Very Positive', uaeRelevance: 'Critical' },
    { priority: 7, takeaway: 'Trust at historic lows: News confidence at 28%, driving demand for authenticity', sentiment: 'Negative', uaeRelevance: 'Medium' },
    { priority: 8, takeaway: 'Mobile first: 60% of streaming on mobile; 4.7 hours daily mobile screen time', sentiment: 'Positive', uaeRelevance: 'Critical' },
    { priority: 9, takeaway: 'Global growth shifts: Asia Pacific fastest; China 4th largest music market', sentiment: 'Positive', uaeRelevance: 'High' },
    { priority: 10, takeaway: 'Fragmentation continues: Average pays for 4 SVOD services but 41% cancel every 6 months', sentiment: 'Negative', uaeRelevance: 'Medium' },
  ],
}

// ============================================================================
// MEDIA INDUSTRY EXTENDED DATA (10-8) - COMPREHENSIVE ENRICHED SSOT
// ============================================================================

export interface MediaSourceCredibility {
  source: string
  tier: TierLevel
  reliability: string
  bias: string
  methodologyTransparency: string
}

export interface MediaEntityRegistry {
  companies: Array<{ entity: string; type: string; category: string; sources: string[] }>
  platforms: Array<{ entity: string; type: string; category: string; sources: string[] }>
  industryBodies: Array<{ entity: string; type: string; category: string }>
  geographic: Array<{ entity: string; region: string; notes: string }>
}

export interface MediaSentimentMatrix {
  topic: string
  overallSentiment: string
  tone: string
  keySources: string[]
}

export interface MediaKPISummary {
  category: string
  kpi: string
  currentValue: string
  trend: string
  forecast: string
  confidence: string
}

export interface MediaSection1_GlobalMarket {
  overallMarket: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  regionalMarketShare: Array<{ region: string; marketShare: string; growthRate: string; source: string; tier: TierLevel; uaeRelevance: string }>
}

export interface MediaSection2_Streaming {
  marketValuation: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  streamingVsTraditional: Array<{ metric: string; value: string; date: string; source: string; tier: TierLevel; sentiment: string }>
  consumptionBehavior: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  youtubePosition: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
}

export interface MediaSection3_CTV {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  advertisingTrends: Array<{ trend: string; impact: string; sentiment: string; source: string }>
}

export interface MediaSection4_DigitalAds {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  adTypeBreakdown: Array<{ adType: string; spending: string; percentOfTotal: string; source: string; tier: TierLevel }>
  socialMediaStats: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string; sentiment: string }>
}

export interface MediaSection5_Music {
  marketRevenue: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  streamingPlatforms: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  physicalRevival: Array<{ metric: string; value: string; growth: string; source: string; tier: TierLevel; sentiment: string }>
  regionalPerformance: Array<{ region: string; growth: string; marketShare: string; source: string; tier: TierLevel; uaeRelevance: string }>
}

export interface MediaSection6_Podcast {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  platformShare: Array<{ platform: string; marketShare: string; source: string; tier: TierLevel; sentiment: string }>
  videoTrends: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  advertisingPerformance: Array<{ metric: string; value: string; source: string; tier: TierLevel; notes: string }>
  topAdCategories: Array<{ category: string; share: string; source: string; tier: TierLevel }>
}

export interface MediaSection7_Gaming {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  industryTrends: Array<{ trend: string; impact: string; sentiment: string; uaeRelevance: string }>
  consumptionData: Array<{ metric: string; fans: string; nonFans: string; source: string; tier: TierLevel; sentiment: string }>
}

export interface MediaSection8_AI {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  contentGeneration: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  adoptionStats: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  consumerAttitudes: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
}

export interface MediaSection9_Consumption {
  dailyConsumption: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  fanEngagement: Array<{ metric: string; fans: string; nonFans: string; delta: string; source: string; tier: TierLevel; sentiment: string }>
  generationalDifferences: Array<{ metric: string; genZ: string; vsAverage: string; source: string; tier: TierLevel; uaeRelevance: string }>
  discoveryPurchase: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string; sentiment: string }>
}

export interface MediaSection10_Creator {
  marketSize: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  topCreators: Array<{ creator: string; revenue: string; source: string; tier: TierLevel; notes: string }>
  economyTrends: Array<{ trend: string; impact: string; sentiment: string; source: string }>
  youtubeEvolution: Array<{ metric: string; change: string; source: string; tier: TierLevel; sentiment: string }>
}

export interface MediaSection11_Trends {
  topTrends: Array<{ number: number; trend: string; impact: string; sentiment: string; uaeRelevance: string }>
  industryTensions: Array<{ tension: string; sentiment: string; challenge: string }>
}

export interface MediaSection12_Traditional {
  newsIndustry: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  traditionalAdvertising: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  growthAreas: Array<{ area: string; sentiment: string; source: string }>
}

export interface MediaSection13_Mobile {
  entertainment: Array<{ metric: string; value: string; source: string; tier: TierLevel; uaeRelevance: string }>
  streamingInfrastructure: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
  emailDigitalMarketing: Array<{ metric: string; value: string; source: string; tier: TierLevel; sentiment: string }>
}

// Comprehensive media industry extended data
export interface MediaIndustryComprehensiveData {
  executionMetadata: {
    researchDate: string
    sourceFile: string
    enrichmentDate: string
    ssotStatus: string
  }
  sourceCredibilityMatrix: MediaSourceCredibility[]
  uaeRelevanceAssessment: Array<{ section: string; relevance: string; rationale: string }>
  sentimentAnalysis: MediaSentimentMatrix[]
  entityRegistry: MediaEntityRegistry
  kpiSummary: MediaKPISummary[]
  section1_GlobalMarket: MediaSection1_GlobalMarket
  section2_Streaming: MediaSection2_Streaming
  section3_CTV: MediaSection3_CTV
  section4_DigitalAds: MediaSection4_DigitalAds
  section5_Music: MediaSection5_Music
  section6_Podcast: MediaSection6_Podcast
  section7_Gaming: MediaSection7_Gaming
  section8_AI: MediaSection8_AI
  section9_Consumption: MediaSection9_Consumption
  section10_Creator: MediaSection10_Creator
  section11_Trends: MediaSection11_Trends
  section12_Traditional: MediaSection12_Traditional
  section13_Mobile: MediaSection13_Mobile
  references: Array<{ source: string; publicationDate: string; tier: TierLevel; type: string }>
}

export const mediaIndustryComprehensiveData: MediaIndustryComprehensiveData = {
  executionMetadata: {
    researchDate: 'April 27, 2026',
    sourceFile: 'part-10/10-8-media-industry-trends.md',
    enrichmentDate: 'April 28, 2026',
    ssotStatus: 'Comprehensive Single Source of Truth',
  },
  sourceCredibilityMatrix: [
    { source: 'Deloitte', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Survey-based, large sample sizes' },
    { source: 'PwC', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Industry reports, global outlook' },
    { source: 'IFPI', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Official music industry data' },
    { source: 'Nielsen', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Measured media consumption' },
    { source: 'The Business Research Company', tier: 2 as TierLevel, reliability: 'High-Medium', bias: 'Low', methodologyTransparency: 'Aggregated market research' },
    { source: 'EY', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Industry trend analysis' },
    { source: 'SQ Magazine', tier: 3 as TierLevel, reliability: 'Medium', bias: 'Medium', methodologyTransparency: 'Industry compilation' },
    { source: 'Adwave', tier: 2 as TierLevel, reliability: 'High-Medium', bias: 'Low', methodologyTransparency: 'Advertising forecasting' },
    { source: 'Backlinko', tier: 4 as TierLevel, reliability: 'Medium-Low', bias: 'Low', methodologyTransparency: 'Compiled statistics' },
    { source: 'DemandSage', tier: 4 as TierLevel, reliability: 'Medium-Low', bias: 'Low', methodologyTransparency: 'Data aggregation' },
    { source: 'Hootsuite', tier: 4 as TierLevel, reliability: 'Medium', bias: 'Medium', methodologyTransparency: 'Social media focused' },
    { source: 'Mordor Intelligence', tier: 2 as TierLevel, reliability: 'High-Medium', bias: 'Low', methodologyTransparency: 'Market research' },
    { source: 'LinkedIn (Bernard Marr)', tier: 3 as TierLevel, reliability: 'Medium', bias: 'Low', methodologyTransparency: 'Thought leadership' },
    { source: 'WSJ/Deloitte', tier: 1 as TierLevel, reliability: 'High', bias: 'Low', methodologyTransparency: 'Joint research' },
    { source: 'Digital Applied', tier: 4 as TierLevel, reliability: 'Medium-Low', bias: 'Low', methodologyTransparency: 'Industry stats compilation' },
  ],
  uaeRelevanceAssessment: [
    { section: 'Global Market Size & Growth', relevance: 'Medium', rationale: 'Benchmarks for UAE market sizing; MENA region growing at 15.2%' },
    { section: 'Streaming Industry Trends', relevance: 'High', rationale: 'UAE high OTT adoption; 60%+ streaming penetration in urban areas' },
    { section: 'CTV & Video Advertising', relevance: 'High', rationale: 'CTV growing rapidly in UAE; ad spend shifting digital' },
    { section: 'Digital & Social Media Advertising', relevance: 'Critical', rationale: 'UAE has 99%+ social media penetration; TikTok adoption among highest globally' },
    { section: 'Music Industry & Streaming', relevance: 'High', rationale: 'UAE music streaming growing; Anghami local leader; MENA +15.2% growth' },
    { section: 'Podcast & Audio Industry', relevance: 'Medium', rationale: 'Growing market; Arabic content demand increasing' },
    { section: 'Gaming Industry', relevance: 'Critical', rationale: 'UAE gaming sector booming; Saudi/UAE gaming hub investments' },
    { section: 'AI in Media & Entertainment', relevance: 'High', rationale: 'UAE AI strategy leading; government investment in media AI' },
    { section: 'Media Consumption Behavior', relevance: 'High', rationale: 'Reflects UAE consumer patterns; high mobile penetration' },
    { section: 'Creator Economy', relevance: 'Critical', rationale: 'UAE influencer marketing booming; Dubai creator economy hub' },
    { section: 'Traditional Media Challenges', relevance: 'Medium', rationale: 'Local traditional media adapting' },
    { section: 'Mobile & Digital Infrastructure', relevance: 'Critical', rationale: 'UAE world-leading in mobile-first consumption' },
  ],
  sentimentAnalysis: [
    { topic: 'Streaming Industry', overallSentiment: 'Positive', tone: 'Optimistic growth', keySources: 'Deloitte, PwC, SQ Magazine' },
    { topic: 'CTV Advertising', overallSentiment: 'Positive', tone: 'Enthusiastic', keySources: 'Adwave, Teads, Forbes' },
    { topic: 'Digital Ad Market', overallSentiment: 'Positive', tone: 'Confident', keySources: 'DemandSage, Hootsuite' },
    { topic: 'Music Industry', overallSentiment: 'Positive', tone: 'Celebratory', keySources: 'IFPI, Billboard, Spotify' },
    { topic: 'Podcast Industry', overallSentiment: 'Positive', tone: 'Growth-oriented', keySources: 'Mordor Intelligence, Backlinko' },
    { topic: 'Gaming Industry', overallSentiment: 'Very Positive', tone: 'Excited', keySources: 'GamesBeat, Forbes Tech Council' },
    { topic: 'AI in Media', overallSentiment: 'Mixed', tone: 'Cautiously optimistic', keySources: 'Slalom, Deloitte, IFPI' },
    { topic: 'Media Consumption', overallSentiment: 'Positive', tone: 'Evolving', keySources: 'Deloitte, National University' },
    { topic: 'Creator Economy', overallSentiment: 'Very Positive', tone: 'Enthusiastic', keySources: 'LinkedIn, Hootsuite' },
    { topic: 'Traditional Media', overallSentiment: 'Negative', tone: 'Pessimistic', keySources: 'NPR, Deloitte, EY' },
    { topic: 'Mobile Infrastructure', overallSentiment: 'Positive', tone: 'Strong', keySources: 'SQ Magazine, Servers.com' },
  ],
  entityRegistry: {
    companies: [
      { entity: 'Google', type: 'Company', category: 'Tech/Streaming Infra', sources: ['Servers.com'] },
      { entity: 'Amazon', type: 'Company', category: 'Tech/E-commerce', sources: ['PwC'] },
      { entity: 'Apple', type: 'Company', category: 'Tech', sources: ['PwC'] },
      { entity: 'Microsoft/Xbox', type: 'Company', category: 'Gaming', sources: ['GamesBeat'] },
      { entity: 'Sony/PlayStation', type: 'Company', category: 'Gaming', sources: ['GamesBeat'] },
      { entity: 'Nintendo', type: 'Company', category: 'Gaming', sources: ['GamesBeat'] },
    ],
    platforms: [
      { entity: 'Netflix', type: 'Platform', category: 'Streaming SVOD', sources: ['LinkedIn, Nielsen'] },
      { entity: 'Spotify', type: 'Platform', category: 'Music Streaming', sources: ['Spotify Newsroom'] },
      { entity: 'YouTube', type: 'Platform', category: 'Video/Music Streaming', sources: ['LinkedIn, Nielsen'] },
      { entity: 'Apple (Apple Podcasts)', type: 'Platform', category: 'Podcast', sources: ['Backlinko'] },
      { entity: 'Amazon (Prime Video)', type: 'Platform', category: 'Streaming SVOD', sources: ['LinkedIn'] },
      { entity: 'Disney+', type: 'Platform', category: 'Streaming SVOD', sources: ['LinkedIn'] },
      { entity: 'HBO Max', type: 'Platform', category: 'Streaming SVOD', sources: ['LinkedIn'] },
      { entity: 'Roku', type: 'Platform', category: 'CTV/Streaming', sources: ['Roku Advertising'] },
      { entity: 'TikTok', type: 'Platform', category: 'Social/Video', sources: ['SQ Magazine, Hootsuite'] },
      { entity: 'Facebook/Meta', type: 'Platform', category: 'Social Media', sources: ['DemandSage'] },
      { entity: 'Twitter/X', type: 'Platform', category: 'Social Media', sources: ['Hootsuite'] },
      { entity: 'Instagram', type: 'Platform', category: 'Social Media', sources: ['Hootsuite'] },
      { entity: 'Deezer', type: 'Platform', category: 'Music Streaming', sources: ['IFPI'] },
      { entity: 'Anghami', type: 'Platform', category: 'Music Streaming (UAE)', sources: ['IFPI'] },
      { entity: 'Twitch', type: 'Platform', category: 'Gaming Livestream', sources: ['GamesBeat'] },
      { entity: 'YouTube Gaming', type: 'Platform', category: 'Gaming Livestream', sources: ['GamesBeat'] },
    ],
    industryBodies: [
      { entity: 'IFPI', type: 'Industry Body', category: 'Music' },
      { entity: 'Nielsen', type: 'Measurement', category: 'Media Ratings' },
      { entity: 'PwC', type: 'Professional Services', category: 'Research' },
      { entity: 'Deloitte', type: 'Professional Services', category: 'Research' },
      { entity: 'EY', type: 'Professional Services', category: 'Research' },
      { entity: 'Deloitte Digital Media Trends', type: 'Research Unit', category: 'Media Research' },
      { entity: 'Adwave', type: 'Ad Research', category: 'Advertising' },
      { entity: 'SQ Magazine', type: 'Publication', category: 'Industry Media' },
      { entity: 'Backlinko', type: 'Publication', category: 'Marketing Stats' },
      { entity: 'DemandSage', type: 'Publication', category: 'Marketing Stats' },
      { entity: 'Mordor Intelligence', type: 'Research Firm', category: 'Market Research' },
      { entity: 'KBV Research', type: 'Research Firm', category: 'Market Research' },
      { entity: 'Coherent Market Insights', type: 'Research Firm', category: 'Market Research' },
      { entity: 'Hootsuite', type: 'Platform', category: 'Social Media' },
      { entity: 'National University', type: 'Academic', category: 'Research' },
      { entity: 'The Business Research Company', type: 'Research Firm', category: 'Market Research' },
    ],
    geographic: [
      { entity: 'North America', region: 'Global', notes: '38% of global E&M' },
      { entity: 'Asia Pacific', region: 'Global', notes: 'Fastest growing, 9.96% CAGR' },
      { entity: 'Europe', region: 'Global', notes: '30.4% of music revenues' },
      { entity: 'Latin America', region: 'Global', notes: 'Fastest growing music (+17.1%)' },
      { entity: 'MENA', region: 'Regional', notes: '+15.2% growth' },
      { entity: 'UAE', region: 'Country', notes: 'High digital adoption' },
      { entity: 'Saudi Arabia', region: 'Country', notes: 'Gaming hub investment' },
      { entity: 'China', region: 'Country', notes: '4th largest music market' },
      { entity: 'UK', region: 'Country', notes: '313,010 gaming employment' },
      { entity: 'Germany', region: 'Country', notes: '246,000 gaming employment' },
      { entity: 'USA', region: 'Country', notes: '38.7% of music market' },
      { entity: 'Australia', region: 'Country', notes: 'Australasia representative' },
    ],
  },
  kpiSummary: [
    { category: 'Global E&M', kpi: 'Global E&M Market (2026)', currentValue: '$3,080.52B', trend: '+7.3% YoY', forecast: '$4,146.36B (2030)', confidence: 'High' },
    { category: 'Streaming', kpi: 'Global Video Streaming Market', currentValue: '$277.25B', trend: 'Growing', forecast: 'Surpassing TV by 2028', confidence: 'High' },
    { category: 'Digital Ads', kpi: 'Global Digital Ad Spending (2026)', currentValue: '$854.9B', trend: '+15.5% YoY', forecast: 'Growing', confidence: 'High' },
    { category: 'Music', kpi: 'Global Recorded Music Revenue (2025)', currentValue: '$31.7B', trend: '+6.4% YoY', forecast: '11th consecutive year', confidence: 'High' },
    { category: 'Podcast', kpi: 'Global Podcast Market', currentValue: '$39.63B', trend: '+27.2% CAGR', forecast: '$81.32B (2031)', confidence: 'High' },
    { category: 'Gaming', kpi: 'Global Gaming Market', currentValue: '$300B+', trend: 'Growing', forecast: 'Dominant entertainment', confidence: 'High' },
    { category: 'AI', kpi: 'AI in M&E Market (2034)', currentValue: '$85.36B', trend: 'Emerging', forecast: 'High growth', confidence: 'Medium' },
    { category: 'Creator', kpi: 'Creator Ad Spend (2025)', currentValue: '~$37B', trend: '+25% YoY', forecast: '$40B+', confidence: 'Medium' },
  ],
  section1_GlobalMarket: {
    overallMarket: [
      { metric: 'Global E&M Market (2026)', value: '$3,080.52 billion', source: 'The Business Research Company', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Global E&M Market (2025)', value: '$2,870.56 billion', source: 'The Business Research Company', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Market Forecast (2030)', value: '$4,146.36 billion', source: 'The Business Research Company', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Growth Rate (2026-2035)', value: '7.7% CAGR', source: 'The Business Research Company', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Global E&M Revenues (2024)', value: '$2.9 trillion', source: 'PwC Global E&M Outlook', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Growth Rate (through 2029)', value: '3.7% CAGR', source: 'Yahoo Finance/PwC', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
    ],
    regionalMarketShare: [
      { region: 'North America', marketShare: '38% of global E&M market', growthRate: '—', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { region: 'Asia Pacific', marketShare: 'Fastest-growing region', growthRate: '9.96% CAGR', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { region: 'Europe', marketShare: '30.4% of global music revenues', growthRate: '5.6%', source: 'IFPI 2026', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { region: 'Latin America', marketShare: 'Fastest-growing music region', growthRate: '17.1%', source: 'IFPI 2026', tier: 1 as TierLevel, uaeRelevance: 'Low' },
      { region: 'MENA', marketShare: '—', growthRate: '15.2%', source: 'IFPI 2026', tier: 1 as TierLevel, uaeRelevance: 'Critical' },
    ],
  },
  section2_Streaming: {
    marketValuation: [
      { metric: 'Global Video Streaming Market', value: '$277.25 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Global SVOD Revenue', value: '$98.37 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Global SVOD Subscriptions', value: '1.5 billion total', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'US OTT Market (2024)', value: '$61.9 billion', source: 'PwC', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'US OTT Market (2029 proj.)', value: '$112.7 billion', source: 'PwC', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'OTT Market CAGR', value: '5.9%', source: 'PwC', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
    ],
    streamingVsTraditional: [
      { metric: 'Streaming share of TV usage', value: '44.8%', date: 'May 2025', source: 'Nielsen via Servers.com', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Broadcast + Cable share', value: '44.2%', date: 'May 2025', source: 'Nielsen via Servers.com', tier: 1 as TierLevel, sentiment: 'Negative' },
      { metric: 'Streaming share', value: '46.7%', date: 'Nov 2025', source: 'Servers.com', tier: 3 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'Projected Streaming Share (2028)', value: 'Will surpass traditional TV', date: '—', source: 'Adwave', tier: 2 as TierLevel, sentiment: 'Positive' },
    ],
    consumptionBehavior: [
      { metric: 'Average SVOD subscriptions per US household', value: '2.14', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'US households without cable TV', value: '40 million', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'Mobile streaming share of global streaming', value: '35%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'SVOD cancellation rate (6 months)', value: '39%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Neutral' },
      { metric: 'Users paying for unused subscription', value: '42%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Negative' },
      { metric: 'US households with paid SVOD', value: '90% (avg. 4 services)', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'Positive' },
      { metric: 'Consumers who cancelled SVOD in past 6 months', value: '41%', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'Negative' },
    ],
    youtubePosition: [
      { metric: 'YouTube share of TV screen viewing time', value: '12.5%', source: 'LinkedIn/Netflix', tier: 3 as TierLevel, sentiment: 'Positive' },
      { metric: 'YouTube leads all streaming platforms', value: '—', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Positive' },
    ],
  },
  section3_CTV: {
    marketSize: [
      { metric: 'CTV ad spending (US, 2026)', value: '$38 billion', source: 'Adwave', tier: 2 as TierLevel, uaeRelevance: 'High' },
      { metric: 'CTV ad spending growth', value: '14% YoY', source: 'Adwave', tier: 2 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'CTV ad spending (global)', value: '$46.3 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'CTV growth rate', value: '12% CAGR', source: 'Teads', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Projected CTV ad spend (US)', value: '$37+ billion', source: 'Forbes/Agency Council', tier: 3 as TierLevel, uaeRelevance: 'High' },
    ],
    advertisingTrends: [
      { trend: 'FAST services reach ~60% US households', impact: 'High', sentiment: 'Positive', source: 'Adwave' },
      { trend: 'Up to 50% of streaming advertisers subsidize CTV from search/social', impact: 'Medium', sentiment: 'Mixed', source: 'Roku Advertising' },
      { trend: 'CTV central to 2026 media strategies', impact: 'High', sentiment: 'Positive', source: 'Forbes' },
      { trend: '25% of CTV funding from overall ad budget increases', impact: 'Medium', sentiment: 'Positive', source: 'Marketing Dive' },
    ],
  },
  section4_DigitalAds: {
    marketSize: [
      { metric: 'Global digital ad spending (2024)', value: '$740.3 billion', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Global digital ad spending (2026)', value: '$854.9 billion', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Social media ad spending (global)', value: '$219.8 billion', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Digital advertising as % of total', value: '68.7%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Programmatic advertising share', value: '80% of digital ad revenue', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Mobile ad share', value: '65% of total; 69% by 2026', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'Critical' },
    ],
    adTypeBreakdown: [
      { adType: 'Search Advertising', spending: '$362.3 billion', percentOfTotal: '42.4%', source: 'DemandSage', tier: 4 as TierLevel },
      { adType: 'Video Advertising', spending: '$217.7 billion', percentOfTotal: '25.5%', source: 'DemandSage', tier: 4 as TierLevel },
      { adType: 'Banner Advertising', spending: '$196.5 billion', percentOfTotal: '23.0%', source: 'DemandSage', tier: 4 as TierLevel },
      { adType: 'Influencer Advertising', spending: '$43.5 billion', percentOfTotal: '5.1%', source: 'DemandSage', tier: 4 as TierLevel },
      { adType: 'Audio Advertising', spending: '$12.4 billion', percentOfTotal: '1.5%', source: 'DemandSage', tier: 4 as TierLevel },
    ],
    socialMediaStats: [
      { metric: 'Global social media users', value: '5.66 billion', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Positive' },
      { metric: 'Global social media users (alternate)', value: '4.95 billion', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Positive' },
      { metric: 'Average time spent daily', value: '2 hours 31 minutes', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'High', sentiment: 'Negative' },
      { metric: 'TikTok monthly active users', value: '1.59 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Positive' },
      { metric: 'TikTok user growth (45+ demographic, 2019-2025)', value: '1,200%', source: 'Hootsuite', tier: 4 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
      { metric: 'Facebook monthly active users', value: '3.07 billion', source: 'DemandSage', tier: 4 as TierLevel, uaeRelevance: 'High', sentiment: 'Stable' },
      { metric: 'Social media discovery share', value: '27.1% of global brand discovery', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Positive' },
      { metric: 'Gen Z using TikTok for product discovery', value: '77%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
      { metric: 'TikTok users who purchased through platform', value: '43.8%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
    ],
  },
  section5_Music: {
    marketRevenue: [
      { metric: 'Global recorded music revenues (2025)', value: '$31.7 billion', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Revenue growth', value: '6.4% YoY', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Positive' },
      { metric: 'Years of consecutive growth', value: '11th year', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Very Positive' },
      { metric: 'Streaming revenues', value: '$22+ billion (69.6% of total)', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Paid streaming subscribers', value: '837 million globally', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Music streaming market size (2026)', value: '$60.5 billion', source: 'KBV Research', tier: 2 as TierLevel, uaeRelevance: 'High' },
    ],
    streamingPlatforms: [
      { metric: 'Music streaming share of industry revenue', value: '84%', source: 'Exploding Topics', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Global music streaming revenue', value: '$25.12 billion (2025)', source: 'AMW', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Music streaming app revenue (2024)', value: '$53.7 billion', source: 'Business of Apps', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Tracks on streaming services', value: '253 million', source: 'MBW', tier: 4 as TierLevel, sentiment: 'Neutral' },
      { metric: 'Spotify users', value: '700+ million', source: 'Spotify', tier: 1 as TierLevel, sentiment: 'Positive' },
    ],
    physicalRevival: [
      { metric: 'Physical format revenues', value: '—', growth: '+8.0%', source: 'IFPI', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Vinyl specifically', value: '—', growth: '+13.7% (19th consecutive year)', source: 'IFPI', tier: 1 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'Physical had declined', value: '—', growth: '-3% in 2024', source: 'IFPI', tier: 1 as TierLevel, sentiment: 'Was Negative' },
    ],
    regionalPerformance: [
      { region: 'Latin America', growth: '+17.1%', marketShare: '—', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Low' },
      { region: 'MENA', growth: '+15.2%', marketShare: '—', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Critical' },
      { region: 'Sub-Saharan Africa', growth: '+15.2%', marketShare: '$120 million', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Low' },
      { region: 'Asia', growth: '+10.9%', marketShare: '—', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'High' },
      { region: 'China', growth: '+20.1% (now 4th largest)', marketShare: '—', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { region: 'Europe', growth: '+5.6%', marketShare: '30.4%', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
      { region: 'USA & Canada', growth: '+3.5%', marketShare: '38.7%', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Low' },
      { region: 'Australasia', growth: '+1.5%', marketShare: '—', source: 'IFPI', tier: 1 as TierLevel, uaeRelevance: 'Low' },
    ],
  },
  section6_Podcast: {
    marketSize: [
      { metric: 'Global podcast industry', value: '$39.63 billion', source: 'PodcastStatistics.com', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Podcast market size (2026)', value: '$32.65 billion', source: 'Mordor Intelligence', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Podcast market size (2031)', value: '$81.32 billion', source: 'Mordor Intelligence', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Podcasting market CAGR', value: '27.2%', source: 'Coherent Market Insights', tier: 2 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Global podcast listeners', value: '619.2 million', source: 'Backlinko', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Global podcast listeners (proj. 2027)', value: '651.7 million', source: 'Backlinko', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'US monthly podcast listeners', value: '165 million', source: 'Digital Applied', tier: 4 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'Global podcast ad spend (2025)', value: '$4.46 billion', source: 'Backlinko', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Global podcast ad spend (2026)', value: '$5+ billion', source: 'Digital Applied', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'Global podcast ad spend (proj. 2027)', value: '$5.03 billion', source: 'Backlinko', tier: 4 as TierLevel, uaeRelevance: 'Medium' },
    ],
    platformShare: [
      { platform: 'YouTube', marketShare: '42% of weekly US podcast consumers', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Very Positive' },
      { platform: 'Spotify', marketShare: '15%', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Positive' },
      { platform: 'Apple Podcasts', marketShare: '7%', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Stable' },
    ],
    videoTrends: [
      { metric: 'Video podcast preference (new US weekly listeners)', value: '53%', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Spotify video podcast users', value: '270+ million', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Spotify podcast titles', value: '~7 million', source: 'Backlinko', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Global video podcast ad revenue (2026)', value: '~$5 billion', source: 'WSJ/Deloitte', tier: 1 as TierLevel, sentiment: 'Positive' },
    ],
    advertisingPerformance: [
      { metric: 'Host-read ad recall', value: '60-70%', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'Premium' },
      { metric: 'Programmatic ad recall', value: '24-31%', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'Standard' },
      { metric: 'Host-read purchase intent lift', value: '28-34%', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'High ROI' },
      { metric: 'Host-read ROAS', value: '3.4x–5.1x', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'Premium' },
      { metric: 'Programmatic ROAS', value: '1.8x–2.4x', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'Standard' },
      { metric: 'Pre-roll completion rate', value: '87%', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'High' },
      { metric: 'Mid-roll completion rate', value: '81%', source: 'Digital Applied', tier: 4 as TierLevel, notes: 'Good' },
    ],
    topAdCategories: [
      { category: 'Financial services', share: '15.8%', source: 'Digital Applied', tier: 4 as TierLevel },
      { category: 'CPG', share: '13.2%', source: 'Digital Applied', tier: 4 as TierLevel },
      { category: 'Arts/entertainment/media', share: '11.4%', source: 'Digital Applied', tier: 4 as TierLevel },
      { category: 'Healthcare/pharma', share: '8.9%', source: 'Digital Applied', tier: 4 as TierLevel },
    ],
  },
  section7_Gaming: {
    marketSize: [
      { metric: 'Global gaming market', value: '$300+ billion', source: 'GamesBeat', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'In-game advertising', value: '$131.03 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Gaming employment (global)', value: '1.3+ million recorded roles', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Medium' },
      { metric: 'UK gaming employment', value: '313,010', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'Germany gaming employment', value: '246,000', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
    ],
    industryTrends: [
      { trend: 'AI in Gameplay', impact: 'High', sentiment: 'Very Positive', uaeRelevance: 'High' },
      { trend: 'Hyper-Realistic Graphics', impact: 'Medium', sentiment: 'Positive', uaeRelevance: 'Medium' },
      { trend: 'Direct-to-Consumer Sales', impact: 'High', sentiment: 'Mixed', uaeRelevance: 'High' },
      { trend: 'Player Spending Migration', impact: 'Medium', sentiment: 'Mixed', uaeRelevance: 'Medium' },
      { trend: 'Cross-Platform Gaming', impact: 'High', sentiment: 'Positive', uaeRelevance: 'Critical' },
      { trend: 'Cloud Gaming', impact: 'High', sentiment: 'Positive', uaeRelevance: 'High' },
      { trend: 'Gaming IP as Mainstream Entertainment', impact: 'High', sentiment: 'Very Positive', uaeRelevance: 'High' },
      { trend: 'Experiential Gaming', impact: 'Medium', sentiment: 'Positive', uaeRelevance: 'High' },
      { trend: 'Livestream as Primary Broadcast', impact: 'High', sentiment: 'Positive', uaeRelevance: 'High' },
    ],
    consumptionData: [
      { metric: 'Fan gaming rates', fans: '75%', nonFans: '52%', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Fan paid gaming subscriptions', fans: '39%', nonFans: '11%', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Gamers willing to pay for premium experiences', fans: 'Growing', nonFans: '—', source: 'TeamofKeys', tier: 4 as TierLevel, sentiment: 'Positive' },
    ],
  },
  section8_AI: {
    marketSize: [
      { metric: 'AI in M&E market (by 2034)', value: '$85.36 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'AI voice cloning market', value: '$1.1–1.2 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'AI-generated content on social media', value: '20%+ of YouTube videos served to new users', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
    ],
    contentGeneration: [
      { metric: 'AI-generated images on social media', value: '79% of visual content', source: 'AMRA & Elma', tier: 4 as TierLevel, sentiment: 'Mixed' },
      { metric: 'Experts estimate AI-generated online content', value: '90% by 2026', source: 'The Living Lib', tier: 4 as TierLevel, sentiment: 'Negative' },
      { metric: 'AI-generated tracks received daily by Deezer', value: '60,000+', source: 'IFPI', tier: 1 as TierLevel, sentiment: 'Negative' },
      { metric: 'Fraudulent streams on AI-generated music', value: '~85%', source: 'IFPI', tier: 1 as TierLevel, sentiment: 'Very Negative' },
    ],
    adoptionStats: [
      { metric: 'M&E leaders creating AI-related roles', value: '64%', source: 'Slalom', tier: 3 as TierLevel, sentiment: 'Positive' },
      { metric: 'Creators actively using GenAI', value: '86%', source: 'Slalom', tier: 3 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'AI aligned to enterprise transformation', value: '15%', source: 'Slalom', tier: 3 as TierLevel, sentiment: 'Negative' },
      { metric: 'Companies with AI operating in silos', value: 'Majority', source: 'Slalom', tier: 3 as TierLevel, sentiment: 'Negative' },
    ],
    consumerAttitudes: [
      { metric: 'Consumers willing to accept labeled AI content', value: '39%', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Mixed' },
      { metric: 'Consumers less likely to choose brand using AI ads', value: '~33%', source: 'Hootsuite', tier: 4 as TierLevel, sentiment: 'Negative' },
      { metric: 'Interest in AI-created movies', value: '28%', source: 'SQ Magazine', tier: 3 as TierLevel, sentiment: 'Negative' },
      { metric: 'Those feeling no impact from AI', value: '36%', source: 'SQ Magazine', tier: 3 as TierLevel, sentiment: 'Neutral' },
    ],
  },
  section9_Consumption: {
    dailyConsumption: [
      { metric: 'Average daily media consumption (global)', value: '6 hours', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'High' },
      { metric: 'US daily media time', value: '12:55 hours', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'US daily media time (proj. 2026)', value: '13:40 hours', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'Average SVOD services per US household', value: '4 services', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
    ],
    fanEngagement: [
      { metric: 'Daily media time', fans: '+51 min (+16%)', nonFans: '—', delta: '+16%', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'SVOD adoption', fans: '92%', nonFans: '77%', delta: '+15pp', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Monthly SVOD spending', fans: '$71', nonFans: '$56', delta: '+$15', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Gaming rates', fans: '75%', nonFans: '52%', delta: '+23pp', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'Paid music streaming', fans: '67%', nonFans: '40%', delta: '+27pp', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
      { metric: 'Cross-platform engagement', fans: '55%', nonFans: '—', delta: '—', source: 'Deloitte 2026', tier: 1 as TierLevel, sentiment: 'Positive' },
    ],
    generationalDifferences: [
      { metric: 'Gen Z daily social media time', genZ: '54% more than average', vsAverage: '+54%', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Gen Z TV/movie watching', genZ: '26% less than average', vsAverage: '-26%', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Gen Z using influencers for recommendations', genZ: '74%', vsAverage: '—', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Gen Z discovering content via social media', genZ: '73%', vsAverage: '—', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Gen Z fans in fandoms', genZ: '4 on average', vsAverage: '—', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'High' },
    ],
    discoveryPurchase: [
      { metric: 'Consumers discovering products on social media', value: '52%', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Positive' },
      { metric: 'Social media content more relevant than traditional', value: '32%', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
      { metric: 'Stronger connection to creators than TV actors', value: '33%', source: 'Deloitte 2026', tier: 1 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
      { metric: 'Word-of-mouth/UGC trust', value: '92%', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'Critical', sentiment: 'Very Positive' },
      { metric: 'TikTok influence on impulse buys', value: '51%', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'High', sentiment: 'Mixed' },
      { metric: 'Social commerce preference (online vs in-store)', value: '59%', source: 'National University', tier: 3 as TierLevel, uaeRelevance: 'High', sentiment: 'Positive' },
    ],
  },
  section10_Creator: {
    marketSize: [
      { metric: 'Creator ad spend (2024)', value: '$29.5 billion', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'Creator ad spend (2025)', value: '~$37 billion', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Microdrama IAP revenue (Q1 2025)', value: '~$700 million', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'High' },
      { metric: 'US microdrama share', value: '~49%', source: 'LinkedIn', tier: 3 as TierLevel, uaeRelevance: 'Low' },
      { metric: 'Micro-drama revenue projection (2026)', value: '$7.8 billion', source: 'Hootsuite', tier: 4 as TierLevel, uaeRelevance: 'High' },
    ],
    topCreators: [
      { creator: 'MrBeast (2024)', revenue: '~$473 million', source: 'LinkedIn', tier: 3 as TierLevel, notes: 'YouTube' },
      { creator: 'Dude Perfect', revenue: '$100M+ investment, >$50M revenue', source: 'LinkedIn', tier: 3 as TierLevel, notes: 'YouTube/Gaming' },
    ],
    economyTrends: [
      { trend: 'Scale vs. Control', impact: '"Control is new power"', sentiment: 'Very Positive', source: 'LinkedIn' },
      { trend: 'Creator-advertiser convergence', impact: 'Strategic partners', sentiment: 'Positive', source: 'LinkedIn' },
      { trend: 'Community-first platforms', impact: 'Prioritizing community', sentiment: 'Positive', source: 'LinkedIn' },
      { trend: 'Pay-to-play evolution', impact: 'Navigating paid social', sentiment: 'Mixed', source: 'LinkedIn' },
      { trend: 'Build-in-public', impact: 'Transparency as strategy', sentiment: 'Positive', source: 'LinkedIn' },
      { trend: 'End of microtargeting', impact: 'Privacy changes', sentiment: 'Negative', source: 'LinkedIn' },
    ],
    youtubeEvolution: [
      { metric: 'Long-form uploads (>20 min) share', change: '22% → 47% since 2020', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'View share for 20+ min content', change: '20% → 43%', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'Long-form watch time', change: '40%+ despite minority of uploads', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'Long-form RPM', change: '~$5.50 vs ~$0.18 for Shorts', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Positive' },
      { metric: 'Streaming CPMs', change: '~$26–$27', source: 'LinkedIn', tier: 3 as TierLevel, sentiment: 'Positive' },
    ],
  },
  section11_Trends: {
    topTrends: [
      { number: 1, trend: 'Generative Video Hits Prime Time', impact: 'High', sentiment: 'Positive', uaeRelevance: 'Critical' },
      { number: 2, trend: 'Synthetic Celebrities', impact: 'Medium', sentiment: 'Mixed', uaeRelevance: 'High' },
      { number: 3, trend: 'Immersive Sports Broadcasting', impact: 'High', sentiment: 'Positive', uaeRelevance: 'High' },
      { number: 4, trend: 'Rich, Immersive Virtual Game Worlds', impact: 'High', sentiment: 'Very Positive', uaeRelevance: 'Critical' },
      { number: 5, trend: 'Content Editing for Attention Economy', impact: 'Medium', sentiment: 'Neutral', uaeRelevance: 'High' },
      { number: 6, trend: 'IPTech for Synthetic Age', impact: 'Medium', sentiment: 'Neutral', uaeRelevance: 'Medium' },
      { number: 7, trend: 'Small-Screen Storytelling', impact: 'High', sentiment: 'Positive', uaeRelevance: 'Critical' },
    ],
    industryTensions: [
      { tension: 'Rise of AI vs. Human Authenticity', sentiment: 'Mixed', challenge: 'High' },
      { tension: 'Shifting Discovery Patterns', sentiment: 'Mixed', challenge: 'High' },
      { tension: 'Declining Referral Traffic', sentiment: 'Negative', challenge: 'Medium' },
      { tension: 'Sustainable Business Models', sentiment: 'Mixed', challenge: 'High' },
      { tension: 'Algorithmic Capture', sentiment: 'Negative', challenge: 'High' },
      { tension: 'Political Influence', sentiment: 'Negative', challenge: 'Medium' },
    ],
  },
  section12_Traditional: {
    newsIndustry: [
      { metric: 'Public trust in news', value: 'Historic lows', source: 'Deloitte', tier: 1 as TierLevel, sentiment: 'Very Negative' },
      { metric: 'Confidence in news (2026)', value: '28%', source: 'EY', tier: 1 as TierLevel, sentiment: 'Very Negative' },
      { metric: 'News consumption changes', value: 'Stable for many', source: 'Pew Research', tier: 2 as TierLevel, sentiment: 'Neutral' },
      { metric: 'Journalists comfortable on camera', value: 'Challenge', source: 'Sourcefabric', tier: 4 as TierLevel, sentiment: 'Negative' },
    ],
    traditionalAdvertising: [
      { metric: 'Production volume', value: 'Lowest since pandemic', source: 'NPR', tier: 3 as TierLevel, sentiment: 'Very Negative' },
      { metric: 'Studios cost controls', value: 'Tightened', source: 'Deloitte', tier: 1 as TierLevel, sentiment: 'Negative' },
      { metric: 'Advertising revenue', value: 'Declining', source: 'NPR', tier: 3 as TierLevel, sentiment: 'Negative' },
      { metric: 'Audience fragmentation', value: 'High', source: 'NPR', tier: 3 as TierLevel, sentiment: 'Negative' },
    ],
    growthAreas: [
      { area: 'Sports content', sentiment: 'Positive', source: 'Deloitte' },
      { area: 'Live events and experiential', sentiment: 'Positive', source: 'EY' },
      { area: 'Gaming', sentiment: 'Very Positive', source: 'Deloitte' },
      { area: 'Digital media', sentiment: 'Positive', source: 'GHJ Advisors' },
      { area: 'Unscripted content', sentiment: 'Positive', source: 'Deloitte' },
      { area: 'Branded location-based entertainment', sentiment: 'Positive', source: 'EY' },
    ],
  },
  section13_Mobile: {
    entertainment: [
      { metric: 'Global mobile entertainment market', value: '$138.80 billion', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Mobile share of global internet traffic', value: '51.76%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Global users daily mobile screen time', value: '4.7 hours', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
      { metric: 'Mobile streaming share of global streaming', value: '35%', source: 'SQ Magazine', tier: 3 as TierLevel, uaeRelevance: 'Critical' },
    ],
    streamingInfrastructure: [
      { metric: 'Video share of global internet traffic (2026)', value: '82%', source: 'Servers.com', tier: 3 as TierLevel, sentiment: 'Positive' },
      { metric: '4K streaming bitrate requirement', value: '20 MB/s', source: 'Servers.com', tier: 3 as TierLevel, sentiment: 'Neutral' },
      { metric: '8K streaming bitrate requirement', value: '60-90 MB/s', source: 'Servers.com', tier: 3 as TierLevel, sentiment: 'Neutral' },
      { metric: 'Google\'s Argos transcoder efficiency', value: '20-33x conventional servers', source: 'Servers.com', tier: 3 as TierLevel, sentiment: 'Positive' },
    ],
    emailDigitalMarketing: [
      { metric: 'Email users worldwide (2026)', value: '4.73 billion', source: 'DemandSage', tier: 4 as TierLevel, sentiment: 'Neutral' },
      { metric: 'Email marketing ROI', value: '$36–$42 per $1 spent', source: 'DemandSage', tier: 4 as TierLevel, sentiment: 'Very Positive' },
      { metric: 'SEO ROI', value: '$22 per $1 spent', source: 'DemandSage', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Influencer marketing ROI', value: '$6.50 per $1 spent', source: 'DemandSage', tier: 4 as TierLevel, sentiment: 'Positive' },
      { metric: 'Average digital marketing ROI', value: '$5 per $1 spent', source: 'DemandSage', tier: 4 as TierLevel, sentiment: 'Positive' },
    ],
  },
  references: [
    { source: 'Deloitte, "2026 Media & Entertainment Industry Outlook"', publicationDate: 'March 3, 2026', tier: 1 as TierLevel, type: 'Industry Report' },
    { source: 'Deloitte, "2026 Digital Media Trends: Consumption Habits Survey"', publicationDate: 'March 25, 2026', tier: 1 as TierLevel, type: 'Survey' },
    { source: 'IFPI, "Global Music Report 2026"', publicationDate: 'March 18, 2026', tier: 1 as TierLevel, type: 'Industry Body' },
    { source: 'PwC, "Global Entertainment & Media Outlook 2025-2029"', publicationDate: '—', tier: 1 as TierLevel, type: 'Industry Report' },
    { source: 'EY, "2026 M&E trends: simplicity, authenticity, and the rise of experiences"', publicationDate: 'Dec 17, 2025', tier: 1 as TierLevel, type: 'Industry Report' },
    { source: 'The Business Research Company, "Entertainment And Media Market Report 2026"', publicationDate: '—', tier: 2 as TierLevel, type: 'Market Research' },
    { source: 'SQ Magazine, "Media & Entertainment Industry Statistics 2026"', publicationDate: 'March 17, 2026', tier: 3 as TierLevel, type: 'Trade Publication' },
    { source: 'Slalom, "Media & Communications Industry Outlook 2026"', publicationDate: '—', tier: 3 as TierLevel, type: 'Industry Report' },
    { source: 'Adwave, "CTV Advertising in 2026: Updated Market Forecast"', publicationDate: 'Feb 3, 2026', tier: 2 as TierLevel, type: 'Ad Research' },
    { source: 'DemandSage, "158 Digital Marketing Statistics 2026"', publicationDate: 'Jan 8, 2026', tier: 4 as TierLevel, type: 'Data Aggregation' },
    { source: 'Backlinko, "Podcast Statistics You Need To Know in 2026"', publicationDate: 'Feb 24, 2026', tier: 4 as TierLevel, type: 'Data Aggregation' },
    { source: 'Digital Applied, "Podcast Statistics 2026: 130+ Advertising Data Points"', publicationDate: '—', tier: 4 as TierLevel, type: 'Data Aggregation' },
    { source: 'Hootsuite, "Social Media Trends 2026"', publicationDate: '—', tier: 4 as TierLevel, type: 'Platform Report' },
    { source: 'National University, "Social Media Trends in 2026: What\'s Next"', publicationDate: 'March 19, 2026', tier: 3 as TierLevel, type: 'Academic' },
    { source: 'Servers.com, "Top 4 Streaming Infrastructure Trends to Watch in 2026"', publicationDate: '—', tier: 3 as TierLevel, type: 'Industry Report' },
    { source: 'GamesBeat, "Gaming industry predictions for 2026"', publicationDate: 'Jan 1, 2026', tier: 3 as TierLevel, type: 'Trade Publication' },
    { source: 'Forbes Tech Council, "Three Trends Shaping The Gaming Industry In 2026"', publicationDate: 'April 16, 2026', tier: 3 as TierLevel, type: 'Opinion/Analysis' },
    { source: 'LinkedIn/Bernard Marr, "7 Media Trends That Will Redefine Entertainment In 2026"', publicationDate: 'Dec 29, 2025', tier: 3 as TierLevel, type: 'Thought Leadership' },
    { source: 'LinkedIn, "10 Trends That Will Define Media and the Creator Economy in 2026"', publicationDate: 'Jan 6, 2026', tier: 3 as TierLevel, type: 'Thought Leadership' },
    { source: 'NPR, "2026 looks ominous for media, from Hollywood to journalism"', publicationDate: 'Jan 10, 2026', tier: 3 as TierLevel, type: 'News' },
  ],
}

// ============================================================================
// CLIMATE SUSTAINABILITY TRENDS (10-9)
// ============================================================================

export const climateSustainabilityData: TrendAnalysis = {
  id: 'trend-10-9',
  category: 'climate',
  name: 'Climate Sustainability',
  description: 'The UAE was the first MENA nation to commit to net-zero emissions by 2050, with comprehensive climate legislation, massive renewable energy investments (AED 600B/$163B), and emerging carbon credit market leadership. Key initiatives include the Mohammed Bin Rashid Al Maktoum Solar Park (3,860 MW current, 8,000+ MW target), green hydrogen programme (1.4 mtpa by 2031), and the National Register for Carbon Credits (NRCC). Climate risks include sea level rise threatening 90% of coastal infrastructure and extreme water scarcity.',
  adoptionRate: 65,
  uaeAdoptionRate: 78,
  generationalBreakdown: {
    genZ: 72,
    millennial: 68,
    genX: 58,
    boomer: 45,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'Net Zero 2050 Strategy, Climate Change Reduction Law FDL 11/2024 (effective May 2025), CBUAE Climate Risk Circular 8/2025, UAE Circular Economy Policy 2021-2031',
    effectiveDate: '2025-05-30',
  },
  sentiment: {
    positive: 55,
    negative: 28,
    neutral: 17,
    overall: 0.48,
    volume: 52000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.70,
      timeline: '2026-2030',
      indicators: ['AED 600B net zero investment to 2050', 'Renewable capacity 19.8 GW by 2030', '200,000 green jobs', 'Carbon market $146.4M by 2030 (26.7% CAGR)', 'Green hydrogen 1.4 mtpa by 2031'],
    },
    {
      scenario: 'baseline',
      probability: 0.58,
      timeline: '2030-2040',
      indicators: ['CCUS 5 MTPA capacity by 2030', 'Mangrove restoration 100M trees by 2030', 'Waste management market $22.6B by 2033', 'Desalination 100% clean energy by 2030'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.40,
      timeline: '2030-2050',
      indicators: ['Sea level rise 0.5m by 2050 threatening Abu Dhabi (15.89% city flooded extreme scenario)', 'Climate Action Tracker: "Insufficient" policies rating', 'Oil expansion plans conflict with net zero commitment', '90% coastal infrastructure at risk'],
    },
  ],
  keyDrivers: [
    'First MENA nation net-zero by 2050 commitment with AED 600B ($163B) investment',
    'Mohammed Bin Rashid Al Maktoum Solar Park 3,860 MW (target 8,000+ MW by 2030)',
    'Carbon credit market: ADGM first regulated exchange (March 2022), DFM pilot at COP28',
    'National Register for Carbon Credits (NRCC) effective December 2024, compliance deadline June 2025',
    'CCUS targets: 5 MTPA capacity by 2030, ADNOC 10 Mt/year, 1 MTPA DAC planned',
    'Green hydrogen: 15 GW solar PV, 8.7 GW electrolyser capacity for 15 mtpa by 2050',
    'Climate Law FDL 11/2024: First global legally enforceable ESG/climate compliance legislation',
    'Mangrove restoration: 100 million trees by 2030, 400% faster carbon storage than terrestrial forests',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 35,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 96,
    level: 'critical' as const,
    justification: 'Climate commitments directly impact UAE long-term economic trajectory; 90% coastal infrastructure at risk from sea level rise; $163B investment commitment',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'Climate Action Tracker', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'UAE Government Portal', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Masdar', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Grand View Research', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Guidehouse', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'PwC UAE', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Earth.org', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'FAO', tier: 1 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// Extended climate sustainability sub-data for detailed dashboard
export const climateNetZeroData = {
  targetYear: 2050,
  investmentAED: 600e9,
  investmentUSD: 163e9,
  greenJobsTarget: 200000,
  ndcRatingPolicies: 'Insufficient',
  ndcRatingFairShare: 'Insufficient',
  ndcRatingAlmostSufficient: 'Almost Sufficient',
  legalStatus: 'UAE Net Zero 2050 Charter (domestic law)',
  fiveYearReview: true,
  cdrMangroves: 3.5,
  cdrDAC: 9.5,
  excludedGases: 'F-gases (9% of 2022 emissions)',
  excludedSectors: 'International aviation and shipping',
}

export const climateEnergyData = {
  renewableCapacity2030GW: 19.8,
  cleanEnergyMix2030: 30,
  cleanEnergyGeneration2030: 32,
  gridEmissionFactor: 0.27,
  energyEfficiencyGain: '42-45%',
  investmentAED: '150-200B',
  financialSavingsAED: 100e9,
  greenJobs2030: 50000,
  solarParkMBRCurrentMW: 3860,
  solarParkMBRTargetMW: 8000,
  noorAbuDhabiMW: 1177,
  noorAbuDhabiHomes: 90000,
}

export const climateHydrogenData = {
  production2031mtpa: 1.4,
  production2040mtpa: 7.5,
  production2050mtpa: 15.0,
  green2031mtpa: 1.0,
  blue2031mtpa: 0.4,
  solarPVRequiredGW: 15.3,
  electrolyserRequiredGW: 8.7,
  greenSteelPilot: 'Masdar + EMSTEEL (first in MENA)',
}

export const climateCarbonMarketData = {
  market2023USD: 27.9e6,
  market2024USD: 36e6,
  market2030USD: 146.4e6,
  cagr: 26.7,
  uaeGlobalShare2023: 0.9,
  afforestationShare: 34.41,
  fastestGrowing: 'Soil carbon sequestration, energy efficiency',
  dfmPilotTrades: 32,
  dfmPilotVolume: 10656,
  dfmPilotValueUSD: 38078.52,
  carbonCreditPriceRange: '$10-30/tonne',
  penaltyMaxAED: 1e6,
}

export const climateCCUSData = {
  currentCapacityMtpa: 0.8,
  target2030Mtpa: 5,
  ADNOCtarget2030Mt: 10,
  blueHydrogen2031kt: 400,
  storagePotentialGt: 22.6,
  depletedGasStorageGt: 5.9,
  undiscoveredStorageGt: 16.7,
  alReyadahCapacityMt: 0.8,
  habshanCapacityMtpa: 1.5,
  dacPlannedMtpa: 1,
  euCBAMimpactPercent: 14,
}

export const climateMangroveData = {
  target2030Million: 100,
  carbonStorageVsForest: 400,
  abuDhabiRateTonnesPerHa: 0.5,
  totalAbuDhabiSequestrationTonnes: 8750,
  storageMultiplierVsTropical: 4,
  mangroveNationalParkShare: 75,
  mangroveAllianceBillion: 4,
  cdrMCO2e: 3.5,
}

export const climateWaterData = {
  desalinationPercent: 42,
  waterStress: 'Extremely water-scarce',
  liwaStorageM3: 26e6,
  liwaRecoverableM3: 16e6,
  emergencySupplyDays: 90,
  regionalPlants: 400,
  projectedReduction: 'Freshwater availability decline',
}

export const climateWasteData = {
  wasteManagement2025USD: 13.7e9,
  wasteManagement2033USD: 22.6e9,
  wasteToEnergy2025USD: 210e6,
  wasteToEnergy2032USD: 302.9e6,
  eWaste2025USD: 150e6,
  eWaste2034USD: 253.42e6,
  wasteManagementCAGR: 6.5,
  wasteToEnergyCAGR: 5.4,
  eWasteCAGR: 6,
  warsanCapacityMillionTonnes: 2,
  warsanHomesPowered: 135000,
  constructionDemolitionWaste2016: 22817,
  constructionDemolitionWaste2022: 83215,
  recyclingInvestmentAED: 2e9,
}

export const climateLegislationData = {
  climateLaw: 'Federal Decree-Law 11/2024',
  effectiveDate: '2025-05-30',
  nrccResolution: 'Cabinet Resolution 67/2024',
  nrccEffective: '2024-12-01',
  complianceDeadline: '2025-06-28',
  emissionThresholdMtCO2e: 0.5,
  minorPenaltyAED: '50,000-200,000',
  moderatePenaltyAED: '200,000-500,000',
  seriousPenaltyAED: '500,000-1,000,000',
  severePenaltyAED: '1,000,000-2,000,000',
  penaltyMaxAED: 2e6,
}

export const climateKPIData = [
  { kpi: 'Net Zero Target', current: null, target: 2050, status: 'Active' },
  { kpi: 'NDC Rating (Policies)', current: 'Insufficient', target: 'Sufficient', status: 'Gap' },
  { kpi: 'Renewable Energy Capacity', current: '14.2 GW', target: '19.8 GW', status: 'In Progress' },
  { kpi: 'Clean Energy Mix Share', current: null, target: '30%', status: 'In Progress' },
  { kpi: 'Green Hydrogen Production', current: null, target: '1.4 mtpa', status: 'In Progress' },
  { kpi: 'CCUS Capacity', current: '0.8 Mt/year', target: '5 MTPA', status: 'In Progress' },
  { kpi: 'Mangrove Planting', current: null, target: '100 million', status: 'In Progress' },
  { kpi: 'Carbon Credit Market', current: '$36M (2024)', target: '$146.4M', status: 'Growing' },
  { kpi: 'Waste Management Market', current: '$13.7B', target: '$22.6B', status: 'Growing' },
  { kpi: 'ESG Penalty (Max)', current: null, target: 'AED 2M', status: 'Active' },
]

export const climateEntityRegistry = [
  { entity: 'Ministry of Climate Change and Environment (MOCCAE)', role: 'Policy coordination, NRCC', jurisdiction: 'Federal' },
  { entity: 'Abu Dhabi Global Market (ADGM)', role: 'Carbon exchange regulation', jurisdiction: 'Abu Dhabi' },
  { entity: 'Dubai Financial Market (DFM)', role: 'Carbon credit trading pilot', jurisdiction: 'Dubai' },
  { entity: 'Securities and Commodities Authority (SCA)', role: 'Market oversight', jurisdiction: 'Federal' },
  { entity: 'Dubai Electricity and Water Authority (DEWA)', role: 'Solar projects, grid', jurisdiction: 'Dubai' },
  { entity: 'Abu Dhabi National Oil Company (ADNOC)', role: 'Oil, gas, CCUS', jurisdiction: 'Abu Dhabi' },
  { entity: 'Masdar', role: 'Renewable energy, hydrogen', jurisdiction: 'Abu Dhabi' },
  { entity: 'Emirates General Transmission & Desalination', role: 'Water', jurisdiction: 'Federal' },
  { entity: 'Environment Agency Abu Dhabi', role: 'Mangrove, biodiversity', jurisdiction: 'Abu Dhabi' },
  { entity: 'Dubai Municipality', role: 'Waste management', jurisdiction: 'Dubai' },
]

export const climateSentimentByTopic = [
  { topic: 'Net Zero 2050 Target', sentiment: 'Mixed', confidence: 'High', tone: 'Cautiously optimistic with criticism' },
  { topic: 'Renewable Energy Progress', sentiment: 'Positive', confidence: 'High', tone: 'Enthusiastic' },
  { topic: 'Carbon Credit Market', sentiment: 'Positive', confidence: 'High', tone: 'Promotional' },
  { topic: 'CCUS Development', sentiment: 'Neutral', confidence: 'Medium', tone: 'Technical, developmental' },
  { topic: 'Mangrove Restoration', sentiment: 'Positive', confidence: 'High', tone: 'Conservation-focused' },
  { topic: 'Climate Legislation', sentiment: 'Positive', confidence: 'High', tone: 'Compliance-oriented' },
  { topic: 'Water Security', sentiment: 'Concerned', confidence: 'High', tone: 'Urgent' },
  { topic: 'Greenwashing Concerns', sentiment: 'Negative', confidence: 'High', tone: 'Critical' },
]

// ============================================================================
// CLIMATE RISK ASSESSMENT DATA (Section 4 from MD)
// ============================================================================

export const climateRiskData = {
  heat: {
    endOfCenturyProjection: '+1.3C to +4.7C',
    trend: 'More frequent and intense extreme heat events',
    threats: ['Infrastructure damage', 'Public health risks'],
    whoNote: 'Frequency and intensity of heatwaves in UAE on the rise',
  },
  seaLevelRise: {
    abuDhabiProjections: [
      { scenario: 'Mild (RCP4.5, 2C)', rise: '1m', coastalRetreat: '2.26 km', cityFlooded: '1.46%' },
      { scenario: 'Extreme (RCP8.5, 4C)', rise: '2.5-3m', coastalRetreat: '3.81 km', cityFlooded: '15.89%' },
      { scenario: 'Global Range 2100', rise: '0.5-2m', coastalRetreat: '-', cityFlooded: '-' },
    ],
    persianGulfRiseBy2050: '0.5 meters',
    criticalThreats: ['Industrial infrastructure', 'Tourism infrastructure', 'Desalination facilities', 'Power facilities along coast'],
    abuDhabiEconomyShare: '66% of UAE $400B economy (assets at risk)',
  },
  waterStress: {
    status: 'Extremely water-scarce',
    drivers: ['Decreasing rainfall', 'Increasing temperatures', 'Declining groundwater levels', 'Salinization of irrigation water'],
    investmentCommitment: '$160B to renewable energy by 2050',
    purpose: 'Reduce dependence on hydrocarbon-driven water desalination',
  },
  sectorImpacts: ['Human health', 'Energy (electricity and heat)', 'Infrastructure', 'Environment'],
}

// ============================================================================
// CIRCULAR ECONOMY DATA (Section 5 from MD)
// ============================================================================

export const climateCircularEconomyData = {
  policy: {
    name: 'UAE Circular Economy Policy 2021-2031',
    adopted: 'January 2021',
    council: 'UAE Circular Economy Council',
  },
  councilAchievements: {
    policiesApproved: 22,
    meetingDate: 'Second meeting of 2022',
    ledBy: 'Mariam bint Mohammed Almheiri',
  },
  targetSectors: ['Manufacturing', 'Food', 'Infrastructure', 'Transport'],
  policyGoals: [
    'Building a sustainable economy',
    'Promoting efficient use of natural resources',
    'Encouraging private sector adoption of AI and 4IR technologies',
    'Adopting sustainable consumption and production patterns',
  ],
  innovationTrends: [
    { trend: 'Waste-to-resource', category: 'Technology' },
    { trend: 'Reuse', category: 'Process' },
    { trend: 'Internet of waste', category: 'Digital' },
    { trend: 'Artificial intelligence', category: 'Technology' },
    { trend: 'Remanufacturing', category: 'Process' },
    { trend: 'Bio-based materials', category: 'Materials' },
    { trend: 'Blockchain', category: 'Digital' },
    { trend: 'Repair', category: 'Process' },
  ],
  businessOpportunities: [
    'Upcycling textile waste into new products',
    'Developing automated AI-enabled waste management solutions',
    'Remanufacturing electronic waste',
  ],
  keyStatistic: '45% of global GHG emissions result from producing cars, clothes, food, and other products used every day',
  eprScheme: {
    description: 'Extended Producer Responsibility for packaging',
    requirement: 'Producers required to take accountability for waste',
  },
  councilStructure: {
    representatives: 17,
    composition: 'Federal/local government entities, private sector businesses, international organizations',
  },
  council2025: {
    description: 'First meeting of 2025 to discuss implementation of new circular economy policies',
    focus: 'Reviews latest innovations and initiatives led by private sector in sustainable technology, clean energy, and waste management',
  },
}

// ============================================================================
// MENA REGIONAL CLIMATE CONTEXT (Section 13 from MD)
// ============================================================================

export const menaClimateContextData = {
  netZeroCommitments: [
    { year: 2050, countries: ['UAE', 'Oman', 'Lebanon', 'Tunisia'] },
    { year: 2060, countries: ['Bahrain', 'Saudi Arabia', 'Kuwait'] },
  ],
  regionalEmissions: {
    shareGlobalCrudeOilReserves: '50%',
    shareGlobalNaturalGas: '40%',
    perCapitaAnnualEmissions: '13 tonnes CO2e (2x Europe)',
    totalRegionalEmissionsThrough2050: '2 billion tonnes CO2',
  },
  keyNDCTargets: [
    { country: 'Egypt', target: '37% by 2030' },
    { country: 'Saudi Arabia', target: '278 Mt CO2e reduced annually by 2030; 50% renewables by 2030' },
    { country: 'Tunisia', target: '41% by 2030' },
    { country: 'Morocco', target: '18.3% unconditional, 45.5% conditional by 2030' },
    { country: 'Jordan', target: '31% by 2030' },
    { country: 'Qatar', target: '25% by 2030' },
  ],
  carbonMarketInitiatives: [
    { country: 'UAE', initiatives: ['ADGM carbon exchange', 'DFM pilot', 'UAE Carbon Alliance'] },
    { country: 'Saudi Arabia', initiatives: ['RVCMC', 'GCOM', 'Saudi Carbon Exchange (COP29)'] },
    { country: 'Egypt', initiatives: ["Africa's first regulated VCM (July 2024)"] },
    { country: 'Qatar', initiatives: ['Global Carbon Council', 'Safa platform'] },
    { country: 'Oman', initiatives: ['Draft general policy framework'] },
    { country: 'Bahrain', initiatives: ['Safa voluntary carbon offsetting platform'] },
  ],
}

// ============================================================================
// CLIMATE SOURCE CREDIBILITY & URL SUMMARIES (Sections 14-17 from MD)
// ============================================================================

export const climateSourceCredibility = [
  { source: 'UAE Government Portal (u.ae)', tier: 0 as TierLevel, type: 'Official Government', lastVerified: '2026-04-27' },
  { source: 'UAE Legislation (uaelegislation.gov.ae)', tier: 0 as TierLevel, type: 'Official Legal', lastVerified: '2026-04-27' },
  { source: 'Dubai Financial Market (DFM)', tier: 0 as TierLevel, type: 'Official Exchange', lastVerified: '2026-04-27' },
  { source: 'Climate Action Tracker', tier: 1 as TierLevel, type: 'International Research', lastVerified: '2026-04-27' },
  { source: 'PwC, EY, Guidehouse', tier: 1 as TierLevel, type: 'Big Four Advisory', lastVerified: '2026-04-27' },
  { source: 'Grand View Research', tier: 2 as TierLevel, type: 'Market Research', lastVerified: '2026-04-27' },
  { source: 'Atlantic Council, SEI', tier: 1 as TierLevel, type: 'Think Tank', lastVerified: '2026-04-27' },
  { source: 'FAO, WHO', tier: 1 as TierLevel, type: 'International Org', lastVerified: '2026-04-27' },
  { source: 'Earth.org, The National', tier: 2 as TierLevel, type: 'Media/Research', lastVerified: '2026-04-27' },
  { source: 'Khaleej Times, Arab News', tier: 2 as TierLevel, type: 'Regional Media', lastVerified: '2026-04-27' },
  { source: 'Middle East Institute', tier: 2 as TierLevel, type: 'Think Tank', lastVerified: '2026-04-27' },
  { source: 'PS Market Research', tier: 2 as TierLevel, type: 'Market Research', lastVerified: '2026-04-27' },
]

export const climateUrlSummaries = {
  officialUAESources: [
    { url: 'u.ae Net Zero 2050', content: 'Strategy targets, 200K jobs, 3% GDP contribution, 45+ stakeholders', data: 'AED 600B investment, 25+ programmes, 6 sectors' },
    { url: 'u.ae Energy Strategy 2050', content: 'Renewable targets, investment figures, clean capacity goals', data: 'AED 150-200B investment, 19.8 GW capacity, 50K green jobs' },
    { url: 'uaelegislation.gov.ae', content: 'Cabinet Resolution 67/2024, NRCC establishment', data: 'Compliance requirements, June 2025 deadline' },
    { url: 'uaelegislation.gov.ae CE Policy', content: 'Circular Economy Policy 2021-2031', data: '22 policies, 4 sectors, 17 council members' },
  ],
  internationalOrganizations: [
    { url: 'Climate Action Tracker', content: 'UAE ratings, policy assessment', data: '"Insufficient" rating, oil expansion concerns' },
    { url: 'FAO Mangroves', content: 'Gulf restoration efforts, Oman/SA targets', data: '100M trees (Oman), 10B trees (SA)' },
    { url: 'Atlantic Council', content: 'Climate profile, risks', data: 'Temperature projections, water stress' },
  ],
  marketResearch: [
    { url: 'Grand View (Carbon)', content: 'Market size, growth', data: '$36M (2024), $146.4M (2030), 26.7% CAGR' },
    { url: 'Grand View (Waste)', content: 'Market projections', data: '$13.7B (2025), $22.6B (2033)' },
    { url: 'PS Market (WTE)', content: 'Waste-to-energy data', data: '$210M (2025), $302.9M (2032)' },
    { url: 'Report Cubes (E-waste)', content: 'E-waste market', data: '$150M (2025), $253.42M (2034)' },
  ],
  industryCorporate: [
    { url: 'DFM Carbon Credits', content: 'Pilot results', data: '32 trades, 10,656 credits, $38K value' },
    { url: 'Occidental/ADNOC DAC', content: '1MT/year facility study', data: 'Engineering study commenced' },
    { url: 'DEWA Solar Park', content: 'Capacity milestones', data: '3,860 MW current, 8,000+ MW target' },
  ],
  advisoryLegal: [
    { url: 'PwC UAE Climate Law', content: 'Federal Decree-Law 11/2024', data: 'May 2025 effective, 0.5 MtCO2e threshold' },
    { url: 'EY UAE Climate', content: 'Legislative overview', data: 'MRV requirements, decarbonization mandates' },
    { url: 'Arab Legal Chambers', content: 'ESG penalties', data: 'AED 50K-2M penalty structure' },
    { url: 'Guidehouse CCUS', content: 'UAE CCUS plan', data: '5 MTPA target, Al Reyadah, Habshan' },
  ],
}

// ============================================================================
// KEY STATISTICS COMPENDIUM (Section 16 from MD)
// ============================================================================

export const climateStatisticsCompendium = {
  investmentFinance: [
    { statistic: 'Net Zero 2050 Investment', value: 'AED 600B ($163B)', source: 'UAE Government' },
    { statistic: 'Energy Strategy Investment', value: 'AED 150-200B by 2030', source: 'UAE Government' },
    { statistic: 'Green Jobs Target', value: '200,000 (Net Zero), 50,000 (Energy 2030)', source: 'UAE Government' },
    { statistic: 'Water Infrastructure (Dubai)', value: '$22B Strategic Sewerage Tunnels', source: 'CAP' },
    { statistic: 'Saudi Water Investment', value: '$2.14B total', source: 'CAP' },
  ],
  energyEmissions: [
    { statistic: 'UAE CO2 Emissions', value: '204 Mt (0.55% global)', source: 'CATF' },
    { statistic: 'Clean Energy Capacity (Current)', value: '14.2 GW', source: 'UAE Government' },
    { statistic: 'Clean Energy Capacity (2030)', value: '19.8 GW', source: 'UAE Government' },
    { statistic: 'Grid Emission Factor (2030)', value: '0.27 kg CO2/kWh', source: 'UAE Government' },
    { statistic: 'Energy Efficiency Gain', value: '42-45% vs 2019', source: 'UAE Government' },
  ],
  carbonMarkets: [
    { statistic: 'UAE Carbon Market (2023)', value: '$27.9M', source: 'Grand View' },
    { statistic: 'UAE Carbon Market (2024)', value: '$36M', source: 'Grand View' },
    { statistic: 'UAE Carbon Market (2030)', value: '$146.4M', source: 'Grand View' },
    { statistic: 'Market CAGR', value: '26.7%', source: 'Grand View' },
    { statistic: 'DFM Pilot Trades', value: '32 trades', source: 'DFM' },
    { statistic: 'Carbon Credit Price (HQ)', value: '$10-30/tonne', source: 'ReGreener' },
  ],
  waterDesalination: [
    { statistic: 'Desalination Share', value: '42% drinking water', source: 'Arab News' },
    { statistic: 'Liwa Storage Capacity', value: '26M m3', source: 'Dutch Water' },
    { statistic: 'Liwa Recoverable', value: '16M m3', source: 'Dutch Water' },
    { statistic: 'Emergency Supply', value: '90 days', source: 'Dutch Water' },
    { statistic: 'Regional Plants', value: '400+ (Arabian Gulf)', source: 'CAP' },
  ],
  wasteCircularEconomy: [
    { statistic: 'Waste Management Market', value: '$13.7B (2025)', source: 'GVR' },
    { statistic: 'Waste Management Market', value: '$22.6B (2033)', source: 'GVR' },
    { statistic: 'Waste-to-Energy Market', value: '$210M (2025)', source: 'PS Market' },
    { statistic: 'E-Waste Market', value: '$150M (2025)', source: 'Report Cubes' },
    { statistic: 'C&D Waste (2016)', value: '22,817 tonnes', source: 'Emerald' },
    { statistic: 'C&D Waste (2022)', value: '83,215 tonnes', source: 'Emerald' },
    { statistic: 'Global GHG from Products', value: '45%', source: 'MOCCAE' },
  ],
  ccusHydrogen: [
    { statistic: 'CCUS Current Capacity', value: '0.8 Mt/year', source: 'CATF' },
    { statistic: 'CCUS 2030 Target', value: '5 MTPA', source: 'Guidehouse' },
    { statistic: 'DAC Facility Target', value: '1 MTPA', source: 'Occidental' },
    { statistic: 'Green Hydrogen (2031)', value: '1.4 mtpa', source: 'GH2 Org' },
    { statistic: 'Green Hydrogen (2050)', value: '15 mtpa', source: 'GH2 Org' },
    { statistic: 'Storage Potential', value: '22.6 Gt total', source: 'CATF' },
  ],
  mangrovesNatureBased: [
    { statistic: 'Carbon Storage vs Forest', value: '400% faster', source: 'WAM' },
    { statistic: 'Abu Dhabi Rate', value: '0.5 t/ha/year', source: 'EAD' },
    { statistic: 'Total Abu Dhabi', value: '8,750+ tonnes', source: 'EAD' },
    { statistic: 'UAE Target', value: '100 million by 2030', source: 'The National' },
    { statistic: 'Mangrove Park Share', value: '75% of UAE total', source: 'The National' },
    { statistic: 'Mangrove Alliance', value: '$4B by 2030', source: 'FAO' },
  ],
}

// ============================================================================
// RESEARCH METADATA (Section 17 from MD)
// ============================================================================

export const climateResearchMetadata = {
  dateConducted: '2026-04-27',
  atomicQueries: 10,
  sourcesAccessed: '35+',
  webFetchPages: '20+',
  languageCoverage: 'English',
  topicsCovered: ['Net Zero', 'Renewable Energy', 'Climate Risk', 'Circular Economy', 'Carbon Credits', 'CCUS', 'Mangroves', 'Desalination', 'Waste Management', 'Legislation'],
  dataQualityNotes: [
    'Verified Sources: UAE Government portals, legislation websites, and official exchanges provide primary data with highest reliability.',
    'Market Research: Grand View Research, PS Market Research, and Report Cubes provide commercial market data with inherent limitations.',
    'International Organizations: Climate Action Tracker, FAO, CATF provide peer-reviewed assessment data.',
    'News Sources: Khaleej Times, Arab News, The National provide contextual information requiring cross-verification.',
    'Advisory Firms: PwC, EY, Guidehouse provide professional analysis with client context.',
  ],
  gapsLimitations: [
    'Scope 3 emissions data remains limited',
    'Real-time carbon credit pricing not available',
    'Actual vs target progress metrics need annual updating',
    'Some historical data (pre-2020) has verification gaps',
    'Regional comparisons limited by inconsistent methodologies',
  ],
}

// ============================================================================
// CRITICAL PERSPECTIVES & GREENWASHING CONCERNS (Section 12 from MD)
// ============================================================================

export const climateCriticalPerspectives = {
  greenwashingConcerns: [
    'Climate Action Tracker notes UAE plans to expand oil and gas production despite net zero commitment',
    'Heavy reliance on fossil gas and carbon capture storage',
    "ADNOC's 2045 net zero target only covers operational emissions, not Scope 3",
  ],
  internationalAssessment: [
    { rating: 'Policies & Action', assessment: 'Insufficient (<3C world)' },
    { rating: 'NDC Target (fair share)', assessment: 'Insufficient (<3C world)' },
  ],
  euCBAMImplications: {
    affectedExports: '14% of UAE exports (steel, aluminum, fertilizers)',
    impact: 'Carbon border tariffs require decarbonization of export industries',
  },
  industryChallenges: [
    'Industry resistance to carbon pricing',
    'Complex regulatory framework creation',
    'Need for streamlined regulatory framework across emirates',
  ],
  enforcementTrends2026: {
    requirement: 'Sustainability claims must be provable, measurable, and verifiable',
    verification: 'Third-party verification no longer optional',
    penalties: ['Regulatory fines', 'Contract termination', 'ESG-linked financing exclusion', 'Brand erosion'],
  },
}

// ============================================================================
// PREDICTIVE FORESIGHT TRENDS (10-10)
// ============================================================================

export const predictiveForesightData: TrendAnalysis = {
  id: 'trend-10-10',
  category: 'predictive-foresight',
  name: 'Predictive Foresight',
  description: 'The UAE\'s predictive foresight capabilities are anchored in comprehensive vision frameworks (We The UAE 2031, D33, Centennial Plan 2071) with ambitious targets for AI market growth ($46-91B by 2030), workforce expansion (1.03M jobs), and economic diversification. The UAE navigates macroeconomic volatility including the April 2026 Iran war impact with $8B Central Bank injection, demonstrating crisis resilience while pursuing long-term vision targets.',
  adoptionRate: 70,
  uaeAdoptionRate: 85,
  generationalBreakdown: {
    genZ: 68,
    millennial: 78,
    genX: 80,
    boomer: 62,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'We The UAE 2031, Dubai Economic Agenda D33, National AI Strategy 2031, Net Zero 2050',
    effectiveDate: '2021-01-01',
  },
  sentiment: {
    positive: 74,
    negative: 14,
    neutral: 12,
    overall: 0.72,
    volume: 34000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.78,
      timeline: '2026-2027',
      indicators: [
        'GDP growth 5.6% (Central Bank), AI market $46.33B by 2030 (43.9% CAGR)',
        'Workforce +12.1% by 2030 (1.03M jobs), Digital economy 20% non-oil GDP by 2030',
        'FDI $45B (+50% YoY), Trade $1.637T (9th globally)',
        'AI contribution to GDP $96B by 2031, Construction $96.06B by 2030',
      ],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2030',
      indicators: [
        'AI market $46-91B by 2030/2031, MGX target $100B AI assets',
        'Population 13.6M by 2040 (+23% growth), Dubai 4M+ residents',
        'Clean energy 14 GW by 2030 (target), Real estate $52.32B by 2030',
        'Workforce expansion +12.1% total employment, 91,000 tech specialists needed',
      ],
    },
    {
      scenario: 'pessimistic',
      probability: 0.35,
      timeline: '2026-2028',
      indicators: [
        'Oil production 2.37M bpd (-35% due to Iran war), Potential $200+/bbl oil',
        'Property market -7% annually (2026-28), GDP downgrade to 3.1% (IMF)',
        'Safe haven status at risk (70% risk premia), Capital flight concerns',
        'Regional geopolitical tensions, Global AI talent shortage',
      ],
    },
  ],
  keyDrivers: [
    'AI market: $3.47B (2023) to $46.33B (2030) at 43.9% CAGR, $91-96B by 2031',
    'Workforce: 1.03M jobs by 2030 (+12.1%), 91,000 tech specialists needed, 70% employers struggle to find staff',
    'Vision: GDP AED 3T by 2031 (from AED 1.49T), non-oil GDP 75%+ achieved',
    'Construction: $66.89B (2024) to $96.06B (2030) at 6.06% CAGR, $470B infrastructure pipeline',
    'MGX $100B AI investment target, G42 $1.5B Microsoft partnership, Stargate $500B AI fund',
    'Crisis response: $8B Central Bank injection, 6.8M bpd alternative export routes',
    'Real estate: $36.32B (2024) to $52.32B (2030), +464% transactions vs 2021',
  ],
  keyFindings: [
    {
      finding: 'GDP Growth Trajectory',
      metric: '5.6% (2026) vs 3.1% war-impact scenario',
      source: 'UAE Central Bank, IMF',
      tier: 0 as TierLevel,
      alert: 'YELLOW' as AlertLevel,
    },
    {
      finding: 'AI Market Expansion',
      metric: '$3.47B to $46.33B by 2030 (43.9% CAGR)',
      source: 'Grand View Research',
      tier: 2 as TierLevel,
    },
    {
      finding: 'Workforce Expansion',
      metric: '1.03M jobs by 2030 (+12.1% total employment)',
      source: 'LinkedIn/Gulf Business',
      tier: 2 as TierLevel,
    },
    {
      finding: 'April 2026 Crisis Impact',
      metric: 'Oil -35% (2.37M bpd), $8B Central Bank injection deployed',
      source: 'The National, IEA',
      tier: 0 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'Vision Framework Targets',
      metric: 'GDP AED 3T by 2031, 80%+ non-oil GDP, 14 GW clean energy',
      source: 'u.ae, Masdar',
      tier: 0 as TierLevel,
    },
  ],
  sources: [
    { name: 'UAE Government Portal (u.ae)', tier: 0 as TierLevel, date: '2026-04-28' },
    { name: 'UAE Central Bank', tier: 0 as TierLevel, date: '2026-04-28' },
    { name: 'World Bank', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'IMF', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'Grand View Research', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'LinkedIn/Gulf Business', tier: 2 as TierLevel, date: '2026-04-28' },
    { name: 'The National', tier: 1 as TierLevel, date: '2026-04-28' },
    { name: 'Masdar', tier: 0 as TierLevel, date: '2026-04-28' },
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 92,
    sources: 20,
    lastVerified: '2026-04-28',
  },
  uaeRelevance: {
    score: 98,
    level: 'critical' as const,
    justification: 'Predictive foresight directly informs strategic planning, resource allocation, and crisis response for UAE\'s $1.49T+ economy',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  lastUpdated: '2026-04-28',
}

// ============================================================================
// TRENDS OVERVIEW (Record by Category)
// ============================================================================

export const trendsOverview: Record<TrendCategory, TrendAnalysis> = {
  'ai-technology': aiTechnologyData,
  'social-media': socialMediaTrendsData,
  'generational': generationalShiftData,
  'geopolitical': geopoliticalShiftData,
  'economic': economicTrendsData,
  'cultural': culturalEvolutionData,
  'regulatory': regulatoryTrendsData,
  'media-industry': mediaIndustryTrendsData,
  'climate': climateSustainabilityData,
  'predictive-foresight': predictiveForesightData,
}

// ============================================================================
// INDIVIDUAL EXPORTS (for selective imports)
// ============================================================================

export const trendsDataArray: TrendAnalysis[] = [
  aiTechnologyData,
  socialMediaTrendsData,
  generationalShiftData,
  geopoliticalShiftData,
  economicTrendsData,
  culturalEvolutionData,
  regulatoryTrendsData,
  mediaIndustryTrendsData,
  climateSustainabilityData,
  predictiveForesightData,
]

// Export counts for validation
export const trendsDataMeta = {
  totalTrends: 10,
  lastUpdated: '2026-04-27',
  dataSource: 'micro-queries/part-10/*.md',
  categoriesCovered: [
    'ai-technology',
    'social-media',
    'generational',
    'geopolitical',
    'economic',
    'cultural',
    'regulatory',
    'media-industry',
    'climate',
    'predictive-foresight',
  ] as TrendCategory[],
}

// ============================================================================
// GEOPOLITICAL SHIFT ENRICHED DATA (10-4) - 100% MD content
// ============================================================================

export interface SourceCredibility {
  source: string
  tier: TierLevel
  credibility: number
  type: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface EnrichmentMetadata {
  totalSourcesProcessed: number
  sourcesSuccessfullyFetched: number
  sourcesFailed: number
  pdfContentExtraction: string
  uaeRelevanceCritical: number
  uaeRelevanceHigh: number
  uaeRelevanceMedium: number
}

export interface MultipolarStatistics {
  metric: string
  value: string | number
  year: number
}

export interface BRICSExpansion {
  country: string
  joinDate: string
  status: string
}

export interface CurrencyDistribution {
  currency: string
  share: string
}

export interface GreatPowerPerception {
  finding: string
  percentage: string
}

export interface SentimentScore {
  dimension: string
  score: number
  interpretation: string
}

export interface EconomicGrowth {
  metric: string
  value1975?: string
  value2023?: string
  value2025?: string
  target2031?: string
}

export interface CEPAData {
  metric: string
  value: string | number
}

export interface AfricaInvestment {
  metric: string
  value: string | number
}

export interface LogisticsSector {
  metric: string
  value: string | number
}

export interface DefenseIndustry {
  metric: string
  value: string | number
}

export interface TechnologyAI {
  metric: string
  value: string | number
}

export interface StrategicInvestment {
  partner: string
  amount: string
  sector: string
}

export interface EnergyClimate {
  metric: string
  value: string
}

export interface SpaceAchievement {
  achievement: string
  year: string
}

export interface BRICSMembership {
  event: string
  date: string
  details: string
}

export interface DeDollarizationMechanism {
  mechanism: string
  details: string
}

export interface LocalCurrencySettlement {
  countryPair: string
  details: string
  date?: string
}

export interface CountryPosition {
  country: string
  position: string
  quote?: string
}

export interface SaudiUAEConfrontation {
  event: string
  details: string
}

export interface RegionalPowerPortfolio {
  actor: string
  dominantPowerMode: string
}

export interface IndiaUAEAgreement {
  agreement: string
  uaeParty: string
  indiaParty: string
}

export interface RegionalFramework {
  framework: string
  members: string
  uaeIndiaRole: string
}

export interface UAEEnergyStrategy {
  target: string
  value: string
  timeline?: string
}

export interface DiversificationProgress {
  metric: string
  value2000?: string
  value2023?: string
  change?: string
}

export interface RenewableEnergy {
  facility: string
  capacity: string
  status: string
}

export interface ClimateCommitment {
  commitment: string
  targetYear?: string
  original?: string
  revised?: string
}

export interface HydrogenProject {
  element: string
  detail: string
}

export interface EntityCountry {
  entity: string
  role: string
  uaeRelationship: string
  sentiment: string
}

export interface EntityOrganization {
  organization: string
  uaeStatus: string
  relevance: string
}

export interface KeyIndividual {
  individual: string
  role: string
}

export interface TopicSentiment {
  topic: string
  meanSentiment: number
  trend: string
  keyDrivers: string
}

export interface GeopoliticalKPIs {
  kpi: string
  value: string
  trend: string
  target?: string
  status: string
}

export interface RegionalStabilityKPIs {
  kpi: string
  value: string
  trend: string
  implication: string
}

export interface BRICSDedollarizationKPIs {
  kpi: string
  value: string
  trend: string
  viability?: string
}

export interface GeopoliticalExtendedData {
  executionMetadata: EnrichmentMetadata
  sourceCredibilityMatrix: SourceCredibility[]
  multipolarStatistics: MultipolarStatistics[]
  bricsExpansion: BRICSExpansion[]
  currencyDistribution: CurrencyDistribution[]
  greatPowerPerceptions: GreatPowerPerception[]
  multipolarSentiment: SentimentScore[]
  uaeTransformationSentiment: SentimentScore[]
  economicGrowth: EconomicGrowth[]
  cepaData: CEPAData[]
  africaInvestment: AfricaInvestment[]
  logisticsSector: LogisticsSector[]
  defenseIndustry: DefenseIndustry[]
  technologyAI: TechnologyAI[]
  strategicInvestments: StrategicInvestment[]
  energyClimate: EnergyClimate[]
  spaceAchievements: SpaceAchievement[]
  bricsMembershipTimeline: BRICSMembership[]
  dedollarizationMechanisms: DeDollarizationMechanism[]
  localCurrencySettlements: LocalCurrencySettlement[]
  countryPositions: CountryPosition[]
  saudUAEConfrontation: SaudiUAEConfrontation[]
  regionalPowerPortfolios: RegionalPowerPortfolio[]
  indiaUAEAgreements: IndiaUAEAgreement[]
  regionalFrameworks: RegionalFramework[]
  uaeEnergyStrategy: UAEEnergyStrategy[]
  diversificationProgress: DiversificationProgress[]
  renewableEnergy: RenewableEnergy[]
  climateCommitments: ClimateCommitment[]
  hydrogenProjects: HydrogenProject[]
  entityRegistry: {
    countries: EntityCountry[]
    organizations: EntityOrganization[]
    keyIndividuals: KeyIndividual[]
  }
  topicSentiment: TopicSentiment[]
  geopoliticalKPIs: GeopoliticalKPIs[]
  regionalStabilityKPIs: RegionalStabilityKPIs[]
  bricsDedollarizationKPIs: BRICSDedollarizationKPIs[]
}

export const geopoliticalExtendedData: GeopoliticalExtendedData = {
  executionMetadata: {
    totalSourcesProcessed: 20,
    sourcesSuccessfullyFetched: 14,
    sourcesFailed: 6,
    pdfContentExtraction: 'Partial (Compressed Streams)',
    uaeRelevanceCritical: 8,
    uaeRelevanceHigh: 7,
    uaeRelevanceMedium: 5,
  },
  sourceCredibilityMatrix: [
    { source: 'Munich Security Conference', tier: 2 as TierLevel, credibility: 9.0, type: 'Think Tank/Conference', uaeRelevance: 'High' },
    { source: 'Belfer Center (Harvard)', tier: 2 as TierLevel, credibility: 8.8, type: 'Academic/Policy', uaeRelevance: 'High' },
    { source: 'Carnegie Endowment', tier: 2 as TierLevel, credibility: 8.7, type: 'Think Tank', uaeRelevance: 'High' },
    { source: 'Lowy Institute', tier: 2 as TierLevel, credibility: 8.2, type: 'Think Tank', uaeRelevance: 'Medium' },
    { source: 'Frontiers (Peer-reviewed)', tier: 3 as TierLevel, credibility: 7.8, type: 'Academic Journal', uaeRelevance: 'High' },
    { source: 'IRENA', tier: 2 as TierLevel, credibility: 8.5, type: 'IGO', uaeRelevance: 'High' },
    { source: 'MEA (India Government)', tier: 1 as TierLevel, credibility: 9.2, type: 'Government', uaeRelevance: 'High' },
    { source: 'CIDOB', tier: 3 as TierLevel, credibility: 7.5, type: 'Think Tank', uaeRelevance: 'Medium' },
    { source: 'CADTM', tier: 3 as TierLevel, credibility: 7.0, type: 'NGO', uaeRelevance: 'Medium' },
    { source: 'FRS Strategie', tier: 3 as TierLevel, credibility: 7.3, type: 'Think Tank', uaeRelevance: 'High' },
    { source: 'MEF (Middle East Forum)', tier: 3 as TierLevel, credibility: 6.8, type: 'Think Tank', uaeRelevance: 'High' },
    { source: 'The Daily Economy', tier: 3 as TierLevel, credibility: 6.5, type: 'News/Analysis', uaeRelevance: 'High' },
    { source: 'The National Interest', tier: 3 as TierLevel, credibility: 7.0, type: 'Magazine', uaeRelevance: 'High' },
    { source: 'Times of Israel Blogs', tier: 3 as TierLevel, credibility: 6.5, type: 'Blog', uaeRelevance: 'Medium' },
    { source: 'Firstpost', tier: 3 as TierLevel, credibility: 6.3, type: 'News', uaeRelevance: 'Medium' },
    { source: 'Jerusalem Post', tier: 3 as TierLevel, credibility: 7.0, type: 'News', uaeRelevance: 'High' },
    { source: 'Forbes India', tier: 3 as TierLevel, credibility: 6.8, type: 'Magazine', uaeRelevance: 'Medium' },
    { source: 'Wiley Online Library', tier: 2 as TierLevel, credibility: 8.0, type: 'Academic', uaeRelevance: 'Medium' },
    { source: 'Arab Center DC', tier: 3 as TierLevel, credibility: 6.5, type: 'Think Tank', uaeRelevance: 'Medium' },
    { source: 'EURASIA Review', tier: 4 as TierLevel, credibility: 5.5, type: 'News/Analysis', uaeRelevance: 'Medium' },
  ],
  multipolarStatistics: [
    { metric: 'Global trade (BRICS share)', value: '40%', year: 2024 },
    { metric: 'Crude oil production (BRICS share)', value: '40%', year: 2024 },
    { metric: 'Crude oil exports (BRICS share)', value: '40%', year: 2024 },
    { metric: 'BRICS GDP (PPP) vs G7', value: 'Surpassed G7', year: 2018 },
    { metric: 'Global population in autocratic countries', value: '71%', year: 2024 },
    { metric: 'Global population in autocratic countries', value: '48%', year: 2013 },
    { metric: 'Countries moving toward autocracy', value: 42, year: 2023 },
    { metric: 'Countries moving toward democracy', value: 18, year: 2023 },
  ],
  bricsExpansion: [
    { country: 'Egypt', joinDate: 'January 2024', status: 'Full Member' },
    { country: 'Ethiopia', joinDate: 'January 2024', status: 'Full Member' },
    { country: 'Iran', joinDate: 'January 2024', status: 'Full Member' },
    { country: 'United Arab Emirates', joinDate: 'January 2024', status: 'Full Member' },
    { country: 'Saudi Arabia', joinDate: '-', status: 'Undecided' },
    { country: 'Argentina', joinDate: '-', status: 'Withdrawn (Post-Milei election)' },
  ],
  currencyDistribution: [
    { currency: 'US Dollar', share: '57%' },
    { currency: 'Euro', share: '20%' },
    { currency: 'Chinese Renminbi', share: '2%+' },
  ],
  greatPowerPerceptions: [
    { finding: 'Respondents viewing US, China, Russia as great powers', percentage: '>80%' },
    { finding: 'Indians viewing India as great power', percentage: '78%' },
    { finding: 'Germans viewing Germany as great power', percentage: '22%' },
    { finding: 'Viewers seeing US as dominant', percentage: '~33%' },
    { finding: 'Viewers seeing US and China as co-dominant', percentage: '~33%' },
  ],
  multipolarSentiment: [
    { dimension: 'Tone toward multipolarity', score: 0, interpretation: 'Neutral - Descriptive of shift' },
    { dimension: 'UAE sentiment', score: 0.4, interpretation: 'Positive - Enablement of hedging' },
    { dimension: 'US decline narrative', score: 0, interpretation: 'Mixed - Acknowledged but contested' },
    { dimension: 'BRICS optimism', score: -0.1, interpretation: 'Cautious - Economic rise but limited military' },
  ],
  uaeTransformationSentiment: [
    { dimension: 'UAE transformation narrative', score: 0.8, interpretation: 'Strongly Positive - Success story framing' },
    { dimension: 'US partnership', score: 0.6, interpretation: 'Positive - Maintained' },
    { dimension: 'China engagement', score: 0, interpretation: 'Neutral - Economic only' },
    { dimension: 'BRICS membership', score: 0, interpretation: 'Neutral - Hedging instrument' },
    { dimension: 'Western alliances', score: 0.6, interpretation: 'Positive - Core commitment' },
  ],
  economicGrowth: [
    { metric: 'GDP', value1975: '$20B', value2023: '$456B', value2025: '$569.1B', target2031: '$800B+' },
    { metric: 'Non-oil sector share', value2025: '77.3% (Q1 2025)', target2031: undefined },
    { metric: 'Oil share of GDP', value2023: '<25%', value2025: undefined },
  ],
  cepaData: [
    { metric: 'CEPAs concluded (since Sep 2021)', value: 32 },
    { metric: 'Trade target by 2031', value: '$1 trillion' },
    { metric: 'World population coverage', value: '~25%' },
  ],
  africaInvestment: [
    { metric: 'UAE investments in Africa', value: '$110 billion' },
    { metric: 'African companies in Dubai Chamber', value: '26,910 (end 2024)' },
    { metric: 'Annual African company growth', value: '>29%' },
  ],
  logisticsSector: [
    { metric: 'Current logistics value (2023)', value: 'AED 129B' },
    { metric: 'Target (within 7 years)', value: 'AED 200B ($54.45B)' },
    { metric: 'Population within 4-5hr flight', value: '2 billion' },
  ],
  defenseIndustry: [
    { metric: 'EDGE Group global rank', value: '37th' },
    { metric: 'EDGE Group arms sales (2024)', value: '$4.7B (SIPRI)' },
    { metric: 'US defense partnership', value: 'Major defense partner (May 2025)' },
    { metric: 'India defense partnership', value: 'Major defense partner (Sep 2024)' },
  ],
  technologyAI: [
    { metric: 'AI firms per million (global rank)', value: '9th' },
    { metric: 'Digital economy share (2021)', value: '11.7% of GDP' },
    { metric: 'Digital economy target (2031)', value: '>20% of GDP' },
    { metric: 'Smart City Index - Abu Dhabi rank', value: '10th globally (2024)' },
    { metric: 'Smart City Index - Dubai rank', value: '12th of 142 (2024)' },
    { metric: 'AI language models', value: 'Jais, Falcon 2, NANDA' },
    { metric: 'Stargate UAE initial capacity', value: '200 MW' },
    { metric: 'Stargate UAE planned capacity', value: '1 GW (2026 delivery)' },
  ],
  strategicInvestments: [
    { partner: 'UAE-France AI data center', amount: '$50B', sector: 'AI' },
    { partner: 'UAE-Italy partnership', amount: '$40B', sector: 'AI, quantum, energy' },
    { partner: 'UAE investment framework in US', amount: '$1.4T', sector: 'Multi-sector' },
    { partner: 'Microsoft investment in UAE (by 2029)', amount: '$15.2B', sector: 'Technology' },
    { partner: 'Microsoft investment in G42', amount: '$1.5B (2024)', sector: 'AI' },
    { partner: 'Masdar-US clean energy', amount: '$100B', sector: 'Clean energy' },
    { partner: 'UAE-India food security corridor', amount: '$7B', sector: 'Food security' },
    { partner: 'Global Alliance Against Hunger', amount: '$100M', sector: 'Humanitarian' },
  ],
  energyClimate: [
    { metric: 'Solar cost position', value: "World's lowest-cost production" },
    { metric: 'COP28 achievement', value: 'UAE Consensus (198 countries)' },
    { metric: 'Net-zero commitment', value: 'First MENA country, 2050' },
    { metric: 'Largest solar + battery storage', value: 'Abu Dhabi (Jan 2025)' },
    { metric: 'Largest solar-powered data center', value: 'Dubai (Phase 2)' },
  ],
  spaceAchievements: [
    { achievement: 'Mars Exploration Project', year: '2021' },
    { achievement: 'Lunar Exploration Project', year: 'Ongoing' },
    { achievement: 'First Arab astronaut spacewalk', year: 'Sultan Al Neyadi' },
  ],
  bricsMembershipTimeline: [
    { event: 'Invitations extended', date: 'August 2023', details: '6 nations: Argentina, Egypt, Ethiopia, Iran, Saudi Arabia, UAE' },
    { event: 'Full membership (BRICS-10)', date: 'January 2024', details: 'Egypt, Ethiopia, Iran, UAE joined' },
    { event: 'Saudi Arabia', date: '-', details: 'Undecided' },
    { event: 'Argentina', date: '-', details: 'Withdrawn (Post-Milei)' },
    { event: 'Partner countries', date: '2024', details: 'Algeria, Nigeria, Uganda, Kazakhstan, Malaysia, Thailand, Uzbekistan, Belarus, Bolivia' },
    { event: 'Nigeria partner status', date: 'January 2025', details: 'Joined as partner' },
  ],
  dedollarizationMechanisms: [
    { mechanism: 'BRICS Pay', details: 'Decentralized payment messaging for local currency transactions' },
    { mechanism: 'Kazan summit discussion', details: 'October 2024' },
    { mechanism: 'Gold reserves (2024)', details: '1,045 metric tons (3rd consecutive year >1,000 tons)' },
  ],
  localCurrencySettlements: [
    { countryPair: 'Russia-China', details: '99.1% in rubles/yuan' },
    { countryPair: 'China-Brazil', details: 'Direct local currency settlement', date: '2023' },
    { countryPair: 'Egypt (BRICS members)', details: 'Confirmed local currency settlements', date: 'July 2025' },
  ],
  countryPositions: [
    { country: 'Russia (Putin, Nov 2024)', position: 'Not seeking dollar abandonment', quote: '"Not seeking to move away from the dollar"' },
    { country: 'India', position: 'Opposed common currency', quote: '"Imagine us having a currency shared with China. It is impossible" (Commerce Minister Goyal)' },
    { country: 'India', position: 'Dollar as reserve source of stability', quote: '"The dollar as the reserve currency is the source of international economic stability" (FM Jaishankar, Mar 2025)' },
  ],
  saudUAEConfrontation: [
    { event: 'Saudi open confrontation', details: 'Against UAE (ostensible Yemen partner)' },
    { event: 'UAE-backed forces seized', details: 'Hadramawt, Mahra provinces' },
    { event: 'Saudi response', details: 'Airstrikes at Mukalla port' },
    { event: 'Saudi accusation', details: 'UAE "threatening national security"' },
    { event: 'UAE outcome', details: 'Forced to withdraw forces from Yemen' },
  ],
  regionalPowerPortfolios: [
    { actor: 'Israel', dominantPowerMode: 'Hard power (military)' },
    { actor: 'Saudi Arabia', dominantPowerMode: 'Scale, religious symbolism, convening authority' },
    { actor: 'UAE', dominantPowerMode: 'Logistics networks, elite commercial access' },
    { actor: 'Qatar', dominantPowerMode: 'Narrative production, Islamist patronage' },
    { actor: 'Turkey', dominantPowerMode: 'Geographic centrality, coercive flexibility' },
  ],
  indiaUAEAgreements: [
    { agreement: 'Strategic Defense Partnership', uaeParty: 'LOI exchanged', indiaParty: 'LOI exchanged' },
    { agreement: 'Space Cooperation', uaeParty: 'UAE Space Agency', indiaParty: 'IN-SPACe' },
    { agreement: 'Energy', uaeParty: 'ADNOC Gas', indiaParty: 'Hindustan Petroleum' },
    { agreement: 'Food Safety', uaeParty: 'UAE entities', indiaParty: 'Indian counterparts' },
    { agreement: 'Investment', uaeParty: 'Ministry of Investment', indiaParty: 'Gujarat (Dholera SIR)' },
  ],
  regionalFrameworks: [
    { framework: 'IMEC (India-Middle East-Europe Economic Corridor)', members: 'Multiple', uaeIndiaRole: 'Both key partners' },
    { framework: 'I2U2', members: 'India, Israel, UAE, US', uaeIndiaRole: 'Pax Silica declaration (Jan 14)' },
    { framework: 'Pax Silica signatories', members: 'Australia, Israel, Japan, S. Korea, Qatar, Singapore, UK + India next', uaeIndiaRole: 'India joining' },
  ],
  uaeEnergyStrategy: [
    { target: 'Clean energy production', value: 'Triple capacity', timeline: '2030' },
    { target: 'Renewable capacity target', value: '14.2 GW', timeline: '2030' },
    { target: 'AI leadership', value: 'World leader', timeline: '2031' },
  ],
  diversificationProgress: [
    { metric: 'Oil sector share of exports', value2000: '93.8%', value2023: '68.2%', change: '-25.6 pts' },
    { metric: 'GDP', value2000: '$104.3B', value2023: '$514.1B', change: '+393%' },
    { metric: 'GDP per capita', value2000: '$29,865.5', value2023: '$49,040.7', change: '+64%' },
    { metric: 'High-tech exports', value2000: '$493.1M', value2023: '$3.4B', change: '+592%' },
    { metric: 'FDI inflows', value2000: '$10.9B (2005)', value2023: '$30.7B (2023)', change: '+181%' },
    { metric: 'Natural resource rents', value2000: '22.4% GDP (2000)', value2023: '17.6% GDP (2021)', change: '-4.8 pts' },
  ],
  renewableEnergy: [
    { facility: 'Barakah Nuclear Plant', capacity: '4,251 MW', status: 'Operational' },
    { facility: 'Shams 1 Solar', capacity: '100 MW', status: 'Operational' },
    { facility: 'Solar installations', capacity: '1,875 MW', status: 'Installed' },
    { facility: 'Oil reserves', capacity: '107 billion barrels', status: '-' },
    { facility: 'Natural gas reserves', capacity: '7.7 trillion cubic meters', status: '-' },
  ],
  climateCommitments: [
    { commitment: 'Net-zero (UAE)', targetYear: '2050' },
    { commitment: 'Net-zero (ADNOC)', targetYear: '2045', revised: 'Accelerated from 2050' },
    { commitment: 'Renewable capacity', targetYear: '2022', original: '<500 MW', revised: '~4,000 MW' },
    { commitment: 'Nuclear (Barakah)', commitment: '25% electricity', targetYear: undefined },
  ],
  hydrogenProjects: [
    { element: 'Launch year', detail: '2023' },
    { element: 'Objective', detail: 'Position UAE as future hydrogen hub' },
    { element: 'COP28 showcase', detail: 'First operational hydrogen plant at Expo 2020 Dubai' },
  ],
  entityRegistry: {
    countries: [
      { entity: 'United Arab Emirates', role: 'Central actor', uaeRelationship: '-', sentiment: 'Positive' },
      { entity: 'Saudi Arabia', role: 'Regional rival', uaeRelationship: 'Negative (confrontation)', sentiment: 'Negative' },
      { entity: 'Iran', role: 'Regional power', uaeRelationship: 'Negative (war context)', sentiment: 'Negative' },
      { entity: 'United States', role: 'Security partner', uaeRelationship: 'Core alliance', sentiment: 'Mixed (concerned re: withdrawal)' },
      { entity: 'China', role: 'Economic partner', uaeRelationship: 'Positive (trade)', sentiment: 'Neutral' },
      { entity: 'Russia', role: 'BRICS ally', uaeRelationship: 'Neutral', sentiment: 'Cautious' },
      { entity: 'India', role: 'Strategic partner', uaeRelationship: 'Strongly Positive', sentiment: 'Very Positive' },
      { entity: 'Israel', role: 'Normalization partner', uaeRelationship: 'Positive (normalization)', sentiment: 'Complex' },
      { entity: 'Qatar', role: 'Competitor', uaeRelationship: 'Negative', sentiment: 'Negative' },
      { entity: 'Turkey', role: 'Regional competitor', uaeRelationship: 'Negative', sentiment: 'Negative' },
      { entity: 'Pakistan', role: 'Former ally', uaeRelationship: 'Worsening', sentiment: 'Negative' },
      { entity: 'Egypt', role: 'BRICS partner', uaeRelationship: 'Positive', sentiment: 'Positive' },
      { entity: 'Brazil', role: 'BRICS member', uaeRelationship: 'Neutral', sentiment: 'Neutral' },
      { entity: 'South Africa', role: 'BRICS member', uaeRelationship: 'Neutral', sentiment: 'Neutral' },
    ],
    organizations: [
      { organization: 'BRICS', uaeStatus: 'Member (Jan 2024)', relevance: 'Critical' },
      { organization: 'OPEC', uaeStatus: 'Member', relevance: 'Complex' },
      { organization: 'GCC', uaeStatus: 'Member', relevance: 'Core' },
      { organization: 'I2U2', uaeStatus: 'Member', relevance: 'High' },
      { organization: 'IMEC', uaeStatus: 'Participant', relevance: 'High' },
      { organization: 'COP28', uaeStatus: 'Host', relevance: 'Critical' },
      { organization: 'UN', uaeStatus: 'Member', relevance: 'Standard' },
      { organization: 'NATO', uaeStatus: 'Non-member', relevance: 'Indirect' },
      { organization: 'EDGE Group', uaeStatus: 'UAE defense champion', relevance: 'High' },
    ],
    keyIndividuals: [
      { individual: 'Sheikh Mohamed bin Zayed', role: 'UAE President' },
      { individual: 'Modi', role: 'Indian Prime Minister' },
      { individual: 'Putin', role: 'Russian President' },
      { individual: 'MBS', role: 'Saudi Crown Prince' },
    ],
  },
  topicSentiment: [
    { topic: 'Multipolar transition', meanSentiment: 0.3, trend: 'Rising', keyDrivers: 'BRICS growth, US withdrawal' },
    { topic: 'BRICS effectiveness', meanSentiment: -0.2, trend: 'Stable', keyDrivers: 'Divergent interests, no common currency' },
    { topic: 'UAE-Saudi relations', meanSentiment: -0.8, trend: 'Declining', keyDrivers: 'Yemen confrontation' },
    { topic: 'UAE-India relations', meanSentiment: 0.9, trend: 'Rising', keyDrivers: 'Defense, tech, food security' },
    { topic: 'US-Gulf relations', meanSentiment: 0.1, trend: 'Declining', keyDrivers: 'Pivot, disengagement' },
    { topic: 'Climate leadership', meanSentiment: 0.7, trend: 'Rising', keyDrivers: 'COP28, diversification' },
    { topic: 'De-dollarization', meanSentiment: -0.1, trend: 'Stable', keyDrivers: 'Reality check, limited progress' },
  ],
  geopoliticalKPIs: [
    { kpi: 'BRICS membership status', value: 'Full member', trend: 'New (2024)', status: 'On Track' },
    { kpi: 'CEPA agreements', value: '32', trend: '+32 since 2021', target: '$1T trade by 2031', status: 'On Track' },
    { kpi: 'GDP (2025)', value: '$569.1B', trend: '+2,845% since 1975', target: '$800B by 2031', status: 'On Track' },
    { kpi: 'Non-oil GDP share', value: '77.3%', trend: 'Increasing', target: '>80%', status: 'On Track' },
    { kpi: 'Defense exports (EDGE)', value: '$4.7B', trend: 'Stable', status: 'Monitoring' },
    { kpi: 'Renewable capacity', value: '~6,126 MW', trend: 'Rapid growth', target: '14.2 GW by 2030', status: 'Off Track' },
    { kpi: 'AI global rank', value: '9th per capita', trend: 'Stable', target: 'Top 5', status: 'On Track' },
    { kpi: 'India partnership value', value: '$7B corridor', trend: 'Growing', status: 'On Track' },
    { kpi: 'US defense partner status', value: 'Major partner', trend: 'Stable', status: 'On Track' },
    { kpi: 'Africa investment', value: '$110B', trend: 'Growing', status: 'On Track' },
  ],
  regionalStabilityKPIs: [
    { kpi: 'Saudi-UAE tension level', value: 'Critical', trend: 'Deteriorating', implication: 'Yemen confrontation' },
    { kpi: 'Iran threat level', value: 'High', trend: 'Stable', implication: 'War context' },
    { kpi: 'US presence', value: 'Reducing', trend: 'Declining', implication: 'Power vacuum' },
    { kpi: 'China influence', value: 'Moderate', trend: 'Growing', implication: 'Economic focus' },
    { kpi: 'Israel-UAE normalization value', value: 'Low', trend: 'Declining', implication: 'Saudi pressure' },
  ],
  bricsDedollarizationKPIs: [
    { kpi: 'BRICS Pay status', value: 'Launched', trend: 'Early stage', viability: 'Limited' },
    { kpi: 'Local currency (Russia-China)', value: '99.1%', trend: 'Stable', viability: 'Bilateral only' },
    { kpi: 'Common currency support', value: '0', trend: 'Rejected', viability: 'Not viable' },
    { kpi: 'Gold reserves (global)', value: '1,045 tons', trend: 'Increasing', viability: 'Diversification' },
    { kpi: 'Dollar reserve share', value: '57%', trend: 'Declining slowly', viability: 'Still dominant' },
  ],
}

// Export for use in dashboard
export const geopoliticalExtended = geopoliticalExtendedData

// ============================================================================
// ECONOMIC TRENDS ENRICHED DATA (10-5) - 100% MD content
// ============================================================================

export interface Tier1KPI {
  id: string
  name: string
  value: string
  period: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  changeType?: 'up' | 'down' | 'stable'
  change?: number
}

export interface Tier2SectorKPI {
  id: string
  name: string
  value: string
  period: string
  change?: number
}

export interface GDPHistorical {
  year: number
  growth: number
  vsPriorYear: number
  sentiment: string
}

export interface GDPForecast {
  source: string
  tier: number
  2025: number
  2026: number
  2027?: number
}

export interface InternationalComparison {
  country: string
  growth: number
}

export interface SectorPerformance {
  sector: string
  value: string
  period: string
  sentiment: 'positive' | 'stable' | 'negative'
}

export interface TradeDataPoint {
  category: string
  value: string
  period?: string
  change?: number
}

export interface TourismDataPoint {
  metric: string
  value: string
  change?: number
}

export interface BankingDataPoint {
  metric: string
  value?: string
  change?: number
}

export interface StartupDataPoint {
  metric: string
  value: string
  change?: number
}

export interface LaborMarketDataPoint {
  metric: string
  value: string
}

export interface InflationDataPoint {
  period: string
  rate: string
  source: string
}

export interface InflationComponent {
  component: string
  rate: string
  impact: 'High' | 'Medium' | 'Low'
}

export interface FDIDataPoint {
  year: string
  inflows: string
  growth?: string
  rank?: string
}

export interface FDI2025 {
  inflows: string
  growth: string
  greenfield: string
  rank: string
}

export interface PrioritySector {
  id: number
  sector: string
  priority: 'Critical' | 'High' | 'Medium'
  uaeRelevance: 'Critical' | 'High' | 'Medium'
}

export interface MediumTermProjection {
  year: number
  growth: number
  confidence: 'High' | 'Medium' | 'Low'
  trend: string
}

export interface KeyGrowthDriver {
  driver: string
}

export interface UpsideRisk {
  risk: string
  probability: string
  impact: string
}

export interface DownsideRisk {
  risk: string
  probability: string
  impact: string
  mitigation?: string
}

export interface CreditRatingData {
  sAndPRating: string
  agency: string
  outlook: string
  governmentNetAssets: string
}

export interface FederalBudgetData {
  totalRevenue: string
  expenditure: string
  change: string
  changePercent: number
}

export interface InfrastructureProject {
  sector: string
  project: string
  value: string
  status: string
}

// Tier-1 Critical KPIs
export const tier1KPIs: Tier1KPI[] = [
  { id: 'gdp-growth', name: 'GDP Growth Rate', value: '5.0-5.6%', period: '2026(F)', uaeRelevance: 'Critical', changeType: 'stable', change: 0 },
  { id: 'total-trade', name: 'Total Trade Value', value: '$1.637 trillion', period: '2025', uaeRelevance: 'Critical', changeType: 'up', change: 15 },
  { id: 'gdp-current', name: 'GDP (Current)', value: '$967.62 billion', period: '2026(E)', uaeRelevance: 'Critical', changeType: 'up', change: 0 },
  { id: 'fdi-inflows', name: 'FDI Inflows', value: '$45 billion', period: '2025', uaeRelevance: 'Critical', changeType: 'up', change: 50 },
  { id: 'tourism-revenue', name: 'Tourism Revenue', value: 'AED 257.3 billion', period: '2025', uaeRelevance: 'High', changeType: 'up', change: 0 },
  { id: 'banking-assets', name: 'Banking Assets', value: 'Dh5.472 trillion', period: 'Feb 2026', uaeRelevance: 'High', changeType: 'up', change: 1.1 },
  { id: 'startup-funding', name: 'Startup Funding', value: '$2 billion (218 deals)', period: '2025', uaeRelevance: 'High', changeType: 'up', change: 32 },
  { id: 'inflation-rate', name: 'Inflation Rate', value: '2.1% (UAE avg)', period: '2025', uaeRelevance: 'Medium', changeType: 'stable', change: 0 },
  { id: 'federal-budget', name: 'Federal Budget', value: 'AED 92.4 billion', period: '2026', uaeRelevance: 'High', changeType: 'up', change: 29 },
]

// Tier-2 Sectoral KPIs
export const tier2SectorKPIs: Tier2SectorKPI[] = [
  { id: 'non-oil-gdp', name: 'Non-Oil GDP Growth', value: '5.5%', period: '2025' },
  { id: 'oil-sector-share', name: 'Oil Sector Share', value: '~25% of GDP', period: '2025' },
  { id: 'industrial-exports', name: 'Industrial Exports', value: 'AED 262 billion', period: '2025', change: 25 },
  { id: 'digital-services', name: 'Digital Services Trade', value: '$33 billion', period: '2025' },
  { id: 'trade-surplus', name: 'Trade Surplus', value: 'Dh584.1 billion', period: '2025' },
  { id: 'hotel-guests', name: 'Hotel Guests (UAE)', value: '23.3 million', period: 'Jan-Sep 2025', change: 4.9 },
  { id: 'hotel-occupancy', name: 'Hotel Occupancy (Dubai)', value: '79.2%', period: '2025' },
  { id: 'real-estate-transactions', name: 'Real Estate Transactions (H1)', value: 'Dh54 billion', period: 'H1 2025', change: 38 },
  { id: 'insurance-premiums', name: 'Insurance Premiums', value: 'Dh75.2 billion', period: '2025', change: 15.5 },
  { id: 'workforce-growth', name: 'Workforce Growth', value: '12.4%', period: '2025', change: 1.5 },
]

// GDP Historical Data
export const gdpHistoricalData: GDPHistorical[] = [
  { year: 2019, growth: 1.27, vsPriorYear: 0, sentiment: 'Baseline' },
  { year: 2020, growth: -8.69, vsPriorYear: -9.96, sentiment: 'Negative' },
  { year: 2021, growth: 4.55, vsPriorYear: 13.24, sentiment: 'Recovery' },
  { year: 2022, growth: 7.51, vsPriorYear: 2.96, sentiment: 'Strong' },
  { year: 2023, growth: 4.3, vsPriorYear: -3.21, sentiment: 'Recovery' },
  { year: 2024, growth: 3.99, vsPriorYear: -0.31, sentiment: 'Stable' },
  { year: 2025, growth: 5.8, vsPriorYear: 1.81, sentiment: 'Positive' },
]

// GDP Forecasts by Source
export const gdpForecasts: GDPForecast[] = [
  { source: 'UAE Central Bank', tier: 0, 2025: 5.6, 2026: 5.6, 2027: 4.4 },
  { source: 'World Bank', tier: 1, 2025: 5.4, 2026: 5.0, 2027: 5.1 },
  { source: 'IMF', tier: 1, 2025: 5.8, 2026: 3.14, 2027: 5.27 },
  { source: 'China Briefing', tier: 3, 2025: 5.4, 2026: 5.0 },
  { source: 'Statista', tier: 2, 2025: 5.8, 2026: 3.14, 2027: 5.27 },
]

// International Comparisons
export const internationalComparisons: InternationalComparison[] = [
  { country: 'UAE', growth: 5.0 },
  { country: 'China', growth: 4.6 },
  { country: 'United States', growth: 2.3 },
  { country: 'Euro Area', growth: 1.1 },
  { country: 'GCC Average', growth: 4.8 },
]

// Sector Performance
export const sectorPerformance: SectorPerformance[] = [
  { sector: 'Financial Services', value: 'Strong', period: '2025', sentiment: 'positive' },
  { sector: 'Manufacturing', value: 'Growing', period: '2025', sentiment: 'positive' },
  { sector: 'Wholesale/Retail Trade', value: 'Established', period: '2025', sentiment: 'stable' },
  { sector: 'Tourism & Transportation', value: 'Record-breaking', period: '2025', sentiment: 'positive' },
  { sector: 'Technology & Digital', value: 'Rapid growth', period: '2025', sentiment: 'positive' },
  { sector: 'Renewable Energy', value: 'Strategic focus', period: '2025', sentiment: 'positive' },
  { sector: 'Oil & Gas', value: 'Expanding', period: '2025', sentiment: 'stable' },
  { sector: 'Real Estate', value: 'Strong demand', period: '2025', sentiment: 'positive' },
]

// Trade Data
export const tradeData: TradeDataPoint[] = [
  { category: 'Total Trade', value: 'Dh6.014 trillion ($1.637T)', period: '2025', change: 15 },
  { category: 'Goods Trade', value: 'Dh4.9 trillion', period: '2025' },
  { category: 'Services Trade', value: 'Dh1.14 trillion', period: '2025' },
  { category: 'Non-Oil Goods', value: 'Dh3.8 trillion', period: '2025', change: 27 },
  { category: 'Digital Services', value: '$33 billion', period: '2025' },
  { category: 'Trade Surplus', value: 'Dh584.1 billion', period: '2025' },
  { category: 'Industrial Exports', value: 'AED 262 billion', period: '2025', change: 25 },
]

// Tourism Data
export const tourismData: TourismDataPoint[] = [
  { metric: 'UAE Tourism Revenue', value: 'AED 257.3 billion', change: 0 },
  { metric: 'Dubai Visitors', value: '19.59 million', change: 5 },
  { metric: 'Abu Dhabi Visitors', value: '26.6 million', change: 0 },
  { metric: 'Hotel Guests (Jan-Sep)', value: '23.3 million', change: 4.9 },
  { metric: 'Hotel Occupancy (Dubai)', value: '79.2%', change: 0 },
  { metric: 'Hotel Revenues', value: 'AED 49.21 billion', change: 10 },
  { metric: 'Hotel Inventory (Dubai)', value: '154,000+ rooms', change: 0 },
]

// Banking Data
export const bankingData: BankingDataPoint[] = [
  { metric: 'Banking Sector Assets', value: 'Dh5.472 trillion', change: 1.1 },
  { metric: 'Credit Portfolio Growth', change: 17.9 },
  { metric: 'Deposits Growth', change: 16.2 },
  { metric: 'Insurance Premiums', value: 'Dh75.2 billion', change: 15.5 },
  { metric: 'Insurance Assets', value: 'Dh166.7 billion', change: 0 },
  { metric: 'Net Loans (Top 10 Banks)', change: 6.5 },
]

// Startup Data
export const startupData: StartupDataPoint[] = [
  { metric: 'Total Raised', value: '$2 billion', change: 32 },
  { metric: 'Number of Deals', value: '218', change: 0 },
  { metric: 'Ecosystem Growth', value: '32%', change: 0 },
  { metric: 'Total Startups', value: '52,700+', change: 0 },
  { metric: 'Unicorns', value: '12 companies', change: 0 },
  { metric: 'Global Ranking', value: '21st worldwide', change: 0 },
]

// Labor Market Data
export const laborMarketData: LaborMarketDataPoint[] = [
  { metric: 'Workforce Growth', value: '12.4%' },
  { metric: 'Skilled Labor Increase', value: '49.92%' },
  { metric: 'Establishment Growth', value: '7.8%' },
  { metric: 'Total Workforce Expansion', value: '101.76%' },
  { metric: 'Employee Optimism', value: '76%' },
  { metric: 'Employers Planning Expansion', value: '56%' },
  { metric: 'Professionals Open to Switching', value: '98%' },
]

// Inflation Data
export const inflationData: InflationDataPoint[] = [
  { period: 'Dubai annual (Dec 2025)', rate: '3.0%', source: 'FocusEconomics' },
  { period: 'UAE average (2026 projection)', rate: '2.5%', source: 'IMF' },
  { period: 'UAE Consumer Price (2025)', rate: '2.1%', source: 'FRED' },
]

// Inflation Components
export const inflationComponents: InflationComponent[] = [
  { component: 'Housing and utilities', rate: '+5.1%', impact: 'High' },
  { component: 'Transport', rate: '+3.6%', impact: 'Medium' },
  { component: 'Food and beverages', rate: '+1.2%', impact: 'Low' },
]

// FDI Data
export const fdiData: FDIDataPoint[] = [
  { year: '2022', inflows: '$22.737 billion' },
  { year: '2023', inflows: '$30.688 billion', growth: '+35%' },
  { year: '2024', inflows: '$45.6 billion', growth: '+48.7%', rank: '2nd globally' },
]

// FDI 2025
export const fdi2025: FDI2025 = {
  inflows: '$45 billion',
  growth: '~50%',
  greenfield: '$33.16 billion',
  rank: '10th globally',
}

// Priority Diversification Sectors
export const prioritySectors: PrioritySector[] = [
  { id: 1, sector: 'FinTech', priority: 'High', uaeRelevance: 'Critical' },
  { id: 2, sector: 'E-Commerce', priority: 'High', uaeRelevance: 'High' },
  { id: 3, sector: 'AgriTech', priority: 'Medium', uaeRelevance: 'Medium' },
  { id: 4, sector: 'Healthcare', priority: 'High', uaeRelevance: 'High' },
  { id: 5, sector: 'Education', priority: 'High', uaeRelevance: 'High' },
  { id: 6, sector: 'Tourism', priority: 'High', uaeRelevance: 'High' },
  { id: 7, sector: 'Space', priority: 'High', uaeRelevance: 'High' },
  { id: 8, sector: 'Logistics', priority: 'High', uaeRelevance: 'High' },
  { id: 9, sector: 'ICT', priority: 'Critical', uaeRelevance: 'Critical' },
  { id: 10, sector: 'Manufacturing', priority: 'High', uaeRelevance: 'High' },
  { id: 11, sector: 'Medical Tourism', priority: 'Medium', uaeRelevance: 'Medium' },
  { id: 12, sector: 'Renewable Energy', priority: 'Critical', uaeRelevance: 'Critical' },
  { id: 13, sector: 'Media', priority: 'Medium', uaeRelevance: 'Medium' },
  { id: 14, sector: 'Creative Industries', priority: 'Medium', uaeRelevance: 'Medium' },
  { id: 15, sector: 'Gaming', priority: 'Medium', uaeRelevance: 'Medium' },
  { id: 16, sector: 'Smart Cities', priority: 'High', uaeRelevance: 'High' },
]

// Medium Term Outlook (IMF)
export const mediumTermOutlook: MediumTermProjection[] = [
  { year: 2026, growth: 3.14, confidence: 'Medium', trend: 'Downtick (temporary)' },
  { year: 2027, growth: 5.27, confidence: 'High', trend: 'Recovery' },
  { year: 2028, growth: 4.63, confidence: 'High', trend: 'Stabilizing' },
  { year: 2029, growth: 4.37, confidence: 'High', trend: 'Moderate' },
  { year: 2030, growth: 4.03, confidence: 'Medium', trend: 'Steady' },
  { year: 2031, growth: 4.04, confidence: 'Medium', trend: 'Steady' },
]

// Key Growth Drivers
export const keyGrowthDrivers: KeyGrowthDriver[] = [
  { driver: 'Sustained non-oil sector expansion' },
  { driver: 'Continued infrastructure investment' },
  { driver: 'Tourism sector momentum' },
  { driver: 'Technology and startup ecosystem growth' },
  { driver: 'Strategic FDI attraction' },
]

// Upside Risks
export const upsideRisks: UpsideRisk[] = [
  { risk: 'Strong fiscal buffers', probability: 'High', impact: 'Positive' },
  { risk: 'Diversified growth drivers', probability: 'High', impact: 'Positive' },
  { risk: 'Large sovereign wealth portfolio', probability: 'High', impact: 'Positive' },
  { risk: 'Strategic trade positioning', probability: 'Medium', impact: 'Positive' },
]

// Downside Risks
export const downsideRisks: DownsideRisk[] = [
  { risk: 'Geopolitical tensions (Middle East)', probability: 'Medium', impact: 'Negative', mitigation: 'Diplomacy' },
  { risk: 'Oil price volatility', probability: 'Medium', impact: 'Negative', mitigation: 'Diversification' },
  { risk: 'Global trade disruptions', probability: 'Low-Medium', impact: 'Negative', mitigation: 'Trade agreements' },
  { risk: 'Tax reform implementation (2027)', probability: 'High', impact: 'Neutral/Negative', mitigation: 'Planning phase' },
]

// Credit Rating
export const creditRating: CreditRatingData = {
  sAndPRating: 'AA/A-1+',
  agency: 'S&P Global',
  outlook: 'Stable',
  governmentNetAssets: '~184% of GDP',
}

// Federal Budget 2026
export const federalBudget2026: FederalBudgetData = {
  totalRevenue: 'AED 92.4 billion',
  expenditure: 'AED 92.4 billion',
  change: '+AED 20.9bn',
  changePercent: 29,
}

// Infrastructure Projects
export const infrastructureProjects: InfrastructureProject[] = [
  { sector: 'Energy', project: 'Multi-billion dirham projects', value: 'Billions', status: 'Active' },
  { sector: 'Water', project: 'Major infrastructure development', value: '-', status: 'Active' },
  { sector: 'Transport', project: 'DIFC expansion', value: '$27 billion', status: 'Active' },
  { sector: 'Aviation', project: 'Al Maktoum International Airport expansion', value: '-', status: 'Active' },
  { sector: 'Rail', project: 'Etihad Rail Network', value: '-', status: 'Active' },
  { sector: 'Urban', project: 'Dubai Creek Tower and Dubai Creek Harbour', value: '-', status: 'Active' },
  { sector: 'Metro', project: 'Dubai Metro Blue Line', value: '-', status: 'Active' },
]

// Oil Sector Data
export interface OilSectorData {
  oilGdpGrowth: string
  averageOilOutput: string
  hydrocarbonGrowth: string
  mediumTermTarget: string
}

export const oilSectorData: OilSectorData = {
  oilGdpGrowth: '~5%',
  averageOilOutput: '~3.6 million bpd (2025), ~3.7 million bpd (2026)',
  hydrocarbonGrowth: '7.3% (2026)',
  mediumTermTarget: '5 million bpd by 2027 (ADNOC)',
}

// Non-Oil Sector Data
export interface NonOilSectorData {
  nonOilGdpGrowth2025: string
  nonOilTrade: string
  nonOilTradeGrowth: string
  nonOilGdpGrowth2026: string
}

export const nonOilSectorData: NonOilSectorData = {
  nonOilGdpGrowth2025: '5.5%',
  nonOilTrade: 'Dh3.8 trillion (record high)',
  nonOilTradeGrowth: '27% annual increase',
  nonOilGdpGrowth2026: '~5.3%',
}

// Real Estate Data
export interface RealEstateData {
  dubaiTransactionsChange: string
  abuDhabiTransactionsChange: string
  averageResidentialPrice: string
  dubaiResidentialSalesChange: string
  propertyTransactionsH1: string
  plannedSupply2026: string
  averageResidentialPriceUAE: string
  dubaiPopulation: string
  projectedPopulationGrowth2026: string
}

export const realEstateData: RealEstateData = {
  dubaiTransactionsChange: '+17%',
  abuDhabiTransactionsChange: '+110%',
  averageResidentialPrice: '~AED 1,692/sqft',
  dubaiResidentialSalesChange: '+22%',
  propertyTransactionsH1: 'Dh54 billion (+38%)',
  plannedSupply2026: '41,000-42,000 units',
  averageResidentialPriceUAE: '~AED 2.4 million (~$650,000)',
  dubaiPopulation: 'Surpassed 4 million (2025)',
  projectedPopulationGrowth2026: '175,000-225,000 additional',
}

// Top Startups
export interface TopStartup {
  company: string
  industry: string
  valuation: string
}

export const topStartups: TopStartup[] = [
  { company: 'Masdar', industry: 'CleanTech', valuation: '$3.3B+' },
  { company: 'Astra Tech', industry: 'Super App/Fintech', valuation: '$1B+' },
  { company: 'Dataiku', industry: 'AI/Enterprise SaaS', valuation: '$3.7B valuation' },
  { company: 'Vista Global', industry: 'Aviation Tech', valuation: '$800M' },
  { company: 'Andalusia Labs', industry: 'Blockchain', valuation: '$1B unicorn' },
]

// Key Startup Metrics
export interface StartupMetric {
  company: string
  metric: string
  value: string
  period?: string
}

export const startupMetrics: StartupMetric[] = [
  { company: 'Qashio', metric: 'Revenue Growth', value: '800%+ YoY', period: '3 consecutive years' },
  { company: 'PRYPCO', metric: 'Mortgages Facilitated', value: '$2.73 billion' },
  { company: 'Vista Global', metric: 'Single Round', value: '$600M', period: 'Q1 2025' },
]

// Sentiment Analysis Data
export interface SentimentByTopic {
  topic: string
  sentimentScore: number
  confidence: string
  keyDrivers: string
}

export const economicSentimentByTopic: SentimentByTopic[] = [
  { topic: 'GDP Growth', sentimentScore: 0.92, confidence: 'High', keyDrivers: 'All sources positive' },
  { topic: 'Trade Performance', sentimentScore: 0.95, confidence: 'High', keyDrivers: 'Record values, global ranking' },
  { topic: 'Tourism', sentimentScore: 0.94, confidence: 'High', keyDrivers: 'Multiple records' },
  { topic: 'FDI', sentimentScore: 0.90, confidence: 'High', keyDrivers: '50% growth' },
  { topic: 'Labor Market', sentimentScore: 0.93, confidence: 'High', keyDrivers: 'Highest global optimism' },
  { topic: 'Banking/Finance', sentimentScore: 0.88, confidence: 'Medium-High', keyDrivers: 'Stable ratings, asset growth' },
  { topic: 'Diversification', sentimentScore: 0.85, confidence: 'Medium', keyDrivers: 'Progress measurable' },
  { topic: 'Real Estate', sentimentScore: 0.82, confidence: 'Medium', keyDrivers: 'Strong but cooling signals' },
]

// Overall Document Sentiment
export const overallDocumentSentiment = {
  score: 0.89,
  label: 'Strongly Positive',
  period: '2025-2026',
  note: 'Strong momentum',
}

// Source Distribution Summary
export interface SourceDistribution {
  tier: string
  count: number
  percentage: number
  avgReliability: string
}

export const sourceDistribution: SourceDistribution[] = [
  { tier: 'Tier-0', count: 9, percentage: 30, avgReliability: 'Very High' },
  { tier: 'Tier-1', count: 4, percentage: 13, avgReliability: 'High' },
  { tier: 'Tier-2', count: 5, percentage: 17, avgReliability: 'Medium-High' },
  { tier: 'Tier-3', count: 6, percentage: 20, avgReliability: 'Medium' },
  { tier: 'Tier-4', count: 6, percentage: 20, avgReliability: 'Variable' },
]

// Data Quality Assessment
export interface DataQualityAssessment {
  dimension: string
  score: number
  notes: string
}

export const dataQualityAssessment: DataQualityAssessment[] = [
  { dimension: 'Completeness', score: 85, notes: 'Good coverage, some projections vary widely (IMF vs Central Bank)' },
  { dimension: 'Recency', score: 90, notes: 'Most data from 2025-2026' },
  { dimension: 'Consistency', score: 75, notes: 'Some variance between sources' },
  { dimension: 'Verifiability', score: 60, notes: 'Many Tier-3/4 sources, no primary URLs to verify' },
  { dimension: 'Precision', score: 80, notes: 'Specific values provided, rounding noted' },
]

// UAE Relevance Assessment
export interface UAERelevanceItem {
  level: 'Critical' | 'High' | 'Medium' | 'Low'
  count: number
  percentage: number
  topics: string[]
}

export const uaeRelevanceAssessment: UAERelevanceItem[] = [
  { level: 'Critical', count: 12, percentage: 40, topics: ['GDP', 'Trade', 'FDI', 'Banking', 'Diversification', 'Federal Budget'] },
  { level: 'High', count: 10, percentage: 33, topics: ['Tourism', 'Real Estate', 'Tech', 'Labor', 'Infrastructure'] },
  { level: 'Medium', count: 6, percentage: 20, topics: ['Inflation', 'component sectors'] },
  { level: 'Low', count: 2, percentage: 7, topics: ['External comparisons'] },
]

// Entity Registry - Organizations Mentioned
export interface EconomicEntity {
  entity: string
  type: string
  role: string
  tier: TierLevel
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export const economicEntities: EconomicEntity[] = [
  { entity: 'UAE Central Bank', type: 'Government', role: 'Monetary policy', tier: 0, uaeRelevance: 'Critical' },
  { entity: 'World Bank', type: 'Multilateral', role: 'Development finance', tier: 1, uaeRelevance: 'Critical' },
  { entity: 'IMF', type: 'Multilateral', role: 'Financial surveillance', tier: 1, uaeRelevance: 'Critical' },
  { entity: 'ADNOC', type: 'State-owned', role: 'Oil/gas operations', tier: 0, uaeRelevance: 'Critical' },
  { entity: 'S&P Global', type: 'Rating Agency', role: 'Credit ratings', tier: 1, uaeRelevance: 'Critical' },
  { entity: 'Dubai Chamber of Digital Economy', type: 'Government', role: 'Digital ecosystem', tier: 0, uaeRelevance: 'High' },
  { entity: 'Emirates NBD', type: 'Financial Institution', role: 'Research', tier: 2, uaeRelevance: 'High' },
  { entity: 'Oxford Economics', type: 'Research Firm', role: 'Economic analysis', tier: 2, uaeRelevance: 'High' },
  { entity: 'Gallup', type: 'Research Firm', role: 'Workforce sentiment', tier: 2, uaeRelevance: 'High' },
  { entity: 'Statista', type: 'Data Provider', role: 'Statistics', tier: 2, uaeRelevance: 'Medium' },
]

// Geographic Entities
export interface GeographicEntity {
  entity: string
  region: string
  significance: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export const geographicEntities: GeographicEntity[] = [
  { entity: 'UAE', region: 'Country', significance: 'Primary subject', uaeRelevance: 'Critical' },
  { entity: 'Dubai', region: 'Emirate', significance: 'Economic hub', uaeRelevance: 'Critical' },
  { entity: 'Abu Dhabi', region: 'Emirate', significance: 'Oil wealth, investment', uaeRelevance: 'Critical' },
  { entity: 'GCC', region: 'Region', significance: 'Regional context', uaeRelevance: 'High' },
  { entity: 'MENA', region: 'Region', significance: 'Broader context', uaeRelevance: 'Medium' },
]

// Source Credibility Matrix for Economic Data
export interface EconomicSourceCredibility {
  source: string
  tier: TierLevel
  type: string
  reliability: string
}

export const economicSourceCredibility: EconomicSourceCredibility[] = [
  { source: 'UAE Central Bank', tier: 0, type: 'Government', reliability: 'Extremely High' },
  { source: 'World Bank', tier: 1, type: 'Multilateral', reliability: 'High' },
  { source: 'IMF', tier: 1, type: 'Multilateral', reliability: 'High' },
  { source: 'UAE Ministry of Investment', tier: 0, type: 'Government', reliability: 'Extremely High' },
  { source: 'Gulf News', tier: 3, type: 'Media', reliability: 'Medium' },
  { source: 'Oxford Economics', tier: 2, type: 'Research Firm', reliability: 'Medium-High' },
  { source: 'Statista', tier: 2, type: 'Data Provider', reliability: 'Medium' },
  { source: 'FocusEconomics', tier: 2, type: 'Research Firm', reliability: 'Medium' },
]

// Export for use in dashboard
export const economicExtended = {
  tier1KPIs,
  tier2SectorKPIs,
  gdpHistoricalData,
  gdpForecasts,
  internationalComparisons,
  sectorPerformance,
  tradeData,
  tourismData,
  bankingData,
  startupData,
  laborMarketData,
  inflationData,
  inflationComponents,
  fdiData,
  fdi2025,
  prioritySectors,
  mediumTermOutlook,
  keyGrowthDrivers,
  upsideRisks,
  downsideRisks,
  creditRating,
  federalBudget2026,
  infrastructureProjects,
  oilSectorData,
  nonOilSectorData,
  realEstateData,
  topStartups,
  startupMetrics,
  economicSentimentByTopic,
  overallDocumentSentiment,
  sourceDistribution,
  dataQualityAssessment,
  uaeRelevanceAssessment,
  economicEntities,
  geographicEntities,
  economicSourceCredibility,
}
