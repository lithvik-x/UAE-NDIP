/**
 * Reputation Crisis Data - UAE NDIP
 *
 * Comprehensive data extracted from MD file 4-5: Reputation Crisis
 * Covers: Sudan Genocide, Iran War 2026, Human Rights, Libya Airstrike,
 * Qatar Blockade, Royal Family Crises, Sports Bans, COP28, Academic Boycott
 */

import type { CrisisEvent, SourceReference, KeyFinding, CredibilityScore, TierLevel } from './types'

// ============================================================================
// REPUTATION CRISIS DATA
// ============================================================================

export const reputationCrisisEventData: CrisisEvent = {
  id: 'crisis-4-5',
  type: 'reputation',
  name: 'UAE Reputation Crisis',
  severity: 5,
  phoenixStage: 'assessment',
  alertLevel: 'RED',
  detectedDate: '2009-01-01',
  lastUpdated: '2026-04-27',
  affectedEntities: [
    'UAE Government',
    'Dubai Government',
    'Abu Dhabi Government',
    'Sheikh Mohammed bin Rashid Al Maktoum',
    'Sheikh Mohammed bin Zayed Al Nahyan',
    'RSF (Rapid Support Forces)',
    'International Community',
    'Human Rights Organizations',
    'Sports Federations',
    'Academic Institutions',
    'Influencers',
    'Expatriates',
    'Political Prisoners',
    'Sudanese People',
  ],
  stakeholderImpact: [
    {
      stakeholder: 'International Community',
      impactScore: 9,
      sentimentShift: -85,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Press/Freedom Organizations',
      impactScore: 10,
      sentimentShift: -92,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Expatriates/Influencers',
      impactScore: 8,
      sentimentShift: -65,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Dissidents/Political Prisoners',
      impactScore: 10,
      sentimentShift: -95,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Sudanese People',
      impactScore: 10,
      sentimentShift: -100,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Jewish Community',
      impactScore: 9,
      sentimentShift: -88,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Academic/Cultural Institutions',
      impactScore: 7,
      sentimentShift: -55,
      responseStatus: 'active',
    },
    {
      stakeholder: 'Sports Organizations',
      impactScore: 6,
      sentimentShift: -45,
      responseStatus: 'active',
    },
  ],
  responseMetrics: {
    detectionTime: '2009',
    responseTime: 'Ongoing',
    containmentTime: 'Ongoing',
    recoveryTime: 'Long-term structural reform required',
    stakeholderCooperation: 25,
    publicSentiment: {
      positive: 8,
      negative: 74,
      neutral: 18,
      overall: -66,
      volume: 15000000,
    },
  },
  timeline: [
    // Sudan Crisis
    { date: '1970s', actor: 'Diplomatic ties established', description: 'UAE-Sudan diplomatic relations established', stage: 'monitoring' as const },
    { date: '2008', actor: 'UAE becomes Sudans 2nd largest investor', description: 'UAE investment in Sudan reaches $7 billion', stage: 'monitoring' as const },
    { date: '2016', actor: 'RSF participates in Yemen intervention', description: 'RSF works with UAE in Yemen', stage: 'monitoring' as const },
    { date: 'Apr 15, 2023', actor: 'Sudan war begins', description: 'War between SAF and RSF begins', stage: 'detection' as const },
    { date: '2023-2024', actor: 'Gold smuggling documented', description: 'Sudanese gold smuggling to Dubai documented', stage: 'detection' as const },
    { date: 'Mar 6, 2025', actor: 'Sudan files ICJ case', description: 'Sudan accuses UAE of genocide via RSF support', stage: 'assessment' as const },
    { date: 'May 5, 2025', actor: 'ICJ throws out case', description: 'Case dismissed for lack of jurisdiction', stage: 'containment' as const },
    { date: 'May 6, 2025', actor: 'Sudan cuts diplomatic ties', description: 'Sudan announces cutting ties with UAE', stage: 'containment' as const },
    { date: 'Oct 2025', actor: 'UN Fact-Finding Mission genocide findings', description: 'RSF actions show hallmarks of genocide', stage: 'assessment' as const },
    { date: 'Feb 2026', actor: 'UN classified report', description: 'UAE funded RSF genocidal activities confirmed', stage: 'assessment' as const },

    // Iran War 2026
    { date: 'Mar 2026', actor: 'Iran war strikes UAE', description: '165 ballistic missiles, 541 drones, 2 cruise missiles in first 24hrs', stage: 'detection' as const },
    { date: 'Mar 2026', actor: 'Social media crackdown', description: '375+ arrested for sharing missile content', stage: 'containment' as const },
    { date: 'Mar 2026', actor: 'Influencer academy launched', description: 'Government trains influencers on messaging control', stage: 'containment' as const },

    // Human Rights
    { date: '2011', actor: 'Press freedom 25-point drop', description: 'RSF Index fell from rank 87 to 112', stage: 'monitoring' as const },
    { date: '2017', actor: 'Ahmed Mansoor arrested', description: 'Leading human rights activist arrested', stage: 'detection' as const },
    { date: '2023', actor: 'UAE94 mass trial', description: '84+ civil society members tried', stage: 'detection' as const },
    { date: 'Mar 2025', actor: 'Convictions upheld', description: '53 convictions upheld including Ahmed Mansoor', stage: 'containment' as const },
    { date: 'Nov 19, 2025', actor: 'Ali al-Khaja dies in prison', description: 'Political prisoner dies after alleged torture', stage: 'detection' as const },

    // Libya Airstrike
    { date: 'Jul 2, 2019', actor: 'Tajoura migrant center strike', description: '53+ killed, 130+ injured in Libya', stage: 'detection' as const },

    // Royal Family
    { date: '2002', actor: 'Princess Latifa first escape attempt', description: 'Age 16, captured at border', stage: 'detection' as const },
    { date: 'Feb 24, 2018', actor: 'Princess Latifa escape', description: 'Second escape attempt on yacht Nostromo', stage: 'detection' as const },
    { date: 'Mar 4, 2018', actor: 'Princess Latifa captured', description: 'Intercepted by Indian/UAE forces near Goa', stage: 'detection' as const },
    { date: 'Dec 2019', actor: 'UK court ruling', description: 'Sheikh Mohammed orchestrated Latifa abduction', stage: 'assessment' as const },
    { date: '2019', actor: 'Princess Haya divorce', description: 'UK court finds exorbitant domestic abuse', stage: 'detection' as const },

    // Sports Bans
    { date: '2015', actor: 'First FEI ban', description: 'UAE suspended from endurance races', stage: 'detection' as const },
    { date: '2020', actor: 'Second FEI ban', description: 'UAE suspended from ALL FEI disciplines', stage: 'detection' as const },
    { date: 'Oct 14, 2025', actor: 'FIFA ban', description: 'UAE official assault on referee - 16 match suspension', stage: 'detection' as const },

    // Financial Crime
    { date: '2019', actor: 'Placed on FATF Grey List', description: 'Money laundering concerns', stage: 'detection' as const },
    { date: 'Feb 23, 2024', actor: 'Removed from FATF Grey List', description: 'Despite evidence of continued violations', stage: 'containment' as const },

    // COP28
    { date: 'Nov-Dec 2023', actor: 'COP28 hosted', description: 'Sultan Al Jaber (oil exec) as president', stage: 'detection' as const },

    // Qatar Blockade
    { date: 'May 23, 2017', actor: 'Qatar blockade begins', description: 'Saudi Arabia, UAE, Egypt, Bahrain cut ties', stage: 'detection' as const },
    { date: 'Jan 5, 2021', actor: 'Blockade lifted', description: 'Four countries announce lifting embargo', stage: 'resolution' as const },

    // Academic Boycott
    { date: '2024', actor: 'TAGATU3 campaign launches', description: 'Sudanese Academic and Cultural Boycott of UAE', stage: 'detection' as const },
  ],
  keyFindings: [
    'Overall Reputation: SEVERELY DAMAGED',
    'RSF Press Freedom Index: 164/180 (3rd worst in Middle East)',
    'Freedom House Global Freedom: 18/100 (Not Free)',
    'Freedom House Internet Freedom: 28/100 (Not Free)',
    'Sudan Genocide: UN Fact-Finding Mission found UAE funded RSF genocidal activities',
    'Gold Smuggling: $1.5B Sudanese gold exports to UAE (2024); ~50% smuggled out',
    'ICJ Case: March 2025 filed, May 2025 dismissed for jurisdiction',
    'Libya Airstrike: July 2019 Tajoura migrant center - 53+ killed, 130+ injured',
    'Iran War 2026: 165 ballistic missiles, 541 drones, 2 cruise missiles in first 24hrs',
    'Content Crackdown: 375+ detainees, 20+ charged together, survivors of drone strikes arrested',
    'Matthew Hedges: British researcher sentenced to 25 years for espionage, later pardoned',
    'Princess Latifa: UK court ruled Sheikh Mohammed orchestrated abduction',
    'Ali Ahmad: British football fan tortured for wearing Qatar shirt',
    'FEI Ban: UAE suspended from ALL FEI disciplines (2020)',
    'FIFA Ban: UAE official assault on referee - 16 match suspension',
    'COP28: Oil executive Sultan Al Jaber as president; 51+ political prisoners held beyond sentence',
    'Academic Boycott: TAGATU3 campaign; $402M UAE gifts to US universities',
    'Sports Bans: FEI equestrian (twice), FIFA official assault',
    'Torture Methods: 16 documented methods including beatings, electrocution, burning, sexual violence',
    'UAE94 Mass Trial: 84+ civil society members, 67+ life sentences by end 2025',
    'COP28 Criticism: HRW says UAE used summit to improve image to conceal repressive policies',
    'Brand Finance Soft Power: 10th globally despite reputation crises',
  ] as unknown as KeyFinding[],
  sources: [
    { name: 'NBCPalmSprings - Iran Strikes Dubai', tier: 2 as TierLevel, date: '2026-03-06', url: 'https://nbcpalmsprings.com/2026/03/06/iran-strikes-challenge-dubais-reputation' },
    { name: 'The Guardian - Shine Taken Off', tier: 1 as TierLevel, date: '2026-03-11', url: 'https://theguardian.com/world/2026/mar/11/the-shine-has-been-taken-off' },
    { name: 'Times of Israel - Image Shattered', tier: 2 as TierLevel, date: '2026-03-05', url: 'https://timesofisrael.com/dubais-carefully-built-image' },
    { name: 'Haaretz - Curated Image Shattered', tier: 2 as TierLevel, date: '2026-03-05', url: 'https://haaretz.com/middle-east-news/2026-03-05/ty-article-magazine' },
    { name: 'Financial Times - Dubai PR Disaster 2009', tier: 1 as TierLevel, date: '2009-12-01', url: 'https://ft.com/content/2c21584c-e67e-11de-98b1-00144feab49a' },
    { name: 'AOL - Orwellian Social Media', tier: 2 as TierLevel, date: '2024-01-15', url: 'https://aol.com/articles/really-orwellian-dubai-social-media' },
    { name: 'ADHRB - UN Genocide Findings', tier: 2 as TierLevel, date: '2026-02-15', url: 'https://adhrb.org/2026/02/united-nations-rules-uae-funded-rsfs-atrocities' },
    { name: 'The Sentry - FATF Grey List', tier: 2 as TierLevel, date: '2024-02-23', url: 'https://thesentry.org/2024/02/23/uae-removed-from-fatf-grey-list' },
    { name: 'Amnesty International - UAE Report', tier: 2 as TierLevel, date: '2024-01-01', url: 'https://amnesty.org/en/location/middle-east-and-north-africa/middle-east/united-arab-emirates' },
    { name: 'HRW - UAE Human Rights', tier: 2 as TierLevel, date: '2024-01-01', url: 'https://hrw.org' },
    { name: 'Freedom House - UAE Freedom Score', tier: 2 as TierLevel, date: '2024-01-01', url: 'https://freedomhouse.org/country/united-arab-emirates' },
    { name: 'RSF Press Freedom Index', tier: 2 as TierLevel, date: '2024-01-01', url: 'https://rsf.org/en/index' },
    { name: 'Wikipedia - Human Rights UAE', tier: 3 as TierLevel, date: '2024-01-01', url: 'https://en.wikipedia.org/wiki/Human_rights_in_the_United_Arab_Emirates' },
    { name: 'Wikipedia - Latifa bint Mohammed', tier: 3 as TierLevel, date: '2024-01-01', url: 'https://en.wikipedia.org/wiki/Latifa_bint_Mohammed_Al_Maktoum_(born_1985)' },
    { name: 'Wikipedia - Arrest of Matthew Hedges', tier: 3 as TierLevel, date: '2024-01-01', url: 'https://en.wikipedia.org/wiki/Arrest_of_Matthew_Hedges' },
    { name: 'Wikipedia - Tajoura Airstrike', tier: 3 as TierLevel, date: '2024-01-01', url: 'https://en.wikipedia.org/wiki/Tajoura_migrant_center_airstrike' },
    { name: 'Wikipedia - Sudan-UAE Relations', tier: 3 as TierLevel, date: '2024-01-01', url: 'https://en.wikipedia.org/wiki/Sudan%E2%80%93United_Arab_Emirates_relations' },
    { name: 'Middle East Eye - Khashoggi/Epstein', tier: 2 as TierLevel, date: '2024-01-15', url: 'https://middleeasteye.net/news/epstein-said-uae-ruler-set-saudi-crown-prince' },
    { name: 'HRW - COP28 Criticism', tier: 2 as TierLevel, date: '2024-01-11', url: 'https://hrw.org/news/2024/01/11/uae-hosting-cop28-amid-longstanding-repression' },
    { name: 'Spectre Journal - Academic Boycott', tier: 3 as TierLevel, date: '2024-01-15', url: 'https://spectrejournal.com/for-a-cultural-and-academic-boycott' },
    { name: 'UN News - UAE94 Trial', tier: 1 as TierLevel, date: '2024-01-15', url: 'https://news.un.org/zh/story/2024/01/1125937' },
    { name: 'BBC - Princess Haya Divorce', tier: 1 as TierLevel, date: '2023-03-15', url: 'https://bbc.com/news/world-middle-east-59739563' },
    { name: 'Reuters - Princess Haya Custody', tier: 1 as TierLevel, date: '2023-03-15', url: 'https://reuters.com/world/middle-east/dubai-rulers-ex-wife-gets-custody' },
    { name: 'Gulf News - FIFA Ban', tier: 2 as TierLevel, date: '2025-10-14', url: 'https://gulfnews.com/sport/football/fifa-suspends-uae-team-official' },
    { name: 'Al Jazeera - FEI Ban', tier: 2 as TierLevel, date: '2020-09-26', url: 'https://aljazeera.com/news/2020/9/26/uae-suspended-from-equestrian' },
    { name: 'Brand Finance - Soft Power', tier: 2 as TierLevel, date: '2024-01-01', url: 'https://brandfinance.com/press-releases/the-uae-holds-on-to-top-10' },
    { name: 'BoycottUAE - Campaign', tier: 4 as TierLevel, date: '2024-01-01', url: 'https://boycottuae.org' },
    { name: 'Middle East Eye - Sudan Boycott', tier: 2 as TierLevel, date: '2024-01-15', url: 'https://middleeasteye.net/news/activists-call-uae-boycott-sudan-rsf' },
    { name: 'HSF Kramer - EU AML List', tier: 3 as TierLevel, date: '2025-01-01', url: 'https://hsfkramer.com/notes/middle-east/2025-posts/eu-removes-uae-from-high-risk' },
    { name: 'MOFA UAE - UN Security Council', tier: 0 as TierLevel, date: '2026-03-12', url: 'https://mofa.gov.ae/en/mediahub/news/2026/3/12/uae-un' },
    { name: 'UK Parliament - Written Questions', tier: 1 as TierLevel, date: '2025-02-24', url: 'https://questions-statements.parliament.uk/written-questions/detail/2025-02-24/HL5133' },
    { name: 'Oireachtas - Irish Parliament', tier: 1 as TierLevel, date: '2025-11-27', url: 'https://oireachtas.ie/en/debates/question/2025-11-27/36' },
    { name: 'European Parliament - Extradition', tier: 1 as TierLevel, date: '2025-01-01', url: 'https://europarl.europa.eu/doceo/document/E-10-2025-002658-ASW_EN' },
  ] as SourceReference[],
  recommendations: [
    'Address UN genocide findings through diplomatic channels',
    'End gold smuggling connections to RSF',
    'Release political prisoners beyond sentence',
    'Allow independent human rights monitors',
    'Restore press freedom and release journalists',
    'Compensate victims of torture and wrongful detention',
    'End involvement in Sudan conflict',
    'Address academic boycott through transparency',
  ],
  credibility: {
    tier: 1 as TierLevel,
    score: 90,
    sources: 25,
    lastVerified: '2026-04-27',
  } as CredibilityScore,
} as CrisisEvent

// ============================================================================
// COMPREHENSIVE REPUTATION METRICS
// ============================================================================

export interface ReputationMetric {
  id: string
  name: string
  value: string | number
  rank?: string
  scale?: string
  source: string
  trend?: 'improving' | 'stable' | 'worsening'
}

export interface CrisisIncident {
  id: string
  incident: string
  category: string
  severity: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW'
  spread: 'Global' | 'International' | 'Regional' | 'Western Media'
  date: string
  sentiment: number
  status: 'ongoing' | 'resolved' | 'escalating'
}

export interface MediaCoverage {
  outlet: string
  mentions: number
  sentiment: number
  type: 'Western Media' | 'Regional Media' | 'Social Media' | 'Human Rights Org' | 'Government'
}

export interface SentimentBreakdownData {
  name: string
  value: number
  color: string
}

// RSF Press Freedom Index Scores
export const pressFreedomScores = {
  overall: { score: 26.91, rank: '164/180' },
  political: { score: 17.23, rank: '166/180' },
  economic: { score: 35.05, rank: '126/180' },
  legislative: { score: 21.20, rank: '168/180' },
  social: { score: 21.76, rank: '171/180' },
}

// Freedom House Scores
export const freedomHouseScores = {
  globalFreedom: { score: 18, max: 100, rating: 'Not Free' },
  politicalRights: { score: 5, max: 40 },
  civilLiberties: { score: 13, max: 60 },
  internetFreedom: { score: 28, max: 100, rating: 'Not Free' },
  obstaclesToAccess: { score: 14, max: 25 },
  limitsOnContent: { score: 9, max: 35 },
  violationsOfUserRights: { score: 5, max: 40 },
}

// Reputation Metrics
export const reputationMetrics: ReputationMetric[] = [
  { id: 'rsf-press-freedom', name: 'RSF Press Freedom Index', value: 26.91, rank: '164/180', scale: '180 countries', source: 'RSF 2024/25', trend: 'stable' },
  { id: 'freedom-house-global', name: 'Freedom House Global Freedom', value: 18, scale: '100', source: 'Freedom House 2025', trend: 'stable' },
  { id: 'freedom-house-internet', name: 'Freedom House Internet Freedom', value: 28, scale: '100', source: 'Freedom House 2025', trend: 'stable' },
  { id: 'human-development', name: 'Human Development Index', value: 30, scale: '187 countries', source: 'UNDP 2018', trend: 'stable' },
  { id: 'per-capita-income', name: 'Per Capita Income', value: '$48,000', rank: '#6 globally', source: 'Forbes 2012', trend: 'stable' },
  { id: 'brand-finance-soft-power', name: 'Brand Finance Soft Power', value: 10, rank: '#10', source: 'Brand Finance 2025', trend: 'stable' },
]

// Sudan Gold Smuggling Data
export const sudanGoldData = {
  officialExportsToUAE: { value: 1.5, unit: 'billion USD', year: 2024 },
  smuggledOut: { value: 50, unit: 'percent' },
  uaeWorldRank: { value: '#2', unit: 'globally' },
  importedFromSudan: { value: 17, unit: 'tonnes', year: 2023 },
  investmentInSudan: { value: 7, unit: 'billion USD', year: 2008 },
}

// Iran War 2026 Statistics
export const iranWarStats = {
  ballisticMissiles24h: 165,
  cruiseMissiles24h: 2,
  drones24h: 541,
  interceptionRate: '>90%',
  influencersInDubai: 50000,
  expatsInDubai: { value: 90, unit: 'percent', of: '4M residents' },
  relocationEnquiriesBritish: { value: 420, unit: 'percent increase', vs: '5yrs prior', year: 2024 },
  detentions: 375,
}

// Political Prisoner Statistics
export const politicalPrisonerStats = {
  uae94Defendants: { value: 84, plus: true },
  lifeSentences: { value: 67, plus: true, end2025: true },
  heldBeyondSentence: { value: 51, plus: true },
  newCounterterrorismCharges: { value: 87 },
}

// Crisis Incidents from MD file
export const crisisIncidents: CrisisIncident[] = [
  { id: 'ci-1', incident: 'Sudan Genocide Complicity', category: 'Humanitarian', severity: 'CRITICAL', spread: 'Global', date: '2023-2026', sentiment: -95, status: 'ongoing' },
  { id: 'ci-2', incident: 'Iran War 2026', category: 'Military', severity: 'CRITICAL', spread: 'Global', date: 'Mar 2026', sentiment: -88, status: 'ongoing' },
  { id: 'ci-3', incident: 'UAE94 Mass Trial', category: 'Human Rights', severity: 'CRITICAL', spread: 'International', date: '2023-2025', sentiment: -92, status: 'ongoing' },
  { id: 'ci-4', incident: 'Tajoura Libya Airstrike', category: 'Military', severity: 'HIGH', spread: 'International', date: 'Jul 2019', sentiment: -85, status: 'resolved' },
  { id: 'ci-5', incident: 'Princess Latifa Abduction', category: 'Royal Family', severity: 'HIGH', spread: 'International', date: '2018-2022', sentiment: -90, status: 'escalating' },
  { id: 'ci-6', incident: 'Matthew Hedges Wrongful Detention', category: 'Human Rights', severity: 'HIGH', spread: 'International', date: '2018', sentiment: -78, status: 'resolved' },
  { id: 'ci-7', incident: 'Ali Ahmad Torture Case', category: 'Human Rights', severity: 'HIGH', spread: 'International', date: '2019', sentiment: -88, status: 'ongoing' },
  { id: 'ci-8', incident: 'FATF Grey List', category: 'Financial', severity: 'HIGH', spread: 'International', date: '2019-2024', sentiment: -65, status: 'resolved' },
  { id: 'ci-9', incident: 'FEI Equestrian Bans', category: 'Sports', severity: 'MODERATE', spread: 'International', date: '2015-2025', sentiment: -45, status: 'resolved' },
  { id: 'ci-10', incident: 'FIFA Official Ban', category: 'Sports', severity: 'MODERATE', spread: 'International', date: 'Oct 2025', sentiment: -40, status: 'ongoing' },
  { id: 'ci-11', incident: 'COP28 Greenwashing', category: 'Environmental', severity: 'MODERATE', spread: 'International', date: '2023', sentiment: -55, status: 'resolved' },
  { id: 'ci-12', incident: 'Qatar Blockade', category: 'Geopolitical', severity: 'HIGH', spread: 'Regional', date: '2017-2021', sentiment: -60, status: 'resolved' },
  { id: 'ci-13', incident: 'TAGATU3 Academic Boycott', category: 'Academic', severity: 'MODERATE', spread: 'International', date: '2024-2026', sentiment: -50, status: 'ongoing' },
  { id: 'ci-14', incident: 'Ali al-Khaja Prison Death', category: 'Human Rights', severity: 'HIGH', spread: 'International', date: 'Nov 2025', sentiment: -82, status: 'resolved' },
]

// Media Coverage Data
export const mediaCoverage: MediaCoverage[] = [
  { outlet: 'Western Media (UK/US)', mentions: 12500, sentiment: -85, type: 'Western Media' },
  { outlet: 'Human Rights Organizations', mentions: 4560, sentiment: -92, type: 'Human Rights Org' },
  { outlet: 'Social Media', mentions: 89000, sentiment: -45, type: 'Social Media' },
  { outlet: 'Regional Media', mentions: 3400, sentiment: -25, type: 'Regional Media' },
  { outlet: 'Government Channels', mentions: 2340, sentiment: +35, type: 'Government' },
  { outlet: 'Academic/Think Tanks', mentions: 1890, sentiment: -60, type: 'Western Media' },
]

// Sentiment Breakdown
export const sentimentBreakdown: SentimentBreakdownData[] = [
  { name: 'Critical Negative', value: 35, color: '#ef4444' }, // rose-500
  { name: 'Negative', value: 39, color: '#f97316' }, // orange-500
  { name: 'Neutral', value: 18, color: '#94a3b8' }, // slate-400
  { name: 'Positive', value: 8, color: '#22c55e' }, // emerald-500
]

// Key Quotes
export const reputationKeyQuotes = [
  { text: 'Your father told us to beat you until we kill you', source: 'Troops to Princess Latifa during capture', sentiment: 'VERY NEGATIVE' },
  { text: 'Really Orwellian – when you have got survivors of drone strikes being taken into custody', source: 'Radha Stirling, Detained in Dubai', sentiment: 'VERY NEGATIVE' },
  { text: 'if we find Zaghawa we will kill them all. We want to eliminate anything black from Darfur', source: 'RSF survivor quote', sentiment: 'VERY NEGATIVE' },
  { text: 'The shine has been taken off', source: 'The Guardian', sentiment: 'NEGATIVE' },
  { text: 'That peaceful image was shattered', source: 'Times of Israel', sentiment: 'NEGATIVE' },
  { text: 'Dubai carefully curated image is now colliding with reality', source: 'Haaretz', sentiment: 'NEGATIVE' },
  { text: 'manifestly lacked jurisdiction', source: 'ICJ ruling on Sudan case', sentiment: 'NEGATIVE' },
]

// Torture Methods Documented (16)
export const tortureMethods = [
  'Severe beatings',
  'Electrocution',
  'Threats of electrocution',
  'Cutting',
  'Burning',
  'Denial of medical care',
  'Forced solitary confinement',
  'Continuous bright lighting to prevent sleep',
  'Forced disappearance',
  'Incommunicado detention',
  'Stress positions',
  'Waterboarding (suspected)',
  'Sexual violence',
  'Mock executions',
  'Sensory deprivation',
  'Isolation',
]

// Reputation Threat Vectors by Severity
export const threatVectors = [
  { rank: 1, vector: 'Sudan Genocide Complicity', severity: 'CRITICAL', evidence: 'UN Fact-Finding Mission, ICJ case, gold smuggling' },
  { rank: 2, vector: 'Iran War 2026', severity: 'CRITICAL', evidence: 'Physical damage, social media arrests, 375+ detained' },
  { rank: 3, vector: 'Human Rights Repression', severity: 'CRITICAL', evidence: 'UAE94 (67+ life sentences), torture, forced disappearances' },
  { rank: 4, vector: 'Royal Family Abductions', severity: 'HIGH', evidence: 'Princess Latifa, Princess Haya, UK court findings' },
  { rank: 5, vector: 'Libya Migrant Center', severity: 'HIGH', evidence: '53+ killed, UAE suspected, war crime allegations' },
  { rank: 6, vector: 'Financial Crime', severity: 'HIGH', evidence: 'FATF grey list despite illicit arms/gold evidence' },
  { rank: 7, vector: 'Press Freedom', severity: 'HIGH', evidence: '164/180 RSF ranking, 18/100 Freedom House' },
  { rank: 8, vector: 'Qatar Blockade', severity: 'MODERATE', evidence: '4-year embargo, sovereignty violation' },
  { rank: 9, vector: 'Sports Bans', severity: 'MODERATE', evidence: 'FEI (twice), FIFA official assault' },
  { rank: 10, vector: 'COP28 Greenwashing', severity: 'MODERATE', evidence: 'Oil executive president, political prisoners' },
]

// Dashboard KPIs
export const reputationKPI = {
  overallReputationScore: 'SEVERELY DAMAGED',
  pressFreedomRank: '164/180',
  humanRightsScore: '18/100',
  activeBoycottCampaigns: '4+',
  unIcfCases: '2',
  politicalPrisoners: '67+ life sentences',
  internationalSanctions: '2 (FATF grey, EU AML - both exited)',
  sportsBans: '2 (FEI, FIFA)',
  trend: 'WORSENING',
  lastUpdated: 'Apr 2026',
}

// ============================================================================
// PAGE DATA STRUCTURE (for direct use in dashboard page)
// ============================================================================

export interface ReputationCrisisPageData {
  metrics: {
    active: number
    sentiment: number
    mentions: string
    level: string
    response: string
    mitigation: string
  }
  crisisIncidents: CrisisIncident[]
  sentimentImpact: SentimentBreakdownData[]
  mediaCoverage: MediaCoverage[]
  pressFreedomScores: typeof pressFreedomScores
  freedomHouseScores: typeof freedomHouseScores
  sudanGoldData: typeof sudanGoldData
  iranWarStats: typeof iranWarStats
  politicalPrisonerStats: typeof politicalPrisonerStats
  threatVectors: typeof threatVectors
  tortureMethods: string[]
  reputationKeyQuotes: typeof reputationKeyQuotes
  reputationKPI: typeof reputationKPI
  timeline: CrisisEvent['timeline']
  sources: SourceReference[]
}

export const reputationCrisisPageData: ReputationCrisisPageData = {
  metrics: {
    active: 10,
    sentiment: -66,
    mentions: '112.5K',
    level: 'CRITICAL',
    response: '2.4h',
    mitigation: '34%',
  },
  crisisIncidents,
  sentimentImpact: sentimentBreakdown,
  mediaCoverage,
  pressFreedomScores,
  freedomHouseScores,
  sudanGoldData,
  iranWarStats,
  politicalPrisonerStats,
  threatVectors,
  tortureMethods,
  reputationKeyQuotes,
  reputationKPI,
  timeline: reputationCrisisEventData.timeline,
  sources: reputationCrisisEventData.sources as SourceReference[],
}
