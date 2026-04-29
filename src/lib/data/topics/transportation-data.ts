// @ts-nocheck
/**
 * Transportation & Logistics - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-16-transportation-logistics-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION A: UAE LOGISTICS MARKET
// ============================================================================

export interface LogisticsMarketMetric {
  metric: string
  value: string
  source: string
}

export interface MarketSegmentationByMode {
  segment: string
  marketShare: string
}

export interface MarketSegmentationByModel {
  segment: string
  marketShare: string
}

export interface MarketSegmentationByEndUse {
  segment: string
  marketShare: string
}

export interface MarketSegmentationByEmirate {
  emirate: string
  marketShare: string
}

export interface LogisticsKeyPlayer {
  company: string
}

export interface LogisticsInvestment {
  company: string
  investment: string
  facility: string
  year: string
}

export const logisticsMarket = {
  executionMetadata: {
    dateExecuted: '2026-04-27',
    frameworkVersion: '1.0',
    queriesExecuted: 38,
    pagesFetched: 35,
    enrichmentStatus: 'Fully enriched with URL content extraction',
  },
  focusAreas: [
    'Dubai Metro ridership & expansion',
    'Etihad Rail progress & impact',
    'Aviation dominance strategy',
    'Air traffic management',
    'Maritime piracy impact',
    'Shipping lane security',
    'Road safety statistics (fatality rate per capita)',
    'Traffic congestion cost',
    'Public transport mode share',
    'Last-mile delivery',
    'E-commerce logistics',
    'Autonomous shipping',
    'Drone delivery regulation',
    'Freight corridor development',
    'Cold chain logistics',
    'UAE as global logistics hub — reality check',
    'Logistics worker conditions',
    'Truck driver welfare',
    'Port efficiency rankings',
    'Customs modernization',
    'Smart mobility',
    'Shared mobility',
    'Micro-mobility',
    'Transport emissions',
    'Electrification of transport',
    'Infrastructure maintenance standards',
    'Transport accessibility for disabled',
    'Transport during extreme weather events',
  ],
  marketSizeGrowth: {
    marketSize2025: 'USD 57.6 Billion',
    projectedSize2034: 'USD 96.3 Billion',
    cagr20262034: '5.58%',
    forecastPeriod: '2026-2034',
    source: 'IMARC Group',
    context: 'UAE logistics market expanding through 2028 driven by trade diversification and technology innovation. Cross-border trade partnerships, rail freight expansion, and automated distribution centers are key growth drivers. Challenges include high operational costs, fuel volatility, regulatory complexity, and skilled workforce shortages.',
  },
  segmentationByMode: [
    { segment: 'Roadways', marketShare: '45.8% (largest)' },
    { segment: 'Seaways', marketShare: '[remaining]' },
    { segment: 'Railways', marketShare: '[remaining]' },
    { segment: 'Airways', marketShare: '[remaining]' },
  ] as MarketSegmentationByMode[],
  segmentationByModel: [
    { segment: '3PL (Third Party Logistics)', marketShare: '49.6% (largest)' },
    { segment: '2PL', marketShare: '[remaining]' },
    { segment: '4PL', marketShare: '[remaining]' },
  ] as MarketSegmentationByModel[],
  segmentationByEndUse: [
    { segment: 'Retail', marketShare: '16.9% (largest)' },
    { segment: 'Manufacturing', marketShare: '[remaining]' },
    { segment: 'Consumer Goods', marketShare: '[remaining]' },
    { segment: 'F&B', marketShare: '[remaining]' },
    { segment: 'IT Hardware', marketShare: '[remaining]' },
    { segment: 'Healthcare', marketShare: '[remaining]' },
    { segment: 'Chemicals', marketShare: '[remaining]' },
    { segment: 'Construction', marketShare: '[remaining]' },
    { segment: 'Automotive', marketShare: '[remaining]' },
    { segment: 'Telecom', marketShare: '[remaining]' },
    { segment: 'Oil & Gas', marketShare: '[remaining]' },
  ] as MarketSegmentationByEndUse[],
  segmentationByEmirate: [
    { emirate: 'Dubai', marketShare: '38.7% (largest)' },
    { emirate: 'Abu Dhabi', marketShare: '[remaining]' },
    { emirate: 'Sharjah', marketShare: '[remaining]' },
    { emirate: 'Ajman', marketShare: '[remaining]' },
  ] as MarketSegmentationByEmirate[],
  keyPlayers: [
    'CEVA Logistics',
    'Emirates Logistics',
    'DHL',
    'FedEx',
    '[Additional regional operators]',
  ] as LogisticsKeyPlayer[],
  recentInvestments: [
    { company: 'dnata', investment: 'AED 100 million', facility: '57,000 m² warehouse', year: '2024' },
    { company: 'DHL', investment: 'EUR 120 million', facility: '55,000 m² warehouse near Al Maktoum Airport', year: '2025' },
    { company: 'Etihad Rail', investment: 'AED 40 billion (proposed)', facility: 'Cargo network', year: '2026' },
  ] as LogisticsInvestment[],
  logisticsIntegrationCouncil: {
    firstMeeting: 'September 18, 2025',
    purpose: 'Stakeholders align policy and infrastructure across the Emirates',
  },
  etihadRailTerminalDubaiIndustrialCity: {
    announced: 'September 22, 2025',
    purpose: 'Advanced freight terminal connecting Dubai Industrial City to national rail network',
  },
}

// ============================================================================
// SECTION B: PORTS & MARITIME
// ============================================================================

export interface DPWorldCorporateData {
  metric: string
  value: string
  source?: string
}

export interface DPWorldNotableAcquisition {
  entity: string
  year: string
  amount: string
}

export interface DPWorldKeyService {
  service: string
}

export interface UAEPortEfficiencyRanking {
  port: string
  ranking: string
  year: string
  index: string
}

export interface KhalifaPortFeatures {
  feature: string
}

export interface UAEGlobalMaritimeRanking {
  ranking: string
  details: string
}

export const portsMaritime = {
  dpWorldCorporateData: {
    revenue2025: 'US$24.4 billion',
    operatingIncome: 'US$6.4 billion',
    netIncome: 'US$1.96 billion',
    employees: '101,440',
    containersHandled: '70 million annually',
    vesselsServed: '~70,000 annually',
    globalTrafficShare: '~10% of global container traffic',
    terminals: '82 marine and inland terminals',
    countriesCovered: '40+ countries across 6 continents',
    founded: '2005',
    headquarters: 'Dubai, UAE',
    groupCEO: 'Yuvraj Narayan',
    chairman: 'Essa Kazim',
    source: 'Wikipedia/DP World',
  },
  notableAcquisitions: [
    { entity: 'CSX World Terminals', year: '2005', amount: 'N/A' },
    { entity: 'P&O ports operator', year: '2006', amount: 'GBP 3.9 billion' },
    { entity: 'P&O Ferries repurchased', year: '2019', amount: 'GBP 322 million' },
  ] as DPWorldNotableAcquisition[],
  keyServices: [
    'Cargo logistics',
    'Port terminal operations',
    'Maritime services',
    'Free trade zones',
  ] as DPWorldKeyService[],
  globalPresence: {
    logisticsOffices: '303 worldwide',
    portsAndTerminals: 'Over 60 globally',
    fleetSize: 'Over 500 vessels',
    economicZones: '9,596 hectares',
    countriesOperated: 'Operates across ~60 countries including UAE, USA, UK, China, India, Australia, Brazil, Germany, Netherlands, Singapore',
  },
  sustainability: 'Climate change initiatives targeting net zero, people and communities programs, education initiatives, water conservation, DP World Foundation for social impact.',
  portEfficiencyRankings: [
    { port: 'Khalifa Port', ranking: '3rd most efficient globally', year: '2022', index: 'Container Port Performance Index (World Bank/S&P Global)' },
    { port: 'Khalifa Port', ranking: '5th globally', year: '2021', index: 'Previous ranking' },
    { port: 'Khalifa Port', ranking: '4+ million TEUs annually', year: '[recent]', index: '[source]' },
    { port: 'Port of Salalah (Oman)', ranking: 'Top 10 efficient', year: '2022', index: '[source]' },
    { port: 'Hamad Port (Qatar)', ranking: 'Top 10 efficient', year: '2022', index: '[source]' },
    { port: 'Port Said (Egypt)', ranking: 'Top 10 efficient', year: '2022', index: '[source]' },
  ] as UAEPortEfficiencyRanking[],
  rankingCriteria: 'Based on Container Port Performance Index (CPPI), developed by World Bank and S&P Global Market Intelligence. Measures "the amount of time vessels spend in the port to complete cargo exchange."',
  khalifaPortEfficiencyFactors: [
    'Operational excellence',
    'Infrastructure development and continued investment',
    'State-of-the-art infrastructure',
    'Dedication to safety',
    'Technology deployment and innovation',
  ] as KhalifaPortFeatures[],
  portThroughput: {
    uaePortsTEUsHandled: '~21 million TEUs',
    year: '2023',
    globalTrafficShareDPWorld: '~10%',
  },
  globalMaritimeRankings: [
    { ranking: '10 Gulf container ports', details: 'Ranked among 70 most efficient globally (2024)' },
    { ranking: 'Top 35 countries', details: 'UAE ranks among top 35 countries with largest global maritime fleets' },
  ] as UAEGlobalMaritimeRanking[],
  jebelAliPort: {
    tradeShare: 'Handles ~73% of UAE food and beverage trade by value',
    note: 'Rate limited during research - limited detailed data available',
  },
  khalifaPort: {
    strategicLocation: 'Strategic location on East-West shipping lanes',
    note: 'Rate limited during research - limited detailed data available',
  },
}

// ============================================================================
// SECTION C: AVIATION & AIR CARGO
// ============================================================================

export interface DubaiAviationDominanceElement {
  element: string
  details: string
  source?: string
}

export interface UAEAviation2035Pillar {
  pillar: string
  details: string
}

export interface EmiratesSkyCargoMetric {
  metric: string
  value: string
  source?: string
}

export interface EtihadCargoMetric {
  metric: string
  value: string
  source?: string
}

export interface AirTrafficManagementElement {
  element: string
  details: string
  source?: string
}

export interface March2026DisruptionData {
  period: string
  passengersAffected: string
  aircraftMovements: string
  recovery: string
}

export const aviationAirCargo = {
  dubaiAviationDominanceStrategy: {
    policy: 'Open skies policy - foreign carriers encouraged to operate',
    emAiratesFounded: '1985',
    fleet: '250+ widebody aircraft (A380s and Boeing 777s)',
    terminal3: 'Built specifically for Emirates',
    geographicReach: '80% of world population within 8 hours flying time',
    model: 'Hub-and-spoke with coordinated arrival/departure waves',
    dxbPassengerTraffic: 'Emirates handles 50-60% of total',
    source: 'Palm Observer, Dubai Press',
  },
  hubAndSpokeSystem: 'Emirates uses "coordinated waves" of arrivals and departures, with dozens of aircraft arriving within a relatively short window. This banking system allows efficient connections.',
  uaeAviation2035Strategy: {
    goal: '"The United Arab Emirates is poised to become not just a global hub, but the global aviation hub" by 2035.',
    eightPillars: [
      { pillar: 'Mega-Infrastructure', details: 'DWC planned for 260M annual passengers, 5 runways; $35B new terminal approved 2024' },
      { pillar: 'Super-Connector Networks', details: 'Emirates (250+ aircraft, 787/A350/777X orders), Etihad (A350s, 787s, A321LRs)' },
      { pillar: 'MRO/OEM Dominance', details: 'Etihad Engineering, Emirates $950M DWC complex, Sanad (engine MRO), AMMROC' },
      { pillar: 'Policy Environment', details: 'Liberal open skies agreements, 100% foreign ownership in free zones' },
      { pillar: 'Sustainability', details: 'Net Zero 2050 commitment; SAF, green hydrogen investments; LEED-certified facilities' },
      { pillar: 'Branding & Diplomacy', details: 'Dubai Airshow prominence; route rights and fleet orders as diplomatic tools' },
      { pillar: 'Resilience', details: 'Redundant hubs (DXB, DWC, AUH); diversified revenue streams' },
      { pillar: 'Workforce Development', details: 'Part-147 training schools, Emiratization focus, expatriate-friendly policies' },
    ] as UAEAviation2035Pillar[],
  },
  emiratesSkyCargo: {
    hub: 'Al Maktoum International Airport',
    cargoOnlyDestinations: '26 dedicated cargo flights',
    routeNetwork: '87 total destinations',
    passengerNetworkAccess: '61 additional destinations via belly hold',
    globalNetwork: '114+ points in 67 countries',
    services: 'Real-time shipment tracking, quotation services, fuel surcharge tiers available.',
    source: 'Wikipedia, SkyCargo',
  },
  etihadCargo: {
    hub: 'Abu Dhabi',
    revenueGrowth2025: '8% year-on-year',
    passengerDestinationsNov2025: '16 new destinations announced',
    freighterCapacity: 'Expanded for Winter 2025 schedule',
    source: 'Etihad Cargo News',
  },
  airTrafficManagement: {
    regulator: 'GCAA (General Civil Aviation Authority)',
    airspaceDescription: 'One of busiest and most strategically important globally',
    strategicPosition: 'Crossroads of three continents',
    atfmRoadmap: 'Aligned with ICAO standards',
    march2026Disruption: 'Air traffic gradually returning to normal after regional tensions',
    source: 'GCAA website, CANSO, Centre for Aviation',
  },
  march2026Incident: {
    period: 'March 1-12, 2026',
    passengersAffected: 'More than 1.4 million',
    aircraftMovements: '7,839 in UAE airspace',
    recovery: 'UAE national carriers reached ~44.6% of pre-tension operational levels by March 13, 2026',
  } as March2026DisruptionData,
}

// ============================================================================
// SECTION D: RAIL - ETIHAD RAIL
// ============================================================================

export interface EtihadRailNetworkMetric {
  metric: string
  value: string
  source?: string
}

export interface EtihadRailFreightCommodity {
  commodity: string
  volume: string
  source?: string
}

export interface EtihadRailExtension {
  name: string
  purpose: string
  details: string
  progress?: string
}

export interface EtihadRailLeadership {
  position: string
  name: string
}

export const etihadRail = {
  networkOverview: {
    totalLength: '900 km',
    citiesConnected: '11 cities and key hubs',
    freightLaunch: 'February 2023 (operational)',
    passengerLaunch: '2026',
    fleetPassenger: '13 state-of-the-art trains',
    cargoCapacityTarget: '60 million tonnes by 2030',
    projectedCompletion: 'Construction complete, operational',
    source: 'Gulf News, Etihad Rail',
  },
  freightOperations2025: [
    { commodity: 'Sulphur Transported', volume: '6.5+ million tonnes', source: 'Gulf News' },
    { commodity: 'Aggregates Moved', volume: '10+ million tonnes', source: 'Gulf News' },
    { commodity: 'Containers Handled', volume: '148,000', source: 'Gulf News' },
    { commodity: 'Truck Journeys Eliminated (Al Dhafra)', volume: '500,000+', source: 'Gulf News' },
  ] as EtihadRailFreightCommodity[],
  extensionsJointVentures: [
    { name: 'Oman Rail Joint Venture', purpose: 'Build and operate railway linking Sohar Port to UAE National Rail Network', details: 'Bolster strategic relationship between UAE and Oman' },
    { name: 'Hafeet Rail (Oman-UAE Link)', purpose: 'Connecting Oman and UAE', details: 'Current progress: 40% complete (announced April 2026)' },
  ] as EtihadRailExtension[],
  passengerStations: {
    count: 11,
    note: 'Station locations confirmed for 2026 passenger service launch. Full list available from Timeout Dubai.',
  },
  highSpeedRailProject: {
    contractValue: '$8 billion',
    details: 'Etihad Rail Mobility plans 10-station inner-city network within Abu Dhabi',
    status: 'First contract signed',
  },
  dubaiIndustrialCityTerminal: {
    announced: 'September 2025',
    purpose: 'Connect Dubai Industrial City to national rail network',
  },
  leadership: [
    { position: 'Chairman', name: 'Sheikh Theyab bin Mohamed bin Zayed Al Nahyan' },
    { position: 'CEO', name: 'Shadi Malak' },
    { position: 'Board Member', name: 'Mohamed Ali Al Shorafa' },
    { position: 'Board Member', name: 'Mattar Al Tower' },
  ] as EtihadRailLeadership[],
}

// ============================================================================
// SECTION E: PUBLIC TRANSPORT - DUBAI
// ============================================================================

export interface PublicTransportRidershipMetric {
  metric: string
  value: string
  change?: string
  source?: string
}

export interface ModeShareEntry {
  mode: string
  ridership: string
  share: string
  yoyGrowth: string
}

export interface DubaiMetroSystemMetric {
  metric: string
  value: string
  source?: string
}

export interface DubaiMetroOperatingHours {
  day: string
  hours: string
  source?: string
}

export interface DubaiMetroRidershipHistory {
  year: string
  passengers: string
  notes: string
}

export interface BusiestMetroStation {
  station: string
  ridership: string
}

export interface RTAExpansionInitiative {
  initiative: string
  target: string
  timeline?: string
}

export interface MetroFloodBarrier {
  station: string
  barrierHeight: string
  characteristic: string
}

export interface FloodBarrierTechnicalFeature {
  feature: string
}

export const publicTransportDubai = {
  ridership2025: {
    totalRidership: '802.1 million',
    dailyAverage: '2.2 million',
    busiestMonth: 'October 2025 (72.8M)',
    h12025: '395.3 million',
    source: 'RTA/Media Office, Gulf News',
  },
  modeShareBreakdown2025: [
    { mode: 'Dubai Metro', ridership: '294.7 million', share: '37%', yoyGrowth: '+7%' },
    { mode: 'Taxis', ridership: '209 million', share: '26%', yoyGrowth: '+4%' },
    { mode: 'Public Buses', ridership: '197.2 million', share: '25%', yoyGrowth: '+5%' },
    { mode: 'Shared Mobility', ridership: '72.9 million', share: '9%', yoyGrowth: '+30%' },
    { mode: 'Marine Transport', ridership: '18.4 million', share: '2%', yoyGrowth: '+3%' },
    { mode: 'Dubai Tram', ridership: '9.9 million', share: '1%', yoyGrowth: '+5%' },
    { mode: 'Premium Limousine', ridership: '23.6 million', share: 'N/A', yoyGrowth: '+22%' },
  ] as ModeShareEntry[],
  metroSystemDetails: {
    totalLength: '89.6 km (55.7 mi)',
    numberOfStations: '55 (35 Red + 20 Green)',
    redLineLength: '67.1 km',
    greenLineLength: '22.5 km',
    blueLineUnderConstruction: '30 km, 14 stations',
    blueLineTarget: '2029',
    goldLinePlanned: '42 km, 18 stations',
    goldLineTarget: '2032',
    dailyRidership2024: '755,000',
    annualRidership2025: '294,700,000',
    topSpeed: '95 km/h (59 mph)',
    trainLength: '5 cars',
    fareRange: '3 AED - 10 AED',
    payment: 'Nol Card only',
    beganOperation: 'September 9, 2009',
    ownerOperator: 'RTA / Keolis MHI consortium',
    operatorDetails: 'Keolis MHI consortium (Keolis 70%, Mitsubishi Heavy Industries 25%, Mitsubishi Corporation 5%)',
    source: 'Wikipedia',
  },
  operatingHours: [
    { day: 'Monday-Thursday', hours: '5am-midnight', source: 'Visit Dubai' },
    { day: 'Friday', hours: '5am-1am', source: 'Visit Dubai' },
    { day: 'Saturday', hours: '5am-midnight', source: 'Visit Dubai' },
    { day: 'Sunday', hours: '[varies]', source: '[source]' },
    { day: 'First Train', hours: '6:00 AM', source: 'Wikipedia' },
  ] as DubaiMetroOperatingHours[],
  ridershipHistory: [
    { year: '2009', passengers: '6.1 million', notes: 'Opening year' },
    { year: '2010', passengers: '38.1 million', notes: '+525%' },
    { year: '2011', passengers: '69.0 million', notes: '+81%' },
    { year: '2012', passengers: '109.0 million', notes: '+58%' },
    { year: '2013', passengers: '137.1 million', notes: '+26%' },
    { year: '2014', passengers: '164.0 million', notes: '+20%' },
    { year: '2015', passengers: '178.1 million', notes: '+9%' },
    { year: '2016', passengers: '191.3 million', notes: '+7%' },
    { year: '2017', passengers: '200.1 million', notes: '+5%' },
    { year: '2018', passengers: '204.0 million', notes: '+2%' },
    { year: '2019', passengers: '203.0 million', notes: '-0.5%' },
    { year: '2020', passengers: '113.1 million', notes: '-44% (COVID-19)' },
    { year: '2021', passengers: '151.0 million', notes: '+34%' },
    { year: '2022', passengers: '225.1 million', notes: '+49%' },
    { year: '2023', passengers: '260.0 million', notes: '+16%' },
    { year: '2024', passengers: '275.4 million', notes: '+6%' },
    { year: '2025', passengers: '294.7 million', notes: '+7%' },
  ] as DubaiMetroRidershipHistory[],
  busiestStations2025: [
    { station: 'BurJuman', ridership: '17.8 million' },
    { station: 'Al Rigga', ridership: '13.8 million' },
    { station: 'Union', ridership: '13.6 million' },
    { station: 'Mall of the Emirates', ridership: '11.2 million' },
    { station: 'Burj Khalifa Dubai Mall', ridership: '10.9 million' },
    { station: 'Sharaf DG (Green Line)', ridership: '10.5 million' },
  ] as BusiestMetroStation[],
  rtaExpansionPlans: [
    { initiative: 'Bus/taxi lane corridors', target: '6 new corridors (13 km)', timeline: 'By 2026' },
    { initiative: 'Ridership increase target', target: '10%', timeline: '[source]' },
    { initiative: 'Bus punctuality improvement', target: '42%', timeline: '[source]' },
    { initiative: 'Journey time reduction', target: '41%', timeline: '[source]' },
    { initiative: 'Metro Blue Line progress', target: '12% complete', timeline: 'Current' },
    { initiative: 'Metro Blue Line launch', target: '2029', timeline: '[source]' },
    { initiative: 'Trackless tram study', target: '8 locations', timeline: '[source]' },
  ] as RTAExpansionInitiative[],
  metroFloodProtection: {
    barriers: [
      { station: 'Onpassive', barrierHeight: '1.8 metres', characteristic: 'Low-lying above-ground' },
      { station: 'Equiti', barrierHeight: '1.8 metres', characteristic: 'Rapid water accumulation zone' },
      { station: 'Mashreq', barrierHeight: '1.2 metres', characteristic: 'Strategic transport intersection' },
      { station: 'Energy', barrierHeight: '1.2 metres', characteristic: 'Critical infrastructure hub' },
    ] as MetroFloodBarrier[],
    technicalFeatures: [
      'Marine-grade aluminum construction with durable rubber seals',
      '"FloodWall" system redirects rising water from station entrances',
      'Rapid deployment via modular designs',
      'Integrated pumps for active water extraction',
      'Directional flow guides floodwater to designated drainage points',
    ] as FloodBarrierTechnicalFeature[],
  },
}

// ============================================================================
// SECTION F: ROAD TRANSPORT & TRAFFIC
// ============================================================================

export interface VehicleStatistic {
  metric: string
  value: string
  date?: string
  source?: string
}

export interface TrafficCongestionStatistic {
  metric: string
  value: string
  source?: string
}

export interface CongestionCause {
  cause: string
}

export interface BRTSystemMetric {
  metric: string
  value: string
  source?: string
}

export interface FourthFederalCorridorMetric {
  metric: string
  value: string
  source?: string
}

export interface EmotionalImpactEntry {
  sentiment: string
  percentage: string
}

export const roadTransport = {
  vehicleStatistics: [
    { metric: 'Dubai daytime vehicles', value: '3.5 million', source: 'Khaleej Times' },
    { metric: 'UAE registered vehicles', value: '4.56 million', date: 'mid-2025', source: 'Khaleej Times' },
    { metric: 'Annual vehicle increase', value: '~390,000', source: 'Khaleej Times' },
    { metric: 'Vehicle registration growth', value: '10%', date: '2023-2024', source: 'Khaleej Times' },
    { metric: 'Global average growth', value: '2-4%', source: 'Khaleej Times' },
  ] as VehicleStatistic[],
  trafficCongestionStatistics: [
    { metric: 'UAE drivers regularly experiencing traffic jams', value: '86%', source: 'Gulf News' },
    { metric: 'Notice worsening congestion vs last year', value: '80%', source: 'Gulf News' },
    { metric: 'Dubai drivers experiencing congestion', value: '91%', source: 'Gulf News' },
    { metric: 'Sharjah drivers experiencing congestion', value: '90%', source: 'Gulf News' },
    { metric: 'Dubai: see worsening conditions', value: '85%', source: 'Gulf News' },
    { metric: 'Depend daily on road transportation', value: '92%', source: 'Gulf News' },
    { metric: 'Primarily use own cars', value: '60%', source: 'Gulf News' },
    { metric: 'Drive alone (no passengers)', value: '51%', source: 'Gulf News' },
    { metric: 'Dubai drivers average time in traffic', value: '35 hours/year', source: 'Khaleej Times' },
  ] as TrafficCongestionStatistic[],
  congestionCauses: [
    'High solo driving rates',
    'Limited carpooling',
    'Heavy road dependency (92% daily reliance)',
    'Limited alternative transport use (only 8% use metro)',
    'Rapid population and economic growth',
    'Overlapping school/work hours',
  ] as CongestionCause[],
  brtSystem: {
    routes: '10 key routes linking Dubai-Sharjah-Ajman',
    dedicatedLanesTarget: '20 km',
    journeyTimeReduction: 'up to 60%',
    source: 'Khaleej Times',
  },
  fourthFederalCorridor: {
    length: '68 km',
    lanes: '6-8 per direction',
    cost: 'Dh6 billion',
    intersections: 10,
    flyovers: 4,
    source: 'Khaleej Times',
  },
  emotionalImpact: [
    { sentiment: 'Frustrated, stressed, or anxious', percentage: '47%' },
    { sentiment: 'Indifferent or calm', percentage: '29%' },
    { sentiment: 'Bored or restless', percentage: '19%' },
    { sentiment: 'Enjoy downtime', percentage: '5%' },
    { sentiment: 'Witness rude/aggressive behavior', percentage: '82%' },
  ] as EmotionalImpactEntry[],
  smartMobilityAI: {
    context: 'Dubai\'s rapid urban expansion driving steady vehicle increase',
    description: 'RTA using AI infrastructure and future mobility plans',
    note: 'Source: Times of India - detailed data not accessible',
  },
}

// ============================================================================
// SECTION G: COLD CHAIN LOGISTICS
// ============================================================================

export interface ColdChainMarketMetric {
  metric: string
  value: string
  source?: string
}

export interface ColdChainMarketDriver {
  driver: string
  details: string
}

export interface ColdChainProduct {
  product: string
}

export const coldChainLogistics = {
  marketSizeGrowth: {
    marketRevenue2025: 'USD 6,123.8 million',
    projectedRevenue2033: 'USD 28,878.8 million',
    cagr20262033: '21.7%',
    marketValue2027: '$4.8 billion',
    uaeGlobalMarketShare: '1.7%',
    source: 'Grand View Research',
  },
  marketSegmentation: [
    { segment: 'Storage segment', shareNotes: '60.83% revenue share (2025)', source: 'Grand View Research' },
    { segment: 'Transportation', shareNotes: 'Fastest growing segment', source: 'Grand View Research' },
    { segment: 'Dubai market share', shareNotes: '32.60% (2025)', source: 'Mordor Intelligence' },
    { segment: 'UAE cold chain CAGR', shareNotes: '5.84% (2026-2031)', source: 'Mordor Intelligence' },
  ],
  marketDrivers: [
    { driver: 'Import dependency', details: 'UAE relies heavily on imports for food and beverage requirements' },
    { driver: 'Population growth', details: 'Expanding population, growing middle class, rising disposable incomes' },
    { driver: 'Food security', details: 'Government initiatives for enhanced food security' },
    { driver: 'Economic diversification', details: 'Part of UAE Vision 2030' },
  ] as ColdChainMarketDriver[],
  marketStructure: {
    description: 'Highly fragmented market',
    playerCount: 'More than 90 cold storage and transportation players',
    leadingCompanies: 'Mohebi Logistics, FI',
    otherPlayers: 'GSL, INL',
  },
  productsTransported: [
    'Seafood',
    'Meat',
    'Fruits',
    'Dairy',
    'Pharmaceuticals and vaccines',
    'Processed foods',
    'Ice cream and frozen desserts',
  ] as ColdChainProduct[],
}

// ============================================================================
// SECTION H: MICRO-MOBILITY & SHARED MOBILITY
// ============================================================================

export interface MicroMobilityMarketMetric {
  metric: string
  value: string
  source?: string
}

export interface MicroMobilityGrowthDriver {
  driver: string
  details: string
}

export interface SharedMobilityMarketMetric {
  metric: string
  value: string
  source?: string
}

export interface SharedMobilityStatistic {
  metric: string
  value: string
  source?: string
}

export interface AbuDhabiMicroMobilityInfrastructure {
  category: string
  description: string
}

export interface MicroMobilityRegulation {
  regulation: string
}

export const microMobilitySharedMobility = {
  microMobilityMarket: {
    marketRevenue2024: 'USD 1,008.6 million',
    projectedRevenue2030: 'USD 2,014.8 million',
    cagr20252030: '12.2%',
    eBikeRevenueShare: '98.3% (2024)',
    eScooterNote: 'Fastest growing segment',
    uaeGlobalShare: '2.5% of global market (2024)',
    regionalPosition: 'Leads Middle East & Africa market',
    source: 'Grand View Research',
  },
  microMobilityGrowthDrivers: [
    { driver: 'Eco-consciousness', details: 'Rising environmental awareness among residents' },
    { driver: 'Urban density', details: 'Increasing urban density driving compact mobility solutions' },
    { driver: 'Traffic congestion', details: 'Growing congestion accelerating two-wheeler adoption' },
    { driver: 'Net Zero 2050', details: 'UAE government strategy supporting adoption' },
    { driver: 'Car-light lifestyles', details: 'Rise of car-light lifestyles and mixed-use developments' },
  ] as MicroMobilityGrowthDriver[],
  sharedMobilityMarket: {
    marketRevenue2023: 'USD 2.4 million',
    projectedRevenue2040: 'USD 12.2 million',
    cagr20242040: '10.1%',
    rideHailingShare: '58.33% (2023)',
    bikeSharingNote: 'Fastest growing segment',
    uaeGlobalShare: '0.9% (2023)',
    source: 'Grand View Research',
  },
  sharedMobilityStatistics: [
    { metric: 'Preference for renting over owning', value: '21% of UAE residents aged 18-50', source: 'Gulf News' },
    { metric: 'Car-sharing emissions reduction', value: '20-40%', source: 'Gulf News' },
    { metric: 'Electrified fleet emissions reduction', value: 'Up to 50% lower lifecycle emissions', source: 'Gulf News' },
  ] as SharedMobilityStatistic[],
  abuDhabiMicroMobilityInfrastructure: {
    classification: [
      { category: 'Shared Lane', description: 'Lanes/sidewalks for pedestrians and cyclists' },
      { category: 'Bike Lane', description: 'Painted lanes marked with bike symbols, arrows, signage' },
      { category: 'Bike Tracks', description: 'Off-road routes for all skill levels, away from traffic' },
      { category: 'Authorized Routes', description: 'Require special permits for group riding or roads exceeding 60 km/hr' },
    ] as AbuDhabiMicroMobilityInfrastructure[],
    keyRegulations: [
      'Priority to pedestrians',
      'Obey traffic laws and signage',
      'Ride with traffic flow (not against)',
      'Use designated tracks when available',
      'No bikes on roads exceeding 60 km/hr without permit',
      'Park in designated areas',
      'Stop at least 5m from school buses when warning signals activated',
      'Group rides require special AD Police permit',
    ] as MicroMobilityRegulation[],
  },
}

// ============================================================================
// SECTION I: TRANSPORT EMISSIONS & ELECTRIFICATION
// ============================================================================

export interface UAEEmissionsBySector {
  sector: string
  co2: string
  source?: string
}

export interface EmissionReductionTarget {
  target: string
  value: string
  timeline: string
  source?: string
}

export interface EVAdoptionStatistic {
  metric: string
  value: string
  date?: string
  source?: string
}

export interface EVTarget {
  target: string
  value: string
  timeline: string
  source?: string
}

export interface ChargingInfrastructureEntry {
  location: string
  stations: string
  timeline?: string
  source?: string
}

export interface SustainabilityInitiative {
  initiative: string
  details: string
}

export const transportEmissionsElectrification = {
  uaeEmissionsBySector: [
    { sector: 'Transport', co2: '39.0', source: 'Our World in Data' },
    { sector: 'Buildings', co2: '17.6', source: 'Our World in Data' },
    { sector: 'Waste', co2: '11.9', source: 'Our World in Data' },
    { sector: 'Industry', co2: '9.38', source: 'Our World in Data' },
    { sector: 'Agriculture', co2: '2.26', source: 'Our World in Data' },
    { sector: 'Total', co2: '218 million tonnes', source: '[derived]' },
  ] as UAEEmissionsBySector[],
  context: 'Transport sector represents ~16% of total UAE emissions. (2016 data showing 16% of 218 million tonnes = ~35 million tonnes - figures vary by year)',
  emissionReductionTargets: [
    { target: 'CO2 reduction', value: '309kt', timeline: 'by 2030', source: 'Aletihad' },
    { target: 'Oil equivalent savings', value: '150kt', timeline: 'by 2030', source: 'Aletihad' },
    { target: 'Net Zero', value: '2050', timeline: 'UAE target', source: 'Trade.gov' },
  ] as EmissionReductionTarget[],
  evAdoptionStatistics: [
    { metric: 'EV sales', value: '~7%', date: '2022', source: 'Aletihad' },
    { metric: 'EV sales', value: '25%+', date: 'end 2024', source: 'Aletihad' },
    { metric: 'Dubai EVs on road', value: '~39,000', date: 'Q1 2025', source: 'Trade.gov' },
    { metric: 'Abu Dhabi EVs', value: '10,013', date: 'March 2024', source: 'Trade.gov' },
    { metric: 'Abu Dhabi hybrid vehicles', value: '11,139', date: 'March 2024', source: 'Trade.gov' },
    { metric: 'Abu Dhabi CNG/Natural gas vehicles', value: '9,412', date: 'March 2024', source: 'Trade.gov' },
  ] as EVAdoptionStatistic[],
  evTargetsPlans: [
    { target: 'Vehicles to be electric', value: 'At least 10%', timeline: 'by 2030', source: 'Trade.gov' },
    { target: 'Dubai taxi fleet', value: '50% hybrid; 100% hybrid/EV', timeline: 'by 2027', source: 'Trade.gov' },
    { target: 'Dubai autonomous transport', value: '25% of total trips', timeline: 'by 2030', source: 'Trade.gov' },
    { target: 'Dubai autonomous taxis', value: '4,000 vehicles', timeline: 'by 2030', source: 'Trade.gov' },
    { target: 'Abu Dhabi EV penetration', value: '50%', timeline: 'by 2040', source: 'Trade.gov' },
  ] as EVTarget[],
  chargingInfrastructure: [
    { location: 'UAE total operational', stations: '620+', source: 'Trade.gov' },
    { location: 'Dubai (DEWA green charging)', stations: '382 installed', source: 'Trade.gov' },
    { location: 'Dubai target', stations: '1,000 green stations', timeline: 'by 2025', source: 'Trade.gov' },
    { location: 'Abu Dhabi (E2GO/ADNOC/TAQA)', stations: '70,000 planned', timeline: 'by 2030', source: 'Trade.gov' },
  ] as ChargingInfrastructureEntry[],
  sustainabilityInitiatives: [
    { initiative: 'SAVI Cluster', details: 'Smart and Autonomous Vehicle Industry Cluster, launched 2023 via Abu Dhabi Investment Office' },
    { initiative: 'UAEV network', details: 'Launched through EV Majlis platform' },
    { initiative: 'First hydrogen taxi', details: 'December 2019 (UAE launch)' },
    { initiative: 'Masdar green hydrogen target', details: '1 million tons annually by 2030' },
  ] as SustainabilityInitiative[],
}

// ============================================================================
// SECTION J: SANCTIONS & SMUGGLING
// ============================================================================

export interface OceanlinkMaritimeDetail {
  detail: string
  value: string
}

export interface IranianOilSmugglingFleetDetail {
  detail: string
  value: string
}

export interface RussianSanctionsEigerDetail {
  detail: string
  value: string
}

export interface RussianShadowFleetDubaiDetail {
  detail: string
  value: string
}

export interface PortSmugglingInterdiction {
  date: string
  location: string
  seized: string
  method: string
  details: string
  source?: string
}

export const sanctionsSmuggling = {
  iranianSanctionsOceanlink: {
    entity: 'Oceanlink Maritime (Dubai-based)',
    dateAdded: 'April 11, 2024',
    accusations: 'Facilitated shipment of Iranian commodities for Iran\'s Armed Forces General Staff and Ministry of Defence and Armed Forces Logistics',
    vessel: 'Hecate',
    commodityValue: 'US$100 million via ship-to-ship transfer',
    originVessel: 'National Iranian Tanker Corp\'s Dover',
    date: 'March 25, 2024',
    client: 'Sepehr Energy',
    vesselsBlacklisted: '12 total (4 LPG carriers, 2 MR product tankers, 4 Aframax crude tankers, 2 additional tankers Anthea and Boreas)',
    officialComment: 'Treasury undersecretary: targets "illicit funding streams enabling Iran\'s destabilising activities"',
  },
  iranianOilSmugglingFleet: {
    fleetSize: 'Nearly 30 vessels',
    uaeCompanies: 'Prime Tankers LLC, Glory International FZ-LLC',
    keyVesselNADIYA: 'Operated by Glory International, over 25,000 metric tons petroleum products in one operation',
    keyVesselAMOR: 'Transported over 20 million barrels (Jan 2022-Jan 2025)',
    guangshaTerminal: 'At least 13 million barrels Iranian crude (2021-2025)',
    flagStates: 'Panama (15 vessels), Barbados, Palau, Antigua and Barbuda, Comoros, Gambia, Cook Islands',
    shipToShipLocations: 'Waters off Iraq, Iran, UAE, Gulf of Oman',
    keyFigure: 'UAE-based shipping magnate Jugwinder Singh Brar',
  },
  russianSanctionsEiger: {
    entity: 'Eiger Shipping DMCC (Dubai-based)',
    sanctionDate: 'May 20, 2025 (EU 17th sanctions package)',
    connection: 'Shipping/chartering arm of Litasco Middle East (LME)',
    parentCompany: 'Lukoil (Russia\'s second largest oil producer)',
    violations: 'Transported Russian oil with AIS transponders off; inadequate liability insurance; unsafe maritime operations',
    shadowFleet: 'Enabled procurement of numerous vessels forming part of "shadow fleet"',
  },
  russianShadowFleetDubai: {
    totalVessels: '55 vessels from Russia\'s shadow fleet owned by UAE companies',
    singleDubaiCompany: 'Owns 24 vessels (currently on EU and British sanctions lists)',
    numberOfDubaiCompanies: '13 companies own the 55 sanctioned vessels',
    vesselEagleS: 'Owned by Dubai-based company; suspected of damaging Estlink 2 power cable (Finland-Estonia)',
    nameChanges: 'One-third of investigated vessels changed names during/after sanctions decisions',
    flagStateChanges: 'Over one-fifth switched flag states',
    flagOfConvenience: 'Barbados frequently used',
  },
  portSmugglingInterdictions: [
    {
      name: 'March 2025 Dubai Customs Seizure',
      date: 'March 25, 2025',
      location: 'Strategic seaport, Dubai',
      seized: '147.4 kg narcotics and psychotropic substances',
      method: 'Hidden in cargo, detected by advanced screening systems',
      confirmation: 'K9 unit assistance',
      quote: '"Their work is critical in safeguarding our land, sea and air borders" - Dr Abdulla Busenad',
    },
    {
      name: 'Arms Smuggling to Sudan',
      date: 'November 2025',
      location: 'Inside private aircraft at UAE airport',
      seized: '54.7 x 62mm Goryunov-type ammunition (military grade)',
      target: 'Sudan-bound shipment to Port Sudan Authority',
      namedIndividuals: 'Abdel Fattah Al-Burhan (Chairman, Sudanese Armed Forces\' Armament Committee), Yasser Al-Atta (Deputy Chairman), Othman Al-Zubair (Financial official, Port Sudan Authority)',
      charges: 'Arms trafficking, money laundering, covert brokerage, collection of undisclosed commissions',
      status: 'Suspects to be referred for trial (November 2025)',
    },
    {
      name: 'Fujairah Port Smuggling Attempt (2022)',
      date: 'March 3, 2022',
      location: 'Fujairah Port',
      seized: 'Banned dairy products',
      value: 'Dh25,239,000 (~Dh25 million)',
      quantity: '14 suspicious containers',
      bribeAttempted: 'Dh280,000 to Customs officer',
      perpetrators: 'Group of Arab and Asian origin',
    },
  ],
}

// ============================================================================
// SECTION K: CUSTOMS MODERNIZATION
// ============================================================================

export interface CustomsTariffDetail {
  detail: string
  value: string
}

export interface CustomsTariffPhase {
  phase: string
  period: string
  scope: string
}

export interface AbuDhabiDigitalCustomsMetric {
  metric: string
  value: string
  year?: string
}

export const customsModernization = {
  twelveDigitIntegratedCustomsTariff: {
    implementationDate: 'August 1, 2025',
    previousSystem: '8-digit tariff codes',
    newSystem: '12-digit tariff codes',
    tariffLinesBefore: '~7,800',
    tariffLinesAfter: '13,400+',
    transitionPeriod: '6 months',
    basis: '2022 Harmonised System (HS)',
    structure: '6-digit global HS + 2 GCC regional + 4 national classification digits',
    restrictions: '12-digit codes NOT for: Free Zone in/out (non-GCC), movements between Free Zones, transshipments, transit trade, local exports to Rest of World',
  },
  phasedRollout: [
    { phase: 'Phase 1', period: 'Aug 2025 - Feb 2026', scope: 'Flexibility period - either 8-digit or 12-digit for GCC trade' },
    { phase: 'Phase 2', period: 'Feb - Aug 2026', scope: '12-digit mandatory for GCC + Free Zone imports to local market' },
    { phase: 'Phase 3', period: 'Aug 2026 - Feb 2027', scope: 'Extended to imports from Rest of World' },
    { phase: 'Phase 4', period: 'From Feb 2027', scope: 'Includes temporary GCC-bound flows' },
  ] as CustomsTariffPhase[],
  abuDhabiDigitalCustoms: {
    preArrivalClearanceInbound: '72%',
    preArrivalClearanceOutbound: '85%',
    averageProcessingTime: '14 minutes',
    year: 2024,
    icosSystemLaunch: 'July 2026',
    strategicPlan: '2024-2028',
  },
  icosSystem: {
    description: 'AI-powered system',
    firstPhase: 'July 2026',
    feature: 'Blockchain-enabled digital trade corridors',
  },
}

// ============================================================================
// SECTION L: EXTREME WEATHER RESPONSE
// ============================================================================

export interface RTAWeatherResource {
  resource: string
  quantity: string
}

export interface RTAWeatherPartnerAgency {
  agency: string
}

export interface RTAWeatherResponseMechanism {
  mechanism: string
}

export interface RapidInterventionVehicleSpec {
  specification: string
  value: string
}

export interface RapidInterventionVehicleFeature {
  feature: string
}

export const extremeWeatherResponse = {
  rtaWeatherResponseResources: {
    tankers: '500+',
    pumpingUnits: 380,
    emergencyVehicles: 100,
    technicalStaff: '1,300',
  },
  partnerAgencies: [
    'Dubai Municipality',
    'Dubai Civil Defence',
    'Dubai Police',
    'Dubai Electricity and Water Authority (DEWA)',
    'Dubai Land Department',
    'Mohammed Bin Rashid Housing Establishment',
    'Developers',
  ] as RTAWeatherPartnerAgency[],
  responseMechanisms: [
    'Joint Weather Conditions Command Room',
    'Zone-based management system',
    'Smart systems for real-time monitoring',
    'Pre-event action plans',
    'Social media alerts',
  ] as RTAWeatherResponseMechanism[],
  rapidInterventionVehicle: {
    unveilingDate: 'Sunday, April 26, 2026',
    responseTimeImprovement: 'Over 75%',
    pumpingCapacity: '~60,000 litres/minute (~1,000 litres/second)',
    workingDepth: 'Up to 1.8 metres',
    pumpConfiguration: '4 pumps (combined)',
    equivalent: '10 conventional pumps or 25 water suction tankers',
  },
  rapidInterventionVehicleFeatures: [
    'Main pump with hydraulic operation from inside vehicle',
    'Three pump engines, four primary pumps',
    'Rainwater suction hoses, hose reel trailer',
    'Rescue boat for evacuation',
    'Thermal drone for field monitoring',
    'Backup generator',
    'Lighting tower',
  ] as RapidInterventionVehicleFeature[],
}

// ============================================================================
// SECTION M: LABOR CONDITIONS
// ============================================================================

export interface WorkHoursRegulation {
  regulation: string
  value: string
}

export interface EmiratisationRequirement {
  requirement: string
  details: string
}

export interface MigrantWorkerIssue {
  issue: string
  details: string
}

export interface HumanRightsWatchFinding {
  finding: string
}

export interface BlueCollarChallenge {
  challenge: string
  details: string
}

export interface TruckDriverVisaRequirement {
  requirement: string
  details: string
}

export interface TruckDriverTraining {
  training: string
}

export const laborConditions = {
  workHoursRegulations: [
    { regulation: 'Legal daily work hours', value: '8 hours/day' },
    { regulation: 'Hotel/restaurant employees', value: '9 hours/day' },
    { regulation: 'Ramadan reduction', value: '2 hours daily for Muslim employees' },
    { regulation: 'Retirement age', value: '60 years' },
    { regulation: 'Contract terms', value: 'Maximum 4-year renewable contracts' },
    { regulation: 'Trade unions', value: 'Prohibited' },
  ] as WorkHoursRegulation[],
  emiratisization: [
    { requirement: 'Social security (employer)', details: '12.5% for UAE/GCC nationals only' },
    { requirement: 'Social security (employee)', details: '5% for UAE/GCC nationals only' },
    { requirement: 'Minimum wage (UAE nationals)', details: 'AED 6,000/month (effective January 2026)' },
    { requirement: 'Private sector requirement', details: 'Companies with 20-49 workers must hire at least one UAE citizen by 2024' },
  ] as EmiratisationRequirement[],
  migrantWorkerIssues: [
    { issue: 'Working conditions', details: 'Forced to work in unsafe, unclean environments' },
    { issue: 'Passport confiscation', details: 'Employers confiscate passports' },
    { issue: 'Payment issues', details: 'Poor pay, wages often not paid on time' },
    { issue: 'Work permit failures', details: 'Failure to renew work permits' },
    { issue: 'Benefits denial', details: 'Denial of end-of-service benefits' },
    { issue: 'Threats', details: 'Threatened with summary arrest and deportation for complaining' },
    { issue: 'Violence risk', details: 'Risk of physical violence; "working under the menace of penalty"' },
    { issue: 'Health impacts', details: 'Physically intensive, risky jobs leading to long-term health harms' },
  ] as MigrantWorkerIssue[],
  suggestedSolutions: {
    author: 'Osea Giuntella',
    recommendations: [
      'More open immigration policies allowing balanced entry of diverse skill levels',
      'Educate immigrant workers about job-related risks',
      'Improve overall job quality for migrant employees',
    ],
  },
  humanRightsWatchFindingsCOP28: [
    'Unpaid overtime',
    'Arbitrary deductions',
    'Delayed or withheld wages',
  ] as HumanRightsWatchFinding[],
  blueCollarChallenges: [
    { challenge: 'Climate', details: 'Harsh working conditions due to extreme heat' },
    { challenge: 'Hours', details: 'Long working hours' },
    { challenge: 'Hiring', details: 'Blue collar hiring challenges in logistics and transport' },
  ] as BlueCollarChallenge[],
  truckDriverSpecifics: {
    visaRequirements: [
      { requirement: 'Multi-entry visa valid for 30, 60, or 90 days', details: 'Requires sponsorship' },
      { requirement: 'UAE driving license required', details: '' },
      { requirement: '1 year experience preferred', details: '' },
    ] as TruckDriverVisaRequirement[],
    salaryRange: {
      approximate: '1,300 AED/month with bonuses',
      source: 'beBee job listing',
    },
    trainingAvailable: [
      'Driver training for road safety, fuel economy, environmental impact',
      'Industry training: Health & Safety, First Aid, compliance',
      'Product familiarity and technology training',
      'Driver eco training with 24/7 performance monitoring',
      'Train the trainer programs',
      'Source: Road Safety UAE',
    ] as TruckDriverTraining[],
  },
}

// ============================================================================
// SECTION N: E-COMMERCE LOGISTICS
// ============================================================================

export interface EcommerceGrowthDriver {
  driver: string
  details: string
}

export interface ModernWarehouseFeature {
  feature: string
}

export interface LastMileDeliveryFeature {
  feature: string
}

export interface TechnologyAdoptionItem {
  item: string
}

export const ecommerceLogistics = {
  marketOverview: {
    description: 'UAE e-commerce logistics market anticipated to grow over forecast period (2022-2027)',
    pandemicImpact: 'Pandemic accelerated adoption with shift from C2C to B2C',
    internetPenetration: 'Internet penetration increased',
    consumerBehavior: 'Consumers accustomed to e-commerce post-pandemic',
  },
  growthDrivers: [
    { driver: 'Outsourcing', details: 'Online merchants increasingly outsourcing logistics for error-free, fast delivery' },
    { driver: 'Lifestyle changes', details: 'Changing consumer lifestyles fueling demand' },
    { driver: 'Technology', details: 'Cloud computing, mobile applications, social networking creating opportunities' },
    { driver: 'Warehousing', details: 'Rising warehousing services provided by e-commerce logistics companies' },
    { driver: 'Domestic e-commerce', details: 'Home delivery services gaining prominence' },
    { driver: 'Households', details: 'Busy dual-income households preferring online shopping' },
  ] as EcommerceGrowthDriver[],
  infrastructureCapabilities: {
    modernWarehouseFeatures: [
      'Smart inventory management systems',
      'Automated order picking and packing',
      'Temperature-controlled storage',
      'Real-time stock tracking',
      'Distribution coordination',
    ] as ModernWarehouseFeature[],
    lastMileDelivery: [
      'Same-day or next-day delivery expectations',
      'Smart route optimization technology',
      'Real-time package tracking',
      'Efficient courier fleets',
      'Micro-distribution hubs within cities',
    ] as LastMileDeliveryFeature[],
  },
  technologyAdoption: [
    'IoT enabling real-time parcel tracking',
    'Integration with Transportation Management Software (TMS)',
    'Electric delivery vehicles for greener systems',
    'Emerging drone deliveries',
    'AI-powered automated systems',
    'Contactless deliveries (pandemic-driven)',
  ] as TechnologyAdoptionItem[],
}

// ============================================================================
// SECTION O: INFRASTRUCTURE MARKET
// ============================================================================

export interface InfrastructureMarketMetric {
  metric: string
  value: string
  source?: string
}

export interface InfrastructureMarketSegment {
  segment: string
  share: string
  growth?: string
}

export interface InfrastructureGeographicDistribution {
  region: string
  shareGrowth: string
}

export interface MajorInfrastructureProject {
  project: string
  value: string
  status?: string
}

export const infrastructureMarket = {
  marketSizeGrowth: {
    marketSize2025: 'USD 15.82 billion',
    forecast2026: 'USD 16.71 billion',
    projected2031: 'USD 21.96 billion',
    cagr20262031: '5.62%',
    source: 'Mordor Intelligence',
  },
  marketSegmentation: [
    { segment: 'Transportation', share: '38.02% (largest)', growth: '[source]' },
    { segment: 'Extraction', share: '[remaining]', growth: 'Fastest at 7.88% CAGR' },
    { segment: 'New construction', share: '78.86%', growth: '[source]' },
    { segment: 'Renovation', share: '[remaining]', growth: '7.61% CAGR' },
    { segment: 'Public investment', share: '89.05%', growth: '[source]' },
    { segment: 'Private investment', share: '[remaining]', growth: '8.42% CAGR' },
  ] as InfrastructureMarketSegment[],
  geographicDistribution: [
    { region: 'Dubai', shareGrowth: '37.12% of spending (2025)' },
    { region: 'Abu Dhabi', shareGrowth: 'Fastest growth at 7.32% CAGR (2026-2031)' },
  ] as InfrastructureGeographicDistribution[],
  majorProjects: [
    { project: 'Al Maktoum International Airport rebuild', value: '$35 billion', status: 'Approved 2024' },
    { project: 'Ruwais LNG complex', value: '$5.5 billion' },
    { project: 'Etihad Rail passenger service', value: '[part of rail program]', status: '2026 launch' },
    { project: 'Mohammed bin Rashid Al Maktoum Solar Park', value: '5 GW target' },
    { project: 'ADNOC gas expansion', value: '$15 billion' },
    { project: 'Hail & Ghasha gas', value: '$9 billion' },
  ] as MajorInfrastructureProject[],
  visionStrategy: [
    'UAE Vision 2030 and beyond',
    'Emphasis on digital solutions and sustainable design',
    'Major investments in smart city initiatives (particularly Dubai)',
    'Diversification away from oil dependence through tourism and technology',
    'Advanced desalination technologies addressing water scarcity',
  ],
}

// ============================================================================
// SECTION P: UAE AS GLOBAL LOGISTICS HUB
// ============================================================================

export interface StrategicPositioningFactor {
  factor: string
  details: string
}

export interface DubaiLogisticsHubElement {
  element: string
  details: string
}

export const globalLogisticsHub = {
  strategicPositioning: [
    { factor: 'Geographic position', details: 'Between Asia, Europe, Africa' },
    { factor: 'Consumer access', details: '2.5 billion consumers within reach' },
    { factor: 'Trade connections', details: 'Extensive trade corridors' },
  ] as StrategicPositioningFactor[],
  dubaiLogisticsHub: {
    status: 'World-leading hub for logistics, trade, re-export',
    infrastructure: 'Extensive investment in ports and road infrastructure',
    tradeFacilitation: 'Smart corridor systems',
  },
  globalSupplyChainPosition: [
    'UAE cemented role as global hub for food supply chains',
    'Strategic investments in technology and supportive policies',
    'Source: WAM',
  ],
  masdarCityGreenHydrogen: {
    target: 'Masdar targets 1 million tons green hydrogen annually by 2030',
  },
}

// ============================================================================
// SECTION Q: ENTITIES & LEADERSHIP
// ============================================================================

export interface GovernmentBody {
  body: string
  role: string
}

export interface KeyLeadershipEntry {
  organization: string
  position: string
  name: string
}

export const entitiesLeadership = {
  governmentBodies: [
    { body: 'GCAA', role: 'Federal body regulating civil aviation, air navigation services' },
    { body: 'RTA (Roads & Transport Authority)', role: 'Dubai transport authority' },
    { body: 'Dubai Customs', role: 'Customs enforcement and trade facilitation' },
    { body: 'MOEI (Ministry of Energy and Infrastructure)', role: 'Infrastructure oversight' },
    { body: 'Abu Dhabi Investment Office', role: 'Investment promotions including SAVI Cluster' },
  ] as GovernmentBody[],
  keyLeadership: [
    { organization: 'Etihad Rail', position: 'Chairman', name: 'Sheikh Theyab bin Mohamed bin Zayed Al Nahyan' },
    { organization: 'Etihad Rail', position: 'CEO', name: 'Shadi Malak' },
    { organization: 'DP World', position: 'Group CEO', name: 'Yuvraj Narayan' },
    { organization: 'DP World', position: 'Chairman', name: 'Essa Kazim' },
    { organization: 'Dubai Customs', position: 'Director General', name: 'Dr Abdulla Busenad' },
  ] as KeyLeadershipEntry[],
}

// ============================================================================
// SECTION R: SOURCES SUMMARY TABLE
// ============================================================================

export interface SourceEntry {
  url: string
  dataExtracted: string
  status: string
}

export const sourcesSummary = {
  sourceEntries: [
    { url: 'https://www.imarcgroup.com/uae-logistics-market', dataExtracted: 'Market size, segments, CAGR, key players', status: 'OK' },
    { url: 'https://www.linkedin.com/pulse/uae-logistics-market-meenakshi-rawt-0ptke', dataExtracted: 'Trade diversification, technology innovation', status: '403 Error' },
    { url: 'https://uaesupplychain.com/', dataExtracted: 'UAE Logistics Integration Council, Etihad Rail terminal', status: 'OK' },
    { url: 'https://en.wikipedia.org/wiki/DP_World', dataExtracted: 'Full corporate data, financials, acquisitions', status: 'OK' },
    { url: 'https://www.dpworld.com/en', dataExtracted: 'Smart end-to-end supply chain, global presence', status: 'OK' },
    { url: 'https://en.wikipedia.org/wiki/Dubai_Metro', dataExtracted: 'Full system details, ridership history', status: 'OK' },
    { url: 'https://www.visitdubai.com/en/articles/guide-to-dubai-metro', dataExtracted: 'Operating hours', status: 'OK' },
    { url: 'https://www.etihadrail.ae/en', dataExtracted: 'Network overview, Oman Rail JV, Hafeet Rail', status: 'OK' },
    { url: 'https://gulfnews.com/uae/etihad-rail-progress-report-on-track-for-a-2026-launch-1.500425732', dataExtracted: 'Freight volumes, leadership, 2026 launch', status: 'OK' },
    { url: 'https://www.timeoutdubai.com/news/uae-etihad-stations-location-full-list', dataExtracted: '11 passenger stations, 2026 launch', status: 'Timeout' },
    { url: 'https://www.enr.com/articles/62552-uae-signs-first-contract-for-8b-high-speed-rail-project', dataExtracted: '$8B high-speed rail, 10-station Abu Dhabi network', status: 'OK' },
    { url: 'https://www.mirad.ae/en/news/195-dubai-public-transport-ridership-hits-802-million-in-2025', dataExtracted: '802.1M ridership, mode share', status: 'OK' },
    { url: 'https://gulfnews.com/uae/transport/traffic-pressures-push-dubai-public-transport-ridership-past-802-million-1.500443948', dataExtracted: 'Ridership details', status: 'OK' },
    { url: 'https://www.mediaoffice.ae/en/news/2026/february/15-02/rta-records-802-riders-in-dubai-2025', dataExtracted: 'RTA records', status: 'OK' },
    { url: 'https://www.khaleejtimes.com/uae/uae-traffic-new-plans-ease-congestion-daily-commute', dataExtracted: 'Vehicle numbers, BRT, Fourth Federal Corridor', status: 'OK' },
    { url: 'https://gulfnews.com/uae/transport/traffic-congestion-uae-motorists-grapple-with-stress-and-frustration-1.500198786', dataExtracted: '86% congestion, causes', status: 'OK' },
    { url: 'https://timesofindia.indiatimes.com/world/middle-east/dubais-bold-traffic-relief-strategy-how-rta-is-keeping-the-uae-emirate-moving-ai-infrastructure-and-future-mobility-plans/articleshow/128143603.cms', dataExtracted: 'RTA AI, future mobility', status: 'Blocked' },
    { url: 'https://www.adportsgroup.com/en/news-and-media/2023/05/31/khalifa-port-is-ranked-the-3rd-most-efficient-container-port-globally', dataExtracted: '3rd global ranking, CPPI', status: 'OK' },
    { url: 'https://www.wam.ae/en/article/15mqir4-uae-advances-global-maritime-power-through-system', dataExtracted: '21M TEUs', status: 'No data' },
    { url: 'https://www.facebook.com/GulfNews.UAE/posts/10-gulf-container-ports-were-ranked-among-the-70-most-efficient-ports-globally-i/1031116839046695', dataExtracted: 'Gulf ports efficiency', status: 'OK' },
    { url: 'https://www.grandviewresearch.com/horizon/outlook/cold-chain-market/uae', dataExtracted: '$6.1B revenue, 21.7% CAGR', status: 'OK' },
    { url: 'https://finance.yahoo.com/news/uae-cools-down-4-8-103000738.html', dataExtracted: '$4.8B by 2027, drivers', status: 'OK' },
    { url: 'https://www.kenresearch.com/industry-reports/uae-cold-chain-industry', dataExtracted: 'Fragmentation, Mohebi, FI', status: 'OK' },
    { url: 'https://www.mordorintelligence.com/industry-reports/uae-cold-chain-logistics-market', dataExtracted: 'Dubai 32.6% share, 5.84% CAGR', status: 'OK' },
    { url: 'https://www.grandviewresearch.com/horizon/outlook/micro-mobility-market/uae', dataExtracted: '$1B revenue, 12.2% CAGR', status: 'OK' },
    { url: 'https://www.khaleejtimes.com/business/uae-micromobility-market-to-reach-20148-million-by-2030', dataExtracted: 'Growth drivers', status: 'OK' },
    { url: 'https://admobility.gov.ae/en/micromobility', dataExtracted: 'AD bike infrastructure classification', status: 'OK' },
    { url: 'https://www.grandviewresearch.com/horizon/outlook/shared-mobility-market/uae', dataExtracted: '$2.4M revenue, 10.1% CAGR', status: 'OK' },
    { url: 'https://gulfnews.com/business/analysis/shared-mobility-and-future-of-sustainable-ban-transport-in-uae-1.500444924', dataExtracted: 'H1 2025 ridership, 21% prefer renting', status: 'OK' },
    { url: 'https://ourworldindata.org/profile/co2/united-arab-emirates', dataExtracted: '39M tonnes transport emissions', status: 'OK' },
    { url: 'https://en.aletihad.ae/news/uae/4568448/uae-on-track-to-cut-over-300kt-carbon-emissions-in-transport', dataExtracted: '309kt CO2 target, EVs', status: 'OK' },
    { url: 'https://www.sciencedirect.com/science/article/pii/S0360319923018566', dataExtracted: 'Transport 16% of 218M tonnes', status: 'OK' },
    { url: 'https://www.trade.gov/country-commercial-guides/united-arab-emirates-smart-and-sustainable-mobility', dataExtracted: 'Net Zero 2050, EV targets, charging', status: 'OK' },
    { url: 'https://www.rivieramm.com/news-content-hub/news-content-hub/us-adds-uae-ship-manager-to-iran-sanctions-list-80324', dataExtracted: 'Oceanlink sanctions', status: 'OK' },
    { url: 'https://gcaptain.com/u-s-treasury-exposes-uae-based-iranian-oil-smuggling-fleet-sanctions-30-tankers/', dataExtracted: '30 vessels, Prime Tankers, Glory International', status: 'OK' },
    { url: 'https://www.reuters.com/world/us-issues-fresh-iran-related-sanctions-treasury-website-says-2025-04-01/', dataExtracted: '[Not accessible]', status: 'Blocked' },
    { url: 'https://www.mees.com/2025/5/23/economics-finance/eu-targets-uae-based-russian-firm-with-fresh-sanctions/09d9c470-37cc-11f0-aec7-43f30c01e585', dataExtracted: 'Eiger Shipping DMCC sanctions', status: 'OK' },
    { url: 'https://www.lloydslist.com/LL1144546/UAEs-extended-links-to-Russia-supports-sanctions-circumvention', dataExtracted: 'Russia-linked traders', status: '403' },
    { url: 'https://euromaidanpress.com/2025/01/12/yle-dubai-firms-own-55-vessels-in-russian-shadow-fleet/', dataExtracted: '55 vessels, 24 by single firm', status: 'OK' },
    { url: 'https://mediaoffice.ae/en/news/2025/march/25-03/dubai-customs-thwarts-major-smuggling-attempt-at-strategic-seaport', dataExtracted: '147.4 kg narcotics', status: 'OK' },
    { url: 'https://www.thenationalnews.com/news/uae/2025/03/25/dubai-customs-officers-foil-plot-to-smuggle-150kg-of-drugs-into-port/', dataExtracted: '150kg drugs March 2025', status: 'OK' },
    { url: 'https://www.khaleejtimes.com/uae/uae-to-charge-suspects-after-foiling-sudan-bound-arms-smuggling-attempt', dataExtracted: 'Sudan arms smuggling', status: 'OK' },
    { url: 'https://gulfnews.com/uae/crime/uae-attempt-to-smuggle-goods-worth-dh25-million-foiled-at-fujairah-port-1.86145101', dataExtracted: 'Dh25M Fujairah seizure', status: 'OK' },
    { url: 'https://www.kuehne-nagel.com/market-insights/customs-clearance/uae-12-digit-integrated-customs-tarif', dataExtracted: '12-digit tariff details', status: 'OK' },
    { url: 'https://www.beststartupstory.com/bss-wire/abu-dhabi-digital-customs-modernization-pre-arrival-clearance/', dataExtracted: '72% pre-arrival, 14 min processing', status: 'OK' },
    { url: 'https://www.linkedin.com/posts/zaki-rajput_customsupdate-uaecustoms-gcctrade-activity-7355555703987539970-jxQk', dataExtracted: '12-digit tariff August 2025', status: 'OK' },
    { url: 'https://gulfnews.com/uae/transport/how-dubais-rta-is-tackling-unstable-weather-smarter-planning-faster-response-safer-roads-1.500486894', dataExtracted: 'RTA weather response resources', status: 'OK' },
    { url: 'https://www.khaleejtimes.com/uae/transport/dubai-rapid-intervention-vehicle-tackle-flooding-heavy-rain-emergencies', dataExtracted: 'Rapid intervention vehicle specs', status: 'OK' },
    { url: 'https://www.arabwheels.ae/blog/dubai-metro-flood-barriers-rta-update/', dataExtracted: 'Flood barriers at 4 stations', status: 'OK' },
    { url: 'https://www.palmobserver.com/dubai-data/dubai-aviation-hub/', dataExtracted: 'Open skies, Emirates 250+ aircraft', status: 'OK' },
    { url: 'https://www.linkedin.com/pulse/worlds-airport-uaes-journey-aviation-supremacy-2035-shiyas-asaf-ali-piyyc', dataExtracted: '8-pillar strategy, 2035 goal', status: 'OK' },
    { url: 'https://dubaipress.ae/business/the-uae-aviation-industry/', dataExtracted: 'Emirates 50-60% DXB traffic', status: 'OK' },
    { url: 'https://canso.org/member/uae-gcaa/', dataExtracted: 'GCAA role, airspace', status: 'OK' },
    { url: 'https://www.icao.int/sites/default/files/APAC/Meetings/2025/2025%20APACMID%20ATFM%20FFICE%20and%20MID%20ATFM%20TF9/5-Presentations/PPT-3.1-5-UAE-Experience-Implementing-ATFM-GCAA.pdf', dataExtracted: 'ATFM ICAO roadmap', status: 'Binary PDF' },
    { url: 'https://www.gcaa.gov.ae/en/home', dataExtracted: 'GCAA federal regulator', status: 'OK' },
    { url: 'https://centreforaviation.com/news/uae-gcaa-air-traffic-in-the-uae-is-witnessing-a-gradual-return-to-its-normal-operational-levels-1351880', dataExtracted: 'March 2026 disruption recovery', status: 'OK' },
    { url: 'https://www.sundusglobal.com/post/blue-collar-hiring-woes-in-the-logistics-and-transportation-sector', dataExtracted: 'Blue collar challenges', status: '403' },
    { url: 'https://wol.iza.org/news/migrants-in-uae-suffer-dangerous-working-conditions', dataExtracted: 'Migrant worker conditions', status: 'OK' },
    { url: 'https://www.hrw.org/news/2023/12/03/questions-and-answers-migrant-worker-abuses-in-uae-and-cop28', dataExtracted: 'HRW documented abuses', status: 'OK' },
    { url: 'https://www.lloydsbanktrade.com/en/market-potential/united-arab-emirates/work-conditions', dataExtracted: 'Work hours, retirement, Emiratisation', status: 'OK' },
    { url: 'https://www.roadsafetyuae.com/truck-driver-training/', dataExtracted: 'Truck driver training programs', status: 'OK' },
    { url: 'https://timesofindia.indiatimes.com/world/middle-east/uae-truck-drivers-visa-whos-eligible-required-documents-fees-and-how-to-apply/articleshow/124212492.cms', dataExtracted: 'Truck driver visa', status: 'Blocked' },
    { url: 'https://bebee.com/ae/jobs/heavy-truck-driver-safe-hauls-rewards-in-uae-india-abroad-ras-al-khaimah--jobted-4a11381de2e9e0f66ccbaf07f987eb33', dataExtracted: 'Salary 1,300 AED, requirements', status: 'OK' },
    { url: 'https://www.investindubai.gov.ae/en/insights-and-resources/news-insights/dubai-logistics-hub-role-ports-road-infrastructure', dataExtracted: 'Dubai logistics hub', status: '403' },
    { url: 'https://tlimagazine.com/news/the-uaes-path-to-becoming-a-global-logistics-hub/', dataExtracted: 'Strategic investments', status: 'ECONNREFUSED' },
    { url: 'https://www.wam.ae/en/article/1728iki-uae-strengthens-position-global-supply-chain-hub', dataExtracted: 'Food supply chains', status: '403' },
    { url: 'https://paramountskycargo.com/why-the-uae-is-a-global-logistics-powerhouse/', dataExtracted: 'Geographic position, 2.5B consumers', status: 'OK' },
    { url: 'https://www.clarionshipping.com/blog/how-uae-logistics-infrastructure-is-powering-the-next-wave-of-ecommerce-growth/', dataExtracted: 'E-commerce infrastructure', status: 'OK' },
    { url: 'https://www.researchandmarkets.com/reports/5658704/uae-e-commerce-logistics-market-overview-2027', dataExtracted: 'E-commerce market forecast', status: 'OK' },
    { url: 'https://www.turnerandtownsend.com/insights/the-future-of-uae-infrastructure/', dataExtracted: 'Vision 2030, digital, sustainable', status: 'ECONNREFUSED' },
    { url: 'https://www.moei.gov.ae/en/home', dataExtracted: 'Ministry of Energy and Infrastructure', status: 'ECONNREFUSED' },
    { url: 'https://www.mordorintelligence.com/industry-reports/infrastructure-sector-in-uae', dataExtracted: '$15.82B market, major projects', status: 'OK' },
    { url: 'https://www.etihadcargo.com/en/news', dataExtracted: '8% revenue growth 2025', status: '403' },
    { url: 'https://www.etihadcargo.com/en/configurations', dataExtracted: 'Abu Dhabi hub', status: '403' },
    { url: 'https://www.skycargo.com/', dataExtracted: 'Emirates SkyCargo services', status: 'No data' },
    { url: 'https://en.wikipedia.org/wiki/Emirates_SkyCargo', dataExtracted: 'Al Maktoum hub, 26 cargo destinations', status: 'OK' },
  ] as SourceEntry[],
}

// ============================================================================
// SECTION S: SYNTHESIZED FINDINGS
// ============================================================================

export interface SynthesizedFinding {
  findingKey: string
  summary: string
}

export const synthesizedFindings = {
  findings: [
    { findingKey: 'S1', summary: 'The UAE logistics market is valued at USD 57.6 billion (2025) and projected to reach USD 96.3 billion by 2034, growing at 5.58% CAGR. Roadways dominate transportation mode (45.8%), with 3PL services representing the largest segment (49.6%). Dubai holds 38.7% market share by emirate. Key drivers include strategic location connecting Asia/Europe/Africa, infrastructure investments, and trade diversification policies.' },
    { findingKey: 'S2', summary: 'UAE ports handled approximately 21 million TEUs in 2023. Khalifa Port ranked 3rd globally in container port efficiency (2022), up from 5th in 2021. Jebel Ali Port remains dominant, handling ~73% of UAE food and beverage trade by value. DP World manages 82 terminals globally, processing 70 million containers annually across 40 countries, representing ~10% of global container traffic.' },
    { findingKey: 'S3', summary: 'Etihad Rail freight services launched February 2023, with passenger operations scheduled for 2026. The 900km network will connect 11 UAE cities. In 2025, freight operations moved over 6.5 million tonnes of sulphur and 10 million tonnes of aggregates. The Oman-UAE Hafeet Rail link is 40% complete. A $8 billion high-speed rail contract was signed. Cargo capacity target is 60 million tonnes by 2030.' },
    { findingKey: 'S4', summary: 'Dubai public transport ridership reached 802.1 million in 2025 (+7.4% YoY), with daily average of 2.2 million riders. Dubai Metro carries 37% of all public transport users (294.7 million riders annually). Mode share: Metro 37%, Taxis 26%, Buses 25%, Shared Mobility 9%, Marine 2%, Tram 1%. RTA plans 10% ridership increase, 42% better punctuality, 41% journey time reduction through bus lane expansion.' },
    { findingKey: 'S5', summary: 'Dubai has 3.5 million daytime vehicles; UAE total 4.56 million registered vehicles (mid-2025). Annual growth of 10% in vehicle registrations exceeds global average of 2-4%. 86% of UAE drivers regularly experience traffic jams. Dubai drivers spend average 35 hours/year stuck in traffic. Solutions include 20km BRT dedicated lanes (up to 60% journey time reduction), Fourth Federal Corridor (68km, Dh6 billion), and smart mobility initiatives.' },
    { findingKey: 'S6', summary: 'UAE cold chain market: USD 6.1 billion (2025) to USD 28.9 billion by 2033 (21.7% CAGR). Dubai holds 32.6% market share. E-commerce logistics growing with demand for faster delivery, micro-distribution hubs, and smart route optimization. UAE positioned as global e-commerce hub with advanced warehousing and last-mile delivery networks.' },
    { findingKey: 'S7', summary: 'UAE micro-mobility market: USD 1 billion (2024) to USD 2 billion by 2030 (12.2% CAGR). Shared mobility market: USD 2.4 million (2023) to USD 12.2 million by 2040 (10.1% CAGR). Ride hailing dominates (58% share). 21% of UAE residents aged 18-50 prefer renting over owning vehicles. Car-sharing reduces emissions by 20-40%. Abu Dhabi has 4-tier micro-mobility infrastructure classification.' },
    { findingKey: 'S8', summary: 'UAE transport sector: 39 million tonnes CO2 annually. Target: 309kt CO2 reduction by 2030. EV sales surged from 7% (2022) to 25%+ (2024). Dubai taxi fleet: 50% hybrid, targeting 100% by 2027. Dubai aims for 25% autonomous transport by 2030 and 4,000 autonomous taxis. Abu Dhabi target: 50% EV penetration by 2040. 620+ EV charging stations operational; Dubai targeting 1,000 by 2025; Abu Dhabi planning 70,000 by 2030.' },
    { findingKey: 'S9', summary: 'US and EU have sanctioned multiple UAE-based shipping entities for Iranian and Russian sanctions violations. Oceanlink Maritime added to US sanctions (April 2024). Eiger Shipping DMCC sanctioned by EU (May 2025). Nearly 30 vessels in Iranian oil smuggling fleet operated from UAE. Dubai firms identified owning 55 vessels in Russian shadow fleet (single Dubai company owns 24 sanctioned ships). Dubai Customs seized 147.4kg narcotics in March 2025 smuggling interdiction. Arms smuggling to Sudan disrupted with military-grade ammunition seized.' },
    { findingKey: 'S10', summary: 'UAE transitioning from 8-digit to 12-digit Integrated Customs Tariff (August 2025). Expanded from ~7,800 to 13,400+ tariff lines. Six-month transition period with phased rollout. Abu Dhabi: 72% pre-arrival clearance (2024), 85% outbound. AI-powered ICOS system launching July 2026. Average clearance time: 14 minutes. Blockchain-enabled digital trade corridors in development.' },
    { findingKey: 'S11', summary: 'Dubai RTA deployed 500+ tankers, 380 pumping units, 100 emergency vehicles, 1,300 technical staff for weather response. Rapid intervention vehicle unveiled April 2026 with 75%+ faster response time, 60,000 litres/minute pumping capacity, 1.8m working depth. Flood barriers installed at 4 key Metro stations (Onpassive, Equiti, Mashreq, Energy) with heights up to 1.8 metres. Real-time monitoring and zone-based response systems implemented.' },
    { findingKey: 'S12', summary: 'Dubai International Airport: Emirates handles 50-60% of passenger traffic with 250+ aircraft. UAE open skies policy enabled hub growth. 80% of world population within 8 hours flying time. GCAA oversees one of world\'s busiest airspaces. ATFM roadmap aligned with ICAO standards. UAE positioned to become global aviation hub by 2035 with $35B DWC expansion. Emirates SkyCargo operates from Al Maktoum with 26 cargo-only destinations and access to 87 total destinations.' },
    { findingKey: 'S13', summary: 'Migrant workers face documented issues: unpaid overtime, arbitrary deductions, delayed wages, passport confiscation. Legal work hours: 8/day (9 for hotels/restaurants). Retirement age: 60. Private sector with 20+ workers must hire UAE nationals. Truck driver visa: multi-entry 30-90 days, requires sponsorship. Blue collar workers face harsh conditions due to extreme climate. HRW documented abuses during COP28.' },
  ] as SynthesizedFinding[],
}

// ============================================================================
// SECTION T: VERIFICATION STATUS
// ============================================================================

export interface VerificationStatusItem {
  item: string
  status: boolean | string
}

export const verificationStatus = {
  items: [
    { item: 'All queries in file attempted', status: true },
    { item: 'All available pages fetched', status: true },
    { item: 'All data extracted from fetched pages', status: true },
    { item: 'All sources documented with URLs', status: true },
    { item: 'No fabrication detected - all data sourced from actual fetched content', status: true },
    { item: 'Quantitative data verified where overlapping sources confirmed figures', status: true },
    { item: 'Complete Arabic query coverage (limited by search API rate limits)', status: false },
    { item: 'Some pages returned rate limit errors (Jebel Ali Port, Khalifa Port, some rail queries)', status: false },
    { item: 'File enriched with comprehensive structured data from all accessible URL content', status: true },
  ] as VerificationStatusItem[],
}

// ============================================================================
// SECTION U: NOTES
// ============================================================================

export interface ResearchNote {
  note: string
}

export const researchNotes = {
  notes: [
    'Some queries encountered rate limiting on the mmx search API, affecting comprehensive Arabic-language query coverage',
    'Some web pages returned 403 errors or were blocked',
    'Reuters pages could not be fetched',
    'Statista premium content not accessible (numbers redacted)',
    'Multiple sources confirmed key figures (ridership numbers, market sizes) providing verification',
    'Binary PDF content (ICAO ATFM document) not extractable',
    'Enrichment completed with all accessible URL content fully parsed and structured',
  ] as ResearchNote[],
}

// ============================================================================
// SECTION V: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevanceSectionEntry {
  section: string
  uaeRelevance: string
  strategicImportance: string
}

export const uaeRelevanceAssessment = {
  overallAssessment: 'CRITICAL NATIONAL IMPORTANCE',
  context: 'The UAE has positioned transportation and logistics as a cornerstone of its economic diversification strategy. All sections directly support UAE Vision 2030 and Net Zero 2050 targets.',
  sectionAssessments: [
    { section: 'Logistics Market', uaeRelevance: 'Critical', strategicImportance: 'Economic diversification, GDP contribution' },
    { section: 'Ports & Maritime', uaeRelevance: 'Critical', strategicImportance: 'Global trade hub status, 21M TEUs' },
    { section: 'Aviation', uaeRelevance: 'Critical', strategicImportance: 'Emirates/Etihad hub dominance, DXB busiest' },
    { section: 'Rail (Etihad Rail)', uaeRelevance: 'Critical', strategicImportance: '900km network connecting 11 cities' },
    { section: 'Public Transport', uaeRelevance: 'High', strategicImportance: 'Reducing congestion, mode shift' },
    { section: 'Road Transport', uaeRelevance: 'High', strategicImportance: '4.56M vehicles, 10% annual growth' },
    { section: 'Cold Chain', uaeRelevance: 'High', strategicImportance: 'Food security initiative' },
    { section: 'Micro/Shared Mobility', uaeRelevance: 'Medium', strategicImportance: 'Net Zero 2050, smart city' },
    { section: 'Emissions/EV', uaeRelevance: 'Critical', strategicImportance: 'Net Zero 2050 target' },
    { section: 'Sanctions/Smuggling', uaeRelevance: 'High', strategicImportance: 'International relations, compliance' },
    { section: 'Customs Modernization', uaeRelevance: 'High', strategicImportance: 'Trade facilitation, security' },
    { section: 'Weather Response', uaeRelevance: 'High', strategicImportance: 'Climate adaptation' },
    { section: 'Labor Conditions', uaeRelevance: 'Medium', strategicImportance: 'Human rights, COP28 context' },
    { section: 'E-commerce', uaeRelevance: 'High', strategicImportance: 'Digital economy growth' },
    { section: 'Infrastructure', uaeRelevance: 'Critical', strategicImportance: 'Vision 2030, major projects' },
  ] as UAERelevanceSectionEntry[],
}

// ============================================================================
// SECTION W: SENTIMENT ANALYSIS
// ============================================================================

export interface SentimentTopicEntry {
  topic: string
  sentiment?: string
  notes?: string
}

export const sentimentAnalysis = {
  overallSentiment: 'MIXED (Positive with Significant Challenges)',
  positiveTopics: [
    { topic: 'Logistics Market', sentiment: 'Positive', notes: 'Strong growth, 5.58% CAGR' },
    { topic: 'Port Efficiency', sentiment: 'Positive', notes: '3rd globally, improving' },
    { topic: 'Aviation Dominance', sentiment: 'Positive', notes: '2035 strategy strong' },
    { topic: 'Etihad Rail', sentiment: 'Positive', notes: '2026 launch imminent' },
    { topic: 'Public Transport', sentiment: 'Positive', notes: '7.4% ridership growth' },
    { topic: 'EV Adoption', sentiment: 'Positive', notes: '7% to 25%+ in 2 years' },
    { topic: 'Customs Modernization', sentiment: 'Positive', notes: '12-digit tariff upgrade' },
    { topic: 'Weather Response', sentiment: 'Positive', notes: 'Prepared for extremes' },
    { topic: 'Micro-mobility', sentiment: 'Positive', notes: '12.2% CAGR growth' },
  ] as SentimentTopicEntry[],
  negativeTopics: [
    { topic: 'Traffic Congestion', sentiment: 'Negative', notes: '86% experience jams' },
    { topic: 'Sanctions Evasion', sentiment: 'Negative', notes: 'Reputation risk' },
    { topic: 'Labor Conditions', sentiment: 'Negative', notes: 'Documented abuses' },
  ] as SentimentTopicEntry[],
}

// ============================================================================
// SECTION X: DATA QUALITY INDICATORS
// ============================================================================

export interface DataQualityIndicator {
  indicator: string
  status: string
}

export const dataQualityIndicators = {
  indicators: [
    { indicator: 'Primary Sources', status: 'Wikipedia, Government bodies, Industry analysts' },
    { indicator: 'Recent Data', status: '2025-2026 primarily' },
    { indicator: 'Quantitative Rigor', status: 'High - multiple verified sources' },
    { indicator: 'Gaps', status: 'Arabic-language sources limited' },
    { indicator: 'Conflicts', status: 'None identified' },
    { indicator: 'Completeness', status: '85-90% of available data captured' },
  ] as DataQualityIndicator[],
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentCompleted: 'Yes (URL content extraction from 35+ pages)',
  factsDocumented: 500,
  sourceURLs: 70,
  dataTables: 24,
  caseStudies: '13 synthesized findings',
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface TransportationLogisticsData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  logisticsMarket: typeof logisticsMarket
  portsMaritime: typeof portsMaritime
  aviationAirCargo: typeof aviationAirCargo
  etihadRail: typeof etihadRail
  publicTransportDubai: typeof publicTransportDubai
  roadTransport: typeof roadTransport
  coldChainLogistics: typeof coldChainLogistics
  microMobilitySharedMobility: typeof microMobilitySharedMobility
  transportEmissionsElectrification: typeof transportEmissionsElectrification
  sanctionsSmuggling: typeof sanctionsSmuggling
  customsModernization: typeof customsModernization
  extremeWeatherResponse: typeof extremeWeatherResponse
  laborConditions: typeof laborConditions
  ecommerceLogistics: typeof ecommerceLogistics
  infrastructureMarket: typeof infrastructureMarket
  globalLogisticsHub: typeof globalLogisticsHub
  entitiesLeadership: typeof entitiesLeadership
  sourcesSummary: typeof sourcesSummary
  synthesizedFindings: typeof synthesizedFindings
  verificationStatus: typeof verificationStatus
  researchNotes: typeof researchNotes
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  sentimentAnalysis: typeof sentimentAnalysis
  dataQualityIndicators: typeof dataQualityIndicators
  reportMetadata: typeof reportMetadata
}

export const transportationLogisticsData: TransportationLogisticsData = {
  id: 'topic-2-16',
  sector: 'business',
  title: 'Transportation & Logistics',
  titleAr: 'النقل والخدمات اللوجستية',
  description: 'Port efficiency, aviation hub, Etihad Rail, Dubai Metro, traffic congestion, cold chain, e-commerce logistics, sanctions evasion, labor conditions',
  logisticsMarket,
  portsMaritime,
  aviationAirCargo,
  etihadRail,
  publicTransportDubai,
  roadTransport,
  coldChainLogistics,
  microMobilitySharedMobility,
  transportEmissionsElectrification,
  sanctionsSmuggling,
  customsModernization,
  extremeWeatherResponse,
  laborConditions,
  ecommerceLogistics,
  infrastructureMarket,
  globalLogisticsHub,
  entitiesLeadership,
  sourcesSummary,
  synthesizedFindings,
  verificationStatus,
  researchNotes,
  uaeRelevanceAssessment,
  sentimentAnalysis,
  dataQualityIndicators,
  reportMetadata,
}

export default transportationLogisticsData
