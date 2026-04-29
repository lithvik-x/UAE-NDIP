/**
 * Stakeholder Intelligence Data
 *
 * UAE National Digital Intelligence Platform - Category 7
 * Stakeholder profiles extracted from markdown research files 7-1 through 7-10
 */

import type {
  StakeholderIntelligence,
  StakeholderMetrics,
  StakeholderProgram,
  SocialAccount,
  UAERelevance,
  AlertLevel,
  SourceReference,
  KeyFinding,
  CredibilityScore,
  SentimentBreakdown,
  TierLevel,
} from './types'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function createCredibilityScore(
  tier: TierLevel,
  score: number,
  sources: number,
  lastVerified: string
): CredibilityScore {
  return { tier, score, sources, lastVerified }
}

function createUAERelevance(score: number, level: 'critical' | 'high' | 'medium' | 'low', justification?: string): UAERelevance {
  return { score, level, justification }
}

function createSentimentBreakdown(positive: number, negative: number, neutral: number): SentimentBreakdown {
  return {
    positive,
    negative,
    neutral,
    overall: Math.round((positive - negative + 50) * 0.5),
    volume: positive + negative + neutral,
  }
}

function createKeyFinding(finding: string, metric: string | number, source: string, tier: TierLevel, alert?: AlertLevel): KeyFinding {
  return { finding, metric, source, tier, alert }
}

function createSource(name: string, url: string, tier: TierLevel, date: string): SourceReference {
  return { name, url, tier, date }
}

function createStakeholderProgram(
  name: string,
  description: string,
  status: 'active' | 'completed' | 'planned',
  budget?: number
): StakeholderProgram {
  return { name, description, status, budget }
}

// ============================================================================
// STAKEHOLDER DATA
// ============================================================================

// ============================================================================
// INDIVIDUAL STAKEHOLDER EXPORTS
// ============================================================================

export const namaData: StakeholderIntelligence = {
  id: 'stakeholder-nama',
  name: 'National Media Authority',
  nameAr: 'هيئة الإعلام الوطني',
  type: 'government',
  mandate: 'Regulatory authority overseeing all media operations in the UAE. Establishes content standards, issues penalties for violations, and maintains press freedom monitoring. Operates under the UAE Media Council framework.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(35, 45, 20),
    credibility: createCredibilityScore(1, 82, 12, '2026-04-15'),
    programs: [
      createStakeholderProgram('Content Standards Framework', '20-point content standards for all media platforms operating in UAE', 'active'),
      createStakeholderProgram('Penalty Enforcement', 'Administrative penalties ranging from AED 5,000 to AED 1,000,000 for violations', 'active', 0),
      createStakeholderProgram('Press Freedom Monitoring', 'Annual press freedom index reporting', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaenama', url: 'https://twitter.com/uaenama', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Press Freedom Index ranking', '26.91/164th globally', 'RSF Press Freedom Index 2026', 2, 'YELLOW'),
    createKeyFinding('Content penalty range', 'AED 5,000 - AED 1,000,000', 'NAMA Regulatory Framework', 1, undefined),
    createKeyFinding('Content standards count', '20 specific standards', 'NAMA Guidelines 2025', 1, undefined),
    createKeyFinding('WAM news agency output', 'High volume daily coverage', 'WAM Statistics 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(88, 'high', 'Primary regulatory body for all media content in UAE'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('NAMA Official Documentation', 'https://www.nama.gov.ae', 1, '2026-04-10'),
    createSource('RSF Press Freedom Index 2026', 'https://rsf.org', 2, '2026-04-01'),
    createSource('WAM News Agency Statistics', 'https://wam.gov.ae', 2, '2026-03-28'),
  ],
  lastUpdated: '2026-04-20',
}

export const nmcDubaiData: StakeholderIntelligence = {
  id: 'stakeholder-nmc-dubai',
  name: 'Dubai Media Council / NMC Dubai',
  nameAr: 'مجلس دبي للإعلام',
  type: 'government',
  mandate: 'Regulatory authority for media operations in Dubai. Oversees Dubai Media City (free zone with 1,300+ companies), content certification, film censorship reform, and influencer regulation under Federal Decree Law No. 55 of 2023.',
  metrics: {
    digitalReach: 45000000,
    engagement: 2.1,
    sentiment: createSentimentBreakdown(55, 25, 20),
    credibility: createCredibilityScore(1, 85, 15, '2026-04-18'),
    programs: [
      createStakeholderProgram('Dubai Media City Free Zone', '1,300+ registered media companies, 40,000+ media professionals', 'active', 0),
      createStakeholderProgram('Content Certification', 'Film and digital content rating system', 'active'),
      createStakeholderProgram('Film Censorship Reform 2021', 'Updated content guidelines for theatrical releases', 'completed'),
      createStakeholderProgram('Influencer Regulation', 'Federal Decree Law No. 55 of 2023', 'active'),
      createStakeholderProgram('Creators HQ Initiative', 'AED 150 million fund for content creators', 'active', 150000000),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@DubaiMediaCity', url: 'https://twitter.com/DubaiMediaCity', verified: true },
    { platform: 'instagram', handle: '@dubaimediacity', url: 'https://instagram.com/dubaimediacity', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Media companies in Dubai Media City', '1,300+', 'DMC Official Data 2026', 1, undefined),
    createKeyFinding('Media professionals employed', '40,000+', 'DMC Workforce Report', 1, undefined),
    createKeyFinding('Creators HQ fund allocation', 'AED 150 million', 'UAE Cabinet Decision 2024', 1, undefined),
    createKeyFinding('Influencer regulation law', 'Federal Decree Law No. 55 of 2023', 'UAE Official Gazette', 1, undefined),
  ],
  uaeRelevance: createUAERelevance(92, 'high', 'Dubai accounts for 60%+ of UAE media ecosystem'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Dubai Media Council', 'https://www.dmi.gov.ae', 1, '2026-04-12'),
    createSource('Dubai Media City Official', 'https://www.dubaimediacity.com', 1, '2026-04-15'),
    createSource('UAE Federal Decree Law No. 55 of 2023', 'https://www.moj.gov.ae', 1, '2023-09-01'),
  ],
  lastUpdated: '2026-04-20',
}

export const moiData: StakeholderIntelligence = {
  id: 'stakeholder-moi',
  name: 'Ministry of Interior',
  nameAr: 'وزارة الداخلية',
  type: 'government',
  mandate: 'Primary law enforcement and internal security ministry. Oversees 7 police forces across Emirates, counter-terrorism operations (83 designated organizations), cybercrime enforcement, and civil defense. Led by Sheikh Saif bin Zayed Al Nahyan.',
  metrics: {
    digitalReach: 12000000,
    engagement: 1.8,
    sentiment: createSentimentBreakdown(48, 38, 14),
    credibility: createCredibilityScore(1, 88, 20, '2026-04-19'),
    programs: [
      createStakeholderProgram('Counter-Terrorism Framework', '83 designated terrorist organizations', 'active', 0),
      createStakeholderProgram('Cybercrime Law Enforcement', 'Digital crimes prevention and prosecution', 'active'),
      createStakeholderProgram('Civil Defense Operations', 'Emergency response and fire safety', 'active'),
      createStakeholderProgram('UAE94/UAE84 Case Monitoring', 'Human rights case tracking system', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@moiuae', url: 'https://twitter.com/moiuae', verified: true },
    { platform: 'instagram', handle: '@moiuae', url: 'https://instagram.com/moiuae', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Designated terrorist organizations', '83', 'MOI Official List 2026', 1, 'YELLOW'),
    createKeyFinding('Police forces under MOI', '7', 'MOI Structure 2026', 1, undefined),
    createKeyFinding('UAE State Security head', 'Khaled bin Mohammed bin Zayed Al-Nahyan', 'Official UAE Sources', 1, undefined),
    createKeyFinding('Documented torture methods in custody', '16', 'Human Rights Organizations', 2, 'RED'),
    createKeyFinding('UAE94 case activists detained', 'Multiple activists', 'HRW Report 2026', 2, 'RED'),
  ],
  uaeRelevance: createUAERelevance(98, 'critical', 'Core national security and law enforcement institution'),
  alertLevel: 'RED',
  sources: [
    createSource('Ministry of Interior UAE', 'https://www.moi.gov.ae', 1, '2026-04-15'),
    createSource('UAE State Security', 'https://www.ss.gov.ae', 1, '2026-04-10'),
    createSource('Human Rights Watch 2026', 'https://www.hrw.org', 2, '2026-01-15'),
    createSource('Amnesty International Report', 'https://www.amnesty.org', 2, '2026-02-01'),
  ],
  lastUpdated: '2026-04-20',
}

export const mofaData: StakeholderIntelligence = {
  id: 'stakeholder-mofa',
  name: 'Ministry of Foreign Affairs',
  nameAr: 'وزارة الخارجية',
  type: 'government',
  mandate: 'UAE foreign policy execution, diplomatic relations management, consular services, and international cooperation. Led by Sheikh Abdullah bin Zayed Al Nahyan since 2006. Manages 147 embassies and consulates worldwide.',
  metrics: {
    digitalReach: 8500000,
    engagement: 2.4,
    sentiment: createSentimentBreakdown(52, 30, 18),
    credibility: createCredibilityScore(1, 90, 25, '2026-04-20'),
    programs: [
      createStakeholderProgram('Diplomatic Incident Response', 'Rapid deployment of diplomatic missions and responses', 'active', 0),
      createStakeholderProgram('Sudan Evacuation Operations', 'UAE citizen evacuation from Sudan conflict zones', 'active'),
      createStakeholderProgram('Foreign Aid Distribution', '$98B total foreign aid since 1971', 'active', 0),
      createStakeholderProgram('Abraham Accords Monitoring', 'Track normalization agreements', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@外交事务', url: 'https://twitter.com/WamMofa', verified: true },
    { platform: 'instagram', handle: '@uaefm', url: 'https://instagram.com/uaefm', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Foreign aid since 1971', '$98 billion', 'MOFA Annual Report 2025', 1, undefined),
    createKeyFinding('MOFA minister tenure', 'Sheikh Abdullah bin Zayed Al Nahyan since 2006', 'Official Biography', 1, undefined),
    createKeyFinding('Damascus embassy incident', 'April 2026 closure', 'Multiple Sources', 2, 'YELLOW'),
    createKeyFinding('Tehran embassy closure', 'January 2026', 'Reuters January 2026', 2, 'YELLOW'),
    createKeyFinding('Belgium ambassador recall', 'July 2025', 'Western Diplomatic Sources', 2, 'YELLOW'),
    createKeyFinding('Israeli ambassador expulsion', 'July 2025', 'Multiple Sources', 2, 'YELLOW'),
    createKeyFinding('Saudi-UAE relations rupture', 'December 2025', 'Regional Analysis 2026', 2, 'RED'),
    createKeyFinding('Sudan expulsions', 'UAE nationals expelled from Sudan', 'Multiple Sources', 2, 'YELLOW'),
  ],
  uaeRelevance: createUAERelevance(96, 'critical', 'Central to UAE international positioning and bilateral relations'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Ministry of Foreign Affairs UAE', 'https://www.mofa.gov.ae', 1, '2026-04-18'),
    createSource('UAE Embassy Network', 'https://www.mofa.gov.ae/embassies', 1, '2026-04-15'),
    createSource('Abraham Accords Institute', 'https://www.abrahamaccords.org', 2, '2026-03-01'),
    createSource('Regional News Wire Services', '', 2, '2026-04-01'),
  ],
  lastUpdated: '2026-04-20',
}

export const ministryCultureData: StakeholderIntelligence = {
  id: 'stakeholder-ministry-culture',
  name: 'Ministry of Culture',
  nameAr: 'وزارة الثقافة والشباب',
  type: 'government',
  mandate: 'Cultural policy, heritage preservation, creative industries development, and cultural censorship enforcement. Led by Salem bin Khalid Al Qassimi. Manages 5 UNESCO World Heritage Sites and 19 intangible cultural heritage entries.',
  metrics: {
    digitalReach: 6200000,
    engagement: 3.1,
    sentiment: createSentimentBreakdown(60, 25, 15),
    credibility: createCredibilityScore(1, 84, 18, '2026-04-16'),
    programs: [
      createStakeholderProgram('Global Soft Power Index', '10th globally with 59.4/100 score', 'active', 0),
      createStakeholderProgram('UNESCO Heritage Sites', '5 World Heritage Sites management', 'active'),
      createStakeholderProgram('Zayed National Museum', 'Opening December 2025', 'planned', 0),
      createStakeholderProgram('Louvre Abu Dhabi Operations', '1.4M annual visitors', 'active'),
      createStakeholderProgram('Cultural Censorship Framework', 'Emirati dialect and dress protection law April 2025', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaeministryofculture', url: 'https://twitter.com/uaeculture', verified: true },
    { platform: 'instagram', handle: '@uaeministryofculture', url: 'https://instagram.com/uaeministryofculture', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Global Soft Power Index ranking', '10th globally (59.4/100)', 'Portland Soft Power 2026', 1, undefined),
    createKeyFinding('UNESCO World Heritage Sites', '5', 'UNESCO Official List 2026', 1, undefined),
    createKeyFinding('Intangible cultural heritage entries', '19', 'UNESCO Intangible Heritage 2026', 1, undefined),
    createKeyFinding('Louvre Abu Dhabi annual visitors', '1.4 million', 'ADCD Annual Report 2025', 1, undefined),
    createKeyFinding('Zayed National Museum opening', 'December 2025', 'Abu Dhabi Government Announcement', 1, undefined),
    createKeyFinding('Emirati dialect/dress protection law', 'April 2025', 'UAE Official Gazette 2025', 1, 'YELLOW'),
  ],
  uaeRelevance: createUAERelevance(78, 'high', 'Key to UAE cultural soft power and identity preservation'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Ministry of Culture UAE', 'https://www.moc.gov.ae', 1, '2026-04-14'),
    createSource('UNESCO UAE Heritage', 'https://whc.unesco.org/en/states/ae', 1, '2026-03-20'),
    createSource('Portland Soft Power Index 2026', 'https://softpower30.com', 2, '2026-03-15'),
    createSource('Abu Dhabi Department of Culture', 'https://visitabudhabi.com', 2, '2026-04-01'),
  ],
  lastUpdated: '2026-04-20',
}

export const ministryEconomyData: StakeholderIntelligence = {
  id: 'stakeholder-ministry-economy',
  name: 'Ministry of Economy',
  nameAr: 'Ministry of Economy',
  type: 'government',
  mandate: 'Economic policy, trade facilitation, competitiveness improvement, and business environment optimization. Oversees CEPA agreements, FDI attraction, and startup ecosystem development.',
  metrics: {
    digitalReach: 9800000,
    engagement: 2.8,
    sentiment: createSentimentBreakdown(65, 20, 15),
    credibility: createCredibilityScore(1, 87, 22, '2026-04-17'),
    programs: [
      createStakeholderProgram('GDP Growth 2024', '4% growth reaching $484 billion', 'completed', 0),
      createStakeholderProgram('FDI Attraction', '$45.6 billion FDI (+48.5% YoY)', 'active', 0),
      createStakeholderProgram('IMD Competitiveness Ranking', '5th globally', 'active', 0),
      createStakeholderProgram('CEPA Trade Agreements', 'Multiple comprehensive economic partnership agreements', 'active'),
      createStakeholderProgram('Startup Ecosystem', '#1 GEM ranking for entrepreneurial activity', 'active'),
      createStakeholderProgram('Non-Oil Trade', 'AED 5.23 trillion', 'active', 0),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaeeconomy', url: 'https://twitter.com/uaeeconomy', verified: true },
    { platform: 'linkedin', handle: 'UAE Ministry of Economy', url: 'https://linkedin.com/company/uae-ministry-of-economy', verified: true },
  ],
  keyFindings: [
    createKeyFinding('GDP 2024', '$484 billion (4% growth)', 'Ministry of Economy 2025', 1, undefined),
    createKeyFinding('FDI 2024', '$45.6 billion (+48.5% year-over-year)', 'UNCTAD 2025', 1, undefined),
    createKeyFinding('IMD World Competitiveness', '5th globally', 'IMD World Competitiveness 2025', 1, undefined),
    createKeyFinding('GEM Startup Ranking', '#1 globally', 'Global Entrepreneurship Monitor 2025', 1, undefined),
    createKeyFinding('Non-oil trade value', 'AED 5.23 trillion', 'Federal Customs Authority 2025', 1, undefined),
  ],
  uaeRelevance: createUAERelevance(94, 'critical', 'Core economic governance and trade policy institution'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Ministry of Economy UAE', 'https://www.economy.gov.ae', 1, '2026-04-15'),
    createSource('UNCTAD World Investment Report', 'https://unctad.org', 1, '2025-06-20'),
    createSource('IMD World Competitiveness', 'https://www.imd.org', 2, '2025-05-30'),
    createSource('GEM Global Report 2025', 'https://www.gemconsortium.org', 2, '2025-03-15'),
  ],
  lastUpdated: '2026-04-20',
}

export const gcoData: StakeholderIntelligence = {
  id: 'stakeholder-gco',
  name: 'Government Communications Office / Government National Media Office',
  nameAr: 'مكتب الاتصال الحكومي',
  type: 'government',
  mandate: 'Federal government strategic communications, crisis response coordination, and public trust management. Coordinates across 22 government entities. Operates GCC Media Affairs Committee with 4 subcommittees. Benchmarks crisis response under 15 minutes.',
  metrics: {
    digitalReach: 35000000,
    engagement: 1.9,
    sentiment: createSentimentBreakdown(58, 27, 15),
    credibility: createCredibilityScore(1, 89, 20, '2026-04-19'),
    programs: [
      createStakeholderProgram('Crisis Response Protocol', 'Under 15 minute response benchmark', 'active', 0),
      createStakeholderProgram('Public Trust Measurement', 'Top 3 globally in government trust rankings', 'active'),
      createStakeholderProgram('GCC Media Coordination', '22 entities, 4 subcommittees', 'active'),
      createStakeholderProgram('Social Media Engagement', 'Facebook 1.54%, Instagram 2.31% engagement rates', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@uaegco', url: 'https://twitter.com/uaegco', verified: true },
    { platform: 'facebook', handle: 'UAE Government Communications', url: 'https://facebook.com/uaegco', verified: true },
    { platform: 'instagram', handle: '@uaegco', url: 'https://instagram.com/uaegco', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Crisis response benchmark', '<15 minutes', 'GCO Operational Standards', 1, undefined),
    createKeyFinding('Public trust ranking', 'Top 3 globally', 'Edelman Trust Barometer 2026', 1, undefined),
    createKeyFinding('Entities coordinated', '22', 'GCO Structure 2026', 1, undefined),
    createKeyFinding('Facebook engagement rate', '1.54%', 'GCO Social Media Report Q1 2026', 2, undefined),
    createKeyFinding('Instagram engagement rate', '2.31%', 'GCO Social Media Report Q1 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(95, 'critical', 'Central coordination for all government communications'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Government Communications Office', 'https://www.gco.gov.ae', 1, '2026-04-18'),
    createSource('Edelman Trust Barometer 2026', 'https://www.edelman.com', 2, '2026-01-20'),
    createSource('GCC Media Affairs Committee', '', 2, '2026-02-15'),
  ],
  lastUpdated: '2026-04-20',
}

export const prAgencyData: StakeholderIntelligence = {
  id: 'stakeholder-pr-agencies',
  name: 'PR Agencies and Communications Firms',
  type: 'corporate',
  mandate: 'Professional communications and public relations services operating in UAE market. Includes global agencies (Cision, Meltwater, Brandwatch) and regional firms. Market valued at $8.56 billion in Middle East (2026) with 4.68% CAGR.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(50, 25, 25),
    credibility: createCredibilityScore(2, 72, 10, '2026-04-10'),
    programs: [
      createStakeholderProgram('Media Intelligence Tools', 'Cision, Meltwater, Brandwatch platforms', 'active', 0),
      createStakeholderProgram('Influencer Marketing', '$5.20-6.50 ROI per $1 spent', 'active'),
      createStakeholderProgram('Regional PR Market', '$8.56B Middle East market size 2026', 'active'),
    ],
  },
  keyFindings: [
    createKeyFinding('Middle East PR market value', '$8.56 billion (2026)', 'PR Week Market Report 2026', 2, undefined),
    createKeyFinding('Market CAGR', '4.68%', 'Industry Analysis 2026', 2, undefined),
    createKeyFinding('Influencer marketing ROI', '$5.20-6.50 per $1', 'Industry Benchmark Report 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(65, 'medium', 'Critical infrastructure for message amplification and narrative management'),
  alertLevel: 'GREEN',
  sources: [
    createSource('PR Week Middle East', 'https://prweek.com', 2, '2026-03-01'),
    createSource('Holmes Report Regional', '', 2, '2026-02-15'),
    createSource('Cision Global Media Database', 'https://www.cision.com', 2, '2026-04-01'),
  ],
  lastUpdated: '2026-04-20',
}

export const intlRelationsData: StakeholderIntelligence = {
  id: 'stakeholder-intl-relations',
  name: 'International and Regional Organizations',
  nameAr: 'المنظمات الدولية والإقليمية',
  type: 'international',
  mandate: 'Multilateral bodies and fora where UAE maintains membership and active participation. Includes GCC, Arab League, OIC (57 member states), UN agencies, and bilateral partnership frameworks. Active in regional security and soft power projection.',
  metrics: {
    digitalReach: 0,
    engagement: 0,
    sentiment: createSentimentBreakdown(55, 28, 17),
    credibility: createCredibilityScore(1, 85, 15, '2026-04-18'),
    programs: [
      createStakeholderProgram('GCC Coordination', 'Gulf Cooperation Council framework', 'active', 0),
      createStakeholderProgram('Arab League Representation', '22-member state bloc', 'active'),
      createStakeholderProgram('OIC Membership', '57-member Organization of Islamic Cooperation', 'active'),
      createStakeholderProgram('UN Peacekeeping', 'UAE contributions to UN missions', 'active'),
      createStakeholderProgram('Soft Power Leadership', '#1 in GCC for soft power', 'active'),
      createStakeholderProgram('Regional Threat Monitoring', '6,000+ missile/drone attacks tracked since Feb 2026', 'active'),
    ],
  },
  keyFindings: [
    createKeyFinding('GCC membership', 'Active participant', 'GCC Charter 1981', 1, undefined),
    createKeyFinding('Arab League membership', '22 member states', 'Arab League Charter', 1, undefined),
    createKeyFinding('OIC member count', '57', 'OIC Official 2026', 1, undefined),
    createKeyFinding('UAE soft power ranking', '#1 in GCC', 'Portland Soft Power 2026', 1, undefined),
    createKeyFinding('Regional attacks tracked', '6,000+ since February 2026', 'Regional Security Assessment Q1 2026', 2, 'RED'),
  ],
  uaeRelevance: createUAERelevance(82, 'high', 'Critical for UAE multilateral engagement and regional security'),
  alertLevel: 'RED',
  sources: [
    createSource('GCC General Secretariat', 'https://www.gcc-sg.org', 1, '2026-04-10'),
    createSource('Arab League', 'https://www.lasportal.org', 1, '2026-03-20'),
    createSource('OIC Official', 'https://www.oic-oci.org', 1, '2026-04-01'),
    createSource('Portland Soft Power Index 2026', 'https://softpower30.com', 2, '2026-03-15'),
    createSource('Regional Security Analysis', '', 2, '2026-04-01'),
  ],
  lastUpdated: '2026-04-20',
}

// ============================================================================
// LABOR UNIONS & WORKER GROUPS
// ============================================================================

export const laborUnionsData: StakeholderIntelligence = {
  id: 'stakeholder-labor-unions',
  name: 'Labor Unions & Worker Groups',
  nameAr: 'النقابات العمالية',
  type: 'civil-society',
  mandate: "Represents and advocates for worker rights across UAE's diverse labor force. Manages disputes, provides legal assistance, coordinates with Ministry of Human Resources and Emiratization (MOHRE). Active in construction, domestic, and service sectors with over 2 million registered workers.",
  metrics: {
    digitalReach: 2800000,
    engagement: 3.8,
    sentiment: createSentimentBreakdown(42, 35, 23),
    credibility: createCredibilityScore(1, 76, 18, '2026-04-15'),
    programs: [
      createStakeholderProgram('Worker Welfare Fund', 'AED 1.2 billion fund for injured workers and families', 'active', 1200000000),
      createStakeholderProgram('Dispute Resolution Service', 'Free mediation for labor disputes across all emirates', 'active'),
      createStakeholderProgram('Domestic Workers Charter', 'Rights protection for 150,000+ domestic workers', 'active'),
      createStakeholderProgram('Emiratization Monitoring', 'Track national workforce integration progress', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAELaborRights', url: 'https://twitter.com/uaelaborrights', verified: false },
    { platform: 'facebook', handle: 'UAE Labor Unions Federation', url: 'https://facebook.com/uaelaborfederation', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Registered workers under union coverage', '2.1 million', 'MOHRE Annual Report 2025', 1, undefined),
    createKeyFinding('Average wage dispute resolution time', '18 days', 'Labor Court Statistics 2026', 1, undefined),
    createKeyFinding('Domestic worker complaints', '12,400 annually', 'Human Rights Watch 2026', 2, 'YELLOW'),
    createKeyFinding('Wage protection system coverage', '98.5% of private sector', 'MOHRE Compliance Report', 1, undefined),
    createKeyFinding('Informal worker estimate', '40% of total workforce', 'ILO Estimate 2025', 2, 'YELLOW'),
    createKeyFinding('Occupational safety violations', '3,200 cases annually', 'Ministry of Labor Statistics', 2, 'YELLOW'),
  ],
  uaeRelevance: createUAERelevance(82, 'high', 'Critical for social stability and economic productivity of 95% foreign labor force'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Ministry of Human Resources & Emiratization', 'https://www.mohre.gov.ae', 1, '2026-04-10'),
    createSource('International Labor Organization UAE', 'https://www.ilo.org', 2, '2026-03-15'),
    createSource('Human Rights Watch Report 2026', 'https://www.hrw.org', 2, '2026-01-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// WOMEN'S ORGANIZATIONS
// ============================================================================

export const womenOrganizationsData: StakeholderIntelligence = {
  id: 'stakeholder-women-orgs',
  name: 'Women\'s Organizations',
  nameAr: 'منظمات المرأة',
  type: 'civil-society',
  mandate: 'Advances gender equality and women\'s empowerment across UAE. Operates under the UAE Gender Balance Council framework. Manages women\'s shelters, legal aid, career development programs, and monitors progress on UN Sustainable Development Goal 5.',
  metrics: {
    digitalReach: 4500000,
    engagement: 4.2,
    sentiment: createSentimentBreakdown(68, 18, 14),
    credibility: createCredibilityScore(1, 88, 22, '2026-04-18'),
    programs: [
      createStakeholderProgram('Women\'s Leadership Accelerator', 'AED 200 million fund for women entrepreneurs', 'active', 200000000),
      createStakeholderProgram('Gender Balance Council', 'Achieved 50% women in FNC representation', 'active'),
      createStakeholderProgram('Emergency Shelter Network', '12 safe houses across 7 emirates', 'active'),
      createStakeholderProgram('Women in STEM Initiative', '50,000 female engineers since 2020', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'instagram', handle: '@uaewomenempower', url: 'https://instagram.com/uaewomenempower', verified: true },
    { platform: 'linkedin', handle: 'UAE Women\'s Federation', url: 'https://linkedin.com/company/uaewomenfederation', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Women in federal government positions', '50% representation', 'UAE Gender Balance Council 2026', 1, undefined),
    createKeyFinding('Female labor force participation', '58.7%', 'World Bank UAE Report 2025', 1, undefined),
    createKeyFinding('Women-owned SMEs', '23,000 registered', 'Ministry of Economy 2026', 1, undefined),
    createKeyFinding('Gender pay gap', '6% average', 'Federal Authority for Equality Report', 1, 'YELLOW'),
    createKeyFinding('Domestic violence cases', '8,200 annually', 'Police Statistics 2026', 2, 'YELLOW'),
    createKeyFinding('Women founders in tech', '12% of startups', 'GEM UAE Report 2025', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(85, 'high', 'Key to UAE Vision 2030 gender balance goals and global soft power positioning'),
  alertLevel: 'GREEN',
  sources: [
    createSource('UAE Gender Balance Council', 'https://www.genderbalance.ae', 1, '2026-04-12'),
    createSource('UAE Women\'s Federation', 'https://www.uaewf.ae', 1, '2026-04-15'),
    createSource('World Bank Gender Data', 'https://www.worldbank.org', 2, '2026-03-01'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// YOUTH ORGANIZATIONS
// ============================================================================

export const youthOrganizationsData: StakeholderIntelligence = {
  id: 'stakeholder-youth-orgs',
  name: 'Youth Organizations',
  nameAr: 'منظمات الشباب',
  type: 'civil-society',
  mandate: 'Empowers UAE youth aged 15-35 (68% of population) through leadership development, entrepreneurship programs, and civic engagement. Operates under the UAE Youth Achievement Council and Ministry of Culture. Manages the national service exemption process and youth volunteer programs.',
  metrics: {
    digitalReach: 8200000,
    engagement: 5.1,
    sentiment: createSentimentBreakdown(72, 15, 13),
    credibility: createCredibilityScore(1, 84, 25, '2026-04-20'),
    programs: [
      createStakeholderProgram('National Service Program', '14,000+ annually (optional exemption available)', 'active'),
      createStakeholderProgram('Youth Entrepreneurship Fund', 'AED 500 million for startups under 35', 'active', 500000000),
      createStakeholderProgram('Summer Camps Network', '120 camps serving 45,000 youth', 'active'),
      createStakeholderProgram('Youth Digital Council', 'TikTok, Instagram governance forums', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'tiktok', handle: '@uaeyouthvoice', url: 'https://tiktok.com/@uaeyouthvoice', verified: true },
    { platform: 'instagram', handle: '@uaeyouth', url: 'https://instagram.com/uaeyouth', verified: true },
    { platform: 'twitter-x', handle: '@uaeyouthcouncil', url: 'https://twitter.com/uaeyouthcouncil', verified: true },
  ],
  keyFindings: [
    createKeyFinding('UAE youth population (15-35)', '68% of total population', 'Federal Competitiveness Centre 2026', 1, undefined),
    createKeyFinding('Youth unemployment rate', '6.45% overall, 19.9% for females', 'World Bank 2026', 1, 'YELLOW'),
    createKeyFinding('National service participation', '14,200 annually', 'UAE Armed Forces 2026', 1, undefined),
    createKeyFinding('Youth startup funding', 'AED 500M fund deployed', 'Ministry of Economy 2025', 1, undefined),
    createKeyFinding('Youth mental health referrals', '18,000 annually', 'Health Authority Abu Dhabi', 2, 'YELLOW'),
    createKeyFinding('Social media usage (18-24)', '4.2 hrs/day average', 'Meta Audience Insights 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(90, 'high', 'Critical demographic for nation-building and Emiratization success'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('UAE Youth Achievement Council', 'https://www.youth.gov.ae', 1, '2026-04-18'),
    createSource('Ministry of Culture and Youth', 'https://www.moc.gov.ae', 1, '2026-04-15'),
    createSource('World Bank UAE Youth Data', 'https://www.worldbank.org', 2, '2026-03-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// ACADEMIC INSTITUTIONS
// ============================================================================

export const academicsData: StakeholderIntelligence = {
  id: 'stakeholder-academics',
  name: 'Academic Institutions',
  nameAr: 'المؤسسات الأكاديمية',
  type: 'civil-society',
  mandate: 'Universities, research centers, and think tanks shaping UAE knowledge economy. Includes NYU Abu Dhabi, Khalifa University, UAE University, American University of Sharjah, and MIT Washington DC campus. Produces 65,000+ graduates annually and publishes 8,000+ research papers.',
  metrics: {
    digitalReach: 3100000,
    engagement: 2.9,
    sentiment: createSentimentBreakdown(61, 22, 17),
    credibility: createCredibilityScore(1, 86, 30, '2026-04-19'),
    programs: [
      createStakeholderProgram('Research Chair Program', 'AED 300 million for 50 research chairs', 'active', 300000000),
      createStakeholderProgram('Graduate Scholarship Fund', 'Full tuition for 15,000 students annually', 'active'),
      createStakeholderProgram('Industry Partnership Framework', '2,300+ corporate research partnerships', 'active'),
      createStakeholderProgram('Academic Excellence Index', 'Annual ranking of 50 institutions', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAEResearch', url: 'https://twitter.com/uaeresearch', verified: true },
    { platform: 'linkedin', handle: 'UAE Universities Alliance', url: 'https://linkedin.com/company/uae-universities', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Annual higher education graduates', '65,000+', 'Ministry of Education Statistics 2025', 1, undefined),
    createKeyFinding('Research publications (2025)', '8,400+ papers', 'Scopus UAE Analysis 2026', 1, undefined),
    createKeyFinding('International branch campuses', '9 campuses (NYU, MIT, Sorbonne, etc.)', 'KHDA Report 2026', 1, undefined),
    createKeyFinding('Khalifa University QS ranking', '177th globally', 'QS World University Rankings 2026', 1, undefined),
    createKeyFinding('Research citations per paper', '4.2 average', 'Web of Science UAE 2025', 2, 'YELLOW'),
    createKeyFinding('Industry research funding', 'AED 1.8 billion', 'UAE Science Office 2025', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(88, 'high', 'Core to UAE knowledge economy and Vision 2021/2030 diversification'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Ministry of Education UAE', 'https://www.moe.gov.ae', 1, '2026-04-15'),
    createSource('Khalifa University', 'https://www.ku.ac.ae', 1, '2026-04-10'),
    createSource('QS World University Rankings', 'https://www.topuniversities.com', 2, '2026-03-01'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// TRIBAL & FAMILY NETWORKS
// ============================================================================

export const tribalNetworksData: StakeholderIntelligence = {
  id: 'stakeholder-tribal',
  name: 'Tribal & Family Networks',
  nameAr: 'الشبكات القبلية والعائلية',
  type: 'civil-society',
  mandate: 'Traditional tribal confederations and prominent Emirati families forming the social backbone of UAE society. Includes the Na\'im, Bani Yas, Awamir, Dhafeer, and 100+ other tribes. Manages customary law (urf), marriage mediation, property disputes, and community welfare through the Supreme Council for Family Affairs.',
  metrics: {
    digitalReach: 1500000,
    engagement: 1.8,
    sentiment: createSentimentBreakdown(75, 12, 13),
    credibility: createCredibilityScore(1, 92, 40, '2026-04-20'),
    programs: [
      createStakeholderProgram('Tribal Census 2026', 'Complete genealogical registry of UAE nationals', 'active'),
      createStakeholderProgram('Family Court Division', 'Sharia-compliant dispute resolution', 'active'),
      createStakeholderProgram('Marriage Facilitation Fund', 'AED 50 million for wedding grants', 'active', 50000000),
      createStakeholderProgram('Traditional Crafts Preservation', '25 heritage artisan programs', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAETribalAffairs', url: 'https://twitter.com/uaetribal', verified: false },
  ],
  keyFindings: [
    createKeyFinding('Registered UAE national families', '180,000+ households', 'Federal Demographic Council 2026', 1, undefined),
    createKeyFinding('Registered tribal confederations', '42 major tribes', 'Ministry of Interior Tribal Registry', 1, undefined),
    createKeyFinding('Average family size (Emirati)', '6.8 members', 'Federal Statistics 2025', 1, undefined),
    createKeyFinding('Tribal land holdings', '35% of UAE territory (customary)', 'Land Ministry Report', 2, 'YELLOW'),
    createKeyFinding('Inter-tribal marriage rate', '28%', 'Social Affairs Ministry 2026', 2, undefined),
    createKeyFinding('Women heading tribal councils', '15% (up from 5% in 2020)', 'Gender Balance Council', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(95, 'critical', 'Foundation of Emirati identity and traditional authority structures'),
  alertLevel: 'GREEN',
  sources: [
    createSource('Supreme Council for Family Affairs', 'https://www.family.gov.ae', 1, '2026-04-18'),
    createSource('Federal Competitiveness & Statistics Centre', 'https://www.fcsc.gov.ae', 1, '2026-04-12'),
    createSource('Tribal Affairs Journal', '', 2, '2026-02-15'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// EMIRATI DIASPORA
// ============================================================================

export const diasporaData: StakeholderIntelligence = {
  id: 'stakeholder-diaspora',
  name: 'Emirati Diaspora',
  nameAr: 'الجالية الإماراتية في الخارج',
  type: 'international',
  mandate: 'UAE nationals residing abroad (estimated 150,000+) across 80+ countries. Maintains cultural ties through the Emirati Heritage Foundation, manages Emirati expatriate associations in GCC, Europe, and Americas. Facilitates remittance flows and maintains loyalty to UAE identity.',
  metrics: {
    digitalReach: 2100000,
    engagement: 2.4,
    sentiment: createSentimentBreakdown(78, 10, 12),
    credibility: createCredibilityScore(2, 74, 12, '2026-04-15'),
    programs: [
      createStakeholderProgram('Emirati Heritage Foundation', 'Cultural programs for 25,000+ diaspora members', 'active'),
      createStakeholderProgram('Diaspora Registry', 'Voluntary registration for nationals abroad', 'active'),
      createStakeholderProgram('Consular Services Network', '75 embassies providing diaspora support', 'active'),
      createStakeholderProgram('Virtual UAE School', 'Online Emirati curriculum for diaspora children', 'active'),
    ],
  },
  digitalPresence: [
    { platform: 'twitter-x', handle: '@UAEDiaspora', url: 'https://twitter.com/uaediaspora', verified: true },
    { platform: 'instagram', handle: '@emiratiheritage', url: 'https://instagram.com/emiratiheritage', verified: true },
  ],
  keyFindings: [
    createKeyFinding('Emirati diaspora estimate', '150,000+ nationals abroad', 'Ministry of Foreign Affairs 2026', 2, undefined),
    createKeyFinding('Top diaspora destinations', 'UK (18%), USA (15%), KSA (14%)', 'Consular Statistics 2025', 2, undefined),
    createKeyFinding('Diaspora remittances', '$2.1 billion annually', 'Central Bank UAE 2025', 2, undefined),
    createKeyFinding('Emirati students abroad', '8,500 registered', 'Ministry of Education Abroad Program', 2, undefined),
    createKeyFinding('Diaspora dual citizenship holders', '34% of nationals abroad', 'Embassy Data Analysis', 2, 'YELLOW'),
    createKeyFinding('Heritage foundation membership', '25,000 active members', 'Emirati Heritage Foundation 2026', 2, undefined),
  ],
  uaeRelevance: createUAERelevance(72, 'medium', 'Soft power ambassador network but potential exposure to hostile intelligence'),
  alertLevel: 'YELLOW',
  sources: [
    createSource('Emirati Heritage Foundation', 'https://www.emiratiheritage.ae', 1, '2026-04-10'),
    createSource('Ministry of Foreign Affairs', 'https://www.mofa.gov.ae', 1, '2026-04-15'),
    createSource('Consular Affairs Division', '', 2, '2026-03-20'),
  ],
  lastUpdated: '2026-04-25',
}

// ============================================================================
// STAKEHOLDER DATA ARRAY
// ============================================================================

export const stakeholderData: StakeholderIntelligence[] = [
  namaData,
  nmcDubaiData,
  moiData,
  mofaData,
  ministryCultureData,
  ministryEconomyData,
  gcoData,
  prAgencyData,
  intlRelationsData,
  laborUnionsData,
  womenOrganizationsData,
  youthOrganizationsData,
  academicsData,
  tribalNetworksData,
  diasporaData,
]

// ============================================================================
// STAKEHOLDER OVERVIEW
// ============================================================================

export const stakeholderOverview = {
  totalStakeholders: stakeholderData.length,
  stakeholders: stakeholderData,
  lastUpdated: '2026-04-29',
}

// ============================================================================
// EXPORTS
// ============================================================================

export default stakeholderData
