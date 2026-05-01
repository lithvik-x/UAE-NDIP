// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { PieChart, BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Award,
  Bell,
  Brain,
  Bug,
  CheckCircle2,
  Clock,
  DollarSign,
  Droplets,
  Globe,
  Heart,
  HeartPulse,
  Leaf,
  Lightbulb,
  Microscope,
  Phone,
  PieChart as PieChartIcon,
  Pill,
  Rocket,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Syringe,
  Thermometer,
  TrendingUp,
  Users,
  Video,
  Virus,
} from 'lucide-react'

import {
  CovidOverview,
  VaccinationSection,
  DiseaseOutbreaks,
  DigitalHealth,
  MentalHealthImpact,
  HumanitarianResponse,
} from '@/components/dashboard/crisis/public-health'

import {
  publicHealthData,
  keyMetrics,
  covid19Timeline,
  lockdownDetails,
  vaccinesAvailable,
  sinopharmDetails,
  vaccinationStats,
  vaccinationRankings,
  alHosnApp,
  digitalHealthTools,
  MersCov,
  mpoxData,
  dengueOutbreak,
  vectorControl,
  foodPoisoningStats,
  mentalHealthImpact,
  migrantWorkerHealth,
  economicImpactStimulus,
  humanitarianResponse,
  healthSystemPreparedness,
  internationalHealthCooperation,
  entityRegistry,
  sentimentAnalysis,
  relevanceAssessment,
  dataSources,
  riskIndicators,
  responseCapacity,
  executionMetadata,
} from '@/lib/data/crisis/public-health-data'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

export default function PublicHealthPage() {
  // Chart data
  const caseDistributionData = [
    { name: 'Recovered', value: 1054525, color: CHART_COLORS.emerald },
    { name: 'Active', value: 10156, color: CHART_COLORS.gold },
    { name: 'Deaths', value: 2349, color: CHART_COLORS.rose },
  ]

  const vaccinationCoverageData = [
    { name: 'At Least One Dose', value: 82.82, color: CHART_COLORS.emerald },
    { name: 'Fully Vaccinated', value: 73.21, color: CHART_COLORS.info },
    { name: 'Not Vaccinated', value: 17.18, color: CHART_COLORS.platinum },
  ]

  const sentimentData = [
    { name: 'Positive', value: 6, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 5, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 3, color: CHART_COLORS.platinum },
  ]

  const diseaseComparisonData = [
    { name: 'MERS-CoV', cases: 94, color: CHART_COLORS.rose },
    { name: 'Mpox', cases: 11, color: CHART_COLORS.gold },
    { name: 'Dengue', cases: 500, color: CHART_COLORS.orange },
    { name: 'Salmonella', cases: 200, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/50">
            <Shield className="w-3 h-3 mr-1" />
            CRISIS RESPONSE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-emerald-100 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
              Public Health
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            UAE public health intelligence — COVID-19, vaccination, disease surveillance, and digital health infrastructure
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald">
            <ShieldCheck className="w-3 h-3 mr-1" />
            GREEN - Recovery
          </Badge>
          <Badge variant="outline" className="border-platinum-500/50 text-platinum-400 text-xs">
            <Activity className="w-3 h-3 mr-1" />
            {executionMetadata.queriesExecuted} queries | {executionMetadata.pagesFetched} pages | {executionMetadata.confidence} confidence
          </Badge>
        </div>
      </motion.div>

      {/* Top Level KPIs */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard
          title="COVID Cases"
          value="1.07M"
          icon={<Activity className="h-6 w-6" />}
          gradient="sky"
        />
        <MetricCard
          title="Deaths"
          value="2,349"
          subtitle="0.22% CFR"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="low"
        />
        <MetricCard
          title="Vaccinated"
          value="82.82%"
          subtitle="One dose"
          icon={<Syringe className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Doses Given"
          value="24.9M"
          icon={<Pill className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="MERS Cases"
          value="94"
          subtitle="Since 2013"
          icon={<Microscope className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Response Rank"
          value="#1"
          subtitle="Emergency Prep"
          icon={<Shield className="h-6 w-6" />}
          gradient="teal"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="covid">COVID-19</TabsTrigger>
          <TabsTrigger value="vaccination">Vaccination</TabsTrigger>
          <TabsTrigger value="diseases">Disease Outbreaks</TabsTrigger>
          <TabsTrigger value="digital">Digital Health</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
          <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Public Health Overview" description="Key metrics and outbreak summary">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Case Distribution */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-platinum-300">COVID-19 Case Distribution</h4>
                  <PieChart data={caseDistributionData} height={220} donut />
                </div>

                {/* Key Statistics */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-platinum-300">Disease Comparison</h4>
                  <BarChart
                    data={diseaseComparisonData}
                    bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.info }]}
                    height={220}
                  />
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-sky-500/10 border border-sky-500/30 p-4 text-center">
                  <div className="text-2xl font-bold text-sky">1st</div>
                  <div className="text-xs text-platinum-400">Middle Eastern COVID Case</div>
                </div>
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald">2nd</div>
                  <div className="text-xs text-platinum-400">Fastest Vaccination</div>
                </div>
                <div className="rounded-lg bg-gold-500/10 border border-gold-500/30 p-4 text-center">
                  <div className="text-2xl font-bold text-gold">80%</div>
                  <div className="text-xs text-platinum-400">Intl Humanitarian Share</div>
                </div>
                <div className="rounded-lg bg-purple-500/10 border border-purple-500/30 p-4 text-center">
                  <div className="text-2xl font-bold text-purple">135</div>
                  <div className="text-xs text-platinum-400">Countries Aided</div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Risk & Capacity */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Risk Indicators & Response Capacity" description="Current threat levels and system capabilities">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-platinum-300 mb-3">Risk Assessment</h4>
                  <div className="space-y-2">
                    {riskIndicators.map((risk, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-glass-surface/30 p-3 border border-glass-border">
                        <div className="flex items-center gap-2">
                          <Bug className="h-4 w-4 text-platinum-500" />
                          <span className="text-sm text-platinum-200">{risk.risk}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            risk.level === 'Low'
                              ? 'border-emerald-500/50 text-emerald'
                              : risk.level === 'Moderate'
                                ? 'border-gold-500/50 text-gold'
                                : 'border-rose-500/50 text-rose'
                          }
                        >
                          {risk.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-platinum-300 mb-3">Response Capacity</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3 text-center">
                      <div className="text-xl font-bold text-emerald">#1</div>
                      <div className="text-xs text-platinum-400">Emergency Prep</div>
                    </div>
                    <div className="rounded-lg bg-sky-500/10 border border-sky-500/30 p-3 text-center">
                      <div className="text-xl font-bold text-sky">120+</div>
                      <div className="text-xs text-platinum-400">Vax Locations</div>
                    </div>
                    <div className="rounded-lg bg-purple-500/10 border border-purple-500/30 p-3 text-center">
                      <div className="text-xl font-bold text-purple">6+</div>
                      <div className="text-xs text-platinum-400">Health Apps</div>
                    </div>
                    <div className="rounded-lg bg-gold-500/10 border border-gold-500/30 p-3 text-center">
                      <div className="text-xl font-bold text-gold">196</div>
                      <div className="text-xs text-platinum-400">Medical Flights</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* UAE Relevance */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="UAE Relevance Assessment" description="Strategic importance of public health to UAE">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-rose mb-2">Critical Relevance</h4>
                  <div className="space-y-2">
                    {relevanceAssessment.critical.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-rose-500/5 border border-rose-500/20 p-3">
                        <Lightbulb className="h-4 w-4 text-rose flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-platinum-200">{item.topic}</div>
                          <div className="text-xs text-platinum-500 mt-1">{item.justification}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* COVID-19 Tab */}
        <TabsContent value="covid" className="space-y-6">
          <CovidOverview
            data={{
              keyMetrics,
              covid19Timeline,
              lockdownDetails,
            }}
          />
        </TabsContent>

        {/* Vaccination Tab */}
        <TabsContent value="vaccination" className="space-y-6">
          <VaccinationSection
            data={{
              vaccinesAvailable,
              sinopharmDetails,
              vaccinationStats,
              vaccinationRankings,
            }}
          />
        </TabsContent>

        {/* Disease Outbreaks Tab */}
        <TabsContent value="diseases" className="space-y-6">
          <DiseaseOutbreaks
            data={{
              MersCov,
              mpoxData,
              dengueOutbreak,
              vectorControl,
              foodPoisoningStats,
            }}
          />
        </TabsContent>

        {/* Digital Health Tab */}
        <TabsContent value="digital" className="space-y-6">
          <DigitalHealth
            data={{
              alHosnApp,
              digitalHealthTools,
            }}
          />
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental" className="space-y-6">
          <MentalHealthImpact
            data={{
              mentalHealthImpact,
              migrantWorkerHealth,
            }}
          />
        </TabsContent>

        {/* Humanitarian Tab */}
        <TabsContent value="humanitarian" className="space-y-6">
          <HumanitarianResponse
            data={{
              humanitarianResponse,
              economicImpactStimulus,
              healthSystemPreparedness,
            }}
          />
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sentiment Analysis" description="Public perception of UAE public health response">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-platinum-300 mb-3">Sentiment Distribution</h4>
                  <PieChart data={sentimentData} height={220} donut />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-emerald mb-2">Positive Sentiment</h4>
                    <div className="space-y-2">
                      {sentimentAnalysis.positive.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-2">
                          <CheckCircle2 className="h-3 w-3 text-emerald flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-platinum-300">{item.finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-rose mb-2">Negative Sentiment</h4>
                    <div className="space-y-2">
                      {sentimentAnalysis.negative.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 rounded-lg bg-rose-500/5 border border-rose-500/20 p-2">
                          <AlertCircle className="h-3 w-3 text-rose flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-platinum-300">{item.finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* WHO Recognition */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="International Recognition" description="WHO statements on UAE healthcare">
              <div className="rounded-lg bg-gradient-to-r from-sky-500/10 to-emerald-500/10 border border-sky-500/30 p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-gold flex-shrink-0" />
                  <div>
                    <div className="text-lg font-medium text-platinum-100 mb-2">
                      "{internationalHealthCooperation.whoRelations.uaeHealthcareRanking}"
                    </div>
                    <div className="text-sm text-platinum-400">
                      — {internationalHealthCooperation.whoRelations.statementBy}
                    </div>
                    <div className="text-xs text-platinum-500 mt-1">
                      {internationalHealthCooperation.whoRelations.statementDate}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Entity Registry */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Entity Registry" description="Key organizations and persons">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-platinum-300 mb-3">Key Persons</h4>
                  <div className="space-y-2">
                    {entityRegistry.persons.map((person, idx) => (
                      <div key={idx} className="rounded-lg bg-glass-surface/30 p-3 border border-glass-border">
                        <div className="text-sm font-medium text-platinum-200">{person.name}</div>
                        <div className="text-xs text-platinum-500">{person.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-platinum-300 mb-3">Key Organizations</h4>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {entityRegistry.organizations.slice(0, 8).map((org, idx) => (
                        <div key={idx} className="rounded-lg bg-glass-surface/30 p-3 border border-glass-border">
                          <div className="text-sm font-medium text-platinum-200">{org.name}</div>
                          <div className="text-xs text-platinum-500">{org.type} - {org.role}</div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Data Sources Footer */}
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Data Sources" description="Primary sources for public health intelligence">
          <ScrollArea className="h-[150px]">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
              {dataSources.map((source) => (
                <div key={source.id} className="rounded-lg bg-glass-surface/30 p-2 border border-glass-border">
                  <div className="text-xs font-medium text-platinum-200 truncate">{source.name}</div>
                  <div className="text-xs text-platinum-500">{source.type}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
