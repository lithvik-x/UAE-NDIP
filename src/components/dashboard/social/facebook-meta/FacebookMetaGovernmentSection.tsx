'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { Building, Users, ExternalLink, Shield, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  federalGovernmentPages,
  policeFacebookPages,
  facebookMetaData,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaGovernmentSection() {
  const { governmentAccounts } = facebookMetaData

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Government Facebook Pages"
        description="Official UAE government and police presence on Facebook"
      >
        <div className="space-y-6">
          {/* Government Accounts Overview */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-info" />
                Government Accounts Overview
              </CardTitle>
              <CardDescription>Official UAE government Facebook presence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {governmentAccounts?.slice(0, 6).map((account, idx) => (
                  <motion.a
                    key={idx}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50 hover:border-info/50 transition-colors"
                  >
                    <Building className="h-5 w-5 text-info flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-platinum-200 truncate">{account.handle}</span>
                        {account.verified && (
                          <Badge variant="outline" className="text-info border-info/50 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-platinum-400">
                        {((account.followers ?? 0) / 1000000).toFixed(1)}M followers
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-info">
                        <ExternalLink className="h-3 w-3" />
                        <span>View Page</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Federal Government Pages */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-gold" />
                Federal Government Pages
              </CardTitle>
              <CardDescription>Ministry and federal agency Facebook pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {federalGovernmentPages.map((page, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-gold" />
                      <span className="text-sm font-medium text-platinum-200">{page.entity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          page.credibility === 'Very High' ? 'border-emerald-500/50 text-emerald-400' :
                          page.credibility === 'High' ? 'border-info/50 text-info' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {page.credibility}
                      </Badge>
                      <span className="text-sm text-platinum-400">
                        {page.likes >= 1000000 ? `${(page.likes / 1000000).toFixed(1)}M` : `${(page.likes / 1000).toFixed(0)}K`}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Police Facebook Pages */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose" />
                Police & Security Pages
              </CardTitle>
              <CardDescription>Law enforcement Facebook presence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {policeFacebookPages.map((page, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="h-4 w-4 text-rose" />
                      <span className="text-sm font-medium text-platinum-200">{page.entity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          page.credibility === 'Very High' ? 'border-emerald-500/50 text-emerald-400' :
                          page.credibility === 'High' ? 'border-info/50 text-info' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {page.credibility}
                      </Badge>
                      <span className="text-sm text-platinum-400">
                        {page.likes >= 1000000 ? `${(page.likes / 1000000).toFixed(1)}M` : `${(page.likes / 1000).toFixed(0)}K`}
                      </span>
                    </div>
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