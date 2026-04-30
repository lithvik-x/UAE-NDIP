import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronRight,
  Clock,
  Globe,
  Languages,
  Microscope,
  Radar,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard Hub | UAE National Digital Intelligence Platform',
  description: 'Clairvoyance-CX dashboard hub — access all ten intelligence sections: Entity Intelligence, Topics & Issues, Crisis Management, Social Media, Multi-Lingual, Stakeholders, Historical, Trends & Sentiment, Monitoring, and Verification.',
}

// Navigation section definitions
const navigationSections = [
  {
    title: 'Entity Intelligence',
    description: 'Federal officials, royal family, media, journalists, influencers, corporate, intl orgs',
    href: '/dashboard/entity/overview',
    icon: <Building2 className="h-7 w-7" />,
    gradient: 'gold',
    badge: 'Core',
  },
  {
    title: 'Topics',
    description: 'Economy, energy, environment, healthcare, politics, security, technology, more',
    href: '/dashboard/topics/economy',
    icon: <Target className="h-7 w-7" />,
    gradient: 'navy',
    badge: '20 Topics',
  },
  {
    title: 'Crisis Management',
    description: 'Alerts, climate, cyber, economic, energy, geopolitical, health, humanitarian',
    href: '/dashboard/crisis/overview',
    icon: <AlertTriangle className="h-7 w-7" />,
    gradient: 'rose',
    badge: '14 Areas',
  },
  {
    title: 'Social Media',
    description: 'Twitter/X, Instagram, Facebook, TikTok, YouTube, LinkedIn, Snapchat, more',
    href: '/dashboard/social/overview',
    icon: <Users className="h-7 w-7" />,
    gradient: 'indigo',
    badge: '18 Platforms',
  },
  {
    title: 'Languages',
    description: 'Arabic (MSA, Emirati, Gulf), English, French, Hindi, Urdu, Tagalog, Asian languages',
    href: '/dashboard/languages/overview',
    icon: <Languages className="h-7 w-7" />,
    gradient: 'cyan',
    badge: '12 Languages',
  },
  {
    title: 'Stakeholders',
    description: 'Government, corporate, civil society, diaspora, NGOs, religious, tribal, youth',
    href: '/dashboard/stakeholders/overview',
    icon: <Shield className="h-7 w-7" />,
    gradient: 'emerald',
    badge: '14 Groups',
  },
  {
    title: 'Historical Archive',
    description: 'Union formation, oil discovery, founding, reform, modernization, expansion',
    href: '/dashboard/historical/overview',
    icon: <BookOpen className="h-7 w-7" />,
    gradient: 'platinum',
    badge: 'Archive',
  },
  {
    title: 'Trends Analysis',
    description: 'Cultural, demographic, economic, environmental, political, social, tech trends',
    href: '/dashboard/trends/overview',
    icon: <TrendingUp className="h-7 w-7" />,
    gradient: 'purple',
    badge: '28 Categories',
  },
  {
    title: 'Monitoring',
    description: 'Dark web, emerging threats, media monitoring, social listening',
    href: '/dashboard/monitoring/overview',
    icon: <Radar className="h-7 w-7" />,
    gradient: 'orange',
    badge: '10 Modules',
  },
  {
    title: 'Verification',
    description: 'Fact-check, source verification, content authentication, claim validation',
    href: '/dashboard/verification/overview',
    icon: <Shield className="h-7 w-7" />,
    gradient: 'teal',
    badge: 'Tools',
  },
]

const recentAlerts = [
  {
    time: '12 min ago',
    severity: 'high',
    title: 'Regional Geopolitical Tension Detected',
    description: 'Escalating rhetoric detected across Gulf media channels regarding maritime boundaries',
    source: 'Crisis / Geopolitical',
  },
  {
    time: '47 min ago',
    severity: 'medium',
    title: 'Economic Indicator Shift',
    description: 'Oil price volatility linked to OPEC+ production discussion signals economic monitoring alert',
    source: 'Crisis / Economic',
  },
  {
    time: '2h ago',
    severity: 'low',
    title: 'Social Sentiment Anomaly - Tourism',
    description: 'Unusual positive sentiment spike detected around UAE tourism sector on regional social platforms',
    source: 'Social / Sentiment',
  },
  {
    time: '4h ago',
    severity: 'medium',
    title: 'Cyber Activity Detected',
    description: 'Elevated dark web scanning activity targeting UAE financial infrastructure detected',
    source: 'Monitoring / Dark Web',
  },
  {
    time: '6h ago',
    severity: 'low',
    title: 'Narrative Formation - Climate',
    description: 'New environmental narrative forming around COP28 follow-up commitments in regional media',
    source: 'Trends / Environment',
  },
]

const gradientMap: Record<string, string> = {
  gold: 'from-gold-500 to-amber-600',
  navy: 'from-navy-700 to-navy-600',
  rose: 'from-red-500 to-rose-600',
  indigo: 'from-indigo-600 to-indigo-500',
  cyan: 'from-cyan-600 to-blue-500',
  emerald: 'from-emerald-600 to-teal-500',
  platinum: 'from-platinum-500 to-slate-400',
  purple: 'from-purple-600 to-fuchsia-500',
  orange: 'from-orange-500 to-amber-500',
  teal: 'from-teal-600 to-cyan-500',
}

const badgeVariantMap: Record<string, 'gold' | 'glass-navy' | 'red' | 'indigo' | 'cyan' | 'emerald' | 'outline' | 'purple' | 'orange' | 'teal'> = {
  gold: 'gold',
  navy: 'glass-navy',
  rose: 'red',
  indigo: 'indigo',
  cyan: 'cyan',
  emerald: 'emerald',
  platinum: 'outline',
  purple: 'purple',
  orange: 'orange',
  teal: 'teal',
}

export default function DashboardHomePage() {
  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 to-amber-600 text-navy-950 shadow-premium-lg">
              <Shield className="h-6 w-6" />
            </div>
            <Badge variant="gold" className="text-sm font-semibold tracking-wide">
              EXECUTIVE OVERVIEW
            </Badge>
          </div>
          <h1 className="font-rajdhani text-4xl font-bold tracking-tight">
            <span className="gradient-text-gold">UAE NATIONAL DIGITAL</span>
          </h1>
          <h2 className="font-rajdhani text-3xl font-bold tracking-tight text-platinum-600">
            INTELLIGENCE PLATFORM
          </h2>
          <p className="mt-3 text-platinum-500">
            Clairvoyance-CX | A CryptoMize Product
          </p>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" className="gap-2 border-gold-300/50 text-gold hover:bg-gold/10">
            <Clock className="h-4 w-4" />
            Last Updated: Just now
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 shadow-premium-md">
            <Zap className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Data Categories"
          value="142"
          icon={<Globe className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Emirates Covered"
          value="7"
          icon={<Shield className="h-5 w-5" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Dashboard Sections"
          value="12"
          icon={<Radar className="h-5 w-5" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Active Alerts"
          value="23"
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="rose"
          status="warning"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Monitored Entities"
          value="8,420"
          icon={<Building2 className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Languages Tracked"
          value="12"
          icon={<Languages className="h-5 w-5" />}
          gradient="cyan"
          status="success"
        />
        <MetricCard
          title="Data Sources"
          value="15,200+"
          icon={<Globe className="h-5 w-5" />}
          gradient="teal"
          status="success"
        />
        <MetricCard
          title="Report Coverage"
          value="90 days"
          icon={<Microscope className="h-5 w-5" />}
          gradient="teal"
          status="success"
        />
      </div>

      {/* Section Navigation */}
      <GlassPanel
        title="Platform Sections"
        description="Navigate to any intelligence module"
        badge="10 Sections"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {navigationSections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-premium-lg hover:-translate-y-0.5 hover:scale-[1.01] cursor-pointer border-2 hover:border-gold-400/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[section.gradient]}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardHeader className="relative flex flex-row items-start justify-between pb-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradientMap[section.gradient]} text-white shadow-premium-md group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <Badge
                    variant={badgeVariantMap[section.gradient] as 'gold' | 'glass-navy' | 'red' | 'indigo' | 'cyan' | 'emerald' | 'outline' | 'purple' | 'orange' | 'teal'}
                    className="shrink-0 text-xs"
                  >
                    {section.badge}
                  </Badge>
                </CardHeader>
                <CardContent className="relative space-y-2">
                  <CardTitle className="font-rajdhani text-lg font-bold text-platinum-900 group-hover:text-gold-700 transition-colors">
                    {section.title}
                  </CardTitle>
                  <p className="line-clamp-2 text-xs text-platinum-600 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-1 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Navigate</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </GlassPanel>

      {/* Recent Activity & Quick Links */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Alerts */}
        <div className="lg:col-span-2">
          <GlassPanel
            title="Recent Intelligence"
            description="Latest alerts and activity across all monitoring channels"
            badge="Live"
          >
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-xl border p-4 transition-all hover:shadow-md ${
                    alert.severity === 'high'
                      ? 'border-red-200/50 bg-gradient-to-r from-red-50/60 to-orange-50/60'
                      : alert.severity === 'medium'
                      ? 'border-gold-200/50 bg-gradient-to-r from-gold-50/60 to-amber-50/60'
                      : 'border-emerald-200/50 bg-gradient-to-r from-emerald-50/60 to-teal-50/60'
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    alert.severity === 'high'
                      ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white'
                      : alert.severity === 'medium'
                      ? 'bg-gradient-to-br from-gold-500 to-amber-500 text-navy-950'
                      : 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white'
                  }`}>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-platinum-900 truncate">{alert.title}</h4>
                      <span className="text-xs text-platinum-400 shrink-0">{alert.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-platinum-600 leading-relaxed">{alert.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge
                        variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'warning' : 'success'}
                        className="text-xs"
                      >
                        {alert.severity === 'high' ? 'High Priority' : alert.severity === 'medium' ? 'Medium' : 'Low'}
                      </Badge>
                      <span className="text-xs text-platinum-400">{alert.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Quick Links Sidebar */}
        <div className="space-y-4">
          <GlassPanel
            title="Quick Access"
            description="Frequently visited sections"
          >
            <div className="space-y-2">
              {navigationSections.slice(0, 5).map((section) => (
                <Link key={section.href} href={section.href}>
                  <div className={`flex items-center gap-3 rounded-xl p-3 transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer border border-transparent hover:border-gold-200/50 bg-gradient-to-r ${section.gradient === 'gold' ? 'from-gold-50/80 to-amber-50/80 hover:from-gold-100/80 hover:to-amber-100/80' : 'from-platinum-50/80 to-slate-50/80 hover:from-platinum-100/80 hover:to-slate-100/80'}`}>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${gradientMap[section.gradient]} text-white shadow-premium-sm shrink-0`}>
                      {section.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-platinum-900">{section.title}</p>
                      <p className="text-xs text-platinum-600 truncate">{section.badge}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gold shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel
            title="Platform Status"
            description="System health indicators"
          >
            <div className="space-y-4">
              {[
                { label: 'Data Ingestion', value: 98, color: 'emerald' },
                { label: 'Monitoring Active', value: 94, color: 'cyan' },
                { label: 'Alert Systems', value: 100, color: 'gold' },
                { label: 'Report Generation', value: 87, color: 'indigo' },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-platinum-600">{item.label}</span>
                    <span className="text-sm font-semibold text-platinum-900">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-platinum-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        item.color === 'emerald' ? 'from-emerald-500 to-teal-400' :
                        item.color === 'cyan' ? 'from-cyan-500 to-blue-400' :
                        item.color === 'gold' ? 'from-gold-500 to-amber-400' :
                        'from-indigo-500 to-purple-400'
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  )
}
