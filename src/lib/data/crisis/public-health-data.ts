/**
 * UAE Public Health Data - MD 4-9
 *
 * Comprehensive public health intelligence data extracted from 4-9-public-health-results.md
 * Data source: 25 queries executed, 18 pages fetched (2026-04-27)
 * Confidence: ~85%
 */

'use client'

import type { CrisisEvent, KeyFinding, SourceReference, TierLevel, PhoenixStage } from '../../data-loader/types'

// ============================================================================
// LOCAL INTERFACES FOR ACTUAL DATA STRUCTURE
// ============================================================================

/**
 * Local interface matching actual source data structure
 * Note: uses `source` (string) not `name`, and `credibility` (string) not the CredibilityScore interface
 */
interface LocalSourceReference {
  source: string
  tier: number
  credibility: string
  url: string
}

/**
 * Local interface matching actual stakeholder impact data
 * Note: uses `impact` (string) and `sentiment` (string) not the numeric interface
 */
interface LocalStakeholderImpact {
  stakeholder: string
  impact: string
  sentiment: string
}

/**
 * Local response metrics interface matching actual data structure
 */
interface LocalResponseMetrics {
  containmentTime: string
  recoveryTime: string
  casualties: number
  economicLoss: number
  affectedPopulation: number
  fundingAllocated: number
}

// ============================================================================
// EXECUTION METADATA
// ============================================================================

export const executionMetadata = {
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 25,
  pagesFetched: 18,
  confidence: '~85%',
  verificationStatus: 'Partial (some pages inaccessible due to 403 errors or connection refused)',
}

// ============================================================================
// KEY METRICS
// ============================================================================

export const keyMetrics = {
  covidCases: { value: '1,067,030', date: '24 May 2023', source: 'Wikipedia' },
  covidDeaths: { value: '2,349', fatalityRate: '0.22%', period: '2020-2023', source: 'Wikipedia' },
  recovered: { value: '1,054,525', date: '24 May 2023', source: 'Wikipedia' },
  activeCases: { value: '10,156', date: '24 May 2023', source: 'Wikipedia' },
  dosesAdministered: { value: '24,922,054', date: '2023', source: 'Wikipedia' },
  recoveryRate: { value: '~89%', date: '27 Dec 2020', source: 'PMC Research' },
  caseFatalityRate: { value: '0.3%', source: 'PMC Research' },
  testsPer100k: { value: '209,734.9', source: 'PMC Research' },
  positiveRate: { value: '1.2%', source: 'PMC Research' },
  firstCase: { date: '29 January 2020', patient: '73-year-old Chinese woman' },
  firstDeath: { date: '20 March 2020' },
  firstRecovery: { date: '9 February 2020' },
}

// ============================================================================
// COVID-19 TIMELINE
// ============================================================================

export const covid19Timeline = [
  { date: '29 Jan 2020', event: 'First case reported', detail: '73-year-old Chinese woman - first Middle Eastern country' },
  { date: '8 Mar 2020', event: 'School closures announced', detail: 'Educational institutions closed nationwide' },
  { date: '20 Mar 2020', event: 'First deaths reported', detail: 'UAE confirmed first COVID-19 deaths' },
  { date: '25 Mar 2020', event: 'Flight suspensions', detail: 'International travel restricted' },
  { date: '26 Mar 2020', event: 'Night curfew imposed', detail: '8pm-6am initially, later extended' },
  { date: '29 Mar 2020', event: 'Dubai Metro suspended', detail: 'Metro and Tram service halted' },
  { date: '31 Mar 2020', event: 'Al Ras area lockdown', detail: "Dubai's Al Ras district under strict lockdown" },
  { date: '4 Apr 2020', event: 'Dubai 24-hour curfew', detail: 'Full lockdown imposed in Dubai' },
  { date: 'Mar-Aug 2020', event: 'National Sterilization Program', detail: 'Comprehensive disinfection campaign' },
  { date: '9 Feb 2020', event: 'First recovery', detail: 'Patient discharged after recovery' },
  { date: 'Dec 2020', event: 'Sinopharm approved', detail: 'First COVID-19 vaccine approved in UAE' },
  { date: 'Dec 2020', event: 'Vaccination campaign launched', detail: "World's second-fastest campaign begins" },
]

// ============================================================================
// LOCKDOWN DETAILS
// ============================================================================

export const lockdownDetails = {
  nationalSterilizationProgram: 'March - August 2020',
  initialCurfewHours: '8pm - 6am',
  dubaiCurfew: '24-hour (starting 4 April 2020)',
  movementPermits: 'Required for essential travel',
  dubaiMetro: 'Suspended 29 March 2020',
  alRasArea: 'Lockdown from 31 March 2020',
}

// ============================================================================
// VACCINES AVAILABLE
// ============================================================================

export const vaccinesAvailable = [
  { name: 'Sinopharm BIBP', type: 'Chinese inactivated vaccine', source: 'Wikipedia' },
  { name: 'Pfizer-BioNTech', type: 'mRNA vaccine', source: 'Wikipedia' },
  { name: 'Oxford-AstraZeneca', type: 'Viral vector vaccine', source: 'Wikipedia' },
  { name: 'Sputnik V', type: 'Russian viral vector vaccine', source: 'Wikipedia' },
]

// ============================================================================
// SINOPHARM VACCINE DETAILS
// ============================================================================

export const sinopharmDetails = {
  announcedEfficacy: '86% (December 2020)',
  firstApproved: 'December 2020',
  developmentPartner: 'G42 Healthcare (Phase III trial)',
  localProduction: 'Hayat-Vax (UAE-Sinopharm joint venture)',
  productionCapacityTarget: '200 million doses annually',
  currentProduction: '2 million doses per month',
}

// ============================================================================
// VACCINATION STATISTICS (AUG 2021)
// ============================================================================

export const vaccinationStats = {
  totalDoses: 17454250,
  atLeastOneDose: '82.82%',
  fullyVaccinated: '73.21%',
  averageDosesPer100People: 6.06,
  vaccinationLocations: '120+ across all emirates',
  cost: 'Free for all citizens and residents',
  boosterAvailable: '3 months after second dose for Sinopharm',
}

// ============================================================================
// GLOBAL VACCINATION RANKINGS
// ============================================================================

export const vaccinationRankings = [
  { ranking: "World's Second-Fastest", achievement: 'COVID-19 vaccination campaign', source: 'Wikipedia' },
  { ranking: 'Second Globally', achievement: 'Vaccine administration rates', source: 'Wikipedia' },
  { ranking: 'Fifth Globally', achievement: 'Vaccine availability', source: 'Wikipedia' },
  { ranking: 'Third Globally', achievement: 'Public satisfaction with COVID-19 strategies', source: 'Wikipedia' },
  { ranking: 'First in Arab World', achievement: 'Developed and produced COVID-19 vaccine', source: 'Wikipedia' },
]

// ============================================================================
// AL HOSN APP
// ============================================================================

export const alHosnApp = {
  officialName: 'Al Hosn (الحصن - "The Fortress")',
  purpose: 'Official UAE contact tracing and health status app',
  features: ['COVID-19 test results', 'Vaccination records', 'Health status colors (Grey/Green/Red)'],
  greenPass: 'PCR tests every 14 days required',
  languages: ['Arabic', 'English', 'Hindi'],
  supportLine: '800 HOSN (4676)',
  platforms: ['App Store', 'Google Play', 'Huawei App Gallery', 'Galaxy Store'],
  tracingTechnology: 'Bluetooth-based proximity tracking',
  tracingMechanism: 'Both phones exchange anonymized IDs',
  adminAuthority: 'National Emergency Crisis and Disaster Management Authority (NCEMA)',
  colorCodes: [
    { color: 'Green', meaning: 'Active Green Pass, negative PCR within 14 days' },
    { color: 'Grey', meaning: 'PCR expired or pending result' },
    { color: 'Red', meaning: 'Positive case' },
  ],
}

// ============================================================================
// OTHER DIGITAL HEALTH TOOLS
// ============================================================================

export const digitalHealthTools = [
  { tool: 'Virtual Doctor for COVID-19', authority: 'MoHaP', function: 'Chatbot for symptom assessment' },
  { tool: 'TraceCovid App', authority: 'DoH-Abu Dhabi', function: 'Bluetooth-based proximity tracking' },
  { tool: 'StayHome App', authority: 'DoH-Abu Dhabi', function: 'Quarantine compliance with photo check-ins and location sharing' },
  { tool: 'Electronic Wristbands', authority: 'Abu Dhabi', function: 'Smartwatch for self-isolating patients' },
  { tool: 'DOH RemoteCare App', authority: 'DoH-Abu Dhabi', function: 'Tele-consultations and medicine delivery' },
  { tool: 'Smart Helmet', authority: 'Ministry of Interior', function: 'Thermal cameras for temperature detection' },
]

// ============================================================================
// MERS-COV STATISTICS
// ============================================================================

export const MersCov = {
  uaeTotalCases: 94,
  uaeDeaths: 12,
  caseFatalityRate: '13%',
  globalTotalCases: 2605,
  globalDeaths: 936,
  mostRecentCase: {
    date: 'July 2023',
    patient: '28-year-old male',
    location: 'Al Ain city, Abu Dhabi',
    hospitalAdmission: '8 June 2023',
    positiveTest: '23 June 2023 (PCR)',
    contactWithAnimals: 'None (dromedaries, camels, goats, sheep)',
    travelHistory: 'None outside UAE',
    healthcareWorkerContacts: '108 identified and monitored for 14 days',
    secondaryCases: 'None detected',
    previousUAECase: 'November 2021 (before July 2023)',
  },
  initialMisdiagnosis: 'Patient was initially diagnosed with acute pancreatitis, acute kidney injury, and sepsis before MERS confirmation. Admitted to ICU, placed on mechanical ventilation.',
  whoRecommendation: 'No travel or trade restrictions recommended. Emphasized strengthening surveillance and hand hygiene practices.',
}

// ============================================================================
// MPOX DATA
// ============================================================================

export const mpoxData = {
  '2022Outbreak': { cases: 8, source: 'Harvard T.H. Chan School of Public Health' },
  '2022NewCases': { cases: 3, source: 'Gulf Business' },
  feb2025: { detail: 'First clade Ib case reported to WHO', source: 'Outbreak News Today' },
  cladeIbDetails: {
    notificationDate: '7 February 2025',
    virusStrain: 'Clade Ib mpox virus',
    reportingBody: 'WHO',
    publicAwareness: 'Emirates Health Services materials published March 2026',
  },
  globalContext2022: '911+ confirmed cases across 29 countries during 2022 monkeypox outbreak',
  virusClassification: 'Mpox is a disease caused by monkeypox virus belonging to the family of poxviruses. Can spread from animals to humans and human-to-human.',
}

// ============================================================================
// DENGUE OUTBREAK
// ============================================================================

export const dengueOutbreak = {
  trigger: 'Heaviest-ever recorded rainfall in UAE (April 2024)',
  cause: 'Flooding created stagnant water pools as mosquito breeding grounds',
  vector: 'Aedes genus mosquitoes',
  vulnerablePopulation: 'Laborers, particularly migrant workers',
  researcherQuote: '"Double whammy of climate change" - Barrak Alahmad',
  april2024Significance: 'Unprecedented rainfall created ideal conditions for mosquito proliferation',
  symptoms: [
    { symptom: 'High Fever', detail: 'Up to 40°C' },
    { symptom: 'Severe Headache', detail: 'Common' },
    { symptom: 'Pain Behind Eyes', detail: 'Common' },
    { symptom: 'Joint and Muscle Pain', detail: 'Severe' },
    { symptom: 'Nausea/Vomiting', detail: 'Present' },
    { symptom: 'Skin Rash', detail: 'Present' },
  ],
  preventionMeasures: 'Avoid mosquito bites, remove standing water',
}

// ============================================================================
// DUBIA VECTOR CONTROL (APR 2026)
// ============================================================================

export const vectorControl = {
  predatoryFishDeployment: 'Up to 20,000 larvivorous fish annually',
  bacterialTablets: 'Used in water bodies',
  insectGrowthRegulators: 'Chemical control method',
  smartMosquitoTraps: 'Carbon dioxide mimicking human breathing',
  targetAreas: 'Stagnant water ponds, lakes, drainage systems',
  currentRiskAssessment: 'Low for vector-borne disease',
  source: 'Emirates Health Services, The National (April 2026)',
}

// ============================================================================
// FOOD POISONING STATISTICS (DUBAI 2025)
// ============================================================================

export const foodPoisoningStats = {
  totalCasesH12025: 800,
  confirmedSalmonella: 200,
  contributingFactors: 'Summer temperatures, improper refrigeration',
  causativeAgents: [
    { agent: 'Salmonella', category: 'Bacteria' },
    { agent: 'Campylobacter', category: 'Bacteria' },
    { agent: 'Rotavirus', category: 'Virus' },
    { agent: 'Norovirus', category: 'Virus' },
    { agent: 'Giardia', category: 'Parasite' },
    { agent: 'Cryptosporidium', category: 'Parasite' },
  ],
  redFlagSymptoms: [
    { symptom: 'Bloody Diarrhea', threshold: 'Any occurrence' },
    { symptom: 'Fever', threshold: '>38.9°C' },
    { symptom: 'Persistent Vomiting', threshold: 'Any occurrence' },
    { symptom: 'Dehydration', threshold: 'Any occurrence' },
  ],
  summerContext: 'Dubai at 35°C with 40°C and 45°C heat waves driving surge in food poisoning cases',
  tourismLink: 'Some cases involved tourists returning from abroad',
  governmentResponse: 'Comprehensive food safety guidelines, restaurant inspection programs, establishment shutdowns',
}

// ============================================================================
// MENTAL HEALTH IMPACT
// ============================================================================

export const mentalHealthImpact = {
  surveyFindings: [
    { finding: 'Residents Reporting Negative Mental Health Impact', value: '>50%', source: 'YouGov Survey (April 2022)' },
    { finding: 'Relief from Easing of Restrictions', value: 'Yes', source: 'YouGov Survey (April 2022)' },
  ],
  affectedPopulations: [
    { group: 'Males', impact: 'More psychologically impacted during lockdown', source: 'PMC Research' },
    { group: 'Older People', impact: 'More psychologically impacted during lockdown', source: 'PMC Research' },
    { group: 'Unemployed Individuals', impact: 'More psychologically impacted during lockdown', source: 'PMC Research' },
    { group: 'General Public', impact: 'Depression/anxiety levels lower than other countries', source: 'MDPI Study (June 2024)' },
  ],
  uaeResponse: [
    { initiative: 'Mental Health Hotline', detail: 'Established by Ministry of Health' },
    { initiative: 'Gradual Easing', detail: 'Government gradual easing provided mental health relief' },
  ],
}

// ============================================================================
// MIGRANT WORKER HEALTH
// ============================================================================

export const migrantWorkerHealth = {
  covid19Impact: [
    { finding: 'NGOs Calling for Protection', value: 'Coalition of 16 NGOs', source: 'Human Rights Watch (April 2020)' },
    { finding: 'Worker Accommodation', value: 'Dormitory-style "labour camps"', source: 'Amnesty International' },
    { finding: 'Room Occupancy', value: '6-12 people sharing small rooms with bunkbeds', source: 'Amnesty International' },
    { finding: 'Sanitation', value: 'Communal bathrooms and kitchens lacking adequate sanitation', source: 'Amnesty International' },
    { finding: 'Public Health Risk', value: 'Overcrowded accommodation presented heightened public health risk', source: 'Amnesty International' },
    { finding: 'Most Affected Sectors', value: 'Tourism, hospitality, construction', source: 'The Guardian (April 2020)' },
    { finding: 'Government Response', value: 'Residency visas and Emirates IDs extended 3 months automatically', source: 'UAE Government' },
  ],
  mentalHealthStatisticsIndianMigrantWorkers: [
    { metric: 'Felt Nervous', value: '73.5%' },
    { metric: 'Felt Depressed', value: '62%' },
    { metric: 'Felt Lonely', value: '77%' },
    { metric: 'Difficulty Sleeping', value: '63.4%' },
    { metric: 'Difficulties Concentrating', value: '63%' },
  ],
}

// ============================================================================
// ECONOMIC IMPACT & STIMULUS
// ============================================================================

export const economicImpactStimulus = {
  stimulusPackages: [
    { jurisdiction: 'UAE (National)', amount: 'AED 100 billion', duration: 'Total committed' },
    { jurisdiction: 'Abu Dhabi Executive Council', amount: 'AED 3 billion', duration: 'SME Credit Guarantee Scheme' },
    { jurisdiction: 'Dubai Government', amount: 'AED 1.5 billion', duration: '3-month package' },
    { jurisdiction: 'Sharjah', amount: '47-point stimulus package', duration: '-' },
    { jurisdiction: 'Central Bank of UAE (TESS)', amount: '$70 billion', duration: 'Doubled from initial; Extended to people and businesses' },
    { jurisdiction: 'Private Sector Recovery', amount: '$79 billion', duration: 'Two-phase plan; Focus on digital economy (5G, AI)' },
  ],
  tessDetails: 'Targeted Economic Support Scheme (TESS) doubled to $70 billion to support people and businesses affected by the pandemic',
  economicImpact: [
    { sector: 'Exports (Oil)', impact: 'Decreased' },
    { sector: 'Exports (Non-Oil)', impact: 'Decreased' },
    { sector: 'Retail Trade', impact: 'Severe impact' },
    { sector: 'Hospitality', impact: 'Severe impact' },
    { sector: 'Tourism', impact: 'Severe impact' },
    { sector: 'Aviation', impact: 'Travel bans and restrictions adversely affected' },
  ],
}

// ============================================================================
// HUMANITARIAN RESPONSE
// ============================================================================

export const humanitarianResponse = {
  globalMedicalAid: {
    medicalAidShipped: '2,154 tons',
    countriesReceivedAid: 135,
    medicalFlights: 196,
    fieldHospitalsEstablished: 6,
    countriesSuppliedViaDubaiHumanitarianCity: 117,
    contributionToWHO: 'USD 10 million in-kind aid',
    shareOfInternationalResponse: '80% to struggling nations',
  },
  fieldHospitalNations: ['Sudan', 'Guinea Conakry', 'Mauritania', 'Sierra Leone', 'Lebanon', 'Jordan'],
  majorInitiatives: [
    { campaign: 'The Fund of the United Arab Emirates: Homeland of Humanity', date: 'March 25, 2020' },
    { campaign: 'Together We Are Good', date: 'Abu Dhabi community program' },
    { campaign: '10 Million Meals Campaign', date: 'Ramadan 2020' },
    { campaign: 'One Billion Meals Campaign', date: '2022 expansion' },
    { campaign: 'Free Stem-Cell Therapy', detail: '73 patients cured via Abu Dhabi Stem Cell Center' },
    { campaign: 'Emirates Red Crescent - Family Patronage Program', detail: 'For families of deceased COVID-19 patients' },
  ],
}

// ============================================================================
// HEALTH SYSTEM PREPAREDNESS
// ============================================================================

export const healthSystemPreparedness = {
  rankings: [
    { ranking: 'First in Emergency Preparedness', source: 'Henley & Partners', rationale: 'Small population, centralized state apparatus, strong emergency capabilities' },
  ],
  enablingFactors: [
    'Small population enabling rapid response',
    'Centralized state apparatus',
    'Strong emergency capabilities',
  ],
  pandemicReadinessProgram: {
    prevention: 'Regular handwashing, avoiding touching face, covering coughs',
    response: 'Staying home when sick, avoiding close contact with sick individuals',
    approach: '"One Health" multi-sectoral strategy',
    policy: 'National Policy for Combating Health Risks',
    funding: 'Public funding for health emergency preparedness',
  },
}

// ============================================================================
// INTERNATIONAL HEALTH COOPERATION
// ============================================================================

export const internationalHealthCooperation = {
  whoRelations: {
    uaeHealthcareRanking: '"Leading model for highly efficient healthcare delivery"',
    statementBy: 'Hakan Balkhy, WHO Regional Director',
    statementDate: 'December 2025',
  },
  covaxParticipation: {
    gulfCountriesPledges: '$221 million',
    uaePledges: '$50 million in-kind support for COVAX AMC',
    uaeRole: 'Supported WHO equitable vaccine distribution',
  },
}

// ============================================================================
// ENTITIES REGISTRY
// ============================================================================

export const entityRegistry = {
  persons: [
    { name: 'Hanan Balkhy', role: 'WHO Regional Director', relevance: 'Provided statement on UAE healthcare model (December 2025)' },
    { name: 'Barrak Alahmad', role: 'Researcher (Harvard)', relevance: 'Researcher on dengue-climate change link' },
  ],
  organizations: [
    { name: 'National Crisis and Emergency Management Authority (NCEMA)', type: 'Government', role: 'COVID-19 emergency response coordination' },
    { name: 'Ministry of Health and Prevention (MoHaP)', type: 'Government', role: 'Health policy, Virtual Doctor chatbot' },
    { name: 'Department of Health Abu Dhabi (DoH)', type: 'Government', role: 'TraceCovid, StayHome, RemoteCare apps' },
    { name: 'Emirates Health Services', type: 'Government', role: 'Healthcare service delivery' },
    { name: 'G42 Healthcare', type: 'Private', role: 'Sinopharm Phase III trials, vaccine production' },
    { name: 'Dubai International Humanitarian City', type: 'Government', role: 'Global humanitarian logistics hub' },
    { name: 'WHO', type: 'International', role: 'Global health coordination' },
    { name: 'COVAX', type: 'International', role: 'Vaccine equity initiative' },
    { name: 'Human Rights Watch', type: 'NGO', role: 'Migrant worker advocacy' },
    { name: 'Amnesty International', type: 'NGO', role: 'Human rights monitoring' },
  ],
  locations: [
    { name: 'Al Ain, Abu Dhabi', relevance: 'MERS case location (July 2023)' },
    { name: 'Al Ras, Dubai', relevance: 'COVID-19 lockdown area' },
    { name: 'Dubai', relevance: 'COVID-19 24-hour curfew, dengue cases, food poisoning cases' },
    { name: 'UAE (nationwide)', relevance: 'Overall pandemic response' },
  ],
  diseases: [
    { name: 'COVID-19', status: 'Major outbreak Jan 2020 - 2023' },
    { name: 'MERS-CoV', status: '94 cases since 2013, ongoing surveillance' },
    { name: 'Mpox/Clade Ib', status: 'First case Feb 2025' },
    { name: 'Dengue', status: 'Surge Apr 2024 following heavy rainfall' },
    { name: 'Salmonella', status: '200+ cases H1 2025' },
  ],
  vaccines: [
    { name: 'Sinopharm BIBP', type: 'Inactivated', status: 'Approved Dec 2020, produced locally' },
    { name: 'Pfizer-BioNTech', type: 'mRNA', status: 'Approved' },
    { name: 'Oxford-AstraZeneca', type: 'Viral vector', status: 'Approved' },
    { name: 'Sputnik V', type: 'Viral vector', status: 'Approved' },
    { name: 'Hayat-Vax', type: 'Inactivated (local)', status: 'First Arab-made COVID vaccine' },
  ],
}

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export const sentimentAnalysis = {
  positive: [
    { finding: 'UAE described as "leading model for highly efficient healthcare delivery"', source: 'WHO (December 2025)' },
    { finding: "World's second-fastest vaccination campaign", source: 'Global ranking' },
    { finding: 'UAE accounted for 80% of international humanitarian response', source: 'UAE Government' },
    { finding: 'Free vaccination for all citizens and residents', source: 'UAE Government' },
    { finding: 'Lower depression/anxiety than other countries during pandemic', source: 'MDPI Study' },
    { finding: 'Mental health relief from gradual easing of restrictions', source: 'YouGov Survey' },
  ],
  negative: [
    { finding: 'Migrant workers in overcrowded dormitory conditions', source: 'Amnesty International' },
    { finding: 'Human rights concerns for migrant worker protection', source: 'Human Rights Watch' },
    { finding: 'Mental health impact on >50% of residents', source: 'YouGov Survey' },
    { finding: 'Significant impact on retail, hospitality, tourism', source: 'Research Papers' },
    { finding: 'Food poisoning surge in summer', source: 'Gulf News' },
  ],
  neutral: [
    { finding: 'MERS case under investigation', source: 'CIDRAP' },
    { finding: 'Dengue surge following unprecedented rainfall', source: 'Harvard' },
    { finding: 'WHO recommended no travel/trade restrictions for MERS', source: 'WHO' },
  ],
}

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export const relevanceAssessment = {
  critical: [
    { topic: 'COVID-19 Pandemic', justification: 'First Middle Eastern country to report cases; major economic and social impact' },
    { topic: 'Vaccination Campaign', justification: 'First Arab country to develop and produce COVID-19 vaccine' },
    { topic: 'MERS-CoV', justification: 'Ongoing surveillance required; zoonotic disease with骆驼 reservoir' },
    { topic: 'Healthcare Infrastructure', justification: 'WHO model for efficient healthcare delivery' },
    { topic: 'Humanitarian Leadership', justification: '80% of international response to struggling nations' },
  ],
  moderate: [
    { topic: 'Dengue Outbreak', justification: 'Climate-related health threat; vector control measures' },
    { topic: 'Food Safety', justification: 'Tourism-driven economy; summer heat challenges' },
    { topic: 'Migrant Worker Health', justification: 'Significant population segment; labor market dependency' },
    { topic: 'Mental Health', justification: 'Post-pandemic recovery; workforce wellbeing' },
  ],
  emerging: [
    { topic: 'Mpox Clade Ib', justification: 'First reported case Feb 2025; ongoing monitoring' },
    { topic: 'Climate-Health Nexus', justification: 'Dengue surge linked to climate change; "double whammy" noted' },
  ],
}

// ============================================================================
// DATA SOURCES
// ============================================================================

export const dataSources = [
  { id: 1, name: 'Wikipedia - COVID-19 pandemic in the United Arab Emirates', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_United_Arab_Emirates' },
  { id: 2, name: 'UAE Government Portal (u.ae)', type: 'Government', url: 'https://u.ae/' },
  { id: 3, name: 'WHO Disease Outbreak News (July 2023)', type: 'International Organization', url: 'https://www.who.int/' },
  { id: 4, name: 'PMC/NIH Research Articles', type: 'Academic', url: 'https://pmc.ncbi.nlm.nih.gov/' },
  { id: 5, name: 'Human Rights Watch', type: 'NGO', url: 'https://www.hrw.org/' },
  { id: 6, name: 'Amnesty International', type: 'NGO', url: 'https://www.amnesty.org/' },
  { id: 7, name: 'CIDRAP', type: 'Academic', url: 'https://www.cidrap.umn.edu/' },
  { id: 8, name: 'Emirates Health Services (ehs.gov.ae)', type: 'Government', url: 'https://www.ehs.gov.ae/' },
  { id: 9, name: 'Harvard T.H. Chan School of Public Health', type: 'Academic', url: 'https://www.hsph.harvard.edu/' },
  { id: 10, name: 'The National (UAE)', type: 'News Media', url: 'https://www.thenationalnews.com/' },
  { id: 11, name: 'Gulf News', type: 'News Media', url: 'https://gulfnews.com/' },
  { id: 12, name: 'YouGov Survey', type: 'Research', url: 'https://www.yougov.com/' },
  { id: 13, name: 'Johns Hopkins University', type: 'Academic', url: 'https://www.jhu.edu/' },
  { id: 14, name: 'Worldometer', type: 'Statistics', url: 'https://www.worldometers.info/' },
  { id: 15, name: 'Trading Economics', type: 'Statistics', url: 'https://tradingeconomics.com/' },
  { id: 16, name: 'Henley & Partners', type: 'Research', url: 'https://www.henleyglobal.com/' },
  { id: 17, name: 'Gulf Business', type: 'News Media', url: 'https://gulfbusiness.com/' },
  { id: 18, name: 'Bahrain Food Monitor', type: 'News Media', url: 'https://bahrainflash.com/' },
  { id: 19, name: 'Alhosn UAE Official Page', type: 'Government', url: 'https://alhosnuae.com/' },
  { id: 20, name: 'UAE Embassy', type: 'Government', url: 'https://www.mofa.gov.ae/' },
]

// ============================================================================
// RISK INDICATORS
// ============================================================================

export const riskIndicators = [
  { risk: 'Vector-Borne Disease (Post-Flooding)', level: 'Low', trend: 'Controlled' },
  { risk: 'Mpox Transmission', level: 'Monitor', trend: 'New' },
  { risk: 'Food Safety (Summer)', level: 'Moderate', trend: 'Seasonal' },
  { risk: 'Migrant Worker Health', level: 'Moderate', trend: 'Ongoing' },
]

// ============================================================================
// RESPONSE CAPACITY INDICATORS
// ============================================================================

export const responseCapacity = {
  emergencyPreparednessRanking: '1st globally',
  vaccinationInfrastructure: '120+ locations',
  digitalHealthTools: '6+ apps deployed',
  fieldHospitalCapacity: '6 nations served',
  medicalAidLogistics: '196 flights',
}

// ============================================================================
// MAIN PUBLIC HEALTH DATA OBJECT
// ============================================================================

export const publicHealthData = {
  id: 'crisis-4-9',
  type: 'public-health' as const,
  name: 'UAE Public Health Crisis',
  severity: 3,
  phoenixStage: 'recovery' as PhoenixStage,
  alertLevel: 'GREEN',
  detectedDate: '2020-01-29',
  lastUpdated: '2026-04-27',
  affectedEntities: ['UAE', 'GCC', 'Global'],
  timeline: [
    { date: '2020-01-29', stage: 'detection' as const, description: 'First COVID-19 case reported - First Middle Eastern country to report COVID-19 (73-year-old Chinese woman)' },
    { date: '2020-03-20', stage: 'containment' as const, description: 'First deaths reported - UAE reported first COVID-19 deaths' },
    { date: '2020-03-26', stage: 'containment' as const, description: 'Night curfew imposed - 8pm-6am curfew began as part of National Sterilization Program' },
    { date: '2020-04-04', stage: 'containment' as const, description: 'Dubai 24-hour curfew - Full lockdown imposed in Dubai' },
    { date: '2020-03-31', stage: 'containment' as const, description: 'Al Ras area lockdown - Dubai\'s Al Ras district placed under strict lockdown' },
    { date: '2020-03-08', stage: 'detection' as const, description: 'School closures announced - Educational institutions closed nationwide' },
    { date: '2020-12', stage: 'recovery' as const, description: 'Sinopharm vaccine approved - First COVID-19 vaccine approved in UAE' },
    { date: '2020-12', stage: 'recovery' as const, description: 'Vaccination campaign launched - World\'s second-fastest vaccination campaign began' },
    { date: '2021', stage: 'recovery' as const, description: 'Hayat-Vax launched - First Arab-made COVID-19 vaccine produced through G42-Sinopharm partnership' },
    { date: '2023-05-24', stage: 'resolution' as const, description: 'COVID-19 statistics stabilized - 1,067,030 total cases, 2,349 deaths (0.22% CFR)' },
    { date: '2024-04', stage: 'detection' as const, description: 'Dengue outbreak - Surge following heaviest-ever recorded rainfall in UAE' },
    { date: '2025-02', stage: 'detection' as const, description: 'First clade Ib mpox case - First case of new mpox variant reported to WHO' },
    { date: '2025-H1', stage: 'detection' as const, description: 'Food poisoning surge - 800+ cases in Dubai, 200+ Salmonella confirmed' },
  ],
  keyFindings: [
    { finding: 'COVID-19 cases', metric: '1,067,030', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'COVID-19 deaths', metric: '2,349 (0.22% CFR)', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Recovery rate (Dec 2020)', metric: '~89%', source: 'PMC Research', tier: 1 as TierLevel },
    { finding: 'Tests per 100,000 population', metric: '209,734.9', source: 'PMC Research', tier: 1 as TierLevel },
    { finding: 'First Middle Eastern country to report COVID-19', metric: '29 Jan 2020', source: 'Wikipedia', tier: 0 as TierLevel },
    { finding: "World's second-fastest vaccination campaign", metric: '2nd globally', source: 'Wikipedia', tier: 0 as TierLevel },
    { finding: 'At least one dose vaccinated', metric: '82.82%', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Fully vaccinated', metric: '73.21%', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Hayat-Vax: First COVID vaccine produced in Arab world', metric: '200M doses/year capacity', source: 'Wikipedia', tier: 0 as TierLevel },
    { finding: 'AED 100B economic stimulus committed', metric: '100 billion AED', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Medical aid shipped worldwide', metric: '2,154 tons to 135 countries', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'MERS-CoV UAE cases since 2013', metric: '94 cases, 12 deaths (13% CFR)', source: 'WHO/CIDRAP', tier: 0 as TierLevel },
    { finding: 'Mpox clade Ib first case', metric: 'Feb 2025', source: 'WHO', tier: 0 as TierLevel },
    { finding: 'Dengue outbreak (Apr 2024)', metric: 'Climate-linked surge after flooding', source: 'Harvard', tier: 1 as TierLevel },
    { finding: 'Food poisoning cases Dubai H1 2025', metric: '800+ cases, 200+ Salmonella', source: 'Gulf News', tier: 1 as TierLevel },
    { finding: 'WHO described UAE as leading model for healthcare', metric: 'Dec 2025 statement', source: 'WHO/Hakan Balkhy', tier: 0 as TierLevel },
    { finding: 'Mental health impacted residents', metric: '>50%', source: 'YouGov Survey Apr 2022', tier: 1 as TierLevel },
    { finding: 'Humanitarian response share', metric: '80% of international response', source: 'UAE Government', tier: 0 as TierLevel },
  ] as unknown as KeyFinding[],
  stakeholderImpacts: [
    { stakeholder: 'General Population', impact: 'COVID deaths, mental health impacts (>50% affected), 1,067,030 cases', sentiment: 'Resilient' },
    { stakeholder: 'Migrant Workers', impact: 'Overcrowded dormitories, 73.5% felt nervous, 62% felt depressed (Indian workers study)', sentiment: 'Negative' },
    { stakeholder: 'Healthcare System', impact: 'Capacity strain during peaks, then recovery. 120+ vaccination locations established', sentiment: 'Strained then Resilient' },
    { stakeholder: 'International Community', impact: '2,154 tons medical aid to 135 countries, 6 field hospitals in nations', sentiment: 'Grateful' },
    { stakeholder: 'Economy', impact: 'AED 100B stimulus, TESS $70B, severe impact on retail/hospitality/tourism', sentiment: 'Recovering' },
    { stakeholder: 'Digital Health', impact: 'Al Hosn app, 6+ digital health tools deployed, TraceCovid, DOH RemoteCare', sentiment: 'Positive' },
  ] as LocalStakeholderImpact[],
  responseMetrics: {
    containmentTime: '3 months (initial COVID lockdown)',
    recoveryTime: '2+ years',
    casualties: 2349,
    economicLoss: 100000000000,
    affectedPopulation: 1067030,
    fundingAllocated: 100000000000,
  } as LocalResponseMetrics,
  sources: [
    { source: 'WHO - UAE Health Data', tier: 0, credibility: 'Very High', url: 'https://who.int' },
    { source: 'UAE Government Portal', tier: 0, credibility: 'Very High', url: 'https://u.ae' },
    { source: 'Wikipedia - COVID-19 pandemic in UAE', tier: 1, credibility: 'High', url: 'https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_United_Arab_Emirates' },
    { source: 'PMC/NIH Research Articles', tier: 1, credibility: 'High', url: 'https://pmc.ncbi.nlm.nih.gov/' },
    { source: 'Human Rights Watch', tier: 2, credibility: 'High', url: 'https://www.hrw.org/' },
    { source: 'Amnesty International', tier: 2, credibility: 'High', url: 'https://www.amnesty.org/' },
    { source: 'CIDRAP', tier: 1, credibility: 'High', url: 'https://www.cidrap.umn.edu/' },
    { source: 'Emirates Health Services', tier: 0, credibility: 'Very High', url: 'https://www.ehs.gov.ae/' },
    { source: 'Harvard T.H. Chan School of Public Health', tier: 1, credibility: 'High', url: 'https://www.hsph.harvard.edu/' },
    { source: 'Gulf News', tier: 1, credibility: 'High', url: 'https://gulfnews.com/' },
    { source: 'YouGov Survey', tier: 1, credibility: 'High', url: 'https://www.yougov.com/' },
    { source: 'Henley & Partners', tier: 2, credibility: 'Medium-High', url: 'https://www.henleyglobal.com/' },
  ] as unknown as SourceReference[],
  recommendations: [
    'Continue monitoring mpox clade Ib situation',
    'Maintain dengue vector control measures',
    'Ensure food safety standards during summer months',
  ],
} as unknown as CrisisEvent

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  publicHealthData,
  executionMetadata,
  keyMetrics,
  covid19Timeline,
  lockdownDetails,
  vaccinesAvailable,
  sinopharmDetails,
  vaccinationStats,
  vaccinationRankings,
  alHosnApp,
  digitalHealthTools,
  MersCov,
  mpoxData,
  dengueOutbreak,
  vectorControl,
  foodPoisoningStats,
  mentalHealthImpact,
  migrantWorkerHealth,
  economicImpactStimulus,
  humanitarianResponse,
  healthSystemPreparedness,
  internationalHealthCooperation,
  entityRegistry,
  sentimentAnalysis,
  relevanceAssessment,
  dataSources,
  riskIndicators,
  responseCapacity,
}
