// @ts-nocheck
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Users,
  Landmark,
  Heart,
  Scale,
  AlertTriangle,
  AlertCircle,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  BookOpen,
  UsersRound,
  Building,
  GraduationCap,
  Briefcase,
  Shield,
  Lightbulb,
  Crosshair,
  Beaker,
  Music,
  Palette,
  Utensils,
  Crown,
  Award,
  Gem,
  Truck,
  Dumbbell,
  Sunrise,
  Flame,
  Church,
  Brain,
  ChevronRight,
  Target,
  Flag,
  Home,
  DollarSign,
  GraduationCap as Education,
} from 'lucide-react'
import { cultureData } from '@/lib/data/topics/culture-data'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const cardHover = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

export default function CultureSocietyPage() {
  const { data } = cultureData || {}
  const {
    executionMetadata,
    focusAreas,
    populationMetrics,
    genderDistribution,
    nationalityBreakdown,
    ageDistribution,
    emiratePopulation,
    dubaiGrowthTrajectory,
    emiratiVsExpat,
    coreCulturalValues,
    traditionalClothing,
    identityEvolution,
    traditionalDishes,
    signatureIngredients,
    culinaryInfluences,
    unescoIntangibleHeritage,
    unescoWorldHeritage,
    heritageFestivals,
    falconry,
    camelRacing,
    otherTraditionalSports,
    majlis,
    majorMuseums,
    culturalAuthorities,
    artEvents,
    traditionalMusic,
    eidAlEtihad,
    genderEqualityIndices,
    womenRepresentation,
    legalReforms,
    lgbtqLegalFramework,
    lgbtqLivingConditions,
    emiratizationPolicy,
    emiratizationQuotas,
    emiratizationInitiatives,
    goldenVisaSystem,
    religiousDemographics2022,
    placesOfWorship,
    abrahamicFamilyHouse,
    interfaithInitiatives,
    religiousFreedom,
    proselytizingRestrictions,
    domesticViolence,
    honorCrimesReform,
    youthUnemployment,
    youthDisengagement,
    youthChallenges,
    marriageRequirements,
    divorceStatistics,
    childCustody,
    discriminationLegalFramework,
    june2021Incident,
    bidoonOverview,
    languageShiftResearch,
    identityCrisisQuotes,
    culturalChangesObserved,
    humanRightsCases,
    timelineOfReforms,
    culturalIdentityStrengths,
    culturalIdentityChallenges,
    sentimentAnalysis,
    appendixA_keyStatistics,
    appendixC_UNESCOElements,
    appendixE_ReligiousPlaces,
  } = data || {}

  // Chart data preparations
  const genderChartData = [
    { name: 'Male', value: genderDistribution?.malePercentage || 64, color: CHART_COLORS.navy },
    { name: 'Female', value: genderDistribution?.femalePercentage || 36, color: CHART_COLORS.gold },
  ]

  const expatChartData = [
    { name: 'Expatriates', value: 88.5, color: CHART_COLORS.platinum },
    { name: 'Emirati', value: 11.5, color: CHART_COLORS.gold },
  ]

  const ageChartData = (ageDistribution || []).map((item, idx) => ({
    name: item.ageGroup,
    value: item.percentage,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  const nationalityChartData = (nationalityBreakdown || []).slice(0, 6).map((item, idx) => ({
    name: item.nationality,
    value: item.percentage,
    color: idx < 3 ? CHART_COLORS.gold : CHART_COLORS.platinum,
  }))

  const religionChartData = (religiousDemographics2022 || []).map((item, idx) => ({
    name: item.religion,
    value: item.percentage,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  const heritageCategoriesData = [
    { name: 'Performing Arts', count: unescoIntangibleHeritage?.categories?.performingArtsPoetry?.count || 5, color: CHART_COLORS.gold },
    { name: 'Traditional Crafts', count: unescoIntangibleHeritage?.categories?.traditionalCraftsSkills?.count || 5, color: CHART_COLORS.navy },
    { name: 'Culinary Heritage', count: unescoIntangibleHeritage?.categories?.culinaryHeritage?.count || 4, color: CHART_COLORS.emerald },
    { name: 'Social Practices', count: unescoIntangibleHeritage?.categories?.socialPractices?.count || 5, color: CHART_COLORS.rose },
  ]

  const emiratePopulationData = (emiratePopulation || []).map((item, idx) => ({
    name: item.emirate,
    population: Math.round(item.population / 1000),
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  const sentimentChartData = (sentimentAnalysis || []).map((item) => ({
    name: item.topic.length > 15 ? item.topic.substring(0, 15) + '...' : item.topic,
    positive: item.sentiment === 'Positive' ? 1 : 0,
    negative: item.sentiment === 'Negative' ? 1 : 0,
    mixed: item.sentiment === 'Mixed' ? 1 : 0,
  }))

  // Radar chart data for UAE position
  const uaePositionData = [
    { subject: 'Heritage Preservation', score: 85, fullMark: 100 },
    { subject: 'Religious Tolerance', score: 65, fullMark: 100 },
    { subject: "Women's Rights", score: 58, fullMark: 100 },
    { subject: 'Cultural Innovation', score: 78, fullMark: 100 },
    { subject: 'Social Cohesion', score: 62, fullMark: 100 },
  ]

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2 font-rajdhani">S-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold">Culture & Society</h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Heritage, demographics, traditions, arts, religion, social dynamics
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1 font-rajdhani">
              <Calendar className="h-4 w-4" />
              {executionMetadata?.dateExecuted || '2026-04-27'}
            </span>
            <span className="flex items-center gap-1 font-rajdhani">
              <Beaker className="h-4 w-4" />
              {executionMetadata?.queriesExecuted || 35} queries
            </span>
            <span className="flex items-center gap-1 font-rajdhani">
              <Globe className="h-4 w-4" />
              {executionMetadata?.pagesFetched || 28} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10 font-rajdhani">
            <Palette className="h-4 w-4" />
            Heritage
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
            <TrendingUp className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Population"
          value={populationMetrics?.totalPopulation || 11.3}
          unit="M"
          previousValue={10.68}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Expat Share"
          value={88.5}
          unit="%"
          icon={<Globe className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="UNESCO Heritage"
          value={unescoIntangibleHeritage?.totalCount || 21}
          previousValue={19}
          icon={<Award className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Freedom Score"
          value={religiousFreedom?.freedomHouseScore?.score || 2}
          unit="/4"
          icon={<Scale className="h-6 w-6" />}
          gradient="rose"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {(focusAreas || []).map((area) => (
            <Badge key={area.id} variant="outline" className="border-platinum/30 text-platinum font-rajdhani">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="heritage">Heritage</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="religion">Religion</TabsTrigger>
          <TabsTrigger value="rights">Rights</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="identity">Identity</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Culture & Society Overview"
            description="Key population and cultural metrics for the UAE"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Population Overview */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Users className="h-5 w-5 text-gold" />
                        Population Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Total Population</span>
                        <span className="text-xl font-bold text-gold font-rajdhani">{populationMetrics?.totalPopulation}M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Median Age</span>
                        <span className="text-xl font-bold text-platinum font-rajdhani">{populationMetrics?.medianAge} years</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Literacy Rate</span>
                        <span className="text-xl font-bold text-emerald font-rajdhani">{populationMetrics?.literacyRate}%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Urban Population</span>
                        <span className="text-xl font-bold text-navy font-rajdhani">{populationMetrics?.urbanPercentage}%</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Gender Distribution */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Users className="h-5 w-5 text-platinum" />
                        Gender Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <PieChart data={genderChartData} height={200} showLegend={true} donut={true} />
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-navy/20 rounded-lg">
                          <p className="text-2xl font-bold text-navy font-rajdhani">{genderDistribution?.malePercentage}%</p>
                          <p className="text-sm text-platinum-500 font-rajdhani">Male</p>
                          <p className="text-xs text-platinum-400 font-rajdhani">{(genderDistribution?.males || 7235074).toLocaleString()}</p>
                        </div>
                        <div className="text-center p-3 bg-gold/20 rounded-lg">
                          <p className="text-2xl font-bold text-gold font-rajdhani">{genderDistribution?.femalePercentage}%</p>
                          <p className="text-sm text-platinum-500 font-rajdhani">Female</p>
                          <p className="text-xs text-platinum-400 font-rajdhani">{(genderDistribution?.females || 4059169).toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Expat vs Emirati */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Globe className="h-5 w-5 text-emerald" />
                      Emirati vs Expatriate Population
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-platinum-300 font-rajdhani">Expatriates</span>
                        <span className="text-gold font-bold font-rajdhani">88.5%</span>
                      </div>
                      <Progress value={88.5} className="h-3 bg-platinum-700" />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-platinum-300 font-rajdhani">Emirati Nationals</span>
                        <span className="text-platinum font-bold font-rajdhani">11.5%</span>
                      </div>
                      <Progress value={11.5} className="h-3 bg-platinum-700" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400 font-rajdhani">Largest Community</p>
                        <p className="text-lg font-bold text-gold font-rajdhani">Indian</p>
                        <p className="text-sm text-platinum-500 font-rajdhani">37.96%</p>
                      </div>
                      <div className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400 font-rajdhani">Second Largest</p>
                        <p className="text-lg font-bold text-platinum font-rajdhani">Pakistani</p>
                        <p className="text-sm text-platinum-500 font-rajdhani">16.72%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* UAE Position Radar */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Target className="h-5 w-5 text-gold" />
                      UAE Cultural Position
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={uaePositionData}
                      metrics={[{ name: 'Score', dataKey: 'score', color: CHART_COLORS.gold }]}
                      height={300}
                      showLegend={false}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline of Reforms */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Calendar className="h-5 w-5 text-cyan" />
                      Timeline of Key Reforms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(timelineOfReforms || []).map((reform, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-4 p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-16 shrink-0 text-center">
                            <span className="text-lg font-bold text-gold font-rajdhani">{reform.year}</span>
                          </div>
                          <p className="text-platinum-300 font-rajdhani">{reform.reform}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Heritage Tab */}
        <TabsContent value="heritage" className="space-y-6">
          <GlassPanel
            title="Cultural Heritage & Traditions"
            description="UNESCO intangible heritage, traditional sports, and cultural institutions"
            badge="21 Elements"
          >
            <div className="space-y-6">
              {/* Heritage Categories */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Award className="h-5 w-5 text-gold" />
                      UNESCO Intangible Cultural Heritage ({unescoIntangibleHeritage?.totalCount || 21} Elements)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={heritageCategoriesData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'count', name: 'Count', color: CHART_COLORS.gold }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Heritage Elements */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Performing Arts */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Music className="h-5 w-5 text-rose" />
                        Performing Arts & Poetry
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {(unescoIntangibleHeritage?.categories?.performingArtsPoetry?.elements || []).map((elem, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-platinum-200 font-rajdhani text-sm">{elem.name}</span>
                            <Badge variant="outline" className="text-xs font-rajdhani">{elem.year}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Traditional Crafts */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Palette className="h-5 w-5 text-navy" />
                        Traditional Crafts & Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {(unescoIntangibleHeritage?.categories?.traditionalCraftsSkills?.elements || []).map((elem, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-platinum-200 font-rajdhani text-sm">{elem.name}</span>
                            <Badge variant="outline" className="text-xs font-rajdhani">{elem.year}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Culinary Heritage */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Utensils className="h-5 w-5 text-emerald" />
                        Culinary Heritage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {(unescoIntangibleHeritage?.categories?.culinaryHeritage?.elements || []).map((elem, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-platinum-200 font-rajdhani text-sm">{elem.name}</span>
                            <Badge variant="outline" className="text-xs font-rajdhani">{elem.year}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Social Practices */}
                <motion.div variants={itemVariants}>
                  <Card className="glass-card" whileHover={cardHover.hover}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                        <Heart className="h-5 w-5 text-gold" />
                        Social Practices
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {(unescoIntangibleHeritage?.categories?.socialPractices?.elements || []).map((elem, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-platinum-200 font-rajdhani text-sm">{elem.name}</span>
                            <Badge variant="outline" className="text-xs font-rajdhani">{elem.year}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Traditional Sports */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Dumbbell className="h-5 w-5 text-cyan" />
                      Traditional Sports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Falconry */}
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl" whileHover={{ scale: 1.02 }}>
                        <h4 className="font-bold text-gold mb-3 flex items-center gap-2 font-rajdhani">
                          <Crosshair className="h-5 w-5" />
                          Falconry
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">History:</span>
                            <span className="text-platinum-200 font-rajdhani">{falconry?.history || '2,000 years old'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">Purpose:</span>
                            <span className="text-platinum-200 font-rajdhani">{falconry?.originalPurpose || 'Hunting'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">Significance:</span>
                            <span className="text-platinum-200 font-rajdhani text-right">{falconry?.culturalSignificance || '"Way of life for leaders"'}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Camel Racing */}
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl" whileHover={{ scale: 1.02 }}>
                        <h4 className="font-bold text-gold mb-3 flex items-center gap-2 font-rajdhani">
                          <Truck className="h-5 w-5" />
                          Camel Racing
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">Nickname:</span>
                            <span className="text-platinum-200 font-rajdhani">{camelRacing?.nickname || '"Sport of Sheikhs"'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">Top Speed:</span>
                            <span className="text-platinum-200 font-rajdhani">{camelRacing?.topSpeed || '40 mph'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400 font-rajdhani">Season:</span>
                            <span className="text-platinum-200 font-rajdhani">{camelRacing?.season || 'October to April'}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Major Museums */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Landmark className="h-5 w-5 text-platinum" />
                      Major Museums
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(majorMuseums || []).map((museum, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <Landmark className="h-5 w-5 text-gold" />
                            <div>
                              <p className="font-medium text-platinum-200 font-rajdhani">{museum.museum}</p>
                              <p className="text-sm text-platinum-500 font-rajdhani">{museum.location}</p>
                            </div>
                          </div>
                          <Badge
                            variant={museum.status === 'Open' ? 'success' : 'outline'}
                            className={museum.status === 'Open' ? 'bg-emerald-500/20 text-emerald font-rajdhani' : 'font-rajdhani'}
                          >
                            {museum.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Core Cultural Values */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Heart className="h-5 w-5 text-rose" />
                      Core Cultural Values
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {(coreCulturalValues || []).map((value, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 bg-platinum-800/50 rounded-xl"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <h4 className="font-bold text-gold mb-2 font-rajdhani">{value.value}</h4>
                          <p className="text-sm text-platinum-400 mb-1 font-rajdhani">{value.description}</p>
                          <p className="text-xs text-platinum-500 font-rajdhani">{value.expression}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Traditional Clothing */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Crown className="h-5 w-5 text-gold" />
                      Traditional Clothing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-bold text-navy mb-3 font-rajdhani">Men's National Dress</h4>
                        <div className="space-y-2">
                          {(traditionalClothing?.mens || []).map((item, idx) => (
                            <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                              <p className="font-medium text-platinum-200 font-rajdhani">{item.item}</p>
                              <p className="text-sm text-platinum-400 font-rajdhani">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-rose mb-3 font-rajdhani">Women's Traditional Attire</h4>
                        <div className="space-y-2">
                          {(traditionalClothing?.womens || []).map((item, idx) => (
                            <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                              <p className="font-medium text-platinum-200 font-rajdhani">{item.item}</p>
                              <p className="text-sm text-platinum-400 font-rajdhani">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Majlis */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Home className="h-5 w-5 text-emerald" />
                      The Majlis - UNESCO Recognized
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-4">
                      <p className="text-platinum-300 font-rajdhani italic">"{majlis?.definition || 'Arabic term meaning sitting room or council'}"</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {(majlis?.coreValues || []).map((value, idx) => (
                        <Badge key={idx} variant="outline" className="p-3 text-center font-rajdhani text-platinum">
                          {value}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-platinum-400 font-rajdhani">UNESCO Recognition: {majlis?.unescoRecognition?.date || 2015}</p>
                      <p className="text-sm text-platinum-500 font-rajdhani">Collaborative: {majlis?.unescoRecognition?.collaborativeEffort || 'UAE, Oman, Qatar, Saudi Arabia'}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel
            title="Demographics & Population"
            description="Population distribution, growth trajectory, and demographic analysis"
          >
            <div className="space-y-6">
              {/* Emirate Population */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <MapPin className="h-5 w-5 text-gold" />
                      Population by Emirate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emiratePopulationData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'population', name: 'Population (thousands)', color: CHART_COLORS.navy }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Age Distribution */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Users className="h-5 w-5 text-emerald" />
                      Age Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={ageChartData} height={300} showLegend={true} donut={true} />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Nationality Breakdown */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Globe className="h-5 w-5 text-platinum" />
                      Top Expatriate Nationalities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={nationalityChartData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold }]}
                      height={300}
                      showGrid={true}
                      horizontal={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Dubai Growth */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <TrendingUp className="h-5 w-5 text-emerald" />
                      Dubai Growth Trajectory
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 font-rajdhani">2000 (Baseline)</span>
                        <span className="text-lg font-bold text-gold font-rajdhani">917,000</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400 font-rajdhani">2024</span>
                        <span className="text-lg font-bold text-gold font-rajdhani">3,825,000 (+317%)</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <span className="text-platinum-400 font-rajdhani">September 2025</span>
                        <span className="text-lg font-bold text-emerald font-rajdhani">Surpassed 4 million</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Emiratization */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Briefcase className="h-5 w-5 text-gold" />
                      Emiratization Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Private Sector Target</span>
                        <span className="font-bold text-gold font-rajdhani">10%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Non-compliance Penalty</span>
                        <span className="font-bold text-red font-rajdhani">AED 9,000/mo</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">2009 Participation</span>
                        <span className="font-bold text-platinum font-rajdhani">0.34%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300 font-rajdhani">Abu Dhabi Unemployment</span>
                        <span className="font-bold text-rose font-rajdhani">{emiratizationPolicy?.abuDhabiUnemploymentEmiratis || 11.6}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Religion Tab */}
        <TabsContent value="religion" className="space-y-6">
          <GlassPanel
            title="Religion & Interfaith"
            description="Religious demographics, places of worship, and interfaith initiatives"
          >
            <div className="space-y-6">
              {/* Religious Demographics */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Crosshair className="h-5 w-5 text-navy" />
                      Religious Demographics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={religionChartData} height={300} showLegend={true} donut={true} />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Places of Worship */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Landmark className="h-5 w-5 text-gold" />
                      Places of Worship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl text-center" whileHover={{ scale: 1.05 }}>
                        <p className="text-3xl font-bold text-gold font-rajdhani">{placesOfWorship?.mosques?.total?.toLocaleString() || '4,818'}</p>
                        <p className="text-platinum-400 font-rajdhani">Mosques</p>
                      </motion.div>
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl text-center" whileHover={{ scale: 1.05 }}>
                        <p className="text-3xl font-bold text-emerald font-rajdhani">52+</p>
                        <p className="text-platinum-400 font-rajdhani">Churches</p>
                      </motion.div>
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl text-center" whileHover={{ scale: 1.05 }}>
                        <p className="text-3xl font-bold text-navy font-rajdhani">2</p>
                        <p className="text-platinum-400 font-rajdhani">Synagogues</p>
                      </motion.div>
                      <motion.div className="p-4 bg-platinum-800/50 rounded-xl text-center" whileHover={{ scale: 1.05 }}>
                        <p className="text-3xl font-bold text-rose font-rajdhani">2</p>
                        <p className="text-platinum-400 font-rajdhani">Hindu Temples</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Abrahamic Family House */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-emerald-500/30" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani text-emerald">
                      <Globe className="h-5 w-5" />
                      Abrahamic Family House
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <div className="grid gap-4 md:grid-cols-3">
                        <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                          <Landmark className="h-8 w-8 mx-auto text-emerald mb-2" />
                          <p className="text-xl font-bold text-emerald font-rajdhani">Mosque</p>
                          <p className="text-sm text-platinum-400 font-rajdhani">Islamic worship</p>
                        </motion.div>
                        <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                          <Church className="h-8 w-8 mx-auto text-gold mb-2" />
                          <p className="text-xl font-bold text-gold font-rajdhani">Church</p>
                          <p className="text-sm text-platinum-400 font-rajdhani">Christian worship</p>
                        </motion.div>
                        <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                          <Landmark className="h-8 w-8 mx-auto text-navy mb-2" />
                          <p className="text-xl font-bold text-navy font-rajdhani">Synagogue</p>
                          <p className="text-sm text-platinum-400 font-rajdhani">Jewish worship</p>
                        </motion.div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-emerald-500/30">
                        <p className="text-center text-platinum-300 font-rajdhani">
                          Location: <span className="text-emerald">Abu Dhabi</span> | Opened: <span className="text-emerald">{abrahamicFamilyHouse?.openingDate || 'February 2023'}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Religious Freedom Score */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Scale className="h-5 w-5 text-rose" />
                      Religious Freedom Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-6 bg-platinum-800/50 rounded-xl">
                      <p className="text-5xl font-bold text-red font-rajdhani">{religiousFreedom?.freedomHouseScore?.score || 2}/4</p>
                      <p className="text-platinum-400 mt-2 font-rajdhani">Freedom House Score (2023)</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      {(religiousFreedom?.keyRestrictions || []).slice(0, 3).map((restriction, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 p-2 bg-red-500/10 rounded"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <AlertCircle className="h-4 w-4 text-red shrink-0" />
                          <span className="text-sm text-platinum-300 font-rajdhani">{restriction.restriction}: {restriction.penalty || restriction.legalStatus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rights Tab */}
        <TabsContent value="rights" className="space-y-6">
          <GlassPanel
            title="Women's Rights & Legal Status"
            description="Gender equality indices, legal reforms, and ongoing challenges"
          >
            <div className="space-y-6">
              {/* Gender Equality Indices */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Scale className="h-5 w-5 text-gold" />
                      Gender Equality Indices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-sm text-platinum-400 font-rajdhani">Gender Inequality Index</p>
                        <p className="text-3xl font-bold text-emerald font-rajdhani">{genderEqualityIndices?.[0]?.value || 0.040}</p>
                        <p className="text-platinum-500 font-rajdhani">{genderEqualityIndices?.[0]?.rank || '13th/191 countries'}</p>
                      </div>
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-sm text-platinum-400 font-rajdhani">Global Gender Gap Index</p>
                        <p className="text-3xl font-bold text-gold font-rajdhani">{genderEqualityIndices?.[1]?.value || 0.724}</p>
                        <p className="text-platinum-500 font-rajdhani">{genderEqualityIndices?.[1]?.rank || '69th/146 countries'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Women Representation */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Users className="h-5 w-5 text-emerald" />
                      Women's Representation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(womenRepresentation || []).map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-platinum-300 font-rajdhani">{item.metric}</span>
                          <span className="text-lg font-bold text-gold font-rajdhani">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Legal Reforms */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Shield className="h-5 w-5 text-emerald" />
                      Key Legal Reforms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {(legalReforms || []).map((reform, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Badge variant="success" className="shrink-0 mt-0.5 font-rajdhani">{reform.year}</Badge>
                          <span className="text-platinum-300 font-rajdhani text-sm">{reform.reform}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Honor Crimes Reform */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-emerald-500/30" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani text-emerald">
                      <AlertTriangle className="h-5 w-5" />
                      Honor Crimes Reform (November 2020)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-emerald-500/10 rounded-xl">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-red line-through text-lg font-rajdhani">Killings could claim "honor" as partial defense</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-emerald text-lg font-rajdhani">Crimes treated as normal murder cases</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-platinum-300 font-rajdhani">Penalties: Life imprisonment or execution</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Domestic Violence */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Shield className="h-5 w-5 text-rose" />
                      Domestic Violence Law
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {(domesticViolence?.forms || []).map((form, idx) => (
                          <Badge key={idx} variant="outline" className="font-rajdhani text-xs">{form}</Badge>
                        ))}
                      </div>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex justify-between p-2 bg-platinum-800/50 rounded">
                          <span className="text-platinum-400 font-rajdhani">Imprisonment</span>
                          <span className="font-bold text-red font-rajdhani">Up to 6 months</span>
                        </div>
                        <div className="flex justify-between p-2 bg-platinum-800/50 rounded">
                          <span className="text-platinum-400 font-rajdhani">Fine</span>
                          <span className="font-bold text-red font-rajdhani">Dh5,000</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Social Tab */}
        <TabsContent value="social" className="space-y-6">
          <GlassPanel
            title="Social Dynamics & Challenges"
            description="Youth, employment, discrimination, and social concerns"
          >
            <div className="space-y-6">
              {/* Golden Visa */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Gem className="h-5 w-5 text-gold" />
                      Golden Visa System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-gold font-rajdhani">10 Years</p>
                        <p className="text-platinum-400 font-rajdhani">Standard Duration</p>
                      </div>
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-gold font-rajdhani">5 Years</p>
                        <p className="text-platinum-400 font-rajdhani">Retirement Visa</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Youth Unemployment */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Briefcase className="h-5 w-5 text-emerald" />
                      Youth Unemployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-emerald font-rajdhani">{youthUnemployment?.uae || 6.43}%</p>
                        <p className="text-platinum-400 font-rajdhani">UAE Rate</p>
                      </div>
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-platinum font-rajdhani">{youthUnemployment?.worldAverage || 15.7}%</p>
                        <p className="text-platinum-400 font-rajdhani">World Average</p>
                      </div>
                      <div className="p-4 bg-platinum-800/50 rounded-xl text-center">
                        <p className="text-3xl font-bold text-gold font-rajdhani">{youthUnemployment?.maximum || 13.48}%</p>
                        <p className="text-platinum-400 font-rajdhani">Peak ({youthUnemployment?.maximumYear || 2020})</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bidoon */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-rose-500/30" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani text-rose">
                      <AlertCircle className="h-5 w-5" />
                      Bidoon (Stateless Population)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-rose font-rajdhani">{bidoonOverview?.estimatedNumbers || '15,000+'}</p>
                        <p className="text-platinum-400 font-rajdhani">Estimated in UAE</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-platinum-400 font-rajdhani">Term Meaning:</span>
                          <span className="text-platinum-200 font-rajdhani">"Without nationality"</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400 font-rajdhani">Status:</span>
                          <span className="text-rose font-rajdhani">Denied citizenship for decades</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Discrimination Incident */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-red-500/30" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani text-red">
                      <AlertTriangle className="h-5 w-5" />
                      2021 Mass Deportation Incident
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <div className="text-center mb-4">
                        <p className="text-3xl font-bold text-red font-rajdhani">{june2021Incident?.victims || 375}</p>
                        <p className="text-platinum-400 font-rajdhani">African migrant workers detained and deported</p>
                      </div>
                      <p className="text-sm text-platinum-300 font-rajdhani text-center">
                        Amnesty International documented arbitrary detention, degrading treatment, and mass deportation without due process
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Identity Tab */}
        <TabsContent value="identity" className="space-y-6">
          <GlassPanel
            title="Identity & Cultural Dynamics"
            description="Language shift, identity crisis, and cultural changes"
          >
            <div className="space-y-6">
              {/* Arabic Language Erosion */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <BookOpen className="h-5 w-5 text-yellow" />
                      Arabic Language Shift
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4">
                      <p className="text-center text-amber-300 italic font-rajdhani">
                        "Clear evidence showing Arabic literacy is unquestionably losing ground"
                      </p>
                      <p className="text-center text-sm text-platinum-500 mt-1 font-rajdhani">
                        - Ahmad Al-Issa, American University of Sharjah (2017)
                      </p>
                    </div>
                    <div className="space-y-3">
                      {(languageShiftResearch?.findings || []).map((finding, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <AlertTriangle className="h-4 w-4 text-yellow shrink-0 mt-1" />
                          <div>
                            <p className="text-platinum-200 font-rajdhani">{finding.detail}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Identity Crisis */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Lightbulb className="h-5 w-5 text-yellow" />
                      Identity Crisis Indicators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(identityCrisisQuotes || []).map((quote, idx) => (
                        <motion.div
                          key={idx}
                          className="p-3 bg-platinum-800/50 rounded-lg border-l-2 border-amber-500"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <p className="text-platinum-200 italic font-rajdhani text-sm">"{quote.quote}"</p>
                          <p className="text-xs text-platinum-500 mt-1 font-rajdhani">- {quote.source}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cultural Changes */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <TrendingUp className="h-5 w-5 text-rose" />
                      Observed Cultural Changes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(culturalChangesObserved || []).map((change, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-rose font-rajdhani">-</span>
                          <div>
                            <p className="text-platinum-200 font-medium font-rajdhani">{change.change}</p>
                            <p className="text-sm text-platinum-400 font-rajdhani">{change.impact}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Human Rights Concerns */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-red-500/30" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani text-red">
                      <AlertCircle className="h-5 w-5" />
                      Documented Human Rights Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(humanRightsCases || []).map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <p className="font-medium text-platinum-200 font-rajdhani">{item.individual}</p>
                          <p className="text-sm text-platinum-400 font-rajdhani">{item.status}</p>
                          <p className="text-xs text-platinum-500 font-rajdhani">Reason: {item.reason}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cultural Strengths & Challenges */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <Brain className="h-5 w-5 text-emerald" />
                      Cultural Analysis Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-bold text-emerald mb-3 font-rajdhani">Strengths</h4>
                        <div className="space-y-2">
                          {(culturalIdentityStrengths || []).slice(0, 5).map((item, idx) => (
                            <div key={idx} className="p-2 bg-emerald-500/10 rounded">
                              <p className="text-platinum-200 font-rajdhani text-sm">{item.achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-rose mb-3 font-rajdhani">Challenges</h4>
                        <div className="space-y-2">
                          {(culturalIdentityChallenges || []).slice(0, 5).map((item, idx) => (
                            <div key={idx} className="p-2 bg-rose-500/10 rounded">
                              <p className="text-platinum-200 font-rajdhani text-sm">{item.challenge}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sentiment Analysis */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card" whileHover={cardHover.hover}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 font-rajdhani">
                      <TrendingUp className="h-5 w-5 text-platinum" />
                      Sentiment Analysis by Topic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(sentimentAnalysis || []).map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-platinum-300 font-rajdhani text-sm">{item.topic}</span>
                          <Badge
                            variant={item.sentiment === 'Positive' ? 'success' : item.sentiment === 'Negative' ? 'destructive' : 'outline'}
                            className="font-rajdhani"
                          >
                            {item.sentiment}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center text-sm text-platinum-500">
        <p className="font-rajdhani">Last Updated: {executionMetadata?.lastEnriched || '2026-04-27'}</p>
        <p className="mt-1 font-rajdhani">
          Enrichment Status: <Badge variant="success" className="text-xs font-rajdhani">{executionMetadata?.enrichmentStatus || 'Full synthesis complete'}</Badge>
        </p>
      </motion.div>
    </motion.div>
  )
}
