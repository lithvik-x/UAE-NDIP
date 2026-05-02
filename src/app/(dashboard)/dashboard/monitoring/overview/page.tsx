// @ts-nocheck
import type { Metadata } from 'next'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Radar, Eye, Globe, AlertTriangle, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monitoring Overview | UAE NDIP - Clairvoyance-CX',
  description: 'Monitoring overview — real-time media monitoring, social listening, dark web surveillance, emerging threat detection, and configurable alert thresholds.',
}

export default function MonitoringOverviewPage() {
  return (
    <div className="space-y-6 p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-premium-lg">
          <Radar className="h-7 w-7" />
        </div>
        <div>
          <Badge variant="outline" className="mb-2 border-orange-300/50 text-orange-700">Monitoring Overview</Badge>
          <h1 className="font-rajdhani text-4xl font-bold tracking-tight">Monitoring & Alerts</h1>
          <p className="text-platinum-500">Real-time threat detection and media surveillance</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: 'Active Sources', value: '52,401+', icon: Globe, gradient: 'from-orange-500 to-amber-500' },
          { label: 'Threats Detected', value: '147', icon: AlertTriangle, gradient: 'from-red-500 to-rose-500' },
          { label: 'Monitoring Coverage', value: '24/7', icon: Eye, gradient: 'from-emerald-500 to-teal-500' },
          { label: 'Response Time', value: '< 15s', icon: Activity, gradient: 'from-cyan-500 to-blue-500' },
        ].map(({ label, value, icon: Icon, gradient }) => (
          <div key={label} className="glass-premium rounded-2xl p-6 border border-white/20">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white mb-3`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="font-rajdhani text-3xl font-bold text-platinum-900">{value}</div>
            <div className="text-sm text-platinum-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <GlassPanel title="Monitoring Sections" description="Navigate to specialized monitoring modules" badge="10 Modules">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {['media', 'social', 'dark-web', 'emerging-threats', 'narrative', 'weekly', 'crisis', 'daily', 'gap', 'historical'].map((section) => (
            <a key={section} href={`/dashboard/monitoring/${section}`} className="rounded-xl border border-platinum-200/50 bg-platinum-50/50 p-4 text-center transition-all hover:border-orange-300/50 hover:bg-orange-50/50 hover:shadow-md">
              <span className="font-rajdhani text-sm font-semibold text-platinum-700 capitalize">{section.replace('-', ' ')}</span>
            </a>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
