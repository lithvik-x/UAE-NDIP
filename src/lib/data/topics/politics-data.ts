/**
 * Politics & Governance - Complete MD Data Extraction
 * File: 2-1-politics-governance-results.md
 * All 22 sections converted to TypeScript interfaces and data structures
 * UAE National Media Intelligence Platform
 */

'use client'

// ============================================================================
// SECTION 1: FEDERAL GOVERNMENT STRUCTURE
// ============================================================================

export interface GovernmentAttribute {
  attribute: string
  value: string
}

export interface Emirate {
  name: string
  arabicName: string
  seatDistribution: number
  notes: string
}

export interface ThreeBranches {
  branch: string
  authority: string
  keyBodies: string
}

export interface FederalSupremeCouncil {
  role: string
  membership: string
  vetoPower: string
  functions: string
  quorum: string
}

export interface ExecutiveLeader {
  position: string
  holder: string
  since: string
}

export interface ConstitutionalArticle {
  article: string
  provision: string
}

export interface FederalGovernmentStructure {
  overview: {
    officialName: string
    governmentType: string
    establishmentDate: string
    constitution: string
    numberOfEmirates: number
    headquarters: string
  }
  emirates: Emirate[]
  threeBranches: ThreeBranches[]
  federalSupremeCouncil: FederalSupremeCouncil
  executiveLeadership: ExecutiveLeader[]
  cabinet: {
    totalMinistries: number
    head: string
    structure: string
    changes2025: string
  }
  constitutionalArticles: ConstitutionalArticle[]
}

export const federalGovernmentStructure: FederalGovernmentStructure = {
  overview: {
    officialName: 'United Arab Emirates (UAE)',
    governmentType: 'Constitutional Federation / Federal Presidential Elective Semi-Constitutional Monarchy',
    establishmentDate: 'December 2, 1971',
    constitution: '152 articles establishing federation foundations and citizen rights',
    numberOfEmirates: 7,
    headquarters: 'Qasr Al Watan, Abu Dhabi'
  },
  emirates: [
    { name: 'Abu Dhabi', arabicName: 'أبوظبي', seatDistribution: 8, notes: 'Capital; Ruler is UAE President' },
    { name: 'Dubai', arabicName: 'دبي', seatDistribution: 8, notes: 'Largest population; Ruler is VP/PM' },
    { name: 'Sharjah', arabicName: 'الشارقة', seatDistribution: 6, notes: 'Third largest emirate' },
    { name: 'Ras Al Khaimah', arabicName: 'رأس الخيمة', seatDistribution: 6, notes: 'Joined federation February 1972' },
    { name: 'Ajman', arabicName: 'عجمان', seatDistribution: 4, notes: 'Smallest emirate by area' },
    { name: 'Umm Al Quwain', arabicName: 'أم القيوين', seatDistribution: 4, notes: 'Least populated' },
    { name: 'Fujairah', arabicName: 'الفجيرة', seatDistribution: 4, notes: 'Only emirate on Gulf of Oman' }
  ],
  threeBranches: [
    { branch: 'Legislative', authority: 'Federal Supreme Council + FNC', keyBodies: 'Federal Supreme Council (executive/legislative); FNC (advisory)' },
    { branch: 'Executive', authority: 'President, Vice Presidents, Cabinet', keyBodies: 'Supreme Council, Council of Ministers' },
    { branch: 'Judicial', authority: 'Federal Courts, Emirates Courts', keyBodies: 'Federal Supreme Court, Emirates courts' }
  ],
  federalSupremeCouncil: {
    role: 'Highest legislative and executive federal authority',
    membership: 'All 7 emirate rulers',
    vetoPower: 'Abu Dhabi and Dubai hold exclusive veto rights',
    functions: 'Elect President/Vice Presidents (5-year terms); Approve federal laws',
    quorum: '5 of 7 rulers required'
  },
  executiveLeadership: [
    { position: 'President', holder: 'Sheikh Mohamed bin Zayed Al Nahyan', since: 'May 14, 2022' },
    { position: 'Vice President #1', holder: 'Mohammed bin Rashid Al Maktoum', since: '1971' },
    { position: 'Vice President #2', holder: 'Mansour bin Zayed Al Nahyan', since: '2011' },
    { position: 'Prime Minister', holder: 'Mohammed bin Rashid Al Maktoum', since: '2006' },
    { position: 'Deputy Prime Minister', holder: 'Sheikh Abdullah bin Zayed Al Nahyan', since: '2025' }
  ],
  cabinet: {
    totalMinistries: 52,
    head: 'Prime Minister (Sheikh Mohammed bin Rashid Al Maktoum)',
    structure: 'Council of Ministers interprets federal law, issues resolutions',
    changes2025: 'Ministry of Foreign Trade established; Ministry of Economy renamed Ministry of Economy and Tourism'
  },
  constitutionalArticles: [
    { article: 'Article 120', provision: 'Grants federal government its mandate and jurisdictions' },
    { article: 'Article 180 (Penal Code)', provision: '"Founding, organizing, or operating a group that aims to overthrow the country\'s political system"' },
    { article: 'Article 152', provision: 'Establishes foundations of federation and citizen rights' }
  ]
}

// ============================================================================
// SECTION 2: PRESIDENTIAL LEADERSHIP - MBZ
// ============================================================================

export interface MBZPersonalDetails {
  fullName: string
  born: string
  birthplace: string
  father: string
  mother: string
  spouse: string
  children: string
}

export interface MBZEducation {
  institution: string
  year: string
  details: string
}

export interface MBZMilitaryCareer {
  year: string
  position: string
}

export interface MBZPoliticalEvent {
  date: string
  positionEvent: string
}

export interface MBZCurrentPosition {
  position: string
  since: string
}

export interface MBZForeignPolicy {
  position: string
  details: string
}

export interface MBZPhilanthropy {
  initiative: string
  amount: string
}

export interface MBZHonor {
  honor: string
  country: string
  year: string
}

export interface PresidentialLeadership {
  personalDetails: MBZPersonalDetails
  education: MBZEducation[]
  militaryCareer: MBZMilitaryCareer[]
  politicalTimeline: MBZPoliticalEvent[]
  currentPositions: MBZCurrentPosition[]
  foreignPolicy: MBZForeignPolicy[]
  philanthropy: MBZPhilanthropy[]
  honors: MBZHonor[]
  personalInterests: string[]
  westernMediaCharacterization: string[]
}

export const presidentialLeadership: PresidentialLeadership = {
  personalDetails: {
    fullName: 'Muḥammad ibn Zāyid ibn Sulṭān Āl Nahyān',
    born: 'March 11, 1961 (age 65)',
    birthplace: 'Al Ain, Abu Dhabi',
    father: 'Sheikh Zayed bin Sultan Al Nahyan (UAE\'s first president, 1971-2004)',
    mother: 'Fatima bint Mubarak Al Ketbi',
    spouse: 'Salama bint Hamdan Al Nahyan (married 1981)',
    children: '4 sons, 5 daughters, 22 grandchildren'
  },
  education: [
    { institution: 'Schools in Al Ain and Abu Dhabi', year: 'Childhood', details: 'Early education' },
    { institution: 'Gordonstoun (Scotland)', year: 'Summer sessions', details: 'Boarding school' },
    { institution: 'Royal Military Academy Sandhurst', year: 'April 1979', details: 'Graduated; completed armor, flying, parachutist courses' }
  ],
  militaryCareer: [
    { year: '1979', position: 'Joined UAE Armed Forces' },
    { year: 'Early 1990s', position: 'Served in Amiri Guard (Presidential Guard)' },
    { year: 'Post-1990s', position: 'Became UAE Air Force pilot; Commander of UAE Air Force and Air Defense' },
    { year: '1993-2005', position: 'Chief of Staff of UAE Armed Forces' },
    { year: '2005', position: 'Promoted to Lieutenant General; appointed Deputy Supreme Commander of UAE Armed Forces' }
  ],
  politicalTimeline: [
    { date: 'November 2003', positionEvent: 'Appointed Deputy Crown Prince of Abu Dhabi' },
    { date: 'December 2004', positionEvent: 'Became Crown Prince of Abu Dhabi' },
    { date: 'December 2004', positionEvent: 'Chairman of Abu Dhabi Executive Council' },
    { date: 'January 2005', positionEvent: 'Deputy Supreme Commander of UAE Armed Forces' },
    { date: 'January 2014', positionEvent: 'Became de facto ruler after brother Khalifa\'s stroke' },
    { date: 'March 2023', positionEvent: 'Appointed son Khaled as Crown Prince of Abu Dhabi (breaking tradition of selecting from older brothers)' },
    { date: 'May 13, 2022', positionEvent: 'Became Ruler of Abu Dhabi' },
    { date: 'May 14, 2022', positionEvent: 'Elected President of UAE by Federal Supreme Council' }
  ],
  currentPositions: [
    { position: 'President of UAE', since: 'May 14, 2022' },
    { position: 'Ruler of Abu Dhabi', since: 'May 13, 2022' },
    { position: 'Deputy Supreme Commander of UAE Armed Forces', since: '2005' },
    { position: 'Chairman of Abu Dhabi Executive Council', since: '2004' },
    { position: 'Chairman of Supreme Council for Financial and Economic Affairs', since: '-' },
    { position: 'Chair of Abu Dhabi National Oil Company (ADNOC)', since: '-' },
    { position: 'Member of Supreme Petroleum Council', since: '-' }
  ],
  foreignPolicy: [
    { position: 'Chief Ally', details: 'United States' },
    { position: 'Opponents', details: 'Muslim Brotherhood, Iran and its proxies' },
    { position: 'Regional Actions', details: 'Supported wars in Iraq, Syria, Yemen; Backed Rapid Support Forces in Sudan' },
    { position: 'Abraham Accords', details: 'Key figure in achieving UAE-Israel normalization (2020)' }
  ],
  philanthropy: [
    { initiative: 'UN anti-trafficking initiative', amount: '$55 million' },
    { initiative: 'Vaccines in Afghanistan/Pakistan', amount: '$50 million' },
    { initiative: 'Roll Back Malaria Partnership', amount: '$30 million' },
    { initiative: 'Polio eradication', amount: '$327 million' },
    { initiative: 'Ukrainian civilian aid (2022)', amount: '$100 million' },
    { initiative: 'Special Olympics education', amount: '$25 million' }
  ],
  honors: [
    { honor: 'US Legion of Merit', country: 'United States', year: '1991' },
    { honor: 'France\'s Legion of Honour', country: 'France', year: '2022' },
    { honor: 'UK\'s Honorary Knight Grand Cross of St Michael and St George', country: 'United Kingdom', year: '2010' }
  ],
  personalInterests: [
    'Falconry (lifelong enthusiast)',
    'Nabati (traditional Emirati) poetry',
    'Established Mohamed bin Zayed Falconry School',
    'Founded Louvre Abu Dhabi (2017), Guggenheim Abu Dhabi (2012)'
  ],
  westernMediaCharacterization: [
    '"the most powerful Arab ruler" — The New York Times',
    '"authoritarian capitalist" and leader of a "rentier state"'
  ]
}

// ============================================================================
// SECTION 3: FEDERAL NATIONAL COUNCIL
// ============================================================================

export interface FNCSeatDistribution {
  emirate: string
  totalSeats: number
  appointed: number
  elected: number
}

export interface ElectoralCollegeGrowth {
  electionYear: number
  size: number
  change: string
}

export interface FNCPowers {
  power: string
  details: string
}

export interface FederalNationalCouncil {
  overview: {
    established: string
    type: string
    termLength: string
    totalMembers: number
    appointedMembers: number
    electedMembers: number
    currentSpeaker: string
    firstFemaleSpeaker: string
  }
  seatDistribution: FNCSeatDistribution[]
  electoralCollegeGrowth: ElectoralCollegeGrowth[]
  powers: FNCPowers[]
  genderQuota: {
    year: string
    requirement: string
    result2019: string
    result2023: string
  }
  politicalPartyStatus: string
}

export const federalNationalCouncil: FederalNationalCouncil = {
  overview: {
    established: '1971 under Provisional Constitution',
    type: 'Unicameral advisory/consultative body',
    termLength: '4 years',
    totalMembers: 40,
    appointedMembers: 20,
    electedMembers: 20,
    currentSpeaker: 'Saqr Ghobash (since November 14, 2019)',
    firstFemaleSpeaker: 'Amal Al Qubaisi (2015-2019)'
  },
  seatDistribution: [
    { emirate: 'Abu Dhabi', totalSeats: 8, appointed: 4, elected: 4 },
    { emirate: 'Dubai', totalSeats: 8, appointed: 4, elected: 4 },
    { emirate: 'Sharjah', totalSeats: 6, appointed: 3, elected: 3 },
    { emirate: 'Ras Al Khaimah', totalSeats: 6, appointed: 3, elected: 3 },
    { emirate: 'Ajman', totalSeats: 4, appointed: 2, elected: 2 },
    { emirate: 'Fujairah', totalSeats: 4, appointed: 2, elected: 2 },
    { emirate: 'Umm Al Quwain', totalSeats: 4, appointed: 2, elected: 2 }
  ],
  electoralCollegeGrowth: [
    { electionYear: 2006, size: 6689, change: '-' },
    { electionYear: 2011, size: 129274, change: '+1,832%' },
    { electionYear: 2015, size: 0, change: 'Not held' },
    { electionYear: 2019, size: 337738, change: '+161%' },
    { electionYear: 2023, size: 398879, change: '+18%' }
  ],
  powers: [
    { power: 'Review Laws', details: 'Examine, amend, or recommend changes to federal draft laws' },
    { power: 'Question Ministers', details: 'Summon and question federal ministers' },
    { power: 'Budget Examination', details: 'Examine annual federal budget' },
    { power: 'No Veto', details: 'Has no legislative veto power' },
    { power: 'No Initiative', details: 'Cannot propose legislation independently' }
  ],
  genderQuota: {
    year: '2019',
    requirement: '50% of all 40 seats must be held by women',
    result2019: '7 of 20 elected members were women',
    result2023: 'Gender quota maintained'
  },
  politicalPartyStatus: 'Banned: All political parties are banned in UAE. All candidates run as independents. No opposition parties exist legally.'
}

// ============================================================================
// SECTION 4: FNC ELECTIONS 2023
// ============================================================================

export interface VoterTurnoutByEmirate {
  emirate: string
  turnoutPercent: number
  votesCast: number
  eligibleVoters: number
}

export interface GenderStatistics {
  gender: string
  eligibleVoters: number
  percentOfTotal: string
  turnoutPercent: number
}

export interface ElectedMember {
  name: string
  emirate: string
  votes?: number
  notes?: string
}

export interface FNCElections2023 {
  overview: {
    electionDate: string
    seatsElected: number
    system: string
    totalElectoralCollege: number
    totalVotesCast: number
    overallTurnout: number
    turnoutChange: string
    remoteVoting: number
    electionType: string
  }
  voterTurnoutByEmirate: VoterTurnoutByEmirate[]
  genderStatistics: GenderStatistics[]
  electedMembersByEmirate: {
    emirate: string
    members: ElectedMember[]
  }[]
  leadershipStatement: string
}

export const fncElections2023: FNCElections2023 = {
  overview: {
    electionDate: 'October 7, 2023',
    seatsElected: 20,
    system: 'Single non-transferable vote (SNTV) in seven electoral colleges',
    totalElectoralCollege: 398879,
    totalVotesCast: 175488,
    overallTurnout: 44.0,
    turnoutChange: '+9.19 percentage points',
    remoteVoting: 92.69,
    electionType: 'First conducted completely electronically'
  },
  voterTurnoutByEmirate: [
    { emirate: 'Umm al-Quwain', turnoutPercent: 60.2, votesCast: 4561, eligibleVoters: 7577 },
    { emirate: 'Ajman', turnoutPercent: 57.8, votesCast: 7283, eligibleVoters: 12600 },
    { emirate: 'Fujairah', turnoutPercent: 57.13, votesCast: 24911, eligibleVoters: 43599 },
    { emirate: 'Ras al-Khaimah', turnoutPercent: 56.85, votesCast: 35357, eligibleVoters: 62197 },
    { emirate: 'Abu Dhabi', turnoutPercent: 44.54, votesCast: 56471, eligibleVoters: 126779 },
    { emirate: 'Sharjah', turnoutPercent: 41.11, votesCast: 29996, eligibleVoters: 72946 },
    { emirate: 'Dubai', turnoutPercent: 23.11, votesCast: 16909, eligibleVoters: 73181 }
  ],
  genderStatistics: [
    { gender: 'Male', eligibleVoters: 194111, percentOfTotal: '48.67%', turnoutPercent: 55.86 },
    { gender: 'Female', eligibleVoters: 204768, percentOfTotal: '51.33%', turnoutPercent: 44.14 }
  ],
  electedMembersByEmirate: [
    {
      emirate: 'Abu Dhabi',
      members: [
        { name: 'Salem Hamad Salem Al Ameri', emirate: 'Abu Dhabi' },
        { name: 'Hilal Mohammed Hamdan Hilal Al Kaabi', emirate: 'Abu Dhabi' },
        { name: 'Mudhia Salem Kaderi Mohamed Al Menhali', emirate: 'Abu Dhabi' },
        { name: 'Hashima Yasser Ali Saeed Al Afari', emirate: 'Abu Dhabi' }
      ]
    },
    {
      emirate: 'Dubai',
      members: [
        { name: 'Humaid Ahmed Ahmed Mohammed Al Tayer', emirate: 'Dubai' },
        { name: 'Ahmed Mir Hashem Ahmed Khoury', emirate: 'Dubai' },
        { name: 'Maryam Majid Khalfan Majid bin Thaneya', emirate: 'Dubai' },
        { name: 'Amna Ali Salem Ali Al Odaidi', emirate: 'Dubai' }
      ]
    },
    {
      emirate: 'Sharjah',
      members: [
        { name: 'Mohammed Hassan Suleiman Ali Al Dhouri', emirate: 'Sharjah' },
        { name: 'Walid Ali Mohamed bin Falah Al Mansouri', emirate: 'Sharjah' },
        { name: 'Adnan Hamad Mohamed Hamad Al Hammadi', emirate: 'Sharjah' }
      ]
    },
    {
      emirate: 'Ras Al Khaimah',
      members: [
        { name: 'Saeed Rashid Abdullah Al Nuaimi', emirate: 'Ras Al Khaimah', votes: 3866, notes: 'Top vote-getter' },
        { name: 'Sultan Salem Abdullah bin Yaqoub Al Zaabi', emirate: 'Ras Al Khaimah' },
        { name: 'Salem Rashid Ali Al Ali', emirate: 'Ras Al Khaimah' }
      ]
    },
    {
      emirate: 'Ajman',
      members: [
        { name: 'Majid Mohammed Rahma Mohamed Al Mazrouei', emirate: 'Ajman' },
        { name: 'Aisha Ibrahim Ahmed Al Marri', emirate: 'Ajman' }
      ]
    },
    {
      emirate: 'Fujairah',
      members: [
        { name: 'Sheikh Saeed bin Suroor bin Saif bin Suroor Al Sharqi', emirate: 'Fujairah', votes: 8985, notes: 'Top overall vote-getter' },
        { name: 'Aisha Khamis Ali Al Dhanhani', emirate: 'Fujairah' }
      ]
    },
    {
      emirate: 'Umm Al Quwain',
      members: [
        { name: 'Mohammed Issa Obaid Al Ali', emirate: 'Umm Al Quwain' },
        { name: 'Mona Rashid Abdullah Tahnoon Al Ali', emirate: 'Umm Al Quwain' }
      ]
    }
  ],
  leadershipStatement: '"We always affirm that the state\'s legislative, executive and judicial authorities and all government teams in all sectors will remain one hand to build the best future for the people of the Union." — Sheikh Mohammed bin Rashid Al Maktoum'
}

// ============================================================================
// SECTION 5: CABINET & GOVERNANCE
// ============================================================================

export interface CabinetReshuffleJune2025 {
  announcementDate: string
  announcedBy: string
  consultation: string
  newMinistry: string
  newMinister: string
  renamedMinistry: string
  renamedMinistryLeader: string
}

export interface AIIntegration {
  implementationDate: string
  details: string
  functions: string[]
}

export interface KeyMinisterialPosition {
  position: string
  incumbent: string
}

export interface CabinetGovernance {
  reshuffleJune2025: CabinetReshuffleJune2025
  aiIntegration: AIIntegration
  cabinetStatement: string
  reshuffleJanuary2024: string
  keyMinisterialPositions: KeyMinisterialPosition[]
}

export const cabinetGovernance: CabinetGovernance = {
  reshuffleJune2025: {
    announcementDate: 'June 20, 2025',
    announcedBy: 'Sheikh Mohammed bin Rashid Al Maktoum',
    consultation: 'With President Sheikh Mohamed bin Zayed Al Nahyan',
    newMinistry: 'Ministry of Foreign Trade established',
    newMinister: 'Dr. Thani Al Zeyoudi appointed Minister of Foreign Trade',
    renamedMinistry: 'Ministry of Economy renamed Ministry of Economy and Tourism',
    renamedMinistryLeader: 'Abdullah bin Touq Al Marri leads Ministry of Economy and Tourism'
  },
  aiIntegration: {
    implementationDate: 'January 2026',
    details: 'Becomes advisory member in Council of Ministers, Ministerial Development Council, and all boards of federal entities and government companies',
    functions: [
      'Support decision-making',
      'Real-time analyses',
      'Technical advice',
      'Enhance government policy efficiency'
    ]
  },
  cabinetStatement: '"The world is undergoing a comprehensive transformation phase… scientifically... economically... and socially... our goal is to prepare today for the coming decades." — Sheikh Mohammed bin Rashid Al Maktoum',
  reshuffleJanuary2024: 'Major reshuffle ahead of economic challenges. New ministerial positions created including Minister of State for Defence Affairs.',
  keyMinisterialPositions: [
    { position: 'Deputy Prime Minister + Foreign Affairs', incumbent: 'Sheikh Abdullah bin Zayed Al Nahyan' },
    { position: 'Prime Minister', incumbent: 'Mohammed bin Rashid Al Maktoum' },
    { position: 'Vice President + Defence', incumbent: 'Mohammed bin Rashid Al Maktoum' },
    { position: 'Health and Prevention', incumbent: 'Ahmed Al Sayegh' },
    { position: 'State for Federal National Council Affairs', incumbent: 'AbdulRahman bin Mohamed Al Owais' },
    { position: 'Minister of State', incumbent: 'Lana Zaki Nusseibeh' },
    { position: 'New Appointments', incumbent: 'Saeed Mubarak' }
  ]
}

// ============================================================================
// SECTION 6: HUMAN RIGHTS & POLITICAL PRISONERS
// ============================================================================

export interface FreedomHouseScores {
  index: string
  score: number
  max: number
  rating: string
  status: string
}

export interface PoliticalRightsBreakdown {
  subcategory: string
  score: number
  max: number
}

export interface CivilLibertiesBreakdown {
  subcategory: string
  score: number
  max: number
}

export interface HumanRightsViolation {
  date: string
  incident: string
}

export interface DueProcessViolation {
  violationType: string
  details: string
}

export interface PrisonerCount {
  category: string
  count: string
  source: string
}

export interface HumanRightsPoliticalPrisoners {
  freedomHouseScores: FreedomHouseScores[]
  politicalRightsBreakdown: PoliticalRightsBreakdown[]
  civilLibertiesBreakdown: CivilLibertiesBreakdown[]
  keyViolations: HumanRightsViolation[]
  dueProcessViolations: DueProcessViolation[]
  prisonerCounts: PrisonerCount[]
  internationalResponse: { date: string; action: string }[]
}

export const humanRightsPoliticalPrisoners: HumanRightsPoliticalPrisoners = {
  freedomHouseScores: [
    { index: 'Global Freedom Score', score: 18, max: 100, rating: 'Not Free', status: 'Critical' },
    { index: 'Political Rights', score: 5, max: 40, rating: 'Not Free', status: 'Critical' },
    { index: 'Civil Liberties', score: 13, max: 60, rating: 'Not Free', status: 'Critical' },
    { index: 'Internet Freedom', score: 28, max: 100, rating: 'Not Free', status: 'Critical' }
  ],
  politicalRightsBreakdown: [
    { subcategory: 'Electoral Process', score: 1, max: 12 },
    { subcategory: 'Political Pluralism and Participation', score: 2, max: 16 },
    { subcategory: 'Functioning of Government', score: 2, max: 12 }
  ],
  civilLibertiesBreakdown: [
    { subcategory: 'Freedom of Expression and Belief', score: 4, max: 16 },
    { subcategory: 'Associational and Organizational Rights', score: 2, max: 12 },
    { subcategory: 'Rule of Law', score: 3, max: 16 },
    { subcategory: 'Personal Autonomy and Individual Rights', score: 4, max: 16 }
  ],
  keyViolations: [
    { date: 'July 2024', incident: 'Mass trial: 43 sentenced to life, 10 to 10-15 years (84 defendants)' },
    { date: 'July 2024', incident: '57 Bangladeshis sentenced for unauthorized protest; later pardoned and deported' },
    { date: 'May 2024', incident: 'Foreign student arrested and deported for pro-Palestinian slogan at NYU Abu Dhabi' },
    { date: 'February 2024', incident: 'UAE removed from FATF "grey list"' }
  ],
  dueProcessViolations: [
    { violationType: 'Grave violations of due process', details: 'Documented by multiple NGOs' },
    { violationType: 'Abusive detention conditions', details: 'Documented by HRW and Amnesty' },
    { violationType: 'Forced disappearances', details: 'Of foreign nationals and Emirati citizens' },
    { violationType: 'Secret prisons in Yemen', details: '16 documented torture methods' },
    { violationType: 'Arbitrary detention', details: 'Activists, lawyers, journalists' },
    { violationType: 'Spyware targeting', details: 'Pegasus and DarkMatter against dissidents' },
    { violationType: 'Solitary confinement', details: 'Ahmed Mansoor held 4+ years' }
  ],
  prisonerCounts: [
    { category: 'UAE94 dissidents still imprisoned (beyond sentence)', count: '55-60', source: 'HRW/Amnesty' },
    { category: 'UAE94 mass trial total defendants', count: '94', source: 'HRW' },
    { category: 'UAE94 sentenced (July 2013)', count: '69', source: 'Amnesty' },
    { category: 'Amnesty International prisoners of conscience', count: '26', source: 'Amnesty' },
    { category: 'Life sentences (July 2024 mass trial)', count: '43', source: 'Freedom House' }
  ],
  internationalResponse: [
    { date: 'August 2023', action: 'HRW, Amnesty, 23 other NGOs issued joint statement demanding release before COP28' },
    { date: 'Ongoing', action: 'UN experts calling for releases' },
    { date: 'Ongoing', action: 'European Parliament resolutions' },
    { date: 'December 2019', action: 'US Congress members called for Ahmed Mansoor\'s release' }
  ]
}

// ============================================================================
// SECTION 7: AHMED MANSOOR CASE STUDY
// ============================================================================

export interface AhmedMansoorProfile {
  name: string
  born: string
  nationality: string
  profession: string
  family: string
  nicknames: string
  awards: string
  advisoryRoles: string
}

export interface AhmedMansoorArrest {
  period: string
  date: string
  event: string
}

export interface AhmedMansoorTrial {
  date: string
  event: string
}

export interface AhmedMansoorCharge {
  charge: string
  verdict: string
}

export interface AhmedMansoorDetention {
  condition: string
  details: string
}

export interface AhmedMansoorHungerStrike {
  period: string
  duration: string
  demand?: string
  result: string
}

export interface AhmedMansoorCaseStudy {
  profile: AhmedMansoorProfile
  education: string
  firstArrest: AhmedMansoorArrest[]
  secondArrest: {
    dateTime: string
    events: string[]
  }
  trial: AhmedMansoorTrial[]
  charges: AhmedMansoorCharge[]
  additionalPenalties: string[]
  detentionConditions: AhmedMansoorDetention[]
  hungerStrikes: AhmedMansoorHungerStrike[]
  phoneCallMonitoring: string
  internationalResponse: { date: string; response: string }[]
}

export const ahmedMansoorCaseStudy: AhmedMansoorCaseStudy = {
  profile: {
    name: 'Ahmed Mansoor',
    born: 'Approximately 1969',
    nationality: 'Emirati',
    profession: 'Engineer, poet, human rights defender',
    family: 'Father of four',
    nicknames: '"The million-dollar dissident"; "Last human rights defender left standing in the UAE"',
    awards: 'Martin Ennals Award for Human Rights Defenders (2015)',
    advisoryRoles: 'Human Rights Watch; Gulf Centre for Human Rights'
  },
  education: 'University of Colorado Boulder (graduated 1999). Human rights activism began 2006.',
  firstArrest: [
    { period: 'March 2011', date: 'March 2011', event: 'Launched petition for modest democratic reforms with 4 others' },
    { period: 'June 2011', date: 'June 2011', event: 'Arrested along with Nasser bin Ghaith, Fahad Salim Dalk, Ahmed Abdul-Khaleq, Hassan Ali al-Khamis' },
    { period: 'November 2011', date: 'November 2011', event: 'Sentenced to 3 years for "publicly insulting" UAE authorities' },
    { period: 'Next day', date: 'November 2011', event: 'Sentence commuted; passport never returned (de facto travel ban)' }
  ],
  secondArrest: {
    dateTime: 'March 19, 2017 at 11:55 p.m.',
    events: [
      '10 uniformed police raided his home in Ajman',
      'All family mobile phones and laptops confiscated (including children\'s devices)',
      'Held incommunicado for over a year',
      'No access to lawyer',
      'Only 2 family visits, 6 months apart',
      'Detention location different from actual facility'
    ]
  },
  trial: [
    { date: 'March 14, 2018', event: 'Trial began at Abu Dhabi Court of Appeals' },
    { date: 'March-May 2018', event: '5 closed hearings' },
    { date: 'May 29, 2018', event: 'Found guilty; sentenced to 10 years + 1 million AED fine (~$270,000)' },
    { date: 'December 31, 2018', event: 'Federal Supreme Court upheld sentence' }
  ],
  charges: [
    { charge: 'Cooperating with terrorist organization', verdict: 'Acquitted' },
    { charge: 'Establishing social media accounts', verdict: 'Convicted' },
    { charge: 'Providing incorrect information to organizations', verdict: 'Convicted' },
    { charge: 'Spreading false statements', verdict: 'Convicted' },
    { charge: 'Criticizing judges and their rulings', verdict: 'Convicted' },
    { charge: 'Publishing court proceedings', verdict: 'Convicted' }
  ],
  additionalPenalties: [
    '3 years post-release surveillance',
    'Device confiscation',
    'Social media account termination'
  ],
  detentionConditions: [
    { condition: 'Location', details: 'Al-Sadr prison, Abu Dhabi' },
    { condition: 'Cell Size', details: 'Approximately 2m x 2m' },
    { condition: 'Status', details: 'Solitary confinement for nearly 4 years' },
    { condition: 'Confiscated Items', details: 'Clothes, mattress, hygiene products, towels, papers, pens' },
    { condition: 'Allowed Items', details: 'Prayer rug, wristwatch, one shirt, two blankets' },
    { condition: 'Winter Conditions', details: 'Hot water cut off' },
    { condition: 'Food', details: 'Denied hot tea and canteen access' },
    { condition: 'Health Issues', details: 'High blood pressure, severe colds with high fevers' }
  ],
  hungerStrikes: [
    {
      period: 'March 17 - April 10, 2019',
      duration: '25 days',
      demand: 'End solitary, phone calls, family visits, library, exercise, sunlight, adequate clothing, mattress, bed, blankets',
      result: '-'
    },
    {
      period: 'Early September - October 2019',
      duration: '49 days',
      result: 'Lost over 11 kilograms; resulted in exercise/sunlight access 3x weekly, mother\'s name added to visitation list'
    }
  ],
  phoneCallMonitoring: 'All phone calls monitored. Visits occur under officer supervision. In-person visits halted January 2020. Phone and family contact denied April-June 2020.',
  internationalResponse: [
    { date: 'March 2017', response: 'UN Experts: "direct attack on legitimate work of human rights defenders"' },
    { date: 'May 2019', response: 'UN Experts: solitary confinement "violating basic international human rights standards"' },
    { date: 'October 2018', response: 'European Parliament resolution specifically on Mansoor\'s case' },
    { date: 'December 2019', response: 'US Congress members called for his release' }
  ]
}

// ============================================================================
// SECTION 8: UAE94 MASS TRIAL
// ============================================================================

export interface UAE94NotableDefendant {
  name: string
  profession: string
}

export interface UAE94Violation {
  violation: string
  details: string
}

export interface UAE94MassTrial {
  caseOverview: {
    totalDefendants: number
    trialStartDate: string
    location: string
    inAbsentiaDefendants: number
    convicted: number
    sentences: string
    status2024: string
  }
  notableDefendants: UAE94NotableDefendant[]
  charges: { charge: string; law: string }[]
  humanRightsViolations: UAE94Violation[]
  unWorkingGroup: string
  familyRepressions: string[]
  organizationsCallingForAction: string[]
}

export const uae94MassTrial: UAE94MassTrial = {
  caseOverview: {
    totalDefendants: 94,
    trialStartDate: 'March 4, 2013',
    location: 'Federal Supreme Court, Abu Dhabi',
    inAbsentiaDefendants: 8,
    convicted: 69,
    sentences: '7-15 years',
    status2024: '55-60 still imprisoned beyond sentence completion'
  },
  notableDefendants: [
    { name: 'Mohamed al-Roken', profession: 'Human rights lawyer' },
    { name: 'Mohamed al-Mansoori', profession: 'Human rights lawyer' },
    { name: 'Judge Mohammed Saeed al-Abdouli', profession: 'Judge' },
    { name: 'Dr. Hadef al-Owais', profession: 'Jurist and university professor' },
    { name: 'Many members of Reform and Social Guidance Association (Al-Islah)', profession: '-' }
  ],
  charges: [
    { charge: '"Founding, organizing, or operating a group that aims to overthrow the country\'s political system"', law: 'Article 180 of Penal Code' }
  ],
  humanRightsViolations: [
    { violation: 'Incommunicado detention', details: 'At least 64 detainees held at undisclosed locations for up to one year before trial' },
    { violation: 'No legal access', details: 'Many denied access to legal assistance until late February 2013' },
    { violation: 'State security intrusion', details: 'State security prosecutor present during confidential lawyer-client meetings' },
    { violation: 'Journalist detained', details: 'Abdulla al-Hadidi (defendant\'s son) detained March 21, 2013 for reporting on trial via social media' },
    { violation: 'Cybercrime charges', details: 'Charged under cybercrime law for publishing trial details "without probity and in bad faith"' },
    { violation: 'International observers denied', details: 'Entry to UAE or court proceedings denied' },
    { violation: 'Torture allegations', details: 'Credible allegations of torture at State Security facilities' },
    { violation: 'Enforced disappearances', details: 'Up to five months' },
    { violation: 'Evidence tampering', details: 'Judge prevented potentially exculpatory testimony from being officially recorded' },
    { violation: 'Forgery cover-up', details: 'Request to investigate alleged forgery of defendants\' signatures denied' }
  ],
  unWorkingGroup: 'Found all defendants arbitrarily detained. Demands: quash convictions, release prisoners, reinstate revoked nationalities.',
  familyRepressions: [
    'Citizenship revoked for prisoners and their family members',
    'Families rendered effectively stateless',
    'Alaa al-Siddiq (daughter of Mohamed al-Siddiq) died in car accident June 2021; family hadn\'t spoken to him since 2018'
  ],
  organizationsCallingForAction: [
    'Human Rights Watch',
    'International Federation for Human Rights (FIDH)',
    'Amnesty International',
    'International Commission of Jurists (ICJ)',
    'Front Line Defenders'
  ]
}

// ============================================================================
// SECTION 9: AL ISLAH & MUSLIM BROTHERHOOD
// ============================================================================

export interface AlIslahOrigins {
  period: string
  event: string
}

export interface AlIslahCrackdownEvent {
  year: string
  event: string
}

export interface AlIslahMuslimBrotherhood {
  origins: AlIslahOrigins[]
  governmentPositions: { person: string; position: string }[]
  whyBanned: { reason: string; details: string }[]
  crackdownTimeline: AlIslahCrackdownEvent[]
  terroristDesignation2014: {
    organizationsListed: number
    listedGroups: string[]
  }
  expertAssessment: string
  mbz2004Assessment: string[]
  alIslahResponse: string[]
}

export const alIslahMuslimBrotherhood: AlIslahMuslimBrotherhood = {
  origins: [
    { period: '1950s-1960s', event: 'UAE hired large numbers of Muslim Brotherhood members from other Middle Eastern countries for education and judicial positions' },
    { period: '1974', event: 'Islah (Reform and Social Counselling Association) formally organized as local Emirati Brotherhood group' },
    { period: '1974', event: 'Dubai ruler Sheikh Rashid al-Maktoum donated money for headquarters' },
    { period: '1974', event: 'President Sheikh Zayed contributed land in Abu Dhabi' },
    { period: '1977', event: 'Islah dominated student union elections at UAE University' },
    { period: '1978', event: 'Al-Islah magazine established, publishing content attacking leftist and nationalist opponents' },
    { period: '1992', event: 'Lost control of UAE University student unions' },
    { period: '1990s', event: 'Became "the most organized non-state actor in the country"' }
  ],
  governmentPositions: [
    { person: 'Shaykh Sa\'id Abdullah Salman', position: 'Minister of housing (1971), later Minister of Education and Chancellor of UAEU (1979)' },
    { person: 'Muhammad Abd al-Rahman al-Bakr', position: 'Minister of justice and Islamic affairs (1977)' }
  ],
  whyBanned: [
    { reason: '"State within a state"', details: 'Controlling judicial and education sector' },
    { reason: 'Political reform agenda', details: 'Seeking more representative government' },
    { reason: 'Alleged terrorism funding', details: 'Claims (early 1990s) that Islah\'s Committee for Relief and Outside Activities funded Egyptian Islamic Jihad' },
    { reason: 'Oath of bay\'a', details: 'Loyalty to Brotherhood\'s General Guide viewed as challenge to UAE loyalty' }
  ],
  crackdownTimeline: [
    { year: '1994', event: 'Government dissolved Brotherhood\'s previously elected boards; placed under Ministry of Social Affairs supervision' },
    { year: '2002', event: 'State Security Directorate arrested over 250 individuals accused of terrorism (most released by 2004)' },
    { year: '2003', event: 'Abu Dhabi Crown Prince Mohammed bin Zayed held talks to persuade disbandment; Islah rejected' },
    { year: '2011', event: '133 intellectuals including Islah members signed petition for political reform' },
    { year: 'April 2011', event: 'UAE5 arrested' },
    { year: 'December 2011', event: 'UAE7 (all Islah members) had citizenship stripped' },
    { year: '2012', event: 'Major crackdown; 94 alleged Islah members arrested; 69 sentenced to 7-15 years' },
    { year: 'November 2013', event: 'Security trial for 10 of the 94 plus 20 Egyptians' },
    { year: 'January 2014', event: 'Convictions, sentences of 1-5 years' },
    { year: 'August 2014', event: 'New anti-terrorism law passed, allowing expanded use of death penalty' },
    { year: 'November 2014', event: 'UAE published list of 82 terrorist organizations including Islah and Egyptian Muslim Brotherhood' }
  ],
  terroristDesignation2014: {
    organizationsListed: 82,
    listedGroups: [
      'Muslim Brotherhood',
      'al-Nusra Front',
      'ISIL',
      'Al-Qaeda',
      'Taliban',
      'Boko Haram',
      'Houthi rebels',
      'Al-Islah',
      'Islamic Relief (UK charity)',
      'Muslim American Society'
    ]
  },
  expertAssessment: '"The list is very odd... it includes non-violent civic organizations." — Jim Walsh, MIT',
  mbz2004Assessment: [
    'UAE contained up to 700 Brotherhood members',
    '50-60 Emirati Brotherhood members identified in military',
    '50-80% of 60,000 armed forces "would respond to the call of \'some holy man in Mekkah\'"'
  ],
  alIslahResponse: [
    'Denied all allegations',
    'Stated it was "pacifist, civilian and moderate"',
    'No evidence of an armed wing substantiated',
    'Confessions reportedly obtained under torture'
  ]
}

// ============================================================================
// SECTION 10: SURVEILLANCE STATE
// ============================================================================

export interface DarkMatterProfile {
  founded: string
  founder: string
  ceo: string
  headquarters: string
  governmentWorkPercent: string
  products: string[]
}

export interface KarmaTarget {
  target: string
  description: string
}

export interface DarkMatterLawsuit {
  date: string
  plaintiff: string
  allegations: string
}

export interface NSOGroup {
  developer: string
  uaeAgencyUse: string
  usResponse: string
}

export interface PegasusUAE {
  activist: string
  date: string
  operators: string
  domain: string
  crossBorderSurveillance: string
}

export interface SurveillanceState {
  darkMatter: DarkMatterProfile
  projectRaven: {
    startYear: string
    location: string
    staff: string
    targets: string
    operations: string
  }
  karmaSpyware: {
    capability: string
    access: string
    userInteractionRequired: string
    developer: string
  }
  karmaSurveillanceTargets: KarmaTarget[]
  certificateAuthority: { date: string; event: string }[]
  fbiInvestigation: {
    date: string
    persons: { name: string; age: number; position: string; penalty: string }[]
    totalFines: string
  }
  lawsuit: DarkMatterLawsuit
  pegasus: NSOGroup
  pegasusUAE: PegasusUAE
  globalOperations: {
    countriesWithSuspectedInfections: number
    PegasusOperatorSystems: number
    matchingIPAddresses: number
    operatorsCrossBorderSurveillance: number
    operatorsLinkedToSuspectedInfections: number
  }
}

export const surveillanceState: SurveillanceState = {
  darkMatter: {
    founded: '2014 or 2015',
    founder: 'Faisal al-Bannai (founder of Axiom Telecom; son of major general in Dubai Police Force)',
    ceo: 'Karim Sabbagh',
    headquarters: 'Abu Dhabi, UAE',
    governmentWorkPercent: '80% of work for UAE government and related organizations by early 2018',
    products: ['Katim phone ("silence" in Arabic)', 'Cyber offensive technology']
  },
  projectRaven: {
    startYear: '2016 (replaced CyberPoint)',
    location: 'Converted mansion called "the Villa" in Abu Dhabi\'s Khalifa City',
    staff: 'Former US intelligence operatives',
    targets: 'Governments, militants, human rights activists',
    operations: 'Hacked phones and computers globally'
  },
  karmaSpyware: {
    capability: 'Remotely exploit Apple iPhones worldwide through zero-day vulnerability in iMessage',
    access: 'Passwords, emails, texts, photos, location data',
    userInteractionRequired: 'No (zero-click)',
    developer: 'DarkMatter for Project Raven'
  },
  karmaSurveillanceTargets: [
    { target: 'Sheikh Tamim bin Hamad Al Thani', description: 'Qatari Emir (and family)' },
    { target: 'Ahmed Mansoor\'s wife Nadia', description: 'UAE human rights defender' },
    { target: 'Rori Donaghy', description: 'British journalist' },
    { target: 'Saad Hariri', description: 'Lebanese Prime Minister' },
    { target: 'Tawakkol Karman', description: 'Yemeni Nobel Laureate' },
    { target: 'Hundreds in Qatar, Yemen, Kuwait, Oman, Serbia, Lebanon, Iran, Turkey', description: 'Various activists, journalists, politicians' }
  ],
  certificateAuthority: [
    { date: 'December 2017', event: 'DarkMatter requested Mozilla include it as trusted Certificate Authority' },
    { date: 'July 2019', event: 'Mozilla rejected following Reuters investigations' },
    { date: '2019', event: 'Google blocked DarkMatter-certified websites' }
  ],
  fbiInvestigation: {
    date: 'September 2021',
    persons: [
      { name: 'Marc Baier', age: 49, position: 'Former US intelligence operative', penalty: 'Deferred prosecution; $750,000 fine' },
      { name: 'Ryan Adams', age: 34, position: 'Former US intelligence operative', penalty: 'Deferred prosecution; $600,000 fine' },
      { name: 'Daniel Gericke', age: 40, position: 'Former US intelligence operative', penalty: 'Deferred prosecution; $335,000 fine' }
    ],
    totalFines: '$1.68 million'
  },
  lawsuit: {
    date: 'December 9, 2021',
    plaintiff: 'Saudi activist Loujain al-Hathloul',
    allegations: 'Hack led to her arrest, rendition, and torture'
  },
  pegasus: {
    developer: 'NSO Group (Israeli company)',
    uaeAgencyUse: 'Targeted Hanan Elatr (wife of murdered journalist Jamal Khashoggi)',
    usResponse: 'US lawmakers called for sanctions on NSO and DarkMatter executives'
  },
  pegasusUAE: {
    activist: 'Ahmed Mansoor',
    date: 'August 2016',
    operators: 'FALCON, BABYFALCON',
    domain: '"nomorewarnow.com"',
    crossBorderSurveillance: 'Suspected in 45 countries'
  },
  globalOperations: {
    countriesWithSuspectedInfections: 45,
    PegasusOperatorSystems: 36,
    matchingIPAddresses: 1091,
    operatorsCrossBorderSurveillance: 10,
    operatorsLinkedToSuspectedInfections: 33
  }
}

// ============================================================================
// SECTION 11: UAE INFLUENCE OPERATIONS
// ============================================================================

export interface LobbyingExpenditure {
  period: string
  amount: string
  details: string
}

export interface KeyFirm {
  firm: string
  revenueFromUAE: string
}

export interface CampaignContribution {
  recipient: string
  role: string
  connection: string
}

export interface PolicyFocusArea {
  area: string
  details: string
}

export interface ArmsSale {
  sale: string
  status: string
  amount: string
}

export interface UAEInfluenceOperations {
  lobbyingExpenditures: LobbyingExpenditure[]
  faraRegistration: { year: string; organizations: number; politicalActivitiesReported: number }
  congressionalContacts: { category: string; count: string }[]
  topThinkTanks: string[]
  keyPolicyTargets: string[]
  keyFirms2020: KeyFirm[]
  formerUSOfficials: { detail: string; count: number; notable: string }
  campaignContributions: CampaignContribution[]
  policyFocusAreas: PolicyFocusArea[]
  armsSalesResults: ArmsSale[]
  illegalOperations: { operation: string; details: string }[]
  methodsUsed: string[]
}

export const uaeInfluenceOperations: UAEInfluenceOperations = {
  lobbyingExpenditures: [
    { period: 'Since 2016', amount: '$157+ million', details: 'Total from UAE to US lobby' },
    { period: '2020-2021', amount: '$64+ million', details: 'Paid by Emirati clients to representing firms' },
    { period: '2020-2021', amount: '$1.65+ million', details: 'Political contributions made by these firms' },
    { period: 'Single firm (Akin Gump)', amount: '$500,000+', details: 'Donated to politicians its lobbyists contacted' }
  ],
  faraRegistration: {
    year: '2020-2021',
    organizations: 25,
    politicalActivitiesReported: 10765
  },
  congressionalContacts: [
    { category: 'Total Congressional Contacts', count: '7,251' },
    { category: 'House of Representatives', count: '4,346' },
    { category: 'Senate', count: '2,905' },
    { category: 'Media Outlet Contacts', count: '2,889' },
    { category: 'Think Tank Contacts', count: '90+' }
  ],
  topThinkTanks: [
    'Middle East Institute',
    'Atlantic Council',
    'CSIS'
  ],
  keyPolicyTargets: [
    'Senate Foreign Relations Committee',
    'House Foreign Affairs Committee',
    'Lee Zeldin, Chuck Schumer, Steny Hoyer, Adam Smith'
  ],
  keyFirms2020: [
    { firm: 'Akin Gump', revenueFromUAE: '$13.5 million' },
    { firm: 'Brunswick Group', revenueFromUAE: '$12.2 million' },
    { firm: 'Camstoll Group', revenueFromUAE: '$10.5 million' },
    { firm: 'Teneo Strategy', revenueFromUAE: '$7.2 million' },
    { firm: 'Harbour Group', revenueFromUAE: '$6.6 million' }
  ],
  formerUSOfficials: {
    detail: 'Retired military personnel authorized to work for UAE',
    count: 280,
    notable: 'General Mattis'
  },
  campaignContributions: [
    { recipient: 'Terry McAuliffe', role: 'Virginia Gubernatorial Candidate', connection: '$205,500 (top recipient)' },
    { recipient: 'Chuck Schumer', role: 'Senate Majority Leader', connection: 'Top recipient' },
    { recipient: 'Steny Hoyer', role: 'House Majority Leader', connection: 'Top recipient' },
    { recipient: 'Senator Todd Young (R-Ind.)', role: 'Senator', connection: 'Met with Akin Gump lobbyist April 15, 2021; received $5,000 donation 8 days later' }
  ],
  policyFocusAreas: [
    { area: 'Arms Sales', details: '$23 billion package (F-35s, Reaper drones, munitions)' },
    { area: 'Abraham Accords', details: 'Over 1,000 political activities explicitly mentioning' },
    { area: 'Yemen War', details: '~10,000 UAE ground troops deployed; continued backing armed groups after 2020 withdrawal' },
    { area: 'Houthi Designation', details: 'Lobbying to re-designate Houthis as Foreign Terrorist Organization' }
  ],
  armsSalesResults: [
    { sale: 'F-35s + Reaper drones + munitions', status: 'Initially approved; scuttled late 2021', amount: '$23 billion' },
    { sale: 'Reaper drone sale', status: 'Approved 50-46', amount: 'Part of $23B package' },
    { sale: 'F-35 sale', status: 'Approved 49-47', amount: 'Part of $23B package' },
    { sale: 'Biden administration sales', status: 'Approved', amount: '~$3.5 billion' },
    { sale: 'UAE rank', status: 'Third-largest recipient of US weapons (5-year period)', amount: '-' }
  ],
  illegalOperations: [
    { operation: '2016 Election Interference', details: 'Scheme to illegally funnel millions into Trump and Clinton campaigns' },
    { operation: 'Qatar Vilification', details: 'Multi-million dollar covert campaign' }
  ],
  methodsUsed: [
    'Connecting UAE officials with senators (5 meetings in 3 days for Expo 2020)',
    'Distributing informational materials to policymakers',
    'Coordinating with think tanks and media outlets',
    'Arranging meetings between UAE ambassador and Congressional committee members',
    '280 retired military personnel authorized to work for UAE'
  ]
}

// ============================================================================
// SECTION 12: FREEDOM HOUSE SCORES (detailed)
// ============================================================================

export interface FreedomHouseScoresDetail {
  freedomHouseScores: HumanRightsPoliticalPrisoners['freedomHouseScores']
  politicalRightsBreakdown: HumanRightsPoliticalPrisoners['politicalRightsBreakdown']
  civilLibertiesBreakdown: HumanRightsPoliticalPrisoners['civilLibertiesBreakdown']
  internetFreedomDetails: {
    score: number
    status: string
    networksRestricted: string
    socialMedia: string
  }
  keyRestrictions: { restriction: string; details: string }[]
  statusSince: string
}

export const freedomHouseScores: FreedomHouseScoresDetail = {
  freedomHouseScores: humanRightsPoliticalPrisoners.freedomHouseScores,
  politicalRightsBreakdown: humanRightsPoliticalPrisoners.politicalRightsBreakdown,
  civilLibertiesBreakdown: humanRightsPoliticalPrisoners.civilLibertiesBreakdown,
  internetFreedomDetails: {
    score: 28,
    status: 'Not Free',
    networksRestricted: 'No',
    socialMedia: 'Restricted'
  },
  keyRestrictions: [
    { restriction: 'Website blocking', details: 'State blocks/filters internet content' },
    { restriction: 'Platform coercion', details: 'Forces platforms to delete material' },
    { restriction: 'No transparency', details: 'Restrictions lack transparency, proportionality, independent appeals' },
    { restriction: 'Mass arrests', details: '57 Bangladeshi citizens imprisoned for sharing protest information online' },
    { restriction: 'Long sentences', details: 'Ahmed Mansoor (15 years), Nasser bin Ghaith (10 years) for online content' },
    { restriction: 'Forced disappearances', details: 'Poet Abdulrahman al-Qaradawi extradited from Lebanon, disappeared' },
    { restriction: 'Surveillance', details: 'State surveillance and data monitoring by service providers' },
    { restriction: 'Influencer program', details: 'Dubai launched paid program for social media influencers promoting progovernment narratives' },
    { restriction: 'Self-censorship', details: 'Online journalists and users practice self-censorship' }
  ],
  statusSince: 'Consistently rated "Not Free" since 2012'
}

// ============================================================================
// SECTION 13: VISION FRAMEWORKS
// ============================================================================

export interface VisionPillar {
  pillar: string
  focus: string
}

export interface VisionQuantitativeObjective {
  metric: string
  currentAED: string
  targetAED: string
  change: string
}

export interface VisionGlobalRankingTarget {
  target: string
  metric: string
}

export interface VisionFramework {
  name: string
  launchDate: string
  goal: string
  duration: string
  pillars: VisionPillar[]
  quantitativeObjectives?: VisionQuantitativeObjective[]
  globalRankingTargets?: VisionGlobalRankingTarget[]
}

export interface VisionFrameworks {
  weTheUAE2031: VisionFramework
  centennial2071: VisionFramework
}

export const visionFrameworks: VisionFrameworks = {
  weTheUAE2031: {
    name: 'We The UAE 2031',
    launchDate: 'November 22, 2022',
    goal: '10-year national plan',
    duration: '2021-2031',
    pillars: [
      { pillar: 'Forward Society', focus: 'Enhancing citizen capabilities to maximize contribution across all sectors' },
      { pillar: 'Forward Economy', focus: 'Emphasizing human capital as the primary development driver' },
      { pillar: 'Forward Diplomacy', focus: 'Consolidating UAE\'s pivotal global role based on respect for human values' },
      { pillar: 'Forward Ecosystem', focus: 'Enhancing government performance and digital infrastructure using latest technologies' }
    ],
    quantitativeObjectives: [
      { metric: 'GDP', currentAED: '1.49 trillion', targetAED: '3 trillion', change: '+102%' },
      { metric: 'Non-oil exports', currentAED: '-', targetAED: '800 billion', change: 'New' },
      { metric: 'Tourism contribution', currentAED: '-', targetAED: '450 billion', change: 'New' },
      { metric: 'Foreign trade value', currentAED: '-', targetAED: '4 trillion', change: 'New' }
    ],
    globalRankingTargets: [
      { target: '1st globally', metric: 'Developing proactive legislations for new economic sectors' },
      { target: 'Top 10 globally', metric: 'Human Development Index' },
      { target: 'Top 10 globally', metric: 'Quality of healthcare' },
      { target: 'Top 10 cities', metric: 'Quality of life (Emirati cities)' },
      { target: 'Top 10 globally', metric: 'Attracting global talent' },
      { target: '1st globally', metric: 'Safety index' },
      { target: 'Top 10 globally', metric: 'Global Food Security Index' },
      { target: 'Top 3 globally', metric: 'Global Cybersecurity Index' }
    ]
  },
  centennial2071: {
    name: 'UAE Centennial 2071',
    launchDate: 'After 2021',
    goal: 'Make UAE the best nation in the world by 2071 (100th anniversary)',
    duration: '5 decades beyond 2021',
    pillars: [
      { pillar: 'Future-focused government', focus: 'Establishing UAE as world\'s best government with long-term vision and inspirational leadership' },
      { pillar: 'Excellent education', focus: 'Advanced science, technology, space, engineering, innovation, and health sciences' },
      { pillar: 'Diversified knowledge economy', focus: 'Competitive economy through innovation, entrepreneurship, and advanced industries' },
      { pillar: 'Happy and cohesive society', focus: 'Secure, tolerant, ethical society with high quality of life and women\'s participation' }
    ]
  }
}

// ============================================================================
// SECTION 14: SOFT POWER & TOLERANCE NARRATIVE
// ============================================================================

export interface SoftPowerInstitution {
  institution: string
  role: string
}

export interface CulturalInstitution {
  institution: string
  purpose: string
}

export interface DiplomaticMilestone {
  milestone: string
  date: string
  details: string
}

export interface SoftPowerToleranceNarrative {
  toleranceNarrative: string
  toleranceStatistics: { metric: string; value: string }[]
  institutionalFramework: SoftPowerInstitution[]
  culturalInstitutions: CulturalInstitution[]
  diplomaticMilestones: DiplomaticMilestone[]
  rankings: { ranking: string; source: string }[]
}

export const softPowerToleranceNarrative: SoftPowerToleranceNarrative = {
  toleranceNarrative: '"The politics of tolerance may very well be a way for the UAE to build a tolerant narrative that diverts the attention of the international [community]" — Sciences Po research',
  toleranceStatistics: [
    { metric: 'Nationalities living in UAE', value: '200+' },
    { metric: 'Years ranked #1 choice for Arab youth', value: '8 consecutive years (ASDA\'A BCW Arab Youth Survey)' },
    { metric: 'UAE Passport Ranking', value: '1st globally (world\'s most powerful)' }
  ],
  institutionalFramework: [
    { institution: 'Ministry of Tolerance', role: 'Consolidate tolerance values' },
    { institution: 'Sawab Centre', role: 'Confront extremism and hate speech' },
    { institution: 'Hedayah', role: 'Center for countering violent extremism' },
    { institution: 'UAE Soft Power Council', role: 'Established 2017; develops strategies in science, culture, technology, humanitarian work' }
  ],
  culturalInstitutions: [
    { institution: 'Louvre Abu Dhabi', purpose: 'Cultural bridge-building (opened 2017)' },
    { institution: 'Sheikh Zayed Book Award', purpose: 'Promoting cultural values' },
    { institution: 'International Prize for Arabic Fiction', purpose: 'Promoting Arabic literature' },
    { institution: 'Guggenheim Abu Dhabi', purpose: 'Cultural engagement (2012)' }
  ],
  diplomaticMilestones: [
    { milestone: 'Human Fraternity Document', date: '2019', details: 'Signed in Abu Dhabi by Pope Francis and Grand Imam of Al Azhar' },
    { milestone: 'First Papal Visit', date: '2019', details: 'To Arabian Peninsula' },
    { milestone: 'Abraham Accords', date: '2020', details: 'UAE-Israel normalization' }
  ],
  rankings: [
    { ranking: 'Model nation Arab youth most want to live in (8th consecutive year)', source: 'ASDA\'A BCW Arab Youth Survey' },
    { ranking: 'World\'s most powerful passport (1st globally)', source: 'Global passport index' }
  ]
}

// ============================================================================
// SECTION 15: CIVIL SOCIETY & NGOS
// ============================================================================

export interface CivilSocietyLegalFramework {
  law: string
  provision: string
}

export interface CivilSocietyAssessment {
  aspect: string
  description: string
}

export interface CivilSocietyNGOs {
  legalFramework: CivilSocietyLegalFramework[]
  assessments: CivilSocietyAssessment[]
  pegasusProjectImpact: string
}

export const civilSocietyNGOs: CivilSocietyNGOs = {
  legalFramework: [
    { law: 'Political Parties', provision: 'Banned entirely' },
    { law: 'Trade Unions', provision: 'Banned' },
    { law: 'Law No. (12) of 2017', provision: 'NGOs "may not interfere in politics, or incite hatred"' },
    { law: 'Foreign Funding', provision: 'Organizations require government pre-approval for foreign funding' },
    { law: 'Meetings', provision: 'Must be open to state officials' }
  ],
  assessments: [
    { aspect: 'Space', description: 'Where those without political authority exist (family, religious institutions)' },
    { aspect: 'MENA Context', description: 'States traditionally suspicious of civil society and citizen political participation' },
    { aspect: 'Independent CSOs', description: 'Non-existent in the country' },
    { aspect: 'HRW Assessment', description: '"Independent local civil society non-existent in the country"' }
  ],
  pegasusProjectImpact: 'Widespread surveillance of civil society activists revealed. UAE implicated as client of Israel\'s NSO Group (Pegasus developer).'
}

// ============================================================================
// SECTION 16: WOMEN IN GOVERNMENT
// ============================================================================

export interface WomenRanking {
  index: string
  ranking: string
  details: string
}

export interface WomenConstitutionalProtection {
  year: string
  protection: string
}

export interface WomenLeavePolicy {
  leaveType: string
  duration: string
  year: string
}

export interface WomenParticipationStatistic {
  metric: string
  value: string
}

export interface FemaleCabinetMinister {
  minister: string
  position: string
}

export interface WomenInstitution {
  institution: string
  chair: string
  established: string
}

export interface WomenInGovernment {
  rankings: WomenRanking[]
  constitutionalLegalFramework: WomenConstitutionalProtection[]
  leavePolicies: WomenLeavePolicy[]
  currentParticipation: WomenParticipationStatistic[]
  femaleCabinetMinisters: FemaleCabinetMinister[]
  keyInstitutions: WomenInstitution[]
  internationalCommitments: { commitment: string; year: string }[]
}

export const womenInGovernment: WomenInGovernment = {
  rankings: [
    { index: 'UNDP Gender Inequality Index 2024', ranking: '7th globally, 1st regionally', details: '-' },
    { index: 'World Bank Women Rights Score', ranking: '82.5/100', details: 'vs. 53.2 regional average' },
    { index: 'Women, Peace and Security Index 2021', ranking: '1st globally', details: 'Georgetown Institute' },
    { index: 'WEF Global Gender Gap Report 2025', ranking: 'Regional leader', details: 'Political parity score: 37.2%' }
  ],
  constitutionalLegalFramework: [
    { year: 'Constitution', protection: 'Guarantees equality in property, education, health, inheritance, employment' },
    { year: '2018', protection: 'Cabinet Decree for equal pay in public sector' },
    { year: '2020', protection: 'Equal pay extended to private sector' },
    { year: '2019', protection: '50% of FNC seats held by women' },
    { year: '2019', protection: 'Equal representation in judiciary guaranteed' },
    { year: '2019', protection: 'Domestic violence protections enacted' },
    { year: '2019', protection: 'Family Protection Policy criminalizes all violence against women' },
    { year: '2023', protection: 'National Policy for Empowerment of Emirati Women - 2031 launched' }
  ],
  leavePolicies: [
    { leaveType: 'Maternity (public sector)', duration: '3 months', year: '2022' },
    { leaveType: 'Maternity (private sector)', duration: '45 days full + 15 days half pay', year: '2022' },
    { leaveType: 'Paternity leave', duration: '5 days (UAE first Arab country)', year: '2020' },
    { leaveType: 'Abortion (emergencies)', duration: 'No longer requires husband approval', year: '2023' }
  ],
  currentParticipation: [
    { metric: 'FNC Seats held by women', value: '50% (20 of 40)' },
    { metric: 'Ministerial positions', value: '6 of 28 (21%)' },
    { metric: 'Public sector workforce', value: 'Two-thirds are women' },
    { metric: 'Leadership roles', value: '30% women' },
    { metric: 'Private sector companies', value: 'Women own 1-in-10' },
    { metric: 'Trade licenses (2018-2022)', value: '44,000+ granted to women' },
    { metric: 'Emirati businesswomen', value: '23,000 managing projects worth AED 50 billion' },
    { metric: 'Private sector leadership target', value: '30% by 2025' }
  ],
  femaleCabinetMinisters: [
    { minister: 'Reem bint Ebrahim Al Hashimy', position: 'Minister of State for International Cooperation' },
    { minister: 'Shamma bint Sohail Al Mazrui', position: 'Minister of Community Empowerment' },
    { minister: 'Sarah bint Yousef Al Amiri', position: 'Minister of Education' },
    { minister: 'Dr. Amna bint Abdullah Al Dahak Al Shamsi', position: 'Minister of Climate Change and Environment' },
    { minister: 'Sana bint Mohamed Suhail', position: 'Minister of Family' },
    { minister: 'Maryam bint Ahmed Al Hammadi', position: 'Minister of State and Cabinet Secretary General' }
  ],
  keyInstitutions: [
    { institution: 'General Women\'s Union', chair: 'Sheikha Fatima bint Mubarak', established: '1975' },
    { institution: 'Gender Balance Council', chair: 'Sheikha Manal bint Mohammed', established: '2015' },
    { institution: 'National Committee to Combat Human Trafficking', chair: '-', established: '2007' }
  ],
  internationalCommitments: [
    { commitment: 'CEDAW ratified', year: '2004' },
    { commitment: 'ILO Convention 100 (Equal Remuneration)', year: '1997' },
    { commitment: 'ILO Convention 111 (Discrimination)', year: '2001' },
    { commitment: 'UN Women donations', year: '$26+ million since 2010' },
    { commitment: 'UN Women GCC Liaison Office', year: 'Opened Abu Dhabi 2016' }
  ]
}

// ============================================================================
// SECTION 17: YOUTH ENGAGEMENT
// ============================================================================

export interface FYAAttribute {
  attribute: string
  value: string
}

export interface NationalYouthStrategy {
  attribute: string
  value: string
}

export interface YouthEngagementPolicy {
  policy: string
  date: string
  details: string
}

export interface YouthCouncil {
  council: string
  type: string
}

export interface YouthInfrastructure {
  infrastructure: string
  details: string
}

export interface EmiratesChildrenParliamentSeat {
  emirate: string
  seats: number
}

export interface EmiratesChildrenParliamentGoal {
  goal: string
}

export interface YouthEngagement {
  federalYouthAuthority: FYAAttribute[]
  nationalYouthStrategy: NationalYouthStrategy
  youthEngagementPolicies: YouthEngagementPolicy[]
  fiveYouthCouncils: YouthCouncil[]
  youthInfrastructure: YouthInfrastructure[]
  rankings: { ranking: string; details: string }[]
  emiratesChildrenParliament: {
    launch: string
    directive: string
    announcedBy: string
    purpose: string
    agreement: string
    members: number
    ageRange: string
    term: string
    genderBalance: string
    specialInclusion: string
    seatDistribution: EmiratesChildrenParliamentSeat[]
    goals: string[]
  }
}

export const youthEngagement: YouthEngagement = {
  federalYouthAuthority: [
    { attribute: 'Established', value: '2018' },
    { attribute: 'Principle', value: '"Done by Youth, For Youth and With Youth"' },
    { attribute: 'Focus', value: 'Youth character, enabling environment, participation' }
  ],
  nationalYouthStrategy: {
    attribute: 'Age Range',
    value: '15-35 years'
  },
  youthEngagementPolicies: [
    { policy: 'Youth Engagement Policy', date: '-', details: 'Institutionalizes listening, data capturing, inclusive participation' },
    { policy: 'Emirati Youth Board Membership', date: 'Feb 2020', details: 'Under-30 representation on federal entity boards (33 appointed)' },
    { policy: 'Youth Participation in Official Delegations', date: 'Feb 2020', details: '-' },
    { policy: 'Youth Housing Awareness Policy', date: 'June 2020', details: '-' }
  ],
  fiveYouthCouncils: [
    { council: 'Emirates Youth Council', type: '-' },
    { council: 'Local Youth Councils', type: '-' },
    { council: 'Global Youth Council', type: '-' },
    { council: 'Inter-Ministerial Youth Council', type: '-' },
    { council: 'Corporate Youth Council', type: '-' }
  ],
  youthInfrastructure: [
    { infrastructure: 'Youth Hubs', details: '13 across UAE (first opened Dubai Sept 2017)' },
    { infrastructure: 'Youth Circles', details: 'Direct youth-government dialogue' },
    { infrastructure: 'Emirates Youth Opportunities platform', details: '-' },
    { infrastructure: 'Arab Youth Center (2017)', details: 'Runs 25+ regional initiatives annually' }
  ],
  rankings: [
    { ranking: 'Arab Youth Survey', details: 'UAE ranked first choice for Arab youth for 9 consecutive years (2020)' }
  ],
  emiratesChildrenParliament: {
    launch: 'February 2020',
    directive: 'Her Highness Sheikha Fatima bint Mubarak',
    announcedBy: 'Supreme Council for Motherhood & Childhood',
    purpose: 'Celebrate Emirati Children\'s Day; political empowerment program',
    agreement: 'With Federal National Council',
    members: 40,
    ageRange: '10-16 years',
    term: '2 years',
    genderBalance: 'Equal males and females',
    specialInclusion: 'Members of "People of Determination"',
    seatDistribution: [
      { emirate: 'Abu Dhabi', seats: 8 },
      { emirate: 'Dubai', seats: 8 },
      { emirate: 'Sharjah', seats: 6 },
      { emirate: 'Ras Al Khaimah', seats: 6 },
      { emirate: 'Ajman', seats: 4 },
      { emirate: 'Umm Al Quwain', seats: 4 },
      { emirate: 'Fujairah', seats: 4 }
    ],
    goals: [
      'Promote children\'s participation in decision-making',
      'Prepare children for societal roles and community development',
      'Familiarize children with rights under Wadeema Law and International Convention on the Rights of the Child',
      'Train children in parliamentary procedures',
      'Exchange experiences with Arab Parliament for Children',
      'Enable participation in Arab and international children\'s forums'
    ]
  }
}

// ============================================================================
// SECTION 18: BUDGET & ECONOMIC GOVERNANCE
// ============================================================================

export interface FederalBudgetHistory {
  fiscalYear: number
  budgetAED: string
  changeFromPriorYear: string
}

export interface BudgetAllocation {
  sector: string
  amountAED: string
  percentage: string
}

export interface EconomicIndicator {
  indicator: string
  value: string
  date: string
}

export interface FutureProjection {
  year: number
  projectionPercentOfGDP: string
}

export interface CurrentFinancialData {
  metric: string
  valueAEDmillion: string
}

export interface BudgetEconomicGovernance {
  federalBudgetHistory: FederalBudgetHistory[]
  budgetAllocations2025: BudgetAllocation[]
  economicIndicators: EconomicIndicator[]
  futureProjections: FutureProjection[]
  currentFinancialData: CurrentFinancialData[]
}

export const budgetEconomicGovernance: BudgetEconomicGovernance = {
  federalBudgetHistory: [
    { fiscalYear: 2026, budgetAED: '92 billion', changeFromPriorYear: '+28.7% (approved Oct 2025)' },
    { fiscalYear: 2025, budgetAED: '71.5 billion', changeFromPriorYear: '+11.6%' },
    { fiscalYear: 2024, budgetAED: '64.060 billion', changeFromPriorYear: '+1.6%' },
    { fiscalYear: 2023, budgetAED: '63.066 billion', changeFromPriorYear: '-' }
  ],
  budgetAllocations2025: [
    { sector: 'Social Development and Pensions', amountAED: '27.859 billion', percentage: '39%' },
    { sector: 'Government Affairs', amountAED: '25.570 billion', percentage: '35.7%' },
    { sector: 'Remaining', amountAED: '~18 billion', percentage: '~25.3%' }
  ],
  economicIndicators: [
    { indicator: '2024 Budget surplus', value: '5.50% of GDP', date: '2024' },
    { indicator: 'Average (2000-2024)', value: '1.23% of GDP', date: '-' },
    { indicator: 'Record high', value: '13.50% of GDP', date: '2008' },
    { indicator: 'Record low', value: '-17.70% of GDP', date: '2009' },
    { indicator: 'Government Debt', value: '32.10% of GDP', date: 'Dec 2024' }
  ],
  futureProjections: [
    { year: 2026, projectionPercentOfGDP: '2.90%' },
    { year: 2027, projectionPercentOfGDP: '2.20%' },
    { year: 2028, projectionPercentOfGDP: '3.60%' }
  ],
  currentFinancialData: [
    { metric: 'Government revenues', valueAEDmillion: '155,026' },
    { metric: 'Fiscal expenditure', valueAEDmillion: '119,063.50' },
    { metric: 'Budget value', valueAEDmillion: '35,962.50' }
  ]
}

// ============================================================================
// SECTION 19: CYBERCRIME & STATE SECURITY LAWS
// ============================================================================

export interface CybercrimeLaw {
  name: string
  purpose: string
  constitutesThreat: string
}

export interface CybercrimePenalty {
  offense: string
  penalty: string
}

export interface CybercrimeEnforcement {
  date: string
  action: string
}

export interface CybercrimeStateSecurityLaws {
  law: CybercrimeLaw
  penalties: CybercrimePenalty[]
  enforcementActions: CybercrimeEnforcement[]
  verificationRequirements: string
  infrastructureProtection: string
  stateSecurityCases: { type: string; details: string }[]
  caseStudyUAE1366_2024: {
    decisionDate: string
    court: string
    location: string
    incident: string
    applicableLaw: string
    proceedings: string
    critique: string
  }
}

export const cybercrimeStateSecurityLaws: CybercrimeStateSecurityLaws = {
  law: {
    name: 'Federal Decree-Law No. 34 of 2021',
    purpose: 'Combats rumours and cybercrimes',
    constitutesThreat: 'National security or endangers UAE security'
  },
  penalties: [
    { offense: 'Publishing/ circulating false information online', penalty: 'Imprisonment + fines starting from Dh100,000' },
    { offense: 'Reposting false information', penalty: 'May face legal action even if not original creator' },
    { offense: 'Aggravating factors', penalty: 'Penalties may increase if inciting public concern or during emergencies' }
  ],
  enforcementActions: [
    { date: 'Ongoing', action: 'Social media users referred to Federal Public Prosecution' },
    { date: 'March 2026', action: 'UAE Public Prosecutor ordered arrest of 10 individuals for publishing videos on digital platforms' }
  ],
  verificationRequirements: 'Officials stress need to avoid circulating unverified information. Public should verify information and rely only on official government sources.',
  infrastructureProtection: 'Dubai Police urge public to avoid photographing infrastructure and security locations. Such images could affect national security.',
  stateSecurityCases: [
    { type: 'Appeals Court rulings', details: 'Upholds jail terms in state security, cyber breach cases' },
    { type: 'Expedited trials', details: 'For publishing content deemed threatening to national security' }
  ],
  caseStudyUAE1366_2024: {
    decisionDate: 'July 3, 2025',
    court: 'UAE Federal Supreme Court - Criminal',
    location: 'Abu Dhabi',
    incident: 'Accused photographed a security patrol while pointing their middle finger at it. Published image on personal Instagram account. Charged with publishing photos via information technology with intent to mock state authorities.',
    applicableLaw: 'Federal Decree-Law No. 34/2021 (Articles 1, 25, 56)',
    proceedings: 'Court of First Instance (May 31, 2024): Convicted, sentenced to 1 year imprisonment, mobile phone confiscated, data deleted. Both prosecution (Appeal No. 1114/2024) and accused (Appeal No. 1153/2024) appealed. Appeal Court decision: August 19, 2024.',
    critique: 'Cybercrime laws make it "all too easy for anyone to be maliciously prosecuted" for private messages or social media posts.'
  }
}

// ============================================================================
// SECTION 20: PRESS FREEDOM
// ============================================================================

export interface RSFIndex {
  year: number
  ranking: string
  score?: string
  details?: string
}

export interface PressFreedomIssue {
  issue: string
  details: string
}

export interface PressFreedom {
  rsfIndex: RSFIndex[]
  pressFreedomIssues: PressFreedomIssue[]
}

export const pressFreedom: PressFreedom = {
  rsfIndex: [
    { year: 2024, ranking: '164th out of 180 countries', details: '-' },
    { year: 2025, ranking: '17th among worst countries for press freedom', score: '26.91 points', details: '12.1% decrease from 2024' }
  ],
  pressFreedomIssues: [
    { issue: 'Media censorship', details: 'Extensive' },
    { issue: 'Self-censorship', details: 'Journalists self-censor due to legal and physical risks' },
    { issue: 'Online journalists', details: 'Practice self-censorship' },
    { issue: 'Pro-government commentators', details: 'Government-employed or sponsored commentators manipulate online discourse' },
    { issue: 'Social media', details: 'Restricted' },
    { issue: 'Bloggers', details: 'Long prison sentences (Ahmed Mansoor: 10 years for social media posts)' }
  ]
}

// ============================================================================
// SECTION 21: ELECTORAL SYSTEM DETAILS
// ============================================================================

export interface ElectoralSystemOverview {
  attribute: string
  value: string
}

export interface ElectoralCollegeEvolution {
  year: number
  size: number
  changeNotes: string
}

export interface VotingMethod {
  method: string
  percentUsed: number
}

export interface CandidateEligibility {
  requirement: string
  details: string
}

export interface ElectionAdministration {
  body: string
  role: string
}

export interface ElectoralSystemDetails {
  overview: ElectoralSystemOverview[]
  electoralCollegeEvolution: ElectoralCollegeEvolution[]
  votingMethods: VotingMethod[]
  genderQuotaImplementation: { year: string; rule: string }[]
  candidateEligibility: CandidateEligibility[]
  electionAdministration: ElectionAdministration[]
}

export const electoralSystemDetails: ElectoralSystemDetails = {
  overview: [
    { attribute: 'System Name', value: 'Single Non-Transferable Vote (SNTV)' },
    { attribute: 'Electoral Colleges', value: '7 (one per emirate)' },
    { attribute: 'Ballot Structure', value: 'Each voter casts one vote for one candidate in their emirate\'s college' },
    { attribute: 'Party Status', value: 'Banned - all candidates run as independents' }
  ],
  electoralCollegeEvolution: [
    { year: 2006, size: 6689, changeNotes: 'First election year' },
    { year: 2011, size: 129274, changeNotes: '+1,832% increase' },
    { year: 2015, size: 0, changeNotes: 'Not held' },
    { year: 2019, size: 337738, changeNotes: '+161% increase' },
    { year: 2023, size: 398879, changeNotes: '+18% increase' }
  ],
  votingMethods: [
    { method: 'Electronic/Remote voting', percentUsed: 92.69 },
    { method: 'In-person voting', percentUsed: 7.31 }
  ],
  genderQuotaImplementation: [
    { year: '2019+', rule: '50% of all 40 FNC seats must be women' },
    { year: '2023', rule: 'Most emirate committees allocated half their elected seats to top candidates of each gender' }
  ],
  candidateEligibility: [
    { requirement: 'Citizenship', details: 'Must be Emirati citizen' },
    { requirement: 'Residence', details: 'Must permanently reside in emirate represented' },
    { requirement: 'Age', details: 'Must meet minimum age requirement' },
    { requirement: 'Criminal record', details: 'No serious criminal convictions' },
    { requirement: 'Political parties', details: 'Cannot be member of any political party' }
  ],
  electionAdministration: [
    { body: 'National Elections Committee', role: 'Organizes and supervises elections' },
    { body: 'Emirates election committees', role: 'Manage voting in each emirate' }
  ]
}

// ============================================================================
// SECTION 22: DASHBOARD-READY DATA TABLES
// ============================================================================

export interface DashboardMetric {
  metric: string
  value: string
  source: string
  date: string
}

export interface DashboardFreedomHouse {
  index: string
  score: number
  max: number
  status: string
}

export interface DashboardPrisonerCount {
  category: string
  count: string
  source: string
  date: string
}

export interface DashboardSurveillance {
  capability: string
  developer: string
  targetScope: string
}

export interface DashboardInfluenceSpending {
  period: string
  amount: string
  activities?: number
  firms?: string
}

export interface DashboardVisionFramework {
  framework: string
  target: string
  timeline: string
}

export interface DashboardWomenParticipation {
  metric: string
  value: string
  ranking: string
}

export interface DashboardPressFreedom {
  year: number
  ranking: string
  score?: string
}

export interface DashboardDataTables {
  uaeGovernmentKeyMetrics: DashboardMetric[]
  freedomHouseScores2025: DashboardFreedomHouse[]
  humanRightsPrisonerCounts: DashboardPrisonerCount[]
  surveillanceCapabilities: DashboardSurveillance[]
  influenceOperationsSpending: DashboardInfluenceSpending[]
  visionFrameworkTargets: DashboardVisionFramework[]
  womenParticipationMetrics: DashboardWomenParticipation[]
  pressFreedomRankings: DashboardPressFreedom[]
}

export const dashboardDataTables: DashboardDataTables = {
  uaeGovernmentKeyMetrics: [
    { metric: 'Population', value: '9,441,000', source: 'Freedom House', date: '2025' },
    { metric: 'Federal Budget (2025)', value: 'AED 71.5 billion', source: 'Ministry of Finance', date: '2024' },
    { metric: 'FNC Members', value: '40', source: 'UAE Government', date: '2023' },
    { metric: 'Electoral College', value: '398,879', source: 'Wikipedia', date: '2023' },
    { metric: 'Voter Turnout (2023)', value: '44.00%', source: 'Wikipedia', date: '2023' },
    { metric: 'Women in FNC', value: '50%', source: 'UAE Government', date: '2019+' },
    { metric: 'Ministerial Positions', value: '52', source: 'Wikipedia', date: '2025' },
    { metric: 'Women in Cabinet', value: '6 of 28 (21%)', source: 'UAE Government', date: '2025' }
  ],
  freedomHouseScores2025: [
    { index: 'Global Freedom Score', score: 18, max: 100, status: 'Not Free' },
    { index: 'Political Rights', score: 5, max: 40, status: 'Not Free' },
    { index: 'Civil Liberties', score: 13, max: 60, status: 'Not Free' },
    { index: 'Internet Freedom', score: 28, max: 100, status: 'Not Free' }
  ],
  humanRightsPrisonerCounts: [
    { category: 'UAE94 defendants', count: '94', source: 'HRW', date: '2012' },
    { category: 'UAE94 convicted', count: '69', source: 'Amnesty', date: '2013' },
    { category: 'UAE94 still imprisoned (est.)', count: '55-60', source: 'HRW/Amnesty', date: '2024' },
    { category: 'Prisoners of conscience', count: '26', source: 'Amnesty', date: '2024' },
    { category: 'Life sentences (July 2024)', count: '43', source: 'Freedom House', date: '2024' }
  ],
  surveillanceCapabilities: [
    { capability: 'Karma Spyware', developer: 'DarkMatter', targetScope: 'Global (iPhones)' },
    { capability: 'Pegasus', developer: 'NSO Group', targetScope: 'Global' },
    { capability: 'Project Raven', developer: 'DarkMatter + ex-US intelligence', targetScope: 'Governments, activists' }
  ],
  influenceOperationsSpending: [
    { period: 'Since 2016', amount: '$157+ million', firms: '25+' },
    { period: '2020-2021', amount: '$64+ million', activities: 10765, firms: '25' },
    { period: 'Congressional contacts', amount: '7,251', firms: '-' }
  ],
  visionFrameworkTargets: [
    { framework: 'We the UAE 2031', target: 'AED 3 trillion (from 1.49T)', timeline: '2031' },
    { framework: 'Centennial 2071', target: 'Best nation globally', timeline: '2071' }
  ],
  womenParticipationMetrics: [
    { metric: 'UNDP Gender Inequality Index', value: '7th globally', ranking: '1st regionally' },
    { metric: 'Women in Cabinet', value: '21%', ranking: 'Highest in MENA' },
    { metric: 'Women in FNC', value: '50%', ranking: 'Parity' },
    { metric: 'Public sector women', value: '66%', ranking: '-' }
  ],
  pressFreedomRankings: [
    { year: 2024, ranking: '164th/180' },
    { year: 2025, ranking: '17th worst', score: '26.91' }
  ]
}

// ============================================================================
// SOURCE TIERS
// ============================================================================

export interface SourceTier {
  source: string
  url: string
}

export const sourceTiers = {
  tier0: [
    { source: 'u.ae', url: 'https://u.ae/en/about-the-uae/the-uae-government/political-system-and-government' },
    { source: 'wam.ae', url: 'https://www.wam.ae/' },
    { source: 'Ministry of Finance', url: 'https://mof.gov.ae/en/public-finance/uae-federal-budget/uae-federal-budget-2025/' },
    { source: 'UAE Cabinet', url: 'https://uaecabinet.ae' },
    { source: 'Mohamed bin Zayed Official', url: 'https://www.mohamedbinzayed.ae/en/biography' }
  ] as SourceTier[],
  tier1: [
    { source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Federal_National_Council' },
    { source: 'Reuters', url: '(Aggregated sources)' },
    { source: 'Al Jazeera', url: 'https://www.aljazeera.com/news/2014/11/16/uae-lists-scores-of-groups-as-terrorists' }
  ] as SourceTier[],
  tier2: [
    { source: 'Freedom House', url: 'https://freedomhouse.org/country/united-arab-emirates/freedom-world/2025' },
    { source: 'Human Rights Watch', url: 'https://www.hrw.org/report/2021/01/27/persecution-ahmed-mansoor' },
    { source: 'Amnesty International', url: 'https://www.amnesty.org/en/petition/free-the-uaes-wrongfully-held-prisoners/' },
    { source: 'RSF', url: 'https://rsf.org/en/country/united-arab-emirates' }
  ] as SourceTier[],
  tier3: [
    { source: 'Citizen Lab', url: 'https://citizenlab.ca/research/hide-and-seek-tracking-nso-groups-pegasus-spyware-to-operations-in-45-countries/' },
    { source: 'Sciences Po', url: 'https://www.sciencespo.fr/kuwait-program/wp-content/uploads/2021/11/sciencespo-kuwait-program-2021-boutane-dhiya.pdf' },
    { source: 'IPU', url: 'https://data.ipu.org/parliament/AE/AE-LC01/election/AE-LC01-E20231007' }
  ] as SourceTier[],
  tier4: [
    { source: 'Gulf News', url: 'https://gulfnews.com/opinion/op-eds/tolerance-and-uae-soft-power-1.65628004' },
    { source: 'Khaleej Times', url: 'https://www.khaleejtimes.com/uae/uae-fnc-elections-2023-initial-results-winners-announced' },
    { source: 'Middle East Eye', url: 'https://www.middleeasteye.net/big-story/muslim-brotherhood-emirates-anatomy-crackdown' },
    { source: 'Responsible Statecraft', url: 'https://responsiblestatecraft.org/2022/12/06/how-the-uae-turns-its-interests-into-us-policy/' },
    { source: 'Quincy Institute', url: 'https://quincyinst.org/research/the-emirati-lobby-in-america/' }
  ] as SourceTier[]
}

// ============================================================================
// SENTIMENT ANALYSIS
// ============================================================================

export interface SentimentAnalysis {
  governmentNarrative: string[]
  humanRightsAssessment: string[]
  neutralContextual: string[]
}

export const sentimentAnalysis: SentimentAnalysis = {
  governmentNarrative: [
    'Tolerance and coexistence achievements',
    'Women\'s empowerment progress',
    'Youth engagement initiatives',
    'Economic diversification success',
    'Vision framework ambitions',
    'Regional leadership role'
  ],
  humanRightsAssessment: [
    'Political prisoner count (26+ prisoners of conscience)',
    'Ahmed Mansoor case (10-year sentence, torture)',
    'UAE94 mass trial (69 convicted, 55+ still imprisoned)',
    'Freedom House score (18/100 - Not Free)',
    'Press freedom ranking (164th of 180)',
    'Surveillance programs (DarkMatter, Pegasus)',
    'Influence operations ($157+ million lobbying)'
  ],
  neutralContextual: [
    'FNC elections (consultative body with limited powers)',
    'Women\'s participation (high within autocratic framework)',
    'Budget increases (social development focus)'
  ]
}

// ============================================================================
// UAE RELEVANCE ASSESSMENT
// ============================================================================

export interface UAERelevanceAssessment {
  criticalTopics: string[]
  uniqueCharacteristics: string[]
}

export const uaeRelevanceAssessment: UAERelevanceAssessment = {
  criticalTopics: [
    'Presidential succession (MBZ since 2022)',
    'FNC electoral system (limited parliamentary function)',
    'Human rights状况 (systematic violations documented)',
    'Surveillance capabilities (DarkMatter, Pegasus)',
    'Influence operations (US lobbying, FARA)',
    'Vision frameworks (2031, 2071)'
  ],
  uniqueCharacteristics: [
    'Federal structure with 7 emirates',
    'Exclusive veto power for Abu Dhabi and Dubai',
    'Highest women representation in MENA',
    'No political parties (all independents)',
    '90% non-citizen population',
    'Tolerance as soft power centerpiece'
  ]
}

// ============================================================================
// REPORT METADATA
// ============================================================================

export const reportMetadata = {
  reportCompiled: '2026-04-27',
  enrichmentCompleted: 'Yes (URL content extraction from 45+ sources)',
  factsDocumented: 500,
  sourceURLs: 60,
  dataTables: 8,
  caseStudies: '3 (Ahmed Mansoor, UAE94, DarkMatter)'
}

// ============================================================================
// MAIN EXPORT - UNIFIED DATA OBJECT
// ============================================================================

export interface PoliticsData {
  id: string
  title: string
  titleAr: string
  description: string
  federalGovernmentStructure: FederalGovernmentStructure
  presidentialLeadership: PresidentialLeadership
  federalNationalCouncil: FederalNationalCouncil
  fncElections2023: FNCElections2023
  cabinetGovernance: CabinetGovernance
  humanRightsPoliticalPrisoners: HumanRightsPoliticalPrisoners
  ahmedMansoorCaseStudy: AhmedMansoorCaseStudy
  uae94MassTrial: UAE94MassTrial
  alIslahMuslimBrotherhood: AlIslahMuslimBrotherhood
  surveillanceState: SurveillanceState
  uaeInfluenceOperations: UAEInfluenceOperations
  freedomHouseScores: FreedomHouseScoresDetail
  visionFrameworks: VisionFrameworks
  softPowerToleranceNarrative: SoftPowerToleranceNarrative
  civilSocietyNGOs: CivilSocietyNGOs
  womenInGovernment: WomenInGovernment
  youthEngagement: YouthEngagement
  budgetEconomicGovernance: BudgetEconomicGovernance
  cybercrimeStateSecurityLaws: CybercrimeStateSecurityLaws
  pressFreedom: PressFreedom
  electoralSystemDetails: ElectoralSystemDetails
  dashboardDataTables: DashboardDataTables
  sourceTiers: typeof sourceTiers
  sentimentAnalysis: SentimentAnalysis
  uaeRelevanceAssessment: UAERelevanceAssessment
  reportMetadata: typeof reportMetadata
}

export const politicsData: PoliticsData = {
  id: 'topic-2-1',
  title: 'Politics & Governance',
  titleAr: 'السياسة والحوكمة',
  description: 'Federal government structure, presidential leadership, FNC elections, human rights, surveillance state, influence operations, vision frameworks, press freedom',
  federalGovernmentStructure,
  presidentialLeadership,
  federalNationalCouncil,
  fncElections2023,
  cabinetGovernance,
  humanRightsPoliticalPrisoners,
  ahmedMansoorCaseStudy,
  uae94MassTrial,
  alIslahMuslimBrotherhood,
  surveillanceState,
  uaeInfluenceOperations,
  freedomHouseScores,
  visionFrameworks,
  softPowerToleranceNarrative,
  civilSocietyNGOs,
  womenInGovernment,
  youthEngagement,
  budgetEconomicGovernance,
  cybercrimeStateSecurityLaws,
  pressFreedom,
  electoralSystemDetails,
  dashboardDataTables,
  sourceTiers,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  reportMetadata
}

export default politicsData
