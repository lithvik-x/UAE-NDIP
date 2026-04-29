/**
 * Education & Youth - Comprehensive Dashboard Data
 *
 * Complete data extracted from MD file: 2-11-education-youth-results.md
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
  queriesExecuted: 28,
  pagesFetched: 34,
  enrichmentDate: '2026-04-27',
  enrichmentSources: 'Web searches, official government sources, international assessments'
}

// ============================================================================
// SECTION 1: EDUCATION SYSTEM OVERVIEW
// ============================================================================

export interface EducationTier {
  tier: string
  stage: string
  ageRange: string
  years: string
}

export interface CurriculumOffering {
  curriculum: string
  numberOfSchools: number
  marketShare: string
}

export interface RegulatoryBody {
  emirate: string
  body: string
  fullName: string
}

export interface KeyStatistic {
  metric: string
  value: string
}

export const educationSystemOverview = {
  basicStructure: {
    law: 'Federal Law No. 11 of 1972 (revised 2006)',
    mandatoryAge: '6-14 (later extended to 18)',
    description: 'Comprehensive K-12 education system'
  },
  tiers: [
    { tier: 'KG', stage: 'Kindergarten', ageRange: 'Ages 4-5', years: '2 years' },
    { tier: 'Primary', stage: 'Cycle 1', ageRange: 'Ages 6-10', years: '5 years' },
    { tier: 'Preparatory', stage: 'Cycle 2', ageRange: 'Ages 11-14', years: '4 years' },
    { tier: 'Secondary', stage: 'Cycle 3', ageRange: 'Ages 14-18', years: '4 years' }
  ] as EducationTier[],
  keyStatistics2024: [
    { metric: 'Total schools (public + private)', value: '1,219+' },
    { metric: 'Total students', value: '~1,080,000' },
    { metric: 'Average class size', value: '22.5 students' },
    { metric: 'Average school size', value: '1,607 students' },
    { metric: 'Number of universities', value: '33+' },
    { metric: 'Higher education institutions', value: '100+' }
  ] as KeyStatistic[],
  curriculaOffered: [
    { curriculum: 'British (GCSE/GCE/IGCSE)', numberOfSchools: 151, marketShare: 'Largest segment' },
    { curriculum: 'American (AP/SAT)', numberOfSchools: 58, marketShare: 'Second largest' },
    { curriculum: 'International Baccalaureate (IB)', numberOfSchools: 53, marketShare: 'Growing' },
    { curriculum: 'Indian (CBSE/ICSE)', numberOfSchools: 20, marketShare: 'Significant expat market' },
    { curriculum: 'UAE National', numberOfSchools: 8, marketShare: 'Limited' },
    { curriculum: 'Other/Canadian/Australian', numberOfSchools: 31, marketShare: 'Niche' }
  ] as CurriculumOffering[],
  regulatoryBodies: [
    { emirate: 'Abu Dhabi', body: 'ADEK', fullName: 'Abu Dhabi Department of Education and Knowledge' },
    { emirate: 'Dubai', body: 'KHDA', fullName: 'Knowledge and Human Development Authority' },
    { emirate: 'Northern Emirates', body: 'MOE', fullName: 'Ministry of Education (federal)' }
  ] as RegulatoryBody[],
  regulatoryFramework: {
    ministryOfEducation: 'Federal policy, curriculum standards, teacher licensing',
    commissionForAcademicAccreditation: 'University accreditation',
    adek: 'Pre-school through Grade 12 in Abu Dhabi',
    khda: 'Pre-school through Grade 12 in Dubai'
  }
}

// ============================================================================
// SECTION 2: LITERACY RATES
// ============================================================================

export interface LiteracyRate {
  year: string
  rate: string
  source: string
}

export interface LiteracyComparison {
  metric: string
  uae: string
  regionalAverage: string
  globalAverage: string
}

export const literacyRates = {
  historicalProgression: [
    { year: '1975', rate: '~40%', source: 'World Bank' },
    { year: '2005', rate: '~90%', source: 'UNESCO' },
    { year: '2019', rate: '96%', source: 'u.ae' },
    { year: '2021', rate: '98%', source: 'Macrotrends' },
    { year: '2022', rate: '98.29%', source: 'UAE Government' },
    { year: '2024', rate: '98.81%', source: 'YCharts' },
    { year: '2025', rate: '99.6% (youth 15-24)', source: 'Gulf News/SDG Index' }
  ] as LiteracyRate[],
  keyFindings: {
    youthLiteracy: '99.6% - Ranked 1st globally (SDG 2025 Index)',
    adultLiteracy: '98.81% (2024)',
    unEducationIndex: '0.802 - Highest in Middle East',
    averageYearsOfSchooling: '13.36 years (2024)'
  },
  uaeVsRegional: [
    { metric: 'Adult Literacy', uae: '98.81%', regionalAverage: '~85%', globalAverage: '86.3%' },
    { metric: 'Youth Literacy', uae: '99.6%', regionalAverage: '~90%', globalAverage: '~90%' },
    { metric: 'Mean Years of Schooling', uae: '13.36', regionalAverage: '~10', globalAverage: '~12' }
  ] as LiteracyComparison[]
}

// ============================================================================
// SECTION 3: EDUCATION BUDGET & SPENDING
// ============================================================================

export interface BudgetAllocation {
  sector: string
  allocationAED: string
  allocationUSD: string
  percentOfTotal: string
}

export interface BudgetTrend {
  year: string
  educationBudgetAED: string
  educationAsPercent: string
}

export interface GdpExpenditure {
  year: string
  percentOfGDP: string
  globalAverage: string
}

export const educationBudget = {
  federalBudget2026: {
    education: { allocationAED: '16.9 billion', allocationUSD: '$4.6 billion', percentOfTotal: '18.3%' },
    publicServices: { allocationAED: '30.8 billion', allocationUSD: '$8.4 billion', percentOfTotal: '33.3%' },
    healthcare: { allocationAED: '5.7 billion', allocationUSD: '$1.55 billion', percentOfTotal: '6.2%' },
    totalFederalBudget: { allocationAED: '92.4 billion', allocationUSD: '$25.2 billion', percentOfTotal: '100%' }
  },
  historicalTrends: [
    { year: '2025', educationBudgetAED: '~11.4 billion', educationAsPercent: '~16%' },
    { year: '2026', educationBudgetAED: '16.9 billion', educationAsPercent: '~18.3%' }
  ] as BudgetTrend[],
  gdpExpenditure: [
    { year: '2021', percentOfGDP: '~3.5%', globalAverage: '~4.3%' }
  ] as GdpExpenditure[],
  budgetPriorities2026: [
    'AED 16.9 billion for education sector',
    '29% increase over 2025 budget',
    'Focus on digital transformation, AI education, teacher training'
  ],
  note: 'UAE spending as percentage of GDP is lower than OECD average (~5-6%) due to GDP size from oil revenues'
}

// ============================================================================
// SECTION 4: PISA/TIMSS INTERNATIONAL RANKINGS
// ============================================================================

export interface PisaScore {
  subject: string
  uaeScore: number
  globalAverage: number
  ranking: string
}

export interface PisaTrend {
  year: string
  math: number
  science: number
  reading: number
  overallRank: string
}

export interface PisaInsight {
  metric: string
  uae: string
  oecdAverage: string
}

export interface TimssResult {
  gradeLevel: string
  subject: string
  globalRanking: string
  score: string
  vsGlobalAverage: string
}

export interface DubaiPrivateTimss {
  gradeLevel: string
  subject: string
  globalRanking: string
  score: string
  globalAverage: string
  vsAverage: string
}

export const pisatimssRankings = {
  pisa2022Results: {
    description: 'Programme for International Student Assessment evaluates 15-year-olds in math, science, and reading every 3 years',
    scores: [
      { subject: 'Mathematics', uaeScore: 431, globalAverage: 489.89, ranking: '~43rd' },
      { subject: 'Science', uaeScore: 432, globalAverage: 485.00, ranking: '~43rd' },
      { subject: 'Reading', uaeScore: 417, globalAverage: 493.13, ranking: '~50th' },
      { subject: 'Overall Total', uaeScore: 1280, globalAverage: 1322.86, ranking: '43rd' }
    ] as PisaScore[]
  },
  pisaTrends: [
    { year: 'PISA 2018', math: 435, science: 434, reading: 432, overallRank: '~39th' },
    { year: 'PISA 2022', math: 431, science: 432, reading: 417, overallRank: '43rd' }
  ] as PisaTrend[],
  pisa2022Insights: [
    { metric: 'Students in top international quintile (socio-economic)', uae: '45%', oecdAverage: '~15%' },
    { metric: 'Top performers in math (Level 5 or 6)', uae: '5%', oecdAverage: '~9%' },
    { metric: 'Low performers in math (below Level 2)', uae: '30%', oecdAverage: '~24%' }
  ] as PisaInsight[],
  notableAchievements: [
    'Arab World Leader: Topped Arab world in financial literacy and creative thinking (PISA 2022)',
    'Dubai Private Schools: Ranked Top 14 globally in PISA mathematics, science, and reading'
  ],
  timss2023Results: {
    description: 'Trends in International Mathematics and Science Study assesses Grade 4 and Grade 8 students',
    uaeNationalPerformance: [
      { gradeLevel: 'Grade 4 (Year 5)', subject: 'Mathematics', globalRanking: '36th', score: '~510', vsGlobalAverage: '+7 pts' },
      { gradeLevel: 'Grade 8 (Year 9)', subject: 'Mathematics', globalRanking: '21st', score: '~530', vsGlobalAverage: '+52 pts' },
      { gradeLevel: 'Grade 4 (Year 5)', subject: 'Science', globalRanking: '33rd', score: '~520', vsGlobalAverage: '+26 pts' },
      { gradeLevel: 'Grade 8 (Year 9)', subject: 'Science', globalRanking: '21st', score: '~540', vsGlobalAverage: '+62 pts' }
    ] as TimssResult[],
    achievement: 'Ranked 1st in Arab World in TIMSS 2023',
    dubaiPrivateSchools: [
      { gradeLevel: 'Grade 4', subject: 'Mathematics', globalRanking: '7th', score: '564', globalAverage: '503', vsAverage: '+61 pts' },
      { gradeLevel: 'Grade 8', subject: 'Mathematics', globalRanking: '6th', score: '561', globalAverage: '478', vsAverage: '+83 pts' },
      { gradeLevel: 'Grade 4', subject: 'Science', globalRanking: '5th', score: '571', globalAverage: '494', vsAverage: '+77 pts' },
      { gradeLevel: 'Grade 8', subject: 'Science', globalRanking: '4th', score: '563', globalAverage: '478', vsAverage: '+85 pts' }
    ] as DubaiPrivateTimss[],
    sharjahPrivateSchools: [
      { gradeLevel: 'Grade 8', subject: 'Mathematics', globalRanking: '10th', score: '', vsGlobalAverage: '' },
      { gradeLevel: 'Grade 8', subject: 'Science', globalRanking: '13th', score: '', vsGlobalAverage: '' }
    ] as TimssResult[],
    improvementVs2019: [
      { subject: 'Mathematics', pointImprovement: '+17 points' },
      { subject: 'Science', pointImprovement: '+22 points' }
    ]
  }
}

// ============================================================================
// SECTION 5: SCHOOL SYSTEM - PUBLIC & PRIVATE
// ============================================================================

export interface SchoolType {
  type: string
  count: string
  students: string
  notes: string
}

export const schoolSystem = {
  schoolBreakdown: [
    { type: 'Private Schools', count: '~700+', students: '~800,000', notes: 'Growing segment' },
    { type: 'Public Schools', count: '~500', students: '~280,000', notes: 'For Emirati students' },
    { type: 'International Schools', count: '507+ (as of 2015)', students: 'Included in private', notes: 'Largest international market globally' },
    { type: 'Total', count: '1,219+', students: '~1,080,000', notes: '' }
  ] as SchoolType[],
  publicSchools: [
    'Primarily for Emirati students',
    'Free education through university for nationals',
    'Arabic curriculum aligned with MOE standards',
    'Growing emphasis on English instruction',
    'Increasing investment in technology infrastructure'
  ],
  privateSchools: [
    'Open to all nationalities',
    'Higher quality facilities generally',
    'Significant fee variation by curriculum/brand',
    'Growing waiting lists, especially for British/American curriculum',
    '36 new K-12 international schools planned'
  ],
  internationalMarketCharacteristics: [
    'UAE ranks in top 5 globally (with China, India, Pakistan, Indonesia)',
    'Market grew +7% YoY in 2026',
    'UAE leads with 36 planned new K-12 international schools',
    'Growth outpaces China where expansion is "flattening"',
    'Total K-12 Market Size (2026): USD 11.45 billion → projected USD 19.02 billion by 2031'
  ]
}

// ============================================================================
// SECTION 6: SCHOOL FEES & AFFORDABILITY
// ============================================================================

export interface FeeByCurriculum {
  level: string
  britishCurriculumAED: string
  ibAmericanCurriculumAED: string
}

export interface FeeComponent {
  component: string
  typicalCostRangeAED: string
}

export const schoolFees = {
  feeStructureByCurriculum: [
    { level: 'Nursery', britishCurriculumAED: '36,560 - 49,440', ibAmericanCurriculumAED: '22,992 - 67,119' },
    { level: 'FS1/PK', britishCurriculumAED: '8,650 - 57,006', ibAmericanCurriculumAED: '22,992 - 67,119' },
    { level: 'Primary Year 1', britishCurriculumAED: '10,685 - 57,006', ibAmericanCurriculumAED: '26,113 - 88,848' },
    { level: 'Secondary Year 7', britishCurriculumAED: '11,532 - 78,601', ibAmericanCurriculumAED: '30,939 - 97,462' },
    { level: 'Year 13/Grade 12', britishCurriculumAED: '16,818 - 98,465', ibAmericanCurriculumAED: '43,996 - 117,552' }
  ] as FeeByCurriculum[],
  feeIncreaseCap: {
    educationCostIndex: '2.35% for Dubai for-profit private schools',
    setBy: 'KHDA in May 2025',
    maximumAllowableIncrease: '2.35%'
  },
  feeComponents: [
    { component: 'Registration Fee', typicalCostRangeAED: '500 - 3,000 (one-time)' },
    { component: 'Assessment Fee', typicalCostRangeAED: '300 - 1,000 (one-time)' },
    { component: 'Uniform', typicalCostRangeAED: '500 - 2,000' },
    { component: 'Books', typicalCostRangeAED: '500 - 3,000/year' },
    { component: 'Transport', typicalCostRangeAED: '3,000 - 12,000/year' },
    { component: 'Lunch (optional)', typicalCostRangeAED: '4,000 - 8,000/year' }
  ] as FeeComponent[],
  khdaFactSheet: {
    description: 'Introduced as transparency measure',
    purpose: 'One-page reference with all allowable fees per academic year',
    benefit: 'Parents can compare schools using standardized format'
  }
}

// ============================================================================
// SECTION 7: SCHOOL QUALITY RATINGS (KHDA/ADEK)
// ============================================================================

export interface KHDARating {
  rating: string
  description: string
  count2024_25: number
  percentOfTotal: string
}

export interface ADEKRating {
  stars: string
  rating: string
  description: string
}

export const schoolQualityRatings = {
  khdaRatingSystem: {
    ratings: [
      { rating: 'Outstanding', description: 'Exceptional quality', count2024_25: 23, percentOfTotal: '~11%' },
      { rating: 'Very Good', description: 'Above standard', count2024_25: 55, percentOfTotal: '~24%' },
      { rating: 'Good', description: 'Meets standard', count2024_25: 79, percentOfTotal: '~35%' },
      { rating: 'Acceptable', description: 'Needs improvement', count2024_25: ~40, percentOfTotal: '~19%' },
      { rating: 'Poor', description: 'Significant concerns', count2024_25: ~12, percentOfTotal: '~6%' },
      { rating: 'Total Inspected', description: '', count2024_25: 209, percentOfTotal: '100%' }
    ] as KHDARating[]
  },
  adekRatingSystem: {
    stars: '5 stars',
    description: 'Outstanding - Exceptional',
    ratings: [
      { stars: '5 stars', rating: 'Outstanding', description: 'Exceptional' },
      { stars: '4 stars', rating: 'Very Good', description: 'Above standard' },
      { stars: '3 stars', rating: 'Good', description: 'Meets expectations' },
      { stars: '2 stars', rating: 'Acceptable', description: 'Needs improvement' },
      { stars: '1 star', rating: 'Poor', description: 'Significant issues' }
    ] as ADEKRating[]
  },
  adekInspectionFramework: {
    inspectionCycle: '18-24 months',
    reports2025_26: '43 school inspection reports',
    schoolsInspected: '480+ schools and nurseries for emergency preparedness',
    transparency: 'School Performance Plaques program',
    ratingScale: '1-5 stars'
  },
  additionalCategories: [
    'Wellbeing Rating: Student welfare, mental health support, safety',
    'Inclusion Rating: Services for Students of Determination'
  ],
  ratingDebate: [
    'Potential conflicts of interest',
    'Limited parent input in process',
    'Variance between inspection teams',
    '"Excellent" bias in self-assessments',
    'Independent validation studies limited'
  ]
}

// ============================================================================
// SECTION 8: HIGHER EDUCATION SYSTEM
// ============================================================================

export interface PublicUniversity {
  university: string
  location: string
  keyFocus: string
  notability: string
}

export interface PrivateUniversity {
  university: string
  curriculum: string
  degreeOrigin: string
}

export interface ForeignCampus {
  campus: string
  homeUniversity: string
  established: string
  programs: string
}

export const higherEducationSystem = {
  publicUniversities: [
    { university: 'United Arab Emirates University (UAEU)', location: 'Al Ain', keyFocus: 'Comprehensive', notability: 'Largest public university' },
    { university: 'Zayed University', location: 'Dubai/Abu Dhabi', keyFocus: 'Business, Media, IT', notability: 'Named after founder' },
    { university: 'Khalifa University', location: 'Abu Dhabi', keyFocus: 'STEM, Engineering', notability: 'Research-focused' },
    { university: 'Higher Colleges of Technology (HCT)', location: 'Multiple', keyFocus: 'Applied Sciences', notability: 'Largest higher ed institution' },
    { university: 'UAE University of Science and Technology', location: 'Various', keyFocus: 'Science/Technology', notability: 'Newer institution' }
  ] as PublicUniversity[],
  privateUniversities: [
    { university: 'American University of Sharjah (AUS)', curriculum: 'American', degreeOrigin: 'US-accredited' },
    { university: 'University of Dubai', curriculum: 'American', degreeOrigin: 'US-aligned' },
    { university: 'Dubai International Academic City', curriculum: 'Multiple', degreeOrigin: '27 institutions, 18,000+ students' },
    { university: 'Abu Dhabi University', curriculum: 'American/British', degreeOrigin: 'UAE' }
  ] as PrivateUniversity[],
  foreignBranchCampuses: [
    { campus: 'NYU Abu Dhabi', homeUniversity: 'New York University (USA)', established: '2010', programs: 'Liberal arts, sciences' },
    { campus: 'Sorbonne Abu Dhabi', homeUniversity: 'Sorbonne Université (France)', established: '2006', programs: 'Law, arts, business' },
    { campus: 'Murdoch University Dubai', homeUniversity: 'Murdoch University (Australia)', established: '2007', programs: 'Business, IT' },
    { campus: 'Heriot-Watt University Dubai', homeUniversity: 'Heriot-Watt (UK)', established: '2005', programs: 'Engineering, business' },
    { campus: 'University of Wollongong (UOW)', homeUniversity: 'UOW (Australia)', established: '1993', programs: 'Business, engineering' }
  ] as ForeignCampus[],
  regulatoryFramework: {
    commissionForAcademicAccreditation: 'Accredits all degree programs',
    ministryOfEducation: 'Overall policy',
    khdaAdek: 'Institutional licensing in respective emirates'
  },
  keyStatistics: {
    higherEducationInstitutions: '100+ across Emirates',
    universities: '33 total',
    diacStudents: '18,000+ students from 100+ nationalities at Dubai International Academic City',
    programs: 'Engineering, Business, Medicine, IT, Law, Arts, Sciences'
  }
}

// ============================================================================
// SECTION 9: UNIVERSITY RANKINGS
// ============================================================================

export interface QSRanking {
  university: string
  globalRank: string
  regionalRank: string
  notable: string
}

export interface THERanking {
  university: string
  globalRank: string
  asiaRank: string
  notes: string
}

export interface KhalifaUniversityRankings {
  ranking: string
  position: string
}

export const universityRankings = {
  qsWorld2026: [
    { university: 'Khalifa University', globalRank: '177', regionalRank: '3rd (Arab)', notable: 'Engineering focus' },
    { university: 'United Arab Emirates University (UAEU)', globalRank: '229', regionalRank: '5th', notable: 'Comprehensive' },
    { university: 'American University of Sharjah (AUS)', globalRank: '~300s', regionalRank: 'Top 10', notable: 'Private' },
    { university: 'Zayed University', globalRank: '~400s', regionalRank: 'Top 20', notable: 'Applied sciences' },
    { university: 'NYU Abu Dhabi', globalRank: '~300s', regionalRank: 'Top 10', notable: 'Private, selective' },
    { university: 'Sorbonne Abu Dhabi', globalRank: '~400s', regionalRank: 'Top 15', notable: 'Law, humanities' }
  ] as QSRanking[],
  timesHigherEducation2026: [
    { university: 'UAEU', globalRank: '201-250', asiaRank: '55th', notes: 'THE Asia 2026: 1st in UAE' },
    { university: 'Khalifa University', globalRank: '201-250', asiaRank: 'Top 60', notes: 'Strong in STEM' }
  ] as THERanking[],
  theArabRankings2026: {
    dominance: 'Saudi Arabia and UAE dominate',
    uaeInTop25: '9 universities',
    uaeInRankings: '15 UAE universities appeared in THE Arab rankings'
  },
  khalifaUniversitySpecific: {
    qsWorld: '177th (jumped 25 places from 202)',
    qsArabRegion: '3rd place',
    theWorld: '201-250',
    subjectRankings: [
      { subject: 'Engineering & Technology', globalRank: '129th' },
      { subject: 'Mathematics', globalRank: '201st' },
      { subject: 'Mechanical/Aerospace', globalRank: '151st' }
    ]
  },
  ausProfile: {
    ranking: 'Top 10 in Arab region',
    programs: 'Strong engineering and business programs',
    accreditation: 'Private institution with US accreditation'
  }
}

// ============================================================================
// SECTION 10: INTERNATIONAL UNIVERSITY BRANCH CAMPUSES
// ============================================================================

export interface NYUADProfile {
  attribute: string
  value: string
}

export interface SorbonneProfile {
  attribute: string
  value: string
}

export interface SorbonneSchool {
  school: string
}

export const internationalBranchCampuses = {
  nyuAbuDhabi: {
    established: '2010',
    location: 'Saadiyat Island, Abu Dhabi',
    viceChancellor: 'Fabio Piano (interim, effective June 1, 2024)',
    academicStaff: '320+',
    undergraduates: '2,075+',
    postgraduates: '130+',
    majors: '26 majors in Arts & Humanities, Social Sciences, Science, Engineering',
    acceptanceRate: '~3% (2021, from 17,300 applicants)',
    rhodesScholars: '22 since opening',
    accreditation: 'CAA (UAE) + Middle States Commission on Higher Education (US)',
    notableAlumni: '22 Rhodes Scholars, high graduate placement at top global graduate programs'
  },
  sorbonneAbuDhabi: {
    established: 'May 30, 2006',
    location: 'Al Reem Island, Abu Dhabi',
    campusSize: '93,000 square meters',
    studentBody: '3,000+ students from 90+ nationalities',
    programs: '20+ in French or English, following European Credit Transfer System (ECTS)',
    chancellor: 'Prof Nathalie Martial-Braz',
    chair: 'Reem Al Hashimy (UAE Minister for International Cooperation)',
    schools: [
      'School of Arts and Humanities',
      'School of Law Economics and Business',
      'School of Data Science and Engineering'
    ],
    research: {
      name: 'SAFIR Institute (2024)',
      centers: 'Seven research centres'
    },
    degrees: 'From Sorbonne Université and Université Paris Cité',
    accreditation: [
      'French Ministry of Higher Education',
      'UAE Ministry of Education',
      'Commission for Academic Accreditation (CAA)'
    ]
  },
  murdochUniversityDubai: {
    established: '2007',
    programs: 'Business, IT, Media',
    degree: 'Australian Murdoch University degree'
  },
  heriotWattUniversityDubai: {
    established: '2005',
    programs: 'Engineering, Business, Physical Sciences',
    degree: 'UK Heriot-Watt degree'
  },
  universityOfWollongongDubai: {
    established: '1993',
    programs: 'Business, Engineering, Computer Science',
    degree: 'Australian UOW degree'
  },
  visaConsiderations: {
    description: 'Student visas sponsored by institutions',
    incidents: [
      '2024: NYUAD student deported for pro-Palestinian expression at graduation',
      '2017: Journalism department cut ties after UAE denied visas to professors'
    ]
  }
}

// ============================================================================
// SECTION 11: ACADEMIC FREEDOM
// ============================================================================

export interface AcademicFreedomIndex {
  metric: string
  value: string
  interpretation: string
}

export interface AmnestyViolation {
  violationType: string
  description: string
}

export interface SuppressionIncident {
  date: string
  incident: string
}

export interface InternationalResponse {
  organization: string
  action: string
}

export const academicFreedom = {
  academicFreedomIndex2025: {
    uaeScore: '0.20',
    globalRanking: 'Bottom 20%',
    changeFrom2024: '+1.6%',
    scale: '0.00 (no academic freedom) to 1.00 (full academic freedom)'
  },
  amnestyReportAugust2024: {
    documentations: [
      { violationType: 'Event Restrictions', description: 'Refusal to allow social, cultural, political, educational events on campus' },
      { violationType: 'Graduation Restrictions', description: 'Prohibition of expression at graduation ceremony (decorating caps/gowns)' },
      { violationType: 'Student Deportation', description: 'Forcible return of student to country of origin' },
      { violationType: 'Faculty Summons', description: 'Arbitrary summons, interrogation, detention of faculty members' },
      { violationType: 'Threatening Communications', description: '"Suggestions" of punishment from Emirati government' }
    ]
  },
  specificIncidents: [
    { date: 'May 2024', incident: 'Student detained and deported for wearing Palestinian keffiyeh at graduation' },
    { date: '2015', incident: 'Professor Andrew Ross prevented from boarding plane to NYU Abu Dhabi' },
    { date: '2017', incident: 'Two professors denied visas; journalism department dissolved' },
    { date: 'June 2024', incident: 'New dress code at graduation barring scarves, symbols, posters' }
  ],
  internationalResponse: [
    { organization: 'Amnesty International', action: 'Published detailed report (August 2024) documenting violations' },
    { organization: 'MESA (Middle East Studies Association)', action: 'Letter to NYU President (June 3, 2024)' },
    { organization: 'impACT International', action: 'Expressed serious concern (June 4, 2024)' },
    { organization: 'Inside Higher Ed', action: 'Reported scholars\' condemnation (June 28, 2024)' }
  ],
  context: {
    gazeaConflict: 'All documented cases of academic suppression relate to speech about Gaza conflict',
    nyuadStatement: '"The academic freedom of our faculty in their research and in the classroom has not been abridged in any way"',
    studentFacultyReport: 'Students and faculty report pressure regarding pro-Palestinian expression'
  }
}

// ============================================================================
// SECTION 12: TEACHER RECRUITMENT & RETENTION
// ============================================================================

export interface TeacherStatistic {
  metric: string
  value: string
  source: string
}

export interface TeacherSurveyFinding {
  finding: string
  value: string
}

export interface TurnoverCause {
  factor: string
  impact: string
}

export const teacherRecruitment = {
  teacherShortage: {
    newTeachersNeededBy2030: '30,000+',
    currentVacancies: '900+ (Jan 2025)',
    dubaiPrivateSchoolStaff: '27,284 (2024)',
    yoyStaffIncrease: '9%'
  },
  workingConditionsSurvey: [
    { finding: 'Teachers working longer than home country', value: '87%' },
    { finding: 'Hours worked 40-49/week', value: '32%' },
    { finding: 'Daily time on bureaucratic tasks', value: '37% spend 1-1.5 hours' },
    { finding: 'Plan to stay 5-6 years', value: 'Only 18%' },
    { finding: 'Plan to leave within 4 years', value: '54%' }
  ],
  causesOfTurnover: [
    { factor: 'Low Salaries', impact: 'Not competitive with other GCC countries' },
    { factor: 'Casual Recruitment', impact: 'Lack of job security' },
    { factor: 'Poor Working Conditions', impact: 'Administrative burden' },
    { factor: 'Outdated Teaching Methods', impact: 'KHDA-identified concern' },
    { factor: 'Better Global Opportunities', impact: 'Public sector jobs, permanent contracts elsewhere' }
  ],
  healthImpacts: [
    'Depressive mood',
    'Physical health issues',
    'Anger/stress-related problems',
    'Work-life balance challenges'
  ],
  schoolsMostAffected: [
    'Indian curriculum schools',
    'US curriculum schools',
    'Smaller private schools with limited resources'
  ],
  teacherTrainingInitiatives: [
    'Teachers of the 21st Century Program: Aimed to train 10,000 public school teachers',
    'KHDA ongoing professional development requirements',
    'MOE teacher licensing standards'
  ]
}

// ============================================================================
// SECTION 13: CURRICULUM & AI EDUCATION MANDATE
// ============================================================================

export interface AIAspect {
  aspect: string
  details: string
}

export interface AICurriculumDeveloper {
  company: string
  role: string
}

export const curriculumAI = {
  publicSchools: [
    'Arabic-medium with English as second language',
    'Islamic Studies (for Muslim students)',
    'UAE History and Social Studies',
    'Aligned with MOE standards',
    'Increasing focus on STEM'
  ],
  privateSchools: [
    'Follow respective curriculum standards (British, American, IB, Indian)',
    'Must meet MOE requirements for UAE-specific content',
    'Islamic Studies offered to Muslim students'
  ],
  aiMandate: {
    announcement: 'May 2025 (for 2025-2026 Academic Year)',
    scope: 'All public schools, Kindergarten to Grade 12',
    studentsAffected: 'Up to 400,000 students',
    curriculumHours: '~20 AI lessons per grade level initially',
    implementation: 'Fall 2025-2026 academic year'
  },
  rationale: [
    'UAE becoming first country to mandate AI in all public schools',
    'Part of UAE Vision 2031 and Centennial 2071',
    'Prepares students for knowledge-based economy'
  ],
  curriculumApproach: [
    'No screens until 5th grade (around age 10)',
    'Students design their own AI systems',
    'Learning about AI bias and algorithms',
    'Age-appropriate progression'
  ],
  curriculumDevelopers: [
    { company: 'G42 (Presight)', role: 'AI curriculum development' },
    { company: 'AI71', role: 'AI curriculum development' }
  ] as AICurriculumDeveloper[],
  ministerQuote: '"The aim is to build AI knowledge early - not just technical skills, but awareness of how AI is shaping work, society, and decision-making."',
  concerns: [
    'Rapid implementation timeline',
    'Teacher training adequacy',
    'Infrastructure readiness',
    'Screen time for young children',
    'Assessment methods'
  ]
}

// ============================================================================
// SECTION 14: EDTECH & EDUCATION TECHNOLOGY
// ============================================================================

export interface EdTechCompany {
  company: string
  focus: string
  marketPresence: string
}

export interface AlefEducationMetrics {
  metric: string
  value: string
}

export interface TechnologyUsed {
  technology: string
  application: string
}

export interface KeyProgram {
  program: string
  description: string
}

export interface MarketData {
  metric: string
  value: string
  source: string
}

export const edtechEducation = {
  majorCompanies: [
    { company: 'Alef Education', focus: 'AI-powered K-12 learning', marketPresence: '400+ schools globally' },
    { company: 'Abjadiyat', focus: 'Arabic e-learning', marketPresence: 'MENA region' }
  ],
  alefEducationProfile: {
    founded: '2016',
    hq: 'UAE',
    stockSymbol: 'ALEFEDT (ADX listed)',
    revenueFY2025: 'AED 769.5 million',
    yoyGrowth: '+1.4%',
    dividendH22025: 'AED 224 million ($61 million)',
    partnershipsFeb2026: '5 new UAE private school partnerships'
  },
  aiIntegration: [
    'AI-powered adaptive learning',
    'Collaboration with Liquid AI (August 2025)',
    'Back-to-School AI program 2025-2026'
  ],
  technologiesUsed: [
    { technology: 'AI-powered adaptive learning', application: 'Personalized content delivery' },
    { technology: 'AR/VR', application: 'Immersive learning experiences' },
    { technology: 'Gamified learning apps', application: 'Student engagement' },
    { technology: 'Blockchain credentials', application: 'Credential verification/anti-fraud' },
    { technology: 'Smart learning platforms', application: 'Classroom management' }
  ],
  keyPrograms: [
    { program: 'Mohammed bin Rashid Smart Learning Program', description: 'Technology integration in classrooms' },
    { program: 'Hub71', description: 'EdTech startup support' },
    { program: 'Dubai Future Accelerators', description: 'EdTech innovation' }
  ],
  covidImpact: [
    'Accelerated digital-first education adoption',
    'Blended learning now standard',
    'Microsoft Teams, Al-Diwan platforms widely used'
  ],
  marketData: [
    { metric: 'UAE EdTech Market CAGR', value: '6% (2024-2030)', source: 'GlobalRiskCommunity' },
    { metric: 'K-12 Market Size (2026)', value: 'USD 11.45 billion', source: 'ISC Research' },
    { metric: 'K-12 Market Projection (2031)', value: 'USD 19.02 billion', source: 'ISC Research' },
    { metric: 'Education Market Growth (2025-2029)', value: 'USD 5.1 billion at 8.6% CAGR', source: 'Technavio' }
  ]
}

// ============================================================================
// SECTION 15: VOCATIONAL & TECHNICAL EDUCATION (TVET)
// ============================================================================

export interface TVETRegulatory {
  body: string
  role: string
}

export interface TVETInstitution {
  institution: string
  focus: string
  locations: string
}

export interface TVETStatistic {
  metric: string
  value: string
}

export interface TVETProgram {
  program: string
  description: string
  target: string
}

export interface TVETMarket {
  metric: string
  value: string
  source: string
}

export const vocationalEducation = {
  regulatoryFramework: [
    { body: 'ACTVET (Abu Dhabi Centre for TTVET)', role: 'Regulates TVET in Abu Dhabi' },
    { body: 'NQC (National Qualifications Centre)', role: 'Federal-level TVET regulation' },
    { body: 'MOE', role: 'Overall TVET policy' }
  ],
  majorInstitutions: [
    { institution: 'ADVETI (Abu Dhabi Vocational Education and Training Institute)', focus: 'Comprehensive vocational', locations: '5 campuses' },
    { institution: 'HCT (Higher Colleges of Technology)', focus: 'Applied sciences/technology', locations: 'Multiple emirates' },
    { institution: 'NIVE (National Institute of Vocational Education)', focus: 'Various trades', locations: 'UAE-wide' },
    { institution: 'ADNOC Technical Academy', focus: 'Oil & gas, engineering', locations: 'Abu Dhabi' },
    { institution: 'Emirates Aviation University', focus: 'Aviation', locations: 'Dubai' },
    { institution: 'Etisalat Academy', focus: 'Telecommunications/IT', locations: 'Dubai' }
  ],
  statistics: {
    secondaryTVETEnrollment: '14,220 students (2024-2025)',
    femaleShare: '46.89%'
  },
  keyPrograms: [
    { program: 'EmiratesSkills', description: 'Skills competitions and training', target: 'Ages 12+, People of Determination' },
    { program: 'Dual Learning Track', description: '8 weeks practical training', target: 'Technical college students' },
    { program: 'Certified Internship Track', description: '2-4 weeks voluntary', target: 'Grades 9-11' },
    { program: 'Exchange Track', description: 'Mandatory practical experience', target: 'Bachelor\'s programs' }
  ],
  marketSize: [
    { metric: 'UAE TVET Market (2024)', value: 'USD 14.4 million', source: 'Grand View Research' },
    { metric: 'TVET Market Projection (2030)', value: 'USD 27.6 million', source: 'Grand View Research' },
    { metric: 'MENA TVET Market', value: 'USD 47 billion', source: 'Ken Research' }
  ],
  challenges: [
    'Low adoption rate among UAE nationals',
    'Cultural perception of vocational careers',
    'Competition from white-collar career expectations',
    'Need to reshape views on private sector employment'
  ],
  teacherRequirements: [
    'Commitment to UAE heritage and cultural values',
    'Professional qualifications',
    'Industry experience preferred'
  ]
}

// ============================================================================
// SECTION 16: STEM EDUCATION
// ============================================================================

export interface STEMComponent {
  area: string
  subjects: string
}

export interface STEMStatistic {
  metric: string
  value: string
  source: string
}

export interface STEMChallenge {
  challenge: string
  description: string
}

export const stemEducation = {
  definition: 'STEM combines Science, Technology, Engineering, and Mathematics using an interdisciplinary, real-world application approach',
  economicImpact: [
    { metric: 'Potential GDP boost from STEM improvements', value: 'At least 12%', source: 'GEMS Education analysis' },
    { metric: 'UAE STEM K-12 Market (2024)', value: 'USD 179.4 million', source: 'Grand View Research' },
    { metric: 'UAE STEM K-12 Projection (2030)', value: 'USD 426.6 million', source: 'Grand View Research' },
    { metric: 'Market CAGR', value: '~18.8%', source: 'Grand View Research' }
  ] as STEMStatistic[],
  components: [
    { area: 'Science', subjects: 'Biology, Chemistry, Physics' },
    { area: 'Technology', subjects: 'ICT, Coding, Robotics, HTML, App Creation' },
    { area: 'Engineering', subjects: 'Design, Problem-solving' },
    { area: 'Mathematics', subjects: 'Arithmetic through Calculus' }
  ] as STEMComponent[],
  nexTechProgram: {
    description: 'Places exceptional Emirati STEM students in global universities',
    type: 'Government-funded initiative',
    goal: 'Develop homegrown STEM talent'
  },
  challenges: [
    { challenge: 'Lack of Interest', description: 'Among UAE nationals' },
    { challenge: 'Inaccessibility', description: 'Across income levels' },
    { challenge: 'Teacher Gaps', description: 'Professional development needs' },
    { challenge: 'Gender Disparity', description: 'Historically male-dominated' }
  ] as STEMChallenge[],
  uaeVision2031Alignment: [
    'STEM education central to knowledge-based economy goals',
    'Focus on innovation and entrepreneurship',
    'Alignment with national priorities'
  ]
}

// ============================================================================
// SECTION 17: SPECIAL NEEDS & INCLUSION EDUCATION
// ============================================================================

export interface SpecialNeedsLaw {
  law: string
  year: string
  keyProvision: string
}

export interface SupportService {
  service: string
  description: string
}

export interface AssistiveTechnology {
  technology: string
  purpose: string
}

export interface SpecialNeedsCenter {
  center: string
  location: string
  focus: string
}

export const specialNeedsInclusion = {
  legalFramework: [
    { law: 'Federal Law No. 29', year: '2006', keyProvision: 'Guarantees equal educational opportunities' },
    { law: 'Ministerial Resolution No. 647', year: '2020', keyProvision: 'Government schools must adapt for inclusive education' },
    { law: 'People of Determination Department', year: '2008', keyProvision: 'Established to oversee services' }
  ] as SpecialNeedsLaw[],
  terminology: 'UAE uses "People of Determination" (equivalent to "people with disabilities")',
  supportServices: [
    { service: 'Wheelchair ramps', description: 'Physical accessibility' },
    { service: 'Elevators', description: 'Multi-story access' },
    { service: 'Specialized buses', description: 'Transport for mobility needs' },
    { service: 'Resource rooms', description: 'Individual/small group support' },
    { service: 'Sensory rooms', description: 'Sensory processing support' },
    { service: 'Special education teachers', description: 'Dedicated staff' },
    { service: 'Teacher assistants', description: 'Classroom support' },
    { service: 'Escorts', description: 'Transport assistance' },
    { service: 'Sign language interpreters', description: 'Deaf/hard of hearing support' }
  ] as SupportService[],
  assistiveTechnologies: [
    { technology: 'Desktop magnifiers', purpose: 'Visual impairment' },
    { technology: 'Braille Note', purpose: 'Blind students' },
    { technology: 'Goalball', purpose: 'Visual impairment sports' },
    { technology: 'Perkins Braillers', purpose: 'Blind students' },
    { technology: 'FM systems', purpose: 'Hearing impairment' }
  ] as AssistiveTechnology[],
  financialSupport: {
    tuitionAssistance: 'Up to AED 50,000 per year for low-income families',
    application: 'Through Ministry of Education'
  },
  keyCenters: [
    { center: 'Zayed Higher Organization', location: 'Abu Dhabi', focus: 'Comprehensive services' },
    { center: 'Sharjah City for Humanitarian Services', location: 'Sharjah', focus: 'Wide range of services' },
    { center: 'Dubai Autism Centre', location: 'Dubai', focus: 'Autism spectrum' },
    { center: 'Al Noor Training Centre', location: 'Abu Dhabi/Dubai', focus: 'Multiple disabilities' }
  ] as SpecialNeedsCenter[],
  inclusionStatistics: [
    'Growing number of inclusive classrooms',
    'Policy emphasis on "Education for All"',
    'Schools developing dedicated inclusion departments',
    'Professional development for teachers in inclusion practices'
  ]
}

// ============================================================================
// SECTION 18: SCHOLARSHIP PROGRAMS
// ============================================================================

export interface MOFAAspect {
  aspect: string
  details: string
}

export interface MOFABenefit {
  benefit: string
  value: string
}

export interface OtherScholarship {
  program: string
  admin: string
  focus: string
}

export interface ProfessionalProgram {
  track: string
  description: string
  launch: string
}

export const scholarshipPrograms = {
  mofaProgram: {
    administeringBody: 'Ministry of Foreign Affairs',
    eligibility: 'Emirati students pursuing education abroad',
    degreeLevels: 'Bachelor\'s, Master\'s, Doctorate, Post-Doctorate',
    duration: '4 years (typical)',
    serviceRequirement: 'Join UAE diplomatic corps for equivalent period',
    universityRequirement: 'Top 200 QS-ranked institutions globally'
  },
  mofaBenefits: [
    { benefit: 'Tuition', value: 'Full coverage' },
    { benefit: 'Monthly Stipend', value: '$3,200+' },
    { benefit: 'Annual Airfare', value: 'Economy class ticket' },
    { benefit: 'Books & Materials', value: 'Included' },
    { benefit: 'Clothing Allowance', value: 'Included' },
    { benefit: 'Medical Insurance', value: 'Full coverage' }
  ],
  otherScholarships: [
    { program: 'Dubai Distinguished Students Programme', admin: 'Dubai Government', focus: '333 scholarships for 2026-27' },
    { program: 'MOHESR Scholarships', admin: 'Ministry of Higher Education', focus: 'Various disciplines' },
    { program: 'UAEU Scholarships', admin: 'UAE University', focus: 'High-achieving Emiratis' },
    { program: 'MBZUAI Scholarships', admin: 'Mohamed bin Zayed University', focus: 'AI/AI research' }
  ],
  professionalTraining: [
    { track: 'Certified Internship Track', description: '2-4 weeks voluntary', launch: '2023 pilot (3,500 students)' },
    { track: 'Exchange Track', description: 'Mandatory practical experience', launch: 'Bachelor\'s programs' },
    { track: 'Dual Learning Track', description: '8 weeks practical training', launch: 'Technical college students' }
  ],
  programGoals: 'Reshape Emirati views on private sector employment',
  zayedScholarship: {
    description: 'For outstanding students',
    focus: 'Leadership and public service',
    namesake: 'Sheikh Zayed bin Sultan Al Nahyan'
  }
}

// ============================================================================
// SECTION 19: STUDENT DEBT RELIEF
// ============================================================================

export interface DebtReliefInitiative {
  aspect: string
  details: string
}

export interface StudentLoan {
  bank: string
  loanType: string
  features: string
}

export interface LoanParameter {
  parameter: string
  range: string
}

export const studentDebtRelief = {
  presidentialInitiative: {
    announcement: 'President Sheikh Mohamed bin Zayed',
    amount: 'AED 155 million',
    coverage: 'Outstanding dues for UAE resident students',
    institutionType: 'Government schools',
    academicYearsCovered: 'Until 2023-2024'
  },
  studentLoanOptions: [
    { bank: 'ADCB', loanType: 'Education loan', features: 'Up to full course' },
    { bank: 'Mashreq', loanType: 'Education loan', features: 'Flexible terms' },
    { bank: 'HSBC', loanType: 'Education loan', features: 'Competitive rates' },
    { bank: 'Emirates NBD', loanType: 'Education loan', features: 'Wide availability' },
    { bank: 'RAK Bank', loanType: 'Education loan', features: 'Local focus' },
    { bank: 'ADIB', loanType: 'Islamic education financing', features: 'Sharia-compliant' },
    { bank: 'Dubai Islamic Bank', loanType: 'Islamic education financing', features: 'Sharia-compliant' },
    { bank: 'Sharjah Islamic Bank', loanType: 'Islamic education financing', features: 'Northern Emirates' }
  ],
  loanParameters: [
    { parameter: 'Loan Amount', range: 'AED 10,000 to full course coverage' },
    { parameter: 'Repayment Period', range: 'Up to 48 months' },
    { parameter: 'Minimum Monthly Income', range: 'AED 7,000 - 10,000' }
  ],
  note: 'Student loans primarily available for citizens/residents with income requirements'
}

// ============================================================================
// SECTION 20: YOUTH UNEMPLOYMENT
// ============================================================================

export interface UnemploymentRate {
  year: string
  rate: string
  notes: string
}

export interface YouthDemographic {
  demographic: string
  rate: string
}

export const youthUnemployment = {
  historicalTrend: [
    { year: '1991', rate: '3.93%', notes: 'Historical low' },
    { year: '2016', rate: '5.11%', notes: 'Historical low point' },
    { year: '2020', rate: '13.48%', notes: 'COVID-19 peak' },
    { year: '2022', rate: '9.99%', notes: 'Post-pandemic recovery' },
    { year: '2023', rate: '6.35%', notes: 'Continued decline' },
    { year: '2024', rate: '6.43%', notes: 'Marginal increase' },
    { year: '2025', rate: '6.45%', notes: 'Stable/current' }
  ] as UnemploymentRate[],
  breakdown2025: [
    { demographic: 'Overall Youth (15-24)', rate: '6.45%' },
    { demographic: 'Male', rate: '7.9%' },
    { demographic: 'Female', rate: '19.9%' }
  ] as YouthDemographic[],
  keyInsight: 'Female youth unemployment (19.9%) is more than double male rate (7.9%)',
  longTermTrends: [
    'Rose from 3.93% (1991) to 6.45% (2025)',
    'COVID-19 caused significant spike (13.48% in 2020)',
    'Recovery to near pre-pandemic levels by 2023'
  ],
  workforceGrowth2025: {
    growth: '12.4%',
    note: 'Youth made up over half of new workforce additions'
  },
  contributingFactors: [
    'Economic diversification',
    'Private sector growth',
    'Emiratization policies',
    'Education mismatch with market needs'
  ]
}

// ============================================================================
// SECTION 21: YOUTH MENTAL HEALTH
// ============================================================================

export interface MentalHealthPrevalence {
  condition: string
  prevalence: string
  source: string
}

export interface YouthSpecificMetric {
  metric: string
  value: string
}

export interface MentalHealthProgram {
  program: string
  agency: string
  focus: string
}

export const youthMentalHealth = {
  prevalenceData: [
    { condition: 'Depressive symptoms (youth)', prevalence: '17-22%', source: 'Various studies' },
    { condition: 'Anxiety-related disorders (adolescents)', prevalence: 'High incidence', source: 'Multiple studies' },
    { condition: 'Mental health disorders (general population)', prevalence: '57%', source: 'DUPHAT 2025' },
    { condition: 'Anxiety (general population)', prevalence: '56.4%', source: 'DUPHAT 2025' },
    { condition: 'Depression (general population)', prevalence: '31.5%', source: 'DUPHAT 2025' }
  ] as MentalHealthPrevalence[],
  youthSpecific: [
    { metric: 'UAE school students with PTSD risk (post-COVID)', value: '40.6%' },
    { metric: 'UAE school students with anxiety symptoms', value: '23.3%' },
    { metric: 'Adolescents (10-19) with anxiety/depression', value: '~40% of mental disorders' }
  ] as YouthSpecificMetric[],
  contributingFactors: [
    'Academic pressure',
    'Social expectations',
    'Digital influences/social media',
    'Cultural transitions',
    'Future uncertainty',
    'Family expectations'
  ],
  genderDifferences: [
    'Girls more affected than boys in anxiety disorders',
    'Boys more affected in behavioral issues'
  ],
  governmentInitiatives: [
    { program: 'Youth Mental Health Programs', agency: 'UNICEF Gulf Area', focus: 'Regional support' },
    { program: 'Awareness Programs', agency: 'MoHAP + CDA Youth Councils', focus: 'Community outreach' },
    { program: 'National Children\'s Mental Health Initiative', agency: 'Zayed Authority for People of Determination', focus: 'Early intervention' },
    { program: 'Student Support Services', agency: 'Schools', focus: 'Counseling, resources' }
  ] as MentalHealthProgram[],
  marketData: {
    uaeMentalHealthMarketCAGR: '8.92% (2025-2033)',
    projection: 'Projected to exceed USD 28.26 billion by 2033'
  },
  covidImpact: [
    '26% increase in anxiety',
    '28% increase in depression',
    'Long-term PTSD effects in students'
  ]
}

// ============================================================================
// SECTION 22: YOUTH CRIME & JUVENILE JUSTICE
// ============================================================================

export interface JuvenileCrimeStatistic {
  year: string
  cases: string
  change: string
}

export interface JuvenileAgeStatus {
  age: string
  legalStatus: string
}

export interface ChildDigitalSafety {
  aspect: string
  details: string
}

export const youthCrimeJuvenileJustice = {
  juvenileCrimeStatistics: [
    { year: '2018', cases: '313', change: '-' },
    { year: '2019', cases: '208', change: '-33.5%' },
    { year: '2020', cases: '175', change: '-15.9%' },
    { year: '2021', cases: '137', change: '-21.7%' },
    { year: '2022', cases: '116', change: '-15.3%' }
  ],
  trend: 'Consistent decline since 2018',
  mostCommonCrimes: [
    'Assaults and fights',
    'Traffic offences',
    'Drug consumption',
    'Property crimes (less common)'
  ],
  federalLaw6_2022: {
    description: 'Federal Law No. 6 of 2022 (Juvenile Delinquency Law)',
    implemented: 'March 2023',
    note: 'Landmark legislation replacing earlier framework'
  },
  ageStatus: [
    { age: 'Under 7', legalStatus: 'Cannot be criminally prosecuted; educational/treatment measures' },
    { age: '7-16', legalStatus: 'Sanctions determined by judge' },
    { age: '16+', legalStatus: 'Judged according to law' }
  ],
  protections: [
    'Cannot face capital punishment',
    'Cannot be sent to adult prisons',
    'Cannot face financial sanctions (fines)',
    'Maximum detention: 10 years (if adult would face death or life imprisonment)'
  ],
  sanctionApproach: [
    'Rehabilitative and educational, not punitive',
    'Measures aligned with age and psychological state',
    'Focus on reintegration'
  ],
  childDigitalSafetyLaw: {
    name: 'Federal Decree by Law No. 26 of 2025',
    provisions: [
      'New child digital safety legislation',
      'Prohibits platforms from collecting data under 13 without parental consent',
      'Obligations for platforms, ISPs, and parents',
      'Penalties for violations'
    ]
  }
}

// ============================================================================
// SECTION 23: SCHOOL BULLYING
// ============================================================================

export interface BullyingStatistic {
  category: string
  overall: string
  privateSchools: string
  publicSchools: string
}

export interface BullyingGenderRate {
  gender: string
  victimizationRate: string
}

export interface BullyingLocation {
  setting: string
  privateSchools: string
  publicSchools: string
}

export interface AntiBullyingPenalty {
  entity: string
  fineRange: string
  additionalPenalties: string
}

export const schoolBullying = {
  prevalenceStatistics: [
    { category: 'Overall bullying victimization', overall: '37%', privateSchools: '40%', publicSchools: '35%' },
    { category: 'Physical bullying', overall: '20%', privateSchools: '24%', publicSchools: '18%' },
    { category: 'Cyberbullying', overall: '31%', privateSchools: '37%', publicSchools: '27%' }
  ] as BullyingStatistic[],
  genderDifferences: [
    { gender: 'Male', victimizationRate: '42%' },
    { gender: 'Female', victimizationRate: '27%' }
  ] as BullyingGenderRate[],
  locationOfBullying: [
    { setting: 'Classrooms', privateSchools: '80%', publicSchools: '65%' },
    { setting: 'Other locations', privateSchools: '20%', publicSchools: '35%' }
  ] as BullyingLocation[],
  reportingRates: {
    teachersAware: 'Only 23%',
    parentsInformed: '44%'
  },
  antiBullyingPenalties2025: [
    { entity: 'Schools (negligent)', fineRange: 'Dh10,000 - Dh1,000,000', additionalPenalties: 'Possible closure, jail for staff' },
    { entity: 'Individuals (serious harm)', fineRange: 'Varies', additionalPenalties: 'Up to 1 year imprisonment' },
    { entity: 'Parents', fineRange: 'Dh65,000 (court cases 2025)', additionalPenalties: 'Civil liability' }
  ] as AntiBullyingPenalty[],
  newLegislation: {
    date: 'September 2025',
    description: 'UAE introduced tough anti-bullying measures',
    details: [
      'Schools face up to Dh1 million fines',
      'Individual imprisonment for serious harm',
      'School suspension or permanent closure possible'
    ]
  },
  recentCourtCases: 'November 2025: Al Ain civil court ordered two sets of parents to pay Dh65,000 total in compensation for bullying incidents'
}

// ============================================================================
// SECTION 24: CREDENTIAL FRAUD & ATTESTATION
// ============================================================================

export interface AttestationFeature {
  feature: string
  description: string
}

export interface AntiFraudMeasure {
  measure: string
  description: string
}

export const credentialFraud = {
  smartDocumentSolution: {
    technology: 'RFID on certificate labels',
    purpose: 'Prevent fake degrees',
    method: 'Certificate information stored on smart labels',
    verification: 'Ministry reads with smart document readers',
    partnerUniversities: '30+ via Amricon'
  },
  historicalContext2011: [
    'Black market for fake degrees thrived',
    'Jobs and pay often hinged on degrees',
    '48% increase in diploma mills globally (2011)',
    'Legal consequences introduced to combat fraud'
  ],
  currentAntiFraudMeasures: [
    { measure: 'MOFA Attestation', description: 'Ministry of Foreign Affairs verification' },
    { measure: 'MOHESR Recognition', description: 'International qualification recognition' },
    { measure: 'Online Verification', description: 'Digital certificate validation' },
    { measure: 'Smart Readers', description: 'Government deployment for instant verification' }
  ],
  updates2025: [
    'May 2025: "No more fake degrees" - online verification system announced',
    'MOHESR simplified recognition process for international qualifications',
    'Enhanced attestation requirements'
  ],
  consequences: [
    'Legal penalties',
    'Reputational damage',
    'Employer liability',
    'Deportation (for expats)'
  ],
  dubaiInternationalAcademicCity: {
    institutions: '27',
    students: '18,000',
    nationalities: '100+',
    note: 'Strict licensing and accreditation requirements'
  }
}

// ============================================================================
// SECTION 25: INTERNATIONAL SCHOOL MARKET
// ============================================================================

export interface InternationalSchoolMetric {
  metric: string
  uaeRanking: string
  comparison: string
}

export interface GlobalContext {
  metric: string
  value: string
}

export interface UAESpecificData {
  metric: string
  value: string
}

export const internationalSchoolMarket = {
  globalPosition: [
    { metric: 'International schools globally', uaeRanking: 'Top 5', comparison: 'with China, India, Pakistan, Indonesia' },
    { metric: 'International school growth (2026)', uaeRanking: '+7% YoY', comparison: 'Outpaces China' },
    { metric: 'New K-12 schools planned', uaeRanking: '36', comparison: 'Leads globally' },
    { metric: 'Market size (2026)', uaeRanking: 'USD 11.45 billion', comparison: '-' },
    { metric: 'Market projection (2031)', uaeRanking: 'USD 19.02 billion', comparison: '-' },
    { metric: 'Market growth (2025-2029)', uaeRanking: 'USD 5.1 billion at 8.6% CAGR', comparison: 'Strong' }
  ] as InternationalSchoolMetric[],
  globalContext: [
    { metric: 'Total international schools worldwide (2026)', value: '15,075 (+2% YoY)' },
    { metric: 'Global international school students', value: '7.7 million+' },
    { metric: 'Global fee income (2025)', value: '$69.4 billion USD' },
    { metric: 'School count growth (5 years)', value: '+8%' },
    { metric: 'Student enrollment growth (5 years)', value: '+10%' }
  ] as GlobalContext[],
  uaeSpecific: [
    { metric: 'Total private schools', value: '700+' },
    { metric: 'International schools (2015)', value: '507' },
    { metric: 'Schools offering IB programs', value: '35+' },
    { metric: 'Average class size', value: '22.5 students' },
    { metric: 'Average school size', value: '1,607 students' }
  ] as UAESpecificData[],
  demandFactors: [
    'Growing expatriate population',
    'Preference for international curricula',
    'Limited public school access for non-nationals',
    'University preparation for global institutions'
  ]
}

// ============================================================================
// SECTION 26: EDUCATION AS SOFT POWER
// ============================================================================

export interface SoftPowerRanking {
  index: string
  uaeRanking: string
  year: string
}

export interface SoftPowerMechanism {
  mechanism: string
  description: string
}

export interface SoftPowerInstitution {
  institution: string
  contribution: string
}

export const educationSoftPower = {
  globalRankings: [
    { index: 'Global Soft Power Index', uaeRanking: '10th', year: '2023, 2025' },
    { index: 'Soft Power Index (Middle East)', uaeRanking: '1st', year: '2023, 2025' }
  ] as SoftPowerRanking[],
  note: 'UAE rose from 18th (2020) to top 10 by 2023',
  mechanisms: [
    { mechanism: 'International Students', description: '~4 years exposure, return as cultural ambassadors' },
    { mechanism: 'Branch Campuses', description: 'Global university presence (NYUAD, Sorbonne, etc.)' },
    { mechanism: 'Scholarship Programs', description: 'Attracting talent, building relationships' },
    { mechanism: 'Education Exports', description: 'UAE as education hub for region' }
  ] as SoftPowerMechanism[],
  keyInstitutions: [
    { institution: 'American University of Sharjah', contribution: 'US-accredited education' },
    { institution: 'Mohammed Bin Rashid School of Government', contribution: 'Policy research, regional influence' },
    { institution: 'Higher Colleges of Technology', contribution: 'Applied education model' },
    { institution: 'NYU Abu Dhabi', contribution: 'Global prestige, Rhodes Scholars' },
    { institution: 'Sorbonne Abu Dhabi', contribution: 'French cultural, European links' }
  ] as SoftPowerInstitution[],
  internationalStudyInterest: {
    june2025: '90% increase in international study interest in UAE',
    note: 'Students from diverse regions seeking MENA education'
  },
  updates2026: {
    dubaiHigherEducation: '42,026 students at 41 private institutions',
    internationalCampuses: '37 international campuses in Dubai alone',
    note: 'Internationalization deepening with quality focus'
  },
  researchFindings: [
    'UAE demonstrates soft power can be consciously developed regardless of regime type or size',
    'Education diversification supports economic goals',
    'Serves as political tool for regional influence'
  ]
}

// ============================================================================
// SECTION 27: HOMESCHOOLING
// ============================================================================

export interface HomeschoolingRule {
  aspect: string
  rule: string
}

export interface HomeschoolOption {
  option: string
  description: string
}

export const homeschooling = {
  legalStatus: {
    status: 'Legal for UAE nationals and expatriates',
    regulatedBy: 'Ministry of Education',
    compulsoryAge: 'Primary education compulsory for Emirati children from age 6'
  },
  regulatoryFramework: [
    { aspect: 'Who can homeschool', rule: 'All nationalities' },
    { aspect: 'Grade levels', rule: '7 to 12 only (not KG-6)' },
    { aspect: 'Minimum age for Grade 7', rule: '14 years' },
    { aspect: 'Curriculum options', rule: 'MOE-approved or accredited online schools' },
    { aspect: 'Expatriate requirement', rule: 'No KHDA/MOE approval needed' }
  ] as HomeschoolingRule[],
  rahhalProgram: {
    description: 'KHDA initiative for flexible learning',
    features: 'Part-time schooling options',
    benefit: 'Allows students to combine school with other activities'
  },
  options: [
    { option: 'MOE Curriculum', description: 'Arabic curriculum provided by Ministry' },
    { option: 'Online Schools', description: 'British, American, international curricula' },
    { option: 'Tutoring Services', description: 'Individual subject support' }
  ] as HomeschoolOption[],
  backToSchoolPolicy: {
    description: 'Government employee parents get flexibility',
    benefit: 'Children can start school later on certain days',
    appliesTo: 'Federal government employees'
  },
  statistics: [
    'Growing trend, especially among expatriates',
    'Limited official data on homeschool numbers',
    'Acceptance increasing but school enrollment still dominant'
  ]
}

// ============================================================================
// SECTION 28: STUDENT PROTESTS & POLITICAL ENGAGEMENT
// ============================================================================

export interface NYUADIncident {
  incident: string
  date: string
  details: string
}

export const studentProtests = {
  nyuADIncidents2024: [
    { incident: 'Student Deportation', date: 'May/June 2024', details: 'Student detained, deported for wearing keffiyeh at graduation' },
    { incident: 'Graduation Restrictions', date: 'June 2024', details: 'New rules barred decorating caps/gowns with scarves or symbols' },
    { incident: 'New Event Restrictions', date: '2023-2024', details: 'Restrictions on social, cultural, political events' }
  ] as NYUADIncident[],
  broaderContext: [
    'Student protests globally surged in 2024 regarding Gaza conflict',
    'NYU Abu Dhabi saw protests calling for campus closure',
    'December 2024: Students rallied in NYC to protest NYUAD amid Gaza war'
  ],
  uaeRestrictions: [
    'Political expression tightly controlled',
    'Protests generally not permitted',
    'Social media monitoring exists',
    'International student visa sensitivity'
  ],
  regionalUniversityProtests: [
    'US universities saw major encampment protests (April 2024)',
    'UAE campuses remained largely quiet due to strict controls',
    'Some students participated in US campus protests virtually'
  ],
  visaConcerns: [
    'International students aware of visa dependency',
    'Self-censorship on sensitive political topics',
    'Faculty also face risks'
  ],
  academicFreedomIndex: {
    uaeScore: '0.20 (very low)',
    ranking: 'Near bottom globally',
    note: 'Students report pressure regarding Palestinian expression'
  }
}

// ============================================================================
// SECTION 29: DATA TABLES & STATISTICS (CONSOLIDATED)
// ============================================================================

export interface EducationQuickFact {
  metric: string
  value: string
}

export interface PisaTimssSummary {
  assessment: string
  uaeScoreRank: string
  vsGlobalAverage: string
}

export interface UniversityRankingSummary {
  university: string
  qsWorld: string
  theWorld: string
  arabRank: string
}

export interface YouthStatistic {
  metric: string
  value: string
}

export interface EducationMarketSize {
  market: string
  size: string
  year: string
  projection: string
}

export interface TeacherStat {
  metric: string
  value: string
}

export interface SchoolFeeRange {
  level: string
  britishCurriculum: string
  ibAmerican: string
}

export interface AntiBullyingStat {
  metric: string
  overall: string
  private: string
  public: string
}

export interface NYUADDemographic {
  metric: string
  value: string
}

export interface SorbonneAbuDhabiProfile {
  metric: string
  value: string
}

export const dataTables = {
  educationQuickFacts: [
    { metric: 'Literacy Rate (Adult)', value: '98.81%' },
    { metric: 'Literacy Rate (Youth 15-24)', value: '99.6%' },
    { metric: 'UN Education Index', value: '0.802' },
    { metric: 'Education Budget (2026)', value: 'AED 16.9 billion' },
    { metric: 'Total Schools', value: '1,219+' },
    { metric: 'Total Students', value: '~1,080,000' },
    { metric: 'Universities', value: '33+' },
    { metric: 'Average Class Size', value: '22.5' }
  ] as EducationQuickFact[],
  pisaTimssSummary: [
    { assessment: 'PISA 2022 Math', uaeScoreRank: '431', vsGlobalAverage: 'Below avg (489)' },
    { assessment: 'PISA 2022 Science', uaeScoreRank: '432', vsGlobalAverage: 'Below avg (485)' },
    { assessment: 'PISA 2022 Reading', uaeScoreRank: '417', vsGlobalAverage: 'Below avg (493)' },
    { assessment: 'TIMSS 2023 Grade 4 Math', uaeScoreRank: '36th', vsGlobalAverage: '+7 pts' },
    { assessment: 'TIMSS 2023 Grade 8 Math', uaeScoreRank: '21st', vsGlobalAverage: '+52 pts' },
    { assessment: 'TIMSS 2023 Grade 4 Science', uaeScoreRank: '33rd', vsGlobalAverage: '+26 pts' },
    { assessment: 'TIMSS 2023 Grade 8 Science', uaeScoreRank: '21st', vsGlobalAverage: '+62 pts' },
    { assessment: 'Dubai Privates TIMSS Math', uaeScoreRank: '6th-7th', vsGlobalAverage: 'Top 5 globally' },
    { assessment: 'Dubai Privates TIMSS Science', uaeScoreRank: '4th-5th', vsGlobalAverage: 'Top 5 globally' }
  ] as PisaTimssSummary[],
  universityRankings2026: [
    { university: 'Khalifa University', qsWorld: '177', theWorld: '201-250', arabRank: '3rd' },
    { university: 'UAEU', qsWorld: '229', theWorld: '201-250', arabRank: '5th' },
    { university: 'AUS', qsWorld: '~300s', theWorld: '-', arabRank: 'Top 10' },
    { university: 'NYUAD', qsWorld: '~300s', theWorld: '-', arabRank: 'Top 10' },
    { university: 'Zayed University', qsWorld: '~400s', theWorld: '-', arabRank: 'Top 20' }
  ] as UniversityRankingSummary[],
  youthStatistics: [
    { metric: 'Youth Unemployment', value: '6.45% (2025)' },
    { metric: 'Male Youth Unemployment', value: '7.9%' },
    { metric: 'Female Youth Unemployment', value: '19.9%' },
    { metric: 'Juvenile Crime Cases', value: '116 (2022)' },
    { metric: 'Youth Depression Rate', value: '17-22%' },
    { metric: 'Youth Literacy', value: '99.6%' }
  ] as YouthStatistic[],
  educationMarketSize: [
    { market: 'K-12 International', size: '$11.45B', year: '2026', projection: '$19.02B (2031)' },
    { market: 'Education Market Growth', size: '$5.1B', year: '2025-2029', projection: '8.6% CAGR' },
    { market: 'STEM K-12', size: '$179.4M', year: '2024', projection: '$426.6M (2030)' },
    { market: 'TVET', size: '$14.4M', year: '2024', projection: '$27.6M (2030)' }
  ] as EducationMarketSize[],
  teacherStatistics: [
    { metric: 'Teachers needed by 2030', value: '30,000+' },
    { metric: 'Current vacancies', value: '900+' },
    { metric: 'Work longer than home country', value: '87%' },
    { metric: 'Plan to leave within 4 years', value: '54%' },
    { metric: 'Work 40-49 hours/week', value: '32%' }
  ] as TeacherStat[],
  schoolFeeRanges: [
    { level: 'Nursery', britishCurriculum: '36,560-49,440', ibAmerican: '22,992-67,119' },
    { level: 'Primary Year 1', britishCurriculum: '10,685-57,006', ibAmerican: '26,113-88,848' },
    { level: 'Secondary Year 7', britishCurriculum: '11,532-78,601', ibAmerican: '30,939-97,462' },
    { level: 'Year 13/Grade 12', britishCurriculum: '16,818-98,465', ibAmerican: '43,996-117,552' }
  ] as SchoolFeeRange[],
  antiBullyingStatistics: [
    { metric: 'Bullying victimization', overall: '37%', private: '40%', public: '35%' },
    { metric: 'Physical bullying', overall: '20%', private: '24%', public: '18%' },
    { metric: 'Cyberbullying', overall: '31%', private: '37%', public: '27%' },
    { metric: 'Male victims', overall: '42%', private: '-', public: '-' },
    { metric: 'Female victims', overall: '27%', private: '-', public: '-' }
  ] as AntiBullyingStat[],
  nyuadStudentDemographics: [
    { metric: 'Established', value: '2010' },
    { metric: 'Location', value: 'Saadiyat Island, Abu Dhabi' },
    { metric: 'Undergraduates', value: '2,075+' },
    { metric: 'Postgraduates', value: '130+' },
    { metric: 'Acceptance rate', value: '~3%' },
    { metric: 'Rhodes Scholars', value: '22' },
    { metric: 'Academic staff', value: '320+' },
    { metric: 'Majors', value: '26' }
  ] as NYUADDemographic[],
  sorbonneAbuDhabiProfile: [
    { metric: 'Established', value: 'May 30, 2006' },
    { metric: 'Location', value: 'Al Reem Island, Abu Dhabi' },
    { metric: 'Campus Size', value: '93,000 sq meters' },
    { metric: 'Student Body', value: '3,000+ from 90+ nationalities' },
    { metric: 'Programs', value: '20+' },
    { metric: 'Research Centers', value: '7 (SAFIR Institute)' }
  ] as SorbonneAbuDhabiProfile[]
}

// ============================================================================
// SECTION 30: SOURCE URLs
// ============================================================================

export interface OfficialGovernmentSource {
  source: string
  url: string
}

export interface InternationalAssessmentSource {
  source: string
  url: string
}

export interface UniversityRankingsSource {
  source: string
  url: string
}

export interface AcademicFreedomSource {
  source: string
  url: string
}

export interface EducationDataSource {
  source: string
  url: string
}

export interface EdTechSource {
  source: string
  url: string
}

export interface NewsSource {
  source: string
  url: string
}

export interface UniversitySource {
  source: string
  url: string
}

export interface StatisticalSource {
  source: string
  url: string
}

export const sourceUrls = {
  officialGovernment: [
    { source: 'UAE Government Official Platform', url: 'https://u.ae' },
    { source: 'Ministry of Education', url: 'https://www.moe.gov.ae' },
    { source: 'Ministry of Finance', url: 'https://mof.gov.ae' },
    { source: 'KHDA', url: 'https://www.khda.gov.ae' },
    { source: 'ADEK', url: 'https://www.adek.gov.ae' },
    { source: 'MOFA Scholarship', url: 'https://www.mofa.gov.ae/en/scholarship' },
    { source: 'UAE Federal Budget', url: 'https://mof.gov.ae/en/public-finance/uae-federal-budget' }
  ] as OfficialGovernmentSource[],
  internationalAssessments: [
    { source: 'OECD PISA', url: 'https://www.oecd.org/pisa/' },
    { source: 'TIMSS 2023 Results', url: 'https://timss2023.org/results/' },
    { source: 'IEA TIMSS', url: 'https://www.iea.nl/studies/iea/timss' }
  ] as InternationalAssessmentSource[],
  universityRankings: [
    { source: 'QS World Rankings', url: 'https://www.topuniversities.com' },
    { source: 'Times Higher Education', url: 'https://www.timeshighereducation.com' },
    { source: 'Khalifa University Rankings', url: 'https://www.ku.ac.ae' }
  ] as UniversityRankingsSource[],
  academicFreedomHumanRights: [
    { source: 'Amnesty International Report', url: 'https://www.amnesty.org' },
    { source: 'MESA Committee on Academic Freedom', url: 'https://mesana.org' },
    { source: 'impACT International', url: 'https://impactpolicies.org' }
  ] as AcademicFreedomSource[],
  educationDataResearch: [
    { source: 'ISC Research', url: 'https://iscresearch.com' },
    { source: 'World Bank Education Data', url: 'https://data.worldbank.org' },
    { source: 'UNESCO UNEVOC', url: 'https://unevoc.unesco.org' },
    { source: 'UNICEF Data', url: 'https://data.unicef.org' }
  ] as EducationDataSource[],
  edTechCompanies: [
    { source: 'Alef Education', url: 'https://www.alefeducation.com' },
    { source: 'G42', url: 'https://www.g42.ai' }
  ] as EdTechSource[],
  newsSources: [
    { source: 'Gulf News', url: 'https://gulfnews.com' },
    { source: 'Khaleej Times', url: 'https://www.khaleejtimes.com' },
    { source: 'The National', url: 'https://www.thenationalnews.com' },
    { source: 'Emirates News Agency (WAM)', url: 'https://wam.ae' }
  ] as NewsSource[],
  universitySources: [
    { source: 'NYU Abu Dhabi', url: 'https://nyuad.nyu.edu' },
    { source: 'Sorbonne Abu Dhabi', url: 'https://www.sorbonne.ae' },
    { source: 'Khalifa University', url: 'https://www.ku.ac.ae' },
    { source: 'UAE University', url: 'https://www.uaeu.ac.ae' }
  ] as UniversitySource[],
  statisticalSources: [
    { source: 'Statista', url: 'https://www.statista.com' },
    { source: 'YCharts', url: 'https://ycharts.com' },
    { source: 'Macrotrends', url: 'https://www.macrotrends.net' },
    { source: 'World Population Review', url: 'https://worldpopulationreview.com' }
  ] as StatisticalSource[]
}

// ============================================================================
// VERIFICATION STATUS & ENRICHMENT
// ============================================================================

export const verificationStatus = {
  allQueriesExecuted: true,
  allPagesFetched: true,
  allDataExtracted: true,
  sourceUrlsDocumented: true,
  noFabricationDetected: true,
  frameworkMethodologyFollowed: true,
  enrichedWithWebSearch: true,
  enrichmentDate: '2026-04-27'
}

export const enrichmentNotes = [
  'Verification of existing data points against latest sources',
  'Addition of 2025-2026 budget figures (AED 16.9 billion education allocation)',
  'Updated university rankings (QS 2026, THE 2026)',
  'Enhanced AI education mandate details (G42, AI71 involvement)',
  'Updated TIMSS 2023 data with Dubai private school specifics',
  'Youth unemployment data verification (6.45% for 2025)',
  'School fee cap update (2.35% ECI for 2025-26)',
  'Teacher shortage crisis data (30,000 needed by 2030)',
  'Enhanced juvenile justice framework information',
  'Updated anti-bullying legislation (September 2025)'
]

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  lastUpdated: '2026-04-27',
  enrichmentCompleted: 'Yes',
  documentStatus: 'Complete and Verified',
  totalDataPoints: '500+',
  sourceUrls: '40+',
  tables: '10 comprehensive data tables'
}

// ============================================================================
// MAIN DATA OBJECT
// ============================================================================

export interface EducationYouthData {
  id: string
  sector: HSBPCCategory
  title: string
  titleAr: string
  description: string
  executionMetadata: typeof executionMetadata
  educationSystemOverview: typeof educationSystemOverview
  literacyRates: typeof literacyRates
  educationBudget: typeof educationBudget
  pisatimssRankings: typeof pisatimssRankings
  schoolSystem: typeof schoolSystem
  schoolFees: typeof schoolFees
  schoolQualityRatings: typeof schoolQualityRatings
  higherEducationSystem: typeof higherEducationSystem
  universityRankings: typeof universityRankings
  internationalBranchCampuses: typeof internationalBranchCampuses
  academicFreedom: typeof academicFreedom
  teacherRecruitment: typeof teacherRecruitment
  curriculumAI: typeof curriculumAI
  edtechEducation: typeof edtechEducation
  vocationalEducation: typeof vocationalEducation
  stemEducation: typeof stemEducation
  specialNeedsInclusion: typeof specialNeedsInclusion
  scholarshipPrograms: typeof scholarshipPrograms
  studentDebtRelief: typeof studentDebtRelief
  youthUnemployment: typeof youthUnemployment
  youthMentalHealth: typeof youthMentalHealth
  youthCrimeJuvenileJustice: typeof youthCrimeJuvenileJustice
  schoolBullying: typeof schoolBullying
  credentialFraud: typeof credentialFraud
  internationalSchoolMarket: typeof internationalSchoolMarket
  educationSoftPower: typeof educationSoftPower
  homeschooling: typeof homeschooling
  studentProtests: typeof studentProtests
  dataTables: typeof dataTables
  sourceUrls: typeof sourceUrls
  verificationStatus: typeof verificationStatus
  enrichmentNotes: typeof enrichmentNotes
  reportMetadata: typeof reportMetadata
}

export const educationYouthData: EducationYouthData = {
  id: 'topic-2-11',
  sector: 'community',
  title: 'Education & Youth',
  titleAr: 'التعليم والشباب',
  description: 'Education system, literacy rates, PISA/TIMSS rankings, school quality, higher education, academic freedom, teacher recruitment, AI education mandate, EdTech, TVET, STEM, special needs, scholarships, youth unemployment, mental health, crime, bullying, credential fraud, international schools, soft power, homeschooling, student protests',
  executionMetadata,
  educationSystemOverview,
  literacyRates,
  educationBudget,
  pisatimssRankings,
  schoolSystem,
  schoolFees,
  schoolQualityRatings,
  higherEducationSystem,
  universityRankings,
  internationalBranchCampuses,
  academicFreedom,
  teacherRecruitment,
  curriculumAI,
  edtechEducation,
  vocationalEducation,
  stemEducation,
  specialNeedsInclusion,
  scholarshipPrograms,
  studentDebtRelief,
  youthUnemployment,
  youthMentalHealth,
  youthCrimeJuvenileJustice,
  schoolBullying,
  credentialFraud,
  internationalSchoolMarket,
  educationSoftPower,
  homeschooling,
  studentProtests,
  dataTables,
  sourceUrls,
  verificationStatus,
  enrichmentNotes,
  reportMetadata
}

export default educationYouthData
