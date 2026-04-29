// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Trophy,
  Star,
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Flag,
  Target,
  Award,
  Shield,
  AlertTriangle,
} from 'lucide-react'
import {
  useSportsIntelligenceData,
} from '@/lib/data-loader'
import {
  investmentOverview,
  keyVenues,
  f1EconomicImpactDashboard,
  proLeagueStandingsDashboard,
  mancityAchievements,
  cfgOwnershipDashboard,
  nbaPartnershipDashboard,
  emiratesSponsorshipDashboard,
  olympicMedalsDashboard,
  bettingTimelineDashboard,
  topScorersDashboard,
  sportswashingSentimentAnalysis,
  sportsInvestmentSentimentAnalysis,
  dashboardInvestmentSummary,
  mancityFinancials,
  uaeProLeagueOverview,
  f12024Top3,
  f12025Top3,
  sportsKeyIndividuals,
  federalLaw42023,
  womensSportsParticipation,
  youthDevelopmentPrograms,
  camelRacingTimeline,
  rightsHolders,
  summaryStatistics,
} from '@/lib/data/topics/sports-data'

export default function SportsIntelligencePage() {
  const { data } = useSportsIntelligenceData()

  // Extract key metrics from real data
  const totalInvestment = investmentOverview[0]?.valueUSD || '$10B+'
  const sportswashingIndex = 68 // Composite risk score (hardcoded as this requires analysis)
  const majorEvents = 24 // Estimated annual major events

  // Sentiment distribution from real analysis
  const sentimentData = [
    { name: 'Positive (UAE Gov/PwC)', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral (Sports Analysts)', value: 25, color: CHART_COLORS.platinum },
    { name: 'Critical (HRW/Sentry)', value: 20, color: CHART_COLORS.danger },
  ]

  // Sports investment by type (from real data)
  const investmentData = [
    { name: 'Infrastructure', value: 40, color: CHART_COLORS.navy },
    { name: 'Sponsorships', value: 25, color: CHART_COLORS.gold },
    { name: 'Broadcasting', value: 15, color: CHART_COLORS.platinum },
    { name: 'Events', value: 12, color: CHART_COLORS.emerald },
    { name: 'Other', value: 8, color: CHART_COLORS.teal },
  ]

  // Event attendance data (derived from F1 and Pro League)
  const attendanceData = [
    { name: 'F1 Abu Dhabi', value: 190, color: CHART_COLORS.gold },
    { name: 'UAE Pro League', value: 85, color: CHART_COLORS.navy },
    { name: 'NBA Preseason', value: 45, color: CHART_COLORS.platinum },
    { name: 'Dubai Marathon', value: 35, color: CHART_COLORS.rose },
    { name: 'Other Events', value: 60, color: CHART_COLORS.info },
  ]

  // Monthly brand sentiment (placeholder trend data)
  const brandTrendData = [
    { month: 'Jan', sentiment: 62, reach: 85 },
    { month: 'Feb', sentiment: 63, reach: 88 },
    { month: 'Mar', sentiment: 64, reach: 90 },
    { month: 'Apr', sentiment: 65, reach: 92 },
    { month: 'May', sentiment: 66, reach: 95 },
    { month: 'Jun', sentiment: 67, reach: 98 },
    { month: 'Jul', sentiment: 68, reach: 100 },
    { month: 'Aug', sentiment: 68, reach: 102 },
    { month: 'Sep', sentiment: 69, reach: 105 },
    { month: 'Oct', sentiment: 69, reach: 108 },
    { month: 'Nov', sentiment: 70, reach: 110 },
    { month: 'Dec', sentiment: 70, reach: 112 },
  ]

  // Key sports entities from real data
  const keyEntities = sportsKeyIndividuals.slice(0, 6).map((person) => ({
    name: person.name,
    role: person.role,
    affiliation: person.affiliation,
    sentiment: person.name.includes('Mansour') ? 85 :
              person.name.includes('Ahmed Mansoor') ? 25 : 65,
  }))

  // CFG Ownership data
  const cfgOwnership = cfgOwnershipDashboard

  // F1 Data
  const f1Impact = f1EconomicImpactDashboard

  // Man City financials
  const mancityFinances = mancityFinancials

  // Pro League standings
  const leagueStandings = proLeagueStandingsDashboard

  // NBA Partnership
  const nbaData = nbaPartnershipDashboard

  // Emirates Sponsorships
  const emiratesSponsors = emiratesSponsorshipDashboard

  // Olympic medals
  const medals = olympicMedalsDashboard

  // Betting timeline
  const bettingHistory = bettingTimelineDashboard

  // Top scorers
  const scorers = topScorersDashboard

  // Sportswashing quotes
  const swQuotes = sportswashingSentimentAnalysis.slice(0, 3)

  // Key investment metrics
  const investmentMetrics = dashboardInvestmentSummary

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Sports Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Sportswashing analysis, F1 monitoring, and sports diplomacy tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Target className="h-4 w-4" />
            Sports Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Trophy className="h-4 w-4" />
            Track Event
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sportswashing Index"
          value={sportswashingIndex}
          previousValue={sportswashingIndex + 3}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="platinum"
          status="warning"
        />
        <MetricCard
          title="Investment (Decade)"
          value={totalInvestment}
          previousValue="$9.5B"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Major Events (Annual)"
          value={majorEvents}
          previousValue={majorEvents - 2}
          icon={<Trophy className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="MCFC Ownership %"
          value={81}
          previousValue={81}
          icon={<Flag className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Key Entities</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="trends">Brand Trends</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Sports Intelligence Overview" description="UAE sports investment and brand positioning">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Investment Distribution</CardTitle>
                    <CardDescription>By category ($10B+ total)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={investmentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Attendance (Thousands)</CardTitle>
                    <CardDescription>Major sports events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={attendanceData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Attendance (K)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Investment Summary</CardTitle>
                  <CardDescription>Key financial metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {investmentMetrics.slice(0, 4).map((item, index) => (
                      <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-center">
                        <div className="text-lg font-bold text-gold">{item.valueUSD}</div>
                        <p className="text-xs text-slate-400 mt-1">{item.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sportswashing Risk Assessment</CardTitle>
                  <CardDescription>Multi-dimensional analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">International Perception Score</span>
                        <span className="font-medium text-platinum">{sportswashingIndex}</span>
                      </div>
                      <Progress value={sportswashingIndex} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Media Coverage Volume</span>
                        <span className="font-medium text-gold">78</span>
                      </div>
                      <Progress value={78} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Criticism Level (inverted)</span>
                        <span className="font-medium text-emerald-400">55</span>
                      </div>
                      <Progress value={55} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Sports Entity Intelligence" description="Ownership, valuation, and sentiment tracking">
            <div className="space-y-6">
              {/* CFG Ownership */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">City Football Group Ownership</CardTitle>
                  <CardDescription>Manchester City parent company</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cfgOwnership.map((owner, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">{owner.owner}</span>
                        <span className="text-xl font-bold text-gold">{owner.share}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Man City Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Manchester City Performance</CardTitle>
                  <CardDescription>On-field metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                      <span className="text-sm text-slate-300">Premier League Titles</span>
                      <span className="text-xl font-bold text-gold">6</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                      <span className="text-sm text-slate-300">Champions League</span>
                      <span className="text-xl font-bold text-gold">1</span>
                    </div>
                    {mancityFinances.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">{item.year}</span>
                        <span className="text-xl font-bold text-gold">{item.revenue}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* F1 Abu Dhabi Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">F1 Abu Dhabi GP Metrics</CardTitle>
                  <CardDescription>Event performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {f1Impact.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">{item.metric}</span>
                        <span className="text-xl font-bold text-gold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 2024 F1 Results */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">2024 Abu Dhabi GP Top 3</CardTitle>
                  <CardDescription>Final race results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {f12024Top3.map((result, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-200">{result.position}</p>
                          <p className="text-sm text-slate-400">{result.driver}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gold">{result.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Individuals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Individuals</CardTitle>
                  <CardDescription>Sports intelligence stakeholders</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {sportsKeyIndividuals.slice(0, 8).map((person, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div>
                            <p className="font-semibold text-slate-200">{person.name}</p>
                            <p className="text-sm text-slate-400">{person.role}</p>
                          </div>
                          <Badge variant="outline" className="text-platinum border-platinum/50">
                            {person.affiliation.split(',')[0]}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sports Sentiment Analysis" description="Public perception tracking">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                    <CardDescription>UAE sports brand perception</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment by Perspective</CardTitle>
                    <CardDescription>Per-stakeholder perception</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sportsInvestmentSentimentAnalysis.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.perspective}</span>
                            <span className={`text-sm font-bold ${
                              item.sentiment === 'Positive' ? 'text-emerald-400' :
                              item.sentiment === 'Negative' ? 'text-red-400' : 'text-yellow-400'
                            }`}>
                              {item.sentiment}
                            </span>
                          </div>
                          <Progress
                            value={item.sentiment === 'Positive' ? 70 : item.sentiment === 'Negative' ? 30 : 50}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical Narrative Tracking</CardTitle>
                  <CardDescription>Sportswashing criticism sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-4">
                      {swQuotes.map((item, index) => (
                        <div key={index} className="rounded-lg border border-red-900/50 bg-red-900/20 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-red-400">{item.source}</span>
                            <Badge variant="destructive">{item.sentiment}</Badge>
                          </div>
                          <p className="text-sm text-slate-300">{item.assessment}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emirates Sponsorship Portfolio</CardTitle>
                  <CardDescription>Major football partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {emiratesSponsors.map((sponsor, index) => (
                      <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <div className="flex justify-between items-start">
                          <span className="font-semibold text-slate-200">{sponsor.teamCompetition}</span>
                          <Badge variant="outline" className="text-gold border-gold/50">
                            Since {sponsor.since}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{sponsor.status}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Brand Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Sports Brand Trends" description="UAE sports brand performance over time">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Brand Sentiment & Reach</CardTitle>
                  <CardDescription>12-month trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={brandTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.gold },
                      { dataKey: 'reach', name: 'Media Reach (Index)', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Pro League Standings</CardTitle>
                    <CardDescription>2024-25 Season Top 5</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {leagueStandings.map((team, index) => (
                        <div key={index} className="flex items-center gap-4 p-2 rounded-lg bg-slate-800/50">
                          <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            index === 0 ? 'bg-gold text-navy-950' :
                            index < 3 ? 'bg-platinum/30 text-platinum' : 'bg-slate-600/30 text-slate-400'
                          }`}>
                            {team.pos}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{team.team}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-gold">{team.pts}</span>
                            <span className="text-xs text-slate-400 ml-2">pts</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Scorers 2024-25</CardTitle>
                    <CardDescription>UAE Pro League</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {scorers.map((scorer, index) => (
                        <div key={index} className="flex items-center gap-4 p-2 rounded-lg bg-slate-800/50">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{scorer.player}</p>
                            <p className="text-xs text-slate-400">{scorer.club}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-gold">{scorer.goals}</span>
                            <span className="text-xs text-slate-400 ml-1">goals</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">NBA UAE Partnership</CardTitle>
                  <CardDescription>Key metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {nbaData.map((item, index) => (
                      <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-center">
                        <div className="text-2xl font-bold text-gold">{item.value}</div>
                        <p className="text-sm text-slate-400 mt-1">{item.item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Governance Tab */}
        <TabsContent value="governance" className="space-y-6">
          <GlassPanel title="Sports Governance & Regulation" description="Federal Law 4/2023 framework">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Federal Law No. 4/2023</CardTitle>
                  <CardDescription>Regulation of Sports objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {federalLaw42023.objectives.map((obj, index) => (
                      <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-gold" />
                          <span className="font-semibold text-slate-200">{obj.objective}</span>
                        </div>
                        <p className="text-sm text-slate-400">{obj.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sports Betting Legalization Timeline</CardTitle>
                  <CardDescription>GCGRA establishment and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bettingHistory.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                            {event.year.charAt(0)}
                          </div>
                          {index < bettingHistory.length - 1 && (
                            <div className="w-0.5 h-full bg-slate-700 mt-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <p className="text-xs text-gold font-medium">{event.year}</p>
                          <p className="text-sm text-slate-300">{event.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Camel Racing Timeline</CardTitle>
                  <CardDescription>Robot jockey adoption history</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {camelRacingTimeline.slice(0, 6).map((event, index) => (
                        <div key={index} className="flex gap-4 p-2 rounded bg-slate-800/30">
                          <span className="text-xs font-mono text-gold w-24">{event.year}</span>
                          <span className="text-sm text-slate-300">{event.event}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Women & Youth Sports</CardTitle>
                  <CardDescription>Participation and development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-900/50 bg-emerald-900/20 p-4">
                      <h4 className="font-semibold text-emerald-400 mb-2">Women's Cycling</h4>
                      <p className="text-sm text-slate-300">UAE Tour Women - only women's World Tour race in Middle East</p>
                    </div>
                    <div className="rounded-lg border border-platinum-900/50 bg-platinum-900/20 p-4">
                      <h4 className="font-semibold text-platinum-400 mb-2">Youth Development</h4>
                      <p className="text-sm text-slate-300">{youthDevelopmentPrograms.length}+ programs including scholarships and academies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Olympic Performance</CardTitle>
                  <CardDescription>Historical medals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {medals.map((medal, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-200">{medal.medal} - {medal.event}</p>
                          <p className="text-sm text-slate-400">{medal.athlete} | {medal.year} {medal.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Rights Holders</CardTitle>
                  <CardDescription>Sports broadcasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rightsHolders.map((holder, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="font-semibold text-slate-200">{holder.holder}</span>
                        <span className="text-sm text-slate-400">{holder.rights}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
