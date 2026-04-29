// @ts-nocheck
/**
 * Infrastructure & Landmark Entities - Comprehensive Research Data
 * UAE National Digital Intelligence Platform
 *
 * Source: 1-9-infrastructure-results.md
 * Report Generated: 2026-04-27
 */

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export interface ExecutionMetadata {
  dateExecuted: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  dataPointsExtracted: number
  sourcesSuccessfullyFetched: number
}

export const executionMetadata: ExecutionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 16,
  pagesFetched: 29,
  dataPointsExtracted: 400,
  sourcesSuccessfullyFetched: 23,
}

// ============================================================================
// SECTION A: AIRPORTS
// ============================================================================

// ----- A1. Dubai International Airport (DXB) -----

export interface DXBTerminal {
  name: string
  area: string
  capacity: string
  features: string
}

export interface DXBHistoricalMilestone {
  year: string
  milestone: string
}

export interface DXBRunway {
  designation: string
  length: string
  surface: string
  equipment: string
}

export interface DXBTrafficStat {
  year: string
  passengers: string
  aircraftMovements: string
  cargoTonnes: string
}

export interface DXBConnectivityMetric {
  metric: string
  value: string
}

export interface DXBEconomicImpact {
  metric: string
  value: string
}

export interface DXBExpansionCost {
  project: string
  cost: string
}

export interface DXBOtherFacility {
  facility: string
  specification: string
}

export interface DXBSafetyIncident {
  date: string
  incident: string
  impact: string
}

export interface DXBFuturePlan {
  plan: string
}

export interface DXBData {
  iataIcao: string
  location: string
  area: string
  elevation: string
  opened: string
  constructedUnder: string
  terminals: DXBTerminal[]
  historicalTimeline: DXBHistoricalMilestone[]
  runways: DXBRunway[]
  trafficStatistics: DXBTrafficStat[]
  connectivity: DXBConnectivityMetric[]
  economicImpact: DXBEconomicImpact[]
  expansionCosts: DXBExpansionCost[]
  otherFacilities: DXBOtherFacility[]
  safetyIncidents: DXBSafetyIncident[]
  futurePlans: DXBFuturePlan[]
  sources: string[]
}

export const dubaiInternationalAirport: DXBData = {
  iataIcao: 'DXB / OMDB',
  location: 'Al Garhoud district, 4.70 km east of Dubai city center',
  area: '2,900 hectares (7,200 acres)',
  elevation: '62 ft / 19 m AMSL',
  opened: 'September 30, 1960',
  constructedUnder: 'Sheikh Rashid bin Saeed Al Maktoum directives (1959)',
  terminals: [
    { name: 'Terminal 1', area: '520,000 m²', capacity: '45M passengers', features: '221 check-in counters; serves 100+ airlines' },
    { name: 'Terminal 2', area: '47,000 m²', capacity: '10M passengers', features: 'Budget carriers; 37 check-in counters' },
    { name: 'Terminal 3', area: '1,713,000 m²', capacity: '65M passengers', features: 'Emirates exclusive; 180 check-in counters' },
    { name: 'Concourse A', area: '540,000 m²', capacity: '19M passengers', features: '24 gates (A1-A24); opened Jan 2013; $3.3B' },
    { name: 'Concourse B', area: '675,000 m²', capacity: '32 gates', features: 'B1-B32; 120,000 m² retail' },
    { name: 'Concourse C', area: 'N/A', capacity: '50 gates', features: '28 air bridges; opened 2000' },
    { name: 'Concourse D', area: 'N/A', capacity: '15M passengers; 17 gates', features: 'Opened Feb 2016' },
  ],
  historicalTimeline: [
    { year: '1960', milestone: 'Airport opens with 1,800 m sand runway' },
    { year: '1965', milestone: '2,800 m asphalt runway opens' },
    { year: '1971', milestone: 'Terminal 1 opens (May 15)' },
    { year: '1984', milestone: 'Second runway completed (April)' },
    { year: '1998', milestone: 'Terminal 2 opens (May 1)' },
    { year: '2000', milestone: 'Concourse C opens (April 15)' },
    { year: '2008', milestone: 'Terminal 3 opens (October 14)' },
    { year: '2009', milestone: 'Dubai Metro Red Line service begins (September 9)' },
    { year: '2013', milestone: 'Concourse A opens (January 2)' },
    { year: '2014', milestone: '80-day runway refurbishment' },
    { year: '2016', milestone: 'Concourse D opens (February 24)' },
    { year: '2018', milestone: 'One billionth passenger (December 20)' },
    { year: '2024', milestone: 'April flooding; 92.3M passengers' },
    { year: '2026', milestone: 'Iranian strikes suspend operations (Feb 28, Mar 7); resumed (Mar 2)' },
  ],
  runways: [
    { designation: '12L/30R', length: '4,351 m × 60 m (14,275 ft)', surface: 'Asphalt', equipment: 'ILS Category III' },
    { designation: '12R/30L', length: '4,447 m × 60 m (14,590 ft)', surface: 'Asphalt', equipment: 'ILS Category III' },
  ],
  trafficStatistics: [
    { year: '2003', passengers: '18.1M', aircraftMovements: '—', cargoTonnes: '928,758' },
    { year: '2010', passengers: '47.2M', aircraftMovements: '—', cargoTonnes: '2.27M' },
    { year: '2019', passengers: '86.4M', aircraftMovements: '—', cargoTonnes: '—' },
    { year: '2020', passengers: '18.2M', aircraftMovements: '—', cargoTonnes: '—' },
    { year: '2023', passengers: '87.0M', aircraftMovements: '—', cargoTonnes: '1.81M' },
    { year: '2024', passengers: '92.3M (+6.1% YoY)', aircraftMovements: '440,300 (+5.7% YoY)', cargoTonnes: '2.2M (+20.5% YoY)' },
    { year: '2025', passengers: '95.2M (historic high)', aircraftMovements: '—', cargoTonnes: '—' },
  ],
  connectivity: [
    { metric: 'Weekly Flights', value: '8,500+' },
    { metric: 'Destinations', value: '270+' },
    { metric: 'Airlines', value: '100+' },
    { metric: 'Emirates Share', value: '51% passenger traffic; 42% aircraft movements' },
    { metric: 'Flydubai Share', value: '13% passenger traffic; 25% aircraft movements' },
  ],
  economicImpact: [
    { metric: 'Total Economic Contribution', value: '$26.7 billion (27% of Dubai\'s GDP)' },
    { metric: 'Jobs Supported', value: '400,000' },
    { metric: 'World Rank', value: '2nd busiest by passenger traffic' },
  ],
  expansionCosts: [
    { project: 'Terminal 3', cost: '$4.5 billion' },
    { project: 'Concourse A', cost: '$3.3 billion' },
    { project: 'A380 Modifications', cost: '$120 million + $10M special gates' },
    { project: 'Runway Refurbishment (2014)', cost: '80-day project' },
    { project: 'Total Expansion Program', cost: '$7.8 billion' },
    { project: 'Future DWC Expansion', cost: '$35 billion' },
  ],
  otherFacilities: [
    { facility: 'Control Tower', specification: '87 m tall' },
    { facility: 'Cargo Mega Terminal', specification: '2.5M tonnes capacity (expanding to 3M)' },
    { facility: 'Flower Centre', specification: '100,000 m²; maintained at 2-4°C; 300,000+ tonnes throughput' },
    { facility: 'Executive Flight Terminal', specification: '5,500 m²; 3,700 m² hangar' },
    { facility: 'Al Majlis VIP Pavilion', specification: '3,400 m²; 8 hangars (69,598 m²)' },
  ],
  safetyIncidents: [
    { date: 'March 2006', incident: 'Sympathy strike', impact: 'Operational disruption' },
    { date: 'October 2007', incident: 'Strike with 4,000 arrested', impact: 'Major labor disruption' },
    { date: 'April 2024', incident: 'Flooding and extensive damage', impact: 'Operational disruption' },
    { date: 'February 28, 2026', incident: 'Incident (4 injured, minor concourse damage)', impact: 'DXB and DWC suspended until March 2' },
    { date: 'March 16, 2026', incident: 'Drone strike on fuel tank', impact: '65 flights diverted; fire reported; operations halted' },
  ],
  futurePlans: [
    { plan: 'Dubai International Airport to close when Al Maktoum International (DWC) is fully operational' },
    { plan: '$35 billion expansion program for Dubai World Central' },
  ],
  sources: [
    'Wikipedia - Dubai International Airport',
    'Dubai Airports Corporate',
    'Flightradar24',
  ],
}

// ----- A2. Zayed International Airport (AUH) -----

export interface AUHRunway {
  designation: string
  length: string
  width: string
  equipment: string
}

export interface AUHTerminalA {
  feature: string
  specification: string
}

export interface AUH2024Stat {
  metric: string
  value: string
  change: string
}

export interface AUHConnectivity {
  metric: string
  value: string
}

export interface AUHGroundTransport {
  mode: string
  details: string
}

export interface AUHData {
  formerName: string
  currentName: string
  location: string
  area: string
  constructionStarted: string
  opened: string
  renameDate: string
  runways: AUHRunway[]
  terminalA: AUHTerminalA[]
  usPreclearance: string[]
  statistics2024: AUH2024Stat[]
  connectivity: AUHConnectivity[]
  groundTransport: AUHGroundTransport[]
  sources: string[]
}

export const zayedInternationalAirport: AUHData = {
  formerName: 'Abu Dhabi International Airport (AUH)',
  currentName: 'Zayed International Airport (renamed February 9, 2024)',
  location: '16.5 nautical miles east of Abu Dhabi',
  area: '15,000 acres',
  constructionStarted: '1979',
  opened: 'January 2, 1982',
  renameDate: 'February 9, 2024 (to honor Sheikh Zayed bin Sultan Al Nahyan)',
  runways: [
    { designation: '13R/31L', length: '4,205 m (13,796 ft)', width: '60 m', equipment: 'CAT III-B ILS' },
    { designation: '13L/31R', length: '4,205 m (13,796 ft)', width: '60 m', equipment: 'CAT III-B ILS' },
  ],
  terminalA: [
    { feature: 'Area', specification: '780,000+ sqm' },
    { feature: 'Annual Capacity', specification: '45 million (potential 60 million)' },
    { feature: 'Aircraft Positions', specification: '79 A380 aircraft' },
    { feature: 'Peak Throughput', specification: '11,000 passengers/hour' },
    { feature: 'Technology', specification: 'Biometric systems' },
    { feature: 'Status (2023)', specification: 'All flights now operate from Terminal A' },
  ],
  usPreclearance: [
    'Only US border preclearance facility in Middle East (since January 2014)',
    'Enables passengers to clear US customs before departing',
  ],
  statistics2024: [
    { metric: 'Passenger Movements', value: '29,474,493', change: '+28.1%' },
    { metric: 'Aircraft Movements', value: '249,747', change: '+10.33%' },
    { metric: 'Cargo', value: '678,990 metric tonnes', change: '+21%' },
  ],
  connectivity: [
    { metric: 'Airlines', value: '24' },
    { metric: 'Destinations', value: '128 worldwide' },
    { metric: 'Hub', value: 'Etihad Airways, Etihad Cargo, Air Arabia Abu Dhabi' },
  ],
  groundTransport: [
    { mode: 'Highway', details: 'Route E10' },
    { mode: 'Car Rental', details: 'Available' },
    { mode: 'Taxis', details: 'Available' },
    { mode: 'Bus Routes', details: '7 routes; E102 to Dubai' },
    { mode: 'Railway', details: 'None' },
  ],
  sources: [
    'Wikipedia - Zayed International Airport',
    'Zayed International Airport',
  ],
}

// ----- A3. Al Maktoum International Airport (DWC) -----

export interface DWCRunway {
  designation: string
  length: string
  surface: string
}

export interface DWCCapacity {
  metric: string
  value: string
}

export interface DWCCost {
  item: string
  amount: string
}

export interface DWCHistoricalEvent {
  year: string
  event: string
}

export interface DWCData {
  iataIcao: string
  location: string
  opened: string
  firstFlight: string
  hub: string
  elevation: string
  area: string
  runways: DWCRunway[]
  capacity: DWCCapacity[]
  costs: DWCCost[]
  expansion2024: string[]
  historicalTimeline: DWCHistoricalEvent[]
  originalTimeline: string[]
  sources: string[]
}

export const alMaktoumInternational: DWCData = {
  iataIcao: 'DWC / OMDW',
  location: 'Jebel Ali, Dubai; 37 km southwest of Dubai',
  opened: 'June 27, 2010 (cargo); October 26, 2013 (passenger)',
  firstFlight: 'June 20, 2010 (Emirates SkyCargo Boeing 777F from Hong Kong)',
  hub: 'Emirates SkyCargo',
  elevation: '170 ft / 52 m',
  area: '36,000 acres (14,400 ha)',
  runways: [
    { designation: '12/30', length: '4,500 m (14,764 ft)', surface: 'Asphalt' },
    { designation: '13/31', length: '1,838 m (6,030 ft)', surface: 'Asphalt' },
  ],
  capacity: [
    { metric: 'Projected Freight Capacity', value: '12 million tonnes' },
    { metric: 'Projected Passenger Capacity', value: '160-260 million passengers' },
    { metric: 'Planned Gates', value: '400 aircraft' },
    { metric: 'Planned Runways', value: '5 parallel' },
  ],
  costs: [
    { item: 'Total Cost (estimated by Dubai government)', amount: '$82 billion' },
    { item: '2024 Expansion Announcement', amount: '128 billion AED ($34.85 billion USD)' },
    { item: 'Cargo Terminal', amount: '~$75 million' },
  ],
  expansion2024: [
    'New 128 billion AED ($34.85 billion USD) passenger terminal',
    'Size: approximately 5 times Dubai International Airport',
    'Capacity: up to 260 million passengers',
    'Features: 5 parallel runways; 400 aircraft gates',
    'Completion: no earlier than 2035',
    'All Emirates and Flydubai operations to transfer',
    'Dubai International Airport to close',
  ],
  historicalTimeline: [
    { year: '2007', event: 'Runway completed' },
    { year: '2010', event: 'Airport opened (cargo flights)' },
    { year: '2011', event: 'Certified for passenger aircraft (up to 60 passengers)' },
    { year: '2013', event: 'Opened for passenger flights (October)' },
    { year: '2035+', event: 'Full completion projected' },
  ],
  originalTimeline: [
    'Originally expected fully operational by 2017',
    '2008 financial crisis postponed to 2027',
    'Now projected beyond 2035',
  ],
  sources: [
    'Wikipedia - Al Maktoum International Airport',
  ],
}

// ============================================================================
// SECTION B: PORTS
// ============================================================================

// ----- B1. Jebel Ali Port -----

export interface JebelAliBerth {
  facility: string
  specification: string
}

export interface JebelAliTrafficStat {
  year: string
  throughput: string
}

export interface JebelAliRanking {
  ranking: string
}

export interface JebelAliMasterPlan {
  plan: string
}

export interface JebelAliStrategic {
  item: string
}

export interface JebelAliVillage {
  item: string
  value: string
}

export interface JebelAliData {
  location: string
  opening: string
  constructor: string
  operator: string
  size: string
  unLocode: string
  coordinates: string
  infrastructure: JebelAliBerth[]
  trafficStatistics: JebelAliTrafficStat[]
  rankings: JebelAliRanking[]
  masterPlan: JebelAliMasterPlan[]
  strategicRole: JebelAliStrategic[]
  village: JebelAliVillage[]
  sources: string[]
}

export const jebelAliPort: JebelAliData = {
  location: '35 km southwest of Dubai in Persian Gulf',
  opening: 'February 26, 1979 (by Queen Elizabeth II)',
  constructor: 'Rashid bin Saeed Al-Maktoum',
  operator: 'DP World',
  size: '134.68 sq km (52 sq mi)',
  unLocode: 'AEJEA',
  coordinates: '25°00′41″N 55°03′40″E',
  infrastructure: [
    { facility: 'Berths', specification: '67' },
    { facility: 'Container Yard', specification: 'Over 1 million sqm' },
    { facility: 'Open Storage', specification: '960,000 sqm' },
    { facility: 'Dutch Barns', specification: '7 (~19,000 sqm)' },
    { facility: 'Covered Sheds', specification: '12 (90.5 sqm)' },
    { facility: 'Quay Length', specification: '5,000 meters' },
    { facility: 'Terminal Area', specification: '1.4 million sqm' },
    { facility: 'Vehicle Storage', specification: '75,000 units' },
  ],
  trafficStatistics: [
    { year: '2005', throughput: '7.62 million TEUs' },
    { year: '2021', throughput: '13.7 million TEUs (world\'s 9th busiest)' },
  ],
  rankings: [
    { ranking: 'World\'s 9th busiest port' },
    { ranking: 'Largest man-made harbour' },
    { ranking: 'Biggest port in Middle East' },
    { ranking: 'Most frequently visited by U.S. Navy ships outside US' },
    { ranking: '"Best Seaport in Middle East" for 24 consecutive years' },
  ],
  masterPlan: [
    { plan: '15 stages planned' },
    { plan: 'Stage 1 completed 2007: 2.2 million TEU capacity; 1,200m quay' },
    { plan: '2.4 km new berths on reclaimed land west of Palm Jumeirah' },
  ],
  strategicRole: [
    { item: 'Part of Maritime Silk Road (China → India → Suez Canal → Triesta → Central/Eastern Europe rail)' },
    { item: '80+ weekly services; 150+ ports globally' },
  ],
  village: [
    { item: 'Residents', value: '300' },
    { item: 'Companies', value: '5,000+ from 120 countries' },
  ],
  sources: [
    'Wikipedia - Port of Jebel Ali',
    'DP World',
  ],
}

// ----- B2. Khalifa Port -----

export interface KhalifaPortInfrastructure {
  facility: string
  specification: string
}

export interface KhalifaPortCapacity {
  metric: string
  value: string
}

export interface KhalifaPortThroughput {
  year: string
  teus: string
}

export interface KhalifaPortTerminal {
  terminal: string
  operator: string
  notes: string
}

export interface KhalifaPortSouthQuay {
  feature: string
  specification: string
}

export interface KhalifaPortInnovation {
  innovation: string
}

export interface KhalifaPortExpansion {
  goal: string
}

export interface KhalifaPortRecognition {
  recognition: string
}

export interface KhalifaPortData {
  location: string
  portIsland: string
  inauguration: string
  transition: string
  breakwater: string
  onshoreLink: string
  strategicRole: string[]
  capacity: KhalifaPortCapacity[]
  throughputHistory: KhalifaPortThroughput[]
  phase1Capacity: string[]
  terminals: KhalifaPortTerminal[]
  southQuay: KhalifaPortSouthQuay[]
  innovations: KhalifaPortInnovation[]
  expansionGoals: KhalifaPortExpansion[]
  recognition: KhalifaPortRecognition[]
  sources: string[]
}

export const khalifaPort: KhalifaPortData = {
  location: 'Between Abu Dhabi and Dubai; 5 km offshore',
  portIsland: '2.7 sqkm',
  inauguration: 'December 12, 2012 (by President Sheikh Khalifa Bin Zayed Al Nahyan)',
  transition: 'Completed transfer of container traffic from Zayed Port; December 2012',
  breakwater: '8 km (longest in Middle East)',
  onshoreLink: 'Kizad (Khalifa Industrial Zone Abu Dhabi)',
  strategicRole: [
    'Part of Maritime Silk Road',
    'Connects Abu Dhabi to 62 direct international destinations',
  ],
  capacity: [
    { metric: 'Container Capacity', value: '7.8 million TEU' },
    { metric: 'GC Capacity', value: '37 million FT' },
    { metric: 'Ro-ro Capacity', value: '15,000' },
    { metric: 'Depth Alongside', value: '18.5m' },
    { metric: 'STS Cranes', value: '33' },
    { metric: 'Berths', value: '36' },
    { metric: 'Quay Wall Length', value: '10,795m' },
  ],
  throughputHistory: [
    { year: '2013', teus: '905,000' },
    { year: '2014', teus: '1,137,679' },
    { year: '2015', teus: '1,504,293 (+32%)' },
  ],
  phase1Capacity: [
    '2.5 million TEUs annually',
    '12 million tonnes of general cargo annually',
  ],
  terminals: [
    { terminal: 'Abu Dhabi Terminals', operator: 'ADT', notes: 'Region\'s first semi-automated; operates MSC hub' },
    { terminal: 'CSP Abu Dhabi Terminal', operator: 'COSCO SHIPPING', notes: 'Belt and Road Initiative hub' },
    { terminal: 'Autoterminal Khalifa Port', operator: 'Autoterminal Barcelona', notes: 'RoRo hub for Middle East' },
    { terminal: 'CMA Terminals Khalifa Port', operator: 'CMA CGM', notes: 'Opened 2024' },
  ],
  southQuay: [
    { feature: 'Berths', specification: '9' },
    { feature: 'Yard', specification: '823,000 sqm' },
    { feature: 'Quay Wall', specification: '3km' },
    { feature: 'Draft', specification: '18.5m' },
  ],
  innovations: [
    { innovation: 'First port in Middle East with autonomous port truck systems (2021)' },
    { innovation: 'Only semi-automated container terminal in region' },
  ],
  expansionGoals: [
    { goal: '15 million TEUs by 2030' },
    { goal: '35 million tonnes general cargo annually' },
  ],
  recognition: [
    { recognition: '"Port of the Year" for 5 consecutive years at The Maritime Standard Awards' },
    { recognition: '56th in Lloyd\'s List One Hundred Ports 2021' },
  ],
  sources: [
    'Wikipedia - Khalifa Port',
    'Khalifa Port',
    'Abu Dhabi Ports',
  ],
}

// ----- B3. Port of Fujairah -----

export interface FujairahPortBerth {
  facility: string
  specification: string
}

export interface FujairahPortKeyOperation {
  operation: string
  capacity: string
}

export interface FujairahPortBulkLoader {
  loader: string
  capacity: string
}

export interface FujairahPortStrategic {
  item: string
}

export interface FujairahPortIncident {
  date: string
  event: string
}

export interface FujairahPortData {
  location: string
  distanceFromStraitOfHormuz: string
  opening: string
  constructionStarted: string
  authority: string
  harbourMaster: string
  unLocode: string
  type: string
  infrastructure: FujairahPortBerth[]
  keyOperations: FujairahPortKeyOperation[]
  bulkLoaders: FujairahPortBulkLoader[]
  strategicImportance: FujairahPortStrategic[]
  incidentsMay2019: string[]
  incidentsMarch2026: FujairahPortIncident[]
  sources: string[]
}

export const portOfFujairah: FujairahPortData = {
  location: '25°11′17″N 56°21′35″E; eastern seaboard of UAE',
  distanceFromStraitOfHormuz: '70 nautical miles',
  opening: '1983',
  constructionStarted: '1978',
  authority: 'Port of Fujairah Authority',
  harbourMaster: 'Captain Mayed Alameiry',
  unLocode: 'AEFJR',
  type: 'Coastal breakwater',
  infrastructure: [
    { facility: 'Berths', specification: '33' },
    { facility: 'Draft Depth', specification: '16.5m' },
    { facility: 'Quay Length', specification: 'Expanded from 370m (1983) to 9.5+ km (2024)' },
  ],
  keyOperations: [
    { operation: 'Container Terminal', capacity: '720,000 TEUs/year' },
    { operation: 'General Cargo', capacity: '1.3 million tons/year' },
    { operation: 'Anchorage', capacity: '174 positions; ~12,000 vessel calls annually' },
    { operation: 'Oil Storage', capacity: '18 million cbm (from 550,000 cbm in 1994)' },
  ],
  bulkLoaders: [
    { loader: 'One', capacity: '2,000 tons/hour' },
    { loader: 'Another', capacity: '4,000 tons/hour' },
  ],
  strategicImportance: [
    { item: 'UAE\'s only eastern seaboard port' },
    { item: 'World\'s second largest bunkering hub' },
    { item: 'Middle East\'s largest commercial storage for refined/crude oil' },
    { item: 'Habshan-Fujairah oil pipeline: 2 million barrels/day capacity (bypasses Strait of Hormuz)' },
    { item: 'Hosted Abu Dhabi Crude Oil Pipeline (ADCOP)' },
    { item: 'World\'s largest crude oil storage facility: 14 million barrels capacity' },
    { item: 'UAE Navy naval base' },
    { item: 'Connected to Etihad Rail (linking Ruwais to Ghuwaifat near Saudi border)' },
  ],
  incidentsMay2019: [
    'Four ships in UAE territorial waters targeted',
    'Vessels: UAE-flagged, Norwegian-flagged, two Saudi oil tankers',
    'No casualties or environmental spills',
    'US assessment: blamed Iran; 5-10 foot holes near water lines caused by explosive charges',
  ],
  incidentsMarch2026: [
    { date: 'March 3-4, 2026', event: 'Debris from drone interceptions damaged oil storage tanks' },
    { date: 'March 9, 2026', event: 'Attack shut down the oil terminal' },
    { date: 'March 12, 2026', event: 'Terminal partially operating again' },
    { date: 'March 14, 2026', event: 'Iranian drones struck port; fires and suspension of oil-loading' },
    { date: 'March 16, 2026', event: 'Another attack closed oil operations' },
  ],
  sources: [
    'Wikipedia - Port of Fujairah',
    'Port of Fujairah',
  ],
}

// ============================================================================
// SECTION C: ENERGY INFRASTRUCTURE
// ============================================================================

// ----- C1. Barakah Nuclear Power Plant -----

export interface BarakahUnit {
  unit: string
  constructionStart: string
  commercialOperation: string
  duration: string
}

export interface BarakahOperation {
  metric: string
  value: string
}

export interface BarakahContract {
  date: string
  event: string
}

export interface BarakahIncident {
  date: string
  issue: string
}

export interface BarakahMarch2026 {
  aspect: string
  details: string
}

export interface BarakahInternationalCooperation {
  date: string
  agreement: string
}

export interface BarakahData {
  location: string
  significance: string
  owner: string
  reactorType: string
  reactorModel: string
  supplier: string
  units: string
  totalNameplateCapacity: string
  totalThermalCapacity: string
  constructionCost: string
  coolingSource: string
  constructionTimeline: BarakahUnit[]
  operationsOutput: BarakahOperation[]
  contractingHistory: BarakahContract[]
  incidentsConcerns: BarakahIncident[]
  march2026Threat: BarakahMarch2026[]
  internationalCooperation: BarakahInternationalCooperation[]
  sources: string[]
}

export const barakahNuclear: BarakahData = {
  location: 'Al Dhafra region, Abu Dhabi; 53 km west-southwest of Al Dhannah City',
  significance: 'First nuclear power station in UAE, Arabian Peninsula, and Arab World',
  owner: 'Emirates Nuclear Energy Corporation (ENEC)',
  reactorType: 'Pressurized Water Reactor (PWR)',
  reactorModel: 'APR-1400',
  supplier: 'Korea Electric Power Company (KEPCO)',
  units: '4 reactors, each 1,345 MW',
  totalNameplateCapacity: '5,600 MW',
  totalThermalCapacity: '4 × 3,983 MWth',
  constructionCost: '$32 billion',
  coolingSource: 'Persian Gulf',
  constructionTimeline: [
    { unit: 'Unit 1', constructionStart: 'July 19, 2012', commercialOperation: 'April 1, 2021', duration: '~9 years' },
    { unit: 'Unit 2', constructionStart: 'April 16, 2013', commercialOperation: 'March 24, 2022', duration: '~9 years' },
    { unit: 'Unit 3', constructionStart: 'September 24, 2014', commercialOperation: 'February 24, 2023', duration: '~9 years' },
    { unit: 'Unit 4', constructionStart: 'July 30, 2015', commercialOperation: 'September 5, 2024', duration: '~9 years' },
  ],
  operationsOutput: [
    { metric: 'Annual Generation', value: '40 TWh' },
    { metric: 'UAE Electricity Share', value: '~25%' },
    { metric: 'Status', value: 'Largest source of electricity in UAE' },
    { metric: 'Carbon-free', value: 'Yes' },
    { metric: 'Carbon Prevented', value: '21-22.4 million tonnes annually' },
    { metric: 'Equivalent', value: 'Removing 4.8 million cars' },
  ],
  contractingHistory: [
    { date: 'December 2009', event: 'ENEC awarded $20 billion bid to KEPCO-led coalition' },
    { date: '2016', event: 'EWEC signed Power Purchase Agreement with Barakah One Company for 60 years' },
  ],
  incidentsConcerns: [
    { date: 'December 2017', issue: 'Houthi rebels claimed cruise missile toward plant; UAE stated no missiles reached UAE' },
    { date: 'December 2018', issue: 'Voids discovered in concrete containment buildings for Units 2 & 3; grease leak in Unit 3' },
    { date: '2020', issue: 'FANR raised 400 adverse findings requiring rectification before Unit 1 license' },
    { date: 'March 2019', issue: 'Qatar complained to IAEA about safety concerns; UAE stated "Barakah adheres to highest standards"' },
  ],
  march2026Threat: [
    { aspect: 'Threat', details: 'Iran listed Barakah among potential targets following Trump\'s 48-hour ultimatum' },
    { aspect: 'IRGC Warning', details: 'Issued through Fars News Agency' },
    { aspect: 'Target Rationale', details: 'Facilities supplying electricity to American bases' },
    { aspect: 'Builder Status', details: 'South Korea has ~20 staff remaining at site' },
    { aspect: 'South Korea Response', details: 'Planning to bring 6 nuclear reactors online early; importing 6 million barrels UAE crude' },
  ],
  internationalCooperation: [
    { date: 'September 2024', agreement: 'UAE and India signed MoU for civil nuclear cooperation (ENEC and NPCIL)' },
  ],
  sources: [
    'Wikipedia - Barakah Nuclear Power Plant',
    'ENEC',
    'EWEC',
    'KED Global',
  ],
}

// ----- C2. Mohammed bin Rashid Al Maktoum Solar Park -----

export interface SolarParkPhase {
  phase: string
  year: string
  capacity: string
  cost: string
  technology: string
  notes: string
}

export interface SolarParkPhase4Feature {
  feature: string
}

export interface SolarParkData {
  location: string
  area: string
  totalPlannedCapacity: string
  currentCapacity: string
  annualOutput: string
  capacityFactor: string
  owner: string
  operator: string
  totalInvestment: string
  model: string
  phases: SolarParkPhase[]
  phase4Features: SolarParkPhase4Feature[]
  sources: string[]
}

export const mbrSolarPark: SolarParkData = {
  location: 'Seih Al-Dahal, Dubai',
  area: '77 sqkm',
  totalPlannedCapacity: '4,660 MW by 2030',
  currentCapacity: '~1,800 MW operational',
  annualOutput: '~2,800 GWh/year',
  capacityFactor: '24.6%',
  owner: 'Dubai Electricity and Water Authority (DEWA)',
  operator: 'ACWA Power',
  totalInvestment: '$7.11 billion',
  model: 'Independent Power Producer (IPP)',
  phases: [
    { phase: '1', year: '2013', capacity: '13 MWp', cost: '—', technology: 'PV (First Solar)', notes: '152,880 CdTe modules; ~28 GWh/year' },
    { phase: '2', year: '2017', capacity: '200 MWp', cost: '$320M', technology: 'PV', notes: 'Record-low tariff US¢5.89/kWh' },
    { phase: '3', year: '2018-2020', capacity: '800 MWp', cost: '$945M', technology: 'PV', notes: '200+300+300 MW stages' },
    { phase: '4 (Noor Energy 1)', year: '2021-2023', capacity: '950 MW', cost: '$3.8B', technology: 'CSP + PV', notes: '600MW trough + 100MW tower + ~217MW PV; world\'s tallest 260m solar tower; 15-hour storage' },
    { phase: '5', year: '2021-2023', capacity: '900 MW', cost: '$545M', technology: 'PV', notes: 'ACWA Power & GIC' },
    { phase: '6', year: '2024-2026', capacity: '1,800 MW', cost: '$1.5B', technology: 'PV', notes: 'Masdar' },
  ],
  phase4Features: [
    { feature: 'World\'s tallest solar tower (260m)' },
    { feature: '24-hour power generation via thermal storage (15-hour storage)' },
    { feature: 'World\'s largest single-site CSP plant' },
    { feature: '600 MW parabolic trough + 100 MW tower + ~217 MW PV' },
  ],
  sources: [
    'Wikipedia - Mohammed bin Rashid Al Maktoum Solar Park',
  ],
}

// ----- C3. Noor Abu Dhabi Solar Plant -----

export interface NoorAbuDhabiJointVenture {
  partner: string
  country: string
}

export interface NoorAbuDhabiAchievement {
  achievement: string
  details: string
}

export interface NoorAbuDhabiStrategic {
  item: string
}

export interface NoorAbuDhabiData {
  location: string
  coordinates: string
  capacity: string
  solarPanels: string
  annualOutput: string
  efficiencyRate: string
  homesPowered: string
  constructionCost: string
  commercialOperations: string
  ownerOperator: string
  jointVenturePartners: NoorAbuDhabiJointVenture[]
  epcContractor: string
  technology: string[]
  achievements: NoorAbuDhabiAchievement[]
  strategicContext: NoorAbuDhabiStrategic[]
  sources: string[]
}

export const NoorAbuDhabi: NoorAbuDhabiData = {
  location: 'Sweihan, near Abu Dhabi',
  coordinates: '24°32′33″N 55°26′38″E',
  capacity: '1.117 GW (1,200 MW)',
  solarPanels: '3.2-3.3 million panels',
  annualOutput: '2,000 GWh',
  efficiencyRate: '93%',
  homesPowered: '~90,000',
  constructionCost: '$870 million',
  commercialOperations: 'April 30, 2019',
  ownerOperator: 'Sweihan PV Power Company (SPPC)',
  jointVenturePartners: [
    { partner: 'Abu Dhabi Government', country: 'UAE' },
    { partner: 'Jinko Solar', country: 'China' },
    { partner: 'Marubeni Corp', country: 'Japan' },
  ],
  epcContractor: 'Sterling and Wilson Solar (India)',
  technology: [
    'Photovoltaic technology',
    'Waterless robotic cleaning; robots travel ~1,600 km daily',
  ],
  achievements: [
    { achievement: '2016 Tariff Bid', details: 'World\'s most competitive: 8.888 fils/kWh' },
    { achievement: 'Utility Project of the Year', details: '2020 Middle East Solar Awards' },
    { achievement: 'Power Generation Project of the Year', details: 'MEED Projects Awards 2020' },
    { achievement: 'World\'s Largest', details: 'Largest single-site solar power plant (as of 2022)' },
  ],
  strategicContext: [
    { item: 'Part of UAE Energy Strategy 2050' },
    { item: 'Goal: 50% clean energy by 2050 (up from 25%)' },
    { item: 'First initiative delivering UAE\'s clean energy targets' },
  ],
  sources: [
    'Wikipedia - Noor Abu Dhabi',
    'Noor Abu Dhabi',
  ],
}

// ----- C4. UAE Desalination Infrastructure -----

export interface DesalinationAbuDhabiPlant {
  plant: string
  location: string
  licensed: string
  dailyCapacity: string
}

export interface DesalinationTechnologyBreakdown {
  technology: string
  percentage: string
}

export interface DesalinationData {
  globalPosition: { metric: string; value: string }[]
  abuDhabiCapacity: { metric: string; value: string }[]
  waterSources: string[]
  technologyBreakdown: DesalinationTechnologyBreakdown[]
  majorPlants: DesalinationAbuDhabiPlant[]
  taweelahPlant: { feature: string; specification: string }[]
  technologyTypes: { technology: string; locations: string }[]
  waterSecurityContext: { metric: string; value: string }[]
  sources: string[]
}

export const uaeDesalination: DesalinationData = {
  globalPosition: [
    { metric: 'UAE Share of World Desalinated Water', value: '14%' },
    { metric: 'Abu Dhabi Share of World Desalinated Water', value: '9%' },
  ],
  abuDhabiCapacity: [
    { metric: 'Total Capacity', value: '4.13 million m³/day (910 million imperial gallons)' },
    { metric: 'Annual Production', value: '1.3 billion cubic metres' },
    { metric: 'Pipeline Network (Transport)', value: '3,500 km' },
    { metric: 'Pipeline Network (Distribution)', value: '14,200 km' },
  ],
  waterSources: [
    '30% from desalination',
    '70% from other sources',
  ],
  technologyBreakdown: [
    { technology: 'Thermal Desalination', percentage: '84%' },
    { technology: 'Multi-stage Flash (MSF)', percentage: '67%' },
    { technology: 'Multiple-effect Distillation (MED)', percentage: '17%' },
    { technology: 'Seawater Reverse Osmosis', percentage: '16%' },
  ],
  majorPlants: [
    { plant: 'Emirates CMS Power Company (ECPC)', location: 'Taweelah', licensed: '1999', dailyCapacity: '231,800' },
    { plant: 'Al Shuweihat S1', location: 'Western region', licensed: '2001', dailyCapacity: '459,000' },
    { plant: 'Shuweihat S2', location: 'Western region', licensed: '2009', dailyCapacity: '459,000' },
    { plant: 'Umm Al Nar', location: 'Sas Al Nakl Island', licensed: '2003', dailyCapacity: '432,000' },
    { plant: 'Taweelah A2', location: '50 km NE of Abu Dhabi City', licensed: '2000', dailyCapacity: '382,000' },
    { plant: 'Taweelah B', location: '80 km north of Abu Dhabi', licensed: '2005', dailyCapacity: '736,000' },
    { plant: 'Fujairah F1', location: 'Fujairah', licensed: '2006', dailyCapacity: '595,500' },
    { plant: 'Fujairah F2', location: 'Fujairah', licensed: '2007', dailyCapacity: '600,000' },
    { plant: 'Mirfa International (MIPCO)', location: 'Mirfa', licensed: '2014', dailyCapacity: '241,000' },
  ],
  taweelahPlant: [
    { feature: 'Capacity', specification: '909,200 m³/day (200 million imperial gallons)' },
    { feature: 'Cost', specification: 'AED 3.1 billion ($869 million)' },
    { feature: 'Completion', specification: '2022' },
    { feature: 'Technology', specification: 'Seawater reverse osmosis' },
    { feature: 'Significance', specification: '44% larger than current world largest RO plant' },
    { feature: 'Households Served', specification: '350,000' },
    { feature: 'Note', specification: 'First Abu Dhabi plant independent of power plant' },
  ],
  technologyTypes: [
    { technology: 'Multi-stage flash (MSF) distillation', locations: 'Shuweihat, Umm Al-Nar' },
    { technology: 'Multiple-effect distillation (MED)', locations: 'Taweelah A' },
    { technology: 'Reverse osmosis', locations: 'Expanding; 75% more efficient than MSF' },
  ],
  waterSecurityContext: [
    { metric: 'UAE Water Supply Stress Rank', value: '10th out of 164 countries (World Resources Institute)' },
    { metric: 'Global Rank', value: 'One of highest per capita water consumption' },
    { metric: 'Middle East Demand Projection', value: 'Tripling in coming decades' },
  ],
  sources: [
    'Abu Dhabi Department of Energy',
    'Siemens',
  ],
}

// ============================================================================
// SECTION D: LANDMARK ENTITIES
// ============================================================================

// ----- D1. Burj Khalifa -----

export interface BurjKhalifaDesign {
  feature: string
  details: string
}

export interface BurjKhalifaConstructionMaterial {
  material: string
  quantity: string
}

export interface BurjKhalifaWorldRecord {
  record: string
  value: string
}

export interface BurjKhalifaFacility {
  facility: string
  details: string
}

export interface BurjKhalifaOperationalSpec {
  system: string
  specification: string
}

export interface BurjKhalifaData {
  height: string
  heightIncludingTip: string
  antennaSpire: string
  topFloor: string
  observatory: string
  floors: string
  location: string
  constructionStarted: string
  toppedOut: string
  completed: string
  opened: string
  cost: string
  architect: string
  design: BurjKhalifaDesign[]
  foundation: string[]
  constructionMaterials: BurjKhalifaConstructionMaterial[]
  worldRecords: BurjKhalifaWorldRecord[]
  facilities: BurjKhalifaFacility[]
  operationalSpecs: BurjKhalifaOperationalSpec[]
  sources: string[]
}

export const burjKhalifa: BurjKhalifaData = {
  height: '828 meters (2,717 feet)',
  heightIncludingTip: '829.8 m (2,722 ft)',
  antennaSpire: '242.5 m (796 ft)',
  topFloor: '585.4 m (1,921 ft)',
  observatory: '555.7 m (1,823 ft)',
  floors: '154 + 9 maintenance levels (163 total)',
  location: 'Dubai, UAE',
  constructionStarted: 'January 6, 2004',
  toppedOut: 'January 17, 2009',
  completed: 'October 1, 2009',
  opened: 'January 4, 2010',
  cost: '$1.5 billion',
  architect: 'Adrian Smith (Skidmore, Owings & Merrill)',
  design: [
    { feature: 'Design Inspiration', details: 'Abstract rendering of Hymenocallis flower' },
    { feature: 'Plan Shape', details: 'Y-shaped (reduces wind forces)' },
    { feature: 'Spire Construction', details: 'Constructed inside tower and hoisted into position' },
  ],
  foundation: [
    'Reinforced concrete mat nearly 4m thick',
    '1.5m diameter concrete piles × 43m length',
    '192 foundation piles total',
  ],
  constructionMaterials: [
    { material: 'Concrete', quantity: '330,000 m³' },
    { material: 'Steel rebar', quantity: '55,000 tonnes' },
    { material: 'Glass panels', quantity: '28,000+ hand-cut' },
    { material: 'Man-hours', quantity: '22 million' },
    { material: 'Elevators', quantity: '57 + 8 escalators' },
    { material: 'Stairs', quantity: '2,909 (ground to 160th floor)' },
    { material: 'Windows', quantity: '24,348 (120,000 m² of glass)' },
  ],
  worldRecords: [
    { record: 'Tallest building', value: '828m (still holds)' },
    { record: 'Tallest freestanding structure', value: '829.8m' },
    { record: 'Longest elevator travel distance', value: 'Yes' },
    { record: 'Highest occupied floor', value: '585.4m' },
    { record: 'Highest habitable floor', value: 'Yes' },
    { record: 'Highest outdoor observation deck', value: '555.7m (At The Top - 124th floor)' },
    { record: 'Most floors', value: '163' },
    { record: 'Highest vertical concrete pumping', value: '606m' },
  ],
  facilities: [
    { facility: 'Elevators', details: '57' },
    { facility: 'Armani Hotel', details: 'Yes' },
    { facility: 'At.mosphere restaurant', details: '122nd floor' },
    { facility: 'Residential apartments', details: '900' },
    { facility: 'Office space', details: 'Yes' },
    { facility: 'Observation decks', details: 'Yes' },
    { facility: 'Health facilities', details: 'Yes' },
  ],
  operationalSpecs: [
    { system: 'Cooling capacity', specification: '46 MW' },
    { system: 'Water system', specification: '946,000 L per day through 100 km of pipes' },
    { system: 'Sway', specification: '1.5 m at tallest point' },
  ],
  sources: [
    'Wikipedia - Burj Khalifa',
    'Britannica',
  ],
}

// ----- D2. Palm Jumeirah -----

export interface PalmJumeirahStructure {
  section: string
  description: string
}

export interface PalmJumeirahHousing {
  type: string
  specification: string
}

export interface PalmJumeirahHotel {
  hotel: string
}

export interface PalmJumeirahNotableResident {
  person: string
  propertyValue: string
}

export interface PalmJumeirahEnvironmental {
  issue: string
  finding: string
}

export interface PalmJumeirahData {
  location: string
  type: string
  constructionStarted: string
  constructor: string
  developer: string
  firstHandover: string
  population2022: string
  hotels2024: string
  structure: PalmJumeirahStructure[]
  housing: PalmJumeirahHousing[]
  crescentHotels: PalmJumeirahHotel[]
  trunkHotels: PalmJumeirahHotel[]
  notableResidents: PalmJumeirahNotableResident[]
  environmentalImpact: PalmJumeirahEnvironmental[]
  sources: string[]
}

export const palmJumeirah: PalmJumeirahData = {
  location: '25°07′05″N 55°08′00″E; Jumeirah, Dubai; Persian Gulf',
  type: 'Human-made archipelago; part of larger Palm Islands',
  constructionStarted: 'June 2001',
  constructor: 'Van Oord (Dutch specialist)',
  developer: 'Nakheel Properties',
  firstHandover: '2006',
  population2022: '25,000+ residents',
  hotels2024: '~30 hotels',
  structure: [
    { section: 'Trunk', description: 'Mixed commercial and residential' },
    { section: 'Fronds', description: 'Residential homes and villas' },
    { section: 'Outer Crescent', description: 'Luxury resorts' },
    { section: 'Monorail', description: '5.4 km; first in Middle East; connects Atlantis Hotel to Gateway Towers' },
  ],
  housing: [
    { type: 'Originally planned', specification: '4,500 residential units' },
    { type: 'Apartments', specification: '375 to 11,774 sq ft' },
    { type: 'Villas', specification: '4,000 to 35,000 sq ft' },
  ],
  crescentHotels: [
    { hotel: 'Atlantis The Palm' },
    { hotel: 'Atlantis The Royal' },
    { hotel: 'Jumeirah Zabeel Saray' },
    { hotel: 'One&Only The Palm' },
    { hotel: 'Raffles The Palm Dubai' },
    { hotel: 'Waldorf Astoria Dubai Palm Jumeirah' },
    { hotel: 'W Dubai The Palm' },
  ],
  trunkHotels: [
    { hotel: 'Fairmont The Palm' },
    { hotel: 'FIVE Palm Jumeirah' },
    { hotel: 'Hilton Dubai Palm Jumeirah' },
    { hotel: 'Marriott Resort' },
    { hotel: 'The St. Regis Dubai' },
  ],
  notableResidents: [
    { person: 'Grigory Anikeev (Russian deputy)', propertyValue: '$13M penthouse' },
    { person: 'Mykola Zlochevskiy (Ukrainian oligarch)', propertyValue: '$11M in properties' },
    { person: 'Members of Azerbaijan\'s Aliyev family', propertyValue: 'Not disclosed' },
  ],
  environmentalImpact: [
    { issue: 'Sinking', finding: 'NASA satellites: 5mm per year (Nakheel reports no structural problems)' },
    { issue: 'Breakwater', finding: 'Originally prevented natural tidal movement; gaps now created to improve oxygenation' },
    { issue: 'Wildlife during COVID', finding: 'Dolphin sightings increased during lockdowns' },
  ],
  sources: [
    'Wikipedia - Palm Jumeirah',
    'Visit Dubai',
  ],
}

// ----- D3. World Islands Dubai -----

export interface WorldIslandsIsland {
  category: string
  count: string
  size: string
}

export interface WorldIslandsContinent {
  continent: string
}

export interface WorldIslandsSalesStatus {
  date: string
  status: string
}

export interface WorldIslandsConstructionTimeline {
  date: string
  event: string
}

export interface WorldIslandsDevelopmentStatus {
  date: string
  development: string
}

export interface WorldIslandsHeartOfEurope {
  islands: string
  features: string
}

export interface WorldIslandsErosion {
  issue: string
  finding: string
}

export interface WorldIslandsData {
  location: string
  type: string
  developer: string
  constructors: string
  sandUsed: string
  rockUsed: string
  averageSpacing: string
  unveiled: string
  breakwaterCompleted: string
  cost: string
  islands: WorldIslandsIsland[]
  continentGroups: WorldIslandsContinent[]
  salesFinancial: WorldIslandsSalesStatus[]
  constructionTimeline: WorldIslandsConstructionTimeline[]
  developmentStatus: WorldIslandsDevelopmentStatus[]
  heartOfEurope: WorldIslandsHeartOfEurope[]
  erosionConcerns: WorldIslandsErosion[]
  sources: string[]
}

export const worldIslands: WorldIslandsData = {
  location: 'Persian Gulf off Dubai coast; 6 km × 9 km area',
  type: 'Artificial archipelago shaped like world map',
  developer: 'Nakheel Properties',
  constructors: 'Van Oord and Boskalis (Dutch firms)',
  sandUsed: '321 million cubic metres',
  rockUsed: '386 million tons',
  averageSpacing: '100 metres between islands',
  unveiled: 'May 2003 by Al Maktoum',
  breakwaterCompleted: 'January 2008',
  cost: 'Estimated $13 billion CAD (2005)',
  islands: [
    { category: 'Originally planned', count: '200', size: '—' },
    { category: 'Later expanded', count: '260-300', size: '—' },
    { category: 'Individual island size', count: '—', size: '1.4-4.2 hectares each' },
  ],
  continentGroups: [
    { continent: 'Europe' },
    { continent: 'Africa' },
    { continent: 'Asia' },
    { continent: 'North America' },
    { continent: 'South America' },
    { continent: 'Antarctica' },
    { continent: 'Oceania' },
  ],
  salesFinancial: [
    { date: 'January 2008', status: '60% of islands sold' },
    { date: 'December 2008', status: '70% sold' },
    { date: 'Property peak', status: 'Q4 2008' },
    { date: 'Post-peak decline', status: 'Prices fell 58%' },
    { date: 'Recovery', status: 'Residential prices rose 17.9% (Aug 2012-2013)' },
  ],
  constructionTimeline: [
    { date: 'May 2003', event: 'Project announced' },
    { date: 'September 2003', event: 'Dredging began' },
    { date: 'December 2006', event: 'Reclamation 90% complete' },
    { date: 'January 2008', event: 'Breakwater completed' },
    { date: 'September 2008', event: 'Work suspended due to financial crisis' },
  ],
  developmentStatus: [
    { date: '2012', development: 'Lebanon Island: First commercially developed; events venue' },
    { date: '2014', development: 'Kleindienst Group launched "Heart of Europe"' },
    { date: 'January 2022', development: 'Anantara World Islands opened' },
    { date: 'December 2022', development: 'First Heart of Europe hotel (Côte d\'Azur Monaco) opened' },
  ],
  heartOfEurope: [
    { islands: 'Germany, Netherlands, Sweden, Ukraine, Main Europe, Switzerland, Monaco', features: 'Features outdoor snow, euro-only currency' },
  ],
  erosionConcerns: [
    { issue: '2011: Penguin Marine (independent verifier) confirmed erosion and silting of passageways', finding: 'Nakheel denied erosion issues' },
  ],
  sources: [
    'Wikipedia - The World (archipelago)',
    'Visit Dubai',
  ],
}

// ----- D4. Museum of the Future -----

export interface MuseumOfFutureArchitecture {
  element: string
  details: string
}

export interface MuseumOfFutureQuote {
  quote: string
}

export interface MuseumOfFutureExhibit {
  floor: string
  exhibit: string
  focus: string
}

export interface MuseumOfFutureInitiative {
  initiative: string
  date: string
}

export interface MuseumOfFutureAdmission {
  category: string
  price: string
}

export interface MuseumOfFutureData {
  location: string
  announcement: string
  foundation: string
  officialOpening: string
  floors: string
  cost: string
  leedCertification: string
  architecture: MuseumOfFutureArchitecture[]
  quotes: MuseumOfFutureQuote[]
  exhibits: MuseumOfFutureExhibit[]
  mission: string
  keyInitiatives: MuseumOfFutureInitiative[]
  admission: MuseumOfFutureAdmission[]
  visitorMilestone: string
  sources: string[]
}

export const museumOfFuture: MuseumOfFutureData = {
  location: 'Financial District, Dubai, UAE; Sheikh Zayed Road, Trade Centre 2',
  announcement: 'March 4, 2015 (by Sheikh Mohammed bin Rashid Al Maktoum)',
  foundation: 'Dubai Future Foundation launched April 24, 2016',
  officialOpening: 'February 22, 2022',
  floors: '7 (5 dedicated to exhibits)',
  cost: 'Approximately $136 million',
  leedCertification: 'Platinum (February 3, 2023)',
  architecture: [
    { element: 'Designer', details: 'Killa Design (Shaun Killa)' },
    { element: 'Engineer', details: 'Buro Happold' },
    { element: 'Shape', details: 'Torus-shaped building' },
    { element: 'Construction', details: '1,024 fire-retardant composite panels clad in stainless steel' },
    { element: 'Calligraphy', details: 'Arabic quotes by Emirati artist Matar Bin Lahej featuring Sheikh Mohammed\'s vision' },
  ],
  quotes: [
    { quote: '"We won\'t live for hundreds of years, but the products of our creativity can leave a legacy long after we are gone."' },
    { quote: '"The future will be for those who will be able to imagine, design and build it."' },
    { quote: '"The secret of the renewal of life... is in one word: innovation."' },
  ],
  exhibits: [
    { floor: '5th', exhibit: 'Orbital Space Station', focus: 'Space life' },
    { floor: '4th', exhibit: 'The HEAL Institute', focus: 'Ecology and biodiversity' },
    { floor: '3rd', exhibit: 'Al Waha', focus: 'Wellness therapies' },
    { floor: '2nd', exhibit: 'Tomorrow Today', focus: 'Cutting-edge technology' },
    { floor: '1st', exhibit: 'Future Heroes', focus: 'Interactive experiences for children under 10' },
  ],
  mission: '"To be the first one to look into the future, rather than the past"',
  keyInitiatives: [
    { initiative: 'Office of the Future (world\'s first 3D-printed office)', date: '2016' },
    { initiative: 'Dubai Future Foundation launch', date: 'April 24, 2016' },
    { initiative: 'Global Blockchain Council launch', date: 'February 17, 2016' },
    { initiative: 'Dubai Future Forum (first edition)', date: 'October 2022' },
  ],
  admission: [
    { category: 'Children under 4', price: 'Free' },
    { category: 'People of Determination + 1 caregiver', price: 'Free' },
    { category: 'Family experience (5 persons)', price: 'AED 350' },
  ],
  visitorMilestone: 'One million visitors from 163 countries in first year',
  sources: [
    'Wikipedia - Museum of the Future',
    'Museum of the Future',
  ],
}

// ----- D5. Louvre Abu Dhabi -----

export interface LouvreSize {
  metric: string
  value: string
}

export interface LouvreCost {
  component: string
  cost: string
}

export interface LouvreNotableExhibit {
  artwork: string
  artist: string
}

export interface LouvreVisitor {
  metric: string
  value: string
}

export interface LouvreData {
  location: string
  agreement: string
  constructionStarted: string
  opening: string
  architect: string
  director: string
  size: LouvreSize[]
  costStructure: LouvreCost[]
  architecture: string[]
  collection: string[]
  notableExhibits: LouvreNotableExhibit[]
  visitors: LouvreVisitor[]
  sources: string[]
}

export const louvreAbuDhabi: LouvreData = {
  location: 'Saadiyat Island, Abu Dhabi, UAE',
  agreement: '2007 (between UAE and France); Louvre name until 2047',
  constructionStarted: 'May 26, 2009; main construction early 2013',
  opening: 'November 8, 2017 (inaugurated by Emmanuel Macron and UAE leaders)',
  architect: 'Jean Nouvel',
  director: 'Manuel Rabaté',
  size: [
    { metric: 'Total area', value: '24,000 sqm (260,000 ft²)' },
    { metric: 'Gallery space', value: '8,000 sqm (86,000 ft²)' },
    { metric: 'Buildings', value: '55 buildings with 23 art galleries' },
  ],
  costStructure: [
    { component: 'Louvre name', cost: '€400 million' },
    { component: 'Art loans', cost: '€190 million' },
    { component: 'Management advice', cost: '€165 million' },
    { component: 'Total Agreement', cost: '€974.5 million' },
    { component: 'Construction Contract', cost: '$653 million' },
  ],
  architecture: [
    '"Floating dome" with web pattern filtering sunlight',
    '"Rays of sunlight passing through date palm fronds in an oasis"',
    'Dome: 7,000-tonne structure; 7,850 aluminum stars in 8 layers',
    'Construction: 4,536 piles',
  ],
  collection: [
    'Bridges Eastern and Western art',
    'Ancient artifacts to Impressionist masterpieces',
    'Works from French institutions (Louvre, Centre Pompidou, Musée d\'Orsay)',
  ],
  notableExhibits: [
    { artwork: '8,000-year-old statues', artist: 'Ain Ghazal, Jordan' },
    { artwork: 'La Belle Ferronnière', artist: 'Leonardo da Vinci' },
    { artwork: 'Self-portrait', artist: 'Vincent van Gogh' },
    { artwork: 'Napoleon Crossing the Alps', artist: 'Jacques-Louis David' },
    { artwork: 'Works', artist: 'Monet, Matisse, Manet, Gauguin' },
  ],
  visitors: [
    { metric: 'Visitors by 2019', value: '2 million' },
    { metric: 'Status', value: 'Arab world\'s most visited museum' },
  ],
  sources: [
    'Wikipedia - Louvre Abu Dhabi',
    'Louvre Abu Dhabi',
  ],
}

// ----- D6. Sheikh Zayed Grand Mosque -----

export interface SZGMCDimension {
  metric: string
  value: string
}

export interface SZGMCArchitecture {
  element: string
  specification: string
}

export interface SZGMMaterial {
  material: string
  source: string
}

export interface SZGMCConstructionTeam {
  entity: string
  role: string
}

export interface SZGMCVisitingHours {
  day: string
  hours: string
}

export interface SheikhZayedGrandMosqueData {
  location: string
  construction: string
  inauguration: string
  founder: string
  burial: string
  cost: string
  architect: string
  dimensions: SZGMCDimension[]
  capacity: { area: string; capacity: string }[]
  architecture: SZGMCArchitecture[]
  materials: SZGMMaterial[]
  calligraphy: string[]
  lighting: string
  inspiration: string[]
  constructionTeam: SZGMCConstructionTeam[]
  visitingHours: SZGMCVisitingHours[]
  sources: string[]
}

export const sheikhZayedGrandMosque: SheikhZayedGrandMosqueData = {
  location: 'Abu Dhabi, UAE',
  construction: '1994-2007',
  inauguration: 'December 2007',
  founder: 'Sheikh Zayed bin Sultan Al Nahyan (UAE president)',
  burial: 'Sheikh Zayed buried in courtyard (died 2004)',
  cost: 'Dhs 2 billion (US$545 million)',
  architect: 'Youssef Abdelke (Syrian)',
  dimensions: [
    { metric: 'Building complex', value: '290 × 420 m (950 × 1,380 ft)' },
    { metric: 'Area', value: '12+ hectares (excluding landscaping and parking)' },
    { metric: 'Main axis', value: 'Rotated 12° south of true west (toward Mecca)' },
  ],
  capacity: [
    { area: 'Total worshippers', capacity: '40,100+' },
    { area: 'Main prayer hall', capacity: '7,000+' },
    { area: 'Two smaller halls', capacity: '1,500 each (including women\'s prayer hall)' },
    { area: 'Courtyard', capacity: '17,000 sqm (largest marble mosaic in world)' },
  ],
  architecture: [
    { element: 'Domes', specification: '82 domes of 7 different sizes' },
    { element: 'Main dome', specification: '85 m tall; 32.2 m diameter' },
    { element: 'Minarets', specification: '4 × 104 m (341 ft) tall' },
    { element: 'Columns', specification: '1,000+' },
    { element: 'Chandeliers', specification: '24-carat gold gilded; 7 imported from Faustig (Munich, Germany); millions of Swarovski crystals' },
    { element: 'Largest chandelier', specification: '10 m diameter; 15 m height' },
    { element: 'Carpet', specification: 'World\'s largest: 5,627 sqm / 60,570 sqft; 35 tons; 2.268 billion knots' },
  ],
  materials: [
    { material: 'White marble', source: 'Macedon' },
    { material: 'Lapis lazuli', source: 'Various' },
    { material: 'Carnelian', source: 'Various' },
    { material: 'Amethyst', source: 'Various' },
    { material: 'Abalone shell', source: 'Various' },
    { material: 'Mother of pearl', source: 'Various' },
  ],
  calligraphy: [
    'Three styles: Naskhi, Thuluth, Kufic',
    '99 Names of God on Qibla wall',
  ],
  lighting: 'Designed by Speirs and Major Associates; Reflects phases of the moon',
  inspiration: [
    'Abu al-Abbas al-Mursi Mosque (Alexandria)',
    'Badshahi Mosque (Lahore)',
    'Persian, Mughal, Indo-Islamic architecture',
  ],
  constructionTeam: [
    { entity: 'Impregilo and Rizzani de Eccher', role: 'Initial joint venture' },
    { entity: 'ACC and Six Construct (BESIX Group, Belgium)', role: 'Completed 2004-2007' },
    { entity: 'Workers', role: '3,000+' },
    { entity: 'Sub-contracting companies', role: '38' },
    { entity: 'Materials from', role: 'Syria, India, Italy, Germany, Turkey, Pakistan, Malaysia, Iran, China, UK, New Zealand, North Macedonia, UAE' },
  ],
  visitingHours: [
    { day: 'Saturday-Thursday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 12:00 PM, 2:30 PM - 9:00 PM' },
  ],
  sources: [
    'Wikipedia - Sheikh Zayed Grand Mosque',
  ],
}

// ============================================================================
// SECTION E: SUMMARY TABLES
// ============================================================================

export interface AirportComparison {
  airport: string
  code: string
  passengers: string
  freightCapacity: string
  significance: string
}

export interface PortComparison {
  port: string
  teuCapacity: string
  ranking: string
  strategicRole: string
}

export interface EnergyInfrastructure {
  facility: string
  capacity: string
  output: string
  status: string
}

export interface DesalinationCapacity {
  region: string
  capacity: string
  shareOfWorld: string
}

export const airportComparison: AirportComparison[] = [
  { airport: 'Dubai International', code: 'DXB', passengers: '95.2M (2025 record)', freightCapacity: '2.2M tonnes', significance: 'World\'s busiest international passenger airport' },
  { airport: 'Zayed International', code: 'AUH', passengers: '29.5M (2024)', freightCapacity: '679K tonnes', significance: 'Abu Dhabi hub; only US preclearance in Middle East' },
  { airport: 'Al Maktoum', code: 'DWC', passengers: 'Limited', freightCapacity: '12M tonnes projected', significance: 'Future Dubai hub; $35B expansion planned' },
]

export const portComparison: PortComparison[] = [
  { port: 'Jebel Ali', teuCapacity: '13.7M (2021)', ranking: 'World\'s 9th', strategicRole: 'Largest man-made harbour; Maritime Silk Road' },
  { port: 'Khalifa', teuCapacity: '7.8M TEU', ranking: '—', strategicRole: 'Abu Dhabi flagship; Maritime Silk Road' },
  { port: 'Fujairah', teuCapacity: '720K TEU', ranking: '—', strategicRole: 'World\'s 2nd largest bunkering hub; eastern coast' },
]

export const energyInfrastructureSummary: EnergyInfrastructure[] = [
  { facility: 'Barakah Nuclear', capacity: '5,600 MW', output: '40 TWh/year', status: 'All 4 units operational 2024' },
  { facility: 'MBR Solar Park', capacity: '4,660 MW (by 2030)', output: '2,800 GWh/year', status: '1,800 MW operational' },
  { facility: 'Noor Abu Dhabi', capacity: '1,200 MW', output: '2,000 GWh/year', status: 'Operational since 2019' },
]

export const desalinationCapacitySummary: DesalinationCapacity[] = [
  { region: 'Abu Dhabi', capacity: '4.13M m³/day', shareOfWorld: '9%' },
  { region: 'UAE (total)', capacity: '~14% of world', shareOfWorld: '—' },
]

// ============================================================================
// SECTION F: GEOPOLITICAL INCIDENTS (2026)
// ============================================================================

export interface GeopoliticalIncident {
  aspect: string
  details: string
}

export interface DXBIncident {
  aspect: string
  details: string
}

export interface DroneStrikeIncident {
  aspect: string
  details: string
}

export interface BarakahThreat {
  aspect: string
  details: string
}

export interface FujairahAttack {
  date: string
  event: string
}

export const feb2026DXBIncident: DXBIncident[] = [
  { aspect: 'Location', details: 'Dubai International Airport' },
  { aspect: 'Injuries', details: '4 airport staff' },
  { aspect: 'Damage', details: 'Minor damage to a concourse' },
  { aspect: 'Operational Impact', details: 'All flight operations at DXB and DWC suspended' },
  { aspect: 'Cause', details: 'Timing coincided with widespread airspace closures amid regional security tensions' },
  { aspect: 'Secondary', details: 'Following Kuwait International Airport drone strike' },
  { aspect: 'Airlines Affected', details: 'Qatar Airways, Air India, IndiGo, Air Canada issued suspensions/reroutes' },
  { aspect: 'Resumption', details: 'March 2, 2026' },
]

export const march2026DroneStrike: DroneStrikeIncident[] = [
  { aspect: 'Target', details: 'Fuel tank near Dubai International Airport' },
  { aspect: 'Impact', details: 'Dubai airport halted all flights' },
  { aspect: 'Flights Diverted', details: '65 flights diverted to 34 airports' },
  { aspect: 'Operations', details: 'Gradually resuming after fire' },
]

export const march2026BarakahThreat: BarakahThreat[] = [
  { aspect: 'Threat', details: 'Iran listed Barakah among potential targets' },
  { aspect: 'Context', details: 'Following Trump\'s 48-hour ultimatum' },
  { aspect: 'IRGC Warning', details: 'Issued through Fars News Agency' },
  { aspect: 'Target Rationale', details: 'Facilities supplying electricity to American bases' },
  { aspect: 'Builder Status', details: 'South Korea has ~20 staff remaining at site' },
  { aspect: 'South Korea Response', details: 'Planning to bring 6 nuclear reactors online early' },
]

export const march2026FujairahAttacks: FujairahAttack[] = [
  { date: 'March 3-4', event: 'Debris from drone interceptions damaged oil storage tanks' },
  { date: 'March 9', event: 'Attack shut down the oil terminal' },
  { date: 'March 12', event: 'Terminal partially operating again' },
  { date: 'March 14', event: 'Iranian drones struck; fires and suspension of oil-loading' },
  { date: 'March 16', event: 'Another attack closed oil operations' },
  { date: 'Vessel Affected', event: 'Jag Laadki was loading oil at single point mooring when attacked' },
]

// ============================================================================
// SECTION G: SOURCE CREDIBILITY
// ============================================================================

export interface SourceCredibility {
  source: string
  type: string
  credibility: string
  dataQuality: string
}

export interface UAERelevanceAssessment {
  infrastructure: string
  uaeRelevanceScore: string
  justification: string
}

export const sourceCredibility: SourceCredibility[] = [
  { source: 'Wikipedia', type: 'Encyclopedia', credibility: 'High', dataQuality: 'Comprehensive but may lack recent updates' },
  { source: 'ENEC/EWEC', type: 'Official', credibility: 'Very High', dataQuality: 'Primary source for nuclear data' },
  { source: 'DP World', type: 'Official', credibility: 'Very High', dataQuality: 'Primary source for port data' },
  { source: 'Dubai Airports', type: 'Official', credibility: 'Very High', dataQuality: 'Primary source for DXB data' },
  { source: 'Abu Dhabi Ports', type: 'Official', credibility: 'Very High', dataQuality: 'Primary source for Khalifa Port' },
  { source: 'Port of Fujairah', type: 'Official', credibility: 'High', dataQuality: 'Primary source for Fujairah data' },
  { source: 'DEWA', type: 'Official', credibility: 'Very High', dataQuality: 'Primary source for solar data' },
  { source: 'KED Global', type: 'News', credibility: 'Medium', dataQuality: 'Secondary source for incidents' },
  { source: 'Airports Council International', type: 'Industry', credibility: 'High', dataQuality: 'Industry-verified statistics' },
]

export const uaeRelevanceAssessment: UAERelevanceAssessment[] = [
  { infrastructure: 'DXB', uaeRelevanceScore: 'Critical', justification: 'Core to UAE economy; busiest international hub' },
  { infrastructure: 'AUH', uaeRelevanceScore: 'High', justification: 'Abu Dhabi hub; national carrier connectivity' },
  { infrastructure: 'DWC', uaeRelevanceScore: 'Strategic', justification: 'Future Dubai hub; $35B investment' },
  { infrastructure: 'Jebel Ali', uaeRelevanceScore: 'Critical', justification: 'Largest port in Middle East; trade backbone' },
  { infrastructure: 'Khalifa Port', uaeRelevanceScore: 'Strategic', justification: 'Abu Dhabi flagship; Maritime Silk Road' },
  { infrastructure: 'Fujairah Port', uaeRelevanceScore: 'Strategic', justification: 'Only eastern seaboard; bunkering hub' },
  { infrastructure: 'Barakah', uaeRelevanceScore: 'Critical', justification: '25% of UAE electricity; first Arab nuclear' },
  { infrastructure: 'MBR Solar Park', uaeRelevanceScore: 'Strategic', justification: 'Key to UAE clean energy 2050 goals' },
  { infrastructure: 'Noor Abu Dhabi', uaeRelevanceScore: 'High', justification: 'Contributes to clean energy targets' },
  { infrastructure: 'Desalination', uaeRelevanceScore: 'Critical', justification: '14% of world desalinated water; water security' },
]

// ============================================================================
// SECTION H: VERIFICATION STATUS
// ============================================================================

export interface VerificationStatus {
  item: string
  status: string
}

export interface SourcesFetched {
  category: string
  count: string
}

export interface SourcesUnfetched {
  source: string
  reason: string
}

export const verificationStatus: VerificationStatus[] = [
  { item: 'All 17 queries executed', status: 'Yes' },
  { item: '29 pages fetched and analyzed', status: 'Yes' },
  { item: 'All data extracted from source pages', status: 'Yes' },
  { item: 'Source URLs documented for every piece of information', status: 'Yes' },
  { item: 'No fabrication - only documented what was actually read', status: 'Yes' },
  { item: 'Some pages returned 403 errors (Reuters, Business Insider, some government sites)', status: 'Partial' },
  { item: 'Some pages had timeout issues', status: 'Partial' },
]

export const sourcesSuccessfullyFetched: SourcesFetched[] = [
  { category: 'Wikipedia (11)', count: '11' },
  { category: 'Official Portals (5)', count: '5' },
  { category: 'Corporate Sites (4)', count: '4' },
  { category: 'News/Industry (2)', count: '2' },
  { category: 'Other (1)', count: '1' },
]

export const sourcesUnableToFetch: SourcesUnfetched[] = [
  { source: 'Reuters', reason: 'Access restricted' },
  { source: 'Business Insider', reason: '403' },
  { source: 'DEWA', reason: '403' },
  { source: 'SZ GMC', reason: '403' },
  { source: 'Fujairah Port', reason: '403' },
  { source: 'Britannica/Burj Khalifa site', reason: '403' },
]

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const infrastructureData = {
  executionMetadata,
  airports: {
    dubaiInternational: dubaiInternationalAirport,
    zayedInternational: zayedInternationalAirport,
    alMaktoumInternational: alMaktoumInternational,
  },
  ports: {
    jebelAli: jebelAliPort,
    khalifaPort: khalifaPort,
    fujairah: portOfFujairah,
  },
  energy: {
    barakahNuclear: barakahNuclear,
    mbrSolarPark: mbrSolarPark,
    noorAbuDhabi: NoorAbuDhabi,
    desalination: uaeDesalination,
  },
  landmarks: {
    burjKhalifa: burjKhalifa,
    palmJumeirah: palmJumeirah,
    worldIslands: worldIslands,
    museumOfFuture: museumOfFuture,
    louvreAbuDhabi: louvreAbuDhabi,
    sheikhZayedGrandMosque: sheikhZayedGrandMosque,
  },
  summaryTables: {
    airportComparison,
    portComparison,
    energyInfrastructure: energyInfrastructureSummary,
    desalinationCapacity: desalinationCapacitySummary,
  },
  geopoliticalIncidents: {
    dxbFebruary2026: feb2026DXBIncident,
    droneStrikeMarch2026: march2026DroneStrike,
    barakahThreatMarch2026: march2026BarakahThreat,
    fujairahAttacksMarch2026: march2026FujairahAttacks,
  },
  sourceCredibility: {
    sources: sourceCredibility,
    uaeRelevance: uaeRelevanceAssessment,
  },
  verification: {
    status: verificationStatus,
    fetched: sourcesSuccessfullyFetched,
    unfetched: sourcesUnableToFetch,
  },
}

export default infrastructureData
