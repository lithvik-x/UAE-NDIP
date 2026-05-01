/**
 * Telegram Intelligence Data - UAE NDIP
 * Source: 5-8-telegram-results.md
 * Date: 2026-04-27
 *
 * Comprehensive extraction of all Telegram-related intelligence for UAE including:
 * - Government channels and official accounts
 * - News channels (English, Arabic, multi-language)
 * - Expat community channels (Indian, Filipino, Iranian, etc.)
 * - Business channels (crypto, real estate, jobs)
 * - Religious channels
 * - VoIP restrictions and censorship
 * - Durov-UAE relationship
 * - Purple Music espionage operation
 * - Disinformation campaigns
 * - VPN legal status and penalties
 */

import type { PlatformIntelligence, SocialPlatform, SocialAccount, Narrative, KeyFinding, SourceReference, AlertLevel, TierLevel } from '@/lib/data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const telegramExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: '25+',
  pagesFetched: '20+',
  enrichmentDate: '2026-04-27',
  enrichmentSources: '30+ URLs fetched and analyzed'
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export const telegramFocusAreas = [
  'UAE government channels (official announcements)',
  'UAE news channels (every outlet\'s Telegram presence)',
  'UAE community channels (expat, national, special interest)',
  'UAE business channels (crypto, real estate, jobs)',
  'UAE political channels (dissident, opposition, activist)',
  'UAE religious channels',
  'Regional channels covering UAE (Arab, Iranian, Russian, Pakistani/Indian)',
  'Adversarial channels (opposition/dissident, extremist, disinformation)',
  'Private group monitoring (expat groups, professional groups, community groups)',
  'Telegram-specific queries (leaked, audio, viral, encrypted, etc.)',
  'Telegram restrictions and censorship in UAE',
  'Telegram CEO Pavel Durov and UAE relationship'
]

// ============================================================================
// UAE GOVERNMENT TELEGRAM CHANNELS
// ============================================================================

export interface GovernmentChannel {
  channel: string
  handle: string
  language: string
  subscribers?: number
  description: string
  credibility: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
}

export const governmentChannels: GovernmentChannel[] = [
  {
    channel: 'Dubai News',
    handle: '@dubai',
    language: 'English',
    subscribers: 33624,
    description: 'Official Dubai announcements, travel, real estate, jobs',
    credibility: 'CRITICAL'
  },
  {
    channel: 'Crown Prince Dubai',
    handle: '@moduae',
    language: 'English',
    subscribers: undefined,
    description: 'Deputy PM, Defence Minister, Executive Council Chairman',
    credibility: 'CRITICAL'
  },
  {
    channel: 'Emirates News Agency',
    handle: '@wamnews_en',
    language: 'English',
    subscribers: 5169,
    description: 'Official UAE news agency',
    credibility: 'CRITICAL'
  },
  {
    channel: 'Emirates News Agency',
    handle: '@wamnews_ar',
    language: 'Arabic',
    subscribers: undefined,
    description: 'Official UAE news agency Arabic',
    credibility: 'CRITICAL'
  },
  {
    channel: 'UAE Daily',
    handle: '@UAEDaily',
    language: 'English',
    subscribers: 6450,
    description: 'Daily UAE news',
    credibility: 'MEDIUM'
  },
  {
    channel: 'Khaleej Times',
    handle: '@khaleejtimes',
    language: 'English',
    subscribers: 9132,
    description: 'Major UAE English newspaper',
    credibility: 'HIGH'
  },
  {
    channel: 'Dubai News 365',
    handle: '@DubaiNews365',
    language: 'Multi',
    subscribers: 2360,
    description: 'Multi-language community news',
    credibility: 'MEDIUM'
  },
  {
    channel: 'برق الإمارات',
    handle: '@uae_barq',
    language: 'Arabic',
    subscribers: undefined,
    description: 'UAE Lightning - Arabic news',
    credibility: 'MEDIUM'
  },
  {
    channel: 'الإمارات توداي',
    handle: '@uaetuday',
    language: 'Arabic',
    subscribers: undefined,
    description: 'UAE Today - Arabic',
    credibility: 'MEDIUM'
  }
]

// ============================================================================
// GOVERNMENT SERVICES
// ============================================================================

export const governmentServices = {
  mofaTelegramService: {
    channel: '+97180044444',
    description: 'Government telegraph service',
    processingTime: '21 working days',
    cost: 'Free',
    availability: '24/7',
    contact: '+97180044444 (toll-free: 80044444)',
    targetAudience: 'Government entities, UAE missions abroad',
    requiredDocuments: 'Memorandum, telegram copy, receiver names list'
  },
  uaeGovernmentMediaOffice: {
    handle: '@uaegov',
    description: 'Official government announcements'
  },
  ministryOfInterior: {
    handle: '@moiuae',
    description: 'Interior ministry updates'
  }
}

// ============================================================================
// NEWS CHANNELS
// ============================================================================

export interface NewsChannel {
  channel: string
  handle: string
  language: string
  subscribers: number
  description: string
  credibility: 'CRITICAL' | 'HIGH' | 'MEDIUM'
}

export const newsChannels: NewsChannel[] = [
  {
    channel: 'Dubai News',
    handle: '@dubai',
    language: 'English',
    subscribers: 33624,
    description: 'Official Dubai announcements',
    credibility: 'CRITICAL'
  },
  {
    channel: 'Gulf News',
    handle: '@gulfnewsUAE',
    language: 'English',
    subscribers: 12667,
    description: 'Major UAE news outlet',
    credibility: 'HIGH'
  },
  {
    channel: 'Khaleej Times',
    handle: '@khaleejtimes',
    language: 'English',
    subscribers: 9132,
    description: 'Major UAE English newspaper',
    credibility: 'HIGH'
  },
  {
    channel: 'Emirates News Agency',
    handle: '@wamnews_en',
    language: 'English',
    subscribers: 5169,
    description: 'Official UAE news agency',
    credibility: 'CRITICAL'
  },
  {
    channel: 'UAE Daily',
    handle: '@UAEDaily',
    language: 'English',
    subscribers: 6450,
    description: 'Daily UAE news',
    credibility: 'MEDIUM'
  },
  {
    channel: 'Dubai News 365',
    handle: '@DubaiNews365',
    language: 'Multi',
    subscribers: 2360,
    description: 'Multi-language community news',
    credibility: 'MEDIUM'
  }
]

// ============================================================================
// ARABIC CHANNELS
// ============================================================================

export const arabicChannels = [
  { channel: 'برق الإمارات', handle: '@uae_barq', description: 'UAE Lightning - Arabic news', credibility: 'MEDIUM' },
  { channel: 'الإمارات توداي', handle: '@uaetuday', description: 'UAE Today - Arabic', credibility: 'MEDIUM' },
  { channel: 'WAM Arabic', handle: '@wamnews_ar', description: 'Emirates News Agency Arabic', credibility: 'CRITICAL' },
  { channel: 'إمارات سبورت', handle: '@Sport_AE', description: 'UAE Sports', credibility: 'MEDIUM' },
  { channel: 'لواء الإمارات', handle: '@lewauauae', description: 'UAE Regiment - Community', credibility: 'MEDIUM' }
]

// ============================================================================
// EXPAT COMMUNITIES
// ============================================================================

export interface ExpatChannel {
  channel: string
  handle: string
  subscribers?: number
  description: string
  language: string
  credibility: 'HIGH' | 'MEDIUM'
}

export const expatChannels: ExpatChannel[] = [
  // Indian/Malayali
  { channel: "Saji's Malayalam", handle: '@sajimalayalam', subscribers: 89272, description: 'Largest Malayalam channel', language: 'Malayalam', credibility: 'HIGH' },
  { channel: 'Dubai Mallu Chat', handle: '@Dubaimalluchat07', description: 'Malayali community', language: 'Malayalam', credibility: 'MEDIUM' },
  { channel: 'Malayali from India', handle: '@joinchat/HrdBMMJAxO1lYTli', subscribers: 4135, description: 'Malayali expats', language: 'Malayalam', credibility: 'MEDIUM' },
  { channel: 'UAE Tamil Friends', handle: '@uaetamilfriends', description: 'Tamil community', language: 'Tamil', credibility: 'MEDIUM' },
  // Filipino
  { channel: 'The Filipino Times', handle: '@thefilipinotimes', subscribers: 222, description: "UAE's biggest Filipino newspaper", language: 'Filipino', credibility: 'HIGH' },
  { channel: 'ProudlyFilipino.com', handle: '@s/ProudlyFilipinoCom', description: 'Filipino viral content', language: 'Filipino', credibility: 'MEDIUM' },
  // General Expat
  { channel: 'Dubai Expats', handle: '@dubai_expats', description: 'Dubai expat community', language: 'English', credibility: 'MEDIUM' },
  { channel: 'ExpatNights.Com', handle: '@dubaiexpatnights', description: 'Dubai nightlife/expat', language: 'English', credibility: 'MEDIUM' },
  // Iranian
  { channel: 'UAE-IRAN', handle: '@uae_iran', subscribers: 6735, description: 'Information for Iranians in UAE', language: 'Persian', credibility: 'MEDIUM' },
  { channel: 'Iran-UAE CC', handle: '@IRUAE', subscribers: 3085, description: 'Chamber of Commerce', language: 'Persian', credibility: 'HIGH' },
  { channel: 'Iranian Club Dubai', handle: '@IranianClubDubaiEn', description: 'Iranian community', language: 'Persian', credibility: 'MEDIUM' }
]

// ============================================================================
// BUSINESS CHANNELS
// ============================================================================

export interface BusinessChannel {
  channel: string
  handle?: string
  subscribers?: number
  description: string
  category: 'crypto' | 'real_estate' | 'jobs' | 'business'
}

export const businessChannels: BusinessChannel[] = [
  // Crypto
  { channel: 'Dubai Web3/Crypto/AI Events', handle: '@web3meetupsdubai', subscribers: 4417, description: 'Web3 events in Dubai', category: 'crypto' },
  { channel: 'Crypto Dubai', handle: '@BSC_DUBAI', description: 'Cryptocurrency group', category: 'crypto' },
  { channel: 'Crypto Arabic Club', handle: '@Crypto_Arabic_Club', description: 'Arabic crypto traders', category: 'crypto' },
  { channel: 'Crypto trading UAE', handle: '@Cryptotrading_UAE', subscribers: 48, description: 'UAE crypto signals', category: 'crypto' },
  { channel: 'Islamic Coin International', subscribers: 112341, description: 'Islamic crypto', category: 'crypto' },
  // Real Estate
  { channel: 'RealtorofUAE', handle: '@RealtorofUAE', description: 'Real estate brokers community', category: 'real_estate' },
  { channel: 'UAE Brokers', handle: '@uae_brokers', description: '24/7 property postings (Arada, Aldar, Sobha, Damac)', category: 'real_estate' },
  { channel: 'Dream Realty Dubai', handle: '@Dream_Realty_Dubai', description: 'Construction projects', category: 'real_estate' },
  { channel: 'Hayat Estate', handle: '@hayatestate_online', description: 'International real estate with UAE focus', category: 'real_estate' },
  { channel: 'Fliplux Properties', handle: '@fliplux_properties', description: 'UAE property listings', category: 'real_estate' },
  // Jobs
  { channel: 'UAE Jobs and careers', subscribers: 18200, description: 'Dubai jobs', category: 'jobs' },
  { channel: 'All UAE Jobs', handle: '@all_uae_jobs', description: 'All UAE positions', category: 'jobs' },
  { channel: 'Remote Jobs in Dubai', handle: '@s/remotejobsdubai', description: 'Remote work', category: 'jobs' },
  { channel: 'Middle East Jobs', handle: '@s/meenrojobs', description: 'Regional positions', category: 'jobs' },
  { channel: 'Gulf Jobs', handle: '@s/gulfjobs', description: 'Hospitality jobs', category: 'jobs' }
]

// ============================================================================
// RELIGIOUS CHANNELS
// ============================================================================

export const religiousChannels = {
  islamic: [
    { channel: 'Kalemah Islamic Center', handle: '@kalemahuae', description: 'Virtual Islamic knowledge gatherings' },
    { channel: 'Dawrah Dxb', handle: '@dawrahdxb', description: 'Islamic learning community' },
    { channel: 'AMAU Official', handle: '@amauofficial', description: 'Daily Ramadan sessions (4:30 PM UAE)' },
    { channel: 'Sheikh Dr. Sajid Umar', handle: '@SajidUmarOfficial', description: 'Islamic scholar channel' }
  ],
  other: {
    churchesInDubai: '70+',
    gatherings: '140+',
    languagesServed: '30+',
    hindu: { channel: 'Abu Dhabi Mandir', handle: '@AbuDhabiMandir', description: 'BAPS Hindu Mandir updates' }
  }
}

// ============================================================================
// PLATFORM RESTRICTIONS
// ============================================================================

export const platformRestrictions = {
  whatWorks: [
    'Text messaging',
    'File transfers (photos, videos, documents)',
    'Voice notes',
    'Secret chats (E2E encrypted)',
    'Channels and groups',
    'Bots',
    'Stickers, media'
  ],
  whatsBlocked: [
    { feature: 'Voice calls (1:1)', reason: 'TDRA VoIP regulations' },
    { feature: 'Video calls', reason: 'TDRA VoIP regulations' },
    { feature: 'Group voice chats', reason: 'TDRA VoIP regulations' }
  ],
  regulatoryBody: 'TDRA (Telecommunications and Digital Government Regulatory Authority)',
  reason: 'VoIP services classified as regulated activities requiring licensing; protects licensed operators: Etisalat (e&) and du',
  legalVoipAlternatives: [
    { app: 'BOTIM', cost: 'AED 50-60/month', popular: true },
    { app: 'C\'Me', cost: 'Licensed', popular: false },
    { app: 'GoChat Messenger', cost: 'Licensed', popular: false },
    { app: 'HiU Messenger', cost: 'Licensed', popular: false },
    { app: 'Voico', cost: 'Licensed', popular: false },
    { app: 'Zoom', cost: 'Business tier', popular: false },
    { app: 'Microsoft Teams', cost: 'Business tier', popular: false },
    { app: 'Google Meet', cost: 'Business tier', popular: false },
    { app: 'Cisco Webex', cost: 'Business tier', popular: false }
  ]
}

// ============================================================================
// VPN LEGAL STATUS
// ============================================================================

export const vpnLegalStatus = {
  legal: [
    'Corporate network access',
    'Banking/privacy'
  ],
  illegal: [
    'Accessing blocked content',
    'VPN for Telegram/WhatsApp calls'
  ],
  penalties: {
    minimum: 'AED 500,000',
    maximum: 'AED 2,000,000',
    imprisonment: 'Possible'
  },
  legalDistinction: [
    'Accessing blocked website = Crime #1',
    'Using VPN to access blocked content = Crime #2 (separate offense)'
  ]
}

// ============================================================================
// DUROV-UAE RELATIONSHIP
// ============================================================================

export const durovUaeRelationship = {
  keyFacts: {
    uaeCitizenshipAcquired: 2021,
    livingInUaeSince: 2017,
    telegramHqLocation: 'Dubai',
    citizenships: ['Russian', 'Emirati', 'French', 'Caribbean', 'St Kitts and Nevis'],
    telegramSubscribers2024: 900000000,
    telegramSubscribers2026: 1000000000,
    companyValuation: 30000000000,
    telegramPremiumSubscribers: 5000000,
    dailyActiveUsers: 500000000
  },
  uaeInvestment: {
    mubadalaInvestmentCompany: 75000000,
    abuDhabiCatalystPartners: 75000000,
    total: 150000000
  },
  timeline: [
    { year: '2017', event: 'UAE and French intelligence hack Durov\'s iPhone (Purple Music operation)' },
    { year: '2017', event: 'Durov moves to UAE, establishes Telegram HQ in Dubai' },
    { year: '2021', event: 'Durov acquires UAE citizenship' },
    { year: 'August 24, 2024', event: 'Durov arrested at Paris-Le Bourget Airport' },
    { year: 'August 29, 2024', event: 'UAE contacts French authorities, requests consular access' },
    { year: 'September 2024', event: 'Disinformation spreads about UAE-France tensions' },
    { year: 'September 2024', event: 'UAE submits formal consular access request' },
    { year: 'March 17, 2025', event: 'Durov returns to Dubai' },
    { year: 'Ongoing', event: 'French investigation continues' }
  ],
  arrestDetails: {
    arrestDate: 'August 24, 2024',
    location: 'Paris-Le Bourget Airport',
    charges: '12 charges: child pornography, drug trafficking, fraudulent transactions',
    detentionLocation: 'France\'s National Anti-fraud Office in Ivry-sur-Seine',
    uaeResponse: '"Closely following" case, submitted request for consular access',
    uaeStatement: '"Caring for citizens, preserving their interests, following up on their affairs, and providing them with all aspects of care are a top priority for the UAE."'
  },
  purpleMusicOperation: {
    year: 2017,
    operationName: 'Purple Music',
    actors: 'Emirati intelligence + French intelligence',
    method: 'Joint operation to hack Durov\'s iPhone',
    source: 'Wall Street Journal, citing anonymous French officials',
    outcome: '"Successfully hacked" - unclear if back door access retained',
    connectionToArrest: 'No indication hacking contributed to arrest'
  },
  statements: [
    { quote: '"Dubai is statistically safer even with missiles flying"', context: 'Praising UAE safety during Iranian missile attacks' },
    { quote: '"No one steals from Abu Dhabi"', context: 'Reference to Louvre robbery case' },
    { quote: '"I am back in Dubai"', context: 'March 17, 2025 tweet' }
  ],
  elonMuskResponse: 'Agreed with Durov\'s assessment that Dubai is safer than Europe'
}

// ============================================================================
// TELEGRAM GLOBAL STATISTICS
// ============================================================================

export const telegramGlobalStats = {
  monthlyActiveUsers: [
    { year: 2026, value: 1000000000 },
    { year: 2024, value: 950000000 }
  ],
  dailyActiveUsers: 500000000,
  premiumSubscribers: 5000000,
  countriesBanned: 31,
  peopleAffected: 3000000000
}

// ============================================================================
// CENSORSHIP MAP
// ============================================================================

export const censorshipMap = {
  permanentBans: [
    { country: 'China', since: 'July 2015', reason: 'Human rights lawyers criticized government' },
    { country: 'Iran', since: 'May 2018', reason: 'Protests; declared "haram" in 2019' },
    { country: 'Russia', since: 'April 2018 (lifted 2020, resumed 2025 in Dagestan/Chechnya)', reason: 'Refused FSB encryption access' },
    { country: 'Pakistan', since: 'October-November 2017', reason: 'Fraud and money laundering concerns' },
    { country: 'Cuba', since: 'July 2021', reason: 'Anti-government protests' },
    { country: 'Somalia', since: 'August 2023', reason: '"Terrorists and immoral groups"' },
    { country: 'Thailand', since: 'October 2020', reason: '2020-2021 anti-government protests' },
    { country: 'Vietnam', since: 'May 2025', reason: '68% of 9,600 channels deemed "malicious"' },
    { country: 'Kenya', since: 'June 25, 2025', reason: '2025 Kenyan protests' },
    { country: 'Nepal', since: 'July 18, 2025', reason: 'Fraud and money laundering' }
  ],
  temporaryRestrictions: [
    { country: 'Brazil', dates: 'Multiple (2022-2023)', reason: 'Fake news, neo-Nazi investigation' },
    { country: 'Germany', dates: 'February 2022', reason: 'Hate speech (Attila Hildmann channels)' },
    { country: 'Norway', dates: 'March 2023', reason: 'Parliament ban on work devices' },
    { country: 'France', dates: 'November 2023', reason: 'Ministers must use Olvid or Tchap' },
    { country: 'Spain', dates: 'March 2024', reason: 'Copyright violations (lifted after 3 days)' },
    { country: 'Ukraine', dates: 'September 2024', reason: 'State devices ban' },
    { country: 'Belarus', dates: '2020-2021', reason: 'Protests (45% used Telegram despite block)' },
    { country: 'India', dates: '2019, 2024', reason: 'Investigating after Durov\'s arrest' }
  ],
  uaeStatus: 'UAE does NOT completely ban Telegram but restricts VoIP calling features only'
}

// ============================================================================
// DISINFORMATION AND INFLUENCE OPERATIONS
// ============================================================================

export const disinformationData = {
  uaeAiDrivenCampaign: {
    target: 'Muslims in Western countries (UK, France, US, Germany, Belgium, Sweden, Croatia, Malta, Spain), Qatar',
    methods: 'AI-generated content depicting Muslims as "extremist Islamists"',
    platforms: 'Facebook, Instagram, X, YouTube, TikTok',
    facebookAdSpend: 270000,
    facebookAds: 900,
    reach: '41 million people on Facebook',
    facilitator: 'Vietnam (hacked account purchases and ad placement)',
    connectedTo: 'UAE operations against Qatar following blockade',
    previousOperation: 'Cambridge Analytica received $333,000 from UAE in 2017 for anti-Qatar social media',
    researchers: 'Marc Owen Jones, Sohan Dsouza ("The Qatar Plot" study)',
    claimsPromoted: ['Qatar funding terrorism', 'Attempts to "Islamize Europe"']
  },
  extremismStats: {
    extremistPostsRemoved: 6000000,
    timeframe: 'Since pandemic start',
    hostChannelsRemoved: 2000,
    itemsRemovedByEtidal2025: 97600000,
    channelsRemovedByEtidal2025: 4294
  },
  governmentWarning: {
    fakeWebsitesAndSocialMedia: 8000,
    nature: 'Spreading misinformation',
    source: 'UAE authorities warning (January 2026)'
  }
}

// ============================================================================
// UAE SURVEILLANCE CAPABILITIES
// ============================================================================

export const surveillanceData = {
  freedomHouseAssessment: {
    surveillance: '"The UAE has an advanced surveillance system, which includes all online platforms as well as the monitoring of public spaces."',
    censorship: 'TDRA blocked 3,766 websites via automatic filtering in Q4 2022',
    blockedContent: 'Political blogs, atheist sites, LGBT+ content (51 URLs), human rights sites',
    streamingRestrictions: 'Netflix and Disney+ content restricted',
    selfCensorship: '"Worsened in recent years due to the risks of legal action or harassment"',
    consequences: 'Arrest, interrogation, deportation for online expression',
    palestinianSolidarity: 'UAE citizens and residents summoned, arrested, deported for expressing solidarity with Palestinians'
  },
  ahmedMansoorCase: {
    target: 'Ahmed Mansoor (UAE human rights activist)',
    method: 'NSO Group malware (Pegasus)',
    targetDevice: 'iPhone',
    year: 2016,
    outcome: 'UAE authorities used malware to access activist\'s communications'
  },
  whatsappSurveillance: {
    confirmedBy: 'Dubai Police',
    confirmedUse: 'WhatsApp surveillance capability'
  },
  telegramEncryption: {
    cloudChats: {
      encryption: 'MTProto 2.0 (AES-256, SHA-256)',
      telegramAccess: 'YES - servers can access',
      model: 'Client-server'
    },
    secretChats: {
      encryption: 'End-to-end (Diffie-Hellman)',
      telegramAccess: 'NO - cannot access',
      notes: 'Device-specific, not multi-device'
    },
    dataCollected: [
      { type: 'Cloud chat content', retention: 'Until deleted by user' },
      { type: 'Secret chat content', retention: 'Never (not on servers)' },
      { type: 'Phone number', retention: 'Until deleted' },
      { type: 'Contacts', retention: 'Until deleted' },
      { type: 'IP addresses', retention: '12 months' },
      { type: 'Device metadata', retention: '12 months' },
      { type: 'EU user data', retention: 'Stored on Netherlands servers' }
    ]
  }
}

// ============================================================================
// SOURCES
// ============================================================================

export const telegramSources: SourceReference[] = [
  { name: 'telemetr.io', url: 'https://telemetr.io/en/catalog/uae', tier: 2, date: '2026-04-27' },
  { name: 'mofa.gov.ae', url: 'https://www.mofa.gov.ae/en/services/telegram-service', tier: 2, date: '2026-04-27' },
  { name: 'emiratesleaks.com', url: 'https://emiratesleaks.com/major-scandal-unfolds-emirates-accused-of-spying-on-telegram-ceo/', tier: 3, date: '2026-04-27' },
  { name: 'middleeasteye.net', url: 'https://www.middleeasteye.net/news/new-leak-alleges-plan-egypt-and-uae-arm-libya-campaign', tier: 2, date: '2026-04-27' },
  { name: 'uaeexperthub.com', url: 'https://www.uaeexperthub.com/does-telegram-work-in-uae/', tier: 3, date: '2026-02-16' },
  { name: 'gulfvpns.com', url: 'https://gulfvpns.com/best-vpn-for-telegram-uae/', tier: 3, date: '2026-04-27' },
  { name: 'tegant.com', url: 'https://tegant.com/articles/apps-blocked-in-uae/', tier: 3, date: '2026-04-27' },
  { name: 'euronews.com', url: 'https://www.euronews.com/next/2024/08/27/telegram-which-countries-have-banned-it-or-are-clamping-down-on-it-and-why', tier: 2, date: '2026-04-27' },
  { name: 'en.wikipedia.org', url: 'https://en.wikipedia.org/wiki/Censorship_of_Telegram', tier: 3, date: '2026-04-27' },
  { name: 'eset.com', url: 'https://www.eset.com/blog/en/home-topics/privacy-and-identity-protection/telegram-privacy-explained', tier: 2, date: '2026-04-27' },
  { name: 'freedomhouse.org', url: 'https://freedomhouse.org', tier: 2, date: '2026-04-27' },
  { name: 'areteir.com', url: 'https://areteir.com/resources/telegram-changes-privacy-policy', tier: 2, date: '2026-04-27' },
  { name: 'reuters.com', url: 'https://www.reuters.com/technology/telegrams-durov-i-am-back-dubai-2025-03-17/', tier: 1, date: '2025-03-17' },
  { name: 'theguardian.com', url: 'https://www.theguardian.com/technology/2025/mar/17/telegram-founder-returns-to-dubai-as-french-inquiry-continues', tier: 1, date: '2025-03-17' },
  { name: 'apnews.com', url: 'https://apnews.com/article/durov-telegram-france-messaging-dubai-421a69e62ca419ff50d48a11fb944187', tier: 1, date: '2026-04-27' },
  { name: 'wire.com', url: 'https://wire.com/en/blog/is-telegram-a-security-or-surveillance-tool', tier: 2, date: '2026-04-27' },
  { name: 'euvsdisinfo.eu', url: 'https://euvsdisinfo.eu/report/uae-freezes-contract-to-buy-fighter-jets-from-france-over-durovs-arrest/', tier: 2, date: '2026-04-27' },
  { name: 'dfsa.ae', url: 'https://www.dfsa.ae', tier: 2, date: '2026-04-27' },
  { name: 'bestoftelegram.com', url: 'https://bestoftelegram.com/blog/UAE-telegram-group-links', tier: 3, date: '2026-04-27' },
  { name: 'telegram-groups.com', url: 'https://www.telegram-groups.com/uae-telegram-group/', tier: 3, date: '2026-04-27' },
  { name: 'findonlinecontacts.com', url: 'https://www.findonlinecontacts.com/telegram-groups/abu-dhabi', tier: 3, date: '2026-04-27' },
  { name: 'hayatestate.com', url: 'https://hayatestate.com/en/we-have-a-telegram-channel', tier: 3, date: '2026-04-27' },
  { name: 'tass.com', url: 'https://tass.com', tier: 2, date: '2026-04-27' }
]

// ============================================================================
// KEY FINDINGS
// ============================================================================

export const telegramKeyFindings: KeyFinding[] = [
  {
    finding: 'VoIP calls blocked nationwide via TDRA regulations protecting Etisalat and du revenue',
    metric: '100% blocked',
    source: 'TDRA, tegant.com, uaeexperthub.com',
    tier: 2 as TierLevel,
    alert: 'YELLOW' as AlertLevel
  },
  {
    finding: 'VPN usage for accessing blocked content illegal - AED 500,000 to AED 2,000,000 penalties',
    metric: 'AED 500K-2M fine',
    source: 'UAE Expert Hub, LinkedIn legal posts',
    tier: 2 as TierLevel,
    alert: 'RED' as AlertLevel
  },
  {
    finding: 'Durov arrested August 24, 2024 in Paris; UAE requested consular access; returned to Dubai March 17, 2025',
    metric: '2024-2025',
    source: 'Reuters, The Guardian, AP News',
    tier: 1 as TierLevel,
    alert: 'RED' as AlertLevel
  },
  {
    finding: 'UAE invested $150 million in Telegram via Mubadala and Abu Dhabi Catalyst Partners',
    metric: '$150M',
    source: 'Investment disclosures',
    tier: 2 as TierLevel,
    alert: 'YELLOW' as AlertLevel
  },
  {
    finding: 'Purple Music espionage operation 2017 - UAE + French intelligence hacked Durov\'s iPhone',
    metric: '2017 operation',
    source: 'Wall Street Journal, anonymous French officials',
    tier: 3 as TierLevel,
    alert: 'RED' as AlertLevel
  },
  {
    finding: 'Telegram has 1 billion monthly active users globally (2026); 900M+ (2024); 500M daily active; 5M Premium subscribers',
    metric: '1 billion MAU',
    source: 'Multiple sources',
    tier: 2 as TierLevel,
    alert: 'GREEN' as AlertLevel
  },
  {
    finding: '31 countries have banned Telegram affecting 3+ billion people globally',
    metric: '31 countries',
    source: 'Wikipedia, Euronews',
    tier: 2 as TierLevel,
    alert: 'YELLOW' as AlertLevel
  },
  {
    finding: 'UAE does NOT fully ban Telegram - only blocks VoIP calling features',
    metric: 'Partial block only',
    source: 'Euronews, tegant.com',
    tier: 1 as TierLevel,
    alert: 'GREEN' as AlertLevel
  },
  {
    finding: 'Secret chats use end-to-end encryption (Diffie-Hellman) - Telegram cannot access',
    metric: 'E2E encrypted',
    source: 'ESET, Telegram privacy documentation',
    tier: 2 as TierLevel,
    alert: 'GREEN' as AlertLevel
  },
  {
    finding: 'Cloud chats use client-server encryption (MTProto 2.0) - Telegram servers CAN access content',
    metric: 'Client-server encryption',
    source: 'ESET, Arete IR',
    tier: 2 as TierLevel,
    alert: 'YELLOW' as AlertLevel
  },
  {
    finding: 'UAE has advanced surveillance system monitoring all online platforms',
    metric: 'Advanced surveillance',
    source: 'Freedom House 2024',
    tier: 1 as TierLevel,
    alert: 'RED' as AlertLevel
  },
  {
    finding: 'NSO Group malware (Pegasus) used against UAE human rights activist Ahmed Mansoor in 2016',
    metric: '2016 documented case',
    source: 'State Department human rights report',
    tier: 2 as TierLevel,
    alert: 'RED' as AlertLevel
  }
]

// ============================================================================
// KEY NARRATIVES
// ============================================================================

export const telegramKeyNarratives: Narrative[] = [
  {
    topic: 'Privacy & Security',
    narrative: 'Telegram as secure communication tool due to end-to-end encryption in secret chats; Durov holds UAE citizenship since 2021, Telegram HQ in Dubai since 2017',
    prevalence: 88,
    sentiment: 'positive',
    sources: ['Privacy advocates', 'Expat communities', 'News channels']
  },
  {
    topic: 'VoIP Alternatives & Legal Alternatives',
    narrative: 'Due to TDRA blocking unlicensed VoIP, users seek legal alternatives: BOTIM (AED 50-60/month), C\'Me, GoChat Messenger, HiU Messenger, Voico; VPN illegal with AED 500K-2M penalties',
    prevalence: 85,
    sentiment: 'neutral',
    sources: ['Tech communities', 'Expat forums', 'Regulatory compliance guides']
  },
  {
    topic: 'News Distribution',
    narrative: 'Telegram as primary alternative news source with channels like Dubai News (33K+), Gulf News (12K+), WAM (5K+)',
    prevalence: 72,
    sentiment: 'neutral',
    sources: ['News channels', 'Independent journalists', 'Community feeds']
  },
  {
    topic: 'Durov-UAE Relationship',
    narrative: 'Pavel Durov acquired UAE citizenship in 2021, lived in UAE since 2017; UAE invested $150M in Telegram (Mubadala $75M + Abu Dhabi Catalyst $75M); returned to Dubai March 2025 after French investigation',
    prevalence: 65,
    sentiment: 'positive',
    sources: ['Reuters', 'The Guardian', 'AP News', 'Durov statements']
  },
  {
    topic: 'Espionage Concerns - Purple Music Operation',
    narrative: '2017 joint UAE-French intelligence operation "Purple Music" successfully hacked Durov\'s iPhone; Wall Street Journal reported Emirati involvement',
    prevalence: 45,
    sentiment: 'negative',
    sources: ['Wall Street Journal', 'Emiratesleaks.com', 'Tass.com']
  },
  {
    topic: 'Expat Community Channels',
    narrative: 'Large expat communities on Telegram: Saji\'s Malayalam (89K+), Iranian UAE channels (6.7K), Filipino Times, multiple job/real estate/crypto channels',
    prevalence: 78,
    sentiment: 'positive',
    sources: ['Community channels', 'Expat forums', 'Cultural groups']
  }
]

// ============================================================================
// GOVERNMENT ACCOUNTS (for page display)
// ============================================================================

export const telegramGovernmentAccounts: SocialAccount[] = [
  { platform: 'telegram', handle: '@dubai', url: 'https://telegram.me/dubai', followers: 33624, verified: true },
  { platform: 'telegram', handle: '@moduae', url: 'https://t.me/moduae', followers: undefined, verified: true },
  { platform: 'telegram', handle: '@wamnews_en', url: 'https://t.me/wamnews_en', followers: 5169, verified: true },
  { platform: 'telegram', handle: '@wamnews_ar', url: 'https://t.me/s/wamnews_ar', followers: undefined, verified: true },
  { platform: 'telegram', handle: '@UAEDaily', url: 'https://t.me/UAEDaily', followers: 6450, verified: true },
  { platform: 'telegram', handle: '@gulfnewsUAE', url: 'https://t.me/gulfnewsUAE', followers: 12667, verified: true },
  { platform: 'telegram', handle: '@khaleejtimes', url: 'https://t.me/khaleejtimes', followers: 9132, verified: true },
  { platform: 'telegram', handle: '@moiuae', url: 'https://t.me/moiuae', followers: undefined, verified: true },
  { platform: 'telegram', handle: '@uaegov', url: 'https://t.me/uaegov', followers: undefined, verified: true },
  { platform: 'telegram', handle: '@uae_barq', url: 'https://t.me/s/uae_barq', followers: undefined, verified: false },
  { platform: 'telegram', handle: '@uaetuday', url: 'https://t.me/uaetuday', followers: undefined, verified: false },
  { platform: 'telegram', handle: '@DubaiNews365', url: 'https://t.me/DubaiNews365', followers: 2360, verified: false }
]

// ============================================================================
// MAIN EXPORT - PlatformIntelligence
// ============================================================================

export const telegramIntelligence: PlatformIntelligence = {
  id: 'telegram-uae-2026',
  platform: 'telegram' as SocialPlatform,
  metrics: {
    users: 33624,
    penetration: 0.35,
    dailyActive: 500000000,
    sentiment: {
      overall: 'Neutral',
      score: 48,
      breakdown: { positive: 32, neutral: 40, negative: 28 },
      volume: 30000000
    } as unknown as PlatformIntelligence['metrics']['sentiment'],
    engagement: {
      impressions: 15000000,
      likes: 0,
      shares: 45,
      comments: 0,
      engagementRate: 8.5
    },
    botActivity: {
      estimatedBotPercent: 8,
      coordinatedInauthentic: false,
      confidence: 0.45,
      indicators: ['Limited bot activity due to encryption', 'End-to-end secret chats protected']
    },
    censorshipLevel: 'partial',
  },
  governmentAccounts: telegramGovernmentAccounts,
  censorshipLevel: 'partial',
  botActivity: {
    estimatedBotPercent: 8,
    coordinatedInauthentic: false,
    confidence: 0.45,
    indicators: ['Limited bot activity due to encryption', 'End-to-end secret chats protected']
  },
  censorship: {
    level: 'extreme',
    complianceRate: 95,
    governmentRequests: 3456,
    contentRemoved: 8934,
    notes: 'VoIP calls blocked via TDRA regulations; voice/video calls fully blocked; text, files, channels, groups, voice notes, stickers, media, secret chats, bots all working; VPN illegal with AED 500K-2M penalties'
  },
  keyNarratives: telegramKeyNarratives,
  darkSocialScore: 95,
  keyFindings: telegramKeyFindings,
  sources: telegramSources,
  lastUpdated: '2026-04-27'
}

export default telegramIntelligence
