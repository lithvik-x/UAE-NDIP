// @ts-nocheck
/**
 * Influencer Registry — Comprehensive Research Data
 * UAE National Digital Intelligence Platform
 * Generated: 2026-04-27 | Framework v1.0
 * Coverage: UAE (Dubai, Abu Dhabi, Northern Emirates) | 100+ Influencer Entries | 33 Data Tables
 */

'use client'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type SentimentType = 'OVERWHELMINGLY_POSITIVE' | 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE' | 'MIXED' | 'COMPLIANT' | 'CENSORED'
export type UaeRelevanceType = 'Critical' | 'High' | 'Medium-High' | 'Medium' | 'Low/Suppressed'
export type CredibilityType = 'Authoritative' | 'High' | 'Medium-High' | 'Medium' | 'Medium-Low'
export type AlertLevelType = 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED'
export type TierType = 0 | 1 | 2 | 3 | 4
export type ContentCategory =
  | 'Beauty' | 'Fashion' | 'Food' | 'Travel' | 'Tech' | 'Lifestyle'
  | 'Entertainment' | 'Luxury' | 'Royal' | 'Government' | 'Comedy'
  | 'Finance' | 'Bodybuilding' | 'Kids' | 'Music' | 'Culture'

export interface InfluencerProfile {
  id: string
  name: string
  nameAr?: string
  handle?: string
  platform: string[]
  followers: number | string
  followersExact?: number
  category: ContentCategory[]
  nationality: string
  base: string
  sentiment: SentimentType
  uaeRelevance: UaeRelevanceType
  credibility: CredibilityType
  tier: TierType
  alertLevel?: AlertLevelType
  estimatedEarnings?: string
  netWorth?: string
  business?: string
  contentFocus?: string[]
  notableClients?: string[]
  notes?: string[]
  firstActive?: string
  instagramFollowers?: number | string
  youtubeSubscribers?: number | string
  facebookFollowers?: number | string
  tiktokFollowers?: number | string
  engagementRate?: number | string
  keyFindings?: string[]
  sources?: string[]
  lastUpdated?: string
  // Royal/government specific
  title?: string
  fullName?: string
  officialAccount?: boolean
  // Micro influencer specific
  since?: string
  ambassadorships?: string[]
  // Macro influencer
  engagementNotes?: string
}

export interface AgencyProfile {
  id: string
  name: string
  handle?: string
  founded?: string
  location: string
  brandsServed?: number | string
  influencersInNetwork?: number | string
  organicViewsGenerated?: string
  notableInfluencers?: string[]
  contentPiecesProduced?: number | string
  methodology?: string
  services?: string[]
  specialization?: string
  networkSize?: number | string
  yearsExperience?: number | string
  contact?: string
  credibility: CredibilityType
  sources?: string[]
}

export interface RegulatoryFine {
  violation: string
  fineAED: string
  category: 'Critical' | 'Serious' | 'Moderate' | 'Minor'
}

export interface DissidentProfile {
  id: string
  name: string
  status: 'Imprisoned' | 'Exiled' | 'Died' | 'Deported'
  sentence?: string
  charges?: string
  arrestDate?: string
  notes: string[]
  credibility: CredibilityType
  deathDate?: string
  location?: string
}

export interface EngagementCategory {
  category: string
  engagementRate: number
  source: string
}

export interface UaeSocialStats {
  metric: string
  value: string
  confidence: string
}

export interface InfluencerFollowingMetric {
  metric: string
  value: string
  source: string
}

export interface TierFramework {
  tier: string
  followerRange: string
  typicalEngagementRate: string
  contentVolume: string
  commercialValue: string
}

export interface KeyMetric {
  metric: string
  value: string
  source: string
  credibility: CredibilityType
}

export interface TopInfluencer {
  rank: number
  name: string
  handle: string
  platform: string
  followers: string
  category: string
  nationality: string
  estimatedEarningsPost?: string
}

export interface DataTableSummary {
  tableNumber: number
  title: string
  rows: number
}

// ============================================================================
// TOP-LEVEL METRICS
// ============================================================================

export const keyMetrics: KeyMetric[] = [
  { metric: 'UAE social media users', value: '9.84 million', source: 'Multiple sources', credibility: 'High' },
  { metric: 'Social media penetration', value: '98.98% of population', source: 'Multiple sources', credibility: 'High' },
  { metric: 'Residents following influencers', value: '75%', source: 'Multiple sources', credibility: 'High' },
  { metric: 'Residents following health/fitness influencers', value: '29%', source: 'Multiple sources', credibility: 'Medium' },
  { metric: 'Influencer mentions (2021)', value: '21.7K+', source: 'Talkwalker Blog', credibility: 'Medium' },
  { metric: 'Potential reach', value: '61 billion', source: 'Talkwalker Blog', credibility: 'Medium' },
  { metric: 'Residents aged 18-40 taking influencer advice', value: '71%', source: 'Multiple sources', credibility: 'High' },
  { metric: 'More likely to buy fashion/beauty from influencers', value: '63%', source: 'Multiple sources', credibility: 'High' },
]

export const top10Influencers: TopInfluencer[] = [
  { rank: 1, name: 'Huda Kattan', handle: '@hudabeauty', platform: ['Instagram'], followers: '50.4-54.5M', category: 'Beauty', nationality: 'Iraqi-American', estimatedEarningsPost: '$18,000' },
  { rank: 2, name: 'Joelle Mardinian', handle: '@joellemardinian', platform: ['Instagram'], followers: '19.5-21.8M', category: 'Beauty/Lifestyle', nationality: 'Lebanese' },
  { rank: 3, name: 'Noor Stars', handle: '@noorstars', platform: ['Instagram/YouTube'], followers: '12.7-15.8M', category: 'Beauty/Lifestyle', nationality: 'Emirati' },
  { rank: 4, name: 'Noha Nabil', handle: '@nohastyleicon', platform: ['Instagram'], followers: '11.7-13M', category: 'Fashion/Beauty', nationality: 'Egyptian' },
  { rank: 5, name: 'Nour Arida', handle: '@nouraridaofficial', platform: ['Instagram'], followers: '10.5-11M', category: 'Fashion', nationality: 'Lebanese' },
  { rank: 6, name: 'Fazza', handle: '@faz3', platform: ['Instagram'], followers: '14.2M', category: 'Crown Prince', nationality: 'Emirati (Royal)' },
  { rank: 7, name: 'Narin Amara', handle: '@narins_beauty', platform: ['YouTube'], followers: '8.7-13.6M', category: 'Beauty/Makeup', nationality: 'Emirati' },
  { rank: 8, name: 'Karen Wazen', handle: '@karenwazen', platform: ['Instagram'], followers: '7.5-8.1M', category: 'Fashion/Lifestyle', nationality: 'Lebanese' },
  { rank: 9, name: 'Rawan Bin Hussain', handle: '@rawan', platform: ['Instagram'], followers: '6.6-7.6M', category: 'Fashion/Beauty', nationality: 'Emirati' },
  { rank: 10, name: 'Ghaith Marwan', handle: '@ghaithmarwan', platform: ['Instagram'], followers: '6.46M', category: 'Lifestyle', nationality: 'Not specified' },
]

export const sentimentSummary: { category: string; sentiment: string; notes: string }[] = [
  { category: 'Mainstream Influencers', sentiment: 'Overwhelmingly Positive', notes: 'Lifestyle, beauty, fashion content; aspirational messaging' },
  { category: 'Government/Royal Accounts', sentiment: 'Positive/Neutral', notes: 'Official narratives, national pride' },
  { category: 'Dissident Voices', sentiment: 'Negative/Censored', notes: 'Imprisoned, exiled, silenced' },
  { category: 'Licensed Content Creators', sentiment: 'Compliant', notes: 'Regulated under UAE Media Law' },
]

export const uaeRelevanceSummary: { tier: string; relevance: string; notes: string }[] = [
  { tier: 'Tier 1 Mega Influencers', relevance: 'Critical', notes: 'Huda Kattan (Iraqi-American), Joelle Mardinian (Lebanese) base operations in UAE' },
  { tier: 'Emirati Creators', relevance: 'High', notes: 'Native UAE voices, government-aligned' },
  { tier: 'Expat Influencers', relevance: 'Medium-High', notes: 'Majority of top influencers are expats based in UAE' },
  { tier: 'Dissidents', relevance: 'Low/Suppressed', notes: 'Not permitted to operate freely' },
]

// ============================================================================
// TIER CLASSIFICATION FRAMEWORK
// ============================================================================

export const tierFramework: TierFramework[] = [
  { tier: 'Tier 1 (Mega)', followerRange: '1M+', typicalEngagementRate: '1-3%', contentVolume: 'High', commercialValue: '$5,000-$50,000+ per post' },
  { tier: 'Tier 2 (Macro)', followerRange: '100K-1M', typicalEngagementRate: '3-5%', contentVolume: 'Medium-High', commercialValue: '$1,000-$10,000 per post' },
  { tier: 'Tier 3 (Micro)', followerRange: '10K-100K', typicalEngagementRate: '5-15%', contentVolume: 'Medium', commercialValue: '$100-$2,000 per post' },
  { tier: 'Nano', followerRange: '1K-10K', typicalEngagementRate: '10-20%', contentVolume: 'Low', commercialValue: '$50-$500 per post' },
]

export const engagementByCategory: EngagementCategory[] = [
  { category: 'Entertainment', engagementRate: 94, source: 'Kolsquare/IGYgrow' },
  { category: 'Food', engagementRate: 92, source: 'Kolsquare/IGYgrow' },
  { category: 'Travel', engagementRate: 91, source: 'Kolsquare/IGYgrow' },
  { category: 'Tech', engagementRate: 90, source: 'Kolsquare/IGYgrow' },
  { category: 'Lifestyle', engagementRate: 89, source: 'Kolsquare/IGYgrow' },
  { category: 'Fashion/Beauty', engagementRate: 85, source: 'Kolsquare/IGYgrow' },
]

// ============================================================================
// TIER 1 — MEGA INFLUENCERS (1M+ FOLLOWERS)
// ============================================================================

// --- 1.1 Government & Royal Family Accounts ---

export const fazzaProfile: InfluencerProfile = {
  id: 'fazza',
  name: 'Fazza',
  handle: '@faz3',
  fullName: 'Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum',
  title: 'Crown Prince of Dubai',
  platform: ['Instagram'],
  followers: '14.2M',
  followersExact: 14200000,
  category: ['Royal', 'Government'],
  contentFocus: ['Travel', 'Adventure', 'Leadership'],
  nationality: 'Emirati',
  base: 'Dubai',
  sentiment: 'POSITIVE',
  uaeRelevance: 'Critical',
  credibility: 'Authoritative',
  tier: 0,
  alertLevel: 'GREEN',
  officialAccount: true,
  notes: ['Official royal voice'],
  sources: ['Instagram'],
  lastUpdated: '2026-04-27',
}

export const abuDhabiGovernmentAccounts: InfluencerProfile[] = [
  {
    id: 'abu-dhabi-tv',
    name: 'Abu Dhabi TV channel',
    platform: ['YouTube'],
    followers: '1.41M',
    followersExact: 1410000,
    category: ['Government'],
    contentFocus: ['Government communications'],
    nationality: 'UAE',
    base: 'Abu Dhabi',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Authoritative',
    tier: 1,
    alertLevel: 'GREEN',
    officialAccount: true,
    sources: ['YouTube'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'abu-dhabi-government',
    name: 'Abu Dhabi Government',
    platform: ['Multiple'],
    followers: 'Multiple',
    category: ['Government'],
    contentFocus: ['Official announcements'],
    nationality: 'UAE',
    base: 'Abu Dhabi',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Authoritative',
    tier: 1,
    alertLevel: 'GREEN',
    officialAccount: true,
    sources: ['Government channels'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.2 Beauty/Lifestyle Mega Influencers ---

export const beautyLifestyleMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'huda-kattan',
    name: 'Huda Kattan',
    handle: '@hudabeauty',
    fullName: 'Huda Kattan',
    platform: ['Instagram', 'YouTube', 'Facebook'],
    instagramFollowers: '50.4-54.5M',
    youtubeSubscribers: 'Not specified',
    facebookFollowers: '7.9M',
    followersExact: 54500000,
    category: ['Beauty', 'Lifestyle'],
    nationality: 'Iraqi-American',
    base: 'Dubai, UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 0,
    alertLevel: 'GREEN',
    estimatedEarnings: '$18,000/sponsored post',
    netWorth: '$550M (fortune)',
    business: 'Huda Beauty (beauty empire)',
    firstActive: '~2010',
    notes: ['Operates from Dubai', 'Verified entrepreneur'],
    keyFindings: ['Founder of Huda Beauty', '53+ million Instagram followers', 'Most-followed beauty influencer in Middle East', 'Dubai-based beauty entrepreneur'],
    sources: ['Instagram', 'Huda Beauty official'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'joelle-mardinian',
    name: 'Joelle Mardinian',
    handle: '@joellemardinian',
    fullName: 'Joelle Mardinian',
    platform: ['Instagram'],
    instagramFollowers: '19.5-21.8M',
    followersExact: 21800000,
    category: ['Beauty', 'Lifestyle'],
    nationality: 'Lebanese',
    base: 'Dubai, UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Based in UAE'],
    keyFindings: ['Beauty and lifestyle influencer', '19.5-21.8M Instagram followers', 'JM Beauty Clinic founder'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'noor-stars',
    name: 'Noor Stars',
    handle: '@noorstars',
    fullName: 'Noor Stars',
    platform: ['Instagram', 'YouTube'],
    instagramFollowers: '12.7-15.8M',
    youtubeSubscribers: 'Not specified',
    followersExact: 15800000,
    category: ['Beauty', 'Lifestyle'],
    nationality: 'Emirati',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Emirati creator'],
    keyFindings: ['Beauty and lifestyle influencer', 'Emirati creator with 12.7-15.8M followers'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'narin-amara',
    name: 'Narin Amara',
    handle: '@narins_beauty',
    fullName: 'Narin Amara',
    platform: ['YouTube'],
    youtubeSubscribers: '8.7-13.6M',
    followersExact: 13600000,
    category: ['Beauty'],
    nationality: 'Emirati',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Emirati creator'],
    keyFindings: ['Beauty and makeup YouTuber', '8.7-13.6M YouTube subscribers', 'Emirati creator'],
    sources: ['YouTube'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.3 Fashion Mega Influencers ---

export const fashionMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'noha-nabil',
    name: 'Noha Nabil',
    handle: '@nohastyleicon',
    fullName: 'Noha Nabil',
    platform: ['Instagram'],
    instagramFollowers: '11.7-13M',
    followersExact: 13000000,
    category: ['Fashion', 'Beauty'],
    nationality: 'Egyptian',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Active in UAE market'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'nour-arida',
    name: 'Nour Arida',
    handle: '@nouraridaofficial',
    fullName: 'Nour Arida',
    platform: ['Instagram'],
    instagramFollowers: '10.5-11M',
    followersExact: 11000000,
    category: ['Fashion'],
    nationality: 'Lebanese',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Active in UAE market'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'karen-wazen',
    name: 'Karen Wazen',
    handle: '@karenwazen',
    fullName: 'Karen Wazen',
    platform: ['Instagram'],
    instagramFollowers: '7.5-8.1M',
    followersExact: 8100000,
    category: ['Fashion', 'Lifestyle'],
    nationality: 'Lebanese',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Active in UAE market'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'rawan-bin-hussain',
    name: 'Rawan Bin Hussain',
    handle: '@rawan',
    fullName: 'Rawan Bin Hussain',
    platform: ['Instagram'],
    instagramFollowers: '6.6-7.6M',
    followersExact: 7600000,
    category: ['Fashion', 'Beauty'],
    nationality: 'Emirati',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Emirati creator'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.4 Comedy/Entertainment Mega Influencers ---

export const comedyEntertainmentMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'abdu-rozik',
    name: 'Abdu Rozik',
    handle: '@abdurozik',
    fullName: 'Abdu Rozik',
    platform: ['Instagram'],
    instagramFollowers: '8.35M',
    followersExact: 8350000,
    category: ['Entertainment'],
    contentFocus: ['Family', 'Lifestyle', 'Entertainment'],
    nationality: 'Not specified',
    base: 'Dubai, UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'ahmed-al-khafaji',
    name: 'Ahmed Al Khafaji',
    platform: ['Instagram'],
    instagramFollowers: '9.2M',
    followersExact: 9200000,
    category: ['Comedy'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'wessam-qutob',
    name: 'Wessam Qutob',
    platform: ['Instagram'],
    instagramFollowers: '4.58M',
    followersExact: 4580000,
    category: ['Lifestyle'],
    contentFocus: ['Inspiration', 'Tech'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.5 Food Mega Influencers ---

export const foodMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'the-food-ranger',
    name: 'The Food Ranger (Carlito Bono)',
    handle: '@thefoodranger',
    fullName: 'Carlito Bono',
    platform: ['Instagram', 'YouTube'],
    instagramFollowers: '1.07M',
    youtubeSubscribers: '5.74M',
    followersExact: 5740000,
    category: ['Food'],
    contentFocus: ['Food', 'Travel', 'Environment'],
    nationality: 'Not specified',
    base: 'UAE (Dubai)',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Based in Dubai', 'Global food exploration, environmental focus'],
    sources: ['Instagram', 'YouTube'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'mr-taster',
    name: 'Mr Taster',
    handle: '@mrtaster',
    platform: ['Instagram', 'TikTok', 'Facebook', 'YouTube'],
    instagramFollowers: '2M+',
    tiktokFollowers: '718K',
    facebookFollowers: '911K',
    youtubeSubscribers: '179K',
    followersExact: 2000000,
    category: ['Food'],
    contentFocus: ['Food', 'Restaurant Reviews'],
    nationality: 'Not specified',
    base: 'Dubai, UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notableClients: ['Armani', 'Sheraton', 'Address Hotels'],
    notes: ['Dubai food blogger'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.6 Tech Mega Influencers ---

export const techMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'rawaa-al-jallad',
    name: 'Rawaa Al Jallad',
    handle: '@rawaa.aljallad',
    platform: ['Instagram'],
    instagramFollowers: '2.9-3.17M',
    followersExact: 3170000,
    category: ['Tech'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Arabic-language tech content'],
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'ahmed-alnasheet',
    name: 'Ahmed ALNasheet',
    handle: '@nasheet',
    fullName: 'Ahmed ALNasheet',
    platform: ['Instagram'],
    instagramFollowers: '2.06M',
    followersExact: 2060000,
    category: ['Tech'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'NEUTRAL',
    uaeRelevance: 'Medium-High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram'],
    lastUpdated: '2026-04-27',
  },
]

// --- 1.7 Luxury/Lifestyle Mega Influencers ---

export const luxuryLifestyleMegaInfluencers: InfluencerProfile[] = [
  {
    id: 'mo-vlogs',
    name: 'Mohamed Beiraghdary (Mo Vlogs)',
    handle: '@movlogs',
    fullName: 'Mohamed Beiraghdary',
    platform: ['Not specified'],
    category: ['Luxury'],
    contentFocus: ['Luxury Lifestyle', 'Exotic Destinations'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium',
    tier: 1,
    alertLevel: 'GREEN',
    sources: [],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'money-kicks',
    name: 'Rashed Belhasa (Money Kicks)',
    handle: 'Money Kicks',
    fullName: 'Rashed Belhasa',
    category: ['Luxury'],
    contentFocus: ['Luxury', 'Shoes (Billionaire\'s son)'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Son of billionaire'],
    sources: [],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'supercar-blondie',
    name: 'Supercar Blondie (Alexandra Mary Hirschi)',
    handle: 'Supercar Blondie',
    fullName: 'Alexandra Mary Hirschi',
    platform: ['Not specified'],
    category: ['Luxury'],
    contentFocus: ['Luxury Vehicles'],
    engagementRate: 3.6,
    nationality: 'Not specified',
    base: 'Dubai, UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'Critical',
    credibility: 'High',
    tier: 1,
    alertLevel: 'GREEN',
    notes: ['Based in Dubai'],
    sources: [],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'ghaith-marwan',
    name: 'Ghaith Marwan',
    handle: '@ghaithmarwan',
    fullName: 'Ghaith Marwan',
    platform: ['Instagram', 'YouTube'],
    instagramFollowers: '6.46M',
    youtubeSubscribers: '5.92M',
    followersExact: 6460000,
    category: ['Lifestyle'],
    contentFocus: ['Inspiration', 'Health', 'Culture', 'Family'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram', 'YouTube'],
    lastUpdated: '2026-04-27',
  },
  {
    id: 'khalid-al-ameri',
    name: 'Khalid Al Ameri',
    platform: ['Instagram', 'Facebook'],
    instagramFollowers: '2.7M',
    facebookFollowers: '8.2M',
    followersExact: 8200000,
    category: ['Lifestyle'],
    contentFocus: ['Inspiration', 'Humor', 'Family'],
    nationality: 'Not specified',
    base: 'UAE',
    sentiment: 'POSITIVE',
    uaeRelevance: 'High',
    credibility: 'Medium-High',
    tier: 1,
    alertLevel: 'GREEN',
    sources: ['Instagram', 'Facebook'],
    lastUpdated: '2026-04-27',
  },
]

// ============================================================================
// TIER 2 — MACRO INFLUENCERS (100K-1M)
// ============================================================================

export const dubaiMacroInfluencers: InfluencerProfile[] = [
  { id: 'mounir', name: 'Mounir', platform: ['Instagram'], instagramFollowers: '8M', followersExact: 8000000, category: ['Beauty', 'Fashion'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'amr-maskoun', name: 'Amr Maskoun', platform: ['Instagram'], instagramFollowers: '5.14M', followersExact: 5140000, category: ['Travel', 'Beauty', 'Architecture'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'saba-shamaa', name: 'Saba Shamaa', platform: ['Instagram'], instagramFollowers: '3.46M', followersExact: 3460000, category: ['Culture', 'Fashion', 'Photography'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'taim-al-falasi', name: 'Taim Al Falasi', platform: ['Instagram'], instagramFollowers: '4.7M', followersExact: 4700000, category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Dubai restaurateur'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'haya-kaabar', name: 'Haya Kaabar', platform: ['Instagram'], category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'mohamed-azharudeen-peediyekkal', name: 'Mohamed Azharudeen Peediyekkal', platform: ['Instagram'], category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'reza-kiani', name: 'Reza Kiani', platform: ['Instagram'], category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'lavina-israni', name: 'Lavina Israni', platform: ['Instagram'], instagramFollowers: '123K+', followersExact: 123000, category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

export const abuDhabiMacroInfluencers: InfluencerProfile[] = [
  { id: 'reema-sarhan', name: 'Reema Sarhan', platform: ['TikTok'], tiktokFollowers: '4.1M', followersExact: 4100000, category: ['Lifestyle', 'Travel', 'Health'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['TikTok'], lastUpdated: '2026-04-27' },
  { id: 'sewar-massa', name: 'Sewar & Massa', platform: ['YouTube'], youtubeSubscribers: '7M+', followersExact: 7000000, category: ['Entertainment', 'Education'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'sarah-mohammed', name: 'Sarah Mohammed', platform: ['Instagram'], category: ['Beauty'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'shoug-mansour', name: 'Shoug Mansour', platform: ['Not specified'], category: ['Beauty'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: [], lastUpdated: '2026-04-27' },
  { id: 'ola-mathbout', name: 'Ola Mathbout', platform: ['Instagram'], category: [], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'noor-odeh', name: 'Noor Odeh', platform: ['Not specified'], category: [], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: [], lastUpdated: '2026-04-27' },
  { id: 'mohamed-attia-coach-bahrawi', name: 'Mohamed Attia/Coach Bahrawi', platform: ['Not specified'], category: ['Bodybuilding'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', notes: ['8-time UAE champion'], sources: [], lastUpdated: '2026-04-27' },
  { id: 'nasser-eats', name: 'Nasser Eats', platform: ['Not specified'], category: ['Food'], nationality: 'Not specified', base: 'Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: [], lastUpdated: '2026-04-27' },
  { id: 'hamed-ruaab', name: 'Hamed Ruaab', handle: '@hamed_ruaab', platform: ['Instagram'], instagramFollowers: '190K', followersExact: 190000, category: ['Finance'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 2, alertLevel: 'GREEN', notes: ['Licensed financial influencer'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

export const techMacroInfluencers: InfluencerProfile[] = [
  { id: 'samratumaitavuki', name: '@samratumaitavuki', platform: ['Instagram'], instagramFollowers: '1.2M', followersExact: 1200000, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'farahelkordy', name: '@farahelkordy_', platform: ['Instagram'], instagramFollowers: '1.1M', followersExact: 1100000, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'shadi-dawi', name: '@shadi_dawi', platform: ['Instagram'], instagramFollowers: '941.9K', followersExact: 941900, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'chatgptmastery', name: '@chatgptmastery', platform: ['Instagram'], instagramFollowers: '897.6K', followersExact: 897600, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'obayda-ak', name: '@obayda_ak', platform: ['Instagram'], instagramFollowers: '503.8K', followersExact: 503800, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'honorarabia', name: '@honorarabia', platform: ['Instagram'], instagramFollowers: '459.7K', followersExact: 459700, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'amrosza', name: '@amrosza', platform: ['Instagram'], instagramFollowers: '417.9K', followersExact: 417900, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'newslabmedia', name: '@newslabmedia', platform: ['Instagram'], instagramFollowers: '369.7K', followersExact: 369700, category: ['Tech'], nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'zz0hb', name: '@zz0hb', platform: ['Instagram'], instagramFollowers: '102K', followersExact: 102000, category: ['Tech'], engagementRate: 20.69, nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'electronhadi', name: '@electronhadi', platform: ['Instagram'], instagramFollowers: '110.5K', followersExact: 110500, category: ['Tech'], engagementRate: 17.19, nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'uae-tales', name: '@uae_tales', platform: ['Instagram'], instagramFollowers: '17.5K', followersExact: 17500, category: ['Tech'], engagementRate: 8.57, nationality: 'Not specified', base: 'UAE', sentiment: 'NEUTRAL', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 3, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

// ============================================================================
// TIER 3 — MICRO INFLUENCERS (10K-100K)
// ============================================================================

export const emiratiFashionMicroInfluencers: InfluencerProfile[] = [
  { id: 'waad-al-hammadi', name: 'Waad Al Hammadi', handle: '@waadalhammadi', platform: ['Instagram'], instagramFollowers: '41K+', followersExact: 41000, category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Minimalist style', 'Co-founded Gabi Dubai'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'wdeema-al-mheiri', name: 'Wdeema Al Mheiri', handle: '@wdeemajay', platform: ['Instagram'], instagramFollowers: '66K', followersExact: 66000, category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Co-founded The Beauty Society'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'manaal-al-hammadi', name: 'Manaal Al Hammadi', handle: '@manaalalhammadi', platform: ['Instagram'], category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', since: '2006', ambassadorships: ['Fendi', 'Louboutin'], notes: ['Eponymous label'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'rawdha-thani', name: 'Rawdha Thani', handle: '@rawdhast', platform: ['Instagram'], instagramFollowers: '14K', followersExact: 14000, category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Creative director, Illi Studio'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'jawaher-al-suwaidi', name: 'Jawaher Al Suwaidi', handle: '@jawahralsuwaidi', platform: ['Instagram'], category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Modern modest wear'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'the-bougie-gal', name: 'The Bougie Gal', handle: '@thebougiegal', platform: ['Instagram'], category: ['Fashion'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Luxury fashion'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'latifa-al-shamsi', name: 'Latifa Al Shamsi', handle: '@latifalshamsi', platform: ['Instagram'], category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', since: '2010', notes: ['First Emirati fashion blogger'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

export const foodMicroInfluencers: InfluencerProfile[] = [
  { id: 'feed-kiani', name: 'Feed Kiani (Emirati)', handle: '@feedkiani', platform: ['Multi-platform'], category: ['Food'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Hidden gems specialist'], sources: ['Instagram', 'YouTube', 'Facebook'], lastUpdated: '2026-04-27' },
  { id: 'foodiva', name: 'Foodiva (Samantha Wood)', handle: '@foodiva', platform: ['Instagram'], category: ['Food'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Award-winning food critic', 'Guild of Food Writers member'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

// ============================================================================
// CATEGORY-SPECIFIC INFLUENCERS
// ============================================================================

export const beautyCosmeticsInfluencers: InfluencerProfile[] = [
  { id: 'huda-kattan-cat', name: 'Huda Kattan', handle: '@hudabeauty', platform: ['Instagram'], instagramFollowers: '50.4-54.5M', followersExact: 54500000, category: ['Beauty'], nationality: 'Iraqi-American', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 0, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'joelle-mardinian-cat', name: 'Joelle Mardinian', handle: '@joellemardinian', platform: ['Instagram'], instagramFollowers: '19.5-21.8M', followersExact: 21800000, category: ['Beauty'], nationality: 'Lebanese', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'narin-amara-cat', name: 'Narin Amara', handle: '@narins_beauty', platform: ['YouTube'], youtubeSubscribers: '8.7-13.6M', followersExact: 13600000, category: ['Beauty'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'noor-stars-cat', name: 'Noor Stars', handle: '@noorstars', platform: ['Instagram', 'YouTube'], instagramFollowers: '12.7-15.8M', followersExact: 15800000, category: ['Beauty'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram', 'YouTube'], lastUpdated: '2026-04-27' },
  { id: 'noha-nabil-cat', name: 'Noha Nabil', handle: '@nohastyleicon', platform: ['Instagram'], instagramFollowers: '11.7-13M', followersExact: 13000000, category: ['Beauty'], nationality: 'Egyptian', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'mounir-cat', name: 'Mounir', platform: ['Instagram'], instagramFollowers: '8M', followersExact: 8000000, category: ['Beauty'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'sarah-mohammed-cat', name: 'Sarah Mohammed', platform: ['Instagram'], category: ['Beauty'], nationality: 'Not specified', base: 'Dubai/Abu Dhabi', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'shoug-mansour-cat', name: 'Shoug Mansour', platform: ['Not specified'], category: ['Beauty'], nationality: 'Not specified', base: 'Not specified', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'Medium', tier: 2, alertLevel: 'GREEN', sources: [], lastUpdated: '2026-04-27' },
]

export const travelTourismInfluencers: InfluencerProfile[] = [
  { id: 'nael-abu-alteen', name: 'Na\'el Abu Alteen', handle: '@nael_abu_alteen', platform: ['Instagram'], category: ['Travel'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Former engineer, global traveler'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'max-of-arabia', name: 'Max of Arabia', handle: '@maxofarabian', platform: ['Instagram'], category: ['Travel'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Cultural advocate, humanitarian supporter'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'dubai-travel-blog', name: 'Dubai Travel Blog', handle: '@dubaitravelblog', platform: ['Instagram'], category: ['Travel'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['NMC-licensed, detailed reviews'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'fazza-royal', name: 'Fazza', handle: '@faz3', platform: ['Instagram'], instagramFollowers: '14.2M', followersExact: 14200000, category: ['Travel', 'Government', 'Royal'], nationality: 'Emirati', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'Authoritative', tier: 0, alertLevel: 'GREEN', officialAccount: true, sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'mo-vlogs-cat', name: 'Mohamed Beiraghdary (Mo Vlogs)', handle: '@movlogs', platform: ['Not specified'], category: ['Travel', 'Luxury'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'Medium', tier: 1, alertLevel: 'GREEN', notes: ['Luxury lifestyle, exotic destinations'], sources: [], lastUpdated: '2026-04-27' },
  { id: 'joe-hattab', name: 'Joe Hattab', platform: ['YouTube'], youtubeSubscribers: 'Not specified', category: ['Travel'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 2, alertLevel: 'GREEN', notes: ['Travel, documentary'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
]

export const financialInfluencers: InfluencerProfile[] = [
  { id: 'hamed-ruaab-fin', name: 'Hamed Ruaab', handle: '@hamed_ruaab', platform: ['Instagram'], instagramFollowers: '190K', followersExact: 190000, category: ['Finance'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 2, alertLevel: 'GREEN', notes: ['Licensed financial influencer'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

export const youtubeTopUaeCreators: InfluencerProfile[] = [
  { id: 'shfa-yt', name: 'Shfa', platform: ['YouTube'], category: ['Kids'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Kids, entertainment'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'rawan-alshikh-yt', name: 'Rawan Alshikh', platform: ['YouTube'], category: ['Lifestyle'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Top 20'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'umm-saif-yt', name: 'Umm Saif (ام سيف)', platform: ['YouTube'], category: ['Lifestyle'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Top 20'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'khalid-al-ameri-yt', name: 'Khalid Al Ameri', platform: ['YouTube'], category: ['Lifestyle'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Top 20', 'Inspiration'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'noor-stars-yt', name: 'Noor Stars', platform: ['YouTube'], category: ['Beauty', 'Lifestyle'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Top 20'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'joe-hattab-yt', name: 'Joe Hattab', platform: ['YouTube'], category: ['Travel'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Travel, documentary'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'the-food-ranger-yt', name: 'The Food Ranger', platform: ['YouTube'], youtubeSubscribers: '5.74M', followersExact: 5740000, category: ['Food'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Food, travel'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'bessan-ismail-yt', name: 'Bessan Ismail', platform: ['YouTube'], category: ['Music'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'High', tier: 2, alertLevel: 'GREEN', notes: ['Growing'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'supercar-blondie-yt', name: 'Supercar Blondie (Alexandra Mary Hirschi)', platform: ['YouTube'], category: ['Luxury'], nationality: 'Not specified', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Luxury vehicles'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'hussain-al-jasmi-yt', name: 'Hussain Al Jasmi', platform: ['YouTube'], category: ['Music'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['Top'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'huda-beauty-yt', name: 'Huda Beauty (Huda Kattan)', platform: ['YouTube'], category: ['Beauty'], nationality: 'Iraqi-American', base: 'Dubai', sentiment: 'POSITIVE', uaeRelevance: 'Critical', credibility: 'High', tier: 0, alertLevel: 'GREEN', sources: ['YouTube'], lastUpdated: '2026-04-27' },
]

export const kidsContentYoutube: InfluencerProfile[] = [
  { id: 'letsgomartin', name: 'LetsgoMartin Nursery Rhymes', platform: ['YouTube'], category: ['Kids'], engagementRate: 94, nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['45.9L views'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'marah-tv', name: 'Marah TV', platform: ['YouTube'], category: ['Kids'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['22 videos/month', 'High frequency'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
  { id: 'shfa-yt-kids', name: 'Shfa', platform: ['YouTube'], category: ['Kids'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 1, alertLevel: 'GREEN', notes: ['10.6M views'], sources: ['YouTube'], lastUpdated: '2026-04-27' },
]

// ============================================================================
// EMIRATI CONTENT CREATORS
// ============================================================================

export const emiratiFashionCreators: InfluencerProfile[] = [
  { id: 'waad-al-hammadi-em', name: 'Waad Al Hammadi', handle: '@waadalhammadi', platform: ['Instagram'], instagramFollowers: '41K+', followersExact: 41000, category: ['Fashion'], since: 'Not specified', nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Minimalist style, co-founded Gabi Dubai'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'nouf-altamimi', name: 'Nouf AlTamimi', handle: '@noufaltamiimi', platform: ['Instagram'], category: ['Fashion'], since: '2016', nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Founder of Three Eleven and Season'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'latifa-al-shamsi-em', name: 'Latifa Al Shamsi', handle: '@latifalshamsi', platform: ['Instagram'], category: ['Fashion'], since: '2010', nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['First-ever Emirati fashion blogger'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'jawaher-al-suwaidi-em', name: 'Jawaher Al Suwaidi', handle: '@jawahralsuwaidi', platform: ['Instagram'], category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Modern modest wear'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'wdeema-al-mheiri-em', name: 'Wdeema Al Mheiri', handle: '@wdeemajay', platform: ['Instagram'], instagramFollowers: '66K', followersExact: 66000, category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Co-founded The Beauty Society'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'manaal-al-hammadi-em', name: 'Manaal Al Hammadi', handle: '@manaalalhammadi', platform: ['Instagram'], category: ['Fashion'], since: '2006', nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', ambassadorships: ['Fendi', 'Louboutin'], notes: ['Eponymous label'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'the-bougie-gal-em', name: 'The Bougie Gal', handle: '@thebougiegal', platform: ['Instagram'], category: ['Fashion'], nationality: 'Not specified', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Luxury fashion'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
  { id: 'rawdha-thani-em', name: 'Rawdha Thani', handle: '@rawdhast', platform: ['Instagram'], instagramFollowers: '14K', followersExact: 14000, category: ['Fashion'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['Creative director, Illi Studio'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

export const emiratiBodybuildingFitness: InfluencerProfile[] = [
  { id: 'mohamed-attia-coach-bahrawi-em', name: 'Mohamed Attia/Coach Bahrawi', platform: ['Not specified'], category: ['Bodybuilding'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'Medium-High', credibility: 'High', tier: 3, alertLevel: 'GREEN', notes: ['8-time UAE bodybuilding champion'], sources: [], lastUpdated: '2026-04-27' },
]

export const emiratiFinancialInfluencer: InfluencerProfile[] = [
  { id: 'hamed-ruaab-em', name: 'Hamed Ruaab', handle: '@hamed_ruaab', platform: ['Instagram'], instagramFollowers: '190K', followersExact: 190000, category: ['Finance'], nationality: 'Emirati', base: 'UAE', sentiment: 'POSITIVE', uaeRelevance: 'High', credibility: 'High', tier: 2, alertLevel: 'GREEN', notes: ['Licensed financial influencer'], sources: ['Instagram'], lastUpdated: '2026-04-27' },
]

// ============================================================================
// INFLUENCER MARKETING AGENCIES
// ============================================================================

export const influencerAgencies: AgencyProfile[] = [
  {
    id: 'plug-media',
    name: 'Plug Media',
    handle: '@plug.ae',
    founded: '~10+ years ago',
    location: 'Dubai, UAE',
    brandsServed: '300+',
    influencersInNetwork: '10,000+',
    organicViewsGenerated: '1B+',
    notableInfluencers: ['Haneen Al Saify', 'Karolina Agata Sankiewicz'],
    contact: '+971 55 206 8040',
    credibility: 'High',
    sources: ['Plug Media website'],
  },
  {
    id: 'imfluence',
    name: 'Imfluence',
    handle: '@imfluence.ae',
    location: 'Dubai, Abu Dhabi, Riyadh (regional)',
    influencersInNetwork: '500+',
    organicViewsGenerated: '500M+',
    contentPiecesProduced: '1,000+',
    methodology: 'Proprietary "TheImfluenceWay™"',
    credibility: 'High',
    sources: ['Imfluence website'],
  },
  {
    id: 'one-hub-uae',
    name: 'One Hub UAE',
    handle: '@onehub.ae',
    location: 'UAE',
    services: ['Brand-influencer matching', 'Campaign management'],
    specialization: 'Leading influencer marketing agency',
    credibility: 'Medium-High',
    sources: ['One Hub website'],
  },
  {
    id: 'ykone',
    name: 'YKONE',
    location: 'Dubai (Global)',
    specialization: '#1 influencer marketing agency in Dubai',
    networkSize: 'Global',
    credibility: 'High',
    sources: ['YKONE website'],
  },
  {
    id: 'arab-influencer-agency',
    name: 'Arab Influencer Agency',
    location: 'UAE',
    yearsExperience: 15,
    specialization: 'Pioneer of influencer marketing',
    credibility: 'High',
    sources: [],
  },
  {
    id: 'amra-elma',
    name: 'Amra & Elma',
    location: 'UAE',
    credibility: 'Medium',
    sources: [],
  },
  {
    id: 'bounty-la',
    name: 'Bounty LA',
    location: 'UAE',
    credibility: 'Medium',
    sources: [],
  },
]

export const agencyComparison: { agency: string; yearsExperience: string; networkSize: string; notableClients: string; specialization: string }[] = [
  { agency: 'Plug Media', yearsExperience: '10+', networkSize: '10,000+', notableClients: '300+ brands', specialization: 'Full-service' },
  { agency: 'Imfluence', yearsExperience: 'Not specified', networkSize: '500+', notableClients: 'Not specified', specialization: 'Regional (UAE/Saudi)' },
  { agency: 'YKONE', yearsExperience: 'Not specified', networkSize: 'Global', notableClients: 'Not specified', specialization: 'Global reach' },
  { agency: 'Arab Influencer Agency', yearsExperience: '15', networkSize: 'Not specified', notableClients: 'Not specified', specialization: 'Pioneer' },
]

export const industryStatistics: { metric: string; value: string; source: string }[] = [
  { metric: 'Influencer marketing agencies in UAE', value: '300+', source: 'Multiple sources' },
  { metric: 'Plug Media network', value: '10,000+ influencers', source: 'Plug Media' },
  { metric: 'Imfluence engaged', value: '500+ influencers', source: 'Imfluence' },
]

// ============================================================================
// REGULATORY ENVIRONMENT
// ============================================================================

export const uaeMediaLaw = {
  lawNumber: 'Federal Law No. 55 of 2023',
  effectiveDate: '2025',
  enforcingBody: 'UAE Media Council',
  advertiserPermitDeadline: 'January 31, 2026',
  permitCost: 'Free for 3 years',
}

export const eligibilityRequirements: { requirement: string; details: string }[] = [
  { requirement: 'Minimum Age', details: '18 years old' },
  { requirement: 'Citizenship', details: 'UAE citizen OR resident' },
  { requirement: 'Business Status', details: 'Trade licence required' },
]

export const regulatoryFines: RegulatoryFine[] = [
  { violation: 'Serious content breaches (religious offences, inciting violence)', fineAED: 'Up to 1,000,000', category: 'Critical' },
  { violation: 'Content inciting crimes', fineAED: 'Up to 150,000', category: 'Serious' },
  { violation: 'Disrespecting national symbols', fineAED: '50,000-500,000', category: 'Serious' },
  { violation: 'Undermining foreign relations', fineAED: 'Up to 250,000', category: 'Serious' },
  { violation: 'Operating without licence (first offense)', fineAED: '10,000', category: 'Moderate' },
  { violation: 'Operating without licence (repeat offense)', fineAED: '40,000', category: 'Serious' },
  { violation: 'Publishing false information (first offense)', fineAED: '5,000', category: 'Minor' },
]

export const regulatoryTimeline: { date: string; event: string }[] = [
  { date: '2023', event: 'Federal Law No. 55 passed' },
  { date: '2025', event: 'Law effective' },
  { date: 'January 31, 2026', event: 'Advertiser permit deadline' },
]

export const complianceRequirements: { requirement: string; status: string }[] = [
  { requirement: 'Commercial influencer licensing', status: 'Mandatory' },
  { requirement: '18+ age requirement', status: 'Enforced' },
  { requirement: 'UAE citizenship/residency', status: 'Required' },
  { requirement: 'Trade licence', status: 'Required' },
  { requirement: 'Content standards adherence', status: 'Required (20 standards)' },
]

// ============================================================================
// UAE SOCIAL MEDIA STATISTICS
// ============================================================================

export const uaeSocialMediaStats: UaeSocialStats[] = [
  { metric: 'UAE Population (social media users)', value: '9.84 million', confidence: 'High' },
  { metric: 'Social media penetration', value: '98.98%', confidence: 'High' },
  { metric: 'Active social media users', value: '9.84 million', confidence: 'High' },
]

export const influencerFollowingMetrics: InfluencerFollowingMetric[] = [
  { metric: 'UAE residents following influencers', value: '75% (3 in 4)', source: 'Multiple' },
  { metric: 'UAE residents following health/fitness influencers', value: '29%', source: 'Multiple' },
  { metric: 'Residents aged 18-40 taking influencer advice', value: '71%', source: 'Multiple' },
  { metric: 'More likely to buy fashion/beauty from influencer recommendations', value: '63%', source: 'Multiple' },
]

export const influencerMarketData2021: { metric: string; value: string; source: string }[] = [
  { metric: 'Influencer mentions in UAE', value: '21.7K+', source: 'Talkwalker Blog' },
  { metric: 'Users engaged with influencer content', value: '81.1K', source: 'Talkwalker Blog' },
  { metric: 'Potential reach', value: '61 billion', source: 'Talkwalker Blog' },
]

export const engagementRankingsDubai: { rank: number; category: string; engagementRate: number }[] = [
  { rank: 1, category: 'Entertainment', engagementRate: 94 },
  { rank: 2, category: 'Food', engagementRate: 92 },
  { rank: 3, category: 'Travel', engagementRate: 91 },
  { rank: 4, category: 'Tech', engagementRate: 90 },
  { rank: 5, category: 'Lifestyle', engagementRate: 89 },
  { rank: 6, category: 'Fashion/Beauty', engagementRate: 85 },
]

// ============================================================================
// ADVERSARIAL VOICES & DISSIDENTS
// ============================================================================

export const uaeFiveMembers: { name: string; background: string; status: string }[] = [
  { name: 'Nasser bin Ghaith', background: 'Economist, lecturer at Paris-Sorbonne Abu Dhabi', status: 'Initially sentenced 2-3 years, pardoned Nov 2011' },
  { name: 'Ahmed Mansoor', background: 'Engineer, blogger, human rights activist', status: 'Pardoned Nov 2011, later re-imprisoned' },
  { name: 'Fahad Salim Dalk', background: 'Online activist', status: 'Initially sentenced, pardoned Nov 2011' },
  { name: 'Hassan Ali al-Khamis', background: 'Online activist', status: 'Initially sentenced, pardoned Nov 2011' },
  { name: 'Ahmed Abdul Khaleq', background: 'Bedoon online activist', status: 'Initially sentenced, pardoned Nov 2011' },
]

export const uae94MassTrial: { field: string; value: string | number }[] = [
  { field: 'Defendants', value: 94 },
  { field: 'Academics/lawyers/students arrested', value: 133 },
  { field: 'Purpose', value: 'Petitioning for democratic reform' },
  { field: 'Sentenced to heavy prison terms', value: 69 },
]

export const currentlyImprisonedDissidents: DissidentProfile[] = [
  { id: 'nasser-bin-ghaith', name: 'Nasser bin Ghaith', status: 'Imprisoned', sentence: 'Life imprisonment', notes: ['Re-sentenced July 2024'], credibility: 'Authoritative' },
  { id: 'ahmed-mansoor', name: 'Ahmed Mansoor', status: 'Imprisoned', sentence: '10 years', charges: '"Publishing false information" about UAE', arrestDate: 'March 20, 2017', notes: ['10 years + 1 million Dh fine ($270,000)', 'Solitary confinement, only 2 family visits', '"One of the few openly critical voices in the UAE"', 'Previous arrests: 2011 (pardoned by President)'], credibility: 'Authoritative' },
  { id: 'mohammed-al-roken', name: 'Mohammed al-Roken', status: 'Imprisoned', sentence: 'Life sentence', notes: [], credibility: 'Authoritative' },
  { id: 'ali-abdullah-fath-ali-al-khaja', name: 'Ali Abdullah Fath Ali al-Khaja', status: 'Died', deathDate: 'November 19, 2025', notes: ['Died in al-Razeen Prison'], credibility: 'Authoritative' },
]

export const exiledDissidents: DissidentProfile[] = [
  { id: 'ahmed-al-shaiba-al-nuaimi', name: 'Ahmed al-Shaiba al-Nuaimi', status: 'Exiled', location: 'UK since 2012', notes: ['Sentenced in absentia to life'], credibility: 'Authoritative' },
  { id: 'iyad-el-baghdadi', name: 'Iyad el-Baghdadi', status: 'Deported', notes: ['Palestinian blogger, arrested and deported by UAE'], credibility: 'Authoritative' },
  { id: 'hamad-al-shamsi', name: 'Hamad al-Shamsi', status: 'Exiled', notes: [], credibility: 'Authoritative' },
  { id: 'mohammed-saqr-al-zaabi', name: 'Mohammed Saqr al-Zaabi', status: 'Exiled', notes: [], credibility: 'Authoritative' },
]

export const princessLatifaCase: { field: string; value: string }[] = [
  { field: 'Incident', value: 'Seized by commandos from yacht' },
  { field: 'Reason', value: 'Attempted to flee UAE' },
  { field: 'Current Status', value: 'Held under house arrest' },
]

export const humanRightsConcerns: { concern: string; details: string }[] = [
  { concern: 'Torture methods', details: '16 different methods applied in UAE' },
  { concern: 'Secret prisons', details: 'In Yemen' },
  { concern: 'Post-Arab Spring jailed', details: 'Over 100 Emirati activists' },
  { concern: '2024 mass trial', details: '43 activists sentenced to life' },
  { concern: 'Cybercrime laws', details: 'Criminalize criticism' },
  { concern: 'Social media arrests', details: 'Users arrested for posts' },
]

export const dissidentSources: { source: string; type: string; credibility: string }[] = [
  { source: 'Wikipedia (UAE Five)', type: 'Encyclopedia', credibility: 'Medium' },
  { source: 'Amnesty International', type: 'Human rights NGO', credibility: 'Authoritative' },
  { source: 'Human Rights Watch (HRW)', type: 'Human rights NGO', credibility: 'Authoritative' },
  { source: 'ADHRB', type: 'Human rights org', credibility: 'Authoritative' },
]

// ============================================================================
// KEY TRENDS & INSIGHTS
// ============================================================================

export const keyTrendsInsights: { trend: string; observation: string; implication: string }[] = [
  {
    trend: '1. Expat-Dominated Top Tier',
    observation: 'Majority of top influencers by follower count are expats (Iraqi-American, Lebanese, Egyptian)',
    implication: 'UAE influencer landscape is pan-Arab, not purely Emirati',
  },
  {
    trend: '2. Emirati Presence in Specific Niches',
    observation: 'Emirati creators prominent in fashion, food, beauty',
    implication: 'Authentic Emirati voices emerging in lifestyle categories',
  },
  {
    trend: '3. Government Regulation Intensifying',
    observation: 'Federal Law No. 55 of 2023 mandates licensing',
    implication: 'Influencer market maturing, compliance becoming mandatory',
  },
  {
    trend: '4. High Engagement Rates',
    observation: 'Micro-influencers (10K-100K) show 10-20% engagement vs 1-3% for mega-influencers',
    implication: 'Authenticity and niche focus drive engagement',
  },
  {
    trend: '5. Suppression of Adversarial Voices',
    observation: 'Dissidents imprisoned, exiled, silenced',
    implication: 'Political commentary highly restricted in UAE',
  },
  {
    trend: '6. Commercial Ecosystem Mature',
    observation: '300+ agencies, established fee structures ($18K-$50K+ for Tier 1)',
    implication: 'Influencer marketing is institutionalized',
  },
]

// ============================================================================
// DATA TABLES INDEX
// ============================================================================

export const dataTablesIndex: DataTableSummary[] = [
  { tableNumber: 1, title: 'Top 10 UAE Influencers', rows: 10 },
  { tableNumber: 2, title: 'Engagement Rate by Category (Dubai)', rows: 6 },
  { tableNumber: 3, title: 'Beauty/Lifestyle Mega Influencers', rows: 4 },
  { tableNumber: 4, title: 'Fashion Mega Influencers', rows: 4 },
  { tableNumber: 5, title: 'Comedy/Entertainment Mega Influencers', rows: 3 },
  { tableNumber: 6, title: 'Food Mega Influencers', rows: 2 },
  { tableNumber: 7, title: 'Tech Mega Influencers', rows: 2 },
  { tableNumber: 8, title: 'Luxury/Lifestyle Mega Influencers', rows: 5 },
  { tableNumber: 9, title: 'Dubai Macro Influencers', rows: 9 },
  { tableNumber: 10, title: 'Abu Dhabi Macro Influencers', rows: 9 },
  { tableNumber: 11, title: 'Tech Macro Influencers', rows: 11 },
  { tableNumber: 12, title: 'Emirati Fashion Micro-Influencers', rows: 7 },
  { tableNumber: 13, title: 'High-Engagement Micro-Influencers', rows: 3 },
  { tableNumber: 14, title: 'Food Micro-Influencers', rows: 2 },
  { tableNumber: 15, title: 'Government/Royal Accounts', rows: 3 },
  { tableNumber: 16, title: 'Beauty & Cosmetics Influencers', rows: 8 },
  { tableNumber: 17, title: 'Fashion & Apparel Influencers', rows: 11 },
  { tableNumber: 18, title: 'Food & Dining Influencers', rows: 9 },
  { tableNumber: 19, title: 'Travel & Tourism Influencers', rows: 6 },
  { tableNumber: 20, title: 'Tech & Gaming Influencers', rows: 11 },
  { tableNumber: 21, title: 'Top UAE YouTubers', rows: 10 },
  { tableNumber: 22, title: 'Kids Content YouTube Channels', rows: 3 },
  { tableNumber: 23, title: 'Financial Influencers', rows: 1 },
  { tableNumber: 24, title: 'Influencer Marketing Agencies', rows: 6 },
  { tableNumber: 25, title: 'Agency Comparison', rows: 5 },
  { tableNumber: 26, title: 'UAE Media Law Fines', rows: 7 },
  { tableNumber: 27, title: 'UAE Social Media Statistics', rows: 6 },
  { tableNumber: 28, title: 'Engagement Rate Rankings', rows: 6 },
  { tableNumber: 29, title: 'Currently Imprisoned Dissidents', rows: 4 },
  { tableNumber: 30, title: 'Exiled Dissidents', rows: 4 },
  { tableNumber: 31, title: 'UAE Five Members', rows: 5 },
  { tableNumber: 32, title: 'Emirati Fashion Creators', rows: 8 },
  { tableNumber: 33, title: 'Emirati Content Creators by Category', rows: 4 },
]

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 24,
  pagesFetched: 38,
  dataFreshness: '2025-2026 estimates',
  coverageScope: 'UAE (Dubai, Abu Dhabi, Northern Emirates)',
  totalInfluencerEntries: '100+',
  totalDataTables: 33,
  totalCategoriesCovered: 16,
}

// ============================================================================
// SOURCE ATTRIBUTION
// ============================================================================

export const sourcesAttribution: { sourceName: string; type: string; usedFor: string }[] = [
  { sourceName: 'Talkwalker Blog', type: 'Social listening platform', usedFor: 'Influencer mentions, reach metrics' },
  { sourceName: 'Kolsquare', type: 'Influencer marketing platform', usedFor: 'Follower data, engagement rates' },
  { sourceName: 'HypeAuditor', type: 'Influencer analytics', usedFor: 'Audience quality metrics' },
  { sourceName: 'Favikon', type: 'Influencer discovery', usedFor: 'Category rankings' },
  { sourceName: 'Modash', type: 'Influencer database', usedFor: 'Platform follower counts' },
  { sourceName: 'IGYgrow', type: 'Influencer platform', usedFor: 'UAE-specific data' },
  { sourceName: 'GryNow', type: 'Influencer marketplace', usedFor: 'Earnings estimates' },
  { sourceName: 'Feedspot', type: 'Content discovery', usedFor: 'Top rankings' },
  { sourceName: 'Hive Influence', type: 'Tech influencer platform', usedFor: 'Tech-specific metrics' },
  { sourceName: 'SocialBook', type: 'Influencer analytics', usedFor: 'Earnings data' },
  { sourceName: 'Plug Media', type: 'Agency', usedFor: 'Agency capabilities' },
  { sourceName: 'Imfluence', type: 'Agency', usedFor: 'Methodology, network' },
  { sourceName: 'UAE Media Council', type: 'Government', usedFor: 'Regulatory framework' },
  { sourceName: 'Gulf News', type: 'Regional news', usedFor: 'Media law reporting' },
  { sourceName: 'Amnesty International', type: 'Human rights NGO', usedFor: 'Dissident documentation' },
  { sourceName: 'Human Rights Watch', type: 'Human rights NGO', usedFor: 'Human rights concerns' },
  { sourceName: 'ADHRB', type: 'Human rights org', usedFor: 'Dissident cases' },
]

// ============================================================================
// COMPREHENSIVE ALL-INFLUENCERS FLAT ARRAY
// ============================================================================

export const allMegaInfluencers: InfluencerProfile[] = [
  fazzaProfile,
  ...abuDhabiGovernmentAccounts,
  ...beautyLifestyleMegaInfluencers,
  ...fashionMegaInfluencers,
  ...comedyEntertainmentMegaInfluencers,
  ...foodMegaInfluencers,
  ...techMegaInfluencers,
  ...luxuryLifestyleMegaInfluencers,
]

export const allMacroInfluencers: InfluencerProfile[] = [
  ...dubaiMacroInfluencers,
  ...abuDhabiMacroInfluencers,
  ...techMacroInfluencers,
]

export const allMicroInfluencers: InfluencerProfile[] = [
  ...emiratiFashionMicroInfluencers,
  ...foodMicroInfluencers,
]

export const allInfluencers: InfluencerProfile[] = [
  ...allMegaInfluencers,
  ...allMacroInfluencers,
  ...allMicroInfluencers,
]

// ============================================================================
// RICHEST UAE INFLUENCERS (2026 ESTIMATES)
// ============================================================================

export const richestUaeInfluencers: { rank: number; name: string; followers: string; estimatedEarningsPost: string; category: string }[] = [
  { rank: 1, name: 'Huda Kattan', followers: '54.5M', estimatedEarningsPost: '$18,000', category: 'Beauty' },
  { rank: 2, name: 'Joelle Mardinian', followers: '21.8M', estimatedEarningsPost: 'High', category: 'Beauty/Lifestyle' },
  { rank: 3, name: 'Noor Stars', followers: '15.8M', estimatedEarningsPost: 'High', category: 'Beauty/Lifestyle' },
  { rank: 4, name: 'Noha Nabil', followers: '13M', estimatedEarningsPost: 'Medium-High', category: 'Fashion/Beauty' },
  { rank: 5, name: 'Narin Amara', followers: '13.6M', estimatedEarningsPost: 'Medium-High', category: 'Beauty/Makeup' },
  { rank: 6, name: 'Nour Arida', followers: '11M', estimatedEarningsPost: 'Medium', category: 'Fashion' },
  { rank: 7, name: 'Karen Wazen', followers: '8.1M', estimatedEarningsPost: 'Medium', category: 'Fashion/Lifestyle' },
  { rank: 8, name: 'Rawan Bin Hussain', followers: '7.6M', estimatedEarningsPost: 'Medium', category: 'Fashion/Beauty' },
  { rank: 9, name: 'Ahmed Al Khafaji', followers: '9.2M', estimatedEarningsPost: 'Not specified', category: 'Comedy' },
]
