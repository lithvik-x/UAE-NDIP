/**
 * Threads Platform Intelligence Data
 *
 * Comprehensive data extracted from MD file 5-9-threads-results.md
 * Source: 36 sources, Fully Enriched, SSOT (Single Source of Truth)
 * Report compiled: 2026-04-27
 */

import type { SocialPlatform, TierLevel, AlertLevel } from '@/lib/data-loader/types'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ThreadsPlatformOverview {
  launchDate: string
  preorderDate: string
  parentCompany: string
  type: string
  characterLimit: number
  longFormLimit: number
  primaryCompetitor: string
  linkedPlatform: string
  mauGlobal?: number
  dauGlobal?: number
  timeTo100MUsers?: string
  revenue2025?: number
  revenue2026?: number
  engagementRate?: number
  genderSplit?: { male: number; female: number }
  ageDistribution?: Record<string, number>
}

export interface ThreadsMAUGrowth {
  quarter: string
  mau: number
  growth?: string
  label?: string
}

export interface ThreadsDAUGrowth {
  date: string
  dau: number
  source: string
}

export interface ThreadsLaunchMilestone {
  milestone: string
  achievement: string
  timeframe: string
  significance?: string
}

export interface ThreadsFeature {
  category: string
  feature: string
  launchDate: string
  status: string
}

export interface ThreadsPrivacyData {
  dataType: string
  collected: boolean
  details?: string
}

export interface ThreadsPlatformOverlap {
  platform: string
  percentage: number
}

export interface ThreadsUsageHabit {
  metric: string
  value: string
  source: string
}

export interface ThreadsTopAccount {
  rank: number
  account: string
  followers: number
  unit: string
}

export interface ThreadsComparisonMetric {
  metric: string
  threads: string | number
  x: string | number
  source?: string
}

export interface ThreadsEngagementDecline {
  platform: string
  change: string
  source: string
}

export interface ThreadsRevenueMetric {
  metric: string
  value: string | number
  source: string
}

export interface UAEPopulation {
  totalPopulation: number
  urbanPercent: number
  ruralPercent: number
  genderSplit: { female: number; male: number }
  medianAge: number
  mobileConnections: number
  internetUsers: number
  internetPenetration: number
  mobileSpeed: number
  fixedSpeed: number
}

export interface UAEPlatformBreakdown {
  platform: string
  users: string
  reachPercent: number
  yoyChange: string
  change: string
}

export interface ThreadsHashtagStats {
  hashtag: string
  totalThreads: number
  recentThreads: number
  source: string
}

export interface UAEGovernmentAccount {
  entity: string
  twitter: string
  facebook: string
  instagram: string
  youtube: string
  threads: string
}

export interface ThreadsInfluencerStat {
  metric: string
  value: string | number
  source: string
}

export interface ThreadsRegulatoryItem {
  regulation: string
  details: string
  penalty?: string
}

export interface ThreadsNotableAccount {
  handle: string
  followers: number | null
  threads: number | null
  description: string
  sentiment: string
}

export interface ThreadsContentIssue {
  issue: string
  details: string
}

export interface VisitDubaiStats {
  account: string
  followers: number
  threads: number
  verified: boolean
  website: string
  awards: string
}

export interface VisitDubaiContent {
  contentType: string
  example: string
  engagement: string
}

export interface ThreadsOptimalPostingTime {
  day: string
  time: string
  engagement: string
  source?: string
}

export interface ThreadsContentPerformance {
  contentType: string
  performanceVsPictures: string
  advantage: string
}

export interface ThreadsEngagementDriver {
  strategy: string
  impact: string
  source: string
}

export interface UAESpecificStrategy {
  strategy: string
  details: string
  expectedImpact: string
}

export interface SentimentCharacteristic {
  characteristic: string
  description: string
  source: string
}

export interface UAESentimentBreakdown {
  sentiment: string
  count: number
}

export interface ThreadsAPIFeature {
  category: string
  features: string[]
}

export interface ThreadsAPITimeline {
  date: string
  feature: string
  details: string
  status: string
}

export interface Trend2026 {
  trend: string
  description: string
  impact: string
}

export interface ContentFormatTrend {
  format: string
  trend: string
  recommendation: string
}

export interface SourceCredibility {
  source: string
  type: string
  credibility: string
  uaeRelevance: string
}

export interface DataGap {
  gap: string
  impact: string
  recommendation: string
}

export interface MonitoringRecommendation {
  metric: string
  frequency: string
  source: string
}

// ============================================================================
// COMPREHENSIVE THREADS INTELLIGENCE DATA
// ============================================================================

export const threadsData = {
  // --------------------------------------------------------------------------
  // EXECUTIVE SUMMARY
  // --------------------------------------------------------------------------
  executiveSummary: {
    queryCategory: '5.9 Threads',
    enrichmentStatus: 'FULLY ENRICHED',
    ssot: true,
    reportDate: '2026-04-27',
    keyInsights: [
      'Threads reached 400M monthly active users by Q3 2025, surpassing X in daily mobile users as of January 2026',
      'Threads has 893,000 users in UAE (7.8% population reach) - significant growth opportunity',
      'NO official UAE government Threads accounts identified',
      'X (Twitter) remains primary platform for UAE government (2.85M users, declining 6%)',
      '#visitdubai tag has 56M threads; #UAE tag has 6.9M threads',
      'Visit Dubai official account: 556K followers',
      '50,000 influencers based in Dubai, many on Golden Visas',
      'Bilingual (Arabic/English) posts show 20% higher engagement in UAE',
      'Influencer marketing market worth $97M forecast by 2030',
    ],
  },

  // --------------------------------------------------------------------------
  // PART I: PLATFORM OVERVIEW
  // --------------------------------------------------------------------------
  platformOverview: {
    launchDate: 'July 6, 2023',
    preorderDate: 'July 3, 2023',
    parentCompany: 'Meta Platforms (Instagram)',
    type: 'Text-based social media / Conversation platform',
    characterLimit: 500,
    longFormLimit: 10000,
    primaryCompetitor: 'X (formerly Twitter)',
    linkedPlatform: 'Instagram (formerly required, now optional as of May 2025)',
    mauGlobal: 400000000,
    dauGlobal: 141500000,
    timeTo100MUsers: '2 days (fastest in history)',
    revenue2025: 8000000000,
    revenue2026: 11300000000,
    engagementRate: 6.25,
    genderSplit: { male: 57.85, female: 42.15 },
    ageDistribution: { '18-24': 20.36, '25-34': 28.75, '35-44': 19.15, '45+': 25.68 },
  },

  // Platform Features Timeline
  platformFeatures: [
    { category: 'Basic', feature: 'Text posts (500 chars)', launchDate: 'July 2023', status: 'Live' },
    { category: 'Basic', feature: 'Media posts (photos, videos up to 5 min)', launchDate: 'July 2023', status: 'Live' },
    { category: 'Basic', feature: 'Likes, comments, reposts', launchDate: 'July 2023', status: 'Live' },
    { category: 'Basic', feature: 'Link sharing', launchDate: 'July 2023', status: 'Live' },
    { category: 'Basic', feature: 'Public/private profiles', launchDate: 'July 2023', status: 'Live' },
    { category: 'Discovery', feature: 'Trending Topics', launchDate: 'Nov 2023', status: 'Limited (US only initially)' },
    { category: 'Discovery', feature: 'Bookmarks & Drafts', launchDate: '2024', status: 'Live' },
    { category: 'Discovery', feature: 'Starter Packs', launchDate: 'Late 2024', status: 'Live' },
    { category: 'Discovery', feature: 'Communities', launchDate: 'Oct 2025 (US)', status: 'Expanding' },
    { category: 'Discovery', feature: 'Profile Search', launchDate: 'Mar-Sep 2025', status: 'Live' },
    { category: 'Engagement', feature: 'Direct Messaging', launchDate: 'July 2025', status: 'Live (global)' },
    { category: 'Engagement', feature: 'Group Chat (up to 50)', launchDate: 'July 2025', status: 'Live' },
    { category: 'Engagement', feature: 'GIFs/Stickers in DMs', launchDate: 'July 2025', status: 'Live' },
    { category: 'Engagement', feature: 'Interactive Polls', launchDate: '2024', status: 'Live' },
    { category: 'Content', feature: 'Ghost Posts (24hr disappearing)', launchDate: 'Oct-Nov 2025', status: 'Live' },
    { category: 'Content', feature: 'Text formatting (bold, italic, etc.)', launchDate: 'Nov 2024', status: 'Live' },
    { category: 'Content', feature: 'Snippets', launchDate: 'May 2025', status: 'Live' },
    { category: 'Content', feature: 'Music attachment', launchDate: 'Jan 2025', status: 'Live' },
    { category: 'Content', feature: 'Voiceover retake', launchDate: 'Oct 2025', status: 'Live' },
    { category: 'Content', feature: 'AI-powered topic summaries', launchDate: 'Sep 2025', status: 'Live' },
    { category: 'Monetization', feature: 'Threads Ads', launchDate: 'Jan 2025 (test), Apr 2025 (global)', status: 'Live' },
    { category: 'Monetization', feature: 'Video ads', launchDate: '2025', status: 'Rolling out' },
    { category: 'API', feature: 'Post scheduling API', launchDate: 'June 2024', status: 'Live' },
    { category: 'API', feature: 'Enhanced API (webhooks, polls, location)', launchDate: 'Aug 2025', status: 'Live' },
    { category: 'API', feature: 'Standalone accounts (no Instagram)', launchDate: 'May 2025', status: 'Live' },
    { category: 'Safety', feature: 'Reply approvals', launchDate: 'Nov 2025', status: 'Live' },
    { category: 'Safety', feature: 'Hide likes/share counts', launchDate: 'Nov 2025', status: 'Live' },
    { category: 'Safety', feature: 'Time management tools', launchDate: 'Nov 2025', status: 'Live' },
    { category: 'Safety', feature: 'Oversight Board appeals', launchDate: 'Feb 2024', status: 'Live' },
  ] as ThreadsFeature[],

  // Privacy & Data Collection
  privacyData: [
    { dataType: 'Health Data', collected: true },
    { dataType: 'Financial Data', collected: true },
    { dataType: 'Location Data', collected: true },
    { dataType: 'Browsing/Search History', collected: true },
    { dataType: 'Employment Data', collected: true },
    { dataType: 'Account Age', collected: true, details: 'Under 16 (some countries 18) default to private' },
    { dataType: 'GDPR Compliance', collected: false, details: 'EU launch delayed due to GDPR concerns' },
    { dataType: 'Banned Countries', collected: false, details: 'Iran, China' },
    { dataType: 'Temporary Restrictions', collected: false, details: 'Turkey (April 2024 shut down temporarily)' },
    { dataType: 'Oversight Board', collected: true, details: 'Appeals available since February 2024; Board reverses Meta ~80% of time' },
  ] as ThreadsPrivacyData[],

  // --------------------------------------------------------------------------
  // PART II: GLOBAL USER STATISTICS
  // --------------------------------------------------------------------------

  // MAU Growth Timeline
  mauGrowth: [
    { quarter: 'Q3 2023', mau: 100, growth: 'Initial', label: 'Launch' },
    { quarter: 'Q4 2023', mau: 130, growth: '+30M' },
    { quarter: 'Q1 2024', mau: 150, growth: '+20M' },
    { quarter: 'Q2 2024', mau: 150, growth: 'Flat' },
    { quarter: 'Q3 2024', mau: 200, growth: '+50M' },
    { quarter: 'Q4 2024', mau: 275, growth: '+75M' },
    { quarter: 'Dec 2024', mau: 300, growth: '+25M', label: 'Hootsuite' },
    { quarter: 'Q1 2025', mau: 305, growth: '+30M' },
    { quarter: 'Q2 2025', mau: 350, growth: '+45M' },
    { quarter: 'Aug 2025', mau: 400, growth: '+50M', label: 'TechCrunch, Backlinko' },
    { quarter: 'Q3 2025', mau: 400, growth: 'Stable', label: 'Meta announcement' },
  ] as ThreadsMAUGrowth[],

  // DAU Growth Timeline
  dauGrowth: [
    { date: 'December 2024', dau: 100, source: 'Meta announcement' },
    { date: 'June 2025', dau: 115.1, source: 'Similarweb' },
    { date: 'September 2025', dau: 130.2, source: 'Meta (first time surpassing X)' },
    { date: 'October 2025', dau: 150, source: 'Meta announcement' },
    { date: 'January 7, 2026', dau: 141.5, source: 'Similarweb (mobile only)' },
  ] as ThreadsDAUGrowth[],

  // Historic Launch Records
  launchRecords: [
    { milestone: 'Fastest app growth', achievement: '100 million users', timeframe: '5 days', significance: 'Fastest in app history' },
    { milestone: 'Initial sign-ups', achievement: '2 million', timeframe: '2 hours' },
    { milestone: 'Initial sign-ups', achievement: '5 million', timeframe: '4 hours' },
    { milestone: 'Initial sign-ups', achievement: '10 million', timeframe: '7 hours' },
    { milestone: 'Initial sign-ups', achievement: '20 million', timeframe: '12 hours' },
    { milestone: 'Initial sign-ups', achievement: '30 million', timeframe: '16 hours' },
    { milestone: 'Initial sign-ups', achievement: '70 million', timeframe: '2 days' },
    { milestone: 'Initial sign-ups', achievement: '90 million', timeframe: '4 days' },
    { milestone: 'Initial sign-ups', achievement: '100 million', timeframe: '5 days', significance: 'Surpassed ChatGPT (2 months)' },
  ] as ThreadsLaunchMilestone[],

  // Comparison to other platforms reaching 100M users
  platform100MComparison: [
    { platform: 'Threads', time: '2 days', note: '(fastest)' },
    { platform: 'ChatGPT', time: '2 months' },
    { platform: 'TikTok', time: '9 months' },
    { platform: 'Twitter', time: '60 months' },
  ],

  // Age Distribution (Global)
  ageDistribution: [
    { ageGroup: '18-24', percentage: 20.36, source: 'Buffer' },
    { ageGroup: '25-34', percentage: 28.75, source: 'Buffer', note: 'largest' },
    { ageGroup: '35-44', percentage: 19.15, source: 'Buffer' },
    { ageGroup: '45+', percentage: 25.68, source: 'Buffer' },
  ],

  // Gender Distribution
  genderDistribution: [
    { gender: 'Male', percentage: 57.85, source: 'Buffer' },
    { gender: 'Female', percentage: 42.15, source: 'Buffer' },
    { gender: 'Male', percentage: 68, source: 'The Social Shepherd' },
    { gender: 'Female', percentage: 32, source: 'The Social Shepherd' },
  ],

  // Geographic Distribution
  geographicDistribution: [
    { country: 'Armenia', percentOfGlobal: 48.26, mobileUsage: 'All desktop access', source: 'The Social Shepherd' },
    { country: 'United States', percentOfGlobal: 17.32, mobileUsage: 'All mobile', source: 'The Social Shepherd' },
    { country: 'Germany', percentOfGlobal: 7.91, mobileUsage: '94.29% mobile', source: 'The Social Shepherd' },
    { country: 'Vietnam', percentOfGlobal: 5.23, mobileUsage: 'N/A', source: 'The Social Shepherd' },
    { country: 'Philippines', percentOfGlobal: 5.07, mobileUsage: 'N/A', source: 'The Social Shepherd' },
    { country: 'India', percentOfGlobal: 0, mobileUsage: '54.2M users', source: 'DemandSage' },
    { country: 'Brazil', percentOfGlobal: 0, mobileUsage: '36.4M users', source: 'DemandSage' },
    { country: 'US', percentOfGlobal: 0, mobileUsage: '26.1M users', source: 'DemandSage' },
  ],

  // Platform Overlap
  platformOverlap: [
    { platform: 'Facebook', percentage: 70 },
    { platform: 'Instagram', percentage: 96 },
    { platform: 'YouTube', percentage: 55 },
    { platform: 'Instagram (active)', percentage: 51 },
  ] as ThreadsPlatformOverlap[],

  // Usage Habits
  usageHabits: [
    { metric: 'Avg time spent per month (Android)', value: '34 minutes', source: 'The Social Shepherd' },
    { metric: 'Time spent increase (May-Aug 2024)', value: '50%', source: 'The Social Shepherd' },
    { metric: 'App opens per month', value: '~20 times', source: 'Buffer' },
    { metric: 'Days per month app opened', value: '23.9% of days', source: 'Buffer' },
    { metric: 'Avg session duration', value: '1 min 41 sec', source: 'Adam Connell' },
    { metric: '% of posts that are text-only', value: '63%', source: 'Adam Connell' },
    { metric: 'Topic Tags created', value: '50M+', source: 'Adam Connell' },
  ] as ThreadsUsageHabit[],

  // Top Followed Accounts (Global)
  topAccounts: [
    { rank: 1, account: 'Neymar Jr', followers: 22.7, unit: 'M' },
    { rank: 2, account: 'Selena Gomez', followers: 20.1, unit: 'M' },
    { rank: 3, account: 'Kylie Jenner', followers: 17.9, unit: 'M' },
    { rank: 4, account: 'Kim Kardashian', followers: 16.4, unit: 'M' },
    { rank: 5, account: 'Jennifer Lopez', followers: 15.1, unit: 'M' },
    { rank: 6, account: 'Taylor Swift', followers: 14.4, unit: 'M' },
  ] as ThreadsTopAccount[],

  metaAccount: {
    handle: '@meta',
    followers: 1700000,
    threads: 451,
  },

  // --------------------------------------------------------------------------
  // PART III: PLATFORM COMPARISON
  // --------------------------------------------------------------------------

  // Threads vs X Comparison
  threadsVsX: [
    { metric: 'Monthly Active Users', threads: '400 million (Q3 2025)', x: '550-611 million' },
    { metric: 'Daily Active Users', threads: '141.5-150 million', x: '125-132 million' },
    { metric: 'Daily Mobile Users', threads: '141.5 million', x: '125 million' },
    { metric: 'Daily Web Visits', threads: '8.5 million', x: '145.4 million' },
    { metric: 'Character Limit', threads: '500 (10,000 in long-form)', x: '280' },
    { metric: 'Media per Post', threads: '10', x: '4' },
    { metric: 'Verification', threads: 'Via Instagram ($0)', x: 'Paid ($8/month)' },
    { metric: 'Decentralized', threads: 'Fediverse integration', x: 'No' },
    { metric: 'Trending Topics', threads: 'US only initially, now expanded', x: 'Yes' },
    { metric: 'Direct Messaging', threads: 'Yes (since July 2025)', x: 'Yes' },
    { metric: 'Year-over-Year DAU Growth', threads: '+127.8% (June 2025)', x: 'declining' },
    { metric: 'Engagement Rate (Median)', threads: '6.25%', x: '3.6%' },
    { metric: 'Avg Engagements per Post', threads: '58', x: '328' },
  ] as ThreadsComparisonMetric[],

  threadsAdvantage: '73.6% higher engagement rate than X',

  // Engagement Decline (2025)
  engagementDecline: [
    { platform: 'Instagram', change: '-21%', source: 'Social Media Today' },
    { platform: 'LinkedIn', change: '-30%', source: 'Social Media Today' },
    { platform: 'Threads', change: '-42%', source: 'Social Media Today' },
    { platform: 'Facebook', change: '-9%', source: 'Social Media Today' },
    { platform: 'X', change: '-8%', source: 'Social Media Today' },
    { platform: 'TikTok', change: '-5%', source: 'Social Media Today' },
  ] as ThreadsEngagementDecline[],

  // Revenue & Ad Statistics
  revenueStats: [
    { metric: 'CPM (Cost per 1000 impressions)', value: '$5-$10', source: 'The Social Shepherd' },
    { metric: 'RPM (Revenue per 1000 impressions)', value: '~$15 average', source: 'The Social Shepherd' },
    { metric: '2023 Revenue', value: '$0.8 billion', source: 'DemandSage' },
    { metric: '2024 Revenue', value: '$4.5 billion', source: 'DemandSage' },
    { metric: '2025 Revenue (Projected)', value: '$8 billion', source: 'Evercore ISI' },
    { metric: '2026 Revenue (Projected)', value: '$11.3 billion', source: 'Evercore ISI' },
  ] as ThreadsRevenueMetric[],

  // --------------------------------------------------------------------------
  // PART IV: UAE-SPECIFIC STATISTICS
  // --------------------------------------------------------------------------

  // UAE Population & Connectivity
  uaePopulation: {
    totalPopulation: 11400000,
    urbanPercent: 88.3,
    ruralPercent: 11.7,
    genderSplit: { female: 36.3, male: 63.7 },
    medianAge: 31.6,
    mobileConnections: 23000000,
    internetUsers: 11300000,
    internetPenetration: 99.0,
    mobileSpeed: 614.42,
    fixedSpeed: 327.56,
  } as UAEPopulation,

  // UAE Social Media Platform Breakdown
  uaePlatformBreakdown: [
    { platform: 'TikTok', users: '12.5M', reachPercent: 110, yoyChange: '+16.7%', change: '+1.79M' },
    { platform: 'LinkedIn', users: '10.0M', reachPercent: 87.6, yoyChange: '+11.1%', change: '+1.0M' },
    { platform: 'Facebook', users: '9.70M', reachPercent: 85.0, yoyChange: '+7.2%', change: '+650K' },
    { platform: 'YouTube', users: '8.37M', reachPercent: 73.3, yoyChange: '+1.5%', change: '+120K' },
    { platform: 'Instagram', users: '8.05M', reachPercent: 70.5, yoyChange: '+16.7%', change: '+1.15M' },
    { platform: 'Snapchat', users: '5.13M', reachPercent: 44.9, yoyChange: '+5.0%', change: '+245K' },
    { platform: 'Messenger', users: '5.65M', reachPercent: 49.5, yoyChange: 'Unchanged', change: '0' },
    { platform: 'Reddit', users: '2.45M', reachPercent: 21.5, yoyChange: '+188%', change: '+1.6M' },
    { platform: 'X (Twitter)', users: '2.85M', reachPercent: 25.0, yoyChange: '-6.0%', change: '-183K' },
    { platform: 'Threads', users: '893K', reachPercent: 7.8, yoyChange: 'N/A', change: '—' },
  ] as UAEPlatformBreakdown[],

  // UAE Threads Hashtag Statistics
  hashtagStats: [
    { hashtag: '#UAE', totalThreads: 6800000, recentThreads: 28000, source: 'Threads.com' },
    { hashtag: '#visitdubai', totalThreads: 56000000, recentThreads: 361000, source: 'Threads.com' },
  ] as ThreadsHashtagStats[],

  hashtagInsight: '#visitdubai has 8x more threads than #UAE, indicating tourism is the dominant UAE conversation on Threads',

  // UAE Statistics (combined for page compatibility)
  uaeStatistics: {
    population: 11400000,
    threadsUsers: 893000,
    threadsPenetration: 7.8,
    xUsers: 2850000,
    xPenetration: 25.0,
    xDecline: -6.0,
    hashtagUaeTotal: 6900000,
    hashtagUaeRecent: 28000,
    hashtagVisitDubaiTotal: 56000000,
    hashtagVisitDubaiRecent: 361000,
    bilingualEngagementBoost: 20,
    dubaiInfluencers: 50000,
    influencerMarket2030: 97000000,
  },

  // UAE Meta Demographic Profile
  uaeMetaDemographic: {
    platformWithHighestReach: 'Combined Facebook + Instagram + Messenger',
    highestReachDemographic: 'Men aged 25-34',
    genderSkew: '67.1% male, 32.9% female (overall social media)',
    bilingualEngagementBoost: '+20% higher engagement (Arabic + English)',
    note: 'Detailed age/gender breakdown for Threads specifically in UAE is behind Statista paywall',
  },

  // UAE X (Twitter) Market Share
  uaeXMarketShare: {
    xUsersInUAE: 2850000,
    populationReach: 25.0,
    yoyGrowth: '-6.0% decline',
    annualDecline: '-183,000 users',
  },

  // --------------------------------------------------------------------------
  // PART V: UAE GOVERNMENT & OFFICIAL ACCOUNTS
  // --------------------------------------------------------------------------

  // Critical Finding: NO official UAE government Threads accounts
  criticalFindingGovAccounts: 'NO official UAE government Threads accounts identified. UAE government entities are evaluated annually under Digital Government Indicators requiring social media presence, but Threads is NOT yet included in official requirements.',

  // UAE Government Social Media Accounts (showing NO Threads presence)
  uaeGovernmentAccounts: [
    { entity: 'H.H. Sheikh Mohammed Bin Rashid Al Maktoum', twitter: 'Yes', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'H.H. Sheikh Mohammed Bin Zayed Al Nahyan', twitter: 'Yes', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'UAE Government Media Office', twitter: 'Yes (@UAEmediaoffice)', facebook: '-', instagram: '-', youtube: '-', threads: 'NO' },
    { entity: 'TDRA', twitter: 'Yes (@tdrauae)', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'Abu Dhabi Digital Government (TAMM)', twitter: 'Yes (@Abudhabi_tamm)', facebook: '-', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'Digital Dubai', twitter: 'Yes (@DigitalDubai)', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'Department of Digital Ajman', twitter: 'Yes', facebook: '-', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'Sharjah Digital Department', twitter: 'Yes', facebook: '-', instagram: '-', youtube: '-', threads: 'NO' },
    { entity: 'RAK eGovernment', twitter: 'Yes', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'Fujairah eGovernment', twitter: '-', facebook: '-', instagram: 'Yes', youtube: '-', threads: 'NO' },
    { entity: 'UAE SDGs & Year of Community', twitter: 'Yes', facebook: 'Yes', instagram: 'Yes', youtube: '-', threads: 'NO' },
  ] as UAEGovernmentAccount[],

  // --------------------------------------------------------------------------
  // PART VI: UAE INFLUENCER LANDSCAPE
  // --------------------------------------------------------------------------

  influencerStats: [
    { metric: 'Total influencers in Dubai', value: '50,000', source: 'CNN, The Atlantic' },
    { metric: 'Golden Visa availability', value: 'Yes (10-year visa for content creators)', source: 'CNN' },
    { metric: 'Permit requirement', value: 'Yes, to legally operate in Dubai', source: 'CNN' },
    { metric: 'VAT on taxable income', value: '5%', source: 'CNN' },
    { metric: 'Influencer Advertising Market (2030)', value: '$97 million forecast', source: 'CNN' },
    { metric: 'License system', value: 'Introduced in 2026', source: 'CNN' },
  ] as ThreadsInfluencerStat[],

  // UAE Regulatory Context
  regulatoryContext: [
    { regulation: 'UAE Cybercrime Law', details: 'Federal Decree-Law No. 34 of 2021', penalty: 'Varies' },
    { regulation: 'Spreading rumors', details: 'Prohibited', penalty: 'Up to Dh200,000 fine + imprisonment' },
    { regulation: 'Influencer License', details: 'Required (2026)', penalty: 'Operating without license = violation' },
    { regulation: 'Golden Visa', details: '10-year visa for content creators', penalty: 'N/A' },
    { regulation: 'Permit System', details: 'Required to legally operate as influencer', penalty: 'N/A' },
  ] as ThreadsRegulatoryItem[],

  // Notable UAE-Based Threads Accounts
  notableUAAccounts: [
    { handle: '@ahmedalhosaniofficial', followers: 3524, threads: 116, description: "UAE's First Classical Singer; International performer", sentiment: 'Positive' },
    { handle: '@waleedmalblooshi', followers: null, threads: 47, description: 'Abu Dhabi; Smart mobility/EV focus (#Autogo, #RoboTaxi, #EVIS2025)', sentiment: 'Neutral' },
    { handle: '@danaemercer', followers: null, threads: null, description: 'Journalist; expat influencer perspective on Dubai', sentiment: 'Mixed' },
    { handle: '@laurabtlrr', followers: 119400, threads: 162, description: 'French in UAE; Automotive/Lifestyle content creator', sentiment: 'Positive' },
    { handle: '@moynislam', followers: null, threads: 51, description: 'Creating Brands; "The UAE is not just a place, it\'s people, love, and opportunities"', sentiment: 'Positive' },
    { handle: '@rahul______gk', followers: null, threads: null, description: 'Dubai explorer; #uae #dubai #uae content', sentiment: 'Neutral' },
    { handle: '@pushagencyglobal', followers: 52, threads: 10, description: 'Dubai-based marketing, branding, and production agency', sentiment: 'Neutral/Business' },
  ] as ThreadsNotableAccount[],

  // Dubai Influencer Content Issues (March 2026)
  influencerContentIssues: [
    { issue: 'Golden Visa marketing', details: '"Expat influencers on golden visas are part of Dubai\'s marketing arm - posting an aspirational version of the city to millions"' },
    { issue: 'Criticism suppression', details: 'Influencers being "silenced from criticising \'safest country in the world\'"' },
    { issue: 'Government directives', details: 'Reports of "strict directive targeting social media influencers operating in Dubai"' },
    { issue: 'Coordinated messaging', details: 'Multiple influencers posting identical messages insisting city is safe during regional tensions' },
    { issue: 'Content observation', details: '"The UAE government made you post this" claims' },
  ] as ThreadsContentIssue[],

  influencerSentimentIssue: 'Negative (reveals concerns about authenticity and government influence)',

  // Influencer Migration Observations
  influencerMigration: {
    massMigrationEvidence: 'NONE - No evidence of mass migration from X to Threads',
    primaryPlatform: 'X (Twitter) remains primary for UAE government communications',
    multiPlatform: 'Dubai influencers maintain presence on both X and Threads',
    contentApproach: 'Threads used alongside Instagram for lifestyle content',
    march2026Incident: 'Criticism of influencer "propaganda" during regional tensions',
  },

  // --------------------------------------------------------------------------
  // PART VII: OFFICIAL TOURISM & BUSINESS ACCOUNTS
  // --------------------------------------------------------------------------

  visitDubaiStats: {
    account: '@visit.dubai',
    followers: 556400,
    threads: 471,
    verified: true,
    website: 'visitdubai.com',
    awards: '#1 Most Popular Destination - TripAdvisor Travellers\' Choice Awards 2022 & 2023',
  } as VisitDubaiStats,

  visitDubaiRecentContent: [
    { contentType: 'Wildlife imagery', example: '"Soft steps, watchful eyes..."', engagement: '21 likes' },
    { contentType: 'Engagement prompts', example: '"Hidden Dubai spots" question', engagement: '12 likes, 2 comments' },
    { contentType: 'Resort promotion', example: 'Anantara Dubai resort', engagement: '21 likes, 3 comments, 1 repost' },
    { contentType: 'Events', example: 'Global Village 30th season reopening', engagement: '16 likes, 2 comments, 1 repost' },
  ] as VisitDubaiContent[],

  visitDubaiContentFrequency: 'Posts typically receive 12-21 likes, 2-3 comments, occasional reposts',

  // Other UAE Tourism Accounts
  otherTourismAccounts: [
    { account: '@dubai.travelers', followers: null, threads: null, description: 'Travel tips and deals for Dubai' },
    { account: '@dubaiconfidential', followers: 6400, threads: 65, description: 'Discovering secrets and latest happenings across UAE' },
  ],

  // --------------------------------------------------------------------------
  // PART VIII: ENGAGEMENT & CONTENT STRATEGY
  // --------------------------------------------------------------------------

  // Optimal Posting Times (Global)
  optimalPostingTimes: [
    { day: 'Wednesday', time: '7 AM', engagement: 'Highest', source: 'Buffer' },
    { day: 'Tuesday-Friday', time: '7-9 AM', engagement: 'Strong', source: 'Buffer' },
    { day: 'Friday', time: '8 AM', engagement: 'High', source: 'Hootsuite' },
    { day: 'Sunday', time: 'Any', engagement: 'Lowest', source: 'Buffer' },
  ] as ThreadsOptimalPostingTime[],

  // Content Performance
  contentPerformance: [
    { contentType: 'Pictures', performanceVsPictures: 'Baseline', advantage: '+37% vs links, +60% vs text' },
    { contentType: 'Videos', performanceVsPictures: '-0.6% vs pictures', advantage: 'Slightly lower' },
    { contentType: 'Text-only posts', performanceVsPictures: '-60% vs pictures', advantage: 'Significantly lower' },
    { contentType: 'Link posts', performanceVsPictures: '-37% vs pictures', advantage: 'Lower' },
  ] as ThreadsContentPerformance[],

  contentInsight: "Visual content (pictures) outperforms all other formats despite Threads being text-first positioned",

  // Engagement Driver Analysis
  engagementDrivers: [
    { strategy: 'Reply to comments', impact: '+42% engagement on Threads', source: 'Social Media Today' },
    { strategy: 'Short posts (<150 chars)', impact: 'High performance', source: 'Labeeb.ae' },
    { strategy: 'Questions', impact: 'Drive engagement', source: 'Labeeb.ae' },
    { strategy: 'Behind-the-scenes content', impact: 'Effective', source: 'Buffer' },
    { strategy: 'Authenticity over virality', impact: 'Platform values', source: 'Buffer' },
  ] as ThreadsEngagementDriver[],

  // UAE-Specific Content Strategy
  uaeContentStrategy: [
    { strategy: 'Bilingual posts', details: 'Mix Arabic and English naturally', expectedImpact: '+20% higher engagement' },
    { strategy: 'Short opinionated posts', details: 'Under 150 characters', expectedImpact: 'High performance' },
    { strategy: 'Q&A sessions', details: 'Conversation-building', expectedImpact: 'Strong engagement' },
    { strategy: 'Behind-the-scenes', details: 'Humanizes brand', expectedImpact: 'Effective' },
    { strategy: 'Tourism/lifestyle content', details: 'High activity in UAE on Threads', expectedImpact: 'Active engagement' },
    { strategy: 'Cross-platform integration', details: 'Pair Threads with Instagram', expectedImpact: 'Full funnel approach' },
  ] as UAESpecificStrategy[],

  // Case Study
  dubaiLifestyleBrandCaseStudy: {
    brand: 'Dubai-based lifestyle brand',
    timeline: 'Adopted Threads in late 2025',
    results: {
      organicReachGrowth: '500%',
      engagementVsInstagram: '4x higher',
      timeframe: 'Within 3 months',
    },
  },

  // --------------------------------------------------------------------------
  // PART IX: SENTIMENT ANALYSIS
  // --------------------------------------------------------------------------

  // Platform Sentiment Characteristics
  sentimentCharacteristics: [
    { characteristic: 'Algorithm priority', description: '"Meaningful interactions over viral reach"', source: 'Buffer' },
    { characteristic: 'Authenticity', description: '"Authenticity outperforms algorithms"', source: 'Buffer' },
    { characteristic: 'Growth pattern', description: '"Conversation-driven content with predictable growth" vs X\'s volatility', source: 'Buffer' },
    { characteristic: 'Rewards', description: 'Regular posting and community engagement', source: 'Buffer' },
    { characteristic: 'March 2026 UAE', description: 'Coordinated pro-UAE messaging from influencers during regional tensions', source: 'Threads/@theipaper' },
  ] as SentimentCharacteristic[],

  // Academic Research on UAE/Arabic Sentiment
  academicSentimentResearch: {
    study: 'Arabic Sentiment Analysis (ASA)',
    focus: 'Significant academic focus on Middle Eastern social media sentiment',
    methodology: 'Machine Learning + SMOTE',
  },

  uaeTwitterSentiment: {
    finding: 'People tend toward neutral sentiment',
    sampleSize: '2,491 UAE tweets studied',
    breakdown: [
      { sentiment: 'Neutral', count: 2491 },
      { sentiment: 'Positive', count: 2140 },
      { sentiment: 'Negative', count: 2076 },
    ] as UAESentimentBreakdown[],
  },

  gulfRegionSentiment: 'Most countries showed negative sentiment during pandemic (Saudi, Kuwait, Oman, Bahrain)',

  // Sentiment Summary by Context
  sentimentByContext: [
    { context: 'Tourism content (#visitdubai)', sentiment: 'Strongly Positive', notes: 'Promotional, aspirational' },
    { context: 'Government accounts', sentiment: 'Neutral to Positive', notes: 'Formal, informational' },
    { context: 'Influencer content', sentiment: 'Mixed', notes: 'Some authentic, some coordinated' },
    { context: 'Regional tensions (March 2026)', sentiment: 'Forcibly Positive', notes: 'Coordinated messaging concerns' },
    { context: 'Business/brand content', sentiment: 'Positive', notes: 'Engagement-focused' },
    { context: 'Expat perspectives', sentiment: 'Mixed to Negative', notes: 'Some criticism of influencer culture' },
  ],

  // --------------------------------------------------------------------------
  // PART X: API & TECHNICAL FEATURES
  // --------------------------------------------------------------------------

  // Threads API Capabilities
  apiCapabilities: [
    { category: 'Publishing', features: ['Single thread posts', 'Carousel posts', 'Media handling', 'Ghost posts (24hr disappearing)', 'Text up to 10,000 characters', 'GIF support', 'Spoiler tags'] },
    { category: 'Management', features: ['Delete posts', 'Reply moderation', 'Reply approvals'] },
    { category: 'Discovery', features: ['Keyword search', 'Profile search', 'Public post retrieval', 'Date range search', 'Topic tags', 'Location tagging'] },
    { category: 'Analytics', features: ['Engagement metrics', 'Insights integration', 'Real-time webhooks'] },
    { category: 'Integration', features: ['oEmbed (tokenless for public posts)', 'Web Intents', 'Instagram cross-posting', 'Instagram Stories sharing'] },
  ] as ThreadsAPIFeature[],

  // API Availability Timeline
  apiTimeline: [
    { date: 'June 2024', feature: 'Initial API launch', details: 'Post scheduling focus', status: 'completed' },
    { date: 'July 2025', feature: 'Enhanced API', details: 'Location, polls, topic tags, delete, search', status: 'completed' },
    { date: 'September 2025', feature: 'Profile search', details: 'Without linked Instagram requirement', status: 'completed' },
    { date: 'May 2025', feature: 'Standalone accounts', details: 'No Instagram required', status: 'completed' },
    { date: 'December 2025', feature: 'Link limit', details: 'Posts with 5+ links will fail', status: 'active' },
  ] as ThreadsAPITimeline[],

  // --------------------------------------------------------------------------
  // PART XI: EMERGING TRENDS (2026)
  // --------------------------------------------------------------------------

  // UAE Social Media Trends
  uaeSocialMediaTrends: [
    { trend: 'Humanization of Branding', description: 'Speaking WITH audiences, team stories, humor, authenticity', impact: 'High' },
    { trend: 'AI-Driven Content', description: 'Personalized Arabic-English targeting, predictive analytics, smart scheduling', impact: 'High' },
    { trend: 'Micro-Influencers', description: 'Shift from celebrity to micro/nano for higher engagement, lower cost', impact: 'Medium-High' },
    { trend: 'Bilingual Storytelling', description: 'Arabic regaining power; translate emotion not just text', impact: 'High' },
    { trend: 'Vertical Video', description: '15-30 second reels with bilingual on-screen text', impact: 'High' },
    { trend: 'Social Commerce', description: 'Instagram Shops with bilingual listings, TikTok Shop expansion', impact: 'Medium' },
    { trend: 'Sustainability Focus', description: 'Alignment with UAE Vision 2031 goals', impact: 'Medium' },
    { trend: 'Arabic Podcasting', description: '3x yearly growth, reaching Emirati and expat audiences', impact: 'Medium' },
    { trend: 'Metaverse Integration', description: '3D launches, virtual real estate walkthroughs, AR storytelling', impact: 'Low-Medium' },
  ] as Trend2026[],

  // Content Format Trends
  contentFormatTrends: [
    { format: 'Images', trend: 'Outperform all formats', recommendation: 'Prioritize visual content' },
    { format: 'Short-form video', trend: 'High engagement', recommendation: '15-30 second bilingual reels' },
    { format: 'Text-only', trend: 'Underperforming', recommendation: 'Add visual elements' },
    { format: 'Links', trend: 'Low engagement', recommendation: 'Minimize link posts' },
    { format: 'Polls', trend: 'Interactive', recommendation: 'Use for engagement boost' },
    { format: 'Q&A/Questions', trend: 'High engagement', recommendation: 'Drive conversation' },
  ] as ContentFormatTrend[],

  // --------------------------------------------------------------------------
  // PART XII: KEY FINDINGS SUMMARY
  // --------------------------------------------------------------------------

  // Platform Overview Summary
  platformSummary: {
    launchDate: 'July 6, 2023',
    parentCompany: 'Meta Platforms (Instagram)',
    currentMAU: '400 million (Q3 2025)',
    currentDAU: '141.5-150 million (2025-2026)',
    characterLimit: '500 (10,000 long-form)',
    timeTo100MUsers: '2 days (fastest in history)',
    revenue2025: 'Projected $8 billion',
    revenue2026: 'Projected $11.3 billion',
  },

  // UAE-Specific Summary
  uaeSummary: {
    threadsUsersInUAE: 893000,
    penetration: '7.8%',
    uaeTagTotal: '6.8M threads',
    uaeTagRecent: '28K recent',
    visitDubaiTagTotal: '56M threads',
    visitDubaiTagRecent: '361K recent',
    visitDubaiFollowers: 556400,
    officialUAEGovThreads: 'NONE identified',
    xUsersInUAE: 2850000,
    xDecline: '-6%',
    dubaiInfluencers: 50000,
    bilingualEngagementBoost: '+20%',
  },

  // Competitive Position Summary
  competitiveSummary: [
    { metric: 'Daily Mobile Users', threads: '141.5M', x: '125M', advantage: 'Threads +13.2%' },
    { metric: 'Monthly Active Users', threads: '400M', x: '550-611M', advantage: 'X still ahead' },
    { metric: 'Engagement Rate', threads: '6.25%', x: '3.6%', advantage: 'Threads +73.6%' },
    { metric: 'UAE Users', threads: '893K', x: '2.85M', advantage: 'X ahead in UAE' },
    { metric: 'UAE Growth', threads: 'N/A', x: '-6%', advantage: 'X declining' },
  ],

  // --------------------------------------------------------------------------
  // PART XIII: SOURCE CREDIBILITY ASSESSMENT
  // --------------------------------------------------------------------------

  sourceCredibility: [
    { source: 'DataReportal', type: 'Research firm', credibility: 'High', uaeRelevance: 'Direct UAE data' },
    { source: 'Buffer', type: 'Social media management', credibility: 'High', uaeRelevance: 'Engagement research' },
    { source: 'The Social Shepherd', type: 'Social media research', credibility: 'High', uaeRelevance: 'Global stats' },
    { source: 'TechCrunch', type: 'Tech journalism', credibility: 'High', uaeRelevance: 'Industry news' },
    { source: 'Meta (Official)', type: 'Platform owner', credibility: 'High', uaeRelevance: 'Definitive' },
    { source: 'Labeeb.ae', type: 'UAE marketing agency', credibility: 'Medium-High', uaeRelevance: 'Direct UAE insights' },
    { source: 'Similarweb', type: 'Analytics firm', credibility: 'High', uaeRelevance: 'Traffic data' },
    { source: 'Backlinko', type: 'SEO tools', credibility: 'Medium', uaeRelevance: 'User statistics' },
    { source: 'Adam Connell', type: 'Industry analyst', credibility: 'Medium', uaeRelevance: 'Trend analysis' },
    { source: 'Hootsuite', type: 'Social media management', credibility: 'High', uaeRelevance: 'Industry research' },
    { source: 'CNN', type: 'News organization', credibility: 'High', uaeRelevance: 'Event coverage' },
    { source: 'The Atlantic', type: 'News organization', credibility: 'High', uaeRelevance: 'Analysis' },
    { source: 'Academic (PMC/Arxiv)', type: 'Peer-reviewed', credibility: 'Very High', uaeRelevance: 'Sentiment research' },
    { source: 'Reddit', type: 'User-generated', credibility: 'Low-Medium', uaeRelevance: 'Anonymity issues' },
    { source: 'Threads.com', type: 'Platform', credibility: 'High', uaeRelevance: 'Direct data' },
  ] as SourceCredibility[],

  dataFreshness: [
    { dataType: 'User numbers', freshness: 'Q3 2025 (8 months old)', concern: 'Acceptable' },
    { dataType: 'UAE platform stats', freshness: '2026 (current)', concern: 'Fresh' },
    { dataType: 'Engagement rates', freshness: '2025-2026', concern: 'Fresh' },
    { dataType: 'Feature timeline', freshness: 'April 2026', concern: 'Very fresh' },
    { dataType: 'Influencer numbers', freshness: 'March 2026', concern: 'Fresh' },
  ],

  // --------------------------------------------------------------------------
  // PART XIV: DATA GAPS & RECOMMENDATIONS
  // --------------------------------------------------------------------------

  identifiedDataGaps: [
    { gap: 'UAE Threads demographic breakdown', impact: 'High', recommendation: 'Subscribe to Statista premium' },
    { gap: 'UAE Threads gender split', impact: 'High', recommendation: 'Commission primary research' },
    { gap: 'UAE Threads daily active users', impact: 'Medium', recommendation: 'Use Similarweb UAE data' },
    { gap: 'Official Threads government accounts', impact: 'Low', recommendation: 'Monitor quarterly' },
    { gap: 'UAE influencer income data', impact: 'Medium', recommendation: 'Industry reports' },
    { gap: 'Authentic vs coordinated content', impact: 'High', recommendation: 'Qualitative research' },
  ] as DataGap[],

  monitoringRecommendations: [
    { metric: 'Threads UAE users', frequency: 'Quarterly', source: 'DataReportal' },
    { metric: '#visitdubai growth', frequency: 'Monthly', source: 'Threads.com' },
    { metric: '#UAE tag activity', frequency: 'Monthly', source: 'Threads.com' },
    { metric: 'Government adoption', frequency: 'Quarterly', source: 'Manual check' },
    { metric: 'Influencer trends', frequency: 'Monthly', source: 'CNN, Atlantic' },
    { metric: 'Platform features', frequency: 'Monthly', source: 'Meta announcements' },
  ] as MonitoringRecommendation[],

  // --------------------------------------------------------------------------
  // ALL SOURCES
  // --------------------------------------------------------------------------

  allSources: [
    { id: 1, url: 'https://www.threads.com/tag/UAE', contentSummary: '6.9M threads with #UAE tag', credibility: 'Direct (Platform)' },
    { id: 2, url: 'https://www.threads.com/tag/visitdubai', contentSummary: '56M threads with #visitdubai tag', credibility: 'Direct (Platform)' },
    { id: 3, url: 'https://www.threads.com/@visit.dubai', contentSummary: '556K followers, tourism content, recent posts about wildlife, resorts, Global Village', credibility: 'Direct (Platform)' },
    { id: 4, url: 'https://techcrunch.com/2026/01/18/threads-edges-out-x-in-daily-mobile-users-new-data-shows/', contentSummary: '141.5M DAU surpassing X\'s 125M mobile, 127.8% YoY growth', credibility: 'High' },
    { id: 5, url: 'https://thesocialshepherd.com/blog/threads-statistics', contentSummary: '400M MAU, 68% male, CPM $5-10, revenue $11.3B forecast', credibility: 'High' },
    { id: 6, url: 'https://backlinko.com/threads-users', contentSummary: '400M MAU, 115.1M DAU, top accounts', credibility: 'Medium-High' },
    { id: 7, url: 'https://buffer.com/resources/threads-stats/', contentSummary: '6.25% engagement rate, optimal posting times, demographics', credibility: 'High' },
    { id: 8, url: 'https://datareportal.com/reports/digital-2026-united-arab-emirates', contentSummary: 'UAE population 11.4M, 99% internet, Threads 893K, X 2.85M (-6%)', credibility: 'Very High' },
    { id: 9, url: 'https://thekeyword.medium.com/threads-surpasses-150-million-daily-active-users-3541d592ccd5', contentSummary: '150M DAU, 400M MAU, AI drove 10% time increase', credibility: 'High (Official)' },
    { id: 10, url: 'https://www.cnn.com/2026/03/06/travel/dubai-influencer-lifestyle-iran-strikes', contentSummary: '50K influencers in Dubai, Golden Visas, permit system, $97M market', credibility: 'High' },
    { id: 11, url: 'https://www.theatlantic.com/national-security/2026/03/dubai-influencers-war-messaging/686329/', contentSummary: 'Influencer coordination during tensions, government messaging', credibility: 'High' },
    { id: 12, url: 'https://www.labeeb.ae/how-to-use-threads-for-business-a-new-trend-in-social-media-conversations', contentSummary: 'Bilingual +20% engagement, 35% higher for UAE brands', credibility: 'Medium-High' },
    { id: 13, url: 'https://www.labeeb.ae/threads-and-new-social-media-trends-for-uae-businesses-2026-and-beyond', contentSummary: 'UAE trends 2026, micro-influencers, Arabic podcasting 3x growth', credibility: 'Medium-High' },
    { id: 14, url: 'https://embedsocial.com/blog/instagram-threads-app/', contentSummary: 'Complete feature timeline 2024-2025, Communities, Ghost Posts', credibility: 'Medium-High' },
    { id: 15, url: 'https://www.socialmediatoday.com/news/instagram-linkedin-and-threads-engagement-declined-in-2025/814141/', contentSummary: 'Threads -42% engagement decline 2025, reply engagement +42%', credibility: 'High' },
    { id: 16, url: 'https://www.socialmediatoday.com/news/threads-expands-api-functionality-social-media-management/754239/', contentSummary: 'API features, July 2025 enhancements, 350M MAU', credibility: 'High' },
    { id: 17, url: 'https://time.com/6299743/threads-data-collection-privacy/', contentSummary: 'Data collection includes health, financial, location, browsing', credibility: 'High' },
    { id: 18, url: 'https://u.ae/en/about-the-uae/digital-uae/digital-inclusion/uae-government-social-media-accounts', contentSummary: 'Official UAE govt accounts on X, FB, IG - NO Threads', credibility: 'Very High (Official)' },
    { id: 19, url: 'https://www.arabnews.com/node/2332406/media', contentSummary: 'Threads launch July 3-6, 2023, 31 languages, NOT Arabic', credibility: 'High' },
    { id: 20, url: 'https://www.khaleejtimes.com/business/tech/threads-app-debuts-in-uae-a-step-by-step-guide-on-how-to-use-the-twitter-rival-and-its-features', contentSummary: 'UAE debut, features, 500 chars, under 16 private default', credibility: 'Medium-High' },
  ],

  // --------------------------------------------------------------------------
  // METADATA
  // --------------------------------------------------------------------------

  metadata: {
    reportCompiled: '2026-04-27',
    queryCategory: '5.9 Threads',
    enrichmentStatus: 'FULLY ENRICHED',
    totalSources: 36,
    dataNote: 'All data extracted from publicly available sources. No fabrication of facts or figures.',
    ssotNote: 'This document is the Single Source of Truth (SSOT) for UAE Threads platform intelligence.',
  },
}

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default threadsData
