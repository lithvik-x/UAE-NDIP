// @ts-nocheck
/**
 * Corporate Data — UAE Dossier Intelligence Dashboard
 *
 * Complete extracted data from 1-7-corporate-entities-results.md
 * Execution Date: 2026-04-27 | Framework: 1.0 | Queries: 32+ | Pages: 15+
 *
 * UAE National Digital Intelligence Platform
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type SentimentType = 'HIGHLY_POSITIVE' | 'POSITIVE' | 'NEUTRAL' | 'MIXED' | 'NEGATIVE'
export type CriticalityType = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export interface LeadershipEntry {
  position: string
  name: string
  notes?: string
}

export interface KeyTransaction {
  year: string
  transaction: string
  value: string
  details?: string
}

export interface OperationalMetric {
  label: string
  value: string
  change?: string
  source?: string
}

export interface FinancialMetric {
  value: string
  change?: string
  changeType?: 'increase' | 'decrease' | 'neutral'
  period?: string
  source?: string
}

export interface DecarbonizationTarget {
  target: string
  metric: string
  timeline?: string
}

export interface Controversy {
  title: string
  year: string
  description: string
  impact: string
}

export interface RelevanceAssessment {
  criticality: CriticalityType
  rationale: string
  sentiment: SentimentType
  credibility: string
}

export interface Subsidiary {
  name: string
  focusArea: string
}

export interface GlobalOffice {
  city: string
  note?: string
}

export interface FleetInfo {
  aircraftType: string
  count: string
  notes?: string
}

export interface FinancialPerformance {
  entity: string
  revenue?: string
  profit?: string
  assets?: string
  margin?: string
  yoyGrowth?: string
}

export interface SOESummary {
  company: string
  type: string
  keyMetric: string
  value: string
}

export interface SectorPerformance {
  sector: string
  topPerformer: string
  keyGrowthDriver: string
}

export interface ControversySummary {
  company: string
  controversy: string
  impact: string
}

export interface LeadershipChange {
  company: string
  change: string
  date: string
}

export interface MajorAcquisition {
  acquirer: string
  target: string
  value: string
  year: string
}

export interface NationalCriticality {
  entity: string
  criticality: CriticalityType
  rationale: string
}

export interface SentimentAnalysisEntry {
  entity: string
  sentiment: SentimentType
  keyDriver: string
}

export interface InvestmentClimateIndicator {
  indicator: string
  status: string
  source: string
}

export interface EntityOverview {
  totalEntities: number
  totalQueriesExecuted: number
  totalPagesFetched: number
  totalSources: number
  totalFinancialDataPoints: number
  totalControversies: number
  executionDate: string
  frameworkVersion: string
}

export interface SummaryMetrics {
  totalRevenue: string
  totalAssets: string
  totalEmployees: string
  entitiesTracked: number
}

// ============================================================================
// ADNOC DATA
// ============================================================================

export const adnocData = {
  entityOverview: {
    fullName: 'Abu Dhabi National Oil Company',
    founded: '1971 by Zayed Bin Sultan Al Nahyan',
    headquarters: 'Abu Dhabi, UAE',
    ownership: '100% State-owned (UAE)',
    status: "World's 12th largest oil company by production",
  },
  leadership: [
    { position: 'Chairman', name: 'Mohamed bin Zayed Al Nahyan', notes: 'President of UAE' },
    { position: 'Director-General & CEO', name: 'Sultan Ahmed Al Jaber', notes: 'UAE Minister of Industry and Advanced Technology, Special Climate Envoy' },
  ] as LeadershipEntry[],
  financialData: [
    { label: 'Oil Production Capacity', value: '4 million bpd (2021), targeting 5 million bpd by 2030', source: 'Wikipedia' },
    { label: 'UAE Proven Oil Reserves', value: '105 billion barrels (6th largest globally)', source: 'Wikipedia' },
    { label: 'Employees', value: '207,356 (2015)', source: 'Wikipedia' },
    { label: 'Subsidiary Companies', value: '16', source: 'Wikipedia' },
  ] as OperationalMetric[],
  keyTransactions: [
    { year: '2019', transaction: 'BlackRock/KKR pipeline acquisition', value: '~$4 billion', details: '~40% of pipeline assets' },
    { year: '2019', transaction: 'Eni stake in refining', value: '$3 billion+', details: '20% in Abu Dhabi Oil Refining Company' },
    { year: '2019', transaction: 'GIC pipeline infrastructure', value: '$600 million', details: '6% stake' },
    { year: '2022', transaction: 'Austrian OMV stake', value: '24.9%', details: 'Strategic investment' },
    { year: '2023', transaction: 'OCI/Fertiglobe acquisition', value: '$3.62 billion', details: 'Agreed acquisition' },
    { year: '2024', transaction: 'Covestro acquisition', value: '€14.7B ($16.3B)', details: 'Largest Middle Eastern acquisition of European firm' },
    { year: '2025', transaction: 'Covestro completion', value: 'December 2025', details: 'Deal signed October 2024, completed December 2025' },
  ] as KeyTransaction[],
  drillingIPO: {
    ipoDate: 'October 2021',
    exchange: 'Abu Dhabi Securities Exchange',
    performance: 'Most successful IPO in Abu Dhabi history',
    debut: 'Jumped 30% on debut',
    adnocRetention: '95%',
  },
  decarbonization: [
    { target: 'Net Zero', metric: 'Operational emissions', timeline: '2045' },
    { target: 'Carbon Intensity Reduction', metric: '25%', timeline: '2030' },
    { target: 'Methane Emissions', metric: 'Near-zero', timeline: '2030' },
    { target: 'Carbon Capture Capacity', metric: '10 million tonnes per annum', timeline: '2030' },
    { target: 'Decarbonization Commitment', metric: '$23 billion total', timeline: '-' },
    { target: 'Decarbonization Projects', metric: '$15 billion earmarked', timeline: 'by 2030' },
  ] as DecarbonizationTarget[],
  notableProjects: [
    { name: 'Ghasha Mega-Project', description: "World's largest offshore sour gas development" },
  ],
  relevanceAssessment: {
    criticality: 'CRITICAL' as CriticalityType,
    rationale: 'Oil reserves, energy security',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (state-owned, official reporting)',
  },
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Abu_Dhabi_National_Oil_Company',
    'https://www.reuters.com (Covestro acquisition coverage)',
  ],
}

// ============================================================================
// MUBADALA INVESTMENT COMPANY DATA
// ============================================================================

export const mubadalaData = {
  entityOverview: {
    fullName: 'Mubadala Investment Company',
    type: 'State-owned sovereign wealth fund',
    established: 'January 2017 (merger of Mubadala Development Company and IPIC)',
    headquarters: 'Abu Dhabi, UAE',
    chairman: 'Mansour bin Zayed Al Nahyan',
    ceo: 'Khaldoon Khalifa Al Mubarak',
  },
  assetsUnderManagement: {
    aum2025: '$385 billion (AED 1.4 trillion)',
    change: '+17%',
    source: 'Mubadala official, April 2026',
    fiveYearReturns: '>10% annualized',
    tenYearReturns: '>10% annualized',
  },
  globalOffices: [
    { city: 'Abu Dhabi', note: 'HQ' },
    { city: 'London' },
    { city: 'Rio de Janeiro' },
    { city: 'New York' },
    { city: 'San Francisco' },
    { city: 'Beijing' },
  ] as GlobalOffice[],
  majorSubsidiaries: [
    { name: 'Abu Dhabi Investment Council', focusArea: 'Investment' },
    { name: 'Dolphin Energy', focusArea: 'Energy' },
    { name: 'Fortress Investment Group', focusArea: 'Private equity' },
    { name: 'GlobalFoundries', focusArea: 'Semiconductors' },
    { name: 'International Petroleum Investment Company', focusArea: 'Energy' },
    { name: 'Mamoura Diversified Global Holding', focusArea: 'Diversified holdings' },
    { name: 'Masdar', focusArea: 'Renewable energy' },
    { name: 'Nova Chemicals', focusArea: 'Chemicals' },
  ] as Subsidiary[],
  notableInvestments: [
    { company: 'Waymo', amount: '-', year: '-', details: "Alphabet's self-driving company" },
    { company: 'Reliance Jio Platforms', amount: '$752.1 million', year: '2020', details: '-' },
    { company: 'Telegram', amount: '$150 million', year: '2021', details: 'Pre-IPO convertible bonds' },
    { company: 'Telegram', amount: '$75 million', year: '2025', details: 'Additional issuance' },
    { company: 'Carlyle Group', amount: '7.5% share', year: '-', details: '-' },
    { company: 'AMD', amount: '-', year: '-', details: 'Previously held, sold 2019' },
    { company: 'Investcorp', amount: '20% stake', year: '2016', details: '-' },
    { company: 'Fortress Investment Group', amount: '$3 billion', year: '2023', details: '70% stake takeover' },
  ] as KeyTransaction[],
  globalFoundriesInvestment: {
    totalInvestment: '$22.4 billion+',
    created: '2009 with AMD',
    amdDivested: '2012',
    aticMubadalaBecame: '100% owner',
  },
  technologyAndEnergyFocus: [
    'Mubadala Technology (formerly ATIC): Owns GlobalFoundries (world\'s first global semiconductor foundry)',
    'Mubadala Energy (formerly Mubadala Petroleum): Operations across 11 markets',
    'Expansion Plans: LNG, blue hydrogen, carbon capture',
  ],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Sovereign wealth, diversification',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (official announcements, sovereign fund)',
  },
  sourceUrls: [
    'https://www.mubadala.com/en/news/strong-performance-by-uae-portfolio-drives-mubadalas-growth-in-2025',
    'https://www.reuters.com/world/middle-east/abu-dhabi-wealth-fund-mubadalas-assets-jump-17-2025-385-billion-2026-04-09/',
    'https://en.wikipedia.org/wiki/Mubadala_Investment_Company',
  ],
}

// ============================================================================
// ADIA DATA
// ============================================================================

export const adiaData = {
  entityOverview: {
    fullName: 'Abu Dhabi Investment Authority',
    founded: 'March 21, 1976',
    type: 'Sovereign wealth fund',
    ownership: 'Emirate of Abu Dhabi',
    aum: '$1.057 trillion (estimated)',
    purpose: 'Manages excess oil reserves for Abu Dhabi',
  },
  leadership: [
    { position: 'Chairman', name: 'Tahnoun bin Zayed Al Nahyan' },
    { position: 'Managing Director', name: 'Hamed bin Zayed Al Nahyan' },
  ] as LeadershipEntry[],
  investmentStrategy: [
    'Asset Classes: Equities, fixed income, treasury, infrastructure, real estate, private equity',
    'Alternative Investments: Hedge funds, commodity trading advisers',
    'External Management: 70-80% of assets managed externally through third-party fund managers',
    'Membership: International Forum of Sovereign Wealth Funds',
    'Santiago Principles: Co-chaired International Working Group that produced principles in 2008',
  ],
  notableInvestments: [
    { company: 'Citigroup', amount: '$7 billion', year: '2008', details: 'Major investment during financial crisis' },
    { company: 'Jio Platforms', amount: '$752.1 million', year: '2020', details: '-' },
    { company: 'Reliance Retail', amount: '>$1.3 billion', year: '-', details: 'Total investment' },
    { company: 'Lenskart', amount: '$500 million', year: '2023', details: '-' },
    { company: 'Fisher Investments', amount: '$3 billion', year: '2024-2025', details: '-' },
    { company: 'DigitalBridge', amount: '40% stake', year: '2024', details: '-' },
    { company: 'Queensland Motorways', amount: '-', year: '-', details: 'Via Tawreed Investments' },
    { company: 'TransGrid', amount: '-', year: '-', details: 'Australian infrastructure' },
    { company: 'WestConnex', amount: '-', year: '-', details: 'Australian infrastructure' },
  ] as KeyTransaction[],
  operationalCharacteristics: [
    'Known for secretive and opaque operations',
    "One of the world's largest and most influential sovereign wealth funds",
  ],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Global investments',
    sentiment: 'NEUTRAL' as SentimentType,
    credibility: 'Very High (sovereign backing)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Abu_Dhabi_Investment_Authority'],
}

// ============================================================================
// DP WORLD DATA
// ============================================================================

export const dpWorldData = {
  entityOverview: {
    fullName: 'DP World',
    founded: '2005 (merger of Dubai Ports Authority and Dubai Ports International)',
    headquarters: 'Dubai, UAE',
    type: 'Emirati multinational logistics company',
    globalPresence: '82 marine/inland terminals across 40+ countries',
  },
  operationsScale: [
    { label: 'Containers Handled', value: '70 million annually', source: 'Wikipedia' },
    { label: 'Global Traffic Share', value: '10% of global container traffic', source: 'Wikipedia' },
    { label: 'Vessels Serviced', value: '70,000 annually', source: 'Wikipedia' },
    { label: 'Employees', value: '101,440', source: 'Wikipedia' },
    { label: 'Total Throughput (2025)', value: '93.4 million TEU (+5.8%)', source: 'DP World official' },
    { label: 'Port Capacity', value: '109 million TEU', source: 'DP World official' },
  ] as OperationalMetric[],
  financialPerformance2025: [
    { label: 'Revenue', value: '$24.4 billion', change: '+22% YoY', source: 'DP World official' },
    { label: 'Adjusted EBITDA', value: '$6.4 billion', change: '+18%, margin 26.3%', source: 'DP World official' },
    { label: 'Net Profits', value: '$1.96 billion', change: '+32.2%', source: 'DP World official' },
    { label: 'Operating Cash Flow', value: '$6.3 billion', change: '+14%', source: 'DP World official' },
    { label: 'ROCE', value: '9.9%', change: 'up from 8.9%', source: 'DP World official' },
    { label: 'Capex 2025', value: '$3.1 billion', change: 'up from $2.2B', source: 'DP World official' },
    { label: 'Capex 2026 Budget', value: '~$3 billion', change: '-', source: 'DP World official' },
  ] as OperationalMetric[],
  leadership: [
    { position: 'Group CEO', name: 'Yuvraj Narayan', notes: 'Current' },
    { position: 'Chairman', name: 'Essa Kazim', notes: 'Current' },
    { position: 'Former Chairman', name: 'Sultan Ahmed bin Sulayem', notes: '2007-2026, resigned Feb 2026' },
  ] as LeadershipEntry[],
  controversies: [
    {
      title: '2006 US Port Security Controversy',
      year: '2006',
      description: 'Acquired P&O ports including facilities in New York, New Jersey, Philadelphia, Baltimore, New Orleans, Miami. Faced Congressional opposition. President Bush threatened veto. DP World ultimately sold US port operations to American International Group.',
      impact: 'US political opposition, presidential veto threat',
    },
    {
      title: '2022 UK Mass Redundancy (P&O Ferries)',
      year: '2022',
      description: 'March 17, 2022: Dismissed 800 British workers via video call. No union consultation. UK minister called it "modern equivalent of the gulag". Widely condemned.',
      impact: 'UK labor scandal',
    },
    {
      title: '2023 Australia Cyberattack',
      year: '2023',
      description: 'November 2023: Cyberattack paralyzed Australian imports/exports. 30,000-container backlog. Data stolen from current and former employees. Handles 40% of Australia\'s trade.',
      impact: 'Trade disruption',
    },
    {
      title: 'Jeffrey Epstein Controversy (2026)',
      year: '2026',
      description: 'Sultan Ahmed bin Sulayem resigned February 2026. Files showed hundreds of emails with Epstein. Two firms suspended deals with DP World. International media coverage.',
      impact: 'Leadership crisis',
    },
    {
      title: 'Russo-Ukrainian War',
      year: '2022-2026',
      description: 'Criticized for continuing Russia operations. Listed among "International Sponsors of War" by Ukraine.',
      impact: 'Reputational damage, international criticism',
    },
  ] as Controversy[],
  strategicDevelopments: [
    {
      title: 'London Gateway Expansion',
      details: '£1 billion expansion announced October 2024, £1.3 billion total plan. Construction began March 2025. Will become UK\'s largest container port. 2025: Record 3 million TEUs handled (+52% from 1.9M in 2024).',
    },
    {
      title: 'Djibouti Dispute',
      details: 'Long-running 50-year concession dispute for Doraleh Container Terminal. February 2018: Djibouti unilaterally terminated concession. London Court of International Arbitration ruled concession still valid. January 2026: Djibouti gains upper hand after arbitration setback.',
    },
  ],
  sustainability: [
    { metric: 'Scope 1 & 2 Emissions Reduction', value: '14% vs 2022 baseline' },
    { metric: 'Renewable Energy', value: '~67% of global electricity' },
  ],
  strategicFocus2026: ['Jebel Ali', 'Drydocks World', 'Tuna Tekra (India)', 'London Gateway (UK)', 'Ndayane (Senegal)', 'Jeddah (Saudi Arabia)'],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Trade/logistics hub',
    sentiment: 'MIXED' as SentimentType,
    credibility: 'High (public company with audited results)',
  },
  sourceUrls: [
    'https://www.dpworld.com/en/news/dp-world-reports-record-244-bn-revenue-and-64bn-ebitda-for-2025-2',
    'https://www.dpworld.com/en/investors/annual-report-2025',
    'https://en.wikipedia.org/wiki/DP_World',
  ],
}

// ============================================================================
// EMIRATES AIRLINE DATA
// ============================================================================

export const emiratesData = {
  entityOverview: {
    fullName: 'Emirates Airline',
    founded: 'March 15, 1985',
    headquarters: 'Al Garhoud, Dubai',
    ownership: 'Subsidiary of The Emirates Group, owned by Investment Corporation of Dubai',
    hub: 'Dubai International Airport Terminal 3',
    iataCode: 'EK',
  },
  fleetInformation: [
    { aircraftType: 'Airbus A380', count: '116', notes: "World's largest operator" },
    { aircraftType: 'Boeing 777', count: '133', notes: "World's largest operator" },
    { aircraftType: 'Total Passenger Aircraft', count: '261', notes: '-' },
    { aircraftType: 'Cargo Aircraft', count: '13', notes: '-' },
    { aircraftType: 'Order Book', count: '314 aircraft', notes: '61 A350s, 205 777Xs, 35 787s, 13 777Fs' },
    { aircraftType: 'Average Fleet Age', count: '10.7 years', notes: '-' },
  ] as FleetInfo[],
  networkOperations: [
    { label: 'Weekly Flights', value: '3,600+' },
    { label: 'Destinations', value: '148 cities in 80 countries' },
    { label: 'Codeshare Partners', value: '33' },
    { label: 'Interline Partners', value: '118' },
  ] as OperationalMetric[],
  financialPerformance: {
    airline: {
      profitBeforeTax: 'AED 21.2B ($5.8B)',
      revenue: 'AED 127.9B ($34.9B)',
      profitAfterTax: 'AED 19.1B ($5.2B)',
      profitMargin: '14.9%',
      cashAssets: 'AED 49.7B ($13.5B)',
      operatingCashFlow: 'AED 40.8B ($11.1B)',
      fuelCosts: 'AED 32.6B ($8.9B)',
      fuelCostsPercent: '31% of operating costs',
    },
    group: {
      profitBeforeTax: 'AED 22.7B ($6.2B)',
      groupRevenue: 'AED 145.4B ($39.6B)',
      ebitda: 'AED 42.2B ($11.5B)',
      groupCashAssets: 'AED 53.4B ($14.6B)',
      profitAfterTax: 'AED 20.5B ($5.6B)',
      dividend: 'AED 6.0B ($1.6B)',
      investment: 'AED 14.0B ($3.8B)',
      workforce: '121,223 employees',
    },
  },
  operationalMetrics: [
    { label: 'Passengers', value: '53.7 million', change: '+3%' },
    { label: 'Seat Factor', value: '78.9%', change: '-' },
    { label: 'Cargo Carried', value: '2.3 million tonnes', change: '+7%' },
    { label: 'Cargo Yield', value: '+10% per FTKM', change: '-' },
  ] as OperationalMetric[],
  skyCargo: {
    revenue: 'AED 16.1 billion ($4.4 billion) (13% of total)',
    cargoCarried: '2.3 million tonnes (+7%)',
    freighterFleet: '10 Boeing 777Fs',
  },
  aircraftOrders: [
    { event: '2023 Dubai Airshow', orderDetails: '90 Boeing 777X', value: '$52 billion' },
    { event: '2023 Dubai Airshow', orderDetails: '15 Airbus A350-900s', value: '-' },
    { event: '2025 Dubai Airshow', orderDetails: '65 more Boeing 777-9', value: '$38 billion' },
    { event: 'Total 777X orders', orderDetails: '270 jets', value: "Largest 777X customer" },
  ],
  retrofitProgramme: {
    aircraft: '219',
    investment: '$5.0 billion',
  },
  dnataPerformance: [
    { label: 'Profit before tax', value: 'AED 1.6B ($430M)', change: '+2%' },
    { label: 'Revenue', value: 'AED 21.1B ($5.8B)', change: '+10%' },
    { label: 'International revenue share', value: '75%', change: '-' },
    { label: 'Aircraft turns handled', value: '794,091', change: '+2%' },
    { label: 'Cargo handled', value: '3.1 million tonnes', change: '+9%' },
    { label: 'Meals uplifted', value: '114.0 million', change: '-' },
  ] as OperationalMetric[],
  safetyIncident: {
    title: 'Flight EK521 (August 3, 2016)',
    description: 'Boeing 777-300 crashed during landing from Thiruvananthapuram to Dubai. All 282 passengers and 18 crew evacuated safely. Investigation found wind shear during landing.',
  },
  subsidyControversy: {
    description: 'Emirates publicly states opposition to state aid. European/Australian carriers claimed unfair labor advantages. Air France, Qantas, British Airways, Lufthansa expressed concerns. American Airlines, Delta, United made similar claims in 2016.',
  },
  relevanceAssessment: {
    criticality: 'CRITICAL' as CriticalityType,
    rationale: 'Flagship carrier, global brand ambassador',
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'Very High (official reports, public company)',
  },
  sourceUrls: [
    'https://www.emirates.com/media-centre/emirates-group-achieves-record-profit-of-aed-227-bn-us-62-bn-in-2024-25/',
    'https://www.emirates.com/media-centre/annual-report-2024-25/',
    'https://c.ekstatic.net/ecl/documents/annual-report/2024-2025.pdf',
    'https://en.wikipedia.org/wiki/Emirates_(airline)',
  ],
}

// ============================================================================
// ETIHAD AIRWAYS DATA
// ============================================================================

export const etihadData = {
  entityOverview: {
    fullName: 'Etihad Airways',
    founded: 'July 11, 2003',
    commencedOperations: 'November 5, 2003',
    headquarters: 'Khalifa City, Abu Dhabi',
    hub: 'Zayed International Airport',
    iataCode: 'EY',
    icaoCode: 'ETD',
    parent: 'Etihad Aviation Group',
  },
  financialPerformance2025: [
    { label: 'Profit after tax', value: 'AED 2.6B ($698M)', change: '+47% YoY' },
    { label: 'EBITDA', value: 'AED 6.3B ($1.7B)', change: '+37%' },
    { label: 'Profit margin', value: '8.4%', change: '2x global average (3.9%)' },
    { label: 'Total revenue', value: 'AED 30.7B ($8.4B)', change: '+21%' },
    { label: 'Passenger revenue', value: 'AED 25.8B ($7.0B)', change: '+24%' },
    { label: 'Cargo revenue', value: 'AED 4.5B ($1.2B)', change: '+8%' },
  ] as OperationalMetric[],
  profitabilityTimeline: [
    { year: '2011', profitLoss: 'Profitable', notes: '-' },
    { year: '2016', profitLoss: '($1.873B)', notes: 'Loss' },
    { year: '2017', profitLoss: '($1.523B)', notes: 'Loss' },
    { year: '2018', profitLoss: '($1.28B)', notes: 'Loss' },
    { year: '2019', profitLoss: '($870M)', notes: 'Loss' },
    { year: '2020', profitLoss: '($1.7B)', notes: 'Loss' },
    { year: '2021', profitLoss: '($476M)', notes: 'Loss' },
    { year: '2022', profitLoss: '$25M', notes: 'Return to profit' },
    { year: '2023', profitLoss: '$143M', notes: 'Profit' },
    { year: '2024', profitLoss: '$476M', notes: 'Profit' },
    { year: '2025', profitLoss: '$698M', notes: 'Record' },
  ],
  operationalMetrics2025: [
    { label: 'Passengers', value: '22.4 million', change: '+21%' },
    { label: 'Load factor', value: '88.3%', change: '+2pp' },
    { label: 'ASK', value: '111.5 billion seat kilometres', change: '-' },
    { label: 'Cargo volumes', value: '>700,000 leg tonnes', change: '-' },
    { label: 'Operating fleet', value: '127 aircraft', change: 'Added 29' },
    { label: 'Destinations', value: '110', change: 'up from 94' },
    { label: 'Landings', value: '>105,000', change: 'up from 90,000' },
  ] as OperationalMetric[],
  newRoutes2025: ['Atlanta', 'Prague', 'Warsaw', 'Addis Ababa', 'Phnom Penh', 'Hanoi', 'Hong Kong'],
  leadership: [
    { position: 'Chairman', name: 'Mohamed Ali Al Shorafa' },
    { position: 'CEO', name: 'Antonoaldo Neves', notes: 'Appointed after ADQ takeover October 2022' },
    { position: 'Former CEO (2006-2018)', name: 'James Hogan' },
    { position: 'Former CEO (until Oct 2022)', name: 'Tony Douglas' },
  ] as LeadershipEntry[],
  ownershipHistory: 'Transferred to Abu Dhabi wealth fund ADQ in October 2022. Subsidiary: Air Arabia Abu Dhabi (51% ownership).',
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: "Abu Dhabi's flag carrier",
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'High (official announcements)',
  },
  sourceUrls: [
    'https://aviationsourcenews.com/etihad-airways-delivers-record-us698-million-profit-in-2025/',
    'https://www.tradingview.com/news/reuters.com,2026-02-24:newsml_Zaw7PmkYJ:0-zawya-pressr-etihad-airways-delivers-record-aed-2-6bln-698mln-profit-in-2025-marking-strongest-performance-in-the-airline-s-history/',
    'https://en.wikipedia.org/wiki/Etihad_Airways',
  ],
}

// ============================================================================
// FIRST ABU DHABI BANK (FAB) DATA
// ============================================================================

export const fabData = {
  entityOverview: {
    fullName: 'First Abu Dhabi Bank',
    type: 'Largest financial institution in UAE',
    formed: 'April 2017 (merger of First Gulf Bank and National Bank of Abu Dhabi)',
    headquarters: 'Khalifa Business Park, Abu Dhabi',
    globalPresence: 'Across 5 continents',
    owner: 'Abu Dhabi Investment Council (33.3%)',
  },
  leadership: [
    { position: 'Group CEO', name: 'Hana Al Rostamani', notes: 'January 2021' },
    { position: 'Chairman', name: 'Sheikh Tahnoun bin Zayed Al Nahyan' },
  ] as LeadershipEntry[],
  financialPerformance2024: [
    { label: 'Total Assets', value: 'AED 1.21 trillion ($330B)' },
    { label: 'Market Capitalization', value: 'AED 152B ($41.3B)' },
    { label: 'UAE Market Share', value: '27%' },
    { label: 'Group Revenue', value: 'AED 31.6B', change: '+15%' },
    { label: 'Group Net Profit', value: 'AED 17.1B', change: '+4%' },
    { label: 'Profit Before Tax', value: 'AED 19.9B', change: '+13%' },
    { label: 'Return on Tangible Equity', value: '16.8%' },
  ] as OperationalMetric[],
  historicalFinancials: [
    { year: '2019', netProfit: 'AED 12.5B' },
    { year: '2020', netProfit: 'AED 10.6B' },
    { year: '2021', netProfit: '$3.4B (+19%)' },
    { year: '2022', netProfit: 'AED 13.4B (highest ever)' },
  ],
  revenueByBusinessLine: [
    { businessLine: 'Investment Banking', revenue: 'AED 10.9B', change: '+19%' },
    { businessLine: 'Global Markets', revenue: 'AED 7.4B', change: '+18%' },
    { businessLine: 'Corporate & Commercial Banking', revenue: 'AED 7.2B', change: '+5%' },
    { businessLine: 'Consumer Banking', revenue: 'AED 4.5B', change: '+18%' },
    { businessLine: 'Private Banking', revenue: 'AED 1.3B', change: '+15%' },
  ],
  internationalOperations: [
    { label: 'International Revenue', value: 'AED 7.2B', change: '+32%' },
    { label: 'Revenue Contribution', value: '23% of Group', change: 'up from 20%' },
    { label: 'International Loans', value: 'AED 110B', change: '+14.5%' },
    { label: 'International Deposits', value: 'AED 172B', change: '+15%' },
  ] as OperationalMetric[],
  regionalRevenueGrowth: [
    { region: 'Middle East & Africa', growth: '+37.6%' },
    { region: 'Asia', growth: '+31.7%' },
    { region: 'Europe & Americas', growth: '+14.1%' },
  ],
  shareholderReturns: [
    { label: 'Cumulative Dividend Payout (2021-2024)', value: 'AED 27.2B ($7.4B)' },
    { label: 'Average Dividend Payout', value: '47%' },
    { label: 'Cash Dividend Per Share (2024)', value: '75 fils' },
  ],
  creditRatings: [
    { agency: "Moody's", rating: 'Aa3', outlook: 'Stable' },
    { agency: 'Fitch', rating: 'AA-', outlook: 'Stable' },
    { agency: 'S&P', rating: 'AA-', outlook: 'Stable' },
  ],
  sustainability: [
    { label: 'Sustainable Finance Target', value: 'AED 500B ($136B)', target: 'by 2030' },
    { label: 'Sustainable Financing Facilitated (2024)', value: 'AED 140B', change: '+51%' },
    { label: 'Green Bonds and Sukuk Issued', value: 'AED 15B' },
  ] as OperationalMetric[],
  operationalScale: [
    { label: 'Employees', value: '7,500+ from 95 nationalities' },
    { label: 'Customers', value: '4+ million (including Ratibi)' },
    { label: 'UAE Branches', value: '63 conventional, 8 Islamic, 15 digital' },
    { label: 'ATMs/CDMs', value: '397' },
  ] as OperationalMetric[],
  recentDevelopments: [
    { date: '2019', development: 'Saudi Arabia operations began' },
    { date: 'August 2025', development: 'London office relocated to 20 Berkeley Square Mayfair' },
    { date: 'December 2025', development: 'Partnership with Amundi' },
    { date: 'January 2026', development: 'Partnership with T. Rowe Price' },
  ],
  relevanceAssessment: {
    criticality: 'CRITICAL' as CriticalityType,
    rationale: 'Largest UAE bank, financial stability',
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'Very High (public company, official reports)',
  },
  sourceUrls: [
    'https://en.wikipedia.org/wiki/First_Abu_Dhabi_Bank',
    'FAB Annual Report 2024',
  ],
}

// ============================================================================
// EMIRATES NBD DATA
// ============================================================================

export const emiratesNbdData = {
  entityOverview: {
    fullName: 'Emirates NBD',
    type: 'State-owned bank of Dubai government',
    status: 'Largest banking group in Middle East by assets',
    exchange: 'Dubai Financial Market',
    parent: 'Investment Corporation of Dubai',
  },
  leadership: [
    { position: 'Chairman', name: 'Ahmed bin Saeed Al Maktoum' },
  ] as LeadershipEntry[],
  history: [
    { year: '1963', event: 'Founded as National Bank of Dubai' },
    { year: '2007', event: 'Merged with Emirates Bank International' },
    { year: 'October 2007', event: 'Listed on DFM' },
    { year: 'December 2012', event: 'Acquired Dubai Bank' },
    { year: 'July 2019', event: 'Purchased Denizbank from Russia\'s Sberbank for $2.8 billion' },
  ],
  financialPerformance: [
    { label: '2022 Revenue', value: 'AED 32.51B ($8.86B)' },
    { label: '2022 Total Assets', value: 'AED 741.96B ($202.17B)' },
    { label: 'June 2025 Assets', value: 'AED 1.086 trillion ($295.7B)' },
    { label: 'Brand Value', value: '$4.54 billion' },
    { label: 'FY 2025 Profit before tax', value: 'AED 29.8B (record)' },
    { label: 'Q3 2025 Profit', value: 'AED 6.4B', change: '+23% YoY' },
    { label: 'YTD Q3 2025 Profit', value: 'AED 19.0B' },
    { label: 'H1 2025 Income', value: 'AED 23.9B', change: '+12%' },
    { label: 'Group EPS', value: 'AED 3.71', change: '2024: AED 3.56' },
  ] as OperationalMetric[],
  operationalScale: [
    { label: 'Countries', value: '13 across MENAT region' },
    { label: 'Customers', value: '9+ million' },
    { label: 'Branches', value: '826' },
    { label: 'ATMs/SDMs', value: '4,555' },
    { label: 'Employees', value: '30,000+ from 90+ nationalities' },
    { label: 'Digital Transactions', value: '97%' },
  ] as OperationalMetric[],
  globalPresence: 'UAE, Egypt, India, Turkey, Saudi Arabia, Singapore, UK, Austria, Germany, Russia, Bahrain',
  digitalBanking: 'Liv digital bank: ~500,000 users',
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Largest Middle East banking group',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (public company, official results)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Emirates_NBD'],
}

// ============================================================================
// ABU DHABI COMMERCIAL BANK (ADCB) DATA
// ============================================================================

export const adcbData = {
  entityOverview: {
    fullName: 'Abu Dhabi Commercial Bank',
    type: 'Public shareholding company',
    headquarters: 'Abu Dhabi',
    established: '1985 (mergers of Emirates Commercial Bank, Federal Commercial Bank, Khaleej Commercial Bank)',
    ownership: 'Government of Abu Dhabi (62.52%-65%) via Abu Dhabi Investment Council',
    rank: 'Third-largest bank in UAE by balance sheet',
  },
  financialPerformance: [
    { label: 'Total Assets', value: 'AED 148B' },
    { label: 'Combined entity assets', value: 'Dh420B', note: 'post-merger' },
    { label: 'Q1 2026 Profit before tax', value: 'AED 3.781B ($1.03B)', change: '+30% YoY' },
    { label: 'Q1 2026 Net profit', value: 'AED 3.36B ($910M)' },
    { label: 'Return on average equity', value: '16.3%' },
    { label: 'Operating income', value: 'AED 5.93B', change: '+18%' },
  ] as OperationalMetric[],
  operationalScale: [
    { label: 'Branches', value: '56 across UAE' },
    { label: 'Jersey branch', value: 'Until October 2020' },
    { label: 'Employees', value: '>5,000' },
    { label: 'Customers', value: '~1 million' },
  ] as OperationalMetric[],
  services: 'Retail, commercial, investment, merchant banking, brokerage, fund management',
  leadership: [
    { position: 'CEO', name: 'Eldar Sarkamov', notes: '2024' },
  ] as LeadershipEntry[],
  january2019Merger: {
    mergedEntities: 'Union National Bank and Al Hilal Bank',
    result: 'ADCB Group',
    rank: 'Fifth-largest bank in region',
    islamicBanking: 'Al Hilal Bank continues as standalone entity',
  },
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Third-largest UAE bank, major Abu Dhabi player',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'High (public company)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Abu_Dhabi_Commercial_Bank'],
}

// ============================================================================
// DUBAI ISLAMIC BANK (DIB) DATA
// ============================================================================

export const dibData = {
  entityOverview: {
    fullName: 'Dubai Islamic Bank P.J.S.C.',
    ticker: 'DIB (Dubai Financial Market)',
    industry: 'Islamic banking and finance',
    founded: 'September 15, 1975',
    headquarters: 'Dubai',
    founder: 'Saeed bin Ahmed Lootah',
  },
  leadership: [
    { position: 'Chairman', name: 'Mohammed Ibrahim Al Shaibani' },
    { position: 'Group CEO', name: 'Adnan Chilwan' },
  ] as LeadershipEntry[],
  financialPerformance2024: [
    { label: 'Revenue', value: '$6.3 billion' },
    { label: 'Total Assets', value: '$94 billion' },
    { label: 'Employees', value: '~10,000' },
  ] as OperationalMetric[],
  operationalScale: [
    { label: 'Branches', value: '90+' },
    { label: 'Customers', value: '1.7 million' },
    { label: 'Status', value: "World's first full-service Islamic bank" },
    { label: 'Rank', value: 'Largest Islamic bank in UAE by assets' },
  ] as OperationalMetric[],
  services: 'Retail, corporate, SME, trade finance, treasury, investment banking',
  subsidiariesAssociates: [
    { entity: 'Dar Al Shira', type: 'Sharia advisory' },
    { entity: 'Dubai Islamic Bank Pakistan', type: 'Wholly owned (2006)' },
    { entity: 'Panin Dubai Syariah Bank', type: 'Indonesia (minority)' },
    { entity: 'Bank of Khartoum', type: 'Sudan (strategic)' },
    { entity: 'Deyaar Development', type: 'UAE real estate' },
    { entity: 'Bosna Bank International', type: 'Bosnia' },
    { entity: 'DIB Bank Kenya Limited', type: 'Kenya' },
  ],
  notableLegalMatter: {
    description: 'Principal complainant in Ryan Cornelius fraud case. Cornelius convicted 2010, sentenced 10 years. Reported liabilities exceeding $400 million.',
  },
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Pioneer of Islamic banking globally',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'High (public company)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Dubai_Islamic_Bank'],
}

// ============================================================================
// ETISALAT UAE / e& DATA
// ============================================================================

export const etisalatData = {
  entityOverview: {
    fullName: 'e& (formerly Etisalat UAE)',
    type: 'Global technology group',
    operatingSince: '1976',
    operations: '38 countries',
    presence: 'Middle East, Asia, Africa, Central and Eastern Europe',
    ipoDate: 'June 23, 2002 (ADX)',
    headquarters: 'Abu Dhabi',
  },
  leadership: [
    { position: 'CEO', name: 'Masood M. Sharif Mahmood' },
  ] as LeadershipEntry[],
  keyBrands: [
    { brand: 'e& UAE', focus: 'Domestic operations (etisalat.ae)' },
    { brand: 'e& international', focus: 'International operations' },
    { brand: 'e& enterprise', focus: 'Enterprise solutions' },
    { brand: 'e& life', focus: 'Apps and products' },
    { brand: 'e& capital', focus: 'Investment arm' },
  ],
  services: 'Postpaid mobile plans, Internet & TV (eLife plans), Prepaid mobile services, Quickpay & Recharge',
  relevanceAssessment: {
    criticality: 'CRITICAL' as CriticalityType,
    rationale: "UAE's largest telecom operator",
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (state-backed, public company)',
  },
  sourceUrls: ['https://www.etisalat.ae'],
}

// ============================================================================
// DU UAE DATA
// ============================================================================

export const duData = {
  entityOverview: {
    fullName: 'Emirates Integrated Telecommunications Company P.J.S.C.',
    tradeName: 'du',
    founded: 'May 2005',
    headquarters: 'Dubai Hills Business Park, Dubai',
    stock: 'DFM: du',
  },
  leadership: [
    { position: 'Chairman', name: 'Malek Sultan Al Malek' },
    { position: 'CEO', name: 'Fahad Al Hassawi', notes: 'appointed June 2021' },
    { position: 'Former CEO', name: 'Osman Sultan', notes: '2006-2019' },
  ] as LeadershipEntry[],
  financialPerformance2025: [
    { label: 'Revenue', value: 'AED 15.9 billion' },
    { label: 'Net Income', value: 'AED 2.49 billion' },
    { label: 'Employees', value: '2,756 (2024)' },
  ] as OperationalMetric[],
  ownershipStructure: [
    { shareholder: 'Emirates Investment Authority', stake: '50.12%' },
    { shareholder: 'Mamoura Diversified Global Holding', stake: '10.06%' },
    { shareholder: 'Emirates Communications & Technology Company', stake: '19.7%' },
    { shareholder: 'Public Shareholders', stake: '20.12%' },
  ],
  customerBase2023: [
    { label: 'Mobile subscribers', value: '8 million' },
    { label: 'Broadband customers', value: '559,000' },
  ] as OperationalMetric[],
  networkCapabilities: {
    description: '2G, 3G, 4G LTE, 5G services',
    notes: '5G launched June 2019 (first in UAE). First MENA mmWave 5G deployment (2020).',
  },
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: "UAE's second telecom operator, 5G leader",
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'High (public company)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Du_(company)'],
}

// ============================================================================
// EMAAR PROPERTIES DATA
// ============================================================================

export const emaarData = {
  entityOverview: {
    fullName: 'Emaar Properties',
    founded: '1997',
    founder: 'Mohamed Alabbar',
    headquarters: 'Dubai',
    exchange: 'Dubai Financial Market (ticker: EMAAR)',
    keyShareholders: 'Mohammed bin Rashid Al Maktoum (Dubai ruler), Investment Corporation of Dubai',
  },
  financialHighlights: [
    { label: 'Revenue', value: '$8.5 billion' },
    { label: 'Valuation', value: '$16.8 billion', date: 'August 2023' },
    { label: 'Net Asset Valuation', value: '$37.6 billion', date: 'December 2022' },
    { label: 'Total Assets', value: '112.75 billion AED', date: '2017' },
    { label: 'Employees', value: '6,600' },
  ] as OperationalMetric[],
  leadership: [
    { position: 'Chairman', name: 'Jamal Bin Theniyah' },
    { position: 'Vice Chairman', name: 'Ahmed Jawa' },
    { position: 'CEO', name: 'Amit Jain' },
    { position: 'Founder', name: 'Mohamed Alabbar' },
  ] as LeadershipEntry[],
  majorProjects: [
    { project: 'Burj Khalifa', details: "World's tallest building (828m, 160 floors)", status: 'Completed' },
    { project: 'The Dubai Mall', details: "World's largest shopping mall (80M+ visitors in 2014)", status: 'Completed' },
    { project: 'Dubai Fountain', details: "World's tallest performing fountain", status: 'Completed' },
    { project: 'Downtown Dubai', details: 'Mixed-use development', status: 'Completed' },
    { project: 'Dubai Marina', details: 'Waterfront district', status: 'Completed' },
  ],
  ipoHistory: [
    { date: 'March 25, 2000', event: 'DFM Listing', details: 'First property company to offer shares to foreign nationals' },
    { date: 'October 2014', event: 'Emaar Malls Group IPO', details: 'Largest Dubai IPO since 2007, raised ~535M shares at 3.25 dirhams' },
    { date: '2017', event: 'Emaar Development IPO', details: '$2 billion' },
  ],
  internationalPresence: [
    { country: 'USA', projects: 'Acquired John Laing Homes for $1 billion (2008)' },
    { country: 'Saudi Arabia', projects: 'King Abdullah Economic City' },
    { country: 'India', projects: 'Delhi NCR, Gurugram, Mohali, Chennai, Hyderabad, Srinagar' },
    { country: 'Egypt', projects: 'Marassi resort, Uptown Cairo' },
    { country: 'Turkey', projects: 'Emaar Square Mall, Address Residences' },
    { country: 'Pakistan', projects: 'Crescent Bay Karachi, Canyon Views Islamabad' },
    { country: 'Iraq', projects: 'Downtown Erbil' },
    { country: 'Other', projects: 'Lebanon, Jordan, Morocco, Syria' },
  ],
  marassiEgypt: [
    { metric: 'Location', value: 'North Coast, Egypt' },
    { metric: 'Size', value: '2,400 acres' },
    { metric: 'Development', value: '6.5 million square meters' },
    { metric: 'Beaches', value: '5' },
    { metric: 'Hotels planned', value: '23' },
    { metric: 'Unit sizes', value: 'From 65 sqm' },
    { metric: 'Payment plans', value: 'Up to 12 years' },
  ] as OperationalMetric[],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: "Dubai's iconic developer",
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'Very High (public company, international projects)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Emaar_Properties'],
}

// ============================================================================
// LULU GROUP INTERNATIONAL DATA
// ============================================================================

export const luluData = {
  entityOverview: {
    type: 'Indian-Emirati multinational conglomerate',
    headquarters: 'Abu Dhabi, UAE',
    founded: '1995',
    founder: 'M. A. Yusuff Ali (from Nattika, Kerala, India)',
    employees: '65,000+',
  },
  globalPresence: [
    { country: 'UAE', stores: '175 stores' },
    { country: 'Saudi Arabia', stores: '34 stores' },
    { country: 'Oman', stores: '35 stores' },
    { country: 'Qatar', stores: '22 stores' },
    { country: 'Bahrain', stores: '11 stores' },
    { country: 'Kuwait', stores: '6 stores' },
    { country: 'Yemen', stores: '1 store' },
    { country: 'Egypt', stores: '3 stores' },
    { country: 'India', stores: '12 stores (Kochi, Bengaluru, Lucknow, Coimbatore, Thiruvananthapuram, Palakkad, Kottayam, Hyderabad, Kozhikode)' },
    { country: 'Malaysia/Indonesia', stores: '2 stores' },
    { country: 'Suriname', stores: '1 store' },
    { country: 'UK', stores: 'Birmingham logistics facility' },
  ],
  businessSegments: [
    'LuLu Hypermarket: Core retail chain',
    'LOT The Value Shop: Affordable format (launched 2025)',
    'Shopping Malls: 13 in GCC, 5 in India',
    'Convention Centres: Lulu Convention Centre (Thrissur), Lulu Bolgatty International Convention Centre (Kochi)',
    'Hospitality: Multiple Marriott and Hyatt hotels in India',
    'Y International: Export distribution to US and Europe',
  ],
  financialGrowthMetrics: [
    { label: 'GCC Outlets', value: '259' },
    { label: 'GCC Hypermarkets', value: '200+', note: 'September 2024' },
    { label: 'Global Ranking', value: "Among world's 50 fastest growing retailers" },
  ] as OperationalMetric[],
  strategicInvestments: [
    { investment: 'East India Company', details: '10% stake acquired' },
    { investment: 'Fine foods subsidiary', details: '40% stake (~$85 million)' },
  ],
  dataBreach2024: 'Over 200,000 customer records exposed by IntelBroker',
  recentDevelopments: [
    { date: 'September 2024', development: 'Kozhikode mall opened (largest hypermarket at 1.5 lakh sq ft)' },
    { date: 'Planned', development: 'Second Kozhikode mall with cinemas and international brands' },
    { date: 'Under construction', development: 'Kottayam, Tirur, Ahmedabad, Chennai, Varanasi' },
    { date: 'Planned', development: 'Food processing unit for Greater Noida' },
  ],
  relevanceAssessment: {
    criticality: 'MEDIUM' as CriticalityType,
    rationale: 'Major UAE employer, Indian expat business success',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'High (private company with major operations)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/LuLu_Group_International'],
}

// ============================================================================
// JUMEIRAH GROUP DATA
// ============================================================================

export const jumeirahData = {
  entityOverview: {
    type: 'Dubai-based hotelier/operator',
    owner: 'Dubai Holding',
  },
  keyProperties: [
    { property: 'Burj Al Arab', details: 'Iconic sail-shaped hotel' },
    { property: 'Jumeirah Beach Hotel', details: '598 rooms, 19 villas, 20 restaurants' },
    { property: 'Jumeirah Emirates Towers', details: '-' },
    { property: 'Madinat Jumeirah', details: '-' },
    { property: 'Jumeirah Carlton Tower', details: '-' },
    { property: 'The Emirates Academy of Hospitality Management', details: '-' },
    { property: 'Palais Quartier', details: '-' },
    { property: 'Wild Wadi Water Park', details: '-' },
  ],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: "Dubai's luxury hospitality brand",
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'High (Dubai Holding backing)',
  },
  sourceUrls: ['https://en.wikipedia.org/wiki/Jumeirah_Group'],
}

// ============================================================================
// AL HABTOOR GROUP DATA
// ============================================================================

export const alHabtoorData = {
  entityOverview: {
    type: 'Major UAE conglomerate',
    founded: '1970 (started as small engineering firm)',
    diversifiedBusiness: 'Hotel, automotive, real estate, education, construction, publishing',
  },
  alHabtoorCity: {
    location: 'Business Bay, Dubai',
    type: 'Multi-use development',
  },
  hotelsInAlHabtoorCity: [
    { hotel: 'Habtoor Palace Dubai', brand: '-' },
    { hotel: 'V Hotel', brand: '-' },
    { hotel: 'Curio Collection by Hilton', brand: '-' },
    { hotel: 'Hilton Dubai Al Habtoor City', brand: '-' },
    { hotel: 'Metropolitan Hotel Dubai', brand: '-' },
    { hotel: 'Al Habtoor Polo', brand: '-' },
  ],
  relevanceAssessment: {
    criticality: 'MEDIUM' as CriticalityType,
    rationale: 'Diversified UAE conglomerate',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'High (established conglomerate)',
  },
  sourceUrls: [
    'https://www.alhabtoorgroup.com',
    'https://www.linkedin.com/company/al-habtoor-group',
  ],
}

// ============================================================================
// MICROSOFT UAE DATA
// ============================================================================

export const microsoftUaeData = {
  investmentAnnouncement: {
    date: 'November 3, 2025',
    totalPlan: '$15.2 billion investment plan in UAE through 2029',
    invested2023to2025: '$7.3 billion already invested',
    futureEarmarked: '$7.9 billion earmarked for 2026-2029',
  },
  strategicFocus: [
    'AI and cloud computing projects',
    'Secured US export licenses for AI chips',
    'Partnership with Alef Education for UAE teachers/students',
  ],
  regionalPresence: [
    { office: 'Dubai office', focus: 'careers in sales and services' },
    { office: 'Gulf Regional Office', focus: 'Bahrain, Kuwait, Oman, Qatar, UAE' },
  ],
  relevanceAssessment: {
    criticality: 'HIGH' as CriticalityType,
    rationale: 'Major tech investment, AI/cloud leadership',
    sentiment: 'HIGHLY_POSITIVE' as SentimentType,
    credibility: 'Very High (official announcements)',
  },
  sourceUrls: ['https://www.microsoft.com/uae', 'Reuters, Bloomberg coverage'],
}

// ============================================================================
// AMAZON AWS UAE DATA
// ============================================================================

export const awsUaeData = {
  regionDetails: [
    { field: 'Region Name', value: 'Middle East (UAE)' },
    { field: 'API Name', value: 'me-central-1' },
    { field: 'Launch Date', value: 'August 29, 2022' },
    { field: 'Data Centers', value: '2 in UAE' },
  ],
  march2026Incident: {
    date: 'March 2, 2026',
    event: 'Drones damaged three facilities in UAE and Bahrain',
    impact: "Data centers 'directly struck'",
    cause: 'US-Iran tensions',
    result: 'AWS outage in UAE following drone strikes',
  },
  relevanceAssessment: {
    criticality: 'MEDIUM' as CriticalityType,
    rationale: 'Cloud infrastructure provider',
    sentiment: 'MIXED' as SentimentType,
    credibility: 'Very High (official confirmation)',
  },
  sourceUrls: [
    'https://aws.amazon.com/about-aws/global-infrastructure/regions/me-central-1/',
    'Reuters coverage',
  ],
}

// ============================================================================
// HSBC UAE DATA
// ============================================================================

export const hsbcUaeData = {
  entityOverview: {
    entity: 'HSBC Bank Middle East',
    status: "Largest represented international bank in Middle East",
  },
  services: 'Personal and online banking, loans, mortgages, savings, investments, credit cards',
  careers: 'Retail/private banking, wealth management, commercial/investment banking, global markets, trade finance',
  uaeEconomyAssessment: {
    source: 'Bloomberg (September 2025)',
    statement: 'UAE one of strongest performing economies in CEEMEA',
    economist: 'Simon Williams',
  },
  relevanceAssessment: {
    criticality: 'MEDIUM' as CriticalityType,
    rationale: 'Major international bank presence',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (global bank)',
  },
  sourceUrls: ['https://www.hsbc.ae', 'https://www.bloomberg.com'],
}

// ============================================================================
// MCKINSEY MIDDLE EAST DATA
// ============================================================================

export const mcKinseyData = {
  officeLocations: [
    { office: 'Dubai', focus: 'Research and analysis in banking, infrastructure, retail, travel, tourism' },
    { office: 'Abu Dhabi', focus: 'Accelerating sustainable/inclusive growth' },
  ],
  leadership: [
    { position: 'Senior Partner', name: 'Hasan Muzaffar', location: 'Dubai' },
  ] as LeadershipEntry[],
  regionalCoverage: 'Seven regional locations',
  companyCulture: {
    glassdoorRating: '3.9/5 (146 reviews)',
  },
  relevanceAssessment: {
    criticality: 'LOW' as CriticalityType,
    rationale: 'Major consulting presence',
    sentiment: 'NEUTRAL' as SentimentType,
    credibility: 'High (global firm)',
  },
  sourceUrls: ['https://www.mckinsey.com', 'LinkedIn, Glassdoor'],
}

// ============================================================================
// CARREFOUR UAE DATA
// ============================================================================

export const carrefourData = {
  overview: {
    parent: 'Majid Al Futtaim group',
    platform: 'Online shopping',
    categories: 'Food, Grocery, Electronics, Mobile Phones, Beauty',
  },
  digitalPresence: '719 Trustpilot reviews. Instagram, Facebook, YouTube presence. Weekly offers and promotions.',
  relevanceAssessment: {
    criticality: 'LOW' as CriticalityType,
    rationale: 'Major retail chain',
    sentiment: 'NEUTRAL' as SentimentType,
    credibility: 'High (Majid Al Futtaim backing)',
  },
  sourceUrls: ['https://www.carrefouruae.com'],
}

// ============================================================================
// MARRIOTT DUBAI DATA
// ============================================================================

export const marriottData = {
  keyProperties: [
    { property: 'JW Marriott Marquis Dubai', location: 'Business Bay', details: "World's 3rd tallest hotel (72-storey, 355m twin-tower)" },
    { property: 'Marriott Hotel Al Jaddaf', location: 'Al Jaddaf', details: '-' },
    { property: 'Marriott Resort Palm Jumeirah', location: 'Palm Jumeirah', details: '-' },
  ],
  relevanceAssessment: {
    criticality: 'MEDIUM' as CriticalityType,
    rationale: 'Major hospitality operator',
    sentiment: 'POSITIVE' as SentimentType,
    credibility: 'Very High (global hospitality brand)',
  },
  sourceUrls: [
    'https://www.marriott.com',
    'https://en.wikipedia.org/wiki/JW_Marriott_Marquis_Dubai',
  ],
}

// ============================================================================
// SYNTHESIZED DATA TABLES
// ============================================================================

export const corporateEntityOverview: EntityOverview = {
  totalEntities: 20,
  totalQueriesExecuted: 32,
  totalPagesFetched: 15,
  totalSources: 25,
  totalFinancialDataPoints: 150,
  totalControversies: 12,
  executionDate: '2026-04-27',
  frameworkVersion: '1.0',
}

export const summaryMetrics: SummaryMetrics = {
  totalRevenue: '$207.5B+',
  totalAssets: '$2.6T+',
  totalEmployees: '1M+',
  entitiesTracked: 20,
}

export const soeSummary: SOESummary[] = [
  { company: 'ADNOC', type: 'Oil & Gas', keyMetric: 'Assets', value: '$1+ trillion' },
  { company: 'Mubadala', type: 'SWF', keyMetric: 'AUM', value: '$385 billion' },
  { company: 'ADIA', type: 'SWF', keyMetric: 'AUM', value: '$1.057 trillion' },
  { company: 'DP World', type: 'Logistics', keyMetric: 'Revenue', value: '$24.4 billion' },
  { company: 'Emirates', type: 'Airline', keyMetric: 'Profit', value: '$5.8 billion' },
  { company: 'Etihad', type: 'Airline', keyMetric: 'Profit', value: '$698 million' },
  { company: 'FAB', type: 'Banking', keyMetric: 'Assets', value: '$330 billion' },
  { company: 'Emirates NBD', type: 'Banking', keyMetric: 'Assets', value: '$295.7 billion' },
  { company: 'ADCB', type: 'Banking', keyMetric: 'Assets', value: '$148 billion' },
  { company: 'DIB', type: 'Banking', keyMetric: 'Assets', value: '$94 billion' },
]

export const sectorPerformance: SectorPerformance[] = [
  { sector: 'Oil & Gas', topPerformer: 'ADNOC', keyGrowthDriver: 'International expansion, chemicals' },
  { sector: 'Sovereign Wealth', topPerformer: 'Mubadala', keyGrowthDriver: 'Tech investments, portfolio gains' },
  { sector: 'Aviation', topPerformer: 'Emirates', keyGrowthDriver: 'Record profits, fleet expansion' },
  { sector: 'Banking', topPerformer: 'FAB', keyGrowthDriver: 'Market leadership, international growth' },
  { sector: 'Logistics', topPerformer: 'DP World', keyGrowthDriver: 'Throughput growth, diversification' },
  { sector: 'Real Estate', topPerformer: 'Emaar', keyGrowthDriver: 'International expansion' },
]

export const controversiesSummary: ControversySummary[] = [
  { company: 'DP World', controversy: 'P&O Ferries mass redundancy (2022)', impact: 'UK labor scandal' },
  { company: 'DP World', controversy: 'Australia cyberattack (2023)', impact: 'Trade disruption' },
  { company: 'DP World', controversy: 'Jeffrey Epstein (2026)', impact: 'Leadership crisis' },
  { company: 'DP World', controversy: 'Russia operations', impact: 'Ukraine criticism' },
  { company: 'Emirates', controversy: 'Subsidy allegations', impact: 'European carrier complaints' },
  { company: 'LuLu Group', controversy: '2024 data breach', impact: 'Customer data exposure' },
]

export const leadershipChanges: LeadershipChange[] = [
  { company: 'Etihad', change: 'ADQ takeover', date: 'October 2022' },
  { company: 'DP World', change: 'Sultan Ahmed bin Sulayem resignation', date: 'February 2026' },
  { company: 'FAB', change: 'Hana Al Rostamani as CEO', date: 'January 2021' },
]

export const majorAcquisitions: MajorAcquisition[] = [
  { acquirer: 'ADNOC', target: 'Covestro', value: '$16.3 billion', year: '2024-2025' },
  { acquirer: 'Mubadala', target: 'Fortress Investment Group', value: '$3 billion', year: '2023' },
  { acquirer: 'Emirates NBD', target: 'Denizbank', value: '$2.8 billion', year: '2019' },
  { acquirer: 'Emaar', target: 'John Laing Homes', value: '$1 billion', year: '2008' },
]

export const financialPerformanceTable: FinancialPerformance[] = [
  { entity: 'Emirates Group', revenue: '$39.6B', profit: '$6.2B', margin: '15.7%', yoyGrowth: '+6%' },
  { entity: 'Emirates Airline', revenue: '$34.9B', profit: '$5.8B', margin: '16.6%', yoyGrowth: '+6%' },
  { entity: 'Etihad', revenue: '$8.4B', profit: '$698M', margin: '8.3%', yoyGrowth: '+21%' },
  { entity: 'DP World', revenue: '$24.4B', profit: '$1.96B', margin: '8.0%', yoyGrowth: '+22%' },
  { entity: 'FAB', profit: '$17.1B', assets: '$330B', yoyGrowth: '+4%' },
  { entity: 'Emirates NBD', profit: '$29.8B', assets: '$295.7B', yoyGrowth: '+10%' },
  { entity: 'ADCB', profit: '$3.78B', assets: '$148B', yoyGrowth: '+30%' },
  { entity: 'Du', revenue: '$15.9B', profit: '$2.49B', margin: '15.7%', yoyGrowth: '-' },
]

export const fleetComparison = [
  { airline: 'Emirates', fleetSize: '261+13 cargo', aircraftTypes: 'A380, 777, 777X, 787, A350', orderBook: '314', destinations: '148 cities' },
  { airline: 'Etihad', fleetSize: '127', aircraftTypes: 'Mixed', orderBook: '-', destinations: '110' },
]

export const marketShareBanking = [
  { bank: 'FAB', uaeMarketShare: '27%', internationalPresence: '5 continents' },
  { bank: 'Emirates NBD', uaeMarketShare: '-', internationalPresence: '13 countries' },
  { bank: 'ADCB', uaeMarketShare: '-', internationalPresence: 'UAE + Jersey' },
  { bank: 'DIB', uaeMarketShare: 'Islamic banking leader', internationalPresence: '7 countries' },
]

export const nationalCriticality: NationalCriticality[] = [
  { entity: 'ADNOC', criticality: 'CRITICAL', rationale: 'Oil reserves, energy security' },
  { entity: 'Emirates', criticality: 'CRITICAL', rationale: 'Global brand, tourism' },
  { entity: 'FAB', criticality: 'CRITICAL', rationale: 'Largest bank, financial stability' },
  { entity: 'Etisalat/e&', criticality: 'CRITICAL', rationale: 'Telecommunications infrastructure' },
  { entity: 'Mubadala', criticality: 'HIGH', rationale: 'Sovereign wealth, diversification' },
  { entity: 'ADIA', criticality: 'HIGH', rationale: 'Global investments' },
  { entity: 'DP World', criticality: 'HIGH', rationale: 'Trade/logistics hub' },
  { entity: 'Emirates NBD', criticality: 'HIGH', rationale: 'Banking leadership' },
]

export const sentimentAnalysis: SentimentAnalysisEntry[] = [
  { entity: 'Emirates', sentiment: 'HIGHLY_POSITIVE', keyDriver: 'Record profits, expansion' },
  { entity: 'Etihad', sentiment: 'HIGHLY_POSITIVE', keyDriver: 'Turnaround story' },
  { entity: 'FAB', sentiment: 'HIGHLY_POSITIVE', keyDriver: 'Strong growth, sustainability' },
  { entity: 'DP World', sentiment: 'MIXED', keyDriver: 'Financial strength vs controversies' },
  { entity: 'ADNOC', sentiment: 'POSITIVE', keyDriver: 'International expansion' },
  { entity: 'Mubadala', sentiment: 'POSITIVE', keyDriver: 'AUM growth' },
  { entity: 'LuLu', sentiment: 'POSITIVE', keyDriver: 'Strong growth, India presence' },
  { entity: 'Microsoft UAE', sentiment: 'HIGHLY_POSITIVE', keyDriver: '$15.2B commitment' },
]

export const investmentClimateIndicators: InvestmentClimateIndicator[] = [
  { indicator: 'UAE Economy', status: 'Strong', source: 'HSBC, Bloomberg' },
  { indicator: 'Banking Sector', status: 'Robust', source: 'Record profits across sector' },
  { indicator: 'Aviation', status: 'Growth', source: 'Emirates, Etihad record results' },
  { indicator: 'Real Estate', status: 'Stable', source: 'Emaar international expansion' },
  { indicator: 'Tech Investment', status: 'Accelerating', source: 'Microsoft, AWS major commitments' },
]

// ============================================================================
// SOURCE URLS
// ============================================================================

export const officialCompanySources = [
  'https://www.emirates.com/media-centre/emirates-group-achieves-record-profit-of-aed-227-bn-us-62-bn-in-2024-25/',
  'https://www.emirates.com/media-centre/annual-report-2024-25/',
  'https://c.ekstatic.net/ecl/documents/annual-report/2024-2025.pdf',
  'https://www.dpworld.com/en/news/dp-world-reports-record-244-bn-revenue-and-64bn-ebitda-for-2025-2',
  'https://www.dpworld.com/en/investors/annual-report-2025',
  'https://www.mubadala.com/en/news/strong-performance-by-uae-portfolio-drives-mubadalas-growth-in-2025',
  'https://www.etisalat.ae',
  'https://www.alhabtoorgroup.com',
  'https://aws.amazon.com/about-aws/global-infrastructure/regions/me-central-1/',
  'https://www.marriott.com',
  'https://www.hsbc.ae',
]

export const newsSources = [
  'https://aviationsourcenews.com/etihad-airways-delivers-record-us698-million-profit-in-2025/',
  'https://www.tradingview.com/news/reuters.com,2026-02-24:newsml_Zaw7PmkYJ:0-zawya-pressr-etihad-airways-delivers-record-aed-2-6bln-698mln-profit-in-2025-marking-strongest-performance-in-the-airline-s-history/',
  'https://www.reuters.com/world/middle-east/abu-dhabi-wealth-fund-mubadalas-assets-jump-17-2025-385-billion-2026-04-09/',
]

export const wikipediaSources = [
  'https://en.wikipedia.org/wiki/Emirates_(airline)',
  'https://en.wikipedia.org/wiki/Etihad_Airways',
  'https://en.wikipedia.org/wiki/DP_World',
  'https://en.wikipedia.org/wiki/Abu_Dhabi_National_Oil_Company',
  'https://en.wikipedia.org/wiki/Mubadala_Investment_Company',
  'https://en.wikipedia.org/wiki/Abu_Dhabi_Investment_Authority',
  'https://en.wikipedia.org/wiki/First_Abu_Dhabi_Bank',
  'https://en.wikipedia.org/wiki/Emirates_NBD',
  'https://en.wikipedia.org/wiki/Abu_Dhabi_Commercial_Bank',
  'https://en.wikipedia.org/wiki/Dubai_Islamic_Bank',
  'https://en.wikipedia.org/wiki/Emaar_Properties',
  'https://en.wikipedia.org/wiki/LuLu_Group_International',
  'https://en.wikipedia.org/wiki/Du_(company)',
  'https://en.wikipedia.org/wiki/Jumeirah_Group',
]

// ============================================================================
// EXPORT DEFAULT OBJECT
// ============================================================================

export const corporateEntitiesData = {
  overview: corporateEntityOverview,
  summaryMetrics,
  // Entity data
  adnoc: adnocData,
  mubadala: mubadalaData,
  adia: adiaData,
  dpWorld: dpWorldData,
  emirates: emiratesData,
  etihad: etihadData,
  fab: fabData,
  emiratesNbd: emiratesNbdData,
  adcb: adcbData,
  dib: dibData,
  etisalat: etisalatData,
  du: duData,
  emaar: emaarData,
  lulu: luluData,
  jumeirah: jumeirahData,
  alHabtoor: alHabtoorData,
  microsoftUae: microsoftUaeData,
  awsUae: awsUaeData,
  hsbcUae: hsbcUaeData,
  mcKinsey: mcKinseyData,
  carrefour: carrefourData,
  marriott: marriottData,
  // Synthesized data
  soeSummary,
  sectorPerformance,
  controversiesSummary,
  leadershipChanges,
  majorAcquisitions,
  financialPerformanceTable,
  fleetComparison,
  marketShareBanking,
  nationalCriticality,
  sentimentAnalysis,
  investmentClimateIndicators,
  // Sources
  sources: {
    official: officialCompanySources,
    news: newsSources,
    wikipedia: wikipediaSources,
  },
}

export default corporateEntitiesData
