'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  uaeRelevanceMatrix,
  uaeConsiderations,
  regionalDynamics,
  threatAssessments,
  uaeThreatData,
} from '@/lib/data-loader/echo-chamber-data'
import {
  BarChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  MapPin,
  AlertTriangle,
  Globe,
  Users,
  Smartphone,
} from 'lucide-react'

export function SectionUAERelevance() {
  return (
    <div className="space-y-6">
      {/* UAE Relevance Score Header */}
      <GlassPanel
        title="UAE Information Ecosystem Relevance"
        description="Echo chamber and filter bubble dynamics in the UAE context"
        badge="SECTION D"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-emerald text-white text-2xl font-bold">
            3.2
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-400">HIGH Relevance</p>
            <p className="text-sm text-platinum-500-400">Score out of 5</p>
          </div>
        </div>
        <p className="text-sm text-platinum-500-300">
          Echo chamber and filter bubble dynamics significantly affect information exposure for UAE&apos;s diverse population (88.5% expats); domestic media creates total echo chamber while global platforms offer partial mitigation.
        </p>
      </GlassPanel>

      {/* UAE Relevance Matrix */}
      <GlassPanel
        title="UAE Relevance Matrix"
        description="Topic areas and their relevance to UAE information ecosystem"
        badge="D.1"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {uaeRelevanceMatrix.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span className="font-medium text-platinum-500-200">{item.topicArea}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-platinum-500-400 max-w-[300px]">{item.rationale}</span>
                  <Badge className={
                    item.uaeRelevance === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                    item.uaeRelevance === 'HIGH' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' :
                    'bg-amber-500/20 text-amber-400 border-amber-500/50'
                  }>
                    {item.uaeRelevance}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* UAE-Specific Considerations */}
      <GlassPanel
        title="UAE-Specific Considerations"
        description="Unique factors affecting echo chamber dynamics in UAE"
        badge="D.2"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {uaeConsiderations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                {item.factor === 'Large expat population' && <Users className="h-5 w-5 text-emerald-400" />}
                {item.factor === 'Strict media laws' && <Globe className="h-5 w-5 text-cyan-400" />}
                {item.factor === 'TikTok usage' && <Smartphone className="h-5 w-5 text-pink-400" />}
                {!['Large expat population', 'Strict media laws', 'TikTok usage'].includes(item.factor) && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                <h4 className="font-semibold text-platinum-500-200">{item.factor}</h4>
              </div>
              <p className="text-sm text-platinum-500-400 mb-2">{item.impact}</p>
              <p className="text-xs text-platinum-500-500">Evidence: {item.evidence}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Regional Echo Chamber Dynamics */}
      <GlassPanel
        title="Regional Echo Chamber Dynamics (Middle East)"
        description="Echo chamber characteristics specific to the UAE region"
        badge="D.3"
      >
        <ScrollArea className="h-[250px]">
          <div className="space-y-3">
            {regionalDynamics.map((dynamic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <span className="font-medium text-platinum-500-200">{dynamic.dynamic}</span>
                <div className="flex items-center gap-3">
                  <Badge className={
                    dynamic.presentInUAERegion === 'YES' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                    dynamic.presentInUAERegion === 'LIMITED' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                    'bg-rose-500/20 text-rose-400 border-rose-500/50'
                  }>
                    {dynamic.presentInUAERegion}
                  </Badge>
                  <span className="text-sm text-platinum-500-400 max-w-[200px]">{dynamic.evidence}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Threat Assessment Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">UAE Information Ecosystem Threat Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={uaeThreatData}
            xAxisKey="threat"
            bars={[
              { dataKey: 'probability', name: 'Probability', color: CHART_COLORS.rose },
              { dataKey: 'impact', name: 'Impact', color: CHART_COLORS.gold },
            ]}
            height={300}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Threat Assessment Table */}
      <GlassPanel
        title="Threat Assessment Details"
        description="Probability, impact, and combined risk scores"
        badge="D.4"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {threatAssessments.map((threat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <span className="font-medium text-platinum-500-200">{threat.threat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <Badge variant="outline" className={
                      threat.probability === 'HIGH' ? 'text-rose-400 border-rose-500/50' :
                      threat.probability === 'MEDIUM' ? 'text-amber-400 border-amber-500/50' :
                      'text-platinum-500-400'
                    }>
                      P: {threat.probability}
                    </Badge>
                    <Badge variant="outline" className={
                      threat.impact === 'HIGH' ? 'text-rose-400 border-rose-500/50' :
                      threat.impact === 'MEDIUM' ? 'text-amber-400 border-amber-500/50' :
                      'text-platinum-500-400'
                    }>
                      I: {threat.impact}
                    </Badge>
                  </div>
                  <Badge className={
                    threat.combinedScore === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                    threat.combinedScore === 'HIGH' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' :
                    threat.combinedScore === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                    'bg-platinum-500/20 text-platinum-500-400 border-platinum-500/50'
                  }>
                    {threat.combinedScore}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>
    </div>
  )
}
