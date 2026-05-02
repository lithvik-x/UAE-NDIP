
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Globe, Users, TrendingUp } from 'lucide-react'

export default function SocialOverviewPage() {
  return (
    <div className="space-y-6 p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-premium-lg">
          <Globe className="h-7 w-7" />
        </div>
        <div>
          <Badge variant="outline" className="mb-2 border-indigo-300/50 text-indigo-700">Social Media Overview</Badge>
          <h1 className="font-rajdhani text-4xl font-bold tracking-tight">Social Media Intelligence</h1>
          <p className="text-platinum-500">Cross-platform monitoring and sentiment analysis</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: 'Platforms Tracked', value: '18', icon: Globe, gradient: 'from-indigo-500 to-purple-500' },
          { label: 'Active Influencers', value: '2,847', icon: Users, gradient: 'from-pink-500 to-rose-500' },
          { label: 'Daily Mentions', value: '1.2M', icon: TrendingUp, gradient: 'from-cyan-500 to-blue-500' },
          { label: 'Sentiment Score', value: '+0.73', icon: BarChart3, gradient: 'from-emerald-500 to-teal-500' },
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

      <GlassPanel title="Platform Sections" description="Navigate to individual platform analysis pages" badge="18 Platforms">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {['twitter-x', 'instagram', 'facebook', 'youtube', 'tiktok', 'linkedin', 'snapchat', 'reddit', 'threads', 'whatsapp', 'telegram', 'sentiment', 'engagement', 'hashtags', 'audience', 'content', 'monitoring', 'influencers'].map((platform) => (
            <a key={platform} href={`/dashboard/social/${platform}`} className="rounded-xl border border-platinum-200/50 bg-platinum-50/50 p-4 text-center transition-all hover:border-indigo-300/50 hover:bg-indigo-50/50 hover:shadow-md">
              <span className="font-rajdhani text-sm font-semibold text-platinum-700 capitalize">{platform.replace('-', ' ')}</span>
            </a>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
