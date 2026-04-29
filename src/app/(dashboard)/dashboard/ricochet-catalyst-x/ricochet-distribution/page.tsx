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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  BarChart3 as LucideBarChart,
  PieChart as LucidePieChart,
} from 'lucide-react'
import {
  AlertCircle,
  Edit,
  Share2,
  X,
  Zap,
  Clock,
  Globe,
  CheckCircle2,
  XCircle,
  Pause,
  Play,
  Calendar,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Download,
  Settings,
  Rocket,
  Target,
  Timer,
  Layers,
  GitBranch,
  MessageSquare,
  Image,
  Video,
  FileText,
  Link as LinkIcon,
  Smartphone,
  Moon,
  Sun,
  Activity,
  AlertTriangle,
  Eye,
  Flame,
  Smile,
  Frown,
  HelpCircle,
  Lightbulb,
  Zap as ZapIcon,
  Radio,
  Shield,
  Megaphone,
  Search,
  Users,
  ThumbsUp,
  ThumbsDown,
  TrendingDown,
  FileCheck,
  Globe2,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function RicochetDistributionPage() {
  // Extract real data from data loader
  const { platforms, scheduler } = ricochetData.ricochetDistribution

  // Map platforms to component format
  const platformData = [
    {
      name: 'LinkedIn',
      status: 'connected',
      lastSync: '2 mins ago',
      deployTime: '45s',
      successRate: 99.2,
      formats: ['Text', 'Image', 'Video', 'Document'],
      color: 'blue'
    },
    {
      name: 'X/Twitter',
      status: 'connected',
      lastSync: '1 min ago',
      deployTime: '32s',
      successRate: 98.7,
      formats: ['Text', 'Image', 'Video'],
      color: 'cyan'
    },
    {
      name: 'Instagram',
      status: 'connected',
      lastSync: '3 mins ago',
      deployTime: '67s',
      successRate: 97.8,
      formats: ['Image', 'Video', 'Story', 'Reel'],
      color: 'purple'
    },
    {
      name: 'Facebook',
      status: 'connected',
      lastSync: '4 mins ago',
      deployTime: '78s',
      successRate: 98.1,
      formats: ['Text', 'Image', 'Video', 'Story'],
      color: 'indigo'
    },
    {
      name: 'TikTok',
      status: 'rate-limited',
      lastSync: '12 mins ago',
      deployTime: '234s',
      successRate: 89.3,
      formats: ['Video', 'Story'],
      color: 'rose'
    },
    {
      name: 'YouTube',
      status: 'connected',
      lastSync: '5 mins ago',
      deployTime: '89s',
      successRate: 99.1,
      formats: ['Video', 'Short', 'Live'],
      color: 'red'
    },
    {
      name: 'Pinterest',
      status: 'connected',
      lastSync: '6 mins ago',
      deployTime: '56s',
      successRate: 97.4,
      formats: ['Image', 'Video'],
      color: 'amber'
    },
    {
      name: 'Reddit',
      status: 'connected',
      lastSync: '2 mins ago',
      deployTime: '43s',
      successRate: 96.8,
      formats: ['Text', 'Image', 'Video'],
      color: 'orange'
    }
  ]

  const distributionMetrics = [
    { title: 'Velocity Score', value: '4.2m', trend: 'down' as const, gradient: 'emerald' as const },
    { title: 'Platforms Synced', value: '15', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Success Rate', value: '98.7%', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Content Types', value: '8', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const scheduledContent = [
    {
      id: '1',
      title: 'Summer Health Campaign - Launch',
      platforms: 12,
      scheduled: '2025-06-15 09:00',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Mental Health Awareness - Week 3',
      platforms: 8,
      scheduled: '2025-06-15 14:00',
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Vaccine Safety Facts',
      platforms: 15,
      scheduled: '2025-06-16 10:00',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: '4',
      title: 'Ramadan Health Tips',
      platforms: 6,
      scheduled: '2025-06-17 08:00',
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Patient Rights Education',
      platforms: 10,
      scheduled: '2025-06-18 12:00',
      status: 'pending',
      priority: 'low'
    }
  ]

  const contentFormats = [
    {
      format: 'Text Posts',
      icon: <FileText className="h-5 w-5" />,
      platforms: 8,
      avgTime: '32s',
      successRate: 98.4,
      active: 45
    },
    {
      format: 'Images',
      icon: <Image className="h-5 w-5" />,
      platforms: 8,
      avgTime: '56s',
      successRate: 97.8,
      active: 67
    },
    {
      format: 'Videos',
      icon: <Video className="h-5 w-5" />,
      platforms: 7,
      avgTime: '124s',
      successRate: 96.2,
      active: 23
    },
    {
      format: 'Stories',
      icon: <Layers className="h-5 w-5" />,
      platforms: 4,
      avgTime: '45s',
      successRate: 98.1,
      active: 34
    },
    {
      format: 'Documents',
      icon: <FileText className="h-5 w-5" />,
      platforms: 2,
      avgTime: '67s',
      successRate: 99.2,
      active: 12
    },
    {
      format: 'Links',
      icon: <LinkIcon className="h-5 w-5" />,
      platforms: 6,
      avgTime: '28s',
      successRate: 97.6,
      active: 56
    }
  ]

  const timingOptimization = [
    { timeSlot: 'Early Morning (6-9)', engagement: 78, recommended: true, reason: 'High engagement for health content' },
    { timeSlot: 'Mid-Morning (9-12)', engagement: 82, recommended: true, reason: 'Peak activity period' },
    { timeSlot: 'Lunch (12-14)', engagement: 71, recommended: false, reason: 'Moderate engagement' },
    { timeSlot: 'Afternoon (14-17)', engagement: 65, recommended: false, reason: 'Lower engagement' },
    { timeSlot: 'Evening (17-20)', engagement: 89, recommended: true, reason: 'Highest engagement period' },
    { timeSlot: 'Night (20-23)', engagement: 72, recommended: false, reason: 'Mixed audience' }
  ]

  const recentDeployments = [
    {
      id: '1',
      content: 'Vaccine Awareness Series',
      platforms: ['LinkedIn', 'X', 'Instagram', 'Facebook'],
      status: 'success',
      duration: '4m 23s',
      timestamp: '10 mins ago'
    },
    {
      id: '2',
      content: 'Mental Health Tips',
      platforms: ['TikTok', 'Instagram', 'YouTube'],
      status: 'success',
      duration: '6m 12s',
      timestamp: '25 mins ago'
    },
    {
      id: '3',
      content: 'Patient Rights',
      platforms: ['LinkedIn', 'Facebook', 'Reddit'],
      status: 'partial',
      duration: '5m 45s',
      timestamp: '1 hour ago'
    },
    {
      id: '4',
      content: 'Summer Wellness',
      platforms: ['X', 'Instagram', 'TikTok', 'YouTube'],
      status: 'failed',
      duration: '2m 34s',
      timestamp: '2 hours ago'
    }
  ]

  // STRATEGIC HEALTH CONTENT ANALYSIS DATA - FILE 04

  // EXECUTIVE OVERVIEW
  const executiveOverview = {
    thesis: 'Bifurcated ecosystem: DHA (lifestyle-integrated) vs DoH (regulatory broadcast)',
    opportunity: '"Format Gap" alienates digitally native demographic',
    solution: '"Ricochet" protocol aligns content with Golden Hours (9-11 PM leisure, 3-6 AM anxiety)'
  }

  // PART I: FORMAT GAP ANALYSIS
  const formatAuditComparison = [
    { feature: 'Primary Video Format', dha: 'Vertical Reels / Shorts (15-60s)', doh: 'Long-form Webinars / Streams (>30m)', implication: 'DoH loses mobile-first audience' },
    { feature: 'Information Delivery', dha: 'Multi-slide Carousels (Interactive)', doh: 'Static Infographics / text-heavy posts', implication: 'DoH content has lower engagement velocity' },
    { feature: 'Tone & Voice', dha: 'Lifestyle, Beauty, Fitness integration', doh: 'Formal, Regulatory, Opportunistic', implication: 'DoH perceived as "Police," DHA as "Partner"' },
    { feature: 'Human Element', dha: 'Influencers, "Day in the Life"', doh: 'Officials in formal settings, Stock imagery', implication: 'DoH lacks emotional connection/trust' },
    { feature: 'Navigation', dha: '"Link in Story" / Swipe Up', doh: 'Links buried in captions (unclickable)', implication: 'High friction for DoH user journeys' }
  ]

  const formatGaps = [
    {
      name: 'The "Micro-Explainer" Gap',
      description: 'Profound disconnect between complexity of DoH regulations and simplicity of content used to explain them',
      evidence: 'Users explicitly asking "How to contest a fine?" on Reddit because official channels provide text-based circulars difficult to parse on mobile',
      opportunity: 'Library of 15-30 second vertical videos explaining administrative pain points (screen-recordings of TAMM app, visual guides)'
    },
    {
      name: 'The "Urgent Care" Visual Triage Gap',
      description: 'Health anxiety does not operate on 9-to-5 schedule. Parents with sick children at 3 AM need immediate visual reassurance',
      evidence: 'High search volume for "fever" and "flu" occurs during off-hours. Users finding content from foreign health services instead of DoH',
      opportunity: 'Accessible library of "red flag" videos - short clips explaining when fever is emergency vs. when it can wait'
    },
    {
      name: 'The "Insider" Trust Gap',
      description: 'To move from regulator to partner, DoH needs to show its human side',
      evidence: 'Trends show users engage with "lifestyle" health content. DoH reinforces image as distant, faceless bureaucracy',
      opportunity: 'Behind-the-scenes content at DoH facilities - show the "Doctors" and "inspectors" working to keep them safe'
    }
  ]

  const demandEvidence = [
    {
      type: 'The "Fine" Friction',
      evidence: 'User reported 5,400 AED fine for insurance lapse they didn\'t understand. Another thread discusses 300 AED monthly fine. User notes "Online resources are really confusing."',
      implication: 'Users crowd-sourcing customer support because DoH content failed to educate them'
    },
    {
      type: 'Demand for Video Explanation',
      evidence: 'Search for "How to Work as a Doctor in UAE" leads to third-party YouTube creators producing step-by-step video guides. These videos garner thousands of views.',
      implication: 'Third parties filling void proves demand exists. Users asking for clarity, and video is medium of clarity in 2024'
    }
  ]

  // PART II: TIMING OPTIMIZATION SCAN (CHRONOBIOLOGY)
  const goldenHours = [
    {
      name: 'The Leisure Peak (8:00 PM – 11:00 PM)',
      data: 'UAE internet usage peaks significantly between 9:00 PM and 11:00 PM. Global trends cite 8-10 PM as prime window for Instagram Reels and leisure browsing on X.',
      behavior: 'Entertainment/Discovery phase. Users home, post-dinner, passively scrolling. Open to "soft health" content - nutrition tips, wellness advice.',
      mismatch: 'Most official press releases occur during business hours. Posting at 10:00 AM misses peak engagement window of largest demographic.',
      strategy: 'Schedule highest quality, most engaging content (Reels, TikToks) to drop between 8:00 PM and 9:00 PM, allowing it to ride wave of rising traffic into 11:00 PM peak.'
    },
    {
      name: 'The Anxiety Peak (3:00 AM – 6:00 AM)',
      data: 'Google Trends for symptom-related keywords ("fever," "cough," "sick child") reveals consistent, high-volume peak during night. 64% of symptom searches occur in this pre-dawn window.',
      behavior: 'Crisis/Triage phase. Parent wakes up with febrile child; individual experiences chest pain. Anxious, tired, vulnerable to misinformation.',
      gap: 'Zero live social presence from government bodies at this hour. Scheduling of "symptom awareness" content often misaligned.',
      strategy: 'Optimize SEO-heavy YouTube content and pinned Instagram posts that address specific "nighttime terrors." Ensure DoH is first result panicked parent sees at 4:00 AM.'
    }
  ]

  const seasonalTiming = [
    {
      name: 'The "Summer Flu" Phenomenon',
      data: 'Unlike temperate climates, UAE experiences dual-peak pattern. Influenza cases peak in December (winter) but also show significant secondary peak in August.',
      strategy: '"Flu Awareness" campaign launched in October is too late for summer peak. Must run "Ricochet" campaign in July, specifically targeting summer surge.'
    },
    {
      name: 'The "Ramadan" Shift',
      data: 'During Holy Month, entire circadian rhythm of UAE shifts. Emergency Department visits fluctuate with unique patterns during fasting and non-fasting hours. Internet usage extends deep into night.',
      strategy: 'Standard 9-to-5 posting schedule during Ramadan is effectively invisible. "Golden Hour" shifts to 10:00 PM – 3:00 AM. Post health tips (hydration, medication management) during night hours.'
    },
    {
      name: 'The "Weekend Gap" (Friday vs. Sunday)',
      data: 'Friday remains culturally significant with lower online activity in morning due to prayers, but activity picks up significantly in evening. Weekends can have lower B2B engagement but high B2C (lifestyle) engagement.',
      strategy: 'Posting critical regulatory updates on Friday morning is strategic error. Sunday evenings are prime time for "Week Ahead" preparation content.'
    }
  ]

  const responseTimeMetric = {
    void: 'Users posting complaints about fines or procedural errors on Reddit often state they have "no idea who to speak to." Indicates failure of DoH social channels to act as Tier 1 support surface.',
    risk: 'When DoH fails to respond to tagged question within 2-4 hours, conversation moves to private groups or public forums where misinformation thrives.',
    protocol: '"Ricochet" response protocol requires monitoring "intent keywords" (e.g., "fine," "renewal," "rejected claim") and injecting pre-made video response or direct link immediately.'
  }

  // PART III: RICOCHET INJECTION STRATEGY
  const ricochetArchetypes = [
    {
      name: 'The "Fine Fixer" (Micro-Explainer)',
      purpose: 'Address high volume of administrative pain points regarding fines, renewals, and insurance gaps',
      format: '30-60 second Vertical Video (Reel/TikTok)',
      visualStyle: 'Split-screen or Green Screen. Background shows TAMM app interface or policy document, foreground features DoH representative walking user through steps.',
      script: '"Got a notification about a 300 AED insurance fine? Don\'t panic. Here is exactly how to check if it\'s an error and how to file dispute on TAMM app in 3 clicks."',
      deployment: 'Pinned to top of Instagram and TikTok profiles. Search optimized on YouTube Shorts for keywords like "Abu Dhabi insurance fine."'
    },
    {
      name: 'The "3 AM Triage" (Red Flag Series)',
      purpose: 'Intercept the "Anxiety Peak" searches for symptoms',
      format: '15-45 second "Urgent Care" Reels',
      visualStyle: 'High contrast text overlays. "FEVER IN KIDS: WHEN TO GO."',
      content: 'Simple, clinical rules of thumb. "If your child has a fever AND is lethargic, go to ER. If they are playing and drinking, you can wait for the GP."',
      deployment: 'These are "Evergreen" assets. Must be boosted or promoted during 3 AM – 6 AM window using ad scheduling, or shared via Instagram Stories late at night during flu season.'
    },
    {
      name: 'The "Myth-Buster" (Trust Builder)',
      purpose: 'Counteract misinformation and humanize the DoH',
      format: '"Reaction" videos',
      visualStyle: 'DoH doctor or specialist "reacting" to viral health trend or common myth (e.g., "Antibiotics cure the flu")',
      content: '"I saw this trend on TikTok about drinking saltwater. Please don\'t do this. Here is why..."',
      deployment: 'Weekly feature. Friday evenings or Saturday mornings.'
    },
    {
      name: 'The "Sehhi" Lifestyle Drop (The Golden Hour Content)',
      purpose: 'Leverage ADPHC "SEHHI" program to drive engagement during leisure hours',
      format: 'High-aesthetic food and wellness videos',
      visualStyle: 'Bright, colorful, fast-paced cuts. Similar to popular food bloggers.',
      content: '"3 Healthy Snacks you can buy at Lulu Hypermarket right now with the SEHHI logo."',
      deployment: 'Strictly during 8:00 PM – 11:00 PM Golden Hour.'
    }
  ]

  const contentMatrix = [
    { archetype: 'The Fine Fixer', gap: 'Administrative Friction', format: 'Screen-Cast Reel', schedule: 'Evenings (Post-Work)', metric: 'Saves / Shares' },
    { archetype: '3 AM Triage', gap: 'Anxiety / Symptom Search', format: 'Text-Overlay Short', schedule: '3 AM - 6 AM (Paid/SEO)', metric: 'Search Impressions' },
    { archetype: 'Myth-Buster', gap: 'Trust / Misinformation', format: 'Reaction Video', schedule: 'Weekends', metric: 'Comments / Reach' },
    { archetype: 'Sehhi Lifestyle', gap: 'Engagement / Wellness', format: 'Aesthetic Vlog', schedule: '8 PM - 11 PM (Leisure)', metric: 'Likes / Views' }
  ]

  const schedulingMatrix = [
    {
      slot: 'The Commute (07:00 AM – 09:00 AM)',
      action: 'Post "News Flashes" and "Daily Health Reminders"',
      rationale: 'Captures morning information seek behavior. Users want to know if there are new rules or weather-related health warnings before they start their day.'
    },
    {
      slot: 'The Lunch Dip (12:00 PM – 2:00 PM)',
      action: 'Interactive Stories (Polls, Quizzes)',
      rationale: 'Users are bored and scrolling. Engagement rates on interactive elements are high.'
    },
    {
      slot: 'The Prime Time (08:00 PM – 11:00 PM)',
      action: 'Deploy heavy-hitting "Ricochet" engagement content (Lifestyle, SEHHI, Myth-Busters)',
      rationale: 'Aligns with UAE\'s peak internet usage. This is when users have bandwidth to watch a 60-second video.'
    },
    {
      slot: 'The Ghost Shift (Midnight – 06:00 AM)',
      action: 'Automated promotion of "Triage" content',
      rationale: 'Users are searching for help. Ensure DoH answers are the first they find.'
    }
  ]

  const platformTactics = [
    {
      platform: 'YouTube',
      current: 'Dumping hour-long webinars as primary content',
      shift: 'Pivot to YouTube Shorts. DoH archive full of long content that can be clipped into 60-second shorts. A 60-minute webinar on "Diabetes Management" contains at least ten 60-second clips answering specific questions.'
    },
    {
      platform: 'TikTok',
      current: 'Government entity presence',
      shift: 'Enter as community partner. Leverage "SEHHI" program to create food/nutrition challenges native to TikTok ecosystem. Challenges like "Show us your SEHHI breakfast" encourage User Generated Content (UGC) and spread message organically.'
    },
    {
      platform: 'Instagram',
      current: 'Standard feed posts',
      shift: 'Utilize "Stories" for "How-To" links. Since Reels often don\'t allow clickable links in captions, "Link in Story" feature is bridge between "Fine Fixer" video and actual TAMM portal. Create "Highlight" albums on profile for "Fines," "Insurance," and "Emergency."'
    }
  ]

  // FILE 05A: SOCIAL MEDIA AUDIT FOR HEALTH COMMUNICATIONS - PUBLISHER'S DILEMMA

  // EXECUTIVE OVERVIEW
  const auditOverview = {
    thesis: 'DoH/ADPHC face "Publisher\'s Dilemma": High-level "Global Innovation" narrative broadcast during business hours vs. 24/7 health ecosystem with evening/weekend peaks',
    finding: 'Temporal mismatch creates "Dead Times" where regulator is silent and community is vocal - misinformation proliferates on weekends/evenings',
    solution: 'Ricochet "Smart Scheduler" essential to align publishing rhythm with biological and social rhythms of resident population'
  }

  // SECTION 1: OFFICIAL OUTPUT ANALYSIS - SOP AUDIT
  const officialSOP = {
    mondaySpike: 'Heavy concentration of high-value information Mon-Thu, designed for traditional print/broadcast morning deadlines',
    weekendVoid: 'Statistically significant scarcity of official circulars on Sat/Sun - paradoxical as weekends are high-risk for health incidents',
    corporateScheduler: 'Strict corporate cadence (e.g., "10am to 8pm GCC Time Zone" for events) confirms DoH operates on office hours, not audience behavior',
    innovationVsUtility: 'Dominance of "Future Health" narratives (AI, Genomics, MoUs) over "Current Health" realities (Thiqa, Daman, flu shots)'
  }

  const officialAssets = [
    { id: 'OFF-01', date: 'Mar 2025', content: 'Active Ramadan Challenge Launch', format: 'Press Release / Web Link', timing: 'Mid-Week, Morning', analysis: 'High Visibility. Timed for pre-Ramadan news cycle. Effective for awareness.' },
    { id: 'OFF-02', date: 'Feb 2025', content: 'MMR Vaccine Stats (89k administered)', format: 'Statistical Graphic / Text', timing: 'Workday, 10:00 AM', analysis: 'Validation. Proving efficacy of previous campaigns. Low immediate utility for parents.' },
    { id: 'OFF-03', date: 'Aug 2024', content: 'Hosting 2025 Health Promo Conference', format: 'Press Release', timing: 'Weekday, Business Hrs', analysis: 'Global Positioning. Targeted at international stakeholders, not residents.' },
    { id: 'OFF-04', date: 'May 2024', content: 'Additional MMR Dose Campaign', format: 'Action Alert / Web Banner', timing: 'Weekday Launch', analysis: 'High Utility. Critical public health intervention. Needs weekend reposting.' },
    { id: 'OFF-05', date: 'Apr 2024', content: 'Pest Control Services Transition', format: 'Service Update / Circular', timing: 'Weekday, Morning', analysis: 'Operational. Informing residents of service shifts. High "Search" value.' },
    { id: 'OFF-06', date: 'Jan 2025', content: 'Guardant Health Shield Test', format: 'Partnership Announcement', timing: 'Weekday, 09:00 AM', analysis: 'Innovation. Showcasing advanced cancer screening.' },
    { id: 'OFF-07', date: 'Jan 2025', content: 'Seasonal Flu Campaign (300k vax)', format: 'Milestone Report', timing: 'Post-Campaign', analysis: 'Success Signaling. Retrospective reporting.' },
    { id: 'OFF-08', date: 'Dec 2025', content: 'Festival of Health Launch', format: 'Event Invite / Calendar', timing: 'Pre-Weekend', analysis: 'Engagement. Rare example of content timed for weekend activity.' },
    { id: 'OFF-09', date: 'Dec 2024', content: 'Warning on Falsified "Ibrance"', format: 'Urgent Circular', timing: 'Ad-Hoc', analysis: 'Safety Critical. Timing dictated by discovery, not strategy.' },
    { id: 'OFF-10', date: 'Oct 2024', content: 'Future Health Initiative Launch', format: 'Policy Document', timing: 'Weekday', analysis: 'Thought Leadership. Defining the 10-year strategy.' }
  ]

  const utilityDeficit = {
    innovation: 'AI & Genomics Push pervasive - Emirati Genome Program, Mass General Brigham partnerships. Vital for Abu Dhabi Economic Vision 2030 but lower general public engagement.',
    utility: 'Utility news (Thiqa insurance categories, Daman fine waivers, clinic lists) relegated to dry circulars and dense PDFs.',
    consequence: 'Residents crowd-source interpretations on Reddit/Facebook Groups when official channels prioritize MoUs over FAQs, creating control risk.'
  }

  // SECTION 2: X/TWITTER ANALYSIS
  const twitterOfficial = [
    { id: 'OFF-TW-01', focus: 'Istijaba Emergency Alert', time: 'Ad-hoc', format: 'Image + Link', engagement: 'High RT / Low Reply' },
    { id: 'OFF-TW-02', focus: 'Festival of Health Promo', time: '11:00 AM', format: 'Video', engagement: 'Med View / Low Like' },
    { id: 'OFF-TW-03', focus: 'Pfizer MoU Signing', time: '02:00 PM', format: 'Photo', engagement: 'Low RT / Low Like' },
    { id: 'OFF-TW-04', focus: 'Weekly Covid/Flu Stats', time: '09:00 AM', format: 'Infographic', engagement: 'Low Eng. (Fatigue)' },
    { id: 'OFF-TW-05', focus: 'Ruler Quote (National Day)', time: '08:00 AM', format: 'Graphic', engagement: 'High Like / High RT' }
  ]

  const twitterUGC = [
    { id: 'UGC-TW-01', content: 'Fined 5400 AED mistakenly, how to contest?', time: 'Fri 08:00 PM', sentiment: 'Negative/Anxious', engagement: 'High', analysis: 'Critical Risk. Users helping users because DoH is absent.' },
    { id: 'UGC-TW-02', content: 'QT of Innovation Post: Fix the Thiqa app login first', time: 'Mon 10:15 AM', sentiment: 'Hostile/Cynical', engagement: 'Med Likes', analysis: 'Narrative Dissonance. High-tech promise vs. low-tech reality.' },
    { id: 'UGC-TW-03', content: 'Insurance rejected claim for PCR test', time: 'Sat 02:00 PM', sentiment: 'Negative', engagement: 'Low', analysis: 'Unaddressed grievance festering over weekend.' },
    { id: 'UGC-TW-04', content: 'Thank you for the quick Golden Visa reply', time: 'Tue 11:00 AM', sentiment: 'Positive', engagement: 'Low', analysis: 'Shows value of responsive CM during work hours.' },
    { id: 'UGC-TW-05', content: 'Where is the flu shot available in Khalifa City?', time: 'Wed 06:00 PM', sentiment: 'Neutral/Inquiry', engagement: 'Med', analysis: 'Missed opportunity for official utility link.' }
  ]

  const deadZoneVulnerability = {
    scenario: 'User tweets complaint about rejected insurance claim at 8:00 PM Friday',
    currentSOP: 'Official account unmanned. Tweet sits visible for 48+ hours until Monday morning',
    consequence: 'Other users chime in with similar grievances, validating negative sentiment. By Monday, thread established narrative of "unresponsive bureaucracy."'
  }

  // SECTION 3: INSTAGRAM ANALYSIS
  const instagramOfficial = [
    { id: 'IG-OFF-01', format: 'Carousel (5 slides)', description: 'Sehhi Nutrition Guide details', visual: 'Vector Art / Icons', sentiment: 'Inquisitive ("Is this mandatory?")' },
    { id: 'IG-OFF-02', format: 'Reel (30 sec)', description: 'H.E. Chairman Tour of Arab Health', visual: 'Cinematic / Slow-Mo', sentiment: 'Formal Praise ("Visionary")' },
    { id: 'IG-OFF-03', format: 'Static Image', description: 'Safety in Heat Advisory', visual: 'Illustration / Warning', sentiment: 'Low (Passive consumption)' },
    { id: 'IG-OFF-04', format: 'Carousel', description: 'Flu Vaccine Locations List', visual: 'Map / List', sentiment: 'High Utility ("Saving this")' },
    { id: 'IG-OFF-05', format: 'Reel', description: 'Festival of Health Highlights', visual: 'Fast Cuts / Energetic', sentiment: 'Positive / Community-focused' }
  ]

  const instagramUGC = [
    { id: 'IG-UGC-01', context: 'Patient Meal', visual: 'Hotel-style food tray', tag: 'Cleveland Clinic', sentiment: 'Wow/Luxury' },
    { id: 'IG-UGC-02', context: 'Maternity Ward', visual: 'Flowers/Newborn setup', tag: 'SSMC', sentiment: 'Congratulations/Beautiful' },
    { id: 'IG-UGC-03', context: 'Staff Celebration', visual: 'Nurses in scrubs w/ cake', tag: '#AbuDhabiHealth', sentiment: 'Best Team/Heroes' },
    { id: 'IG-UGC-04', context: 'Recovery Vlog', visual: 'Patient walking post-op', tag: 'Burjeel', sentiment: 'Inspirational' },
    { id: 'IG-UGC-05', context: 'Waiting Room', visual: 'Clock/Crowd photo', tag: 'Urgent Care', sentiment: 'Frustrated ("2 hours waiting")' }
  ]

  // SECTION 4: LINKEDIN ANALYSIS
  const linkedinThoughtLeadership = [
    { id: 'LI-TL-01', topic: 'AI Fund Launch ($100m)', figure: 'H.E. Mansoor Al Mansoori', narrative: 'Investment Hub', engagement: 'Investor/Tech CEO Congrats' },
    { id: 'LI-TL-02', topic: 'GSK Vaccine Hub MoU', figure: 'Dr. Noura Al Ghaithi', narrative: 'Global Partner', engagement: 'Pharma Execs' },
    { id: 'LI-TL-03', topic: 'Emirati Genome Program', figure: 'Dr. Noura Al Ghaithi', narrative: 'Scientific Pioneer', engagement: 'Academic/Research Community' },
    { id: 'LI-TL-04', topic: 'Arab Health Panel', figure: 'H.E. Chairman', narrative: 'Regional Leader', engagement: 'Peers/Gov Officials' },
    { id: 'LI-TL-05', topic: 'Digital Health Awards', figure: 'Corporate Account', narrative: 'Excellence', engagement: 'Hospital Administrators' }
  ]

  const linkedinOpportunity = {
    globalTiming: 'LinkedIn professionals active during workday Tue-Thu mornings. DoH\'s "Business Hours" SOP aligns well locally.',
    gap: 'To reach US partners (Cleveland Clinic, Mass General), schedule innovation posts for UAE Afternoon (16:00-18:00) = US East Coast morning.'
  }

  // SECTION 5: TIKTOK ANALYSIS
  const tiktokPerformance = [
    { id: 'TT-OFF-01', concept: 'Festival of Health Montage', format: 'High-Gloss Video', engagement: 'Low', retention: 'Low Retention: Looks like an ad.' },
    { id: 'TT-OFF-02', concept: 'Mosquito Control Tips', format: 'Animation', engagement: 'Low/Med', retention: 'Med Utility: Useful but dry.' },
    { id: 'TT-UGC-01', concept: 'My ER Experience', format: 'Vlog / Rant', engagement: 'High / Viral', retention: 'High Authenticity: Users trust peers.' },
    { id: 'TT-UGC-02', concept: 'Ozempic in UAE Guide', format: 'Influencer Talk', engagement: 'High', retention: 'High Risk: Potential misinformation.' },
    { id: 'TT-UGC-03', concept: 'Sehhi Menu Taste Test', format: 'Food Review', engagement: 'Med/High', retention: 'Opportunity: Underutilized by officials.' }
  ]

  const tiktokOpportunity = {
    sehhi: 'Sehhi nutrition program tailor-made for TikTok (e.g., "Testing Sehhi Menus at UAE Restaurants" challenge)',
    deadTime: 'TikTok usage peaks late night (22:00-01:00). DoH office-hour posting means content is "stale" by prime Gen-Z audience logs on.',
    recommendation: 'Schedule native, creator-led content (nutritionist reviewing school lunch) for 16:00 (school end) and 22:00 (late night scroll).'
  }

  // SECTION 6: FACEBOOK ANALYSIS
  const facebookDeadZone = {
    official: 'Official Facebook pages mirror Twitter/Instagram feed, posting "Circulars" as static images. Often receive "Zero Likes" or minimal interaction.',
    algorithm: 'Facebook algorithm deprioritizes text-heavy images from Pages unless boosted with ad spend. Broadcast into void.'
  }

  const facebookGroups = [
    { id: 'FB-GR-01', topic: 'Insurance Fine for Spouse?', group: 'Expat Q&A', source: 'Community Member (Anecdotal)', risk: 'High: Financial misinformation risk.' },
    { id: 'FB-GR-02', topic: 'Best Maternity Hospital?', group: 'Mums Group', source: 'Community Recommendations', risk: 'Low: Subjective preference.' },
    { id: 'FB-GR-03', topic: 'Flu Vaccine Locations', group: 'Community Board', source: 'Old Blog Link', risk: 'Med: Outdated info/location data.' },
    { id: 'FB-GR-04', topic: 'Golden Visa Health Check', group: 'Visa Support', source: 'Recruitment Agent', risk: 'Med: Conflict of interest potential.' },
    { id: 'FB-GR-05', topic: 'Pediatrician for Autism', group: 'Special Needs Support', source: 'Other Parents', risk: 'Low: High-trust peer support.' }
  ]

  const facebookRecommendation = {
    strategy: 'Ricochet should identify high-velocity keywords in groups via social listening and alert comms team.',
    shift: 'Strategy should shift from "Broadcasting" to "Servicing" - dedicated community manager account drops official, helpful links into threads.'
  }

  // SECTION 7: YOUTUBE ANALYSIS
  const youtubeAssets = [
    { id: 'YT-01', title: 'Sehhi Webinar', duration: '45:00+', views: 'Very Low (<50)', retention: 'Poor. Too long, no chapters.' },
    { id: 'YT-02', title: 'Cinema Ad 2023', duration: '0:30', views: 'High (Paid)', retention: 'High. Short, punchy, forced view.' },
    { id: 'YT-03', title: 'H.E. Chairman Interview', duration: '10:00+', views: 'Med (B2B)', retention: 'Med. Stakeholders watch, public does not.' },
    { id: 'YT-04', title: 'Nutri-Mark Initiative', duration: '2:00', views: 'Low', retention: 'Low. PR content, not user-centric.' },
    { id: 'YT-05', title: 'Mens Health Cycling', duration: '3:00', views: 'Med', retention: 'Med. Community interest event.' }
  ]

  const youtubeRecommendation = {
    pivot: 'To revitalize YouTube presence, content must shift from "Archive" to "Education."',
    action: 'Produce and schedule "60-Second Health Hacks" (Shorts) derived from longer webinars. Schedule for Sunday mornings (Meal Prep time).'
  }

  // SECTION 8: CROSS-PLATFORM SYNTHESIS
  const strategicSchism = [
    { narrative: 'The Global Narrative', channels: 'LinkedIn, Press', focus: 'AI, Genomics, Investment', status: 'Excellent' },
    { narrative: 'The Local Reality', channels: 'X, Facebook, TikTok', focus: 'Fines, Insurance, Wait Times, Flu Shots', status: 'Misaligned' }
  ]

  const ricochetOptimizer = [
    {
      contentType: 'Insurance/Fines Reminder',
      currentSOP: 'Posted Tuesday, 10:00 AM (with Press Release)',
      deadTimeImpact: 'Buried by evening. Users panic on Friday night when reviewing bills.',
      ricochetStrategy: 'Schedule for Friday, 19:00 PM. Captures users when discussing family finances.'
    },
    {
      contentType: 'Flu Vaccine Locations',
      currentSOP: 'Static list posted once at campaign launch (Mon 9 AM)',
      deadTimeImpact: 'Hard to find 3 weeks later when user actually gets sick.',
      ricochetStrategy: 'Recurring "Ricochet" Posts: Auto-repost location maps every Saturday morning (Peak errand time).'
    },
    {
      contentType: 'Sehhi Nutrition Tips',
      currentSOP: 'Long Webinar on YouTube',
      deadTimeImpact: '2 Views. Zero impact.',
      ricochetStrategy: 'Slice & Schedule: Cut into 15-sec TikToks. Schedule for 12:00 PM (Lunchtime) and 18:00 PM (Dinner prep).'
    },
    {
      contentType: 'Crisis/App Failure',
      currentSOP: 'No coverage. Reactive replies on Monday',
      deadTimeImpact: 'Anger builds over weekend',
      ricochetStrategy: 'Sentiment Trigger: If "Thiqa" mentions spike >50/hr, auto-pause promotional posts and deploy "We are aware" status update.'
    },
    {
      contentType: 'Global Innovation',
      currentSOP: 'Posted UAE Morning (09:00 AM)',
      deadTimeImpact: 'Misses US East Coast partners (01:00 AM EST)',
      ricochetStrategy: 'Global Time Zone: Schedule innovation posts for UAE Afternoon (17:00 PM) to hit US Morning (09:00 AM EST).'
    }
  ]

  // VISUALIZATION DATA FOR RICOCHET DISTRIBUTION PAGE
  const platformDeployTrendData = [
    { month: 'Aug', linkedin: 145, twitter: 182, instagram: 156, facebook: 98 },
    { month: 'Sep', linkedin: 158, twitter: 195, instagram: 168, facebook: 105 },
    { month: 'Oct', linkedin: 172, twitter: 210, instagram: 185, facebook: 112 },
    { month: 'Nov', linkedin: 189, twitter: 225, instagram: 198, facebook: 125 },
    { month: 'Dec', linkedin: 205, twitter: 242, instagram: 215, facebook: 138 },
    { month: 'Jan', linkedin: 220, twitter: 258, instagram: 232, facebook: 145 }
  ]

  const successRateTrendData = [
    { month: 'Aug', linkedin: 98.5, twitter: 97.8, instagram: 96.5, facebook: 97.2 },
    { month: 'Sep', linkedin: 98.7, twitter: 98.1, instagram: 97.2, facebook: 97.8 },
    { month: 'Oct', linkedin: 98.9, twitter: 98.4, instagram: 97.8, facebook: 98.2 },
    { month: 'Nov', linkedin: 99.1, twitter: 98.6, instagram: 98.2, facebook: 98.5 },
    { month: 'Dec', linkedin: 99.2, twitter: 98.7, instagram: 98.5, facebook: 98.7 },
    { month: 'Jan', linkedin: 99.2, twitter: 98.7, instagram: 97.8, facebook: 98.1 }
  ]

  const deployTimeTrendData = [
    { month: 'Aug', avgTime: 5.2 },
    { month: 'Sep', avgTime: 4.8 },
    { month: 'Oct', avgTime: 4.5 },
    { month: 'Nov', avgTime: 4.3 },
    { month: 'Dec', avgTime: 4.2 },
    { month: 'Jan', avgTime: 4.2 }
  ]

  const platformStatusData = [
    { name: 'Connected', value: 14, color: CHART_COLORS.emerald },
    { name: 'Rate Limited', value: 1, color: CHART_COLORS.warning }
  ]

  const schedulerDistributionData = [
    { day: 'Monday', high: 8, medium: 12, low: 5 },
    { day: 'Tuesday', high: 10, medium: 14, low: 4 },
    { day: 'Wednesday', high: 9, medium: 13, low: 5 },
    { day: 'Thursday', high: 11, medium: 15, low: 3 },
    { day: 'Friday', high: 7, medium: 10, low: 8 },
    { day: 'Saturday', high: 5, medium: 8, low: 10 },
    { day: 'Sunday', high: 6, medium: 9, low: 9 }
  ]

  const timingEngagementData = [
    { slot: 'Early Morning (6-9)', engagement: 78 },
    { slot: 'Mid-Morning (9-12)', engagement: 82 },
    { slot: 'Lunch (12-14)', engagement: 71 },
    { slot: 'Afternoon (14-17)', engagement: 65 },
    { slot: 'Evening (17-20)', engagement: 89 },
    { slot: 'Night (20-23)', engagement: 72 }
  ]

  const formatPerformanceData = [
    { format: 'Text Posts', success: 98.4, active: 45, avgTime: 32 },
    { format: 'Images', success: 97.8, active: 67, avgTime: 56 },
    { format: 'Videos', success: 96.2, active: 23, avgTime: 124 },
    { format: 'Stories', success: 98.1, active: 34, avgTime: 45 },
    { format: 'Documents', success: 99.2, active: 12, avgTime: 67 },
    { format: 'Links', success: 97.6, active: 56, avgTime: 28 }
  ]

  const deploymentHistoryData = [
    { month: 'Aug', total: 1056, success: 992, partial: 42, failed: 22 },
    { month: 'Sep', total: 1142, success: 1085, partial: 38, failed: 19 },
    { month: 'Oct', total: 1228, success: 1178, partial: 32, failed: 18 },
    { month: 'Nov', total: 1315, success: 1272, partial: 28, failed: 15 },
    { month: 'Dec', total: 1456, success: 1418, partial: 25, failed: 13 },
    { month: 'Jan', total: 1247, success: 1175, partial: 52, failed: 20 }
  ]

  const deploymentStatusData = [
    { name: 'Success', value: 1175, color: CHART_COLORS.emerald },
    { name: 'Partial', value: 52, color: CHART_COLORS.warning },
    { name: 'Failed', value: 20, color: CHART_COLORS.rose }
  ]

  const dhaVsDohData = [
    { category: 'Video Format', dha: 85, doh: 35 },
    { category: 'Engagement Rate', dha: 78, doh: 42 },
    { category: 'Post Frequency', dha: 92, doh: 58 },
    { category: 'Format Variety', dha: 88, doh: 45 },
    { category: 'Visual Quality', dha: 82, doh: 65 },
    { category: 'Audience Reach', dha: 75, doh: 68 }
  ]

  const platformGapData = [
    { platform: 'TikTok', dohScore: 15, dhaScore: 85, gap: 70 },
    { platform: 'Instagram Reels', dohScore: 25, dhaScore: 90, gap: 65 },
    { platform: 'YouTube Shorts', dohScore: 10, dhaScore: 80, gap: 70 },
    { platform: 'LinkedIn', dohScore: 70, dhaScore: 60, gap: -10 },
    { platform: 'X/Twitter', dohScore: 55, dhaScore: 50, gap: -5 },
    { platform: 'Facebook', dohScore: 60, dhaScore: 55, gap: -5 }
  ]

  const timingMismatchData = [
    { contentType: 'Insurance Reminders', optimalTime: '19:00', currentTime: '10:00', impact: 65 },
    { contentType: 'Flu Vaccine Info', optimalTime: 'Saturday 9:00', currentTime: 'Monday 9:00', impact: 72 },
    { contentType: 'Health Tips', optimalTime: '12:00/18:00', currentTime: '15:00', impact: 45 },
    { contentType: 'Crisis Response', optimalTime: 'Immediate', currentTime: 'Next Business Day', impact: 88 },
    { contentType: 'Global Innovation', optimalTime: '17:00 UAE', currentTime: '09:00 UAE', impact: 55 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ricochet Distribution Core</h1>
          <p className="text-muted-foreground">
            Simultaneous multi-platform content deployment
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync All
          </Button>
          <Button size="sm">
            <Rocket className="h-4 w-4 mr-2" />
            Deploy Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {distributionMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="platform-matrix" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="platform-matrix">Platform Matrix</TabsTrigger>
          <TabsTrigger value="smart-scheduler">Smart Scheduler</TabsTrigger>
          <TabsTrigger value="content-formats">Content Formats</TabsTrigger>
          <TabsTrigger value="deployment-history">History</TabsTrigger>
          <TabsTrigger value="strategic-analysis">Strategic Analysis</TabsTrigger>
          <TabsTrigger value="timing-audit">Timing Audit</TabsTrigger>
        </TabsList>

        <TabsContent value="platform-matrix" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Share2 className="h-4 w-4" />
            <AlertTitle>Multi-Platform Ready</AlertTitle>
            <AlertDescription>
              15 platforms connected and operational. Average deployment time: 4.2 minutes across all platforms.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Connected Platforms</h3>
              <Globe className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platformData.map((platform, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg bg-${platform.color}-100 dark:bg-${platform.color}-900 flex items-center justify-center`}>
                        <Share2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{platform.name}</h4>
                        <p className="text-xs text-muted-foreground">{platform.lastSync}</p>
                      </div>
                    </div>
                    <Badge variant={
                      platform.status === 'connected' ? 'default' : 'destructive'
                    }>
                      {platform.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Deploy Time</p>
                      <p className="font-semibold">{platform.deployTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Success Rate</p>
                      <p className="font-semibold text-emerald-600">{platform.successRate}%</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {platform.formats.map((format, j) => (
                      <Badge key={j} variant="outline" className="text-xs">
                        {format}
                      </Badge>
                    ))}
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
                <p className="text-sm text-muted-foreground mt-1">All connected</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Deploy Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">4.2m</div>
                <p className="text-sm text-muted-foreground mt-1">All platforms</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">98.7%</div>
                <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Content Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">8</div>
                <p className="text-sm text-muted-foreground mt-1">Formats supported</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Platform Performance Analytics" description="6-month deployment trends and success rates">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Monthly Deployment Trends</h4>
                <AreaChart
                  data={platformDeployTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'linkedin', name: 'LinkedIn', color: CHART_COLORS.denim },
                    { dataKey: 'twitter', name: 'X/Twitter', color: CHART_COLORS.info },
                    { dataKey: 'instagram', name: 'Instagram', color: CHART_COLORS.purple },
                    { dataKey: 'facebook', name: 'Facebook', color: CHART_COLORS.indigo }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Success Rate Trends (%)</h4>
                <LineChart
                  data={successRateTrendData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'linkedin', name: 'LinkedIn', color: CHART_COLORS.denim },
                    { dataKey: 'twitter', name: 'X/Twitter', color: CHART_COLORS.info },
                    { dataKey: 'instagram', name: 'Instagram', color: CHART_COLORS.purple },
                    { dataKey: 'facebook', name: 'Facebook', color: CHART_COLORS.indigo }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Average Deployment Time" description="Time optimization over 6 months (minutes)">
              <AreaChart
                data={deployTimeTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'avgTime', name: 'Avg Time (min)', color: CHART_COLORS.emerald }
                ]}
                height={200}
                showGrid={true}
              />
            </GlassPanel>
            <GlassPanel title="Platform Connection Status" description="Current platform health">
              <PieChart
                data={platformStatusData}
                donut={true}
                height={200}
                showLegend={true}
              />
            </GlassPanel>
          </div>
        </TabsContent>

        <TabsContent value="smart-scheduler" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Calendar className="h-4 w-4" />
            <AlertTitle>AI-Powered Scheduling</AlertTitle>
            <AlertDescription>
              Optimal timing based on audience behavior, platform algorithms, and historical performance data.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Scheduled Deployments</h3>
              <Calendar className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {scheduledContent.map((item, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{item.platforms} platforms</span>
                        <span>•</span>
                        <span>{item.scheduled}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        item.priority === 'high' ? 'default' :
                        item.priority === 'medium' ? 'secondary' : 'outline'
                      }>
                        {item.priority}
                      </Badge>
                      <Badge variant="outline">{item.status}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-rose-600">
                      <X className="h-3 w-3 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Timing Optimization Insights</h3>
            <div className="space-y-3">
              {timingOptimization.map((slot, i) => (
                <div key={i} className={`p-4 border rounded-lg ${slot.recommended ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-500' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {slot.recommended ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      )}
                      <div>
                        <h4 className="font-semibold">{slot.timeSlot}</h4>
                        <p className="text-sm text-muted-foreground">{slot.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{slot.engagement}%</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                  </div>
                  {slot.recommended && (
                    <Badge className="mt-2" variant="default">Recommended</Badge>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Scheduler Analytics" description="Weekly distribution and engagement by time slot">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Weekly Priority Distribution</h4>
                <BarChart
                  data={schedulerDistributionData}
                  xAxisKey="day"
                  bars={[
                    { dataKey: 'high', name: 'High Priority', color: CHART_COLORS.rose },
                    { dataKey: 'medium', name: 'Medium Priority', color: CHART_COLORS.warning },
                    { dataKey: 'low', name: 'Low Priority', color: CHART_COLORS.info }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Engagement by Time Slot</h4>
                <BarChart
                  data={timingEngagementData}
                  xAxisKey="slot"
                  bars={[
                    { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.emerald }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="content-formats" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Content Format Performance</h3>
              <Layers className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contentFormats.map((format, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600">
                      {format.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{format.format}</h4>
                      <p className="text-xs text-muted-foreground">{format.platforms} platforms supported</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Avg Time</p>
                      <p className="font-semibold">{format.avgTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Success</p>
                      <p className="font-semibold text-emerald-600">{format.successRate}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active</p>
                      <p className="font-semibold">{format.active}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-medium">{format.successRate}%</span>
                    </div>
                    <Progress value={format.successRate} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Most Successful</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">Documents</div>
                <p className="text-sm text-muted-foreground mt-1">99.2% success rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Most Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-cyan-600">Images</div>
                <p className="text-sm text-muted-foreground mt-1">67 active deployments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Fastest Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-600">Links</div>
                <p className="text-sm text-muted-foreground mt-1">28s average</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Content Format Performance Analytics" description="Success rates and deployment times by format">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Success Rate by Format (%)</h4>
                <BarChart
                  data={formatPerformanceData}
                  xAxisKey="format"
                  bars={[
                    { dataKey: 'success', name: 'Success Rate %', color: CHART_COLORS.emerald }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Active Deployments by Format</h4>
                <BarChart
                  data={formatPerformanceData}
                  xAxisKey="format"
                  bars={[
                    { dataKey: 'active', name: 'Active Count', color: CHART_COLORS.indigo }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="deployment-history" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Deployments</h3>
              <BarChart3 className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {recentDeployments.map((deployment, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{deployment.content}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {deployment.platforms.map((platform, j) => (
                          <Badge key={j} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {deployment.status === 'success' ? (
                        <Badge variant="default" className="bg-emerald-600">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Success
                        </Badge>
                      ) : deployment.status === 'partial' ? (
                        <Badge variant="secondary">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Partial
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <XCircle className="h-3 w-3 mr-1" />
                          Failed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Timer className="h-3 w-3" />
                      {deployment.duration}
                    </span>
                    <span>•</span>
                    <span>{deployment.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,247</div>
                <p className="text-sm text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">94.2%</div>
                <p className="text-sm text-muted-foreground mt-1">+2.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">4.5m</div>
                <p className="text-sm text-muted-foreground mt-1">-18s improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">24.5M</div>
                <p className="text-sm text-muted-foreground mt-1">Impressions</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Deployment History Analytics" description="6-month deployment trends and status breakdown">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Monthly Deployment Trends</h4>
                <AreaChart
                  data={deploymentHistoryData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'success', name: 'Success', color: CHART_COLORS.emerald },
                    { dataKey: 'partial', name: 'Partial', color: CHART_COLORS.warning },
                    { dataKey: 'failed', name: 'Failed', color: CHART_COLORS.rose }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Deployment Status Distribution</h4>
                <PieChart
                  data={deploymentStatusData}
                  donut={true}
                  height={220}
                  showLegend={true}
                />
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* STRATEGIC ANALYSIS TAB - FILE 04 */}
        <TabsContent value="strategic-analysis" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Phase 4: Strategic Opportunity Assessment</AlertTitle>
            <AlertDescription>
              Comprehensive analysis revealing "Format Gap" and "Timing Mismatch" limiting DoH digital efficacy.
              The "Ricochet Injection" strategy bridges engagement chasm through calibrated content format and temporal release windows.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE OVERVIEW */}
          <GlassPanel title='Executive Strategic Overview' description='Bifurcated ecosystem: DHA lifestyle-integrated vs DoH regulatory broadcast' badge='Strategic Intelligence'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Core Thesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveOverview.thesis}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Strategic Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveOverview.opportunity}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Ricochet Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{executiveOverview.solution}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* PART I: FORMAT GAP ANALYSIS */}
          <GlassPanel title='Part I: The Format Gap Analysis' description='Visual linguistics comparison: DHA lifestyle integration vs DoH legacy broadcast' badge='DHA vs DoH Comparison'>
            <div className="space-y-6">
              {/* COMPARATIVE TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 1: Comparative Format Audit (DHA vs. DoH)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">Feature</th>
                        <th className="p-2 text-left font-semibold text-emerald-700">DHA</th>
                        <th className="p-2 text-left font-semibold text-rose-700">DoH</th>
                        <th className="p-2 text-left font-semibold">Strategic Implication</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formatAuditComparison.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-medium border-r">{row.feature}</td>
                          <td className="p-2 text-slate-700 border-r">{row.dha}</td>
                          <td className="p-2 text-slate-700 border-r">{row.doh}</td>
                          <td className="p-2 text-rose-700">{row.implication}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* FORMAT GAPS */}
              <div>
                <h5 className="font-semibold text-sm mb-4">The "Missing Format" Gap: What DoH is Ignoring</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formatGaps.map((gap, idx) => (
                    <Card key={idx} className="border-2 border-amber-300 bg-amber-50/30">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                          <h5 className="font-semibold text-sm">{gap.name}</h5>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-xs text-slate-700">{gap.description}</p>
                        <div className="bg-rose-50 p-2 rounded">
                          <p className="text-xs font-semibold text-rose-900 mb-1">Evidence</p>
                          <p className="text-xs text-slate-700">{gap.evidence}</p>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded">
                          <p className="text-xs font-semibold text-emerald-900 mb-1">Opportunity</p>
                          <p className="text-xs text-slate-700">{gap.opportunity}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* DEMAND EVIDENCE */}
              <div>
                <h5 className="font-semibold text-sm mb-4">Demand Analysis: The "Silent" Scream for Help</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {demandEvidence.map((item, idx) => (
                    <Card key={idx} className="bg-slate-50/30 border border-slate-300">
                      <CardHeader className="pb-3">
                        <Badge variant="secondary" className="w-fit">{item.type}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-white/50 p-3 rounded">
                          <p className="text-xs font-semibold text-slate-900 mb-1">Evidence</p>
                          <p className="text-xs text-slate-700">{item.evidence}</p>
                        </div>
                        <div className="bg-rose-50 p-3 rounded">
                          <p className="text-xs font-semibold text-rose-900 mb-1">Implication</p>
                          <p className="text-xs text-slate-700">{item.implication}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* PART II: TIMING OPTIMIZATION SCAN */}
          <GlassPanel title='Part II: The Timing Optimization Scan (Chronobiology)' description='Golden Hours identification: aligning broadcasting clock with biological clock of audience' badge='Chronobiology'>
            <div className="space-y-6">
              {/* GOLDEN HOURS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {goldenHours.map((hour, idx) => (
                  <Card key={idx} className={`border-2 ${hour.name.includes('Leisure') ? 'border-emerald-300 bg-emerald-50/30' : 'border-purple-300 bg-purple-50/30'}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        {hour.name.includes('Leisure') ? (
                          <Sun className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <Moon className="h-5 w-5 text-purple-500" />
                        )}
                        <h5 className="font-semibold text-sm">{hour.name}</h5>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="bg-cyan-50 p-2 rounded">
                        <p className="text-xs font-semibold text-cyan-900 mb-1">The Data</p>
                        <p className="text-xs text-slate-700">{hour.data}</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-xs font-semibold text-blue-900 mb-1">User Behavior</p>
                        <p className="text-xs text-slate-700">{hour.behavior}</p>
                      </div>
                      {hour.mismatch && (
                        <div className="bg-amber-50 p-2 rounded">
                          <p className="text-xs font-semibold text-amber-900 mb-1">Current Mismatch</p>
                          <p className="text-xs text-slate-700">{hour.mismatch}</p>
                        </div>
                      )}
                      {hour.gap && (
                        <div className="bg-rose-50 p-2 rounded">
                          <p className="text-xs font-semibold text-rose-900 mb-1">The Gap</p>
                          <p className="text-xs text-slate-700">{hour.gap}</p>
                        </div>
                      )}
                      <div className="bg-emerald-50 p-2 rounded">
                        <p className="text-xs font-semibold text-emerald-900 mb-1">Ricochet Strategy</p>
                        <p className="text-xs text-slate-700">{hour.strategy}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* SEASONAL TIMING */}
              <div>
                <h5 className="font-semibold text-sm mb-4">Seasonal and Event-Driven Timing</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {seasonalTiming.map((timing, idx) => (
                    <Card key={idx} className="bg-indigo-50/20 border border-indigo-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-indigo-500" />
                          <h6 className="font-semibold text-sm">{timing.name}</h6>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs font-semibold text-slate-900 mb-1">Data</p>
                          <p className="text-xs text-slate-700">{timing.data}</p>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded">
                          <p className="text-xs font-semibold text-emerald-900 mb-1">Strategy</p>
                          <p className="text-xs text-slate-700">{timing.strategy}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* RESPONSE TIME METRIC */}
              <Card className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-rose-500" />
                    <h5 className="font-semibold text-sm">The "Response Time" Metric</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/50 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">The Void</p>
                    <p className="text-xs text-slate-700">{responseTimeMetric.void}</p>
                  </div>
                  <div className="bg-rose-100 p-3 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">The Risk</p>
                    <p className="text-xs text-slate-700">{responseTimeMetric.risk}</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">Ricochet Protocol</p>
                    <p className="text-xs text-slate-700">{responseTimeMetric.protocol}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* PART III: RICOCHET INJECTION STRATEGY */}
          <GlassPanel title='Part III: The Ricochet Injection Strategy' description='Tactical injection of specific content formats at specific times to maximize impact' badge='Implementation Guide'>
            <div className="space-y-6">
              {/* CONTENT ARCHETYPES */}
              <div>
                <h5 className="font-semibold text-sm mb-4">Content Archetypes & Production Models</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ricochetArchetypes.map((archetype, idx) => (
                    <Card key={idx} className={`border-2 ${
                      archetype.name.includes('Fine') ? 'border-cyan-300 bg-cyan-50/30' :
                      archetype.name.includes('Triage') ? 'border-purple-300 bg-purple-50/30' :
                      archetype.name.includes('Myth') ? 'border-emerald-300 bg-emerald-50/30' :
                      'border-amber-300 bg-amber-50/30'
                    }`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          {archetype.name.includes('Fine') ? (
                            <Settings className="h-5 w-5 text-cyan-500" />
                          ) : archetype.name.includes('Triage') ? (
                            <HelpCircle className="h-5 w-5 text-purple-500" />
                          ) : archetype.name.includes('Myth') ? (
                            <Frown className="h-5 w-5 text-emerald-500" />
                          ) : (
                            <Smile className="h-5 w-5 text-amber-500" />
                          )}
                          <h6 className="font-semibold text-sm">{archetype.name}</h6>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs font-semibold text-slate-900 mb-1">Purpose</p>
                          <p className="text-xs text-slate-700">{archetype.purpose}</p>
                        </div>
                        <div className="bg-indigo-50 p-2 rounded">
                          <p className="text-xs font-semibold text-indigo-900 mb-1">Format</p>
                          <p className="text-xs text-slate-700">{archetype.format}</p>
                        </div>
                        <div className="bg-purple-50 p-2 rounded">
                          <p className="text-xs font-semibold text-purple-900 mb-1">Visual Style</p>
                          <p className="text-xs text-slate-700">{archetype.visualStyle}</p>
                        </div>
                        {archetype.script && (
                          <div className="bg-rose-50 p-2 rounded">
                            <p className="text-xs font-semibold text-rose-900 mb-1">Script Concept</p>
                            <p className="text-xs text-slate-700 italic">"{archetype.script}"</p>
                          </div>
                        )}
                        {archetype.content && (
                          <div className="bg-amber-50 p-2 rounded">
                            <p className="text-xs font-semibold text-amber-900 mb-1">Content</p>
                            <p className="text-xs text-slate-700">{archetype.content}</p>
                          </div>
                        )}
                        <div className="bg-emerald-50 p-2 rounded">
                          <p className="text-xs font-semibold text-emerald-900 mb-1">Deployment</p>
                          <p className="text-xs text-slate-700">{archetype.deployment}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CONTENT MATRIX TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 2: Ricochet Content Matrix</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">Archetype</th>
                        <th className="p-2 text-left font-semibold">Target Gap</th>
                        <th className="p-2 text-left font-semibold">Format</th>
                        <th className="p-2 text-left font-semibold">Key Schedule Window</th>
                        <th className="p-2 text-left font-semibold">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentMatrix.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-medium border-r">{row.archetype}</td>
                          <td className="p-2 text-slate-700 border-r">{row.gap}</td>
                          <td className="p-2 text-slate-700 border-r">{row.format}</td>
                          <td className="p-2 text-cyan-700 border-r">{row.schedule}</td>
                          <td className="p-2 text-emerald-700">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* SCHEDULING MATRIX */}
              <div>
                <h5 className="font-semibold text-sm mb-4">The "Ricochet" Scheduling Matrix</h5>
                <p className="text-xs text-slate-600 mb-4">Shift posting calendar from "Office Hours" to "User Hours"</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {schedulingMatrix.map((slot, idx) => (
                    <Card key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-indigo-500" />
                          <h6 className="font-semibold text-xs">{slot.slot}</h6>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="bg-white/50 p-2 rounded">
                          <p className="text-xs font-semibold text-indigo-900 mb-1">Action</p>
                          <p className="text-xs text-slate-700">{slot.action}</p>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded">
                          <p className="text-xs font-semibold text-emerald-900 mb-1">Rationale</p>
                          <p className="text-xs text-slate-700">{slot.rationale}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* PLATFORM TACTICS */}
              <div>
                <h5 className="font-semibold text-sm mb-4">Platform-Specific Tactical Shifts</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {platformTactics.map((tactic, idx) => (
                    <Card key={idx} className="bg-slate-50/30 border border-slate-300">
                      <CardHeader className="pb-3">
                        <Badge variant="outline" className="w-fit">{tactic.platform}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-rose-50 p-2 rounded">
                          <p className="text-xs font-semibold text-rose-900 mb-1">Current State</p>
                          <p className="text-xs text-slate-700">{tactic.current}</p>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded">
                          <p className="text-xs font-semibold text-emerald-900 mb-1">Required Shift</p>
                          <p className="text-xs text-slate-700">{tactic.shift}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* STRATEGIC ANALYTICS VISUALIZATIONS */}
          <GlassPanel title="Strategic Analytics Dashboard" description="DHA vs DoH performance comparison and format gap analysis" badge="Analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">DHA vs DoH Format Performance</h4>
                <BarChart
                  data={dhaVsDohData}
                  xAxisKey="category"
                  bars={[
                    { dataKey: 'dha', name: 'DHA', color: CHART_COLORS.emerald },
                    { dataKey: 'doh', name: 'DoH', color: CHART_COLORS.rose }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Platform Format Gap Analysis</h4>
                <BarChart
                  data={platformGapData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'dohScore', name: 'DoH Score', color: CHART_COLORS.rose },
                    { dataKey: 'dhaScore', name: 'DHA Score', color: CHART_COLORS.emerald },
                    { dataKey: 'gap', name: 'Gap', color: CHART_COLORS.warning }
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Timing Mismatch Impact Analysis" description="Content types with suboptimal timing and their impact scores">
            <BarChart
              data={timingMismatchData}
              xAxisKey="contentType"
              bars={[
                { dataKey: 'impact', name: 'Impact Score', color: CHART_COLORS.rose }
              ]}
              height={220}
              showGrid={true}
            />
          </GlassPanel>

          {/* CONCLUSION */}
          <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-300">
            <Rocket className="h-4 w-4 text-purple-500" />
            <AlertTitle className="font-bold text-purple-900">Conclusion</AlertTitle>
            <AlertDescription className="text-sm text-slate-700 mt-2">
              The data is unequivocal: The Department of Health Abu Dhabi is currently speaking an "analog" language in a digital-first ecosystem.
              The "Ricochet" opportunity is not merely about getting more "likes" - it is about <strong>risk mitigation</strong> and <strong>service delivery</strong>.
              Every unanswered Reddit thread about a confusing fine is a reputational leak. Every parent searching for fever advice at 3 AM who finds a foreign influencer instead of a DoH video is a lost opportunity for authority.
              By injecting "Ricochet" formats during identified "Golden Hours," the DoH can close the gap, reduce administrative friction, and reclaim its position as the primary source of health truth in the Emirate.
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* TIMING AUDIT TAB - FILE 05A: PUBLISHER'S DILEMMA */}
        <TabsContent value="timing-audit" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <Megaphone className="h-4 w-4" />
            <AlertTitle>Operation "Glass House" - Publisher's Dilemma Audit</AlertTitle>
            <AlertDescription>
              Comprehensive forensic audit of DoH/ADPHC digital communication architecture. Analysis of 300+ digital assets across 7 platforms reveals "Dead Times" vulnerability where regulator is silent and community is vocal.
            </AlertDescription>
          </Alert>

          {/* EXECUTIVE OVERVIEW */}
          <GlassPanel title="Executive Summary: The Publisher's Dilemma" description="9-to-5 publishing model vs. 24/7 health ecosystem" badge="Strategic Intelligence">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Core Thesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{auditOverview.thesis}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-rose-500 bg-rose-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Key Finding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{auditOverview.finding}</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{auditOverview.solution}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 1: OFFICIAL OUTPUT ANALYSIS */}
          <GlassPanel title='Section 1: Official Output Analysis - The SOP Audit' description='Source of Truth: Press releases, circulars, formal announcements' badge='Source of Truth'>
            <div className="space-y-6">
              {/* SOP FINDINGS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-amber-50/30 border-2 border-amber-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-amber-500" />
                      <h5 className="font-semibold text-sm">The Monday Spike</h5>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{officialSOP.mondaySpike}</p>
                  </CardContent>
                </Card>
                <Card className="bg-rose-50/30 border-2 border-rose-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Moon className="h-5 w-5 text-rose-500" />
                      <h5 className="font-semibold text-sm">The Weekend Void</h5>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{officialSOP.weekendVoid}</p>
                  </CardContent>
                </Card>
                <Card className="bg-indigo-50/30 border-2 border-indigo-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-indigo-500" />
                      <h5 className="font-semibold text-sm">The Corporate Scheduler</h5>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{officialSOP.corporateScheduler}</p>
                  </CardContent>
                </Card>
                <Card className="bg-cyan-50/30 border-2 border-cyan-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-cyan-500" />
                      <h5 className="font-semibold text-sm">Innovation vs. Utility</h5>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-700">{officialSOP.innovationVsUtility}</p>
                  </CardContent>
                </Card>
              </div>

              {/* OFFICIAL ASSETS TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 1: Forensic Catalog of Official Announcements (Sample)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">ID</th>
                        <th className="p-2 text-left font-semibold">Date</th>
                        <th className="p-2 text-left font-semibold">Content</th>
                        <th className="p-2 text-left font-semibold">Format</th>
                        <th className="p-2 text-left font-semibold">Timing</th>
                        <th className="p-2 text-left font-semibold">Analysis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {officialAssets.map((asset, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-mono text-xs border-r">{asset.id}</td>
                          <td className="p-2 text-slate-700 border-r">{asset.date}</td>
                          <td className="p-2 text-slate-700 border-r">{asset.content}</td>
                          <td className="p-2 text-slate-700 border-r">{asset.format}</td>
                          <td className="p-2 text-slate-700 border-r">{asset.timing}</td>
                          <td className="p-2 text-slate-700">{asset.analysis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* UTILITY DEFICIT */}
              <Card className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <h5 className="font-semibold text-sm">The Utility Deficit</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <p className="text-xs font-semibold text-cyan-900 mb-1">Innovation Narrative</p>
                    <p className="text-xs text-slate-700">{utilityDeficit.innovation}</p>
                  </div>
                  <div className="bg-rose-50 p-3 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">Utility Reality</p>
                    <p className="text-xs text-slate-700">{utilityDeficit.utility}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-xs font-semibold text-purple-900 mb-1">Consequence</p>
                    <p className="text-xs text-slate-700">{utilityDeficit.consequence}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 2: X/TWITTER ANALYSIS */}
          <GlassPanel title='Section 2: X (Twitter) - The Real-Time Pulse & Crisis Engine' description='The "Notice Board" vs. "Help Desk" dichotomy' badge='Real-Time'>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* OFFICIAL POSTS */}
                <Card className="border-2 border-slate-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Radio className="h-5 w-5 text-cyan-500" />
                      <h5 className="font-semibold text-sm">Official Posts: The "Broadcast" Mode</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {twitterOfficial.map((post, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 rounded">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{post.id}</Badge>
                          <Badge variant="secondary" className="text-xs">{post.time}</Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-900">{post.focus}</p>
                        <p className="text-xs text-slate-600 mt-1">{post.format}</p>
                        <p className="text-xs text-cyan-700 mt-1">{post.engagement}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* UGC */}
                <Card className="border-2 border-rose-300 bg-rose-50/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-rose-500" />
                      <h5 className="font-semibold text-sm">UGC: The "Complaint" Economy</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {twitterUGC.map((post, idx) => (
                      <div key={idx} className={`p-2 rounded border ${
                        post.sentiment.includes('Positive') ? 'bg-emerald-50 border-emerald-300' :
                        post.sentiment.includes('Negative') || post.sentiment.includes('Hostile') ? 'bg-rose-50 border-rose-300' :
                        'bg-slate-50 border-slate-300'
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{post.id}</Badge>
                          <Badge variant="secondary" className="text-xs">{post.time}</Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-900">{post.content}</p>
                        <p className="text-xs text-slate-600 mt-1">{post.sentiment}</p>
                        <p className="text-xs text-purple-700 mt-1 italic">{post.analysis}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* DEAD ZONE VULNERABILITY */}
              <Card className="bg-gradient-to-r from-rose-100 to-purple-100 border-2 border-rose-400">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-rose-600" />
                    <h5 className="font-semibold text-sm">The "Dead Zone" Vulnerability</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Scenario</p>
                    <p className="text-xs text-slate-700">{deadZoneVulnerability.scenario}</p>
                  </div>
                  <div className="bg-rose-200/50 p-3 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">Current SOP</p>
                    <p className="text-xs text-slate-700">{deadZoneVulnerability.currentSOP}</p>
                  </div>
                  <div className="bg-purple-200/50 p-3 rounded">
                    <p className="text-xs font-semibold text-purple-900 mb-1">Consequence</p>
                    <p className="text-xs text-slate-700">{deadZoneVulnerability.consequence}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 3: INSTAGRAM ANALYSIS */}
          <GlassPanel title='Section 3: Instagram - The Visual Narrative' description='Aesthetics vs. Authenticity in healthcare storytelling' badge='Visual'>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* OFFICIAL CONTENT */}
                <Card className="border-2 border-purple-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-purple-500" />
                      <h5 className="font-semibold text-sm">Official Content: The "Glossy" Feed</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {instagramOfficial.map((post, idx) => (
                      <div key={idx} className="bg-purple-50 p-3 rounded border border-purple-200">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{post.id}</Badge>
                          <Badge className="bg-purple-600 text-xs">{post.format}</Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-900">{post.description}</p>
                        <p className="text-xs text-slate-600 mt-1">{post.visual}</p>
                        <p className="text-xs text-purple-700 mt-1">{post.sentiment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* UGC */}
                <Card className="border-2 border-emerald-300 bg-emerald-50/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-500" />
                      <h5 className="font-semibold text-sm">UGC: The "Patient Experience"</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {instagramUGC.map((post, idx) => (
                      <div key={idx} className="bg-white/70 p-3 rounded border border-emerald-200">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{post.id}</Badge>
                          <Badge variant="secondary" className="text-xs">{post.tag}</Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-900">{post.context}</p>
                        <p className="text-xs text-slate-600 mt-1">{post.visual}</p>
                        <p className="text-xs text-emerald-700 mt-1">{post.sentiment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* RETENTION HYPOTHESIS */}
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-purple-500" />
                    <h5 className="font-semibold text-sm">Retention Hypothesis & Ricochet Opportunity</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-rose-100 p-3 rounded">
                    <p className="text-xs font-semibold text-rose-900 mb-1">Dead Time Insight</p>
                    <p className="text-xs text-slate-700">Instagram's algorithm favors recent engagement. Posting educational carousels at 10:00 AM Tuesday means they are buried by evening commute (18:00 PM).</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">Ricochet Opportunity</p>
                    <p className="text-xs text-slate-700">Moving "high-attention" assets (e.g., "How to renew Daman") to 19:00-22:00 window could significantly increase "Save" and "Share" metrics.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 4: LINKEDIN ANALYSIS */}
          <GlassPanel title='Section 4: LinkedIn - The Professional & Policy Front' description='B2B Thought Leadership: The most successful channel' badge='B2B'>
            <div className="space-y-6">
              {/* THOUGHT LEADERSHIP TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 2: LinkedIn Thought Leadership Sample</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">ID</th>
                        <th className="p-2 text-left font-semibold">Topic</th>
                        <th className="p-2 text-left font-semibold">Key Figure</th>
                        <th className="p-2 text-left font-semibold">Narrative</th>
                        <th className="p-2 text-left font-semibold">Engagement Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {linkedinThoughtLeadership.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-mono text-xs border-r">{item.id}</td>
                          <td className="p-2 text-slate-700 border-r">{item.topic}</td>
                          <td className="p-2 text-slate-700 border-r">{item.figure}</td>
                          <td className="p-2 text-blue-700 border-r">{item.narrative}</td>
                          <td className="p-2 text-slate-700">{item.engagement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* GLOBAL TIMING OPPORTUNITY */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-blue-500" />
                    <h5 className="font-semibold text-sm">Global Time Zone Opportunity</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Current State</p>
                    <p className="text-xs text-slate-700">{linkedinOpportunity.globalTiming}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-xs font-semibold text-blue-900 mb-1">Ricochet Gap</p>
                    <p className="text-xs text-slate-700">{linkedinOpportunity.gap}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 5: TIKTOK ANALYSIS */}
          <GlassPanel title='Section 5: TikTok - The Awareness & Youth Engine' description='Most significant "blind spot" and "potential energy" in DoH strategy' badge='Gen-Z'>
            <div className="space-y-6">
              {/* PERFORMANCE TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 3: TikTok Content Performance Hypothesis</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">ID</th>
                        <th className="p-2 text-left font-semibold">Concept</th>
                        <th className="p-2 text-left font-semibold">Format</th>
                        <th className="p-2 text-left font-semibold">Engagement</th>
                        <th className="p-2 text-left font-semibold">Retention Hypothesis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiktokPerformance.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-mono text-xs border-r">{item.id}</td>
                          <td className="p-2 text-slate-700 border-r">{item.concept}</td>
                          <td className="p-2 text-slate-700 border-r">{item.format}</td>
                          <td className="p-2 text-slate-700 border-r">{item.engagement}</td>
                          <td className="p-2 text-slate-700">{item.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* SEHHI OPPORTUNITY */}
              <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Smile className="h-5 w-5 text-rose-500" />
                    <h5 className="font-semibold text-sm">The "Sehhi" Opportunity & Algorithmic Timing</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">Sehhi Program</p>
                    <p className="text-xs text-slate-700">{tiktokOpportunity.sehhi}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-xs font-semibold text-purple-900 mb-1">Dead Time Impact</p>
                    <p className="text-xs text-slate-700">{tiktokOpportunity.deadTime}</p>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <p className="text-xs font-semibold text-cyan-900 mb-1">Ricochet Recommendation</p>
                    <p className="text-xs text-slate-700">{tiktokOpportunity.recommendation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 6: FACEBOOK ANALYSIS */}
          <GlassPanel title='Section 6: Facebook - The Community & Expat Hub' description='Functions less as media feed, more as "Town Square"' badge='Community'>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* DEAD ZONE */}
                <Card className="border-2 border-rose-300 bg-rose-50/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-rose-500" />
                      <h5 className="font-semibold text-sm">Official Pages: The "Dead Zone"</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-white/70 p-3 rounded">
                      <p className="text-xs font-semibold text-slate-900 mb-1">Official Content Reality</p>
                      <p className="text-xs text-slate-700">{facebookDeadZone.official}</p>
                    </div>
                    <div className="bg-rose-100 p-3 rounded">
                      <p className="text-xs font-semibold text-rose-900 mb-1">Algorithm Challenge</p>
                      <p className="text-xs text-slate-700">{facebookDeadZone.algorithm}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* GROUPS */}
                <Card className="border-2 border-emerald-300 bg-emerald-50/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-500" />
                      <h5 className="font-semibold text-sm">Groups: The "Goldmine"</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {facebookGroups.map((group, idx) => (
                      <div key={idx} className={`p-2 rounded border ${
                        group.risk.includes('High') ? 'bg-rose-50 border-rose-300' :
                        group.risk.includes('Med') ? 'bg-amber-50 border-amber-300' :
                        'bg-emerald-50 border-emerald-300'
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{group.id}</Badge>
                          <Badge variant={group.risk.includes('High') ? 'destructive' : group.risk.includes('Med') ? 'secondary' : 'default'} className="text-xs">
                            {group.risk.split(':')[0]}
                          </Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-900">{group.topic}</p>
                        <p className="text-xs text-slate-600 mt-1">{group.group}</p>
                        <p className="text-xs text-slate-500 italic">{group.source}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* RECOMMENDATION */}
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <h5 className="font-semibold text-sm">From Broadcasting to Servicing</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Strategic Gap</p>
                    <p className="text-xs text-slate-700">DoH is "Posting" on Facebook but not "Community Managing." Regulator is absent from places where actual regulation is discussed.</p>
                  </div>
                  <div className="bg-emerald-100 p-3 rounded">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">Ricochet Recommendation</p>
                    <p className="text-xs text-slate-700">{facebookRecommendation.strategy}</p>
                  </div>
                  <div className="bg-cyan-100 p-3 rounded">
                    <p className="text-xs font-semibold text-cyan-900 mb-1">Required Shift</p>
                    <p className="text-xs text-slate-700">{facebookRecommendation.shift}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 7: YOUTUBE ANALYSIS */}
          <GlassPanel title='Section 7: YouTube - The Education Library' description='Repository-First content strategy: Archive over active broadcast' badge='Education'>
            <div className="space-y-6">
              {/* ASSETS TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 4: YouTube Asset Analysis</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">ID</th>
                        <th className="p-2 text-left font-semibold">Video Title</th>
                        <th className="p-2 text-left font-semibold">Duration</th>
                        <th className="p-2 text-left font-semibold">View Count</th>
                        <th className="p-2 text-left font-semibold">Retention Hypothesis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {youtubeAssets.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-mono text-xs border-r">{item.id}</td>
                          <td className="p-2 text-slate-700 border-r">{item.title}</td>
                          <td className="p-2 text-slate-700 border-r">{item.duration}</td>
                          <td className="p-2 text-slate-700 border-r">{item.views}</td>
                          <td className="p-2 text-slate-700">{item.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* SEARCH OPPORTUNITY */}
              <Card className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Youtube className="h-5 w-5 text-red-500" />
                    <h5 className="font-semibold text-sm">The Pivot to "Edutainment"</h5>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs font-semibold text-slate-900 mb-1">Current State</p>
                    <p className="text-xs text-slate-700">{youtubeRecommendation.pivot}</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded">
                    <p className="text-xs font-semibold text-red-900 mb-1">Ricochet Action</p>
                    <p className="text-xs text-slate-700">{youtubeRecommendation.action}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>

          {/* SECTION 8: CROSS-PLATFORM SYNTHESIS */}
          <GlassPanel title='Section 8: Cross-Platform Integration & The Ricochet Opportunity' description='Strategic Schism: Global Narrative vs. Local Reality' badge='Synthesis'>
            <div className="space-y-6">
              {/* STRATEGIC SCHISM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-2 border-emerald-300 bg-emerald-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <h5 className="font-semibold text-sm">The "Global" Narrative</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-xs text-slate-700"><span className="font-semibold">Channels:</span> {strategicSchism[0].channels}</p>
                    <p className="text-xs text-slate-700"><span className="font-semibold">Focus:</span> {strategicSchism[0].focus}</p>
                    <Badge variant="default" className="bg-emerald-600">{strategicSchism[0].status}</Badge>
                  </CardContent>
                </Card>
                <Card className="border-2 border-rose-300 bg-rose-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-rose-500" />
                      <h5 className="font-semibold text-sm">The "Local" Reality</h5>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-xs text-slate-700"><span className="font-semibold">Channels:</span> {strategicSchism[1].channels}</p>
                    <p className="text-xs text-slate-700"><span className="font-semibold">Focus:</span> {strategicSchism[1].focus}</p>
                    <Badge variant="destructive">{strategicSchism[1].status}</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* RICOCHET OPTIMIZER TABLE */}
              <Card className="overflow-x-auto">
                <CardHeader>
                  <CardTitle className="text-base">Table 5: Current SOP vs. Ricochet Optimization Strategy</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="p-2 text-left font-semibold">Content Type</th>
                        <th className="p-2 text-left font-semibold">Current SOP (The Problem)</th>
                        <th className="p-2 text-left font-semibold">The "Dead Time" Impact</th>
                        <th className="p-2 text-left font-semibold">Ricochet "Smart Schedule" Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ricochetOptimizer.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-2 font-medium border-r">{item.contentType}</td>
                          <td className="p-2 text-slate-700 border-r">{item.currentSOP}</td>
                          <td className="p-2 text-rose-700 border-r">{item.deadTimeImpact}</td>
                          <td className="p-2 text-emerald-700">{item.ricochetStrategy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* TIMING AUDIT VISUALIZATIONS */}
              <GlassPanel title="Timing Optimization Analytics" description="Dead time impact and golden hours analysis" badge="Timing Intelligence">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-4">Timing Impact by Content Type</h4>
                    <BarChart
                      data={timingMismatchData}
                      xAxisKey="contentType"
                      bars={[
                        { dataKey: 'impact', name: 'Dead Time Impact', color: CHART_COLORS.rose }
                      ]}
                      height={200}
                      showGrid={true}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-4">Optimal Engagement Times</h4>
                    <BarChart
                      data={timingEngagementData}
                      xAxisKey="slot"
                      bars={[
                        { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.emerald }
                      ]}
                      height={200}
                      showGrid={true}
                    />
                  </div>
                </div>
              </GlassPanel>

              {/* FINAL CONCLUSION */}
              <Alert className="bg-gradient-to-r from-purple-100 to-indigo-100 border-purple-400">
                <Rocket className="h-4 w-4 text-purple-600" />
                <AlertTitle className="font-bold text-purple-900">Final Conclusion</AlertTitle>
                <AlertDescription className="text-sm text-slate-700 mt-2">
                  The Department of Health – Abu Dhabi and ADPHC possess world-class content and a compelling vision for the future of healthcare.
                  However, their publishing habits are tethered to a legacy "Bureaucratic Time Zone" that ignores the "Digital Time Zone" of their audience.
                  The implementation of Ricochet's "Smart Scheduler" is not merely about posting at different times - it is about <strong>aligning the regulator's presence with the rhythm of the community's life.</strong>
                </AlertDescription>
              </Alert>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
