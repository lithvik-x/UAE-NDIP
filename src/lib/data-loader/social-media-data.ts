// @ts-nocheck
import type {
  PlatformIntelligence,
  SocialPlatform,
  PlatformMetrics,
  BotAnalysis,
  Narrative,
  EngagementMetrics,
  DarkSocialAggregate,
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  CredibilityScore,
  SocialAccount,
  KeyFinding,
} from './types';

// Twitter/X Platform Intelligence
export const twitterIntelligence: PlatformIntelligence = {
  platform: 'Twitter' as SocialPlatform,
  metrics: {
    users: 9380000,
    penetration: 99,
    demographics: 'Wide demographic reach across UAE population',
    sentiment: {
      overall: 'Negative',
      score: 32,
      breakdown: { positive: 18, neutral: 24, negative: 58 },
      trending: ['#dubailife', '#uaenews', '#gitex'],
      keyConcerns: ['Online censorship', 'Account restrictions', 'Privacy concerns'],
    },
    engagement: {
      avgLikes: 142,
      avgRetweets: 38,
      avgReplies: 24,
      trendingHashtags: ['#UAE', '#Dubai', '#GITEX', '#COP28'],
    },
    botActivity: {
      estimatedBotPercent: 91,
      coordinatedInauthentic: true,
      confidence: 0.92,
      indicators: ['Automated posting patterns', 'Coordinated sharing of MBZ content', 'Fake account networks'],
    },
  },
  censorship: {
    level: 'significant' as const,
    complianceRate: 88.5,
    governmentRequests: 1247,
    contentRemoved: 8934,
    notes: 'High compliance with removal requests; significant content moderation',
  },
  keyNarratives: [
    {
      topic: 'Government Achievement',
      narrative: 'UAE as global leader in innovation and governance',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['Official accounts', 'Government-affiliated handles'],
    },
    {
      topic: 'Regional Conflict',
      narrative: 'Support for regional allies, opposition to Iran',
      prevalence: 72,
      sentiment: 'Neutral',
      sources: ['Pro-government accounts', 'Regional analyst accounts'],
    },
    {
      topic: 'Economic Opportunity',
      narrative: 'UAE as business and investment hub',
      prevalence: 68,
      sentiment: 'Positive',
      sources: ['Business accounts', 'Expat communities'],
    },
  ],
  governmentAccounts: [
    { handle: '@DubaiMediaOffice', followers: 2100000, type: 'Government', verified: true },
    { handle: '@UAEGov', followers: 1800000, type: 'Government', verified: true },
    { handle: '@Abu Dhabi', followers: 950000, type: 'Government', verified: true },
  ],
  darkSocialScore: 35,
};

// TikTok Platform Intelligence
export const tiktokIntelligence: PlatformIntelligence = {
  platform: 'TikTok' as SocialPlatform,
  metrics: {
    users: 122014,
    penetration: 1.3,
    demographics: 'Youth demographic (18-34), influencers, content creators',
    sentiment: {
      overall: 'Mixed',
      score: 52,
      breakdown: { positive: 42, neutral: 28, negative: 30 },
      trending: ['#UAE', '#Dubai', '#AbuDhabi', '#UAEInfluencer'],
      keyConcerns: ['Content moderation', 'Censorship concerns', 'Government influence'],
    },
    engagement: {
      avgLikes: 1850,
      avgShares: 420,
      avgComments: 185,
      trendingHashtags: ['#UAE', '#DubaiLife', '#COP28', '#UAETiktok'],
    },
    botActivity: {
      estimatedBotPercent: 23,
      coordinatedInauthentic: true,
      confidence: 0.78,
      indicators: ['Coordinated posting during Iran conflict', 'Amplified government narratives', 'Coordinated hashtag campaigns'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 78,
    governmentRequests: 456,
    contentRemoved: 1000000,
    notes: '1M+ videos removed; partial censorship on political content',
  },
  keyNarratives: [
    {
      topic: 'UAE Lifestyle',
      narrative: 'Luxury lifestyle, tourism promotion, modern Dubai',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['Influencers', 'Tourism accounts', 'Lifestyle content creators'],
    },
    {
      topic: 'Economic Opportunity',
      narrative: 'Business setup, golden visa, entrepreneurship',
      prevalence: 65,
      sentiment: 'Positive',
      sources: ['Business influencers', 'Expat creators'],
    },
    {
      topic: 'Cultural Heritage',
      narrative: 'Blend of tradition and modernity',
      prevalence: 52,
      sentiment: 'Positive',
      sources: ['Cultural accounts', 'Heritage organizations'],
    },
  ],
  governmentAccounts: [
    { handle: '@uaetiktok', followers: 450000, type: 'Government', verified: true },
    { handle: '@visitdubai', followers: 1200000, type: 'Tourism', verified: true },
  ],
  darkSocialScore: 30,
};

// YouTube Platform Intelligence
export const youtubeIntelligence: PlatformIntelligence = {
  platform: 'YouTube' as SocialPlatform,
  metrics: {
    users: 9500000,
    penetration: 98,
    demographics: 'Broad demographic; news consumers, entertainment seekers',
    sentiment: {
      overall: 'Positive',
      score: 58,
      breakdown: { positive: 52, neutral: 31, negative: 17 },
      trending: ['UAE documentaries', 'Dubai vlogs', 'Business setup guides'],
      keyConcerns: ['Government control of major channels', 'Limited critical content'],
    },
    engagement: {
      avgViews: 45000,
      avgLikes: 2100,
      avgComments: 340,
      trendingHashtags: ['#UAE', '#Dubai', '#UAEYouTubers'],
    },
    botActivity: {
      estimatedBotPercent: 12,
      coordinatedInauthentic: false,
      confidence: 0.65,
      indicators: ['View botting on government channels', 'Inflated subscriber counts'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 75,
    governmentRequests: 234,
    contentRemoved: 1247,
    notes: 'Selective removal; government channels dominate recommendations',
  },
  keyNarratives: [
    {
      topic: 'Tourism Promotion',
      narrative: 'UAE as premier tourist destination',
      prevalence: 90,
      sentiment: 'Positive',
      sources: [' DTCM', 'Emirates airline', 'Tourism boards'],
    },
    {
      topic: 'Business Hub',
      narrative: 'UAE as gateway to Middle East markets',
      prevalence: 78,
      sentiment: 'Positive',
      sources: ['Business channels', 'Business setup consultants'],
    },
    {
      topic: 'Regional Politics',
      narrative: 'UAE regional role, alliance with US, opposition to extremism',
      prevalence: 45,
      sentiment: 'Neutral',
      sources: ['News channels', 'Geopolitical analysts'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Government', subscribers: 850000, type: 'Government', verified: true },
    { handle: 'Dubai Media Office', subscribers: 1200000, type: 'Government', verified: true },
    { handle: 'Visit Dubai', subscribers: 2100000, type: 'Tourism', verified: true },
  ],
  darkSocialScore: 25,
};

// Facebook/Meta Platform Intelligence
export const facebookIntelligence: PlatformIntelligence = {
  platform: 'Facebook' as SocialPlatform,
  metrics: {
    users: 9700000,
    penetration: 99,
    demographics: 'Expat-heavy (88%), diverse age groups, community groups',
    sentiment: {
      overall: 'Mixed',
      score: 48,
      breakdown: { positive: 38, neutral: 32, negative: 30 },
      trending: ['Expat groups', 'Business networking', 'Community events'],
      keyConcerns: ['Privacy concerns', 'Data sharing with government', 'Content moderation'],
    },
    engagement: {
      avgLikes: 85,
      avgComments: 28,
      avgShares: 42,
      trendingHashtags: ['#UAE', '#DubaiLife', '#UAEExpat'],
    },
    botActivity: {
      estimatedBotPercent: 34,
      coordinatedInauthentic: true,
      confidence: 0.81,
      indicators: ['CIB operations detected', 'UAE/Egypt influence operation', 'Coordinated inauthentic behavior'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 82,
    governmentRequests: 1893,
    contentRemoved: 15234,
    notes: 'Meta CIB (Coordinated Inauthentic Behavior) removal targeting UAE/Egypt operation',
  },
  keyNarratives: [
    {
      topic: 'Expat Life',
      narrative: 'UAE as safe, prosperous destination for expats',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['Expat groups', 'Community pages', 'Business pages'],
    },
    {
      topic: 'Safety & Security',
      narrative: 'UAE as safe haven in turbulent region',
      prevalence: 80,
      sentiment: 'Positive',
      sources: ['Government pages', 'Community testimonials'],
    },
    {
      topic: 'Business Opportunity',
      narrative: 'Golden visa, business setup, tax benefits',
      prevalence: 72,
      sentiment: 'Positive',
      sources: ['Business groups', 'Consultant pages'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Government', followers: 3200000, type: 'Government', verified: true },
    { handle: 'Dubai Police', followers: 2800000, type: 'Government', verified: true },
    { handle: 'Abu Dhabi Media', followers: 1200000, type: 'Government', verified: true },
  ],
  darkSocialScore: 30,
};

// Instagram Platform Intelligence
export const instagramIntelligence: PlatformIntelligence = {
  platform: 'Instagram' as SocialPlatform,
  metrics: {
    users: 7600000,
    penetration: 78,
    demographics: 'Youth (18-44), influencers, visual content consumers',
    sentiment: {
      overall: 'Positive',
      score: 61,
      breakdown: { positive: 54, neutral: 28, negative: 18 },
      trending: ['Luxury lifestyle', 'Tourism content', 'Food & dining'],
      keyConcerns: ['Influencer manipulation', 'Coordinated safety posts', 'Cybercrime'],
    },
    engagement: {
      avgLikes: 420,
      avgComments: 35,
      avgSaves: 28,
      trendingHashtags: ['#UAE', '#Dubai', '#AbuDhabi', '#UAEInfluencer'],
    },
    botActivity: {
      estimatedBotPercent: 38,
      coordinatedInauthentic: true,
      confidence: 0.85,
      indicators: ['Fake followers', 'Coordinated safety posts March 2026', 'Engagement pods'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 80,
    governmentRequests: 678,
    contentRemoved: 8934,
    notes: '122,014 influencers in UAE; coordinated safety campaigns detected',
  },
  keyNarratives: [
    {
      topic: 'Luxury Lifestyle',
      narrative: 'Dubai as global luxury destination',
      prevalence: 92,
      sentiment: 'Positive',
      sources: ['Luxury influencers', 'Brand accounts', 'Tourism boards'],
    },
    {
      topic: 'Tourism & attractions',
      narrative: 'Must-visit landmarks, hotels, experiences',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['Tourism boards', 'Travel influencers', 'Hotel accounts'],
    },
    {
      topic: 'Safety & Security',
      narrative: 'Safe destination for tourists and residents',
      prevalence: 75,
      sentiment: 'Positive',
      sources: ['Government accounts', 'Safety campaigns'],
    },
  ],
  governmentAccounts: [
    { handle: '@dubai', followers: 5800000, type: 'Government', verified: true },
    { handle: '@visitabudhabi', followers: 3200000, type: 'Tourism', verified: true },
    { handle: '@uae', followers: 2100000, type: 'Government', verified: true },
  ],
  darkSocialScore: 28,
};

// LinkedIn Platform Intelligence
export const linkedinIntelligence: PlatformIntelligence = {
  platform: 'LinkedIn' as SocialPlatform,
  metrics: {
    users: 4500000,
    penetration: 46,
    demographics: 'Professionals, expats, business owners, job seekers',
    sentiment: {
      overall: 'Positive',
      score: 64,
      breakdown: { positive: 58, neutral: 30, negative: 12 },
      trending: ['Job opportunities', 'Business networking', 'UAE Vision 2030'],
      keyConcerns: ['Professional reputation', 'Work-life balance', 'Visa regulations'],
    },
    engagement: {
      avgLikes: 45,
      avgComments: 12,
      avgShares: 18,
      trendingHashtags: ['#UAE', '#Dubai', '#Jobs', '#Business'],
    },
    botActivity: {
      estimatedBotPercent: 8,
      coordinatedInauthentic: false,
      confidence: 0.52,
      indicators: ['Job spam profiles', 'Fake engagement on company pages'],
    },
  },
  censorship: {
    level: 'none' as const,
    complianceRate: 65,
    governmentRequests: 89,
    contentRemoved: 234,
    notes: 'Professional platform with minimal censorship; self-regulation',
  },
  keyNarratives: [
    {
      topic: 'Career Opportunity',
      narrative: 'UAE as land of professional growth',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['HR professionals', 'Business leaders', 'Recruiters'],
    },
    {
      topic: 'Business Setup',
      narrative: 'UAE as entrepreneurial hub',
      prevalence: 75,
      sentiment: 'Positive',
      sources: ['Business consultants', 'Startup founders', 'Investors'],
    },
    {
      topic: 'Golden Visa',
      narrative: 'UAE golden visa as pathway to residency',
      prevalence: 68,
      sentiment: 'Positive',
      sources: ['Migration agents', 'Expats', 'HR communities'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Government', followers: 1800000, type: 'Government', verified: true },
    { handle: 'Dubai Economy', followers: 950000, type: 'Government', verified: true },
    { handle: 'Abu Dhabi Chamber', followers: 720000, type: 'Government', verified: true },
  ],
  darkSocialScore: 15,
};

// Reddit Platform Intelligence
export const redditIntelligence: PlatformIntelligence = {
  platform: 'Reddit' as SocialPlatform,
  metrics: {
    users: 450000,
    penetration: 4.6,
    demographics: 'Expats, tech-savvy users, discussion-oriented',
    sentiment: {
      overall: 'Negative',
      score: 35,
      breakdown: { positive: 22, neutral: 25, negative: 53 },
      trending: ['r/dubai', 'r/uae', 'r/abudhabi'],
      keyConcerns: ['Regret moving to UAE', 'Leaving UAE', 'Racism', 'Scams', 'Low wages'],
    },
    engagement: {
      avgUpvotes: 85,
      avgComments: 42,
      avgAwards: 3,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 15,
      coordinatedInauthentic: false,
      confidence: 0.58,
      indicators: ['Government shill accounts suspected', 'Occasional coordinated upvotes'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 45,
    governmentRequests: 12,
    contentRemoved: 89,
    notes: 'Community self-moderation; government presence limited',
  },
  keyNarratives: [
    {
      topic: 'Expat Regret',
      narrative: 'Many expats regret moving to UAE',
      prevalence: 72,
      sentiment: 'Negative',
      sources: ['r/dubai', 'r/uae', 'Expat forums'],
    },
    {
      topic: 'Leaving UAE',
      narrative: 'Wave of expats leaving UAE',
      prevalence: 68,
      sentiment: 'Negative',
      sources: ['Personal testimonies', 'Discussion threads'],
    },
    {
      topic: 'Racism & Discrimination',
      narrative: 'Systemic racism against South Asian workers',
      prevalence: 65,
      sentiment: 'Negative',
      sources: ['Personal accounts', 'News discussions'],
    },
    {
      topic: 'Scams & Fraud',
      narrative: 'Widespread scams targeting residents',
      prevalence: 58,
      sentiment: 'Negative',
      sources: ['Warning posts', 'Scam reports'],
    },
  ],
  governmentAccounts: [
    { handle: 'r/uae (government attempt)', followers: 0, type: 'Government', verified: false },
  ],
  darkSocialScore: 35,
};

// Telegram Platform Intelligence
export const telegramIntelligence: PlatformIntelligence = {
  platform: 'Telegram' as SocialPlatform,
  metrics: {
    users: 33624,
    penetration: 0.35,
    demographics: 'Privacy-conscious users, news seekers, expats, activists',
    sentiment: {
      overall: 'Neutral',
      score: 48,
      breakdown: { positive: 32, neutral: 40, negative: 28 },
      trending: ['News channels', 'Privacy discussions', 'VoIP alternatives'],
      keyConcerns: ['VoIP censorship', 'Privacy concerns', 'Government surveillance'],
    },
    engagement: {
      avgMessages: 150,
      avgMembers: 2500,
      avgShares: 45,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 8,
      coordinatedInauthentic: false,
      confidence: 0.45,
      indicators: ['Limited bot activity due to encryption'],
    },
  },
  censorship: {
    level: 'extreme' as const,
    complianceRate: 95,
    governmentRequests: 3456,
    contentRemoved: 8934,
    notes: 'Censored for VoIP; fully blocked for voice calls; encrypted messaging active',
  },
  keyNarratives: [
    {
      topic: 'Privacy & Security',
      narrative: 'Telegram as secure communication tool',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['Privacy advocates', 'Expat communities', 'News channels'],
    },
    {
      topic: 'VoIP Alternatives',
      narrative: 'Using Telegram for voice calls due to WhatsApp call ban',
      prevalence: 85,
      sentiment: 'Neutral',
      sources: ['Tech communities', 'Expat forums'],
    },
    {
      topic: 'News Distribution',
      narrative: 'Telegram as alternative news source',
      prevalence: 72,
      sentiment: 'Neutral',
      sources: ['News channels', 'Independent journalists'],
    },
  ],
  governmentAccounts: [
    { handle: 'Dubai News Channel', followers: 33624, type: 'Government', verified: true },
  ],
  darkSocialScore: 95,
};

// Threads Platform Intelligence
export const threadsIntelligence: PlatformIntelligence = {
  platform: 'Threads' as SocialPlatform,
  metrics: {
    users: 893000,
    penetration: 7.8,
    demographics: 'Meta users, social media enthusiasts, younger demographic',
    sentiment: {
      overall: 'Neutral',
      score: 50,
      breakdown: { positive: 35, neutral: 40, negative: 25 },
      trending: ['Lifestyle content', 'News discussions', 'Entertainment'],
      keyConcerns: ['Privacy concerns', 'Data sharing with Meta', 'Lack of government presence'],
    },
    engagement: {
      avgLikes: 65,
      avgReplies: 18,
      avgReposts: 12,
      trendingHashtags: ['#UAE', '#Dubai'],
    },
    botActivity: {
      estimatedBotPercent: 18,
      coordinatedInauthentic: false,
      confidence: 0.62,
      indicators: ['Meta platform bot activity patterns'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 72,
    governmentRequests: 45,
    contentRemoved: 234,
    notes: 'No official UAE government accounts; limited government presence',
  },
  keyNarratives: [
    {
      topic: 'Lifestyle Content',
      narrative: 'UAE lifestyle and entertainment',
      prevalence: 78,
      sentiment: 'Positive',
      sources: ['Influencers', 'Content creators'],
    },
    {
      topic: 'Social Discussion',
      narrative: 'General social discourse',
      prevalence: 65,
      sentiment: 'Neutral',
      sources: ['General users', 'News discussions'],
    },
    {
      topic: 'Entertainment',
      narrative: 'Events, concerts, dining in UAE',
      prevalence: 62,
      sentiment: 'Positive',
      sources: ['Event pages', 'Entertainment accounts'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 20,
};

// Snapchat Platform Intelligence
export const snapchatIntelligence: PlatformIntelligence = {
  platform: 'Snapchat' as SocialPlatform,
  metrics: {
    users: 3200000,
    penetration: 33,
    demographics: 'Youth (18-34), AR filters, discover content consumers',
    sentiment: {
      overall: 'Positive',
      score: 58,
      breakdown: { positive: 48, neutral: 32, negative: 20 },
      trending: ['AR filters', 'Discover content', 'Map stories'],
      keyConcerns: ['Privacy concerns', 'Location tracking', 'Content moderation'],
    },
    engagement: {
      avgViews: 12000,
      avgTimeSpent: 18,
      avgSnaps: 25,
      trendingHashtags: ['#UAE', '#DubaiSnap'],
    },
    botActivity: {
      estimatedBotPercent: 5,
      coordinatedInauthentic: false,
      confidence: 0.38,
      indicators: ['Minimal bot activity on Snapchat'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 75,
    governmentRequests: 234,
    contentRemoved: 567,
    notes: 'Government presence through Discover content; Map functionality monitored',
  },
  keyNarratives: [
    {
      topic: 'Tourism Promotion',
      narrative: 'UAE destinations through Snapchat Discover',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['Discover publishers', 'Tourism boards'],
    },
    {
      topic: 'AR Filters & Engagement',
      narrative: 'Branded AR filters for events',
      prevalence: 80,
      sentiment: 'Positive',
      sources: ['Brand accounts', 'Event organizers'],
    },
    {
      topic: 'Local Content',
      narrative: 'UAE-based content creators on Discover',
      prevalence: 68,
      sentiment: 'Positive',
      sources: ['Local publishers', 'Content creators'],
    },
  ],
  governmentAccounts: [
    { handle: '@uae', followers: 890000, type: 'Government', verified: true },
    { handle: '@local-uae', followers: 450000, type: 'Government', verified: true },
    { handle: '@visitdubai', followers: 1200000, type: 'Tourism', verified: true },
  ],
  darkSocialScore: 25,
};

// Discord Platform Intelligence
export const discordIntelligence: PlatformIntelligence = {
  platform: 'Discord' as SocialPlatform,
  metrics: {
    users: 4358,
    penetration: 0.04,
    demographics: 'Gamers, tech communities, crypto enthusiasts, VPN users',
    sentiment: {
      overall: 'Neutral',
      score: 52,
      breakdown: { positive: 35, neutral: 38, negative: 27 },
      trending: ['Gaming communities', 'Tech servers', 'Crypto discussions'],
      keyConcerns: ['FULLY BLOCKED in UAE', 'VPN required', 'Content monitoring concerns'],
    },
    engagement: {
      avgMessages: 500,
      avgUsers: 150,
      avgChannels: 25,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 12,
      coordinatedInauthentic: false,
      confidence: 0.55,
      indicators: ['Bot activity in gaming servers', 'Crypto trading bots'],
    },
  },
  censorship: {
    level: 'extreme' as const,
    complianceRate: 100,
    governmentRequests: 9999,
    contentRemoved: 9999,
    notes: 'FULLY BLOCKED in UAE; VPN required for access; all UAE servers inaccessible',
  },
  keyNarratives: [
    {
      topic: 'Gaming Communities',
      narrative: 'UAE gaming community servers',
      prevalence: 75,
      sentiment: 'Neutral',
      sources: ['Gaming servers', 'Esports communities'],
    },
    {
      topic: 'Tech & Development',
      narrative: 'Developer communities, coding servers',
      prevalence: 55,
      sentiment: 'Neutral',
      sources: ['Tech communities', 'Dev servers'],
    },
    {
      topic: 'Crypto & Trading',
      narrative: 'Crypto discussion servers',
      prevalence: 45,
      sentiment: 'Neutral',
      sources: ['Crypto communities', 'Trading groups'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 88,
};

// WhatsApp Platform Intelligence
export const whatsappIntelligence: PlatformIntelligence = {
  platform: 'WhatsApp' as SocialPlatform,
  metrics: {
    users: 7100000,
    penetration: 73,
    demographics: 'Universal across demographics; dominant messaging platform',
    sentiment: {
      overall: 'Neutral',
      score: 50,
      breakdown: { positive: 35, neutral: 38, negative: 27 },
      trending: ['Group chats', 'Broadcast lists', 'Status updates'],
      keyConcerns: ['VoIP call blocking', 'Surveillance', 'Article 52 penalties'],
    },
    engagement: {
      avgMessages: 45,
      avgGroups: 12,
      avgBroadcastLists: 5,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 5,
      coordinatedInauthentic: false,
      confidence: 0.42,
      indicators: ['Minimal bot activity due to encryption'],
    },
  },
  censorship: {
    level: 'significant' as const,
    complianceRate: 92,
    governmentRequests: 4567,
    contentRemoved: 6789,
    notes: 'VoIP calls blocked; surveillance confirmed; Article 52 penalties (AED 100K-1M fine, 1-5 years prison)',
  },
  keyNarratives: [
    {
      topic: 'Personal Communication',
      narrative: 'WhatsApp as essential personal communication',
      prevalence: 98,
      sentiment: 'Positive',
      sources: ['All user segments'],
    },
    {
      topic: 'Business Communication',
      narrative: 'WhatsApp for business contact',
      prevalence: 88,
      sentiment: 'Neutral',
      sources: ['Business users', 'Professionals'],
    },
    {
      topic: 'Government Surveillance',
      narrative: 'Concerns about WhatsApp surveillance',
      prevalence: 65,
      sentiment: 'Negative',
      sources: ['Privacy advocates', 'Expat forums'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 92,
};

// Google SERP Platform Intelligence
export const googleSerpIntelligence: PlatformIntelligence = {
  platform: 'Google' as SocialPlatform,
  metrics: {
    users: 9500000,
    penetration: 98,
    demographics: 'Universal search behavior, all demographics',
    sentiment: {
      overall: 'Neutral',
      score: 48,
      breakdown: { positive: 38, neutral: 35, negative: 27 },
      trending: ['Government content', 'News sources', 'Business listings'],
      keyConcerns: ['Government dominance in results', 'Limited critical content', 'Self-censorship'],
    },
    engagement: {
      avgClickThrough: 12,
      avgTimeOnPage: 180,
      avgPagesPerSession: 4.5,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 15,
      coordinatedInauthentic: false,
      confidence: 0.58,
      indicators: ['SEO manipulation suspected', 'Government content promotion'],
    },
  },
  censorship: {
    level: 'significant' as const,
    complianceRate: 85,
    governmentRequests: 2345,
    contentRemoved: 5678,
    notes: 'Government dominance in search results; critical content filtered',
  },
  keyNarratives: [
    {
      topic: 'Government Visibility',
      narrative: 'Government content dominates search results',
      prevalence: 90,
      sentiment: 'Neutral',
      sources: ['Government websites', 'Official sources'],
    },
    {
      topic: 'Business & Tourism',
      narrative: 'Business and tourism content well-promoted',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['Business listings', 'Tourism sites'],
    },
    {
      topic: 'News & Media',
      narrative: 'Approved news sources dominate',
      prevalence: 78,
      sentiment: 'Neutral',
      sources: ['Tier 1 news sources', 'Government-affiliated media'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Government', followers: 0, type: 'Government', verified: true },
  ],
  darkSocialScore: 15,
};

// News Websites Platform Intelligence
export const newsWebsitesIntelligence: PlatformIntelligence = {
  platform: 'News Websites' as SocialPlatform,
  metrics: {
    users: 8500000,
    penetration: 87,
    demographics: 'News consumers, business readers, expats',
    sentiment: {
      overall: 'Positive',
      score: 58,
      breakdown: { positive: 52, neutral: 32, negative: 16 },
      trending: ['COP28', 'Regional politics', 'Economic growth'],
      keyConcerns: ['Limited press freedom', 'Self-censorship', 'Government ownership'],
    },
    engagement: {
      avgTimeOnSite: 420,
      avgPagesPerVisit: 5.2,
      avgBounceRate: 35,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 18,
      coordinatedInauthentic: false,
      confidence: 0.65,
      indicators: ['Comment section bots', 'Social media amplification'],
    },
  },
  censorship: {
    level: 'significant' as const,
    complianceRate: 88,
    governmentRequests: 567,
    contentRemoved: 1234,
    notes: 'Tier 1 sources state-controlled; Tier 2 international sources partially blocked',
  },
  keyNarratives: [
    {
      topic: 'Government Achievements',
      narrative: 'Positive coverage of UAE achievements',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['Tier 1 sources', 'Government-affiliated outlets'],
    },
    {
      topic: 'Regional Stability',
      narrative: 'UAE as pillar of regional stability',
      prevalence: 78,
      sentiment: 'Positive',
      sources: ['Tier 1 sources', 'Regional news'],
    },
    {
      topic: 'Economic Growth',
      narrative: 'Strong economic performance and diversification',
      prevalence: 82,
      sentiment: 'Positive',
      sources: ['Business news', 'Government announcements'],
    },
  ],
  governmentAccounts: [
    { handle: 'Emirates News Agency', followers: 0, type: 'Government', verified: true },
    { handle: 'Gulf News', followers: 0, type: 'Government-affiliated', verified: true },
    { handle: 'The National', followers: 0, type: 'Government-affiliated', verified: true },
  ],
  darkSocialScore: 12,
};

// Forums Platform Intelligence
export const forumsIntelligence: PlatformIntelligence = {
  platform: 'Forums' as SocialPlatform,
  metrics: {
    users: 650000,
    penetration: 6.7,
    demographics: 'Expats, long-term residents, specialized communities',
    sentiment: {
      overall: 'Mixed',
      score: 45,
      breakdown: { positive: 35, neutral: 30, negative: 35 },
      trending: ['ExpatWoman', 'Expat.com', 'Property discussions'],
      keyConcerns: ['Regret posts', 'Scam warnings', 'Racism discussions', 'Legal questions'],
    },
    engagement: {
      avgPosts: 45,
      avgReplies: 125,
      avgViews: 850,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 12,
      coordinatedInauthentic: false,
      confidence: 0.55,
      indicators: ['Spam accounts', 'Occasional shill posts'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 55,
    governmentRequests: 23,
    contentRemoved: 156,
    notes: 'Self-moderated with some government observation; ExpatWoman most popular',
  },
  keyNarratives: [
    {
      topic: 'Expat Experience',
      narrative: 'Real expat experiences, both positive and negative',
      prevalence: 88,
      sentiment: 'Mixed',
      sources: ['ExpatWoman', 'Expat.com', 'ExpatForum'],
    },
    {
      topic: 'Property & Legal',
      narrative: 'Property questions, legal advice, visa issues',
      prevalence: 75,
      sentiment: 'Neutral',
      sources: ['Property forums', 'Legal forums', 'Visa forums'],
    },
    {
      topic: 'Regret & Leaving',
      narrative: 'Expat regret, considering leaving UAE',
      prevalence: 55,
      sentiment: 'Negative',
      sources: ['Discussion threads', 'Personal testimonies'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 25,
};

// Blogs & Opinion Platform Intelligence
export const blogsIntelligence: PlatformIntelligence = {
  platform: 'Blogs' as SocialPlatform,
  metrics: {
    users: 280000,
    penetration: 2.9,
    demographics: 'Writers, opinion makers, independent journalists',
    sentiment: {
      overall: 'Mixed',
      score: 42,
      breakdown: { positive: 28, neutral: 32, negative: 40 },
      trending: ['Medium', 'Substack', 'Personal blogs'],
      keyConcerns: ['Self-censorship', 'Government pressure', 'Limited reach'],
    },
    engagement: {
      avgViews: 1200,
      avgTimeOnPage: 360,
      avgShares: 45,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 15,
      coordinatedInauthentic: false,
      confidence: 0.58,
      indicators: ['Amplification bots', 'Social media coordination'],
    },
  },
  censorship: {
    level: 'significant' as const,
    complianceRate: 70,
    governmentRequests: 34,
    contentRemoved: 89,
    notes: 'Self-censorship common; critical blogs have limited reach',
  },
  keyNarratives: [
    {
      topic: 'Expat Perspectives',
      narrative: 'Personal experiences of living in UAE',
      prevalence: 78,
      sentiment: 'Mixed',
      sources: ['Medium', 'Personal blogs', 'Substack'],
    },
    {
      topic: 'Business Analysis',
      narrative: 'Business and economic analysis',
      prevalence: 62,
      sentiment: 'Neutral',
      sources: ['Business blogs', 'Analyst platforms'],
    },
    {
      topic: 'Critical Views',
      narrative: 'Occasional critical perspectives on UAE',
      prevalence: 35,
      sentiment: 'Negative',
      sources: ['Independent blogs', 'Opposition media'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 30,
};

// Dark Web Platform Intelligence
export const darkWebIntelligence: PlatformIntelligence = {
  platform: 'Dark Web' as SocialPlatform,
  metrics: {
    users: 0,
    penetration: 0,
    demographics: 'Anonymous users, criminals, journalists, activists',
    sentiment: {
      overall: 'Negative',
      score: 25,
      breakdown: { positive: 5, neutral: 15, negative: 80 },
      trending: ['Ransomware', 'Data breaches', 'Cybercrime services'],
      keyConcerns: ['Dubai Municipality breach (28,427 records)', 'Handla attack April 2026', '6PB data destroyed'],
    },
    engagement: {
      avgTransactions: 0,
      avgListings: 0,
      avgForumPosts: 0,
      trendingHashtags: [],
    },
    botActivity: {
      estimatedBotPercent: 95,
      coordinatedInauthentic: true,
      confidence: 0.98,
      indicators: ['Ransomware groups active', 'Data breach marketplaces', 'Cybercrime services'],
    },
  },
  censorship: {
    level: 'none' as const,
    complianceRate: 0,
    governmentRequests: 0,
    contentRemoved: 0,
    notes: 'TOR network; major breaches: Dubai Municipality 28,427 records, Handla attack 6PB destroyed',
  },
  keyNarratives: [
    {
      topic: 'Cybercrime Services',
      narrative: 'Ransomware, hacking services, fraud tools',
      prevalence: 95,
      sentiment: 'Negative',
      sources: ['Ransomware groups', 'Darknet markets'],
    },
    {
      topic: 'Data Breaches',
      narrative: 'UAE entities targeted, sensitive data leaked',
      prevalence: 88,
      sentiment: 'Negative',
      sources: ['Breach forums', 'Data markets'],
    },
    {
      topic: 'Opposition Activity',
      narrative: 'Activist content, government criticism',
      prevalence: 25,
      sentiment: 'Negative',
      sources: ['Opposition forums', 'Activist channels'],
    },
  ],
  governmentAccounts: [],
  darkSocialScore: 98,
};

// Gaming Platform Intelligence
export const gamingIntelligence: PlatformIntelligence = {
  platform: 'Gaming' as SocialPlatform,
  metrics: {
    users: 3500000,
    penetration: 36,
    demographics: 'Youth (18-34), gamers, esports enthusiasts, streamers',
    sentiment: {
      overall: 'Positive',
      score: 62,
      breakdown: { positive: 55, neutral: 28, negative: 17 },
      trending: ['Twitch streams', 'Esports tournaments', 'Mobile gaming'],
      keyConcerns: ['Discord blocked', 'Roblox chat disabled', 'Gambling concerns'],
    },
    engagement: {
      avgPlayTime: 8.5,
      avgTournamentViewers: 45000,
      avgStreamViewers: 12000,
      trendingHashtags: ['#UAEGaming', '#DxbGaming'],
    },
    botActivity: {
      estimatedBotPercent: 22,
      coordinatedInauthentic: false,
      confidence: 0.72,
      indicators: ['Stream view botting', 'Tournament manipulation suspected'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 70,
    governmentRequests: 156,
    contentRemoved: 423,
    notes: '$550M-1.16B market; Discord fully blocked; Roblox chat disabled; Twitch popular',
  },
  keyNarratives: [
    {
      topic: 'Esports Growth',
      narrative: 'UAE as emerging esports hub',
      prevalence: 78,
      sentiment: 'Positive',
      sources: ['Esports organizations', 'Tournament coverage'],
    },
    {
      topic: 'Twitch Streaming',
      narrative: 'Mongraal (7.1M followers) leading UAE Twitch presence',
      prevalence: 72,
      sentiment: 'Positive',
      sources: ['Twitch streamers', 'Gaming influencers'],
    },
    {
      topic: 'Mobile Gaming',
      narrative: 'Mobile gaming dominant in UAE',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['Mobile gamers', 'Game publishers'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Gaming Federation', followers: 0, type: 'Government', verified: true },
  ],
  darkSocialScore: 15,
};

// Web3/Decentralized Platform Intelligence
export const web3Intelligence: PlatformIntelligence = {
  platform: 'Web3' as SocialPlatform,
  metrics: {
    users: 2200000,
    penetration: 24.4,
    demographics: 'Crypto owners, blockchain enthusiasts, DeFi users, Web3 developers',
    sentiment: {
      overall: 'Positive',
      score: 68,
      breakdown: { positive: 62, neutral: 25, negative: 13 },
      trending: ['Bitcoin', 'Ethereum', 'VARA regulation', 'NFTs'],
      keyConcerns: ['VARA regulatory framework', 'Crypto ownership concerns', 'Exchange restrictions'],
    },
    engagement: {
      avgTradingVolume: 2500000000,
      avgNFTTrades: 15000,
      avgDeFiUsers: 85000,
      trendingHashtags: ['#UAE', '#DubaiCrypto', '#VARA'],
    },
    botActivity: {
      estimatedBotPercent: 35,
      coordinatedInauthentic: false,
      confidence: 0.78,
      indicators: ['Wash trading suspected', 'Pump and dump schemes', 'Bot trading'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 68,
    governmentRequests: 234,
    contentRemoved: 567,
    notes: '1,500 Web3 organizations; 24.4% crypto ownership (highest globally); VARA regulation active',
  },
  keyNarratives: [
    {
      topic: 'Crypto Adoption',
      narrative: 'UAE leads globally in crypto ownership',
      prevalence: 92,
      sentiment: 'Positive',
      sources: ['Crypto communities', 'Blockchain companies'],
    },
    {
      topic: 'VARA Regulation',
      narrative: 'UAE establishing clear crypto regulatory framework',
      prevalence: 85,
      sentiment: 'Positive',
      sources: ['VARA', 'Regulatory announcements', 'Legal communities'],
    },
    {
      topic: 'Web3 Innovation',
      narrative: 'Dubai as Web3 innovation hub',
      prevalence: 82,
      sentiment: 'Positive',
      sources: ['Web3 startups', 'Blockchain developers'],
    },
  ],
  governmentAccounts: [
    { handle: 'VARA (Virtual Assets Regulatory Authority)', followers: 0, type: 'Government', verified: true },
  ],
  darkSocialScore: 85,
};

// Podcast/Audio Platform Intelligence
export const podcastIntelligence: PlatformIntelligence = {
  platform: 'Podcast' as SocialPlatform,
  metrics: {
    users: 2900000,
    penetration: 29.8,
    demographics: 'Professionals, commuters, knowledge seekers, English and Arabic speakers',
    sentiment: {
      overall: 'Positive',
      score: 60,
      breakdown: { positive: 52, neutral: 32, negative: 16 },
      trending: ['ARN Radio (3.8M listeners)', 'Kerning Cultures', 'Business podcasts'],
      keyConcerns: ['Limited local content', 'Language barriers', 'Content production quality'],
    },
    engagement: {
      avgListenTime: 35,
      avgSubscriptions: 5,
      avgEpisodesPerWeek: 3,
      trendingHashtags: ['#UAEPodcasts', '#ArabPodcast'],
    },
    botActivity: {
      estimatedBotPercent: 8,
      coordinatedInauthentic: false,
      confidence: 0.45,
      indicators: ['Podcast app bots', 'Streaming manipulation'],
    },
  },
  censorship: {
    level: 'partial' as const,
    complianceRate: 72,
    governmentRequests: 34,
    contentRemoved: 78,
    notes: '$370.2M market (2024); 34.3% CAGR; ARN Radio dominant with 3.8M listeners',
  },
  keyNarratives: [
    {
      topic: 'ARN Radio Dominance',
      narrative: 'ARN Radio leading audio media in UAE',
      prevalence: 88,
      sentiment: 'Positive',
      sources: ['ARN Radio', 'Local broadcasters'],
    },
    {
      topic: 'Kerning Cultures',
      narrative: 'Award-winning podcast highlighting Arab entrepreneurs',
      prevalence: 75,
      sentiment: 'Positive',
      sources: ['Kerning Cultures', 'Business podcasts'],
    },
    {
      topic: 'Business & Knowledge',
      narrative: 'Growth in business and educational podcasts',
      prevalence: 72,
      sentiment: 'Positive',
      sources: ['Business podcasts', 'Knowledge channels'],
    },
  ],
  governmentAccounts: [
    { handle: 'ARN Radio', followers: 3800000, type: 'Government-affiliated', verified: true },
  ],
  darkSocialScore: 12,
};

// Dark Social Aggregate - High-risk platforms for information operations
export const darkSocialAggregate: DarkSocialAggregate[] = [
  {
    platform: 'Telegram',
    darkScore: 95,
    surveillanceLevel: 'Extreme',
    encryptionLevel: 'End-to-end encrypted',
    contentReach: 'Limited but dedicated',
    riskLevel: 'High' as AlertLevel,
    keyConcerns: ['Fully censored for VoIP', 'Encrypted messaging bypasses surveillance', 'Dubai News Channel monitored'],
  },
  {
    platform: 'WhatsApp',
    darkScore: 92,
    surveillanceLevel: 'Confirmed',
    encryptionLevel: 'End-to-end encrypted',
    contentReach: 'Massive (7.1M users)',
    riskLevel: 'High' as AlertLevel,
    keyConcerns: ['VoIP calls blocked', 'Article 52 penalties', 'Government access to metadata'],
  },
  {
    platform: 'Discord',
    darkScore: 88,
    surveillanceLevel: 'Blocked',
    encryptionLevel: 'Server-side encrypted',
    contentReach: 'Minimal (VPN required)',
    riskLevel: 'Extreme' as AlertLevel,
    keyConcerns: ['Fully blocked in UAE', '4,358 users on VPN only', 'Gaming communities circumventing blocks'],
  },
  {
    platform: 'Dark Web',
    darkScore: 98,
    surveillanceLevel: 'Unmonitorable',
    encryptionLevel: 'TOR encrypted',
    contentReach: 'Anonymous and hidden',
    riskLevel: 'Extreme' as AlertLevel,
    keyConcerns: ['Dubai Municipality breach (28,427 records)', 'Handla attack April 2026', '6PB destroyed', 'Ransomware groups active'],
  },
  {
    platform: 'Web3',
    darkScore: 85,
    surveillanceLevel: 'Pseudonymous',
    encryptionLevel: 'Blockchain encrypted',
    contentReach: 'Growing (2.2M crypto owners)',
    riskLevel: 'Medium' as AlertLevel,
    keyConcerns: ['1,500 Web3 organizations', '24.4% crypto ownership (highest globally)', 'VARA regulatory uncertainty'],
  },
];
