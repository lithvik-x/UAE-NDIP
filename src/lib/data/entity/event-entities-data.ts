// @ts-nocheck
/**
 * Event Entities Data
 *
 * Comprehensive event entity data for UAE National Digital Intelligence Platform
 * Source: 1-10-event-entities-results.md
 * Coverage: Historical events, recurring events, enriched findings
 */

'use client'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type EventFrequency = 'Annual' | 'Biennial' | 'Once' | 'Recurring'
export type RelevanceLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM'
export type SentimentType = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | 'MIXED' | 'OVERWHELMINGLY_POSITIVE'
export type AlertLevelType = 'GREEN' | 'YELLOW' | 'RED' | 'ORANGE'

export interface EventOverview {
  eventName: string
  dates?: string
  location?: string
  attendance?: string | number
  headsOfState?: string | number
  participatingParties?: string | number
  pressConferences?: number
  sideEvents?: number
  conferenceSessions?: number
  president?: string
  uaeHost?: string
}

export interface LossAndDamageFund {
  donor: string
  amount: string
}

export interface FinancialCommitment {
  initiative: string
  amount: string
  details?: string
}

export interface Controversy {
  issue: string
  details: string
}

export interface HumanRightsConcern {
  issue: string
  uaeRecord: string
}

export interface ClimateMilestone {
  achievement: string
  significance: string
}

export interface COP28Data {
  overview: EventOverview
  keyTargets: string[]
  lossAndDamageFund: LossAndDamageFund[]
  dayOneTotal: string
  fundAdministrator: string
  financialCommitments: FinancialCommitment[]
  globalStocktakeResults: string[]
  controversies: Controversy[]
  humanRightsConcerns: HumanRightsConcern[]
  uaeClimateMilestones: ClimateMilestone[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface ExpoPavilion {
  pavilion: string
  designer: string
  theme: string
}

export interface ExpoMascot {
  mascot: string
  representation: string
}

export interface ExpoCeremony {
  event: string
  date: string
  performers: string
}

export interface ExpoLegacy {
  metric: string
  value: string
}

export interface ExpoData {
  overview: EventOverview
  venueArchitecture: Array<{ element: string; details: string }>
  thematicPavilions: ExpoPavilion[]
  mascots: ExpoMascot[]
  openingClosingCeremonies: ExpoCeremony[]
  postEventLegacy: ExpoLegacy[]
  firstsAchievements: Array<{ achievement: string; significance: string }>
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface DebtCrisisTimeline {
  date: string
  event: string
}

export interface DebtCrisisCause {
  cause: string
  details: string
}

export interface DebtCrisisImpact {
  metric: string
  value: string
}

export interface DebtCrisisKeyCompany {
  company: string
  role: string
}

export interface DebtCrisisResponse {
  action: string
  details: string
}

export interface DebtCrisisData {
  timeline: DebtCrisisTimeline[]
  causes: DebtCrisisCause[]
  impact: DebtCrisisImpact[]
  keyCompanies: DebtCrisisKeyCompany[]
  governmentResponse: DebtCrisisResponse[]
  abuDhabiBailout: { detail: string; value: string }[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface YemenPhase {
  phase: string
  strategy: string
  details: string
}

export interface YemenSTC {
  aspect: string
  details: string
}

export interface YemenHumanitarian {
  issue: string
  details: string
}

export interface YemenData {
  timeline: DebtCrisisTimeline[]
  strategyEvolution: YemenPhase[]
  southernTransitionalCouncil: YemenSTC[]
  humanitarianImpact: YemenHumanitarian[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface BlockadingCountry {
  primary: string
  joinedLater?: string[]
}

export interface BlockadeMeasure {
  type: string
  details: string
}

export interface QatarResponse {
  action: string
  effect: string
}

export interface ResolutionDetail {
  aspect: string
  details: string
}

export interface QatarOutcome {
  finding: string
  details: string
}

export interface QatarData {
  timeline: DebtCrisisTimeline[]
  blockadingCountries: BlockadingCountry[]
  blockadeMeasures: BlockadeMeasure[]
  qatarResponse: QatarResponse[]
  demands: string[]
  resolution: ResolutionDetail[]
  outcomeQatarEmergedStronger: QatarOutcome[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface AbrahamSignatory {
  person: string
  role: string
}

export interface AdditionalSignatory {
  country: string
  dateJoined: string
}

export interface DealTerm {
  aspect: string
  agreement: string
}

export interface EconomicOutcome {
  metric: string
  value: string
}

export interface DefenseCooperation {
  date: string
  development: string
}

export interface IntelligenceSharing {
  platform: string
  purpose: string
}

export interface HermesDeal {
  aspect: string
  details: string
}

export interface PalestinianIssue {
  development: string
  details: string
}

export interface AbrahamAccordsData {
  timeline: DebtCrisisTimeline[]
  keySignatories: AbrahamSignatory[]
  additionalSignatories: AdditionalSignatory[]
  dealTerms: DealTerm[]
  economicOutcomes: EconomicOutcome[]
  defenseCooperation: DefenseCooperation[]
  intelligenceSharing: IntelligenceSharing[]
  hermes900Deal: HermesDeal[]
  israelExportsShare: { year: string; share: string }
  palestinianIssue: PalestinianIssue[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface CovidTimeline {
  date: string
  event: string
}

export interface TestingStatistic {
  metric: string
  value: string
}

export interface HealthcareFacility {
  facility: string
  capacity: string
  notes: string
}

export interface VaccineDetail {
  aspect: string
  details: string
}

export interface HumanitarianAid {
  initiative: string
  scale: string
}

export interface DigitalTool {
  platform: string
  purpose: string
}

export interface PublicHealthMeasure {
  measure: string
  standard: string
}

export interface CovidData {
  timeline: CovidTimeline[]
  testingStatistics: TestingStatistic[]
  healthcareInfrastructure: HealthcareFacility[]
  vaccineDetails: VaccineDetail[]
  humanitarianAid: HumanitarianAid[]
  economicResponse: { action: string; amount: string }[]
  digitalTools: DigitalTool[]
  publicHealthMeasures: PublicHealthMeasure[]
  sourceUrls: string[]
  sentimentByPerspective: Array<{ perspective: string; sentiment: string }>
}

export interface NationalDayLocation {
  location: string
  activity: string
}

export interface NationalDayTradition {
  tradition: string
  description: string
}

export interface NationalDayData {
  overview: { field: string; value: string }[]
  history: DebtCrisisTimeline[]
  firstPresident: string
  celebrationLocations: NationalDayLocation[]
  traditions: NationalDayTradition[]
  holiday: { aspect: string; details: string }[]
  sourceUrls: string[]
}

export interface CircuitSpec {
  spec: string
  value: string
}

export interface ChampionshipYear {
  year: string
  significance: string
}

export interface RaceWinner {
  year: number
  driver: string
  team: string
}

export interface RecordHolder {
  category: string
  record: string
  holder: string
}

export interface NotableAchievement {
  achievement: string
  driver: string
  year: number
}

export interface AbuDhabiGPData {
  overview: EventOverview
  circuitSpecifications: CircuitSpec[]
  modifications2021: Array<{ changes: string; details: string }>
  championshipSignificance: ChampionshipYear[]
  raceWinners: RaceWinner[]
  records: RecordHolder[]
  notableAchievements: NotableAchievement[]
  sponsorship: { detail: string; value: string }[]
  sourceUrls: string[]
}

export interface NotableHorse {
  horse: string
  achievement: string
}

export interface OwnerTrainerRecord {
  category: string
  record: string
  holder: string
}

export interface DubaiWorldCupData {
  overview: EventOverview
  '2026Winner': { field: string; value: string }[]
  notableHorses: NotableHorse[]
  ownerTrainerRecords: OwnerTrainerRecord[]
  meetingPrizeMoney: { event: string; prize: string }[]
  covidImpact: { year: string; status: string }[]
  sourceUrls: string[]
}

export interface GitexScale {
  metric: string
  value: string
}

export interface ExpandNorthStar {
  detail: string
  value: string
}

export interface GitexData {
  overview: EventOverview
  '2023Scale': GitexScale[]
  expandNorthStar: ExpandNorthStar[]
  sourceUrls: string[]
}

export interface AirshowScale {
  metric: string
  value: string
}

export interface MajorOrder {
  buyer: string
  order: string
  value: string
}

export interface AircraftDisplay {
  category: string
  examples: string
}

export interface MarketForecast {
  forecast: string
  value: string
}

export interface DubaiAirshowData {
  overview: EventOverview
  '2023Scale': AirshowScale[]
  majorOrders2023: MajorOrder[]
  aircraftOnDisplay: AircraftDisplay[]
  marketForecasts: MarketForecast[]
  sourceUrls: string[]
}

export interface AdipecScale {
  metric: string
  value: string
}

export interface BusinessImpact {
  metric: string
  value: string
}

export interface FocusArea {
  area: string
  description: string
}

export interface ConferenceStructure {
  element: string
  value: string
}

export interface AdipecData {
  overview: EventOverview
  scale2026: AdipecScale[]
  businessImpact: BusinessImpact[]
  focusAreas: FocusArea[]
  conferenceStructure: ConferenceStructure[]
  sourceUrls: string[]
}

export interface GulfoodScale {
  metric: string
  value: string
}

export interface GulfoodVenue {
  edition: string
  innovation: string
}

export interface GulfoodData {
  overview: EventOverview
  scale2026: GulfoodScale[]
  scale2025: GulfoodScale[]
  venueInnovation: GulfoodVenue[]
  sourceUrls: string[]
}

export interface ArtDubaiSection {
  section: string
  focus: string
}

export interface ArtDubaiData {
  overview: EventOverview
  scale: { metric: string; value: string }[]
  sections: ArtDubaiSection[]
  sourceUrls: string[]
}

export interface FirstMartyr {
  detail: string
  value: string
}

export interface MemorialFeature {
  aspect: string
  details: string
}

export interface CommemorationObservance {
  time: string
  activity: string
}

export interface AlsoCommemorated {
  event: string
  details: string
}

export interface CommemorationDayData {
  overview: { field: string; value: string }[]
  firstMartyr: FirstMartyr[]
  memorialWahattAlKarama: MemorialFeature[]
  observances: CommemorationObservance[]
  alsoCommemorated: AlsoCommemorated[]
  sourceUrls: string[]
}

export interface FederationPreEra {
  aspect: string
  details: string
}

export interface UnificationProcess {
  date: string
  event: string
}

export interface InitialSixEmirates {
  number: number
  emirate: string
}

export interface FoundingFather {
  name: string
  emirate: string
}

export interface ConstitutionalFramework {
  element: string
  details: string
}

export interface BritishRelationship {
  date: string
  agreement: string
}

export interface FederationData {
  preFederationEra: FederationPreEra[]
  britishWithdrawal: { detail: string; value: string }[]
  unificationProcess: UnificationProcess[]
  initialSixEmirates: InitialSixEmirates[]
  rasAlKhaimah: { detail: string; value: string }[]
  foundingFathers: FoundingFather[]
  constitutionalFramework: ConstitutionalFramework[]
  britishRelationship: BritishRelationship[]
  significance: string
  sourceUrls: string[]
}

export interface GulfWarRole {
  aspect: string
  details: string
}

export interface IraqInvasion {
  date: string
  event: string
}

export interface KuwaitiRefugees {
  detail: string
  value: string
}

export interface GulfWarOperations {
  name: string
  duration: string
}

export interface GulfWarData {
  uaeRole: GulfWarRole[]
  iraqInvasion: IraqInvasion[]
  iraqJustification: { claim: string; details: string }[]
  kuwaitiRefugees: KuwaitiRefugees[]
  operations: GulfWarOperations[]
  sourceUrls: string[]
}

export interface RecurringEventSummary {
  event: string
  firstHeld: string
  frequency: string
  scale: string
  economicImpact: string
}

export interface OneTimeEventSummary {
  event: string
  date: string
  keyMetric: string
  impact: string
}

export interface SentimentSummary {
  event: string
  positive: string
  negative: string
  neutral: string
  dominant: string
}

export interface CriticalPriorityEvent {
  event: string
  whyCritical: string
}

export interface HighPriorityEvent {
  event: string
  whyHigh: string
}

export interface MediumPriorityEvent {
  event: string
  whyMedium: string
}

export interface SourceCredibility {
  source: string
  url: string
  credibility: string
  uaeRelevance: string
  contentQuality: string
}

export interface UnexecutedQuery {
  event: string
  priority: string
  notes: string
}

// ============================================================================
// COP28 DATA
// ============================================================================

export const cop28Data: COP28Data = {
  overview: {
    eventName: '28th Conference of the Parties to the UN Framework Convention on Climate Change (COP28)',
    dates: 'November 30 – December 13, 2023',
    location: 'Expo City Dubai, UAE',
    attendance: '85,000+ accredited participants',
    headsOfState: '150+ (176 at World Climate Action Summit)',
    participatingParties: '198+ countries',
    pressConferences: 285,
    sideEvents: 366,
    conferenceSessions: 533,
    president: 'Dr. Sultan Al Jaber (also CEO of ADNOC)',
    uaeHost: 'Sheikh Mohamed bin Zayed Al Nahyan, UAE President',
  },
  keyTargets: [
    'Triple renewable energy capacity by 2030',
    'Double energy efficiency by 2030',
    'Phase-down unabated coal power',
    'Cut methane emissions',
  ],
  lossAndDamageFund: [
    { donor: 'UAE', amount: '$100 million' },
    { donor: 'Germany', amount: '$100 million' },
    { donor: 'UK', amount: '$75 million' },
    { donor: 'US', amount: '$24.5 million' },
    { donor: 'Japan', amount: '$10 million' },
  ],
  dayOneTotal: '$430 million',
  fundAdministrator: 'World Bank',
  financialCommitments: [
    { initiative: 'ALTÉRRA', amount: '$30+ billion', details: "World's largest climate-focused catalytic private investor launched by UAE" },
    { initiative: 'Total Climate Finance', amount: '$85+ billion', details: 'Pledged across 10 declarations' },
    { initiative: 'Methane Reduction', amount: '$1+ billion', details: 'In grant funding' },
    { initiative: 'Global Renewables Pledge', amount: '130+ countries', details: 'Committed' },
    { initiative: 'Nuclear Declaration', amount: '25 countries', details: 'Committed' },
    { initiative: 'Food Systems Declaration', amount: '159 countries', details: 'Committed' },
    { initiative: 'Climate and Health Declaration', amount: '144 countries', details: 'Endorsed' },
  ],
  globalStocktakeResults: [
    'Current climate pledges are insufficient',
    'Fossil fuel phase-out is required to limit warming to 1.5°C',
    'Phase-out of "all fossil fuels" needed',
  ],
  controversies: [
    { issue: 'Conflict of Interest', details: 'Simultaneously CEO of ADNOC (oil company)' },
    { issue: '"No Science" Comment', details: 'Al Jaber stated "there is no science" to support fossil fuel phase-out; later claimed comments were "misinterpreted"' },
    { issue: 'Fossil Fuel Deals', details: 'Leaked documents showed ADNOC planned fossil fuel deals during summit' },
    { issue: 'Email Access', details: 'ADNOC shared email server with COP28, able to read summit emails' },
    { issue: 'Social Media Manipulation', details: 'Wikipedia edits and fake social media accounts traced to UAE' },
    { issue: 'Greenwashing Accusations', details: 'Hosted side events for oil/gas industry while professing climate leadership' },
  ],
  humanRightsConcerns: [
    { issue: 'Political Prisoners', uaeRecord: "60+ UAE nationals detained in 'UAE 94' case since 2012" },
    { issue: 'Human Rights Defender', uaeRecord: 'Ahmed Mansoor imprisoned since 2017 (10-year sentence)' },
    { issue: 'Beyond Sentences', uaeRecord: 'At least 51 still imprisoned "beyond their sentences"' },
    { issue: 'Civil Society Space', uaeRecord: '"Completely closed" for rights groups' },
    { issue: 'Surveillance', uaeRecord: 'Targeted with Pegasus spyware' },
    { issue: 'Electronic Crimes Law', uaeRecord: 'Used to silence critics' },
    { issue: 'Migrant Workers', uaeRecord: 'Kafala system; wage theft at Expo City venue' },
    { issue: 'LGBTQ+', uaeRecord: 'Criminalization of same-sex relations' },
    { issue: "Women's Rights", uaeRecord: 'Discriminatory male guardianship system' },
  ],
  uaeClimateMilestones: [
    { achievement: 'First in region to ratify Paris Agreement', significance: 'Regional climate pioneer' },
    { achievement: 'First net zero by 2050 commitment', significance: 'Ambitious target' },
    { achievement: 'First economy-wide emissions reduction pledge', significance: 'Comprehensive approach' },
    { achievement: 'Hosted largest climate summit ever', significance: 'Global platform' },
  ],
  sourceUrls: [
    'https://www.uae-embassy.org/discover-uae/climate-energy/cop28',
    'https://unfccc.int/cop28',
    'https://www.cop28.com/en/',
    'https://en.wikipedia.org/wiki/2023_United_Nations_Climate_Change_Conference',
    'https://www.bakerinstitute.org/research/cop28-spotlight-uae',
    'https://www.hrw.org/ar/news/2023/10/30/united-nations-climate-change-conference-cop28',
  ],
  sentimentByPerspective: [
    { perspective: 'UAE Government', sentiment: 'POSITIVE - Historic achievement, climate leadership' },
    { perspective: 'UNFCCC Official', sentiment: 'POSITIVE - "Beginning of the end" for fossil fuels' },
    { perspective: 'Climate Activists', sentiment: 'NEGATIVE - Greenwashing, fossil fuel hypocrisy' },
    { perspective: 'Human Rights Organizations', sentiment: 'NEGATIVE - Civil society restrictions, political prisoners' },
    { perspective: 'Oil Industry', sentiment: 'MIXED - Progress but concerns about pace' },
  ],
}

// ============================================================================
// WORLD EXPO 2020 DUBAI DATA
// ============================================================================

export const expo2020Data: ExpoData = {
  overview: {
    eventName: 'World Expo 2020 Dubai',
    dates: 'October 1, 2021 – March 31, 2022',
    location: '438 hectares between Dubai and Abu Dhabi',
    attendance: '24.1 million visits (from 178 countries)',
    headsOfState: '193 participating countries',
    participatingParties: 10,
    pressConferences: undefined,
    sideEvents: undefined,
    conferenceSessions: undefined,
    president: undefined,
    uaeHost: undefined,
  },
  venueArchitecture: [
    { element: 'Site Area', details: '438 hectares (1,080 acres)' },
    { element: 'Master Plan', details: 'American firm HOK' },
    { element: 'Construction', details: 'Orascom and BESIX' },
    { element: 'Centerpiece', details: 'Al Wasl Plaza (360° projection surface)' },
    { element: 'On-site Hotel', details: 'ROVE Expo 2020 (312 rooms, 19 suites)' },
    { element: 'UAE Pavilion', details: 'Santiago Calatrava (falcon-shaped)' },
    { element: "Women's Pavilion", details: 'Partnership with Cartier' },
  ],
  thematicPavilions: [
    { pavilion: 'Mission Possible (Opportunity)', designer: 'AGi Architects', theme: 'Sustainability solutions' },
    { pavilion: 'Alif (Mobility)', designer: 'Foster and Partners', theme: 'Transportation/infrastructure' },
    { pavilion: 'Terra (Sustainability)', designer: 'Grimshaw Architects', theme: 'Environmental stewardship' },
  ],
  mascots: [
    { mascot: 'Salama', representation: 'Ghaf tree (national tree)' },
    { mascot: 'Rashid', representation: '9-year-old sibling' },
    { mascot: 'Latifa', representation: '8-year-old sibling' },
    { mascot: 'Alif', representation: 'Mobility pavilion guardian' },
    { mascot: 'Opti', representation: 'Opportunity pavilion guardian' },
    { mascot: 'Terra', representation: 'Sustainability pavilion guardian' },
  ],
  openingClosingCeremonies: [
    { event: 'Opening', date: 'September 30, 2021', performers: 'Andrea Bocelli, Ellie Goulding, Angelique Kidjo, Andra Day, Lang Lang' },
    { event: 'Closing', date: 'March 31, 2022', performers: 'Christina Aguilera, Yo-Yo Ma, Norah Jones, DJ Tiësto' },
  ],
  postEventLegacy: [
    { metric: 'Infrastructure Retained', value: '80%+' },
    { metric: 'Startups in District', value: '85+ from nearly 30 countries' },
    { metric: 'Current Status', value: '"Human-centric smart city"' },
    { metric: 'Mixed-use Community', value: 'Integrated development' },
  ],
  firstsAchievements: [
    { achievement: 'First World Expo in MEASA region', significance: 'Historic milestone' },
    { achievement: 'First World Expo by an Arab nation', significance: 'Cultural significance' },
    { achievement: "Coincided with UAE's 50th Anniversary", significance: 'National celebration' },
    { achievement: 'Most country pavilions in Expo history', significance: '192 country pavilions' },
  ],
  sourceUrls: [
    'https://asean.org/expo-2020-dubai/',
    'https://www.uae-embassy.org/expo-2020',
    'https://en.wikipedia.org/wiki/Expo_2020',
    'https://www.expo2020dubai.com/',
  ],
  sentimentByPerspective: [
    { perspective: 'UAE Government', sentiment: 'POSITIVE - Historic achievement, economic boost' },
    { perspective: 'International Community', sentiment: 'POSITIVE - First expo in region, cultural exchange' },
    { perspective: 'Business Community', sentiment: 'POSITIVE - Economic impact, networking' },
    { perspective: 'COVID Concerns', sentiment: 'MIXED - Successfully held despite pandemic' },
  ],
}

// ============================================================================
// DUBAI DEBT CRISIS DATA
// ============================================================================

export const dubaiDebtCrisisData: DebtCrisisData = {
  timeline: [
    { date: 'November 25, 2009', event: 'Dubai World sought 6-month repayment delay on $60 billion' },
    { date: 'Early December 2009', event: 'Dubai World announced $26 billion restructuring' },
    { date: 'December 14, 2009', event: 'Abu Dhabi provided $10 billion bailout' },
    { date: '2010', event: 'Continued restructuring and market recovery' },
  ],
  causes: [
    { cause: 'Real Estate Oversupply', details: 'Too many properties built' },
    { cause: 'Speculative Buying', details: '"Real-estate bubble" mentality' },
    { cause: 'Easy Credit', details: 'Widespread borrowing for investment' },
    { cause: '2008 Global Financial Crisis', details: 'Sparked the collapse' },
    { cause: 'OPEC Overproduction', details: 'Cited by Iraq as "economic warfare"' },
  ],
  impact: [
    { metric: 'Property Price Fall (Q1 2009)', value: '40%' },
    { metric: 'Property Price Fall (Some Areas)', value: 'Up to 60%' },
    { metric: 'Dubai World Debt', value: '~$26 billion restructuring' },
    { metric: 'Total Debt Estimated', value: '$100+ billion by analysts' },
    { metric: 'Dubai World Repayment Delay', value: '$60 billion' },
  ],
  keyCompanies: [
    { company: 'Dubai World', role: 'Flagship state holding company' },
    { company: 'Nakheel', role: 'Real estate (Palm Jumeirah, Burj Khalifa developer)' },
  ],
  governmentResponse: [
    { action: 'Financial Support', details: 'Government support to developers' },
    { action: 'Credit Tightening', details: 'New credit limits for buyers' },
    { action: 'Economic Diversification', details: 'Push toward tourism, trade, finance' },
    { action: 'New Regulations', details: 'Prevent future oversupply' },
  ],
  abuDhabiBailout: [
    { detail: 'Date', value: 'December 14, 2009' },
    { detail: 'Amount', value: '$10 billion' },
    { detail: 'Purpose', value: 'Stabilize Dubai finances' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Dubai_housing_crash_in_2009',
    'https://www.theguardian.com/world/2009/dec/14/dubai-10bn-dollar-payout',
    'https://www.imf.org/external/pubs/ft/fandd/2010/03/khamis.htm',
  ],
  sentimentByPerspective: [
    { perspective: 'International Markets', sentiment: 'NEGATIVE - Global panic, stock drops' },
    { perspective: 'UAE Government', sentiment: 'POSITIVE (retrospectively) - Lesson learned, diversified economy' },
    { perspective: 'Dubai Residents', sentiment: 'MIXED - Job losses but eventual recovery' },
  ],
}

// ============================================================================
// UAE YEMEN WAR DATA
// ============================================================================

export const uaeYemenData: YemenData = {
  timeline: [
    { date: 'March 2015', event: 'UAE joined Saudi-led Arab coalition' },
    { date: '2015-2019', event: 'UAE direct military presence' },
    { date: '2019', event: 'UAE withdrew direct forces, shifted to indirect engagement' },
    { date: '2025-2026', event: 'Open rift with Saudi Arabia' },
    { date: 'December 30, 2025', event: 'UAE announced full withdrawal of remaining forces' },
  ],
  strategyEvolution: [
    { phase: 'Phase 1 (2015-2019)', strategy: 'Direct Engagement', details: 'Combat troops, air operations' },
    { phase: 'Phase 2 (2019-2025)', strategy: 'Indirect Engagement', details: 'Backing STC, proxy forces' },
    { phase: 'Phase 3 (2025+)', strategy: 'Full Withdrawal', details: 'Exit from Yemen involvement' },
  ],
  southernTransitionalCouncil: [
    { aspect: 'UAE Support', details: 'Primary backer of STC' },
    { aspect: 'Saudi Support', details: 'Backed official Yemeni government' },
    { aspect: 'Result', details: 'Coalition fragmentation' },
    { aspect: '2025-2026', details: 'Saudi airstrikes on UAE-backed STC forces in Hadhramaut' },
  ],
  humanitarianImpact: [
    { issue: 'Civilian Casualties', details: 'Significant documented' },
    { issue: 'Port Evacuations', details: 'Mukalla port evacuations' },
    { issue: 'Coalition Failures', details: 'One reason coalition failed to defeat Houthis' },
  ],
  sourceUrls: [
    'https://mei.edu/publication/from-coalition-to-confrontation-saudi-uae-rivalry-in-yemen-and-its-regional-implications/',
    'https://www.bbc.com/news/articles/c5y2mvp3r2do',
    'https://theconversation.com/saudi-uae-bust-up-over-yemen-was-only-a-matter-of-time-and-reflects-wider-rift-over-vision-for-the-region-273083',
    'https://www.reuters.com/world/middle-east/saudi-led-coalition-yemen-calls-civilians-mukalla-port-evacuate-saudi-state-news-2025-12-30/',
  ],
  sentimentByPerspective: [
    { perspective: 'UAE Government', sentiment: 'NEUTRAL - Security necessity' },
    { perspective: 'Human Rights Groups', sentiment: 'NEGATIVE - Civilian casualties' },
    { perspective: 'Regional Analysts', sentiment: 'MIXED - Strategic failure but necessary intervention' },
  ],
}

// ============================================================================
// QATAR DIPLOMATIC CRISIS DATA
// ============================================================================

export const qatarCrisisData: QatarData = {
  timeline: [
    { date: 'June 5, 2017', event: 'Saudi Arabia, UAE, Bahrain, Egypt broke diplomatic ties' },
    { date: 'June 5, 2017', event: 'Comprehensive blockade imposed (land, sea, air)' },
    { date: 'January 5, 2021', event: 'Al-Ula agreement ended blockade' },
  ],
  blockadingCountries: [
    { primary: 'Saudi Arabia', joinedLater: ['Maldives'] },
    { primary: 'UAE', joinedLater: ['Mauritania'] },
    { primary: 'Bahrain', joinedLater: ['Djibouti'] },
    { primary: 'Egypt', joinedLater: ['Comoros', 'Senegal', 'Chad (until 2018)', 'Jordan (until 2019)', 'Tobruk Libya (until 2019)'] },
  ],
  blockadeMeasures: [
    { type: 'Land Border', details: "Saudi Arabia closed Qatar's only land border" },
    { type: 'Maritime', details: 'UAE ports (Jebel Ali, Fujairah) closed to Qatari vessels' },
    { type: 'Airspace', details: 'No Qatari aircraft permitted' },
    { type: 'Banking', details: 'Prohibition on Qatari riyal trading' },
    { type: 'Expulsion', details: 'Qatari citizens expelled from blockading countries' },
    { type: 'Media', details: 'Al Jazeera and Qatari media blocked' },
  ],
  qatarResponse: [
    { action: 'Turkey Support', effect: 'Diplomatic and economic assistance' },
    { action: 'Iran Support', effect: 'Airspace corridor for supplies' },
    { action: 'Domestic Production', effect: 'Scaled up basic goods production' },
    { action: 'Hamad Sea Port', effect: 'Expanded (opened early 2017)' },
    { action: 'Diversification', effect: 'Accelerated economic independence' },
  ],
  demands: [
    'Close Al Jazeera',
    'Shut Turkish military base',
    'Reduce Iran ties',
    'Sever relations with Muslim Brotherhood',
    'Sever relations with Hamas',
    'Sever relations with Hezbollah',
    'End interference in domestic affairs',
    '[And 6 others]',
  ],
  resolution: [
    { aspect: 'Date', details: 'January 5, 2021' },
    { aspect: 'Location', details: 'Al-Ula, Saudi Arabia' },
    { aspect: 'Broker', details: 'Kuwait and United States' },
    { aspect: 'Outcome', details: 'Saudi-Qatar border reopened, relations restored' },
    { aspect: 'Compensation', details: 'Qatar suspended legal claims for blocking airspace' },
  ],
  outcomeQatarEmergedStronger: [
    { finding: 'Economic Independence', details: 'Blockade "forced" self-sufficiency' },
    { finding: 'International Partnerships', details: 'Stronger ties with Turkey, Iran, Russia, China' },
    { finding: 'Regional Position', details: 'More independent, diversified relationships' },
    { finding: 'Blockade Failure', details: 'Did not achieve any stated objectives' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Qatar_diplomatic_crisis',
    'https://www.brookings.edu/articles/the-blockade-on-qatar-helped-strengthen-its-economy-paving-the-way-to-stronger-regional-integration/',
  ],
  sentimentByPerspective: [
    { perspective: 'Blockading Countries', sentiment: 'NEGATIVE (retrospectively) - Strategy failed' },
    { perspective: 'Qatar', sentiment: 'POSITIVE (retrospectively) - Emerged stronger' },
    { perspective: 'International Observers', sentiment: 'MIXED - Regional instability' },
  ],
}

// ============================================================================
// ABRAHAM ACCORDS DATA
// ============================================================================

export const abrahamAccordsData: AbrahamAccordsData = {
  timeline: [
    { date: 'August 13, 2020', event: 'Joint announcement by US, Israel, UAE' },
    { date: 'August 16, 2020', event: 'Direct telephone links established' },
    { date: 'August 31, 2020', event: 'First direct commercial flight Israel-UAE' },
    { date: 'September 15, 2020', event: 'Treaty signed at White House' },
    { date: 'October 12, 2020', event: 'Israeli cabinet approved' },
    { date: 'October 15, 2020', event: 'Knesset ratified' },
    { date: 'October 19, 2020', event: 'UAE parliament/cabinet ratified' },
    { date: 'January 5, 2021', event: 'Agreement went into effect' },
  ],
  keySignatories: [
    { person: 'Abdullah bin Zayed Al Nahyan', role: 'UAE Foreign Minister' },
    { person: 'Benjamin Netanyahu', role: 'Israeli Prime Minister' },
    { person: 'Donald Trump', role: 'US President (witness)' },
    { person: 'Jared Kushner', role: 'Key US negotiator' },
    { person: 'Yousef Al Otaiba', role: 'UAE Ambassador to US' },
  ],
  additionalSignatories: [
    { country: 'Bahrain', dateJoined: 'September 15, 2020' },
    { country: 'Morocco', dateJoined: 'December 2020' },
    { country: 'Sudan', dateJoined: 'January 6, 2021' },
  ],
  dealTerms: [
    { aspect: 'Israeli Suspension', agreement: 'Annexation of West Bank parts "off the table"' },
    { aspect: 'UAE Position', agreement: 'Third Arab country to normalize (after Egypt 1979, Jordan 1994)' },
    { aspect: 'First', agreement: 'First Gulf state to normalize' },
    { aspect: 'Normalization', agreement: 'Diplomatic relations, economic cooperation, security cooperation, cultural exchanges' },
  ],
  economicOutcomes: [
    { metric: 'Bilateral Trade', value: 'Billions of dollars' },
    { metric: 'Israeli Tourists (Jan 2021-Jan 2023)', value: '450,000' },
    { metric: 'Free Trade Agreement', value: 'Signed 2022 (Israel\'s first with Gulf state)' },
    { metric: 'Israeli Defense Exports', value: '$791 million to signatory countries' },
  ],
  defenseCooperation: [
    { date: 'November 2021', development: 'First publicly acknowledged military exercise (Red Sea)' },
    { date: 'September 2022', development: 'Elbit Systems $53M contract for Emirati air force' },
    { date: 'September 2022', development: 'Israel approved SPYDER air-defense system sale to UAE' },
    { date: 'October 2022', development: 'Barak air-defense system deployed to UAE' },
    { date: 'February 2023', development: 'First bilateral naval exercise' },
    { date: 'April 2025', development: 'UAE Mirage 2000-9s joined multinational exercise in Greece' },
  ],
  intelligenceSharing: [
    { platform: 'Crystal Ball', purpose: 'Joint cybersecurity platform' },
  ],
  hermes900Deal: [
    { aspect: 'Seller', details: 'Elbit Systems (Israel)' },
    { aspect: 'Buyer', details: 'UAE EDGE Group' },
    { aspect: 'Product', details: 'Hermes 900 unmanned aerial vehicles' },
    { aspect: 'First', details: 'First major defense-industrial partnership' },
    { aspect: 'Technology Transfer', details: 'Phased transfer for eventual UAE domestic production' },
  ],
  israelExportsShare: { year: '2024', share: '12% of total exports' },
  palestinianIssue: [
    { development: 'UAE Position', details: 'Continued support for Palestinians' },
    { development: 'PLO Response', details: 'Recalled ambassador' },
    { development: 'Hamas Response', details: 'Called it "a stab in the back"' },
    { development: 'April 2022', details: 'UAE summoned Israeli ambassador over Al-Aqsa incursions' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Abraham_Accords',
    'https://www.aljazeera.com/news/2023/9/17/three-years-on-how-have-the-abraham-accords-done-for-the-uae',
    'https://www.state.gov/the-abraham-accords',
    'https://www.washingtoninstitute.org/policy-analysis/israel-uae-defense-cooperation-grows-under-abraham-accords',
  ],
  sentimentByPerspective: [
    { perspective: 'UAE Government', sentiment: 'POSITIVE - Strategic gains, economic benefits' },
    { perspective: 'Israeli Government', sentiment: 'POSITIVE - Diplomatic breakthrough' },
    { perspective: 'Palestinian Cause', sentiment: 'NEGATIVE - Viewed as betrayal' },
    { perspective: 'Regional Actors', sentiment: 'MIXED - Strategic recalculation' },
  ],
}

// ============================================================================
// COVID-19 UAE DATA
// ============================================================================

export const covidUaeData: CovidData = {
  timeline: [
    { date: 'January 21, 2020', event: 'First coronavirus alert issued' },
    { date: 'March 2020', event: 'Mandatory face mask policy (ahead of WHO)' },
    { date: 'July 2020', event: "World's first Phase III vaccine trial (#4 Humanity)" },
    { date: 'December 9, 2020', event: 'Sinopharm vaccine approved for use' },
    { date: 'December 16, 2022', event: 'All restrictions lifted' },
  ],
  testingStatistics: [
    { metric: 'Recovery Rate', value: '~89%' },
    { metric: 'Deaths Recorded', value: '669' },
    { metric: 'Case Fatality Rate', value: '0.3%' },
    { metric: 'Tests per 100K Population', value: '209,734.9' },
    { metric: 'Positive Test Rate', value: '1.2%' },
    { metric: 'Global Ranking', value: 'Highest testing rate per 1,000 people' },
  ],
  healthcareInfrastructure: [
    { facility: 'Drive-through Testing Centers', capacity: 'Multiple', notes: 'First in region' },
    { facility: 'Dubai World Trade Centre Field Hospital', capacity: '3,000 beds', notes: 'Expandable' },
    { facility: 'Complex 3 Quarantine Facility', capacity: '10,000 patients', notes: 'Built in 9 days' },
  ],
  vaccineDetails: [
    { aspect: 'Trial Name', details: '#4 Humanity' },
    { aspect: 'Developer', details: 'G42 Healthcare / Sinopharm CNBG' },
    { aspect: 'Start Date', details: 'July 2020' },
    { aspect: 'First', details: "World's first Phase III vaccine trial" },
    { aspect: 'Distribution', details: 'Free to all UAE residents' },
    { aspect: 'Global Ranking', details: 'Highest per-capita vaccination rate' },
  ],
  humanitarianAid: [
    { initiative: 'Vaccine Shipments', scale: '1 billion+ doses' },
    { initiative: 'Destinations', scale: '80+ countries via Emirates SkyCargo' },
    { initiative: 'African Support', scale: '65 ultra-low temperature freezers to 21 countries via UNICEF' },
    { initiative: 'Medical Aid', scale: '135 countries received aid' },
    { initiative: 'HOPE Consortium', scale: "Abu Dhabi-led vaccine distribution initiative" },
  ],
  economicResponse: [
    { action: 'Economic Stimulus Package', amount: '$79 billion' },
  ],
  digitalTools: [
    { platform: 'ALHOSN UAE', purpose: 'Contact tracing app' },
    { platform: 'Virtual Doctor', purpose: 'Telemedicine' },
    { platform: 'Weqaya', purpose: 'Health platform' },
  ],
  publicHealthMeasures: [
    { measure: 'Social Distancing', standard: '2 meters (double WHO recommendation)' },
    { measure: 'Remote Work/School', standard: 'Implemented' },
    { measure: 'Gatherings', standard: 'Suspended' },
    { measure: 'Mask Requirement', standard: 'Mandatory from March 2020' },
  ],
  sourceUrls: [
    'https://www.uae-embassy.org/discover-uae/traveling-in-the-uae/uae-response-to-covid-19',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC8005306/',
  ],
  sentimentByPerspective: [
    { perspective: 'UAE Government', sentiment: 'POSITIVE - Exemplary response, humanitarian leadership' },
    { perspective: 'UAE Residents', sentiment: 'POSITIVE - Effective measures, high vaccination' },
    { perspective: 'International Community', sentiment: 'POSITIVE - Vaccine distribution, aid' },
    { perspective: 'Human Rights Groups', sentiment: 'MIXED - Restrictions but necessary' },
  ],
}

// ============================================================================
// UAE NATIONAL DAY DATA
// ============================================================================

export const uaeNationalDayData: NationalDayData = {
  overview: [
    { field: 'Date', value: 'December 2 annually' },
    { field: 'Name', value: 'Eid Al Etihad (عيد الاتحاد) / UAE National Day' },
    { field: '2025 Edition', value: '54th' },
    { field: 'First Celebration', value: 'December 2, 1971' },
  ],
  history: [
    { date: 'December 2, 1971', event: 'UAE declared independence' },
    { date: 'February 10, 1972', event: 'Ras Al Khaimah joined' },
    { date: '2015', event: 'Renamed "Eid Al Etihad"' },
  ],
  firstPresident: 'Sheikh Zayed bin Sultan Al Nahyan',
  celebrationLocations: [
    { location: 'Abu Dhabi Corniche', activity: 'Main fireworks display' },
    { location: 'Dubai Festival City', activity: 'Fireworks' },
    { location: 'Downtown Dubai', activity: 'Burj Khalifa UAE flag display' },
    { location: 'Sharjah Al Majaz Waterfront', activity: 'Fireworks' },
    { location: 'ADNEC', activity: 'Military parade' },
  ],
  traditions: [
    { tradition: 'Fireworks', description: 'Multiple locations nationwide' },
    { tradition: 'Flag Colors', description: 'Dress in UAE flag colors (red, green, white, black)' },
    { tradition: 'Home Decorations', description: 'Flags displayed on homes, workplaces' },
    { tradition: 'Car Decorations', description: 'Vehicles decorated with flag colors' },
    { tradition: 'Palm Tree Lights', description: 'Palm trees illuminated in flag colors' },
    { tradition: 'Heritage Villages', description: 'Traditional Emirati culture displays' },
    { tradition: 'Al Fursan Air Show', description: 'UAE Air Force aerobatic display' },
  ],
  holiday: [
    { aspect: 'Typical Duration', details: '2-day public holiday (December 2-3)' },
    { aspect: 'Recent Combination', details: 'Combined with Commemoration Day (November 30)' },
  ],
  sourceUrls: [
    'https://www.visitdubai.com/en/festivals-and-events/uae-national-day',
    'https://en.wikipedia.org/wiki/National_Day_(United_Arab_Emirates)',
    'https://www.mofa.gov.ae/en/mediahub/events-and-conferences/uae-national-day',
  ],
}

// ============================================================================
// ABU DHABI FORMULA 1 DATA
// ============================================================================

export const abuDhabiGPData: AbuDhabiGPData = {
  overview: {
    eventName: 'Abu Dhabi Formula 1 Grand Prix',
    dates: undefined,
    location: 'Yas Marina Circuit, Yas Island, Abu Dhabi',
    attendance: undefined,
    firstHeld: 'November 1, 2009',
    circuit: 'Yas Marina Circuit',
    designer: 'Hermann Tilke',
    islandArea: '2,550 hectares',
    contract: 'Until at least 2030',
  },
  circuitSpecifications: [
    { spec: 'Lap Distance', value: '5.281 km (3.281 miles)' },
    { spec: 'Race Distance', value: '306.183 km (190.253 miles)' },
    { spec: 'Lap Count', value: '58 laps' },
    { spec: 'Start Time', value: '17:00 (day-night race)' },
    { spec: 'Floodlights', value: 'Yes (seamless daylight-to-dark transition)' },
  ],
  modifications2021: [
    { changes: 'Turn 5-6 Chicane', details: 'Replaced with widened hairpin (now turn 5)' },
    { changes: 'Turns 11-14', details: 'Replaced triple chicane with sweeping banked curve (now turn 9)' },
    { changes: 'Turns 17-20', details: 'Widened for higher speeds' },
  ],
  championshipSignificance: [
    { year: '2010', significance: 'Sebastian Vettel clinched first title' },
    { year: '2014', significance: 'Lewis Hamilton won 2nd championship (double points)' },
    { year: '2016', significance: 'Nico Rosberg won sole championship' },
    { year: '2021', significance: 'Max Verstappen won first title (controversial safety car)' },
    { year: '2024', significance: 'Lando Norris won, McLaren won Constructors\' Championship' },
    { year: '2025', significance: 'Norris won championship by 2 points over Verstappen' },
  ],
  raceWinners: [
    { year: 2009, driver: 'Sebastian Vettel', team: 'Red Bull Racing-Renault' },
    { year: 2010, driver: 'Sebastian Vettel', team: 'Red Bull Racing-Renault' },
    { year: 2011, driver: 'Lewis Hamilton', team: 'McLaren-Mercedes' },
    { year: 2012, driver: 'Kimi Räikkönen', team: 'Lotus-Renault' },
    { year: 2013, driver: 'Sebastian Vettel', team: 'Red Bull Racing-Renault' },
    { year: 2014, driver: 'Lewis Hamilton', team: 'Mercedes' },
    { year: 2015, driver: 'Nico Rosberg', team: 'Mercedes' },
    { year: 2016, driver: 'Lewis Hamilton', team: 'Mercedes' },
    { year: 2017, driver: 'Valtteri Bottas', team: 'Mercedes' },
    { year: 2018, driver: 'Lewis Hamilton', team: 'Mercedes' },
    { year: 2019, driver: 'Lewis Hamilton', team: 'Mercedes' },
    { year: 2020, driver: 'Max Verstappen', team: 'Red Bull Racing-Honda' },
    { year: 2021, driver: 'Max Verstappen', team: 'Red Bull Racing-Honda' },
    { year: 2022, driver: 'Max Verstappen', team: 'Red Bull Racing-RBPT' },
    { year: 2023, driver: 'Max Verstappen', team: 'Red Bull Racing-RBPT' },
    { year: 2024, driver: 'Lando Norris', team: 'McLaren-Mercedes' },
    { year: 2025, driver: 'Max Verstappen', team: 'Red Bull Racing-Honda RBPT' },
  ],
  records: [
    { category: 'Driver Wins', record: '5 each', holder: 'Lewis Hamilton, Max Verstappen' },
    { category: 'Constructor Wins', record: '8', holder: 'Red Bull Racing' },
    { category: 'Engine Wins', record: '8', holder: 'Mercedes-powered' },
  ],
  notableAchievements: [
    { achievement: 'Grand Slam (pole, every lap, win)', driver: 'Lewis Hamilton', year: 2019 },
    { achievement: 'Led 1,000+ laps in single season', driver: 'Max Verstappen', year: 2023 },
    { achievement: 'Every racing lap completed', driver: 'Max Verstappen', year: 2023 },
  ],
  sponsorship: [
    { detail: 'Sponsor', value: 'Etihad Airways' },
    { detail: 'Deal Negotiated', value: '2007' },
    { detail: 'Term', value: '3-year initial deal' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Abu_Dhabi_Grand_Prix',
    'https://tickets.formula1.com/en/f1-3312-abu-dhabi',
    'https://www.abudhabigp.com/en/',
  ],
}

// ============================================================================
// DUBAI WORLD CUP DATA
// ============================================================================

export const dubaiWorldCupData: DubaiWorldCupData = {
  overview: {
    eventName: 'Dubai World Cup (Horse Racing)',
    firstHeld: '1996',
    location: 'Meydan Racecourse (moved from Nad Al Sheba in 2009)',
    attendance: undefined,
    creator: 'Sheikh Mohammed bin Rashid Al Maktoum',
    purse: 'US$12 million',
    distance: '2,000 meters (dirt)',
    timing: 'Last Saturday in March',
  },
  '2026Winner': [
    { field: 'Horse', value: 'Magnitude' },
    { field: 'Trainer', value: 'Steven M. Asmussen' },
    { field: 'Jockey', value: 'Jose L. Ortiz' },
    { field: 'Time', value: '2:04.38' },
  ],
  notableHorses: [
    { horse: 'Cigar', achievement: 'First edition winner (1996)' },
    { horse: 'Dubai Millennium', achievement: 'Speed record 1:59.50 (2000)' },
    { horse: 'Thunder Snow', achievement: 'Only horse to win twice (2018, 2019)' },
    { horse: 'Arrogate', achievement: '2017 winner' },
  ],
  ownerTrainerRecords: [
    { category: 'Owner Wins', record: '9', holder: 'Godolphin Racing (2000, 2002, 2003, 2006, 2012, 2014, 2018, 2019, 2021)' },
    { category: 'Trainer Wins', record: '9', holder: 'Saeed bin Suroor' },
  ],
  meetingPrizeMoney: [
    { event: 'Dubai World Cup Night', prize: 'US$30.5 million total' },
  ],
  covidImpact: [
    { year: '2020', status: 'Cancelled due to COVID-19' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Dubai_World_Cup',
    'https://www.zk-sports.com/dubaiworldcup',
    'https://dubairacingclub.com/',
  ],
}

// ============================================================================
// GITEX DATA
// ============================================================================

export const gitexData: GitexData = {
  overview: {
    eventName: 'Gitex Technology Week',
    firstHeld: '1980s',
    location: 'Dubai World Trade Centre',
  },
  '2023Scale': [
    { metric: 'Status', value: 'Full capacity, record-breaking' },
    { metric: 'Opening', value: 'Sheikh Mohammed bin Rashid Al Maktoum' },
    { metric: 'Category', value: 'Largest tech and startup show in region' },
    { metric: '2023 Edition', value: '43rd' },
    { metric: '2023 Dates', value: 'October 16-20, 2023' },
    { metric: '2026 Dates', value: 'December 7-11, 2026' },
  ],
  expandNorthStar: [
    { detail: 'Event', value: 'Dubai Chamber of Digital Economy' },
    { detail: '2023 Dates', value: 'October 15-18, 2023' },
    { detail: 'Venue', value: 'New venue' },
  ],
  sourceUrls: [
    'https://www.gitex.com/media/hh-mohammed-bin-rashid-opens-gitex-global-as-the-global-tech-momentum-shifts-to-dubai',
    'https://www.digitaldubai.ae/newsroom/event/gitex-global-2023',
  ],
}

// ============================================================================
// DUBAI AIRSHOW DATA
// ============================================================================

export const dubaiAirshowData: DubaiAirshowData = {
  overview: {
    eventName: 'Dubai Airshow',
    dates: 'November 13-17, 2023',
    location: 'Al Maktoum International Airport (Dubai World Central)',
    frequency: 'Biennial (odd years)',
  },
  '2023Scale': [
    { metric: 'Attendees', value: '100,000+' },
    { metric: 'Exhibitors', value: '1,400+' },
    { metric: 'Aircraft on Display', value: '190+' },
    { metric: 'Conference Tracks', value: '9' },
    { metric: 'Speakers', value: '300+' },
    { metric: '2025 Dates', value: 'November 17-21, 2025' },
  ],
  majorOrders2023: [
    { buyer: 'Emirates', order: '90 777X jets (35 777-8s, 55 777-9s)', value: '$52B list' },
    { buyer: 'Emirates', order: '5 787-10s', value: '-' },
    { buyer: 'Emirates', order: '15 A350-900s', value: '-' },
    { buyer: 'Emirates', order: '$950M engineering facility', value: '$950M' },
    { buyer: 'Emirates', order: '$1.2B Safran services', value: '$1.2B' },
    { buyer: 'Emirates', order: '$1.5B+ A380 longevity', value: '$1.5B+' },
    { buyer: 'flydubai', order: '30 787-9 Dreamliners', value: 'First widebody' },
    { buyer: 'Turkish Airlines', order: '355 aircraft potential', value: 'Massive' },
  ],
  aircraftOnDisplay: [
    { category: 'Airbus', examples: 'A321neo, A330-800, A400M, ACJ TwoTwenty' },
    { category: 'Boeing', examples: '787-9, 777X' },
    { category: 'Business Aviation', examples: 'Gulfstream G500/G700, Challenger 3500, Global 7500' },
    { category: 'Military', examples: 'Eurofighter Typhoon, Dassault Rafale, A-29 Super Tucano' },
  ],
  marketForecasts: [
    { forecast: 'Middle East share of large commercial jets (2023-2032)', value: '13.2% of world value' },
    { forecast: 'Boeing 2042 forecast', value: '2,990 large commercial jets to Middle East' },
    { forecast: 'Airbus 2042 forecast', value: '3,420 large aircraft to Middle East' },
    { forecast: 'Fleet growth (by 2042)', value: '1,365 to 3,310 aircraft' },
  ],
  sourceUrls: [
    'https://flightplan.forecastinternational.com/2023/11/21/dubai-air-show-2023-recap/',
  ],
}

// ============================================================================
// ADIPEC DATA
// ============================================================================

export const adipecData: AdipecData = {
  overview: {
    eventName: 'ADIPEC',
    dates: 'November 2-5, 2026',
    location: 'ADNEC (Abu Dhabi National Exhibition Centre)',
    patron: 'Sheikh Mohamed bin Zayed Al Nahyan, UAE President',
    organiser: 'dmg events',
  },
  scale2026: [
    { metric: 'Attendees', value: '239,000+' },
    { metric: 'Exhibiting Companies', value: '2,250+' },
    { metric: 'Conference Delegates', value: '16,500+' },
    { metric: 'Conference Speakers', value: '1,800+' },
    { metric: 'Countries', value: '172' },
    { metric: 'International Pavilions', value: '30' },
    { metric: 'NOCs/IOCs/NECs/IECs', value: '54' },
  ],
  businessImpact: [
    { metric: 'Total Business Deals', value: '$53 billion across 49,131 deals' },
  ],
  focusAreas: [
    { area: 'Decarbonization', description: 'Clean energy transition' },
    { area: 'Digitalization', description: 'Technology integration' },
    { area: 'Maritime Transport', description: 'Shipping/logistics' },
    { area: 'Actionable Outcomes', description: 'Accelerating energy transition' },
  ],
  conferenceStructure: [
    { element: 'Conference Programmes', value: '12' },
    { element: 'Sessions', value: '380+' },
  ],
  sourceUrls: [
    'https://www.adipec.com/',
    'https://www.expostandservice.com/adipec-abu-dhabi/',
  ],
}

// ============================================================================
// GULFOOD DATA
// ============================================================================

export const gulfoodData: GulfoodData = {
  overview: {
    eventName: 'Gulfood',
    firstHeld: '1987',
    location: 'Dubai World Trade Centre + Dubai Exhibition Centre',
  },
  scale2026: [
    { metric: 'Exhibitors', value: '8,500+' },
    { metric: 'Products', value: '1.5 million+' },
    { metric: 'Sectors', value: '12' },
    { metric: 'Countries', value: '195' },
    { metric: '2026 Dates', value: 'January 26-30, 2026' },
    { metric: '2027 Dates', value: 'March 15-19, 2027' },
  ],
  scale2025: [
    { metric: 'Exhibitors', value: '5,500' },
    { metric: 'Visitors', value: '144,000+' },
    { metric: 'Countries Represented', value: '198' },
  ],
  venueInnovation: [
    { edition: '2026', innovation: 'First time spanning two mega venues' },
    { edition: '2027', innovation: 'DWTC + DEC combined' },
  ],
  sourceUrls: [
    'https://www.gulfood.com/',
  ],
}

// ============================================================================
// ART DUBAI DATA
// ============================================================================

export const artDubaiData: ArtDubaiData = {
  overview: {
    eventName: 'Art Dubai',
    founded: '2007',
    timing: 'Every spring',
    location: 'Madinat Jumeirah, Dubai',
    ceo: 'Ben Floyd (CEO & Co-Founder)',
  },
  scale: [
    { metric: 'Galleries', value: '~120 from 35+ countries' },
    { metric: 'Economic Impact (2023)', value: 'AED 143 million (IPSOS study)' },
  ],
  sections: [
    { section: 'Art Dubai Galleries', focus: 'Contemporary art' },
    { section: 'Zamaniyyat', focus: 'Modern art' },
    { section: 'Art Dubai Digital', focus: 'Digital/new media' },
    { section: 'Bawwaba', focus: 'Country-specific programming' },
    { section: 'Global Art Forum', focus: 'Largest annual arts conference in Middle East/Asia' },
  ],
  sourceUrls: [
    'https://www.artdubai.ae/',
    'https://en.wikipedia.org/wiki/Art_Dubai',
  ],
}

// ============================================================================
// COMMEMORATION DAY DATA
// ============================================================================

export const commemorationDayData: CommemorationDayData = {
  overview: [
    { field: 'Date', value: 'November 30 annually' },
    { field: 'Public Holiday', value: 'December 1' },
    { field: 'First Declared', value: 'August 2015 by Sheikh Khalifa bin Zayed Al Nahyan' },
    { field: 'First Observed', value: 'November 30, 2015' },
  ],
  firstMartyr: [
    { detail: 'Name', value: 'Salem Suhail bin Khamis Al Dahmani' },
    { detail: 'Role', value: 'Police officer' },
    { detail: 'Location', value: 'Greater Tunb island' },
    { detail: 'Date', value: 'November 30, 1971' },
    { detail: 'Circumstance', value: 'Refused to lower Ras Al Khaimah flag during Iranian seizure of Abu Musa and Tunb islands; killed by Iranian navy' },
  ],
  memorialWahattAlKarama: [
    { aspect: 'Name', details: 'Oasis of Dignity' },
    { aspect: 'Location', details: 'Abu Dhabi, opposite Sheikh Zayed Grand Mosque' },
    { aspect: 'Opened', details: 'December 1, 2016' },
    { aspect: 'Features', details: 'Leaning pillars, inscribed names of fallen soldiers' },
  ],
  observances: [
    { time: '11:00 AM', activity: 'Nationwide minute of silence' },
    { time: '11:01 AM', activity: 'Flag raised, national anthem "Ishy Bilady"' },
    { time: 'Locations', activity: 'Abu Dhabi Corniche, Union House' },
  ],
  alsoCommemorated: [
    { event: 'Gulf War', details: 'Soldiers who served' },
    { event: 'Saif Ghobash', details: 'Assassinated 1977' },
    { event: 'Khalifa Mubarak', details: 'Assassinated 1984' },
    { event: 'Yemen Operation Restoring Hope', details: '45 soldiers died (2015)' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Commemoration_Day',
    'https://www.wahatalkarama.ae/en/commemorationday.aspx',
  ],
}

// ============================================================================
// UAE FEDERATION FORMATION DATA
// ============================================================================

export const federationData: FederationData = {
  preFederationEra: [
    { aspect: 'Previous Name', details: 'Trucial States' },
    { aspect: 'British Protection', details: 'Since 1892 treaty' },
    { aspect: 'Oil Discovery', details: 'Abu Dhabi (1962), Dubai, Sharjah' },
  ],
  britishWithdrawal: [
    { detail: 'Announcement', value: 'Britain withdrew from Gulf by end of 1971' },
    { detail: 'Reason', value: 'Economic pressures' },
  ],
  unificationProcess: [
    { date: 'February 18, 1968', event: 'Sheikh Zayed and Sheikh Rashid met at Al Samha' },
    { date: 'February 25-27, 1968', event: 'Nine rulers met in Dubai, agreed on 11 principles' },
    { date: 'July 18, 1971', event: 'Six emirates agreed to form federation' },
    { date: 'December 2, 1971', event: 'UAE formally proclaimed sovereign' },
    { date: 'February 10, 1972', event: 'Ras Al Khaimah joined' },
  ],
  initialSixEmirates: [
    { number: 1, emirate: 'Abu Dhabi' },
    { number: 2, emirate: 'Dubai' },
    { number: 3, emirate: 'Sharjah' },
    { number: 4, emirate: 'Ajman' },
    { number: 5, emirate: 'Umm Al Quwain' },
    { number: 6, emirate: 'Fujairah' },
  ],
  rasAlKhaimah: [
    { detail: 'Initial Refusal', value: 'Seating disagreements' },
    { detail: 'Reason for Change', value: 'Iranian annexation of islands; assassination of Sheikh Khalid bin Muhammad (January 1972)' },
  ],
  foundingFathers: [
    { name: 'Sheikh Zayed bin Sultan Al Nahyan', emirate: 'Abu Dhabi' },
    { name: 'Sheikh Rashid bin Saeed Al Maktoum', emirate: 'Dubai' },
    { name: 'Sheikh Khalid bin Muhammad Al Qasimi', emirate: 'Sharjah' },
    { name: 'Sheikh Rashid bin Humaid Al Nuaimi', emirate: 'Ajman' },
    { name: 'Sheikh Ahmad bin Rashid Al Mualla', emirate: 'Umm Al Quwain' },
    { name: 'Sheikh Saqr bin Mohammed Al Qasimi', emirate: 'Ras Al Khaimah' },
    { name: 'Sheikh Mohammed bin Hamad Al Sharqi', emirate: 'Fujairah' },
  ],
  constitutionalFramework: [
    { element: 'Constitution', details: 'Provisional Constitution with 152 articles' },
    { element: 'Federal Authorities', details: 'Supreme Council, President/Vice President, Cabinet, 40-member FNC, Federal Judiciary' },
  ],
  britishRelationship: [
    { date: 'December 2, 1971', agreement: 'Bilateral friendship treaty signed' },
  ],
  significance: 'The UAE remains the only successful federal system in the Arab world to have endured and flourished over time.',
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Foundation_of_the_United_Arab_Emirates',
    'https://u.ae/en/about-the-uae/history',
    'https://gulfnews.com/uae/uae-national-day-7-key-facts-about-how-the-uae-was-formed-1.500360316',
  ],
}

// ============================================================================
// GULF WAR DATA
// ============================================================================

export const gulfWarData: GulfWarData = {
  uaeRole: [
    { aspect: 'Membership', details: '42-country Arab coalition led by US' },
    { aspect: 'Operation Name', details: '"Liberation of Kuwait"' },
    { aspect: 'Term Used', details: 'Arabic: تحرير الكويت' },
  ],
  iraqInvasion: [
    { date: 'August 2, 1990', event: 'Iraq invaded Kuwait' },
    { date: 'Troop Count', event: '100,000 Iraqi troops' },
    { date: 'Timeline', event: 'Overran Kuwait within two days' },
  ],
  iraqJustification: [
    { claim: 'OPEC Overproduction', details: 'Cited UAE and Kuwait overproduction as "economic warfare"' },
  ],
  kuwaitiRefugees: [
    { detail: 'Displacement', value: 'Many Kuwaitis relocated to UAE' },
    { detail: 'Host Treatment', value: 'Hosted by local UAE families' },
  ],
  operations: [
    { name: 'Operation Desert Shield', duration: 'August 1990 - January 1991' },
    { name: 'Operation Desert Storm', duration: 'January - March 1991' },
  ],
  sourceUrls: [
    'https://en.wikipedia.org/wiki/Gulf_war',
    'https://history.state.gov/milestones/1989-1992/gulf-war',
  ],
}

// ============================================================================
// SUMMARY DATA
// ============================================================================

export const recurringEventsSummary: RecurringEventSummary[] = [
  { event: 'UAE National Day', firstHeld: '1971', frequency: 'Annual', scale: '54th edition', economicImpact: 'N/A (Cultural)' },
  { event: 'Abu Dhabi Grand Prix', firstHeld: '2009', frequency: 'Annual', scale: 'Contract to 2030', economicImpact: 'Tourism/Economy' },
  { event: 'Dubai World Cup', firstHeld: '1996', frequency: 'Annual (March)', scale: '$30.5M meeting', economicImpact: 'Tourism/Global Profile' },
  { event: 'Gitex', firstHeld: '1980s', frequency: 'Annual (Oct)', scale: 'Largest tech show', economicImpact: 'Technology Hub' },
  { event: 'Dubai Airshow', firstHeld: '1989', frequency: 'Biennial', scale: '100K+, 1,400 exhibitors', economicImpact: 'Aerospace' },
  { event: 'ADIPEC', firstHeld: '1984', frequency: 'Annual (Nov)', scale: '239K attendees, $53B deals', economicImpact: 'Energy' },
  { event: 'Gulfood', firstHeld: '1987', frequency: 'Annual (Jan)', scale: '8,500+ exhibitors', economicImpact: 'F&B Trade' },
  { event: 'Art Dubai', firstHeld: '2007', frequency: 'Annual (Spring)', scale: '120 galleries', economicImpact: 'AED 143M (2023)' },
  { event: 'Commemoration Day', firstHeld: '2015', frequency: 'Annual (Nov 30)', scale: 'National observance', economicImpact: 'N/A (Cultural)' },
]

export const oneTimeEventsSummary: OneTimeEventSummary[] = [
  { event: 'UAE Federation', date: 'Dec 2, 1971', keyMetric: '7 emirates united', impact: 'Foundation' },
  { event: 'Gulf War', date: '1990-1991', keyMetric: 'Coalition partner', impact: 'Regional security' },
  { event: 'Dubai Debt Crisis', date: '2009-2010', keyMetric: '$60B debt deferral', impact: 'Economic transformation' },
  { event: 'UAE Yemen Intervention', date: '2015-2025', keyMetric: 'Coalition partner', impact: 'Regional military' },
  { event: 'Qatar Blockade', date: '2017-2021', keyMetric: '4 countries blockaded', impact: 'Regional relations' },
  { event: 'Abraham Accords', date: '2020', keyMetric: '3+ countries normalized', impact: 'Diplomatic transformation' },
  { event: 'COVID Response', date: '2020-2023', keyMetric: '1B+ vaccines shipped', impact: 'Humanitarian leadership' },
  { event: 'COP28', date: '2023', keyMetric: '85K attendees', impact: 'Climate diplomacy' },
  { event: 'Expo 2020 Dubai', date: '2021-2022', keyMetric: '24.1M visitors', impact: '$42.2B impact' },
]

export const sentimentSummary: SentimentSummary[] = [
  { event: 'COP28', positive: 'Climate pledges achieved', negative: 'Greenwashing claims, HR violations', neutral: 'Science debates', dominant: 'MIXED' },
  { event: 'Expo 2020', positive: 'Visitor success, economic impact', negative: 'COVID concerns during event', neutral: '-', dominant: 'POSITIVE' },
  { event: 'Dubai Debt Crisis', positive: 'Future stability learned', negative: 'Market panic, job losses', neutral: '-', dominant: 'MIXED' },
  { event: 'UAE Yemen', positive: 'Security objectives', negative: 'Humanitarian concerns', neutral: 'Coalition failures', dominant: 'MIXED' },
  { event: 'Qatar Blockade', positive: 'Qatar resilience', negative: 'Coalition strategy failed', neutral: '-', dominant: 'MIXED' },
  { event: 'Abraham Accords', positive: 'Economic/defense gains', negative: 'Palestinian concerns', neutral: 'Regional recalculation', dominant: 'MIXED' },
  { event: 'COVID Response', positive: 'Humanitarian leadership', negative: 'Restrictions burden', neutral: '-', dominant: 'POSITIVE' },
  { event: 'National Day', positive: 'National unity', negative: '-', neutral: '-', dominant: 'POSITIVE' },
  { event: 'Abu Dhabi GP', positive: 'Global profile, tourism', negative: '-', neutral: '-', dominant: 'POSITIVE' },
  { event: 'Dubai World Cup', positive: 'Global racing prestige', negative: '2020 cancellation', neutral: '-', dominant: 'POSITIVE' },
]

export const criticalPriorityEvents: CriticalPriorityEvent[] = [
  { event: 'UAE Federation (1971)', whyCritical: 'Foundation of nation' },
  { event: 'UAE National Day', whyCritical: 'National identity' },
  { event: 'Commemoration Day', whyCritical: "Martyrs' honor" },
  { event: 'COP28', whyCritical: 'Climate leadership' },
  { event: 'Expo 2020', whyCritical: 'Largest event ever' },
  { event: 'Abraham Accords', whyCritical: 'Diplomatic transformation' },
  { event: 'COVID Response', whyCritical: 'Crisis management' },
  { event: 'Dubai Debt Crisis', whyCritical: 'Economic turning point' },
]

export const highPriorityEvents: HighPriorityEvent[] = [
  { event: 'Abu Dhabi Grand Prix', whyHigh: 'Global sporting profile' },
  { event: 'Dubai World Cup', whyHigh: 'Global racing profile' },
  { event: 'Gitex', whyHigh: 'Technology hub' },
  { event: 'ADIPEC', whyHigh: 'Energy capital' },
  { event: 'Gulfood', whyHigh: 'Trade leadership' },
  { event: 'UAE Yemen', whyHigh: 'Regional military' },
  { event: 'Qatar Blockade', whyHigh: 'Regional relations' },
]

export const mediumPriorityEvents: MediumPriorityEvent[] = [
  { event: 'Dubai Airshow', whyMedium: 'Aerospace' },
  { event: 'Art Dubai', whyMedium: 'Cultural' },
  { event: 'Gulf War', whyMedium: 'Historical context' },
]

export const sourceCredibilityMatrix: SourceCredibility[] = [
  { source: 'UAE Embassy', url: 'uae-embassy.org', credibility: 'HIGH (Official)', uaeRelevance: 'CRITICAL', contentQuality: 'Factual' },
  { source: 'UNFCCC', url: 'unfccc.int', credibility: 'HIGH (Official)', uaeRelevance: 'CRITICAL', contentQuality: 'Factual' },
  { source: 'COP28.com', url: 'cop28.com', credibility: 'HIGH (Official)', uaeRelevance: 'CRITICAL', contentQuality: 'Factual' },
  { source: 'Wikipedia', url: 'en.wikipedia.org', credibility: 'MEDIUM (Crowdsourced)', uaeRelevance: 'Variable', contentQuality: 'Factual' },
  { source: 'Human Rights Watch', url: 'hrw.org', credibility: 'HIGH (NGO)', uaeRelevance: 'HIGH', contentQuality: 'Critical' },
  { source: 'Baker Institute', url: 'bakerinstitute.org', credibility: 'HIGH (Academic)', uaeRelevance: 'HIGH', contentQuality: 'Analytical' },
  { source: 'Brookings', url: 'brookings.edu', credibility: 'HIGH (Think Tank)', uaeRelevance: 'HIGH', contentQuality: 'Analytical' },
  { source: 'Chatham House', url: 'chathamhouse.org', credibility: 'HIGH (Think Tank)', uaeRelevance: 'HIGH', contentQuality: 'Analytical' },
]

export const unexecutedQueries: UnexecutedQuery[] = [
  { event: 'Dubai Shopping Festival (DSF)', priority: 'HIGH', notes: 'Not executed' },
  { event: 'Dubai Summer Surprises (DSS)', priority: 'HIGH', notes: 'Not executed' },
  { event: 'Abu Dhabi International Book Fair', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'Sharjah International Book Fair', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'Dubai International Film Festival (DIFF)', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'Abu Dhabi Film Festival', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'Dubai Design Week', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'Abu Dhabi Art', priority: 'MEDIUM', notes: 'Not executed' },
  { event: 'IDEX (Abu Dhabi)', priority: 'HIGH', notes: 'Not executed' },
  { event: 'Arabian Travel Market (ATM)', priority: 'HIGH', notes: 'Not executed' },
  { event: 'Islamic New Year / Ramadan / Eid', priority: 'CRITICAL', notes: 'Rate limited twice' },
  { event: 'UAE Arab Spring response (2011+)', priority: 'HIGH', notes: 'Rate limited' },
]

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 26,
  pagesFetched: '27+',
  enrichmentStatus: 'FULLY ENRICHED with live WebFetch data',
}

// ============================================================================
// KEY QUERY PATTERNS
// ============================================================================

export const keyQueryPatterns = [
  'COP28 UAE',
  'COP28 Abu Dhabi',
  'كوب28 (Arabic)',
  'Expo 2020 Dubai',
  'Dubai debt crisis 2009',
  'UAE Yemen war coalition',
  'UAE Qatar blockade',
  'Abraham Accords UAE Israel',
  'COVID UAE 2020',
  'UAE National Day December 2',
  'Gitex Dubai 2023',
  'Dubai Airshow 2023',
  'ADIPEC Abu Dhabi',
  'Gulfood Dubai',
  'UAE Federation 1971',
  'Gulf War UAE 1990',
  'Art Dubai',
  'Abu Dhabi F1 Grand Prix',
  'Dubai World Cup horse racing',
  'Commemoration Day UAE November 30',
]

// ============================================================================
// FOCUS AREAS - MAJOR RECURRING EVENTS
// ============================================================================

export interface FocusRecurringEvent {
  event: string
  firstHeld: string
  frequency: string
  uaeRelevance: string
}

export const focusRecurringEvents: FocusRecurringEvent[] = [
  { event: 'UAE National Day (Eid Al Etihad)', firstHeld: 'December 2, 1971', frequency: 'Annual (Dec 2)', uaeRelevance: 'CRITICAL - National Identity' },
  { event: 'Dubai Shopping Festival (DSF)', firstHeld: '1996', frequency: 'Annual (Jan-Feb)', uaeRelevance: 'HIGH - Tourism/Economy' },
  { event: 'Dubai Summer Surprises (DSS)', firstHeld: '1998', frequency: 'Annual (Summer)', uaeRelevance: 'HIGH - Tourism/Economy' },
  { event: 'Abu Dhabi Formula 1 Grand Prix', firstHeld: 'November 1, 2009', frequency: 'Annual', uaeRelevance: 'CRITICAL - Global Profile' },
  { event: 'Dubai World Cup (horse racing)', firstHeld: '1996', frequency: 'Annual (Late March)', uaeRelevance: 'CRITICAL - Global Profile' },
  { event: 'Abu Dhabi International Book Fair', firstHeld: '1981', frequency: 'Annual', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Sharjah International Book Fair', firstHeld: '1982', frequency: 'Annual', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Dubai International Film Festival (DIFF)', firstHeld: '2004', frequency: 'Annual', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Abu Dhabi Film Festival', firstHeld: '2007', frequency: 'Annual', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Art Dubai', firstHeld: '2007', frequency: 'Annual (Spring)', uaeRelevance: 'CRITICAL - Cultural/Economy' },
  { event: 'Dubai Design Week', firstHeld: '2015', frequency: 'Annual', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Abu Dhabi Art', firstHeld: '2009', frequency: 'Annual (November)', uaeRelevance: 'MEDIUM - Cultural' },
  { event: 'Gitex Technology Week', firstHeld: '1980s', frequency: 'Annual (October)', uaeRelevance: 'CRITICAL - Technology Hub' },
  { event: 'IDEX (Abu Dhabi)', firstHeld: '1993', frequency: 'Biennial (Odd years)', uaeRelevance: 'CRITICAL - Defense' },
  { event: 'Dubai Airshow', firstHeld: '1989', frequency: 'Biennial (Odd years)', uaeRelevance: 'CRITICAL - Aerospace' },
  { event: 'Arabian Travel Market (ATM)', firstHeld: '1994', frequency: 'Annual (May)', uaeRelevance: 'CRITICAL - Tourism' },
  { event: 'Gulfood', firstHeld: '1987', frequency: 'Annual (Jan/Feb)', uaeRelevance: 'CRITICAL - F&B Trade' },
  { event: 'ADIPEC', firstHeld: '1984', frequency: 'Annual (November)', uaeRelevance: 'CRITICAL - Energy' },
  { event: 'COP28', firstHeld: '2023', frequency: 'Once (Historic)', uaeRelevance: 'CRITICAL - Climate Leadership' },
  { event: 'World Expo 2020 Dubai', firstHeld: '2021-2022', frequency: 'Once (Historic)', uaeRelevance: 'CRITICAL - Global Event' },
  { event: 'Islamic New Year / Ramadan / Eid', firstHeld: 'Recurring', frequency: 'Annual', uaeRelevance: 'CRITICAL - Cultural/Religious' },
  { event: 'Commemoration Day', firstHeld: '2015', frequency: 'Annual (Nov 30)', uaeRelevance: 'CRITICAL - National Identity' },
]

// ============================================================================
// FOCUS AREAS - HISTORICAL ONE-TIME EVENTS
// ============================================================================

export interface FocusOneTimeEvent {
  event: string
  date: string
  uaeRelevance: string
}

export const focusOneTimeEvents: FocusOneTimeEvent[] = [
  { event: 'UAE Federation', date: 'December 2, 1971', uaeRelevance: 'CRITICAL - Foundation' },
  { event: 'Gulf War', date: '1990-1991', uaeRelevance: 'HIGH - Regional Security' },
  { event: 'Dubai Debt Crisis', date: '2009-2010', uaeRelevance: 'CRITICAL - Economic Turning Point' },
  { event: 'Arab Spring and UAE response', date: '2011+', uaeRelevance: 'HIGH - Political' },
  { event: 'UAE joining Saudi-led coalition in Yemen', date: '2015', uaeRelevance: 'CRITICAL - Regional Military' },
  { event: 'Qatar Diplomatic Crisis', date: '2017-2021', uaeRelevance: 'CRITICAL - Regional Relations' },
  { event: 'Abraham Accords', date: '2020', uaeRelevance: 'CRITICAL - Diplomatic Transformation' },
  { event: 'COVID-19 Pandemic in UAE', date: '2020-2023', uaeRelevance: 'CRITICAL - Health/Economy' },
]

// ============================================================================
// ALL EVENT ENTITIES DATA (combined for table view)
// ============================================================================

export interface EventEntity {
  id: string
  name: string
  category: 'RECURRING' | 'ONE_TIME' | 'ENRICHED'
  type: string
  firstHeld: string
  frequency: EventFrequency
  relevance: RelevanceLevel
  relevanceDetail: string
  keyMetric?: string
  sentiment: SentimentType
  description?: string
}

export const allEventEntities: EventEntity[] = [
  // Enriched findings - One-time critical events
  { id: 'cop28', name: 'COP28 UAE Climate Conference', category: 'ENRICHED', type: 'Climate', firstHeld: '2023', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Climate Leadership', keyMetric: '85,000+ attendees', sentiment: 'MIXED' },
  { id: 'expo2020', name: 'World Expo 2020 Dubai', category: 'ENRICHED', type: 'Global Event', firstHeld: '2021-2022', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Global Event', keyMetric: '24.1M visitors', sentiment: 'POSITIVE' },
  { id: 'dubai-debt-crisis', name: 'Dubai Debt Crisis', category: 'ENRICHED', type: 'Economic', firstHeld: '2009-2010', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Economic Turning Point', keyMetric: '$60B debt deferral', sentiment: 'MIXED' },
  { id: 'uae-yemen', name: 'UAE in Yemen War', category: 'ENRICHED', type: 'Military', firstHeld: '2015-Present', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Regional Military', keyMetric: 'Coalition partner', sentiment: 'MIXED' },
  { id: 'qatar-crisis', name: 'Qatar Diplomatic Crisis', category: 'ENRICHED', type: 'Diplomatic', firstHeld: '2017-2021', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Regional Relations', keyMetric: '4 countries blockaded', sentiment: 'MIXED' },
  { id: 'abraham-accords', name: 'Abraham Accords', category: 'ENRICHED', type: 'Diplomatic', firstHeld: '2020', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Diplomatic Transformation', keyMetric: '3+ countries normalized', sentiment: 'MIXED' },
  { id: 'covid-uae', name: 'COVID-19 Pandemic UAE', category: 'ENRICHED', type: 'Health', firstHeld: '2020-2023', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Health/Economy', keyMetric: '1B+ vaccines shipped', sentiment: 'POSITIVE' },
  // Recurring critical events
  { id: 'uae-national-day', name: 'UAE National Day (Eid Al Etihad)', category: 'RECURRING', type: 'National', firstHeld: '1971', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'National Identity', sentiment: 'POSITIVE' },
  { id: 'abu-dhabi-gp', name: 'Abu Dhabi Formula 1 Grand Prix', category: 'RECURRING', type: 'Sports', firstHeld: '2009', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'Global Profile', keyMetric: 'Contract to 2030', sentiment: 'POSITIVE' },
  { id: 'dubai-world-cup', name: 'Dubai World Cup (Horse Racing)', category: 'RECURRING', type: 'Sports', firstHeld: '1996', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'Global Profile', keyMetric: '$30.5M meeting', sentiment: 'POSITIVE' },
  { id: 'gitex', name: 'Gitex Technology Week', category: 'RECURRING', type: 'Technology', firstHeld: '1980s', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'Technology Hub', sentiment: 'POSITIVE' },
  { id: 'dubai-airshow', name: 'Dubai Airshow', category: 'RECURRING', type: 'Aerospace', firstHeld: '1989', frequency: 'Biennial', relevance: 'CRITICAL', relevanceDetail: 'Aerospace', keyMetric: '100K+, 1,400 exhibitors', sentiment: 'POSITIVE' },
  { id: 'adipec', name: 'ADIPEC', category: 'RECURRING', type: 'Energy', firstHeld: '1984', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'Energy', keyMetric: '239K attendees, $53B deals', sentiment: 'POSITIVE' },
  { id: 'gulfood', name: 'Gulfood', category: 'RECURRING', type: 'Trade', firstHeld: '1987', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'F&B Trade', keyMetric: '8,500+ exhibitors', sentiment: 'POSITIVE' },
  { id: 'art-dubai', name: 'Art Dubai', category: 'RECURRING', type: 'Cultural', firstHeld: '2007', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'Cultural/Economy', keyMetric: '120 galleries', sentiment: 'POSITIVE' },
  { id: 'commemoration-day', name: 'Commemoration Day (Martyrs\' Day)', category: 'RECURRING', type: 'National', firstHeld: '2015', frequency: 'Annual', relevance: 'CRITICAL', relevanceDetail: 'National Identity', sentiment: 'POSITIVE' },
  // High priority events
  { id: 'dsf', name: 'Dubai Shopping Festival (DSF)', category: 'RECURRING', type: 'Tourism', firstHeld: '1996', frequency: 'Annual', relevance: 'HIGH', relevanceDetail: 'Tourism/Economy', sentiment: 'POSITIVE' },
  { id: 'dss', name: 'Dubai Summer Surprises (DSS)', category: 'RECURRING', type: 'Tourism', firstHeld: '1998', frequency: 'Annual', relevance: 'HIGH', relevanceDetail: 'Tourism/Economy', sentiment: 'POSITIVE' },
  // Historical one-time events
  { id: 'uae-federation', name: 'UAE Federation Formation', category: 'ONE_TIME', type: 'Foundational', firstHeld: 'December 2, 1971', frequency: 'Once', relevance: 'CRITICAL', relevanceDetail: 'Foundation', sentiment: 'POSITIVE' },
  { id: 'gulf-war', name: 'Gulf War', category: 'ONE_TIME', type: 'Military', firstHeld: '1990-1991', frequency: 'Once', relevance: 'HIGH', relevanceDetail: 'Regional Security', sentiment: 'NEUTRAL' },
]

// ============================================================================
// DASHBOARD METRIC SUMMARY
// ============================================================================

export const eventDashboardMetrics = {
  totalEventsTracked: allEventEntities.length,
  criticalPriorityCount: allEventEntities.filter(e => e.relevance === 'CRITICAL').length,
  highPriorityCount: allEventEntities.filter(e => e.relevance === 'HIGH').length,
  recurringCount: allEventEntities.filter(e => e.category === 'RECURRING').length,
  oneTimeCount: allEventEntities.filter(e => e.category === 'ONE_TIME').length,
  enrichedCount: allEventEntities.filter(e => e.category === 'ENRICHED').length,
  positiveSentimentCount: allEventEntities.filter(e => e.sentiment === 'POSITIVE' || e.sentiment === 'OVERWHELMINGLY_POSITIVE').length,
  mixedSentimentCount: allEventEntities.filter(e => e.sentiment === 'MIXED').length,
  neutralSentimentCount: allEventEntities.filter(e => e.sentiment === 'NEUTRAL').length,
  negativeSentimentCount: allEventEntities.filter(e => e.sentiment === 'NEGATIVE').length,
}
