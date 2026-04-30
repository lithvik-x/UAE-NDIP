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
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Scale,
  FileText,
  Building,
  Shield,
  Zap,
  Gavel,
  BookOpen,
  Calendar,
  Landmark,
  Users,
  Lock,
  Eye,
  CheckCircle,
  XCircle,
  DollarSign,
  Clock,
  Database,
  Briefcase,
  Globe2,
  ScrollText,
} from 'lucide-react'
import {
  legalRegulatoryData,
  legalSystemStructure,
  difcADGMCourts,
  intellectualProperty,
  commercialLawCivilCode,
  arbitrationInstitutions,
  insolvencyLawReform,
  dataProtectionLaw,
  cybercrimeLaw,
  decriminalizationReforms,
  familyLawInheritance,
  laborLawReform,
  antiMoneyLaundering,
  regulatorySandboxes,
  legalProfession,
  courtEfficiency,
  internationalLegalCooperation,
  reformsTimeline,
  keyStatistics,
  dashboardDataTables,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  reportMetadata,
} from '@/lib/data/topics/legal-data'

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

// Sentiment color helper
const getSentimentColor = (sentiment: string) => {
  if (sentiment === 'Positive') return CHART_COLORS.emerald
  if (sentiment === 'Negative') return CHART_COLORS.rose
  return CHART_COLORS.platinum
}

export default function LegalRegulatoryPage() {
  // Sentiment distribution data
  const sentimentData = [
    { name: 'Positive (Modernization)', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral (Systemic)', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative (Concerns)', value: 20, color: CHART_COLORS.rose },
  ]

  // Reforms timeline chart data
  const reformsChartData = reformsTimeline.map(reform => ({
    name: reform.year.toString(),
    value: 1,
    color: CHART_COLORS.gold,
  }))

  // Court metrics chart data
  const courtChartData = keyStatistics.courtEfficiency.map(metric => ({
    name: metric.metric.substring(0, 20) + (metric.metric.length > 20 ? '...' : ''),
    value: parseFloat(metric.value.replace(/[^0-9.]/g, '')) || 0,
    color: CHART_COLORS.navy,
  }))

  // AML metrics
  const amlChartData = keyStatistics.antiMoneyLaundering.slice(0, 4).map((metric, idx) => ({
    name: metric.metric.substring(0, 15) + (metric.metric.length > 15 ? '...' : ''),
    value: idx === 0 ? 1000 : 1,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // IP filings chart data
  const ipChartData = [
    { name: '2016', resident: 622, total: 1699, color: CHART_COLORS.platinum },
    { name: '2023', resident: 1005, total: 3403, color: CHART_COLORS.gold },
  ]

  // Labor metrics
  const laborChartData = [
    { name: 'Fixed Contract', value: 3, color: CHART_COLORS.gold },
    { name: 'Probation (mo)', value: 6, color: CHART_COLORS.navy },
    { name: 'Maternity (days)', value: 60, color: CHART_COLORS.emerald },
    { name: 'Paternity (days)', value: 5, color: CHART_COLORS.platinum },
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
          <Badge variant="default" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-platinum">Legal & Regulatory</h1>
          <p className="mt-2 text-platinum-400">
            {legalRegulatoryData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {reportMetadata.reportCompiled}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {reportMetadata.pagesFetched} pages
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {reportMetadata.queriesExecuted} queries
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Scale className="h-4 w-4" />
            Legal Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Court Completion"
          value="98%"
          previousValue={95}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="DIFC Companies"
          value="3,000+"
          previousValue={2700}
          icon={<Building className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Patent Applications"
          value="1,005"
          previousValue={900}
          icon={<FileText className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="AML Fines"
          value="AED 1B"
          previousValue={500}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'LEGAL-1', name: 'Civil Law' },
            { id: 'LEGAL-2', name: 'DIFC/ADGM' },
            { id: 'LEGAL-3', name: 'IP Protection' },
            { id: 'LEGAL-4', name: 'AML Framework' },
            { id: 'LEGAL-5', name: 'Data Protection' },
            { id: 'LEGAL-6', name: 'Labor Law' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-platinum/30 text-platinum">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="legalsystem">Legal System</TabsTrigger>
          <TabsTrigger value="courts">DIFC/ADGM</TabsTrigger>
          <TabsTrigger value="ip">IP & Data</TabsTrigger>
          <TabsTrigger value="aml">AML & Sanctions</TabsTrigger>
          <TabsTrigger value="reforms">Reforms</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Legal & Regulatory Overview"
            description="Key metrics across UAE legal and regulatory frameworks"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Sentiment Distribution */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-platinum" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                  </CardContent>
                </Card>

                {/* Key Statistics Summary */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-gold" />
                      Key Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {keyStatistics.legalSystem.slice(0, 5).map((stat, idx) => (
                      <div key={idx} className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{stat.metric}</span>
                        <span className="text-gold font-bold text-sm">{stat.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Reforms Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-emerald" />
                    Legal Reforms Timeline (2020-2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {reformsTimeline.map((reform, idx) => (
                      <div key={idx} className="p-3 bg-gradient-to-br from-gold/20 to-navy/20 rounded-lg border border-gold/30 text-center">
                        <p className="text-lg font-bold text-gold">{reform.year}</p>
                        <p className="text-xs text-platinum-400 mt-1 line-clamp-2">{reform.reform.substring(0, 30)}...</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Data Tables */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-navy" />
                    Dashboard Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">98%</p>
                      <p className="text-xs text-platinum-400">Case Completion</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold">3,000+</p>
                      <p className="text-xs text-platinum-400">DIFC Companies</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-navy">1,005</p>
                      <p className="text-xs text-platinum-400">Patent Applications</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum">AED 1B</p>
                      <p className="text-xs text-platinum-400">AML Fines Max</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Legal System Tab */}
        <TabsContent value="legalsystem" className="space-y-6">
          <GlassPanel
            title="Legal System Structure"
            description="Civil law, Sharia interface, and court structure"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Legal System Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-platinum" />
                    Legal System Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">Dual</p>
                      <p className="text-sm text-platinum-400">Civil + Sharia Law</p>
                    </div>
                    <div className="p-4 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">3</p>
                      <p className="text-sm text-platinum-400">Court Tiers</p>
                    </div>
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">95%</p>
                      <p className="text-sm text-platinum-400">Digital Services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Court Tiers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-gold" />
                    Three-Tier Court System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {legalSystemStructure.courtTiers.map((tier, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-platinum mb-2">{tier.tier}</h4>
                        <p className="text-sm text-platinum-400">{tier.jurisdiction}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 2020 Reforms */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="h-5 w-5" />
                    2020 Decriminalization Reforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {decriminalizationReforms.map((reform, idx) => (
                      <div key={idx} className="p-4 bg-emerald/10 border border-emerald/30 rounded-lg">
                        <h4 className="font-bold text-emerald mb-2">{reform.area}</h4>
                        <p className="text-xs text-platinum-400 mb-2">{reform.date}</p>
                        <ul className="space-y-1">
                          {reform.changes.map((change, cidx) => (
                            <li key={cidx} className="text-sm text-platinum-300 flex items-start gap-2">
                              <span className="text-emerald">•</span>
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blood Money & Penalties */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-rose" />
                    Criminal Justice Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {keyStatistics.legalSystem.slice(3, 7).map((stat, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-rose">{stat.value}</p>
                        <p className="text-xs text-platinum-400">{stat.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Family Law */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-navy" />
                    Inheritance Rules (Sharia Application)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {familyLawInheritance.shariaApplication.map((rule, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg flex justify-between">
                        <span className="text-platinum-400 text-sm">{rule.beneficiary}</span>
                        <span className="text-gold font-bold text-sm">{rule.share}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* DIFC/ADGM Tab */}
        <TabsContent value="courts" className="space-y-6">
          <GlassPanel
            title="DIFC & ADGM Courts"
            description="Common law jurisdictions and financial courts"
            badge="Financial"
          >
            <div className="space-y-6">
              {/* DIFC Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold" />
                    DIFC (Dubai International Financial Centre)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400">Established</span>
                        <span className="text-platinum-200">{difcADGMCourts.difcOverview.established}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400">Area</span>
                        <span className="text-platinum-200">{difcADGMCourts.difcOverview.area}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400">Companies (2022)</span>
                        <span className="text-gold font-bold">{difcADGMCourts.difcOverview.companies2022}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400">Legal Framework</span>
                        <span className="text-platinum-200">Common Law, English</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Court Structure</h4>
                      <div className="space-y-2">
                        {difcADGMCourts.difcCourts.structure.map((court, idx) => (
                          <div key={idx} className="p-2 bg-slate-800/50 rounded-lg flex justify-between">
                            <span className="text-platinum-200 text-sm">{court.name}</span>
                            <span className="text-platinum-500 text-xs">{court.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DIFC Wills & Services */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ScrollText className="h-5 w-5 text-platinum" />
                    DIFC Wills & Dispute Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Will Service Options</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {difcADGMCourts.difcCourts.willServices.map((will, idx) => (
                          <div key={idx} className="p-2 bg-platinum/10 rounded-lg text-center">
                            <span className="text-platinum-300 text-xs">{will}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Contact</h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-platinum-400">Registry: {difcADGMCourts.difcContact.registry}</p>
                        <p className="text-platinum-400">Wills: {difcADGMCourts.difcContact.willsService}</p>
                        <p className="text-platinum-500 text-xs">{difcADGMCourts.difcContact.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ADGM */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-emerald" />
                    ADGM (Abu Dhabi Global Markets)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">2nd</p>
                      <p className="text-sm text-platinum-400">Most Active FinTech Sandbox Globally</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="text-sm font-semibold text-emerald mb-3">Dispute Resolution</h4>
                      <div className="space-y-2">
                        {difcADGMCourts.adgmDisputeResolution.hearingOptions.map((option, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-emerald">•</span>
                            <span className="text-platinum-300 text-sm">{option.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arbitration Institutions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-navy" />
                    Arbitration Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {arbitrationInstitutions.map((inst, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="font-medium text-platinum-200 text-sm">{inst.name}</p>
                        {inst.established && (
                          <p className="text-xs text-platinum-500">Est. {inst.established}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* IP & Data Tab */}
        <TabsContent value="ip" className="space-y-6">
          <GlassPanel
            title="Intellectual Property & Data Protection"
            description="IP protection, patents, trademarks, and data privacy"
            badge="Digital"
          >
            <div className="space-y-6">
              {/* Patent Filings Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    Patent Filing Growth (2016-2023)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={ipChartData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'resident', name: 'Resident', color: CHART_COLORS.gold },
                      { dataKey: 'total', name: 'Total', color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">+62%</p>
                      <p className="text-xs text-platinum-400">Resident Applications Growth</p>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold">28.7</p>
                      <p className="text-xs text-platinum-400">Per Million Residents (2023)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IP Costs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold" />
                    IP Protection Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {intellectualProperty.ipTypes.slice(0, 3).map((ip, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-gold mb-3">{ip.type}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-platinum-400">Duration</span>
                            <span className="text-platinum-200">{ip.protection}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400">Initial</span>
                            <span className="text-gold">{ip.costInitial}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-platinum-400">Annual</span>
                            <span className="text-gold">{ip.costAnnual}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Protection Law */}
              <Card className="glass-card border-navy-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-navy-400">
                    <Lock className="h-5 w-5" />
                    Personal Data Protection Law (PDPL)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="p-3 bg-navy/20 rounded-lg">
                        <p className="text-sm text-navy-400 font-semibold">Effective Date</p>
                        <p className="text-lg font-bold text-platinum">{dataProtectionLaw.primaryLaw.effectiveDate}</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Maximum Fine</p>
                        <p className="text-xl font-bold text-rose">AED 5,000,000</p>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-platinum-400">Children Protection</p>
                        <p className="text-xl font-bold text-gold">Under 13</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-3">Key Provisions</h4>
                      <div className="space-y-2">
                        {dataProtectionLaw.keyProvisions.map((prov, idx) => (
                          <div key={idx} className="p-2 bg-slate-800/50 rounded-lg">
                            <p className="text-platinum-300 text-sm">{prov}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cybercrime Law */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <XCircle className="h-5 w-5" />
                    Cybercrime Law Concerns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {cybercrimeLaw.keyProvisions.map((prov, idx) => (
                      <div key={idx} className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                        <p className="text-xs text-rose-400 font-semibold">{prov.article}</p>
                        <p className="text-sm text-platinum-300 mt-1">{prov.offense}</p>
                        <p className="text-xs text-rose-300 mt-1">{prov.penalty}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* AML & Sanctions Tab */}
        <TabsContent value="aml" className="space-y-6">
          <GlassPanel
            title="AML Framework & Regulatory Sandboxes"
            description="Anti-money laundering, sanctions, and innovation facilitation"
            badge="Financial"
          >
            <div className="space-y-6">
              {/* AML Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Anti-Money Laundering Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">AED 1B</p>
                      <p className="text-sm text-platinum-400">Max Administrative Fines</p>
                    </div>
                    <div className="p-4 bg-gold/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold">2020</p>
                      <p className="text-sm text-platinum-400">AML Courts Established</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">FATF</p>
                      <p className="text-sm text-platinum-400">Aligned Framework</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AML Institutions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold" />
                    AML Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {antiMoneyLaundering.institutions.map((inst, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="font-medium text-platinum-200 text-sm">{inst.name}</p>
                        <p className="text-xs text-platinum-500">{inst.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AML Systems */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-navy" />
                    Technological Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {antiMoneyLaundering.systems.map((sys, idx) => (
                      <div key={idx} className="p-4 bg-navy/20 rounded-lg border border-navy/30">
                        <h4 className="font-bold text-navy mb-2">{sys.name}</h4>
                        <p className="text-sm text-platinum-400">{sys.type}</p>
                        {sys.developer && (
                          <p className="text-xs text-platinum-500 mt-1">Developer: {sys.developer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regulatory Sandboxes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald" />
                    Regulatory Sandboxes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-3">
                    {regulatorySandboxes.sandboxes.map((sandbox, idx) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                        <p className="font-medium text-platinum-200 text-sm">{sandbox.name}</p>
                        {sandbox.regulator && (
                          <p className="text-xs text-emerald-400 mt-1">{sandbox.regulator}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-emerald/10 border border-emerald/30 rounded-lg text-center">
                    <p className="text-emerald-400 font-semibold">{regulatorySandboxes.ranking.adgmReglab}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Profession */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-gold" />
                    Legal Profession Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {legalProfession.categories.map((cat, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-gold mb-2">{cat.category}</h4>
                        <p className="text-xs text-platinum-400 mb-2">{cat.note || cat.courtRights}</p>
                        <div className="flex flex-wrap gap-1">
                          {cat.requirements.slice(0, 2).map((req, ridx) => (
                            <Badge key={ridx} variant="outline" className="text-xs">{req}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Reforms Tab */}
        <TabsContent value="reforms" className="space-y-6">
          <GlassPanel
            title="Legal Reforms Timeline"
            description="Comprehensive legislative reforms 2020-2025"
            badge="Legislative"
          >
            <div className="space-y-6">
              {/* Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold" />
                    Major Legislative Reforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {reformsTimeline.map((reform, idx) => (
                        <div key={idx} className="flex gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                          <div className="p-2 bg-gold/20 rounded-lg text-center min-w-[60px]">
                            <p className="text-lg font-bold text-gold">{reform.year}</p>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{reform.reform}</p>
                            {reform.decree && (
                              <p className="text-xs text-emerald-400 mt-1">{reform.decree}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Court Efficiency */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald" />
                    Court Efficiency Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-emerald/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald">98%</p>
                      <p className="text-sm text-platinum-400">Abu Dhabi Case Completion</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">40</p>
                      <p className="text-sm text-platinum-400">Days - First Instance</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">34</p>
                      <p className="text-sm text-platinum-400">Days - Appeals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Cooperation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-navy" />
                    International Legal Cooperation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Extradition Process (5 Stages)</h4>
                      <div className="space-y-2">
                        {internationalLegalCooperation.extradition.stages.map((stage, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-navy/30 rounded-full flex items-center justify-center text-xs text-navy font-bold">
                              {stage.stage}
                            </span>
                            <span className="text-platinum-300 text-sm">{stage.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gold mb-3">Bilateral Agreements</h4>
                      <div className="space-y-2">
                        {internationalLegalCooperation.agreements.slice(0, 5).map((agg, idx) => (
                          <div key={idx} className="p-2 bg-slate-800/50 rounded-lg">
                            <p className="text-xs text-platinum-400">{agg.type}</p>
                            <p className="text-sm text-platinum-300">{agg.countries.join(', ')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-platinum" />
                    Sentiment by Topic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-emerald mb-2">Positive Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {sentimentAnalysis.positiveTopics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="border-emerald/50 text-emerald bg-emerald/10">
                            {topic.topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-rose mb-2">Concerns</h4>
                      <div className="flex flex-wrap gap-2">
                        {sentimentAnalysis.negativeTopics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="border-rose/50 text-rose bg-rose/10">
                            {topic.topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-gold" />
                    UAE Relevance Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-rose mb-2">Critical Priority</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        {uaeRelevanceAssessment.criticalPriority.map((item, idx) => (
                          <div key={idx} className="p-3 bg-rose/10 border border-rose/30 rounded-lg">
                            <p className="text-xs text-rose-400">#{item.priority}</p>
                            <p className="font-medium text-platinum-200">{item.topic}</p>
                            <p className="text-xs text-platinum-500">{item.importance}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
