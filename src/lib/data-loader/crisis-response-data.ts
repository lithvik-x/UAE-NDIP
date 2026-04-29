// @ts-nocheck
'use client'

/**
 * Crisis Response Deep Research Data (MD 12-3)
 * Comprehensive intelligence gathering during active crisis
 */

import type {
  CrisisLevel,
  CrisisLevelColor,
  CrisisLevelClassification,
  CrisisManagementLesson,
  OSINTtool,
  NarrativeAttackCase,
  CrisisQueryPhase,
  CrisisMetric,
  EntityRegistry,
  SentimentByTopic,
  DeepFakeStatistic,
  DisinformationStatistic,
  InfluencerStatistic,
  EmergencyManagementStatistic,
  FactCheckingStatistic,
  DigitalStatistic,
  ToolRecommendation,
  SourceCitation,
  CrisisStatistics,
  NarrativeAttackStatistics,
  InfluencerImpactStatistics,
  EmergencyManagementStatistics,
  FactCheckingStatistics,
  DigitalStatistics,
  CrisisResponseData,
  TierLevel,
} from './types'

// ============================================================================
// CRISIS LEVEL CLASSIFICATION
// ============================================================================

export const crisisLevels: CrisisLevelClassification[] = [
  { level: 1 as CrisisLevel, color: 'GREEN' as CrisisLevelColor, triggerCriteria: 'Routine monitoring', queryFrequency: 'Hourly' },
  { level: 2 as CrisisLevel, color: 'YELLOW' as CrisisLevelColor, triggerCriteria: 'Elevated concern', queryFrequency: '30-min' },
  { level: 3 as CrisisLevel, color: 'ORANGE' as CrisisLevelColor, triggerCriteria: 'Active crisis', queryFrequency: '15-min' },
  { level: 4 as CrisisLevel, color: 'RED' as CrisisLevelColor, triggerCriteria: 'Severe crisis', queryFrequency: 'Continuous' },
  { level: 5 as CrisisLevel, color: 'BLACK' as CrisisLevelColor, triggerCriteria: 'Catastrophic', queryFrequency: 'Maximum rate' },
]

// ============================================================================
// UAE CRISIS RESPONSE INFRASTRUCTURE
// ============================================================================

export const uaeCrisisInfrastructure = {
  wcems2025: {
    name: 'World Crisis & Emergency Management Summit 2025',
    location: 'Abu Dhabi (ADNEC)',
    theme: 'Together Towards Building Global Resilience',
    organizer: 'NCEMA',
    inauguratedBy: 'Nahyan bin Mubarak',
    keyFocus: ['Resilience', 'Tech-driven strategies', 'Risk prediction', 'Response and recovery best practices'],
    participants: 'Government entities involved in emergency, crisis, and disaster management system',
  },
  adcmc: {
    name: 'Abu Dhabi Emergency, Crisis and Disaster Management Committee',
    date: 'May 7, 2025',
    head: 'Major General Ahmed Saif bin Zaitoon Al Muhairi (Abu Dhabi Police Commander-in-Chief)',
    organization: 'Emergencies, Crises, and Disasters Management Centre - Abu Dhabi (ADCMC)',
    context: 'First meeting following restructuring',
    activities: ['Evaluated preventive plans', 'Reviewed past/ongoing events', 'Identified anticipated challenges', 'Adopted preparedness measures'],
    readinessFocus: ['Risk assessment', 'Strategic planning', 'Realistic drills', 'Public-private sector coordination', 'Continuity of vital services'],
    quote: 'At ADCMC, our goal is to develop a comprehensive ecosystem...to strengthen the emirate\'s readiness in case of crises and disasters.',
    emergencyOperationsCentre: 'Activated May 29, 2025, with national and zonal centres now operational',
  },
  barakah2025: {
    name: 'Barakah UAE 2025 Exercise',
    purpose: 'Test capabilities of command and control system, evaluate response mechanisms, ensure readiness for nuclear emergencies',
    source: 'NCEMA',
  },
}

// ============================================================================
// CRISIS MANAGEMENT LESSONS FROM 2025
// ============================================================================

export const crisisManagementLessons: CrisisManagementLesson[] = [
  {
    id: 1,
    title: 'Speed of Communication Shapes Outcomes',
    description: 'Organizations that communicated quickly before having all answers prevented rumors and confusion',
    keyPoints: [
      'Fast communication means notifying the right people immediately, not waiting for perfect information',
      'During the AWS outage in 2025, organizations with clear public statements helped customers make informed decisions',
    ],
  },
  {
    id: 2,
    title: 'Weather Events Exposed Weak Structures',
    description: 'Early, clear alerts through one trusted channel helped people make safer decisions',
    keyPoints: [
      'Communication plans must work even when infrastructure is unavailable',
      'The Texas floods disrupted transport, utilities, schools, and healthcare across large areas',
    ],
  },
  {
    id: 3,
    title: 'Multi-Site Organizations Need Coordinated Messaging',
    description: 'Central incident management platforms enabled consistent guidance across locations',
    keyPoints: [
      'Coordination ensures everyone works from the same information',
      'Power outages across Europe in 2025 affected organizations operating in several countries simultaneously',
    ],
  },
  {
    id: 4,
    title: 'Manual Communication Fails Under Pressure',
    description: 'Phone trees and informal messaging break down during crises',
    keyPoints: [
      'Structured alerting systems track responses and reveal gaps immediately',
      'Many organizations relied on phone trees, shared inboxes, or informal messaging groups that broke down under stress',
    ],
  },
  {
    id: 5,
    title: 'Plans Must Be Activatable',
    description: 'Crisis plans stored on unavailable systems are useless',
    keyPoints: [
      'Link plans directly to incident response so actions assign automatically based on role',
      'Crisis plans often existed but were stored in places people could not access during incidents',
    ],
  },
  {
    id: 6,
    title: 'Leaders Need Clear Progress Views',
    description: 'Senior leaders perform best with a single dashboard showing who was alerted, who responded, and outstanding actions',
    keyPoints: [
      'Visibility reduces decision delays',
      'Senior leaders were often flooded with information but lacked clarity',
    ],
  },
  {
    id: 7,
    title: 'Too Many Channels Create Confusion',
    description: 'One consistent message through a trusted system outperforms multiple uncoordinated updates',
    keyPoints: [
      'Clarity comes from authority and consistency',
      'When staff received the same message through several uncoordinated channels, they questioned which one was correct',
    ],
  },
]

// ============================================================================
// REAL-TIME CRISIS MONITORING SYSTEMS
// ============================================================================

export const realTimeMonitoringSystems = {
  earlyWarningSigns: [
    'Spikes in negative sentiment or mentions tied to your brand or executives',
    'Viral conversations that escalate faster than normal',
    'Unusual media attention from niche or regional outlets',
    'Critical signals from influencers, journalists, or advocacy groups',
    'Whistleblower leaks that are gaining traction online',
  ],
  detectionMethods: [
    'Systematic tracking of brand mentions, industry signals, and reputational risks across media, social channels, blogs, and forums',
    'Human analyst interpretation to distinguish routine chatter from corporate crises',
    'Automated keyword alerts (noted as insufficient alone)',
    'Real-time alerts with expert human analysis filtering',
  ],
  statistics: {
    boeing737Max9Grounded: 171,
    starbucksCeoPayPackage: '$100 million+',
    ceoCommuteDistance: '1,000 miles',
    therapeuticAreasTracked: 47,
    competitorsMonitored: 12,
    regulatoryBodiesTracked: 8,
    dailyStandupCallDuration: '45 minutes',
    analystBriefingDeliveryTime: 'Before 7 AM',
  },
}

// ============================================================================
// AI-POWERED MEDIA MONITORING
// ============================================================================

export const aiMediaMonitoring = {
  capabilities: [
    'Monitors millions of online conversations in real time',
    'Spots negative sentiment, keywords, and emerging trends before they escalate',
    'Can forecast how discussions may evolve into crises',
    'Enables proactive intervention',
    'Analyzes coverage to distill key themes',
    'Identifies negative sentiment',
    'Surfaces influential voices',
    'Can draft initial statements, create FAQs, and suggest platform-specific messaging',
    'Reduces response time from hours to minutes',
  ],
  essentialCrisisMetrics: [
    'Media impressions and reach',
    'Website traffic',
    'Sentiment analysis',
    'Social media engagement',
    'Coverage volume over time',
  ],
  performanceStats: {
    sentimentAnalysisAccuracy: '90%+',
    realTimeProcessing: true,
  },
}

// ============================================================================
// DARK WEB & OSINT MONITORING
// ============================================================================

export const osintTools: OSINTtool[] = [
  { name: 'Talkwalker', capabilities: 'Scans 150M+ websites and 30+ social networks in 187 languages; real-time alerts; Blue Silk AI trend prediction up to 90 days', coverage: '150M+ websites, 30+ social networks, 187 languages' },
  { name: 'Intelligence X', capabilities: 'Dark web and data leak monitoring; automated alert system; selector-based search', coverage: 'Dark web, data leaks' },
  { name: 'Crimewall', capabilities: '500+ data source integrations (social media, messengers, dark web); three visualization modes', coverage: '500+ data sources' },
  { name: 'Liferaft', capabilities: 'Real-time threat monitoring across public sources and dark web; geographic visualization', coverage: 'Public sources, dark web' },
  { name: 'Maltego', capabilities: 'Cross-platform activity monitoring; entity connection visualization; free community edition', coverage: 'Cross-platform' },
  { name: 'OSINT Industries', capabilities: 'Real-time identity searches; 100% accuracy; email/phone/username lookups', coverage: 'Identity searches' },
  { name: 'Shodan.io', capabilities: 'Global device discovery; network exposure monitoring', coverage: 'Global devices' },
  { name: 'PimEyes', capabilities: 'Face-based reverse image search; AI-powered facial recognition', coverage: 'Facial recognition' },
  { name: 'Babel Street', capabilities: '200+ languages; AI-powered identity matching; cross-language network analysis', coverage: '200+ languages' },
  { name: 'OpenSanctions', capabilities: '245 global sources; sanctions/PEP/criminal watchlist monitoring', coverage: '245 global sources' },
]

export const darkWebTools = [
  { tool: 'Breachsense', bestFor: 'API-driven credential monitoring' },
  { tool: 'SpyCloud', bestFor: 'Post-infection remediation' },
  { tool: 'Recorded Future', bestFor: 'Enterprise threat intelligence' },
  { tool: 'CrowdStrike Falcon Intelligence Recon', bestFor: 'CrowdStrike ecosystem users' },
  { tool: 'Flashpoint', bestFor: 'Government and critical infrastructure' },
  { tool: 'DarkOwl', bestFor: 'Threat research and investigations' },
  { tool: 'ZeroFox', bestFor: 'Brand protection' },
  { tool: 'Constella Intelligence', bestFor: 'Identity fraud detection' },
  { tool: 'Mandiant (Google)', bestFor: 'Incident response' },
  { tool: 'SOCRadar', bestFor: 'Attack surface management' },
  { tool: 'Group-IB', bestFor: 'Cybercrime investigations' },
  { tool: 'Cyble', bestFor: 'Cybercrime research' },
  { tool: 'Kela', bestFor: 'Threat actor-focused monitoring' },
  { tool: 'ID Agent Dark Web ID', bestFor: 'MSPs and sales enablement' },
  { tool: 'Flare', bestFor: 'Mid-market teams' },
]

export const darkWebStats = {
  usernamePasswordPairsCirculating: '24 billion',
  webAttacksStolenCredentials: '88%',
  phishingEmailsInfostealers2024: '84% increase',
  credentialExposureTime: 'Hours',
}

// ============================================================================
// NARRATIVE ATTACK INTELLIGENCE
// ============================================================================

export const narrativeAttacks: NarrativeAttackCase[] = [
  {
    name: 'Taylor Swift & Travis Kelce Engagement',
    description: 'Five manipulated narratives identified; PR-stunt allegations, NFL conspiracy theories, misogynistic attacks',
    metrics: { engagementVolume: '$250,000+' },
    coordinationPatterns: ['Prediction-market manipulation', 'Non-organic orchestrated conversations'],
  },
  {
    name: '#TheBanksAreOutOfMoney Campaign',
    description: 'Coordinated actors pushed hashtag across social platforms; doctored Bloomberg-style dashboard screenshots',
    metrics: { engagementVolume: 'Triggered genuine concerns about bank runs' },
    coordinationPatterns: ['Doctored screenshots', 'Cross-platform amplification'],
  },
  {
    name: 'AI Actor Tilly Norwood (Particle6/Xicoia)',
    description: 'Triggered seven distinct manipulated narratives',
    metrics: { engagementVolume: '36% posts emphasized identity theft, 28% targeted agencies as traitors' },
    coordinationPatterns: ['Bot-like activity amplification', 'Significant artificial debate'],
  },
  {
    name: 'California Wildfires',
    description: 'Partisan actors assigned blame, spread false evacuation info',
    metrics: {},
    coordinationPatterns: ['Clear coordination patterns', 'Bot amplification during active emergency'],
  },
  {
    name: 'European Energy Blackout (Spain/Portugal)',
    description: '34,000+ posts claimed renewable energy responsible in two days; 9,400+ posts blamed Israel',
    metrics: { engagementVolume: '34,000+ posts in 2 days' },
    coordinationPatterns: ['Technical assessments indicated cascade failures, not external attacks'],
  },
  {
    name: 'India-Pakistan Digital War',
    description: 'Over 180,000 posts generated 3+ million engagements',
    metrics: { anomalyRate: 33.9, botLikeActivity: 18.5, engagementVolume: '3+ million' },
    coordinationPatterns: ['High anomaly rates indicate orchestration', 'Bot-like activity on war escalation content'],
  },
  {
    name: 'EV Narrative Attacks',
    description: '8 manipulated narratives tracked; false claims that 90% of charging stations have been hacked',
    metrics: {},
    coordinationPatterns: ['False claims about charging infrastructure'],
  },
  {
    name: 'Hijacked AI Agent (Claude)',
    description: '80-90% of operation executed without human guidance',
    metrics: {},
    coordinationPatterns: ['Autonomous operation execution'],
  },
]

export const narrativeStats = {
  annualCostPerceptionManipulation: '$78 billion',
  publicCompanyLossesNarrativeAttacks: '$39 billion/year',
  anomalyRateIndiaPakistan: 33.9,
  botLikeActivityWarContent: 18.5,
  engagementVolumeIndiaPakistan: '3+ million',
}

// ============================================================================
// CROSS-PLATFORM AMPLIFICATION TRACKING
// ============================================================================

export const crossPlatformTracking = {
  xpStmModel: 'Cross-Platform Sentiment Transferability Model (XP-STM) analyzes negative sentiment migration across platforms',
  influenceCampaignMechanics: [
    'Engagement patterns',
    'Cross platform narrative pickup',
    'Media echo effects',
    'Institutional responses',
    'Counter framing',
  ],
  trackingMethods: [
    'Distribution Testing: Posting across multiple platforms/communities, varying tone and emotional triggers, monitoring engagement velocity and resistance',
    'Feedback Loops: Identifying which narratives spread versus which stall',
    'Institutional Response Tracking: Measuring whether targets make credibility damaging responses',
  ],
  keyMetrics: [
    { metric: 'Engagement velocity', purpose: 'Initial traction measurement' },
    { metric: 'Cross-platform pickup', purpose: 'Narrative diffusion tracking' },
    { metric: 'Media echo effects', purpose: 'Mainstream amplification' },
    { metric: 'Ambient assumption status', purpose: 'Success threshold' },
  ],
  operationalIndicators: [
    'Repetition and agenda setting effectiveness',
    'Whether corrections are reframed as spin',
    'Influencer hesitation indicators',
    'Trust erosion persistence',
    'Disengagement levels',
  ],
  strategicInsight: 'Success is measured less by belief conversion and more by changes in the decision environment',
}

// ============================================================================
// SENTIMENT ANALYSIS FOR CRISIS DETECTION
// ============================================================================

export const sentimentAnalysisCrisis = {
  technology: 'Combines AI, NLP, and machine learning; analyzes words, emojis, hashtags, and engagement patterns; 90%+ accuracy rates; processes thousands of posts per second',
  criticalStat: '28% of social media crises go global within an hour',
  keyMetrics: [
    'Sentiment scores: -1 (very negative) to +1 (very positive)',
    'Response time measurement',
    'Sentiment recovery time',
  ],
  caseStudies: [
    { company: 'Adidas', year: 2022, crisis: 'Kanye West partnership', outcome: 'Terminated within hours after sentiment tools flagged surging negative mentions' },
    { company: 'United Airlines', year: 2017, crisis: 'Passenger removal', outcome: '$1.4 billion market value loss due to delayed response' },
    { company: 'Starbucks', year: 2018, crisis: 'Wrongful arrests', outcome: 'Swift apology; closed 8,000 stores for bias training' },
    { company: 'Tesla', year: 'Recurring', crisis: 'Product recalls', outcome: 'AI-driven sentiment analysis to adjust messaging proactively' },
    { company: 'Yelp', year: 'Ongoing', crisis: 'Customer complaints', outcome: 'Real-time processing to prevent escalation' },
  ],
  limitations: ['Sarcasm detection', 'Slang interpretation', 'Regional expressions', 'Contextual nuances', 'Cultural differences'],
}

// ============================================================================
// SOCIAL MEDIA TREND VELOCITY
// ============================================================================

export const socialMediaTrendVelocity = {
  fiveStages: [
    { stage: 'Fanbase formation', description: 'Low mention volume, high sentiment - early adopters spark the trend' },
    { stage: 'Catalyst events', description: 'Sudden conversation spikes' },
    { stage: 'Virtuous circle', description: 'Consistent organic growth in mentions' },
    { stage: 'Backlash', description: 'Drop in net sentiment as trend becomes overdone' },
    { stage: 'Status quo', description: 'Stable baseline or fade' },
  ],
  velocityForecasting: 'AI and machine learning create 90-day forecasts with 90% confidence level; analyzes historical patterns and real-time data',
  keyStatistics: {
    marketersFeelingPressureRespondDaily: '22%',
    taylorSwiftAnnouncementWeekMentions: '2.08 million',
    taylorSwiftLaunchWeekMentions: '2.71 million',
    labubuTrendTotalMentions: '800K+',
  },
}

// ============================================================================
// FACT-CHECK VERIFICATION SYSTEMS
// ============================================================================

export const factCheckVerification = {
  clefTasks: [
    { task: 'Task 1: Subjectivity Detection', description: 'Binary classification subjective/objective', languages: 'Arabic, Bulgarian, English, German, Italian + zero-shot French/Spanish', datasetSizes: '2.6k-2.8k sentences per language' },
    { task: 'Task 2: Claim Normalization', description: 'Generate simplified version preserving core assertion', languages: '20 languages including EN/AR/HI/ES', datasetSizes: 'English: 11,374 train; Spanish: 3,458 train' },
    { task: 'Task 3: Fact-Checking Numerical Claims', description: 'Classify as True/False/Conflicting using BM25', languages: 'English, Spanish, Arabic', datasetSizes: 'English: 15,514 claims' },
    { task: 'Task 4: Scientific Web Discourse', description: 'Detect scientific claims; find source papers', languages: 'English', datasetSizes: 'SciTweets: 1,261 train; 15,967 tweet-study pairs' },
  ],
  globalFactChecking: {
    activeProjects: 443,
    countriesWithFactCheckers: 116,
    languagesCovered: '70+',
    projectsInDangerousCountries: '~80',
    articlesJanMay2024: 40500,
    articlesJanMay2025: 38000,
    projectsStartedEnded2024: '13 started, 13 ended (net zero)',
    growth2014to2022: '110 → 453 projects (+300%+)',
    metaPartnershipProjects: '~160 (~⅓)',
    metaRevenueFactCheckers: '~45% of IFCN signatories revenue',
  },
  regionalBreakdown: [
    { region: 'Europe', projects: 139 },
    { region: 'Africa', projects: 67 },
    { region: 'South America', projects: 39 },
  ],
}

// ============================================================================
// GOVERNMENT EMERGENCY RESPONSE FRAMEWORKS
// ============================================================================

export const governmentEmergencyResponse = {
  framework: 'National Response Framework (NRF) - Guide to how the nation responds to all types of disasters and emergencies',
  deloitteNema2025: [
    { category: 'Funding', finding: 'Cite as primary concern', percentage: 64 },
    { category: 'Budget constraints', finding: 'Workforce challenge', percentage: 81 },
    { category: 'Competitive job market', finding: 'Workforce challenge', percentage: 81 },
    { category: 'Shortage of qualified candidates', finding: 'Workforce challenge', percentage: 64 },
    { category: 'Staff with necessary emergency management skills', finding: 'Only 25% have them', percentage: 25 },
    { category: 'Intermediate technology capability', finding: 'Report this level', percentage: 60 },
    { category: 'Infrastructure limitations', finding: 'Barrier to AI adoption', percentage: 85 },
    { category: 'Mitigation time preference', finding: 'Want to spend', percentage: 44 },
    { category: 'Mitigation time current', finding: 'Actually spending', percentage: 5 },
  ],
  investmentPriorities: [
    { priority: 'Workforce', percentage: 97 },
    { priority: 'Technology/infrastructure', percentage: 89 },
  ],
  commonTechnologies: ['Geographic information systems', 'Web-based emergency operations centers', 'Grant management solutions'],
  desiredTechnologies: ['AI', 'Big data', 'Advanced risk modeling—currently facing procurement and familiarity barriers'],
  expandingMission: ['Cyberattacks', 'Utility disruptions', 'Active-shooter events', 'Industrial accidents', 'Traditional natural hazards'],
}

// ============================================================================
// POST-CRISIS ASSESSMENT
// ============================================================================

export const postCrisisAssessment = {
  disasterReactionPhases: [
    { phase: 'Phase 1: Impact', timeline: 'Hours, days, or weeks', reactions: ['Threat', 'shock', 'fear', 'helplessness', 'anxiety', 'guilt'], behaviors: 'Disorganization or focused response; protective actions' },
    { phase: 'Phase 2: Immediate - Rescue', timeline: 'Days and weeks', reactions: ['Numbness', 'shock', 'denial', 'confusion', 'anxiety', 'grief', 'flashbacks', 'anger', 'despair', 'sadness', 'hopelessness'], behaviors: 'Emotional delay common; not predictive of long-term outcomes' },
    { phase: 'Phase 3: Intermediate - Recovery', timeline: 'Weeks to months', reactions: ['Numbness', 'relief → then disillusionment', 'disappointment', 'resentment (second disaster)'], behaviors: 'Sleep disturbance, indigestion, fatigue; relationship and work difficulties' },
    { phase: 'Phase 4: Long-Term - Reconstruction', timeline: 'Several months to years', reactions: ['Fear', 'resentment', 'depression'], behaviors: 'Socioeconomic, cultural, racial, political factors; media coverage may worsen symptoms' },
  ],
  keyPrinciple: 'Responses and interventions appropriate for one stage might be of little use—or even potentially harmful—at another phase.',
}

// ============================================================================
// INFLUENCER RESPONSE IN CRISIS
// ============================================================================

export const influencerCrisisResponse = {
  influencerAlignment: 'In victim crises (minimal blame), bolstering strategies are effective; conveyed by influencers who appear empathetic and reassuring',
  mitigationCapabilities: [
    'Strengthening brand community',
    'Humanizing brand',
    'Moving focus away from crisis',
    'Rebuilding trust',
  ],
  statistics: {
    trustInfluencerRecommendations: 69,
    trustEarnedMedia: 92,
    purchasedDueToInfluencer: 63,
    socialMediaProductResearch: 41,
    usAdultsBelievingCallingOutCompanies: 58,
    globalSocialMediaUsers: '5.07 billion',
    businessesUsingSocialMediaMarketing: 90,
  },
  caseStudies: [
    { brand: 'One Size Beauty', crisis: 'Non-inclusive foundation shades', approach: 'Responded within weeks with improved shades; influencer posted REDEMPTION video', outcome: 'Brand thriving' },
    { brand: 'Tarte Cosmetics', crisis: 'Lavish Dubai trip during economic downturn', approach: 'CEO interview + Alix Earle podcast + self-deprecating TikTok', outcome: 'Influencer support' },
    { brand: 'Fabel App', crisis: 'Problematic AI feature', approach: 'Personal video apology + influencer Kaelyn Noel support', outcome: 'Recovered' },
    { brand: 'Youthfora', crisis: 'Foundation inclusivity', approach: '6-week delayed single image response, no apology, no influencer support', outcome: 'TikTok likes dropped from 100k+ to tens' },
    { brand: 'Rhode Skin', crisis: 'Trademark lawsuit, BBB F rating, quality complaints', approach: 'Maintained consistent influencer collaborations', outcome: 'Resilient' },
    { brand: 'Poppi Soda', crisis: 'Vending machine controversy', approach: 'Alix Earle continued showcasing brand', outcome: 'Recovered' },
  ],
}

// ============================================================================
// INTERNATIONAL CRISIS MONITORING
// ============================================================================

export const internationalCrisisMonitoring = {
  crisisWatch: 'Global conflict tracker and early warning tool designed to help prevent deadly violence',
  internationalCrisisGroup: 'Identifies ten countries facing deadly conflict, humanitarian emergency or other crises in 2025',
  ircEmergencyWatchlist: {
    methodology: '74 quantitative and qualitative variables',
    assessment: '20 countries at greatest risk of new humanitarian emergencies',
    keyTheme: 'A World Out of Balance',
    fourGlobalImbalances: [
      'More conflict, yet less diplomacy',
      'More attacks on civilians, yet fewer consequences',
      'More carbon emissions, but less climate support',
      'More wealth accumulation, yet less poverty alleviation',
    ],
  },
}

// ============================================================================
// MISINFORMATION/DISINFORMATION TRACKING
// ============================================================================

export const misinformationTracking = {
  deepfakeStats: [
    { metric: 'Deepfake content increase', value: '5×' },
    { metric: 'Fraud attempts increase (North America)', value: '+2,137%' },
    { metric: 'Global deepfake video growth (2019-2023)', value: '550%' },
    { metric: 'All fraud involving deepfakes (2023)', value: '6.5%' },
    { metric: 'Deepfake videos shared on social media (2023)', value: '~500,000' },
    { metric: 'Projected deepfakes by 2025', value: '8 million' },
    { metric: 'Deepfake videos identified (2023)', value: '95,820' },
    { metric: 'Deepfake attempts increase (2023)', value: '3,000%' },
    { metric: 'Global market (2024)', value: '$79.1 million' },
  ],
  aiGeneratedTextStats: [
    { metric: 'AI-generated fake news sites increase', value: '10× (1,200+ by 2024)' },
    { metric: 'False news spread probability vs truth', value: '70% more likely' },
    { metric: 'Text generation market (2022→2032)', value: '$423.8M → $2.2B' },
    { metric: 'AI-generated election disinformation indistinguishability', value: '>50%' },
  ],
  syntheticIdentityStats: [
    { metric: 'Fake personas used for influence operations', value: '12.8M+' },
    { metric: 'Synthetic ID fraud losses (2023)', value: '$35 billion' },
    { metric: 'Forged identity increase', value: '5×' },
    { metric: 'Fake accounts disabled quarterly by Meta', value: '1.3B+' },
  ],
  botAutomationStats: [
    { metric: 'Twitter activity bot-driven', value: '~25%' },
    { metric: 'Total web traffic by bots (2023)', value: '50%' },
    { metric: 'Bad bots', value: '30-37%' },
  ],
  disinformationKeyStats: [
    { metric: 'AI-enhanced propaganda reach', value: '~34% of users' },
    { metric: 'Firms using AI targeting', value: '75%' },
    { metric: 'Personalized ad conversion boost', value: '3× higher' },
    { metric: 'Digital ad market', value: '$366 billion' },
    { metric: 'Fact-check latency improvement', value: '45 → 15 minutes' },
    { metric: 'Viral false news spread vs truth', value: '~6× faster' },
  ],
  digitalStats: {
    activeInternetUsers: '5.64 billion (68.7% of 8.21B population)',
    socialMediaAccounts: '5.31 billion (64.7% global penetration)',
    dailySocialMediaEngagement: '143-147 minutes',
  },
}

// ============================================================================
// CRISIS COMMUNICATION BEST PRACTICES
// ============================================================================

export const crisisCommunicationBestPractices = {
  keyPrinciples: [
    'Understand: Identify stakeholder needs and potential threats from misinformation',
    'Adapt: Embrace new platforms and technologies',
    'Stick to Facts: Communicate what you know, what you\'re investigating, what steps you\'re taking',
    'Update Consistently: Keep all stakeholders informed',
  ],
  threePillars: [
    { pillar: 'Preparation', description: 'Updated crisis plans, simulations, continuous monitoring' },
    { pillar: 'Transparency', description: 'Acknowledge promptly, communicate facts clearly, update consistently' },
    { pillar: 'Empathy', description: 'Prioritize people, accept responsibility' },
  ],
  digitalFirstCrisisComms: ['Speed', 'Empathy', 'Clarity', 'Consistency', 'Learning', 'AI-powered social listening for real-time monitoring'],
  keyMetrics: [
    { metric: 'Users expecting brand response in less than 24 hours', value: '70%' },
    { metric: 'Organizations faced at least one crisis in past five years', value: '75%' },
    { metric: 'Have formal crisis communication plan', value: '49%' },
    { metric: 'Rely on informal plans', value: '28%' },
    { metric: 'Have no plan at all', value: '23%' },
  ],
  criticalWindow: 'First 60 minutes critical for narrative control',
}

// ============================================================================
// MEDIA FRAMING ANALYSIS
// ============================================================================

export const mediaFramingAnalysis = {
  gazaStudy: 'Analyzed 54,449 articles (Oct 7, 2023 - Aug 2025) for media bias in conflict reporting',
  unemploymentFraming: {
    data: '8,182 total articles (10,719,770 words) - 2,559 (2008) + 5,623 (2020)',
    topoiDistribution: [
      { topos: 'Numbers', value2008: '22.8%', value2020: '15.9%' },
      { topos: 'Threat', value2008: '20.3%', value2020: '-' },
      { topos: 'Reality', value2008: '19.5%', value2020: '15.7%' },
      { topos: 'Burdening', value2008: '-', value2020: '15.3%' },
      { topos: 'Responsibility', value2008: '11.4%', value2020: '11.0%' },
      { topos: 'Advantage', value2008: '9.6%', value2020: '9.2%' },
      { topos: 'Urgency', value2008: '-', value2020: '10.8%' },
      { topos: 'History', value2008: '5.2%', value2020: '-' },
    ],
    keyFinding: 'Chi-squared test χ²=548.54, p<0.001 - highly significant difference between years',
  },
}

// ============================================================================
// DISASTER MISINFORMATION DETECTION RESEARCH
// ============================================================================

export const disasterMisinformationDetection = {
  studyPeriod: 'January 2016 to February 2025',
  studiesReviewed: '100 (72 SCI/SSCI indexed, 28 CCF conference papers)',
  keyStatistics: {
    internetUsersSearchHealthOnline: '7 in 10 (72%) adult Internet users',
  },
  detectionPerformance: [
    { method: 'Random Forest', performance: 'F1-scores 0.848-0.888' },
    { method: 'Ensemble models', performance: 'Accuracy up to 97.8%' },
    { method: 'BERT-based models', performance: 'F1 scores up to 0.985-0.99' },
    { method: 'Bi-LSTM and CNN', performance: '97% accuracy' },
  ],
  psychologicalImpacts: ['Anxiety', 'fear', 'agitation', 'uncertainty', 'noncompliance to precautions', 'stigma', 'Depressive and anxiety symptoms', 'stress', 'social isolation'],
  vulnerablePopulations: ['Older adults', 'Digitally illiterate individuals', 'Those with cognitive impairments', 'Individuals with less education and health literacy', 'Less health care trust', 'Those with paranoid or histrionic personality traits'],
}

// ============================================================================
// CRISIS MANAGEMENT GOVERNANCE
// ============================================================================

export const crisisManagementGovernance = {
  keyLessons: [
    { lesson: 'Adaptive Over Rigid Structures', description: 'Networked, agile approaches; AI-powered decision support' },
    { lesson: 'Cross-Sector Collaboration', description: 'Government, private, NGOs, local communities coordination' },
    { lesson: 'Technology Integration', description: 'Six technological pillars for efficient crisis response' },
  ],
  challenges2025_2026: ['Climate-related disasters', 'Global pandemic resurgence', 'Economic instability', 'Cybersecurity threats', 'Social and political unrest'],
  technologyPillars: [
    'Predictive analytics for early risk detection',
    'Enhanced situational awareness through data integration',
    'Real-time communication and alert systems',
    'Smarter resource allocation and coordination',
    'Transparent data sharing and open governance',
    'Community engagement and collective responsibility',
  ],
}

// ============================================================================
// CRISIS QUERY PHASES
// ============================================================================

export const crisisQueryPhases: CrisisQueryPhase[] = [
  { phase: 1, name: 'Immediate Scoping', duration: '0-30 min', queryCount: 500, focus: ['Crisis-type specific queries', 'Entity-specific queries', 'Geographic-specific queries', 'Platform queries', 'Language queries'] },
  { phase: 2, name: 'Real-Time Monitoring', duration: 'Ongoing', queryCount: 2000, focus: ['Keyword crisis queries', 'Entity mentions', 'Sentiment tracking', 'Volume/velocity tracking', 'Cross-platform amplification', 'Fact-check verification', 'Adversarial content tracking', 'Dark web monitoring'] },
  { phase: 3, name: 'Deep Investigation', duration: 'Concurrent', queryCount: 5000, focus: ['Historical precedent queries', 'Stakeholder impact queries', 'International reaction queries', 'Narrative battle queries', 'Influencer response queries', 'Government response effectiveness', 'Media framing comparison'] },
  { phase: 4, name: 'Post-Crisis Assessment', duration: 'After de-escalation', queryCount: 3000, focus: ['Timeline reconstruction queries', 'Total impact assessment', 'Lessons learned queries', 'Reputation recovery tracking'] },
]

// ============================================================================
// KEY PERFORMANCE METRICS
// ============================================================================

export const crisisPerformanceMetrics = {
  speed: ['Time to first detection', 'Time to initial response', 'Time to verified fact-check', 'Time to cross-platform reach'],
  volume: ['Mentions per hour', 'Engagement volume', 'Reach/impressions', 'Platform distribution'],
  sentiment: ['Sentiment score (-1 to +1)', 'Sentiment velocity (change rate)', 'Sentiment recovery time'],
  quality: ['Fact-check accuracy', 'Response consistency', 'Stakeholder satisfaction'],
}

// ============================================================================
// TOOLS & TECHNOLOGIES RECOMMENDED
// ============================================================================

export const toolsRecommended: ToolRecommendation[] = [
  { category: 'Real-Time Monitoring', tools: [{ name: 'Talkwalker', coverage: '150M+ websites, 30+ social networks', languages: '187' }, { name: 'Sprinklr', capability: 'AI-powered crisis coordination' }, { name: 'Brandwatch', capability: 'Deep social listening' }, { name: 'Synthesio', capability: 'Enterprise insights' }] },
  { category: 'Dark Web', tools: [{ name: 'Recorded Future', specialty: 'AI-powered analysis' }, { name: 'Darktrace', specialty: 'Autonomous response' }, { name: 'Mandiant', specialty: 'Threat intelligence' }, { name: 'Flashpoint', specialty: 'Geopolitical context' }] },
  { category: 'Narrative Detection', tools: [{ name: 'Blackbird.AI Constellation', capability: 'Anomaly detection' }, { name: 'Graphika', capability: 'Influence mapping' }, { name: 'NATO StratCom', capability: 'Disinformation tracking' }] },
  { category: 'OSINT', tools: [{ name: 'Maltego', useCase: 'Entity linkage' }, { name: 'Shodan', useCase: 'Internet exposure' }, { name: 'Censys', useCase: 'Asset discovery' }, { name: 'GreyNoise', useCase: 'Threat surface' }] },
  { category: 'Fact-Checking', tools: [{ name: 'Full Fact', specialty: 'UK' }, { name: 'PolitiFact', specialty: 'US' }, { name: 'Snopes', specialty: 'US' }, { name: 'FactCheck.org', specialty: 'US' }, { name: 'Lead Stories', specialty: 'International' }] },
]

// ============================================================================
// SOURCE CITATIONS
// ============================================================================

export const sourceCitations: SourceCitation[] = [
  { number: 1, source: 'NCEMA UAE', tier: 0 as TierLevel, uaeRelevance: 'Critical' },
  { number: 2, source: 'Abu Dhabi Media Office', tier: 0 as TierLevel, uaeRelevance: 'Critical' },
  { number: 3, source: 'Emirates News Agency (WAM)', tier: 0 as TierLevel, uaeRelevance: 'Critical' },
  { number: 4, source: 'Crises Control', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 5, source: 'Fullintel', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 6, source: 'Agility PR', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 7, source: 'Talkwalker', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 8, source: 'Breachsense', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 9, source: 'Blackbird.AI', tier: 2 as TierLevel, uaeRelevance: 'High' },
  { number: 10, source: 'Pressmaster.AI', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 11, source: 'Deloitte-NEMA Study', tier: 1 as TierLevel, uaeRelevance: 'Low' },
  { number: 12, source: 'FEMA NRF', tier: 1 as TierLevel, uaeRelevance: 'Low' },
  { number: 13, source: 'inBeat Agency', tier: 3 as TierLevel, uaeRelevance: 'Medium' },
  { number: 14, source: 'International Crisis Group', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
  { number: 15, source: 'ReliefWeb/UN OCHA', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
  { number: 16, source: 'International Rescue Committee', tier: 1 as TierLevel, uaeRelevance: 'Medium' },
  { number: 17, source: 'Forbes', tier: 3 as TierLevel, uaeRelevance: 'Medium' },
  { number: 18, source: 'Wiley Online Library', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 19, source: 'Taylor & Francis', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
  { number: 20, source: 'CLEF CheckThat! Lab', tier: 2 as TierLevel, uaeRelevance: 'Medium' },
]

// ============================================================================
// SOURCE CREDIBILITY MATRIX
// ============================================================================

export const sourceCredibilityMatrix = [
  { tier: 'T0', definition: 'Primary official UAE source', sources: 'NCEMA, WAM, Abu Dhabi Media Office' },
  { tier: 'T1', definition: 'Primary official source (international)', sources: 'FEMA, IRC, UN OCHA, Crisis Group, VA PTSD, Duke Reporters Lab' },
  { tier: 'T2', definition: 'Peer-reviewed/industry authority', sources: 'arXiv, Frontiers, Wiley, Deloitte, Blackbird.AI, Talkwalker' },
  { tier: 'T3', definition: 'Industry/blog/thought leadership', sources: 'inBeat, Forbes Councils, Medium, A Data Pro, LinkedIn Pulse' },
  { tier: 'T4', definition: 'General web content', sources: 'Social media, forums (use with verification)' },
]

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export const uaeRelevanceAssessment = [
  { relevanceLevel: 'Critical', definition: 'Direct UAE government source', sources: '3 sources (NCEMA, WAM, Abu Dhabi Media Office)' },
  { relevanceLevel: 'High', definition: 'Gulf region impact', sources: 'Blackbird.AI narrative attacks' },
  { relevanceLevel: 'Medium', definition: 'International with transferable insights', sources: 'Most crisis management tools, influencer strategies' },
  { relevanceLevel: 'Low', definition: 'General framework, limited UAE application', sources: 'FEMA NRF, Latvia lessons, media framing studies' },
]

// ============================================================================
// ENTITY REGISTRY
// ============================================================================

export const crisisEntityRegistry: EntityRegistry = {
  uaeGovernment: [
    { entity: 'NCEMA', role: 'National Emergency, Crisis and Disaster Management Authority', source: 'Primary source' },
    { entity: 'ADCMC', role: 'Emergencies, Crises, and Disasters Management Centre - Abu Dhabi', source: 'Media Office' },
    { entity: 'ADNEC', role: 'Abu Dhabi National Exhibition Centre', source: 'WAM' },
  ],
  uaeLeadership: [
    { name: 'Nahyan bin Mubarak', title: 'Summit Inaugurator', source: 'WAM' },
    { name: 'Major General Ahmed Saif bin Zaitoon Al Muhairi', title: 'Abu Dhabi Police Commander-in-Chief, Head of ADCMC', source: 'Media Office' },
  ],
  crisisPlatforms: [
    { platform: 'Talkwalker', type: 'OSINT/Monitoring', source: 'Talkwalker' },
    { platform: 'Sprinklr', type: 'Crisis Coordination', source: 'Agility PR' },
    { platform: 'Brandwatch', type: 'Social Listening', source: 'Agility PR' },
    { platform: 'Recorded Future', type: 'Dark Web/Threat Intel', source: 'Breachsense' },
    { platform: 'Blackbird.AI Constellation', type: 'Narrative Detection', source: 'Blackbird.AI' },
    { platform: 'Maltego', type: 'OSINT/Entity Linkage', source: 'Talkwalker' },
    { platform: 'Veracity', type: 'AI Fact-Checking', source: 'IJCAI' },
  ],
  influenceOperations: [
    { actor: 'Taylor Swift & Travis Kelce', type: 'Narrative attack', impact: '5 manipulated narratives, $250K+ prediction market manipulation' },
    { actor: 'Tilly Norwood (Particle6/Xicoia)', type: 'AI actor', impact: '7 narratives, 36% identity theft, 28% traitors' },
    { actor: '#TheBanksAreOutOfMoney', type: 'Hashtag campaign', impact: 'Bank run concerns' },
    { actor: 'Claude (Hijacked AI Agent)', type: 'Autonomous operation', impact: '80-90% unauthenticated execution' },
  ],
}

// ============================================================================
// SENTIMENT ANALYSIS BY TOPIC
// ============================================================================

export const crisisSentimentByTopic: SentimentByTopic[] = [
  { topic: 'Crisis Response Speed', source: 'Crises Control', sentiment: 'Negative', keyFinding: 'Manual communication fails under pressure' },
  { topic: 'Crisis Response Speed', source: 'Pressmaster.AI', sentiment: 'Negative', keyFinding: '28% of crises go global within an hour' },
  { topic: 'Crisis Response Speed', source: 'Fullintel', sentiment: 'Negative', keyFinding: 'Information spreads instantly; speed is survival' },
  { topic: 'Government Preparedness', source: 'Deloitte-NEMA', sentiment: 'Cautionary', keyFinding: 'Only 25% have necessary skills; 81% budget constraints' },
  { topic: 'Misinformation/Disinformation', source: 'Frontiers AI', sentiment: 'Very Negative', keyFinding: '$78B annual cost; deepfakes up 550%' },
  { topic: 'Misinformation/Disinformation', source: 'Blackbird.AI', sentiment: 'Very Negative', keyFinding: 'Perception manipulation = humanity\'s #1 short-term threat' },
  { topic: 'Influencer Role in Crisis', source: 'Wiley', sentiment: 'Positive', keyFinding: 'Bolstering strategies effective in victim crises' },
  { topic: 'Influencer Role in Crisis', source: 'inBeat', sentiment: 'Positive', keyFinding: '69% trust influencers over brands; 92% trust earned media' },
]

// ============================================================================
// CRISIS STATISTICS
// ============================================================================

export const crisisStatistics: CrisisStatistics = {
  socialMediaCrisesGlobalOneHour: 28,
  organizationsWithFormalCrisisPlan: 49,
  companiesLackingCrisisPlan: 23,
  consumersAvoidingBrand: 66,
  crisisQueryVolumePerHour: 100000,
}

export const narrativeAttackStatistics: NarrativeAttackStatistics = {
  annualCostPerceptionManipulation: 78,
  publicCompanyLossesNarrativeAttacks: 39,
  deepfakeVideoGrowth: '550%',
  aiGeneratedFakeNewsSites: 1200,
  botActivityTwitter: '~25%',
  falseNewsSpreadVsTruth: '6×',
  credentialsOnCriminalMarkets: 24,
  webAttacksStolenCredentials: 88,
}

export const influencerImpactStatistics: InfluencerImpactStatistics = {
  trustInfluencerRecommendations: 69,
  trustEarnedMedia: 92,
  purchasedDueToInfluencer: 63,
  socialMediaProductResearch: 41,
}

export const emergencyManagementStatistics: EmergencyManagementStatistics = {
  fundingPrimaryConcern: 64,
  budgetConstraints: 81,
  competitiveJobMarket: 81,
  qualifiedCandidateShortage: 64,
  staffNecessarySkills: 25,
  intermediateTechnologyCapability: 60,
  infrastructureAsBarrier: 85,
  mitigationTimePreferenceVsActual: { preference: 44, actual: 5 },
}

export const factCheckingStatistics: FactCheckingStatistics = {
  globalFactCheckProjects: 443,
  countriesWithFactCheckers: 116,
  languagesCovered: 70,
  articlesJanMay2024: 40500,
  articlesJanMay2025: 38000,
  metaPartnershipShare: '~⅓',
}

export const digitalStatistics: DigitalStatistics = {
  activeInternetUsers: '5.64 billion (68.7%)',
  socialMediaAccounts: '5.31 billion (64.7%)',
  dailySocialMediaTime: '143-147 minutes',
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const crisisResponseData: CrisisResponseData = {
  crisisLevels,
  crisisPhases: postCrisisAssessment.disasterReactionPhases,
  clefTasks: factCheckVerification.clefTasks,
  lessons: crisisManagementLessons,
  osintTools,
  narrativeAttacks,
  queryPhases: crisisQueryPhases,
  metrics: crisisPerformanceMetrics.speed.map(s => ({ category: 'Speed', value: s, context: '' })),
  entityRegistry: crisisEntityRegistry,
  sentimentByTopic: crisisSentimentByTopic,
  deepFakeStats: misinformationTracking.deepfakeStats.map(s => ({ metric: s.metric, value: s.value })),
  disinformationStats: [...misinformationTracking.aiGeneratedTextStats, ...misinformationTracking.botAutomationStats].map(s => ({ metric: s.metric, value: s.value })),
  influencerStats: [
    { metric: 'Trust in influencer recommendations', value: 69 },
    { metric: 'Trust in earned media', value: 92 },
    { metric: 'Purchased due to influencer', value: 63 },
  ],
  emergencyManagementStats: governmentEmergencyResponse.deloitteNema2025.map(s => ({ category: s.category, finding: s.finding, percentage: s.percentage })),
  factCheckingStats: [
    { metric: 'Global fact-check projects', value: 443 },
    { metric: 'Countries with fact-checkers', value: 116 },
    { metric: 'Languages covered', value: 70 },
  ],
  digitalStats: [
    { metric: 'Active internet users', value: '5.64 billion' },
    { metric: 'Social media accounts', value: '5.31 billion' },
    { metric: 'Daily social media time', value: '143-147 minutes' },
  ],
  toolsRecommended,
  sourceCitations,
  crisisStatistics,
  narrativeAttackStatistics,
  influencerImpactStatistics,
  emergencyManagementStatistics,
  factCheckingStatistics,
  digitalStatistics,
}

export default crisisResponseData
