// @ts-nocheck
/**
 * International Relations & Diplomacy - Comprehensive Research Data
 *
 * Hardcoded TypeScript data extracted from:
 * C:\Users\lithvik\Sync\Projects\dossier.li\uae.dossier.li\P1\data\2-6-international-relations-results.md
 *
 * @fileOverview All content from the MD file has been converted to TypeScript data structures.
 *               No markdown loaders or content collections - all data is hardcoded.
 */

'use client'

// ============================================================================
// TYPES
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  enrichmentStatus: string
}

export interface FocusArea {
  id: number
  name: string
  priority: string
  description: string
}

export interface QueryPattern {
  id: number
  query: string
}

export interface Source {
  url: string
  tier: number
  sentiment: string
  uaeRelevance: string
  keyDataPoints: string[]
}

export interface KeyPerson {
  name: string
  role: string
  relationToUAE: string
}

export interface KeyOrganization {
  name: string
  type: string
  uaeRole: string
}

export interface DisputedTerritory {
  territory: string
  occupiedBy: string
  since: string
  uaePosition: string
}

export interface MilitaryAsset {
  asset: string
  origin: string
  status: string
  strategicValue: string
}

export interface GeographicAsset {
  location: string
  country: string
  type: string
  purpose: string
}

export interface ContestedLocation {
  location: string
  significance: string
  currentStatus: string
}

export interface DefenseAgreement {
  agreement: string
  partner: string
  year: string
  status: string
}

export interface EconomicAgreement {
  agreement: string
  partner: string
  year: string
  status: string
}

export interface OrganizationalMembership {
  organization: string
  membership: string
  since: string
}

export interface Conflict {
  name: string
  involvement: string
  uaeRole: string
  currentStatus: string
}

export interface SentimentRelationship {
  relationship: string
  sentiment: string
  trend: string
  keyDriver: string
}

export interface RelevanceRegion {
  region: string
  relevanceLevel: string
  priority: number
  currentStatus: string
}

export interface TimelineEvent {
  year: string
  date: string
  event: string
}

export interface EconomicStat {
  metric: string
  value: string
  year: string
  source: string
}

export interface EnergyStat {
  metric: string
  value: string
  year: string
  source: string
}

export interface AITechStat {
  metric: string
  value: string
  year: string
  source: string
}

export interface MilitaryStat {
  metric: string
  value: string
  year: string
  source: string
}

export interface DiplomaticStat {
  metric: string
  value: string
  year: string
  source: string
}

export interface KeyDataPoint {
  category: string
  dataPoint: string
  value: string
  source: string
}

export interface RiskFactor {
  factor: string
  description: string
}

export interface OpportunityFactor {
  factor: string
  description: string
}

export interface FutureIndicator {
  indicator: string
  current: string
  watchFor: string
}

export interface BilateralSummary {
  country: string
  relationship: string
  sentiment: string
  keyPoints: string[]
}

export interface MultilateralSummary {
  organization: string
  relationship: string
  summary: string
}

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata: ExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 15,
  pagesFetched: 28,
  enrichmentStatus: 'FULL - All URLs fetched and analyzed',
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export const focusAreas: FocusArea[] = [
  {
    id: 1,
    name: 'Bilateral Relations',
    priority: 'High',
    description: 'Priority countries: Saudi Arabia, USA, China, Israel, Iran + 100+ other nations',
  },
  {
    id: 2,
    name: 'Multilateral Relations & International Organizations',
    priority: 'High',
    description: 'UN, GCC, OPEC, BRICS, COP28, etc.',
  },
]

// ============================================================================
// QUERY PATTERNS EXECUTED
// ============================================================================

export const queryPatterns: QueryPattern[] = [
  { id: 1, query: 'UAE Saudi relations 2024 2025 2026' },
  { id: 2, query: 'UAE US relations defense military F-35 2024 2025' },
  { id: 3, query: 'UAE China trade technology G42 Huawei AI 2024 2025' },
  { id: 4, query: 'UAE Israel Abraham Accords normalization 2024 2025 2026' },
  { id: 5, query: 'UAE Iran islands Abu Musa Greater Tunb territorial dispute 2024 2025 2026' },
  { id: 6, query: 'UAE GCC Gulf Cooperation Council 2024 2025 2026' },
  { id: 7, query: 'UAE OPEC oil production quota 2024 2025 2026' },
  { id: 8, query: 'UAE BRICS membership new members 2024 2025 2026' },
  { id: 9, query: 'UAE COP28 climate conference presidency 2023 2024' },
  { id: 10, query: 'UAE United Nations Security Council term seat 2022 2023' },
  { id: 11, query: 'UAE counterterrorism intelligence cooperation 2024 2025' },
  { id: 12, query: 'UAE Horn of Africa Somalia Ethiopia Red Sea 2024 2025 2026' },
  { id: 13, query: 'UAE UK Britain relations defense trade 2024 2025' },
]

// ============================================================================
// SOURCE SUMMARY
// ============================================================================

export const sourceSummary: Source[] = [
  {
    url: 'azure-strategy.com',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Yemen rivalry timeline', 'STC offensive December 2025', 'Saudi-UAE tensions'],
  },
  {
    url: 'theconversation.com',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['STC history', '150K deaths in Yemen', 'Regional rivalry analysis'],
  },
  {
    url: 'foreignaffairs.com',
    tier: 1,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Geopolitical warning', 'Saudi-UAE feud risks', 'Balance of power'],
  },
  {
    url: 'mofa.gov.ae (Dec 30)',
    tier: 0,
    sentiment: 'Neutral',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['UAE official position', 'Rejection of Saudi accusations', 'Mukalla incident'],
  },
  {
    url: 'arabcenterdc.org',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Diverging strategies Yemen', 'Sudan conflict', 'Regional fragmentation'],
  },
  {
    url: 'jpost.com',
    tier: 1,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Regional shift analysis', 'Saudi-Israel ties', 'Abraham Accords dynamics'],
  },
  {
    url: 'ecfr.eu',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Red Sea competition', 'Somaliland tensions', 'Horn of Africa proxy war'],
  },
  {
    url: 'defensenews.com',
    tier: 3,
    sentiment: 'Neutral',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['F-35 deal frozen', 'Alternative aircraft procurement', 'Chinese trainers'],
  },
  {
    url: 'agsi.org',
    tier: 3,
    sentiment: 'Neutral',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['$23B F-35 deal', '50 F-35A aircraft', 'MQ-9B Reaper drones'],
  },
  {
    url: 'uae-embassy.org/f-35',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Official F-35 position', 'US-UAE defense cooperation'],
  },
  {
    url: 'breakingdefense.com',
    tier: 3,
    sentiment: 'Neutral',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Saudi F-35 sale', 'Trump administration', 'UAE deal frozen'],
  },
  {
    url: 'csis.org',
    tier: 2,
    sentiment: 'Mixed',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['AI strategy', 'G42 details', '$91B AI GDP target', 'MGX $100B'],
  },
  {
    url: 'yahoo finance',
    tier: 1,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['35,000 AI chips approved', 'Nvidia GB300', 'G42 licensing'],
  },
  {
    url: 'fdd.org',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Tech transfer concerns', 'G42-China links', 'US AI export risks'],
  },
  {
    url: 'mei.edu',
    tier: 2,
    sentiment: 'Mixed',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['China-US tech battle', '$82B China trade', 'Huawei 5G'],
  },
  {
    url: 'thedispatch.com',
    tier: 4,
    sentiment: 'Mixed',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['G42-China-Trump link', 'Crypto connections', 'WLF investment'],
  },
  {
    url: 'uae-embassy.org/abraham',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Accord details', 'Peace dividends', 'Trade achievements'],
  },
  {
    url: 'timesofisrael.com',
    tier: 1,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['$3.24B trade 2024', 'Abraham Accords expansion', '11% growth'],
  },
  {
    url: 'heritage.org',
    tier: 2,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Accord expansion Q4 2025', 'Trump first term legacy'],
  },
  {
    url: 'uae-embassy.org/islands',
    tier: 0,
    sentiment: 'Firm',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Legal claim details', 'ICJ position', 'Historical documentation'],
  },
  {
    url: 'responsiblestatecraft.org',
    tier: 4,
    sentiment: 'Urgent',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['April 2026 conflict', 'Strait of Hormuz', 'Island military buildup'],
  },
  {
    url: 'thenationalnews.com',
    tier: 1,
    sentiment: 'Firm',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Historical claims', 'Arab governance evidence', 'International law'],
  },
  {
    url: 'carnegieendowment.org',
    tier: 2,
    sentiment: 'Negative',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['GCC divisions', 'Yemen strategies', 'Sudan conflict'],
  },
  {
    url: 'gcc-sg.org',
    tier: 0,
    sentiment: 'Unified',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['December 2025 summit', '46th session', 'Gaza condemnation'],
  },
  {
    url: 'opec.org',
    tier: 0,
    sentiment: 'Neutral',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['300 kbd increase', 'OPEC+ compliance', 'Production quota'],
  },
  {
    url: 'spglobal.com',
    tier: 1,
    sentiment: 'Neutral',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['3.519M b/d quota', 'UAE baseline', 'OPEC+ deal'],
  },
  {
    url: 'riotimesonline.com',
    tier: 3,
    sentiment: 'Neutral',
    uaeRelevance: 'MEDIUM',
    keyDataPoints: ['BRICS membership', '10M population', '$509B GDP'],
  },
  {
    url: 'mronline.org',
    tier: 4,
    sentiment: 'Positive',
    uaeRelevance: 'MEDIUM',
    keyDataPoints: ['BRICS expansion', '36.44% global GDP', 'January 2024 join'],
  },
  {
    url: 'brics.br',
    tier: 0,
    sentiment: 'Neutral',
    uaeRelevance: 'MEDIUM',
    keyDataPoints: ['Organization details', '11 countries', 'Annual presidency'],
  },
  {
    url: 'mofa.gov.ae/cop28',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['Presidency details', '85,000 participants', '$85B+ mobilized'],
  },
  {
    url: 'cop28.com',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['UAE Consensus', 'Renewables pledge', 'Loss & Damage Fund'],
  },
  {
    url: 'uaeun.org/elected',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Council election', '2022-2023 term', 'Second time serving'],
  },
  {
    url: 'uaeun.org/commitments',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Priority areas', 'Women Peace Security', 'Climate change'],
  },
  {
    url: 'tacticsinstitute.com',
    tier: 4,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Pakistan exercises', 'Jalmood-I', 'Special forces training'],
  },
  {
    url: 'mofa.gov.ae/may17',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'CRITICAL',
    keyDataPoints: ['US-UAE $1.4T plan', '$34.4B bilateral trade', 'AI cooperation'],
  },
  {
    url: 'grc.net',
    tier: 4,
    sentiment: 'Strategic',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Horn of Africa ports', '$442M Berbera', 'Assab base'],
  },
  {
    url: 'newint.org',
    tier: 4,
    sentiment: 'Critical',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['Sudan/RSF accusations', 'Red Sea security', 'Proxy war'],
  },
  {
    url: 'aoav.org.uk',
    tier: 4,
    sentiment: 'Mixed',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['UK military presence', 'Donnelly Lines', 'BAE Systems'],
  },
  {
    url: 'mofa.gov.ae/london',
    tier: 0,
    sentiment: 'Positive',
    uaeRelevance: 'HIGH',
    keyDataPoints: ['UK trade ties', '£10.27B bilateral', '5,000+ UK companies'],
  },
]

// ============================================================================
// KEY PERSONS
// ============================================================================

export const keyPersons: KeyPerson[] = [
  { name: 'Mohammed bin Zayed Al Nahyan', role: 'UAE President', relationToUAE: 'Leader of UAE' },
  { name: 'Sheikh Abdullah bin Zayed Al Nahyan', role: 'UAE Foreign Minister', relationToUAE: 'Diplomatic leadership' },
  { name: 'Sheikh Tahnoun bin Zayed Al Nahyan', role: 'UAE National Security Advisor', relationToUAE: 'AI/G42 chairmanship' },
  { name: 'Mohammed bin Salman', role: 'Saudi Crown Prince', relationToUAE: 'Saudi leadership' },
  { name: 'Yousef Al Otaiba', role: 'UAE Ambassador to US', relationToUAE: 'Diplomatic relations' },
  { name: 'Lana Nusseibeh', role: 'UAE Permanent Representative to UN', relationToUAE: 'UN Security Council' },
  { name: 'Dr. Sultan Al Jaber', role: 'COP28 President', relationToUAE: 'Climate leadership' },
  { name: 'Peng Xiao', role: 'G42 CEO', relationToUAE: 'AI technology leadership' },
  { name: 'Aidarous al-Zubaidi', role: 'STC Leader', relationToUAE: 'Yemen conflict actor' },
]

// ============================================================================
// KEY ORGANIZATIONS
// ============================================================================

export const keyOrganizations: KeyOrganization[] = [
  { name: 'GCC', type: 'Regional Bloc', uaeRole: 'Member state' },
  { name: 'OPEC+', type: 'Energy Cartel', uaeRole: 'Member with increased quota' },
  { name: 'BRICS', type: 'Political/Diplomatic Group', uaeRole: 'Full member since 2024' },
  { name: 'UN Security Council', type: 'Global Governance', uaeRole: 'Non-permanent member 2022-2023' },
  { name: 'Southern Transitional Council', type: 'Yemeni Actor', uaeRole: 'UAE-backed' },
  { name: 'G42', type: 'AI Technology Company', uaeRole: 'Abu Dhabi-backed' },
  { name: 'MGX', type: 'Investment Vehicle', uaeRole: 'Abu Dhabi Sovereign' },
]

// ============================================================================
// DISPUTED TERRITORIES
// ============================================================================

export const disputedTerritories: DisputedTerritory[] = [
  {
    territory: 'Abu Musa',
    occupiedBy: 'Iran',
    since: 'November 30, 1971',
    uaePosition: 'Contested - seeks ICJ resolution',
  },
  {
    territory: 'Greater Tunb',
    occupiedBy: 'Iran',
    since: 'November 30, 1971',
    uaePosition: 'Contested - seeks ICJ resolution',
  },
  {
    territory: 'Lesser Tunb',
    occupiedBy: 'Iran',
    since: 'November 30, 1971',
    uaePosition: 'Contested - seeks ICJ resolution',
  },
]

// ============================================================================
// MILITARY ASSETS
// ============================================================================

export const militaryAssets: MilitaryAsset[] = [
  { asset: 'F-35A (50)', origin: 'US', status: 'Deal frozen 2021 ($23B value)', strategicValue: 'Regional superiority' },
  { asset: 'MQ-9B Reaper (18)', origin: 'US', status: 'In negotiation', strategicValue: 'Drone surveillance' },
  { asset: 'Rafale (80)', origin: 'France', status: 'Ordered 2022', strategicValue: 'Alternative to F-35' },
  { asset: 'Hongdu L-15A Falcon', origin: 'China', status: 'First batch delivered', strategicValue: 'Trainer aircraft' },
  { asset: 'F-16 Block 60', origin: 'US', status: 'In service', strategicValue: 'Multi-role fighter' },
]

// ============================================================================
// GEOGRAPHIC STRATEGIC ASSETS
// ============================================================================

export const geographicAssets: GeographicAsset[] = [
  { location: 'Assab', country: 'Eritrea', type: 'Military base', purpose: 'Yemen operations' },
  { location: 'Berbera', country: 'Somaliland', type: 'Port ($442M)', purpose: 'Maritime trade' },
  { location: 'Al Minhad', country: 'UAE', type: 'UK base (Donnelly Lines)', purpose: 'Defense cooperation' },
  { location: 'Eritrea', country: 'Eritrea', type: 'Military presence', purpose: 'Regional projection' },
]

export const contestedLocations: ContestedLocation[] = [
  {
    location: 'Strait of Hormuz',
    significance: '20% of world\'s seaborne oil/gas',
    currentStatus: 'Iran\'s de facto control (April 2026)',
  },
  {
    location: 'Abu Musa',
    significance: 'Island near strait',
    currentStatus: 'Iranian occupied since 1971',
  },
  {
    location: 'Greater Tunb',
    significance: 'Island near strait',
    currentStatus: 'Iranian occupied since 1971',
  },
  {
    location: 'Lesser Tunb',
    significance: 'Island near strait',
    currentStatus: 'Iranian occupied since 1971',
  },
  {
    location: 'Red Sea',
    significance: 'Maritime trade route',
    currentStatus: 'Competing Gulf influence',
  },
  {
    location: 'Bab al-Mandab',
    significance: 'Chokepoint',
    currentStatus: 'Regional competition',
  },
]

// ============================================================================
// POLICY FRAMEWORKS & AGREEMENTS
// ============================================================================

export const defenseAgreements: DefenseAgreement[] = [
  { agreement: 'Defense Cooperation Accord', partner: 'UK', year: '1996', status: 'Active' },
  { agreement: 'Air Base MoU', partner: 'UK', year: '2009', status: 'Active' },
  { agreement: 'F-35 Letters of Agreement', partner: 'US', year: '2021', status: 'Frozen' },
  { agreement: 'MQ-9B Reaper', partner: 'US', year: '2021', status: 'In negotiation' },
  { agreement: 'Rafale Purchase', partner: 'France', year: '2022', status: 'Ordered' },
  { agreement: 'Jalmood-I Exercise', partner: 'Pakistan', year: '2025', status: 'Conducted' },
]

export const economicAgreements: EconomicAgreement[] = [
  { agreement: 'Abraham Accords', partner: 'Israel', year: '2020', status: 'Active' },
  { agreement: 'BRICS Membership', partner: 'BRICS', year: '2024', status: 'Active' },
  { agreement: 'Partnership for the Future', partner: 'UK', year: '2021', status: 'Active' },
  { agreement: 'AI Acceleration Partnership', partner: 'US', year: '2025', status: 'Active' },
  { agreement: 'MGX-BlackRock-MSFT', partner: 'Multiple', year: '2025', status: 'Active' },
]

export const organizationalMemberships: OrganizationalMembership[] = [
  { organization: 'GCC', membership: 'Full member', since: '1981' },
  { organization: 'OPEC', membership: 'Full member', since: '1967' },
  { organization: 'UN', membership: 'Full member', since: '1971' },
  { organization: 'UN Security Council', membership: 'Non-permanent', since: '2022-2023' },
  { organization: 'BRICS', membership: 'Full member', since: '2024' },
  { organization: 'OPEC+', membership: 'Full member', since: '2016' },
]

// ============================================================================
// CONFLICT INVOLVEMENT
// ============================================================================

export const conflicts: Conflict[] = [
  {
    name: 'Yemen Conflict',
    involvement: 'Saudi-led coalition, UAE-backed STC',
    uaeRole: 'Withdrew 2019, continued STC support',
    currentStatus: 'STC dissolved January 2026',
  },
  {
    name: 'Sudan Conflict',
    involvement: 'UAE accused of supporting RSF',
    uaeRole: 'Backing RSF (alleged)',
    currentStatus: 'Saudi backing SAF; Red Sea security at risk',
  },
  {
    name: 'Libya Conflict',
    involvement: 'UAE backing Khalifa Haftar\'s LNA',
    uaeRole: 'Backing LNA',
    currentStatus: 'Mediterranean influence implications',
  },
]

// ============================================================================
// SENTIMENT ANALYSIS BY RELATIONSHIP
// ============================================================================

export const sentimentAnalysis: SentimentRelationship[] = [
  {
    relationship: 'UAE-Saudi Arabia',
    sentiment: 'Negative/Confrontational',
    trend: 'Deteriorating',
    keyDriver: 'Yemen proxy war, Sudan',
  },
  {
    relationship: 'UAE-United States',
    sentiment: 'Positive/Strong',
    trend: 'Stable',
    keyDriver: 'Defense ties, investment',
  },
  {
    relationship: 'UAE-China',
    sentiment: 'Mixed/Pragmatic',
    trend: 'Stable',
    keyDriver: 'Trade benefits, tech concerns',
  },
  {
    relationship: 'UAE-Israel',
    sentiment: 'Positive/Evolving',
    trend: 'Strained by Gaza',
    keyDriver: 'Abraham Accords success',
  },
  {
    relationship: 'UAE-Iran',
    sentiment: 'Negative/Firm',
    trend: 'Tense',
    keyDriver: 'Island occupation, Houthi threat',
  },
  {
    relationship: 'UAE-GCC',
    sentiment: 'Mixed/Cautious',
    trend: 'Stable',
    keyDriver: 'Internal divisions',
  },
  {
    relationship: 'UAE-UK',
    sentiment: 'Positive/Strong',
    trend: 'Stable',
    keyDriver: 'Defense cooperation, trade',
  },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT BY REGION/TOPIC
// ============================================================================

export const relevanceAssessment: RelevanceRegion[] = [
  { region: 'Gulf Region (GCC)', relevanceLevel: 'CRITICAL', priority: 1, currentStatus: 'Central to UAE security architecture' },
  { region: 'Saudi Arabia', relevanceLevel: 'CRITICAL', priority: 1, currentStatus: 'Primary regional rival' },
  { region: 'United States', relevanceLevel: 'CRITICAL', priority: 1, currentStatus: 'Main security guarantor' },
  { region: 'Yemen', relevanceLevel: 'CRITICAL', priority: 1, currentStatus: 'Direct military involvement' },
  { region: 'Iran', relevanceLevel: 'CRITICAL', priority: 1, currentStatus: 'Island occupation, Houthi threat' },
  { region: 'China', relevanceLevel: 'HIGH', priority: 2, currentStatus: 'Top trade partner, tech partner' },
  { region: 'Israel', relevanceLevel: 'HIGH', priority: 2, currentStatus: 'Abraham Accords partner' },
  { region: 'Red Sea/Horn of Africa', relevanceLevel: 'HIGH', priority: 2, currentStatus: 'Maritime security' },
  { region: 'UN/Oversee', relevanceLevel: 'HIGH', priority: 2, currentStatus: 'Diplomatic platform' },
  { region: 'Climate/Energy', relevanceLevel: 'HIGH', priority: 2, currentStatus: 'Economic diversification' },
  { region: 'UK', relevanceLevel: 'MEDIUM', priority: 3, currentStatus: 'Defense trade partner' },
  { region: 'BRICS', relevanceLevel: 'MEDIUM', priority: 3, currentStatus: 'Diplomatic diversification' },
  { region: 'Pakistan', relevanceLevel: 'MEDIUM', priority: 3, currentStatus: 'Counterterrorism partner' },
]

// ============================================================================
// TIMELINE OF KEY EVENTS
// ============================================================================

export const timelineEvents: TimelineEvent[] = [
  { year: '1971', date: 'November 30', event: 'Iran occupies Abu Musa, Greater Tunb, Lesser Tunb islands' },
  { year: '1971', date: 'December 2', event: 'UAE declares independence' },
  { year: '1971', date: 'December 9', event: 'UAE takes matter to UN Security Council' },
  { year: '2014', date: '', event: 'Yemen Civil War begins: Over 150,000 killed since' },
  { year: '2015', date: 'March 2015', event: 'Saudi-UAE coalition launches Yemen operations' },
  { year: '2017', date: '', event: 'Southern Transitional Council (STC) established with Emirati backing' },
  { year: '2017', date: '', event: 'Qatar blockade: Saudi-led diplomatic crisis' },
  { year: '2018', date: '', event: 'UAE loses Doraleh Port to Djibouti nationalization' },
  { year: '2018', date: '', event: 'Divergent Yemen strategies begin' },
  { year: '2019', date: 'July', event: 'UAE withdraws troops from Yemen front line' },
  { year: '2020', date: 'August 13', event: 'UAE-Israel normalization announced' },
  { year: '2020', date: 'September 2020', event: 'Abraham Accords signed' },
  { year: '2020', date: 'October 29', event: 'F-35 deal announced ($10.4B)' },
  { year: '2020', date: 'November 2020', event: 'S.J. Res. 77/78 rejected by Senate' },
  { year: '2021', date: 'January 2021', event: 'UAE finalizes F-35 letters of agreement ($23B)' },
  { year: '2021', date: '', event: 'Biden freezes F-35 sale' },
  { year: '2021', date: 'June 11', event: 'UAE elected to UN Security Council' },
  { year: '2022', date: 'January 1', event: 'UAE assumes UN Security Council seat' },
  { year: '2022', date: 'March 2022', event: 'UAE serves as UN Security Council President' },
  { year: '2022', date: 'June 2022', event: 'UAE commits to 80 Rafale aircraft from France' },
  { year: '2022', date: 'July 16', event: 'MBS-MBZ meeting in Jeddah' },
  { year: '2023', date: 'April 2023', event: 'Sudan\'s war erupts' },
  { year: '2023', date: 'November 30-December 12', event: 'COP28 hosted in Dubai' },
  { year: '2023', date: '', event: 'BRICS invites UAE at Johannesburg summit' },
  { year: '2024', date: 'January 2024', event: 'UAE officially becomes BRICS member' },
  { year: '2024', date: 'April 2024', event: 'Microsoft invests $1.5B in G42' },
  { year: '2024', date: 'June 2024', event: 'UAE gets higher OPEC quota (3.519M b/d)' },
  { year: '2024', date: 'July 2024', event: 'UAE-China joint military exercise in Xinjiang' },
  { year: '2025', date: 'March 3', event: 'OPEC+ agrees to 300 kbd UAE increase' },
  { year: '2025', date: 'May 2025', event: 'Trump allows ~500,000 Nvidia chips to UAE' },
  { year: '2025', date: 'November 2025', event: 'Trump announces Saudi F-35 sale' },
  { year: '2025', date: 'November 2025', event: 'Israel recognizes Somaliland' },
  { year: '2025', date: 'December 3', event: 'GCC 46th summit in Bahrain' },
  { year: '2025', date: 'December 30', event: 'Saudi strikes Mukalla, accuses UAE' },
  { year: '2025', date: 'December 2025', event: 'STC captures Hadhramaut and Mahra' },
  { year: '2026', date: 'January 2', event: 'Rally in Aden supporting STC' },
  { year: '2026', date: 'January 7', event: 'STC leader Aidarous al-Zubaidi flees Yemen' },
  { year: '2026', date: 'January 9', event: 'STC announces dissolution' },
  { year: '2026', date: 'January 2026', event: 'Saudi-Egyptian-Somali military partnership forms' },
  { year: '2026', date: 'April 2026', event: 'Iran\'s de facto control of Strait of Hormuz' },
]

// ============================================================================
// STATISTICS DASHBOARD
// ============================================================================

export const economicStats: EconomicStat[] = [
  { metric: 'UAE-China non-oil trade', value: '$82 billion', year: '2023', source: 'MEI' },
  { metric: 'UAE-US bilateral trade', value: '$34.4 billion', year: '2024', source: 'UAE MFA' },
  { metric: 'UAE planned US investment', value: '$1.4 trillion', year: '2025-2035', source: 'UAE MFA' },
  { metric: 'UK-UAE bilateral trade', value: '£10.27 billion', year: 'Q1 2021', source: 'UAE Embassy London' },
  { metric: 'UAE-Israel trade', value: '$3.24 billion', year: '2024', source: 'Times of Israel' },
  { metric: 'Abraham Accords initial trade', value: '$900 million', year: '2020-2021', source: 'Times of Israel' },
  { metric: 'ADNOC-US partnerships', value: '$60 billion', year: '2025', source: 'UAE MFA' },
  { metric: 'Emirates Global Aluminum Oklahoma', value: '$4 billion', year: '2025', source: 'UAE MFA' },
  { metric: 'UK companies in UAE', value: '5,000+', year: '2021', source: 'UAE Embassy London' },
]

export const energyStats: EnergyStat[] = [
  { metric: 'UAE OPEC baseline', value: '3.519 million b/d', year: '2025', source: 'S&P Global' },
  { metric: 'UAE quota increase', value: '300 kbd', year: 'Apr 2025-Sep 2026', source: 'OPEC' },
  { metric: 'UAE global oil production rank', value: '8th', year: '2024', source: 'MR Online' },
  { metric: 'UAE global gas production rank', value: '10th', year: '2024', source: 'MR Online' },
]

export const aiTechStats: AITechStat[] = [
  { metric: 'AI GDP contribution target', value: '$91 billion (AED 335B)', year: '2031', source: 'CSIS' },
  { metric: 'AI share of non-oil GDP target', value: '20%', year: '2031', source: 'CSIS' },
  { metric: 'MGX target assets', value: '$100 billion', year: '2025', source: 'CSIS' },
  { metric: 'G42/Microsoft deal', value: '$1.5 billion', year: '2024', source: 'CSIS' },
  { metric: 'AI chip approval (G42)', value: '35,000 GB300 equivalents', year: '2025', source: 'Yahoo Finance' },
  { metric: 'UAE electricity generation 2035', value: '29.6 GW', year: '2035', source: 'CSIS' },
  { metric: 'Data center construction cost', value: '$8-12 million/MW', year: '2024', source: 'CSIS' },
]

export const militaryStats: MilitaryStat[] = [
  { metric: 'F-35 deal value', value: '$23 billion', year: '2021', source: 'AGSI' },
  { metric: 'F-35 quantity', value: '50 aircraft', year: '2021', source: 'AGSI' },
  { metric: 'MQ-9B Reaper', value: '18 drones', year: '2021', source: 'AGSI' },
  { metric: 'Rafale order', value: '80 aircraft', year: '2022', source: 'Defense News' },
  { metric: 'STC killed in Yemen conflict', value: '150,000+', year: '2014-2025', source: 'The Conversation' },
  { metric: 'Yemen mines cleared (MASAM)', value: '525,000+', year: '2025', source: 'GCC Summit' },
  { metric: 'Berbera Port investment', value: '$442 million', year: '2020s', source: 'GRC' },
  { metric: 'Donnelly Lines established', value: '2024', year: '2024', source: 'AOAV' },
]

export const diplomaticStats: DiplomaticStat[] = [
  { metric: 'UN Security Council term', value: '2022-2023', year: '2022-2023', source: 'UAE UN Mission' },
  { metric: 'BRICS membership', value: 'January 2024', year: '2024', source: 'MR Online' },
  { metric: 'GCC Summit 46th', value: 'December 3, 2025', year: '2025', source: 'GCC Official' },
  { metric: 'COP28 participants', value: '85,000', year: 'Nov-Dec 2023', source: 'UAE MFA' },
  { metric: 'COP28 total mobilization', value: '$85+ billion', year: '2023', source: 'COP28' },
  { metric: 'Loss & Damage Fund', value: '$792 million', year: '2023', source: 'COP28' },
]

// ============================================================================
// KEY DATA POINTS EXTRACTED
// ============================================================================

export const keyDataPoints: KeyDataPoint[] = [
  { category: 'Saudi Relations', dataPoint: 'STC seizure date', value: 'December 2025', source: 'Arab Center DC' },
  { category: 'Saudi Relations', dataPoint: 'STC dissolution', value: 'January 9, 2026', source: 'Azure Strategy' },
  { category: 'Saudi Relations', dataPoint: 'Mukalla airstrike', value: 'December 30, 2025', source: 'UAE MFA' },
  { category: 'Saudi Relations', dataPoint: 'Casualties in Yemen', value: '150,000+', source: 'The Conversation' },
  { category: 'Defense', dataPoint: 'F-35 deal value', value: '$23 billion', source: 'AGSI' },
  { category: 'Defense', dataPoint: 'F-35 quantity', value: '50 aircraft', source: 'AGSI' },
  { category: 'Defense', dataPoint: 'MQ-9B Reaper', value: '18 drones', source: 'AGSI' },
  { category: 'Defense', dataPoint: 'Rafale order', value: '80 aircraft', source: 'Defense News' },
  { category: 'AI/Tech', dataPoint: 'G42/Microsoft deal', value: '$1.5 billion', source: 'CSIS' },
  { category: 'AI/Tech', dataPoint: 'AI chip approval', value: '35,000 GB300', source: 'Yahoo Finance' },
  { category: 'AI/Tech', dataPoint: 'AI GDP target', value: '$91 billion', source: 'CSIS' },
  { category: 'AI/Tech', dataPoint: 'MGX target', value: '$100 billion', source: 'CSIS' },
  { category: 'Abraham Accords', dataPoint: 'Trade (2024)', value: '$3.24 billion', source: 'Times of Israel' },
  { category: 'Island Dispute', dataPoint: 'Iranian occupation', value: 'November 30, 1971', source: 'UAE Embassy' },
  { category: 'OPEC', dataPoint: 'Production quota', value: '3.519 million b/d', source: 'S&P Global' },
  { category: 'OPEC', dataPoint: 'Quota increase', value: '300 kbd', source: 'OPEC' },
  { category: 'BRICS', dataPoint: 'Membership date', value: 'January 2024', source: 'MR Online' },
  { category: 'BRICS', dataPoint: 'UAE population', value: '10 million', source: 'Rio Times' },
  { category: 'BRICS', dataPoint: 'UAE GDP (nominal)', value: '$509 billion', source: 'Rio Times' },
  { category: 'COP28', dataPoint: 'Total mobilized', value: '$85+ billion', source: 'COP28' },
  { category: 'COP28', dataPoint: 'Participants', value: '85,000', source: 'UAE MFA' },
  { category: 'UN SC', dataPoint: 'Term', value: '2022-2023', source: 'UAE UN Mission' },
  { category: 'UN SC', dataPoint: 'Presidency months', value: 'March 2022, June 2023', source: 'UAE UN Mission' },
  { category: 'UK Relations', dataPoint: 'Trade (Q1 2021)', value: '£10.27 billion', source: 'UAE Embassy London' },
  { category: 'UK Relations', dataPoint: 'UK companies in UAE', value: '5,000+', source: 'UAE Embassy London' },
  { category: 'US Relations', dataPoint: 'Investment plan', value: '$1.4 trillion', source: 'UAE MFA' },
  { category: 'US Relations', dataPoint: 'Bilateral trade', value: '$34.4 billion', source: 'UAE MFA' },
  { category: 'China Relations', dataPoint: 'Non-oil trade', value: '$82 billion', source: 'MEI' },
  { category: 'Horn of Africa', dataPoint: 'Berbera Port', value: '$442 million', source: 'GRC' },
  { category: 'Horn of Africa', dataPoint: 'Eritrea base', value: 'Assab', source: 'GRC' },
]

// ============================================================================
// FUTURE OUTLOOK
// ============================================================================

export const futureIndicators: FutureIndicator[] = [
  { indicator: 'UAE-Saudi tensions', current: 'HIGH', watchFor: 'STC aftermath, Sudan' },
  { indicator: 'F-35 deal status', current: 'FROZEN', watchFor: 'Trump administration movement' },
  { indicator: 'G42-US-China balance', current: 'TENSE', watchFor: 'Tech transfer concerns' },
  { indicator: 'Iran island occupation', current: 'UNRESOLVED', watchFor: 'April 2026 conflict spread' },
  { indicator: 'GCC unity', current: 'DIVIDED', watchFor: 'Post-2025 summit developments' },
  { indicator: 'Abraham Accords expansion', current: 'STALLED', watchFor: 'Saudi normalization' },
]

export const riskFactors: RiskFactor[] = [
  { factor: 'Escalation of UAE-Saudi rivalry', description: 'Into direct confrontation' },
  { factor: 'Iranian action', description: 'On islands or Strait of Hormuz' },
  { factor: 'Sudan war spread', description: 'Affecting Red Sea security' },
  { factor: 'US-China technology decoupling', description: 'Impacting UAE' },
  { factor: 'GCC fragmentation', description: 'Weakening regional bloc' },
]

export const opportunityFactors: OpportunityFactor[] = [
  { factor: 'COP28 climate leadership', description: 'Establishing UAE as global actor' },
  { factor: 'AI/tech investment', description: 'Through MGX and G42' },
  { factor: 'BRICS membership', description: 'Diversifying diplomatic ties' },
  { factor: 'US-UAE investment', description: '$1.4 trillion strengthening economy' },
  { factor: 'Abraham Accords', description: 'Expanding regional trade' },
]

// ============================================================================
// BILATERAL RELATIONS SUMMARIES
// ============================================================================

export const bilateralSummaries: BilateralSummary[] = [
  {
    country: 'Saudi Arabia',
    relationship: 'UAE-Saudi Relations',
    sentiment: 'Negative/Confrontational',
    keyPoints: [
      'UAE-Saudi relationship transformed from close allies to open rivalry as of late 2025-early 2026',
      'Most visible conflict zone is Yemen where UAE-backed STC seized territory in December 2025',
      'Saudi military strikes against Emirati assets following STC seizure',
      'Key tensions include divergent Yemen strategies, competition for regional influence through proxy actors',
      'Energy policy (OPEC+ quotas) and alignment with different external powers add to tensions',
      'Saudi Arabia views UAE\'s assertive foreign policy as source of regional instability',
      'Two countries arming opposing sides in Sudan conflict',
      'Rivalry extends to Horn of Africa where they back different factions',
      'Economic interdependence acts as stabilizer; both remain committed to GCC unity',
    ],
  },
  {
    country: 'United States',
    relationship: 'UAE-US Relations',
    sentiment: 'Positive/Strong',
    keyPoints: [
      'US-UAE relationship remains robust across defense, trade, and technology',
      'F-35 sale remains in limbo since Biden froze it in 2021',
      'UAE pursued alternative acquisitions (French Rafale, Chinese trainers)',
      'Counterterrorism cooperation strong with UAE hosting US forces',
      '$1.4 trillion UAE investment planned in US over ten years',
      '$34.4 billion bilateral trade in 2024',
      'Technology cooperation expanding through AI Acceleration Partnership',
      'MGX investment vehicle and data center development',
      'Abraham Accords remain cornerstone of relationship',
      'Intelligence sharing on counterterrorism and Iran is active',
    ],
  },
  {
    country: 'China',
    relationship: 'UAE-China Relations',
    sentiment: 'Mixed/Pragmatic',
    keyPoints: [
      'China is UAE\'s top trading partner with non-oil trade at $82 billion in 2023',
      'Relationship spans technology (Huawei 5G, G42 AI), trade, investment, and military cooperation',
      'Joint exercises in Xinjiang (July 2024)',
      'G42-Microsoft deal illustrates UAE\'s balancing act between US and Chinese technology',
      'G42 approved for advanced AI chip imports from US in 2025',
      'Concerns persist about technology transfer to Huawei and potential Chinese military facilities',
      'UAE joined BRICS in 2024 alongside Iran, creating awkward dynamics given US ties',
    ],
  },
  {
    country: 'Israel',
    relationship: 'UAE-Israel Relations (Abraham Accords)',
    sentiment: 'Positive/Evolving',
    keyPoints: [
      'Abraham Accords signed in September 2020 have delivered substantial economic benefits',
      'Trade reaching $3.24 billion in 2024 (up 11%)',
      'Joint naval exercises in Red Sea (2021) and intelligence cooperation on Yemen',
      'Gaza war and aftermath have strained the relationship',
      'UAE taking more critical stance toward Israeli military operations',
      'Normalization with Saudi Arabia remains elusive partly due to Gaza situation',
      'UAE suspended some aspects of relationship during periods of Israeli military operations',
    ],
  },
  {
    country: 'Iran',
    relationship: 'UAE-Iran Relations',
    sentiment: 'Negative/Firm',
    keyPoints: [
      'Core dispute: Iran\'s occupation of Abu Musa, Greater Tunb, and Lesser Tunb since November 1971',
      'UAE maintains strong legal claim backed by historical documentation',
      'Pursued resolution through UN Security Council, ICJ, and direct negotiations - all rejected by Iran',
      'Islands serve as Iran\'s "unsinkable aircraft carriers" near Strait of Hormuz',
      'UAE condemned Iranian actions in GCC Supreme Council December 2025',
      'Relationship complicated by Iran\'s presence in Yemen through Houthi proxies',
    ],
  },
  {
    country: 'UK',
    relationship: 'UAE-UK Relations',
    sentiment: 'Positive/Strong',
    keyPoints: [
      'Comprehensive bilateral relationship established in 1971',
      'UAE is UK\'s third largest trading partner outside Europe (after China and USA)',
      'Bilateral trade reached £10.27 billion (AED 55bn) in Q1 2021',
      'Over 5,000 UK businesses operate in the Emirates',
      'UAE is UK\'s largest Middle Eastern trading partner and 25th largest globally',
      '1996 Defence Cooperation Accord and 2009 MoU on air base utilization form backbone of defense ties',
      'UK established permanent military facility at Al Minhad Air Base called Donnelly Lines (2024)',
      'Intelligence cooperation, anti-money laundering agreements, extradition arrangements active',
      '2021 Partnership for the Future established during Sheikh Mohamed Bin Zayed\'s UK visit',
    ],
  },
]

// ============================================================================
// MULTILATERAL RELATIONS SUMMARIES
// ============================================================================

export const multilateralSummaries: MultilateralSummary[] = [
  {
    organization: 'GCC',
    relationship: 'Gulf Cooperation Council',
    summary: 'The GCC remains structurally divided despite shared security interests. The December 2025 summit showed unity on Gaza and condemnation of Iranian island occupation, but deeper tensions over Yemen, Sudan, and external relations persist. The UAE and Saudi Arabia are at odds over foreign policy across multiple theaters. Qatar emerged from the 2017 crisis less dependent on fellow Gulf states. Oman has hosted US-Iran talks independently. Economic integration continues through railway projects, customs data exchange, and civil aviation authority.',
  },
  {
    organization: 'OPEC+',
    relationship: 'OPEC+ Alliance',
    summary: 'The UAE secured a higher production quota of 3.519 million b/d from 2025, with a 300 kbd increase phased from April 2025 through September 2026. This reflects UAE\'s growing weight in the cartel and its willingness to increase production while Saudi Arabia maintains voluntary cuts.',
  },
  {
    organization: 'BRICS',
    relationship: 'BRICS Membership',
    summary: 'UAE became a full member in January 2024 alongside Egypt, Ethiopia, and Iran. This represents a significant diversification of UAE\'s international partnerships. However, Iran\'s membership creates tensions given UAE\'s US alliance, and Saudi Arabia has not yet formally joined despite being invited.',
  },
  {
    organization: 'UN Security Council',
    relationship: 'UNSC 2022-2023',
    summary: 'UAE served on the Security Council for 2022-2023 term, the second time after 1986-1987. As a non-permanent member, UAE served as president twice (March 2022, June 2023) and championed women peace and security, climate change, counterterrorism, and technology for peace. The term ended December 31, 2023, with South Korea taking the seat.',
  },
  {
    organization: 'COP28',
    relationship: 'UAE COP28 Presidency',
    summary: 'The UAE hosted the most significant COP conference to date (November-December 2023) with 85,000 participants. The presidency delivered the "UAE Consensus" including tripling renewables, ending unabated coal approvals, achieving net-zero methane by 2030, and operationalizing the Loss and Damage fund. Financial commitments included $100 million to Loss & Damage, $30+ billion via ALTERRA fund, and over $85 billion total mobilized. The Global Stocktake confirmed the 1.5 degrees C window is closing rapidly.',
  },
]

// ============================================================================
// SOURCE TIER DISTRIBUTION
// ============================================================================

export const sourceTierDistribution = [
  { tier: 'TIER 0', description: 'Government', sources: 11, examples: 'UAE MFA, UAE UN Mission, OPEC, GCC official' },
  { tier: 'TIER 1', description: 'Mainstream', sources: 6, examples: 'Reuters, Jerusalem Post, The National' },
  { tier: 'TIER 2', description: 'Regional/Specialized', sources: 11, examples: 'CSIS, Carnegie Endowment, ECFR' },
  { tier: 'TIER 3', description: 'Secondary', sources: 5, examples: 'Defense News, AGSI, Breaking Defense' },
  { tier: 'TIER 4', description: 'Alternative', sources: 7, examples: 'New Internationalist, The Dispatch, GRC' },
]

// ============================================================================
// VERIFICATION STATUS
// ============================================================================

export const verificationStatus = {
  allQueriesExecuted: true,
  allPagesFetched: true,
  allDataExtracted: true,
  noFabricationDetected: true,
  multipleSourceCrossVerification: true,
  temporalCoverage: '1971-2026',
  verificationDetails: [
    { status: true, label: 'All queries executed', detail: '13 major query themes' },
    { status: true, label: 'All pages fetched', detail: '28 pages' },
    { status: true, label: 'All data extracted with source documentation', detail: 'Full enrichment' },
    { status: true, label: 'No fabrication detected', detail: 'All from verified sources' },
    { status: true, label: 'Multiple source cross-verification applied', detail: 'Tier 0-4 sources' },
    { status: true, label: 'Temporal coverage', detail: '1971-2026' },
  ],
}

// ============================================================================
// COP28 DETAILED OUTCOMES
// ============================================================================

export const cop28Outcomes = {
  totalMobilized: '$85+ billion',
  participants: 85000,
  president: 'His Excellency Dr. Sultan Al Jaber',
  youthChampion: 'HE Shamma Al Mazrui',
  highLevelChampion: 'HE Razan Al Mubarak',
  fourPillars: ['Energy transition', 'Climate finance', 'People/nature/lives/livelihoods', 'Full inclusivity'],
  keyDeclarations: [
    { name: 'Global Renewables and Energy Efficiency Pledge', countries: 132, goal: 'Triple renewables and double efficiency by 2030' },
    { name: 'Declaration on Climate and Health', countries: 144, funding: '$2.9 billion' },
    { name: 'Sustainable Agriculture Declaration', heads: 159, funding: '$3.2 billion' },
    { name: 'Oil & Gas Decarbonization Charter', companies: 52, coverage: '40% of global oil/gas production' },
  ],
  financialCommitments: [
    { fund: 'Loss & Damage Fund', amount: '$100 million' },
    { fund: 'ALTERRA climate fund', amount: '$30+ billion' },
    { fund: 'Green Climate Fund', amount: '$12.8 billion' },
    { fund: 'Loss and Damage (Day 1)', amount: '$792 million' },
    { fund: 'Africa Green Industrialization', amount: '$4+ billion' },
    { fund: 'Nature-based solutions', amount: '$2.7 billion' },
    { fund: 'Business & Philanthropy Forum', amount: '$7 billion' },
  ],
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const internationalRelationsData = {
  // Metadata
  executionMetadata,
  focusAreas,
  queryPatterns,

  // Entity tables
  keyPersons,
  keyOrganizations,
  disputedTerritories,
  militaryAssets,
  geographicAssets,
  contestedLocations,
  defenseAgreements,
  economicAgreements,
  organizationalMemberships,
  conflicts,

  // Relations
  bilateralSummaries,
  multilateralSummaries,

  // Sentiment & Relevance
  sentimentAnalysis,
  relevanceAssessment,

  // Statistics
  economicStats,
  energyStats,
  aiTechStats,
  militaryStats,
  diplomaticStats,
  keyDataPoints,
  cop28Outcomes,

  // Timeline
  timelineEvents,

  // Future outlook
  futureIndicators,
  riskFactors,
  opportunityFactors,

  // Sources
  sources: sourceSummary,
  sourceTierDistribution,
  verificationStatus,

  // Summary metrics
  metrics: {
    totalQueries: 15,
    totalPages: 28,
    totalKeyPersons: keyPersons.length,
    totalKeyOrganizations: keyOrganizations.length,
    totalTimelineEvents: timelineEvents.length,
    totalDataPoints: keyDataPoints.length,
    totalSources: sourceSummary.length,
    totalSourceTiers: sourceTierDistribution.length,
  },

  // Last updated
  lastUpdated: '2026-04-27',
}

export default internationalRelationsData
