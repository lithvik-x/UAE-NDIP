// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Trophy, Target } from 'lucide-react'
import { useSportsIntelligenceData } from '@/lib/data-loader'
import {
  investmentOverview,
  sportswashingVectors,
  sportsKeyIndividuals,
} from '@/lib/data/topics/sports-data'
import { SportsOverviewSection } from '@/components/dashboard/topics/sports/SportsOverviewSection'
import { SportsEntitiesSection } from '@/components/dashboard/topics/sports/SportsEntitiesSection'
import { SportsSentimentSection } from '@/components/dashboard/topics/sports/SportsSentimentSection'
import { SportsTrendsSection } from '@/components/dashboard/topics/sports/SportsTrendsSection'
import { SportsGovernanceSection } from '@/components/dashboard/topics/sports/SportsGovernanceSection'

export default function SportsIntelligencePage() {
  const { data } = useSportsIntelligenceData()

  // Extract key metrics from real data
  const totalInvestment = investmentOverview[0]?.valueUSD || '$10B+'
  const sportswashingIndex = 68
  const majorEvents = 24

  // Derive props for section components from sports-data
  const sportswashingRiskVectors = sportswashingVectors.map(v => ({
    vector: v.vector,
    details: v.criticism || v.details || '',
    criticismLevel: v.level || 'Moderate',
  }))

  const overviewData = {
    investmentOverview,
    dashboardInvestmentSummary: data?.dashboardInvestmentSummary || [],
    sportswashingVectors: sportswashingRiskVectors,
    focusAreas: data?.focusAreas || [],
    summaryStatistics: data?.summaryStatistics || [],
    executionMetadata: data?.executionMetadata || { ssotClassification: 'Sports Intelligence SSOT' },
  }

  const entitiesData = {
    cfgOwnership: data?.cfgOwnership || [],
    mancityFinancials: data?.mancityFinancials || [],
    f1Impact: data?.f1Impact || [],
    f12024Top3: data?.f12024Top3 || [],
    f12025Top3: data?.f12025Top3 || [],
    sportsKeyIndividuals: sportsKeyIndividuals,
  }

  const trendsData = {
    leagueStandings: data?.proLeagueStandings || [],
    scorers: data?.topScorers || [],
    nbaData: data?.nbaPartnership || [],
  }

  const governanceData = {
    federalLawObjectives: data?.federalLawObjectives || [],
    bettingTimeline: data?.bettingTimeline || [],
    camelRacingTimeline: data?.camelRacingTimeline || [],
    olympicMedals: data?.olympicMedals || [],
    youthDevelopmentPrograms: data?.youthDevelopmentPrograms || [],
    humanRightsViolations: data?.humanRightsViolations || [],
    rightsHolders: data?.rightsHolders || [],
    womensSportsParticipation: data?.womensSportsParticipation || { cycling: [], football: [], motorsport: [], equestrian: [] },
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum-500">Sports Intelligence</h1>
          <p className="mt-2 text-platinum-400">
            Sportswashing analysis, F1 monitoring, and sports diplomacy tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
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
          icon={<Target className="h-6 w-6" />}
          gradient="indigo"
          status="warning"
        />
        <MetricCard
          title="Investment (Decade)"
          value={totalInvestment}
          previousValue="$9.5B"
          icon={<Trophy className="h-6 w-6" />}
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
          icon={<Trophy className="h-6 w-6" />}
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
          <SportsOverviewSection data={overviewData} />
        </TabsContent>

        {/* Key Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <SportsEntitiesSection {...entitiesData} />
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <SportsSentimentSection
            sportswashingSentimentAnalysis={data?.sportswashingSentimentAnalysis || []}
            sportsInvestmentSentimentAnalysis={data?.sportsInvestmentSentimentAnalysis || []}
            governanceReformSentimentAnalysis={data?.governanceReformSentimentAnalysis || []}
            emiratesSponsorshipDashboard={data?.emiratesSponsorship || []}
          />
        </TabsContent>

        {/* Brand Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <SportsTrendsSection {...trendsData} />
        </TabsContent>

        {/* Governance Tab */}
        <TabsContent value="governance" className="space-y-6">
          <SportsGovernanceSection {...governanceData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
