// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import { useCyberThreatData } from '@/lib/data-loader'
import { Shield, Lock, Wifi, Bug, Database, Server, TrendingUp, Activity, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { ThreatOverviewSection } from '@/components/dashboard/crisis/cyber-threat/ThreatOverviewSection'
import { ThreatActorsSection } from '@/components/dashboard/crisis/cyber-threat/ThreatActorsSection'
import { SectorVulnerabilitiesSection } from '@/components/dashboard/crisis/cyber-threat/SectorVulnerabilitiesSection'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

export default function CyberThreatPage() {
  const { data } = useCyberThreatData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Cybersecurity Threats data...</div>
      </div>
    )
  }

  const { executiveSummary, attackVolume, threatActors, sectorVulnerabilities, iranUaeConflict } = data

  const threatOverview = executiveSummary?.threatOverview || {
    dailyAttacks: '500,000-800,000',
    attackIncrease: 'Tripled since Iran war began',
    confirmedIncidents2026: 128,
    entitiesTargetedMarch2025: 634,
    ransomwareVictimsTracked: 145,
    aptGroupsOperating: '40+',
    countriesTargetingUAE: 20,
    organizationsHostile: '40+'
  }

  const keyStats = executiveSummary?.keyStatistics || []

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <ShieldAlert className="w-3 h-3 mr-1" />
            CYBER THREAT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Cyber Threat Intelligence
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            State-sponsored attacks, ransomware, Bybit hack, Handala, AI-powered threats
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-purple-500/50 text-purple hover:bg-purple-500/10">
            <Lock className="h-4 w-4" />
            SOC Dashboard
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Incident Response
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily Cyberattacks"
          value={threatOverview.dailyAttacks || '500K-800K'}
          icon={<Wifi className="h-6 w-6" />}
          gradient="purple"
          status="error"
        />
        <MetricCard
          title="2026 Incidents"
          value={String(threatOverview.confirmedIncidents2026 || 128)}
          icon={<Bug className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Bybit Hack Loss"
          value="$1.5B"
          icon={<Database className="h-6 w-6" />}
          gradient="orange"
          status="error"
        />
        <MetricCard
          title="State-Sponsored"
          value={threatOverview.aptGroupsOperating || '40+'}
          icon={<Server className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      {/* Additional Key Statistics Row */}
      <motion.div
        variants={fadeInUp}
        className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8"
      >
        {keyStats.slice(0, 8).map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * idx }}
            className="rounded-lg glass-card border border-platinum-700/50 p-3 text-center hover:border-violet-500/30 transition-all"
          >
            <p className="text-xs text-platinum-400 truncate" title={stat.metric}>{stat.metric}</p>
            <p className="text-lg font-bold text-purple">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="actors">Threat Actors</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="ransomware">Ransomware</TabsTrigger>
          <TabsTrigger value="phishing">Phishing</TabsTrigger>
          <TabsTrigger value="workforce">Workforce</TabsTrigger>
          <TabsTrigger value="darkweb">Dark Web</TabsTrigger>
          <TabsTrigger value="emerging">Emerging</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="laws">Laws</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <ThreatOverviewSection
            data={{
              ...executiveSummary,
              ...attackVolume,
              threatOverview: executiveSummary?.threatOverview,
              keyStatistics: executiveSummary?.keyStatistics,
              sentimentAnalysis: executiveSummary?.sentimentAnalysis,
              dailyStatistics: attackVolume?.dailyStatistics,
              attackComposition: attackVolume?.attackComposition,
              organizedThreatDistribution: attackVolume?.organizedThreatDistribution,
              officialQuote: attackVolume?.officialQuote,
            }}
          />
        </TabsContent>

        {/* Threat Actors Tab */}
        <TabsContent value="actors" className="space-y-6">
          <ThreatActorsSection
            data={{
              threatActors,
              iranUaeConflict,
            }}
          />
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <SectorVulnerabilitiesSection data={sectorVulnerabilities} />
        </TabsContent>

        {/* Ransomware Tab */}
        <TabsContent value="ransomware" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <Tabs defaultValue="stats" className="space-y-6">
              <TabsList className="glass-panel bg-glass-surface/50 p-1">
                <TabsTrigger value="stats">Statistics</TabsTrigger>
                <TabsTrigger value="groups">Active Groups</TabsTrigger>
              </TabsList>

              <TabsContent value="stats" className="space-y-4">
                <div className="rounded-lg glass-card border border-rose-500/30 p-6">
                  <h3 className="text-lg font-semibold text-platinum-200 mb-4">Ransomware Statistics (24 months)</h3>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                      <p className="text-3xl font-bold text-rose">267%</p>
                      <p className="text-xs text-platinum-400">Increase (24mo)</p>
                    </div>
                    <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                      <p className="text-3xl font-bold text-rose">145</p>
                      <p className="text-xs text-platinum-400">Victims Tracked</p>
                    </div>
                    <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                      <p className="text-3xl font-bold text-rose">44</p>
                      <p className="text-xs text-platinum-400">2024 Incidents</p>
                    </div>
                    <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                      <p className="text-3xl font-bold text-rose">78%</p>
                      <p className="text-xs text-platinum-400">Orgs Affected (2020)</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                <div className="rounded-lg glass-card border border-purple-500/30 p-6">
                  <h3 className="text-lg font-semibold text-platinum-200 mb-4">Active Ransomware Groups</h3>
                  <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {data.ransomwareLandscape?.statistics?.length > 0 ? (
                      threatActors?.ransomwareGroups?.map((group, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg border border-platinum-700/50">
                          <span className="text-sm font-medium text-platinum-200">{group.group}</span>
                          <div className={`h-2 w-2 rounded-full ${group.active ? 'bg-rose-500' : 'bg-platinum-500'}`} />
                        </div>
                      ))
                    ) : (
                      <>
                        {['Lockbit5', 'Lockbit3', 'Handala', 'Daixin', 'AvosLocker', 'Gunra', 'Clop', 'Medusa'].map((group, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg border border-platinum-700/50">
                            <span className="text-sm font-medium text-platinum-200">{group}</span>
                            <div className="h-2 w-2 rounded-full bg-rose-500" />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </TabsContent>

        {/* Phishing Tab */}
        <TabsContent value="phishing" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-rose-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Phishing Statistics</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="text-3xl font-bold text-rose">75%</p>
                  <p className="text-xs text-platinum-400">UAE Breaches from Phishing</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="text-3xl font-bold text-rose">3.4B</p>
                  <p className="text-xs text-platinum-400">Global Daily Messages</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="text-3xl font-bold text-rose">90%</p>
                  <p className="text-xs text-platinum-400">AI-Powered Breaches</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-platinum-200 mt-8 mb-4">Major Scam Types in UAE (2026)</h3>
              <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                {['Fake concert tickets', 'Bogus residency services', 'Domestic worker recruitment', 'Unauthorized insurance', 'Seized vehicle sales', 'Parcel tracking scams', 'Illegal investment schemes', 'Fake real estate', 'Job seeker phishing'].map((scam, idx) => (
                  <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700/50 text-center">
                    <p className="text-sm font-medium text-platinum-200">{scam}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Workforce Tab */}
        <TabsContent value="workforce" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-purple-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Workforce & Talent Gap</h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-3xl font-bold text-purple">40%</p>
                  <p className="text-xs text-platinum-400">Orgs Lacking Skilled Staff</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-3xl font-bold text-purple">90%</p>
                  <p className="text-xs text-platinum-400">Tech Cos Reporting Shortage</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-3xl font-bold text-purple">47%</p>
                  <p className="text-xs text-platinum-400">Struggling to Prioritize</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-cyan-500/30">
                  <p className="text-3xl font-bold text-cyan">+40%</p>
                  <p className="text-xs text-platinum-400">Home Network Attacks</p>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Dark Web Tab */}
        <TabsContent value="darkweb" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-purple-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Dark Web Economy</h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-lg font-bold text-purple">$257-$50K</p>
                  <p className="text-xs text-platinum-400">Per Database</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="text-lg font-bold text-rose">$22.80</p>
                  <p className="text-xs text-platinum-400">UAE InvestBank Data</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-amber-500/30">
                  <p className="text-lg font-bold text-amber">$17.3M</p>
                  <p className="text-xs text-platinum-400">UAE Personal Data (NordVPN)</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-cyan-500/30">
                  <p className="text-lg font-bold text-cyan">~200K</p>
                  <p className="text-xs text-platinum-400">Dubai Property Owners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Emerging Tab */}
        <TabsContent value="emerging" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-purple-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Emerging Threats</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="font-medium text-rose">Automated Malware Mutation</p>
                  <p className="text-xs text-platinum-400 mt-1">Real-time behavior adaptation</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-amber-500/30">
                  <p className="font-medium text-amber">Deepfake Voice Fraud</p>
                  <p className="text-xs text-platinum-400 mt-1">$35M loss recorded</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-orange-500/30">
                  <p className="font-medium text-orange">AI-Generated Phishing</p>
                  <p className="text-xs text-platinum-400 mt-1">90% of breaches</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="font-medium text-purple">WormGPT for Attacks</p>
                  <p className="text-xs text-platinum-400 mt-1">Iranian groups using</p>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Insurance Tab */}
        <TabsContent value="insurance" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-purple-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Cyber Insurance Market</h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple">$83M</p>
                  <p className="text-xs text-platinum-400">2026 Market</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple">$350M</p>
                  <p className="text-xs text-platinum-400">2034 Projection</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="text-2xl font-bold text-purple">17.29%</p>
                  <p className="text-xs text-platinum-400">CAGR</p>
                </div>
                <div className="text-center p-4 bg-platinum-800/50 rounded-lg border border-cyan-500/30">
                  <p className="text-2xl font-bold text-cyan">40%</p>
                  <p className="text-xs text-platinum-400">MENA Share</p>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Laws Tab */}
        <TabsContent value="laws" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <div className="rounded-lg glass-card border border-purple-500/30 p-6">
              <h3 className="text-lg font-semibold text-platinum-200 mb-4">Federal Law No. 34 of 2021 - Cybercrime Penalties</h3>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-purple-500/30">
                  <p className="font-medium text-purple mb-2">General Hacking</p>
                  <p className="text-sm text-platinum-400">Fine: 100,000-300,000 AED</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="font-medium text-rose mb-2">Causing Damage</p>
                  <p className="text-sm text-platinum-400">6mo+ imprisonment + fine</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-rose-500/30">
                  <p className="font-medium text-rose mb-2">Government Systems</p>
                  <p className="text-sm text-platinum-400">5-7 years imprisonment</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-orange-500/30">
                  <p className="font-medium text-orange mb-2">Cyber Extortion</p>
                  <p className="text-sm text-platinum-400">Up to 10 years imprisonment</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-platinum-200 mt-8 mb-4">Defense Capabilities</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {['24/7 Security Operations Centers', 'Real-time traffic analysis', 'Multilayer AI defense', 'International cooperation (Israel, US)', 'National response team'].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-platinum-800/50 rounded-lg border border-platinum-700/50">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-platinum-200">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}