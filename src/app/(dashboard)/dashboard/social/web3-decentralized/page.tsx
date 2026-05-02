// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Blocks, Wallet, Globe, Shield, TrendingUp, AlertTriangle, Lock, Zap } from 'lucide-react'
import { useWeb3IntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function Web3DecentralizedPage() {
  const { data } = useWeb3IntelligenceData()
  const { metrics, nftData, defiData, chainActivity } = data || { metrics: {}, nftData: [], defiData: {}, chainActivity: [] }

  const nftDataArr = nftData?.slice(0, 6) || [
    { collection: 'Dubai NFT Pass', volume: 2400000, owners: 1200, floor: 1800 },
    { collection: 'UAE Genesis', volume: 1850000, owners: 850, floor: 2200 },
    { collection: 'Desert Diamonds', volume: 1200000, owners: 620, floor: 950 },
    { collection: 'CamelTON', volume: 890000, owners: 4800, floor: 120 },
    { collection: 'Emirates AI Art', volume: 650000, owners: 320, floor: 2000 },
  ]

  const chainData = chainActivity?.slice(0, 6) || [
    { chain: 'Ethereum', txns: 45000, volume: 120000000, dominance: 45 },
    { chain: 'BSC', txns: 38000, volume: 85000000, dominance: 28 },
    { chain: 'Solana', txns: 28000, volume: 42000000, dominance: 15 },
    { chain: 'Polygon', txns: 15000, volume: 22000000, dominance: 8 },
    { chain: 'Arbitrum', txns: 12000, volume: 18000000, dominance: 4 },
  ]

  const platformData = [
    { name: 'NFTs', share: 42, color: CHART_COLORS.purple },
    { name: 'DeFi', share: 31, color: CHART_COLORS.emerald },
    { name: 'GameFi', share: 18, color: CHART_COLORS.rose },
    { name: 'DAO/Governance', share: 9, color: CHART_COLORS.info },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-cyan-500/20 to-teal-600/20 text-cyan-400 border-cyan-500/50">
            <Blocks className="w-3 h-3 mr-1" />
            WEB3 INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Web3 & Decentralized
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Blockchain intelligence — NFT marketplaces, DeFi protocols, chain activity, and crypto sentiment</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="NFT Volume" value={metrics?.nftVolume || '$4.2M'} icon={<Blocks className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="DeFi TVL" value={metrics?.defiTVL || '$180M'} icon={<Wallet className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Active Chains" value={metrics?.chains || 12} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Daily Txns" value={metrics?.transactions || '138K'} icon={<Zap className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Regulatory Risk" value={metrics?.regRisk || 'HIGH'} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" status="warning" />
        <MetricCard title="Privacy Score" value={metrics?.privacyScore || '68%'} icon={<Lock className="h-6 w-6" />} gradient="sky" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nft">NFT Markets</TabsTrigger>
          <TabsTrigger value="defi">DeFi Protocols</TabsTrigger>
          <TabsTrigger value="chains">Chain Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Web3 Intelligence Overview" description="Decentralized ecosystem activity in UAE">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Blocks className="h-5 w-5 text-cyan-500" />Sector Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={platformData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-emerald-500" />Chain Activity</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={chainData.slice(0,4)} xAxisKey="chain" bars={[{ dataKey: 'txns', name: 'Transactions (K)', color: CHART_COLORS.teal }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="nft" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="NFT Marketplaces" description="Top NFT collections and trading activity">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {nftDataArr.map((n: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center gap-3">
                        <Blocks className="h-4 w-4 text-cyan-400" />
                        <span className="font-medium text-platinum-200">{n.collection}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-400">
                        <span>{n.owners?.toLocaleString?.()} owners</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">${(n.volume/1000000).toFixed(1)}M</Badge>
                        <span className="text-xs">Floor: {n.floor}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="defi" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="DeFi Protocols" description="Decentralized finance ecosystem">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { protocol: 'Major DEXs', tvl: '$85M', volume24h: '$12M', apr: '8-15%' },
                  { protocol: 'Lending Protocols', tvl: '$52M', volume24h: '$8M', apr: '4-12%' },
                  { protocol: 'Yield Aggregators', tvl: '$28M', volume24h: '$5M', apr: '12-25%' },
                  { protocol: 'Derivatives', tvl: '$15M', volume24h: '$18M', apr: '20-40%' },
                ].map((d: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-5 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Wallet className="h-5 w-5 text-emerald-500" />
                      <h4 className="font-medium text-platinum-200">{d.protocol}</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-platinum-400">TVL</span><span className="text-platinum-200 font-medium">{d.tvl}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">24h Vol</span><span className="text-platinum-200 font-medium">{d.volume24h}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Avg APR</span><Badge variant="outline" className="border-emerald-500/50 text-emerald-500 text-xs">{d.apr}</Badge></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="chains" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Blockchain Activity" description="Transaction volume by chain">
              <div className="space-y-4">
                {chainData.map((c: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{c.chain}</span>
                      <div className="flex items-center gap-3 text-sm text-platinum-400">
                        <span>{(c.txns/1000).toFixed(0)}K txns</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">${(c.volume/1000000).toFixed(0)}M</Badge>
                        <span>{c.dominance}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${c.dominance}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
