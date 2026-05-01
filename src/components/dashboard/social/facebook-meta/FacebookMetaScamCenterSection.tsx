'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { MetricCard } from '@/components/dashboard/metric-card'
import { AlertCircle, AlertTriangle, Shield, Users, DollarSign, Phone, Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  scamStatistics,
  recentScamAlerts,
  commonScamTypes,
  preventionTips,
  aiPoweredScamsStats,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaScamCenterSection() {
  const scamStatsData = [
    { label: 'Meta Removed Ads', value: scamStatistics.metaRemovedAds2025, icon: Shield, color: CHART_COLORS.rose },
    { label: 'Scam Accounts', value: scamStatistics.metaRemovedAccounts2025, icon: AlertTriangle, color: CHART_COLORS.gold },
    { label: 'Residents Targeted', value: `${scamStatistics.residentsExperiencingScams}%`, icon: Users, color: CHART_COLORS.navy },
    { label: 'Avg Loss', value: scamStatistics.averageLoss, icon: DollarSign, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="UAE Facebook Scam Center"
        description="Scam alerts, statistics, and prevention resources"
      >
        <div className="space-y-6">
          {/* Scam Alert Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-4 glass-panel"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-rose-500" />
              <div className="flex-1">
                <h3 className="font-semibold text-rose-400">7 in 10 UAE Residents Targeted by Scams</h3>
                <p className="text-sm text-platinum-400">
                  Meta removed 159M+ scam ads and 10.9M scam accounts in 2025. Stay vigilant and report suspicious activity.
                </p>
              </div>
              <Badge variant="destructive" className="text-xs">HIGH ALERT</Badge>
            </div>
          </motion.div>

          {/* Scam Statistics Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scamStatsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <MetricCard
                  title={stat.label}
                  value={stat.value}
                  icon={<stat.icon className="h-5 w-5" />}
                  gradient="rose"
                  status="warning"
                  className="glass-panel"
                />
              </motion.div>
            ))}
          </div>

          {/* AI-Powered Scams */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber" />
                AI-Powered Scams Statistics
              </CardTitle>
              <CardDescription>Emerging threats using artificial intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center p-4 rounded-lg bg-platinum-800/50">
                  <span className="text-3xl font-bold text-amber">{aiPoweredScamsStats.peopleArrested}</span>
                  <span className="text-xs text-platinum-400 mt-1">People Arrested</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-platinum-800/50">
                  <span className="text-3xl font-bold text-rose">{aiPoweredScamsStats.fraudCases}</span>
                  <span className="text-xs text-platinum-400 mt-1">Fraud Cases</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-platinum-800/50">
                  <span className="text-3xl font-bold text-gold">{aiPoweredScamsStats.timeframe}</span>
                  <span className="text-xs text-platinum-400 mt-1">Timeframe</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Scam Alerts */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose" />
                Recent Scam Alerts
              </CardTitle>
              <CardDescription>Latest documented scams targeting UAE residents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentScamAlerts.slice(0, 6).map((alert, idx) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-platinum-800/30 border border-platinum-700/30"
                  >
                    <AlertCircle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-platinum-200">{alert.alertType}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            alert.credibility === 'Very High' ? 'border-emerald-500/50 text-emerald-400' :
                            alert.credibility === 'High' ? 'border-info/50 text-info' :
                            'border-platinum-500/50 text-platinum-400'
                          }`}
                        >
                          {alert.credibility}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-platinum-500">
                        <span>{alert.date}</span>
                        <span>Source: {alert.source}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Scam Types */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg">Common Scam Types in UAE</CardTitle>
              <CardDescription>Most prevalent Facebook scams and fraud schemes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {commonScamTypes.map((scam, idx) => (
                  <motion.div
                    key={scam.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg bg-platinum-800/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-semibold text-platinum-200">{scam.scamType}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          scam.severity === 'High' ? 'border-rose-500/50 text-rose-400' :
                          scam.severity === 'Medium' ? 'border-amber-500/50 text-amber-400' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {scam.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-platinum-400 mb-2">{scam.description}</p>
                    <p className="text-xs text-emerald-400">{scam.prevention}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prevention Tips */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald" />
                Scam Prevention Tips
              </CardTitle>
              <CardDescription>How to protect yourself from Facebook scams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {preventionTips.map((tip, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-2 p-3 rounded-lg bg-platinum-800/30"
                  >
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-emerald-400 font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-platinum-300">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}