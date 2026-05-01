// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield, AlertTriangle, AlertCircle, CheckCircle, XCircle,
  TrendingUp, Eye, Lock, Globe, Users, FileText, Database,
  Clock, Activity, Zap, Target, Award, BookOpen, Link2,
  ChevronRight, Search, MessageSquare, Radio, Server, Bug,
} from 'lucide-react'
import { GlassPanel } from '@/components/ui/glass-panel'
import { MetricCard } from '@/components/ui/metric-card'
import { Badge } from '@/components/ui/badge'
import { Tabs } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PieChart, BarChart, AreaChart } from '@/components/ui/chart-library'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card'
import {
  communicationCrisisData,
} from '@/lib/data/crisis/communication-crisis-data'

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function CommunicationCrisisPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Shield className="w-4 h-4" /> },
    { id: 'misinformation', label: 'Misinformation', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'deepfake', label: 'Deepfakes', icon: <Target className="w-4 h-4" /> },
    { id: 'disinformation', label: 'Disinformation', icon: <Globe className="w-4 h-4" /> },
    { id: 'suppression', label: 'Suppression', icon: <Lock className="w-4 h-4" /> },
    { id: 'contradictions', label: 'Contradictions', icon: <XCircle className="w-4 h-4" /> },
    { id: 'whistleblower', label: 'Whistleblower', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'cyber', label: 'Cyber', icon: <Bug className="w-4 h-4" /> },
  ]

  const metrics = communicationCrisisData.metrics
  const metricCards = [
    { title: 'Risk Level', value: metrics.riskLevel, change: '', trend: 'up', icon: <AlertCircle className="w-5 h-5" />, color: 'red' },
    { title: 'State Threats', value: metrics.stateSponsoredThreats, change: '', trend: 'up', icon: <Target className="w-5 h-5" />, color: 'orange' },
    { title: 'DDoS Increase', value: metrics.ddosIncrease, change: '', trend: 'up', icon: <Shield className="w-5 h-5" />, color: 'green' },
    { title: 'Blocked Platforms', value: metrics.blockedPlatforms.toString(), change: '', trend: 'up', icon: <Lock className="w-5 h-5" />, color: 'purple' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 font-rajdhani">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[1800px] mx-auto space-y-6">
        <motion.div variants={fadeInUp} className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Radio className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-tight">Communication Crisis Intelligence</h1>
            </div>
            <p className="text-slate-400 text-lg">UAE Digital Media Suppression, Disinformation & Cyber Surveillance Analysis</p>
          </div>
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />Updated: May 2026
          </Badge>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricCards.map((metric, index) => (
            <motion.div key={metric.title} variants={fadeInUp} custom={index} whileHover="hover" initial="rest" animate="rest">
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-2" />
        </motion.div>

        <motion.div key={activeTab} initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'misinformation' && <MisinformationTab />}
          {activeTab === 'deepfake' && <DeepfakeTab />}
          {activeTab === 'disinformation' && <DisinformationTab />}
          {activeTab === 'suppression' && <SuppressionTab />}
          {activeTab === 'contradictions' && <ContradictionsTab />}
          {activeTab === 'whistleblower' && <WhistleblowerTab />}
          {activeTab === 'cyber' && <CyberTab />}
        </motion.div>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Entity Registry</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            { (communicationCrisisData.entityRegistry || []).map((entity, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
                <p className="text-cyan-400 text-xs font-medium">{entity.title}</p>
                <p className="text-white text-sm mt-1">{entity.name}</p>
                <p className="text-slate-500 text-xs mt-1">{entity.role}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Key Terms</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            { (communicationCrisisData.keyTerms || []).map((term, idx) => (
              <Badge key={idx} variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{term.term}</Badge>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Sources ({communicationCrisisData.sourceUrls.length})</h3>
          </div>
          <ScrollArea className="h-[200px]">
            <div className="space-y-2">
              { (communicationCrisisData.sourceUrls || []).map((source, idx) => (
                <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-white text-sm">{source.title}</p>
                      <p className="text-slate-500 text-xs">{source.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{source.type}</Badge>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </div>
                </a>
              ))}
            </div>
          </ScrollArea>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-4 rounded-xl border border-slate-700/50">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <div className="flex items-center gap-4">
              <span>Document ID: {communicationCrisisData.documentInfo?.documentId || 'N/A'}</span>
              <span>Version: {communicationCrisisData.documentInfo?.version || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Queries: {communicationCrisisData.queryPatterns?.length || 0}</span>
              <span>Entities: {communicationCrisisData.entityRegistry?.length || 0}</span>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  )
}

function OverviewTab() {
  const { metrics, focusAreas, queryPatterns, governmentCounterMeasures, legalPenalties, sentimentByCategory } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-cyan-400" />Executive Summary
        </h2>
        <p className="text-slate-300 leading-relaxed">
          The UAE maintains comprehensive control over digital communications through layered legal frameworks, technological infrastructure, and strategic disinformation campaigns. The government systematically monitors, restricts, and manipulates digital media channels to maintain national security and suppress dissent. Key mechanisms include targeted deepfake detection, aggressive VPN restrictions, encrypted messaging app interference, and coordinated counter-misinformation operations.
        </p>
      </GlassPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-xl font-semibold text-white mb-4">Crisis Focus Areas</h3>
          <div className="space-y-3">
            {focusAreas?.map((area, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-cyan-400 font-medium">{area.title}</h4>
                  <Badge variant="secondary">{area.severity}</Badge>
                </div>
                <p className="text-slate-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-xl font-semibold text-white mb-4">Query Patterns</h3>
          <BarChart data={(queryPatterns || []).map(q => ({ name: `Query ${q.id}`, value: 1 }))} bars={[{ dataKey: 'value', name: 'Query Count', color: CHART_COLORS.teal }]} xAxisKey="name" className="h-[300px]" />
        </GlassPanel>
      </div>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Government Counter Measures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {governmentCounterMeasures?.map((measure, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover="hover" initial="rest" animate="rest" className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{measure.agency}</h4>
                  <p className="text-slate-500 text-sm">{measure.role}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{measure.keyActions}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Legal Penalties Framework</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Law</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Penalty</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Source</th>
              </tr>
            </thead>
            <tbody>
              {legalPenalties?.map((penalty, idx) => (
                <tr key={idx} className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">{penalty.law}</td>
                  <td className="py-3 px-4 text-red-400">{penalty.penalty}</td>
                  <td className="py-3 px-4 text-slate-400">{penalty.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Sentiment Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PieChart data={(sentimentByCategory || []).map((s, i) => ({ name: s.category, value: 1, color: [CHART_COLORS.red, CHART_COLORS.orange, CHART_COLORS.green, CHART_COLORS.teal, CHART_COLORS.purple][i % 5] }))} className="h-[250px]" />
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h4 className="text-white font-medium">Risk Level</h4>
            </div>
            <p className="text-3xl font-bold text-red-400">{metrics?.riskLevel}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-orange-400" />
              <h4 className="text-white font-medium">State Threats</h4>
            </div>
            <p className="text-3xl font-bold text-orange-400">{metrics?.stateSponsoredThreats}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <h4 className="text-white font-medium">DDoS Increase</h4>
            </div>
            <p className="text-3xl font-bold text-cyan-400">{metrics?.ddosIncrease}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-purple-400" />
              <h4 className="text-white font-medium">Blocked</h4>
            </div>
            <p className="text-3xl font-bold text-purple-400">{metrics?.blockedPlatforms}</p>
          </div>
        </div>
      </GlassPanel>
    </div>
  )
}

function MisinformationTab() {
  const { misinformationCases, misinformationQuotes } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-cyan-400" />Misinformation Cases
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {misinformationCases?.map((caseItem, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{caseItem.falseClaim}</h4>
                <Badge variant="destructive">{caseItem.status}</Badge>
              </div>
              <p className="text-slate-400 text-sm mb-3">Origin: {caseItem.origin}</p>
              <p className="text-slate-400 text-sm">Response: {caseItem.governmentResponse}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Key Quotes</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {misinformationQuotes?.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
            >
              <p className="text-sm text-platinum-200 italic mb-2">"{quote.quote}"</p>
              <p className="text-xs text-platinum-400">
                <span className="text-cyan-400">{quote.source}</span> • {quote.date}
              </p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}

function DeepfakeTab() {
  const { deepfakeIncidents, deepfakeThreatAssessment, deepfakeCounterMeasures, deepfakeQuotes } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-cyan-400" />Deepfake Threat Assessment
        </h2>
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 mb-6">
          <p className="text-white">{deepfakeThreatAssessment?.assessment}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {deepfakeIncidents?.map((incident, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{incident.incident}</h4>
              </div>
              <p className="text-slate-400 text-sm mb-2">Target: {incident.target}</p>
              <p className="text-slate-400 text-sm">{incident.details}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Counter Measures</h3>
        <div className="space-y-3">
          {deepfakeCounterMeasures?.map((cm, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-platinum-200 text-sm">{cm.measure}</p>
                <p className="text-xs text-platinum-400">{cm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Expert Warnings</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {deepfakeQuotes?.map((quote, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
            >
              <p className="text-sm text-platinum-200 italic mb-2">"{quote.quote}"</p>
              <p className="text-xs text-cyan-400">{quote.source}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}

function DisinformationTab() {
  const { alpServicesContract, qatarHackDetail, influenceMethods, middleEastInfluenceContext, disinformationKeyQuote } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" />Disinformation as Strategic Actor
        </h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          The UAE employs sophisticated disinformation campaigns targeting regional rivals, dissidents, and international audiences. State-aligned bots and trolls amplify pro-UAE narratives while attacking critics across multiple platforms.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">ALP Services Contract</h3>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Company</span>
                <span className="text-white">{alpServicesContract?.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Client</span>
                <span className="text-white">{alpServicesContract?.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Contract Value</span>
                <span className="text-cyan-400">{alpServicesContract?.contractValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Geographic Scope</span>
                <span className="text-white">{alpServicesContract?.geographicScope}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Methods</span>
                <span className="text-white">{alpServicesContract?.methods}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Qatar Hack 2017</h3>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Date of Hack</span>
                <span className="text-white">{qatarHackDetail?.dateOfHack}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target</span>
                <span className="text-white">{qatarHackDetail?.target}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Method</span>
                <span className="text-white">{qatarHackDetail?.method}</span>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <p className="text-xs text-platinum-300 mb-1">False Content</p>
                <p className="text-sm text-platinum-200">{qatarHackDetail?.falseContent}</p>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Influence Methods</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {influenceMethods?.map((method, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <h4 className="text-white font-medium mb-2">{method.method}</h4>
              <p className="text-slate-400 text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}

function SuppressionTab() {
  const { informationSuppressionLaws, socialMediaControls, platformTakedowns, arrestSuppressionCases, citizenshipRevocationCases, uae7Members } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-cyan-400" />Information Suppression
        </h2>
      </GlassPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Legal Framework</h3>
          <div className="space-y-3">
            {informationSuppressionLaws?.map((law, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
                <p className="text-white text-sm font-medium">{law.law || law.category}</p>
                <p className="text-slate-400 text-xs mt-1">{law.penalty || law.description}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Social Media Controls</h3>
          <div className="space-y-3">
            {socialMediaControls?.map((control, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm">{control.platform || control.control}</p>
                  <Badge variant="secondary">{control.status || control.level}</Badge>
                </div>
                <p className="text-slate-400 text-xs mt-1">{control.description || control.details}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Platform Takedowns</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Platform</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Requests</th>
                <th className="text-left py-3 px-4 text-cyan-400 font-medium">Compliance</th>
              </tr>
            </thead>
            <tbody>
              {platformTakedowns?.map((takedown, idx) => (
                <tr key={idx} className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white">{takedown.platform}</td>
                  <td className="py-3 px-4 text-orange-400">{takedown.requests}</td>
                  <td className="py-3 px-4 text-slate-400">{takedown.compliance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Arrest & Suppression Cases</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {arrestSuppressionCases?.map((arrest, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{arrest.category}</h4>
                <Badge variant="destructive">{arrest.number}</Badge>
              </div>
              <p className="text-slate-400 text-sm">{arrest.details}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Citizenship Revocation Cases</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {citizenshipRevocationCases?.map((caseItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">{caseItem.case}</Badge>
                <span className="text-xs text-platinum-400">{caseItem.year}</span>
              </div>
              <p className="text-sm text-platinum-300">{caseItem.details}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}

function ContradictionsTab() {
  const { iranStrikeDiscrepancies, iranConflictCasualties } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <XCircle className="w-6 h-6 text-cyan-400" />Official Contradictions
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Analysis of discrepancies between official UAE government statements and actions, evidence, or independent reporting. These contradictions reveal gaps between stated policies and implemented practices.
        </p>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Iran Strike Discrepancies</h3>
        <div className="space-y-4">
          {iranStrikeDiscrepancies?.map((entry, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{entry.location}</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Official Claim</p>
                  <p className="text-white text-sm">{entry.officialClaim}</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Evidence</p>
                  <p className="text-red-400 text-sm">{entry.evidence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Casualty Figures</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
          <pre className="text-slate-300 text-sm whitespace-pre-wrap">{JSON.stringify(iranConflictCasualties, null, 2)}</pre>
        </div>
      </GlassPanel>
    </div>
  )
}

function WhistleblowerTab() {
  const { andreGauthierCase, andreGauthierTimeline, andreGauthierQuotes, gazaAdministrationDenial } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-cyan-400" />Whistleblower Cases
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Documented cases of individuals who attempted to expose government surveillance, censorship, or digital rights violations, and the subsequent retaliation or failure of protection mechanisms.
        </p>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Andre Gauthier Case</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-slate-400">Status</span>
            <span className="text-white">{andreGauthierCase?.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Arrest Date</span>
            <span className="text-white">{andreGauthierCase?.arrestDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Charges</span>
            <span className="text-red-400">{andreGauthierCase?.charges}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Background</span>
            <span className="text-white">{andreGauthierCase?.background}</span>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
        <div className="relative mb-4">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700" />
          <div className="space-y-4">
            {andreGauthierTimeline?.map((event, idx) => (
              <div key={idx} className="relative flex items-start gap-4 pl-20">
                <div className="absolute left-2.5 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-950" />
                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30 flex-1">
                  <p className="text-cyan-400 text-sm font-medium">{event.date}</p>
                  <p className="text-white text-sm">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h4 className="text-lg font-semibold text-white mb-3">Key Quotes</h4>
        <div className="grid gap-3">
          {andreGauthierQuotes?.map((quote, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
              <p className="text-white text-sm italic mb-2">"{quote.quote}"</p>
              <p className="text-cyan-400 text-xs">{quote.source}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Gaza Administration Denial</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
          <pre className="text-slate-300 text-sm whitespace-pre-wrap">{JSON.stringify(gazaAdministrationDenial, null, 2)}</pre>
        </div>
      </GlassPanel>
    </div>
  )
}

function CyberTab() {
  const { ddosStats, ddosSectors, notableCyberAttacks, stateSponsoredThreat, cyberExpertQuote } = communicationCrisisData

  return (
    <div className="space-y-6">
      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Bug className="w-6 h-6 text-cyan-400" />Cyber Attack Statistics
        </h2>
      </GlassPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">DDoS Statistics</h3>
          <div className="space-y-4">
            {ddosStats?.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">{stat.metric}</span>
                  <span className="text-cyan-400 font-medium">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">State-Sponsored Threats</h3>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 mb-4">
            <div className="text-center">
              <p className="text-6xl font-bold text-rose-400">{stateSponsoredThreat?.percentage}</p>
              <p className="text-sm text-platinum-400 mt-2">of all cyber threats targeting UAE</p>
              <p className="text-xs text-platinum-500 mt-1">are state-sponsored</p>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/30">
            <p className="text-slate-400 text-sm">{stateSponsoredThreat?.description}</p>
          </div>
        </GlassPanel>
      </div>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Most Targeted Sectors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ddosSectors?.map((sector, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 text-center">
              <Server className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-medium">{sector.sector}</p>
              <p className="text-slate-500 text-sm">{sector.incidents}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Notable Cyber Attacks</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {notableCyberAttacks?.map((attack, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{attack.target}</h4>
                <Badge variant="destructive">{attack.year}</Badge>
              </div>
              <p className="text-slate-400 text-sm mb-2">{attack.method}</p>
              <p className="text-slate-500 text-xs">{attack.impact}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel variant="dark" className="p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-semibold text-white mb-4">Expert Quote</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
          <p className="text-white text-sm italic mb-2">"{cyberExpertQuote?.quote}"</p>
          <p className="text-cyan-400 text-xs">{cyberExpertQuote?.source}</p>
        </div>
      </GlassPanel>
    </div>
  )
}
