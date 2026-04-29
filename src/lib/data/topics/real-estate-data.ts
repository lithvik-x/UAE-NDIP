// @ts-nocheck
/**
 * Real Estate & Urban Development - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-14-real-estate-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  marketPerformance: {
    dubaiTransactionVolume: string
    dubaiTransactionCount: string
    uaeMarketProjection: string
    yearOverYearGrowth: string
    offPlanSalesShare: string
  }
  criticalConcerns: {
    fitchPrediction: string
    ubbsBubbleIndex: string
    newHousingUnits: string
    rentalDefaults: string
  }
  structuralIssues: {
    greenSpacePercent: string
    modernSlaveryCount: string
    maxAffordableSalePrice: string
    gentrificationRanking: string
  }
  sentiment: string
}

export const executiveSummary = {
  marketPerformance: {
    dubaiTransactionVolume: 'AED 761 billion',
    dubaiTransactionCount: '226,000 transactions',
    uaeMarketProjection: 'AED 2.6 trillion',
    yearOverYearGrowth: '36%',
    offPlanSalesShare: '68%'
  },
  criticalConcerns: {
    fitchPrediction: 'Double-digit price declines',
    ubbsBubbleIndex: '0.64 (moderate risk)',
    newHousingUnits: '210,000',
    rentalDefaults: 'More than doubled in one year'
  },
  structuralIssues: {
    greenSpacePercent: '2-3%',
    modernSlaveryCount: '132,000',
    maxAffordableSalePrice: 'AED 790,000',
    gentrificationRanking: '2nd worldwide for displacement'
  },
  sentiment: 'Predominantly negative/cautious for long-term sustainability, positive for short-term investment returns'
} as ExecutiveSummary

// ============================================================================
// SECTION 2: REAL ESTATE MARKET OVERVIEW
// ============================================================================

export interface MarketSizeGrowth {
  metric: string
  value: string
  source: string
  date: string
}

export interface PriceMetric {
  location: string
  priceMetric: string
  value: string
  date?: string
}

export interface RentalYield {
  propertyType: string
  grossYield: string
  source: string
  date: string
}

export interface OwnershipLaw {
  law: string
  description: string
  year?: string
}

export interface KeyDeveloper {
  developer: string
  focus: string
  notableProjects: string
}

export interface UHNWIStatistic {
  metric: string
  value: string
  projectionYear?: string
}

export const realEstateMarketOverview = {
  marketSizeGrowth: [
    { metric: 'Dubai Transaction Volume', value: 'AED 761 billion', source: 'Wikipedia/Savills', date: '2024' },
    { metric: 'Dubai Transaction Count', value: '226,000', source: 'Wikipedia/Savills', date: '2024' },
    { metric: 'UAE Market Projection', value: 'AED 2.6 trillion', source: 'Multiple sources', date: '2024' },
    { metric: 'Residential Transaction Growth', value: '47% YoY', source: 'Savills', date: '2024' },
    { metric: 'Off-Plan Sales Share', value: '68%', source: 'Savills', date: '2024' },
    { metric: '2021 Transactions', value: 'AED 155 billion (49,862 deals)', source: 'Wikipedia', date: '2021' },
    { metric: 'Mid-2025 Sales', value: 'AED 431 billion', source: 'Wikipedia', date: '2025' }
  ] as MarketSizeGrowth[],
  priceMetrics: [
    { location: 'UAE Average Asking Price', priceMetric: 'AED', value: '4,380,000', date: '2024' },
    { location: 'Dubai City Centre', priceMetric: 'per sq ft', value: 'AED 2,062', date: 'Oct 2024' },
    { location: 'Abu Dhabi Apartments', priceMetric: 'YoY change', value: '+4.3%', date: 'Q1 2024' },
    { location: 'Abu Dhabi Villas', priceMetric: 'YoY change', value: '+2.3%', date: 'Q1 2024' }
  ] as PriceMetric[],
  rentalYields: [
    { propertyType: 'Apartments', grossYield: '7%', source: 'Engel & Volkers', date: 'Dec 2025' },
    { propertyType: 'Villas/Townhouses', grossYield: '5%', source: 'Engel & Volkers', date: 'Dec 2025' },
    { propertyType: 'Prime Residential', grossYield: '5% (2nd highest globally)', source: 'Savills', date: 'H1 2024' },
    { propertyType: 'Rental Growth H1 2024', grossYield: '12.1%', source: 'Savills', date: 'H1 2024' }
  ] as RentalYield[],
  ownershipLaws: [
    { law: 'Freehold Property Law', description: 'Foreigners allowed to buy property', year: '2002' },
    { law: '99-Year Leasehold', description: 'Non-citizens cannot own land', year: 'Ongoing' },
    { law: 'RERA Establishment', description: 'Regulatory agency created post-2009 crash', year: '2007' },
    { law: 'Dubai Real Estate Strategy 2033', description: 'Blockchain/crypto integration', year: '2025' }
  ] as OwnershipLaw[],
  keyDevelopers: [
    { developer: 'Emaar Properties', focus: 'Luxury', notableProjects: 'Burj Khalifa, Downtown Dubai' },
    { developer: 'Damac Properties', focus: 'Luxury', notableProjects: 'DAMAC Tower, Akoya' },
    { developer: 'Nakheel', focus: 'Palm Islands', notableProjects: 'Palm Jumeirah, Palm Jebel Ali' },
    { developer: 'Aldar Properties', focus: 'Abu Dhabi', notableProjects: 'Yas Island projects' }
  ] as KeyDeveloper[],
  uhnwiStatistics: [
    { metric: 'Current UAE UHNWIs', value: '4,851', projectionYear: '2024' },
    { metric: 'Projected UAE UHNWIs', value: '6,588', projectionYear: '2031' },
    { metric: 'Dubai Prime Residential Ranking', value: '2nd globally', projectionYear: '2024' }
  ] as UHNWIStatistic[]
}

// ============================================================================
// SECTION 3: PROPERTY PRICES & TRANSACTION DATA
// ============================================================================

export interface PriceHistoryEvent {
  period: string
  event: string
  priceImpact: string
}

export interface TransactionHighlight {
  transaction: string
  amount: string
  details: string
}

export const propertyPricesTransactionData = {
  priceHistory: [
    { period: '2002-2008', event: 'Freehold law + foreign investment', priceImpact: 'Rapid growth' },
    { period: '2008-2009', event: 'Global financial crisis', priceImpact: 'Sharp downturn' },
    { period: '2011-2014', event: 'Expo 2020 optimism', priceImpact: 'Recovery' },
    { period: '2015-2019', event: 'Increased supply', priceImpact: 'Gradual declines' },
    { period: '2020-2025', event: 'Post-pandemic surge', priceImpact: 'Exceptional recovery' },
    { period: '2026+', event: 'Correction expected', priceImpact: 'Double-digit decline predicted' }
  ] as PriceHistoryEvent[],
  recentTransactions: [
    { transaction: 'Naia Island land sale', amount: 'Dh377 million', details: '52,866 sq ft beachfront plot' },
    { transaction: 'Palm Jebel Ali contracts', amount: 'Dh3.5 billion', details: 'Nakheel villa contracts' },
    { transaction: 'KEZAD logistics acquisition', amount: 'Dh650 million', details: 'Aldar acquisition' },
    { transaction: 'Masdar City asset (The Link)', amount: 'Dh654 million', details: '32,000 sq m, 5 buildings' },
    { transaction: 'Dubai Islands infrastructure', amount: 'Dh527 million', details: 'Island B utilities/roads' },
    { transaction: 'Uptown Dubai twin towers', amount: '560,000+ sq ft', details: 'Office space added' }
  ] as TransactionHighlight[],
  bloombergAnalysis: {
    headline: 'Dubai real estate market hits record home sales',
    source: 'Bloomberg News',
    date: 'August 2025',
    details: 'Housing prices at all-time highs per Property Monitor, City aims for 5.8 million residents by 2040, Population surged from ~255,000 (1980) to ~3.8 million today'
  }
}

// ============================================================================
// SECTION 4: BUBBLE RISK ASSESSMENT
// ============================================================================

export interface RiskIndicator {
  indicator: string
  value: string
  riskLevel: string
  source: string
}

export interface BubbleIndexComparison {
  city: string
  bubbleIndexScore: string
  riskCategory: string
}

export interface CrashComparison {
  metric: string
  year2009Crash: string
  currentConcern: string
}

export interface WarningSign {
  category: string
  items: string[]
}

export const bubbleRiskAssessment = {
  riskIndicators: [
    { indicator: 'UBS Bubble Index 2024', value: '0.64', riskLevel: 'Moderate', source: 'UBS' },
    { indicator: 'Fitch Prediction', value: 'Double-digit decline', riskLevel: 'High', source: 'Fitch (May 2025)' },
    { indicator: 'Gross Rental Yields', value: '5-7%', riskLevel: 'Moderate', source: 'Engel & Volkers' },
    { indicator: 'Off-Plan Share', value: '68%', riskLevel: 'High (speculative)', source: 'Savills' },
    { indicator: 'New Units Coming', value: '210,000', riskLevel: 'High (oversupply)', source: 'Luxuo Report' }
  ] as RiskIndicator[],
  bubbleIndexComparison: [
    { city: 'Miami', bubbleIndexScore: 'Higher', riskCategory: 'High' },
    { city: 'Tokyo', bubbleIndexScore: 'Higher', riskCategory: 'High' },
    { city: 'Dubai', bubbleIndexScore: '0.64', riskCategory: 'Moderate' },
    { city: 'Frankfurt', bubbleIndexScore: 'Lower', riskCategory: 'Low' }
  ] as BubbleIndexComparison[],
  crashComparison: [
    { metric: 'Initial Decline', year2009Crash: '40% in Q1 2009', currentConcern: 'Not yet occurring' },
    { metric: 'Peak Decline', year2009Crash: '40-60% in areas', currentConcern: '10-20% predicted' },
    { metric: 'Duration', year2009Crash: 'Cascading defaults', currentConcern: 'Multi-year correction' },
    { metric: 'Cause', year2009Crash: 'Oversupply, speculation, easy credit', currentConcern: 'Similar factors' }
  ] as CrashComparison[],
  warningSigns: [
    { category: 'Speculation indicators', items: ['Off-plan sales at 68% of transactions', 'Gross rental yields of 7% (artificially high)', '210,000 new units entering market'] },
    { category: 'Demand weakening', items: ['Job cuts from regional tensions (US-Israel-Iran war)', 'Tourism collapse (hotel occupancy from 80% to single digits)', 'Rental defaults doubling', 'Citi forecasts population growth slowing to 1%'] },
    { category: 'Regulatory response', items: ['Increased buyer registration fees', 'Tighter LTV ratios', 'First-Time Home Buyer Programme (2025)'] }
  ] as WarningSign[]
}

// ============================================================================
// SECTION 5: OFF-PLAN & DEVELOPMENT PROJECTS
// ============================================================================

export interface PalmIslandStatus {
  project: string
  status: string
  timeline: string
  size: string
}

export interface PalmJumeirahConstruction {
  metric: string
  value: string
}

export interface WorldIslandsData {
  metric: string
  value: string
}

export interface MajorProject {
  project: string
  developer: string
  investment: string
  timeline: string
}

export const offPlanDevelopmentProjects = {
  palmIslandsStatus: [
    { project: 'Palm Jumeirah', status: 'Complete', timeline: 'Opened 2010', size: '28 hotels, 18,000+ population' },
    { project: 'Palm Jebel Ali', status: 'Restarted 2024', timeline: '2028 completion', size: '50% larger than Palm Jumeirah' },
    { project: 'Dubai Islands (formerly Palm Deira)', status: 'Rebranded 2024', timeline: 'TBD', size: '~8x Palm Jumeirah size' }
  ] as PalmIslandStatus[],
  palmJumeirahConstruction: [
    { metric: 'Sand dredged', value: '94 million cubic meters' },
    { metric: 'Rock used', value: '5.5 million cubic meters' },
    { metric: 'Limestone', value: '700 tons' },
    { metric: 'Breakwater length', value: '160 km' },
    { metric: 'Breakwater height', value: '3 meters' },
    { metric: 'Construction start', value: '2001' },
    { metric: 'Main phase complete', value: '2006-2007' }
  ] as PalmJumeirahConstruction[],
  worldIslands: [
    { metric: 'Total cost', value: '$14 billion' },
    { metric: 'Nakheel response', value: 'Claims "wholly inaccurate"' },
    { metric: 'Development status', value: 'Stalled, incomplete' },
    { metric: 'Claims', value: 'Rumors of sinking' }
  ] as WorldIslandsData[],
  majorProjects: [
    { project: 'Dubai Islands', developer: 'Nakheel', investment: 'Dh527M (infrastructure)', timeline: 'Ongoing' },
    { project: 'Al Eyas plots', developer: 'UAE Government', investment: 'Housing', timeline: '2026+' },
    { project: 'Latifa City plots', developer: 'UAE Government', investment: '1,761 plots', timeline: '2026+' },
    { project: 'Blue Line Metro', developer: 'RTA', investment: '$5 billion', timeline: '2029' }
  ] as MajorProject[]
}

// ============================================================================
// SECTION 6: GHOST BUILDINGS & ABANDONED PROJECTS
// ============================================================================

export interface GhostBuilding {
  building: string
  attribute: string
  value: string
}

export interface GhostBuildingIssue {
  buildingArea: string
  issue: string
  status: string
}

export const ghostBuildingsAbandonedProjects = {
  alYaqoubTower: {
    height: '328m (1,076 ft)',
    floors: '69 + basement',
    constructionStart: '2006, topped out 2010, completed 2013',
    status: 'Vacant for 12+ years',
    currentOwner: 'AHS Properties (acquired early 2025)',
    purchasePrice: '$120 million',
    refurbishmentCost: '$600 million',
    newPurpose: 'Grade A+ commercial offices',
    preLeased: '95%',
    nickname: '"Big Ben of Dubai"',
    designInspiration: 'Elizabeth Tower (London)'
  } as Record<string, string>,
  otherGhostBuildings: [
    { buildingArea: 'Al Khail Gate', issue: 'Vacant since McDonald\'s left', status: 'Abandoned' },
    { buildingArea: 'Al Madam ghost village', issue: 'Near Dubai borders', status: 'Ghost town' },
    { buildingArea: '2008-2009 crisis projects', issue: 'Construction halted', status: 'Unfinished' }
  ] as GhostBuildingIssue[],
  investmentRisks: [
    'Living in ghost towns: legal risk for investors',
    'Construction halted during 2008 financial crisis',
    'Hidden costs of delayed projects',
    'Title deed complications'
  ]
}

// ============================================================================
// SECTION 7: PROPERTY FRAUD & SCAMS
// ============================================================================

export interface ScamType {
  scamType: string
  description: string
  warningSigns: string
}

export interface RedFlag {
  flag: string
}

export interface VerificationStep {
  step: string
  action: string
  location: string
}

export interface ReportingChannel {
  authority: string
  purpose: string
}

export interface LegalProtection {
  protection: string
}

export const propertyFraudScams = {
  threeMainScamTypes: [
    { scamType: 'Fake Agent/Phantom Property', description: 'Property doesn\'t exist or seller lacks rights', warningSigns: 'Below-market pricing, pressure deposits' },
    { scamType: 'Off-Plan Money Trap', description: 'Unlicensed developers, payments to personal accounts', warningSigns: 'Personal bank transfers, unlicensed projects' },
    { scamType: 'Double-Selling', description: 'Same property sold to multiple buyers', warningSigns: 'Multiple buyers for one property' }
  ] as ScamType[],
  redFlags: [
    'Price significantly below market rates',
    'Agent refuses to show property in person',
    'Requests payment to personal bank accounts',
    'Pressure to rush payment',
    'Verbal promises without documentation',
    'Missing or unverifiable documentation'
  ] as RedFlag[],
  verificationSteps: [
    { step: '1', action: 'Verify RERA ID', location: 'DLD website or Dubai REST app' },
    { step: '2', action: 'Check Title Deed (ready) or Oqood (off-plan)', location: 'For ownership/debts' },
    { step: '3', action: 'Use official contracts', location: 'Form F (ready), SPA (off-plan)' }
  ] as VerificationStep[],
  reportingChannels: [
    { authority: 'Real Estate Violation System (RVS)', purpose: 'Agent/company complaints' },
    { authority: 'Rental Disputes Centre (RDC)', purpose: 'Rental issues' },
    { authority: 'Dubai Police', purpose: 'Serious fraud or theft' },
    { authority: 'DLD Trustee Office', purpose: 'Ownership transfers' }
  ] as ReportingChannel[],
  legalProtections: [
    'All off-plan payments must go through RERA-approved Escrow Account',
    'No Objection Certificate (NOC) required before transfer',
    'Complete ownership transfer only at DLD-approved Trustee Office'
  ] as LegalProtection[]
}

// ============================================================================
// SECTION 8: MONEY LAUNDERING VULNERABILITIES
// ============================================================================

export interface DubaiUnlockedData {
  attribute: string
  value: string
}

export interface DirtyMoneyFactor {
  factor: string
  description: string
}

export interface SanctionedOwner {
  individual: string
  nationality: string
  allegation: string
  status: string
}

export interface FATFStatusEvent {
  year: string
  status: string
  action: string
}

export interface RegulatoryFailure {
  metric: string
  value: string
  implication: string
}

export interface ExpertQuote {
  quote: string
  source: string
}

export interface FIUTypology {
  pattern: string
}

export const moneyLaunderingVulnerabilities = {
  dubaiUnlockedInvestigation: {
    publicationDate: 'May 14, 2024',
    dataLeakPeriod: '2020-2022',
    source: 'Center for Advanced Defense Studies',
    mediaCoordination: 'OCCRP, E24, 70+ outlets globally'
  } as DubaiUnlockedData,
  whyDubaiAttractsDirtyMoney: [
    { factor: 'Foreigner-friendly laws', description: 'Easy property purchase for non-citizens' },
    { factor: 'Free-trade zones', description: 'Major tax exemptions' },
    { factor: 'Record difficulty', description: 'Property records hard to obtain' },
    { factor: 'Inconsistent extradition', description: 'Political rather than legal process' },
    { factor: 'Realtor due diligence', description: '"Ask zero questions" culture' },
    { factor: 'Ownership disguise', description: 'Trusts and holding companies' }
  ] as DirtyMoneyFactor[],
  sanctionedPropertyOwners: [
    { individual: 'Obaid Khanani', nationality: 'Pakistani', allegation: 'Money laundering organization', status: 'Sanctioned 2016' },
    { individual: 'Daniel Kinahan', nationality: 'Irish', allegation: 'Kinahan Crime Group leader', status: '$5M US bounty' },
    { individual: 'Danilo "Dubaiano" Santana', nationality: 'Brazilian', allegation: 'Bitcoin pyramid scheme', status: 'Indicted 2018' },
    { individual: 'Othman El Ballouti', nationality: 'Belgian', allegation: 'Cocaine trafficking', status: 'Sanctioned 2023' },
    { individual: 'Isabel dos Santos', nationality: 'Angolan', allegation: 'Money laundering, embezzlement', status: 'Charged in Angola' },
    { individual: 'Atul & Rajesh Gupta', nationality: 'Indian-South African', allegation: 'Money laundering, fraud', status: 'Extradition denied' },
    { individual: 'Pastor Obiang', nationality: 'Equatorial Guinea', allegation: 'VP\'s brother, villa owner', status: 'Named in leak' },
    { individual: 'Denis Sassou-Nguesso', nationality: 'Congo-Brazzaville', allegation: 'President\'s son', status: 'Named in leak' }
  ] as SanctionedOwner[],
  fatfStatusTimeline: [
    { year: '2022', status: 'Gray listed', action: 'FATF cited AML failures' },
    { year: 'February 2024', status: 'Removed', action: '"Significant progress" demonstrated' },
    { year: '2024', status: 'EU high-risk list', action: 'European Parliament vote maintained' }
  ] as FATFStatusEvent[],
  regulatoryFailures: [
    { metric: 'Suspicious transaction reports', value: '0.002% of 2022 transactions', implication: 'Severe underreporting' },
    { metric: 'Undercover test', value: 'DAMAC offered "bags of cash"', implication: 'Zero questions culture' },
    { metric: 'Rental regulation gap', value: 'Only sales covered', implication: 'Money laundering via rentals' }
  ] as RegulatoryFailure[],
  expertQuotes: [
    { quote: '"The UAE is a law enforcement black hole."', source: 'Jodi Vittori, Georgetown University' },
    { quote: '"You could buy a property with just a passport."', source: 'Melissa Sequeira, Themis' },
    { quote: '"Dubai is not a safe haven for illicit funds... Dubai is a safe haven for legitimate commerce."', source: 'Dubai Police' }
  ] as ExpertQuote[],
  uaeFiuTypologies: [
    'Use of third parties and family members',
    'Abuse of legal person\'s structure and corporate accounts',
    'Involvement of DNFBPs and broker bank accounts',
    'Claimed rental income',
    'Use of home finance and early settlement',
    'Manipulation of property price'
  ] as FIUTypology[]
}

// ============================================================================
// SECTION 9: LABOR CONDITIONS & MODERN SLAVERY
// ============================================================================

export interface ModernSlaveryStatistic {
  metric: string
  value: string
  rank?: string
}

export interface MigrantWorkerDemographic {
  metric: string
  value: string
}

export interface PopulationTimeline {
  year: string
  totalPopulation: string
  percentNonNationals: string
}

export interface KafalaSystem {
  aspect: string
  description: string
}

export interface DocumentedAbuse {
  incident: string
  year: string
  details: string
}

export interface LivingCondition {
  metric: string
  value: string
}

export interface ForcedMarriageStat {
  metric: string
  value: string
}

export interface TraffickingConviction {
  metric: string
  value: string
}

export const laborConditionsModernSlavery = {
  modernSlaveryStatistics: [
    { metric: 'People in modern slavery', value: '132,000', rank: '7th highest globally' },
    { metric: 'Prevalence rate', value: '13.4 per 1,000', rank: '2nd in Arab States, 7th globally' },
    { metric: 'Global Slavery Index score', value: '40/100 vulnerability', rank: undefined },
    { metric: 'Government response score', value: '50/100', rank: undefined }
  ] as ModernSlaveryStatistic[],
  migrantWorkerDemographics: [
    { metric: 'Total migrant workers', value: '8 million' },
    { metric: 'Migrant share of population', value: '87.9% (8.6M of 9.8M)' },
    { metric: 'Workforce that is non-citizen', value: '90%' },
    { metric: 'Primary countries', value: 'India, Nepal, Sri Lanka, Bangladesh, Philippines, Pakistan' },
    { metric: 'Foreign-born share', value: 'Over 90%' }
  ] as MigrantWorkerDemographic[],
  populationTimeline: [
    { year: '1975', totalPopulation: '557,887', percentNonNationals: '63.87%' },
    { year: '2010', totalPopulation: '8,264,070', percentNonNationals: '88.53%' },
    { year: '2016', totalPopulation: '9,121,176', percentNonNationals: '87.35%' },
    { year: '2019', totalPopulation: '9.8 million', percentNonNationals: '87.9%' }
  ] as PopulationTimeline[],
  kafalaSystem: [
    { aspect: 'Work visa sponsorship', description: 'Ties workers to employers' },
    { aspect: 'Passport confiscation', description: 'Documented practice' },
    { aspect: 'Wage withholding', description: 'Common complaint' },
    { aspect: '2016 reform', description: 'First GCC ministerial decree protected low-paid migrants' },
    { aspect: '2015 reform', description: 'Workers can change employers without losing status' }
  ] as KafalaSystem[],
  documentedAbuses: [
    { incident: 'Indian worker suicides', year: '2006', details: '109 deaths' },
    { incident: 'Domestic worker abuse', year: 'Various', details: 'HRW documented physical/sexual abuse' },
    { incident: 'Transguard/Expo 2020', year: 'Various', details: 'Workers accused of abuse' },
    { incident: 'Bangladeshi workers imprisoned', year: 'July 2024', details: '57 workers for protesting' },
    { incident: 'COVID-19 impact', year: '2020', details: 'Lost jobs, slept outside' }
  ] as DocumentedAbuse[],
  livingConditions: [
    { metric: 'Typical occupancy', value: '8 to a room' },
    { metric: 'Female domestic workers', value: '~146,000 (2014)' },
    { metric: 'HRW interviews', value: '99 domestic workers' },
    { metric: 'Passport confiscation reports', value: '99/99' },
    { metric: 'Unpaid wages reports', value: '99/99' },
    { metric: 'Physical/sexual abuse', value: '24/99' }
  ] as LivingCondition[],
  forcedMarriageStatistics: [
    { metric: 'British nationals forced into marriage', value: '14 since 2018' },
    { metric: 'Identified in 2020', value: '7 individuals' }
  ] as ForcedMarriageStat[],
  traffickingConvictions2021: [
    { metric: 'Total convictions', value: '23' },
    { metric: 'Sexual exploitation', value: '18' },
    { metric: 'Other', value: '5' }
  ] as TraffickingConviction[]
}

// ============================================================================
// SECTION 10: AFFORDABLE HOUSING CRISIS
// ============================================================================

export interface AffordabilityThreshold {
  metric: string
  maximumAffordable: string
  notes: string
}

export interface CrisisIndicator {
  issue: string
  details: string
  source?: string
}

export interface DeveloperFocusProblem {
  developer: string
  focus: string
  result: string
}

export interface SingaporeComparison {
  factor: string
  singapore: string
  dubai: string
}

export interface GovernmentResponse {
  initiative: string
  description: string
}

export const affordableHousingCrisis = {
  affordabilityThresholds: [
    { metric: 'Annual rent', maximumAffordable: 'AED 72,000', notes: 'Housing to rent ratio' },
    { metric: 'Sale price', maximumAffordable: 'AED 790,000', notes: 'Based on income ratios' },
    { metric: 'Housing stock classified "affordable"', maximumAffordable: '20% (2015)', notes: 'Only 1/5 of new stock' }
  ] as AffordabilityThreshold[],
  crisisIndicators: [
    { issue: 'Excessive rents', details: 'Forcing families into unsatisfactory housing', source: 'JLL' },
    { issue: 'Overcrowding', details: 'Dormitory-style sharing in Bur Dubai/Al Satwa', source: 'JLL' },
    { issue: 'Commuter burden', details: 'High traffic Dubai-Sharjah', source: 'JLL' },
    { issue: 'Rent increases', details: '20% in some neighborhoods (2023)', source: 'globalEDGE' },
    { issue: 'Illegal partitions', details: 'Landlords facing up to AED 50,000 fines', source: 'JLL' }
  ] as CrisisIndicator[],
  developerFocusProblem: [
    { developer: 'Emaar Properties', focus: 'Luxury', result: 'Underserves middle-income' },
    { developer: 'Damac Properties', focus: 'Luxury', result: 'Underserves middle-income' },
    { developer: 'Nakheel', focus: 'Luxury', result: 'Underserves middle-income' }
  ] as DeveloperFocusProblem[],
  singaporeComparison: [
    { factor: 'Public housing agency', singapore: 'HDB', dubai: 'None' },
    { factor: 'Affordable housing %', singapore: 'High', dubai: 'Low (20%)' },
    { factor: 'Housing policies', singapore: 'Strict, comprehensive', dubai: 'Limited' },
    { factor: 'Result', singapore: 'More livable', dubai: 'Crisis conditions' }
  ] as SingaporeComparison[],
  governmentResponse: [
    { initiative: 'Illegal partition enforcement', description: 'Fines up to AED 50,000' },
    { initiative: 'Affordable housing advocacy', description: 'JLL, WEF proposing solutions' },
    { initiative: 'Remote work promotion', description: 'Reducing commuter pressure' }
  ] as GovernmentResponse[]
}

// ============================================================================
// SECTION 11: EMIRATI HOUSING PROGRAMS
// ============================================================================

export interface HousingPackageAllocation {
  allocation: string
  amount: string
  beneficiaries?: string
}

export interface AbuDhabiHousingBreakdown {
  component: string
  amount: string
  beneficiaries?: string
}

export interface DubaiAllocation {
  location: string
  plots: string
  area?: string
}

export interface HousingAgency {
  agency: string
  jurisdiction: string
}

export interface HousingService {
  service: string
  description: string
}

export const emiratiHousingPrograms = {
  dh9point5BillionPackage: {
    total: 'Dh9.51 billion',
    date: 'March 2026',
    abuDhabiHousing: 'Dh4.21 billion',
    dubaiPlots: 'Dh5.3 billion'
  },
  abuDhabiHousingBreakdown: [
    { component: 'Housing loans', amount: 'Dh2.1 billion', beneficiaries: '1,415' },
    { component: 'Ready-built grants', amount: 'Dh1.82 billion', beneficiaries: '914' },
    { component: 'Residential land', amount: 'Dh144 million', beneficiaries: '185' },
    { component: 'Loan exemptions', amount: 'Dh142 million', beneficiaries: '138 seniors' }
  ] as AbuDhabiHousingBreakdown[],
  dubaiAllocations: [
    { location: 'Al Eyas', plots: '2,540', area: undefined },
    { location: 'Latifa City', plots: '1,761', area: undefined },
    { location: 'Mushrif', plots: '330', area: undefined },
    { location: 'Total', plots: '4,631', area: '71 million sq ft' }
  ] as DubaiAllocation[],
  historicalContext: {
    totalHousingSupportSince2012: 'Dh181 billion+',
    citizensSupportedSince2012: '132,000+'
  },
  agenciesInvolved: [
    { agency: 'Abu Dhabi Housing Authority (ADHA)', jurisdiction: 'Abu Dhabi' },
    { agency: 'Mohammed bin Rashid Housing Establishment', jurisdiction: 'Dubai' },
    { agency: 'Ministry of Energy and Infrastructure', jurisdiction: 'Federal' },
    { agency: 'Community Development Authority', jurisdiction: 'Temporary benefits' },
    { agency: 'TAMM', jurisdiction: 'Abu Dhabi services' }
  ] as HousingAgency[],
  servicesAvailable: [
    { service: 'Expression of Interest', description: 'Abu Dhabi residents select housing projects' },
    { service: 'Rental assistance', description: 'Up to AED 75,000 for newly married nationals' },
    { service: 'Temporary Housing Benefit', description: 'Community Development Authority' },
    { service: 'Housing loans', description: 'Income-based' }
  ] as HousingService[]
}

// ============================================================================
// SECTION 12: URBAN PLANNING CRITICISM
// ============================================================================

export interface CriticalAssessment {
  source: string
  verdict: string
}

export interface IdentifiedFailure {
  issue: string
  example: string
}

export interface ExpertQuoteUrban {
  quote: string
  source: string
}

export const urbanPlanningCriticism = {
  criticalAssessments: [
    { source: 'Reddit urbanplanning', verdict: '"Resounding failure"' },
    { source: 'PBS (Jan 2025)', verdict: '"Building boom starting to strain residents"' },
    { source: 'NYU Compass', verdict: '"Urban disaster: Can it be saved?"' },
    { source: 'Architecture critic', verdict: '"Architecture doesn\'t hide bad planning"' }
  ] as CriticalAssessment[],
  identifiedFailures: [
    { issue: 'Hubristic planning', example: 'World Islands complex' },
    { issue: 'Short-sighted design', example: 'Car-centric infrastructure' },
    { issue: 'Climate blindness', example: 'Flooding vulnerability (April 2024)' },
    { issue: 'Infrastructure strain', example: 'Traffic worse than ever' }
  ] as IdentifiedFailure[],
  climateUrbanizationIssues: [
    { issue: 'April 2024 flooding', data: 'Severe environmental consequences' },
    { issue: 'Climate change impact', data: 'Paper examining rapid urbanization consequences' },
    { issue: 'Future target', data: '5.8 million residents by 2040' }
  ],
  expertQuotes: [
    { quote: '"Affordability risks are increasing"', source: 'Hasnain Malik' },
    { quote: '"Concentration of wealth may cause income inequality that pushes out lower-income residents"', source: 'Habib Al Mulla' }
  ] as ExpertQuoteUrban[]
}

// ============================================================================
// SECTION 13: WALKABILITY & PUBLIC SPACE
// ============================================================================

export interface WalkabilityRanking {
  rank: string
  area: string
  features: string
}

export interface WalkableAreaDetail {
  area: string
  features: string
}

export interface WalkabilityChallenge {
  issue: string
  impact: string
}

export interface InfrastructureImprovement {
  project: string
  scope: string
}

export const walkabilityPublicSpace = {
  walkabilityRankings: [
    { rank: '1', area: 'Dubai Marina & JBR', features: 'The Walk, Bluewaters' },
    { rank: '2', area: 'Downtown Dubai', features: 'Burj Khalifa, Opera District' },
    { rank: '3', area: 'Old Dubai', features: 'Deira and Bur Dubai' }
  ] as WalkabilityRanking[],
  walkableAreasDetail: [
    { area: 'Dubai Marina', features: '7km+ scenic promenade' },
    { area: 'JBR', features: 'The Walk at JBR beachfront' },
    { area: 'JLT', features: 'Lakeside promenades' },
    { area: 'Downtown Dubai', features: 'Pedestrian-friendly, well-lit sidewalks' },
    { area: 'City Walk', features: 'Open-air, tree-shaded' },
    { area: 'Palm Jumeirah', features: 'Boardwalk, Al Ittihad Park' },
    { area: 'Deira', features: 'Narrow lanes, historic souks' },
    { area: 'Bur Dubai', features: 'Traditional architecture, creek walkway' }
  ] as WalkableAreaDetail[],
  otherWalkableLocations: [
    'Kite Beach',
    'Dubai Water Canal',
    'Mushrif Park',
    'Dubai Creek',
    'The Greens (parks and gardens)'
  ],
  challenges: [
    { issue: 'Extreme heat', impact: '45C (113F) with humidity' },
    { issue: 'Car-dependence', impact: 'Pedestrians lowest in hierarchy' },
    { issue: 'Limited shade', impact: 'Many areas not walkable' },
    { issue: 'Seasonal constraint', impact: '6+ months difficult outdoor activity' }
  ] as WalkabilityChallenge[],
  infrastructureImprovements: [
    { project: 'Dubai Walk', scope: 'Master plan for pedestrian transformation' },
    { project: 'Pedestrian paths', scope: '3,300 km planned' },
    { project: 'Air-conditioned bridges', scope: '1km bridge to Dubai Mall' },
    { project: 'Jumeirah Jogging Trail', scope: '6.8 km' }
  ] as InfrastructureImprovement[]
}

// ============================================================================
// SECTION 14: CAR-CENTRIC DESIGN
// ============================================================================

export interface VehicleStatistic {
  metric: string
  value: string
  comparison?: string
}

export interface TransportationIssue {
  issue: string
  impact: string
}

export interface AddressingInitiative {
  initiative: string
  description: string
}

export interface MetroStatistic {
  metric: string
  value: string
}

export interface NolCardFare {
  tier: string
  zones: string
  fare: string
}

export const carCentricDesign = {
  vehicleStatistics: [
    { metric: 'Car ownership', value: '67% private cars' },
    { metric: 'Public transport use', value: '21% daily' },
    { metric: 'Vehicle increase', value: '10% (~400,000)', comparison: 'vs 4% globally' },
    { metric: 'Drive alone', value: '80% of employees' },
    { metric: 'Daily commuters', value: '1 million', comparison: 'From other emirates' },
    { metric: 'Sheikh Zayed Road', value: '12 lanes' }
  ] as VehicleStatistic[],
  rootCauseQuote: '"There is no team in the institutions formally responsible for asking why people choose cars over buses and what would make them switch."',
  transportationPlanningIssues: [
    { issue: 'Traffic Impact Studies', impact: 'Car-focused metrics only' },
    { issue: 'Evaluation framework', impact: 'Vehicle delay, queue length, saturation' },
    { issue: 'Pedestrian/transit access', impact: '"Perform worse in model outputs"' },
    { issue: 'Bus services', impact: 'Mixed traffic, limited priority' },
    { issue: 'Last-mile connectivity', impact: 'Weak' },
    { issue: 'Service frequency', impact: 'Low' }
  ] as TransportationIssue[],
  addressingInitiatives: [
    { initiative: 'Dubai Loop', description: '93 km sustainable urban highway for cycling/running' },
    { initiative: 'Green Spine', description: '64 km solar-powered corridor' },
    { initiative: 'Dubai Metro expansion', description: '$5 billion investment' },
    { initiative: 'Remote work promotion', description: '30% potential reduction in morning peak' }
  ] as AddressingInitiative[],
  metroStatistics: [
    { metric: 'Total length', value: '89.6 km' },
    { metric: 'Stations', value: '55' },
    { metric: 'Daily ridership', value: '755,000 (2024)' },
    { metric: 'Annual ridership', value: '294.7 million (2025)' },
    { metric: 'Red Line', value: '67.1 km, 35 stations' },
    { metric: 'Green Line', value: '22.5 km, 20 stations' },
    { metric: 'Blue Line', value: '30 km, 14 stations (2029)' }
  ] as MetroStatistic[],
  nolCardFares: [
    { tier: '1', zones: '1 zone', fare: '3 AED' },
    { tier: '2', zones: '2 zones', fare: '5 AED' },
    { tier: '3', zones: '3+ zones', fare: '10 AED' }
  ] as NolCardFare[]
}

// ============================================================================
// SECTION 15: SMART CITY & SURVEILLANCE
// ============================================================================

export interface SurveillanceCompany {
  company: string
  capability: string
}

export interface KeyApplication {
  application: string
  description: string
}

export interface InternationalDeal {
  deal: string
  location: string
  details: string
}

export interface PrivacyConcern {
  issue: string
  description: string
}

export const smartCitySurveillance = {
  surveillanceInfrastructure: [
    { company: 'Presight AI', capability: 'Visual intelligence, analytics, real-time monitoring' },
    { company: 'G42', capability: 'Enterprise computer vision' },
    { company: 'Falcon AI', capability: 'Autonomous monitoring, threat detection' },
    { company: 'DarkMatter', capability: 'AI-enhanced surveillance' },
    { company: 'Micropolis', capability: 'Vision-enabled robotics' },
    { company: 'AleaIT', capability: 'Video analytics' },
    { company: 'Alpha Data', capability: 'City-wide AI vision' }
  ] as SurveillanceCompany[],
  keyApplications: [
    { application: 'Security & Surveillance', description: 'Threat detection in public spaces' },
    { application: 'Smart Transportation', description: 'Traffic flow analysis' },
    { application: 'Infrastructure Monitoring', description: 'Wear/damage early detection' },
    { application: 'Emergency Response', description: 'Faster decision support' }
  ] as KeyApplication[],
  internationalDeals: [
    { deal: 'Presight AI', location: 'Albania', details: '5,000 cameras in 20 cities' }
  ] as InternationalDeal[],
  privacyConcerns: [
    { issue: 'Total surveillance', description: 'Smart city infrastructure repurposed for policing' },
    { issue: 'AI cameras', description: 'Detecting littering, illegal waste disposal in real-time' },
    { issue: 'Facial recognition', description: 'Enhanced surveillance capabilities' },
    { issue: 'Gulf smart city model', description: '"Built on total surveillance"' },
    { issue: 'International export', description: 'Surveillance tech to other countries' }
  ] as PrivacyConcern[]
}

// ============================================================================
// SECTION 16: CONSTRUCTION QUALITY
// ============================================================================

export interface SnaggingData {
  metric: string
  value: string
}

export interface DubaiMunicipality2025Report {
  metric: string
  value: string
  change?: string
}

export interface NewBuildingLaw {
  aspect: string
  details: string
}

export interface SustainabilityMetric {
  metric: string
  value: string
}

export const constructionQuality = {
  snaggingData: [
    { metric: 'Defects per apartment', value: '150-300' },
    { metric: 'Measurement period', value: '2020-2024 average' }
  ] as SnaggingData[],
  dubaiMunicipalityH12025Report: [
    { metric: 'Field inspections', value: '25,000+', change: '+36%' },
    { metric: 'Buildings under construction', value: '18,800+', change: undefined },
    { metric: 'Area covered', value: '36 million sq m', change: '+11%' },
    { metric: 'Compliance rate', value: '96%', change: undefined },
    { metric: 'Completion certificates', value: '1,669', change: '+30%' },
    { metric: 'Villas certified', value: '1,484', change: undefined },
    { metric: 'Multi-storey certified', value: '74', change: undefined },
    { metric: 'Industrial facilities', value: '60', change: undefined }
  ] as DubaiMunicipality2025Report[],
  newBuildingLawMarch2026: {
    authority: 'Dubai ruler',
    maximumFine: 'Dh2 million',
    requirement: 'Quality and safety certificates for all buildings',
    standards: 'BS, ASTM, ISO'
  } as NewBuildingLaw,
  sustainabilityInConstruction: [
    { metric: 'Green concrete used', value: '1.5 million cubic meters' },
    { metric: 'Soil recycled', value: '16.4 million cubic meters' },
    { metric: 'Sand transport permits', value: '4,222' },
    { metric: 'Free sand requests (Emiratis)', value: '1,126+' }
  ] as SustainabilityMetric[]
}

// ============================================================================
// SECTION 17: FIRE SAFETY & CLADDING
// ============================================================================

export interface FireRegulationTimeline {
  year: string
  regulation: string
}

export interface CladdingSituation {
  issue: string
  status: string
}

export interface HighRiseFireIncident {
  incident: string
  date: string
  details: string
}

export interface ACMPolyethyleneDanger {
  issue: string
  description: string
}

export const fireSafetyCladding = {
  regulatoryTimeline: [
    { year: '2017', regulation: 'UAE Fire and Life Safety Code introduced' },
    { year: '2017', regulation: 'Ban on flammable ACM aluminum panels for new buildings' },
    { year: '2018', regulation: 'Non-combustible cladding mandatory' }
  ] as FireRegulationTimeline[],
  currentCladdingSituation: [
    { issue: 'Post-2017 buildings', status: 'Compliant (non-combustible required)' },
    { issue: 'Pre-2017 buildings', status: 'Hundreds still have combustible cladding' },
    { issue: 'Mandatory retrofit', status: 'Not required' },
    { issue: 'Approach', status: 'Awareness and voluntary compliance' }
  ] as CladdingSituation[],
  highRiseFireIncidents: [
    { incident: 'DAMAC building', date: 'Nov 2022', details: '35-story fire, dangerous cladding concerns' },
    { incident: 'Multiple fires', date: 'Various', details: 'Documented in Dubai' }
  ] as HighRiseFireIncident[],
  expertStatement: '"We will not obligate the owners of existing buildings to change the whole facade." - Salma Humaid Saeed, Dubai Civil Defence',
  acmPolyethyleneDangers: [
    { issue: 'Fire propagation', description: 'Fuels high-rise fires' },
    { issue: 'Combustion', description: 'Significant challenge for firefighters' },
    { issue: 'Retrofitting cost', description: 'Prohibitive for many owners' }
  ] as ACMPolyethyleneDanger[]
}

// ============================================================================
// SECTION 18: GENTRIFICATION
// ============================================================================

export interface KaramaCaseStudy {
  metric: string
  preTransformation: string
  postTransformation: string
}

export interface HistoricalContextEvent {
  year: string
  event: string
}

export interface DisplacementDriver {
  factor: string
  impact: string
}

export interface WageDisparity {
  comparison: string
  wageDifference: string
}

export const gentrification = {
  karamaCaseStudy: [
    { metric: 'Annual rent (old)', preTransformation: '$8,200-$10,500', postTransformation: '-' },
    { metric: 'Annual rent (new)', preTransformation: '-', postTransformation: '$19,000-$25,000' },
    { metric: 'Rent increase', preTransformation: '-', postTransformation: '42% above old building rates' }
  ] as KaramaCaseStudy[],
  historicalContext: [
    { year: '1978', event: 'Sheikh Rashid Colony built' },
    { year: '2012', event: 'Demolition began' },
    { year: '2014', event: 'Dubai won Expo 2020 bid' },
    { year: '2016', event: '$160M traffic plan announced' },
    { year: '2018', event: 'Bridges opened' }
  ] as HistoricalContextEvent[],
  displacementDrivers: [
    { factor: 'Expo 2020 bid', impact: 'Created rent gap opportunity' },
    { factor: '2008 recession', impact: 'Stalled projects, made infill attractive' },
    { factor: 'Abu Dhabi assistance', impact: 'Recovered real estate market' },
    { factor: 'Cost factors', impact: 'Infill cheaper than greenfield' }
  ] as DisplacementDriver[],
  wageDisparities: [
    { comparison: 'Asians vs Arab nationals', wageDifference: '20% lower' },
    { comparison: 'Asians vs white US/EU', wageDifference: '40% lower' }
  ] as WageDisparity[],
  culturalErosionQuotes: [
    '"The livelihoods and lifestyles of Karama\'s former inhabitants are threatened as the space for economic participation diminishes."',
    '"Karama lost much of its middle-class transnational identity and is being erased in the media and from the collective memory of Dubai."'
  ],
  demographicShift: [
    { from: 'South/Southeast Asian community', to: 'Western-oriented affluent space' },
    { from: 'Transnational identity', to: 'Exclusive, privatized, upper-class' },
    { from: 'Affordable haven', to: 'Luxury tourism focus' }
  ]
}

// ============================================================================
// SECTION 19: ENVIRONMENTAL CHALLENGES
// ============================================================================

export interface UrbanHeatIslandMetric {
  metric: string
  value: string
  source?: string
}

export interface SustainableCityComparison {
  metric: string
  sustainableCity: string
  conventional: string
}

export interface EnvironmentalImpact {
  impact: string
  description: string
}

export interface GreenSpaceStatistic {
  city: string
  greenSpacePercent: string
}

export interface GreenSpaceGrowth {
  period: string
  uaeTotal?: string
  dubaiAbuDhabiAlAin?: string
}

export interface Dubai2040Goal {
  goal: string
  details: string
}

export const environmentalChallenges = {
  urbanHeatIslandEffect: [
    { metric: 'Land cover change', value: '64.8% (10 years)', source: 'EcoMENA' },
    { metric: 'Land surface temp rise', value: '1.5C (decade)', source: 'EcoMENA' },
    { metric: 'UHI air temp difference', value: '1.3C (urban vs rural)', source: 'Academic study' },
    { metric: 'Night-time UHI', value: '3.3C higher', source: 'Academic study' },
    { metric: 'Surface temps', value: '50-90F hotter than air', source: 'EcoMENA' }
  ] as UrbanHeatIslandMetric[],
  sustainableCityVsConventional: [
    { metric: 'Air temp at 1pm', sustainableCity: '40.52C', conventional: 'Up to 2.9C higher' },
    { metric: 'Average cooler', sustainableCity: '2.02C', conventional: '-' },
    { metric: 'Thermal comfort', sustainableCity: 'Better (lower PMV)', conventional: 'Worse' }
  ] as SustainableCityComparison[],
  environmentalImpacts: [
    { impact: 'Energy consumption', description: 'Increased for cooling' },
    { impact: 'Emissions', description: 'Higher pollutant and greenhouse gas' },
    { impact: 'Water demand', description: 'Elevated' },
    { impact: 'Aquatic ecosystems', description: 'Disrupted by heated runoff' }
  ] as EnvironmentalImpact[],
  greenSpaceStatistics: [
    { city: 'Dubai', greenSpacePercent: '2-3%' },
    { city: 'Istanbul', greenSpacePercent: '2.2%' },
    { city: 'Mumbai', greenSpacePercent: '2.5%' },
    { city: 'Shanghai', greenSpacePercent: '2.8%' },
    { city: 'New York', greenSpacePercent: '27%' }
  ] as GreenSpaceStatistic[],
  dubaiGreenSpaceData: {
    urbanArea: '635 km2',
    population: '~2.74 million',
    greenSpaceCoverage: '3%',
    treeCoverage: '2%',
    hugsiRating: 'E-'
  },
  greenSpaceGrowth: [
    { period: '1975', uaeTotal: '40.7 km2', dubaiAbuDhabiAlAin: undefined },
    { period: '2020', uaeTotal: '1,741.3 km2', dubaiAbuDhabiAlAin: undefined },
    { period: 'Growth', uaeTotal: '43-fold', dubaiAbuDhabiAlAin: undefined },
    { period: '1972', uaeTotal: undefined, dubaiAbuDhabiAlAin: '1,231 hectares' },
    { period: '2021', uaeTotal: undefined, dubaiAbuDhabiAlAin: '23,000+ hectares' }
  ] as GreenSpaceGrowth[],
  dubai2040UrbanMasterPlan: {
    greenSpaceTarget: 'Double size of green/recreational spaces',
    investment: '$1.08 billion (February 2026)'
  } as Dubai2040Goal
}

// ============================================================================
// SECTION 20: PUBLIC TRANSPORTATION
// ============================================================================

export interface MetroSystemMetric {
  metric: string
  value: string
}

export interface MetroLine {
  line: string
  length: string
  stations: string
  opened: string
}

export interface RTAIntegrationPlan {
  initiative: string
  details: string
}

export interface ModalShare {
  mode: string
  share: string
}

export interface InfrastructurePipeline {
  project: string
  scope: string
}

export const publicTransportation = {
  metroSystem: [
    { metric: 'Total length', value: '89.6 km' },
    { metric: 'Stations', value: '55' },
    { metric: 'Daily ridership', value: '755,000 (2024)' },
    { metric: 'Annual ridership', value: '294.7 million (2025)' },
    { metric: 'Top speed', value: '95 km/h' },
    { metric: 'Operations start', value: 'September 9, 2009' },
    { metric: 'Fully automated', value: 'Yes (driverless)' },
    { metric: 'Temperature controlled', value: 'Yes' }
  ] as MetroSystemMetric[],
  metroLines: [
    { line: 'Red Line', length: '67.1 km', stations: '35', opened: '2009' },
    { line: 'Green Line', length: '22.5 km', stations: '20', opened: '2011' },
    { line: 'Blue Line', length: '30 km', stations: '14', opened: '2029 (planned)' },
    { line: 'Gold Line', length: '42 km', stations: '18', opened: '2032 (planned)' }
  ] as MetroLine[],
  rtaIntegrationPlans: [
    { initiative: 'Bus network upgrades', details: 'Comprehensive improvement' },
    { initiative: 'Trackless tram', details: 'Planned system' },
    { initiative: 'Etihad Rail integration', details: 'Passenger stations' },
    { initiative: '$5 billion investment', details: 'Metro expansion' }
  ] as RTAIntegrationPlan[],
  modalShare: [
    { mode: 'Drive alone', share: '80%' },
    { mode: 'Public transport', share: '21% (daily regular)' },
    { mode: 'Metro', share: '~350,000 daily (historical)' }
  ] as ModalShare[],
  infrastructurePipeline: [
    { project: 'Pedestrian paths', scope: '3,300 km planned' },
    { project: 'Cycling tracks', scope: '500 km by 2021, 850 km by 2030' },
    { project: 'Dubai Loop', scope: '93 km cycling/running highway' }
  ] as InfrastructurePipeline[]
}

// ============================================================================
// SECTION 21: PARKING POLICY
// ============================================================================

export interface ParkingFee {
  zoneType: string
  peakHourRate: string
  offPeak?: string
}

export interface PeakHours {
  period: string
  time: string
}

export interface FreeParkingCondition {
  condition: string
  time: string
}

export interface ZoneChange {
  old: string
  new: string
}

export interface PremiumZoneCriteria {
  criteria: string
  distance: string
}

export interface PaymentMethod {
  method: string
  channel: string
}

export const parkingPolicy = {
  dubaiParkingFees2025: [
    { zoneType: 'Premium', peakHourRate: 'Dh6/hour', offPeak: 'Dh4/hour' },
    { zoneType: 'Standard', peakHourRate: 'Dh4/hour', offPeak: undefined },
    { zoneType: 'Event (DWTC)', peakHourRate: 'Dh25/hour', offPeak: undefined }
  ] as ParkingFee[],
  peakHours: [
    { period: 'Morning', time: '8am-10am' },
    { period: 'Evening', time: '4pm-8pm' }
  ] as PeakHours[],
  freeParking: [
    { condition: 'Overnight', time: '10pm-8am' },
    { condition: 'Sundays', time: 'All day' },
    { condition: 'Public holidays', time: 'All day' }
  ] as FreeParkingCondition[],
  zoneChangesApril2025: [
    { old: 'A', new: 'AP' },
    { old: 'B', new: 'BP' },
    { old: 'C', new: 'CP' },
    { old: 'D', new: 'DP' }
  ] as ZoneChange[],
  premiumZoneDefinition: {
    criteria: 'Premium parking',
    distance: 'Within 500m of metro stations'
  } as PremiumZoneCriteria,
  paymentMethods: [
    { method: 'RTA Dubai app', channel: 'Application' },
    { method: 'SMS', channel: '7275' },
    { method: 'Meters', channel: 'Parking machines' },
    { method: 'eParking cards', channel: 'Prepaid cards' },
    { method: 'QR codes', channel: 'Mobile' },
    { method: 'iPhone App Clips', channel: 'Contactless' },
    { method: 'License plate recognition', channel: 'Ticketless' }
  ] as PaymentMethod[]
}

// ============================================================================
// SECTION 22: ROAD SAFETY
// ============================================================================

export interface RoadSafetyStatistic {
  metric: string
  value: string
  trend?: string
}

export interface ViolationType {
  type: string
  description: string
}

export interface TrafficLaw {
  rule: string
  description: string
}

export interface SafetySystem {
  system: string
  purpose: string
}

export const roadSafety = {
  statistics: [
    { metric: 'Deaths (2015)', value: '675', trend: 'Baseline' },
    { metric: 'Deaths (2018)', value: '468', trend: 'Decreasing' },
    { metric: 'Injuries (2015)', value: '6,876', trend: 'Baseline' },
    { metric: 'Injuries (2018)', value: '5,130', trend: 'Decreasing' },
    { metric: 'WHO rate', value: '18 per 100,000', trend: undefined },
    { metric: 'Dubai Police radar violations (2024)', value: '2 million+', trend: undefined }
  ] as RoadSafetyStatistic[],
  violationTypes: [
    { type: 'Speeding', description: 'Primary violation' },
    { type: 'Lane changing', description: 'Reckless maneuvers' },
    { type: 'Radar violations', description: 'Mostly above categories' }
  ] as ViolationType[],
  keyTrafficLaws: [
    { rule: 'Pedestrian restriction', description: 'Cannot cross roads where speed >80 km/h' },
    { rule: 'Horn restriction', description: 'Emergencies only in city limits' },
    { rule: 'Driver age', description: 'Minimum 17 years' },
    { rule: 'Instructor requirement', description: 'Only licensed instructors' },
    { rule: 'Insurance', description: 'Full civil liability coverage mandatory' },
    { rule: 'Heavy vehicles', description: '>65 tonnes banned from 2024' }
  ] as TrafficLaw[],
  safetySystems: [
    { system: 'National Truck Tracking', purpose: 'Real-time monitoring' },
    { system: 'UAE eCall', purpose: 'Auto-connects collision victims to emergency' },
    { system: 'Electronic gate system', purpose: 'Heavy vehicle weight/dimension monitoring' }
  ] as SafetySystem[],
  safetyInitiatives: [
    { initiative: 'Taxi driver training', description: 'Comprehensive programs' },
    { initiative: 'Public awareness', description: 'Safety campaigns' }
  ]
}

// ============================================================================
// SECTION 23: SUSTAINABLE BUILDING (ESTIDAMA)
// ============================================================================

export interface EstidamaFramework {
  attribute: string
  value: string
}

export interface PearlRatingRequirement {
  buildingType: string
  minimumRequiredRating: string
}

export interface SystemRelationship {
  system: string
  relationship: string
}

export interface EstidamaGeographicScope {
  emirate: string
  estidamaApplication: string
}

export const sustainableBuildingEstidama = {
  frameworkOverview: {
    nameMeaning: 'Arabic for "sustainability"',
    type: 'Building design methodology',
    scope: 'Buildings and communities',
    connection: 'Part of Abu Dhabi Vision 2030'
  } as EstidamaFramework,
  pearlRatingSystem: [
    { buildingType: 'All buildings', minimumRequiredRating: '1 Pearl (mandatory)' },
    { buildingType: 'Government-funded', minimumRequiredRating: '2 Pearl (mandatory)' }
  ] as PearlRatingRequirement[],
  relationshipToOtherSystems: [
    { system: 'LEED', relationship: 'Not equivalent - different approach' },
    { system: 'BREEAM', relationship: 'Not equivalent - different approach' },
    { system: 'Pearl Rating', relationship: 'Component of Estidama' }
  ] as SystemRelationship[],
  frameworkNatureQuote: '"Estidama is not itself a green building rating system like LEED or BREEAM. Rather, it is a collection of ideals that are imposed in an elective building code type of format."',
  geographicScope: [
    { emirate: 'Abu Dhabi', estidamaApplication: 'Mandatory' },
    { emirate: 'Other emirates', estidamaApplication: 'Not specified' }
  ] as EstidamaGeographicScope[]
}

// ============================================================================
// SECTION 24: SENTIMENT ANALYSIS
// ============================================================================

export interface PositiveSentiment {
  topic: string
  sentiment: string
  source: string
}

export interface NegativeSentiment {
  topic: string
  sentiment: string
  source: string
}

export interface NeutralConditionalSentiment {
  topic: string
  sentiment: string
  notes: string
}

export interface StakeholderSentiment {
  stakeholder: string
  overallSentiment: string
}

export const sentimentAnalysis = {
  overallSentiment: 'MIXED (Cautious Negative for Long-term)',
  positiveSentiments: [
    { topic: 'Market growth', sentiment: 'Strong positive', source: 'Transaction volumes up 36%' },
    { topic: 'Investment returns', sentiment: 'Positive', source: '5-7% rental yields' },
    { topic: 'Infrastructure', sentiment: 'Improving', source: 'Metro expansion, integration' },
    { topic: 'Regulatory framework', sentiment: 'Strengthening', source: 'RERA, quality laws' },
    { topic: 'International position', sentiment: 'Improving', source: 'FATF delisting, UHNWI growth' }
  ] as PositiveSentiment[],
  negativeSentiments: [
    { topic: 'Bubble risk', sentiment: 'Strong negative', source: 'UBS, Fitch warnings' },
    { topic: 'Affordability', sentiment: 'Critical negative', source: 'Only 20% affordable stock' },
    { topic: 'Labor practices', sentiment: 'Critical negative', source: '132,000 in modern slavery' },
    { topic: 'Gentrification', sentiment: 'Negative', source: 'Karama displacement' },
    { topic: 'Urban planning', sentiment: 'Negative', source: '"Resounding failure" Reddit' },
    { topic: 'Heat/green space', sentiment: 'Negative', source: '2-3% green space' },
    { topic: 'Money laundering', sentiment: 'Negative', source: 'Dubai Unlocked scandal' },
    { topic: 'Fire safety', sentiment: 'Negative', source: 'Combustible cladding still present' }
  ] as NegativeSentiment[],
  neutralConditionalSentiments: [
    { topic: 'Short-term investment', sentiment: 'Neutral/Cautious', notes: 'Depends on timing' },
    { topic: 'Quality construction', sentiment: 'Improving', notes: '96% compliance rate' },
    { topic: 'Surveillance', sentiment: 'Dual-use', notes: 'Smart city vs privacy' }
  ] as NeutralConditionalSentiment[],
  sentimentByStakeholder: [
    { stakeholder: 'Investors', overallSentiment: 'Cautious positive (short-term), Negative (long-term)' },
    { stakeholder: 'Residents (Expat)', overallSentiment: 'Negative (affordability, displacement)' },
    { stakeholder: 'Residents (Emirati)', overallSentiment: 'Positive (housing support)' },
    { stakeholder: 'Workers', overallSentiment: 'Strongly Negative (labor conditions)' },
    { stakeholder: 'Regulators', overallSentiment: 'Positive (improving standards)' },
    { stakeholder: 'Environment', overallSentiment: 'Negative (heat, green space)' }
  ] as StakeholderSentiment[]
}

// ============================================================================
// SECTION 25: DASHBOARD-READY DATA TABLES
// ============================================================================

export interface RealEstateKPI {
  kpi: string
  current: string
  previous: string
  change: string
  trend: string
}

export interface HousingAffordabilityKPI {
  kpi: string
  value: string
  target?: string
  status: string
}

export interface LaborSocialKPI {
  kpi: string
  value: string
  globalRankContext?: string
}

export interface EnvironmentalKPI {
  kpi: string
  value: string
  globalComparison: string
}

export interface ConstructionQualityKPI {
  kpi: string
  value: string
  status: string
}

export const dashboardDataTables = {
  realEstateMarketKPIs: [
    { kpi: 'Transaction Volume (Dubai)', current: 'AED 761B', previous: 'AED 559B', change: '+36%', trend: 'Up' },
    { kpi: 'Transaction Count', current: '226,000', previous: '166,000', change: '+36%', trend: 'Up' },
    { kpi: 'Off-Plan Share', current: '68%', previous: '65%', change: '+3pp', trend: 'Up' },
    { kpi: 'Average Price/sq ft (Dubai)', current: 'AED 2,062', previous: 'AED 1,718', change: '+20%', trend: 'Up' },
    { kpi: 'Rental Yield (Apts)', current: '7.0%', previous: '6.5%', change: '+0.5pp', trend: 'Up' },
    { kpi: 'Rental Yield (Villas)', current: '5.0%', previous: '4.8%', change: '+0.2pp', trend: 'Up' },
    { kpi: 'UBS Bubble Index', current: '0.64', previous: '0.58', change: '+0.06', trend: 'Worsening' }
  ] as RealEstateKPI[],
  housingAffordabilityKPIs: [
    { kpi: 'Max Affordable Sale', value: 'AED 790,000', status: 'Crisis' },
    { kpi: 'Max Affordable Rent', value: 'AED 72,000/year', status: 'Crisis' },
    { kpi: 'Affordable Stock %', value: '20%', target: '50%', status: 'Critical' },
    { kpi: 'Rent Increase (2023)', value: '20%', target: '<5%', status: 'Critical' },
    { kpi: 'Emirati Housing Budget', value: 'Dh9.5B', status: 'Adequate' }
  ] as HousingAffordabilityKPI[],
  laborSocialKPIs: [
    { kpi: 'Modern Slavery Count', value: '132,000', globalRankContext: '7th highest globally' },
    { kpi: 'Prevalence Rate', value: '13.4/1,000', globalRankContext: '2nd in Arab States' },
    { kpi: 'Migrant Worker %', value: '90%', globalRankContext: 'Highest globally' },
    { kpi: 'Traffic Deaths/100K', value: '18', globalRankContext: 'WHO data' }
  ] as LaborSocialKPI[],
  environmentalKPIs: [
    { kpi: 'Green Space %', value: '2-3%', globalComparison: 'NYC 27%, Mumbai 2.5%' },
    { kpi: 'Tree Coverage', value: '2%', globalComparison: 'Very low' },
    { kpi: 'UHI Temperature Diff', value: '1.3-3.3C', globalComparison: 'Significant' },
    { kpi: 'Temp Rise (decade)', value: '1.5C', globalComparison: 'Concerning' }
  ] as EnvironmentalKPI[],
  constructionQualityKPIs: [
    { kpi: 'Defects/Apartment', value: '150-300', status: 'Concerning' },
    { kpi: 'Compliance Rate', value: '96%', status: 'Good' },
    { kpi: 'Inspections H1 2025', value: '25,000+', status: '+36%' },
    { kpi: 'Fine Maximum', value: 'Dh2M', status: 'Strong deterrent' }
  ] as ConstructionQualityKPI[]
}

// ============================================================================
// SECTION 26: SOURCE CREDIBILITY MATRIX
// ============================================================================

export interface HighCredibilitySource {
  source: string
  type: string
  reliability: string
  coverage: string
}

export interface MediumCredibilitySource {
  source: string
  type: string
  reliability: string
  notes?: string
}

export interface LowCredibilitySource {
  source: string
  type: string
  issues: string
}

export const sourceCredibilityMatrix = {
  highCredibilitySources: [
    { source: 'Wikipedia', type: 'Encyclopedia', reliability: 'High', coverage: 'Historical data' },
    { source: 'UAE Government (u.ae)', type: 'Government', reliability: 'Very High', coverage: 'Official policies' },
    { source: 'Dubai Metro (Wikipedia)', type: 'Official/Verified', reliability: 'High', coverage: 'Metro statistics' },
    { source: 'Walk Free Foundation', type: 'NGO', reliability: 'High', coverage: 'Modern slavery data' },
    { source: 'OCCRP', type: 'Investigative journalism', reliability: 'Very High', coverage: 'Money laundering' },
    { source: 'Reuters', type: 'News wire', reliability: 'Very High', coverage: 'Market data' },
    { source: 'Fitch/MUBS', type: 'Rating agencies', reliability: 'Very High', coverage: 'Risk assessment' }
  ] as HighCredibilitySource[],
  mediumCredibilitySources: [
    { source: 'JLL', type: 'Real estate consultancy', reliability: 'High', notes: 'Market data' },
    { source: 'Savills', type: 'Real estate consultancy', reliability: 'High', notes: 'Market data' },
    { source: 'Engel & Volkers', type: 'Real estate', reliability: 'Medium-High', notes: 'Commercial interests' },
    { source: 'Global Mass Transit', type: 'Trade publication', reliability: 'Medium', notes: 'Industry data' },
    { source: 'Property Finder', type: 'Property portal', reliability: 'Medium', notes: 'Commercial interests' },
    { source: 'Reddit', type: 'Social media', reliability: 'Low-Medium', notes: 'User opinions' }
  ] as MediumCredibilitySource[],
  lowCredibilitySources: [
    { source: 'LinkedIn articles', type: 'Professional social', issues: 'Often promotional' },
    { source: 'Medium posts', type: 'Blog', issues: 'Variable quality' },
    { source: 'Unverified news', type: 'Various', issues: 'Fact-check required' }
  ] as LowCredibilitySource[]
}

// ============================================================================
// SECTION 27: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface DirectUAERelevance {
  topic: string
  relevanceScore: string
  coverage: string
}

export interface RegionalRelevance {
  topic: string
  relevanceScore: string
  notes: string
}

export interface GlobalRelevance {
  topic: string
  relevanceScore: string
  notes: string
}

export const uaeRelevanceAssessment = {
  directUAERelevance: [
    { topic: 'Dubai property prices', relevanceScore: 'Critical', coverage: 'Comprehensive' },
    { topic: 'Abu Dhabi housing', relevanceScore: 'Critical', coverage: 'Comprehensive' },
    { topic: 'Palm Islands development', relevanceScore: 'Critical', coverage: 'Moderate' },
    { topic: 'Dubai Metro/transit', relevanceScore: 'Critical', coverage: 'Comprehensive' },
    { topic: 'Rental regulations', relevanceScore: 'Critical', coverage: 'Moderate' },
    { topic: 'Property fraud', relevanceScore: 'High', coverage: 'Comprehensive' },
    { topic: 'Gentrification (Karama)', relevanceScore: 'High', coverage: 'Comprehensive' }
  ] as DirectUAERelevance[],
  regionalRelevance: [
    { topic: 'Gulf surveillance', relevanceScore: 'High', notes: 'UAE pioneered' },
    { topic: 'Kafala system', relevanceScore: 'High', notes: 'GCC-wide issue' },
    { topic: 'Estidama', relevanceScore: 'High', notes: 'Abu Dhabi-specific' },
    { topic: 'FATF gray listing', relevanceScore: 'High', notes: 'Regional implications' }
  ] as RegionalRelevance[],
  globalRelevance: [
    { topic: '2009 crash comparison', relevanceScore: 'High', notes: 'Precedent for other markets' },
    { topic: 'Smart city surveillance', relevanceScore: 'Medium', notes: 'Model for other cities' },
    { topic: 'Labor exploitation', relevanceScore: 'Medium', notes: 'Supply chain implications' },
    { topic: 'Urban heat mitigation', relevanceScore: 'Medium', notes: 'Other desert cities' }
  ] as GlobalRelevance[]
}

// ============================================================================
// APPENDIX A: KEY STATISTICS SUMMARY
// ============================================================================

export interface KeyStatisticSummary {
  category: string
  stats: { statistic: string; value: string }[]
}

export const keyStatisticsSummary = {
  realEstateMarket: [
    { statistic: '2024 Dubai transaction volume', value: 'AED 761 billion' },
    { statistic: '2024 transactions', value: '226,000' },
    { statistic: 'Off-plan share', value: '68%' },
    { statistic: 'Avg price/sq ft (Dubai city centre)', value: 'AED 2,062' },
    { statistic: 'Gross rental yield (apartments)', value: '7%' },
    { statistic: 'Gross rental yield (villas)', value: '5%' },
    { statistic: 'UBS Bubble Index', value: '0.64' },
    { statistic: 'Max affordable sale price', value: 'AED 790,000' },
    { statistic: 'Max affordable annual rent', value: 'AED 72,000' }
  ],
  demographicsLabor: [
    { statistic: 'Total population', value: '9.8 million' },
    { statistic: 'Non-citizen share', value: '87.9%' },
    { statistic: 'Migrant workers', value: '8 million' },
    { statistic: 'Modern slavery count', value: '132,000' },
    { statistic: 'Prevalence rate', value: '13.4/1,000' },
    { statistic: 'Kafala system', value: 'Active' }
  ],
  urbanDevelopment: [
    { statistic: 'Green space %', value: '2-3%' },
    { statistic: 'Tree coverage', value: '2%' },
    { statistic: 'UHI temperature difference', value: '1.3-3.3C' },
    { statistic: 'Metro length', value: '89.6 km' },
    { statistic: 'Metro stations', value: '55' },
    { statistic: 'Daily metro ridership', value: '755,000' }
  ],
  infrastructureSafety: [
    { statistic: 'Daily commuters', value: '1 million' },
    { statistic: 'Car ownership', value: '67%' },
    { statistic: 'Road deaths/100K', value: '18' },
    { statistic: 'Radar violations (2024)', value: '2 million+' },
    { statistic: 'Construction compliance', value: '96%' },
    { statistic: 'Defects per apartment', value: '150-300' }
  ]
}

// ============================================================================
// APPENDIX B: KEY ENTITIES
// ============================================================================

export interface GovernmentAgencyEntity {
  entity: string
  role: string
}

export interface MajorDeveloperEntity {
  developer: string
  projects: string
}

export interface RegulatoryFrameworkEntity {
  framework: string
  description: string
}

export const keyEntities = {
  governmentAgencies: [
    { entity: 'Dubai Land Department (DLD)', role: 'Property regulation' },
    { entity: 'RERA', role: 'Real estate regulatory agency' },
    { entity: 'Dubai Municipality', role: 'Construction oversight' },
    { entity: 'Dubai Civil Defence', role: 'Fire safety' },
    { entity: 'Abu Dhabi Housing Authority (ADHA)', role: 'Emirati housing' },
    { entity: 'UAE FIU', role: 'Anti-money laundering' },
    { entity: 'Roads and Transport Authority (RTA)', role: 'Transportation' },
    { entity: 'TAMM', role: 'Abu Dhabi government services' }
  ] as GovernmentAgencyEntity[],
  majorDevelopers: [
    { developer: 'Emaar Properties', projects: 'Burj Khalifa, Downtown Dubai' },
    { developer: 'Damac Properties', projects: 'DAMAC Tower, Akoya' },
    { developer: 'Nakheel', projects: 'Palm Islands, Dubai Islands' },
    { developer: 'Aldar Properties', projects: 'Yas Island, Abu Dhabi projects' },
    { developer: 'AHS Properties', projects: 'Al Yaqoub Tower refurbishment' }
  ] as MajorDeveloperEntity[],
  regulatoryFrameworks: [
    { framework: 'UAE Fire and Life Safety Code', description: 'Building fire standards (2017)' },
    { framework: 'Estidama/Pearl Rating', description: 'Sustainable building (Abu Dhabi)' },
    { framework: 'RERA regulations', description: 'Property transaction rules' },
    { framework: 'FATF recommendations', description: 'AML compliance' },
    { framework: 'Federal Decree-Law No. 14 of 2024', description: 'Traffic law' }
  ] as RegulatoryFrameworkEntity[]
}

// ============================================================================
// APPENDIX C: TIMELINE OF KEY EVENTS
// ============================================================================

export interface TimelineEvent {
  year: string
  event: string
}

export const timelineOfKeyEvents = [
  { year: '1960', event: 'Dubai Land Department established' },
  { year: '1978', event: 'Sheikh Rashid Colony built (Karama)' },
  { year: '1980', event: 'Dubai population ~255,000' },
  { year: '2001', event: 'Palm Islands construction begins' },
  { year: '2002', event: 'Foreigner freehold property law' },
  { year: '2006', event: '109 Indian worker suicides' },
  { year: '2007', event: 'RERA established' },
  { year: '2008', event: 'Global financial crisis hits Dubai' },
  { year: '2009', event: 'Housing crash: 40-60% price decline' },
  { year: '2010', event: 'Palm Jumeirah opening ceremony' },
  { year: '2011', event: 'Dubai Metro Green Line opens' },
  { year: '2012', event: 'Karama demolition begins' },
  { year: '2014', event: 'Expo 2020 bid win' },
  { year: '2015', event: 'Worker visa reform' },
  { year: '2016', event: 'First GCC kafala reform' },
  { year: '2017', event: 'UAE Fire and Life Safety Code' },
  { year: '2018', event: 'Karama bridges opened' },
  { year: '2019', event: 'Dubai population ~3.8 million' },
  { year: '2020', event: 'COVID-19 pandemic' },
  { year: '2021', event: 'UAE FATF gray listing' },
  { year: '2022', event: 'DAMAC building fire' },
  { year: '2023', event: 'Post-pandemic recovery peak' },
  { year: '2024', event: 'UAE removed from FATF gray list' },
  { year: '2025', event: 'Dubai Loop announced, Metro Blue Line' },
  { year: '2026', event: 'Dh9.5B housing package, Fitch warning' }
] as TimelineEvent[]

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentDate: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 28,
  pagesFetched: '24+',
  urlsEnriched: '30+',
  reportType: 'SSOT (Single Source of Truth)',
  coverage: 'UAE Property Market, Developments, Developers, Property Prices, Rental Rates, Ownership Laws, Investment Data',
  dataFreshness: 'Most data current as of April 2026; historical references validated',
  completeness: '95% - Comprehensive coverage of all major UAE real estate topics'
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface RealEstateData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  executiveSummary: typeof executiveSummary
  realEstateMarketOverview: typeof realEstateMarketOverview
  propertyPricesTransactionData: typeof propertyPricesTransactionData
  bubbleRiskAssessment: typeof bubbleRiskAssessment
  offPlanDevelopmentProjects: typeof offPlanDevelopmentProjects
  ghostBuildingsAbandonedProjects: typeof ghostBuildingsAbandonedProjects
  propertyFraudScams: typeof propertyFraudScams
  moneyLaunderingVulnerabilities: typeof moneyLaunderingVulnerabilities
  laborConditionsModernSlavery: typeof laborConditionsModernSlavery
  affordableHousingCrisis: typeof affordableHousingCrisis
  emiratiHousingPrograms: typeof emiratiHousingPrograms
  urbanPlanningCriticism: typeof urbanPlanningCriticism
  walkabilityPublicSpace: typeof walkabilityPublicSpace
  carCentricDesign: typeof carCentricDesign
  smartCitySurveillance: typeof smartCitySurveillance
  constructionQuality: typeof constructionQuality
  fireSafetyCladding: typeof fireSafetyCladding
  gentrification: typeof gentrification
  environmentalChallenges: typeof environmentalChallenges
  publicTransportation: typeof publicTransportation
  parkingPolicy: typeof parkingPolicy
  roadSafety: typeof roadSafety
  sustainableBuildingEstidama: typeof sustainableBuildingEstidama
  sentimentAnalysis: typeof sentimentAnalysis
  dashboardDataTables: typeof dashboardDataTables
  sourceCredibilityMatrix: typeof sourceCredibilityMatrix
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  keyStatisticsSummary: typeof keyStatisticsSummary
  keyEntities: typeof keyEntities
  timelineOfKeyEvents: typeof timelineOfKeyEvents
  reportMetadata: typeof reportMetadata
}

export const realEstateData: RealEstateData = {
  id: 'topic-2-14',
  sector: 'policy',
  title: 'Real Estate & Urban Development',
  titleAr: 'العقارات والتنمية الحضرية',
  description: 'UAE property market, developments, developers, property prices, rental rates, ownership laws, investment data, urban planning, labor conditions, environmental challenges',
  executiveSummary,
  realEstateMarketOverview,
  propertyPricesTransactionData,
  bubbleRiskAssessment,
  offPlanDevelopmentProjects,
  ghostBuildingsAbandonedProjects,
  propertyFraudScams,
  moneyLaunderingVulnerabilities,
  laborConditionsModernSlavery,
  affordableHousingCrisis,
  emiratiHousingPrograms,
  urbanPlanningCriticism,
  walkabilityPublicSpace,
  carCentricDesign,
  smartCitySurveillance,
  constructionQuality,
  fireSafetyCladding,
  gentrification,
  environmentalChallenges,
  publicTransportation,
  parkingPolicy,
  roadSafety,
  sustainableBuildingEstidama,
  sentimentAnalysis,
  dashboardDataTables,
  sourceCredibilityMatrix,
  uaeRelevanceAssessment,
  keyStatisticsSummary,
  keyEntities,
  timelineOfKeyEvents,
  reportMetadata
}

export default realEstateData
