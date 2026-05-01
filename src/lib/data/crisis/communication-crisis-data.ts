/**
 * Communication Crisis Data - MD 4-6
 * Comprehensive data extracted from UAE Communication Crisis intelligence dossier
 *
 * Coverage: Misinformation, Deepfake Threats, Disinformation Campaigns,
 *           Information Suppression, Official Contradictions, Whistleblower Failure
 * Sources: 16 queries, 28+ pages, 200+ data points
 */

import type { CrisisEvent, KeyFinding, SourceReference, TierLevel, CredibilityScore, SentimentBreakdown } from '../../data-loader/types'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface MisinformationCase {
  falseClaim: string
  origin: string
  governmentResponse: string
  status: 'Debunked' | 'Re-debunked' | 'Under Investigation'
}

export interface GovernmentCounterMeasure {
  agency: string
  role: string
  keyActions: string
}

export interface LegalPenalty {
  law: string
  penalty: string
  source: string
}

export interface KeyQuote {
  quote: string
  source: string
  date: string
}

export interface DiscrepancyEntry {
  location: string
  officialClaim: string
  evidence: string
}

export interface DeepfakeIncident {
  incident: string
  target: string
  details: string
}

export interface CounterMeasure {
  measure: string
  description: string
}

export interface AlpServicesContract {
  company: string
  client: string
  contractStart: string
  contractValue: string
  geographicScope: string
  methods: string
  targets: string
  outcome: string
  document: string
}

export interface QatarHackDetail {
  dateOfHack: string
  target: string
  method: string
  falseContent: string
  advancePlanning: string
  usIntelligence: string
  crisisTrigger: string
}

export interface InfluenceMethod {
  method: string
  description: string
}

export interface PlatformTakedown {
  platform: string
  requests: string
  compliance: string
  period: string
}

export interface ArrestCase {
  category: string
  number: number | string
  details: string
}

export interface CitizenshipRevocation {
  case: string
  year: number | string
  details: string
}

export interface DdosStat {
  metric: string
  h1_2025: string | number
  h2_2025: string | number
  change: string
}

export interface DdosSector {
  sector: string
  incidents: number
}

export interface NotableCyberAttack {
  date: string
  actorGroup: string
  target: string
  details: string
}

export interface SudanICJDetail {
  caseName: string
  icjDecision: string
  vote: string
  legalReasoning: string
  sudanAllegation: string
  uaeResponse: string
}

export interface OfficialQuote {
  speaker: string
  quote: string
}

export interface TimelineEvent {
  date: string
  event: string
  category: string
}

export interface EntityOfficial {
  name: string
  role: string
  organization: string
}

export interface EntityInternational {
  name: string
  role: string
  organization: string
}

export interface EntityOrganization {
  name: string
  type: string
  notes: string
}

export interface KeyTerm {
  term: string
  definition: string
}

export interface SourceUrlEntry {
  id: number
  source: string
  url: string
  keyContent: string
}

export interface SourceTierEntry {
  tier: string
  type: string
  count: number
  examples: string
}

export interface CredibilityEntry {
  source: string
  credibility: string
  notes: string
}

export interface ThreatLevelEntry {
  threatType: string
  level: string
  trend: string
}

export interface QueryPatternEntry {
  id: number
  query: string
}

// ============================================================================
// DOCUMENT METADATA
// ============================================================================

export const communicationCrisisDocumentInfo = {
  title: 'UAE Communication Crisis - Single Source of Truth',
  version: '2.0 (Enriched)',
  dateExecuted: '2026-04-27',
  frameworkVersion: '1.0',
  queriesExecuted: 16,
  pagesFetched: '28+',
  enrichmentStatus: 'Complete',
}

// ============================================================================
// FOCUS AREAS
// ============================================================================

export const focusAreas: FocusArea[] = [
  { title: 'Misinformation spread about UAE', description: 'False claims and fake news targeting UAE spreading across digital platforms', severity: 'HIGH' },
  { title: 'Fake news targeting UAE', description: 'Deliberate fabrication of news stories to damage UAE reputation', severity: 'HIGH' },
  { title: 'Deepfake threats against UAE leaders/officials', description: 'AI-generated video/audio depicting officials making false statements', severity: 'CRITICAL' },
  { title: 'Disinformation campaigns targeting UAE', description: 'Coordinated campaigns to spread misleading information about UAE', severity: 'HIGH' },
  { title: 'Narrative attacks and counters', description: 'Hostile narratives requiring strategic response and counter-narratives', severity: 'MEDIUM' },
  { title: 'Government response failures', description: 'Instances where official responses were inadequate or poorly executed', severity: 'MEDIUM' },
  { title: 'Spokesperson gaffes', description: 'Communication mistakes by official spokespersons', severity: 'LOW' },
  { title: 'Communication failures', description: 'Breakdowns in government messaging and public communication', severity: 'MEDIUM' },
  { title: 'Mixed messages/contradictory messaging', description: 'Conflicting statements from different UAE entities', severity: 'MEDIUM' },
  { title: 'Official contradictions and denials', description: 'Statements that contradict earlier positions or evidence', severity: 'HIGH' },
  { title: 'Cover-ups and concealment', description: 'Allegations of information suppression or concealment', severity: 'HIGH' },
  { title: 'Leaks (embarrassing/damaging/classified)', description: 'Unauthorized disclosure of sensitive information', severity: 'CRITICAL' },
  { title: 'Whistleblower persecution', description: 'Retaliation against individuals exposing government actions', severity: 'HIGH' },
  { title: 'Social media removal/takedown pressure', description: 'Requests for content removal from digital platforms', severity: 'MEDIUM' },
  { title: 'DDoS attacks on government infrastructure', description: 'Distributed denial of service attacks disrupting digital services', severity: 'HIGH' },
  { title: 'Hacking of government/official systems', description: 'Unauthorized access to government digital infrastructure', severity: 'CRITICAL' },
]

interface FocusArea {
  title: string
  description: string
  severity: string
}

// ============================================================================
// QUERY PATTERNS
// ============================================================================

export const queryPatterns: QueryPatternEntry[] = [
  { id: 1, query: '"UAE" AND ("misinformation" AND ("spread" OR "viral" OR "انتشار"))' },
  { id: 2, query: '"UAE" AND ("fake news" AND ("about UAE" OR "targeting"))' },
  { id: 3, query: '"UAE" AND ("deepfake" AND ("leader" OR "official" OR "royal"))' },
  { id: 4, query: '"UAE" AND ("disinformation campaign" AND ("targeting" OR "against UAE"))' },
  { id: 5, query: '"UAE" AND ("narrative" AND ("attack" OR "counter"))' },
  { id: 6, query: '"UAE" AND ("government" AND ("response" AND ("slow" OR "inadequate")))' },
  { id: 7, query: '"UAE" AND ("spokesperson" AND ("gaffe" OR "mistake"))' },
  { id: 8, query: '"UAE" AND ("communication" AND ("failure" OR "breakdown"))' },
  { id: 9, query: '"UAE" AND ("mixed messages" OR "contradictory")' },
  { id: 10, query: '"UAE" AND ("official" AND ("contradiction" OR "denied"))' },
  { id: 11, query: '"UAE" AND ("cover-up" OR "concealment" OR "suppression")' },
  { id: 12, query: '"UAE" AND ("leak" AND ("embarrassing" OR "damaging" OR "classified"))' },
  { id: 13, query: '"UAE" AND ("whistleblower" AND ("punished" OR "arrested"))' },
  { id: 14, query: '"UAE" AND ("social media" AND ("removal" OR "takedown" OR "pressure"))' },
  { id: 15, query: '"UAE" AND ("DDoS" AND ("attack" OR "government"))' },
  { id: 16, query: '"UAE" AND ("hack" AND ("government" OR "official" OR "website"))' },
]

// ============================================================================
// SECTION 4.1: MISINFORMATION & FAKE NEWS ECOSYSTEM
// ============================================================================

export const governmentCounterMeasures: GovernmentCounterMeasure[] = [
  {
    agency: 'TDRA (Telecommunications and Digital Government Regulatory Authority)',
    role: 'Lead misinformation combat',
    keyActions: 'Warning campaigns, AI detection tools, public awareness',
  },
  {
    agency: 'UAE Cybersecurity Council',
    role: 'National coordination',
    keyActions: 'Prevention, data analysis, awareness campaigns',
  },
  {
    agency: 'Dubai Police',
    role: 'Local enforcement',
    keyActions: 'Public warnings, legal action against misinformation',
  },
  {
    agency: 'Abu Dhabi Police',
    role: 'Local enforcement',
    keyActions: 'Warning against filming incident sites',
  },
  {
    agency: 'National Media Authority',
    role: 'Media coordination',
    keyActions: 'Editor engagement, broadcast oversight',
  },
  {
    agency: 'Abu Dhabi Media Office',
    role: 'Official communications',
    keyActions: 'Trusted official channel',
  },
  {
    agency: 'Dubai Media Office',
    role: 'Official communications',
    keyActions: 'Trusted official channel',
  },
]

export const legalPenalties: LegalPenalty[] = [
  { law: 'UAE Cybercrime Law', penalty: 'Dh100,000-Dh200,000 fine + 1-2 years imprisonment', source: 'Dubai Police Advisory' },
  { law: 'Sharing content contradicting officials', penalty: '2+ years imprisonment + ~$55,000 (Dh200,000+) fines', source: 'Bellingcat Investigation' },
  { law: 'Storing/sharing illegal online content', penalty: 'Up to Dh10 million ($2.7M)', source: 'Freedom House 2023' },
  { law: 'Privacy violations', penalty: '500,000 dirhams ($136K)', source: 'Freedom House 2023' },
  { law: 'Causing "reputational harm" (foreigners)', penalty: 'Up to £200,000 fine + imprisonment', source: 'Yahoo News' },
]

export const misinformationCases: MisinformationCase[] = [
  { falseClaim: '"Explosions in Dubai"', origin: 'Accounts outside UAE', governmentResponse: 'Dubai Media Office debunked', status: 'Debunked' },
  { falseClaim: '"Severe shortage of goods"', origin: 'External accounts', governmentResponse: 'Official denial', status: 'Debunked' },
  { falseClaim: '"Life come to standstill"', origin: 'Misleading posts', governmentResponse: 'Official clarification', status: 'Debunked' },
  { falseClaim: '"Mass evacuation"', origin: 'Previously debunked', governmentResponse: 'Re-debunked', status: 'Re-debunked' },
  { falseClaim: '"Airports shut"', origin: 'Previously debunked', governmentResponse: 'Re-debunked', status: 'Re-debunked' },
  { falseClaim: '"Property market collapse"', origin: 'Previously debunked', governmentResponse: 'Re-debunked', status: 'Re-debunked' },
  { falseClaim: '"Investors fleeing"', origin: 'Previously debunked', governmentResponse: 'Re-debunked', status: 'Re-debunked' },
]

export const misinformationQuotes: KeyQuote[] = [
  { quote: 'Building trust in official information sources is one of the most effective ways to reduce the impact of misinformation.', source: 'TDRA/Gulf News', date: 'April 25, 2026' },
  { quote: 'What we share matters.', source: 'Dubai Police', date: 'April 1, 2026' },
  { quote: 'Misinformation and rumours spread fast. Stay informed. Stay with facts.', source: 'Government of Dubai Media Office', date: 'March 31, 2026' },
  { quote: 'Relying on unverified sources can cause unnecessary panic and may undermine the safety and stability of our community.', source: 'Dubai Police', date: 'April 1, 2026' },
  { quote: "In today's hybrid conflicts, the war on awareness can be as consequential as events unfolding on the battlefield.", source: 'Abdulla bin Mohammed bin Butti Al Hamed, Chairman National Media Authority', date: 'March 16, 2026' },
  { quote: 'Responsible media messaging can sometimes have a greater impact than the noise of events themselves.', source: 'Abdulla bin Mohammed bin Butti Al Hamed', date: 'March 16, 2026' },
]

export const iranConflictCasualties = {
  killed: 12,
  injured: 190,
  asOf: 'April 1, 2026',
}

export const iranStrikeDiscrepancies: DiscrepancyEntry[] = [
  { location: 'Fujairah Port', officialClaim: 'Fire from intercepted debris', evidence: 'Direct drone strike; 3 storage tanks destroyed' },
  { location: 'Jebel Ali Port', officialClaim: 'Fire from interception debris', evidence: 'Separate fires at military and fuel facilities 3km apart' },
  { location: 'Burj Al Arab', officialClaim: '"Limited" fire from shrapnel', evidence: '~30m fire across 8 floors' },
  { location: 'Fairmont The Palm', officialClaim: '"Incident occurred" (unconfirmed)', evidence: 'Direct hit confirmed by video' },
  { location: 'Dubai Airport', officialClaim: 'Suspension for "safety protocols"', evidence: 'Drone strike next to terminal' },
  { location: 'Warda Complex', officialClaim: '"Successful interception operations"', evidence: 'Direct hit with no interception' },
]

// ============================================================================
// SECTION 4.2: DEEPFAKE THREAT LANDSCAPE
// ============================================================================

export const deepfakeThreatAssessment = {
  threatLevel: "It's no longer seeing is believing",
  surgeTimeline: 'Past 2 years (driven by Generative AI)',
  deepfakeVoiceHeist: '$35 million stolen',
  source: 'Dr. Mohamed Al Kuwaiti, UAE Cybersecurity Council / Forbes 2021',
}

export const deepfakeIncidents: DeepfakeIncident[] = [
  {
    incident: 'Investment Scam Videos',
    target: 'Abdullah Bin Touq Al Marri (Economy Minister)',
    details: 'Videos falsely portraying him endorsing investment schemes',
  },
  {
    incident: 'Voice Clone Heist',
    target: 'UAE Company Director',
    details: 'Forged email + deepfake audio to authorize $35M transfers',
  },
]

export const deepfakeQuotes: KeyQuote[] = [
  { quote: 'We need the people to be our first line of defence', source: 'Dr. Mohamed Al Kuwaiti', date: 'Cybersecurity Council head on deepfake threats' },
  { quote: "It's no longer seeing is believing", source: 'Dr. Mohamed Al Kuwaiti', date: 'Rise of AI-generated deepfakes' },
  { quote: 'You need to build that culture. You need to understand what is what in cyberspace', source: 'Dr. Mohamed Al Kuwaiti', date: 'Cybersecurity awareness' },
  { quote: 'I never did that in my life and I never will', source: 'Abdullah Bin Touq Al Marri', date: 'Denouncing deepfake investment scam videos' },
  { quote: "It's a race, so we are using AI against AI", source: 'Enrique Caballero (Identt)', date: 'Deepfake detection' },
]

export const deepfakeCounterMeasures: CounterMeasure[] = [
  { measure: 'AI Detection Tools', description: '"AI against AI" approach for deepfake detection' },
  { measure: 'Government Education', description: 'AI introduced as subject in UAE government schools' },
  { measure: 'Public Awareness', description: 'People identified as "first line of defence"' },
]

// ============================================================================
// SECTION 4.3: DISINFORMATION CAMPAIGNS (UAE AS ACTOR)
// ============================================================================

export const alpServicesContract: AlpServicesContract = {
  company: 'Alp Services (Swiss firm)',
  client: 'UAE secret services',
  contractStart: '2017',
  contractValue: '€5.7 million',
  geographicScope: '18 European countries',
  methods: 'Smear campaigns, disinformation, fake accounts, dark PR, modified content',
  targets: 'Muslims, mosques, organizations, politicians, activists',
  outcome: '"Contributed to public distrust of Muslims and Islam"',
  document: 'Parliamentary question P-002379/2023 (July 31, 2023)',
}

export const qatarHackDetail: QatarHackDetail = {
  dateOfHack: 'May 23-24, 2017',
  target: "Qatar's official news agency website and Twitter account",
  method: 'False quotes attributed to Qatar\'s Emir Sheikh Tamim bin Hamad al-Thani',
  falseContent: 'Praising Iran as "Islamic power" and praising Hamas',
  advancePlanning: 'Senior UAE officials discussed planned hacks on May 23 (day before)',
  usIntelligence: 'Confirmed UAE involvement',
  crisisTrigger: 'Saudi Arabia, UAE, Egypt, Bahrain cut diplomatic ties on June 5, 2017',
}

export const influenceMethods: InfluenceMethod[] = [
  { method: 'Coordinated troll networks', description: '"Electronic swarms" - fake/coordinated accounts' },
  { method: 'Bot farms', description: 'Automated accounts spreading pro-UAE propaganda' },
  { method: 'AI-generated personas', description: 'Fictional identities for influence operations' },
  { method: 'Geolocation manipulation', description: 'Faking locations of content sources' },
  { method: 'Drone footage manipulation', description: 'Altering visual evidence' },
  { method: 'Platform takedown requests', description: 'Formal removal demands to social media companies' },
  { method: 'Internet shutdowns', description: 'Communication blackouts as war tools' },
]

export const middleEastInfluenceContext = [
  { conflictEvent: 'Qatar rift (2017)', actors: 'Saudi Arabia, UAE, Qatar', methods: '"First social media cold war"' },
  { conflictEvent: 'Libyan civil war', actors: 'Turkey, Saudi Arabia, UAE, Egypt', methods: 'Tactical influence operations' },
  { conflictEvent: 'Gaza wars (2021, 2023)', actors: 'Multiple', methods: 'Coordinated campaigns' },
  { conflictEvent: 'al-Ahli Hospital incident (Oct 2023)', actors: 'Multiple', methods: 'Narrative warfare' },
  { conflictEvent: '"Flour Massacre" (Feb 2024)', actors: 'Multiple', methods: 'Disinformation' },
]

export const disinformationKeyQuote: OfficialQuote = {
  speaker: 'UAE Ambassador to US Yousef al-Otaiba',
  quote: 'Funding, supporting, and enabling extremists from the Taliban to Hamas and Gaddafi',
}

// ============================================================================
// SECTION 4.4: INFORMATION SUPPRESSION MECHANISMS
// ============================================================================

export const informationSuppressionLaws = [
  { law: 'UAE Cybercrime Law', provision: 'Spreading false information affecting public safety/economy', penalty: 'Dh100,000-Dh200,000 + 1-2 years imprisonment' },
  { law: 'Citizenship Revocation', provision: 'Punishment of political dissent', penalty: 'Statelessness' },
  { law: 'Executive Council Code of Ethics', provision: 'Confidentiality during and after service', penalty: 'Legal action' },
  { law: 'Dubai Law', provision: 'Leaking classified documents', penalty: 'Criminal prosecution' },
]

export const socialMediaControls = [
  { platformService: 'WhatsApp voice calls', status: 'BLOCKED', details: 'N/A' },
  { platformService: 'Viber', status: 'BLOCKED', details: 'N/A' },
  { platformService: 'FaceTime', status: 'BLOCKED', details: 'N/A' },
  { platformService: 'Discord', status: 'BLOCKED', details: 'N/A' },
  { platformService: 'Microsoft Teams', status: 'Available', details: 'Since March 2023' },
  { platformService: 'Skype for Business', status: 'Available', details: 'Since March 2023' },
  { platformService: 'Zoom', status: 'Available', details: 'Since March 2023' },
  { platformService: 'Cisco Webex', status: 'Available', details: 'Since March 2023' },
  { platformService: 'Al Jazeera', status: 'BLOCKED', details: 'Remains blocked' },
  { platformService: 'LGBT+ websites', status: 'BLOCKED', details: '51+ websites' },
  { platformService: 'Human rights orgs', status: 'BLOCKED', details: 'Multiple' },
]

export const platformTakedowns: PlatformTakedown[] = [
  { platform: 'Facebook', requests: '902 items restricted', compliance: 'TDRA requests', period: 'Jan-June 2022' },
  { platform: 'Twitter/X', requests: '148 requests', compliance: '88.5%', period: 'Not specified' },
  { platform: 'Websites (auto-filter)', requests: '3,766 blocked', compliance: 'Q4 2022', period: 'N/A' },
]

export const arrestSuppressionCases: ArrestCase[] = [
  { category: 'Arrested for "misleading content"', number: '35+', details: 'Facing expedited trial' },
  { category: 'Abu Dhabi arrests for sharing videos', number: 109, details: 'Suspected of sharing "misleading videos online"' },
  { category: 'Foreign nationals charged (British)', number: 'At least 5', details: 'Documenting strikes' },
  { category: '60+ year old Londoner arrested', number: 1, details: 'Among 21 arrested for filming missiles' },
  { category: 'Total arrested', number: '21+', details: 'Various nationalities' },
]

export const citizenshipRevocationCases: CitizenshipRevocation[] = [
  { case: 'UAE7', year: 2011, details: 'First known citizenship stripping after petition by 133 Emiratis for democratic reforms' },
  { case: 'UAE94 Trial', year: 2013, details: '69 defendants convicted; many later had citizenship revoked' },
  { case: 'UAE84 Trial', year: 2024, details: 'At least 43 sentenced to life in prison' },
  { case: 'Family targeting', year: 'Ongoing', details: 'Children of prisoners had citizenship revoked' },
]

export const uae7Members = [
  'Ahmed al-Suwaidi',
  'Hasan and Hussein al-Jabri',
  'Ibrahim al-Marzooqi',
  'Mohammed al-Siddiq',
  'Shaheen al-Hosni',
  'Ali al-Hammadi',
]

// ============================================================================
// SECTION 4.5: CYBER ATTACKS ON UAE
// ============================================================================

export const ddosStats: DdosStat[] = [
  { metric: 'Total Incidents', h1_2025: '3,477', h2_2025: '10,303', change: '+196% (tripled)' },
  { metric: 'Average Duration', h1_2025: '27 minutes', h2_2025: '~12 hours', change: '+2,567%' },
  { metric: 'Max Attack Vectors', h1_2025: 8, h2_2025: 22, change: '+175%' },
  { metric: 'Botnet Attacks (July only)', h1_2025: 'N/A', h2_2025: '20,000+', change: 'N/A' },
]

export const ddosSectors: DdosSector[] = [
  { sector: 'Wired telecommunications carriers', incidents: 6368 },
  { sector: 'Other telecommunications providers', incidents: 945 },
  { sector: 'Computing infrastructure (data processing, web hosting, cloud)', incidents: 825 },
  { sector: 'Retail', incidents: 0 },
  { sector: 'Publishing', incidents: 0 },
  { sector: 'Merchant wholesalers', incidents: 0 },
]

export const regionalDdosContext = [
  { regionCountry: 'Europe, Middle East, Africa combined', attacks: '3.2 million attacks' },
  { regionCountry: 'Saudi Arabia', attacks: '270,179 attempted attacks' },
  { regionCountry: 'UAE', attacks: '3,477 attempted attacks' },
]

export const notableCyberAttacks: NotableCyberAttack[] = [
  { date: 'December 2023', actorGroup: 'Dark Storm Team', target: 'UAE government website', details: 'Took site offline via DDoS' },
  { date: 'July 2024', actorGroup: 'BlackMeta group', target: 'UAE bank', details: '6-day DDoS attack' },
  { date: 'September 2025', actorGroup: 'Unknown', target: 'Red Sea cables', details: 'Internet disruptions in UAE' },
  { date: 'December 2025', actorGroup: 'Unknown', target: 'UAE bank', details: '1.8 Tbps attack' },
  { date: 'December 2025', actorGroup: 'Unknown', target: 'UAE bank', details: '380 Gbps across 6 days' },
]

export const stateSponsoredThreat = {
  percentage: '71.4%',
  description: 'of all cyber threats targeting UAE are state-sponsored',
  threatTypes: 'Website defacement, data leaks, data breaches, initial access, ransomware, DDoS',
}

export const cyberExpertQuote: KeyQuote = {
  quote: 'When average attack duration moves from under half an hour to more than 12 hours, early detection becomes central to maintaining service continuity.',
  source: 'Gaurav Mohan, VP, Netscout',
  date: '',
}

// ============================================================================
// SECTION 4.6: OFFICIAL CONTRADICTIONS & DENIALS
// ============================================================================

export const sudanICJCase: SudanICJDetail = {
  caseName: 'Sudan vs UAE (complicity in genocide)',
  icjDecision: 'Dismissed (May 5, 2025)',
  vote: '14-2',
  legalReasoning: 'Court lacked jurisdiction due to UAE\'s reservation to Article IX of Genocide Convention (2005 accession)',
  sudanAllegation: 'UAE enabled genocide against Masalit community in Darfur via RSF support',
  uaeResponse: 'Called case "cynical and baseless PR stunt"',
}

export const sudanICJQuote: OfficialQuote = {
  speaker: 'Reem Ketait (UAE foreign ministry)',
  quote: 'This decision is a clear and decisive affirmation that this case was utterly baseless.',
}

export const sudanICJLegalNote = 'Upholding reservations is like allowing a perpetrator of genocide to evade legal accountability. — Yonah Diamond (Raoul Wallenberg Centre)'

export const sudanUNHRCQuote: OfficialQuote = {
  speaker: 'Shahd Matar, Deputy Permanent Representative of UAE to UN (Geneva)',
  quote: 'Exercising its right to respond to baseless and unfounded allegations made earlier today by a party to the conflict in Sudan whose hands are stained with the blood of its own people — This is merely the latest failed attempt to lecture this chamber on the rule of law',
}

export const gazaAdministrationDenial = {
  report: 'Israeli media report about UAE taking over Gaza civil administration',
  uaeResponse: '"Categorically false and unfounded"',
}

// ============================================================================
// SECTION 4.7: WHISTLEBLOWER PROTECTION FAILURE
// ============================================================================

export const andreGauthierCase = {
  name: 'André Gauthier, 65, Canadian citizen',
  discovery: '$30 million embezzlement at Gold AE (royal-connected gold brokerage)',
  reportedTo: 'Sheikh Sultan bin Sultan Khalifa al-Nahyan (Abu Dhabi royal)',
  arrest: 'December 2015, held without charge for over 1 year',
  currentStatus: 'Detained in Muscat, facing extradition to UAE',
  outcome: 'Both parents died during his prolonged ordeal',
  risk: 'Life sentence if returned at his age',
}

export const andreGauthierTimeline: TimelineEvent[] = [
  { date: '2013', event: 'Gauthier becomes minority shareholder in Gold AE', category: 'Whistleblower' },
  { date: 'December 2015', event: 'Detained without charge', category: 'Whistleblower' },
  { date: '2016+', event: 'Held over 1 year without charge', category: 'Whistleblower' },
  { date: 'Post-release', event: 'Passport retained, movement restricted', category: 'Whistleblower' },
  { date: 'Later', event: 'Fled to Oman', category: 'Whistleblower' },
  { date: 'Current', event: 'Arrested at Muscat airport, facing extradition', category: 'Whistleblower' },
]

export const andreGauthierQuotes: OfficialQuote[] = [
  { speaker: 'André Gauthier', quote: 'Tell your mother and your sister that I love them... I\'d rather die than go back to jail in Dubai.' },
  { speaker: 'Radha Stirling (Detained in Dubai)', quote: 'Andre Gauthier was the man who discovered the fraud being perpetrated by the management of Gold AE, without him, Gold AE\'s clients would have continued to be scammed.' },
  { speaker: 'Radha Stirling', quote: 'Not only is Andre innocent, he is a victim and was instrumental in exposing the crime.' },
  { speaker: 'Richard Martel (MP)', quote: 'Mr. Gauthier is from my riding. I have been in constant contact with the family since they have informed us of the case. It is terrible what they are going through.' },
]

// ============================================================================
// SOURCE URLS
// ============================================================================

export const sourceUrls: SourceUrlEntry[] = [
  { id: 1, source: 'Gulf News', url: 'https://gulfnews.com/uae/how-the-uae-is-tackling-digital-misinformation-and-online-smear-campaigns-1.500519024', keyContent: 'TDRA leads misinformation combat; UAE Cybersecurity Council coordinates; "electronic swarms" make control difficult; AI tools detect misleading content; legal penalties for spreading false info' },
  { id: 2, source: 'Gulf News', url: 'https://gulfnews.com/uae/dubai-police-warn-against-sharing-unverified-news-and-misinformation-online-1.500492838', keyContent: 'Dubai Police warn public; Dh100,000 fines for spreading fake news; reposting rumors face legal accountability; "What we share matters"' },
  { id: 3, source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/fake-dubai-claims-about-explosions-shortages-come-from-outside-uae', keyContent: 'False claims about Dubai explosions debunked; posts from outside UAE; Abu Dhabi Police caution against filming incident sites' },
  { id: 4, source: 'Times of India', url: 'https://timesofindia.indiatimes.com/world/middle-east/uae-crackdown-25-arrested-for-spreading-misleading-content-and-glorifying-military-aggression/articleshow/129585145.cms', keyContent: '25 arrested for spreading misleading content' },
  { id: 5, source: 'The National', url: 'https://www.thenationalnews.com/news/uae/2025/10/14/seeing-isnt-believing-anymore-uae-cybersecurity-chief-on-rising-threat-of-ai-deepfakes/', keyContent: 'Dr. Mohamed Al Kuwaiti quotes; 3.2M DDoS attacks H1 2025; Saudi Arabia 270,179 attacks; UAE 3,477 attacks with longest DDoS duration' },
  { id: 6, source: 'Times of India', url: 'https://timesofindia.indiatimes.com/world/middle-east/i-never-did-that-in-my-life-and-i-never-will-uae-economy-minister-warns-of-deepfake-investment-scam-videos/articleshow/124547784.cms', keyContent: 'Economy Minister denies deepfake investment scam videos' },
  { id: 7, source: 'European Parliament', url: 'https://www.europarl.europa.eu/doceo/document/P-9-2023-002379_EN.html', keyContent: 'Alp Services contracted by UAE secret services from 2017; €5.7M; 18 European countries targeted; methods: smear campaigns, fake accounts, dark PR' },
  { id: 8, source: 'CSIS', url: 'https://www.csis.org/analysis/alessandro-accorsi-disinformation-warfare-middle-east', keyContent: 'Gulf countries use influence operations; Qatar rift "first social media cold war"; methods include troll networks, bot farms, AI personas' },
  { id: 9, source: 'Bellingcat', url: 'https://www.bellingcat.com/news/2026/04/02/war-uae-iran-infuencer-dubai-conflict-drone-successful-strike-intercept-fire/', keyContent: 'Full discrepancy documentation; 35+ arrested; Fujairah/Jebel Ali/Burj Al Arab/Dubai Airport cases; 12 killed, 190 injured' },
  { id: 10, source: 'Time', url: 'https://time.com/article/2026/04/01/dubai-uae-iran-war-crackdown-safety/', keyContent: 'Attorney General justification for crackdown' },
  { id: 11, source: 'Gulf News', url: 'https://gulfnews.com/opinion/op-eds/uae-media-on-the-frontline-defending-truth-in-times-of-crisis-1.500476286', keyContent: 'National Media Authority quotes; media as "battalion in trenches of awareness"; hybrid conflicts quote' },
  { id: 12, source: 'GCAA', url: 'https://www.gcaa.gov.ae/en/departments/airaccidentinvestigation/Lists/Incidents%20Investigation%20Reports/Attachments/163/AIFN_0004_2023%20-%20Final%20Summary%20Report.pdf', keyContent: 'Radio communication emergency at Dubai airport (March 10, 2023)' },
  { id: 13, source: 'Gulf News', url: 'https://gulfnews.com/uae/government/uae-refutes-false-accusations-made-before-human-rights-council-by-warring-party-in-sudan-1.500455542', keyContent: 'Shahd Matar refutes Sudan allegations at UN Human Rights Council' },
  { id: 14, source: 'Middle East Eye', url: 'https://www.middleeasteye.net/news/icj-dismisses-sudans-case-accusing-uae-complicity-genocide', keyContent: 'ICJ dismissed Sudan case 14-2; lack of jurisdiction due to Article IX reservation' },
  { id: 15, source: 'Middle East Eye', url: 'https://www.middleeasteye.net/opinion/how-uae-crushes-dissent-arbitrarily-revoking-citizenship', keyContent: 'UAE7 case 2011; citizenship revocation as tool; UAE94/UAE84 trials' },
  { id: 16, source: 'Yahoo News', url: 'https://uk.news.yahoo.com/fleeing-tourists-accuse-dubai-government-193319405.html', keyContent: 'British tourists fleeing; 168,000 Brits registered in region; 21 arrested for filming missiles; £200,000 fines' },
  { id: 17, source: 'The Cradle', url: 'https://thecradle.co/article-view/18254/classified-intelligence-document-details-uae-influence-on-us-politics-report', keyContent: 'Classified intelligence on UAE influence on US politics' },
  { id: 18, source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Contents_of_the_United_States_diplomatic_cables_leak_(United_Arab_Emirates)', keyContent: 'MBZ quotes on Iran, Pakistan; terror financing; US base access' },
  { id: 19, source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/government/dubai-officials-leak-classified-documents-on-social-media-identified', keyContent: 'Dubai officials leaking classified docs identified; legal consequences' },
  { id: 20, source: 'Detained in Dubai', url: 'https://www.detainedindubai.org/post/breaking-canadian-whistleblower-faces-extradition-for-exposing-uae-financial-scandal', keyContent: 'André Gauthier $30M fraud discovery; extradition threat; timeline' },
  { id: 21, source: 'Freedom House', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-net/2023', keyContent: 'Score 30/100; 9.38M users; blocked VoIP/platforms; 3,766 websites blocked; influencer licenses required' },
  { id: 22, source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/business/tech/uae-ddos-attacks-triple-in-h2-2025-as-campaigns-grow-longer-and-more-complex', keyContent: 'DDoS tripled; 10,303 attacks H2; 12-hour duration; 22 vectors' },
  { id: 23, source: 'Dark Reading', url: 'https://www.darkreading.com/cyberattacks-data-breaches/pro-palestinian-actor-levels-six-day-ddos-on-uae-bank', keyContent: 'BlackMeta 6-day attack on UAE bank' },
  { id: 24, source: 'Middle East Eye', url: 'https://www.middleeasteye.net/news/uae-behind-fake-news-cyber-attack-qatar-says-us-report', keyContent: 'UAE behind Qatar hack; planted fake news precipitating Gulf crisis' },
  { id: 25, source: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2017/7/17/uae-arranged-hacking-of-qatari-media-washington-post', keyContent: 'UAE arranged hacking May 23-24, 2017; false quotes from Emir; US intelligence confirmation' },
]

// ============================================================================
// COMPREHENSIVE STATISTICS
// ============================================================================

export const internetFreedomStats = {
  freedomHouseScore: '30/100 ("Not Free")',
  internetUsers: '9.38 million',
  internetPenetration: '99%',
  mobilePenetration: '200.9%',
  coverage5G: '94% of population',
  mobileSpeedsDown: '181.79 Mbps',
  mobileSpeedsUp: '23.09 Mbps',
  broadbandSpeedsDown: '220.61 Mbps',
  broadbandSpeedsUp: '99.48 Mbps',
}

// ============================================================================
// ENTITY REGISTRY
// ============================================================================

export const entityRegistry: EntityOfficial[] = [
  { name: 'Dr. Mohamed Al Kuwaiti', role: 'Head', organization: 'UAE Cybersecurity Council' },
  { name: 'Abdullah Bin Touq Al Marri', role: 'Economy Minister', organization: 'UAE Government' },
  { name: 'Anwar Gargash', role: 'Diplomatic Adviser', organization: 'UAE President' },
  { name: 'Lana Zusseibeh', role: 'Assistant Foreign Minister', organization: 'UAE Government' },
  { name: 'Shahd Matar', role: 'Deputy Permanent Representative', organization: 'UAE Mission to UN (Geneva)' },
  { name: 'Hamad Saif Al Shamsi', role: 'Attorney General', organization: 'UAE' },
  { name: 'Yousef al-Otaiba', role: 'Ambassador to US', organization: 'UAE' },
  { name: 'Mohammed bin Zayed (MBZ)', role: 'President', organization: 'UAE' },
  { name: 'Abdulla bin Mohammed bin Butti Al Hamed', role: 'Chairman', organization: 'National Media Authority' },
  { name: 'Reem Ketait', role: 'Official', organization: 'UAE Foreign Ministry' },
  { name: 'Shuja Pasha', role: 'DG ISI (Pakistan)', organization: 'Government of Pakistan' },
]

export const internationalOfficials: EntityInternational[] = [
  { name: 'Sophia in \'t Veld', role: 'MEP', organization: 'European Parliament' },
  { name: 'Richard Olson', role: 'Ambassador', organization: 'US (mentioned in cables)' },
  { name: 'Yuji Iwasawa', role: 'President', organization: 'ICJ' },
  { name: 'Rex Tillerson', role: 'Secretary of State', organization: 'US (2017)' },
]

export const organizations: EntityOrganization[] = [
  { name: 'TDRA', type: 'Government', notes: 'Telecommunications and Digital Government Regulatory Authority' },
  { name: 'UAE Cybersecurity Council', type: 'Government', notes: 'National cyber coordination' },
  { name: 'National Media Authority', type: 'Government', notes: 'Media oversight' },
  { name: 'Alp Services', type: 'Private', notes: 'Swiss disinformation firm' },
  { name: 'Gold AE', type: 'Private', notes: 'Gold brokerage with royal backing' },
  { name: 'Detained in Dubai', type: 'NGO', notes: 'Human rights organization' },
  { name: 'Freedom House', type: 'NGO', notes: 'Internet freedom monitoring' },
  { name: 'CSIS', type: 'Think Tank', notes: 'Center for Strategic and International Studies' },
  { name: 'Bellingcat', type: 'Investigative', notes: 'Open-source investigation group' },
]

export const keyTerms: KeyTerm[] = [
  { term: 'Electronic swarms', definition: 'Fake/coordinated accounts making information control difficult' },
  { term: 'Dark PR', definition: 'Covert reputation management/disinformation tactics' },
  { term: 'Bot farms', definition: 'Networks of automated fake accounts' },
  { term: 'Deepfake', definition: 'AI-generated fake video/audio' },
  { term: 'DDoS', definition: 'Distributed Denial of Service attack' },
  { term: 'ICJ', definition: 'International Court of Justice' },
  { term: 'RSF', definition: 'Rapid Support Forces (Sudan)' },
]

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export const sentimentByCategory = [
  { category: 'Misinformation (targeting UAE)', overallSentiment: 'Negative', notes: 'Documents harm to UAE\'s reputation and public safety risks' },
  { category: 'Deepfake threats', overallSentiment: 'Negative', notes: 'Highlights vulnerability of individuals and institutions' },
  { category: 'Disinformation (UAE as actor)', overallSentiment: 'Negative', notes: 'Documents unethical/illegal behavior by UAE' },
  { category: 'Information suppression', overallSentiment: 'Negative', notes: 'Documents human rights concerns, stifling of free expression' },
  { category: 'Cyber attacks (on UAE)', overallSentiment: 'Negative', notes: 'Documents hostile actions against UAE infrastructure' },
  { category: 'Official contradictions', overallSentiment: 'Mixed', notes: 'UAE denials vs. documented evidence; legal victories for UAE at ICJ' },
  { category: 'Whistleblower persecution', overallSentiment: 'Negative', notes: 'Documents injustice against André Gauthier' },
]

export const sentimentBySourceTier = [
  { tier: 'T0 Government (UAE)', avgSentiment: 'Positive/Neutral', examples: 'Official UAE statements, denials' },
  { tier: 'T1 Mainstream Media', avgSentiment: 'Mixed', examples: 'Factual reporting with some critical coverage' },
  { tier: 'T2 Specialized/Think Tanks', avgSentiment: 'Neutral/Critical', examples: 'CSIS, Bellingcat documented analysis' },
  { tier: 'T3 Social Media', avgSentiment: 'Mixed', examples: 'User posts, some pro-UAE, some critical' },
  { tier: 'T4 Human Rights NGOs', avgSentiment: 'Negative', examples: 'Detained in Dubai, Middle East Eye critical' },
]

// ============================================================================
// SOURCE CREDIBILITY ASSESSMENT
// ============================================================================

export const sourceTierBreakdown: SourceTierEntry[] = [
  { tier: 'T0', type: 'Government (UAE)', count: 8, examples: 'TDRA, Dubai Police, UAE Cybersecurity Council, UAE Mission to UN' },
  { tier: 'T1', type: 'Mainstream Media', count: 10, examples: 'Gulf News, Khaleej Times, The National, Al Jazeera, BBC' },
  { tier: 'T2', type: 'Specialized/Think Tanks', count: 5, examples: 'CSIS, Bellingcat, European Parliament, ICJ' },
  { tier: 'T3', type: 'Social Media', count: 4, examples: 'Reddit r/UAE, Instagram, YouTube, TikTok' },
  { tier: 'T4', type: 'Human Rights NGOs', count: 3, examples: 'Detained in Dubai, Freedom House, Middle East Eye' },
]

export const credibilityBySource: CredibilityEntry[] = [
  { source: 'ICJ Rulings', credibility: 'Very High', notes: 'Official international court' },
  { source: 'European Parliament Docs', credibility: 'Very High', notes: 'Official parliamentary record' },
  { source: 'Government Statements', credibility: 'High', notes: 'Official but potentially biased' },
  { source: 'Bellingcat Investigation', credibility: 'High', notes: 'Rigorous open-source methodology' },
  { source: 'CSIS Analysis', credibility: 'High', notes: 'Reputable think tank' },
  { source: 'Freedom House', credibility: 'Medium-High', notes: 'Established methodology, some bias concerns' },
  { source: 'Mainstream Media', credibility: 'Medium-High', notes: 'Professional standards' },
  { source: 'Social Media', credibility: 'Medium-Low', notes: 'Unverified, variable' },
  { source: 'Detained in Dubai', credibility: 'Medium', notes: 'Advocacy organization' },
]

// ============================================================================
// UAE RELEVANCE / THREAT ASSESSMENT
// ============================================================================

export const uaeRelevanceScores = [
  { category: 'Misinformation spread', relevance: '5/5', rationale: 'Directly affects UAE\'s domestic stability and international image' },
  { category: 'Deepfake threats', relevance: '5/5', rationale: 'Targets UAE leaders and citizens; financial fraud impact' },
  { category: 'Disinformation (UAE as actor)', relevance: '5/5', rationale: 'Documents UAE\'s role in foreign influence operations' },
  { category: 'Information suppression', relevance: '5/5', rationale: 'Documents human rights practices under international scrutiny' },
  { category: 'Cyber attacks (on UAE)', relevance: '5/5', rationale: 'Direct threat to national security infrastructure' },
  { category: 'Official contradictions', relevance: '4/5', rationale: 'Affects UAE\'s credibility in international forums' },
  { category: 'Whistleblower protection', relevance: '3/5', rationale: 'Reflects rule of law concerns' },
  { category: 'Leaks/Classified docs', relevance: '4/5', rationale: 'Reveals sensitive UAE diplomatic positions' },
]

export const threatLevelAssessment: ThreatLevelEntry[] = [
  { threatType: 'External misinformation', level: 'HIGH', trend: 'Increasing during crises' },
  { threatType: 'Internal dissent suppression', level: 'HIGH', trend: 'Documented human rights concerns' },
  { threatType: 'Cyber attacks', level: 'HIGH', trend: 'Tripling, 71.4% state-sponsored' },
  { threatType: 'Deepfake fraud', level: 'MEDIUM-HIGH', trend: 'Rising with AI adoption' },
  { threatType: 'Disinformation (as actor)', level: 'MEDIUM', trend: 'Documented but historical (2017)' },
  { threatType: 'International legal challenges', level: 'MEDIUM', trend: 'ICJ case dismissed; ongoing scrutiny' },
]

// ============================================================================
// VERIFICATION STATUS
// ============================================================================

export const verificationStatus = {
  queriesExecuted: true,
  pagesFetched: true,
  dataExtracted: true,
  sourceUrls: true,
  noFabrication: true,
  partialUrls: 'Some URLs returned errors (403, 404) - data from alternative sources',
  crossReferenced: true,
}

// ============================================================================
// KEY CONTACTS / EXTERNAL CONTACTS
// ============================================================================

export const externalContacts = [
  { name: 'Sophia in \'t Veld', role: 'MEP', organization: 'European Parliament' },
  { name: 'Radha Stirling', role: 'CEO', organization: 'Detained in Dubai' },
  { name: 'Jonathan Dagher', role: 'Representative', organization: 'Reporters Without Borders' },
  { name: 'Gaurav Mohan', role: 'VP', organization: 'Netscout' },
  { name: 'Enrique Caballero', role: 'Expert', organization: 'Identt' },
  { name: 'André Gauthier', role: 'Whistleblower', organization: 'Canadian citizen' },
]

// ============================================================================
// COMPREHENSIVE TIMELINE
// ============================================================================

export const keyEventsTimeline: TimelineEvent[] = [
  { date: 'March 2011', event: 'UAE7 citizenship revocation', category: 'Cover-up/Suppression' },
  { date: '2011', event: 'Petition by 133 Emiratis for democratic reforms', category: 'Trigger event' },
  { date: '2013', event: 'UAE94 trial (69 defendants)', category: 'Cover-up/Suppression' },
  { date: 'May 23-24, 2017', event: 'Qatar hacking incident', category: 'Disinformation (UAE as actor)' },
  { date: 'June 5, 2017', event: 'Gulf crisis begins', category: 'Disinformation (UAE as actor)' },
  { date: '2021', event: 'Deepfake voice heist ($35M)', category: 'Deepfake threats' },
  { date: 'February 2021', event: 'Dubai officials leak classified docs', category: 'Leaks' },
  { date: 'April 2023', event: 'Purported US intel leaks (UAE-Russia)', category: 'Leaks' },
  { date: '2024', event: 'UAE84 trial (43+ sentenced)', category: 'Cover-up/Suppression' },
  { date: 'May 5, 2025', event: 'ICJ dismisses Sudan case', category: 'Official contradictions' },
  { date: 'September 2025', event: 'Red Sea cable cuts', category: 'Cyber attacks' },
  { date: 'October 2025', event: 'Deepfake minister warning', category: 'Deepfake threats' },
  { date: 'November 2025', event: 'Anwar Gargash Sudan "mistake"', category: 'Spokesperson gaffe' },
  { date: 'December 2025', event: 'Bank attacks (1.8 Tbps, 380 Gbps)', category: 'Cyber attacks' },
  { date: 'March 2026', event: 'Iran strikes on UAE', category: 'Crisis event' },
  { date: 'March 2026', event: 'Misinformation surge', category: 'Misinformation' },
  { date: 'March 10, 2026', event: 'Reddit "conflicting news"', category: 'Mixed messages' },
  { date: 'March 24, 2026', event: 'DDoS statistics (tripled)', category: 'Cyber attacks' },
  { date: 'April 1, 2026', event: 'Time article on crackdown', category: 'Suppression' },
  { date: 'April 2, 2026', event: 'Bellingcat investigation', category: 'Suppression' },
  { date: 'April 7, 2026', event: 'Reddit discussion', category: 'Misinformation' },
  { date: 'April 25, 2026', event: 'TDRA/Gulf News article', category: 'Misinformation' },
]

// ============================================================================
// METRICS FOR DASHBOARD
// ============================================================================

export const communicationCrisisMetrics = {
  riskLevel: 'HIGH',
  stateSponsoredThreats: '71.4%',
  ddosIncrease: '+196%',
  misinformationArrests: '35+',
  deepfakeVoiceHeist: '$35M',
  stateSponsoredThreat: '71.4% of cyber threats',
  legalPenaltyMin: 'Dh100,000',
  legalPenaltyMax: 'Dh10 million',
  imprisonmentMax: '2 years',
  freedomHouseScore: '30/100',
  internetUsers: '9.38M',
  blockedPlatforms: 4,
  alpServicesContract: '€5.7M',
  qatarHackYear: 2017,
}

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const communicationCrisisData = {
  documentInfo: communicationCrisisDocumentInfo,
  focusAreas,
  queryPatterns,
  metrics: communicationCrisisMetrics,
  // Section 4.1
  governmentCounterMeasures,
  legalPenalties,
  misinformationCases,
  misinformationQuotes,
  iranConflictCasualties,
  iranStrikeDiscrepancies,
  // Section 4.2
  deepfakeThreatAssessment,
  deepfakeIncidents,
  deepfakeQuotes,
  deepfakeCounterMeasures,
  // Section 4.3
  alpServicesContract,
  qatarHackDetail,
  influenceMethods,
  middleEastInfluenceContext,
  disinformationKeyQuote,
  // Section 4.4
  informationSuppressionLaws,
  socialMediaControls,
  platformTakedowns,
  arrestSuppressionCases,
  citizenshipRevocationCases,
  uae7Members,
  // Section 4.5
  ddosStats,
  ddosSectors,
  regionalDdosContext,
  notableCyberAttacks,
  stateSponsoredThreat,
  cyberExpertQuote,
  // Section 4.6
  sudanICJCase,
  sudanICJQuote,
  sudanICJLegalNote,
  sudanUNHRCQuote,
  gazaAdministrationDenial,
  // Section 4.7
  andreGauthierCase,
  andreGauthierTimeline,
  andreGauthierQuotes,
  // Sources
  sourceUrls,
  // Stats
  internetFreedomStats,
  // Entities
  entityRegistry,
  internationalOfficials,
  organizations,
  keyTerms,
  // Sentiment
  sentimentByCategory,
  sentimentBySourceTier,
  // Credibility
  sourceTierBreakdown,
  credibilityBySource,
  // Relevance
  uaeRelevanceScores,
  threatLevelAssessment,
  // Verification
  verificationStatus,
  // Contacts
  externalContacts,
  // Timeline
  keyEventsTimeline,
}
