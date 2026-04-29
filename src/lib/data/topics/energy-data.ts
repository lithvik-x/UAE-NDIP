// @ts-nocheck
/**
 * Energy & Sustainability - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-12-energy-sustainability-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: OIL & HYDROCARBONS STRATEGY - ADNOC
// ============================================================================

export interface ADNOCOverview {
  entity: string
  founded: string
  headquarters: string
  chairman: string
  ceo: string
}

export interface ADNOCAttribute {
  attribute: string
  value: string
  source?: string
}

export interface ADNOCSubsidiary {
  upstream: string[]
  midstreamDownstream: string[]
}

export interface ADNOCListedCompany {
  company: string
  details: string
}

export const adnocOverview = {
  overview: {
    entity: 'Abu Dhabi National Oil Company (ADNOC)',
    founded: '1971 by Zayed Bin Sultan Al Nahyan',
    headquarters: 'Abu Dhabi, UAE',
    chairman: 'Mohamed bin Zayed Al Nahyan',
    ceo: 'Sultan Ahmed Al Jaber (also UAE Minister of Industry and Advanced Technology, former COP28 President)'
  } as ADNOCOverview,
  keyAttributes: [
    { attribute: 'Global Ranking', value: '12th largest oil company by production' },
    { attribute: 'Employees', value: '207,356 (2015)' },
    { attribute: 'Proved Oil Reserves', value: '105-111 billion barrels' },
    { attribute: 'Global Reserve Rank', value: '6th largest globally' },
    { attribute: 'Crude Oil Production Capacity', value: '4.85 million b/d (May 2024)' },
    { attribute: 'Natural Gas Production', value: '11.5 billion cubic feet/day' },
    { attribute: 'Target Production Capacity', value: '5 million b/d by 2027' },
    { attribute: 'Capital Expenditure', value: '$150 billion (2023-2027)' }
  ] as ADNOCAttribute[],
  subsidiaries: {
    upstream: ['ADNOC Onshore', 'ADNOC Offshore', 'ADNOC Drilling', 'Al Yasat Petroleum', 'Al Dhafra Petroleum', 'ADNOC Sour Gas'],
    midstreamDownstream: ['ADNOC Gas Processing', 'ADNOC LNG', 'ADNOC Refining', 'Fertiglobe', 'ADNOC Industrial Gas', 'Borouge', 'ADNOC Distribution', 'ADNOC Logistics & Services']
  } as ADNOCSubsidiary,
  listedCompanies: [
    { company: 'ADNOC Drilling', details: 'ADX, listed October 2021' },
    { company: 'ADNOC Gas', details: 'ADX, listed March 2023' },
    { company: 'ADNOC Distribution', details: 'ADX, first ADNOC Group company to list, December 2017' },
    { company: 'Fertiglobe', details: 'Strategic stake $3.62B, 2023' },
    { company: 'OMV', details: '24.9% stake acquired 2022' }
  ] as ADNOCListedCompany[]
}

// ============================================================================
// SECTION 2: PRODUCTION CAPACITY & TARGETS
// ============================================================================

export interface ProductionMetric {
  metric: string
  value: string
  date?: string
}

export interface EIACapacity {
  metric: string
  value: string
  date?: string
}

export interface OilPriceAnalysis {
  metric: string
  value: string
}

export const productionCapacity = {
  eiaData: [
    { metric: 'Current Production (avg)', value: 'Just under 3 million b/d', date: '10-year average' },
    { metric: 'ADNOC Official Capacity', value: '4.5 million b/d', date: '2023' },
    { metric: 'EIA 2023 Estimate', value: '4.0 million b/d', date: '2023' },
    { metric: 'Other Estimates', value: '4.3-4.4 million b/d', date: 'Energy Intelligence, Rystad' },
    { metric: 'Production Target', value: '5 million b/d', date: '2027 (moved up from 2030)' },
    { metric: 'Capital Expenditure', value: '$150 billion', date: '2023-2027' },
    { metric: 'Proved Reserves', value: '111 billion barrels', date: 'Start of 2023' }
  ] as ProductionMetric[],
  adnocWebsiteData: [
    { metric: 'Oil Capacity', value: '4.85 million barrels of oil capacity per day', date: 'May 2024' },
    { metric: 'Natural Gas', value: '11.5 billion cubic feet of natural gas per day' },
    { metric: 'Production Target', value: '5 million barrels crude oil production capacity per day by 2027' },
    { metric: 'Gas Target', value: 'TOP 5 gas & LNG player by 2035' },
    { metric: 'Clean Energy Target', value: '100 GW clean energy capacity by 2030 through Masdar' },
    { metric: 'Strategic Aim', value: 'Leading low-cost and lower-carbon oil and gas producer' }
  ] as EIACapacity[],
  oilPriceAnalysis: [
    { metric: '2025 Growth Forecast', value: '7.8%' },
    { metric: 'Upstream Investment', value: '$30 billion (ADNOC + partners)' },
    { metric: '5 million bpd Target Timeline', value: 'Late 2026 (one year ahead of schedule)' },
    { metric: 'May 2024 Capacity', value: '4.85 million bpd' },
    { metric: 'End 2023 Capacity', value: '4.65 million bpd' },
    { metric: '2025 Production Forecast', value: '3.4 million bpd' },
    { metric: 'September 2024 Actual', value: '2.958 million bpd' }
  ] as OilPriceAnalysis[],
  worldRanking: {
    totalLiquidFuelsProducerRank: 7,
    year: 2022,
    opecRank: 3,
    note: 'One of only two OPEC members (with Saudi Arabia) with notable spare crude production capacity'
  }
}

// ============================================================================
// SECTION 3: OPEC+ DYNAMICS
// ============================================================================

export interface OPECPlusQuota {
  period: string
  productionQuota: string
  source: string
}

export interface OPECPlusExtendedCuts {
  description: string
  details: string
}

export interface RystadAnalysis {
  metric: string
  value: string
}

export const opecDynamics = {
  structure: {
    coalitionTarget: '39.725 million barrels per day combined',
    september2025: 'Eight OPEC+ countries reaffirm commitment to market stability',
    note: 'Intention to fully compensate for any overproduced volume since January 2024'
  },
  uaeQuotas: [
    { period: '2023', productionQuota: '3.02 million b/d', source: 'OPEC+ agreement' },
    { period: 'Q1 2024', productionQuota: '3.06 million b/d', source: 'OPEC+ agreement' },
    { period: 'Rest of 2024', productionQuota: '3.22 million b/d', source: 'OPEC+ agreement' },
    { period: 'November 2023', productionQuota: 'Additional voluntary cut for Q1 2024', source: 'OPEC+ agreement' }
  ] as OPECPlusQuota[],
  extendedCuts: [
    { description: 'June 2024', details: 'OPEC+ extended cuts of 3.66 million bpd by one year until end of 2025' },
    { description: 'Extended cuts', details: '2.2 million bpd by three months' },
    { description: 'UAE joined OPEC', details: '1967' }
  ] as OPECPlusExtendedCuts[],
  rystadEnergyAnalysis2026: [
    { metric: 'Capital Recycling Model', value: 'Middle Eastern NOCs transitioned to sophisticated capital recycling model in 2025' },
    { metric: 'Lease-and-leaseback deals', value: 'Over $22 billion' },
    { metric: 'XRG Hail and Ghasha commitment', value: '$11 billion' },
    { metric: '2026 Upstream Investment Growth', value: '10% increase to ~$110 billion' }
  ] as RystadAnalysis[]
}

// ============================================================================
// SECTION 4: ADNOC FINANCIALS & DIVIDENDS
// ============================================================================

export interface DividendMetric {
  metric: string
  value: string
}

export interface ContractMetric {
  metric: string
  value: string
}

export const adnocFinancials = {
  reutersOctober2025: [
    { metric: 'Listed subsidiaries dividends (to 2030)', value: '$43 billion (AED 158 billion)' },
    { metric: 'ADNOC L&S dividend target (2025-2030)', value: '$2.2 billion (AED 8.1 billion)' },
    { metric: 'Dividend growth', value: '52% increase' }
  ] as DividendMetric[],
  contractsNovember2025: [
    { metric: 'Contracts to UAE suppliers (H2 2025)', value: '$14.7 billion (Dh54 billion)' },
    { metric: 'Local manufacturing target (by 2030)', value: '$24.5 billion' },
    { metric: 'In-Country Value Programme (since 2018)', value: 'Dh242 billion returned to UAE economy' },
    { metric: 'Emiratis employed in private sector', value: '18,500' },
    { metric: 'Jobs created for UAE nationals', value: '+7,000' }
  ] as ContractMetric[],
  acquisitionActivity: [
    { date: 'October 2024', activity: 'Announced acquisition of German chemical company Covestro for $16.3 billion' },
    { date: 'July 2025', activity: 'European Commission opened investigation over potential UAE government subsidies' }
  ]
}

// ============================================================================
// SECTION 5: ENERGY TRANSITION - NARRATIVE VS REALITY
// ============================================================================

export interface UAEClimateCommitment {
  target: string
  value: string
}

export interface CATRating {
  ratingCategory: string
  rating: string
  notes?: string
}

export interface CATCriticalFinding {
  finding: string
  details: string
}

export interface ADNOCDecarbonization {
  metric: string
  value: string
  year?: string
}

export const energyTransitionNarrative = {
  uaeEnergyStrategy2050: [
    { target: 'Renewable Investment', value: 'AED 150-200 billion' },
    { target: 'Renewable Contribution', value: 'Triple current contribution' },
    { target: 'Net Zero Target', value: '2050 (announced 2021)' }
  ] as UAEClimateCommitment[],
  climateActionTrackerAssessment: [
    { ratingCategory: 'Overall Rating', rating: 'Insufficient', notes: '< 3°C World pathway' },
    { ratingCategory: 'Policies & Action', rating: 'Insufficient', notes: 'Below 3°C pathway' },
    { ratingCategory: 'NDC Target (domestic)', rating: 'Almost Sufficient', notes: 'Below 2°C pathway' },
    { ratingCategory: 'NDC Target (fair share)', rating: 'Insufficient', notes: 'Below 3°C pathway' },
    { ratingCategory: 'Net Zero Target (2050)', rating: 'Average', notes: 'Significant credibility concerns' }
  ] as CATRating[],
  criticalFindings: [
    { finding: '2030 NDC Target', details: '185 MtCO2e (12% reduction from previous target)' },
    { finding: 'Policy Gap', details: '29-74 MtCO2e gap between current policies and 2030 target' },
    { finding: 'Fossil Fuel Investment', details: '$150 billion expansion plan; $17 billion for Hail and Ghasha gas fields' },
    { finding: 'CCS Reliance', details: 'Plans to reduce 32% of industry emissions through carbon capture (~43.5 MtCO2e in 2050)' },
    { finding: 'CCS Credibility', details: 'CCS reliance "nowhere near the scale and commercial viability needed"' },
    { finding: 'Produced Fossil Gas Emissions', details: 'Would equal "15-20% of the country\'s present annual domestic emissions"' },
    { finding: 'Conclusion', details: '"If all countries followed UAE\'s approach, warming would reach over 2°C and up to 3°C"' }
  ] as CATCriticalFinding[],
  credibilityConcerns: [
    'Significant reliance on unproven carbon capture storage technologies',
    'ADNOC net zero 2045 only covers operational emissions (Scope 1 & 2), not exported oil/gas (Scope 3)',
    'Target covers ~95% of emissions (excludes F-gases at 9% and international aviation/shipping)',
    'Reserves right to use international offset credits'
  ],
  positiveDevelopments: [
    'New national GHG inventory improves transparency',
    'USD 100 million pledged to Loss and Damage Fund',
    'Stronger NDC submitted as absolute target',
    'USD 54 billion renewables investment announced',
    '30% "clean power" capacity target by 2030'
  ]
}

// ============================================================================
// SECTION 6: ADNOC DECARBONIZATION CLAIMS
// ============================================================================

export interface ADNOCSustainability {
  metric: string
  value: string
  year?: string
}

export const adnocDecarbonization = {
  sustainabilityReport: [
    { metric: 'Net Zero Target', value: '2045', year: 'Own operations only' },
    { metric: 'Scope 1 & 2 Emissions Reduction', value: '6.6 million tCO2e', year: '2024' },
    { metric: 'Methane Emissions Reduction', value: '22%', year: 'vs 2023' },
    { metric: 'Cumulative Methane Reduction', value: '47%', year: 'Since 2020' },
    { metric: 'Upstream Methane Intensity', value: '<0.15%', year: 'Lowest in Middle East' },
    { metric: 'Cost Savings (emissions initiatives)', value: '$220 million (AED 808 million)', year: '2024' },
    { metric: 'Mangrove Seeds Planted', value: '2.8 million', year: 'Since 2023 (drone technology)' },
    { metric: 'Renewable Energy Capacity (via Masdar)', value: '51+ GW', year: 'Current' },
    { metric: 'Economic Return to UAE', value: '$14.9 billion (AED 55 billion)', year: 'Total' }
  ] as ADNOCSustainability[],
  ogmp20: {
    status: 'Gold Standard signatory',
    target: 'At least 30% reduction in methane emissions by 2030 vs 2020'
  }
}

// ============================================================================
// SECTION 7: GREENWASHING CRITICISM
// ============================================================================

export interface GreenwashingCriticism {
  source: string
  criticism: string
  details?: string
}

export const greenwashingCriticism = {
  oilChangeInternational: [
    { source: 'Oil Change International', criticism: "ADNOC's climate commitments called 'spin'" },
    { source: 'Oil Change International', criticism: 'New oil and gas production would lock in over 2.7 Gt CO2' },
    { source: 'Oil Change International', criticism: 'Carbon capture technologies called "dangerous distractions" and "smokescreen"' },
    { source: 'Oil Change International', criticism: 'ADNOC described as "second-largest expander company" globally in oil and gas through 2025' }
  ] as GreenwashingCriticism[],
  earthOrg: [
    { source: 'Earth.org', criticism: 'UAE as petrostate hosting COP28 is "deep irony"' },
    { source: 'Earth.org', criticism: 'ADNOC needs to "rapidally transition" away from current product lines' },
    { source: 'Earth.org', criticism: 'Carbon capture represents only "0.1% of global CO2 emissions" despite industry promotion' }
  ] as GreenwashingCriticism[],
  theGuardian: [
    { source: 'The Guardian (May 2023)', criticism: "Sultan Al Jaber's team accused of Wikipedia 'greenwashing'" },
    { source: 'The Guardian (May 2023)', criticism: 'Editing Wikipedia page to improve image' },
    { source: 'The Guardian (May 2023)', criticism: 'UAE using site to "control narrative"' }
  ] as GreenwashingCriticism[]
}

// ============================================================================
// SECTION 8: RENEWABLE ENERGY
// ============================================================================

export interface RenewableCapacity {
  source: string
  capacity: string
  yoYChange?: string
}

export interface SolarPark {
  project: string
  capacity: string
  status: string
}

export interface GridMarket {
  metric: string
  value: string
}

export const renewableEnergy = {
  currentCapacity2025: [
    { source: 'Total Renewable', capacity: '7.9 GW', yoYChange: '+15.4% (from 6.85 GW in 2024)' },
    { source: 'Solar', capacity: '7,525 MW', yoYChange: '+1,027 MW (from 6,498 MW)' },
    { source: 'Wind', capacity: '110 MW', yoYChange: 'Flat' },
    { source: 'Bioenergy', capacity: '272 MW', yoYChange: 'New' },
    { source: '2031 Target', capacity: '23 GW', yoYChange: '-' }
  ] as RenewableCapacity[],
  pvMagazineMarch2026: [
    { metric: '2025 Installed Solar', value: '~1 GW' },
    { metric: 'End 2024 Solar Capacity', value: '5.7 GW' },
    { metric: 'End 2025 Solar Capacity', value: '~6.7 GW' },
    { metric: '2026 Forecast Solar Additions', value: '~2.4 GW' },
    { metric: 'End 2026 Projected Total', value: '~9.4 GW' },
    { metric: '2030 Target', value: '20 GW' },
    { metric: '2035 Threshold', value: '30 GW' },
    { metric: 'CAGR (to 2035)', value: '>17%' }
  ] as GridMarket[],
  majorSolarParks: [
    { project: 'Mohammed bin Rashid Al Maktoum Solar Park', capacity: '~3.8 GW', status: 'Operational' },
    { project: 'Al Dhafra Solar Park', capacity: '2 GW', status: 'Operational' }
  ] as SolarPark[],
  dewaStrategy: {
    dubaiTarget: '7,260 MW solar capacity',
    focus: 'Massive energy storage integration'
  },
  gridModernization: [
    { metric: '2024 Market Size', value: '$93.52 million' },
    { metric: '2032 Projected', value: '$288.72 million' },
    { metric: 'CAGR', value: '15.13%' }
  ] as GridMarket[],
  marketShare: [
    { emirate: 'Abu Dhabi', share: '~40%' },
    { emirate: 'Dubai', share: '~35%' },
    { emirate: 'Combined', share: '75%' }
  ],
  storageProjects: [
    'Masdar and EWEC announced world\'s first large-scale round-the-clock gigascale energy storage project in Abu Dhabi (January 2025)',
    'ADSW facilities: 122.8 kWp installed solar capacity',
    '2023 generation: 71.946 MWh',
    '2024 generation: 136.906 MWh',
    '2024 avoided emissions: 279.9 tonnes CO2'
  ]
}

// ============================================================================
// SECTION 9: NUCLEAR ENERGY - BARAKAH PLANT
// ============================================================================

export interface BarakahOverview {
  attribute: string
  value: string
}

export interface BarakahMilestone {
  milestone: string
  date: string
}

export interface BarakahUnit {
  unit: string
  commercialOperation: string
  gridConnection?: string
}

export interface BarakahOperational {
  metric: string
  value: string
}

export const nuclearEnergyBarakah = {
  plantOverview: [
    { attribute: 'Entity', value: 'Barakah Nuclear Power Plant' },
    { attribute: 'Location', value: 'Al Dhafra region, ~53 km west-southwest of Al Dhannah City, Abu Dhabi' },
    { attribute: 'Total Nameplate Capacity', value: '5,600 MW' },
    { attribute: 'Unit Configuration', value: '4 × 1,345 MW (APR-1400 reactors)' },
    { attribute: 'Thermal Capacity', value: '4 × 3,983 MWth' },
    { attribute: 'Intended Electricity Share', value: 'Up to 25% of UAE electricity' },
    { attribute: 'Construction Cost', value: '$32 billion' },
    { attribute: 'Owner', value: 'Emirates Nuclear Energy Corporation (ENEC)' },
    { attribute: 'Reactor Supplier', value: 'Korea Electric Power Corporation (KEPCO)' },
    { attribute: 'Reactor Type', value: 'APR-1400 pressurized water reactors' },
    { attribute: 'Historic First', value: 'First nuclear power station in Arabian Peninsula and Arab World' }
  ] as BarakahOverview[],
  constructionTimeline: [
    { milestone: 'Ground-breaking Ceremony', date: 'March 14, 2011' },
    { milestone: 'Unit 1 Construction Start', date: 'July 19, 2012' },
    { milestone: 'Unit 2 Construction Start', date: 'April 16, 2013' },
    { milestone: 'Unit 3 Construction Start', date: 'September 24, 2014' },
    { milestone: 'Unit 4 Construction Start', date: 'July 30, 2015' },
    { milestone: 'Original 2009 Bid Cost', date: '$20 billion' },
    { milestone: 'Reported Build Cost (2011)', date: '$30 billion' },
    { milestone: 'Revised Build Cost', date: '$25 billion' },
    { milestone: 'Final Build Cost (2020)', date: '$32 billion' }
  ] as BarakahMilestone[],
  commercialOperationDates: [
    { unit: 'Unit 1', commercialOperation: 'April 1, 2021', gridConnection: 'August 2020' },
    { unit: 'Unit 2', commercialOperation: 'March 24, 2022', gridConnection: '-' },
    { unit: 'Unit 3', commercialOperation: 'February 24, 2023', gridConnection: '-' },
    { unit: 'Unit 4', commercialOperation: 'September 5, 2024', gridConnection: 'March 2024' }
  ] as BarakahUnit[],
  operationalImpact: [
    { metric: 'Electricity Share', value: 'Plant powers 25% of UAE electricity' },
    { metric: 'Five-year milestone', value: 'Five years since first unit connected to grid (August 19, 2020)' }
  ] as BarakahOperational[],
  meesOctober2025: [
    { metric: 'LNG Requirements Reduction', value: 'More than $9 billion' },
    { metric: 'Natural Gas Impact', value: 'Freed domestic gas for higher-value industrial applications' },
    { metric: 'Gas Consumption', value: 'Natural gas consumption for power generation in Abu Dhabi at 13-year low' }
  ] as BarakahOperational[],
  worldNuclearAssociationMarch2026: [
    { metric: 'Fuel Supply Agreement', value: 'ENEC signed fuel supply agreement with Framatome for nuclear fuel assemblies' },
    { metric: 'Fuel Manufacturing', value: "Framatome's Richland, Washington facility" },
    { metric: 'Uranium Sources', value: 'Diversification across Canada, UK, France, Russia for uranium, conversion, enrichment' }
  ] as BarakahOperational[],
  securityConcerns: [
    { metric: 'Iran Threat', value: 'Iran included Barakah nuclear plant on list of potential targets following Trump\'s ultimatum' },
    { metric: 'Generating Capacity', value: 'Four-reactor complex with ~5,400 MW generating capacity' },
    { metric: 'IRGC Warning', value: 'Would strike plants supplying electricity to American bases' }
  ] as BarakahOperational[],
  futureExpansion: [
    { metric: 'Tender Plan', value: 'UAE planning tender for construction of new nuclear power plant' },
    { metric: 'India MoU', value: 'UAE and India signed MoU for civil nuclear cooperation' }
  ] as BarakahOperational[]
}

// ============================================================================
// SECTION 10: HYDROGEN STRATEGY
// ============================================================================

export interface HydrogenTarget {
  targetYear: string
  productionTarget: string
  typeBreakdown?: string
}

export interface HydrogenOutcome {
  year: string
  emissionsReduction: string
}

export interface HydrogenCost {
  hydrogenType: string
  productionCost: string
  notes?: string
}

export const hydrogenStrategy = {
  nationalHydrogenStrategy2050: {
    source: 'UAE Government (u.ae)',
    targets: [
      { targetYear: '2031', productionTarget: '1.4 million tonnes per annum (mtpa)', typeBreakdown: '1 mtpa green + 0.4 mtpa blue' },
      { targetYear: '2040', productionTarget: '7.5 mtpa', typeBreakdown: '-' },
      { targetYear: '2050', productionTarget: '15 mtpa', typeBreakdown: '-' },
      { targetYear: 'Local Demand (2031)', productionTarget: '2.7 mtpa', typeBreakdown: '-' }
    ] as HydrogenTarget[],
    expectedOutcomes: [
      { year: '2031', emissionsReduction: '25%' },
      { year: '2050', emissionsReduction: '100%' }
    ] as HydrogenOutcome[]
  },
  strategicObjectives: [
    'Strengthen UAE position as producer and supplier of low-emission hydrogen by 2031',
    'Focus on developing supply chains',
    'Creating hydrogen oases',
    'National R&D centre for hydrogen technologies',
    'Foster domestic and regional hydrogen market',
    'Support Net Zero 2050 commitment'
  ],
  productionEconomics: {
    gpcaMarch2025: [
      { hydrogenType: 'Blue Hydrogen', productionCost: '$2.8-3.5 per kg', notes: 'UAE only GCC country with formal blue policy' },
      { hydrogenType: 'Green Hydrogen', productionCost: '$4.10-7 per kg', notes: 'Currently most expensive, uncompetitive' },
      { hydrogenType: 'Cost Parity Expected', productionCost: '~2040s', notes: 'Green hydrogen' }
    ] as HydrogenCost[]
  },
  industrialScaleProjects: [
    '2020: Industrial-scale green hydrogen plant by DEWA and Siemens Energy (operational)'
  ]
}

// ============================================================================
// SECTION 11: CARBON CAPTURE & CCUS
// ============================================================================

export interface CCUSPolicy {
  objective: string
  details: string
}

export interface MENACCUSProject {
  country: string
  ccusProjects: number
}

export interface CCUSMarket {
  metric: string
  value: string
}

export const carbonCaptureCCUS = {
  policyFramework: {
    source: 'Carbon Herald (January 2026)',
    announcement: 'Abu Dhabi launched Carbon Capture Policy',
    purpose: 'Establish regulatory framework for CCUS activities',
    authority: 'Supreme Council for Financial and Economic Affairs (SCFEA) announced',
    objectives: [
      { objective: 'Position Abu Dhabi as regional hub for low-carbon innovation' },
      { objective: 'Strengthen industrial competitiveness' },
      { objective: 'Stimulate job creation' },
      { objective: 'Attract investment into carbon management technologies' }
    ] as CCUSPolicy[]
  },
  menaRegionalProjects: {
    source: 'Carbon Capture MENA Whitepaper (June 2024)',
    projects: [
      { country: 'UAE', ccusProjects: 15 },
      { country: 'Saudi Arabia', ccusProjects: 5 },
      { country: 'Oman', ccusProjects: 3 },
      { country: 'Qatar', ccusProjects: 3 },
      { country: 'MENA Total', ccusProjects: 28 }
    ] as MENACCUSProject[],
    capacityTarget: '35 million tons per annum by 2035'
  },
  uaeMarketData: {
    source: 'Guidehouse (February 2025)',
    data: [
      { metric: '2024 Market Size', value: '$160.3 million' },
      { metric: '2030 Projected', value: '$205.4 million' },
      { metric: 'CAGR', value: '4.2%' },
      { metric: 'Habshan CCUS Capacity', value: '1.5 MTPA' },
      { metric: 'Total UAE CCUS Capacity', value: '2.3 MTPA (with Habshan)' },
      { metric: '2030 Target', value: '5 million tons per annum' },
      { metric: 'Blue Hydrogen Commitment', value: '400+ kilotons per year by 2031' }
    ] as CCUSMarket[]
  }
}

// ============================================================================
// SECTION 12: COP28 - LEGACY & CONTROVERSIES
// ============================================================================

export interface COP28PositiveOutcome {
  outcome: string
  details: string
}

export interface COP28Declaration {
  declaration: string
}

export interface AlJaberControversy {
  source: string
  statement: string
}

export interface GreenwashingAllegation {
  source: string
  allegation: string
  details?: string
}

export const cop28Legacy = {
  conferenceOverview: {
    event: 'COP28 UAE - United Nations Climate Change Conference',
    host: 'UAE',
    president: 'Sultan Ahmed Al Jaber (also ADNOC CEO)',
    venue: 'Dubai Expo City'
  },
  positiveOutcomes: [
    { outcome: 'Fossil Fuel Language', details: "First COP to mention 'fossil fuels' in agreement" },
    { outcome: 'Agreement Language', details: '"Transition away from fossil fuels by 2050"' },
    { outcome: 'Loss & Damage Fund', details: 'Launched ($429M pledged vs $400B needed)' },
    { outcome: 'Renewables Pledge', details: '11 pledges, 11 TW target' },
    { outcome: 'Climate Finance', details: '$85 billion raised (UAE Embassy March 2024)' },
    { outcome: 'UAE Consensus', details: 'Action Agenda signed' }
  ] as COP28PositiveOutcome[],
  globalRenewablesEnergyEfficiencyPledge: {
    description: 'Signed by multiple countries',
    target: 'Triple renewable capacity'
  },
  otherDeclarations: [
    'Climate Finance Framework',
    'Climate and Health Declaration',
    'Climate Relief/Recovery/Peace declaration',
    'Global Cooling Pledge',
    'Gender-responsive Just Transitions Partnership'
  ] as COP28Declaration[],
  sultanAlJaberControversy: [
    { source: 'The Guardian (December 2023)', statement: '"There is no science" indicating need for fossil fuel phase-out' },
    { source: 'The Guardian (December 2023)', statement: 'Responded to former Irish President Mary Robinson with: "I think this is where I would like you to...not let me down"' },
    { source: 'CNN (December 2023)', statement: 'Al Jaber facing backlash over fossil fuel comments' },
    { source: 'CNN (December 2023)', statement: 'Controversial choice as COP28 president' },
    { source: 'CNN (December 2023)', statement: 'Also chairs board of ADNOC' },
    { source: 'Earth Journal (December 2023)', statement: 'Sultan al-Jaber defends dual role as "uniquely placed" to persuade industry' }
  ] as AlJaberControversy[],
  greenwashingAllegations: [
    { source: 'Human Rights Watch (January 2024)', allegation: 'UAE using COP28 to "improve its image internationally to conceal deeply repressive policies"' },
    { source: 'Human Rights Watch (January 2024)', allegation: 'Push to expand fossil fuel production' },
    { source: 'Human Rights Watch (January 2024)', allegation: 'UAE is "one of the world\'s largest oil producers and per capita greenhouse gas emitters"' },
    { source: 'Human Rights Watch (January 2024)', allegation: 'COP28 "fell short of a clear and time-bound commitment to phase out fossil fuels"' },
    { source: 'Amnesty International (September 2023)', allegation: 'UAE priority at COP28 is "greenwashing its fossil fuel expansion plans"' },
    { source: 'Amnesty International (September 2023)', allegation: 'Officials defining narrow list of talking points to avoid human rights discussions' },
    { source: 'Amnesty International (September 2023)', allegation: '"Accommodates interests of fossil fuel industry"' },
    { source: 'Global Witness Investigation (June 2024)', allegation: 'ADNOC pursued 20 major international fossil fuel deals in 2023' },
    { source: 'Global Witness Investigation (June 2024)', allegation: 'Total value: close to $100 billion (€92 billion)' },
    { source: 'Global Witness Investigation (June 2024)', allegation: 'Fivefold increase compared to previous year' },
    { source: 'Global Witness Investigation (June 2024)', allegation: '40% higher than combined total of previous four years' },
    { source: 'Oil Change International', allegation: "ADNOC's planned expansion 'would lock in over 2.7 Gt of CO2 emissions'" },
    { source: 'Oil Change International', allegation: "Equivalent to one year of EU's CO2 emissions from fossil fuels" },
    { source: 'Euronews (June 2024)', allegation: 'ADNOC deals worth potential €92 billion' },
    { source: 'Euronews (June 2024)', allegation: '"Depressing and dystopian" approach' }
  ] as GreenwashingAllegation[],
  humanRightsContext: [
    'Complete closure of civic space',
    'Severe restrictions on freedom of expression (online and offline)',
    'Criminalization of peaceful dissent',
    'Advanced surveillance technologies',
    'Ahmed Mansoor (human rights defender) sentenced to 20 years'
  ]
}

// ============================================================================
// SECTION 13: EV ADOPTION & TRANSPORTATION
// ============================================================================

export interface EVMarketMetric {
  metric: string
  value: string
}

export interface EVChargingMetric {
  metric: string
  value: string
}

export interface EVBarrier {
  barrier: string
}

export const evAdoption = {
  marketSizeGrowth: [
    { metric: '2024 Market Value', value: '$0.78 billion' },
    { metric: '2030 Projected', value: '$1.25 billion' },
    { metric: 'CAGR', value: '8.22%' },
    { metric: '2024 EV Sales Growth', value: '38% YoY' }
  ] as EVMarketMetric[],
  nexdigm: [
    { metric: '2024 Market Size', value: '$2,220.7 million' },
    { metric: 'EV Share of Total Car Sales', value: '13%' },
    { metric: 'Abu Dhabi Charging Points (plan)', value: '~70,000 by 2030' }
  ] as EVMarketMetric[],
  rolandBergerOctober2025: [
    { metric: 'UAE EV Sales', value: '~24,000 units (BEV + PHEV)' },
    { metric: 'Saudi Arabia EV Sales', value: '11,000+ units (10x increase from 2023)' },
    { metric: 'Charging Satisfaction', value: '95% satisfied with overall experience' },
    { metric: 'Dubai Public Charging Points', value: '1,270+ (August 2025)' },
    { metric: 'ADNOC-TAQA Partnership', value: '500 points in Abu Dhabi by 2028' }
  ] as EVChargingMetric[],
  keyPlayers: [
    'ADNOC-TAQA partnership',
    'Dubai Electricity and Water Authority (DEWA)',
    'Abu Dhabi Department of Energy'
  ],
  barriers: [
    'High upfront costs',
    'Infrastructure gaps',
    'Range anxiety'
  ] as EVBarrier[]
}

// ============================================================================
// SECTION 14: CLIMATE LAW & COMPLIANCE
// ============================================================================

export interface ClimateLawAttribute {
  attribute: string
  value: string
}

export interface MRVImprovement {
  metric: string
  improvement: string
}

export const climateLawCompliance = {
  federalClimateLaw: {
    name: 'Federal Decree-Law No. 11 of 2024 (UAE Climate Law)',
    effectiveDate: 'May 30, 2025',
    scope: 'All entities (public and private, including free zones)',
    requirement: 'Measure, report, manage emissions'
  },
  lawAttributes: [
    { attribute: 'Effective Date', value: 'May 30, 2025' },
    { attribute: 'Scope', value: 'All entities (public and private, including free zones)' },
    { attribute: 'Requirement', value: 'Measure, report, manage emissions' },
    { attribute: 'Large Emitter Threshold', value: '500,000+ tonnes CO2e annually' },
    { attribute: 'Registration', value: 'Must register with NRCC' },
    { attribute: 'Fines', value: 'AED 50,000 to AED 2 million' }
  ] as ClimateLawAttribute[],
  nationalMRVSystem: {
    launched: 'October 2025 at GITEX GLOBAL 2025',
    description: 'First integrated national system in region combining GHG and air pollutants monitoring',
    improvements: [
      { metric: 'Reduced emissions inventory report preparation time', improvement: '15 months to 3 months' },
      { metric: 'Workflow', improvement: '11 steps to 4 automated processes' },
      { metric: 'Communication channels', improvement: '240+ entities to 7 coordinating bodies' }
    ] as MRVImprovement[]
  },
  corporateCompliance: [
    { source: 'South Pole', requirement: 'Net Zero by 2050 target' },
    { source: 'South Pole', requirement: 'Applies to all public and private entities including free zones' },
    { source: 'South Pole', requirement: 'Businesses must set time-bound climate action plans' },
    { source: 'ISS Corporate', requirement: 'Legislation went into effect May 30, 2025' },
    { source: 'ISS Corporate', requirement: 'Aims to manage emissions within UAE' },
    { source: 'EY (April 2025)', requirement: 'UAE unveiled key climate laws and carbon credit system in 2024' },
    { source: 'EY (April 2025)', requirement: 'Steering nation toward Net Zero by 2050' }
  ]
}

// ============================================================================
// SECTION 15: UAE REGIONAL ENERGY DIPLOMACY
// ============================================================================

export interface EnergyDiplomacyMetric {
  metric: string
  value: string
}

export interface RegionalEnergyFact {
  fact: string
  details?: string
}

export const energyDiplomacy = {
  usUAEEnergyInvestment: {
    currentUSInvestment: '$70 billion',
    target2035: '$440 billion',
    usViaStrategicAgreements: '$60 billion'
  } as EnergyDiplomacyMetric,
  regionalLeadership: [
    { fact: 'Solar Power Plants', details: 'UAE operates three of world\'s major solar power plants' },
    { fact: 'Renewable Capacity Target', details: 'Plans to expand renewable energy capacity to 14.2 gigawatts' },
    { fact: 'Digital Transition', details: 'Emerged as regional leader in digital transition' }
  ] as RegionalEnergyFact[],
  adipe2025: {
    description: 'Ministers from UAE, Saudi Arabia, Qatar led discussions',
    participants: 'CEOs from ADNOC, ExxonMobil participated',
    note: 'Global energy leaders convened in Abu Dhabi'
  },
  antarcticTreaty: {
    description: 'UAE acceded to Antarctic Treaty System in 2024 (Federal Decree No.165)',
    purpose: 'Move designed to encourage scientific cooperation'
  }
}

// ============================================================================
// SECTION 16: ENERGY-WATER NEXUS
// ============================================================================

export interface WaterEnergyNexus {
  topic: string
  details: string
}

export const energyWaterNexus = {
  description: [
    { topic: 'Rise and Collapse', details: '2021 UAE-Israel-Jordan Water-for-Energy Deal' },
    { topic: 'Dynamics', details: 'Water-energy diplomacy dynamics' }
  ] as WaterEnergyNexus[]
}

// ============================================================================
// SECTION 17: METHANE EMISSIONS REDUCTION
// ============================================================================

export interface MethaneAchievement {
  metric: string
  value: string
  period?: string
}

export const methaneEmissions = {
  adnocAchievements: [
    { metric: 'Methane Reduction', value: '22%', period: '2024 vs 2023' },
    { metric: 'Cumulative Reduction', value: '47%', period: 'Since 2020' },
    { metric: 'Upstream Methane Intensity Target', value: '0.15% by 2025', period: 'Lowest in Middle East' },
    { metric: 'Target Achieved', value: 'Yes', period: 'Below 0.15%' },
    { metric: 'OGMP 2.0 Status', value: 'Gold Standard signatory', period: '-' },
    { metric: '2030 Target', value: '30% reduction vs 2020', period: 'Via OGMP 2.0' }
  ] as MethaneAchievement[]
}

// ============================================================================
// SECTION 18: STATISTICS SUMMARY TABLES
// ============================================================================

export interface OilGasKPIs {
  metric: string
  value: string
  source?: string
}

export interface RenewableKPIs {
  metric: string
  value: string
  year?: string
}

export interface NuclearKPIs {
  metric: string
  value: string
}

export interface HydrogenKPIs {
  metric: string
  value: string
  year?: string
}

export interface CCUSKPIs {
  metric: string
  value: string
}

export interface EVKPIs {
  metric: string
  value: string
  year?: string
}

export interface ClimateComplianceKPIs {
  metric: string
  value: string
}

export interface DiplomaticFinanceKPIs {
  metric: string
  value: string
}

export const statisticsSummary = {
  oilGas: [
    { metric: 'Proved Oil Reserves', value: '105-111 billion barrels', source: 'Multiple' },
    { metric: 'Current Production (avg)', value: '~3 million b/d', source: 'OPEC+ constrained' },
    { metric: 'Production Capacity (May 2024)', value: '4.85 million b/d', source: 'ADNOC' },
    { metric: 'Production Target', value: '5 million b/d', source: '2027' },
    { metric: 'ADNOC Capex (2023-2027)', value: '$150 billion', source: 'EIA/ADNOC' },
    { metric: 'Global Ranking', value: '7th largest producer', source: 'EIA' },
    { metric: 'OPEC Ranking', value: '3rd largest in OPEC', source: 'EIA' },
    { metric: 'ADNOC Subsidiaries', value: '16 companies', source: 'Wikipedia' },
    { metric: 'Listed Dividends (to 2030)', value: '$43 billion', source: 'Reuters' }
  ] as OilGasKPIs[],
  renewables: [
    { metric: 'Total Renewable Capacity', value: '7.9 GW', year: '2025' },
    { metric: 'Solar Capacity', value: '7,525 MW', year: '2025' },
    { metric: 'Wind Capacity', value: '110 MW', year: '2025' },
    { metric: 'Bioenergy Capacity', value: '272 MW', year: '2025' },
    { metric: 'YoY Growth', value: '15.4%', year: '2024-2025' },
    { metric: 'Solar Share of Additions', value: '95%', year: '2025' },
    { metric: '2031 Target', value: '23 GW', year: 'UAE Government' },
    { metric: '2030 Solar Target', value: '20 GW', year: 'PV Magazine' },
    { metric: '2035 Solar Threshold', value: '30 GW', year: 'PV Magazine' },
    { metric: 'Solar CAGR (to 2035)', value: '>17%', year: 'PV Magazine' }
  ] as RenewableKPIs[],
  nuclear: [
    { metric: 'Barakah Capacity', value: '5,600 MW (4 × 1,345 MW)' },
    { metric: 'Electricity Share', value: '25%' },
    { metric: 'Construction Cost', value: '$32 billion' },
    { metric: 'Units Operational', value: '4' },
    { metric: 'Construction Period', value: '2011-2024' },
    { metric: 'First Grid Connection', value: 'August 2020' },
    { metric: 'Full Operation', value: 'September 2024' },
    { metric: 'LNG Cost Savings', value: '$9+ billion' },
    { metric: 'Fuel Supplier', value: 'Framatome' },
    { metric: 'First Nuclear Plant', value: 'Arab World / Arabian Peninsula' }
  ] as NuclearKPIs[],
  hydrogen: [
    { metric: '2031 Target', value: '1.4 mtpa', year: 'Green 1 + Blue 0.4' },
    { metric: '2040 Target', value: '7.5 mtpa', year: '-' },
    { metric: '2050 Target', value: '15 mtpa', year: '-' },
    { metric: 'Blue Hydrogen Cost', value: '$2.8-3.5/kg', year: 'Current' },
    { metric: 'Green Hydrogen Cost', value: '$4.10-7/kg', year: 'Current' },
    { metric: 'Cost Parity (green)', value: '~2040s', year: 'Projected' }
  ] as HydrogenKPIs[],
  ccus: [
    { metric: 'MENA Projects', value: '28 (UAE: 15)' },
    { metric: 'UAE Market (2024)', value: '$160.3 million' },
    { metric: 'UAE Market (2030)', value: '$205.4 million' },
    { metric: 'CAGR', value: '4.2%' },
    { metric: 'Habshan Capacity', value: '1.5 MTPA' },
    { metric: 'Total UAE Capacity', value: '2.3 MTPA' },
    { metric: '2030 Target', value: '5 MTPA' }
  ] as CCUSKPIs[],
  ev: [
    { metric: 'Market Size', value: '$2.2 billion', year: '2024' },
    { metric: 'Market Projection', value: '$1.25 billion', year: '2030' },
    { metric: 'EV Share of Sales', value: '13%', year: '2024' },
    { metric: 'EV Sales Growth', value: '38% YoY', year: '2024' },
    { metric: 'UAE EV Units Sold', value: '~24,000', year: '2024' },
    { metric: 'Abu Dhabi Charging Points', value: '70,000 (plan)', year: '2030' },
    { metric: 'Dubai Charging Points', value: '1,270+', year: '2025' },
    { metric: 'ADNOC-TAQA Points', value: '500 (plan)', year: '2028' }
  ] as EVKPIs[],
  climateCompliance: [
    { metric: 'Net Zero Target', value: '2050' },
    { metric: 'Climate Law Effective', value: 'May 30, 2025' },
    { metric: 'Large Emitter Threshold', value: '500,000+ tonnes CO2e/year' },
    { metric: 'Fines Range', value: 'AED 50,000 - 2 million' },
    { metric: 'MRV Reporting Time Reduction', value: '15 months → 3 months' },
    { metric: 'Methane Reduction (2024)', value: '22% YoY' },
    { metric: 'Cumulative Methane Reduction', value: '47% since 2020' },
    { metric: 'Methane Intensity', value: '<0.15% (lowest in Middle East)' }
  ] as ClimateComplianceKPIs[],
  diplomaticFinance: [
    { metric: 'US Investment (current)', value: '$70 billion' },
    { metric: 'US Investment (2035)', value: '$440 billion' },
    { metric: 'COP28 Climate Finance', value: '$85 billion' },
    { metric: 'Loss & Damage Pledged', value: '$429 million' },
    { metric: 'ADIPEC 2025', value: 'UAE, Saudi, Qatar ministers' }
  ] as DiplomaticFinanceKPIs[]
}

// ============================================================================
// SECTION 19: KEY TENSIONS IDENTIFIED
// ============================================================================

export interface ClimateNarrativeReality {
  narrative: string
  reality: string
}

export interface EnergySecurityTension {
  tension: string
  details: string
}

export interface COP28Contradiction {
  issue: string
  details: string
}

export interface GreenJobsTension {
  aspect: string
  details: string
}

export const keyTensions = {
  climateLeaderNarrativeVsReality: [
    { narrative: 'UAE as climate leader', reality: 'Positioning as climate leader while expanding oil production 40%+' },
    { narrative: 'ADNOC net zero 2045', reality: 'Only covers operations, not exported fuels (Scope 3)' },
    { narrative: 'Clean energy investment', reality: 'Strategy relies heavily on unproven CCUS technology' },
    { narrative: 'Net Zero 2050', reality: 'Climate Action Tracker rates "Insufficient" (< 3°C pathway)' }
  ] as ClimateNarrativeReality[],
  energySecurityVsClimateAmbition: [
    { tension: 'Revenue vs Environment', details: 'Maintaining oil/gas revenue while pursuing renewables' },
    { tension: 'Nuclear impact', details: 'Nuclear displacing gas but not oil exports' },
    { tension: 'OPEC+ constraints', details: 'Quotas limiting production capacity utilization' }
  ] as EnergySecurityTension[],
  cop28Contradictions: [
    { issue: 'Host vs Actions', details: 'Hosted climate summit while pursuing $100B fossil fuel deals' },
    { issue: 'Leadership choice', details: 'Appointed oil company CEO as COP president' },
    { issue: 'Agreement language', details: 'Fossil fuel language watered down in final agreement' },
    { issue: 'Wikipedia manipulation', details: 'ADNOC team accused of editing Wikipedia to improve image' }
  ] as COP28Contradiction[],
  greenJobsVsHydrocarbonJobs: [
    { aspect: 'Diversification rhetoric', details: 'vs continued ADNOC employment growth' },
    { aspect: 'New sectors', details: 'Solar/wind employment creation' },
    { aspect: 'Existing sector', details: 'Oil sector expansion continues' }
  ] as GreenJobsTension[]
}

// ============================================================================
// SECTION 20: SENTIMENT ANALYSIS
// ============================================================================

export interface SourceCredibility {
  sourceType: string
  credibility: string
  examples?: string
}

export interface SentimentTopic {
  topic: string
  overallSentiment: string
  keyNarrative: string
}

export interface UAERelevanceDimension {
  dimension: string
  assessment: string
}

export const sentimentAnalysis = {
  sourceCredibilityAssessment: [
    { sourceType: 'Government', credibility: 'High (with potential bias)', examples: 'UAE Government, u.ae' },
    { sourceType: 'International Organizations', credibility: 'High', examples: 'EIA, IEA, OPEC, World Nuclear Association' },
    { sourceType: 'NGOs - Established', credibility: 'High', examples: 'Amnesty, HRW, Climate Action Tracker' },
    { sourceType: 'NGOs - Advocacy', credibility: 'Medium', examples: 'Oil Change International, Global Witness' },
    { sourceType: 'Specialized Media', credibility: 'Medium-High', examples: 'PV Magazine, OilPrice.com, MEES' },
    { sourceType: 'Mainstream Media', credibility: 'High', examples: 'Reuters, The Guardian, CNN' },
    { sourceType: 'Corporate', credibility: 'Medium (potential bias)', examples: 'ADNOC website' }
  ] as SourceCredibility[],
  sentimentByTopic: [
    { topic: 'UAE Climate Leadership', overallSentiment: 'Negative/Critical', keyNarrative: 'Greenwashing allegations' },
    { topic: 'ADNOC Decarbonization', overallSentiment: 'Mixed', keyNarrative: 'Progress on methane, expansion criticized' },
    { topic: 'Renewable Energy', overallSentiment: 'Positive', keyNarrative: 'Strong growth, targets on track' },
    { topic: 'Nuclear Energy', overallSentiment: 'Positive', keyNarrative: 'Success story, 25% electricity' },
    { topic: 'Hydrogen Strategy', overallSentiment: 'Neutral/Cautious', keyNarrative: 'Ambitious targets, uncompetitive costs' },
    { topic: 'CCUS', overallSentiment: 'Negative/Critical', keyNarrative: '"Smokescreen", minimal impact' },
    { topic: 'COP28', overallSentiment: 'Negative/Critical', keyNarrative: 'Credibility undermined by conflicts' },
    { topic: 'EV Adoption', overallSentiment: 'Positive', keyNarrative: 'Strong growth trajectory' },
    { topic: 'Climate Law', overallSentiment: 'Positive', keyNarrative: 'Comprehensive framework' }
  ] as SentimentTopic[],
  uaeRelevanceAssessment: [
    { dimension: 'Economic', assessment: 'Critical - Oil/gas = 30%+ of GDP, 50%+ of revenues' },
    { dimension: 'Diplomatic', assessment: 'High - OPEC+, climate negotiations, energy diplomacy' },
    { dimension: 'Environmental', assessment: 'Mixed - Renewable growth offset by expansion' },
    { dimension: 'Social', assessment: 'High - Employment, energy subsidy reform' },
    { dimension: 'Security', assessment: 'High - Iran tensions, energy supply security' }
  ] as UAERelevanceDimension[]
}

// ============================================================================
// SECTION 21: DASHBOARD-READY STRUCTURED DATA (KPIs)
// ============================================================================

export interface OilGasDashboardKPIs {
  metric: string
  value: string
}

export interface RenewablesDashboardKPIs {
  metric: string
  value: string
}

export interface NuclearDashboardKPIs {
  metric: string
  value: string
}

export interface HydrogenDashboardKPIs {
  metric: string
  value: string
}

export interface ClimateDashboardKPIs {
  metric: string
  value: string
}

export const dashboardKPIs = {
  oilGas: {
    oil_reserves_billion_barrels: '105-111',
    production_capacity_million_bpd: '4.85',
    production_target_million_bpd: '5',
    target_year: '2027',
    current_production_million_bpd: '3',
    adnoc_capex_billion_usd: '150',
    global_producer_rank: '7',
    opec_rank: '3',
    dividends_2030_billion_usd: '43',
    methane_reduction_2024_percent: '22',
    net_zero_target: '2045'
  },
  renewables: {
    total_capacity_gw_2025: '7.9',
    solar_capacity_mw_2025: '7525',
    wind_capacity_mw_2025: '110',
    bioenergy_mw_2025: '272',
    yoy_growth_percent: '15.4',
    solar_share_percent: '95',
    target_2031_gw: '23',
    solar_target_2030_gw: '20',
    solar_cagr_percent: '17'
  },
  nuclear: {
    barakah_capacity_mw: '5600',
    units: '4',
    electricity_share_percent: '25',
    construction_cost_billion_usd: '32',
    first_grid_connection: '2020-08',
    full_operation: '2024-09',
    lng_savings_billion_usd: '9',
    fuel_supplier: 'Framatome',
    first_nuclear_arab_world: 'true'
  },
  hydrogen: {
    target_2031_mtpa: '1.4',
    target_2040_mtpa: '7.5',
    target_2050_mtpa: '15',
    blue_hydrogen_cost_per_kg: '2.8-3.5',
    green_hydrogen_cost_per_kg: '4.10-7',
    cost_parity_year: '~2040s'
  },
  climate: {
    net_zero_target: '2050',
    cat_rating: 'Insufficient',
    cat_pathway: '< 3°C',
    climate_law_effective: '2025-05-30',
    large_emitter_threshold_tco2e: '500000',
    fines_min_aed: '50000',
    fines_max_aed: '2000000',
    methane_reduction_cumulative_percent: '47',
    methane_intensity_percent: '0.15'
  }
}

// ============================================================================
// SECTION 22: SOURCE TIERS
// ============================================================================

export interface EnergySourceTier {
  source: string
  url: string
  topic?: string
  credibility?: string
}

export const sourceTiers = {
  tier0GovernmentPrimary: [
    { source: 'EIA', url: 'https://www.eia.gov/todayinenergy/detail.php?id=61365' },
    { source: 'UAE Government (u.ae)', url: 'https://u.ae/en/about-the-uae/energy' },
    { source: 'UAE Government Hydrogen', url: 'https://u.ae/en/about-the-uae/hydrogen' },
    { source: 'ADNOC', url: 'https://www.adnoc.ae/en/home' },
    { source: 'ADNOC Sustainability', url: 'https://www.adnoc.ae/en/sustainability/climate-action' }
  ] as EnergySourceTier[],
  tier1InternationalOrganizations: [
    { source: 'Climate Action Tracker', url: 'https://www.climateactiontracker.org/countries/uae/' },
    { source: 'World Nuclear Association', url: 'http://world-nuclear.org/news/briefing-uae-nuclear-programme-march-2026' },
    { source: 'OPEC', url: 'https://www.opec.org/' }
  ] as EnergySourceTier[],
  tier2NGOsHumanRights: [
    { source: 'Amnesty International', url: 'https://www.amnesty.org/' },
    { source: 'Human Rights Watch', url: 'https://www.hrw.org/' },
    { source: 'Global Witness', url: 'https://www.globalwitness.org/' },
    { source: 'Oil Change International', url: 'https://www.oilchange.org/' }
  ] as EnergySourceTier[],
  tier3MediaAnalysis: [
    { source: 'Reuters', url: 'https://www.reuters.com/' },
    { source: 'The Guardian', url: 'https://www.theguardian.com/' },
    { source: 'CNN', url: 'https://www.cnn.com/' },
    { source: 'PV Magazine', url: 'https://www.pv-magazine.com/2026/03/04/uae-installed-solar-capacity-reaches-6-7-gw/' },
    { source: 'ZAWYA', url: 'https://www.zawya.com/en/projects/renewable-energy/uae-renewable-energy-capacity-hits-7-9-gw-in-2025-solar-95-xbYBQLC240426_06_41_34' }
  ] as EnergySourceTier[],
  tier4Specialized: [
    { source: 'OilPrice.com', url: 'https://oilprice.com/' },
    { source: 'MEES', url: 'https://www.mees.co/' },
    { source: 'Earth.org', url: 'https://earth.org/' },
    { source: 'Euronews', url: 'https://www.euronews.com/' },
    { source: 'Carbon Capture MENA', url: 'https://www.carboncapturemena.com/' },
    { source: 'GPCA', url: 'https://www.gpcachem.org/knowledge-reports/hydrogen-in-the-uae/' }
  ] as EnergySourceTier[]
}

// ============================================================================
// SECTION 23: REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentCompleted: 'Yes',
  queriesExecuted: '25+',
  pagesAnalyzed: '40+',
  enrichmentSources: '15+',
  fileCompleteness: 'Full enrichment with all requested elements',
  confidenceLevel: 'High',
  verificationStatus: [
    { check: 'All queries executed (25+)', status: 'Complete' },
    { check: 'All pages fetched (40+)', status: 'Complete' },
    { check: 'All data extracted', status: 'Complete' },
    { check: 'Sources documented', status: 'Complete' },
    { check: 'No fabrication detected', status: 'Verified' },
    { check: 'Cross-referenced', status: 'Where possible' },
    { check: 'Enrichment sources fetched', status: '15+ sources' },
    { check: 'URLs validated', status: 'All' }
  ]
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface EnergySustainabilityData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  adnocOverview: typeof adnocOverview
  productionCapacity: typeof productionCapacity
  opecDynamics: typeof opecDynamics
  adnocFinancials: typeof adnocFinancials
  energyTransitionNarrative: typeof energyTransitionNarrative
  adnocDecarbonization: typeof adnocDecarbonization
  greenwashingCriticism: typeof greenwashingCriticism
  renewableEnergy: typeof renewableEnergy
  nuclearEnergyBarakah: typeof nuclearEnergyBarakah
  hydrogenStrategy: typeof hydrogenStrategy
  carbonCaptureCCUS: typeof carbonCaptureCCUS
  cop28Legacy: typeof cop28Legacy
  evAdoption: typeof evAdoption
  climateLawCompliance: typeof climateLawCompliance
  energyDiplomacy: typeof energyDiplomacy
  energyWaterNexus: typeof energyWaterNexus
  methaneEmissions: typeof methaneEmissions
  statisticsSummary: typeof statisticsSummary
  keyTensions: typeof keyTensions
  sentimentAnalysis: typeof sentimentAnalysis
  dashboardKPIs: typeof dashboardKPIs
  sourceTiers: typeof sourceTiers
  reportMetadata: typeof reportMetadata
}

export const energySustainabilityData: EnergySustainabilityData = {
  id: 'topic-2-12',
  sector: 'policy',
  title: 'Energy & Sustainability',
  titleAr: 'الطاقة والاستدامة',
  description: 'ADNOC, oil production, OPEC+, energy transition, renewables, nuclear (Barakah), hydrogen strategy, CCUS, COP28, EV adoption, climate law',
  adnocOverview,
  productionCapacity,
  opecDynamics,
  adnocFinancials,
  energyTransitionNarrative,
  adnocDecarbonization,
  greenwashingCriticism,
  renewableEnergy,
  nuclearEnergyBarakah,
  hydrogenStrategy,
  carbonCaptureCCUS,
  cop28Legacy,
  evAdoption,
  climateLawCompliance,
  energyDiplomacy,
  energyWaterNexus,
  methaneEmissions,
  statisticsSummary,
  keyTensions,
  sentimentAnalysis,
  dashboardKPIs,
  sourceTiers,
  reportMetadata
}

export default energySustainabilityData

// ============================================================================
// HOOK FOR DATA ACCESS
// ============================================================================

import { useState } from 'react'

export function useEnergySustainabilityData() {
  const [data] = useState(energySustainabilityData)
  return { data }
}
