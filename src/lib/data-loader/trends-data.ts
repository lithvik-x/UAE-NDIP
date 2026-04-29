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
// SOCIAL MEDIA TRENDS (10-2)
// ============================================================================

export const socialMediaTrendsData: TrendAnalysis = {
  id: 'trend-10-2',
  category: 'social-media',
  name: 'Social Media Trends',
  description: 'Social media in 2026 has reached "supermajority" status with 5.24-5.66 billion users globally. The landscape is defined by AI integration, short-form video dominance, creator economy maturation, and social commerce revolution.',
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
      indicators: ['Social commerce GMV $6.2T', 'TikTok 2.04B MAU', 'AI-generated content 90% of online content'],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2028',
      indicators: ['Global users 5.66B', 'Social commerce $1.09-6.2T range', 'Creator economy $32.6B'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.25,
      timeline: '2028-2030',
      indicators: ['AI content engagement penalty -12%', 'Privacy regulation tightening', 'Platform fragmentation'],
    },
  ],
  keyDrivers: [
    'TikTok engagement rate 3.70-4.6% (+49% YoY)',
    'UAE TikTok users 34.1M in KSA with +39% YoY growth',
    'Instagram 73%+ penetration in UAE',
    'Social commerce 28% growth with $1.09-6.2T market',
    '79% of creators using AI tools',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 88,
    sources: 15,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 95,
    level: 'critical' as const,
    justification: 'UAE has 99.5% social media penetration with TikTok highest in GCC',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'Digital Applied', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'Hootsuite Social Trends', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Sprout Social', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'SQ Magazine', tier: 3 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// GENERATIONAL SHIFT TRENDS (10-3)
// ============================================================================

export const generationalShiftData: TrendAnalysis = {
  id: 'trend-10-3',
  category: 'generational',
  name: 'Generational Shift',
  description: 'The UAE is experiencing profound generational shifts with Gen Z, Millennials, and Gen Alpha populations driving changes in values, employment patterns, identity formation, and digital native behaviors across society.',
  adoptionRate: 76,
  uaeAdoptionRate: 82,
  generationalBreakdown: {
    genZ: 88,
    millennial: 85,
    genX: 62,
    boomer: 38,
  },
  regulatoryStatus: {
    status: 'active',
    description: 'National Youth Agenda 2031, Emirati Identity Strategy, mandatory Arabic education',
    effectiveDate: '2025-11-01',
  },
  sentiment: {
    positive: 61,
    negative: 22,
    neutral: 17,
    overall: 0.54,
    volume: 67000,
  },
  forecasts: [
    {
      scenario: 'optimistic',
      probability: 0.78,
      timeline: '2026-2028',
      indicators: ['Youth unemployment 6.45% (declining from 9.99%)', '152,000+ Emiratis in private sector', '1M jobs by 2030'],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2029',
      indicators: ['Gen Z financial insecurity 48%', 'Female youth unemployment 12.1% vs male 4.1%', 'Gig economy >AED 10B/year'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.35,
      timeline: '2028-2030',
      indicators: ['Mental health 1 in 4 residents affected', 'Skills gap 41% future jobs requiring new core skills', 'Financial insecurity rising'],
    },
  ],
  keyDrivers: [
    'UAE population aged 15-35 at ~50%',
    'Youth unemployment declining from 13.48% peak (2020) to 6.45%',
    'Emirati Identity Strategy launched November 2025 with 13 key initiatives',
    'Abu Dhabi Digital Strategy budget AED 13 billion (2025-2027)',
    'Gen Z daily Snapchat usage >90%, 48% relying on AI for work tasks',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 85,
    sources: 18,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 97,
    level: 'critical' as const,
    justification: 'Youth constitute ~50% of UAE population with direct impact on economic diversification',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'YCharts/FRED', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'WAM', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Deloitte Youth Survey', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Oliver Wyman', tier: 1 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
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
  ],
  credibility: {
    tier: 2 as TierLevel,
    score: 88,
    sources: 20,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 96,
    level: 'critical' as const,
    justification: 'UAE BRICS membership and multipolar positioning directly impact economic strategy',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'Munich Security Conference', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'Belfer Center', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'The Daily Economy', tier: 3 as TierLevel, date: '2026-04-27' },
    { name: 'Carnegie Endowment', tier: 2 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
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
// REGULATORY TRENDS (10-7)
// ============================================================================

export const regulatoryTrendsData: TrendAnalysis = {
  id: 'trend-10-7',
  category: 'regulatory',
  name: 'Regulatory Trends',
  description: 'The UAE regulatory environment in 2025-2026 is characterized by business-friendly reforms, enhanced enforcement, mandatory ESG/climate reporting, and modernization of corporate and financial laws.',
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
    description: 'Climate Law FDL 11/2024, AML Law FDL 10/2025, PDPL enforcement, CBUAE Climate Risk Circular 8/2025',
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
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 90,
    sources: 12,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 93,
    level: 'critical' as const,
    justification: 'Regulatory changes directly impact business operations and compliance requirements',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'UAE Government', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Chambers Practice Guides', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Baker McKenzie', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'White & Case', tier: 1 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// MEDIA INDUSTRY TRENDS (10-8)
// ============================================================================

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
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 84,
    sources: 18,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 85,
    level: 'high' as const,
    justification: 'UAE media consumption patterns align with global trends with high digital adoption',
  },
  alertLevel: 'GREEN' as AlertLevel,
  sources: [
    { name: 'Deloitte', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'PwC Global E&M Outlook', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'IFPI Global Music Report', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Nielsen', tier: 1 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// CLIMATE SUSTAINABILITY TRENDS (10-9)
// ============================================================================

export const climateSustainabilityData: TrendAnalysis = {
  id: 'trend-10-9',
  category: 'climate',
  name: 'Climate Sustainability',
  description: 'The UAE was the first MENA nation to commit to net-zero emissions by 2050, with comprehensive climate legislation, massive renewable energy investments, and emerging carbon credit market leadership.',
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
    description: 'Net Zero 2050 Strategy, Climate Change Reduction Law FDL 11/2024, CBUAE Climate Risk Circular 8/2025',
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
      indicators: ['AED 600B investment to 2050', 'Renewable capacity 19.8 GW by 2030', '200,000 green jobs'],
    },
    {
      scenario: 'baseline',
      probability: 0.58,
      timeline: '2030-2040',
      indicators: ['Green hydrogen 1.4 mtpa by 2031', 'CCUS 5 MTPA capacity by 2030', 'Mangrove restoration ongoing'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.40,
      timeline: '2030-2050',
      indicators: ['Sea level rise 0.5m by 2050 threatening Abu Dhabi', 'Climate Action Tracker: "Insufficient" policies', 'Oil expansion plans conflict with net zero'],
    },
  ],
  keyDrivers: [
    'First MENA nation net-zero by 2050 commitment with AED 600B investment',
    'Mohammed Bin Rashid Al Maktoum Solar Park 3,860 MW (target 8,000+ MW by 2030)',
    'Carbon credit market ADGM first regulated exchange (March 2022)',
    'National Register for Carbon Credits (NRCC) effective December 2024',
    'CCUS targets: 5 MTPA capacity by 2030, ADNOC 10 Mt/year',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 88,
    sources: 20,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 91,
    level: 'critical' as const,
    justification: 'Climate commitments and investments directly impact UAE\'s long-term economic trajectory',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'Climate Action Tracker', tier: 2 as TierLevel, date: '2026-04-27' },
    { name: 'UAE Government Portal', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Masdar', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'Grand View Research', tier: 2 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// PREDICTIVE FORESIGHT TRENDS (10-10)
// ============================================================================

export const predictiveForesightData: TrendAnalysis = {
  id: 'trend-10-10',
  category: 'predictive-foresight',
  name: 'Predictive Foresight',
  description: 'The UAE\'s predictive foresight capabilities are anchored in comprehensive vision frameworks (We The UAE 2031, D33, Centennial Plan 2071) with ambitious targets for AI market growth ($46-91B by 2030), workforce expansion (1.03M jobs), and economic diversification.',
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
    description: 'We The UAE 2031, Dubai Economic Agenda D33, National AI Strategy 2031',
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
      indicators: ['GDP growth 5.6% (2026)', 'AI market $46.33B by 2030', 'Workforce +12.1% by 2030'],
    },
    {
      scenario: 'baseline',
      probability: 0.65,
      timeline: '2027-2030',
      indicators: ['AI market $46-91B by 2030/2031', 'Digital economy 20% of non-oil GDP by 2030', 'Population 13.6M by 2040'],
    },
    {
      scenario: 'pessimistic',
      probability: 0.35,
      timeline: '2026-2028',
      indicators: ['Oil production 2.37M bpd (-35%)', 'Property market -7% annually (2026-28)', 'GDP downgrade to 3.1% (IMF)'],
    },
  ],
  keyDrivers: [
    'AI market growth: $3.47B (2023) to $46.33B (2030) at 43.9% CAGR',
    'Workforce expansion: 1.03M jobs by 2030 (+12.1% total)',
    'Vision targets: GDP AED 3T by 2031 (from AED 1.49T)',
    'Construction market: $66.89B (2024) to $96.06B (2030)',
    'MGX target assets $100B for AI investment',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 90,
    sources: 18,
    lastVerified: '2026-04-27',
  },
  uaeRelevance: {
    score: 97,
    level: 'critical' as const,
    justification: 'Predictive foresight directly informs strategic planning and resource allocation',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  sources: [
    { name: 'World Bank', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'IMF', tier: 1 as TierLevel, date: '2026-04-27' },
    { name: 'UAE Central Bank', tier: 0 as TierLevel, date: '2026-04-27' },
    { name: 'Grand View Research', tier: 2 as TierLevel, date: '2026-04-27' },
  ],
  lastUpdated: '2026-04-27',
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
