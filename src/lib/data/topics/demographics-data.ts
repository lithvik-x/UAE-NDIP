// @ts-nocheck
/**
 * Demographics & Migration - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-19-demographics-migration-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: POPULATION SIZE & GROWTH
// ============================================================================

export interface PopulationEstimate {
  source: string
  year: number
  population: string
  notes?: string
}

export interface PopulationGrowthEntry {
  year: number
  population: string
  growthRate?: string
  source: string
}

export interface GenderDistributionEntry {
  metric: string
  value: string
  year: number
}

export const populationSizeGrowth = {
  currentEstimates: [
    { source: 'Worldometer', year: 2026, population: '11,574,682', notes: 'Real-time estimate' },
    { source: 'Global Media Insight', year: 2026, population: '11.57 million', notes: 'Monthly tracking' },
    { source: 'Gulf News', year: 2024, population: '11,294,243', notes: 'Official growth data' },
    { source: 'GMI Research', year: 2025, population: '11.35 million', notes: 'Annual estimate' },
    { source: 'Macrotrends', year: 2025, population: '9,665,319', notes: 'Official estimate' },
    { source: 'Worldometer', year: 2024, population: '11,027,129', notes: 'Historical' },
    { source: 'UN/World Bank', year: 2023, population: '10,642,081', notes: 'WHO verified' }
  ] as PopulationEstimate[],
  growthTrajectory: [
    { year: 2026, population: '11,574,682', source: 'Worldometer' },
    { year: 2025, population: '11,346,000', source: 'Worldometer' },
    { year: 2024, population: '11,294,243 (+5.7%)', growthRate: '5.7%', source: 'Gulf News' },
    { year: 2024, population: '11,027,129', source: 'Worldometer' },
    { year: 2023, population: '10,678,556', source: 'Gulf News' },
    { year: 2023, population: '10,642,081', source: 'WHO' },
    { year: 2020, population: '9,282,410', source: 'UAE Government' },
    { year: 2017, population: '9,304,277', source: 'MOFA' },
    { year: 2000, population: '3,170,000', source: 'Gulf News' }
  ] as PopulationGrowthEntry[],
  genderDistribution: [
    { metric: 'Male population', value: '7,235,074 (64%)', year: 2024 },
    { metric: 'Female population', value: '4,059,169 (36%)', year: 2024 },
    { metric: 'Male/Female ratio', value: '2.21:1', year: 2022 },
    { metric: 'Birth sex ratio', value: '1.06 males/female', year: 2022 }
  ] as GenderDistributionEntry[],
  keyInsight: 'The discrepancy between estimates (9.6M vs 11.5M) reflects different methodologies regarding transient workers, undocumented migrants, and whether all seven emirates are fully counted.',
  growthAnalysis: 'UAE population has more than tripled since 2000, driven primarily by expatriate labor migration.',
  genderRatioAnalysis: 'The skewed gender ratio (2.21:1) reflects the male-dominated labor migration pattern, with construction, security, and industrial sectors attracting predominantly male workers.'
}

// ============================================================================
// SECTION 2: NATIONAL VS EXPATRIATE COMPOSITION
// ============================================================================

export interface PopulationBreakdown {
  category: string
  population: string
  percentage: string
  year: number
}

export interface ExpatriateNationality {
  rank: number
  nationality: string
  population: string
  percentOfTotal: string
  year: number
}

export interface EmiratePopulation {
  emirate: string
  population: string
  percentOfTotal: string
  yoyGrowth?: string
}

export interface IndianDiasporaMetric {
  metric: string
  value: string
}

export interface IndianRegionalDistribution {
  state: string
  percentOfIndianPopulation: string
  population: string
}

export interface IndianSocioeconomicProfile {
  category: string
  percentage: string
}

export const nationalExpatriateComposition = {
  populationBreakdown: [
    { category: 'Total Expatriates', population: '10.24 million', percentage: '88.5%', year: 2026 },
    { category: 'Total Nationals (Emirati)', population: '1.33 million', percentage: '11.5%', year: 2026 },
    { category: 'Expatriates', population: '10.04 million', percentage: '88.5%', year: 2025 },
    { category: 'Nationals', population: '1.31 million', percentage: '11.5%', year: 2025 }
  ] as PopulationBreakdown[],
  globalRanking: 'UAE has the second-highest expatriate percentage globally, only after Vatican City.',
  expatriateNationalities: [
    { rank: 1, nationality: 'India', population: '4,390,000', percentOfTotal: '37.96%', year: 2026 },
    { rank: 2, nationality: 'Pakistan', population: '1,940,000', percentOfTotal: '16.72%', year: 2026 },
    { rank: 3, nationality: 'Bangladesh', population: '850,000', percentOfTotal: '7.38%', year: 2024 },
    { rank: 4, nationality: 'Philippines', population: '800,000', percentOfTotal: '6.89%', year: 2026 },
    { rank: 5, nationality: 'Iran', population: '550,000', percentOfTotal: '4.72%', year: 2025 },
    { rank: 6, nationality: 'Egypt', population: '490,000', percentOfTotal: '4.23%', year: 2022 },
    { rank: 7, nationality: 'Nepal', population: '450,000', percentOfTotal: '3.89%', year: 2025 },
    { rank: 8, nationality: 'China', population: '370,000', percentOfTotal: '3.20%', year: 2025 },
    { rank: 9, nationality: 'Sri Lanka', population: '300,000', percentOfTotal: '2.59%', year: 2021 },
    { rank: 10, nationality: 'Afghanistan', population: '300,000', percentOfTotal: '2.59%', year: 2025 },
    { rank: 11, nationality: 'Palestine', population: '300,000', percentOfTotal: '2.59%', year: 2023 },
    { rank: 12, nationality: 'United Kingdom', population: '240,000', percentOfTotal: '2.07%', year: 2026 },
    { rank: 13, nationality: 'Russia', population: '150,000', percentOfTotal: '1.29%', year: 2025 },
    { rank: 14, nationality: 'France', population: '64,000', percentOfTotal: '0.55%', year: 2026 },
    { rank: 15, nationality: 'United States', population: '50,000', percentOfTotal: '0.43%', year: 2018 }
  ] as ExpatriateNationality[],
  southAsianDominance: 'South Asians (India, Pakistan, Bangladesh, Nepal, Sri Lanka, Afghanistan) constitute approximately 68.36% of the total population.',
  populationByEmirate: [
    { emirate: 'Dubai', population: '4,470,000', percentOfTotal: '38.6%' },
    { emirate: 'Abu Dhabi', population: '4,140,000', percentOfTotal: '35.8%', yoyGrowth: '+7.5%' },
    { emirate: 'Sharjah', population: '1,810,000', percentOfTotal: '15.6%' },
    { emirate: 'Ajman', population: '505,000', percentOfTotal: '4.4%' },
    { emirate: 'Ras Al Khaimah', population: '345,000', percentOfTotal: '3.0%' },
    { emirate: 'Fujairah', population: '203,000', percentOfTotal: '1.8%' },
    { emirate: 'Umm Al Quwain', population: '49,000', percentOfTotal: '0.4%' }
  ] as EmiratePopulation[],
  concentration: '83% of population concentrated in Dubai, Abu Dhabi, and Sharjah.',
  indianDiaspora: {
    totalIndianPopulation: '~4 million (35.25% of 11.346M)',
    dubai: '~2 million (50%)',
    abuDhabi: '~800,000 (20%)',
    sharjah: '~720,000 (18%)',
    otherEmirates: '~480,000 (12%)'
  } as IndianDiasporaMetric[],
  indianRegionalDistribution: [
    { state: 'Kerala', percentOfIndianPopulation: '35%', population: '1.4 million' },
    { state: 'Tamil Nadu', percentOfIndianPopulation: '15%', population: '600,000' },
    { state: 'Andhra Pradesh & Telangana', percentOfIndianPopulation: '14%', population: '560,000' },
    { state: 'Maharashtra', percentOfIndianPopulation: '10%', population: '400,000' },
    { state: 'Punjab', percentOfIndianPopulation: '8%', population: '320,000' },
    { state: 'Gujarat', percentOfIndianPopulation: '7%', population: '280,000' },
    { state: 'Uttar Pradesh & Bihar', percentOfIndianPopulation: '6%', population: '240,000' }
  ] as IndianRegionalDistribution[],
  indianSocioeconomicProfile: [
    { category: 'Blue-collar workers', percentage: '65%' },
    { category: 'White-collar non-professionals', percentage: '20%' },
    { category: 'Professionals/Entrepreneurs', percentage: '15%' }
  ] as IndianSocioeconomicProfile[],
  indianBusinessPresence: {
    smes: '40,000+ contributing ~$37 billion investments',
    techStartups: '200+ raised $1.2+ billion since 2020',
    indianCurriculumSchools: '75+'
  }
}

// ============================================================================
// SECTION 3: VITAL STATISTICS
// ============================================================================

export interface VitalStatistic {
  metric: string
  value: string
  year: number
}

export interface LifeExpectancyEntry {
  metric: string
  years: string
  year: number
}

export interface AgeStructureEntry {
  ageGroup: string
  percentage: string
}

export interface MedianAgeDensityEntry {
  metric: string
  value: string
  year: number
}

export const vitalStatistics = {
  birthDeathRates: [
    { metric: 'Birth rate', value: '10.81 births/1,000', year: 2022 },
    { metric: 'Death rate', value: '1.56 deaths/1,000', year: 2022 },
    { metric: 'Fertility rate', value: '1.46 children/woman', year: 2022 },
    { metric: 'Infant mortality', value: '5.14/1,000 live births', year: 2022 },
    { metric: 'Net migration', value: '3.45/1,000', year: 2022 }
  ] as VitalStatistic[],
  lifeExpectancy: [
    { metric: 'Overall', years: '79.56', year: 2022 },
    { metric: 'Male', years: '78.21', year: 2022 },
    { metric: 'Female', years: '80.99', year: 2022 }
  ] as LifeExpectancyEntry[],
  ageStructure: [
    { ageGroup: '0-14 years', percentage: '14.45%' },
    { ageGroup: '15-64 years', percentage: '83.65%' },
    { ageGroup: '65+ years', percentage: '1.90%' },
    { ageGroup: 'Age 25-54', percentage: '64.12%' }
  ] as AgeStructureEntry[],
  medianAgeDensity: [
    { metric: 'Median age', value: '31.6 years', year: 2026 },
    { metric: 'Median age', value: '33.6 years', year: 2024 },
    { metric: 'Population density', value: '165.84/sq km', year: 2026 },
    { metric: 'Population density', value: '114/sq km', year: 2024 }
  ] as MedianAgeDensityEntry[]
}

// ============================================================================
// SECTION 4: GOLDEN VISA PROGRAM
// ============================================================================

export interface GoldenVisaYear {
  year: number
  visasIssued: string
  cumulativeTotal: string
  notes?: string
}

export interface GoldenVisaRecipientsByNationality {
  nationality: string
  percentage: string
  priority: string
}

export interface RussianInvestmentImpact {
  metric: string
  value: string
  timeframe: string
}

export interface GoldenVisaEligibilityCategory {
  category: string
  details: string
}

export interface GoldenVisaPolicyUpdate {
  year: string
  update: string
}

export const goldenVisaProgram = {
  yearByYearIssuance: [
    { year: 2020, visasIssued: '~10,000', cumulativeTotal: '10,000', notes: 'Investors, doctors' },
    { year: 2021, visasIssued: '~44,000', cumulativeTotal: '54,000', notes: 'New categories added' },
    { year: 2022, visasIssued: '79,617', cumulativeTotal: '133,617', notes: 'Freelancers eligible' },
    { year: 2023, visasIssued: '158,000', cumulativeTotal: '291,617', notes: 'Near-doubled' },
    { year: 2024, visasIssued: '~100,000+', cumulativeTotal: '~391,617', notes: 'Continued growth' },
    { year: 2025, visasIssued: '~120,000+ (est.)', cumulativeTotal: '~511,617+', notes: 'On track' }
  ] as GoldenVisaYear[],
  total2020_2025: '350,000+',
  growthPercentage: '900%+',
  recipientsByNationality: [
    { nationality: 'India', percentage: '~32%', priority: 'Highest' },
    { nationality: 'Pakistan', percentage: '~16%', priority: 'High' },
    { nationality: 'United Kingdom', percentage: '~10%', priority: 'Medium-High' },
    { nationality: 'Russia', percentage: '~5%', priority: 'Medium' },
    { nationality: 'USA', percentage: '~5%', priority: 'Medium' },
    { nationality: 'Others', percentage: '~32%', priority: 'Various' }
  ] as GoldenVisaRecipientsByNationality[],
  keyInsight: 'Top 4 nationalities represent approximately 63% of all golden visa approvals.',
  russianInvestmentImpact: [
    { metric: 'Dubai property purchases', value: 'US$6.3 billion', timeframe: 'Since early 2022' },
    { metric: 'Comparison to pre-invasion', value: '10x increase', timeframe: 'vs. pre-2022' }
  ] as RussianInvestmentImpact[],
  eligibilityCategories_10Year: [
    { category: 'Real estate investors', details: 'minimum AED 2 million' },
    { category: 'Investors in public investments', details: '' },
    { category: 'Entrepreneurs with innovative projects', details: '' },
    { category: 'Outstanding students', details: 'secondary school 95%+ or university 3.75+ GPA' },
    { category: 'Specialized doctors', details: 'nominated by DOH' },
    { category: 'Scientists and researchers', details: '' },
    { category: 'Artists and creative professionals', details: '' },
    { category: 'Retired partners of golden visa holders', details: '' }
  ] as GoldenVisaEligibilityCategory[],
  policyUpdates2024: [
    { year: '2024', update: 'AED 1 million minimum down payment requirement cancelled' },
    { year: '2024', update: 'AED 30,000 ($8,200) minimum salary requirement introduced' }
  ] as GoldenVisaPolicyUpdate[]
}

// ============================================================================
// SECTION 5: VISA CATEGORIES & IMMIGRATION POLICY
// ============================================================================

export interface LongTermResidencyVisa {
  visaType: string
  duration: string
  launchYear: number
  targetGroup: string
}

export interface GreenVisaEligibility {
  requirement: string
  details: string
}

export interface BlueResidencyCategory {
  category: number
  name: string
  details: string
}

export interface BlueResidencyBenefit {
  benefit: string
}

export interface WorkPermitType {
  permitType: string
  description: string
}

export const visaCategoriesImmigration = {
  longTermResidencyVisas: [
    { visaType: 'Golden Visa', duration: '10 years', launchYear: 2019, targetGroup: 'Investors, talent, entrepreneurs' },
    { visaType: 'Green Visa', duration: '5 years', launchYear: 2022, targetGroup: 'Freelancers, self-employed, skilled' },
    { visaType: 'Blue Residency', duration: '10 years', launchYear: 2024, targetGroup: 'Environmental contributors' }
  ] as LongTermResidencyVisa[],
  greenVisa: {
    eligibility: [
      { requirement: 'Freelancers and self-employed persons', details: '' },
      { requirement: 'Skilled employees', details: 'with employment contract' },
      { requirement: 'Minimum salary requirement', details: 'AED 15,000/month' },
      { requirement: 'Valid for 5 years, renewable', details: '' }
    ] as GreenVisaEligibility[],
    benefits: [
      'Self-sponsorship without employer',
      'Family residency sponsorship',
      'No employer sponsor required'
    ]
  },
  blueResidency: {
    launch: 2024,
    duration: '10-year renewable',
    eligibilityCategories: [
      { category: 1, name: 'Distinguished Influencers', details: 'environment, energy, sustainability, climate' },
      { category: 2, name: 'Scientists & Researchers', details: 'PhD from top 500 global universities, FWCI 1.0+ or h-index 10+' },
      { category: 3, name: 'Investors & Entrepreneurs', details: 'AED 2M+ capital in environmental sectors' },
      { category: 4, name: 'Inventors & Innovators', details: 'patents in clean energy/environment' },
      { category: 5, name: 'Elite Specialists', details: 'governmental/private environmental institutions' }
    ] as BlueResidencyCategory[],
    benefits: [
      '10-year renewable residency',
      'No UAE sponsor required',
      'Family residency permits',
      'Domestic worker sponsorship',
      '6-month multiple-entry visa',
      'Inheritance rights for family if holder passes'
    ] as BlueResidencyBenefit[]
  },
  workPermitTypes: [
    { permitType: 'Full-time employment', description: '' },
    { permitType: 'Part-time work', description: '' },
    { permitType: 'Temporary work', description: '' },
    { permitType: 'Seasonal work permits', description: 'agriculture, tourism, hospitality' },
    { permitType: 'Flexi-permit', description: 'for job seekers' }
  ] as WorkPermitType[],
  mohrePermitCount: 'MOHRE (Ministry of Human Resources & Emiratisation) offers 13 types of work permits'
}

// ============================================================================
// SECTION 6: CITIZENSHIP & NATURALIZATION
// ============================================================================

export interface CitizenshipPathway {
  number: number
  pathway: string
  keyRequirements: string
}

export interface NaturalizationRequirement {
  requirement: string
  standard: string
  exceptions?: string
}

export interface GenderDiscriminationEntry {
  category: string
  men: string
  women: string
}

export const citizenshipNaturalization = {
  citizenshipPathways_11Total: [
    { number: 1, pathway: 'Marriage', keyRequirements: 'Foreign woman married to Emirati man' },
    { number: 2, pathway: 'Descent', keyRequirements: 'Emirati parent (father automatically; mother with conditions)' },
    { number: 3, pathway: 'Long-term residency', keyRequirements: '30 years continuous legal residence' },
    { number: 4, pathway: 'Investment', keyRequirements: 'Significant capital investment' },
    { number: 5, pathway: 'Exceptional talent', keyRequirements: 'Doctors, scientists, artists, inventors' },
    { number: 6, pathway: 'Children of Emirati women', keyRequirements: 'Special application process' },
    { number: 7, pathway: 'Nomination', keyRequirements: 'By federal/national entities' },
    { number: 8, pathway: 'Innovation', keyRequirements: 'Patents, unique contributions' },
    { number: 9, pathway: 'Restoration', keyRequirements: 'Former citizens seeking reinstatement' },
    { number: 10, pathway: 'Foundlings', keyRequirements: 'Stateless children found in UAE' },
    { number: 11, pathway: 'Naturalization', keyRequirements: 'Standard Arabic fluency + 30 years residency' }
  ] as CitizenshipPathway[],
  naturalizationRequirements: [
    { requirement: 'Legal residence', standard: '30 years', exceptions: 'Presidential discretion' },
    { requirement: 'Arabic language', standard: 'Fluent/Good', exceptions: '10 years for Arabs from Muslim countries' },
    { requirement: 'Good conduct', standard: 'Clean record', exceptions: '' },
    { requirement: 'Financial stability', standard: 'Steady income', exceptions: '' },
    { requirement: 'Mental health', standard: 'Sound', exceptions: '' },
    { requirement: 'Renounce prior citizenship', standard: 'Required', exceptions: 'Some exceptions' }
  ] as NaturalizationRequirement[],
  genderDiscrimination_HRW_2021: [
    { category: 'Automatic citizenship for children', men: 'Yes (if father Emirati)', women: 'No' },
    { category: 'Application process for children', men: 'Not required', women: 'Required (takes years)' },
    { category: 'Pathway through marriage', men: 'Wife only', women: 'Husband cannot apply' }
  ] as GenderDiscriminationEntry[],
  genderDiscriminationImpact: 'Children of Emirati mothers and foreign fathers face significant barriers despite meeting residency and other requirements.'
}

// ============================================================================
// SECTION 7: STATELESSNESS (BIDOON)
// ============================================================================

export interface BidoonPopulationEstimate {
  source: string
  estimate: string
  year: string
}

export interface BidoonIssue {
  issue: string
  details: string
}

export interface RightsDenied {
  right: string
}

export const statelessnessBidoon = {
  populationEstimates: [
    { source: 'UAE official', estimate: '15,000+', year: 'Various' },
    { source: 'UPR Info/UNHCR', estimate: '15,000-100,000+', year: '2008-2013' },
    { source: 'Human Rights First', estimate: 'Hundreds of thousands', year: '2022' }
  ] as BidoonPopulationEstimate[],
  historicalContext: [
    'Many trace origins to pre-1971 nomadic communities or immigrants',
    '2005 Khaleej Times claim: "No Stateless People in UAE" (disputed)'
  ],
  issues: [
    { issue: 'Historical Context', details: 'Many trace origins to pre-1971 nomadic communities or immigrants' },
    { issue: 'Official Denial', details: '2005 Khaleej Times claim: "No Stateless People in UAE" (disputed)' }
  ] as BidoonIssue[],
  rightsDeniedWithoutCitizenship: [
    'Healthcare access',
    'Employment (formal sector)',
    'University scholarships',
    'Birth certificates (for children)',
    'Identity cards',
    'Marriage certificates',
    'Driving licenses',
    'Travel documents'
  ] as RightsDenied[],
  childrenOfStatelessCouples: [
    'No path to citizenship regardless of UAE birth or residency duration',
    'Intergenerational statelessness'
  ],
  comorosCitizenshipDeal: {
    description: 'A controversial program offered Comoros citizenship to some stateless persons',
    reportedPayments: '$270,000-$575,000 per person',
    criticism: 'Human rights groups criticized the deal as inadequate and exploitative'
  }
}

// ============================================================================
// SECTION 8: BRAIN DRAIN / BRAIN GAIN INDEX
// ============================================================================

export interface BrainDrainIndexEntry {
  metric: string
  value: string
  year: number | string
}

export interface HumanFlightIndexComparison {
  metric: string
  value: string
}

export const brainDrainBrainGain = {
  uaeHumanFlightIndex: [
    { metric: '2024 Index', value: '1.80 (Lowest ever)', year: 2024 },
    { metric: '2023 Index', value: '2.10', year: 2023 },
    { metric: 'Historical Average (2007-2024)', value: '2.64', year: '17 years' },
    { metric: 'Maximum (worst)', value: '3.70', year: 2007 },
    { metric: 'World Average', value: '4.98', year: '176 countries' },
    { metric: 'Scale', value: '0 (low) to 10 (high)', year: '' }
  ] as BrainDrainIndexEntry[],
  interpretation: 'Lower index = less human displacement/brain drain. UAE\'s 1.8 in 2024 indicates significant brain GAIN, not brain drain.',
  globalComparison: 'UAE\'s index (1.8) is 64% below the world average (4.98), suggesting the UAE is a net attractor of talent rather than a source.',
  comparisons: [
    { metric: 'UAE Index', value: '1.8' },
    { metric: 'World Average', value: '4.98' },
    { metric: 'Below World Average', value: '64%' }
  ] as HumanFlightIndexComparison[]
}

// ============================================================================
// SECTION 9: REMITTANCE FLOWS
// ============================================================================

export interface RemittanceRankingEntry {
  metric: string
  value: string
  sourceYear?: string
}

export interface RemittanceCorridor {
  corridor: string
  amount: string
  notes: string
}

export interface AverageTicketSize {
  rank: number
  country: string
  averageTransferUSD: string
}

export interface RemittanceComposition {
  type: string
  amountUS: string
  share: string
}

export const remittanceFlows = {
  globalRanking: [
    { metric: 'Global ranking', value: '2nd-3rd largest sender', sourceYear: '2024' },
    { metric: 'Annual outflows', value: 'US$39.7 billion', sourceYear: '2022' }
  ] as RemittanceRankingEntry[],
  corridors: [
    { corridor: 'UAE-India', amount: '~$25.5 billion', notes: '2025 est.' },
    { corridor: 'UAE to Global', amount: '$39.7 billion', notes: '2022' },
    { corridor: 'India global remittances', amount: '$100 billion', notes: 'UAE = 18% of India\'s total' },
    { corridor: 'UAE-India', amount: '$22.8 billion', notes: '2023-24 (19.2% share)' }
  ] as RemittanceCorridor[],
  averageTicketSizeByDestination: [
    { rank: 1, country: 'United Kingdom', averageTransferUSD: '$1,263' },
    { rank: 2, country: 'India', averageTransferUSD: '$289' },
    { rank: 3, country: 'Egypt', averageTransferUSD: '$246' },
    { rank: 4, country: 'Nepal', averageTransferUSD: '$227' },
    { rank: 5, country: 'Indonesia', averageTransferUSD: '$201' }
  ] as AverageTicketSize[],
  composition2022: [
    { type: 'Private remittances', amountUS: '28.8B', share: '72.5%' },
    { type: 'Trade remittances', amountUS: '7.8B', share: '19.6%' },
    { type: 'Other remittances', amountUS: '2.9B', share: '7.3%' },
    { type: 'Investment remittances', amountUS: '0.2B', share: '0.5%' }
  ] as RemittanceComposition[],
  digitalGap: 'Only 15% of outward remittances via digital platforms vs. 52% global average.'
}

// ============================================================================
// SECTION 10: URBANIZATION & POPULATION DENSITY
// ============================================================================

export interface UrbanizationEntry {
  year: number
  urbanPopulationPercent: string
}

export interface PopulationDensityEntry {
  metric: string
  value: string
  source: string
}

export interface AbuDhabiCensusEntry {
  metric: string
  value: string
  change?: string
}

export interface DubaiPopulationEntry {
  metric: string
  value: string
  context?: string
}

export const urbanizationDensity = {
  urbanizationTrend: [
    { year: 2024, urbanPopulationPercent: '85.82%' },
    { year: 2023, urbanPopulationPercent: '85.67%' },
    { year: 2022, urbanPopulationPercent: '85.51%' },
    { year: 2021, urbanPopulationPercent: '85.36%' },
    { year: 2000, urbanPopulationPercent: '~81%' },
    { year: 1980, urbanPopulationPercent: '81.1%' },
    { year: 1995, urbanPopulationPercent: '78.26% (low point)' },
    { year: 1960, urbanPopulationPercent: '73.5%' }
  ] as UrbanizationEntry[],
  growthAnalysis: '12.32 percentage point increase over 64 years (1960-2024).',
  populationDensity: [
    { metric: '2026 density', value: '165.84/sq km', source: 'Geo Factbook' },
    { metric: '2024 density', value: '114/sq km', source: 'Wikipedia' },
    { metric: 'Global ranking', value: '83rd', source: 'SCAD' }
  ] as PopulationDensityEntry[],
  totalArea: 'Total area approximately 83,600 sq km.',
  abuDhabiCensus2024: [
    { metric: 'Population', value: '4.14 million', change: '+7.5% YoY' },
    { metric: 'Males', value: '66.9% (2.77 million)' },
    { metric: 'Females', value: '33.1%' }
  ] as AbuDhabiCensusEntry[],
  dubaiPopulation: [
    { metric: '2024 population', value: '3.825 million', context: '+4.6% (170K added)' },
    { metric: 'Growth since 2000', value: '317%', context: 'From 917,000' },
    { metric: 'Growth since 2020', value: '12%', context: '+414,000' },
    { metric: 'Daytime population', value: '5+ million', context: 'During peak hours' },
    { metric: '2040 target', value: '5.8 million residents', context: 'Official target' }
  ] as DubaiPopulationEntry[]
}

// ============================================================================
// SECTION 11: MARRIAGE & DIVORCE PATTERNS
// ============================================================================

export interface EmiratiMarriageTrend {
  metric: string
  value: string
  timePeriod?: string
}

export interface WeddingEconomicMetric {
  metric: string
  value: string
}

export interface DivorceStatistic {
  metric: string
  value: string
  source?: string
}

export interface DivorceCause {
  factor: number
  description: string
}

export interface ExpertQuote {
  quote: string
  source: string
}

export const marriageDivorcePatterns = {
  emiratiMarriageTrends: [
    { metric: 'Women 15-19 married', value: '57% → 8%', timePeriod: '1975 to 1995' },
    { metric: 'Average marriage age (educated women)', value: '27 years', timePeriod: '2005' },
    { metric: 'Average marriage age (no education)', value: '18 years', timePeriod: '2005' },
    { metric: 'Minimum legal marriage age', value: '18 years', timePeriod: 'Current' },
    { metric: 'Consanguineous marriage rate', value: '39%', timePeriod: 'Current' }
  ] as EmiratiMarriageTrend[],
  weddingEconomics: [
    { metric: 'Personal loans for weddings', value: '80% of Emirati men\'s loans' },
    { metric: 'Marriage Fund payout', value: '£12,000 to grooms' },
    { metric: 'Excessive spending fine', value: 'AED 500,000 ($140,000)' },
    { metric: 'Traditional wedding guests', value: 'Up to 1,000' }
  ] as WeddingEconomicMetric[],
  marriageFund: 'Marriage Fund (established 1992) provides financial support to encourage stable family formation.',
  divorceStatistics: [
    { metric: 'Divorce within first year', value: '~30%', source: 'Khaleej Times 2024' },
    { metric: 'Divorce within 4 years (Abu Dhabi)', value: '62%', source: 'Maudsley Health' },
    { metric: 'Emirati marriages ending in divorce', value: '~1 in 3', source: 'Historical (2005-2008)' },
    { metric: '2020-2024 total (4 northern emirates)', value: '2,857 cases', source: 'Federal courts' },
    { metric: 'Sharjah (2024)', value: '217 cases' },
    { metric: 'Ajman (2024)', value: '167 cases' },
    { metric: 'Fujairah (2024)', value: '67 cases' },
    { metric: 'Umm Al Quwain (2024)', value: '22 cases' }
  ] as DivorceStatistic[],
  expertAnalysisCauses: [
    { factor: 1, description: '"Discrepancy between expectation and reality"' },
    { factor: 2, description: 'Lack of communication skills' },
    { factor: 3, description: 'Social media influence creating unrealistic expectations' },
    { factor: 4, description: 'Expatriate stress and adjustment difficulties' },
    { factor: 5, description: 'Cultural/family pressure' }
  ] as DivorceCause[],
  expertQuote: {
    quote: '"Couples frequently fail to grasp the true emotional and logistical labour required for a successful partnership."',
    source: 'Hiba Salem, Sage Clinics'
  } as ExpertQuote
}

// ============================================================================
// SECTION 12: PASSPORT POWER & MOBILITY
// ============================================================================

export interface PassportRankingEntry {
  index: string
  ranking: string
  visaFreeDestinations?: string
  date: string
}

export interface PassportHistoricalMilestone {
  year: string
  milestone: string
}

export interface GlobalPassportComparison {
  country: string
  rank: string
  destinations?: string
}

export interface PassportFeature {
  feature: string
  details?: string
}

export const passportPowerMobility = {
  uaePassportRankings: [
    { index: 'Passport Index 2026', ranking: '1st globally', visaFreeDestinations: '181 (44 VoA + 10 eTA)', date: '2026' },
    { index: 'Henley Passport Index', ranking: '2nd (tied)', visaFreeDestinations: '187', date: 'April 2026' }
  ] as PassportRankingEntry[],
  historicalProgression: [
    { year: '1971', milestone: 'First passport issued' },
    { year: 'December 2011', milestone: 'Biometric passports introduced (2nd GCC after Qatar)' },
    { year: '2006-2016', milestone: 'Identified as top 5 most improved' },
    { year: '2017', milestone: 'Strategic goal: Top 5 by 2021' },
    { year: '2018', milestone: 'Achieved #1 on Passport Index (score 170)' },
    { year: 'September 2022', milestone: 'Second Generation Biometric Passport' },
    { year: '2021', milestone: 'Goal achieved early (Top 5)' },
    { year: '2026', milestone: 'Ranked 1st-2nd globally' }
  ] as PassportHistoricalMilestone[],
  globalComparison2026: [
    { country: 'UAE', rank: '5th', destinations: '184' },
    { country: 'New Zealand', rank: '6th' },
    { country: 'United Kingdom', rank: '7th' },
    { country: 'Australia', rank: '7th' },
    { country: 'Canada', rank: '8th' },
    { country: 'United States', rank: '10th' }
  ] as GlobalPassportComparison[],
  twentyYearGrowth: [
    { metric: 'Places gained since 2006', value: '+57' },
    { metric: 'Destinations gained', value: '+149 (35 to 184)' }
  ],
  notableFeature: 'UAE is among only 3 Muslim-majority countries whose citizens can travel to Israel without pre-arranged visa.',
  cost: {
    fiveYear: 'AED 40',
    tenYear: 'AED 90',
    replacement: 'AED 40'
  } as PassportFeature[]
}

// ============================================================================
// SECTION 13: SOCIAL COHESION & TOLERANCE
// ============================================================================

export interface ToleranceLegalFramework {
  year: string
  legislation: string
}

export interface ToleranceInstitution {
  institution: string
  year: string
  purpose: string
}

export interface LandmarkEvent {
  event: string
  date: string
  significance: string
}

export const socialCohesionTolerance = {
  legalFramework: [
    { year: '2015', legislation: 'Federal Decree Law No. 2 on Combating Discrimination and Hatred' },
    { year: '2016', legislation: 'Ministry of Tolerance established (Feb); National Tolerance Programme approved (June)' },
    { year: '2017', legislation: 'International Institute for Tolerance founded' },
    { year: '2018', legislation: 'Mohamed bin Zayed University for Humanities (offering world\'s first tolerance degree)' },
    { year: '2019', legislation: 'Year of Tolerance declared; Pope Francis visit (first Catholic Pope to Arabian Peninsula)' }
  ] as ToleranceLegalFramework[],
  keyInstitutions: [
    { institution: 'Forum for Promoting Peace in Muslim Society', year: '2014', purpose: 'Interfaith dialogue' },
    { institution: 'Al Hedayah', year: '2012', purpose: 'Counter-extremism think tank' },
    { institution: 'Al Sawab Center', year: '2015', purpose: 'Counter-extremist propaganda (partnered with US)' },
    { institution: 'International Institute for Tolerance', year: '2017', purpose: 'Tolerance education' },
    { institution: 'Emirates Fatwa Council', year: '2018', purpose: 'Islamic guidance' },
    { institution: 'Abrahamic Family House', year: '2023', purpose: 'Multi-faith complex (mosque, church, synagogue on Saadiyat Island)' }
  ] as ToleranceInstitution[],
  landmarkEvents: [
    { event: 'Pope Francis visit', date: 'February 2019', significance: 'First Catholic Pope to Arabian Peninsula' },
    { event: 'Document on Human Fraternity signing', date: '2019', significance: 'With Grand Imam of Al-Azhar' },
    { event: 'Abrahamic Family House opening', date: 'March 1, 2023', significance: 'Saadiyat Island multi-faith complex' },
    { event: 'World Tolerance Summit', date: '2018', significance: 'Global tolerance advocacy' },
    { event: 'Global Tolerance Alliance launch', date: 'Expo 2020 Dubai', significance: 'International cooperation' },
    { event: 'Faith Pavilion at COP28', date: '2023', significance: 'Muslim Council of Elders + UNEP' }
  ] as LandmarkEvent[],
  interfaithAchievement: 'No documented communal violence between religious groups in UAE history.'
}

// ============================================================================
// SECTION 14: UNDOCUMENTED MIGRATION & DETENTION
// ============================================================================

export interface UndocumentedPopulationEstimate {
  estimate: string
  source: string
  year: string
}

export interface DetentionDeportationEntry {
  metric: string
  value: string
  year?: string
}

export interface LegalFrameworkEntry {
  aspect: string
  detail: string
}

export interface DocumentedCondition {
  condition: string
  details: string
}

export const undocumentedMigrationDetention = {
  undocumentedPopulation: [
    { estimate: '~65,000', source: 'Migration Policy', year: '2013' },
    { estimate: 'Thousands deported', source: 'Global Detention Project', year: '2021' }
  ] as UndocumentedPopulationEstimate[],
  detentionDeportationData: [
    { metric: 'International migrants', value: '8,157,000 (73.97%)', year: '2024' },
    { metric: 'Refugees', value: '1,377', year: '2024' },
    { metric: 'Asylum applications', value: '6,257', year: '2024' },
    { metric: 'Detained asylum seekers', value: '2,700', year: '2023' },
    { metric: 'Admin detention entries', value: '14,000', year: '1999' },
    { metric: 'Immigration detention centers', value: '0', year: '2021' },
    { metric: 'Deportations/forced removals', value: '0', year: '2021' },
    { metric: 'Deaths in custody', value: 'No public data' }
  ] as DetentionDeportationEntry[],
  legalFramework: [
    { aspect: 'Maximum administrative detention', detail: '120 days (2021)' },
    { aspect: 'Maximum incarceration for immigration', detail: '182 days (2021)' },
    { aspect: 'Deportation authority', detail: 'Ministry of Interior (without court order)' },
    { aspect: 'Key legislation', detail: 'Federal Law by Decree No. 29 of 2021; Federal Law No. 13 of 1996' }
  ] as LegalFrameworkEntry[],
  documentedConditions: [
    { condition: 'Overcrowded, unhygienic conditions', details: 'Migrants detained in al-Wathba prison' },
    { condition: '62 persons per cell', details: '' },
    { condition: 'Deprivation of hygiene products', details: '' },
    { condition: 'Indefinite detention including incommunicado', details: '' },
    { condition: 'No appeal mechanism', details: '' }
  ] as DocumentedCondition[],
  recentPolicyChanges: {
    date: 'December 2025',
    fine: 'Fines up to AED 5 million for harboring undocumented migrants',
    source: 'VisaHQ News'
  }
}

// ============================================================================
// SECTION 15: REFUGEE & ASYLUM POLICY
// ============================================================================

export interface InternationalStatusEntry {
  status: string
  position: string
}

export interface RefugeeAsylumStatistic {
  category: string
  number: string
  year: number
}

export const refugeeAsylumPolicy = {
  internationalStatus: [
    { status: '1951 Refugee Convention', position: 'Not party' },
    { status: '1967 Protocol', position: 'Not party' },
    { status: 'UNHCR presence', position: 'Active (refugee status determination)' }
  ] as InternationalStatusEntry[],
  statistics: [
    { category: 'Refugees', number: '1,377', year: 2024 },
    { category: 'Asylum seekers', number: '6,257', year: 2024 },
    { category: 'Asylum applications (2019)', number: '7,270', year: 2019 },
    { category: 'Refugees (2019)', number: '~1,247-2,800', year: 2019 }
  ] as RefugeeAsylumStatistic[],
  nonRefoulement: 'UAE generally respects non-refoulement principle despite not being party to international conventions.'
}

// ============================================================================
// SECTION 16: MIGRANT WORKERS & KAFALA SYSTEM
// ============================================================================

export interface MigrantWorkerStatistic {
  metric: string
  value: string
}

export interface KafalaFeature {
  feature: string
  details: string
}

export interface LaborReform {
  reform: string
  year: string
  details: string
}

export const migrantWorkersKafala = {
  statistics: [
    { metric: 'Total migrant workers', value: '8.7 million' },
    { metric: '% of population', value: '88%' }
  ] as MigrantWorkerStatistic[],
  kafalaSystemFeatures: [
    { feature: 'Sponsorship system', details: 'tying workers to employers' },
    { feature: 'Employer consent', details: 'required for job change' },
    { feature: 'Passport retention', details: 'by employers (documented)' },
    { feature: 'Contract substitution', details: '(documented)' }
  ] as KafalaFeature[],
  laborReforms: [
    { reform: 'Voluntary pension scheme', year: '2024', details: 'Replacing end-of-service indemnities' },
    { reform: 'ILO conventions', year: 'Partial', details: 'Some ratified; not ICCPR or Migrant Workers Convention' }
  ] as LaborReform[]
}

// ============================================================================
// SECTION 17: RELIGIOUS & ETHNIC COMPOSITION
// ============================================================================

export interface ReligiousDistributionEntry {
  religion: string
  percentage: string
}

export interface LanguageSpoken {
  language: string
}

export const religiousEthnicComposition = {
  religiousDistribution2020: [
    { religion: 'Islam (total)', percentage: '74.5%' },
    { religion: '— Sunni', percentage: '63%' },
    { religion: '— Shia', percentage: '7%' },
    { religion: 'Christianity', percentage: '12.9%' },
    { religion: 'Hinduism', percentage: '6.2%' },
    { religion: 'Buddhism', percentage: '3.2%' },
    { religion: 'Other', percentage: '3.2%' }
  ] as ReligiousDistributionEntry[],
  languagesSpoken: [
    'Arabic (official)',
    'English (lingua franca)',
    'Hindi, Malayalam, Urdu, Pashto, Tagalog, Persian, Russian, and many others'
  ] as LanguageSpoken[]
}

// ============================================================================
// SECTION 18: INTERNAL MIGRATION
// ============================================================================

export interface InterEmirateFlow {
  flow: string
  details: string
}

export const internalMigration = {
  interEmirateMovement: [
    { flow: 'Dubai', details: 'largest economic hub' },
    { flow: 'Abu Dhabi', details: 'capital, oil wealth' },
    { flow: 'Sharjah', details: 'industrial, affordable' }
  ] as InterEmirateFlow[],
  note: 'Primary migration flows are between emirates, with concentration in these three areas.'
}

// ============================================================================
// SECTION 19: DIASPORA ENGAGEMENT
// ============================================================================

export interface EmiratiOutboundStudents {
  metric: string
  value: string
  year: number
}

export interface GlobalEmiratiDiaspora {
  category: string
}

export const diasporaEngagement = {
  outboundStudents: [
    { metric: 'Nationals enrolled abroad', value: '~18,600', year: 2022 }
  ] as EmiratiOutboundStudents[],
  globalDiaspora: [
    'Students abroad',
    'Business professionals',
    'Royal family connections'
  ] as GlobalEmiratiDiaspora[]
}

// ============================================================================
// SECTION 20: UAE POPULATION PROJECTIONS
// ============================================================================

export interface DubaiTarget {
  metric: string
  target: string
}

export interface AbuDhabiGrowth {
  description: string
}

export const populationProjections = {
  dubai2040Target: [
    { metric: 'Resident population', target: '5.8 million' },
    { metric: 'Daytime population', target: '7.8 million' }
  ] as DubaiTarget[],
  abuDhabiGrowth: {
    description: 'Strong non-oil GDP growth driving continued population expansion with sustainable development vision.'
  } as AbuDhabiGrowth
}

// ============================================================================
// SECTION 21: DATA SOURCES & CREDIBILITY ASSESSMENT
// ============================================================================

export interface SourceCredibility {
  source: string
  type: string
  credibility: string
  uaeRelevance: string
}

export interface SourceURL {
  number: number
  source: string
  url: string
}

export const dataSourcesCredibility = {
  sourceCredibilityMatrix: [
    { source: 'WHO Data', type: 'Official International', credibility: 'High', uaeRelevance: 'Primary health statistics' },
    { source: 'UAE MOFA', type: 'Government Official', credibility: 'Very High', uaeRelevance: 'Official figures' },
    { source: 'SCAD (Abu Dhabi)', type: 'Government Statistical', credibility: 'Very High', uaeRelevance: 'Primary census data' },
    { source: 'Gulf News', type: 'Major Media', credibility: 'High', uaeRelevance: 'Current events' },
    { source: 'Wikipedia', type: 'Crowdsourced', credibility: 'Medium', uaeRelevance: 'Compilation source' },
    { source: 'Worldometer', type: 'Aggregator', credibility: 'Medium', uaeRelevance: 'Real-time estimates' },
    { source: 'Migration Policy', type: 'Research Institute', credibility: 'High', uaeRelevance: 'Migration analysis' },
    { source: 'Human Rights Watch', type: 'NGO', credibility: 'High', uaeRelevance: 'Rights documentation' },
    { source: 'Henley & Partners', type: 'Private Index', credibility: 'High', uaeRelevance: 'Passport rankings' },
    { source: 'Global Detention Project', type: 'NGO', credibility: 'High', uaeRelevance: 'Migration detention' }
  ] as SourceCredibility[],
  urlIndex: [
    { number: 1, source: 'WHO Data', url: 'https://data.who.int/countries/784' },
    { number: 2, source: 'UNFPA', url: 'https://www.unfpa.org/data/world-population/AE' },
    { number: 3, source: 'Our World in Data', url: 'https://ourworldindata.org' },
    { number: 4, source: 'UAE MOFA', url: 'https://mofa.gov.ae' },
    { number: 5, source: 'UAE Government (u.ae)', url: 'https://u.ae' },
    { number: 6, source: 'Wikipedia UAE', url: 'https://en.wikipedia.org/wiki/United_Arab_Emirates' },
    { number: 7, source: 'Wikipedia Demographics', url: 'https://en.wikipedia.org/wiki/Demographics_of_the_United_Arab_Emirates' },
    { number: 8, source: 'Wikipedia Expatriates', url: 'https://en.wikipedia.org/wiki/Expatriates_in_the_United_Arab_Emirates' },
    { number: 9, source: 'Wikipedia Indian Diaspora', url: 'https://en.wikipedia.org/wiki/Indian_diaspora_in_the_United_Arab_Emirates' },
    { number: 10, source: 'Wikipedia Marriage UAE', url: 'https://en.wikipedia.org/wiki/Marriage_in_the_United_Arab_Emirates' },
    { number: 11, source: 'Wikipedia Emirati Passport', url: 'https://en.wikipedia.org/wiki/Emirati_passport' },
    { number: 12, source: 'Wikipedia Bedoon', url: 'https://en.wikipedia.org/wiki/Bedoon' },
    { number: 13, source: 'Worldometer', url: 'https://www.worldometers.info/world-population/united-arab-emirates-population/' },
    { number: 14, source: 'Global Media Insight', url: 'https://www.globalmediainsight.com/blog/uae-population-statistics/' },
    { number: 15, source: 'Migration Policy', url: 'https://www.migrationpolicy.org/country-resource/united-arab-emirates' },
    { number: 16, source: 'Human Rights Watch', url: 'https://www.hrw.org/news/2021/02/05/uaes-double-standard-citizenship-rights' },
    { number: 17, source: 'Global Economy', url: 'https://www.theglobaleconomy.com/United-Arab-Emirates/human_flight_brain_drain_index/' },
    { number: 18, source: 'Henley & Partners', url: 'https://www.henleyglobal.com/newsroom/press-releases/henley-passport-index-uae' },
    { number: 19, source: 'Maudsley Health', url: 'https://maudsleyhealth.com/divorce-in-uae/' },
    { number: 20, source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/uae-marriages-divorce-data-experts-concerned' },
    { number: 21, source: 'Gulf News', url: 'https://gulfnews.com/uae/government/uae-population-hits-113-million-in-2024-1.500261527' },
    { number: 22, source: 'IMI Daily', url: 'https://www.imidaily.com/mena/the-first-5-years-of-the-uae-golden-visa-examining-its-impact-and-evolution/' },
    { number: 23, source: 'Funding Souq', url: 'https://fundingsouq.com/ae/en/blog/what-are-the-main-pathways-to-uae-citizenship/' },
    { number: 24, source: 'Global Detention Project', url: 'https://www.globaldetentionproject.org/countries/middle-east/united-arab-emirates' },
    { number: 25, source: 'Payments CMI', url: 'https://paymentscmi.com/insights/united-arab-emirates-remittances-market-data-overview/' },
    { number: 26, source: 'Statista', url: 'https://www.statista.com/statistics/455950/urbanization-in-united-arab-emirates/' },
    { number: 27, source: 'Macrotrends', url: 'https://www.macrotrends.net/global-metrics/countries/are/uae/population' },
    { number: 28, source: 'Geo Factbook', url: 'https://geofactbook.com/countries/united-arab-emirates/population-density' },
    { number: 29, source: 'Abu Dhabi Census', url: 'https://census.scad.gov.ae/' },
    { number: 30, source: 'SCAD Atlas', url: 'https://atlas.fgic.gov.ae/uaeatlas/Population/UrbanAndRural?lang=en' },
    { number: 31, source: 'ICP UAE', url: 'https://icp.gov.ae/en/services/blue-residency/' },
    { number: 32, source: 'MOHRE', url: 'https://mohre.gov.ae/en' },
    { number: 33, source: 'Manara Magazine', url: 'https://manaramagazine.org/2023/08/uae-tolerance-religious-violence/' },
    { number: 34, source: 'PRYPCO', url: 'https://prypco.com/blogs/which-nationalities-are-getting-the-uae-golden-visa-a-data-backed-look-at-dubais-long-term-residency-boom' },
    { number: 35, source: 'Golden Visa Stats', url: 'https://goldenvisaforfreelancers.com/uae-golden-visa-statistics-trends/' },
    { number: 36, source: 'Migrants-Refugees VA', url: 'https://migrants-refugees.va/country-profile/united-arab-emirates/' }
  ] as SourceURL[]
}

// ============================================================================
// SECTION 22: SENTIMENT & UAE RELEVANCE ANALYSIS
// ============================================================================

export interface DataSentimentEntry {
  category: string
  overallSentiment: string
  notes: string
}

export interface UAERelevanceEntry {
  topic: string
  uaeRelevance: string
  globalSignificance: string
}

export const sentimentUAERelevance = {
  dataSentimentByCategory: [
    { category: 'Population statistics', overallSentiment: 'Neutral/Positive', notes: 'Growth indicates economic strength' },
    { category: 'Golden Visa program', overallSentiment: 'Positive', notes: 'Success story, talent attraction' },
    { category: 'Citizenship policy', overallSentiment: 'Negative/Concern', notes: 'HRW criticism of gender discrimination' },
    { category: 'Brain drain index', overallSentiment: 'Very Positive', notes: '1.8 indicates brain gain' },
    { category: 'Marriage/divorce', overallSentiment: 'Neutral/Concern', notes: 'High divorce rates noted' },
    { category: 'Tolerance initiatives', overallSentiment: 'Positive', notes: 'Interfaith success' },
    { category: 'Detention practices', overallSentiment: 'Negative', notes: 'Human rights concerns' }
  ] as DataSentimentEntry[],
  uaeRelevanceAssessment: [
    { topic: 'Expat/national ratio', uaeRelevance: 'Critical', globalSignificance: '2nd highest expat % globally' },
    { topic: 'Golden Visa', uaeRelevance: 'Critical', globalSignificance: 'World\'s most ambitious program' },
    { topic: 'Passport power', uaeRelevance: 'High', globalSignificance: '#1-2 global ranking' },
    { topic: 'Brain gain', uaeRelevance: 'High', globalSignificance: 'Net talent importer' },
    { topic: 'Statelessness', uaeRelevance: 'High', globalSignificance: 'Bidoon issue unresolved' },
    { topic: 'Remittances', uaeRelevance: 'Medium', globalSignificance: '2nd-3rd global sender' }
  ] as UAERelevanceEntry[]
}

// ============================================================================
// SECTION 23: DASHBOARD-READY DATA TABLES
// ============================================================================

export interface KeyPopulationMetric {
  kpi: string
  currentValue: string
  targetGoal?: string
  status?: string
}

export interface GoldenVisaKPI {
  kpi: string
  value: string
  trend: string
}

export interface PassportPowerKPI {
  kpi: string
  value: string
  ranking: string
}

export interface HumanCapitalKPI {
  kpi: string
  value: string
  assessment: string
}

export const dashboardDataTables = {
  keyPopulationMetrics: [
    { kpi: 'Total Population', currentValue: '11.57M (2026)' },
    { kpi: 'Expat %', currentValue: '88.5%' },
    { kpi: 'National %', currentValue: '11.5%' },
    { kpi: 'Urbanization', currentValue: '85.82%' },
    { kpi: 'Median Age', currentValue: '31.6 years' },
    { kpi: 'Life Expectancy', currentValue: '79.56 years' }
  ] as KeyPopulationMetric[],
  goldenVisaKPIs: [
    { kpi: 'Total Issued (2020-2025)', value: '350,000+', trend: 'Growing' },
    { kpi: 'Growth Rate', value: '900%+', trend: 'Increasing' },
    { kpi: 'Top Recipient', value: 'India (32%)', trend: 'Stable' },
    { kpi: 'Russian Investment', value: '$6.3B', trend: 'Growing' }
  ] as GoldenVisaKPI[],
  passportPowerKPIs: [
    { kpi: 'Visa-Free Destinations', value: '181-187', ranking: '1st-2nd global' },
    { kpi: '20-Year Destination Gain', value: '+149', ranking: 'Exceptional' },
    { kpi: 'Ranking Improvement', value: '+57 places', ranking: 'Exceptional' }
  ] as PassportPowerKPI[],
  humanCapitalKPIs: [
    { kpi: 'Brain Drain Index', value: '1.8 (2024)', assessment: 'Brain Gain' },
    { kpi: 'vs. World Average', value: '64% lower', assessment: 'Excellent' },
    { kpi: 'Historical Average', value: '2.64', assessment: 'Improving' }
  ] as HumanCapitalKPI[]
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  classification: 'Comprehensive Research Compilation',
  methodology: 'Multi-source data aggregation with primary source verification',
  sourcesCount: '40+ authoritative sources',
  dataPointsCount: '500+',
  lastUpdated: '2026-04-27',
  classification_detail: 'Single Source of Truth for UAE Demographics & Migration'
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface DemographicsMigrationData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  populationSizeGrowth: typeof populationSizeGrowth
  nationalExpatriateComposition: typeof nationalExpatriateComposition
  vitalStatistics: typeof vitalStatistics
  goldenVisaProgram: typeof goldenVisaProgram
  visaCategoriesImmigration: typeof visaCategoriesImmigration
  citizenshipNaturalization: typeof citizenshipNaturalization
  statelessnessBidoon: typeof statelessnessBidoon
  brainDrainBrainGain: typeof brainDrainBrainGain
  remittanceFlows: typeof remittanceFlows
  urbanizationDensity: typeof urbanizationDensity
  marriageDivorcePatterns: typeof marriageDivorcePatterns
  passportPowerMobility: typeof passportPowerMobility
  socialCohesionTolerance: typeof socialCohesionTolerance
  undocumentedMigrationDetention: typeof undocumentedMigrationDetention
  refugeeAsylumPolicy: typeof refugeeAsylumPolicy
  migrantWorkersKafala: typeof migrantWorkersKafala
  religiousEthnicComposition: typeof religiousEthnicComposition
  internalMigration: typeof internalMigration
  diasporaEngagement: typeof diasporaEngagement
  populationProjections: typeof populationProjections
  dataSourcesCredibility: typeof dataSourcesCredibility
  sentimentUAERelevance: typeof sentimentUAERelevance
  dashboardDataTables: typeof dashboardDataTables
  reportMetadata: typeof reportMetadata
}

export const demographicsMigrationData: DemographicsMigrationData = {
  id: 'topic-2-19',
  sector: 'social',
  title: 'Demographics & Migration',
  titleAr: 'السكان والهجرة',
  description: 'Population composition, expatriate demographics, Golden Visa program, citizenship policy, brain gain index, vital statistics, marriage patterns, passport power',
  populationSizeGrowth,
  nationalExpatriateComposition,
  vitalStatistics,
  goldenVisaProgram,
  visaCategoriesImmigration,
  citizenshipNaturalization,
  statelessnessBidoon,
  brainDrainBrainGain,
  remittanceFlows,
  urbanizationDensity,
  marriageDivorcePatterns,
  passportPowerMobility,
  socialCohesionTolerance,
  undocumentedMigrationDetention,
  refugeeAsylumPolicy,
  migrantWorkersKafala,
  religiousEthnicComposition,
  internalMigration,
  diasporaEngagement,
  populationProjections,
  dataSourcesCredibility,
  sentimentUAERelevance,
  dashboardDataTables,
  reportMetadata
}

export default demographicsMigrationData
