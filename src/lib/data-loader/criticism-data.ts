/**
 * Criticism & Complaint Queries Data (9-6)
 *
 * Data extracted from MD file 9-6-criticism-complaint-results.md
 * UAE National Digital Intelligence Platform — Criticism & Complaint Coverage
 */

import {
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  CredibilityScore,
  SourceReference,
  UAERelevance,
  TrendData,
} from './types'

import { useState } from 'react'

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface CriticismOverview {
  enrichedDate: string
  originalSource: string
  queriesExecutedVia: string
  pagesFetched: { successful: number; blocked: number }
  dataPointsExtracted: number
  entitiesCataloged: number
  legalProvisionsCited: number
  sentimentScores: number
  credibilityTiers: number
}

export const criticismOverview: CriticismOverview = {
  enrichedDate: '2026-04-28',
  originalSource: 'mmx search queries - micro-queries/part-9/9-6-criticism-complaint.md',
  queriesExecutedVia: 'mmx search API',
  pagesFetched: { successful: 15, blocked: 4 },
  dataPointsExtracted: 35,
  entitiesCataloged: 20,
  legalProvisionsCited: 15,
  sentimentScores: 14,
  credibilityTiers: 5,
}

// ============================================================================
// RISK INDICATORS AT GLANCE
// ============================================================================

export interface RiskIndicator {
  riskCategory: string
  score: 'CRITICAL' | 'HIGH' | 'MEDIUM-HIGH' | 'MEDIUM'
  trend: 'Worsening' | 'Rising' | 'Declining' | 'Static' | 'Mixed'
}

export const riskIndicators: RiskIndicator[] = [
  { riskCategory: 'Cost of Living', score: 'CRITICAL', trend: 'Worsening' },
  { riskCategory: 'Rent Affordability', score: 'CRITICAL', trend: 'Worsening' },
  { riskCategory: 'Salary/Employment', score: 'HIGH', trend: 'Declining' },
  { riskCategory: 'Customer Service', score: 'HIGH', trend: 'Static' },
  { riskCategory: 'Telecom Services', score: 'MEDIUM-HIGH', trend: 'Static' },
  { riskCategory: 'Government Digital Services', score: 'MEDIUM', trend: 'Mixed' },
  { riskCategory: 'School Fees', score: 'HIGH', trend: 'Rising' },
]

// ============================================================================
// PART A: STRUCTURED DATA TABLES (DASHBOARD-READY KPIS)
// ============================================================================

// A.1 Complaint Volume Metrics
export interface ComplaintVolumeMetric {
  metric: string
  value: string | number
  yearPeriod: string
  source: string
  uaeRelevance: string
}

export const complaintVolumeMetrics: ComplaintVolumeMetric[] = [
  { metric: 'Consumer Complaints Received (Ministry of Economy)', value: '4,718', yearPeriod: '2021', source: 'moet.gov.ae', uaeRelevance: 'HIGH' },
  { metric: 'Consumer Complaints Received (Ministry of Economy)', value: '3,313', yearPeriod: '2022', source: 'moet.gov.ae', uaeRelevance: 'HIGH' },
  { metric: 'Consumer Complaints Received (Ministry of Economy)', value: '2,943', yearPeriod: '2023', source: 'moet.gov.ae', uaeRelevance: 'HIGH' },
  { metric: 'Rental Dispute Reconciliation Agreements (Q2 2025)', value: '443', yearPeriod: 'Q2 2025', source: 'Khaleej Times/RDC', uaeRelevance: 'CRITICAL' },
  { metric: 'Rental Dispute Settlement Value (Q2 2025)', value: 'Dh190.7 million', yearPeriod: 'Q2 2025', source: 'Khaleej Times/RDC', uaeRelevance: 'CRITICAL' },
  { metric: 'Average Rental Settlement Period', value: '6 days', yearPeriod: 'Q2 2025', source: 'Khaleej Times/RDC', uaeRelevance: 'MEDIUM' },
  { metric: 'Labour Court Unpaid Wages Case Value', value: 'AED 110,400', yearPeriod: '2024', source: 'Mashable', uaeRelevance: 'HIGH' },
  { metric: 'MOJ Grievance Processing Fee', value: '30 AED', yearPeriod: 'Current', source: 'moj.gov.ae', uaeRelevance: 'LOW' },
  { metric: 'MOJ Grievance Processing Time', value: '15 days', yearPeriod: 'Current', source: 'moj.gov.ae', uaeRelevance: 'MEDIUM' },
]

// A.2 Economic Stress Indicators
export interface EconomicStressIndicator {
  metric: string
  value: string
  period: string
  source: string
  uaeRelevance: string
}

export const economicStressIndicators: EconomicStressIndicator[] = [
  { metric: 'Rent Increase (Typical)', value: '12-20%', period: '2024-2025', source: 'Property Monitor', uaeRelevance: 'CRITICAL' },
  { metric: 'Rent Increase (Specific Cases)', value: '22.9%', period: '2024-2025', source: 'User Reports', uaeRelevance: 'CRITICAL' },
  { metric: 'Salary Cuts Reported', value: '30-50%', period: '2026', source: 'LinkedIn/Reddit', uaeRelevance: 'CRITICAL' },
  { metric: 'School Fee Range (Annual)', value: '$9,500-$32,600', period: '2024-2025', source: 'Fast Company ME', uaeRelevance: 'HIGH' },
  { metric: 'School Fee Increases', value: '6-7%', period: '2023-24', source: 'KHDA Dubai', uaeRelevance: 'HIGH' },
  { metric: 'Banking Fraud Losses', value: '$338 million', period: '2023', source: 'vocal.media', uaeRelevance: 'HIGH' },
  { metric: 'Dubai 2040 Population Target', value: '5.8 million', period: '2040', source: 'PBS', uaeRelevance: 'HIGH' },
  { metric: 'Current Dubai Population', value: '~3.8 million', period: '2024', source: 'PBS', uaeRelevance: 'HIGH' },
  { metric: 'Daily Commuters to Dubai', value: '1 million', period: '2024', source: 'PBS', uaeRelevance: 'HIGH' },
]

// A.3 Service Quality Metrics
export interface ServiceQualityMetric {
  metric: string
  value: string
  source: string
  uaeRelevance: string
}

export const serviceQualityMetrics: ServiceQualityMetric[] = [
  { metric: 'Customer Service Hours Lost (Annual)', value: '83 million', source: 'ServiceNow/Gulf News', uaeRelevance: 'HIGH' },
  { metric: 'Working Days Lost to Poor Service', value: '10 million', source: 'ServiceNow/CXO Insight', uaeRelevance: 'HIGH' },
  { metric: 'Telecom Price Dissatisfaction', value: '75%', source: 'Gulf News FNC Survey', uaeRelevance: 'MEDIUM-HIGH' },
  { metric: 'Telecom Service Dissatisfaction', value: '62.78%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM-HIGH' },
  { metric: 'Telecom Dissatisfaction COVID (Pricing)', value: '78.98%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM' },
  { metric: 'Traffic Hours Wasted (Annual per Driver)', value: '35 hours', source: 'RoadSafetyUAE', uaeRelevance: 'HIGH' },
  { metric: 'Employees Driving Alone', value: '4 out of 5', source: 'PBS', uaeRelevance: 'HIGH' },
  { metric: 'Vehicle Increase Rate', value: '10%', source: 'PBS', uaeRelevance: 'HIGH' },
]

// A.4 Telecom Sector Metrics
export interface TelecomMetric {
  metric: string
  value: string
  source: string
  uaeRelevance: string
}

export const telecomMetrics: TelecomMetric[] = [
  { metric: 'Believe Telecom Prices High', value: '75%', source: 'Gulf News FNC Report', uaeRelevance: 'MEDIUM-HIGH' },
  { metric: 'Find Service Quality Acceptable', value: '34%', source: 'Gulf News FNC Report', uaeRelevance: 'MEDIUM' },
  { metric: 'Dissatisfied During COVID (Pricing)', value: '78.98%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM' },
  { metric: 'Dissatisfied During COVID (Overall)', value: '62.78%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM' },
  { metric: 'Lack Competitive Pricing vs Other Countries', value: '44%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM' },
  { metric: 'SME-Focused Packages Lacking', value: '35%', source: 'Gulf News Survey', uaeRelevance: 'MEDIUM' },
]

// A.5 School Fee Detailed Breakdown
export interface SchoolFeeMetric {
  schoolLevel: string
  annualCostUSD: string
  notes: string
}

export const schoolFeeMetrics: SchoolFeeMetric[] = [
  { schoolLevel: 'Entry Level (Grade 1)', annualCostUSD: '< $272/month', notes: 'GEMS Education' },
  { schoolLevel: 'Premium Schools', annualCostUSD: 'Up to $32,600/year', notes: 'Fast Company ME' },
  { schoolLevel: 'Fee Increase Rate', annualCostUSD: '2x inflation rate', notes: 'Fast Company ME' },
  { schoolLevel: 'Could Consume of Living Costs', annualCostUSD: 'Up to 50%', notes: 'Fast Company ME' },
  { schoolLevel: 'GCC Schools (2022)', annualCostUSD: '34,081', notes: 'Fast Company ME' },
  { schoolLevel: 'GCC Schools (2027 proj)', annualCostUSD: '35,208', notes: 'Fast Company ME' },
  { schoolLevel: 'Lowest UAE Annual Salary', annualCostUSD: '$13,000', notes: 'Fast Company ME' },
  { schoolLevel: 'Middle Annual Salary', annualCostUSD: '$60,000 average', notes: 'Fast Company ME' },
]

// A.6 Legal Penalty Summary
export interface LegalPenalty {
  violationType: string
  penalty: string
  governingLaw: string
}

export const legalPenalties: LegalPenalty[] = [
  { violationType: 'Consumer Protection Violation', penalty: 'Up to 2 years + AED 2M fine', governingLaw: 'Federal Decree Law No. 5 of 2023' },
  { violationType: 'Verbal Abuse (Libel/Slander)', penalty: '6 months imprisonment or Dh5,000', governingLaw: 'Article 427, Federal Law No. 31 of 2021' },
  { violationType: 'Forced Unpaid Leave', penalty: 'Breach of contract', governingLaw: 'Labour Law' },
  { violationType: 'Salary Cut Without Consent', penalty: 'Breach of contract', governingLaw: 'Labour Law' },
]

// ============================================================================
// PART B: ENTITY REGISTRY
// ============================================================================

// B.1 Government Entities
export interface GovernmentEntity {
  entity: string
  category: string
  role: string
  complaintChannel: string
  tier: TierLevel
}

export const criticismGovEntities: GovernmentEntity[] = [
  { entity: 'Ministry of Justice (MOJ)', category: 'Federal', role: 'Grievance submission', complaintChannel: 'MOJ App, Website', tier: 0 },
  { entity: 'Federal Public Prosecution', category: 'Federal', role: 'Processes grievances', complaintChannel: 'MOJ', tier: 0 },
  { entity: 'Ministry of Human Resources & Emiratisation (MOHRE)', category: 'Federal', role: 'Employment disputes', complaintChannel: 'App, WhatsApp 600590000', tier: 0 },
  { entity: 'Ministry of Economy & Tourism (MOET)', category: 'Federal', role: 'Consumer protection', complaintChannel: '800-1222, moec.gov.ae', tier: 0 },
  { entity: 'Ministry of Health & Prevention (MOHAP)', category: 'Federal', role: 'Healthcare complaints', complaintChannel: 'App, Website', tier: 0 },
  { entity: 'TDRA', category: 'Federal', role: 'Telecom complaints', complaintChannel: 'Website', tier: 0 },
  { entity: 'ICP UAE', category: 'Federal', role: 'Government services', complaintChannel: 'Website', tier: 0 },
  { entity: 'Dubai Police', category: 'Emirate', role: 'Police complaints', complaintChannel: 'App, Website', tier: 0 },
  { entity: 'Rental Dispute Centre (RDC)', category: 'Emirate', role: 'Landlord-tenant disputes', complaintChannel: 'rdc.gov.ae', tier: 0 },
  { entity: 'Dubai Land Department', category: 'Emirate', role: 'Property disputes', complaintChannel: 'Website', tier: 0 },
  { entity: 'Department of Economy & Tourism (Dubai)', category: 'Emirate', role: 'Consumer complaints', complaintChannel: 'consumerrights.ae', tier: 0 },
  { entity: 'Central Bank of UAE', category: 'Federal', role: 'Financial services', complaintChannel: 'Website', tier: 0 },
]

// B.2 Telecom Entities
export interface TelecomEntity {
  entity: string
  type: string
  marketPosition: string
  complaintVolume: string
}

export const telecomEntities: TelecomEntity[] = [
  { entity: 'e& (formerly Etisalat)', type: 'Telecom Operator', marketPosition: 'Market leader', complaintVolume: 'High' },
  { entity: 'du', type: 'Telecom Operator', marketPosition: 'Secondary operator', complaintVolume: 'High' },
]

// B.3 Banking/Financial Entities
export interface BankingEntity {
  entity: string
  type: string
  notableIssue: string
}

export const bankingEntities: BankingEntity[] = [
  { entity: 'FAB (First Abu Dhabi Bank)', type: 'Bank', notableIssue: 'Hidden charges reported' },
  { entity: 'UAE Banks (General)', type: 'Banking Sector', notableIssue: '$338M fraud losses (2023)' },
]

// B.4 School Operators
export interface SchoolOperator {
  entity: string
  type: string
  feeRange: string
}

export const schoolOperators: SchoolOperator[] = [
  { entity: 'GEMS Education', type: 'School Network', feeRange: 'Entry-level < $272/month' },
  { entity: 'Private Schools (Dubai)', type: 'Various', feeRange: '$9,500-$32,600/year' },
]

// ============================================================================
// PART C: SENTIMENT ANALYSIS BY TOPIC/SOURCE
// ============================================================================

// C.1 Sentiment Distribution Matrix
export interface SentimentDistributionEntry {
  topic: string
  positive: number
  neutral: number
  negative: number
  dominantSentiment: string
}

export const sentimentDistributionMatrix: SentimentDistributionEntry[] = [
  { topic: 'Government Complaint Mechanisms', positive: 15, neutral: 30, negative: 55, dominantSentiment: 'NEGATIVE' },
  { topic: 'Cost of Living', positive: 5, neutral: 10, negative: 85, dominantSentiment: 'HIGHLY NEGATIVE' },
  { topic: 'Rent Situation', positive: 2, neutral: 8, negative: 90, dominantSentiment: 'CRITICAL NEGATIVE' },
  { topic: 'Salary/Employment', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Traffic', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Customer Service', positive: 3, neutral: 12, negative: 85, dominantSentiment: 'NEGATIVE' },
  { topic: 'Telecom Services', positive: 8, neutral: 20, negative: 72, dominantSentiment: 'NEGATIVE' },
  { topic: 'Banking', positive: 5, neutral: 25, negative: 70, dominantSentiment: 'NEGATIVE' },
  { topic: 'School Fees', positive: 2, neutral: 8, negative: 90, dominantSentiment: 'CRITICAL NEGATIVE' },
  { topic: 'Healthcare', positive: 10, neutral: 30, negative: 60, dominantSentiment: 'NEGATIVE' },
  { topic: 'Employer Conduct', positive: 8, neutral: 17, negative: 75, dominantSentiment: 'NEGATIVE' },
  { topic: 'Landlord Relations', positive: 5, neutral: 15, negative: 80, dominantSentiment: 'NEGATIVE' },
  { topic: 'Government Apps', positive: 5, neutral: 20, negative: 75, dominantSentiment: 'NEGATIVE' },
  { topic: 'Hotels/Hospitality', positive: 10, neutral: 15, negative: 75, dominantSentiment: 'NEGATIVE' },
]

// C.2 Sentiment by Platform
export interface PlatformSentiment {
  platform: string
  sentimentScore: number
  volume: string
  credibility: string
}

export const platformSentiment: PlatformSentiment[] = [
  { platform: 'Twitter/X', sentimentScore: -78, volume: 'High', credibility: 'Tier 2' },
  { platform: 'Reddit r/dubai', sentimentScore: -72, volume: 'High', credibility: 'Tier 2' },
  { platform: 'Reddit r/UAE', sentimentScore: -68, volume: 'Medium', credibility: 'Tier 2' },
  { platform: 'TripAdvisor', sentimentScore: -65, volume: 'Medium', credibility: 'Tier 2' },
  { platform: 'App Store Reviews', sentimentScore: -82, volume: 'High', credibility: 'Tier 3' },
  { platform: 'LinkedIn', sentimentScore: -45, volume: 'Medium', credibility: 'Tier 1' },
  { platform: 'Government Portals', sentimentScore: 20, volume: 'N/A', credibility: 'Tier 0' },
  { platform: 'News Articles', sentimentScore: -35, volume: 'Medium', credibility: 'Tier 1' },
]

// C.3 Trend Analysis (2024-2026)
export interface TrendAnalysisEntry {
  category: string
  trend2024: string
  trend2025: string
  trend2026: string
  direction: string
}

export const trendAnalysis: TrendAnalysisEntry[] = [
  { category: 'Cost of Living Complaints', trend2024: 'HIGH', trend2025: 'CRITICAL', trend2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Rent Complaints', trend2024: 'HIGH', trend2025: 'CRITICAL', trend2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Salary Complaints', trend2024: 'MEDIUM', trend2025: 'HIGH', trend2026: 'CRITICAL', direction: 'WORSENING' },
  { category: 'Telecom Complaints', trend2024: 'MEDIUM', trend2025: 'MEDIUM', trend2026: 'MEDIUM', direction: 'STATIC' },
  { category: 'Customer Service', trend2024: 'HIGH', trend2025: 'HIGH', trend2026: 'HIGH', direction: 'STATIC' },
  { category: 'Government App Issues', trend2024: 'MEDIUM', trend2025: 'MEDIUM', trend2026: 'HIGH', direction: 'WORSENING' },
]

// ============================================================================
// PART D: UAE RELEVANCE ASSESSMENT
// ============================================================================

// D.1 Relevance Classification Criteria
export interface RelevanceClassification {
  tier: string
  classification: string
  definition: string
}

export const relevanceClassifications: RelevanceClassification[] = [
  { tier: 'CRITICAL', classification: 'Existential', definition: 'Direct impact on resident welfare, economic stability, or fundamental rights' },
  { tier: 'HIGH', classification: 'Significant', definition: 'Major quality of life impact, affects large population segment' },
  { tier: 'MEDIUM', classification: 'Moderate', definition: 'Noticeable but not universal impact' },
  { tier: 'LOW', classification: 'Minor', definition: 'Limited population affected, minimal economic impact' },
]

// D.2 Issue Classification
export interface IssueClassification {
  issueCategory: string
  relevance: string
  justification: string
  populationAffected: string
}

export const issueClassifications: IssueClassification[] = [
  { issueCategory: 'Cost of Living', relevance: 'CRITICAL', justification: 'Affects 89% non-citizens; salary cuts 30-50%', populationAffected: '~8.1 million' },
  { issueCategory: 'Rent Affordability', relevance: 'CRITICAL', justification: '12-20% increases; driving displacement', populationAffected: '~6.5 million renters' },
  { issueCategory: 'Salary Delays/Cuts', relevance: 'CRITICAL', justification: 'Legal violations; economic survival', populationAffected: '~5 million workers' },
  { issueCategory: 'School Fees', relevance: 'HIGH', justification: 'Tripling costs; 50% of living expenses', populationAffected: '~1 million families' },
  { issueCategory: 'Customer Service', relevance: 'HIGH', justification: '83M hours lost; 10M days productivity', populationAffected: 'All residents' },
  { issueCategory: 'Traffic', relevance: 'HIGH', justification: '35 hrs/year; infrastructure strain', populationAffected: '~3 million commuters' },
  { issueCategory: 'Telecom Outages', relevance: 'MEDIUM-HIGH', justification: 'Red Sea cable; regional vulnerability', populationAffected: 'All residents' },
  { issueCategory: 'Healthcare Access', relevance: 'MEDIUM', justification: 'Insurance delays; bills', populationAffected: 'All residents' },
  { issueCategory: 'Employer Abuse', relevance: 'HIGH', justification: 'Legal violations; exploitation', populationAffected: '~4 million workers' },
  { issueCategory: 'Landlord Disputes', relevance: 'HIGH', justification: '443 cases/Q2; Dh190.7M', populationAffected: '~500K disputes/year' },
  { issueCategory: 'Government Digital', relevance: 'MEDIUM', justification: 'App failures; UX issues', populationAffected: 'All residents' },
  { issueCategory: 'Banking/Fraud', relevance: 'MEDIUM', justification: '$338M losses', populationAffected: 'All bank users' },
]

// D.3 Geopolitical Context (2026)
export interface GeopoliticalContext {
  factor: string
  impact: string
  relevance: string
}

export const geopoliticalContext: GeopoliticalContext[] = [
  { factor: 'US-Israel War on Iran', impact: 'Economic anxiety, job losses, salary cuts', relevance: 'CRITICAL' },
  { factor: 'Regional Tensions', impact: 'Layoffs, business closures', relevance: 'CRITICAL' },
  { factor: 'Red Sea Cable Cuts', impact: 'Internet outages, business disruption', relevance: 'MEDIUM-HIGH' },
  { factor: 'Dubai 2040 Target', impact: 'Infrastructure growth, population increase', relevance: 'HIGH' },
]

// ============================================================================
// PART E: SOURCE CREDIBILITY MATRIX
// ============================================================================

// E.1 Credibility Classification
export interface CredibilityTier {
  tier: string
  description: string
  sources: string
}

export const credibilityTiers: CredibilityTier[] = [
  { tier: 'Tier 0', description: 'Official Government', sources: 'u.ae, moj.gov.ae, moet.gov.ae, mohre.gov.ae, mohap.gov.ae' },
  { tier: 'Tier 1', description: 'Established Media', sources: 'Gulf News, Khaleej Times, The National, PBS, NYT' },
  { tier: 'Tier 2', description: 'Social/Community', sources: 'Reddit, Twitter, TripAdvisor, App Store reviews' },
  { tier: 'Tier 3', description: 'Professional/Industry', sources: 'LinkedIn (verified professionals), ServiceNow research' },
  { tier: 'Tier 4', description: 'Unverified/Anonymous', sources: 'Personal blogs, YouTube, Quora' },
]

// E.2 Source Reliability Assessment
export interface SourceReliability {
  source: string
  tier: TierLevel
  reliability: string
  freshness: string
  coverage: string
}

export const sourceReliability: SourceReliability[] = [
  { source: 'u.ae', tier: 0, reliability: '100%', freshness: 'Real-time', coverage: 'Official' },
  { source: 'moj.gov.ae', tier: 0, reliability: '100%', freshness: 'Real-time', coverage: 'Official' },
  { source: 'moet.gov.ae', tier: 0, reliability: '100%', freshness: 'Real-time', coverage: 'Official' },
  { source: 'mohre.gov.ae', tier: 0, reliability: '100%', freshness: 'Real-time', coverage: 'Official' },
  { source: 'Gulf News', tier: 1, reliability: '95%', freshness: 'Daily', coverage: 'Comprehensive' },
  { source: 'Khaleej Times', tier: 1, reliability: '90%', freshness: 'Daily', coverage: 'Comprehensive' },
  { source: 'PBS NewsHour', tier: 1, reliability: '95%', freshness: 'Weekly', coverage: 'International' },
  { source: 'NYT', tier: 1, reliability: '90%', freshness: 'Daily', coverage: 'International' },
  { source: 'Reddit r/dubai', tier: 2, reliability: '60%', freshness: 'Real-time', coverage: 'Community' },
  { source: 'LinkedIn', tier: 3, reliability: '75%', freshness: 'Real-time', coverage: 'Professional' },
  { source: 'ServiceNow', tier: 3, reliability: '85%', freshness: 'Annual', coverage: 'Industry research' },
  { source: 'App Store Reviews', tier: 2, reliability: '50%', freshness: 'Real-time', coverage: 'User experience' },
  { source: 'TripAdvisor', tier: 2, reliability: '55%', freshness: 'Real-time', coverage: 'Travel' },
  { source: 'Quora', tier: 4, reliability: '40%', freshness: 'Variable', coverage: 'Anecdotal' },
]

// ============================================================================
// PART G: LEGAL FRAMEWORK SUMMARY
// ============================================================================

// G.1 Employment Law
export interface EmploymentLawProvision {
  article: string
  provision: string
  penalty?: string
}

export const employmentLawProvisions: EmploymentLawProvision[] = [
  { article: 'Article 13(13)', provision: 'Safe working environment' },
  { article: 'Article 14(2)', provision: 'No harassment/bullying/verbal violence' },
  { article: 'Article 427', provision: 'Libel/slander in presence of others', penalty: '6 months imprisonment or Dh5,000 fine' },
  { article: 'Article 45(2)', provision: 'Resignation right if harassed' },
  { article: 'Wage Protection System', provision: 'Monitor salary payments', penalty: 'MOHRE penalties' },
]

// G.2 Consumer Protection
export interface ConsumerProtectionViolation {
  violation: string
  penalty: string
}

export const consumerProtectionViolations: ConsumerProtectionViolation[] = [
  { violation: 'Failure to provide clear information', penalty: 'Up to 2 years imprisonment + AED 2M fine' },
  { violation: 'Misleading prices', penalty: 'Up to 2 years imprisonment + AED 2M fine' },
  { violation: 'Refusal to repair/replace defective products', penalty: 'Up to 2 years imprisonment + AED 2M fine' },
]

// G.3 Landlord-Tenant Law
export interface LandlordTenantProvision {
  article: string
  provision: string
}

export const landlordTenantProvisions: LandlordTenantProvision[] = [
  { article: 'Article 15', provision: 'Landlord hand over property for full use' },
  { article: 'Article 16', provision: 'Landlord maintenance responsibility' },
  { article: 'Article 17', provision: 'Landlord liable for tenant-caused defects' },
  { article: 'Article 20', provision: 'Security deposit regulations' },
  { article: 'Article 21', provision: 'Tenant return property condition' },
  { article: 'Article 25(a)', provision: 'Eviction for non-payment (30 days)' },
  { article: 'Article 34', provision: 'Landlord cannot disconnect services' },
]

// ============================================================================
// PART H: QUANTITATIVE DATA REGISTRY (ALL EXTRACTED STATISTICS)
// ============================================================================

export interface QuantitativeDataPoint {
  id: string
  category: string
  metric: string
  value: string | number
  unit: string
  source: string
  year: string
}

export const quantitativeDataRegistry: QuantitativeDataPoint[] = [
  { id: 'STAT-001', category: 'Consumer', metric: 'Complaints received', value: '4,718', unit: 'count', source: 'MOET', year: '2021' },
  { id: 'STAT-002', category: 'Consumer', metric: 'Complaints received', value: '3,313', unit: 'count', source: 'MOET', year: '2022' },
  { id: 'STAT-003', category: 'Consumer', metric: 'Complaints received', value: '2,943', unit: 'count', source: 'MOET', year: '2023' },
  { id: 'STAT-004', category: 'Rental', metric: 'Reconciliation agreements', value: '443', unit: 'cases', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-005', category: 'Rental', metric: 'Settlement value', value: '190.7', unit: 'million AED', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-006', category: 'Rental', metric: 'Average resolution', value: '6', unit: 'days', source: 'RDC', year: 'Q2 2025' },
  { id: 'STAT-007', category: 'Customer Service', metric: 'Hours lost', value: '83', unit: 'million hours', source: 'ServiceNow', year: '2024' },
  { id: 'STAT-008', category: 'Customer Service', metric: 'Days lost', value: '10', unit: 'million days', source: 'ServiceNow', year: '2024' },
  { id: 'STAT-009', category: 'Telecom', metric: 'Price dissatisfaction', value: '75', unit: '%', source: 'Gulf News FNC', year: '2020' },
  { id: 'STAT-010', category: 'Telecom', metric: 'Service acceptable', value: '34', unit: '%', source: 'Gulf News FNC', year: '2020' },
  { id: 'STAT-011', category: 'Telecom', metric: 'COVID price dissatisfied', value: '78.98', unit: '%', source: 'Gulf News', year: '2020' },
  { id: 'STAT-012', category: 'Telecom', metric: 'COVID service dissatisfied', value: '62.78', unit: '%', source: 'Gulf News', year: '2020' },
  { id: 'STAT-013', category: 'Rent', metric: 'Typical increase', value: '12-20', unit: '%', source: 'Property Monitor', year: '2024-25' },
  { id: 'STAT-014', category: 'Rent', metric: 'Specific case increase', value: '22.9', unit: '%', source: 'User report', year: '2024' },
  { id: 'STAT-015', category: 'School', metric: 'Lowest annual fee', value: '9,500', unit: 'USD', source: 'Fast Company', year: '2024' },
  { id: 'STAT-016', category: 'School', metric: 'Highest annual fee', value: '32,600', unit: 'USD', source: 'Fast Company', year: '2024' },
  { id: 'STAT-017', category: 'School', metric: 'Fee increase', value: '6-7', unit: '%', source: 'KHDA', year: '2023-24' },
  { id: 'STAT-018', category: 'Banking', metric: 'Fraud losses', value: '338', unit: 'million USD', source: 'vocal.media', year: '2023' },
  { id: 'STAT-019', category: 'Labour', metric: 'Unpaid wages case', value: '110,400', unit: 'AED', source: 'Mashable', year: '2024' },
  { id: 'STAT-020', category: 'Traffic', metric: 'Hours wasted', value: '35', unit: 'hours/year', source: 'RoadSafetyUAE', year: '2024' },
  { id: 'STAT-021', category: 'Population', metric: 'Dubai 2040 target', value: '5.8', unit: 'million', source: 'PBS', year: '2024' },
  { id: 'STAT-022', category: 'Population', metric: 'Current Dubai', value: '3.8', unit: 'million', source: 'PBS', year: '2024' },
  { id: 'STAT-023', category: 'Commute', metric: 'Daily commuters', value: '1', unit: 'million', source: 'PBS', year: '2024' },
  { id: 'STAT-024', category: 'Transport', metric: 'Vehicle increase', value: '10', unit: '%', source: 'PBS', year: '2024' },
  { id: 'STAT-025', category: 'Metro', metric: 'Expansion cost', value: '5', unit: 'billion USD', source: 'PBS', year: '2024' },
  { id: 'STAT-026', category: 'Pedestrian', metric: 'Paths planned', value: '3,300', unit: 'km', source: 'PBS', year: '2024' },
  { id: 'STAT-027', category: 'Remote Work', metric: 'Peak reduction potential', value: '30', unit: '%', source: 'PBS', year: '2024' },
  { id: 'STAT-028', category: 'Salary', metric: 'Cuts reported', value: '30-50', unit: '%', source: 'LinkedIn', year: '2026' },
  { id: 'STAT-029', category: 'Employment', metric: 'Non-citizens', value: '89', unit: '%', source: 'Multiple', year: '2024' },
  { id: 'STAT-030', category: 'Consumer', metric: 'Emergency penalty', value: '2', unit: 'years + AED 2M', source: 'u.ae', year: '2023' },
  { id: 'STAT-031', category: 'Labour', metric: 'Verbal abuse penalty', value: '6', unit: 'months or Dh5,000', source: 'Khaleej Times', year: '2024' },
  { id: 'STAT-032', category: 'Consumer', metric: 'MOJ grievance fee', value: '30', unit: 'AED', source: 'moj.gov.ae', year: '2024' },
  { id: 'STAT-033', category: 'Consumer', metric: 'MOJ processing time', value: '15', unit: 'days', source: 'moj.gov.ae', year: '2024' },
  { id: 'STAT-034', category: 'Rental', metric: 'RDC judges', value: '50+', unit: 'count', source: 'Khaleej Times', year: '2025' },
  { id: 'STAT-035', category: 'School', metric: 'Entry level monthly', value: '<272', unit: 'USD', source: 'Fast Company', year: '2024' },
]

// ============================================================================
// PART I: CROSS-CATEGORY ANALYSIS
// ============================================================================

// I.1 Economic Stress Composite Index
export interface EconomicStressComponent {
  indicator: string
  weight: string
  currentValue: string
  score: string
}

export const economicStressCompositeIndex: EconomicStressComponent[] = [
  { indicator: 'Rent increases', weight: '25%', currentValue: '12-20%', score: '8/10' },
  { indicator: 'Salary cuts', weight: '25%', currentValue: '30-50% reported', score: '7/10' },
  { indicator: 'School fees', weight: '15%', currentValue: '2x inflation', score: '7/10' },
  { indicator: 'Customer service losses', weight: '10%', currentValue: '83M hours', score: '6/10' },
  { indicator: 'Banking fraud', weight: '10%', currentValue: '$338M', score: '5/10' },
  { indicator: 'Traffic losses', weight: '15%', currentValue: '35 hrs/year', score: '5/10' },
]

export const economicStressCompositeTotal = {
  composite: '6.7/10',
  interpretation: 'HIGH ECONOMIC STRESS - Multiple categories showing deterioration',
}

// I.2 Complaint Mechanism Effectiveness
export interface ComplaintMechanism {
  mechanism: string
  accessibility: string
  responseTime: string
  effectiveness: string
}

export const complaintMechanisms: ComplaintMechanism[] = [
  { mechanism: 'MOJ Grievance', accessibility: 'High (UAE Pass)', responseTime: '15 days', effectiveness: 'MEDIUM' },
  { mechanism: 'MOHRE Complaints', accessibility: 'High (App/WhatsApp)', responseTime: 'Variable', effectiveness: 'HIGH' },
  { mechanism: 'Consumer Protection', accessibility: 'High (800-1222)', responseTime: 'Variable', effectiveness: 'MEDIUM' },
  { mechanism: 'RDC', accessibility: 'High', responseTime: '6 days avg', effectiveness: 'HIGH' },
  { mechanism: 'Government Apps', accessibility: 'Low (poor reviews)', responseTime: 'N/A', effectiveness: 'LOW' },
]

// I.3 Regional Geopolitical Impact (2026)
export interface GeopoliticalImpact {
  factor: string
  directImpact: string
  indirectImpact: string
}

export const geopoliticalImpacts: GeopoliticalImpact[] = [
  { factor: 'US-Israel War on Iran', directImpact: 'Job losses, salary cuts', indirectImpact: 'Economic anxiety' },
  { factor: 'Regional tensions', directImpact: 'Layoffs, business closures', indirectImpact: 'Consumer spending down' },
  { factor: 'Red Sea cable cuts', directImpact: 'Internet outages', indirectImpact: 'Business disruption' },
]

// ============================================================================
// PART J: ATOMIC QUERIES EXECUTED
// ============================================================================

export interface AtomicQuery {
  queryCategory: string
  query: string
  status: string
}

export const atomicQueries: AtomicQuery[] = [
  { queryCategory: 'General Complaints', query: 'UAE AND (complaint OR شكوى OR complain OR يتذمر OR grievance OR مظلمة)', status: 'Completed' },
  { queryCategory: 'Negative Quality', query: 'UAE AND (worst OR أسوأ OR terrible OR فظيع OR awful OR سيئ OR horrible OR مروع)', status: 'Completed' },
  { queryCategory: 'Cost of Living', query: 'UAE AND (cost of living AND (unbearable OR لا يطاق OR unsustainable OR غير مستدام OR killing us OR قتلنا))', status: 'Completed' },
  { queryCategory: 'Rent', query: 'UAE AND (rent AND (too high OR مرتفع جدا OR increasing OR يرتفع OR unaffordable OR غير ميسور OR crisis OR أزمة))', status: 'Completed' },
  { queryCategory: 'Salary', query: 'UAE AND (salary AND (low OR منخفض OR not enough OR غير كاف OR stagnant OR راكد OR cut OR خفض))', status: 'Completed' },
  { queryCategory: 'Traffic', query: 'UAE AND (traffic AND (worst OR أسوأ OR unbearable OR لا يطاق OR waste of time OR إضاعة وقت OR daily nightmare OR كابوس يومي))', status: 'Completed' },
  { queryCategory: 'Customer Service', query: 'UAE AND (customer service AND (terrible OR فظيع OR rude OR وقح OR unhelpful OR غير مفيد OR slow OR بطيء))', status: 'Completed' },
  { queryCategory: 'Bureaucracy', query: 'UAE AND (bureaucracy AND (nightmare OR كابوس OR endless OR لا نهاية له OR paperwork OR أوراق OR complex OR معقد))', status: 'Completed' },
  { queryCategory: 'Banking', query: 'UAE AND (bank AND (terrible OR فظيع OR fees OR رسوم OR hidden charges OR رسوم مخفية OR service OR خدمة))', status: 'Completed' },
  { queryCategory: 'Telecom', query: 'UAE AND (telecom AND (expensive OR غالي OR slow OR بطيء OR outage OR انقطاع OR Etisalat OR du))', status: 'Completed' },
  { queryCategory: 'School Fees', query: 'UAE AND (school AND (fees AND (outrageous OR مزعج OR increasing OR يرتفع OR not worth OR لا يستحق OR quality OR جودة)))', status: 'Completed' },
  { queryCategory: 'Hospital', query: 'UAE AND (hospital AND (wait OR انتظار OR treatment OR علاج OR bill OR فاتورة OR insurance OR تأمين))', status: 'Completed' },
  { queryCategory: 'Employer', query: 'UAE AND (employer AND (abusive OR مسئ OR exploitative OR مستغل OR contract OR عقد OR unpaid OR غير مدفوع))', status: 'Completed' },
  { queryCategory: 'Landlord', query: 'UAE AND (landlord AND (greedy OR جشع OR unfair OR غير عادل OR eviction OR إخلاء OR maintenance OR صيانة))', status: 'Completed' },
  { queryCategory: 'Government Service', query: 'UAE AND (government service AND (slow OR بطيء OR complicated OR معقد OR app OR تطبيق OR broken OR معطل))', status: 'Completed' },
]

// ============================================================================
// PART K: KEY FINDINGS BY CATEGORY
// ============================================================================

export interface CriticismKeyFinding {
  category: string
  uaeRelevance: string
  coverageThemes: string[]
  keyStatistics: { metric: string; value: string }[]
}

export const keyFindingsByCategory: CriticismKeyFinding[] = [
  {
    category: 'General Complaints',
    uaeRelevance: 'CRITICAL',
    coverageThemes: [
      'Official Complaint Mechanisms: Multiple UAE government agencies provide formal complaint submission systems',
      'Consumer Complaints: Ministry of Economy & Tourism handles consumer complaints with published statistics',
      'Employer Grievances: Mechanism exists through Ministry of Human Resources',
      'Financial Complaints: Formal process for financial institution complaints',
      'Labor Disputes: Grievance committees for government sector employees',
    ],
    keyStatistics: [
      { metric: 'Ministry of Justice Fee', value: '30 AED' },
      { metric: 'Ministry of Justice Processing Time', value: '15 days' },
    ],
  },
  {
    category: 'Negative Quality Sentiment',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      '"Dark Side of Dubai" Medium article (May 2024) - "worst city ever made"',
      'Far Out Magazine - "worst tourist destination on Earth"',
      'TripAdvisor: "WORST HOTEL IN DUBAI" (Landmark Grand Hotel)',
    ],
    keyStatistics: [
      { metric: 'Dirty rooms reports', value: '4+ reviews' },
      { metric: 'AC failure reports', value: '3+ reviews' },
      { metric: 'Rude staff reports', value: '4+ reviews' },
    ],
  },
  {
    category: 'Cost of Living',
    uaeRelevance: 'CRITICAL',
    coverageThemes: [
      'Rental prices increased up to 20% in key neighborhoods',
      'Average prices per square foot at all-time highs',
      'Non-citizens (89% of population) experiencing salary cuts/layoffs',
      '"Dubai is on steroids but affordability risks are increasing"',
    ],
    keyStatistics: [
      { metric: 'Rent increase (typical)', value: '12-20%' },
      { metric: 'Non-citizens affected', value: '89%' },
    ],
  },
  {
    category: 'Rent Complaints',
    uaeRelevance: 'CRITICAL',
    coverageThemes: [
      'Q2 2025 RDC finalized 443 reconciliation agreements worth Dh190.7 million',
      'Average settlement period 6 days',
    ],
    keyStatistics: [
      { metric: 'Reconciliation agreements (Q2 2025)', value: '443' },
      { metric: 'Total settlement value', value: 'Dh190.7 million' },
      { metric: 'Average resolution time', value: '6 days' },
    ],
  },
  {
    category: 'Salary Complaints',
    uaeRelevance: 'CRITICAL',
    coverageThemes: [
      'Reports of 30% and 50% salary cuts due to regional tensions (April 2026)',
      'Legal Questions: "Is it legal to cut your salary in UAE?" searches trending',
      'Unpaid Leave: Employees facing pressure for unpaid leave',
      'Legal Protection: Salary reduction requires written consent',
    ],
    keyStatistics: [
      { metric: 'Salary cuts reported', value: '30-50%' },
      { metric: 'Labour Court Unpaid Wages Case', value: 'AED 110,400' },
    ],
  },
  {
    category: 'Traffic',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      'Drivers spend average of 35 hours/year stuck in traffic',
      'Daily commuters to Dubai: 1 million',
      'Vehicle increase rate: 10% (vs 4% globally)',
    ],
    keyStatistics: [
      { metric: 'Hours wasted annually', value: '35 hours/driver' },
      { metric: 'Daily commuters', value: '1 million' },
      { metric: 'Vehicle increase rate', value: '10%' },
    ],
  },
  {
    category: 'Customer Service',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      'UAE customers lose 83 million hours/year navigating slow customer service',
      '10 million working days lost annually due to poor customer service',
    ],
    keyStatistics: [
      { metric: 'Hours lost annually', value: '83 million' },
      { metric: 'Working days lost', value: '10 million' },
    ],
  },
  {
    category: 'Banking/Financial',
    uaeRelevance: 'MEDIUM-HIGH',
    coverageThemes: [
      'UAE banking industry recorded $338 million in direct fraud-related losses (2023)',
    ],
    keyStatistics: [
      { metric: 'Fraud losses (2023)', value: '$338 million' },
    ],
  },
  {
    category: 'Telecom',
    uaeRelevance: 'MEDIUM-HIGH',
    coverageThemes: [
      'September 2025 Red Sea cable cuts causing widespread outages',
      '75% believe prices high, only 34% find service quality acceptable',
    ],
    keyStatistics: [
      { metric: 'Price dissatisfaction', value: '75%' },
      { metric: 'Service acceptable', value: '34%' },
    ],
  },
  {
    category: 'School Fees',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      'Private school fees range from $9,500 to $32,600 annually',
      'Rising at 2x inflation rate',
    ],
    keyStatistics: [
      { metric: 'Entry level (Grade 1)', value: '< $272/month' },
      { metric: 'Premium schools', value: 'Up to $32,600/year' },
    ],
  },
  {
    category: 'Employer Complaints',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      'Article 14(2) prohibits bullying and verbal violence',
      'Article 427 provides criminal penalties (6 months imprisonment, Dh5,000 fine)',
    ],
    keyStatistics: [
      { metric: 'Verbal abuse penalty', value: '6 months or Dh5,000' },
    ],
  },
  {
    category: 'Landlord Complaints',
    uaeRelevance: 'HIGH',
    coverageThemes: [
      'Filing fee: 3.5% of annual rent',
      'Minimum AED 500, Maximum AED 20,000',
    ],
    keyStatistics: [
      { metric: 'Filing fee', value: '3.5% of annual rent' },
      { metric: 'Minimum fee', value: 'AED 500' },
      { metric: 'Maximum fee', value: 'AED 20,000' },
    ],
  },
]

// ============================================================================
// CROSS-CATEGORY OBSERVATIONS
// ============================================================================

export const criticismCrossCategoryObservations = [
  'Economic Stress: Multiple complaint categories point to economic stress: rent increases (12-20%+), salary cuts (30-50%), school fees tripling',
  'Government Services: Mixed sentiment - official complaint mechanisms exist but app-based services receive poor reviews',
  'Labor Rights Awareness: Strong awareness of legal protections against salary cuts, unpaid leave, and abusive termination',
  'Regional Geopolitical Impact: 2026 regional tensions driving economic anxiety and salary concerns',
  'Platform Disparity: Social platforms show organic user complaints, official channels emphasize formal mechanisms',
  'Expat Experience Dominance: Most complaints from expat community (salary, rent, schools, customer service)',
  'Dubai-Specific Focus: Dubai-centric complaints due to population density',
  'Cost vs Quality: Recurring theme that high costs don\'t match service quality',
  'Digital Transformation Gap: Government claims contrast with user experiences of app failures',
  'Legal Framework Awareness: Growing awareness of employee/tenant rights but enforcement challenging',
]

/**
 * useCriticismComplaintData - Hook for Criticism & Complaint data
 */
export function useCriticismComplaintData() {
  const [data] = useState({
    overview: criticismOverview,
    riskIndicators,
    complaintVolumeMetrics,
    economicStressIndicators,
    serviceQualityMetrics,
    telecomMetrics,
    schoolFeeMetrics,
    legalPenalties,
    governmentEntities: criticismGovEntities,
    telecomEntities,
    bankingEntities,
    schoolOperators,
    sentimentDistributionMatrix,
    platformSentiment,
    trendAnalysis,
    relevanceClassifications,
    issueClassifications,
    geopoliticalContext,
    credibilityTiers,
    sourceReliability,
    employmentLawProvisions,
    consumerProtectionViolations,
    landlordTenantProvisions,
    quantitativeDataRegistry,
    economicStressCompositeIndex,
    economicStressCompositeTotal,
    complaintMechanisms,
    geopoliticalImpacts,
    atomicQueries,
    keyFindingsByCategory,
    crossCategoryObservations: criticismCrossCategoryObservations,
  })
  const [loading] = useState(false)
  const [error] = useState<Error | null>(null)

  return { data, loading, error }
}
