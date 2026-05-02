/**
 * UAE Perception Overview Data
 * Comprehensive overview data for UAE International Perception dashboard
 * Source: 3-1-international-perception-results.md
 *
 * Provides summary data for the perception-x2/overview route
 */

import type { TopicMetrics, TopicAnalysis } from '../../data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 24,
  pagesFetched: 25,
  urlsSuccessfullyFetched: 35,
  urlsBlockedFailed: 5,
  classification: 'Research Output - International Perception Overview' as const,
}

// ============================================================================
// DASHBOARD METRICS
// ============================================================================

export const dashboardMetrics = {
  totalQueries: 24,
  totalSources: 35,
  totalRegions: 15,
  totalDimensions: 24,
  positiveDimensions: 10,
  negativeDimensions: 8,
  mixedDimensions: 7,
  sentiment: {
    positive: 42,
    negative: 28,
    neutral: 30,
  },
}

// ============================================================================
// KEY METRICS
// ============================================================================

export const keyMetrics = [
  {
    title: 'Soft Power Index',
    value: '#10',
    subtitle: 'Global Ranking',
    score: 59.4,
    trend: 'up' as const,
    gradient: 'gold' as const,
  },
  {
    title: 'Safety Ranking',
    value: '#1',
    subtitle: 'Safest Country 2026',
    score: 86.0,
    trend: 'up' as const,
    gradient: 'emerald' as const,
  },
  {
    title: 'Happiness Rank',
    value: '#21',
    subtitle: 'Highest in Arab World',
    score: 6.821,
    trend: 'stable' as const,
    gradient: 'fuchsia' as const,
  },
  {
    title: 'Human Rights',
    value: '18/100',
    subtitle: 'Freedom House - Not Free',
    score: 18,
    trend: 'down' as const,
    gradient: 'rose' as const,
  },
  {
    title: 'Press Freedom',
    value: '160th',
    subtitle: 'RSF Index 2024',
    score: 30.62,
    trend: 'down' as const,
    gradient: 'rose' as const,
  },
  {
    title: 'Corruption Index',
    value: '#21',
    subtitle: 'Best in MENA',
    score: 69,
    trend: 'up' as const,
    gradient: 'teal' as const,
  },
]

// ============================================================================
// PERCEPTION SCORECARD
// ============================================================================

export const perceptionScorecard = [
  // POSITIVE DIMENSIONS
  {
    dimension: 'Safety',
    perception: 'VERY HIGH',
    score: '94.8-86/100',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'Safest country 2026; 90%+ feel safe; OSAC LOW threat',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Economic Strength',
    perception: 'VERY HIGH',
    score: 'Top 10 globally',
    sourceConfidence: 'HIGH',
    trend: 'Rising',
    details: 'GDP $514B; CPI 21/182; top MENA',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Business/Investment',
    perception: 'VERY HIGH',
    score: '#1 globally (Dubai)',
    sourceConfidence: 'HIGH',
    trend: 'Rising',
    details: 'Dubai best city brand; reputation #1 globally',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Soft Power',
    perception: 'HIGH',
    score: '#10 globally',
    sourceConfidence: 'HIGH',
    trend: 'Rising',
    details: '4th consecutive year; highest in MENA',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Happiness',
    perception: 'HIGH',
    score: '#21 (highest Arab)',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: '21st globally; beats UK, US, France',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Anti-Corruption',
    perception: 'HIGH',
    score: '#21 CPI; #19 WJP',
    sourceConfidence: 'HIGH',
    trend: 'Improving',
    details: '69/100; topped MENA',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Tourism',
    perception: 'HIGH',
    score: '11.7% GDP; #1 city brand',
    sourceConfidence: 'HIGH',
    trend: 'Rising',
    details: 'Dubai 5th globally; 94.8/100 safety',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Technology/AI',
    perception: 'HIGH',
    score: '$91B target; MGX $100B',
    sourceConfidence: 'HIGH',
    trend: 'Rising',
    details: '$1.5B Microsoft-G42; Stargate $500B',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Military',
    perception: 'HIGH',
    score: '#54 GFP; "Little Sparta"',
    sourceConfidence: 'MEDIUM',
    trend: 'Stable',
    details: 'Most capable Arab military',
    sentiment: 'positive' as const,
  },
  {
    dimension: 'Diplomatic Hub',
    perception: 'HIGH',
    score: 'Hosted peace talks',
    sourceConfidence: 'MEDIUM-HIGH',
    trend: 'Rising',
    details: 'Ukraine-Russia; $40B Italy deal',
    sentiment: 'positive' as const,
  },

  // NEGATIVE DIMENSIONS
  {
    dimension: 'Human Rights',
    perception: 'VERY LOW',
    score: 'FH 18/100 "Not Free"',
    sourceConfidence: 'HIGH',
    trend: 'Stable/Deteriorating',
    details: 'Mass trials; political prisoners; kafala',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Press Freedom',
    perception: 'VERY LOW',
    score: '160th/180; 28/100 internet',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: '883 sites blocked; social media manipulation',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Democracy',
    perception: 'VERY LOW',
    score: 'Absolute monarchy; BTI Pol 4.0',
    sourceConfidence: 'HIGH',
    trend: 'None',
    details: 'No elections; political parties prohibited',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'LGBTQ Rights',
    perception: 'VERY LOW',
    score: 'Death penalty; no protections',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'Criminalized sodomy; no anti-discrimination',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Sportswashing',
    perception: 'LOW',
    score: 'Documented via Man City, NBA',
    sourceConfidence: 'MEDIUM-HIGH',
    trend: 'Rising scrutiny',
    details: 'HRW, NDJI documented campaigns',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Censorship',
    perception: 'LOW',
    score: '883 sites blocked; VoIP banned',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'WhatsApp, FB, Viber, FaceTime blocked',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Labor Rights',
    perception: 'LOW',
    score: 'Kafala; 88% migrants; no min wage',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'Wage theft endemic; no unions',
    sentiment: 'negative' as const,
  },
  {
    dimension: 'Environmental',
    perception: 'LOW',
    score: 'COP28 greenwashing; oil expansion',
    sourceConfidence: 'MEDIUM-HIGH',
    trend: 'Deteriorating',
    details: 'ADNOC expanding to 5M bbl/day',
    sentiment: 'negative' as const,
  },

  // MIXED DIMENSIONS
  {
    dimension: 'US Relations',
    perception: 'MIXED',
    score: '82% UAE positive; 14% US positive',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'Asymmetric; $23B arms deal but skepticism',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'China Relations',
    perception: 'MIXED',
    score: '63% positive; $100B trade',
    sourceConfidence: 'HIGH',
    trend: 'Stable',
    details: 'Top trading partner; strategic neutrality',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'Russia Relations',
    perception: 'MIXED',
    score: '$11.5B trade; BRICS; sanctions concern',
    sourceConfidence: 'MEDIUM',
    trend: 'Rising',
    details: 'Close partnership; $710M weapons purchase',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'Arab World',
    perception: 'MIXED',
    score: 'Globally trusted; regionally strained',
    sourceConfidence: 'MEDIUM',
    trend: 'Deteriorating',
    details: 'Saudi-UAE rift; Sudan allegations',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'Europe',
    perception: 'MIXED',
    score: 'Strategic partner; far-right shadow',
    sourceConfidence: 'MEDIUM',
    trend: 'Stable',
    details: 'EU SPA; but documented shadow activities',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'Africa',
    perception: 'MIXED',
    score: '$100B investment; RSF allegations',
    sourceConfidence: 'MEDIUM',
    trend: 'Stable',
    details: '"Sub-imperial" role; humanitarian concerns',
    sentiment: 'mixed' as const,
  },
  {
    dimension: 'Women Rights',
    perception: 'MIXED',
    score: 'Reforms made; gaps remain',
    sourceConfidence: 'MEDIUM',
    trend: 'Slow progress',
    details: 'Male guardianship; marital rape gaps',
    sentiment: 'mixed' as const,
  },
]

// ============================================================================
// KEY FINDINGS
// ============================================================================

export const keyFindings = [
  {
    id: 1,
    title: 'Global Image & Soft Power',
    finding: 'UAE ranks 10th globally in Global Soft Power Index (Brand Finance 2025-2026) — 4th consecutive year. Dubai ranks #1 globally for reputation among 100 cities.',
    uaeRelevance: 'DIRECT — This IS the UAE\'s international image',
    sentiment: 'positive' as const,
  },
  {
    id: 2,
    title: 'US Relations — Asymmetric Perception',
    finding: 'UAE citizens view US 82% positively; Americans view UAE only 14-19% positively. Deep institutional cooperation (3 US military bases, $23B arms deals) coexists with classified intelligence concerns about UAE influence operations.',
    uaeRelevance: 'CRITICAL — US relationship is central to UAE\'s global positioning',
    sentiment: 'mixed' as const,
  },
  {
    id: 3,
    title: 'Russia Relations — Strategic Partnership',
    finding: 'Trade nearly tripled to $11.5B. UAE joined BRICS January 2024. Mediated Russia-Ukraine prisoner exchange. $710M in Russian anti-tank weapons purchased 2019.',
    uaeRelevance: 'HIGH — Russia is key diversification partner from US dependency',
    sentiment: 'mixed' as const,
  },
  {
    id: 4,
    title: 'China Relations — Strategic Neutrality',
    finding: '~$100B/year in trade. UAE public: 63% positive on China\'s role. 74% see China\'s development model positively. G42 removed $1.7-2B in Chinese hardware — signals US alignment.',
    uaeRelevance: 'HIGH — China is top trading partner; UAE maintaining strategic neutrality',
    sentiment: 'mixed' as const,
  },
  {
    id: 5,
    title: 'Arab World — Regional Strain',
    finding: 'Saudi-UAE rupture documented (ECFR, January 2026). Competition across Yemen, Sudan, AI/technology. Sudan RSF allegations generating international condemnation. Somalia cancelled agreements after Somaliland recognition.',
    uaeRelevance: 'HIGH — Regional positioning is core to UAE foreign policy',
    sentiment: 'negative' as const,
  },
  {
    id: 6,
    title: 'Safety Perception — World Leader',
    finding: 'Numbeo: Safest country globally (86.0 score, 2026). 90%+ of Abu Dhabi residents feel safe. Tourism safety index: 94.8/100. OSAC: LOW threat for crime.',
    uaeRelevance: 'DIRECT — Safety is a core brand pillar of UAE\'s international image',
    sentiment: 'positive' as const,
  },
  {
    id: 7,
    title: 'Human Rights — Severe Restrictions',
    finding: 'Freedom House: 18/100 "Not Free". 84 defendants in mass trial (December 2023-July 2024). Press Freedom: 160th of 180. 883 websites blocked. WhatsApp/VoIP banned. Documented social media manipulation (4,200+ Twitter accounts removed).',
    uaeRelevance: 'DIRECT — Human rights is the most significant liability in UAE\'s international perception',
    sentiment: 'negative' as const,
  },
  {
    id: 8,
    title: 'Sportswashing — Active Strategy',
    finding: 'Documented via Manchester City (Sheikh Mansour ownership), NBA games in Abu Dhabi, UFC hub, Emirates sponsorships. HRW: NBA games = "sportswashing" UAE\'s record while "people will be dying in Sudan."',
    uaeRelevance: 'DIRECT — Sportswashing is a documented core strategy for reputation management',
    sentiment: 'negative' as const,
  },
  {
    id: 9,
    title: 'Economy — Global Leader',
    finding: 'GDP $514B (2024). CPI: 21/182 globally (best in MENA). HDI: 17th globally. $91B AI target by 2031. MGX $100B. Microsoft $1.5B in G42. World\'s fastest-growing major economy diversification.',
    uaeRelevance: 'DIRECT — Economic strength is primary driver of positive international perception',
    sentiment: 'positive' as const,
  },
  {
    id: 10,
    title: 'Europe — Strategic Partner with Complications',
    finding: 'EU-UAE Strategic Partnership Agreement launched December 2025. But documented: 330,000+ UAE-linked accounts targeting Muslims in Europe; Nigel Farage at Dubai Ritz-Carlton; French judicial investigation into Marine Le Pen funding.',
    uaeRelevance: 'HIGH — Europe is key diplomatic and economic partner but with documented human rights concerns',
    sentiment: 'mixed' as const,
  },
  {
    id: 11,
    title: 'Happiness — Highest in Arab World',
    finding: 'World Happiness Report 2026: UAE ranks 21st globally (6.821/10) — highest Arab nation. Beats UK (23rd), US (24th), France (33rd). Government Happiness Minister established 2016.',
    uaeRelevance: 'HIGH — Happiness ranking supports "quality of life" brand narrative',
    sentiment: 'positive' as const,
  },
  {
    id: 12,
    title: 'Africa — $100B+ Investment Push',
    finding: '$97-110B in investments (2022-2023). 19 UAE embassies in Sub-Saharan Africa. DP World investing across continent. TNI characterizes as "sub-imperial power." Sudan RSF allegations generating tensions with Saudi Arabia.',
    uaeRelevance: 'HIGH — Africa is key diversification and resource strategy',
    sentiment: 'mixed' as const,
  },
  {
    id: 13,
    title: 'Environmental — Greenwashing Accusations',
    finding: 'COP28 hosted by UAE (Sultan Al Jaber also ADNOC CEO). Accused of using climate conference for fossil fuel deals. ADNOC expanding production to 5M bbl/day. UAE targets 50% clean energy by 2050 but expanding oil.',
    uaeRelevance: 'MEDIUM-HIGH — Environmental criticism is growing liability, especially with younger demographics',
    sentiment: 'negative' as const,
  },
  {
    id: 14,
    title: 'Latin America — Growing BRICS Overlap',
    finding: '$9B total trade. DP World $500M in Brazil\'s Port of Santos. EDGE Group defense partnerships. CEPAs signed with Chile, Costa Rica, Colombia. UAE joined BRICS January 2024; Brazil is core BRICS member.',
    uaeRelevance: 'MEDIUM — Growing but still secondary to Middle East, US, China, Europe',
    sentiment: 'mixed' as const,
  },
  {
    id: 15,
    title: 'Military — "Little Sparta"',
    finding: 'Global Firepower: 54/145. Defense budget $23.48B. Nickname "Little Sparta" from US generals. AEI: "UAE military is unquestionably the most capable among the Arab states."',
    uaeRelevance: 'MEDIUM — Military capability supports regional power projection and counter-terrorism partnership narrative',
    sentiment: 'positive' as const,
  },
]

// ============================================================================
// REGIONAL PERCEPTION SUMMARY
// ============================================================================

export const regionalPerceptionSummary = [
  {
    region: 'United States',
    sentiment: 'mixed',
    uaePositive: 82,
    partnerPositive: 17,
    keyInsight: 'Asymmetric perception — UAE citizens view US very positively, but Americans skeptical',
    trend: 'Stable',
  },
  {
    region: 'Europe',
    sentiment: 'mixed',
    uaePositive: null,
    partnerPositive: null,
    keyInsight: 'Strategic partner but documented shadow activities with far-right',
    trend: 'Stable',
  },
  {
    region: 'China',
    sentiment: 'positive',
    uaePositive: 63,
    partnerPositive: null,
    keyInsight: 'Strong economic partnership; 62% view China as economic partner',
    trend: 'Rising',
  },
  {
    region: 'Russia',
    sentiment: 'positive',
    uaePositive: null,
    partnerPositive: null,
    keyInsight: 'Trade tripled to $11.5B; BRICS member; close strategic partnership',
    trend: 'Rising',
  },
  {
    region: 'Arab World',
    sentiment: 'negative',
    uaePositive: null,
    partnerPositive: 27,
    keyInsight: 'Regionally strained; Saudi-UAE rift documented; RSF allegations',
    trend: 'Deteriorating',
  },
  {
    region: 'Africa',
    sentiment: 'mixed',
    uaePositive: null,
    partnerPositive: null,
    keyInsight: '$100B+ investment push but "sub-imperial" characterization',
    trend: 'Stable',
  },
  {
    region: 'Latin America',
    sentiment: 'positive',
    uaePositive: null,
    partnerPositive: null,
    keyInsight: 'Growing BRICS overlap; defense partnerships expanding',
    trend: 'Rising',
  },
  {
    region: 'India',
    sentiment: 'positive',
    uaePositive: null,
    partnerPositive: null,
    keyInsight: '4.3M Indians in UAE; CEPA targeting $200B trade by 2032',
    trend: 'Rising',
  },
]

// ============================================================================
// DIMENSION SUMMARY
// ============================================================================

export const dimensionSummary = {
  positive: [
    { dimension: 'Safety', score: 86.0, rank: '#1 globally' },
    { dimension: 'Economy', score: 69, rank: '#21 CPI' },
    { dimension: 'Business', score: null, rank: '#1 Dubai brand' },
    { dimension: 'Soft Power', score: 59.4, rank: '#10 globally' },
    { dimension: 'Happiness', score: 6.821, rank: '#21 globally' },
    { dimension: 'Tourism', score: 11.7, rank: '11.7% of GDP' },
    { dimension: 'Technology', score: 91, rank: '$91B AI target' },
  ],
  negative: [
    { dimension: 'Human Rights', score: 18, rank: '18/100 FH' },
    { dimension: 'Press Freedom', score: 30.62, rank: '160/180 RSF' },
    { dimension: 'Democracy', score: null, rank: 'BTI 4.0/10' },
    { dimension: 'LGBTQ', score: null, rank: 'Death penalty' },
    { dimension: 'Censorship', score: 28, rank: '28/100 internet' },
    { dimension: 'Labor', score: null, rank: 'Kafala system' },
  ],
  mixed: [
    { dimension: 'US Relations', score: null, rank: 'Asymmetric' },
    { dimension: 'China Relations', score: null, rank: '$100B trade' },
    { dimension: 'Russia Relations', score: null, rank: 'BRICS member' },
    { dimension: 'Arab World', score: null, rank: 'Regional strain' },
    { dimension: 'Europe', score: null, rank: 'SPA + shadow' },
  ],
}

// ============================================================================
// SOURCES SUMMARY
// ============================================================================

export const sourcesSummary = {
  total: 35,
  byCredibility: {
    high: 20,
    medium: 10,
    low: 5,
  },
  byType: {
    thinkTank: 12,
    government: 8,
    NGO: 10,
    media: 3,
    academic: 2,
  },
  topSources: [
    { name: 'Washington Institute', type: 'Think Tank', credibility: 'HIGH' },
    { name: 'Freedom House', type: 'NGO', credibility: 'HIGH' },
    { name: 'Brand Finance', type: 'Research', credibility: 'HIGH' },
    { name: 'CSIS', type: 'Think Tank', credibility: 'HIGH' },
    { name: 'CEPA', type: 'Think Tank', credibility: 'HIGH' },
    { name: 'HRW', type: 'NGO', credibility: 'HIGH' },
    { name: 'ISPI', type: 'Think Tank', credibility: 'HIGH' },
    { name: 'World Happiness Report', type: 'Research', credibility: 'HIGH' },
  ],
}

// ============================================================================
// MAIN DATA EXPORT
// ============================================================================

export const perceptionOverviewData = {
  // Metadata
  executionMetadata,
  dashboardMetrics,

  // Core data
  keyMetrics,
  perceptionScorecard,
  keyFindings,
  regionalPerceptionSummary,
  dimensionSummary,
  sourcesSummary,
}

export default perceptionOverviewData
