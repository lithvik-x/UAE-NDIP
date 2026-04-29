// ============================================================================
// AI TECHNOLOGY TRENDS DATA (10-1) - ENRICHED SSOT
// ============================================================================
// Extracted from: 10-1-ai-technology-results.md
// Research Date: 2026-04-27
// Enrichment Date: 2026-04-28
// ============================================================================

import type { TierLevel, AlertLevel } from './types'

// ============================================================================
// CORE TYPE DEFINITIONS
// ============================================================================

export type UAERelevanceLevel = 'critical' | 'high' | 'medium' | 'low'

export interface RegulatoryLaw {
  name: string
  type: string
  year: number
  authority: string
  uaeRelevance: UAERelevanceLevel
}

export interface RegulatoryBody {
  name: string
  type: string
  scope: string
  uaeRelevance: UAERelevanceLevel
}

export interface Strategy {
  name: string
  target: string
  investment: string
  timeline: string
  uaeRelevance: UAERelevanceLevel
}

export interface TimelineEvent {
  date: string
  development: string
  impact: string
  sourceTier: TierLevel
}

export interface Penalty {
  violation: string
  penalty: string
  lawSource: string
}

export interface SentimentEntry {
  source: string
  sentiment: string
  keyFinding: string
}

// ============================================================================
// G42 TYPES
// ============================================================================

export interface G42Overview {
  fullName: string
  headquarters: string
  founded: number
  chairman: string
  microsoftInvestment: string
  ecosystemValuation: string
  keyProducts: string[]
}

export interface G42Subsidiary {
  name: string
  sector: string
  valuation: string
  ipoStatus: string
  uaeRelevance: UAERelevanceLevel
}

export interface G42Expansion {
  location: string
  investment: string
  timeline: string
  status: string
  uaeRelevance: UAERelevanceLevel
}

export interface MicrosoftPartnership {
  component: string
  value: string
  sourceTier: TierLevel
}

export interface MGXInfo {
  created: string
  overseenBy: string
  foundationalPartners: string
  boardChairman: string
  ceo: string
  investmentFocus: string[]
}

// ============================================================================
// AI JOBS TYPES
// ============================================================================

export interface LaborMarketKPI {
  metric: string
  value: string
  sourceYear: string
  uaeRelevance: UAERelevanceLevel
}

export interface AutomationExposure {
  roleCategory: string
  automatability: string
  riskLevel: UAERelevanceLevel
  uaeRelevance: UAERelevanceLevel
}

export interface SectorAutomation {
  sector: string
  exposureIndex: string
  riskLevel: UAERelevanceLevel
  uaeRelevance: UAERelevanceLevel
}

export interface TransformationMechanism {
  mechanism: string
  description: string
  affectedRoles: string
}

export interface JobMarketProjection {
  metric: string
  value: string
  timeline: string
  sourceTier: TierLevel
}

export interface AIHiringMetric {
  metric: string
  value: string
  change: string
  uaeRelevance: UAERelevanceLevel
}

export interface SkillsEvolution {
  metric: string
  value: string
  source: string
  uaeRelevance: UAERelevanceLevel
}

export interface PublicSentiment {
  finding: string
  value: string
  source: string
  sentiment: string
}

export interface NewRole {
  roleCategory: string
  demandLevel: string
  uaeRelevance: UAERelevanceLevel
}

export interface ReskillingInitiative {
  initiative: string
  scale: string
  source: string
  uaeRelevance: UAERelevanceLevel
}

// ============================================================================
// AUTONOMOUS VEHICLES TYPES
// ============================================================================

export interface DroneTarget {
  target: string
  value: string
  timeline: string
  status: string
  uaeRelevance: UAERelevanceLevel
}

export interface KeetaDroneDetails {
  generalManager: string
  deliverySpeed: string
  coverageAreas: string
  differential: string
  dcaaLicense: string
}

export interface MarketSize {
  market: string
  value2024: string
  value2030: string
  cagr: string
  uaeRelevance: UAERelevanceLevel
}

export interface EVTOLInfo {
  attribute: string
  value: string
  timeline: string
  uaeRelevance: UAERelevanceLevel
}

export interface SmartCityTarget {
  target: string
  value: string
  timeline: string
  uaeRelevance: UAERelevanceLevel
}

export interface AVPartnership {
  partner: string
  type: string
  timeline: string
  status: string
}

export interface CostEconomics {
  costType: string
  value: string
  savings?: string
}

// ============================================================================
// QUANTUM COMPUTING TYPES
// ============================================================================

export interface QuantumStrategy {
  attribute: string
  value: string
  globalRank?: string
  uaeRelevance: UAERelevanceLevel
}

export interface CryptographyRegulation {
  regulation: string
  year: number
  requirement: string
  uaeRelevance: UAERelevanceLevel
}

export interface QuantumInvestment {
  metric: string
  value: string
  countries?: string
  uaeRelevance: UAERelevanceLevel
}

export interface QuantumAdvantage {
  advantage: string
  description: string
  uaeRelevance: UAERelevanceLevel
}

export interface ExpectedFirstAdopter {
  sector: string
  priority: number
}

export interface QuantumApplication {
  application: string
  description: string
}

export interface NormaUAEQuantum {
  company: string
  ceo: string
  uaePartner: string
  partnerCeo: string
  focus: string
  agreementType: string
}

// ============================================================================
// STARLINK UAE TYPES
// ============================================================================

export interface StarlinkLaunch {
  officialDate: string
  licenseNumber: string
  validity: string
  licensee: string
  tdraGrant: string
  countryNumber: string
}

export interface StarlinkPlan {
  plan: string
  monthly: string
  downloadSpeed: string
  uploadSpeed?: string
  uaeRelevance: UAERelevanceLevel
}

export interface StarlinkHardware {
  kit: string
  price: string
  capability: string
  uaeRelevance: UAERelevanceLevel
}

export interface StarlinkTechnical {
  metric: string
  value: string
  sourceTier: TierLevel
}

export interface StarlinkRestriction {
  restriction: string
  detail: string
  uaeRelevance: UAERelevanceLevel
}

export interface RegionalStarlink {
  country: string
  status: string
  uaeRelevance: UAERelevanceLevel
}

export interface StarlinkTargetUser {
  sector: string
  useCase: string
}

export interface StarlinkEducationPartnership {
  partnership: string
  detail: string
  timeline: string
}

// ============================================================================
// DEEPFAKE TYPES
// ============================================================================

export interface DeepfakeRegulationStatus {
  attribute: string
  value: string
  source?: string
  uaeRelevance: UAERelevanceLevel
}

export interface DeepfakeWarning {
  warningDate: string
  content: string
  action: string
  source: string
}

export interface GlobalDeepfakeStat {
  metric: string
  value: string
  year?: string
  source?: string
  uaeRelevance: UAERelevanceLevel
}

export interface DeepfakeIncident {
  metric: string
  value: string
  period: string
  source: string
}

export interface GlobalDeepfakeLaw {
  jurisdiction: string
  lawMechanism: string
  keyProvision: string
  penalty: string
  uaeRelevance: UAERelevanceLevel
}

export interface DetectionTechnology {
  technology: string
  description: string
  status: string
}

// ============================================================================
// AI GOVERNMENT SERVICES TYPES
// ============================================================================

export interface AgenticAIDeployment {
  attribute: string
  value: string
  sourceTier: TierLevel
}

export interface AgenticAIDefinition {
  term: string
  definition: string
}

export interface TechnicalArchitecture {
  component: string
  description: string
  uaeRelevance: UAERelevanceLevel
}

export interface OperationalScope {
  application: string
  description: string
}

export interface AIRegulatoryEcosystem {
  attribute: string
  value: string
  uaeRelevance: UAERelevanceLevel
}

export interface AIChallenge {
  challenge: string
  description: string
  severity: UAERelevanceLevel
}

export interface AlgorithmicBiasFramework {
  legalFramework: string
  provision: string
  bindingForce: string
}

export interface BiasAssessment {
  finding: string
  value: string
  source: string
}

// ============================================================================
// TALENT / BRAIN DRAIN TYPES
// ============================================================================

export interface IMDTalentRanking {
  metric: string
  value: string
  globalRank: number
  change?: string
  uaeRelevance: UAERelevanceLevel
}

export interface HistoricalIMDRanking {
  period: string
  ranking: string
  uaeRelevance: UAERelevanceLevel
}

export interface ReadinessComponent {
  component: string
  value: string
  globalRank: string
  uaeRelevance: UAERelevanceLevel
}

export interface AppealFactor {
  component: string
  value: string
  uaeRelevance: UAERelevanceLevel
}

export interface BrainDrainPhase {
  phase: string
  beforeStargate: string
  afterStargate: string
}

export interface GlobalTalentMobility {
  finding: string
  value: string
  uaeRelevance: UAERelevanceLevel
}

export interface AITalentPosition {
  metric: string
  value: string
  globalRank?: string
  uaeRelevance: UAERelevanceLevel
}

export interface StargateImpact {
  attribute: string
  value: string
  uaeRelevance: UAERelevanceLevel
}

// ============================================================================
// SEMICONDUCTOR TYPES
// ============================================================================

export interface TSMCUAE {
  attribute: string
  value: string
  sourceTier: TierLevel
}

export interface USConcerns {
  concern: string
  description: string
  severity: UAERelevanceLevel
}

export interface UAESemiconductorAsset {
  asset: string
  description: string
  uaeRelevance: UAERelevanceLevel
}

export interface USChipApproval {
  approval: string
  recipient: string
  detail: string
  sourceTier: TierLevel
}

export interface UAEUSAIAgreement {
  attribute: string
  value: string
  sourceTier: TierLevel
}

export interface MajorDeal {
  company: string
  deal: string
  value: string
  jobsCreated: string
}

export interface AWSSovereignCloud {
  attribute: string
  value: string
  uaeRelevance: UAERelevanceLevel
}

export interface MGXSemiconductorFocus {
  focusArea: string
  description: string
}

// ============================================================================
// ROBOTICS TYPES
// ============================================================================

export interface RoboticsMarketSize {
  market: string
  value2024: string
  value2030?: string
  cagr?: string
  uaeRelevance: UAERelevanceLevel
}

export interface MarketSegmentation {
  segment: string
  share: string
  growth: string
  uaeRelevance: UAERelevanceLevel
}

export interface SectorProjection {
  sector: string
  projection: string
  timeline: string
  uaeRelevance: UAERelevanceLevel
}

export interface GrowthDriver {
  driver: string
  description: string
  uaeRelevance: UAERelevanceLevel
}

export interface RoboticsChallenge {
  challenge: string
  detail: string
  severity: UAERelevanceLevel
}

export interface MajorPlayer {
  company: string
  type: string
  uaeRelevance: UAERelevanceLevel
}

export interface CombatRobotics {
  attribute: string
  value: string
  sourceTier?: TierLevel
}

export interface MilremEquipment {
  equipment: string
  quantity: string
  capability: string
}

export interface EDGEGroupUAV {
  attribute: string
  value: string
  purpose?: string
  type?: string
}

export interface HospitalityRobotics {
  project: string
  detail: string
  timeline: string
}

export interface RobotPrediction {
  prediction: string
  value: string
  source: string
}

// ============================================================================
// DIGITAL TWIN TYPES
// ============================================================================

export interface DigitalTwinMarket {
  market: string
  value: string
  value2030?: string
  cagr?: string
  period?: string
  uaeRelevance: UAERelevanceLevel
}

export interface DigitalTwinStrategy {
  mandate: string
  authority: string
}

export interface DigitalTwinProject {
  project: string
  organization: string
  focus: string
  uaeRelevance: UAERelevanceLevel
}

export interface SmartCityRanking {
  city: string
  globalRank: number
  change: string
  previousRank: number
  uaeRelevance: UAERelevanceLevel
}

export interface AbuDhabiTransformation {
  attribute: string
  value: string
  alignment?: string
  uaeRelevance: UAERelevanceLevel
}

export interface DigitalTwinGrowthDriver {
  driver: string
  description: string
  uaeRelevance: UAERelevanceLevel
}

export interface DigitalTwinSegmentation {
  segment: string
  type: string
  description: string
}

export interface KeyTechnology {
  technology: string
  application: string
}

export interface GCCSmartCityMarket {
  metric: string
  value: string
  period?: string
}

export interface UAESmartCityInvestment {
  initiative: string
  investment: string
  period?: string
}

// ============================================================================
// SUMMARY KPIS
// ============================================================================

export interface SummaryKPI {
  kpi: string
  value: string
  date?: string
  trend: string
  uaeRelevance: UAERelevanceLevel
}

// ============================================================================
// ENTITY REGISTRY
// ============================================================================

export interface GovernmentBody {
  entity: string
  scope: string
  established: string
}

export interface Company {
  company: string
  sector: string
  valuation: string
  parent?: string
}

export interface RegulatoryInstrument {
  instrument: string
  year: number
  authority: string
}

// ============================================================================
// SOURCE CREDIBILITY
// ============================================================================

export interface SourceCredibility {
  source: string
  tier: TierLevel
  type: string
  reliability: string
  url?: string
}

// ============================================================================// COMPLETE AI TECHNOLOGY DATA
// ============================================================================

export const aiTechnologyData = {
  // ---------------------------------------------------------------------------
  // EXECUTION METADATA
  // ---------------------------------------------------------------------------
  executionMetadata: {
    researchDate: '2026-04-27',
    sourceFile: 'micro-queries/part-10/10-1-ai-technology.md',
    atomicQueries: 12,
    researchMethod: 'mmx web search + WebFetch page extraction',
    enrichmentDate: '2026-04-28',
    ssotStatus: 'Comprehensive Single Source of Truth' as const,
  },

  // ---------------------------------------------------------------------------
  // LEGEND
  // ---------------------------------------------------------------------------
  enrichmentLegend: [
    { symbol: '🔴 Critical', uaeRelevance: 'Direct UAE strategic interest', sourceTier: 'Tier 0: Official UAE/Gov' },
    { symbol: '🟠 High', uaeRelevance: 'Significant UAE impact', sourceTier: 'Tier 1: Authoritative (Intl Gov/Think Tank)' },
    { symbol: '🟡 Medium', uaeRelevance: 'Moderate UAE relevance', sourceTier: 'Tier 2: Industry/Research' },
    { symbol: '🟢 Low', uaeRelevance: 'Peripheral UAE interest', sourceTier: 'Tier 3: Media/Analysis' },
  ],

  // ---------------------------------------------------------------------------
  // QUERY 1: AI REGULATION
  // ---------------------------------------------------------------------------
  aiRegulation: {
    overview: 'The UAE has established a multi-layered AI governance framework combining data protection laws, ethical principles, sector-specific guidance, and emerging regulations. The approach balances innovation with ethics while ensuring security and individual rights.',
    keyLaws: [
      { name: 'Federal Decree-Law No. 45/2021', type: 'Personal Data Protection Law (PDPL)', year: 2021, authority: 'Federal', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'Federal Law No. 34/2021', type: 'Cybercrime Law', year: 2021, authority: 'Federal', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'UAE AI Ethics Principles & Guidelines', type: 'Ethical Framework', year: 2022, authority: 'UAE AI Office', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'DIFC Regulation 10', type: 'AI Governance (subnational)', year: 2023, authority: 'DIFC', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'UAE Charter for AI', type: '12 Principles', year: 2024, authority: 'Federal', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'DIFC Data Protection Law', type: 'Updated DP Requirements', year: 2025, authority: 'DIFC', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Law No. 9 of 2023', type: 'Autonomous Vehicles', year: 2023, authority: 'Dubai', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Federal Decree-Law No. 38/2021', type: 'Copyright (AI-generated works)', year: 2021, authority: 'Federal', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as RegulatoryLaw[],
    regulatoryBodies: [
      { name: 'Ministry of AI', type: 'Ministry', scope: 'National', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'UAE Council for Artificial Intelligence', type: 'Advisory', scope: 'National', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'UAE Data Office', type: 'Regulatory', scope: 'National', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Artificial Intelligence and Advanced Technology Council (AIATC)', type: 'Council', scope: 'Abu Dhabi', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'Dubai Digital Authority', type: 'Authority', scope: 'Dubai', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Abu Dhabi Department of Health', type: 'Sectoral', scope: 'Healthcare', uaeRelevance: 'medium' as UAERelevanceLevel },
      { name: 'Emirates Council for Digital Transactions', type: 'Advisory', scope: 'National', uaeRelevance: 'medium' as UAERelevanceLevel },
      { name: 'Dubai Centre for Artificial Intelligence', type: 'Center', scope: 'Dubai', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as RegulatoryBody[],
    keyStrategies: [
      { name: 'UAE Strategy for Artificial Intelligence 2031', target: 'National AI integration', investment: 'AED 1 billion', timeline: '2031', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'Dubai AI Seal', target: 'Certification program', investment: '—', timeline: 'Ongoing', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Dubai AI Ethics Principles', target: 'Framework', investment: '—', timeline: '2019+', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'National AI Strategy 2031', target: '8 strategic objectives', investment: '—', timeline: '2031', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as Strategy[],
    timeline2025_2026: [
      { date: 'Apr 2025', development: 'AI-powered regulatory intelligence ecosystem approved', impact: '70% faster law drafting', sourceTier: 0 as TierLevel },
      { date: 'Late 2025', development: 'AI use in public governance measures adopted', impact: 'Government decision-making', sourceTier: 0 as TierLevel },
      { date: 'Early 2026', development: 'Executive-decision AI measures implemented', impact: 'Executive processes', sourceTier: 0 as TierLevel },
      { date: 'Ongoing', development: 'Federal employee AI training mandatory', impact: 'All federal employees', sourceTier: 0 as TierLevel },
    ] as TimelineEvent[],
    penalties: [
      { violation: 'AI misuse (general)', penalty: 'Up to USD 27 million', lawSource: 'Federal' },
      { violation: 'Media Council AI violations', penalty: 'Dhs100,000 to Dhs1 million', lawSource: 'UAE Media Council' },
      { violation: 'Deepfake fraud', penalty: 'Prosecutable under cybercrime law', lawSource: 'Federal Law 34/2021' },
    ] as Penalty[],
    sentiment: [
      { source: 'IAPP', sentiment: 'Positive', keyFinding: 'UAE as leader in AI governance' },
      { source: 'Chambers', sentiment: 'Positive', keyFinding: 'Progressive regulatory framework' },
      { source: 'KPMG', sentiment: 'Positive', keyFinding: 'Comprehensive ecosystem approach' },
      { source: 'Nemko', sentiment: 'Cautiously Positive', keyFinding: 'Clear compliance pathways' },
      { source: 'Stanford HAI', sentiment: 'Neutral', keyFinding: 'Monitoring enforcement gaps' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
      keyDifferentiators: [
        'First national AI strategy (2017)',
        'First AI-powered regulatory ecosystem (2025)',
        '50% of government operations targeted for agentic AI (2026)',
        'Mandatory federal employee AI training',
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 2: G42
  // ---------------------------------------------------------------------------
  g42: {
    overview: {
      fullName: 'Group 42',
      headquarters: 'Abu Dhabi, UAE',
      founded: 2018,
      chairman: 'Sheikh Tahnoon bin Zayed Al Nahyan',
      microsoftInvestment: '$1.5 billion (April 2024)',
      ecosystemValuation: '$20+ billion',
      keyProducts: ['Jais LLM', 'Condor Galaxy', '42XFund'],
    } as G42Overview,
    microsoftPartnership: [
      { component: 'Investment Amount', value: '$1.5 billion', sourceTier: 0 as TierLevel },
      { component: 'Developer Fund', value: '$1 billion', sourceTier: 1 as TierLevel },
      { component: 'Board Seat', value: 'Brad Smith (Microsoft Vice Chair)', sourceTier: 0 as TierLevel },
      { component: 'Intergovernmental Agreement', value: 'IGAA (UAE-US)', sourceTier: 0 as TierLevel },
      { component: 'Azure Partnership', value: 'AI applications deployment', sourceTier: 1 as TierLevel },
    ] as MicrosoftPartnership[],
    subsidiaries: [
      { name: 'M42', sector: 'Healthcare', valuation: '—', ipoStatus: 'Private', uaeRelevance: 'critical' as UAERelevanceLevel },
      { name: 'Bayanat', sector: 'Geospatial', valuation: '—', ipoStatus: 'Private', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Presight AI', sector: 'Analytics', valuation: '—', ipoStatus: 'Public ($495M IPO 2023)', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Space42', sector: 'Satellite', valuation: '~$4B', ipoStatus: 'Public (2024)', uaeRelevance: 'high' as UAERelevanceLevel },
      { name: 'Khazna', sector: 'Data Centers', valuation: '—', ipoStatus: 'Private', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as G42Subsidiary[],
    geographicExpansion: [
      { location: 'Kenya', investment: '$1 billion (green-energy data center)', timeline: 'May 2024', status: 'Completed', uaeRelevance: 'medium' as UAERelevanceLevel },
      { location: 'Vietnam', investment: '~$2 billion (Ho Chi Minh City)', timeline: 'Oct 2025', status: 'Announced', uaeRelevance: 'medium' as UAERelevanceLevel },
      { location: 'USA', investment: '—', timeline: 'Ongoing', status: 'In progress', uaeRelevance: 'medium' as UAERelevanceLevel },
      { location: 'UAE (Stargate)', investment: '$7.9 billion', timeline: '2026-2029', status: 'Committed', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as G42Expansion[],
    keyProducts: [
      { product: 'Jais', type: 'Arabic LLM', capability: '13B parameters', sourceTier: 1 as TierLevel },
      { product: 'Condor Galaxy', type: 'Supercomputing', capability: 'AI workloads', sourceTier: 1 as TierLevel },
      { product: '42XFund', type: 'Investment Fund', capability: '$10 billion', sourceTier: 1 as TierLevel },
    ],
    sentiment: [
      { source: 'Microsoft News', sentiment: 'Extremely Positive', keyFinding: 'Strategic partnership validation' },
      { source: 'Business Model Canvas', sentiment: 'Positive', keyFinding: 'Strong growth trajectory' },
      { source: 'Data Center Dynamics', sentiment: 'Positive', keyFinding: 'AI chip shipments on track' },
      { source: 'PitchBook', sentiment: 'Positive', keyFinding: 'Strong investor interest' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
      strategicImportance: [
        'Microsoft partnership includes IGAA (Intergovernmental Assurance Agreement)',
        'G42 Expansion Fund: $10 billion global technology growth fund',
        'Stargate UAE: $7.9 billion committed hyperscaler investment (2026-2029)',
        'Jais Arabic LLM: First Arabic large language model',
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 3: AI JOBS
  // ---------------------------------------------------------------------------
  aiJobs: {
    laborMarketKPIs: [
      { metric: 'Job Automatability Index (Average)', value: '28.53', sourceYear: '2025', uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'Dubai Automatability Index', value: '29.57', sourceYear: '2025', uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'Abu Dhabi Automatability Index', value: '27.29', sourceYear: '2025', uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'Jobs Requiring On-Site Work', value: '89.7%', sourceYear: '2025', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Job Posts Analyzed', value: '23,739', sourceYear: '2025', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Companies Covered', value: '5,197', sourceYear: '2025', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Sectors Covered', value: '36', sourceYear: '2025', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as LaborMarketKPI[],
    automationExposure: [
      { roleCategory: 'General/Keyboard Clerks', automatability: '73.00%', riskLevel: 'critical' as UAERelevanceLevel, uaeRelevance: 'critical' as UAERelevanceLevel },
      { roleCategory: 'Recording Clerks', automatability: '55.41%', riskLevel: 'critical' as UAERelevanceLevel, uaeRelevance: 'critical' as UAERelevanceLevel },
      { roleCategory: 'Clerical Support Workers', automatability: '53.84%', riskLevel: 'critical' as UAERelevanceLevel, uaeRelevance: 'critical' as UAERelevanceLevel },
      { roleCategory: 'Business/Admin Associate Professionals', automatability: '47.95%', riskLevel: 'high' as UAERelevanceLevel, uaeRelevance: 'high' as UAERelevanceLevel },
      { roleCategory: 'Customer Service Clerks', automatability: '45.51%', riskLevel: 'high' as UAERelevanceLevel, uaeRelevance: 'high' as UAERelevanceLevel },
      { roleCategory: 'Business/Admin Professionals', automatability: '36.04%', riskLevel: 'medium' as UAERelevanceLevel, uaeRelevance: 'medium' as UAERelevanceLevel },
      { roleCategory: 'Science/Engineering Professionals', automatability: '33.03%', riskLevel: 'medium' as UAERelevanceLevel, uaeRelevance: 'medium' as UAERelevanceLevel },
      { roleCategory: 'Hospitality/Retail Managers', automatability: '22.76%', riskLevel: 'medium' as UAERelevanceLevel, uaeRelevance: 'medium' as UAERelevanceLevel },
      { roleCategory: 'Teaching Professionals', automatability: '10.87%', riskLevel: 'low' as UAERelevanceLevel, uaeRelevance: 'low' as UAERelevanceLevel },
      { roleCategory: 'Personal Care Workers', automatability: '9.42%', riskLevel: 'low' as UAERelevanceLevel, uaeRelevance: 'low' as UAERelevanceLevel },
      { roleCategory: 'Manual Labourers', automatability: '7.11%', riskLevel: 'low' as UAERelevanceLevel, uaeRelevance: 'low' as UAERelevanceLevel },
    ] as AutomationExposure[],
    sectoralAutomation: [
      { sector: 'Investment & Venture Capital', exposureIndex: '40.83', riskLevel: 'critical' as UAERelevanceLevel, uaeRelevance: 'high' as UAERelevanceLevel },
      { sector: 'Wellness & Fitness', exposureIndex: '10.81', riskLevel: 'low' as UAERelevanceLevel, uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as SectorAutomation[],
    transformationMechanisms: [
      { mechanism: 'Substitution', description: 'AI automates core tasks', affectedRoles: 'Clerical roles' },
      { mechanism: 'Augmentation', description: 'AI automates peripheral tasks', affectedRoles: 'Hospitality managers' },
      { mechanism: 'Redefinition', description: 'AI transforms core professional tasks', affectedRoles: 'Business/Engineering Professionals' },
    ] as TransformationMechanism[],
    jobMarketProjections: [
      { metric: 'Jobs to be Added', value: '1+ million', timeline: 'By 2030', sourceTier: 2 as TierLevel },
      { metric: 'Workforce Growth (2025)', value: '12.4%', timeline: '2025', sourceTier: 2 as TierLevel },
      { metric: 'Companies Planning Hiring Increase (Q3 2025)', value: '56%', timeline: 'Q3 2025', sourceTier: 2 as TierLevel },
      { metric: 'Companies Anticipating Workforce Reduction', value: '8%', timeline: 'Ongoing', sourceTier: 2 as TierLevel },
    ] as JobMarketProjection[],
    aiHiring: [
      { metric: 'AI Hiring Growth (2024-25)', value: '48%', change: '+16pp', uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'AI Hiring Growth (2023-24)', value: '32%', change: '—', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Data Scientist Role Growth', value: '43%', change: 'YoY', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'AI Product Manager Growth', value: '37%', change: 'YoY', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Job Posts Requiring AI Skills', value: '2.87%', change: 'Current', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Employees Using AI Regularly', value: '80%+', change: 'Current', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as AIHiringMetric[],
    skillsEvolution: [
      { metric: 'Skills Change Rate (AI-exposed jobs)', value: '66% faster', source: 'PwC 2025', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Workers Using AI Daily (projected 2028)', value: '90%', source: 'Estimate', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as SkillsEvolution[],
    publicSentiment: [
      { finding: 'Believe AI creates more jobs than it eliminates', value: '60%+', source: 'Survey', sentiment: 'Positive' },
      { finding: 'Report role already replaced by AI', value: '~7%', source: 'Survey', sentiment: 'Negative' },
      { finding: 'Most vulnerable: Content writers', value: 'Media/Advertising/Marketing', source: 'Survey', sentiment: 'Negative' },
      { finding: 'Major disruption expected', value: '5-10 years', source: 'Expert', sentiment: 'Cautious' },
    ] as PublicSentiment[],
    newRoles: [
      { roleCategory: 'AI Architects', demandLevel: 'High', uaeRelevance: 'high' as UAERelevanceLevel },
      { roleCategory: 'Prompt Engineers', demandLevel: 'High', uaeRelevance: 'high' as UAERelevanceLevel },
      { roleCategory: 'AI Ethics/Security Experts', demandLevel: 'Medium', uaeRelevance: 'medium' as UAERelevanceLevel },
      { roleCategory: 'Data Officers', demandLevel: 'Medium', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as NewRole[],
    reskillingInitiatives: [
      { initiative: 'Al-Futtaim Upskilling', scale: '1,000+ staff', source: 'Company', uaeRelevance: 'medium' as UAERelevanceLevel },
      { initiative: 'PwC AI Growth Rate Projection (Middle East)', scale: '20-34% annual', source: 'PwC', uaeRelevance: 'high' as UAERelevanceLevel },
      { initiative: 'AI Education (All Grades)', scale: 'Mandatory', source: '2025-26', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as ReskillingInitiative[],
    sentiment: [
      { source: 'ORFME Research', sentiment: 'Neutral/Analytical', keyFinding: '73% clerical roles at risk' },
      { source: 'The National', sentiment: 'Mixed', keyFinding: 'Fear vs. opportunity' },
      { source: 'Khaleej Times', sentiment: 'Positive', keyFinding: 'UAE leads global hiring surge' },
      { source: 'Gulf Business', sentiment: 'Positive', keyFinding: '1M jobs by 2030' },
      { source: 'PwC', sentiment: 'Cautious', keyFinding: 'Skills changing 66% faster' },
      { source: 'WEF', sentiment: 'Positive', keyFinding: 'Net job creation expected' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
      keyInsight: 'The UAE\'s 89.7% on-site work requirement provides some protection against full automation, but skill transformation is urgent.',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 4: AUTONOMOUS VEHICLES
  // ---------------------------------------------------------------------------
  autonomousVehicles: {
    dubaiDroneTargets: [
      { target: 'City Coverage', value: '30%', timeline: '2026', status: 'Targeted', uaeRelevance: 'critical' as UAERelevanceLevel },
      { target: 'City Coverage', value: '70%', timeline: '5 years', status: 'Targeted', uaeRelevance: 'critical' as UAERelevanceLevel },
      { target: 'First Phase', value: 'Dubai Silicon Oasis', timeline: 'Launched', status: 'Completed', uaeRelevance: 'high' as UAERelevanceLevel },
      { target: 'Phase Two', value: 'Pre-Dubai Airshow 2025', timeline: '2025', status: 'Completed', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as DroneTarget[],
    keetaDrone: {
      generalManager: 'Junwei Yang',
      deliverySpeed: '15-30 minutes door-to-door',
      coverageAreas: 'Residential, schools, public spaces',
      differential: 'Bypasses water bodies/creeks',
      dcaaLicense: 'First drone delivery license',
    } as KeetaDroneDetails,
    marketSize: [
      { market: 'UAE Autonomous Last Mile Delivery', value2024: '$5.8M', value2030: '$26.2M', cagr: '29.2%', uaeRelevance: 'high' as UAERelevanceLevel },
      { market: 'Ground Delivery Vehicles', value2024: '113.8% revenue share', value2030: '—', cagr: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
      { market: 'Aerial Delivery Drones', value2024: 'Fastest-growing segment', value2030: '—', cagr: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as MarketSize[],
    evtol: [
      { attribute: 'Air Taxi Launch', value: 'Dubai', timeline: '2026', uaeRelevance: 'high' as UAERelevanceLevel },
      { attribute: 'Operators', value: 'Joby Aviation, Archer Aviation', timeline: 'Testing', uaeRelevance: 'medium' as UAERelevanceLevel },
      { attribute: 'Vertiport Capacity', value: '170,000 passengers/year', timeline: '2026', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as EVTOLInfo[],
    dubaiSmartCityTargets: [
      { target: 'Last-mile deliveries by autonomous systems', value: '60%', timeline: '2030', uaeRelevance: 'critical' as UAERelevanceLevel },
      { target: 'Transportation autonomous', value: '25%', timeline: '2030', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as SmartCityTarget[],
    partnerships: [
      { partner: 'Pony.ai', type: 'Self-driving vehicle trials', timeline: 'Pre-2026', status: 'MoU signed' },
      { partner: 'Apollo Go (China)', type: 'AV testing permit', timeline: '2025', status: 'First permit' },
      { partner: 'Lodd Autonomous', type: 'Drone operations', timeline: 'H2 2026', status: 'Scheduled' },
    ] as AVPartnership[],
    costEconomics: [
      { costType: 'Initial Investment', value: '700,000 – 2.5 million AED', savings: '—' },
      { costType: 'Operational Savings', value: '40-60% lower', savings: 'vs traditional delivery' },
    ] as CostEconomics[],
    sentiment: [
      { source: 'Khaleej Times', sentiment: 'Positive', keyFinding: 'Ambitious coverage targets' },
      { source: 'Gulf News', sentiment: 'Positive', keyFinding: 'Traffic easing potential' },
      { source: 'AV America', sentiment: 'Positive', keyFinding: '2026 rollout on track' },
      { source: 'Grand View Research', sentiment: 'Neutral', keyFinding: 'Market data' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🟠 HIGH',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 5: QUANTUM COMPUTING
  // ---------------------------------------------------------------------------
  quantumComputing: {
    strategy: [
      { attribute: 'Global Ranking', value: 'Top 5 (possibly Top 3)', globalRank: 'Top 5', uaeRelevance: 'critical' as UAERelevanceLevel },
      { attribute: 'Abu Dhabi Quantum Research Center', value: 'World-class status', uaeRelevance: 'critical' as UAERelevanceLevel },
      { attribute: 'Partnership', value: 'IonQ', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as QuantumStrategy[],
    cryptographyRegulation: {
      regulation: 'Cryptography Executive Regulation',
      year: 2024,
      requirement: 'Mandatory quantum-resistant algorithms for govt/critical sectors',
      uaeRelevance: 'critical' as UAERelevanceLevel,
    } as CryptographyRegulation,
    investment: [
      { metric: 'UAE + Qatar Combined Investment', value: '$1.6 billion', countries: '2', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as QuantumInvestment[],
    advantages: [
      { advantage: 'Financial Resources', description: 'Attract international talent', uaeRelevance: 'high' as UAERelevanceLevel },
      { advantage: 'Competitive Salaries', description: 'Recruiting from Europe/America', uaeRelevance: 'medium' as UAERelevanceLevel },
      { advantage: 'Research Summits', description: 'Harvard, Stanford academics', uaeRelevance: 'medium' as UAERelevanceLevel },
      { advantage: 'Energy Leadership', description: 'Extreme cooling infrastructure', uaeRelevance: 'high' as UAERelevanceLevel },
      { advantage: 'East-West Bridge', description: 'International collaboration', uaeRelevance: 'medium' as UAERelevanceLevel },
      { advantage: 'Sovereign Fund Backing', description: 'Abu Dhabi/Dubai funds', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as QuantumAdvantage[],
    aiQuantumIntegration: {
      quote: '"AI is the brain, quantum computing is the specialized engine providing raw power"',
      source: 'Samena Council',
    },
    expectedFirstAdopters: [
      { sector: 'Government', priority: 1 },
      { sector: 'Finance', priority: 2 },
      { sector: 'Telecom', priority: 3 },
      { sector: 'Energy', priority: 4 },
      { sector: 'Advanced Manufacturing', priority: 5 },
    ] as ExpectedFirstAdopter[],
    applications: [
      { application: 'Logistics Optimization', description: 'Route/network optimization' },
      { application: 'Derivatives Modeling', description: 'Financial modeling' },
      { application: 'AI Training Acceleration', description: 'Hybrid quantum-classical systems' },
    ] as QuantumApplication[],
    globalContext: [
      { metric: 'Global Economic Addition (by 2033)', value: '$2 trillion', source: 'Industry', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Microsoft Majorana 1 (Feb 2025)', value: '1 million qubits scalable', source: 'Microsoft', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Amazon Ocelot', value: '90% error correction', source: 'Amazon', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Google Willow', value: '2024 chip', source: 'Google', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as GlobalDeepfakeStat[],
    normaUAEQuantum: {
      company: 'Norma',
      ceo: 'Hyunchul Jung',
      uaePartner: 'Al Fardan Ventures',
      partnerCeo: 'Mohammed Ibrahim Al Fardan',
      focus: 'AI, data centers, cloud, cybersecurity',
      agreementType: 'MOU',
    } as NormaUAEQuantum,
    sentiment: [
      { source: 'UAE Official Portal', sentiment: 'Positive', keyFinding: 'Strategic positioning' },
      { source: 'Computer Weekly', sentiment: 'Positive', keyFinding: 'Middle East winning race' },
      { source: 'Lunate', sentiment: 'Positive', keyFinding: 'Investment opportunity' },
      { source: 'Samena Council', sentiment: 'Positive', keyFinding: 'AI-quantum integration' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🟠 HIGH',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 6: STARLINK UAE
  // ---------------------------------------------------------------------------
  starlinkUAE: {
    launch: {
      officialDate: 'March 18, 2026',
      licenseNumber: 'License No. 2 of 2024',
      validity: 'Through 2034 (10-year)',
      licensee: 'Starlink Satellite Communications Services LLC',
      tdraGrant: 'Telecommunications and Digital Government Regulatory Authority',
      countryNumber: '150th+ in network',
    } as StarlinkLaunch,
    plans: [
      { plan: 'Residential Lite', monthly: 'Dh230', downloadSpeed: '30-100 Mbps', uploadSpeed: '5-15 Mbps', uaeRelevance: 'medium' as UAERelevanceLevel },
      { plan: 'Standard Residential', monthly: 'Dh300', downloadSpeed: '50-200 Mbps', uploadSpeed: '10-25 Mbps', uaeRelevance: 'medium' as UAERelevanceLevel },
      { plan: 'Business', monthly: 'From ~Dh248', downloadSpeed: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
      { plan: 'Roam 100GB', monthly: 'Dh185-190', downloadSpeed: '50-150 Mbps', uploadSpeed: '10-20 Mbps', uaeRelevance: 'medium' as UAERelevanceLevel },
      { plan: 'Roam Unlimited', monthly: 'Dh600', downloadSpeed: '50-200 Mbps', uploadSpeed: '10-25 Mbps', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as StarlinkPlan[],
    hardware: [
      { kit: 'Standard Kit', price: 'Dh1,465', capability: 'Up to 400 Mbps, Wi-Fi 6', uaeRelevance: 'medium' as UAERelevanceLevel },
      { kit: 'Mini Kit', price: 'Dh1,099', capability: 'Up to 190 Mbps, portable', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as StarlinkHardware[],
    technicalSpecs: [
      { metric: 'Download Speed', value: '50-400 Mbps', sourceTier: 1 as TierLevel },
      { metric: 'Latency', value: '20-40ms', sourceTier: 1 as TierLevel },
      { metric: 'Typical Residential Speed', value: '135-305 Mbps', sourceTier: 2 as TierLevel },
      { metric: 'Upload Speed', value: '20-40 Mbps', sourceTier: 1 as TierLevel },
      { metric: 'Target (2026)', value: 'Gigabit speeds (no hardware change)', sourceTier: 2 as TierLevel },
    ] as StarlinkTechnical[],
    restrictions: [
      { restriction: 'In-motion on land', detail: 'Restricted', uaeRelevance: 'medium' as UAERelevanceLevel },
      { restriction: 'Maritime use', detail: 'Permitted', uaeRelevance: 'medium' as UAERelevanceLevel },
      { restriction: 'Content filtering', detail: 'Same as du/Etisalat', uaeRelevance: 'medium' as UAERelevanceLevel },
      { restriction: 'VoIP', detail: 'Only licensed apps (Zoom, Teams, Botim)', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as StarlinkRestriction[],
    regionalCoverage: [
      { country: 'UAE', status: 'Live (March 2026)', uaeRelevance: 'critical' as UAERelevanceLevel },
      { country: 'Kuwait', status: 'Live', uaeRelevance: 'medium' as UAERelevanceLevel },
      { country: 'Oman', status: 'Active', uaeRelevance: 'medium' as UAERelevanceLevel },
      { country: 'Qatar', status: 'Active', uaeRelevance: 'medium' as UAERelevanceLevel },
      { country: 'Israel', status: 'Active', uaeRelevance: 'low' as UAERelevanceLevel },
      { country: 'Yemen', status: 'Active', uaeRelevance: 'low' as UAERelevanceLevel },
    ] as RegionalStarlink[],
    globalScale: [
      { metric: 'Satellites Deployed', value: '10,000+' },
      { metric: 'Global Users', value: '10 million+' },
      { metric: 'Total Capacity', value: '~450Tbps' },
    ],
    targetUsers: [
      { sector: 'Offshore energy sites', useCase: 'Connectivity' },
      { sector: 'Ships at sea', useCase: 'Maritime connectivity' },
      { sector: 'Hospitals', useCase: 'Backup/primary connectivity' },
      { sector: 'Research stations', useCase: 'Data transmission' },
      { sector: 'Emergency response', useCase: 'Rapid deployment' },
      { sector: 'Remote work sites', useCase: 'Primary connectivity' },
      { sector: 'Healthcare/Education/Government', useCase: 'Priority sectors' },
    ] as StarlinkTargetUser[],
    educationPartnership: {
      partnership: 'UAE + Starlink',
      detail: '100 remote schools targeting',
      timeline: 'February 2026',
    } as StarlinkEducationPartnership,
    sentiment: [
      { source: 'TechBayt', sentiment: 'Positive', keyFinding: 'UAE launch 2026' },
      { source: 'Basenor', sentiment: 'Positive', keyFinding: 'Pricing analysis' },
      { source: 'Computer Weekly', sentiment: 'Positive', keyFinding: 'Regional expansion' },
      { source: 'Gulf News', sentiment: 'Positive', keyFinding: 'Consumer pricing' },
      { source: 'Allianz EGCC', sentiment: 'Positive', keyFinding: 'Complete pricing guide' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🟡 MEDIUM',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 7: DEEPFAKE
  // ---------------------------------------------------------------------------
  deepfake: {
    regulatoryStatus: [
      { attribute: 'Specific Deepfake Law', value: 'None', uaeRelevance: 'medium' as UAERelevanceLevel },
      { attribute: 'Applicable Law', value: 'Federal Law No. 34/2021 (Cybercrime)', source: '2021', uaeRelevance: 'high' as UAERelevanceLevel },
      { attribute: 'Deepfake Guide', value: 'Published 2021', source: 'UAE', uaeRelevance: 'high' as UAERelevanceLevel },
      { attribute: 'Approach', value: 'Awareness over broad bans', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as DeepfakeRegulationStatus[],
    cyberSecurityCouncilWarning: {
      warningDate: 'March 2026',
      content: 'Rise of highly realistic AI videos',
      action: 'Verify content before sharing',
      source: 'Official trusted sources only',
    } as DeepfakeWarning,
    globalStats: [
      { metric: 'Deepfake-driven fraud losses', value: '$200+ million', year: 'Global', source: 'Stanford HAI', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Deepfake detection market', value: '$0.6 billion', year: '2025', source: 'Industry', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Deepfake detection market (projected)', value: '$8.4 billion', year: '2034', source: 'Industry', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'Detection Market CAGR', value: '37.2%', year: '2025-2034', source: 'Industry', uaeRelevance: 'medium' as UAERelevanceLevel },
      { metric: 'AI detection tools market growth', value: '28-42%', year: 'Annual', source: 'Industry', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as GlobalDeepfakeStat[],
    incidents: [
      { metric: 'Incidents surge', value: '257%', period: '2024', source: 'Ondato' },
      { metric: 'Q1 2025 vs entire 2024', value: '+19%', period: 'Q1 2025', source: 'Ondato' },
      { metric: 'Online videos non-consensual porn', value: '96%', period: '—', source: 'Ondato' },
      { metric: 'US generative AI fraud (projected)', value: '$40 billion', period: '2027', source: 'Ondato' },
      { metric: 'Hong Kong company loss', value: '$25 million', period: '2024', source: 'Ondato' },
      { metric: 'APAC deepfake fraud increase', value: '1,530%', period: '2022-2023', source: 'Ondato' },
      { metric: 'APAC crypto targeting', value: '88%', period: '—', source: 'Ondato' },
      { metric: 'Content volume increase', value: '900%', period: 'Annual (projected)', source: 'Ondato' },
    ] as DeepfakeIncident[],
    globalLawsComparison: [
      { jurisdiction: 'Texas, USA', lawMechanism: 'State law (2019)', keyProvision: 'Prohibit deepfake election videos', penalty: '—', uaeRelevance: 'low' as UAERelevanceLevel },
      { jurisdiction: 'California, Texas, Virginia, New York', lawMechanism: 'State laws', keyProvision: 'Election/non-consensual porn', penalty: 'Civil suits', uaeRelevance: 'low' as UAERelevanceLevel },
      { jurisdiction: 'Tennessee', lawMechanism: 'ELVIS Act (2024)', keyProvision: 'Name, photo, voice, likeness rights', penalty: '—', uaeRelevance: 'low' as UAERelevanceLevel },
      { jurisdiction: 'EU', lawMechanism: 'AI Act (mid-2025)', keyProvision: 'Transparency (Article 50)', penalty: 'Up to 6% global turnover', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'EU', lawMechanism: 'DSA', keyProvision: 'Platform risk identification', penalty: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'UK', lawMechanism: 'Online Safety Act', keyProvision: 'Non-consensual deepfake porn', penalty: 'Up to 2 years imprisonment', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'UK', lawMechanism: 'ICO', keyProvision: 'Privacy violations', penalty: '£18M or 10% revenue', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'China', lawMechanism: 'Deep synthesis regulations', keyProvision: 'Watermarks, identity verification', penalty: 'Fines, detention', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'Singapore', lawMechanism: 'POFMA', keyProvision: 'False deepfake content', penalty: 'Up to $1M', uaeRelevance: 'high' as UAERelevanceLevel },
      { jurisdiction: 'South Korea', lawMechanism: 'Criminal law', keyProvision: 'Non-consensual deepfake porn', penalty: 'Up to 7 years', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'Australia', lawMechanism: 'Federal crime', keyProvision: 'Fake intimate images', penalty: 'Up to 6 years', uaeRelevance: 'medium' as UAERelevanceLevel },
      { jurisdiction: 'UAE', lawMechanism: 'Cybercrime Law 34/2021', keyProvision: 'Prosecute malicious deepfakes', penalty: 'Per cybercrime law', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as GlobalDeepfakeLaw[],
    detectionTechnologies: [
      { technology: 'Digital Watermarking', description: 'Invisible markers in AI content', status: 'Emerging' },
      { technology: 'Tracing Fingerprints', description: 'Trace back to source AI models', status: 'Research' },
      { technology: 'Real-time Verification', description: 'Built into consumer devices', status: 'Future' },
    ] as DetectionTechnology[],
    sentiment: [
      { source: 'Ondato', sentiment: 'Neutral/Analytical', keyFinding: 'Global regulatory overview' },
      { source: 'UAE Cyber Security Council', sentiment: 'Cautious/Warning', keyFinding: 'Rising threat' },
      { source: 'Stanford HAI', sentiment: 'Neutral', keyFinding: 'Statistical evidence' },
      { source: 'IPU', sentiment: 'Neutral', keyFinding: 'Parliamentary actions' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🟡 MEDIUM',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 8: AI GOVERNMENT SERVICES
  // ---------------------------------------------------------------------------
  aiGovernment: {
    agenticAIDeployment: [
      { attribute: 'Target', value: '50% of federal sectors/services/operations', sourceTier: 0 as TierLevel },
      { attribute: 'Timeline', value: 'Within 2 years', sourceTier: 0 as TierLevel },
      { attribute: 'Announcement', value: 'April 24, 2026', sourceTier: 0 as TierLevel },
      { attribute: 'Directive Issuer', value: 'President Mohamed bin Zayed Al Nahyan', sourceTier: 0 as TierLevel },
      { attribute: 'Implementation Lead', value: 'Mohammed bin Rashid Al Maktoum', sourceTier: 0 as TierLevel },
    ] as AgenticAIDeployment[],
    definition: {
      term: 'Agentic AI',
      definition: '"Autonomous, goal-directed artificial intelligence systems capable of multi-step reasoning, dynamic decision execution, and continuous policy optimization without direct human prompting"',
    } as AgenticAIDefinition,
    technicalArchitecture: [
      { component: 'Hybrid Sovereign AI Stack', description: 'Distributed agent networks across ministries', uaeRelevance: 'critical' as UAERelevanceLevel },
      { component: 'Federated AI Governance', description: 'Secure cross-agency intelligence sharing', uaeRelevance: 'critical' as UAERelevanceLevel },
      { component: 'Large-scale Foundation Models', description: 'Core AI capability', uaeRelevance: 'high' as UAERelevanceLevel },
      { component: 'API-driven Government Service Meshes', description: 'Inter-service communication', uaeRelevance: 'high' as UAERelevanceLevel },
      { component: 'Predictive Policy Engines', description: 'Real-time simulation', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as TechnicalArchitecture[],
    operationalScope: [
      { application: 'Automated Licensing', description: 'Permit/license processing' },
      { application: 'Public Service Delivery', description: 'Citizen-facing services' },
      { application: 'Infrastructure Monitoring', description: 'Digital twins' },
      { application: 'Resource Allocation', description: 'Predictive modeling' },
      { application: 'Policy Simulation', description: 'Multi-agent reinforcement learning' },
    ] as OperationalScope[],
    aiRegulatoryEcosystem: {
      type: 'World-first AI-powered regulatory ecosystem',
      function: 'Connect legislation to judicial rulings in real time',
      efficiencyGain: 'Up to 70% faster law drafting',
      uaeRelevance: 'critical' as UAERelevanceLevel,
    } as AIRegulatoryEcosystem,
    challenges: [
      { challenge: 'Algorithmic Accountability', description: 'Auditability of AI decisions', severity: 'high' as UAERelevanceLevel },
      { challenge: 'Cyber-physical Security', description: 'State AI systems protection', severity: 'high' as UAERelevanceLevel },
      { challenge: 'Ethical Alignment', description: 'Autonomous decision systems', severity: 'high' as UAERelevanceLevel },
      { challenge: 'Legacy Fragmentation', description: 'System integration', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Uneven Data Readiness', description: 'Data quality across agencies', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Sovereign AI Compute', description: 'Sensitive workload constraints', severity: 'medium' as UAERelevanceLevel },
    ] as AIChallenge[],
    algorithmicBias: {
      frameworks: [
        { legalFramework: 'Article 18, Federal Decree-Law 45/2021', provision: 'Object to automated processing decisions', bindingForce: 'Limited' },
        { legalFramework: 'Anti-Discrimination Law (2015)', provision: 'Criminalizes discrimination (race, religion, caste, ethnicity)', bindingForce: 'Binding' },
        { legalFramework: 'Labour Law (2021)', provision: 'Employment discrimination prohibition', bindingForce: 'Binding' },
        { legalFramework: 'UAE Charter for AI (2024)', provision: 'Inclusive, transparent, non-discriminatory AI', bindingForce: 'Non-binding' },
        { legalFramework: 'Smart Dubai Ethical AI Toolkit', provision: 'Fairness, explainability, accountability', bindingForce: 'Non-binding' },
      ] as AlgorithmicBiasFramework[],
      assessment: [
        { finding: 'Judicial cases on algorithmic bias', value: 'None reported', source: 'Record of Law' },
        { finding: 'Approach', value: 'Policy-led, not adjudicative', source: 'Analysis' },
        { finding: 'Required Assessments', value: 'For public-facing systems', source: 'Policy' },
      ] as BiasAssessment[],
    },
    sentiment: [
      { source: 'Computer Weekly', sentiment: 'Extremely Positive', keyFinding: 'Revolutionary deployment' },
      { source: 'Chambers', sentiment: 'Positive', keyFinding: 'Comprehensive framework' },
      { source: 'IAPP', sentiment: 'Positive', keyFinding: 'Global leader' },
      { source: 'Record of Law', sentiment: 'Neutral', keyFinding: 'Comparative analysis' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 9: BRAIN DRAIN / TALENT
  // ---------------------------------------------------------------------------
  talent: {
    imdRanking: [
      { metric: 'Overall Ranking', value: '9th', globalRank: 9, change: '+8 from 17th', uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'Readiness Factor', value: 'No. 1', globalRank: 1, uaeRelevance: 'critical' as UAERelevanceLevel },
      { metric: 'Appeal Factor', value: '12th', globalRank: 12, uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Quality of Life', value: '8th', globalRank: 8, uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Health Infrastructure', value: '3rd', globalRank: 3, uaeRelevance: 'high' as UAERelevanceLevel },
    ] as IMDTalentRanking[],
    historicalRanking: [
      { period: '2016-2019', ranking: 'Mid-20s to 30s', uaeRelevance: 'medium' as UAERelevanceLevel },
      { period: '2024', ranking: '17th', uaeRelevance: 'high' as UAERelevanceLevel },
      { period: '2025', ranking: '9th', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as HistoricalIMDRanking[],
    readinessComponents: [
      { component: 'Labour Force Growth', value: '9.35%', globalRank: '1st (of 69)', uaeRelevance: 'critical' as UAERelevanceLevel },
      { component: 'Foreign Student Mobility', value: '22.2 per 1,000 residents', globalRank: '1st', uaeRelevance: 'critical' as UAERelevanceLevel },
      { component: 'Pupil-Teacher Ratio (Secondary)', value: '8.6', globalRank: '3rd', uaeRelevance: 'high' as UAERelevanceLevel },
      { component: 'Executive Confidence', value: '1st (international exposure/availability)', globalRank: '1st', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as ReadinessComponent[],
    appealFactors: [
      { component: 'Income Tax', value: '0%', uaeRelevance: 'critical' as UAERelevanceLevel },
      { component: 'Multicultural Environment', value: 'High foreign resident share', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as AppealFactor[],
    brainDrainReversal: [
      { phase: 'Local Talent', beforeStargate: 'Often sought opportunities abroad', afterStargate: 'Ample domestic opportunities' },
      { phase: 'International Experts', beforeStargate: 'Limited attraction', afterStargate: 'Prefer UAE as base' },
      { phase: 'Graduates', beforeStargate: 'Study abroad and stay', afterStargate: 'Stay for scholarships/research' },
    ] as BrainDrainPhase[],
    globalMobility: [
      { finding: 'Global mobility trend', value: 'Increasing (first time since 2020)', uaeRelevance: 'high' as UAERelevanceLevel },
      { finding: 'Top destination', value: 'US (still)', uaeRelevance: 'low' as UAERelevanceLevel },
      { finding: 'Rising destination', value: 'UAE (2nd place)', uaeRelevance: 'critical' as UAERelevanceLevel },
      { finding: 'Saudi Arabia', value: 'Also gaining ground', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as GlobalTalentMobility[],
    aiTalentPosition: [
      { metric: 'AI Talent Ranking', value: '15th', globalRank: 15, uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'Private AI Investment (2013-2025)', value: '$4 billion', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'AI Adoption Rate', value: '54%+', uaeRelevance: 'high' as UAERelevanceLevel },
      { metric: 'First National AI Strategy', value: '2017 (world\'s first)', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as AITalentPosition[],
    stargateImpact: [
      { attribute: 'Investment Commitment', value: '$1.4 trillion', uaeRelevance: 'critical' as UAERelevanceLevel },
      { attribute: 'AI Campus Capacity', value: '5GW data center', uaeRelevance: 'critical' as UAERelevanceLevel },
      { attribute: 'Location', value: 'Abu Dhabi', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as StargateImpact[],
    sentiment: [
      { source: 'IMD Report', sentiment: 'Extremely Positive', keyFinding: 'Top 10 achievement' },
      { source: 'LinkedIn (Stargate)', sentiment: 'Positive', keyFinding: 'Tech powerhouse emerging' },
      { source: 'BCG', sentiment: 'Positive', keyFinding: 'Global mobility reversing' },
      { source: 'The National', sentiment: 'Positive', keyFinding: 'AI adoption leadership' },
      { source: 'ManpowerGroup', sentiment: 'Positive', keyFinding: 'Top talent destination' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 10: SEMICONDUCTORS
  // ---------------------------------------------------------------------------
  semiconductors: {
    tsmcUAE: [
      { attribute: 'Status', value: 'Evaluating', sourceTier: 1 as TierLevel },
      { attribute: 'Project Type', value: 'Gigafab (6 factories)', sourceTier: 1 as TierLevel },
      { attribute: 'Facility Scale', value: 'Similar to Arizona project', sourceTier: 1 as TierLevel },
      { attribute: 'Total Cost', value: 'Unclear (Arizona: $165B)', sourceTier: 1 as TierLevel },
      { attribute: 'Timeline', value: 'Several years if approved', sourceTier: 1 as TierLevel },
      { attribute: 'Discussions With', value: 'Trump administration, Steve Witkoff, MGX', sourceTier: 1 as TierLevel },
    ] as TSMCUAE[],
    usConcerns: [
      { concern: 'US Investment Jeopardy', description: 'Could harm TSMC Arizona project', severity: 'high' as UAERelevanceLevel },
      { concern: 'China/Iran Benefit', description: 'UAE facility could benefit adversarial nations', severity: 'critical' as UAERelevanceLevel },
      { concern: 'Resource Drain', description: 'Financial/managerial drain from US project', severity: 'high' as UAERelevanceLevel },
      { concern: 'Washington Buy-in', description: 'Contingent on US approval', severity: 'critical' as UAERelevanceLevel },
    ] as USConcerns[],
    uaeAssets: [
      { asset: 'Mubadala Investment in AMD', description: 'Strategic investment', uaeRelevance: 'high' as UAERelevanceLevel },
      { asset: 'GlobalFoundries', description: 'Created by Mubadala (2009)', uaeRelevance: 'high' as UAERelevanceLevel },
      { asset: 'Khazna', description: 'Data center company', uaeRelevance: 'high' as UAERelevanceLevel },
      { asset: 'M42', description: 'Healthcare technology', uaeRelevance: 'medium' as UAERelevanceLevel },
      { asset: 'Space42', description: 'Geospatial/satellite', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as UAESemiconductorAsset[],
    usChipApprovals: [
      { approval: 'Advanced Nvidia Chips', recipient: 'HUMAIN (Saudi Arabia)', detail: 'November 2025', sourceTier: 0 as TierLevel },
      { approval: 'Advanced Nvidia Chips', recipient: 'G42 (UAE)', detail: 'November 2025', sourceTier: 0 as TierLevel },
      { approval: 'US Commerce Authorization', recipient: 'UAE + Saudi', detail: 'Promoting American AI dominance', sourceTier: 0 as TierLevel },
    ] as USChipApproval[],
    uaeUSAIAgreement: [
      { attribute: 'UAE Investment Commitment', value: '$1.4 trillion', sourceTier: 0 as TierLevel },
      { attribute: 'Timeline', value: '10 years', sourceTier: 0 as TierLevel },
      { attribute: 'US Security Alignment', value: 'National security regulations', sourceTier: 0 as TierLevel },
      { attribute: 'Diversion Prevention', value: 'Prevent US-origin technology diversion', sourceTier: 0 as TierLevel },
      { attribute: 'Nvidia AI Chips', value: '500,000 annually (delayed)', sourceTier: 1 as TierLevel },
      { attribute: 'Deal Status', value: 'Facing delays (US security concerns)', sourceTier: 1 as TierLevel },
    ] as UAEUSAIAgreement[],
    majorDeals: [
      { company: 'Boeing/GE Aerospace', deal: '28 Boeing 787, 777X (Etihad)', value: '$14.5B', jobsCreated: '60,000 US jobs' },
      { company: 'Emirates Global Aluminum', deal: 'Oklahoma smelter', value: '$4B', jobsCreated: 'First new US smelter in 45 years' },
      { company: 'Exxon/EOG/ADNOC', deal: 'Oil/gas expansion', value: '$60B', jobsCreated: '—' },
      { company: 'Qualcomm', deal: 'Abu Dhabi Engineering Center', value: 'New', jobsCreated: 'AI, data centers, IoT focus' },
    ] as MajorDeal[],
    awsSovereignCloud: {
      project: 'Sovereign Cloud Launchpad',
      economicContribution: '$181 billion',
      targetYear: '2033',
      partners: 'AWS, e&, UAE Cybersecurity',
      uaeRelevance: 'high' as UAERelevanceLevel,
    } as AWSSovereignCloud,
    mgxFocus: [
      { focusArea: 'Chip Design', description: 'Semiconductor design capabilities' },
      { focusArea: 'Manufacturing', description: 'Chip fabrication' },
    ] as MGXSemiconductorFocus[],
    sentiment: [
      { source: 'Taipei Times', sentiment: 'Cautious', keyFinding: 'TSMC evaluation ongoing' },
      { source: 'CNBC', sentiment: 'Positive', keyFinding: 'Chip exports approved' },
      { source: 'Commerce.gov', sentiment: 'Positive', keyFinding: 'US-UAE cooperation' },
      { source: 'White House', sentiment: 'Extremely Positive', keyFinding: '$200B deals' },
      { source: 'The National', sentiment: 'Positive', keyFinding: 'Restrictions easing' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 11: ROBOTICS
  // ---------------------------------------------------------------------------
  robotics: {
    marketSize: [
      { market: 'Robotic Platform Market', value2024: '$445 million', uaeRelevance: 'high' as UAERelevanceLevel },
      { market: 'Robotics System Integration', value2024: '$258.7 million', value2030: '$397.7 million', cagr: '7.2%', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as RoboticsMarketSize[],
    marketSegmentation: [
      { segment: 'Industrial Robots', share: '49.56%', growth: 'Largest', uaeRelevance: 'high' as UAERelevanceLevel },
      { segment: 'Service Robots', share: '—', growth: 'Growing', uaeRelevance: 'medium' as UAERelevanceLevel },
      { segment: 'Collaborative Robots', share: '—', growth: 'Growing', uaeRelevance: 'medium' as UAERelevanceLevel },
      { segment: 'Autonomous Robots', share: '—', growth: 'Fastest-growing', uaeRelevance: 'high' as UAERelevanceLevel },
      { segment: 'Medical Robots', share: '—', growth: 'Emerging', uaeRelevance: 'medium' as UAERelevanceLevel },
      { segment: 'Agricultural Robots', share: '—', growth: 'Emerging', uaeRelevance: 'low' as UAERelevanceLevel },
      { segment: 'Military Robots', share: '—', growth: 'Active', uaeRelevance: 'high' as UAERelevanceLevel },
      { segment: 'Educational Robots', share: '—', growth: 'Growing', uaeRelevance: 'medium' as UAERelevanceLevel },
      { segment: 'Consumer Robots', share: '—', growth: 'Growing', uaeRelevance: 'low' as UAERelevanceLevel },
    ] as MarketSegmentation[],
    sectorProjections: [
      { sector: 'Manufacturing', projection: 'AED 120 billion', timeline: '—', uaeRelevance: 'high' as UAERelevanceLevel },
      { sector: 'Healthcare', projection: 'AED 120 billion', timeline: '—', uaeRelevance: 'high' as UAERelevanceLevel },
      { sector: 'Logistics & Transportation', projection: 'AED 90 billion', timeline: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as SectorProjection[],
    growthDrivers: [
      { driver: 'UAE AI Strategy', description: 'AED 1 billion committed', uaeRelevance: 'critical' as UAERelevanceLevel },
      { driver: 'Rising Labor Costs', description: 'Automation economics', uaeRelevance: 'high' as UAERelevanceLevel },
      { driver: 'Operational Efficiency', description: 'Business adoption', uaeRelevance: 'medium' as UAERelevanceLevel },
      { driver: 'Smart City Investment', description: 'Dubai/Abu Dhabi initiatives', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as GrowthDriver[],
    challenges: [
      { challenge: 'High Initial Investment', detail: 'Exceeds AED 600,000 for advanced platforms', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Skilled Workforce', detail: 'Only 25% engineering grads specialize in robotics', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Regulatory Compliance', detail: 'Requirements vary by sector', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Technology Change', detail: 'Rapid obsolescence', severity: 'medium' as UAERelevanceLevel },
    ] as RoboticsChallenge[],
    majorPlayers: [
      { company: 'ABB Ltd.', type: 'Industrial', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'KUKA AG', type: 'Industrial', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'FANUC Corporation', type: 'Industrial', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Yaskawa Electric', type: 'Industrial', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Boston Dynamics', type: 'Autonomous', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'iRobot', type: 'Consumer', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Universal Robots', type: 'Collaborative', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Intuitive Surgical', type: 'Medical', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'DJI', type: 'Drone', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'DGWorld FZ LLC', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Acacus Technologies', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Emirates Robotics', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as MajorPlayer[],
    militaryRobotics: {
      combatProgram: {
        claim: '"World\'s largest combat robotics programme"',
        mouDate: 'January 24, 2024 (UMEX 2024)',
        sourceTier: 1 as TierLevel,
      } as CombatRobotics,
      milremEquipment: [
        { equipment: 'Tracked RCVs', quantity: '20', capability: '30mm MK44 cannons' },
        { equipment: 'THeMIS UGVs', quantity: '40', capability: '30mm M230LF, Indirect Fire Systems, Observe units' },
      ] as MilremEquipment[],
      edgeGroupUAV: {
        model: 'HT-100 and HT-750',
        quantity: '200 unmanned helicopters',
        manufacturer: 'ANAVIA (Swiss EDGE subsidiary)',
        purpose: 'ISR and logistics',
        type: 'VTOL',
        sourceTier: 1 as TierLevel,
      } as EDGEGroupUAV,
    },
    hospitalityRobotics: [
      { project: 'Mind Children', detail: 'Concierge robots (SingularityNET + Zarqa)', timeline: 'Pilot early 2025' },
      { project: 'Robot Showcase', detail: 'Desdemona (humanoid with advanced AI)', timeline: 'Future Hospitality Summit' },
    ] as HospitalityRobotics[],
    robotPredictions: {
      prediction: 'Robots serving humanity by 2050',
      value: '20+ billion',
      source: 'Mohammad Abdullah Al Gergawi (UAE Minister)',
      event: 'World Government Summit 2025',
      date: 'Feb 12, 2025',
    } as RobotPrediction,
    sentiment: [
      { source: 'Army Technology', sentiment: 'Extremely Positive', keyFinding: 'Largest combat program' },
      { source: 'Ken Research', sentiment: 'Positive', keyFinding: 'Market growth' },
      { source: 'Grand View Research', sentiment: 'Positive', keyFinding: 'System integration growth' },
      { source: 'Arab News', sentiment: 'Positive', keyFinding: 'Hospitality robotics' },
      { source: 'Anadolu Agency', sentiment: 'Neutral', keyFinding: '20B robots projection' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🟠 HIGH',
    },
  },

  // ---------------------------------------------------------------------------
  // QUERY 12: DIGITAL TWIN
  // ---------------------------------------------------------------------------
  digitalTwin: {
    marketSize: [
      { market: 'Urban Digital Twin', value: '$228 million', value2030: '$772 million', cagr: '19.03%', period: '2025-2032', uaeRelevance: 'high' as UAERelevanceLevel },
      { market: 'Real Estate Digital Twin', value: '$560 million', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as DigitalTwinMarket[],
    dubaiStrategy: {
      mandate: 'Create digital twin for entire city',
      authority: 'Dubai Supreme Council of Energy + Dubai Municipality',
    } as DigitalTwinStrategy,
    keyProjects: [
      { project: 'Urban Digital Twin', organization: 'Dubai Municipality', focus: 'GIS, IoT, AI integration', uaeRelevance: 'critical' as UAERelevanceLevel },
      { project: 'Digital City Twin', organization: 'Dubai Digital Authority', focus: 'City-wide planning', uaeRelevance: 'critical' as UAERelevanceLevel },
      { project: 'DEWA Smart Grid', organization: 'DEWA', focus: 'Energy monitoring', uaeRelevance: 'high' as UAERelevanceLevel },
      { project: 'Transport Digital Twin', organization: 'RTA', focus: 'Metro, tram, road systems', uaeRelevance: 'high' as UAERelevanceLevel },
      { project: 'Abu Dhabi Housing', organization: 'ISKAN Abu Dhabi', focus: '3,000+ residences', uaeRelevance: 'medium' as UAERelevanceLevel },
      { project: 'Bridge/Tunnel Monitoring', organization: 'Ministry of Energy', focus: '260+ federal bridges/tunnels', uaeRelevance: 'medium' as UAERelevanceLevel },
      { project: 'Airport Management', organization: 'Dubai Airports', focus: 'Stand allocation, passenger flow', uaeRelevance: 'medium' as UAERelevanceLevel },
      { project: 'Building Modernization', organization: 'Asico Development', focus: 'Existing building 3D scans', uaeRelevance: 'medium' as UAERelevanceLevel },
    ] as DigitalTwinProject[],
    smartCityRankings: [
      { city: 'Dubai', globalRank: 4, change: '+8 ranks', previousRank: 12, uaeRelevance: 'critical' as UAERelevanceLevel },
      { city: 'Abu Dhabi', globalRank: 5, change: '+5 ranks', previousRank: 10, uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as SmartCityRanking[],
    globalTop3: [
      { rank: 1, city: 'Singapore', country: 'Singapore' },
      { rank: 2, city: 'Zurich', country: 'Switzerland' },
      { rank: 3, city: 'Oslo', country: 'Norway' },
    ],
    abuDhabiTransformation: {
      investment: '$150+ billion',
      alignment: 'Digital Strategy 2025-2027',
      uaeRelevance: 'critical' as UAERelevanceLevel,
    } as AbuDhabiTransformation,
    growthDrivers: [
      { driver: 'Advanced Technologies', description: 'IoT, AI, big data analytics', uaeRelevance: 'high' as UAERelevanceLevel },
      { driver: 'Sustainable Development', description: 'Urban development initiatives', uaeRelevance: 'medium' as UAERelevanceLevel },
      { driver: 'Smart City Projects', description: 'Dubai and Abu Dhabi', uaeRelevance: 'critical' as UAERelevanceLevel },
    ] as DigitalTwinGrowthDriver[],
    marketSegmentation: [
      { segment: 'Product Twin', type: 'Type', description: '35% market share' },
      { segment: 'Process Twin', type: 'Type', description: '~26% CAGR (fastest-growing)' },
      { segment: 'Production Design & Development', type: 'Application', description: '37% share' },
      { segment: 'Predictive Maintenance', type: 'Application', description: '~29% CAGR (fastest-growing)' },
    ] as DigitalTwinSegmentation[],
    keyTechnologies: [
      { technology: 'IoT/IIoT', application: 'Sensor networks' },
      { technology: 'AI/ML', application: 'Analytics and prediction' },
      { technology: 'AR/VR/MR', application: 'Visualization' },
      { technology: 'Big Data Analytics', application: 'Data processing' },
      { technology: '5G', application: 'Connectivity' },
      { technology: 'Cloud Computing', application: 'Infrastructure' },
      { technology: 'Edge Computing', application: 'Real-time processing' },
    ] as KeyTechnology[],
    majorPlayers: [
      { company: 'Siemens AG', type: 'Global', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Autodesk Inc.', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Bentley Systems', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Dassault Systèmes', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'IBM', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Microsoft', type: 'Global', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'ANSYS', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'PTC', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Hexagon AB', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'Oracle', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'GE Digital', type: 'Global', uaeRelevance: 'medium' as UAERelevanceLevel },
      { company: 'DAMAC Properties', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Emaar Properties', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Aldar Properties', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
      { company: 'Nakheel PJSC', type: 'Local', uaeRelevance: 'high' as UAERelevanceLevel },
    ] as MajorPlayer[],
    challenges: [
      { challenge: 'High Initial Cost', detail: '>AED 1 million for large projects', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Data Privacy', detail: 'Security concerns', severity: 'medium' as UAERelevanceLevel },
      { challenge: 'Legacy Integration', detail: 'System compatibility', severity: 'medium' as UAERelevanceLevel },
    ] as RoboticsChallenge[],
    gccSmartCityMarket: [
      { metric: 'Market Size', value: '$145.54 billion', period: '2024' },
      { metric: 'Projected Size', value: '$907.12 billion', period: '2032' },
      { metric: 'CAGR', value: '25.70%', period: '2025-2032' },
    ] as GCCSmartCityMarket[],
    uaeSmartCityInvestments: [
      { initiative: 'AI and Digital Public Services', investment: '$4.2 billion' },
      { initiative: 'AI Vision', investment: '$100 billion' },
    ] as UAESmartCityInvestment[],
    sentiment: [
      { source: 'MarkNtel Advisors', sentiment: 'Positive', keyFinding: 'Strong growth' },
      { source: 'Research and Markets', sentiment: 'Positive', keyFinding: 'Real estate focus' },
      { source: 'Wired', sentiment: 'Positive', keyFinding: 'UAE simulation leadership' },
      { source: 'UAE Official Portal', sentiment: 'Positive', keyFinding: 'Smart city initiatives' },
      { source: 'Yahoo Finance', sentiment: 'Positive', keyFinding: 'GCC transformation' },
    ] as SentimentEntry[],
    assessment: {
      overall: '🔴 CRITICAL',
    },
  },

  // ---------------------------------------------------------------------------
  // SUMMARY KPIs
  // ---------------------------------------------------------------------------
  summaryKPIs: [
    { kpi: 'AI Adoption Rate', value: '54%+', date: '2026', trend: 'Up', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'AI Private Investment (2013-2025)', value: '$4 billion', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'G42 Valuation', value: '$20+ billion', date: '2026', trend: 'Up', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Microsoft G42 Investment', value: '$1.5 billion', date: '2024', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'AI Hiring Growth', value: '48%', date: '2025', trend: '+16pp', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Job Automatability Index', value: '28.53', date: '2025', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Drone Delivery Coverage (2026)', value: '30%', trend: 'Targeted', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Drone Delivery Coverage (5yr)', value: '70%', trend: 'Targeted', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Last Mile Delivery Market (2024)', value: '$5.8 million', trend: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
    { kpi: 'Quantum Research Ranking', value: 'Top 5 globally', date: '2025', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Starlink Latency', value: '20-40ms', date: '2026', trend: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
    { kpi: 'IMD Talent Ranking', value: '9th globally', date: '2025', trend: '+8', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Semiconductor Interest', value: 'TSMC evaluating', date: '2025', trend: 'Ongoing', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'US Chip Export Approval', value: 'November 2025', date: '2025', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Robotics Market (2024)', value: '$445 million', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Robotics System Integration (2024)', value: '$258.7 million', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: '20 Billion Robots Timeline', value: 'By 2050', date: '2025', trend: '—', uaeRelevance: 'medium' as UAERelevanceLevel },
    { kpi: 'Digital Twin Market (2025)', value: '$228 million', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Digital Twin CAGR', value: '19.03%', period: '2025-2032', trend: '—', uaeRelevance: 'high' as UAERelevanceLevel },
    { kpi: 'Smart City Ranking (Dubai)', value: '4th globally', date: '2025', trend: '+8', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Smart City Ranking (Abu Dhabi)', value: '5th globally', date: '2025', trend: '+5', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Agentic AI Government Target', value: '50%', date: '2026', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Job Creation Target', value: '1+ million', timeline: '2030', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'UAE-US Investment Commitment', value: '$1.4 trillion', date: '2025', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
    { kpi: 'Stargate UAE Investment', value: '$7.9 billion', timeline: '2026-2029', trend: '—', uaeRelevance: 'critical' as UAERelevanceLevel },
  ] as SummaryKPI[],

  // ---------------------------------------------------------------------------
  // ENTITY REGISTRY
  // ---------------------------------------------------------------------------
  entityRegistry: {
    governmentBodies: [
      { entity: 'Ministry of AI', scope: 'National', established: '2017 (world\'s first)' },
      { entity: 'UAE Council for AI', scope: 'Advisory', established: '—' },
      { entity: 'AIATC (Artificial Intelligence and Advanced Technology Council)', scope: 'Abu Dhabi', established: 'January 2024' },
      { entity: 'UAE Data Office', scope: 'National', established: '—' },
      { entity: 'Dubai Digital Authority', scope: 'Dubai', established: '—' },
      { entity: 'Dubai Centre for AI', scope: 'Dubai', established: '—' },
      { entity: 'MGX Investment Company', scope: 'National', established: 'January 2024' },
    ] as GovernmentBody[],
    companies: [
      { company: 'G42', sector: 'AI Technology', valuation: '$20B+' },
      { company: 'M42', sector: 'Healthcare', valuation: '—', parent: 'G42' },
      { company: 'Bayanat', sector: 'Geospatial', valuation: '—', parent: 'G42' },
      { company: 'Presight AI', sector: 'Analytics', valuation: '—', parent: 'G42' },
      { company: 'Space42', sector: 'Satellite', valuation: '~$4B', parent: 'G42' },
      { company: 'Khazna', sector: 'Data Centers', valuation: '—', parent: 'G42/Mubadala' },
      { company: 'Keeta Drone', sector: 'Drone Delivery', valuation: '—' },
      { company: 'Starlink UAE', sector: 'Satellite Internet', valuation: '—', parent: 'SpaceX' },
    ] as Company[],
    regulatoryInstruments: [
      { instrument: 'Federal Decree-Law No. 45/2021 (PDPL)', year: 2021, authority: 'Federal' },
      { instrument: 'Federal Law No. 34/2021 (Cybercrime)', year: 2021, authority: 'Federal' },
      { instrument: 'UAE AI Ethics Principles', year: 2022, authority: 'UAE AI Office' },
      { instrument: 'DIFC Regulation 10', year: 2023, authority: 'DIFC' },
      { instrument: 'UAE Charter for AI (12 principles)', year: 2024, authority: 'Federal' },
      { instrument: 'DIFC Data Protection Law', year: 2025, authority: 'DIFC' },
    ] as RegulatoryInstrument[],
  },

  // ---------------------------------------------------------------------------
  // SOURCE CREDIBILITY MATRIX
  // ---------------------------------------------------------------------------
  sourceCredibilityMatrix: [
    { source: 'UAE Government Portal (u.ae)', tier: 0 as TierLevel, type: 'Official', reliability: 'Extremely High', url: 'u.ae' },
    { source: 'TDRA', tier: 0 as TierLevel, type: 'Government', reliability: 'Extremely High', url: 'tdra.gov.ae' },
    { source: 'White House', tier: 0 as TierLevel, type: 'Government', reliability: 'Extremely High', url: 'whitehouse.gov' },
    { source: 'US Commerce Dept', tier: 0 as TierLevel, type: 'Government', reliability: 'Extremely High', url: 'commerce.gov' },
    { source: 'Dubai RTA', tier: 0 as TierLevel, type: 'Government', reliability: 'Extremely High', url: 'rta.ae' },
    { source: 'DCAA', tier: 0 as TierLevel, type: 'Government', reliability: 'Extremely High' },
    { source: 'Microsoft News', tier: 1 as TierLevel, type: 'Corporate/Authoritative', reliability: 'Very High', url: 'microsoft.com' },
    { source: 'Stanford HAI', tier: 1 as TierLevel, type: 'Research Institute', reliability: 'Very High', url: 'hai.stanford.edu' },
    { source: 'PwC', tier: 1 as TierLevel, type: 'Big 4 Advisory', reliability: 'Very High', url: 'pwc.com' },
    { source: 'IMD', tier: 1 as TierLevel, type: 'Research Institute', reliability: 'Very High', url: 'imd.org' },
    { source: 'Chambers', tier: 1 as TierLevel, type: 'Legal Research', reliability: 'High', url: 'chambers.com' },
    { source: 'IAPP', tier: 1 as TierLevel, type: 'Industry Association', reliability: 'High', url: 'iapp.org' },
    { source: 'KPMG', tier: 1 as TierLevel, type: 'Big 4 Advisory', reliability: 'High', url: 'kpmg.com' },
    { source: 'Grand View Research', tier: 2 as TierLevel, type: 'Market Research', reliability: 'Medium-High', url: 'grandviewresearch.com' },
    { source: 'Gulf News', tier: 2 as TierLevel, type: 'Major Media', reliability: 'Medium', url: 'gulfnews.com' },
    { source: 'Khaleej Times', tier: 2 as TierLevel, type: 'Major Media', reliability: 'Medium', url: 'khaleejtimes.com' },
    { source: 'The National', tier: 2 as TierLevel, type: 'Major Media', reliability: 'Medium', url: 'thenationalnews.com' },
    { source: 'Computer Weekly', tier: 2 as TierLevel, type: 'Tech Media', reliability: 'Medium-High', url: 'computerweekly.com' },
    { source: 'PitchBook', tier: 2 as TierLevel, type: 'Financial Data', reliability: 'Medium-High', url: 'pitchbook.com' },
    { source: 'Business Model Canvas', tier: 3 as TierLevel, type: 'Analysis', reliability: 'Medium', url: 'businessmodelcanvastemplate.com' },
    { source: 'Ondato', tier: 3 as TierLevel, type: 'Compliance/Analysis', reliability: 'Medium', url: 'ondato.com' },
    { source: 'Hayat Biotech', tier: 3 as TierLevel, type: 'Media/Blog', reliability: 'Low-Medium', url: 'hayatbiotech.com' },
  ] as SourceCredibility[],

  // ---------------------------------------------------------------------------
  // SENTIMENT ANALYSIS SUMMARY
  // ---------------------------------------------------------------------------
  sentimentAnalysisSummary: [
    { topic: 'AI Regulation', overallSentiment: 'Very Positive', keyFinding: 'UAE as global leader' },
    { topic: 'G42', overallSentiment: 'Very Positive', keyFinding: '$1.5B Microsoft investment validation' },
    { topic: 'AI Jobs', overallSentiment: 'Mixed', keyFinding: 'Opportunity with disruption' },
    { topic: 'Autonomous Vehicles', overallSentiment: 'Positive', keyFinding: 'Ambitious targets' },
    { topic: 'Quantum Computing', overallSentiment: 'Positive', keyFinding: 'Top 5 positioning' },
    { topic: 'Starlink UAE', overallSentiment: 'Positive', keyFinding: 'Connectivity for underserved' },
    { topic: 'Deepfake', overallSentiment: 'Cautious', keyFinding: 'Regulatory gaps acknowledged' },
    { topic: 'AI Government Services', overallSentiment: 'Very Positive', keyFinding: 'Unprecedented deployment' },
    { topic: 'Talent/Brain Drain', overallSentiment: 'Very Positive', keyFinding: 'Top 10 achievement, reversal' },
    { topic: 'Semiconductors', overallSentiment: 'Mixed', keyFinding: 'Opportunity with US uncertainty' },
    { topic: 'Robotics', overallSentiment: 'Positive', keyFinding: 'Largest combat program' },
    { topic: 'Digital Twin', overallSentiment: 'Very Positive', keyFinding: 'Top 5 smart city ranking' },
  ],

  // ---------------------------------------------------------------------------
  // UAE RELEVANCE HEAT MAP
  // ---------------------------------------------------------------------------
  uaeRelevanceHeatMap: [
    { topic: 'AI Regulation', relevance: 'critical' as UAERelevanceLevel, priority: 'P0' },
    { topic: 'G42', relevance: 'critical' as UAERelevanceLevel, priority: 'P0' },
    { topic: 'AI Government Services', relevance: 'critical' as UAERelevanceLevel, priority: 'P0' },
    { topic: 'Talent/Brain Drain', relevance: 'critical' as UAERelevanceLevel, priority: 'P0' },
    { topic: 'Semiconductors', relevance: 'critical' as UAERelevanceLevel, priority: 'P0' },
    { topic: 'AI Jobs', relevance: 'critical' as UAERelevanceLevel, priority: 'P1' },
    { topic: 'Digital Twin', relevance: 'critical' as UAERelevanceLevel, priority: 'P1' },
    { topic: 'Autonomous Vehicles', relevance: 'high' as UAERelevanceLevel, priority: 'P2' },
    { topic: 'Robotics', relevance: 'high' as UAERelevanceLevel, priority: 'P2' },
    { topic: 'Quantum Computing', relevance: 'high' as UAERelevanceLevel, priority: 'P2' },
    { topic: 'Starlink UAE', relevance: 'medium' as UAERelevanceLevel, priority: 'P3' },
    { topic: 'Deepfake', relevance: 'medium' as UAERelevanceLevel, priority: 'P3' },
  ],

  // ---------------------------------------------------------------------------
  // DATA COMPLETENESS ASSESSMENT
  // ---------------------------------------------------------------------------
  dataCompleteness: [
    { query: 'AI Regulation', dataPointsExtracted: '45+', completeness: '95%' },
    { query: 'G42', dataPointsExtracted: '40+', completeness: '90%' },
    { query: 'AI Jobs', dataPointsExtracted: '50+', completeness: '95%' },
    { query: 'Autonomous Vehicles', dataPointsExtracted: '30+', completeness: '90%' },
    { query: 'Quantum Computing', dataPointsExtracted: '25+', completeness: '85%' },
    { query: 'Starlink UAE', dataPointsExtracted: '35+', completeness: '95%' },
    { query: 'Deepfake', dataPointsExtracted: '40+', completeness: '85%' },
    { query: 'AI Government', dataPointsExtracted: '30+', completeness: '90%' },
    { query: 'Talent', dataPointsExtracted: '30+', completeness: '90%' },
    { query: 'Semiconductors', dataPointsExtracted: '30+', completeness: '85%' },
    { query: 'Robotics', dataPointsExtracted: '40+', completeness: '90%' },
    { query: 'Digital Twin', dataPointsExtracted: '35+', completeness: '90%' },
  ],
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AiTechnologyData = typeof aiTechnologyData
export type {
  UAERelevanceLevel,
  RegulatoryLaw,
  RegulatoryBody,
  G42Overview,
  G42Subsidiary,
  LaborMarketKPI,
  AutomationExposure,
  SummaryKPI,
  SourceCredibility,
  GovernmentBody,
  Company,
  RegulatoryInstrument,
}
