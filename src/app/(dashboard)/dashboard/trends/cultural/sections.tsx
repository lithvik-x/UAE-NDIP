'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  Building,
  Landmark,
  Heart,
  Sparkles,
  ChevronRight,
  Calendar,
  Award,
  Gem,
  Star,
  Book,
  Palette,
  Music,
  GraduationCap,
  Target,
  Flag,
} from 'lucide-react'
import {
  culturalDemographics,
  culturalEconomic,
  culturalLanguage,
  culturalEmployment,
  culturalVisitors,
  culturalInstitutions,
  culturalEvents,
  fashionDesigners,
  youthInnovators,
  culturalSentimentTopics,
  nationalIdentityInitiatives,
  coreValues,
  coreElements,
  weddingEvolution,
  culturalPolicyTimeline,
  culturalSourceCredibilityMatrix,
  culturalSourceCredibilityAssessment,
  culturalUAERelevanceDataPoints,
  culturalGovernmentEntities,
  culturalMuseumsRegistry,
  culturalAcademicResearch,
  arabicLanguageEducationPolicy,
  culturalMajorEvents,
  culturalSourceCitationIndex,
  culturalDemographicsExtended,
  culturalEconomicExtended,
  culturalLanguageExtended,
  culturalEmploymentExtended,
  culturalVisitorsExtended,
  culturalYouthExtended,
  culturalInstitutionsExtended,
  SentimentTopic,
  WeddingTradition,
  CulturalPolicyEvent,
  CulturalEvent,
  FashionDesigner,
  YouthInnovator,
  SourceCredibilityEntry,
  SourceCredibilityAssessment,
  UAERelevanceDataPoint,
  CulturalGovernmentEntity,
  MuseumRegistry,
  AcademicResearchFinding,
  ArabicEducationPolicyEvent,
  MajorCulturalEvent,
  SourceCitation,
  DemographicsDataPoint,
  CulturalInstitutionExtended,
} from '@/lib/data-loader/trends-data'
import { cn } from '@/lib/utils'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// ============================================================================
// KEY METRICS SECTION
// ============================================================================

export function CulturalKeyMetricsSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <motion.div variants={fadeInUp}>
        <MetricCard
          title="Total Population"
          value="10.7M"
          previousValue={10.25}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <MetricCard
          title="Culture Plan Investment"
          value="$6B"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <MetricCard
          title="Mosque Visitors (2025)"
          value="6.8M"
          previousValue={6.5}
          icon={<Landmark className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <MetricCard
          title="Emiratis Employed"
          value="152K+"
          previousValue={140}
          icon={<Briefcase className="h-6 w-6" />}
          gradient="purple"
          status="success"
        />
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// DEMOGRAPHICS SECTION
// ============================================================================

export function CulturalDemographicsSection() {
  const demographicsData = [
    { label: 'Total Population', value: '10.7M', source: 'BTI Project 2023' },
    { label: 'Emirati Nationals', value: '~1.5M (~11%)', source: 'BTI Project 2023' },
    { label: 'Expatriate Population', value: '~89%', source: 'BTI Project 2023' },
    { label: 'Nationalities', value: '200+', source: 'UAE Portal' },
    { label: 'Abu Dhabi Population', value: '4M+', source: 'AGSI June 2025' },
    { label: 'Population Growth 2024', value: '7.5%', source: 'AGSI' },
  ]

  return (
    <GlassPanel
      title="Demographics & Population"
      description="UAE population structure and diversity metrics"
      badge="CRITICAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demographicsData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-gold/30 bg-gold/10 p-4 hover:bg-gold/20 transition-all"
              >
                <p className="text-sm text-gold/70">{item.label}</p>
                <p className="text-2xl font-bold text-gold mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Population Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={[
                  { name: 'Emirati Nationals', value: 11, color: CHART_COLORS.gold },
                  { name: 'Expatriates', value: 89, color: CHART_COLORS.navy },
                ]}
                height={200}
                showLegend={true}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// ECONOMIC SECTION
// ============================================================================

export function CulturalEconomicSection() {
  const economicKPIs = [
    { kpi: 'GDP per Capita', value: '$50,000+', source: 'BTI Project 2023' },
    { kpi: 'Non-Oil Sectors', value: '70%', source: 'BTI Project 2023' },
    { kpi: 'FDI Inflows', value: '$30.7B', source: 'BTI Project 2023' },
    { kpi: 'Culture Plan', value: '$6B', source: 'AGSI 2021-2026' },
    { kpi: 'Modest Fashion Market', value: '$311B', source: 'Sands Times 2024' },
    { kpi: 'Modest Fashion 2027', value: '$428B', source: 'Sands Times' },
  ]

  return (
    <GlassPanel
      title="Economic & Investment"
      description="Cultural economy metrics and investment data"
      badge="CRITICAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {economicKPIs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-emerald/30 bg-emerald/10 p-4 hover:bg-emerald/20 transition-all"
              >
                <p className="text-sm text-emerald/70">{item.kpi}</p>
                <p className="text-2xl font-bold text-emerald mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Investment Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { sector: 'Culture Plan', value: 6, color: CHART_COLORS.gold },
                  { sector: 'Prior Investment', value: 2.3, color: CHART_COLORS.emerald },
                  { sector: 'Al Maryah Expansion', value: 16.3, color: CHART_COLORS.navy },
                ]}
                xAxisKey="sector"
                bars={[{ dataKey: 'value', name: '$ Billions', color: CHART_COLORS.gold }]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// LANGUAGE & EDUCATION SECTION
// ============================================================================

export function CulturalLanguageSection() {
  const languageKPIs = [
    { kpi: 'Arabic Speakers (Global)', value: '420M+', source: 'Youngausint' },
    { kpi: 'Emirati Arabic Speakers', value: '3.7M', source: 'Wikipedia 2020' },
    { kpi: 'KG Arabic Lesson', value: '40 min/day', source: 'Semafor 2025' },
    { kpi: 'Primary Arabic (2025)', value: '200 min/week', source: 'Gulf Time' },
    { kpi: 'Primary Arabic (2027+)', value: '300 min/week', source: 'Gulf Time' },
    { kpi: 'New Schools 2025', value: '9 schools', source: 'The National' },
  ]

  return (
    <GlassPanel
      title="Language & Education"
      description="Arabic language policy and education reforms"
      badge="CRITICAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {languageKPIs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-info/30 bg-info/10 p-4 hover:bg-info/20 transition-all"
              >
                <p className="text-sm text-info/70">{item.kpi}</p>
                <p className="text-2xl font-bold text-info mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Gen Z Arabic Impact Research</CardTitle>
              <p className="text-sm text-platinum-500">PMC Study 2024 - 200 Emirati youth surveyed in Ajman</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gold/10 border border-gold/30">
                  <div>
                    <p className="text-sm text-gold/70">Arabic → Socio-cultural Identity</p>
                    <p className="text-2xl font-bold text-gold">β = 0.748</p>
                    <p className="text-xs text-emerald">p &lt; 0.001 (Highly Significant)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gold/70">Model explains</p>
                    <p className="text-2xl font-bold text-gold">55.9%</p>
                    <p className="text-xs text-platinum-500">variance</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-emerald/10 border border-emerald/30">
                  <div>
                    <p className="text-sm text-emerald/70">Arabic → Family Values</p>
                    <p className="text-2xl font-bold text-emerald">β = 0.539</p>
                    <p className="text-xs text-emerald">p &lt; 0.001 (Highly Significant)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-emerald/70">Model explains</p>
                    <p className="text-2xl font-bold text-emerald">59.0%</p>
                    <p className="text-xs text-platinum-500">variance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Arabic Language Education Policy Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="relative space-y-4 pl-4 border-l border-info/30">
                  {arabicLanguageEducationPolicy.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-info" />
                      <div className="flex items-start gap-4">
                        <span className="text-sm font-bold text-info w-20 flex-shrink-0">{item.year}</span>
                        <div>
                          <p className="text-sm font-medium text-platinum-200">{item.policy}</p>
                          <p className="text-xs text-platinum-500">{item.implementation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// EMPLOYMENT & EMIRATISATION SECTION
// ============================================================================

export function CulturalEmploymentSection() {
  const employmentKPIs = [
    { kpi: 'Emiratisation Target', value: '10%', source: '2026 Target' },
    { kpi: 'Emiratis Employed', value: '152,000+', source: 'June 2025' },
    { kpi: 'Companies with Emiratis', value: '29,000', source: 'June 2025' },
    { kpi: 'Minimum Wage', value: 'AED 6,000', source: 'Jan 2026' },
    { kpi: 'Non-compliance Fine', value: 'AED 6,000', source: 'Per month' },
  ]

  return (
    <GlassPanel
      title="Employment & Emiratisation"
      description="Labor market nationalisation metrics"
      badge="CRITICAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {employmentKPIs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-purple/30 bg-purple/10 p-4 hover:bg-purple/20 transition-all"
              >
                <p className="text-sm text-purple/70">{item.kpi}</p>
                <p className="text-xl font-bold text-purple mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Emiratisation Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { category: 'Target 2026', value: 10, color: CHART_COLORS.gold },
                  { category: 'Current', value: 7.5, color: CHART_COLORS.emerald },
                ]}
                xAxisKey="category"
                bars={[{ dataKey: 'value', name: 'Percentage %', color: CHART_COLORS.gold }]}
                height={200}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// VISITOR METRICS SECTION
// ============================================================================

export function CulturalVisitorsSection() {
  const visitorKPIs = [
    { kpi: 'Sheikh Zayed Mosque', value: '6,846,723', source: '2025 WAM/SZGMC' },
    { kpi: 'Year-over-Year Growth', value: '+4%', source: '2025' },
    { kpi: 'Global Ranking', value: '1st ME, 8th global', source: 'Architecture' },
    { kpi: 'Abu Dhabi Hotel Guests', value: '5.8M', source: '2024' },
    { kpi: 'Hotel Occupancy', value: '79%', source: '2024' },
    { kpi: 'Expo 2020 Visitors', value: '25M', source: '2021-2022' },
  ]

  return (
    <GlassPanel
      title="Visitor Metrics & Tourism"
      description="Cultural attraction attendance and tourism performance"
      badge="HIGH"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visitorKPIs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-rose/30 bg-rose/10 p-4 hover:bg-rose/20 transition-all"
              >
                <p className="text-sm text-rose/70">{item.kpi}</p>
                <p className="text-2xl font-bold text-rose mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Sheikh Zayed Mosque Visitors Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={[
                  { year: '2020', visitors: 4.5, color: CHART_COLORS.gold },
                  { year: '2021', visitors: 2.1, color: CHART_COLORS.gold },
                  { year: '2022', visitors: 5.2, color: CHART_COLORS.gold },
                  { year: '2023', visitors: 6.1, color: CHART_COLORS.gold },
                  { year: '2024', visitors: 6.58, color: CHART_COLORS.gold },
                  { year: '2025', visitors: 6.85, color: CHART_COLORS.gold },
                ]}
                xAxisKey="year"
                areas={[{ dataKey: 'visitors', name: 'Visitors (Millions)', color: CHART_COLORS.gold }]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// CULTURAL INSTITUTIONS SECTION
// ============================================================================

export function CulturalInstitutionsSection() {
  return (
    <GlassPanel
      title="Cultural Institutions"
      description="Museums and cultural venues on Saadiyat Island and beyond"
      badge="CRITICAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {culturalInstitutions.map((venue, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-gold/30 bg-gold/10 p-4 hover:bg-gold/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gold">{venue.name}</p>
                    <p className="text-sm text-platinum-400">{venue.location}</p>
                    <p className="text-xs text-platinum-500 mt-1">Opened: {venue.openingDate}</p>
                    <p className="text-xs text-platinum-500">{venue.collectionSize}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Saadiyat Museum District Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px]">
                <div className="space-y-4">
                  {culturalMuseumsRegistry.map((museum, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50"
                    >
                      <div className="flex-shrink-0 w-20 text-sm font-bold text-gold">{museum.openingDate}</div>
                      <div className="flex-1">
                        <p className="font-medium text-platinum-200">{museum.museum}</p>
                        <p className="text-xs text-platinum-500">{museum.architect !== '-' ? `Architect: ${museum.architect}` : museum.focus}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{museum.focus}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// SENTIMENT ANALYSIS SECTION
// ============================================================================

export function CulturalSentimentSection() {
  return (
    <GlassPanel
      title="Sentiment Analysis"
      description="Public perception across cultural topics"
      badge="HIGH"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {culturalSentimentTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/80 transition-colors"
          >
            <div className="flex-1">
              <p className="font-medium text-platinum-200">{topic.topic}</p>
              <p className="text-xs text-platinum-500 mt-1">{topic.keyPositives}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <Badge
                variant="outline"
                className={cn(
                  'text-xs',
                  topic.score > 0.7 ? 'border-emerald text-emerald' :
                  topic.score > 0.4 ? 'border-gold text-gold' :
                  'border-rose text-rose'
                )}
              >
                {topic.sentiment}
              </Badge>
              <p className="text-xs text-platinum-500 mt-1">Score: {(topic.score * 100).toFixed(0)}%</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// SOURCE CREDIBILITY SECTION
// ============================================================================

export function CulturalSourceCredibilitySection() {
  return (
    <GlassPanel
      title="Source Credibility Matrix"
      description="Data source reliability assessment"
      badge="TIER SYSTEM"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Credibility by Source Type</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={culturalSourceCredibilityAssessment.map((item) => ({
                  type: item.sourceType.replace('/Official', '').replace('/Research', '').replace('/International', '').replace('/Regional', '').replace('/Trade', '').replace('/Brand', '').replace('/Generated', ''),
                  sentiment: (item.avgSentiment * 100).toFixed(0),
                  color: item.credibility === 'Tier 1' ? CHART_COLORS.gold :
                         item.credibility === 'Tier 2' ? CHART_COLORS.emerald :
                         item.credibility === 'Tier 3' ? CHART_COLORS.navy : CHART_COLORS.rose,
                }))}
                xAxisKey="type"
                bars={[{ dataKey: 'sentiment', name: 'Sentiment %', color: CHART_COLORS.gold }]}
                height={250}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {culturalSourceCredibilityMatrix.slice(0, 15).map((source, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-platinum-200 truncate">{source.sourceName}</p>
                    <p className="text-xs text-platinum-500 truncate">{source.dataTypes}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-xs ml-2',
                      source.tier === 1 ? 'border-gold text-gold' :
                      source.tier === 2 ? 'border-emerald text-emerald' :
                      'border-navy text-navy'
                    )}
                  >
                    Tier {source.tier}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// UAE RELEVANCE SECTION
// ============================================================================

export function CulturalUAERelevanceSection() {
  return (
    <GlassPanel
      title="UAE Relevance Assessment"
      description="Data point relevance classification"
      badge="CRITICAL PRIORITY"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {culturalUAERelevanceDataPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
          >
            <Badge
              variant="outline"
              className={cn(
                'w-20 justify-center text-xs',
                item.relevance === 'Critical' ? 'border-rose text-rose' :
                item.relevance === 'High' ? 'border-gold text-gold' :
                item.relevance === 'Medium' ? 'border-info text-info' :
                'border-platinum text-platinum'
              )}
            >
              {item.relevance}
            </Badge>
            <div className="flex-1">
              <p className="text-sm font-medium text-platinum-200">{item.dataPoint}</p>
              <p className="text-xs text-platinum-500">{item.rationale}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// GOVERNMENT ENTITIES SECTION
// ============================================================================

export function CulturalGovernmentEntitiesSection() {
  return (
    <GlassPanel
      title="Government Entities"
      description="Key ministries and cultural authorities"
      badge="TIER 1"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {culturalGovernmentEntities.map((entity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
          >
            <Building className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-medium text-platinum-200">{entity.entity}</p>
              <p className="text-sm text-gold">{entity.function}</p>
              <p className="text-xs text-platinum-500 mt-1">{entity.keyInitiatives}</p>
            </div>
            <Badge variant="outline" className="text-xs">{entity.credibility}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// FASHION DESIGNERS SECTION
// ============================================================================

export function CulturalFashionDesignersSection() {
  return (
    <GlassPanel
      title="Emerging Fashion Designers"
      description="Leading Emirati designers and brands"
      badge="INDUSTRY"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {fashionDesigners.map((designer, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/80 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                <Star className="h-6 w-6 text-gold" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-platinum-200">{designer.name}</p>
                <p className="text-sm text-gold">{designer.specialty}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-platinum-400">{designer.followers}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// YOUTH INNOVATORS SECTION
// ============================================================================

export function CulturalYouthInnovatorsSection() {
  return (
    <GlassPanel
      title="Youth Innovators"
      description="Young Emiratis making cultural impact"
      badge="YOUTH"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {youthInnovators.map((innovator, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
          >
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-navy" />
              <div>
                <p className="text-sm font-medium text-platinum-200">{innovator.name}</p>
                <p className="text-xs text-platinum-400">{innovator.field}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs max-w-[200px] text-center">{innovator.achievement}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// WEDDING EVOLUTION SECTION
// ============================================================================

export function CulturalWeddingEvolutionSection() {
  return (
    <GlassPanel
      title="Wedding Traditions Evolution"
      description="Traditional vs modern Emirati weddings (Medeem Model)"
      badge="CULTURAL"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {weddingEvolution.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-gold">{item.tradition}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-platinum-500">Traditional</p>
              <p className="text-sm text-platinum-300">{item.traditionalPractice}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-emerald flex-shrink-0" />
            <div className="flex-1 text-right">
              <p className="text-xs text-emerald/70">Modern</p>
              <p className="text-sm text-emerald">{item.modernEvolution}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// POLICY TIMELINE SECTION
// ============================================================================

export function CulturalPolicyTimelineSection() {
  return (
    <GlassPanel
      title="Cultural Policy Timeline"
      description="Key milestones in UAE cultural development"
      badge="HISTORICAL"
    >
      <Card className="glass-card">
        <CardContent className="pt-6">
          <ScrollArea className="h-[400px]">
            <div className="relative space-y-4 pl-4 border-l border-gold/30">
              {culturalPolicyTimeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-gold" />
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-bold text-gold w-16 flex-shrink-0">{event.year}</span>
                    <div>
                      <p className="text-sm font-medium text-platinum-200">{event.initiative}</p>
                      <p className="text-xs text-platinum-500">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </GlassPanel>
  )
}

// ============================================================================
// NATIONAL IDENTITY SECTION
// ============================================================================

export function CulturalNationalIdentitySection() {
  return (
    <GlassPanel
      title="National Identity Framework"
      description="Emirati Identity Strategy (November 2025)"
      badge="STRATEGIC"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Five Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-5">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(234, 179, 8, 0.5)' }}
                    className="rounded-lg border border-gold/30 bg-gold/10 p-3 text-center hover:bg-gold/20 transition-all cursor-pointer"
                  >
                    <Award className="mx-auto h-6 w-6 text-gold mb-2" />
                    <p className="text-sm font-medium text-gold">{value}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Six Core Elements</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {coreElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3"
                    >
                      <Gem className="h-5 w-5 text-gold" />
                      <span className="text-sm text-platinum-200">{element}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">13 National Identity Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-2">
                  {nationalIdentityInitiatives.map((initiative, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3 hover:bg-slate-800/80 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-gold" />
                      <span className="text-sm text-platinum-200">{initiative}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// ACADEMIC RESEARCH SECTION
// ============================================================================

export function CulturalAcademicResearchSection() {
  return (
    <GlassPanel
      title="Academic Research Findings"
      description="Key studies on UAE cultural evolution"
      badge="RESEARCH"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {culturalAcademicResearch.map((research, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
          >
            <div className="flex items-start gap-3 mb-3">
              <Book className="h-5 w-5 text-info flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-info">{research.title}</p>
                <p className="text-xs text-platinum-500">{research.source}</p>
              </div>
            </div>
            <p className="text-sm text-platinum-400 mb-3">{research.methodology}</p>
            <div className="space-y-1">
              {research.keyFindings.slice(0, 3).map((finding, idx) => (
                <p key={idx} className="text-xs text-platinum-400 flex items-start gap-2">
                  <span className="text-gold">•</span>
                  {finding}
                </p>
              ))}
            </div>
            <p className="text-xs text-gold mt-3 italic">{research.assessment}</p>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// MAJOR EVENTS SECTION
// ============================================================================

export function CulturalMajorEventsSection() {
  return (
    <GlassPanel
      title="Major Cultural Events 2024-2026"
      description="Key cultural dates and festivals"
      badge="EVENTS"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {culturalMajorEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
          >
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-rose" />
              <div>
                <p className="font-medium text-platinum-200">{event.event}</p>
                <p className="text-sm text-platinum-500">{event.location}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-rose">{event.dates}</p>
              {event.attendanceNotes && (
                <p className="text-xs text-platinum-500">{event.attendanceNotes}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </GlassPanel>
  )
}

// ============================================================================
// SOURCE CITATION INDEX SECTION
// ============================================================================

export function CulturalSourceCitationSection() {
  return (
    <GlassPanel
      title="Source Citation Index"
      description="25 primary sources with tier ratings"
      badge="SOURCES"
    >
      <Card className="glass-card">
        <CardContent className="pt-6">
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {culturalSourceCitationIndex.map((citation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-2"
                >
                  <span className="w-6 h-6 rounded-full bg-gold/20 text-gold text-xs flex items-center justify-center flex-shrink-0">
                    {citation.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-platinum-300 truncate">{citation.url.replace('https://', '')}</p>
                    <p className="text-xs text-platinum-500 truncate">{citation.topicCoverage}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-xs flex-shrink-0',
                      citation.tier === 1 ? 'border-gold text-gold' :
                      citation.tier === 2 ? 'border-emerald text-emerald' :
                      'border-navy text-navy'
                    )}
                  >
                    T{citation.tier}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </GlassPanel>
  )
}

// ============================================================================
// YOUTH INDICATORS SECTION
// ============================================================================

export function CulturalYouthIndicatorsSection() {
  const youthKPIs = [
    { kpi: 'Gen Z GenAI Concern', value: '74-77%', source: 'Deloitte' },
    { kpi: 'Youth Financial Insecurity', value: '48-46%', source: 'Deloitte' },
    { kpi: 'Purpose Important (Work)', value: '89-92%', source: 'Deloitte' },
    { kpi: 'Soft Skills > Technical', value: '80%+', source: 'Deloitte' },
    { kpi: 'Middle East Youth (<30)', value: '60%+', source: 'Deloitte' },
    { kpi: 'UAE Youth (15-35)', value: '~50%', source: 'Deloitte' },
  ]

  return (
    <GlassPanel
      title="Youth Indicators"
      description="Gen Z and Millennial cultural metrics"
      badge="YOUTH"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {youthKPIs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-purple/30 bg-purple/10 p-4 hover:bg-purple/20 transition-all"
              >
                <p className="text-sm text-purple/70">{item.kpi}</p>
                <p className="text-2xl font-bold text-purple mt-1">{item.value}</p>
                <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Youth Priorities Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={[
                  { name: 'Purpose at Work', value: 90, color: CHART_COLORS.gold },
                  { name: 'Soft Skills Focus', value: 80, color: CHART_COLORS.emerald },
                  { name: 'Financial Security', value: 47, color: CHART_COLORS.rose },
                  { name: 'GenAI Concern', value: 75, color: CHART_COLORS.navy },
                ]}
                height={250}
                showLegend={true}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </GlassPanel>
  )
}
