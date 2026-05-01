// Reddit Metrics Section - Key metrics display
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  Users,
  Globe,
  ThumbsDown,
  TrendingDown,
  HeartPulse,
  AlertTriangle,
  MessageSquare,
  Hash,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface RedditMetricsSectionProps {
  executionMetadata?: {
    dateExecuted: string
    queriesExecuted: number
    pagesFetched: number
    sourceTypes: string[]
    confidence: string
  }
  mentalHealthStats?: {
    statistic: string
    value: number | string
    source: string
  }[]
  keyStatistics?: {
    category: string
    metric: string
    value: string
    trend: string
  }[]
}

export function RedditMetricsSection({
  executionMetadata,
  mentalHealthStats = [],
  keyStatistics = [],
}: RedditMetricsSectionProps) {
  // Extract key metrics
  const salaryCuts = keyStatistics.find(s => s.metric === 'Salary cuts')
  const mentalHealth = mentalHealthStats.find(s => s.statistic.includes('mental health disorder'))
  const depressionUndiagnosed = mentalHealthStats.find(s => s.statistic.includes('undiagnosed'))

  const metrics = [
    {
      title: 'Queries Executed',
      value: executionMetadata?.queriesExecuted?.toString() || '35+',
      icon: <Hash className="h-5 w-5" />,
      gradient: 'denim',
      status: 'info' as const,
    },
    {
      title: 'Pages Analyzed',
      value: executionMetadata?.pagesFetched?.toString() || '25+',
      icon: <Globe className="h-5 w-5" />,
      gradient: 'indigo',
      status: 'info' as const,
    },
    {
      title: 'Negative Sentiment',
      value: '53%',
      previousValue: 48,
      icon: <ThumbsDown className="h-5 w-5" />,
      gradient: 'rose',
      status: 'error' as const,
    },
    {
      title: 'Salary Cuts',
      value: salaryCuts?.value || 'Up to 50%',
      icon: <TrendingDown className="h-5 w-5" />,
      gradient: 'orange',
      status: 'error' as const,
    },
    {
      title: 'Mental Health Crisis',
      value: mentalHealth?.value || '57%',
      previousValue: 50,
      icon: <HeartPulse className="h-5 w-5" />,
      gradient: 'fuchsia',
      status: 'warning' as const,
    },
    {
      title: 'Fraud Reports',
      value: 'AED 3K-13K',
      icon: <AlertTriangle className="h-5 w-5" />,
      gradient: 'orange',
      status: 'error' as const,
    },
  ]

  return (
    <motion.div
      variants={fadeInUp}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    >
      {metrics.map((metric, idx) => (
        <MetricCard
          key={idx}
          title={metric.title}
          value={metric.value}
          previousValue={metric.previousValue}
          icon={metric.icon}
          gradient={metric.gradient}
          status={metric.status}
        />
      ))}
    </motion.div>
  )
}

export default RedditMetricsSection
