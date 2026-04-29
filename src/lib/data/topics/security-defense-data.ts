// @ts-nocheck
/**
 * Security & Defense Topic Data
 *
 * Comprehensive TypeScript data for the Security & Defense topic (H-S-P-B-C Framework).
 * Extracted from UAE National Digital Intelligence Platform MD file 2-3-security-defense-results.md
 *
 * @fileOverview Security & Defense intelligence data covering internal security and defense/military
 */

import type {
  TopicAnalysis,
  TierLevel,
  AlertLevel,
  TrendData,
  KeyFinding,
  SourceReference,
  SentimentBreakdown,
  UAERelevance,
  CredibilityScore,
} from '@/lib/data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  source: string
  lastEnriched: string
  enrichmentSources: string[]
}

export const executionMetadata: ExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 32,
  pagesFetched: 24,
  source: 'UAE National Media Intelligence Platform Micro-Query File 2-3',
  lastEnriched: '2026-04-27',
  enrichmentSources: [
    'Wikipedia',
    'Gulf News',
    'State.gov',
    'EDGE Group',
    'NCEMA',
    'UAE Government Portal',
    'Al Jazeera',
    'Forbes',
    'Amnesty International',
    'HRW',
    'Reuters',
    'BBC',
  ],
}

// ============================================================================
// QUERY PATTERNS
// ============================================================================

export interface QueryPattern {
  number: number
  pattern: string
  status: string
}

export const queryPatterns: QueryPattern[] = [
  { number: 1, pattern: 'UAE Ministry of Interior security', status: 'Executed' },
  { number: 2, pattern: 'UAE counter-terrorism', status: 'Executed' },
  { number: 3, pattern: 'UAE cyber security', status: 'Executed' },
  { number: 4, pattern: 'UAE EDGE Group defense', status: 'Executed' },
  { number: 5, pattern: 'UAE military armed forces', status: 'Executed' },
  { number: 6, pattern: 'UAE human trafficking', status: 'Rate limited' },
  { number: 7, pattern: 'UAE police Dubai Abu Dhabi', status: 'Executed' },
  { number: 8, pattern: 'UAE surveillance CCTV smart city', status: 'Executed' },
  { number: 9, pattern: 'UAE secret prison detention', status: 'Executed' },
  { number: 10, pattern: 'UAE DarkMatter cyber', status: 'Executed' },
  { number: 11, pattern: 'UAE torture rights abuse', status: 'Executed' },
  { number: 12, pattern: 'UAE crime rate safety', status: 'Executed' },
  { number: 13, pattern: 'UAE drug trafficking narcotics', status: 'Rate limited' },
  { number: 14, pattern: 'UAE death penalty execution', status: 'Rate limited' },
  { number: 15, pattern: 'UAE prison conditions detention', status: 'Executed' },
  { number: 16, pattern: 'UAE private security company mercenary', status: 'Executed' },
  { number: 17, pattern: 'UAE conscription national service', status: 'Executed' },
  { number: 18, pattern: 'UAE arms deal F-35', status: 'Executed' },
  { number: 19, pattern: 'UAE arms deal weapons', status: 'Rate limited' },
  { number: 20, pattern: 'UAE intelligence agency', status: 'Rate limited' },
  { number: 21, pattern: 'UAE drone technology UAV', status: 'Rate limited' },
  { number: 22, pattern: 'UAE missile defense THAAD Patriot', status: 'Executed' },
  { number: 23, pattern: 'UAE Special Forces', status: 'Executed' },
  { number: 24, pattern: 'UAE civil defense emergency', status: 'Executed' },
  { number: 25, pattern: 'UAE Interpol fugitive', status: 'Executed' },
  { number: 26, pattern: 'UAE NSO Group spyware', status: 'Executed' },
  { number: 27, pattern: 'UAE forensic architecture surveillance', status: 'Executed' },
  { number: 28, pattern: 'UAE border security immigration', status: 'Executed' },
  { number: 29, pattern: 'UAE financial crime fraud', status: 'Executed' },
  { number: 30, pattern: 'UAE enforced disappearance', status: 'Executed' },
  { number: 31, pattern: 'UAE domestic worker kafala', status: 'Executed' },
  { number: 32, pattern: 'UAE freedom expression speech', status: 'Executed' },
  { number: 33, pattern: 'UAE Barakah nuclear energy', status: 'Executed' },
  { number: 34, pattern: 'UAE naval forces maritime', status: 'Executed' },
  { number: 35, pattern: 'UAE military casualty Yemen', status: 'Executed' },
  { number: 36, pattern: 'UAE Iran military cooperation', status: 'Executed' },
  { number: 37, pattern: 'UAE France military defense', status: 'Executed' },
]

// ============================================================================
// SUMMARY STATISTICS
// ============================================================================

export interface SummaryStatistics {
  totalQueriesAttempted: number
  queriesSuccessfullyExecuted: number
  queriesRateLimited: number
  resultPagesFetched: number
  independentSourcesCited: number
  keyTopicsCovered: number
  urlsAnalyzed: number
}

export const summaryStatistics: SummaryStatistics = {
  totalQueriesAttempted: 37,
  queriesSuccessfullyExecuted: 28,
  queriesRateLimited: 9,
  resultPagesFetched: 24,
  independentSourcesCited: 47,
  keyTopicsCovered: 14,
  urlsAnalyzed: 15,
}

// ============================================================================
// DASHBOARD DATA TABLES
// ============================================================================

// Defense Spending
export interface DefenseSpendingData {
  year: number
  budget: number
  gdpPercent: number
}

export const defenseSpendingData: DefenseSpendingData[] = [
  { year: 2024, budget: 24.4, gdpPercent: 5.6 },
  { year: 2026, budget: 27.0, gdpPercent: 5.5 },
]

// Military Personnel
export interface MilitaryPersonnelData {
  branch: string
  personnel: number
  role: string
}

export const militaryPersonnelData: MilitaryPersonnelData[] = [
  { branch: 'Total Active', personnel: 65000, role: 'All branches' },
  { branch: 'Reserves', personnel: 130000, role: 'All branches' },
  { branch: 'UAE Army', personnel: 44000, role: 'Ground operations, 8 brigades' },
  { branch: 'UAE Navy', personnel: 3000, role: 'Maritime defense, 79 vessels' },
  { branch: 'UAE Air Force', personnel: 4000, role: 'Air superiority' },
  { branch: 'Presidential Guard', personnel: 12000, role: 'Special operations' },
]

// EDGE Group Metrics
export interface EdgeGroupMetrics {
  metric: string
  value: string
}

export const edgeGroupMetrics: EdgeGroupMetrics[] = [
  { metric: 'Founded', value: '2019' },
  { metric: 'Employees', value: '12,000+' },
  { metric: 'Subsidiaries', value: '25' },
  { metric: '2022 Orders', value: '$5B+' },
  { metric: 'Export Revenue', value: '$1.67B' },
  { metric: 'Global Rank (SIPRI)', value: '22nd' },
  { metric: 'SIPRI Rank (2020)', value: '22nd' },
  { metric: 'Defense News Rank (2021)', value: '24th' },
  { metric: 'R&D Investment', value: '15% of revenue' },
  { metric: 'Export Markets', value: "40+ countries" },
]

// EDGE Group Acquisitions
export interface EdgeGroupAcquisition {
  company: string
  type: string
  date: string
}

export const edgeGroupAcquisitions: EdgeGroupAcquisition[] = [
  { company: 'Milrem Robotics', type: 'Estonian robotics', date: 'Feb 2023' },
  { company: 'DIGITAL14 / KATIM', type: 'Cybersecurity', date: '2022' },
  { company: 'OryxLabs', type: 'Cybersecurity', date: 'July 2023' },
  { company: 'Etimad Holding', type: 'Technology services', date: 'July 2023' },
  { company: 'SIATT', type: 'Brazilian weapons', date: 'Sept 2023' },
  { company: 'ANAVIA', type: 'Swiss VTOL (52%)', date: 'Nov 2023' },
  { company: 'FLARIS', type: 'Polish aircraft (50%)', date: 'Nov 2023' },
  { company: 'Strategic Development Fund', type: 'Investment', date: 'Dec 2023' },
  { company: 'International Golden Group', type: 'Majority stake', date: 'Jan 2024' },
  { company: 'Condor Non-Lethal', type: 'Brazil tech (51%)', date: 'May 2024' },
]

// EDGE Group Key Products
export interface EdgeGroupProduct {
  product: string
  type: string
}

export const edgeGroupProducts: EdgeGroupProduct[] = [
  { product: 'Desert Sting, Thunder missiles', type: 'Precision-guided munitions' },
  { product: 'UAVs', type: 'Unmanned aerial vehicles' },
  { product: 'HUNTER series', type: 'Loitering munitions' },
  { product: 'VTOL drones', type: 'Vertical takeoff drones' },
  { product: 'MANSUP series', type: 'Anti-ship missile systems' },
  { product: 'KATIM', type: 'Cybersecurity/secure communications' },
  { product: 'BR71 MKII', type: '71-metre corvettes' },
  { product: 'HT-100', type: 'Unmanned helicopters' },
]

// Barakah Nuclear Plant
export interface BarakahUnit {
  unit: number
  capacity: string
  commercialOperation: string
}

export const barakahUnits: BarakahUnit[] = [
  { unit: 1, capacity: '1,400 MW', commercialOperation: 'April 2021' },
  { unit: 2, capacity: '1,400 MW', commercialOperation: 'March 2022' },
  { unit: 3, capacity: '1,400 MW', commercialOperation: 'February 2023' },
  { unit: 4, capacity: '1,400 MW', commercialOperation: 'September 2024' },
]

// Cyber Attack Statistics
export interface CyberAttackStats {
  metric: string
  value: string
}

export const cyberAttackStats: CyberAttackStats[] = [
  { metric: 'Daily attacks', value: '500,000-700,000' },
  { metric: 'AI-powered', value: 'Yes' },
  { metric: 'Primary threat', value: 'Iran' },
  { metric: 'Intercept rate', value: '90%+' },
  { metric: 'Threat types', value: 'Reconnaissance, phishing, deepfakes, disinformation' },
  { metric: 'Zero-trust model', value: 'Adopted nationwide' },
]

// Yemen Conflict Casualties
export interface YemenCasualtyData {
  nationality: string
  deaths: string
}

export const yemenCasualtyData: YemenCasualtyData[] = [
  { nationality: 'UAE', deaths: '52+' },
  { nationality: 'Saudi Arabia', deaths: '10+' },
  { nationality: 'Bahrain', deaths: '5+' },
  { nationality: 'Yemeni allies', deaths: '36+' },
]

// UAE Navy Fleet 2026
export interface NavyFleetData {
  vesselType: string
  count: number
}

export const navyFleetData: NavyFleetData[] = [
  { vesselType: 'Total', count: 79 },
  { vesselType: 'Corvettes', count: 11 },
  { vesselType: 'Patrol Boats', count: 42 },
  { vesselType: 'Amphibious', count: 31 },
  { vesselType: 'Mine Warfare', count: 2 },
]

// UAE Missile Defense
export interface MissileDefenseData {
  system: string
  specification: string
  details: string
}

export const missileDefenseData: MissileDefenseData[] = [
  { system: 'THAAD', specification: 'Deal Signed', details: 'December 2011' },
  { system: 'THAAD', specification: 'First Intercepts', details: 'January 2022 (Houthi missile)' },
  { system: 'THAAD', specification: 'Batteries', details: '2 THAAD batteries (as of 2025)' },
  { system: 'THAAD', specification: 'Fire Units', details: '7 fire units purchased' },
  { system: 'THAAD', specification: 'Radar', details: 'Raytheon AN/TPY-2' },
  { system: 'THAAD', specification: 'Interceptor Missiles', details: '360 total' },
  { system: 'Patriot PAC-3', specification: 'Role', details: 'Terminal point defense' },
  { system: 'Patriot GEM-T', specification: 'Role', details: 'Extended terminal defense' },
]

// Arms Deals
export interface ArmsDealData {
  deal: string
  details: string
  status: string
}

export const armsDealsData: ArmsDealData[] = [
  { deal: 'F-35 Lightning II', details: '50 aircraft + 18 MQ-9 Reaper, $23.3B', status: 'Suspended December 2021' },
  { deal: 'Rafale F5', details: '5 billion euros, UAE funding withdrawn', status: 'France self-funding (April 2026)' },
  { deal: 'THAAD', details: '$10B+ investment over 40 years', status: 'Operational since 2012' },
  { deal: 'Patriot PAC-3', details: 'Acquired in 2010s', status: 'Operational' },
]

// UAE Navy Operations
export interface NavalOperation {
  operation: string
  region: string
  since: string
}

export const navalOperations: NavalOperation[] = [
  { operation: 'Yemen Civil War', region: 'Red Sea/Gulf of Aden', since: '2015' },
  { operation: 'Combined Maritime Forces', region: 'International', since: 'Various' },
  { operation: 'Strait of Hormuz', region: 'Persian Gulf', since: '2026+' },
  { operation: 'Anti-piracy', region: 'Gulf of Aden', since: 'Ongoing' },
]

// UAE Navy Corvette Classes
export interface CorvetteClass {
  class: string
  ships: number
  displacement: string
}

export const corvetteClasses: CorvetteClass[] = [
  { class: 'Bani Yas', ships: 2, displacement: '2,700 tonnes, 102m' },
  { class: 'Abu Dhabi', ships: 1, displacement: '1,650 tons' },
  { class: 'Baynunah', ships: 6, displacement: '930 tons' },
  { class: 'Muray-Jib', ships: 2, displacement: '630 tons' },
]

// Torture Methods
export interface TortureMethod {
  method: string
  description: string
}

export const tortureMethods: TortureMethod[] = [
  { method: 'Severe beatings', description: 'Physical assault with fists, whips, sticks' },
  { method: 'Electrocution', description: 'Electric cattle prods, shock torture' },
  { method: 'Denial of medical care', description: 'Withholding treatment for injuries' },
  { method: 'Stress positions', description: 'Prolonged standing, uncomfortable positions' },
  { method: 'Sleep deprivation', description: 'Continuous interrogation without rest' },
  { method: 'Isolation', description: 'Solitary confinement for extended periods' },
  { method: 'Threats to family', description: 'Targeting family members' },
  { method: 'Sexual assault', description: 'Documented in some cases' },
  { method: 'Waterboarding', description: 'Simulated drowning' },
  { method: 'Burning', description: 'Cigarettes, heated objects' },
  { method: 'Falaka', description: 'Beating soles of feet' },
  { method: 'Metal clamps', description: 'Physical restraint devices' },
  { method: 'Wooden planks with nails', description: 'Improvised torture devices' },
  { method: 'Vehicle running over', description: 'Documented in 2009 incident' },
  { method: 'Deprivation of food/water', description: 'Systematic starvation' },
]

// Mercenary Operations
export interface MercenaryOperation {
  group: string
  origin: string
  operations: string
  status: string
}

export const mercenaryOperations: MercenaryOperation[] = [
  { group: 'Spear Operations Group', origin: 'Hungarian-Israeli', operations: 'Yemen assassinations', status: 'Defunct 2018' },
  { group: 'Blackwater/Constellis', origin: 'US', operations: 'Yemen operations', status: 'Documented' },
  { group: 'Desert Wolves', origin: 'Colombian', operations: 'Libya, Sudan', status: 'Active' },
  { group: 'Global Security', origin: 'Emirati', operations: 'Mercenary recruitment', status: 'Documented' },
]

// Secret Prison Locations
export interface PrisonLocation {
  location: string
  description: string
  status: string
}

export const secretPrisonLocations: PrisonLocation[] = [
  { location: 'Riyan Airport (Mukalla)', description: 'Cargo terminal secret prison', status: 'Documented' },
  { location: 'Al-Anad Air Base', description: 'Secret detention facility', status: 'Documented' },
  { location: 'Mayfa\'a', description: 'Detention site', status: 'Documented' },
  { location: 'Shibam', description: 'Detention site', status: 'Documented' },
]

// Human Rights Cases
export interface HumanRightsCase {
  individual: string
  background: string
  status: string
}

export const humanRightsCases: HumanRightsCase[] = [
  { individual: 'Ahmed Mansoor', background: 'Human rights activist', status: 'Imprisoned (10 years, 4+ years solitary)' },
  { individual: 'Nasser bin Ghaith', background: 'Blogger/activist', status: 'Life sentence' },
  { individual: 'Abdulrahman al-Qaradawi', background: 'Poet/activist', status: 'Disappeared' },
  { individual: 'Abdulrahman Yusuf', background: 'Lebanese national', status: 'Extradited, solitary confinement' },
  { individual: 'Three Emirati sisters', background: 'Activists', status: 'Disappeared' },
  { individual: 'Qatari men (2)', background: 'Border detainees', status: 'Disappeared' },
]

// Money Laundering FATF Status
export interface FatfStatus {
  date: string
  status: string
  action: string
}

export const fatfStatusData: FatfStatus[] = [
  { date: 'March 2022', status: 'Grey-listed', action: 'FATF monitoring' },
  { date: 'February 2024', status: 'Removed', action: 'Compliant' },
  { date: 'March 2023', status: 'EU Blacklisted', action: 'High risk' },
  { date: 'July 2025', status: 'EU Removed', action: 'Compliant' },
]

// Interpol Extraditions
export interface InterpolExtradition {
  fugitive: string
  origin: string
  crime: string
  date: string
}

export const interpolExtraditions: InterpolExtradition[] = [
  { fugitive: 'Sean McGovern', origin: 'Ireland', crime: 'Most wanted', date: 'Oct 2024' },
  { fugitive: 'Roberto Carlos Alvarez Vera', origin: 'Ecuador', crime: 'Red Notice', date: 'Dec 2025' },
  { fugitive: 'Anil Kumar Reddy Yeddula', origin: 'India', crime: 'Financial crimes', date: 'Feb 2026' },
  { fugitive: 'Muhammad Asadullah', origin: 'Pakistan', crime: 'Fraud', date: 'Jan 2026' },
  { fugitive: 'Two individuals', origin: 'Belgium', crime: 'Wanted crimes', date: 'Oct 2025' },
]

// Crime Statistics
export interface CrimeStatData {
  metric: string
  uaeRate: string
  globalAverage: string
}

export const crimeStatsData: CrimeStatData[] = [
  { metric: 'Homicide (per 100K)', uaeRate: '2.6', globalAverage: '6.3' },
  { metric: 'Crime Rate (per 100K)', uaeRate: '0.47', globalAverage: 'Higher' },
  { metric: 'Numbeo Safety Index', uaeRate: '85.2 (1st safest)', globalAverage: 'N/A' },
  { metric: 'Crime Index', uaeRate: '14.8 (lowest globally)', globalAverage: 'N/A' },
]

// National Service Requirements
export interface NationalServiceData {
  category: string
  requirement: string
}

export const nationalServiceData: NationalServiceData[] = [
  { category: 'Mandatory', requirement: 'All medically fit Emirati males' },
  { category: 'Age', requirement: '18-30 (males), 18-35 (optional for females)' },
  { category: 'Duration', requirement: 'Approximately 12 months' },
  { category: 'Training', requirement: 'Basic military, specialized roles' },
  { category: 'Reserve', requirement: 'Optional after initial service' },
]

// Emergency Numbers
export interface EmergencyNumber {
  service: string
  number: string
}

export const emergencyNumbers: EmergencyNumber[] = [
  { service: 'Police', number: '999' },
  { service: 'Ambulance', number: '998' },
  { service: 'Fire/Civil Defence', number: '997' },
]

// Freedom of Expression Restrictions
export interface ExpressionRestriction {
  law: string
  penalty: string
}

export const expressionRestrictions: ExpressionRestriction[] = [
  { law: '2012 Cybercrime Decree', penalty: 'Up to 1 million dirham fine + imprisonment' },
  { law: 'WhatsApp swearing', penalty: '$68,000 fine + imprisonment' },
  { law: 'Qatar sympathy (2017)', penalty: '3-15 years imprisonment' },
  { law: 'Criticism of officials', penalty: 'Life sentence (Nasser bin Ghaith)' },
]

// UAE Safety Rankings 2025
export interface SafetyRankingData {
  index: string
  uaeScore: string
  globalRank: string
}

export const safetyRankingData: SafetyRankingData[] = [
  { index: 'Numbeo Safety Index', uaeScore: '85.2', globalRank: '1st Safest Country' },
  { index: 'Crime Index', uaeScore: '14.8', globalRank: 'Lowest globally' },
  { index: 'Global Peace Index', uaeScore: 'Top 20', globalRank: 'Improved' },
]

// Domestic Worker Statistics
export interface DomesticWorkerData {
  category: string
  figure: string
}

export const domesticWorkerData: DomesticWorkerData[] = [
  { category: 'Female domestic workers (2014)', figure: '146,000' },
  { category: 'Total migrants', figure: 'Highest proportion globally' },
  { category: 'UAE population (foreign)', figure: '~88%' },
]

// Kafala Reforms
export interface KafalaReform {
  reform: string
  provision: string
}

export const kafalaReforms: KafalaReform[] = [
  { reform: 'Ministerial Decree 766 (2015)', provision: 'Contract termination without status loss' },
  { reform: 'June 2017 Bill', provision: 'Aligns with ILO Domestic Workers Convention' },
  { reform: 'Accommodation', provision: 'Employer-provided' },
  { reform: 'Leave', provision: '30 days paid annual, 15 days sick' },
  { reform: 'Work hours', provision: '12 hours daily rest, 45-hour week' },
]

// Detention Facilities
export interface DetentionFacility {
  facility: string
  type: string
  notes: string
}

export const detentionFacilities: DetentionFacility[] = [
  { facility: 'Dubai Central Jail', type: 'Regular', notes: 'Overcrowded' },
  { facility: 'Al Wathba', type: 'Federal', notes: 'State security' },
  { facility: 'Abu Dhabi Central Prison', type: 'Regular', notes: 'Varied conditions' },
  { facility: 'Remand cells', type: 'Temporary', notes: 'Pre-trial' },
]

// NSO/Pegasus Operations
export interface NsoOperation {
  product: string
  usage: string
  status: string
}

export const nsoOperations: NsoOperation[] = [
  { product: 'Pegasus', usage: 'Spyware on dissidents', status: 'Contract ended 2021' },
  { product: 'Circles', usage: 'Surveillance systems', status: 'SCNS target' },
]

// France UAE Defense
export interface FranceUaeDefense {
  facility: string
  location: string
  type: string
}

export const franceUaeDefense: FranceUaeDefense[] = [
  { facility: 'Camp de la Paix (IMFEAU)', location: 'Abu Dhabi', type: 'Naval Air Station' },
  { facility: 'French Embassy', location: 'Abu Dhabi', type: 'Military advisory' },
]

// Iran UAE Tensions
export interface IranUaeTension {
  metric: string
  figure: string
}

export const iranUaeTensions: IranUaeTension[] = [
  { metric: 'Missiles/drones fired at UAE (since war start)', figure: '2,800+' },
  { metric: 'Diplomatic status', figure: 'Relations severed March 2026' },
  { metric: 'Civilian casualties', figure: 'Multiple' },
  { metric: 'Infrastructure damage', figure: 'Al Ruwais, Al Sader bases' },
]

// UAE Army Organization
export interface ArmyUnit {
  unit: string
  count?: string
  details: string
}

export const armyOrganization: ArmyUnit[] = [
  { unit: 'Royal Guard Brigade', details: 'Elite protection unit' },
  { unit: 'Armored Brigades', count: '2', details: 'Main battle tanks' },
  { unit: 'Mechanized Infantry Brigades', count: '3', details: 'Combined arms' },
  { unit: 'Infantry Brigades', count: '2', details: 'Standard infantry' },
  { unit: 'Artillery Regiments', count: '3', details: 'Field artillery' },
  { unit: 'Dubai additional Mechanized Infantry', count: '2', details: 'Outside union structure' },
]

// Military Exercises
export interface MilitaryExercise {
  name: string
  partner: string
  type: string
}

export const militaryExercises: MilitaryExercise[] = [
  { name: 'Falcon Shield', partner: 'China', type: 'Joint air force exercises' },
  { name: 'Desert Cyclone', partner: 'India', type: 'Military exercises' },
  { name: 'Iron Defender', partner: 'US', type: 'Naval defense exercises' },
  { name: 'Regular exercises', partner: 'Turkey, Azerbaijan, NATO members', type: 'Various' },
]

// Key Recent Developments 2026
export interface RecentDevelopment {
  number: number
  title: string
  description: string
}

export const recentDevelopments2026: RecentDevelopment[] = [
  {
    number: 1,
    title: 'Iran-UAE tensions',
    description: 'Relations severed March 2026; 2,800+ missiles/drones fired at UAE; THAAD/Patriot intercepting 90%+',
  },
  {
    number: 2,
    title: 'France mutual defense',
    description: 'Activated March 2026; Rafale jets deployed to protect French bases',
  },
  {
    number: 3,
    title: 'F-35 deal status',
    description: 'Remains suspended since December 2021',
  },
  {
    number: 4,
    title: 'UAE Libya/Sudan mercenary operations',
    description: 'Mercenary operations continuing (Colombian mercenaries, April 2026)',
  },
  {
    number: 5,
    title: 'Secret prisons Yemen',
    description: 'Continued documentation (BBC, January 2026)',
  },
  {
    number: 6,
    title: 'Cybersecurity',
    description: '500-700K attacks daily; AI-powered threats intensifying',
  },
]

// Sentiment Analysis
export interface SentimentAnalysisItem {
  topic: string
  sentiment: string
  sourceAssessment: string
}

export const sentimentAnalysis: SentimentAnalysisItem[] = [
  { topic: 'UAE government security efforts', sentiment: 'Neutral-Positive', sourceAssessment: 'Official UAE sources' },
  { topic: 'Counter-terrorism', sentiment: 'Positive', sourceAssessment: 'International cooperation' },
  { topic: 'Cybersecurity defense', sentiment: 'Positive', sourceAssessment: 'Independent sources' },
  { topic: 'Human rights violations', sentiment: 'Negative', sourceAssessment: 'HRW, Amnesty, media' },
  { topic: 'Secret prisons Yemen', sentiment: 'Negative', sourceAssessment: 'BBC, AP, Amnesty' },
  { topic: 'Labor rights (kafala)', sentiment: 'Negative', sourceAssessment: 'HRW, NGOs' },
  { topic: 'Military effectiveness', sentiment: 'Positive', sourceAssessment: 'Defense analysts' },
  { topic: 'EDGE Group growth', sentiment: 'Positive', sourceAssessment: 'Business reports' },
  { topic: 'Arms deals (F-35)', sentiment: 'Neutral', sourceAssessment: 'Mixed reports' },
]

// UAE Defense Entities
export interface DefenseEntity {
  category: string
  entity: string
  role: string
}

export const defenseEntities: DefenseEntity[] = [
  { category: 'Government Ministries', entity: 'Ministry of Interior', role: 'Federal police, security coordination' },
  { category: 'Government Ministries', entity: 'State Security Department', role: 'National security' },
  { category: 'Government Ministries', entity: 'Ministry of Defence', role: 'Military oversight' },
  { category: 'Government Ministries', entity: 'NCEMA', role: 'Emergency management' },
  { category: 'Law Enforcement', entity: 'Dubai Police', role: 'Dubai emirate' },
  { category: 'Law Enforcement', entity: 'Abu Dhabi Police', role: 'Abu Dhabi emirate' },
  { category: 'Law Enforcement', entity: 'Sharjah Police', role: 'Sharjah emirate' },
  { category: 'Law Enforcement', entity: 'Federal Police', role: 'Federal crimes' },
  { category: 'Military Branches', entity: 'UAE Army', role: 'Ground forces' },
  { category: 'Military Branches', entity: 'UAE Navy', role: 'Maritime defense' },
  { category: 'Military Branches', entity: 'UAE Air Force', role: 'Air power' },
  { category: 'Military Branches', entity: 'Presidential Guard', role: 'Special operations' },
  { category: 'Military Branches', entity: 'National Guard', role: 'Internal security' },
  { category: 'Intelligence/Surveillance', entity: 'DarkMatter (dissolved)', role: 'Cyber intelligence' },
  { category: 'Intelligence/Surveillance', entity: 'Project Raven', role: 'Foreign surveillance' },
  { category: 'Intelligence/Surveillance', entity: 'NSO Group (former)', role: 'Spyware operations' },
  { category: 'Intelligence/Surveillance', entity: 'State Security', role: 'Internal security' },
  { category: 'Defense Industry', entity: 'EDGE Group', role: 'Drones, missiles, cybersecurity' },
  { category: 'Defense Industry', entity: 'NIMR Automotive', role: 'Military vehicles' },
  { category: 'Defense Industry', entity: 'Caracal International', role: 'Small arms' },
  { category: 'Defense Industry', entity: 'Abu Dhabi Ship Building', role: 'Naval vessels' },
  { category: 'Defense Industry', entity: 'Tawazun Holding', role: 'Defense manufacturing' },
]

// Counter Terrorism Designated Organizations
export interface DesignatedOrg {
  organization: string
}

export const designatedOrganizations: DesignatedOrg[] = [
  { organization: 'Muslim Brotherhood' },
  { organization: 'Al-Qaeda' },
  { organization: 'Taliban' },
  { organization: 'Hezbollah' },
  { organization: 'Houthis' },
  { organization: 'ISIS' },
]

// Oyoon Project Data
export interface OyoonCapability {
  capability: string
}

export const oyoonCapabilities: OyoonCapability[] = [
  { capability: 'Facial recognition technology' },
  { capability: 'License plate recognition' },
  { capability: 'Behavioral analysis algorithms' },
  { capability: 'Anomaly detection systems' },
  { capability: 'Real-time threat assessment' },
]

// Key Counter Terrorism Treaty Status
export interface CtTreaty {
  treaty: string
  status: string
}

export const ctTreaties: CtTreaty[] = [
  { treaty: '1973 Protected Persons', status: 'State Party' },
  { treaty: '1979 Hostage-Taking', status: 'State Party' },
  { treaty: '1997 Bombings', status: 'State Party' },
  { treaty: '1999 Financing', status: 'State Party' },
  { treaty: '2005 Nuclear Terrorism', status: 'State Party' },
]

// Presidential Guard Structure
export interface PresidentialGuardData {
  element: string
  details: string
}

export const presidentialGuardData: PresidentialGuardData[] = [
  { element: 'Founded', details: '2011' },
  { element: 'Personnel', details: '~12,000' },
  { element: 'HQ Size', details: '31,000 sq meters' },
  { element: 'Commander-in-Chief', details: 'Mohammed bin Zayed' },
  { element: 'Unit Commander', details: 'Ali Al Kaabi' },
  { element: 'Foreign Commander', details: 'Mike Hindmarsh (Australian, former)' },
  { element: 'Motto', details: '"Allah, Watan, Ra\'is"' },
]

// Foreign Military Agreements
export interface MilitaryAgreement {
  country: string
  agreement: string
  details: string
}

export const militaryAgreements: MilitaryAgreement[] = [
  { country: 'US', agreement: 'Defense cooperation agreement (1994)', details: 'Al Dhafra Air Base hosts ~5,000 US personnel' },
  { country: 'France', agreement: 'Military base agreement (1995)', details: 'French Naval Air Station in Abu Dhabi (Camp de la Paix/IMFEAU)' },
  { country: 'UK', agreement: 'Strategic partnership', details: 'Ongoing cooperation' },
  { country: 'Israel', agreement: 'Abraham Accords (2020)', details: 'F-35 deal linked to normalization' },
]

// Barakah Safety Incidents
export interface SafetyIncident {
  date: string
  issue: string
  response: string
}

export const barakahSafetyIncidents: SafetyIncident[] = [
  { date: 'Dec 2018', issue: 'Voids in Unit 2 & 3 containment', response: 'FANR findings' },
  { date: 'Dec 2018', issue: 'Grease leak Unit 3', response: 'Investigation' },
  { date: 'Mar 2019', issue: 'Qatar IAEA complaint', response: 'UAE denial' },
]

// International Cooperation
export interface IntlCooperation {
  partner: string
  area: string
}

export const intlCooperation: IntlCooperation[] = [
  { partner: 'Korea', area: 'Korea Electric Power Corporation (Kepco) builder' },
  { partner: 'India', area: 'MoU for civil nuclear cooperation (Sept 2024)' },
  { partner: 'IAEA', area: 'Regular inspections and monitoring' },
]

// Relevance Assessment
export interface RelevanceAssessment {
  category: string
  items: string[]
}

export const relevanceAssessment: RelevanceAssessment[] = [
  {
    category: 'Critical to UAE Identity',
    items: [
      'National security and territorial integrity',
      'Regional power projection (Little Sparta)',
      'Defense manufacturing independence (EDGE Group)',
      'Counter-terrorism leadership',
      'Smart city/surveillance infrastructure',
    ],
  },
  {
    category: 'High Regional Impact',
    items: [
      'Yemen intervention and casualties',
      'Libya mercenary operations',
      'Iran-UAE tensions (2026)',
      'Qatar diplomatic crisis',
      'Israel Abraham Accords',
    ],
  },
  {
    category: 'International Significance',
    items: [
      'US defense partnership (Al Dhafra)',
      'France mutual defense activation',
      'China joint exercises',
      'Global arms industry position (SIPRI 22nd)',
      'Nuclear program (Barakah)',
    ],
  },
]

// Key Military Operations
export interface MilitaryOperationData {
  theater: string
  activity: string
  since: string
}

export const militaryOperations: MilitaryOperationData[] = [
  { theater: 'Gulf War (1990-91)', activity: 'Coalition participation', since: '1990' },
  { theater: 'UNOSOM II Somalia', activity: 'Peacekeeping', since: '1993' },
  { theater: 'Kosovo Force', activity: 'Peacekeeping', since: 'Various' },
  { theater: 'War in Afghanistan', activity: 'NATO ISAF', since: '2003' },
  { theater: 'Saudi-led Yemen intervention', activity: 'Coalition combat support', since: '2015' },
  { theater: 'Operations against ISIS Syria', activity: 'Anti-ISIS operations', since: '2015' },
]

// UAE Armed Forces Structure
export interface ArmedForcesStructure {
  branch: string
  personnel: string
  role: string
}

export const armedForcesStructure: ArmedForcesStructure[] = [
  { branch: 'UAE Army', personnel: '44,000', role: 'Ground operations, 8 brigades' },
  { branch: 'UAE Navy', personnel: '~3,000', role: 'Maritime defense, 79 vessels' },
  { branch: 'UAE Air Force', personnel: '~4,000', role: 'Air superiority' },
  { branch: 'Presidential Guard', personnel: '12,000', role: 'Special operations' },
  { branch: 'National Guard', personnel: 'varies', role: 'Internal security' },
  { branch: 'Joint Aviation Command', personnel: 'varies', role: 'Air support coordination' },
]

// Air Force Aircraft
export interface AirForceAircraft {
  aircraft: string
  type: string
}

export const airForceAircraft: AirForceAircraft[] = [
  { aircraft: 'F-16', type: 'Multirole fighters' },
  { aircraft: 'Mirage 2000', type: 'Multirole fighters' },
  { aircraft: 'Dassault Mirage 5', type: 'Ground attack' },
  { aircraft: 'Boeing C-17A Globemaster III', type: 'Transport' },
  { aircraft: 'Apache', type: 'Attack helicopters' },
]

// Equipment Suppliers
export interface EquipmentSupplier {
  country: string
}

export const equipmentSuppliers: EquipmentSupplier[] = [
  { country: 'US' },
  { country: 'France' },
  { country: 'UK' },
  { country: 'Germany' },
  { country: 'Russia' },
  { country: 'China' },
  { country: 'South Korea' },
]

// Key Military Equipment
export interface KeyEquipment {
  equipment: string
  quantity?: string
}

export const keyEquipment: KeyEquipment[] = [
  { equipment: 'F-16s', quantity: undefined },
  { equipment: 'Mirage 2000s', quantity: undefined },
  { equipment: 'Leclerc tanks', quantity: '436' },
  { equipment: 'BMP-3s', quantity: '415' },
  { equipment: 'Patriot missiles', quantity: undefined },
  { equipment: 'THAAD batteries', quantity: '2' },
]

// DarkMatter Project Raven Targets
export interface RavenTarget {
  target: string
}

export const ravenTargets: RavenTarget[] = [
  { target: "Qatar's Emir" },
  { target: "Yemeni Nobel Laureate Tawakkol Karman" },
  { target: 'Lebanese PM Saad Hariri' },
  { target: 'Hundreds across Europe/Middle East' },
]

// Key MOI Structure
export interface MoiDepartment {
  department: string
  role: string
}

export const moiDepartments: MoiDepartment[] = [
  { department: 'Traffic & Licensing', role: 'Vehicle registration, driver licensing' },
  { department: 'Civil Defense', role: 'Fire and emergency response' },
  { department: 'Police General Head Quarter', role: 'Federal police operations' },
  { department: 'Punitive and Reformatory Establishments', role: 'Prison system' },
  { department: 'Community Police Branch', role: 'Community engagement' },
  { department: 'Strategic Direction unit', role: 'Policy planning' },
]

// NCEMA Responsibilities
export interface NcemaResponsibility {
  area: string
}

export const ncemaResponsibilities: NcemaResponsibility[] = [
  { area: 'Natural Disasters: Earthquakes, floods, sandstorms' },
  { area: 'Power Outages: National grid emergencies' },
  { area: 'War Emergencies: Conflict-related crises' },
  { area: 'Sabotage: Infrastructure attacks' },
  { area: 'Public Health: Pandemic response' },
]

// Smart Police Station Features
export interface SmartPoliceFeature {
  feature: string
}

export const smartPoliceFeatures: SmartPoliceFeature[] = [
  { feature: 'First launched in Dubai' },
  { feature: '24/7 self-service police stations' },
  { feature: 'Services without human intervention' },
  { feature: 'Now exported internationally (Serbia, Netherlands)' },
]

// Documented Abuse Types
export interface AbuseType {
  type: string
  description: string
}

export const abuseTypes: AbuseType[] = [
  { type: 'Passport confiscation', description: 'Illegal but widespread' },
  { type: 'Wage theft', description: 'Partial or full non-payment' },
  { type: 'Excessive overtime', description: 'Up to 21 hours/day' },
  { type: 'Food deprivation', description: 'Insufficient meals' },
  { type: 'Medical neglect', description: 'Denial of healthcare' },
  { type: 'Physical/sexual abuse', description: 'Documented cases' },
]

// Enforcement Actions
export interface EnforcementAction {
  date: string
  action: string
}

export const enforcementActions: EnforcementAction[] = [
  { date: 'September 2021', action: 'Marc Baier, Ryan Adams, Daniel Gericke indicted' },
  { date: 'September 2021', action: '$1.68 million total fines' },
  { date: 'September 2021', action: 'Lifetime US security clearance bans' },
  { date: '2021', action: 'Cyber activities transferred to Digital14' },
  { date: '2021', action: 'Original DarkMatter entity dissolved' },
  { date: '2021', action: 'Expo 2020 dropped as security provider' },
]

// Yemen Major Incidents
export interface YemenIncident {
  date: string
  casualties: string
  details: string
}

export const yemenIncidents: YemenIncident[] = [
  { date: 'Sept 4, 2015', casualties: '52 Emirati', details: 'Largest single loss, Marib Tochka missile' },
  { date: 'June 13, 2018', casualties: '4 Emirati', details: 'Hudaida assault' },
  { date: 'Multiple', casualties: 'Various', details: 'Ongoing operations' },
]

// Red Notice Operations
export interface RedNoticeOp {
  detail: string
}

export const redNoticeOps: RedNoticeOp[] = [
  { detail: 'Dubai Police and Abu Dhabi Police handle arrests' },
  { detail: 'Ministry of Interior coordinates extraditions' },
  { detail: 'International cooperation with 190+ countries' },
]

// Counter Terrorism Framework
export interface CtFramework {
  framework: string
  details: string
}

export const ctFramework: CtFramework[] = [
  { framework: '2014 Law on Combatting Terrorism Crimes', details: 'Primary CT legislation with death penalty provisions' },
  { framework: 'Designated Organizations (83 total)', details: 'Muslim Brotherhood, Al-Qaeda, Taliban, Hezbollah, Houthis, ISIS' },
  { framework: 'Higher Committee for Crises and Terrorist Acts Management (HCCTAM)', details: 'Coordinates national CT response' },
  { framework: 'Treaty Compliance', details: 'State Party to all major UN conventions' },
]

// Counter Terrorism Penalties
export interface CtPenalty {
  offense: string
  penalty: string
}

export const ctPenalties: CtPenalty[] = [
  { offense: 'Terror acts resulting in death', penalty: 'Death penalty' },
  { offense: 'Undergoing military training with terrorist organization', penalty: 'Life or 10+ years imprisonment' },
  { offense: 'Unauthorized disclosure of state security secrets', penalty: 'Article 432 criminalization' },
]

// Critical Infrastructure Sectors
export interface InfraSector {
  sector: string
}

export const criticalInfraSectors: InfraSector[] = [
  { sector: 'Energy' },
  { sector: 'Water' },
  { sector: 'Healthcare' },
  { sector: 'Transportation' },
  { sector: 'Telecommunications' },
  { sector: 'Financial services' },
]

// Defense Spending Chart Data
export interface DefenseSpendingChartData {
  year: string
  budget: number
  gdp: number
}

export const defenseSpendingChartData: DefenseSpendingChartData[] = [
  { year: '2024', budget: 24.4, gdp: 5.6 },
  { year: '2026', budget: 27.0, gdp: 5.5 },
]

// EDGE Group Revenue Chart Data
export interface EdgeRevenueChartData {
  year: string
  orders: number
  exports: number
}

export const edgeRevenueChartData: EdgeRevenueChartData[] = [
  { year: '2019', orders: 0, exports: 0 },
  { year: '2020', orders: 2.5, exports: 0.3 },
  { year: '2021', orders: 3.5, exports: 0.6 },
  { year: '2022', orders: 5.0, exports: 1.67 },
]

// UAE Navy Fleet Chart Data
export interface NavyFleetChartData {
  type: string
  count: number
  fill: string
}

export const navyFleetChartData: NavyFleetChartData[] = [
  { type: 'Corvettes', count: 11, fill: '#6366F1' },
  { type: 'Patrol Boats', count: 42, fill: '#F59E0B' },
  { type: 'Amphibious', count: 31, fill: '#10B981' },
  { type: 'Mine Warfare', count: 2, fill: '#EC4899' },
]

// Security Events Timeline
export interface SecurityEventTimeline {
  year: string
  event: string
}

export const securityEventsTimeline: SecurityEventTimeline[] = [
  { year: '1971', event: 'UAE Ministry of Interior established' },
  { year: '2011', event: 'Presidential Guard formed from merger' },
  { year: '2014', event: '83 terrorist organizations designated' },
  { year: '2015', event: 'Saudi-led Yemen intervention begins' },
  { year: '2019', event: 'EDGE Group founded (November 5)' },
  { year: '2021', event: 'Abraham Accords; DarkMatter dissolved' },
  { year: '2022', event: 'THAAD first operational intercept' },
  { year: '2026', event: 'Iran-UAE relations severed; France mutual defense activated' },
]

// ============================================================================
// MAIN TOPIC ANALYSIS EXPORT
// ============================================================================

export const securityDefenseData: TopicAnalysis = {
  id: 'topic-2-3',
  sector: 'safety',
  title: 'Security & Defense',
  titleAr: 'الأمن والدفاع',
  description:
    'Armed forces structure, EDGE Group, nuclear program, missile defense, military operations, cyber attacks, regional conflicts, counter-terrorism, surveillance, human rights',
  keyFindings: [
    {
      finding: 'Defense Budget 2026: $27B (5.5% GDP)',
      metric: '$27B',
      source: 'SIPRI/Government',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Armed Forces: 65,000 active, 130,000 reserves',
      metric: '65,000',
      source: 'UAE Government',
      tier: 0 as TierLevel,
    },
    {
      finding: 'EDGE Group: 12,000+ employees, 25 subsidiaries, ranked 22nd globally (SIPRI)',
      metric: '22nd',
      source: 'SIPRI',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Barakah Nuclear: 5,600 MW capacity (4 units fully operational)',
      metric: '5,600 MW',
      source: 'World Nuclear Association',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Cyber Attacks: 500,000-700,000 daily',
      metric: '600,000',
      source: 'NCEMA',
      tier: 1 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'THAAD/Patriot: Intercepting 90%+ of Iranian attacks (2026)',
      metric: '90%',
      source: 'Government statements',
      tier: 1 as TierLevel,
    },
    {
      finding: 'UAE Navy Fleet 2026: 79 ships (11 corvettes, 42 patrol boats)',
      metric: '79',
      source: 'UAE Navy',
      tier: 0 as TierLevel,
    },
    {
      finding: 'Yemen casualties: 52+ UAE soldiers killed',
      metric: '52+',
      source: 'Media reports',
      tier: 2 as TierLevel,
    },
    {
      finding: 'F-35 Deal: Suspended since December 2021 ($23B for 50 aircraft)',
      metric: 'Suspended',
      source: 'AGSI',
      tier: 2 as TierLevel,
      alert: 'YELLOW' as AlertLevel,
    },
    {
      finding: 'UAE ranked safest country in world 2025 (Numbeo Safety Index)',
      metric: '1st',
      source: 'Numbeo',
      tier: 0 as TierLevel,
    },
    {
      finding: 'Iran-UAE relations severed March 2026; 2,800+ missiles/drones fired',
      metric: '2,800+',
      source: 'Multiple sources',
      tier: 1 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'France activated mutual defense agreement March 2026',
      metric: 'Activated',
      source: 'France24/Al-Monitor',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Secret prisons in Yemen documented by BBC, AP, Amnesty',
      metric: 'Documented',
      source: 'BBC/AP/Amnesty',
      tier: 2 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'Counter-terrorism: 83 organizations designated in 2014',
      metric: '83',
      source: 'UAE Government',
      tier: 1 as TierLevel,
    },
    {
      finding: 'UAE earned "Little Sparta" nickname from US defense officials',
      metric: 'Nickname',
      source: 'US Defense officials',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Torture methods: 16 documented types including beatings, electrocution, waterboarding',
      metric: '16 types',
      source: 'Arab Organisation of Human Rights',
      tier: 2 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'Human rights violations: 94 UAE94 activists imprisoned, Ahmed Mansoor 10 years solitary',
      metric: '94+',
      source: 'HRW/Amnesty',
      tier: 2 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'DarkMatter Project Raven: Karma spyware hacked iPhones worldwide including Loujain al-Hathloul',
      metric: 'Documented',
      source: 'EFF/Reuters',
      tier: 2 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
    {
      finding: 'NSO Group/Pegasus: UAE contract terminated 2021 after hacking rivals exposed',
      metric: 'Terminated',
      source: 'Reuters/BBC',
      tier: 2 as TierLevel,
      alert: 'YELLOW' as AlertLevel,
    },
    {
      finding: 'Kafala system reforms: 2015-2017 aligned with ILO Domestic Workers Convention',
      metric: 'Reformed',
      source: 'UAE Government/ILO',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Conscription: Mandatory for medically fit Emirati males 18-30, approx 12 months',
      metric: 'Mandatory',
      source: 'Federal Law No. 6 of 2014',
      tier: 0 as TierLevel,
    },
    {
      finding: 'FATF grey list removed February 2024; EU blacklisted removed July 2025',
      metric: 'Removed',
      source: 'FATF',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Presidential Guard: 12,000 personnel, elite special operations, "tip of the spear"',
      metric: '12,000',
      source: 'Wikipedia/Janes',
      tier: 1 as TierLevel,
    },
    {
      finding: 'Barakah Nuclear Safety: 400 adverse FANR findings, voids in containment (Units 2&3)',
      metric: '400',
      source: 'World Nuclear Association',
      tier: 2 as TierLevel,
      alert: 'YELLOW' as AlertLevel,
    },
    {
      finding: 'Supercartel: Dubai-based drug operation by Edin Gacanin',
      metric: 'Active',
      source: 'Wikipedia',
      tier: 2 as TierLevel,
      alert: 'YELLOW' as AlertLevel,
    },
    {
      finding: 'Freedom of expression: Life sentences for tweets (Nasser bin Ghaith), $68K fine for WhatsApp swearing',
      metric: 'Restricted',
      source: 'Wikipedia/HRW',
      tier: 2 as TierLevel,
      alert: 'RED' as AlertLevel,
    },
  ] as KeyFinding[],
  metrics: {
    volume: 620000,
    reach: 8900000,
    engagement: 340000,
    sentiment: { positive: 48, negative: 32, neutral: 20, overall: 16, volume: 620000 },
    trend: { direction: 'rising' as const, changePercent: 15, period: '2025-2026', value: 27 },
  },
  sentiment: { positive: 48, negative: 32, neutral: 20, overall: 16, volume: 620000 },
  emotions: {
    joy: 35,
    trust: 45,
    fear: 55,
    surprise: 40,
    sadness: 25,
    disgust: 20,
    anger: 30,
    anticipation: 35,
  },
  credibility: { tier: 1 as TierLevel, score: 78, sources: 47, lastVerified: '2026-04-27' },
  uaeRelevance: {
    score: 99,
    level: 'critical' as const,
    justification: 'Security and defense are existential for UAE national survival and regional power projection',
  },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 15, period: '2025-2026', value: 27 },
    { direction: 'rising' as const, changePercent: 10, period: '2024-2025', value: 24.4 },
  ] as TrendData[],
  stakeholders: [
    'President MBZ (C-in-C)',
    'Ministry of Defence',
    'Armed Forces',
    'EDGE Group',
    'NCEMA',
    'Ministry of Interior',
    'State Security',
    'UAE Navy',
    'UAE Air Force',
    'Presidential Guard',
  ],
  relatedEntities: [
    'US (Al Dhafra base)',
    'France (Rafale deal)',
    'SIPRI',
    'NSO Group',
    'DarkMatter',
    'Saudi-led Coalition',
    'Iran',
    'Israel',
  ],
  sources: [
    { name: 'SIPRI', url: 'https://www.sipri.org', tier: 1 as TierLevel, date: '2024' },
    { name: 'World Nuclear Association', url: 'https://www.world-nuclear.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Gulf News', url: 'https://gulfnews.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'NCEMA', url: 'https://ncema.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'EDGE Group', url: 'https://edgegroup.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Amnesty International', url: 'https://amnesty.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'HRW', url: 'https://hrw.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'BBC', url: 'https://bbc.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'Reuters', url: 'https://reuters.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'Forbes', url: 'https://forbes.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'Wikipedia', url: 'https://wikipedia.org', tier: 2 as TierLevel, date: '2026' },
  ] as SourceReference[],
  lastUpdated: '2026-04-27',
}
