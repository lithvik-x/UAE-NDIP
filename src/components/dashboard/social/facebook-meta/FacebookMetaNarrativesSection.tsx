'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import { TrendingUp, Heart, AlertTriangle, Shield, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { facebookMetaData } from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaNarrativesSection() {
  const { keyNarratives } = facebookMetaData

  const narrativeData = keyNarratives.map((n, i) => ({
    topic: n.topic,
    prevalence: n.prevalence,
    sentiment: n.sentiment,
    color: n.sentiment === 'positive' ? CHART_COLORS.emerald : n.sentiment === 'negative' ? CHART_COLORS.rose : CHART_COLORS.platinum,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Key Narratives on UAE Facebook"
        description="Prevailing topics and narratives analysis"
      >
        <div className="space-y-6">
          {/* Narrative Chart */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-info" />
                Narrative Prevalence
              </CardTitle>
              <CardDescription>Key topics ranked by prevalence score</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={narrativeData}
                xAxisKey="topic"
                bars={[
                  { dataKey: 'prevalence', name: 'Prevalence', color: CHART_COLORS.indigo },
                ]}
                height={320}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Narrative Details */}
          <div className="grid gap-6 lg:grid-cols-2">
            {keyNarratives.map((narrative, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`glass-card border-glass ${
                  narrative.sentiment === 'positive' ? 'border-emerald-500/30' :
                  narrative.sentiment === 'negative' ? 'border-rose-500/30' :
                  'border-platinum-500/30'
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center gap-2">
                        {narrative.sentiment === 'positive' ? (
                          <Heart className="h-4 w-4 text-emerald-500" />
                        ) : narrative.sentiment === 'negative' ? (
                          <AlertTriangle className="h-4 w-4 text-rose-500" />
                        ) : (
                          <MessageSquare className="h-4 w-4 text-platinum-500" />
                        )}
                        {narrative.topic}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={`${
                          narrative.sentiment === 'positive' ? 'border-emerald-500/50 text-emerald-400' :
                          narrative.sentiment === 'negative' ? 'border-rose-500/50 text-rose-400' :
                          'border-platinum-500/50 text-platinum-500-400'
                        }`}
                      >
                        {narrative.sentiment}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-platinum-500-300 mb-3">{narrative.narrative}</p>
                    <div className="flex items-center justify-between text-xs text-platinum-500-500">
                      <span>Prevalence: <strong className="text-platinum-500-300">{narrative.prevalence}%</strong></span>
                      <span>Source: {narrative.source}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}