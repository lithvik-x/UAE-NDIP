/**
 * TikTok Intelligence Data — UAE NDIP
 * 100% extracted from 5-2-tiktok-results.md
 *
 * Execution Metadata:
 * - Date executed: 2026-04-27
 * - Framework version: 1.0
 * - Queries executed: 24
 * - Pages fetched: 18 (10 enriched, 8 blocked/restricted)
 * - Enrichment status: FULL - all accessible sources enriched
 *
 * Coverage:
 * - Key Query Patterns Executed (24 queries)
 * - Findings by Query (UAE TikTok content, Dubai TikTok life, Dubai reality, labor, scams, etc.)
 * - Critical Risk Topics (Iran conflict, labor, racism, scams, free speech, AI deepfakes)
 * - Influencer Economy & Licensing
 * - AI/Deepfake Threat Landscape
 * - Sentiment Analysis
 * - Entity Index (Persons, Organizations, Laws)
 * - Source References (16 enriched sources)
 */

import type { PlatformIntelligence, SocialPlatform, BotAnalysis, Narrative, EngagementMetrics, SentimentBreakdown, SocialAccount, KeyFinding, SourceReference } from '../../data-loader/types';

// ============================================================================
// TIKTOK PLATFORM INTELLIGENCE (Base PlatformIntelligence structure)
// ============================================================================

export const tiktokIntelligence: PlatformIntelligence = {
  id: 'tiktok-uae-2026',
  platform: 'tiktok' as SocialPlatform,
  lastUpdated: '2026-04-27',
  metrics: {
    users: 122014,
    penetration: 1.3,
    dailyActive: 0,
    sentiment: {
      overall: 52,
      score: 52,
      volume: 19000000,
      breakdown: { positive: 42, neutral: 28, negative: 30 },
      trending: ['#UAE', '#Dubai', '#realityofdubai', '#leavingdubai', '#uaeracism'],
      keyConcerns: [
        'Content moderation and censorship',
        'Government arrests for criticism (21 charged March 2026)',
        'Labor conditions and worker rights exposure',
        'Racism documentation (Amnesty International 375+ workers)',
        'AI deepfake misinformation (12M+ Burj Khalifa collapse video)',
        'Scam proliferation ($442B global losses)',
        'Housing crisis and rent struggles',
        'Coordinated influencer messaging during Iran conflict',
      ],
    } as unknown as PlatformIntelligence['metrics']['sentiment'],
    engagement: {
      impressions: 0,
      likes: 1850,
      shares: 420,
      comments: 185,
      engagementRate: 6.92,
      avgLikes: 1850,
      avgShares: 420,
      avgComments: 185,
      trendingHashtags: [
        '#UAE (19M posts)',
        '#dubailife (2.6M posts)',
        '#dubaigirls (30.6K posts)',
        '#realityofdubai',
        '#leavingdubai',
        '#uaeracism',
        '#uaelabors',
        '#uaelaborlaw',
        '#dubaihousingcrisis',
        '#uaehousingcrisis',
        '#dubaicultureshock',
      ],
    },
    censorshipLevel: 'partial',
  },
  botActivity: {
    estimatedBotPercent: 23,
    coordinatedInauthentic: true,
    confidence: 0.78,
    indicators: [
      'Coordinated posting during Iran conflict (March 2026)',
      'Near-identical videos across multiple influencers',
      'AI remix of Stromae\'s "Papaoutai" viral pattern',
      'Amplified government narratives',
      'Coordinated hashtag campaigns',
    ],
    botNetworks: ['Coordinated inauthentic behavior detected during Iran conflict'],
  },
  censorshipLevel: 'partial',
  censorship: {
    level: 'partial',
    complianceRate: 78,
    governmentRequests: 456,
    contentRemoved: 1000000,
    notes: '1M+ videos removed (3-month 2025 period); partial censorship on political content; 21 people charged March 2026 for missile footage',
  },
  keyNarratives: [
    {
      topic: 'Luxury Lifestyle Promotion',
      narrative: 'Dubai lifestyle content showcasing safety, warmth, career opportunities, tax-free benefits',
      prevalence: 85,
      sentiment: 'positive',
      source: '@dubai.official, Influencers, Tourism accounts',
    },
    {
      topic: 'Counter-Narrative: Reality of Dubai',
      narrative: 'Counter-content challenging glossy image - "Real streets. Real people. No filters" - labor controversies, Iran tensions, modern-day slavery framing',
      prevalence: 15,
      sentiment: 'negative',
      source: '@dubai.reality6, #realityofdubai, Reddit discussions',
    },
    {
      topic: 'Iran Conflict Response (March 2026)',
      narrative: 'Coordinated influencer videos praising government protection after missile attacks. Caption pattern: "no, because I know who protects us". 1,800+ drones/missiles, 6 deaths, 141 injuries.',
      prevalence: 60,
      sentiment: 'positive',
      source: 'Multiple influencers, Ladbible, BBC (blocked)',
    },
    {
      topic: 'Labor Conditions Exposure',
      narrative: '$400/month wages, 16 roommates in small rooms, "No Work, No Pay" policy documentation, AED 1M fines for overcrowded housing',
      prevalence: 25,
      sentiment: 'negative',
      source: '#uaelabors, #uaelaborlaw, TikTok content, Reddit (blocked)',
    },
    {
      topic: 'Racism and Discrimination (Amnesty International)',
      narrative: '375+ African workers detained June 2021, 35-61 days detention at Al-Wathba prison, pregnant woman lost child, mass deportations',
      prevalence: 15,
      sentiment: 'negative',
      source: 'Amnesty International, TikTok #racism content',
    },
    {
      topic: 'Scam Documentation',
      narrative: 'Fake Dubai Prince romance fraud ($442B global losses), rental car extortion scheme, crypto scams by influencers',
      prevalence: 30,
      sentiment: 'negative',
      source: 'OCCRP, @dubai.scam.series, TikTok discover',
    },
    {
      topic: 'Free Speech Suppression',
      narrative: '21 charged for missile footage (2+ years prison, AED 200K fine), Tierra Allen arrested for "shouting", Hamdan Al Rind arrested for satire (2.6M followers)',
      prevalence: 20,
      sentiment: 'negative',
      source: 'RNZ, Newsweek, CBS, Detained in Dubai',
    },
    {
      topic: 'AI Deepfake Misinformation',
      narrative: 'AI-generated Burj Khalifa collapse video (12M+ views), 1B+ views on X of AI war content, multiple arrests for misleading AI content',
      prevalence: 35,
      sentiment: 'neutral',
      source: 'Arab News, Khaleej Times, Gulf News, UAE Cyber Security Council',
    },
    {
      topic: 'Housing Crisis',
      narrative: 'Dubai housing struggles, "Dubai has a housing crisis and will continue for many years", tenant power shifts, hidden costs',
      prevalence: 25,
      sentiment: 'negative',
      source: '#dubaihousingcrisis, #uaehousingcrisis, @gulfmoments, @ayyazmirza1970',
    },
    {
      topic: 'Influencer Economy',
      narrative: 'Licensing required since Feb 2026, Beautiful Destinations Academy (all-expenses-paid), PR trips documented, 20K EUR "Richest Woman in Dubai" scam',
      prevalence: 40,
      sentiment: 'neutral',
      source: 'Gulf News, Si3 Digital, Agency Helix, WSJ (blocked)',
    },
  ],
  governmentAccounts: [
    { platform: 'TikTok', handle: '@dubai.official', url: 'https://www.tiktok.com/@dubai.official', followers: 0, verified: true },
    { platform: 'TikTok', handle: '@uaetiktok', url: 'https://www.tiktok.com/tag/UAE', followers: 0, verified: true },
    { platform: 'TikTok', handle: '@visitdubai', url: 'https://www.tiktok.com/tag/dubailife', followers: 0, verified: true },
    { platform: 'TikTok', handle: '@uaeupdate14', url: 'https://www.tiktok.com/@uaeupdate14', followers: 0, verified: false },
    { platform: 'TikTok', handle: '@dubai.reality6', url: 'https://www.tiktok.com/@dubai.reality6', followers: 0, verified: false },
    { platform: 'TikTok', handle: '@dubai.scam.series', url: 'https://www.tiktok.com/@dubai.scam.series', followers: 0, verified: false },
  ],
  darkSocialScore: 30,
  keyFindings: [
    { finding: '122,014 UAE-based TikTok influencers (Modash April 2026)', metric: '122014', source: 'Modash', tier: 2, alert: 'YELLOW' },
    { finding: '#UAE has 19M posts, #dubailife has 2.6M posts', metric: '19M+2.6M', source: 'TikTok', tier: 3 },
    { finding: 'Top influencer @3lowlow: 35.2k followers, 884.7k avg views, 6.92% engagement', metric: '35.2k', source: 'Modash', tier: 2 },
    { finding: 'Over 1 million videos removed (3-month 2025 period)', metric: '1000000', source: 'TikTok internal data', tier: 3 },
    { finding: '21 people charged for filming/sharing missile strike footage (RNZ)', metric: '21', source: 'RNZ', tier: 1, alert: 'RED' },
    { finding: '$442 billion lost to scams globally in 2025 (GASA)', metric: '442000000000', source: 'Global Anti-Scam Alliance', tier: 2, alert: 'RED' },
    { finding: '375+ African workers detained/deported (Amnesty International October 2021)', metric: '375', source: 'Amnesty International', tier: 2, alert: 'RED' },
    { finding: '1,800+ drones/missiles launched at UAE, 6 deaths, 141 injuries', metric: '1800', source: 'RNZ', tier: 1, alert: 'RED' },
    { finding: 'AI-generated Burj Khalifa collapse video: 12M+ views before debunking', metric: '12000000', source: 'Arab News', tier: 1, alert: 'YELLOW' },
    { finding: '1B+ views of AI war content on X (Institute for Strategic Dialogue)', metric: '1000000000', source: 'Institute for Strategic Dialogue', tier: 2, alert: 'YELLOW' },
    { finding: 'AED 200,000 fine + 2 years prison for misinformation during Iran conflict', metric: '200000', source: 'Ladbible', tier: 1, alert: 'RED' },
    { finding: 'Tierra Allen (Sassy Trucker): Arrested May 2023, $1,300 to lift travel ban', metric: '1300', source: 'CBS', tier: 1, alert: 'YELLOW' },
    { finding: 'Hamdan Al Rind: 2.6M followers, arrested July 2023 for satirical video', metric: '2600000', source: 'Multiple sources', tier: 1, alert: 'RED' },
    { finding: 'UAE Media Law fines: Up to Dh1 million for religious offences/inciting violence', metric: '1000000', source: 'Gulf News', tier: 1 },
    { finding: 'Influencer licensing effective February 1, 2026: AED 500-1000/year after free 3 years', metric: '500-1000', source: 'Si3 Digital', tier: 2 },
    { finding: 'Fake Dubai Prince scam: Impersonated Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum', metric: 'Fazza', source: 'OCCRP', tier: 2, alert: 'RED' },
    { finding: 'Rental car extortion: Pattern of opening criminal cases with promise to drop if paid', metric: 'Pattern', source: 'Detained in Dubai', tier: 2, alert: 'YELLOW' },
    { finding: '"No Work, No Pay" policy: Legal guidance on worker rights', metric: 'Policy', source: 'TikTok', tier: 3 },
    { finding: 'AED 1M fines for overcrowded housing (illegal bed-spaces)', metric: '1000000', source: 'TikTok', tier: 3 },
    { finding: 'Culture shock content: prayer times, dress code, no PDA, gender separation', metric: 'Multiple topics', source: '#dubaicultureshock', tier: 4 },
  ],
  sources: [
    { name: 'Modash', url: 'https://www.modash.io/find-influencers/tiktok/united-arab-emirates', tier: 2, date: '2026-04-17' },
    { name: 'Gulf News', url: 'https://gulfnews.com/business/markets/tiktok-unveils-new-features-tools-for-better-content-discovery-in-uae-1.500155456', tier: 1, date: '2026-04-27' },
    { name: 'Ladbible', url: 'https://www.ladbible.com/news/world-news/dubai-influencer-missile-strikes-tiktok-trend-518671-20260305', tier: 1, date: '2026-03-05' },
    { name: 'OCCRP', url: 'https://www.occrp.org/en/feature/the-fake-dubai-prince-scam-explained', tier: 2, date: '2026-04-27' },
    { name: 'Amnesty International', url: 'https://www.amnesty.org/en/latest/news/2021/10/uae-ensure-the-right-to-remedy-to-hundreds-of-african-workers-following-racially-motivated-detentions-and-deportations/', tier: 2, date: '2021-10-26' },
    { name: 'RNZ', url: 'https://www.rnz.co.nz/news/world/589560/uae-charges-21-people-with-cybercrimes-for-filming-and-sharing-missile-strike-footage', tier: 1, date: '2026-03-26' },
    { name: 'Newsweek', url: 'https://www.newsweek.com/dubai-influencers-threatened-with-jail-over-iran-posts-11627134', tier: 1, date: '2026-03' },
    { name: 'CBS', url: 'https://www.cbsnews.com/news/tierra-young-allen-social-media-influencer-sassy-trucker-texas-dubai-arrest-shouting-release/', tier: 1, date: '2023-08-08' },
    { name: 'Gulf News (Media Law)', url: 'https://gulfnews.com/living-in-uae/telephone-internet/what-fines-influencers-and-content-creators-face-under-uae-media-law-1.500418948', tier: 1, date: '2026-04-27' },
    { name: 'Agency Helix', url: 'https://agencyhelix.com/blog/is-tiktok-banned-in-uae/', tier: 3, date: '2026-04-27' },
    { name: 'Si3 Digital', url: 'https://www.si3.ae/blog/social-media-rules/', tier: 3, date: '2026-04-27' },
    { name: 'Arab News', url: 'https://www.arabnews.com/node/2638594/middle-east', tier: 1, date: '2026-04-27' },
    { name: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/uae-warn-against-fake-ai-content-rising-spread-deepfakes', tier: 1, date: '2026-04-27' },
    { name: 'Gulf News (AI)', url: 'https://gulfnews.com/uae/government/uae-warns-public-about-misleading-ai-generated-videos-1.500462915', tier: 1, date: '2026-04-27' },
    { name: 'Detained in Dubai', url: 'https://www.detainedindoha.org/single-post/breaking-tiktok-influencer-tierra-allen-freed-from-dubai', tier: 2, date: '2023-08-08' },
    { name: 'tokchart', url: 'https://tokchart.com/', tier: 4, date: '2026-04-27' },
  ],
};

// ============================================================================
// TIKTOK-SPECIFIC EXTENDED DATA (For Dashboard Visualization)
// ============================================================================

// Chart colors matching the dashboard theme
const CHART_COLORS = {
  rose: '#f43f5e',
  gold: '#eab308',
  emerald: '#10b981',
  platinum: '#94a3b8',
  orange: '#f97316',
} as const;

// ============================================================================
// KEY STATISTICS CARDS
// ============================================================================

export interface TikTokStat {
  value: string
  label: string
  trend: 'up' | 'down' | 'stable'
  icon: string
  color: string
}

export const tiktokStats: TikTokStat[] = [
  { value: '122,014', label: 'UAE Influencers', trend: 'up', icon: 'Users', color: CHART_COLORS.rose },
  { value: '1M+', label: 'Videos Removed', trend: 'stable', icon: 'XCircle', color: CHART_COLORS.orange },
  { value: '21', label: 'Charged (Mar 2026)', trend: 'up', icon: 'AlertOctagon', color: CHART_COLORS.rose },
  { value: '$442B', label: 'Global Scam Losses', trend: 'up', icon: 'DollarSign', color: CHART_COLORS.rose },
  { value: '375+', label: 'Workers Detained', trend: 'stable', icon: 'UserX', color: CHART_COLORS.rose },
  { value: '12M+', label: 'AI Fake Video Views', trend: 'up', icon: 'Bot', color: CHART_COLORS.gold },
];

// ============================================================================
// SENTIMENT DISTRIBUTION DATA (for PieChart)
// ============================================================================

export interface SentimentDataPoint {
  name: string
  value: number
  color: string
}

export const sentimentDistribution: SentimentDataPoint[] = [
  { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
  { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
  { name: 'Negative', value: 30, color: CHART_COLORS.rose },
];

// ============================================================================
// CRITICAL RISK TOPICS
// ============================================================================

export interface CriticalRisk {
  id: string
  title: string
  riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  description: string
  metric: string
  icon: string
  color: string
}

export const criticalRisks: CriticalRisk[] = [
  {
    id: 'iran',
    title: 'Iran Conflict Response',
    riskLevel: 'CRITICAL',
    description: '21 people charged for filming missile strikes. 1,800+ drones/missiles, 6 deaths, 141 injuries. Coordinated influencer content with near-identical videos.',
    metric: '21 charged',
    icon: 'AlertOctagon',
    color: CHART_COLORS.rose,
  },
  {
    id: 'labor',
    title: 'Labor Conditions',
    riskLevel: 'CRITICAL',
    description: '$400/month wages, 16 roommates in small rooms, "No Work, No Pay" policy, AED 1M fines for overcrowded housing.',
    metric: '375+ detained',
    icon: 'Scale',
    color: CHART_COLORS.rose,
  },
  {
    id: 'racism',
    title: 'Racism & Discrimination',
    riskLevel: 'CRITICAL',
    description: '375+ African workers detained June 2021. Al-Wathba prison: 220 detainees, 4 toilets. Pregnant woman lost child.',
    metric: '375+ workers',
    icon: 'AlertTriangle',
    color: CHART_COLORS.rose,
  },
  {
    id: 'scams',
    title: 'Scam Documentation',
    riskLevel: 'CRITICAL',
    description: 'Fake Dubai Prince romance fraud ($442B global losses). Rental car extortion. Crypto scams by influencers.',
    metric: '$442B lost',
    icon: 'AlertCircle',
    color: CHART_COLORS.rose,
  },
  {
    id: 'freespeech',
    title: 'Free Speech Suppression',
    riskLevel: 'CRITICAL',
    description: 'Tierra Allen arrested for "shouting". Hamdan Al Rind arrested for satire (2.6M followers).',
    metric: '2 arrests',
    icon: 'Lock',
    color: CHART_COLORS.rose,
  },
  {
    id: 'ai',
    title: 'AI Deepfake Threat',
    riskLevel: 'HIGH',
    description: 'AI-generated Burj Khalifa collapse (12M+ views). 1B+ views of AI war content on X.',
    metric: '12M+ views',
    icon: 'Bot',
    color: CHART_COLORS.gold,
  },
];

// ============================================================================
// HASHTAG PERFORMANCE DATA
// ============================================================================

export interface HashtagDataPoint {
  hashtag: string
  posts: string
  sentiment: 'positive' | 'negative' | 'neutral'
  trend: number
}

export const hashtagPerformance: HashtagDataPoint[] = [
  { hashtag: '#UAE', posts: '19M', sentiment: 'positive', trend: 85 },
  { hashtag: '#dubailife', posts: '2.6M', sentiment: 'positive', trend: 78 },
  { hashtag: '#realityofdubai', posts: 'Active', sentiment: 'negative', trend: 25 },
  { hashtag: '#leavingdubai', posts: 'Active', sentiment: 'negative', trend: 30 },
  { hashtag: '#uaeracism', posts: 'Active', sentiment: 'negative', trend: 20 },
  { hashtag: '#uaelabors', posts: 'Active', sentiment: 'negative', trend: 22 },
];

// ============================================================================
// MEDIA LAW FINES (UAE Federal Decree-Law No. 55 of 2023)
// ============================================================================

export interface MediaLawFine {
  violation: string
  fine: string
}

export const mediaLawFines: MediaLawFine[] = [
  { violation: 'Religious offences/inciting violence', fine: 'Up to Dh1 million' },
  { violation: 'Murder, rape, drug abuse content', fine: 'Up to Dh150,000' },
  { violation: 'Undermining social cohesion', fine: 'Up to Dh250,000' },
  { violation: 'National symbol disrespect', fine: 'Dh50,000 - Dh500,000' },
  { violation: 'Domestic/foreign policy offense', fine: 'Dh50,000 - Dh500,000' },
  { violation: 'False information (first)', fine: 'Dh5,000' },
  { violation: 'False information (repeat)', fine: 'Dh10,000' },
  { violation: 'Operating without licence (first)', fine: 'Dh10,000' },
  { violation: 'Operating without licence (repeat)', fine: 'Dh40,000' },
];

// ============================================================================
// KEY PERSONS & CASES
// ============================================================================

export interface KeyPerson {
  name: string
  handle: string
  followers: string
  status: string
  charge: string
}

export const keyPersons: KeyPerson[] = [
  { name: 'Hamdan Al Rind', handle: '@hamdan_alrind', followers: '2.6M', status: 'Arrested July 2023', charge: 'Satire' },
  { name: 'Tierra Allen', handle: '@sassy_trucker', followers: 'N/A', status: 'Released Aug 2023', charge: '"Shouting"' },
  { name: 'Sheikh Hamdan (Fazza)', handle: '@fazza', followers: 'Impersonated', status: 'Scam target', charge: 'Romance fraud' },
  { name: '@3lowlow', handle: '@3lowlow', followers: '35.2k', status: 'Top UAE TikToker', charge: '6.92% engagement' },
];

// ============================================================================
// INFLUENCER LICENSING DATA
// ============================================================================

export interface LicenseCategory {
  category: string
  first3Years: string
  after3Years: string
}

export const influencerLicensing: LicenseCategory[] = [
  { category: 'UAE Citizens', first3Years: 'FREE', after3Years: 'AED 500/year' },
  { category: 'Residents', first3Years: 'FREE', after3Years: 'AED 1,000/year' },
  { category: 'Visitors', first3Years: 'AED 2,000/3 months', after3Years: 'Max 6 months' },
  { category: 'Trade License', first3Years: 'AED 15,000-20,000', after3Years: 'Media license cost' },
];

// ============================================================================
// AI DEEPFAKE THREAT DATA
// ============================================================================

export interface AIDeepfakeCase {
  example: string
  views: string
  source: string
}

export const aiDeepfakeThreats: AIDeepfakeCase[] = [
  { example: 'Burj Khalifa collapse', views: '12M+', source: 'Arab News' },
  { example: 'AI war content on X', views: '1B+', source: 'Institute for Strategic Dialogue' },
  { example: 'Netanyahu "six fingers"', views: 'Documented', source: 'NewsGuard' },
];

// ============================================================================
// QUERY PATTERNS EXECUTED
// ============================================================================

export interface QueryPattern {
  category: string
  queries: string[]
  count: number
}

export const queryPatternsExecuted: QueryPattern[] = [
  {
    category: 'Content Type Queries',
    queries: [
      '"UAE TikTok content" (#UAE - 19M posts)',
      '"Dubai TikTok life" (#dubailife - 2.6M posts)',
      '"UAE TikTok luxury"',
      '"Dubai reality TikTok" (#realityofdubai)',
      '"UAE worker TikTok labor" (#uaelabors)',
      '"Dubai scam TikTok"',
      '"leaving Dubai TikTok" (#leavingdubai)',
      '"UAE culture shock TikTok"',
    ],
    count: 8,
  },
  {
    category: 'TikTok-Specific Risk Queries',
    queries: [
      '"UAE TikTok exposed truth"',
      '"UAE TikTok banned arrest"',
      '"UAE influencer scam exposed TikTok"',
      '"UAE TikTok red flag warning"',
      '"UAE TikTok paid content undisclosed"',
      '"UAE TikTok going viral negative"',
      '"TikTok UAE influencer PR trip free"',
      '"TikTok UAE Dubai influencer arrested"',
      '"UAE TikTok bot troll campaign"',
      '"UAE TikTok deportation negative video"',
      '"Dubai TikTok AI generated fake content"',
    ],
    count: 11,
  },
  {
    category: 'Trending/Platform Queries',
    queries: ['"TikTok UAE trending sounds 2026"'],
    count: 1,
  },
];

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface SourceCredibility {
  tier: string
  sources: string[]
  credibility: string
}

export const sourceCredibilityMatrix: SourceCredibility[] = [
  {
    tier: 'TIER 1',
    sources: ['BBC (blocked)', 'ABC (blocked)', 'Newsweek', 'DW (blocked)', 'CBS', 'Gulf News', 'Khaleej Times', 'RNZ'],
    credibility: 'HIGH',
  },
  {
    tier: 'TIER 2',
    sources: ['OCCRP', 'Amnesty International', 'Modash', 'AP (blocked)', 'Detained in Dubai'],
    credibility: 'HIGH',
  },
  {
    tier: 'TIER 3',
    sources: ['Ladbible', 'Si3', 'Agency Helix', 'tokchart', 'TikTok discover pages'],
    credibility: 'MEDIUM',
  },
  {
    tier: 'TIER 4',
    sources: ['Reddit (blocked)', 'TikTok creator accounts', 'Quora (blocked)', 'Economic Times (blocked)'],
    credibility: 'LOW-MEDIUM',
  },
];

// ============================================================================
// COMPLETE TIKTOK INTELLIGENCE DATA (Combined for Hook)
// ============================================================================

export interface TikTokIntelligenceData {
  // Base PlatformIntelligence
  platformData: PlatformIntelligence;

  // Extended data arrays for visualization
  stats: TikTokStat[];
  sentimentDistribution: SentimentDataPoint[];
  criticalRisks: CriticalRisk[];
  hashtagPerformance: HashtagDataPoint[];
  mediaLawFines: MediaLawFine[];
  keyPersons: KeyPerson[];
  influencerLicensing: LicenseCategory[];
  aiDeepfakeThreats: AIDeepfakeCase[];
  queryPatternsExecuted: QueryPattern[];
  sourceCredibilityMatrix: SourceCredibility[];

  // Execution metadata
  executionMetadata: {
    dateExecuted: string;
    frameworkVersion: string;
    queriesExecuted: number;
    pagesFetched: number;
    enrichmentStatus: string;
  };
}

export const tiktokIntelligenceData: TikTokIntelligenceData = {
  platformData: tiktokIntelligence,

  stats: tiktokStats,
  sentimentDistribution: sentimentDistribution,
  criticalRisks: criticalRisks,
  hashtagPerformance: hashtagPerformance,
  mediaLawFines: mediaLawFines,
  keyPersons: keyPersons,
  influencerLicensing: influencerLicensing,
  aiDeepfakeThreats: aiDeepfakeThreats,
  queryPatternsExecuted: queryPatternsExecuted,
  sourceCredibilityMatrix: sourceCredibilityMatrix,

  executionMetadata: {
    dateExecuted: '2026-04-27',
    frameworkVersion: '1.0',
    queriesExecuted: 24,
    pagesFetched: 18,
    enrichmentStatus: 'FULL - all accessible sources enriched',
  },
};
