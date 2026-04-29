// @ts-nocheck
/**
 * Sports Intelligence - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-9-sports-intelligence-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 17,
  pagesFetched: '28+',
  enrichmentDate: '2026-04-27',
  ssotClassification: 'UAE Sports Intelligence — Single Source of Truth'
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export interface FocusArea {
  id: string
  name: string
}

export const focusAreas: FocusArea[] = [
  { id: 'sportswashing', name: 'Sportswashing allegations (comprehensive)' },
  { id: 'fifa', name: 'FIFA relationships' },
  { id: 'mancity', name: 'Manchester City & Abu Dhabi ownership' },
  { id: 'yacht', name: 'Yacht racing' },
  { id: 'f1', name: 'Formula 1 Abu Dhabi' },
  { id: 'proleague', name: 'UAE Pro League' },
  { id: 'cricket', name: 'Cricket in UAE (IPL, PSL hosting)' },
  { id: 'tennis', name: 'Tennis, golf' },
  { id: 'militarysports', name: 'Military sports' },
  { id: 'camelracing', name: 'Camel racing (robot jockey controversy)' },
  { id: 'falconry', name: 'Falconry' },
  { id: 'olympics', name: 'UAE Olympic performance' },
  { id: 'diplomacy', name: 'Sports diplomacy' },
  { id: 'investment', name: 'Sports investment strategy' },
  { id: 'athletetreatment', name: 'Athlete treatment' },
  { id: 'betting', name: 'Sports betting' },
  { id: 'womensports', name: "Women's sports" },
  { id: 'youthsports', name: 'Youth sports development' },
  { id: 'infrastructure', name: 'Sports infrastructure spending' },
  { id: 'eventroi', name: 'Event hosting ROI analysis' },
  { id: 'softpower', name: 'Sport as soft power' },
  { id: 'humanrights', name: 'Athlete human rights concerns' },
  { id: 'doping', name: 'Doping, match-fixing, sports governance' },
  { id: 'fanculture', name: 'Fan culture' },
  { id: 'mediarights', name: 'Sports media rights' },
  { id: 'sponsorshipethics', name: 'Sports sponsorship ethics' }
]

// ============================================================================
// KEY QUERY PATTERNS EXECUTED
// ============================================================================

export interface QueryPattern {
  number: number
  pattern: string
}

export const keyQueryPatterns: QueryPattern[] = [
  { number: 1, pattern: '"UAE sportswashing" / "UAE sports laundering" / "UAE sports reputation"' },
  { number: 2, pattern: '"Manchester City" AND ("Abu Dhabi" OR "Mansour" OR "ownership")' },
  { number: 3, pattern: '"City Football Group" AND ("UAE" OR "Mubadala" OR "investor")' },
  { number: 4, pattern: '"Formula 1 Abu Dhabi" "Yas Marina" "Abu Dhabi Grand Prix"' },
  { number: 5, pattern: '"UAE Pro League" "UAE football" "UAE soccer"' },
  { number: 6, pattern: '"UAE cricket" "UAE IPL" "UAE PSL" "cricket in UAE"' },
  { number: 7, pattern: '"UAE camel racing" "camel race robot jockey" "camel jockey controversy"' },
  { number: 8, pattern: '"UAE Olympic" "UAE Olympics" "UAE Olympic performance"' },
  { number: 9, pattern: '"UAE sports investment" "UAE sports infrastructure"' },
  { number: 10, pattern: '"Emirates Airline" AND ("sports sponsorship" OR "Arsenal" OR "Real Madrid" OR "AC Milan")' },
  { number: 11, pattern: '"UAE" AND ("sports diplomacy")' },
  { number: 12, pattern: '"UAE" AND ("FIFA" AND ("relationship" OR "investigation" OR "corruption"))' },
  { number: 13, pattern: '"UAE" AND ("football" AND ("human rights" OR "worker" OR "exploitation"))' },
  { number: 14, pattern: '"UAE" AND ("doping" OR "match-fixing" OR "sports governance")' },
  { number: 15, pattern: '"UAE" AND ("athlete" AND ("rights" OR "treatment" OR "exploitation" OR "visa"))' },
  { number: 16, pattern: '"UAE" AND ("sportsbet" OR "sports betting" OR "gambling")' },
  { number: 17, pattern: '"UAE" AND ("women sports" OR "youth sports development")' }
]

// ============================================================================
// SECTION 1: SPORTSWASHING — COMPREHENSIVE ANALYSIS
// ============================================================================

export interface SportswashingDefinition {
  source: string
  definition: string
}

export const sportswashingDefinitions: SportswashingDefinition[] = [
  {
    source: 'Notre Dame Journal of International & Comparative Law (Feb 2026)',
    definition: 'Using sports to "project a positive image [in order to increase] credibility and status on the world\'s stage"'
  },
  {
    source: 'Wikipedia (First Usage)',
    definition: 'Applied to Azerbaijan and its hosting of the 2015 European Games in Baku'
  }
]

export interface SportswashingQuote {
  source: string
  quote: string
}

export const sportswashingQuotes: SportswashingQuote[] = [
  {
    source: 'Minky Worden (HRW Director of Global Initiatives)',
    quote: '"Sportswashing is a new term for a really old practice... taking something that people love, popular sports, and using those events that you\'re hosting to cover up or to whitewash very serious human rights abuses in a country."'
  }
]

export interface SportswashingVector {
  vector: string
  details: string
  criticismLevel: string
}

export const sportswashingVectors: SportswashingVector[] = [
  { vector: 'Manchester City/City Football Group', details: 'Abu Dhabi ownership since 2008', criticismLevel: 'Critical' },
  { vector: 'NBA Partnership', details: '$500M Emirates NBA Cup, preseason games', criticismLevel: 'Critical' },
  { vector: 'Formula 1', details: 'Abu Dhabi Grand Prix at Yas Marina since 2009', criticismLevel: 'High' },
  { vector: 'Cricket', details: 'IPL/PSL hosting, Asia Cup', criticismLevel: 'High' },
  { vector: 'Emirates Airline Sponsorships', details: 'Arsenal, Real Madrid, AC Milan, etc.', criticismLevel: 'High' },
  { vector: 'Horse/Camel Racing', details: 'Dubai World Cup, robot jockeys', criticismLevel: 'Medium' },
  { vector: 'Golf', details: 'Abu Dhabi HSBC Championship', criticismLevel: 'Medium' },
  { vector: 'UFC/Combat Sports', details: 'Events in Abu Dhabi', criticismLevel: 'Medium' }
]

// ============================================================================
// SECTION 1.3: MANCHESTER CITY / CITY FOOTBALL GROUP
// ============================================================================

export interface CFGOwnership {
  stakeholder: string
  share: string
  notes: string
}

export const cfgOwnership: CFGOwnership[] = [
  { stakeholder: 'Abu Dhabi United Group (ADUG)', share: '81%', notes: 'Sheikh Mansour bin Zayed Al Nahyan' },
  { stakeholder: 'Silver Lake (US investment firm)', share: '18%', notes: 'Since 2018' },
  { stakeholder: 'China Media Capital / CITIC Capital', share: '1%', notes: 'Since 2015' }
]

export interface CFGKeyIndividual {
  name: string
  role: string
  background: string
}

export const cfgKeyIndividuals: CFGKeyIndividual[] = [
  { name: 'Sheikh Mansour bin Zayed Al Nahyan', role: 'Ultimate beneficial owner', background: 'UAE Vice President, Deputy PM, member of Al Nahyan ruling family' },
  { name: 'Khaldoon Al Mubarak', role: 'Chairman, CFG & Manchester City', background: 'CEO of Mubadala Investment Company' },
  { name: 'Ferran Soriano', role: 'CEO, Manchester City', background: 'Created CFG vision, authored "Goal: The Ball Doesn\'t Go In By Chance"' },
  { name: 'Li Ruigang', role: 'Board member', background: 'China Media Capital' }
]

export interface CFGFinancialTimeline {
  year: string
  event: string
  value: string
}

export const cfgFinancialTimeline: CFGFinancialTimeline[] = [
  { year: 'September 1, 2008', event: 'ADUG takeover announced', value: '£200 million' },
  { year: 'September 23, 2008', event: 'Takeover completed', value: '£200 million' },
  { year: '2008-2010', event: 'Transfer spending', value: '~£320 million' },
  { year: '2009', event: 'Club loss (fiscal year)', value: '£92.5 million' },
  { year: 'December 2015', event: 'Chinese investment (13% stake)', value: '£265 million for 13%, valuing CFG at $3 billion' },
  { year: '2023-24', event: 'Manchester City revenue', value: '€837.8 million (2nd in Deloitte Money League)' }
]

export interface MancityAchievement {
  achievement: string
  details: string
}

export const mancityAchievements: MancityAchievement[] = [
  { achievement: 'Premier League titles', details: 'Multiple (2011-12, 2013-14, 2017-18, 2018-19, 2020-21, 2021-22, 2022-23, 2023-24)' },
  { achievement: 'FA Cup', details: '2011' },
  { achievement: 'League Cups', details: '2012, 2014, 2018, 2019, 2020, 2021' },
  { achievement: 'Champions League', details: '2023' },
  { achievement: '2017-18 records', details: 'Premier League records for goals, points, wins' }
]

export interface CFGClub {
  club: string
  location: string
  ownershipPercent: string
}

export const cfgGlobalClubHoldings: CFGClub[] = [
  { club: 'Manchester City', location: 'England', ownershipPercent: '100%' },
  { club: 'Melbourne City', location: 'Australia', ownershipPercent: '100%' },
  { club: 'Montevideo City Torque', location: 'Uruguay', ownershipPercent: '100%' },
  { club: 'Troyes', location: 'France', ownershipPercent: '100%' },
  { club: 'Lommel', location: 'Belgium', ownershipPercent: '99%' },
  { club: 'New York City FC', location: 'USA', ownershipPercent: '80%' },
  { club: 'Bahia', location: 'Brazil', ownershipPercent: '90%' },
  { club: 'Palermo', location: 'Italy', ownershipPercent: '94.94%' },
  { club: 'Girona', location: 'Spain', ownershipPercent: '47%' },
  { club: 'Yokohama F. Marinos', location: 'Japan', ownershipPercent: '20%' },
  { club: 'Shenzhen Peng City', location: 'China', ownershipPercent: '47%' }
]

export interface MancityQuote {
  source: string
  quote: string
}

export const mancityQuotes: MancityQuote[] = [
  {
    source: 'Garry Cook (CEO, 2008)',
    quote: '"There was chaos. Everybody was clinging to the wreckage. We couldn\'t pay the bills. We couldn\'t pay the wages. Money was frozen."'
  },
  {
    source: 'Vincent Kompany',
    quote: '"I wasn\'t aware [of the planned takeover when I joined]. Like every player who signs for a new club I was told about big plans and big projects... You listen and you never believe. I was lucky, the guys came in, took over the club and held onto every single promise."'
  },
  {
    source: 'The Guardian',
    quote: '"Abu Dhabi\'s investment in Manchester City FC was described as a \'masterstroke, recasting the Al Nahyan ruling family as savvy investors rather than ruthless autocrats."'
  }
]

// ============================================================================
// SECTION 1.4: NBA PARTNERSHIP — EMIRATES NBA CUP
// ============================================================================

export interface NBAPartnershipDetails {
  item: string
  details: string
}

export const nbaPartnershipDetails: NBAPartnershipDetails[] = [
  { item: 'Sponsorship value', details: '$500 million (reported)' },
  { item: 'Partnership signed', details: 'November 2021' },
  { item: 'Preseason games', details: 'Since 2022-23 season' },
  { item: 'First Emirates NBA Cup game', details: 'November 12, 2024 (Detroit)' },
  { item: 'Preseason games Oct 2024', details: 'October 4 & 6, 2024 (Abu Dhabi)' },
  { item: 'Planned NBA Global Academy', details: 'NYU Abu Dhabi campus' }
]

export const nba2025Games = [
  'Knicks vs 76ers: October 2025 in Abu Dhabi',
  'New York Knicks Instagram: 4+ million followers, 10+ promotional posts featuring camels, local food, desert, Ferrari World'
]

export const nbaUpcoming = [
  'NBA-branded European league (potential launch 2027)',
  'Abu Dhabi seeking investment in new league'
]

export interface NBAHumanRightsCriticism {
  source: string
  date: string
  keyStatement: string
}

export const nbaHumanRightsCriticisms: NBAHumanRightsCriticism[] = [
  {
    source: 'HRW',
    date: 'October 3, 2024',
    keyStatement: '"While the NBA is entertaining spectators in Abu Dhabi, people will be dying in Sudan, where the UAE has been credibly accused of providing support to abusive parties." — Joey Shea, UAE researcher'
  },
  {
    source: 'Refugees International',
    date: '2025',
    keyStatement: '"The Emirates NBA Cup COULD bring out the best in everyone. Instead, it\'s being used to sportswash atrocities fueled + funded by the UAE in Sudan."'
  },
  {
    source: 'US Senators',
    date: 'June 2025',
    keyStatement: '"The NBA has long positioned itself as a beacon of social justice" but continues "developing relationships with dictators and despots."'
  }
]

export interface HumanRightsViolation {
  issue: string
  details: string
}

export const humanRightsViolations: HumanRightsViolation[] = [
  { issue: 'Sudan RSF', details: 'UAE allegedly supplying weapons to RSF, responsible for genocide' },
  { issue: 'Political prisoners', details: 'July 10, 2024: At least 44 human rights defenders sentenced to 15 years to life' },
  { issue: 'Ahmed Mansoor', details: 'Leading human rights defender, imprisoned since March 2017 in isolation, re-sentenced July 2024 to 15 years, appeal rejected March 2025' },
  { issue: 'Migrant workers', details: '88% of UAE workforce; wage theft, recruitment fees, passport confiscation under kafala system' },
  { issue: 'Press freedom', details: 'UAE ranked 164/180 in RSF press freedom index (2025)' }
]

// ============================================================================
// SECTION 1.5: FORMULA 1 ABU DHABI GRAND PRIX
// ============================================================================

export const f1Venue = {
  name: 'Yas Marina Circuit',
  location: 'Abu Dhabi',
  length: '5.281 km'
}

export const f1History = {
  hostedSince: 2009,
  note: 'Final race of each F1 season (except 2020-21 disruptions)'
}

export interface F1RaceResult {
  year: string
  winner: string
  pole: string
  fastestLap: string
  attendance: string
  raceTime?: string
}

export const f1RaceResults: F1RaceResult[] = [
  {
    year: '2024 Abu Dhabi Grand Prix (December 8, 2024)',
    winner: 'Lando Norris (McLaren-Mercedes)',
    pole: 'Lando Norris (1:22.595)',
    fastestLap: 'Kevin Magnussen (Haas-Ferrari) — 1:25.637, lap 57',
    attendance: '190,000',
    raceTime: '1:26:33.291'
  },
  {
    year: '2025 Abu Dhabi Grand Prix (December 7, 2025)',
    winner: 'Max Verstappen (Red Bull Racing-Honda RBPT)',
    pole: 'Max Verstappen (1:22.207)',
    fastestLap: 'Charles Leclerc — 1:26.725 (lap 45)',
    attendance: '203,000'
  }
]

export interface F1Top3Finisher {
  position: string
  driver: string
  team: string
  gap?: string
}

export const f12024Top3: F1Top3Finisher[] = [
  { position: '1', driver: 'Lando Norris', team: 'McLaren', gap: '—' },
  { position: '2', driver: 'Carlos Sainz Jr.', team: 'Ferrari', gap: '+5.832s' },
  { position: '3', driver: 'Charles Leclerc', team: 'Ferrari', gap: '+31.928s' }
]

export const f12025Top3: F1Top3Finisher[] = [
  { position: '1', driver: 'Max Verstappen', team: 'Red Bull', gap: '—' },
  { position: '2', driver: 'Oscar Piastri', team: 'McLaren', gap: '—' },
  { position: '3', driver: 'Lando Norris', team: 'McLaren', gap: '—' }
]

export interface F1ChampionshipStandings {
  year: string
  championship: string
  winner: string
  points: string
}

export const f1ChampionshipStandings: F1ChampionshipStandings[] = [
  { year: '2024', championship: 'Drivers', winner: 'Max Verstappen', points: '437 pts' },
  { year: '2024', championship: 'Constructors', winner: 'McLaren', points: '666 pts' },
  { year: '2025', championship: 'Drivers', winner: 'Lando Norris', points: '423 pts (maiden title, 2 pts ahead of Verstappen)' },
  { year: '2025', championship: 'Constructors', winner: 'McLaren', points: '833 pts' }
]

export const f12024Farewells = [
  "Lewis Hamilton's final Mercedes race",
  "Carlos Sainz Jr.'s final Ferrari race",
  "Kevin Magnussen's last F1 race"
]

export const f12025HistoricalSignificance = [
  'First championship-deciding final round since 2021',
  'Final race of ground-effect car era (introduced 2022)',
  'Final race for Honda as Red Bull/Racing Bulls power unit supplier',
  'Final race for Renault as Alpine engine supplier',
  "Lewis Hamilton finished 8th — first season without podium in 19-year career"
]

export const f1EconomicImpact = {
  annualTourismRevenue: '$150 million (AED 550 million)',
  totalUAESportsInfrastructure: 'Over $10 billion total UAE sports infrastructure investment'
}

// ============================================================================
// SECTION 1.6: CRICKET IN UAE
// ============================================================================

export const uaeCricketIndustry = {
  annualContribution: '$300 million (AED 1.1 billion)',
  status: 'Default regional hub for South Asian cricket',
  hosted: 'IPL matches, PSL matches, Asia Cup'
}

export interface PSL2025Relocation {
  item: string
  details: string
}

export const psl2025Relocation: PSL2025Relocation[] = [
  { item: 'Trigger', details: 'Drone strike near Rawalpindi Stadium (India-Pakistan conflict)' },
  { item: 'Matches relocated', details: '8 remaining PSL matches' },
  { item: 'Request declined', details: 'Emirates Cricket Board declined PCB request' },
  { item: 'Reason cited', details: 'Prior BCCI commitments; influence from Jay Shah (BCCI Secretary)' },
  { item: 'UAE official quote', details: '"We owe it to BCCI and Jay Shah" for declining' }
]

export const pslDetails = {
  overseasPlayers: '37 from Australia, New Zealand, South Africa, West Indies, Bangladesh, Sri Lanka, Afghanistan',
  keyFigures: 'PCB chairman Mohsin Naqvi (also Interior Minister), Foreign Minister Ishaq Dar'
}

export const iplContext = [
  'Match between Punjab Kings and Delhi Capitals in Dharamsala abandoned due to flood light failure',
  'Final scheduled May 25 at Kolkata\'s Eden Gardens',
  'BCCI expected to make decision on IPL future amid tensions'
]

export const cricketStrategicSignificance = [
  "Cricket's popularity in South/Southeast Asia aligns with regions supplying UAE's migrant workforce",
  "Abu Dhabi's cricket investments carry diplomatic significance"
]

// ============================================================================
// SECTION 1.7: CAMEL RACING AND ROBOT JOCKEYS
// ============================================================================

export interface CamelRacingTimeline {
  year: string
  event: string
}

export const camelRacingTimeline: CamelRacingTimeline[] = [
  { year: 'Early 2001', event: 'Qatar government initiated robot jockey development' },
  { year: '2002', event: 'Rashid Ali Ibrahim (Qatar Scientific Club) developed first successful model' },
  { year: 'July 29, 2002', event: 'UAE banned children under 15 as jockeys (Sheikh Hamdan bin Zayed Al Nahyan)' },
  { year: '2003', event: 'Design sent to Swiss firm K-Team under Alexandre Colot' },
  { year: '2005', event: 'Qatar banned child jockeys; first official robotic jockey race in Qatar' },
  { year: '2007', event: 'Qatar mandated all robotic jockeys' },
  { year: 'Present', event: 'Extended to all GCC countries' }
]

export interface RobotJockeySpec {
  specification: string
  originalKTeam: string
  laterModels: string
}

export const robotJockeySpecs: RobotJockeySpec[] = [
  { specification: 'Weight', originalKTeam: '16-18 kg', laterModels: '2-3 kg' },
  { specification: 'Control', originalKTeam: '—', laterModels: 'Two-way radio, GSM' },
  { specification: 'Operator', originalKTeam: '—', laterModels: 'Remote from SUVs alongside track' },
  { specification: 'Monitoring', originalKTeam: '—', laterModels: 'Camel speed, heart rate' }
]

export const camelRacingHumanRightsContext = [
  'Child jockeys as young as 4 were used previously',
  'Boys often starved and sold into servitude',
  '2010: Volunteers from Anti-Slavery International photographed violations of UAE ban'
]

// ============================================================================
// SECTION 1.8: MAJOR RECENT EVENTS HOSTED BY UAE
// ============================================================================

export interface UAEHostedEvent {
  event: string
  details: string
}

export const uaeHostedEvents: UAEHostedEvent[] = [
  { event: 'Asia Cup Cricket', details: 'Hosted by UAE' },
  { event: 'NBA preseason games', details: 'Abu Dhabi (annual since 2022-23)' },
  { event: 'UFC events', details: 'Abu Dhabi' },
  { event: 'Formula 1', details: 'Abu Dhabi Grand Prix with Katy Perry performance' },
  { event: 'Abu Dhabi HSBC Golf Championship', details: 'Annual' },
  { event: 'Padel tournament', details: 'Major event' },
  { event: 'EuroLeague Final Four', details: 'First time outside Europe, Etihad Arena Abu Dhabi' }
]

// ============================================================================
// SECTION 2: SPORTS INFRASTRUCTURE AND INVESTMENT
// ============================================================================

export interface InvestmentOverview {
  metric: string
  valueUSD: string
  valueAED: string
}

export const investmentOverview: InvestmentOverview[] = [
  { metric: 'Total invested (past decade)', valueUSD: '$10+ billion', valueAED: 'AED 36.7 billion' },
  { metric: 'Planned investment by 2030', valueUSD: '$2 billion', valueAED: 'AED 7.3 billion' },
  { metric: 'Sports contribution to GDP', valueUSD: '$5+ billion', valueAED: 'AED 18.3 billion' },
  { metric: 'Sports tourism market', valueUSD: '$1 billion', valueAED: 'AED 3.67 billion' },
  { metric: 'Annual sports tourists', valueUSD: '1.5 million+', valueAED: '—' },
  { metric: 'Sports sector jobs', valueUSD: '50,000+', valueAED: '—' },
  { metric: 'Sponsorships/broadcasting deals', valueUSD: '$2+ billion', valueAED: 'AED 7.3 billion' }
]

export interface KeyVenue {
  venue: string
  location: string
  purpose: string
}

export const keyVenues: KeyVenue[] = [
  { venue: 'Dubai Sports City', location: 'Dubai', purpose: 'Football, cricket, academies' },
  { venue: 'Yas Marina Circuit', location: 'Abu Dhabi', purpose: 'Formula 1, motorsports' },
  { venue: 'Al Maktoum Stadium', location: 'Dubai', purpose: 'Football' },
  { venue: 'Hamdan Sports Complex', location: 'Dubai', purpose: 'Swimming, aquatic sports (15,000 seats, solar-powered lighting)' },
  { venue: 'Sheikh Zayed Cricket Stadium', location: 'Abu Dhabi', purpose: 'International cricket' },
  { venue: 'Dubai International Stadium', location: 'Dubai', purpose: '25,000 capacity cricket' },
  { venue: 'Zayed Sports City', location: 'Abu Dhabi', purpose: 'Multi-sport' },
  { venue: 'Etihad Arena', location: 'Abu Dhabi', purpose: 'Basketball, concerts (EuroLeague Final Four host)' }
]

export interface MajorEventEconomics {
  event: string
  revenuePrizePool: string
}

export const majorEventEconomics: MajorEventEconomics[] = [
  { event: 'Formula 1 Abu Dhabi Grand Prix', revenuePrizePool: '$150 million annual tourism revenue' },
  { event: 'Dubai Tennis Championships', revenuePrizePool: '$2.8 million prize pool' },
  { event: 'Dubai World Cup (horse racing)', revenuePrizePool: '$12 million prize pool' },
  { event: 'UFC/Combat Sports', revenuePrizePool: '$200 million revenue' },
  { event: 'UAE cricket industry', revenuePrizePool: '$300 million annually' }
]

export interface Vision2030Goal {
  target: string
  goal: string
}

export const vision2030Goals: Vision2030Goal[] = [
  { target: 'Sports sector GDP contribution', goal: 'Double current' },
  { target: 'Annual sports tourists', goal: '5 million by 2030' },
  { target: 'Community sports participation', goal: '71% (National Sports Strategy 2031)' },
  { target: 'Investment focus', goal: 'E-sports and digital sports platforms' }
]

export interface MiddleEastMarketStats {
  metric: string
  value: string
}

export const middleEastMarketStats: MiddleEastMarketStats[] = [
  { metric: 'Middle East media revenue growth', value: '3.7% annually through 2028' },
  { metric: 'Global average growth', value: '2.7%' },
  { metric: 'UAE share of global sports investments', value: '24% (per PwC 2024 survey)' }
]

// ============================================================================
// SECTION 3: UAE PRO LEAGUE (ADNOC Pro League)
// ============================================================================

export const uaeProLeagueOverview = {
  fullName: 'ADNOC Pro League (naming sponsor)',
  edition: '50th edition (2024-25)',
  seasonDates: 'August 23, 2024 – May 25, 2025',
  teams: 14,
  champions2024_25: 'Shabab Al Ahli (9th title)',
  defendingChampions: 'Al Wasl',
  relegated: 'Dibba Al Hisn, Al Urooba'
}

export interface ProLeagueStanding {
  position: string
  club: string
  points: string
  wdl?: string
  gfGa?: string
  gd?: string
}

export const proLeagueStandings2024_25: ProLeagueStanding[] = [
  { position: '1', club: 'Shabab Al Ahli', points: '63', wdl: 'W19-D6-L1', gfGa: '57-22', gd: '+35' },
  { position: '2', club: 'Sharjah', points: '51', wdl: 'W16-D3-L7' },
  { position: '3', club: 'Al Wahda', points: '48' },
  { position: '4', club: 'Al Wasl', points: '46' },
  { position: '5', club: 'Al Ain', points: '44' },
  { position: '6', club: 'Al Nasr', points: '38' },
  { position: '7', club: 'Al Jazira', points: '37' },
  { position: '8', club: 'Khor Fakkan', points: '33' },
  { position: '9', club: 'Kalba', points: '32' },
  { position: '10', club: 'Ajman', points: '31' },
  { position: '11', club: 'Al Bataeh', points: '27' },
  { position: '12', club: 'Baniyas', points: '27' },
  { position: '13', club: 'Dibba Al Hisn', points: '16' },
  { position: '14', club: 'Al Urooba', points: '13' }
]

export interface AFCAFCQualification {
  competition: string
  qualifyingClubs: string
}

export const afcQualifications: AFCAFCQualification[] = [
  { competition: 'AFC Champions League Elite', qualifyingClubs: 'Shabab Al Ahli, Sharjah, Al Wahda' },
  { competition: 'AFC Champions League Two', qualifyingClubs: 'Al Wasl' },
  { competition: 'Gulf Club Champions League', qualifyingClubs: 'Al Ain' }
]

export interface TopScorer {
  player: string
  club: string
  goals: string
}

export const topScorers2024_25: TopScorer[] = [
  { player: 'Kodjo Fo-Doh Laba', club: 'Al Ain', goals: '18' },
  { player: 'Omar Khribin', club: 'Al Wahda', goals: '13' },
  { player: 'Mehdi Ghayedi', club: 'Kalba', goals: '12' },
  { player: 'Sardar Azmoun', club: 'Shabab Al Ahli', goals: '11' },
  { player: 'Caio Lucas', club: '—', goals: '8' },
  { player: 'Ali Mabkhout', club: '—', goals: '8' },
  { player: 'Soufiane Rahimi', club: '—', goals: '8' },
  { player: 'Anatole Abang', club: '—', goals: '8' }
]

export interface NotableForeignPlayer {
  player: string
  nationality: string
  club: string
}

export const notableForeignPlayers: NotableForeignPlayer[] = [
  { player: 'Kodjo Fo-Doh Laba', nationality: 'Togo', club: 'Al Ain' },
  { player: 'Omar Khribin', nationality: 'Syria', club: 'Al Wahda' },
  { player: 'Sardar Azmoun', nationality: 'Iran', club: 'Shabab Al Ahli' },
  { player: 'Nabil Fekir', nationality: 'France', club: '—' },
  { player: 'Haris Seferovic', nationality: 'Switzerland', club: '—' },
  { player: 'Kaku', nationality: 'Paraguay', club: '—' },
  { player: 'Soufiane Rahimi', nationality: 'Morocco', club: '—' },
  { player: 'Adel Taarabt', nationality: 'Morocco', club: '—' }
]

export interface HeadCoach {
  coach: string
  club: string
}

export const notableHeadCoaches: HeadCoach[] = [
  { coach: 'Paulo Sousa', club: 'Shabab Al Ahli' },
  { coach: 'Alfredo Schreuder', club: 'Al Nasr' },
  { coach: 'Miloš Milojević', club: 'Al Wasl' },
  { coach: 'Vladimir Ivić', club: 'Al Ain' }
]

export interface EmiratesSponsorship {
  teamCompetition: string
  partnershipType: string
}

export const emiratesSponsorshipPortfolio: EmiratesSponsorship[] = [
  { teamCompetition: 'AC Milan', partnershipType: 'Shirt sponsor (since 2007, extended 2025)' },
  { teamCompetition: 'Arsenal FC', partnershipType: 'Shirt sponsor (since 2004, until 2028); stadium naming rights (until 2038)' },
  { teamCompetition: 'Real Madrid', partnershipType: 'Main shirt sponsor (since 2011/2013, extension imminent)' },
  { teamCompetition: 'Olympique Lyonnais', partnershipType: 'Sponsor' },
  { teamCompetition: 'S.L. Benfica', partnershipType: 'Sponsor' },
  { teamCompetition: 'The Emirates FA Cup', partnershipType: 'Title sponsor' },
  { teamCompetition: 'UAE Pro League', partnershipType: 'Sponsor' },
  { teamCompetition: 'Bayern Munich', partnershipType: 'New partner (2025-26 to 2031-32)' }
]

export const acMilanPartnership = [
  '20-year relationship marking milestone',
  '"Fly Better" logo on men\'s first team shirts',
  'Also on AC Milan Academy youth players\' shirts',
  'LED branding, exclusive digital content, fan engagement, premium hospitality'
]

export const emiratesArsenalPartnership = [
  'Entering third decade as main shirt sponsor',
  'Arsenal 14-time FA Cup winners',
  'Executive VP Boutros Boutros: "dual partnerships a good strategy"'
]

// ============================================================================
// SECTION 4: SPORTS DIPLOMACY
// ============================================================================

export const sportsDiplomacyPanel = {
  event: '"Sports and Diplomacy in the UAE" panel',
  date: 'April 30, 2024',
  location: 'NYU Abu Dhabi Institute, New York',
  coreMessage: '"Sport has the power to change lives by promoting values of health, education, and cooperation among people."'
}

export interface PanelMember {
  name: string
  role: string
}

export const panelMembers: PanelMember[] = [
  { name: 'Dana Al Marashi', role: 'Head of Cultural Diplomacy, UAE Embassy in US' },
  { name: 'Emeka Okafor', role: 'NBA Legend' },
  { name: 'Jennifer O\'Sullivan', role: 'COO, NYCFC' },
  { name: 'Lee Igel', role: 'Clinical Professor, NYU Preston Robert Tisch Institute for Global Sport' },
  { name: 'Eric DiMiceli', role: 'VP, NBA Social Responsibility' },
  { name: 'Chris Dawes (moderator)', role: 'Associate Professor of Politics, NYU' }
]

export const uaeEmbassyStatement = [
  '"Sports transcends language, nationality and cultural boundaries."',
  'Athletes serve as "natural cultural ambassadors" due to their "sociable and inclusive personalities" and "passion for their sport."'
]

export interface SportsDiplomacyProgram {
  program: string
  details: string
}

export const uaeEmbassySportsPrograms: SportsDiplomacyProgram[] = [
  { program: "Women's ice hockey", details: 'UAE team traveled to US, hosted youth clinics, worked with athletes with disabilities' },
  { program: "Women's soccer", details: 'UAE national team toured US for community outreach' },
  { program: 'Community Soccer Program', details: 'Constructed soccer fields across US "from Los Angeles to New York City"' },
  { program: 'NBA games', details: 'Third set of preseason games in 2024' },
  { program: 'Team USA Basketball', details: 'Two games at Etihad Arena before Paris Olympics' }
]

export interface AbuDhabiMediaInvestment {
  investment: string
  details: string
}

export const abuDhabiMediaInvestments: AbuDhabiMediaInvestment[] = [
  { investment: 'Starzplay', details: 'Nurtured by Abu Dhabi Investment Office' },
  { investment: 'Serie A rights', details: 'Exclusive regional rights held by Abu Dhabi Media' },
  { investment: 'EuroLeague Final Four', details: 'Hosted at Etihad Arena (first time outside Europe)' }
]

export const historicalSportsConnections = [
  'Muhammad Ali',
  'Kobe Bryant',
  'Tiger Woods'
]

// ============================================================================
// SECTION 5: SPORTS GOVERNANCE AND REGULATION
// ============================================================================

export const federalLaw42023 = {
  law: 'Federal Law No. 4/2023 Concerning the Regulation of Sports',
  objectives: [
    { objective: 'Enhancing Governance and Integrity', description: 'Transparency and accountability standards' },
    { objective: 'Protecting Rights and Interests', description: 'Athletes, coaches, administrators' },
    { objective: 'Promoting Private Investment', description: 'Sporting clubs and infrastructure' },
    { objective: 'Ensuring Compliance', description: 'International health, safety, anti-doping standards' }
  ]
}

export const sportsGovernanceBodies = {
  generalAuthorityOfSports: [
    'Strategic planning',
    'Licensing and accreditation of sports clubs and facilities',
    'Monitoring financial and administrative performance',
    'Oversight and supervision'
  ],
  nationalSportsFederations: [
    'Function as delegated regulatory bodies for specific disciplines',
    'Operate under law while maintaining domain independence'
  ],
  ministryOfSports: [
    'Established under Federal Decree No. 28 of 2024',
    'Develops national sports policies and strategies'
  ]
}

export interface AthleteContractElement {
  element: string
  details: string
}

export const athleteContractElements: AthleteContractElement[] = [
  { element: 'Coverage', details: 'Compensation, intellectual property rights, dispute resolution' },
  { element: 'Resolution mechanism', details: 'Arbitration or sports tribunals before civil courts' },
  { element: 'Standardization', details: 'Formalized under Federal Law 4/2023' }
]

export const antiDopingFramework = {
  framework: 'World Anti-Doping Agency (WADA) Code',
  nationalBody: 'UAE National Anti-Doping Agency (NADA)',
  recentActivity: 'Intervention to 2025 WADA World Conference on Doping in Sport'
}

export const matchFixing = {
  classification: 'Serious criminal offense under Federal Law 4/2023',
  enforcement: 'Designated as criminal matter'
}

export interface CommercialOperationArea {
  area: string
  governance: string
}

export const commercialOperations: CommercialOperationArea[] = [
  { area: 'Sponsorship', governance: 'Formalized financial disclosure requirements' },
  { area: 'Media rights', governance: 'Regulated' },
  { area: 'Broadcasting', governance: 'Regulated' },
  { area: 'Merchandising', governance: 'Regulated' }
]

// ============================================================================
// SECTION 6: OLYMPIC PERFORMANCE
// ============================================================================

export const paris2024Olympics = {
  athletes: '14 (highest number since 2012)',
  sports: 'Swimming, equestrian, cycling, others',
  medalsWon: 0,
  result: 'Fifth consecutive Olympics without medals'
}

export interface OlympicMedal {
  medal: string
  athlete: string
  event: string
  year: string
  location: string
}

export const uaeOlympicMedals: OlympicMedal[] = [
  { medal: 'Bronze', athlete: 'Peter Qitif', event: 'Shooting', year: '2000', location: 'Sydney' },
  { medal: 'Bronze', athlete: 'Sheikh Ahmad Al Maktoum', event: 'Shooting', year: '2016', location: 'Rio' }
]

export const totalOlympicMedals = {
  count: 2,
  details: 'Both bronze, both in shooting'
}

// ============================================================================
// SECTION 7: CYCLING — UAE TEAM EMIRATES
// ============================================================================

export const uaeTeamEmiratesOverview = {
  teamName: 'UAE Team Emirates - XRG',
  competition: 'WorldTour',
  notableRiders: 'Isaac Del Toro, Jan Christen, Tadej Pogačar'
}

export interface CyclingDopingQuote {
  source: string
  quote: string
}

export const cyclingDopingQuotes: CyclingDopingQuote[] = [
  {
    source: 'Analyst Thijs Zonneveld (February 2026)',
    quote: '"There are two guys at the top who, in the past, facilitated doping."'
  }
]

export interface MauroGianettiDetails {
  detail: string
  info: string
}

export const mauroGianettiDetails: MauroGianettiDetails[] = [
  { detail: '1998 Tour de Romandie', info: 'Collapsed, hospitalized after suspected experimental oxygen-carrying substance' },
  { detail: 'No violation proven', info: 'No sanction' },
  { detail: 'Saunier Duval leadership', info: 'Led Saunier Duval during periods when Riccardo Ricco and Leonardo Piepoli tested positive for blood-boosting agents (2008 Tour de France)' }
]

export interface JoxeanFernandezMatxinDetails {
  detail: string
  info: string
}

export const joxeanFernandezMatxinDetails: JoxeanFernandezMatxinDetails[] = [
  { detail: 'Role', info: 'Sporting Director' },
  { detail: 'Background', info: 'Held leadership roles during doping eras' },
  { detail: 'Personal status', info: 'Never personally charged or sanctioned' }
]

export interface CyclingExpertView {
  expert: string
  view: string
}

export const cyclingExpertViews: CyclingExpertView[] = [
  { expert: 'Jose De Cauwer', view: '"I can\'t imagine those two guys, Gianetti and Matxin, being so stupid as to make themselves guilty of that again."' },
  { expert: 'Thijs Zonneveld', view: 'Organized team-wide doping "extraordinarily difficult to conceal" due to biological passport and expanded testing' }
]

export const cyclingDominanceQuote = {
  quote: '"The entire WorldTour peloton wanted Isaac Del Toro and Jan Christen, but both chose the same team. That obviously has to do with money." — Zonneveld'
}

export const womensCycling = {
  team: 'UAE Team ADQ',
  partnership: 'ADQ (renewed July 2025)',
  race: 'UAE Tour Women — only women\'s World Tour race in Middle East'
}

// ============================================================================
// SECTION 8: SPORTS BETTING AND GAMING LIBERALIZATION
// ============================================================================

export const gcgra = {
  name: 'General Commercial Gaming Regulatory Authority (GCGRA)',
  established: 'September 2023',
  role: 'Federal executive agency regulating all commercial gaming in UAE',
  scope: 'Lottery, internet gaming, sports wagering, casinos'
}

export interface BettingTimelineEvent {
  year: string
  event: string
}

export const bettingTimeline: BettingTimelineEvent[] = [
  { year: 'Pre-2024', event: 'All forms of betting criminalized under federal penal law' },
  { year: 'September 2023', event: 'GCGRA established' },
  { year: '2024', event: 'Federal Decree-Law No. 25/2025 eliminates gambling provisions from civil code (enacted 2025)' },
  { year: '2024', event: 'First official lottery licence granted to The Game LLC' },
  { year: 'November 2024', event: 'UAE Lottery officially operational' },
  { year: 'October 2024', event: 'Wynn Resorts licensed as first physical casino operator' },
  { year: 'December 2025', event: 'First sports betting license (Play971) approved' }
]

export interface GamingActivity {
  activity: string
  status: string
}

export const gamingActivities: GamingActivity[] = [
  { activity: 'UAE Lottery', status: 'Operational (The Game LLC)' },
  { activity: 'Internet gaming', status: 'Regulated' },
  { activity: 'Sports wagering', status: 'Now licensed' },
  { activity: 'Casinos', status: 'Wynn Resort RAK (licensed, opening early 2027)' },
  { activity: 'Big Ticket', status: 'Continues under supervision' },
  { activity: 'Dubai Duty Free', status: 'Continues under supervision' },
  { activity: 'Mahzooz', status: 'Suspended beginning 2024' },
  { activity: 'Emirates Draw', status: 'Suspended beginning 2024' }
]

export const wynnResortRAK = {
  location: 'Al Marjan Island, Ras Al Khaimah',
  opening: 'Early 2027',
  gamingArea: '225,000 square feet',
  significance: 'First physical casino in UAE'
}

export const responsibleGamingRequirements = [
  'Deposit limits',
  'Cooling-off periods',
  'Self-monitoring capabilities',
  'Self-exclusion options'
]

export const gamingEconomicContext = {
  quote: '"The GCGRA\'s establishment appears to be one of the UAE\'s strategies to broaden its economy and diversify its revenue streams." — Pinsent Masons'
}

// ============================================================================
// SECTION 9: WOMEN'S AND YOUTH SPORTS
// ============================================================================

export const womensSportsParticipation = {
  cycling: [
    'UAE Tour Women: Only women\'s World Tour race in Middle East',
    "Women's World Tour expansion: 17 races/34 race days (2016) → 27 races/74 race days (2024)",
    'Tour de France Femmes: 20 million viewers (2024)'
  ],
  football: [
    "UAE Women's League 2024/2025: Active season documented in Global Sports Archive"
  ],
  motorsport: [
    'Iron Dames project (founded 2018 by Deborah Mayer)',
    '2023: First all-female team to win a race in FIA World Endurance Championship',
    '2024: First all-female elite show jumping team launched'
  ],
  equestrian: [
    'Al Shaqab (Doha): Female-only riding program, all-female staff'
  ]
}

export interface MarketDataMetric {
  metric: string
  value: string
}

export const womenSportsMarketData: MarketDataMetric[] = [
  { metric: 'UAE fans preferring women\'s sports over men\'s', value: '45%' },
  { metric: 'UAE sports media engagement (global comparison)', value: '89% vs 67% global average' }
]

export interface NationalSportsStrategyTarget {
  target: string
  goal: string
}

export const nationalSportsStrategy2031Targets: NationalSportsStrategyTarget[] = [
  { target: 'Community sports participation', goal: '71%' },
  { target: 'Coverage', goal: 'Community sports, competitive athletes, people of determination' }
]

export interface YouthDevelopmentProgram {
  program: string
  details: string
}

export const youthDevelopmentPrograms: YouthDevelopmentProgram[] = [
  { program: 'Scholarships', details: 'For young athletes' },
  { program: 'Sports academies', details: 'Partnerships with international federations' },
  { program: 'Hamdan Sports Complex', details: 'Youth development programs' },
  { program: 'City Football Group academies', details: 'Multiple global locations' }
]

export const inclusivityNote = {
  date: 'April 2018',
  law: 'All UAE residents, regardless of nationality, can participate in national sports competitions.'
}

export const specialOlympicsUAE = [
  'Active representation',
  'Programs for athletes with intellectual disabilities'
]

// ============================================================================
// SECTION 10: TRADITIONAL EMIRATI SPORTS
// ============================================================================

export const falconry = {
  medicalCare: 'Abu Dhabi Falcon Hospital',
  identification: 'Each bird micro-chipped',
  status: 'Traditional sport, preserved'
}

export interface EquestrianDiscipline {
  discipline: string
  details: string
}

export const equestrian: EquestrianDiscipline[] = [
  { discipline: 'Endurance', details: 'Pioneered by Sheikh Zayed bin Sultan Al Nahyan' },
  { discipline: 'Show jumping', details: 'Active' },
  { discipline: 'Eventing', details: 'Active' },
  { discipline: 'Dressage', details: 'Active' },
  { discipline: 'Racing', details: 'Active' }
]

export interface CamelRacingBreed {
  breed: string
  description: string
}

export const camelRacingBreeds: CamelRacingBreed[] = [
  { breed: 'Mahaliyat', description: 'Primary racing breed' },
  { breed: 'Omaniyat', description: 'Racing breed' },
  { breed: 'Sudaniyat', description: 'Racing breed' },
  { breed: 'Muhajanat', description: 'Racing breed' }
]

export const bullFighting = {
  location: 'Fujairah',
  timing: 'Weekly during cooler months'
}

// ============================================================================
// SECTION 11: SPORTS MEDIA AND BROADCASTING
// ============================================================================

export interface RightsHolder {
  holder: string
  rights: string
}

export const rightsHolders: RightsHolder[] = [
  { holder: 'Abu Dhabi Media', rights: 'Exclusive regional rights to Italy\'s Serie A' },
  { holder: 'Starzplay', rights: 'Nurtured by Abu Dhabi Investment Office' }
]

export interface MediaGrowthMetric {
  metric: string
  value: string
}

export const middleEastMediaGrowth: MediaGrowthMetric[] = [
  { metric: 'Regional media revenue growth (annual)', value: '3.7% through 2028' },
  { metric: 'Global average growth', value: '2.7%' },
  { metric: 'UAE consumer sports media engagement', value: '89% (global: 67%)' }
]

// ============================================================================
// SECTION 12: FIFA AND INTERNATIONAL FOOTBALL GOVERNANCE
// ============================================================================

export const fifaDisciplinaryReport = {
  reportPeriod: 'July 1, 2024 – June 30, 2025 (6th annual)',
  investigationsOpened: 156,
  disciplinaryCases: '3,400+ (200%+ increase from prior period)',
  increaseAttribution: 'FIFA Clearing House (launched 2022)'
}

export interface QatarWorldCupIssue {
  issue: string
  details: string
}

export const qatarWorldCupIssues: QatarWorldCupIssue[] = [
  { issue: 'Kafala system', details: "Workers couldn't change jobs or leave without sponsor permission" },
  { issue: 'Passport confiscation', details: 'Some workers effectively enslaved' },
  { issue: 'August 2022', details: '60+ migrant workers deported after protesting non-payment by Al Bandary International Group' },
  { issue: 'Worker deaths (estimated)', details: 'Up to 4,000 potential deaths by tournament' },
  { issue: 'Nepalese workers', details: '522 deaths since 2010' },
  { issue: 'Indian workers', details: '700+ deaths since 2010' },
  { issue: 'Guardian investigation (Feb 2021)', details: '6,500 migrant worker deaths since World Cup awarded' }
]

export const laborReformsImplemented = [
  'Exit visas abolished for ~95% of workers (Law No. 13 of 2018)',
  'Minimum wage: 1,000 riyals (US$275) from March 2021',
  'No Objection Certificate required for job changes removed'
]

export const infantinoQuote = {
  quote: 'Qatar was "progressive" on labour rights; European criticism was hypocritical: "For what we Europeans have been doing for 3,000 years around the world, we should be apologising."'
}

// ============================================================================
// SECTION 13: KEY INDIVIDUALS
// ============================================================================

export interface SportsKeyIndividual {
  name: string
  role: string
  affiliation: string
}

export const sportsKeyIndividuals: SportsKeyIndividual[] = [
  { name: 'Sheikh Mansour bin Zayed Al Nahyan', role: 'Owner', affiliation: 'Manchester City, City Football Group, UAE Vice President' },
  { name: 'Khaldoon Al Mubarak', role: 'Chairman', affiliation: 'Manchester City, City Football Group, Mubadala CEO' },
  { name: 'Sheikh Hamdan bin Zayed Al Nahyan', role: "Ruler's representative", affiliation: 'Banned child jockeys (2002)' },
  { name: 'Ahmed Mansoor', role: 'Human rights defender', affiliation: 'Imprisoned since 2017, 15-year sentence' },
  { name: 'Dana Al Marashi', role: 'Head of Cultural Diplomacy', affiliation: 'UAE Embassy in US' },
  { name: 'Mauro Gianetti', role: 'Team manager', affiliation: 'UAE Team Emirates - XRG' },
  { name: 'Joxean Fernandez Matxin', role: 'Sporting director', affiliation: 'UAE Team Emirates - XRG' },
  { name: 'Garry Cook', role: 'CEO (2008-2012)', affiliation: 'Manchester City' },
  { name: 'Ferran Soriano', role: 'CEO', affiliation: 'Manchester City, CFG creator' },
  { name: 'Joey Shea', role: 'Researcher', affiliation: 'Human Rights Watch (UAE)' },
  { name: 'Minky Worden', role: 'Director of Global Initiatives', affiliation: 'Human Rights Watch' }
]

// ============================================================================
// SECTION 14: COMPLETE URL REGISTRY
// ============================================================================

export interface SourceURL {
  number: number
  source: string
  url: string
  status: string
}

export const sourceURLRegistry: SourceURL[] = [
  { number: 1, source: 'The Guardian', url: 'https://www.theguardian.com/sport/2025/dec/13/nba-uae-sudan-sportswashing-rsf-war-crimes', status: 'Fetched' },
  { number: 2, source: 'HRW', url: 'https://www.hrw.org/news/2024/11/19/nba-risks-sportswashing-uae-violations', status: 'Fetched' },
  { number: 3, source: 'HRW', url: 'https://www.hrw.org/news/2024/10/03/uae-nba-games-risk-sportswashing-abuses', status: 'Fetched' },
  { number: 4, source: 'The Sentry/Newsweek', url: 'https://thesentry.org/2025/06/18/80775/newsweek-why-is-the-nba-partnering-with-the-uae-and-rwanda-both-are-accused-of-fueling-massive-humanitarian-crises/', status: 'Fetched' },
  { number: 5, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Sportswashing', status: 'Fetched' },
  { number: 6, source: 'Notre Dame Journal', url: 'https://ndjicl.org/online/2026/human-rights-violations-and-sportswashing-narrative-in-the-united-arab-emirates', status: 'Fetched' },
  { number: 7, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Manchester_City_F.C._ownership_and_finances', status: 'Fetched' },
  { number: 8, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/City_Football_Group', status: 'Fetched' },
  { number: 9, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix', status: 'Fetched' },
  { number: 10, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2025_Abu_Dhabi_Grand_Prix', status: 'Fetched' },
  { number: 11, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/2024%E2%80%9325_UAE_Pro_League', status: 'Fetched' },
  { number: 12, source: 'The National', url: 'https://www.thenationalnews.com/sport/cricket/2025/05/09/psl-to-be-moved-to-uae-with-india-cricket-to-make-final-decision-on-ipl-over-pakistan-conflict/', status: 'Fetched' },
  { number: 13, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Robot_jockey', status: 'Fetched' },
  { number: 14, source: 'Grokipedia', url: 'https://grokipedia.com/page/united_arab_emirates_at_the_2024_summer_olympics', status: 'Blocked' },
  { number: 15, source: 'OutQore', url: 'https://outqore.com/balance-fitness/uae-global-sports-hub-middle-east-infrastructure-events', status: 'Fetched' },
  { number: 16, source: 'Emirates', url: 'https://www.emirates.com/us/english/about-us/our-communities/sponsorship/football/', status: 'Fetched' },
  { number: 17, source: 'SportsPro', url: 'https://www.sportcal.com/sponsorship/ac-milan-prolong-emirates-deal-new-partners-for-real-madrid-valencia/', status: 'Fetched' },
  { number: 18, source: 'Footy Headlines', url: 'https://www.footyheadlines.com/2026/03/emirates-to-extend-arsenal-real-madrid.html', status: 'Fetched' },
  { number: 19, source: 'NYU Abu Dhabi', url: 'https://nyuad.nyu.edu/en/events/2024/april/sports-and-diplomacy-in-the-uae.html', status: 'Fetched' },
  { number: 20, source: 'UAE Embassy', url: 'https://www.uae-embassy.org/news/bridging-cultures-and-building-connections-through-sport', status: 'Fetched' },
  { number: 21, source: 'FIFA', url: 'https://inside.fifa.com/news/fifa-publishes-disciplinary-and-ethics-report-2024-2025', status: 'Fetched' },
  { number: 22, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Human_rights_issues_involving_the_2022_FIFA_World_Cup', status: 'Fetched' },
  { number: 23, source: 'ABS Partners', url: 'https://abspartners.ae/uae-sports-law-2023-a-new-era-of-governance-and-compliance/', status: 'Fetched' },
  { number: 24, source: 'Cycling Up To Date', url: 'https://cyclinguptodate.com/cycling/there-are-two-guys-at-the-top-who-in-the-past-facilitated-doping-analyst-welcomes-scrutiny-of-uae-team-emirates-xrg-dominance', status: '500 Error' },
  { number: 25, source: 'Pinsent Masons', url: 'https://www.pinsentmasons.com/out-law/analysis/legal-gaming-in-uae-regulations', status: 'Fetched' },
  { number: 26, source: 'UAE government', url: 'https://u.ae/en/about-the-uae/culture/sports-and-recreation', status: 'Fetched' },
  { number: 27, source: 'Gaming Awards', url: 'https://gaming-awards.com/NEWS/uae-launches-its-first-ever-sports-betting-license/', status: 'Fetched' },
  { number: 28, source: 'Lexology', url: 'https://www.lexology.com/library/detail.aspx?g=7ef2fe3c-ddbc-4adb-bc95-a2dc41c1ac71', status: 'Fetched' },
  { number: 29, source: 'Alestiklal', url: 'https://www.alestiklal.net/en/article/after-casinos-and-gambling-halls-why-did-the-uae-legalize-betting', status: 'Fetched' },
  { number: 30, source: 'WePlay', url: 'https://weplay.co/accelerators-of-modern-sport-middle-east-womens-sport/', status: 'Fetched' },
  { number: 31, source: 'Global Sports Archive', url: 'https://globalsportsarchive.com/en/soccer/competition/uae-womens-league-2024-2025/74004', status: 'Blocked' }
]

// ============================================================================
// SECTION 15: SENTIMENT ANALYSIS
// ============================================================================

export interface SportswashingSentiment {
  source: string
  sentiment: string
  assessment: string
}

export const sportswashingSentimentAnalysis: SportswashingSentiment[] = [
  { source: 'Human Rights Watch', sentiment: 'Strongly negative', assessment: 'UAE using sports to cover human rights abuses' },
  { source: 'The Sentry', sentiment: 'Strongly negative', assessment: 'UAE fueling humanitarian crises in Sudan/DRC' },
  { source: 'The Guardian', sentiment: 'Strongly negative', assessment: 'Sports enabling atrocities in Sudan' },
  { source: 'Notre Dame Journal', sentiment: 'Negative', assessment: 'Detailed human rights concerns' },
  { source: 'Refugees International', sentiment: 'Strongly negative', assessment: 'Sportswashing of atrocities' }
]

export interface SportsInvestmentSentiment {
  perspective: string
  sentiment: string
  assessment: string
}

export const sportsInvestmentSentimentAnalysis: SportsInvestmentSentiment[] = [
  { perspective: 'UAE government', sentiment: 'Positive', assessment: 'Economic growth, diversification, tourism' },
  { perspective: 'PwC/OutQore', sentiment: 'Positive', assessment: 'Strong ROI, market growth' },
  { perspective: 'Human rights groups', sentiment: 'Negative', assessment: 'Sportswashing, reputation laundering' },
  { perspective: 'Sports analysts', sentiment: 'Neutral', assessment: 'Financial dominance without inherent judgment' }
]

export interface GovernanceReformSentiment {
  area: string
  sentiment: string
  notes: string
}

export const governanceReformSentimentAnalysis: GovernanceReformSentiment[] = [
  { area: 'Federal Law 4/2023', sentiment: 'Positive', notes: 'Modernization, WADA alignment' },
  { area: 'Anti-doping', sentiment: 'Positive', notes: 'NADA active participation' },
  { area: 'Gaming regulation', sentiment: 'Cautious positive', notes: 'Pragmatic approach' },
  { area: 'Worker reforms', sentiment: 'Mixed', notes: 'Progress but enforcement concerns' }
]

export interface OlympicPerformanceSentiment {
  area: string
  assessment: string
}

export const olympicPerformanceSentimentAnalysis: OlympicPerformanceSentiment[] = [
  { area: 'Olympic medals', assessment: 'No medals at Paris 2024; only 2 historical' },
  { area: 'Cycling doping', assessment: 'Historical concerns persist' },
  { area: 'General performance', assessment: 'Limited international success' }
]

// ============================================================================
// SECTION 16: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevanceItem {
  topic: string
  relevanceScore: string
}

export const directUAESportsRelevance: UAERelevanceItem[] = [
  { topic: 'UAE Pro League', relevanceScore: 'Critical' },
  { topic: 'Formula 1 Abu Dhabi', relevanceScore: 'Critical' },
  { topic: 'UAE cricket hosting', relevanceScore: 'Critical' },
  { topic: 'UAE Olympic performance', relevanceScore: 'Critical' },
  { topic: 'Camel racing', relevanceScore: 'Critical' },
  { topic: 'Falconry', relevanceScore: 'Critical' },
  { topic: 'Sports governance (Federal Law 4/2023)', relevanceScore: 'Critical' },
  { topic: 'Sports betting legalization', relevanceScore: 'Critical' }
]

export const uaeOwnershipInvestmentRelevance: UAERelevanceItem[] = [
  { topic: 'Manchester City/CFG ownership', relevanceScore: 'Critical' },
  { topic: 'NBA partnership', relevanceScore: 'Critical' },
  { topic: 'Emirates sponsorships', relevanceScore: 'Critical' },
  { topic: 'City Football Group expansion', relevanceScore: 'Critical' }
]

export const uaeSportsTourismEconomyRelevance: UAERelevanceItem[] = [
  { topic: 'Sports infrastructure investment', relevanceScore: 'High' },
  { topic: 'Sports tourism market', relevanceScore: 'High' },
  { topic: 'Event hosting ROI', relevanceScore: 'High' },
  { topic: 'Vision 2030 goals', relevanceScore: 'High' }
]

export const regionalMENARelevance: UAERelevanceItem[] = [
  { topic: 'Gulf sports investment competition', relevanceScore: 'Medium' },
  { topic: 'Qatar World Cup legacy', relevanceScore: 'Medium' },
  { topic: 'Saudi sports investment (Vision 2030)', relevanceScore: 'Medium' }
]

// ============================================================================
// SECTION 17: VERIFICATION STATUS
// ============================================================================

export const verificationStatus = {
  queriesExecuted: true,
  accessiblePagesFetched: true,
  dataExtracted: true,
  sourceURLsDocumented: true,
  noFabrication: true,
  crossReferenced: true,
  frameworkRulesFollowed: true,
  englishResearchConduct: true,
  urlContentEnriched: true
}

// ============================================================================
// SECTION 18: SUMMARY STATISTICS
// ============================================================================

export interface SummaryStats {
  metric: string
  count: string
}

export const summaryStatistics: SummaryStats[] = [
  { metric: 'Queries executed', count: '17' },
  { metric: 'Unique URLs processed', count: '31' },
  { metric: 'URLs successfully fetched', count: '28' },
  { metric: 'URLs blocked/error', count: '3' },
  { metric: 'Data tables', count: '35+' },
  { metric: 'Named individuals', count: '30+' },
  { metric: 'Organizations referenced', count: '50+' }
]

export const sourceTypes = 'Guardian, HRW (3), Wikipedia (7), The Sentry, Notre Dame Journal, The National (UAE), NYU Abu Dhabi, UAE Embassy, OutQore, ABS Partners, Pinsent Masons, SportsPro, Footy Headlines, Gaming Awards, Lexology, Alestiklal, WePlay, FIFA'

export const dateRangeOfSources = 'September 2013 to April 2026'

export const topicsCovered = 'Sportswashing (all vectors), ownership (Man City/CFG), F1, Pro League, cricket, camel racing, Olympics, sports investment, Emirates sponsorships, sports diplomacy, FIFA/human rights, doping, sports betting, sports governance, women\'s sports, youth development, traditional sports'

// ============================================================================
// SECTION 19: DASHBOARD-READY DATA TABLES
// ============================================================================

export interface DashboardInvestmentSummary {
  category: string
  valueUSD: string
  valueAED: string
  source: string
}

export const dashboardInvestmentSummary: DashboardInvestmentSummary[] = [
  { category: 'Infrastructure (past decade)', valueUSD: '$10B+', valueAED: 'AED 36.7B', source: 'OutQore' },
  { category: 'Planned by 2030', valueUSD: '$2B', valueAED: 'AED 7.3B', source: 'OutQore' },
  { category: 'GDP contribution', valueUSD: '$5B+', valueAED: 'AED 18.3B', source: 'OutQore' },
  { category: 'Sports tourism market', valueUSD: '$1B', valueAED: 'AED 3.67B', source: 'OutQore' },
  { category: 'Annual tourists', valueUSD: '1.5M+', valueAED: '—', source: 'OutQore' },
  { category: 'Jobs created', valueUSD: '50,000+', valueAED: '—', source: 'OutQore' },
  { category: 'Broadcasting/sponsorships', valueUSD: '$2B+', valueAED: 'AED 7.3B', source: 'OutQore' }
]

export interface MancityFinancial {
  year: string
  revenue: string
  source: string
}

export const mancityFinancials: MancityFinancial[] = [
  { year: '2004-05', revenue: '€90.1M', source: 'Wikipedia' },
  { year: '2013-14', revenue: '€414.4M', source: 'Wikipedia' },
  { year: '2023-24', revenue: '€837.8M', source: 'Wikipedia' }
]

export interface CFGOwnershipDashboard {
  owner: string
  share: string
}

export const cfgOwnershipDashboard: CFGOwnershipDashboard[] = [
  { owner: 'Abu Dhabi United Group (Sheikh Mansour)', share: '81%' },
  { owner: 'Silver Lake', share: '18%' },
  { owner: 'China Media Capital/CITIC', share: '1%' }
]

export interface F1EconomicImpact {
  metric: string
  value: string
}

export const f1EconomicImpactDashboard: F1EconomicImpact[] = [
  { metric: 'Annual tourism revenue', value: '$150M (AED 550M)' },
  { metric: 'Hosted since', value: '2009' },
  { metric: 'Circuit length', value: '5.281 km' },
  { metric: '2024 attendance', value: '190,000' },
  { metric: '2025 attendance', value: '203,000' }
]

export interface ProLeagueStandingDashboard {
  pos: string
  team: string
  pts: string
  wdl: string
}

export const proLeagueStandingsDashboard: ProLeagueStandingDashboard[] = [
  { pos: '1', team: 'Shabab Al Ahli', pts: '63', wdl: '19-6-1' },
  { pos: '2', team: 'Sharjah', pts: '51', wdl: '16-3-7' },
  { pos: '3', team: 'Al Wahda', pts: '48', wdl: '—' },
  { pos: '4', team: 'Al Wasl', pts: '46', wdl: '—' },
  { pos: '5', team: 'Al Ain', pts: '44', wdl: '—' }
]

export interface NBAPartnershipDashboard {
  item: string
  value: string
}

export const nbaPartnershipDashboard: NBAPartnershipDashboard[] = [
  { item: 'Sponsorship value', value: '$500M' },
  { item: 'Partnership signed', value: 'Nov 2021' },
  { item: 'First preseason games', value: '2022-23' },
  { item: 'Emirates NBA Cup first game', value: 'Nov 12, 2024' }
]

export interface EmiratesSponsorshipDashboard {
  teamCompetition: string
  since: string
  status: string
}

export const emiratesSponsorshipDashboard: EmiratesSponsorshipDashboard[] = [
  { teamCompetition: 'Arsenal', since: '2004', status: 'Until 2028 (shirt), 2038 (stadium)' },
  { teamCompetition: 'AC Milan', since: '2007', status: 'Extended 2025' },
  { teamCompetition: 'Real Madrid', since: '2011/2013', status: 'Extension imminent' },
  { teamCompetition: 'Emirates FA Cup', since: '—', status: 'Title sponsor' },
  { teamCompetition: 'Bayern Munich', since: '2025-26', status: 'Until 2031-32' }
]

export interface OlympicMedalDashboard {
  medal: string
  athlete: string
  event: string
  year: string
  location: string
}

export const olympicMedalsDashboard: OlympicMedalDashboard[] = [
  { medal: 'Bronze', athlete: 'Peter Qitif', event: 'Shooting', year: '2000', location: 'Sydney' },
  { medal: 'Bronze', athlete: 'Sheikh Ahmad Al Maktoum', event: 'Shooting', year: '2016', location: 'Rio' }
]

export interface BettingTimelineDashboard {
  year: string
  event: string
}

export const bettingTimelineDashboard: BettingTimelineDashboard[] = [
  { year: 'Pre-2024', event: 'All betting criminalized' },
  { year: 'Sep 2023', event: 'GCGRA established' },
  { year: '2024', event: 'First lottery license' },
  { year: 'Nov 2024', event: 'UAE Lottery operational' },
  { year: 'Oct 2024', event: 'Wynn Resort casino license' },
  { year: 'Dec 2025', event: 'First sports betting license' }
]

export interface TopScorerDashboard {
  player: string
  club: string
  goals: string
}

export const topScorersDashboard: TopScorerDashboard[] = [
  { player: 'Kodjo Fo-Doh Laba', club: 'Al Ain', goals: '18' },
  { player: 'Omar Khribin', club: 'Al Wahda', goals: '13' },
  { player: 'Mehdi Ghayedi', club: 'Kalba', goals: '12' },
  { player: 'Sardar Azmoun', club: 'Shabab Al Ahli', goals: '11' }
]

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  documentClassification: 'SSOT — UAE Sports Intelligence',
  lastUpdated: '2026-04-27',
  version: '1.0 Enriched'
}

// ============================================================================
// MAIN DATA OBJECT
// ============================================================================

export interface SportsIntelligenceData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  executionMetadata: typeof executionMetadata
  focusAreas: typeof focusAreas
  keyQueryPatterns: typeof keyQueryPatterns
  sportswashingDefinitions: typeof sportswashingDefinitions
  sportswashingQuotes: typeof sportswashingQuotes
  sportswashingVectors: typeof sportswashingVectors
  cfgOwnership: typeof cfgOwnership
  cfgKeyIndividuals: typeof cfgKeyIndividuals
  cfgFinancialTimeline: typeof cfgFinancialTimeline
  mancityAchievements: typeof mancityAchievements
  cfgGlobalClubHoldings: typeof cfgGlobalClubHoldings
  mancityQuotes: typeof mancityQuotes
  nbaPartnershipDetails: typeof nbaPartnershipDetails
  nba2025Games: typeof nba2025Games
  nbaUpcoming: typeof nbaUpcoming
  nbaHumanRightsCriticisms: typeof nbaHumanRightsCriticisms
  humanRightsViolations: typeof humanRightsViolations
  f1Venue: typeof f1Venue
  f1History: typeof f1History
  f1RaceResults: typeof f1RaceResults
  f12024Top3: typeof f12024Top3
  f12025Top3: typeof f12025Top3
  f1ChampionshipStandings: typeof f1ChampionshipStandings
  f12024Farewells: typeof f12024Farewells
  f12025HistoricalSignificance: typeof f12025HistoricalSignificance
  f1EconomicImpact: typeof f1EconomicImpact
  uaeCricketIndustry: typeof uaeCricketIndustry
  psl2025Relocation: typeof psl2025Relocation
  pslDetails: typeof pslDetails
  iplContext: typeof iplContext
  cricketStrategicSignificance: typeof cricketStrategicSignificance
  camelRacingTimeline: typeof camelRacingTimeline
  robotJockeySpecs: typeof robotJockeySpecs
  camelRacingHumanRightsContext: typeof camelRacingHumanRightsContext
  uaeHostedEvents: typeof uaeHostedEvents
  investmentOverview: typeof investmentOverview
  keyVenues: typeof keyVenues
  majorEventEconomics: typeof majorEventEconomics
  vision2030Goals: typeof vision2030Goals
  middleEastMarketStats: typeof middleEastMarketStats
  uaeProLeagueOverview: typeof uaeProLeagueOverview
  proLeagueStandings2024_25: typeof proLeagueStandings2024_25
  afcQualifications: typeof afcQualifications
  topScorers2024_25: typeof topScorers2024_25
  notableForeignPlayers: typeof notableForeignPlayers
  notableHeadCoaches: typeof notableHeadCoaches
  emiratesSponsorshipPortfolio: typeof emiratesSponsorshipPortfolio
  acMilanPartnership: typeof acMilanPartnership
  emiratesArsenalPartnership: typeof emiratesArsenalPartnership
  sportsDiplomacyPanel: typeof sportsDiplomacyPanel
  panelMembers: typeof panelMembers
  uaeEmbassyStatement: typeof uaeEmbassyStatement
  uaeEmbassySportsPrograms: typeof uaeEmbassySportsPrograms
  abuDhabiMediaInvestments: typeof abuDhabiMediaInvestments
  historicalSportsConnections: typeof historicalSportsConnections
  federalLaw42023: typeof federalLaw42023
  sportsGovernanceBodies: typeof sportsGovernanceBodies
  athleteContractElements: typeof athleteContractElements
  antiDopingFramework: typeof antiDopingFramework
  matchFixing: typeof matchFixing
  commercialOperations: typeof commercialOperations
  paris2024Olympics: typeof paris2024Olympics
  uaeOlympicMedals: typeof uaeOlympicMedals
  totalOlympicMedals: typeof totalOlympicMedals
  uaeTeamEmiratesOverview: typeof uaeTeamEmiratesOverview
  cyclingDopingQuotes: typeof cyclingDopingQuotes
  mauroGianettiDetails: typeof mauroGianettiDetails
  joxeanFernandezMatxinDetails: typeof joxeanFernandezMatxinDetails
  cyclingExpertViews: typeof cyclingExpertViews
  cyclingDominanceQuote: typeof cyclingDominanceQuote
  womensCycling: typeof womensCycling
  gcgra: typeof gcgra
  bettingTimeline: typeof bettingTimeline
  gamingActivities: typeof gamingActivities
  wynnResortRAK: typeof wynnResortRAK
  responsibleGamingRequirements: typeof responsibleGamingRequirements
  gamingEconomicContext: typeof gamingEconomicContext
  womensSportsParticipation: typeof womensSportsParticipation
  womenSportsMarketData: typeof womenSportsMarketData
  nationalSportsStrategy2031Targets: typeof nationalSportsStrategy2031Targets
  youthDevelopmentPrograms: typeof youthDevelopmentPrograms
  inclusivityNote: typeof inclusivityNote
  specialOlympicsUAE: typeof specialOlympicsUAE
  falconry: typeof falconry
  equestrian: typeof equestrian
  camelRacingBreeds: typeof camelRacingBreeds
  bullFighting: typeof bullFighting
  rightsHolders: typeof rightsHolders
  middleEastMediaGrowth: typeof middleEastMediaGrowth
  fifaDisciplinaryReport: typeof fifaDisciplinaryReport
  qatarWorldCupIssues: typeof qatarWorldCupIssues
  laborReformsImplemented: typeof laborReformsImplemented
  infantinoQuote: typeof infantinoQuote
  sportsKeyIndividuals: typeof sportsKeyIndividuals
  sourceURLRegistry: typeof sourceURLRegistry
  sportswashingSentimentAnalysis: typeof sportswashingSentimentAnalysis
  sportsInvestmentSentimentAnalysis: typeof sportsInvestmentSentimentAnalysis
  governanceReformSentimentAnalysis: typeof governanceReformSentimentAnalysis
  olympicPerformanceSentimentAnalysis: typeof olympicPerformanceSentimentAnalysis
  directUAESportsRelevance: typeof directUAESportsRelevance
  uaeOwnershipInvestmentRelevance: typeof uaeOwnershipInvestmentRelevance
  uaeSportsTourismEconomyRelevance: typeof uaeSportsTourismEconomyRelevance
  regionalMENARelevance: typeof regionalMENARelevance
  verificationStatus: typeof verificationStatus
  summaryStatistics: typeof summaryStatistics
  sourceTypes: typeof sourceTypes
  dateRangeOfSources: typeof dateRangeOfSources
  topicsCovered: typeof topicsCovered
  dashboardInvestmentSummary: typeof dashboardInvestmentSummary
  mancityFinancials: typeof mancityFinancials
  cfgOwnershipDashboard: typeof cfgOwnershipDashboard
  f1EconomicImpactDashboard: typeof f1EconomicImpactDashboard
  proLeagueStandingsDashboard: typeof proLeagueStandingsDashboard
  nbaPartnershipDashboard: typeof nbaPartnershipDashboard
  emiratesSponsorshipDashboard: typeof emiratesSponsorshipDashboard
  olympicMedalsDashboard: typeof olympicMedalsDashboard
  bettingTimelineDashboard: typeof bettingTimelineDashboard
  topScorersDashboard: typeof topScorersDashboard
  reportMetadata: typeof reportMetadata
}

export const sportsIntelligenceData: SportsIntelligenceData = {
  id: 'topic-2-9',
  sector: 'community',
  title: 'Sports Intelligence',
  titleAr: 'الاستخبارات الرياضية',
  description: 'Sports investment, Manchester City/CFG, Formula 1, UAE Pro League, Olympic performance, camel racing, sportswashing concerns',
  executionMetadata,
  focusAreas,
  keyQueryPatterns,
  sportswashingDefinitions,
  sportswashingQuotes,
  sportswashingVectors,
  cfgOwnership,
  cfgKeyIndividuals,
  cfgFinancialTimeline,
  mancityAchievements,
  cfgGlobalClubHoldings,
  mancityQuotes,
  nbaPartnershipDetails,
  nba2025Games,
  nbaUpcoming,
  nbaHumanRightsCriticisms,
  humanRightsViolations,
  f1Venue,
  f1History,
  f1RaceResults,
  f12024Top3,
  f12025Top3,
  f1ChampionshipStandings,
  f12024Farewells,
  f12025HistoricalSignificance,
  f1EconomicImpact,
  uaeCricketIndustry,
  psl2025Relocation,
  pslDetails,
  iplContext,
  cricketStrategicSignificance,
  camelRacingTimeline,
  robotJockeySpecs,
  camelRacingHumanRightsContext,
  uaeHostedEvents,
  investmentOverview,
  keyVenues,
  majorEventEconomics,
  vision2030Goals,
  middleEastMarketStats,
  uaeProLeagueOverview,
  proLeagueStandings2024_25,
  afcQualifications,
  topScorers2024_25,
  notableForeignPlayers,
  notableHeadCoaches,
  emiratesSponsorshipPortfolio,
  acMilanPartnership,
  emiratesArsenalPartnership,
  sportsDiplomacyPanel,
  panelMembers,
  uaeEmbassyStatement,
  uaeEmbassySportsPrograms,
  abuDhabiMediaInvestments,
  historicalSportsConnections,
  federalLaw42023,
  sportsGovernanceBodies,
  athleteContractElements,
  antiDopingFramework,
  matchFixing,
  commercialOperations,
  paris2024Olympics,
  uaeOlympicMedals,
  totalOlympicMedals,
  uaeTeamEmiratesOverview,
  cyclingDopingQuotes,
  mauroGianettiDetails,
  joxeanFernandezMatxinDetails,
  cyclingExpertViews,
  cyclingDominanceQuote,
  womensCycling,
  gcgra,
  bettingTimeline,
  gamingActivities,
  wynnResortRAK,
  responsibleGamingRequirements,
  gamingEconomicContext,
  womensSportsParticipation,
  womenSportsMarketData,
  nationalSportsStrategy2031Targets,
  youthDevelopmentPrograms,
  inclusivityNote,
  specialOlympicsUAE,
  falconry,
  equestrian,
  camelRacingBreeds,
  bullFighting,
  rightsHolders,
  middleEastMediaGrowth,
  fifaDisciplinaryReport,
  qatarWorldCupIssues,
  laborReformsImplemented,
  infantinoQuote,
  sportsKeyIndividuals,
  sourceURLRegistry,
  sportswashingSentimentAnalysis,
  sportsInvestmentSentimentAnalysis,
  governanceReformSentimentAnalysis,
  olympicPerformanceSentimentAnalysis,
  directUAESportsRelevance,
  uaeOwnershipInvestmentRelevance,
  uaeSportsTourismEconomyRelevance,
  regionalMENARelevance,
  verificationStatus,
  summaryStatistics,
  sourceTypes,
  dateRangeOfSources,
  topicsCovered,
  dashboardInvestmentSummary,
  mancityFinancials,
  cfgOwnershipDashboard,
  f1EconomicImpactDashboard,
  proLeagueStandingsDashboard,
  nbaPartnershipDashboard,
  emiratesSponsorshipDashboard,
  olympicMedalsDashboard,
  bettingTimelineDashboard,
  topScorersDashboard,
  reportMetadata
}

export default sportsIntelligenceData
