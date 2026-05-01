/**
 * Cyber Threat Intelligence Data - MD 4-8
 *
 * Comprehensive cyber threat data for UAE dashboard
 * Extracted from: 4-8-cyber-threat-results.md
 * Date executed: 2026-04-27
 * Queries executed: 23 | Pages fetched: 35+ | Sources: 50+
 */

'use client'

// ============================================================================
// TYPES
// ============================================================================

export interface KeyStatistic {
  metric: string
  value: string
  source: string
  date: string
}

export interface SentimentAnalysis {
  overallThreatSentiment: string
  stateSponsoredActivity: string
  privateSectorReadiness: string
  governmentResponse: string
  uaeRelevance: string
}

export interface DailyAttackStatistic {
  period: string
  attacks: string
  change: string
  source: string
}

export interface AttackComposition {
  organizedGroups: number
  amateurHackers: number
  maliciousSoftwareEntities: number
  monitoredTelegramChannels: string
  countriesTargetingUAE: string
  hostileOrganizations: string
}

export interface ThreatDistribution {
  category: string
  count: string
  notes: string
}

export interface OfficialQuote {
  text: string
  author: string
  role: string
}

export interface EscalationTimeline {
  period: string
  attacks: string
}

export interface IranianCyberEvolution {
  phase: string
  period: string
  primaryMethods: string
  targets: string
}

export interface IranianGroup {
  group: string
  knownActivity: string
}

export interface AttackVector {
  vector: string
  percentage: string
  trend: string
  source: string
}

export interface PhishingStatistic {
  metric: string
  value: string
  source: string
}

export interface AIAttackMethod {
  method: string
  description: string
}

export interface ZeroDayWarning {
  date: string
  vulnerability: string
  source: string
  status: string
}

export interface HandalaInfo {
  alias: string
  attribution: string
  motivation: string
  fbiBounty: string
  activeSince: number
}

export interface DubaiAttackEntity {
  entity: string
  dataDestroyed: string
  dataStolen: string
}

export interface IsraelCooperation {
  initiative: string
  partners: string
  details: string
}

export interface KarmaTool {
  type: string
  cost: string
  developer: string
  operators: string
  targets: string
  capabilities: string[]
}

export interface StealthFalcon {
  activeSince: number
  targets: string
  malware: string
  persistence: string
  architecture: string
  modules: string
}

export interface SanctionInfo {
  sanctioned: string
  role: string
}

export interface ProtectedSector {
  sector: string
  priority: string
  concerns: string
}

export interface HealthcareIncident {
  facility: string
  date: string
  actor: string
  dataStolen: string
  records: string
}

export interface FinancialIncident {
  institution: string
  date: string
  actor: string
  data: string
  amount: string
}

export interface BybitHackDetails {
  amountStolen: string
  dateOfTheft: string
  fbiAttribution: string
  lazarusGroup: string
  previousRecord: string
  dubaiRegulatoryStatus: string
}

export interface GovernmentIncident {
  entity: string
  date: string
  attacker: string
  method: string
}

export interface MajorIncident {
  date: string
  incident: string
  sector: string
  actor: string
  impact: string
}

export interface RansomwareGroup {
  group: string
  active: boolean
  notableAttacks: string
}

export interface HacktivistGroup {
  group: string
  affiliation: string
  attacks: string
}

export interface RansomwareStatistic {
  metric: string
  value: string
  source: string
  date?: string
}

export interface RansomwareFinancial {
  metric: string
  value: string
  source: string
}

export interface MajorScamType {
  type: string
  description: string
}

export interface PhishingIncident {
  incident: string
  date: string
  method: string
  impact: string
}

export interface DeepVoiceScamDetails {
  method: string
  target: string
  loss: string
  status: string
}

export interface HackingOffense {
  offense: string
  penalty: string
  imprisonment: string
  fine: string
}

export interface CyberExtortion {
  offense: string
  imprisonment: string
  fine: string
}

export interface OtherOffense {
  offense: string
  imprisonment: string
  fine: string
}

export interface KeyProvision {
  provision: string
  details: string
}

export interface KeyInstitution {
  institution: string
  role: string
  established: string
  head: string
}

export interface CouncilDetails {
  established: string
  vision: string
  head: string
  dailyBulletins: string
  distribution: string
}

export interface AeCERTDetails {
  operator: string
  role: string
  categories: string
  contact: string
  zeroDayDiscoveries: string
}

export interface DefenseCapability {
  capability: string
  status: string
}

export interface MarketSize {
  year: string
  value: string
  cagr?: string
}

export interface MenaContext {
  totalLosses: string
  insuredPortion: string
  uaeShare: string
}

export interface MarketDriver {
  driver: string
  impact: string
}

export interface ProtectionGap {
  noCyberInsurance: string
  noPlansToObtainCoverage: string
}

export interface TalentShortage {
  metric: string
  value: string
  source: string
  date: string
}

export interface HiringChallenge {
  challenge: string
  percentage: string
}

export interface RemoteWorkImpact {
  homeNetworkAttacksIncrease: string
}

export interface DataPricing {
  type: string
  priceRange: string
}

export interface DarkWebSale {
  incident: string
  date: string
  data: string
  price: string
}

export interface AIThreat {
  threat: string
  status: string
  description: string
}

export interface CriticalInfrastructureThreat {
  threat: string
  status: string
}

export interface CryptocurrencyThreat {
  threat: string
  date: string
  impact: string
}

export interface SIMSwapFraud {
  status: string
  details: string
  policeWarning: string
}

export interface ReportingChannel {
  agency: string
  service: string
  contact: string
}

export interface UAEInvestBankDetails {
  hacker: string
  ransomDemanded: string
  bankResponse: string
  dataLeaked: string
  customerCount: string
  accountBalances: string
  individualAccountUpTo: string
  darkWebSale: string
}

export interface AmericanHospitalDubaiDetails {
  attackDate: string
  discovery: string
  threatActor: string
  data: string
  impact: string
  leakedData: string
}

export interface ThreatOverview {
  dailyAttacks: string
  attackIncrease: string
  confirmedIncidents2026: number
  entitiesTargetedMarch2025: number
  ransomwareVictimsTracked: number
  aptGroupsOperating: string
  countriesTargetingUAE: number
  organizationsHostile: string
}

export interface ExecutiveSummary {
  threatOverview: ThreatOverview
  keyStatistics: KeyStatistic[]
  sentimentAnalysis: SentimentAnalysis
}

export interface AttackVolume {
  dailyStatistics: DailyAttackStatistic[]
  attackComposition: AttackComposition
  organizedThreatDistribution: ThreatDistribution[]
  officialQuote: OfficialQuote
}

export interface IranUAEConflict {
  escalationTimeline: EscalationTimeline[]
  iranianCyberEvolution: IranianCyberEvolution[]
  iranianGroupsTargetingUAE: IranianGroup[]
}

export interface AttackVectors {
  primaryVectors: AttackVector[]
  phishingStatistics: PhishingStatistic[]
  aiAttackMethods: AIAttackMethod[]
  zeroDayWarnings: ZeroDayWarning[]
}

export interface StateSponsoredThreats {
  handala: HandalaInfo
  april2026DubaiAttack: DubaiAttackEntity[]
  israelUaeCooperation: IsraelCooperation[]
  karmaHackingTool: KarmaTool
  stealthFalcon: StealthFalcon
  russiaUaeRelations: {
    sanctionsFebruary2026: SanctionInfo[]
    russiaIranCoordination: string
  }
}

export interface SectorVulnerabilities {
  protectedSectors: ProtectedSector[]
  healthcareIncidents: HealthcareIncident[]
  financialIncidents: FinancialIncident[]
  bybitHackDetails: BybitHackDetails
  governmentIncidents: GovernmentIncident[]
}

export interface ThreatActors {
  ransomwareGroups: RansomwareGroup[]
  hacktivistGroups: HacktivistGroup[]
}

export interface RansomwareLandscape {
  statistics: RansomwareStatistic[]
  financialImpact: RansomwareFinancial[]
}

export interface PhishingStats {
  phishingStats: PhishingStatistic[]
  majorScamTypes: MajorScamType[]
  phishingIncidents: PhishingIncident[]
  deepVoiceScamDetails: DeepVoiceScamDetails
}

export interface CyberLaws {
  federalLaw34_2021: {
    hackingOffenses: HackingOffense[]
    cyberExtortion: CyberExtortion[]
    otherOffenses: OtherOffense[]
  }
  keyProvisions: KeyProvision[]
}

export interface DefenseEcosystem {
  keyInstitutions: KeyInstitution[]
  councilDetails: CouncilDetails
  aeCERTDetails: AeCERTDetails
  defenseCapabilities: DefenseCapability[]
}

export interface InsuranceMarket {
  marketSize: MarketSize[]
  menaContext: MenaContext
  marketDrivers: MarketDriver[]
  protectionGap: ProtectionGap
}

export interface WorkforceGap {
  talentShortage: TalentShortage[]
  hiringChallenges: HiringChallenge[]
  remoteWorkImpact: RemoteWorkImpact
}

export interface DarkWebEconomy {
  dataPricing: DataPricing[]
  darkWebSales: DarkWebSale[]
}

export interface EmergingThreats {
  aiPoweredAttacks: AIThreat[]
  criticalInfrastructureThreats: CriticalInfrastructureThreat[]
  cryptocurrencyThreats: CryptocurrencyThreat[]
  simSwapFraud: SIMSwapFraud
}

export interface SourceReference {
  source: string
  tier: string
  credibility: string
  url: string
}

// ============================================================================
// COMPLETE CYBER THREAT DATA
// ============================================================================

export const cyberThreatData = {
  // Executive Summary
  executiveSummary: {
    threatOverview: {
      dailyAttacks: '500,000-800,000',
      attackIncrease: 'Tripled since Iran war began',
      confirmedIncidents2026: 128,
      entitiesTargetedMarch2025: 634,
      ransomwareVictimsTracked: 145,
      aptGroupsOperating: '40+',
      countriesTargetingUAE: 20,
      organizationsHostile: '40+',
    },
    keyStatistics: [
      { metric: 'Daily Cyberattacks', value: '500,000-800,000', source: 'Gulf News, Khaleej Times', date: 'Apr 2026' },
      { metric: 'Iran-linked Attack Increase', value: '3x (200K to 600K/day)', source: 'The National', date: 'Apr 2026' },
      { metric: 'Confirmed Incidents (2026)', value: '128', source: 'SecureReading', date: 'Feb 2026' },
      { metric: 'Ransomware Increase (24mo)', value: '267%', source: 'Alberr Junaid/LinkedIn', date: 'Jan 2026' },
      { metric: 'Ransomware Victims Tracked', value: '145', source: 'Ransomware.live', date: '2026' },
      { metric: 'Phishing Share of Breaches', value: '75%', source: 'UAE Cyber Security Council', date: 'Apr 2026' },
      { metric: 'Global Phishing Messages/Day', value: '3.4 billion', source: 'UAE Cyber Security Council', date: 'Apr 2026' },
      { metric: 'Organizations Lacking Skills', value: '40%', source: 'Kaspersky Study', date: 'Mar 2026' },
      { metric: 'Cyber Insurance Market (2026)', value: '$83 million', source: 'IMARC Group', date: '2026' },
      { metric: 'Projected Insurance (2034)', value: '$350 million', source: 'IMARC Group', date: '2034' },
      { metric: 'Data Breach Cost (MENA)', value: '$6.53-6.93 million', source: 'IBM Security', date: '2020-2021' },
      { metric: 'FBI Handala Bounty', value: '$10 million', source: 'FBI', date: '2026' },
    ],
    sentimentAnalysis: {
      overallThreatSentiment: 'CRITICAL - Highly Negative',
      stateSponsoredActivity: 'Escalating (Iran conflict correlation)',
      privateSectorReadiness: 'Inadequate (40% talent gap)',
      governmentResponse: 'Proactive but overwhelmed',
      uaeRelevance: 'DIRECT - National security issue',
    },
  },

  // Attack Volume
  attackVolume: {
    dailyStatistics: [
      { period: 'Pre-escalation', attacks: '~200,000/day', change: 'Baseline', source: 'Khaleej Times' },
      { period: 'Current (Apr 2026)', attacks: '600,000-800,000/day', change: '+200-300%', source: 'Gulf News, Khaleej Times' },
      { period: 'March 2026 (AI attack)', attacks: '~530,000/day', change: '+122%', source: 'Wired.me' },
      { period: 'January 2025', attacks: '~150,000-200,000/day', change: 'Baseline', source: 'GISEC Podcast' },
    ],
    attackComposition: {
      organizedGroups: 350,
      amateurHackers: 320,
      maliciousSoftwareEntities: 120,
      monitoredTelegramChannels: '~5,000',
      countriesTargetingUAE: '~20',
      hostileOrganizations: 'Over 40',
    },
    organizedThreatDistribution: [
      { category: 'State-linked groups', count: '40+', notes: 'Primarily Iran-linked' },
      { category: 'Organized criminal groups', count: '15+', notes: 'Ransomware-focused' },
      { category: 'Hacktivist collectives', count: '300+', notes: 'Various motivations' },
      { category: 'Nation-state APTs', count: '10+', notes: 'Multiple countries' },
    ],
    officialQuote: {
      text: 'The threat is constant',
      author: 'Dr. Mohammed Al Kuwaiti',
      role: 'Head of UAE Cyber Security Council',
    },
  },

  // Iran-UAE Conflict
  iranUaeConflict: {
    escalationTimeline: [
      { period: 'Pre-war baseline', attacks: '~200,000 attacks/day' },
      { period: 'War began', attacks: 'Tripled to 600,000/day' },
      { period: 'April 2026', attacks: '800,000 attacks/day recorded' },
    ],
    iranianCyberEvolution: [
      { phase: 'Early (90% DDoS)', period: 'Jan-Feb 2026', primaryMethods: 'Disruptive, short-lived', targets: 'Government portals' },
      { phase: 'Current Shift', period: 'Mar-Apr 2026', primaryMethods: 'Intrusion, ransomware, data theft', targets: 'Banks, aviation, law enforcement' },
    ],
    iranianGroupsTargetingUAE: [
      { group: 'Handala', knownActivity: 'Dubai attack, critical infrastructure' },
      { group: 'Void Manticore', knownActivity: 'Parent group for Handala' },
      { group: '313 Team', knownActivity: 'DDoS, defacement' },
      { group: 'DieNet', knownActivity: 'DDoS' },
      { group: 'Fatimion Cyber Team', knownActivity: 'Hacktivism' },
      { group: 'Fad Team', knownActivity: 'Hacktivism' },
      { group: 'ALTOUFAN TEAM', knownActivity: 'Hacktivism' },
    ],
  },

  // Attack Vectors
  attackVectors: {
    primaryVectors: [
      { vector: 'Phishing emails', percentage: '75%', trend: 'Stable', source: 'UAE Cyber Security Council' },
      { vector: 'Ransomware', percentage: '267% increase (24mo)', trend: 'Rising', source: 'Alberr Junaid/LinkedIn' },
      { vector: 'AI-enhanced attacks', percentage: 'Emerging', trend: 'Rapidly growing', source: 'Khaleej Times' },
      { vector: 'DDoS attacks', percentage: '90% of early Iran activity', trend: 'Stable', source: 'The National' },
      { vector: 'Zero-day exploits', percentage: 'Increasing', trend: 'Rising', source: 'aeCERT' },
      { vector: 'Wiper malware', percentage: 'New capability', trend: 'Emerging', source: 'Security Affairs' },
    ],
    phishingStatistics: [
      { metric: 'Global daily phishing messages', value: '3.4 billion', source: 'UAE Cyber Security Council' },
      { metric: 'UAE breach share from phishing', value: '75%', source: 'UAE Cyber Security Council' },
      { metric: 'AI-powered phishing increase', value: '90% of breaches', source: 'Gulf News' },
    ],
    aiAttackMethods: [
      { method: 'Automated malware behavior adaptation', description: 'Real-time mutation' },
      { method: 'Sophisticated phishing personalization', description: 'Deepfake voices, AI-generated content' },
      { method: 'Malicious code generation', description: 'ChatGPT, WormGPT for reconnaissance' },
      { method: 'Automated vulnerability identification', description: 'AI-driven scanning' },
    ],
    zeroDayWarnings: [
      { date: 'January 2026', vulnerability: 'WhatsApp zero-day', source: 'UAE Bank Warning', status: 'Active exploitation potential' },
      { date: 'Ongoing', vulnerability: 'Microsoft Windows zero-day', source: 'aeCERT', status: 'Under investigation' },
    ],
  },

  // State-Sponsored Threats
  stateSponsoredThreats: {
    handala: {
      alias: 'Handala, Handala Hack Team',
      attribution: 'Iran-backed Void Manticore (assessed)',
      motivation: 'Pro-Palestinian, state proxy',
      fbiBounty: '$10 million',
      activeSince: 2022,
    },
    april2026DubaiAttack: [
      { entity: 'Dubai Courts', dataDestroyed: '6 PB (claimed)', dataStolen: '149 TB (claimed)' },
      { entity: 'Dubai Land Department', dataDestroyed: '-', dataStolen: '-' },
      { entity: 'Dubai RTA', dataDestroyed: '-', dataStolen: '-' },
    ],
    israelUaeCooperation: [
      { initiative: 'Crystal Ball Platform', partners: 'Microsoft, Rafael, CPX', details: 'Threat intelligence sharing' },
      { initiative: 'Cyber Iron Dome', partners: 'UAE (recipient)', details: 'Defense assistance' },
      { initiative: 'June 2023 Attack Response', partners: 'Israel helped UAE', details: 'Confirmed by UAE cybersecurity chief' },
    ],
    karmaHackingTool: {
      type: 'iPhone exploit',
      cost: '$1.3 million (sold to UAE)',
      developer: 'American cybersecurity company',
      operators: 'Former US intelligence agents',
      targets: 'Journalists, activists, dissidents, rival officials',
      capabilities: [
        'No user interaction required (zero-click)',
        'Access to photos, messages, location',
        'Remote exploitation via iMessage',
      ],
    },
    stealthFalcon: {
      activeSince: 2012,
      targets: 'Journalists, activists, dissidents',
      malware: 'Deadglyph backdoor (discovered September 2023)',
      persistence: 'WMI event subscriptions',
      architecture: 'x64 executor + .NET orchestrator',
      modules: 'Up to 14 additional modules',
    },
    russiaUaeRelations: {
      sanctionsFebruary2026: [
        { sanctioned: '4 individuals', role: 'Acquisition and distribution of cyber tools' },
        { sanctioned: '3 entities', role: 'Harmful to US national security' },
        { sanctioned: 'Location', role: 'Russia and UAE' },
      ],
      russiaIranCoordination: 'Russia supplies cyber support to Iran; provides spy imagery to help hone attacks',
    },
  },

  // Sector Vulnerabilities
  sectorVulnerabilities: {
    protectedSectors: [
      { sector: 'Energy', priority: 'Critical', concerns: 'Industrial control systems' },
      { sector: 'ICT', priority: 'Critical', concerns: 'Digital infrastructure' },
      { sector: 'Government', priority: 'Critical', concerns: '140 attacks/month on government targets' },
      { sector: 'Electricity/Water', priority: 'Critical', concerns: 'SCADA vulnerabilities' },
      { sector: 'Finance/Insurance', priority: 'High', concerns: 'Banking sector attacks' },
      { sector: 'Emergency Services', priority: 'Critical', concerns: 'Communication systems' },
      { sector: 'Health', priority: 'High', concerns: 'Patient data, life-critical systems' },
    ],
    healthcareIncidents: [
      { facility: 'American Hospital Dubai', date: 'June 2025', actor: 'Gunra', dataStolen: '4TB (40TB leaked)', records: '450 million' },
      { facility: 'Dubai Moorfields', date: '2024', actor: 'AvosLocker', dataStolen: '60GB', records: 'ID cards, insurance, records' },
      { facility: 'Al Tadawi Specialty', date: 'June 2025', actor: 'NightSpire', dataStolen: '1.5TB', records: 'Unknown' },
      { facility: 'Dubai Health Authority', date: 'Various', actor: 'Various', dataStolen: 'Multiple', records: 'Patient records' },
    ],
    financialIncidents: [
      { institution: 'UAE InvestBank', date: '2015-2016', actor: 'Hacker Buba', data: 'Customer data', amount: '$3M ransom demanded' },
      { institution: 'Emirates NBD', date: 'February 2024', actor: 'Unknown', data: '38GB database', amount: 'Alleged' },
      { institution: 'Dubai-based exchange', date: 'February 2025', actor: 'North Korea (FBI)', data: '$1.5B', amount: 'Stolen' },
      { institution: 'Pro-Palestinian attack', date: 'July 2024', actor: 'Unknown', data: 'DDoS', amount: '6-day campaign' },
    ],
    bybitHackDetails: {
      amountStolen: '$1.5 billion (400,000+ ETH)',
      dateOfTheft: 'February 21, 2025',
      fbiAttribution: 'North Korea (TraderTraitor actors)',
      lazarusGroup: 'Confirmed involvement',
      previousRecord: '$620 million (March 2022)',
      dubaiRegulatoryStatus: 'VARA provisional approval (Sep 2024), no operational license',
    },
    governmentIncidents: [
      { entity: 'Dubai Courts', date: 'April 2026', attacker: 'Handala', method: 'Wiper malware' },
      { entity: 'Dubai Land Department', date: 'April 2026', attacker: 'Handala', method: 'Data exfiltration' },
      { entity: 'Dubai RTA', date: 'April 2026', attacker: 'Handala', method: 'Wiper malware' },
      { entity: 'Al Dhaid City Portal', date: 'June 2021', attacker: 'B4X ~ M9z', method: 'Defacement' },
      { entity: 'TRA', date: '2014', attacker: 'Iranian hacker', method: 'Defacement' },
      { entity: 'National Transport Authority', date: '2013', attacker: 'Unknown', method: 'Defacement' },
      { entity: 'Dubai Airports', date: '2013', attacker: 'Portugal Cyber Army, HighTech Brazil', method: 'DDoS' },
    ],
  },

  // Major Incidents
  majorIncidents: [
    { date: 'Feb 2026', incident: 'Terrorist cyberattacks foiled', sector: 'Multi-sector', actor: 'Terrorist-linked', impact: 'Thwarted' },
    { date: 'Mar 2025', incident: 'Global hack targeting UAE', sector: 'Multi-sector', actor: 'Unknown', impact: '634 entities targeted' },
    { date: 'Jun 2025', incident: 'American Hospital Dubai', sector: 'Healthcare', actor: 'Gunra', impact: '450M records' },
    { date: 'Jun 2025', incident: 'Al Tadawi Specialty', sector: 'Healthcare', actor: 'NightSpire', impact: '1.5TB' },
    { date: 'Jun 2024', incident: 'Dubai Municipality', sector: 'Government', actor: 'Daixin', impact: '60-80GB' },
    { date: 'Jul 2024', incident: 'Pro-Palestinian DDoS', sector: 'Banking', actor: 'Unknown', impact: '6-day campaign' },
    { date: 'Apr 2026', incident: 'Dubai government attack', sector: 'Government', actor: 'Handala', impact: '6PB destroyed, 149TB stolen' },
    { date: 'Feb 2025', incident: 'Bybit exchange', sector: 'Crypto', actor: 'Lazarus (North Korea)', impact: '$1.5B' },
  ],

  // Threat Actors
  threatActors: {
    ransomwareGroups: [
      { group: 'Lockbit5', active: true, notableAttacks: 'Multiple' },
      { group: 'Lockbit3', active: true, notableAttacks: 'Multiple' },
      { group: 'Lockbit2', active: true, notableAttacks: 'Multiple' },
      { group: 'Everest', active: true, notableAttacks: 'Unknown' },
      { group: 'Dragonforce', active: true, notableAttacks: 'Unknown' },
      { group: 'Handala', active: true, notableAttacks: 'Dubai attack' },
      { group: 'Lynx', active: true, notableAttacks: 'Unknown' },
      { group: 'Nightspire', active: true, notableAttacks: 'Al Tadawi' },
      { group: 'Incransom', active: true, notableAttacks: 'Unknown' },
      { group: 'Clop', active: true, notableAttacks: 'Multiple' },
      { group: 'Medusa', active: true, notableAttacks: 'Unknown' },
      { group: 'Qilin', active: true, notableAttacks: 'Healthcare' },
      { group: 'Akira', active: true, notableAttacks: 'Unknown' },
      { group: 'Rhysida', active: true, notableAttacks: 'Unknown' },
      { group: 'Snatch', active: true, notableAttacks: 'Unknown' },
      { group: 'Daixin', active: true, notableAttacks: 'Dubai Municipality' },
      { group: 'AvosLocker', active: true, notableAttacks: 'Dubai Moorfields' },
      { group: 'Gunra', active: true, notableAttacks: 'American Hospital Dubai' },
    ],
    hacktivistGroups: [
      { group: '313 Team', affiliation: 'Iran', attacks: 'DDoS, defacement' },
      { group: 'DieNet', affiliation: 'Iran', attacks: 'DDoS' },
      { group: 'Fatimion Cyber Team', affiliation: 'Iran', attacks: 'Hacktivism' },
      { group: 'Fad Team', affiliation: 'Iran', attacks: 'Hacktivism' },
      { group: 'ALTOUFAN TEAM', affiliation: 'Iran', attacks: 'Hacktivism' },
      { group: 'Portugal Cyber Army', affiliation: 'Unknown', attacks: 'Dubai Airports (2013)' },
      { group: 'HighTech Brazil HackTeam', affiliation: 'Unknown', attacks: 'Dubai Airports (2013)' },
    ],
  },

  // Ransomware Landscape
  ransomwareLandscape: {
    statistics: [
      { metric: 'Increase (24 months)', value: '267%', source: 'Alberr Junaid/LinkedIn', date: 'Jan 2026' },
      { metric: 'Victims tracked', value: '145', source: 'Ransomware.live', date: '2026' },
      { metric: '2024 incidents', value: '44', source: 'Oryxlabs', date: '2024' },
      { metric: '2023 incidents', value: '12', source: 'Oryxlabs', date: '2023' },
      { metric: 'Organizations affected (2020)', value: '78%', source: 'Middle East Institute', date: '2022' },
      { metric: 'New threat groups (2020)', value: '33%', source: 'Middle East Institute', date: '2022' },
    ],
    financialImpact: [
      { metric: 'Global average ransom', value: '$5 million', source: 'World Economic Forum' },
      { metric: 'UAE ransom demands (41% paid)', value: 'Various', source: 'Security Middle East' },
    ],
  },

  // Phishing Statistics
  phishingStats: {
    phishingStats: [
      { metric: 'Share of UAE breaches', value: '75%', source: 'UAE Cyber Security Council', date: 'Apr 2026' },
      { metric: 'Global daily messages', value: '3.4 billion', source: 'UAE Cyber Security Council', date: 'Apr 2026' },
      { metric: 'AI-powered phishing', value: '90% of breaches', source: 'Gulf News', date: 'Apr 2026' },
    ],
    majorScamTypes: [
      { type: 'Fake concert tickets', description: 'Fraudulent event sales' },
      { type: 'Bogus residency services', description: 'Fake visa processing' },
      { type: 'Domestic worker recruitment', description: 'Employment fraud' },
      { type: 'Unauthorized insurance', description: 'Fake policy sales' },
      { type: 'Seized vehicle sales', description: 'Non-existent deals' },
      { type: 'Parcel tracking scams', description: 'Delivery fraud' },
      { type: 'Illegal investment schemes', description: 'Financial fraud' },
      { type: 'Fake real estate', description: 'Non-existent properties' },
      { type: 'Job seeker phishing', description: 'Employment scam' },
    ],
    phishingIncidents: [
      { incident: 'Cheers Exhibition', date: '2019', method: 'Email server compromise', impact: '$53,000 stolen' },
      { incident: 'Deep Voice Scam', date: '2019', method: 'Voice cloning', impact: '$35M transferred' },
    ],
    deepVoiceScamDetails: {
      method: 'AI voice cloning technology',
      target: 'Executive impersonation',
      loss: '$35 million transferred to Hong Kong',
      status: 'Landmark case in AI-powered fraud',
    },
  },

  // Cyber Laws
  cyberLaws: {
    federalLaw34_2021: {
      hackingOffenses: [
        { offense: 'General hacking', penalty: 'Option', imprisonment: '-', fine: '100,000-300,000 AED' },
        { offense: 'Causing damage', penalty: 'Mandatory', imprisonment: '6 months minimum', fine: '150,000-500,000 AED' },
        { offense: 'Illegal purposes', penalty: 'Mandatory', imprisonment: '1 year minimum', fine: '200,000-500,000 AED' },
        { offense: 'Government systems', penalty: 'Mandatory', imprisonment: '5-7 years', fine: '250,000-1,500,000 AED' },
      ],
      cyberExtortion: [
        { offense: 'Basic offenses', imprisonment: 'Up to 2 years', fine: '250,000-500,000 AED' },
        { offense: 'Aggravated cases', imprisonment: 'Up to 10 years', fine: '-' },
      ],
      otherOffenses: [
        { offense: 'Terrorist group promotion', imprisonment: 'Life', fine: 'Up to 4 million AED' },
        { offense: 'Internet fraud', imprisonment: '1 year minimum', fine: 'Up to 1 million AED' },
        { offense: 'Privacy violations', imprisonment: '1 year minimum', fine: 'Up to 500,000 AED' },
        { offense: 'Fake news spreading', imprisonment: '-', fine: '100,000 AED' },
      ],
    },
    keyProvisions: [
      { provision: 'Attempted crimes', details: 'Up to half penalties' },
      { provision: 'Organizational liability', details: 'Yes' },
      { provision: 'Victim settlement', details: 'Possible before judgment' },
      { provision: 'Reposting false info', details: 'May face legal action' },
    ],
  },

  // Defense Ecosystem
  defenseEcosystem: {
    keyInstitutions: [
      { institution: 'UAE Cyber Security Council', role: 'National coordination', established: 'November 2020', head: 'Dr. Mohamed Al Kuwaiti' },
      { institution: 'aeCERT (TDRA)', role: 'Incident response', established: 'Ongoing', head: 'TDRA' },
      { institution: 'TDRA Computer Emergency Response Team', role: 'ICT protection', established: 'Ongoing', head: 'TDRA' },
    ],
    councilDetails: {
      established: 'November 2020',
      vision: 'Protect UAE cyberspace, maintain confidence in our digital infrastructure and institutions, and build a cyber-resilient society',
      head: 'Dr. Mohamed Al Kuwaiti',
      dailyBulletins: '200+ threat intelligence bulletins',
      distribution: 'Government and private sector',
    },
    aeCERTDetails: {
      operator: 'TDRA (Telecommunications & Digital Government Regulatory Authority)',
      role: 'Create safer cyber environment',
      categories: 'Incident Response, National Cyber Security',
      contact: 'tdra.gov.ae/en/aecert',
      zeroDayDiscoveries: 'Microsoft Windows vulnerability',
    },
    defenseCapabilities: [
      { capability: '24/7 Security Operations Centers', status: 'Active' },
      { capability: 'Real-time traffic analysis', status: 'Active' },
      { capability: 'Multilayer AI defense', status: 'Active' },
      { capability: 'International cooperation', status: 'Active (Israel, US)' },
      { capability: 'National response team', status: 'Active' },
    ],
  },

  // Insurance Market
  insuranceMarket: {
    marketSize: [
      { year: '2025', value: '$83 million' },
      { year: '2026', value: '$83.74 million' },
      { year: '2034', value: '$350.24 million', cagr: '17.29%' },
    ],
    menaContext: {
      totalLosses: '$5 billion',
      insuredPortion: '$400M-$1.5 billion',
      uaeShare: '40% of region',
    },
    marketDrivers: [
      { driver: 'Digital transformation', impact: 'High' },
      { driver: 'Regulatory tightening', impact: 'High' },
      { driver: 'Rising threat landscape', impact: 'Critical' },
      { driver: 'Past attack experience', impact: '66% experienced attacks' },
      { driver: 'Ransom demand prevalence', impact: '41% received demands' },
    ],
    protectionGap: {
      noCyberInsurance: '18%',
      noPlansToObtainCoverage: '18%',
    },
  },

  // Workforce Gap
  workforceGap: {
    talentShortage: [
      { metric: 'Organizations lacking skilled staff', value: '40%', source: 'Kaspersky study', date: 'Mar 2026' },
      { metric: 'UAE respondents citing talent gap', value: '40%', source: 'Kaspersky study', date: 'Mar 2026' },
      { metric: 'Organizations struggling to prioritize security', value: '47%', source: 'Kaspersky study', date: 'Mar 2026' },
      { metric: 'Global shortage projection', value: '1.5 million', source: 'Various', date: 'Various' },
      { metric: 'UAE residents online', value: '85%', source: 'ITsec Now', date: 'Various' },
      { metric: 'Supply chain attacks (global)', value: '1 in 3', source: 'Kaspersky', date: '2026' },
    ],
    hiringChallenges: [
      { challenge: 'UAE tech companies reporting talent shortage', percentage: '90%' },
      { challenge: 'Finding AI specialists', percentage: '43% struggle' },
      { challenge: 'Security prioritization', percentage: '47% struggle' },
    ],
    remoteWorkImpact: {
      homeNetworkAttacksIncrease: '40%',
    },
  },

  // Dark Web Economy
  darkWebEconomy: {
    dataPricing: [
      { type: 'Per database', priceRange: '$257-$50,000' },
      { type: 'UAE InvestBank data', priceRange: '$22.80' },
      { type: 'Patient records', priceRange: 'Higher than credit cards' },
      { type: 'Dubai property owner records', priceRange: '~200,000 owners' },
    ],
    darkWebSales: [
      { incident: 'UAE InvestBank', date: '2016', data: 'Customer data', price: '$22.80' },
      { incident: 'NordVPN study', date: '2022', data: 'UAE personal data total', price: '$17.3 million' },
      { incident: 'Dkhoon Emirates', date: 'Various', data: '1.1 million customers', price: 'For sale' },
      { incident: 'Dubai Property Owners', date: '2026', data: '~200,000 records', price: 'For sale' },
    ],
  },

  // Emerging Threats
  emergingThreats: {
    aiPoweredAttacks: [
      { threat: 'Automated malware mutation', status: 'Active', description: 'Real-time behavior adaptation' },
      { threat: 'Deepfake voice fraud', status: 'Active', description: '$35M loss recorded' },
      { threat: 'AI-generated phishing', status: '90% of breaches', description: 'Gulf News report' },
      { threat: 'ChatGPT/WormGPT for attacks', status: 'Active', description: 'Iranian groups using' },
    ],
    criticalInfrastructureThreats: [
      { threat: 'SCADA targeting', status: 'Active' },
      { threat: 'Energy sector attacks', status: 'Active' },
      { threat: 'Amazon Cloud UAE/Bahrain', status: 'March 2026' },
    ],
    cryptocurrencyThreats: [
      { threat: 'Bybit hack', date: 'Feb 2025', impact: '$1.5B stolen' },
      { threat: 'Lazarus Group activity', date: 'Ongoing', impact: 'Major threat' },
    ],
    simSwapFraud: {
      status: 'Active in UAE',
      details: 'Voice cloning, OTP theft',
      policeWarning: 'Amid conflict',
    },
  },

  // Reporting Channels
  reportingChannels: [
    { agency: 'Abu Dhabi Police', service: 'Aman service', contact: '8002626' },
    { agency: 'Abu Dhabi Police', service: 'SMS', contact: '2828' },
    { agency: 'Abu Dhabi Police', service: 'Email', contact: 'aman@adpolice.gov.ae' },
    { agency: 'Dubai Police', service: 'e-Crime platform', contact: 'Online' },
  ],

  // Detailed Incident Information
  uaeInvestBankDetails: {
    hacker: 'Hacker Buba',
    ransomDemanded: '$3 million (Bitcoin)',
    bankResponse: 'Refused to pay',
    dataLeaked: 'Names, addresses, passport numbers, phone numbers, account numbers, credit card numbers with CVV',
    customerCount: '~40,000',
    accountBalances: 'Exceeding $110 million total',
    individualAccountUpTo: '$12.8 million',
    darkWebSale: 'Data sold for $22.80 USD',
  },
  americanHospitalDubaiDetails: {
    attackDate: 'June 1, 2025',
    discovery: 'July 15, 2025',
    threatActor: 'Gunra (newly emergent ransomware group)',
    data: 'Cerner Millennium database (Oracle Health EHR) compromised',
    impact: 'Entire EHR went dark for two weeks',
    leakedData: 'Fertility notes, oncology plans, financial information',
  },

  // Sources
  sources: [
    { source: 'Gulf News - UAE faces 800,000 cyberattacks daily', tier: 'TIER_1', credibility: 'High', url: 'https://gulfnews.com/uae/crime/uae-faces-800000cyberattacks-daily-despite-lull-1.500513370' },
    { source: 'Khaleej Times - Cyberattacks triple to 600,000', tier: 'TIER_1', credibility: 'High', url: 'https://www.khaleejtimes.com/business/uae-cyberattacks-triple-to-600000-amid-iran-conflict-says-cybersecurity-chief' },
    { source: 'The National - Iranian cyber attacks shift to complex threats', tier: 'TIER_1', credibility: 'High', url: 'https://www.thenationalnews.com/future/technology/2026/04/10/iranian-cyber-attacks-move-from-disruptive-to-complex-threats-in-gulf/' },
    { source: 'Security Affairs - Dubai government attack', tier: 'TIER_2', credibility: 'Medium-High', url: 'https://securityaffairs.com' },
    { source: 'FBI IC3 - Bybit hack attribution', tier: 'TIER_0', credibility: 'Very High', url: 'https://www.ic3.gov/psa/2025/psa250226' },
    { source: 'UAE Cyber Security Council', tier: 'TIER_0', credibility: 'Very High', url: 'https://government.ae' },
    { source: 'Ransomware.live', tier: 'TIER_2', credibility: 'Medium', url: 'https://ransomware.live' },
    { source: 'SCWorld - American Hospital Dubai', tier: 'TIER_2', credibility: 'Medium-High', url: 'https://scworld.com' },
  ] as SourceReference[],
}

// Export types for use in components
export type CyberThreatData = typeof cyberThreatData
