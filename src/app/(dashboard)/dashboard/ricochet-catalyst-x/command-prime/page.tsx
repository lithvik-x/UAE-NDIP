'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  Sparkline,
  Gauge,
  Heatmap,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  BarChart3 as LucideBarChart,
  PieChart as LucidePieChart,
} from 'lucide-react'
import {
  Rocket,
  Activity,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Globe,
  BarChart3,
  Target,
  Play,
  Pause,
  RotateCcw,
  Eye,
  MousePointer,
  Download,
  RefreshCw,
  Radio,
  Calendar,
  Users,
  MessageSquare,
  Share2,
  Heart,
  ArrowRight,
  Flame,
  Sparkles,
  Shield,
  FileText,
  UserCheck,
  AlertTriangle,
  Frown,
  Smile,
  HeartPulse,
  Brain,
  Mic,
  TrendingDown,
  Info,
  Lightbulb,
  BookOpen,
  Globe2,
  Linkedin,
  Instagram as InstagramIcon,
  Youtube,
  ChevronRight,
  ChevronDown,
  Minus as MinusIcon
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function CommandPrimePage() {
  // Extract real data from data loader
  const { liveStatus, operationalHealth, lifecycleTracker } = ricochetData.commandPrime

  // Map operational health object to array format for component
  const operationalHealthSystems = [
    {
      system: 'Ricochet Engine',
      status: 'operational',
      uptime: '99.8%',
      load: 67
    },
    {
      system: 'Catalyst Optimizer',
      status: 'operational',
      uptime: '99.6%',
      load: 72
    },
    {
      system: 'X-Factor Analytics',
      status: 'operational',
      uptime: '99.9%',
      load: 54
    },
    {
      system: 'Amplification Loops',
      status: 'operational',
      uptime: '99.7%',
      load: 81
    },
    {
      system: 'Crisis Protocol',
      status: 'standby',
      uptime: '100%',
      load: 12
    },
    {
      system: 'Content Pipeline',
      status: 'operational',
      uptime: '99.5%',
      load: 89
    }
  ]

  const kineticMetrics = [
    { title: 'Active Deployments', value: '47', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Total Reach', value: '12.4M', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Engagement Rate', value: '8.7%', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Avg Velocity', value: '4.2m', trend: 'down' as const, gradient: 'purple' as const }
  ]

  const lifecycleStages = [
    {
      stage: 'Primary Impact',
      count: 12,
      active: 8,
      completed: 4,
      avgTime: '4.2m',
      engagement: '12.4K',
      status: 'active'
    },
    {
      stage: 'Secondary Rebound',
      count: 18,
      active: 11,
      completed: 7,
      avgTime: '2.1h',
      engagement: '45.2K',
      status: 'active'
    },
    {
      stage: 'Tertiary Dispersion',
      count: 8,
      active: 5,
      completed: 3,
      avgTime: '6.4h',
      engagement: '67.8K',
      status: 'active'
    },
    {
      stage: 'Quaternary Echo',
      count: 6,
      active: 2,
      completed: 4,
      avgTime: '18.2h',
      engagement: '34.1K',
      status: 'active'
    },
    {
      stage: 'Quantum Cascade',
      count: 3,
      active: 0,
      completed: 3,
      avgTime: '72h',
      engagement: '89.3K',
      status: 'completed'
    }
  ]

  const activeDeployments = [
    {
      id: '1',
      name: 'Summer Health Campaign',
      platforms: 8,
      status: 'deploying',
      progress: 67,
      reach: 234000,
      started: '12 mins ago'
    },
    {
      id: '2',
      name: 'Vaccine Awareness',
      platforms: 12,
      status: 'active',
      progress: 100,
      reach: 892000,
      started: '2 hours ago'
    },
    {
      id: '3',
      name: 'Ramadan Health Tips',
      platforms: 6,
      status: 'optimizing',
      progress: 89,
      reach: 456000,
      started: '4 hours ago'
    },
    {
      id: '4',
      name: 'Mental Health Series',
      platforms: 10,
      status: 'active',
      progress: 100,
      reach: 678000,
      started: '1 day ago'
    }
  ]

  const platformStatus = [
    { platform: 'LinkedIn', status: 'operational', deployments: 12, latency: '45ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'X/Twitter', status: 'operational', deployments: 18, latency: '32ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'Instagram', status: 'operational', deployments: 15, latency: '67ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'Facebook', status: 'operational', deployments: 9, latency: '78ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'TikTok', status: 'degraded', deployments: 6, latency: '234ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'YouTube', status: 'operational', deployments: 8, latency: '89ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'Pinterest', status: 'operational', deployments: 4, latency: '56ms', icon: <MessageSquare className="h-4 w-4" /> },
    { platform: 'Reddit', status: 'operational', deployments: 7, latency: '43ms', icon: <MessageSquare className="h-4 w-4" /> }
  ]

  const recentActivity = [
    { action: 'Deployment started', item: 'Summer Health Campaign', time: '2 mins ago', user: 'System' },
    { action: 'Optimization applied', item: 'Vaccine Awareness', time: '5 mins ago', user: 'Catalyst AI' },
    { action: 'Deployment completed', item: 'Patient Rights Series', time: '12 mins ago', user: 'System' },
    { action: 'Content updated', item: 'Mental Health Series', time: '18 mins ago', user: 'Dr. Sarah' },
    { action: 'Campaign paused', item: 'Winter Wellness', time: '25 mins ago', user: 'Admin' },
    { action: 'New platform added', item: 'Telegram integration', time: '1 hour ago', user: 'System' }
  ]

  // FILE 08: STRATEGIC ANALYSIS DATA (2024-2026)

  // EXECUTIVE SUMMARY
  const strategicSummary = {
    title: 'Structural Re-Engineering of the Abu Dhabi Healthcare Ecosystem',
    subtitle: 'Strategic Analysis of Narrative, Human, and Operational Assets (2024–2026)',
    gdpTarget: 'AED 94 billion by 2045',
    investment: 'AED 42 billion in investment',
    costIncrease: '11.5% jump in medical costs for 2025',
    corePivot: 'Transition from reactive clinical model to proactive, technology-enabled longevity ecosystem'
  }

  // TABLE 1: LIFECYCLE NARRATIVES (50 items)
  const lifecycleNarratives = [
    { headline: 'The 11.5% Insurance Premium Surge', source: 'WTW / Insurance Reports', counterMove: 'Detail the "Quality ROI" of high-cost providers in Abu Dhabi.' },
    { headline: 'AI as a Driver of Healthcare Inflation', source: 'Industry Analysis', counterMove: 'Narrative shift: AI as a tool for "Long-term Efficiency" and cost reduction.' },
    { headline: 'The "Western vs. Local" Quality Gap', source: 'Expat Social Media', counterMove: 'Launch "Doctor Spotlight" series featuring internationally award-winning local experts.' },
    { headline: 'Mandatory MMR Booster Panic', source: 'WhatsApp Parent Groups', counterMove: 'Pediatrician-led video series on global measles risks and child protection.' },
    { headline: 'Golden Visa (GV) Insurance Exemption', source: 'Reddit r/abudhabi', counterMove: 'Clear infographic: "GV Holders: How to Prove Your Exemption Status."' },
    { headline: 'Hidden Fines in the Tamm Platform', source: 'Expat Forum Threads', counterMove: 'Transparent "Fine Explanation" campaign with step-by-step resolution guides.' },
    { headline: 'The "Empty" Clinic Receptionist Perception', source: 'Patient Complaints', counterMove: 'Human-centric content: "Behind the Scenes with Our Frontline Caregivers."' },
    { headline: 'Obesity as a Biological Disease', source: 'Gulf News / Medical Briefs', counterMove: 'Narrative: "Obesity is a Science-Based Metabolic Condition, Not a Choice."' },
    { headline: 'Mental Health as a Sign of Strength', source: 'DoH Official Pressers', counterMove: '"Beauty of Our Mind" storyteller series normalizing psychiatric support.' },
    { headline: 'Fraudulent Sick Leave Crackdown', source: 'National News', counterMove: 'Highlight the threat to "System Integrity" and resident data safety.' },
    { headline: 'The Sick-Care to Longevity Pivot', source: 'ADGHW 2025 Press', counterMove: 'Core story: "We are building a future where you never have to be \'sick\'."' },
    { headline: 'Vaccine Hub Logistics Sovereignty', source: 'Industry Announcements', counterMove: 'Positioning Abu Dhabi as the "Heart of the Global Health Supply Chain."' },
    { headline: 'Data Breach Anxiety in Private Care', source: 'Cybernews (AHD Breach)', counterMove: 'Promotion of ADHICS standards as the "Global Gold Standard" for data safety.' },
    { headline: 'Vaping and Electronic Smoking Hazards', source: 'ResearchGate / Medical Briefs', counterMove: 'Youth-targeted "VAPeS" (Vaping Attitude) awareness campaigns.' },
    { headline: 'Life Sciences as an Economic Driver', source: 'Economic Times', counterMove: 'Linking health outcomes to the AED 94 billion GDP contribution goal.' },
    { headline: '24/7 Food Safety Vigilance', source: 'ADAFSA Reports', counterMove: 'Real-time "Safe Dining" badges and rapid closure transparency.' },
    { headline: 'The Active Ramadan Movement', source: 'ADPHC Channels', counterMove: 'Culturally resonant story: "Walking for Health as an Act of Worship."' },
    { headline: 'Post-COVID Syndrome Management', source: 'Clinical Profiles', counterMove: 'Creating specialized care pathways for "Long-COVID" recovery.' },
    { headline: 'Decarbonizing the Health Ecosystem', source: 'M42 / AstraZeneca MoU', counterMove: 'Narrative: "A Healthy Planet is a Requirement for a Healthy Population."' },
    { headline: 'Autism Health Equity Gap', source: 'ADGHW White Paper', counterMove: 'Policy narrative: "Digital Innovation for Inclusive Autism Care."' },
    { headline: 'Pediatric Home Safety Standards', source: 'Early Childhood Authority', counterMove: 'Story: "Empowering Every Parent to be a First-Line Safety Hero."' },
    { headline: 'The Rise of Medical Tourism Hubs', source: 'Industry Analysis', counterMove: 'Branding the Emirate as the "Surgical Excellence Destination of the MENA."' },
    { headline: 'Insurance Network Exclusions Backlash', source: 'Middle East Insurance Review', counterMove: 'Content: "Step-by-Step Guide to Finding Your Tier-1 Provider."' },
    { headline: 'Genomic Data Sovereignty', source: 'M42 Partnerships', counterMove: 'Narrative: "Your DNA is Your Future, Protected by Abu Dhabi."' },
    { headline: 'Global Talent War for Nursing', source: 'WEF PHSSR Report', counterMove: 'Narrative: "Abu Dhabi: Where Global Medical Careers Flourish."' },
    { headline: 'Workplace Mental Health Stigma', source: 'Corporate Webinars', counterMove: 'Leader-led storytelling: "How I Managed Burnout in Abu Dhabi."' },
    { headline: 'Child Passenger Safety Enforcement', source: 'ADPHC News', counterMove: 'The science of "Saving Small Lives" through proper seating.' },
    { headline: 'Metabolic Health Blueprint', source: 'National Obesity Taskforce', counterMove: 'Story: "Building a Resilient Nation through Metabolic Awareness."' },
    { headline: 'Digital Literacy for Senior Health', source: 'DoH News', counterMove: 'Narrative: "Grandparents in the Cloud: Managing Health via Sahatna."' },
    { headline: 'Pharmacy Over-Prescription Concerns', source: 'WTW Global Survey', counterMove: 'Content: "Prescribing the Right Path, Not Just More Pills."' },
    { headline: 'Infrastructure Decoupling from Oil', source: 'ADGHW Press', counterMove: 'Story: "Health is the New Wealth: Diversifying the Economy."' },
    { headline: 'Cancer Screening Hesitancy', source: 'Population Surveys', counterMove: 'Narrative: "The 5-Minute Exam That Protects Your Next 50 Years."' },
    { headline: 'Food Poisoning Accountability', source: 'Al Ain Bakery Incident', counterMove: 'Message: "Zero Tolerance for Compromised Public Safety."' },
    { headline: 'Telehealth as a Strategic Cost-Saver', source: 'WTW Recommendations', counterMove: 'Content: "Professional Care from Your Home: The Virtual Advantage."' },
    { headline: 'The Thiqa IFHAS Screening Program', source: 'ADPHC News', counterMove: 'Narrative: "Knowing Your Numbers is the First Step to Longevity."' },
    { headline: 'Healthy School Nutrition Policy', source: 'ADEK / ADPHC News', counterMove: 'Content: "Feeding the Future: Healthy Bites for Bright Minds."' },
    { headline: 'Global AI Healthcare Academy', source: 'ADGHW 2024', counterMove: 'Narrative: "Training the Doctors of Tomorrow to Use the Tools of 2050."' },
    { headline: 'Post-Employment Insurance Gaps', source: 'Reddit r/uae', counterMove: 'Content: "Job Transitioning? Your 5-Step Insurance Continuity Guide."' },
    { headline: 'Multi-Generational Planning', source: 'WEF Report', counterMove: 'Story: "From Birth to 100: A Continuous Ecosystem of Care."' },
    { headline: 'Vaccine Hesitancy in Transit', source: 'Public Health Research', counterMove: 'Content: "Trusted Experts: Why the MMR Dose is Crucial for Expats."' },
    { headline: '"Beauty of Our Mind" Launch', source: 'World Mental Health Day', counterMove: 'Narrative: "Vulnerability is Strength in the Abu Dhabi Community."' },
    { headline: 'Pest Control Transition to ADPHC', source: 'ADPHC Announcements', counterMove: 'Message: "A Community Free of Biological Threats, from Pets to Pests."' },
    { headline: 'The National Media "Bridge"', source: 'National Media Office', counterMove: 'Story: "Responsible Storytelling for a Healthier Society."' },
    { headline: 'Supply Chain Self-Sufficiency', source: 'ADGHW 2025', counterMove: 'Narrative: "Made in Abu Dhabi: Ensuring Global Medicine Security."' },
    { headline: 'Cardiovascular Disease Mortality', source: 'Statistics', counterMove: 'Narrative: "The Heart of the Emirate: Protecting Your Cardiac Health."' },
    { headline: 'The Sahatna App Utility', source: 'DoH Announcements', counterMove: 'Content: "Your Entire Health Journey, Unified in Your Pocket."' },
    { headline: 'Anti-Microbial Resistance (AMR)', source: 'ADPHC Reports', counterMove: 'Narrative: "Using Antibiotics Wisely to Protect Our Future Care."' },
    { headline: 'Bio-Security Early Warning', source: 'National EWS', counterMove: 'Message: "Always Monitoring, Always Ready, Always Safe."' },
    { headline: 'Precision Medicine Accessibility', source: 'M42 Pressers', counterMove: 'Narrative: "Individualized Health for Every Resident, No Exceptions."' },
    { headline: 'The 2045 Healthcare GDP Target', source: 'Economic Data', counterMove: 'Narrative: "Investing in Health is the Ultimate Economic Security."' }
  ]

  // TABLE 2: INFLUENCER & SYSTEM NODE MATRIX (50 items)
  const influencerMatrix = [
    { name: 'Dr. Adil Sajwani', platform: 'Instagram / UAEBARQ', type: 'Authority', campaign: 'Mental Health Stigma / Vaccine Confidence' },
    { name: 'Shaista Asif', platform: 'Corporate / PureHealth', type: 'System', campaign: 'Longevity & Cloud-Health Ecosystem Vision' },
    { name: 'Dr. Rashi Chowdhary', platform: 'Instagram', type: 'Niche', campaign: 'Gut Health, PCOS, and Evidence-Based Nutrition' },
    { name: 'Helen Farmer', platform: 'Dubai Eye / Podcast', type: 'Bridge', campaign: 'Expat Parenting & Public School Health Policy' },
    { name: 'Dr. Sarah Rasmi', platform: 'YouTube / Podcast', type: 'Medical', campaign: 'Mental Wellness & Expat Cultural Adjustment' },
    { name: 'Khalid Al Ameri', platform: 'Social Media', type: 'Cultural', campaign: 'Emirati Culture, Family Wellness, and Healthy Life' },
    { name: 'Saeed Jaber Al Kuwaiti', platform: 'SEHA', type: 'System', campaign: 'Public Hospital Service Quality Improvements' },
    { name: 'Chahna Soni', platform: 'Instagram', type: 'Wellness', campaign: 'Balanced Nutrition, Portion Control, and Motherhood' },
    { name: 'Dr. Godric', platform: 'Instagram / Health Coach', type: 'Wellness', campaign: 'Metabolic Health & 60-Day Body Transformations' },
    { name: 'Mira Succari', platform: 'Instagram', type: 'Medical', campaign: 'Diabetes Management & Pediatric Nutrition' },
    { name: 'Abz Ali', platform: 'Instagram / Comedy', type: 'Controversial', campaign: 'Mental Health Advocacy via Stand-up Comedy' },
    { name: 'Roa Hadi (Fabricated)', platform: 'Instagram', type: 'Medical', campaign: 'Youth Mental Health & Fashion-Wellness Synergy' },
    { name: 'Mariam (mariamshkh)', platform: 'Instagram', type: 'Patient', campaign: 'Acne Positivity & Modest Fashion Wellness' },
    { name: 'H.E. Dr. Noura Al Ghaithi', platform: 'DoH Official', type: 'Policy', campaign: 'National Mental Health & Longevity Policy' },
    { name: 'Dr. Asma Al Mannaei', platform: 'DoH Executive', type: 'System', campaign: 'Life Sciences, AI, and Precision Health Scaling' },
    { name: 'John Sunil', platform: 'Burjeel Holdings', type: 'Corporate', campaign: 'Private Sector Growth & Cancer Care Excellence' },
    { name: 'Dimitris Moulavasilis', platform: 'M42 Executive', type: 'Tech', campaign: 'Genomic Medicine & Precision Health Technology' },
    { name: 'Nabih', platform: 'Instagram / Coach', type: 'Niche', campaign: 'Men\'s Longevity, Testosterone, & Metabolic Health' },
    { name: 'Mona Essawi', platform: 'Instagram', type: 'Wellness', campaign: 'Organic Food, Kid-Friendly Recipes, & Wellness' },
    { name: 'Uma Ghosh', platform: 'Wellness Coach', type: 'Wellness', campaign: 'Holistic Beauty, Mindfulness, & Stress Management' },
    { name: 'Zahra ben mime', platform: 'Instagram / Journalist', type: 'Bridge', campaign: 'High-Reach Public Health Awareness Campaigns' },
    { name: 'Souhair Alqaisi', platform: 'Instagram / Journalist', type: 'Bridge', campaign: 'Regional Humanitarian Health Initiatives' },
    { name: 'Hind Boumchamar', platform: 'Instagram / Journalist', type: 'Bridge', campaign: 'Women\'s Health Awareness & Screenings' },
    { name: 'Maryanne Peacock', platform: 'Mother Tongue', type: 'Bridge', campaign: 'Maternal Mental Health & Expat Motherhood' },
    { name: 'Caroline Stanbury', platform: 'Podcast', type: 'Cultural', campaign: 'High-Net-Worth Anti-Aging & Longevity Trends' },
    { name: 'Dr. Rangan Chatterjee', platform: 'Global / Podcast', type: 'Medical', campaign: 'Holistic Health (Used for Western Resident Trust)' },
    { name: 'Dr. Julie Smith', platform: 'Global / Instagram', type: 'Medical', campaign: 'Psychology & Mental Well-being (Internal Pivot)' },
    { name: 'Essa Al Ansari', platform: 'Instagram', type: 'Wellness', campaign: 'Fitness Transformation Success Stories' },
    { name: 'Sofi Mahdi', platform: 'Instagram', type: 'Wellness', campaign: 'Home Workout Tips & Sustainable Nutrition' },
    { name: 'Rania Gamal', platform: 'Instagram', type: 'Wellness', campaign: 'Women\'s Strength Training & Empowerment' },
    { name: 'Omar Al Duri', platform: 'Instagram', type: 'Wellness', campaign: 'Athlete Performance & Sports Injury Recovery' },
    { name: 'Karen Mattar', platform: 'Instagram', type: 'Wellness', campaign: 'Entrepreneurial Wellness & Fitness Lifestyle' },
    { name: 'Faisal Al Bannai', platform: 'Tech Executive', type: 'System', campaign: 'AI Implementation in Clinical Decision Support' },
    { name: 'Nasser Al Huqbani', platform: 'Health Holding Co', type: 'System', campaign: 'Regional Health Infrastructure & Integration' },
    { name: 'Saeed Al Kuwaiti', platform: 'SEHA CEO', type: 'System', campaign: 'Operational Transparency & System Resiliency' },
    { name: 'Sherif Beshara', platform: 'American Hospital Dubai', type: 'Risk/Ally', campaign: 'Data Security Post-Breach Trust Restoration' },
    { name: 'Dr. Georges Pascal Haber', platform: 'Cleveland Clinic', type: 'Authority', campaign: 'Advanced Surgical Innovation & Cancer Care' },
    { name: 'Yendry Ventura', platform: 'AD Stem Cells Center', type: 'Research', campaign: 'Stem Cell Innovation & Future Therapies' },
    { name: 'Roberta Marinelli', platform: 'Eli Lilly', type: 'Corporate', campaign: 'Obesity Care & Metabolic Health Reform' },
    { name: 'Khaled Ateeq Aldhaheri', platform: 'Daman CEO', type: 'Insurance', campaign: 'Insurance Policy Clarification for Thiqa Holders' },
    { name: 'Ahmad bin Saleh Babaeer', platform: 'Dallah Healthcare', type: 'Regional', campaign: 'GCC-wide Health Cooperation Narratives' },
    { name: 'Elie Chaillot', platform: 'GE HealthCare', type: 'Tech', campaign: 'Diagnostic Modernization & Cloud Infrastructure' },
    { name: 'Pelin Incesu', platform: 'AstraZeneca', type: 'Corporate', campaign: 'Decarbonization & Health System Sustainability' },
    { name: 'Sherbaz Bichu', platform: 'Aster Hospitals', type: 'Private', campaign: 'Access for Middle-Income Resident Populations' },
    { name: 'Ahmed Shebl', platform: 'Saudi German Health', type: 'Authority', campaign: 'Private Hospital Reputation & Safety Standards' },
    { name: 'Laila Abdel Wareth', platform: 'M42 Executive', type: 'Clinical', campaign: 'Diagnostic Excellence & Laboratory Standards' },
    { name: 'Kareem Shahin', platform: 'ADHDS (M42)', type: 'Data', campaign: 'Health Information Exchange (Malaffi) Trust' },
    { name: 'Shanila Laiju', platform: 'Medcare', type: 'Medical', campaign: 'Specialized Pediatric & Maternity Care Access' },
    { name: 'Raza Siddiqui', platform: 'RAK Hospital', type: 'Regional', campaign: 'Inter-Emirate Health Synergy & Medical Tourism' },
    { name: 'Preeti Futnani', platform: 'Sanofi', type: 'Corporate', campaign: 'Chronic Disease Management (Diabetes/Asthma)' }
  ]

  // TABLE 3: CRISIS SCENARIO CATALOG (50 items)
  const crisisScenarios = [
    { name: 'Genomic Data Exfiltration', trigger: 'Ransomware on M42', speed: 'Immediate', impact: 'Extreme (Trust Deficit)' },
    { name: 'Mandatory Vaccine Resistance', trigger: 'Viral TikTok Misinformation', speed: '< 4 hours', impact: 'High (Public Order)' },
    { name: 'SEHA App Service Blackout', trigger: 'Cloud Infrastructure Failure', speed: 'Real-time', impact: 'High (Operational)' },
    { name: 'Fake Sick Leave Ring Exposed', trigger: 'DoH Police Raid', speed: '< 12 hours', impact: 'Medium (Reputational)' },
    { name: 'Large-Scale Food Poisoning', trigger: 'ADAFSA News Release', speed: '< 2 hours', impact: 'High (Public Health)' },
    { name: 'Influencer Malpractice Claim', trigger: 'Viral Patient Reddit Post', speed: '< 6 hours', impact: 'High (Reputational)' },
    { name: 'Novel COVID Variant Rumors', trigger: 'Global News Leak', speed: '< 12 hours', impact: 'Extreme (Panic Cycle)' },
    { name: 'Insurance Penalty Dispute Riot', trigger: 'Reddit r/abudhabi Coordination', speed: '< 2 hours', impact: 'Medium (Social Cohesion)' },
    { name: 'Malaffi Privacy Breach', trigger: 'Whistleblower Leak', speed: 'Immediate', impact: 'Extreme (Systemic Trust)' },
    { name: 'Hospital Structural Fire', trigger: 'Emergency Call (997)', speed: 'Real-time', impact: 'Extreme (Safety)' },
    { name: 'Monkeypox Outbreak in Schools', trigger: 'Parent WhatsApp Panics', speed: '< 4 hours', impact: 'High (Panic)' },
    { name: 'Marburg Virus National Alert', trigger: 'Global Travel Hub Leak', speed: 'Immediate', impact: 'Extreme (Security)' },
    { name: 'AMR Strain in NICU', trigger: 'Internal Lab Detection', speed: '< 24 hours', impact: 'High (Clinical)' },
    { name: 'Heatwave Surge in ER Visits', trigger: 'Severe Weather Alert', speed: '< 12 hours', impact: 'High (Capacity Strain)' },
    { name: 'Counterfeit Medicine Hotline Spike', trigger: 'MoHAP Report', speed: '< 6 hours', impact: 'Medium (Public Safety)' },
    { name: 'Hospital Staff Strike Rumors', trigger: 'Healthcare Professional Forums', speed: '< 24 hours', impact: 'High (Continuity)' },
    { name: 'Golden Visa Fine App Glitch', trigger: 'Tamm Technical Bug', speed: '< 12 hours', impact: 'Medium (Administrative)' },
    { name: 'Pediatric Vehicle Fatality', trigger: 'Police/ADPHC Report', speed: 'Immediate', impact: 'Extreme (Safety/Reputation)' },
    { name: 'Fraudulent Insurance Claim Probe', trigger: 'DoH Audit', speed: '< 48 hours', impact: 'Medium (Financial)' },
    { name: 'Mass Resident Exit Panic', trigger: 'Regional Economic Rumors', speed: '< 72 hours', impact: 'High (Systemic)' },
    { name: 'Vaccine Hub Logistics Delay', trigger: 'Red Sea Supply Chain Shock', speed: '< 24 hours', impact: 'Extreme (Global Rep)' },
    { name: 'Youth Vaping Addiction Peak', trigger: 'School Health Screening', speed: '< 1 week', impact: 'High (Public Health)' },
    { name: 'AI Misdiagnosis Narrative', trigger: 'International Tech Journal', speed: '< 24 hours', impact: 'High (Trust Deficit)' },
    { name: 'Post-COVID Mental Health Crisis', trigger: 'Sahatna Data Peak', speed: '< 48 hours', impact: 'Extreme (Societal)' },
    { name: 'Medical Tourism Botched Surgery', trigger: 'Global News Outlet', speed: '< 24 hours', impact: 'High (Economic Impact)' },
    { name: 'Carbon Neutral Goal Failure', trigger: 'Annual Strategic Audit', speed: '< 1 week', impact: 'Low (PR)' },
    { name: 'Autism Policy Exclusion Protest', trigger: 'Parent Advocacy Groups', speed: '< 24 hours', impact: 'Medium (Social Equity)' },
    { name: 'ER Wait-Time Viral Video', trigger: 'Reddit r/abudhabi', speed: '< 4 hours', impact: 'High (Brand Image)' },
    { name: 'Language Barrier Malpractice Claim', trigger: 'Expat Guide Social Media', speed: '< 6 hours', impact: 'High (Resident Trust)' },
    { name: 'Insurance Copay Sudden Surge', trigger: 'Q1 Renewal Cycle', speed: '< 12 hours', impact: 'High (Cost Cycle)' },
    { name: 'Fraudulent WhatsApp Sick Leaves', trigger: 'DoH Investigation', speed: 'Immediate', impact: 'High (Integrity)' },
    { name: 'Gunra Ransomware Double-Extortion', trigger: 'Dark Web Leak', speed: 'Immediate', impact: 'Extreme (National Security)' },
    { name: 'Al Ain Bakery Poisoning Case', trigger: 'Official ADAFSA Closure', speed: 'Immediate', impact: 'High (Safety)' },
    { name: 'Misleading Medical Ad Lawsuit', trigger: 'Media Council Presser', speed: '< 12 hours', impact: 'Medium (Regulatory)' },
    { name: 'Creator Licensing Fee Backlash', trigger: 'Influencer Community Reddit', speed: '< 24 hours', impact: 'Low (PR)' },
    { name: 'AD999 Emergency App Outage', trigger: 'System Blackout', speed: 'Real-time', impact: 'Extreme (Safety)' },
    { name: 'Air Ambulance Mechanical Fault', trigger: 'NCEMA Report', speed: '< 2 hours', impact: 'High (Safety)' },
    { name: 'Thiqa Network Exclusion Panic', trigger: 'DoH Regulatory Circular', speed: '< 12 hours', impact: 'Extreme (Resident Trust)' },
    { name: 'Receptionist "Decorative" Viral Post', trigger: 'Reddit r/abudhabi', speed: '< 24 hours', impact: 'Medium (Service Quality)' },
    { name: 'Unverified Medicine Harm Event', trigger: 'Media Council Statement', speed: 'Immediate', impact: 'Extreme (Public Health)' },
    { name: 'Expat Adjustment Mental Health Gap', trigger: 'Psychology Podcast', speed: '< 1 week', impact: 'Medium (Societal)' },
    { name: 'MMR Vaccine Shortage Rumors', trigger: 'Pharmacy Community Forums', speed: '< 6 hours', impact: 'High (Panic)' },
    { name: 'Insulin Supply Chain Disruption', trigger: 'Global Logistics Report', speed: '< 12 hours', impact: 'Extreme (Clinical Risk)' },
    { name: 'Pediatric Obesity Spike', trigger: 'National Survey Results', speed: '< 1 month', impact: 'High (Future-Risk)' },
    { name: '"Beauty of Our Mind" Tone Misstep', trigger: 'Social Media Engagement Fail', speed: '< 4 hours', impact: 'Medium (Reputational)' },
    { name: 'EHR Data Lockout (MOVEit)', trigger: 'SC Media Report', speed: 'Immediate', impact: 'Extreme (Operational)' },
    { name: 'Telehealth Privacy Breach', trigger: 'Virtual Care Audit', speed: '< 12 hours', impact: 'High (Privacy)' },
    { name: 'Provider Consolidation Price Hike', trigger: 'Insurance Industry Review', speed: '< 48 hours', impact: 'High (Economic)' },
    { name: 'Maternal Health Neglect Claims', trigger: 'Postnatal Survey Data', speed: '< 48 hours', impact: 'High (Policy/Equity)' },
    { name: 'Global Sovereign Health Hub Failure', trigger: 'WEF Resilience Audit', speed: '< 1 week', impact: 'Extreme (Geopolitical)' }
  ]

  // TABLE 4: RESIDENT PAIN POINTS (50 items)
  const residentPainPoints = [
    { pain: 'Unexplained Health Fines on EID', emotion: 'Anger / Fear', solution: '"How to Audit Your Insurance History" Tutorial' },
    { pain: 'Tamm Fine Payment Verification Lag', emotion: 'Frustration', solution: 'Real-time "Payment Received" Push Notifications' },
    { pain: 'Long Wait for Dermatology Appointments', emotion: 'Hopelessness', solution: '"Virtual Derm: Instant Access for Non-Emergencies"' },
    { pain: 'Language Barrier with Receptionists', emotion: 'Resentment', solution: 'Multilingual AI Concierge Case Study Highlights' },
    { pain: 'Golden Visa (GV) Fine Proof Hurdles', emotion: 'Exhaustion', solution: '"GV Exemptions: The 3 Documents You Need"' },
    { pain: '"Token" Loops at Govt Hospitals', emotion: 'Anger', solution: '"Digital Queueing: Your Time is Our Priority"' },
    { pain: 'Sudden Co-pay Increase at Renewal', emotion: 'Financial Stress', solution: '"Maximize Your Policy: Navigating Tier-2 Options"' },
    { pain: 'OTP Requirement for Sick Leave Access', emotion: 'Irritation', solution: '"Why Security Matters: Protecting Your Health Data"' },
    { pain: 'Inability to Get Boosters at Urgent Care', emotion: 'Confusion', solution: '"The Care Map: Where to Go for Which Treatment"' },
    { pain: 'Pharmacy Over-Prescription Concerns', emotion: 'Suspicion', solution: '"The AMR Threat: Why We Prescribe Only What\'s Needed"' },
    { pain: 'Post-Hospital Maternal Support Gap', emotion: 'Loneliness', solution: '"Postnatal Care: Our Home Visit Program for You"' },
    { pain: 'Stigma Around Obesity Management', emotion: 'Guilt / Shame', solution: '"Science, Not Willpower: Our New Obesity Blueprint"' },
    { pain: 'Conflicting ICP vs DoH Guidance', emotion: 'Anger', solution: '"Unified Health: One Government, One Answer"' },
    { pain: 'Cost of Vitamins and Supplements', emotion: 'Hopelessness', solution: '"Whole Food Nutrition: Getting Vitamins from the Source"' },
    { pain: 'App-Based Mental Health Screening', emotion: 'Anxiety', solution: '"Private, Secure, Strong: The Sahatna Privacy Promise"' },
    { pain: 'Fraudulent Sick Leave Ring Anxiety', emotion: 'Paranoia', solution: '"Protecting Your Integrity: The DoH Enforcement Update"' },
    { pain: 'School Ban on Sugary Drinks', emotion: 'Irritation (Youth)', solution: '"Fueling Brains: Delicious Low-Sugar Alternatives"' },
    { pain: 'Mandatory MMR Booster (1-5 Years)', emotion: 'Worry', solution: '"Pediatrician Q&A: Why Dose 2 is the Shield of Safety"' },
    { pain: 'Pest Control Request Latency', emotion: 'Disgust', solution: '"Tamm Pest-Action: Tracking Your Request in Real-Time"' },
    { pain: 'Mental Health Counselor Scarcity', emotion: 'Despair', solution: '"Expanding Access: Meet Our 640+ New Professionals"' },
    { pain: 'AD vs Dubai Golden Visa Confusion', emotion: 'Confusion', solution: '"Visa Sovereignty: A Plain-English Guide to Rules"' },
    { pain: 'Inability to Appeal Fines Online', emotion: 'Powerlessness', solution: '"Your Voice Matters: The New Digital Appeal Portal"' },
    { pain: 'Tech Stigma: "Robotic" Care Delivery', emotion: 'Disconnection', solution: '"Human-Centric AI: Putting the Heart Back in Medicine"' },
    { pain: 'Opaque Hospital Pricing Systems', emotion: 'Suspicion', solution: '"Price Transparency: Understanding the DoH Tariff"' },
    { pain: 'Expat Transition Grief / Identity Loss', emotion: 'Sadness', solution: '"Thriving as an Expat: Community Connection Stories"' },
    { pain: 'Pediatric In-Home Safety Awareness', emotion: 'Guilt', solution: '"Home-Safe Checklist: Protecting Your Little Explorers"' },
    { pain: 'Insurance Network Exclusions', emotion: 'Betrayal', solution: '"Find Your Provider: The Interactive Network Map"' },
    { pain: 'Vaping "Cool" Factor vs. Health Harm', emotion: 'Dissonance', solution: '"Vaping: The Invisible Impact on Youth Longevity"' },
    { pain: 'Complexity of Diabetes Management', emotion: 'Exhaustion', solution: '"Personalized Pathways: Diabetes Control Simplified"' },
    { pain: 'High-Cost Treatment Financial Gap', emotion: 'Despair', solution: '"The Patient Fund: Our Mission to Support Every Resident"' },
    { pain: 'Fine Reimbursement Delays', emotion: 'Frustration', solution: '"Getting Your Refund: A Step-by-Step Timeline"' },
    { pain: 'Receptionist "Decorative" Role Perception', emotion: 'Contempt', solution: '"Hospitality in Health: Training Our Care-Front Team"' },
    { pain: 'ER Wait-Time Inconsistency', emotion: 'Irritation', solution: '"Real-Time ER Hub: Check Wait-Times Before You Go"' },
    { pain: 'Chronic Disease "Sick-Care" Fatigue', emotion: 'Hopelessness', solution: '"Live Longer, Live Better: The Prevention Roadmap"' },
    { pain: 'Autism Diagnostic Latency', emotion: 'Anxiety', solution: '"Early Autism Screening: Tech-Enabled Speed for Families"' },
    { pain: 'Lack of Specialist Availability', emotion: 'Resentment', solution: '"Excellence in Access: Recruiting the World\'s Best"' },
    { pain: 'Mandatory Occupational Screening', emotion: 'Annoyance', solution: '"A Safe Workforce: Why We Screen to Protect You All"' },
    { pain: 'Ransomware Fear (Gunra Attack)', emotion: 'Paranoia', solution: '"Data Shield: How We Protect 450M Records"' },
    { pain: 'Vaccine Hub Logistics Secrecy', emotion: 'Curiosity', solution: '"Inside the Hub: How Abu Dhabi Medicines Reach You"' },
    { pain: 'Monthly AED 300 Fine Penalty', emotion: 'Financial Fear', solution: '"Stay Covered, Stay Safe: Avoiding the 300 Fine"' },
    { pain: 'App-Integration Overload', emotion: 'Confusion', solution: '"One Platform, All Health: The Unified Tamm Guide"' },
    { pain: 'Conflicting Booster Timelines', emotion: 'Confusion', solution: '"Booster Facts: Get Your Timing Right"' },
    { pain: 'Weight Management Program Eligibility', emotion: 'Anxiety', solution: '"Metabolic Health: Who Qualifies for Personalized Care"' },
    { pain: 'Fraudulent Insurance Claim Burden', emotion: 'Resentment', solution: '"Stopping Fraud to Keep Your Premiums Low"' },
    { pain: 'Lack of Direct Satisfaction Surveys', emotion: 'Disregard', solution: '"We Hear You: The 2025 Resident Experience Survey"' },
    { pain: 'Child Vehicle Safety Misconceptions', emotion: 'Worry', solution: '"Car Seat Science: The Impact That Saves Lives"' },
    { pain: 'Remote Area Access Disparity', emotion: 'Isolation', solution: '"Health on Wheels: Bringing Specialists to the Western Region"' },
    { pain: 'Complex Insurance Appeal Language', emotion: 'Exhaustion', solution: '"The Patient Advocate: We Help You Navigate Appeals"' },
    { pain: 'Longevity "Hype" vs. Reality', emotion: 'Skepticism', solution: '"Longevity Now: Tangible Results from Our First 1,000 Cases"' },
    { pain: 'The Need for an OTP for Simple Data', emotion: 'Irritation', solution: '"Securing Your Future: Why We Verify Every Login"' }
  ]

  // TABLE 5: TONE AUDIT (50 items)
  const toneAudit = [
    { content: '"Pay your health fines in 6 mins via Tamm"', tone: 'Efficient / Robotic', perception: 'Punitive / Greedy', correction: '"Renewing your insurance is now faster to keep you safe."' },
    { content: '"Beauty of Our Mind" Mental Health Launch', tone: 'Empathetic / Poetic', perception: 'Highly Resonant', correction: 'Maintain cultural storytelling focus.' },
    { content: '"Fraudulent sick leave crackdown"', tone: 'Authoritative / Stern', perception: 'Strict / Necessary', correction: '"Protecting your medical record from fraudulent misuse."' },
    { content: '"Active Ramadan Challenge" (Walking)', tone: 'Culturally Aligned', perception: 'Highly Resonant', correction: '"Step into health as an act of faith this Ramadan."' },
    { content: '"11.5% medical cost surge for 2025"', tone: 'Analytical / Cold', perception: 'Alarming / Cold', correction: '"Investing in high-standard care for our community\'s future."' },
    { content: '"MMR Booster dose is mandatory"', tone: 'Bureaucratic', perception: 'Resistance / Fear', correction: '"One extra dose to shield our children from measles."' },
    { content: '"AED 300 penalty per uninsured month"', tone: 'Financial / Dry', perception: 'Resentful', correction: '"Stay covered to ensure uninterrupted access to care."' },
    { content: '"Longevity is our North Star"', tone: 'Visionary / Abstract', perception: 'Skeptical', correction: '"Giving you more years with the ones you love."' },
    { content: '"Decarbonizing the healthcare ecosystem"', tone: 'Corporate / Global', perception: 'Detached', correction: '"A healthier environment for a healthier Abu Dhabi."' },
    { content: '"Pest control is now under ADPHC"', tone: 'Operational / Dry', perception: 'Confused', correction: '"Safeguarding your neighborhood from every health threat."' },
    { content: '"AI will revolutionize your diagnosis"', tone: 'Tech-Forward', perception: 'Fear of job loss', correction: '"AI tools to give your doctor more time to listen to you."' },
    { content: '"Golden Visa insurance rules update"', tone: 'Legalese', perception: 'Confusion', correction: '"Simplified insurance steps for our Golden Visa residents."' },
    { content: '"Obesity is a biological condition"', tone: 'Scientific', perception: 'Validating', correction: '"It\'s not your fault; science is here to help you manage it."' },
    { content: '"Thiqa IFHAS screening required"', tone: 'Health-Focused', perception: 'Routine / Dull', correction: '"Take 15 minutes to secure your next 15 years."' },
    { content: '"Sahatna app mental self-assessment"', tone: 'Modern / Direct', perception: 'Empowering', correction: '"Understanding your mind is the first step to true strength."' },
    { content: '"American Hospital breach notification"', tone: 'Crisis / Alarmist', perception: 'Panic', correction: '"Your data safety is our priority; here\'s how we\'re responding."' },
    { content: '"From sick-care to wellness pivot"', tone: 'Strategic', perception: 'Corporate Speak', correction: '"Moving from treating illness to celebrating your health."' },
    { content: '"Child passenger safety guidelines"', tone: 'Protective', perception: 'Reassuring', correction: '"Keeping your little treasures safe on every journey."' },
    { content: '"Fraud recovery measures enacted"', tone: 'Disciplinarian', perception: 'Cold', correction: '"Ensuring fair health access for every honest resident."' },
    { content: '"The BRIDGE media initiative"', tone: 'Inclusive / Global', perception: 'Resonant', correction: '"Connecting cultures through responsible health storytelling."' },
    { content: '"Abu Dhabi: A surgical destination"', tone: 'Promotional', perception: 'Skeptical', correction: '"World-class surgery is now available in your own home."' },
    { content: '"Cardiovascular mortality statistics"', tone: 'Statistical / Grim', perception: 'Depressing', correction: '"Protecting the heart of Abu Dhabi: Protecting You."' },
    { content: '"National EWS text alert system"', tone: 'Urgent', perception: 'Vigilant', correction: '"One message to keep you safe from the unexpected."' },
    { content: '"VAPeS youth vaping study"', tone: 'Academic', perception: 'Detached', correction: '"Understanding why our youth reach for the vape."' },
    { content: '"Long-COVID recovery clinics open"', tone: 'Clinical', perception: 'Necessary', correction: '"You\'re not alone in recovery; we\'re with you."' },
    { content: '"Life Sciences GDP contribution goals"', tone: 'Economic', perception: 'Detached', correction: '"Your health is the Emirate\'s most valuable asset."' },
    { content: '"Autism Health Equity white paper"', tone: 'Intellectual', perception: 'Niche', correction: '"Every child deserves a digital future for their health."' },
    { content: '"AD999 SOS button functionality"', tone: 'Practical / Direct', perception: 'Reassuring', correction: '"Safety and help are just one tap away."' },
    { content: '"Provider consolidation industry report"', tone: 'Industry-speak', perception: 'Suspicious', correction: '"Combining expertise to bring you better care options."' },
    { content: '"AMR threat and antibiotic use"', tone: 'Warning-heavy', perception: 'Confusing', correction: '"Using medicine wisely today to protect our tomorrow."' },
    { content: '"Beauty of Our Mind" mind-map visual', tone: 'Creative', perception: 'Resonant', correction: '"Visualize your strength, find your community."' },
    { content: '"Active Ramadan: Walk 5k challenge"', tone: 'Community-centric', perception: 'Resonant', correction: '"Step by step toward a blessed and healthy life."' },
    { content: '"AED 100 grievance fee for appeals"', tone: 'Transactional', perception: 'Unfair', correction: '"A transparent process to ensure your voice is heard."' },
    { content: '"Clinics referred to prosecution"', tone: 'Punitive', perception: 'Shocking', correction: '"Zero tolerance for those who jeopardize your trust."' },
    { content: '"Global AI Academy for doctors"', tone: 'Future-focused', perception: 'Distant', correction: '"Giving your doctor the wisdom of data-driven care."' },
    { content: '"Home child safety guides"', tone: 'Instructional', perception: 'Resonant', correction: '"Little steps at home to prevent big accidents."' },
    { content: '"School Healthy Nutrition Policy"', tone: 'Parental', perception: 'Supportive', correction: '"The right fuel for our children\'s brightest future."' },
    { content: '"Tobacco control program update"', tone: 'Restrictive', perception: 'Resistance', correction: '"Breathing clean air for a better Abu Dhabi together."' },
    { content: '"Influenza surveillance global event"', tone: 'Global / Elite', perception: 'Academic', correction: '"Stopping the flu globally starts right here in Abu Dhabi."' },
    { content: '"Precision medicine roadmap launch"', tone: 'Elite / Distant', perception: 'Detached', correction: '"Healthcare made just for you, not the average."' },
    { content: '"Lilly Obesity Roadshow"', tone: 'Active', perception: 'Resonant', correction: '"Bringing science-based support to your doorstep."' },
    { content: '"Malaffi data security promise"', tone: 'Technical', perception: 'Suspicious', correction: '"Your health history, protected by the world\'s best tech."' },
    { content: '"Mental health as a pillar of society"', tone: 'Foundational', perception: 'Resonant', correction: '"Strength begins within."' },
    { content: '"My hospital bills are piling up" (Reddit)', tone: 'Desperate', perception: 'Resonance', correction: '"We are one family: How to access our support funds."' },
    { content: '"Confused about booster shot rules"', tone: 'Confused', perception: 'High Friction', correction: '"Simplifying your journey through the vaccine process."' },
    { content: '"Tamm fine refund timeline"', tone: 'Legalistic', perception: 'Frustrating', correction: '"Getting your money back: A 3-step timeline."' },
    { content: '"Bakery shut down for poison risk"', tone: 'Protective', perception: 'Relieving', correction: '"Ensuring every bite in Abu Dhabi is safe for everyone."' },
    { content: '"Medical myths vs. facts" (Dr. Mike)', tone: 'Educational', perception: 'Resonant', correction: '"The truth about your health, from the experts."' },
    { content: '"Sexiest doctor alive" (Influencer)', tone: 'Celebrity / Casual', perception: 'High ER', correction: '"Connecting with you through modern health stories."' },
    { content: '"Blueprint for metabolic resilience"', tone: 'Patriotic', perception: 'Resonant', correction: '"A system built for a lifetime of strength."' }
  ]

  // STRATEGIC CHALLENGES
  const strategicChallenges = [
    {
      title: 'The Digital Trust Chasm',
      description: 'As the system pivots to "Healthcare in the Cloud" and AI, vulnerability to cyberattacks becomes critical',
      focus: 'Digital sovereignty must be communicated as resident protection'
    },
    {
      title: 'Linguistic and Cultural Alignment',
      description: 'The "Consistency Gap" in front-end service delivery requires massive investment',
      focus: 'Empathy Training and multilingual clarity for hospital front-desks'
    },
    {
      title: 'Influencer Authenticity vs. Regulation',
      description: 'The Advertiser Permit system ensures safety but may create "credibility void"',
      focus: 'Foster diverse Strategic Influencer Leadership (SIL) matrix with niche voices'
    }
  ]

  // VISUALIZATION DATA: KINETIC STATUS TAB
  const deploymentTrendData = [
    { month: 'Aug', deploying: 8, active: 32, completed: 18 },
    { month: 'Sep', deploying: 10, active: 35, completed: 22 },
    { month: 'Oct', deploying: 12, active: 38, completed: 25 },
    { month: 'Nov', deploying: 11, active: 42, completed: 28 },
    { month: 'Dec', deploying: 14, active: 45, completed: 31 },
    { month: 'Jan', deploying: 12, active: 47, completed: 28 }
  ]

  const reachTrendData = [
    { month: 'Aug', totalReach: 8.2, engagementRate: 7.8 },
    { month: 'Sep', totalReach: 9.1, engagementRate: 8.1 },
    { month: 'Oct', totalReach: 10.5, engagementRate: 8.3 },
    { month: 'Nov', totalReach: 11.2, engagementRate: 8.5 },
    { month: 'Dec', totalReach: 11.8, engagementRate: 8.6 },
    { month: 'Jan', totalReach: 12.4, engagementRate: 8.7 }
  ]

  const velocityTrendData = [
    { month: 'Aug', velocity: 5.8 },
    { month: 'Sep', velocity: 5.2 },
    { month: 'Oct', velocity: 4.8 },
    { month: 'Nov', velocity: 4.5 },
    { month: 'Dec', velocity: 4.3 },
    { month: 'Jan', velocity: 4.2 }
  ]

  const deploymentStatusData = [
    { name: 'Active Deployments', value: 47, color: CHART_COLORS.emerald },
    { name: 'Deploying', value: 12, color: CHART_COLORS.indigo },
    { name: 'Paused', value: 3, color: CHART_COLORS.orange },
    { name: 'Completed Today', value: 28, color: CHART_COLORS.info }
  ]

  // VISUALIZATION DATA: OPERATIONAL HEALTH TAB
  const systemUptimeData = [
    { month: 'Aug', ricochet: 99.5, catalyst: 99.2, xfactor: 99.8, amplification: 99.4 },
    { month: 'Sep', ricochet: 99.6, catalyst: 99.4, xfactor: 99.8, amplification: 99.5 },
    { month: 'Oct', ricochet: 99.7, catalyst: 99.5, xfactor: 99.9, amplification: 99.6 },
    { month: 'Nov', ricochet: 99.6, catalyst: 99.3, xfactor: 99.8, amplification: 99.5 },
    { month: 'Dec', ricochet: 99.8, catalyst: 99.6, xfactor: 99.9, amplification: 99.7 },
    { month: 'Jan', ricochet: 99.8, catalyst: 99.6, xfactor: 99.9, amplification: 99.7 }
  ]

  const systemLoadData = [
    { system: 'Ricochet Engine', load: 67, capacity: 100 },
    { system: 'Catalyst Optimizer', load: 72, capacity: 100 },
    { system: 'X-Factor Analytics', load: 54, capacity: 100 },
    { system: 'Amplification Loops', load: 81, capacity: 100 },
    { system: 'Content Pipeline', load: 89, capacity: 100 },
    { system: 'Crisis Protocol', load: 12, capacity: 100 }
  ]

  const latencyTrendData = [
    { month: 'Aug', avg: 85, peak: 145 },
    { month: 'Sep', avg: 78, peak: 132 },
    { month: 'Oct', avg: 72, peak: 118 },
    { month: 'Nov', avg: 69, peak: 105 },
    { month: 'Dec', avg: 68, peak: 98 },
    { month: 'Jan', avg: 67, peak: 95 }
  ]

  const errorRateData = [
    { month: 'Aug', errors: 0.08 },
    { month: 'Sep', errors: 0.06 },
    { month: 'Oct', errors: 0.05 },
    { month: 'Nov', errors: 0.04 },
    { month: 'Dec', errors: 0.035 },
    { month: 'Jan', errors: 0.03 }
  ]

  // VISUALIZATION DATA: LIFECYCLE TRACKER TAB
  const lifecycleDistributionData = [
    { name: 'Primary Impact', value: 12, color: CHART_COLORS.indigo },
    { name: 'Secondary Rebound', value: 18, color: CHART_COLORS.purple },
    { name: 'Tertiary Dispersion', value: 8, color: CHART_COLORS.pink },
    { name: 'Quaternary Echo', value: 6, color: CHART_COLORS.info },
    { name: 'Quantum Cascade', value: 3, color: CHART_COLORS.emerald }
  ]

  const lifecycleEngagementData = [
    { stage: 'Primary Impact', avgEngagement: 12.4, maxEngagement: 18.2 },
    { stage: 'Secondary Rebound', avgEngagement: 45.2, maxEngagement: 67.8 },
    { stage: 'Tertiary Dispersion', avgEngagement: 67.8, maxEngagement: 89.3 },
    { stage: 'Quaternary Echo', avgEngagement: 34.1, maxEngagement: 52.4 },
    { stage: 'Quantum Cascade', avgEngagement: 89.3, maxEngagement: 124.5 }
  ]

  const lifecycleVelocityData = [
    { month: 'Aug', primary: 4.5, secondary: 2.3, tertiary: 6.8, quaternary: 18.5, quantum: 72 },
    { month: 'Sep', primary: 4.4, secondary: 2.2, tertiary: 6.5, quaternary: 17.8, quantum: 70 },
    { month: 'Oct', primary: 4.3, secondary: 2.1, tertiary: 6.4, quaternary: 18.2, quantum: 72 },
    { month: 'Nov', primary: 4.2, secondary: 2.1, tertiary: 6.3, quaternary: 18.0, quantum: 71 },
    { month: 'Dec', primary: 4.2, secondary: 2.0, tertiary: 6.4, quaternary: 18.2, quantum: 72 },
    { month: 'Jan', primary: 4.2, secondary: 2.1, tertiary: 6.4, quaternary: 18.2, quantum: 72 }
  ]

  const cascadeSuccessData = [
    { month: 'Aug', successRate: 62 },
    { month: 'Sep', successRate: 64 },
    { month: 'Oct', successRate: 65 },
    { month: 'Nov', successRate: 66 },
    { month: 'Dec', successRate: 67 },
    { month: 'Jan', successRate: 67 }
  ]

  // VISUALIZATION DATA: PLATFORM MATRIX TAB
  const platformDeploymentData = [
    { platform: 'LinkedIn', deployments: 12 },
    { platform: 'X/Twitter', deployments: 18 },
    { platform: 'Instagram', deployments: 15 },
    { platform: 'Facebook', deployments: 9 },
    { platform: 'TikTok', deployments: 6 },
    { platform: 'YouTube', deployments: 8 },
    { platform: 'Pinterest', deployments: 4 },
    { platform: 'Reddit', deployments: 7 }
  ]

  const platformLatencyData = [
    { platform: 'LinkedIn', latency: 45, status: 'operational' },
    { platform: 'X/Twitter', latency: 32, status: 'operational' },
    { platform: 'Instagram', latency: 67, status: 'operational' },
    { platform: 'Facebook', latency: 78, status: 'operational' },
    { platform: 'TikTok', latency: 234, status: 'degraded' },
    { platform: 'YouTube', latency: 89, status: 'operational' },
    { platform: 'Pinterest', latency: 56, status: 'operational' },
    { platform: 'Reddit', latency: 43, status: 'operational' }
  ]

  const platformStatusData = [
    { name: 'Operational', value: 14, color: CHART_COLORS.emerald },
    { name: 'Degraded', value: 1, color: CHART_COLORS.orange }
  ]

  // VISUALIZATION DATA: STRATEGIC ANALYSIS TAB
  const narrativeCategoryData = [
    { category: 'Policy & Regulation', count: 12 },
    { category: 'Public Health', count: 18 },
    { category: 'Cost & Insurance', count: 8 },
    { category: 'Technology & AI', count: 6 },
    { category: 'Mental Health', count: 4 },
    { category: 'Infrastructure', count: 2 }
  ]

  const influencerTypeData = [
    { name: 'Authority', value: 8, color: CHART_COLORS.purple },
    { name: 'System', value: 12, color: CHART_COLORS.denim },
    { name: 'Bridge', value: 8, color: CHART_COLORS.info },
    { name: 'Medical', value: 10, color: CHART_COLORS.emerald },
    { name: 'Wellness', value: 15, color: CHART_COLORS.pink },
    { name: 'Corporate', value: 8, color: CHART_COLORS.warning },
    { name: 'Cultural', value: 4, color: CHART_COLORS.indigo },
    { name: 'Other', value: 5, color: CHART_COLORS.secondary }
  ]

  const influencerPlatformData = [
    { platform: 'Instagram', count: 18 },
    { platform: 'LinkedIn', count: 8 },
    { platform: 'YouTube', count: 6 },
    { platform: 'Podcast', count: 5 },
    { platform: 'Corporate', count: 8 },
    { platform: 'Social Media', count: 5 }
  ]

  const crisisSeverityData = [
    { name: 'Extreme Impact', value: 18, color: CHART_COLORS.rose },
    { name: 'High Impact', value: 24, color: CHART_COLORS.warning },
    { name: 'Medium Impact', value: 8, color: CHART_COLORS.indigo }
  ]

  const crisisSpeedData = [
    { speed: 'Immediate', count: 12 },
    { speed: '< 2 hours', count: 8 },
    { speed: '< 4 hours', count: 6 },
    { speed: '< 6 hours', count: 8 },
    { speed: '< 12 hours', count: 10 },
    { speed: '< 24 hours', count: 4 },
    { speed: '< 48 hours', count: 2 }
  ]

  const painPointEmotionData = [
    { emotion: 'Anger', count: 8 },
    { emotion: 'Frustration', count: 12 },
    { emotion: 'Anxiety', count: 10 },
    { emotion: 'Confusion', count: 15 },
    { emotion: 'Hopelessness', count: 5 },
    { emotion: 'Resentment', count: 6 },
    { emotion: 'Fear', count: 8 },
    { emotion: 'Other', count: 6 }
  ]

  const toneResonanceData = [
    { name: 'Highly Resonant', value: 18, color: CHART_COLORS.emerald },
    { name: 'Moderately Resonant', value: 12, color: CHART_COLORS.info },
    { name: 'Mixed Reception', value: 8, color: CHART_COLORS.warning },
    { name: 'Low Resonance', value: 12, color: CHART_COLORS.rose }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Command Prime</h1>
          <p className="text-muted-foreground">
            Central command for RICOCHET-CATALYST-X operations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Rocket className="h-4 w-4 mr-2" />
            New Deployment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kineticMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="kinetic-status" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full">
          <TabsTrigger value="kinetic-status">Kinetic Status</TabsTrigger>
          <TabsTrigger value="operational-health">Operational Health</TabsTrigger>
          <TabsTrigger value="lifecycle-tracker">Lifecycle Tracker</TabsTrigger>
          <TabsTrigger value="platform-matrix">Platform Matrix</TabsTrigger>
          <TabsTrigger value="strategic-analysis">Strategic Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="kinetic-status" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Rocket className="h-4 w-4" />
            <AlertTitle>All Systems Operational</AlertTitle>
            <AlertDescription>
              47 active deployments across 15 platforms. 12.4M total reach with 8.7% engagement rate.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active Deployments</h3>
              <Zap className="h-5 w-5 text-amber-500" />
            </div>
            <div className="space-y-4">
              {activeDeployments.map((deployment) => (
                <div key={deployment.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{deployment.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Deploying to {deployment.platforms} platforms
                      </p>
                    </div>
                    <Badge variant={
                      deployment.status === 'active' ? 'default' :
                      deployment.status === 'deploying' ? 'secondary' : 'outline'
                    }>
                      {deployment.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{deployment.progress}%</span>
                    </div>
                    <Progress value={deployment.progress} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-cyan-500" />
                      <span>Reach: <strong>{deployment.reach.toLocaleString()}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <span>Started: <strong>{deployment.started}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Play className="h-5 w-5 text-emerald-500" />
                  Deploying Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground mt-1">Active campaigns</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Pause className="h-5 w-5 text-amber-500" />
                  Paused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-muted-foreground mt-1">Awaiting review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  Completed Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28</div>
                <p className="text-sm text-muted-foreground mt-1">Successful deployments</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Kinetic Deployment Analytics" description="6-month deployment trends and performance metrics">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold mb-4">Deployment Status Trends</h4>
                <AreaChart
                  data={deploymentTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'deploying', name: 'Deploying', color: CHART_COLORS.indigo },
                    { dataKey: 'active', name: 'Active', color: CHART_COLORS.emerald },
                    { dataKey: 'completed', name: 'Completed', color: CHART_COLORS.info }
                  ]}
                  height={250}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Current Distribution</h4>
                <PieChart
                  data={deploymentStatusData}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Reach & Engagement Growth" description="6-month expansion tracking">
              <AreaChart
                data={reachTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'totalReach', name: 'Total Reach (M)', color: CHART_COLORS.denim },
                  { dataKey: 'engagementRate', name: 'Engagement Rate (%)', color: CHART_COLORS.purple }
                ]}
                height={220}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Average Deployment Velocity" description="Time to first impact (minutes)">
              <LineChart
                data={velocityTrendData}
                xAxisKey="month"
                lines={[
                  { dataKey: 'velocity', name: 'Avg Velocity (min)', color: CHART_COLORS.purple }
                ]}
                height={220}
                showGrid={true}
              />
            </GlassPanel>
          </div>
        </TabsContent>

        <TabsContent value="operational-health" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">System Health Matrix</h3>
              <Activity className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="space-y-4">
              {operationalHealthSystems.map((system, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${
                        system.status === 'operational' ? 'bg-emerald-500' :
                        system.status === 'standby' ? 'bg-amber-500' : 'bg-rose-500'
                      }`} />
                      <h4 className="font-semibold">{system.system}</h4>
                    </div>
                    <Badge variant={
                      system.status === 'operational' ? 'default' :
                      system.status === 'standby' ? 'secondary' : 'destructive'
                    }>
                      {system.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Uptime</span>
                        <span className="font-medium text-emerald-600">{system.uptime}</span>
                      </div>
                      <Progress value={parseFloat(system.uptime)} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Load</span>
                        <span className="font-medium">{system.load}%</span>
                      </div>
                      <Progress value={system.load} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Overall Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">99.7%</div>
                <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">67ms</div>
                <p className="text-sm text-muted-foreground mt-1">System latency</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Throughput</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">8.4K</div>
                <p className="text-sm text-muted-foreground mt-1">Req/sec</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Error Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">0.03%</div>
                <p className="text-sm text-muted-foreground mt-1">Last 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>{activity.action}</strong>: {activity.item}
                    </p>
                    <p className="text-xs text-muted-foreground">by {activity.user}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="System Performance Analytics" description="6-month uptime, load, and latency tracking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">System Uptime Trends (%)</h4>
                <LineChart
                  data={systemUptimeData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'ricochet', name: 'Ricochet Engine', color: CHART_COLORS.denim },
                    { dataKey: 'catalyst', name: 'Catalyst Optimizer', color: CHART_COLORS.purple },
                    { dataKey: 'xfactor', name: 'X-Factor Analytics', color: CHART_COLORS.emerald },
                    { dataKey: 'amplification', name: 'Amplification Loops', color: CHART_COLORS.pink }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Current System Load (%)</h4>
                <BarChart
                  data={systemLoadData}
                  xAxisKey="system"
                  bars={[
                    { dataKey: 'load', name: 'Current Load', color: CHART_COLORS.indigo },
                    { dataKey: 'capacity', name: 'Capacity', color: CHART_COLORS.secondary }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Latency Optimization" description="Average vs peak latency trends (ms)">
              <LineChart
                data={latencyTrendData}
                xAxisKey="month"
                lines={[
                  { dataKey: 'avg', name: 'Average', color: CHART_COLORS.info },
                  { dataKey: 'peak', name: 'Peak', color: CHART_COLORS.rose }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Error Rate Reduction" description="Monthly error rate percentage">
              <LineChart
                data={errorRateData}
                xAxisKey="month"
                lines={[
                  { dataKey: 'errors', name: 'Error Rate %', color: CHART_COLORS.emerald }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
          </div>
        </TabsContent>

        <TabsContent value="lifecycle-tracker" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Narrative Lifecycle Tracking</AlertTitle>
            <AlertDescription>
              Monitoring 47 campaigns across 5 lifecycle stages. 26 currently in active amplification phases.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">5-Stage Ricochet Framework</h3>
              <BarChart3 className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {lifecycleStages.map((stage, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{stage.stage}</h4>
                        <p className="text-sm text-muted-foreground">{stage.avgTime} avg duration</p>
                      </div>
                    </div>
                    <Badge variant={
                      stage.status === 'active' ? 'default' : 'secondary'
                    }>
                      {stage.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">{stage.count}</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    <div className="text-center p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                      <p className="text-2xl font-bold text-emerald-600">{stage.active}</p>
                      <p className="text-xs text-muted-foreground">Active</p>
                    </div>
                    <div className="text-center p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                      <p className="text-2xl font-bold text-cyan-600">{stage.completed}</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <div className="text-center p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{stage.engagement}</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                  </div>

                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${(stage.active / stage.count) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">47</div>
                <Progress value={78} className="h-2 mt-3" />
                <p className="text-sm text-muted-foreground mt-2">78% in active stages</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Lifecycle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4.2 days</div>
                <p className="text-sm text-muted-foreground mt-1">From launch to cascade</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Cascade Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">67%</div>
                <Progress value={67} className="h-2 mt-3" />
                <p className="text-sm text-muted-foreground mt-2">Reaching Quantum Cascade</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Lifecycle Stage Analytics" description="Campaign distribution and engagement across 5-stage Ricochet framework">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Campaign Distribution by Stage</h4>
                <PieChart
                  data={lifecycleDistributionData}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Engagement by Stage (K)</h4>
                <BarChart
                  data={lifecycleEngagementData}
                  xAxisKey="stage"
                  bars={[
                    { dataKey: 'avgEngagement', name: 'Average', color: CHART_COLORS.indigo },
                    { dataKey: 'maxEngagement', name: 'Maximum', color: CHART_COLORS.purple }
                  ]}
                  height={250}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Stage Velocity Duration" description="Average time spent in each lifecycle stage (hours)">
              <LineChart
                data={lifecycleVelocityData}
                xAxisKey="month"
                lines={[
                  { dataKey: 'primary', name: 'Primary (min)', color: CHART_COLORS.indigo },
                  { dataKey: 'secondary', name: 'Secondary (hr)', color: CHART_COLORS.purple },
                  { dataKey: 'tertiary', name: 'Tertiary (hr)', color: CHART_COLORS.pink },
                  { dataKey: 'quaternary', name: 'Quaternary (hr)', color: CHART_COLORS.info }
                ]}
                height={220}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Cascade Success Rate Trend" description="6-month improvement tracking">
              <AreaChart
                data={cascadeSuccessData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'successRate', name: 'Success Rate %', color: CHART_COLORS.emerald }
                ]}
                height={220}
                showGrid={true}
              />
            </GlassPanel>
          </div>
        </TabsContent>

        <TabsContent value="platform-matrix" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Platform Connection Status</h3>
              <Globe className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platformStatus.map((platform, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        {platform.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{platform.platform}</h4>
                        <p className="text-xs text-muted-foreground">{platform.deployments} deployments</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        platform.status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} />
                      <span className="text-sm font-medium capitalize">{platform.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Latency</span>
                    <span className="font-semibold">{platform.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">15</div>
                <p className="text-sm text-muted-foreground mt-1">Integrated</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Operational</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">14</div>
                <p className="text-sm text-muted-foreground mt-1">Fully functional</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Degraded</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">1</div>
                <p className="text-sm text-muted-foreground mt-1">Partial functionality</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">68ms</div>
                <p className="text-sm text-muted-foreground mt-1">All platforms</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Platform Performance Analytics" description="Deployment distribution and latency metrics across all platforms">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Active Deployments by Platform</h4>
                <BarChart
                  data={platformDeploymentData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'deployments', name: 'Deployments', color: CHART_COLORS.denim }
                  ]}
                  height={250}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Platform Status Distribution</h4>
                <PieChart
                  data={platformStatusData}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Platform Latency Analysis" description="Current latency metrics by platform (ms)">
            <BarChart
              data={platformLatencyData}
              xAxisKey="platform"
              bars={[
                { dataKey: 'latency', name: 'Latency (ms)', color: CHART_COLORS.info }
              ]}
              height={220}
              showGrid={true}
            />
          </GlassPanel>

          <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>TikTok Platform Degraded</AlertTitle>
            <AlertDescription>
              Elevated latency detected (234ms). Rate limiting may be in effect. Catalyst AI is optimizing deployment timing.
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* FILE 08: STRATEGIC ANALYSIS TAB - ABU DHABI HEALTH DATA */}
        <TabsContent value="strategic-analysis" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Brain className="h-4 w-4" />
            <AlertTitle>Strategic Analysis of Abu Dhabi Healthcare Ecosystem (2024-2026)</AlertTitle>
            <AlertDescription>
              Comprehensive strategic intelligence covering Narrative Lifecycles, Influencer Networks, Crisis Scenarios, Resident Pain Points, and Tone Resonance across 200+ data points.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE SUMMARY */}
          <GlassPanel title="Executive Summary" description="Structural Re-Engineering of the Abu Dhabi Healthcare Ecosystem" badge="STRATEGIC OVERVIEW">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs">GDP Target (2045)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600">{strategicSummary.gdpTarget}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500 bg-cyan-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs">Investment Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-cyan-600">{strategicSummary.investment}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs">Cost Challenge (2025)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-rose-600">{strategicSummary.costIncrease}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20 md:col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs">Core Strategic Pivot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-700">{strategicSummary.corePivot}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* TABLE 1: LIFECYCLE NARRATIVES */}
          <GlassPanel title="Lifecycle Narratives: Strategic Messaging" description="50 mega-narratives requiring active monitoring and strategic response" badge="50 NARRATIVES">
            <Alert className="mb-4 bg-indigo-50 border-indigo-300">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <AlertDescription className="text-xs text-slate-700">
                <strong>Cost Cycle vs. Trust Cycle:</strong> As medical inflation triggers "Fear Cycle," the state must accelerate "Trust Cycle" by demonstrating clinical excellence and digital transparency through culturally resonant storytelling.
              </AlertDescription>
            </Alert>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {lifecycleNarratives.map((item, idx) => (
                <Card key={idx} className="border border-slate-200 hover:border-indigo-300 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">{item.headline}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{item.source}</Badge>
                        </div>
                        <p className="text-xs text-slate-600 mt-2 italic">{item.counterMove}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* TABLE 2: INFLUENCER MATRIX */}
          <GlassPanel title="Strategic Influencer Leadership (SIL) Matrix" description="50 pivotal influencers acting as system nodes within the Abu Dhabi healthcare ecosystem" badge="50 INFLUENCERS">
            <Alert className="mb-4 bg-purple-50 border-purple-300">
              <Users className="h-4 w-4 text-purple-500" />
              <AlertDescription className="text-xs text-slate-700">
                <strong>Verified Network:</strong> Influencers act as translators of official policy for a multinational population. Effectively "depoliticize" medical advice, making it more palatable to a global audience.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[700px] overflow-y-auto">
              {influencerMatrix.map((item, idx) => (
                <Card key={idx} className={`border-l-4 ${
                  item.type === 'Authority' ? 'border-l-purple-500' :
                  item.type === 'System' ? 'border-l-blue-500' :
                  item.type === 'Bridge' ? 'border-l-cyan-500' :
                  item.type === 'Medical' ? 'border-l-emerald-500' :
                  item.type === 'Wellness' ? 'border-l-pink-500' :
                  item.type === 'Corporate' ? 'border-l-amber-500' :
                  item.type === 'Risk/Ally' ? 'border-l-rose-500' :
                  'border-l-slate-400'
                }`}>
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-600">{item.platform}</p>
                    <p className="text-xs text-slate-700 mt-1">{item.campaign}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* TABLE 3: CRISIS SCENARIOS */}
          <GlassPanel title="Crisis Scenario Catalog & Threat Library" description="50 distinct crisis scenarios requiring preparedness and response protocols" badge="50 SCENARIOS">
            <Alert className="mb-4 bg-rose-50 border-rose-300">
              <AlertTriangle className="h-4 w-4 text-rose-500" />
              <AlertDescription className="text-xs text-slate-700">
                <strong>High-Complexity Crisis Era:</strong> Integration of AI and cloud-based records increases functional capacity but also expands the attack surface. Crisis communication must evolve from "rebuttals" to proactive "Digital Sovereignty" brand promises.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[700px] overflow-y-auto">
              {crisisScenarios.map((item, idx) => (
                <Card key={idx} className={`border ${
                  item.impact.includes('Extreme') ? 'border-rose-400 bg-rose-50/20' :
                  item.impact.includes('High') ? 'border-amber-400 bg-amber-50/20' :
                  'border-slate-300'
                }`}>
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-600">{item.trigger}</p>
                      </div>
                      <Badge variant={
                        item.impact.includes('Extreme') ? 'destructive' :
                        item.impact.includes('High') ? 'default' : 'secondary'
                      } className="text-xs">
                        {item.speed}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-700">{item.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* TABLE 4 & 5: PAIN POINTS & TONE AUDIT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Resident Pain Points & Emotional Mapping" description="50 UX pain points with associated emotions and content solutions" badge="UX ANALYSIS">
              <Alert className="mb-3 bg-amber-50 border-amber-300">
                <Frown className="h-4 w-4 text-amber-500" />
                <AlertDescription className="text-xs text-slate-700">
                  <strong>Consistency Gap:</strong> While government vision is visionary, resident experience is often defined by "receptionist who doesn't understand 'tetanus booster'." Requires empathy training and multilingual clarity.
                </AlertDescription>
              </Alert>

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {residentPainPoints.map((item, idx) => (
                  <Card key={idx} className="border border-slate-200">
                    <CardContent className="p-2">
                      <div className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-amber-600">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-900">{item.pain}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge variant="outline" className="text-xs">{item.emotion}</Badge>
                          </div>
                          <p className="text-xs text-indigo-700 mt-1">{item.solution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Tone Audit – Resonance vs. Institutional Mismatch" description="50 examples of tone usage with strategic corrections" badge="LINGUISTIC ANALYSIS">
              <Alert className="mb-3 bg-purple-50 border-purple-300">
                <Mic className="h-4 w-4 text-purple-500" />
                <AlertDescription className="text-xs text-slate-700">
                  <strong>Connector Voice:</strong> Government must act as the link between global innovation and local community reality. Especially important for expatriate population interpreting changes through residency security lens.
                </AlertDescription>
              </Alert>

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {toneAudit.map((item, idx) => (
                  <Card key={idx} className={`border-l-4 ${
                    item.perception.includes('Resonant') ? 'border-l-emerald-500' :
                    item.perception.includes('High') ? 'border-l-emerald-400' :
                    item.perception.includes('Suspicious') || item.perception.includes('Cold') || item.perception.includes('Alarming') ? 'border-l-rose-500' :
                    'border-l-amber-400'
                  }`}>
                    <CardContent className="p-2">
                      <p className="text-xs font-semibold text-slate-900 mb-1">{item.content}</p>
                      <div className="flex flex-wrap gap-1 mb-1">
                        <Badge variant="outline" className="text-xs">{item.tone}</Badge>
                        <Badge variant="secondary" className="text-xs">{item.perception}</Badge>
                      </div>
                      <p className="text-xs text-emerald-700 italic">→ {item.correction}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* STRATEGIC CHALLENGES */}
          <GlassPanel title="Strategic Outlook: Three Primary Structural Challenges" description="Critical challenges requiring immediate attention for ecosystem success" badge="STRATEGIC CHALLENGES">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {strategicChallenges.map((challenge, idx) => (
                <Card key={idx} className="border-2 border-indigo-300 bg-indigo-50/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Shield className="h-4 w-4 text-indigo-500" />
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700 mb-2">{challenge.description}</p>
                    <div className="bg-white/50 p-2 rounded border border-indigo-200">
                      <p className="text-xs font-semibold text-indigo-900">Focus:</p>
                      <p className="text-xs text-slate-700">{challenge.focus}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          {/* STRATEGIC ANALYTICS VISUALIZATIONS */}
          <GlassPanel title="Strategic Intelligence Analytics" description="Data-driven insights from 200+ strategic data points" badge="ANALYTICS DASHBOARD">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Narratives by Category</h4>
                <BarChart
                  data={narrativeCategoryData}
                  xAxisKey="category"
                  bars={[
                    { dataKey: 'count', name: 'Count', color: CHART_COLORS.indigo }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Influencer Types Distribution</h4>
                <PieChart
                  data={influencerTypeData}
                  donut={true}
                  height={220}
                  showLegend={true}
                />
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Influencer Platform Distribution" description="Primary platforms for strategic influencers">
              <BarChart
                data={influencerPlatformData}
                xAxisKey="platform"
                bars={[
                  { dataKey: 'count', name: 'Count', color: CHART_COLORS.pink }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Crisis Severity Classification" description="50 scenarios by impact level">
              <PieChart
                data={crisisSeverityData}
                donut={true}
                height={200}
                showLegend={true}
              />
            </GlassPanel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Crisis Response Speed" description="Time to detection by scenario type">
              <BarChart
                data={crisisSpeedData}
                xAxisKey="speed"
                bars={[
                  { dataKey: 'count', name: 'Scenarios', color: CHART_COLORS.rose }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Resident Pain Point Emotions" description="Emotional mapping from 50 UX pain points">
              <BarChart
                data={painPointEmotionData}
                xAxisKey="emotion"
                bars={[
                  { dataKey: 'count', name: 'Count', color: CHART_COLORS.warning }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
          </div>

          <GlassPanel title="Tone Resonance Analysis" description="50 tone examples categorized by audience reception">
            <PieChart
              data={toneResonanceData}
              donut={true}
              height={220}
              showLegend={true}
            />
          </GlassPanel>

          {/* CONCLUSION */}
          <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-300">
            <HeartPulse className="h-4 w-4 text-indigo-500" />
            <AlertTitle className="font-bold text-indigo-900">Strategic Conclusion</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              The re-engineering of Abu Dhabi's healthcare ecosystem is a high-stakes endeavor balancing visionary growth with immediate operational friction.
              The AED 94 billion GDP contribution goal depends on the <strong>"Golden Threads"</strong> of trust and resident experience.
              By integrating narrative, human, and operational assets, Abu Dhabi can move toward becoming a global model for longevity and metabolic health.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  )
}
