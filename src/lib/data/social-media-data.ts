/**
 * Social Media Intelligence Data - Barrel Export
 *
 * Aggregates all social media platform intelligence data and exports
 * with consistent naming convention expected by hooks.ts
 *
 * UAE National Digital Intelligence Platform — Social Media Intelligence
 */

// YouTube Intelligence (MD 5-3)
export { youtubeIntelligenceData as youtubeIntelligence } from './social/youtube-data'
export { youtubeIntelligenceData } from './social/youtube-data'

// TikTok Intelligence (MD 5-2)
export { tiktokIntelligence } from './social/tiktok-data'
export { tiktokIntelligenceData } from './social/tiktok-data'

// Instagram Intelligence (MD 5-5)
export { instagramIntelligenceData as instagramIntelligence } from './instagram-data'
export { instagramIntelligenceData } from './instagram-data'

// Facebook/Meta Intelligence (MD 5-4)
export { facebookIntelligenceData as facebookIntelligence } from './social/facebook-data'
export { facebookIntelligenceData } from './social/facebook-data'

// LinkedIn Intelligence (MD 5-6)
export { linkedinData as linkedinIntelligence } from './social/linkedin-data'
export { linkedinData } from './social/linkedin-data'

// Reddit Intelligence (MD 5-7)
export { redditData as redditIntelligence } from './social/reddit-data'
export { redditData } from './social/reddit-data'

// Telegram Intelligence (MD 5-8)
export { telegramIntelligence } from './social/telegram-data'

// Threads Intelligence (MD 5-9)
export { threadsData as threadsIntelligence } from './social/threads-data'
export { threadsData } from './social/threads-data'

// Twitter/X Intelligence (MD 5-1) - placeholder until data file is created
export const twitterIntelligence = {
  platform: 'Twitter/X',
  status: 'Data file not yet created',
  metrics: { tweetsAnalyzed: 0, accountsTracked: 0 },
  data: null,
}

// Snapchat Intelligence (MD 5-10) - placeholder
export const snapchatIntelligence = {
  platform: 'Snapchat',
  status: 'Data file not yet created',
  metrics: { snapsAnalyzed: 0, accountsTracked: 0 },
  data: null,
}

// Discord Intelligence (MD 5-11) - placeholder
export const discordIntelligence = {
  platform: 'Discord',
  status: 'Data file not yet created',
  metrics: { serversTracked: 0, messagesAnalyzed: 0 },
  data: null,
}

// WhatsApp Intelligence (MD 5-12) - placeholder
export const whatsappIntelligence = {
  platform: 'WhatsApp',
  status: 'Data file not yet created',
  metrics: { groupsTracked: 0 },
  data: null,
}

// Google SERP Intelligence (MD 5-13) - placeholder
export const googleSerpIntelligence = {
  platform: 'Google Search',
  status: 'Data file not yet created',
  metrics: { queriesAnalyzed: 0 },
  data: null,
}

// News Websites Intelligence (MD 5-14) - placeholder
export const newsWebsitesIntelligence = {
  platform: 'News Websites',
  status: 'Data file not yet created',
  metrics: { articlesAnalyzed: 0, sourcesTracked: 0 },
  data: null,
}

// Forums Intelligence (MD 5-15) - placeholder
export const forumsIntelligence = {
  platform: 'Forums',
  status: 'Data file not yet created',
  metrics: { postsAnalyzed: 0, forumsTracked: 0 },
  data: null,
}

// Blogs & Opinion Intelligence (MD 5-16) - placeholder
export const blogsIntelligence = {
  platform: 'Blogs & Opinion',
  status: 'Data file not yet created',
  metrics: { blogsAnalyzed: 0 },
  data: null,
}

// Dark Web Intelligence (MD 5-17) - placeholder
export const darkWebIntelligence = {
  platform: 'Dark Web',
  status: 'Data file not yet created',
  metrics: { sourcesTracked: 0, mentionsAnalyzed: 0 },
  data: null,
}

// Gaming Intelligence (MD 5-18) - placeholder
export const gamingIntelligence = {
  platform: 'Gaming',
  status: 'Data file not yet created',
  metrics: { communitiesTracked: 0, postsAnalyzed: 0 },
  data: null,
}

// Web3/Decentralized Intelligence (MD 5-19) - placeholder
export const web3Intelligence = {
  platform: 'Web3/Decentralized',
  status: 'Data file not yet created',
  metrics: { communitiesTracked: 0, mentionsAnalyzed: 0 },
  data: null,
}

// Podcast/Audio Intelligence (MD 5-20) - placeholder
export const podcastIntelligence = {
  platform: 'Podcast/Audio',
  status: 'Data file not yet created',
  metrics: { podcastsAnalyzed: 0, episodesTracked: 0 },
  data: null,
}

// Dark Social Aggregate
export const darkSocialAggregate = {
  platform: 'Dark Social',
  status: 'Aggregate data from multiple sources',
  metrics: { mentionsAnalyzed: 0 },
  data: null,
}

// Re-export types
export type { YouTubeIntelligenceData } from './social/youtube-data'
export type { PlatformIntelligence } from '@/lib/data-loader/types'
