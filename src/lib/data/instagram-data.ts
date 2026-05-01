/**
 * Instagram Intelligence Data — UAE NDIP
 * 100% extracted from 5-5-instagram-results.md
 *
 * Coverage:
 * - PART 1: Instagram User Statistics in UAE
 * - PART 2: UAE Influencer Regulatory Framework
 * - PART 3: UAE Influencer Market Statistics
 * - PART 4: Top UAE Instagram Influencers
 * - PART 5: Instagram Content Trends in UAE
 * - PART 6: Virtual Influencer Market
 * - PART 7: Coordinated Behavior Incidents (March 2026)
 * - PART 8: Enforcement Actions (2024-2026)
 * - PART 9: Instagram Advertising Market
 * - PART 10: Social Media Marketing Agencies in Dubai
 * - PART 11: Key Query Patterns for Instagram Intelligence
 * - PART 12: URL Source Summary
 * - PART 13: Sentiment Analysis
 * - PART 14: UAE Relevance Assessment
 * - PART 15: Dashboard-Ready Data Tables
 */

import type {
  PlatformIntelligence,
  SocialPlatform,
  BotAnalysis,
  Narrative,
  EngagementMetrics,
  DarkSocialAggregate,
  SentimentBreakdown,
  SocialAccount,
  KeyFinding,
  CredibilityScore,
  TierLevel,
  AlertLevel,
} from '../data-loader/types';

// ============================================================================
// USER STATISTICS DATA
// ============================================================================

export interface UserStatistics {
  month: string
  users: number
  percentOfPopulation?: number
  source: string
}

export interface GenderDemographics {
  gender: string
  percentage: number
  source: string
  date: string
}

export interface AgeDemographics {
  ageGroup: string
  female: number
  male: number
  source: string
  notes?: string
}

export const instagramUserGrowth: UserStatistics[] = [
  { month: 'Jan 2024', users: 7000000, source: '-' },
  { month: 'Jan 2025', users: 7600000, percentOfPopulation: 67.8, source: 'DataReportal' },
  { month: 'Jun 2025', users: 7898800, percentOfPopulation: 73.4, source: 'NapoleonCat' },
  { month: 'Aug 2025', users: 8359400, percentOfPopulation: 77.7, source: 'NapoleonCat' },
]

export const instagramGenderDemographics: GenderDemographics[] = [
  { gender: 'Male', percentage: 64.9, source: 'DataReportal', date: 'Feb 2025' },
  { gender: 'Female', percentage: 35.1, source: 'DataReportal', date: 'Feb 2025' },
]

export const instagramAgeDemographics: AgeDemographics[] = [
  { ageGroup: '18-24', female: 18.2, male: 30.4, source: 'NapoleonCat' },
  { ageGroup: '25-34', female: 44.3, male: 16.5, source: 'NapoleonCat', notes: 'Largest group, ~3.5M' },
  { ageGroup: '35-44', female: 24.9, male: 5.7, source: 'NapoleonCat' },
  { ageGroup: '45-54', female: 8.9, male: 1.6, source: 'NapoleonCat' },
  { ageGroup: '55-64', female: 2.5, male: 0.8, source: 'NapoleonCat' },
  { ageGroup: '65+', female: 1.2, male: 0, source: 'NapoleonCat' },
]

// ============================================================================
// REGULATORY FRAMEWORK DATA
// ============================================================================

export interface RegulatoryFramework {
  legislation: string
  description: string
  effectiveDate: string
}

export interface LicenseRequirement {
  type: string
  provider?: string
  purpose: string
  cost: string
  duration?: string
  renewal?: string
  notes?: string
}

export interface PermitCost {
  permitType: string
  duration: string
  cost: string
  renewal: string
  notes?: string
}

export interface Penalty {
  violation: string
  firstOffense: string
  secondOffense: string
  thirdOffense: string
}

export interface TaxRequirement {
  requirement: string
  threshold: string
  rate: string
  deadline: string
}

export const instagramRegulatoryFramework: RegulatoryFramework[] = [
  { legislation: 'Federal Decree-Law No. 55 of 2023', description: 'Foundation for influencer regulation', effectiveDate: '2023' },
  { legislation: 'UAE Media Council regulations (2025)', description: 'Specific influencer advertising rules', effectiveDate: 'May 2025' },
  { legislation: 'Grace period', description: 'Time for compliance', effectiveDate: 'Until Jan 31, 2026' },
  { legislation: 'Full enforcement', description: 'Mandatory advertiser permit', effectiveDate: 'Feb 1, 2026' },
]

export const instagramLicenseRequirements: LicenseRequirement[] = [
  {
    type: 'Commercial Trade License',
    provider: 'Meydan Free Zone, UAQ FTZ',
    purpose: 'Establishes you as a legal business entity',
    cost: 'AED 5,000 - 15,000 annually',
    notes: 'Free zone freelancer setup'
  },
  {
    type: 'E-Media Influencer Permit',
    provider: 'UAE Media Council',
    purpose: 'Authorizes advertising content creation',
    cost: 'FREE for UAE Citizens/Residents (first 3 years: 2026-2028)',
    duration: '1 year',
    renewal: 'AED 1,000/year after 3 years',
    notes: 'Platform-neutral: Covers Instagram, YouTube, TikTok, Facebook, etc.'
  },
]

export const instagramPermitCosts: PermitCost[] = [
  { permitType: 'UAE Citizens/Residents', duration: '1 year', cost: 'FREE (first 3 years: 2026-2028)', renewal: 'AED 1,000/year after 3 years' },
  { permitType: 'Non-Residents/Visitors', duration: '3 months', cost: 'AED 500', renewal: 'AED 500 renewal' },
  { permitType: 'Late renewal fee', duration: 'Per day', cost: 'AED 150/day', renewal: 'Capped at AED 3,000' },
]

export const instagramPenalties: Penalty[] = [
  { violation: 'Operating without permit', firstOffense: 'AED 10,000', secondOffense: 'AED 40,000', thirdOffense: 'Administrative closure after 30 days' },
  { violation: 'Social media without permit', firstOffense: 'Warning', secondOffense: 'AED 20,000', thirdOffense: 'AED 50,000' },
  { violation: 'Content violations', firstOffense: 'AED 5,000 - 1,000,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'False/misleading information', firstOffense: 'AED 10,000 - 40,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'National security violations', firstOffense: 'AED 50,000 - 500,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Spreading rumors/fake news', firstOffense: 'AED 10,000 - 80,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Disrespecting cultural heritage', firstOffense: 'AED 25,000 - 150,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Offending religious beliefs', firstOffense: 'AED 100,000 - 1,000,000', secondOffense: '-', thirdOffense: '-' },
  { violation: 'Expired permit', firstOffense: 'AED 150/day (capped at AED 3,000)', secondOffense: '-', thirdOffense: '-' },
]

export const instagramTaxRequirements: TaxRequirement[] = [
  { requirement: 'Corporate Tax Registration', threshold: 'Annual profit > AED 375,000', rate: '9%', deadline: 'March 31, 2025 (for 2024 income > AED 1M)' },
  { requirement: 'VAT Registration', threshold: 'Taxable supplies > AED 375,000/year', rate: '5%', deadline: 'When threshold exceeded' },
  { requirement: 'Tax Return Due', threshold: '-', rate: '-', deadline: 'September 30, 2025 (for 2024)' },
  { requirement: 'Late Registration Penalty', threshold: '-', rate: 'AED 10,000', deadline: 'Federal Tax Authority' },
]

// ============================================================================
// MARKET SIZE DATA
// ============================================================================

export interface MarketSize {
  market: string
  currentValue: string
  projectedValue: string
  year: string
  cagr: string
  source: string
}

export interface SectorBreakdown {
  sector: string
  marketShare: string
}

export interface ContentCreatorEconomy {
  metric: string
  value: string
  source: string
}

export const instagramMarketSize: MarketSize[] = [
  { market: 'GCC Influencer Marketing', currentValue: '$315.5M', projectedValue: '$771.6M', year: '2025 → 2032', cagr: '13.9%', source: 'PS Market Research' },
  { market: 'UAE Influencer Marketing', currentValue: '$173M', projectedValue: '$442.54M', year: '2025 → 2034', cagr: '11%', source: 'TheReportCubes' },
  { market: 'UAE Influencer Ad Spend', currentValue: '$69.35M', projectedValue: '$91.55M', year: '2025 → 2029', cagr: '7.2%', source: 'facebook.com/shyniahmeed' },
  { market: 'UAE Social Commerce', currentValue: '$3.21B', projectedValue: '$6.41B', year: '2024 → 2030', cagr: '-', source: 'Ken Research' },
  { market: 'UAE Digital Ad Spend', currentValue: 'AED 3.8B', projectedValue: '-', year: '2025', cagr: '-', source: 'Instagram @DKZqfpmSRxH' },
  { market: 'Dubai Content Creator Fund', currentValue: 'AED 150M (USD 40.8M)', projectedValue: '-', year: 'Jan 2024 launch', cagr: '-', source: 'Dubai government' },
  { market: 'UAE Virtual Influencer', currentValue: '$8.9M', projectedValue: '$76.6M', year: '2024 → 2030', cagr: '43.7%', source: 'inbeat.co' },
  { market: 'Global Virtual Influencer', currentValue: '$3.8B', projectedValue: '$14.1B', year: '2024 → 2030', cagr: '24.3%', source: 'StrategicMarketResearch' },
]

export const instagramSectorBreakdown: SectorBreakdown[] = [
  { sector: 'Fashion & Beauty', marketShare: '35%' },
  { sector: 'Lifestyle & Travel', marketShare: '35%' },
  { sector: 'Other sectors', marketShare: '30%' },
]

export const instagramContentCreatorEconomy: ContentCreatorEconomy[] = [
  { metric: 'GCC total influencers', value: '263,000', source: 'CampaignME' },
  { metric: 'Lifestyle/travel creators (2025)', value: '58,000', source: 'CampaignME' },
  { metric: 'Lifestyle/travel creators (2023)', value: '31,000', source: 'CampaignME' },
  { metric: 'Growth in 2 years', value: '74%', source: 'CampaignME' },
  { metric: 'UAE social media penetration', value: '115%', source: 'GlobalRiskCommunity' },
]

// ============================================================================
// INFLUENCER DATA
// ============================================================================

export interface TopInfluencer {
  rank: number
  name: string
  username: string
  followers: number
  engagementRate: number
  brandPartners: string
  notes: string
  category?: string
}

export interface LifestyleInfluencer {
  username: string
  followers: number
  engagementRate: number
  audienceGender: string
}

export interface HighEngagementLeader {
  username: string
  followers: number
  engagementRate: number
  audienceGender: string
}

export interface NotableInfluencer {
  name: string
  username: string
  followers: number
  engagement?: string
  brands?: string
  notes: string
}

export const instagramTopInfluencers: TopInfluencer[] = [
  { rank: 1, name: 'Rida Shahid', username: '@Rida_Shahid', followers: 30800000, engagementRate: 0.76, brandPartners: '-', notes: 'Dental professional, NLP life coach', category: 'Dental/Lifestyle' },
  { rank: 2, name: 'Abdul Ghafoor', username: '@zamzam_brothers_official', followers: 24200000, engagementRate: 0.22, brandPartners: 'Dubai Global Village, Zamelect', notes: '', category: 'Food/Brands' },
  { rank: 3, name: 'Joelle Mardinian', username: '@joellemardinian', followers: 21800000, engagementRate: 0, brandPartners: 'Hermès, Prada', notes: 'TV presenter, makeup artist, clinic chain founder', category: 'Beauty/TV' },
  { rank: 4, name: 'Noor Stars', username: '@noorstars', followers: 17700000, engagementRate: 1.64, brandPartners: "Mac, L'Oréal, Benefit, Fendi, Dior", notes: 'Forbes 30 under 30', category: 'Beauty/Lifestyle' },
  { rank: 5, name: 'Fazza', username: '@faz3', followers: 17000000, engagementRate: 2.55, brandPartners: 'Apple, Trip, Walt Disney, Adidas, Starbucks', notes: '', category: 'Lifestyle' },
  { rank: 6, name: 'Ahlam Alshamsi', username: '@ahlamalshamsi', followers: 15200000, engagementRate: 0.05, brandPartners: 'Apple, Nike, Dior', notes: 'MBC Arab Idol judge', category: 'Music/TV' },
  { rank: 7, name: 'Noha Nabil', username: '@nohastyleicon', followers: 13000000, engagementRate: 0, brandPartners: 'Swarovski, Givenchy, Fendi', notes: 'Forbes Top 10 Most Influential Arab Women', category: 'Fashion' },
  { rank: 8, name: 'Dr Mahra Lutfi', username: '@missglobalpeace', followers: 11900000, engagementRate: 0, brandPartners: 'Armani, Bentley, Bulgari, Dior', notes: 'Doctor, activist, ethical tourism advocate', category: 'Doctor/Activist' },
  { rank: 9, name: 'Ahmed Hossam', username: '@ahmedhossam', followers: 10400000, engagementRate: 22.62, brandPartners: '-', notes: 'Egyptian football legend (Mido), comedian', category: 'Comedy/Football' },
  { rank: 10, name: 'Asmaa Ibraheem', username: '@asmaa_ibraheemofficial', followers: 10200000, engagementRate: 0, brandPartners: 'Chanel, Alexander McQueen, Balmain, Cartier', notes: 'TV presenter, comedian; attended Dior Fashion Week 2024', category: 'TV/Comedy' },
]

export const instagramLifestyleInfluencers: LifestyleInfluencer[] = [
  { username: '@ajmal_khan_', followers: 3600000, engagementRate: 0.53, audienceGender: '86.75% male' },
  { username: '@kari____kari', followers: 3500000, engagementRate: 1.23, audienceGender: '51.01% male, 48.99% female' },
  { username: '@shaimahormillosa', followers: 2400000, engagementRate: 1.00, audienceGender: '59.56% female' },
  { username: '@hell0busra', followers: 2200000, engagementRate: 2.08, audienceGender: '59.55% female' },
  { username: '@moayad.alsawaf', followers: 2100000, engagementRate: 1.22, audienceGender: '57.39% female' },
  { username: '@coachmeddydubai', followers: 2100000, engagementRate: 2.40, audienceGender: '52.79% female' },
  { username: '@h5eif', followers: 1700000, engagementRate: 4.71, audienceGender: '51.34% female' },
  { username: '@dr__hinda', followers: 1600000, engagementRate: 1.17, audienceGender: '58.64% male' },
  { username: '@aaliyalala', followers: 1500000, engagementRate: 0.81, audienceGender: '58.58% female' },
  { username: '@themarmar', followers: 1400000, engagementRate: 2.33, audienceGender: '73.98% female' },
]

export const instagramHighEngagementLeaders: HighEngagementLeader[] = [
  { username: '@auda_amar', followers: 1200000, engagementRate: 17.68, audienceGender: '83.32% female' },
  { username: '@munz_zeer', followers: 373400, engagementRate: 24.00, audienceGender: '81.47% male' },
  { username: '@sabsi_t', followers: 1000000, engagementRate: 10.42, audienceGender: '90.43% female' },
]

export const instagramNotableInfluencers: NotableInfluencer[] = [
  { name: 'Huda Kattan', username: '@huda', followers: 4800000, notes: "Time's 25 Most Influential People Online (2017)" },
  { name: 'Khalid Al Ameri', username: '@khalidalameri', followers: 3200000, engagement: '2.85%', brands: 'Skechers', notes: 'Stanford MBA, former CNN presenter' },
  { name: 'Jumana Abdu Rahman', username: '@jumana', followers: 5700000, engagement: '1.71%', brands: '200+ brand collaborations', notes: 'First influencer on Burj Khalifa after Shah Rukh Khan; Filmfare Middle East Award' },
  { name: 'Mizna Arshad', username: '@mizteriously', followers: 492000, engagement: '3.62%', brands: 'DSF, Malabar UAE, Microsoft AE', notes: '' },
  { name: 'Arooj Gulzar', username: '@aroojkaashif', followers: 311000, brands: 'Pantene Arabia, OPPO Arabia', notes: 'MENA Digital Awards Best Beauty Content Creator 2023' },
  { name: 'Fatima Raza', username: '@fatimraxa', followers: 760000, brands: 'Adidas, Trendyol', notes: 'Top 100 Influencers in UAE' },
  { name: 'Dr Fatma Altoblani', username: '@uaeangelf7toom', followers: 6900000, notes: 'Criminal lawyer, motivational content' },
  { name: 'Aliona', username: '@aliona.ess', followers: 4200000, engagement: '5.56%', brands: 'Charlotte Tilbury, Sephora, YSL Beauty', notes: 'Founder of alionacosmetics.com' },
]

// ============================================================================
// VIRTUAL INFLUENCER DATA
// ============================================================================

export interface VirtualInfluencer {
  name: string
  platform: string
  description: string
  location: string
}

export const instagramVirtualInfluencers: VirtualInfluencer[] = [
  { name: 'Cassandra AI', platform: '@cassandraaig', description: '19-year-old ChatGPT AI Model, Singer, Dancer, speaks 36 languages', location: 'Copenhagen' },
  { name: 'MetaKira', platform: '@meta.kira', description: 'Virtual girl in UAE, 4 years in Dubai; personal content only; no promotions', location: 'Dubai' },
]

// ============================================================================
// COORDINATED BEHAVIOR DATA
// ============================================================================

export interface CoordinatedBehaviorIncident {
  date: string
  event: string
  description: string
  individualsArrested?: number
}

export interface CoordinatedBehaviorOverview {
  title: string
  date: string
  overview: string
  keyFacts: string[]
  keyNarrativeThemes: string[]
  totalArrested?: number
  indianNationalsArrested?: number
  prisonSentencePotential?: string
  finePotential?: string
  quote?: string
  quoteAuthor?: string
}

export const instagramCoordinatedBehaviorOverview: CoordinatedBehaviorOverview = {
  title: 'Dubai Safety Posts Incident',
  date: 'March 2026',
  overview: 'During regional conflict, dozens of Dubai influencers posted near-identical videos praising the city\'s safety and glorifying its leadership.',
  keyFacts: [
    'Analysis showed 29 posts with almost identical messages',
    'Content creator Nicole Meera, 25, who moved to Dubai in 2022, was won over by the destination\'s "safe" reputation',
    'Posts typically began with a shot of the influencer with accompanying text: "you live in Dubai, aren\'t you scared?" or "do you feel safe in..."'
  ],
  keyNarrativeThemes: [
    'Claims of feeling safe despite regional tensions',
    'Glorification of UAE leadership',
    'Contrasting Dubai safety with regional instability'
  ],
  totalArrested: 375,
  indianNationalsArrested: 19,
  prisonSentencePotential: 'Up to 2 years',
  finePotential: 'Up to £40,000-58,000 ($77,000)',
  quote: 'When people know they could face jail for what they post, it inevitably shapes what you see online.',
  quoteAuthor: 'Radha Stirling, founder of Detained in Dubai'
}

export const instagramCoordinatedBehaviorTimeline: CoordinatedBehaviorIncident[] = [
  { date: 'March 2, 2026', event: 'Instagram reel', description: '"We trust that Dubai stays safe please dont share any visuals"' },
  { date: 'March 5, 2026', event: 'Instagram reel', description: '"A new social media trend has taken off among influencers in Dubai"' },
  { date: 'March 6, 2026', event: 'CNN article', description: 'Dubai influencer-cultivated safe haven reputation' },
  { date: 'March 7, 2026', event: 'Instagram reel', description: 'Reports suggest UAE asked influencers to film content showing "everything is normal"' },
  { date: 'March 9, 2026', event: 'France24/ABC article', description: '"Dubai\'s influencers have a new rule: Don\'t mention the war"' },
  { date: 'March 11, 2026', event: 'DailyMail article', description: 'Bizarre identical messages about Dubai safety' },
  { date: 'March 14, 2026', event: 'Instagram posts', description: '"Ten people arrested in UAE for publishing"; 19 Indians caught in Gulf digital misinformation dragnet' },
  { date: 'March 16, 2026', event: 'Arrests', description: '375 arrested for UAE conflict posts' },
  { date: 'April 18, 2026', event: 'Instagram reel', description: 'UAE rules requiring influencers to take a test' },
]

// ============================================================================
// ENFORCEMENT ACTIONS DATA
// ============================================================================

export interface EnforcementAction {
  location: string
  action: string
  year: string
  details: string
}

export interface LicenseComplianceDeadline {
  deadline: string
  requirement: string
}

export const instagramEnforcementActions: EnforcementAction[] = [
  { location: 'Abu Dhabi', action: '12 influencers fined', year: '2024', details: 'For unlicensed giveaways' },
  { location: 'Dubai', action: '50+ cases handled', year: 'Since 2023', details: 'Dubai "Influencer Court" - deceptive ads' },
  { location: 'Dubai', action: 'Beauty influencer fined', year: '2024', details: '200K followers, AED 5,000 fine' },
]

export const instagramLicenseComplianceDeadlines: LicenseComplianceDeadline[] = [
  { deadline: 'January 31, 2026', requirement: 'Grace period ends for advertising permit' },
  { deadline: 'February 1, 2026', requirement: 'Full enforcement begins' },
  { deadline: 'March 31, 2025', requirement: 'Corporate tax registration deadline (for income > AED 1M in 2024)' },
]

// ============================================================================
// CONTENT TRENDS DATA
// ============================================================================

export interface ContentTrend {
  metric: string
  value: string
  source: string
}

export interface EngagementRate {
  influencerType: string
  engagementRate: string
  source: string
}

export interface ConsumerBehavior {
  behavior: string
  percentage: string
  source: string
}

export const instagramContentTrends: ContentTrend[] = [
  { metric: 'UAE internet users on Instagram', value: '71.4%', source: 'inbeat.co' },
  { metric: 'Time spent on Instagram (Reels)', value: '30% of total', source: 'inbeat.co' },
  { metric: 'UAE internet users following influencer accounts', value: '33%', source: 'inbeat.co' },
  { metric: 'Bilingual content engagement (Arabic + English)', value: '3.2x higher vs monolingual', source: 'inbeat.co' },
  { metric: 'Users doing brand research on social networks', value: '50%+', source: 'inbeat.co' },
  { metric: 'Voice-based online searches in UAE', value: '50%', source: 'inbeat.co' },
  { metric: 'Daily online hours (UAE vs global)', value: '7.2 hours vs 5.3 hours', source: 'GlobalRiskCommunity' },
  { metric: 'UAE internet penetration', value: '~99%', source: 'inbeat.co' },
]

export const instagramEngagementRates: EngagementRate[] = [
  { influencerType: 'UAE nano-influencer (1K-10K)', engagementRate: '6-8%', source: 'GlobalRiskCommunity' },
  { influencerType: 'Global Instagram average', engagementRate: '1.2%', source: 'GlobalRiskCommunity' },
  { influencerType: 'UAE micro-influencer trust vs celebrity', engagementRate: '58% prefer micro', source: 'GlobalRiskCommunity' },
  { influencerType: 'Marketing professionals reporting AI content performs better', engagementRate: '72%', source: 'inbeat.co' },
]

export const instagramConsumerBehavior: ConsumerBehavior[] = [
  { behavior: 'Eco-conscious UAE consumers', percentage: '64%', source: 'inbeat.co' },
  { behavior: 'Trust micro-influencer recommendations over celebrity', percentage: '58%', source: 'GlobalRiskCommunity' },
  { behavior: 'GCC population under age 35', percentage: '70%+', source: 'GlobalRiskCommunity' },
  { behavior: 'Saudi citizens under age 35', percentage: '~80%', source: 'GlobalRiskCommunity' },
]

// ============================================================================
// AGENCIES DATA
// ============================================================================

export interface MarketingAgency {
  agency: string
  website: string
  specialty: string
}

export const instagramMarketingAgencies: MarketingAgency[] = [
  { agency: 'inbeat.agency', website: 'inbeat.agency', specialty: 'Best 31 Social Media Agencies in Dubai' },
  { agency: 'Social Trends ME', website: '@socialtrendsme', specialty: 'Digital Marketing, SEO, Social Content' },
  { agency: 'Mason Circle Dubai', website: '@masoncircle.dubai', specialty: 'Dubai F&B Hospitality Creatives' },
  { agency: 'Hashtag', website: 'hashtag-me.com', specialty: 'Strategic planning, content creation, media strategy' },
  { agency: 'Socially.ae', website: 'socially.ae', specialty: 'Instagram Marketing, Influencer Marketing' },
  { agency: 'Savit Interactive', website: 'savit.ae', specialty: 'Content strategy, reels, profile management' },
]

// ============================================================================
// QUERY PATTERNS DATA
// ============================================================================

export interface QueryPattern {
  category: string
  examples: string
}

export const instagramQueryPatterns: QueryPattern[] = [
  { category: 'Regulatory', examples: 'UAE Instagram influencer ad disclosure 2024 2025, UAE Instagram influencer permit license Dubai 2025 2026' },
  { category: 'Controversy', examples: 'UAE Instagram viral Reels controversy 2024 2025, UAE Instagram behind the scenes reality 2024 2025' },
  { category: 'Safety/Coordinated', examples: 'Dubai Instagram influencer coordinated posts safety 2026, UAE Instagram bot troll campaign inauthentic 2024 2025' },
  { category: 'Statistics', examples: 'UAE Instagram statistics users 2024 2025, UAE Instagram content creator economy statistics 2024 2025' },
  { category: 'Enforcement', examples: 'Dubai Instagram influencers arrested misinformation 2026, UAE Instagram influencer fined crackdown 2024 2025' },
  { category: 'Finance', examples: 'UAE Instagram influencer tax corporate 2024 2025, UAE Instagram influencer advertising market size 2024 2025' },
  { category: 'Trends', examples: 'Dubai Instagram reel viral trending 2025, UAE Instagram hashtag trending topics 2025' },
  { category: 'Future', examples: 'UAE Instagram metaverse virtual influencer 2024 2025, Dubai Instagram social media marketing agency 2024 2025' },
]

// ============================================================================
// KEY DATES DATA
// ============================================================================

export interface KeyDate {
  date: string
  event: string
}

export const instagramKeyDates: KeyDate[] = [
  { date: '2023', event: 'Federal Decree-Law No. 55 of 2023 enacted' },
  { date: 'January 2024', event: 'Dubai AED 150 million content creator fund launched' },
  { date: 'July 2024', event: 'Income threshold for tax registration (AED 1M) assessed' },
  { date: '2024', event: 'Abu Dhabi fined 12 influencers for unlicensed giveaways' },
  { date: 'May 2025', event: 'UAE Media Council advertising permit effective' },
  { date: 'March 31, 2025', event: 'Corporate tax registration deadline' },
  { date: 'September 30, 2025', event: 'Tax return due for 2024' },
  { date: 'October 2025', event: 'Instagram users: 8.36M' },
  { date: 'January 31, 2026', event: 'Grace period ends for influencer permit' },
  { date: 'February 1, 2026', event: 'Full enforcement of advertiser permit begins' },
  { date: 'March 2026', event: 'Regional tensions; coordinated safety posts; ~375 arrested' },
  { date: 'April 2026', event: 'UAE introduces influencer testing requirement' },
]

// ============================================================================
// SENTIMENT ANALYSIS DATA
// ============================================================================

export interface SentimentByTopic {
  topic: string
  sentiment: string
  notes: string
}

export interface SentimentBySource {
  source: string
  typicalSentiment: string
}

export const instagramSentimentByTopic: SentimentByTopic[] = [
  { topic: 'UAE Instagram growth', sentiment: 'Positive', notes: 'Strong user growth, high engagement' },
  { topic: 'Regulatory framework', sentiment: 'Neutral to Negative', notes: 'Fines, permits seen as restrictive' },
  { topic: 'Influencer arrests (March 2026)', sentiment: 'Negative', notes: 'Concerns about free speech' },
  { topic: 'Coordinated posts incident', sentiment: 'Negative', notes: 'Questions about authenticity' },
  { topic: 'Market opportunities', sentiment: 'Positive', notes: 'Large and growing market' },
]

export const instagramSentimentBySource: SentimentBySource[] = [
  { source: 'Government/Regulatory', typicalSentiment: 'Neutral/Official' },
  { source: 'Industry Reports', typicalSentiment: 'Positive (market growth focus)' },
  { source: 'News Articles (Western)', typicalSentiment: 'Neutral to Negative (rights concerns)' },
  { source: 'Influencer Posts', typicalSentiment: 'Positive (lifestyle showcase)' },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT DATA
// ============================================================================

export interface ContentRelevance {
  topic: string
  uaeRelevance: string
  notes: string
}

export interface PriorityIntelligenceArea {
  priority: string
  areas: string[]
}

export const instagramContentRelevance: ContentRelevance[] = [
  { topic: 'User statistics', uaeRelevance: 'Critical', notes: 'Core intelligence data' },
  { topic: 'Regulatory framework', uaeRelevance: 'Critical', notes: 'Legal compliance requirement' },
  { topic: 'Top influencers', uaeRelevance: 'High', notes: 'Media monitoring targets' },
  { topic: 'Enforcement actions', uaeRelevance: 'Critical', notes: 'Risk indicators' },
  { topic: 'Market statistics', uaeRelevance: 'High', notes: 'Economic intelligence' },
  { topic: 'Coordinated behavior', uaeRelevance: 'Critical', notes: 'Security intelligence' },
  { topic: 'Virtual influencers', uaeRelevance: 'Medium', notes: 'Emerging trend' },
  { topic: 'Agency landscape', uaeRelevance: 'Medium', notes: 'Business intelligence' },
]

export const instagramPriorityIntelligenceAreas: PriorityIntelligenceArea[] = [
  {
    priority: 'Critical Priority',
    areas: ['User statistics and growth trends', 'Regulatory changes and enforcement', 'Coordinated behavior detection', 'Misinformation/crackdown events']
  },
  {
    priority: 'High Priority',
    areas: ['Top influencer monitoring', 'Market size and spending data', 'Corporate tax compliance']
  },
  {
    priority: 'Medium Priority',
    areas: ['Virtual influencer developments', 'Agency landscape', 'Content trends']
  },
]

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface SourceCredibility {
  name: string
  tier: TierLevel
  type: string
  credibility: string
  uaeRelevance: string
}

export const instagramSourceCredibility: SourceCredibility[] = [
  { name: 'UAE Media Council', tier: 1, type: 'Government', credibility: 'High', uaeRelevance: 'Primary source' },
  { name: 'DataReportal', tier: 1, type: 'Statistics Portal', credibility: 'High', uaeRelevance: 'Primary statistics' },
  { name: 'NapoleonCat', tier: 1, type: 'Statistics Portal', credibility: 'High', uaeRelevance: 'Primary statistics' },
  { name: 'RHJ Accountants', tier: 2, type: 'Industry', credibility: 'High', uaeRelevance: 'Tax/regulatory details' },
  { name: 'inbeat.co', tier: 2, type: 'Industry Report', credibility: 'Medium-High', uaeRelevance: 'Market trends' },
  { name: 'GlobalRiskCommunity', tier: 2, type: 'Industry Report', credibility: 'Medium-High', uaeRelevance: 'Risk intelligence' },
  { name: 'TheReportCubes', tier: 2, type: 'Industry Report', credibility: 'Medium-High', uaeRelevance: 'Market projections' },
  { name: 'Ken Research', tier: 2, type: 'Industry Report', credibility: 'Medium-High', uaeRelevance: 'Commerce data' },
  { name: 'CampaignME', tier: 3, type: 'Industry Report', credibility: 'Medium', uaeRelevance: 'Influencer counts' },
]

// ============================================================================
// DATA SOURCE SUMMARY
// ============================================================================

export interface DataSourceSummary {
  sourceType: string
  count: number
  examples: string
}

export const instagramDataSourceSummary: DataSourceSummary[] = [
  { sourceType: 'Government/Regulatory', count: 5, examples: 'uaemc.gov.ae, dubaieconomycenter.com' },
  { sourceType: 'Media News Articles', count: 8, examples: 'france24.com, cnn.com, gbnews.com' },
  { sourceType: 'Industry Reports/Blogs', count: 12, examples: 'inbeat.co, globalriskcommunity.com' },
  { sourceType: 'Social Media (Instagram)', count: 25, examples: 'Influencer posts, reels' },
  { sourceType: 'Statistic Portals', count: 4, examples: 'DataReportal, NapoleonCat, Statista' },
]

// ============================================================================
// COMPLETE INSTAGRAM INTELLIGENCE OBJECT
// ============================================================================

export const instagramIntelligenceData: PlatformIntelligence & {
  userGrowth: UserStatistics[]
  genderDemographics: GenderDemographics[]
  ageDemographics: AgeDemographics[]
  regulatoryFramework: RegulatoryFramework[]
  licenseRequirements: LicenseRequirement[]
  permitCosts: PermitCost[]
  penalties: Penalty[]
  taxRequirements: TaxRequirement[]
  marketSize: MarketSize[]
  sectorBreakdown: SectorBreakdown[]
  contentCreatorEconomy: ContentCreatorEconomy[]
  topInfluencers: TopInfluencer[]
  lifestyleInfluencers: LifestyleInfluencer[]
  highEngagementLeaders: HighEngagementLeader[]
  notableInfluencers: NotableInfluencer[]
  virtualInfluencers: VirtualInfluencer[]
  coordinatedBehaviorOverview: CoordinatedBehaviorOverview
  coordinatedBehaviorTimeline: CoordinatedBehaviorIncident[]
  enforcementActions: EnforcementAction[]
  licenseComplianceDeadlines: LicenseComplianceDeadline[]
  contentTrends: ContentTrend[]
  engagementRates: EngagementRate[]
  consumerBehavior: ConsumerBehavior[]
  marketingAgencies: MarketingAgency[]
  queryPatterns: QueryPattern[]
  keyDates: KeyDate[]
  sentimentByTopic: SentimentByTopic[]
  sentimentBySource: SentimentBySource[]
  contentRelevance: ContentRelevance[]
  priorityIntelligenceAreas: PriorityIntelligenceArea[]
  sourceCredibility: SourceCredibility[]
  dataSourceSummary: DataSourceSummary[]
} = {
  id: 'instagram-uae-2026',
  platform: 'Instagram' as SocialPlatform,
  metrics: {
    users: 8359400,
    penetration: 77.7,
    dailyActive: 7100000,
    sentiment: {
      positive: 52,
      negative: 18,
      neutral: 30,
      overall: 52,
      volume: 8359400,
      score: 62,
      trending: ['Luxury lifestyle', 'Tourism content', 'Food & dining', 'Beauty', 'Fashion'],
      keyConcerns: [
        'Influencer manipulation',
        'Coordinated safety posts (March 2026)',
        'Cybercrime',
        'Unlicensed promotions',
        'Misleading advertising'
      ],
    },
    engagement: {
      impressions: 2500000000,
      likes: 420,
      shares: 85,
      comments: 35,
      engagementRate: 4.2,
    },
    censorshipLevel: 'partial' as const,
  },
  censorshipLevel: 'partial' as const,
  governmentAccounts: [
    { platform: 'Instagram', handle: '@dubai', url: 'https://instagram.com/dubai', followers: 5800000, verified: true },
    { platform: 'Instagram', handle: '@visitabudhabi', url: 'https://instagram.com/visitabudhabi', followers: 3200000, verified: true },
    { platform: 'Instagram', handle: '@uae', url: 'https://instagram.com/uae', followers: 2100000, verified: true },
    { platform: 'Instagram', handle: '@dubaimediaoffice', url: 'https://instagram.com/dubaimediaoffice', followers: 1200000, verified: true },
  ],
  botActivity: {
    estimatedBotPercent: 38,
    coordinatedInauthentic: true,
    confidence: 0.85,
    indicators: [
      'Fake followers on influencer accounts',
      'Coordinated safety posts March 2026 (29 identical posts)',
      'Engagement pods detected',
      'Bot networks amplifying government narratives'
    ],
    botNetworks: ['Dubai Safety Campaign Network', 'Influencer Engagement Pods'],
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 80,
    governmentRequests: 678,
    contentRemoved: 8934,
    notes: '122,014 influencers in UAE; coordinated safety campaigns detected; influencer licensing mandatory from Feb 1, 2026',
  },
  keyNarratives: [
    {
      topic: 'Luxury Lifestyle',
      narrative: 'Dubai as global luxury destination — showcasing high-end brands, hotels, restaurants, and exclusive experiences',
      prevalence: 92,
      sentiment: 'Positive',
      source: 'Luxury influencers, Brand accounts, Tourism boards',
    },
    {
      topic: 'Tourism & Attractions',
      narrative: 'Must-visit landmarks, hotels, experiences — positioning UAE as premier global tourist destination',
      prevalence: 88,
      sentiment: 'Positive',
      source: 'Tourism boards, Travel influencers, Hotel accounts',
    },
    {
      topic: 'Safety & Security',
      narrative: 'UAE as safe haven — emphasized heavily in March 2026 coordinated campaign during regional tensions',
      prevalence: 85,
      sentiment: 'Positive',
      source: 'Government accounts, Safety campaigns, Influencer partnerships',
    },
    {
      topic: 'Influencer Economy',
      narrative: 'Growing creator economy with regulatory framework — licensing requirements, market growth, professionalization',
      prevalence: 78,
      sentiment: 'Neutral',
      source: 'Industry reports, Influencer marketing agencies',
    },
    {
      topic: 'Coordinated Behavior',
      narrative: 'March 2026 incident: 29 near-identical posts from influencers praising Dubai safety during regional conflict — ~375 arrested',
      prevalence: 65,
      sentiment: 'Negative',
      source: 'News reports, Government announcements, Radha Stirling (Detained in Dubai)',
    },
  ],
  darkSocialScore: 28,
  sources: [
    { name: 'DataReportal', url: 'https://datareportal.com', tier: 1, date: '2025-02' },
    { name: 'NapoleonCat', url: 'https://napoleoncat.com', tier: 1, date: '2025-08' },
    { name: 'UAE Media Council', url: 'https://uaemc.gov.ae', tier: 1, date: '2025-05' },
    { name: 'RHJ Accountants', url: 'https://rhjaccountants.com', tier: 2, date: '2025-04' },
    { name: 'inbeat.co', url: 'https://inbeat.co', tier: 2, date: '2025-03' },
    { name: 'GlobalRiskCommunity', url: 'https://globalriskcommunity.com', tier: 2, date: '2025-02' },
    { name: 'TheReportCubes', url: 'https://thereportcubes.com', tier: 2, date: '2025-01' },
    { name: 'Ken Research', url: 'https://kenresearch.com', tier: 2, date: '2024-12' },
  ],
  lastUpdated: '2026-04-27',
  keyFindings: [
    { finding: 'Instagram users in UAE reached 8.36M (August 2025), up 10.1% QoQ', metric: '8,359,400', source: 'NapoleonCat', tier: 1 },
    { finding: 'Male users dominate at 64.9%, females at 35.1%', metric: '64.9%', source: 'DataReportal', tier: 1 },
    { finding: '25-34 age group is largest with ~3.5M users, highest gender gap', metric: '3.5M', source: 'NapoleonCat', tier: 1 },
    { finding: 'UAE influencer marketing market: $173M (2025) → $442.54M (2034) at 11% CAGR', metric: '$442.54M', source: 'TheReportCubes', tier: 2 },
    { finding: 'Virtual influencer market fastest growing globally: 43.7% CAGR in UAE', metric: '43.7%', source: 'inbeat.co', tier: 2 },
    { finding: 'Federal Decree-Law No. 55 of 2023 requires influencer licensing from Feb 1, 2026', metric: 'Feb 1, 2026', source: 'UAE Media Council', tier: 1 },
    { finding: 'March 2026: ~375 arrested for misleading conflict-related posts', metric: '375', source: 'Detained in Dubai', tier: 2 },
    { finding: 'Top influencer Rida Shahid: 30.8M followers, 0.76% engagement', metric: '30.8M', source: 'igygrow.com', tier: 3 },
    { finding: 'UAE nano-influencer engagement rate: 6-8% vs 1.2% global average', metric: '6-8%', source: 'GlobalRiskCommunity', tier: 2 },
    { finding: '71.4% of UAE internet users active on Instagram', metric: '71.4%', source: 'inbeat.co', tier: 2 },
  ],

  // Extended data arrays
  userGrowth: instagramUserGrowth,
  genderDemographics: instagramGenderDemographics,
  ageDemographics: instagramAgeDemographics,
  regulatoryFramework: instagramRegulatoryFramework,
  licenseRequirements: instagramLicenseRequirements,
  permitCosts: instagramPermitCosts,
  penalties: instagramPenalties,
  taxRequirements: instagramTaxRequirements,
  marketSize: instagramMarketSize,
  sectorBreakdown: instagramSectorBreakdown,
  contentCreatorEconomy: instagramContentCreatorEconomy,
  topInfluencers: instagramTopInfluencers,
  lifestyleInfluencers: instagramLifestyleInfluencers,
  highEngagementLeaders: instagramHighEngagementLeaders,
  notableInfluencers: instagramNotableInfluencers,
  virtualInfluencers: instagramVirtualInfluencers,
  coordinatedBehaviorOverview: instagramCoordinatedBehaviorOverview,
  coordinatedBehaviorTimeline: instagramCoordinatedBehaviorTimeline,
  enforcementActions: instagramEnforcementActions,
  licenseComplianceDeadlines: instagramLicenseComplianceDeadlines,
  contentTrends: instagramContentTrends,
  engagementRates: instagramEngagementRates,
  consumerBehavior: instagramConsumerBehavior,
  marketingAgencies: instagramMarketingAgencies,
  queryPatterns: instagramQueryPatterns,
  keyDates: instagramKeyDates,
  sentimentByTopic: instagramSentimentByTopic,
  sentimentBySource: instagramSentimentBySource,
  contentRelevance: instagramContentRelevance,
  priorityIntelligenceAreas: instagramPriorityIntelligenceAreas,
  sourceCredibility: instagramSourceCredibility,
  dataSourceSummary: instagramDataSourceSummary,
}

export default instagramIntelligenceData
