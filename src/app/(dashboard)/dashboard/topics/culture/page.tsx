// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
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
} from 'lucide-react'
import {
  cultureSocietyData,
  populationMetrics,
  genderDistribution,
  nationalityBreakdown,
  ageDistribution,
  emiratePopulation,
  coreCulturalValues,
  unescoIntangibleHeritage,
  majorMuseums,
  camelRacing,
  falconry,
  religiousDemographics,
  placesOfWorship,
  womenRepresentation,
  genderEqualityIndices,
  emiratizationPolicy,
  youthUnemployment,
  timelineOfReforms,
  sentimentAnalysis,
  goldenVisaSystem,
  domesticViolence,
  honorCrimesReform,
  bidoonOverview,
  languageShiftResearch,
  identityCrisisQuotes,
  culturalChangesObserved,
} from '@/lib/data/topics/culture-society-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function CultureSocietyPage() {
  // Population by gender data
  const genderChartData = [
    { name: 'Male', value: genderDistribution.malePercentage, color: CHART_COLORS.navy },
    { name: 'Female', value: genderDistribution.femalePercentage, color: CHART_COLORS.gold },
  ]

  // Expat vs Emirati data
  const expatChartData = [
    { name: 'Expatriates', value: 88.5, color: CHART_COLORS.platinum },
    { name: 'Emirati', value: 11.5, color: CHART_COLORS.gold },
  ]

  // Age distribution data
  const ageChartData = ageDistribution.map((item) => ({
    name: item.ageGroup,
    value: item.percentage,
    color: Object.values(CHART_COLORS)[ageDistribution.indexOf(item) % Object.values(CHART_COLORS).length],
  }))

  // Top nationalities data
  const nationalityChartData = nationalityBreakdown.slice(0, 5).map((item) => ({
    name: item.nationality,
    value: item.percentage,
    color: Object.values(CHART_COLORS)[nationalityBreakdown.indexOf(item) % Object.values(CHART_COLORS).length],
  }))

  // Religious demographics data
  const religionChartData = religiousDemographics.map((item) => ({
    name: item.religion,
    value: item.percentage,
    color: Object.values(CHART_COLORS)[religiousDemographics.indexOf(item) % Object.values(CHART_COLORS).length],
  }))

  // Sentiment data
  const sentimentChartData = sentimentAnalysis.map((item) => ({
    name: item.topic,
    positive: item.sentiment === 'Positive' ? 1 : 0,
    negative: item.sentiment === 'Negative' ? 1 : 0,
    mixed: item.sentiment === 'Mixed' ? 1 : 0,
  }))

  // Heritage categories data
  const heritageCategoriesData = [
    { name: 'Performing Arts', count: unescoIntangibleHeritage.categories.performingArtsPoetry.count, color: CHART_COLORS.gold },
    { name: 'Traditional Crafts', count: unescoIntangibleHeritage.categories.traditionalCraftsSkills.count, color: CHART_COLORS.navy },
    { name: 'Culinary Heritage', count: unescoIntangibleHeritage.categories.culinaryHeritage.count, color: CHART_COLORS.emerald },
    { name: 'Social Practices', count: unescoIntangibleHeritage.categories.socialPractices.count, color: CHART_COLORS.rose },
  ]

  // Emirate population data
  const emiratePopulationData = emiratePopulation.map((item) => ({
    name: item.emirate,
    population: Math.round(item.population / 1000),
    color: Object.values(CHART_COLORS)[emiratePopulation.indexOf(item) % Object.values(CHART_COLORS).length],
  }))

  // Women metrics data
  const womenMetricsData = womenRepresentation.map((item) => ({
    name: item.metric,
    value: typeof item.value === 'string' && item.value.includes('%') ? parseFloat(item.value) : item.value,
    display: item.value,
  }))

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
          <Badge variant="gold" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold">Culture & Society</h1>
          <p className="mt-2 text-platinum-400">
            Heritage, demographics, traditions, arts, religion, social dynamics
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {cultureSocietyData.executionMetadata.dateExecuted}
            </span>
            <span className="flex items-center gap-1">
              <Beaker className="h-4 w-4" />
              {cultureSocietyData.executionMetadata.queriesExecuted} queries
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {cultureSocietyData.executionMetadata.pagesFetched} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Palette className="h-4 w-4" />
            Heritage
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <TrendingUp className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Population"
          value={populationMetrics.totalPopulation}
          unit="M"
          previousValue={10.68}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Expat Share"
          value={populationMetrics.emiratiVsExpat?.[1]?.percentage || 88.5}
          unit="%"
          icon={<Globe className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="UNESCO Heritage"
          value={unescoIntangibleHeritage.totalCount}
          previousValue={19}
          icon={<Award className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Mosques"
          value={placesOfWorship.mosques.total.toLocaleString()}
          icon={<Landmark className="h-6 w-6" />}
          gradient="denim"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {cultureSocietyData.focusAreas.map((area) => (
            <Badge key={area.id} variant="outline" className="border-platinum/30 text-platinum">
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
          <TabsTrigger value="social">Social Dynamics</TabsTrigger>
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
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-gold" />
                      Population Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Total Population</span>
                      <span className="text-xl font-bold text-gold">{populationMetrics.totalPopulation}M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Median Age</span>
                      <span className="text-xl font-bold text-platinum">{populationMetrics.medianAge} years</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Literacy Rate</span>
                      <span className="text-xl font-bold text-emerald">{populationMetrics.literacyRate}%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Population Density</span>
                      <span className="text-xl font-bold text-platinum">{populationMetrics.populationDensity}/km²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Urban Population</span>
                      <span className="text-xl font-bold text-navy">{populationMetrics.urbanPercentage}%</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Gender Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-platinum" />
                      Gender Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={genderChartData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-navy/20 rounded-lg">
                        <p className="text-2xl font-bold text-navy">{genderDistribution.malePercentage}%</p>
                        <p className="text-sm text-platinum-500">Male</p>
                        <p className="text-xs text-platinum-400">{genderDistribution.males.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-3 bg-gold/20 rounded-lg">
                        <p className="text-2xl font-bold text-gold">{genderDistribution.femalePercentage}%</p>
                        <p className="text-sm text-platinum-500">Female</p>
                        <p className="text-xs text-platinum-400">{genderDistribution.females.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expat vs Emirati */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald" />
                    Emirati vs Expatriate Population
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-platinum-300">Expatriates</span>
                      <span className="text-gold font-bold">88.5%</span>
                    </div>
                    <Progress value={88.5} className="h-3 bg-slate-700" />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-platinum-300">Emirati Nationals</span>
                      <span className="text-platinum font-bold">11.5%</span>
                    </div>
                    <Progress value={11.5} className="h-3 bg-slate-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Largest Community</p>
                      <p className="text-lg font-bold text-gold">Indian</p>
                      <p className="text-sm text-platinum-500">37.96%</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-platinum-400">Second Largest</p>
                      <p className="text-lg font-bold text-platinum">Pakistani</p>
                      <p className="text-sm text-platinum-500">16.72%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline of Reforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-cyan" />
                    Timeline of Key Reforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timelineOfReforms.map((reform, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 bg-slate-800/50 rounded-lg">
                        <div className="w-16 shrink-0 text-center">
                          <span className="text-lg font-bold text-gold">{reform.year}</span>
                        </div>
                        <p className="text-platinum-300">{reform.reform}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold" />
                    UNESCO Intangible Cultural Heritage ({unescoIntangibleHeritage.totalCount} Elements)
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

              {/* Heritage Elements by Category */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Performing Arts & Poetry */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Music className="h-5 w-5 text-rose" />
                      Performing Arts & Poetry
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {unescoIntangibleHeritage.categories.performingArtsPoetry.elements.map((elem, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-200">{elem.name}</span>
                          <Badge variant="outline" className="text-xs">{elem.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Traditional Crafts */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Palette className="h-5 w-5 text-navy" />
                      Traditional Crafts & Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {unescoIntangibleHeritage.categories.traditionalCraftsSkills.elements.map((elem, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-200">{elem.name}</span>
                          <Badge variant="outline" className="text-xs">{elem.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Culinary Heritage */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-emerald" />
                      Culinary Heritage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {unescoIntangibleHeritage.categories.culinaryHeritage.elements.map((elem, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-200">{elem.name}</span>
                          <Badge variant="outline" className="text-xs">{elem.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Practices */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Heart className="h-5 w-5 text-gold" />
                      Social Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {unescoIntangibleHeritage.categories.socialPractices.elements.map((elem, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-200">{elem.name}</span>
                          <Badge variant="outline" className="text-xs">{elem.year}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Traditional Sports */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-cyan" />
                    Traditional Sports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Falconry */}
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                      <h4 className="font-bold text-gold mb-3 flex items-center gap-2">
                        <Crosshair className="h-5 w-5" />
                        Falconry
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">History:</span>
                          <span className="text-platinum-200">{falconry.history}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Purpose:</span>
                          <span className="text-platinum-200">{falconry.originalPurpose}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Significance:</span>
                          <span className="text-platinum-200 text-right">{falconry.culturalSignificance}</span>
                        </div>
                      </div>
                    </div>

                    {/* Camel Racing */}
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                      <h4 className="font-bold text-gold mb-3 flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Camel Racing
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Nickname:</span>
                          <span className="text-platinum-200">{camelRacing.nickname}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Top Speed:</span>
                          <span className="text-platinum-200">{camelRacing.topSpeed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-platinum-400">Season:</span>
                          <span className="text-platinum-200">{camelRacing.season}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Major Museums */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-platinum" />
                    Major Museums
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {majorMuseums.map((museum, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Landmark className="h-5 w-5 text-gold" />
                          <div>
                            <p className="font-medium text-platinum-200">{museum.museum}</p>
                            <p className="text-sm text-platinum-500">{museum.location}</p>
                          </div>
                        </div>
                        <Badge
                          variant={museum.status === 'Open' ? 'success' : 'outline'}
                          className={museum.status === 'Open' ? 'bg-emerald-500/20 text-emerald' : ''}
                        >
                          {museum.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Cultural Values */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose" />
                    Core Cultural Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {coreCulturalValues.map((value, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-xl">
                        <h4 className="font-bold text-gold mb-2">{value.value}</h4>
                        <p className="text-sm text-platinum-400 mb-1">{value.description}</p>
                        <p className="text-xs text-platinum-500">{value.expression}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
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

              {/* Age Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald" />
                    Age Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={ageChartData}
                    height={300}
                    showLegend={true}
                    donut={true}
                  />
                </CardContent>
              </Card>

              {/* Nationality Breakdown */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
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

              {/* Population Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    Dubai Growth Trajectory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-400">2000 (Baseline)</span>
                      <span className="text-lg font-bold text-gold">917,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-400">2024</span>
                      <span className="text-lg font-bold text-gold">3,825,000 (+317%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <span className="text-platinum-400">September 2025</span>
                      <span className="text-lg font-bold text-emerald">Surpassed 4 million</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-400">Daily Commuters</span>
                      <span className="text-lg font-bold text-platinum">+3% (Peak 5M+)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Metrics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Population Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Median Age</span>
                      <span className="font-bold text-gold">{populationMetrics.medianAge} years</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Literacy Rate</span>
                      <span className="font-bold text-emerald">{populationMetrics.literacyRate}%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Urban Population</span>
                      <span className="font-bold text-navy">{populationMetrics.urbanPercentage}%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Density</span>
                      <span className="font-bold text-platinum">{populationMetrics.populationDensity}/km²</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emiratization Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Private Sector Target</span>
                      <span className="font-bold text-gold">10%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Non-compliance Penalty</span>
                      <span className="font-bold text-red">AED 9,000/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">2009 Participation</span>
                      <span className="font-bold text-platinum">0.34%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-platinum-300">Abu Dhabi Unemployment</span>
                      <span className="font-bold text-rose">{emiratizationPolicy.abuDhabiUnemploymentEmiratis}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-navy" />
                    Religious Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={religionChartData}
                    height={300}
                    showLegend={true}
                    donut={true}
                  />
                </CardContent>
              </Card>

              {/* Places of Worship */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-gold" />
                    Places of Worship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold">{placesOfWorship.mosques.total.toLocaleString()}</p>
                      <p className="text-platinum-400">Mosques</p>
                      <p className="text-xs text-platinum-500 mt-1">Oldest: Al Bidya Mosque, Fujairah</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald">52+</p>
                      <p className="text-platinum-400">Churches</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-rose">2</p>
                      <p className="text-platinum-400">Synagogues</p>
                      <p className="text-xs text-platinum-500 mt-1">Dubai (2008), Abu Dhabi (2023)</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-orange">2</p>
                      <p className="text-platinum-400">Hindu Temples</p>
                      <p className="text-xs text-platinum-500 mt-1">BAPS Mandir opened Feb 2024</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-cyan">1</p>
                      <p className="text-platinum-400">Buddhist Temple</p>
                      <p className="text-xs text-platinum-500 mt-1">Jumeirah neighborhood</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-indigo">1</p>
                      <p className="text-platinum-400">Sikh Gurudwara</p>
                      <p className="text-xs text-platinum-500 mt-1">Guru Nanak Darbar, Jebel Ali</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interfaith Initiatives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald" />
                    Abrahamic Family House
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-emerald">Mosque</p>
                        <p className="text-sm text-platinum-400">Islamic worship</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gold">Church</p>
                        <p className="text-sm text-platinum-400">Christian worship</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-navy">Synagogue</p>
                        <p className="text-sm text-platinum-400">Jewish worship</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-500/30">
                      <p className="text-center text-platinum-300">
                        Location: <span className="text-emerald">Abu Dhabi</span> | Opened: <span className="text-emerald">February 2023</span>
                      </p>
                      <p className="text-center text-sm text-platinum-500 mt-1">
                        Center for learning and dialogue promoting mutual respect
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Religious Freedom */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-rose" />
                    Religious Freedom Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-6 bg-slate-800/50 rounded-xl">
                    <p className="text-5xl font-bold text-red">2/4</p>
                    <p className="text-platinum-400 mt-2">Freedom House Score (2023)</p>
                    <div className="mt-4 flex justify-center gap-2">
                      <div className="w-8 h-8 bg-red-500 rounded" />
                      <div className="w-8 h-8 bg-red-500/30 rounded" />
                      <div className="w-8 h-8 bg-slate-700 rounded" />
                      <div className="w-8 h-8 bg-slate-700 rounded" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-red-500/10 rounded">
                      <AlertCircle className="h-4 w-4 text-red" />
                      <span className="text-sm text-platinum-300">Apostasy (Muslims): Maximum death penalty</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-red-500/10 rounded">
                      <AlertCircle className="h-4 w-4 text-red" />
                      <span className="text-sm text-platinum-300">Blasphemy: Broad and strict laws</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-yellow-500/10 rounded">
                      <AlertTriangle className="h-4 w-4 text-yellow" />
                      <span className="text-sm text-platinum-300">Proselytizing: By non-Muslims prohibited</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-gold" />
                    Gender Equality Indices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-sm text-platinum-400">Gender Inequality Index</p>
                      <p className="text-3xl font-bold text-emerald">{genderEqualityIndices[0].value}</p>
                      <p className="text-platinum-500">{genderEqualityIndices[0].rank}</p>
                      <p className="text-xs text-platinum-400 mt-1">{genderEqualityIndices[0].year}</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-sm text-platinum-400">Global Gender Gap Index</p>
                      <p className="text-3xl font-bold text-gold">{genderEqualityIndices[1].value}</p>
                      <p className="text-platinum-500">{genderEqualityIndices[1].rank}</p>
                      <p className="text-xs text-platinum-400 mt-1">{genderEqualityIndices[1].year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Women Representation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald" />
                    Women's Representation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {womenRepresentation.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-300">{item.metric}</span>
                        <span className="text-lg font-bold text-gold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Legal Reforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Key Legal Reforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {timelineOfReforms.filter(r => [2019, 2020, 2022, 2025].includes(r.year)).map((reform, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <Badge variant="success" className="shrink-0 mt-0.5">{reform.year}</Badge>
                        <span className="text-platinum-300">{reform.reform}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Domestic Violence Protections */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose" />
                    Domestic Violence Law (Federal Decree-Law No. 10 of 2019)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm text-platinum-400 mb-2">Recognized Forms:</p>
                      <div className="flex flex-wrap gap-2">
                        {domesticViolence.forms.map((form, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{form}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-platinum-400">Imprisonment</span>
                        <span className="font-bold text-red">Up to 6 months</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-platinum-400">Fine</span>
                        <span className="font-bold text-red">Dh5,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Honor Crimes Reform */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald">
                    <AlertTriangle className="h-5 w-5" />
                    Honor Crimes Reform (November 2020)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-emerald-500/10 rounded-xl">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-red line-through text-lg">Killings could claim "honor" as partial defense</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald text-lg">Crimes treated as normal murder cases</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-platinum-300">Penalties: Life imprisonment or execution</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Social Dynamics Tab */}
        <TabsContent value="social" className="space-y-6">
          <GlassPanel
            title="Social Dynamics & Challenges"
            description="Identity, language, youth unemployment, and social concerns"
          >
            <div className="space-y-6">
              {/* Golden Visa */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gem className="h-5 w-5 text-gold" />
                    Golden Visa System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold">10 Years</p>
                      <p className="text-platinum-400">Standard Duration</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold">5 Years</p>
                      <p className="text-platinum-400">Retirement Visa</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded">
                      <span className="text-emerald">Rights:</span>
                      <span className="text-platinum-300">Live, work, study in UAE</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded">
                      <span className="text-emerald">Physical Presence:</span>
                      <span className="text-platinum-300">No requirements beyond initial setup</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-800/50 rounded">
                      <span className="text-emerald">Sponsorship:</span>
                      <span className="text-platinum-300">Long-term residency without local sponsor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Youth Unemployment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-emerald" />
                    Youth Unemployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-emerald">{youthUnemployment.uae}%</p>
                      <p className="text-platinum-400">UAE Rate</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-platinum">{youthUnemployment.worldAverage}%</p>
                      <p className="text-platinum-400">World Average</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <p className="text-3xl font-bold text-gold">{youthUnemployment.maximum}%</p>
                      <p className="text-platinum-400">Peak ({youthUnemployment.maximumYear})</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bidoon Situation */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose">
                    <AlertCircle className="h-5 w-5" />
                    Bidoon (Stateless Population)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-rose">15,000+</p>
                      <p className="text-platinum-400">Estimated in UAE</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-platinum-400">Term Meaning:</span>
                        <span className="text-platinum-200">"Without nationality"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-platinum-400">Status:</span>
                        <span className="text-rose">Denied citizenship for decades</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-platinum-400">2008 Initiative:</span>
                        <span className="text-platinum-200">$200M to Comoros for citizenship</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-rose-500/30">
                      <p className="text-sm text-rose">Restricted Rights: Work, Education, Healthcare</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arabic Language Erosion */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-platinum" />
                    Arabic Language Shift
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-4">
                    <p className="text-center text-yellow-300 italic">
                      "Clear evidence showing Arabic literacy is unquestionably losing ground"
                    </p>
                    <p className="text-center text-sm text-platinum-500 mt-1">
                      - Ahmad Al-Issa, American University of Sharjah (2017)
                    </p>
                  </div>
                  <div className="space-y-3">
                    {languageShiftResearch.findings.map((finding, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-yellow shrink-0 mt-1" />
                        <div>
                          <p className="text-platinum-200">{finding.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Identity Crisis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow" />
                    Identity Crisis Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {identityCrisisQuotes.map((quote, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg border-l-2 border-yellow-500">
                        <p className="text-platinum-200 italic">"{quote.quote}"</p>
                        <p className="text-xs text-platinum-500 mt-1">- {quote.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Changes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-rose" />
                    Observed Cultural Changes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {culturalChangesObserved.map((change, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-rose">-</span>
                        <div>
                          <p className="text-platinum-200 font-medium">{change.change}</p>
                          <p className="text-sm text-platinum-400">{change.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center text-sm text-platinum-500">
        <p>Last Updated: {cultureSocietyData.executionMetadata.lastEnriched}</p>
        <p className="mt-1">
          Enrichment Status: <Badge variant="success" className="text-xs">{cultureSocietyData.executionMetadata.enrichmentStatus}</Badge>
        </p>
      </motion.div>
    </motion.div>
  )
}
