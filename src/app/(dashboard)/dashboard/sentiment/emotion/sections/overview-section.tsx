// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Smile,
  Heart,
  AlertTriangle,
  AlertCircle,
  Frown,
  Feather,
  Angry,
  Clock,
  TrendingUp,
  TrendingDown,
  Brain,
} from 'lucide-react'

const emotionIcons: Record<string, React.ElementType> = {
  Smile: Smile,
  Heart: Heart,
  AlertTriangle: AlertTriangle,
  AlertCircle: AlertCircle,
  Frown: Frown,
  Feather: Feather,
  Angry: Angry,
  Clock: Clock,
}

const emotionColors: Record<string, string> = {
  gold: 'text-gold-700',
  navy: 'text-navy-500',
  rose: 'text-rose-500',
  platinum: 'text-platinum-500',
  info: 'text-info',
  emerald: 'text-emerald-500',
}

interface OverviewSectionProps {
  emotionCategories: Array<{
    emotion: string
    primaryQueries: number
    uniqueSources: number
    dataPointsExtracted: number
    avgSentimentScore: number
    polarity: 'positive' | 'negative' | 'neutral'
  }>
  emotionKPIDashboard: Array<{
    emotion: string
    sentimentIndex: number
    trend: 'Positive' | 'Negative' | 'Neutral'
    lastUpdated: string
  }>
  netEmotionalBalance: {
    value: number
    trend: string
    lastUpdated: string
  }
}

export function OverviewSection({
  emotionCategories,
  emotionKPIDashboard,
  netEmotionalBalance,
}: OverviewSectionProps) {
  return (
    <GlassPanel
      title="Emotion Analysis Overview"
      description="Plutchik emotion model analysis for UAE context"
    >
      <div className="space-y-6">
        {/* Emotion Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {emotionCategories.map((emotion) => {
            const Icon = emotionIcons[emotion.emotion] || Brain
            const color = emotionColors[emotion.emotion.toLowerCase()] || 'text-platinum-500'
            const sentimentPercent = Math.round(emotion.avgSentimentScore * 100)
            const isPositive = emotion.avgSentimentScore > 0

            return (
              <Card key={emotion.emotion} className="glass-card border-platinum-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isPositive ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`} />
                    </div>
                    <div>
                      <p className="font-bold text-platinum-200">{emotion.emotion}</p>
                      <Badge
                        variant={isPositive ? 'success' : 'destructive'}
                        className="text-xs"
                      >
                        {emotion.polarity}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-400">Sentiment</span>
                      <span className={`font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {sentimentPercent > 0 ? '+' : ''}{sentimentPercent}%
                      </span>
                    </div>
                    <Progress
                      value={Math.abs(sentimentPercent)}
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-platinum-500">
                      <span>{emotion.primaryQueries} queries</span>
                      <span>{emotion.dataPointsExtracted} data points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Net Emotional Balance */}
        <Card className="glass-card border-gold-700/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-gold-700" />
              Net Emotional Balance
            </CardTitle>
            <CardDescription>Aggregate sentiment across all 8 Plutchik emotions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`text-5xl font-bold ${netEmotionalBalance.value >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {netEmotionalBalance.value >= 0 ? '+' : ''}{netEmotionalBalance.value.toFixed(2)}
                </div>
                <div>
                  <Badge variant={netEmotionalBalance.value >= 0 ? 'success' : 'destructive'}>
                    {netEmotionalBalance.trend}
                  </Badge>
                  <p className="text-xs text-platinum-400 mt-1">Last updated: {netEmotionalBalance.lastUpdated}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {netEmotionalBalance.value >= 0 ? (
                  <TrendingUp className="h-8 w-8 text-emerald-400" />
                ) : (
                  <TrendingDown className="h-8 w-8 text-rose-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Dashboard */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Emotion KPI Dashboard</CardTitle>
            <CardDescription>Sentiment indices by emotion category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emotionKPIDashboard.map((kpi) => {
                const sentimentPercent = Math.round(kpi.sentimentIndex * 100)
                const isPositive = kpi.sentimentIndex > 0
                const Icon = emotionIcons[kpi.emotion] || Brain

                return (
                  <div key={kpi.emotion} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-platinum-800/50">
                      <Icon className="h-4 w-4 text-platinum-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-platinum-300">{kpi.emotion}</span>
                        <span className={`font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {sentimentPercent > 0 ? '+' : ''}{sentimentPercent}%
                        </span>
                      </div>
                      <Progress
                        value={Math.abs(sentimentPercent)}
                        className="h-2"
                      />
                    </div>
                    <Badge
                      variant={kpi.trend === 'Positive' ? 'success' : kpi.trend === 'Negative' ? 'destructive' : 'default'}
                      className="text-xs"
                    >
                      {kpi.trend}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}
