'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Shield, AlertCircle, FileText, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  traRegulations,
  commonTactics,
  priceTrackingPlatform,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaRegulationsSection() {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Regulations & Content Moderation"
        description="UAE social media regulations and TRA requirements"
      >
        <div className="space-y-6">
          {/* TRA Regulations */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-gold" />
                TRA Social Media Regulations
              </CardTitle>
              <CardDescription>Telecommunications Regulatory Authority requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {traRegulations.penalties.map((penalty, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50"
                  >
                    <h4 className="text-sm font-semibold text-platinum-200 mb-1">{penalty.violation}</h4>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-gold/50 text-gold">
                        Fine: {penalty.fine}
                      </Badge>
                      {penalty.imprisonment && penalty.imprisonment !== 'Yes' && (
                        <span className="text-xs text-rose-400">Imprisonment: {penalty.imprisonment}</span>
                      )}
                      {penalty.imprisonment === 'Yes' && (
                        <span className="text-xs text-rose-400">Imprisonment: Yes</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Common Tactics Used */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose" />
                Common Tactics & Violations
              </CardTitle>
              <CardDescription>Frequently encountered content violations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {commonTactics.map((tactic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-start gap-2 p-3 rounded-lg bg-platinum-800/30"
                  >
                    <div className="h-2 w-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-platinum-300">{tactic.tactic}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Tracking */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-info" />
                Price Monitoring Requirements
              </CardTitle>
              <CardDescription>UAE price transparency regulations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-platinum-800/50">
                  <h4 className="text-sm font-semibold text-platinum-200 mb-2">UAE Price Monitoring</h4>
                  <p className="text-xs text-platinum-400 mb-3">{priceTrackingPlatform.purpose}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-xs"><span className="text-platinum-400">Items Tracked:</span> <span className="text-platinum-200">{priceTrackingPlatform.itemsTracked}</span></div>
                    <div className="text-xs"><span className="text-platinum-400">Retail Outlets:</span> <span className="text-platinum-200">{priceTrackingPlatform.retailOutlets}</span></div>
                    <div className="text-xs"><span className="text-platinum-400">Launch Date:</span> <span className="text-platinum-200">{priceTrackingPlatform.launchDate}</span></div>
                    <div className="text-xs"><span className="text-platinum-400">Initiative By:</span> <span className="text-platinum-200">{priceTrackingPlatform.initiativeBy}</span></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border border-info/50 bg-info/10 p-4 glass-panel"
          >
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-info" />
              <div className="flex-1">
                <h3 className="font-semibold text-info">Compliance Advisory</h3>
                <p className="text-sm text-platinum-400">
                  All Facebook pages operated by UAE businesses must comply with TRA regulations,
                  maintain accurate business licensing, and adhere to content guidelines.
                  Non-compliance may result in page removal and financial penalties.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}