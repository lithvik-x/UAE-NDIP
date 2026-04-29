// @ts-nocheck
/**
 * Technology & Innovation Data
 *
 * Comprehensive structured data for the UAE National Digital Intelligence Platform
 * Technology & Innovation topic page. All data extracted from MD research file.
 *
 * @fileOverview Technology & Innovation analysis data
 */

'use client'

import type {
  TierLevel,
  AlertLevel,
  HSBPCCategory,
  SentimentBreakdown,
  PlutchikEmotion,
  CredibilityScore,
  UAERelevance,
  TrendData,
  KeyFinding,
  SourceReference,
} from '@/lib/data-loader/types'

// ============================================================================
// INTERFACE DEFINITIONS
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  enrichmentStatus: string
  dataCompleteness: string
}

export interface QueryPattern {
  number: number
  queryPattern: string
  purpose: string
}

export interface AIMetric {
  metric: string
  value: string
  context?: string
}

export interface AIInvestmentEvent {
  date: string
  event: string
  investment: string
  partners: string
}

export interface AIEthicsAspect {
  aspect: string
  details: string
}

export interface DeepfakeRegulation {
  aspect: string
  details: string
}

export interface G42Overview {
  fullName: string
  founded: string
  headquarters: string
  chairman: string
  ceo: string
  employees: string
  businessAreas: string
}

export interface G42Subsidiary {
  name: string
  focusArea: string
}

export interface G42Partnership {
  date: string
  partnership: string
  details: string
}

export interface G42Controversy {
  issue: string
  details: string
}

export interface G42DashboardMetric {
  metric: string
  value: string
}

export interface SpaceMetric {
  attribute: string
  value: string
  context?: string
}

export interface MarsMissionLeader {
  role: string
  person: string
}

export interface MarsAssemblyPartner {
  partner: string
  institution: string
}

export interface LunarAttribute {
  attribute: string
  value: string
}

export interface AstronautAttribute {
  attribute: string
  value: string
}

export interface SpaceMission {
  mission: string
  date: string
  details: string
}

export interface AstronautTraining {
  training: string
  details: string
}

export interface AstronautPostCareer {
  date: string
  position: string
}

export interface OtherAstronaut {
  astronaut: string
  role: string
  notes: string
}

export interface SpaceStatistic {
  metric: string
  value: string
}

export interface UpcomingMission {
  mission: string
  launchDate: string
  target: string
}

export interface DataCenterMetric {
  metric: string
  value: string
  year?: string
  context?: string
}

export interface DataCenterInvestment {
  investor: string
  investment: string
  partner: string
  date?: string
}

export interface DataCenterPlayer {
  company: string
  role: string
}

export interface SurveillanceProgramme {
  programme: string
  location: string
  scope: string
}

export interface SurveillanceDetail {
  aspect: string
  details: string
}

export interface HumanRightsIssue {
  issue: string
  details: string
}

export interface CybercrimeAspect {
  aspect: string
  details: string
}

export interface InternetRestriction {
  restriction: string
  status: string
  since?: string
}

export interface CyberEntity {
  entity: string
  role: string
}

export interface DataProtectionLaw {
  jurisdiction: string
  law: string
  keyFeatures: string
}

export interface PenaltyDetail {
  jurisdiction: string
  penaltyType: string
  amount: string
}

export interface VPNRegulation {
  aspect: string
  details: string
}

export interface CryptoRegulator {
  regulator: string
  scope: string
}

export interface CryptoLicensing {
  aspect: string
  details: string
}

export interface CryptoCompliance {
  requirement: string
  description: string
}

export interface UAEPassFeature {
  feature: string
  details: string
}

export interface EGovernmentApp {
  application: string
  description: string
}

export interface QuantumInitiative {
  initiative: string
  details: string
}

export interface MBZUAILocation {
  location: string
  details: string
}

export interface AVRegulatory {
  law: string
  details: string
}

export interface AVOperator {
  operator: string
  location: string
  deploymentDetails: string
}

export interface AVMarketProjection {
  metric: string
  value: string
  source?: string
}

export interface DroneDetail {
  aspect: string
  details: string
}

export interface SemiconductorDevelopment {
  development: string
  date: string
  details: string
}

export interface SemiconductorMarket {
  metric: string
  value: string
  year?: string
}

export interface SemiconductorInitiative {
  initiative: string
  details: string
}

export interface UnicornCompany {
  company: string
  valuation: string
  sector: string
  funding: string
  location: string
}

export interface GovernmentTarget {
  target: string
  details: string
}

export interface VCFirm {
  firm: string
  location: string
  established: string
  totalFunding: string
  investments: string
  exits: string
}

export interface VCStatistic {
  metric: string
  value: string
}

export interface DIFCInnovHub {
  aspect: string
  details: string
}

export interface DubaiFinTechHive {
  aspect: string
  details: string
}

export interface VirtualWorkVisa {
  aspect: string
  details: string
}

export interface LayoffMetric {
  metric: string
  value: string
  source?: string
}

export interface RegionalDisruption {
  event: string
  impact: string
}

export interface TechKeyMetric {
  metric: string
  currentValue: string
  targetProjection: string
  source: string
}

export interface MajorInvestment {
  investment: string
  amount: string
  date: string
  investors: string
}

export interface TechRanking {
  index: string
  ranking: string
  source: string
}

export interface SynthesizedSection {
  title: string
  content: string
}

export interface SentimentBySource {
  sourceCategory: string
  sentiment: string
  keyFactors: string
}

export interface SentimentByTheme {
  theme: string
  sentiment: string
  drivers: string
}

export interface GlobalAIDimension {
  dimension: string
  uaePosition: string
  relevance: string
}

export interface StrategicAsset {
  asset: string
  value: string
  competitivePosition: string
}

export interface RiskFactor {
  risk: string
  severity: string
  mitigation: string
}

export interface VerificationCheck {
  check: string
  status: string
  notes: string
}

export interface SourceCredibility {
  source: string
  type: string
  credibility: string
  access: string
}

export interface URLInventoryItem {
  number: number
  url: string
  contentType: string
  status: string
}

// ============================================================================
// MAIN TECHNOLOGY INNOVATION DATA TYPE
// ============================================================================

export interface TechnologyInnovationData {
  // Metadata
  execution: ExecutionMetadata
  focusAreas: string
  queryPatterns: QueryPattern[]

  // Section 1: AI & Artificial Intelligence
  aiOverview: AIMetric[]
  aiStrategyMetrics: AIMetric[]
  aiInvestmentTimeline: AIInvestmentEvent[]
  aiEthicsRegulation: AIEthicsAspect[]
  deepfakeRegulation: DeepfakeRegulation

  // Section 2: G42 - Flagship AI Company
  g42Overview: G42Overview
  g42Subsidiaries: G42Subsidiary[]
  g42Partnerships: G42Partnership[]
  g42Controversies: G42Controversy[]
  g42Dashboard: G42DashboardMetric[]

  // Section 3: Space Programme
  hopeProbeMetrics: SpaceMetric[]
  marsMissionLeaders: MarsMissionLeader[]
  marsAssemblyPartners: MarsAssemblyPartner[]
  lunarMissionAttributes: LunarAttribute[]
  sultanAlNeyadiAttributes: AstronautAttribute[]
  sultanSpaceMissions: SpaceMission[]
  sultanTraining: AstronautTraining[]
  sultanPostCareer: AstronautPostCareer[]
  otherAstronauts: OtherAstronaut[]
  spaceStatistics: SpaceStatistic[]
  upcomingMissions: UpcomingMission[]

  // Section 4: Data Center Economy
  dataCenterMetrics: DataCenterMetric[]
  majorDataCenterInvestments: DataCenterInvestment[]
  dataCenterPlayers: DataCenterPlayer[]

  // Section 5: Surveillance & Cybersecurity
  surveillanceProgrammes: SurveillanceProgramme[]
  oyoonDetails: SurveillanceDetail[]
  falconEyeDetails: SurveillanceDetail[]
  humanRightsConcerns: HumanRightsIssue[]
  cybercrimeAspects: CybercrimeAspect[]
  internetRestrictions: InternetRestriction[]
  cybersecurityEntities: CyberEntity[]
  dataProtectionLaws: DataProtectionLaw[]
  penalties: PenaltyDetail[]
  vpnRegulations: VPNRegulation[]

  // Section 6: Crypto & Virtual Assets
  cryptoRegulatoryFramework: CryptoRegulator[]
  cryptoLicensing: CryptoLicensing[]
  cryptoCompliance: CryptoCompliance[]

  // Section 7: Digital Infrastructure
  uaePassFeatures: UAEPassFeature[]
  eGovernmentApps: EGovernmentApp[]
  quantumInitiatives: QuantumInitiative[]
  mbzuaiGlobalPresence: MBZUAILocation[]

  // Section 8: Autonomous Transportation
  avRegulations: AVRegulatory[]
  avOperators: AVOperator[]
  avMarketProjections: AVMarketProjection[]
  droneDetails: DroneDetail[]
  bvlosProgramme: DroneDetail[]

  // Section 9: Semiconductor
  semiconductorDevelopments: SemiconductorDevelopment[]
  semiconductorMarkets: SemiconductorMarket[]
  semiconductorInitiatives: SemiconductorInitiative[]

  // Section 10: Startup Ecosystem
  unicorns: UnicornCompany[]
  governmentTargets: GovernmentTarget[]
  vcFirms: VCFirm[]
  vcStatistics: VCStatistic[]

  // Section 11: Fintech & Innovation Hubs
  difcInnovationHub: DIFCInnovHub[]
  dubaiFinTechHive: DubaiFinTechHive

  // Section 12: Digital Mobility
  virtualWorkVisa: VirtualWorkVisa[]

  // Section 13: Tech Sector Labor Market
  layoffMetrics: LayoffMetric[]
  regionalDisruptions: RegionalDisruption[]

  // Section 14: Comprehensive Data Tables
  techKeyMetrics: TechKeyMetric[]
  majorTechnologyInvestments: MajorInvestment[]
  techRankings: TechRanking[]

  // Section 15: Synthesized Findings
  synthesizedFindings: SynthesizedSection[]

  // Section 16: Sentiment Analysis
  sentimentBySource: SentimentBySource[]
  sentimentByTheme: SentimentByTheme[]

  // Section 17: UAE Relevance Assessment
  globalAIRace: GlobalAIDimension[]
  strategicAssets: StrategicAsset[]
  riskFactors: RiskFactor[]

  // Section 18: Verification Status
  verificationChecks: VerificationCheck[]
  sourceCredibility: SourceCredibility[]
  urlInventory: URLInventoryItem[]

  // Summary fields (for MetricCard grid)
  keyFindingsSummary: KeyFinding[]
  metrics: {
    volume: number
    reach: number
    engagement: number
    sentiment: SentimentBreakdown
    trend: TrendData
  }
  emotions: PlutchikEmotion
  credibility: CredibilityScore
  uaeRelevance: UAERelevance
  alertLevel: AlertLevel
  trends: TrendData[]
  stakeholders: string[]
  relatedEntities: string[]
  sources: SourceReference[]
  lastUpdated: string
}

// ============================================================================
// HARDCODE ALL DATA FROM MD FILE
// ============================================================================

export const technologyInnovationData: TechnologyInnovationData = {
  // --------------------------------------------------------------------------
  // METADATA
  // --------------------------------------------------------------------------
  execution: {
    dateExecuted: '2026-04-27',
    frameworkVersion: '1.0',
    queriesExecuted: 28,
    pagesFetched: 32,
    enrichmentStatus: 'Fully Enriched',
    dataCompleteness: '94%',
  },

  focusAreas:
    'G42, AI regulation, surveillance tech export, smart city privacy concerns, digital sovereignty, tech talent competition, startup ecosystem realities vs PR, UAE as tech hub narrative vs reality, brain drain/gain, 5G/6G, quantum computing, space program (Hazza Al Mansouri, Sultan Al Neyadi, Rashid Rover), semiconductor ambitions, data center economy, crypto hub ambitions, deepfake regulation, AI ethics, autonomous vehicles, drone delivery, digital ID (UAE Pass), e-government maturity, digital literacy gaps, tech inequality, algorithmic bias, AI in government services, tech sector layoffs, unicorn graveyard, VC winter impact.',

  queryPatterns: [
    { number: 1, queryPattern: 'UAE AI / UAE artificial intelligence / UAE machine learning', purpose: 'AI strategy and adoption' },
    { number: 2, queryPattern: 'UAE Minister of AI / UAE AI strategy / UAE AI regulation', purpose: 'Policy framework' },
    { number: 3, queryPattern: 'UAE G42 / G42 UAE Microsoft investment', purpose: 'Flagship AI company' },
    { number: 4, queryPattern: 'UAE tech startup / UAE startup ecosystem / UAE unicorn', purpose: 'Startup landscape' },
    { number: 5, queryPattern: 'UAE tech hub / UAE silicon valley / Dubai Internet City', purpose: 'Tech hub positioning' },
    { number: 6, queryPattern: 'UAE cybersecurity / UAE cyber defense / UAE cyber regulation', purpose: 'Security posture' },
    { number: 7, queryPattern: 'UAE surveillance technology / UAE facial recognition / UAE smart city surveillance', purpose: 'Privacy concerns' },
    { number: 8, queryPattern: 'UAE smart city / UAE smart Dubai / UAE smart Abu Dhabi', purpose: 'Smart city initiatives' },
    { number: 9, queryPattern: 'UAE space program / UAE Mars mission / UAE astronaut / Sultan Al Neyadi', purpose: 'Space achievements' },
    { number: 10, queryPattern: 'UAE blockchain / UAE cryptocurrency / UAE virtual assets', purpose: 'Crypto ecosystem' },
    { number: 11, queryPattern: 'UAE VARA / UAE crypto regulation / UAE virtual asset regulation', purpose: 'Regulatory framework' },
    { number: 12, queryPattern: 'UAE quantum computing', purpose: 'Emerging technology' },
    { number: 13, queryPattern: 'UAE digital ID UAE Pass', purpose: 'Digital identity' },
    { number: 14, queryPattern: 'UAE 5G network', purpose: 'Connectivity infrastructure' },
    { number: 15, queryPattern: 'UAE semiconductor chip', purpose: 'Manufacturing ambitions' },
    { number: 16, queryPattern: 'UAE data center economy', purpose: 'Digital infrastructure' },
    { number: 17, queryPattern: 'UAE autonomous vehicles', purpose: 'Transportation innovation' },
    { number: 18, queryPattern: 'UAE drone delivery', purpose: 'Logistics innovation' },
    { number: 19, queryPattern: 'UAE tech talent competition', purpose: 'Human capital' },
    { number: 20, queryPattern: 'UAE data localization', purpose: 'Data sovereignty' },
    { number: 21, queryPattern: 'UAE remote work digital nomad', purpose: 'Workforce mobility' },
    { number: 22, queryPattern: 'UAE internet censorship', purpose: 'Digital freedom' },
    { number: 23, queryPattern: 'UAE VPN illegal banned', purpose: 'Regulatory restrictions' },
    { number: 24, queryPattern: 'UAE deepfake regulation', purpose: 'AI governance' },
    { number: 25, queryPattern: 'UAE AI ethics', purpose: 'Ethical framework' },
    { number: 26, queryPattern: 'UAE startup unicorn graveyard', purpose: 'Ecosystem failures' },
    { number: 27, queryPattern: 'UAE VC venture capital winter', purpose: 'Investment climate' },
    { number: 28, queryPattern: 'Dubai FinTech Hive', purpose: 'FinTech accelerator' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 1: AI & ARTIFICIAL INTELLIGENCE
  // --------------------------------------------------------------------------

  aiOverview: [
    { metric: 'Government Services to Autonomous AI', value: '50% within 2 years', context: 'Announced by Sheikh Mohammed bin Rashid Al Maktoum' },
    { metric: 'AI Adoption Goal', value: 'First country globally to adopt agentic AI models', context: 'Under directives of President Sheikh Mohamed bin Zayed Al Nahyan' },
    { metric: 'Employee Training', value: 'All federal government employees', context: 'Specialized AI training program' },
    { metric: 'Digital Transformation Timeline', value: '20 years', context: 'Government digital transformation' },
    { metric: 'Minister of State for AI Appointed', value: '2017', context: 'First country globally to appoint' },
    { metric: 'AI Strategy Launch', value: 'UAE AI Strategy 2031', context: 'Under UAE Centennial 2071 vision' },
    { metric: 'Ministry Established', value: '2020', context: 'Ministry of AI, Digital Economy and Remote Work Applications' },
  ],

  aiStrategyMetrics: [
    { metric: 'AI Contribution to Economy by 2031', value: '$91 billion (AED 335 billion)', context: 'UAE National AI Strategy 2031' },
    { metric: 'Non-oil GDP from AI Target', value: '20% by 2031', context: 'National target' },
    { metric: 'Microsoft-G42 Investment', value: '$1.5 billion', context: 'April 2024' },
    { metric: 'MGX Launch', value: 'March 2024', context: 'Targeting $100 billion in assets' },
    { metric: 'Global AI Infrastructure Fund', value: '$30 billion initial capital', context: 'September 2024 (MGX, BlackRock, GIP, Microsoft)' },
    { metric: 'Stargate Project', value: '$500 billion investment vehicle', context: 'January 2025, OpenAI announced with MGX as key investor' },
    { metric: 'e&-AWS Cloud Agreement', value: '$1 billion', context: 'October 2024' },
    { metric: 'Renewable Energy Investment', value: '$54 billion', context: 'Triple supply' },
    { metric: 'G42 Divestment from Chinese Cos', value: 'November 2023', context: 'ByteDance, xFusion, Honor' },
    { metric: 'US Nvidia H100 Chip Export Approval', value: 'Late 2024', context: 'Microsoft-operated facilities in UAE' },
    { metric: 'US Defense Partner Designation', value: 'September 2024', context: 'Major defense partner' },
    { metric: 'AI Campus Deal (Abu Dhabi-US)', value: 'Multimillion-dollar', context: 'May 2025 announced' },
    { metric: 'Data Center Cluster Capacity', value: '5 GW', context: 'Planned total capacity' },
    { metric: 'Stargate UAE Cluster', value: '1 GW', context: 'G42-OpenAI partnership' },
    { metric: 'ChatGPT Plus Subscriptions', value: 'Entire UAE population', context: 'Part of deal' },
    { metric: 'MBZUAI Silicon Valley Lab', value: 'May 2025', context: 'AI-focused research lab' },
    { metric: 'Falcon Arabic AI Chatbot', value: 'Top-performing Arabic AI', context: 'Released by TII' },
    { metric: 'Preliminary NVIDIA Chip Import Deal', value: 'On hold', context: 'Millions of NVIDIA AI chips' },
  ],

  aiInvestmentTimeline: [
    { date: 'October 2023', event: 'OpenAI Partnership with G42', investment: '-', partners: 'G42, OpenAI' },
    { date: 'April 2024', event: 'Microsoft invests in G42', investment: '$1.5B', partners: 'Microsoft, G42' },
    { date: 'March 2024', event: 'MGX launched', investment: '-', partners: 'Abu Dhabi' },
    { date: 'September 2024', event: 'Global AI Infrastructure Fund', investment: '$30B initial', partners: 'MGX, BlackRock, GIP, Microsoft' },
    { date: 'October 2024', event: 'e&-AWS cloud agreement', investment: '$1B', partners: 'e&, AWS' },
    { date: 'January 2025', event: 'Stargate Project announced', investment: '$500B', partners: 'OpenAI, MGX' },
    { date: 'May 2025', event: 'Abu Dhabi-US AI campus deal', investment: 'Multimillion', partners: 'Abu Dhabi, US companies' },
    { date: 'May 2025', event: 'MBZUAI Silicon Valley lab', investment: '-', partners: 'MBZUAI' },
  ],

  aiEthicsRegulation: [
    { aspect: 'Framework Name', details: 'AI Principles and Ethics for Emirate of Dubai' },
    { aspect: 'Launch Date', details: 'January 2019' },
    { aspect: 'Issuing Body', details: 'Smart Dubai Government Establishment' },
    { aspect: 'Nature', details: 'Non-binding framework' },
    { aspect: 'Core Principles', details: 'Fair, Transparent, Accountable, Explainable AI' },
    { aspect: 'Assessment Tool', details: 'Ethical AI Self-Assessment Tool for organizations' },
    { aspect: 'Governing Body', details: 'Governing AI Ethics Board (government, academic, legal, industry experts)' },
    { aspect: 'Adoption', details: 'Executive Council of Dubai directed government entities to use principles' },
    { aspect: 'Formal Adopters', details: 'RTA and Dubai Police' },
    { aspect: 'AI Maturity Self-Assessment Tool', details: 'Government entity capability assessment' },
    { aspect: 'AI Ethics Guide (PDF)', details: 'Ethical AI implementation guidance' },
    { aspect: 'DeepFake Guide (PDF)', details: 'Deepfake detection and response' },
    { aspect: 'AI Hardware Infrastructure Report UAE', details: 'Infrastructure documentation' },
    { aspect: 'Commitment', details: 'UAE committed to AI ethical standards' },
    { aspect: 'Framework', details: 'AI Principles and Ethics framework with eight principles' },
  ],

  deepfakeRegulation: {
    aspect: 'Legal Basis',
    details: 'Federal Decree-Law No. (34) of 2021',
  },

  // --------------------------------------------------------------------------
  // SECTION 2: G42
  // --------------------------------------------------------------------------

  g42Overview: {
    fullName: 'Group 42 Holding Ltd',
    founded: '2018',
    headquarters: 'Abu Dhabi, UAE',
    chairman: 'Tahnoon bin Zayed Al Nahyan (National Security Advisor, ruling family member)',
    ceo: 'Peng Xiao (former head of DarkMatter Group)',
    employees: 'Approximately 25,000 (2024)',
    businessAreas: 'Government services, Healthcare, Finance, Oil and gas, Aviation, Hospitality',
  },

  g42Subsidiaries: [
    { name: 'Inception Institute of AI', focusArea: 'AI research' },
    { name: 'G42 Healthcare', focusArea: 'Health technology' },
    { name: 'Bayanat', focusArea: 'Geographic AI' },
    { name: 'Injazat', focusArea: 'Digital transformation' },
    { name: 'Khazna', focusArea: 'Data centers' },
  ],

  g42Partnerships: [
    { date: 'October 2023', partnership: 'OpenAI', details: 'Partnership announced' },
    { date: 'July 2023', partnership: 'Cerebras', details: 'Supercomputers capable of 4 exaflops' },
    { date: 'April 2024', partnership: 'Microsoft', details: '$1.5 billion investment' },
    { date: '2024', partnership: 'Microsoft Azure', details: 'G42 committed to using Azure platform' },
  ],

  g42Controversies: [
    { issue: 'ToTok App', details: 'G42 reportedly sole registered shareholder; accused of government tracking' },
    { issue: 'DarkMatter/Pegasus', details: 'CEO led Pegasus subsidiary; spyware used to monitor dissidents' },
    { issue: 'COVID-19 Testing Kits', details: 'Controversy with BGI Group' },
    { issue: 'ByteDance Investment', details: '$100 million stake (November 2023), divested 4 months later' },
    { issue: 'US Government Concerns', details: 'China technology diversion concerns' },
    { issue: 'January 2024', details: 'House Select Committee requested export controls on G42' },
    { issue: 'May 2025', details: 'Trump signed agreement for AI campus while removing chip restrictions' },
  ],

  g42Dashboard: [
    { metric: 'Employees', value: '25,000' },
    { metric: 'Microsoft Investment', value: '$1.5B' },
    { metric: 'Data Centers (Khazna)', value: '3 new (30 MW, 30 MW, 100 MW)' },
    { metric: 'AI Compute Partnership', value: 'OpenAI/Cerebras' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 3: SPACE PROGRAMME
  // --------------------------------------------------------------------------

  hopeProbeMetrics: [
    { attribute: 'Launch Date', value: 'July 20, 2020' },
    { attribute: 'Launch Location', value: 'Tanegashima Space Center, Japan' },
    { attribute: 'Mars Arrival', value: 'February 9, 2021' },
    { attribute: 'Journey Duration', value: '~200 days' },
    { attribute: 'Distance', value: '493 million km' },
    { attribute: 'Budget', value: '$200 million USD' },
    { attribute: 'Historic Firsts', value: 'First Arab/Muslim-majority country to reach Mars; Fifth country to reach Mars; Second nation to successfully enter Mars orbit on first attempt (after India)' },
    { attribute: 'April 2023', value: 'First-ever close-up global images of Mars moon Deimos' },
    { attribute: 'Published', value: 'Updated global map of Mars using Hope spacecraft images' },
  ],

  marsMissionLeaders: [
    { role: 'Project Lead', person: 'Omran Sharaf' },
    { role: 'Deputy Project Manager/Science Lead', person: 'Sarah Al Amiri' },
  ],

  marsAssemblyPartners: [
    { partner: 'Main Assembly', institution: "University of Colorado Boulder's LASP" },
    { partner: 'Academic Partners', institution: 'Arizona State University, UC Berkeley' },
    { partner: 'Navigation', institution: 'KinetX Aerospace' },
    { partner: 'Support', institution: 'NASA Deep Space Network' },
  ],

  lunarMissionAttributes: [
    { attribute: 'Launch Date', value: 'December 11, 2022' },
    { attribute: 'Rocket', value: 'SpaceX Falcon 9' },
    { attribute: 'Lander', value: "ispace's Hakuto-R Mission 1" },
    { attribute: 'Landing Attempt', value: 'April 25, 2023 - communication lost seconds before touchdown' },
    { attribute: 'Outcome', value: 'Spacecraft crashed and destroyed upon impact' },
    { attribute: 'Rover Weight', value: '10 kg' },
    { attribute: 'Rover Dimensions', value: '53.5 cm × 53.85 cm' },
    { attribute: 'Cameras', value: 'Two high-resolution cameras, microscopic camera, thermal imaging camera' },
    { attribute: 'Scientific Instrument', value: 'Langmuir probe (lunar plasma and dust study)' },
    { attribute: 'Rashid 2 Announcement', value: 'April 26, 2023' },
  ],

  sultanAlNeyadiAttributes: [
    { attribute: 'Full Name', value: 'Sultan Saif Hamad Al Neyadi' },
    { attribute: 'Born', value: 'May 25, 1981' },
    { attribute: 'Birthplace', value: 'Umm Ghafa, Abu Dhabi' },
    { attribute: 'Education', value: 'Electronics and communications engineering (University of Brighton); Master\'s and PhD in information technology (Griffith University, 2008, 2012)' },
    { attribute: 'Background', value: 'Network security engineer in UAE Armed Forces' },
    { attribute: 'Family', value: 'Six children; blue belt in jiu-jitsu' },
    { attribute: 'Selection', value: '2018 (from over 4,000 candidates)' },
    { attribute: 'Backup Role', value: 'Backup astronaut for Hazzaa Al Mansoori during UAE\'s first ISS mission (2019)' },
  ],

  sultanSpaceMissions: [
    { mission: 'SpaceX Crew-6 Launch', date: 'March 2, 2023', details: 'Cape Canaveral, Florida' },
    { mission: 'Spacewalk', date: 'April 28, 2023', details: '7 hours, 1 minute; First Arab to perform spacewalk' },
    { mission: 'ISS Mission', date: '6 months', details: 'Expedition 69; First Arab to serve 6-month ISS mission' },
    { mission: 'Total Space Time', date: '185 days, 22 hours, 43 minutes', details: '' },
  ],

  sultanTraining: [
    { training: 'Training Centers', details: 'Yuri Gagarin Cosmonaut Training Center, NASA Johnson Space Center, European Astronaut Centre' },
    { training: 'Courses', details: 'Over 90 courses' },
    { training: 'Training Hours', details: '1,400+ hours' },
    { training: 'Additional', details: 'T-38 jet training' },
    { training: 'Research', details: 'Over 20 experiments with NASA, ESA, CSA, JAXA, CNES' },
  ],

  sultanPostCareer: [
    { date: 'January 11, 2024', position: 'Sworn in as UAE Minister of State for Youth Affairs' },
  ],

  otherAstronauts: [
    { astronaut: 'Hazzaa AlMansoori', role: 'First astronaut', notes: "UAE's first ISS visitor (2019)" },
    { astronaut: 'Nora AlMatrooshi', role: 'Astronaut', notes: 'NASA graduate' },
    { astronaut: 'Mohammad AlMulla', role: 'Astronaut', notes: 'NASA graduate' },
  ],

  spaceStatistics: [
    { metric: 'Countries exploring Mars', value: 'Only 9 (UAE included)' },
    { metric: 'Mars Mission Objectives', value: 'Knowledge economy, human resources, international partnerships' },
    { metric: 'Establishments in space economy', value: '57% engaged' },
    { metric: 'Government spending on space', value: '55.7%' },
    { metric: 'Commercial space allocation', value: '44.3%' },
    { metric: 'R&D spending increase', value: '14.8%' },
  ],

  upcomingMissions: [
    { mission: 'Emirates Mission to the Asteroid Belt', launchDate: '2028', target: 'Asteroid Belt' },
    { mission: 'Rashid 2', launchDate: '2026 (planned)', target: 'Moon far side landing' },
    { mission: 'Arab Satellite 813 Project', launchDate: 'TBD', target: 'Earth observation and communication' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 4: DATA CENTER ECONOMY
  // --------------------------------------------------------------------------

  dataCenterMetrics: [
    { metric: 'Market Valuation', value: 'USD 2.38 billion', year: '2025' },
    { metric: 'Projected Valuation', value: 'USD 6.70 billion', year: '2031' },
    { metric: 'CAGR', value: '18.82%', year: '2025-2031' },
    { metric: '2025 Electricity Consumption', value: '3 TWh', context: '~2% of 173 TWh total UAE electricity' },
    { metric: '2030 Projected Consumption', value: 'Over 6 TWh', context: 'Doubling from 2025' },
    { metric: '2040 Total Electricity Demand', value: '225 TWh', context: 'Projected' },
    { metric: 'Net Zero Target', value: '2050', context: 'National target' },
    { metric: 'Clean Energy by 2030', value: '~1/3 of power', context: 'Target' },
    { metric: 'Solar Share 2020', value: '4%', context: 'Of total energy mix' },
    { metric: 'Solar Share 2025', value: '9%', context: 'Growing' },
    { metric: 'Solar Target 2040', value: '20%+', context: 'Projected' },
    { metric: 'Nuclear Share', value: '21%', context: 'Current output' },
    { metric: 'Submarine Cables', value: '19', context: 'Linking Europe, Asia, Africa' },
    { metric: 'Live Capacity', value: '376 MW', year: '2025' },
    { metric: 'Market Shift', value: 'From regional hub to AI compute destination', context: 'Strategic repositioning' },
    { metric: 'Microsoft-G42 Expansion', value: '200 MW', context: 'Expected online by end of 2026' },
    { metric: 'AI IT Power (past year)', value: 'Nearly 20 MW', context: 'Went live' },
    { metric: 'Stargate Project Addition', value: '~200 MW AI capacity', context: 'Expected' },
    { metric: 'Colocation Share', value: '95%', context: 'Of total capacity' },
    { metric: 'Power Cost', value: '$0.11 per kWh', context: 'Nearly double Saudi Arabia' },
    { metric: 'Renewable Energy Mix', value: '5%', context: 'Current' },
    { metric: 'Ranking', value: 'Abu Dhabi and Dubai as top 2 emerging data center markets globally', context: '' },
  ],

  majorDataCenterInvestments: [
    { investor: 'Microsoft/G42', investment: '$1.5B Stargate UAE', partner: 'G42', date: 'Toward 5 GW capacity' },
    { investor: 'DU', investment: '$544M', partner: 'Microsoft', date: '' },
    { investor: 'AWS/e&', investment: '$1B', partner: 'e&', date: 'Cloud services expansion' },
  ],

  dataCenterPlayers: [
    { company: 'Khazna Data Centers', role: 'Hyperscale colocation' },
    { company: 'Equinix', role: 'International colocation' },
    { company: 'Gulf Data Hub', role: 'Regional colocation' },
    { company: 'Moro Hub', role: 'Dubai-based' },
    { company: 'AWS', role: 'Cloud services' },
    { company: 'Oracle', role: 'Cloud services' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 5: SURVEILLANCE & CYBERSECURITY
  // --------------------------------------------------------------------------

  surveillanceProgrammes: [
    { programme: 'Oyoon', location: 'Dubai', scope: '300,000+ cameras with facial recognition' },
    { programme: 'Falcon Eye', location: 'Abu Dhabi', scope: 'Comprehensive citywide monitoring through thousands of cameras' },
  ],

  oyoonDetails: [
    { aspect: 'Cameras', details: '300,000+ integrated' },
    { aspect: 'Technology', details: 'AI-enabled facial recognition and behavior analysis' },
    { aspect: 'Capabilities', details: 'Identifies suspects, tracks vehicles and license plates, detects criminal activity in real time' },
    { aspect: '2018 Achievement', details: 'AI-powered CCTV helped Dubai Police arrest 319 wanted suspects' },
    { aspect: 'Tourist Site Coverage', details: 'Over 5,000 cameras' },
    { aspect: 'Public Transportation', details: 'Covered' },
    { aspect: 'Traffic Monitoring', details: 'Covered' },
  ],

  falconEyeDetails: [
    { aspect: 'Launch', details: 'Around 2016' },
    { aspect: 'Operator', details: 'Abu Dhabi Monitoring & Control Centre' },
    { aspect: 'Capabilities', details: 'Centralized AI system monitoring through thousands of cameras' },
    { aspect: 'Recent Partnership', details: 'Abu Dhabi Police partnered with Presight for advanced AI including generative AI' },
  ],

  humanRightsConcerns: [
    { issue: 'Privacy Threat', details: 'Pervasive AI surveillance poses significant threats to individual privacy' },
    { issue: 'Self-Censorship', details: 'People aware of constant monitoring engage in self-censorship' },
    { issue: 'Ahmed Mansoor', details: 'Human rights defender sentenced to 10 years based on Pegasus data' },
    { issue: 'COP28 Concerns', details: 'Surveillance infringing on privacy and freedom of assembly' },
  ],

  cybercrimeAspects: [
    { aspect: 'Law', details: 'Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes' },
    { aspect: 'Effective Date', details: 'January 2, 2022' },
    { aspect: 'Scope', details: 'Comprehensive legal framework addressing misuse of online technologies' },
    { aspect: 'Offenses', details: 'Fake news, fraud, hacking government systems, blackmailing' },
    { aspect: 'Penalty for Dissent', details: 'Up to life imprisonment for online activities opposing fundamental principles of governance' },
    { aspect: 'Online Content Fine', details: 'Up to 10 million dirhams ($2.7 million)' },
  ],

  internetRestrictions: [
    { restriction: 'WhatsApp voice/video', status: 'Blocked', since: '2015' },
    { restriction: 'Viber', status: 'Banned', since: '2013' },
    { restriction: 'FaceTime', status: 'Blocked', since: '' },
    { restriction: 'Discord', status: 'Blocked', since: '2016' },
    { restriction: 'Clubhouse', status: 'Blocked', since: 'June 2023' },
    { restriction: 'Al Jazeera and Qatari media', status: 'Blocked', since: '2017' },
    { restriction: 'Blocked Websites (Q4 2022)', status: '3,766', since: 'Via automatic filtering by TDRA' },
    { restriction: 'VPN for illegal activities', status: 'Punishable', since: '' },
    { restriction: 'Spyware use', status: 'Active', since: 'On activists and journalists' },
    { restriction: 'Fake Twitter accounts', status: 'Up to 91%', since: 'Accounts sharing posts by Emirati leader MBZ' },
  ],

  cybersecurityEntities: [
    { entity: 'aeCERT', role: 'National Computer Emergency Response Team' },
    { entity: 'UAE Cybersecurity Council', role: 'Established November 2020' },
    { entity: 'Global Ranking', role: '5th globally in Global Cybersecurity Index 2024' },
  ],

  dataProtectionLaws: [
    { jurisdiction: 'UAE Onshore', law: 'Federal Decree Law No. 45 of 2021 (DPL)', keyFeatures: 'Applies to all personal data processing by electronic means' },
    { jurisdiction: 'DIFC', law: 'Law No. 5 of 2020', keyFeatures: 'Data Protection' },
    { jurisdiction: 'ADGM', law: 'Data Protection Regulations 2021', keyFeatures: 'Comprehensive' },
    { jurisdiction: 'Healthcare', law: 'ICT Health Law / ADHICS v2', keyFeatures: 'Prohibits transfer outside UAE' },
  ],

  penalties: [
    { jurisdiction: 'UAE Onshore', penaltyType: 'Imprisonment', amount: '6 months+ for cybercrime' },
    { jurisdiction: 'UAE Onshore', penaltyType: 'Fines', amount: 'AED 150,000-5M for cyber crimes' },
    { jurisdiction: 'DIFC', penaltyType: 'Administrative fines', amount: 'Up to USD 100,000' },
    { jurisdiction: 'ADGM', penaltyType: 'Fines', amount: 'Up to USD 28 million' },
    { jurisdiction: 'Healthcare', penaltyType: 'Fines', amount: 'Up to AED 1 million + access blocking' },
  ],

  vpnRegulations: [
    { aspect: 'Law', details: 'Federal Law No. 12 of 2016 amending Cyber Crimes Law' },
    { aspect: 'VPN Status', details: 'Use itself not illegal' },
    { aspect: 'Illegal Use', details: 'Criminalized for committing crimes' },
    { aspect: 'Misuse Penalty (India reports)', details: 'Fines Dh500,000-Dh2 million or imprisonment' },
    { aspect: 'VPN Downloads in UAE', details: '6 million (highest globally)' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 6: CRYPTO & VIRTUAL ASSETS
  // --------------------------------------------------------------------------

  cryptoRegulatoryFramework: [
    { regulator: 'VARA', scope: "World's first independent regulator for virtual assets" },
    { regulator: 'Scope', scope: "Dubai (excluding DIFC); oversees provision, use, and exchange of virtual assets" },
    { regulator: 'Governing Law', scope: 'Virtual Assets and Related Activities Regulations 2023' },
    { regulator: 'Framework', scope: 'VARA Full Market Product Regulations' },
    { regulator: 'Licensing Process', scope: 'Two-step process' },
    { regulator: 'Public Register', scope: 'Maintains Public Register of licensed VASPs' },
  ],

  cryptoLicensing: [
    { aspect: 'License Fees', details: 'AED 3,000 to over AED 500,000' },
    { aspect: 'Personal Income Tax', details: 'None on crypto activities' },
    { aspect: 'Corporate Tax', details: '9% on profits exceeding AED 375,000' },
    { aspect: 'VAT on Crypto', details: 'Eliminated as of October 2024' },
    { aspect: 'AML Violation Fines', details: 'AED 100,000 to AED 5 million' },
  ],

  cryptoCompliance: [
    { requirement: 'KYC', description: 'Customer identification' },
    { requirement: 'AML', description: 'Anti-money laundering' },
    { requirement: 'Transaction Monitoring', description: 'Continuous surveillance' },
    { requirement: 'Cybersecurity Standards', description: 'Required for VASPs' },
    { requirement: 'Travel Rule', description: 'UAE Virtual Assets Travel Rule Requirements' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 7: DIGITAL INFRASTRUCTURE
  // --------------------------------------------------------------------------

  uaePassFeatures: [
    { feature: 'Description', details: 'First national digital identity and signature solution' },
    { feature: 'Authentication', details: 'Smartphone-based for service providers across all emirates' },
    { feature: 'Registration', details: 'Face recognition (under 5 minutes vs. previous 20 minutes)' },
    { feature: 'Document Storage', details: 'Blockchain-powered vault' },
    { feature: 'Capabilities', details: 'Digital document signing, single mobile-based login' },
    { feature: 'Profile Updates', details: 'Address and profile updates' },
    { feature: 'Availability', details: 'iTunes and Google Play' },
    { feature: 'Help Desk', details: '600 561 111' },
    { feature: 'Users', details: 'Banking, money exchange, telecommunications, private sector' },
    { feature: 'Privacy Law', details: 'Federal Decree Law No. 45 of 2021 and Federal Decree Law No. 34 of 2021' },
  ],

  eGovernmentApps: [
    { application: 'U.Ask', description: 'AI-powered government inquiry system' },
    { application: 'Transportation AI', description: 'AI in transportation systems' },
    { application: 'Create apps in Dubai', description: 'Developer platform' },
    { application: 'Robotic applications', description: 'Government robotics' },
    { application: 'Arabic Dictionary of AI', description: 'AI terminology resource' },
    { application: 'AI resources', description: 'Government AI tools' },
    { application: 'Rules as Code platform', description: 'Regulatory digitization' },
    { application: 'Digital Government Authority', description: 'Regulatory body' },
    { application: 'Government Data Platform', description: 'Data integration' },
  ],

  quantumInitiatives: [
    { initiative: 'DEWA-Microsoft Partnership', details: '2018 - first intensive quantum computing training program' },
    { initiative: 'IBM Q', details: 'Provides quantum computing resources' },
    { initiative: 'TII Quantum Research Center', details: 'Pioneers quantum cryptography, communications, and sensing' },
    { initiative: 'Goal', details: "Build Arab world's first quantum computer" },
  ],

  mbzuaiGlobalPresence: [
    { location: 'Abu Dhabi', details: 'Main campus' },
    { location: 'Silicon Valley (Sunnyvale)', details: 'Satellite lab opened' },
    { location: 'Paris', details: 'Research presence' },
    { location: 'Researchers (Silicon Valley)', details: '40' },
    { location: 'Researchers (Paris/Abu Dhabi)', details: '40 each' },
    { location: 'Strategy', details: 'Open-source for international influence' },
    { location: 'Publication', details: 'Training datasets, source code, model weights' },
    { location: 'Recruitment', details: 'MIT, UC San Diego, Carnegie Mellon' },
    { location: 'Resources', details: 'Industry-level salaries, hundreds of GPUs' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 8: AUTONOMOUS TRANSPORTATION
  // --------------------------------------------------------------------------

  avRegulations: [
    { law: 'Executive Council Resolution No. 3 of 2019', details: 'Regulating Test Runs of Autonomous Vehicles in Dubai' },
    { law: 'Law No. 9 of 2023', details: 'Regulating Operation of Autonomous Vehicles in Dubai' },
    { law: 'Licensing', details: 'RTA licensing required before travel on roads' },
  ],

  avOperators: [
    { operator: 'WeRide', location: 'Abu Dhabi', deploymentDetails: '800,000+ km traveled by October 2025; up to 20 trips per vehicle' },
    { operator: 'Yango Group', location: 'Dubai', deploymentDetails: 'Delivery robots in controlled districts' },
    { operator: 'Dubai RTA', location: 'Dubai', deploymentDetails: '100 autonomous vehicles initially, targeting 1,000' },
  ],

  avMarketProjections: [
    { metric: 'Market CAGR', value: '25%', source: 'Ken Research' },
    { metric: 'Market Size by 2030', value: '$5 billion', source: 'Ken Research' },
    { metric: 'Dubai 2030 Target', value: '25% autonomous transport', source: 'Set in 2016' },
    { metric: 'Air Taxi', value: 'Joby Aviation piloted electric air taxis', source: 'Launching later in 2026' },
  ],

  droneDetails: [
    { aspect: '2026 Coverage Target', details: '30% drone delivery coverage' },
    { aspect: '5-Year Target', details: '70% coverage' },
    { aspect: 'First License', details: 'Keeta Drone received first drone delivery license from DCAA' },
    { aspect: 'Authorized Cargo', details: 'Medicines and parcels using six drones' },
    { aspect: 'First Location', details: 'Dubai Silicon Oasis' },
    { aspect: 'Phase 2', details: 'Prior to Dubai Airshow 2025' },
    { aspect: 'eVTOL Air Taxi', details: 'Planned for 2026 launch' },
    { aspect: 'Operators', details: 'Joby Aviation and Archer Aviation conducting test flights' },
  ],

  bvlosProgramme: [
    { aspect: 'Programme', details: 'BVLOS Drone Delivery Program' },
    { aspect: 'Full Name', details: 'Beyond Visual Line of Sight' },
    { aspect: 'Purpose', details: 'Enables UAV deployment in commercial use cases' },
    { aspect: 'Framework', details: 'Establishes BVLOS operational framework' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 9: SEMICONDUCTOR
  // --------------------------------------------------------------------------

  semiconductorDevelopments: [
    { development: 'US AI Chip Export Authorization', date: 'November 2025', details: 'Advanced AI chips equivalent to Nvidia H100 to UAE companies' },
    { development: 'TSMC Facility Evaluation', date: 'May 2025', details: 'Evaluating building advanced chip production facility' },
    { development: 'Trump AI Campus Deal', date: 'May 2025', details: 'UAE to build largest AI campus outside US' },
    { development: 'Abu Dhabi AI Chip', date: 'WGS 2026', details: '4 trillion transistors, unveiled at WGS 2026, world\'s largest' },
  ],

  semiconductorMarkets: [
    { metric: 'Semiconductor Market', value: 'USD 1.75 billion', year: '2025 (Mordor Intelligence)' },
    { metric: 'CAGR', value: '8.30%', year: 'Projected' },
  ],

  semiconductorInitiatives: [
    { initiative: 'Goal', details: 'Bring global chipmaking industry to Abu Dhabi' },
    { initiative: 'Focus', details: 'High-margin, manufacturing-driven endeavors' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 10: STARTUP ECOSYSTEM
  // --------------------------------------------------------------------------

  unicorns: [
    { company: 'Aleph Group', valuation: '$2B', sector: 'Advertising, Digital Media, Marketing', funding: '$495M', location: 'Dubai' },
    { company: 'Kitopi', valuation: '$2B', sector: 'Cloud Infrastructure, Food Delivery', funding: '$804M', location: 'Dubai' },
    { company: 'XPANCEO', valuation: '$1.35B', sector: 'AI, AR/VR, Hardware', funding: '$290M', location: 'Dubai' },
    { company: 'G42', valuation: '$1B', sector: 'AI, Cloud Computing, ML', funding: '$2.3B', location: 'Abu Dhabi' },
    { company: 'Dubizzle Group', valuation: '$1B', sector: 'Classifieds, Marketplace', funding: '$479M', location: 'Dubai' },
    { company: 'The Open Platform', valuation: '$1B', sector: 'Blockchain, Cryptocurrency', funding: '$28.5M', location: 'Dubai' },
  ],

  governmentTargets: [
    { target: 'Unicorns by 2031', details: '20 unicorns targeted (2022 announcement)' },
    { target: 'Investment Fund', details: '$272 million private equity fund for startups and SMEs' },
    { target: 'D33 Initiative', details: "Double Dubai's GDP by 2033; support 400 scaleups; nurture 30 unicorns" },
  ],

  vcFirms: [
    { firm: 'Shorooq Partners', location: 'Abu Dhabi', established: '2017', totalFunding: '$200M', investments: '138', exits: '7' },
    { firm: 'BECO Capital', location: 'Dubai', established: '2012', totalFunding: '$100M', investments: '87', exits: '9' },
    { firm: 'VentureSouq', location: 'Dubai', established: '2013', totalFunding: '$50M', investments: '165', exits: '14' },
    { firm: 'Iliad Partners', location: 'Dubai', established: '2016', totalFunding: '$23M', investments: '8', exits: '-' },
    { firm: 'FasterCapital', location: '-', established: '-', totalFunding: '-', investments: '1,279 (1,019 lead)', exits: '10' },
    { firm: 'Wamda Capital', location: '-', established: '-', totalFunding: '-', investments: '114', exits: '9' },
  ],

  vcStatistics: [
    { metric: 'Annual VC/Angel Investment', value: '$1.5-2 billion' },
    { metric: 'MENA Region Rank', value: 'Largest in MENA by 2026' },
    { metric: 'GCC VC Growth (2020-2024)', value: '19% CAGR' },
    { metric: 'Deployed Capital (2024)', value: '$1.7 billion' },
    { metric: 'Corporate Venture Capital', value: 'Increasingly prominent' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 11: FINTECH & INNOVATION HUBS
  // --------------------------------------------------------------------------

  difcInnovationHub: [
    { aspect: 'Parent', details: 'Dubai International Financial Centre' },
    { aspect: 'Status', details: 'Home to first and largest FinTech accelerator in MEASA region' },
    { aspect: 'Flagship Events', details: 'Dubai FinTech Summit, Dubai AI & Web3 Festival, Future Sustainability Forum' },
    { aspect: 'Programs', details: 'FinTech Accelerator, AccelerateHER, AI Transformation, Entrepreneur Programmes' },
    { aspect: 'Membership', details: 'Corporate partner, startup, investor options' },
    { aspect: 'Business Registration', details: 'Available' },
  ],

  dubaiFinTechHive: {
    aspect: 'Launch',
    details: '2017',
  },

  // --------------------------------------------------------------------------
  // SECTION 12: DIGITAL MOBILITY
  // --------------------------------------------------------------------------

  virtualWorkVisa: [
    { aspect: 'Visa Name', details: 'Dubai Virtual Work Visa' },
    { aspect: 'Duration', details: 'One year' },
    { aspect: 'Purpose', details: 'Live in Dubai while working remotely for employers abroad' },
    { aspect: 'Eligibility', details: 'Foreign nationals' },
    { aspect: 'Sponsorship', details: 'Self-sponsorship' },
    { aspect: 'Abu Dhabi Option', details: 'Abu Dhabi Remote Work Visa available' },
    { aspect: 'Features', details: 'Lower income hurdles, fully digital application' },
    { aspect: 'Tax Benefit', details: 'Tax-free' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 13: TECH SECTOR LABOR MARKET
  // --------------------------------------------------------------------------

  layoffMetrics: [
    { metric: 'Global Tech Layoffs (2026)', value: '30,000+', source: 'Gulf News' },
    { metric: 'UAE Companies Cutting Jobs', value: '29%', source: 'Cooper Fitch report' },
  ],

  regionalDisruptions: [
    { event: 'Nvidia, Amazon, Google', impact: 'Temporarily shut Dubai offices amid regional conflict' },
    { event: 'Google employees', impact: 'Stranded after sales conference' },
    { event: 'Commercial flights', impact: 'Grounded across Gulf' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 14: COMPREHENSIVE DATA TABLES
  // --------------------------------------------------------------------------

  techKeyMetrics: [
    { metric: 'AI Contribution by 2031', currentValue: '-', targetProjection: '$91B (AED 335B)', source: 'UAE National AI Strategy 2031' },
    { metric: 'Non-oil GDP from AI', currentValue: '-', targetProjection: '20% by 2031', source: 'National target' },
    { metric: 'Data Center Market', currentValue: '$2.38B (2025)', targetProjection: '$6.70B (2031)', source: 'Arizton' },
    { metric: 'Data Center Capacity', currentValue: '376 MW', targetProjection: '5 GW (Stargate UAE)', source: 'DC Knowledge' },
    { metric: 'Electricity for Data Centers', currentValue: '3 TWh (2025)', targetProjection: '6 TWh (2030)', source: 'Wood Mackenzie' },
    { metric: 'Unicorn Count', currentValue: '6', targetProjection: '20 by 2031', source: 'Government target' },
    { metric: 'VC Investment (Annual)', currentValue: '$1.5-2B', targetProjection: '-', source: 'Industry estimate' },
    { metric: 'Semiconductor Market', currentValue: '$1.75B (2025)', targetProjection: '-', source: 'Mordor Intelligence' },
    { metric: 'AV Market CAGR', currentValue: '-', targetProjection: '25%, $5B by 2030', source: 'Ken Research' },
    { metric: 'Drone Coverage', currentValue: '-', targetProjection: '70% within 5 years', source: 'Khaleej Times' },
    { metric: 'Government Services on AI', currentValue: '-', targetProjection: '50% within 2 years', source: 'Gulf News' },
  ],

  majorTechnologyInvestments: [
    { investment: 'Microsoft-G42', amount: '$1.5B', date: 'Apr 2024', investors: 'Microsoft, G42' },
    { investment: 'Global AI Infrastructure Fund', amount: '$30B', date: 'Sep 2024', investors: 'MGX, BlackRock, GIP, Microsoft' },
    { investment: 'Stargate Project', amount: '$500B', date: 'Jan 2025', investors: 'OpenAI, MGX' },
    { investment: 'e&-AWS', amount: '$1B', date: 'Oct 2024', investors: 'e&, AWS' },
    { investment: 'Stargate UAE', amount: '$1.5B', date: '2024-2026', investors: 'G42, Microsoft' },
    { investment: 'DU-Microsoft DC', amount: '$544M', date: '-', investors: 'DU, Microsoft' },
    { investment: 'Abu Dhabi AI Campus', amount: 'Multimillion', date: 'May 2025', investors: 'Abu Dhabi, US' },
    { investment: 'Startup Fund', amount: '$272M', date: '2022', investors: 'UAE Government' },
  ],

  techRankings: [
    { index: 'Global Cybersecurity Index', ranking: '5th', source: '2024' },
    { index: 'Emerging Data Center Markets', ranking: 'Top 2 (Abu Dhabi, Dubai)', source: '-' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 15: SYNTHESIZED FINDINGS
  // --------------------------------------------------------------------------

  synthesizedFindings: [
    {
      title: 'AI & Technology Strategy',
      content: 'The UAE has positioned itself as a global AI powerhouse through aggressive investment and strategic partnerships. The UAE National AI Strategy 2031 targets 20% of non-oil GDP from AI ($91 billion contribution). Key investments include Microsoft-G42 ($1.5B), Stargate UAE (5 GW capacity), and partnerships with OpenAI, NVIDIA, and Oracle. The UAE became first country to appoint Minister of State for AI (2017) and aims to move 50% of government services to autonomous AI within two years.',
    },
    {
      title: 'G42 - The Flagship AI Company',
      content: "G42, chaired by National Security Advisor Tahnoon bin Zayed Al Nahyan, is the centerpiece of UAE AI ambitions. After divesting from Chinese companies (ByteDance, Huawei) to satisfy US concerns, G42 secured Microsoft investment and partnerships. However, controversies persist around ToTok surveillance app allegations and connections to DarkMatter/Pegasus spyware.",
    },
    {
      title: 'Surveillance State',
      content: 'The UAE operates extensive AI surveillance infrastructure. Dubai\'s Oyoon program integrates 300,000+ cameras with facial recognition. Abu Dhabi\'s Falcon Eye provides citywide monitoring. Federal Law No. 34 of 2021 criminalizes online dissent with penalties up to life imprisonment. Freedom House rates UAE as "not free" with extensive internet censorship.',
    },
    {
      title: 'Space Program Achievements',
      content: 'The UAE achieved historic milestones: Hope Probe reached Mars in 2021 (first Arab nation, $200M budget), Sultan Al Neyadi completed 6-month ISS mission and performed first Arab spacewalk, and Rashid Rover lunar mission launched in 2022 (though landing failed). Rashid 2 planned for 2026 moon landing on far side.',
    },
    {
      title: 'Digital Infrastructure',
      content: 'Data center market booming ($2.38B in 2025, projected $6.70B by 2031). Microsoft-G42 Stargate UAE targeting 5 GW capacity. However, power costs high ($0.11/kWh), renewable energy only 5%, and regulations constraining clean energy procurement.',
    },
    {
      title: 'Crypto Hub',
      content: 'UAE has become crypto-friendly with VARA as world\'s first independent virtual asset regulator. Dubai offers no personal income tax on crypto, 9% corporate tax only on profits over AED 375,000. Multiple free zones (DIFC, ADGM, RAK DAO) offer crypto licensing. AML violations fined AED 100,000-5 million.',
    },
    {
      title: 'Tech Talent Competition',
      content: 'UAE aggressively attracts talent through Golden Visas (10 years for digital technology talents), competitive compensation, and world-class institutions like MBZUAI (world\'s first AI university). However, questions remain about brain drain from region and whether startup ecosystem reality matches government PR.',
    },
    {
      title: 'Regulatory Framework',
      content: 'UAE has established comprehensive tech regulations: AI Ethics Principles (2019), Autonomous Vehicles Law (2023), Deepfake penalties under Cybercrimes Law, Personal Data Protection Law (2021), and Cybersecurity Council (2020). However, enforcement often prioritizes state control over individual rights.',
    },
    {
      title: 'Startup Ecosystem',
      content: '6 unicorns valued at combined $8.35B (Aleph Group, Kitopi, XPANCEO, G42, Dubizzle Group, The Open Platform). Government targets 20 unicorns by 2031 with $272M fund. VC market active ($1.5-2B annually) but global VC winter has impacted MENA region.',
    },
    {
      title: 'Emerging Technologies',
      content: 'Quantum computing: TII Quantum Research Center aiming to build Arab world\'s first quantum computer. Autonomous vehicles: WeRide taxis active in Abu Dhabi (800,000+ km traveled), Dubai targeting 25% autonomous transport by 2030. Drone delivery: Keeta Drone licensed, Dubai targeting 70% coverage within 5 years. Semiconductor: TSMC evaluating UAE facility, US approved advanced chip exports to UAE.',
    },
  ],

  // --------------------------------------------------------------------------
  // SECTION 16: SENTIMENT ANALYSIS
  // --------------------------------------------------------------------------

  sentimentBySource: [
    { sourceCategory: 'Government/State Media', sentiment: 'Overwhelmingly Positive', keyFactors: 'Economic diversification, global leadership claims, technological advancement' },
    { sourceCategory: 'International Policy Think Tanks (CSIS)', sentiment: 'Neutral to Positive', keyFactors: 'Acknowledges investment scale, partnership value; notes geopolitical concerns' },
    { sourceCategory: 'Human Rights Organizations', sentiment: 'Negative', keyFactors: 'Surveillance concerns, internet freedom restrictions, privacy violations' },
    { sourceCategory: 'Tech Industry Media', sentiment: 'Positive', keyFactors: 'Investment figures, partnership announcements, market growth' },
    { sourceCategory: 'Financial Analysts', sentiment: 'Neutral to Positive', keyFactors: 'Market projections, growth rates; note regulatory constraints' },
  ],

  sentimentByTheme: [
    { theme: 'AI Development', sentiment: 'Positive', drivers: 'Massive investments, government commitment, international partnerships' },
    { theme: 'Surveillance Infrastructure', sentiment: 'Negative', drivers: 'Privacy concerns, human rights reports, self-censorship' },
    { theme: 'Space Programme', sentiment: 'Positive', drivers: 'Historic achievements, scientific contributions' },
    { theme: 'Crypto Regulation', sentiment: 'Positive (for industry)', drivers: 'Clear regulatory framework, tax benefits' },
    { theme: 'Internet Freedom', sentiment: 'Negative', drivers: 'Blocking, filtering, surveillance' },
    { theme: 'Startup Ecosystem', sentiment: 'Mixed', drivers: 'Unicorn successes vs. VC winter, graveyard concerns' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 17: UAE RELEVANCE ASSESSMENT
  // --------------------------------------------------------------------------

  globalAIRace: [
    { dimension: 'Investment Scale', uaePosition: 'Top tier (Stargate, MGX)', relevance: 'Critical - defines UAE as AI superpower' },
    { dimension: 'US Partnership', uaePosition: 'Strong (Microsoft, OpenAI, NVIDIA)', relevance: 'Critical - US authorization required for chips' },
    { dimension: 'China Relationship', uaePosition: 'Complex (divested from Chinese companies)', relevance: 'High - balancing act' },
    { dimension: 'Regional Leadership', uaePosition: 'Clear leader in MENA', relevance: 'Critical - competitive advantage' },
  ],

  strategicAssets: [
    { asset: 'G42', value: '$1B+ valuation', competitivePosition: 'Central to UAE AI ambitions' },
    { asset: 'MBZUAI', value: "World's first AI university", competitivePosition: 'Talent pipeline' },
    { asset: 'VARA', value: 'First independent crypto regulator', competitivePosition: 'FinTech hub positioning' },
    { asset: 'Hope Probe', value: 'Historic Mars mission', competitivePosition: 'Scientific credibility' },
    { asset: 'Data Center Infrastructure', value: '376 MW capacity', competitivePosition: 'Regional hub status' },
  ],

  riskFactors: [
    { risk: 'US-China Tech Decoupling', severity: 'High', mitigation: 'Divestment from Chinese tech, US partnerships' },
    { risk: 'Human Rights Scrutiny', severity: 'Medium', mitigation: 'State control over narrative' },
    { risk: 'Regulatory Arbitrage', severity: 'Medium', mitigation: 'Multiple free zones, clear licensing' },
    { risk: 'Talent Dependence', severity: 'Medium', mitigation: 'Golden Visas, MBZUAI, competitive compensation' },
  ],

  // --------------------------------------------------------------------------
  // SECTION 18: VERIFICATION STATUS
  // --------------------------------------------------------------------------

  verificationChecks: [
    { check: 'All queries executed', status: 'PASS', notes: '28 queries completed' },
    { check: 'All pages fetched', status: 'PASS', notes: '32 pages retrieved' },
    { check: 'All data extracted', status: 'PASS', notes: 'Comprehensive extraction' },
    { check: 'Source documented', status: 'PASS', notes: 'Every piece has source' },
    { check: 'No fabrication detected', status: 'PASS', notes: 'Only documented content' },
    { check: '100% confidence', status: 'PARTIAL', notes: 'Some pages returned access denied or partial content' },
  ],

  sourceCredibility: [
    { source: 'u.ae (Official UAE Government)', type: 'Government', credibility: 'High', access: 'Public' },
    { source: 'CSIS', type: 'Think Tank', credibility: 'High', access: 'Public' },
    { source: 'MBRSC', type: 'Government', credibility: 'High', access: 'Public' },
    { source: 'space.gov.ae', type: 'Government', credibility: 'High', access: 'Public' },
    { source: 'VARA', type: 'Regulator', credibility: 'High', access: 'Public' },
    { source: 'DIFC', type: 'Government/FZ', credibility: 'High', access: 'Public' },
    { source: 'Freedom House', type: 'NGO', credibility: 'Medium-High', access: 'Public' },
    { source: 'Wikipedia', type: 'Crowdsourced', credibility: 'Medium', access: 'Public' },
    { source: 'Gulf News', type: 'Media', credibility: 'Medium', access: 'Public' },
    { source: 'Khaleej Times', type: 'Media', credibility: 'Medium', access: 'Public' },
    { source: 'Failory', type: 'Startup Database', credibility: 'Medium', access: 'Public' },
    { source: 'Wood Mackenzie', type: 'Research', credibility: 'High', access: 'Partial' },
    { source: 'Data Center Knowledge', type: 'Industry', credibility: 'Medium', access: 'Partial' },
    { source: 'Tamimi Law', type: 'Law Firm', credibility: 'Medium-High', access: 'Partial' },
  ],

  urlInventory: [
    { number: 1, url: 'gulfnews.com', contentType: 'News', status: 'Fetched' },
    { number: 2, url: 'techpolicy.press', contentType: 'Policy Research', status: 'Fetched' },
    { number: 3, url: 'csis.org', contentType: 'Think Tank', status: 'Fetched' },
    { number: 4, url: 'uae-embassy.org', contentType: 'Government', status: 'Referenced' },
    { number: 5, url: 'u.ae', contentType: 'Government Portal', status: 'Fetched' },
    { number: 6, url: 'Wikipedia (G42)', contentType: 'Encyclopedia', status: 'Fetched' },
    { number: 7, url: 'adhrb.org', contentType: 'Human Rights', status: 'Referenced' },
    { number: 8, url: 'techandjustice.bsg.ox.ac.uk', contentType: 'Academic', status: 'Partial' },
    { number: 9, url: 'vara.ae', contentType: 'Regulator', status: 'Fetched' },
    { number: 10, url: 'Hacken.io', contentType: 'Security Research', status: 'Fetched' },
    { number: 11, url: 'Wikipedia (Al Neyadi)', contentType: 'Encyclopedia', status: 'Fetched' },
    { number: 12, url: 'mbrsc.ae', contentType: 'Government', status: 'Fetched' },
    { number: 13, url: 'Wikipedia (Mars Mission)', contentType: 'Encyclopedia', status: 'Fetched' },
    { number: 14, url: 'Wikipedia (Lunar Mission)', contentType: 'Encyclopedia', status: 'Fetched' },
    { number: 15, url: 'space.gov.ae', contentType: 'Government', status: 'Fetched' },
    { number: 16, url: 'tii.ae/quantum', contentType: 'Research', status: 'Referenced' },
    { number: 17, url: 'restofworld.org', contentType: 'Media', status: 'Referenced' },
    { number: 18, url: 'cms.law', contentType: 'Law Firm', status: 'Referenced' },
    { number: 19, url: 'freedomhouse.org', contentType: 'NGO', status: 'Partial' },
    { number: 20, url: 'tamimi.com', contentType: 'Law Firm', status: 'Referenced' },
    { number: 21, url: 'Times of India', contentType: 'News', status: 'Referenced' },
    { number: 22, url: 'WAM', contentType: 'Government Media', status: 'Referenced' },
    { number: 23, url: 'Arab Times', contentType: 'Media', status: 'Referenced' },
    { number: 24, url: 'Baker McKenzie', contentType: 'Law Firm', status: 'Referenced' },
    { number: 25, url: 'OECD.AI', contentType: 'International Org', status: 'Referenced' },
    { number: 26, url: 'woodmac.com', contentType: 'Research', status: 'Partial' },
    { number: 27, url: 'datacenterknowledge.com', contentType: 'Industry', status: 'Partial' },
    { number: 28, url: 'arizton.com', contentType: 'Research', status: 'Partial' },
    { number: 29, url: 'Khaleej Times', contentType: 'News', status: 'Fetched' },
    { number: 30, url: 'Gulf News', contentType: 'News', status: 'Fetched' },
    { number: 31, url: 'Ken Research', contentType: 'Research', status: 'Referenced' },
    { number: 32, url: 'LinkedIn/DMAOF', contentType: 'Professional Network', status: 'Referenced' },
    { number: 33, url: 'Dubai Future Foundation', contentType: 'Government', status: 'Referenced' },
    { number: 34, url: 'Hadef Partners', contentType: 'Law Firm', status: 'Referenced' },
    { number: 35, url: 'investindubai.gov.ae', contentType: 'Government', status: 'Partial' },
    { number: 36, url: 'Failory', contentType: 'Startup Database', status: 'Partial' },
    { number: 37, url: 'Finance Middle East', contentType: 'Financial Media', status: 'Referenced' },
    { number: 38, url: 'CNN', contentType: 'News', status: 'Referenced' },
    { number: 39, url: 'DIFC Innovation Hub', contentType: 'Government/FZ', status: 'Fetched' },
    { number: 40, url: 'DIFC Website', contentType: 'Government/FZ', status: 'Fetched' },
    { number: 41, url: 'Reuters', contentType: 'News', status: 'Access Denied' },
    { number: 42, url: 'Bloomberg', contentType: 'News', status: 'Access Denied' },
    { number: 43, url: 'The Guardian/Investopedia', contentType: 'News', status: 'Referenced' },
    { number: 44, url: 'Mordor Intelligence', contentType: 'Research', status: 'Referenced' },
    { number: 45, url: 'added.gov.ae', contentType: 'Government', status: 'Referenced' },
    { number: 46, url: 'LinkedIn (Lisa van Vuuren)', contentType: 'Professional Network', status: 'Referenced' },
  ],

  // --------------------------------------------------------------------------
  // SUMMARY FIELDS (for MetricCard grid)
  // --------------------------------------------------------------------------

  keyFindingsSummary: [
    { finding: 'AI Contribution Target by 2031: $91B (AED 335B)', metric: '$91B', source: 'UAE National AI Strategy 2031', tier: 0 as TierLevel },
    { finding: 'Non-oil GDP from AI Target: 20% by 2031', metric: '20%', source: 'National target', tier: 0 as TierLevel },
    { finding: 'Microsoft-G42 Investment: $1.5B (April 2024)', metric: '$1.5B', source: 'CSIS', tier: 1 as TierLevel },
    { finding: 'Stargate Project: $500B (OpenAI, MGX)', metric: '$500B', source: 'Government announcements', tier: 1 as TierLevel },
    { finding: 'Global AI Infrastructure Fund: $30B (MGX, BlackRock, GIP, Microsoft)', metric: '$30B', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Hope Probe: Reached Mars February 2021 (first Arab nation)', metric: 'Feb 2021', source: 'MBRSC', tier: 0 as TierLevel },
    { finding: 'Sultan Al Neyadi: First Arab to perform spacewalk (April 2023)', metric: 'Apr 2023', source: 'MBRSC', tier: 0 as TierLevel },
    { finding: 'Data Center Market: $2.38B (2025), $6.70B projected (2031)', metric: '$2.38B', source: 'Arizton', tier: 1 as TierLevel },
    { finding: 'Unicorn Count: 6 (Aleph Group, Kitopi, XPANCEO, G42, Dubizzle Group, TOP)', metric: '6', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Global Cybersecurity Index: 5th globally (2024)', metric: '5th', source: 'Government', tier: 0 as TierLevel },
    { finding: "VARA: World's first independent virtual asset regulator", metric: 'Active', source: 'VARA', tier: 0 as TierLevel },
  ],

  metrics: {
    volume: 890000,
    reach: 9500000,
    engagement: 520000,
    sentiment: { positive: 78, negative: 15, neutral: 7, overall: 63, volume: 890000 },
    trend: { direction: 'rising' as const, changePercent: 25, period: '2025', value: 78 },
  },

  emotions: {
    joy: 70,
    trust: 65,
    fear: 20,
    surprise: 45,
    sadness: 8,
    disgust: 10,
    anger: 5,
    anticipation: 75,
  },

  credibility: {
    tier: 1 as TierLevel,
    score: 85,
    sources: 46,
    lastVerified: '2026-04-27',
  },

  uaeRelevance: {
    score: 96,
    level: 'critical' as const,
    justification: 'Technology innovation is core to Vision 2031 and economic diversification away from oil',
  },

  alertLevel: 'GREEN' as AlertLevel,

  trends: [
    { direction: 'rising' as const, changePercent: 25, period: '2025', value: 78 },
    { direction: 'rising' as const, changePercent: 20, period: '2024', value: 62 },
  ],

  stakeholders: ['G42', 'MBRSC', 'VARA', 'Masdar', 'Ministry of AI', 'MGX', 'WAM'],

  relatedEntities: ['Microsoft', 'NVIDIA', 'OpenAI', 'MBZUAI', 'WEF', 'Cerebras', 'Oracle', 'AWS'],

  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'CSIS', url: 'https://www.csis.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'MBRSC', url: 'https://www.mbrsc.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'VARA', url: 'https://vara.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Freedom House', url: 'https://freedomhouse.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'Arizton', url: 'https://arizton.com', tier: 1 as TierLevel, date: '2025' },
    { name: 'Wood Mackenzie', url: 'https://woodmac.com', tier: 1 as TierLevel, date: '2025' },
    { name: 'Data Center Knowledge', url: 'https://datacenterknowledge.com', tier: 1 as TierLevel, date: '2025' },
  ],

  lastUpdated: '2026-04-27',
}

// ============================================================================
// HOOK
// ============================================================================

import { useState } from 'react'

export function useTechnologyInnovationData() {
  const [data] = useState(technologyInnovationData)
  return { data }
}
