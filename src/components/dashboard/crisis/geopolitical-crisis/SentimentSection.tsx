'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  Target,
  CheckCircle,
  XCircle,
  Minus,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  sentimentAnalysis,
  uaeRelevanceAssessment,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface SentimentSectionProps {
  className?: string
}

const getIntensityColor = (intensity: number) => {
  if (intensity < -5) return 'text-rose-400'
  if (intensity < 0) return 'text-orange-400'
  if (intensity === 0) return 'text-platinum-400'
  if (intensity < 5) return 'text-emerald-400'
  return 'text-emerald-400'
}

const getSentimentIcon = (intensity: number) => {
  if (intensity < 0) return <XCircle className="h-4 w-4" />
  if (intensity === 0) return <Minus className="h-4 w-4" />
  return <CheckCircle className="h-4 w-4" />
}

export function SentimentSection({ className }: SentimentSectionProps) {
  // Prepare chart data from sentimentAnalysis
  const sentimentChartData = sentimentAnalysis.map((c) => ({
    country: c.country,
    intensity: c.intensity,
  }))

  const relevanceChartData = uaeRelevanceAssessment.slice(0, 8).map((r) => ({
    topic: r.topic.length > 25 ? r.topic.substring(0, 25) + '...' : r.topic,
    score: r.score,
  }))

  return (
    <div className={className}>
      <GlassPanel
        title="Sentiment & Relevance Analysis"
        description="Regional sentiment toward UAE and strategic relevance scores"
      >
        <div className="space-y-6">
          {/* Sentiment Bar Chart */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-rose-400" />
                Regional Sentiment Toward UAE
              </CardTitle>
              <CardDescription>Sentiment intensity by country (-10 to +10 scale)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={sentimentChartData}
                xAxisKey="country"
                bars={[{ dataKey: 'intensity', name: 'Intensity', color: CHART_COLORS.rose }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Sentiment Details Table */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-400" />
                Country-Level Sentiment Breakdown
              </CardTitle>
              <CardDescription>Detailed sentiment analysis with key drivers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentimentAnalysis.map((country, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`h-5 w-5 ${getIntensityColor(country.intensity)}`}>
                          {getSentimentIcon(country.intensity)}
                        </span>
                        <h4 className="font-semibold text-platinum-200">{country.country}</h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            country.sentiment.includes('Highly Negative') || country.sentiment.includes('Negative')
                              ? 'text-rose-400 border-rose-400/50'
                              : country.sentiment.includes('Mixed')
                              ? 'text-amber-400 border-amber-400/50'
                              : 'text-emerald-400 border-emerald-400/50'
                          }`}
                        >
                          {country.sentiment}
                        </Badge>
                        <span className={`text-lg font-bold ${getIntensityColor(country.intensity)}`}>
                          {country.intensity > 0 ? '+' : ''}{country.intensity}
                        </span>
                      </div>
                    </div>
                    {country.keyDrivers && country.keyDrivers.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {country.keyDrivers.map((driver, dIdx) => (
                          <Badge key={dIdx} variant="secondary" className="text-xs bg-platinum-700 text-platinum-300">
                            {driver}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Relevance Scores */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-navy-400" />
                UAE Strategic Relevance Assessment
              </CardTitle>
              <CardDescription>Priority issues for UAE foreign policy (1-10 scale)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={relevanceChartData}
                xAxisKey="topic"
                bars={[{ dataKey: 'score', name: 'Score', color: CHART_COLORS.navy }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Source Credibility Summary */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-400" />
                Source Tier Distribution
              </CardTitle>
              <CardDescription>Research sources by credibility tier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-2">
                <PieChart
                  data={[
                    { name: 'Government/Intergov', value: 5, color: CHART_COLORS.navy },
                    { name: 'Think Tanks', value: 10, color: CHART_COLORS.denim },
                    { name: 'NGOs', value: 5, color: CHART_COLORS.teal },
                    { name: 'News/Media', value: 10, color: CHART_COLORS.platinum },
                  ]}
                  height={250}
                  showLegend={true}
                />
                <div className="space-y-3">
                  {[
                    { tier: 'Government/Intergov', count: 5, color: 'bg-navy-500' },
                    { tier: 'Think Tanks', count: 10, color: 'bg-navy-500' },
                    { tier: 'NGOs', count: 5, color: 'bg-cyan-500' },
                    { tier: 'News/Media', count: 10, color: 'bg-platinum-500' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${item.color}`} />
                        <span className="text-platinum-300">{item.tier}</span>
                      </div>
                      <span className="text-platinum-200 font-medium">{item.count} sources</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </div>
  )
}
