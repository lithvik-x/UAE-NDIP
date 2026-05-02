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

import type { PlatformIntelligence, SocialPlatform, BotAnalysis, Narrative, EngagementMetrics, SentimentBreakdown, SocialAccount, KeyFinding, SourceReference, TierLevel } from '../../data-loader/types';

// ============================================================================
// TIKTOK PLATFORM INTELLIGENCE (Base PlatformIntelligence structure)
// ============================================================================

// Properly typed sources array for PlatformIntelligence.sources
const tiktokSources: SourceReference[] = [
  { name: 'Modash', url: 'https://www.modash.io/find-influencers/tiktok/united-arab-emirates', tier: 2 as TierLevel, date: '2026-04-17' },
  { name: 'Gulf News', url: 'https://gulfnews.com/business/markets/tiktok-unveils-new-features-tools-for-better-content-discovery-in-uae-1.500155456', tier: 1 as TierLevel, date: '2026-04-27' },
  { name: 'Ladbible', url: 'https://www.ladbible.com/news/world-news/dubai-influencer-missile-strikes-tiktok-trend-518671-20260305', tier: 1 as TierLevel, date: '2026-03-05' },
  { name: 'OCCRP', url: 'https://www.occrp.org/en/feature/the-fake-dubai-prince-scam-explained', tier: 2 as TierLevel, date: '2026-04-27' },
  { name: 'Amnesty International', url: 'https://www.amnesty.org/en/latest/news/2021/10/uae-ensure-the-right-to-remedy-to-hundreds-of-african-workers-following-racially-motivated-detentions-and-deportations/', tier: 2 as TierLevel, date: '2021-10-26' },
  { name: 'RNZ', url: 'https://www.rnz.co.nz/news/world/589560/uae-charges-21-people-with-cybercrimes-for-filming-and-sharing-missile-strike-footage', tier: 1 as TierLevel, date: '2026-03-26' },
  { name: 'Newsweek', url: 'https://www.newsweek.com/dubai-influencers-threatened-with-jail-over-iran-posts-11627134', tier: 1 as TierLevel, date: '2026-03' },
  { name: 'CBS', url: 'https://www.cbsnews.com/news/tierra-young-allen-social-media-influencer-sassy-trucker-texas-dubai-arrest-shouting-release/', tier: 1 as TierLevel, date: '2023-08-08' },
  { name: 'Gulf News (Media Law)', url: 'https://gulfnews.com/living-in-uae/telephone-internet/what-fines-influencers-and-content-creators-face-under-uae-media-law-1.500418948', tier: 1 as TierLevel, date: '2026-04-27' },
  { name: 'Agency Helix', url: 'https://agencyhelix.com/blog/is-tiktok-banned-in-uae/', tier: 3 as TierLevel, date: '2026-04-27' },
  { name: 'Si3 Digital', url: 'https://www.si3.ae/blog/social-media-rules/', tier: 3 as TierLevel, date: '2026-04-27' },
  { name: 'Arab News', url: 'https://www.arabnews.com/node/2638594/middle-east', tier: 1 as TierLevel, date: '2026-04-27' },
  { name: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/uae-warn-against-fake-ai-content-rising-spread-deepfakes', tier: 1 as TierLevel, date: '2026-04-27' },
  { name: 'Gulf News (AI)', url: 'https://gulfnews.com/uae/government/uae-warns-public-about-misleading-ai-generated-videos-1.500462915', tier: 1 as TierLevel, date: '2026-04-27' },
  { name: 'Detained in Dubai', url: 'https://www.detainedindoha.org/single-post/breaking-tiktok-influencer-tierra-allen-freed-from-dubai', tier: 2 as TierLevel, date: '2023-08-08' },
  { name: 'tokchart', url: 'https://tokchart.com/', tier: 4 as TierLevel, date: '2026-04-27' },
]

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
  sources: tiktokSources,
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
  cyan: '#06b6d4',
  indigo: '#6366f1',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  lime: '#84cc16',
  teal: '#14b8a6',
  denim: '#3b82f6',
  red: '#ef4444',
} as const;

// ============================================================================
// ENHANCED QUERY FINDINGS DATA (from MD - Complete 13 Query Results)
// ============================================================================

export interface QueryFinding {
  query: string;
  source: string;
  credibility: string;
  uaeRelevance: string;
  keyFindings: Array<{
    metric: string;
    value: string;
    source: string;
  }>;
  sentiment: string;
  sourceUrls: Array<{
    url: string;
    status: string;
    content: string;
  }>;
}

export const queryFindings: QueryFinding[] = [
  {
    query: '"UAE TikTok content"',
    source: 'TikTok search results, BBC article (blocked), Gulf News, Ladbible, Modash',
    credibility: 'TIER 1 (Mainstream), TIER 2 (Data)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'UAE-based TikTok influencers', value: '122,014', source: 'Modash (April 17, 2026)' },
      { metric: 'Top influencer @3lowlow', value: '35.2k followers, 884.7k avg views, 6.92% engagement', source: 'Modash' },
      { metric: 'TikTok status in UAE', value: 'NOT BANNED - regulated', source: 'Agency Helix' },
      { metric: 'Videos removed (3-month 2025)', value: 'Over 1 million', source: 'TikTok internal data' },
      { metric: 'Hashtag #UAE', value: '19M posts', source: 'TikTok' },
      { metric: 'Hashtag #dubailife', value: '2.6M posts', source: 'TikTok' },
      { metric: 'Hashtag #dubaigirls', value: '30.6K posts', source: 'TikTok' },
    ],
    sentiment: 'MIXED (Positive lifestyle promotion vs. regulatory control)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/tag/UAE', status: 'Accessible', content: '19M posts, general UAE content' },
      { url: 'https://www.bbc.com/news/videos/cm215z7x175o', status: 'BLOCKED', content: 'Iran conflict influencer content' },
      { url: 'https://gulfnews.com/business/markets/tiktok-unveils-new-features-tools-for-better-content-discovery-in-uae-1.500155456', status: 'Enriched', content: 'TikTok features, 180M educational video views' },
      { url: 'https://www.ladbible.com/news/world-news/dubai-influencer-missile-strikes-tiktok-trend-518671-20260305', status: 'Enriched', content: 'March 5, 2026 trend details, AED200,000 penalty' },
      { url: 'https://www.modash.io/find-influencers/tiktok/united-arab-emirates', status: 'Enriched', content: '122,014 UAE influencers, @3lowlow profile' },
    ],
  },
  {
    query: '"Dubai TikTok life"',
    source: 'TikTok hashtag #dubailife, @dubai.official account',
    credibility: 'TIER 3 (Platform)',
    uaeRelevance: 'HIGH',
    keyFindings: [
      { metric: 'Hashtag #dubailife', value: '2.6M posts', source: 'TikTok' },
      { metric: 'Hashtag #uae', value: '19M posts', source: 'TikTok' },
      { metric: 'Hashtag #dubaigirls', value: '30.6K posts', source: 'TikTok' },
    ],
    sentiment: 'OVERWHELMINGLY POSITIVE (85%+) with 15% counter-narrative',
    sourceUrls: [
      { url: 'https://www.tiktok.com/tag/dubailife', status: 'Accessible', content: 'Vibrant lifestyle, safety' },
      { url: 'https://www.tiktok.com/@dubai.official', status: 'Accessible', content: 'Official Dubai account' },
    ],
  },
  {
    query: '"Dubai reality TikTok"',
    source: 'TikTok discover, Reddit (blocked)',
    credibility: 'TIER 3 (Platform), TIER 4 (Social)',
    uaeRelevance: 'HIGH - exposes darker narrative',
    keyFindings: [
      { metric: 'Hashtag #realityofdubai', value: 'Counter-narrative content', source: 'TikTok' },
      { metric: 'Content tagline', value: '"Real streets. Real people. No filters"', source: 'TikTok' },
      { metric: 'Account @dubai.reality6', value: 'Counter-narrative content', source: 'TikTok' },
    ],
    sentiment: 'NEGATIVE (counter-narrative)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/discover/dubai-reality', status: 'Accessible', content: 'Counter-narrative content' },
      { url: 'https://www.tiktok.com/tag/realityofdubai', status: 'Accessible', content: 'Reality content' },
      { url: 'https://www.reddit.com/r/UAE/comments/1g1iqtr/does_the_uae_really_treat_workers_poorly/', status: 'BLOCKED', content: 'Worker treatment discussion' },
    ],
  },
  {
    query: '"UAE worker TikTok labor"',
    source: 'TikTok content, Reddit (blocked)',
    credibility: 'TIER 3 (Platform), TIER 4 (Social)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: '"No Work, No Pay" policy', value: 'Legal guidance, worker rights', source: 'TikTok' },
      { metric: 'Labor camps', value: 'Conditions documentation', source: 'TikTok' },
      { metric: 'Wages', value: '$400/month mentioned', source: 'Reddit' },
      { metric: 'Housing', value: '16 roommates in small rooms', source: 'Reddit' },
      { metric: 'Hashtag #uaelabors', value: '"Modern-day slavery" framing', source: 'TikTok' },
      { metric: 'AED 1M fines', value: 'Overcrowded housing illegal bed-spaces', source: 'TikTok' },
    ],
    sentiment: 'NEGATIVE (expose content)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/content/new-law-in-dubai-go-for-workers', status: 'Accessible', content: 'Labor law content' },
      { url: 'https://www.tiktok.com/@uaeupdate14/video/7629204360748174612', status: 'Accessible', content: 'Labor law updates' },
      { url: 'https://www.tiktok.com/tag/uaelaborlaw', status: 'Accessible', content: 'Worker rights content' },
    ],
  },
  {
    query: '"Dubai scam TikTok"',
    source: 'OCCRP investigation, TikTok content',
    credibility: 'TIER 2 (Investigative), TIER 3 (Platform)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'Impersonated', value: 'Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum (Fazza)', source: 'OCCRP' },
      { metric: 'Scam Type', value: 'Romance fraud', source: 'OCCRP' },
      { metric: 'Method', value: 'Contact on social media, move to encrypted messaging', source: 'OCCRP' },
      { metric: 'Technique', value: '"Love bombing" over months', source: 'OCCRP' },
      { metric: 'False Prop', value: '"Frozen assets" or "banking restrictions"', source: 'OCCRP' },
      { metric: 'Global Scale', value: '$442 billion lost to scams globally (2025)', source: 'GASA' },
      { metric: 'Expert Quote', value: '"These are highly sophisticated criminal actors"', source: 'Andrei Skorobogatov, Global Anti-Scam Alliance' },
    ],
    sentiment: 'NEGATIVE (fraud exposure)',
    sourceUrls: [
      { url: 'https://www.occrp.org/en/feature/the-fake-dubai-prince-scam-explained', status: 'Enriched', content: 'Full scam methodology' },
      { url: 'https://www.tiktok.com/discover/fake-dubai-money-sending', status: 'Accessible', content: 'Scam content' },
      { url: 'https://www.tiktok.com/@dubai.scam.series', status: 'Accessible', content: 'Scam documentation' },
    ],
  },
  {
    query: '"leaving Dubai TikTok"',
    source: 'TikTok content',
    credibility: 'TIER 3 (Platform), TIER 4 (Social)',
    uaeRelevance: 'HIGH - brain drain indicator',
    keyFindings: [
      { metric: 'Hashtag #leavingdubai', value: 'Departure documentation', source: 'TikTok' },
      { metric: 'Content "Leaving Dubai: The Hardest Part is the Pause"', value: 'Emotional content', source: 'TikTok' },
      { metric: 'Content "We Decided to Leave Dubai"', value: 'Journey content', source: 'TikTok' },
      { metric: 'OFW farewell journeys', value: 'Overseas Filipino Worker documentation', source: 'TikTok' },
      { metric: 'Iran conflict departures', value: 'Missile attack fears', source: 'TikTok' },
    ],
    sentiment: 'MIXED (emotional, negative for departures)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/content/leaving-uae-dubai', status: 'Accessible', content: 'Departure content' },
      { url: 'https://www.tiktok.com/tag/leavingdubai', status: 'Accessible', content: 'Leaving Dubai content' },
    ],
  },
  {
    query: '"UAE racism TikTok"',
    source: 'TikTok content, Amnesty International (ENRICHED)',
    credibility: 'TIER 2 (Amnesty), TIER 3 (Platform)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'African workers detained/deported', value: '375+', source: 'Amnesty International' },
      { metric: 'People interviewed', value: '18 (8 women, 10 men)', source: 'Amnesty International' },
      { metric: 'Countries targeted', value: 'Cameroon (11), Nigeria (5), Uganda (1), Ghana (1)', source: 'Amnesty International' },
      { metric: 'Raid dates', value: 'June 24-25, 2021, 2am-4am', source: 'Amnesty International' },
      { metric: 'Detention duration', value: '35-61 days', source: 'Amnesty International' },
      { metric: 'Detention facility', value: 'Al-Wathba prison', source: 'Amnesty International' },
      { metric: 'Overcrowding', value: 'Up to 220 detainees with only 4 toilets', source: 'Amnesty International' },
      { metric: 'Pregnant woman lost child', value: 'Medical neglect confirmed', source: 'Amnesty International' },
    ],
    sentiment: 'HIGHLY NEGATIVE (systemic racism documented)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/discover/racism-caught-in-dubai', status: 'Accessible', content: '#racism content' },
      { url: 'https://www.amnesty.org/en/latest/news/2021/10/uae-ensure-the-right-to-remedy-to-hundreds-of-african-workers-following-racially-motivated-detentions-and-deportations/', status: 'Enriched', content: 'Full 375+ workers report' },
    ],
  },
  {
    query: '"UAE TikTok banned arrest"',
    source: 'Newsweek (ENRICHED), RNZ (ENRICHED), CBS (ENRICHED)',
    credibility: 'TIER 1 (Newsweek, CBS, RNZ)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'People charged', value: '21', source: 'RNZ' },
      { metric: 'Includes', value: '60-year-old British tourist, Indian student at Dubai University', source: 'RNZ' },
      { metric: 'Charges', value: 'Filming/sharing missile strike footage', source: 'RNZ' },
      { metric: 'Law', value: 'Cybercrime laws for "false news, rumours or provocative propaganda"', source: 'RNZ' },
      { metric: 'Penalty', value: 'Minimum 2 years imprisonment + 200,000 AED fine', source: 'RNZ' },
      { metric: 'Context', value: 'Over 1,800 drones/missiles targeted UAE, 6 deaths, 141 injuries', source: 'RNZ' },
      { metric: 'Tierra Allen arrested', value: 'May 2023', source: 'CBS' },
      { metric: 'Tierra Allen released', value: 'August 8, 2023', source: 'CBS' },
      { metric: 'Hamdan Al Rind followers', value: '2.6 million', source: 'Multiple sources' },
      { metric: 'Hamdan Al Rind arrested', value: 'July 2023', source: 'Multiple sources' },
    ],
    sentiment: 'HIGHLY NEGATIVE (free speech suppression)',
    sourceUrls: [
      { url: 'https://www.newsweek.com/dubai-influencers-threatened-with-jail-over-iran-posts-11627134', status: 'Enriched', content: 'March 2026 threats' },
      { url: 'https://www.rnz.co.nz/news/world/589560/uae-charges-21-people-with-cybercrimes-for-filming-and-sharing-missile-strike-footage', status: 'Enriched', content: '21 charged, British tourist, Indian student' },
      { url: 'https://www.cbsnews.com/news/tierra-young-allen-social-media-influencer-sassy-trucker-texas-dubai-arrest-shouting-release/', status: 'Enriched', content: 'Tierra Allen full case' },
    ],
  },
  {
    query: '"UAE TikTok going viral negative"',
    source: 'Multiple news sources, Reddit (blocked)',
    credibility: 'TIER 1 (ABC, DW, France24)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'Dubai Police warning', value: '"If you make negative videos, you could be deported"', source: 'Economic Times India' },
      { metric: 'Context', value: 'Iran attack on UAE, February 28, 2026', source: 'Ladbible' },
      { metric: 'Viral threat', value: 'Filming/sharing negative content (accidents, fires)', source: 'Economic Times' },
      { metric: 'Caption pattern', value: '"no, because I know who protects us"', source: 'Multiple sources' },
      { metric: 'Coordination suspected', value: 'Near-identical content across multiple influencers', source: 'France24' },
    ],
    sentiment: 'NEGATIVE (suppression of free speech documented)',
    sourceUrls: [
      { url: 'https://www.abc.net.au/news/2026-03-10/dubai-influencers-told-talking-about-war-could-end-in-arrest/106434192', status: 'BLOCKED', content: 'March 10, 2026 arrest warning' },
      { url: 'https://www.dw.com/en/iran-strikes-highlight-dubai-influencers-free-speech-limits/a-76202896', status: 'BLOCKED', content: 'Tone-deaf content' },
    ],
  },
  {
    query: '"UAE TikTok paid content undisclosed"',
    source: 'Gulf News (ENRICHED), Agency Helix (ENRICHED), Si3 Digital (ENRICHED)',
    credibility: 'TIER 1 (Gulf News)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'Religious offences/inciting violence', value: 'Up to Dh1 million', source: 'Gulf News' },
      { metric: 'Content inciting murder, rape, drug abuse', value: 'Up to Dh150,000', source: 'Gulf News' },
      { metric: 'Undermining social cohesion', value: 'Up to Dh250,000', source: 'Gulf News' },
      { metric: 'Licensing effective date', value: 'February 1, 2026', source: 'Si3 Digital' },
      { metric: 'UAE citizens first 3 years', value: 'FREE', source: 'Si3 Digital' },
      { metric: 'Residents after 3 years', value: 'AED 1,000/year', source: 'Si3 Digital' },
      { metric: 'Trade license cost', value: 'AED 15,000-20,000', source: 'Si3 Digital' },
    ],
    sentiment: 'NEUTRAL (regulatory)',
    sourceUrls: [
      { url: 'https://gulfnews.com/living-in-uae/telephone-internet/what-fines-influencers-and-content-creators-face-under-uae-media-law-1.500418948', status: 'Enriched', content: 'Full fine schedule' },
      { url: 'https://agencyhelix.com/blog/is-tiktok-banned-in-uae/', status: 'Enriched', content: 'TikTok legal status, requirements' },
      { url: 'https://www.si3.ae/blog/social-media-rules/', status: 'Enriched', content: 'Full permit requirements, costs, timeline' },
    ],
  },
  {
    query: '"Dubai TikTok AI generated fake content"',
    source: 'Gulf News (ENRICHED), Khaleej Times (ENRICHED), Arab News (ENRICHED)',
    credibility: 'TIER 1 (Gulf News, Khaleej Times, Arab News)',
    uaeRelevance: 'CRITICAL',
    keyFindings: [
      { metric: 'Warning issued by', value: 'UAE Cyber Security Council', source: 'Gulf News' },
      { metric: 'Warning about', value: 'AI-generated videos appearing "highly realistic and potentially misleading"', source: 'Gulf News' },
      { metric: 'Burj Khalifa collapse (AI fake)', value: '12 million+ views before debunking', source: 'Arab News' },
      { metric: 'X accounts AI war content', value: '1 billion+ views', source: 'Institute for Strategic Dialogue' },
      { metric: 'Expert Quote', value: '"When everything could be fake, it becomes easy to believe that anything is"', source: 'Sofia Rubinson, NewsGuard' },
    ],
    sentiment: 'NEUTRAL (public advisory)',
    sourceUrls: [
      { url: 'https://gulfnews.com/uae/government/uae-warns-public-about-misleading-ai-generated-videos-1.500462915', status: 'Enriched', content: 'Cyber Security Council warning' },
      { url: 'https://www.khaleejtimes.com/uae/uae-warn-against-fake-ai-content-rising-spread-deepfakes', status: 'Enriched', content: 'Digital Dubai campaign' },
      { url: 'https://www.arabnews.com/node/2638594/middle-east', status: 'Enriched', content: '12M views Burj Khalifa, 1B X views' },
    ],
  },
  {
    query: '"UAE influencer scam exposed TikTok"',
    source: 'TikTok content, WSJ (blocked), Indy100 (blocked)',
    credibility: 'TIER 1 (WSJ), TIER 3 (Platform)',
    uaeRelevance: 'HIGH',
    keyFindings: [
      { metric: '"Richest Woman in Dubai" scam', value: '20K EUR TikTok scam', source: 'TikTok' },
      { metric: 'Crypto scams', value: 'Legal action against influencers for crypto scams in UAE', source: 'Multiple sources' },
      { metric: 'Dubai Housewives Lifestyle scam', value: '"Exposing the Scams Behind Dubai Housewives Lifestyle"', source: 'TikTok' },
      { metric: 'Beautiful Destinations Academy', value: 'All-expenses-paid influencer program', source: 'Indy100 (blocked)' },
    ],
    sentiment: 'MIXED (expose content documenting scams)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/discover/dubai-real-estate-influencer-controversy', status: 'Accessible', content: 'Real estate controversy' },
      { url: 'https://www.wsj.com/articles/dubai-tiktok-trip-influencers-cost-beyonce-alix-earle-11674760336', status: 'BLOCKED', content: 'Influencer economics' },
    ],
  },
  {
    query: '"UAE rent crisis TikTok"',
    source: 'TikTok content',
    credibility: 'TIER 3 (Platform), TIER 4 (Social)',
    uaeRelevance: 'HIGH',
    keyFindings: [
      { metric: 'Hashtag #dubaihousingcrisis', value: 'Dubai housing struggles', source: 'TikTok' },
      { metric: 'Hashtag #uaehousingcrisis', value: 'UAE-wide housing issues', source: 'TikTok' },
      { metric: 'Content "Dubai has a housing crisis and will continue for many years"', value: 'Confirmed', source: 'TikTok' },
      { metric: 'Content "Tenant Power Returns"', value: 'Rental market shift', source: 'TikTok' },
    ],
    sentiment: 'NEGATIVE (housing crisis)',
    sourceUrls: [
      { url: 'https://www.tiktok.com/tag/dubaihousingcrisis', status: 'Accessible', content: 'Housing crisis content' },
      { url: 'https://www.tiktok.com/tag/uaehousingcrisis', status: 'Accessible', content: 'UAE housing content' },
    ],
  },
];

// ============================================================================
// PLATFORM STATUS DATA
// ============================================================================

export interface PlatformStatus {
  status: string;
  uaeInfluencers: number;
  contentRemoved: number;
  topInfluencer: {
    handle: string;
    followers: string;
    avgViews: string;
    engagement: string;
  };
  hashtags: Record<string, string>;
}

export const platformStatus: PlatformStatus = {
  status: 'NOT BANNED - regulated',
  uaeInfluencers: 122014,
  contentRemoved: 1000000,
  topInfluencer: {
    handle: '@3lowlow',
    followers: '35.2k',
    avgViews: '884.7k',
    engagement: '6.92%',
  },
  hashtags: {
    '#UAE': '19M posts',
    '#dubailife': '2.6M posts',
    '#dubaigirls': '30.6K posts',
  },
};

// ============================================================================
// IRAN CONFLICT DATA (March 2026)
// ============================================================================

export interface IranConflictData {
  missilesDrones: number;
  deaths: number;
  injuries: number;
  peopleCharged: number;
  penalty: string;
  viralCoordinatedContent: {
    caption: string;
    music: string;
    description: string;
  };
}

export const iranConflictData: IranConflictData = {
  missilesDrones: 1800,
  deaths: 6,
  injuries: 141,
  peopleCharged: 21,
  penalty: 'AED 200,000 + 2 years prison',
  viralCoordinatedContent: {
    caption: '"no, because I know who protects us"',
    music: 'AI remix of Stromae\'s "Papaoutai"',
    description: 'Near-identical videos across multiple influencers with same caption pattern',
  },
};

// ============================================================================
// AMNESTY INTERNATIONAL DATA (2021)
// ============================================================================

export interface AmnestyData {
  workersDetained: number;
  peopleInterviewed: number;
  countries: string[];
  raidDates: string;
  detentionDuration: string;
  detentionFacility: string;
  conditions: {
    overcrowding: string;
    covidRisk: string;
    medical: string;
    dueProcess: string;
  };
}

export const amnestyData: AmnestyData = {
  workersDetained: 375,
  peopleInterviewed: 18,
  countries: ['Cameroon (11)', 'Nigeria (5)', 'Uganda (1)', 'Ghana (1)'],
  raidDates: 'June 24-25, 2021, 2am-4am',
  detentionDuration: '35-61 days',
  detentionFacility: 'Al-Wathba prison',
  conditions: {
    overcrowding: 'Up to 220 detainees with only 4 toilets',
    covidRisk: 'No masks, no testing despite transmission risk',
    medical: 'Pregnant woman denied anemia medication, lost child',
    dueProcess: 'Never brought before prosecutor, judge, or court',
  },
};

// ============================================================================
// SCAM DATA
// ============================================================================

export interface ScamData {
  globalLosses2025: string;
  fakeDubaiPrince: {
    impersonated: string;
    scamType: string;
    method: string;
    technique: string;
    victimOutcome: string;
  };
  redFlags: string[];
  otherScams: string[];
}

export const scamData: ScamData = {
  globalLosses2025: '$442 billion (2025, GASA)',
  fakeDubaiPrince: {
    impersonated: 'Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum (Fazza)',
    scamType: 'Romance fraud',
    method: 'Contact on social media, move to encrypted messaging',
    technique: '"Love bombing" over months',
    victimOutcome: 'Some become unknowing money mules',
  },
  redFlags: [
    'Cannot meet (even video calls use deepfakes)',
    'Quick escalation "love-bombing"',
    'Platform move requests to private messaging',
    'Implausible reasons for money requests',
    'Isolation from friends/family',
    'Cryptocurrency or obscure payment channels',
  ],
  otherScams: [
    'Fake money sending scams',
    'Fake PayPal transfers',
    'Job offer scams targeting foreign workers',
    'Dubai scam series accounts documenting scams',
    'Rental car extortion scheme',
  ],
};

// ============================================================================
// TIKTOK FEATURES DATA
// ============================================================================

export const tiktokFeatures = {
  manageTopics: {
    description: 'Customize content from 10+ categories in recommendations',
    available: true,
  },
  smartKeywordFilter: {
    description: 'AI-powered, expands filtering to include related words/synonyms, up to 200 keywords',
    available: true,
  },
  contentLevels: {
    description: 'Restricts mature themes from younger users',
    available: true,
  },
  restrictedMode: {
    description: 'Optional filtering',
    available: true,
  },
  educationalVideos: {
    description: 'Educational videos about platform',
    views: '180 million+ globally',
  },
};

// ============================================================================
// CONTENT GOVERNANCE DATA
// ============================================================================

export const contentGovernance = {
  mediaLaw: {
    name: 'UAE Federal Media Law No. 55 of 2023',
    effectiveDate: '2025',
    enforcementBegins: 'November 2025',
  },
  licensing: {
    effectiveDate: 'February 1, 2026',
    advertiserPermitDeadline: 'January 31, 2026',
    gracePeriodEnds: '~October 30, 2025',
  },
  fines: [
    { violation: 'Religious offences/inciting violence', fine: 'Up to Dh1 million' },
    { violation: 'Murder, rape, drug abuse content', fine: 'Up to Dh150,000' },
    { violation: 'Undermining social cohesion', fine: 'Up to Dh250,000' },
    { violation: 'National symbol disrespect', fine: 'Dh50,000 - Dh500,000' },
    { violation: 'Domestic/foreign policy offense', fine: 'Dh50,000 - Dh500,000' },
    { violation: 'Foreign relations undermining', fine: 'Up to Dh250,000' },
    { violation: 'False information (first)', fine: 'Dh5,000' },
    { violation: 'False information (repeat)', fine: 'Dh10,000' },
    { violation: 'Operating without licence (first)', fine: 'Dh10,000' },
    { violation: 'Operating without licence (repeat)', fine: 'Dh40,000' },
    { violation: 'Failure to renew licence', fine: 'Dh150/day (capped at Dh3,000)' },
    { violation: 'Publishing with expired licence (first)', fine: 'Dh10,000' },
    { violation: 'Publishing with expired licence (repeat)', fine: 'Dh20,000' },
    { violation: 'Licence misuse', fine: 'Up to Dh20,000' },
  ],
  licensingRequirements: [
    '18+ years old',
    'UAE citizen or resident',
    'Trade licence for electronic media',
    'Advertiser Permit for all promotional content',
  ],
  exemptions: [
    'Small business owners promoting their own products',
    'Minids (<18) posting educational/cultural content',
    'Personal opinions (unless tied to brand relationship)',
  ],
};

// ============================================================================
// ENTITIES DATA (from MD ENTITIES INDEX)
// ============================================================================

export const tiktokEntities = {
  persons: [
    { name: 'Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum', role: 'Crown Prince of Dubai ("Fazza")', keyFacts: 'Impersonated in romance scams' },
    { name: 'Hamdan Al Rind', role: 'Dubai TikTok influencer', keyFacts: '2.6M followers, arrested July 2023 for satire' },
    { name: 'Tierra Young Allen', role: 'Texas TikToker ("Sassy Trucker")', keyFacts: 'Arrested May 2023, released Aug 2023' },
    { name: 'Radha Stirling', role: 'CEO, Detained in Dubai', keyFacts: 'Helped free Tierra Allen' },
    { name: 'Andrei Skorobogatov', role: 'Global Anti-Scam Alliance', keyFacts: 'Called scams "highly sophisticated"' },
    { name: 'Sofia Rubinson', role: 'NewsGuard', keyFacts: '"When everything could be fake" quote' },
    { name: 'Arabella Chi', role: 'Former Love Islander', keyFacts: '"Very scary time" during attacks' },
    { name: 'Rio Ferdinand', role: 'Former Man United star', keyFacts: '"Frightening" but "very secure"' },
    { name: '@3lowlow', role: 'Top UAE TikToker', keyFacts: '35.2k followers, 6.92% engagement' },
  ],
  organizations: [
    { name: 'Global Anti-Scam Alliance (GASA)', type: 'Alliance', relevance: '$442B scam statistic' },
    { name: 'Amnesty International', type: 'NGO', relevance: '375+ worker detentions' },
    { name: 'Institute for Strategic Dialogue', type: 'Think tank', relevance: '1B+ AI content views' },
    { name: 'Detained in Dubai', type: 'NGO', relevance: 'Tourist arrest advocacy' },
    { name: 'Modash', type: 'Data platform', relevance: '122,014 UAE influencers' },
    { name: 'Digital Dubai', type: 'Government', relevance: 'AI awareness campaign' },
    { name: 'Al Ameen Service', type: 'Government', relevance: 'Cybersecurity' },
    { name: 'UAE Cyber Security Council', type: 'Government', relevance: 'AI video warnings' },
    { name: 'NewsGuard', type: 'Media watchdog', relevance: 'Deepfake expert' },
    { name: 'Beautiful Destinations', type: 'Marketing', relevance: 'Influencer academy' },
    { name: 'OCCRP', type: 'Investigative', relevance: 'Fake Dubai Prince scam' },
  ],
  laws: [
    { name: 'UAE Federal Media Law No. 55 of 2023', keyPoints: 'Dh10K-Dh1M fines' },
    { name: 'Cybercrime laws', keyPoints: '2+ years for false news' },
    { name: '"No Work, No Pay" policy', keyPoints: 'Worker protection' },
    { name: 'Influencer licensing (Feb 1, 2026)', keyPoints: 'Permit requirements' },
    { name: 'AED 1M housing fines', keyPoints: 'Overcrowding penalty' },
  ],
};

// ============================================================================
// COVERAGE ASSESSMENT DATA
// ============================================================================

export const coverageAssessment = {
  completedQueries: {
    contentTypeLifestyle: { queries: 8, status: 'Complete', enrichmentRate: '80%' },
    contentTypeRealityRisk: { queries: 6, status: 'Complete', enrichmentRate: '85%' },
    riskQueriesLegalSafety: { queries: 6, status: 'Complete', enrichmentRate: '90%' },
    influencerInvestigation: { queries: 3, status: 'Complete', enrichmentRate: '75%' },
    trendingSounds: { queries: 1, status: 'Complete', enrichmentRate: '60%' },
  },
  totalQueries: 24,
  averageEnrichmentRate: '78%',
  sourceTierDistribution: {
    tier1: { sources: 'BBC (blocked), ABC (blocked), Newsweek, DW (blocked), CBS, Gulf News, Khaleej Times, RNZ', credibility: 'HIGH' },
    tier2: { sources: 'OCCRP, Amnesty International, Modash, AP (blocked), Detained in Dubai', credibility: 'HIGH' },
    tier3: { sources: 'Ladbible, Si3, Agency Helix, tokchart, TikTok discover pages', credibility: 'MEDIUM' },
    tier4: { sources: 'Reddit (blocked), TikTok creator accounts, Quora (blocked), Economic Times (blocked)', credibility: 'LOW-MEDIUM' },
  },
  fetchSuccessRate: {
    mainstreamNews: { attempted: 10, successful: 6, blocked: 4 },
    ngoInvestigative: { attempted: 4, successful: 4, blocked: 0 },
    platformSocial: { attempted: 12, successful: 8, blocked: 4 },
    total: { attempted: 26, successful: 18, blocked: 8 },
  },
  keyGaps: [
    { gap: 'Arabic language TikTok content', impact: 'HIGH', recommendation: 'Add Arabic-language media monitoring' },
    { gap: 'Telegram/WhatsApp coordination', impact: 'MEDIUM', recommendation: 'Add messaging app monitoring' },
    { gap: 'Duet/Stitch monitoring', impact: 'MEDIUM', recommendation: 'Direct execution recommended' },
    { gap: 'Live stream monitoring', impact: 'LOW', recommendation: 'Add live stream capability' },
    { gap: 'Reddit discussions', impact: 'MEDIUM', recommendation: 'Alternative source needed' },
  ],
};

// ============================================================================
// SENTIMENT ANALYSIS DATA
// ============================================================================

export const sentimentAnalysis = [
  { category: 'Official UAE content', sentiment: 'OVERWHELMINGLY POSITIVE', dominantNarrative: 'Safety, luxury, protection' },
  { category: 'Counter-narrative content', sentiment: 'HIGHLY NEGATIVE', dominantNarrative: 'Labor, racism, suppression' },
  { category: 'Influencer crisis response', sentiment: 'MIXED (suspicious)', dominantNarrative: 'Coordinated positive messaging' },
  { category: 'Scam exposure', sentiment: 'NEGATIVE', dominantNarrative: 'Fraud prevalence' },
  { category: 'Legal/risk content', sentiment: 'NEGATIVE', dominantNarrative: 'Arrests, deportation threats' },
  { category: 'Housing crisis', sentiment: 'NEGATIVE', dominantNarrative: 'Economic struggles' },
  { category: 'AI/deepfake warnings', sentiment: 'NEUTRAL', dominantNarrative: 'Advisory nature' },
];

// ============================================================================
// UAE RELEVANCE ASSESSMENT DATA
// ============================================================================

export const uaeRelevanceAssessment = [
  { level: 'CRITICAL', topics: 'Iran conflict coverage, racism (Amnesty), scams (OCCRP), free speech arrests, AI deepfakes, media law' },
  { level: 'HIGH', topics: 'Labor conditions, housing crisis, influencer economy, deportation threats' },
  { level: 'MEDIUM', topics: 'Culture shock, trending sounds, dating scene' },
  { level: 'LOW', topics: 'Food reviews, mall experiences, metro' },
];

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

  // Enhanced data from MD
  queryFindings: QueryFinding[];
  platformStatus: PlatformStatus;
  iranConflictData: IranConflictData;
  amnestyData: AmnestyData;
  scamData: ScamData;
  tiktokFeatures: typeof tiktokFeatures;
  contentGovernance: typeof contentGovernance;
  tiktokEntities: typeof tiktokEntities;
  coverageAssessment: typeof coverageAssessment;
  sentimentAnalysis: typeof sentimentAnalysis;
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment;
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

  // Enhanced data from MD
  queryFindings,
  platformStatus,
  iranConflictData,
  amnestyData,
  scamData,
  tiktokFeatures,
  contentGovernance,
  tiktokEntities,
  coverageAssessment,
  sentimentAnalysis,
  uaeRelevanceAssessment,
};
