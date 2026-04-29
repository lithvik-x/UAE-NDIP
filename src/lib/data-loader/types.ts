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
  snippet: string
  underlyingBelief: string
  source: string
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

export type SentimentPolarity = 'positive' | 'negative' | 'neutral'

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
  platform: string
  handle: string
  url?: string
  followers?: number
  verified: boolean
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
}

export interface Narrative {
  topic: string
  narrative: string
  source: string
  prevalence: 'low' | 'medium' | 'high'
  sentiment: SentimentPolarity
}

export interface EngagementMetrics {
  impressions: number
  likes: number
  shares: number
  comments: number
  engagementRate: number
}

export interface PlatformMetrics {
  users: number
  penetration: number
  dailyActive: number
  sentiment: SentimentBreakdown
  engagement: EngagementMetrics
  censorshipLevel: 'none' | 'partial' | 'significant' | 'extreme'
}

export interface PlatformIntelligence {
  id: string
  platform: SocialPlatform
  metrics: PlatformMetrics
  governmentAccounts?: SocialAccount[]
  botActivity: BotAnalysis
  censorshipLevel: 'none' | 'partial' | 'significant' | 'extreme'
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
  trend: 'rising' | 'stable' | 'declining'
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
  averageResponseTime: string
  slaCompliance: number // percentage
  escalationRate: number
}

export interface MonitoringCoverage {
  platforms: number
  languages: number
  topics: number
  entities: number
  percentComplete: number
}

export interface MonitoringReport {
  id: string
  type: MonitoringType
  date: string
  title: string
  coverage: MonitoringCoverage
  alerts: Alert[]
  gapAnalysis?: GapAnalysis
  responseTimeMetrics?: ResponseTimeMetrics
  keyFindings?: KeyFinding[]
  credibility: CredibilityScore
  sources?: SourceReference[]
  lastUpdated: string
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
