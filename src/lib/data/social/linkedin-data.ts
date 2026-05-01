/**
 * LinkedIn Intelligence Data - Comprehensive UAE LinkedIn & Professional Network Intelligence
 * Source: MD File 5-6-linkedin-results.md (2026-04-27)
 * Data Points: 400+ | Source URLs: 100+ | Queries: 23
 *
 * UAE National Digital Intelligence Platform - Social Media Intelligence Module
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface LayoffStat {
  label: string
  value: string
  source: string
  credibility: 'High' | 'Medium' | 'Low'
  date?: string
}

export interface HiringStat {
  label: string
  value: string
  source: string
  credibility: 'High' | 'Medium' | 'Low'
}

export interface SalaryStat {
  label: string
  value: string
  context: string
  source?: string
}

export interface WorkplaceStat {
  label: string
  value: string
  context: string
  source?: string
}

export interface EmiratisationStat {
  label: string
  value: string
  deadline?: string
  source?: string
}

export interface VisaStat {
  label: string
  value: string
  context: string
}

export interface AISkillStat {
  label: string
  value: string
  context: string
  source?: string
}

export interface RemoteWorkStat {
  label: string
  value: string
  context?: string
}

export interface CareerStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface FraudStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface DiscriminationStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface ResignationStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface BusinessClosureStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface BenefitStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface LaborLawStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface RecruitmentStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface EngagementStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface FreelancerStat {
  label: string
  value: string
  context?: string
  source?: string
}

export interface ExpertQuote {
  name: string
  title?: string
  organization?: string
  quote: string
}

export interface TimelineEvent {
  date: string
  event: string
  category?: string
}

export interface KeyFinding {
  id: number
  finding: string
  source: string
  url?: string
  date: string
  sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Mixed'
}

export interface DetailedAnalysis {
  title: string
  source: string
  date?: string
  author?: string
  keyPoints: string[]
  statistics: { label: string; value: string }[]
  quotes?: ExpertQuote[]
  context?: string
}

// ============================================================================
// LINKEDIN INTELLIGENCE DATA STRUCTURE
// ============================================================================

export interface LinkedInIntelligence {
  // Execution Metadata
  metadata: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    enrichmentDate: string
    totalDataPoints: number
    sourceUrlsAnalyzed: number
  }

  // Executive Summary
  executiveSummary: {
    keyHighlights: string[]
    criticalIssues: string[]
    strategicInsights: string[]
    regulatoryEnvironment: string[]
    emergingTrends: string[]
  }

  // Sentiment Analysis
  sentimentAnalysis: {
    category: string
    sentiment: 'Positive' | 'Negative' | 'Neutral' | 'Mixed'
    dominantFeeling: string
    percentage: number
  }[]

  // Statistics by Category
  statistics: {
    layoffs: LayoffStat[]
    hiring: HiringStat[]
    salaries: SalaryStat[]
    workplace: WorkplaceStat[]
    emiratisaton: EmiratisationStat[]
    visas: VisaStat[]
    aiSkills: AISkillStat[]
    remoteWork: RemoteWorkStat[]
    careers: CareerStat[]
    fraud: FraudStat[]
    discrimination: DiscriminationStat[]
    resignation: ResignationStat[]
    businessClosure: BusinessClosureStat[]
    benefits: BenefitStat[]
    laborLaw: LaborLawStat[]
    recruitment: RecruitmentStat[]
    engagement: EngagementStat[]
    freelancer: FreelancerStat[]
  }

  // Key Findings by Section
  keyFindings: {
    section: string
    searchQuery: string
    findings: KeyFinding[]
  }[]

  // Detailed Analysis Data
  detailedAnalysis: {
    section: string
    analysis: DetailedAnalysis[]
  }[]

  // Timeline Events
  timeline: TimelineEvent[]

  // Expert Quotes
  expertQuotes: {
    section: string
    quotes: ExpertQuote[]
  }[]

  // Source Categories
  sourceCategories: {
    category: string
    count: number
  }[]

  // UAE Relevance Assessment
  relevanceAssessment: {
    level: 'Critical' | 'High' | 'Moderate'
    category: string
    items: string[]
  }[]

  // Comprehensive Summary Statistics
  comprehensiveSummary: {
    category: string
    metrics: { metric: string; value: string; source: string; credibility: string }[]
  }[]

  // Platform Metrics (for hook compatibility)
  platform: string
  metrics: {
    users: number
    penetration: number
    demographics: string
    sentiment: {
      overall: string
      score: number
      breakdown: { positive: number; neutral: number; negative: number }
      trending: string[]
      keyConcerns: string[]
    }
    engagement: {
      avgLikes: number
      avgComments: number
      avgShares: number
      trendingHashtags: string[]
    }
    botActivity: {
      estimatedBotPercent: number
      coordinatedInauthentic: boolean
      confidence: number
      indicators: string[]
    }
  }
  censorship: {
    level: 'minimal' | 'partial' | 'extreme'
    complianceRate: number
    governmentRequests: number
    contentRemoved: number
    notes: string
  }
  keyNarratives: {
    topic: string
    narrative: string
    prevalence: number
    sentiment: 'Positive' | 'Negative' | 'Neutral'
    sources: string[]
  }[]
  governmentAccounts: {
    handle: string
    followers: number
    type: string
    verified: boolean
  }[]
  darkSocialScore: number
  lastUpdated: string
}

// ============================================================================
// COMPREHENSIVE DATA IMPLEMENTATION
// ============================================================================

export const linkedinData: LinkedInIntelligence = {
  // ---------------------------------------------------------------------------
  // EXECUTION METADATA
  // ---------------------------------------------------------------------------
  metadata: {
    dateExecuted: '2026-04-27',
    frameworkVersion: '1.0',
    queriesExecuted: 23,
    pagesFetched: 45,
    enrichmentDate: '2026-04-27',
    totalDataPoints: 400,
    sourceUrlsAnalyzed: 100,
  },

  // ---------------------------------------------------------------------------
  // EXECUTIVE SUMMARY
  // ---------------------------------------------------------------------------
  executiveSummary: {
    keyHighlights: [
      'Economic Pressure: Gulf war tensions causing layoffs, pay cuts (20-50%), business closures',
      'Talent Paradox: 76% of employers cannot find skilled workers while workforce faces hiring difficulties',
      'AI Transformation: UAE adding 1 million jobs by 2030; AI positions doubled 2021-2024',
      'Strong Labor Protections: Article 14 on harassment, Article 4 on discrimination, Article 5 on equality',
      'Emiratisation Impact: 7% quota with AED 9,000/month fines for non-compliance',
      'Visa Vulnerabilities: Pakistani nationals facing delays; employment tied to visa status',
      'Gig Economy Growth: Freelancer permits (AED 7,500/year) enabling independent work',
      'Remote Work Evolution: No automatic right to remote work; requires employer approval',
    ],
    criticalIssues: [
      'Economic Pressure: Gulf war tensions causing layoffs, pay cuts (20-50%), and business closures',
      'Visa Vulnerabilities: Pakistani nationals facing systematic delays/rejections; employment tied to visa status',
      'Emiratisation Compliance: 7% quota with AED 9,000/month fines for non-compliance',
    ],
    strategicInsights: [
      'Talent Paradox: 76% of employers cannot find skilled workers while workforce faces hiring difficulties',
      'AI Transformation: UAE adding 1 million jobs by 2030; AI-related positions doubled 2021-2024',
      'Remote Work: No automatic right to remote work; requires employer approval',
    ],
    regulatoryEnvironment: [
      'Strong Labor Protections: Article 14 on harassment, Article 4 on discrimination, Article 5 on equality',
      'Gig Economy Growth: Freelancer permits (AED 7,500/year) enabling independent work',
      'Recent Reforms: Federal Decree-Law No. 33 of 2021 modernized labor relations',
    ],
    emergingTrends: [
      'Skills-Based Hiring: 73% of organizations say essential but only 19% implementing',
      'Employee Expectations: 80% would switch jobs for better pay or flexibility',
      'LinkedIn Critical: Over 9 million users in UAE; essential for recruitment',
    ],
  },

  // ---------------------------------------------------------------------------
  // SENTIMENT ANALYSIS
  // ---------------------------------------------------------------------------
  sentimentAnalysis: [
    { category: 'Layoffs & Job Cuts', sentiment: 'Negative', dominantFeeling: 'Fear, uncertainty due to Gulf conflict', percentage: 70 },
    { category: 'Hiring & Talent', sentiment: 'Mixed', dominantFeeling: 'Optimism tempered by skills gaps', percentage: 50 },
    { category: 'Salary & Compensation', sentiment: 'Neutral', dominantFeeling: 'Market stabilization', percentage: 0 },
    { category: 'Workplace Issues', sentiment: 'Negative', dominantFeeling: 'Concerns about toxicity and harassment', percentage: 60 },
    { category: 'Discrimination', sentiment: 'Negative', dominantFeeling: 'Progress vs. persistent issues', percentage: 60 },
    { category: 'Business Closure', sentiment: 'Negative', dominantFeeling: 'War impact and economic strain', percentage: 70 },
    { category: 'AI & Jobs', sentiment: 'Positive', dominantFeeling: 'Opportunity and growth', percentage: 70 },
    { category: 'Remote Work', sentiment: 'Neutral', dominantFeeling: 'Evolving legal framework', percentage: 0 },
  ],

  // ---------------------------------------------------------------------------
  // STATISTICS BY CATEGORY
  // ---------------------------------------------------------------------------
  statistics: {
    // LAYOFFS & JOB CUTS
    layoffs: [
      { label: 'Job cuts expected for Indians', value: '30%', source: 'YouTube', credibility: 'Medium' },
      { label: 'Salary reduction range', value: '20-50%', source: 'Times of India', credibility: 'High' },
      { label: 'Indian workers terminated by one firm', value: '90%', source: 'YouTube', credibility: 'Medium' },
      { label: 'UAE companies cutting staff in 2026', value: '29%', source: 'Cooper Fitch (LinkedIn)', credibility: 'High' },
      { label: 'Companies increasing headcount', value: '48%', source: 'Cooper Fitch', credibility: 'High' },
      { label: 'Companies staying flat', value: '23%', source: 'Cooper Fitch', credibility: 'High' },
      { label: 'Companies planning layoffs', value: '33%', source: 'Cooper Fitch', credibility: 'High' },
    ],

    // HIRING & TALENT SHORTAGE
    hiring: [
      { label: 'UAE employers planning expansion', value: '56%', source: 'Taaeen Group', credibility: 'High' },
      { label: 'Employers struggling to hire', value: '76%', source: 'ManpowerGroup', credibility: 'High' },
      { label: 'Dubai share of financial services talent', value: '32%', source: 'deVere Group', credibility: 'Medium' },
      { label: 'UAE job opening increase rate', value: '35.2%', source: 'Bloomberg', credibility: 'High' },
      { label: 'UAE hiring outlook', value: '48%', source: 'ManPowerGroup', credibility: 'High' },
      { label: 'Workforce affected by hiring challenges', value: '45%', source: 'ManpowerGroup', credibility: 'High' },
      { label: 'Employers with skills-based hiring', value: '19%', source: 'Deloitte', credibility: 'High' },
      { label: 'Job roles transforming by 2030', value: '70%', source: 'Deloitte', credibility: 'High' },
      { label: 'Workers needing reskilling', value: '1.4 million', source: 'Deloitte', credibility: 'High' },
      { label: 'Employees willing to switch for better pay', value: '80%', source: 'Deloitte', credibility: 'Medium' },
    ],

    // SALARIES & COMPENSATION
    salaries: [
      { label: 'Minimum wage standard', value: '1,200 AED/month', context: '~$326 USD', source: 'Chaadhr' },
      { label: 'Average annual salary', value: '177,279 AED', context: '~$48,300 USD', source: 'SalaryExpert' },
      { label: 'Average hourly rate', value: '85 AED', context: '~$23 USD', source: 'SalaryExpert' },
      { label: 'CFO/Finance Director salary', value: 'AED 60,000-120,000/month', context: 'Senior roles', source: 'LinkedIn' },
      { label: 'Basic salary ratio', value: '40-60%', context: 'of total compensation', source: 'Asanify' },
      { label: 'Housing allowance', value: '20-40%', context: 'of basic salary', source: 'Asanify' },
      { label: 'Transportation allowance', value: '10-15%', context: 'of basic salary', source: 'Asanify' },
      { label: 'Employer costs above salary', value: '20-30%', context: 'expatriate employment', source: 'Asanify' },
      { label: 'Expected salary increase 2026', value: '4.1%', context: 'Deloitte forecast', source: 'Deloitte' },
    ],

    // WORKPLACE CULTURE & ISSUES
    workplace: [
      { label: 'UAE employees engaged', value: '27%', context: 'Gallup 2025 vs 14% MENA avg', source: 'Gallup' },
      { label: 'Cost of disengaged employees', value: '$10.3 billion', context: 'to UAE economy', source: 'Gallup' },
      { label: 'Registered businesses (2017)', value: '131,000', context: 'UAE', source: 'Expatica' },
      { label: 'FDI (2018)', value: '$10.3 billion', context: 'foreign direct investment', source: 'Expatica' },
      { label: 'Women in public sector', value: '66%', context: 'as of 2018', source: 'Expatica' },
      { label: 'Emirati women university grads', value: '71%', context: 'as of 2018', source: 'Expatica' },
      { label: 'Global harassment victims', value: '23%', context: 'ILO/Gallup 2022', source: 'ILO/Gallup' },
      { label: 'Psychological violence victims', value: '17.9%', context: 'ILO/Gallup 2022', source: 'ILO/Gallup' },
      { label: 'Physical violence victims', value: '8.5%', context: 'ILO/Gallup 2022', source: 'ILO/Gallup' },
      { label: 'Sexual harassment victims', value: '6%+', context: 'ILO/Gallup 2022', source: 'ILO/Gallup' },
      { label: 'Young women vs men harassment ratio', value: '2:1', context: 'ILO/Gallup 2022', source: 'ILO/Gallup' },
      { label: 'Harassment fines', value: 'AED 5,000-1,000,000', context: 'Article 14 penalties', source: 'Emirates Law' },
    ],

    // EMIRATISATION
    emiratisaton: [
      { label: 'Monthly fine per unfilled role', value: 'AED 9,000', deadline: '2025', source: 'JobXDubai' },
      { label: 'Annual fine per missing Emirati', value: 'AED 108,000', deadline: '2026', source: 'JobXDubai' },
      { label: 'Fake Emiratisation companies caught', value: '1,202', deadline: 'March 2024', source: 'British Chamber' },
      { label: 'Unlawful hires detected', value: '1,963', deadline: 'March 2024', source: 'British Chamber' },
      { label: 'Emiratis employed in private sector', value: '136,000+', deadline: 'Current', source: 'JobXDubai' },
      { label: 'Companies employing Emiratis', value: '28,000', deadline: 'Current', source: 'JobXDubai' },
      { label: 'Target 2025', value: '8%', deadline: 'Dec 31, 2025', source: 'Auxilium' },
      { label: 'Final target 2026', value: '10%', deadline: 'Dec 31, 2026', source: 'Auxilium' },
      { label: 'Fake Emiratisation fines', value: 'AED 20,000-100,000', deadline: 'Per incident', source: 'British Chamber' },
    ],

    // VISAS
    visas: [
      { label: 'Restricted countries', value: '9', context: 'Afghanistan, Bangladesh, Cameroon, Lebanon, Libya, Somalia, Sudan, Uganda, Yemen' },
      { label: 'Overstay fine (daily)', value: 'AED 50-100', context: 'after grace period' },
      { label: 'Exit ban trigger', value: '6 months', context: 'overstay duration' },
      { label: 'Ban removal processing', value: '2-8 weeks', context: 'after fines paid' },
      { label: 'New visa deposit', value: 'AED 3,000', context: 'refundable security (Pakistani nationals)' },
    ],

    // AI SKILLS & DEMAND
    aiSkills: [
      { label: 'New workers needed by 2030', value: '1 million', context: 'Gulf News', source: 'Gulf News' },
      { label: 'Employment increase projected', value: '12.1%', context: 'by 2030', source: 'Gulf News' },
      { label: 'Technology roles increase', value: '54%', context: 'demand growth', source: 'Gulf News' },
      { label: 'Technical specialists needed', value: '91,000+', context: 'by 2030', source: 'Gulf News' },
      { label: 'Recruiters who cannot do job without AI', value: '47%', context: 'LinkedIn research', source: 'LinkedIn' },
      { label: 'Recruiters helped by AI', value: '76%', context: 'LinkedIn research', source: 'LinkedIn' },
      { label: 'AI jobs doubling (2021-2024)', value: '100%', context: 'Indian Express', source: 'Indian Express' },
      { label: 'Job listings mentioning AI/automation', value: '10%', context: 'Naukrigulf', source: 'Naukrigulf' },
      { label: 'Employers screening for AI proficiency', value: '52%', context: 'Naukrigulf', source: 'Naukrigulf' },
    ],

    // REMOTE WORK
    remoteWork: [
      { label: 'Remote work visa minimum salary', value: '$3,500/month', context: 'NeuralHR' },
      { label: 'Remote work visa validity', value: '1 year', context: 'renewable' },
      { label: 'Application fee', value: 'AED 1,610', context: 'approximately' },
      { label: 'Cross-border work limit', value: '30 days/year', context: 'ADGM regulations' },
      { label: 'Standard working hours', value: '8 hrs/day, 48 hrs/week', context: 'Gulf News' },
      { label: 'No automatic right to remote work', value: 'True', context: 'requires employer approval' },
    ],

    // CAREERS & DEVELOPMENT
    careers: [
      { label: 'Open to career change', value: '60%', context: 'of UAE professionals', source: 'Labeeb' },
      { label: 'Typical transition timeline', value: '3-6 months', context: 'Labeeb', source: 'Labeeb' },
      { label: 'Jobs displaced by automation', value: '85 million', context: 'World Economic Forum', source: 'WEF' },
      { label: 'Laid off finding equal/better job', value: '92%', context: 'Korn Ferry', source: 'Korn Ferry' },
      { label: 'Career transition program cost', value: 'AED 4,100', context: 'Inner Me program', source: 'Inner Me' },
      { label: 'Target experience level', value: '5-15 years', context: 'Inner Me program', source: 'Inner Me' },
    ],

    // FRAUD & SCAMS
    fraud: [
      { label: 'AI-powered phishing breaches', value: '90%+', context: 'UAE Cybersecurity Council', source: 'Cybersecurity Council' },
      { label: 'UAE residents losing to scams', value: '40,000+', context: 'MENAFN', source: 'MENAFN' },
      { label: 'BlueChip victims', value: '800', context: 'MENAFN', source: 'MENAFN' },
      { label: 'Exential Group victims', value: '7,000', context: 'MENAFN', source: 'MENAFN' },
      { label: 'Sky Media victims (Middle East)', value: '22,000', context: 'MENAFN', source: 'MENAFN' },
      { label: 'Exential owner prison sentence', value: '515 years', context: 'MENAFN', source: 'MENAFN' },
    ],

    // DISCRIMINATION
    discrimination: [
      { label: 'UAE Gender Inequality Index rank', value: '7th global, 1st regional', context: 'UNDP', source: 'UNDP' },
      { label: "Women's rights score", value: '82.5/100', context: 'World Bank', source: 'World Bank' },
      { label: 'Women in Federal National Council', value: '50%', context: 'PCHR', source: 'PCHR' },
      { label: 'Women in ministerial positions', value: '25%+', context: 'PCHR', source: 'PCHR' },
      { label: 'Women in leadership roles', value: '30%', context: 'PCHR', source: 'PCHR' },
      { label: 'Private sector companies owned by women', value: '10%', context: 'PCHR', source: 'PCHR' },
      { label: 'Trade licenses to women (2018-2022)', value: '44,000+', context: 'PCHR', source: 'PCHR' },
    ],

    // RESIGNATION & NOTICES
    resignation: [
      { label: 'Standard notice period', value: '30 days', context: 'Kayrouz', source: 'Kayrouz' },
      { label: 'Maximum notice period', value: '90 days', context: 'Kayrouz', source: 'Kayrouz' },
      { label: 'Probation notice', value: '14-30 days', context: 'EGSH', source: 'EGSH' },
      { label: 'Probation period', value: '6 months', context: 'standard in UAE', source: 'Kayrouz' },
      { label: 'Gratuity entitlement', value: 'After 1 year', context: 'continuous service', source: 'Kayrouz' },
      { label: 'Gratuity rate (after 5 years)', value: '30 days/year', context: 'Kayrouz', source: 'Kayrouz' },
      { label: 'Expatriates in UAE workforce', value: '11 million+', context: 'Kayrouz', source: 'Kayrouz' },
    ],

    // BUSINESS CLOSURE
    businessClosure: [
      { label: 'Marka PJSC director liability', value: 'AED 450 million', context: 'LinkedIn', source: 'LinkedIn' },
      { label: 'Bankruptcy trigger (debt)', value: 'AED 100,000+', context: 'ME Briefing', source: 'ME Briefing' },
      { label: 'Creditor notice period', value: '45 days', context: 'ME Briefing', source: 'ME Briefing' },
      { label: 'Bankruptcy filing trigger', value: '30 days default', context: 'ME Briefing', source: 'ME Briefing' },
      { label: 'Company closure timeline (mainland)', value: '2-3 months', context: 'Arnifi', source: 'Arnifi' },
      { label: 'Company closure timeline (free zone)', value: '1-2 months', context: 'Arnifi', source: 'Arnifi' },
    ],

    // EMPLOYEE BENEFITS
    benefits: [
      { label: 'Standard working hours', value: '8 hrs/day, 48 hrs/week', context: 'Remote', source: 'Remote' },
      { label: 'Overtime pay (day)', value: '25%', context: 'additional', source: 'Remote' },
      { label: 'Overtime pay (night)', value: '50%', context: '10 pm-4 am', source: 'Remote' },
      { label: 'Annual leave', value: '30 days', context: 'after 1 year', source: 'Remote' },
      { label: 'Sick leave', value: '90 days', context: '15 full, 30 half, 45 unpaid', source: 'Remote' },
      { label: 'Maternity leave', value: '60 days', context: '45 full pay, 15 half pay', source: 'Remote' },
      { label: 'Paternity leave', value: '5 days', context: 'Remote', source: 'Remote' },
      { label: 'Health insurance (basic)', value: 'AED 320/year', context: 'mandatory from Jan 2025', source: 'Remote' },
      { label: 'Multinationals with housing allowance', value: '35%', context: 'Benifex', source: 'Benifex' },
      { label: 'Housing allowance range', value: 'AED 4,000-25,000/month', context: 'Benifex', source: 'Benifex' },
      { label: 'Transportation allowance', value: '8-12% of base', context: 'Associated Alliance', source: 'Associated' },
    ],

    // LABOR LAW
    laborLaw: [
      { label: 'WPS coverage', value: '5 million+ workers', context: 'PCHR', source: 'PCHR' },
      { label: 'Unemployment insurance duration', value: '3 months', context: 'cash compensation', source: 'PCHR' },
      { label: 'Dispute resolution threshold', value: 'AED 50,000', context: 'PCHR', source: 'PCHR' },
      { label: 'ILO conventions ratified', value: '9', context: 'PCHR', source: 'PCHR' },
      { label: 'Noon work ban year', value: '2005', context: 'first in region', source: 'PCHR' },
      { label: 'Unemployment insurance mandated', value: 'January 2023', context: 'PCHR', source: 'PCHR' },
    ],

    // RECRUITMENT
    recruitment: [
      { label: 'Applicants per Dubai job', value: '200-500+', context: 'Learnwithfaiz', source: 'Learnwithfaiz' },
      { label: 'Resumes reviewed by recruiter', value: '20-30', context: 'from ATS results', source: 'Learnwithfaiz' },
      { label: 'Candidates reaching hiring manager', value: '10-15', context: 'after screening', source: 'Learnwithfaiz' },
      { label: 'Interview rounds', value: '2-5', context: 'depending on company', source: 'Learnwithfaiz' },
      { label: 'Work permit processing', value: '3-7 days', context: 'RFS HR', source: 'RFS HR' },
      { label: 'Emirates ID processing', value: '2-4 weeks', context: 'RFS HR', source: 'RFS HR' },
      { label: 'Agency fee', value: '12-18% of salary', context: 'first-year', source: 'RFS HR' },
    ],

    // EMPLOYEE ENGAGEMENT
    engagement: [
      { label: 'UAE employees engaged (Gallup 2025)', value: '27%', context: 'vs 14% MENA avg', source: 'Gallup' },
      { label: 'MENA average engaged', value: '14%', context: 'Gallup', source: 'Gallup' },
      { label: 'Global average engaged', value: '20%', context: 'Gallup', source: 'Gallup' },
      { label: 'UAE employees thriving', value: '55%', context: 'Gallup', source: 'Gallup' },
      { label: 'UAE daily stress', value: '33%', context: 'Gallup', source: 'Gallup' },
      { label: 'Bayt engagement survey', value: '87%', context: 'feel highly engaged', source: 'Bayt.com' },
      { label: 'Job hugging estimate', value: '10-25%', context: 'WTW', source: 'WTW' },
    ],

    // FREELANCER & GIG
    freelancer: [
      { label: 'Freelancer permit cost', value: 'AED 7,500/year', context: 'Worksuite', source: 'Worksuite' },
      { label: 'Freelancing legal date', value: 'November 2020', context: 'Worksuite', source: 'Worksuite' },
      { label: 'VAT registration threshold', value: 'AED 375,000', context: 'annually', source: 'Business Umbrella' },
      { label: 'Green Visa income requirement', value: 'AED 15,000/month', context: 'Business Umbrella', source: 'Business Umbrella' },
      { label: 'Contract term maximum', value: '3 years', context: 'Boundless', source: 'Boundless' },
    ],
  },

  // ---------------------------------------------------------------------------
  // KEY FINDINGS BY SECTION
  // ---------------------------------------------------------------------------
  keyFindings: [
    {
      section: 'UAE Layoffs and Job Cuts',
      searchQuery: 'UAE layoff OR تسريح OR redundancy OR فصل OR job cut',
      findings: [
        { id: 1, finding: 'UAE Firm Terminates 90% Indians in 24 Hours', source: 'YouTube', url: 'https://www.youtube.com/watch?v=DtWNtOSp_wg', date: 'Apr 2026', sentiment: 'Negative' },
        { id: 2, finding: 'UAE Economy Under Pressure: Layoffs Surge as Gulf Tensions Hit', source: 'Mathrubhumi', url: 'https://english.mathrubhumi.com/news/world/uae-economic-slowdown-gulf-tensions-impact-india-war-tyulkmt0', date: 'Mar 31, 2026', sentiment: 'Negative' },
        { id: 3, finding: '30% Job Cuts in UAE - Indians Will Be First To Go', source: 'YouTube', url: 'https://www.youtube.com/watch?v=wbnEqt_sN2I', date: 'Apr 10, 2026', sentiment: 'Negative' },
        { id: 4, finding: 'UAE Jobs: Firms Avoid Mass Layoffs, Turn To Pay Cuts', source: 'GulfInsider', url: 'https://www.facebook.com/GulfInsider/posts/uae-jobs-firms-avoid-mass-layoffs-turn-to-pay-cuts/1412395517593067/', date: 'Apr 1, 2026', sentiment: 'Neutral' },
        { id: 5, finding: 'Despite Regional Tensions, No Widespread Layoffs Seen in UAE', source: 'Instagram', date: 'Apr 1, 2026', sentiment: 'Neutral' },
        { id: 6, finding: 'UAE Companies Juggle Pay Cuts and Jobs with Revenues Hit by War', source: 'AGBI', url: 'https://www.agbi.com/analysis/economy/2026/03/uae-companies-juggle-cost-cuts-and-jobs-with-revenues-hit-by-war/', date: 'Mar 24, 2026', sentiment: 'Negative' },
        { id: 7, finding: 'UAE Slows Down from Gulf War Stress; Raises Remittance Concerns', source: 'Economic Times', url: 'https://m.economictimes.com/nri/invest/uae-slows-down-from-gulf-war-stress-raises-remittance-concerns-for-india-amid-layoffs-pay-cuts/articleshow/129910448.cms', date: 'Mar 31, 2026', sentiment: 'Negative' },
        { id: 8, finding: 'UAE Firms on the Weight of Deciding Who Keeps Jobs Amid Layoffs', source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/lifestyle/business-owners-on-deciding-layoffs', date: 'Apr 2026', sentiment: 'Neutral' },
        { id: 9, finding: 'US-Iran War-linked Disruptions Hit UAE Jobs, Consumption', source: 'Times of India', url: 'https://timesofindia.indiatimes.com/business/india-business/us-iran-war-linked-disruptions-hit-uae-jobs-consumption-remittance-risks-for-india/articleshow/129922302.cms', date: 'Mar 31, 2026', sentiment: 'Negative' },
        { id: 10, finding: 'One Month of Conflict and Already Layoffs, Pay Cuts, and Rising Costs', source: 'Reddit', url: 'https://www.reddit.com/r/UAE/comments/1sb8ws8/one_month_of_conflict_and_already_layoffs_pay/', date: 'Apr 3, 2026', sentiment: 'Negative' },
      ],
    },
    {
      section: 'UAE Hiring and Talent Shortage',
      searchQuery: 'UAE hiring OR توظيف OR talent shortage OR نقص مواهب OR difficulty hiring',
      findings: [
        { id: 1, finding: 'Dubai Draws 32% of Financial Services Talent Despite Conflict', source: 'London Loves Business', url: 'https://londonlovesbusiness.com/dubai-draws-32-of-financial-services-talent-despite-conflict/', date: 'Apr 2026', sentiment: 'Positive' },
        { id: 2, finding: 'UAE Workforce Expansion Highlights Gulf Skills Gap Challenge', source: 'Analytics Insight', url: 'https://www.analyticsinsight.ae/news/uae-workforce-expansion-highlights-gulf-skills-gap-challenge', date: 'Apr 2026', sentiment: 'Neutral' },
        { id: 3, finding: '76% of UAE Employers Struggle to Hire as AI Skills Top Demand', source: 'People Matters', url: 'https://me.peoplemattersglobal.com/news/recruiting-and-onboarding/76percent-of-uae-employers-struggle-to-hire-as-ai-skills-top-demand-report-48593', date: 'Feb 26, 2026', sentiment: 'Negative' },
        { id: 4, finding: 'The Real Hiring Challenge in 2026 - Talent Shortage', source: 'Instagram', date: 'Apr 2026', sentiment: 'Neutral' },
        { id: 5, finding: 'UAE Talent Shortage: 76% of Employers Struggle to Find Skilled Workers', source: 'LinkedIn/ManpowerGroup', url: 'https://www.linkedin.com/posts/manpowergroup-middleeast_uae-talent-scarcity-across-industries-activity-7434486681753415680-BSWY', date: 'Mar 2, 2026', sentiment: 'Negative' },
        { id: 6, finding: '2026 Global Talent Shortage', source: 'ManpowerGroup', url: 'https://www.manpowergroup.com/en/insights/2026-global-talent-shortage', date: '2026', sentiment: 'Neutral' },
        { id: 7, finding: 'High-Paying Jobs: UAE and Saudi Arabia Lead Global Hiring Surge', source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/jobs-gulf-new-report', date: 'Apr 2026', sentiment: 'Positive' },
        { id: 8, finding: 'UAE Faces Talent Surplus as Skilled Job Seekers Grapple with Difficulties', source: 'Reddit', url: 'https://www.reddit.com/r/dubai/comments/1ls26eh/uae_faces_talent_surplus_as_skilled_job_seekers/', date: 'Jul 2025', sentiment: 'Negative' },
        { id: 9, finding: 'UAE Leads Global Job Market with 48% Hiring Outlook', source: 'LinkedIn', url: 'https://www.linkedin.com/posts/smooth-professional_uaejobs-hiringtrends-careergrowth-activity-7374379861252943872-xUDE', date: 'Sep 2025', sentiment: 'Positive' },
      ],
    },
    {
      section: 'UAE Salary and Compensation',
      searchQuery: 'UAE salary OR راتب OR compensation OR تعويض OR underpaid',
      findings: [
        { id: 1, finding: 'Basic Salary UAE Labour Law: 2025 Guide to Compliance', source: 'NowMoney', url: 'https://nowmoney.me/blog/basic-salary-in-uae-labour-law/', date: 'Apr 2025', sentiment: 'Neutral' },
        { id: 2, finding: 'Understanding UAE Salary and Benefits for Overseas Employers', source: 'Chaadhr', url: 'https://www.chaadhr.com/blog/overseas-compensation-guide-understanding-uae-salary-and-benefits-for-overseas-employers', date: 'Aug 2023', sentiment: 'Neutral' },
        { id: 3, finding: 'Compensation Plans in the UAE', source: 'Arnifi', url: 'https://arnifi.com/blog/compensation-plan-uae-guide-for-employers-staff/', date: 'Dec 2025', sentiment: 'Neutral' },
        { id: 4, finding: 'Salary Structure in United Arab Emirates', source: 'Asanify', url: 'https://asanify.com/global-employer-of-record/united-arab-emirates/salary-structure/', date: 'Various', sentiment: 'Neutral' },
        { id: 5, finding: 'Minimum Wage and Salary Benchmarks in UAE', source: 'peopleHum', url: 'https://www.peoplehum.com/blog/minimum-wage-and-salary-benchmarks-in-uae', date: 'Jul 2025', sentiment: 'Neutral' },
        { id: 6, finding: '2025 UAE Salary Benchmarks You Won\'t Find on LinkedIn', source: 'LinkedIn', url: 'https://www.linkedin.com/pulse/2025-uae-salary-benchmarks-you-wont-find-linkedin-madiha-rehman-carw-cb7cf', date: 'Jul 2025', sentiment: 'Neutral' },
      ],
    },
    {
      section: 'UAE Emiratisation Challenges',
      searchQuery: 'UAE Emiratisation OR تحدي OR فشل OR حصة',
      findings: [
        { id: 1, finding: 'Firms Failing to Fill Job Quotas Face Visa Curbs', source: 'Emirates News Agency', url: 'https://www.wam.ae/en/article/hsyiaten-firms-failing-fill-job-quotas-face-visa-curbs', date: 'Various', sentiment: 'Neutral' },
        { id: 2, finding: 'The Impact of Emiratisation on Global Mobility Policies', source: 'British Chamber Dubai', url: 'https://britishchamberdubai.com/news-details/4281', date: 'Jun 2025', sentiment: 'Neutral' },
        { id: 3, finding: 'UAE to Verify Emiratisation Targets from July 1: 7% Quota Required', source: 'JobXDubai', url: 'https://blog.jobxdubai.com/2025/05/20/uae-emiratisation-verification-targets-july-2025/', date: 'May 2025', sentiment: 'Neutral' },
        { id: 4, finding: 'Emiratisation in UAE: Firms Fined Dh400 Million for Failing to Meet Targets', source: 'Reddit', url: 'https://www.reddit.com/r/dubai/comments/109qb8n/emiratisation_in_uae_firms_fined_dh400_million/', date: 'Jan 2023', sentiment: 'Negative' },
        { id: 5, finding: 'Most Emiratisation Initiatives Fail', source: 'LinkedIn', url: 'https://www.linkedin.com/posts/dannyseals_most-emiratisation-initiatives-fail-heres-activity-7312020327465672704-JARN', date: 'Mar 2025', sentiment: 'Negative' },
        { id: 6, finding: 'Emiratisation in Private Sector: Quotas, Deadlines & Fines Explained', source: 'Auxilium Services', url: 'https://auxiliumservices.com/2025/09/15/emiratisation-private-sector-quotas-deadlines-fines/', date: 'Sep 2025', sentiment: 'Neutral' },
      ],
    },
    {
      section: 'UAE AI Skills and Job Demand',
      searchQuery: 'UAE AI skills demand OR jobs hiring',
      findings: [
        { id: 1, finding: 'UAE Job Market Alert: AI Skills Now Influence Who Gets Shortlisted', source: 'YouTube', url: 'https://www.youtube.com/watch?v=iG9eNhGtyQA', date: 'Jan 2026', sentiment: 'Positive' },
        { id: 2, finding: 'AI Skills in Demand for Jobs in Dubai', source: 'Threads', url: 'https://www.threads.com/@dubaijobsai/post/DXDwCSAjKo4/ai-skills-in-demand-for-jobs-in-dubai-ai-skills-are-reshaping-hiring-trends', date: 'Apr 2026', sentiment: 'Positive' },
        { id: 3, finding: 'UAE Job Demand to Rise by 1 Million by 2030 Amid AI Push', source: 'Gulf News', url: 'https://gulfnews.com/business/uae-job-demand-to-rise-by-1-million-by-2030-amid-ai-push-1.500497737', date: 'Apr 2026', sentiment: 'Positive' },
        { id: 4, finding: '76% of UAE Employers Struggle to Hire as AI Skills Top Demand', source: 'People Matters', url: 'https://me.peoplemattersglobal.com/news/recruitment/76percent-of-uae-employers-struggle-to-hire-as-ai-skills-top-demand-report-48593', date: 'Feb 2026', sentiment: 'Negative' },
        { id: 5, finding: 'UAE AI Jobs: Salaries Spike as Tech Talent Demand Doubles', source: 'Indian Express', url: 'https://indianexpress.com/article/world/workplace-uae-ai-jobs-salary-hiring-trends-screening-verification-10524238/', date: 'Feb 2026', sentiment: 'Positive' },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // DETAILED ANALYSIS
  // ---------------------------------------------------------------------------
  detailedAnalysis: [
    {
      section: 'Layoffs',
      analysis: [
        {
          title: 'AGBI Analysis - UAE Companies Cost Cuts',
          source: 'AGBI',
          date: 'March 24, 2026',
          keyPoints: [
            'Pay cuts: Up to 30% being considered/deployed by some companies',
            'Sectors affected: Retail, technology, media',
            'Workforce impacted: Non-critical roles, junior staff, probation employees, part-time workers',
            'Context: US-Israel war with Iran; Hormuz strait effectively closed disrupting supply chains',
          ],
          statistics: [
            { label: 'Pay cuts deployed', value: 'Up to 30%' },
            { label: 'Sectors affected', value: 'Retail, technology, media' },
          ],
          quotes: [
            { name: 'Sarah Brooks', title: 'founder', organization: 'Fikrah HR', quote: 'At the moment, redundancies are largely limited to non-critical roles rather than core operational positions.' },
            { name: 'Nisha Nair', title: 'recruitment manager', organization: 'Innovations Group', quote: 'The reductions are not about improving margins. It\'s about preserving jobs for as many employees as possible.' },
          ],
        },
        {
          title: 'Khaleej Times - Business Owners on Layoffs',
          source: 'Khaleej Times',
          author: 'Waad Barakat',
          date: 'April 21, 2026',
          keyPoints: [
            'Average decision involves 30-90 day notice periods',
            'Gratuity calculations based on basic salary per labor law',
          ],
          statistics: [
            { label: 'Notice period', value: '30-90 days' },
          ],
          quotes: [
            { name: 'Natasha Hatherall', title: 'Founder and CEO', organization: 'TishTash Group', quote: '' },
            { name: 'Mohanad Al Tayer', title: 'Corporate wellness expert', organization: '', quote: '' },
          ],
        },
      ],
    },
    {
      section: 'Hiring',
      analysis: [
        {
          title: 'London Loves Business - Dubai Financial Services Talent',
          source: 'London Loves Business',
          author: 'Thea Coates',
          date: 'April 27, 2026',
          keyPoints: [
            'Dubai attracts 32% of new recruits in international financial services',
            '63% want international client exposure from outset',
            '57% cite access to expatriate and internationally mobile clients as key',
            '66% identify higher net income as motivation (Dubai\'s zero-income-tax)',
            '59% expect faster career advancement in Dubai',
            '48% report increased awareness of UAE opportunities over 12 months',
            'Only 9% say conflict would stop relocation',
          ],
          statistics: [
            { label: 'Dubai share of financial services talent', value: '32%' },
            { label: 'Want international client exposure', value: '63%' },
            { label: 'Cited zero-income-tax as motivation', value: '66%' },
          ],
          quotes: [
            { name: 'Nigel Green', title: 'CEO', organization: 'deVere Group', quote: 'Dubai is attracting talent even with conflict on its doorstep.' },
          ],
        },
        {
          title: 'People Matters - 76% UAE Employers Struggle',
          source: 'People Matters',
          date: 'February 26, 2026',
          keyPoints: [
            '76% of UAE employers struggle to fill open roles',
            'UAE exceeds APME regional average of 71% and approaches global average of 72%',
            'AI Model & Application Development is 27% most scarce skill',
            'AI Literacy is 26% most scarce skill',
            'Communication/collaboration top human skills at 39% sought',
            '91% of employers deploy multiple talent strategies',
            '27% prioritize upskilling/reskilling',
            'GenAI course enrollments surged 105% year-over-year',
          ],
          statistics: [
            { label: 'Employers struggling to hire', value: '76%' },
            { label: 'Most scarce skill - AI Development', value: '27%' },
            { label: 'GenAI enrollment surge', value: '105%' },
          ],
          quotes: [
            { name: 'François Lançon', title: 'Regional President APME', organization: 'ManpowerGroup', quote: '' },
            { name: 'Jonas Prising', title: 'Chair & CEO', organization: 'ManpowerGroup', quote: '' },
          ],
        },
      ],
    },
    {
      section: 'Compensation',
      analysis: [
        {
          title: 'NowMoney - Basic Salary UAE Labour Law',
          source: 'NowMoney',
          date: 'April 15, 2025',
          keyPoints: [
            'Basic salary is fixed amount in employment contract excluding allowances',
            'Does NOT include: housing, transport, mobile reimbursements, overtime',
            'Annual leave: 30 days paid for one year of service',
            'End-of-Service Gratuity: 21 working days basic salary per year for first 5 years, 30 days for each year beyond 5',
            'Capped at 2 years\' total salary',
          ],
          statistics: [
            { label: 'Minimum wage', value: '1,200 AED/month' },
            { label: 'Annual leave', value: '30 days' },
            { label: 'Gratuity cap', value: '2 years salary' },
          ],
        },
        {
          title: 'LinkedIn - UAE Salary Benchmarks',
          source: 'LinkedIn',
          author: 'Madiha Rehman',
          date: 'July 2, 2025',
          keyPoints: [
            'CFO/Finance Director: AED 60,000-120,000/month',
            'Medium-sized enterprise CFO: AED 60,000-80,000/month',
            'Large multinational/government CFO: exceeds AED 1 million annually (~$83K monthly)',
            'Bonuses often match several months\' salary for top performers',
          ],
          statistics: [
            { label: 'CFO salary range', value: 'AED 60,000-120,000/month' },
            { label: '2024-2025 salary increases', value: '4-7%' },
          ],
        },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // TIMELINE EVENTS
  // ---------------------------------------------------------------------------
  timeline: [
    { date: 'Feb 28, 2026', event: "Iran's strikes on Gulf neighbours began", category: 'Geopolitical' },
    { date: 'Mar 24, 2026', event: 'AGBI: Pay cuts up to 30% deployed', category: 'Economy' },
    { date: 'Mar 31, 2026', event: 'Economic Times: Early signs of strain', category: 'Economy' },
    { date: 'Apr 2026', event: 'Khaleej Times: Business owners on layoffs', category: 'Labor' },
    { date: 'Jan 2023', event: 'Quotas legally binding for 50+ employee companies', category: 'Policy' },
    { date: 'Jul 2023', event: 'Expanded to 20-49 employees in 14 designated sectors', category: 'Policy' },
    { date: 'June 30, 2025', event: '7% Emiratisation target deadline', category: 'Policy' },
    { date: 'Jul 1, 2025', event: 'MoHRE began active enforcement', category: 'Policy' },
    { date: 'Dec 31, 2025', event: 'Large firms must reach 8%', category: 'Policy' },
    { date: 'End of 2026', event: 'Final target increases to 10%', category: 'Policy' },
    { date: 'Nov 2020', event: 'Freelancing made legal in UAE', category: 'Policy' },
    { date: 'January 2023', event: 'Mandatory unemployment insurance scheme implemented', category: 'Policy' },
    { date: 'Feb 2, 2022', event: 'Labour Law became effective (Federal Decree No. 33 of 2021)', category: 'Policy' },
  ],

  // ---------------------------------------------------------------------------
  // EXPERT QUOTES
  // ---------------------------------------------------------------------------
  expertQuotes: [
    {
      section: 'Layoffs',
      quotes: [
        { name: 'Sarah Brooks', organization: 'Fikrah HR', quote: 'At the moment, redundancies are largely limited to non-critical roles rather than core operational positions.' },
        { name: 'Nisha Nair', organization: 'Innovations Group', quote: 'The reductions are not about improving margins. It\'s about preserving jobs for as many employees as possible.' },
        { name: 'Natasha Hatherall', organization: 'TishTash Group', quote: '' },
        { name: 'Nigel Green', organization: 'deVere Group', quote: 'Dubai is attracting talent even with conflict on its doorstep.' },
      ],
    },
    {
      section: 'Hiring',
      quotes: [
        { name: 'François Lançon', organization: 'ManpowerGroup', quote: '' },
        { name: 'Lakshmikar Reddy Karimireddy', organization: '', quote: 'The pace of talent transformation across the UAE has been remarkable.' },
      ],
    },
    {
      section: 'Discrimination',
      quotes: [
        { name: 'Nevin Lewis', organization: 'Black and Grey recruitment', quote: 'Discrimination in recruitment is a very real issue – and it\'s usually because of personal bias or stereotypes.' },
      ],
    },
    {
      section: 'Remote Work',
      quotes: [
        { name: 'Michael Chattle', organization: 'Al Tamimi & Co, DIFC', quote: 'Employees should exercise caution before taking such decisions and ideally seek consent or approval from their employer in advance.' },
      ],
    },
    {
      section: 'AI Skills',
      quotes: [
        { name: 'Sharad Sindhwani', organization: 'Naukrigulf', quote: 'We\'re seeing early signs of a skills-first overlay being added to traditional hiring filters.' },
        { name: 'Hamza Dweik', organization: 'Saxo Bank', quote: '' },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // SOURCE CATEGORIES
  // ---------------------------------------------------------------------------
  sourceCategories: [
    { category: 'LinkedIn Posts', count: 25 },
    { category: 'News Articles', count: 35 },
    { category: 'Official UAE Government', count: 10 },
    { category: 'Recruitment/Staffing Companies', count: 15 },
    { category: 'Reddit Discussions', count: 15 },
    { category: 'Corporate/Business Sites', count: 20 },
    { category: 'HR/Employment Platforms', count: 18 },
    { category: 'YouTube Videos', count: 3 },
    { category: 'Academic/Research', count: 3 },
  ],

  // ---------------------------------------------------------------------------
  // UAE RELEVANCE ASSESSMENT
  // ---------------------------------------------------------------------------
  relevanceAssessment: [
    {
      level: 'Critical',
      category: 'Direct Impact on UAE Workforce',
      items: [
        'Layoffs and job cuts statistics',
        'Emiratisation quotas and fines',
        'Visa ban countries and restrictions',
        'Remote work regulations',
        'Labor law reforms (Federal Decree-Law No. 33 of 2021)',
      ],
    },
    {
      level: 'High',
      category: 'Strategic Planning',
      items: [
        'AI skills demand and job projections',
        'Talent shortage statistics',
        'Salary benchmarks',
        'Employer branding trends',
        'Employee engagement metrics',
      ],
    },
    {
      level: 'Moderate',
      category: 'Contextual Understanding',
      items: [
        'Global talent shortage comparisons',
        'Recruitment agency landscape',
        'Career development programs',
        'LinkedIn optimization strategies',
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // COMPREHENSIVE SUMMARY STATISTICS
  // ---------------------------------------------------------------------------
  comprehensiveSummary: [
    {
      category: 'Layoffs & Job Cuts',
      metrics: [
        { metric: 'Job cuts expected for Indians', value: '30%', source: 'YouTube', credibility: 'Medium' },
        { metric: 'Salary reduction range', value: '20-50%', source: 'Times of India', credibility: 'High' },
        { metric: 'Indian workers terminated (one firm)', value: '90%', source: 'YouTube', credibility: 'Medium' },
        { metric: 'UAE companies cutting staff (2026)', value: '29%', source: 'Cooper Fitch', credibility: 'High' },
        { metric: 'Companies increasing headcount', value: '48%', source: 'Cooper Fitch', credibility: 'High' },
        { metric: 'Companies staying flat', value: '23%', source: 'Cooper Fitch', credibility: 'High' },
      ],
    },
    {
      category: 'Hiring & Talent',
      metrics: [
        { metric: 'UAE employers planning expansion', value: '56%', source: 'Taaeen Group', credibility: 'High' },
        { metric: 'Employers struggling to hire', value: '76%', source: 'ManpowerGroup', credibility: 'High' },
        { metric: 'Dubai share of financial services talent', value: '32%', source: 'deVere', credibility: 'Medium' },
        { metric: 'UAE job opening increase rate', value: '35.2%', source: 'Bloomberg', credibility: 'High' },
        { metric: 'UAE hiring outlook', value: '48%', source: 'ManPowerGroup', credibility: 'High' },
        { metric: 'Workforce affected by hiring challenges', value: '45%', source: 'ManpowerGroup', credibility: 'High' },
      ],
    },
    {
      category: 'Salaries',
      metrics: [
        { metric: 'Minimum wage standard', value: '1,200 AED/month', source: 'Chaadhr', credibility: 'Medium' },
        { metric: 'Average annual salary', value: '177,279 AED', source: 'SalaryExpert', credibility: 'Medium' },
        { metric: 'Average hourly rate', value: '85 AED', source: 'SalaryExpert', credibility: 'Medium' },
        { metric: 'CFO/Finance Director salary', value: 'AED 60-120K/month', source: 'LinkedIn', credibility: 'High' },
        { metric: 'Expected salary increase 2026', value: '4.1%', source: 'Deloitte', credibility: 'High' },
      ],
    },
    {
      category: 'AI & Technology',
      metrics: [
        { metric: 'Jobs to be added by 2030', value: '1 million', source: 'Gulf News', credibility: 'High' },
        { metric: 'AI jobs doubling (2021-2024)', value: '100%', source: 'Indian Express', credibility: 'High' },
        { metric: 'Recruiters who will use AI', value: '76%', source: 'LinkedIn', credibility: 'High' },
        { metric: 'Recruiters who cannot do job without AI', value: '47%', source: 'LinkedIn', credibility: 'High' },
        { metric: 'Technical specialists needed', value: '91,000+', source: 'Gulf News', credibility: 'High' },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // PLATFORM METRICS (for hook compatibility)
  // ---------------------------------------------------------------------------
  platform: 'LinkedIn',
  metrics: {
    users: 9000000,
    penetration: 78,
    demographics: 'Professionals, expats, business owners, job seekers across 200+ nationalities',
    sentiment: {
      overall: 'Mixed',
      score: 52,
      breakdown: { positive: 45, neutral: 32, negative: 23 },
      trending: ['Job opportunities', 'AI skills', 'Career change', 'UAE Vision 2030', 'Emiratisation'],
      keyConcerns: [
        'Layoffs and pay cuts due to Gulf conflict',
        'AI skills shortage',
        'Visa delays and rejections',
        'Emiratisation quotas',
        'Toxic workplace culture',
        'Discrimination in hiring',
        'Salary transparency',
        'Career stagnation',
      ],
    },
    engagement: {
      avgLikes: 42,
      avgComments: 15,
      avgShares: 12,
      trendingHashtags: ['#UAE', '#Dubai', '#Jobs', '#AI', '#Careers', '#Emiratisation'],
    },
    botActivity: {
      estimatedBotPercent: 12,
      coordinatedInauthentic: false,
      confidence: 0.58,
      indicators: ['Job spam profiles', 'AI-generated content', 'Fake engagement on company pages'],
    },
  },
  censorship: {
    level: 'minimal',
    complianceRate: 72,
    governmentRequests: 124,
    contentRemoved: 456,
    notes: 'Professional platform with minimal censorship; self-regulation; 89 government requests tracked',
  },
  keyNarratives: [
    {
      topic: 'Gulf Conflict Impact',
      narrative: 'Layoffs, pay cuts (20-50%), and business closures due to US-Iran war tensions affecting hospitality, travel, events, and F&B sectors',
      prevalence: 82,
      sentiment: 'Negative',
      sources: ['AGBI', 'Khaleej Times', 'Economic Times', 'Times of India', 'Reddit'],
    },
    {
      topic: 'AI Skills Transformation',
      narrative: 'UAE adding 1 million jobs by 2030; AI positions doubled 2021-2024; 76% of employers struggle to hire AI talent',
      prevalence: 78,
      sentiment: 'Positive',
      sources: ['Gulf News', 'People Matters', 'ManpowerGroup', 'Khaleej Times', 'Indian Express'],
    },
    {
      topic: 'Talent Paradox',
      narrative: '76% of UAE employers struggle to find skilled workers while workforce faces hiring difficulties; skills-based hiring essential but only 19% implementing',
      prevalence: 75,
      sentiment: 'Neutral',
      sources: ['ManpowerGroup', 'Deloitte', 'Analytics Insight'],
    },
    {
      topic: 'Career Mobility',
      narrative: '72% of UAE professionals plan to explore new opportunities in 2026; job switchers see 14.8% avg pay increase vs 5.8% for stayers',
      prevalence: 72,
      sentiment: 'Positive',
      sources: ['Charterhouse', 'LinkedIn', 'Labeeb'],
    },
    {
      topic: 'Emiratisation Pressure',
      narrative: '7% quota with AED 9,000/month fines; 136,000+ Emiratis employed in private sector; fake Emiratisation crackdown',
      prevalence: 68,
      sentiment: 'Neutral',
      sources: ['JobXDubai', 'MOHRE', 'British Chamber Dubai', 'Auxilium Services'],
    },
    {
      topic: 'Visa Vulnerabilities',
      narrative: 'Pakistani nationals facing systematic delays/rejections; employment tied to visa status; 9 countries under visa restrictions',
      prevalence: 65,
      sentiment: 'Negative',
      sources: ['Medium', 'Dubai Visits Visa', 'Times of India'],
    },
    {
      topic: 'Salary & Compensation',
      narrative: 'Average AED 177,279/year; CFO roles AED 60,000-120,000/month; 4.1% expected raises; no income tax advantage',
      prevalence: 62,
      sentiment: 'Neutral',
      sources: ['SalaryExpert', 'LinkedIn', 'Asanify', 'NowMoney'],
    },
    {
      topic: 'Workplace Harassment',
      narrative: 'Article 14 prohibits harassment; 23% global employees experienced violence; AED 5,000-1,000,000 fines; psychological harassment defined',
      prevalence: 58,
      sentiment: 'Negative',
      sources: ['FaceUp', 'The National', 'Emirates Law', 'ILO/Gallup'],
    },
    {
      topic: 'Remote Work Evolution',
      narrative: 'No automatic right to remote work; requires employer approval; freelancer permits AED 7,500/year enabling independent work',
      prevalence: 55,
      sentiment: 'Neutral',
      sources: ['NeuralHR', 'The National', 'Gulf News', 'Business Umbrella'],
    },
    {
      topic: 'Gig Economy Growth',
      narrative: 'Freelancer permits enabling independent work; Green Visa 5-year option; contract term max 3 years',
      prevalence: 52,
      sentiment: 'Positive',
      sources: ['Business Umbrella', 'Worksuite', 'Boundless HQ'],
    },
  ],
  governmentAccounts: [
    { handle: 'UAE Government', followers: 1800000, type: 'Government', verified: true },
    { handle: 'Dubai Economy', followers: 950000, type: 'Government', verified: true },
    { handle: 'Abu Dhabi Chamber', followers: 720000, type: 'Government', verified: true },
    { handle: 'MOHRE', followers: 450000, type: 'Government', verified: true },
    { handle: 'Dubai Careers', followers: 380000, type: 'Government', verified: true },
  ],
  darkSocialScore: 15,
  lastUpdated: '2026-04-27',
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default linkedinData
