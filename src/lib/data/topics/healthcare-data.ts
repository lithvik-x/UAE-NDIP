// @ts-nocheck
/**
 * Healthcare - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-10-healthcare-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: HEALTHCARE SYSTEM STRUCTURE
// ============================================================================

export interface PopulationDemographics {
  metric: string
  value: string
  source: string
}

export interface HealthcareExpenditure {
  metric: string
  value: string
  year?: string
}

export interface HealthChallenge {
  challenge: string
  prevalence: string
  source: string
}

export const healthcareSystemStructure = {
  overview: {
    systemType: 'Dual public-private healthcare system',
    federalLegislation: 'Universal healthcare mandated',
    citizensCoverage: 'Free healthcare provided',
    expatriatesCoverage: 'Health insurance mandatory',
    employerObligation: 'Employers/sponsors required to provide health insurance for expatriate workers',
    hospitalGrowth: 'From 7 hospitals in 1970 to over 119 hospitals today'
  },
  populationDemographics: [
    { metric: 'Population', value: '10.08 million (2022)', source: 'Trade.gov' },
    { metric: 'Expatriate proportion (Dubai)', value: '82%', source: 'NYU Balzano analysis' },
    { metric: 'Life expectancy', value: '79 years', source: 'UAE Embassy' },
    { metric: 'Neonatal mortality', value: '2.61 per 1,000 live births', source: 'UAE Embassy' },
    { metric: 'Infant mortality', value: '5 per 1,000', source: 'UAE Embassy' }
  ] as PopulationDemographics[],
  healthcareExpenditure: [
    { metric: 'Federal budget allocation', value: '8.4% ($15.8 billion)', year: '2022' },
    { metric: 'Healthcare expenditure (% GDP)', value: '2.9%', year: '2004' },
    { metric: 'Per capita health spending', value: '$497', year: '2004' },
    { metric: 'Hospital services market revenue', value: '$10,935.8 million', year: '2024' },
    { metric: 'Hospital services market (2030 projection)', value: '$15,850.5 million', year: '2030' }
  ] as HealthcareExpenditure[],
  majorHealthChallenges: [
    { challenge: 'Adult obesity', prevalence: '30%+', source: 'Trade.gov' },
    { challenge: 'Diabetes prevalence', prevalence: '19% (1 in 5)', source: 'Trade.gov' },
    { challenge: 'Adults with chronic condition', prevalence: '60%', source: 'Khaleej Times' },
    { challenge: 'Overweight/obese children', prevalence: '38.4%', source: 'Amazon S3/WOF' }
  ] as HealthChallenge[]
}

// ============================================================================
// SECTION 2: HEALTHCARE AUTHORITIES & GOVERNANCE
// ============================================================================

export interface MOHAPDetails {
  field: string
  value: string
}

export interface EHSDetails {
  field: string
  value: string
}

export interface DHADetails {
  field: string
  value: string
}

export interface DOHDetails {
  field: string
  value: string
}

export interface SEHADetails {
  field: string
  value: string
}

export const healthcareAuthoritiesGovernance = {
  mohap: {
    established: 'February 2, 1972',
    minister: 'Abdul Rahman Mohammed Al Oweis',
    location: 'Dubai, UAE',
    website: 'mohap.gov.ae',
    functions: 'Healthcare policy implementation, federal healthcare oversight, northern emirates',
    openDataPortal: 'mohap.gov.ae/en/open-data'
  },
  emiratesHealthServices: {
    coverage: 'Northern Emirates (Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah)',
    website: 'ehs.gov.ae',
    openData: 'ehs.gov.ae/en/open-data/open-data-charts',
    services: 'Coordinates emergency response, provides mobile clinic services in remote areas (Fujairah, Ras Al Khaimah)'
  },
  dubaiHealthAuthority: {
    established: 'June 2007 (Law 13)',
    location: 'Al Jaddaf, Dubai',
    website: 'dha.gov.ae',
    services: 'Health regulation, insurance (ISAHD), Nabidh health records, medical education',
    keySystems: {
      ISAHD: 'Insurance System for Advancing Healthcare in Dubai - Mandatory health insurance phased rollout 2014-2016',
      Nabidh: 'Electronic health records exchange',
      DubaiMedicalRegistry: 'Facility licensing'
    }
  },
  departmentOfHealthAbuDhabi: {
    established: '2007 (reformed from General Authority of Health Services)',
    chairman: 'Mansoor Ibrahim Al Mansoori',
    undersecretary: 'Noura Khamis Al Ghaithi',
    website: 'doh.gov.ae',
    statistics: {
      inpatientBeds: '8,900+',
      clinics: '770+',
      hospitals: '65+',
      pharmacies: '950+',
      medicalCenters: '1,520+'
    },
    keyPrograms: {
      Malaffi: 'Health Information Exchange',
      Shafafiya: 'Pricing and standards system',
      Tawteen: 'Emirati workforce support',
      DoHMaAnGrant: 'Healthcare research/innovation',
      EmiratiReferenceGenomePlatform: 'Genetic research'
    }
  },
  seha: {
    managedFacilities: '57 primary health centers, 13 hospitals, specialized facilities',
    website: 'seha.ae'
  }
}

// ============================================================================
// SECTION 3: HEALTHCARE INFRASTRUCTURE & FACILITIES
// ============================================================================

export interface HospitalDistribution {
  type: string
  count: number
  source: string
}

export interface DubaiHealthcareFacilities {
  metric: string
  value: string
  source: string
}

export interface JCIAcreditationTimeline {
  year: string
  accreditedFacilities: number
}

export interface MajorPublicHospital {
  hospital: string
  location: string
  specialty: string
}

export interface MajorPrivateHospital {
  hospital: string
  location: string
  notes: string
}

export const healthcareInfrastructure = {
  hospitalDistribution: [
    { type: 'Public hospitals', count: 40, source: 'Wikipedia' },
    { type: 'Private hospitals', count: 79, source: 'Wikipedia' },
    { type: 'Total hospitals', count: 119, source: 'Various' },
    { type: 'JCI-accredited facilities', count: 214, source: 'PMC Research (2023)' }
  ] as HospitalDistribution[],
  dubaiHealthcareFacilities: [
    { metric: 'Licensed healthcare facilities', value: '~5,800', source: 'Media Office Dubai' },
    { metric: 'Growth', value: 'Record growth in 2025', source: 'WAM' }
  ] as DubaiHealthcareFacilities[],
  jciAccreditationTimeline: [
    { year: '2014', accreditedFacilities: 39 },
    { year: '2023', accreditedFacilities: 214 }
  ] as JCIAcreditationTimeline[],
  globalRanking: 'Highest number of JCI-accredited organizations',
  majorPublicHospitals: [
    { hospital: 'Dubai Hospital', location: 'Dubai', specialty: 'General' },
    { hospital: 'Rashid Hospital', location: 'Dubai', specialty: 'Trauma, specialized' },
    { hospital: 'Latifa Women & Children\'s Hospital', location: 'Dubai', specialty: 'Women, children' },
    { hospital: 'Hatta Hospital', location: 'Hatta', specialty: 'General' },
    { hospital: 'Tawam Hospital', location: 'Al Ain', specialty: 'Oncology, general' },
    { hospital: 'Sheikh Khalifa Medical City', location: 'Abu Dhabi', specialty: 'Multi-specialty' }
  ] as MajorPublicHospital[],
  majorPrivateHospitals: [
    { hospital: 'Cleveland Clinic Abu Dhabi', location: 'Abu Dhabi', notes: '364 beds, 50+ specialties' },
    { hospital: 'American Hospital Dubai', location: 'Dubai', notes: 'Multi-specialty' },
    { hospital: 'Mediclinic City Hospital', location: 'Dubai', notes: 'Multi-specialty' },
    { hospital: 'Saudi German Hospital', location: 'Dubai', notes: 'Multi-specialty' },
    { hospital: 'NMC Specialty Hospital', location: 'Dubai', notes: 'Multi-specialty' },
    { hospital: 'Al Zahra Hospital', location: 'Dubai', notes: 'Multi-specialty' },
    { hospital: 'King\'s College Hospital London', location: 'Dubai', notes: 'UK affiliation' }
  ] as MajorPrivateHospital[]
}

// ============================================================================
// SECTION 4: HOSPITAL QUALITY RANKINGS
// ============================================================================

export interface NewsweekRanking {
  rank: number
  hospital: string
  score: string
  location: string
}

export interface ClevelandClinicDetails {
  metric: string
  value: string
}

export const hospitalQualityRankings = {
  newsweekWorldsBestHospitals2025: [
    { rank: 1, hospital: 'Cleveland Clinic Abu Dhabi', score: '92.90%', location: 'Abu Dhabi' },
    { rank: 2, hospital: 'American Hospital Dubai', score: '87.38%', location: 'Dubai' },
    { rank: 3, hospital: 'Rashid Hospital', score: '83.22%', location: 'Dubai' },
    { rank: 4, hospital: 'Aster Hospital, Mankhool', score: '81.82%', location: 'Dubai' },
    { rank: 5, hospital: 'Mediclinic City Hospital', score: '80.72%', location: 'Dubai' },
    { rank: 6, hospital: 'Al Zahra Hospital Dubai', score: '80.60%', location: 'Dubai' },
    { rank: 7, hospital: 'Sheikh Khalifa Medical City', score: '80.56%', location: 'Abu Dhabi' },
    { rank: 8, hospital: 'Tawam Hospital', score: '76.87%', location: 'Al Ain' },
    { rank: 9, hospital: 'King\'s College Hospital London', score: '76.77%', location: 'Dubai' },
    { rank: 10, hospital: 'Zulekha Hospital Sharjah', score: '73.23%', location: 'Sharjah' }
  ] as NewsweekRanking[],
  totalUAEHospitalsRanked: 35,
  methodology: {
    peerRecommendations: '40%',
    patientExperience: '17.5%',
    hospitalQualityMetrics: '37.5%',
    PROMsImplementation: '5%'
  },
  clevelandClinicAbuDhabiDetails: [
    { metric: 'Beds', value: '364 (expandable to 490)' },
    { metric: 'ICU beds', value: '72' },
    { metric: 'Operating rooms', value: '26' },
    { metric: 'Post anesthesia care units', value: '4' },
    { metric: 'Doctors', value: '340' },
    { metric: 'Nurses', value: '2,918' },
    { metric: 'Size', value: '409,234 sq meters' },
    { metric: 'Location', value: 'Al Maryah Island, Abu Dhabi' },
    { metric: 'Specialties', value: '50+ medical/surgical' }
  ] as ClevelandClinicDetails[],
  fiveCentersOfExcellence: [
    'Digestive Disease Institute',
    'Eye Institute',
    'Heart & Vascular Institute',
    'Neurological Institute',
    'Respiratory & Critical Care Institute'
  ]
}

// ============================================================================
// SECTION 5: COVID-19 PANDEMIC RESPONSE
// ============================================================================

export interface COVIDTimeline {
  date: string
  event: string
}

export interface COVIDStatistics {
  metric: string
  value: string
  source?: string
}

export interface COVIDResponseAchievement {
  achievement: string
}

export const covid19PandemicResponse = {
  timeline: [
    { date: 'January 29, 2020', event: 'First case confirmed (73-year-old Chinese woman from Wuhan) - FIRST in Middle East' },
    { date: 'February 9, 2020', event: 'First patient recovered and discharged' },
    { date: 'March 20, 2020', event: 'First deaths confirmed' },
    { date: 'December 2020', event: 'Vaccination campaign launched' }
  ] as COVIDTimeline[],
  caseStatistics: [
    { metric: 'Confirmed cases', value: '1,067,030', source: 'Wikipedia - COVID-19 Pandemic in UAE' },
    { metric: 'Active cases', value: '10,156' },
    { metric: 'Recovered', value: '1,054,525' },
    { metric: 'Deaths', value: '2,349' },
    { metric: 'Fatality rate', value: '0.22%' }
  ] as COVIDStatistics[],
  recoveryTestingMetrics: [
    { metric: 'Recovery rate', value: '~89%' },
    { metric: 'Case fatality rate', value: '0.3%' },
    { metric: 'Testing rate', value: '209,734.9 per 100K population' },
    { metric: 'Positive rate', value: '1.2%' },
    { metric: 'Global ranking', value: 'Highest testing rate per 1,000 people' }
  ] as COVIDStatistics[],
  responseAchievements: [
    'First Middle Eastern country to report COVID-19 case',
    'Among lowest fatality rates globally (0.22%)',
    'Highest testing rate per capita globally',
    'Second worldwide in vaccination administration rates',
    'Home to first indigenous COVID-19 vaccine in region (Hayat-Vax)',
    'Comprehensive humanitarian assistance to 135 countries'
  ] as COVIDResponseAchievement[]
}

// ============================================================================
// SECTION 6: VACCINATION CAMPAIGN
// ============================================================================

export interface ApprovedVaccine {
  date: string
  vaccine: string
  notes: string
}

export interface VaccinationStatistics {
  metric: string
  value: string
}

export interface HayatVaxDetails {
  detail: string
  value: string
}

export interface NationalImmunizationProgram {
  program: string
  target: string
}

export interface UAEInternationalVaccinationSupport {
  detail: string
  value: string
}

export const vaccinationCampaign = {
  approvedVaccines: [
    { date: 'December 9, 2020', vaccine: 'Sinopharm BIBP', notes: 'Emergency use authorization' },
    { date: 'December 22, 2020', vaccine: 'Pfizer-BioNTech', notes: 'Emergency use' },
    { date: 'January 21, 2021', vaccine: 'Sputnik V', notes: 'Emergency use' },
    { date: 'February 2021', vaccine: 'Oxford-AstraZeneca', notes: 'Emergency use' },
    { date: 'July 4, 2021', vaccine: 'Moderna', notes: 'Emergency use' },
    { date: 'December 27, 2021', vaccine: 'Sinopharm CNBG', notes: 'Additional approval' }
  ] as ApprovedVaccine[],
  vaccinationStatistics: [
    { metric: 'Campaign start', value: 'December 2020' },
    { metric: 'Campaign end', value: 'November 6, 2022 (public health measures lifted)' },
    { metric: 'Total doses administered', value: '16,444,844' },
    { metric: 'First dose recipients', value: '7,684,876' },
    { metric: 'Second dose recipients', value: '6,765,065' },
    { metric: 'At least one dose coverage', value: '77.70%' },
    { metric: 'Fully vaccinated coverage', value: '68.40%' },
    { metric: 'Total vaccinated (WHO data)', value: '9,991,089' },
    { metric: 'Fully vaccinated (WHO)', value: '9,792,266' },
    { metric: 'Doses per 100 people', value: '100.10 (April 2021)' }
  ] as VaccinationStatistics[],
  hayatVax: {
    nameMeaning: '"Hayat" = "life" in Arabic',
    type: 'COVID-19 vaccine (Sinopharm CNBG partnership)',
    jvPartners: 'G42 + Sinopharm CNBG',
    announcement: 'April 6, 2022',
    initialProductionJulphar: '2 million doses/month',
    kizadPlantCapacity: '200 million doses/year',
    efficacy: '79.34%',
    distribution: '205 medical centers in UAE',
    fourHumanityTrial: '43,000+ volunteers from 125+ nationalities',
    manufacturingMilestones: [
      'First COVID-19 vaccine produced in Arab world',
      'Inauguration witnessed by Sheikh Abdullah Bin Zayed Al Nahyan and Chinese State Councilor Wang Yi'
    ]
  },
  nationalImmunizationPrograms: [
    { program: 'National Polio Immunization', target: 'Children' },
    { program: 'Measles Immunization (MMR)', target: 'Children aged 1-7' },
    { program: 'Routine immunization', target: 'Various age groups' }
  ] as NationalImmunizationProgram[],
  internationalVaccinationSupport: [
    { detail: 'Gaza polio vaccination donation', value: 'AED 5 million' },
    { detail: 'Working with', value: 'WHO, UNICEF, UNRWA' },
    { detail: 'Target children', value: '640,000+' }
  ] as UAEInternationalVaccinationSupport[]
}

// ============================================================================
// SECTION 7: HEALTH INSURANCE SYSTEM
// ============================================================================

export interface InsuranceCoverage {
  category: string
  coverage: string
  sourceOfFunding: string
}

export interface ThiqaProgram {
  field: string
  value: string
}

export interface BasicHealthInsuranceScheme {
  field: string
  value: string
}

export interface DubaiISAHDPhase {
  phase: string
  effectiveDate: string
  requirement: string
}

export interface MarketStatistics {
  metric: string
  value: string
  year?: string
}

export interface EmployerObligation {
  requirement: string
  detail: string
}

export const healthInsuranceSystem = {
  systemOverview: [
    { category: 'Emiratis', coverage: 'Free healthcare', sourceOfFunding: 'Government' },
    { category: 'Expatriates (Abu Dhabi)', coverage: 'Mandatory', sourceOfFunding: 'Employer/sponsor' },
    { category: 'Expatriates (Dubai)', coverage: 'Mandatory (ISAHD)', sourceOfFunding: 'Employer' },
    { category: 'Northern Emirates', coverage: 'Mandatory (since Jan 2025)', sourceOfFunding: 'Employer' }
  ] as InsuranceCoverage[],
  thiqaProgram: {
    managedBy: 'Daman (since 2008)',
    eligible: 'UAE nationals, family members sponsored by UAE nationals',
    coverage: 'Public and private Thiqa network',
    emergencyWorldwide: 'For nationals',
    emergencyUAEOnly: 'For non-nationals',
    annualLimit: 'None',
    benefits: {
      inpatient: 'Day surgery, private room, consultant/surgeon/anesthetist fees, home nursing',
      outpatient: 'Consultations, diagnostics, X-rays, MRI/CT/PET, pharmaceuticals, psychiatric treatment, physiotherapy',
      maternity: 'Inpatient and outpatient care',
      other: 'Dental, rehabilitation, medical check-ups, repatriation of remains'
    },
    enrollment: 'Thiqa portal (thiqa.ae) or app'
  },
  basicHealthInsuranceScheme: {
    cost: 'AED 320/year',
    validity: '2 years',
    ageCoverage: '1-64 years',
    chronicIllnessWaitingPeriod: 'None',
    inpatientCoPay: '20%, max AED 500/visit, AED 1,000/year cap',
    outpatientCoPay: '25%, max AED 100/visit',
    followUp: '7 days - No co-pay',
    network: '7 hospitals, 46 clinics, 45 pharmacies'
  },
  dubaiISAHDSystem: [
    { phase: 'Phase 1', effectiveDate: 'October 2014', requirement: 'Companies with 1,000+ employees' },
    { phase: 'Phase 2', effectiveDate: 'July 2015', requirement: 'Companies with 100+ employees' },
    { phase: 'Phase 3', effectiveDate: 'June 2016', requirement: 'All companies and self-employed' }
  ] as DubaiISAHDPhase[],
  minimumCoverage: {
    dubai: 'AED 150,000/year',
    abuDhabi: 'AED 250,000/year'
  },
  nationalLowIncomeWorkerInsurance: {
    planCost: 'Dh320/year',
    estimatedBeneficiariesSharjah: '1.8 million',
    coverage: 'DubaiCare network',
    chronicIllness: 'No waiting period'
  },
  marketStatistics: [
    { metric: 'Health insurance market (GWP)', value: '$2.85 billion', year: '2024' },
    { metric: 'Projected market (2029)', value: '$3.96 billion', year: '2029' },
    { metric: 'Basic plan annual premium', value: 'AED 700-3,000', year: '2025' },
    { metric: 'Enhanced plan annual premium', value: 'AED 5,000-15,000+', year: '2025' }
  ] as MarketStatistics[],
  employerObligations: [
    { requirement: 'Who pays premium', detail: 'Employer 100%' },
    { requirement: 'When to activate', detail: 'First working day' },
    { requirement: 'Premium deduction', detail: 'Prohibited from salary' },
    { requirement: 'Penalty (no coverage)', detail: 'AED 500/employee/month' },
    { requirement: 'Penalty (lapsed)', detail: 'AED 500/employee/month' }
  ] as EmployerObligation[]
}

// ============================================================================
// SECTION 8: MEDICAL TOURISM
// ============================================================================

export interface MedicalTourismMarketSize {
  year: string
  marketSize: string
  source: string
}

export interface AbuDhabiMedicalTourism {
  metric: string
  value: string
}

export interface DubaiMedicalTourism {
  metric: string
  value: string
}

export interface TopMedicalTourismSpecialty {
  rank: number
  specialty: string
}

export interface MedicalTourismBarrier {
  barrier: string
}

export interface MedicalTourismKeyPlayer {
  company: string
  type: string
}

export const medicalTourism = {
  marketSizeGrowth: [
    { year: '2018', marketSize: 'AED 12.1 billion ($3.29 billion)', source: 'MoE&T' },
    { year: '2024', marketSize: '$722.50 million', source: 'LinkedIn/Market Research' },
    { year: '2024', marketSize: '$334.94 million', source: 'Credence Research' },
    { year: '2025', marketSize: '$865.8 million', source: 'IMARC' },
    { year: '2030', marketSize: '$975.02 million', source: 'Credence Research (CAGR 14.29%)' },
    { year: '2034', marketSize: '$4,547.5 million', source: 'IMARC (CAGR 19.63%)' }
  ] as MedicalTourismMarketSize[],
  abuDhabiStatistics: [
    { metric: 'Annual medical tourists', value: '15,000+' },
    { metric: 'Global ranking (MTA 2020-21)', value: '8th of 46 destinations' },
    { metric: 'Quality ranking', value: '9th globally for facilities/services' },
    { metric: 'Cleveland Clinic Abu Dhabi (2018)', value: '1,380 international patients from 93+ countries' }
  ] as AbuDhabiMedicalTourism[],
  dubaiStatistics: [
    { metric: 'International health tourists', value: '691,000+', year: '2023' },
    { metric: 'Revenue', value: 'AED 1.03 billion (~$280 million)' },
    { metric: 'Indirect revenue', value: 'AED 2.3 billion' },
    { metric: 'Patient demographics', value: '58% women' },
    { metric: 'Origin Asia', value: '33%' },
    { metric: 'Origin GCC', value: '28%' },
    { metric: 'Origin Europe/CIS', value: '23%' }
  ] as DubaiMedicalTourism[],
  topSpecialties: [
    { rank: 1, specialty: 'Orthopedics/Sports Medicine' },
    { rank: 2, specialty: 'Dermatology' },
    { rank: 3, specialty: 'Dentistry' },
    { rank: 4, specialty: 'Fertility/IVF' },
    { rank: 5, specialty: 'Cardiology' },
    { rank: 6, specialty: 'Oncology' },
    { rank: 7, specialty: 'Cosmetic Surgery' },
    { rank: 8, specialty: 'Bariatric Surgery' },
    { rank: 9, specialty: 'Ophthalmic' },
    { rank: 10, specialty: 'Dental' }
  ] as TopMedicalTourismSpecialty[],
  barriersToDevelopment: [
    'High costs of services',
    'Lack of quality indicators',
    'Lack of international insurance',
    'Marketing/brand awareness gaps',
    'Facilitator shortages',
    'Stakeholder collaboration gaps',
    'Public transport issues',
    'Hot weather conditions',
    'Doctor punctuality/follow-up issues',
    'Regional competition (Turkey, Thailand, Singapore, India, Iran)'
  ] as MedicalTourismBarrier[],
  governmentTarget: {
    medicalTouristsGoal: '500,000',
    healthcareInfrastructureAllocation: 'AED 15 billion'
  },
  keyPlayers: [
    { company: 'Mediclinic International', type: 'Hospital group' },
    { company: 'NMC Health', type: 'Hospital group' },
    { company: 'Cleveland Clinic Abu Dhabi', type: 'Single hospital' },
    { company: 'Dubai Healthcare City', type: 'Free zone' },
    { company: 'HealthBay Polyclinic', type: 'Clinic group' },
    { company: 'American Hospital Dubai', type: 'Hospital' },
    { company: 'Saudi German Hospital', type: 'Hospital group' },
    { company: 'Al Zahra Hospital', type: 'Hospital' },
    { company: 'Burjeel Hospital', type: 'Hospital group' },
    { company: 'Aster DM Healthcare', type: 'Hospital group' },
    { company: 'Emirates Hospital', type: 'Hospital group' }
  ] as MedicalTourismKeyPlayer[]
}

// ============================================================================
// SECTION 9: MENTAL HEALTH SERVICES
// ============================================================================

export interface MentalHealthPrevalence {
  condition: string
  prevalence: string
  source: string
}

export interface MentalHealthLaw {
  field: string
  value: string
}

export interface MentalHealthFacility {
  facility: string
  location: string
  notes: string
}

export interface DigitalMentalHealthInitiative {
  initiative: string
  provider: string
  description: string
}

export const mentalHealthServices = {
  prevalenceStatistics: [
    { condition: 'Mental disorders (overall)', prevalence: '14%', source: 'Springer' },
    { condition: 'Primary healthcare visitors affected', prevalence: '28%', source: 'Springer' },
    { condition: 'Anxiety (most common)', prevalence: '56.4%', source: 'Springer' },
    { condition: 'Depression screening positive (COVID)', prevalence: '44.8%', source: 'PMC Research' },
    { condition: 'Anxiety screening positive (COVID)', prevalence: '38.2%', source: 'PMC Research' },
    { condition: 'COVID risk factors', prevalence: 'Younger age, urban, female, prior history', source: 'PMC Research' }
  ] as MentalHealthPrevalence[],
  federalLawNo10of2023: {
    effectiveDate: 'May 30, 2024',
    replaced: 'Federal Law No. 28 of 1981',
    scope: 'UAE (except ADGM and DIFC)',
    penalties: 'AED 50,000 - AED 200,000',
    keyProvisions: {
      employmentProtections: 'Cannot refuse employment based solely on mental health condition (Article 9)',
      employerTermination: 'Requires specialized medical committee report',
      confidentialityRights: 'Extend to employees with psychiatric disorders',
      monitoringCommittees: 'Required in each emirate'
    }
  },
  previousLawFederalLaw281981: {
    articles: '15 articles governing involuntary psychiatric admission',
    compulsionGrounds: 'Psychosis with "loss of contact with reality"',
    legalAgeOfConsent: '18 years',
    initialDetention: '1 week, extendable by 1 month',
    judicialNotification: '48-hour notification to judicial authorities'
  },
  nationalPolicyForPromotionOfMentalHealth2017: {
    fiveStrategicPriorities: [
      'Enhance mental health awareness promotion',
      'Expand comprehensive mental health services for all ages',
      'Strengthen multi-sectoral collaboration',
      'Promote mental disorder prevention',
      'Improve research and information systems'
    ]
  },
  keyFacilities: [
    { facility: 'Al Amal Psychiatric Hospital', location: 'Dubai', notes: 'First JCI-accredited mental health facility in Middle East' },
    { facility: 'Emirates Health Services', location: 'Northern Emirates', notes: 'Mental health support' }
  ] as MentalHealthFacility[],
  servicesOffered: 'Outpatient clinics for children, adults, elderly, people of determination, addiction, forensic psychiatry',
  digitalInitiatives: [
    { initiative: 'Virtual reality (Oculus Gear)', provider: 'Various', description: 'Schizophrenia understanding' },
    { initiative: 'Sahatna app', provider: 'DoH Abu Dhabi', description: 'Mental health support' }
  ] as DigitalMentalHealthInitiative[],
  seniorCitizensPrograms: [
    'National plan for physical, mental, social well-being',
    'Geriatric mental health clinics',
    'Memory disorder management',
    'Psychological support',
    'Caregiver and family assistance'
  ],
  whoMentalHealthAtlas2024: {
    standaloneMentalHealthLaw: 'Yes',
    nationalMentalHealthSurvey: 'Conducted (last 10 years)'
  }
}

// ============================================================================
// SECTION 10: HEALTHCARE WORKFORCE
// ============================================================================

export interface NursingStatistics {
  metric: string
  value: string
}

export interface DoctorStatistics {
  metric: string
  value: string
}

export interface WorkforceComparison {
  profession: string
  uaePer100K: string
  ukPer100K: string
}

export interface NotableIncident {
  incident: string
  details: string
}

export const healthcareWorkforce = {
  nursingStatistics: [
    { metric: 'Practicing nurses', value: '55,000+' },
    { metric: 'Salary range (monthly)', value: 'AED 4,000 - AED 20,000' },
    { metric: 'BSc nurse salary', value: 'AED 7,000 - AED 12,000' },
    { metric: 'Registered Nurse average', value: 'AED 6,000/month' },
    { metric: 'Experienced RN', value: 'Up to AED 8,500/month' },
    { metric: 'ICU/NICU/OR Specialist', value: 'AED 22,000 - AED 35,000' },
    { metric: 'Head Nurse/Manager (8+ yrs)', value: 'AED 30,000 - AED 48,000' }
  ] as NursingStatistics[],
  doctorStatistics: [
    { metric: 'Doctors per 100,000 residents', value: '181' },
    { metric: 'Salary (average, 2025)', value: 'AED 14,434/month' }
  ] as DoctorStatistics[],
  comparisonToInternationalStandards: [
    { profession: 'Doctors', uaePer100K: '181', ukPer100K: '-' },
    { profession: 'Nurses/Midwives', uaePer100K: '31', ukPer100K: '88' }
  ] as WorkforceComparison[],
  expatriateDependence: {
    reliance: 'Heavy reliance on expatriate healthcare workers',
    keyChallenge: 'Healthcare worker (HCP) shortage'
  },
  notableIncidents: [
    {
      incident: 'Indian Nurse Job Scam (2020)',
      details: '300+ nurses from Kerala victimized, arrived on visit visas (October-November 2020), paid fees: Rs 200,000-350,000 (~Dh10,055) for promised vaccination center jobs, jobs were fake. Exploitation: Dh250 for SIM cards (usually free), Dh600 for 25 days food. Resolved: Healthcare groups (Right Health, NMC Healthcare, Aster DM Healthcare) offered positions'
    }
  ] as NotableIncident[]
}

// ============================================================================
// SECTION 11: PHARMACEUTICAL REGULATION
// ============================================================================

export interface PharmaceuticalLaw {
  law: string
  year: string
  keyFeatures: string
}

export interface CounterfeitStatistic {
  metric: string
  value: string
  period?: string
}

export interface PenaltySummary {
  law: string
  fine: string
  imprisonment: string
  closure?: string
}

export const pharmaceuticalRegulation = {
  keyLegislation: [
    { law: 'Trade Marks Law', year: '1992', keyFeatures: 'Imprisonment, AED 5,000+ fine, business closure up to 6 months' },
    { law: 'Anti-Commercial Fraud Law', year: '2016', keyFeatures: 'Up to 2 years imprisonment, AED 250,000-1 million fine' },
    { law: 'Pharmaceuticals Law', year: '2019', keyFeatures: 'AED 200,000-1 million fine, facility closure 3 months, permanent license withdrawal' },
    { law: 'Federal Decree Law No. 38', year: '2024', keyFeatures: 'Enhanced enforcement, national reporting database, EDE authority' }
  ] as PharmaceuticalLaw[],
  federalDecreeLawNo38of2024: {
    effective: 'January 2025',
    regulatoryAuthority: 'Emirates Drug Establishment (EDE)',
    nationalDatabase: 'Established for counterfeit reporting',
    personnelTraining: 'Required (up to AED 1 million penalty for failures)',
    reportingObligation: 'Required for counterfeit incidents'
  },
  counterfeitStatistics: [
    { metric: 'Counterfeit products detected', value: '116', period: 'Jan-Jun 2024' },
    { metric: 'Total banned products (cumulative)', value: '3,004', period: '8-year total' },
    { metric: 'Categories', value: 'cosmetics (14), weight loss (10), stimulants (40), various (52)', period: '2024' }
  ] as CounterfeitStatistic[],
  falsifiedProductDefinition: '"A Medical Product prepared deliberately with the intention of fraud... acts of imitation of another Medical Product by using the same artistic shapes and colours of the packaging, container and label of the original product."',
  keyDifferenceFromTrademarkLaw: 'Does NOT require registered trademark - only imitation of packaging appearance',
  penaltiesSummary: [
    { law: 'Trade Marks (1992)', fine: 'AED 5,000+', imprisonment: 'Yes', closure: '6 months max' },
    { law: 'Anti-Commercial Fraud (2016)', fine: 'AED 250,000-1 million', imprisonment: 'Up to 2 years' },
    { law: 'Pharmaceuticals (2019)', fine: 'AED 200,000-1 million', imprisonment: '-', closure: '3 months + permanent withdrawal' }
  ] as PenaltySummary[],
  controlledSubstances: {
    policy: 'Zero-tolerance policy for recreational drug use',
    law: 'Federal Law by Decree No. 30 of 2021 on Combating Narcotics'
  }
}

// ============================================================================
// SECTION 12: ORGAN TRANSPLANTATION
// ============================================================================

export interface OrganLaw {
  law: string
  number: string
  year: string
}

export interface HayatProgramDetails {
  feature: string
  detail: string
}

export interface DonationStatistic {
  metric: string
  value: string
  year?: string
}

export interface AbuDhabiTransplantMilestone {
  metric: string
  value: string
}

export interface LicensedTransplantCenter {
  number: number
  hospital: string
  location: string
}

export interface DonationType {
  type: string
  requirement: string
}

export const organTransplantation = {
  legalFramework: [
    { law: 'Organ Donation & Transplantation', number: 'Federal Decree Law No. 25 of 2023', year: '2023' },
    { law: 'Anti-trafficking', number: 'Federal Decree by Law No. 24 of 2023', year: '2023' }
  ] as OrganLaw[],
  hayatNationalProgram: {
    eligible: 'UAE residents over 18 with Emirates ID',
    donorCard: 'Electronic upon registration',
    linkage: 'Individual\'s Emirates ID',
    website: 'hayat.gov.ae'
  } as HayatProgramDetails,
  donationStatistics: [
    { metric: 'Donation rate', value: '9.16 per million population (PMP)', year: '2023' },
    { metric: 'Previous rate', value: '5.5 PMP', year: '2022' },
    { metric: 'Total transplants (since launch)', value: '2,034+', year: 'Program inception' },
    { metric: 'Transplants (2024)', value: '354', year: '2024' },
    { metric: 'Registered donors', value: '397+', year: 'Recent' },
    { metric: 'Professionals trained', value: '10,000+', year: 'Domestically and abroad' }
  ] as DonationStatistic[],
  globalRanking: [
    { achievement: 'Growth of organ donors', rank: '1st globally' },
    { achievement: 'World record (online donation registrations)', rank: '4,010 in 1 hour' }
  ],
  abuDhabiMilestones: [
    { metric: 'Multi-organ transplants since 2017', value: '1,090+' },
    { metric: 'Transplants (2024)', value: '290' },
    { metric: 'Heart transplants (2024)', value: '7' },
    { metric: 'Kidney transplants (2024)', value: '142' },
    { metric: 'Liver transplants (2024)', value: '117' },
    { metric: 'Lung transplants (2024)', value: '22' }
  ] as AbuDhabiTransplantMilestone[],
  licensedTransplantationCenters: [
    { number: 1, hospital: 'Cleveland Clinic Abu Dhabi', location: 'Abu Dhabi' },
    { number: 2, hospital: 'Sheikh Khalifa Medical City', location: 'Abu Dhabi' },
    { number: 3, hospital: 'Sheikh Shakhbout Medical City', location: 'Abu Dhabi' },
    { number: 4, hospital: 'Dubai Hospital', location: 'Dubai' },
    { number: 5, hospital: 'Mediclinic Hospital Dubai', location: 'Dubai' },
    { number: 6, hospital: 'Al Jalila Specialist Hospital for Children', location: 'Dubai' },
    { number: 7, hospital: 'Human Organs and Tissues Transplantation Centre (Al Qassimi Hospital)', location: 'Sharjah' }
  ] as LicensedTransplantCenter[],
  donationTypes: [
    { type: 'Living donors', requirement: 'Legally competent individuals, voluntary consent, can withdraw before surgery' },
    { type: 'Deceased donors', requirement: 'Documented wish via Emirates ID or notary public' }
  ] as DonationType[]
}

// ============================================================================
// SECTION 13: CHRONIC DISEASE BURDEN
// ============================================================================

export interface DiseasePrevalence {
  condition: string
  prevalence: string
  source: string
}

export interface NCDMortalility {
  cause: string
  percentOfDeaths: string
}

export interface UAEHealthSurvey {
  metric: string
  value: string
}

export interface RiskFactor {
  factor: string
}

export interface GovernmentProgram {
  program: string
  description: string
}

export const chronicDiseaseBurden = {
  diseasePrevalence: [
    { condition: 'Adults with chronic condition', prevalence: '60%', source: 'Khaleej Times' },
    { condition: 'Adult obesity', prevalence: '30%+', source: 'Trade.gov' },
    { condition: 'Diabetes', prevalence: '19% (1 in 5)', source: 'Trade.gov' },
    { condition: 'Overweight/obese adults', prevalence: '84% (projected 94% by 2050)', source: 'France24' },
    { condition: 'Obesity (men)', prevalence: '30.9%', source: 'Global Nutrition Report' },
    { condition: 'Obesity (women)', prevalence: '44.2%', source: 'Global Nutrition Report' },
    { condition: 'Overweight/obese children', prevalence: '38.4%', source: 'WOF' },
    { condition: 'Boys obesity', prevalence: '21.1%', source: 'WOF' },
    { condition: 'Girls obesity', prevalence: '12.3%', source: 'WOF' },
    { condition: 'Students with chronic disease', prevalence: '23%', source: 'PMC Research' },
    { condition: 'Students with 2+ chronic diseases', prevalence: '4.7%', source: 'PMC Research' },
    { condition: 'Children under 5 undernourished', prevalence: '~1/3', source: 'LinkedIn' }
  ] as DiseasePrevalence[],
  ncdMortality: [
    { cause: 'NCDs (cancer, cardiovascular, diabetes, chronic respiratory)', percentOfDeaths: '55%' },
    { cause: 'Cardiovascular disease (primary NCD cause)', percentOfDeaths: '34%' },
    { cause: 'Cancer (second major cause)', percentOfDeaths: 'Significant' }
  ] as NCDMortalility[],
  uaeHealthSurvey2024_2025: [
    { metric: 'Obesity rate', value: '22.4%' },
    { metric: 'Smoking prevalence', value: '8.7%' }
  ] as UAEHealthSurvey[],
  keyRiskFactors: [
    'Fast food consumption',
    'Sedentary lifestyle',
    'Obesity (major risk factor for insulin resistance and T2D)'
  ] as RiskFactor[],
  governmentPrograms: [
    { program: 'National Program to Combat Obesity', description: 'Standardized protocols for early childhood obesity monitoring' },
    { program: 'Chronic Disease Management', description: 'Disease prevention, community health' }
  ] as GovernmentProgram[]
}

// ============================================================================
// SECTION 14: FOOD SAFETY
// ============================================================================

export interface FoodSafetyLaw {
  law: string
  description: string
}

export interface ComplianceRequirement {
  requirement: string
  detail: string
}

export interface Penalty {
  violation: string
  penalty: string
}

export const foodSafety = {
  legalFramework: [
    { law: 'Federal Law No. 10 of 2015', description: 'Primary food safety law' },
    { law: 'Ministerial Decree No. 239 of 2018', description: 'National Food Accreditation and Registration System' },
    { law: 'Ministerial Decree No. 14 of 2016', description: 'Controls imported food for non-trading purposes' }
  ] as FoodSafetyLaw[],
  unifiedFoodSafetyFramework2025: {
    approach: 'Risk-based inspections',
    goal: 'Standardize food safety across all emirates',
    implementation: '2025'
  },
  complianceRequirements: [
    { requirement: 'Registration', detail: 'All food products (imported/local) must be registered in electronic system "ZAD"' },
    { requirement: 'Labels', detail: 'Clear and non-removable' },
    { requirement: 'First-time imports', detail: 'Ministry of Climate Change and Environment approval' },
    { requirement: 'SPS Agreement', detail: 'UAE is signatory' }
  ] as ComplianceRequirement[],
  enforcementInspections: {
    localMunicipalities: 'Oversee requirements, conduct random inspections',
    nationalRapidAlertSystem: 'Response when serious food risks detected'
  },
  penalties: [
    { violation: 'Unauthorized pork/alcohol', penalty: 'Minimum 1-month prison + fines up to AED 500,000' },
    { violation: 'False labels (misleading)', penalty: 'AED 10,000-100,000 fine' },
    { violation: 'Other offenses', penalty: 'Fines up to AED 100,000' }
  ] as Penalty[]
}

// ============================================================================
// SECTION 15: TELEMEDICINE & DIGITAL HEALTH
// ============================================================================

export interface TelemedicineMarketSize {
  year: string
  marketSize: string
  source: string
}

export interface KeyDigitalHealthPlayer {
  company: string
  type: string
}

export interface GovernmentDigitalPlatform {
  service: string
  provider: string
  description: string
}

export interface TelemedicineGrowthDriver {
  driver: string
}

export const telemedicineDigitalHealth = {
  marketSize: [
    { year: '2024', marketSize: '$1,116.2 million', source: 'Grand View Research' },
    { year: '2030 (projected)', marketSize: '$4,835.0 million', source: 'Grand View Research' },
    { year: 'Growth rate', marketSize: '28.4% CAGR (2025-2030)', source: 'Grand View Research' },
    { year: 'UAE global market share', marketSize: '0.9% (2024)', source: 'Grand View Research' }
  ] as TelemedicineMarketSize[],
  keyPlayers: [
    { company: 'Koninklijke Philips NV', type: 'Telehealth' },
    { company: 'GE HealthCare Technologies', type: 'Telehealth' },
    { company: 'Oracle Corp', type: 'Health IT' },
    { company: 'Siemens Healthineers AG', type: 'Telehealth' },
    { company: 'Medtronic PLC', type: 'Remote monitoring' },
    { company: 'Teladoc Health Inc', type: 'Telehealth' },
    { company: 'American Well Corp', type: 'Telehealth' },
    { company: 'Evernorth', type: 'Telehealth' },
    { company: 'Doctor On Demand', type: 'Telehealth' },
    { company: 'Global Med Technologies', type: 'Telehealth' }
  ] as KeyDigitalHealthPlayer[],
  governmentPlatforms: [
    { service: 'Sahatna app', provider: 'DoH Abu Dhabi', description: 'Online/offline consultations, health records, prescriptions' },
    { service: 'Doctor for Every Citizen', provider: 'DHA', description: 'Free 24/7 voice/video consultations (launched Dec 2019)' }
  ] as GovernmentDigitalPlatform[],
  doctorForEveryCitizenDetails: {
    hotline: '800 342',
    extendedTo: 'All Dubai residents (initially Emiratis only)',
    physiciansCanRequest: 'Lab/radiology tests',
    prescriptions: 'Electronic prescriptions issued'
  },
  marketSegmentation: {
    services: '57.26%',
    software: 'Fastest growing'
  },
  growthDrivers: [
    'Government support for digital health startups',
    'Significant public funding',
    'Electronic patient records introduction',
    'Robotic surgery adoption',
    'EPharmacy initiatives',
    'Partnerships (e.g., Mubadala + Medgate)'
  ] as TelemedicineGrowthDriver[],
  smartHealthcare: {
    event: '5th Smart Healthcare Summit',
    date: 'October 11-12, 2025, Dubai',
    focus: 'AI, Telemedicine, Digital Transformation'
  }
}

// ============================================================================
// SECTION 16: IVF & REPRODUCTIVE HEALTH
// ============================================================================

export interface IVFLegalFramework {
  law: string
  description: string
}

export interface IVFKeyRegulation {
  provision: string
  detail: string
}

export interface IVFCostStructure {
  treatment: string
  costAED: string
}

export interface IVFClinic {
  clinic: string
  location: string
}

export const ivfReproductiveHealth = {
  legalFramework: [
    { law: 'Federal Decree-Law No. 17 of 2023', description: 'Fertility law amendments' },
    { law: 'Federal Decree-Law No. 41 of 2024', description: 'Family law (personal status)' }
  ] as IVFLegalFramework[],
  keyRegulations: [
    { provision: 'Donor IVF', detail: 'NOT permitted' },
    { provision: 'Genetic material', detail: 'Must use patient\'s own' },
    { provision: 'Surrogacy', detail: 'Legal (for unmarried, non-Muslim)' },
    { provision: 'Fertilized ova preservation', detail: 'Up to 5 years' },
    { provision: 'Embryo transfer limit', detail: 'Maximum 2 embryos' }
  ] as IVFKeyRegulation[],
  costStructureDubai2025: [
    { treatment: 'IVF', costAED: '18,000-28,000' },
    { treatment: 'ICSI', costAED: '22,000-32,000' },
    { treatment: 'PGT-A (genetic testing)', costAED: 'Additional costs' }
  ] as IVFCostStructure[],
  keyClinics: [
    { clinic: 'Bourn Hall', location: 'UAE' },
    { clinic: 'Trust Fertility', location: 'UAE' },
    { clinic: 'American Hospital Dubai', location: 'Dubai' },
    { clinic: 'ART Fertility Clinics', location: 'UAE' },
    { clinic: 'Fakih IVF', location: 'UAE' },
    { clinic: 'First IVF', location: 'UAE' }
  ] as IVFClinic[],
  thiqaCoverage: {
    coverage: 'Assisted reproductive technologies covered for medical indications',
    accordingTo: 'DOH standard for assisted reproduction',
    maximumAttempts: '3 attempts/year'
  }
}

// ============================================================================
// SECTION 17: MEDICAL MALPRACTICE & LIABILITY
// ============================================================================

export interface MedicalLiabilityLaw {
  provision: string
  detail: string
}

export interface MalpracticePenalty {
  type: string
  description: string
}

export interface CompensationCaseStudy {
  court: string
  amount: string
  case: string
}

export interface FilingChannel {
  channel: string
  description: string
}

export const medicalMalpracticeLiability = {
  federalLawOnMedicalLiability: {
    lawNumber: 'Law No. 4 of 2016',
    medicalErrorDefinition: 'Ignorance in technical matters, non-compliance with professional principles, lack of due diligence, negligence',
    grossMedicalError: 'Patient/foetus death, erroneous organ removal, loss of organ function, practitioner under drug/alcohol influence, medication overdosing',
    limitationPeriod: '3 years',
    investigation: 'Medical Liability Committee (30 days for report)',
    licenseSuspension: 'May be temporary during investigation'
  },
  penalties: [
    { type: 'Reprimanding', description: 'Minor violations' },
    { type: 'Mandatory training', description: 'Continuing education' },
    { type: 'License suspension', description: 'Temporary or permanent' },
    { type: 'Financial penalties', description: 'Case-dependent' },
    { type: 'Imprisonment', description: 'Gross medical error convictions' }
  ] as MalpracticePenalty[],
  compensationCaseStudies: [
    { court: 'Dubai Appellate Court', amount: 'Dh1 million', case: 'Permanent brain damage from surgical error' },
    { court: 'Dubai Court of Cassation', amount: 'Dh1 million', case: '80% permanent leg function loss (upheld)' },
    { court: 'Abu Dhabi Civil Appellate Court', amount: 'Dh1.4 million', case: 'Inadequate ICU staffing (increased from Dh1 million)' }
  ] as CompensationCaseStudy[],
  note: 'Courts account for long-term disability, lost earning capacity, emotional/psychological harm',
  filingOptions: [
    { channel: 'Health authority', description: 'Regulatory complaint' },
    { channel: 'Criminal police/public prosecution', description: 'Criminal case' },
    { channel: 'Civil court', description: 'Civil lawsuit' }
  ] as FilingChannel[]
}

// ============================================================================
// SECTION 18: HEALTHCARE FRAUD
// ============================================================================

export interface HealthcareFraudCase {
  case: string
  type: string
  outcome: string
}

export const healthcareFraud = {
  financialImpact: {
    annualLosses: 'AED 3.67 billion ($1 billion)'
  },
  notableCasesDoH: [
    { case: 'Dentist case', type: 'Misrepresented patient diagnosis for treatment approval', outcome: 'Prosecuted' },
    { case: 'Thiqa insurance fraud', type: 'Two facilities submitted false patient information', outcome: 'Prosecuted' },
    { case: 'Unauthorized advertising', type: 'Facility advertised dental services to Thiqa cardholders without approval', outcome: 'Prosecuted' }
  ] as HealthcareFraudCase[],
  enforcement: 'License bans, fines, recovery of paid claims, exclusion from insurance networks',
  otherNotableCases: [
    {
      case: 'Khaleej Times report',
      detail: 'AED 10.6 million Dubai villa purchase linked to $650 million US healthcare fraud scheme'
    },
    {
      case: 'Fraudster',
      detail: 'Pakistani businessman purchased villa using funds from US Medicaid fraud'
    },
    {
      case: 'Company involved',
      detail: 'ProMD Solutions - fraudulent credentialing and billing'
    }
  ]
}

// ============================================================================
// SECTION 19: WHO & INTERNATIONAL COLLABORATION
// ============================================================================

export interface WHOCollaborationArea {
  area: string
  description: string
}

export interface RecentInitiative {
  date: string
  initiative: string
  detail: string
}

export interface GazaEvacuationDetails {
  metric: string
  value: string
}

export interface OtherPartnership {
  partner: string
  focus: string
}

export const whoInternationalCollaboration = {
  collaborationAreas: [
    { area: 'Emergency operations', description: 'Coordination' },
    { area: 'Healthcare quality', description: 'Standards' },
    { area: 'Disease surveillance', description: 'Monitoring' },
    { area: 'Humanitarian aid', description: 'Patient evacuation' }
  ] as WHOCollaborationArea[],
  recentInitiatives: [
    { date: 'July 30, 2024', initiative: 'Gaza patient evacuation', detail: '85 patients (35 children, 50 adults) evacuated to Abu Dhabi' },
    { date: 'November 2024', initiative: 'WHO funding agreement', detail: 'USD 3 million for Sudanese refugees in Chad' },
    { date: '2024', initiative: 'WHO Host Country Agreement', detail: 'For Global Health Emergencies' }
  ] as RecentInitiative[],
  gazaEvacuationDetails: [
    { metric: 'Patients evacuated', value: '85' },
    { metric: 'Children', value: '35' },
    { metric: 'Adults', value: '50' },
    { metric: 'Cancer patients', value: '53' },
    { metric: 'Trauma injuries', value: '20' },
    { metric: 'Blood diseases', value: '3' },
    { metric: 'Congenital conditions', value: '3' },
    { metric: 'Family members', value: '63' },
    { metric: 'Coordination', value: 'WHO, Palestine Red Crescent Society, MSF, Cadus, International Medical Corps' }
  ] as GazaEvacuationDetails[],
  sinceOctober2023: '~5,000 evacuated for treatment outside Gaza (80%+ in Egypt, Qatar, UAE)',
  whoRecognition: [
    'Dr. Tedros (WHO Director-General) praised UAE\'s health leadership role',
    'UAE hosted COP28 with health prioritization'
  ],
  otherPartnerships: [
    { partner: 'Carter Center', focus: 'Neglected tropical diseases' },
    { partner: 'Children\'s National Hospital', focus: 'Pediatric care' },
    { partner: 'Johns Hopkins', focus: 'Medical advancement' },
    { partner: 'Gates Foundation', focus: 'Vaccines (COVID-19, Polio, Malaria)' }
  ] as OtherPartnership[]
}

// ============================================================================
// SECTION 20: HEALTH EMERGENCIES
// ============================================================================

export interface EmergencyNumber {
  service: string
  number: string
}

export interface EmergencyResponseAuthority {
  authority: string
  role: string
}

export interface EmergencyPolicy {
  policy: string
  description: string
}

export interface PublicHealthCenter {
  center: string
  services: string
}

export const healthEmergencies = {
  emergencyNumbers: [
    { service: 'Police', number: '999' },
    { service: 'Ambulance', number: '998' },
    { service: 'Civil Defence (Fire)', number: '997' },
    { service: 'Coastguard', number: '996' },
    { service: 'Electricity Authority', number: '991' }
  ] as EmergencyNumber[],
  emergencyResponseInfrastructure: [
    { authority: 'NCEMA', role: 'National Emergency Crisis and Disaster Management Authority - coordinates responses' },
    { authority: 'Emirates Health Services Emergency Operations Center', role: 'Coordinates and manages health emergencies' },
    { authority: 'DHA Emergency Medical Services', role: 'Dubai-specific emergency care' }
  ] as EmergencyResponseAuthority[],
  nationalPolicyFramework: [
    { policy: 'National Policy for Combating Health Risks', description: 'Multi-sectoral framework' },
    { policy: 'Dubai Emergency Medical Services Strategy', description: 'Enhance public/private collaboration' }
  ] as EmergencyPolicy[],
  recentEmergencyResponses: [
    { event: 'COVID-19 pandemic', response: 'Comprehensive national response' },
    { event: 'Gaza evacuation', response: 'Large-scale medical evacuation (July 2024)' }
  ],
  publicHealthCenters: [
    { center: 'Abu Dhabi Public Health Centre', services: 'Mental health support, public health initiatives' }
  ] as PublicHealthCenter[]
}

// ============================================================================
// DASHBOARD-READY DATA TABLES
// ============================================================================

export interface HealthcareSystemKPI {
  kpi: string
  value: string
  trend: string
}

export interface COVIDMetrics {
  metric: string
  value: string
}

export interface MedicalTourismKPI {
  metric: string
  value: string
}

export interface OrganTransplantationKPI {
  metric: string
  value: string
}

export interface MentalHealthMetric {
  metric: string
  value: string
}

export const dashboardDataTables = {
  healthcareSystemKPIs: [
    { kpi: 'Population', value: '10.08 million', trend: '-' },
    { kpi: 'Life expectancy', value: '79 years', trend: 'Stable' },
    { kpi: 'Infant mortality', value: '5 per 1,000', trend: 'Decreasing' },
    { kpi: 'Doctors per 100K', value: '181', trend: '-' },
    { kpi: 'Nurses per 100K', value: '31', trend: '-' },
    { kpi: 'JCI-accredited facilities', value: '214+', trend: 'Growing' },
    { kpi: 'Hospital market size', value: '$10.9 billion', trend: 'Growing (6.4% CAGR)' },
    { kpi: 'Health insurance market', value: '$2.85 billion', trend: 'Growing' }
  ] as HealthcareSystemKPI[],
  covid19Metrics: [
    { metric: 'Total cases', value: '1,067,030' },
    { metric: 'Deaths', value: '2,349' },
    { metric: 'Fatality rate', value: '0.22%' },
    { metric: 'Recovery rate', value: '89%' },
    { metric: 'Vaccination coverage (1+ dose)', value: '77.70%' },
    { metric: 'Vaccination coverage (fully)', value: '68.40%' },
    { metric: 'Total doses', value: '16,444,844' }
  ] as COVIDMetrics[],
  medicalTourismKPIs: [
    { metric: 'Market size (2025)', value: '$865.8 million' },
    { metric: 'Market size (2034 proj.)', value: '$4,547.5 million' },
    { metric: 'Growth rate', value: '19.63% CAGR' },
    { metric: 'Dubai international tourists (2023)', value: '691,000+' },
    { metric: 'Abu Dhabi annual tourists', value: '15,000+' },
    { metric: 'Abu Dhabi global rank', value: '8th' }
  ] as MedicalTourismKPI[],
  organTransplantationKPIs: [
    { metric: 'Donation rate (2023)', value: '9.16 PMP' },
    { metric: 'Total transplants since launch', value: '2,034+' },
    { metric: 'Transplants (2024)', value: '354' },
    { metric: 'Licensed centers', value: '7' },
    { metric: 'Global ranking (donor growth)', value: '1st' }
  ] as OrganTransplantationKPI[],
  mentalHealthMetrics: [
    { metric: 'Disorder prevalence', value: '14%' },
    { metric: 'Primary care visitors affected', value: '28%' },
    { metric: 'Anxiety (most common)', value: '56.4%' },
    { metric: 'COVID depression rate', value: '44.8%' },
    { metric: 'COVID anxiety rate', value: '38.2%' }
  ] as MentalHealthMetric[]
}

// ============================================================================
// SOURCE TIERS
// ============================================================================

export interface Source {
  source: string
  url: string
}

export const sourceTiers = {
  governmentPortals: [
    { source: 'UAE Government', url: 'u.ae' },
    { source: 'MOHAP', url: 'mohap.gov.ae' },
    { source: 'DHA', url: 'dha.gov.ae' },
    { source: 'DoH Abu Dhabi', url: 'doh.gov.ae' },
    { source: 'Emirates Health Services', url: 'ehs.gov.ae' },
    { source: 'Thiqa', url: 'thiqa.ae' },
    { source: 'SEHA', url: 'seha.ae' }
  ] as Source[],
  internationalOrganizations: [
    { source: 'WHO', url: 'who.int' },
    { source: 'Johns Hopkins Coronavirus Resource', url: 'coronavirus.jhu.edu' }
  ] as Source[],
  researchReports: [
    { source: 'Newsweek Hospital Rankings', url: 'rankings.newsweek.com' },
    { source: 'Grand View Research', url: 'grandviewresearch.com' },
    { source: 'IMARC', url: 'imarcgroup.com' },
    { source: 'PMC/PubMed', url: 'pmc.ncbi.nlm.nih.gov' }
  ] as Source[],
  newsSources: [
    { source: 'Gulf News', url: 'gulfnews.com' },
    { source: 'Khaleej Times', url: 'khaleejtimes.com' },
    { source: 'The National', url: 'thenationalnews.com' },
    { source: 'WAM', url: 'wam.ae' }
  ] as Source[],
  legalResources: [
    { source: 'DLA Piper', url: 'dlapiper.com' },
    { source: 'Norton Rose Fulbright', url: 'nortonrosefulbright.com' },
    { source: 'Clyde & Co', url: 'clydeco.com' },
    { source: 'Morgan Lewis', url: 'morganlewis.com' }
  ] as Source[]
}

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export interface SentimentTopic {
  topic: string
  sentiment: string
  notes?: string
}

export const sentimentAnalysis = {
  positive: [
    { topic: 'Healthcare system overall', sentiment: 'Positive', notes: 'Strong infrastructure, JCI leadership' },
    { topic: 'COVID-19 response', sentiment: 'Positive', notes: 'Low fatality, high testing, rapid vaccine' },
    { topic: 'Medical tourism', sentiment: 'Positive', notes: 'Growing market, government support' },
    { topic: 'Mental health services', sentiment: 'Neutral to Positive', notes: 'New law protections, but prevalence high' },
    { topic: 'Healthcare access (low-income)', sentiment: 'Improving', notes: 'New 2025 insurance mandate' }
  ] as SentimentTopic[],
  negative: [
    { topic: 'Chronic disease burden', sentiment: 'Negative', notes: 'High obesity, diabetes rates' },
    { topic: 'Pharmaceutical counterfeiting', sentiment: 'Negative', notes: '116 products detected in 2024' }
  ] as SentimentTopic[]
}

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevanceItem {
  aspect: string
  uaeRelevance: string
  notes?: string
}

export const uaeRelevanceAssessment = {
  relevanceItems: [
    { aspect: 'Healthcare system', uaeRelevance: 'Critical', notes: 'Core public service' },
    { aspect: 'Medical tourism', uaeRelevance: 'High', notes: 'Economic diversification target' },
    { aspect: 'Health insurance', uaeRelevance: 'Critical', notes: 'Mandatory for residents' },
    { aspect: 'Pandemic preparedness', uaeRelevance: 'High', notes: 'Post-COVID priority' },
    { aspect: 'Digital health', uaeRelevance: 'High', notes: 'Vision 2030/2040 alignment' },
    { aspect: 'Chronic disease', uaeRelevance: 'High', notes: 'National health burden' }
  ] as UAERelevanceItem[]
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  version: '2.0',
  classification: 'Public',
  enriched: '2026-04-27',
  sourcesFetched: '45+ government portals, academic papers, international organizations',
  uaeRelevance: 'Critical - Primary healthcare reference for UAE'
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface HealthcareData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  healthcareSystemStructure: typeof healthcareSystemStructure
  healthcareAuthoritiesGovernance: typeof healthcareAuthoritiesGovernance
  healthcareInfrastructure: typeof healthcareInfrastructure
  hospitalQualityRankings: typeof hospitalQualityRankings
  covid19PandemicResponse: typeof covid19PandemicResponse
  vaccinationCampaign: typeof vaccinationCampaign
  healthInsuranceSystem: typeof healthInsuranceSystem
  medicalTourism: typeof medicalTourism
  mentalHealthServices: typeof mentalHealthServices
  healthcareWorkforce: typeof healthcareWorkforce
  pharmaceuticalRegulation: typeof pharmaceuticalRegulation
  organTransplantation: typeof organTransplantation
  chronicDiseaseBurden: typeof chronicDiseaseBurden
  foodSafety: typeof foodSafety
  telemedicineDigitalHealth: typeof telemedicineDigitalHealth
  ivfReproductiveHealth: typeof ivfReproductiveHealth
  medicalMalpracticeLiability: typeof medicalMalpracticeLiability
  healthcareFraud: typeof healthcareFraud
  whoInternationalCollaboration: typeof whoInternationalCollaboration
  healthEmergencies: typeof healthEmergencies
  dashboardDataTables: typeof dashboardDataTables
  sourceTiers: typeof sourceTiers
  sentimentAnalysis: typeof sentimentAnalysis
  uaeRelevanceAssessment: typeof uaeRelevanceAssessment
  reportMetadata: typeof reportMetadata
}

export const healthcareData: HealthcareData = {
  id: 'topic-2-10',
  sector: 'health',
  title: 'Healthcare',
  titleAr: 'الرعاية الصحية',
  description: 'Healthcare system, medical tourism, COVID-19 response, organ transplantation, mental health, health insurance, hospitals, pharmaceutical regulation',
  healthcareSystemStructure,
  healthcareAuthoritiesGovernance,
  healthcareInfrastructure,
  hospitalQualityRankings,
  covid19PandemicResponse,
  vaccinationCampaign,
  healthInsuranceSystem,
  medicalTourism,
  mentalHealthServices,
  healthcareWorkforce,
  pharmaceuticalRegulation,
  organTransplantation,
  chronicDiseaseBurden,
  foodSafety,
  telemedicineDigitalHealth,
  ivfReproductiveHealth,
  medicalMalpracticeLiability,
  healthcareFraud,
  whoInternationalCollaboration,
  healthEmergencies,
  dashboardDataTables,
  sourceTiers,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  reportMetadata
}

export default healthcareData
