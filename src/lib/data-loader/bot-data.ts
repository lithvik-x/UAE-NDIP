// @ts-nocheck
'use client'

import type {
  UAERelevanceMatrixEntry,
  SourceCredibilityMatrixEntry,
  EntityRegistryEntry,
  SentimentAnalysisEntry,
  KeySourceCitation,
  DashboardKPIEntry,
  URLFetchStatusEntry,
  BotNetworkScaleKPI,
  EngagementFraudKPI,
  ImpactKPI,
  DetectionConfidenceKPI,
  TierLevel,
} from './types'

// ============================================================================
// 11-9: Bot & Inauthentic Behavior - Deep Research Results
// ============================================================================

// --------------------------------------------------------------------------
// Executive Summary
// --------------------------------------------------------------------------
export const botInauthenticExecutiveSummary = {
  title: '11.9 Bot & Inauthentic Behavior -- Deep Research Results',
  date: '2026-04-27',
  sourceFile: 'micro-queries/part-11/11-9-bot-inauthentic.md',
  enrichmentDate: '2026-04-28',
  ssotStatus: 'SINGLE SOURCE OF TRUTH -- Comprehensive URL content extraction complete',
  summary: `UAE-linked bot and inauthentic behavior operations represent one of the most sophisticated and well-documented social media manipulation ecosystems in the Middle East. Operations range from state-sponsored bot networks amplifying pro-UAE propaganda to hired third-party companies conducting astroturfing and sock puppet campaigns against dissidents. Research has documented networks ranging from hundreds to 19,000+ automated accounts targeting topics from COP28 climate summits to regional conflicts in Yemen, Sudan, Somalia, and Qatar.`,
}

// --------------------------------------------------------------------------
// UAE Relevance Assessment Matrix
// --------------------------------------------------------------------------
export const uaeRelevanceAssessmentMatrix: UAERelevanceMatrixEntry[] = [
  { topic: '19,000 RSF-Aligned Bots (Oct 2025)', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
  { topic: 'COP28 Greenwashing Bot Network', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'HIGH' },
  { topic: '5,000+ STC Bot Accounts (Yemen)', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
  { topic: 'Twitter Suspension (2019)', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'HIGH' },
  { topic: 'Hired Defamation Companies', uaeRelevance: 'CRITICAL', severity: 'Extreme', confidence: 'HIGH' },
  { topic: 'Fake African Accounts Network', uaeRelevance: 'CRITICAL', severity: 'High', confidence: 'MEDIUM' },
  { topic: 'Sock Puppet Operations', uaeRelevance: 'HIGH', severity: 'High', confidence: 'HIGH' },
  { topic: 'Troll Farm Infrastructure', uaeRelevance: 'HIGH', severity: 'Medium', confidence: 'MEDIUM' },
  { topic: 'Synthetic Identity Fraud', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'LOW' },
  { topic: 'AI Deepfake Warnings', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'HIGH' },
  { topic: 'Engagement Fraud (Influencers)', uaeRelevance: 'MEDIUM', severity: 'Medium', confidence: 'MEDIUM' },
]

// --------------------------------------------------------------------------
// Source Credibility Matrix
// --------------------------------------------------------------------------
export const botSourceCredibilityMatrix: SourceCredibilityMatrixEntry[] = [
  { source: 'Freedom House', tier: 0, credibilityScore: 10, trustLevel: 'VERIFIED', urlStatus: 'Accessible' },
  { source: 'Academic/Peer-Reviewed', tier: 0, credibilityScore: 10, trustLevel: 'VERIFIED', urlStatus: 'Partial (Sage blocked)' },
  { source: 'Marc Owen Jones (Substack)', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Substack accessible' },
  { source: 'Al Jazeera', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
  { source: 'POMEPS', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
  { source: 'CarbonCopy', tier: 1, credibilityScore: 8, trustLevel: 'HIGH', urlStatus: 'Accessible' },
  { source: 'WashingtonIDS', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Accessible' },
  { source: 'Botometer/OSoMe (Indiana)', tier: 1, credibilityScore: 9, trustLevel: 'HIGH', urlStatus: 'Landing page only' },
  { source: 'Wikipedia', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
  { source: 'Middle East Eye', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Blocked (403)' },
  { source: 'Gulf News', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
  { source: 'OpenDemocracy', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Accessible' },
  { source: 'Arabian Business', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Partial (some blocked)' },
  { source: 'Khaleej Times', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked (403)' },
  { source: 'Reddit', tier: 3, credibilityScore: 5, trustLevel: 'LOW-MEDIUM', urlStatus: 'Blocked' },
  { source: 'Misbar', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
  { source: 'The Cradle', tier: 3, credibilityScore: 6, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
  { source: 'incyber', tier: 3, credibilityScore: 5, trustLevel: 'LOW', urlStatus: 'Blocked' },
  { source: 'Global Witness', tier: 2, credibilityScore: 7, trustLevel: 'MEDIUM', urlStatus: 'Blocked' },
]

// --------------------------------------------------------------------------
// Bot Network Scale KPIs
// --------------------------------------------------------------------------
export const botNetworkScaleKPIs: BotNetworkScaleKPI[] = [
  { kpi: 'Largest UAE Bot Network', value: '19,514 accounts', lastUpdated: 'Dec 2025' },
  { kpi: 'COP28 Bot Network', value: '7,000 accounts', lastUpdated: 'Dec 2023' },
  { kpi: 'STC Yemen Bot Network', value: '5,626 estimated bots', lastUpdated: 'Dec 2025' },
  { kpi: 'Twitter UAE Suspension (2019)', value: '4,258 accounts', lastUpdated: 'Sep 2019' },
  { kpi: 'Diavolo Network (Saudi)', value: '3,700 accounts', lastUpdated: 'Jan 2020' },
  { kpi: 'Troll Farm Operators', value: '~500 people', lastUpdated: 'Mar 2019' },
  { kpi: 'SMAAT Removed Accounts', value: '88,000+', lastUpdated: '2019' },
]

// --------------------------------------------------------------------------
// Engagement Fraud KPIs
// --------------------------------------------------------------------------
export const engagementFraudKPIs: EngagementFraudKPI[] = [
  { kpi: 'Dubai Bling Fake Followers', value: '9.1 million+', source: 'Modash.io' },
  { kpi: 'GCC Influencers with Fake Followers', value: '~30%', source: 'UAE Barq' },
  { kpi: 'Fake FB/IG Accounts Removed', value: '4,000+', source: 'OpenDemocracy' },
  { kpi: 'Fake Twitter Accounts Removed', value: '100,000+', source: 'OpenDemocracy' },
]

// --------------------------------------------------------------------------
// Impact KPIs
// --------------------------------------------------------------------------
export const impactKPIs: ImpactKPI[] = [
  { kpi: 'RSF Campaign Impressions', value: '91+ million', context: 'Oct-Nov 2025' },
  { kpi: 'Iranian Campaign (UK) Impressions', value: '224 million', context: '2020' },
  { kpi: 'Removed Account Followers', value: '31 million+', context: 'OpenDemocracy' },
  { kpi: 'Propaganda Advertising Spend', value: '$1.3 million+', context: 'OpenDemocracy' },
]

// --------------------------------------------------------------------------
// Detection Confidence KPIs
// --------------------------------------------------------------------------
export const detectionConfidenceKPIs: DetectionConfidenceKPI[] = [
  { kpi: 'Bot Account Accuracy (AUC)', value: '0.99', source: 'Botometer-V4' },
  { kpi: 'Non-English Detection Limitation', value: 'HIGH', source: 'Harvard study' },
  { kpi: 'False Positive Risk', value: 'Significant', source: 'Academic consensus' },
]

// --------------------------------------------------------------------------
// RSF-Aligned Bots (October 2025)
// --------------------------------------------------------------------------
export const rsfBotsData = {
  title: '19,000 UAE-Aligned Bots (RSF/Rapid Support Forces Campaign)',
  estimatedBotAccounts: '18,709-19,514',
  totalAccountsAnalyzed: '~21,000',
  tweetsInDataset: '~80,000',
  impressionsGenerated: '91+ million',
  botPercentageActive: '89-93%',
  accountsCreated5Month: '81.4% (4,787 of 5,881)',
  tweetsViaTwitterWebApp: '96%',
  accountsDegree1NoInteraction: '21%',
  accountsDegree2SelfLoop: '74%',
  accountsNearZeroExternalInteraction: '~95%',
  postingBursts: '~13,000 posts per burst',
  detectionTools: ['NodeXL', 'Phantabot', 'Exportcomments', 'Gephi', 'Tableau'],
  timeline: [
    { date: 'October 26, 2025', event: 'El Fasher massacre' },
    { date: 'November 4, 2025', event: 'Hashtags began trending' },
    { date: 'November 5-19, 2025', event: 'Data collection period' },
    { date: 'December 20, 2025', event: 'Publication' },
  ],
  narrativesPromoted: [
    'RSF portrayed as "disciplined, humane, and responsive to ceasefires"',
    'SAF/Burhan framed as primary aggressors causing starvation',
    'Southern Yemen independence via Southern Transitional Council (STC)',
  ],
  geopoliticalFraming: {
    negative: ['Egypt', 'Saudi Arabia', 'Qatar', 'Turkey', 'Iran', 'Russia'],
    positive: ['Selective framing toward UAE'],
  },
  source: 'Marc Owen Jones, Substack (Dec 31, 2025)',
  sourceUrl: 'https://marcowenjones.substack.com/p/i-found-19000-uae-aligned-bots-promoting',
}

// --------------------------------------------------------------------------
// COP28 Greenwashing Bot Network
// --------------------------------------------------------------------------
export const cop28BotsData = {
  title: 'COP28 Greenwashing Bot Network (December 2023)',
  botsTargetingCOP28: '1,900+',
  totalNetworkAccounts: '~7,000',
  generalAccountsOriginalContent: '22 verified',
  minionAccountsAmplification: '1,850+',
  minimumDailyQueriesBotometerV4: '43,200',
  maximumDailyQueriesBotometerLite: '8.6 million',
  networkStructure: {
    hierarchy: 'Hierarchical: "Generals" post original content, "Minions" amplify via likes',
    cells: 'Bots organized into cells assigned to specific generals (anti-detection)',
    accountRecycling: 'Some accounts dating to 2009 were scrubbed and repurposed',
  },
  contentFocus: [
    'Praise for ADNOC chief and COP President-designate Sultan Al Jaber',
    'Positioning UAE and COP28 as environmentally responsible',
    'Greenwashing narrative amplification',
  ],
  verifiedGeneralAccounts: ['bint_jumeiraah', 'BkheltaElbasbosy (profile traced to TikTok account)'],
  methodology: {
    researcher: 'Marc Owen Jones, Associate Professor, Hamad bin Khalifa University',
    tools: 'X scraper, Gephi network mapping',
    detection: 'Empirically identified general accounts receiving suspicious likes',
  },
  source: 'CarbonCopy (Dec 11, 2023)',
  sourceUrl: 'https://carboncopy.info/research-identifies-bots-engaged-in-greenwashing-during-cop28/',
}

// --------------------------------------------------------------------------
// STC Yemen Bot Accounts
// --------------------------------------------------------------------------
export const stcBotsData = {
  title: '5,000+ UAE-Aligned STC Bot Accounts (Southern Yemen)',
  botAccountsDetected: '5,000+',
  tweetsAnalyzed: '56,000+',
  uniqueAccountsInDataset: '7,587',
  accountsDegree1_2: '74%',
  accountsCreated5Month: '75%',
  postsViaTwitterApp: '74%',
  estimatedActualBots: '~5,626 (75% of 7,587)',
  hashtagAnalyzed: '#القوات_الجنوبيه_طارده_للارهاب (The Southern Forces Are Expelled from Terrorism)',
  keyFinding: 'The network mirrors UAE-foreign policy. The same bot network has recently promoted pro-RSF positions & those critical of Saudi.',
  detectionNote: 'The network, while relatively crude, is succeeding in promoting pro-STC accounts and hashtags on X, which in turn may influence AI output (notably RAG).',
  source: 'Marc Owen Jones, Substack (Dec 20, 2025)',
  sourceUrl: 'https://marcowenjones.substack.com/p/analysis-i-detected-over-5000-bot',
}

// --------------------------------------------------------------------------
// Twitter UAE Suspension 2019
// --------------------------------------------------------------------------
export const twitterSuspensionData = {
  title: 'Twitter Suspended 4,258 UAE Accounts (2019)',
  accountsSuspendedUAE: '4,258',
  accountsSuspendedUAEEgypt: '267',
  facebookAccountsRemovedPrior: '350+',
  uaeGovernmentRemovalRequests2021: '148',
  complianceRate: '88.5%',
  operationDetails: {
    managedBy: 'DotDev (Abu Dhabi-based software company)',
    egyptianAffiliate: 'New Waves (based in Giza)',
    uaeCompany: 'Newave',
    targets: 'Qatar (primary), Yemen, Iran',
    amplifiedMessages: 'Supportive of Saudi government',
    accountPresentation: 'Presented as "independent journalistic outlets"',
  },
  source: 'Al Jazeera (Sep 20, 2019)',
  sourceUrl: 'https://www.aljazeera.com/news/2019/9/20/twitter-suspends-thousands-of-fake-accounts-from-uae',
}

// --------------------------------------------------------------------------
// Freedom House Finding 2023
// --------------------------------------------------------------------------
export const freedomHouseData = {
  title: 'Freedom House Finding (2023)',
  fakeAccountsMBZPosts: 'Up to 91%',
  facebookContentRestrictedJanJun2022: '902',
  twitterRemovalRequests2021: '148',
  complianceRate: '88.5%',
  websitesBlockedQ4_2022: '3,766',
  websitesBlockedOffenses: '8',
  internetPenetration: '99%',
  mobilePenetration: '200.9%',
  medianMobileDownloadSpeed: '181.79 Mbps',
  fiveGPopulationCoverage: '94%',
  contentBlockingBreakdown: [
    { category: 'Impersonation, fraud, phishing', percentage: '46.8%' },
    { category: 'Pornography, nudity, vice', percentage: '27.1%' },
    { category: 'Drugs', percentage: '3.3%' },
    { category: 'Prohibited commodities/services', percentage: '3.1%' },
  ],
  broadbandCost: '$111.21/month (ranked 198th of 220 countries)',
  mobileData2GB: '$27.22/month',
  keyFinding: 'Automated accounts manipulated online narrative by promoting pro-UAE policy positions around several regional events, such as the 2022 World Cup',
  sockPuppetFinding: 'Sock puppet accounts impersonating Israeli nationals were found posting pro-UAE and pro-Israel content while criticizing Qatar and the Muslim Brotherhood',
  source: 'Freedom House',
  sourceUrl: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2023',
}

// --------------------------------------------------------------------------
// Troll Farm Operations
// --------------------------------------------------------------------------
export const trollFarmData = {
  title: 'Arab Troll Farm Operations',
  trollArmySize: '~500 people',
  monthlyPaymentSeniorTroll: 'Dh5,000 (~$1,360)',
  monthlyPaymentEntryLevel: 'Dh2,000 (~$544)',
  seniorTrollPHPEarnings: 'Php70,000 (~Dh3,500-5,000)',
  entryLevelPHPEarnings: 'Php30,000 (~Dh2,000)',
  accountsPerTroll: 'Up to 200',
  operationalStructure: [
    '"White trolls" (diplomatic/commercial)',
    '"Black trolls" (aggressive/raucous)',
    'Work in shifts (24/7 operation)',
    'Content editor crafts message → trolls amplify for political clients',
    'Each troll switches personas (teacher, housewife, etc.)',
  ],
  leadership: '"Don" (operation leader, disclosed on GMA News TV\'s Brigada)',
  source: 'Khaleej Times (Mar 3, 2019)',
  sourceUrl: 'https://www.khaleejtimes.com/business/tech/trolls-earn-up-to-dh5000-for-misleading-people-on-social-media',
}

// --------------------------------------------------------------------------
// Troll Farm Academic Study
// --------------------------------------------------------------------------
export const trollFarmAcademicData = {
  title: 'Troll Farm Academic Study (Arab World)',
  publicationDate: 'January 27, 2024',
  journal: 'Social Media + Society (Sage Journals)',
  approach: 'Production studies',
  framework: 'Digital workers within broader digital media ecology',
  keyFinding: 'Troll farms framed as digital workers within broader digital media industries ecology',
  scope: [
    'Working conditions of paid trolls',
    'Institutionalised group dynamics',
    'Political opinion interference mechanisms',
  ],
  source: 'Sage Journals',
  sourceUrl: 'https://journals.sagepub.com/doi/10.1177/20563051231224713',
}

// --------------------------------------------------------------------------
// Saudi Troll Farm (Diavolo Network)
// --------------------------------------------------------------------------
export const diavoloNetworkData = {
  title: 'Saudi Troll Farm (Diavolo Network)',
  automatedSemiAutomatedAccounts: 'Up to 3,700',
  accountsSuspended2016: '1,800',
  tweetsPerDay: '2,500+',
  monthlyAccountCreationAvg: '34 accounts',
  accountsCreatedMay2016: '335',
  accountsCreatedNov2019: '382',
  tweetsSampledForAnalysis: '~20,000',
  hashtagDistribution: [
    { hashtag: '#Iran', percentage: '~33%' },
    { hashtag: '#Turkey', percentage: '~17%' },
    { hashtag: '#Qatar', percentage: '~17%' },
    { hashtag: '#Saudi', percentage: '~17%' },
  ],
  networkDetails: [
    'Named after "Diavolo" software (Italian for "devil")',
    'Software automates tweets via TweetDeck',
    'Connected to Saudi 24 satellite news station',
    'Spreads "sectarian hate speech, antisemitism and conspiracy theories"',
    'Uses video clips with distinctive Saudi 24 logo',
    'Participated in #floridashooting hashtag manipulation',
  ],
  source: 'Middle East Eye (Jan 20, 2020)',
  sourceUrl: 'https://www.middleeasteye.net/opinion/despite-twitter-culls-riyadhs-disinformation-network-still-going-strong',
}

// --------------------------------------------------------------------------
// Global Troll Farm Landscape
// --------------------------------------------------------------------------
export const globalTrollFarmData = {
  title: 'Global Troll Farm Landscape (Wikipedia)',
  countriesWithTrollArmies: '30 governments worldwide',
  countriesTargetedElectionInfluence: '18 countries targeted for election influence attempts',
  globalTrollFarmOperations: [
    { country: 'Russia', operation: 'Internet Research Agency', details: 'Troll armies to spread propaganda, command Twitter trends, and sow fear' },
    { country: 'China', operation: '50 Cent Party', details: 'Paid Chinese bureaucrats cheering for CCP' },
    { country: 'Philippines', operation: 'Duterte Trolls', details: '$1,000-$2,000/month; $200,000 spent in 2016 campaign' },
    { country: 'India', operation: 'BJP Digital Army', details: 'Documented in book "I Am a Troll"' },
    { country: 'Turkey', operation: 'AK Trolls', details: 'Justice and Development Party operation' },
    { country: 'Brazil', operation: 'Bolsonaro Family', details: '1,000+ fake accounts; COVID misinformation' },
    { country: 'Iran', operation: 'State Networks', details: '10M tweets from 4,570 accounts (2018); AI-supported fake news (2024)' },
  ],
  source: 'Wikipedia',
  sourceUrl: 'https://en.wikipedia.org/wiki/Troll_farm',
}

// --------------------------------------------------------------------------
// Gulf Twitter Deception (POMEPS Study)
// --------------------------------------------------------------------------
export const pomepsData = {
  title: 'Gulf Twitter Deception (POMEPS Study)',
  smaatFirmAccountsRemoved: '88,000+',
  authors2016ReportSectarianAccounts: '1,600 suspended',
  menaRankingAfterRussiaChina: '2nd (KSA, UAE, Egypt)',
  noticePeriodRiyadhSummit: '48 hours',
  methodology: [
    'Account creation date analysis',
    'Hashtag temporal clustering',
    'Application diversity checking',
    'Network analysis (graph-based community relationships)',
    'Centrality measurement',
    'Metadata tracking',
    'Reverse phone number searches',
  ],
  keyFinding: 'No social media behavior in MENA politics should be assumed organic',
  diavoloNetworkSecondary: {
    accounts: 'Up to 3,700 accounts',
    tweetsDaily: '2,500+',
    connection: 'Connected to Saudi 24',
  },
  source: 'POMEPS',
  sourceUrl: 'https://pomeps.org/tracking-adversaries-and-first-responding-to-disinfo-ops-the-evolution-of-deception-and-manipulation-tactics-on-gulf-twitter',
}

// --------------------------------------------------------------------------
// Hired Defamation Companies
// --------------------------------------------------------------------------
export const defamationCompaniesData = {
  title: 'UAE Hired Defamation Companies (Astroturf Operations)',
  entities: [
    { entity: 'Astroturf', type: 'Company name', details: 'Hired defamation firm used by UAE' },
  ],
  targets: [
    { name: 'Ahmed Mansoor', type: 'Target', details: 'Human rights activist - terrorism/money laundering allegations fabricated' },
    { name: 'Nasser bin Ghaith', type: 'Target', details: 'Academic - arrested 2015, sentenced to 10 years for "false information"' },
    { name: 'Jamal Khashoggi', type: 'Target', details: 'Journalist - murdered 2018 at Saudi consulate' },
  ],
  tacticsEmployed: [
    'Fabricating social media profiles',
    'Creating fraudulent websites',
    'Disseminating manufactured allegations',
    '"Sock puppets" -- fake accounts designed to manipulate conversations',
  ],
  source: 'WashingtonIDS',
  sourceUrl: 'https://washingtonids.org/the-uaes-use-of-hired-defamation-companies-a-new-low-in-political-repression/',
}

// --------------------------------------------------------------------------
// Fake Sudanese Accounts
// --------------------------------------------------------------------------
export const fakeSudaneseAccountsData = {
  title: 'Fake Sudanese Accounts (Pro-UAE Propaganda Africa)',
  status: 'URL Blocked (Misbar) - Content verified through secondary sources',
  keyClaims: [
    'Dozens of fake Somali accounts identified',
    'Operated by UAE-linked bot farm',
    'Exploiting images of Somali women for political propaganda',
    'Spreading pro-UAE narratives across Africa',
  ],
  source: 'Misbar (Oct 25, 2025)',
  sourceUrl: 'https://www.misbar.com/en/editorial/2025/10/25/fake-social-media-accounts-pushing-pro-uae-propaganda-across-africa',
}

// --------------------------------------------------------------------------
// BBC Investigation Africa Network
// --------------------------------------------------------------------------
export const bbcAfricaInvestigationData = {
  title: 'BBC Investigation: Massive Pro-UAE Africa Network',
  status: 'URL Blocked (The Cradle) - BBC investigation reference only',
  keyClaims: [
    'Hundreds of fake social media accounts identified',
    'Using stolen and AI-generated pictures of Somali influencers',
    'Whitewashing Sudan\'s RSF militia',
    'Shaping public opinion in Africa',
  ],
  source: 'The Cradle (Oct 21, 2025)',
  sourceUrl: 'https://thecradle.co/articles/bbc-uncovers-massive-online-network-spreading-pro-uae-propaganda-to-shape-public-opinion-in-africa',
}

// --------------------------------------------------------------------------
// Reddit Discussion COP Presidency
// --------------------------------------------------------------------------
export const redditCOPDiscussionData = {
  title: 'Reddit Discussion: Army of Fake Accounts Defending UAE COP Presidency',
  status: 'URL Blocked (Reddit)',
  keyClaims: [
    'AI-generated profile pictures of Barbie dolls used in fake accounts',
    'Accounts defending UAE presidency of climate summit',
    'Coordinated campaign documentation by reddit users',
  ],
  source: 'Reddit r/dubai (Jun 9, 2023)',
  sourceUrl: 'https://www.reddit.com/r/dubai/comments/144h909/army_of_fake_social_media_accounts_defend_uae/',
}

// --------------------------------------------------------------------------
// Bot Detection Indicators
// --------------------------------------------------------------------------
export const botDetectionIndicators = {
  visualProfile: [
    { indicator: 'Names with numbers', description: 'e.g., "John12345"', detectionWeight: 'Medium' },
    { indicator: 'Generic profile photos', description: 'AI-generated or stock images', detectionWeight: 'High' },
    { indicator: 'Bulk-creation patterns', description: 'Accounts created same day', detectionWeight: 'High' },
    { indicator: 'Random location data', description: 'e.g., Spain, Switzerland, Costa Rica, Croatia', detectionWeight: 'Medium' },
    { indicator: 'No profile picture', description: '"بدون صورة شخصية"', detectionWeight: 'Medium' },
  ],
  behavioral: [
    { indicator: 'Identical/similar tweets', statistic: 'Copy-paste or slight variations', source: 'All studies' },
    { indicator: 'Twitter Web App usage', statistic: '96% (atypical for organic)', source: 'Jones (RSF)' },
    { indicator: 'Low engagement', statistic: '95% virtually no interaction', source: 'Jones (RSF)' },
    { indicator: 'Bot-to-bot retweeting', statistic: 'Amplifying each other', source: 'All studies' },
    { indicator: 'Temporal patterns', statistic: 'Discrete, disciplined bursts', source: 'Jones (RSF)' },
    { indicator: '24/7 posting', statistic: 'Impossible human consistency', source: 'All studies' },
  ],
  network: [
    { indicator: 'Degree 1 accounts', metric: 'No interaction outside network', value: '21%' },
    { indicator: 'Degree 2 accounts', metric: 'Self-loop/zero external engagement', value: '74%' },
    { indicator: 'Cell structure', metric: 'Assigned to specific "generals"', value: 'COP28' },
    { indicator: 'Network isolation', metric: 'High internal, low external', value: 'All' },
  ],
  content: [
    { category: 'Pro-UAE foreign policy', targets: 'ADNOC, MBZ, COP28' },
    { category: 'Greenwashing', targets: 'Climate summits' },
    { category: 'Sectarian hate speech', targets: 'Anti-Iran, anti-Qatar, anti-Turkey' },
    { category: 'Conflict framing', targets: 'RSF/Saudi narratives in Sudan/Yemen' },
  ],
}

// --------------------------------------------------------------------------
// Botometer Technical Specifications
// --------------------------------------------------------------------------
export const botometerSpecs = {
  title: 'Botometer Technical Specifications',
  features: [
    { name: 'Botometer-V4', dailyQueries: '~43,200', dataRequired: '200 tweets + mentions', speed: 'Slower', architecture: 'Ensemble of Specialized Classifiers (ESC)', modelType: 'Random Forest per bot type + humans' },
    { name: 'BotometerLite', dailyQueries: '~8.6 million', dataRequired: 'User metadata only', speed: 'Faster', architecture: 'Lightweight', modelType: 'Metadata-only' },
  ],
  featuresAnalyzed: [
    'User profile characteristics',
    'Friends network patterns',
    'Network graph metrics',
    'Temporal posting behavior',
    'Content/language patterns',
    'Sentiment indicators',
  ],
  totalFeatures: '1,000+',
  scoringSystem: {
    scale: '0 (human-like) to 1 (bot-like)',
    display: '0-5 on web interface',
    cap: 'CAP (Complete Automation Probability): Bayesian posterior estimates',
  },
  accuracyMetrics: {
    crossValidationAUC: '0.99',
    degradation: 'New account types, non-English languages, novel behaviors',
    languageIndependent: 'Available for non-English accounts',
  },
  recommendedThresholds: [
    { threshold: '0.5', useCase: 'Most common' },
    { threshold: '0.7', useCase: 'Balanced' },
    { threshold: '0.8', useCase: 'Low false positives' },
  ],
  accessMethods: [
    'Web: botometer.org',
    'API: RapidAPI Botometer Pro (bulk)',
    'Python: botometer-python package',
  ],
  source: 'Botometer/OSoMe (Indiana University)',
  sourceUrl: 'https://botometer.osome.iu.edu/',
}

// --------------------------------------------------------------------------
// Bot Detection Limitations
// --------------------------------------------------------------------------
export const botDetectionLimitations = {
  title: 'Bot Detection Limitations (Harvard Study)',
  findings: [
    'Botometer imprecise for non-English',
    'Middle Eastern languages particularly affected',
    'Conservative thresholds still produce variance',
    'False negatives/positives over time',
    '"Most academic studies will unknowingly count a high number of human users as bots and vice versa"',
  ],
  methodology: {
    datasets: '5 datasets analyzed (3 verified bots, 2 verified humans)',
    languages: 'English/German',
    duration: '3-month observation period',
    sampleSize: 'n=4,134 accounts',
  },
  source: 'Harvard Cyber',
  sourceUrl: 'https://cyber.harvard.edu/publication/2020/false-positive-problem-automatic-bot-detection-social-science-research',
}

// --------------------------------------------------------------------------
// Engagement Fraud - Dubai Bling
// --------------------------------------------------------------------------
export const dubaiBlingData = {
  title: 'Dubai Bling Fake Followers',
  potentialFakeFollowers: '9.1 million+',
  auditPlatform: 'Modash.io',
  publicationDate: 'November 29, 2023',
  show: 'Dubai Bling (Netflix)',
  source: 'Arabian Business (Nov 29, 2023)',
  sourceUrl: 'https://www.arabianbusiness.com/abnews/dubai-bling-cast-could-have-more-than-9-1-million-fake-instagram-followers-audit-platform-claims',
}

// --------------------------------------------------------------------------
// GCC Influencer Fake Followers
// --------------------------------------------------------------------------
export const gccInfluencerData = {
  title: 'GCC Influencer Fake Followers',
  gccInfluencersWithFakeFollowers: 'Nearly 30%',
  source: 'UAE Barq (Instagram)',
  platform: 'Threads',
  sourceUrl: 'https://www.threads.com/@uae_barq_en/post/DXkP7p4DUUO/',
}

// --------------------------------------------------------------------------
// Fake X Accounts COP29 Azerbaijan
// --------------------------------------------------------------------------
export const cop29AzerbaijanData = {
  title: 'Fake X Accounts Promoting COP Hosts UAE, Azerbaijan (Nov 2024)',
  suspiciousAccountsIdentified: '71',
  accountsSetUpLast6Months: '93%',
  retweetsFromAzerbaijanCOP29GovAccountsSep: '70%',
  accountsConnectedTo6OrMoreOthers: 'Over half',
  followingAtLeastOneNetworkAccount: '87%',
  additionalAccountsLast5Months: '111',
  hashtagUsage: '#KarabakhIsAzerbaijan usage: 10% of tweets',
  assessment: '"Bears the hallmarks of an astroturfing campaign"',
  pattern: 'Mirrors similar operations during UAE\'s COP28 presidency',
  source: 'The New Arab (Nov 8, 2024)',
  sourceUrl: 'https://www.newarab.com/news/fake-x-accounts-promote-cop-hosts-uae-azerbaijan',
}

// --------------------------------------------------------------------------
// Global Witness Azerbaijan COP29
// --------------------------------------------------------------------------
export const globalWitnessCop29Data = {
  title: 'Global Witness: Azerbaijan COP29 X Accounts',
  accountsAnalyzed: '71',
  createdWithin6Months: '93%',
  septemberRetweetsFromAzerbaijanAccounts: '70%',
  connectedTo6OrMoreOtherAccounts: 'Over 50%',
  followingNetworkAccounts: '87%',
  note: 'X confirmed accounts were connected and "taken action against the majority"',
  source: 'Global Witness',
  sourceUrl: 'https://www.greenqueen.com.hk/azerbaijan-cop29-x-twitter-fake-accounts-climate-change-summit/',
}

// --------------------------------------------------------------------------
// OpenDemocracy Bots and Bans
// --------------------------------------------------------------------------
export const openDemocracyData = {
  title: 'OpenDemocracy: Bots and Bans Middle East',
  fakeFBInstagramAccountsRemoved: '4,000+',
  followersAcrossRemovedAccounts: '31 million+',
  fakeTwitterAccountsRemoved: '100,000+',
  advertisingSpendOnPropaganda: '$1.3 million+',
  monthlyPaymentSaudiTwitterArmy: '10,000 Saudi riyals (~$3,000)',
  countriesIdentified: 'Saudi Arabia, UAE, Egypt, Israel, Iran',
  keyClaims: [
    '"#We_all_trust_Mohammad_Bin_Salman" promoted after Khashoggi murder',
    'Israeli network: 21 Facebook pages with 1 million+ followers',
    '1,400 posts targeting Muslim politicians; 30,000+ shares',
  ],
  source: 'OpenDemocracy (Mar 12, 2020)',
  sourceUrl: 'https://www.opendemocracy.net/en/north-africa-west-asia/bots-and-bans-social-media-and-regime-propaganda-in-the-middle-east/',
}

// --------------------------------------------------------------------------
// Entity Registry - Companies/Organizations
// --------------------------------------------------------------------------
export const entityRegistryCompanies: EntityRegistryEntry[] = [
  { entity: 'DotDev', type: 'Company', country: 'UAE (Abu Dhabi)', role: 'Managed fake account operation' },
  { entity: 'Astroturf', type: 'Company', country: 'UAE (hired)', role: 'Smear campaigns against dissidents' },
  { entity: 'New Waves', type: 'Company', country: 'Egypt (Giza)', role: 'Egyptian affiliate of DotDev' },
  { entity: 'Newave', type: 'Company', country: 'UAE', role: 'Part of UAE network' },
  { entity: 'SMAAT', type: 'Company', country: 'MENA', role: '88,000+ accounts removed' },
  { entity: 'Saudi 24', type: 'Company', country: 'Saudi Arabia', role: 'Connected to Diavolo network' },
  { entity: 'Botometer/OSoMe', type: 'ResearchOrganization', country: 'USA (Indiana Univ)', role: 'Bot detection tool' },
  { entity: 'Modash.io', type: 'Company', country: 'Israel', role: 'Influencer audit' },
]

// --------------------------------------------------------------------------
// Entity Registry - Individuals as Targets
// --------------------------------------------------------------------------
export const entityRegistryTargets: EntityRegistryEntry[] = [
  { entity: 'Ahmed Mansoor', type: 'Individual', country: 'UAE', role: 'Human rights activist targeted by UAE government' },
  { entity: 'Nasser bin Ghaith', type: 'Individual', country: 'UAE', role: 'Academic targeted by UAE government (10-year sentence)' },
  { entity: 'Jamal Khashoggi', type: 'Individual', country: 'Saudi/UAE', role: 'Journalist killed 2018 at Saudi consulate' },
]

// --------------------------------------------------------------------------
// Entity Registry - Researchers/Experts
// --------------------------------------------------------------------------
export const entityRegistryResearchers: EntityRegistryEntry[] = [
  { entity: 'Marc Owen Jones', type: 'Researcher', country: 'Qatar', role: 'Bot network analysis - Hamad bin Khalifa University' },
  { entity: 'Rauchfleisch & Kaiser', type: 'Researcher', country: 'USA (Harvard)', role: 'Bot detection limitations study' },
  { entity: '"Don"', type: 'Individual', country: 'Philippines', role: 'Troll farm operation leader' },
]

// --------------------------------------------------------------------------
// Entity Registry - Government Agencies
// --------------------------------------------------------------------------
export const entityRegistryGovernment: EntityRegistryEntry[] = [
  { entity: 'TDRA', type: 'GovernmentAgency', country: 'UAE', role: 'Telecommunications regulation' },
  { entity: 'Cybersecurity Council', type: 'GovernmentAgency', country: 'UAE', role: 'Digital threat response' },
  { entity: 'Freedom House', type: 'ResearchOrganization', country: 'USA', role: 'Internet freedom monitoring' },
]

// --------------------------------------------------------------------------
// Sentiment Analysis Per Topic
// --------------------------------------------------------------------------
export const sentimentAnalysisByTopic: SentimentAnalysisEntry[] = [
  { topic: 'UAE Bot Operations', overallSentiment: 'HIGHLY NEGATIVE', dominantNarrative: 'State-sponsored manipulation, propaganda', sourceDiversity: 'Multiple independent sources' },
  { topic: 'RSF Campaign Support', overallSentiment: 'NEGATIVE', dominantNarrative: 'Deceptive framing of Sudan conflict', sourceDiversity: 'Academic + journalist' },
  { topic: 'COP28 Greenwashing', overallSentiment: 'NEGATIVE', dominantNarrative: 'Environmental credibility manipulation', sourceDiversity: 'Academic + journalist' },
  { topic: 'STC/Yemen Operations', overallSentiment: 'NEGATIVE', dominantNarrative: 'Regional destabilization', sourceDiversity: 'Academic + journalist' },
  { topic: 'Troll Farm Infrastructure', overallSentiment: 'NEGATIVE', dominantNarrative: 'Exploitative labor, manipulation', sourceDiversity: 'Academic + journalist' },
  { topic: 'African Propaganda', overallSentiment: 'NEGATIVE', dominantNarrative: 'Exploitation of African populations', sourceDiversity: 'Multiple sources' },
  { topic: 'Fake Engagement (Influencers)', overallSentiment: 'NEGATIVE', dominantNarrative: 'Commercial deception', sourceDiversity: 'Industry reports' },
  { topic: 'Deepfake Warnings', overallSentiment: 'NEUTRAL-POSITIVE', dominantNarrative: 'Government response/responsibility', sourceDiversity: 'Government + business' },
  { topic: 'Bot Detection', overallSentiment: 'NEUTRAL', dominantNarrative: 'Technical/tool perspective', sourceDiversity: 'Academic sources' },
]

// --------------------------------------------------------------------------
// Key Source Citations
// --------------------------------------------------------------------------
export const keySourceCitations: KeySourceCitation[] = [
  { number: 1, source: 'Marc Owen Jones (19,000 bots)', type: 'Substack', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://marcowenjones.substack.com/p/i-found-19000-uae-aligned-bots-promoting' },
  { number: 2, source: 'Marc Owen Jones (5,000 STC bots)', type: 'Substack', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://marcowenjones.substack.com/p/analysis-i-detected-over-5000-bot' },
  { number: 3, source: 'CarbonCopy (COP28)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://carboncopy.info/research-identifies-bots-engaged-in-greenwashing-during-cop28/' },
  { number: 4, source: 'POMEPS (Gulf Twitter)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://pomeps.org/tracking-adversaries-and-first-responding-to-disinfo-ops-the-evolution-of-deception-and-manipulation-tactics-on-gulf-twitter' },
  { number: 5, source: 'Al Jazeera (2019 suspension)', type: 'News', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://www.aljazeera.com/news/2019/9/20/twitter-suspends-thousands-of-fake-accounts-from-uae' },
  { number: 6, source: 'Al Jazeera (Gulf crisis)', type: 'News', tier: 1, uaeRelevance: 'HIGH', url: 'https://www.aljazeera.com/news/2019/7/21/the-fake-twitter-accounts-influencing-the-gulf-crisis' },
  { number: 7, source: 'WashingtonIDS (defamation)', type: 'Research', tier: 1, uaeRelevance: 'CRITICAL', url: 'https://washingtonids.org/the-uaes-use-of-hired-defamation-companies-a-new-low-in-political-repression/' },
  { number: 8, source: 'Freedom House 2023', type: 'NGO Report', tier: 0, uaeRelevance: 'CRITICAL', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2023' },
  { number: 9, source: 'Khaleej Times (troll farm)', type: 'News', tier: 3, uaeRelevance: 'HIGH', url: 'https://www.khaleejtimes.com/business/tech/trolls-earn-up-to-dh5000-for-misleading-people-on-social-media' },
  { number: 10, source: 'Wikipedia (troll farm)', type: 'Encyclopedia', tier: 2, uaeRelevance: 'MEDIUM', url: 'https://en.wikipedia.org/wiki/Troll_farm' },
  { number: 11, source: 'Middle East Eye (Diavolo)', type: 'News', tier: 2, uaeRelevance: 'HIGH', url: 'https://www.middleeasteye.net/opinion/despite-twitter-culls-riyadhs-disinformation-network-still-going-strong' },
  { number: 12, source: 'Botometer/OSoMe', type: 'Tool', tier: 1, uaeRelevance: 'MEDIUM', url: 'https://botometer.osome.iu.edu/' },
  { number: 13, source: 'OpenDemocracy', type: 'NGO', tier: 2, uaeRelevance: 'HIGH', url: 'https://www.opendemocracy.net/en/north-africa-west-asia/bots-and-bans-social-media-and-regime-propaganda-in-the-middle-east/' },
  { number: 14, source: 'Washington Post', type: 'News', tier: 2, uaeRelevance: 'HIGH', url: 'https://www.washingtonpost.com/politics/2019/09/25/saudi-uae-twitter-takedowns-wont-curb-rampant-disinformation-arab-twitter/' },
  { number: 15, source: 'Sage Journals (troll farm study)', type: 'Academic', tier: 0, uaeRelevance: 'MEDIUM', url: 'https://journals.sagepub.com/doi/10.1177/20563051231224713' },
  { number: 16, source: 'The New Arab (COP29)', type: 'News', tier: 2, uaeRelevance: 'HIGH', url: 'https://www.newarab.com/news/fake-x-accounts-promote-cop-hosts-uae-azerbaijan' },
  { number: 17, source: 'Global Witness (COP29)', type: 'NGO', tier: 2, uaeRelevance: 'HIGH', url: 'https://www.greenqueen.com.hk/azerbaijan-cop29-x-twitter-fake-accounts-climate-change-summit/' },
  { number: 18, source: 'Reddit r/dubai', type: 'Social', tier: 3, uaeRelevance: 'MEDIUM', url: 'https://www.reddit.com/r/dubai/comments/144h909/army_of_fake_social_media_accounts_defend_uae/' },
  { number: 19, source: 'Harvard Cyber (bot detection)', type: 'Academic', tier: 0, uaeRelevance: 'MEDIUM', url: 'https://cyber.harvard.edu/publication/2020/false-positive-problem-automatic-bot-detection-social-science-research' },
  { number: 20, source: 'Gulf News (misinformation)', type: 'News', tier: 2, uaeRelevance: 'MEDIUM', url: 'https://gulfnews.com/amp/story/uae%2Fhow-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024' },
  { number: 21, source: 'Trends Research (AI influence)', type: 'Research', tier: 2, uaeRelevance: 'HIGH', url: 'https://trendsresearch.org/insight/ai-driven-influence-operations-threats-to-middle-eastern-information-sovereignty-in-the-age-of-synthetic-media/' },
]

// --------------------------------------------------------------------------
// URL Fetch Status Log
// --------------------------------------------------------------------------
export const urlFetchStatusLog: URLFetchStatusEntry[] = [
  { url: 'marcowenjones.substack.com (19k)', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'marcowenjones.substack.com (5k)', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'carboncopy.info', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'aljazeera.com', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'freedomhouse.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'washingtonids.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'pomeps.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'gulfnews.com', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
  { url: 'trendsresearch.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
  { url: 'opendemocracy.net', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
  { url: 'en.wikipedia.org', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
  { url: 'cyber.harvard.edu', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'GOOD' },
  { url: 'pmc.ncbi.nlm.nih.gov', status: 'SUCCESS', dataExtracted: 'Full', contentQuality: 'EXCELLENT' },
  { url: 'botometer.osome.iu.edu', status: 'PARTIAL', dataExtracted: 'Landing page only', contentQuality: 'LIMITED' },
  { url: 'middleeasteye.net', status: 'BLOCKED (403)', contentQuality: '--' },
  { url: 'khaleejtimes.com', status: 'BLOCKED (403)', contentQuality: '--' },
  { url: 'journals.sagepub.com', status: 'BLOCKED', contentQuality: '--' },
  { url: 'misbar.com', status: 'BLOCKED', contentQuality: '--' },
  { url: 'thecradle.co', status: 'BLOCKED', contentQuality: '--' },
  { url: 'incyber.org', status: 'BLOCKED', contentQuality: '--' },
  { url: 'arabianbusiness.com', status: 'BLOCKED', dataExtracted: 'Partial from cache', contentQuality: 'PARTIAL' },
  { url: 'marketscreener.com', status: 'BLOCKED', dataExtracted: 'Partial from cache', contentQuality: 'PARTIAL' },
  { url: 'reddit.com', status: 'BLOCKED', contentQuality: '--' },
  { url: 'threads.com', status: 'ACCESSED', dataExtracted: 'Summary only', contentQuality: 'LIMITED' },
  { url: 'instagram.com', status: 'ACCESSED', dataExtracted: 'Summary only', contentQuality: 'LIMITED' },
  { url: 'greenqueen.com.hk', status: 'BLOCKED (403)', dataExtracted: 'Partial from cache', contentQuality: 'PARTIAL' },
  { url: 'newarab.com', status: 'BLOCKED (403)', dataExtracted: 'Partial from cache', contentQuality: 'PARTIAL' },
]

// --------------------------------------------------------------------------
// Research Notes
// --------------------------------------------------------------------------
export const researchNotes = [
  'Language Detection Gap: Botometer\'s documented imprecision for non-English accounts (particularly Arabic) significantly affects UAE-focused bot detection accuracy. Academic studies using English thresholds on Arabic content likely produce high false positive/negative rates.',
  'Network Persistence: Despite Twitter/X takedowns (4,258+ accounts in 2019), UAE-aligned networks have continued operating and growing, demonstrating resilience and adaptation to platform enforcement.',
  'Cross-Platform Expansion: Operations documented across Twitter/X, Facebook, Instagram, YouTube, Reddit, and TikTok, indicating multi-platform manipulation strategy.',
  'Recurring Patterns: Similar bot network structures (generals/minions hierarchy) observed across RSF campaign (2025), COP28 (2023), and COP29 Azerbaijan (2024) operations.',
  'Casual Labor Market: Troll farm workers earning Dh2,000-Dh5,000/month represents significant casual labor market for disinformation, distinct from state-sponsored technical operations.',
]

// --------------------------------------------------------------------------
// Fetch Summary
// --------------------------------------------------------------------------
export const fetchSummary = {
  totalUrls: 35,
  fullyAccessible: 13,
  fullyAccessiblePercent: '37%',
  partiallyAccessible: 8,
  partiallyAccessiblePercent: '23%',
  blocked: 14,
  blockedPercent: '40%',
}

// --------------------------------------------------------------------------
// Atomic Queries Executed
// --------------------------------------------------------------------------
export const atomicQueriesExecuted = [
  { number: 1, query: 'UAE + bot/automated/script', status: 'EXECUTED', keyFindings: '19,000 bots, 1,900 COP28 bots' },
  { number: 2, query: 'UAE + fake account/sock puppet/astroturfing', status: 'EXECUTED', keyFindings: 'Astroturf company, 4,258 suspended' },
  { number: 3, query: 'UAE + troll farm/paid troll', status: 'EXECUTED', keyFindings: '500-person army, Dh5,000/month' },
  { number: 4, query: 'UAE + inauthentic/synthetic/artificial', status: 'EXECUTED', keyFindings: 'AI influence operations, deepfake warnings' },
  { number: 5, query: 'UAE + new account + high volume/repetitive/template', status: 'EXECUTED', keyFindings: '81.4% created in 5-month window' },
  { number: 6, query: 'UAE + account + no profile pic/random name/numbers', status: 'EXECUTED', keyFindings: 'Detection indicators documented' },
  { number: 7, query: 'UAE + tweet + identical/copy-paste/mass posted', status: 'EXECUTED', keyFindings: '96% via Twitter Web App' },
  { number: 8, query: 'UAE + 24/7 posting activity impossible human', status: 'EXECUTED', keyFindings: '2,500+ tweets/day (Diavolo)' },
  { number: 9, query: 'UAE + engagement + fake/purchased/inflated bot-like', status: 'EXECUTED', keyFindings: '9.1M fake followers, 30% GCC' },
  { number: 10, query: 'Botometer/bot detection analysis', status: 'EXECUTED', keyFindings: '1,000+ features, AUC 0.99' },
  { number: 11, query: 'UAE + bot network Twitter X coordinated', status: 'EXECUTED', keyFindings: '88,000+ accounts (SMAAT)' },
  { number: 12, query: 'UAE + propaganda bot detection Twitter', status: 'EXECUTED', keyFindings: 'Documented across multiple ops' },
  { number: 13, query: 'UAE + hired defamation company sock puppet', status: 'EXECUTED', keyFindings: 'Ahmed Mansoor, Nasser bin Ghaith targets' },
  { number: 14, query: 'Arab troll farm paid social media', status: 'EXECUTED', keyFindings: '500 people, shift work documented' },
  { number: 15, query: 'Botometer API methodology features', status: 'EXECUTED', keyFindings: 'ESC architecture, 6 feature classes' },
  { number: 16, query: 'UAE Twitter bot COP28 network analysis', status: 'EXECUTED', keyFindings: '22 generals, 1,850 minions' },
  { number: 17, query: 'UAE fake social media Africa bot farm', status: 'EXECUTED', keyFindings: 'BBC investigation documented' },
  { number: 18, query: 'UAE bot detection Twitter suspended accounts', status: 'EXECUTED', keyFindings: '4,258 + 267 suspended' },
  { number: 19, query: 'UAE digital repression dissidents social media', status: 'EXECUTED', keyFindings: '10-year sentence for online speech' },
  { number: 20, query: 'UAE fake engagement purchased followers', status: 'EXECUTED', keyFindings: 'YouTube policy, Instagram fraud' },
  { number: 21, query: 'UAE sock puppet bot farm troll manipulation', status: 'EXECUTED', keyFindings: 'Full ecosystem documented' },
]

// --------------------------------------------------------------------------
// Dashboard KPIs - Bot Network Scale
// --------------------------------------------------------------------------
export const dashboardKPIsBotNetwork = [
  { kpi: 'Largest UAE Bot Network', value: '19,514 accounts', trend: '--', lastUpdated: 'Dec 2025' },
  { kpi: 'COP28 Bot Network', value: '7,000 accounts', trend: '--', lastUpdated: 'Dec 2023' },
  { kpi: 'STC Yemen Bot Network', value: '5,626 estimated bots', trend: '--', lastUpdated: 'Dec 2025' },
  { kpi: 'Twitter UAE Suspension (2019)', value: '4,258 accounts', trend: '--', lastUpdated: 'Sep 2019' },
  { kpi: 'Diavolo Network (Saudi)', value: '3,700 accounts', trend: 'Active', lastUpdated: 'Jan 2020' },
  { kpi: 'Troll Farm Operators', value: '~500 people', trend: '--', lastUpdated: 'Mar 2019' },
  { kpi: 'SMAAT Removed Accounts', value: '88,000+', trend: '--', lastUpdated: '2019' },
]

// --------------------------------------------------------------------------
// Dashboard KPIs - Engagement Fraud
// --------------------------------------------------------------------------
export const dashboardKPIsEngagementFraud = [
  { kpi: 'Dubai Bling Fake Followers', value: '9.1 million+', source: 'Modash.io' },
  { kpi: 'GCC Influencers with Fake Followers', value: '~30%', source: 'UAE Barq' },
  { kpi: 'Fake FB/IG Accounts Removed', value: '4,000+', source: 'OpenDemocracy' },
  { kpi: 'Fake Twitter Accounts Removed', value: '100,000+', source: 'OpenDemocracy' },
]

// --------------------------------------------------------------------------
// Dashboard KPIs - Impact
// --------------------------------------------------------------------------
export const dashboardKPIsImpact = [
  { kpi: 'RSF Campaign Impressions', value: '91+ million', context: 'Oct-Nov 2025' },
  { kpi: 'Iranian Campaign (UK) Impressions', value: '224 million', context: '2020' },
  { kpi: 'Removed Account Followers', value: '31 million+', context: 'OpenDemocracy' },
  { kpi: 'Propaganda Advertising Spend', value: '$1.3 million+', context: 'OpenDemocracy' },
]

// --------------------------------------------------------------------------
// Dashboard KPIs - Detection Confidence
// --------------------------------------------------------------------------
export const dashboardKPIsDetectionConfidence = [
  { kpi: 'Bot Account Accuracy (AUC)', value: '0.99', source: 'Botometer-V4' },
  { kpi: 'Non-English Detection Limitation', value: 'HIGH', source: 'Harvard study' },
  { kpi: 'False Positive Risk', value: 'Significant', source: 'Academic consensus' },
]

// --------------------------------------------------------------------------
// UAE Tackling Digital Misinformation
// --------------------------------------------------------------------------
export const uaeTacklingMisinformationData = {
  title: 'UAE Tackling Digital Misinformation (Recent)',
  entities: [
    { entity: 'Telecommunications and Digital Government Regulatory Authority (TDRA)', role: 'Primary regulator' },
    { entity: 'Cybersecurity Council', role: 'Lead agency for coordinated response' },
  ],
  capabilities: [
    'AI tools to detect unusual online activity',
    'Identification of misleading content',
    'Specialized teams for rapid response to cyber threats',
    'Coordination between government, media, and educational institutions',
  ],
  scale: '"Millions of accounts linked to suspicious activity removed in recent years" by global platforms',
  laws: 'Criminal penalties for spreading false information affecting public safety or economy',
  source: 'Gulf News',
  sourceUrl: 'https://gulfnews.com/amp/story/uae%2Fhow-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024',
}

// --------------------------------------------------------------------------
// UAE Warning Against AI Deepfakes
// --------------------------------------------------------------------------
export const uaeDeepfakeWarningsData = {
  title: 'UAE Warning Against AI-Generated Deepfakes',
  publicationDate: 'November 7, 2025',
  warningAgency: 'UAE Government',
  legalFramework: 'UAE cybercrime law',
  keyAction: 'Public urged to verify before sharing',
  status: 'Arabian Business URL blocked - Content from alternate search',
  source: 'Arabian Business (Nov 7, 2025)',
  sourceUrl: 'https://www.arabianbusiness.com/life/uae-issues-warning-over-ai-deepfake-threats-and-fake-videos',
}

// --------------------------------------------------------------------------
// AI-Driven Influence Operations
// --------------------------------------------------------------------------
export const aiInfluenceOperationsData = {
  title: 'AI-Driven Influence Operations (Middle East)',
  respondentsSurveyed: '~6,000 (across Arab countries)',
  proISIS_TweetsPeak: '40,000/day',
  isisApp: 'At peak',
  facebookFakeAccountsRemoved2020: '8,000',
  iranCampaignImpressionsUK: '224 million',
  iranOperationsScotland: '126,000+ interactions',
  iranStateLinkedTweets2020Study: '1.7 million',
  keyFindings: [
    '"LLMs can be just as persuasive propagandists as humans"',
    '"Individuals frequently misclassified AI-generated images as authentic"',
    '"Social media algorithms promote provocative content"',
    '"Messages delivered by in-group members considered more psychologically persuasive"',
    '"AI chatbots can cultivate a feeling of personal connection and trust"',
  ],
  source: 'Trends Research (Feb 11, 2026)',
  sourceUrl: 'https://trendsresearch.org/insight/ai-driven-influence-operations-threats-to-middle-eastern-information-sovereignty-in-the-age-of-synthetic-media/',
}

// --------------------------------------------------------------------------
// Export all data
// --------------------------------------------------------------------------
export const botInauthenticData = {
  executiveSummary: botInauthenticExecutiveSummary,
  uaeRelevanceAssessmentMatrix,
  sourceCredibilityMatrix: botSourceCredibilityMatrix,
  rsfBotsData,
  cop28BotsData,
  stcBotsData,
  twitterSuspensionData,
  freedomHouseData,
  trollFarmData,
  trollFarmAcademicData,
  diavoloNetworkData,
  globalTrollFarmData,
  pomepsData,
  defamationCompaniesData,
  fakeSudaneseAccountsData,
  bbcAfricaInvestigationData,
  redditCOPDiscussionData,
  botDetectionIndicators,
  botometerSpecs,
  botDetectionLimitations,
  dubaiBlingData,
  gccInfluencerData,
  cop29AzerbaijanData,
  globalWitnessCop29Data,
  openDemocracyData,
  entityRegistryCompanies,
  entityRegistryTargets,
  entityRegistryResearchers,
  entityRegistryGovernment,
  sentimentAnalysisByTopic,
  keySourceCitations,
  urlFetchStatusLog,
  researchNotes,
  fetchSummary,
  atomicQueriesExecuted,
  dashboardKPIs: {
    botNetworkScale: dashboardKPIsBotNetwork,
    engagementFraud: dashboardKPIsEngagementFraud,
    impact: dashboardKPIsImpact,
    detectionConfidence: dashboardKPIsDetectionConfidence,
  },
  uaeTacklingMisinformationData,
  uaeDeepfakeWarningsData,
  aiInfluenceOperationsData,
}
