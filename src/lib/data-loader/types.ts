/**
 * Type Definitions for Dashboard Data
 *
 * Comprehensive TypeScript interfaces for all platform-specific data types
 * parsed from markdown files in /docs/dashboard-data/
 */

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface PlatformDataFile {
  platform: 'CLAIRVOYANCE-CX' | 'PERCEPTION-X2' | 'RICOCHET-CATALYST-X'
  number: string
  title: string
  content: string
  filepath: string
}

export interface ParsedDataSection {
  title: string
  content: string
  data?: any[]
}

export interface DataMetric {
  label: string
  value: number | string
  change?: number
  trend?: 'up' | 'down' | 'stable'
  category?: string
}

export interface Campaign {
  theme: string
  slogan: string
  hashtags: string[]
  subCampaign?: string
  startDate?: string
  endDate?: string
}

export interface Influencer {
  handle: string
  name: string
  followers?: number
  communityBridge: string
  engagementStyle: string
  culturalRelevance: string
  impact: string
  alignment?: number
  engagement?: number
  title?: string
  platform?: string
  category?: string
}

export interface Narrative {
  topic: string
  snippet?: string
  narrative: string
  underlyingBelief?: string
  source?: string
  sources?: string[]
  sentiment?: string
  prevalence?: number
  category?: string
}

// ============================================================================
// CLAIRVOYANCE-CX TYPES
// ============================================================================

export interface ClairvoyanceLeadership {
  officialRole: string
  fullName: string
  status: string
  notes: string
}

export interface ClairvoyanceKPI {
  programName: string
  metrics: {
    label: string
    value: string | number
  }[]
}

export interface ClairvoyanceKPIs {
  hie: {
    programName: string
    recordCount: string
    connectivity: string
    uniqueProfiles: string
  }
  muashir: {
    programName: string
    ratingScale: string
    fiveDiamondHospitals: string[]
  }
  sahatna: {
    programName: string
    legacyApps: string[]
    userStatistics: string
    integrations: string[]
  }
  genomics: {
    programName: string
    status: string
    participants: string
    scope: string
  }
}

export interface CrisisSimulation {
  phase: string
  injectEvent: string
  decisionRequired: string
  consequence: string
}

export interface InfodemicCase {
  name: string
  typology: string
  operationalContext: string
  threatLandscape: string
  rumorMechanics: {
    narrative: string
    specificClaim: string
    psychologicalDriver?: string
  }
  officialResponse: {
    date: string
    denial: string
    operationalInjects: string[]
  }
  simulationArchitecture: CrisisSimulation[]
}

export interface SeasonalThreat {
  name: string
  operationalWindow: string
  primaryThreat: string[]
  regulatoryFramework: string[]
}

export interface MediaAsset {
  platform: string
  handle: string
  followers: number
  posts: number
  engagement: number
  sentiment: 'positive' | 'negative' | 'neutral'
}

export interface Journalist {
  name: string
  publication: string
  beat: string
  contact?: string
  sentiment?: 'positive' | 'negative' | 'neutral'
}

// ============================================================================
// PERCEPTION-X2 TYPES
// ============================================================================

export interface MythVector {
  rumor: string
  narrativeSnippet: string
  underlyingBelief: string
  source: string
  category: string
}

export interface VoidVector {
  topic: string
  demandSignal: string
  culturalContext: string
  adphcCoverageGap: string
  opportunity: string
}

export interface TribeVector {
  archetype: string
  coreBeliefs: string[]
  fears: string[]
  culturalContext: string
  socialContext: string
  preferredChannels: string[]
  trustedSources: string[]
}

export interface BridgeVector {
  influencerHandle: string
  communityBridge: string
  engagementStyle: string
  culturalRelevance: string
  measurableImpact: string
  networkAnalysis: string
}

export interface ToneVector {
  dimension: string
  observedPattern: string
  culturalNuance: string
  source: string
  practicalApplication: string
}

export interface Persona {
  name: string
  archetype: string
  demographics: {
    age?: string
    gender?: string
    location?: string
    occupation?: string
  }
  psychographics: {
    values: string[]
    fears: string[]
    motivations: string[]
  }
  behaviors: {
    mediaConsumption: string[]
    healthBehaviors: string[]
    decisionDrivers: string[]
  }
  painPoints: string[]
}

export interface ShadowNarrative {
  topic: string
  narrative: string
  source: string
  prevalence: 'low' | 'medium' | 'high'
  sentiment: 'negative' | 'concerned' | 'curious'
}

export interface BeliefSystem {
  category: string
  belief: string
  evidence: string[]
  counterArgument: string
  prevalence: number
}

// ============================================================================
// RICOCHET-CATALYST-X TYPES
// ============================================================================

export interface ContentPerformance {
  id: string
  title: string
  platform: string
  format: 'post' | 'video' | 'story' | 'article' | 'ad'
  likes: number
  comments: number
  shares: number
  ratio: number
  sentiment: 'positive' | 'negative' | 'neutral'
  category: 'graveyard' | 'ratio' | 'rocket' | 'average'
}

export interface RatioAnalysis {
  archetype: string
  trigger: string
  forensicDisconnect: string
  engagementForensics: string
  narrativeExtraction: {
    sentiment: string
    forensicDiagnosis: string
  }[]
  ricochetInsight: string
}

export interface ViralContent {
  topic: string
  platform: string
  format: string
  hook: string
  whyItWorked: string
  metrics: {
    views?: number
    likes: number
    shares: number
    comments: number
  }
}

export interface PlatformFriction {
  platform: string
  frictionPoints: string[]
  sentiment: 'positive' | 'negative' | 'neutral'
  recommendations: string[]
}

export interface InfluencerCampaign {
  influencer: string
  platform: string
  campaign: string
  budget: number
  reach: number
  engagement: number
  roi: number
  verdict: 'success' | 'failure' | 'mixed'
}

export interface AdPerformance {
  platform: string
  campaign: string
  spend: number
  impressions: number
  clicks: number
  conversions: number
  ctr: number
  cpc: number
  roas: number
}

export interface FormatGap {
  format: string
  platform: string
  currentUsage: 'low' | 'medium' | 'high'
  opportunity: string
  examples: string[]
}

export interface TimingOptimization {
  platform: string
  bestTime: string
  dayOfWeek: string
  contentType: string[]
  rationale: string
}

export interface AmplificationNode {
  type: 'influencer' | 'community' | 'media'
  name: string
  reach: number
  engagementRate: number
  costPerActivation: number
  effectiveness: number
  // Additional properties for component compatibility
  id?: string
  tier?: string
  followers?: string
  platform?: string
  status?: string
  campaigns?: number
  avgLift?: number
  engagement?: string
}

// ============================================================================
// DASHBOARD DATA STRUCTURES
// ============================================================================

export interface ExecutiveBridgeData {
  leadership: ClairvoyanceLeadership[]
  kpis: ClairvoyanceKPIs
  campaigns: Campaign[]
  recentUpdates: string[]
}

export interface OmniSurveillanceData {
  waterfallFeed: {
    timestamp: string
    source: string
    content: string
    sentiment: string
    platform: string
  }[]
  printBroadcast: {
    type: 'print' | 'tv' | 'radio'
    source: string
    title: string
    summary: string
    date: string
  }[]
  darkWeb: {
    source: string
    threat: string
    severity: 'low' | 'medium' | 'high'
    date: string
  }[]
}

export interface CrisisWarRoomData {
  infodemicCases: InfodemicCase[]
  seasonalThreats: SeasonalThreat[]
  threatMatrix: {
    threat: string
    probability: number
    impact: number
    readiness: number
  }[]
}

export interface NarrativeLabData {
  myths: MythVector[]
  voids: VoidVector[]
  narratives: Narrative[]
  sentimentTimeline: {
    date: string
    sentiment: number
    volume: number
  }[]
}

export interface StrategicActionData {
  campaigns: Campaign[]
  calendar: {
    date: string
    action: string
    owner: string
    status: 'planned' | 'active' | 'completed'
  }[]
  editorialQueue: {
    id: string
    title: string
    format: string
    status: string
    scheduledFor: string
  }[]
}

export interface GeoIntelligenceData {
  heatmap: {
    region: string
    lat: number
    lng: number
    intensity: number
    category: string
  }[]
  facilities: {
    name: string
    type: string
    lat: number
    lng: number
    status: string
  }[]
  geoFences: {
    name: string
    radius: number
    lat: number
    lng: number
    alertTypes: string[]
  }[]
}

export interface CompetitiveIntelData {
  shareOfVoice: {
    entity: string
    percentage: number
    change: number
  }[]
  influencers: Influencer[]
  mediaBias: {
    source: string
    bias: 'positive' | 'negative' | 'neutral'
    coverage: number
  }[]
}

export interface SystemGovernanceData {
  compliance: {
    area: string
    status: 'compliant' | 'non-compliant' | 'pending'
    lastAudit: string
  }[]
  roles: {
    role: string
    permissions: string[]
    users: number
  }[]
  auditLog: {
    timestamp: string
    action: string
    user: string
    resource: string
  }[]
}

// ============================================================================
// PERCEPTION-X2 DATA STRUCTURES
// ============================================================================

export interface OmniscientIntelligenceData {
  darkSocial: {
    platform: string
    mentions: number
    sentiment: number
    topics: string[]
  }[]
  cognitiveMap: {
    emotion: string
    intensity: number
    drivers: string[]
  }[]
}

export interface StrategyTargetingData {
  personas: Persona[]
  painPoints: {
    segment: string
    pain: string
    frequency: number
    urgency: number
  }[]
  voids: VoidVector[]
}

export interface ProductionData {
  narrativeArchitecture: {
    frame: string
    tone: string
    callToAction: string
  }[]
  contentFactory: {
    type: string
    templates: string[]
    aiGenerated: boolean
  }[]
  toneCalibrator: {
    dimension: string
    settings: Record<string, string>
  }[]
}

export interface InfluenceData {
  nodeDirectory: AmplificationNode[]
  microInfluencers: Influencer[]
  grassroots: {
    community: string
    leaders: string[]
    reach: number
  }[]
}

export interface OperationsData {
  campaigns: Campaign[]
  controlDeck: {
    active: number
    scheduled: number
    completed: number
  }
}

export interface AnalyticsData {
  beliefTopology: BeliefSystem[]
  roi: {
    campaign: string
    investment: number
    return: number
    percentage: number
  }[]
}

export interface GovernanceData {
  regulatoryCompliance: {
    area: string
    compliant: boolean
    notes: string
  }[]
  supplyChain: {
    component: string
    risk: 'low' | 'medium' | 'high'
    mitigation: string
  }[]
}

export interface VoidFillerData {
  biohacking: {
    topic: string
    demand: number
    coverage: 'low' | 'medium' | 'high'
  }[]
  mensHealth: {
    topic: string
    demand: number
    coverage: 'low' | 'medium' | 'high'
  }[]
  neurodivergent: {
    topic: string
    demand: number
    coverage: 'low' | 'medium' | 'high'
  }[]
}

export interface MediaForensicsData {
  cheerleaders: {
    source: string
    coverage: number
    sentiment: number
  }[]
  critics: {
    source: string
    coverage: number
    sentiment: number
  }[]
  sensationalists: {
    source: string
    coverage: number
    sentiment: number
  }[]
}

export interface PsychoSemanticData {
  temporalityOfTerror: {
    threat: string
    immediacy: number
    duration: number
  }[]
  epistemologyOfPain: {
    condition: string
    understanding: number
    stigma: number
  }[]
  systemicFriction: {
    friction: string
    intensity: number
    frequency: number
  }[]
}

export interface CognitiveResilienceData {
  securityParadox: {
    issue: string
    security: number
    privacy: number
    balance: number
  }[]
  pharmacologicalFallacy: {
    drug: string
    belief: string
    reality: string
  }[]
  nutritionalMirage: {
    supplement: string
    claimed: string
    proven: string
  }[]
}

// ============================================================================
// RICOCHET-CATALYST-X DATA STRUCTURES
// ============================================================================

export interface CommandPrimeData {
  liveStatus: {
    active: number
    scheduled: number
    paused: number
  }
  operationalHealth: {
    deployments: number
    successRate: number
    avgTimeToPublish: number
  }
  lifecycleTracker: {
    phase: string
    count: number
  }[]
}

export interface RicochetDistributionData {
  platforms: {
    name: string
    connected: boolean
    lastSync: string
    performance: number
  }[]
  scheduler: {
    timezone: string
    optimalTimes: Record<string, string[]>
  }
}

export interface CatalystOptimizationData {
  frictionAudit: {
    platform: string
    frictionScore: number
    issues: string[]
  }[]
  linguisticEngine: {
    language: string
    performance: number
    recommendations: string[]
  }[]
}

export interface AmplificationData {
  catalystNodes: AmplificationNode[]
  viralLoops: {
    trigger: string
    amplification: number
    duration: number
  }[]
}

export interface XFactorData {
  shadowTraffic: {
    source: string
    estimated: number
    actual: number
    variance: number
  }[]
  searchIntent: {
    query: string
    volume: number
    intent: string
  }[]
  platformPhysics: {
    platform: string
    algorithmNotes: string[]
  }[]
}

export interface PhoenixData {
  threatLibrary: {
    scenario: string
    probability: number
    impact: number
    playbook: string
  }[]
  warRoom: {
    active: boolean
    level: number
    activatedAt?: string
  }
}

export interface UserData {
  painPoints: {
    point: string
    frequency: number
    severity: number
  }[]
  funnelBreaks: {
    stage: string
    dropoff: number
  }[]
}

export interface AutomatedLogicData {
  triggers: {
    name: string
    condition: string
    action: string
  }[]
  windows: {
    name: string
    start: string
    end: string
    sensitivity: number
  }[]
}

export interface KineticShellData {
  velocityRail: {
    stage: string
    duration: number
    optimization: string[]
  }[]
  chronobiology: {
    time: string
    effectiveness: number
    audience: string[]
  }[]
  overrides: {
    type: string
    condition: string
    action: string
  }[]
}

// ============================================================================
// UAE NATIONAL DIGITAL INTELLIGENCE PLATFORM — NEW TYPES
// ============================================================================
// Covers: Entity Intel, Topics/H-S-P-B-C, Crisis/Phoenix, Social Media,
// Languages, Stakeholder, Historical, Sentiment, Trends, Verification, Monitoring
// ============================================================================

// --------------------------------------------------------------------------
// COMMON / SHARED TYPES
// --------------------------------------------------------------------------

export type TierLevel = 0 | 1 | 2 | 3 | 4

export type AlertLevel = 'RED' | 'YELLOW' | 'GREEN'

export type HSBPCCategory = 'health' | 'safety' | 'policy' | 'business' | 'community'

export type SentimentPolarity = 'positive' | 'negative' | 'neutral' | 'mixed'

export interface SentimentBreakdown {
  positive: number
  negative: number
  neutral: number
  overall: number
  volume: number
}

export interface CredibilityScore {
  tier: TierLevel
  score: number // 0-100
  sources: number
  lastVerified: string
}

export interface SourceReference {
  name: string
  url?: string
  tier: TierLevel
  date: string
}

export interface PlutchikEmotion {
  joy: number
  trust: number
  fear: number
  surprise: number
  sadness: number
  disgust: number
  anger: number
  anticipation: number
}

export interface UAERelevance {
  score: number // 0-100
  level: 'critical' | 'high' | 'medium' | 'low'
  justification?: string
}

export interface TrendData {
  direction: 'rising' | 'stable' | 'declining'
  changePercent: number
  period: string
  value: number
}

export interface KeyFinding {
  finding: string
  metric: string | number
  source: string
  tier: TierLevel
  alert?: AlertLevel
}

// --------------------------------------------------------------------------
// ENTITY INTELLIGENCE TYPES (Category 1)
// --------------------------------------------------------------------------

export type EntityType =
  | 'federal'
  | 'emirate'
  | 'royal'
  | 'media'
  | 'journalist'
  | 'influencer'
  | 'corporate'
  | 'international'
  | 'infrastructure'
  | 'event'

export interface SocialAccount {
  platform?: string
  handle: string
  url?: string
  followers?: number
  verified: boolean
  type?: string
}

export interface EntityRelationship {
  targetEntity: string
  relationshipType:
    | 'family'
    | 'ownership'
    | 'governance'
    | 'partnership'
    | 'media'
    | 'campaign'
    | 'opposition'
  strength: 'strong' | 'moderate' | 'weak'
  evidence?: string
}

export interface EntityMetrics {
  sentiment?: SentimentBreakdown
  credibility?: CredibilityScore
  uaeRelevance?: UAERelevance
  alertLevel?: AlertLevel
  engagement?: number
  reach?: number
  mentions?: number
}

export interface EntityProfile {
  id: string
  name: string
  nameAr?: string
  type: EntityType
  tier: TierLevel
  aliases?: string[]
  socialAccounts?: SocialAccount[]
  credibility: CredibilityScore
  relationships?: EntityRelationship[]
  uaeRelevance: UAERelevance
  sentiment?: SentimentBreakdown
  alertLevel: AlertLevel
  metrics: EntityMetrics
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
  lastUpdated: string
  description?: string
  // Category-specific fields
  role?: string
  emirate?: string
  organization?: string
  beat?: string
  followerCount?: number
  sector?: string
  events?: string[]
}

export interface EntityOverview {
  totalEntities: number
  byType: Record<EntityType, number>
  byTier: Record<TierLevel, number>
  alertSummary: Record<AlertLevel, number>
  topEntities: EntityProfile[]
}

// --------------------------------------------------------------------------
// TOPICS / H-S-P-B-C TYPES (Category 2)
// --------------------------------------------------------------------------

export interface TopicMetrics {
  volume: number
  reach: number
  engagement: number
  sentiment: SentimentBreakdown
  trend: TrendData
}

export interface TopicAnalysis {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr?: string
  description: string
  keyFindings: KeyFinding[]
  metrics: TopicMetrics
  sentiment?: SentimentBreakdown
  emotions?: PlutchikEmotion
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  trends: TrendData[]
  stakeholders: string[]
  relatedEntities: string[]
  sources?: SourceReference[]
  lastUpdated: string
}

// --------------------------------------------------------------------------
// CRISIS INTELLIGENCE / PHOENIX PROTOCOL TYPES (Category 4)
// --------------------------------------------------------------------------

export type PhoenixStage =
  | 'detection'
  | 'assessment'
  | 'containment'
  | 'resolution'
  | 'recovery'

export type CrisisType =
  | 'natural-disaster'
  | 'geopolitical'
  | 'social'
  | 'economic'
  | 'reputation'
  | 'communication'
  | 'cybersecurity'
  | 'public-health'
  | 'early-warning'

export interface CrisisTimelineEvent {
  date: string
  stage: PhoenixStage
  description: string
  actor?: string
  impact?: string
}

export interface StakeholderImpact {
  stakeholder: string
  impactScore: number // 0-10
  sentimentShift?: number
  responseStatus?: 'active' | 'pending' | 'resolved'
}

export interface CrisisResponseMetrics {
  detectionTime?: string
  responseTime?: string
  containmentTime?: string
  resolutionTime?: string
  stakeholderCooperation?: number
  publicSentiment?: SentimentBreakdown
}

export interface CrisisEvent {
  id: string
  type: CrisisType
  name: string
  severity: 1 | 2 | 3 | 4 | 5
  phoenixStage: PhoenixStage
  detectedDate: string
  lastUpdated: string
  affectedEntities: string[]
  stakeholderImpact: StakeholderImpact[]
  responseMetrics: CrisisResponseMetrics
  timeline: CrisisTimelineEvent[]
  credibility: CredibilityScore
  alertLevel: AlertLevel
  recommendations: string[]
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
}

export interface CrisisOverview {
  activeCrises: number
  byType: Record<CrisisType, number>
  bySeverity: Record<number, number>
  byStage: Record<PhoenixStage, number>
  alertSummary: Record<AlertLevel, number>
  criticalCrises: CrisisEvent[]
}

// --------------------------------------------------------------------------
// SOCIAL MEDIA INTELLIGENCE TYPES (Category 5)
// --------------------------------------------------------------------------

export type SocialPlatform =
  | 'twitter-x'
  | 'tiktok'
  | 'youtube'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'reddit'
  | 'telegram'
  | 'threads'
  | 'snapchat'
  | 'discord'
  | 'whatsapp'
  | 'google-serp'
  | 'news-websites'
  | 'forums'
  | 'blogs'
  | 'dark-web'
  | 'gaming'
  | 'web3'
  | 'podcast'

export interface BotAnalysis {
  estimatedBotPercent: number
  botNetworks?: string[]
  coordinatedInauthentic?: boolean
  confidence: number
  indicators?: string[]
}

export interface NarrativeData {
  topic: string
  narrative: string
  source?: string
  sources?: string[]
  prevalence: string | number
  sentiment: SentimentPolarity
}

export interface EngagementMetrics {
  impressions: number
  likes: number
  shares: number
  comments: number
  engagementRate: number
  avgLikes?: number
  avgReplies?: number
  avgReposts?: number
  trendingHashtags?: string[]
  bestPostingTime?: string
  optimalDays?: string[]
  avgViews?: number
  avgComments?: number
  avgShares?: number
  avgTimeSpent?: number
  avgSnaps?: number
  dailyOpens?: number
}

export interface BotActivity {
  estimatedBotPercent: number
  coordinatedInauthentic: boolean
  confidence: number
  indicators?: string[]
  botNetworks?: string[]
}

export interface PlatformMetrics {
  users: number
  penetration: number
  dailyActive: number
  demographics?: string
  sentiment: SentimentBreakdown & {
    score?: number
    trending?: string[]
    keyConcerns?: string[]
  }
  engagement: EngagementMetrics
  botActivity?: BotActivity
  censorshipLevel: 'none' | 'partial' | 'significant' | 'extreme'
}

export interface PlatformIntelligence {
  id: string
  platform: SocialPlatform
  metrics: PlatformMetrics
  governmentAccounts?: SocialAccount[]
  botActivity: BotAnalysis
  censorshipLevel: 'none' | 'partial' | 'significant' | 'extreme'
  censorship?: {
    level: string
    complianceRate?: number
    governmentRequests?: number
    contentRemoved?: number
    notes?: string
    [key: string]: any
  }
  keyNarratives: Narrative[]
  darkSocialScore: number // 0-100 — encrypted/restricted platforms
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
  lastUpdated: string
}

export interface DarkSocialAggregate {
  platform: SocialPlatform
  darkScore: number
  surveillanceLevel: 'low' | 'medium' | 'high' | 'critical'
  keyRisks: string[]
  monitoringRecommendations: string[]
}

// --------------------------------------------------------------------------
// CODE-SWITCHING EXTENDED DATA TYPES (MD File 6-15)
// --------------------------------------------------------------------------

export interface CodeSwitchingExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    outputFile: string
    enrichmentCompleted: string
    urlsSuccessfullyFetched: number
  }
  focusAreas: string[]
  keyQueryPatterns: Array<{
    querySet: string
    queries: string[]
  }>
  populationDemographicsKPIs: Array<{
    kpi: string
    value: string
    source: string
    uaeRelevance: string
    tier: TierLevel
  }>
  languageDistributionKPIs: Array<{
    kpi: string
    value: string
    source: string
    uaeRelevance: string
    tier: TierLevel
  }>
  hinglishCommunityKPIs: Array<{
    kpi: string
    value: string
    source: string
    uaeRelevance: string
    tier: TierLevel
  }>
  taglishCommunityKPIs: Array<{
    kpi: string
    value: string
    source: string
    uaeRelevance: string
    tier: TierLevel
  }>
  aiTranslationKPIs: Array<{
    kpi: string
    value: string
    source: string
    uaeRelevance: string
    tier: TierLevel
  }>
  atmLanguagePreferences: {
    demographics: Array<{
      demographic: string
      sampleSize: number
      percentageOfSample: number
      englishPreference: number
      arabicPreference: number
    }>
    statisticalSignificance: Array<{
      hypothesis: string
      finding: string
      pValue: string
      status: string
    }>
  }
  entityRegistry: {
    academicResearchers: Array<{
      entity: string
      affiliation: string
      contribution: string
      tier: TierLevel
    }>
    organizations: Array<{
      entity: string
      type: string
      focus: string
      tier: TierLevel
    }>
  }
  sentimentAnalysisByTopic: Array<{
    topic: string
    source: string
    sentiment: string
    polarity: number
    keyFinding: string
  }>
  uaeRelevanceMatrix: Array<{
    url: string
    uaeRelevance: string
    justification: string
  }>
  sourceCredibilityMatrix: Array<{
    source: string
    url: string
    tier: TierLevel
    justification: string
  }>
  urlContentSummaries: Array<{
    url: string
    title: string
    status: string
    keyData: string
    uaeRelevance: string
    tier: TierLevel
  }>
  synthesizedFindings: {
    arabizi: {
      definition: string
      numberLetterSystem: Array<{
        number: string
        arabicLetter: string
        phoneme: string
        notes: string
      }>
      gulfUaeSpecifics: string
      examples: Array<{
        arabizi: string
        arabicScript: string
        english: string
      }>
      prevalence: string
      controversyAssessment: Array<{
        camp: string
        position: string
        keyAdvocates: string
        sentiment: number
      }>
    }
    hinglish: {
      definition: string
      uaeIndianDiaspora: Array<{
        metric: string
        value: string
      }>
      hinglishCharacteristics: string[]
      gulfIndianUsage: string[]
    }
    taglish: {
      definition: string
      uaeFilipinoCommunity: Array<{
        metric: string
        value: string
      }>
      mechanics: string[]
    }
    arabicEnglishCodeSwitching: {
      prevalence: string
      patterns: string[]
      atmLanguagePreference: Array<{
        userGroup: string
        arabic: number
        english: number
      }>
      drivingFactors: string[]
      workplace: string
    }
    diglossia: {
      situation: string
      emiratiArabic: Array<{
        area: string
        dialect: string
      }>
      phonologicalFeatures: Array<{
        msa: string
        emirati: string
        example: string
      }>
      educationalChallenge: string
    }
    languagePolicyPreservation: {
      officialStatus: string
      policyTimeline: Array<{
        year: string
        initiative: string
      }>
      tenPrinciples: string[]
      ministryOfEducation2025: string[]
    }
    multilingualEcosystem: {
      population: Array<{
        metric: string
        value: string
      }>
      expatriateDistribution: Array<{
        origin: string
        percentage: string
      }>
      languageDistribution: Array<{
        language: string
        role: string
      }>
      aiTranslationAdoption: Array<{
        metric: string
        value: string
      }>
    }
  }
  verificationStatus: {
    queriesExecuted: boolean
    pagesFetched: boolean
    dataExtracted: boolean
    noFabrication: boolean
    confidence: string
    structuredKPITablesPopulated: boolean
    entityRegistryCompiled: boolean
    sentimentAnalysisCompleted: boolean
    uaeRelevanceAssessed: boolean
    sourceCredibilityTiered: boolean
  }
}

// --------------------------------------------------------------------------
// MULTI-LINGUAL INTELLIGENCE TYPES (Category 6)
// --------------------------------------------------------------------------

export type LanguageCode =
  | 'msa'
  | 'emirati'
  | 'gulf'
  | 'levantine'
  | 'egyptian'
  | 'maghrebi'
  | 'english'
  | 'french'
  | 'urdu-hindi'
  | 'persian'
  | 'malay'
  | 'russian'
  | 'chinese'

export interface SearchTerm {
  term: string
  volume: number
  trend: 'rising' | 'stable' | 'declining' | 'mixed'
  sentiment: SentimentPolarity
}

export interface LanguageIntelligence {
  id: string
  language: LanguageCode
  dialect?: string
  region: string
  queryVolume: number
  topSearchTerms: SearchTerm[]
  sentiment: SentimentBreakdown
  trendDirection: 'rising' | 'stable' | 'declining'
  transliterationRate?: number
  codeSwitchingPrevalence?: number
  uaeSpeakerPopulation?: number
  credibility: CredibilityScore
  sources?: SourceReference[]
  lastUpdated: string
  extendedData?: MSAExtendedData | GulfArabicExtendedData | EgyptianExtendedData | RussianExtendedData | CodeSwitchingExtendedData | LevantineExtendedData | MaghrebiArabicExtendedData
}

// Russian-specific extended data from MD file 6-12 enrichment
export interface RussianExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    outputFile: string
    enrichmentStatus: string
    urlsFound: number
  }
  focusAreas: string[]
  keyQueryPatterns: string[]
  queryResults: Array<{
    query: string
    source: string
    keyFacts: string[]
  }>
  populationTimeSeries: Array<{
    year: string
    estimatedPopulation: string
    russianVisitors: string
    notes: string
  }>
  tradeVolumeTimeSeries: Array<{
    year: string
    tradeVolumeUsd: string
    yoyGrowth: string
    source: string
  }>
  sanctionsEvasionGoldTrade: Array<{
    year: string
    goldImportedTonnes: string
    valueUsd: string
    notes: string
  }>
  realEstateInvestment: {
    totalPost2022: string
    existingProperties: string
    offPlanProperties: string
    propertiesOwned: string
    ownersCount: string
    averagePurchase: string
    peakRank: string
    currentRank: string
    priceIncreaseSince2020: string
    existingPropertyIncreasePercent: string
    offPlanPropertyIncreasePercent: string
  }
  notableOligarchs: Array<{
    name: string
    sanctionStatus: string
    uaeAsset: string
    value: string
    source: string
  }>
  sanctionsEvasionMethods: Array<{
    method: string
    details: string
  }>
  usResponseActions: Array<{
    date: string
    action: string
    target: string
  }>
  diplomaticEventsTimeline: Array<{
    date: string
    event: string
    significance: string
  }>
  mediationKpis: {
    totalCaptivesExchanged: number
    latestExchange: number
    mediationEfforts: number
    trilateralTalksHosted: number
  }
  visitorReasons: string[]
  communityGroups: string[]
  challenges: string[]
  visaOptions: Array<{
    type: string
    details: string
  }>
  propertyAreas: string[]
  notablePropertyBuyers: Array<{
    name: string
    property: string
    value: string
    timing: string
  }>
  tradeRelations: {
    trade2024: string
    trade2023: string
    trade2022: string
    tradeGrowth2022: string
    russianExportGrowth2022: string
    h1_2024Growth: string
    russianCapitalInUae: string
    emiratiInvestmentInRussia: string
    russianCompaniesInUae: string
    mainExports: string[]
    keyProducts: {
      product: string
      value: string
    }[]
  }
  goldTradeDetails: {
    topGoldSupplier2022: string
    sudanGoldSmuggling: string
    wagnerGroupSudan: string
  }
  financialSectorResponse: {
    banksTightened: string
    processingTimes: string
    fundsFrozen: string
    mashreqbankAction: string
    sberbankWindingDown: string
  }
  mediaInvestments: {
    russianLanguageGrowth: string
    russianHouseOpening: string
    wamRussianVersion: string
    russianTextbook: string
    seminarAbuDhabi: string
  }
  usDelegations: Array<{
    date: string
    leader: string
    purpose: string
  }>
  uaePosition: {
    fatfGreyList: string
    lobbyingUsSince2016: string
    ongoingTensions: string
  }
  sentimentAnalysisByTopic: Array<{
    topic: string
    sentimentDimension: string
    score: number
    evidence: string
  }>
  sourceCredibilityMatrix: Array<{
    source: string
    type: string
    reliability: string
    notes: string
  }>
  uaeRelevanceAssessment: {
    criticalRelevance: Array<{
      topic: string
      relevanceScore: string
      keyDataPoints: string
    }>
    highRelevance: Array<{
      topic: string
      relevanceScore: string
      keyDataPoints: string
    }>
    mediumRelevance: Array<{
      topic: string
      relevanceScore: string
      keyDataPoints: string
    }>
    lowRelevance: Array<{
      topic: string
      relevanceScore: string
      keyDataPoints: string
    }>
  }
  kpiDashboard: {
    russianUaeEconomic: Array<{
      kpi: string
      value: string
      unit: string
      date: string
      status: string
    }>
    sanctionsEvasion: Array<{
      kpi: string
      value: string
      unit: string
      date: string
      status: string
    }>
    community: Array<{
      kpi: string
      value: string
      unit: string
      date: string
      status: string
    }>
    realEstate: Array<{
      kpi: string
      value: string
      unit: string
      date: string
      status: string
    }>
    mediation: Array<{
      kpi: string
      value: string
      unit: string
      date: string
      status: string
    }>
  }
  dataQualityAssessment: {
    completeness: Array<{
      category: string
      completeness: string
      gaps: string
    }>
    consistencyIssues: Array<{
      issue: string
      sources: string
      impact: string
    }>
    confidenceLevels: Array<{
      dataPoint: string
      confidence: string
      rationale: string
    }>
  }
  verificationStatus: {
    queriesExecuted: boolean
    pagesFetched: boolean
    dataExtracted: boolean
    noFabrication: boolean
    confidence: string
  }
}

// Egyptian Arabic extended data from MD file 6-5 enrichment
export interface EgyptianExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    pagesEnriched: number
    enrichmentRate: number
    focusAreas: string[]
  }
  keyQueryPatterns: string[]
  sourceCredibilityMatrix: Array<{
    source: string
    url?: string
    tier: TierLevel
    credibility: string
    fetchStatus: string
    dataQuality?: string
  }>
  populationDashboard: Array<{
    kpi: string
    value: string | number
    source: string
    tier: TierLevel
    uaeRelevance: string
  }>
  tradeDashboard: Array<{
    kpi: string
    value: string | number
    change?: string
    uaeRelevance: string
  }>
  egyptianExportCategories: Array<{
    category: string
    value: string
    cumulativePercent: string
  }>
  mediaInvestments: Array<{
    item: string
    value: string
    year: string
    uaeRelevance: string
  }>
  sentimentAnalysisByTopic: Array<{
    topic: string
    egyptianSentiment: string
    uaeSentiment: string
    tensionLevel: string
  }>
  historicalTimeline: Array<{
    year: string
    event: string
    significance: string
  }>
  keyUaeFigures: Array<{
    name: string
    role: string
    mediaAffiliation?: string
  }>
  keyEgyptianMediaFigures: Array<{
    name: string
    role: string
    affiliation: string
  }>
  mediaOutletsRegistry: Array<{
    outlet: string
    type: string
    uaeAffiliation: string
    status?: string
  }>
  uaeRelevanceAssessment: {
    criticalRelevance: string[]
    highRelevance: string[]
    mediumRelevance: string[]
    lowRelevance: string[]
  }
  verificationStatus: {
    queriesExecuted: boolean
    pagesFetched: boolean
    dataExtracted: boolean
    noFabrication: boolean
    confidence: string
    pagesEnrichedViaWebFetch: string
    pagesPartiallyEnriched: string
    urlsFailed: string
  }
  enrichmentMethodology: string
}

// Levantine Arabic extended data from MD file 6-4 enrichment
export interface LevantineExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    enrichmentDate: string
    urlsProcessed: { total: number; successful: number; failed: number }
  }
  focusAreas: string[]
  keyQueryPatterns: string[]
  entityRegistry: {
    governments: Array<{
      entity: string
      type: string
      country: string
      role: string
    }>
    officials: Array<{
      name: string
      role: string
      country: string
      context: string
    }>
    organizations: Array<{
      organization: string
      type: string
      country: string
      relevance: string
    }>
  }
  diplomaticTimeline: {
    syria: Array<{
      date: string
      event: string
      tier: TierLevel
    }>
    lebanon: Array<{
      date: string
      event: string
      tier: TierLevel
    }>
    iraq: Array<{
      date: string
      event: string
      tier: TierLevel
    }>
    jordan: Array<{
      date: string
      event: string
      tier: TierLevel
    }>
  }
  diasporaData: {
    levantineInUAE: Array<{
      nationality: string
      population: string
      year: string
      ranking: string
      tier: TierLevel
    }>
    syrianDetails: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
    lebaneseDetails: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
    iraqiDetails: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
    jordanianDetails: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
    palestinianDetails: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
  }
  economicData: {
    tradeInvestment: Array<{
      metric: string
      value: string
      context: string
      tier: TierLevel
    }>
    humanitarianAid: Array<{
      metric: string
      value: string
      context: string
      tier: TierLevel
    }>
    kafalaSystem: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
    uaeIran: Array<{
      metric: string
      value: string
      tier: TierLevel
    }>
  }
  sentimentAnalysis: Array<{
    topic: string
    sentiment: string
    intensity: string
    sourceTypes: string
    keyPhrases: string
  }>
  relevanceAssessment: {
    byTopic: Array<{
      topic: string
      relevance: string
      rationale: string
    }>
    byCountry: Array<{
      country: string
      score: string
      drivers: string
    }>
  }
  sourceCredibilityMatrix: Array<{
    url: string
    tier: TierLevel
    contentQuality: string
    accessStatus: string
  }>
  riskTensions: {
    active: Array<{
      issue: string
      severity: string
      trend: string
      response: string
    }>
    historical: Array<{
      issue: string
      severity: string
      date: string
      status: string
    }>
  }
  quotations: Array<{
    quote: string
    source: string
    sentiment: string
  }>
  completenessIndex: Array<{
    category: string
    dataPoints: number
    completeness: string
  }>
}

// Gulf Arabic-specific extended data from MD file 6-3 enrichment
export interface GulfArabicExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    urlsEnriched: number
    enrichmentCompletion: string
  }
  focusAreas: Array<{
    id: string
    description: string
    uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  }>
  queryPatterns: Array<{
    queryNumber: string
    query: string
    primaryTopic: string
    sentiment: string
  }>
  sourceCredibilityMatrix: Array<{
    url: string
    sourceName: string
    type: string
    tier: TierLevel
    uaeRelevance: string
    fetchStatus: 'success' | 'failed' | 'no_content'
    notes: string
  }>
  urlContentSummaries: Array<{
    id: string
    title: string
    url: string
    status: 'success' | 'failed' | 'no_content'
    tier: TierLevel
    uaeRelevance: string
    keyFindings: string[]
    dataExtracted?: Record<string, unknown>
  }>
  entityRegistries: {
    keyIndividuals: Array<{
      name: string
      role: string
      affiliation: string
      relevanceToUAE: string
    }>
    institutions: Array<{
      institution: string
      type: string
      country: string
      uaeRelevance: string
    }>
    geographicEntities: Array<{
      entity: string
      type: string
      gccContext: string
    }>
  }
  sentimentAnalysis: {
    sentimentMatrix: Array<{
      topic: string
      overallSentiment: string
      positivePercent: number
      negativePercent: number
      neutralPercent: number
      keyDrivers: string
    }>
    sentimentByPlatform: Array<{
      platform: string
      primarySentiment: string
      uaeRelatedVolume: string
      keyPattern: string
    }>
  }
  structuredDataTables: {
    speakerDemographics: Array<{
      subDialect: string
      country: string
      estSpeakers: string
      documentedTerms: number
      mutualIntelligibility: string
    }>
    emiratiDialectKPIs: Array<{
      kpi: string
      value: string
      source: string
      date: string
    }>
    alyahBenchmark: {
      totalSamples: number
      topModel: string
      topAccuracy: number
      baseModelTopAccuracy: number
      instructionTunedTopAccuracy: number
    }
    gccCrisisTimeline: Array<{
      phase: string
      date: string
      duration: string
      keyEvent: string
    }>
    saudiUAERivalryMetrics: Array<{
      dimension: string
      saudiArabia: string
      uae: string
      implication: string
    }>
    nlpCorpusResources: Array<{
      resource: string
      type: string
      sizeScope: string
      source: string
      date: string
    }>
  }
  uaeRelevanceAssessment: {
    topicLevel: Array<{
      topic: string
      uaeRelevanceScore: number
      rationale: string
    }>
    sourceLevel: Array<{
      tier: string
      count: number
      avgUaeRelevance: string
    }>
  }
  synthesizedFindings: {
    gulfArabicOverview: string
    emiratiPreservationKPIs: string
    uaeGulfStateRelationsStatus: string
    saudiUAERivalryAssessment: string
    nlpAIEmiratiDialect: string
    arabicSocialMediaNormalization: string
  }
  verificationConfidence: {
    status: string
    confidenceLevel: string
    failedFetches: Array<{
      url: string
      statusCode: string
      likelyContent: string
    }>
    dataQualityNotes: string[]
  }
  sourceUrls: string[]
  enrichmentDate: string
  dataPointsExtracted: number
  urlsProcessed: { total: number; successful: number; failed: number }
}

// MSA-specific extended data from MD file enrichment
export interface MSAExtendedData {
  keyMetrics: {
    gdp2025: number
    gdpGrowth2025: number
    gdpPerCapita2025: number
    population2025: number
    expatPercentage: number
    oilReserves: number
    gasReserves: number
    defenseBudget2024: number
    militaryPersonnelActive: number
    militaryPersonnelReserve: number
    diplomaticRelations: number
  }
  topicSentiment: {
    government: { positive: number; neutral: number; negative: number }
    leadership: { positive: number; neutral: number; negative: number }
    economy: { positive: number; neutral: number; negative: number }
    defense: { positive: number; neutral: number; negative: number }
    foreignPolicy: { positive: number; neutral: number; negative: number }
    demographics: { positive: number; neutral: number; negative: number }
  }
  sourceCredibilityTiers: {
    tier0: { count: number; sources: string[] }
    tier1: { count: number; sources: string[] }
    tier2: { count: number; sources: string[] }
    tier3: { count: number; sources: string[] }
    tier4: { count: number; sources: string[] }
  }
  queryPatterns: Array<{
    pattern: string
    example: string
  }>
  regionalReach: {
    uaeDomestic: number
    gccCountries: number
    arabWorld: number
    globalArabicSpeakers: number
  }
  keyEntities: Array<{
    name: string
    role: string
    since: string
  }>
  urlRegistry: {
    totalUrls: number
    successfulFetches: number
    fetchRate: number
    categories: string[]
  }
  verificationStatus: {
    queriesExecuted: number
    pagesFetched: number
    dataExtractionRate: number
    confidence: string
    enrichmentDate: string
  }
}

// Maghrebi Arabic-specific extended data from MD file 6-6 enrichment
export interface MaghrebiArabicExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    microQueryFile: string
    focusAreas: string[]
    enrichmentDate: string
    totalSourcesProcessed: number
    dataPointsExtracted: number
  }
  diplomaticRelationsDashboard: Array<{
    country: string
    relationStatus: string
    tensionScore: number
    lastAmbassadorRecall: string
    keyDisputes: string[]
    uaeInvestmentLevel: string
  }>
  diplomaticKeyDates: Array<{
    date: string
    event: string
    countriesInvolved: string
  }>
  workerStatistics: {
    totalMigrantWorkers: number
    migrantPercentageOfPopulation: number
    modernSlaveryVictims: number
    modernSlaveryPrevalence: number
    globalSlaveryRanking: string
    arabStatesRanking: string
    forcedMarriageCases: number
    detainedDeportedAfricans: number
    labourRightsIndexScore: number
    detentionDurationRange: string
  }
  moroccoUAEEconomics: {
    uaeFdiToMorocco: string
    uaeFdiToMoroccoUsd: number
    uaeShareOfTotalFdi: number
    realEstateFdiPercentage: number
    manufacturingFdiPercentage: number
    moroccanCommunityInUae: number
    megadealValue: string
  }
  gccDemographicOverview: Array<{
    country: string
    totalPopulation: number
    percentNationals: number
    percentForeign: number
    migrantStock: number
  }>
  dialectClassification: Array<{
    dialect: string
    isoCode: string
    geographicSpread: string
    keyInfluences: string
    mutualIntelligibility: string
  }>
  uaeRegionalInfluence: Array<{
    region: string
    influenceLevel: string
    keyVectors: string
    assessment: string
  }>
  entityRegistries: {
    moroccanEntities: Array<{ entity: string; role: string; relationToUae: string }>
    algerianEntities: Array<{ entity: string; role: string; relationToUae: string }>
    tunisianEntities: Array<{ entity: string; role: string; relationToUae: string }>
    uaeDecisionMakers: Array<{ official: string; position: string; role: string }>
    expertContributors: Array<{ expert: string; organization: string; specialty: string }>
    africanDiaspora: Array<{ nationality: string; estimatedPopulation: string; keyActivities: string; economicImpact: string }>
    maghrebiWorkersOrigin: Array<{ country: string; estimatedWorkers: string; primarySectors: string }>
  }
  sentimentAnalysisMatrix: Array<{
    topic: string
    source: string
    url: string
    overallSentiment: string
    sentimentScore: number
    keyThemes: string
    keyNarrative?: string
    framing?: string
  }>
  migrantWorkerDiscourseSentiment: Array<{
    source: string
    url: string
    sentimentScore: number
    framing: string
  }>
  aggregateSentiment: {
    averageScore: number
    sentiment: string
  }
  uaeForeignPolicyPerception: Array<{
    source: string
    url: string
    sentiment: string
    assessment: string
  }>
  dialectAcademicSources: Array<{
    source: string
    sentiment: string
    note: string
  }>
  tunisianUAERelationsSentiment: Array<{
    source: string
    sentiment: string
    keyNarrative: string
  }>
  uaeRelevanceAssessment: {
    relevanceTiers: Array<{ tier: string; definition: string; priority: string }>
    topicRelevance: Array<{
      topic: string
      relevanceTier: string
      uaeInterestJustification: string
    }>
    riskHeatMap: {
      highRisk: string[]
      mediumRisk: string[]
      lowRisk: string[]
    }
  }
  sourceCredibilityMatrix: {
    tierDefinitions: Array<{ tier: string; characteristics: string; trustLevel: string }>
    sources: Array<{
      source: string
      url: string
      tier: number
      credibility: number
      dataType: string
      verificationStatus: string
    }>
    dataQualitySummary: {
      tier0to1Sources: number
      tier2Sources: number
      tier3Sources: number
      tier4Sources: number
      weightedAverageCredibility: number
    }
  }
  urlContentSummaries: Array<{
    url: string
    title: string
    tier: number
    credibility: number
    extractedDataPoints: string[]
    keyQuote?: string
    uaeRelevance: string
    publicationDate?: string
    economicData?: string
    strategicContext?: string
  }>
  dialectAnalysis: {
    moroccanArabic: {
      definition: string
      scriptStyle: string
      keyCharacteristics: string[]
      uniqueFeatures: string[]
      hasEvolvingScript: boolean
      frenchLoanwords: string[]
      spanishLoanwords: string[]
      berberInfluences: string[]
    }
    dialectKeyDifferences: Array<{
      feature: string
      moroccan: string
      algerian: string
      tunisian: string
    }>
    loanwordSources: {
      french: string[]
      spanish: string[]
      berber: string[]
    }
  }
  verificationStatus: {
    allQueriesExecuted: boolean
    allPagesFetched: boolean
    allDataExtracted: boolean
    noFabricationDetected: boolean
    confidenceLevel: string
    crossReferenced: boolean
    sourceDistribution: {
      tier0: { count: number; percentage: string }
      tier1: { count: number; percentage: string }
      tier2: { count: number; percentage: string }
      tier3: { count: number; percentage: string }
      tier4: { count: number; percentage: string }
    }
    confidenceLevels: Array<{
      dataCategory: string
      confidence: string
      sources: string
    }>
  }
  sourcesConsulted: Array<{
    source: string
    tier: number
  }>
  entityRegistryQuickRef: {
    moroccanEntities: Array<{ name: string; role: string }>
    algerianEntities: Array<{ name: string; role: string }>
    tunisianEntities: Array<{ name: string; role: string }>
    uaeEntities: Array<{ name: string; role: string }>
    africanDiasporaUae: Array<{ nationality: string; estimatedPopulation: string }>
  }
}

// --------------------------------------------------------------------------
// STAKEHOLDER INTELLIGENCE TYPES (Category 7)
// --------------------------------------------------------------------------

export interface StakeholderProgram {
  name: string
  description: string
  status: 'active' | 'completed' | 'planned'
  startDate?: string
  endDate?: string
  budget?: number
}

export interface StakeholderMetrics {
  digitalReach?: number
  engagement?: number
  sentiment?: SentimentBreakdown
  programs?: StakeholderProgram[]
  credibility?: CredibilityScore
}

export interface StakeholderIntelligence {
  id: string
  name: string
  nameAr?: string
  type: 'government' | 'media' | 'corporate' | 'civil-society' | 'international'
  mandate: string
  metrics: StakeholderMetrics
  digitalPresence?: SocialAccount[]
  keyFindings?: KeyFinding[]
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  sources?: SourceReference[]
  lastUpdated: string
}

// --------------------------------------------------------------------------
// HISTORICAL CONTEXT TYPES (Category 8)
// --------------------------------------------------------------------------

export interface HistoricalEvent {
  date: string
  title: string
  description: string
  entities?: string[]
  outcome?: string
  significance?: 'critical' | 'major' | 'minor'
}

export interface PolicyOutcome {
  policy: string
  year: string
  impact: string
  successors?: string[]
}

export interface HistoricalEra {
  id: string
  era: string
  period: { start: string; end: string }
  description: string
  keyEvents: HistoricalEvent[]
  policyOutcomes: PolicyOutcome[]
  entityInvolvement: string[]
  nationBuildingMilestones: string[]
  credibility: CredibilityScore
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
  lastUpdated: string
  // Extended fields for 8-10 Policy Announcement enrichment
  policyAnnouncements?: PolicyAnnouncement[]
  sourceCredibilityMatrix?: SourceCredibilityEntry[]
  uaeRelevanceMatrix?: UAERelevanceEntry[]
  sentimentSummary?: SentimentSummaryEntry[]
  dashboardKPIs?: DashboardKPICategory[]
  summary?: {
    totalPolicies?: number
    dataPointsCount?: number
  }
  // Additional fields for historical data enrichment
  sheikhdoms?: Array<{ emirate: string; duration: string; entryMethod: string }>
  currencyEvolution?: Array<{ period: string; currency: string }>
  treaties?: Array<{ name: string; date: string; description: string; articles: string }>
  britishRepresentatives?: Array<{ name: string; period: string }>
  pearlingData?: { peakBoats: string; peopleEmployed: string; dubaiBoats1907: string; boats1929: string; season: string; declineStarted: string }
  divingEquipment?: Array<{ name: string; description: string }>
  declineFactors?: Array<{ factor: string; impact: string }>
  oilTimeline?: Array<{ year: string; event: string; details: string }>
  concessionDetails?: { ipcDownPayment: string; monthlyPayment: string; concessionDuration: string; profitSharing: string; adnocStake: string }
  companies?: Array<{ name: string; acronym: string; role: string; ownership: string }>
  productionFields?: Array<{ field: string; discovery: string; onStream: string; productionData: string }>
  uaeReserves?: { oilReservesAbuDhabi: string; oilReservesGlobalRank: string; naturalGasAbuDhabi: string; abuDhabiLandArea: string; islandsInTerritory: string; uaeProduction2010: string }
  [key: string]: any
}

// --------------------------------------------------------------------------
// EVENT-SPECIFIC HISTORICAL DEEP DIVE TYPES (MD 8-9)
// --------------------------------------------------------------------------

export type RelevanceLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export interface EventEntity {
  entity: string
  role: string
  type: 'Person' | 'Place' | 'Organization' | 'Nation' | 'Tribe' | 'Media' | 'Fund' | 'Operation' | 'Agreement' | 'Facility' | 'App' | 'Vaccine' | 'Company' | 'Firm' | 'Subsidiary' | 'AI Model'
}

export interface EventSentiment {
  topic: string
  sentiment: string
  valence: number
  source: string
}

export interface EventSource {
  name: string
  url?: string
  tier: TierLevel
  credibilityScore: string
}

export interface EventKPIScore {
  event: string
  yearStart: string
  yearEnd: string
  severityScore: string
  internationalImpact: string
  humanRightsImpact?: string
  economicImpact: string
  resolutionStatus: string
}

export interface HistoricalEventDetail {
  id: string
  eventNumber: number
  title: string
  period: { start: string; end: string }
  source: string
  overview: string
  keyFacts: string[]
  timeline?: Array<{
    date: string
    event: string
    description?: string
  }>
  entities: EventEntity[]
  sentiment: EventSentiment[]
  uaeRelevance: RelevanceLevel
  sources: EventSource[]
  kpiScore?: EventKPIScore
  additionalData?: Record<string, unknown>
}

export interface EventHistoricalDataset {
  events: HistoricalEventDetail[]
  summary: {
    totalEvents: number
    entityCount: number
    sourceCount: number
    dataPointsCount: number
    lastUpdated: string
  }
}

// --------------------------------------------------------------------------
// POLICY ANNOUNCEMENT TYPES (MD 8-10)
// --------------------------------------------------------------------------

export interface PolicyProvision {
  article?: string
  provision: string
  penalty?: string
}

export interface PolicyKPI {
  kpi: string
  value: string | number | boolean
  unit?: string
  date?: string
  status?: string
  source?: string
}

export interface PolicySentiment {
  source: string
  sentiment: 'positive' | 'negative' | 'neutral' | 'mixed' | 'cautious' | 'critical'
  keyPhrases?: string[]
  percentage?: { positive?: number; negative?: number; neutral?: number }
}

export interface PolicyAnnouncementDetails {
  launchDate?: string
  effectiveDate?: string
  legalInstrument?: string
  issuer?: string
  launchedBy?: string
  investment?: string
  entities?: string[]
  provisions?: PolicyProvision[]
  kpis?: PolicyKPI[]
  sentiment?: PolicySentiment[]
  criticisms?: string[]
  positives?: string[]
  timeline?: { date: string; event: string }[]
  eligibility?: { category: string; requirements: string }[]
  penalties?: { violation: string; fineRange: string }[]
  alternatives?: string[]
  requirements?: { previous?: string; current?: string }[]
  projectedImpact?: { kpi: string; value: string }[]
  targets?: { year: string; target: string }[]
  keyQuote?: { quote: string; author: string }
  rating?: { category: string; assessment: string }
  objectives?: string[]
  keyRequirements?: string[]
  // Additional fields from MD data
  issueDate?: string
  announcementDate?: string
  approvalDate?: string
  policyYear?: number | string
  launchYear?: number | string
  contractor?: string
  contractYear?: number | string
  atCop6?: boolean
  atCop26?: boolean
  atCop28?: boolean
  [key: string]: any
}

export interface PolicyAnnouncement {
  id: string
  name: string
  year: number
  description: string
  significance: 'critical' | 'major' | 'minor'
  uaeRelevance: 'critical' | 'high' | 'medium' | 'low'
  details: PolicyAnnouncementDetails
  keyMetrics?: { label: string; value: string | number }[]
  sources: SourceReference[]
  credibility: CredibilityScore
  lastUpdated: string
}

export interface SourceCredibilityEntry {
  source: string
  tier: TierLevel
  credibilityRating: string
  type: string
  url?: string
}

export interface UAERelevanceEntry {
  topic?: string
  priority?: string
  score?: number
  policy?: string
  uaeRelevance?: string
  criticalKPIs?: string
  assessmentRationale?: string
  [key: string]: any
}

export interface SentimentSummaryEntry {
  policy: string
  positive: number
  negative: number
  neutral: number
}

export interface DashboardKPIEntry {
  kpi: string
  baseline?: string
  current?: string
  target?: string
  status: string
}

export interface DashboardKPICategory {
  category: string
  kpis: DashboardKPIEntry[]
}

// --------------------------------------------------------------------------
// SENTIMENT / EMOTIONS TYPES (Category 9)
// --------------------------------------------------------------------------

export interface EmotionSpecificData {
  emotion: keyof PlutchikEmotion
  intensity: number
  drivers: string[]
  manifestations: string[]
  demographicBreakdown?: Record<string, number>
}

export interface SentimentData {
  id: string
  category: string
  description: string
  sentiment: SentimentBreakdown
  emotions?: PlutchikEmotion
  emotionSpecific?: EmotionSpecificData[]
  primaryDrivers?: string[]
  demographicBreakdown?: Record<string, number>
  platformDistribution?: Record<string, number>
  trend: TrendData
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
  lastUpdated: string
}

// --------------------------------------------------------------------------
// TRENDS INTELLIGENCE TYPES (Category 10)
// --------------------------------------------------------------------------

export type TrendCategory =
  | 'ai-technology'
  | 'social-media'
  | 'generational'
  | 'geopolitical'
  | 'economic'
  | 'cultural'
  | 'regulatory'
  | 'media-industry'
  | 'climate'
  | 'predictive-foresight'

export interface GenerationMetrics {
  genZ?: number
  millennial?: number
  genX?: number
  boomer?: number
}

export interface TrendForecast {
  scenario: 'optimistic' | 'baseline' | 'pessimistic'
  probability: number
  timeline: string
  indicators: string[]
}

export interface RegulatoryTrend {
  status: 'active' | 'pending' | 'none'
  description: string
  effectiveDate?: string
  impactSector?: string
}

export interface TrendAnalysis {
  id: string
  category: TrendCategory
  name: string
  description: string
  adoptionRate: number
  uaeAdoptionRate: number
  generationalBreakdown: GenerationMetrics
  regulatoryStatus: RegulatoryTrend
  sentiment: SentimentBreakdown
  forecasts: TrendForecast[]
  keyDrivers?: string[]
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  keyFindings?: KeyFinding[]
  sources?: SourceReference[]
  lastUpdated: string
  // Extended fields from MD enrichment (10-2 Social Media)
  platformMetrics?: {
    tiktok?: {
      mau?: string
      dailyActive?: string
      engagementRate?: string
      dailyTime?: string
      cpm?: string
      adRevenue?: string
      shopGmv?: string
      topMarkets?: { ksa?: string; us?: string; indonesia?: string; brazil?: string }
    }
    instagram?: {
      mau?: string
      dailyTime?: string
      engagementRate?: string
      shoppingGmv?: string
      reachPenetration?: string
      reelsShare?: string
    }
    facebook?: {
      mau?: string
      dailyTime?: string
      engagementRate?: string
      shopsGmv?: string
      organicReach?: string
    }
    youtube?: {
      mau?: string
      dailyGenZ?: string
      dailyTime18_24?: string
      shortsViews?: string
      adRevenue?: string
    }
    linkedin?: {
      mau?: string
      engagementRate?: string
      carouselEr?: string
      cpm?: string
      b2bLeads?: string
    }
    snapchat?: {
      dau?: string
      reach13_24?: string
      arUsers?: string
      dailyTime?: string
    }
  }
  commerceMetrics?: {
    globalSocialCommerce?: string
    liveCommerce?: string
    genZDiscovery?: string
    genZSocialSearch?: string
    impulsePurchases?: string
    livestreamPurchaseRate?: string
    socialToPlatformExit?: string
  }
  influencerMetrics?: {
    marketSize?: string
    projected2030?: string
    avgRoi?: string
    microRoi?: string
    nanoRoi?: string
    virtualMarket?: string
    virtualGrowth?: string
    fraudLosses?: string
    fakeFollowerRate?: string
  }
  contentPerformance?: {
    shortFormShare?: string
    shortFormEngagementPremium?: string
    linkedInCarouselEr?: string
    instagramCarouselEr?: string
    instagramReelsEr?: string
    tiktokVideoEr?: string
    optimalReelsLength?: string
    optimalTikTokLength?: string
  }
  genZMetrics?: {
    dailyTime?: string
    instagramUsage?: string
    youtubeUsage?: string
    tiktokUsage?: string
    privacyConcerns?: string
    mentalHealthNegative?: string
    influencerPurchases?: string
    ugcVsBranded?: string
    socialAsSearch?: string
  }
  advertisingMetrics?: {
    totalAdSpend?: string
    videoAdSpend?: string
    tiktokCpm?: string
    linkedInCpm?: string
    metaCpm?: string
    videoAdSpend2026?: string
    shortFormAdSpend2025?: string
  }
}

// --------------------------------------------------------------------------
// VERIFICATION / FACT-CHECK TYPES (Category 11)
// --------------------------------------------------------------------------

export type VerificationVerdict =
  | 'verified'
  | 'partially-verified'
  | 'unverified'
  | 'false'
  | 'misleading'

export interface Source {
  name: string
  url?: string
  tier: TierLevel
  reliability: 'high' | 'medium' | 'low'
}

export interface OmissionData {
  omittedFacts: string[]
  significance: 'critical' | 'major' | 'minor'
  impact: string
}

export interface EchoChamberAnalysis {
  platform: string
  strength: 'low' | 'medium' | 'high' | 'critical'
  primaryEchos: string[]
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

export interface VerificationResult {
  id: string
  claim: string
  verdict: VerificationVerdict
  accuracyScore: number // 0-100
  sources: Source[]
  echoChamberRisk?: EchoChamberAnalysis
  omissionData?: OmissionData
  botInauthenticScore?: number
  keyFindings?: KeyFinding[]
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  sources2?: SourceReference[]
  lastUpdated: string
  // Extended fields for 11-9 Bot & Inauthentic Behavior enrichment
  uaeRelevanceMatrix?: UAERelevanceMatrixEntry[]
  sourceCredibilityMatrix?: SourceCredibilityMatrixEntry[]
  entityRegistry?: EntityRegistryEntry[]
  sentimentAnalysis?: SentimentAnalysisEntry[]
  keySourceCitations?: KeySourceCitation[]
  dashboardKPIs?: DashboardKPIEntry[]
  urlFetchStatus?: URLFetchStatusEntry[]
  researchNotes?: string[]
  botNetworkScale?: BotNetworkScaleKPI[]
  engagementFraud?: EngagementFraudKPI[]
  impactKPIs?: ImpactKPI[]
  detectionConfidence?: DetectionConfidenceKPI[]
  // Extended fields for 11-1 Media About Media enrichment
  extendedData?: MediaAboutMediaExtendedData | OmissionSilenceExtendedData | FactCheckVerificationExtendedData
  // Extended fields for 11-9 Bot & Inauthentic Behavior
  takedownSummary?: Array<{ originCountry: string; numberOfTakedowns: number; platforms: string[] }>
  aiGeneratedTrends?: any[]
  platformComparisons?: any[]
  operations?: any[]
  narrativeThemes?: any[]
  keyFinding?: string
  kpiData?: any[]
  detectionBranches?: any[]
  behavioralSignatures?: any[]
  definitions?: any[]
  characteristics?: any[]
  conceptDistinctions?: any[]
  tactics?: any[]
  opSecMeasures?: any[]
  middleEastPatterns?: any[]
  detectionChallenges?: any[]
  warningSigns?: any[]
  redFlags?: any[]
  networkIndicators?: any[]
  topPages?: any[]
  categories?: any[]
  regulatoryChallenges?: any[]
  legalFrameworks?: any[]
  crossPlatforms?: any[]
  q1Operations?: any[]
  uaeThreatLevels?: any[]
  uaeOperations?: any[]
  uaeRelevanceItems?: any[]
  marketingFirms?: any[]
  conclusions?: any[]
  recommendations?: any[]
  sourceCitations?: any[]
  statisticalSummary?: any[]
  researchCompiled?: string
}

// --------------------------------------------------------------------------
// 11-7 OMISSION & SILENCE DETECTION EXTENDED TYPES
// --------------------------------------------------------------------------

export interface OmissionSilenceExtendedData {
  executionMetadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    outputFile: string
    enrichmentCompleted: string
    urlsSuccessfullyFetched: number
    enrichmentRate: string
  }
  focusAreas: string[]
  pressFreedomKPIs: OmissionSilenceKPI[]
  enforcementKPIs: OmissionSilenceKPI[]
  judicialKPIs: OmissionSilenceKPI[]
  conflictKPIs: OmissionSilenceKPI[]
  digitalManipulationKPIs: OmissionSilenceKPI[]
  entityRegistry: {
    convictedHRDs: ConvictedHRD[]
    forciblyDisappeared: ForciblyDisappeared[]
    massTrialDefendants: MassTrialMetric[]
    blockedSocialMediaAccounts: BlockedAccount[]
    influenceOperations2019: InfluenceOperation[]
  }
  omissionPatterns: OmissionPattern[]
  silenceMechanisms: SilenceMechanism[]
  comparativeOmissionEvidence: ComparativeOmission[]
  enforcementActionsDuringIranStrikes: EnforcementAction[]
  specificDiscrepanciesDocumented: Discrepancy[]
  wartimeSpeechRestrictions: SpeechRestriction[]
  sourceCredibilityMatrix: OmissionSourceCredibility[]
  gulfMediaCrackdown: GulfCountry[]
  rsfRankingHistory: RSFRanking[]
  freedomOnTheNet2025: FoNCategory[]
  freedomInTheWorld2025: FiWDimension[]
  legalFramework: LegalFrameworkEntry[]
  topicsWithDocumentedOmission: TopicOmission[]
  freedomOfExpressionMetrics: ExpressionMetric[]
  surveillanceInfrastructure: SurveillanceMetric[]
  cpjViolationsGlobal: CPJViolation[]
  sourceCitations: SourceCitation[]
}

export interface OmissionSilenceKPI {
  kpi: string
  value: string | number
  trend?: string
  period?: string
  targetBaseline?: string
  year?: string
  platform?: string
  tier: TierLevel
}

export interface ConvictedHRD {
  name: string
  nationality: string
  sentence: string
  year: string
  charges: string
  status: string
}

export interface ForciblyDisappeared {
  name: string
  nationality: string
  lastSeen: string
  circumstance: string
}

export interface MassTrialMetric {
  metric: string
  value: string
}

export interface BlockedAccount {
  account: string
  type: string
  followers: string
}

export interface InfluenceOperation {
  platform: string
  accounts: string
  origin: string
  purpose: string
}

export interface OmissionPattern {
  pattern: string
  severity: string
  evidenceBase: string
}

export interface SilenceMechanism {
  mechanism: string
  implementation: string
  scale: string
}

export interface ComparativeOmission {
  event: string
  internationalCoverage: string
  uaeCoverage: string
  informationGap: string
}

export interface EnforcementAction {
  metric: string
  value: string
  source: string
}

export interface Discrepancy {
  location: string
  officialClaim: string
  contrastingEvidence: string
  verificationSource: string
}

export interface SpeechRestriction {
  country: string
  restrictionType: string
  penalty: string
}

export interface OmissionSourceCredibility {
  source: string
  tier: TierLevel
  focus: string
  reliability: string
  uaeBiasAssessment: string
}

export interface GulfCountry {
  country: string
  rsfRank: string
  score: string
  keyRestrictions: string
}

export interface RSFRanking {
  year: number
  rank: string
  score: string
  trend: string
}

export interface FoNCategory {
  category: string
  score: number
  max: number
  assessment: string
}

export interface FiWDimension {
  dimension: string
  score: number
  max: number
  status: string
}

export interface LegalFrameworkEntry {
  law: string
  year: number
  purpose: string
  maxPenalty: string
}

export interface TopicOmission {
  topic: string
  internationalCoverage: string
  uaeCoverage: string
  gapDescription: string
}

export interface ExpressionMetric {
  indicator: string
  score: number | string
  max?: number
  assessment: string
}

export interface SurveillanceMetric {
  indicator: string
  score: number | string
  max?: number
  assessment: string
}

export interface CPJViolation {
  metric: string
  value: number
}

export interface SourceCitation {
  number: number
  source: string
  url: string
  tier: TierLevel
  fetchStatus: string
}

// 11-9 Bot & Inauthentic Behavior specific types
export interface UAERelevanceMatrixEntry {
  topic: string
  uaeRelevance: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  severity: 'Extreme' | 'High' | 'Medium' | 'Low'
  confidence: 'HIGH' | 'MEDIUM' | 'LOW'
}

export interface SourceCredibilityMatrixEntry {
  source: string
  tier: TierLevel
  credibilityScore: number
  trustLevel: string
  urlStatus: string
}

export interface EntityRegistryEntry {
  entity: string
  type: 'Company' | 'Individual' | 'Researcher' | 'GovernmentAgency' | 'ResearchOrganization'
  country?: string
  role: string
  details?: string
}

export interface SentimentAnalysisEntry {
  topic: string
  overallSentiment: string
  dominantNarrative: string
  sourceDiversity: string
}

export interface KeySourceCitation {
  number: number
  source: string
  type: string
  tier: TierLevel
  uaeRelevance: string
  url: string
}

export interface DashboardKPISimpleEntry {
  kpi: string
  value: string
  trend?: string
  lastUpdated: string
}

export interface URLFetchStatusEntry {
  url: string
  status: string
  dataExtracted?: string
  contentQuality: string
}

export interface BotNetworkScaleKPI {
  kpi: string
  value: string
  trend?: string
  lastUpdated: string
}

export interface EngagementFraudKPI {
  kpi: string
  value: string
  source: string
}

export interface ImpactKPI {
  kpi: string
  value: string
  context: string
}

export interface DetectionConfidenceKPI {
  kpi: string
  value: string
  source: string
}

// --------------------------------------------------------------------------
// 11-1 Media About Media Extended Types
// --------------------------------------------------------------------------

export interface MediaAboutMediaKPI {
  kpi: string
  value: string | number
  trend?: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  tier: TierLevel
}

export interface MediaOutletOwnership {
  outlet: string
  owner: string
  ownershipType: string
  politicalLeaning: string
  editorialAlignment: string
}

export interface AlRoeyaIncident {
  incidentDate: string
  location: string
  publisher: string
  parentCompany: string
  parentCompanyOwner: string
  employeesLostJobs: string
  trigger: string
  articleTopic: string
  officialReason: string
  actualReasonAlleged: string
}

export interface SurveillanceSystem {
  system: string
  location: string
  scale: string
  capability: string
}

export interface JournalistRestriction {
  restrictionType: string
  description: string
  frequency: string
}

export interface LegalArticle {
  article: string
  law: string
  prohibition: string
  penalty: string
}

export interface ContentStandard {
  standardNumber: number
  requirement: string
  scope: string
}

export interface PenaltyStructure {
  offense: string
  fine: string
  additionalPenalties: string
}

export interface RegulatoryBody {
  body: string
  level: string
  function: string
}

export interface AudienceTrustMetric {
  source: string
  trustLevel: string
  trend: string
  sample: string
}

export interface CoverageBiasPerception {
  metric: string
  value: string
  sample: string
  sentiment: string
}

export interface BlockedService {
  service: string
  status: string
}

export interface SpywareProgram {
  program: string
  operator: string
  target: string
}

export interface SentimentSourceCredibilityEntry {
  source: string
  tier: TierLevel
  reliability: string
  dataType: string
}

export interface SentimentByTopic {
  topic: string
  source: string
  sentiment: string
  score: number
}

export interface UAERelevanceTier {
  tier: 'Critical Relevance' | 'High Relevance' | 'Medium Relevance' | 'Low Relevance'
  items: string[]
}

export interface SummaryDataPoint {
  category: string
  metric: string
  value: string
  source: string
  extractionStatus: string
}

export interface URLContentSummary {
  url: string
  title: string
  content: string
  credibility: string
}

export interface CrisisCoverageMetrics {
  potentialImpressions: string
  digitalReach: string
  websiteVisits: string
  engagements: string
  positiveMediaSentiment: string
  positivePublicSentiment: string
}

export interface MediaAboutMediaExtendedData {
  // KPIs
  kpis: MediaAboutMediaKPI[]
  // Media Outlet Ownership
  mediaOutletOwnership: MediaOutletOwnership[]
  // Al-Roeya Incident
  alRoeyaIncident: AlRoeyaIncident
  // Surveillance Infrastructure
  surveillanceInfrastructure: SurveillanceSystem[]
  // Self-Censorship Drivers
  selfCensorshipDrivers: string[]
  // Journalist Restrictions
  journalistRestrictions: JournalistRestriction[]
  // Legal Framework
  legalFramework: LegalArticle[]
  // Content Standards (Federal Decree Law No. 55/2023)
  contentStandards: ContentStandard[]
  // Penalty Structure
  penaltyStructure: PenaltyStructure[]
  // Regulatory Bodies
  regulatoryBodies: RegulatoryBody[]
  // Audience Trust Metrics
  audienceTrustMetrics: AudienceTrustMetric[]
  // Coverage Bias Perceptions
  coverageBiasPerceptions: CoverageBiasPerception[]
  // Crisis Coverage Metrics (April 2026)
  crisisCoverageMetrics: CrisisCoverageMetrics
  // Blocked Services
  blockedServices: BlockedService[]
  // Spyware Programs
  spywarePrograms: SpywareProgram[]
  // Source Credibility Matrix
  sourceCredibilityMatrix: SourceCredibilityEntry[]
  // Sentiment Analysis by Topic
  sentimentAnalysis: SentimentByTopic[]
  // UAE Relevance Assessment
  uaeRelevanceAssessment: UAERelevanceTier[]
  // Summary Data Points
  summaryDataPoints: SummaryDataPoint[]
  // URL Content Summaries
  urlContentSummaries: URLContentSummary[]
  // Enrichment metadata
  enrichmentDate: string
  urlsAnalyzed: number
  urlsSuccessfullyFetched: number
  urlsBlockedFailed: number
  dataPointsExtracted: number
  structuredTablesCreated: number
  sentimentAnalysesCompleted: number
  sourceCredibilityAssessed: number
}

// --------------------------------------------------------------------------
// 11-6 FACT-CHECK & VERIFICATION EXTENDED TYPES
// --------------------------------------------------------------------------

export interface FactCheckKPI {
  kpi: string
  value: string | number
  trend?: string
  source: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
  tier: TierLevel
}

export interface MisinformationCase {
  id: string
  claim: string
  verdict: 'TRUE' | 'FALSE' | 'MISLEADING' | 'PARTIALLY-TRUE' | 'UNVERIFIED'
  actualFacts: string
  misdirectionType: string
  originalDate?: string
  sources?: number
  confidence?: number
  detectionMethod?: string
}

export interface GovernmentOrg {
  name: string
  acronym: string
  role: string
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface LegalPenalty {
  violationType: string
  penaltyType: string
  minimum: string
  legalBasis?: string
  condition?: string
}

export interface DeepfakeCase {
  contentDescription: string
  identificationMethod: string
  status: string
  verdict?: string
}

export interface MisinformationTheme {
  theme: string
  frequency: number
  accuracy: number
}

export interface ExpertQuote {
  quote: string
  expert: string
  organization: string
  role?: string
  implication: string
}

export interface EntityPerson {
  name: string
  role: string
  organization: string
  credibility: 'Expert' | 'Government' | 'Media' | 'Civil Society'
}

export interface EntityOrganization {
  organization: string
  acronym?: string
  type: string
  role: string
}

export interface LawReference {
  lawName: string
  number?: string
  year?: string
  keyProvision: string
}

export interface DetectionMethod {
  method: string
  application: string
}

export interface VerificationMethod {
  method: string
  application: string
}

export interface FactCheckOrg {
  organization: string
  website: string
  credibility: TierLevel
  uaeCoverageQuality: string
}

export interface SourceCredibility {
  source: string
  tier: TierLevel
  type: string
  fetchStatus: string
  dataReliability: string
}

export interface URLFetchResult {
  url: string
  title?: string
  status: string
  keyExtract?: string
}

export interface SentimentTopic {
  topic: string
  sentiment: string
  polarity: number
  keyNarrative: string
}

export interface SummaryMetric {
  metric: string
  value: string | number
  source?: string
  date?: string
}

export interface EnforcementActionData {
  action: string
  count: number
  date?: string
  source?: string
}

export interface CyberThreatMetric {
  metric: string
  value: string
  trend: string
  date: string
}

export interface InternationalCommitment {
  commitment: string
  amount?: string
  date?: string
  beneficiary?: string
}

export interface FactCheckVerificationExtendedData {
  // KPIs
  kpis: FactCheckKPI[]
  // Government Organizations
  governmentOrganizations: GovernmentOrg[]
  // Detection Methods
  detectionMethods: DetectionMethod[]
  // Three Pillars
  threePillarStrategy: string[]
  // Legal Penalties
  legalPenalties: LegalPenalty[]
  // Federal Decree Law
  federalDecreeLaw: LawReference
  // Official Reporting Channels
  officialReportingChannels: string[]
  // Misinformation Cases
  misinformationCases: MisinformationCase[]
  // AI Generated Content
  aiGeneratedContent: DeepfakeCase[]
  // Miscaptioned Videos
  miscaptionedVideos: MisinformationCase[]
  // Misinformation Themes
  misinformationThemes: MisinformationTheme[]
  // Expert Quotes
  expertQuotes: ExpertQuote[]
  // Sudan Allegations
  sudanKeyOfficials: EntityPerson[]
  sudanTimeline: { date: string; event: string }[]
  sudanDenials: string[]
  sudanAllegations: string[]
  sudanActions: { action: string; details: string }[]
  uaeResponses: string[]
  // Expert Quotes Sudan
  sudanExpertQuotes: { quote: string; source: string }[]
  // Enforcement Actions
  enforcementActions: EnforcementAction[]
  // Incident Site Restrictions
  prohibitedActions: string[]
  securityRisks: { risk: string; description: string }[]
  // Fact Check Organizations
  factCheckOrganizations: FactCheckOrg[]
  // Summary Metrics
  summaryMisinformation: SummaryMetric[]
  summaryLegalPenalties: LegalPenalty[]
  summaryEnforcement: EnforcementAction[]
  summaryCyberThreats: CyberThreatMetric[]
  summaryInternationalCommitments: InternationalCommitment[]
  // Source Credibility Matrix
  sourceCredibilityMatrix: SourceCredibility[]
  // UAE Relevance Assessment by Topic
  uaeRelevanceByTopic: { topic: string; relevance: string; rationale: string }[]
  // UAE Relevance Assessment by Entity
  uaeRelevanceByEntity: { entity: string; tier: TierLevel; uaeRelevance: string }[]
  // Sentiment Analysis by Topic
  sentimentAnalysisByTopic: SentimentTopic[]
  // Sentiment Analysis by Source Type
  sentimentAnalysisBySourceType: { sourceType: string; avgSentiment: number; themes: string }[]
  // Entity Registry - People
  entityRegistryPeople: EntityPerson[]
  // Entity Registry - Organizations
  entityRegistryOrganizations: EntityOrganization[]
  // Laws
  laws: LawReference[]
  // URL Content Summaries
  urlContentSummaries: URLFetchResult[]
  // Data Completeness
  dataCompleteness: { category: string; completeness: string; notes: string }[]
  // Detection Methods
  verificationMethods: VerificationMethod[]
  // Deepfake Risks
  deepfakeRisks: { riskType: string; description: string }[]
  // Common Misinformation Patterns
  commonMisinformationPatterns: string[]
  // Verification Advice
  verificationAdvice: string[]
  // Processing Metrics
  processingMetrics: { metric: string; value: string }[]
  // Arrests Data
  arrestsData: { location: string; count: number; date: string }[]
  // Expert Panel
  expertPanel: EntityPerson[]
  // Enrichment metadata
  enrichmentDate: string
  dataCompletenessOverall: string
}

// --------------------------------------------------------------------------
// MONITORING / REAL-TIME TYPES (Category 12)
// --------------------------------------------------------------------------

export type MonitoringType =
  | 'daily'
  | 'weekly'
  | 'crisis'
  | 'historical'
  | 'competitive'
  | 'narrative'
  | 'gap'

export interface Alert {
  id: string
  level: AlertLevel
  message: string
  source: string
  timestamp: string
  acknowledged: boolean
  resolvedAt?: string
}

export interface GapAnalysis {
  category: string
  coveragePercent: number
  gaps: string[]
  priority: 'critical' | 'high' | 'medium' | 'low'
  recommendations: string[]
}

export interface ResponseTimeMetrics {
  averageResponseTime: number
  fastestDetection: number
  fastestVerification: number
  fastestDissemination: number
  currentCycleTime: number
  targetCycleTime: number
  alertLevels?: {
    RED?: { description: string; responseTimeTarget: number }
    YELLOW?: { description: string; responseTimeTarget: number }
    GREEN?: { description: string; responseTimeTarget: number }
  }
}

export interface MonitoringCoverage {
  languages: string[]
  regions: string[]
  platforms: string[]
  mediaTypes: string[]
}

export interface MonitoringReport {
  id: string
  type: MonitoringType
  title: string
  description: string
  lastUpdated: string
  coverage: MonitoringCoverage
  responseTime: ResponseTimeMetrics
  keyFindings?: KeyFinding[]
  alerts?: Alert[]
  statistics?: {
    totalQueries?: number
    narrativesAnalyzed?: number
    officialStatementsVerified?: number
    crisisFlags?: number
    peakQueriesPerHour?: number
  }
  methodology?: {
    approach: string
    sources: string[]
    languages: string[]
    platforms: string[]
    phases?: Array<{ phase: number; name: string; duration: number; queryCount: number; output: string }>
  }
  metadata?: {
    reportId: string
    generatedAt: string
    dataRange: { start: string; end: string }
    confidence: number
    completeness?: number
    sourcesConsulted?: number
  }
}

// --------------------------------------------------------------------------
// CRISIS RESPONSE TYPES (MD 12-3)
// --------------------------------------------------------------------------

export type CrisisLevel = 1 | 2 | 3 | 4 | 5
export type CrisisLevelColor = 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED' | 'BLACK'

export interface CrisisLevelClassification {
  level: CrisisLevel
  color: CrisisLevelColor
  triggerCriteria: string
  queryFrequency: string
}

export interface CrisisManagementLesson {
  id: number
  title: string
  description: string
  keyPoints: string[]
}

export interface OSINTtool {
  name: string
  capabilities: string
  coverage: string
  cost?: string
}

export interface NarrativeAttackCase {
  name: string
  description: string
  metrics: {
    anomalyRate?: number
    botLikeActivity?: number
    engagementVolume?: string
  }
  coordinationPatterns: string[]
}

export interface CrisisQueryPhase {
  phase: number
  name: string
  duration: string
  queryCount: number
  focus: string[]
}

export interface CrisisMetric {
  category: string
  value: string | number
  context: string
  source?: string
}

export interface EntityRegistry {
  uaeGovernment: Array<{ entity: string; role: string; source: string }>
  uaeLeadership: Array<{ name: string; title: string; source: string }>
  crisisPlatforms: Array<{ platform: string; type: string; source: string }>
  influenceOperations: Array<{ actor: string; type: string; impact: string }>
}

export interface SentimentByTopic {
  topic: string
  source: string
  sentiment: string
  keyFinding: string
}

export interface DeepFakeStatistic {
  metric: string
  value: string | number
}

export interface DisinformationStatistic {
  metric: string
  value: string | number
}

export interface InfluencerStatistic {
  metric: string
  value: string | number
}

export interface EmergencyManagementStatistic {
  category: string
  finding: string
  percentage?: number
}

export interface FactCheckingStatistic {
  metric: string
  value: string | number
}

export interface DigitalStatistic {
  metric: string
  value: string | number
  context?: string
}

export interface ToolRecommendation {
  category: string
  tools: Array<{ name: string; coverage?: string; languages?: string; specialty?: string; capability?: string; useCase?: string }>
}

export interface SourceCitation {
  number: number
  source: string
  tier: TierLevel
  uaeRelevance: 'Critical' | 'High' | 'Medium' | 'Low'
}

export interface CrisisStatistics {
  socialMediaCrisesGlobalOneHour: number
  organizationsWithFormalCrisisPlan: number
  companiesLackingCrisisPlan: number
  consumersAvoidingBrand: number
  crisisQueryVolumePerHour: number
}

export interface NarrativeAttackStatistics {
  annualCostPerceptionManipulation: number
  publicCompanyLossesNarrativeAttacks: number
  deepfakeVideoGrowth: string
  aiGeneratedFakeNewsSites: number
  botActivityTwitter: string
  falseNewsSpreadVsTruth: string
  credentialsOnCriminalMarkets: number
  webAttacksStolenCredentials: number
}

export interface InfluencerImpactStatistics {
  trustInfluencerRecommendations: number
  trustEarnedMedia: number
  purchasedDueToInfluencer: number
  socialMediaProductResearch: number
}

export interface EmergencyManagementStatistics {
  fundingPrimaryConcern: number
  budgetConstraints: number
  competitiveJobMarket: number
  qualifiedCandidateShortage: number
  staffNecessarySkills: number
  intermediateTechnologyCapability: number
  infrastructureAsBarrier: number
  mitigationTimePreferenceVsActual: { preference: number; actual: number }
}

export interface FactCheckingStatistics {
  globalFactCheckProjects: number
  countriesWithFactCheckers: number
  languagesCovered: number
  articlesJanMay2024: number
  articlesJanMay2025: number
  metaPartnershipShare: string
}

export interface DigitalStatistics {
  activeInternetUsers: string
  socialMediaAccounts: string
  dailySocialMediaTime: string
}

export interface CrisisResponseData {
  crisisLevels: CrisisLevelClassification[]
  crisisPhases: Array<{ phase: string; timeline: string; reactions: string[]; behaviors?: string }>
  clefTasks: Array<{ task: string; description: string; languages: string; datasetSizes: string }>
  lessons: CrisisManagementLesson[]
  osintTools: OSINTtool[]
  narrativeAttacks: NarrativeAttackCase[]
  queryPhases: CrisisQueryPhase[]
  metrics: CrisisMetric[]
  entityRegistry: EntityRegistry
  sentimentByTopic: SentimentByTopic[]
  deepFakeStats: DeepFakeStatistic[]
  disinformationStats: DisinformationStatistic[]
  influencerStats: InfluencerStatistic[]
  emergencyManagementStats: EmergencyManagementStatistic[]
  factCheckingStats: FactCheckingStatistic[]
  digitalStats: DigitalStatistic[]
  toolsRecommended: ToolRecommendation[]
  sourceCitations: SourceCitation[]
  crisisStatistics: CrisisStatistics
  narrativeAttackStatistics: NarrativeAttackStatistics
  influencerImpactStatistics: InfluencerImpactStatistics
  emergencyManagementStatistics: EmergencyManagementStatistics
  factCheckingStatistics: FactCheckingStatistics
  digitalStatistics: DigitalStatistics
}

// --------------------------------------------------------------------------
// DASHBOARD AGGREGATE TYPES
// --------------------------------------------------------------------------

export interface UAENDIPOverview {
  totalDataFiles: number
  entityCoverage: EntityOverview
  activeCrises: CrisisOverview
  sentimentSummary: Record<string, SentimentBreakdown>
  alertSummary: Record<AlertLevel, number>
  platformCoverage: number
  languageCoverage: number
  lastUpdated: string
}

// --------------------------------------------------------------------------
// PLATFORM MAPPING TYPES
// --------------------------------------------------------------------------

export type NDIPPlatform = 'CLAIRVOYANCE-CX' | 'PERCEPTION-X2' | 'RICOCHET-CATALYST-X'

export interface DataFileSource {
  fileNumber: string
  filename: string
  category: string
  platform: NDIPPlatform
  primaryModule: string
  dataLoaderImport: string
  hookName: string
}
