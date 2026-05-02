
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Instagram,
  Image,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Star,
  Flag,
  Hash,
  AlertTriangle,
  DollarSign,
} from 'lucide-react'
import { useInstagramIntelligenceData } from '@/lib/data-loader'
import {
  InstagramOverviewSection,
  InstagramDemographicsSection,
  InstagramInfluencersSection,
  InstagramRegulatorySection,
  InstagramMarketSection,
  InstagramIncidentsSection,
} from '@/components/dashboard/social/instagram'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function InstagramVisualPlatformsPage() {
  const { data } = useInstagramIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400 flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          Loading Instagram data...
        </div>
      </motion.div>
    )
  }

  const { metrics } = data

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30">
              <Instagram className="h-6 w-6 text-purple-400" />
            </div>
            <Badge variant="default" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
              VISUAL PLATFORMS
            </Badge>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Instagram & Visual Platforms
            </span>
          </h1>
          <p className="text-platinum-400 max-w-2xl">
            Comprehensive Instagram intelligence: {metrics.users ? `${(metrics.users / 1000000).toFixed(2)}M` : '8.36M'} UAE users, influencer ecosystem,
            regulatory framework, coordinated behavior incidents, and market analysis.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-glass-border bg-glass-surface/50 hover:bg-glass-surface text-platinum-500">
            <Image className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white gap-2 shadow-lg shadow-purple-500/25">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Active Users"
          value={metrics.users ? `${(metrics.users / 1000000).toFixed(2)}M` : '8.36M'}
          trend="up"
          icon={<Users className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Penetration"
          value={metrics.penetration || 77.7}
          unit="%"
          trend="up"
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Bot Activity"
          value={data.botActivity?.estimatedBotPercent || 38}
          unit="%"
          trend="up"
          icon={<Shield className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Gov Requests"
          value={data.censorship?.governmentRequests || 678}
          icon={<Flag className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Influencers"
          value="122K"
          icon={<Star className="h-6 w-6" />}
          gradient="emerald"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel backdrop-blur-xl bg-glass-surface/50 border border-glass-border p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-glass-surface">Overview</TabsTrigger>
          <TabsTrigger value="demographics" className="data-[state=active]:bg-glass-surface">Demographics</TabsTrigger>
          <TabsTrigger value="influencers" className="data-[state=active]:bg-glass-surface">Influencers</TabsTrigger>
          <TabsTrigger value="regulatory" className="data-[state=active]:bg-glass-surface">Regulatory</TabsTrigger>
          <TabsTrigger value="market" className="data-[state=active]:bg-glass-surface">Market</TabsTrigger>
          <TabsTrigger value="incidents" className="data-[state=active]:bg-glass-surface">Incidents</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <InstagramOverviewSection data={data} />
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <InstagramDemographicsSection data={data} />
          </TabsContent>

          <TabsContent value="influencers" className="space-y-6">
            <InstagramInfluencersSection data={data} />
          </TabsContent>

          <TabsContent value="regulatory" className="space-y-6">
            <InstagramRegulatorySection data={data} />
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <InstagramMarketSection data={data} />
          </TabsContent>

          <TabsContent value="incidents" className="space-y-6">
            <InstagramIncidentsSection data={data} />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}
