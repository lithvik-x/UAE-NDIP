// @ts-nocheck
/**
 * Labor & Employment - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-18-labor-employment-results.md
 * Dashboard-ready structured data for the UAE National Digital Intelligence Platform
 *
 * @fileoverview All sections from the MD file are represented as TypeScript data structures
 */

import type { TierLevel, AlertLevel, HSBPCCategory } from '@/lib/data-loader/types'

// ============================================================================
// SECTION 1: WORKFORCE OVERVIEW & DEMOGRAPHICS
// ============================================================================

export interface WorkforceMetric {
  metric: string
  figure: string
  source: string
  date: string
}

export interface MigrantWorkerOrigin {
  country: string
  estimatedWorkers: string
  source: string
  date: string
}

export interface WorkforceComposition {
  totalPopulation: string
  migrantWorkers: string
  foreignNationalsPercent: string
  foreignWorkersPercent: string
  workforceGrowth2025: string
  privateSectorGrowth: string
  fiveYearGrowth: string
  companyGrowth: string
  youthInWorkforce: string
  womenInLeadership: string
  womenInSkilledWorkforce: string
  companiesEmployingWomen: string
  femaleParticipationGrowth: string
  skilledWorkforceGrowth: string
}

export const workforceOverview: WorkforceComposition = {
  totalPopulation: '9,890,000',
  migrantWorkers: '8.7 million (88%)',
  foreignNationalsPercent: '88-90%',
  foreignWorkersPercent: '92.4%',
  workforceGrowth2025: '12.4% (up from 10.9% in 2024)',
  privateSectorGrowth: '7.8%',
  fiveYearGrowth: '101.76%',
  companyGrowth: '45.76%',
  youthInWorkforce: '54.9%',
  womenInLeadership: '17.4%',
  womenInSkilledWorkforce: '45.8%',
  companiesEmployingWomen: '36%',
  femaleParticipationGrowth: '101.92% (5-year)',
  skilledWorkforceGrowth: '49.92%',
}

export const workforceMetrics: WorkforceMetric[] = [
  { metric: 'Total population', figure: '9,890,000', source: 'Walk Free', date: '2021' },
  { metric: 'Migrant workers', figure: '8.7 million (88%)', source: 'ILO, HRW', date: '2023' },
  { metric: 'Foreign nationals % of population', figure: '88-90%', source: 'HRW, Walk Free', date: '2023' },
  { metric: 'Foreign workers % of total workforce', figure: '92.4%', source: 'ILO Factsheet', date: '2018' },
  { metric: 'Workforce growth (2025)', figure: '12.4%', source: 'MoHRE/Gulf News', date: 'Jan 2026' },
  { metric: 'Private sector workforce growth', figure: '7.8%', source: 'MoHRE', date: '2025' },
  { metric: '5-year workforce growth (2021-2025)', figure: '101.76%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Company growth (2021-2025)', figure: '45.76%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Youth (18-35) in workforce', figure: '54.9%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Women in leadership', figure: '17.4%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Women in skilled workforce', figure: '45.8%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Companies employing women', figure: '36%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Female labor market participation growth', figure: '101.92%', source: 'MoHRE', date: 'Dec 2025' },
  { metric: 'Skilled workforce growth (2021-2025)', figure: '49.92%', source: 'MoHRE', date: 'Dec 2025' },
]

export const migrantWorkerOrigins: MigrantWorkerOrigin[] = [
  { country: 'India', estimatedWorkers: '3.5 million', source: 'ADHRB', date: '2024' },
  { country: 'Bangladesh', estimatedWorkers: 'Over 1 million', source: 'ADHRB', date: '2024' },
  { country: 'Pakistan', estimatedWorkers: '950,000', source: 'ADHRB', date: '2024' },
  { country: 'Egypt', estimatedWorkers: '710,000', source: 'ADHRB', date: '2024' },
  { country: 'Philippines', estimatedWorkers: '470,000', source: 'ADHRB', date: '2024' },
  { country: 'Nepal (2022 arrivals)', estimatedWorkers: '122,000', source: 'HRW', date: '2022' },
]

export const remittanceData = {
  2019: 'USD 45 billion (largest Asian source of remittances)',
  2020: 'USD 43 billion',
  note: 'Remittances equal to one-quarter of Nepal\'s GDP',
}

export const totalLaborForce = {
  2024: '7,090,447 (World Bank via Trading Economics)',
}

export const iloContext = {
  memberSince: '1972',
  migrantWorkers: '8.7 million',
  collaborationAreas: 'social protection, labour migration corridors, just transition, workplace safety and health',
  governmentPartner: 'Ministry of Human Resources and Emiratisation (MoHRE)',
  employersOrganization: 'Federation of UAE Chambers of Commerce and Industry',
  keyProjects: 'STREAM (social protection for migrant workers) and FAIRWAY programme',
}

// ============================================================================
// SECTION 2: KAFALA SYSTEM
// ============================================================================

export interface KafalaReform {
  reform: string
  year: string
  keyProvision: string
}

export interface KafalaRealityIssue {
  issue: string
  evidence: string
  source: string
  date: string
}

export interface GovernmentResponseRating {
  category: string
  score: string
}

export const kafalaDescription = {
  definition: 'Restrictive work permit system tying migrant workers to their employer/sponsor, granting employers near-total control over employees\' residency, work authorization, and ability to exit the country.',
  keyFeatures: [
    'Workers need sponsor\'s permission to transfer jobs, end employment, and enter/exit the country',
    'Sponsor controls employment and immigration status',
    'Workers face "absconding" criminal charges if they leave employers without permission (including abuse survivors)',
    'Origins: Early 20th century for pearl industry, expanded in 1950s; originally favored Arab workers; mid-1980s austerity led to replacement with cheaper Asian labor',
  ],
}

export const kafalaLegislativeReforms: KafalaReform[] = [
  { reform: 'Ministerial Decree 766/2015', year: '2015', keyProvision: 'Allows workers to change employers under conditions' },
  { reform: 'Federal Decree-Law No. 33/2021', year: '2021', keyProvision: 'Reformed contract structure; introduced binding MoHRE dispute resolution; penalties up to AED 1,000,000' },
  { reform: 'Recruitment fee prohibition', year: '2022', keyProvision: 'Agencies cannot charge workers recruitment fees' },
  { reform: 'Job change without employer permission', year: '2022', keyProvision: 'Workers allowed to change jobs without employer authorization' },
  { reform: 'Monthly wages via WPS', year: '2009+', keyProvision: 'Mandatory electronic salary transfer' },
]

export const uaeLawProhibitions = [
  'Passport confiscation',
  'Wage withholding',
  'Unfair contract terms',
]

export const kafalaPersistentAbuses: KafalaRealityIssue[] = [
  { issue: 'Modern slavery prevalence', evidence: '132,000 people (13.4/1,000  7th highest globally, 2nd in Arab States)', source: 'Walk Free Global Slavery Index', date: '2021 data' },
  { issue: 'Passport confiscation', evidence: 'Common despite illegality; documented cases 2025-2026', source: 'HRW, ADHRB, media', date: 'Ongoing' },
  { issue: 'Wage theft', evidence: 'Endemic in construction and renewable energy sectors', source: 'HRW, Business Human Rights', date: '2024-2026' },
  { issue: 'Contract substitution', evidence: 'Lower wages on arrival vs contracted', source: 'ADHRB', date: '2024' },
  { issue: '"Absconding" charges', evidence: 'Used against workers leaving abusive employers', source: 'ADHRB, HRW', date: 'Ongoing' },
  { issue: 'Low enforcement', evidence: '"Laws rarely enforced and human rights abuses remain rampant"', source: 'ADHRB briefing', date: 'May 2024' },
]

export const governmentResponseRating: GovernmentResponseRating[] = [
  { category: 'Overall', score: '50/100' },
  { category: 'Survivors identified and supported', score: '59/100' },
  { category: 'Criminal justice mechanisms', score: '42/100' },
  { category: 'National and regional coordination', score: '75/100' },
  { category: 'Risk factors addressed', score: '74/100' },
  { category: 'Government and business supply chains', score: '0/100' },
]

export const vulnerableGroups = [
  'Domestic workers (explicitly excluded from labor law protections)',
  'Agricultural/farm workers',
  'Shepherds, camel herders',
  'Construction and manual laborers',
]

// ============================================================================
// SECTION 3: WAGE PROTECTION SYSTEM (WPS)
// ============================================================================

export interface WPS2025Update {
  item: string
  details: string
}

export const wpsOverview = {
  launched: '2009 by UAE Central Bank in collaboration with MoHRE',
  purpose: 'Electronic salary transfer system through approved banks and financial institutions; enables monitoring of employer compliance',
  coverage2025: 'More than 99% of private-sector workers',
  monthlyTransfers: 'Exceeding AED 35 billion',
}

export const wps2025Updates: WPS2025Update[] = [
  { item: 'Launched', details: 'December 2025' },
  { item: 'Real-time salary tracking added', details: '' },
  { item: 'Expanded digital channels and integration', details: '' },
  { item: 'Enhanced payroll governance', details: '' },
  { item: 'Modernization for operational efficiency', details: '' },
]

export const wpsEffectiveness = {
  coverage: '99%+',
  workersCovered: 'All private sector employees via approved banks',
  effectivenessGap: 'Despite WPS, wage theft complaints persist',
}

export const wpsSources = [
  'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/payment-of-wages',
  'https://gulfbusiness.com/en/2025/uae/uae-wage-new-wps-benchmark-for-digital-payroll/',
  'https://www.mohre.gov.ae/en/media-center/news/10/12/2025/mohre-launches-new-update-for-the-wage-protection-system',
  'https://kpmg.com/xx/en/our-insights/gms-flash-alert/2026/flash-alert-2026-013.html',
]

// ============================================================================
// SECTION 4: WAGE THEFT & COMPENSATION ISSUES
// ============================================================================

export interface WageTheftCase {
  case: string
  details: string
  source: string
  date: string
}

export const wageTheftForms = [
  'Unpaid wages',
  'Unpaid overtime',
  'Wage withholding',
  'Paying less than contracted wages',
  'Contract substitution (lower wages on arrival)',
]

export const wageTheftCases: WageTheftCase[] = [
  { case: 'Abu Dhabi court case', details: 'Ordered company to pay Dh384,000 in unpaid wages and gratuity', source: 'Gulf News', date: 'Sep 2025' },
  { case: '14 Indian workers (Dubai energy project)', details: 'Subjected to wage theft and forced overtime; stranded without food/housing', source: 'Business Human Rights', date: '2024' },
  { case: 'UAE renewable energy projects', details: 'Migrant workers suffered exploitative recruitment fees, wage theft, illegally long hours in dangerous heat', source: 'HRW (Nov 2024)', date: '2024' },
]

export const wageTheftSentiment = 'Negative  persistent wage theft despite WPS'

// ============================================================================
// SECTION 5: MINIMUM WAGE
// ============================================================================

export interface EmiratiMinimumWage {
  effectiveDate: string
  minimumMonthlySalary: string
  previous: string
  source: string
}

export const emiratiMinimumWages: EmiratiMinimumWage[] = [
  { effectiveDate: 'January 1, 2026', minimumMonthlySalary: 'AED 6,000', previous: 'AED 5,000', source: 'MoHRE/KPMG' },
  { effectiveDate: 'June 30, 2026', minimumMonthlySalary: 'Employers must adjust existing contracts to new rate', previous: '', source: 'MoHRE' },
]

export const nonComplianceConsequences = 'Exclusion from Emiratization quotas; suspension of work permits'

export const expatriateMinimumWage = {
  status: 'NO nationwide minimum wage for expatriate private-sector workers as of 2025',
  universalFloor: 'None established',
  lowestObserved: 'AED 800/month (~$217 USD)',
}

export const minimumWageDebate = {
  argumentsFor: ['Worker welfare', 'Talent attraction and retention', 'Poverty reduction', 'Fair compensation'],
  argumentsAgainst: ['Risk of inflation', 'Reduced competitiveness', 'Potential shift to informal employment', 'Higher labor costs making UAE less attractive'],
}

// ============================================================================
// SECTION 6: END-OF-SERVICE GRATUITY & ALTERNATIVE SCHEME
// ============================================================================

export interface GratuityCalculation {
  servicePeriod: string
  calculation: string
}

export interface VoluntarySchemeContribution {
  category: string
  rate: string
}

export interface ApprovedEOSBProvider {
  provider: string
}

export const traditionalGratuity = {
  eligibility: 'Minimum 1 year continuous service',
  calculationBasis: 'basic salary only, excluding allowances',
  paymentDeadline: 'Within 14 days of contract termination',
  legalBasis: 'Federal Decree Law No. 33 of 2021; Cabinet Resolution No. 1 of 2022',
  calculations: [
    { servicePeriod: '< 1 year', calculation: 'No gratuity' },
    { servicePeriod: '15 years', calculation: '21 days\' basic salary per year' },
    { servicePeriod: '> 5 years', calculation: '30 days\' basic salary per year (after first 5 years)' },
    { servicePeriod: 'Maximum cap', calculation: '2 years\' total salary' },
  ] as GratuityCalculation[],
}

export const voluntaryAlternativeEOSB = {
  operationalSince: 'October 2023',
  employerContributionRates: [
    { category: '< 5 years', rate: '5.83% of basic monthly salary' },
    { category: '> 5 years', rate: '8.33% of basic monthly salary' },
  ] as VoluntarySchemeContribution[],
  employeeVoluntaryContributions: 'Up to 25% of total wage (monthly or annually)',
  transferDeadline: 'Within 15 days of each calendar month start',
  benefitPayout: 'Within 14 days after termination (includes investment returns)',
  approvedProviders: [
    'Ghaf Benefits',
    'Daman Investments',
    'National Bonds',
    'First Abu Dhabi Bank (FAB)',
  ] as ApprovedEOSBProvider[],
  supervisingAuthorities: 'MoHRE and Securities and Commodities Authority (SCA)',
  keyBenefit: 'Employees earn investment returns on contributions; improves cash-flow predictability for employers',
}

export const gratuitySources = [
  'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector',
  'https://ghafbenefits.com/en/insights/alternative-end-of-service-benefits-vs-traditional-gratuity/',
  'https://www.bracewell.com/resources/new-mohre-guidance-on-the-uaes-alternative-end%E2%80%91of%E2%80%91service-benefits-scheme/',
]

// ============================================================================
// SECTION 7: UNEMPLOYMENT INSURANCE (ILOE)
// ============================================================================

export interface ILOEEligibility {
  requirement: string
  details?: string
}

export interface ILOEPremiumCategory {
  category: string
  basicMonthlySalary: string
  monthlyPremium: string
}

export interface ILOECompensation {
  payout: string
  category1Max: string
  category2Max: string
}

export interface ILOEPerformanceStat {
  metric: string
  figure: string
  source: string
  date: string
}

export const iloeOverview = {
  name: 'Insurance Against Job Loss (ILOE)',
  implemented: 'January 1, 2023 (mandatory)',
  legalBasis: 'Federal Law Decree No. 13 of 2022; Cabinet Resolution No. 97 of 2022; Ministerial Decision No. 604 of 2022; Ministerial Decision No. 340 of 2023',
}

export const iloeEligibility: ILOEEligibility[] = [
  { requirement: 'Must subscribe for at least 12 continuous months' },
  { requirement: 'Must not have resigned' },
  { requirement: 'Must not be dismissed for disciplinary reasons' },
  { requirement: 'Must submit claim within 30 days of employment end' },
  { requirement: 'Must be present in the country' },
  { requirement: 'No fraudulent claims or fictitious employer' },
]

export const iloeExcludedCategories = [
  'Investors (establishment owners)',
  'Domestic workers',
  'Temporary contract employees',
  'Juveniles (under 18)',
  'Emirati retirees who met retirement conditions',
]

export const iloePremiumStructure: ILOEPremiumCategory[] = [
  { category: 'First', basicMonthlySalary: '< AED 16,000', monthlyPremium: '<= AED 5' },
  { category: 'Second', basicMonthlySalary: '> AED 16,000', monthlyPremium: '<= AED 10' },
]

export const iloeCompensation: ILOECompensation = {
  payout: '60% of subscription salary for up to 3 months',
  category1Max: 'AED 10,000/month',
  category2Max: 'AED 20,000/month',
}

export const iloePerformanceStats: ILOEPerformanceStat[] = [
  { metric: 'Registration rate', figure: '90% of targeted workforce', source: 'Gulf Today/MoHRE', date: 'Feb 2026' },
  { metric: 'Compensation paid', figure: 'AED 350 million', source: 'Gulf Today', date: 'Feb 2026' },
  { metric: 'Awareness program languages', figure: '17 languages', source: 'MoHRE', date: '2025' },
  { metric: 'Workers benefiting from awareness programs', figure: 'Over 3 million', source: 'MoHRE', date: '2025' },
  { metric: 'Mandatory guidance completion', figure: '100% of targeted workers', source: 'MoHRE', date: 'End 2025' },
]

export const iloeFines = {
  notSubscribing: 'AED 400',
  notPayingPremiums: 'AED 400',
}

export const iloeSubscriptionChannels = [
  'Official website: iloe.ae',
  'Mobile app (Google Play, App Store)',
  'Contact centre',
  'Business centres (Tasheel, Tawjeeh)',
  'ATMs/kiosks (MBME PAY, C3PAY5, UPAY)',
  'Exchange companies (Al Ansari)',
  'Bank mobile apps',
  'SMS (du, Etisalat)',
  'BOTIM app',
]

// ============================================================================
// SECTION 8: MIDDAY BREAK ENFORCEMENT
// ============================================================================

export interface MiddayBreakRequirement {
  requirement: string
}

export const middayBreakDetails = {
  period: 'June 15  September 15 annually (21st consecutive year)',
  hours: '12:30 PM to 3:00 PM',
  scope: 'Outdoor work in direct sunlight for construction and industrial workers',
}

export const middayBreakEmployerRequirements: MiddayBreakRequirement[] = [
  { requirement: 'Provide shaded rest areas' },
  { requirement: 'Provide cooling tools' },
  { requirement: 'Provide drinking water and rehydration salts' },
  { requirement: 'First aid equipment on site' },
  { requirement: 'Post daily schedules in Arabic and workers\' language' },
  { requirement: 'Conduct risk assessments' },
]

export const middayBreakPenalties = {
  perWorkerViolation: 'AED 5,000',
  maximumMultipleViolations: 'AED 50,000',
  additional: 'Possible suspension of company\'s file or downgrading its classification',
}

export const middayBreakCompliance = {
  complianceRate2025: '99%+ expected',
  enforcement: 'MoHRE field inspections; 24/7 hotline 80060 (four languages); Taqyeem centers',
  alternativeScheme: 'ESOB (Employer Obligations) scheme available',
  reporting: 'MOHRE call centre 600590000, website, smart application',
}

export const middayBreakUpdates2025 = [
  'AI-augmented monitoring introduced',
  'Enhanced digital tracking systems',
]

// ============================================================================
// SECTION 9: WORKING HOURS & OVERTIME
// ============================================================================

export interface WorkingHoursCategory {
  category: string
  hours: string
}

export interface OvertimeRule {
  condition: string
  rate: string
}

export const standardWorkingHours: WorkingHoursCategory[] = [
  { category: 'Normal daily', hours: '8 hours/day' },
  { category: 'Normal weekly', hours: '48 hours/week' },
  { category: 'Ramadan (daytime)', hours: '6 hours/day' },
]

export const overtimeRules: OvertimeRule[] = [
  { condition: 'Overtime beyond normal hours', rate: '125% of normal wage' },
  { condition: 'Night shift (10 PM  4 AM)', rate: '150% of normal wage' },
  { condition: 'Public holiday work', rate: '150% of normal wage' },
]

export const overtimeKeyRules = [
  'Maximum 2 extra hours per day',
  'Nature of work must require overtime',
  'Cannot exceed 14 hours total in a day (practical cap with 2 hours OT)',
]

export const workingHoursLegalBasis = 'UAE Labour Law (Federal Law No. 8 of 1980); Article 65'

// ============================================================================
// SECTION 10: DOMESTIC WORKERS
// ============================================================================

export interface DomesticWorkerRight {
  right: string
  provision: string
}

export interface DomesticWorkerProhibition {
  prohibition: string
}

export const domesticWorkerLaw = {
  governingLaw: 'Federal Decree-Law No. 9 of 2022 (effective December 15, 2022)',
  amendedBy: 'Federal Decree-Law No. 21 of 2023',
  coveredOccupations: '19 occupations: housemaid, cook, nanny, gardener, driver, personal tutor, home nurse, and others',
}

export const domesticWorkerRights: DomesticWorkerRight[] = [
  { right: 'Wage payment', provision: 'Within 10 days of due date' },
  { right: 'Weekly rest', provision: 'One paid day off per week' },
  { right: 'Daily rest', provision: 'Minimum 12 hours (8 consecutive)' },
  { right: 'Annual leave', provision: 'Minimum 30 days paid' },
  { right: 'Home leave', provision: 'Round-trip ticket every two years' },
  { right: 'Sick leave', provision: 'Up to 30 days annually' },
  { right: 'Personal documents', provision: 'Right to retain ID documents' },
  { right: 'Litigation', provision: 'Exempt from litigation fees at all stages' },
]

export const domesticWorkerProhibitedActions: DomesticWorkerProhibition[] = [
  { prohibition: 'Employing workers under 18' },
  { prohibition: 'Discrimination (race, gender, religion, nationality, etc.)' },
  { prohibition: 'Forced labor, human trafficking' },
  { prohibition: 'Sexual harassment' },
  { prohibition: 'Charging recruitment fees to workers' },
  { prohibition: 'Passport confiscation' },
]

export const domesticWorkerPassportConfiscationPenalty = {
  penalty: '500 AED fine for employers who confiscate passports (per TIP Report 2025)',
}

export const domesticWorkerResignationRules = {
  afterSixMonths: 'Worker can resign with 30 days\' written notice',
  mustComply: 'Must comply with contract terms',
}

export const domesticWorkerPrevalence = '90-95% of UAE citizens employ domestic workers (often living within the home)'

export const domesticWorkerEnforcementChallenge = [
  'Isolation within homes makes monitoring difficult',
  'Specialized domestic worker recruitment offices required (licensed by MoHRE)',
]

// ============================================================================
// SECTION 11: CONSTRUCTION WORKER WELFARE & ACCOMMODATION
// ============================================================================

export interface AccommodationStandard {
  standard: string
  requirement: string
}

export const constructionWorkingHours = {
  standard: '8 hours/day, 48 hours/week',
  ramadan: '6 hours/day',
  middayBan: '12:30-3:00 PM, June-September (outdoor work prohibited)',
}

export const accommodationStandards: AccommodationStandard[] = [
  { standard: 'Minimum space per person', requirement: '3 square metres (some sources say 3.5-4 sq m)' },
  { standard: 'Maximum per bedroom', requirement: '8-10 persons' },
  { standard: 'Lighting', requirement: 'Well lit' },
  { standard: 'Ventilation', requirement: 'Well ventilated' },
  { standard: 'Temperature control', requirement: 'Air-conditioned' },
  { standard: 'Ceiling height', requirement: '>=7 feet' },
  { standard: 'Bed spacing', requirement: '36+ inches apart' },
  { standard: 'Toilet facilities', requirement: '1 per 8 persons' },
  { standard: 'Bathing facilities', requirement: '1 per 8 persons' },
  { standard: 'Kitchen', requirement: 'Required' },
  { standard: 'Dining room', requirement: '1.4 sq m per person (for 1/3 of residents)' },
  { standard: 'First-aid room', requirement: 'With nurse' },
  { standard: 'Laundry', requirement: 'Required' },
  { standard: 'Prayer room', requirement: 'Required' },
  { standard: 'Pest control', requirement: 'Required' },
  { standard: 'Distance from family areas', requirement: '>=5 km' },
  { standard: 'Distance from pollution sources', requirement: 'Away from pollution' },
]

export const constructionLegalProtections = [
  'Federal Decree-Law No. 33/2021 (as amended 2024)',
  'Binding MoHRE dispute resolution',
  'Penalties up to AED 1,000,000 for violations',
  'Protection against discrimination and harassment including based on gender',
]

export const constructionPersistentIssues = [
  'Wage theft in construction sector',
  'Passport confiscation',
  'Excessive overtime in dangerous heat',
  'Documented on UAE renewable energy projects (HRW, Nov 2024)',
]

// ============================================================================
// SECTION 12: OCCUPATIONAL HEALTH & SAFETY
// ============================================================================

export interface OHSEmployerObligation {
  number: number
  obligation: string
}

export const ohsLegalFramework = [
  'Federal Decree-Law No. 33/2021',
  'Cabinet Resolution No. 33/2022 concerning work injuries and occupational diseases',
  'ILO Convention No. 81 (Labour Inspection) ratified in 1982',
]

export const ohsEmployerObligations: OHSEmployerObligation[] = [
  { number: 1, obligation: 'Provide safe and appropriate work environment' },
  { number: 2, obligation: 'Provide protective equipment and clothing' },
  { number: 3, obligation: 'Conduct periodic safety evaluations' },
  { number: 4, obligation: 'Post instructional boards with awareness materials' },
  { number: 5, obligation: 'Provide training to avoid workplace risks' },
  { number: 6, obligation: 'Report injuries/deaths within 48 hours' },
  { number: 7, obligation: 'Implement monitoring systems (for 50+ worker establishments)' },
  { number: 8, obligation: 'Maintain occupational hazard records (5 years after worker departure)' },
  { number: 9, obligation: 'Pay compensation within 10 days of medical report' },
  { number: 10, obligation: 'Cover full cost of medical treatment for work injuries' },
  { number: 11, obligation: 'Implement hot work environment restrictions (midday break)' },
  { number: 12, obligation: 'Conduct medical examinations every 6 months' },
]

export const uaeWorkplaceSafetyMarket = {
  revenue2024: 'USD 399.0 million',
  projected2030: 'USD 885.3 million',
  source: 'Grand View Research',
}

export const ohsEnforcement = {
  inspections: 'MoHRE inspections',
  technology: 'AI and data analytics for breach detection',
  inspections2025: '695,000+ inspections in 2025',
}

// ============================================================================
// SECTION 13: WORK INJURY & OCCUPATIONAL DISEASE COMPENSATION
// ============================================================================

export interface WorkInjuryCompensationType {
  type: string
  coverage: string
}

export const workInjuryFramework = {
  legalBasis: 'Cabinet Resolution No. 33 of 2022',
  types: [
    { type: 'Medical expenses', coverage: 'Full coverage until recovery or disability confirmed' },
    { type: 'Wages during treatment', coverage: 'Full wages up to 6 months; half wages for additional 6 months' },
    { type: 'Permanent disability', coverage: 'Compensation based on disability percentage' },
    { type: 'Death', coverage: 'Up to ~USD 54,451 (AED ~200,000)' },
  ] as WorkInjuryCompensationType[],
  employerObligation: 'Must inform medical facility as soon as aware of work injury or occupational disease',
  treatment: 'Free medical treatment until recovery or proven disability; all medical facilities must report work injuries and occupational diseases to Ministry periodically',
}

export const workersCompensationMarket = {
  valuedAt: 'USD 750 million (5-year historical analysis)',
  source: 'Ken Research',
}

// ============================================================================
// SECTION 14: LABOR INSPECTIONS
// ============================================================================

export interface LaborInspectionMetric {
  metric: string
  figure: string
  changeVs2024?: string
}

export interface LaborInspectionFramework {
  item: string
  details: string
}

export const laborInspectionScale: LaborInspectionMetric[] = [
  { metric: 'Total inspections', figure: '695,000+', changeVs2024: '+4%' },
  { metric: 'Joint campaigns with federal entities', figure: '3,000+', changeVs2024: '' },
  { metric: 'Compliance increase', figure: '+34%', changeVs2024: '' },
  { metric: 'Recorded violations', figure: '-13%', changeVs2024: '' },
  { metric: 'Non-compliant accommodation violations', figure: '-30%', changeVs2024: '' },
  { metric: 'Fake Emiratization cases', figure: '-62%', changeVs2024: '' },
  { metric: 'Cases referred to public prosecution', figure: '2,600', changeVs2024: '' },
]

export const laborInspectionFramework: LaborInspectionFramework[] = [
  { item: 'Legal basis', details: 'Federal Law No. 8 of 1980; ILO Convention No. 81 ratified 1982' },
  { item: 'NOT ratified', details: 'Convention No. 129 (Labour Inspection in Agriculture)' },
  { item: 'Structure', details: 'Headquarters in Dubai, second office in Abu Dhabi; three regional labour administrations' },
  { item: 'Excluded sectors', details: 'Domestic workers, agricultural workers, public sector, armed forces, police, security; Free zones operate under own laws' },
]

export const laborInspectionTechnology = [
  'Digital analytics and smart monitoring systems',
  'AI-powered governance systems for breach detection',
  'Data-driven risk indicators',
  'Detection of fake Emiratization attempts',
]

export const laborInspectionChallenges = [
  'No documented inspection policy/strategy',
  'Procedures not standardized across emirates',
  'Inspectors cannot independently impose sanctions',
  'High turnover due to lack of career development',
  'Under-reporting of occupational diseases widespread',
]

// ============================================================================
// SECTION 15: LABOR DISPUTE RESOLUTION
// ============================================================================

export interface DisputeResolutionStat {
  metric: string
  figure: string
  source: string
}

export const laborDisputeProcess = {
  legalBasis: 'Ministerial Resolution No. 47 of 2022',
  steps: [
    'Both parties file complaint with MoHRE',
    'Ministry attempts amicable settlement within 14 days',
    'If settlement fails, dispute referred to Labour Court',
  ],
  complaintDeadline: 'Within 30 days of breach of legal obligations',
}

export const laborDisputeStats: DisputeResolutionStat[] = [
  { metric: 'Dispute resolution rate', figure: '98.6%', source: 'MoHRE (Mar 2026)' },
  { metric: 'Disputes referred to judiciary', figure: '1.4%', source: 'MoHRE' },
  { metric: 'Amicably resolved', figure: '98%', source: 'MoHRE Labour Market Observatory' },
  { metric: 'Referred to judiciary', figure: '2%', source: 'MoHRE Labour Market Observatory' },
  { metric: 'Confidential complaints filed', figure: '17,000+', source: 'MoHRE (Jan 2026)' },
]

export const disputeResolutionAmendment = {
  law: 'Federal Decree-Law No. 20 of 2023',
  effect: 'Allows for more efficient resolution; contributed to amicable settlement increase',
}

export const domesticWorkerClaims = 'Claims must be filed within 3 months of employment termination'

export const expeditedProcess = {
  claimsLimit: 'AED 50,000: MoHRE issues final decision',
  complianceDisputes: 'Disputes over compliance with previous decisions: MoHRE issues binding ruling',
}

// ============================================================================
// SECTION 16: TRADE UNIONS & RIGHT TO STRIKE
// ============================================================================

export const tradeUnionStatus = {
  status: 'No independent trade unions in UAE',
  tradeUnions: 'Trade unions are currently unlawful',
  professionalAssociations: 'Professional associations have limited freedom to raise work-related concerns',
  futureNote: 'Some recent announcements suggest trade unions may receive legal recognition (future)',
}

export const rightToStrike = {
  status: 'Strikes are illegal in the UAE',
  legalBasis: 'UAE Labour Law expressly prohibits strike action',
  criminalRisk: 'Strike or union action can potentially amount to criminal behaviour under UAE and Dubai Penal Codes',
  resolutionBar: 'MoHRE Resolution bars workers from striking or closing facilities during labor disputes; All settlement methods must be exhausted first',
}

export const strikePenalties = [
  'Temporary suspension from duty',
  'Deportation for serious/repeated offences',
]

export const workerVoiceAlternatives = [
  'Employee representation measures introduced (2023)',
  'End-of-service savings scheme (alternative to gratuity)',
]

// ============================================================================
// SECTION 17: WORKER REPRESENTATION ALTERNATIVES
// ============================================================================

export const workerRepresentationMechanisms = {
  officialMechanisms: [
    'Professional associations with limited voice on work-related issues',
    'Employee representation measures facilitating workplace input (introduced 2023)',
    'Alternative End-of-Service Benefits Scheme (employer-sponsored savings)',
  ],
  keyLimitation: [
    'No independent trade unions',
    'No collective bargaining rights (Convention No. 87 and No. 98 NOT ratified)',
  ],
}

// ============================================================================
// SECTION 18: EMIRATIZATION POLICY
// ============================================================================

export interface NafisAchievement {
  metric: string
  figure: string
  growth?: string
}

export interface EmiratizationQuota {
  companySize: string
  requirement: string
  fine: string
}

export const nafisProgramme = {
  launched: '2021',
  budget: 'AED 24 billion (USD 6.53 billion)',
  target: '75,000 Emiratis in private sector by 2025',
  extendedTo: '2040',
}

export const nafisAchievements: NafisAchievement[] = [
  { metric: 'Emiratis in private sector', figure: '171,000 (as of Dec 16, 2025)', growth: '+377% since Nafis launch' },
  { metric: 'Establishments employing Emiratis', figure: '29,000+', growth: '+320% since Nafis' },
  { metric: 'Emirati women employed', figure: '107,000', growth: '+530% since Nafis' },
  { metric: 'Nafis targets achieved', figure: '92% by 2025', growth: 'Originally targeted for 2026' },
]

export const emiratiEmploymentJune2025 = '152,000 Emiratis employed across more than 29,000 companies (as of June 30, 2025)'

export const emiratizationQuotas2025: EmiratizationQuota[] = [
  { companySize: '50+ employees', requirement: '8% Emiratization rate', fine: 'Dh108,000 per Emirati not hired' },
  { companySize: '20-49 employees (high-growth sectors)', requirement: 'At least 1 Emirati', fine: 'Dh108,000 per Emirati not hired' },
  { companySize: 'Companies with higher rates', requirement: 'Must increase by 1% on June 30 each year', fine: 'Variable' },
]

export const minimumSalaryEmiratis = {
  amount: 'AED 6,000/month effective January 1, 2026',
  existingEmployees: 'employers must adjust by June 30, 2026',
  nonCompliance: 'Exclusion from Emiratization quotas, suspension of work permits',
}

export const emiratiIncentives = [
  'Dh7,000/month salary top-up from government',
  'Emiratization Partners Club: up to 80% discount on ministry fees',
  'Priority access in federal procurement for compliant companies',
]

export const emiratiChallenges = [
  'Social stigma toward private sector employment',
  '2 out of 3 Emiratis in private sector considering return to government',
  '69% of graduates find private sector less stable',
  'Wage gap vs government sector (up to 40% less in Abu Dhabi)',
  'Public backlash when sandwich maker job posted for Emiratis (public prosecutor investigation launched)',
]

export const saudComparison = 'Saudis comprise roughly 23% of private sector labor force in Saudi Arabia'

// ============================================================================
// SECTION 19: ILO COMPLIANCE & CONVENTIONS
// ============================================================================

export interface ILOConventionRatified {
  convention: string
  name: string
  ratificationYear: string
}

export interface ILOConventionNotRatified {
  convention: string
  name: string
  reason: string
}

export const iloConventionsRatified: ILOConventionRatified[] = [
  { convention: 'C29', name: 'Forced Labour Convention, 1930', ratificationYear: '1982' },
  { convention: 'C105', name: 'Abolition of Forced Labour Convention, 1957', ratificationYear: '1997' },
  { convention: 'C100', name: 'Equal Remuneration Convention, 1951', ratificationYear: '2001' },
  { convention: 'C111', name: 'Discrimination (Employment & Occupation) Convention, 1958', ratificationYear: '2001' },
  { convention: 'C138', name: 'Minimum Age Convention, 1973', ratificationYear: '1998' },
  { convention: 'C182', name: 'Worst Forms of Child Labour Convention, 1999', ratificationYear: '2004' },
  { convention: 'P029', name: 'Protocol of 2014 to Forced Labour Convention (C29)', ratificationYear: 'January 15, 2026' },
  { convention: 'C156', name: 'Workers with Family Responsibilities Convention, 1981', ratificationYear: '2001' },
  { convention: 'C159', name: 'Vocational Rehabilitation & Employment (Disabled Persons) Convention, 1983', ratificationYear: '2000' },
]

export const protocolC29 = {
  ratified: 'January 15, 2026',
  significance: '63rd country worldwide; second in GCC (after Saudi Arabia)',
  entersIntoForce: 'January 15, 2027 (one year after deposit)',
}

export const ratificationRequirements = [
  'Adopt and implement national policy and plan of action to suppress forced labour',
  'Develop policy in consultation with employers\' and workers\' organizations',
  'Prevent forced labour through awareness campaigns',
  'Strengthen labor inspection',
  'Protect migrant workers during recruitment',
  'Ensure victims access remedies and compensation',
  'Cooperate internationally',
]

export const iloConventionsNotRatified: ILOConventionNotRatified[] = [
  { convention: 'C87', name: 'Freedom of Association & Protection of Right to Organize', reason: 'Trade unions prohibited' },
  { convention: 'C98', name: 'Right to Organise & Collective Bargaining', reason: 'Collective bargaining prohibited' },
  { convention: 'C129', name: 'Labour Inspection in Agriculture', reason: 'Not ratified' },
]

export const otherGaps = [
  'UAE not party to ICCPR (International Covenant on Civil and Political Rights)',
  'UAE not party to ICESCR (International Covenant on Economic, Social and Cultural Rights)',
  'Universal Periodic Review is primary accountability mechanism',
]

// ============================================================================
// SECTION 20: LABOR MARKET SEGMENTATION BY NATIONALITY
// ============================================================================

export interface NationalitySegment {
  nationalityGroup: string
  typicalSectors: string
}

export const dualLaborMarket = {
  naturals: 'Predominantly public sector; privileged wages; ~11% of population',
  expatriates: '~89% of population; highly segmented by nationality and skill level',
}

export const nationalityBasedSegmentation: NationalitySegment[] = [
  { nationalityGroup: 'Western expatriates (US, UK, Europe)', typicalSectors: 'Finance, engineering, management, senior positions' },
  { nationalityGroup: 'South Asian (India, Bangladesh, Nepal, Pakistan, Sri Lanka)', typicalSectors: 'Manual labor, services, construction, domestic work' },
  { nationalityGroup: 'Filipino', typicalSectors: 'Domestic work, healthcare, services' },
]

export const academicFindings = [
  '"The UAE\'s dual labour market is segmented by citizenship, privileging Emiratis with high public-sector wages. Government interference distorts the labor market."  LSE (July 2024)',
  '"High-paying industries, such as finance and engineering, tend to hire more Western expatriates, while lower-paying sectors, such as manual labor hire South Asian workers."  IJAEMS (2025)',
  '"Workers from Bangladesh, India, Pakistan and Philippines are the lowest paid, and they are also the majority of labor force in the UAE."  Zayed University',
]

export const genderSegmentation = {
  womenInLeadership: '17.4%',
  womenInSkilledWorkforce: '45.8%',
  femaleEmiratization: '530% growth since Nafis launch',
}

// ============================================================================
// SECTION 21: GIG ECONOMY & NON-STANDARD WORK
// ============================================================================

export const gigEconomyLegalStatus = {
  selfEmployedRights: 'Self-employed contractors have fewer rights than employees',
  classificationImpact: 'Classification as contractor vs employee determines access to labor law protections',
  uaeFramework: 'UAE\'s evolving legal framework provides "greater autonomy and mobility" for remote and gig workers',
}

export const gigEconomyKeyIssues = [
  '"A self-employed contractor does not have the same rights, benefits and protections as an \'employee\'  great for the gig economy company, but not so for the worker"  Tamimi Law',
  'Workmen compensation being extended to some gig workers',
  'Unemployment insurance applicable to some gig workers',
  'Regulatory framework evolving (2025-2026)',
]

export const gigEconomy2025Changes = [
  'More rigorous classification rules',
  'Ensuring workers performing employee-like tasks receive proper benefits and protections',
  'Additional regulations for gig worker protection including expanded health insurance',
]

// ============================================================================
// SECTION 22: SUPPLY CHAIN DUE DILIGENCE & FORCED LABOR
// ============================================================================

export interface SupplyChainRating {
  metric: string
  rating: string
  source: string
}

export const supplyChainStatus: SupplyChainRating[] = [
  { metric: 'Government action on supply chains', rating: '0/100', source: 'Walk Free' },
  { metric: 'Mandatory due diligence law', rating: 'NOT enacted', source: 'Walk Free' },
  { metric: 'US List of Goods Produced by Child Labor or Forced Labor', rating: 'UAE NOT on list', source: 'Due Diligence Design' },
]

export const walkFreeAssessment = [
  '"The government has not enacted legislation to tackle modern slavery in supply chains"',
  'Government and business supply chains rating: 0/100',
]

export const renewableEnergyFindings = [
  'Migrant workers in UAE renewable energy supply chains (solar, wind) suffered "egregious migrant worker abuse"',
  'Exploitative recruitment fees',
  'Wage theft',
  'Forced overtime in dangerous heat',
]

export const uaeGoldSupplyChains = [
  'Child labor documented in Dubai gold supply chains (HRW, 2016)',
]

export const tipReport2025Indicators = [
  'Retention of identity documents',
  'Withholding of wages',
  'Excessive overtime',
  'Restriction of movement',
  'Deception',
  'Debt bondage',
  'Abusive working and living conditions',
]

export const riskConcentrationAreas = [
  'Domestic work',
  'Hospitality',
  'Online scam operations',
  'Sex trafficking',
  'Service sector',
  'UAE as trafficking hub (recruiters sell migrants for transport to other Gulf countries)',
]

// ============================================================================
// SECTION 23: PASSPORT CONFISCATION
// ============================================================================

export const passportConfiscationLegalStatus = {
  status: 'Explicitly prohibited under UAE labor law',
  detail: 'Act of confiscating passports is illegal and against UAE law',
  exception: 'Only time passport can be confiscated: by court order when travel ban issued for crime or investigation',
}

export interface PassportConfiscationDocumented {
  finding: string
  evidence: string
  source: string
  date?: string
}

export const passportConfiscationReality: PassportConfiscationDocumented[] = [
  { finding: 'Practice documented', evidence: 'Employers sometimes confiscate workers\' passports', source: 'Business Human Rights' },
  { finding: 'Migrant workers treated unfairly', evidence: 'Consistently; passports confiscated; movement restricted', source: 'Harvard International Review', date: 'Jul 2022' },
  { finding: 'Jharkhand workers case (Feb 2026)', evidence: '14 workers stranded in Dubai; almost all had passports confiscated', source: 'FB Business Today' },
  { finding: 'Domestic worker law penalty', evidence: '500 AED fine for employers', source: 'TIP Report 2025' },
]

export const passportConfiscationSentiment = 'Negative  law on books but enforcement gaps persist'

// ============================================================================
// SECTION 24: RECRUITMENT AGENCY REGULATION
// ============================================================================

export interface RecruitmentAgencyCondition {
  number: number
  condition: string
}

export interface RecruitmentAgencyProhibition {
  prohibition: string
  penalty?: string
}

export const recruitmentAgencyLegalFramework = {
  ministerialDecree: 'Ministerial Decree No. 51 of 2022: Rules and regulations for recruitment agencies',
  domesticWorkers: 'Federal Decree-Law No. 9 of 2022: Domestic worker recruitment',
}

export const recruitmentAgencyConditions: RecruitmentAgencyCondition[] = [
  { number: 1, condition: 'Licensed by MoHRE' },
  { number: 2, condition: 'Good standing requirement' },
  { number: 3, condition: 'Compliance with employment intermediation rules' },
  { number: 4, condition: 'Fee transparency' },
  { number: 5, condition: 'Worker protection compliance' },
  { number: 6, condition: 'Reporting obligations' },
]

export const recruitmentAgencyProhibitions: RecruitmentAgencyProhibition[] = [
  { prohibition: 'Agencies cannot charge workers recruitment fees' },
  { prohibition: 'Only licensed recruitment offices can recruit domestic workers' },
  { prohibition: 'Recruiting minors', penalty: 'AED 50,000-200,000 fine' },
  { prohibition: 'False information', penalty: 'AED 20,000-100,000 fine + up to 6 months imprisonment' },
]

// ============================================================================
// SECTION 25: LABOR LAW AWARENESS
// ============================================================================

export const laborLawAwareness = {
  keyFinding: '"Many employees in the UAE don\'t realise how much protection the Labour Law actually provides"  LinkedIn (Jan 2026)',
}

export const uaeLaborLawInitiatives = [
  'Awareness toolkit for employers on labour rights and obligations (launched August 2025)',
  'Guidance services in 17 languages benefiting 9 million workers',
  '"Dear Worker" portal (MoHRE)',
  'Mandatory guidance programs: 100% completion rate by end of 2025',
]

export const fixedTermContractsReform = [
  '"The concept of unlimited term contracts has been removed and only fixed term contracts (of up to 3 years) can be issued"  Tamimi Law',
]

export const employerObligations = [
  'Cannot discriminate against workers in jobs involving similar tasks',
  'Must inform workers of contract terms',
  'Federal Decree-Law No. 33/2021 provides framework',
]

// ============================================================================
// SECTION 26: NATIONAL EMPLOYMENT STRATEGY 2031 & AI INTEGRATION
// ============================================================================

export interface AIQuote {
  source: string
  quote: string
}

export interface LaborMarketObservatoryFocus {
  focus: string
}

export const nationalEmploymentStrategy = {
  purpose: 'Support government\'s efforts to build a knowledge-based economy',
}

export const aiLaborMarketRecognition: AIQuote[] = [
  { source: 'ILO Chief Gilbert F. Houngbo (Feb 2026)', quote: '"We see how the UAE government is using AI to carry out deep analysis and prediction of the labour market, ensuring that policy decision makers have better data"' },
  { source: 'World Government Summit (Feb 2026)', quote: 'UAE\'s AI-driven labor market policies "seen as global model"' },
]

export const aiIntegrationGoals = {
  target: '100% reliance on AI by 2031',
  fullAIReliance: 'Full AI reliance in labor market services',
  labourMarketObservatory: 'Labour Market Observatory with AI-powered analytics',
}

export const laborMarketObservatoryFocusAreas: LaborMarketObservatoryFocus[] = [
  { focus: 'Social Protection and Well-Being Assurance' },
  { focus: 'Cutting-Edge Inspection and Monitoring Solutions' },
  { focus: 'Progressive Workforce Interaction Channels' },
]

export const laborMarketObservatoryKeyMetrics = {
  complaintsPer100Workers: '3',
  amicablyResolved: '98%',
  referredToJudiciary: '2%',
  complaintsTracked: 'More than 17,000',
}

export const nationalAIStrategyGoals = [
  'Attract and train talent for future jobs enabled by AI',
  'Bring world-leading research capability to work with target industries',
  'Enhance data infrastructure for AI development',
]

// ============================================================================
// SECTION 27: KEY STATISTICS DASHBOARD
// ============================================================================

export interface DashboardWorkforceMetric {
  metric: string
  figure: string
  source: string
}

export interface DashboardProtectionCoverage {
  protection: string
  coverage: string
  source: string
}

export interface DashboardEmiratizationMetric {
  metric: string
  figure: string
  growth?: string
}

export interface DashboardEnforcementMetric {
  metric: string
  figure: string
  change?: string
}

export interface DashboardILORightsMetric {
  metric: string
  figure: string
}

export interface DashboardWagesCompensationMetric {
  metric: string
  figure: string
}

export interface DashboardMiddayBreakMetric {
  metric: string
  figure: string
}

export const dashboardWorkforceMetrics: DashboardWorkforceMetric[] = [
  { metric: 'Total population', figure: '9,890,000', source: 'Walk Free' },
  { metric: 'Migrant workers', figure: '8.7 million (88%)', source: 'ILO, HRW' },
  { metric: 'Foreign workers % of workforce', figure: '92.4%', source: 'ILO (2018)' },
  { metric: 'Workforce growth 2025', figure: '12.4%', source: 'MoHRE' },
  { metric: 'Youth (18-35) in workforce', figure: '54.9%', source: 'MoHRE' },
  { metric: 'Total labor force (2024)', figure: '7,090,447', source: 'World Bank' },
]

export const dashboardProtectionCoverage: DashboardProtectionCoverage[] = [
  { protection: 'Wage Protection System', coverage: '99%+', source: 'MoHRE/u.ae' },
  { protection: 'Unemployment insurance', coverage: '83-90%', source: 'MoHRE/Gulf Today' },
  { protection: 'Health insurance starting from', coverage: 'AED 320', source: 'MoHRE' },
  { protection: 'Labor complaints resolved amicably', coverage: '98%', source: 'MoHRE' },
]

export const dashboardEmiratizationMetrics: DashboardEmiratizationMetric[] = [
  { metric: 'Emiratis in private sector', figure: '171,000', growth: '+377% since Nafis' },
  { metric: 'Establishments with Emiratis', figure: '29,000+', growth: '+320%' },
  { metric: 'Emirati women in private sector', figure: '107,000', growth: '+530%' },
  { metric: 'Nafis budget', figure: 'AED 24 billion', growth: undefined },
]

export const dashboardEnforcementMetrics: DashboardEnforcementMetric[] = [
  { metric: 'Labor inspections (2025)', figure: '695,000+', change: '+4%' },
  { metric: 'Compliance improvement', figure: '+34%', change: undefined },
  { metric: 'Violations reduction', figure: '-13%', change: undefined },
  { metric: 'Fake Emiratization cases', figure: '-62%', change: undefined },
  { metric: 'Labor dispute resolution', figure: '98.6%', change: undefined },
]

export const dashboardILORightsMetrics: DashboardILORightsMetric[] = [
  { metric: 'ILO conventions ratified', figure: '9 (6 core)' },
  { metric: 'Modern slavery prevalence (per 1,000)', figure: '13.4 (7th globally)' },
  { metric: 'People in modern slavery', figure: '132,000' },
  { metric: 'Protocol to Forced Labour ratified', figure: 'Jan 15, 2026' },
]

export const dashboardWagesCompensationMetrics: DashboardWagesCompensationMetric[] = [
  { metric: 'Emirati minimum wage', figure: 'AED 6,000/month (from Jan 2026)' },
  { metric: 'Expatriate minimum wage', figure: 'NONE' },
  { metric: 'Unemployment benefit max (Cat 1)', figure: 'AED 10,000/month' },
  { metric: 'Unemployment benefit max (Cat 2)', figure: 'AED 20,000/month' },
  { metric: 'End-of-service gratuity (1-5 yrs)', figure: '21 days/year' },
  { metric: 'End-of-service gratuity (6+ yrs)', figure: '30 days/year' },
  { metric: 'Work injury: full wages', figure: 'Up to 6 months' },
  { metric: 'Work injury: half wages', figure: 'Next 6 months' },
  { metric: 'Death compensation', figure: '~USD 54,451' },
]

export const dashboardMiddayBreakMetrics: DashboardMiddayBreakMetric[] = [
  { metric: 'Ban period', figure: 'June 15  Sept 15' },
  { metric: 'Hours', figure: '12:30 PM  3:00 PM' },
  { metric: 'Compliance rate', figure: '99%+' },
  { metric: 'Penalty per worker', figure: 'AED 5,000' },
  { metric: 'Maximum penalty', figure: 'AED 50,000' },
]

// ============================================================================
// SECTION 28: SENTIMENT & SOURCE CREDIBILITY ANALYSIS
// ============================================================================

export interface SourceCategory {
  category: string
  sources: string
  credibility: string
}

export interface SentimentByTopic {
  topic: string
  sentiment: string
  trend: string
}

export const sourceCategories: SourceCategory[] = [
  { category: 'Government (High)', sources: 'u.ae, MoHRE, UAE Central Bank, UAE legislation portal', credibility: 'Very High  official data' },
  { category: 'International Organizations (High)', sources: 'ILO, World Bank', credibility: 'High  authoritative' },
  { category: 'NGOs  Credible', sources: 'HRW, Walk Free, Amnesty International', credibility: 'High  well-documented' },
  { category: 'Media  Major', sources: 'Gulf News, Khaleej Times, The National', credibility: 'High  verifiable' },
  { category: 'Legal/Business (Medium-High)', sources: 'Tamimi Law, Pinsent Masons, KPMG, DLA Piper', credibility: 'High  professional sources' },
  { category: 'Industry Associations', sources: 'Chambers.com, Croner', credibility: 'Medium  may have bias' },
]

export const sentimentByTopic: SentimentByTopic[] = [
  { topic: 'Workforce growth', sentiment: 'Positive', trend: 'Improving' },
  { topic: 'Emiratization', sentiment: 'Positive', trend: 'Strong progress' },
  { topic: 'Labor inspections', sentiment: 'Positive', trend: 'Compliance rising' },
  { topic: 'Dispute resolution', sentiment: 'Positive', trend: '98.6% resolution claimed' },
  { topic: 'WPS coverage', sentiment: 'Positive', trend: '99%+ enrolled' },
  { topic: 'Kafala reform', sentiment: 'Mixed', trend: 'Law reformed but enforcement gap' },
  { topic: 'Wage theft', sentiment: 'Negative', trend: 'Persistent despite WPS' },
  { topic: 'Modern slavery', sentiment: 'Negative', trend: '132,000 in slavery' },
  { topic: 'Right to strike', sentiment: 'Negative', trend: 'Prohibited' },
  { topic: 'Trade unions', sentiment: 'Negative', trend: 'Prohibited' },
  { topic: 'Supply chain due diligence', sentiment: 'Negative', trend: '0/100 government action' },
  { topic: 'Passport confiscation', sentiment: 'Negative', trend: 'Still documented' },
  { topic: 'Minimum wage (expatriates)', sentiment: 'Negative', trend: 'Nonexistent' },
]

export const credibilityNotes = [
  'Government statistics (MoHRE) generally optimistic  cross-reference with NGO reporting',
  'ILO provides authoritative international framework',
  'Walk Free data based on 2021 data  may be understating current situation',
  'HRW and ADHRB provide ground-truth documentation of enforcement gaps',
]

// ============================================================================
// SECTION 29: UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevancePoint {
  point: string
}

export const uaeRelevanceWhy = [
  '89% migrant workforce  labor market is the backbone of UAE economy',
  'Host of COP28  international scrutiny on labor practices',
  'Vision 2030/2031  knowledge-based economy requires workforce transformation',
  'Diversification away from oil  private sector development depends on labor market efficiency',
  'Reputation risk  modern slavery rating, human rights scrutiny',
  'Emiratization success  precedent for other Gulf states',
  'ILO Protocol ratification (Jan 2026)  new international obligations',
  'AI leadership aspiration  labor market governance as model',
]

export const keyTension = {
  reform: 'Significant legislative reforms 2021-2026 (fixed-term contracts, WPS upgrade, unemployment insurance, ILO protocol, domestic worker law)',
  enforcement: 'Laws on books but documented abuses persist (kafala, passport confiscation, wage theft)',
  international: 'COP28, ILO scrutiny, human rights organizations',
  domestic: 'Economic growth, competitiveness, Emiratization',
}

export const policyTrajectory = {
  movingToward: 'Fixed-term contracts, AI monitoring, enhanced WPS, unemployment insurance, alternative gratuity scheme',
  resistancePoints: 'Trade union rights, minimum wage for expatriates, supply chain due diligence legislation',
  enforcementChallenge: 'Large informal workforce, domestic worker monitoring, free zone differentiation',
}

// ============================================================================
// MASTER URL INDEX
// ============================================================================

export interface MasterURL {
  number: number
  url: string
  source: string
  keyData: string
}

export const masterURLIndex: MasterURL[] = [
  { number: 1, url: 'https://www.ilo.org/regions-and-countries/arab-states/united-arab-emirates', source: 'ILO UAE', keyData: '8.7M migrant workers, 9 ILO conventions, member since 1972' },
  { number: 2, url: 'https://www.walkfree.org/global-slavery-index/country-studies/united-arab-emirates/', source: 'Walk Free', keyData: '132,000 in modern slavery, 13.4/1,000 prevalence, supply chain 0/100' },
  { number: 3, url: 'https://gulfnews.com/uae/government/uae-workforce-jumps-124-in-2025-as-new-firms-surge-mohre-says-1.500416665', source: 'Gulf News', keyData: '12.4% workforce growth, 171,000 Emiratis, 377% growth' },
  { number: 4, url: 'https://gulfnews.com/uae/labour-violations-drop-in-the-uae-find-out-how-1.500477402', source: 'Gulf News', keyData: '695,000 inspections, 34% compliance increase, 13% violations drop' },
  { number: 5, url: 'https://www.hrw.org/news/2023/11/21/uae-migrant-worker-abuses-linked-broader-climate-harms', source: 'HRW', keyData: 'Wage theft, forced overtime, renewable energy sector' },
  { number: 6, url: 'https://www.hrw.org/news/2023/12/03/questions-and-answers-migrant-worker-abuses-uae-and-cop28', source: 'HRW', keyData: 'COP28 context, 88% migrant, kafala abuses' },
  { number: 7, url: 'https://www.adhrb.org/2024/05/briefing-paper-migrant-rights-and-the-kafala-system-in-the-united-arab-emirates/', source: 'ADHRB', keyData: 'Kafala reform gaps, 88% migrant, passport confiscation' },
  { number: 8, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', source: 'u.ae', keyData: 'Gratuity calculation, alternative scheme, 14-day payment' },
  { number: 9, url: 'https://u.ae/en/information-and-services/jobs/insurance/unemployment-insurance-scheme', source: 'u.ae', keyData: 'ILOE eligibility, premiums, 60% compensation' },
  { number: 10, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers', source: 'u.ae', keyData: 'Federal Decree-Law No. 9/2022, 19 occupations' },
  { number: 11, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-accommodation', source: 'u.ae', keyData: '3 sq m/person, 50+ workers threshold' },
  { number: 12, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/work-injury-compensation-in-the-uae', source: 'u.ae', keyData: 'Full wages 6 months, half wages next 6' },
  { number: 13, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/working-hours', source: 'u.ae', keyData: '8 hours/day, 48/week, 2 hours max OT' },
  { number: 14, url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-dispute', source: 'u.ae', keyData: '14-day resolution, amicable settlement' },
  { number: 15, url: 'https://gulfbusiness.com/en/2025/uae/uae-wage-new-wps-benchmark-for-digital-payroll/', source: 'Gulf Business', keyData: '99%+ WPS coverage, AED 35B monthly transfers' },
  { number: 16, url: 'https://gulfbusiness.com/en/2025/industry/midday-break-in-uae-heres-what-companies-need-to-know/', source: 'Gulf Business', keyData: 'Dh5,000-50,000 penalties, 99%+ compliance' },
  { number: 17, url: 'https://www.gulftoday.ae/news/2026/02/25/unemployment-insurance-in-uae-achieves-90-worker-registration-dhs350-million-paid-out', source: 'Gulf Today', keyData: '90% registration, AED 350M paid out' },
  { number: 18, url: 'https://duediligence.design/uae-ratifies-the-ilo-2014-protocol-to-the-forced-labour-convention/', source: 'Due Diligence Design', keyData: 'Jan 15, 2026 ratification, 63rd country' },
  { number: 19, url: 'https://www.mohre.gov.ae/en/media-center/news/31/12/2025/mohre-raises-minimum-wage-for-emiratis-in-the-private-sector-to-aed-6000-per-month-effective-1', source: 'MoHRE', keyData: 'AED 6,000 from Jan 1, 2026' },
  { number: 20, url: 'https://www.csis.org/programs/projects/urban-transformations-mobility/kafala-countries-private-sector-emiratization', source: 'CSIS', keyData: '$6.5B allocated, social stigma challenges' },
  { number: 21, url: 'https://uaecabinet.ae/en/the-50-s-projects/second-set-of-projects-of-the-50-nafis', source: 'UAE Cabinet', keyData: 'Nafis AED 24B, 75,000 target' },
  { number: 22, url: 'https://observatory.mohre.gov.ae/en/uae-labour-market-priorities/progressive-workforce-interaction-channels', source: 'MoHRE Observatory', keyData: '98% resolved, 3 per 100 workers complaints' },
  { number: 23, url: 'https://www.worldgovernmentssummit.org/media-hub/news/detail/uae-s-ai-driven-labour-market-policies-seen-as-global-model-says-ilo-chief', source: 'World Government Summit', keyData: 'ILO chief praise, AI global model' },
  { number: 24, url: 'https://www.pinsentmasons.com/out-law/analysis/how-uae-employment-law-deals-with-strikes', source: 'Pinsent Masons', keyData: 'Strikes illegal, criminal penalty, deportation' },
  { number: 25, url: 'https://www.tamimi.com/law-update/new-uae-labour-law', source: 'Tamimi Law', keyData: 'Fixed-term only, key reforms' },
  { number: 26, url: 'https://manzilzen.com/guides/domestic-worker-law-uae', source: 'ManzilZen', keyData: 'Federal Decree-Law No. 9/2022 details' },
  { number: 27, url: 'https://chambers.com/articles/employment-of-domestic-workers-in-the-uae', source: 'Chambers', keyData: 'AED 50,000-200,000 recruitment fines' },
  { number: 28, url: 'https://ghafbenefits.com/en/insights/alternative-end-of-service-benefits-vs-traditional-gratuity/', source: 'Ghaf Benefits', keyData: '5.83%/8.33% contributions, providers' },
  { number: 29, url: 'https://www.bracewell.com/resources/new-mohre-guidance-on-the-uaes-alternative-end%E2%80%91of%E2%80%91service-benefits-scheme/', source: 'Bracewell', keyData: 'Alternative EOSB guidance' },
  { number: 30, url: 'https://gulfconstruction.org/uae-labour-accommodation-rules/', source: 'Gulf Construction', keyData: '3.5-4 sq m/person, accommodation standards' },
  { number: 31, url: 'https://mahadhrc.ae/labour-camp-regulations-uae-essential-checklist-2025/', source: 'Mahad HRC', keyData: '3 sq m/person, 8 per room, checklist' },
  { number: 32, url: 'https://eprints.lse.ac.uk/124359/1/MEC-series-89.pdf', source: 'LSE', keyData: 'Dual labour market, citizenship segmentation' },
  { number: 33, url: 'https://cdn.walkfree.org/content/uploads/2023/11/14130735/gsi-country-study-uae.pdf', source: 'Walk Free PDF', keyData: '132,000 modern slavery, vulnerability 40/100' },
  { number: 34, url: 'https://www.ilo.org/sites/default/files/2025-10/UAE_Employment_Environment_Factsheet_v5.pdf', source: 'ILO PDF', keyData: 'Employment environment factsheet' },
]

// ============================================================================
// REPORT METADATA
// ============================================================================

export const laborReportMetadata = {
  documentCompiled: '2026-04-27',
  dataSourced: 'Government portals, ILO, credible NGOs, and major media',
  statisticsNote: 'Statistics reflect latest available data at time of research',
  enrichedDate: '2026-04-27',
  researchFramework: 'Multi-source web search + official government data + ILO + NGO + media',
  queriesExecuted: '39 search queries | 36+ source pages fetched',
  confidenceLevel: 'High  Government sources (u.ae, MoHRE), ILO, credible NGOs (HRW, Walk Free, Amnesty)',
}

// ============================================================================
// EXPORTS - MAIN DATA OBJECT
// ============================================================================

export interface LaborEmploymentData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  workforceOverview: typeof workforceOverview
  workforceMetrics: typeof workforceMetrics
  migrantWorkerOrigins: typeof migrantWorkerOrigins
  remittanceData: typeof remittanceData
  totalLaborForce: typeof totalLaborForce
  iloContext: typeof iloContext
  kafalaDescription: typeof kafalaDescription
  kafalaLegislativeReforms: typeof kafalaLegislativeReforms
  uaeLawProhibitions: typeof uaeLawProhibitions
  kafalaPersistentAbuses: typeof kafalaPersistentAbuses
  governmentResponseRating: typeof governmentResponseRating
  vulnerableGroups: typeof vulnerableGroups
  wpsOverview: typeof wpsOverview
  wps2025Updates: typeof wps2025Updates
  wpsEffectiveness: typeof wpsEffectiveness
  wpsSources: typeof wpsSources
  wageTheftForms: typeof wageTheftForms
  wageTheftCases: typeof wageTheftCases
  wageTheftSentiment: typeof wageTheftSentiment
  emiratiMinimumWages: typeof emiratiMinimumWages
  nonComplianceConsequences: typeof nonComplianceConsequences
  expatriateMinimumWage: typeof expatriateMinimumWage
  minimumWageDebate: typeof minimumWageDebate
  traditionalGratuity: typeof traditionalGratuity
  voluntaryAlternativeEOSB: typeof voluntaryAlternativeEOSB
  gratuitySources: typeof gratuitySources
  iloeOverview: typeof iloeOverview
  iloeEligibility: typeof iloeEligibility
  iloeExcludedCategories: typeof iloeExcludedCategories
  iloePremiumStructure: typeof iloePremiumStructure
  iloeCompensation: typeof iloeCompensation
  iloePerformanceStats: typeof iloePerformanceStats
  iloeFines: typeof iloeFines
  iloeSubscriptionChannels: typeof iloeSubscriptionChannels
  middayBreakDetails: typeof middayBreakDetails
  middayBreakEmployerRequirements: typeof middayBreakEmployerRequirements
  middayBreakPenalties: typeof middayBreakPenalties
  middayBreakCompliance: typeof middayBreakCompliance
  middayBreakUpdates2025: typeof middayBreakUpdates2025
  standardWorkingHours: typeof standardWorkingHours
  overtimeRules: typeof overtimeRules
  overtimeKeyRules: typeof overtimeKeyRules
  workingHoursLegalBasis: typeof workingHoursLegalBasis
  domesticWorkerLaw: typeof domesticWorkerLaw
  domesticWorkerRights: typeof domesticWorkerRights
  domesticWorkerProhibitedActions: typeof domesticWorkerProhibitedActions
  domesticWorkerPassportConfiscationPenalty: typeof domesticWorkerPassportConfiscationPenalty
  domesticWorkerResignationRules: typeof domesticWorkerResignationRules
  domesticWorkerPrevalence: typeof domesticWorkerPrevalence
  domesticWorkerEnforcementChallenge: typeof domesticWorkerEnforcementChallenge
  constructionWorkingHours: typeof constructionWorkingHours
  accommodationStandards: typeof accommodationStandards
  constructionLegalProtections: typeof constructionLegalProtections
  constructionPersistentIssues: typeof constructionPersistentIssues
  ohsLegalFramework: typeof ohsLegalFramework
  ohsEmployerObligations: typeof ohsEmployerObligations
  uaeWorkplaceSafetyMarket: typeof uaeWorkplaceSafetyMarket
  ohsEnforcement: typeof ohsEnforcement
  workInjuryFramework: typeof workInjuryFramework
  workersCompensationMarket: typeof workersCompensationMarket
  laborInspectionScale: typeof laborInspectionScale
  laborInspectionFramework: typeof laborInspectionFramework
  laborInspectionTechnology: typeof laborInspectionTechnology
  laborInspectionChallenges: typeof laborInspectionChallenges
  laborDisputeProcess: typeof laborDisputeProcess
  laborDisputeStats: typeof laborDisputeStats
  disputeResolutionAmendment: typeof disputeResolutionAmendment
  domesticWorkerClaims: typeof domesticWorkerClaims
  expeditedProcess: typeof expeditedProcess
  tradeUnionStatus: typeof tradeUnionStatus
  rightToStrike: typeof rightToStrike
  strikePenalties: typeof strikePenalties
  workerVoiceAlternatives: typeof workerVoiceAlternatives
  workerRepresentationMechanisms: typeof workerRepresentationMechanisms
  nafisProgramme: typeof nafisProgramme
  nafisAchievements: typeof nafisAchievements
  emiratiEmploymentJune2025: typeof emiratiEmploymentJune2025
  emiratizationQuotas2025: typeof emiratizationQuotas2025
  minimumSalaryEmiratis: typeof minimumSalaryEmiratis
  emiratiIncentives: typeof emiratiIncentives
  emiratiChallenges: typeof emiratiChallenges
  saudComparison: typeof saudComparison
  iloConventionsRatified: typeof iloConventionsRatified
  protocolC29: typeof protocolC29
  ratificationRequirements: typeof ratificationRequirements
  iloConventionsNotRatified: typeof iloConventionsNotRatified
  otherGaps: typeof otherGaps
  dualLaborMarket: typeof dualLaborMarket
  nationalityBasedSegmentation: typeof nationalityBasedSegmentation
  academicFindings: typeof academicFindings
  genderSegmentation: typeof genderSegmentation
  gigEconomyLegalStatus: typeof gigEconomyLegalStatus
  gigEconomyKeyIssues: typeof gigEconomyKeyIssues
  gigEconomy2025Changes: typeof gigEconomy2025Changes
  supplyChainStatus: typeof supplyChainStatus
  walkFreeAssessment: typeof walkFreeAssessment
  renewableEnergyFindings: typeof renewableEnergyFindings
  uaeGoldSupplyChains: typeof uaeGoldSupplyChains
  tipReport2025Indicators: typeof tipReport2025Indicators
  riskConcentrationAreas: typeof riskConcentrationAreas
  passportConfiscationLegalStatus: typeof passportConfiscationLegalStatus
  passportConfiscationReality: typeof passportConfiscationReality
  passportConfiscationSentiment: typeof passportConfiscationSentiment
  recruitmentAgencyLegalFramework: typeof recruitmentAgencyLegalFramework
  recruitmentAgencyConditions: typeof recruitmentAgencyConditions
  recruitmentAgencyProhibitions: typeof recruitmentAgencyProhibitions
  laborLawAwareness: typeof laborLawAwareness
  uaeLaborLawInitiatives: typeof uaeLaborLawInitiatives
  fixedTermContractsReform: typeof fixedTermContractsReform
  employerObligations: typeof employerObligations
  nationalEmploymentStrategy: typeof nationalEmploymentStrategy
  aiLaborMarketRecognition: typeof aiLaborMarketRecognition
  aiIntegrationGoals: typeof aiIntegrationGoals
  laborMarketObservatoryFocusAreas: typeof laborMarketObservatoryFocusAreas
  laborMarketObservatoryKeyMetrics: typeof laborMarketObservatoryKeyMetrics
  nationalAIStrategyGoals: typeof nationalAIStrategyGoals
  dashboardWorkforceMetrics: typeof dashboardWorkforceMetrics
  dashboardProtectionCoverage: typeof dashboardProtectionCoverage
  dashboardEmiratizationMetrics: typeof dashboardEmiratizationMetrics
  dashboardEnforcementMetrics: typeof dashboardEnforcementMetrics
  dashboardILORightsMetrics: typeof dashboardILORightsMetrics
  dashboardWagesCompensationMetrics: typeof dashboardWagesCompensationMetrics
  dashboardMiddayBreakMetrics: typeof dashboardMiddayBreakMetrics
  sourceCategories: typeof sourceCategories
  sentimentByTopic: typeof sentimentByTopic
  credibilityNotes: typeof credibilityNotes
  uaeRelevanceWhy: typeof uaeRelevanceWhy
  keyTension: typeof keyTension
  policyTrajectory: typeof policyTrajectory
  masterURLIndex: typeof masterURLIndex
  laborReportMetadata: typeof laborReportMetadata
}

export const laborEmploymentData: LaborEmploymentData = {
  id: 'topic-2-18',
  sector: 'business',
  title: 'Labor & Employment',
  titleAr: ' ',
  description: 'Workforce demographics, Emiratization, wage protection, kafala reform, modern slavery, unemployment insurance, blue collar conditions',
  workforceOverview,
  workforceMetrics,
  migrantWorkerOrigins,
  remittanceData,
  totalLaborForce,
  iloContext,
  kafalaDescription,
  kafalaLegislativeReforms,
  uaeLawProhibitions,
  kafalaPersistentAbuses,
  governmentResponseRating,
  vulnerableGroups,
  wpsOverview,
  wps2025Updates,
  wpsEffectiveness,
  wpsSources,
  wageTheftForms,
  wageTheftCases,
  wageTheftSentiment,
  emiratiMinimumWages,
  nonComplianceConsequences,
  expatriateMinimumWage,
  minimumWageDebate,
  traditionalGratuity,
  voluntaryAlternativeEOSB,
  gratuitySources,
  iloeOverview,
  iloeEligibility,
  iloeExcludedCategories,
  iloePremiumStructure,
  iloeCompensation,
  iloePerformanceStats,
  iloeFines,
  iloeSubscriptionChannels,
  middayBreakDetails,
  middayBreakEmployerRequirements,
  middayBreakPenalties,
  middayBreakCompliance,
  middayBreakUpdates2025,
  standardWorkingHours,
  overtimeRules,
  overtimeKeyRules,
  workingHoursLegalBasis,
  domesticWorkerLaw,
  domesticWorkerRights,
  domesticWorkerProhibitedActions,
  domesticWorkerPassportConfiscationPenalty,
  domesticWorkerResignationRules,
  domesticWorkerPrevalence,
  domesticWorkerEnforcementChallenge,
  constructionWorkingHours,
  accommodationStandards,
  constructionLegalProtections,
  constructionPersistentIssues,
  ohsLegalFramework,
  ohsEmployerObligations,
  uaeWorkplaceSafetyMarket,
  ohsEnforcement,
  workInjuryFramework,
  workersCompensationMarket,
  laborInspectionScale,
  laborInspectionFramework,
  laborInspectionTechnology,
  laborInspectionChallenges,
  laborDisputeProcess,
  laborDisputeStats,
  disputeResolutionAmendment,
  domesticWorkerClaims,
  expeditedProcess,
  tradeUnionStatus,
  rightToStrike,
  strikePenalties,
  workerVoiceAlternatives,
  workerRepresentationMechanisms,
  nafisProgramme,
  nafisAchievements,
  emiratiEmploymentJune2025,
  emiratizationQuotas2025,
  minimumSalaryEmiratis,
  emiratiIncentives,
  emiratiChallenges,
  saudComparison,
  iloConventionsRatified,
  protocolC29,
  ratificationRequirements,
  iloConventionsNotRatified,
  otherGaps,
  dualLaborMarket,
  nationalityBasedSegmentation,
  academicFindings,
  genderSegmentation,
  gigEconomyLegalStatus,
  gigEconomyKeyIssues,
  gigEconomy2025Changes,
  supplyChainStatus,
  walkFreeAssessment,
  renewableEnergyFindings,
  uaeGoldSupplyChains,
  tipReport2025Indicators,
  riskConcentrationAreas,
  passportConfiscationLegalStatus,
  passportConfiscationReality,
  passportConfiscationSentiment,
  recruitmentAgencyLegalFramework,
  recruitmentAgencyConditions,
  recruitmentAgencyProhibitions,
  laborLawAwareness,
  uaeLaborLawInitiatives,
  fixedTermContractsReform,
  employerObligations,
  nationalEmploymentStrategy,
  aiLaborMarketRecognition,
  aiIntegrationGoals,
  laborMarketObservatoryFocusAreas,
  laborMarketObservatoryKeyMetrics,
  nationalAIStrategyGoals,
  dashboardWorkforceMetrics,
  dashboardProtectionCoverage,
  dashboardEmiratizationMetrics,
  dashboardEnforcementMetrics,
  dashboardILORightsMetrics,
  dashboardWagesCompensationMetrics,
  dashboardMiddayBreakMetrics,
  sourceCategories,
  sentimentByTopic,
  credibilityNotes,
  uaeRelevanceWhy,
  keyTension,
  policyTrajectory,
  masterURLIndex,
  laborReportMetadata,
}

export default laborEmploymentData
