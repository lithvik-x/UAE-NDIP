/**
 * TikTok Risk Analysis Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertOctagon, AlertCircle, Bot, Lock, Scale, AlertTriangle } from 'lucide-react'

interface RiskAnalysisProps {
  criticalRisks: Array<{
    id: string
    title: string
    riskLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
    description: string
    metric: string
    icon: string
    color: string
  }>
  iranConflictData: {
    missilesDrones: number
    deaths: number
    injuries: number
    peopleCharged: number
    penalty: string
    viralCoordinatedContent: {
      caption: string
      music: string
      description: string
    }
  }
  scamData: {
    globalLosses2025: string
    fakeDubaiPrince: {
      impersonated: string
      scamType: string
      method: string
      technique: string
      victimOutcome: string
    }
    redFlags: string[]
    otherScams: string[]
  }
}

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  AlertOctagon,
  AlertCircle,
  Bot,
  Lock,
  Scale,
  AlertTriangle,
}

export function RiskAnalysisSection({ criticalRisks, iranConflictData, scamData }: RiskAnalysisProps) {
  return (
    <div className="space-y-6">
      {/* Critical Risks Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {criticalRisks.map((risk, idx) => {
          const IconComponent = iconMap[risk.icon] || AlertOctagon
          return (
            <motion.div
              key={risk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card border-rose-500/30 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${
                  risk.riskLevel === 'CRITICAL' ? 'from-rose-500 to-pink-500' : 'from-gold-500 to-yellow-500'
                }`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{risk.title}</CardTitle>
                    <Badge variant="destructive" className="text-xs">
                      {risk.riskLevel}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" style={{ color: risk.color }} />
                    {risk.metric}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-platinum-300">{risk.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Iran Conflict Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertOctagon className="h-5 w-5 text-rose-400" />
              Iran Conflict Response (March 2026)
            </CardTitle>
            <CardDescription>Coordinated influencer content during missile attacks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-4 mb-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <span className="text-2xl font-bold text-rose-400">{iranConflictData.missilesDrones.toLocaleString()}</span>
                <span className="text-xs text-platinum-400">Missiles/Drones</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <span className="text-2xl font-bold text-rose-400">{iranConflictData.deaths}</span>
                <span className="text-xs text-platinum-400">Deaths</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <span className="text-2xl font-bold text-rose-400">{iranConflictData.injuries}</span>
                <span className="text-xs text-platinum-400">Injuries</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <span className="text-2xl font-bold text-rose-400">{iranConflictData.peopleCharged}</span>
                <span className="text-xs text-platinum-400">People Charged</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-platinum-800/50">
              <p className="text-sm text-platinum-300 mb-2">
                <span className="font-bold text-gold-700">Viral Coordinated Content:</span>
              </p>
              <p className="text-sm text-platinum-400 italic">"{iranConflictData.viralCoordinatedContent.caption}"</p>
              <p className="text-xs text-platinum-500 mt-1">Music: {iranConflictData.viralCoordinatedContent.music}</p>
              <p className="text-xs text-platinum-500">{iranConflictData.viralCoordinatedContent.description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Scam Data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-rose-400" />
              Scam Documentation
            </CardTitle>
            <CardDescription>Global and UAE-specific scam patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-rose-400">Fake Dubai Prince Scam</span>
                  <Badge variant="destructive">CRITICAL</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="text-platinum-400">Impersonated:</span> <span className="text-platinum-200">{scamData.fakeDubaiPrince.impersonated}</span></p>
                  <p><span className="text-platinum-400">Type:</span> <span className="text-platinum-200">{scamData.fakeDubaiPrince.scamType}</span></p>
                  <p><span className="text-platinum-400">Method:</span> <span className="text-platinum-200">{scamData.fakeDubaiPrince.method}</span></p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-gold-700">Global Losses 2025</span>
                  <Badge variant="outline" className="text-gold-700 border-gold-500/30">{scamData.globalLosses2025}</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-platinum-400">Red Flags:</p>
                  {scamData.redFlags.slice(0, 3).map((flag, idx) => (
                    <p key={idx} className="text-xs text-platinum-300">• {flag}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
