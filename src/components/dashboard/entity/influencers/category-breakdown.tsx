'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  BarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import type { InfluencerProfile } from '@/lib/data/entity/influencers-data'

interface CategoryBreakdownProps {
  beautyCosmeticsInfluencers: InfluencerProfile[]
  foodMegaInfluencers: InfluencerProfile[]
  foodMicroInfluencers: InfluencerProfile[]
  travelTourismInfluencers: InfluencerProfile[]
  financialInfluencers: InfluencerProfile[]
  youtubeTopUaeCreators: InfluencerProfile[]
  categoryData: { name: string; value: number }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function CategoryBreakdown({
  beautyCosmeticsInfluencers,
  foodMegaInfluencers,
  foodMicroInfluencers,
  travelTourismInfluencers,
  financialInfluencers,
  youtubeTopUaeCreators,
  categoryData,
}: CategoryBreakdownProps) {
  const getFollowerDisplay = (inf: InfluencerProfile) => {
    const followers = inf.followers
    if (typeof followers === 'number') {
      if (followers >= 1000000) return `${(followers / 1000000).toFixed(1)}M`
      if (followers >= 1000) return `${(followers / 1000).toFixed(0)}K`
      return followers.toString()
    }
    return followers || 'N/A'
  }

  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical': return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'High': return <Badge variant="warning" className="text-xs">High</Badge>
      case 'Medium-High': return <Badge variant="default" className="text-xs bg-cyan-500 text-white">Medium-High</Badge>
      case 'Medium': return <Badge variant="secondary" className="text-xs">Medium</Badge>
      case 'Low/Suppressed': return <Badge variant="destructive" className="text-xs">Low/Suppressed</Badge>
      default: return <Badge variant="secondary" className="text-xs">{relevance}</Badge>
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Beauty & Cosmetics */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Beauty &amp; Cosmetics Influencers</CardTitle>
            <CardDescription>{beautyCosmeticsInfluencers.length} influencers tracked</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Platform</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Followers</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">UAE Relevance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beautyCosmeticsInfluencers.slice(0, 8).map((inf) => (
                  <TableRow key={inf.id} className="border-b border-platinum-100/50">
                    <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</TableCell>
                    <TableCell className="text-sm text-platinum-500-600">{(inf.platform || []).join(', ')}</TableCell>
                    <TableCell className="font-bold text-navy-500-900 dark:text-platinum-500-100">{getFollowerDisplay(inf)}</TableCell>
                    <TableCell>{getRelevanceBadge(inf.uaeRelevance)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Food & Dining */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Food &amp; Dining Influencers</CardTitle>
            <CardDescription>Restaurant reviewers, food critics, culinary creators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {foodMegaInfluencers.map((inf) => (
                <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                    <p className="text-xs text-platinum-500-500">{inf.platform.join(', ')} | {inf.contentFocus?.join(', ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gold-700">{getFollowerDisplay(inf)}</p>
                    <p className="text-xs text-emerald-600">+ {inf.notableClients?.join(', ')}</p>
                  </div>
                </div>
              ))}
              {foodMicroInfluencers.map((inf) => (
                <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                    <p className="text-xs text-platinum-500-500">{inf.notes?.join(' | ')}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Micro</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Travel & Tourism */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Travel &amp; Tourism Influencers</CardTitle>
            <CardDescription>{travelTourismInfluencers.length} influencers tracked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {travelTourismInfluencers.slice(0, 6).map((inf) => (
                <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                    <p className="text-xs text-platinum-500-500">{inf.notes?.join(' | ')}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">{(inf.platform || []).join(', ')}</Badge>
                    {inf.followersExact && <p className="text-xs font-bold text-gold-700 mt-1">{getFollowerDisplay(inf)}</p>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Financial Influencers */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Financial Influencers</CardTitle>
            <CardDescription>Licensed financial content creators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {financialInfluencers.map((inf) => (
                <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                    <p className="text-xs text-platinum-500-500">{inf.handle} | {inf.notes?.join(' | ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gold-700">{getFollowerDisplay(inf)}</p>
                    <Badge variant="success" className="text-xs mt-1">Licensed</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* YouTube Top Creators */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Top UAE YouTube Creators</CardTitle>
            <CardDescription>{youtubeTopUaeCreators.length} creators tracked</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Platform</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Category</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Notes</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">UAE Relevance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {youtubeTopUaeCreators.map((inf) => (
                  <TableRow key={inf.id} className="border-b border-platinum-100/50">
                    <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</TableCell>
                    <TableCell className="text-sm text-platinum-500-600">{(inf.platform || []).join(', ')}</TableCell>
                    <TableCell><Badge variant="outline" className="text-xs">{(inf.category || []).join(', ')}</Badge></TableCell>
                    <TableCell className="text-sm text-platinum-500-500">{inf.notes?.join(', ')}</TableCell>
                    <TableCell>{getRelevanceBadge(inf.uaeRelevance)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Category Distribution Chart */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Category Distribution</CardTitle>
            <CardDescription>Breakdown of tracked influencers by primary content category</CardDescription>
          </CardHeader>
          <CardContent>
            {categoryData.length > 0 ? (
              <BarChart
                data={categoryData}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.indigo }]}
                height={300}
                showGrid={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500-500">No category data</div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
