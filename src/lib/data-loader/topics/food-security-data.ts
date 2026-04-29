// @ts-nocheck
/**
 * Food Security - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-15-food-security-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: EXECUTIVE SUMMARY & KEY STATISTICS
// ============================================================================

export interface KeyStatistic {
  metric: string
  value: string
  source: string
}

export const executiveSummary = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 18,
  pagesFetched: '35+',
  enrichmentStatus: 'Fully enriched with verified data from 66+ sources',
  overallSentiment: 'Cautiously Optimistic' as const,
  description: 'UAE Food Security & Agriculture - Comprehensive research on import dependency, strategic reserves, vertical farming, date industry, aquaculture, food safety, and regulatory framework'
}

export const keyStatistics = {
  foodImportDependency: '85-90%',
  population: '~11 million',
  foodImportVolume2022: '~16.9 million tonnes',
  annualFoodImportBill: '$13.2-14 billion',
  globalFoodSecurityIndex2022: '23rd globally, 1st in MENA',
  strategicReserveDuration: '6 months',
  dateProduction: '755,000+ tonnes/year',
  datePalmTrees: '40+ million',
  agriTechStartups: '153 total, 26 funded',
  annualFoodWaste: '3.27 million tonnes',
  foodWasteCost: '$3.5 billion/year',
  verticalFarmingMarketMENA2025: '$400M+',
  organicFoodMarket2024: '$44.67M (TechSci) / $132.8M (GOT)'
}

// ============================================================================
// SECTION 2: FOOD IMPORT DEPENDENCY
// ============================================================================

export interface ImportVolume {
  metric: string
  value: string
  year: string
  source: string
}

export interface WheatImportSource {
  sourceCountry: string
  share: string
}

export interface RiceImportSource {
  sourceCountry: string
  share: string
}

export interface TopFoodstuffsSupplier {
  country: string
  value: string
}

export interface GeopoliticalChokepoint {
  chokepoint: string
  percentOfUAEFoodTransit: string
  riskLevel: string
}

export interface DomesticProductionGap {
  metric: string
  value: string
  source: string
}

export interface ForeignAgriculturalInvestment {
  countryRegion: string
  landHoldings: string
  notes: string
}

export interface KeyAgricultureCompany {
  company: string
  details: string
}

export const foodImportDependency = {
  importVolume: [
    { metric: 'Food Import Volume', value: '~16.9 million tonnes', year: '2022', source: 'U.S.-U.A.E. Business Council' },
    { metric: 'Food Import Bill', value: '$13.2-14 billion', year: '2022', source: 'AGSI, Atlantic Council' },
    { metric: 'Foodstuffs Imports (OEC)', value: '$9.34 billion', year: '2024', source: 'OEC World' },
    { metric: 'Consumer-Oriented Products', value: '$13.6 billion', year: '2023', source: 'Food Export Association' },
    { metric: 'Fresh Fruits & Vegetables', value: '~$3.5 billion', year: 'Annual', source: 'Hotelyearbook' }
  ] as ImportVolume[],
  wheatImports2022: [
    { sourceCountry: 'India', share: '41%' },
    { sourceCountry: 'Russia', share: '31%' },
    { sourceCountry: 'Canada', share: '28%' },
    { sourceCountry: 'Australia', share: '12%' },
    { sourceCountry: 'Total', share: '~1.9 million tonnes' }
  ] as WheatImportSource[],
  riceImports2022: [
    { sourceCountry: 'India', share: '53%' },
    { sourceCountry: 'Pakistan', share: '31%' },
    { sourceCountry: 'Thailand', share: '8%' },
    { sourceCountry: 'Total', share: '~1.2 million tonnes' }
  ] as RiceImportSource[],
  topFoodstuffsSuppliers2024: [
    { country: 'Brazil', value: '$1.34 billion' },
    { country: 'India', value: '$1.09 billion' },
    { country: 'France', value: '$575 million' },
    { country: 'United States', value: '$511 million' }
  ] as TopFoodstuffsSupplier[],
  geopoliticalChokepoints: [
    { chokepoint: 'Strait of Hormuz', percentOfUAEFoodTransit: '~70-90% historically', riskLevel: 'HIGH (Iran tensions 2026)' },
    { chokepoint: 'Bab el-Mandeb', percentOfUAEFoodTransit: '~70%', riskLevel: 'MEDIUM-HIGH' }
  ] as GeopoliticalChokepoint[],
  domesticProductionGap: [
    { metric: 'Fruits & Vegetables Grown Locally', value: '~20%', source: 'Hotelyearbook' },
    { metric: 'Local Production (2019)', value: '523,297 tonnes', source: 'Hotelyearbook' },
    { metric: 'SKUs Now Grown Locally', value: '~2,000', source: 'Hotelyearbook' },
    { metric: 'Farms Registered Under Silal', value: '>1,000', source: 'Hotelyearbook' },
    { metric: 'Total Farms in UAE', value: '~30,000', source: 'Hotelyearbook' }
  ] as DomesticProductionGap[],
  foreignAgriculturalInvestments: [
    { countryRegion: 'Sudan', landHoldings: '1.9 million acres', notes: 'Land Matrix' },
    { countryRegion: 'Egypt', landHoldings: '250,000+ acres', notes: 'Jenaan (Egypt/Sudan/Ethiopia)' },
    { countryRegion: 'Mauritania', landHoldings: '10,000 acres', notes: 'Elite Agro (blueberries)' },
    { countryRegion: 'Tanzania', landHoldings: '45,000 acres', notes: 'Deal announced Feb 2026' },
    { countryRegion: 'Ethiopia', landHoldings: 'Included in Jenaan', notes: '' },
    { countryRegion: 'Morocco', landHoldings: 'Multiple projects', notes: '' },
    { countryRegion: 'Kenya', landHoldings: 'Multiple projects', notes: '' }
  ] as ForeignAgriculturalInvestment[],
  investmentNote: '$11.9 billion invested in East African agriculture since 2009 (Africa Center for Strategic Studies). However, only 4.2% of large-scale investments are producing food (satellite review), and 24% fail outright.',
  keyCompanies: [
    { company: 'Al Dahra', details: 'Sovereign wealth fund-backed: Target 1.2 million acres worldwide' },
    { company: 'Jenaan', details: '250,000 acres across Egypt, Sudan, Ethiopia' },
    { company: 'Elite Agro', details: '10,000 acres in Mauritania' },
    { company: 'Al Foah', details: 'Largest date producer/exporter' }
  ] as KeyAgricultureCompany[]
}

// ============================================================================
// SECTION 3: STRATEGIC RESERVES & STOCKPILING
// ============================================================================

export interface ReserveOverview {
  metric: string
  value: string
  source: string
}

export interface PriceRegulatedCommodity {
  commodity: string
}

export interface LegalFrameworkProvision {
  provision: string
  details: string
}

export interface ViolationPenalty {
  violation: string
  penalty: string
}

export const strategicReserves = {
  reserveOverview: [
    { metric: 'Reserve Duration', value: '6 months', source: 'Minister Al Marri (Mar 2026)' },
    { metric: 'Grain & Staples Stockpiles', value: '6 months', source: 'New Lines Magazine' },
    { metric: 'Key Commodities Covered', value: '9 items', source: 'The Hindu (Mar 2026)' }
  ] as ReserveOverview[],
  ninePriceRegulatedCommodities: [
    { commodity: 'Cooking oil' },
    { commodity: 'Eggs' },
    { commodity: 'Dairy products' },
    { commodity: 'Rice' },
    { commodity: 'Sugar' },
    { commodity: 'Poultry' },
    { commodity: 'Legumes' },
    { commodity: 'Bread' },
    { commodity: 'Wheat' }
  ] as PriceRegulatedCommodity[],
  legalFramework: {
    lawName: 'Federal Law No. 3 of 2020',
    lawTitle: 'Regulation of the Strategic Stock of Food Commodities',
    provisions: [
      { provision: 'Applies to', details: 'Suppliers and registered merchants' },
      { provision: 'Warehouse Requirement', details: 'Must be located within UAE' },
      { provision: 'Coordination', details: 'With NCEMA for emergencies' }
    ] as LegalFrameworkProvision[]
  },
  penalties: [
    { violation: 'Violating law obligations', penalty: 'Fine: AED 500,000 – AED 2,000,000' },
    { violation: 'Severing electronic connection with authorities', penalty: 'Fine: AED 100,000 – AED 1,000,000' },
    { violation: 'Violating stock distribution during emergencies', penalty: 'Imprisonment + Fine: AED 1,000,000 – AED 5,000,000' },
    { violation: 'Repeated violations', penalty: 'All penalties doubled' }
  ] as ViolationPenalty[],
  enforcement: 'Employees designated by the Minister of Justice, in agreement with the Minister of Economy, have judicial seizure officer capacity to document violations.'
}

// ============================================================================
// SECTION 4: FOOD SECURITY STRATEGY & GOVERNANCE
// ============================================================================

export interface GovernanceBody {
  body: string
  role: string
}

export interface SustainabilityTarget {
  target: string
  annualGoal: string
}

export interface KeyInitiative {
  initiative: string
  launch: string
  targetNotes: string
}

export interface GFSIRanking {
  year: number
  uaeRankGlobal: number
  uaeRankMENA: number
  countriesAssessed: number
}

export interface AgTechAcceleratorInitiative {
  initiative: string
}

export const foodSecurityStrategy = {
  nationalFoodSecurityStrategy2051: {
    launched: '2019',
    vision: 'Make UAE #1 in Global Food Security Index by 2051, top 10 by 2021',
    currentStatus: 'Ranked 23rd globally, 1st in MENA (GFSI 2022) — against target of top 10'
  },
  governanceStructure: [
    { body: 'Emirates Council for Food Security (ECSF)', role: 'Oversight; chaired by Minister of State for Food Security' },
    { body: 'Ministry of Economy', role: 'Policy coordination' },
    { body: 'Ministry of Climate Change and Environment (MOCCAE)', role: 'Agricultural policy, food safety' },
    { body: 'National Authority for Emergency, Crisis and Disaster Management (NCEMA)', role: 'Crisis response' }
  ] as GovernanceBody[],
  nationalSystemForSustainableAgriculture: {
    approved: 'June 28, 2020',
    targets: [
      { target: 'Self-sufficiency increase', annualGoal: '+5%' },
      { target: 'Average farm income increase', annualGoal: '+10%' },
      { target: 'Sector workforce increase', annualGoal: '+5%' },
      { target: 'Water used for irrigation reduction', annualGoal: '-15% per production unit' }
    ] as SustainabilityTarget[]
  },
  keyInitiatives: [
    { initiative: 'Plant the Emirates', launch: 'Oct 2024', targetNotes: '20% local production increase, 25% organic growth, 30% climate-smart farms (5-year targets)' },
    { initiative: 'Food and Agriculture Entrepreneurs Programme', launch: '2023-2025', targetNotes: 'Training young Emiratis in agriculture/livestock' },
    { initiative: 'Food Tech Challenge', launch: '2021', targetNotes: 'USD 1 million prize money, 4 winners' },
    { initiative: "ne'ma (National Food Loss and Waste)", launch: '2018', targetNotes: '50% waste reduction by 2030' },
    { initiative: 'UAE Food Bank', launch: '2017', targetNotes: 'First UAE food bank under MBRGI' },
    { initiative: 'Food Security Dashboard of Dubai', launch: 'Jun 2020', targetNotes: 'AI monitoring of 5 key indicators' }
  ] as KeyInitiative[],
  gfsiRankings: [
    { year: 2022, uaeRankGlobal: 23, uaeRankMENA: 1, countriesAssessed: 113 }
  ] as GFSIRanking[],
  agTechAcceleratorInitiatives: [
    { initiative: 'Emirates Sustainable Agriculture Label' },
    { initiative: 'Framework of Agriculture Finance' },
    { initiative: 'Ag-Tech Loan Guarantee' },
    { initiative: 'Ag-Tech Building Code' },
    { initiative: 'Unified Agriculture License' },
    { initiative: 'Food Security Data Framework' },
    { initiative: 'Food Security Data Platform' },
    { initiative: 'Aquaculture Standards' },
    { initiative: 'Fish Feed Facility' },
    { initiative: 'Aquaculture Atlas' }
  ] as AgTechAcceleratorInitiative[]
}

// ============================================================================
// SECTION 5: AGRICULTURAL TECHNOLOGY & VERTICAL FARMING
// ============================================================================

export interface VerticalFarm {
  name: string
  location: string
  attribute: string
  value: string
}

export interface VerticalFarmOverview {
  name: string
  location: string
  notes: string
}

export interface HydroponicsFeature {
  feature: string
  details: string
}

export interface CEABenefit {
  benefit: string
}

export interface CarbonSavings {
  product: string
  co2Saved: string
  vs: string
}

export const agriculturalTechnology = {
  verticalFarmingMarket: [
    { metric: 'MENA Market Value (2025)', value: '$400M+', source: 'Mordor Intelligence/Fanack' },
    { metric: 'MENA Market Projection (2030)', value: '~$1 billion', source: 'Mordor Intelligence' },
    { metric: 'Water Savings (vs. traditional)', value: '80-95%', source: 'Fanack' }
  ],
  majorVerticalFarms: [
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Size', value: '330,000 sf (30,658 m²)' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Structure', value: 'Three-story, 27 grow rooms' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Daily Production', value: '6,613 lbs / 3,000 kg leafy greens' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Water Savings', value: '85% vs. traditional greenhouse' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Energy', value: '~1/3 from rooftop solar' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Client', value: 'Emirates Airlines (since Jul 2022)' },
    { name: 'Bustanica (Emirates Crop One)', location: 'Dubai', attribute: 'Companies', value: 'Crop One Holdings + Emirates Flight Catering' }
  ] as VerticalFarm[],
  verticalFarmOverviews: [
    { name: 'Dubai GigaFarm (Planned)', location: 'Dubai', notes: 'Size: 900,000 square feet; Announced, larger than Bustanica' },
    { name: 'Badia Farms', location: 'UAE', notes: 'First vertical farm in GCC; Water savings: Up to 90% less water than traditional farms' },
    { name: 'Pure Harvest Smart Farms', location: 'Abu Dhabi', notes: 'AI-controlled climate systems; Hydroponic greenhouses' }
  ] as VerticalFarmOverview[],
  hydroponicsInUAE: [
    { feature: 'Growing Medium', details: 'Water + nutrient solution (no soil)' },
    { feature: 'Harvest Cycle', details: '~1 month for vegetables' },
    { feature: 'Crops', details: 'Lettuce, cabbage, spinach, shallots, kale, strawberries' },
    { feature: 'Water Savings (Zip system)', details: '90-95% vs. other planting methods' },
    { feature: 'Dutch Bucket System', details: 'For cucumbers, tomatoes (drip irrigation)' }
  ] as HydroponicsFeature[],
  ceaBenefits: [
    { benefit: 'Year-round production (not limited to growing seasons)' },
    { benefit: 'Protected from weather extremes, inconsistent rainfall, pests' },
    { benefit: 'UAE summer temperatures: ~43°C (110°F)' },
    { benefit: 'No water evaporation into atmosphere' },
    { benefit: 'No pesticides used' },
    { benefit: 'Increasingly powered by solar/wind renewables' }
  ] as CEABenefit[],
  eliteAgroCarbonSavings: [
    { product: 'Tomatoes', co2Saved: '13,258 tonnes', vs: 'Airfreight from Holland/Spain' },
    { product: 'Blueberries', co2Saved: '1,501 tonnes', vs: 'Airfreight from US' },
    { product: 'Potatoes', co2Saved: '425+ tonnes', vs: 'Sea freight from Egypt' }
  ] as CarbonSavings[],
  localProductionStatistics: [
    { metric: 'Local Produce (2019)', value: '523,297 tonnes' },
    { metric: 'Local Fruits & Vegetables', value: '~20% of consumption' },
    { metric: 'Farms in UAE', value: '~30,000' },
    { metric: 'Farms registered under Silal', value: '>1,000' },
    { metric: 'SKUs now grown locally', value: '~2,000' }
  ]
}

// ============================================================================
// SECTION 6: DATE INDUSTRY
// ============================================================================

export interface DateProductionMetric {
  metric: string
  value: string
  source: string
}

export interface DateVariety {
  variety: string
  characteristics: string
}

export interface DateCompany {
  company: string
  notes: string
}

export interface DateValueAdded {
  product: string
}

export const dateIndustry = {
  productionOverview: [
    { metric: 'Global Ranking', value: '4th largest producer', source: 'Agzia' },
    { metric: 'Annual Production', value: '755,000+ tonnes', source: 'Agzia' },
    { metric: 'Date Palm Trees', value: '40+ million', source: 'Multiple sources' },
    { metric: 'Export Volume', value: '~12,000 metric tons/year', source: 'LinkedIn' },
    { metric: 'Export Destinations', value: '>100 countries', source: 'Multiple sources' },
    { metric: 'Market Value (2025)', value: 'USD 0.92 billion', source: 'LinkedIn' },
    { metric: 'Market Projection (2030)', value: 'USD 1.23 billion', source: 'LinkedIn' },
    { metric: 'CAGR', value: '~5.98% (2025-2030)', source: 'LinkedIn' }
  ] as DateProductionMetric[],
  majorDateVarieties: [
    { variety: 'Medjool', characteristics: 'Premium, large, soft' },
    { variety: 'Barhi', characteristics: 'Soft, honey-like' },
    { variety: 'Zahidi', characteristics: 'Medium, firm, sweet' },
    { variety: 'Deglet Noor', characteristics: 'Semi-dry, translucent' },
    { variety: 'Ajwa', characteristics: 'Dark, soft, premium (Saudi origin)' },
    { variety: 'Khalas', characteristics: 'Premium, soft, aromatic' },
    { variety: 'Sukkary', characteristics: 'Very sweet, soft' }
  ] as DateVariety[],
  keyPlayers: [
    { company: 'Al Foah', notes: 'Largest producer/exporter; exports to 48 countries' },
    { company: 'Al Barakah Dates Factory', notes: 'BRC Grade A, certified organic, solar powered; exports to 97+ countries' },
    { company: 'Bayara (Gyma Food Industries)', notes: 'Major exporter' },
    { company: 'Bateel International', notes: 'Luxury/specialty dates' },
    { company: 'Liwa Dates Factory', notes: 'Significant producer' },
    { company: 'Date Crown (Al Foah Group)', notes: 'Major exporter' },
    { company: 'Kimia Gold', notes: 'Quality producer' },
    { company: 'Jomara', notes: 'Established brand' },
    { company: 'Barari Dates', notes: 'Premium dates' },
    { company: 'Royal Palm Dates', notes: 'Major exporter' }
  ] as DateCompany[],
  exportMarkets: {
    primary: 'India, UK, US, Morocco',
    secondary: 'Indonesia, France, Malaysia, and 95+ other countries'
  },
  valueAddedProducts: [
    { product: 'Date syrup' },
    { product: 'Date paste' },
    { product: 'Date powder/sugar' },
    { product: 'Chopped dates' },
    { product: 'Date-based energy bars' },
    { product: 'Date-flavored ice cream' },
    { product: 'Date beverages' },
    { product: 'Date fibers' }
  ] as DateValueAdded[]
}

// ============================================================================
// SECTION 7: AQUACULTURE & FISH FARMING
// ============================================================================

export interface FishConsumptionMetric {
  metric: string
  value: string
  source: string
}

export interface AquacultureInvestment {
  year: string
  investor: string
  amount: string
  target: string
}

export interface RASFeature {
  feature: string
  details: string
}

export interface LocalFishSpecies {
  localName: string
  scientificName: string
  commonName: string
}

export const aquaculture = {
  fishConsumptionOverview: [
    { metric: 'Annual Per Capita Consumption', value: '~66 pounds', source: 'CSIS' },
    { metric: 'Global Average', value: '45 pounds', source: 'CSIS' },
    { metric: 'GCC Ranking', value: 'Highest in GCC', source: 'CSIS' },
    { metric: 'Local Fish % of Consumption', value: '~8%', source: 'CSIS' },
    { metric: 'Most Consumed Fish', value: 'Tuna (#1), Salmon (#2)', source: 'CSIS' }
  ] as FishConsumptionMetric[],
  aquacultureStrategy: {
    fishIdentified: 'Fish identified as one of 18 strategic food items under UAE food security strategy',
    salmonStatus: 'Salmon is second-most consumed fish',
    theFishFarmProduction: 'Current production: 550 tons organic salmon annually',
    expansionTarget: 'Expansion target: 10,000+ tons per year',
    firstEmiratiRaisedSalmon: 'First Emirati-raised salmon sold: 2019'
  },
  investments: [
    { year: '2021', investor: 'ADQ (Abu Dhabi)', amount: '$350+ million', target: 'RAS aquaculture fund' },
    { year: '2024', investor: 'ADQ + Finnforel', amount: 'TBD', target: 'Feasibility study for state-of-the-art fish farm' }
  ] as AquacultureInvestment[],
  technologyRAS: [
    { feature: 'Water Reuse', details: 'Up to 99%' },
    { feature: 'Species Requirements', details: 'Salmon thrive at 46-57°F (challenge in UAE heat)' },
    { feature: 'Species Cultivated', details: 'Salmon, Tilapia (warm-water alternative)' }
  ] as RASFeature[],
  keySpeciesInUAEAquaculture: [
    { localName: 'Hamra', scientificName: 'Malabar Red Snapper', commonName: 'Popular local fish' },
    { localName: 'Shiqra', scientificName: 'Mangrove Red Snapper', commonName: 'Popular local fish' },
    { localName: 'Hamoor', scientificName: 'Orange-spotted Grouper', commonName: 'Popular local fish' }
  ] as LocalFishSpecies[],
  localSalmonEconomics: [
    { metric: 'Locally Farmed Salmon Price', value: '~$23/pound' },
    { metric: 'Imported Farmed Salmon Premium', value: '~30% higher' }
  ],
  productionNote: 'Larger fish farms account for over 90% of current production. FAO supporting UAE government to develop sustainable aquaculture industry. UAE using innovative technologies to farm fish sustainably, decreasing pressure on ecosystems.'
}

// ============================================================================
// SECTION 8: FOOD SAFETY & REGULATORY FRAMEWORK
// ============================================================================

export interface CoreLegislation {
  lawName: string
  scope: string
  enforcement: string
  supplementary: string
}

export interface RegulatoryBody {
  body: string
  jurisdiction: string
}

export interface InspectionSystem {
  system: string
  location: string
  notes: string
}

export interface CriminalPenalty {
  violation: string
  imprisonment: string
  fineAED: string
}

export interface NationalRapidAlertCategory {
  riskCategory: string
  description: string
}

export interface ProductRecall {
  date: string
  product: string
  reason: string
}

export const foodSafety = {
  coreLegislation: {
    lawName: 'Federal Law No. 10 of 2015 on Food Safety',
    scope: 'Food safety throughout food chain',
    enforcement: 'Ministry of Climate Change and Environment (MOCCAE)',
    supplementary: 'Cabinet Decision No. 26/2017'
  } as CoreLegislation,
  regulatoryBodies: [
    { body: 'MOCCAE', jurisdiction: 'Federal food safety policy' },
    { body: 'ADAFSA (Abu Dhabi)', jurisdiction: 'Abu Dhabi Agriculture and Food Safety' },
    { body: 'Dubai Municipality', jurisdiction: 'Dubai food safety' },
    { body: 'TDRA', jurisdiction: 'Telecommunications regulatory' },
    { body: 'National Food Safety Committee', jurisdiction: 'Coordination' }
  ] as RegulatoryBody[],
  inspectionMonitoringSystems: [
    { system: 'Risk-Based System (RBS)', location: 'Abu Dhabi', notes: 'ADAFSA' },
    { system: 'Raqeeb', location: 'Ajman', notes: 'Smart inspection' },
    { system: 'Smart EMP, Smart Audit, Smart Docs, Smart Record', location: 'Federal', notes: 'MOCCAE tools' },
    { system: 'Smart HACCP, Smart Supplier, Smart Farm', location: 'Federal', notes: 'MOCCAE tools' },
    { system: 'Manaa System', location: 'National', notes: 'Product recall management (MOIAT)' }
  ] as InspectionSystem[],
  criminalPenaltiesArticle14: [
    { violation: 'Unsafe Food Trading', imprisonment: 'Minimum 3 months', fineAED: '100,000 – 2,000,000' },
    { violation: 'Non-Compliant Materials (pork, alcohol, Sharia violations)', imprisonment: 'Minimum 1 month', fineAED: '50,000 – 500,000' },
    { violation: 'Misrepresentation', imprisonment: 'None', fineAED: '10,000 – 100,000' },
    { violation: 'Disposing Retained Food', imprisonment: '3 months – 2 years', fineAED: '100,000 – 300,000' },
    { violation: 'Technical Regulation Violations', imprisonment: 'None', fineAED: '10,000 – 100,000' },
    { violation: 'Attempted Violations', imprisonment: 'Same as completed', fineAED: 'Same as completed' },
    { violation: 'Repeat Violations', imprisonment: '—', fineAED: 'Minimum fine doubled' }
  ] as CriminalPenalty[],
  administrativeMeasures: [
    'Warnings',
    'Temporary closure up to 3 months',
    'Permanent closure for persistent violations'
  ],
  nationalRapidAlertSystem: {
    launched: '2017',
    categories: [
      { riskCategory: 'High', description: 'Immediate action required' },
      { riskCategory: 'Medium', description: 'Action within 48-72 hours' },
      { riskCategory: 'Low', description: 'Monitoring and surveillance' }
    ] as NationalRapidAlertCategory[]
  },
  productRecalls2026: [
    { date: 'February 2026', product: 'Super Immune+', reason: 'Unapproved DMAE, molybdenum, boron' },
    { date: 'February 2026', product: 'WoundVite (ZEN NUTRIENTS)', reason: 'Unauthorized novel food ingredient' },
    { date: 'February 2026', product: 'Rosabella Moringa Capsule', reason: 'Salmonella contamination' },
    { date: 'February 2026', product: 'Isotonac-4 (MEK-641D)', reason: 'Quality defect' },
    { date: 'January 2026', product: 'Nestle infant formula products', reason: 'Bacillus cereus traces' }
  ] as ProductRecall[]
}

// ============================================================================
// SECTION 9: FOOD WASTE
// ============================================================================

export interface FoodWasteMetric {
  metric: string
  value: string
  source: string
}

export interface SectorWasteBreakdown {
  sector: string
  percentOfTotalWaste: string
}

export interface WasteSuccessStory {
  entity: string
  achievement: string
  year: string
}

export const foodWaste = {
  scaleOfProblem: [
    { metric: 'Annual Food Waste', value: '3.27 million tonnes', source: 'MOCCAE' },
    { metric: 'Annual Cost', value: '$3.5 billion', source: 'Farrelly Mitchell' },
    { metric: 'Per Capita Waste', value: '95 kg/year', source: 'PMC study' },
    { metric: 'Food % of Household Waste', value: '40%', source: 'Farrelly Mitchell' },
    { metric: 'Dubai Prepared Food Wasted', value: '38%', source: 'Farrelly Mitchell' },
    { metric: 'Ramadan Waste Spike', value: '60% in Dubai', source: 'Farrelly Mitchell' },
    { metric: 'Methane Emissions Equivalent', value: 'Over 1 million cars', source: 'Farrelly Mitchell' }
  ] as FoodWasteMetric[],
  sectorBreakdown2022: [
    { sector: 'Households', percentOfTotalWaste: '60%' },
    { sector: 'Food Services', percentOfTotalWaste: '28%' },
    { sector: 'Retail', percentOfTotalWaste: '12%' }
  ] as SectorWasteBreakdown[],
  ramadanImpact: [
    'Demand for meat, vegetables, fruits, dairy increases by ~50% during Ramadan',
    'Most additional food is discarded'
  ],
  nemaInitiative: {
    launched: '2018',
    goal: '50% reduction in food waste by 2030',
    partners: 'Ministry of Climate Change and Environment + Emirates Foundation'
  },
  successStories: [
    { entity: 'Jumeirah Zabeel Saray', achievement: '20 tonnes waste reduced (50,000 meals)', year: '2022' },
    { entity: 'Hilton (13 properties)', achievement: '62% waste reduction', year: '2023' },
    { entity: 'Hilton', achievement: '446 tons local produce sourced', year: '2022' },
    { entity: 'Hilton', achievement: '8.9 million kg CO2e saved', year: '2022' }
  ] as WasteSuccessStory[],
  uaeFoodBank: {
    launched: '2017 under MBRGI',
    ramadan2026Target: '8 million meals',
    globalReach2024: '28.9 million people through food aid initiatives',
    singleDayRecord: '5,000 meals distributed (Mar 2026)'
  }
}

// ============================================================================
// SECTION 10: FOOD PRICE INFLATION & CONSUMER PROTECTION
// ============================================================================

export interface FoodInflationData {
  date: string
  foodInflation: string
  notes: string
}

export interface CPIData {
  indicator: string
  value: string
}

export interface Projection {
  period: string
  forecast: string
}

export interface ConsumerProtectionMetric {
  metric: string
  value: string
}

export interface PriceIncrease {
  vegetable: string
  before: string
  after: string
}

export const foodPriceInflation = {
  foodInflationData: [
    { date: 'December 2025', foodInflation: '1.02%', notes: 'Up from 0.72% previous month' },
    { date: 'August 2022', foodInflation: '9.06%', notes: 'All-time high (post-Ukraine)' },
    { date: 'April 2021', foodInflation: '-3.52%', notes: 'Record low' },
    { date: 'Average (2009-2025)', foodInflation: '2.59%', notes: 'Historical average' }
  ] as FoodInflationData[],
  cpiDataDecember2025: [
    { indicator: 'CPI', value: '111.08 points' },
    { indicator: 'CPI Housing & Utilities', value: '112.50 points' },
    { indicator: 'CPI Transportation', value: '110.54 points' },
    { indicator: 'Dubai CPI', value: '116.77 points' },
    { indicator: 'Dubai Inflation Rate', value: '2.99%' },
    { indicator: 'Overall Inflation Rate', value: '2.04%' }
  ] as CPIData[],
  projections: [
    { period: 'End of current quarter', forecast: '1.60%' },
    { period: '2027', forecast: '2.50%' },
    { period: '2028', forecast: '2.20%' }
  ] as Projection[],
  consumerProtectionApril2026: {
    context: 'During Hormuz shipping crisis',
    metrics: [
      { metric: 'Inspection Visits', value: '12,284' },
      { metric: 'Violations Recorded', value: '249' },
      { metric: 'Warnings Issued', value: '905' },
      { metric: 'Fines Imposed', value: 'AED 207,250 ($54,459)' }
    ] as ConsumerProtectionMetric[]
  },
  priceIncreasesDuringCrisis: [
    { vegetable: 'Carrots', before: '~4 AED/kg', after: '~10 AED/kg' },
    { vegetable: 'Tomatoes', before: '—', after: '10 AED/kg' },
    { vegetable: 'Onions', before: '—', after: '7 AED/kg' }
  ] as PriceIncrease[],
  priceMonitoring: {
    essentialProductsTracked: '33 essential products',
    majorRetailChains: '12 major retail chains',
    priceRegulatedCommodities: 'Nine price-regulated commodities',
    ministerQuote: 'Minister Abdullah bin Touq Al Marri: "Food security is a red line"'
  }
}

// ============================================================================
// SECTION 11: FOOD FRAUD & ANTI-COUNTERFEITING
// ============================================================================

export interface FoodFraudPenalty {
  entity: string
  penalty: string
}

export interface AdditionalFoodPenalty {
  violation: string
  fineAED: string
}

export interface GMOFinding {
  finding: string
  details: string
}

export const foodFraud = {
  legalFramework: {
    lawName: 'Federal Law by Decree Concerning Anti-Commercial Fraud (2023)',
    penalties: [
      { entity: 'Individuals', penalty: 'Up to 2 years imprisonment + AED 250,000 fine' },
      { entity: 'Companies', penalty: 'Up to AED 1 million fine' }
    ] as FoodFraudPenalty[]
  },
  additionalFoodSpecificPenalties: [
    { violation: 'Adulterated/harmful food', fineAED: '100,000 – 2,000,000' },
    { violation: 'Unlicensed pork/alcohol sales', fineAED: '500,000' },
    { violation: 'Technical violations', fineAED: '10,000 minimum' }
  ] as AdditionalFoodPenalty[],
  gmoInUAE: [
    { finding: 'Estimated % of food that may be GMO', details: '~40%' },
    { finding: '2011 Abu Dhabi study', details: '16 of 128 samples contained GMO material' },
    { finding: 'GSO 2141:2011 (unprocessed)', details: '1% threshold' },
    { finding: 'GSO 2142:2011 (processed)', details: '1% threshold' },
    { finding: 'UAE mandatory biotech labeling (2020)', details: '0.9% threshold' }
  ] as GMOFinding[]
}

// ============================================================================
// SECTION 12: ORGANIC FOOD MARKET
// ============================================================================

export interface OrganicMarketSize {
  source: string
  value2024: string
  projection2030: string
  cagr: string
}

export interface MarketRanking {
  metric: string
  value: string
}

export interface OrganicSegment {
  segment: string
  growthDriver: string
}

export interface OrganicCompany {
  company: string
  marketPosition: string
}

export interface USOrganicExport {
  year: string
  value: string
}

export const organicFoodMarket = {
  marketSize: [
    { source: 'TechSci Research', value2024: '$44.67 million', projection2030: '$51.23 million', cagr: '4.62%' },
    { source: 'Global Organic Trade', value2024: '$132.8 million (2023)', projection2030: '$179.0 million (2028)', cagr: '6.2%' }
  ] as OrganicMarketSize[],
  marketRankings: [
    { metric: 'Global Ranking', value: '41st' },
    { metric: 'MENA Ranking', value: '4th' },
    { metric: 'Per Capita Expenditure', value: '$12.5 (2023)' }
  ] as MarketRanking[],
  segmentPerformance: [
    { segment: 'Fastest Growing', growthDriver: 'Meat, Poultry & Seafood' },
    { segment: 'Largest', growthDriver: 'Fruits & Vegetables' },
    { segment: 'Largest Region', growthDriver: 'Dubai' },
    { segment: 'Distribution Channel', growthDriver: 'Supermarkets/Hypermarkets (dominant)' },
    { segment: 'Fastest Growing Channel', growthDriver: 'Online platforms' }
  ] as OrganicSegment[],
  keyPlayers: [
    { company: 'Organic Foods and Café', marketPosition: '6.3-6.7% value share (market leader)' },
    { company: 'Groupe Lactalis', marketPosition: '6.1%' },
    { company: 'Nestlé SA', marketPosition: '4.7%' },
    { company: 'LuLu Group International', marketPosition: 'Major retailer' },
    { company: 'Union Coop', marketPosition: 'Major retailer' }
  ] as OrganicCompany[],
  consumerTrends: [
    { metric: 'Prefer responsible companies', value: '52% of UAE/Saudi (Apr 2024)' },
    { metric: 'Projected obese by 2035', value: '7.5 million' },
    { metric: 'Yearly obesity costs', value: '~$12 billion (projected)' }
  ],
  regulatoryFramework: [
    { regulation: 'Law No. 5 of 2009', details: 'Organic products' },
    { regulation: 'GSO 2374:2014', details: 'Implementation date: 2012' },
    { regulation: 'Certification', details: 'Required via ESMA' }
  ],
  usOrganicExportsToUAE: [
    { year: '2024', value: '$6,128,565' },
    { year: '2023', value: '$7,743,113' },
    { year: '2022', value: '$10,206,315' },
    { year: '2021', value: '$10,710,776' }
  ] as USOrganicExport[],
  top2024Exports: 'Organic vinegar ($2.26M), tomato sauce ($902K), strawberries ($457K)'
}

// ============================================================================
// SECTION 13: FOOD LABELING & NUTRITIONAL STANDARDS
// ============================================================================

export interface MandatoryLabelElement {
  element: string
}

export interface ArabicRequirement {
  rule: string
  requirement: string
}

export interface DateFormatRequirement {
  shelfLife: string
  format: string
}

export interface NutritionalInfoRequirement {
  nutrient: string
  unit: string
}

export interface RecognizedAllergen {
  allergen: string
}

export interface RegistrationSystem {
  system: string
  authority: string
  fee: string
  processingTime: string
}

export interface LabelingPenalty {
  violation: string
  penalty: string
}

export const foodLabeling = {
  mandatoryLabelElements: [
    { element: 'Product name' },
    { element: 'Ingredients list (descending by weight)' },
    { element: 'Net quantity (metric units)' },
    { element: 'Country of origin' },
    { element: 'Manufacturer details (full name and address)' },
    { element: 'Local UAE importer (name, address, trade license number)' },
    { element: 'Production date' },
    { element: 'Expiry date' },
    { element: 'Storage conditions' },
    { element: 'Nutritional information per GSO 2233:2021' },
    { element: 'Allergen declarations' },
    { element: 'Batch/lot number' }
  ] as MandatoryLabelElement[],
  arabicLanguageRequirements: [
    { rule: 'Minimum character height', requirement: '1.6mm' },
    { rule: 'Arabic vs. English size', requirement: 'Arabic must be equal to or larger' },
    { rule: 'Translation rejections', requirement: 'Machine translations frequently rejected' },
    { rule: 'Post-import stickers', requirement: 'Pre-approval required' }
  ] as ArabicRequirement[],
  dateFormatRequirements: [
    { shelfLife: '≤3 months', format: 'Day/Month/Year' },
    { shelfLife: '>3 months', format: 'Day/Month/Year OR Month/Year' }
  ] as DateFormatRequirement[],
  mandatoryNutritionalInformation: [
    { nutrient: 'Energy', unit: 'kJ first, then kcal' },
    { nutrient: 'Protein', unit: 'g' },
    { nutrient: 'Total fat', unit: 'g' },
    { nutrient: 'Saturated fat', unit: 'g' },
    { nutrient: 'Total carbohydrates', unit: 'g' },
    { nutrient: 'Sugars', unit: 'g' },
    { nutrient: 'Sodium', unit: 'mg (or salt equivalent)' },
    { nutrient: 'Dietary fiber', unit: 'g' }
  ] as NutritionalInfoRequirement[],
  recognizedAllergens: [
    { allergen: 'Gluten cereals' },
    { allergen: 'Crustaceans' },
    { allergen: 'Eggs' },
    { allergen: 'Fish' },
    { allergen: 'Peanuts' },
    { allergen: 'Soybeans' },
    { allergen: 'Milk' },
    { allergen: 'Tree nuts' },
    { allergen: 'Celery' },
    { allergen: 'Mustard' },
    { allergen: 'Sesame' },
    { allergen: 'Sulphites (>10 mg/kg)' },
    { allergen: 'Lupin' },
    { allergen: 'Molluscs' }
  ] as RecognizedAllergen[],
  registrationSystems: [
    { system: 'Montaji', authority: 'Dubai Municipality', fee: 'AED 10/product', processingTime: '5-10 working days' },
    { system: 'FIEMIS', authority: 'ADAFSA (Abu Dhabi)', fee: 'Similar', processingTime: 'Similar' }
  ] as RegistrationSystem[],
  penalties: [
    { violation: 'Technical violations', penalty: 'AED 10,000 – 100,000' },
    { violation: 'Adulterated food', penalty: 'AED 100,000 – 2,000,000 + imprisonment' },
    { violation: 'Repeat violations', penalty: 'All penalties doubled' }
  ] as LabelingPenalty[],
  trafficLightLabeling: {
    policyName: 'UAE Food Labelling Policy (2026)',
    colors: [
      { color: 'Red', meaning: 'High in specific nutrients' },
      { color: 'Yellow', meaning: 'Medium' },
      { color: 'Green', meaning: 'Low/healthy' }
    ]
  },
  regulatoryBodies: [
    { body: 'ESMA', role: 'Federal standards (UAE.S 9:2017/2019, GSO framework)' },
    { body: 'Dubai Municipality', role: 'Montaji Portal registration' },
    { body: 'ADAFSA', role: 'FIEMIS system for Abu Dhabi' }
  ]
}

// ============================================================================
// SECTION 14: HALAL CERTIFICATION
// ============================================================================

export interface HalalStandard {
  standard: string
  description: string
}

export interface HalalStatistic {
  category: string
  count: number
}

export interface HalalRequirement {
  requirement: string
  details: string
}

export const halalCertification = {
  regulatoryFramework: {
    decree: 'Cabinet Decree No. 10 for 2014 — UAE System for Control of Halal Products'
  },
  keyStandards: [
    { standard: 'UAE.S 2055-1', description: 'General Requirements for Halal Food' },
    { standard: 'UAE.S 2055-2', description: 'Requirements for Halal Certification Bodies' },
    { standard: 'UAE.S 2055-4', description: 'Requirements for Halal Cosmetics and Personal Care' },
    { standard: 'UAE.S 993', description: 'Animal Slaughtering Requirements (Islamic rules)' },
    { standard: 'UAE.S GSO 713', description: 'Poultry Processing Abattoir Hygiene' },
    { standard: 'UAE.S GSO 21', description: 'Food Plant Hygiene Regulations' },
    { standard: 'UAE.S GSO 9', description: 'Prepacked Food Labelling' }
  ] as HalalStandard[],
  statistics2022: [
    { category: 'Total Halal National Marks Issued', count: 7585 },
    { category: 'Food Certifications', count: 6581 },
    { category: 'Cosmetics & Personal Care', count: 1004 },
    { category: 'Halal Products Certified', count: 24 }
  ] as HalalStatistic[],
  certificationRequirements: [
    { requirement: 'Ingredients', details: 'Halal' },
    { requirement: 'Environment', details: 'Hygienic, contamination-free' },
    { requirement: 'Segregation', details: 'Halal and non-Halal products must be separated' }
  ] as HalalRequirement[],
  halalNationalMark: {
    description: 'Optional but available to qualified products',
    purpose: 'Ensures entire supply chain meets Islamic Sharia standards',
    issuer: 'Ministry\'s Department of Conformity'
  }
}

// ============================================================================
// SECTION 15: HUMANITARIAN FOOD AID
// ============================================================================

export interface UAEFoodBankMetric {
  metric: string
  value: string
  year: string
}

export interface AidInitiative {
  crisis: string
  aid: string
  date: string
}

export const humanitarianFoodAid = {
  uaeFoodBank: {
    launched: '2017 under Mohammed bin Rashid Al Maktoum Global Initiatives (MBRGI)',
    metrics: [
      { metric: 'Ramadan meals target', value: '8 million', year: '2026' },
      { metric: 'Global people reached', value: '28.9 million', year: '2024' },
      { metric: 'Single-day meals record', value: '5,000', year: 'Mar 2026' }
    ] as UAEFoodBankMetric[]
  },
  recentAidInitiatives: [
    { crisis: 'Kenya drought', aid: '30 tonnes food', date: 'Feb 2026' },
    { crisis: 'Global humanitarian situations', aid: 'Multiple relief consignments', date: '2024' }
  ] as AidInitiative[],
  tatbeenAlKhairFoundation: {
    description: 'Provides food assistance during natural and man-made disasters; Offers protection, healthcare, and food assistance'
  }
}

// ============================================================================
// SECTION 16: WATER-FOOD NEXUS
// ============================================================================

export interface WaterScarcityMetric {
  metric: string
  value: string
  source: string
}

export interface WaterEnergyFoodRelationship {
  relationship: string
  impact: string
}

export interface SustainabilityTargetWater {
  target: string
  goal: string
}

export const waterFoodNexus = {
  waterScarcity: [
    { metric: 'Groundwater % of supply', value: '~70%', source: 'LinkedIn (Mar 2026)' },
    { metric: 'Annual rainfall', value: 'Scarce, winter-concentrated', source: 'ScienceDirect' },
    { metric: 'Per capita consumption', value: 'Among world\'s highest', source: 'Multiple' },
    { metric: '2050 Population Projection', value: '13.1 million (+40%)', source: 'RVO' }
  ] as WaterScarcityMetric[],
  waterEnergyFoodNexus: [
    { relationship: 'Water production requires', impact: 'Energy' },
    { relationship: 'Energy generation requires', impact: 'Water' },
    { relationship: 'Desalination', impact: 'Energy-intensive' }
  ] as WaterEnergyFoodRelationship[],
  sustainabilityTargets: [
    { target: 'Irrigation water reduction', goal: '-15% per production unit annually' },
    { target: 'Vertical farm water savings', goal: '80-95% vs. traditional' },
    { target: 'Badia Farms savings', goal: 'Up to 90% less water' },
    { target: 'Bustanica savings', goal: '85% less than greenhouse' }
  ] as SustainabilityTargetWater[],
  policyActions: [
    'Abu Dhabi reducing agricultural water subsidies',
    'National System for Sustainable Agriculture mandates 15% annual reduction in water used for irrigation per production unit',
    'Aquaculture RAS systems reuse up to 99% of water'
  ]
}

// ============================================================================
// SECTION 17: GMO REGULATION
// ============================================================================

export interface GMOProvision {
  provision: string
  details: string
}

export interface GSOStandard {
  standard: string
  productType: string
  threshold: string
}

export interface GMOTestingData {
  study: string
  finding: string
}

export const gmoRegulation = {
  legalFramework: {
    lawName: 'Federal Law No. (9) of 2020 on Biosafety of Genetically Modified Organisms'
  },
  keyProvisions: [
    { provision: 'Mandatory labeling threshold', details: '0.9% or more bioengineered components' },
    { provision: 'Import restriction', details: 'GMOs require permit from Competent Authority' },
    { provision: 'Labeling requirement', details: 'Each shipment and package' }
  ] as GMOProvision[],
  gsoStandards: [
    { standard: 'GSO 2141:2011', productType: 'Unprocessed agricultural products', threshold: '1%' },
    { standard: 'GSO 2142:2011', productType: 'Processed agricultural products', threshold: '1%' },
    { standard: 'GSO 2371:2014', productType: 'Terminology definitions', threshold: '—' }
  ] as GSOStandard[],
  testingData: [
    { study: '2011 Abu Dhabi study', finding: '16 of 128 samples contained GMO material' },
    { study: 'Estimated % of UAE food that may be GMO', finding: '~40%' }
  ] as GMOTestingData[]
}

// ============================================================================
// SECTION 18: AGRI-TECH STARTUP ECOSYSTEM
// ============================================================================

export interface AgriTechMetric {
  metric: string
  value: string
}

export interface AgriTechCompany {
  company: string
  founded: string
  location: string
  stage: string
  totalFunding: string
  focus: string
}

export interface AgriTechInvestment {
  investor: string
  amount: string
  year: string
  target: string
}

export const agriTechStartups = {
  overview: [
    { metric: 'Total AgriTech Startups', value: '153' },
    { metric: 'Funded/Active', value: '26' },
    { metric: 'Series A+ Funding', value: '5' },
    { metric: 'Average new companies/year', value: '8 (past 10 years)' }
  ] as AgriTechMetric[],
  topCompanies: [
    { company: 'Advanta', founded: '1989', location: 'Dubai', stage: 'Public', totalFunding: '$400M', focus: 'Climate-smart seeds' },
    { company: 'Pure Harvest', founded: '2016', location: 'Abu Dhabi', stage: 'Series D', totalFunding: '$387M', focus: 'Hydroponic produce' },
    { company: 'Right Farm', founded: '2021', location: 'Dubai', stage: 'Seed', totalFunding: '$2.8M', focus: 'B2B produce marketplace' },
    { company: 'Farmsent', founded: '2024', location: 'Dubai', stage: 'Raised', totalFunding: '—', focus: 'Blockchain for food trade' },
    { company: 'Aydi', founded: '—', location: 'Dubai', stage: 'Seed', totalFunding: '$7.5M', focus: 'AI-powered farming' },
    { company: 'Madar Farms', founded: '—', location: 'UAE', stage: '—', totalFunding: '—', focus: 'Vertical farming' },
    { company: 'Badia Farms', founded: '—', location: 'Dubai', stage: '—', totalFunding: '—', focus: 'First GCC vertical farm' },
    { company: 'Armela Farms', founded: '—', location: 'UAE', stage: '—', totalFunding: '—', focus: 'Hydroponics' },
    { company: 'RightFarm', founded: '—', location: 'UAE', stage: '—', totalFunding: '—', focus: 'Farming platform' }
  ] as AgriTechCompany[],
  notableInvestments: [
    { investor: 'KKR, Alpha Wave Global', amount: '$400M', year: 'Nov 2024', target: 'Advanta' },
    { investor: 'Shorooq Partners, IMM', amount: '$387M', year: 'Jun 2022', target: 'Pure Harvest' },
    { investor: 'ADQ, DisruptAD', amount: '$2.8M', year: 'Apr 2022', target: 'Right Farm' },
    { investor: 'COTU Ventures', amount: '$7.5M', year: '2026', target: 'Aydi' },
    { investor: 'Abu Dhabi (ADQ)', amount: '$350M+', year: '2021', target: 'RAS aquaculture' }
  ] as AgriTechInvestment[],
  uaeAgritechInvestmentShare: {
    value: '1.1%',
    context: 'of global agritech investment capital in 2021'
  }
}

// ============================================================================
// SECTION 19: SOURCES & CREDIBILITY
// ============================================================================

export interface SourceURL {
  number: number
  url: string
  sourceType: string
  credibility: string
  uaeRelevance: string
}

export interface BlockedURL {
  url: string
  issue: string
}

export const sources = {
  successfullyFetched: [
    { number: 1, url: 'https://newlinesmag.com/spotlight/the-limits-of-the-uaes-push-for-food-security/', sourceType: 'Magazine', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 2, url: 'https://u.ae/en/information-and-services/environment-and-energy/food-security', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 3, url: 'https://www.weforum.org/stories/2025/06/how-a-local-global-ecosystem-approach-fuels-food-innovation-in-the-uae/', sourceType: 'International Org', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 4, url: 'https://usuaebusiness.org/resources/the-u-a-e-s-food-security-mission/', sourceType: 'Business Council', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 5, url: 'https://www.atlanticcouncil.org/blogs/menasource/uae-food-security/', sourceType: 'Think Tank', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 6, url: 'https://gulfnews.com/business/uae-confirms-stable-food-supplies-and-no-shortages-as-over-12000-inspections-enforce-consumer-protection-1.500496109', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 7, url: 'https://www.khaleejtimes.com/uae/food-supplies-steady-prices-stable-minister-economy-tourism', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 8, url: 'https://farrellymitchell.com/food-waste-consultants/uae-food-waste/', sourceType: 'Consultancy', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 9, url: 'https://smartfoodsafe.com/food-safety-laws-in-uae/', sourceType: 'Consultancy', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 10, url: 'https://www.moccae.gov.ae/en/knowledge/food-safety', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 11, url: 'https://uaelegislation.gov.ae/en/legislations/1161', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 12, url: 'https://chambers.com/articles/consumer-protection-in-uae-laws-and-regulations-for-food-safety', sourceType: 'Legal', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 13, url: 'https://www.lexology.com/library/detail.aspx?g=f1891fa4-3fc5-4e24-b157-b0711816f11f', sourceType: 'Legal', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 14, url: 'https://www.moet.gov.ae/en/-/ministry-of-economy-new-law-on-combating-commercial-fraud-bolsters-uae-s-legislation-and-protects-consumers-in-line-with-best-global-standards', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 15, url: 'https://gulfnews.com/uae/health/uae-recalls-three-supplements-and-medical-product-over-safety-concerns-1.500454779', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 16, url: 'https://www.hdrinc.com/portfolio/bustanica-emirates-crop-one-vertical-farm', sourceType: 'Architecture/Engineering', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 17, url: 'https://www.hydroponicsfactory.com/blog/hydroponics-in-the-uae-revolutionizing-agriculture-for-better-growth.html', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 18, url: 'https://water.fanack.com/hydroponics-vertical-farming-mena/', sourceType: 'Research', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 19, url: 'https://www.hotelyearbook.com/article/122000227/uaes-local-produce-from-import-dependence-to-sustainable-agriculture', sourceType: 'Industry', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 20, url: 'https://agzia.com/blog/exploring-the-uncontested-success-of-dates-exports-future-opportunities-in-uae-and-ksa/', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 21, url: 'https://www.linkedin.com/pulse/uae-dates-market-expected-reach-usd-123-billion-2030-growing-khan-m1pnc', sourceType: 'Industry/LinkedIn', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 22, url: 'https://albarakahdatesfactory.com/', sourceType: 'Company', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 23, url: 'https://www.csis.org/analysis/salmon-fishing-uae-how-salmon-farming-fits-emirates-food-security-plans', sourceType: 'Think Tank', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 24, url: 'https://tradingeconomics.com/united-arab-emirates/food-inflation', sourceType: 'Economics Data', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 25, url: 'https://www.techsciresearch.com/report/uae-organic-food-market/5069.html', sourceType: 'Research', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 26, url: 'https://www.linkedin.com/pulse/united-arab-emirates-organic-food-market-regional-obhxc', sourceType: 'Industry/LinkedIn', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 27, url: 'https://globalorganictrade.com/country/united-arab-emirates', sourceType: 'Trade Data', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 28, url: 'https://www.isaaa.org/kc/cropbiotechupdate/article/default.asp?ID=18417', sourceType: 'Research', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 29, url: 'https://uaelegislation.gov.ae/en/legislations/1448', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 30, url: 'https://www.mondaq.com/life-sciences-biotechnology-nanotechnology/859926/genetically-modified-food-regulations-in-uae-and-overseas', sourceType: 'Legal', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 31, url: 'https://economymiddleeast.com/news/uaes-food-security-is-red-line-as-minister-al-marri-confirms-six-month-strategic-reserve-market-stability/', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 32, url: 'https://www.thehindu.com/news/international/uae-confirms-six-month-strategic-stockpile-of-essential-goods/article70728409.ece', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 33, url: 'https://u.ae/en/information-and-services/environment-and-energy/a-law-to-regulate-strategic-stock-of-food-commodities', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 34, url: 'https://bytebeam.co/blog/uae-food-labeling-requirements-2026', sourceType: 'Industry', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 35, url: 'https://moiat.gov.ae/en/programs/halal', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 36, url: 'https://trynibble.app/insights/uae-food-recall-tracker', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 37, url: 'https://www.sciencedirect.com/science/article/abs/pii/S136403212100321X', sourceType: 'Academic', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 38, url: 'https://greennetwork.asia/gna-knowledge-hub/how-plant-the-emirates-aims-to-support-food-self-sufficiency-in-the-uae/', sourceType: 'Industry', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 39, url: 'https://agsi.org/analysis/the-uaes-path-to-food-self-sufficiency/', sourceType: 'Research', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 40, url: 'https://gulfbusiness.com/en/2026/food-industry/onion-tomato-prices-rise-uae-authorities/', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 41, url: 'https://www.khaleejtimes.com/business/shipping-energy-disruptions-spike-food-prices-uae-stays-insulated', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 42, url: 'https://emiratesbiofarm.com/', sourceType: 'Company', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 43, url: 'https://tracxn.com/d/explore/agritech-startups-in-united-arab-emirates/__1CzGBYl0JIaz2flk6jpzwucnmWmqJI1_JHam0H-4_C4/companies', sourceType: 'Data/Research', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 44, url: 'https://assiyaq.com/uae-agritech-startup-aydi-secures-7-5m-seed-funding-to-scale-ai-powered-farming-platform/', sourceType: 'News', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 45, url: 'https://en.arageek.com/top-agritech-companies-startups-in-mena-region', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 46, url: 'https://u.ae/en/information-and-services/charity-and-humanitarian-work/UAE-Food-Bank', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 47, url: 'https://www.wam.ae/en/article/bid42ew-uae-food-banks-food-aid-initiatives-reached-289', sourceType: 'Government News', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 48, url: 'https://www.arabianbusiness.com/abnews/uae-food-bank-distributes-5000-meals-to-workers-in-a-single-day-effort', sourceType: 'News', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 49, url: 'https://tbhf.ae/humanitarian-aid-emergency-relief/', sourceType: 'Foundation', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 50, url: 'https://nuffoodsspectrum.asia/2026/04/03/uae-strengthens-food-security-infrastructure-with-focus-on-local-production-and-strategic-reserves.html', sourceType: 'Industry', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 51, url: 'https://www.ecomena.org/water-energy-nexus-uae/', sourceType: 'Research', credibility: 'MEDIUM-HIGH', uaeRelevance: 'Direct' },
    { number: 52, url: 'https://omegafarms.ae/about/', sourceType: 'Company', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 53, url: 'https://theethicalist.com/uae-hospitality-tackle-food-loss/', sourceType: 'News', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 54, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10905116/', sourceType: 'Academic', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 55, url: 'https://www.fas.usda.gov/data/opportunities-us-agricultural-exports-uae', sourceType: 'Government', credibility: 'VERY HIGH', uaeRelevance: 'Direct' },
    { number: 56, url: 'https://oec.world/en/profile/bilateral-product/foodstuffs/reporter/are', sourceType: 'Trade Data', credibility: 'HIGH', uaeRelevance: 'Direct' },
    { number: 57, url: 'https://gulftic.com/industries/halal', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 58, url: 'https://www.racs-me.com/service/halal-certification-and-uae-halal-national-mark/', sourceType: 'Certification', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 59, url: 'https://sigmalabels.com/what-are-the-food-label-requirements-in-the-uae/', sourceType: 'Industry', credibility: 'MEDIUM', uaeRelevance: 'Direct' },
    { number: 60, url: 'https://www.linkedin.com/pulse/how-uae-dealing-food-waste-ehfaaz-rclvf', sourceType: 'LinkedIn', credibility: 'MEDIUM', uaeRelevance: 'Direct' }
  ] as SourceURL[],
  blockedInaccessible: [
    { url: 'https://impact.economist.com/sustainability/project/food-security-index/explore-countries/united-arab-emirates', issue: '403' },
    { url: 'https://www.wired.me/story/how-the-uae-is-responding-to-higher-grocery-prices-as-hormuz-tensions-rise', issue: '403' },
    { url: 'https://food.chemlinked.com/foodpedia/united-arab-emirates-uae-food-regulation', issue: '403' },
    { url: 'https://edition.cnn.com/world/dubai-gigafarm-biggest-vertical-farm-climate-hnk-spc-int', issue: '403' },
    { url: 'https://www.reuters.com/world/middle-east/uae-recalls-some-nestle-infant-formula-products-state-news-agency-says-2026-01-07/', issue: 'Blocked' },
    { url: 'https://usuaebusiness.org/wp-content/uploads/2024/11/SectorUpdate_FoodReport_Web.pdf', issue: 'Binary' },
    { url: 'https://www.rvo.nl/files/file/2018/06/Water-energy-food-nexus-in-the-united-arab-emirates.pdf', issue: 'Binary PDF' },
    { url: 'https://smartfoodsafe.com/wp-content/uploads/2024/10/A-Guide-to-Food-Security-in-the-UAE.pdf', issue: 'Binary PDF' }
  ] as BlockedURL[]
}

// ============================================================================
// SECTION 20: SENTIMENT ANALYSIS
// ============================================================================

export interface SentimentByTheme {
  theme: string
  sentiment: string
  keyDrivers: string
}

export interface KeyQuote {
  quote: string
  speaker: string
  sentiment: string
}

export const sentimentAnalysis = {
  overallSentiment: 'MIXED (Cautiously Optimistic)' as const,
  sentimentByTheme: [
    { theme: 'Government Strategy', sentiment: 'POSITIVE', keyDrivers: 'Strong policy framework, 6-month reserves, GFSI #1 in MENA' },
    { theme: 'Import Dependency', sentiment: 'NEGATIVE', keyDrivers: '85-90% import rate creates vulnerability' },
    { theme: 'Agricultural Technology', sentiment: 'POSITIVE', keyDrivers: 'Vertical farming success, Bustanica, Pure Harvest' },
    { theme: 'Food Waste', sentiment: 'NEGATIVE', keyDrivers: '3.27M tonnes wasted, $3.5B cost' },
    { theme: 'Consumer Protection', sentiment: 'POSITIVE', keyDrivers: 'Active enforcement, 12,000+ inspections' },
    { theme: 'Price Inflation', sentiment: 'NEUTRAL', keyDrivers: 'Moderate inflation (1.02%), but spike risk during crises' },
    { theme: 'Aquaculture', sentiment: 'POSITIVE', keyDrivers: 'Strong investment ($350M+), production growing' },
    { theme: 'Date Industry', sentiment: 'VERY POSITIVE', keyDrivers: '4th globally, 40M trees, 97+ export countries' },
    { theme: 'Organic Market', sentiment: 'NEUTRAL-POSITIVE', keyDrivers: 'Growing but small ($44-132M)' },
    { theme: 'Humanitarian Aid', sentiment: 'VERY POSITIVE', keyDrivers: '28.9M people reached globally' }
  ] as SentimentByTheme[],
  keyQuotes: [
    { quote: 'The UAE is all about soft power.', speaker: 'Naser Alsayed, Chatham House', sentiment: 'NEUTRAL' },
    { quote: 'Give me agriculture, and I will give you civilization.', speaker: 'Sheikh Zayed bin Sultan Al Nahyan', sentiment: 'POSITIVE' },
    { quote: 'Agriculture is a wonderful diplomacy tool.', speaker: 'Martin Keulertz, American University of Beirut', sentiment: 'POSITIVE' },
    { quote: 'Food security is a red line.', speaker: 'Minister Abdullah bin Touq Al Marri', sentiment: 'POSITIVE' },
    { quote: 'We go to remote areas away from farmers, so they don\'t say that we have taken their food or land.', speaker: 'Ahmed al-Falasi, Jenaan', sentiment: 'NEUTRAL' },
    { quote: 'The smartest strategy of their plan is the focus on ports.', speaker: 'Zayed', sentiment: 'POSITIVE' }
  ] as KeyQuote[]
}

// ============================================================================
// SECTION 21: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface RelevanceByTheme {
  theme: string
  uaeRelevance: string
  justification: string
}

export interface DashboardKPI {
  kpi: string
  currentValue: string
  target: string
  trend: string
}

export const uaeRelevanceAssessment = {
  directRelevanceScore: 'VERY HIGH (10/10)' as const,
  relevanceByTheme: [
    { theme: 'Food Import Dependency', uaeRelevance: 'CRITICAL', justification: '85-90% of food imported; core vulnerability' },
    { theme: 'Strategic Reserves', uaeRelevance: 'CRITICAL', justification: '6-month reserves directly ensure stability' },
    { theme: 'Food Security Strategy', uaeRelevance: 'CRITICAL', justification: 'National priority under Vision 2051' },
    { theme: 'Vertical Farming', uaeRelevance: 'HIGH', justification: 'Addresses water scarcity, import dependency' },
    { theme: 'Date Industry', uaeRelevance: 'HIGH', justification: 'Major economic contributor, cultural significance' },
    { theme: 'Aquaculture', uaeRelevance: 'HIGH', justification: 'Reduces fish import dependency' },
    { theme: 'Food Safety', uaeRelevance: 'HIGH', justification: 'Protects public health' },
    { theme: 'Food Waste', uaeRelevance: 'HIGH', justification: 'Environmental and economic impact' },
    { theme: 'Food Inflation', uaeRelevance: 'HIGH', justification: 'Affects all residents' },
    { theme: 'Food Fraud', uaeRelevance: 'HIGH', justification: 'Consumer protection' },
    { theme: 'Organic Market', uaeRelevance: 'MEDIUM', justification: 'Growing but niche' },
    { theme: 'Food Labeling', uaeRelevance: 'HIGH', justification: 'Regulatory compliance for all food products' },
    { theme: 'Halal Certification', uaeRelevance: 'CRITICAL', justification: 'Required for Islamic market access' },
    { theme: 'Humanitarian Aid', uaeRelevance: 'MEDIUM', justification: 'International reputation' },
    { theme: 'Water-Food Nexus', uaeRelevance: 'CRITICAL', justification: 'Existential constraint on agriculture' },
    { theme: 'GMO Regulation', uaeRelevance: 'MEDIUM', justification: 'Health and trade implications' },
    { theme: 'Agri-Tech', uaeRelevance: 'HIGH', justification: 'Strategic diversification' }
  ] as RelevanceByTheme[],
  dashboardReadyKPIs: [
    { kpi: 'GFSI Global Rank', currentValue: '23rd', target: 'Top 10', trend: 'Improving' },
    { kpi: 'GFSI MENA Rank', currentValue: '1st', target: 'Maintain', trend: 'Stable' },
    { kpi: 'Food Import Dependency', currentValue: '85-90%', target: 'Reduce', trend: 'Reducing (vertical farming)' },
    { kpi: 'Self-Sufficiency Target', currentValue: '+5%/year', target: '50% by 2051', trend: 'On Track' },
    { kpi: 'Strategic Reserve', currentValue: '6 months', target: 'Maintain', trend: 'Stable' },
    { kpi: 'Water Use Reduction', currentValue: '-15%/year', target: 'Maintain', trend: 'On Track' },
    { kpi: 'Food Waste Reduction', currentValue: '50% by 2030', target: '-50% from baseline', trend: 'In Progress' },
    { kpi: 'AgriTech Startups', currentValue: '153', target: 'Grow', trend: 'Growing' }
  ] as DashboardKPI[]
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentCompleted: 'Yes (URL content extraction from 60+ sources)',
  factsDocumented: 500,
  sourceURLs: 60,
  dataTables: 21,
  caseStudies: 'Multiple (Food Fraud, Product Recalls, ne\'ma Initiative)'
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface FoodSecurityData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  // Section data
  executiveSummary: typeof executiveSummary
  keyStatistics: typeof keyStatistics
  foodImportDependency: typeof foodImportDependency
  strategicReserves: typeof strategicReserves
  foodSecurityStrategy: typeof foodSecurityStrategy
  agriculturalTechnology: typeof agriculturalTechnology
  dateIndustry: typeof dateIndustry
  aquaculture: typeof aquaculture
  foodSafety: typeof foodSafety
  foodWaste: typeof foodWaste
  foodPriceInflation: typeof foodPriceInflation
  foodFraud: typeof foodFraud
  organicFoodMarket: typeof organicFoodMarket
  foodLabeling: typeof foodLabeling
  halalCertification: typeof halalCertification
  humanitarianFoodAid: typeof humanitarianFoodAid
  waterFoodNexus: typeof waterFoodNexus
  gmoRegulation: typeof gmoRegulation
  agriTechStartups: typeof agriTechStartups
  sources: typeof sources
  sentimentAnalysis: typeof sentimentAnalysis
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  reportMetadata: typeof reportMetadata
}

export const foodSecurityData: FoodSecurityData = {
  id: 'topic-2-15',
  sector: 'policy',
  title: 'Food Security',
  titleAr: 'الأمن الغذائي',
  description: 'UAE Food Security & Agriculture - Comprehensive research on import dependency, strategic reserves, vertical farming, date industry, aquaculture, food safety, and regulatory framework',
  executiveSummary,
  keyStatistics,
  foodImportDependency,
  strategicReserves,
  foodSecurityStrategy,
  agriculturalTechnology,
  dateIndustry,
  aquaculture,
  foodSafety,
  foodWaste,
  foodPriceInflation,
  foodFraud,
  organicFoodMarket,
  foodLabeling,
  halalCertification,
  humanitarianFoodAid,
  waterFoodNexus,
  gmoRegulation,
  agriTechStartups,
  sources,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  reportMetadata
}

export default foodSecurityData